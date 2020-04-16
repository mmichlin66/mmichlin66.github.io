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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mimcssTypes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/rules.ts":
/*!**************************!*\
  !*** ./src/api/rules.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module defines types of object that represent CSS rules.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const StylesheetFuncs = __webpack_require__(/*! ../rules/Stylesheet */ "./src/rules/Stylesheet.ts");
const SelectorFuncs_1 = __webpack_require__(/*! ../styles/SelectorFuncs */ "./src/styles/SelectorFuncs.ts");
const AbstractRule_1 = __webpack_require__(/*! ../rules/AbstractRule */ "./src/rules/AbstractRule.ts");
const TagRule_1 = __webpack_require__(/*! ../rules/TagRule */ "./src/rules/TagRule.ts");
const ClassRule_1 = __webpack_require__(/*! ../rules/ClassRule */ "./src/rules/ClassRule.ts");
const IDRule_1 = __webpack_require__(/*! ../rules/IDRule */ "./src/rules/IDRule.ts");
const SelectorRule_1 = __webpack_require__(/*! ../rules/SelectorRule */ "./src/rules/SelectorRule.ts");
const AnimationRule_1 = __webpack_require__(/*! ../rules/AnimationRule */ "./src/rules/AnimationRule.ts");
const VarRule_1 = __webpack_require__(/*! ../rules/VarRule */ "./src/rules/VarRule.ts");
const ImportRule_1 = __webpack_require__(/*! ../rules/ImportRule */ "./src/rules/ImportRule.ts");
const FontFaceRule_1 = __webpack_require__(/*! ../rules/FontFaceRule */ "./src/rules/FontFaceRule.ts");
const NamespaceRule_1 = __webpack_require__(/*! ../rules/NamespaceRule */ "./src/rules/NamespaceRule.ts");
const PageRule_1 = __webpack_require__(/*! ../rules/PageRule */ "./src/rules/PageRule.ts");
const SupportsRule_1 = __webpack_require__(/*! ../rules/SupportsRule */ "./src/rules/SupportsRule.ts");
const MediaRule_1 = __webpack_require__(/*! ../rules/MediaRule */ "./src/rules/MediaRule.ts");
/**
 * Creates new abstract rule, which defines a styleset that can be extended by other style
 * rules. Abstract rules don't have selectors and are not inserted into DOM.
 */
function $abstract(style) { return new AbstractRule_1.AbstractRule(style); }
exports.$abstract = $abstract;
/**
 * Creates new tag rule. The tag parameter can be any of the HTML or SVG tags.
 */
function $tag(tag, style) { return new TagRule_1.TagRule(tag, style); }
exports.$tag = $tag;
/**
 * Creates new class rule. The class name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another class rule. The function can be called without parameters just to "declare"
 * the class. Such class can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
function $class(style, nameOverride) { return new ClassRule_1.ClassRule(style, nameOverride); }
exports.$class = $class;
/**
 * Creates new ID rule. The ID name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another ID rule. The function can be called without parameters just to "declare"
 * the ID. Such ID can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
function $id(style, nameOverride) { return new IDRule_1.IDRule(style, nameOverride); }
exports.$id = $id;
/**
 * Creates new selector rule. Selector can be specified as a string or via the $selector function.
 */
function $style(selector, style) { return new SelectorRule_1.SelectorRule(selector, style); }
exports.$style = $style;
/**
 * Creates new animation rule. The animation name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another animation rule. The function can be called without parameters just to
 * "declare" the animation. Such animation can be later used either in conditional grouping rules
 * or in derived style definition classes.
 */
function $keyframes(frames, nameOverride) { return new AnimationRule_1.AnimationRule(frames, nameOverride); }
exports.$keyframes = $keyframes;
/**
 * Creates new custom variable object that defines a custom CSS property. The variable name will
 * be created when the rule is processed as part of the style definition class. The name can be
 * also overridden by providing either an explicit name or another custom variable rule. The
 * function can be called without specifying the value just to "declare" the variable. Such
 * variable can be later used either in conditional grouping rules or in derived style definition
 * classes.
 */
function $var(template, propVal, nameOverride) { return new VarRule_1.VarRule(template, propVal, nameOverride); }
exports.$var = $var;
/**
 * Creates new import rule.
 */
function $import(url, mediaQuery, supportsQuery) { return new ImportRule_1.ImportRule(url, mediaQuery, supportsQuery); }
exports.$import = $import;
/**
 * Creates new fon-face rule.
 */
function $fontface(fontface) { return new FontFaceRule_1.FontFaceRule(fontface); }
exports.$fontface = $fontface;
/**
 * Creates new namespace rule.
 */
function $namespace(namespace, prefix) { return new NamespaceRule_1.NamespaceRule(namespace, prefix); }
exports.$namespace = $namespace;
/**
 * Creates new page rule.
 */
function $page(style, pseudoClass) { return new PageRule_1.PageRule(style, pseudoClass); }
exports.$page = $page;
/**
 * Creates new supports rule.
 */
function $supports(query, definitionClass) { return new SupportsRule_1.SupportsRule(query, definitionClass); }
exports.$supports = $supports;
/**
 * Creates new media rule.
 */
function $media(query, definitionClass) { return new MediaRule_1.MediaRule(query, definitionClass); }
exports.$media = $media;
/**
 * Returns a string representation of a selector using the given template string with optional
 * placeholders (e.g. {0}), which will be replaced by names of tags, classes and IDs and other
 * possible types.
 */
function $selector(template, ...args) {
    return !template ? "" : args.length === 0 ? template : new SelectorFuncs_1.SelectorProxy(template, args);
}
exports.$selector = $selector;
/**
 * Processes the given stylesheet definition and returns the Stylesheet object that contains
 * names of IDs, classes and keyframes and allows style manipulations. For a given stylesheet
 * definition class there is a single stylesheet object, no matter how many times this function
 * is invoked.
 */
function $use(stylesheetDefinitionClass) {
    return StylesheetFuncs.use(stylesheetDefinitionClass);
}
exports.$use = $use;
/**
 * Activates the given stylesheet and inserts all its rules into DOM. If the input object is not
 * a stylesheet but a style definition class, obtain stylesheet by calling the $use function.
 * Note that each stylesheet object maintains a reference counter of how many times it was
 * activated and deactivated. The rules are inserted to DOM only when this reference counter goes
 * up to 1.
 */
function $activate(stylesheetOrDefinition) {
    return StylesheetFuncs.activate(stylesheetOrDefinition);
}
exports.$activate = $activate;
/**
 * Deactivates the given stylesheet by removing its rules from DOM. Note that each stylesheet
 * object maintains a reference counter of how many times it was activated and deactivated. The
 * rules are removed from DOM only when this reference counter goes down to 0.
 */
function $deactivate(stylesheet) {
    return StylesheetFuncs.deactivate(stylesheet);
}
exports.$deactivate = $deactivate;
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
function $enableOptimizedStyleNames(enable, prefix) {
    return StylesheetFuncs.enableOptimizedStyleNames(enable, prefix);
}
exports.$enableOptimizedStyleNames = $enableOptimizedStyleNames;


/***/ }),

/***/ "./src/api/sh.ts":
/*!***********************!*\
  !*** ./src/api/sh.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorFuncs = __webpack_require__(/*! ../styles/ColorFuncs */ "./src/styles/ColorFuncs.ts");
const ImageFuncs = __webpack_require__(/*! ../styles/ImageFuncs */ "./src/styles/ImageFuncs.ts");
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./src/styles/UtilFuncs.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
/**
 * The sh class stands for Style Helper andcontains static helper functions that are used whenever
 * there is a need to produce CSS string value based on more complicated type(s).
 */
class sh {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Utilities
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Creates an IStringProxy object from the given string or another IStringProxy object.
     */
    static raw(s) {
        return typeof s === "string" ? new UtilFuncs_1.StringProxy(s) : s;
    }
    /**
     * Converts the given value corresponding to the given style property to a CSS string.
     * @param stylePropName Style property name that determines how the value should be converted
     * to a CSS compliant string.
     * @param stylePropValue Value to convert.
     */
    static val(stylePropName, stylePropValue) {
        return StyleFuncs_1.stylePropToCssString(stylePropName, stylePropValue, true);
    }
    /**
     * Creates an IUrlProxy object representing the CSS `url()` function. The string parameter
     * will be wrapped in a "url()" invocation unless it already is.
     */
    static url(val) {
        return new UtilFuncs_1.UrlProxy(val);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Colors
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Converts the color specified as red, green, blue separation values and an optional alpha
     * mask to a CSS color representation. This method should be used when defining CSS color
     * values in styleset properties. Each color separation can be represented as a number or a
     * string with the following meaning:
     *   - Integer number 0 to 255.
     *   - Floating number 0.0 to 1.0 non-inclusive, which is treated as percentage.
     *   - String which is used as is.
     *
     * The alpha mask can be one of the following:
     *   - Number 0 to 1 inclusive, which is treated as percentage.
     *   - String which is used as is.
     *
     * @param r Red separation value.
     * @param g Green separation vaue.
     * @param b Blue separation value.
     * @param a Optional alpha mask as a percentage value.
     */
    static rgb(r, g, b, a) {
        return new ColorFuncs.RgbProxy(r, g, b, a);
    }
    /**
     * Converts the color specified as hue-saturation-lightness components and an optional alpha
     * mask to a CSS color representation. This method should be used when defining CSS color
     * values in styleset properties.
     *
     * The alpha mask can be one of the following:
     *   - Number 0 to 1 inclusive, which is treated as percentage.
     *   - String which is used as is.
     *
     * @param h Hue component as an angle value.
     * @param s Saturation as a percentage value.
     * @param l Lightness component as a percentage value.
     * @param a Optional alpha mask as a percentage value.
     */
    static hsl(h, s, l, a) {
        return new ColorFuncs.HslProxy(h, s, l, a);
    }
    /**
     * Converts the given color and an optional alpha mask to the CSS Color representation. This
     * method should be used when defining CSS color values in styleset properties.
     * The color can be specified as a numeric value or as a string color name.
     *
     * The alpha mask can be one of the following:
     *   - Number 0 to 1 inclusive, which is treated as percentage.
     *   - String which is used as is.
     *
     * @param c
     * @param a
     */
    static alpha(c, a) {
        return new ColorFuncs.AlphaProxy(c, a);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Images
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Creates an IImageProxy object representing the `linear-gradient()` CSS function.
     */
    static linearGradient(angle, ...stopsOrHints) {
        return new ImageFuncs.LinearGradientProxy("linear-gradient", angle, stopsOrHints);
    }
    /**
     * Creates an IImageProxy object representing the `repeating-linear-gradient()` CSS function.
     */
    static repeatingLinearGradient(angle, ...stopsOrHints) {
        return new ImageFuncs.LinearGradientProxy("repeating-linear-gradient", angle, stopsOrHints);
    }
    /**
     * Creates an IImageProxy object representing the `radial-gradient()` CSS function.
     */
    static radialGradient(shape, extent, pos, ...stopsOrHints) {
        return new ImageFuncs.RadialGradientProxy("radial-gradient", shape, extent, pos, stopsOrHints);
    }
    /**
     * Creates an IImageProxy object representing the `repeating-radial-gradient()` CSS function.
     */
    static repeatingRadialGradient(shape, extent, pos, ...stopsOrHints) {
        return new ImageFuncs.RadialGradientProxy("repeating-radial-gradient", shape, extent, pos, stopsOrHints);
    }
    /**
     * Creates an IImageProxy object representing the`conic-gradient()`  CSS function.
     */
    static conicGradient(angle, pos, ...stopsOrHints) {
        return new ImageFuncs.ConicGradientProxy(angle, pos, stopsOrHints);
    }
    /**
     * Creates an IImageProxy object representing the `cross-fade()` CSS function.
     */
    static crossFade(...args) {
        return new ImageFuncs.CrossFadeProxy(args);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Animations
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Returns an object that can be assigned to the animation property.
     * @param name Animation name. This can be either a string or a reference to the animation
     * rule definition.
     * @param duration Animation duration. Integer numbers for milliseconds, floating point
     * numbers for seconds. The default value is 1 second.
     * @param func Timing function. Default value is "ease". This can be one of the following types:
     *   - one of pre-defined timing function names.
     *   - a number of steps in the steps function. The step position will be set to jump-start.
     *   - one- or two-item array that defines a step function. The first item defines the number
     *     of steps. The optional second item is one of pre-defined step postion names.
     *   - four-item array that defines cubic-bezier function.
     * @param delay Delay before the animation starts. Integer numbers for milliseconds, floating
     * point numbers for seconds. The default value is 0.
     * @param count Number of iterations the animation shold run. The default value is 1.
     * @param direction Animation direction. The default value is "normal".
     * @param mode Animation fill mode. The default value is "none".
     * @param state Animation state. The default value is "running".
     */
    static animation(name, duration = 1000, func = "ease", delay = 0, count = 1, direction = "normal", mode = "none", state = "running") {
        return { name, duration, func, delay, count, direction, state, mode };
    }
}
exports.sh = sh;


/***/ }),

/***/ "./src/api/utils.ts":
/*!**************************!*\
  !*** ./src/api/utils.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs = __webpack_require__(/*! ../styles/UtilFuncs */ "./src/styles/UtilFuncs.ts");
/**
 * The Num object contains static methods that implement CSS mathematic functions on the <number>
 * CSS type. When arguments for these functions are of the number JavaScript type they are
 * converted to strings without appending any units to them.
 */
exports.Num = new UtilFuncs.CssNumberMath();
/**
 * The Len object contains static methods that implement CSS mathematic functions on the <length>
 * CSS type by appending a length unit suffix.
 * Integer numbers use "px"; floating point numbers use "em".
 */
exports.Len = new UtilFuncs.CssLengthMath();
/**
 * The Angle object contains static methods that implement CSS mathematic functions on the <angle>
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "rad".
 */
exports.Angle = new UtilFuncs.CssAngleMath();
/**
 * The Time object contains static methods that implement CSS mathematic functions on the <time>
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
exports.Time = new UtilFuncs.CssTimeMath();
/**
 * The Resolution object contains static methods that implement CSS mathematic functions on the
 * <resolution> CSS type by appending a resolution unit suffix.
 * Integer numbers use "dpi"; floating point numbers use "dpcm".
 */
exports.Resolution = new UtilFuncs.CssResolutionMath();
/**
 * The Frequency object contains static methods that implement CSS mathematic functions on the
 * <frequency> CSS type by appending a frequency unit suffix.
 * Integer numbers use "Hz"; floating point numbers use "kHz".
 */
exports.Frequency = new UtilFuncs.CssFrequencyMath();
/**
 * The Fraction object contains static methods that implement CSS mathematic functions on the
 * <fraction> CSS type by appending a fraction unit suffix.
 * Integer numbers use "fr"; floating point numbers use "%".
 */
exports.Fraction = new UtilFuncs.CssFractionMath();
/**
 * The Percent object contains static methods that implement CSS mathematic functions on the
 * <percentage> CSS type by appending a "%" unit suffix.
 */
exports.Percent = new UtilFuncs.CssPercentMath();


/***/ }),

/***/ "./src/mimcssTypes.ts":
/*!****************************!*\
  !*** ./src/mimcssTypes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimcss
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./styles/UtilTypes */ "./src/styles/UtilTypes.ts"));
__export(__webpack_require__(/*! ./styles/ColorTypes */ "./src/styles/ColorTypes.ts"));
__export(__webpack_require__(/*! ./rules/RuleTypes */ "./src/rules/RuleTypes.ts"));
__export(__webpack_require__(/*! ./api/utils */ "./src/api/utils.ts"));
__export(__webpack_require__(/*! ./api/rules */ "./src/api/rules.ts"));
__export(__webpack_require__(/*! ./api/sh */ "./src/api/sh.ts"));


/***/ }),

/***/ "./src/rules/AbstractRule.ts":
/*!***********************************!*\
  !*** ./src/rules/AbstractRule.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
/**
 * The AbstractRule class describes a styleset that can only be used as a base for other style
 * rules.
 */
class AbstractRule extends StyleRule_1.StyleRule {
    constructor(style) {
        super(51 /* ABSTRACT */, style);
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new AbstractRule();
        newRule.copyFrom(this);
        return newRule;
    }
    // Overrides the StyleRule's implementation to do nothing. No CSSStyleRule is created for
    // abstract rules.
    insert(parent) {
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return null;
    }
    /** Only needed to distinguish from other rules */
    get isAbstractRule() { return true; }
}
exports.AbstractRule = AbstractRule;


/***/ }),

/***/ "./src/rules/AnimationRule.ts":
/*!************************************!*\
  !*** ./src/rules/AnimationRule.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
/**
 * The AnimationRule class describes a @keyframes CSS rule.
 */
class AnimationRule extends Rule_1.Rule {
    constructor(frames, nameOverride) {
        super(5 /* ANIMATION */);
        if (frames)
            this.frameRules = frames.map((keyframe) => new AnimationFrameRule(keyframe));
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
        let newRule = new AnimationRule();
        if (this.frameRules)
            newRule.frameRules = this.frameRules.map((keyframeRule) => keyframeRule.clone());
        newRule.nameOverride = this.nameOverride;
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (!this.frameRules)
            return;
        this.cssRule = Rule_1.Rule.addRuleToDOM(`@keyframes ${this.name} {}`, parent);
        let cssKeyframesRule = this.cssRule;
        for (let keyframeRule of this.frameRules) {
            try {
                cssKeyframesRule.appendRule(keyframeRule.toCssString());
            }
            catch (x) {
                console.error("Cannot add CSS keyframe rule", x);
            }
        }
    }
    /** Flag indicating that this object implements the IAnimationNameProxy interface */
    get isAnimationNameProxy() { return true; }
    /** Converts internally held value(s) to string - returns the name of the animation */
    valueToString() { return this.name; }
    /** SOM keyframes rule */
    get cssKeyframesRule() { return this.cssRule; }
}
exports.AnimationRule = AnimationRule;
/**
 * The AnimationFrameRule class represents a single keyframe clause in the animation rule.
 */
class AnimationFrameRule extends StyleRule_1.StyleRule {
    constructor(frame) {
        super(6 /* KEYFRAME */, frame ? frame[1] : undefined);
        if (frame)
            this.waypoint = typeof frame[0] === "string" ? frame[0] : frame[0] + "%";
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new AnimationFrameRule();
        newRule.copyFrom(this);
        newRule.waypoint = this.waypoint;
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return this.waypoint;
    }
}


/***/ }),

/***/ "./src/rules/ClassRule.ts":
/*!********************************!*\
  !*** ./src/rules/ClassRule.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
/**
 * The ClassRule class describes a styleset that applies to elements identified by a CSS class.
 */
class ClassRule extends StyleRule_1.StyleRule {
    constructor(style, nameOverride) {
        super(2 /* CLASS */, style);
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        [this.name, this.cssName] = Rule_1.createNames(owner, ruleName, this.nameOverride, ".");
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new ClassRule(undefined, this.nameOverride);
        newRule.copyFrom(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return this.cssName;
    }
    /** Only needed to distinguish from other rules */
    get isClassRule() { return true; }
}
exports.ClassRule = ClassRule;


/***/ }),

/***/ "./src/rules/FontFaceRule.ts":
/*!***********************************!*\
  !*** ./src/rules/FontFaceRule.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FontFaceFuncs_1 = __webpack_require__(/*! ../styles/FontFaceFuncs */ "./src/styles/FontFaceFuncs.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
/**
 * The FontFaceRule class describes a @font-face CSS rule.
 */
class FontFaceRule extends Rule_1.Rule {
    constructor(fontface) {
        super(9 /* FONTFACE */);
        this.fontface = fontface;
    }
    // Creates a copy of the rule.
    clone() {
        return new FontFaceRule(this.fontface);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        this.cssRule = Rule_1.Rule.addRuleToDOM(`@font-face ${FontFaceFuncs_1.fontFaceToCssString(this.fontface)}`, parent);
    }
    /** SOM font-face rule */
    get cssFontFaceRule() { return this.cssRule; }
}
exports.FontFaceRule = FontFaceRule;


/***/ }),

/***/ "./src/rules/GroupRule.ts":
/*!********************************!*\
  !*** ./src/rules/GroupRule.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RuleContainer_1 = __webpack_require__(/*! ./RuleContainer */ "./src/rules/RuleContainer.ts");
/**
 * The GroupRule class serves as a base class for all grouping CSS rules.
 */
class GroupRule extends RuleContainer_1.RuleContainer {
    constructor(type, definitionClass) {
        super(type);
        this.definitionClass = definitionClass;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        // process sub-rules
        this.processRules();
    }
    // Returns an instance of the definition class or null if failure
    createDefinitionInstance() {
        try {
            return new this.definitionClass(this.owner.getDefinitionInstance());
        }
        catch (err) {
            console.error(`Error instantiating Group Rule Definition Class '${this.definitionClass.name}'`, err);
            return null;
        }
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        this.cssRule = this.insertGroupingRule(parent);
        // insert sub-rules
        if (this.cssRule)
            this.insertRules(this.cssRule);
    }
    // Clers the CSS rule object.
    clear() {
        super.clear();
        // clear sub-rules
        this.clearRules();
    }
}
exports.GroupRule = GroupRule;


/***/ }),

/***/ "./src/rules/IDRule.ts":
/*!*****************************!*\
  !*** ./src/rules/IDRule.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
/**
 * The IDRule class describes a styleset that applies to elements identified by an ID.
 */
class IDRule extends StyleRule_1.StyleRule {
    constructor(style, nameOverride) {
        super(3 /* ID */, style);
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        [this.name, this.cssName] = Rule_1.createNames(owner, ruleName, this.nameOverride, "#");
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new IDRule(undefined, this.nameOverride);
        newRule.copyFrom(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return this.cssName;
    }
    /** Only needed to distinguish from other rules */
    get isIDRule() { return true; }
}
exports.IDRule = IDRule;


/***/ }),

/***/ "./src/rules/ImportRule.ts":
/*!*********************************!*\
  !*** ./src/rules/ImportRule.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const MediaFuncs_1 = __webpack_require__(/*! ../styles/MediaFuncs */ "./src/styles/MediaFuncs.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
/**
 * The ImportRule class describes a CSS @import rule.
 */
class ImportRule extends Rule_1.Rule {
    constructor(url, mediaQuery, supportsQuery) {
        super(10 /* IMPORT */);
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
                : StyleFuncs_1.supportsQueryToCssString(this.supportsQuery);
        if (supportsQueryString && !supportsQueryString.startsWith("supports"))
            supportsQueryString = `supports( ${supportsQueryString} )`;
        let mediaQueryString = !this.mediaQuery
            ? ""
            : typeof this.mediaQuery === "string"
                ? this.mediaQuery
                : MediaFuncs_1.mediaQueryToCssString(this.mediaQuery);
        this.cssRule = Rule_1.Rule.addRuleToDOM(`@import ${url} ${supportsQueryString} ${mediaQueryString}`, parent);
    }
    /** SOM import rule */
    get cssImportRule() { return this.cssRule; }
}
exports.ImportRule = ImportRule;


/***/ }),

/***/ "./src/rules/MediaRule.ts":
/*!********************************!*\
  !*** ./src/rules/MediaRule.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const GroupRule_1 = __webpack_require__(/*! ./GroupRule */ "./src/rules/GroupRule.ts");
const MediaFuncs_1 = __webpack_require__(/*! ../styles/MediaFuncs */ "./src/styles/MediaFuncs.ts");
/**
 * The MediaRule class describes a CSS @media rule.
 */
class MediaRule extends GroupRule_1.GroupRule {
    constructor(query, definitionClass) {
        super(8 /* MEDIA */, definitionClass);
        this.query = query;
    }
    // Creates a copy of the rule.
    clone() {
        return new MediaRule(this.query, this.definitionClass);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insertGroupingRule(parent) {
        let queryString = typeof this.query === "string" ? this.query : MediaFuncs_1.mediaQueryToCssString(this.query);
        return Rule_1.Rule.addRuleToDOM(`@media ${queryString} {}`, parent);
    }
    /** SOM media rule */
    get cssMediaRule() { return this.cssRule; }
}
exports.MediaRule = MediaRule;


/***/ }),

/***/ "./src/rules/NamespaceRule.ts":
/*!************************************!*\
  !*** ./src/rules/NamespaceRule.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
/**
 * The NamespaceRule class describes a CSS @namespace rule.
 */
class NamespaceRule extends Rule_1.Rule {
    constructor(namespace, prefix) {
        super(11 /* NAMESPACE */);
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
    /** SOM namespace rule */
    get cssNamespaceRule() { return this.cssRule; }
}
exports.NamespaceRule = NamespaceRule;


/***/ }),

/***/ "./src/rules/PageRule.ts":
/*!*******************************!*\
  !*** ./src/rules/PageRule.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
/**
 * The PageRule class represents the CSS @page rule.
 */
class PageRule extends StyleRule_1.StyleRule {
    constructor(style, pseudoClass) {
        super(12 /* PAGE */, style);
        this.pseudoClass = pseudoClass;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new PageRule(undefined, this.pseudoClass);
        newRule.copyFrom(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return `@page ${this.pseudoClass ? this.pseudoClass : ""}`;
    }
    /** SOM page rule */
    get cssPageRule() { return this.cssRule; }
}
exports.PageRule = PageRule;


/***/ }),

/***/ "./src/rules/Rule.ts":
/*!***************************!*\
  !*** ./src/rules/Rule.ts ***!
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
    constructor(ruleType) {
        this.ruleType = ruleType;
    }
    // Processes the rule.
    process(owner, ruleName) {
        this.owner = owner;
        this.ruleName = ruleName;
    }
    // Creates a copy of the rule.
    clone() { return null; }
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
    let name = !nameOverride
        ? owner.getScopedRuleName(ruleName)
        : typeof nameOverride === "string"
            ? nameOverride
            : nameOverride.name;
    return [name, cssPrefix ? name.startsWith(cssPrefix) ? name : cssPrefix + name : name];
}
exports.createNames = createNames;


/***/ }),

/***/ "./src/rules/RuleContainer.ts":
/*!************************************!*\
  !*** ./src/rules/RuleContainer.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const ClassRule_1 = __webpack_require__(/*! ./ClassRule */ "./src/rules/ClassRule.ts");
const IDRule_1 = __webpack_require__(/*! ./IDRule */ "./src/rules/IDRule.ts");
const AnimationRule_1 = __webpack_require__(/*! ./AnimationRule */ "./src/rules/AnimationRule.ts");
const VarRule_1 = __webpack_require__(/*! ./VarRule */ "./src/rules/VarRule.ts");
const ImportRule_1 = __webpack_require__(/*! ./ImportRule */ "./src/rules/ImportRule.ts");
const NamespaceRule_1 = __webpack_require__(/*! ./NamespaceRule */ "./src/rules/NamespaceRule.ts");
/**
 * The RuleContainer class is a base for classes that contain CSS rules; that is, stylesheet and
 * grouping rules. The RuleContainer class implements parsing form of a rule definition class or
 * object.
 */
class RuleContainer extends Rule_1.Rule {
    constructor(type) {
        super(type);
    }
    /** Map of names of properties defining class rules to actual class names. */
    get classes() { return this._classes; }
    /** Map of names of properties defining ID rules to actual IDs. */
    get ids() { return this._ids; }
    /** Map of names of properties defining animation rules to actual animation names. */
    get animations() { return this._animations; }
    /** Map of names of properties defining custom property rules to the IVarRule objects. */
    get vars() { return this._vars; }
    /** Map of property names to rule objects. */
    get rules() { return this._rules; }
    /**  Map of property names to external stylesheets created using the $use function. */
    get uses() { return this._uses; }
    // Creates the stylesheet definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    processRules() {
        // check if the definition has already been processed
        if (this.isProcessed)
            return;
        this.allRules = [];
        this.importRules = [];
        this.namespaceRules = [];
        this.allNames = {};
        this._classes = {};
        this._ids = {};
        this._animations = {};
        this._vars = {};
        this._rules = {};
        this._uses = {};
        // get the "rule definition" object whose properties are the rule objects
        let rulesDef = this.createDefinitionInstance();
        if (!rulesDef)
            return;
        // loop over the properties of the definition object and process those that are rules,
        // custom var definitions and arrays.
        for (let propName in rulesDef) {
            let propVal = rulesDef[propName];
            if (propVal instanceof VarRule_1.VarRule)
                this.processVarRule(propName, propVal);
            else if (propVal instanceof Rule_1.Rule)
                this.processNamedRule(propName, propVal);
            else if (Array.isArray(propVal))
                this.processUnnamedRules(propVal);
        }
    }
    // Processes custom CSS property.
    processVarRule(propName, varObj) {
        // if the object is already assigned to a stylesheet, we create a clone of the
        // rule and assign it to our stylesheet.
        if (varObj.container)
            varObj = varObj.clone();
        varObj.process(this, this.owner, propName);
        this.allNames[propName] = varObj.name;
        this._vars[propName] = varObj;
    }
    // Processes the given Rule-derived object.
    processNamedRule(propName, rule) {
        // Stylesheet derives from Rule (via RuleContainer); however, it is not a real rule.
        // We inform our owner stylesheet about the "imported" stylesheet so that when the owner
        // stylesheet is activated, the imported one is activated too.
        if (rule.ruleType === 50 /* SCOPE */) {
            this._uses[propName] = rule;
            this.owner.addExternalStylesheet(rule);
            return;
        }
        // if the rule object is already assigned to a stylesheet, we create a clone of the
        // rule and assign it to our stylesheet.
        if (rule.owner)
            rule = rule.clone();
        rule.process(this.owner, propName);
        // remember the rule
        this._rules[propName] = rule;
        this.allRules.push(rule);
        // put rules and their names into buckets
        if (rule instanceof ClassRule_1.ClassRule) {
            this.allNames[propName] = rule.name;
            this._classes[propName] = rule.name;
        }
        else if (rule instanceof IDRule_1.IDRule) {
            this.allNames[propName] = rule.name;
            this._ids[propName] = rule.name;
        }
        else if (rule instanceof AnimationRule_1.AnimationRule) {
            this.allNames[propName] = rule.name;
            this._animations[propName] = rule.name;
        }
        else if (rule instanceof ImportRule_1.ImportRule)
            this.importRules.push(rule);
        else if (rule instanceof NamespaceRule_1.NamespaceRule)
            this.namespaceRules.push(rule);
    }
    // Processes rules from the given array.
    processUnnamedRules(propVals) {
        if (!propVals || propVals.length === 0)
            return;
        // loop over the properties of the definition object and process those that are rules.
        for (let propVal of propVals) {
            if (!(propVal instanceof Rule_1.Rule))
                continue;
            let rule = propVal;
            // Stylesheet derives from Rule (via RuleContainer); however, it is not a real rule.
            // We inform our owner stylesheet about the "imported" stylesheet so that when the owner
            // stylesheet is activated, the imported one is activated too.
            if (rule.ruleType === 50 /* SCOPE */) {
                this.owner.addExternalStylesheet(rule);
                continue;
            }
            // if the rule object is already assigned to a stylesheet, we create a clone of the
            // rule and assign it to our stylesheet.
            if (rule.owner)
                rule = rule.clone();
            rule.process(this.owner, null);
            this.allRules.push(rule);
            if (rule instanceof ImportRule_1.ImportRule)
                this.importRules.push(rule);
            else if (rule instanceof NamespaceRule_1.NamespaceRule)
                this.namespaceRules.push(rule);
        }
    }
    // Inserts all rules defined in this container to either the style sheet or grouping rule.
    insertRules(parent) {
        // insert @import and @namespace rules as they must be before other rules. If the parent is a grouping
        // rule, don't insert @import rules at all
        if (parent instanceof CSSStyleSheet) {
            this.importRules && this.importRules.forEach(rule => rule.insert(parent));
            this.namespaceRules && this.namespaceRules.forEach(rule => rule.insert(parent));
        }
        // isert our custom variables in a ":root" rule
        let varNames = Object.keys(this._vars);
        if (varNames.length > 0) {
            this.cssCustomVarStyleRule = Rule_1.Rule.addRuleToDOM(`:root {${varNames.map((varName) => this._vars[varName].toCssString()).join(";")}}`, parent);
        }
        // insert all other rules
        for (let rule of this.allRules) {
            if (!(rule instanceof ImportRule_1.ImportRule || rule instanceof NamespaceRule_1.NamespaceRule))
                rule.insert(parent);
        }
    }
    // Clears all CSS rule objects defined in this container.
    clearRules() {
        this.cssCustomVarStyleRule = null;
        // insert all other rules
        this.allRules.forEach(rule => rule.clear());
    }
    // Sets the given value for the property with the given name
    setCustomVarValue(name, value, important) {
        if (this.cssCustomVarStyleRule)
            this.cssCustomVarStyleRule.style.setProperty(name, value, important ? "!important" : null);
    }
    // Helper properties
    get isProcessed() { return !!this._rules; }
}
exports.RuleContainer = RuleContainer;


/***/ }),

/***/ "./src/rules/RuleTypes.ts":
/*!********************************!*\
  !*** ./src/rules/RuleTypes.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module defines types and interfaces that represent CSS rules.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The NestedGroup class is a base for all classes that define nested grouping rules. Use it the
 * following way:
 *
 * ```typescript
 * class MyStyles
 * {
 *     // 8px padding on regular devices
 *     defaultPadding = $var( "padding", 8)
 *
 *     ifNarrowDevice = $media( {maxWidth: 600 },
 *         class extends NestedGroup<MyStyles>
 *         {
 *             // 4px padding on narrow devices
 *             defaultPadding = $var( "padding", Len.calc( "{0} / 2", this.owner.defaultPadding))
 *         }
 *     )
 * }
 * ```
 * @typeparam O Stylesheet definition class, which is the owner of this grouping rule.
 */
class NestedGroup {
    constructor(owner) {
        this.owner = owner;
    }
}
exports.NestedGroup = NestedGroup;


/***/ }),

/***/ "./src/rules/SelectorRule.ts":
/*!***********************************!*\
  !*** ./src/rules/SelectorRule.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
const SelectorFuncs_1 = __webpack_require__(/*! ../styles/SelectorFuncs */ "./src/styles/SelectorFuncs.ts");
/**
 * The SelectorRule type describes a styleset that applies to elements identified by a CSS selector.
 */
class SelectorRule extends StyleRule_1.StyleRule {
    constructor(selector, style) {
        super(4 /* SELECTOR */, style);
        this.selector = selector;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new SelectorRule(this.selector);
        newRule.copyFrom(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return SelectorFuncs_1.selectorToCssString(this.selector);
    }
    /** CSS rule selector string */
    get selectorText() { return SelectorFuncs_1.selectorToCssString(this.selector); }
}
exports.SelectorRule = SelectorRule;


/***/ }),

/***/ "./src/rules/StyleRule.ts":
/*!********************************!*\
  !*** ./src/rules/StyleRule.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
const SelectorFuncs_1 = __webpack_require__(/*! ../styles/SelectorFuncs */ "./src/styles/SelectorFuncs.ts");
/**
 * The StyleRule class is used as a base class for rules that contain a style rule. This class
 * implements the parsing of the ExtendedStyleset object.
 */
class StyleRule extends Rule_1.Rule {
    // The styleset can be an ExtendedStyleset for many rules; however, for some it is just
    // of the Styleset type.
    constructor(type, styleset) {
        super(type);
        if (styleset)
            this.parseInputStyleset(styleset);
    }
    /**
     * Goes over properties in the given styleset and parses them into proper styleset, set of
     * important properties and nested rules.
     */
    parseInputStyleset(inputStyleset) {
        // prepare local variables to accumulate parsing results. We do it in local varibales
        // because in case there are parents, we want first copy properties from them so that
        // our own properties can override them.
        let parentRules;
        let nestedRules;
        let styleset = {};
        for (let propName in inputStyleset) {
            let propVal = inputStyleset[propName];
            if (propName === "+") {
                // the value is a single or an array of StyleRules to copy properties from
                let extendsPropVal = propVal;
                if (extendsPropVal instanceof StyleRule)
                    parentRules = [extendsPropVal];
                else
                    parentRules = extendsPropVal;
            }
            else if (propName.startsWith(":")) {
                // value is a styleset for a pseudo class or pseudo element
                if (!nestedRules)
                    nestedRules = [];
                nestedRules.push(new NestedRule(this, "&" + propName, propVal));
            }
            else if (propName === "&") {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    if (!nestedRules)
                        nestedRules = [];
                    tuples.forEach(tuple => nestedRules.push(new NestedRule(this, tuple[0], tuple[1])));
                }
            }
            else {
                // copy the property value to our internal styleset
                styleset[propName] = propVal;
            }
        }
        // by now we went over all properties of the input styleset. If we have parent style
        // rules, copy styleset, important and nested rules data from them.
        if (parentRules && parentRules.length > 0) {
            parentRules.forEach(parent => {
                if (parent.styleset)
                    this.styleset = StyleFuncs_1.mergeStylesets(this.styleset, parent.styleset);
                if (parent.nestedRules && parent.nestedRules.length > 0) {
                    if (!this.nestedRules)
                        this.nestedRules = [];
                    parent.nestedRules.forEach(nestedRule => {
                        let newNestedRule = nestedRule.clone();
                        newNestedRule.containingRule = this;
                        this.nestedRules.push(newNestedRule);
                    });
                }
            });
        }
        // now that we copied data from the parents (if any) we need to copy over our own
        if (styleset && Object.keys(styleset).length > 0) {
            if (!this.styleset)
                this.styleset = styleset;
            else
                StyleFuncs_1.mergeStylesets(this.styleset, styleset);
        }
        if (nestedRules && nestedRules.length > 0) {
            if (!this.nestedRules)
                this.nestedRules = nestedRules;
            else
                nestedRules.forEach(nestedRule => this.nestedRules.push(nestedRule));
        }
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        // if nested rules exist, process them under the same container
        if (this.nestedRules)
            this.nestedRules.forEach(nestedRule => nestedRule.process(owner, null));
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        this.styleset = src.styleset;
        // if nested rules exist, clone them
        if (src.nestedRules) {
            this.nestedRules = [];
            for (let srcNestedRule of src.nestedRules) {
                let newNestedRule = srcNestedRule.clone();
                newNestedRule.containingRule = this;
                this.nestedRules.push(newNestedRule);
            }
        }
    }
    // Converts the rule to CSS string representing the rule.
    toCssString() {
        return this.styleset
            ? `${this.getSelectorString()} ${StyleFuncs_1.stylesetToCssString(this.styleset)}`
            : null;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (this.styleset)
            this.cssRule = Rule_1.Rule.addRuleToDOM(this.toCssString(), parent);
        // if nested rules exist, insert them under the same parent
        if (this.nestedRules)
            this.nestedRules.forEach(nestedRule => nestedRule.insert(parent));
    }
    // Clers the CSS rule object.
    clear() {
        super.clear();
        // if nested rules exist, clear them too
        if (this.nestedRules)
            this.nestedRules.forEach(nestedRule => nestedRule.clear());
    }
    /**
     * Adds/replaces the value of the given CSS property in this rule.
     * @param name Name of the CSS property.
     * @param value New value of the CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     */
    setProp(name, value, important) {
        if (!this.cssStyleRule)
            return;
        this.cssStyleRule.style.setProperty(name, StyleFuncs_1.stylePropToCssString(name, value, true), important ? "!important" : null);
    }
    /**
     * Adds/replaces the value of the given custmom cSS property in this rule.
     * @param customVar ICUstomVar object defining a custom CSS property.
     * @param varValue New value of the custom CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     */
    setCustomProp(varDef, varValue, important) {
        if (!varDef || !this.cssStyleRule)
            return;
        this.cssStyleRule.style.setProperty(varDef.cssName, StyleFuncs_1.stylePropToCssString(varDef.template, varValue, true), important ? "!important" : null);
    }
    /** SOM style rule */
    get cssStyleRule() { return this.cssRule; }
}
exports.StyleRule = StyleRule;
/**
 * The NestedRule class describes a styleset that is nested within another style rule.
 */
class NestedRule extends StyleRule {
    constructor(containingRule, selector, style) {
        super(52 /* NESTED */, style);
        this.selector = selector;
        this.containingRule = containingRule;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new NestedRule();
        newRule.copyFrom(this);
        newRule.selector = this.selector;
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        // get selector string and replace all occurrences of the ampersand symbol with the
        // selector string of the parent rule.
        return SelectorFuncs_1.selectorToCssString(this.selector).replace("&", this.containingRule.getSelectorString());
    }
}


/***/ }),

/***/ "./src/rules/Stylesheet.ts":
/*!*********************************!*\
  !*** ./src/rules/Stylesheet.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RuleContainer_1 = __webpack_require__(/*! ./RuleContainer */ "./src/rules/RuleContainer.ts");
/**
 * The Stylesheet class represents a parsed form of a IStylesheetDefinition-derived class.
 */
class Stylesheet extends RuleContainer_1.RuleContainer {
    constructor(definitionClass) {
        super(50 /* SCOPE */);
        this.definitionClass = definitionClass;
        this.activationRefCount = 0;
        this.domStyleElm = null;
        this.usedStylesheets = [];
        // call the $use function for all the base classes so that rule names are generated. We
        // don't activate stylesheets for these clases because derived classes will have all the
        // rules from all the base classes as their own and so these rules will be activated as
        // part of the derived class.
        let baseClass = this.definitionClass;
        while ((baseClass = Object.getPrototypeOf(baseClass)) !== Function.prototype)
            use(baseClass);
        this.processStylesheet();
    }
    // Creates the stylesheet definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    processStylesheet() {
        // check if the stylesheet definition has already been processed
        if (this.isProcessed)
            return;
        // the container and the owner properties of the Rule base class point to the Stylesheet
        // object itself
        super.process(this, null);
        this.isMultiplex = !!this.definitionClass.isMultiplex;
        // in DEBUG, each class has a name unless it was created as an anonymous class. In RELEASE,
        // (as well as in the anonymous cases), the name is undefined and we generate a unique
        // name for the stylesheet.
        this.name = this.definitionClass.name;
        if (!this.name)
            this.name = generateUniqueName("s");
        // process sub-rules rules.
        this.processRules();
    }
    // Returns an instance of the definition class or null if failure
    createDefinitionInstance() {
        try {
            this.definitionInstance = new this.definitionClass();
            return this.definitionInstance;
        }
        catch (err) {
            console.error(`Error instantiating Stylesheet Definition Class '${this.definitionClass.name}'`, err);
            return null;
        }
    }
    /** Returns the instance of the stylesheet definition class */
    getDefinitionInstance() {
        return this.definitionInstance;
    }
    /** Adds a stylesheet this stylesheet */
    addExternalStylesheet(stylesheet) {
        this.usedStylesheets.push(stylesheet);
    }
    /** Generates a name, which will be unique in this stylesheet */
    getScopedRuleName(ruleName) {
        // check whether we already have this rule name: if yes, return the already assigned
        // unique scoped name
        if (!ruleName)
            return generateUniqueName();
        else if (ruleName in this.allNames)
            return this.allNames[ruleName];
        else {
            // find out if there a rule with this name defined in a stylesheet instance created for
            // a class from the prototype chain of the style definition class.
            let existingName = findNameForRuleInPrototypeChain(this.definitionClass, ruleName);
            return existingName ? existingName : this.isMultiplex ? generateUniqueName() : generateName(this.name, ruleName);
        }
    }
    /** Inserts this stylesheet into DOM. */
    activate() {
        // activate imported stylesheets
        for (let stylesheet of this.usedStylesheets)
            stylesheet.activate();
        if (++this.activationRefCount === 1) {
            this.domStyleElm = document.createElement("style");
            this.domStyleElm.id = this.name;
            document.head.appendChild(this.domStyleElm);
            this.insertRules(this.domStyleElm.sheet);
        }
    }
    /** Removes this stylesheet from DOM. */
    deactivate() {
        // guard from extra deactivate calls
        if (this.activationRefCount === 0)
            return;
        if (--this.activationRefCount === 0) {
            this.domStyleElm.remove();
            this.domStyleElm = null;
            this.clearRules();
        }
        // deactivate imported stylesheets
        for (let stylesheet of this.usedStylesheets)
            stylesheet.deactivate();
    }
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
// Map of class definition classes to their singlton instances. Non-multiplex style definition
// classes are added to this map upon calling the $use function on them.
let classToInstanceMap = new Map();
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
// Looks up a property with the given name in the prototype  chain of the given style definition
// class. If found and if the property is a rule, then returns the name assigned for it.
function findNameForRuleInPrototypeChain(definitionClass, ruleName) {
    // loop over prototypes
    let baseClass = definitionClass;
    while ((baseClass = Object.getPrototypeOf(baseClass)) !== Function.prototype) {
        // check if the base class has an instance in the global map of used definition classes
        let baseInst = classToInstanceMap.get(baseClass);
        if (baseInst && ruleName in baseInst.rules && "name" in baseInst.rules[ruleName])
            return baseInst.rules[ruleName].name;
    }
    return null;
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// API functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Processes the given stylesheet definition and returns the Stylesheet object that contains
 * names of IDs, classes and keyframes and allows style manipulations. For a given stylesheet
 * definition class there is a single stylesheet object, no matter how many times this function
 * is invoked.
 */
function use(stylesheetDefinitionClass) {
    // if the stylesheet definition is multiplex, create new Stylesheet object every time;
    // otherwise, check whether the style sheet definition object has already been processed. This
    // is indicated by the existence of the instance static property on the class.
    if (stylesheetDefinitionClass.isMultiplex)
        return new Stylesheet(stylesheetDefinitionClass);
    else {
        let stylesheet = classToInstanceMap.get(stylesheetDefinitionClass);
        if (!stylesheet) {
            stylesheet = new Stylesheet(stylesheetDefinitionClass);
            classToInstanceMap.set(stylesheetDefinitionClass, stylesheet);
        }
        return stylesheet;
    }
}
exports.use = use;
/**
 * Activates the given stylesheet and inserts all its rules into DOM. If the input object is not
 * a stylesheet but a style definition class, obtain stylesheet by calling the $use function.
 * Note that each stylesheet object maintains a reference counter of how many times it was
 * activated and deactivated. The rules are inserted to DOM only when this reference counter goes
 * up to 1.
 */
function activate(stylesheetOrDefinition) {
    if (!stylesheetOrDefinition)
        return null;
    if (stylesheetOrDefinition instanceof Stylesheet) {
        stylesheetOrDefinition.activate();
        return stylesheetOrDefinition;
    }
    else {
        let stylesheet = use(stylesheetOrDefinition);
        stylesheet.activate();
        return stylesheet;
    }
}
exports.activate = activate;
/**
 * Deactivates the given stylesheet by removing its rules from DOM. Note that each stylesheet
 * object maintains a reference counter of how many times it was activated and deactivated. The
 * rules are removed from DOM only when this reference counter goes down to 0.
 */
function deactivate(stylesheet) {
    if (stylesheet)
        stylesheet.deactivate();
}
exports.deactivate = deactivate;
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
function enableOptimizedStyleNames(enable, prefix) {
    useUniqueStyleNames = enable;
    uniqueStyleNamesPrefix = prefix ? prefix : "n";
}
exports.enableOptimizedStyleNames = enableOptimizedStyleNames;


/***/ }),

/***/ "./src/rules/SupportsRule.ts":
/*!***********************************!*\
  !*** ./src/rules/SupportsRule.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const GroupRule_1 = __webpack_require__(/*! ./GroupRule */ "./src/rules/GroupRule.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
/**
 * The SupportRule class describes a CSS @supports rule.
 */
class SupportsRule extends GroupRule_1.GroupRule {
    constructor(query, definitionClass) {
        super(7 /* SUPPORTS */, definitionClass);
        // convert the query to its string form
        this.queryString = StyleFuncs_1.supportsQueryToCssString(query);
    }
    // Creates a copy of the rule.
    clone() {
        return new SupportsRule(this.queryString, this.definitionClass);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insertGroupingRule(parent) {
        // determine whether the query is supported and if it is not, don't insert the rule
        return CSS.supports(this.queryString)
            ? Rule_1.Rule.addRuleToDOM(`@supports ${this.queryString} {}`, parent)
            : null;
    }
    /** SOM supports rule */
    get cssSupportsRule() { return this.cssRule; }
}
exports.SupportsRule = SupportsRule;


/***/ }),

/***/ "./src/rules/TagRule.ts":
/*!******************************!*\
  !*** ./src/rules/TagRule.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
/**
 * The TagRule class describes a styleset that applies to elements identified by a tag name.
 */
class TagRule extends StyleRule_1.StyleRule {
    constructor(tag, style) {
        super(1 /* TAG */, style);
        this.tag = tag;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new TagRule(this.tag);
        newRule.copyFrom(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return this.tag;
    }
}
exports.TagRule = TagRule;


/***/ }),

/***/ "./src/rules/VarRule.ts":
/*!******************************!*\
  !*** ./src/rules/VarRule.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
/**
 * The VarRule class describes a custom CSS property. VarRule does not derive from the Rule
 * class because it is not a real CSS rule; however, in many aspects it repeats the Rule's
 * functionality. In particular it has the process function that allows it to obtain an actual
 * name, which will be used when defining and using this custom property in CSS.
 *
 * Note that while the type parameter K is a key of the ICssStyleset interface, the value is of
 * type IStileset[K], whcih is Extended<ICssStyleset[K]>. This allows specifying values that are
 * valid for the Extended roperty type.
 */
class VarRule {
    constructor(template, value, nameOverride) {
        this.template = template;
        this.value = value;
        this.nameOverride = nameOverride;
    }
    /**
     * Returns true - this is only needed to indicate that this object implements the IVarProxy
     * interface for the given type
     */
    isVarProxy(o) { return true; }
    // Processes the given rule.
    process(container, owner, ruleName) {
        this.container = container;
        this.ruleName = ruleName;
        [this.name, this.cssName] = Rule_1.createNames(owner, ruleName, this.nameOverride, "--");
    }
    // Creates a copy of the rule.
    clone() {
        return new VarRule(this.template, this.value, this.nameOverride);
    }
    // Converts the rule to CSS string.
    toCssString() {
        return `${this.cssName}: ${StyleFuncs_1.stylePropToCssString(this.template, this.value, true)}`;
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
        this.container.setCustomVarValue(this.cssName, StyleFuncs_1.stylePropToCssString(this.template, value, true), important);
    }
}
exports.VarRule = VarRule;


/***/ }),

/***/ "./src/styles/ColorFuncs.ts":
/*!**********************************!*\
  !*** ./src/styles/ColorFuncs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorTypes_1 = __webpack_require__(/*! ./ColorTypes */ "./src/styles/ColorTypes.ts");
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./src/styles/UtilFuncs.ts");
/**
 * Converts color value from the numeric representation to the CSS color string.
 */
function colorNumberToString(val) {
    /////////////////
    if (val < 0) {
        console.error("A number representing color cannot be negative: " + val);
        return "#000";
    }
    else if (!Number.isInteger(val)) {
        console.error("A number representing color cannot be floating point: " + val);
        return "#000";
    }
    //////////////
    // if we have a named color with the given value, return the color name
    let name = reversedColorMap.get(val);
    if (name)
        return name;
    else {
        // otherwise convert numeric value to # notation
        let s = val.toString(16);
        return "#" + (val <= 0xFFFFFF ? s.padStart(6, "0") : s.padStart(8, "0"));
    }
}
/**
 * Converts color style value to the CSS time string. If a string value is in the Colors object we
 * need to get its number and convert it to the rgb[a]() function because it might be a custom
 * color name added via INamedColors module augmentation. For numeric values, we check if this is
 * one of the predefined
 */
function colorToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromString: v => ColorTypes_1.Colors[v] ? colorNumberToString(ColorTypes_1.Colors[v]) : v,
        fromNumber: colorNumberToString
    });
}
exports.colorToString = colorToString;
function colorSeparationToString(c) {
    return c == null ? "0" : typeof c === "string" ? c : Number.isInteger(c) ? c.toString() : UtilFuncs_1.CssPercentMath.convertFunc(c);
}
function rgbToString(r, g, b, a) {
    r = colorSeparationToString(r);
    g = colorSeparationToString(g);
    b = colorSeparationToString(b);
    a = a == null ? null : UtilFuncs_1.CssPercentMath.styleToString(a);
    return !a ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;
}
function hslToString(h, s, l, a) {
    h = UtilFuncs_1.CssAngleMath.styleToString(h);
    s = s == null ? "100%" : UtilFuncs_1.CssPercentMath.styleToString(s);
    l = l == null ? "100%" : UtilFuncs_1.CssPercentMath.styleToString(l);
    a = a == null ? null : UtilFuncs_1.CssPercentMath.styleToString(a);
    return !a ? `hsl(${h},${s},${l})` : `hsla(${h},${s},${l},${a})`;
}
function alphaToString(c, a) {
    let rgbVal = typeof c === "string" ? this[c] : c;
    return rgbToString((rgbVal & 0xFF0000) >> 16, (rgbVal & 0x00FF00) >> 8, rgbVal & 0x0000FF, a);
}
/**
 * The ColorProxy class implements the IColorProxy and serves as a base for other color proxies.
 */
class ColorProxy {
    /** Flag indicating that this object implements the IImageProxy interface */
    get isColorProxy() { return true; }
}
/**
 * The RgbProxy class implements the IColorProxy interface by encapsulating parameters of the
 * `rgb()` or `rgba()` CSS functions.
 */
class RgbProxy extends ColorProxy {
    constructor(r, g, b, a) {
        super();
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    /** Flag indicating that this object implements the IImageProxy interface */
    get isColorProxy() { return true; }
    /** Converts internally held value(s) to string */
    valueToString() {
        return rgbToString(this.r, this.g, this.b, this.a);
    }
}
exports.RgbProxy = RgbProxy;
/**
 * The HslProxy class implements the IColorProxy interface by encapsulating parameters of the
 * `hsl()` or `hsla()` CSS functions.
 */
class HslProxy extends ColorProxy {
    constructor(h, s, l, a) {
        super();
        this.h = h;
        this.s = s;
        this.l = l;
        this.a = a;
    }
    /** Converts internally held value(s) to string */
    valueToString() {
        return hslToString(this.h, this.s, this.l, this.a);
    }
}
exports.HslProxy = HslProxy;
/**
 * The AlphaProxy class implements the IColorProxy interface by applying the given alpha mask
 * to the color specified as either a number or a named color.
 */
class AlphaProxy extends ColorProxy {
    constructor(c, a) {
        super();
        this.c = c;
        this.a = a;
    }
    /** Converts internally held value(s) to string */
    valueToString() {
        return alphaToString(this.c, this.a);
    }
}
exports.AlphaProxy = AlphaProxy;
/**
 * Map of predefined color names by their numeric values
 */
let reversedColorMap = new Map();
// build Reversed Color Map
Object.entries(ColorTypes_1.Colors).forEach(([name, value]) => reversedColorMap.set(value, name));


/***/ }),

/***/ "./src/styles/ColorTypes.ts":
/*!**********************************!*\
  !*** ./src/styles/ColorTypes.ts ***!
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

/***/ "./src/styles/FontFaceFuncs.ts":
/*!*************************************!*\
  !*** ./src/styles/FontFaceFuncs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs = __webpack_require__(/*! ./UtilFuncs */ "./src/styles/UtilFuncs.ts");
/**
 * Converts the given font face definition object to the CSS string
 */
function fontFaceToCssString(fontface) {
    if (!fontface || !fontface.fontFamily)
        return null;
    let s = "{";
    for (let propName in fontface) {
        s += `${UtilFuncs.camelToDash(propName)}:`;
        let propVal = fontface[propName];
        if (propName === "fontStretch")
            s += fontStretchToCssString(propVal);
        else if (propName === "fontStyle")
            s += fontStyleToCssString(propVal);
        else if (propName === "fontWeight")
            s += fontWeightToCssString(propVal);
        else if (propName === "src")
            s += fontSrcToCssString(propVal);
        else
            s += propVal;
        s += ";";
    }
    return s + "}";
}
exports.fontFaceToCssString = fontFaceToCssString;
function fontStretchToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val + "%";
    else
        return `${val[0]}% ${val[1]}%`;
}
function fontStyleToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return `oblique ${val}deg`;
    else {
        let s = "oblique ";
        if (typeof val[0] === "string")
            s += val[0];
        else
            s += `${val[0]}deg`;
        if (val[1]) {
            s += " ";
            if (typeof val[1] === "string")
                s += val[1];
            else
                s += `${val[1]}deg`;
        }
        return s;
    }
}
function fontWeightToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else
        return `${val[0].toString()} ${val[1].toString()}`;
}
function fontSrcToCssString(val) {
    if (typeof val === "string" || !Array.isArray(val))
        return fontSingleSrcToCssString(val);
    else
        return val.map(singleVal => fontSingleSrcToCssString(singleVal)).join(",");
}
function fontSingleSrcToCssString(val) {
    if (typeof val === "string") {
        if (val.startsWith("local(") || val.startsWith("url("))
            return val;
        else
            return `url(${val})`;
    }
    else if ("local" in val)
        return `local(${val.local})`;
    else {
        let s = `url(${val.url})`;
        if (val.format) {
            s += " format(";
            if (typeof val.format === "string")
                s += `\"${val.format}\"`;
            else
                s += val.format.map((v) => `\"${v}\"`).join(",");
            s += ")";
        }
        return s;
    }
}


/***/ }),

/***/ "./src/styles/ImageFuncs.ts":
/*!**********************************!*\
  !*** ./src/styles/ImageFuncs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorFuncs_1 = __webpack_require__(/*! ./ColorFuncs */ "./src/styles/ColorFuncs.ts");
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./src/styles/UtilFuncs.ts");
function gradientStopOrHintToString(val, mathClass) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: ColorFuncs_1.colorToString,
        fromArray: v => v.length === 0 ? "" : v.length === 1 ? mathClass.styleToString(v[0]) :
            gradientColorAndLengthToString(v, mathClass)
    });
}
function gradientColorAndLengthToString(val, mathClass) {
    let secondStop = val.length > 2 ? mathClass.styleToString(val[1]) : "";
    return `${ColorFuncs_1.colorToString(val[0])} ${mathClass.styleToString(val[1])} ${secondStop}`;
}
function linearGradientToString(name, angle, stopsOrHints) {
    let angleString = angle ? UtilFuncs_1.CssAngleMath.styleToString(angle) + "," : "";
    let buf = stopsOrHints.map(stopOrHint => gradientStopOrHintToString(stopOrHint, UtilFuncs_1.CssPercentMath));
    return `${name}(${angleString}${buf.join(",")})`;
}
function radialGradientToString(name, shape, extent, pos, stopsOrHints) {
    let shapeString = shape ? shape : "";
    let extentString = extent ? extent : "";
    let posString = pos ? `at ${UtilFuncs_1.positionToString(pos)}` : "";
    let whatAndWhere = shape || extentString || pos ? `${shapeString} ${extentString} ${posString},` : "";
    let buf = stopsOrHints.map(stopOrHint => gradientStopOrHintToString(stopOrHint, UtilFuncs_1.CssPercentMath));
    return `${name}(${whatAndWhere}${buf.join(",")})`;
}
function conicGradientToString(angle, pos, stopsOrHints) {
    let angleString = angle ? `from ${UtilFuncs_1.CssAngleMath.styleToString(angle)}` : "";
    let posString = pos ? `at ${UtilFuncs_1.positionToString(pos)}` : "";
    let whatAndWhere = angle || pos ? `${angleString} ${posString},` : "";
    let buf = stopsOrHints.map(stopOrHint => gradientStopOrHintToString(stopOrHint, UtilFuncs_1.CssAngleMath));
    return `conic-gradient(${whatAndWhere}${buf.join(",")})`;
}
function crossFadeParamToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: v => `${UtilFuncs_1.valueToString(v[0])},${UtilFuncs_1.CssPercentMath.styleToString(v[1])}`
    });
}
function crossFadeToString(args) {
    let paramsString = UtilFuncs_1.valueToString(args, {
        arrayItemFunc: crossFadeParamToString,
        arraySeparator: ","
    });
    return `cross-fade(${paramsString})`;
}
/**
 * The GradientProxy class is a base for IImageProxy-implemented classes that encapsulates
 * parameters common for linear and radial gradients.
 */
class GradientProxy {
    constructor(name, stopsOrHints) {
        this.name = name;
        this.stopsOrHints = stopsOrHints;
    }
    /** Flag indicating that this object implements the IImageProxy interface */
    get isImageProxy() { return true; }
}
exports.GradientProxy = GradientProxy;
/**
 * The LinearGradientProxy class implements the IImageProxy interface by encapsulating parameters
 * of the `linear-gradient()` or `repeating-linear-gradient()` CSS functions.
 */
class LinearGradientProxy extends GradientProxy {
    constructor(name, angle, stopsOrHints) {
        super(name, stopsOrHints);
        this.angle = angle;
    }
    /** Converts internally held value(s) to string */
    valueToString() {
        return linearGradientToString(this.name, this.angle, this.stopsOrHints);
    }
}
exports.LinearGradientProxy = LinearGradientProxy;
/**
 * The LinearGradientProxy class implements the IImageProxy interface by encapsulating parameters
 * of the `radial-gradient()` or `repeating-radial-gradient()` CSS functions.
 */
class RadialGradientProxy extends GradientProxy {
    constructor(name, shape, extent, pos, stopsOrHints) {
        super(name, stopsOrHints);
        this.shape = shape;
        this.extent = extent;
        this.pos = pos;
    }
    /** Converts internally held value(s) to string */
    valueToString() {
        return radialGradientToString(this.name, this.shape, this.extent, this.pos, this.stopsOrHints);
    }
}
exports.RadialGradientProxy = RadialGradientProxy;
/**
 * The ConicGradientProxy class implements the IImageProxy interface by encapsulating parameters
 * of the `conic-gradient()` CSS function.
 */
class ConicGradientProxy extends GradientProxy {
    constructor(angle, pos, stopsOrHints) {
        super("", stopsOrHints);
        this.angle = angle;
        this.pos = pos;
    }
    /** Converts internally held value(s) to string */
    valueToString() {
        return conicGradientToString(this.angle, this.pos, this.stopsOrHints);
    }
}
exports.ConicGradientProxy = ConicGradientProxy;
/**
 * The CrossFadeProxy class implements the IImageProxy interface by encapsulating parameters
 * of the `conic-gradient()` CSS function.
 */
class CrossFadeProxy {
    constructor(args) {
        this.args = args;
    }
    /** Flag indicating that this object implements the IImageProxy interface */
    get isImageProxy() { return true; }
    /** Converts internally held value(s) to string */
    valueToString() {
        return crossFadeToString(this.args);
    }
}
exports.CrossFadeProxy = CrossFadeProxy;


/***/ }),

/***/ "./src/styles/MediaFuncs.ts":
/*!**********************************!*\
  !*** ./src/styles/MediaFuncs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs = __webpack_require__(/*! ./UtilFuncs */ "./src/styles/UtilFuncs.ts");
function aspectRatioToCssString(val) {
    return typeof val === "string" ? val : val[0] + "/" + val[1];
}
function lengthFeatureToCssString(val) {
    return typeof val === "string" ? val : val + "px";
}
function resolutionFeatureToCssString(val) {
    return typeof val === "string" ? val : val + "dpi";
}
/**
 * Converts the given media query object to the CSS media query string
 */
function mediaQueryToCssString(query) {
    if (!query)
        return null;
    else if (Array.isArray(query))
        return query.map((singleQuery) => singleMediaQueryToCssString(singleQuery)).join(", ");
    else
        return singleMediaQueryToCssString(query);
}
exports.mediaQueryToCssString = mediaQueryToCssString;
/**
 * Converts the given media query object to the CSS media query string
 */
function singleMediaQueryToCssString(query) {
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
            items.push(`(${mediaFeatureToCssString(propName, query[propName])})`);
    }
    return `${negate ? "not " : ""}${items.join(" and ")}`;
}
exports.singleMediaQueryToCssString = singleMediaQueryToCssString;
/**
 * Converts the given media feature to the CSS media query string
 */
function mediaFeatureToCssString(featureName, propVal, valueOnly) {
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
        let s1 = mediaFeatureSingleValueToCssString(convert, propVal[0]);
        let s2 = mediaFeatureSingleValueToCssString(convert, propVal[1]);
        return `${s1} <= ${realFeatureName} <= ${s2}`;
    }
    else {
        let s = mediaFeatureSingleValueToCssString(convert, propVal);
        return valueOnly ? s : realFeatureName + ":" + s;
    }
}
exports.mediaFeatureToCssString = mediaFeatureToCssString;
function mediaFeatureSingleValueToCssString(convert, propVal) {
    if (propVal == null)
        return null;
    if (convert)
        return convert(propVal);
    else if (typeof propVal === "string")
        return propVal;
    else if (Array.isArray(propVal))
        return UtilFuncs.arrayToCssString(propVal);
    else
        return propVal.toString();
}
let mediaFeatures = {
    aspectRatio: aspectRatioToCssString,
    minAspectRatio: aspectRatioToCssString,
    maxAspectRatio: aspectRatioToCssString,
    color: { defaultValue: 0, isRange: true },
    colorIndex: { defaultValue: 0, isRange: true },
    height: { convert: lengthFeatureToCssString, isRange: true },
    minHeight: lengthFeatureToCssString,
    maxHeight: lengthFeatureToCssString,
    monochrome: { defaultValue: 0, isRange: true },
    resolution: { convert: resolutionFeatureToCssString, isRange: true },
    minResolution: resolutionFeatureToCssString,
    maxResolution: resolutionFeatureToCssString,
    width: { convert: lengthFeatureToCssString, isRange: true },
    minWidth: lengthFeatureToCssString,
    maxWidth: lengthFeatureToCssString,
};


/***/ }),

/***/ "./src/styles/SelectorFuncs.ts":
/*!*************************************!*\
  !*** ./src/styles/SelectorFuncs.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ../rules/Rule */ "./src/rules/Rule.ts");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS selector.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the selector object into full selector string.
 */
function selectorToCssString(selector) {
    if (!selector)
        return "";
    else if (typeof selector === "string")
        return selector;
    else if (typeof selector.valueToString === "function")
        return selector.valueToString();
    else
        return selector.toString();
}
exports.selectorToCssString = selectorToCssString;
/**
 * The SelectorProxy class implements the IStringProxy interface by encapsulating a selector
 * template string with optional placeholders (e.g. {0}), which will be replaced by names
 * of tags, classes and IDs and other possible types.
 */
class SelectorProxy {
    constructor(template, params) {
        this.template = template;
        this.params = params;
    }
    /** Flag indicating that this object implements the ISelectorProxy interface */
    get isSelectorProxy() { return true; }
    /** Converts internally held value(s) to string */
    valueToString() {
        let tokens = this.template.split(/{(\d+)}/g);
        let tokenIsNumber = false;
        let arr = [];
        for (let token of tokens) {
            if (tokenIsNumber) {
                let index = parseInt(token, 10);
                if (index >= this.params.length)
                    continue;
                let item = this.params[index];
                if (item == null)
                    continue;
                else if (typeof item === "string")
                    arr.push(item);
                else if (item instanceof Rule_1.Rule) {
                    if (item.ruleType === 1 /* TAG */)
                        arr.push(item.tag);
                    else if (item.ruleType === 2 /* CLASS */)
                        arr.push(item.cssName);
                    else if (item.ruleType === 3 /* ID */)
                        arr.push(item.cssName);
                    else if (item.ruleType === 4 /* SELECTOR */)
                        arr.push(item.selectorText);
                }
                else
                    arr.push(item.toString());
            }
            else if (token)
                arr.push(token);
            tokenIsNumber = !tokenIsNumber;
        }
        return arr.join("");
    }
}
exports.SelectorProxy = SelectorProxy;


/***/ }),

/***/ "./src/styles/StyleFuncs.ts":
/*!**********************************!*\
  !*** ./src/styles/StyleFuncs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./src/styles/UtilFuncs.ts");
const ColorFuncs_1 = __webpack_require__(/*! ./ColorFuncs */ "./src/styles/ColorFuncs.ts");
// helper functions for style property conversions
function multiPositionToStringWithComma(val) { return UtilFuncs_1.multiPositionToString(val, ","); }
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions for converting CSS property types to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function singleAnimation_fromObject(val) {
    return UtilFuncs_1.objectToCssString(val, false, ["duration", UtilFuncs_1.CssTimeMath.styleToString], ["func", singleAnimationTimingFunction_fromStyle], ["delay", UtilFuncs_1.CssTimeMath.styleToString], ["count", UtilFuncs_1.CssNumberMath.styleToString], "direction", "mode", "state", "name");
}
function singleAnimation_fromStyle(val) {
    return UtilFuncs_1.valueToString(val, {
        fromObject: singleAnimation_fromObject
    });
}
function animationTimingFunction_fromNumber(val) {
    return `steps(${val})`;
}
function animationTimingFunction_fromArray(val) {
    return typeof val[0] === "number"
        ? singleAnimationTimingFunction_fromStyle(val)
        : UtilFuncs_1.arrayToCssString(val, singleAnimationTimingFunction_fromStyle, ",");
}
function singleAnimationTimingFunction_fromStyle(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: animationTimingFunction_fromNumber,
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
function singleBackgroundSize_fromStyle(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString,
        fromArray: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace
    });
}
/**
 * Converts corner radius style value to the CSS string.
 */
function singleCornerRadiusToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        arrayItemFunc: UtilFuncs_1.CssLengthMath.styleToString,
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
/**
 * Converts border radius style value to the CSS string.
 */
function borderRadiusToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: v => {
            if (Array.isArray(v[0])) {
                // two MultiCornerRadius values
                let s = UtilFuncs_1.arrayToCssString(v[0], UtilFuncs_1.CssLengthMath.styleToString, " ");
                s += " / ";
                return s + UtilFuncs_1.arrayToCssString(v[1], UtilFuncs_1.CssLengthMath.styleToString, " ");
            }
            else {
                // single MultiCornerRadius value
                return UtilFuncs_1.arrayToCssString(v, UtilFuncs_1.CssLengthMath.styleToString, " ");
            }
        },
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
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
 * Converts clip style value to its CSS string value.
 */
function clipToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: v => `rect(${UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace(v)}`
    });
}
/**
 * Converts column rule style represented as an object with fields corresponding to column rule
 * properties to its CSS string value.
 */
function columnRuleToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromObject: val => UtilFuncs_1.objectToCssString(val, false, ["width", UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace], ["style", UtilFuncs_1.valueToString], ["color", ColorFuncs_1.colorToString])
    });
}
/**
 * Converts columns style to its CSS string value.
 */
function columnsToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: val => val[0] + " " + UtilFuncs_1.CssLengthMath.styleToString(val[1])
    });
}
/**
 * Converts flex style value to the CSS string.
 */
function flexToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: val => {
            if (val.length === 2)
                return val.join(" ");
            else
                return val[0] + " " + val[1] + " " + UtilFuncs_1.CssLengthMath.styleToString(val[2]);
        },
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
/**
 * Converts font style value to the CSS string.
 */
function fontStyleToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: val => "oblique " + UtilFuncs_1.CssAngleMath.styleToString(val)
    });
}
/**
 * Converts text-emphasis style value to the CSS string.
 */
function textEmphasisPositionToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: UtilFuncs_1.CssLengthMath.styleToString
    });
}
/**
 * Converts text-indent style value to the CSS string.
 */
function textIndentToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: val => {
            let s = `${UtilFuncs_1.CssLengthMath.styleToString(val[0])} ${val[1]}`;
            if (val[2])
                s += " " + val[2];
            return s;
        },
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
/**
 * Converts translate style value to the CSS string.
 */
function translateToCssString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromArray: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    });
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions for handling Stylesets.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Merges properties from the source styleset to the target styleset. All regular properties are
 * replaced. Properties "--" and "!" get special treatment because they might be arrays.
 * @param target
 * @param source
 * @returns Reference to the target styleset if not null or a new styleset otherwise.
 */
function mergeStylesets(target, source) {
    if (!source)
        return target;
    // if target is not defined, create it as an empty object. This object will be returned after
    // properties from the source are copied to it.
    if (!target) {
        target = {};
        Object.assign(target, source);
        return target;
    }
    // check whether custom properties and important properties are defined. If we don't have
    // either, we can just use the Object.assign function.
    let sourceCustomProps = source["--"];
    let sourceImpProps = source["!"];
    if (!sourceCustomProps && !sourceImpProps) {
        Object.assign(target, source);
        return target;
    }
    // merge custom properties
    if (sourceCustomProps) {
        let targetCustomProps = target["--"];
        target["--"] = !targetCustomProps ? sourceCustomProps : targetCustomProps.concat(sourceCustomProps);
    }
    // merge important properties
    if (sourceImpProps) {
        let targetImpProps = target["!"];
        target["!"] = !targetImpProps ? sourceImpProps : targetImpProps.concat(sourceImpProps);
    }
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
/** Converts the given styleset to its string representation */
function stylesetToCssString(styleset) {
    if (!styleset)
        return null;
    let impProps = null;
    if (styleset["!"]) {
        // value is either a single name or an array of names of CSS properties to add the !important flag
        impProps = new Set();
        let impPropVal = styleset["!"];
        if (typeof impPropVal === "string")
            impProps.add(impPropVal);
        else
            impPropVal.forEach(v => impProps.add(v));
    }
    let buf = [];
    for (let propName in styleset) {
        if (propName === "!")
            continue;
        if (propName === "--") {
            // special handling of the "--" property, which is an array where each item is
            // a two-item or three-item array
            let propVal = styleset[propName];
            for (let customVal of propVal) {
                if (!customVal)
                    continue;
                buf.push(customPropToCssString(customVal, false));
            }
        }
        else {
            // get the string representation of the property
            buf.push(stylePropToCssString(propName, styleset[propName]) +
                (impProps && impProps.has(propName) ? " !important" : ""));
        }
    }
    // join all elements in the array except nulls, undefined and empty strings
    return `{${buf.filter((item) => !!item).join(";")}}`;
}
exports.stylesetToCssString = stylesetToCssString;
/**
 * Converts the given custom CSS property definition to string.
 * @param propVal
 * @param valueOnly
 */
function customPropToCssString(propVal, valueOnly) {
    if (!propVal)
        return null;
    let varName;
    let template;
    let value;
    if (propVal.length === 2) {
        varName = propVal[0].cssName;
        template = propVal[0].template;
        value = propVal[1];
    }
    else {
        varName = propVal[0];
        if (!varName)
            return null;
        else if (!varName.startsWith("--"))
            varName = "--" + varName;
        template = propVal[1];
        if (!varName || !template)
            return null;
        value = propVal[2];
    }
    let varValue = stylePropToCssString(template, value, true);
    return valueOnly ? varValue : `${varName}:${varValue}`;
}
exports.customPropToCssString = customPropToCssString;
/**
 * Converts the given style property to the CSS style string
 * @param style
 */
function stylePropToCssString(propName, propVal, valueOnly) {
    if (!propName)
        return null;
    // find information object for the property
    let info = StylePropertyInfos[propName];
    let varValue = !info
        ? UtilFuncs_1.valueToString(propVal)
        : typeof info === "object"
            ? UtilFuncs_1.valueToString(propVal, info)
            : info(propVal);
    if (!varValue)
        varValue = "initial";
    return valueOnly ? varValue : `${UtilFuncs_1.camelToDash(propName)}:${varValue}`;
}
exports.stylePropToCssString = stylePropToCssString;
// Helper object that is used to indicate that values in an array should be separated by comma.
// We use it many times in the stucture below.
let commaArraySeparator = { arraySeparator: "," };
/**
 * Map of property names to the StylePropertyInfo objects describing custom actions necessary to
 * convert the property value to the CSS-compliant string.
 */
const StylePropertyInfos = {
    animation: {
        arrayItemFunc: singleAnimation_fromStyle,
        arraySeparator: ",",
        fromObject: singleAnimation_fromObject,
        fromAny: singleAnimation_fromStyle
    },
    animationDelay: UtilFuncs_1.CssTimeMath.multiStyleToStringWithComma,
    animationDuration: UtilFuncs_1.CssTimeMath.multiStyleToStringWithComma,
    animationIterationCount: commaArraySeparator,
    animationFillMode: commaArraySeparator,
    animationName: commaArraySeparator,
    animationPlayState: commaArraySeparator,
    animationTimingFunction: {
        fromNumber: animationTimingFunction_fromNumber,
        fromArray: animationTimingFunction_fromArray
    },
    backgroundAttachment: commaArraySeparator,
    backgroundBlendMode: commaArraySeparator,
    backgroundClip: commaArraySeparator,
    backgroundColor: ColorFuncs_1.colorToString,
    backgroundOrigin: commaArraySeparator,
    backgroundPosition: multiPositionToStringWithComma,
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
    borderBottomLeftRadius: singleCornerRadiusToCssString,
    borderBottomRightRadius: singleCornerRadiusToCssString,
    borderBottomWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderColor: {
        arrayItemFunc: ColorFuncs_1.colorToString,
        fromAny: ColorFuncs_1.colorToString
    },
    borderImageWidth: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    borderInlineEnd: borderToString,
    borderInlineEndColor: ColorFuncs_1.colorToString,
    borderInlineEndWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderInlineStart: borderToString,
    borderInlineStartColor: ColorFuncs_1.colorToString,
    borderInlineStartWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderLeft: borderToString,
    borderLeftColor: ColorFuncs_1.colorToString,
    borderLeftWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderRadius: borderRadiusToCssString,
    borderRight: borderToString,
    borderRightColor: ColorFuncs_1.colorToString,
    borderRightWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderStyle: UtilFuncs_1.valueToString,
    borderSpacing: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    borderTop: borderToString,
    borderTopColor: ColorFuncs_1.colorToString,
    borderTopLeftRadius: singleCornerRadiusToCssString,
    borderTopRightRadius: singleCornerRadiusToCssString,
    borderTopWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderWidth: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    bottom: UtilFuncs_1.CssLengthMath.styleToString,
    boxShadow: UtilFuncs_1.valueToString,
    caretColor: ColorFuncs_1.colorToString,
    clip: clipToCssString,
    color: ColorFuncs_1.colorToString,
    columnGap: UtilFuncs_1.CssLengthMath.styleToString,
    columnRule: columnRuleToCssString,
    columnRuleColor: ColorFuncs_1.colorToString,
    columnRuleStyle: UtilFuncs_1.valueToString,
    columnRuleWidth: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    columns: columnsToCssString,
    flex: flexToCssString,
    floodColor: ColorFuncs_1.colorToString,
    fontSize: UtilFuncs_1.CssLengthMath.styleToString,
    fontStyle: fontStyleToCssString,
    gap: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    gridColumnGap: UtilFuncs_1.CssLengthMath.styleToString,
    gridRowGap: UtilFuncs_1.CssLengthMath.styleToString,
    height: UtilFuncs_1.CssLengthMath.styleToString,
    inlineSize: UtilFuncs_1.CssLengthMath.styleToString,
    left: UtilFuncs_1.CssLengthMath.styleToString,
    letterSpacing: UtilFuncs_1.CssLengthMath.styleToString,
    lightingColor: ColorFuncs_1.colorToString,
    margin: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
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
    maxZoom: UtilFuncs_1.CssLengthMath.styleToString,
    minBlockSize: UtilFuncs_1.CssLengthMath.styleToString,
    minHeight: UtilFuncs_1.CssLengthMath.styleToString,
    minInlineSize: UtilFuncs_1.CssLengthMath.styleToString,
    minWidth: UtilFuncs_1.CssLengthMath.styleToString,
    minZoom: UtilFuncs_1.CssLengthMath.styleToString,
    objectPosition: UtilFuncs_1.positionToString,
    outlineColor: ColorFuncs_1.colorToString,
    outlineOffset: UtilFuncs_1.CssLengthMath.styleToString,
    outlineStyle: UtilFuncs_1.valueToString,
    padding: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    paddingBlockEnd: UtilFuncs_1.CssLengthMath.styleToString,
    paddingBlockStart: UtilFuncs_1.CssLengthMath.styleToString,
    paddingBottom: UtilFuncs_1.CssLengthMath.styleToString,
    paddingInlineEnd: UtilFuncs_1.CssLengthMath.styleToString,
    paddingInlineStart: UtilFuncs_1.CssLengthMath.styleToString,
    paddingLeft: UtilFuncs_1.CssLengthMath.styleToString,
    paddingRight: UtilFuncs_1.CssLengthMath.styleToString,
    paddingTop: UtilFuncs_1.CssLengthMath.styleToString,
    perspective: UtilFuncs_1.CssLengthMath.styleToString,
    perspectiveOrigin: UtilFuncs_1.positionToString,
    right: UtilFuncs_1.CssLengthMath.styleToString,
    rowGap: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMargin: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    scrollMarginBlock: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    scrollMarginBlockEnd: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginBlockStart: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginBottom: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginInline: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    scrollMarginInlineEnd: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginInlineStart: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginLeft: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginRight: UtilFuncs_1.CssLengthMath.styleToString,
    scrollMarginTop: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPadding: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    scrollPaddingBlock: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    scrollPaddingBlockEnd: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingBlockStart: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingBottom: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingInline: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    scrollPaddingInlineEnd: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingInlineStart: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingLeft: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingRight: UtilFuncs_1.CssLengthMath.styleToString,
    scrollPaddingTop: UtilFuncs_1.CssLengthMath.styleToString,
    stopColor: ColorFuncs_1.colorToString,
    tabSize: UtilFuncs_1.CssLengthMath.styleToString,
    textDecorationColor: ColorFuncs_1.colorToString,
    textDecorationThickness: UtilFuncs_1.CssLengthMath.styleToString,
    textEmphasisColor: ColorFuncs_1.colorToString,
    textEmphasisPosition: textEmphasisPositionToCssString,
    textIndent: textIndentToCssString,
    top: UtilFuncs_1.CssLengthMath.styleToString,
    translate: translateToCssString,
    width: UtilFuncs_1.CssLengthMath.styleToString,
    zoom: UtilFuncs_1.CssLengthMath.styleToString,
};
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS supports query.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/** Converts the given supports query to its string representation */
function supportsQueryToCssString(query) {
    if (!query)
        return "";
    else if (typeof query === "string")
        return query;
    else if (Array.isArray(query))
        return query.map((singleQuery) => singleSupportsQueryToCssString(singleQuery)).join(" or ");
    else
        return singleSupportsQueryToCssString(query);
}
exports.supportsQueryToCssString = supportsQueryToCssString;
/** Converts the given supports query to its string representation */
function singleSupportsQueryToCssString(query) {
    if (!query)
        return "";
    else if (typeof query === "string")
        return query;
    let propNames = Object.keys(query).filter((propName) => propName != "$negate");
    if (propNames.length === 0)
        return "";
    let not = query.$negate ? "not" : "";
    return `${not} (${propNames.map((propName) => stylePropToCssString(propName, query[propName])).join(") and (")})`;
}
exports.singleSupportsQueryToCssString = singleSupportsQueryToCssString;


/***/ }),

/***/ "./src/styles/UtilFuncs.ts":
/*!*********************************!*\
  !*** ./src/styles/UtilFuncs.ts ***!
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
        // - null/undefined become "initial".
        // - call valueToString (IStringProxy and the like) if exist.
        // - function: call without parameters.
        // - everything else: call toString().
        if (val == null)
            return "";
        else if (typeof val === "string")
            return val;
        else if (Array.isArray(val))
            return arrayToCssString(val);
        else if (typeof val.valueToString === "function")
            return val.valueToString();
        else if (typeof val === "function")
            return val();
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
        else if (typeof val === "boolean")
            return options.fromBool ? options.fromBool(val) : options.fromAny ? options.fromAny(val) : val.toString();
        else if (typeof val === "number")
            return options.fromNumber ? options.fromNumber(val) : options.fromAny ? options.fromAny(val) : val.toString();
        else if (Array.isArray(val)) {
            if (options.fromArray)
                return options.fromArray(val);
            else {
                let separator = options.arraySeparator != null ? options.arraySeparator : " ";
                if (options.arrayItemFunc)
                    return arrayToCssString(val, options.arrayItemFunc, separator);
                else if (options.fromAny)
                    return options.fromAny(val);
                else
                    return arrayToCssString(val, undefined, separator);
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
        else if (typeof val === "function")
            return valueToString(options.funcArgs ? val(...options.funcArgs) : val());
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
function arrayToCssString(val, func, separator = " ") {
    return !val || val.length === 0
        ? ""
        : val.filter(x => x != null).map(y => func ? func(y) : valueToString(y)).join(separator);
}
exports.arrayToCssString = arrayToCssString;
/**
 * Converts the given object to a CSS string.
 * @param val Object to convert to string.
 * @param usePropNames Flag indicating whether the names of the object's proprties should be added to the string.
 * @param propsAndFuncs Array of property names and optionally functions. The order of the names determines in
 *     which oprder the properties should be added to the string. If a function is present for the property,
 *     it will be used to convert the property's value to the string. If a function is not present, then the
 *     property value should be converted to the string using the valueToString function.
 */
function objectToCssString(val, usePropNames, ...propsAndFuncs) {
    if (val == null || propsAndFuncs.length === 0)
        return "";
    let buf = [];
    propsAndFuncs.forEach(propAndFunc => {
        let propName = typeof propAndFunc === "string" ? propAndFunc : propAndFunc[0];
        let func = typeof propAndFunc === "string" ? undefined : propAndFunc[1];
        let propVal = val[propName];
        if (propVal == null)
            return;
        if (usePropNames)
            buf.push(propName);
        if (func)
            buf.push(func(propVal));
        else if (propVal != null)
            buf.push(valueToString(propVal));
    });
    return buf.join(" ");
}
exports.objectToCssString = objectToCssString;
/**
 * The StringProxy class implements the IStringProxy interface by encapsulating the string.
 */
class StringProxy {
    constructor(s) {
        this.s = s;
    }
    /** Flag indicating that this object implements the IStringProxy interface */
    get isStringProxy() { return true; }
    /** Converts internally held value(s) to string */
    valueToString() {
        return this.s == null ? "" : typeof this.s === "string" ? this.s : this.s.toString();
    }
}
exports.StringProxy = StringProxy;
/**
 * Converts a single numeric value to a CSS string optionally appending units that can be different
 * for integer and floating point numbers.
 * @param n Number to convert to string representation.
 * @param intUnit Units to append if the number is integer.
 * @param floatUnit Units to append if the number is floating point.
 */
function numberToCssString(n, intUnit = "", floatUint = "") {
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
function multiStyleToString(val, convertFunc, separator) {
    return valueToString(val, {
        fromNumber: convertFunc,
        arrayItemFunc: v => styleToString(v, convertFunc),
        arraySeparator: separator
    });
}
/**
 * Replaces patterns {index[|unit]} in the format string with values from the given array.
 * @param format
 * @param convertFunc
 * @param params
 */
function formatNumbers(format, params, convertFunc) {
    function replacer(token, ...args) {
        let index = parseInt(args[0]);
        if (index >= params.length)
            return "0";
        let unit = args[1];
        let param = params[index];
        if (unit && typeof param === "number")
            return param + unit;
        else
            return styleToString(param, convertFunc);
    }
    return format.replace(/{\s*(\d*)\s*(?:\|\s*([a-zA-Z\%]+)\s*)?}/g, replacer);
}
/**
 * The NumberProxy class implements the INumberProxy interface by encapsulating parameters of a
 * mathematic CSS function that accepts one or more parameters of type CssNumber.
 */
class NumberProxy {
    constructor(params, convertFunc) {
        this.convertFunc = convertFunc;
        this.params = params;
    }
    /**
     * Returns true - needed only to indicate that this object implements the INumerProxy interface
     * for a given type
     */
    isNumberProxy(o) { return true; }
}
/**
 * The MathFuncProxy class implements the INumberProxy interface by encapsulating parameters of a
 * mathematic CSS function that accepts one or more parameters of type CssNumber.
 */
class MathFuncProxy extends NumberProxy {
    constructor(name, params, convertFunc) {
        super(params, convertFunc);
        this.name = name;
    }
    /** Converts internally held value(s) to string */
    valueToString() {
        return `${this.name}(${multiStyleToString(this.params, this.convertFunc, ",")})`;
    }
}
/**
 * The CalcFuncProxy class implements the INumberProxy interface by encapsulating parameters of a
 * calc() CSS function that accepts a formula string and zero or more parameters of type CssNumber.
 */
class CalcFuncProxy extends NumberProxy {
    constructor(formula, params, convertFunc) {
        super(params, convertFunc);
        this.formula = formula;
    }
    /** Converts internally held value(s) to string */
    valueToString() {
        return `calc(${formatNumbers(this.formula, this.params, this.convertFunc)})`;
    }
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
        return new MathFuncProxy("min", params, this.convertFunc);
    }
    max(...params) {
        return new MathFuncProxy("max", params, this.convertFunc);
    }
    clamp(min, pref, max) {
        return new MathFuncProxy("clamp", [min, pref, max], this.convertFunc);
    }
    calc(formula, ...params) {
        return new CalcFuncProxy(formula, params, this.convertFunc);
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
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssNumberMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssNumberMath.convertFunc, ","); }
    constructor() { super(CssNumberMath.convertFunc); }
}
exports.CssNumberMath = CssNumberMath;
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
    static convertFunc(n) { return numberToCssString(n, "px", "em"); }
    static styleToString(val) { return styleToString(val, CssLengthMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssLengthMath.convertFunc, separator); }
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssLengthMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssLengthMath.convertFunc, ","); }
    constructor() { super(CssLengthMath.convertFunc); }
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
    static convertFunc(n) { return numberToCssString(n, "deg", "rad"); }
    static styleToString(val) { return styleToString(val, CssAngleMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssAngleMath.convertFunc, separator); }
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssAngleMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssAngleMath.convertFunc, ","); }
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
class CssTimeMath extends NumberMath {
    static convertFunc(n) { return numberToCssString(n, "ms", "s"); }
    static styleToString(val) { return styleToString(val, CssTimeMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssTimeMath.convertFunc, separator); }
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssTimeMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssTimeMath.convertFunc, ","); }
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
class CssResolutionMath extends NumberMath {
    static convertFunc(n) { return numberToCssString(n, "dpi", "x"); }
    static styleToString(val) { return styleToString(val, CssResolutionMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssResolutionMath.convertFunc, separator); }
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssResolutionMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssResolutionMath.convertFunc, ","); }
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
class CssFrequencyMath extends NumberMath {
    static convertFunc(n) { return numberToCssString(n, "Hz", "kHz"); }
    static styleToString(val) { return styleToString(val, CssFrequencyMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssFrequencyMath.convertFunc, separator); }
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssFrequencyMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssFrequencyMath.convertFunc, ","); }
    constructor() { super(CssFrequencyMath.convertFunc); }
}
exports.CssFrequencyMath = CssFrequencyMath;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Fraction
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The CssFractionMath class contains methods that implement CSS mathematic functions on the
 * <fraction> CSS types.
 */
class CssFractionMath extends NumberMath {
    static convertFunc(n) { return numberToCssString(n, "fr", "fr"); }
    static styleToString(val) { return styleToString(val, CssFractionMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssFractionMath.convertFunc, separator); }
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssFractionMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssFractionMath.convertFunc, ","); }
    constructor() { super(CssFractionMath.convertFunc); }
    minmax(min, max) {
        return new MathFuncProxy("minmax", [min, max], CssFractionMath.convertFunc);
    }
}
exports.CssFractionMath = CssFractionMath;
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
    static convertFunc(n) { return (Number.isInteger(n) ? n : n > -1.0 && n < 1.0 ? Math.round(n * 100) : Math.round(n)) + "%"; }
    static styleToString(val) { return styleToString(val, CssPercentMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssPercentMath.convertFunc, separator); }
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssPercentMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssPercentMath.convertFunc, ","); }
    constructor() { super(CssFractionMath.convertFunc); }
}
exports.CssPercentMath = CssPercentMath;
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
        fromNull: v => null,
        fromNumber: CssLengthMath.styleToString,
        fromArray: CssLengthMath.multiStyleToStringWithSpace
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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// URLs
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * The UrlProxy class represents an invocation of the CSS url() function.
 */
class UrlProxy {
    constructor(url) {
        this.url = url;
    }
    /** Flag indicating that this object implements the INumerProxy interface */
    get isUrlProxy() { return true; }
    /** Converts internally held value(s) to string */
    valueToString() {
        let s = valueToString(this.url);
        return s && !s.startsWith("url(") ? `url(${s})` : s;
    }
}
exports.UrlProxy = UrlProxy;


/***/ }),

/***/ "./src/styles/UtilTypes.ts":
/*!*********************************!*\
  !*** ./src/styles/UtilTypes.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file contains basic types and functions used to define CSS property types.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL3J1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvc2gudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS91dGlscy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvbWltY3NzVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0Fic3RyYWN0UnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQ2xhc3NSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Gb250RmFjZVJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0dyb3VwUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvSURSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9JbXBvcnRSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NZWRpYVJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL05hbWVzcGFjZVJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1BhZ2VSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlQ29udGFpbmVyLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1NlbGVjdG9yUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9TdHlsZXNoZWV0LnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9TdXBwb3J0c1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1RhZ1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1ZhclJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvckZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvQ29sb3JUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ZvbnRGYWNlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9JbWFnZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvTWVkaWFGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1NlbGVjdG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvVXRpbEZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvVXRpbFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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b250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9taW1jc3NUeXBlcy50c1wiKTtcbiIsIi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBkZWZpbmVzIHR5cGVzIG9mIG9iamVjdCB0aGF0IHJlcHJlc2VudCBDU1MgcnVsZXMuXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJ1bGVUeXBlcyBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFN0eWxlc2hlZXRGdW5jcyBmcm9tIFwiLi4vcnVsZXMvU3R5bGVzaGVldFwiXHJcbmltcG9ydCB7SVN0eWxlc2V0LCBTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldCwgSUNzc1N0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzLCBTZWxlY3RvclRva2VuVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7U2VsZWN0b3JQcm94eX0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvckZ1bmNzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHtGb250ZmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RSdWxlfSBmcm9tIFwiLi4vcnVsZXMvQWJzdHJhY3RSdWxlXCJcclxuaW1wb3J0IHtUYWdSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVGFnUnVsZVwiXHJcbmltcG9ydCB7Q2xhc3NSdWxlfSBmcm9tIFwiLi4vcnVsZXMvQ2xhc3NSdWxlXCJcclxuaW1wb3J0IHtJRFJ1bGV9IGZyb20gXCIuLi9ydWxlcy9JRFJ1bGVcIlxyXG5pbXBvcnQge1NlbGVjdG9yUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1NlbGVjdG9yUnVsZVwiXHJcbmltcG9ydCB7QW5pbWF0aW9uUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0FuaW1hdGlvblJ1bGVcIlxyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCJcclxuaW1wb3J0IHtJbXBvcnRSdWxlfSBmcm9tIFwiLi4vcnVsZXMvSW1wb3J0UnVsZVwiXHJcbmltcG9ydCB7Rm9udEZhY2VSdWxlfSBmcm9tIFwiLi4vcnVsZXMvRm9udEZhY2VSdWxlXCJcclxuaW1wb3J0IHtOYW1lc3BhY2VSdWxlfSBmcm9tIFwiLi4vcnVsZXMvTmFtZXNwYWNlUnVsZVwiO1xyXG5pbXBvcnQge1BhZ2VSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUGFnZVJ1bGVcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGV9IGZyb20gXCIuLi9ydWxlcy9TdXBwb3J0c1J1bGVcIlxyXG5pbXBvcnQge01lZGlhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL01lZGlhUnVsZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBhYnN0cmFjdCBydWxlLCB3aGljaCBkZWZpbmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gYmUgZXh0ZW5kZWQgYnkgb3RoZXIgc3R5bGVcclxuICogcnVsZXMuIEFic3RyYWN0IHJ1bGVzIGRvbid0IGhhdmUgc2VsZWN0b3JzIGFuZCBhcmUgbm90IGluc2VydGVkIGludG8gRE9NLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhYnN0cmFjdCggc3R5bGU6IFJ1bGVUeXBlcy5FeHRlbmRlZFN0eWxlc2V0KTogUnVsZVR5cGVzLklBYnN0cmFjdFJ1bGVcclxuXHR7IHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyB0YWcgcnVsZS4gVGhlIHRhZyBwYXJhbWV0ZXIgY2FuIGJlIGFueSBvZiB0aGUgSFRNTCBvciBTVkcgdGFncy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdGFnKCB0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB8IGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwLCBzdHlsZTogUnVsZVR5cGVzLkV4dGVuZGVkU3R5bGVzZXQpOiBSdWxlVHlwZXMuSVRhZ1J1bGVcclxuXHR7IHJldHVybiBuZXcgVGFnUnVsZSggdGFnLCBzdHlsZSk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBSdWxlVHlwZXMuRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgUnVsZVR5cGVzLklDbGFzc1J1bGUpOiBSdWxlVHlwZXMuSUNsYXNzUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBDbGFzc1J1bGUoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpOyB9XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgSUQgcnVsZS4gVGhlIElEIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2ZcclxuICogdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdFxyXG4gKiBuYW1lIG9yIGFub3RoZXIgSUQgcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG8gXCJkZWNsYXJlXCJcclxuICogdGhlIElELiBTdWNoIElEIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaWQoIHN0eWxlPzogUnVsZVR5cGVzLkV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JSURSdWxlKTogUnVsZVR5cGVzLklJRFJ1bGVcclxuXHR7IHJldHVybiBuZXcgSURSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHNlbGVjdG9yIHJ1bGUuIFNlbGVjdG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcgb3IgdmlhIHRoZSAkc2VsZWN0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN0eWxlKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlOiBSdWxlVHlwZXMuRXh0ZW5kZWRTdHlsZXNldCk6IFJ1bGVUeXBlcy5JU2VsZWN0b3JSdWxlXHJcblx0eyByZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBSdWxlVHlwZXMuQW5pbWF0aW9uRnJhbWVbXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgUnVsZVR5cGVzLklBbmltYXRpb25SdWxlKTogUnVsZVR5cGVzLklBbmltYXRpb25SdWxlXHJcblx0eyByZXR1cm4gbmV3IEFuaW1hdGlvblJ1bGUoIGZyYW1lcywgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGN1c3RvbSB2YXJpYWJsZSBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVGhlIHZhcmlhYmxlIG5hbWUgd2lsbFxyXG4gKiBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZVxyXG4gKiBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgY3VzdG9tIHZhcmlhYmxlIHJ1bGUuIFRoZVxyXG4gKiBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgdmFsdWUganVzdCB0byBcImRlY2xhcmVcIiB0aGUgdmFyaWFibGUuIFN1Y2hcclxuICogdmFyaWFibGUgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWQgc3R5bGUgZGVmaW5pdGlvblxyXG4gKiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR2YXI8SyBleHRlbmRzIGtleW9mIElDc3NTdHlsZXNldD4oIHRlbXBsYXRlOiBLLCBwcm9wVmFsPzogSVN0eWxlc2V0W0tdLFxyXG5cdFx0XHRcdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JVmFyUnVsZTxLPik6IFJ1bGVUeXBlcy5JVmFyUnVsZTxLPlxyXG5cdHsgcmV0dXJuIG5ldyBWYXJSdWxlKCB0ZW1wbGF0ZSwgcHJvcFZhbCwgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpOiBSdWxlVHlwZXMuSUltcG9ydFJ1bGVcclxuXHR7IHJldHVybiBuZXcgSW1wb3J0UnVsZSggdXJsLCBtZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5KTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGZvbi1mYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGZvbnRmYWNlKCBmb250ZmFjZTogRm9udGZhY2UpOiBSdWxlVHlwZXMuSUZvbnRGYWNlUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIGZvbnRmYWNlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG5hbWVzcGFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRuYW1lc3BhY2UoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBSdWxlVHlwZXMuSU5hbWVzcGFjZVJ1bGVcclxuXHR7IHJldHVybiBuZXcgTmFtZXNwYWNlUnVsZSggbmFtZXNwYWNlLCBwcmVmaXgpOyB9XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRwYWdlKCBzdHlsZT86IFN0eWxlc2V0LCBwc2V1ZG9DbGFzcz86IFBhZ2VQc2V1ZG9DbGFzcyk6IFJ1bGVUeXBlcy5JUGFnZVJ1bGVcclxuXHR7IHJldHVybiBuZXcgUGFnZVJ1bGUoIHN0eWxlLCBwc2V1ZG9DbGFzcyk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzdXBwb3J0czxUIGV4dGVuZHMgUnVsZVR5cGVzLk5lc3RlZEdyb3VwPE8+LCBPIGV4dGVuZHMge30+KCBxdWVyeTogU3VwcG9ydHNRdWVyeSxcclxuXHRcdFx0XHRkZWZpbml0aW9uQ2xhc3M6IFJ1bGVUeXBlcy5JTmVzdGVkR3JvdXBDbGFzczxULE8+KTogUnVsZVR5cGVzLklTdXBwb3J0c1J1bGU8VD5cclxuXHR7IHJldHVybiBuZXcgU3VwcG9ydHNSdWxlKCBxdWVyeSwgZGVmaW5pdGlvbkNsYXNzKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG1lZGlhPFQgZXh0ZW5kcyBSdWxlVHlwZXMuTmVzdGVkR3JvdXA8Tz4sIE8gZXh0ZW5kcyB7fT4oIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LFxyXG5cdGRlZmluaXRpb25DbGFzczogUnVsZVR5cGVzLklOZXN0ZWRHcm91cENsYXNzPFQsTz4pOiBSdWxlVHlwZXMuSU1lZGlhUnVsZTxUPlxyXG5cdHsgcmV0dXJuIG5ldyBNZWRpYVJ1bGUoIHF1ZXJ5LCBkZWZpbml0aW9uQ2xhc3MpOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IgdXNpbmcgdGhlIGdpdmVuIHRlbXBsYXRlIHN0cmluZyB3aXRoIG9wdGlvbmFsXHJcbiAqIHBsYWNlaG9sZGVycyAoZS5nLiB7MH0pLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5hbWVzIG9mIHRhZ3MsIGNsYXNzZXMgYW5kIElEcyBhbmQgb3RoZXJcclxuICogcG9zc2libGUgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHNlbGVjdG9yKCB0ZW1wbGF0ZTogc3RyaW5nLCAuLi5hcmdzOiBTZWxlY3RvclRva2VuVHlwZVtdKTogQ3NzU2VsZWN0b3Jcclxue1xyXG5cdHJldHVybiAhdGVtcGxhdGUgPyBcIlwiIDogYXJncy5sZW5ndGggPT09IDAgPyB0ZW1wbGF0ZSA6IG5ldyBTZWxlY3RvclByb3h5KCB0ZW1wbGF0ZSwgYXJncyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBkZWZpbml0aW9uIGFuZCByZXR1cm5zIHRoZSBTdHlsZXNoZWV0IG9iamVjdCB0aGF0IGNvbnRhaW5zXHJcbiAqIG5hbWVzIG9mIElEcywgY2xhc3NlcyBhbmQga2V5ZnJhbWVzIGFuZCBhbGxvd3Mgc3R5bGUgbWFuaXB1bGF0aW9ucy4gRm9yIGEgZ2l2ZW4gc3R5bGVzaGVldFxyXG4gKiBkZWZpbml0aW9uIGNsYXNzIHRoZXJlIGlzIGEgc2luZ2xlIHN0eWxlc2hlZXQgb2JqZWN0LCBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXMgdGhpcyBmdW5jdGlvblxyXG4gKiBpcyBpbnZva2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR1c2U8VCBleHRlbmRzIHt9Piggc3R5bGVzaGVldERlZmluaXRpb25DbGFzczogUnVsZVR5cGVzLklTdHlsZXNoZWV0Q2xhc3M8VD4pOiBSdWxlVHlwZXMuSVN0eWxlc2hlZXQ8VD5cclxue1xyXG5cdHJldHVybiBTdHlsZXNoZWV0RnVuY3MudXNlKCBzdHlsZXNoZWV0RGVmaW5pdGlvbkNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZXNoZWV0IGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmIHRoZSBpbnB1dCBvYmplY3QgaXMgbm90XHJcbiAqIGEgc3R5bGVzaGVldCBidXQgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCBvYnRhaW4gc3R5bGVzaGVldCBieSBjYWxsaW5nIHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG4gKiBOb3RlIHRoYXQgZWFjaCBzdHlsZXNoZWV0IG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXNcclxuICogYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZCB0byBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lc1xyXG4gKiB1cCB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhY3RpdmF0ZTxUIGV4dGVuZHMge30+KCBzdHlsZXNoZWV0T3JEZWZpbml0aW9uOiBSdWxlVHlwZXMuSVN0eWxlc2hlZXQ8VD4gfCBSdWxlVHlwZXMuSVN0eWxlc2hlZXRDbGFzczxUPik6IFJ1bGVUeXBlcy5JU3R5bGVzaGVldDxUPlxyXG57XHJcblx0cmV0dXJuIFN0eWxlc2hlZXRGdW5jcy5hY3RpdmF0ZSggc3R5bGVzaGVldE9yRGVmaW5pdGlvbik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlYWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZXNoZWV0IGJ5IHJlbW92aW5nIGl0cyBydWxlcyBmcm9tIERPTS4gTm90ZSB0aGF0IGVhY2ggc3R5bGVzaGVldFxyXG4gKiBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQuIFRoZVxyXG4gKiBydWxlcyBhcmUgcmVtb3ZlZCBmcm9tIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlciBnb2VzIGRvd24gdG8gMC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZGVhY3RpdmF0ZSggc3R5bGVzaGVldDogUnVsZVR5cGVzLklTdHlsZXNoZWV0KTogdm9pZFxyXG57XHJcblx0cmV0dXJuIFN0eWxlc2hlZXRGdW5jcy5kZWFjdGl2YXRlKCBzdHlsZXNoZWV0KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAoc2hvcnQpIHJ1bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBlbmFibGVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRlbmFibGVPcHRpbWl6ZWRTdHlsZU5hbWVzKCBlbmFibGU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdHJldHVybiBTdHlsZXNoZWV0RnVuY3MuZW5hYmxlT3B0aW1pemVkU3R5bGVOYW1lcyggZW5hYmxlLCBwcmVmaXgpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7XHJcbiAgICBJU3RyaW5nUHJveHksIEV4dGVuZGVkLCBDc3NOdW1iZXIsIElVcmxQcm94eSwgQ3NzUG9zaXRpb24sIFNpbXBsZUNzc1Bvc2l0aW9uXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQge0lTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JUeXBlcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBDb2xvckZ1bmNzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JGdW5jc1wiXHJcbmltcG9ydCAqIGFzIEltYWdlVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9JbWFnZVR5cGVzXCJcclxuaW1wb3J0ICogYXMgSW1hZ2VGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlRnVuY3NcIlxyXG5pbXBvcnQgKiBhcyBTdHlsZVR5cGVzIGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7U3RyaW5nUHJveHksIHZhbHVlVG9TdHJpbmcsIFVybFByb3h5fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7c3R5bGVQcm9wVG9Dc3NTdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIHNoIGNsYXNzIHN0YW5kcyBmb3IgU3R5bGUgSGVscGVyIGFuZGNvbnRhaW5zIHN0YXRpYyBoZWxwZXIgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgd2hlbmV2ZXJcclxuICogdGhlcmUgaXMgYSBuZWVkIHRvIHByb2R1Y2UgQ1NTIHN0cmluZyB2YWx1ZSBiYXNlZCBvbiBtb3JlIGNvbXBsaWNhdGVkIHR5cGUocykuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3Mgc2hcclxue1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBVdGlsaXRpZXNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBJU3RyaW5nUHJveHkgb2JqZWN0IGZyb20gdGhlIGdpdmVuIHN0cmluZyBvciBhbm90aGVyIElTdHJpbmdQcm94eSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmF3KCBzOiBzdHJpbmcgfCBJU3RyaW5nUHJveHkpOiBJU3RyaW5nUHJveHlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHMgPT09IFwic3RyaW5nXCIgPyBuZXcgU3RyaW5nUHJveHkocykgOiBzO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHN0eWxlUHJvcE5hbWUgU3R5bGUgcHJvcGVydHkgbmFtZSB0aGF0IGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkXHJcbiAgICAgKiB0byBhIENTUyBjb21wbGlhbnQgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHN0eWxlUHJvcFZhbHVlIFZhbHVlIHRvIGNvbnZlcnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdmFsPEsgZXh0ZW5kcyBrZXlvZiBJU3R5bGVzZXQ+KCBzdHlsZVByb3BOYW1lOiBLLCBzdHlsZVByb3BWYWx1ZTogSVN0eWxlc2V0W0tdKTogc3RyaW5nIHwgbnVsbFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBzdHlsZVByb3BUb0Nzc1N0cmluZyggc3R5bGVQcm9wTmFtZSwgc3R5bGVQcm9wVmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIElVcmxQcm94eSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBDU1MgYHVybCgpYCBmdW5jdGlvbi4gVGhlIHN0cmluZyBwYXJhbWV0ZXJcclxuICAgICAqIHdpbGwgYmUgd3JhcHBlZCBpbiBhIFwidXJsKClcIiBpbnZvY2F0aW9uIHVubGVzcyBpdCBhbHJlYWR5IGlzLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHVybCggdmFsOiBFeHRlbmRlZDxzdHJpbmc+KTogSVVybFByb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVcmxQcm94eSggdmFsKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gQ29sb3JzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgcmVkLCBncmVlbiwgYmx1ZSBzZXBhcmF0aW9uIHZhbHVlcyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICAgICAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAgICAgKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciBvciBhXHJcbiAgICAgKiBzdHJpbmcgd2l0aCB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAgICAgKiAgIC0gSW50ZWdlciBudW1iZXIgMCB0byAyNTUuXHJcbiAgICAgKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gICAgICogICAtIFN0cmluZyB3aGljaCBpcyB1c2VkIGFzIGlzLlxyXG4gICAgICogXHJcbiAgICAgKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICAgICAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHIgUmVkIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhdWUuXHJcbiAgICAgKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZ2IoIHI6IG51bWJlciB8IHN0cmluZywgZzogbnVtYmVyIHwgc3RyaW5nLCBiOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvckZ1bmNzLlJnYlByb3h5KCByLCBnLCBiLCBhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAgICAgKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gICAgICogdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAgICAgKiBcclxuICAgICAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICAgICAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gICAgICogICAtIFN0cmluZyB3aGljaCBpcyB1c2VkIGFzIGlzLlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gaCBIdWUgY29tcG9uZW50IGFzIGFuIGFuZ2xlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIHMgU2F0dXJhdGlvbiBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGhzbCggaDogbnVtYmVyIHwgc3RyaW5nLCBzOiBudW1iZXIgfCBzdHJpbmcsIGw6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IENvbG9yVHlwZXMuSUNvbG9yUHJveHlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yRnVuY3MuSHNsUHJveHkoIGgsIHMsIGwsIGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIGNvbG9yIGFuZCBhbiBvcHRpb25hbCBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICAgICAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvciB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICAgICAqIFRoZSBjb2xvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgbnVtZXJpYyB2YWx1ZSBvciBhcyBhIHN0cmluZyBjb2xvciBuYW1lLlxyXG4gICAgICogXHJcbiAgICAgKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICAgICAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGMgXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgQ29sb3JUeXBlcy5JTmFtZWRDb2xvcnMsIGE6IG51bWJlciB8IHN0cmluZyk6IENvbG9yVHlwZXMuSUNvbG9yUHJveHlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IENvbG9yRnVuY3MuQWxwaGFQcm94eSggYywgYSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBJbWFnZXNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBJSW1hZ2VQcm94eSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBgbGluZWFyLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsaW5lYXJHcmFkaWVudCggYW5nbGU/OiBJbWFnZVR5cGVzLkxpbmVhckdyYWRBbmdsZSxcclxuICAgICAgICAuLi5zdG9wc09ySGludHM6IEltYWdlVHlwZXMuR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVR5cGVzLklJbWFnZVByb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZUZ1bmNzLkxpbmVhckdyYWRpZW50UHJveHkoIFwibGluZWFyLWdyYWRpZW50XCIsIGFuZ2xlLCBzdG9wc09ySGludHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhbiBJSW1hZ2VQcm94eSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmVwZWF0aW5nTGluZWFyR3JhZGllbnQoIGFuZ2xlPzogSW1hZ2VUeXBlcy5MaW5lYXJHcmFkQW5nbGUsXHJcbiAgICAgICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogSW1hZ2VUeXBlcy5JSW1hZ2VQcm94eVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgSW1hZ2VGdW5jcy5MaW5lYXJHcmFkaWVudFByb3h5KCBcInJlcGVhdGluZy1saW5lYXItZ3JhZGllbnRcIiwgYW5nbGUsIHN0b3BzT3JIaW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIElJbWFnZVByb3h5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhZGlhbEdyYWRpZW50KCBzaGFwZT86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRTaGFwZSxcclxuICAgICAgICBleHRlbnQ/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50RXh0ZW50LCBwb3M/OiBDc3NQb3NpdGlvbixcclxuICAgICAgICAuLi5zdG9wc09ySGludHM6IEltYWdlVHlwZXMuR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVR5cGVzLklJbWFnZVByb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZUZ1bmNzLlJhZGlhbEdyYWRpZW50UHJveHkoIFwicmFkaWFsLWdyYWRpZW50XCIsIHNoYXBlLCBleHRlbnQsIHBvcywgc3RvcHNPckhpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gSUltYWdlUHJveHkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlcGVhdGluZ1JhZGlhbEdyYWRpZW50KCBzaGFwZT86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRTaGFwZSxcclxuICAgICAgICBleHRlbnQ/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50RXh0ZW50LCBwb3M/OiBDc3NQb3NpdGlvbixcclxuICAgICAgICAuLi5zdG9wc09ySGludHM6IEltYWdlVHlwZXMuR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVR5cGVzLklJbWFnZVByb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZUZ1bmNzLlJhZGlhbEdyYWRpZW50UHJveHkoIFwicmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudFwiLCBzaGFwZSwgZXh0ZW50LCBwb3MsIHN0b3BzT3JIaW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIElJbWFnZVByb3h5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlYGNvbmljLWdyYWRpZW50KClgICBDU1MgZnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY29uaWNHcmFkaWVudCggYW5nbGU/OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBwb3M/OiBTaW1wbGVDc3NQb3NpdGlvbixcclxuICAgICAgICAuLi5zdG9wc09ySGludHM6IEltYWdlVHlwZXMuR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVR5cGVzLklJbWFnZVByb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbWFnZUZ1bmNzLkNvbmljR3JhZGllbnRQcm94eSggYW5nbGUsIHBvcywgc3RvcHNPckhpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW4gSUltYWdlUHJveHkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYGNyb3NzLWZhZGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyb3NzRmFkZSggLi4uYXJnczogSW1hZ2VUeXBlcy5Dcm9zc0ZhZGVQYXJhbVtdKTogSW1hZ2VUeXBlcy5JSW1hZ2VQcm94eVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgSW1hZ2VGdW5jcy5Dcm9zc0ZhZGVQcm94eSggYXJncyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIEFuaW1hdGlvbnNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIGFuaW1hdGlvbiBwcm9wZXJ0eS5cclxuICAgICAqIEBwYXJhbSBuYW1lIEFuaW1hdGlvbiBuYW1lLiBUaGlzIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSByZWZlcmVuY2UgdG8gdGhlIGFuaW1hdGlvblxyXG4gICAgICogcnVsZSBkZWZpbml0aW9uLlxyXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIEFuaW1hdGlvbiBkdXJhdGlvbi4gSW50ZWdlciBudW1iZXJzIGZvciBtaWxsaXNlY29uZHMsIGZsb2F0aW5nIHBvaW50XHJcbiAgICAgKiBudW1iZXJzIGZvciBzZWNvbmRzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxIHNlY29uZC5cclxuICAgICAqIEBwYXJhbSBmdW5jIFRpbWluZyBmdW5jdGlvbi4gRGVmYXVsdCB2YWx1ZSBpcyBcImVhc2VcIi4gVGhpcyBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAgICAgKiAgIC0gb25lIG9mIHByZS1kZWZpbmVkIHRpbWluZyBmdW5jdGlvbiBuYW1lcy5cclxuICAgICAqICAgLSBhIG51bWJlciBvZiBzdGVwcyBpbiB0aGUgc3RlcHMgZnVuY3Rpb24uIFRoZSBzdGVwIHBvc2l0aW9uIHdpbGwgYmUgc2V0IHRvIGp1bXAtc3RhcnQuXHJcbiAgICAgKiAgIC0gb25lLSBvciB0d28taXRlbSBhcnJheSB0aGF0IGRlZmluZXMgYSBzdGVwIGZ1bmN0aW9uLiBUaGUgZmlyc3QgaXRlbSBkZWZpbmVzIHRoZSBudW1iZXJcclxuICAgICAqICAgICBvZiBzdGVwcy4gVGhlIG9wdGlvbmFsIHNlY29uZCBpdGVtIGlzIG9uZSBvZiBwcmUtZGVmaW5lZCBzdGVwIHBvc3Rpb24gbmFtZXMuXHJcbiAgICAgKiAgIC0gZm91ci1pdGVtIGFycmF5IHRoYXQgZGVmaW5lcyBjdWJpYy1iZXppZXIgZnVuY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzLiBJbnRlZ2VyIG51bWJlcnMgZm9yIG1pbGxpc2Vjb25kcywgZmxvYXRpbmdcclxuICAgICAqIHBvaW50IG51bWJlcnMgZm9yIHNlY29uZHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXHJcbiAgICAgKiBAcGFyYW0gY291bnQgTnVtYmVyIG9mIGl0ZXJhdGlvbnMgdGhlIGFuaW1hdGlvbiBzaG9sZCBydW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEuXHJcbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uIEFuaW1hdGlvbiBkaXJlY3Rpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwibm9ybWFsXCIuXHJcbiAgICAgKiBAcGFyYW0gbW9kZSBBbmltYXRpb24gZmlsbCBtb2RlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBcIm5vbmVcIi5cclxuICAgICAqIEBwYXJhbSBzdGF0ZSBBbmltYXRpb24gc3RhdGUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwicnVubmluZ1wiLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFuaW1hdGlvbiggbmFtZTogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5TaW5nbGVBbmltYXRpb25OYW1lPixcclxuICAgICAgICBkdXJhdGlvbjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiA9IDEwMDAsXHJcbiAgICAgICAgZnVuYzogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5TaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvbj4gPSBcImVhc2VcIixcclxuICAgICAgICBkZWxheTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiA9IDAsXHJcbiAgICAgICAgY291bnQ6IEV4dGVuZGVkPFN0eWxlVHlwZXMuU2luZ2xlQW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ+ID0gMSxcclxuICAgICAgICBkaXJlY3Rpb246IEV4dGVuZGVkPFN0eWxlVHlwZXMuU2luZ2xlQW5pbWF0aW9uRGlyZWN0aW9uPiA9IFwibm9ybWFsXCIsXHJcbiAgICAgICAgbW9kZTogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5TaW5nbGVBbmltYXRpb25GaWxsTW9kZT4gPSBcIm5vbmVcIixcclxuICAgICAgICBzdGF0ZTogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5TaW5nbGVBbmltYXRpb25QbGF5U3RhdGU+ID0gXCJydW5uaW5nXCIsXHJcbiAgICAgICAgKTogU3R5bGVUeXBlcy5TaW5nbGVBbmltYXRpb25cclxuICAgIHtcclxuICAgICAgICByZXR1cm4geyBuYW1lLCBkdXJhdGlvbiwgZnVuYywgZGVsYXksY291bnQsIGRpcmVjdGlvbiwgc3RhdGUsIG1vZGUgfTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBVdGlsVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBVdGlsRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSA8bnVtYmVyPlxyXG4gKiBDU1MgdHlwZS4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleSBhcmVcclxuICogY29udmVydGVkIHRvIHN0cmluZ3Mgd2l0aG91dCBhcHBlbmRpbmcgYW55IHVuaXRzIHRvIHRoZW0uXHJcbiAqL1xyXG5leHBvcnQgbGV0IE51bTogVXRpbFR5cGVzLklDc3NOdW1iZXJNYXRoID0gbmV3IFV0aWxGdW5jcy5Dc3NOdW1iZXJNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTGVuIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIDxsZW5ndGg+XHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGxlbmd0aCB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcInB4XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiZW1cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgTGVuOiBVdGlsVHlwZXMuSUNzc0xlbmd0aE1hdGggPSBuZXcgVXRpbEZ1bmNzLkNzc0xlbmd0aE1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmdsZSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSA8YW5nbGU+XHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhbiBhbmdsZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImRlZ1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInJhZFwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBBbmdsZTogVXRpbFR5cGVzLklDc3NBbmdsZU1hdGggPSBuZXcgVXRpbEZ1bmNzLkNzc0FuZ2xlTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRpbWUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgPHRpbWU+XHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHRpbWUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJtc1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInNcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgVGltZTogVXRpbFR5cGVzLklDc3NUaW1lTWF0aCA9IG5ldyBVdGlsRnVuY3MuQ3NzVGltZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSZXNvbHV0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxyZXNvbHV0aW9uPiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSByZXNvbHV0aW9uIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiZHBpXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiZHBjbVwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBSZXNvbHV0aW9uOiBVdGlsVHlwZXMuSUNzc1Jlc29sdXRpb25NYXRoID0gbmV3IFV0aWxGdW5jcy5Dc3NSZXNvbHV0aW9uTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZyZXF1ZW5jeSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8ZnJlcXVlbmN5PiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBmcmVxdWVuY3kgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJIelwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImtIelwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBGcmVxdWVuY3k6IFV0aWxUeXBlcy5JQ3NzRnJlcXVlbmN5TWF0aCA9IG5ldyBVdGlsRnVuY3MuQ3NzRnJlcXVlbmN5TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZyYWN0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxmcmFjdGlvbj4gQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgZnJhY3Rpb24gdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJmclwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcIiVcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgRnJhY3Rpb246IFV0aWxUeXBlcy5JQ3NzRnJhY3Rpb25NYXRoID0gbmV3IFV0aWxGdW5jcy5Dc3NGcmFjdGlvbk1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQZXJjZW50IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxwZXJjZW50YWdlPiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBcIiVcIiB1bml0IHN1ZmZpeC5cclxuICovXHJcbmV4cG9ydCBsZXQgUGVyY2VudDogVXRpbFR5cGVzLklDc3NQZXJjZW50TWF0aCA9IG5ldyBVdGlsRnVuY3MuQ3NzUGVyY2VudE1hdGgoKTtcclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltY3NzXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9Db2xvclR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9JbWFnZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvdXRpbHNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL3J1bGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9zaFwiO1xyXG4iLCJpbXBvcnQge0lBYnN0cmFjdFJ1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIFJ1bGVUeXBlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQWJzdHJhY3RSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGJhc2UgZm9yIG90aGVyIHN0eWxlXHJcbiAqIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0UnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElBYnN0cmFjdFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5BQlNUUkFDVCwgc3R5bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQWJzdHJhY3RSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQWJzdHJhY3RSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBPdmVycmlkZXMgdGhlIFN0eWxlUnVsZSdzIGltcGxlbWVudGF0aW9uIHRvIGRvIG5vdGhpbmcuIE5vIENTU1N0eWxlUnVsZSBpcyBjcmVhdGVkIGZvclxyXG5cdC8vIGFic3RyYWN0IHJ1bGVzLlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzQWJzdHJhY3RSdWxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUFuaW1hdGlvblJ1bGUsIEFuaW1hdGlvbkZyYW1lLCBSdWxlVHlwZSwgSU5hbWVkRW50aXR5fSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElSdWxlQ29udGFpbmVyT3duZXIsIGNyZWF0ZU5hbWVzfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQGtleWZyYW1lcyBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25SdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25SdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZyYW1lcz86IEFuaW1hdGlvbkZyYW1lW10sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5BTklNQVRJT04pO1xyXG5cclxuXHRcdGlmIChmcmFtZXMpXHJcblx0XHRcdHRoaXMuZnJhbWVSdWxlcyA9IGZyYW1lcy5tYXAoIChrZXlmcmFtZSkgPT4gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSgga2V5ZnJhbWUpKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCAgb3duZXI6IElSdWxlQ29udGFpbmVyT3duZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cclxuXHRcdGZvciggbGV0IGtleWZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdGtleWZyYW1lUnVsZS5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQW5pbWF0aW9uUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEFuaW1hdGlvblJ1bGUoKTtcclxuXHRcdGlmICh0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdG5ld1J1bGUuZnJhbWVSdWxlcyA9IHRoaXMuZnJhbWVSdWxlcy5tYXAoIChrZXlmcmFtZVJ1bGUpID0+IGtleWZyYW1lUnVsZS5jbG9uZSgpKTtcclxuXHRcdG5ld1J1bGUubmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBrZXlmcmFtZXMgJHt0aGlzLm5hbWV9IHt9YCwgcGFyZW50KTtcclxuXHJcblx0XHRsZXQgY3NzS2V5ZnJhbWVzUnVsZSA9IHRoaXMuY3NzUnVsZSBhcyBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cdFx0Zm9yKCBsZXQga2V5ZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjc3NLZXlmcmFtZXNSdWxlLmFwcGVuZFJ1bGUoIGtleWZyYW1lUnVsZS50b0Nzc1N0cmluZygpKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKHgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcIkNhbm5vdCBhZGQgQ1NTIGtleWZyYW1lIHJ1bGVcIiwgeClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuICAgIC8qKiBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGlzIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBJQW5pbWF0aW9uTmFtZVByb3h5IGludGVyZmFjZSAqL1xyXG4gICAgcHVibGljIGdldCBpc0FuaW1hdGlvbk5hbWVQcm94eSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICAvKiogQ29udmVydHMgaW50ZXJuYWxseSBoZWxkIHZhbHVlKHMpIHRvIHN0cmluZyAtIHJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGFuaW1hdGlvbiAqL1xyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cHVibGljIGdldCBjc3NLZXlmcmFtZXNSdWxlKCk6IENTU0tleWZyYW1lc1J1bGUgeyByZXR1cm4gdGhpcy5jc3NSdWxlIGFzIENTU0tleWZyYW1lc1J1bGU7IH1cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gY2xhc3MgYW5kIElEIHJ1bGVzICovXHJcblx0cHVibGljIGZyYW1lUnVsZXM6IEFuaW1hdGlvbkZyYW1lUnVsZVtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWVSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUga2V5ZnJhbWUgY2xhdXNlIGluIHRoZSBhbmltYXRpb24gcnVsZS5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmcmFtZT86IEFuaW1hdGlvbkZyYW1lKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5LRVlGUkFNRSwgZnJhbWUgPyBmcmFtZVsxXSA6IHVuZGVmaW5lZCk7XHJcblxyXG5cdFx0aWYgKGZyYW1lKVxyXG5cdFx0XHR0aGlzLndheXBvaW50ID0gdHlwZW9mIGZyYW1lWzBdID09PSBcInN0cmluZ1wiID8gZnJhbWVbMF0gOiBmcmFtZVswXSArIFwiJVwiO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQW5pbWF0aW9uRnJhbWVSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQW5pbWF0aW9uRnJhbWVSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdG5ld1J1bGUud2F5cG9pbnQgPSB0aGlzLndheXBvaW50O1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLndheXBvaW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSWRlbnRpZmllciBvZiB0aGUgd2F5cG9pbnQgYXMgYSBzdHJpbmcgKi9cclxuXHRwdWJsaWMgd2F5cG9pbnQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lDbGFzc1J1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIFJ1bGVUeXBlLCBJTmFtZWRFbnRpdHl9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVcIjtcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQ2xhc3NSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNsYXNzUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuQ0xBU1MsIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVJ1bGVDb250YWluZXJPd25lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCIuXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ2xhc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQ2xhc3NSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0NsYXNzUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDbGFzc1J1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJRm9udEZhY2VSdWxlLCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7Rm9udGZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCB7Zm9udEZhY2VUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZUZ1bmNzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRm9udEZhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBmb250LWZhY2UgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9udEZhY2VSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElGb250RmFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZm9udGZhY2U6IEZvbnRmYWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5GT05URkFDRSk7XHJcblxyXG5cdFx0dGhpcy5mb250ZmFjZSA9IGZvbnRmYWNlO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEZvbnRGYWNlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgRm9udEZhY2VSdWxlKCB0aGlzLmZvbnRmYWNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAZm9udC1mYWNlICR7Zm9udEZhY2VUb0Nzc1N0cmluZyggdGhpcy5mb250ZmFjZSl9YCwgcGFyZW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzRm9udEZhY2VSdWxlKCk6IENTU0ZvbnRGYWNlUnVsZSB7IHJldHVybiB0aGlzLmNzc1J1bGUgYXMgQ1NTRm9udEZhY2VSdWxlOyB9XHJcblxyXG5cdC8vIE9iamVjdCBkZWZpbmluZyBmb250LWZhY2UgcHJvcGVydGllcy5cclxuXHRwdWJsaWMgZm9udGZhY2U6IEZvbnRmYWNlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7UnVsZVR5cGUsIElOZXN0ZWRHcm91cENsYXNzLCBOZXN0ZWRHcm91cH0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlQ29udGFpbmVyfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuaW1wb3J0IHtJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi9SdWxlXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcm91cFJ1bGUgY2xhc3Mgc2VydmVzIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIGdyb3VwaW5nIENTUyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcm91cFJ1bGU8VCBleHRlbmRzIE5lc3RlZEdyb3VwPE8+LCBPIGV4dGVuZHMge30+IGV4dGVuZHMgUnVsZUNvbnRhaW5lcjxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBSdWxlVHlwZSwgZGVmaW5pdGlvbkNsYXNzOiBJTmVzdGVkR3JvdXBDbGFzczxULE8+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCB0eXBlKTtcclxuXHRcdHRoaXMuZGVmaW5pdGlvbkNsYXNzID0gZGVmaW5pdGlvbkNsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gcHJvY2VzcyBzdWItcnVsZXNcclxuXHRcdHRoaXMucHJvY2Vzc1J1bGVzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIGRlZmluaXRpb24gY2xhc3Mgb3IgbnVsbCBpZiBmYWlsdXJlXHJcblx0cHJvdGVjdGVkIGNyZWF0ZURlZmluaXRpb25JbnN0YW5jZSgpOiBUIHwgbnVsbFxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRyZXR1cm4gbmV3IHRoaXMuZGVmaW5pdGlvbkNsYXNzKCB0aGlzLm93bmVyLmdldERlZmluaXRpb25JbnN0YW5jZSgpIGFzIE8pO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGluc3RhbnRpYXRpbmcgR3JvdXAgUnVsZSBEZWZpbml0aW9uIENsYXNzICcke3RoaXMuZGVmaW5pdGlvbkNsYXNzLm5hbWV9J2AsIGVycik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSB0aGlzLmluc2VydEdyb3VwaW5nUnVsZSggcGFyZW50KTtcclxuXHJcblx0XHQvLyBpbnNlcnQgc3ViLXJ1bGVzXHJcblx0XHRpZiAodGhpcy5jc3NSdWxlKVxyXG5cdFx0XHR0aGlzLmluc2VydFJ1bGVzKCB0aGlzLmNzc1J1bGUgYXMgQ1NTR3JvdXBpbmdSdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgaW5zZXJ0R3JvdXBpbmdSdWxlKCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlO1xyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGNsZWFyIHN1Yi1ydWxlc1xyXG5cdFx0dGhpcy5jbGVhclJ1bGVzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsYXNzIHRoYXQgZGVmaW5lZCB0aGlzIHN0eWxlc2hlZXQuXHJcblx0cHJvdGVjdGVkIGRlZmluaXRpb25DbGFzczogSU5lc3RlZEdyb3VwQ2xhc3M8VCxPPjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lJRFJ1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIFJ1bGVUeXBlLCBJTmFtZWRFbnRpdHl9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVcIjtcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhbiBJRC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJRFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJSURSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUlEUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuSUQsIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVJ1bGVDb250YWluZXJPd25lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCIjXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogSURSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgSURSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0lEUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElJRFJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJSW1wb3J0UnVsZSwgUnVsZVR5cGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge21lZGlhUXVlcnlUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJbXBvcnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW1wb3J0UnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJSW1wb3J0UnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB1cmw6IHN0cmluZywgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnksIHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5JTVBPUlQpO1xyXG5cclxuXHRcdHRoaXMudXJsID0gdXJsO1xyXG5cdFx0dGhpcy5tZWRpYVF1ZXJ5ID0gbWVkaWFRdWVyeTtcclxuXHRcdHRoaXMuc3VwcG9ydHNRdWVyeSA9IHN1cHBvcnRzUXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJbXBvcnRSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB0aGlzLnVybCwgdGhpcy5tZWRpYVF1ZXJ5LCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgdXJsO1xyXG5cdFx0aWYgKCF0aGlzLnVybClcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy51cmwuc3RhcnRzV2l0aChcInVybFwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiXFxcIlwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiJ1wiKSlcclxuXHRcdFx0dXJsID0gdGhpcy51cmw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHVybCA9IGB1cmwoJHt0aGlzLnVybH0pYDtcclxuXHJcblx0XHRsZXQgc3VwcG9ydHNRdWVyeVN0cmluZyA9ICF0aGlzLnN1cHBvcnRzUXVlcnlcclxuXHRcdFx0PyBcIlwiXHJcblx0XHRcdDogdHlwZW9mIHRoaXMuc3VwcG9ydHNRdWVyeSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdD8gdGhpcy5zdXBwb3J0c1F1ZXJ5XHJcblx0XHRcdFx0OiBzdXBwb3J0c1F1ZXJ5VG9Dc3NTdHJpbmcoIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblxyXG5cdFx0aWYgKHN1cHBvcnRzUXVlcnlTdHJpbmcgJiYgIXN1cHBvcnRzUXVlcnlTdHJpbmcuc3RhcnRzV2l0aCggXCJzdXBwb3J0c1wiKSlcclxuXHRcdHN1cHBvcnRzUXVlcnlTdHJpbmcgPSBgc3VwcG9ydHMoICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gKWA7XHJcblxyXG5cdFx0bGV0IG1lZGlhUXVlcnlTdHJpbmcgPSAhdGhpcy5tZWRpYVF1ZXJ5XHJcblx0XHRcdD8gXCJcIlxyXG5cdFx0XHQ6IHR5cGVvZiB0aGlzLm1lZGlhUXVlcnkgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0XHQ/IHRoaXMubWVkaWFRdWVyeVxyXG5cdFx0XHRcdDogbWVkaWFRdWVyeVRvQ3NzU3RyaW5nKCB0aGlzLm1lZGlhUXVlcnkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAaW1wb3J0ICR7dXJsfSAke3N1cHBvcnRzUXVlcnlTdHJpbmd9ICR7bWVkaWFRdWVyeVN0cmluZ31gLCBwYXJlbnQpO1xyXG59XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzSW1wb3J0UnVsZSgpOiBDU1NJbXBvcnRSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NJbXBvcnRSdWxlOyB9XHJcblxyXG5cdC8vIFVSTCB0byBpbXBvcnQgZnJvbS5cclxuXHRwdWJsaWMgdXJsOiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG5cclxuXHQvLyBPcHRpb25hbCBzdXBwb3J0cyBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzdXBwb3J0c1F1ZXJ5OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SU1lZGlhUnVsZSwgUnVsZVR5cGUsIElOZXN0ZWRHcm91cENsYXNzLCBOZXN0ZWRHcm91cH0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtHcm91cFJ1bGV9IGZyb20gXCIuL0dyb3VwUnVsZVwiXHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9Dc3NTdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVkaWFSdWxlPFQgZXh0ZW5kcyBOZXN0ZWRHcm91cDxPPiwgTyBleHRlbmRzIHt9PiBleHRlbmRzIEdyb3VwUnVsZTxULE8+IGltcGxlbWVudHMgSU1lZGlhUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSwgZGVmaW5pdGlvbkNsYXNzOiBJTmVzdGVkR3JvdXBDbGFzczxULE8+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5NRURJQSwgZGVmaW5pdGlvbkNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBNZWRpYVJ1bGU8VCxPPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTWVkaWFSdWxlPFQsTz4oIHRoaXMucXVlcnksIHRoaXMuZGVmaW5pdGlvbkNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0R3JvdXBpbmdSdWxlKCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gdHlwZW9mIHRoaXMucXVlcnkgPT09IFwic3RyaW5nXCIgPyB0aGlzLnF1ZXJ5IDogbWVkaWFRdWVyeVRvQ3NzU3RyaW5nKCB0aGlzLnF1ZXJ5KTtcclxuXHRcdHJldHVybiBSdWxlLmFkZFJ1bGVUb0RPTSggYEBtZWRpYSAke3F1ZXJ5U3RyaW5nfSB7fWAsIHBhcmVudCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzTWVkaWFSdWxlKCk6IENTU01lZGlhUnVsZSB7IHJldHVybiB0aGlzLmNzc1J1bGUgYXMgQ1NTTWVkaWFSdWxlOyB9XHJcblxyXG5cdC8vIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SU5hbWVzcGFjZVJ1bGUsIFJ1bGVUeXBlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE5hbWVzcGFjZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBOYW1lc3BhY2VSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLk5BTUVTUEFDRSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XHJcblx0XHR0aGlzLnByZWZpeCA9IHByZWZpeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE5hbWVzcGFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIHRoaXMubmFtZXNwYWNlLCB0aGlzLnByZWZpeCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5uYW1lc3BhY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgdXJsID0gdGhpcy5uYW1lc3BhY2Uuc3RhcnRzV2l0aCggXCJ1cmwoXCIpID8gdGhpcy5uYW1lc3BhY2UgOiBgdXJsKCR7dGhpcy5uYW1lc3BhY2V9KWA7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBuYW1lc3BhY2UgJHt0aGlzLnByZWZpeCA/IHRoaXMucHJlZml4IDogXCJcIn0gJHt1cmx9YCwgcGFyZW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBuYW1lc3BhY2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzTmFtZXNwYWNlUnVsZSgpOiBDU1NOYW1lc3BhY2VSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NOYW1lc3BhY2VSdWxlOyB9XHJcblxyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVBhZ2VSdWxlLCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiO1xyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhZ2VSdWxlIGNsYXNzIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhZ2VSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVBhZ2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogU3R5bGVzZXQsIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5QQUdFLCBzdHlsZSk7XHJcblx0XHR0aGlzLnBzZXVkb0NsYXNzID0gcHNldWRvQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBQYWdlUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IFBhZ2VSdWxlKCB1bmRlZmluZWQsIHRoaXMucHNldWRvQ2xhc3MpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGBAcGFnZSAke3RoaXMucHNldWRvQ2xhc3MgPyB0aGlzLnBzZXVkb0NsYXNzIDogXCJcIn1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHBhZ2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzUGFnZVJ1bGUoKTogQ1NTUGFnZVJ1bGUgeyByZXR1cm4gdGhpcy5jc3NSdWxlIGFzIENTU1BhZ2VSdWxlOyB9XHJcblxyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cHVibGljIHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJUnVsZSwgUnVsZVR5cGUsIElOYW1lZEVudGl0eSwgSVN0eWxlc2hlZXR9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVDb250YWluZXJPd25lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlc2hlZXQgdGhhdCBcIm93bnNcIiB0aGUgcnVsZXMgdW5kZXIgdGhpc1xyXG4gKiBjb250YWluZXIuIEluIHBhcnRpY3VsYXIsIHRoZSBvd25lcidzIGpvYiBpcyB0byBnZW5lcmF0ZSBcInNjb3BlZFwiIHVuaXF1ZSBuYW1lcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVDb250YWluZXJPd25lclxyXG57XHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogYW55O1xyXG5cclxuXHQvKiogQWRkcyBhbiBleHRlcm5hbCBzdHlsZXNoZWV0IHRvIHRoaXMgc3R5bGVzaGVldCAqL1xyXG5cdGFkZEV4dGVybmFsU3R5bGVzaGVldCggc3R5bGVzaGVldDogSVN0eWxlc2hlZXQpOiB2b2lkO1xyXG5cclxuXHQvKiogR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZXNoZWV0ICovXHJcblx0Z2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgcnVsZXMuIEFzIGEgcGFyZW50IG9mIFJ1bGVDb250YWluZXIsIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGlzIGFsc28gYW4gYW5jZXN0b3IgZm9yIFN0eWxlc2hlZXQ7IGhvd2V2ZXIsIG1vc3Qgb2YgaXRzIHRoZSBmaWVsZHMgYXJlIHVuZGVmaW5lZCBpblxyXG4gKiB0ZSBTdHlsZXNoZWV0IGluc3RhbmNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlIGltcGxlbWVudHMgSVJ1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBydWxlVHlwZTogUnVsZVR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy5ydWxlVHlwZSA9IHJ1bGVUeXBlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMub3duZXIgPSBvd25lcjtcclxuXHRcdHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBSdWxlIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0Ly8gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MsIGlzIGFjdGl2YXRlZC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkIHt9XHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB0byB3aGljaFxyXG5cdC8vIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBkZWFjdGl2YXRlZC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7IHRoaXMuY3NzUnVsZSA9IG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSBnaXZlbiBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIHN0YXRpYyBhZGRSdWxlVG9ET00oIHJ1bGVUZXh0OiBzdHJpbmcsIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IENTU1J1bGVcclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGluZGV4ID0gcGFyZW50Lmluc2VydFJ1bGUoIHJ1bGVUZXh0LCBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoKTtcclxuXHRcdFx0cmV0dXJuIHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcblx0XHR9XHJcblx0XHRjYXRjaCggeClcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYENhbm5vdCBhZGQgQ1NTIHJ1bGUgJyR7cnVsZVRleHR9J2AsIHgpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogVHlwZSBvZiB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyByZWFkb25seSBydWxlVHlwZTogUnVsZVR5cGU7XHJcblxyXG5cdC8vIFN0eWxlc2hlZXQgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuIFRoaXMgaXMgXCJ0aGlzXCIgZm9yIFN0eWxlc2hlZXQuXHJcblx0cHVibGljIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBDU1NSdWxlLWRlcml2ZWQgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFjdHVhbGwgQ1NTIHJ1bGUgaW5zZXJ0ZWQgaW50b1xyXG5cdC8vIHRoZSBzdHlsZXMgc2hlZXQgb3IgdGhlIHBhcmVudCBydWxlLiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgU3R5bGVzaGVldCBvYmplY3RzLlxyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHNjb3BlZCBuYW1lcyBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXMoIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nLCBuYW1lT3ZlcnJpZGU6IHN0cmluZyB8IElOYW1lZEVudGl0eSxcclxuXHRjc3NQcmVmaXg/OiBzdHJpbmcpOiBbc3RyaW5nLHN0cmluZ11cclxue1xyXG5cdGxldCBuYW1lID0gIW5hbWVPdmVycmlkZVxyXG5cdFx0PyBvd25lci5nZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWUpXHJcblx0XHQ6IHR5cGVvZiBuYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0PyBuYW1lT3ZlcnJpZGVcclxuXHRcdFx0OiBuYW1lT3ZlcnJpZGUubmFtZTtcclxuXHJcblx0cmV0dXJuIFtuYW1lLCBjc3NQcmVmaXggPyBuYW1lLnN0YXJ0c1dpdGgoIGNzc1ByZWZpeCkgPyBuYW1lIDogY3NzUHJlZml4ICsgbmFtZSA6IG5hbWVdO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7TmFtZXNPZlByb3BzT2ZUeXBlLCBQcm9wc09mVHlwZSwgSVJ1bGUsIElDbGFzc1J1bGUsIElJRFJ1bGUsIElBbmltYXRpb25SdWxlLCBJVmFyUnVsZSxcclxuXHRJUnVsZUNvbnRhaW5lciwgUnVsZVR5cGUsIElTdHlsZXNoZWV0XHJcblx0XHR9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7Q2xhc3NSdWxlfSBmcm9tIFwiLi9DbGFzc1J1bGVcIlxyXG5pbXBvcnQge0lEUnVsZX0gZnJvbSBcIi4vSURSdWxlXCJcclxuaW1wb3J0IHtBbmltYXRpb25SdWxlfSBmcm9tIFwiLi9BbmltYXRpb25SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCJcclxuaW1wb3J0IHtJbXBvcnRSdWxlfSBmcm9tIFwiLi9JbXBvcnRSdWxlXCJcclxuaW1wb3J0IHtOYW1lc3BhY2VSdWxlfSBmcm9tIFwiLi9OYW1lc3BhY2VSdWxlXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlQ29udGFpbmVyIGNsYXNzIGlzIGEgYmFzZSBmb3IgY2xhc3NlcyB0aGF0IGNvbnRhaW4gQ1NTIHJ1bGVzOyB0aGF0IGlzLCBzdHlsZXNoZWV0IGFuZFxyXG4gKiBncm91cGluZyBydWxlcy4gVGhlIFJ1bGVDb250YWluZXIgY2xhc3MgaW1wbGVtZW50cyBwYXJzaW5nIGZvcm0gb2YgYSBydWxlIGRlZmluaXRpb24gY2xhc3Mgb3JcclxuICogb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGVDb250YWluZXI8VCBleHRlbmRzIHt9ID0ge30+IGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElSdWxlQ29udGFpbmVyPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IG51bWJlcilcclxuXHR7XHJcblx0XHRzdXBlciggdHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBNYXAgb2YgbmFtZXMgb2YgcHJvcGVydGllcyBkZWZpbmluZyBjbGFzcyBydWxlcyB0byBhY3R1YWwgY2xhc3MgbmFtZXMuICovXHJcblx0cHVibGljIGdldCBjbGFzc2VzKCk6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElDbGFzc1J1bGU+IHsgcmV0dXJuIHRoaXMuX2NsYXNzZXMgYXMgTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUNsYXNzUnVsZT4gfVxyXG5cclxuXHQvKiogTWFwIG9mIG5hbWVzIG9mIHByb3BlcnRpZXMgZGVmaW5pbmcgSUQgcnVsZXMgdG8gYWN0dWFsIElEcy4gKi9cclxuXHRwdWJsaWMgZ2V0IGlkcygpOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJSURSdWxlPiB7IHJldHVybiB0aGlzLl9pZHMgYXMgTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUlEUnVsZT47IH1cclxuXHJcblx0LyoqIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIGFuaW1hdGlvbiBydWxlcyB0byBhY3R1YWwgYW5pbWF0aW9uIG5hbWVzLiAqL1xyXG5cdHB1YmxpYyBnZXQgYW5pbWF0aW9ucygpOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT4geyByZXR1cm4gdGhpcy5fYW5pbWF0aW9ucyBhcyBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT47IH1cclxuXHJcblx0LyoqIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIGN1c3RvbSBwcm9wZXJ0eSBydWxlcyB0byB0aGUgSVZhclJ1bGUgb2JqZWN0cy4gKi9cclxuXHRwdWJsaWMgZ2V0IHZhcnMoKTogUHJvcHNPZlR5cGU8VCxJVmFyUnVsZT4geyByZXR1cm4gdGhpcy5fdmFycyBhcyBQcm9wc09mVHlwZTxULElWYXJSdWxlPjsgfVxyXG5cclxuXHQvKiogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHJ1bGUgb2JqZWN0cy4gKi9cclxuXHRwdWJsaWMgZ2V0IHJ1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSVJ1bGU+IHsgcmV0dXJuIHRoaXMuX3J1bGVzIGFzIFByb3BzT2ZUeXBlPFQsSVJ1bGU+OyB9XHJcblxyXG5cdC8qKiAgTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIGV4dGVybmFsIHN0eWxlc2hlZXRzIGNyZWF0ZWQgdXNpbmcgdGhlICR1c2UgZnVuY3Rpb24uICovXHJcblx0cHVibGljIGdldCB1c2VzKCk6IFByb3BzT2ZUeXBlPFQsSVN0eWxlc2hlZXQ+IHsgcmV0dXJuIHRoaXMuX3VzZXMgYXMgUHJvcHNPZlR5cGU8VCxJU3R5bGVzaGVldD47IH1cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBpbnN0YW5jZSwgcGFyc2VzIGl0cyBwcm9wZXJ0aWVzIGFuZCBjcmVhdGVzIG5hbWVzIGZvclxyXG5cdC8vIGNsYXNzZXMsIElEcywgYW5pbWF0aW9ucy5cclxuXHRwcm90ZWN0ZWQgcHJvY2Vzc1J1bGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgZGVmaW5pdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZFxyXG5cdFx0aWYgKHRoaXMuaXNQcm9jZXNzZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmFsbFJ1bGVzID0gW107XHJcblx0XHR0aGlzLmltcG9ydFJ1bGVzID0gW107XHJcblx0XHR0aGlzLm5hbWVzcGFjZVJ1bGVzID0gW107XHJcblx0XHR0aGlzLmFsbE5hbWVzID0ge307XHJcblxyXG5cdFx0dGhpcy5fY2xhc3NlcyA9IHt9O1xyXG5cdFx0dGhpcy5faWRzID0ge307XHJcblx0XHR0aGlzLl9hbmltYXRpb25zID0ge307XHJcblx0XHR0aGlzLl92YXJzID0ge307XHJcblx0XHR0aGlzLl9ydWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5fdXNlcyA9IHt9O1xyXG5cclxuXHRcdC8vIGdldCB0aGUgXCJydWxlIGRlZmluaXRpb25cIiBvYmplY3Qgd2hvc2UgcHJvcGVydGllcyBhcmUgdGhlIHJ1bGUgb2JqZWN0c1xyXG5cdFx0bGV0IHJ1bGVzRGVmID0gdGhpcy5jcmVhdGVEZWZpbml0aW9uSW5zdGFuY2UoKTtcclxuXHRcdGlmICghcnVsZXNEZWYpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRob3NlIHRoYXQgYXJlIHJ1bGVzLFxyXG5cdFx0Ly8gY3VzdG9tIHZhciBkZWZpbml0aW9ucyBhbmQgYXJyYXlzLlxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcnVsZXNEZWYpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gcnVsZXNEZWZbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFZhclJ1bGUpXHJcblx0XHRcdFx0dGhpcy5wcm9jZXNzVmFyUnVsZSggcHJvcE5hbWUsIHByb3BWYWwgYXMgVmFyUnVsZSlcclxuXHRcdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFJ1bGUpXHJcblx0XHRcdFx0dGhpcy5wcm9jZXNzTmFtZWRSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbCBhcyBSdWxlKTtcclxuXHRcdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHRcdFx0XHR0aGlzLnByb2Nlc3NVbm5hbWVkUnVsZXMoIHByb3BWYWwpXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIGRlZmluaXRpb24gY2xhc3Mgb3IgbnVsbCBpZiBmYWlsdXJlXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZURlZmluaXRpb25JbnN0YW5jZSgpOiBUIHwgbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIHByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZTogc3RyaW5nLCB2YXJPYmo6IFZhclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAodmFyT2JqLmNvbnRhaW5lcilcclxuXHRcdFx0dmFyT2JqID0gdmFyT2JqLmNsb25lKCk7XHJcblxyXG5cdFx0dmFyT2JqLnByb2Nlc3MoIHRoaXMsIHRoaXMub3duZXIsIHByb3BOYW1lKTtcclxuXHJcblx0XHR0aGlzLmFsbE5hbWVzW3Byb3BOYW1lXSA9IHZhck9iai5uYW1lO1xyXG5cdFx0dGhpcy5fdmFyc1twcm9wTmFtZV0gPSB2YXJPYmo7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gUnVsZS1kZXJpdmVkIG9iamVjdC5cclxuXHRwcml2YXRlIHByb2Nlc3NOYW1lZFJ1bGUoIHByb3BOYW1lOiBzdHJpbmcsIHJ1bGU6IFJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gU3R5bGVzaGVldCBkZXJpdmVzIGZyb20gUnVsZSAodmlhIFJ1bGVDb250YWluZXIpOyBob3dldmVyLCBpdCBpcyBub3QgYSByZWFsIHJ1bGUuXHJcblx0XHQvLyBXZSBpbmZvcm0gb3VyIG93bmVyIHN0eWxlc2hlZXQgYWJvdXQgdGhlIFwiaW1wb3J0ZWRcIiBzdHlsZXNoZWV0IHNvIHRoYXQgd2hlbiB0aGUgb3duZXJcclxuXHRcdC8vIHN0eWxlc2hlZXQgaXMgYWN0aXZhdGVkLCB0aGUgaW1wb3J0ZWQgb25lIGlzIGFjdGl2YXRlZCB0b28uXHJcblx0XHRpZiAocnVsZS5ydWxlVHlwZSA9PT0gUnVsZVR5cGUuU0NPUEUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX3VzZXNbcHJvcE5hbWVdID0gcnVsZSBhcyBhbnkgYXMgSVN0eWxlc2hlZXQ7XHJcblx0XHRcdHRoaXMub3duZXIuYWRkRXh0ZXJuYWxTdHlsZXNoZWV0KCBydWxlIGFzIGFueSBhcyBJU3R5bGVzaGVldCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB0aGUgcnVsZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlc2hlZXQsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0Ly8gcnVsZSBhbmQgYXNzaWduIGl0IHRvIG91ciBzdHlsZXNoZWV0LlxyXG5cdFx0aWYgKHJ1bGUub3duZXIpXHJcblx0XHRcdHJ1bGUgPSBydWxlLmNsb25lKCk7XHJcblxyXG5cdFx0cnVsZS5wcm9jZXNzKCB0aGlzLm93bmVyLCBwcm9wTmFtZSk7XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgdGhlIHJ1bGVcclxuXHRcdHRoaXMuX3J1bGVzW3Byb3BOYW1lXSA9IHJ1bGU7XHJcblx0XHR0aGlzLmFsbFJ1bGVzLnB1c2goIHJ1bGUpO1xyXG5cclxuXHRcdC8vIHB1dCBydWxlcyBhbmQgdGhlaXIgbmFtZXMgaW50byBidWNrZXRzXHJcblx0XHRpZiAocnVsZSBpbnN0YW5jZW9mIENsYXNzUnVsZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5hbGxOYW1lc1twcm9wTmFtZV0gPSBydWxlLm5hbWU7XHJcblx0XHRcdHRoaXMuX2NsYXNzZXNbcHJvcE5hbWVdID0gcnVsZS5uYW1lO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIElEUnVsZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5hbGxOYW1lc1twcm9wTmFtZV0gPSBydWxlLm5hbWU7XHJcblx0XHRcdHRoaXMuX2lkc1twcm9wTmFtZV0gPSBydWxlLm5hbWU7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgQW5pbWF0aW9uUnVsZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5hbGxOYW1lc1twcm9wTmFtZV0gPSBydWxlLm5hbWU7XHJcblx0XHRcdHRoaXMuX2FuaW1hdGlvbnNbcHJvcE5hbWVdID0gcnVsZS5uYW1lO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIEltcG9ydFJ1bGUpXHJcblx0XHRcdHRoaXMuaW1wb3J0UnVsZXMucHVzaCggcnVsZSk7XHJcblx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgTmFtZXNwYWNlUnVsZSlcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VSdWxlcy5wdXNoKCBydWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJ1bGVzIGZyb20gdGhlIGdpdmVuIGFycmF5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1VubmFtZWRSdWxlcyggcHJvcFZhbHM6IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcHJvcFZhbHMgfHwgcHJvcFZhbHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aG9zZSB0aGF0IGFyZSBydWxlcy5cclxuXHRcdGZvciggbGV0IHByb3BWYWwgb2YgcHJvcFZhbHMpXHJcblx0XHR7XHJcblx0XHRcdGlmICghKHByb3BWYWwgaW5zdGFuY2VvZiBSdWxlKSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBydWxlID0gcHJvcFZhbCBhcyBSdWxlO1xyXG5cclxuXHRcdFx0Ly8gU3R5bGVzaGVldCBkZXJpdmVzIGZyb20gUnVsZSAodmlhIFJ1bGVDb250YWluZXIpOyBob3dldmVyLCBpdCBpcyBub3QgYSByZWFsIHJ1bGUuXHJcblx0XHRcdC8vIFdlIGluZm9ybSBvdXIgb3duZXIgc3R5bGVzaGVldCBhYm91dCB0aGUgXCJpbXBvcnRlZFwiIHN0eWxlc2hlZXQgc28gdGhhdCB3aGVuIHRoZSBvd25lclxyXG5cdFx0XHQvLyBzdHlsZXNoZWV0IGlzIGFjdGl2YXRlZCwgdGhlIGltcG9ydGVkIG9uZSBpcyBhY3RpdmF0ZWQgdG9vLlxyXG5cdFx0XHRpZiAocnVsZS5ydWxlVHlwZSA9PT0gUnVsZVR5cGUuU0NPUEUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm93bmVyLmFkZEV4dGVybmFsU3R5bGVzaGVldCggcnVsZSBhcyBhbnkgYXMgSVN0eWxlc2hlZXQpO1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgcnVsZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlc2hlZXQsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRcdGlmIChydWxlLm93bmVyKVxyXG5cdFx0XHRcdHJ1bGUgPSBydWxlLmNsb25lKCk7XHJcblxyXG5cdFx0XHRydWxlLnByb2Nlc3MoIHRoaXMub3duZXIsIG51bGwpO1xyXG5cclxuXHRcdFx0dGhpcy5hbGxSdWxlcy5wdXNoKCBydWxlKTtcclxuXHRcdFx0aWYgKHJ1bGUgaW5zdGFuY2VvZiBJbXBvcnRSdWxlKVxyXG5cdFx0XHRcdHRoaXMuaW1wb3J0UnVsZXMucHVzaCggcnVsZSk7XHJcblx0XHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBOYW1lc3BhY2VSdWxlKVxyXG5cdFx0XHRcdHRoaXMubmFtZXNwYWNlUnVsZXMucHVzaCggcnVsZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGFzIHRoZXkgbXVzdCBiZSBiZWZvcmUgb3RoZXIgcnVsZXMuIElmIHRoZSBwYXJlbnQgaXMgYSBncm91cGluZ1xyXG5cdFx0Ly8gcnVsZSwgZG9uJ3QgaW5zZXJ0IEBpbXBvcnQgcnVsZXMgYXQgYWxsXHJcblx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRSdWxlcyAmJiB0aGlzLmltcG9ydFJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5pbnNlcnQoIHBhcmVudCkpXHJcblx0XHRcdHRoaXMubmFtZXNwYWNlUnVsZXMgJiYgdGhpcy5uYW1lc3BhY2VSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGlzZXJ0IG91ciBjdXN0b20gdmFyaWFibGVzIGluIGEgXCI6cm9vdFwiIHJ1bGVcclxuXHRcdGxldCB2YXJOYW1lcyA9IE9iamVjdC5rZXlzKCB0aGlzLl92YXJzKTtcclxuXHRcdGlmICh2YXJOYW1lcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgOnJvb3QgeyR7dmFyTmFtZXMubWFwKCAodmFyTmFtZSkgPT5cclxuXHRcdFx0XHR0aGlzLl92YXJzW3Zhck5hbWVdLnRvQ3NzU3RyaW5nKCkpLmpvaW4oXCI7XCIpfX1gLCBwYXJlbnQpIGFzIENTU1N0eWxlUnVsZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbnNlcnQgYWxsIG90aGVyIHJ1bGVzXHJcblx0XHRmb3IoIGxldCBydWxlIG9mIHRoaXMuYWxsUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGlmICghKHJ1bGUgaW5zdGFuY2VvZiBJbXBvcnRSdWxlIHx8IHJ1bGUgaW5zdGFuY2VvZiBOYW1lc3BhY2VSdWxlKSlcclxuXHRcdFx0XHRydWxlLmluc2VydCggcGFyZW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlYXJzIGFsbCBDU1MgcnVsZSBvYmplY3RzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuXHJcblx0cHJvdGVjdGVkIGNsZWFyUnVsZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gbnVsbFxyXG5cclxuXHRcdC8vIGluc2VydCBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMuYWxsUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBnaXZlbiB2YWx1ZSBmb3IgdGhlIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWVcclxuXHRwdWJsaWMgc2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUpXHJcblx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlLnN0eWxlLnNldFByb3BlcnR5KCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiBudWxsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGVscGVyIHByb3BlcnRpZXNcclxuXHRwdWJsaWMgZ2V0IGlzUHJvY2Vzc2VkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLl9ydWxlczsgfVxyXG5cclxuXHJcblxyXG5cdC8vIE5hbWVzIG9mIGFsbCBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuXHJcblx0cHVibGljIGFsbE5hbWVzOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcblx0Ly8gTGlzdCBvZiBhbGwgcnVsZXMgZXhjZXB0IEBpbXBvcnRcclxuXHRwdWJsaWMgYWxsUnVsZXM6IFJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBAaW1wb3J0IHJ1bGVzXHJcblx0cHVibGljIGltcG9ydFJ1bGVzOiBJbXBvcnRSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQG5hbWVzcGFjZSBydWxlc1xyXG5cdHB1YmxpYyBuYW1lc3BhY2VSdWxlczogTmFtZXNwYWNlUnVsZVtdO1xyXG5cclxuXHQvLyBNYXAgb2YgbmFtZXMgb2YgcHJvcGVydGllcyBkZWZpbmluZyBjbGFzcyBydWxlcyB0byBhY3R1YWwgY2xhc3MgbmFtZXMuXHJcblx0cHJpdmF0ZSBfY2xhc3NlczogeyBbSzogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG5cdC8vIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIElEIHJ1bGVzIHRvIGFjdHVhbCBJRHMuXHJcblx0cHJpdmF0ZSBfaWRzOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcblx0Ly8gTWFwIG9mIG5hbWVzIG9mIHByb3BlcnRpZXMgZGVmaW5pbmcgYW5pbWF0aW9uIHJ1bGVzIHRvIGFjdHVhbCBhbmltYXRpb24gbmFtZXMuXHJcblx0cHJpdmF0ZSBfYW5pbWF0aW9uczogeyBbSzogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG5cdC8vIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIGN1c3RvbSBwcm9wZXJ0eSBydWxlcyB0byB0aGUgVmFyUnVsZSBvYmplY3RzLlxyXG5cdHByaXZhdGUgX3ZhcnM6IHsgW0s6IHN0cmluZ106IFZhclJ1bGUgfTtcclxuXHJcblx0Ly8gTWFwIG9mIG5hbWVzIG9mIHByb3BlcnRpZXMgb2YgdGhlIHJ1bGUgZGVmaW5pdGlvbnMgdG8gdGhlIFJ1bGUgb2JqZWN0cy5cclxuXHRwcml2YXRlIF9ydWxlczogeyBbSzogc3RyaW5nXTogSVJ1bGUgfTtcclxuXHJcblx0Ly8gIE1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byBleHRlcm5hbCBzdHlsZXNoZWV0cyBjcmVhdGVkIHVzaW5nIHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgX3VzZXM6IHsgW0s6IHN0cmluZ106IElTdHlsZXNoZWV0IH1cclxuXHJcblx0Ly8gXCI6cm9vdFwiIHJ1bGUgd2hlcmUgYWxsIGN1c3RvbSBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIGFyZSBkZWZpbmVkLlxyXG5cdHByaXZhdGUgY3NzQ3VzdG9tVmFyU3R5bGVSdWxlOiBDU1NTdHlsZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgbW9kdWxlIGRlZmluZXMgdHlwZXMgYW5kIGludGVyZmFjZXMgdGhhdCByZXByZXNlbnQgQ1NTIHJ1bGVzLlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQge0lWYXJQcm94eX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtJU3R5bGVzZXQsIFN0eWxlc2V0LCBJQ3NzU3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lBbmltYXRpb25OYW1lUHJveHl9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge1BzZXVkb0NsYXNzLCBQc2V1ZG9FbGVtZW50LCBDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG4vKiogVXRpbGl0eSB0eXBlIHRoYXQgcmVwcmVzZW50cyBhbGwgcHJvcGVydGllcyBvZiB0eXBlIFQgdGhhdCBhcmUgb2YgdHlwZSBVICovXHJcbnR5cGUgUHJvcHNPZlR5cGVPck5ldmVyPFQsVT4gPSB7IFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgVSA/IEsgOiBuZXZlciB9O1xyXG5cclxuLyoqIFV0aWxpdHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgbmFtZXMgb2YgYWxsIHByb3BlcnRpZXMgb2YgdHlwZSBUIHRoYXQgYXJlIG9mIHR5cGUgVSAqL1xyXG50eXBlIFByb3BOYW1lc09mVHlwZTxULFU+ID0gUHJvcHNPZlR5cGVPck5ldmVyPFQsVT5ba2V5b2YgVF07XHJcblxyXG4vKiogVXRpbGl0eSB0eXBlIHRoYXQgcmVwcmVzZW50cyBzdHJpbmcgdmFsdWVzIG1hcHBlZCB0byBuYW1lcyBvZiBwcm9wZXJ0aWVzIG9mIHR5cGUgVCB0aGF0IGFyZSBvZiB0eXBlIFUuICovXHJcbmV4cG9ydCB0eXBlIE5hbWVzT2ZQcm9wc09mVHlwZTxULFU+ID0geyByZWFkb25seSBbSyBpbiBQcm9wTmFtZXNPZlR5cGU8VCxVPl06IHN0cmluZyB9O1xyXG5cclxuLyoqIFR5cGUgdGhhdCByZXByZXNlbnRzIGFsbCBwcm9wZXJ0aWVzIG9mIHR5cGUgVCB0aGF0IGFyZSBvZiB0eXBlIFUgKi9cclxuZXhwb3J0IHR5cGUgUHJvcHNPZlR5cGU8VCxVPiA9IHsgcmVhZG9ubHkgW0sgaW4gUHJvcE5hbWVzT2ZUeXBlPFQsVT5dOiBUW0tdIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXh0ZW5kZWRTdHlsZXNldCB0eXBlIGV4dGVuZHMgdGhlIFN0eWxlc2V0IHR5cGUgd2l0aCBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBwcm92aWRlXHJcbiAqIGFkZGl0aW9uYWwgbWVhbmluZyB0byB0aGUgc3R5bGVzZXQgYW5kIGFsbG93IGJ1aWxkaW5nIG5lc3RlZCBzdHlsZXM6XHJcbiAqIC0gVGhlIGArYCBwcm9wZXJ0eSBzcGVjaWZpZXMgb25lIG9yIG1vcmUgcGFyZW50IHN0eWxlIHJ1bGVzLiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nXHJcbiAqICAgcGFyZW50IHJ1bGVzIHVzaW5nIGEgY29udmVuaWVudCBzdHlsZS1wcm9wZXJ0eS1saWtlIG5vdGF0aW9uLlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBwc2V1ZG8gY2xhc3MgbmFtZXMgKGUuZy4gXCI6aG92ZXJcIikgb3IgcHNldWRvIGVsZW1lbnQgbmFtZXMgKGUuZy4gXCI6OmFmdGVyXCIpLlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gVGhlIFwiJlwiIHByb3BlcnR5IHRoYXQgY29udGFpbnMgYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIGVhY2ggZGVmaW5pbmcgYSBzZWxlY3RvciBhbmQgYVxyXG4gKiAgIHN0eWxlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBzZWxlY3Rvci4gU2VsZWN0b3JzIGNhbiB1c2UgdGhlIGFtcGVyc2FuZCBzeW1ib2wgKCcmJykgdG8gcmVmZXJcclxuICogICB0byB0aGUgcGFyZW50IHN0eWxlIHNlbGVjdG9yLlxyXG4gKiBcclxuICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIHN0eWxlIHJ1bGVzIChlLmcuICRjbGFzcykgYWNjZXB0IHRoZSBFeHRlbmRlZFN0eWxlc2V0IGFzIGEgcGFyYW1ldGVyLFxyXG4gKiBmb3IgZXhhbXBsZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgTXlTdHlsZXNcclxuICoge1xyXG4gKiAgICAgbXlDbGFzcyA9ICRjbGFzcygge1xyXG4gKiAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gKiAgICAgICAgIFwiOmhvdmVyXCIgOiB7XHJcbiAqICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmF5XCJcclxuICogICAgICAgICB9LFxyXG4gKiAgICAgICAgIFwiJlwiOiBbXHJcbiAqICAgICAgICAgICAgIFsgXCJsaSA+ICZcIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIgfSBdXHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgfSlcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoaXMgd2lsbCB0cmFuc2xhdGUgdG8gdGhlIGZvbGxvd2luZyBDU1MgKGNsYXNzIG5hbWUgaXMgYXV0by1nZW5lcmF0ZWQpOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB3aGl0ZTsgfVxyXG4gKiAubTEyMzpob3ZlciB7IGJhY2tncm91bmRDb2xvcjogZ3JheTsgfVxyXG4gKiBsaSA+IC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3c7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFN0eWxlc2V0ID0gU3R5bGVzZXQgJiB7IFtLIGluIFBzZXVkb0NsYXNzIHwgUHNldWRvRWxlbWVudF0/OiBFeHRlbmRlZFN0eWxlc2V0IH0gJlxyXG5cdHtcclxuXHRcdFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSxcclxuXHRcdFwiJlwiPzogW0Nzc1NlbGVjdG9yLCBFeHRlbmRlZFN0eWxlc2V0XVtdLFxyXG5cdH07XHJcblx0XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZVR5cGUgZW51bWVyYXRpb24gbGlzdHMgdHlwZXMgb2YgcnVsZXMgdGhhdCBNaW1jc3MgbGlicmFyeSB3b3JrcyB3aXRoLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gUnVsZVR5cGVcclxue1xyXG4gICAgVEFHID0gMSxcclxuICAgIENMQVNTLFxyXG4gICAgSUQsXHJcbiAgICBTRUxFQ1RPUixcclxuICAgIEFOSU1BVElPTixcclxuICAgIEtFWUZSQU1FLFxyXG4gICAgU1VQUE9SVFMsXHJcbiAgICBNRURJQSxcclxuICAgIEZPTlRGQUNFLFxyXG4gICAgSU1QT1JULFxyXG4gICAgTkFNRVNQQUNFLFxyXG4gICAgUEFHRSxcclxuXHRWSUVXUE9SVCxcclxuXHRET0NVTUVOVCxcclxuXHJcblx0Ly8gbm90IHJlYWwgcnVsZXMgYnV0IGRlcml2ZSBmcm9tIHRoZSBSdWxlIG9iamVjdFxyXG4gICAgU0NPUEUgPSA1MCxcclxuXHRBQlNUUkFDVCxcclxuXHRORVNURUQsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvbiB0aGUgcnVsZSBkZWZpbml0aW9uIG9iamVjdCB0byB3aGljaCB0aGlzIHJ1bGUgaXMgYXNzaWduZWQuICovXHJcblx0cmVhZG9ubHkgcnVsZU5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFR5cGUgb2YgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBydWxlVHlwZTogUnVsZVR5cGU7XHJcblxyXG5cdC8qKiBTT00gcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1J1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcyB0aGF0IGhhdmUgYSBuYW1lOyB0aGF0IGlzLFxyXG4gKiBjbGFzcywgSUQsIGtleWZyYW1lcyBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgY3NzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxpbmcgcnVsZSBpbiBhIHN0eWxlIHNoZWV0LiBTdHlsZSBydWxlcyBjYW4gYmUgdXNlZFxyXG4gKiBhbnl3aGVyZSB3aGVyZSBzdHlsZSBwcm9wZXJ0aWVzIGNhbiBiZSBkZWZpbmVkOiBjbGFzcyBydWxlcywgSUQgcnVsZXMsIHNlbGVjdG9yIHJ1bGVzLFxyXG4gKiBrZXlmcmFtZXMsIGV0Yy4gU3R5bGVSdWxlIGRlZmluZXMgYSBzdHlsZXNldCBhbmQgY2FuIG9wdGlvbmFsbHkgcG9pbnQgdG8gb25lIG9yIG1vcmUgc3R5bGUgcnVsZXNcclxuICogZnJvbSB3aGljaCBpdCBpbmhlcml0cy4gQSBzdHlsZXNldCBjb21iaW5lcyBhbGwgdGhlIHByb3BlcnRpZXMgZnJvbSBpdHMgb3duIHByb3BlcnR5IGJsb2NrIGFzXHJcbiAqIHdlbGwgYXMgZnJvbSBhbGwgb2Ygc3R5bGUgcnVsZXMgaXQgaW5oZXJpdGVzIGZyb20uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzU3R5bGVSdWxlOiBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHNldFByb3A8SyBleHRlbmRzIGtleW9mIElTdHlsZXNldD4oIG5hbWU6IEssIHZhbHVlOiBJU3R5bGVzZXRbS10sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY3VzdG1vbSBjU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBjdXN0b21WYXIgSUNVc3RvbVZhciBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHNldEN1c3RvbVByb3A8SyBleHRlbmRzIGtleW9mIElTdHlsZXNldD4oIGN1c3RvbVZhcjogSVZhclJ1bGU8Sz4sIHZhbHVlOiBJU3R5bGVzZXRbS10sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFic3RyYWN0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgdGhhdCBjYW4gb25seSBiZSB1c2VkIGFzIGEgYmFzZSBmb3Igb3RoZXJcclxuICogc3R5bGUgcnVsZXMuIE5vIENTU1N0eWxlUnVsZSBvYmplY3RzIGFyZSBjcmVhdGVkIGZvciB0aGUgYWJzdHJhY3QgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdFJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogRmxhZywgd2hpY2ggaXMgYWx3YXlzIHRydWUsIHRoYXQgaXMgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGFic3RyYWN0IHJ1bGVzIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRyZWFkb25seSBpc0Fic3RyYWN0UnVsZTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUYWdSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIHRhZyBuYW1lLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skdGFnXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUYWdSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIEhUTUwgdGFnICovXHJcblx0cmVhZG9ubHkgdGFnOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIGNsYXNzLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY2xhc3NdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzUnVsZSBleHRlbmRzIElTdHlsZVJ1bGUsIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIEZsYWcsIHdoaWNoIGlzIGFsd2F5cyB0cnVlLCB0aGF0IGlzIG5lZWRlZCB0byBkaXN0aW5ndWlzaCBjbGFzcyBydWxlcyBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cmVhZG9ubHkgaXNDbGFzc1J1bGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSURSdWxlIGludGVyZmFjZSByZXByZXNlbnRzYSBhIHN0eWxlIHJ1bGUgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRpZF1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSURSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogRmxhZywgd2hpY2ggaXMgYWx3YXlzIHRydWUsIHRoYXQgaXMgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIElEIHJ1bGVzIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRyZWFkb25seSBpc0lEUnVsZTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZWxlY3RvclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHNhIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZXMgYnkgdGhlXHJcbiAqIGdpdmVuIHNlbGVjdG9yLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3R5bGVdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdG9yUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRyZWFkb25seSBzZWxlY3RvclRleHQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25SdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRrZXlmcmFtZXNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5LCBJQW5pbWF0aW9uTmFtZVByb3h5XHJcbntcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzS2V5ZnJhbWVzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZSB0eXBlIGRlZmluZXMgYSBzaW5nbGUga2V5ZnJhbWUgd2l0aGluIGEgQGtleWZyYW1lcyBydWxlLlxyXG4gKiBUaGUgd2F5cG9pbnQgY2FuIGJlIHNwZWNpZmllZCBhcyBcImZyb21cIiBvciBcInRvXCIgc3RyaW5ncyBvciBhcyBhIG51bWJlciAwIHRvIDEwMCwgd2hpY2ggd2lsbCBiZVxyXG4gKiB1c2VkIGFzIGEgcGVyY2VudC4gU3R5bGVzZXQgZm9yIGEga2V5ZnJhbWUgYWxsb3dzIGN1c3RvbSBwcm9wZXJ0aWVzICh2aWEgXCItLVwiKSBidXQgZG8gbm90XHJcbiAqIGFsbG93IHRoZSAhaW1wb3J0YW50IGZsYWcgKFwiIVwiKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZyYW1lID0gW1wiZnJvbVwiIHwgXCJ0b1wiIHwgbnVtYmVyLCBPbWl0PEV4dGVuZGVkU3R5bGVzZXQsXCIhXCI+XTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSW1wb3J0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGltcG9ydF1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1wb3J0UnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGltcG9ydCBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzSW1wb3J0UnVsZTogQ1NTSW1wb3J0UnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElGb250RmFjZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAZm9udC1mYWNlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRmb250ZmFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRm9udEZhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NGb250RmFjZVJ1bGU6IENTU0ZvbnRGYWNlUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lc3BhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbmFtZXNwYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lc3BhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzTmFtZXNwYWNlUnVsZTogQ1NTTmFtZXNwYWNlUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYWdlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRwYWdlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYWdlUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cmVhZG9ubHkgcHNldWRvQ2xhc3M6IFBhZ2VQc2V1ZG9DbGFzcyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBuYW1lc3BhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1BhZ2VSdWxlOiBDU1NQYWdlUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skdmFyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYXJSdWxlPEsgZXh0ZW5kcyBrZXlvZiBJQ3NzU3R5bGVzZXQgPSBhbnk+IGV4dGVuZHMgSU5hbWVkRW50aXR5LCBJVmFyUHJveHk8SUNzc1N0eWxlc2V0W0tdPlxyXG57XHJcblx0LyoqXHJcblx0ICogTmFtZSBvZiB0aGUgcHJvcGVydHkgb24gdGhlIHJ1bGUgZGVmaW5pdGlvbiBvYmplY3QgdG8gd2hpY2ggdGhpcyBydWxlIGlzIGFzc2lnbmVkLlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IHJ1bGVOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuICovXHJcblx0cmVhZG9ubHkgdGVtcGxhdGU6IEs7XHJcblxyXG5cdC8qKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuICovXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRzZXRWYWx1ZSggdmFsdWU6IElTdHlsZXNldFtLXSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlQ29udGFpbmVyPFQgZXh0ZW5kcyB7fSA9IHt9PlxyXG57XHJcblx0LyoqIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIGNsYXNzIHJ1bGVzIHRvIGFjdHVhbCBjbGFzcyBuYW1lcy4gKi9cclxuXHRyZWFkb25seSBjbGFzc2VzOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ2xhc3NSdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIElEIHJ1bGVzIHRvIGFjdHVhbCBJRHMuICovXHJcblx0cmVhZG9ubHkgaWRzOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJSURSdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIGFuaW1hdGlvbiBydWxlcyB0byBhY3R1YWwgYW5pbWF0aW9uIG5hbWVzLiAqL1xyXG5cdHJlYWRvbmx5IGFuaW1hdGlvbnM6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElBbmltYXRpb25SdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIGRlZmluaW5nIGN1c3RvbSBwcm9wZXJ0eSBydWxlcyB0byB0aGUgSVZhclJ1bGUgb2JqZWN0cy4gKi9cclxuXHRyZWFkb25seSB2YXJzOiBQcm9wc09mVHlwZTxULElWYXJSdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byBydWxlIG9iamVjdHMuICovXHJcblx0cmVhZG9ubHkgcnVsZXM6IFByb3BzT2ZUeXBlPFQsSVJ1bGU+O1xyXG5cclxuXHQvKiogIE1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byBleHRlcm5hbCBzdHlsZXNoZWV0cyBjcmVhdGVkIHVzaW5nIHRoZSAkdXNlIGZ1bmN0aW9uLiAqL1xyXG5cdHJlYWRvbmx5IHVzZXM6IFByb3BzT2ZUeXBlPFQsSVN0eWxlc2hlZXQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlc2hlZXQgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIHJlc3VsdGFudCBzdHlsZXNoZWV0IGFmdGVyIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb25cclxuICogaGFzIGJlZW4gcHJvY2Vzc2VkLiBUaGUgc3R5bGVzaGVldCBvYmplY3QgY29udGFpbnMgbmFtZXMgb2YgSURzLCBjbGFzc2VzIGFuZCBhbmltYXRpb25zLCB3aGljaFxyXG4gKiBjYW4gYmUgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24gY29kZS4gVGhlIGludGVyZmFjZSBhbHNvIHByb3ZpZGVzIG1ldGhvZHMgdGhhdCBhcmUgdXNlZCB0b1xyXG4gKiBtYW5pcHVsYXRlIHRoZSBydWxlcyBhbmQgdGhlaXIgc3R5bGVzZXRzLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skdXNlXV0gYW5kIFtbJGFjdGl2YXRlXV0gZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVzaGVldDxUIGV4dGVuZHMge30gPSB7fT4gZXh0ZW5kcyBJUnVsZUNvbnRhaW5lcjxUPlxyXG57XHJcblx0LyoqIERPTSBzdHlsZSBlbGVtZW50IHRoYXQgY29udGFpbnMgQ1NTIHN0eWxlIHNoZWV0IHRoYXQgY29udGFpbnMgcnVsZXMgZGVmaW5lZCBieSB0aGlzIHN0eWxlc2hlZXQqL1xyXG5cdHJlYWRvbmx5IGRvbVN0eWxlRWxtOiBIVE1MU3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3NlcyBjYW4gYmUgY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlc2hlZXRDbGFzczxUIGV4dGVuZHMge30gPSB7fT5cclxue1xyXG5cdC8qKiBBbGwgc3R5bGVzaGVldCBkZWZpbml0aW9uIG9iamVjdHMgc2hvdWxkIGNvbmZvcm0gdG8gdGhpcyBjb25zdHJ1Y3RvciAqL1xyXG5cdG5ldygpOiBUO1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluaWRpY2F0aW5nIHRoYXQgbXVsdGlwbGUgc3R5bGVzaGVldHMgY2FuIGJlIGNyZWF0ZWQgZm9yIHRoaXMgc3R5bGVzaGVldCBkZWZpbml0aW9uIC1cclxuXHQgKiBlYWNoIHRpbWUgd2l0aCB1bmlxdWUgcnVsZSBJRHMuIFRoaXMgaXMgdXNlZnVsIGZvciBzdHlsZXMgY3JlYXRlZCBmb3IgYSBjb250cm9sIC0gZS5nLiB0cmVlXHJcblx0ICogb3IgYWNjb3JkZW9uIC0gd2hpY2ggY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgcGFnZSBidXQgd2l0aCBkaWZmZXJlbnQgc3R5bGVzLlxyXG5cdCAqIEJ5IGRlZmF1bHQsIHN0eWxlc2hlZXQgZGVmaW5pdGlvbnMgYXJlIHNpbmd1bGFyLCB0aGF0IGlzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3R5bGVzaGVldFxyXG5cdCAqIG9iamVjdCBpcyBjcmVhdGVkIGZvciB0aGVtIGFuZCBpbnNlcnRlZCBpbnRvIERPTS5cclxuXHQgKi9cclxuXHRpc011bHRpcGxleD86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOZXN0ZWRHcm91cCBjbGFzcyBpcyBhIGJhc2UgZm9yIGFsbCBjbGFzc2VzIHRoYXQgZGVmaW5lIG5lc3RlZCBncm91cGluZyBydWxlcy4gVXNlIGl0IHRoZVxyXG4gKiBmb2xsb3dpbmcgd2F5OlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlc1xyXG4gKiB7XHJcbiAqICAgICAvLyA4cHggcGFkZGluZyBvbiByZWd1bGFyIGRldmljZXNcclxuICogICAgIGRlZmF1bHRQYWRkaW5nID0gJHZhciggXCJwYWRkaW5nXCIsIDgpXHJcbiAqIFxyXG4gKiAgICAgaWZOYXJyb3dEZXZpY2UgPSAkbWVkaWEoIHttYXhXaWR0aDogNjAwIH0sXHJcbiAqICAgICAgICAgY2xhc3MgZXh0ZW5kcyBOZXN0ZWRHcm91cDxNeVN0eWxlcz5cclxuICogICAgICAgICB7XHJcbiAqICAgICAgICAgICAgIC8vIDRweCBwYWRkaW5nIG9uIG5hcnJvdyBkZXZpY2VzXHJcbiAqICAgICAgICAgICAgIGRlZmF1bHRQYWRkaW5nID0gJHZhciggXCJwYWRkaW5nXCIsIExlbi5jYWxjKCBcInswfSAvIDJcIiwgdGhpcy5vd25lci5kZWZhdWx0UGFkZGluZykpXHJcbiAqICAgICAgICAgfVxyXG4gKiAgICAgKVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBAdHlwZXBhcmFtIE8gU3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzLCB3aGljaCBpcyB0aGUgb3duZXIgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5lc3RlZEdyb3VwPFQgZXh0ZW5kcyB7fT5cclxue1xyXG5cdGNvbnN0cnVjdG9yKCBvd25lcjogVClcclxuXHR7XHJcblx0XHR0aGlzLm93bmVyID0gb3duZXI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgd2hpY2ggaXMgdGhlIG93bmVyIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS4gVGhyb3VnaCB0aGlzXHJcblx0ICogbWVtZWJlciwgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhlIGRlZmluaXRpb24gY2xhc3MgY2FuIGJlIGFjY2Vzc2VkLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBvd25lcjogVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXCJDb25zdHJ1Y3RvclwiIGludGVyZmFjZSBkZWZpbmluZyBob3cgZ3JvdXAgcnVsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOZXN0ZWRHcm91cENsYXNzPFQgZXh0ZW5kcyBOZXN0ZWRHcm91cDxPPiwgTyBleHRlbmRzIHt9PlxyXG57XHJcblx0LyoqIEFsbCBncm91cCBydWxlIGRlZmluaXRpb24gY2xhc3NlcyBzaG91bGQgY29uZm9ybSB0byB0aGlzIGNvbnN0cnVjdG9yICovXHJcblx0bmV3KCBvd25lcj86IE8pOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN1cHBvcnRSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQHN1cHBvcnRzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRzdXBwb3J0c11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3VwcG9ydHNSdWxlPFQgPSB7fT4gZXh0ZW5kcyBJUnVsZUNvbnRhaW5lcjxUPiwgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1N1cHBvcnRzUnVsZTogQ1NTU3VwcG9ydHNSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1lZGlhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbWVkaWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhUnVsZTxUID0ge30+IGV4dGVuZHMgSVJ1bGVDb250YWluZXI8VD4sIElSdWxlXHJcbntcclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NNZWRpYVJ1bGU6IENTU01lZGlhUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTZWxlY3RvclJ1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIFJ1bGVUeXBlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCJcclxuaW1wb3J0IHtDc3NTZWxlY3Rvcn0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7c2VsZWN0b3JUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvckZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2VsZWN0b3JSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBDU1Mgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVNlbGVjdG9yUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuU0VMRUNUT1IsIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTZWxlY3RvclJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBTZWxlY3RvclJ1bGUoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHNlbGVjdG9yVG9Dc3NTdHJpbmcoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogQ1NTIHJ1bGUgc2VsZWN0b3Igc3RyaW5nICovXHJcblx0cHVibGljIGdldCBzZWxlY3RvclRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHNlbGVjdG9yVG9Dc3NTdHJpbmcoIHRoaXMuc2VsZWN0b3IpOyB9XHJcblxyXG5cdC8vIHNlbGVjdG9yIG9iamVjdCBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVSdWxlLCBFeHRlbmRlZFN0eWxlc2V0LCBSdWxlVHlwZSwgSVZhclJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lTdHlsZXNldCwgU3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge21lcmdlU3R5bGVzZXRzLCBzdHlsZXNldFRvQ3NzU3RyaW5nLCBzdHlsZVByb3BUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtzZWxlY3RvclRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgcnVsZXMgdGhhdCBjb250YWluIGEgc3R5bGUgcnVsZS4gVGhpcyBjbGFzc1xyXG4gKiBpbXBsZW1lbnRzIHRoZSBwYXJzaW5nIG9mIHRoZSBFeHRlbmRlZFN0eWxlc2V0IG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSVN0eWxlUnVsZVxyXG57XHJcblx0Ly8gVGhlIHN0eWxlc2V0IGNhbiBiZSBhbiBFeHRlbmRlZFN0eWxlc2V0IGZvciBtYW55IHJ1bGVzOyBob3dldmVyLCBmb3Igc29tZSBpdCBpcyBqdXN0XHJcblx0Ly8gb2YgdGhlIFN0eWxlc2V0IHR5cGUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBSdWxlVHlwZSwgc3R5bGVzZXQ/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggdHlwZSk7XHJcblxyXG5cdFx0aWYgKHN0eWxlc2V0KVxyXG5cdFx0XHR0aGlzLnBhcnNlSW5wdXRTdHlsZXNldCggc3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHb2VzIG92ZXIgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW4gc3R5bGVzZXQgYW5kIHBhcnNlcyB0aGVtIGludG8gcHJvcGVyIHN0eWxlc2V0LCBzZXQgb2ZcclxuXHQgKiBpbXBvcnRhbnQgcHJvcGVydGllcyBhbmQgbmVzdGVkIHJ1bGVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VJbnB1dFN0eWxlc2V0KCBpbnB1dFN0eWxlc2V0OiBTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwcmVwYXJlIGxvY2FsIHZhcmlhYmxlcyB0byBhY2N1bXVsYXRlIHBhcnNpbmcgcmVzdWx0cy4gV2UgZG8gaXQgaW4gbG9jYWwgdmFyaWJhbGVzXHJcblx0XHQvLyBiZWNhdXNlIGluIGNhc2UgdGhlcmUgYXJlIHBhcmVudHMsIHdlIHdhbnQgZmlyc3QgY29weSBwcm9wZXJ0aWVzIGZyb20gdGhlbSBzbyB0aGF0XHJcblx0XHQvLyBvdXIgb3duIHByb3BlcnRpZXMgY2FuIG92ZXJyaWRlIHRoZW0uXHJcblx0XHRsZXQgcGFyZW50UnVsZXM6IFN0eWxlUnVsZVtdO1xyXG5cdFx0bGV0IG5lc3RlZFJ1bGVzOiBOZXN0ZWRSdWxlW107XHJcblx0XHRsZXQgc3R5bGVzZXQ6IFN0eWxlc2V0ID0ge307XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gaW5wdXRTdHlsZXNldClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBpbnB1dFN0eWxlc2V0W3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcIitcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoZSB2YWx1ZSBpcyBhIHNpbmdsZSBvciBhbiBhcnJheSBvZiBTdHlsZVJ1bGVzIHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXHJcblx0XHRcdFx0bGV0IGV4dGVuZHNQcm9wVmFsID0gcHJvcFZhbCBhcyAoU3R5bGVSdWxlIHwgU3R5bGVSdWxlW10pO1xyXG5cdFx0XHRcdGlmIChleHRlbmRzUHJvcFZhbCBpbnN0YW5jZW9mIFN0eWxlUnVsZSlcclxuXHRcdFx0XHRcdHBhcmVudFJ1bGVzID0gW2V4dGVuZHNQcm9wVmFsXTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRwYXJlbnRSdWxlcyA9IGV4dGVuZHNQcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCI6XCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYSBzdHlsZXNldCBmb3IgYSBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnRcclxuXHRcdFx0XHRpZiAoIW5lc3RlZFJ1bGVzKVxyXG5cdFx0XHRcdFx0bmVzdGVkUnVsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0bmVzdGVkUnVsZXMucHVzaCggbmV3IE5lc3RlZFJ1bGUoIHRoaXMsIFwiJlwiICsgcHJvcE5hbWUsIHByb3BWYWwgYXMgRXh0ZW5kZWRTdHlsZXNldCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcIiZcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgRXh0ZW5kZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCFuZXN0ZWRSdWxlcylcclxuXHRcdFx0XHRcdFx0bmVzdGVkUnVsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR0dXBsZXMuZm9yRWFjaCggdHVwbGUgPT4gbmVzdGVkUnVsZXMucHVzaCggbmV3IE5lc3RlZFJ1bGUoIHRoaXMsIHR1cGxlWzBdLCB0dXBsZVsxXSkpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY29weSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gb3VyIGludGVybmFsIHN0eWxlc2V0XHJcblx0XHRcdFx0c3R5bGVzZXRbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJ5IG5vdyB3ZSB3ZW50IG92ZXIgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGlucHV0IHN0eWxlc2V0LiBJZiB3ZSBoYXZlIHBhcmVudCBzdHlsZVxyXG5cdFx0Ly8gcnVsZXMsIGNvcHkgc3R5bGVzZXQsIGltcG9ydGFudCBhbmQgbmVzdGVkIHJ1bGVzIGRhdGEgZnJvbSB0aGVtLlxyXG5cdFx0aWYgKHBhcmVudFJ1bGVzICYmIHBhcmVudFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHBhcmVudFJ1bGVzLmZvckVhY2goIHBhcmVudCA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHBhcmVudC5zdHlsZXNldClcclxuXHRcdFx0XHRcdHRoaXMuc3R5bGVzZXQgPSBtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgcGFyZW50LnN0eWxlc2V0KTtcclxuXHJcblx0XHRcdFx0aWYgKHBhcmVudC5uZXN0ZWRSdWxlcyAmJiBwYXJlbnQubmVzdGVkUnVsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMubmVzdGVkUnVsZXMpXHJcblx0XHRcdFx0XHRcdHRoaXMubmVzdGVkUnVsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRwYXJlbnQubmVzdGVkUnVsZXMuZm9yRWFjaCggbmVzdGVkUnVsZSA9PlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsZXQgbmV3TmVzdGVkUnVsZSA9IG5lc3RlZFJ1bGUuY2xvbmUoKTtcclxuXHRcdFx0XHRcdFx0bmV3TmVzdGVkUnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0XHRcdHRoaXMubmVzdGVkUnVsZXMucHVzaCggbmV3TmVzdGVkUnVsZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdyB0aGF0IHdlIGNvcGllZCBkYXRhIGZyb20gdGhlIHBhcmVudHMgKGlmIGFueSkgd2UgbmVlZCB0byBjb3B5IG92ZXIgb3VyIG93blxyXG5cdFx0aWYgKHN0eWxlc2V0ICYmIE9iamVjdC5rZXlzKCBzdHlsZXNldCkubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKCF0aGlzLnN0eWxlc2V0KVxyXG5cdFx0XHRcdHRoaXMuc3R5bGVzZXQgPSBzdHlsZXNldDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBzdHlsZXNldCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG5lc3RlZFJ1bGVzICYmIG5lc3RlZFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdGlmICghdGhpcy5uZXN0ZWRSdWxlcylcclxuXHRcdFx0XHR0aGlzLm5lc3RlZFJ1bGVzID0gbmVzdGVkUnVsZXM7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRuZXN0ZWRSdWxlcy5mb3JFYWNoKCBuZXN0ZWRSdWxlID0+IHRoaXMubmVzdGVkUnVsZXMucHVzaCggbmVzdGVkUnVsZSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gaWYgbmVzdGVkIHJ1bGVzIGV4aXN0LCBwcm9jZXNzIHRoZW0gdW5kZXIgdGhlIHNhbWUgY29udGFpbmVyXHJcblx0XHRpZiAodGhpcy5uZXN0ZWRSdWxlcylcclxuXHRcdFx0dGhpcy5uZXN0ZWRSdWxlcy5mb3JFYWNoKCBuZXN0ZWRSdWxlID0+IG5lc3RlZFJ1bGUucHJvY2Vzcyggb3duZXIsIG51bGwpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHNyYy5zdHlsZXNldDtcclxuXHJcblx0XHQvLyBpZiBuZXN0ZWQgcnVsZXMgZXhpc3QsIGNsb25lIHRoZW1cclxuXHRcdGlmIChzcmMubmVzdGVkUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMubmVzdGVkUnVsZXMgPSBbXTtcclxuXHRcdFx0Zm9yKCBsZXQgc3JjTmVzdGVkUnVsZSBvZiBzcmMubmVzdGVkUnVsZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbmV3TmVzdGVkUnVsZSA9IHNyY05lc3RlZFJ1bGUuY2xvbmUoKTtcclxuXHRcdFx0XHRuZXdOZXN0ZWRSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHR0aGlzLm5lc3RlZFJ1bGVzLnB1c2goIG5ld05lc3RlZFJ1bGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBydWxlLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5zdHlsZXNldFxyXG5cdFx0XHQ/IGAke3RoaXMuZ2V0U2VsZWN0b3JTdHJpbmcoKX0gJHtzdHlsZXNldFRvQ3NzU3RyaW5nKCB0aGlzLnN0eWxlc2V0KX1gXHJcblx0XHRcdDogbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3R5bGVzZXQpXHJcblx0XHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCB0aGlzLnRvQ3NzU3RyaW5nKCksIHBhcmVudCk7XHJcblxyXG5cdFx0Ly8gaWYgbmVzdGVkIHJ1bGVzIGV4aXN0LCBpbnNlcnQgdGhlbSB1bmRlciB0aGUgc2FtZSBwYXJlbnRcclxuXHRcdGlmICh0aGlzLm5lc3RlZFJ1bGVzKVxyXG5cdFx0XHR0aGlzLm5lc3RlZFJ1bGVzLmZvckVhY2goIG5lc3RlZFJ1bGUgPT4gbmVzdGVkUnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBpZiBuZXN0ZWQgcnVsZXMgZXhpc3QsIGNsZWFyIHRoZW0gdG9vXHJcblx0XHRpZiAodGhpcy5uZXN0ZWRSdWxlcylcclxuXHRcdFx0dGhpcy5uZXN0ZWRSdWxlcy5mb3JFYWNoKCBuZXN0ZWRSdWxlID0+IG5lc3RlZFJ1bGUuY2xlYXIoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0UHJvcDxLIGV4dGVuZHMga2V5b2YgSVN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IElTdHlsZXNldFtLXSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY3NzU3R5bGVSdWxlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NTdHlsZVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsXHJcblx0XHRcdHN0eWxlUHJvcFRvQ3NzU3RyaW5nKCBuYW1lLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogbnVsbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3Rtb20gY1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gY3VzdG9tVmFyIElDVXN0b21WYXIgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFyVmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0Q3VzdG9tUHJvcDxLIGV4dGVuZHMga2V5b2YgSVN0eWxlc2V0PiggdmFyRGVmOiBJVmFyUnVsZTxLPiwgdmFyVmFsdWU6IElTdHlsZXNldFtLXSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXZhckRlZiB8fCAhdGhpcy5jc3NTdHlsZVJ1bGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1N0eWxlUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggdmFyRGVmLmNzc05hbWUsXHJcblx0XHRcdHN0eWxlUHJvcFRvQ3NzU3RyaW5nKCB2YXJEZWYudGVtcGxhdGUsIHZhclZhbHVlLCB0cnVlKSwgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiBudWxsKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc1N0eWxlUnVsZSgpOiBDU1NTdHlsZVJ1bGUgeyByZXR1cm4gdGhpcy5jc3NSdWxlIGFzIENTU1N0eWxlUnVsZTsgfVxyXG5cclxuXHQvLyBSZXN1bHRhbnQgU3R5bGVzZXQgb2JqZWN0IGRlZmluaW5nIHByb3BlcnRpZXMgdG8gYmUgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0cHJvdGVjdGVkIHN0eWxlc2V0OiBTdHlsZXNldDtcclxuXHJcblx0Ly8gTGlzdCBvZiBuZXN0ZWQgc3R5bGVzLlxyXG5cdHByaXZhdGUgbmVzdGVkUnVsZXM6IE5lc3RlZFJ1bGVbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE5lc3RlZFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBpcyBuZXN0ZWQgd2l0aGluIGFub3RoZXIgc3R5bGUgcnVsZS5cclxuICovXHJcbmNsYXNzIE5lc3RlZFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggY29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGUsIHNlbGVjdG9yPzogQ3NzU2VsZWN0b3IsIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuTkVTVEVELCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0XHR0aGlzLmNvbnRhaW5pbmdSdWxlID0gY29udGFpbmluZ1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBOZXN0ZWRSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgTmVzdGVkUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRuZXdSdWxlLnNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBnZXQgc2VsZWN0b3Igc3RyaW5nIGFuZCByZXBsYWNlIGFsbCBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCB3aXRoIHRoZVxyXG5cdFx0Ly8gc2VsZWN0b3Igc3RyaW5nIG9mIHRoZSBwYXJlbnQgcnVsZS5cclxuXHRcdHJldHVybiBzZWxlY3RvclRvQ3NzU3RyaW5nKCB0aGlzLnNlbGVjdG9yKS5yZXBsYWNlKCBcIiZcIiwgdGhpcy5jb250YWluaW5nUnVsZS5nZXRTZWxlY3RvclN0cmluZygpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFydGlhbCBzZWxlY3RvciB0aGF0IHNob3VsZCBiZSBhcHBlbmRlZCB0byB0aGUgcGFyZW50IHNlbGVjdG9yLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG5cclxuXHQvLyBQYXJlbnQgc3R5bGUgd2l0aGluIHdoaWNoIHRoaXMgcnVsZSBpcyBuZXN0ZWQuXHJcblx0cHVibGljIGNvbnRhaW5pbmdSdWxlOiBTdHlsZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtSdWxlVHlwZSwgSVN0eWxlc2hlZXRDbGFzcywgSVN0eWxlc2hlZXR9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7SVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVzaGVldCBjbGFzcyByZXByZXNlbnRzIGEgcGFyc2VkIGZvcm0gb2YgYSBJU3R5bGVzaGVldERlZmluaXRpb24tZGVyaXZlZCBjbGFzcy5cclxuICovXHJcbmNsYXNzIFN0eWxlc2hlZXQ8VCBleHRlbmRzIHt9ID0ge30+IGV4dGVuZHMgUnVsZUNvbnRhaW5lcjxUPiBpbXBsZW1lbnRzIElTdHlsZXNoZWV0PFQ+LCBJUnVsZUNvbnRhaW5lck93bmVyXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGRlZmluaXRpb25DbGFzczogSVN0eWxlc2hlZXRDbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuU0NPUEUpXHJcblxyXG5cdFx0dGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBkZWZpbml0aW9uQ2xhc3M7XHJcblxyXG5cdFx0dGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPSAwO1xyXG5cdFx0dGhpcy5kb21TdHlsZUVsbSA9IG51bGw7XHJcblx0XHR0aGlzLnVzZWRTdHlsZXNoZWV0cyA9IFtdO1xyXG5cclxuXHRcdC8vIGNhbGwgdGhlICR1c2UgZnVuY3Rpb24gZm9yIGFsbCB0aGUgYmFzZSBjbGFzc2VzIHNvIHRoYXQgcnVsZSBuYW1lcyBhcmUgZ2VuZXJhdGVkLiBXZVxyXG5cdFx0Ly8gZG9uJ3QgYWN0aXZhdGUgc3R5bGVzaGVldHMgZm9yIHRoZXNlIGNsYXNlcyBiZWNhdXNlIGRlcml2ZWQgY2xhc3NlcyB3aWxsIGhhdmUgYWxsIHRoZVxyXG5cdFx0Ly8gcnVsZXMgZnJvbSBhbGwgdGhlIGJhc2UgY2xhc3NlcyBhcyB0aGVpciBvd24gYW5kIHNvIHRoZXNlIHJ1bGVzIHdpbGwgYmUgYWN0aXZhdGVkIGFzXHJcblx0XHQvLyBwYXJ0IG9mIHRoZSBkZXJpdmVkIGNsYXNzLlxyXG5cdFx0bGV0IGJhc2VDbGFzcyA9IHRoaXMuZGVmaW5pdGlvbkNsYXNzO1xyXG5cdFx0d2hpbGUoIChiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGJhc2VDbGFzcykpICE9PSBGdW5jdGlvbi5wcm90b3R5cGUpXHJcblx0XHRcdHVzZSggYmFzZUNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnByb2Nlc3NTdHlsZXNoZWV0KCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBpbnN0YW5jZSwgcGFyc2VzIGl0cyBwcm9wZXJ0aWVzIGFuZCBjcmVhdGVzIG5hbWVzIGZvclxyXG5cdC8vIGNsYXNzZXMsIElEcywgYW5pbWF0aW9ucy5cclxuXHRwcml2YXRlIHByb2Nlc3NTdHlsZXNoZWV0KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkXHJcblx0XHRpZiAodGhpcy5pc1Byb2Nlc3NlZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIHRoZSBjb250YWluZXIgYW5kIHRoZSBvd25lciBwcm9wZXJ0aWVzIG9mIHRoZSBSdWxlIGJhc2UgY2xhc3MgcG9pbnQgdG8gdGhlIFN0eWxlc2hlZXRcclxuXHRcdC8vIG9iamVjdCBpdHNlbGZcclxuXHRcdHN1cGVyLnByb2Nlc3MoIHRoaXMsIG51bGwpO1xyXG5cclxuXHRcdHRoaXMuaXNNdWx0aXBsZXggPSAhIXRoaXMuZGVmaW5pdGlvbkNsYXNzLmlzTXVsdGlwbGV4O1xyXG5cclxuXHRcdC8vIGluIERFQlVHLCBlYWNoIGNsYXNzIGhhcyBhIG5hbWUgdW5sZXNzIGl0IHdhcyBjcmVhdGVkIGFzIGFuIGFub255bW91cyBjbGFzcy4gSW4gUkVMRUFTRSxcclxuXHRcdC8vIChhcyB3ZWxsIGFzIGluIHRoZSBhbm9ueW1vdXMgY2FzZXMpLCB0aGUgbmFtZSBpcyB1bmRlZmluZWQgYW5kIHdlIGdlbmVyYXRlIGEgdW5pcXVlXHJcblx0XHQvLyBuYW1lIGZvciB0aGUgc3R5bGVzaGVldC5cclxuXHRcdHRoaXMubmFtZSA9IHRoaXMuZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblx0XHRpZiAoIXRoaXMubmFtZSlcclxuXHRcdFx0dGhpcy5uYW1lID0gZ2VuZXJhdGVVbmlxdWVOYW1lKCBcInNcIik7XHJcblxyXG5cdFx0Ly8gcHJvY2VzcyBzdWItcnVsZXMgcnVsZXMuXHJcblx0XHR0aGlzLnByb2Nlc3NSdWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBkZWZpbml0aW9uIGNsYXNzIG9yIG51bGwgaWYgZmFpbHVyZVxyXG5cdHByb3RlY3RlZCBjcmVhdGVEZWZpbml0aW9uSW5zdGFuY2UoKTogVCB8IG51bGxcclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9uSW5zdGFuY2UgPSBuZXcgdGhpcy5kZWZpbml0aW9uQ2xhc3MoKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZGVmaW5pdGlvbkluc3RhbmNlO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGluc3RhbnRpYXRpbmcgU3R5bGVzaGVldCBEZWZpbml0aW9uIENsYXNzICcke3RoaXMuZGVmaW5pdGlvbkNsYXNzLm5hbWV9J2AsIGVycik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdHB1YmxpYyBnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuZGVmaW5pdGlvbkluc3RhbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8qKiBBZGRzIGEgc3R5bGVzaGVldCB0aGlzIHN0eWxlc2hlZXQgKi9cclxuXHRwdWJsaWMgYWRkRXh0ZXJuYWxTdHlsZXNoZWV0KCBzdHlsZXNoZWV0OiBJU3R5bGVzaGVldCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVzZWRTdHlsZXNoZWV0cy5wdXNoKCBzdHlsZXNoZWV0IGFzIFN0eWxlc2hlZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZXNoZWV0ICovXHJcblx0cHVibGljIGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgdGhpcyBydWxlIG5hbWU6IGlmIHllcywgcmV0dXJuIHRoZSBhbHJlYWR5IGFzc2lnbmVkXHJcblx0XHQvLyB1bmlxdWUgc2NvcGVkIG5hbWVcclxuXHRcdGlmICghcnVsZU5hbWUpXHJcblx0XHRcdHJldHVybiBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGVOYW1lIGluIHRoaXMuYWxsTmFtZXMpXHJcblx0XHRcdHJldHVybiB0aGlzLmFsbE5hbWVzW3J1bGVOYW1lXTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCBvdXQgaWYgdGhlcmUgYSBydWxlIHdpdGggdGhpcyBuYW1lIGRlZmluZWQgaW4gYSBzdHlsZXNoZWV0IGluc3RhbmNlIGNyZWF0ZWQgZm9yXHJcblx0XHRcdC8vIGEgY2xhc3MgZnJvbSB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLlxyXG5cdFx0XHRsZXQgZXhpc3RpbmdOYW1lID0gZmluZE5hbWVGb3JSdWxlSW5Qcm90b3R5cGVDaGFpbiggdGhpcy5kZWZpbml0aW9uQ2xhc3MsIHJ1bGVOYW1lKTtcclxuXHRcdFx0cmV0dXJuIGV4aXN0aW5nTmFtZSA/IGV4aXN0aW5nTmFtZSA6IHRoaXMuaXNNdWx0aXBsZXggPyBnZW5lcmF0ZVVuaXF1ZU5hbWUoKSA6IGdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIHRoaXMgc3R5bGVzaGVldCBpbnRvIERPTS4gKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGFjdGl2YXRlIGltcG9ydGVkIHN0eWxlc2hlZXRzXHJcblx0XHRmb3IoIGxldCBzdHlsZXNoZWV0IG9mIHRoaXMudXNlZFN0eWxlc2hlZXRzKVxyXG5cdFx0XHRzdHlsZXNoZWV0LmFjdGl2YXRlKCk7XHJcblxyXG5cdFx0aWYgKCsrdGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDEpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0XHR0aGlzLmRvbVN0eWxlRWxtLmlkID0gdGhpcy5uYW1lO1xyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLmRvbVN0eWxlRWxtKTtcclxuXHRcdFx0dGhpcy5pbnNlcnRSdWxlcyggdGhpcy5kb21TdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhpcyBzdHlsZXNoZWV0IGZyb20gRE9NLiAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBndWFyZCBmcm9tIGV4dHJhIGRlYWN0aXZhdGUgY2FsbHNcclxuXHRcdGlmICh0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICgtLXRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRvbVN0eWxlRWxtLnJlbW92ZSgpO1xyXG5cdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHRcdFx0dGhpcy5jbGVhclJ1bGVzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZGVhY3RpdmF0ZSBpbXBvcnRlZCBzdHlsZXNoZWV0c1xyXG5cdFx0Zm9yKCBsZXQgc3R5bGVzaGVldCBvZiB0aGlzLnVzZWRTdHlsZXNoZWV0cylcclxuXHRcdFx0c3R5bGVzaGVldC5kZWFjdGl2YXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsYXNzIHRoYXQgZGVmaW5lZCB0aGlzIHN0eWxlc2hlZXQuIFRoaXMgbWVtYmVyIGlzIHVzZWQgZm9yIHN0eWxlc2hlZXQgZGVyaXZhdGlvblxyXG5cdHB1YmxpYyByZWFkb25seSBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZXNoZWV0Q2xhc3M8VD47XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHN0eWxlIHNoZWV0IC0gdXNlZCB0byBjcmVhdGUgc2NvcGVkIG5hbWVzIG9mIHN0eWxlIHJ1bGVzXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBzdHlsZXNoZWV0IG9iamVjdCBvd25zIHRoZSA8c3R5bGU+IGVsZW1lbnQuIFRoaXMgaXMgdHJ1ZSBvbmx5XHJcblx0Ly8gZm9yIG11bHRpcGxleCBzdHlsZXNoZWV0cyAtIHRob3NlIHRoYXQgY2FuIGJlIGNyZWFlZCBtdWx0aXBsZSB0aW1lcy5cclxuXHRwdWJsaWMgaXNNdWx0aXBsZXg6IGJvb2xlYW47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uIHJlcXVlc3RzLlxyXG5cdHByaXZhdGUgYWN0aXZhdGlvblJlZkNvdW50OiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBlbGVtbnRcclxuXHRwdWJsaWMgZG9tU3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0cHJpdmF0ZSBkZWZpbml0aW9uSW5zdGFuY2U6IFQ7XHJcblxyXG5cdC8vIExpc3Qgb2YgdXNlZCBzdHlsZXNoZWV0IG9iamVjdHMgdGhhdCB3aWxsIGJlIGFjdGl2YXRlZCB3aGVuIG91ciBzdHlsZXNoZWV0IGlzIGFjdGl2YXRlZC5cclxuXHRwcml2YXRlIHVzZWRTdHlsZXNoZWV0czogU3R5bGVzaGVldFtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOYW1lIGdlbmVyYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1haXplZCBuYW1lcyBmb3Igc3R5bGUgZWxlbWVudHMgKGNsYXNzIG5hbWVzLCBhbmltYXRpb25cclxuLy8gbmFtZXMsIGV0Yy4pXHJcbmxldCB1c2VVbmlxdWVTdHlsZU5hbWVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4vLyBQcmVmaXggdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgc3R5bGUgbmFtZXMuIElmIHVuZGVmaW5lZCwgYSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbFxyXG4vLyBiZSB1c2VkLlxyXG5sZXQgdW5pcXVlU3R5bGVOYW1lc1ByZWZpeDogc3RyaW5nID0gXCJuXCI7XHJcblxyXG4vLyBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy5cclxubGV0IG5leHRVbmlxdWVJRDogbnVtYmVyID0gMTtcclxuXHJcbi8vIE1hcCBvZiBjbGFzcyBkZWZpbml0aW9uIGNsYXNzZXMgdG8gdGhlaXIgc2luZ2x0b24gaW5zdGFuY2VzLiBOb24tbXVsdGlwbGV4IHN0eWxlIGRlZmluaXRpb25cclxuLy8gY2xhc3NlcyBhcmUgYWRkZWQgdG8gdGhpcyBtYXAgdXBvbiBjYWxsaW5nIHRoZSAkdXNlIGZ1bmN0aW9uIG9uIHRoZW0uXHJcbmxldCBjbGFzc1RvSW5zdGFuY2VNYXAgPSBuZXcgTWFwPElTdHlsZXNoZWV0Q2xhc3MsU3R5bGVzaGVldD4oKTtcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgbmFtZSB0byB1c2UgZm9yIHRoZSBnaXZlbiBydWxlIGZyb20gdGhlIGdpdmVuIHN0eWxlIHNoZWV0LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKCBzaGVldE5hbWU6IHN0cmluZywgcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHVzZVVuaXF1ZVN0eWxlTmFtZXNcclxuXHRcdD8gZ2VuZXJhdGVVbmlxdWVOYW1lKCB1bmlxdWVTdHlsZU5hbWVzUHJlZml4KVxyXG5cdFx0OiBgJHtzaGVldE5hbWV9XyR7cnVsZU5hbWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgdW5pcXVlIG5hbWUsIHdoaWNoIGNhbiBiZSB1c2VkIGVpdGhlciBmb3Igc3R5bGUgZWxlbWVudCdzIElEIG9yIG9yIGNsYXNzLFxyXG4gKiBpZGVudGlmaWVyIG9yIGFuaW1hdGlvbiBuYW1lLiBOYW1lcyBhcmUgZ2VuZXJhdGVkIHVzaW5nIGEgc2ltcGxlIGluY3JlbWVudGluZyBudW1iZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHByZWZpeD86IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiB1bmlxdWVTdHlsZU5hbWVzUHJlZml4KSArIG5leHRVbmlxdWVJRCsrO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIExvb2tzIHVwIGEgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBpbiB0aGUgcHJvdG90eXBlICBjaGFpbiBvZiB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBjbGFzcy4gSWYgZm91bmQgYW5kIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHJ1bGUsIHRoZW4gcmV0dXJucyB0aGUgbmFtZSBhc3NpZ25lZCBmb3IgaXQuXHJcbmZ1bmN0aW9uIGZpbmROYW1lRm9yUnVsZUluUHJvdG90eXBlQ2hhaW4oIGRlZmluaXRpb25DbGFzczogSVN0eWxlc2hlZXRDbGFzcywgcnVsZU5hbWU6IHN0cmluZylcclxue1xyXG5cdC8vIGxvb3Agb3ZlciBwcm90b3R5cGVzXHJcblx0bGV0IGJhc2VDbGFzcyA9IGRlZmluaXRpb25DbGFzcztcclxuXHR3aGlsZSggKGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggYmFzZUNsYXNzKSkgIT09IEZ1bmN0aW9uLnByb3RvdHlwZSlcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgYmFzZSBjbGFzcyBoYXMgYW4gaW5zdGFuY2UgaW4gdGhlIGdsb2JhbCBtYXAgb2YgdXNlZCBkZWZpbml0aW9uIGNsYXNzZXNcclxuXHRcdGxldCBiYXNlSW5zdCA9IGNsYXNzVG9JbnN0YW5jZU1hcC5nZXQoIGJhc2VDbGFzcyk7XHJcblx0XHRpZiAoYmFzZUluc3QgJiYgcnVsZU5hbWUgaW4gYmFzZUluc3QucnVsZXMgJiYgXCJuYW1lXCIgaW4gYmFzZUluc3QucnVsZXNbcnVsZU5hbWVdKVxyXG5cdFx0XHRyZXR1cm4gYmFzZUluc3QucnVsZXNbcnVsZU5hbWVdLm5hbWU7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQVBJIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBhbmQgcmV0dXJucyB0aGUgU3R5bGVzaGVldCBvYmplY3QgdGhhdCBjb250YWluc1xyXG4gKiBuYW1lcyBvZiBJRHMsIGNsYXNzZXMgYW5kIGtleWZyYW1lcyBhbmQgYWxsb3dzIHN0eWxlIG1hbmlwdWxhdGlvbnMuIEZvciBhIGdpdmVuIHN0eWxlc2hlZXRcclxuICogZGVmaW5pdGlvbiBjbGFzcyB0aGVyZSBpcyBhIHNpbmdsZSBzdHlsZXNoZWV0IG9iamVjdCwgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb25cclxuICogaXMgaW52b2tlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2U8VCBleHRlbmRzIHt9Piggc3R5bGVzaGVldERlZmluaXRpb25DbGFzczogSVN0eWxlc2hlZXRDbGFzczxUPik6IElTdHlsZXNoZWV0PFQ+XHJcbntcclxuXHQvLyBpZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGlzIG11bHRpcGxleCwgY3JlYXRlIG5ldyBTdHlsZXNoZWV0IG9iamVjdCBldmVyeSB0aW1lO1xyXG5cdC8vIG90aGVyd2lzZSwgY2hlY2sgd2hldGhlciB0aGUgc3R5bGUgc2hlZXQgZGVmaW5pdGlvbiBvYmplY3QgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQuIFRoaXNcclxuXHQvLyBpcyBpbmRpY2F0ZWQgYnkgdGhlIGV4aXN0ZW5jZSBvZiB0aGUgaW5zdGFuY2Ugc3RhdGljIHByb3BlcnR5IG9uIHRoZSBjbGFzcy5cclxuXHRpZiAoc3R5bGVzaGVldERlZmluaXRpb25DbGFzcy5pc011bHRpcGxleClcclxuXHRcdHJldHVybiBuZXcgU3R5bGVzaGVldCggc3R5bGVzaGVldERlZmluaXRpb25DbGFzcyk7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGxldCBzdHlsZXNoZWV0ID0gY2xhc3NUb0luc3RhbmNlTWFwLmdldCggc3R5bGVzaGVldERlZmluaXRpb25DbGFzcyk7XHJcblx0XHRpZiAoIXN0eWxlc2hlZXQpXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlc2hlZXQgPSBuZXcgU3R5bGVzaGVldCggc3R5bGVzaGVldERlZmluaXRpb25DbGFzcyk7XHJcblx0XHRcdGNsYXNzVG9JbnN0YW5jZU1hcC5zZXQoIHN0eWxlc2hlZXREZWZpbml0aW9uQ2xhc3MsIHN0eWxlc2hlZXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzdHlsZXNoZWV0IGFzIGFueSBhcyBJU3R5bGVzaGVldDxUPjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBhbmQgaW5zZXJ0cyBhbGwgaXRzIHJ1bGVzIGludG8gRE9NLiBJZiB0aGUgaW5wdXQgb2JqZWN0IGlzIG5vdFxyXG4gKiBhIHN0eWxlc2hlZXQgYnV0IGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgb2J0YWluIHN0eWxlc2hlZXQgYnkgY2FsbGluZyB0aGUgJHVzZSBmdW5jdGlvbi5cclxuICogTm90ZSB0aGF0IGVhY2ggc3R5bGVzaGVldCBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzXHJcbiAqIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgaW5zZXJ0ZWQgdG8gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXNcclxuICogdXAgdG8gMS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZTxUIGV4dGVuZHMge30+KCBzdHlsZXNoZWV0T3JEZWZpbml0aW9uOiBJU3R5bGVzaGVldDxUPiB8IElTdHlsZXNoZWV0Q2xhc3M8VD4pOiBJU3R5bGVzaGVldDxUPlxyXG57XHJcblx0aWYgKCFzdHlsZXNoZWV0T3JEZWZpbml0aW9uKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGlmIChzdHlsZXNoZWV0T3JEZWZpbml0aW9uIGluc3RhbmNlb2YgU3R5bGVzaGVldClcclxuXHR7XHJcblx0XHRzdHlsZXNoZWV0T3JEZWZpbml0aW9uLmFjdGl2YXRlKCk7XHJcblx0XHRyZXR1cm4gc3R5bGVzaGVldE9yRGVmaW5pdGlvbjtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGxldCBzdHlsZXNoZWV0ID0gdXNlKCBzdHlsZXNoZWV0T3JEZWZpbml0aW9uIGFzIElTdHlsZXNoZWV0Q2xhc3M8VD4pO1xyXG5cdFx0KHN0eWxlc2hlZXQgYXMgU3R5bGVzaGVldDxUPikuYWN0aXZhdGUoKTtcclxuXHRcdHJldHVybiBzdHlsZXNoZWV0O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaCBzdHlsZXNoZWV0XHJcbiAqIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlXHJcbiAqIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoIHN0eWxlc2hlZXQ6IElTdHlsZXNoZWV0KTogdm9pZFxyXG57XHJcblx0aWYgKHN0eWxlc2hlZXQpXHJcblx0XHQoc3R5bGVzaGVldCBhcyBTdHlsZXNoZWV0KS5kZWFjdGl2YXRlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVPcHRpbWl6ZWRTdHlsZU5hbWVzKCBlbmFibGU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdHVzZVVuaXF1ZVN0eWxlTmFtZXMgPSBlbmFibGU7XHJcblx0dW5pcXVlU3R5bGVOYW1lc1ByZWZpeCA9IHByZWZpeCA/IHByZWZpeCA6IFwiblwiO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN1cHBvcnRzUnVsZSwgUnVsZVR5cGUsIElOZXN0ZWRHcm91cENsYXNzLCBOZXN0ZWRHcm91cH0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtHcm91cFJ1bGV9IGZyb20gXCIuL0dyb3VwUnVsZVwiXHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtzdXBwb3J0c1F1ZXJ5VG9Dc3NTdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3VwcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgTmVzdGVkR3JvdXA8Tz4sIE8gZXh0ZW5kcyB7fT4gZXh0ZW5kcyBHcm91cFJ1bGU8VCxPPiBpbXBsZW1lbnRzIElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IFN1cHBvcnRzUXVlcnksIGRlZmluaXRpb25DbGFzczogSU5lc3RlZEdyb3VwQ2xhc3M8VCxPPilcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuU1VQUE9SVFMsIGRlZmluaXRpb25DbGFzcyk7XHJcblxyXG5cdFx0Ly8gY29udmVydCB0aGUgcXVlcnkgdG8gaXRzIHN0cmluZyBmb3JtXHJcblx0XHR0aGlzLnF1ZXJ5U3RyaW5nID0gc3VwcG9ydHNRdWVyeVRvQ3NzU3RyaW5nKCBxdWVyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdXBwb3J0c1J1bGU8VCxPPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlPFQsTz4oIHRoaXMucXVlcnlTdHJpbmcsIHRoaXMuZGVmaW5pdGlvbkNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0R3JvdXBpbmdSdWxlKCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHF1ZXJ5IGlzIHN1cHBvcnRlZCBhbmQgaWYgaXQgaXMgbm90LCBkb24ndCBpbnNlcnQgdGhlIHJ1bGVcclxuXHRcdHJldHVybiBDU1Muc3VwcG9ydHMoIHRoaXMucXVlcnlTdHJpbmcpXHJcblx0XHRcdD8gUnVsZS5hZGRSdWxlVG9ET00oIGBAc3VwcG9ydHMgJHt0aGlzLnF1ZXJ5U3RyaW5nfSB7fWAsIHBhcmVudClcclxuXHRcdFx0OiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc1N1cHBvcnRzUnVsZSgpOiBDU1NTdXBwb3J0c1J1bGUgeyByZXR1cm4gdGhpcy5jc3NSdWxlIGFzIENTU1N1cHBvcnRzUnVsZTsgfVxyXG5cclxuXHQvLyBzdXBwb3J0IHF1ZXJ5IGZvciB0aGlzIHJ1bGUgaW4gYSBzdHJpbmcgZm9ybS5cclxuXHRwdWJsaWMgcXVlcnlTdHJpbmc6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lUYWdSdWxlLCBFeHRlbmRlZFN0eWxlc2V0LCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRhZ1J1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSB0YWcgbmFtZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUYWdSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVRhZ1J1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdGFnOiBzdHJpbmcsIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuVEFHLCBzdHlsZSk7XHJcblx0XHR0aGlzLnRhZyA9IHRhZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFRhZ1J1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBUYWdSdWxlKCB0aGlzLnRhZyk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy50YWc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBIVE1MIHRhZyAqL1xyXG5cdHB1YmxpYyB0YWc6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lWYXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGVDb250YWluZXJ9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5pbXBvcnQge0lTdHlsZXNldCwgSUNzc1N0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBWYXJSdWxlIGRvZXMgbm90IGRlcml2ZSBmcm9tIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGJlY2F1c2UgaXQgaXMgbm90IGEgcmVhbCBDU1MgcnVsZTsgaG93ZXZlciwgaW4gbWFueSBhc3BlY3RzIGl0IHJlcGVhdHMgdGhlIFJ1bGUnc1xyXG4gKiBmdW5jdGlvbmFsaXR5LiBJbiBwYXJ0aWN1bGFyIGl0IGhhcyB0aGUgcHJvY2VzcyBmdW5jdGlvbiB0aGF0IGFsbG93cyBpdCB0byBvYnRhaW4gYW4gYWN0dWFsXHJcbiAqIG5hbWUsIHdoaWNoIHdpbGwgYmUgdXNlZCB3aGVuIGRlZmluaW5nIGFuZCB1c2luZyB0aGlzIGN1c3RvbSBwcm9wZXJ0eSBpbiBDU1MuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgdGhlIHR5cGUgcGFyYW1ldGVyIEsgaXMgYSBrZXkgb2YgdGhlIElDc3NTdHlsZXNldCBpbnRlcmZhY2UsIHRoZSB2YWx1ZSBpcyBvZlxyXG4gKiB0eXBlIElTdGlsZXNldFtLXSwgd2hjaWggaXMgRXh0ZW5kZWQ8SUNzc1N0eWxlc2V0W0tdPi4gVGhpcyBhbGxvd3Mgc3BlY2lmeWluZyB2YWx1ZXMgdGhhdCBhcmVcclxuICogdmFsaWQgZm9yIHRoZSBFeHRlbmRlZCByb3BlcnR5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFyUnVsZTxLIGV4dGVuZHMga2V5b2YgSUNzc1N0eWxlc2V0ID0gYW55PiBpbXBsZW1lbnRzIElWYXJSdWxlPEs+XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIC0gdGhpcyBpcyBvbmx5IG5lZWRlZCB0byBpbmRpY2F0ZSB0aGF0IHRoaXMgb2JqZWN0IGltcGxlbWVudHMgdGhlIElWYXJQcm94eVxyXG4gICAgICogaW50ZXJmYWNlIGZvciB0aGUgZ2l2ZW4gdHlwZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNWYXJQcm94eSggbzogSUNzc1N0eWxlc2V0W0tdKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdGVtcGxhdGU6IEssIHZhbHVlPzogSVN0eWxlc2V0W0tdLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPilcclxuXHR7XHJcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IFJ1bGVDb250YWluZXIsIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFx0dGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCItLVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFZhclJ1bGU8Sz5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFZhclJ1bGU8Sz4odGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5jc3NOYW1lfTogJHtzdHlsZVByb3BUb0Nzc1N0cmluZyggdGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdHJ1ZSl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIHZhcigtLW5hbWUpIGV4cHJlc3Npb24uXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiBgdmFyKCR7dGhpcy5jc3NOYW1lfSlgO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0VmFsdWUoIHZhbHVlOiBJU3R5bGVzZXRbS10sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q3VzdG9tVmFyVmFsdWUoIHRoaXMuY3NzTmFtZSwgc3R5bGVQcm9wVG9Dc3NTdHJpbmcoIHRoaXMudGVtcGxhdGUsIHZhbHVlLCB0cnVlKSwgaW1wb3J0YW50KVxyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBpc1xyXG5cdC8vIG51bGwgZm9yIFN0eWxlc2hlZXQuXHJcblx0cHVibGljIHJ1bGVOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHRwdWJsaWMgdGVtcGxhdGU6IEs7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gVmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHVibGljIHZhbHVlOiBJU3R5bGVzZXRbS107XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz47XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLiBUaGlzIGlzIFwidGhpc1wiIGZvciBTdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBjb250YWluZXI6IFJ1bGVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJTmFtZWRDb2xvcnMsIENzc0NvbG9yLCBJQ29sb3JQcm94eSwgQ29sb3JzfSBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtDc3NQZXJjZW50TWF0aCwgQ3NzQW5nbGVNYXRoLCB2YWx1ZVRvU3RyaW5nfSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBjb2xvciBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvck51bWJlclRvU3RyaW5nKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgaWYgKHZhbCA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgbmVnYXRpdmU6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJBIG51bWJlciByZXByZXNlbnRpbmcgY29sb3IgY2Fubm90IGJlIGZsb2F0aW5nIHBvaW50OiBcIiArIHZhbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBcIiMwMDBcIjtcclxuICAgICAgICB9XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVkIGNvbG9yIHdpdGggdGhlIGdpdmVuIHZhbHVlLCByZXR1cm4gdGhlIGNvbG9yIG5hbWVcclxuICAgIGxldCBuYW1lID0gcmV2ZXJzZWRDb2xvck1hcC5nZXQoIHZhbCk7XHJcbiAgICBpZiAobmFtZSlcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBvdGhlcndpc2UgY29udmVydCBudW1lcmljIHZhbHVlIHRvICMgbm90YXRpb25cclxuICAgICAgICBsZXQgcyA9IHZhbC50b1N0cmluZygxNik7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgKHZhbCA8PSAweEZGRkZGRiA/IHMucGFkU3RhcnQoIDYsIFwiMFwiKSA6IHMucGFkU3RhcnQoIDgsIFwiMFwiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuIElmIGEgc3RyaW5nIHZhbHVlIGlzIGluIHRoZSBDb2xvcnMgb2JqZWN0IHdlXHJcbiAqIG5lZWQgdG8gZ2V0IGl0cyBudW1iZXIgYW5kIGNvbnZlcnQgaXQgdG8gdGhlIHJnYlthXSgpIGZ1bmN0aW9uIGJlY2F1c2UgaXQgbWlnaHQgYmUgYSBjdXN0b21cclxuICogY29sb3IgbmFtZSBhZGRlZCB2aWEgSU5hbWVkQ29sb3JzIG1vZHVsZSBhdWdtZW50YXRpb24uIEZvciBudW1lcmljIHZhbHVlcywgd2UgY2hlY2sgaWYgdGhpcyBpc1xyXG4gKiBvbmUgb2YgdGhlIHByZWRlZmluZWRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0NvbG9yPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBDb2xvcnNbdl0gPyBjb2xvck51bWJlclRvU3RyaW5nKCBDb2xvcnNbdl0pIDogdixcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvck51bWJlclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb2xvclNlcGFyYXRpb25Ub1N0cmluZyggYzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBjID09IG51bGwgPyBcIjBcIiA6IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gYyA6IE51bWJlci5pc0ludGVnZXIoYykgPyBjLnRvU3RyaW5nKCkgOiBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyhjKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZ2JUb1N0cmluZyggcjogbnVtYmVyIHwgc3RyaW5nLCBnOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByID0gY29sb3JTZXBhcmF0aW9uVG9TdHJpbmcoIHIpO1xyXG4gICAgZyA9IGNvbG9yU2VwYXJhdGlvblRvU3RyaW5nKCBnKTtcclxuICAgIGIgPSBjb2xvclNlcGFyYXRpb25Ub1N0cmluZyggYik7XHJcbiAgICBhID0gYSA9PSBudWxsID8gbnVsbCA6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGEpO1xyXG5cclxuICAgIHJldHVybiAhYSA/IGByZ2IoJHtyfSwke2d9LCR7Yn0pYCA6IGByZ2JhKCR7cn0sJHtnfSwke2J9LCR7YX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBoc2xUb1N0cmluZyggaDogbnVtYmVyIHwgc3RyaW5nLCBzOiBudW1iZXIgfCBzdHJpbmcsIGw6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICBoID0gQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoaCk7XHJcbiAgICBzID0gcyA9PSBudWxsID8gXCIxMDAlXCIgOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBzKTtcclxuICAgIGwgPSBsID09IG51bGwgPyBcIjEwMCVcIiA6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGwpO1xyXG4gICAgYSA9IGEgPT0gbnVsbCA/IG51bGwgOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhKTtcclxuXHJcbiAgICByZXR1cm4gIWEgPyBgaHNsKCR7aH0sJHtzfSwke2x9KWAgOiBgaHNsYSgke2h9LCR7c30sJHtsfSwke2F9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWxwaGFUb1N0cmluZyggYzogbnVtYmVyIHwga2V5b2YgSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHJnYlZhbCA9IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gdGhpc1tjXSA6IGM7XHJcbiAgICByZXR1cm4gcmdiVG9TdHJpbmcoIChyZ2JWYWwgJiAweEZGMDAwMCkgPj4gMTYsIChyZ2JWYWwgJiAweDAwRkYwMCkgPj4gOCwgcmdiVmFsICYgMHgwMDAwRkYsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29sb3JQcm94eSBjbGFzcyBpbXBsZW1lbnRzIHRoZSBJQ29sb3JQcm94eSBhbmQgc2VydmVzIGFzIGEgYmFzZSBmb3Igb3RoZXIgY29sb3IgcHJveGllcy5cclxuICovXHJcbmFic3RyYWN0IGNsYXNzIENvbG9yUHJveHkgaW1wbGVtZW50cyBJQ29sb3JQcm94eVxyXG57XHJcbiAgICAvKiogRmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhpcyBvYmplY3QgaW1wbGVtZW50cyB0aGUgSUltYWdlUHJveHkgaW50ZXJmYWNlICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzQ29sb3JQcm94eSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICAvKiogQ29udmVydHMgaW50ZXJuYWxseSBoZWxkIHZhbHVlKHMpIHRvIHN0cmluZyAqL1xyXG4gICAgYWJzdHJhY3QgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJnYlByb3h5IGNsYXNzIGltcGxlbWVudHMgdGhlIElDb2xvclByb3h5IGludGVyZmFjZSBieSBlbmNhcHN1bGF0aW5nIHBhcmFtZXRlcnMgb2YgdGhlXHJcbiAqIGByZ2IoKWAgb3IgYHJnYmEoKWAgQ1NTIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZ2JQcm94eSBleHRlbmRzIENvbG9yUHJveHlcclxue1xyXG4gICAgLyoqIEZsYWcgaW5kaWNhdGluZyB0aGF0IHRoaXMgb2JqZWN0IGltcGxlbWVudHMgdGhlIElJbWFnZVByb3h5IGludGVyZmFjZSAqL1xyXG4gICAgcHVibGljIGdldCBpc0NvbG9yUHJveHkoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcjogbnVtYmVyIHwgc3RyaW5nLCBwcml2YXRlIGc6IG51bWJlciB8IHN0cmluZywgcHJpdmF0ZSBiOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSBhPzogbnVtYmVyIHwgc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIGludGVybmFsbHkgaGVsZCB2YWx1ZShzKSB0byBzdHJpbmcgKi9cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiByZ2JUb1N0cmluZyggdGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEhzbFByb3h5IGNsYXNzIGltcGxlbWVudHMgdGhlIElDb2xvclByb3h5IGludGVyZmFjZSBieSBlbmNhcHN1bGF0aW5nIHBhcmFtZXRlcnMgb2YgdGhlXHJcbiAqIGBoc2woKWAgb3IgYGhzbGEoKWAgQ1NTIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBIc2xQcm94eSBleHRlbmRzIENvbG9yUHJveHlcclxue1xyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgaDogbnVtYmVyIHwgc3RyaW5nLCBwcml2YXRlIHM6IG51bWJlciB8IHN0cmluZywgcHJpdmF0ZSBsOiBudW1iZXIgfCBzdHJpbmcsXHJcbiAgICAgICAgcHJpdmF0ZSBhPzogbnVtYmVyIHwgc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIGludGVybmFsbHkgaGVsZCB2YWx1ZShzKSB0byBzdHJpbmcgKi9cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBoc2xUb1N0cmluZyggdGhpcy5oLCB0aGlzLnMsIHRoaXMubCwgdGhpcy5hKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFscGhhUHJveHkgY2xhc3MgaW1wbGVtZW50cyB0aGUgSUNvbG9yUHJveHkgaW50ZXJmYWNlIGJ5IGFwcGx5aW5nIHRoZSBnaXZlbiBhbHBoYSBtYXNrXHJcbiAqIHRvIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgZWl0aGVyIGEgbnVtYmVyIG9yIGEgbmFtZWQgY29sb3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWxwaGFQcm94eSBleHRlbmRzIENvbG9yUHJveHlcclxue1xyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgYzogbnVtYmVyIHwga2V5b2YgSU5hbWVkQ29sb3JzLCBwcml2YXRlIGE6IG51bWJlciB8IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDb252ZXJ0cyBpbnRlcm5hbGx5IGhlbGQgdmFsdWUocykgdG8gc3RyaW5nICovXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYWxwaGFUb1N0cmluZyggdGhpcy5jLCB0aGlzLmEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcHJlZGVmaW5lZCBjb2xvciBuYW1lcyBieSB0aGVpciBudW1lcmljIHZhbHVlc1xyXG4gKi9cclxubGV0IHJldmVyc2VkQ29sb3JNYXAgPSBuZXcgTWFwPG51bWJlcixzdHJpbmc+KCk7XHJcblxyXG4vLyBidWlsZCBSZXZlcnNlZCBDb2xvciBNYXBcclxuT2JqZWN0LmVudHJpZXMoIENvbG9ycykuZm9yRWFjaCggKFtuYW1lLCB2YWx1ZV0pID0+IHJldmVyc2VkQ29sb3JNYXAuc2V0KCB2YWx1ZSwgbmFtZSkgKTtcclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHR5cGVzIGZvciB3b3JraW5nIHdpdGggQ1NTIGNvbG9ycy5cclxuICovXHJcblxyXG5pbXBvcnQge0lTdHJpbmdQcm94eSwgT25lT3JCb3gsIElWYWx1ZVByb3h5fSBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZENvbG9ycyBpbnRlcmZhY2UgbGlzdHMgdGhlIG5hbWVzIG9mIHN0YW5kYXJkIFdlYiBjb2xvcnMuIEl0IGlzIG5lZWRlZCB0byBhbGxvdyBkZXZlbG9wZXJzXHJcbiAqIHRvIGFkZCBuZXcgbmFtZWQgY29sb3JzIHRocm91Z2ggbW9kdWxlIGF1Z21lbnRhdGlvbiB0ZWNobmlxdWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZENvbG9yc1xyXG57XHJcbiAgICByZWFkb25seSBibGFjazogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzaWx2ZXI6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmF5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGl0ZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYXJvb246ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByZWQ6ICAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwdXJwbGU6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmdWNoc2lhOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmVlbjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW1lOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGl2ZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB5ZWxsb3c6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBuYXZ5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibHVlOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0ZWFsOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhcXVhOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmFuZ2U6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbGljZWJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhbnRpcXVld2hpdGU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhcXVhbWFyaW5lOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBhenVyZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBiZWlnZTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBiaXNxdWU6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibGFuY2hlZGFsbW9uZDogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBibHVldmlvbGV0OiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBicm93bjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBidXJseXdvb2Q6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjYWRldGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjaGFydHJldXNlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjaG9jb2xhdGU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3JhbDogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3JuZmxvd2VyYmx1ZTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjb3Juc2lsazogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjcmltc29uOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBjeWFuOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrYmx1ZTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrY3lhbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ29sZGVucm9kOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JheTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrZ3JleTogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJra2hha2k6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrbWFnZW50YTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb2xpdmVncmVlbjogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb3JhbmdlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrb3JjaGlkOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrcmVkOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2FsbW9uOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2VhZ3JlZW46ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVibHVlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVncmF5OiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrc2xhdGVncmV5OiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrdHVycXVvaXNlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkYXJrdmlvbGV0OiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWVwcGluazogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWVwc2t5Ymx1ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkaW1ncmF5OiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkaW1ncmV5OiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBkb2RnZXJibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmaXJlYnJpY2s6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmbG9yYWx3aGl0ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBmb3Jlc3RncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnYWluc2Jvcm86ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnaG9zdHdoaXRlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnb2xkOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBnb2xkZW5yb2Q6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmVlbnllbGxvdzogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBncmV5OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBob25leWRldzogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBob3RwaW5rOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpbmRpYW5yZWQ6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpbmRpZ286ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBpdm9yeTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBraGFraTogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXZlbmRlcjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXZlbmRlcmJsdXNoOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsYXduZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsZW1vbmNoaWZmb246ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGNvcmFsOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGN5YW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdvbGRlbnJvZHllbGxvdzogICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyYXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyZWVuOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodGdyZXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHBpbms6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNhbG1vbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNlYWdyZWVuOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNreWJsdWU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNsYXRlZ3JheTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHNsYXRlZ3JleTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHN0ZWVsYmx1ZTogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaWdodHllbGxvdzogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW1lZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBsaW5lbjogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtYWdlbnRhOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1ibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1vcmNoaWQ6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1wdXJwbGU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zZWFncmVlbjogICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zbGF0ZWJsdWU6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW1zcHJpbmdncmVlbjogICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW10dXJxdW9pc2U6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtZWRpdW12aW9sZXRyZWQ6ICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaWRuaWdodGJsdWU6ICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaW50Y3JlYW06ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtaXN0eXJvc2U6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBtb2NjYXNpbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBuYXZham93aGl0ZTogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGRsYWNlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvbGl2ZWRyYWI6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmFuZ2VyZWQ6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBvcmNoaWQ6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxlZ29sZGVucm9kOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxlZ3JlZW46ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxldHVycXVvaXNlOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYWxldmlvbGV0cmVkOiAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwYXBheWF3aGlwOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwZWFjaHB1ZmY6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwZXJ1OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwaW5rOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwbHVtOiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBwb3dkZXJibHVlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByb3N5YnJvd246ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByb3lhbGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYWRkbGVicm93bjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYWxtb246ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzYW5keWJyb3duOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzZWFncmVlbjogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzZWFzaGVsbDogICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzaWVubmE6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBza3libHVlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWdyYXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbGF0ZWdyZXk6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzbm93OiAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzcHJpbmdncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSBzdGVlbGJsdWU6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0YW46ICAgICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0aGlzdGxlOiAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0b21hdG86ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB0dXJxdW9pc2U6ICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB2aW9sZXQ6ICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGVhdDogICAgICAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aGl0ZXNtb2tlOiAgICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSB5ZWxsb3dncmVlbjogICAgICAgICAgICBudW1iZXI7XHJcbiAgICByZWFkb25seSByZWJlY2NhcHVycGxlOiAgICAgICAgICBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ29sb3JQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSBvZiBDU1MgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgZm9yXHJcbiAqIHNlY2lmeWluZyBjb2xvcnMuIFRoaXMgaW50ZXJmYWNlIGlzIHJldHVybmVkIGZyb20gZnVuY3Rpb25zIGxpa2U6IHJnYigpLCBhbHBoYSgpLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xvclByb3h5IGV4dGVuZHMgSVZhbHVlUHJveHlcclxue1xyXG4gICAgLyoqIEZsYWcgaW5kaWNhdGluZyB0aGF0IHRoaXMgb2JqZWN0IGltcGxlbWVudHMgdGhlIElDb2xvclByb3h5IGludGVyZmFjZSAqL1xyXG4gICAgcmVhZG9ubHkgaXNDb2xvclByb3h5OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgY29sb3IuIENvbG9yIGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gc3RyaW5nIChlLmcuIFwicmVkXCIgb3IgXCIjZmU1XCIgb3IgXCJyZ2JhKDE5MCwgMjAwLCAyMzUsIDkwJSlcIiwgZXRjLilcclxuICogICAtIG51bWJlcjpcclxuICogICAgIC0gcG9zaXRpdmUgaW50ZWdlciBudW1iZXJzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAweEZGRkZGRiBhcmUgdHJlYXRlZCBhcyBSR0Igc2VwYXJhdGlvbnMgMHhSUkdHQkIuXHJcbiAqICAgICAtIHBvc2l0aXZlIGludGVnZXIgbnVtYmVycyBncmVhdGVyIHRoYW4gMHhGRkZGRkYgYXJlIHRyZWF0ZWQgYXMgUkdCQSBzZXBhcmF0aW9ucyAweFJSR0dCQkFBLlxyXG4gKiAgICAgLSBuZWdhdGl2ZSBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyBhcmUgcmVqZWN0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NDb2xvciA9IFwidHJhbnNwYXJlbnRcIiB8IFwiY3VycmVudGNvbG9yXCIgfCBrZXlvZiBJTmFtZWRDb2xvcnMgfCBudW1iZXIgfCBJQ29sb3JQcm94eTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzOiBJTmFtZWRDb2xvcnMgPVxyXG57XHJcbiAgICBibGFjazogICAgICAgICAgICAgICAgICAweDAwMDAwMCxcclxuICAgIHNpbHZlcjogICAgICAgICAgICAgICAgIDB4YzBjMGMwLFxyXG4gICAgZ3JheTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICB3aGl0ZTogICAgICAgICAgICAgICAgICAweGZmZmZmZixcclxuICAgIG1hcm9vbjogICAgICAgICAgICAgICAgIDB4ODAwMDAwLFxyXG4gICAgcmVkOiAgICAgICAgICAgICAgICAgICAgMHhmZjAwMDAsXHJcbiAgICBwdXJwbGU6ICAgICAgICAgICAgICAgICAweDgwMDA4MCxcclxuICAgIGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgZ3JlZW46ICAgICAgICAgICAgICAgICAgMHgwMDgwMDAsXHJcbiAgICBsaW1lOiAgICAgICAgICAgICAgICAgICAweDAwZmYwMCxcclxuICAgIG9saXZlOiAgICAgICAgICAgICAgICAgIDB4ODA4MDAwLFxyXG4gICAgeWVsbG93OiAgICAgICAgICAgICAgICAgMHhmZmZmMDAsXHJcbiAgICBuYXZ5OiAgICAgICAgICAgICAgICAgICAweDAwMDA4MCxcclxuICAgIGJsdWU6ICAgICAgICAgICAgICAgICAgIDB4MDAwMGZmLFxyXG4gICAgdGVhbDogICAgICAgICAgICAgICAgICAgMHgwMDgwODAsXHJcbiAgICBhcXVhOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIG9yYW5nZTogICAgICAgICAgICAgICAgIDB4ZmZhNTAwLFxyXG4gICAgYWxpY2VibHVlOiAgICAgICAgICAgICAgMHhmMGY4ZmYsXHJcbiAgICBhbnRpcXVld2hpdGU6ICAgICAgICAgICAweGZhZWJkNyxcclxuICAgIGFxdWFtYXJpbmU6ICAgICAgICAgICAgIDB4N2ZmZmQ0LFxyXG4gICAgYXp1cmU6ICAgICAgICAgICAgICAgICAgMHhmMGZmZmYsXHJcbiAgICBiZWlnZTogICAgICAgICAgICAgICAgICAweGY1ZjVkYyxcclxuICAgIGJpc3F1ZTogICAgICAgICAgICAgICAgIDB4ZmZlNGM0LFxyXG4gICAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgMHhmZmViY2QsXHJcbiAgICBibHVldmlvbGV0OiAgICAgICAgICAgICAweDhhMmJlMixcclxuICAgIGJyb3duOiAgICAgICAgICAgICAgICAgIDB4YTUyYTJhLFxyXG4gICAgYnVybHl3b29kOiAgICAgICAgICAgICAgMHhkZWI4ODcsXHJcbiAgICBjYWRldGJsdWU6ICAgICAgICAgICAgICAweDVmOWVhMCxcclxuICAgIGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIDB4N2ZmZjAwLFxyXG4gICAgY2hvY29sYXRlOiAgICAgICAgICAgICAgMHhkMjY5MWUsXHJcbiAgICBjb3JhbDogICAgICAgICAgICAgICAgICAweGZmN2Y1MCxcclxuICAgIGNvcm5mbG93ZXJibHVlOiAgICAgICAgIDB4NjQ5NWVkLFxyXG4gICAgY29ybnNpbGs6ICAgICAgICAgICAgICAgMHhmZmY4ZGMsXHJcbiAgICBjcmltc29uOiAgICAgICAgICAgICAgICAweGRjMTQzYyxcclxuICAgIGN5YW46ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgZGFya2JsdWU6ICAgICAgICAgICAgICAgMHgwMDAwOGIsXHJcbiAgICBkYXJrY3lhbjogICAgICAgICAgICAgICAweDAwOGI4YixcclxuICAgIGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIDB4Yjg4NjBiLFxyXG4gICAgZGFya2dyYXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJrZ3JlZW46ICAgICAgICAgICAgICAweDAwNjQwMCxcclxuICAgIGRhcmtncmV5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2toYWtpOiAgICAgICAgICAgICAgMHhiZGI3NmIsXHJcbiAgICBkYXJrbWFnZW50YTogICAgICAgICAgICAweDhiMDA4YixcclxuICAgIGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIDB4NTU2YjJmLFxyXG4gICAgZGFya29yYW5nZTogICAgICAgICAgICAgMHhmZjhjMDAsXHJcbiAgICBkYXJrb3JjaGlkOiAgICAgICAgICAgICAweDk5MzJjYyxcclxuICAgIGRhcmtyZWQ6ICAgICAgICAgICAgICAgIDB4OGIwMDAwLFxyXG4gICAgZGFya3NhbG1vbjogICAgICAgICAgICAgMHhlOTk2N2EsXHJcbiAgICBkYXJrc2VhZ3JlZW46ICAgICAgICAgICAweDhmYmM4ZixcclxuICAgIGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIDB4NDgzZDhiLFxyXG4gICAgZGFya3NsYXRlZ3JheTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrc2xhdGVncmV5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIDB4MDBjZWQxLFxyXG4gICAgZGFya3Zpb2xldDogICAgICAgICAgICAgMHg5NDAwZDMsXHJcbiAgICBkZWVwcGluazogICAgICAgICAgICAgICAweGZmMTQ5MyxcclxuICAgIGRlZXBza3libHVlOiAgICAgICAgICAgIDB4MDBiZmZmLFxyXG4gICAgZGltZ3JheTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkaW1ncmV5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRvZGdlcmJsdWU6ICAgICAgICAgICAgIDB4MWU5MGZmLFxyXG4gICAgZmlyZWJyaWNrOiAgICAgICAgICAgICAgMHhiMjIyMjIsXHJcbiAgICBmbG9yYWx3aGl0ZTogICAgICAgICAgICAweGZmZmFmMCxcclxuICAgIGZvcmVzdGdyZWVuOiAgICAgICAgICAgIDB4MjI4YjIyLFxyXG4gICAgZ2FpbnNib3JvOiAgICAgICAgICAgICAgMHhkY2RjZGMsXHJcbiAgICBnaG9zdHdoaXRlOiAgICAgICAgICAgICAweGY4ZjhmZixcclxuICAgIGdvbGQ6ICAgICAgICAgICAgICAgICAgIDB4ZmZkNzAwLFxyXG4gICAgZ29sZGVucm9kOiAgICAgICAgICAgICAgMHhkYWE1MjAsXHJcbiAgICBncmVlbnllbGxvdzogICAgICAgICAgICAweGFkZmYyZixcclxuICAgIGdyZXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgaG9uZXlkZXc6ICAgICAgICAgICAgICAgMHhmMGZmZjAsXHJcbiAgICBob3RwaW5rOiAgICAgICAgICAgICAgICAweGZmNjliNCxcclxuICAgIGluZGlhbnJlZDogICAgICAgICAgICAgIDB4Y2Q1YzVjLFxyXG4gICAgaW5kaWdvOiAgICAgICAgICAgICAgICAgMHg0YjAwODIsXHJcbiAgICBpdm9yeTogICAgICAgICAgICAgICAgICAweGZmZmZmMCxcclxuICAgIGtoYWtpOiAgICAgICAgICAgICAgICAgIDB4ZjBlNjhjLFxyXG4gICAgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgMHhlNmU2ZmEsXHJcbiAgICBsYXZlbmRlcmJsdXNoOiAgICAgICAgICAweGZmZjBmNSxcclxuICAgIGxhd25ncmVlbjogICAgICAgICAgICAgIDB4N2NmYzAwLFxyXG4gICAgbGVtb25jaGlmZm9uOiAgICAgICAgICAgMHhmZmZhY2QsXHJcbiAgICBsaWdodGJsdWU6ICAgICAgICAgICAgICAweGFkZDhlNixcclxuICAgIGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIDB4ZjA4MDgwLFxyXG4gICAgbGlnaHRjeWFuOiAgICAgICAgICAgICAgMHhlMGZmZmYsXHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogICAweGZhZmFkMixcclxuICAgIGxpZ2h0Z3JheTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRncmVlbjogICAgICAgICAgICAgMHg5MGVlOTAsXHJcbiAgICBsaWdodGdyZXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0cGluazogICAgICAgICAgICAgIDB4ZmZiNmMxLFxyXG4gICAgbGlnaHRzYWxtb246ICAgICAgICAgICAgMHhmZmEwN2EsXHJcbiAgICBsaWdodHNlYWdyZWVuOiAgICAgICAgICAweDIwYjJhYSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIDB4ODdjZWZhLFxyXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHNsYXRlZ3JleTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIDB4YjBjNGRlLFxyXG4gICAgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgMHhmZmZmZTAsXHJcbiAgICBsaW1lZ3JlZW46ICAgICAgICAgICAgICAweDMyY2QzMixcclxuICAgIGxpbmVuOiAgICAgICAgICAgICAgICAgIDB4ZmFmMGU2LFxyXG4gICAgbWFnZW50YTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICAweDY2Y2RhYSxcclxuICAgIG1lZGl1bWJsdWU6ICAgICAgICAgICAgIDB4MDAwMGNkLFxyXG4gICAgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgMHhiYTU1ZDMsXHJcbiAgICBtZWRpdW1wdXJwbGU6ICAgICAgICAgICAweDkzNzBkYixcclxuICAgIG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIDB4M2NiMzcxLFxyXG4gICAgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgMHg3YjY4ZWUsXHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogICAgICAweDAwZmE5YSxcclxuICAgIG1lZGl1bXR1cnF1b2lzZTogICAgICAgIDB4NDhkMWNjLFxyXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgMHhjNzE1ODUsXHJcbiAgICBtaWRuaWdodGJsdWU6ICAgICAgICAgICAweDE5MTk3MCxcclxuICAgIG1pbnRjcmVhbTogICAgICAgICAgICAgIDB4ZjVmZmZhLFxyXG4gICAgbWlzdHlyb3NlOiAgICAgICAgICAgICAgMHhmZmU0ZTEsXHJcbiAgICBtb2NjYXNpbjogICAgICAgICAgICAgICAweGZmZTRiNSxcclxuICAgIG5hdmFqb3doaXRlOiAgICAgICAgICAgIDB4ZmZkZWFkLFxyXG4gICAgb2xkbGFjZTogICAgICAgICAgICAgICAgMHhmZGY1ZTYsXHJcbiAgICBvbGl2ZWRyYWI6ICAgICAgICAgICAgICAweDZiOGUyMyxcclxuICAgIG9yYW5nZXJlZDogICAgICAgICAgICAgIDB4ZmY0NTAwLFxyXG4gICAgb3JjaGlkOiAgICAgICAgICAgICAgICAgMHhkYTcwZDYsXHJcbiAgICBwYWxlZ29sZGVucm9kOiAgICAgICAgICAweGVlZThhYSxcclxuICAgIHBhbGVncmVlbjogICAgICAgICAgICAgIDB4OThmYjk4LFxyXG4gICAgcGFsZXR1cnF1b2lzZTogICAgICAgICAgMHhhZmVlZWUsXHJcbiAgICBwYWxldmlvbGV0cmVkOiAgICAgICAgICAweGRiNzA5MyxcclxuICAgIHBhcGF5YXdoaXA6ICAgICAgICAgICAgIDB4ZmZlZmQ1LFxyXG4gICAgcGVhY2hwdWZmOiAgICAgICAgICAgICAgMHhmZmRhYjksXHJcbiAgICBwZXJ1OiAgICAgICAgICAgICAgICAgICAweGNkODUzZixcclxuICAgIHBpbms6ICAgICAgICAgICAgICAgICAgIDB4ZmZjMGNiLFxyXG4gICAgcGx1bTogICAgICAgICAgICAgICAgICAgMHhkZGEwZGQsXHJcbiAgICBwb3dkZXJibHVlOiAgICAgICAgICAgICAweGIwZTBlNixcclxuICAgIHJvc3licm93bjogICAgICAgICAgICAgIDB4YmM4ZjhmLFxyXG4gICAgcm95YWxibHVlOiAgICAgICAgICAgICAgMHg0MTY5ZTEsXHJcbiAgICBzYWRkbGVicm93bjogICAgICAgICAgICAweDhiNDUxMyxcclxuICAgIHNhbG1vbjogICAgICAgICAgICAgICAgIDB4ZmE4MDcyLFxyXG4gICAgc2FuZHlicm93bjogICAgICAgICAgICAgMHhmNGE0NjAsXHJcbiAgICBzZWFncmVlbjogICAgICAgICAgICAgICAweDJlOGI1NyxcclxuICAgIHNlYXNoZWxsOiAgICAgICAgICAgICAgIDB4ZmZmNWVlLFxyXG4gICAgc2llbm5hOiAgICAgICAgICAgICAgICAgMHhhMDUyMmQsXHJcbiAgICBza3libHVlOiAgICAgICAgICAgICAgICAweDg3Y2VlYixcclxuICAgIHNsYXRlYmx1ZTogICAgICAgICAgICAgIDB4NmE1YWNkLFxyXG4gICAgc2xhdGVncmF5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbGF0ZWdyZXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNub3c6ICAgICAgICAgICAgICAgICAgIDB4ZmZmYWZhLFxyXG4gICAgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgMHgwMGZmN2YsXHJcbiAgICBzdGVlbGJsdWU6ICAgICAgICAgICAgICAweDQ2ODJiNCxcclxuICAgIHRhbjogICAgICAgICAgICAgICAgICAgIDB4ZDJiNDhjLFxyXG4gICAgdGhpc3RsZTogICAgICAgICAgICAgICAgMHhkOGJmZDgsXHJcbiAgICB0b21hdG86ICAgICAgICAgICAgICAgICAweGZmNjM0NyxcclxuICAgIHR1cnF1b2lzZTogICAgICAgICAgICAgIDB4NDBlMGQwLFxyXG4gICAgdmlvbGV0OiAgICAgICAgICAgICAgICAgMHhlZTgyZWUsXHJcbiAgICB3aGVhdDogICAgICAgICAgICAgICAgICAweGY1ZGViMyxcclxuICAgIHdoaXRlc21va2U6ICAgICAgICAgICAgIDB4ZjVmNWY1LFxyXG4gICAgeWVsbG93Z3JlZW46ICAgICAgICAgICAgMHg5YWNkMzIsXHJcbiAgICByZWJlY2NhcHVycGxlOiAgICAgICAgICAweDY2MzM5OSxcclxufTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgRm9udEZhY2VUeXBlcyBmcm9tIFwiLi9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0ICogYXMgVXRpbEZ1bmNzIGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZm9udCBmYWNlIGRlZmluaXRpb24gb2JqZWN0IHRvIHRoZSBDU1Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9udEZhY2VUb0Nzc1N0cmluZyggZm9udGZhY2U6IEZvbnRGYWNlVHlwZXMuRm9udGZhY2UpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghZm9udGZhY2UgfHwgIWZvbnRmYWNlLmZvbnRGYW1pbHkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IHMgPSBcIntcIjtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBmb250ZmFjZSlcclxuICAgIHtcclxuICAgICAgICBzICs9IGAke1V0aWxGdW5jcy5jYW1lbFRvRGFzaCggcHJvcE5hbWUpfTpgO1xyXG4gICAgICAgIGxldCBwcm9wVmFsID0gZm9udGZhY2VbcHJvcE5hbWVdO1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3RyZXRjaFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTdHJldGNoVG9Dc3NTdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSBcImZvbnRTdHlsZVwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTdHlsZVRvQ3NzU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250V2VpZ2h0XCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFdlaWdodFRvQ3NzU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJzcmNcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3JjVG9Dc3NTdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBwcm9wVmFsO1xyXG5cclxuICAgICAgICBzICs9IFwiO1wiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHMgKyBcIn1cIjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3RyZXRjaFRvQ3NzU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFN0cmV0Y2hUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiB2YWwgKyBcIiVcIjtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYCR7dmFsWzBdfSUgJHt2YWxbMV19JWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0eWxlVG9Dc3NTdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiBgb2JsaXF1ZSAke3ZhbH1kZWdgO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzID0gXCJvYmxpcXVlIFwiO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsWzBdID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICBzICs9IHZhbFswXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gYCR7dmFsWzBdfWRlZ2A7XHJcblxyXG4gICAgICAgIGlmICh2YWxbMV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzICs9IFwiIFwiO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbFsxXSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHMgKz0gdmFsWzFdO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzICs9IGAke3ZhbFsxXX1kZWdgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFdlaWdodFRvQ3NzU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodFR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgJHt2YWxbMF0udG9TdHJpbmcoKX0gJHt2YWxbMV0udG9TdHJpbmcoKX1gO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTcmNUb0Nzc1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8ICFBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIGZvbnRTaW5nbGVTcmNUb0Nzc1N0cmluZyggdmFsIGFzIEZvbnRGYWNlVHlwZXMuRm9udFNpbmdsZVNyY1R5cGUpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2YWwubWFwKCBzaW5nbGVWYWwgPT4gZm9udFNpbmdsZVNyY1RvQ3NzU3RyaW5nKCBzaW5nbGVWYWwpKS5qb2luKFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U2luZ2xlU3JjVG9Dc3NTdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U2luZ2xlU3JjVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgIHtcclxuICAgICAgICBpZiAodmFsLnN0YXJ0c1dpdGgoXCJsb2NhbChcIikgfHwgdmFsLnN0YXJ0c1dpdGgoXCJ1cmwoXCIpKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGB1cmwoJHt2YWx9KWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICggXCJsb2NhbFwiIGluIHZhbClcclxuICAgICAgICByZXR1cm4gYGxvY2FsKCR7dmFsLmxvY2FsfSlgO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzID0gYHVybCgke3ZhbC51cmx9KWA7XHJcbiAgICAgICAgaWYgKHZhbC5mb3JtYXQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzICs9IFwiIGZvcm1hdChcIjtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwuZm9ybWF0ID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcyArPSBgXFxcIiR7dmFsLmZvcm1hdH1cXFwiYDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcyArPSB2YWwuZm9ybWF0Lm1hcCggKHYpID0+IGBcXFwiJHt2fVxcXCJgKS5qb2luKCBcIixcIik7XHJcblxyXG4gICAgICAgICAgICBzICs9IFwiKVwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgIEdyYWRpZW50U3RvcE9ySGludCwgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgTGluZWFyR3JhZEFuZ2xlLCBSYWRpYWxHcmFkaWVudFNoYXBlLFxyXG4gICAgUmFkaWFsR3JhZGllbnRFeHRlbnQsIElJbWFnZVByb3h5LCBDcm9zc0ZhZGVQYXJhbVxyXG59IGZyb20gXCIuL0ltYWdlVHlwZXNcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHtDc3NQb3NpdGlvbiwgQ3NzTnVtYmVyLCBFeHRlbmRlZCwgU2ltcGxlQ3NzUG9zaXRpb259IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmcsIElOdW1iZXJNYXRoQ2xhc3MsIENzc0FuZ2xlTWF0aCwgcG9zaXRpb25Ub1N0cmluZywgQ3NzUGVyY2VudE1hdGh9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZyggdmFsOiBHcmFkaWVudFN0b3BPckhpbnQsIG1hdGhDbGFzczogSU51bWJlck1hdGhDbGFzcyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gdi5sZW5ndGggPT09IDAgPyBcIlwiIDogdi5sZW5ndGggPT09IDEgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdlswXSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudENvbG9yQW5kTGVuZ3RoVG9TdHJpbmcoIHYgYXMgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgbWF0aENsYXNzKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nKCB2YWw6IEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJNYXRoQ2xhc3MpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNlY29uZFN0b3AgPSB2YWwubGVuZ3RoID4gMiA/IG1hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2YWxbMV0pIDogXCJcIjtcclxuICAgIHJldHVybiBgJHtjb2xvclRvU3RyaW5nKHZhbFswXSl9ICR7bWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZhbFsxXSl9ICR7c2Vjb25kU3RvcH1gO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgYW5nbGU6IExpbmVhckdyYWRBbmdsZSxcclxuICAgIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFuZ2xlU3RyaW5nID0gYW5nbGUgPyBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpICsgXCIsXCIgOiBcIlwiO1xyXG4gICAgbGV0IGJ1ZiA9IHN0b3BzT3JIaW50cy5tYXAoIHN0b3BPckhpbnQgPT4gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmcoIHN0b3BPckhpbnQsIENzc1BlcmNlbnRNYXRoKSk7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHthbmdsZVN0cmluZ30ke2J1Zi5qb2luKFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHNoYXBlOiBSYWRpYWxHcmFkaWVudFNoYXBlLFxyXG4gICAgZXh0ZW50OiBSYWRpYWxHcmFkaWVudEV4dGVudCwgcG9zOiBDc3NQb3NpdGlvbixcclxuICAgIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNoYXBlU3RyaW5nID0gc2hhcGUgPyBzaGFwZSA6IFwiXCI7XHJcbiAgICBsZXQgZXh0ZW50U3RyaW5nID0gZXh0ZW50ID8gZXh0ZW50IDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3NpdGlvblRvU3RyaW5nKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IHNoYXBlIHx8IGV4dGVudFN0cmluZyB8fCBwb3MgPyBgJHtzaGFwZVN0cmluZ30gJHtleHRlbnRTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NQZXJjZW50TWF0aCkpO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7d2hhdEFuZFdoZXJlfSR7YnVmLmpvaW4oXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbmljR3JhZGllbnRUb1N0cmluZyggYW5nbGU6IEV4dGVuZGVkPENzc051bWJlcj4sIHBvczogU2ltcGxlQ3NzUG9zaXRpb24sXHJcbiAgICBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IGFuZ2xlID8gYGZyb20gJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHBvc1N0cmluZyA9IHBvcyA/IGBhdCAke3Bvc2l0aW9uVG9TdHJpbmcoIHBvcyl9YCA6IFwiXCI7XHJcbiAgICBsZXQgd2hhdEFuZFdoZXJlID0gYW5nbGUgfHwgcG9zID8gYCR7YW5nbGVTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NBbmdsZU1hdGgpKTtcclxuICAgIHJldHVybiBgY29uaWMtZ3JhZGllbnQoJHt3aGF0QW5kV2hlcmV9JHtidWYuam9pbihcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbHVlVG9TdHJpbmcodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcm9zc0ZhZGVUb1N0cmluZyggYXJnczogQ3Jvc3NGYWRlUGFyYW1bXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gdmFsdWVUb1N0cmluZyggYXJncywge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IGNyb3NzRmFkZVBhcmFtVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBgY3Jvc3MtZmFkZSgke3BhcmFtc1N0cmluZ30pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyYWRpZW50UHJveHkgY2xhc3MgaXMgYSBiYXNlIGZvciBJSW1hZ2VQcm94eS1pbXBsZW1lbnRlZCBjbGFzc2VzIHRoYXQgZW5jYXBzdWxhdGVzXHJcbiAqIHBhcmFtZXRlcnMgY29tbW9uIGZvciBsaW5lYXIgYW5kIHJhZGlhbCBncmFkaWVudHMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JhZGllbnRQcm94eSBpbXBsZW1lbnRzIElJbWFnZVByb3h5XHJcbntcclxuICAgIC8qKiBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGlzIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBJSW1hZ2VQcm94eSBpbnRlcmZhY2UgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNJbWFnZVByb3h5KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcm90ZWN0ZWQgbmFtZTogc3RyaW5nLCBwcm90ZWN0ZWQgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSlcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ29udmVydHMgaW50ZXJuYWxseSBoZWxkIHZhbHVlKHMpIHRvIHN0cmluZyAqL1xyXG4gICAgYWJzdHJhY3QgdmFsdWVUb1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBMaW5lYXJHcmFkaWVudFByb3h5IGNsYXNzIGltcGxlbWVudHMgdGhlIElJbWFnZVByb3h5IGludGVyZmFjZSBieSBlbmNhcHN1bGF0aW5nIHBhcmFtZXRlcnNcclxuICogb2YgdGhlIGBsaW5lYXItZ3JhZGllbnQoKWAgb3IgYHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBMaW5lYXJHcmFkaWVudFByb3h5IGV4dGVuZHMgR3JhZGllbnRQcm94eVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBwcml2YXRlIGFuZ2xlOiBMaW5lYXJHcmFkQW5nbGUsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIG5hbWUsIHN0b3BzT3JIaW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIGludGVybmFsbHkgaGVsZCB2YWx1ZShzKSB0byBzdHJpbmcgKi9cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCB0aGlzLm5hbWUsIHRoaXMuYW5nbGUsIHRoaXMuc3RvcHNPckhpbnRzKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIExpbmVhckdyYWRpZW50UHJveHkgY2xhc3MgaW1wbGVtZW50cyB0aGUgSUltYWdlUHJveHkgaW50ZXJmYWNlIGJ5IGVuY2Fwc3VsYXRpbmcgcGFyYW1ldGVyc1xyXG4gKiBvZiB0aGUgYHJhZGlhbC1ncmFkaWVudCgpYCBvciBgcmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJhZGlhbEdyYWRpZW50UHJveHkgZXh0ZW5kcyBHcmFkaWVudFByb3h5XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcsIHByaXZhdGUgc2hhcGU6IFJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICAgICAgcHJpdmF0ZSBleHRlbnQ6IFJhZGlhbEdyYWRpZW50RXh0ZW50LCBwcml2YXRlIHBvczogQ3NzUG9zaXRpb24sXHJcbiAgICAgICAgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSlcclxuICAgIHtcclxuICAgICAgICBzdXBlciggbmFtZSwgc3RvcHNPckhpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ29udmVydHMgaW50ZXJuYWxseSBoZWxkIHZhbHVlKHMpIHRvIHN0cmluZyAqL1xyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIHRoaXMubmFtZSwgdGhpcy5zaGFwZSwgdGhpcy5leHRlbnQsIHRoaXMucG9zLCB0aGlzLnN0b3BzT3JIaW50cyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb25pY0dyYWRpZW50UHJveHkgY2xhc3MgaW1wbGVtZW50cyB0aGUgSUltYWdlUHJveHkgaW50ZXJmYWNlIGJ5IGVuY2Fwc3VsYXRpbmcgcGFyYW1ldGVyc1xyXG4gKiBvZiB0aGUgYGNvbmljLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb25pY0dyYWRpZW50UHJveHkgZXh0ZW5kcyBHcmFkaWVudFByb3h5XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIGFuZ2xlOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBwcml2YXRlIHBvczogU2ltcGxlQ3NzUG9zaXRpb24sXHJcbiAgICAgICAgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSlcclxuICAgIHtcclxuICAgICAgICBzdXBlciggXCJcIiwgc3RvcHNPckhpbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ29udmVydHMgaW50ZXJuYWxseSBoZWxkIHZhbHVlKHMpIHRvIHN0cmluZyAqL1xyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGNvbmljR3JhZGllbnRUb1N0cmluZyggdGhpcy5hbmdsZSwgdGhpcy5wb3MsIHRoaXMuc3RvcHNPckhpbnRzKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENyb3NzRmFkZVByb3h5IGNsYXNzIGltcGxlbWVudHMgdGhlIElJbWFnZVByb3h5IGludGVyZmFjZSBieSBlbmNhcHN1bGF0aW5nIHBhcmFtZXRlcnNcclxuICogb2YgdGhlIGBjb25pYy1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3Jvc3NGYWRlUHJveHkgaW1wbGVtZW50cyBJSW1hZ2VQcm94eVxyXG57XHJcbiAgICAvKiogRmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhpcyBvYmplY3QgaW1wbGVtZW50cyB0aGUgSUltYWdlUHJveHkgaW50ZXJmYWNlICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzSW1hZ2VQcm94eSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDb252ZXJ0cyBpbnRlcm5hbGx5IGhlbGQgdmFsdWUocykgdG8gc3RyaW5nICovXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gY3Jvc3NGYWRlVG9TdHJpbmcoIHRoaXMuYXJncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgVXRpbEZ1bmNzIGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCAqIGFzIE1lZGlhVHlwZXMgZnJvbSBcIi4vTWVkaWFUeXBlc1wiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzcGVjdFJhdGlvVG9Dc3NTdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5Bc3BlY3RSYXRpb0ZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsWzBdICsgXCIvXCIgKyB2YWxbMV07XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoRmVhdHVyZVRvQ3NzU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuTGVuZ3RoRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcInB4XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVzb2x1dGlvbkZlYXR1cmVUb0Nzc1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLlJlc29sdXRpb25GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwiZHBpXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxudHlwZSBjb252ZXJ0RnVuY1R5cGU8SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9ICh2YWw6IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFGZWF0dXJlSW5mbyByZXByZXNlbnRzIGluZm9ybWF0aW9uIHRoYXQgd2Uga2VlcCBmb3Igc3R5bGUgcHJvcGVydGllc1xyXG4gKi9cclxudHlwZSBNZWRpYUZlYXR1cmVJbmZvPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSBjb252ZXJ0RnVuY1R5cGU8Sz4gfCBib29sZWFuIHxcclxuICAgIHtcclxuICAgICAgICAvKiogRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBmcm9tIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxuICAgICAgICBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlPEs+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiBkZWZpbmVkLCBpbmRpY2F0ZXMgdGhlIHZhbHVlLCB3aGljaCB3ZSB3aWxsIG5vdCBwdXQgaW50byBDU1Mgc3RyaW5nLiBUaGlzIGlzIG5lZWRlZCBmb3JcclxuICAgICAgICAgKiBtZWRpYSBmZWF0dXJlcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgd2l0aG91dCB0aGUgdmFsdWUsIGUuZy4gY29sb3Igb3IgY29sb3ItaW5kZXguXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmZWF0dXJlIGlzIGEgXCJyYW5nZVwiIGZlYXR1cmU7IHRoYXQgaXMsIGNhbiBiZSB1c2VkIGluIGFuXHJcbiAgICAgICAgICogZXhwcmVzc2lvbiAoYSA8PSBmZWF0dXJlIDw9IGIpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhUXVlcnlUb0Nzc1N0cmluZyggcXVlcnk6IE1lZGlhVHlwZXMuTWVkaWFRdWVyeSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKVxyXG4gICAgICAgIHJldHVybiBxdWVyeS5tYXAoIChzaW5nbGVRdWVyeSkgPT4gc2luZ2xlTWVkaWFRdWVyeVRvQ3NzU3RyaW5nKCBzaW5nbGVRdWVyeSkpLmpvaW4oXCIsIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlTWVkaWFRdWVyeVRvQ3NzU3RyaW5nKCBxdWVyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVNZWRpYVF1ZXJ5VG9Dc3NTdHJpbmcoIHF1ZXJ5OiBNZWRpYVR5cGVzLlNpbmdsZU1lZGlhUXVlcnkpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IG1lZGlhVHlwZSA9IHF1ZXJ5LiRtZWRpYVR5cGU7XHJcbiAgICBsZXQgb25seSA9IHF1ZXJ5LiRvbmx5O1xyXG4gICAgbGV0IG5lZ2F0ZSA9IHF1ZXJ5LiRuZWdhdGU7XHJcblxyXG4gICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG1lZGlhVHlwZSlcclxuICAgICAgICBpdGVtcy5wdXNoKCAob25seSA/IFwib25seSBcIiA6IFwiXCIpICsgbWVkaWFUeXBlKTtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBxdWVyeSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiRcIikpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocXVlcnlbcHJvcE5hbWVdKVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCBgKCR7bWVkaWFGZWF0dXJlVG9Dc3NTdHJpbmcoIHByb3BOYW1lLCBxdWVyeVtwcm9wTmFtZV0pfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmVnYXRlID8gXCJub3QgXCIgOiBcIlwifSR7aXRlbXMuam9pbihcIiBhbmQgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBmZWF0dXJlIHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGZWF0dXJlVG9Dc3NTdHJpbmcoIGZlYXR1cmVOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmZWF0dXJlTmFtZSB8fCBwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgXHJcbiAgICBsZXQgaW5mbzogTWVkaWFGZWF0dXJlSW5mbyA9IG1lZGlhRmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xyXG5cclxuICAgIGxldCByZWFsRmVhdHVyZU5hbWUgPSBVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIGZlYXR1cmVOYW1lKTtcclxuXHJcbiAgICAvLyBpZiBkZWZhdWx0VmFsdWUgaXMgZGVmaW5lZCBhbmQgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGVxdWFsIHRvIGl0LCBubyB2YWx1ZSBzaG91bGQgYmUgcmV0dXJuZWQuXHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmRlZmF1bHRWYWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wVmFsID09PSBkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IFwiXCIgOiByZWFsRmVhdHVyZU5hbWU7XHJcblxyXG4gICAgbGV0IGNvbnZlcnQgPSB0eXBlb2YgaW5mbyA9PT0gXCJmdW5jdGlvblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5jb252ZXJ0IDogdW5kZWZpbmVkO1xyXG4gICAgbGV0IGlzUmFuZ2UgPSB0eXBlb2YgaW5mbyA9PT0gXCJib29sZWFuXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmlzUmFuZ2UgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoaXNSYW5nZSAmJiAhdmFsdWVPbmx5ICYmIEFycmF5LmlzQXJyYXkoIHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzMSA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9Dc3NTdHJpbmcoIGNvbnZlcnQsIHByb3BWYWxbMF0pO1xyXG4gICAgICAgIGxldCBzMiA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9Dc3NTdHJpbmcoIGNvbnZlcnQsIHByb3BWYWxbMV0pO1xyXG4gICAgICAgIHJldHVybiBgJHtzMX0gPD0gJHtyZWFsRmVhdHVyZU5hbWV9IDw9ICR7czJ9YDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9Dc3NTdHJpbmcoIGNvbnZlcnQsIHByb3BWYWwpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzIDogcmVhbEZlYXR1cmVOYW1lICsgXCI6XCIgKyBzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9Dc3NTdHJpbmcoIGNvbnZlcnQ6IGNvbnZlcnRGdW5jVHlwZSwgcHJvcFZhbDogYW55KTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGlmIChjb252ZXJ0KVxyXG4gICAgICAgIHJldHVybiBjb252ZXJ0KCBwcm9wVmFsKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggcHJvcFZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcHJvcFZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvQ3NzU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9Dc3NTdHJpbmcsXHJcbiAgICBtYXhBc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub0Nzc1N0cmluZyxcclxuICAgIGNvbG9yOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGhlaWdodDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9Dc3NTdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbkhlaWdodDogbGVuZ3RoRmVhdHVyZVRvQ3NzU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9Dc3NTdHJpbmcsXHJcbiAgICBtb25vY2hyb21lOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgcmVzb2x1dGlvbjogeyBjb252ZXJ0OiByZXNvbHV0aW9uRmVhdHVyZVRvQ3NzU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5SZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvQ3NzU3RyaW5nLFxyXG4gICAgbWF4UmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb0Nzc1N0cmluZyxcclxuICAgIHdpZHRoOiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb0Nzc1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluV2lkdGg6IGxlbmd0aEZlYXR1cmVUb0Nzc1N0cmluZyxcclxuICAgIG1heFdpZHRoOiBsZW5ndGhGZWF0dXJlVG9Dc3NTdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFNlbGVjdG9yVHlwZXMgZnJvbSBcIi4vU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCAqIGFzIFJ1bGVUeXBlcyBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIHNlbGVjdG9yLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgc2VsZWN0b3Igb2JqZWN0IGludG8gZnVsbCBzZWxlY3RvciBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JUb0Nzc1N0cmluZyggc2VsZWN0b3I6IFNlbGVjdG9yVHlwZXMuQ3NzU2VsZWN0b3IpOiBzdHJpbmdcclxue1xyXG5cdGlmICghc2VsZWN0b3IpXHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHRlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gc2VsZWN0b3I7XHJcblx0ZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuXHRcdHJldHVybiBzZWxlY3Rvci52YWx1ZVRvU3RyaW5nKCk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHNlbGVjdG9yLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTZWxlY3RvclByb3h5IGNsYXNzIGltcGxlbWVudHMgdGhlIElTdHJpbmdQcm94eSBpbnRlcmZhY2UgYnkgZW5jYXBzdWxhdGluZyBhIHNlbGVjdG9yXHJcbiAqIHRlbXBsYXRlIHN0cmluZyB3aXRoIG9wdGlvbmFsIHBsYWNlaG9sZGVycyAoZS5nLiB7MH0pLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5hbWVzXHJcbiAqIG9mIHRhZ3MsIGNsYXNzZXMgYW5kIElEcyBhbmQgb3RoZXIgcG9zc2libGUgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JQcm94eSBpbXBsZW1lbnRzIFNlbGVjdG9yVHlwZXMuSVNlbGVjdG9yUHJveHlcclxue1xyXG4gICAgLyoqIEZsYWcgaW5kaWNhdGluZyB0aGF0IHRoaXMgb2JqZWN0IGltcGxlbWVudHMgdGhlIElTZWxlY3RvclByb3h5IGludGVyZmFjZSAqL1xyXG4gICAgcHVibGljIGdldCBpc1NlbGVjdG9yUHJveHkoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgdGVtcGxhdGU6IHN0cmluZywgcHJpdmF0ZSBwYXJhbXM6IFNlbGVjdG9yVHlwZXMuU2VsZWN0b3JUb2tlblR5cGVbXSlcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ29udmVydHMgaW50ZXJuYWxseSBoZWxkIHZhbHVlKHMpIHRvIHN0cmluZyAqL1xyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRsZXQgdG9rZW5zOiBzdHJpbmdbXSA9IHRoaXMudGVtcGxhdGUuc3BsaXQoIC97KFxcZCspfS9nKTtcclxuXHRcdGxldCB0b2tlbklzTnVtYmVyID0gZmFsc2U7XHJcblx0XHRsZXQgYXJyOiBzdHJpbmdbXSA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgdG9rZW4gb2YgdG9rZW5zKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodG9rZW5Jc051bWJlcilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IHBhcnNlSW50KCB0b2tlbiwgMTApO1xyXG5cdFx0XHRcdGlmIChpbmRleCA+PSB0aGlzLnBhcmFtcy5sZW5ndGgpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnBhcmFtc1tpbmRleF07XHJcblx0XHRcdFx0aWYgKGl0ZW0gPT0gbnVsbClcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRcdFx0YXJyLnB1c2goIGl0ZW0pO1xyXG5cdFx0XHRcdGVsc2UgaWYgKGl0ZW0gaW5zdGFuY2VvZiBSdWxlKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChpdGVtLnJ1bGVUeXBlID09PSBSdWxlVHlwZXMuUnVsZVR5cGUuVEFHKVxyXG5cdFx0XHRcdFx0XHRhcnIucHVzaCggKGl0ZW0gYXMgYW55IGFzIFJ1bGVUeXBlcy5JVGFnUnVsZSkudGFnKTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGl0ZW0ucnVsZVR5cGUgPT09IFJ1bGVUeXBlcy5SdWxlVHlwZS5DTEFTUylcclxuXHRcdFx0XHRcdFx0YXJyLnB1c2goIChpdGVtIGFzIGFueSBhcyBSdWxlVHlwZXMuSUNsYXNzUnVsZSkuY3NzTmFtZSk7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpdGVtLnJ1bGVUeXBlID09PSBSdWxlVHlwZXMuUnVsZVR5cGUuSUQpXHJcblx0XHRcdFx0XHRcdGFyci5wdXNoKCAoaXRlbSBhcyBhbnkgYXMgUnVsZVR5cGVzLklJRFJ1bGUpLmNzc05hbWUpO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoaXRlbS5ydWxlVHlwZSA9PT0gUnVsZVR5cGVzLlJ1bGVUeXBlLlNFTEVDVE9SKVxyXG5cdFx0XHRcdFx0XHRhcnIucHVzaCggKGl0ZW0gYXMgYW55IGFzIFJ1bGVUeXBlcy5JU2VsZWN0b3JSdWxlKS5zZWxlY3RvclRleHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIFxyXG5cdFx0XHRcdFx0YXJyLnB1c2goIGl0ZW0udG9TdHJpbmcoKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAodG9rZW4pXHJcblx0XHRcdFx0YXJyLnB1c2goIHRva2VuKTtcclxuXHRcclxuXHRcdFx0dG9rZW5Jc051bWJlciA9ICF0b2tlbklzTnVtYmVyO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0cmV0dXJuIGFyci5qb2luKCBcIlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBTdHlsZVR5cGVzIGZyb20gXCIuL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0lTdHlsZXNldH0gZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWQsIE11bHRpQ3NzUG9zaXRpb259IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge2NhbWVsVG9EYXNoLCB2YWx1ZVRvU3RyaW5nLCBhcnJheVRvQ3NzU3RyaW5nLCBvYmplY3RUb0Nzc1N0cmluZyxcclxuICAgIElWYWx1ZUNvbnZlcnRPcHRpb25zLCBwb3NpdGlvblRvU3RyaW5nLCBtdWx0aVBvc2l0aW9uVG9TdHJpbmcsIENzc0xlbmd0aE1hdGgsIENzc1RpbWVNYXRoLCBDc3NOdW1iZXJNYXRoLCBDc3NBbmdsZU1hdGhcclxufSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuL0NvbG9yRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLy8gaGVscGVyIGZ1bmN0aW9ucyBmb3Igc3R5bGUgcHJvcGVydHkgY29udmVyc2lvbnNcclxuZnVuY3Rpb24gbXVsdGlQb3NpdGlvblRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPE11bHRpQ3NzUG9zaXRpb24+KTogc3RyaW5nIHsgcmV0dXJuIG11bHRpUG9zaXRpb25Ub1N0cmluZyggdmFsLCBcIixcIik7IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgY29udmVydGluZyBDU1MgcHJvcGVydHkgdHlwZXMgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLlNpbmdsZUFuaW1hdGlvbik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsXHJcbiAgICAgICAgICAgIFtcImR1cmF0aW9uXCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJjb3VudFwiLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiLFxyXG4gICAgICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICAgICAgXCJzdGF0ZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlNpbmdsZUFuaW1hdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb25UaW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYHN0ZXBzKCR7dmFsfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheSggdmFsOiBhbnlbXSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbFswXSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gc2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlKCB2YWwgYXMgU3R5bGVUeXBlcy5TaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvbilcclxuICAgICAgICA6IGFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgc2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlLCBcIixcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuU2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb24+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBhbmltYXRpb25UaW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoIDwgMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBzdGVwcyBmdW5jdGlvblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCB2WzBdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgc3RlcHMoJHt2WzBdfSR7di5sZW5ndGggPT09IDIgPyBcIixcIiArIHZbMV0gOiBcIlwifSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPCAwIHx8IHZbMF0gPiAxIHx8IHZbMl0gPCAwIHx8IHZbMl0gPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4gWW91IGhhdmUgJHt2WzBdfSBhbmQgJHt2WzJdfWApO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dlswXX0sJHt2WzFdfSwke3ZbMl19LCR7dlszXX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRTaXplX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlNpbmdsZUJhY2tncm91bmRTaXplPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb3JuZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc2luZ2xlQ29ybmVyUmFkaXVzVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5TaW5nbGVDb3JuZXJSYWRpdXNfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlclJhZGl1c1RvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVyUmFkaXVzU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCB2WzBdKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdHdvIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBhcnJheVRvQ3NzU3RyaW5nKCB2WzBdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHMgKz0gXCIgLyBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgYXJyYXlUb0Nzc1N0cmluZyggdlsxXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaW5nbGUgTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2LCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJUb1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkJvcmRlclN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHZbMF0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMF0pKVxyXG5cclxuICAgICAgICAgICAgaWYgKHZbMV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCB2YWx1ZVRvU3RyaW5nKHZbMV0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2WzJdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggY29sb3JUb1N0cmluZyh2WzJdKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnVmLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNsaXAgc3R5bGUgdmFsdWUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGlwVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5DbGlwU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYHJlY3QoJHtDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSh2KX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1uIHJ1bGUgc3R5bGUgcmVwcmVzZW50ZWQgYXMgYW4gb2JqZWN0IHdpdGggZmllbGRzIGNvcnJlc3BvbmRpbmcgdG8gY29sdW1uIHJ1bGVcclxuICogcHJvcGVydGllcyB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbHVtblJ1bGVUb0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkNvbHVtblJ1bGVTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHZhbCA9PiBvYmplY3RUb0Nzc1N0cmluZyggdmFsLCBmYWxzZSxcclxuICAgICAgICAgICAgW1wid2lkdGhcIiwgQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2VdLFxyXG4gICAgICAgICAgICBbXCJzdHlsZVwiLCB2YWx1ZVRvU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ11cclxuICAgICAgICApXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1ucyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbHVtbnNUb0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkNvbHVtbnNTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdmFsID0+IHZhbFswXSArIFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2YWxbMV0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgZmxleCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGZsZXhUb0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkZsZXhTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdmFsID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwuam9pbiggXCIgXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsWzBdICsgXCIgXCIgKyB2YWxbMV0gKyBcIiBcIisgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2YWxbMl0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgZm9udCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuRm9udFN0eWxlU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2YWwgPT4gXCJvYmxpcXVlIFwiICsgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIHZhbClcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0ZXh0LWVtcGhhc2lzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gdGV4dEVtcGhhc2lzUG9zaXRpb25Ub0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLlRleHRFbXBoYXNpc1Bvc2l0aW9uU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0ZXh0LWluZGVudCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIHRleHRJbmRlbnRUb0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLlRleHRJbmRlbnRTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdmFsID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcyA9IGAke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdmFsWzBdKX0gJHt2YWxbMV19YDtcclxuICAgICAgICAgICAgaWYgKHZhbFsyXSlcclxuICAgICAgICAgICAgICAgIHMgKz0gXCIgXCIgKyB2YWxbMl07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRyYW5zbGF0ZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuVHJhbnNsYXRlU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgU3R5bGVzZXRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2Ugc3R5bGVzZXQgdG8gdGhlIHRhcmdldCBzdHlsZXNldC4gQWxsIHJlZ3VsYXIgcHJvcGVydGllcyBhcmVcclxuICogcmVwbGFjZWQuIFByb3BlcnRpZXMgXCItLVwiIGFuZCBcIiFcIiBnZXQgc3BlY2lhbCB0cmVhdG1lbnQgYmVjYXVzZSB0aGV5IG1pZ2h0IGJlIGFycmF5cy5cclxuICogQHBhcmFtIHRhcmdldCBcclxuICogQHBhcmFtIHNvdXJjZSBcclxuICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQgaWYgbm90IG51bGwgb3IgYSBuZXcgc3R5bGVzZXQgb3RoZXJ3aXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzZXRzKCB0YXJnZXQ6IFN0eWxlVHlwZXMuU3R5bGVzZXQsIHNvdXJjZTogU3R5bGVUeXBlcy5TdHlsZXNldCk6IFN0eWxlVHlwZXMuU3R5bGVzZXRcclxue1xyXG4gICAgaWYgKCFzb3VyY2UpXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuXHJcbiAgICAvLyBpZiB0YXJnZXQgaXMgbm90IGRlZmluZWQsIGNyZWF0ZSBpdCBhcyBhbiBlbXB0eSBvYmplY3QuIFRoaXMgb2JqZWN0IHdpbGwgYmUgcmV0dXJuZWQgYWZ0ZXJcclxuICAgIC8vIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIGFyZSBjb3BpZWQgdG8gaXQuXHJcbiAgICBpZiAoIXRhcmdldClcclxuICAgIHtcclxuICAgICAgICB0YXJnZXQgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCB0YXJnZXQsIHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBpbXBvcnRhbnQgcHJvcGVydGllcyBhcmUgZGVmaW5lZC4gSWYgd2UgZG9uJ3QgaGF2ZVxyXG4gICAgLy8gZWl0aGVyLCB3ZSBjYW4ganVzdCB1c2UgdGhlIE9iamVjdC5hc3NpZ24gZnVuY3Rpb24uXHJcbiAgICBsZXQgc291cmNlQ3VzdG9tUHJvcHMgPSBzb3VyY2VbXCItLVwiXTtcclxuICAgIGxldCBzb3VyY2VJbXBQcm9wcyA9IHNvdXJjZVtcIiFcIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzICYmICFzb3VyY2VJbXBQcm9wcylcclxuICAgIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCB0YXJnZXQsIHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXJnZSBjdXN0b20gcHJvcGVydGllc1xyXG4gICAgaWYgKHNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0YXJnZXRDdXN0b21Qcm9wcyA9IHRhcmdldFtcIi0tXCJdO1xyXG4gICAgICAgIHRhcmdldFtcIi0tXCJdID0gIXRhcmdldEN1c3RvbVByb3BzID8gc291cmNlQ3VzdG9tUHJvcHMgOiB0YXJnZXRDdXN0b21Qcm9wcy5jb25jYXQoIHNvdXJjZUN1c3RvbVByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXJnZSBpbXBvcnRhbnQgcHJvcGVydGllc1xyXG4gICAgaWYgKHNvdXJjZUltcFByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0YXJnZXRJbXBQcm9wcyA9IHRhcmdldFtcIiFcIl07XHJcbiAgICAgICAgdGFyZ2V0W1wiIVwiXSA9ICF0YXJnZXRJbXBQcm9wcyA/IHNvdXJjZUltcFByb3BzIDogdGFyZ2V0SW1wUHJvcHMuY29uY2F0KCBzb3VyY2VJbXBQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29weSBhbGwgb3RoZXIgcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2VcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzb3VyY2UpXHJcblx0e1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCIhXCIgfHwgcHJvcE5hbWUgPT09IFwiLS1cIilcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlc2V0IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9Dc3NTdHJpbmcoIHN0eWxlc2V0OiBTdHlsZVR5cGVzLlN0eWxlc2V0KTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIXN0eWxlc2V0KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBpbXBQcm9wczogU2V0PHN0cmluZz4gPSBudWxsO1xyXG4gICAgaWYgKHN0eWxlc2V0W1wiIVwiXSlcclxuICAgIHtcclxuICAgICAgICAvLyB2YWx1ZSBpcyBlaXRoZXIgYSBzaW5nbGUgbmFtZSBvciBhbiBhcnJheSBvZiBuYW1lcyBvZiBDU1MgcHJvcGVydGllcyB0byBhZGQgdGhlICFpbXBvcnRhbnQgZmxhZ1xyXG4gICAgICAgIGltcFByb3BzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcbiAgICAgICAgbGV0IGltcFByb3BWYWwgPSBzdHlsZXNldFtcIiFcIl0gYXMgKHN0cmluZyB8IHN0cmluZ1tdKTtcclxuICAgICAgICBpZiAodHlwZW9mIGltcFByb3BWYWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIGltcFByb3BzLmFkZCggaW1wUHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBpbXBQcm9wVmFsLmZvckVhY2goIHYgPT4gaW1wUHJvcHMuYWRkKCB2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHR7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIiFcIilcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIi0tXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIG9mIHRoZSBcIi0tXCIgcHJvcGVydHksIHdoaWNoIGlzIGFuIGFycmF5IHdoZXJlIGVhY2ggaXRlbSBpc1xyXG4gICAgICAgICAgICAvLyBhIHR3by1pdGVtIG9yIHRocmVlLWl0ZW0gYXJyYXlcclxuICAgICAgICAgICAgbGV0IHByb3BWYWwgPSBzdHlsZXNldFtwcm9wTmFtZV0gYXMgU3R5bGVUeXBlcy5DdXN0b21WYXJTdHlsZVR5cGVbXTtcclxuICAgICAgICAgICAgZm9yKCBsZXQgY3VzdG9tVmFsIG9mIHByb3BWYWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3VzdG9tVmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjdXN0b21Qcm9wVG9Dc3NTdHJpbmcoIGN1c3RvbVZhbCwgZmFsc2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAgICAgYnVmLnB1c2goIHN0eWxlUHJvcFRvQ3NzU3RyaW5nKCBwcm9wTmFtZSBhcyBrZXlvZiBJU3R5bGVzZXQsIHN0eWxlc2V0W3Byb3BOYW1lXSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIChpbXBQcm9wcyAmJiBpbXBQcm9wcy5oYXMoIHByb3BOYW1lKSA/IFwiICFpbXBvcnRhbnRcIiA6IFwiXCIpKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIC8vIGpvaW4gYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSBleGNlcHQgbnVsbHMsIHVuZGVmaW5lZCBhbmQgZW1wdHkgc3RyaW5nc1xyXG4gICAgcmV0dXJuIGB7JHtidWYuZmlsdGVyKCAoaXRlbSkgPT4gISFpdGVtKS5qb2luKFwiO1wiKX19YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgZGVmaW5pdGlvbiB0byBzdHJpbmcuXHJcbiAqIEBwYXJhbSBwcm9wVmFsIFxyXG4gKiBAcGFyYW0gdmFsdWVPbmx5IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGN1c3RvbVByb3BUb0Nzc1N0cmluZzxLIGV4dGVuZHMga2V5b2YgSVN0eWxlc2V0PihcclxuICAgIHByb3BWYWw6IFN0eWxlVHlwZXMuQ3VzdG9tVmFyU3R5bGVUeXBlPEs+LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIXByb3BWYWwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IHZhck5hbWU6IHN0cmluZztcclxuICAgIGxldCB0ZW1wbGF0ZTogSztcclxuICAgIGxldCB2YWx1ZTogYW55O1xyXG4gICAgaWYgKHByb3BWYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSBwcm9wVmFsWzBdLmNzc05hbWU7XHJcbiAgICAgICAgdGVtcGxhdGUgPSBwcm9wVmFsWzBdLnRlbXBsYXRlO1xyXG4gICAgICAgIHZhbHVlID0gcHJvcFZhbFsxXVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSBwcm9wVmFsWzBdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgZWxzZSBpZiAoIXZhck5hbWUuc3RhcnRzV2l0aChcIi0tXCIpKVxyXG4gICAgICAgICAgICB2YXJOYW1lID0gXCItLVwiICsgdmFyTmFtZTtcclxuXHJcbiAgICAgICAgdGVtcGxhdGUgPSBwcm9wVmFsWzFdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSB8fCAhdGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICB2YWx1ZSA9IHByb3BWYWxbMl07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZhclZhbHVlID0gc3R5bGVQcm9wVG9Dc3NTdHJpbmcoIHRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gdmFyVmFsdWUgOiBgJHt2YXJOYW1lfToke3ZhclZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0eWxlIHN0cmluZ1xyXG4gKiBAcGFyYW0gc3R5bGUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVQcm9wVG9Dc3NTdHJpbmc8SyBleHRlbmRzIGtleW9mIElTdHlsZXNldD4oXHJcbiAgICBwcm9wTmFtZTogSywgcHJvcFZhbDogSVN0eWxlc2V0W0tdLCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIXByb3BOYW1lKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgcHJvcGVydHlcclxuICAgIGxldCBpbmZvOiBhbnkgPSBTdHlsZVByb3BlcnR5SW5mb3NbcHJvcE5hbWVdO1xyXG5cclxuICAgIGxldCB2YXJWYWx1ZSA9ICFpbmZvXHJcbiAgICAgICAgPyB2YWx1ZVRvU3RyaW5nKCBwcm9wVmFsKVxyXG4gICAgICAgIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgPyB2YWx1ZVRvU3RyaW5nKCBwcm9wVmFsLCBpbmZvIGFzIElWYWx1ZUNvbnZlcnRPcHRpb25zKVxyXG4gICAgICAgICAgICA6IChpbmZvIGFzIFByb3BUb1N0cmluZ0Z1bmM8Sz4pKCBwcm9wVmFsKTtcclxuXHJcbiAgICBpZiAoIXZhclZhbHVlKVxyXG4gICAgICAgIHZhclZhbHVlID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gdmFyVmFsdWUgOiBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfToke3ZhclZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZ2lzdHJ5IG9mIENTUyBwcm9wZXJ0aWVzIHRoYXQgc3BlY2lmaWVzIGhvdyB0aGVpciB2YWx1ZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgcHJvcGVydHkgdmFsdWUgYW5kIGNvbnZlcnRzIGl0IHRvIHN0cmluZyAqL1xyXG50eXBlIFByb3BUb1N0cmluZ0Z1bmM8SyBleHRlbmRzIGtleW9mIElTdHlsZXNldD4gPSAodmFsOiBJU3R5bGVzZXRbS10pID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLy8gSGVscGVyIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCB2YWx1ZXMgaW4gYW4gYXJyYXkgc2hvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYS5cclxuLy8gV2UgdXNlIGl0IG1hbnkgdGltZXMgaW4gdGhlIHN0dWN0dXJlIGJlbG93LlxyXG5sZXQgY29tbWFBcnJheVNlcGFyYXRvciA9IHsgYXJyYXlTZXBhcmF0b3I6IFwiLFwiIH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gdGhlIFN0eWxlUHJvcGVydHlJbmZvIG9iamVjdHMgZGVzY3JpYmluZyBjdXN0b20gYWN0aW9ucyBuZWNlc3NhcnkgdG9cclxuICogY29udmVydCB0aGUgcHJvcGVydHkgdmFsdWUgdG8gdGhlIENTUy1jb21wbGlhbnQgc3RyaW5nLlxyXG4gKi9cclxuY29uc3QgU3R5bGVQcm9wZXJ0eUluZm9zOiB7IFtLIGluIGtleW9mIElTdHlsZXNldF06IChQcm9wVG9TdHJpbmdGdW5jPEs+IHwgSVZhbHVlQ29udmVydE9wdGlvbnMpIH0gPVxyXG57XHJcbiAgICBhbmltYXRpb246IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBzaW5nbGVBbmltYXRpb25fZnJvbVN0eWxlLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIixcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVBbmltYXRpb25fZnJvbVN0eWxlXHJcbiAgICB9LFxyXG5cclxuICAgIGFuaW1hdGlvbkRlbGF5OiBDc3NUaW1lTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogQ3NzVGltZU1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25GaWxsTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvbk5hbWU6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcblxyXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBhbmltYXRpb25UaW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fZnJvbUFycmF5XHJcbiAgICB9LFxyXG5cclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRDbGlwOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZE9yaWdpbjogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogbXVsdGlQb3NpdGlvblRvU3RyaW5nV2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRTaXplOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IHNpbmdsZUJhY2tncm91bmRTaXplX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0sXHJcblxyXG4gICAgYmFzZWxpbmVTaGlmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGJvcmRlcjogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQmxvY2tFbmRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0V2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbTogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBib3JkZXJDb2xvcjoge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICBib3JkZXJJbWFnZVdpZHRoOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvcmRlcklubGluZUVuZDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVFbmRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZUVuZFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyTGVmdDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0V2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyU3R5bGU6IHZhbHVlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJTcGFjaW5nOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvcmRlclRvcDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcldpZHRoOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuXHJcbiAgICBib3R0b206IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJveFNoYWRvdzogdmFsdWVUb1N0cmluZyxcclxuXHJcbiAgICBjYXJldENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgY2xpcDogY2xpcFRvQ3NzU3RyaW5nLFxyXG4gICAgY29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBjb2x1bW5HYXA6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGU6IGNvbHVtblJ1bGVUb0Nzc1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVTdHlsZTogdmFsdWVUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVXaWR0aDogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBjb2x1bW5zOiBjb2x1bW5zVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgZmxleDogZmxleFRvQ3NzU3RyaW5nLFxyXG4gICAgZmxvb2RDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGZvbnRTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBmb250U3R5bGU6IGZvbnRTdHlsZVRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGdhcDogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBncmlkQ29sdW1uR2FwOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBncmlkUm93R2FwOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgaGVpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgaW5saW5lU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGxlZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGxldHRlclNwYWNpbmc6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGxpZ2h0aW5nQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcblxyXG4gICAgbWFyZ2luOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIG1hcmdpbkJsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5Cb3R0b206IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbklubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbkxlZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpblJpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5Ub3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heEJsb2NrU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhJbmxpbmVTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4Wm9vbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWluQmxvY2tTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtaW5IZWlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1pbklubGluZVNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHRtaW5XaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWluWm9vbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIG9iamVjdFBvc2l0aW9uOiBwb3NpdGlvblRvU3RyaW5nLFxyXG4gICAgb3V0bGluZUNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgb3V0bGluZU9mZnNldDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgb3V0bGluZVN0eWxlOiB2YWx1ZVRvU3RyaW5nLFxyXG5cclxuICAgIHBhZGRpbmc6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgcGFkZGluZ0Jsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0lubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nVG9wOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwZXJzcGVjdGl2ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IHBvc2l0aW9uVG9TdHJpbmcsXHJcblxyXG4gICAgcmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHJvd0dhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIHNjcm9sbE1hcmdpbjogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jazogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja0VuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmU6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpblRvcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZzogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0JvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZTogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdMZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdUb3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHN0b3BDb2xvcjogY29sb3JUb1N0cmluZyxcclxuXHJcbiAgICB0YWJTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRleHRFbXBoYXNpc0NvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgdGV4dEVtcGhhc2lzUG9zaXRpb246IHRleHRFbXBoYXNpc1Bvc2l0aW9uVG9Dc3NTdHJpbmcsXHJcbiAgICB0ZXh0SW5kZW50OiB0ZXh0SW5kZW50VG9Dc3NTdHJpbmcsXHJcbiAgICB0b3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgd2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICB6b29tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc3VwcG9ydHMgcXVlcnkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1F1ZXJ5VG9Dc3NTdHJpbmcoIHF1ZXJ5OiBTdHlsZVR5cGVzLlN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9Dc3NTdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiBvciBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZVN1cHBvcnRzUXVlcnlUb0Nzc1N0cmluZyggcXVlcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU3VwcG9ydHNRdWVyeVRvQ3NzU3RyaW5nKCBxdWVyeTogU3R5bGVUeXBlcy5TaW5nbGVTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG5cclxuICAgIGxldCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyggcXVlcnkpLmZpbHRlciggKHByb3BOYW1lKSA9PiBwcm9wTmFtZSAhPSBcIiRuZWdhdGVcIik7XHJcbiAgICBpZiAocHJvcE5hbWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbm90ID0gcXVlcnkuJG5lZ2F0ZSA/IFwibm90XCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuICBgJHtub3R9ICgke3Byb3BOYW1lcy5tYXAoIChwcm9wTmFtZSkgPT5cclxuICAgICAgICBzdHlsZVByb3BUb0Nzc1N0cmluZyggcHJvcE5hbWUgYXMga2V5b2YgSVN0eWxlc2V0LCBxdWVyeVtwcm9wTmFtZV0pKS5qb2luKCBcIikgYW5kIChcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgIEV4dGVuZGVkLCBJU3RyaW5nUHJveHksIElOdW1iZXJQcm94eSwgQ3NzTnVtYmVyLCBDc3NNdWx0aU51bWJlciwgSU51bWJlck1hdGgsXHJcbiAgICBJQ3NzRnJhY3Rpb25NYXRoLCBDc3NQb3NpdGlvbiwgTXVsdGlDc3NQb3NpdGlvbiwgTnVtYmVyQmFzZSwgTXVsdGlOdW1iZXJCYXNlLFxyXG4gICAgTGVuZ3RoVW5pdHMsIFBlcmNlbnRVbml0cywgQW5nbGVVbml0cywgVGltZVVuaXRzLCBSZXNvbHV0aW9uVW5pdHMsIEZyZXF1ZW5jeVVuaXRzLFxyXG4gICAgRnJhY3Rpb25Vbml0cywgQ3NzTGVuZ3RoLCBDc3NNdWx0aUxlbmd0aCwgQ3NzQW5nbGUsIENzc011bHRpQW5nbGUsIENzc1RpbWUsIENzc011bHRpVGltZSxcclxuICAgIENzc1Jlc29sdXRpb24sIENzc011bHRpUmVzb2x1dGlvbiwgQ3NzRnJlcXVlbmN5LCBDc3NNdWx0aUZyZXF1ZW5jeSwgQ3NzRnJhY3Rpb24sXHJcbiAgICBDc3NNdWx0aUZyYWN0aW9uLCBDc3NQZXJjZW50LCBDc3NNdWx0aVBlcmNlbnQsIElVcmxQcm94eVxyXG59IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpY3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGRhc2hlLWNhc2UgdG8gY2FtZWxDYXNlLCBlLmcuIGZvbnQtc2l6ZSB0byBmb250U2l6ZS5cclxuICogQHBhcmFtIGRhc2hcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2UsIGUuZy4gZm9udFNpemUgdG8gZm9udC1zaXplLlxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhbHVlQ29udmVydE9wdGlvbnMgaW50ZXJmYWNlIGRlZmluZXMgb3B0aW9uYWwgZnVuY3Rpb25zIHRoYXQgY29udmVydHZhbHVlcyBvZiBkaWZmZXJudFxyXG4gKiB0eXBlcyB0byBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVDb252ZXJ0T3B0aW9uc1xyXG57XHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgIGZyb21OdWxsPzogKCB2YWw6IG51bGwgfCB1bmRlZmluZWQpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBzdHJpbmcuIFRoaXMgYWxsb3dzIHRyYW5zZm9ybWluZyBvbmUgc3RyaW5nIHRvIGFub3RoZXIuXHJcbiAgICBmcm9tU3RyaW5nPzogKCB2YWw6IHN0cmluZykgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgIGZyb21Cb29sPzogKHZhbDogYm9vbGVhbikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIG51bWJlclxyXG4gICAgZnJvbU51bWJlcj86ICh2YWw6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gICAgZnJvbUFycmF5PzogKHZhbDogYW55W10pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gb2JqZWN0XHJcbiAgICBmcm9tT2JqZWN0PzogKHZhbDoge1tLOiBzdHJpbmddOiBhbnl9KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHR5cGUtc3BlY2lmaWMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWRcclxuICAgIGZyb21Bbnk/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgdG8gY29udmVydCBhcnJheSBpdGVtcyBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFycmF5SXRlbUZ1bmM/OiAodjogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gU2VwYXJhdG9yIGZvciBhcnJheSBpdGVtcyAtIHVzZWQgb25seSBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFycmF5U2VwYXJhdG9yPzogc3RyaW5nO1xyXG5cclxuICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZXNlIGFyZSBhcmd1bWVudHMgdG8gcGFzcyB3aGVuIGludm9raW5nIGl0XHJcbiAgICBmdW5jQXJncz86IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHZhbHVlIG9mIGFuIGFyYml0cmFyeSB0eXBlIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhlIG9wdGlvbmFsIG9wdGlvbnMgcGFyYW1ldGVyXHJcbiAqIGNhbiBkZWZpbmUgaG93IHNwZWNpZmljIHR5cGVzIGFyZSBjb252ZXJ0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVUb1N0cmluZyggdmFsOiBhbnksIG9wdGlvbnM/OiBJVmFsdWVDb252ZXJ0T3B0aW9ucyk6IHN0cmluZ1xyXG57XHJcbiAgIGlmICghb3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICAvLyBzdGFuZGFyZCBwcm9jZXNzaW5nOlxyXG4gICAgICAgIC8vIC0gbnVsbC91bmRlZmluZWQgYmVjb21lIFwiaW5pdGlhbFwiLlxyXG4gICAgICAgIC8vIC0gY2FsbCB2YWx1ZVRvU3RyaW5nIChJU3RyaW5nUHJveHkgYW5kIHRoZSBsaWtlKSBpZiBleGlzdC5cclxuICAgICAgICAvLyAtIGZ1bmN0aW9uOiBjYWxsIHdpdGhvdXQgcGFyYW1ldGVycy5cclxuICAgICAgICAvLyAtIGV2ZXJ5dGhpbmcgZWxzZTogY2FsbCB0b1N0cmluZygpLlxyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwudmFsdWVUb1N0cmluZyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnZhbHVlVG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBwcm9jZXNzaW5nIHdpdGggb3B0aW9ucy4gRm9yIGFsbCB0eXBlcyBleGNlcHQgbnVsbCBhbmQgc3RyaW5nLCBpZiB0aGUgdHlwZS1zcGVjaWZpY1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCBjYWxsIGZyb21BbnkgaWYgZGVmaW5lZC5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21OdWxsID8gb3B0aW9ucy5mcm9tTnVsbCggdmFsKSA6IFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbVN0cmluZyA/IG9wdGlvbnMuZnJvbVN0cmluZyggdmFsKSA6IHZhbDtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUJvb2wgPyBvcHRpb25zLmZyb21Cb29sKCB2YWwpIDogb3B0aW9ucy5mcm9tQW55ID8gb3B0aW9ucy5mcm9tQW55KCB2YWwpIDogdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bWJlciA/IG9wdGlvbnMuZnJvbU51bWJlciggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZyb21BcnJheSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BcnJheSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gb3B0aW9ucy5hcnJheVNlcGFyYXRvciAhPSBudWxsID8gb3B0aW9ucy5hcnJheVNlcGFyYXRvciA6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXJyYXlJdGVtRnVuYylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBvcHRpb25zLmFycmF5SXRlbUZ1bmMsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUb0Nzc1N0cmluZyggdmFsLCB1bmRlZmluZWQsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21PYmplY3QpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tT2JqZWN0KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIG9wdGlvbnMuZnVuY0FyZ3MgPyB2YWwoIC4uLm9wdGlvbnMuZnVuY0FyZ3MpIDogdmFsKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbUFueSlcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW4gYXJyYXkgb2YgdGhlIGdpdmVuIHR5cGV0byBhIHNpbmdsZSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIHNlcGFyYXRvci5cclxuICogRWxlbWVudHMgb2YgdGhlIGFycmF5IGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlUb0Nzc1N0cmluZyggdmFsOiBhbnlbXSwgZnVuYz86ICh2KSA9PiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuICF2YWwgfHwgdmFsLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gXCJcIlxyXG4gICAgICAgIDogdmFsLmZpbHRlciggeCA9PiB4ICE9IG51bGwpLm1hcCggeSA9PiBmdW5jID8gZnVuYyh5KSA6IHZhbHVlVG9TdHJpbmcoIHkpKS5qb2luKCBzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gb2JqZWN0IHRvIGEgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBPYmplY3QgdG8gY29udmVydCB0byBzdHJpbmcuXHJcbiAqIEBwYXJhbSB1c2VQcm9wTmFtZXMgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5hbWVzIG9mIHRoZSBvYmplY3QncyBwcm9wcnRpZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBwcm9wc0FuZEZ1bmNzIEFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBvcHRpb25hbGx5IGZ1bmN0aW9ucy4gVGhlIG9yZGVyIG9mIHRoZSBuYW1lcyBkZXRlcm1pbmVzIGluXHJcbiAqICAgICB3aGljaCBvcHJkZXIgdGhlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzdHJpbmcuIElmIGEgZnVuY3Rpb24gaXMgcHJlc2VudCBmb3IgdGhlIHByb3BlcnR5LFxyXG4gKiAgICAgaXQgd2lsbCBiZSB1c2VkIHRvIGNvbnZlcnQgdGhlIHByb3BlcnR5J3MgdmFsdWUgdG8gdGhlIHN0cmluZy4gSWYgYSBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCwgdGhlbiB0aGVcclxuICogICAgIHByb3BlcnR5IHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHN0cmluZyB1c2luZyB0aGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb0Nzc1N0cmluZyggdmFsOiBhbnksIHVzZVByb3BOYW1lczogYm9vbGVhbixcclxuICAgIC4uLnByb3BzQW5kRnVuY3M6IChzdHJpbmcgfCBbc3RyaW5nLCAodmFsOiBhbnkpID0+IHN0cmluZ10pW10gKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbCB8fCBwcm9wc0FuZEZ1bmNzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgYnVmOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJvcHNBbmRGdW5jcy5mb3JFYWNoKCBwcm9wQW5kRnVuYyA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHByb3BOYW1lID0gdHlwZW9mIHByb3BBbmRGdW5jID09PSBcInN0cmluZ1wiID8gcHJvcEFuZEZ1bmMgOiBwcm9wQW5kRnVuY1swXTtcclxuICAgICAgICAgICAgbGV0IGZ1bmMgPSB0eXBlb2YgcHJvcEFuZEZ1bmMgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBwcm9wQW5kRnVuY1sxXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9wVmFsID0gdmFsW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VQcm9wTmFtZXMpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggcHJvcE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZ1bmMpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggZnVuYyggcHJvcFZhbCkpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wVmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggdmFsdWVUb1N0cmluZyggcHJvcFZhbCkpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG5cdHJldHVybiBidWYuam9pbihcIiBcIik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHJpbmdQcm94eSBjbGFzcyBpbXBsZW1lbnRzIHRoZSBJU3RyaW5nUHJveHkgaW50ZXJmYWNlIGJ5IGVuY2Fwc3VsYXRpbmcgdGhlIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm94eSBpbXBsZW1lbnRzIElTdHJpbmdQcm94eVxyXG57XHJcbiAgICAvKiogRmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhpcyBvYmplY3QgaW1wbGVtZW50cyB0aGUgSVN0cmluZ1Byb3h5IGludGVyZmFjZSAqL1xyXG4gICAgcHVibGljIGdldCBpc1N0cmluZ1Byb3h5KCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBzPzogc3RyaW5nIHwgSVN0cmluZ1Byb3h5KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucyA9IHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIGludGVybmFsbHkgaGVsZCB2YWx1ZShzKSB0byBzdHJpbmcgKi9cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnMgPT0gbnVsbCA/IFwiXCIgOiB0eXBlb2YgdGhpcy5zID09PSBcInN0cmluZ1wiID8gdGhpcy5zIDogdGhpcy5zLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzPzogc3RyaW5nIHwgU3RyaW5nUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE51bWJlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIG9mIGZ1bmN0aW9ucyB0aGF0IGNvbnZlcnQgYSBudW1iZXIgdG8gYSBzdHJpbmcgKi9cclxudHlwZSBDb252ZXJ0TnVtYmVyRnVuY1R5cGUgPSAobjogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHNpbmdsZSBudW1lcmljIHZhbHVlIHRvIGEgQ1NTIHN0cmluZyBvcHRpb25hbGx5IGFwcGVuZGluZyB1bml0cyB0aGF0IGNhbiBiZSBkaWZmZXJlbnRcclxuICogZm9yIGludGVnZXIgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMuXHJcbiAqIEBwYXJhbSBuIE51bWJlciB0byBjb252ZXJ0IHRvIHN0cmluZyByZXByZXNlbnRhdGlvbi5cclxuICogQHBhcmFtIGludFVuaXQgVW5pdHMgdG8gYXBwZW5kIGlmIHRoZSBudW1iZXIgaXMgaW50ZWdlci5cclxuICogQHBhcmFtIGZsb2F0VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBmbG9hdGluZyBwb2ludC5cclxuICovXHJcbmZ1bmN0aW9uIG51bWJlclRvQ3NzU3RyaW5nKCBuOiBudW1iZXIsIGludFVuaXQ6IHN0cmluZyA9IFwiXCIsIGZsb2F0VWludDogc3RyaW5nID0gXCJcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgaW50VW5pdCA6IG4gKyBmbG9hdFVpbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aW1lIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE51bWJlciBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGUuXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgbnVtYmVyIHRvIGEgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPiwgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwgeyBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuY30pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIENzc051bWJlciBvciBhcnJheSBvZiBDc3NOdW1iZXIgb2JqZWN0cyB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUtIG9yIG11bHRpLW51bWJlciBzdHlsZSB2YWx1ZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzZXBhcmF0b3IgU3RyaW5nIHRvIHVzZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPixcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRGdW5jOiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUsIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuYyxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiB2ID0+IHN0eWxlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwbGFjZXMgcGF0dGVybnMge2luZGV4W3x1bml0XX0gaW4gdGhlIGZvcm1hdCBzdHJpbmcgd2l0aCB2YWx1ZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAqIEBwYXJhbSBmb3JtYXQgXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBcclxuICogQHBhcmFtIHBhcmFtcyBcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcnMoIGZvcm1hdDogc3RyaW5nLCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U+W10sIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VyKCB0b2tlbjogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KCBhcmdzWzBdKTtcclxuICAgICAgICBpZiAoaW5kZXggPj0gcGFyYW1zLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIFwiMFwiO1xyXG5cclxuICAgICAgICBsZXQgdW5pdCA9IGFyZ3NbMV07XHJcbiAgICAgICAgbGV0IHBhcmFtID0gcGFyYW1zW2luZGV4XTtcclxuICAgICAgICBpZiAodW5pdCAmJiB0eXBlb2YgcGFyYW0gPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBwYXJhbSArIHVuaXQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gc3R5bGVUb1N0cmluZyggcGFyYW0sIGNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoIC97XFxzKihcXGQqKVxccyooPzpcXHxcXHMqKFthLXpBLVpcXCVdKylcXHMqKT99L2csIHJlcGxhY2VyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bWJlclByb3h5IGNsYXNzIGltcGxlbWVudHMgdGhlIElOdW1iZXJQcm94eSBpbnRlcmZhY2UgYnkgZW5jYXBzdWxhdGluZyBwYXJhbWV0ZXJzIG9mIGFcclxuICogbWF0aGVtYXRpYyBDU1MgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBvciBtb3JlIHBhcmFtZXRlcnMgb2YgdHlwZSBDc3NOdW1iZXIuXHJcbiAqL1xyXG5hYnN0cmFjdCBjbGFzcyBOdW1iZXJQcm94eTxUIGV4dGVuZHMgc3RyaW5nIHwgbnVsbCA9IG51bGw+IGltcGxlbWVudHMgSU51bWJlclByb3h5PFQ+XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIC0gbmVlZGVkIG9ubHkgdG8gaW5kaWNhdGUgdGhhdCB0aGlzIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBJTnVtZXJQcm94eSBpbnRlcmZhY2VcclxuICAgICAqIGZvciBhIGdpdmVuIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzTnVtYmVyUHJveHkoIG86IFQpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdLCBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnZlcnRGdW5jID0gY29udmVydEZ1bmM7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIGludGVybmFsbHkgaGVsZCB2YWx1ZShzKSB0byBzdHJpbmcgLSBzaG91bGQgYmUgaW1wbGVtZW50ZWQgYnkgdGhlIGRlcml2ZWQgY2xhc3NlcyAqL1xyXG4gICAgYWJzdHJhY3QgdmFsdWVUb1N0cmluZygpOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBKYXZhU2NyaXB0IG51bWJlcnMgdG8gc3RyaW5ncyAoZS5nLiBieSBhcHBlbmRpbmcgYSBzdWZmaXggZm9yIHVuaXRzKS5cclxuICAgIC8vIElmIG5vdCBkZWZpbmVkLCBudW1iZXJzIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB3aXRob3V0IGFwcGVuZGluZyBhbnkgc3VmZml4LlxyXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRGdW5jOiBDb252ZXJ0TnVtYmVyRnVuY1R5cGU7XHJcblxyXG4gICAgLy8gQXJyYXkgb2YgQ3NzTnVtYmVyIHBhcmFtZXRlcnMgdG8gdGhlIG1hdGhlbWF0aWNhbCBmdW5jdGlvbi5cclxuICAgIHByb3RlY3RlZCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNYXRoRnVuY1Byb3h5IGNsYXNzIGltcGxlbWVudHMgdGhlIElOdW1iZXJQcm94eSBpbnRlcmZhY2UgYnkgZW5jYXBzdWxhdGluZyBwYXJhbWV0ZXJzIG9mIGFcclxuICogbWF0aGVtYXRpYyBDU1MgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIG9uZSBvciBtb3JlIHBhcmFtZXRlcnMgb2YgdHlwZSBDc3NOdW1iZXIuXHJcbiAqL1xyXG5jbGFzcyBNYXRoRnVuY1Byb3h5PFQgZXh0ZW5kcyBzdHJpbmcgfCBudWxsID0gbnVsbD4gZXh0ZW5kcyBOdW1iZXJQcm94eTxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggbmFtZTogc3RyaW5nLCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKCBwYXJhbXMsIGNvbnZlcnRGdW5jKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDb252ZXJ0cyBpbnRlcm5hbGx5IGhlbGQgdmFsdWUocykgdG8gc3RyaW5nICovXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSgke211bHRpU3R5bGVUb1N0cmluZyggdGhpcy5wYXJhbXMsIHRoaXMuY29udmVydEZ1bmMsIFwiLFwiKX0pYDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBOYW1lIG9mIHRoZSBtYXRoZW1hdGljYWwgZnVuY3Rpb24uXHJcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENhbGNGdW5jUHJveHkgY2xhc3MgaW1wbGVtZW50cyB0aGUgSU51bWJlclByb3h5IGludGVyZmFjZSBieSBlbmNhcHN1bGF0aW5nIHBhcmFtZXRlcnMgb2YgYVxyXG4gKiBjYWxjKCkgQ1NTIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIGZvcm11bGEgc3RyaW5nIGFuZCB6ZXJvIG9yIG1vcmUgcGFyYW1ldGVycyBvZiB0eXBlIENzc051bWJlci5cclxuICovXHJcbmNsYXNzIENhbGNGdW5jUHJveHk8VCBleHRlbmRzIHN0cmluZyB8IG51bGwgPSBudWxsPiBleHRlbmRzIE51bWJlclByb3h5PFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBmb3JtdWxhOiBzdHJpbmcsIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSwgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoIHBhcmFtcywgY29udmVydEZ1bmMpO1xyXG4gICAgICAgIHRoaXMuZm9ybXVsYSA9IGZvcm11bGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIGludGVybmFsbHkgaGVsZCB2YWx1ZShzKSB0byBzdHJpbmcgKi9cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBgY2FsYygke2Zvcm1hdE51bWJlcnMoIHRoaXMuZm9ybXVsYSwgdGhpcy5wYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpfSlgO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0aW9uIGZvcm11bGEgd2l0aCBwbGFjZWhvbGRlcnMuXHJcbiAgICBwcml2YXRlIGZvcm11bGE6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleVxyXG4gKiBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgYnkgY2FsbGluZyBhIGZ1bmN0aW9uIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJNYXRoPFQgZXh0ZW5kcyBzdHJpbmcgfCBudWxsID0gbnVsbD4gaW1wbGVtZW50cyBJTnVtYmVyTWF0aDxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggcHJvdGVjdGVkIGNvbnZlcnRGdW5jOiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG51bWJlclRvU3RyaW5nID0gKG46IG51bWJlcik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRGdW5jKCBuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpU3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMsIHNlcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSU51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRoRnVuY1Byb3h5KCBcIm1pblwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0aEZ1bmNQcm94eSggXCJtYXhcIiwgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogSU51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRoRnVuY1Byb3h5KCBcImNsYW1wXCIsIFttaW4sIHByZWYsIG1heF0sIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxjKCBmb3JtdWxhOiBzdHJpbmcsIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ2FsY0Z1bmNQcm94eSggZm9ybXVsYSwgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOdW1iZXJNYXRoQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBcInN0YXRpY1wiIHNpZGUgb2YgY2xhc3NlcyBkZXJpdmVkIGZyb20gdGhlXHJcbiAqIE51bWJlck1hdGggY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJNYXRoQ2xhc3M8VCBleHRlbmRzIHN0cmluZyB8IG51bGwgPSBudWxsPlxyXG57XHJcbiAgICBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBzdHJpbmc7XHJcblxyXG4gICAgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+KTogc3RyaW5nO1xyXG5cclxuICAgIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+KTogc3RyaW5nO1xyXG5cclxuICAgIG5ldygpOiBJTnVtYmVyTWF0aDxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVW5pdGxlc3MgbnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NOdW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bnVtYmVyPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTnVtYmVyTWF0aCBleHRlbmRzIE51bWJlck1hdGg8bnVsbD5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG4udG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jLCBcIiBcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aU51bWJlcj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIExlbmd0aFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzTGVuZ3RoTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGxlbmd0aD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0xlbmd0aE1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFwiTGVuZ3RoXCIgfCBcIlBlcmNlbnRcIj5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvQ3NzU3RyaW5nKCBuLCBcInB4XCIsIFwiZW1cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYywgXCIgXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBBbmdsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzQW5nbGVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8YW5nbGU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NBbmdsZU1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFwiQW5nbGVcIiB8IFwiUGVyY2VudFwiPlxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9Dc3NTdHJpbmcoIG4sIFwiZGVnXCIsIFwicmFkXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0FuZ2xlPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpQW5nbGU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUFuZ2xlPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsIFwiIFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpQW5nbGU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGltZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzVGltZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDx0aW1lPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzVGltZU1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFwiVGltZVwiIHwgXCJQZXJjZW50XCI+XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb0Nzc1N0cmluZyggbiwgXCJtc1wiLCBcInNcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzVGltZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYywgXCIgXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXNvbHV0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NSZXNvbHV0aW9uTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHJlc29sdXRpb24+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIE51bWJlck1hdGg8XCJSZXNvbHV0aW9uXCIgfCBcIlBlcmNlbnRcIj5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvQ3NzU3RyaW5nKCBuLCBcImRwaVwiLCBcInhcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmVzb2x1dGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUmVzb2x1dGlvbj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgXCIgXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGcmVxdWVuY3lcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0ZyZXF1ZW5jeU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxmcmVxdWVuY2U+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NGcmVxdWVuY3lNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxcIkZyZXF1ZW5jeVwiIHwgXCJQZXJjZW50XCI+XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb0Nzc1N0cmluZyggbiwgXCJIelwiLCBcImtIelwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NGcmVxdWVuY3k+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJlcXVlbmN5Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJlcXVlbmN5Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jLCBcIiBcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyZXF1ZW5jeT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZyYWN0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NGcmFjdGlvbk1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxmcmFjdGlvbj4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0ZyYWN0aW9uTWF0aCBleHRlbmRzIE51bWJlck1hdGg8XCJGcmFjdGlvblwiIHwgXCJQZXJjZW50XCI+IGltcGxlbWVudHMgSUNzc0ZyYWN0aW9uTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9Dc3NTdHJpbmcoIG4sIFwiZnJcIiwgXCJmclwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NGcmFjdGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyYWN0aW9uTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyYWN0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlGcmFjdGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jLCBcIiBcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyYWN0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmFjdGlvbk1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NGcmFjdGlvbj4sIG1heDogRXh0ZW5kZWQ8Q3NzRnJhY3Rpb24+KTogSU51bWJlclByb3h5PFwiRnJhY3Rpb25cIiB8IFwiUGVyY2VudFwiPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0aEZ1bmNQcm94eSggXCJtaW5tYXhcIiwgW21pbiwgbWF4XSwgQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzUGVyY2VudE1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxwZXJjZW50PiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzUGVyY2VudE1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFwiUGVyY2VudFwiPlxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiAoTnVtYmVyLmlzSW50ZWdlcihuKSA/IG4gOiBuID4gLTEuMCAmJiBuIDwgMS4wID8gTWF0aC5yb3VuZCggbiAqIDEwMCkgOiBNYXRoLnJvdW5kKG4pKSArIFwiJVwiOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVBlcmNlbnQ+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUGVyY2VudD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMsIFwiIFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NGcmFjdGlvbk1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIHBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVsbDogdiA9PiBudWxsLFxyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9zaXRpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxNdWx0aUNzc1Bvc2l0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFVSTHNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFVybFByb3h5IGNsYXNzIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgQ1NTIHVybCgpIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVybFByb3h5IGltcGxlbWVudHMgSVVybFByb3h5XHJcbntcclxuICAgIC8qKiBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGlzIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBJTnVtZXJQcm94eSBpbnRlcmZhY2UgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNVcmxQcm94eSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvciggdXJsOiBFeHRlbmRlZDxzdHJpbmc+KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDb252ZXJ0cyBpbnRlcm5hbGx5IGhlbGQgdmFsdWUocykgdG8gc3RyaW5nICovXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IHZhbHVlVG9TdHJpbmcoIHRoaXMudXJsKTtcclxuICAgICAgICByZXR1cm4gcyAmJiAhcy5zdGFydHNXaXRoKFwidXJsKFwiKSA/IGB1cmwoJHtzfSlgIDogcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBBcnJheSBvZiBDc3NOdW1iZXIgcGFyYW1ldGVycyB0byB0aGUgbWF0aGVtYXRpY2FsIGZ1bmN0aW9uLlxyXG4gICAgcHJpdmF0ZSB1cmw6IEV4dGVuZGVkPHN0cmluZz47XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBiYXNpYyB0eXBlcyBhbmQgZnVuY3Rpb25zIHVzZWQgdG8gZGVmaW5lIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuICovXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElWYWx1ZVByb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGNhbiBwcm9kdWNlIGEgc3RyaW5nLCB3aGljaCBpcyByZXR1cm5lZFxyXG4gKiB2aWEgdGhlIHZhbHVlVG9TdHJpbmcoKSBtZXRob2QuIFRoaXMgaW50ZXJmYWNlIGlzIHVzZWQgYXMgYSBiYXNlIGZvciBvdGhlciBpbnRlcmZhY2VzIHRoYXRcclxuICogcmVwcmVzZW50cyBkaWZmZXJlbnQgQ1NTIHR5cGVzLCBzdWNoIGFzIGA8bnVtYmVyPmAsIDxsZW5ndGg+YCwgYDx1cmw+YCwgYDxpbWFnZT5gLCBldGMuXHJcbiAqIFxyXG4gKiBBbGwgQ1NTIHByb3BlcnRpZXMgc2hvdWxkIGFjY2VwdCBzdHJpbmcgYXMgdGhlIHR5cGUgb2YgdGhlaXIgdmFsdWUgZXZlbiBpZiBub3JtYWxseVxyXG4gKiB0aGV5IGFjY2VwdCBvdGhlciB0eXBlcyAoZS5nIGEgc2V0IG9mIHN0cmluZyBsaXRlcmFscyBhcyBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IC4uLmAgZm9yIHRoZVxyXG4gKiBjb2xvcikgcHJvcGVydHkuIFRoaXMgaXMgYmVjYXVzZSBpbiBhZGRpdGlvbiB0byB0aGVpciBub3JtYWwgdmFsdWVzIGFueSBwcm9wZXJ0eVxyXG4gKiBjYW4gdXNlIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhlIGZvcm0gYHZhcigtLXByb3BuYW1lKWAuIEhvd2V2ZXIsIGlmIHdlIGFkZCBzdHJpbmcgdHlwZVxyXG4gKiB0byB0aGUgc2V0IG9mIHN0cmluZyBsaXRlcmFscyAoZS5nLiBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IHN0cmluZ2ApLCB0aGlzIHRocm93cyBvZmYgdGhlXHJcbiAqIEludGVsbGlzZW5zZSBhbmQgaXQgZG9lc24ndCBwcm9tcHQgZGV2ZWxvcGVycyBmb3IgdGhlIHBvc3NpYmxlIHZhbHVlcy4gVGhlIElWYWx1ZVByb3h5XHJcbiAqIGNhbiBiZSB1c2VkIGluc3RlYWQgb2Ygc3RyaW5nIGFuZCB0aGlzIHNvbHZlcyB0aGUgSW50ZWxsaXNlbnNlIGlzc3VlLlxyXG4gKiBcclxuICogQW5vdGhlciBiZW5lZml0IG9mIHVzaW5nIG9iamVjdHMgaW1wbGVtZW50aW5nIHRoZSBJVmFsdWVQcm94eSBpbnRlcmZhY2UgaXMgdGhhdCB0aGV5IGFyZVxyXG4gKiBjb25zdHJ1Y3RlZCBhdCBvbmUgcG9pbnQgYnV0IHRoZSBzdHJpbmcgZ2VuZXJhdGlvbiBvY2N1cnMgYXQgYW5vdGhlciB0aW1lLiBUaGlzIGFsbG93c1xyXG4gKiB1c2luZyB0aGVzZSBvYmplY3RzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuIFRoZXkgY2FuIHJlZmVyZW5jZSBvYmplY3RzIGxpa2VcclxuICogSVZhclJ1bGUgdGhhdCBhcmUgbm90IGZ1bGx5IGluaXRpYWxpemVkIHlldC4gSG93ZXZlciwgd2hlbiB0aGUgc3R5bGVzIHNob3VsZCBiZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSB0aGUgaW5pdGlhbGl6YXRpb24gd2lsbCBoYXZlIGFscmVhZHkgb2NjdXJyZWQgYW5kIHRoZSB2YWx1ZVRvU3RyaW5nIG1ldGhvZCB3aWxsXHJcbiAqIHJldHVybiBhIGNvcnJlY3Qgc3RyaW5nLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHRoZSBJVmFsdWVQcm94eSBpbnRlcmZhY2UgaXMgbmV2ZXIgdXNlZCBkaXJlY3RseSB3aGVuIHNwZWNpZnlpbmcgcHJvcGVydHkgdHlwZXM7XHJcbiAqIG9ubHkgaXRzIGRlcml2YXRpdmVzIGFyZSB1c2VkIGRpcmVjdGx5LiBUaGlzIGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuXHJcbiAqIGRpZmZlcmVudCBDU1MgdHlwZXMsIHNvIHRoYXQgYSBmdW5jdGlvbiB1c2VkIGZvciBvbmUgQ1NTIHR5cGUgY2Fubm90IGJlIHVzZWQgZm9yIGEgZGlmZmVyZW50XHJcbiAqIENTUyB0eXBlLiBGb3IgZXhhbXBsZSwgdGhlIGBjYWxjKClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIElOdW1iZXJQcm94eSBpbnRlcmZhY2UsIHdoaWxlIHRoZVxyXG4gKiBgbGluZWFySW5ncmFkaWVudCgpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBJSW1hZ2VQcm94eSBpbnRlcmZhY2UuIFRodXMgeW91IGNhbm5vdCB1c2UgdGhlXHJcbiAqICdjYWxjKClgIGZ1bmN0aW9uIGZvciBpbWFnZS1iYXNlZCBDU1MgcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlUHJveHlcclxue1xyXG4gICAgLyoqIENvbnZlcnRzIGludGVybmFsbHkgaGVsZCB2YWx1ZShzKSB0byBzdHJpbmcgKi9cclxuICAgIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0cmluZ1Byb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byBhbnkgQ1NTIHByb3BlcnR5LiBUaGlzXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIHBhcnQgb2YgdHlwZSBkZWZpbml0aW9uIGZvciBhbGwgQ1NTIHByb3BlcnRpZXMgLSBldmVuIGZvciB0aG9zZSB0aGF0IGRvbid0XHJcbiAqIGhhdmUgYHN0cmluZ2AgYXMgcGFydCBvZiB0aGVpciB0eXBlLiBcclxuICogXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIHJldHVybmVkIGZyb20gdGhlIGByYXcoKWAgZnVuY3Rpb24sIHdoaWNoIGFsbG93cyBieS1wYXNzaW5nIHRoZSBwcm9wZXJ0eVxyXG4gKiB0eXBpbmcgcnVsZXMgYW5kIHNwZWNpZnlpbmcgYSBzdHJpbmcgZGlyZWN0bHkuIFRoaXMgbWlnaHQgYmUgdXNlZnVsLCB3aGVuIGEgc3RyaW5nIHZhbHVlIGlzXHJcbiAqIG9idGFpbmVkIGZyb20gc29tZSBleHRlcm5hbCBjYWxjdWxhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHJpbmdQcm94eSBleHRlbmRzIElWYWx1ZVByb3h5XHJcbntcclxuICAgIC8qKiBGbGFnIGluZGljYXRpbmcgdGhhdCB0aGlzIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBJU3RyaW5nUHJveHkgaW50ZXJmYWNlICovXHJcbiAgICByZWFkb25seSBpc1N0cmluZ1Byb3h5OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTdHlsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgKGFsbW9zdCkgYW55IENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJhc2VfU3R5bGVUeXBlID0gXCJpbmhlcml0XCIgfCBcImluaXRpYWxcIiB8IFwidW5zZXRcIiB8IFwicmV2ZXJ0XCIgfCBJU3RyaW5nUHJveHkgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYXJQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgb2JqZWN0IHdpdGggdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gKiB3ZSBuZWVkIHRoaXMgaW50ZXJmYWNlIGJlY2F1c2UgZXZlcnkgc3R5bGUgcHJvcGVydHkgY2FuIGFjY2VwdCB2YWx1ZSBpbiB0aGUgZm9ybSBvZiB2YXIoKVxyXG4gKiBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYXJQcm94eTxUID0gYW55PiBleHRlbmRzIElWYWx1ZVByb3h5XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0cnVlIC0gdGhpcyBpcyBvbmx5IG5lZWRlZCB0byBpbmRpY2F0ZSB0aGF0IHRoaXMgb2JqZWN0IGltcGxlbWVudHMgdGhlIElWYXJQcm94eVxyXG4gICAgICogaW50ZXJmYWNlIGZvciB0aGUgZ2l2ZW4gdHlwZSBzbyB0aGF0IGN1c3RvbSBwcm9wZXJ0aWVzIG9mIGRpZmZlcmVudCB0eXBlcyBjYW5ub3QgYmVcclxuICAgICAqIG1pc3Rha2VubHkgYXNzaWduZWQgdG8gd3JvbmcgdHlwZXMuXHJcbiAgICAgKi9cclxuICAgIGlzVmFyUHJveHkoIG86IFQpOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZXh0ZW5kcyB0aGUgZ2l2ZW4gdHlwZSB3aXRoIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqIC0gYmFzaWMgc3R5bGUgdmFsdWVzIHRoYXQgYXJlIHZhbGlkIGZvciBhbGwgc3R5bGUgcHJvcGVydGllcy5cclxuICogLSBJU3RyaW5nUHJveHkgdHlwZSB0aGF0IGFsbG93cyBzcGVjaWZ5aW5nIHJhdyBzdHJpbmcgdmFsdWUuXHJcbiAqIC0gSVZhclByb3h5IG9iamVjdCB0aGF0IGFsbG93cyB1c2luZyBhIENTUyBjdXN0b20gcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZDxUPiA9IFQgfCBCYXNlX1N0eWxlVHlwZSB8IElWYXJQcm94eTxUPjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIHBhaXItbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gMiB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JQYWlyPFQ+ID0gVCB8IFtFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD5dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJveC1saWtlIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSB0byA0IHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPckJveDxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPj8sIEV4dGVuZGVkPFQ+P107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgb3IgbW9yZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JNYW55PFQ+ID0gVCB8IEV4dGVuZGVkPFQ+W107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgb3IgbW9yZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgTWFueTxUPiA9IEV4dGVuZGVkPFQ+W107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1lcmljIHR5cGVzIGFzIGEgYmFzZWlzIGZvciBoYW5kbGluZyBDU1MgPG51bWJlcj4uIDxsZW5ndGg+LCA8YW5nbGU+LCBldGMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHJpbmcgcHJveHkgb2JqZWN0IHdob3NlIHN0cmluZyB2YWx1ZSBjYW4gYmUgYXNzaWduZWRcclxuICogdG8gcHJvcGVydGllcyBvZiB0aGUgQ1NTIG51bWVyaWMgdHlwZXMuIFRoaXMgaW50ZXJmYWNlIGlzIHJldHVybmVkIGZyb20gZnVuY3Rpb25zIGxpa2UgbWluKCksXHJcbiAqIG1heCgpIGFuZCBjYWxjKCkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJQcm94eTxUIGV4dGVuZHMgc3RyaW5nID0gbnVsbD4gZXh0ZW5kcyBJVmFsdWVQcm94eVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdHJ1ZSAtIG5lZWRlZCBvbmx5IHRvIGluZGljYXRlIHRoYXQgdGhpcyBvYmplY3QgaW1wbGVtZW50cyB0aGUgSU51bWVyUHJveHkgaW50ZXJmYWNlXHJcbiAgICAgKiBmb3IgYSBnaXZlbiB0eXBlXHJcbiAgICAgKi9cclxuICAgIGlzTnVtYmVyUHJveHkoIG86IFQpOiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmcgPSBudWxsPiA9IG51bWJlciB8IHN0cmluZyB8IElOdW1iZXJQcm94eTxUPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IG51bWVyaWMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmcgPSBudWxsPiA9IE9uZU9yTWFueTxOdW1iZXJCYXNlPFQ+PjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtbWJlck1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciB0eXBlLCB0aGV5IGFyZSBjb252ZXJ0ZWRcclxuICogdG8gc3RyaW5ncyBieSBjYWxsaW5nIGEgZnVuY3Rpb24gc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlck1hdGg8VCBleHRlbmRzIHN0cmluZyA9IG51bGw+XHJcbntcclxuICAgIC8qKiBDb252ZXJ0cyBudW1iZXIgdG8gc3RyaW5nIGFwcGVuZGluZyBuZWNlc3NhcnkgdW5pdCBzdWZmaXhlcyAqL1xyXG4gICAgbnVtYmVyVG9TdHJpbmc6ICggbjogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIHNpbmdsZSBudW1lcmljIHN0eWxlIHZhbHVlIHRvIHN0cmluZyBhcHBlbmRpbmcgbmVjZXNzYXJ5IHVuaXQgc3VmZml4ZXMgKi9cclxuICAgIHN0eWxlVG9TdHJpbmc6ICggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8qKiBDb252ZXJ0cyBtdWx0aXBsZSBudW1lcmljIHN0eWxlIHZhbHVlIHRvIHN0cmluZyBhcHBlbmRpbmcgbmVjZXNzYXJ5IHVuaXQgc3VmZml4ZXMgKi9cclxuICAgIG11bHRpU3R5bGVUb1N0cmluZzogKCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgb2YgdXNpbmcgdGhlIENTUyBtaW4oKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSU51bWJlclByb3h5PFQ+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWF4KCkgZnVuY3Rpb24uICovXHJcbiAgICBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElOdW1iZXJQcm94eTxUPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIGNsYW1wKCkgZnVuY3Rpb24uICovXHJcbiAgICBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBJTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2FsYygpIGZ1bmN0aW9uLiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBmb3JtdWxhclxyXG4gICAgICogc3RyaW5nIGFuZCBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mIHBhcmFtZXRlcnMuIFRoZSBmb3JtdWxhciBzdHJpbmcgY2FuIGNvbnRhaW4gcGxhY2Vob2xkZXJzXHJcbiAgICAgKiB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIHBhcmFtZXRlcnMuIFBsYWNlaG9sZGVycyBoYXZlIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gICAgICogXHJcbiAgICAgKiBgYGBcclxuICAgICAqIHs8aW5kZXg+IFt8IDx1bml0Pl19XHJcbiAgICAgKiBgYGBcclxuICAgICAqIFRoZSBgPGluZGV4PmAgdG9rZW4gaXMgYSB6ZXJvLWJhc2VkIGluZGV4IGluIHRoZSBwYXJhbWV0ZXIgYXJyYXkuIFRoZSBvcHRpb25hbCBgPHVuaXQ+YCB0b2tlbiBpc1xyXG4gICAgICogYSBtZWFzdXJlbWVudCB1bml0IChsZW5ndGgsIHBlcmNlbnQsIGFuZ2xlLCBldGMuKSBhbmQgaXMgdXNlZCBpZiB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXJcclxuICAgICAqIGlzIGEgbnVtYmVyLlxyXG4gICAgICogXHJcbiAgICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICAgKiBjbGFzcyBNeVN0eWxlc1xyXG4gICAgICoge1xyXG4gICAgICogICAgIHdhbGxHYXAgPSAkdmFyKCBcIndpZHRoXCIsIDE2KTtcclxuICAgICAqICAgICBteUNsYXNzID0gJGNsYXNzKHsgbWF4V2lkdGg6IExlbi5jYWxjKFwiMTAwJSAtIDIqezB9XCIsIHRoaXMud2FsbEdhcCl9KVxyXG4gICAgICogfVxyXG4gICAgICogYGBgXHJcbiAgICAgKiBAcGFyYW0gZm9ybXVsYSBcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAgKi9cclxuICAgIGNhbGMoIGZvcm11bGE6IHN0cmluZywgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSU51bWJlclByb3h5PFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxudW1iZXI+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBDc3NOdW1iZXIgPSBOdW1iZXJCYXNlPG51bGw+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aU51bWJlciA9IE9uZU9yTWFueTxDc3NOdW1iZXI+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tZm91ci1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzTnVtYmVyQm94ID0gT25lT3JCb3g8Q3NzTnVtYmVyPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc051bWJlck1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPG51bWJlcj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc051bWJlck1hdGggZXh0ZW5kcyBJTnVtYmVyTWF0aDxudWxsPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8bGVuZ3RoPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgbGVuZ3RoICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFVuaXRzID0gXCJRXCIgfCBcImNoXCIgfCBcImNtXCIgfCBcImVtXCIgfCBcImV4XCIgfCBcImljXCIgfCBcImluXCIgfCBcImxoXCIgfCBcIm1tXCIgfCBcInBjXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJwdFwiIHwgXCJweFwiIHwgXCJ2YlwiIHwgXCJ2aFwiIHwgXCJ2aVwiIHwgXCJ2d1wiIHwgXCJyZW1cIiB8IFwicmxoXCIgfCBcInZtYXhcIiB8IFwidm1pblwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aCA9IE51bWJlckJhc2U8XCJMZW5ndGhcIiB8IFwiUGVyY2VudFwiPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlMZW5ndGggPSBPbmVPck1hbnk8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aEJveCA9IE9uZU9yQm94PENzc0xlbmd0aD47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NMZW5ndGhNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxsZW5ndGg+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NMZW5ndGhNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8XCJMZW5ndGhcIiB8IFwiUGVyY2VudFwiPiB7fVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGFuZ2xlPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgYW5nbGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0cyA9IFwiZGVnXCIgfCBcInJhZFwiIHwgXCJncmFkXCIgfCBcInR1cm5cIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc0FuZ2xlID0gTnVtYmVyQmFzZTxcIkFuZ2xlXCIgfCBcIlBlcmNlbnRcIj47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlBbmdsZSA9IE9uZU9yTWFueTxDc3NBbmdsZT47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by1mb3VyLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc0FuZ2xlQm94ID0gT25lT3JCb3g8Q3NzQW5nbGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzQW5nbGVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxhbmdsZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0FuZ2xlTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPFwiQW5nbGVcIiB8IFwiUGVyY2VudFwiPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8dGltZT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHRpbWUgKi9cclxuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0gXCJzXCIgfCBcIm1zXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc1RpbWUgPSBOdW1iZXJCYXNlPFwiVGltZVwiIHwgXCJQZXJjZW50XCI+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlUaW1lID0gT25lT3JNYW55PENzc1RpbWU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tZm91ci1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc1RpbWVCb3ggPSBPbmVPckJveDxDc3NUaW1lPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1RpbWVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDx0aW1lPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzVGltZU1hdGggZXh0ZW5kcyBJTnVtYmVyTWF0aDxcIlRpbWVcIiB8IFwiUGVyY2VudFwiPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8cmVzb2x1dGlvbj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHJlc29sdXRpb24gKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblVuaXRzID0gXCJkcGlcIiB8IFwiZHBjbVwiIHwgXCJkcHB4XCIgfCBcInhcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmVzb2x1dGlvbiA9IE51bWJlckJhc2U8XCJSZXNvbHV0aW9uXCIgfCBcIlBlcmNlbnRcIj47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVJlc29sdXRpb24gPSBPbmVPck1hbnk8Q3NzUmVzb2x1dGlvbj47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by1mb3VyLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmVzb2x1dGlvbkJveCA9IE9uZU9yQm94PENzc1Jlc29sdXRpb24+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzUmVzb2x1dGlvbk1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHJlc29sdXRpb24+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPFwiUmVzb2x1dGlvblwiIHwgXCJQZXJjZW50XCI+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxmcmVxdWVuY3k+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBmcmVxdWVuY3kgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VW5pdHMgPSBcIkh6XCIgfCBcImtIelwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc0ZyZXF1ZW5jeSA9IE51bWJlckJhc2U8XCJGcmVxdWVuY3lcIiB8IFwiUGVyY2VudFwiPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlGcmVxdWVuY3kgPSBPbmVPck1hbnk8Q3NzRnJlcXVlbmN5PjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc0ZyZXF1ZW5jeUJveCA9IE9uZU9yQm94PENzc0ZyZXF1ZW5jeT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NGcmVxdWVuY3lNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmVxdWVuY3k+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NGcmVxdWVuY3lNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8XCJGcmVxdWVuY3lcIiB8IFwiUGVyY2VudFwiPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnJhY3Rpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgZnJhY3Rpb25zIChmb3IgZmxleCBhbmQgZ3JpZCBsYXlvdXRzKSAqL1xyXG5leHBvcnQgdHlwZSBGcmFjdGlvblVuaXRzID0gXCJmclwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmFjdGlvbj5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzRnJhY3Rpb24gPSBOdW1iZXJCYXNlPFwiRnJhY3Rpb25cIiB8IFwiUGVyY2VudFwiPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyYWN0aW9uPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUZyYWN0aW9uID0gT25lT3JNYW55PENzc0ZyYWN0aW9uPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmFjdGlvbj5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzRnJhY3Rpb25Cb3ggPSBPbmVPckJveDxDc3NGcmFjdGlvbj47XHJcblxyXG4vKipcclxuICogVGhlIElGcmFjdGlvbk1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyYWN0aW9uPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzRnJhY3Rpb25NYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8XCJGcmFjdGlvblwiIHwgXCJQZXJjZW50XCI+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWlubWF4KCkgZnVuY3Rpb24uICovXHJcbiAgICBtaW5tYXgoIG1pbjogRXh0ZW5kZWQ8Q3NzRnJhY3Rpb24+LCBtYXg6IEV4dGVuZGVkPENzc0ZyYWN0aW9uPik6IElOdW1iZXJQcm94eTxcIkZyYWN0aW9uXCIgfCBcIlBlcmNlbnRcIj47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgcGVyY2VudCAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VW5pdHMgPSBcIiVcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzUGVyY2VudCA9IE51bWJlckJhc2U8XCJQZXJjZW50XCI+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlQZXJjZW50ID0gT25lT3JNYW55PENzc1BlcmNlbnQ+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tZm91ci1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc1BlcmNlbnRCb3ggPSBPbmVPckJveDxDc3NQZXJjZW50PjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZyYWN0aW9uTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1BlcmNlbnRNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8XCJQZXJjZW50XCI+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQb3NpdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGhvcml6b250YWwgcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCA9IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGhvcml6b250YWwgcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgVmVydGljYWxQb3NpdGlvbktleXdvcmQgPSBcInRvcFwiIHwgXCJjZW50ZXJcIiB8IFwiYm90dG9tXCI7XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIGEgc2ltcGxlIDEgb3IgdHdvIHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgU2ltcGxlQ3NzUG9zaXRpb24gPSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NOdW1iZXI+IHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NOdW1iZXI+XTtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGZ1bGwgdXAgdG8gNCB2YWx1ZXMgYDxwb3NpdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Bvc2l0aW9uID0gU2ltcGxlQ3NzUG9zaXRpb24gfCBcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NOdW1iZXI+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZF0gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NOdW1iZXI+XSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc051bWJlcj5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyBtdWx0aXBsZSBgPHBvc2l0aW9uPmAgQ1NTIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIE11bHRpQ3NzUG9zaXRpb24gPSBFeHRlbmRlZDxDc3NQb3NpdGlvbj5bXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFVSTHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJVXJsUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgQ1NTIHVybCgpIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVXJsUHJveHkgZXh0ZW5kcyBJVmFsdWVQcm94eVxyXG57XHJcbiAgICAvKiogRmxhZyBpbmRpY2F0aW5nIHRoYXQgdGhpcyBvYmplY3QgaW1wbGVtZW50cyB0aGUgSVVybFByb3h5IGludGVyZmFjZSAqL1xyXG4gICAgcmVhZG9ubHkgaXNVcmxQcm94eTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gV2ViIE5hbWVzcGFjZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBXZWJOYW1lc3BhY2VzIGNsYXNzIGNvbnRhaW5zIGlkZW50aWZpZXJzIGZvciB0aGUga25vd24gV2ViLXJlbGF0ZWQgbmFtZXNwYWNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWJOYW1lc3BhY2VzXHJcbntcclxuXHRzdGF0aWMgcmVhZG9ubHkgSFRNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBTVkcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhMaW5rID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFhNTE5TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBNYXRoTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9