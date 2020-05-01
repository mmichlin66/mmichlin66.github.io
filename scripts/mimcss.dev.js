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
function rgb(r, g, b, a) {
    return () => ColorFuncs.rgbToString(r, g, b, a);
}
exports.rgb = rgb;
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
function hsl(h, s, l, a) {
    return () => ColorFuncs.hslToString(h, s, l, a);
}
exports.hsl = hsl;
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
function alpha(c, a) {
    return () => ColorFuncs.alphaToString(c, a);
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
const ImageFuncs = __webpack_require__(/*! ../styles/ImageFuncs */ "./lib/styles/ImageFuncs.js");
/**
 * Returns an ImageProxy function representing the `linear-gradient()` CSS function.
 */
function linearGradient(angle, ...stopsOrHints) {
    return () => ImageFuncs.linearGradientToString("linear-gradient", angle, stopsOrHints);
}
exports.linearGradient = linearGradient;
/**
 * Returns an ImageProxy function representing the `repeating-linear-gradient()` CSS function.
 */
function repeatingLinearGradient(angle, ...stopsOrHints) {
    return () => ImageFuncs.linearGradientToString("repeating-linear-gradient", angle, stopsOrHints);
}
exports.repeatingLinearGradient = repeatingLinearGradient;
/**
 * Returns an ImageProxy function representing the `radial-gradient()` CSS function.
 */
function radialGradient(shape, extent, pos, ...stopsOrHints) {
    return () => ImageFuncs.radialGradientToString("radial-gradient", shape, extent, pos, stopsOrHints);
}
exports.radialGradient = radialGradient;
/**
 * Returns an ImageProxy function representing the `repeating-radial-gradient()` CSS function.
 */
function repeatingRadialGradient(shape, extent, pos, ...stopsOrHints) {
    return () => ImageFuncs.radialGradientToString("repeating-radial-gradient", shape, extent, pos, stopsOrHints);
}
exports.repeatingRadialGradient = repeatingRadialGradient;
/**
 * Returns an ImageProxy function representing the`conic-gradient()`  CSS function.
 */
function conicGradient(angle, pos, ...stopsOrHints) {
    return () => ImageFuncs.conicGradientToString(angle, pos, stopsOrHints);
}
exports.conicGradient = conicGradient;
/**
 * Returns an ImageProxy function representing the `cross-fade()` CSS function.
 */
function crossFade(...args) {
    return () => ImageFuncs.crossFadeToString(args);
}
exports.crossFade = crossFade;


/***/ }),

/***/ "./lib/api/RuleAPI.js":
/*!****************************!*\
  !*** ./lib/api/RuleAPI.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module defines types of object that represent CSS rules.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const RuleContainerFuncs = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");
const StyleRules_1 = __webpack_require__(/*! ../rules/StyleRules */ "./lib/rules/StyleRules.js");
const AnimationRule_1 = __webpack_require__(/*! ../rules/AnimationRule */ "./lib/rules/AnimationRule.js");
const VarRule_1 = __webpack_require__(/*! ../rules/VarRule */ "./lib/rules/VarRule.js");
const MiscRules_1 = __webpack_require__(/*! ../rules/MiscRules */ "./lib/rules/MiscRules.js");
const GroupRules_1 = __webpack_require__(/*! ../rules/GroupRules */ "./lib/rules/GroupRules.js");
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/**
 * Creates new abstract rule, which defines a styleset that can be extended by other style
 * rules. Abstract rules don't have selectors and are not inserted into DOM.
 */
function $abstract(style) { return new StyleRules_1.AbstractRule(style); }
exports.$abstract = $abstract;
/**
 * Creates new tag rule. The tag parameter can be any of the HTML or SVG tags.
 */
function $tag(tag, style) { return new StyleRules_1.TagRule(tag, style); }
exports.$tag = $tag;
/**
 * Creates new class rule. The class name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another class rule. The function can be called without parameters just to "declare"
 * the class. Such class can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
function $class(style, nameOverride) { return new StyleRules_1.ClassRule(style, nameOverride); }
exports.$class = $class;
/**
 * Creates new ID rule. The ID name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another ID rule. The function can be called without parameters just to "declare"
 * the ID. Such ID can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
function $id(style, nameOverride) { return new StyleRules_1.IDRule(style, nameOverride); }
exports.$id = $id;
/**
 * Creates new selector rule. Selector can be specified as a string or via the $selector function.
 */
function $style(selector, style) { return new StyleRules_1.SelectorRule(selector, style); }
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
function $import(url, mediaQuery, supportsQuery) { return new MiscRules_1.ImportRule(url, mediaQuery, supportsQuery); }
exports.$import = $import;
/**
 * Creates new font-face rule.
 */
function $fontface(fontface) { return new MiscRules_1.FontFaceRule(fontface); }
exports.$fontface = $fontface;
/**
 * Creates new namespace rule.
 */
function $namespace(namespace, prefix) { return new MiscRules_1.NamespaceRule(namespace, prefix); }
exports.$namespace = $namespace;
/**
 * Creates new page rule.
 */
function $page(pseudoClass, style) { return new MiscRules_1.PageRule(pseudoClass, style); }
exports.$page = $page;
/**
 * Creates new supports rule.
 */
function $supports(query, instanceOrClass) { return new GroupRules_1.SupportsRule(query, instanceOrClass); }
exports.$supports = $supports;
/**
 * Creates new media rule.
 */
function $media(query, instanceOrClass) { return new GroupRules_1.MediaRule(query, instanceOrClass); }
exports.$media = $media;
/**
 * Processes the given stylesheet definition and returns the Stylesheet object that contains
 * names of IDs, classes and keyframes and allows style manipulations. For a given stylesheet
 * definition class there is a single stylesheet object, no matter how many times this function
 * is invoked.
 */
function $use(instanceOrClass) {
    return RuleContainerFuncs.processInstanceOrClass(instanceOrClass);
}
exports.$use = $use;
/**
 * Activates the given stylesheet and inserts all its rules into DOM. If the input object is not
 * a stylesheet but a style definition class, obtain stylesheet by calling the $use function.
 * Note that each stylesheet object maintains a reference counter of how many times it was
 * activated and deactivated. The rules are inserted to DOM only when this reference counter goes
 * up to 1.
 */
function $activate(instanceOrClass) {
    return RuleContainerFuncs.activate(instanceOrClass);
}
exports.$activate = $activate;
/**
 * Deactivates the given stylesheet by removing its rules from DOM. Note that each stylesheet
 * object maintains a reference counter of how many times it was activated and deactivated. The
 * rules are removed from DOM only when this reference counter goes down to 0.
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
function $enableOptimizedStyleNames(enable, prefix) {
    return RuleContainerFuncs.enableOptimizedStyleNames(enable, prefix);
}
exports.$enableOptimizedStyleNames = $enableOptimizedStyleNames;
/**
 * Concatenates the names of the given classes into a single string that can be assigned to a
 * `cass` property of an HTML element.
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
const SelectorFuncs_1 = __webpack_require__(/*! ../styles/SelectorFuncs */ "./lib/styles/SelectorFuncs.js");
const UtilFuncs_1 = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/**
 * Returns a string representation of a selector using the given template string with optional
 * placeholders (e.g. {0}), which will be replaced by names of tags, classes and IDs and other
 * possible types.
 */
function $selector(template, ...args) {
    return () => SelectorFuncs_1.formatSelector(template, args);
}
exports.$selector = $selector;
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
    if (styleset == undefined)
        elm.removeAttribute("style");
    else {
        let elmStyle = elm.style;
        Object.keys(styleset).forEach(key => elmStyle[key] = StyleFuncs_1.stylePropToString(key, styleset[key], true));
    }
}
exports.setElementStyle = setElementStyle;
/**
 * Compares two Styleset objects by converting style properties to strings and returns an object
 * that contains string values of properties that were new or have different values in the new
 * styleset and undefined values for properties that exist in the old styleset but don't exist
 * in the new one.
 * @param oldStyleset
 * @param newStyleset
 */
function diffStylesets(oldStyleset, newStyleset) {
    const updateVal = {};
    let changesExist = false;
    // loop over keys in the old style object and find those that are not in the new one. These
    // will be removed.
    for (let key in oldStyleset) {
        let newVal = newStyleset[key];
        if (newVal == null) {
            changesExist = true;
            updateVal[key] = undefined;
        }
        else {
            let oldStringVal = StyleFuncs_1.stylePropToString(key, oldStyleset[key], true);
            let newStringVal = StyleFuncs_1.stylePropToString(key, newVal, true);
            if (oldStringVal !== newStringVal) {
                changesExist = true;
                updateVal[key] = newStringVal;
            }
        }
    }
    // loop over keys in the new style object and find those that are not in the old one. These
    // will be added.
    for (let key in newStyleset) {
        let oldVal = oldStyleset[key];
        if (oldVal == null) {
            changesExist = true;
            updateVal[key] = StyleFuncs_1.stylePropToString(key, newStyleset[key], true);
        }
    }
    return changesExist ? updateVal : null;
}
exports.diffStylesets = diffStylesets;
/**
 * Converts the given [[Styleset]] object into an object, where each Styleset's property is
 * converted to its string value.
 * @param styleset
 */
function stylesetToStringObject(styleset) {
    let res = {};
    Object.keys(styleset).forEach(key => res[key] = StyleFuncs_1.stylePropToString(key, styleset[key], true));
    return res;
}
exports.stylesetToStringObject = stylesetToStringObject;
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
function animation(name, duration = 1000, func = "ease", delay = 0, count = 1, direction = "normal", mode = "none", state = "running") {
    return { name, duration, func, delay, count, direction, state, mode };
}
exports.animation = animation;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Background
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an object that can be assigned to the animation property.
 * @param color Color value.
 * @param position
 * @param size
 * @param repeat Background repeat value. The default value is "repeat".
 * @param attachment Background attachment. The default value is "scroll".
 * @param origin Background origin. The default value is "padding-box".
 * @param clip Background clip. The default value is "border-box".
 */
function background(color, image, position, size, repeat = "repeat", attachment = "scroll", origin = "padding-box", clip = "border-box") {
    return { color, image, position, size, repeat, attachment, origin, clip };
}
exports.background = background;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Transitions
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an object that can be assigned to the transition property.
 * @param property Name of the property to transition. The default value is "all".
 * @param duration Transition duration. Integer numbers for milliseconds, floating point
 * numbers for seconds. The default value is 1 second.
 * @param func Timing function. Default value is "ease". This can be one of the following types:
 *   - one of pre-defined timing function names.
 *   - a number of steps in the steps function. The step position will be set to jump-start.
 *   - one- or two-item array that defines a step function. The first item defines the number
 *     of steps. The optional second item is one of pre-defined step postion names.
 *   - four-item array that defines cubic-bezier function.
 * @param delay Delay before the transition starts. Integer numbers for milliseconds, floating
 * point numbers for seconds. The default value is 0.
 */
function transition(property = "all", duration = 1000, func = "ease", delay = 0) {
    return { property, duration, func, delay };
}
exports.transition = transition;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Shadows
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an object that can be assigned to the box-shadow property.
 * @param x Horizontal offset of the shadow.
 * @param y Vertical offset of the shadow.
 * @param color Color of the shadow.
 * @param blur Value of the shadow's blurring. The default value is 1 pixel.
 * @param spread Value of the shadow's spreading. The default value is 0.
 * @param inset Flag indicating whether the shadow goes inside the shape. The default value is false.
 */
function boxShadow(x, y, color, blur = 1, spread = 0, inset = false) {
    return { x, y, color, blur, spread, inset };
}
exports.boxShadow = boxShadow;
/**
 * Returns an object that can be assigned to the text-shadow property.
 * @param x Horizontal offset of the shadow.
 * @param y Vertical offset of the shadow.
 * @param color Color of the shadow.
 * @param blur Value of the shadow's blurring. The default value is 1 pixel.
 */
function textShadow(x, y, color, blur = 1) {
    return { x, y, color, blur };
}
exports.textShadow = textShadow;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Font
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an object that can be assigned to the `font` property.
 * @param family Font family.
 * @param size Font size.
 * @param style Font style.
 * @param variant Font variant.
 * @param weight Font weight.
 * @param stretch Font stretch.
 * @param lineHeight Line height.
 */
function font(family, size, style, weight, lineHeight, variant, stretch) {
    return { size, family, style, variant, weight, stretch, lineHeight };
}
exports.font = font;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Text decoration
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an object that can be assigned to the `text-decoration` property.
 * @param line Type of line.
 * @param color Line color.
 * @param style Line style.
 * @param thickness Line size.
 */
function textDecoration(line, color, style, thickness) {
    return { line, style, color, thickness };
}
exports.textDecoration = textDecoration;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Filters
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an FilterProxy function representing the `brightness()` CSS function.
 */
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
function dropShadow(x, y, color, blur = 1, spread = 0) {
    return () => StyleFuncs_1.singleBoxShadow_fromObject({ x, y, color, blur, spread });
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
    return () => `inset(${UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace(offset)}${r})`;
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
            s += `${UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace(pointOrRule)},`;
        s += points.map(pt => UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace(pt)).join(",");
        return s + ")";
    };
}
exports.polygon = polygon;
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
 * The Fraction object contains static methods that implement CSS mathematic functions on the
 * `<fraction>` CSS type by appending a fraction unit suffix.
 * Integer numbers use "fr"; floating point numbers use "%".
 */
exports.Fraction = new UtilFuncs_1.CssFractionMath();
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
 * to convert it to a proper type.
 */
function raw(val, ...params) {
    function replacer(token, ...args) {
        let index = parseInt(args[0]);
        return index < params.length ? UtilFuncs_1.valueToString(params[index]) : "";
    }
    return () => {
        try {
            return val.replace(/{\s*(\d*)\s*}/g, replacer);
        }
        catch (err) {
/////////////////////////
            console.error("Invalid placeholder in raw string:", val);
//////////////////////
            return val;
        }
    };
}
exports.raw = raw;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// url()
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a UrlProxy function representing the CSS `url()` function. The string parameter
 * will be wrapped in a "url()" invocation.
 */
function url(val) {
    return () => `url(${UtilFuncs_1.valueToString(val)})`;
}
exports.url = url;
///////////////////////////////////////////////////////////////////////////////////////////////
//
// attr()
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an AttrProxy function representing the `attr()` CSS function.
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
/**
 * The AnimationRule class describes a @keyframes CSS rule.
 */
class AnimationRule extends Rule_1.Rule {
    constructor(frames, nameOverride) {
        super();
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
}
exports.AnimationRule = AnimationRule;
/**
 * The AnimationFrameRule class represents a single keyframe clause in the animation rule.
 */
class AnimationFrameRule extends StyleRules_1.StyleRule {
    constructor(frame) {
        super(frame ? frame[1] : undefined);
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
    clone() {
        let newRule = new PageRule(this.pseudoClass);
        newRule.copyFrom(this);
        return newRule;
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
    return [name, cssPrefix ? name.startsWith(cssPrefix) ? name : cssPrefix + name : name];
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
    constructor(instance, name) {
        this.instance = instance;
        this.name = name;
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
        // if the owner taken from the instance is null (that is this is a top-level definition),
        // change our owner property to point to the instance itself
        if (!this.owner) {
            this.owner = this.instance;
            this.topLevelContainer = this;
        }
        else
            this.topLevelContainer = this.owner[symRuleContainer];
        // if our container is not the top-level container, prefix our name with the upper one
        if (!this.isTopLevel)
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
        else if (propVal instanceof Rule_1.Rule)
            this.processRule(propName, propVal);
        else if (Array.isArray(propVal))
            this.processArray(propVal);
    }
    // Processes reference to another style definition created by the $use function.
    processReference(ref) {
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
        if (this.cssCustomVarStyleRule)
            this.cssCustomVarStyleRule.style.setProperty(name, value, important ? "!important" : null);
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
        // activate referenced style definitions
        for (let ref of this.refs)
            ref[symRuleContainer].activate();
        // insert @import and @namespace rules as they must be before other rules. If the parent is a grouping
        // rule, don't insert @import and @namespace rules at all
        if (parent instanceof CSSStyleSheet) {
            this.imports && this.imports.forEach(rule => rule.insert(parent));
            this.namespaces && this.namespaces.forEach(rule => rule.insert(parent));
        }
        // isert our custom variables in a ":root" rule
        if (this.vars.length > 0) {
            this.cssCustomVarStyleRule = Rule_1.Rule.addRuleToDOM(`:root {${this.vars.map(varObj => varObj.toCssString()).join(";")}}`, parent);
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
            // only the top-level style defiition creates the `<style>` element
            if (this.isTopLevel) {
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
 * Processes the given stylesheet definition class or instance and assigns names to its rules.
 * If the parameter is a style definition class we check whether there is an instance already
 * created for it as a class will have only a single associated instane no matter how many times
 * this function is called.
 *
 * If the parameter is an object (an instance of the StyleDefinition class) then we check whether
 * it has already been processed. If yes we just return it back; if no, we assign new unique names
 * to its rules.
 */
function processInstanceOrClass(instanceOrClass, owner) {
    if (!instanceOrClass)
        return null;
    if (instanceOrClass instanceof RuleTypes_1.StyleDefinition) {
        // check whether this definition instance has already been processed
        let ruleContainer = instanceOrClass[symRuleContainer];
        if (!ruleContainer) {
            // get the name for our container
            let name = generateUniqueName();
            if (!useUniqueStyleNames) {
                let definitionClass = instanceOrClass.constructor;
                if (definitionClass.name)
                    name += "_" + definitionClass.name;
            }
            new RuleContainer(instanceOrClass, name);
        }
        return instanceOrClass;
    }
    else {
        return instanceOrClass.hasOwnProperty(symInstance)
            ? instanceOrClass[symInstance]
            : processClass(instanceOrClass, owner);
    }
}
exports.processInstanceOrClass = processInstanceOrClass;
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
function enableOptimizedStyleNames(enable, prefix) {
    useUniqueStyleNames = enable;
    uniqueStyleNamesPrefix = prefix ? prefix : "n";
}
exports.enableOptimizedStyleNames = enableOptimizedStyleNames;


/***/ }),

/***/ "./lib/rules/RuleTypes.js":
/*!********************************!*\
  !*** ./lib/rules/RuleTypes.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module defines types and interfaces that represent CSS rules.
 */
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
     * Style definition classes are never created directly - they are instantiated only when
     * either the [[$use]] or [[$activate]] function is called.
     * @param owner Reference to the top-level style definition class
     */
    constructor(owner) {
        this[exports.symOwner] = owner;
    }
    /**
     * Refers to the singleton instance of the style definition class which is the **owner** of
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
 * implements the parsing of the ExtendedStyleset object.
 */
class StyleRule extends Rule_1.Rule {
    // The styleset can be an ExtendedStyleset for many rules; however, for some it is just
    // of the Styleset type.
    constructor(styleset) {
        super();
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
        let parentRules = null;
        let nestedRules = null;
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
                // if the value is an array, then this is a parameterised pseudo entity where the first element
                // is the parameter value (string) and the second the ExtendedStyleset. Otherwise, the value is
                // just the ExtendedStyleset.
                let nestedRule;
                if (Array.isArray(propVal))
                    nestedRule = new NestedRule(propName, propVal[0], propVal[1], this);
                else
                    nestedRule = new NestedRule("&" + propName, undefined, propVal, this);
                nestedRules.push(nestedRule);
            }
            else if (propName === "&") {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    if (!nestedRules)
                        nestedRules = [];
                    tuples.forEach(tuple => nestedRules.push(new NestedRule(tuple[0], undefined, tuple[1], this)));
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
            ? `${this.getSelectorString()} ${StyleFuncs_1.stylesetToString(this.styleset)}`
            : "";
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
        if (!this.cssRule)
            return;
        this.cssRule.style.setProperty(name, StyleFuncs_1.stylePropToString(name, value, true), important ? "!important" : null);
    }
    /**
     * Adds/replaces the value of the given custmom cSS property in this rule.
     * @param varObj IVarRule object defining a custom CSS property.
     * @param varValue New value of the custom CSS property.
     * @param important Flag indicating whether to set the "!important" flag on the property value.
     */
    setCustomProp(varObj, varValue, important) {
        if (!varObj || !this.cssRule || !(varObj instanceof VarRule_1.VarRule))
            return;
        this.cssRule.style.setProperty(varObj.cssName, StyleFuncs_1.stylePropToString(varObj.template, varValue, true), important ? "!important" : null);
    }
}
exports.StyleRule = StyleRule;
/**
 * The NestedRule class describes a styleset that is nested within another style rule.
 */
class NestedRule extends StyleRule {
    // for regular selectors, pseudo classes and pseudo elements, the selector already contains
    // the ampersand. For parameterized pseudo classes and asudo elements, the selector is just
    // the entity name.
    constructor(selector, selectorParam, style, containingRule) {
        super(style);
        this.selector = selector;
        this.selectorParam = selectorParam;
        this.containingRule = containingRule;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new NestedRule(this.selector);
        newRule.copyFrom(this);
        newRule.selector = this.selector;
        newRule.selectorParam = this.selectorParam;
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        let parentSelector = this.containingRule.getSelectorString();
        if (this.selectorParam) {
            let selector = this.selector;
            return `${parentSelector}${selector}(${SelectorFuncs_1.pseudoEntityToString(selector, this.selectorParam)})`;
        }
        else {
            // replace all occurrences of the ampersand symbol in the selector string with the
            // selector string of the parent rule.
            return UtilFuncs_1.valueToString(this.selector).replace(/&/g, parentSelector);
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
        return "";
    }
    /** Only needed to distinguish from other rules */
    get isAbstractRule() { return true; }
}
exports.AbstractRule = AbstractRule;
/**
 * The ClassRule class describes a styleset that applies to elements identified by a CSS class.
 */
class ClassRule extends StyleRule {
    constructor(style, nameOverride) {
        super(style);
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
/**
 * The IDRule class describes a styleset that applies to elements identified by an ID.
 */
class IDRule extends StyleRule {
    constructor(style, nameOverride) {
        super(style);
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
/**
 * The SelectorRule type describes a styleset that applies to elements identified by a CSS selector.
 */
class SelectorRule extends StyleRule {
    constructor(selector, style) {
        super(style);
        this.selector = selector;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        this.selectorText = UtilFuncs_1.valueToString(this.selector);
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new SelectorRule(this.selector);
        newRule.copyFrom(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    getSelectorString() {
        return this.selectorText;
    }
}
exports.SelectorRule = SelectorRule;
/**
 * The TagRule class describes a styleset that applies to elements identified by a tag name.
 */
class TagRule extends StyleRule {
    constructor(tag, style) {
        super(style);
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
 * type IStileset[K], whcih is Extended<ICssStyleset[K]>. This allows specifying values that are
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
        return `${this.cssName}: ${StyleFuncs_1.stylePropToString(this.template, this.value, true)}`;
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
        this.container.setCustomVarValue(this.cssName, StyleFuncs_1.stylePropToString(this.template, value, true), important);
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
function colorSeparationToString(c) {
    return c == null ? "0" : typeof c === "string" ? c : Number.isInteger(c) ? c.toString() : UtilFuncs_1.CssPercentMath.convertFunc(c);
}
function rgbToString(r, g, b, a) {
    r = colorSeparationToString(r);
    g = colorSeparationToString(g);
    b = colorSeparationToString(b);
    a = a == null ? undefined : UtilFuncs_1.CssPercentMath.styleToString(a);
    return !a ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;
}
exports.rgbToString = rgbToString;
function hslToString(h, s, l, a) {
    h = UtilFuncs_1.CssAngleMath.styleToString(h);
    s = s == null ? "100%" : UtilFuncs_1.CssPercentMath.styleToString(s);
    l = l == null ? "100%" : UtilFuncs_1.CssPercentMath.styleToString(l);
    a = a == null ? undefined : UtilFuncs_1.CssPercentMath.styleToString(a);
    return !a ? `hsl(${h},${s},${l})` : `hsla(${h},${s},${l},${a})`;
}
exports.hslToString = hslToString;
function alphaToString(c, a) {
    let rgbVal = typeof c === "string" ? this[c] : c;
    return rgbToString((rgbVal & 0xFF0000) >> 16, (rgbVal & 0x00FF00) >> 8, rgbVal & 0x0000FF, a);
}
exports.alphaToString = alphaToString;
/**
 * Map of predefined color names by their numeric values
 */
let reversedColorMap = new Map();
// build Reversed Color Map
Object.entries(ColorTypes_1.Colors).forEach(([name, value]) => reversedColorMap.set(value, name));
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
    return UtilFuncs.objectToString(val, [
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

/***/ "./lib/styles/ImageFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/ImageFuncs.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorFuncs_1 = __webpack_require__(/*! ./ColorFuncs */ "./lib/styles/ColorFuncs.js");
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
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
function linearGradientToString(name, angle, stopsOrHints) {
    let angleString = angle ? UtilFuncs_1.CssAngleMath.styleToString(angle) + "," : "";
    let buf = stopsOrHints.map(stopOrHint => gradientStopOrHintToString(stopOrHint, UtilFuncs_1.CssPercentMath));
    return `${name}(${angleString}${buf.join(",")})`;
}
exports.linearGradientToString = linearGradientToString;
function radialGradientToString(name, shape, extent, pos, stopsOrHints) {
    let shapeString = shape ? shape : "";
    let extentString = extent ? extent : "";
    let posString = pos ? `at ${UtilFuncs_1.positionToString(pos)}` : "";
    let whatAndWhere = shape || extentString || pos ? `${shapeString} ${extentString} ${posString},` : "";
    let buf = stopsOrHints.map(stopOrHint => gradientStopOrHintToString(stopOrHint, UtilFuncs_1.CssPercentMath));
    return `${name}(${whatAndWhere}${buf.join(",")})`;
}
exports.radialGradientToString = radialGradientToString;
function conicGradientToString(angle, pos, stopsOrHints) {
    let angleString = angle ? `from ${UtilFuncs_1.CssAngleMath.styleToString(angle)}` : "";
    let posString = pos ? `at ${UtilFuncs_1.positionToString(pos)}` : "";
    let whatAndWhere = angle || pos ? `${angleString} ${posString},` : "";
    let buf = stopsOrHints.map(stopOrHint => gradientStopOrHintToString(stopOrHint, UtilFuncs_1.CssAngleMath));
    return `conic-gradient(${whatAndWhere}${buf.join(",")})`;
}
exports.conicGradientToString = conicGradientToString;
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
exports.crossFadeToString = crossFadeToString;


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
const StyleRules_1 = __webpack_require__(/*! ../rules/StyleRules */ "./lib/rules/StyleRules.js");
const Rule_1 = __webpack_require__(/*! ../rules/Rule */ "./lib/rules/Rule.js");
const UtilFuncs_1 = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS selector.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns a string representation of a selector using the given template string with optional
 * placeholders (e.g. {0}), which will be replaced by names of tags, classes and IDs and other
 * possible types.
 */
function formatSelector(template, params) {
    let tokens = template.split(/{(\d+)}/g);
    let tokenIsNumber = false;
    let arr = [];
    for (let token of tokens) {
        if (tokenIsNumber) {
            let index = parseInt(token, 10);
            if (index >= params.length)
                continue;
            let item = params[index];
            if (item == null)
                continue;
            else if (typeof item === "string")
                arr.push(item);
            else if (item instanceof Rule_1.Rule) {
                if (item instanceof StyleRules_1.TagRule)
                    arr.push(item.tag);
                else if (item instanceof StyleRules_1.ClassRule)
                    arr.push(item.cssName);
                else if (item instanceof StyleRules_1.IDRule)
                    arr.push(item.cssName);
                else if (item instanceof StyleRules_1.SelectorRule)
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
exports.formatSelector = formatSelector;
/**
 * Returns a string representation of a parameterized pseudo entity.
 */
function pseudoEntityToString(entityName, val) {
    if (!entityName)
        return "";
    if (entityName.startsWith(":nth"))
        return UtilFuncs_1.valueToString(val, { fromArray: v => `${v[0]}n+${v[1]}` });
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
// helper functions for style property conversions
function multiPositionToStringWithComma(val) { return UtilFuncs_1.multiPositionToString(val, ","); }
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions for converting CSS property types to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function singleAnimation_fromObject(val) {
    return UtilFuncs_1.objectToString(val, [
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
    return UtilFuncs_1.objectToString(val, [
        ["color", ColorFuncs_1.colorToString],
        "image",
        ["position", UtilFuncs_1.positionToString],
        ["size", UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace, "/"],
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
        fromArray: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace
    });
}
function singleBoxShadow_fromObject(val) {
    return UtilFuncs_1.objectToString(val, [
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
    return UtilFuncs_1.objectToString(val, [
        ["style", fontStyleToString],
        "variant",
        "weight",
        "stretch",
        ["size", UtilFuncs_1.CssLengthMath.styleToString],
        ["lineHeight", v => v.toString(), "/"],
        "family"
    ]);
}
function fontStyleToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNumber: v => "oblique " + UtilFuncs_1.CssAngleMath.styleToString(v)
    });
}
function textDecoration_fromObject(val) {
    return UtilFuncs_1.objectToString(val, [
        "line",
        "style",
        ["color", ColorFuncs_1.colorToString],
        ["thickness", UtilFuncs_1.CssLengthMath.styleToString],
    ]);
}
function singleTransition_fromObject(val) {
    return UtilFuncs_1.objectToString(val, [
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
function stylesetToString(styleset) {
    if (!styleset)
        return "";
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
                buf.push(customPropToString(customVal, false));
            }
        }
        else {
            // get the string representation of the property
            buf.push(stylePropToString(propName, styleset[propName]) +
                (impProps && impProps.has(propName) ? " !important" : ""));
        }
    }
    // join all elements in the array except nulls, undefined and empty strings
    return `{${buf.filter((item) => !!item).join(";")}}`;
}
exports.stylesetToString = stylesetToString;
/**
 * Converts the given custom CSS property definition to string.
 * @param propVal
 * @param valueOnly
 */
function customPropToString(propVal, valueOnly) {
    if (!propVal)
        return "";
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
            return "";
        else if (!varName.startsWith("--"))
            varName = "--" + varName;
        template = propVal[1];
        if (!varName || !template)
            return "";
        value = propVal[2];
    }
    let varValue = stylePropToString(template, value, true);
    return valueOnly ? varValue : `${varName}:${varValue}`;
}
/**
 * Converts the given style property to the CSS style string
 * @param style
 */
function stylePropToString(propName, propVal, valueOnly) {
    if (!propName)
        return "";
    // find information object for the property
    let info = StylePropertyInfos[propName];
    let varValue = !info
        ? UtilFuncs_1.valueToString(propVal)
        : typeof info === "object"
            ? UtilFuncs_1.valueToString(propVal, info)
            : info(propVal);
    if (!varValue && !valueOnly)
        varValue = "initial";
    return valueOnly ? varValue : `${UtilFuncs_1.camelToDash(propName)}:${varValue}`;
}
exports.stylePropToString = stylePropToString;
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
    animationDelay: UtilFuncs_1.CssTimeMath.multiStyleToStringWithComma,
    animationDuration: UtilFuncs_1.CssTimeMath.multiStyleToStringWithComma,
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
    borderBottomLeftRadius: singleCornerRadiusToString,
    borderBottomRightRadius: singleCornerRadiusToString,
    borderBottomWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderColor: {
        arrayItemFunc: ColorFuncs_1.colorToString,
        fromAny: ColorFuncs_1.colorToString
    },
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
    borderSpacing: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    borderTop: borderToString,
    borderTopColor: ColorFuncs_1.colorToString,
    borderTopLeftRadius: singleCornerRadiusToString,
    borderTopRightRadius: singleCornerRadiusToString,
    borderTopWidth: UtilFuncs_1.CssLengthMath.styleToString,
    borderWidth: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
    bottom: UtilFuncs_1.CssLengthMath.styleToString,
    boxShadow: {
        fromObject: singleBoxShadow_fromObject,
        arraySeparator: ",",
    },
    caretColor: ColorFuncs_1.colorToString,
    clip: {
        fromArray: v => `rect(${UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace(v)}`
    },
    color: ColorFuncs_1.colorToString,
    columnGap: UtilFuncs_1.CssLengthMath.styleToString,
    columnRule: borderToString,
    columnRuleColor: ColorFuncs_1.colorToString,
    columnRuleStyle: UtilFuncs_1.valueToString,
    columnRuleWidth: UtilFuncs_1.CssLengthMath.multiStyleToStringWithSpace,
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
    maxZoom: UtilFuncs_1.CssPercentMath.styleToString,
    minBlockSize: UtilFuncs_1.CssLengthMath.styleToString,
    minHeight: UtilFuncs_1.CssLengthMath.styleToString,
    minInlineSize: UtilFuncs_1.CssLengthMath.styleToString,
    minWidth: UtilFuncs_1.CssLengthMath.styleToString,
    minZoom: UtilFuncs_1.CssPercentMath.styleToString,
    objectPosition: UtilFuncs_1.positionToString,
    outline: borderToString,
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
    perspectiveOrigin: {
        fromAny: UtilFuncs_1.CssLengthMath.styleToString
    },
    quotes: {
        arrayItemFunc: v => `"${v}"`
    },
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
    "CssFraction": UtilFuncs_1.CssFractionMath.styleToString,
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
 * Converts the given object to a CSS string.
 * @param val Object to convert to string.
 * @param usePropNames Flag indicating whether the names of the object's proprties should be added to the string.
 * @param propsAndFuncs Array of property names and optionally functions. The order of the names determines in
 *     which order the properties should be added to the string. If a function is present for the property,
 *     it will be used to convert the property's value to the string. If a function is not present, then the
 *     property value should be converted to the string using the valueToString function.
 */
function objectToString(val, propsAndFuncs, separator = " ", usePropNames = false) {
    if (val == null || propsAndFuncs.length === 0)
        return "";
    let buf = [];
    propsAndFuncs.forEach(propAndFunc => {
        let propName = typeof propAndFunc === "string" ? propAndFunc : propAndFunc[0];
        let propVal = val[propName];
        if (propVal == null)
            return;
        if (usePropNames)
            buf.push(propName);
        let prefix = typeof propAndFunc === "string" ? undefined : propAndFunc[2];
        if (prefix)
            buf.push(prefix);
        let func = typeof propAndFunc === "string" ? undefined : propAndFunc[1];
        if (func)
            buf.push(func(propVal));
        else if (propVal != null)
            buf.push(valueToString(propVal));
    });
    return buf.join(separator);
}
exports.objectToString = objectToString;
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
 * The mathFunc function returns one of the mathematic CSS function that accepts one or more
 * parameters whoe type is derived from NumberBase<T>.
 */
function mathFunc(name, params, convertFunc) {
    return `${name}(${multiStyleToString(params, convertFunc, ",")})`;
}
/**
 * The calcFunc function returns the string representation of the calc() CSS function.
 */
function calcFunc(formula, params, convertFunc) {
    return `calc(${formatNumbers(formula, params, convertFunc)})`;
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
    calc(formula, ...params) {
        return () => calcFunc(formula, params, this.convertFunc);
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
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssNumberMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssNumberMath.convertFunc, ","); }
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
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssPercentMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssPercentMath.convertFunc, ","); }
    constructor() { super(CssFractionMath.convertFunc); }
}
exports.CssPercentMath = CssPercentMath;
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
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssLengthMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssLengthMath.convertFunc, ","); }
    constructor() { super(CssLengthMath.convertFunc); }
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
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssAngleMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssAngleMath.convertFunc, ","); }
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
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssTimeMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssTimeMath.convertFunc, ","); }
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
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssResolutionMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssResolutionMath.convertFunc, ","); }
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
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssFrequencyMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssFrequencyMath.convertFunc, ","); }
    constructor() { super(CssFrequencyMath.convertFunc); }
    hz(n) { return this.unit(n, "Hz"); }
    khz(n) { return this.unit(n, "kHz"); }
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
    static convertFunc(n) { return numberToString(n, "fr", "fr"); }
    static styleToString(val) { return styleToString(val, CssFractionMath.convertFunc); }
    static multiStyleToString(val, separator) { return multiStyleToString(val, CssFractionMath.convertFunc, separator); }
    static multiStyleToStringWithSpace(val) { return multiStyleToString(val, CssFractionMath.convertFunc, " "); }
    static multiStyleToStringWithComma(val) { return multiStyleToString(val, CssFractionMath.convertFunc, ","); }
    constructor() { super(CssFractionMath.convertFunc); }
    minmax(min, max) {
        return () => mathFunc("minmax", [min, max], CssFractionMath.convertFunc);
    }
    fr(n) { return this.unit(n, "fr"); }
}
exports.CssFractionMath = CssFractionMath;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU3R5bGVBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9VdGlsQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JvdXBSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvTWlzY1J1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlQ29udGFpbmVyLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1N0eWxlUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1ZhclJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvckZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvQ29sb3JUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ZvbnRGYWNlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9JbWFnZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvTWVkaWFGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1NlbGVjdG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvVXRpbEZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvVXRpbFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsaUdBQWtEO0FBSWxEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxDQUFrQixFQUFFLENBQWtCLEVBQUUsQ0FBa0IsRUFBRSxDQUFtQjtJQUVoRyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUhELGtCQUdDO0FBRUQ7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxDQUFrQixFQUFFLENBQWtCLEVBQUUsQ0FBa0IsRUFBRSxDQUFtQjtJQUVoRyxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsQ0FBQztBQUhELGtCQUdDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxTQUFnQixLQUFLLENBQUUsQ0FBeUMsRUFBRSxDQUFrQjtJQUVoRixPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFIRCxzQkFHQzs7Ozs7Ozs7Ozs7Ozs7O0FDNURELGlHQUFrRDtBQUlsRDs7R0FFRztBQUNILFNBQWdCLGNBQWMsQ0FBRSxLQUFrQyxFQUM5RCxHQUFHLFlBQTZDO0lBRWhELE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM1RixDQUFDO0FBSkQsd0NBSUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLHVCQUF1QixDQUFFLEtBQWtDLEVBQ3ZFLEdBQUcsWUFBNkM7SUFFaEQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUUsMkJBQTJCLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ3RHLENBQUM7QUFKRCwwREFJQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsY0FBYyxDQUFFLEtBQXNDLEVBQ2xFLE1BQXdDLEVBQUUsR0FBaUIsRUFDM0QsR0FBRyxZQUE2QztJQUVoRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN6RyxDQUFDO0FBTEQsd0NBS0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLHVCQUF1QixDQUFFLEtBQXNDLEVBQzNFLE1BQXdDLEVBQUUsR0FBaUIsRUFDM0QsR0FBRyxZQUE2QztJQUVoRCxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBRSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNuSCxDQUFDO0FBTEQsMERBS0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLGFBQWEsQ0FBRSxLQUEwQixFQUFFLEdBQXVCLEVBQzlFLEdBQUcsWUFBNkM7SUFFaEQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBSkQsc0NBSUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxHQUFHLElBQWlDO0lBRTNELE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFIRCw4QkFHQzs7Ozs7Ozs7Ozs7Ozs7QUNyRUQ7O0dBRUc7O0FBSUgsNkdBQTREO0FBTTVELGlHQUEwRjtBQUMxRiwwR0FBb0Q7QUFDcEQsd0ZBQXdDO0FBQ3hDLDhGQUFvRjtBQUNwRixpR0FBMkQ7QUFDM0QsZ0dBQWtEO0FBSWxEOzs7R0FHRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxLQUFpQyxJQUN6RCxPQUFPLElBQUkseUJBQVksQ0FBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEckMsOEJBQ3FDO0FBRXJDOztHQUVHO0FBQ0gsU0FBZ0IsSUFBSSxDQUFFLEdBQTZELEVBQUUsS0FBaUMsSUFDbkgsT0FBTyxJQUFJLG9CQUFPLENBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQURyQyxvQkFDcUM7QUFFckM7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLEtBQWtDLEVBQUUsWUFBNEMsSUFDckcsT0FBTyxJQUFJLHNCQUFTLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQURoRCx3QkFDZ0Q7QUFFaEQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsR0FBRyxDQUFFLEtBQWtDLEVBQUUsWUFBeUMsSUFDL0YsT0FBTyxJQUFJLG1CQUFNLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUQ3QyxrQkFDNkM7QUFFN0M7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsUUFBcUIsRUFBRSxLQUFpQyxJQUM3RSxPQUFPLElBQUkseUJBQVksQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRC9DLHdCQUMrQztBQUUvQzs7Ozs7O0dBTUc7QUFDSCxTQUFnQixVQUFVLENBQUUsTUFBbUMsRUFBRSxZQUFnRCxJQUM5RyxPQUFPLElBQUksNkJBQWEsQ0FBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRHJELGdDQUNxRDtBQUVyRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsSUFBSSxDQUE2QixRQUFXLEVBQUUsT0FBeUIsRUFDbkYsWUFBNkMsSUFDOUMsT0FBTyxJQUFJLGlCQUFPLENBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFGMUQsb0JBRTBEO0FBRTFEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLEdBQVcsRUFBRSxVQUFnQyxFQUFFLGFBQXNDLElBQzNHLE9BQU8sSUFBSSxzQkFBVSxDQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRDVELDBCQUM0RDtBQUU1RDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxRQUFtQixJQUMzQyxPQUFPLElBQUksd0JBQVksQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEeEMsOEJBQ3dDO0FBRXhDOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLFNBQWlCLEVBQUUsTUFBZSxJQUMzRCxPQUFPLElBQUkseUJBQWEsQ0FBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRGxELGdDQUNrRDtBQUVsRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxXQUE2QixFQUFFLEtBQWdCLElBQ25FLE9BQU8sSUFBSSxvQkFBUSxDQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEOUMsc0JBQzhDO0FBRTlDOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUErRSxLQUFvQixFQUMzSCxlQUF5RCxJQUN2RCxPQUFPLElBQUkseUJBQVksQ0FBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRnRELDhCQUVzRDtBQUV0RDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBK0UsS0FBMEIsRUFDOUgsZUFBeUQsSUFDdkQsT0FBTyxJQUFJLHNCQUFTLENBQUUsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUZuRCx3QkFFbUQ7QUFJbkQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixJQUFJLENBQ25CLGVBQW1EO0lBRW5ELE9BQU8sa0JBQWtCLENBQUMsc0JBQXNCLENBQUUsZUFBZSxDQUFNLENBQUM7QUFDekUsQ0FBQztBQUpELG9CQUlDO0FBSUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsU0FBUyxDQUN4QixlQUF1RDtJQUV2RCxPQUFPLGtCQUFrQixDQUFDLFFBQVEsQ0FBRSxlQUFlLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBSkQsOEJBSUM7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLFFBQW1DO0lBRS9ELE9BQU8sa0JBQWtCLENBQUMsVUFBVSxDQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFIRCxrQ0FHQztBQUlEOzs7Ozs7R0FNRztBQUNILFNBQWdCLDBCQUEwQixDQUFFLE1BQWUsRUFBRSxNQUFlO0lBRTNFLE9BQU8sa0JBQWtCLENBQUMseUJBQXlCLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFIRCxnRUFHQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFnQixPQUFPLENBQUUsR0FBRyxPQUFvRDtJQUUvRSxPQUFPLHlCQUFhLENBQUUsT0FBTyxFQUFFO1FBQzlCLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxzQkFBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyx5QkFBYSxDQUFDLENBQUMsQ0FBQztLQUN0RSxDQUFDLENBQUM7QUFDSixDQUFDO0FBTEQsMEJBS0M7Ozs7Ozs7Ozs7Ozs7OztBQzNLRCxtR0FBd0c7QUFDeEcsNEdBQXVEO0FBQ3ZELGdHQUFnSTtBQUloSTs7OztHQUlHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFFLFFBQWdCLEVBQUUsR0FBRyxJQUF5QjtJQUV4RSxPQUFPLEdBQUcsRUFBRSxDQUFDLDhCQUFjLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFIRCw4QkFHQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0Ysd0JBQXdCO0FBQ3hCLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7Ozs7O0dBS0c7QUFDSCxTQUFnQixpQkFBaUIsQ0FBNkIsYUFBZ0IsRUFDN0UsY0FBK0I7SUFFL0IsT0FBTyw4QkFBaUIsQ0FBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hFLENBQUM7QUFKRCw4Q0FJQztBQUlEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsZUFBZSxDQUFFLEdBQWdCLEVBQUUsUUFBa0I7SUFFcEUsSUFBSSxRQUFRLElBQUksU0FBUztRQUN4QixHQUFHLENBQUMsZUFBZSxDQUFFLE9BQU8sQ0FBQyxDQUFDO1NBRS9CO1FBQ0MsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyw4QkFBaUIsQ0FBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDcEc7QUFDRixDQUFDO0FBVEQsMENBU0M7QUFLRDs7Ozs7OztHQU9HO0FBQ0gsU0FBZ0IsYUFBYSxDQUFFLFdBQXFCLEVBQUUsV0FBcUI7SUFFMUUsTUFBTSxTQUFTLEdBQXdDLEVBQUUsQ0FBQztJQUMxRCxJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7SUFFekIsMkZBQTJGO0lBQzNGLG1CQUFtQjtJQUNuQixLQUFLLElBQUksR0FBRyxJQUFJLFdBQVcsRUFDM0I7UUFDQyxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUNsQjtZQUNDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUMzQjthQUVEO1lBQ0MsSUFBSSxZQUFZLEdBQUcsOEJBQWlCLENBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRSxJQUFJLFlBQVksR0FBRyw4QkFBaUIsQ0FBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pELElBQUksWUFBWSxLQUFLLFlBQVksRUFDakM7Z0JBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDcEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQzthQUM5QjtTQUNEO0tBQ0Q7SUFFRCwyRkFBMkY7SUFDM0YsaUJBQWlCO0lBQ2pCLEtBQUssSUFBSSxHQUFHLElBQUksV0FBVyxFQUMzQjtRQUNDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQ2xCO1lBQ0MsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsOEJBQWlCLENBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNqRTtLQUNEO0lBRUQsT0FBTyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3hDLENBQUM7QUF4Q0Qsc0NBd0NDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLHNCQUFzQixDQUFFLFFBQWtCO0lBRXpELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztJQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLDhCQUFpQixDQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRyxPQUFPLEdBQUcsQ0FBQztBQUNaLENBQUM7QUFMRCx3REFLQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsYUFBYTtBQUNiLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxJQUFvQyxFQUM3RCxXQUE4QixJQUFJLEVBQ2xDLE9BQXdDLE1BQU0sRUFDOUMsUUFBMkIsQ0FBQyxFQUM1QixRQUFrRCxDQUFDLEVBQ25ELFlBQWlELFFBQVEsRUFDekQsT0FBMkMsTUFBTSxFQUNqRCxRQUE2QyxTQUFTO0lBR3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDdEUsQ0FBQztBQVhELDhCQVdDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixhQUFhO0FBQ2IsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7Ozs7Ozs7O0dBU0c7QUFDSCxTQUFnQixVQUFVLENBQ3hCLEtBQTBCLEVBQzFCLEtBQTBCLEVBQzFCLFFBQWdDLEVBQ2hDLElBQXNDLEVBQ3RDLFNBQTRDLFFBQVEsRUFDcEQsYUFBb0QsUUFBUSxFQUM1RCxTQUE0QyxhQUFhLEVBQ3pELE9BQXdDLFlBQVk7SUFHckQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUMzRSxDQUFDO0FBWkQsZ0NBWUM7QUFJRCwrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLGNBQWM7QUFDZCxFQUFFO0FBQ0YsK0ZBQStGO0FBRS9GOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxTQUFnQixVQUFVLENBQUUsV0FBZ0QsS0FBSyxFQUNoRixXQUE4QixJQUFJLEVBQ2xDLE9BQXdDLE1BQU0sRUFDOUMsUUFBMkIsQ0FBQztJQUc3QixPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQVBELGdDQU9DO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixVQUFVO0FBQ1YsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLFNBQVMsQ0FDdkIsQ0FBc0IsRUFDdEIsQ0FBc0IsRUFDdEIsS0FBMEIsRUFDMUIsT0FBNEIsQ0FBQyxFQUM3QixTQUE4QixDQUFDLEVBQy9CLFFBQTJCLEtBQUs7SUFHakMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFDN0MsQ0FBQztBQVZELDhCQVVDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsU0FBZ0IsVUFBVSxDQUN4QixDQUFzQixFQUN0QixDQUFzQixFQUN0QixLQUEwQixFQUMxQixPQUE0QixDQUFDO0lBRzlCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBUkQsZ0NBUUM7QUFJRCwrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLE9BQU87QUFDUCxFQUFFO0FBQ0YsK0ZBQStGO0FBRS9GOzs7Ozs7Ozs7R0FTRztBQUNILFNBQWdCLElBQUksQ0FDbEIsTUFBYyxFQUNkLElBQXlCLEVBQ3pCLEtBQXFDLEVBQ3JDLE1BQXVDLEVBQ3ZDLFVBQWdDLEVBQ2hDLE9BQTJDLEVBQzNDLE9BQXNEO0lBR3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUN0RSxDQUFDO0FBWEQsb0JBV0M7QUFJRCwrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQixFQUFFO0FBQ0YsK0ZBQStGO0FBRS9GOzs7Ozs7R0FNRztBQUNILFNBQWdCLGNBQWMsQ0FDdEIsSUFBNkMsRUFDN0MsS0FBMEIsRUFDMUIsS0FBK0MsRUFDL0MsU0FBdUQ7SUFHOUQsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQzFDLENBQUM7QUFSRCx3Q0FRQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsVUFBVTtBQUNWLEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxTQUFTLGFBQWEsQ0FBRSxJQUFZLEVBQUUsTUFBNEI7SUFFOUQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSwwQkFBYyxDQUFDLGFBQWEsQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ3JFLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxNQUE0QjtJQUVwRCxPQUFPLGFBQWEsQ0FBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUhELGdDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixRQUFRLENBQUUsTUFBNEI7SUFFbEQsT0FBTyxhQUFhLENBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFIRCw0QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFFLE1BQTRCO0lBRW5ELE9BQU8sYUFBYSxDQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBSEQsOEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxNQUE0QjtJQUVoRCxPQUFPLGFBQWEsQ0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUhELHdCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsTUFBNEI7SUFFakQsT0FBTyxhQUFhLENBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFIRCwwQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLE1BQTRCO0lBRWxELE9BQU8sYUFBYSxDQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QyxDQUFDO0FBSEQsNEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxNQUE0QjtJQUUvQyxPQUFPLGFBQWEsQ0FBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELHNCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixJQUFJLENBQUUsTUFBMkI7SUFFN0MsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLHlCQUFhLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDakUsQ0FBQztBQUhELG9CQUdDO0FBSUQ7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixVQUFVLENBQ3RCLENBQXNCLEVBQ3RCLENBQXNCLEVBQ3RCLEtBQTBCLEVBQzFCLE9BQTRCLENBQUMsRUFDN0IsU0FBOEIsQ0FBQztJQUVsQyxPQUFPLEdBQUcsRUFBRSxDQUFDLHVDQUEwQixDQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7QUFDeEUsQ0FBQztBQVJELGdDQVFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixTQUFTLENBQUUsTUFBMEI7SUFFakQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxjQUFjLDBCQUFjLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDeEUsQ0FBQztBQUhELDhCQUdDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixlQUFlO0FBQ2YsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxNQUFxQyxFQUFFLE1BQXlDO0lBRXRHLElBQUksQ0FBQyxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxpQ0FBb0IsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BFLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyx5QkFBYSxDQUFDLDJCQUEyQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ25GLENBQUM7QUFKRCxzQkFJQztBQVdEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLE1BQW9CLEVBQUUsUUFBZ0M7SUFFMUUsSUFBSSxDQUFDLEdBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMseUJBQWEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxJQUFJLEdBQUcsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsNEJBQWdCLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3RDLENBQUM7QUFMRCx3QkFLQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLEVBQWdCLEVBQUUsRUFBZ0IsRUFDMUQsUUFBZ0M7SUFFN0IsSUFBSSxHQUFHLEdBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RCxJQUFJLEdBQUcsR0FBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxJQUFJLEdBQUcsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsNEJBQWdCLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUMvQyxDQUFDO0FBUEQsMEJBT0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxXQUEwQyxFQUNsRSxHQUFHLE1BQWtCO0lBRXJCLE9BQU8sR0FBRyxFQUFFO1FBRVgsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDO1FBQ25CLElBQUksT0FBTyxXQUFXLEtBQUssUUFBUTtZQUNsQyxDQUFDLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQzs7WUFFdkIsQ0FBQyxJQUFJLEdBQUcseUJBQWEsQ0FBQywyQkFBMkIsQ0FBRSxXQUFXLENBQUMsR0FBRyxDQUFDO1FBRXBFLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMseUJBQWEsQ0FBQywyQkFBMkIsQ0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqRixPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDaEIsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQWZELDBCQWVDO0FBSUQsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixhQUFhO0FBQ2IsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxDQUFzQixFQUFFLENBQXNCLEVBQUUsQ0FBc0IsRUFDN0YsQ0FBc0IsRUFBRSxFQUF1QixFQUFFLEVBQXVCO0lBRXJFLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSx5QkFBYSxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNuRixDQUFDO0FBSkQsd0JBSUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLFFBQVEsQ0FDdEIsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQUUsRUFBdUIsRUFDbEcsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQUUsRUFBdUIsRUFDbEcsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQUUsRUFBdUIsRUFDbEcsRUFBdUIsRUFBRSxFQUF1QixFQUFFLEVBQXVCLEVBQUUsRUFBdUI7SUFHaEcsT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLHlCQUFhLENBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMvSCxDQUFDO0FBUkQsNEJBUUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxDQUFzQjtJQUUvQyxPQUFPLEdBQUcsRUFBRSxDQUFDLGVBQWUseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNsRSxDQUFDO0FBSEQsa0NBR0M7QUFJRDs7R0FFRztBQUNILFNBQVMsVUFBVSxDQUFFLElBQVksRUFBRSxDQUFxQjtJQUVwRCxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxJQUFJLHdCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDN0QsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLENBQXFCO0lBRXpDLE9BQU8sVUFBVSxDQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBSEQsd0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBRSxDQUFxQjtJQUUxQyxPQUFPLFVBQVUsQ0FBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQztBQUhELDBCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsQ0FBcUI7SUFFMUMsT0FBTyxVQUFVLENBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFIRCwwQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFFLENBQXFCO0lBRTFDLE9BQU8sVUFBVSxDQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBSEQsMEJBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFFBQVEsQ0FDdkIsQ0FBc0IsRUFBRSxDQUFzQixFQUFFLENBQXNCLEVBQ3RFLENBQXFCO0lBRXJCLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLHdCQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztBQUNsQyxDQUFDO0FBUEQsNEJBT0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxFQUF1QixFQUFFLEVBQXdCO0lBRXBFLE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ3ZILENBQUM7QUFIRCxzQkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxTQUFTLENBQUUsSUFBWSxFQUFFLENBQXNCO0lBRXBELE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUkseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUM5RCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixNQUFNLENBQUUsQ0FBc0I7SUFFMUMsT0FBTyxTQUFTLENBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCx3QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFFLENBQXNCO0lBRTFDLE9BQU8sU0FBUyxDQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBSEQsd0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLE1BQU0sQ0FBRSxDQUFzQjtJQUUxQyxPQUFPLFNBQVMsQ0FBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUhELHdCQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixPQUFPLENBQUUsRUFBdUIsRUFBRSxFQUF1QixFQUN4RSxFQUF1QjtJQUV2QixJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUN4RSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDakMsQ0FBQztBQU5ELDBCQU1DO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixJQUFJLENBQUUsRUFBc0IsRUFBRSxFQUF1QjtJQUVqRSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsd0JBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLHdCQUFZLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNwSCxDQUFDO0FBSEQsb0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxFQUFzQjtJQUV6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsd0JBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUM1RCxDQUFDO0FBSEQsc0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLEtBQUssQ0FBRSxFQUFzQjtJQUV6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLFNBQVMsd0JBQVksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztBQUM1RCxDQUFDO0FBSEQsc0JBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFNBQVMsQ0FBRSxDQUFzQixFQUFFLENBQXVCO0lBRXRFLE9BQU8sR0FBRyxFQUFFLENBQUMsYUFBYSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ3hILENBQUM7QUFIRCw4QkFHQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxhQUFhLENBQUUsSUFBWSxFQUFFLENBQXNCO0lBRXhELE9BQU8sR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLElBQUkseUJBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUM5RCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixVQUFVLENBQUUsQ0FBc0I7SUFFOUMsT0FBTyxhQUFhLENBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFIRCxnQ0FHQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFFLENBQXNCO0lBRTlDLE9BQU8sYUFBYSxDQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBSEQsZ0NBR0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxDQUFzQjtJQUU5QyxPQUFPLGFBQWEsQ0FBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsQ0FBQztBQUhELGdDQUdDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQixXQUFXLENBQUUsQ0FBc0IsRUFBRSxDQUFzQixFQUMxRSxDQUFzQjtJQUV0QixJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0RSx5QkFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxPQUFPLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDckMsQ0FBQztBQU5ELGtDQU1DOzs7Ozs7Ozs7Ozs7Ozs7QUM3eEJELGdHQUc0QjtBQUk1Qjs7OztHQUlHO0FBQ1EsV0FBRyxHQUFtQixJQUFJLHlCQUFhLEVBQUUsQ0FBQztBQUlyRDs7OztHQUlHO0FBQ1EsV0FBRyxHQUFtQixJQUFJLHlCQUFhLEVBQUUsQ0FBQztBQUlyRDs7OztHQUlHO0FBQ1EsYUFBSyxHQUFrQixJQUFJLHdCQUFZLEVBQUUsQ0FBQztBQUlyRDs7OztHQUlHO0FBQ1EsWUFBSSxHQUFpQixJQUFJLHVCQUFXLEVBQUUsQ0FBQztBQUlsRDs7OztHQUlHO0FBQ1Esa0JBQVUsR0FBdUIsSUFBSSw2QkFBaUIsRUFBRSxDQUFDO0FBSXBFOzs7O0dBSUc7QUFDUSxpQkFBUyxHQUFzQixJQUFJLDRCQUFnQixFQUFFLENBQUM7QUFJakU7Ozs7R0FJRztBQUNRLGdCQUFRLEdBQXFCLElBQUksMkJBQWUsRUFBRSxDQUFDO0FBSTlEOzs7R0FHRztBQUNRLGVBQU8sR0FBb0IsSUFBSSwwQkFBYyxFQUFFLENBQUM7QUFJM0QsK0ZBQStGO0FBQy9GLEVBQUU7QUFDRixRQUFRO0FBQ1IsRUFBRTtBQUNGLCtGQUErRjtBQUUvRjs7Ozs7R0FLRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxHQUFXLEVBQUUsR0FBRyxNQUFhO0lBRWpELFNBQVMsUUFBUSxDQUFFLEtBQWEsRUFBRSxHQUFHLElBQVc7UUFFL0MsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE9BQU8sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHlCQUFhLENBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRUQsT0FBTyxHQUFHLEVBQUU7UUFFWCxJQUNBO1lBQ0MsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFFLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2hEO1FBQ0QsT0FBTSxHQUFHLEVBQ1Q7WUFDQyxhQUFhO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBRSxvQ0FBb0MsRUFBRSxHQUFHLENBQUM7WUFDMUQsVUFBVTtZQUNWLE9BQU8sR0FBRyxDQUFDO1NBQ1g7SUFDRixDQUFDO0FBQ0YsQ0FBQztBQXRCRCxrQkFzQkM7QUFJRCwrRkFBK0Y7QUFDL0YsRUFBRTtBQUNGLFFBQVE7QUFDUixFQUFFO0FBQ0YsK0ZBQStGO0FBRS9GOzs7R0FHRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxHQUFxQjtJQUV6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8seUJBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQzNDLENBQUM7QUFIRCxrQkFHQztBQUlELCtGQUErRjtBQUMvRixFQUFFO0FBQ0YsU0FBUztBQUNULEVBQUU7QUFDRiwrRkFBK0Y7QUFFL0Y7O0dBRUc7QUFDSCxTQUFnQixJQUFJLENBQUUsUUFBMEIsRUFBRSxVQUF3RCxFQUN6RyxRQUEyQjtJQUV4QixPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDM0csQ0FBQztBQUpELG9CQUlDOzs7Ozs7Ozs7Ozs7OztBQ3ZKRCw4QkFBOEI7Ozs7O0FBRTlCLHFGQUFtQztBQUNuQyx1RkFBb0M7QUFNcEMsbUZBQWtDO0FBQ2xDLDJFQUE4QjtBQUM5Qiw2RUFBK0I7QUFDL0IsNkVBQStCO0FBQy9CLDZFQUErQjtBQUMvQiwyRUFBOEI7Ozs7Ozs7Ozs7Ozs7OztBQ2I5Qix3RUFBZ0U7QUFDaEUsMEZBQXVDO0FBSXZDOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsV0FBSTtJQUV0QyxZQUFvQixNQUF5QixFQUFFLFlBQXNDO1FBRXBGLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxNQUFNO1lBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUcsS0FBNkIsRUFBRSxRQUFnQjtRQUUvRCxLQUFLLENBQUMsT0FBTyxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGtCQUFXLENBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0UsS0FBSyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVTtZQUN2QyxZQUFZLENBQUMsT0FBTyxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksSUFBSSxDQUFDLFVBQVU7WUFDbEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDbkYsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtZQUNuQixPQUFPO1FBRVIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLGNBQWMsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFLE1BQU0sQ0FBcUIsQ0FBQztRQUU1RixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUEyQixDQUFDO1FBQ3hELEtBQUssSUFBSSxZQUFZLElBQUksSUFBSSxDQUFDLFVBQVUsRUFDeEM7WUFDQyxJQUNBO2dCQUNDLGdCQUFnQixDQUFDLFVBQVUsQ0FBRSxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDeEQ7WUFDRCxPQUFNLENBQUMsRUFDUDtnQkFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLDhCQUE4QixFQUFFLENBQUMsQ0FBQzthQUNqRDtTQUNEO0lBQ0YsQ0FBQztDQTJCRDtBQXRGRCxzQ0FzRkM7QUFJRDs7R0FFRztBQUNILE1BQU0sa0JBQW1CLFNBQVEsc0JBQVM7SUFFekMsWUFBb0IsS0FBc0I7UUFFekMsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVyQyxJQUFJLEtBQUs7WUFDUixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNFLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN2QyxPQUFPLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBSUQsK0NBQStDO0lBQ3hDLGlCQUFpQjtRQUV2QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztDQU1EOzs7Ozs7Ozs7Ozs7Ozs7QUN0SUQsbUdBQWtGO0FBQ2xGLHdFQUFtRTtBQUNuRSxtR0FBMkQ7QUFHM0QsbUdBQXdEO0FBSXhEOztHQUVHO0FBQ0gsTUFBc0IsU0FBcUMsU0FBUSxXQUFJO0lBRXRFLFlBQW9CLGVBQTZDO1FBRWhFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDeEMsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsS0FBNkIsRUFBRSxRQUFnQjtRQUU5RCxLQUFLLENBQUMsT0FBTyxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoQyxJQUFJLFFBQVEsR0FBRyxzQ0FBc0IsQ0FBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUM7UUFDNUYsSUFBSSxDQUFDLFFBQVE7WUFDWixPQUFPO1FBRVIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRywwQ0FBMEIsQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBSUQsOERBQThEO0lBQ3ZELE1BQU0sQ0FBRSxNQUF1QztRQUVyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDdEIsT0FBTztRQUVSLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRO1lBQ1osT0FBTztRQUVSLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBSSxDQUFDLFlBQVksQ0FBRSxHQUFHLFFBQVEsS0FBSyxFQUFFLE1BQU0sQ0FBb0IsQ0FBQztRQUUvRSxtQkFBbUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTztZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBU0QsNkJBQTZCO0lBQ3RCLEtBQUs7UUFFWCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFhRCxxRkFBcUY7SUFDckYsSUFBVyxLQUFLLEtBQVEsT0FBTyxJQUFJLENBQUMsUUFBYSxDQUFDLENBQUMsQ0FBQztDQUlwRDtBQTNFRCw4QkEyRUM7QUFJRDs7R0FFRztBQUNILE1BQWEsWUFBc0UsU0FBUSxTQUFZO0lBRXRHLFlBQW9CLEtBQW9CLEVBQUUsZUFBK0M7UUFFeEYsS0FBSyxDQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxZQUFZLENBQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUlELHFEQUFxRDtJQUMzQyxvQkFBb0I7UUFFN0IsdUNBQXVDO1FBQ3ZDLElBQUksV0FBVyxHQUFHLGtDQUFxQixDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRCxtRkFBbUY7UUFDbkYsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkUsQ0FBQztDQVNEO0FBcENELG9DQW9DQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxTQUFtRSxTQUFRLFNBQVk7SUFFbkcsWUFBb0IsS0FBMEIsRUFBRSxlQUErQztRQUU5RixLQUFLLENBQUUsZUFBZSxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFNBQVMsQ0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBSUQscURBQXFEO0lBQzNDLG9CQUFvQjtRQUU3QixJQUFJLFdBQVcsR0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQywrQkFBa0IsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEcsT0FBTyxVQUFVLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Q0FTRDtBQWpDRCw4QkFpQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ3pLRCw0R0FBd0Q7QUFDeEQsd0VBQTRCO0FBRzVCLG1HQUEyRDtBQUMzRCxtR0FBd0Q7QUFDeEQsMEZBQXVDO0FBS3ZDOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsV0FBSTtJQUVyQyxZQUFvQixRQUFtQjtRQUV0QyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxZQUFZLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBSSxDQUFDLFlBQVksQ0FBRSxjQUFjLGdDQUFnQixDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUNqRixNQUFNLENBQW9CLENBQUM7SUFDN0IsQ0FBQztDQVNEO0FBL0JELG9DQStCQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsV0FBSTtJQUVuQyxZQUFvQixHQUFXLEVBQUUsVUFBZ0MsRUFBRSxhQUFzQztRQUV4RyxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDcEMsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsT0FBTyxJQUFJLFVBQVUsQ0FBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ1osT0FBTzthQUNILElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQzNGLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDOztZQUVmLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUUxQixJQUFJLG1CQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWE7WUFDNUMsQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVE7Z0JBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYTtnQkFDcEIsQ0FBQyxDQUFDLGtDQUFxQixDQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUvQyxJQUFJLG1CQUFtQixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFFLFVBQVUsQ0FBQztZQUN2RSxtQkFBbUIsR0FBRyxhQUFhLG1CQUFtQixJQUFJLENBQUM7UUFFM0QsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3RDLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRO2dCQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQ2pCLENBQUMsQ0FBQywrQkFBa0IsQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixJQUFJLGdCQUFnQixFQUFFLEVBQzVGLE1BQU0sQ0FBa0IsQ0FBQztJQUM1QixDQUFDO0NBZUE7QUFoRUQsZ0NBZ0VDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxzQkFBUztJQUV0QyxZQUFvQixXQUE2QixFQUFFLEtBQWdCO1FBRWxFLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2hDLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksUUFBUSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLE9BQU8sU0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0NBU0Q7QUFqQ0QsNEJBaUNDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxXQUFJO0lBRXRDLFlBQW9CLFNBQWlCLEVBQUUsTUFBZTtRQUVyRCxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxhQUFhLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2xCLE9BQU87UUFFUixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUM7UUFDekYsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLGNBQWMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUN0RixNQUFNLENBQXFCLENBQUM7SUFDOUIsQ0FBQztDQWFEO0FBMUNELHNDQTBDQzs7Ozs7Ozs7Ozs7Ozs7O0FDektEOzs7O0dBSUc7QUFDSCxNQUFzQixJQUFJO0lBRXpCLHNCQUFzQjtJQUNmLE9BQU8sQ0FBRSxLQUE2QixFQUFFLFFBQXVCO1FBRXJFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFLRCw2RkFBNkY7SUFDN0Ysb0VBQW9FO0lBQzdELE1BQU0sQ0FBRSxNQUF1QyxJQUFTLENBQUM7SUFFaEUsNkZBQTZGO0lBQzdGLHFDQUFxQztJQUM5QixLQUFLLEtBQVcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBSTdDLG1FQUFtRTtJQUM1RCxNQUFNLENBQUMsWUFBWSxDQUFFLFFBQWdCLEVBQUUsTUFBdUM7UUFFcEYsSUFDQTtZQUNDLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxDQUFDLEVBQ1I7WUFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLHdCQUF3QixRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDdEQsT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7Q0FjRDtBQWpERCxvQkFpREM7QUFJRCx5REFBeUQ7QUFDekQsU0FBZ0IsV0FBVyxDQUFFLEtBQTZCLEVBQUUsUUFBdUIsRUFBRSxZQUFvQyxFQUN4SCxTQUFrQjtJQUVsQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsWUFBWTtRQUM3QixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRWpCLElBQUksSUFBSSxHQUFHLENBQUMsWUFBWTtRQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFFLFFBQVMsQ0FBQztRQUNyQyxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssUUFBUTtZQUNqQyxDQUFDLENBQUMsWUFBWTtZQUNkLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBRXRCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUFiRCxrQ0FhQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUdELHVGQUFrRTtBQUNsRSx3RUFBbUQ7QUFDbkQsaUZBQWlDO0FBQ2pDLHVGQUFxRDtBQUlyRCx5RkFBeUY7QUFDekYsNERBQTREO0FBRTVELGdGQUFnRjtBQUNoRixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFekM7OztHQUdHO0FBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7QUFJakQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxhQUFhO0lBRWxCLFlBQWEsUUFBeUIsRUFBRSxJQUFZO1FBRW5ELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLFdBQW9DLENBQUM7UUFDckUsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRTVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFJRCw2RkFBNkY7SUFDN0Ysd0NBQXdDO0lBQ2hDLE9BQU87UUFFZCxxRkFBcUY7UUFDckYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUV2Qyx5RkFBeUY7UUFDekYsNERBQTREO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNmO1lBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7U0FDOUI7O1lBRUEsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUV2RCxzRkFBc0Y7UUFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUzRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsc0VBQXNFO1FBQ3RFLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVE7WUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFJRCw2RkFBNkY7SUFDN0Ysd0NBQXdDO0lBQ2hDLGVBQWUsQ0FBRSxRQUF1QixFQUFFLE9BQVk7UUFFN0QsSUFBSSxPQUFPLFlBQVksMkJBQWU7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFFLE9BQU8sQ0FBQzthQUMzQixJQUFJLE9BQU8sWUFBWSxpQkFBTztZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7YUFDbkMsSUFBSSxPQUFPLFlBQVksV0FBSTtZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNqQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUUsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFJRCxnRkFBZ0Y7SUFDeEUsZ0JBQWdCLENBQUUsR0FBb0I7UUFFN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUlELGlDQUFpQztJQUN6QixjQUFjLENBQUUsUUFBdUIsRUFBRSxNQUFlO1FBRS9ELDhFQUE4RTtRQUM5RSx3Q0FBd0M7UUFDeEMsSUFBSSxNQUFNLENBQUMsU0FBUztZQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXpCLE1BQU0sQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxNQUFNLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBSUQsMkNBQTJDO0lBQ25DLFdBQVcsQ0FBRSxRQUF1QixFQUFFLElBQVU7UUFFdkQseUZBQXlGO1FBQ3pGLDBDQUEwQztRQUMxQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQ2Q7WUFDQyxJQUFJLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUUvQztnQkFDQywrQ0FBK0M7Z0JBQy9DLE9BQU87YUFDUDtTQUNEO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFaEQsSUFBSSxJQUFJLFlBQVksc0JBQVU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7YUFDckIsSUFBSSxJQUFJLFlBQVkseUJBQWE7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7O1lBRTVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFJRCx3Q0FBd0M7SUFDaEMsWUFBWSxDQUFFLFFBQWU7UUFFcEMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDckMsT0FBTztRQUVSLHNGQUFzRjtRQUN0RixLQUFLLElBQUksT0FBTyxJQUFJLFFBQVE7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxxQkFBcUI7UUFFM0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFJRCx1RUFBdUU7SUFDaEUsaUJBQWlCLENBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxTQUFtQjtRQUV6RSxJQUFJLElBQUksQ0FBQyxxQkFBcUI7WUFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUlEOzs7T0FHRztJQUNJLGlCQUFpQixDQUFFLFFBQWdCO1FBRXpDLG9GQUFvRjtRQUNwRixzRkFBc0Y7UUFDdEYsc0ZBQXNGO1FBQ3RGLHVGQUF1RjtRQUN2Riw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFFBQVE7WUFDWixPQUFPLGtCQUFrQixFQUFFLENBQUM7YUFDeEIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDdEUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUVyQztZQUNDLDBGQUEwRjtZQUMxRixrRUFBa0U7WUFDbEUsSUFBSSxZQUFZLEdBQUcsK0JBQStCLENBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwRixPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN4RTtJQUNGLENBQUM7SUFJRCw4RkFBOEY7SUFDdkYsV0FBVyxDQUFFLE1BQXVDO1FBRTFELHdDQUF3QztRQUN4QyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJO1lBQ3hCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWxDLHNHQUFzRztRQUN0Ryx5REFBeUQ7UUFDekQsSUFBSSxNQUFNLFlBQVksYUFBYSxFQUNuQztZQUNDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELCtDQUErQztRQUMvQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDeEI7WUFDQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsV0FBSSxDQUFDLFlBQVksQ0FBRSxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQ2pGLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBaUIsQ0FBQztTQUM3RDtRQUVELHlCQUF5QjtRQUN6QixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSUQsNkRBQTZEO0lBQ3RELFVBQVU7UUFFaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQ2hDO1lBQ0MsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUUvQyxrQ0FBa0M7UUFDbEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSTtZQUN4QixHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBSUQsd0NBQXdDO0lBQ2pDLFFBQVE7UUFFZCxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixLQUFLLENBQUMsRUFDbkM7WUFDQyxtRUFBbUU7WUFDbkUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUNuQjtnQkFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUM3Qzs7Z0JBRUEsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDO1lBRXZELElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLFdBQVksQ0FBQyxLQUFzQixDQUFDLENBQUM7U0FDNUQ7SUFDRixDQUFDO0lBSUQsd0NBQXdDO0lBQ2pDLFVBQVU7UUFFaEIsb0NBQW9DO1FBQ3BDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLENBQUM7WUFDaEMsT0FBTztRQUVSLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLEtBQUssQ0FBQyxFQUNuQztZQUNDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUVsQixtRUFBbUU7WUFDbkUsSUFBSSxJQUFJLENBQUMsVUFBVTtnQkFDbEIsSUFBSSxDQUFDLFdBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU1QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFJRCxnRkFBZ0Y7SUFDaEYsSUFBWSxVQUFVLEtBQWMsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQztDQThDaEc7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HLDZGQUE2RjtBQUM3RixlQUFlO0FBQ2YsSUFBSSxtQkFBbUIsR0FBWSxLQUFLLENBQUM7QUFFekMsNkZBQTZGO0FBQzdGLFdBQVc7QUFDWCxJQUFJLHNCQUFzQixHQUFXLEdBQUcsQ0FBQztBQUV6Qyx5REFBeUQ7QUFDekQsSUFBSSxZQUFZLEdBQVcsQ0FBQyxDQUFDO0FBSTdCOztHQUVHO0FBQ0gsU0FBUyxZQUFZLENBQUUsU0FBaUIsRUFBRSxRQUFnQjtJQUV6RCxPQUFPLG1CQUFtQjtRQUN6QixDQUFDLENBQUMsa0JBQWtCLENBQUUsc0JBQXNCLENBQUM7UUFDN0MsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFTLGtCQUFrQixDQUFFLE1BQWU7SUFFM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDO0FBQ3BFLENBQUM7QUFJRCwrRkFBK0Y7QUFDL0Ysd0ZBQXdGO0FBQ3hGLFNBQVMsK0JBQStCLENBQUUsZUFBc0MsRUFBRSxRQUFnQjtJQUVqRyxJQUFJLENBQUMsZUFBZTtRQUNuQixPQUFPLElBQUksQ0FBQztJQUViLHVCQUF1QjtJQUN2QixJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUM7SUFDaEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUssMkJBQWUsRUFDMUU7UUFDQyxvRkFBb0Y7UUFDcEYsb0ZBQW9GO1FBQ3BGLDhCQUE4QjtRQUM5QixJQUFJLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQ3pDO1lBQ0MsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxRQUFRLElBQUksTUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ25FLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUNoQztLQUNEO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRix1QkFBdUI7QUFDdkIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7Ozs7Ozs7R0FRRztBQUNILFNBQVMsWUFBWSxDQUFFLGVBQXNDLEVBQzVELEtBQXVCO0lBRXZCLHdGQUF3RjtJQUN4RixtRkFBbUY7SUFDbkYsdUZBQXVGO0lBQ3ZGLDZCQUE2QjtJQUM3QixJQUFJLFNBQVMsR0FBRyxlQUFlLENBQUM7SUFDaEMsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFFLFNBQVMsQ0FBQyxDQUFDLEtBQUssMkJBQWU7UUFDekUsWUFBWSxDQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVqQyxJQUNBO1FBQ0MsOENBQThDO1FBQzlDLElBQUksUUFBUSxHQUFHLElBQUksZUFBZSxDQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTNDLGlDQUFpQztRQUNqQyxJQUFJLElBQUksR0FBRyxtQkFBbUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJO1lBQ3RELENBQUMsQ0FBQyxrQkFBa0IsRUFBRTtZQUN0QixDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztRQUV4QixJQUFJLGFBQWEsQ0FBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUN4QyxPQUFPLFFBQVEsQ0FBQztLQUNoQjtJQUNELE9BQU8sR0FBRyxFQUNWO1FBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBRSwrQ0FBK0MsZUFBZSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVGLE9BQU8sSUFBSSxDQUFDO0tBQ1o7QUFDRixDQUFDO0FBSUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQUUsZUFBd0QsRUFDL0YsS0FBdUI7SUFFdkIsSUFBSSxDQUFDLGVBQWU7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFFYixJQUFJLGVBQWUsWUFBWSwyQkFBZSxFQUM5QztRQUNDLG9FQUFvRTtRQUNwRSxJQUFJLGFBQWEsR0FBRyxlQUFlLENBQUMsZ0JBQWdCLENBQWtCLENBQUM7UUFDdkUsSUFBSSxDQUFDLGFBQWEsRUFDbEI7WUFDQyxpQ0FBaUM7WUFDakMsSUFBSSxJQUFJLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQ3hCO2dCQUNDLElBQUksZUFBZSxHQUFHLGVBQWUsQ0FBQyxXQUFXLENBQUM7Z0JBQ2xELElBQUksZUFBZSxDQUFDLElBQUk7b0JBQ3ZCLElBQUksSUFBSSxHQUFHLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQzthQUNwQztZQUVELElBQUksYUFBYSxDQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMxQztRQUVELE9BQU8sZUFBZSxDQUFDO0tBQ3ZCO1NBRUQ7UUFDQyxPQUFPLGVBQWUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxZQUFZLENBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3pDO0FBQ0YsQ0FBQztBQWhDRCx3REFnQ0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLDBCQUEwQixDQUFFLFVBQTJCO0lBRXRFLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ3pELENBQUM7QUFIRCxnRUFHQztBQUlEOzs7Ozs7R0FNRztBQUNILFNBQWdCLFFBQVEsQ0FBNkIsZUFBNkM7SUFFakcsSUFBSSxRQUFRLEdBQUcsc0JBQXNCLENBQUUsZUFBZSxDQUFNLENBQUM7SUFDN0QsSUFBSSxDQUFDLFFBQVE7UUFDWixPQUFPLElBQUksQ0FBQztJQUViLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBa0IsQ0FBQztJQUNoRSxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsT0FBTyxRQUFRLENBQUM7QUFDakIsQ0FBQztBQVRELDRCQVNDO0FBSUQ7Ozs7R0FJRztBQUNILFNBQWdCLFVBQVUsQ0FBRSxVQUEyQjtJQUV0RCxJQUFJLENBQUMsVUFBVTtRQUNkLE9BQU87SUFFUixJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQWtCLENBQUM7SUFDbEUsSUFBSSxhQUFhO1FBQ2hCLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBUkQsZ0NBUUM7QUFJRDs7Ozs7O0dBTUc7QUFDSCxTQUFnQix5QkFBeUIsQ0FBRSxNQUFlLEVBQUUsTUFBZTtJQUUxRSxtQkFBbUIsR0FBRyxNQUFNLENBQUM7SUFDN0Isc0JBQXNCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztBQUNoRCxDQUFDO0FBSkQsOERBSUM7Ozs7Ozs7Ozs7Ozs7O0FDcGpCRDs7R0FFRzs7QUFzUkg7Ozs7O0dBS0c7QUFDVSxnQkFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUl4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkc7QUFDSCxNQUFzQixlQUFlO0lBRXBDOzs7O09BSUc7SUFDSCxZQUFvQixLQUFlO1FBRWxDLElBQUksQ0FBQyxnQkFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQVcsS0FBSyxLQUFlLE9BQU8sSUFBSSxDQUFDLGdCQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDdkQ7QUFuQkQsMENBbUJDOzs7Ozs7Ozs7Ozs7Ozs7QUN2VUQsd0VBQWlFO0FBQ2pFLG1HQUF3RjtBQUN4RixnR0FBa0Q7QUFDbEQsaUZBQWtDO0FBQ2xDLDRHQUErRDtBQUkvRDs7O0dBR0c7QUFDSCxNQUFzQixTQUFVLFNBQVEsV0FBSTtJQUUzQyx1RkFBdUY7SUFDdkYsd0JBQXdCO0lBQ3hCLFlBQW9CLFFBQW1CO1FBRXRDLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxRQUFRO1lBQ1gsSUFBSSxDQUFDLGtCQUFrQixDQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFJRDs7O09BR0c7SUFDSyxrQkFBa0IsQ0FBRSxhQUF1QjtRQUVsRCxxRkFBcUY7UUFDckYscUZBQXFGO1FBQ3JGLHdDQUF3QztRQUN4QyxJQUFJLFdBQVcsR0FBdUIsSUFBSSxDQUFDO1FBQzNDLElBQUksV0FBVyxHQUF3QixJQUFJLENBQUM7UUFDNUMsSUFBSSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBRTVCLEtBQUssSUFBSSxRQUFRLElBQUksYUFBYSxFQUNsQztZQUNDLElBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQ3BCO2dCQUNDLDBFQUEwRTtnQkFDMUUsSUFBSSxjQUFjLEdBQUcsT0FBb0MsQ0FBQztnQkFDMUQsSUFBSSxjQUFjLFlBQVksU0FBUztvQkFDdEMsV0FBVyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7O29CQUUvQixXQUFXLEdBQUcsY0FBYyxDQUFDO2FBQzlCO2lCQUNJLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDakM7Z0JBQ0MsMkRBQTJEO2dCQUMzRCxJQUFJLENBQUMsV0FBVztvQkFDZixXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUVsQiwrRkFBK0Y7Z0JBQy9GLCtGQUErRjtnQkFDL0YsNkJBQTZCO2dCQUM3QixJQUFJLFVBQXNCLENBQUM7Z0JBQzNCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ3pCLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQXFCLEVBQUUsSUFBSSxDQUFDLENBQUM7O29CQUV6RixVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFNUYsV0FBVyxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQzthQUM5QjtpQkFDSSxJQUFJLFFBQVEsS0FBSyxHQUFHLEVBQ3pCO2dCQUNDLHFFQUFxRTtnQkFDckUsSUFBSSxNQUFNLEdBQUcsT0FBNEMsQ0FBQztnQkFDMUQsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDckI7b0JBQ0MsSUFBSSxDQUFDLFdBQVc7d0JBQ2YsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFFbEIsTUFBTSxDQUFDLE9BQU8sQ0FBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVksQ0FBQyxJQUFJLENBQUUsSUFBSSxVQUFVLENBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuRzthQUNEO2lCQUVEO2dCQUNDLG1EQUFtRDtnQkFDbkQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQzthQUM3QjtTQUNEO1FBRUQsb0ZBQW9GO1FBQ3BGLG1FQUFtRTtRQUNuRSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDekM7WUFDQyxXQUFXLENBQUMsT0FBTyxDQUFFLE1BQU0sQ0FBQyxFQUFFO2dCQUU3QixJQUFJLE1BQU0sQ0FBQyxRQUFRO29CQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUFjLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRWpFLElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3ZEO29CQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVzt3QkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBRXZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFFLFVBQVUsQ0FBQyxFQUFFO3dCQUV4QyxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ3ZDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxhQUFhLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLENBQUM7aUJBQ0g7WUFDRixDQUFDLENBQUMsQ0FBQztTQUNIO1FBRUQsaUZBQWlGO1FBQ2pGLElBQUksUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUUsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDakQ7WUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztnQkFFekIsMkJBQWMsQ0FBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3pDO1lBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7Z0JBRS9CLFdBQVcsQ0FBQyxPQUFPLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0YsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsS0FBNkIsRUFBRSxRQUF1QjtRQUVyRSxLQUFLLENBQUMsT0FBTyxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoQywrREFBK0Q7UUFDL0QsSUFBSSxJQUFJLENBQUMsV0FBVztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBRSxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUlELGlEQUFpRDtJQUMxQyxRQUFRLENBQUUsR0FBYztRQUU5QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFFN0Isb0NBQW9DO1FBQ3BDLElBQUksR0FBRyxDQUFDLFdBQVcsRUFDbkI7WUFDQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFLLElBQUksYUFBYSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEVBQ3pDO2dCQUNDLElBQUksYUFBYSxHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDMUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQ3RDO1NBQ0Q7SUFDRixDQUFDO0lBSUQseURBQXlEO0lBQ2xELFdBQVc7UUFFakIsT0FBTyxJQUFJLENBQUMsUUFBUTtZQUNuQixDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSw2QkFBZ0IsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbkUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNQLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksSUFBSSxDQUFDLFFBQVE7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFJLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxXQUFXLEVBQUcsRUFBRSxNQUFNLENBQWlCLENBQUM7UUFFaEYsMkRBQTJEO1FBQzNELElBQUksSUFBSSxDQUFDLFdBQVc7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUlELDZCQUE2QjtJQUN0QixLQUFLO1FBRVgsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsd0NBQXdDO1FBQ3hDLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBU0Q7Ozs7O09BS0c7SUFDSSxPQUFPLENBQTZCLElBQU8sRUFBRSxLQUFtQixFQUFFLFNBQW1CO1FBRTNGLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUNoQixPQUFPO1FBRVIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFFLElBQUksRUFDbkMsOEJBQWlCLENBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3pFLENBQUM7SUFJRDs7Ozs7T0FLRztJQUNJLGFBQWEsQ0FBNkIsTUFBbUIsRUFBRSxRQUF5QixFQUFFLFNBQW1CO1FBRW5ILElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksaUJBQU8sQ0FBQztZQUMzRCxPQUFPO1FBRVIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQzdDLDhCQUFpQixDQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkYsQ0FBQztDQVlEO0FBek9ELDhCQXlPQztBQUlEOztHQUVHO0FBQ0gsTUFBTSxVQUFXLFNBQVEsU0FBUztJQUVqQywyRkFBMkY7SUFDM0YsMkZBQTJGO0lBQzNGLG1CQUFtQjtJQUNuQixZQUFvQixRQUFxQixFQUFFLGFBQW1CLEVBQUUsS0FBd0IsRUFBRSxjQUEwQjtRQUVuSCxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDakMsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzNDLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5RCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQ3RCO1lBQ0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQWtCLENBQUM7WUFDdkMsT0FBTyxHQUFHLGNBQWMsR0FBRyxRQUFRLElBQUksb0NBQW9CLENBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1NBQzlGO2FBRUQ7WUFDQyxrRkFBa0Y7WUFDbEYsc0NBQXNDO1lBQ3RDLE9BQU8seUJBQWEsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNwRTtJQUNGLENBQUM7Q0FZRDtBQUlEOzs7R0FHRztBQUNILE1BQWEsWUFBYSxTQUFRLFNBQVM7SUFFMUMsWUFBb0IsS0FBd0I7UUFFM0MsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCx5RkFBeUY7SUFDekYsa0JBQWtCO0lBQ1gsTUFBTSxDQUFFLE1BQXVDO0lBRXRELENBQUM7SUFFRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUlELGtEQUFrRDtJQUNsRCxJQUFXLGNBQWMsS0FBYyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FDckQ7QUFuQ0Qsb0NBbUNDO0FBSUQ7O0dBRUc7QUFDSCxNQUFhLFNBQVUsU0FBUSxTQUFTO0lBRXZDLFlBQW9CLEtBQXdCLEVBQUUsWUFBa0M7UUFFL0UsS0FBSyxDQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsS0FBNkIsRUFBRSxRQUFnQjtRQUU5RCxLQUFLLENBQUMsT0FBTyxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGtCQUFXLENBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksU0FBUyxDQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBSUQsK0NBQStDO0lBQ3hDLGlCQUFpQjtRQUV2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUlELGtEQUFrRDtJQUNsRCxJQUFXLFdBQVcsS0FBYyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7Q0FtQmxEO0FBM0RELDhCQTJEQztBQUlEOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEsU0FBUztJQUVwQyxZQUFvQixLQUF3QixFQUFFLFlBQStCO1FBRTVFLEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUVkLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLEtBQTZCLEVBQUUsUUFBZ0I7UUFFOUQsS0FBSyxDQUFDLE9BQU8sQ0FBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFaEMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxrQkFBVyxDQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sQ0FBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUlELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFJRCxrREFBa0Q7SUFDbEQsSUFBVyxRQUFRLEtBQWMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBbUIvQztBQTNERCx3QkEyREM7QUFJRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLFNBQVM7SUFFMUMsWUFBb0IsUUFBcUIsRUFBRSxLQUF3QjtRQUVsRSxLQUFLLENBQUUsS0FBSyxDQUFDLENBQUM7UUFFZCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBSUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxLQUE2QixFQUFFLFFBQWdCO1FBRTlELEtBQUssQ0FBQyxPQUFPLENBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxZQUFZLEdBQUcseUJBQWEsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxZQUFZLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUlELCtDQUErQztJQUN4QyxpQkFBaUI7UUFFdkIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Q0FTRDtBQTVDRCxvQ0E0Q0M7QUFJRDs7R0FFRztBQUNILE1BQWEsT0FBUSxTQUFRLFNBQVM7SUFFckMsWUFBb0IsR0FBVyxFQUFFLEtBQXdCO1FBRXhELEtBQUssQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCwrQ0FBK0M7SUFDeEMsaUJBQWlCO1FBRXZCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQixDQUFDO0NBTUQ7QUE5QkQsMEJBOEJDOzs7Ozs7Ozs7Ozs7Ozs7QUMxakJELG1HQUFzRDtBQUN0RCx3RUFBMkU7QUFJM0U7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBYSxPQUFPO0lBRW5CLFlBQW9CLFFBQVcsRUFBRSxLQUF1QixFQUFFLFlBQW1DO1FBRTVGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXlCLEVBQUUsS0FBNkIsRUFBRSxRQUF1QjtRQUVoRyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGtCQUFXLENBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxPQUFPLENBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBSUQsbUNBQW1DO0lBQzVCLFdBQVc7UUFFakIsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEtBQUssOEJBQWlCLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbEYsQ0FBQztJQUlELGtHQUFrRztJQUNsRyx3Q0FBd0M7SUFDOUIsYUFBYTtRQUV0QixPQUFPLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFJSjs7OztPQUlHO0lBQ0ksUUFBUSxDQUFFLEtBQXNCLEVBQUUsU0FBbUI7UUFFM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBRSxJQUFJLENBQUMsT0FBTyxFQUFFLDhCQUFpQixDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQztJQUMzRyxDQUFDO0NBbUNEO0FBeEZELDBCQXdGQzs7Ozs7Ozs7Ozs7Ozs7O0FDekdELDJGQUEyRDtBQUMzRCx3RkFBdUU7QUFLdkU7O0dBRUc7QUFDSCxTQUFTLG1CQUFtQixDQUFFLEdBQVc7SUFFckMsYUFBYTtJQUNULElBQUksR0FBRyxHQUFHLENBQUMsRUFDWDtRQUNJLE9BQU8sQ0FBQyxLQUFLLENBQUUsa0RBQWtELEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekUsT0FBTyxNQUFNLENBQUM7S0FDakI7U0FDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDL0I7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFFLHdEQUF3RCxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQy9FLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0lBQ0wsVUFBVTtJQUVWLHVFQUF1RTtJQUN2RSxJQUFJLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsSUFBSSxJQUFJO1FBQ0osT0FBTyxJQUFJLENBQUM7U0FFaEI7UUFDSSxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzlFO0FBQ0wsQ0FBQztBQUlELFNBQVMsdUJBQXVCLENBQUUsQ0FBa0I7SUFFaEQsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLDBCQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVILENBQUM7QUFJRCxTQUFnQixXQUFXLENBQUUsQ0FBa0IsRUFBRSxDQUFrQixFQUFFLENBQWtCLEVBQUUsQ0FBbUI7SUFFeEcsQ0FBQyxHQUFHLHVCQUF1QixDQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUMsR0FBRyx1QkFBdUIsQ0FBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLEdBQUcsdUJBQXVCLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsMEJBQWMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3BFLENBQUM7QUFSRCxrQ0FRQztBQUlELFNBQWdCLFdBQVcsQ0FBRSxDQUFrQixFQUFFLENBQWtCLEVBQUUsQ0FBa0IsRUFBRSxDQUFtQjtJQUV4RyxDQUFDLEdBQUcsd0JBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsMEJBQWMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsMEJBQWMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsMEJBQWMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3BFLENBQUM7QUFSRCxrQ0FRQztBQUlELFNBQWdCLGFBQWEsQ0FBRSxDQUE4QixFQUFFLENBQWtCO0lBRTdFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsT0FBTyxXQUFXLENBQUUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25HLENBQUM7QUFKRCxzQ0FJQztBQUlEOztHQUVHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBaUIsQ0FBQztBQUVoRCwyQkFBMkI7QUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBRSxtQkFBTSxDQUFDLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUUsQ0FBQztBQUl6Rjs7Ozs7R0FLRztBQUNILFNBQWdCLGFBQWEsQ0FBRSxHQUF1QjtJQUVsRCxPQUFPLHlCQUFhLENBQUUsR0FBRyxFQUFFO1FBQ3ZCLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFFLG1CQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRSxVQUFVLEVBQUUsbUJBQW1CO0tBQ2xDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCxzQ0FNQzs7Ozs7Ozs7Ozs7Ozs7QUNuR0Q7O0dBRUc7O0FBc0xIOzs7R0FHRztBQUNRLGNBQU0sR0FDakI7SUFDSSxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLEdBQUcsRUFBcUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLE1BQU0sRUFBa0IsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLGNBQWMsRUFBVSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLGNBQWMsRUFBVSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxZQUFZLEVBQVksUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsT0FBTyxFQUFpQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxPQUFPLEVBQWlCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxLQUFLLEVBQW1CLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLGFBQWEsRUFBVyxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFNBQVMsRUFBZSxRQUFRO0lBQ2hDLG9CQUFvQixFQUFJLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsY0FBYyxFQUFVLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsS0FBSyxFQUFtQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxnQkFBZ0IsRUFBUSxRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLFlBQVksRUFBWSxRQUFRO0lBQ2hDLGNBQWMsRUFBVSxRQUFRO0lBQ2hDLGVBQWUsRUFBUyxRQUFRO0lBQ2hDLGlCQUFpQixFQUFPLFFBQVE7SUFDaEMsZUFBZSxFQUFTLFFBQVE7SUFDaEMsZUFBZSxFQUFTLFFBQVE7SUFDaEMsWUFBWSxFQUFZLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsUUFBUSxFQUFnQixRQUFRO0lBQ2hDLFdBQVcsRUFBYSxRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsYUFBYSxFQUFXLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsSUFBSSxFQUFvQixRQUFRO0lBQ2hDLElBQUksRUFBb0IsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsVUFBVSxFQUFjLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLFVBQVUsRUFBYyxRQUFRO0lBQ2hDLFFBQVEsRUFBZ0IsUUFBUTtJQUNoQyxRQUFRLEVBQWdCLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxTQUFTLEVBQWUsUUFBUTtJQUNoQyxJQUFJLEVBQW9CLFFBQVE7SUFDaEMsV0FBVyxFQUFhLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsR0FBRyxFQUFxQixRQUFRO0lBQ2hDLE9BQU8sRUFBaUIsUUFBUTtJQUNoQyxNQUFNLEVBQWtCLFFBQVE7SUFDaEMsU0FBUyxFQUFlLFFBQVE7SUFDaEMsTUFBTSxFQUFrQixRQUFRO0lBQ2hDLEtBQUssRUFBbUIsUUFBUTtJQUNoQyxVQUFVLEVBQWMsUUFBUTtJQUNoQyxXQUFXLEVBQWEsUUFBUTtJQUNoQyxhQUFhLEVBQVcsUUFBUTtDQUNuQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqVkYsc0ZBQXdDO0FBSXhDOztHQUVHO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsUUFBaUM7SUFFL0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0lBRWhCLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUVaLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxFQUM3QjtRQUNJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUM1QyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxRQUFRLEtBQUssYUFBYTtZQUMxQixDQUFDLElBQUksbUJBQW1CLENBQUUsT0FBTyxDQUFDLENBQUM7YUFDbEMsSUFBSSxRQUFRLEtBQUssV0FBVztZQUM3QixDQUFDLElBQUksaUJBQWlCLENBQUUsT0FBTyxDQUFDLENBQUM7YUFDaEMsSUFBSSxRQUFRLEtBQUssWUFBWTtZQUM5QixDQUFDLElBQUksa0JBQWtCLENBQUUsT0FBTyxDQUFDLENBQUM7YUFDakMsSUFBSSxRQUFRLEtBQUssS0FBSztZQUN2QixDQUFDLElBQUksZUFBZSxDQUFFLE9BQU8sQ0FBQyxDQUFDOztZQUUvQixDQUFDLElBQUksT0FBTyxDQUFDO1FBRWpCLENBQUMsSUFBSSxHQUFHO0tBQ1g7SUFFRCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDbkIsQ0FBQztBQTFCRCw0Q0EwQkM7QUFJRCxTQUFTLG1CQUFtQixDQUFFLEdBQTJDO0lBRXJFLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDakMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxjQUFjLENBQUMsYUFBYTtRQUNsRCxhQUFhLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxhQUFhO0tBQ3hELENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGlCQUFpQixDQUFFLEdBQXlDO0lBRWpFLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDakMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxTQUFTLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNyRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLFNBQVMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7S0FDakcsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsa0JBQWtCLENBQUUsR0FBMEM7SUFFbkUsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFFLEdBQUcsRUFBRTtRQUNqQyxPQUFPLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxhQUFhO0tBQ2pELENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGVBQWUsQ0FBRSxHQUF1QztJQUU3RCxPQUFPLFNBQVMsQ0FBQyxhQUFhLENBQUUsR0FBRyxFQUFFO1FBQ2pDLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsY0FBYyxFQUFFLEdBQUc7S0FDdEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMscUJBQXFCLENBQUUsR0FBaUM7SUFFN0QsT0FBTyxTQUFTLENBQUMsY0FBYyxDQUFFLEdBQUcsRUFBRTtRQUNsQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDN0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3pCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ3RELENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGtCQUFrQixDQUFFLEdBQWlDO0lBRTFELE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDakMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDM0IsY0FBYyxFQUFFLEdBQUc7S0FDdEIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUZELDJGQUEyQztBQUUzQyx3RkFBNEc7QUFJNUcsU0FBUywwQkFBMEIsQ0FBb0IsR0FBdUIsRUFDMUUsU0FBOEI7SUFFOUIsT0FBTyx5QkFBYSxDQUFFLEdBQUcsRUFBRTtRQUN2QixVQUFVLEVBQUUsMEJBQWE7UUFDekIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSw4QkFBOEIsQ0FBRSxDQUEyQixFQUFFLFNBQVMsQ0FBQztLQUMxRixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyw4QkFBOEIsQ0FBb0IsR0FBMkIsRUFDbEYsU0FBOEI7SUFFOUIsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RSxPQUFPLEdBQUcsMEJBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ3hGLENBQUM7QUFJRCxTQUFnQixzQkFBc0IsQ0FBRSxJQUFZLEVBQUUsS0FBc0IsRUFDeEUsWUFBa0M7SUFFbEMsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyx3QkFBWSxDQUFDLGFBQWEsQ0FBRSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RSxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUUsVUFBVSxFQUFFLDBCQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ25HLE9BQU8sR0FBRyxJQUFJLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNyRCxDQUFDO0FBTkQsd0RBTUM7QUFJRCxTQUFnQixzQkFBc0IsQ0FBRSxJQUFZLEVBQUUsS0FBMEIsRUFDNUUsTUFBNEIsRUFBRSxHQUFnQixFQUM5QyxZQUFrQztJQUVsQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLDRCQUFnQixDQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMxRCxJQUFJLFlBQVksR0FBRyxLQUFLLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLElBQUksWUFBWSxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEcsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBRSxVQUFVLENBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFFLFVBQVUsRUFBRSwwQkFBYyxDQUFDLENBQUMsQ0FBQztJQUNuRyxPQUFPLEdBQUcsSUFBSSxJQUFJLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDdEQsQ0FBQztBQVZELHdEQVVDO0FBSUQsU0FBZ0IscUJBQXFCLENBQUUsS0FBeUIsRUFBRSxHQUFzQixFQUNwRixZQUFrQztJQUVsQyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsd0JBQVksQ0FBQyxhQUFhLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzVFLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSw0QkFBZ0IsQ0FBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUQsSUFBSSxZQUFZLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN0RSxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxFQUFFLENBQUMsMEJBQTBCLENBQUUsVUFBVSxFQUFFLHdCQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLE9BQU8sa0JBQWtCLFlBQVksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDN0QsQ0FBQztBQVJELHNEQVFDO0FBSUQsU0FBUyxzQkFBc0IsQ0FBRSxHQUFtQjtJQUVoRCxPQUFPLHlCQUFhLENBQUUsR0FBRyxFQUFFO1FBQ3ZCLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcseUJBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSwwQkFBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtLQUNqRixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBZ0IsaUJBQWlCLENBQUUsSUFBc0I7SUFFckQsSUFBSSxZQUFZLEdBQUcseUJBQWEsQ0FBRSxJQUFJLEVBQUU7UUFDcEMsYUFBYSxFQUFFLHNCQUFzQjtRQUNyQyxjQUFjLEVBQUUsR0FBRztLQUN0QixDQUFDO0lBRUYsT0FBTyxjQUFjLFlBQVksR0FBRyxDQUFDO0FBQ3pDLENBQUM7QUFSRCw4Q0FRQzs7Ozs7Ozs7Ozs7Ozs7O0FDcEZELHNGQUF3QztBQUt4QyxTQUFTLG1CQUFtQixDQUFFLEdBQXNDO0lBRWhFLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFJRCxTQUFTLHFCQUFxQixDQUFFLEdBQWlDO0lBRTdELE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDdEQsQ0FBQztBQUlELFNBQVMseUJBQXlCLENBQUUsR0FBcUM7SUFFckUsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztBQUN2RCxDQUFDO0FBZ0NEOztHQUVHO0FBQ0gsU0FBZ0Isa0JBQWtCLENBQUUsS0FBNEI7SUFFNUQsSUFBSSxDQUFDLEtBQUs7UUFDTixPQUFPLElBQUksQ0FBQztTQUNYLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDekIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFFdEYsT0FBTyx3QkFBd0IsQ0FBRSxLQUFLLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBUkQsZ0RBUUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLHdCQUF3QixDQUFFLEtBQWtDO0lBRXhFLElBQUksQ0FBQyxLQUFLO1FBQ04sT0FBTyxJQUFJLENBQUM7SUFFaEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztJQUNqQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFFM0IsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDO0lBQ3pCLElBQUksU0FBUztRQUNULEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFFbkQsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQzFCO1FBQ0ksSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUN4QixTQUFTO1FBRWIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ2YsS0FBSyxDQUFDLElBQUksQ0FBRSxJQUFJLG9CQUFvQixDQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDNUU7SUFFRCxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDM0QsQ0FBQztBQXZCRCw0REF1QkM7QUFJRDs7R0FFRztBQUNILFNBQWdCLG9CQUFvQixDQUFFLFdBQW1CLEVBQUUsT0FBWSxFQUFFLFNBQW1CO0lBRXhGLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxJQUFJLElBQUk7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFFaEIsMkJBQTJCO0lBQzNCLElBQUksSUFBSSxHQUFxQixhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFeEQsSUFBSSxlQUFlLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBRSxXQUFXLENBQUMsQ0FBQztJQUUxRCxpR0FBaUc7SUFDakcsSUFBSSxZQUFZLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDNUUsSUFBSSxZQUFZLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxZQUFZO1FBQ3RELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUU1QyxJQUFJLE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEcsSUFBSSxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JHLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQzVFO1FBQ0ksSUFBSSxFQUFFLEdBQUcsK0JBQStCLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELElBQUksRUFBRSxHQUFHLCtCQUErQixDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMvRCxPQUFPLEdBQUcsRUFBRSxPQUFPLGVBQWUsT0FBTyxFQUFFLEVBQUUsQ0FBQztLQUNqRDtTQUVEO1FBQ0ksSUFBSSxDQUFDLEdBQUcsK0JBQStCLENBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0tBQ3BEO0FBQ0wsQ0FBQztBQTVCRCxvREE0QkM7QUFJRCxTQUFTLCtCQUErQixDQUFFLE9BQVksRUFBRSxPQUF5QjtJQUU3RSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQ2YsT0FBTyxFQUFFLENBQUM7SUFFZCxJQUFJLE9BQU87UUFDUCxPQUFPLE9BQU8sQ0FBRSxPQUFPLENBQUMsQ0FBQztTQUN4QixJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVE7UUFDaEMsT0FBTyxPQUFPLENBQUM7U0FDZCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDO1FBQzVCLE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUMsQ0FBQzs7UUFFekMsT0FBTyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEMsQ0FBQztBQUlELElBQUksYUFBYSxHQUNqQjtJQUNJLFdBQVcsRUFBRSxtQkFBbUI7SUFDaEMsY0FBYyxFQUFFLG1CQUFtQjtJQUNuQyxjQUFjLEVBQUUsbUJBQW1CO0lBQ25DLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUN6QyxVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDOUMsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDekQsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLFVBQVUsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUM5QyxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtJQUNqRSxhQUFhLEVBQUUseUJBQXlCO0lBQ3hDLGFBQWEsRUFBRSx5QkFBeUI7SUFDeEMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7SUFDeEQsUUFBUSxFQUFFLHFCQUFxQjtJQUMvQixRQUFRLEVBQUUscUJBQXFCO0NBQ2xDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLRixpR0FBNEU7QUFDNUUsK0VBQW1DO0FBQ25DLHdGQUE0QztBQUk1QyxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGdCQUFnQjtBQUNoQixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7O0dBSUc7QUFDSCxTQUFnQixjQUFjLENBQUUsUUFBZ0IsRUFBRSxNQUEyQjtJQUU1RSxJQUFJLE1BQU0sR0FBYSxRQUFRLENBQUMsS0FBSyxDQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMxQixJQUFJLEdBQUcsR0FBYSxFQUFFLENBQUM7SUFDdkIsS0FBSyxJQUFJLEtBQUssSUFBSSxNQUFNLEVBQ3hCO1FBQ0MsSUFBSSxhQUFhLEVBQ2pCO1lBQ0MsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQyxJQUFJLEtBQUssSUFBSSxNQUFNLENBQUMsTUFBTTtnQkFDekIsU0FBUztZQUVWLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLElBQUksSUFBSSxJQUFJO2dCQUNmLFNBQVM7aUJBQ0wsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO2dCQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNaLElBQUksSUFBSSxZQUFZLFdBQUksRUFDN0I7Z0JBQ0MsSUFBSSxJQUFJLFlBQVksb0JBQU87b0JBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNoQixJQUFJLElBQUksWUFBWSxzQkFBUztvQkFDakMsR0FBRyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQ3BCLElBQUksSUFBSSxZQUFZLG1CQUFNO29CQUM5QixHQUFHLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDcEIsSUFBSSxJQUFJLFlBQVkseUJBQVk7b0JBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzlCOztnQkFFQSxHQUFHLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQzVCO2FBQ0ksSUFBSSxLQUFLO1lBQ2IsR0FBRyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQztRQUVsQixhQUFhLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDL0I7SUFFRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQXZDRCx3Q0F1Q0M7QUFJRDs7R0FFRztBQUNILFNBQWdCLG9CQUFvQixDQUFFLFVBQWtCLEVBQUUsR0FBUTtJQUVqRSxJQUFJLENBQUMsVUFBVTtRQUNkLE9BQU8sRUFBRSxDQUFDO0lBRVgsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFFLE1BQU0sQ0FBQztRQUNqQyxPQUFPLHlCQUFhLENBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztRQUVuRSxPQUFPLHlCQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQVRELG9EQVNDOzs7Ozs7Ozs7Ozs7Ozs7QUN0RUQsd0ZBSW9CO0FBQ3BCLDJGQUEyQztBQUszQyxrREFBa0Q7QUFDbEQsU0FBUyw4QkFBOEIsQ0FBRSxHQUErQixJQUFZLE9BQU8saUNBQXFCLENBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUk5SCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDBEQUEwRDtBQUMxRCxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HLFNBQVMsMEJBQTBCLENBQUUsR0FBZ0M7SUFFakUsT0FBTywwQkFBYyxDQUFFLEdBQUcsRUFBRTtRQUN4QixDQUFDLFVBQVUsRUFBRSx1QkFBVyxDQUFDLGFBQWEsQ0FBQztRQUN2QyxDQUFDLE1BQU0sRUFBRSw4QkFBOEIsQ0FBQztRQUN4QyxDQUFDLE9BQU8sRUFBRSx1QkFBVyxDQUFDLGFBQWEsQ0FBQztRQUNwQyxDQUFDLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxXQUFXO1FBQ1gsTUFBTTtRQUNOLE9BQU87UUFDUCxNQUFNO0tBQ1QsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMseUJBQXlCLENBQUUsR0FBMEM7SUFFMUUsT0FBTyx5QkFBYSxDQUFFLEdBQUcsRUFBRTtRQUN2QixVQUFVLEVBQUUsMEJBQTBCO0tBQ3pDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLHNCQUFzQixDQUFFLEdBQTBEO0lBRXZGLE9BQU8seUJBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDdkIsVUFBVSxFQUFFLHlCQUF5QjtRQUNyQyxTQUFTLEVBQUUsd0JBQXdCO0tBQ3RDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLHlCQUF5QixDQUFFLEdBQVc7SUFFM0MsT0FBTyxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQzNCLENBQUM7QUFJRCxTQUFTLHdCQUF3QixDQUFFLEdBQVU7SUFFekMsT0FBTyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO1FBQzdCLENBQUMsQ0FBQyw4QkFBOEIsQ0FBRSxHQUF1QyxDQUFDO1FBQzFFLENBQUMsQ0FBQyx5QkFBYSxDQUFFLEdBQUcsRUFBRSw4QkFBOEIsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNuRSxDQUFDO0FBSUQsU0FBUyw4QkFBOEIsQ0FBRSxHQUErQztJQUVwRixPQUFPLHlCQUFhLENBQUUsR0FBRyxFQUFFO1FBQ3ZCLFVBQVUsRUFBRSx5QkFBeUI7UUFDckMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBRVgsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDaEI7Z0JBQ0kseUJBQXlCO2dCQUV6QixhQUFhO2dCQUNULElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ1QsT0FBTyxDQUFDLEtBQUssQ0FBRSw4RUFBOEUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFDcEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixPQUFPLENBQUMsS0FBSyxDQUFFLHVFQUF1RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0RyxVQUFVO2dCQUVWLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO2FBQzlEO2lCQUVEO2dCQUNJLDBCQUEwQjtnQkFFMUIsYUFBYTtnQkFDVCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFFLG1HQUFtRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUksVUFBVTtnQkFFVixPQUFPLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUMxRDtRQUNMLENBQUM7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUywyQkFBMkIsQ0FBRSxHQUFpQztJQUVuRSxPQUFPLDBCQUFjLENBQUUsR0FBRyxFQUFFO1FBQ3hCLENBQUMsT0FBTyxFQUFFLDBCQUFhLENBQUM7UUFDeEIsT0FBTztRQUNQLENBQUMsVUFBVSxFQUFFLDRCQUFnQixDQUFDO1FBQzlCLENBQUMsTUFBTSxFQUFFLHlCQUFhLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDO1FBQ3hELFFBQVE7UUFDUixZQUFZO1FBQ1osUUFBUTtRQUNSLE1BQU07S0FDVCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUywwQkFBMEIsQ0FBRSxHQUEyQztJQUU1RSxPQUFPLHlCQUFhLENBQUUsR0FBRyxFQUFFO1FBQ3ZCLFVBQVUsRUFBRSwwQkFBYTtRQUN6QixVQUFVLEVBQUUsMkJBQTJCO0tBQzFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLDhCQUE4QixDQUFFLEdBQStDO0lBRXBGLE9BQU8seUJBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDdkIsVUFBVSxFQUFFLHlCQUFhLENBQUMsYUFBYTtRQUN2QyxTQUFTLEVBQUUseUJBQWEsQ0FBQywyQkFBMkI7S0FDdkQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQWdCLDBCQUEwQixDQUFFLEdBQWdDO0lBRXhFLE9BQU8sMEJBQWMsQ0FBRSxHQUFHLEVBQUU7UUFDeEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2hDLENBQUMsR0FBRyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2xDLENBQUMsR0FBRyxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2xDLENBQUMsTUFBTSxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDO1FBQ3JDLENBQUMsUUFBUSxFQUFFLHlCQUFhLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLENBQUMsT0FBTyxFQUFFLDBCQUFhLENBQUM7S0FDM0IsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVZELGdFQVVDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLDBCQUEwQixDQUFFLEdBQXdCO0lBRXpELE9BQU8seUJBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDdkIsYUFBYSxFQUFFLHlCQUFhLENBQUMsYUFBYTtRQUMxQyxPQUFPLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0tBQ3ZDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQWdCLG9CQUFvQixDQUFFLEdBQWdEO0lBRWxGLE9BQU8seUJBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDdkIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBRVgsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QjtnQkFDSSwrQkFBK0I7Z0JBQy9CLElBQUksQ0FBQyxHQUFHLHlCQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMvRCxDQUFDLElBQUksS0FBSyxDQUFDO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLHlCQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLHlCQUFhLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3JFO2lCQUVEO2dCQUNJLGlDQUFpQztnQkFDakMsT0FBTyx5QkFBYSxDQUFFLENBQUMsRUFBRSx5QkFBYSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM5RDtRQUNMLENBQUM7UUFDRCxPQUFPLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0tBQ3ZDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFwQkQsb0RBb0JDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBRSxHQUEwQztJQUUvRCxPQUFPLHlCQUFhLENBQUUsR0FBRyxFQUFFO1FBQ3ZCLFVBQVUsRUFBRSx5QkFBYSxDQUFDLGFBQWE7UUFDdkMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBRVgsSUFBSSxHQUFHLEdBQWEsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7Z0JBQ1osR0FBRyxDQUFDLElBQUksQ0FBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJO2dCQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUUseUJBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUk7Z0JBQ1osR0FBRyxDQUFDLElBQUksQ0FBRSwwQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxPQUFPLEVBQUUsMEJBQWE7S0FDekIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxlQUFlLENBQUUsR0FBMkM7SUFFakUsT0FBTyx5QkFBYSxDQUFFLEdBQUcsRUFBRTtRQUN2QixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLHlCQUFhLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsRSxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBRSxHQUEwQztJQUUvRCxpRkFBaUY7SUFDakYsd0ZBQXdGO0lBQ3hGLHNGQUFzRjtJQUN0Riw2REFBNkQ7SUFDN0QsT0FBTyx5QkFBYSxDQUFFLEdBQUcsRUFBRTtRQUN2QixTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDZCxPQUFPLEVBQUUsQ0FBQztpQkFDVCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDbkIsT0FBTyx5QkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVE7Z0JBQzdCLE9BQU8seUJBQWEsQ0FBRSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFDLENBQUM7aUJBRXBEO2dCQUNJLE9BQU8seUJBQWEsQ0FBRSxDQUFDLEVBQUU7b0JBQ3JCLGFBQWEsRUFBRSxjQUFjO29CQUM3QixjQUFjLEVBQUUsR0FBRztpQkFDdEIsQ0FBQzthQUNMO1FBQ0wsQ0FBQztLQUNKLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsWUFBWSxDQUFFLEdBQXdDO0lBRTNELE9BQU8seUJBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDdkIsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBRVgsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUM7Z0JBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBQyxDQUFDOztnQkFFcEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcseUJBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUNELE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsZUFBZSxDQUFFLEdBQVE7SUFFOUIsT0FBTywwQkFBYyxDQUFFLEdBQUcsRUFBRTtRQUN4QixDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQztRQUM1QixTQUFTO1FBQ1QsUUFBUTtRQUNSLFNBQVM7UUFDVCxDQUFDLE1BQU0sRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQztRQUNyQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRyxHQUFHLENBQUM7UUFDdkMsUUFBUTtLQUNYLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxTQUFTLGlCQUFpQixDQUFFLEdBQXdDO0lBRWhFLE9BQU8seUJBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDdkIsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxHQUFHLHdCQUFZLENBQUMsYUFBYSxDQUFFLENBQUMsQ0FBQztLQUMvRCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUyx5QkFBeUIsQ0FBRSxHQUFrRDtJQUVsRixPQUFPLDBCQUFjLENBQUUsR0FBRyxFQUFFO1FBQ3hCLE1BQU07UUFDTixPQUFPO1FBQ1AsQ0FBQyxPQUFPLEVBQUUsMEJBQWEsQ0FBQztRQUN4QixDQUFDLFdBQVcsRUFBRSx5QkFBYSxDQUFDLGFBQWEsQ0FBQztLQUM3QyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQsU0FBUywyQkFBMkIsQ0FBRSxHQUEyQztJQUU3RSxPQUFPLDBCQUFjLENBQUUsR0FBRyxFQUFFO1FBQ3hCLENBQUMsVUFBVSxFQUFFLHVCQUFXLENBQUM7UUFDekIsQ0FBQyxVQUFVLEVBQUUsdUJBQVcsQ0FBQyxhQUFhLENBQUM7UUFDdkMsQ0FBQyxNQUFNLEVBQUUsOEJBQThCLENBQUM7UUFDeEMsQ0FBQyxPQUFPLEVBQUUsdUJBQVcsQ0FBQyxhQUFhLENBQUM7S0FDdkMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUlELFNBQVMsMEJBQTBCLENBQUUsR0FBMkM7SUFFNUUsT0FBTyx5QkFBYSxDQUFFLEdBQUcsRUFBRTtRQUN2QixVQUFVLEVBQUUsMkJBQTJCO0tBQzFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLG9DQUFvQztBQUNwQyxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7Ozs7R0FNRztBQUNILFNBQWdCLGNBQWMsQ0FBRSxNQUEyQixFQUFFLE1BQTJCO0lBRXBGLElBQUksQ0FBQyxNQUFNO1FBQ1AsT0FBTyxNQUFNLENBQUM7SUFFbEIsNkZBQTZGO0lBQzdGLCtDQUErQztJQUMvQyxJQUFJLENBQUMsTUFBTSxFQUNYO1FBQ0ksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0lBRUQseUZBQXlGO0lBQ3pGLHNEQUFzRDtJQUN0RCxJQUFJLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLENBQUMsY0FBYyxFQUN6QztRQUNJLE1BQU0sQ0FBQyxNQUFNLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9CLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0lBRUQsMEJBQTBCO0lBQzFCLElBQUksaUJBQWlCLEVBQ3JCO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUUsaUJBQWlCLENBQUMsQ0FBQztLQUN4RztJQUVELDZCQUE2QjtJQUM3QixJQUFJLGNBQWMsRUFDbEI7UUFDSSxJQUFJLGNBQWMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUUsY0FBYyxDQUFDLENBQUM7S0FDM0Y7SUFFRCw0Q0FBNEM7SUFDL0MsS0FBSyxJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQzNCO1FBQ08sSUFBSSxRQUFRLEtBQUssR0FBRyxJQUFJLFFBQVEsS0FBSyxJQUFJO1lBQ3JDLFNBQVM7O1lBRVQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM5QztJQUVFLE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFoREQsd0NBZ0RDO0FBSUQsK0RBQStEO0FBQy9ELFNBQWdCLGdCQUFnQixDQUFFLFFBQTZCO0lBRTNELElBQUksQ0FBQyxRQUFRO1FBQ1QsT0FBTyxFQUFFLENBQUM7SUFFZCxJQUFJLFFBQVEsR0FBdUIsSUFBSSxDQUFDO0lBQ3hDLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUNqQjtRQUNJLGtHQUFrRztRQUNsRyxRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQVUsQ0FBQztRQUM3QixJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUF3QixDQUFDO1FBQ3RELElBQUksT0FBTyxVQUFVLEtBQUssUUFBUTtZQUM5QixRQUFRLENBQUMsR0FBRyxDQUFFLFVBQVUsQ0FBQyxDQUFDOztZQUUxQixVQUFVLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUyxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ25EO0lBRUQsSUFBSSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQzFCLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxFQUM3QjtRQUNPLElBQUksUUFBUSxLQUFLLEdBQUc7WUFDaEIsU0FBUztRQUNiLElBQUksUUFBUSxLQUFLLElBQUksRUFDckI7WUFDSSw4RUFBOEU7WUFDOUUsaUNBQWlDO1lBQ2pDLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQW9DLENBQUM7WUFDcEUsS0FBSyxJQUFJLFNBQVMsSUFBSSxPQUFPLEVBQzdCO2dCQUNJLElBQUksQ0FBQyxTQUFTO29CQUNWLFNBQVM7Z0JBRWIsR0FBRyxDQUFDLElBQUksQ0FBRSxrQkFBa0IsQ0FBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNwRDtTQUNKO2FBRUQ7WUFDSSxnREFBZ0Q7WUFDaEQsR0FBRyxDQUFDLElBQUksQ0FBRSxpQkFBaUIsQ0FBRSxRQUEyQixFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckUsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO0tBQ1A7SUFFRSwyRUFBMkU7SUFDM0UsT0FBTyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUMxRCxDQUFDO0FBN0NELDRDQTZDQztBQUlEOzs7O0dBSUc7QUFDSCxTQUFTLGtCQUFrQixDQUFFLE9BQXNDLEVBQUUsU0FBbUI7SUFFcEYsSUFBSSxDQUFDLE9BQU87UUFDUixPQUFPLEVBQUUsQ0FBQztJQUVkLElBQUksT0FBZSxDQUFDO0lBQ3BCLElBQUksUUFBZ0IsQ0FBQztJQUNyQixJQUFJLEtBQVUsQ0FBQztJQUNmLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ3hCO1FBQ0ksT0FBTyxHQUFJLE9BQU8sQ0FBQyxDQUFDLENBQWEsQ0FBQyxPQUFPLENBQUM7UUFDMUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDL0IsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDckI7U0FFRDtRQUNJLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU87WUFDUixPQUFPLEVBQUUsQ0FBQzthQUNULElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUM5QixPQUFPLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUU3QixRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1FBRWQsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN0QjtJQUVELElBQUksUUFBUSxHQUFHLGlCQUFpQixDQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLElBQUksUUFBUSxFQUFFLENBQUM7QUFDM0QsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLGlCQUFpQixDQUM3QixRQUFnQixFQUFFLE9BQVksRUFBRSxTQUFtQjtJQUVuRCxJQUFJLENBQUMsUUFBUTtRQUNULE9BQU8sRUFBRSxDQUFDO0lBRWQsMkNBQTJDO0lBQzNDLElBQUksSUFBSSxHQUFRLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTdDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSTtRQUNoQixDQUFDLENBQUMseUJBQWEsQ0FBRSxPQUFPLENBQUM7UUFDekIsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVE7WUFDdEIsQ0FBQyxDQUFDLHlCQUFhLENBQUUsT0FBTyxFQUFFLElBQTRCLENBQUM7WUFDdkQsQ0FBQyxDQUFFLElBQXlCLENBQUUsT0FBTyxDQUFDLENBQUM7SUFFL0MsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVM7UUFDdkIsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUV6QixPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLHVCQUFXLENBQUUsUUFBUSxDQUFDLElBQUksUUFBUSxFQUFFLENBQUM7QUFDMUUsQ0FBQztBQW5CRCw4Q0FtQkM7QUFrQkQsK0ZBQStGO0FBQy9GLDhDQUE4QztBQUM5QyxJQUFJLG1CQUFtQixHQUFHLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBSWxEOzs7R0FHRztBQUNILE1BQU0sa0JBQWtCLEdBQ3hCO0lBQ0ksU0FBUyxFQUFFO1FBQ1AsVUFBVSxFQUFFLDBCQUEwQjtRQUN0QyxPQUFPLEVBQUUseUJBQXlCO1FBQ2xDLGNBQWMsRUFBRSxHQUFHO0tBQ3RCO0lBQ0QsY0FBYyxFQUFFLHVCQUFXLENBQUMsMkJBQTJCO0lBQ3ZELGlCQUFpQixFQUFFLHVCQUFXLENBQUMsMkJBQTJCO0lBQzFELHVCQUF1QixFQUFFLG1CQUFtQjtJQUM1QyxpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMsYUFBYSxFQUFFLG1CQUFtQjtJQUNsQyxrQkFBa0IsRUFBRSxtQkFBbUI7SUFDdkMsdUJBQXVCLEVBQUUsc0JBQXNCO0lBRS9DLFVBQVUsRUFBRTtRQUNSLFVBQVUsRUFBRSwwQkFBYTtRQUN6QixVQUFVLEVBQUUsMkJBQTJCO1FBQ3ZDLE9BQU8sRUFBRSwwQkFBMEI7UUFDbkMsYUFBYSxFQUFFLDBCQUEwQjtRQUN6QyxjQUFjLEVBQUUsR0FBRztLQUN0QjtJQUNELG9CQUFvQixFQUFFLG1CQUFtQjtJQUN6QyxtQkFBbUIsRUFBRSxtQkFBbUI7SUFDeEMsY0FBYyxFQUFFLG1CQUFtQjtJQUNuQyxlQUFlLEVBQUUsMEJBQWE7SUFDOUIsZ0JBQWdCLEVBQUUsbUJBQW1CO0lBQ3JDLGtCQUFrQixFQUFFLDhCQUE4QjtJQUNsRCxnQkFBZ0IsRUFBRSxtQkFBbUI7SUFDckMsY0FBYyxFQUFFO1FBQ1osVUFBVSxFQUFFLHlCQUFhLENBQUMsYUFBYTtRQUN2QyxhQUFhLEVBQUUsOEJBQThCO1FBQzdDLGNBQWMsRUFBRSxHQUFHO0tBQ3RCO0lBQ0QsYUFBYSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUMxQyxNQUFNLEVBQUUsY0FBYztJQUN0QixjQUFjLEVBQUUsY0FBYztJQUM5QixtQkFBbUIsRUFBRSwwQkFBYTtJQUNsQyxtQkFBbUIsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDaEQsZ0JBQWdCLEVBQUUsY0FBYztJQUNoQyxxQkFBcUIsRUFBRSwwQkFBYTtJQUNwQyxxQkFBcUIsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDbEQsWUFBWSxFQUFFLGNBQWM7SUFDNUIsaUJBQWlCLEVBQUUsMEJBQWE7SUFDaEMsc0JBQXNCLEVBQUUsMEJBQTBCO0lBQ2xELHVCQUF1QixFQUFFLDBCQUEwQjtJQUNuRCxpQkFBaUIsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDOUMsV0FBVyxFQUFFO1FBQ1QsYUFBYSxFQUFFLDBCQUFhO1FBQzVCLE9BQU8sRUFBRSwwQkFBYTtLQUN6QjtJQUNELGVBQWUsRUFBRSxjQUFjO0lBQy9CLG9CQUFvQixFQUFFLDBCQUFhO0lBQ25DLG9CQUFvQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNqRCxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDLHNCQUFzQixFQUFFLDBCQUFhO0lBQ3JDLHNCQUFzQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNuRCxVQUFVLEVBQUUsY0FBYztJQUMxQixlQUFlLEVBQUUsMEJBQWE7SUFDOUIsZUFBZSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUM1QyxZQUFZLEVBQUUsb0JBQW9CO0lBQ2xDLFdBQVcsRUFBRSxjQUFjO0lBQzNCLGdCQUFnQixFQUFFLDBCQUFhO0lBQy9CLGdCQUFnQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUM3QyxhQUFhLEVBQUUseUJBQWEsQ0FBQywyQkFBMkI7SUFDeEQsU0FBUyxFQUFFLGNBQWM7SUFDekIsY0FBYyxFQUFFLDBCQUFhO0lBQzdCLG1CQUFtQixFQUFFLDBCQUEwQjtJQUMvQyxvQkFBb0IsRUFBRSwwQkFBMEI7SUFDaEQsY0FBYyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUMzQyxXQUFXLEVBQUUseUJBQWEsQ0FBQywyQkFBMkI7SUFDdEQsTUFBTSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNuQyxTQUFTLEVBQUU7UUFDUCxVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLGNBQWMsRUFBRSxHQUFHO0tBQ3RCO0lBRUQsVUFBVSxFQUFFLDBCQUFhO0lBQ3pCLElBQUksRUFBRztRQUNILFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEseUJBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsRUFBRTtLQUN6RTtJQUNELEtBQUssRUFBRSwwQkFBYTtJQUNwQixTQUFTLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ3RDLFVBQVUsRUFBRSxjQUFjO0lBQzFCLGVBQWUsRUFBRSwwQkFBYTtJQUM5QixlQUFlLEVBQUUseUJBQWE7SUFDOUIsZUFBZSxFQUFFLHlCQUFhLENBQUMsMkJBQTJCO0lBQzFELE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFdBQVcsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDeEMsTUFBTSxFQUFFLGNBQWM7SUFFdEIsSUFBSSxFQUFFLDBCQUFhO0lBQ25CLFdBQVcsRUFBRSwwQkFBYyxDQUFDLGFBQWE7SUFDekMsSUFBSSxFQUFFLFlBQVk7SUFDbEIsU0FBUyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUN0QyxVQUFVLEVBQUUsMEJBQWE7SUFDekIsSUFBSSxFQUFFO1FBQ0YsVUFBVSxFQUFFLGVBQWU7S0FDOUI7SUFDRCxRQUFRLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ3JDLFNBQVMsRUFBRSxpQkFBaUI7SUFFNUIsR0FBRyxFQUFFLHlCQUFhLENBQUMsMkJBQTJCO0lBQzlDLGFBQWEsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDMUMsVUFBVSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUV2QyxNQUFNLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBRW5DLFVBQVUsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFFdkMsSUFBSSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNqQyxhQUFhLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQzFDLGFBQWEsRUFBRSwwQkFBYTtJQUU1QixNQUFNLEVBQUUseUJBQWEsQ0FBQywyQkFBMkI7SUFDakQsY0FBYyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUMzQyxnQkFBZ0IsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDN0MsWUFBWSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUN6QyxlQUFlLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQzVDLGlCQUFpQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUM5QyxVQUFVLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ3ZDLFdBQVcsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDeEMsU0FBUyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUN0QyxZQUFZLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ3pDLFNBQVMsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDdEMsYUFBYSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUMxQyxRQUFRLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ3JDLE9BQU8sRUFBRSwwQkFBYyxDQUFDLGFBQWE7SUFDckMsWUFBWSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUN6QyxTQUFTLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ3RDLGFBQWEsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDN0MsUUFBUSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNsQyxPQUFPLEVBQUUsMEJBQWMsQ0FBQyxhQUFhO0lBRXJDLGNBQWMsRUFBRSw0QkFBZ0I7SUFDaEMsT0FBTyxFQUFFLGNBQWM7SUFDdkIsWUFBWSxFQUFFLDBCQUFhO0lBQzNCLGFBQWEsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDMUMsWUFBWSxFQUFFLHlCQUFhO0lBRTNCLE9BQU8sRUFBRSx5QkFBYSxDQUFDLDJCQUEyQjtJQUNsRCxlQUFlLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQzVDLGlCQUFpQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUM5QyxhQUFhLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQzFDLGdCQUFnQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUM3QyxrQkFBa0IsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDL0MsV0FBVyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUN4QyxZQUFZLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ3pDLFVBQVUsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDdkMsV0FBVyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUN4QyxpQkFBaUIsRUFBRTtRQUNmLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkM7SUFFRCxNQUFNLEVBQUU7UUFDSixhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRztLQUMvQjtJQUVELEtBQUssRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDbEMsTUFBTSxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUVuQyxZQUFZLEVBQUUseUJBQWEsQ0FBQywyQkFBMkI7SUFDdkQsaUJBQWlCLEVBQUUseUJBQWEsQ0FBQywyQkFBMkI7SUFDNUQsb0JBQW9CLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ2pELHNCQUFzQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNuRCxrQkFBa0IsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDL0Msa0JBQWtCLEVBQUUseUJBQWEsQ0FBQywyQkFBMkI7SUFDN0QscUJBQXFCLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ2xELHVCQUF1QixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNwRCxnQkFBZ0IsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDN0MsaUJBQWlCLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQzlDLGVBQWUsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDNUMsYUFBYSxFQUFFLHlCQUFhLENBQUMsMkJBQTJCO0lBQ3hELGtCQUFrQixFQUFFLHlCQUFhLENBQUMsMkJBQTJCO0lBQzdELHFCQUFxQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNsRCx1QkFBdUIsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDcEQsbUJBQW1CLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ2hELG1CQUFtQixFQUFFLHlCQUFhLENBQUMsMkJBQTJCO0lBQzlELHNCQUFzQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNuRCx3QkFBd0IsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDckQsaUJBQWlCLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQzlDLGtCQUFrQixFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUMvQyxnQkFBZ0IsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDN0MsV0FBVyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUN4QyxTQUFTLEVBQUUsMEJBQWE7SUFFeEIsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNwQyxrQkFBa0IsRUFBRTtRQUNoQixVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtLQUNqQztJQUNELGNBQWMsRUFBRTtRQUNaLFVBQVUsRUFBRSwwQkFBYTtRQUN6QixVQUFVLEVBQUUseUJBQXlCO0tBQ3hDO0lBQ0QsbUJBQW1CLEVBQUUsMEJBQWE7SUFDbEMsdUJBQXVCLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBQ3BELFlBQVksRUFBRTtRQUNWLGFBQWEsRUFBRSwwQkFBYTtLQUMvQjtJQUNELGlCQUFpQixFQUFFLDBCQUFhO0lBQ2hDLFVBQVUsRUFBRTtRQUNSLFVBQVUsRUFBRSx5QkFBYSxDQUFDLGFBQWE7UUFDdkMsYUFBYSxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUM3QztJQUNELFVBQVUsRUFBRTtRQUNSLFVBQVUsRUFBRSwwQkFBMEI7UUFDdEMsY0FBYyxFQUFFLEdBQUc7S0FDdEI7SUFDRCxjQUFjLEVBQUUsMEJBQWMsQ0FBQyxhQUFhO0lBQzVDLEdBQUcsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDaEMsZUFBZSxFQUFFO1FBQ2IsT0FBTyxFQUFFLHlCQUFhLENBQUMsYUFBYTtLQUN2QztJQUNELFVBQVUsRUFBRTtRQUNSLFVBQVUsRUFBRSwyQkFBMkI7UUFDdkMsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxjQUFjLEVBQUUsR0FBRztLQUN0QjtJQUNELGVBQWUsRUFBRTtRQUNiLE9BQU8sRUFBRSx1QkFBVyxDQUFDLGFBQWE7UUFDbEMsY0FBYyxFQUFFLEdBQUc7S0FDdEI7SUFDRCxrQkFBa0IsRUFBRTtRQUNoQixPQUFPLEVBQUUsdUJBQVcsQ0FBQyxhQUFhO1FBQ2xDLGNBQWMsRUFBRSxHQUFHO0tBQ3RCO0lBQ0Qsd0JBQXdCLEVBQUUsc0JBQXNCO0lBQ2hELFNBQVMsRUFBRTtRQUNQLE9BQU8sRUFBRSx5QkFBYSxDQUFDLGFBQWE7S0FDdkM7SUFFRCxhQUFhLEVBQUU7UUFDWCxVQUFVLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0tBQzFDO0lBRUQsS0FBSyxFQUFFLHlCQUFhLENBQUMsYUFBYTtJQUNsQyxVQUFVLEVBQUU7UUFDUixVQUFVLEVBQUUsdUJBQVc7S0FDMUI7SUFDRCxXQUFXLEVBQUUseUJBQWEsQ0FBQyxhQUFhO0lBRXhDLElBQUksRUFBRSwwQkFBYyxDQUFDLGFBQWE7SUFFbEMsd0NBQXdDO0lBQ3hDLFdBQVcsRUFBRSx5QkFBYSxDQUFDLGFBQWE7SUFDeEMsVUFBVSxFQUFFLHdCQUFZLENBQUMsYUFBYTtJQUN0QyxTQUFTLEVBQUUsdUJBQVcsQ0FBQyxhQUFhO0lBQ3BDLGVBQWUsRUFBRSw2QkFBaUIsQ0FBQyxhQUFhO0lBQ2hELGNBQWMsRUFBRSw0QkFBZ0IsQ0FBQyxhQUFhO0lBQzlDLGFBQWEsRUFBRSwyQkFBZSxDQUFDLGFBQWE7SUFDNUMsWUFBWSxFQUFFLDBCQUFjLENBQUMsYUFBYTtJQUMxQyxhQUFhLEVBQUUsNEJBQWdCO0lBQy9CLFVBQVUsRUFBRSwwQkFBYTtDQUM1QixDQUFDO0FBSUYsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixzQkFBc0I7QUFDdEIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRyxxRUFBcUU7QUFDckUsU0FBZ0IscUJBQXFCLENBQUUsS0FBK0I7SUFFbEUsSUFBSSxDQUFDLEtBQUs7UUFDTixPQUFPLEVBQUUsQ0FBQztTQUNULElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUM5QixPQUFPLEtBQUssQ0FBQztTQUNaLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxLQUFLLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQywyQkFBMkIsQ0FBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFFM0YsT0FBTywyQkFBMkIsQ0FBRSxLQUFLLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBVkQsc0RBVUM7QUFJRCxxRUFBcUU7QUFDckUsU0FBZ0IsMkJBQTJCLENBQUUsS0FBcUM7SUFFOUUsSUFBSSxDQUFDLEtBQUs7UUFDTixPQUFPLEVBQUUsQ0FBQztTQUNULElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtRQUM5QixPQUFPLEtBQUssQ0FBQztJQUVqQixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDO0lBQ2pGLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxDQUFDO0lBRWQsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDckMsT0FBUSxHQUFHLEdBQUcsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FDM0MsaUJBQWlCLENBQUUsUUFBMkIsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzlGLENBQUM7QUFkRCxrRUFjQzs7Ozs7Ozs7Ozs7Ozs7O0FDajBCRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLFVBQVU7QUFDVixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7R0FHRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxJQUFZO0lBRXhDLElBQUksQ0FBQyxJQUFJO1FBQ1IsT0FBTyxJQUFJLENBQUM7SUFFYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbkUsQ0FBQztBQU5ELGtDQU1DO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0IsV0FBVyxDQUFFLEtBQWE7SUFFeEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFFLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3JFLENBQUM7QUFIRCxrQ0FHQztBQTJDRDs7O0dBR0c7QUFDSCxTQUFnQixhQUFhLENBQUUsR0FBUSxFQUFFLE9BQThCO0lBRXBFLElBQUksQ0FBQyxPQUFPLEVBQ1g7UUFDSSx1QkFBdUI7UUFDdkIsd0NBQXdDO1FBQ3hDLGlEQUFpRDtRQUNqRCx1Q0FBdUM7UUFDdkMsc0NBQXNDO1FBQ3RDLElBQUksR0FBRyxJQUFJLElBQUk7WUFDWCxPQUFPLEVBQUUsQ0FBQzthQUNULElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUM1QixPQUFPLEdBQUcsQ0FBQzthQUNWLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDdkIsT0FBTyxhQUFhLENBQUUsR0FBRyxDQUFDLENBQUM7YUFDMUIsSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVO1lBQzlCLE9BQU8sR0FBRyxFQUFFLENBQUM7YUFDWixJQUFJLE9BQU8sR0FBRyxDQUFDLGFBQWEsS0FBSyxVQUFVO1lBQzVDLE9BQU8sR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDOztZQUUzQixPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUM3QjtTQUVEO1FBQ0ksc0ZBQXNGO1FBQ3RGLG9EQUFvRDtRQUNwRCxJQUFJLEdBQUcsSUFBSSxJQUFJO1lBQ1gsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDckQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1lBQzVCLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQzFELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtZQUM1QixPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMvRyxJQUFJLE9BQU8sR0FBRyxLQUFLLFVBQVU7WUFDOUIsT0FBTyxhQUFhLENBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFFLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQzNFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDM0I7WUFDSSxJQUFJLE9BQU8sQ0FBQyxTQUFTO2dCQUNqQixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUM7aUJBRW5DO2dCQUNJLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzlFLE9BQU8sYUFBYSxDQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ2hHO1NBQ0o7YUFDSSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFDaEM7WUFDSSxJQUFJLE9BQU8sR0FBRyxDQUFDLGFBQWEsS0FBSyxVQUFVO2dCQUN2QyxPQUFPLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDMUIsSUFBSSxPQUFPLENBQUMsVUFBVTtnQkFDdkIsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQixJQUFJLE9BQU8sQ0FBQyxPQUFPO2dCQUNwQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFDLENBQUM7O2dCQUU3QixPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM3QjthQUNJLElBQUksT0FBTyxHQUFHLEtBQUssU0FBUztZQUM3QixPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzRyxJQUFJLE9BQU8sQ0FBQyxPQUFPO1lBQ3BCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQzs7WUFFN0IsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDN0I7QUFDTCxDQUFDO0FBOURELHNDQThEQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLGFBQWEsQ0FBRSxHQUFVLEVBQUUsSUFBb0IsRUFBRSxZQUFvQixHQUFHO0lBRXBGLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxFQUFFO1FBQ0osQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUMsQ0FBQztBQUNyRyxDQUFDO0FBTEQsc0NBS0M7QUFJRDs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLGNBQWMsQ0FBRSxHQUFRLEVBQUMsYUFBbUUsRUFDeEcsWUFBb0IsR0FBRyxFQUFFLGVBQXdCLEtBQUs7SUFFdEQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUN6QyxPQUFPLEVBQUUsQ0FBQztJQUVkLElBQUksR0FBRyxHQUFlLEVBQUUsQ0FBQztJQUN6QixhQUFhLENBQUMsT0FBTyxDQUFFLFdBQVcsQ0FBQyxFQUFFO1FBRTdCLElBQUksUUFBUSxHQUFHLE9BQU8sV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFOUUsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxJQUFJLElBQUk7WUFDZixPQUFPO1FBRVgsSUFBSSxZQUFZO1lBQ1osR0FBRyxDQUFDLElBQUksQ0FBRSxRQUFRLENBQUMsQ0FBQztRQUV4QixJQUFJLE1BQU0sR0FBRyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksTUFBTTtZQUNOLEdBQUcsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLENBQUM7UUFFdEIsSUFBSSxJQUFJLEdBQUcsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLElBQUk7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3pCLElBQUksT0FBTyxJQUFJLElBQUk7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBRSxhQUFhLENBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQ0osQ0FBQztJQUVMLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM1QixDQUFDO0FBL0JELHdDQStCQztBQWVEOzs7Ozs7R0FNRztBQUNILFNBQVMsY0FBYyxDQUFFLENBQVMsRUFBRSxVQUFrQixFQUFFLEVBQUUsWUFBb0IsRUFBRTtJQUU1RSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDOUQsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxTQUFTLGFBQWEsQ0FBb0IsR0FBNEIsRUFDbEUsV0FBbUM7SUFFbkMsT0FBTyxhQUFhLENBQUUsR0FBRyxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBUyxrQkFBa0IsQ0FBb0IsR0FBaUMsRUFDaEUsV0FBbUMsRUFBRSxZQUFvQixHQUFHO0lBRXhFLE9BQU8sYUFBYSxDQUFFLEdBQUcsRUFBRTtRQUN2QixVQUFVLEVBQUUsV0FBVztRQUN2QixhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUUsQ0FBQyxFQUFFLFdBQVcsQ0FBQztRQUNsRCxjQUFjLEVBQUUsU0FBUztLQUM1QixDQUFDLENBQUM7QUFDUCxDQUFDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFTLGFBQWEsQ0FBb0IsTUFBYyxFQUFFLE1BQWlDLEVBQ3ZGLFdBQW1DO0lBRW5DLFNBQVMsUUFBUSxDQUFFLEtBQWEsRUFBRSxHQUFHLElBQVc7UUFFNUMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxNQUFNO1lBQ3RCLE9BQU8sR0FBRyxDQUFDO1FBRWYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1lBQ2pDLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQzs7WUFFcEIsT0FBTyxhQUFhLENBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUUsMENBQTBDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUlEOzs7R0FHRztBQUNILFNBQVMsUUFBUSxDQUFvQixJQUFZLEVBQUUsTUFBaUMsRUFDaEYsV0FBbUM7SUFFbkMsT0FBTyxHQUFHLElBQUksSUFBSSxrQkFBa0IsQ0FBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDdkUsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxRQUFRLENBQW9CLE9BQWUsRUFBRSxNQUFpQyxFQUNuRixXQUFtQztJQUVuQyxPQUFPLFFBQVEsYUFBYSxDQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUNuRSxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLFFBQVEsQ0FBb0IsQ0FBUyxFQUFFLElBQVk7SUFFeEQsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLENBQUM7QUFJRDs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVO0lBRVosWUFBdUIsV0FBa0M7UUFBbEMsZ0JBQVcsR0FBWCxXQUFXLENBQXVCO1FBSWxELG1CQUFjLEdBQUcsQ0FBQyxDQUFTLEVBQVUsRUFBRTtZQUUxQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUVNLGtCQUFhLEdBQUcsQ0FBQyxHQUE0QixFQUFVLEVBQUU7WUFFNUQsT0FBTyxhQUFhLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBRU0sdUJBQWtCLEdBQUcsQ0FBQyxHQUFpQyxFQUFFLFlBQW9CLEdBQUcsRUFBVSxFQUFFO1lBRS9GLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDakUsQ0FBQztJQWZELENBQUM7SUFpQk0sR0FBRyxDQUFFLEdBQUcsTUFBaUM7UUFFNUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLEdBQUcsQ0FBRSxHQUFHLE1BQWlDO1FBRTVDLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxLQUFLLENBQUUsR0FBNEIsRUFBRSxJQUE2QixFQUFFLEdBQTRCO1FBRW5HLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxJQUFJLENBQUUsT0FBZSxFQUFFLEdBQUcsTUFBaUM7UUFFOUQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLE9BQU8sQ0FBRSxDQUFTO1FBRXJCLE9BQU8sR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sSUFBSSxDQUFFLENBQVMsRUFBRSxJQUFZO1FBRWhDLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0o7QUEwQkQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLGFBQWMsU0FBUSxVQUFzQjtJQUU5QyxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFBWSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0QsTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUF3QixJQUMvQyxPQUFPLGFBQWEsQ0FBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RCxNQUFNLENBQUMsa0JBQWtCLENBQUUsR0FBNkIsRUFBRSxTQUFpQixJQUM1RSxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RSxNQUFNLENBQUMsMkJBQTJCLENBQUUsR0FBNkIsSUFDbEUsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakUsTUFBTSxDQUFDLDJCQUEyQixDQUFFLEdBQTZCLElBQ2xFLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhFLGdCQUFnQixLQUFLLENBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7Q0FDdEQ7QUFqQkQsc0NBaUJDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixVQUFVO0FBQ1YsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7O0dBR0c7QUFDSCxNQUFhLGNBQWUsU0FBUSxVQUF1QjtJQUVoRCxNQUFNLENBQUMsV0FBVyxDQUFFLENBQVMsSUFDOUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTlELE1BQU0sQ0FBQyxhQUFhLENBQUUsR0FBeUIsSUFDaEQsT0FBTyxhQUFhLENBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEQsTUFBTSxDQUFDLGtCQUFrQixDQUFFLEdBQThCLEVBQUUsU0FBaUIsSUFDN0UsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFeEUsTUFBTSxDQUFDLDJCQUEyQixDQUFFLEdBQThCLElBQ25FLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxFLE1BQU0sQ0FBQywyQkFBMkIsQ0FBRSxHQUE2QixJQUNsRSxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxjQUFjLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6RSxnQkFBZ0IsS0FBSyxDQUFFLGVBQWUsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO0NBQ3hEO0FBbEJELHdDQWtCQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsU0FBUztBQUNULEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7OztHQUdHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsVUFBc0I7SUFFOUMsTUFBTSxDQUFDLFdBQVcsQ0FBRSxDQUFTLElBQVksT0FBTyxjQUFjLENBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakYsTUFBTSxDQUFDLGFBQWEsQ0FBRSxHQUF3QixJQUMvQyxPQUFPLGFBQWEsQ0FBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RCxNQUFNLENBQUMsa0JBQWtCLENBQUUsR0FBNkIsRUFBRSxTQUFpQixJQUM1RSxPQUFPLGtCQUFrQixDQUFFLEdBQUcsRUFBRSxhQUFhLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV2RSxNQUFNLENBQUMsMkJBQTJCLENBQUUsR0FBNkIsSUFDbEUsT0FBTyxrQkFBa0IsQ0FBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakUsTUFBTSxDQUFDLDJCQUEyQixDQUFFLEdBQTZCLElBQ2xFLE9BQU8sa0JBQWtCLENBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhFLGdCQUFnQixLQUFLLENBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7SUFFNUMsQ0FBQyxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxD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bnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL21pbWNzc1R5cGVzLmpzXCIpO1xuIiwi77u/aW1wb3J0ICogYXMgQ29sb3JUeXBlcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBDb2xvckZ1bmNzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIHJlZCwgZ3JlZW4sIGJsdWUgc2VwYXJhdGlvbiB2YWx1ZXMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLiBFYWNoIGNvbG9yIHNlcGFyYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyIG9yIGFcclxuICogc3RyaW5nIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgMCB0byAyNTUuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMC4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICogXHJcbiAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhdWUuXHJcbiAqIEBwYXJhbSBiIEJsdWUgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmdiKCByOiBudW1iZXIgfCBzdHJpbmcsIGc6IG51bWJlciB8IHN0cmluZywgYjogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogQ29sb3JUeXBlcy5Db2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLnJnYlRvU3RyaW5nKCByLCBnLCBiLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIFN0cmluZyB3aGljaCBpcyB1c2VkIGFzIGlzLlxyXG4gKiBcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBsIExpZ2h0bmVzcyBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2woIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyIHwgc3RyaW5nLCBsOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBDb2xvclR5cGVzLkNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MuaHNsVG9TdHJpbmcoIGgsIHMsIGwsIGEpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGNvbG9yIGFuZCBhbiBvcHRpb25hbCBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBUaGUgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBhcyBhIG51bWVyaWMgdmFsdWUgb3IgYXMgYSBzdHJpbmcgY29sb3IgbmFtZS5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICogXHJcbiAqIEBwYXJhbSBjIFxyXG4gKiBAcGFyYW0gYSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgQ29sb3JUeXBlcy5JTmFtZWRDb2xvcnMsIGE6IG51bWJlciB8IHN0cmluZyk6IENvbG9yVHlwZXMuQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5hbHBoYVRvU3RyaW5nKCBjLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0V4dGVuZGVkLCBDc3NQb3NpdGlvbiwgU2ltcGxlQ3NzUG9zaXRpb24sIENzc0FuZ2xlfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCAqIGFzIEltYWdlVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9JbWFnZVR5cGVzXCJcclxuaW1wb3J0ICogYXMgSW1hZ2VGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJbWFnZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGxpbmVhci1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyR3JhZGllbnQoIGFuZ2xlPzogSW1hZ2VUeXBlcy5MaW5lYXJHcmFkQW5nbGUsXHJcbiAgICAuLi5zdG9wc09ySGludHM6IEltYWdlVHlwZXMuR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVR5cGVzLkltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IEltYWdlRnVuY3MubGluZWFyR3JhZGllbnRUb1N0cmluZyggXCJsaW5lYXItZ3JhZGllbnRcIiwgYW5nbGUsIHN0b3BzT3JIaW50cyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRpbmdMaW5lYXJHcmFkaWVudCggYW5nbGU/OiBJbWFnZVR5cGVzLkxpbmVhckdyYWRBbmdsZSxcclxuICAgIC4uLnN0b3BzT3JIaW50czogSW1hZ2VUeXBlcy5HcmFkaWVudFN0b3BPckhpbnRbXSk6IEltYWdlVHlwZXMuSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gSW1hZ2VGdW5jcy5saW5lYXJHcmFkaWVudFRvU3RyaW5nKCBcInJlcGVhdGluZy1saW5lYXItZ3JhZGllbnRcIiwgYW5nbGUsIHN0b3BzT3JIaW50cyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50KCBzaGFwZT86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRTaGFwZSxcclxuICAgIGV4dGVudD86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRFeHRlbnQsIHBvcz86IENzc1Bvc2l0aW9uLFxyXG4gICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogSW1hZ2VUeXBlcy5JbWFnZVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLnJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIFwicmFkaWFsLWdyYWRpZW50XCIsIHNoYXBlLCBleHRlbnQsIHBvcywgc3RvcHNPckhpbnRzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJbWFnZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGluZ1JhZGlhbEdyYWRpZW50KCBzaGFwZT86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRTaGFwZSxcclxuICAgIGV4dGVudD86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRFeHRlbnQsIHBvcz86IENzc1Bvc2l0aW9uLFxyXG4gICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogSW1hZ2VUeXBlcy5JbWFnZVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLnJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIFwicmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudFwiLCBzaGFwZSwgZXh0ZW50LCBwb3MsIHN0b3BzT3JIaW50cyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlYGNvbmljLWdyYWRpZW50KClgICBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29uaWNHcmFkaWVudCggYW5nbGU/OiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvcz86IFNpbXBsZUNzc1Bvc2l0aW9uLFxyXG4gICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogKGltZz86XCJpbWFnZVwiKSA9PiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuICgpID0+IEltYWdlRnVuY3MuY29uaWNHcmFkaWVudFRvU3RyaW5nKCBhbmdsZSwgcG9zLCBzdG9wc09ySGludHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlKCAuLi5hcmdzOiBJbWFnZVR5cGVzLkNyb3NzRmFkZVBhcmFtW10pOiBJbWFnZVR5cGVzLkltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IEltYWdlRnVuY3MuY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3MpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIG1vZHVsZSBkZWZpbmVzIHR5cGVzIG9mIG9iamVjdCB0aGF0IHJlcHJlc2VudCBDU1MgcnVsZXMuXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIFJ1bGVUeXBlcyBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJ1bGVDb250YWluZXJGdW5jcyBmcm9tIFwiLi4vcnVsZXMvUnVsZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7RXh0ZW5kZWR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeSwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIlxyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RSdWxlLCBUYWdSdWxlLCBDbGFzc1J1bGUsIElEUnVsZSwgU2VsZWN0b3JSdWxlfSBmcm9tIFwiLi4vcnVsZXMvU3R5bGVSdWxlc1wiXHJcbmltcG9ydCB7QW5pbWF0aW9uUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0FuaW1hdGlvblJ1bGVcIlxyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCJcclxuaW1wb3J0IHtGb250RmFjZVJ1bGUsIEltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGUsIFBhZ2VSdWxlfSBmcm9tIFwiLi4vcnVsZXMvTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGUsIE1lZGlhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyb3VwUnVsZXNcIlxyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBhYnN0cmFjdCBydWxlLCB3aGljaCBkZWZpbmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gYmUgZXh0ZW5kZWQgYnkgb3RoZXIgc3R5bGVcclxuICogcnVsZXMuIEFic3RyYWN0IHJ1bGVzIGRvbid0IGhhdmUgc2VsZWN0b3JzIGFuZCBhcmUgbm90IGluc2VydGVkIGludG8gRE9NLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhYnN0cmFjdCggc3R5bGU6IFJ1bGVUeXBlcy5FeHRlbmRlZFN0eWxlc2V0KTogUnVsZVR5cGVzLklBYnN0cmFjdFJ1bGVcclxuXHR7IHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyB0YWcgcnVsZS4gVGhlIHRhZyBwYXJhbWV0ZXIgY2FuIGJlIGFueSBvZiB0aGUgSFRNTCBvciBTVkcgdGFncy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdGFnKCB0YWc6IGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB8IGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwLCBzdHlsZTogUnVsZVR5cGVzLkV4dGVuZGVkU3R5bGVzZXQpOiBSdWxlVHlwZXMuSVRhZ1J1bGVcclxuXHR7IHJldHVybiBuZXcgVGFnUnVsZSggdGFnLCBzdHlsZSk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBSdWxlVHlwZXMuRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgUnVsZVR5cGVzLklDbGFzc1J1bGUpOiBSdWxlVHlwZXMuSUNsYXNzUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBDbGFzc1J1bGUoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpOyB9XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgSUQgcnVsZS4gVGhlIElEIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2ZcclxuICogdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdFxyXG4gKiBuYW1lIG9yIGFub3RoZXIgSUQgcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG8gXCJkZWNsYXJlXCJcclxuICogdGhlIElELiBTdWNoIElEIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaWQoIHN0eWxlPzogUnVsZVR5cGVzLkV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JSURSdWxlKTogUnVsZVR5cGVzLklJRFJ1bGVcclxuXHR7IHJldHVybiBuZXcgSURSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHNlbGVjdG9yIHJ1bGUuIFNlbGVjdG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcgb3IgdmlhIHRoZSAkc2VsZWN0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN0eWxlKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlOiBSdWxlVHlwZXMuRXh0ZW5kZWRTdHlsZXNldCk6IFJ1bGVUeXBlcy5JU2VsZWN0b3JSdWxlXHJcblx0eyByZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBSdWxlVHlwZXMuQW5pbWF0aW9uRnJhbWVbXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgUnVsZVR5cGVzLklBbmltYXRpb25SdWxlKTogUnVsZVR5cGVzLklBbmltYXRpb25SdWxlXHJcblx0eyByZXR1cm4gbmV3IEFuaW1hdGlvblJ1bGUoIGZyYW1lcywgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGN1c3RvbSB2YXJpYWJsZSBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVGhlIHZhcmlhYmxlIG5hbWUgd2lsbFxyXG4gKiBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZVxyXG4gKiBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgY3VzdG9tIHZhcmlhYmxlIHJ1bGUuIFRoZVxyXG4gKiBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgdmFsdWUganVzdCB0byBcImRlY2xhcmVcIiB0aGUgdmFyaWFibGUuIFN1Y2hcclxuICogdmFyaWFibGUgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWQgc3R5bGUgZGVmaW5pdGlvblxyXG4gKiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR2YXI8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHRlbXBsYXRlOiBLLCBwcm9wVmFsPzogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0XHRcdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JVmFyUnVsZTxLPik6IFJ1bGVUeXBlcy5JVmFyUnVsZTxLPlxyXG5cdHsgcmV0dXJuIG5ldyBWYXJSdWxlKCB0ZW1wbGF0ZSwgcHJvcFZhbCwgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpOiBSdWxlVHlwZXMuSUltcG9ydFJ1bGVcclxuXHR7IHJldHVybiBuZXcgSW1wb3J0UnVsZSggdXJsLCBtZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5KTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGZvbnQtZmFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRmb250ZmFjZSggZm9udGZhY2U6IElGb250RmFjZSk6IFJ1bGVUeXBlcy5JRm9udEZhY2VSdWxlXHJcblx0eyByZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggZm9udGZhY2UpOyB9XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG5hbWVzcGFjZSggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IFJ1bGVUeXBlcy5JTmFtZXNwYWNlUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBOYW1lc3BhY2VSdWxlKCBuYW1lc3BhY2UsIHByZWZpeCk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBwYWdlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHBhZ2UoIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzLCBzdHlsZT86IFN0eWxlc2V0KTogUnVsZVR5cGVzLklQYWdlUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBQYWdlUnVsZSggcHNldWRvQ2xhc3MsIHN0eWxlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHN1cHBvcnRzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN1cHBvcnRzPFQgZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPE8+LCBPIGV4dGVuZHMgUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbj4oIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCxPPik6IFJ1bGVUeXBlcy5JU3VwcG9ydHNSdWxlPFQ+XHJcblx0eyByZXR1cm4gbmV3IFN1cHBvcnRzUnVsZSggcXVlcnksIGluc3RhbmNlT3JDbGFzcyk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBtZWRpYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRtZWRpYTxUIGV4dGVuZHMgUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbjxPPiwgTyBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFQgfCBSdWxlVHlwZXMuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQsTz4pOiBSdWxlVHlwZXMuSU1lZGlhUnVsZTxUPlxyXG5cdHsgcmV0dXJuIG5ldyBNZWRpYVJ1bGUoIHF1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3MpOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBhbmQgcmV0dXJucyB0aGUgU3R5bGVzaGVldCBvYmplY3QgdGhhdCBjb250YWluc1xyXG4gKiBuYW1lcyBvZiBJRHMsIGNsYXNzZXMgYW5kIGtleWZyYW1lcyBhbmQgYWxsb3dzIHN0eWxlIG1hbmlwdWxhdGlvbnMuIEZvciBhIGdpdmVuIHN0eWxlc2hlZXRcclxuICogZGVmaW5pdGlvbiBjbGFzcyB0aGVyZSBpcyBhIHNpbmdsZSBzdHlsZXNoZWV0IG9iamVjdCwgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb25cclxuICogaXMgaW52b2tlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdXNlPFQgZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPihcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5wcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3MpIGFzIFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBhbmQgaW5zZXJ0cyBhbGwgaXRzIHJ1bGVzIGludG8gRE9NLiBJZiB0aGUgaW5wdXQgb2JqZWN0IGlzIG5vdFxyXG4gKiBhIHN0eWxlc2hlZXQgYnV0IGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgb2J0YWluIHN0eWxlc2hlZXQgYnkgY2FsbGluZyB0aGUgJHVzZSBmdW5jdGlvbi5cclxuICogTm90ZSB0aGF0IGVhY2ggc3R5bGVzaGVldCBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzXHJcbiAqIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgaW5zZXJ0ZWQgdG8gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXNcclxuICogdXAgdG8gMS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWN0aXZhdGU8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5hY3RpdmF0ZSggaW5zdGFuY2VPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaCBzdHlsZXNoZWV0XHJcbiAqIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlXHJcbiAqIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRkZWFjdGl2YXRlKCBpbnN0YW5jZTogUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxue1xyXG5cdHJldHVybiBSdWxlQ29udGFpbmVyRnVuY3MuZGVhY3RpdmF0ZSggaW5zdGFuY2UpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIChzaG9ydCkgcnVsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIGVuYWJsZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGVuYWJsZU9wdGltaXplZFN0eWxlTmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5lbmFibGVPcHRpbWl6ZWRTdHlsZU5hbWVzKCBlbmFibGUsIHByZWZpeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyB0aGUgbmFtZXMgb2YgdGhlIGdpdmVuIGNsYXNzZXMgaW50byBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gYVxyXG4gKiBgY2Fzc2AgcHJvcGVydHkgb2YgYW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gY2xhc3Nlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoIC4uLmNsYXNzZXM6IChSdWxlVHlwZXMuSUNsYXNzUnVsZSB8IEV4dGVuZGVkPHN0cmluZz4pW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWx1ZVRvU3RyaW5nKCBjbGFzc2VzLCB7XHJcblx0XHRhcnJheUl0ZW1GdW5jOiB2ID0+IHYgaW5zdGFuY2VvZiBDbGFzc1J1bGUgPyB2Lm5hbWUgOiB2YWx1ZVRvU3RyaW5nKHYpXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc1RpbWUsIENzc0xlbmd0aCwgQ3NzUGVyY2VudCwgQ3NzQW5nbGUsIENzc051bWJlciwgT25lT3JCb3gsIENzc1BvaW50fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7Q3NzSW1hZ2V9IGZyb20gXCIuLi9zdHlsZXMvSW1hZ2VUeXBlc1wiXHJcbmltcG9ydCB7Rm9udFN0cmV0Y2hfU2luZ2xlIH0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBBbmltYXRpb25OYW1lX1NpbmdsZSwgVGltaW5nRnVuY3Rpb25fU2luZ2xlLFxyXG5cdEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1NpbmdsZSwgQW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZSwgQW5pbWF0aW9uRmlsbE1vZGVfU2luZ2xlLFxyXG5cdEFuaW1hdGlvblBsYXlTdGF0ZV9TaW5nbGUsIEFuaW1hdGlvbl9TaW5nbGUsIEJhY2tncm91bmRTaXplX1NpbmdsZSwgQmFja2dyb3VuZFJlcGVhdF9TaW5nbGUsXHJcblx0QmFja2dyb3VuZEF0dGFjaG1lbnRfU2luZ2xlLCBCYWNrZ3JvdW5kT3JpZ2luX1NpbmdsZSwgQmFja2dyb3VuZENsaXBfU2luZ2xlLFxyXG5cdEJhY2tncm91bmRfU2luZ2xlLCBCb3hTaGFkb3dfU2luZ2xlLCBTdHlsZXNldCwgRmlsdGVyUHJveHksIEJhc2ljU2hhcGVQcm94eSxcclxuXHRGb250U3R5bGVfU3R5bGVUeXBlLCBGb250V2VpZ2h0X1N0eWxlVHlwZSwgRm9udF9TdHlsZVR5cGUsIFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGUsXHJcblx0VGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGUsIFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZSwgVGV4dERlY29yYXRpb25fU3R5bGVUeXBlLFxyXG5cdFRleHRTaGFkb3dfU2luZ2xlLCBUcmFuc2Zvcm1Qcm94eSwgVHJhbnNpdGlvbl9TaW5nbGUsIFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGUsIEJvcmRlclJhZGl1c19TdHlsZVR5cGUsIEZpbGxSdWxlX1N0eWxlVHlwZVxyXG59IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7U2VsZWN0b3JUb2tlblR5cGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZywgc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsIGJvcmRlclJhZGl1c1RvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2Zvcm1hdFNlbGVjdG9yfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yRnVuY3NcIjtcclxuaW1wb3J0IHtDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aCwgYXJyYXlUb1N0cmluZywgQ3NzQW5nbGVNYXRoLCBDc3NOdW1iZXJNYXRoLCBwb3NpdGlvblRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yIHVzaW5nIHRoZSBnaXZlbiB0ZW1wbGF0ZSBzdHJpbmcgd2l0aCBvcHRpb25hbFxyXG4gKiBwbGFjZWhvbGRlcnMgKGUuZy4gezB9KSwgd2hpY2ggd2lsbCBiZSByZXBsYWNlZCBieSBuYW1lcyBvZiB0YWdzLCBjbGFzc2VzIGFuZCBJRHMgYW5kIG90aGVyXHJcbiAqIHBvc3NpYmxlIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzZWxlY3RvciggdGVtcGxhdGU6IHN0cmluZywgLi4uYXJnczogU2VsZWN0b3JUb2tlblR5cGVbXSk6IENzc1NlbGVjdG9yXHJcbntcclxuXHRyZXR1cm4gKCkgPT4gZm9ybWF0U2VsZWN0b3IoIHRlbXBsYXRlLCBhcmdzKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdHlsZXNldCBtYW5pcHVsYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVQcm9wTmFtZSBTdHlsZSBwcm9wZXJ0eSBuYW1lIHRoYXQgZGV0ZXJtaW5lcyBob3cgdGhlIHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWRcclxuICogdG8gYSBDU1MgY29tcGxpYW50IHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlUHJvcFZhbHVlIFZhbHVlIHRvIGNvbnZlcnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVQcm9wVmFsdWU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHN0eWxlUHJvcE5hbWU6IEssXHJcblx0c3R5bGVQcm9wVmFsdWU6IFZhclZhbHVlVHlwZTxLPik6IHN0cmluZyB8IG51bGxcclxue1xyXG5cdHJldHVybiBzdHlsZVByb3BUb1N0cmluZyggc3R5bGVQcm9wTmFtZSwgc3R5bGVQcm9wVmFsdWUsIHRydWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHZhbHVlcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBTdHlsZXNldCBvYmplY3QgdG8gdGhlIGBzdHlsZWAgYXR0cmlidXRlXHJcbiAqIG9mIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gSFRNTCBlbGVtZW50IHdob3NlIHN0eWxlcyB3aWxsIGJlIHNldC5cclxuICogQHBhcmFtIHN0eWxlc2V0IFN0eWxlc2V0IG9iamVjdCB3aGljaCBwcm92aWRlcyB2YWx1ZXMgZm9yIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFN0eWxlKCBlbG06IEhUTUxFbGVtZW50LCBzdHlsZXNldDogU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRpZiAoc3R5bGVzZXQgPT0gdW5kZWZpbmVkKVxyXG5cdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiKTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0bGV0IGVsbVN0eWxlID0gZWxtLnN0eWxlO1xyXG5cdFx0T2JqZWN0LmtleXMoc3R5bGVzZXQpLmZvckVhY2goIGtleSA9PiBlbG1TdHlsZVtrZXldID0gc3R5bGVQcm9wVG9TdHJpbmcoIGtleSwgc3R5bGVzZXRba2V5XSwgdHJ1ZSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIHR3byBTdHlsZXNldCBvYmplY3RzIGJ5IGNvbnZlcnRpbmcgc3R5bGUgcHJvcGVydGllcyB0byBzdHJpbmdzIGFuZCByZXR1cm5zIGFuIG9iamVjdFxyXG4gKiB0aGF0IGNvbnRhaW5zIHN0cmluZyB2YWx1ZXMgb2YgcHJvcGVydGllcyB0aGF0IHdlcmUgbmV3IG9yIGhhdmUgZGlmZmVyZW50IHZhbHVlcyBpbiB0aGUgbmV3XHJcbiAqIHN0eWxlc2V0IGFuZCB1bmRlZmluZWQgdmFsdWVzIGZvciBwcm9wZXJ0aWVzIHRoYXQgZXhpc3QgaW4gdGhlIG9sZCBzdHlsZXNldCBidXQgZG9uJ3QgZXhpc3RcclxuICogaW4gdGhlIG5ldyBvbmUuXHJcbiAqIEBwYXJhbSBvbGRTdHlsZXNldCBcclxuICogQHBhcmFtIG5ld1N0eWxlc2V0IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZTdHlsZXNldHMoIG9sZFN0eWxlc2V0OiBTdHlsZXNldCwgbmV3U3R5bGVzZXQ6IFN0eWxlc2V0KTogeyBbSzogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0gfCBudWxsXHJcbntcclxuXHRjb25zdCB1cGRhdGVWYWw6IHsgW0s6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0ge307XHJcblx0bGV0IGNoYW5nZXNFeGlzdCA9IGZhbHNlO1xyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgb2xkIHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG5ldyBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBvbGRTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgbmV3VmFsID0gbmV3U3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChuZXdWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0dXBkYXRlVmFsW2tleV0gPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBvbGRTdHJpbmdWYWwgPSBzdHlsZVByb3BUb1N0cmluZygga2V5LCBvbGRTdHlsZXNldFtrZXldLCB0cnVlKTtcclxuXHRcdFx0bGV0IG5ld1N0cmluZ1ZhbCA9IHN0eWxlUHJvcFRvU3RyaW5nKCBrZXksIG5ld1ZhbCwgdHJ1ZSk7XHJcblx0XHRcdGlmIChvbGRTdHJpbmdWYWwgIT09IG5ld1N0cmluZ1ZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHJpbmdWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBuZXcgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgb2xkIG9uZS4gVGhlc2VcclxuXHQvLyB3aWxsIGJlIGFkZGVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBuZXdTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgb2xkVmFsID0gb2xkU3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChvbGRWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0dXBkYXRlVmFsW2tleV0gPSBzdHlsZVByb3BUb1N0cmluZygga2V5LCBuZXdTdHlsZXNldFtrZXldLCB0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBjaGFuZ2VzRXhpc3QgPyB1cGRhdGVWYWwgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gW1tTdHlsZXNldF1dIG9iamVjdCBpbnRvIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBTdHlsZXNldCdzIHByb3BlcnR5IGlzXHJcbiAqIGNvbnZlcnRlZCB0byBpdHMgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZ09iamVjdCggc3R5bGVzZXQ6IFN0eWxlc2V0KTogeyBbSzogc3RyaW5nXTogc3RyaW5nIH1cclxue1xyXG5cdGxldCByZXMgPSB7fTtcclxuXHRPYmplY3Qua2V5cyggc3R5bGVzZXQpLmZvckVhY2goIGtleSA9PiByZXNba2V5XSA9IHN0eWxlUHJvcFRvU3RyaW5nKCBrZXksIHN0eWxlc2V0W2tleV0sIHRydWUpKTtcclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEFuaW1hdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgYW5pbWF0aW9uIHByb3BlcnR5LlxyXG4gKiBAcGFyYW0gbmFtZSBBbmltYXRpb24gbmFtZS4gVGhpcyBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgcmVmZXJlbmNlIHRvIHRoZSBhbmltYXRpb25cclxuICogcnVsZSBkZWZpbml0aW9uLlxyXG4gKiBAcGFyYW0gZHVyYXRpb24gQW5pbWF0aW9uIGR1cmF0aW9uLiBJbnRlZ2VyIG51bWJlcnMgZm9yIG1pbGxpc2Vjb25kcywgZmxvYXRpbmcgcG9pbnRcclxuICogbnVtYmVycyBmb3Igc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSBzZWNvbmQuXHJcbiAqIEBwYXJhbSBmdW5jIFRpbWluZyBmdW5jdGlvbi4gRGVmYXVsdCB2YWx1ZSBpcyBcImVhc2VcIi4gVGhpcyBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBvbmUgb2YgcHJlLWRlZmluZWQgdGltaW5nIGZ1bmN0aW9uIG5hbWVzLlxyXG4gKiAgIC0gYSBudW1iZXIgb2Ygc3RlcHMgaW4gdGhlIHN0ZXBzIGZ1bmN0aW9uLiBUaGUgc3RlcCBwb3NpdGlvbiB3aWxsIGJlIHNldCB0byBqdW1wLXN0YXJ0LlxyXG4gKiAgIC0gb25lLSBvciB0d28taXRlbSBhcnJheSB0aGF0IGRlZmluZXMgYSBzdGVwIGZ1bmN0aW9uLiBUaGUgZmlyc3QgaXRlbSBkZWZpbmVzIHRoZSBudW1iZXJcclxuICogICAgIG9mIHN0ZXBzLiBUaGUgb3B0aW9uYWwgc2Vjb25kIGl0ZW0gaXMgb25lIG9mIHByZS1kZWZpbmVkIHN0ZXAgcG9zdGlvbiBuYW1lcy5cclxuICogICAtIGZvdXItaXRlbSBhcnJheSB0aGF0IGRlZmluZXMgY3ViaWMtYmV6aWVyIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gZGVsYXkgRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzLiBJbnRlZ2VyIG51bWJlcnMgZm9yIG1pbGxpc2Vjb25kcywgZmxvYXRpbmdcclxuICogcG9pbnQgbnVtYmVycyBmb3Igc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cclxuICogQHBhcmFtIGNvdW50IE51bWJlciBvZiBpdGVyYXRpb25zIHRoZSBhbmltYXRpb24gc2hvbGQgcnVuLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLlxyXG4gKiBAcGFyYW0gZGlyZWN0aW9uIEFuaW1hdGlvbiBkaXJlY3Rpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwibm9ybWFsXCIuXHJcbiAqIEBwYXJhbSBtb2RlIEFuaW1hdGlvbiBmaWxsIG1vZGUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwibm9uZVwiLlxyXG4gKiBAcGFyYW0gc3RhdGUgQW5pbWF0aW9uIHN0YXRlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBcInJ1bm5pbmdcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRpb24oIG5hbWU6IEV4dGVuZGVkPEFuaW1hdGlvbk5hbWVfU2luZ2xlPixcclxuXHRcdGR1cmF0aW9uOiBFeHRlbmRlZDxDc3NUaW1lPiA9IDEwMDAsXHJcblx0XHRmdW5jOiBFeHRlbmRlZDxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+ID0gXCJlYXNlXCIsXHJcblx0XHRkZWxheTogRXh0ZW5kZWQ8Q3NzVGltZT4gPSAwLFxyXG5cdFx0Y291bnQ6IEV4dGVuZGVkPEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1NpbmdsZT4gPSAxLFxyXG5cdFx0ZGlyZWN0aW9uOiBFeHRlbmRlZDxBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlPiA9IFwibm9ybWFsXCIsXHJcblx0XHRtb2RlOiBFeHRlbmRlZDxBbmltYXRpb25GaWxsTW9kZV9TaW5nbGU+ID0gXCJub25lXCIsXHJcblx0XHRzdGF0ZTogRXh0ZW5kZWQ8QW5pbWF0aW9uUGxheVN0YXRlX1NpbmdsZT4gPSBcInJ1bm5pbmdcIlxyXG5cdCk6IEFuaW1hdGlvbl9TaW5nbGVcclxue1xyXG5cdHJldHVybiB7IG5hbWUsIGR1cmF0aW9uLCBmdW5jLCBkZWxheSxjb3VudCwgZGlyZWN0aW9uLCBzdGF0ZSwgbW9kZSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhY2tncm91bmRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgYW5pbWF0aW9uIHByb3BlcnR5LlxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3IgdmFsdWUuXHJcbiAqIEBwYXJhbSBwb3NpdGlvblxyXG4gKiBAcGFyYW0gc2l6ZVxyXG4gKiBAcGFyYW0gcmVwZWF0IEJhY2tncm91bmQgcmVwZWF0IHZhbHVlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBcInJlcGVhdFwiLlxyXG4gKiBAcGFyYW0gYXR0YWNobWVudCBCYWNrZ3JvdW5kIGF0dGFjaG1lbnQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwic2Nyb2xsXCIuXHJcbiAqIEBwYXJhbSBvcmlnaW4gQmFja2dyb3VuZCBvcmlnaW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwicGFkZGluZy1ib3hcIi5cclxuICogQHBhcmFtIGNsaXAgQmFja2dyb3VuZCBjbGlwLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBcImJvcmRlci1ib3hcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrZ3JvdW5kKFxyXG5cdFx0Y29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcblx0XHRpbWFnZT86IEV4dGVuZGVkPENzc0ltYWdlPixcclxuXHRcdHBvc2l0aW9uPzogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+LFxyXG5cdFx0c2l6ZT86IEV4dGVuZGVkPEJhY2tncm91bmRTaXplX1NpbmdsZT4sXHJcblx0XHRyZXBlYXQ6IEV4dGVuZGVkPEJhY2tncm91bmRSZXBlYXRfU2luZ2xlPiA9IFwicmVwZWF0XCIsXHJcblx0XHRhdHRhY2htZW50OiBFeHRlbmRlZDxCYWNrZ3JvdW5kQXR0YWNobWVudF9TaW5nbGU+ID0gXCJzY3JvbGxcIixcclxuXHRcdG9yaWdpbjogRXh0ZW5kZWQ8QmFja2dyb3VuZE9yaWdpbl9TaW5nbGU+ID0gXCJwYWRkaW5nLWJveFwiLFxyXG5cdFx0Y2xpcDogRXh0ZW5kZWQ8QmFja2dyb3VuZENsaXBfU2luZ2xlPiA9IFwiYm9yZGVyLWJveFwiXHJcblx0KTogQmFja2dyb3VuZF9TaW5nbGVcclxue1xyXG5cdHJldHVybiB7IGNvbG9yLCBpbWFnZSwgcG9zaXRpb24sIHNpemUsIHJlcGVhdCwgYXR0YWNobWVudCwgb3JpZ2luLCBjbGlwIH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJhbnNpdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgdHJhbnNpdGlvbiBwcm9wZXJ0eS5cclxuICogQHBhcmFtIHByb3BlcnR5IE5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHRyYW5zaXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwiYWxsXCIuXHJcbiAqIEBwYXJhbSBkdXJhdGlvbiBUcmFuc2l0aW9uIGR1cmF0aW9uLiBJbnRlZ2VyIG51bWJlcnMgZm9yIG1pbGxpc2Vjb25kcywgZmxvYXRpbmcgcG9pbnRcclxuICogbnVtYmVycyBmb3Igc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSBzZWNvbmQuXHJcbiAqIEBwYXJhbSBmdW5jIFRpbWluZyBmdW5jdGlvbi4gRGVmYXVsdCB2YWx1ZSBpcyBcImVhc2VcIi4gVGhpcyBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBvbmUgb2YgcHJlLWRlZmluZWQgdGltaW5nIGZ1bmN0aW9uIG5hbWVzLlxyXG4gKiAgIC0gYSBudW1iZXIgb2Ygc3RlcHMgaW4gdGhlIHN0ZXBzIGZ1bmN0aW9uLiBUaGUgc3RlcCBwb3NpdGlvbiB3aWxsIGJlIHNldCB0byBqdW1wLXN0YXJ0LlxyXG4gKiAgIC0gb25lLSBvciB0d28taXRlbSBhcnJheSB0aGF0IGRlZmluZXMgYSBzdGVwIGZ1bmN0aW9uLiBUaGUgZmlyc3QgaXRlbSBkZWZpbmVzIHRoZSBudW1iZXJcclxuICogICAgIG9mIHN0ZXBzLiBUaGUgb3B0aW9uYWwgc2Vjb25kIGl0ZW0gaXMgb25lIG9mIHByZS1kZWZpbmVkIHN0ZXAgcG9zdGlvbiBuYW1lcy5cclxuICogICAtIGZvdXItaXRlbSBhcnJheSB0aGF0IGRlZmluZXMgY3ViaWMtYmV6aWVyIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gZGVsYXkgRGVsYXkgYmVmb3JlIHRoZSB0cmFuc2l0aW9uIHN0YXJ0cy4gSW50ZWdlciBudW1iZXJzIGZvciBtaWxsaXNlY29uZHMsIGZsb2F0aW5nXHJcbiAqIHBvaW50IG51bWJlcnMgZm9yIHNlY29uZHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbiggcHJvcGVydHk6IEV4dGVuZGVkPFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGU+ID0gXCJhbGxcIixcclxuXHRkdXJhdGlvbjogRXh0ZW5kZWQ8Q3NzVGltZT4gPSAxMDAwLFxyXG5cdGZ1bmM6IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT4gPSBcImVhc2VcIixcclxuXHRkZWxheTogRXh0ZW5kZWQ8Q3NzVGltZT4gPSAwXHJcblx0KTogVHJhbnNpdGlvbl9TaW5nbGVcclxue1xyXG5yZXR1cm4geyBwcm9wZXJ0eSwgZHVyYXRpb24sIGZ1bmMsIGRlbGF5IH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU2hhZG93c1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBib3gtc2hhZG93IHByb3BlcnR5LlxyXG4gKiBAcGFyYW0geCBIb3Jpem9udGFsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0geSBWZXJ0aWNhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGNvbG9yIENvbG9yIG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBibHVyIFZhbHVlIG9mIHRoZSBzaGFkb3cncyBibHVycmluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSBwaXhlbC5cclxuICogQHBhcmFtIHNwcmVhZCBWYWx1ZSBvZiB0aGUgc2hhZG93J3Mgc3ByZWFkaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxyXG4gKiBAcGFyYW0gaW5zZXQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNoYWRvdyBnb2VzIGluc2lkZSB0aGUgc2hhcGUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJveFNoYWRvdyhcclxuXHRcdHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcblx0XHR5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdFx0Y29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcblx0XHRibHVyOiBFeHRlbmRlZDxDc3NMZW5ndGg+ID0gMSxcclxuXHRcdHNwcmVhZDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiA9IDAsXHJcblx0XHRpbnNldDogRXh0ZW5kZWQ8Ym9vbGVhbj4gPSBmYWxzZVxyXG5cdCk6IEJveFNoYWRvd19TaW5nbGVcclxue1xyXG5cdHJldHVybiB7IHgsIHksIGNvbG9yLCBibHVyLCBzcHJlYWQsIGluc2V0IH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgdGV4dC1zaGFkb3cgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSB4IEhvcml6b250YWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSB5IFZlcnRpY2FsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3Igb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGJsdXIgVmFsdWUgb2YgdGhlIHNoYWRvdydzIGJsdXJyaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxIHBpeGVsLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRleHRTaGFkb3coXHJcblx0XHR4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdFx0eTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuXHRcdGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG5cdFx0Ymx1cjogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiA9IDEsXHJcblx0KTogVGV4dFNoYWRvd19TaW5nbGVcclxue1xyXG5cdHJldHVybiB7IHgsIHksIGNvbG9yLCBibHVyIH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRm9udFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBgZm9udGAgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSBmYW1pbHkgRm9udCBmYW1pbHkuXHJcbiAqIEBwYXJhbSBzaXplIEZvbnQgc2l6ZS5cclxuICogQHBhcmFtIHN0eWxlIEZvbnQgc3R5bGUuXHJcbiAqIEBwYXJhbSB2YXJpYW50IEZvbnQgdmFyaWFudC5cclxuICogQHBhcmFtIHdlaWdodCBGb250IHdlaWdodC5cclxuICogQHBhcmFtIHN0cmV0Y2ggRm9udCBzdHJldGNoLlxyXG4gKiBAcGFyYW0gbGluZUhlaWdodCBMaW5lIGhlaWdodC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb250KFxyXG5cdFx0ZmFtaWx5OiBzdHJpbmcsXHJcblx0XHRzaXplOiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdFx0c3R5bGU/OiBFeHRlbmRlZDxGb250U3R5bGVfU3R5bGVUeXBlPixcclxuXHRcdHdlaWdodD86IEV4dGVuZGVkPEZvbnRXZWlnaHRfU3R5bGVUeXBlPixcclxuXHRcdGxpbmVIZWlnaHQ/OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0dmFyaWFudD86IEV4dGVuZGVkPFwibm9ybWFsXCIgfCBcInNtYWxsLWNhcHNcIj4sXHJcblx0XHRzdHJldGNoPzogRXh0ZW5kZWQ8RXhjbHVkZTxGb250U3RyZXRjaF9TaW5nbGUsbnVtYmVyPj5cclxuXHQpOiBGb250X1N0eWxlVHlwZVxyXG57XHJcblx0cmV0dXJuIHsgc2l6ZSwgZmFtaWx5LCBzdHlsZSwgdmFyaWFudCwgd2VpZ2h0LCBzdHJldGNoLCBsaW5lSGVpZ2h0IH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGV4dCBkZWNvcmF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIGB0ZXh0LWRlY29yYXRpb25gIHByb3BlcnR5LlxyXG4gKiBAcGFyYW0gbGluZSBUeXBlIG9mIGxpbmUuXHJcbiAqIEBwYXJhbSBjb2xvciBMaW5lIGNvbG9yLlxyXG4gKiBAcGFyYW0gc3R5bGUgTGluZSBzdHlsZS5cclxuICogQHBhcmFtIHRoaWNrbmVzcyBMaW5lIHNpemUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGV4dERlY29yYXRpb24oXHJcbiAgICAgICAgbGluZT86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgICAgIHN0eWxlPzogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHRoaWNrbmVzcz86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZT4sXHJcblx0KTogVGV4dERlY29yYXRpb25fU3R5bGVUeXBlXHJcbntcclxuXHRyZXR1cm4geyBsaW5lLCBzdHlsZSwgY29sb3IsIHRoaWNrbmVzcyB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZpbHRlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJyaWdodG5lc3MoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gcGVyY2VudEZpbHRlciggbmFtZTogc3RyaW5nLCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYW1vdW50KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBicmlnaHRuZXNzKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBicmlnaHRuZXNzKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiYnJpZ2h0bmVzc1wiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNvbnRyYXN0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250cmFzdCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImNvbnRyYXN0XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZ3JheXNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmF5c2NhbGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJncmF5c2NhbGVcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnZlcnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVydCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImludmVydFwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG9wYWNpdHkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJvcGFjaXR5XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2F0dXJhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdHVyYXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwic2F0dXJhdGVcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzZXBpYSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VwaWEoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzZXBpYVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJsdXIoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJsdXIoIHJhZGl1czogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYmx1cigke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggcmFkaXVzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBkcm9wU2hhZG93KClgIENTUyBmdW5jdGlvbi5cclxuICogQHBhcmFtIHggSG9yaXpvbnRhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIHkgVmVydGljYWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gYmx1ciBWYWx1ZSBvZiB0aGUgc2hhZG93J3MgYmx1cnJpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEgcGl4ZWwuXHJcbiAqIEBwYXJhbSBzcHJlYWQgVmFsdWUgb2YgdGhlIHNoYWRvdydzIHNwcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cclxuICogQHBhcmFtIGluc2V0IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzaGFkb3cgZ29lcyBpbnNpZGUgdGhlIHNoYXBlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wU2hhZG93KFxyXG4gICAgeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgIGJsdXI6IEV4dGVuZGVkPENzc0xlbmd0aD4gPSAxLFxyXG4gICAgc3ByZWFkOiBFeHRlbmRlZDxDc3NMZW5ndGg+ID0gMCk6IEZpbHRlclByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHsgeCwgeSwgY29sb3IsIGJsdXIsIHNwcmVhZH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGh1ZS1yb3RhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGh1ZVJvdGF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGh1ZS1yb3RhdGUoJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHNoYXBlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGluc2V0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNldCggb2Zmc2V0OiBFeHRlbmRlZDxPbmVPckJveDxDc3NMZW5ndGg+PiwgcmFkaXVzPzogRXh0ZW5kZWQ8Qm9yZGVyUmFkaXVzX1N0eWxlVHlwZT4pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdGxldCByID0gcmFkaXVzICE9IG51bGwgPyBcInJvdW5kIFwiICsgYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHJhZGl1cykgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBpbnNldCgke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKG9mZnNldCl9JHtyfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgaXMgdXNlZCB0byBzcGVjaWZ5IGEgcmFkaXVzIGluIFtbY2lyY2xlXV0gYW5kIFtbZWxsaXBzZV1dIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNoYXBlUmFkaXVzID0gRXh0ZW5kZWQ8Q3NzTGVuZ3RoIHwgXCJjbG9zZXN0LXNpZGVcIiB8IFwiZmFydGhlc3Qtc2lkZVwiPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNpcmNsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlKCBjZW50ZXI/OiBTaGFwZVJhZGl1cywgcG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IGMgPSAgY2VudGVyICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoY2VudGVyKSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvc2l0aW9uVG9TdHJpbmcoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGNpcmNsZSgke2N9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGVsbGlwc2UoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwc2UoIHJ4PzogU2hhcGVSYWRpdXMsIHJ5PzogU2hhcGVSYWRpdXMsXHJcblx0cG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IHJ4cyA9ICByeCAhPSBudWxsID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ4KSA6IFwiXCI7XHJcbiAgICBsZXQgcnlzID0gIHJ5ICE9IG51bGwgPyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhyeSkgOiBcIlwiO1xyXG5cdGxldCBwb3MgPSBwb3NpdGlvbiAhPSBudWxsID8gXCIgYXQgXCIgKyBwb3NpdGlvblRvU3RyaW5nKCBwb3NpdGlvbikgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBlbGxpcHNlKCR7cnhzfSR7cnlzfSR7cG9zfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwb2x5Z29uKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2x5Z29uKCBwb2ludE9yUnVsZTogQ3NzUG9pbnQgfCBGaWxsUnVsZV9TdHlsZVR5cGUsXHJcblx0Li4ucG9pbnRzOiBDc3NQb2ludFtdKTogQmFzaWNTaGFwZVByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgcyA9IFwicG9seWdvbihcIjtcclxuXHRcdGlmICh0eXBlb2YgcG9pbnRPclJ1bGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHMgKz0gcG9pbnRPclJ1bGUgKyBcIixcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cyArPSBgJHtDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggcG9pbnRPclJ1bGUpfSxgO1xyXG5cclxuXHRcdHMgKz0gcG9pbnRzLm1hcCggcHQgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHB0KSkuam9pbihcIixcIik7XHJcblxyXG5cdFx0cmV0dXJuIHMgKyBcIilcIjtcclxuXHR9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRyYW5zZm9ybXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1hdHJpeCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4KCBhOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdGQ6IEV4dGVuZGVkPENzc051bWJlcj4sIHR4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB0eTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgbWF0cml4KCR7YXJyYXlUb1N0cmluZyggW2EsIGIsIGMsIGQsIHR4LCB0eV0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1hdHJpeDNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgzZChcclxuXHRcdGExOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzE6IEV4dGVuZGVkPENzc051bWJlcj4sIGQxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTI6IEV4dGVuZGVkPENzc051bWJlcj4sIGIyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDI6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjM6IEV4dGVuZGVkPENzc051bWJlcj4sIGMzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGE0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGQ0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdCk6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgbWF0cml4KCR7YXJyYXlUb1N0cmluZyggW2ExLCBiMSwgYzEsIGQxLCBhMiwgYjIsIGMyLCBkMiwgYTMsIGIzLCBjMywgZDMsIGE0LCBiNCwgYzQsIGQ0XSwgdW5kZWZpbmVkLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcGVyc3BlY3RpdmUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKCBkOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBwZXJzcGVjdGl2ZSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhkKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIENTUyByb3RhdGlvbiBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHJvdGF0ZUltcGwoIG5hbWU6IHN0cmluZywgYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVYXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVlcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWiggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWlwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlM2QoXHJcblx0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeiksIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGEpXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgcm90YXRlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZSggY3g6IEV4dGVuZGVkPENzc051bWJlcj4sIHN5PzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUoJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoY3gpfSR7c3kgIT0gbnVsbCA/IFwiLFwiICsgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBzY2FsZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBzY2FsZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWCggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVYXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVZKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVlcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVooIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWlwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTNkKCBzeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0c3o6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSxcclxuXHRcdENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3KCBheDogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBheT86IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tldygke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF4KX0ke2F5ICE9IG51bGwgPyBcIixcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tld1goKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXdYKCBheDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3WCgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF4KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3WSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tld1koIGF5OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LCB5PzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgdHJhbnNsYXRlKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpfSR7eSAhPSBudWxsID8gXCIsXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gdHJhbnNsYXRlIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZUltcGwoIG5hbWU6IHN0cmluZywgczogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVYKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWFwiLCB4KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVZKCB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWVwiLCB5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVaKCB6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWlwiLCB6KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlM2QoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcblx0ejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCksIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSxcclxuXHRcdENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh6KV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHRyYW5zbGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG5cdElDc3NOdW1iZXJNYXRoLCBJQ3NzTGVuZ3RoTWF0aCwgSUNzc0FuZ2xlTWF0aCwgSUNzc1RpbWVNYXRoLCBJQ3NzUmVzb2x1dGlvbk1hdGgsXHJcblx0SUNzc0ZyZXF1ZW5jeU1hdGgsIElDc3NGcmFjdGlvbk1hdGgsIElDc3NQZXJjZW50TWF0aCwgRXh0ZW5kZWQsIFN0cmluZ1Byb3h5LFxyXG5cdFVybFByb3h5LCBBdHRyVHlwZUtleXdvcmQsIEF0dHJVbml0S2V5d29yZCwgQXR0clByb3h5XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQge1xyXG5cdENzc051bWJlck1hdGgsIENzc0xlbmd0aE1hdGgsIENzc0FuZ2xlTWF0aCwgQ3NzVGltZU1hdGgsIENzc1Jlc29sdXRpb25NYXRoLFxyXG5cdENzc0ZyZXF1ZW5jeU1hdGgsIENzc0ZyYWN0aW9uTWF0aCwgQ3NzUGVyY2VudE1hdGgsIHZhbHVlVG9TdHJpbmdcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bnVtYmVyPmBcclxuICogQ1NTIHR5cGUuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXkgYXJlXHJcbiAqIGNvbnZlcnRlZCB0byBzdHJpbmdzIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1bml0cyB0byB0aGVtLlxyXG4gKi9cclxuZXhwb3J0IGxldCBOdW06IElDc3NOdW1iZXJNYXRoID0gbmV3IENzc051bWJlck1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBMZW4gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxsZW5ndGg+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBsZW5ndGggdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJweFwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImVtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IExlbjogSUNzc0xlbmd0aE1hdGggPSBuZXcgQ3NzTGVuZ3RoTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuZ2xlIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8YW5nbGU+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYW4gYW5nbGUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkZWdcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJ0dXJuXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEFuZ2xlOiBJQ3NzQW5nbGVNYXRoID0gbmV3IENzc0FuZ2xlTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRpbWUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDx0aW1lPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgdGltZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIm1zXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwic1wiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBUaW1lOiBJQ3NzVGltZU1hdGggPSBuZXcgQ3NzVGltZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSZXNvbHV0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHJlc29sdXRpb24gdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkcGlcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJkcGNtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFJlc29sdXRpb246IElDc3NSZXNvbHV0aW9uTWF0aCA9IG5ldyBDc3NSZXNvbHV0aW9uTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZyZXF1ZW5jeSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGZyZXF1ZW5jeSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIkh6XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwia0h6XCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEZyZXF1ZW5jeTogSUNzc0ZyZXF1ZW5jeU1hdGggPSBuZXcgQ3NzRnJlcXVlbmN5TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZyYWN0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJhY3Rpb24+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBmcmFjdGlvbiB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImZyXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiJVwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBGcmFjdGlvbjogSUNzc0ZyYWN0aW9uTWF0aCA9IG5ldyBDc3NGcmFjdGlvbk1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQZXJjZW50IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudGFnZT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIFwiJVwiIHVuaXQgc3VmZml4LlxyXG4gKi9cclxuZXhwb3J0IGxldCBQZXJjZW50OiBJQ3NzUGVyY2VudE1hdGggPSBuZXcgQ3NzUGVyY2VudE1hdGgoKTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gcmF3KClcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgU3RyaW5nUHJveHkgZnVuY3Rpb24gZW5jYXBzdWxhdGluZyB0aGUgZ2l2ZW4gc3RyaW5nLWxpa2UgcGFyYW1ldGVyLiBUaGlzIGZ1bmN0aW9uXHJcbiAqIGFsbG93cyBzcGVjaWZ5aW5nIGFyYml0cmFyeSB0ZXh0IGZvciBwcm9wZXJ0aWVzIHdob3NlIHR5cGUgbm9ybWFsbHkgZG9lc24ndCBhbGxvdyBzdHJpbmdzLlxyXG4gKiBUaGlzIGlzIHVzZWQgYXMgYW4gXCJlc2NhcGUgaGF0Y2hcIiB3aGVuIGEgc3RyaW5nIHZhbHVlIGFscmVhZHkgZXhpc3RzIGFuZCB0aGVyZSBpcyBubyBzZW5zZVxyXG4gKiB0byBjb252ZXJ0IGl0IHRvIGEgcHJvcGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmF3KCB2YWw6IHN0cmluZywgLi4ucGFyYW1zOiBhbnlbXSk6IFN0cmluZ1Byb3h5XHJcbntcclxuXHRmdW5jdGlvbiByZXBsYWNlciggdG9rZW46IHN0cmluZywgLi4uYXJnczogYW55W10pOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgaW5kZXggPSBwYXJzZUludCggYXJnc1swXSk7XHJcblx0XHRyZXR1cm4gaW5kZXggPCBwYXJhbXMubGVuZ3RoID8gdmFsdWVUb1N0cmluZyggcGFyYW1zW2luZGV4XSkgOiBcIlwiO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHJldHVybiB2YWwucmVwbGFjZSggL3tcXHMqKFxcZCopXFxzKn0vZywgcmVwbGFjZXIpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHQvLy8gI2lmIERFQlVHXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJJbnZhbGlkIHBsYWNlaG9sZGVyIGluIHJhdyBzdHJpbmc6XCIsIHZhbClcclxuXHRcdFx0Ly8vICNlbmRpZlxyXG5cdFx0XHRyZXR1cm4gdmFsO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyB1cmwoKVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBVcmxQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgdXJsKClgIGZ1bmN0aW9uLiBUaGUgc3RyaW5nIHBhcmFtZXRlclxyXG4gKiB3aWxsIGJlIHdyYXBwZWQgaW4gYSBcInVybCgpXCIgaW52b2NhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmwoIHZhbDogRXh0ZW5kZWQ8c3RyaW5nPik6IFVybFByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gYHVybCgke3ZhbHVlVG9TdHJpbmcodmFsKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBhdHRyKClcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEF0dHJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBhdHRyKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRyKCBhdHRyTmFtZTogRXh0ZW5kZWQ8c3RyaW5nPiwgdHlwZU9yVW5pdD86IEV4dGVuZGVkPEF0dHJUeXBlS2V5d29yZCB8IEF0dHJVbml0S2V5d29yZD4sXHJcblx0ZmFsbGJhY2s/OiBFeHRlbmRlZDxzdHJpbmc+KTogQXR0clByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYXR0cigke2F0dHJOYW1lfSR7dHlwZU9yVW5pdCA/IFwiIFwiICsgdHlwZU9yVW5pdCA6IFwiXCJ9JHtmYWxsYmFjayA/IFwiLFwiICsgZmFsbGJhY2sgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWNzc1xyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvQ29sb3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvSW1hZ2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1V0aWxBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0NvbG9yQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9JbWFnZUFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU3R5bGVBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1J1bGVBUElcIjtcclxuIiwiaW1wb3J0IHtJQW5pbWF0aW9uUnVsZSwgQW5pbWF0aW9uRnJhbWUsIElOYW1lZEVudGl0eX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBjcmVhdGVOYW1lc30gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBAa2V5ZnJhbWVzIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZnJhbWVzPzogQW5pbWF0aW9uRnJhbWVbXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoZnJhbWVzKVxyXG5cdFx0XHR0aGlzLmZyYW1lUnVsZXMgPSBmcmFtZXMubWFwKCAoa2V5ZnJhbWUpID0+IG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoIGtleWZyYW1lKSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcblx0XHRmb3IoIGxldCBrZXlmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRrZXlmcmFtZVJ1bGUucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEFuaW1hdGlvblJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBBbmltYXRpb25SdWxlKCk7XHJcblx0XHRpZiAodGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRuZXdSdWxlLmZyYW1lUnVsZXMgPSB0aGlzLmZyYW1lUnVsZXMubWFwKCAoa2V5ZnJhbWVSdWxlKSA9PiBrZXlmcmFtZVJ1bGUuY2xvbmUoKSk7XHJcblx0XHRuZXdSdWxlLm5hbWVPdmVycmlkZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAa2V5ZnJhbWVzICR7dGhpcy5uYW1lfSB7fWAsIHBhcmVudCkgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHJcblx0XHRsZXQgY3NzS2V5ZnJhbWVzUnVsZSA9IHRoaXMuY3NzUnVsZSBhcyBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cdFx0Zm9yKCBsZXQga2V5ZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjc3NLZXlmcmFtZXNSdWxlLmFwcGVuZFJ1bGUoIGtleWZyYW1lUnVsZS50b0Nzc1N0cmluZygpKVxyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKHgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcIkNhbm5vdCBhZGQgQ1NTIGtleWZyYW1lIHJ1bGVcIiwgeClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gY2xhc3MgYW5kIElEIHJ1bGVzICovXHJcblx0cHJpdmF0ZSBmcmFtZVJ1bGVzOiBBbmltYXRpb25GcmFtZVJ1bGVbXTtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBrZXlmcmFtZSBjbGF1c2UgaW4gdGhlIGFuaW1hdGlvbiBydWxlLlxyXG4gKi9cclxuY2xhc3MgQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZyYW1lPzogQW5pbWF0aW9uRnJhbWUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIGZyYW1lID8gZnJhbWVbMV0gOiB1bmRlZmluZWQpO1xyXG5cclxuXHRcdGlmIChmcmFtZSlcclxuXHRcdFx0dGhpcy53YXlwb2ludCA9IHR5cGVvZiBmcmFtZVswXSA9PT0gXCJzdHJpbmdcIiA/IGZyYW1lWzBdIDogZnJhbWVbMF0gKyBcIiVcIjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEFuaW1hdGlvbkZyYW1lUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRuZXdSdWxlLndheXBvaW50ID0gdGhpcy53YXlwb2ludDtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy53YXlwb2ludDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50IGFzIGEgc3RyaW5nICovXHJcblx0cHVibGljIHdheXBvaW50OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIFN0eWxlRGVmaW5pdGlvbiwgSUdyb3VwUnVsZSwgSU1lZGlhUnVsZSwgSVN1cHBvcnRzUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtnZXRDb250YWluZXJGcm9tRGVmaW5pdGlvbiwgcHJvY2Vzc0luc3RhbmNlT3JDbGFzc30gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7SVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGV9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge3N1cHBvcnRzUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcm91cFJ1bGUgY2xhc3Mgc2VydmVzIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIGdyb3VwaW5nIENTUyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaW5zdGFuY2VPckNsYXNzID0gaW5zdGFuY2VPckNsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0bGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggdGhpcy5pbnN0YW5jZU9yQ2xhc3MsIG93bmVyLmdldERlZmluaXRpb25JbnN0YW5jZSgpKTtcclxuXHRcdGlmICghaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblx0XHR0aGlzLnJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tRGVmaW5pdGlvbiggaW5zdGFuY2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0R3JvdXBTZWxlY3RvclRleHQoKTtcclxuXHRcdGlmICghc2VsZWN0b3IpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYCR7c2VsZWN0b3J9IHt9YCwgcGFyZW50KSBhcyBDU1NTdXBwb3J0c1J1bGU7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmluc2VydFJ1bGVzKCB0aGlzLmNzc1J1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGNsZWFyIHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmNsZWFyUnVsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IGRlZmluZXMgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIGZvciB0aGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRwcm90ZWN0ZWQgcnVsZUNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGRlZmluaW5nIHRoZSBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGVcclxuXHRwdWJsaWMgZ2V0IHJ1bGVzKCk6IFQgeyByZXR1cm4gdGhpcy5pbnN0YW5jZSBhcyBUOyB9XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3VwcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPE8+LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IFN1cHBvcnRzUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxULE8+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFN1cHBvcnRzUnVsZTxULE8+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBTdXBwb3J0c1J1bGU8VCxPPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0Ly8gY29udmVydCB0aGUgcXVlcnkgdG8gaXRzIHN0cmluZyBmb3JtXHJcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBxdWVyeSBpcyBzdXBwb3J0ZWQgYW5kIGlmIGl0IGlzIG5vdCwgZG9uJ3QgaW5zZXJ0IHRoZSBydWxlXHJcblx0XHRyZXR1cm4gQ1NTLnN1cHBvcnRzKCBxdWVyeVN0cmluZykgPyBgQHN1cHBvcnRzICR7cXVlcnlTdHJpbmd9YCA6IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBzdXBwb3J0IHF1ZXJ5IGZvciB0aGlzIHJ1bGUgaW4gYSBzdHJpbmcgZm9ybS5cclxuXHRwdWJsaWMgcXVlcnk6IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGlhUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPE8+LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElNZWRpYVJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxULE8+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE1lZGlhUnVsZTxULE8+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBNZWRpYVJ1bGU8VCxPPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gdHlwZW9mIHRoaXMucXVlcnkgPT09IFwic3RyaW5nXCIgPyB0aGlzLnF1ZXJ5IDogbWVkaWFRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KTtcclxuXHRcdHJldHVybiBgQG1lZGlhICR7cXVlcnlTdHJpbmd9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUZvbnRGYWNlUnVsZSwgSUltcG9ydFJ1bGUsIElQYWdlUnVsZSwgSU5hbWVzcGFjZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtmb250RmFjZVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlRnVuY3NcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQge1BhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRm9udEZhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBmb250LWZhY2UgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9udEZhY2VSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElGb250RmFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZm9udGZhY2U6IElGb250RmFjZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZm9udGZhY2UgPSBmb250ZmFjZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBGb250RmFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggdGhpcy5mb250ZmFjZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGZvbnQtZmFjZSAke2ZvbnRGYWNlVG9TdHJpbmcoIHRoaXMuZm9udGZhY2UpfWAsXHJcblx0XHRcdHBhcmVudCkgYXMgQ1NTRm9udEZhY2VSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0ZvbnRGYWNlUnVsZTtcclxuXHJcblx0Ly8gT2JqZWN0IGRlZmluaW5nIGZvbnQtZmFjZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBmb250ZmFjZTogSUZvbnRGYWNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSW1wb3J0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEltcG9ydFJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUltcG9ydFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdXJsOiBzdHJpbmcsIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudXJsID0gdXJsO1xyXG5cdFx0dGhpcy5tZWRpYVF1ZXJ5ID0gbWVkaWFRdWVyeTtcclxuXHRcdHRoaXMuc3VwcG9ydHNRdWVyeSA9IHN1cHBvcnRzUXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJbXBvcnRSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB0aGlzLnVybCwgdGhpcy5tZWRpYVF1ZXJ5LCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgdXJsO1xyXG5cdFx0aWYgKCF0aGlzLnVybClcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy51cmwuc3RhcnRzV2l0aChcInVybFwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiXFxcIlwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiJ1wiKSlcclxuXHRcdFx0dXJsID0gdGhpcy51cmw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHVybCA9IGB1cmwoJHt0aGlzLnVybH0pYDtcclxuXHJcblx0XHRsZXQgc3VwcG9ydHNRdWVyeVN0cmluZyA9ICF0aGlzLnN1cHBvcnRzUXVlcnlcclxuXHRcdFx0PyBcIlwiXHJcblx0XHRcdDogdHlwZW9mIHRoaXMuc3VwcG9ydHNRdWVyeSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdD8gdGhpcy5zdXBwb3J0c1F1ZXJ5XHJcblx0XHRcdFx0OiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblxyXG5cdFx0aWYgKHN1cHBvcnRzUXVlcnlTdHJpbmcgJiYgIXN1cHBvcnRzUXVlcnlTdHJpbmcuc3RhcnRzV2l0aCggXCJzdXBwb3J0c1wiKSlcclxuXHRcdHN1cHBvcnRzUXVlcnlTdHJpbmcgPSBgc3VwcG9ydHMoICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gKWA7XHJcblxyXG5cdFx0bGV0IG1lZGlhUXVlcnlTdHJpbmcgPSAhdGhpcy5tZWRpYVF1ZXJ5XHJcblx0XHRcdD8gXCJcIlxyXG5cdFx0XHQ6IHR5cGVvZiB0aGlzLm1lZGlhUXVlcnkgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0XHQ/IHRoaXMubWVkaWFRdWVyeVxyXG5cdFx0XHRcdDogbWVkaWFRdWVyeVRvU3RyaW5nKCB0aGlzLm1lZGlhUXVlcnkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAaW1wb3J0ICR7dXJsfSAke3N1cHBvcnRzUXVlcnlTdHJpbmd9ICR7bWVkaWFRdWVyeVN0cmluZ31gLFxyXG5cdFx0XHRwYXJlbnQpIGFzIENTU0ltcG9ydFJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIGltcG9ydCBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0ltcG9ydFJ1bGU7XHJcblxyXG5cdC8vIFVSTCB0byBpbXBvcnQgZnJvbS5cclxuXHRwdWJsaWMgdXJsOiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG5cclxuXHQvLyBPcHRpb25hbCBzdXBwb3J0cyBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhZ2VSdWxlIGNsYXNzIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhZ2VSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVBhZ2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzLCBzdHlsZT86IFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnBzZXVkb0NsYXNzID0gcHNldWRvQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBQYWdlUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IFBhZ2VSdWxlKCB0aGlzLnBzZXVkb0NsYXNzKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgQHBhZ2UgJHt0aGlzLnBzZXVkb0NsYXNzID8gdGhpcy5wc2V1ZG9DbGFzcyA6IFwiXCJ9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBwYWdlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUGFnZVJ1bGU7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cHVibGljIHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOYW1lc3BhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmFtZXNwYWNlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJTmFtZXNwYWNlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBuYW1lc3BhY2U6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XHJcblx0XHR0aGlzLnByZWZpeCA9IHByZWZpeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE5hbWVzcGFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIHRoaXMubmFtZXNwYWNlLCB0aGlzLnByZWZpeCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5uYW1lc3BhY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgdXJsID0gdGhpcy5uYW1lc3BhY2Uuc3RhcnRzV2l0aCggXCJ1cmwoXCIpID8gdGhpcy5uYW1lc3BhY2UgOiBgdXJsKCR7dGhpcy5uYW1lc3BhY2V9KWA7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBuYW1lc3BhY2UgJHt0aGlzLnByZWZpeCA/IHRoaXMucHJlZml4IDogXCJcIn0gJHt1cmx9YCxcclxuXHRcdFx0cGFyZW50KSBhcyBDU1NOYW1lc3BhY2VSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU05hbWVzcGFjZVJ1bGU7XHJcblxyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVJ1bGUsIElOYW1lZEVudGl0eSwgU3R5bGVEZWZpbml0aW9ufSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGFjY29tcGFuaWVzIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGhcclxuICogYSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVDb250YWluZXJcclxue1xyXG5cdC8qKiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzICovXHJcblx0Z2V0RGVmaW5pdGlvbkluc3RhbmNlKCk6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0LyoqIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLiAqL1xyXG5cdGluc2VydFJ1bGVzKCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkO1xyXG5cclxuXHQvKiogQ2xlYXJzIGFsbCBDU1MgcnVsZSBvYmplY3RzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuICovXHJcblx0Y2xlYXJSdWxlcygpOiB2b2lkO1xyXG5cclxuXHQvKiogU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS4gKi9cclxuXHRzZXRDdXN0b21WYXJWYWx1ZSggbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IHRoYXQgXCJvd25zXCJcclxuICogdGhlIHJ1bGVzIHVuZGVyIHRoaXMgY29udGFpbmVyLiBJbiBwYXJ0aWN1bGFyLCB0aGUgb3duZXIncyBqb2IgaXMgdG8gZ2VuZXJhdGUgXCJzY29wZWRcIiB1bmlxdWVcclxuICogbmFtZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUb3BMZXZlbFJ1bGVDb250YWluZXIgZXh0ZW5kcyBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIEdlbmVyYXRlcyBhIG5hbWUsIHdoaWNoIHdpbGwgYmUgdW5pcXVlIGluIHRoaXMgc3R5bGVzaGVldCAqL1xyXG5cdGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHJ1bGVzLiBBcyBhIHBhcmVudCBvZiBSdWxlQ29udGFpbmVyLCB0aGUgUnVsZVxyXG4gKiBjbGFzcyBpcyBhbHNvIGFuIGFuY2VzdG9yIGZvciBTdHlsZXNoZWV0OyBob3dldmVyLCBtb3N0IG9mIGl0cyB0aGUgZmllbGRzIGFyZSB1bmRlZmluZWQgaW5cclxuICogdGUgU3R5bGVzaGVldCBpbnN0YW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUnVsZSBpbXBsZW1lbnRzIElSdWxlXHJcbntcclxuXHQvLyBQcm9jZXNzZXMgdGhlIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLm93bmVyID0gb3duZXI7XHJcblx0XHR0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogUnVsZTtcclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0Ly8gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MsIGlzIGFjdGl2YXRlZC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkIHt9XHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB0byB3aGljaFxyXG5cdC8vIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBkZWFjdGl2YXRlZC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7IHRoaXMuY3NzUnVsZSA9IG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSBnaXZlbiBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIHN0YXRpYyBhZGRSdWxlVG9ET00oIHJ1bGVUZXh0OiBzdHJpbmcsIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IENTU1J1bGUgfCBudWxsXHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcmVudC5pbnNlcnRSdWxlKCBydWxlVGV4dCwgcGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIHgpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBDYW5ub3QgYWRkIENTUyBydWxlICcke3J1bGVUZXh0fSdgLCB4KVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3R5bGVzaGVldCB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncy4gVGhpcyBpcyBcInRoaXNcIiBmb3IgU3R5bGVzaGVldC5cclxuXHRwdWJsaWMgb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBpc1xyXG5cdC8vIG51bGwgZm9yIFN0eWxlc2hlZXQuXHJcblx0cHVibGljIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHQvLyBDU1NSdWxlLWRlcml2ZWQgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFjdHVhbGwgQ1NTIHJ1bGUgaW5zZXJ0ZWQgaW50b1xyXG5cdC8vIHRoZSBzdHlsZXMgc2hlZXQgb3IgdGhlIHBhcmVudCBydWxlLiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgU3R5bGVzaGVldCBvYmplY3RzLlxyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBzY29wZWQgbmFtZXMgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSxcclxuXHRjc3NQcmVmaXg/OiBzdHJpbmcpOiBbc3RyaW5nLHN0cmluZ11cclxue1xyXG5cdGlmICghcnVsZU5hbWUgJiYgIW5hbWVPdmVycmlkZSlcclxuXHRcdHJldHVybiBbXCJcIiwgXCJcIl07XHJcblxyXG5cdGxldCBuYW1lID0gIW5hbWVPdmVycmlkZVxyXG5cdFx0PyBvd25lci5nZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWUhKVxyXG5cdFx0OiB0eXBlb2YgbmFtZU92ZXJyaWRlID09PSBcInN0cmluZ1wiXHJcblx0XHRcdD8gbmFtZU92ZXJyaWRlXHJcblx0XHRcdDogbmFtZU92ZXJyaWRlLm5hbWU7XHJcblxyXG5cdHJldHVybiBbbmFtZSwgY3NzUHJlZml4ID8gbmFtZS5zdGFydHNXaXRoKCBjc3NQcmVmaXgpID8gbmFtZSA6IGNzc1ByZWZpeCArIG5hbWUgOiBuYW1lXTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1N0eWxlRGVmaW5pdGlvbiwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXJ9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuL1ZhclJ1bGVcIlxyXG5pbXBvcnQge0ltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGV9IGZyb20gXCIuL01pc2NSdWxlc1wiXHJcblxyXG5cclxuXHJcbi8vIERlZmluZSBzeW1ib2xzIHRoYXQgYXJlIHVzZWQgZm9yIGtlZXBpbmcgaW1wb3J0YW50IGluZm9ybWF0aW9uIG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uXHJcbi8vIGluc3RhbmNlcyB0aGF0IHdlIGRvbid0IHdhbnQgdG8gYmUgdmlzaWJsZSB0byBkZXZlbG9wZXJzLlxyXG5cclxuLyoqIFByb3BlcnR5IG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHBvaW50aW5nIHRvIHRoZSBzaW5nbHRvbiBpbnN0YW5jZS4gKi9cclxuY29uc3Qgc3ltSW5zdGFuY2UgPSBTeW1ib2woXCJkZWZpbml0aW9uXCIpO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnR5IG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIHBvaW50aW5nIHRvIHRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCB0aGF0IGlzXHJcbiAqIHJlc3BvbnNpYmxlIGZvciBwcm9jZXNzaW5nIHJ1bGVzLlxyXG4gKi9cclxuY29uc3Qgc3ltUnVsZUNvbnRhaW5lciA9IFN5bWJvbChcInJ1bGVDb250YWluZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZUNvbnRhaW5lciBjbGFzcyBpcyBhIHNoYWRvdyBzdHJ1Y3R1cmUgdGhhdCBhY2NvbXBhbmllcyBldmVyeSBwcm9jZXNzZWQgc3R5bGUgZGVmaW5pdGlvblxyXG4gKiBvYmplY3QuIFNpbmNlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyBpcyBhbiBleHBvcnRlZCBjbGFzcyB2aXNpYmxlIHRvIGRldmVsb3BlcnMsIHdlIGRvbid0IHdhbnRcclxuICogdG8gaGF2ZSBhIGxvdCBvZiBmdW5jdGlvbmFsaXR5IGluIGl0LiBUaGUgUnVsZUNvbnRhaW5lciBvYmplY3QgaXMgbGlua2VkIHRvIHRoZSBTdHlsZURlZmluaXRpb25cclxuICogb2JqZWN0IHZpYSB0aGUgW3N5bVJ1bGVDb250YWluZXJdIHN5bWJvbC4gSXQgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBwYXJzaW5nIHJ1bGVcclxuICogZGVmaW5pdGlvbnMsIG5hbWUgYXNzaWdubWVudCBhbmQgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcbiAqL1xyXG5jbGFzcyBSdWxlQ29udGFpbmVyIGltcGxlbWVudHMgSVRvcExldmVsUnVsZUNvbnRhaW5lclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIG5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvciBhcyBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcblx0XHR0aGlzLm93bmVyID0gaW5zdGFuY2Uub3duZXI7XHJcblxyXG5cdFx0dGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPSAwO1xyXG5cdFx0dGhpcy5kb21TdHlsZUVsbSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5wcm9jZXNzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBjcmVhdGVzIG5hbWVzIGZvciBjbGFzc2VzLFxyXG5cdC8vIElEcywgYW5pbWF0aW9ucyBhbmQgY3VzdG9tIHZhcmlhYmxlcy5cclxuXHRwcml2YXRlIHByb2Nlc3MoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHB1dCByZWZlcmVuY2UgdG8gdGhpcyBjb250YWluZXIgaW4gdGhlIHN5bWJvbCBwcm9wZXJ0eSBvZiB0aGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRcdHRoaXMuaW5zdGFuY2Vbc3ltUnVsZUNvbnRhaW5lcl0gPSB0aGlzO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBvd25lciB0YWtlbiBmcm9tIHRoZSBpbnN0YW5jZSBpcyBudWxsICh0aGF0IGlzIHRoaXMgaXMgYSB0b3AtbGV2ZWwgZGVmaW5pdGlvbiksXHJcblx0XHQvLyBjaGFuZ2Ugb3VyIG93bmVyIHByb3BlcnR5IHRvIHBvaW50IHRvIHRoZSBpbnN0YW5jZSBpdHNlbGZcclxuXHRcdGlmICghdGhpcy5vd25lcilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5vd25lciA9IHRoaXMuaW5zdGFuY2U7XHJcblx0XHRcdHRoaXMudG9wTGV2ZWxDb250YWluZXIgPSB0aGlzO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnRvcExldmVsQ29udGFpbmVyID0gdGhpcy5vd25lcltzeW1SdWxlQ29udGFpbmVyXTtcclxuXHJcblx0XHQvLyBpZiBvdXIgY29udGFpbmVyIGlzIG5vdCB0aGUgdG9wLWxldmVsIGNvbnRhaW5lciwgcHJlZml4IG91ciBuYW1lIHdpdGggdGhlIHVwcGVyIG9uZVxyXG5cdFx0aWYgKCF0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHRcdHRoaXMubmFtZSA9IGAke3RoaXMudG9wTGV2ZWxDb250YWluZXIubmFtZX1fJHt0aGlzLm5hbWV9YDtcclxuXHJcblx0XHR0aGlzLmltcG9ydHMgPSBbXTtcclxuXHRcdHRoaXMubmFtZXNwYWNlcyA9IFtdO1xyXG5cdFx0dGhpcy52YXJzID0gW107XHJcblx0XHR0aGlzLnJlZnMgPSBbXTtcclxuXHRcdHRoaXMub3RoZXJSdWxlcyA9IFtdO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhlbS5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZSwgdGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgY3JlYXRlcyBuYW1lcyBmb3IgY2xhc3NlcyxcclxuXHQvLyBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSB2YXJpYWJsZXMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHByb3BWYWwgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24pXHJcblx0XHRcdHRoaXMucHJvY2Vzc1JlZmVyZW5jZSggcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBWYXJSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NBcnJheSggcHJvcFZhbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJlZmVyZW5jZSB0byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gY3JlYXRlZCBieSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHByb2Nlc3NSZWZlcmVuY2UoIHJlZjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucmVmcy5wdXNoKCByZWYpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIHByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgdmFyT2JqOiBWYXJSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlc2hlZXQsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0Ly8gcnVsZSBhbmQgYXNzaWduIGl0IHRvIG91ciBzdHlsZXNoZWV0LlxyXG5cdFx0aWYgKHZhck9iai5jb250YWluZXIpXHJcblx0XHRcdHZhck9iaiA9IHZhck9iai5jbG9uZSgpO1xyXG5cclxuXHRcdHZhck9iai5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblx0XHR0aGlzLnZhcnMucHVzaCggdmFyT2JqKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBSdWxlLWRlcml2ZWQgb2JqZWN0LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1J1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlOiBSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGFub3RoZXIgaW5zdGFuY2UsIHdlIGNyZWF0ZSBhIGNsb25lXHJcblx0XHQvLyBvZiB0aGUgcnVsZSBhbmQgc2V0IGl0IHRvIG91ciBpbnN0YW5jZS5cclxuXHRcdGlmIChydWxlLm93bmVyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUpXHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0gPSBydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBUT0RPOiBzdXBwb3J0IGFscmVhZHkgdXNlZCBydWxlcyBpbiBhbiBhcnJheVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJ1bGUucHJvY2VzcyggdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cclxuXHRcdGlmIChydWxlIGluc3RhbmNlb2YgSW1wb3J0UnVsZSlcclxuXHRcdFx0dGhpcy5pbXBvcnRzLnB1c2goIHJ1bGUpO1xyXG5cdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIE5hbWVzcGFjZVJ1bGUpXHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5vdGhlclJ1bGVzLnB1c2goIHJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgcnVsZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzQXJyYXkoIHByb3BWYWxzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BWYWxzIHx8IHByb3BWYWxzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhvc2UgdGhhdCBhcmUgcnVsZXMuXHJcblx0XHRmb3IoIGxldCBwcm9wVmFsIG9mIHByb3BWYWxzKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggbnVsbCwgcHJvcFZhbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzICovXHJcblx0cHVibGljIGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb25cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgc2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUpXHJcblx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlLnN0eWxlLnNldFByb3BlcnR5KCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiBudWxsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGVzIGEgZ2xvYmFsbHkgdW5pcXVlIENTUyBuYW1lIGZvciB0aGUgZ2l2ZW4gcnVsZSBuYW1lIHVubGVzcyB0aGlzIHJ1bGUgbmFtZSBhbHJlYWR5XHJcblx0ICogZXhpc3RzIGVpdGhlciBpbiBhIGJhc2UgY2xhc3Mgb3IgaW4gdGhlIGNoYWluIG9mIHBhcmVudCBncm91cGluZyBydWxlcy5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBpZiBydWxlIG5hbWUgd2FzIG5vdCBzcGVjaWZpZWQsIGdlbmVyYXRlIGl0IHVuaXF1ZWx5OyBvdGhlcndpc2UsIGNoZWNrIHdoZXRoZXIgd2VcclxuXHRcdC8vIGFscmVhZHkgaGF2ZSB0aGlzIHJ1bGUgbmFtZTogaWYgeWVzLCByZXR1cm4gdGhlIGFscmVhZHkgYXNzaWduZWQgbmFtZS4gSWYgd2UgZGlkbid0XHJcblx0XHQvLyBmaW5kIHRoZSBuYW1lLCB0cnkgdG8gZmluZCBpdCBpbiB0aGUgYmFzZSBjbGFzc2VzKTsgaWYgbm90IGZvdW5kIHRoZXJlLCBnZW5lcmF0ZSBpdFxyXG5cdFx0Ly8gdXNpbmcgdGhpcyBjb250YWluZXIncyBuYW1lIGFuZCB0aGUgcnVsZSBuYW1lIChub3RlIHRoYXQgZGVwZW5kaW5nIG9uIHRoZSBtb2RlLCBib3RoXHJcblx0XHQvLyBjYW4gYmUgZ2VuZXJhdGVkIHVuaXF1ZWx5KS5cclxuXHRcdGlmICghcnVsZU5hbWUpXHJcblx0XHRcdHJldHVybiBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGVOYW1lIGluIHRoaXMuaW5zdGFuY2UgJiYgXCJuYW1lXCIgaW4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0pXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlW3J1bGVOYW1lXS5uYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmaW5kIG91dCBpZiB0aGVyZSBpcyBhIHJ1bGUgd2l0aCB0aGlzIG5hbWUgZGVmaW5lZCBpbiBhIHN0eWxlc2hlZXQgaW5zdGFuY2UgY3JlYXRlZCBmb3JcclxuXHRcdFx0Ly8gYSBjbGFzcyBmcm9tIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuXHJcblx0XHRcdGxldCBleGlzdGluZ05hbWUgPSBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCB0aGlzLmRlZmluaXRpb25DbGFzcywgcnVsZU5hbWUpO1xyXG5cdFx0XHRyZXR1cm4gZXhpc3RpbmdOYW1lID8gZXhpc3RpbmdOYW1lIDogZ2VuZXJhdGVOYW1lKCB0aGlzLm5hbWUsIHJ1bGVOYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLiAqL1xyXG5cdHB1YmxpYyBpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGFjdGl2YXRlIHJlZmVyZW5jZWQgc3R5bGUgZGVmaW5pdGlvbnNcclxuXHRcdGZvciggbGV0IHJlZiBvZiB0aGlzLnJlZnMpXHJcblx0XHRcdHJlZltzeW1SdWxlQ29udGFpbmVyXS5hY3RpdmF0ZSgpO1xyXG5cclxuXHRcdC8vIGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGFzIHRoZXkgbXVzdCBiZSBiZWZvcmUgb3RoZXIgcnVsZXMuIElmIHRoZSBwYXJlbnQgaXMgYSBncm91cGluZ1xyXG5cdFx0Ly8gcnVsZSwgZG9uJ3QgaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXQgYWxsXHJcblx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpc2VydCBvdXIgY3VzdG9tIHZhcmlhYmxlcyBpbiBhIFwiOnJvb3RcIiBydWxlXHJcblx0XHRpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT5cclxuXHRcdFx0XHR2YXJPYmoudG9Dc3NTdHJpbmcoKSkuam9pbihcIjtcIil9fWAsIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluc2VydCBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdHB1YmxpYyBjbGVhclJ1bGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5vd25lciA9PT0gdGhpcy5pbnN0YW5jZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cclxuXHRcdC8vIGRlYWN0aXZhdGUgaW1wb3J0ZWQgc3R5bGVzaGVldHNcclxuXHRcdGZvciggbGV0IHJlZiBvZiB0aGlzLnJlZnMpXHJcblx0XHRcdHJlZltzeW1SdWxlQ29udGFpbmVyXS5kZWFjdGl2YXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIHRoaXMgc3R5bGVzaGVldCBpbnRvIERPTS4gKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICgrK3RoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBvbmx5IHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uIGNyZWF0ZXMgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtLmlkID0gdGhpcy5uYW1lO1xyXG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuZG9tU3R5bGVFbG0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gdGhpcy50b3BMZXZlbENvbnRhaW5lci5kb21TdHlsZUVsbTtcclxuXHJcblx0XHRcdHRoaXMuaW5zZXJ0UnVsZXMoIHRoaXMuZG9tU3R5bGVFbG0hLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGlzIHN0eWxlc2hlZXQgZnJvbSBET00uICovXHJcblx0cHVibGljIGRlYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGd1YXJkIGZyb20gZXh0cmEgZGVhY3RpdmF0ZSBjYWxsc1xyXG5cdFx0aWYgKHRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKC0tdGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2xlYXJSdWxlcygpO1xyXG5cclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmlpdGlvbiBjcmVhdGVzIHRoZSBgPHN0eWxlPmAgZWxlbWVudFxyXG5cdFx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0hLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgY29udGFpbmVyIGlzIGZvciB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24uXHJcblx0cHJpdmF0ZSBnZXQgaXNUb3BMZXZlbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3duZXIgPT09IG51bGwgfHwgdGhpcy5vd25lciA9PT0gdGhpcy5pbnN0YW5jZSB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBwcm9jZXNzZWQuXHJcblx0cHVibGljIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBjcmVhdGVzIGFuIGluc3RhbmNlIG9mLlxyXG5cdHByaXZhdGUgZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3NcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGlzIGNvbnRhaW5lciwgd2hpY2gsIGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgaXMgZWl0aGVyIHRha2VuIGZyb20gdGhlIGNsYXNzXHJcblx0Ly8gZGVmaW5pdGlvbiBuYW1lIG9yIGdlbmVyYXRlZCB1bmlxdWVseS5cclxuXHRwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW4gdGhlIGNoYWluIG9mIGdyb3VwaW5nIHJ1bGVzIHRoYXRcclxuXHQvLyBsZWFkIHRvIHRoaXMgcnVsZSBjb250YWluZXIuIEZvciB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbnMsIHRoaXMgcG9pbnRzIHRvIHRoZSBzYW1lXHJcblx0Ly8gc2luZ2xldG9uIGRlZmluaXRpb24gaW5zdGFuY2UgYXMgdGhlICdkZWZpbml0aW9uJyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIG93bmVyOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRoYXQgYmVsb25ncyB0byB0aGUgb3duZXIgc3R5bGUgZGVmaW50aW9uLiBJZiBvdXIgY29udGFpbmVyIGlzIHRvcC1sZXZlbCxcclxuXHQvLyB0aGlzIHByb3BlcnR5IHBvaW50cyB0byBgdGhpc2AuXHJcblx0cHJpdmF0ZSB0b3BMZXZlbENvbnRhaW5lcjogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gTGlzdCBvZiByZWZlcmVuY2VzIHRvIG90aGVyIHN0eWxlIGRlZmluaXRpb25zIGNyZWFlZCB2aWEgdGhlICR1c2UgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSByZWZzOiBTdHlsZURlZmluaXRpb25bXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBAaW1wb3J0IHJ1bGVzXHJcblx0cHJpdmF0ZSBpbXBvcnRzOiBJbXBvcnRSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQG5hbWVzcGFjZSBydWxlc1xyXG5cdHByaXZhdGUgbmFtZXNwYWNlczogTmFtZXNwYWNlUnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIGN1c3RvbSB2YXJpYWJsZSBydWxlcy5cclxuXHRwcml2YXRlIHZhcnM6IFZhclJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBydWxlcyB0aGF0IGFyZSBub3QgaW1wb3J0cywgbmFtZXNwYWNlcywgY3VzdG9tIHZhcnMsIHJlZmVyZW5jZXMgb3IgZ3JvdXBpbmcgcnVsZXMuXHJcblx0cHJpdmF0ZSBvdGhlclJ1bGVzOiBSdWxlW107XHJcblxyXG5cdC8vIFwiOnJvb3RcIiBydWxlIHdoZXJlIGFsbCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciBhcmUgZGVmaW5lZC5cclxuXHRwcml2YXRlIGNzc0N1c3RvbVZhclN0eWxlUnVsZTogQ1NTU3R5bGVSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIGNvdW50IG9mIGFjdGl2YXRpb24gcmVxdWVzdHMuXHJcblx0cHJpdmF0ZSBhY3RpdmF0aW9uUmVmQ291bnQ6IG51bWJlcjtcclxuXHJcblx0Ly8gRE9NIHN0eWxlIGVsZW1udFxyXG5cdHB1YmxpYyBkb21TdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudCB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE5hbWUgZ2VuZXJhdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWFpemVkIG5hbWVzIGZvciBzdHlsZSBlbGVtZW50cyAoY2xhc3MgbmFtZXMsIGFuaW1hdGlvblxyXG4vLyBuYW1lcywgZXRjLilcclxubGV0IHVzZVVuaXF1ZVN0eWxlTmFtZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbi8vIFByZWZpeCB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBzdHlsZSBuYW1lcy4gSWYgdW5kZWZpbmVkLCBhIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsXHJcbi8vIGJlIHVzZWQuXHJcbmxldCB1bmlxdWVTdHlsZU5hbWVzUHJlZml4OiBzdHJpbmcgPSBcIm5cIjtcclxuXHJcbi8vIE5leHQgbnVtYmVyIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdW5pcXVlIGlkZW50aWZpZXJzLlxyXG5sZXQgbmV4dFVuaXF1ZUlEOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIG5hbWUgdG8gdXNlIGZvciB0aGUgZ2l2ZW4gcnVsZSBmcm9tIHRoZSBnaXZlbiBzdHlsZSBzaGVldC5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTmFtZSggc2hlZXROYW1lOiBzdHJpbmcsIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB1c2VVbmlxdWVTdHlsZU5hbWVzXHJcblx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSggdW5pcXVlU3R5bGVOYW1lc1ByZWZpeClcclxuXHRcdDogYCR7c2hlZXROYW1lfV8ke3J1bGVOYW1lfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBuYW1lLCB3aGljaCBjYW4gYmUgdXNlZCBlaXRoZXIgZm9yIHN0eWxlIGVsZW1lbnQncyBJRCBvciBvciBjbGFzcyxcclxuICogaWRlbnRpZmllciBvciBhbmltYXRpb24gbmFtZS4gTmFtZXMgYXJlIGdlbmVyYXRlZCB1c2luZyBhIHNpbXBsZSBpbmNyZW1lbnRpbmcgbnVtYmVyLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVOYW1lKCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiAocHJlZml4ID8gcHJlZml4IDogdW5pcXVlU3R5bGVOYW1lc1ByZWZpeCkgKyBuZXh0VW5pcXVlSUQrKztcclxufVxyXG5cclxuXHJcblxyXG4vLyBMb29rcyB1cCBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIHByb3RvdHlwZSBjaGFpbiBvZiB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBjbGFzcy4gSWYgZm91bmQgYW5kIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHJ1bGUsIHRoZW4gcmV0dXJucyB0aGUgbmFtZSBhc3NpZ25lZCBmb3IgaXQuXHJcbmZ1bmN0aW9uIGZpbmROYW1lRm9yUnVsZUluUHJvdG90eXBlQ2hhaW4oIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBydWxlTmFtZTogc3RyaW5nKVxyXG57XHJcblx0aWYgKCFkZWZpbml0aW9uQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gbG9vcCBvdmVyIHByb3RvdHlwZXNcclxuXHRsZXQgYmFzZUNsYXNzID0gZGVmaW5pdGlvbkNsYXNzO1xyXG5cdHdoaWxlKCAoYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKSAhPT0gU3R5bGVEZWZpbml0aW9uKVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBiYXNlIGNsYXNzIGFscmVhZHkgaGFzIGFuIGFzc29jaWF0ZWQgaW5zdGFuY2U7IGlmIHllcywgY2hlY2sgd2hldGhlclxyXG5cdFx0Ly8gaXQgaGFzZSBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIHJ1bGUgbmFtZS4gSWYgeWVzLCB0aGVuIHVzZSB0aGlzIHJ1bGUncyBhbHJlYWR5XHJcblx0XHQvLyBnZW5lcmF0ZWQgbmFtZSAoaWYgZXhpc3RzKS5cclxuXHRcdGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYmFzZUluc3QgPSBiYXNlQ2xhc3Nbc3ltSW5zdGFuY2VdO1xyXG5cdFx0XHRpZiAoYmFzZUluc3QgJiYgcnVsZU5hbWUgaW4gYmFzZUluc3QgJiYgXCJuYW1lXCIgaW4gYmFzZUluc3RbcnVsZU5hbWVdKVxyXG5cdFx0XHRcdHJldHVybiBiYXNlSW5zdFtydWxlTmFtZV0ubmFtZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm9jZXNzaW5nIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgYnkgY3JlYXRpbmcgaXRzIGluc3RhbmNlIGFuZCBhc3NvY2lhdGluZyBhXHJcbiAqIHJ1bGUgY29udGFpbmVyIG9iamVjdCB3aXRoIGl0LiBUaGUgY2xhc3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGluc3RhbmNlIHVzaW5nIHRoZVxyXG4gKiBTeW1ib2wgcHJvcGVydHkuIFRoZSBvd25lciBwYXJhbWV0ZXIgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpaXRpb25cclxuICogb2JqZWN0IG9yIG51bGwgaWYgdGhlIGdpdmVuIGNsYXNzIGlzIGl0c2VsZiBhIHRvcC1sZXZlbCBjbGFzcyAodGhhdCBpcywgaXMgbm90IGEgY2xhc3NcclxuICogdGhhdCBkZWZpbmVzIHJ1bGVzIHdpdGhpbiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMpLlxyXG4gKiBAcGFyYW0gZGVmaW5pdGlvbkNsYXNzIFxyXG4gKiBAcGFyYW0gb3duZXIgXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzQ2xhc3MoIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdG93bmVyPzogU3R5bGVEZWZpbml0aW9uKTogU3R5bGVEZWZpbml0aW9uIHwgbnVsbFxyXG57XHJcblx0Ly8gY2FsbCB0aGUgJ3VzZScgZnVuY3Rpb24gZm9yIGFsbCB0aGUgYmFzZSBjbGFzc2VzIHNvIHRoYXQgcnVsZSBuYW1lcyBhcmUgZ2VuZXJhdGVkLiBXZVxyXG5cdC8vIGRvbid0IGFjdGl2YXRlIHN0eWxlcyBmb3IgdGhlc2UgY2xhc2VzIGJlY2F1c2UgZGVyaXZlZCBjbGFzc2VzIHdpbGwgaGF2ZSBhbGwgdGhlXHJcblx0Ly8gcnVsZXMgZnJvbSBhbGwgdGhlIGJhc2UgY2xhc3NlcyBhcyB0aGVpciBvd24gYW5kIHNvIHRoZXNlIHJ1bGVzIHdpbGwgYmUgYWN0aXZhdGVkIGFzXHJcblx0Ly8gcGFydCBvZiB0aGUgZGVyaXZlZCBjbGFzcy5cclxuXHRsZXQgYmFzZUNsYXNzID0gZGVmaW5pdGlvbkNsYXNzO1xyXG5cdHdoaWxlKCAoYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKSAhPT0gU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0cHJvY2Vzc0NsYXNzKCBiYXNlQ2xhc3MsIG93bmVyKTtcclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIHRoZSBpbnN0YW5jZSBvZiB0aGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IGRlZmluaXRpb25DbGFzcyggb3duZXIpO1xyXG5cclxuXHRcdC8vIGdldCB0aGUgbmFtZSBmb3Igb3VyIGNvbnRhaW5lclxyXG5cdFx0bGV0IG5hbWUgPSB1c2VVbmlxdWVTdHlsZU5hbWVzIHx8ICFkZWZpbml0aW9uQ2xhc3MubmFtZVxyXG5cdFx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSgpXHJcblx0XHRcdDogZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblxyXG5cdFx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lKTtcclxuXHRcdGRlZmluaXRpb25DbGFzc1tzeW1JbnN0YW5jZV0gPSBpbnN0YW5jZTtcclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgaW5zdGFudGlhdGluZyBTdHlsZSBEZWZpbml0aW9uIENsYXNzICcke2RlZmluaXRpb25DbGFzcy5uYW1lfSdgLCBlcnIpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgYXNzaWducyBuYW1lcyB0byBpdHMgcnVsZXMuXHJcbiAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdlIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gaW5zdGFuY2UgYWxyZWFkeVxyXG4gKiBjcmVhdGVkIGZvciBpdCBhcyBhIGNsYXNzIHdpbGwgaGF2ZSBvbmx5IGEgc2luZ2xlIGFzc29jaWF0ZWQgaW5zdGFuZSBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXNcclxuICogdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAqIFxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCAoYW4gaW5zdGFuY2Ugb2YgdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcykgdGhlbiB3ZSBjaGVjayB3aGV0aGVyXHJcbiAqIGl0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLiBJZiB5ZXMgd2UganVzdCByZXR1cm4gaXQgYmFjazsgaWYgbm8sIHdlIGFzc2lnbiBuZXcgdW5pcXVlIG5hbWVzXHJcbiAqIHRvIGl0cyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3M6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuXHRvd25lcj86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG5cdGlmICghaW5zdGFuY2VPckNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGlmIChpbnN0YW5jZU9yQ2xhc3MgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24pXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgd2hldGhlciB0aGlzIGRlZmluaXRpb24gaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWRcclxuXHRcdGxldCBydWxlQ29udGFpbmVyID0gaW5zdGFuY2VPckNsYXNzW3N5bVJ1bGVDb250YWluZXJdIGFzIFJ1bGVDb250YWluZXI7XHJcblx0XHRpZiAoIXJ1bGVDb250YWluZXIpXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCB0aGUgbmFtZSBmb3Igb3VyIGNvbnRhaW5lclxyXG5cdFx0XHRsZXQgbmFtZSA9IGdlbmVyYXRlVW5pcXVlTmFtZSgpO1xyXG5cdFx0XHRpZiAoIXVzZVVuaXF1ZVN0eWxlTmFtZXMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgZGVmaW5pdGlvbkNsYXNzID0gaW5zdGFuY2VPckNsYXNzLmNvbnN0cnVjdG9yO1xyXG5cdFx0XHRcdGlmIChkZWZpbml0aW9uQ2xhc3MubmFtZSlcclxuXHRcdFx0XHRcdG5hbWUgKz0gXCJfXCIgKyBkZWZpbml0aW9uQ2xhc3MubmFtZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlT3JDbGFzcywgbmFtZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGluc3RhbmNlT3JDbGFzcztcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdHJldHVybiBpbnN0YW5jZU9yQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpXHJcblx0XHRcdD8gaW5zdGFuY2VPckNsYXNzW3N5bUluc3RhbmNlXVxyXG5cdFx0XHQ6IHByb2Nlc3NDbGFzcyggaW5zdGFuY2VPckNsYXNzLCBvd25lcik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHJ1bGUgY29udGFpbmVyIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRhaW5lckZyb21EZWZpbml0aW9uKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiBSdWxlQ29udGFpbmVyXHJcbntcclxuXHRyZXR1cm4gZGVmaW5pdGlvbiA/IGRlZmluaXRpb25bc3ltUnVsZUNvbnRhaW5lcl0gOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYW5kIGluc2VydHMgYWxsIGl0cyBydWxlcyBpbnRvIERPTS4gSWYgdGhlIGlucHV0IG9iamVjdCBpc1xyXG4gKiBub3QgYSBzdHlsZSBkZWZpbml0aW9uIGJ1dCBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIG9idGFpbiBzdHlsZSBkZWZpbml0aW9uIGJ5IGNhbGxpbmcgdGhlICR1c2VcclxuICogZnVuY3Rpb24uIE5vdGUgdGhhdCBlYWNoIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzXHJcbiAqIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIGluc2VydGVkIHRvIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlclxyXG4gKiBnb2VzIHVwIHRvIDEuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHRsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3MpIGFzIFQ7XHJcblx0aWYgKCFpbnN0YW5jZSlcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGluc3RhbmNlW3N5bVJ1bGVDb250YWluZXJdIGFzIFJ1bGVDb250YWluZXI7XHJcblx0cnVsZUNvbnRhaW5lci5hY3RpdmF0ZSgpO1xyXG5cdHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaCBzdHlsZVxyXG4gKiBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZFxyXG4gKiBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxue1xyXG5cdGlmICghZGVmaW5pdGlvbilcclxuXHRcdHJldHVybjtcclxuXHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBkZWZpbml0aW9uW3N5bVJ1bGVDb250YWluZXJdIGFzIFJ1bGVDb250YWluZXI7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0XHRydWxlQ29udGFpbmVyLmRlYWN0aXZhdGUoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAoc2hvcnQpIHJ1bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBlbmFibGVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZU9wdGltaXplZFN0eWxlTmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0dXNlVW5pcXVlU3R5bGVOYW1lcyA9IGVuYWJsZTtcclxuXHR1bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gcHJlZml4ID8gcHJlZml4IDogXCJuXCI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgbW9kdWxlIGRlZmluZXMgdHlwZXMgYW5kIGludGVyZmFjZXMgdGhhdCByZXByZXNlbnQgQ1NTIHJ1bGVzLlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQge0lWYXJQcm94eSwgU3RyaW5nUHJveHksIEV4dGVuZGVkfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge0lTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuXHRQc2V1ZG9DbGFzcywgUHNldWRvRWxlbWVudCwgQ3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzcywgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdGllc1xyXG59IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXh0ZW5kZWRTdHlsZXNldCB0eXBlIGV4dGVuZHMgdGhlIFN0eWxlc2V0IHR5cGUgd2l0aCBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBwcm92aWRlXHJcbiAqIGFkZGl0aW9uYWwgbWVhbmluZyB0byB0aGUgc3R5bGVzZXQgYW5kIGFsbG93IGJ1aWxkaW5nIG5lc3RlZCBzdHlsZXM6XHJcbiAqIC0gVGhlIGArYCBwcm9wZXJ0eSBzcGVjaWZpZXMgb25lIG9yIG1vcmUgcGFyZW50IHN0eWxlIHJ1bGVzLiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nXHJcbiAqICAgcGFyZW50IHJ1bGVzIHVzaW5nIGEgY29udmVuaWVudCBzdHlsZS1wcm9wZXJ0eS1saWtlIG5vdGF0aW9uLlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBwc2V1ZG8gY2xhc3MgbmFtZXMgKGUuZy4gXCI6aG92ZXJcIikgb3IgcHNldWRvIGVsZW1lbnQgbmFtZXMgKGUuZy4gXCI6OmFmdGVyXCIpLlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIG5hbWVzIG9mIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgKGUuZy4gXCI6bnRoLWNoaWxkXCIpIG9yIHBhcmFtZXRlcml6ZWRcclxuICogICBwc2V1ZG8gZWxlbWVudHMgKGUuZy4gXCI6OnNsb3R0ZWRcIikuIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBhIHR1cGxlLCB3aGVyZSB0aGUgZmlyc3RcclxuICogICBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgZm9yIHRoZSBzZWxlY3RvciBhbmQgdGhlIHNlY29uZCBlbGVtZW50IGlzIHRoZSBzdHlsc2V0LlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gVGhlIFwiJlwiIHByb3BlcnR5IHRoYXQgY29udGFpbnMgYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIGVhY2ggZGVmaW5pbmcgYSBzZWxlY3RvciBhbmQgYVxyXG4gKiAgIHN0eWxlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBzZWxlY3Rvci4gU2VsZWN0b3JzIGNhbiB1c2UgdGhlIGFtcGVyc2FuZCBzeW1ib2wgKCcmJykgdG8gcmVmZXJcclxuICogICB0byB0aGUgcGFyZW50IHN0eWxlIHNlbGVjdG9yLlxyXG4gKiBcclxuICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIHN0eWxlIHJ1bGVzIChlLmcuICRjbGFzcykgYWNjZXB0IHRoZSBFeHRlbmRlZFN0eWxlc2V0IGFzIGEgcGFyYW1ldGVyLFxyXG4gKiBmb3IgZXhhbXBsZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgTXlTdHlsZXNcclxuICoge1xyXG4gKiAgICAgbXlDbGFzcyA9ICRjbGFzcygge1xyXG4gKiAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gKiAgICAgICAgIFwiOmhvdmVyXCIgOiB7XHJcbiAqICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJncmF5XCJcclxuICogICAgICAgICB9LFxyXG4gKiAgICAgICAgIFwiJlwiOiBbXHJcbiAqICAgICAgICAgICAgIFsgXCJsaSA+ICZcIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIgfSBdXHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgfSlcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoaXMgd2lsbCB0cmFuc2xhdGUgdG8gdGhlIGZvbGxvd2luZyBDU1MgKGNsYXNzIG5hbWUgaXMgYXV0by1nZW5lcmF0ZWQpOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB3aGl0ZTsgfVxyXG4gKiAubTEyMzpob3ZlciB7IGJhY2tncm91bmRDb2xvcjogZ3JheTsgfVxyXG4gKiBsaSA+IC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3c7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFN0eWxlc2V0ID0gU3R5bGVzZXQgJlxyXG5cdHtcclxuXHRcdFtLIGluIFBzZXVkb0NsYXNzIHwgUHNldWRvRWxlbWVudF0/OiBFeHRlbmRlZFN0eWxlc2V0XHJcblx0fVxyXG5cdFx0JlxyXG5cdHtcclxuXHRcdFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSxcclxuXHRcdFwiJlwiPzogW0Nzc1NlbGVjdG9yLCBFeHRlbmRlZFN0eWxlc2V0XVtdLFxyXG5cdH1cclxuXHRcdCZcclxuXHR7XHJcblx0XHRbSyBpbiBrZXlvZiBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0aWVzXT86IFtFeHRlbmRlZDxJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0aWVzW0tdPiwgRXh0ZW5kZWRTdHlsZXNldF1cclxuXHR9O1xyXG5cdFxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYWxsIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcyB0aGF0IGhhdmUgYSBuYW1lOyB0aGF0IGlzLFxyXG4gKiBjbGFzcywgSUQsIGtleWZyYW1lcyBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsaW5nIHJ1bGUgaW4gYSBzdHlsZSBzaGVldC4gU3R5bGUgcnVsZXMgY2FuIGJlIHVzZWRcclxuICogYW55d2hlcmUgd2hlcmUgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgZGVmaW5lZDogY2xhc3MgcnVsZXMsIElEIHJ1bGVzLCBzZWxlY3RvciBydWxlcyxcclxuICoga2V5ZnJhbWVzLCBldGMuIFN0eWxlUnVsZSBkZWZpbmVzIGEgc3R5bGVzZXQgYW5kIGNhbiBvcHRpb25hbGx5IHBvaW50IHRvIG9uZSBvciBtb3JlIHN0eWxlIHJ1bGVzXHJcbiAqIGZyb20gd2hpY2ggaXQgaW5oZXJpdHMuIEEgc3R5bGVzZXQgY29tYmluZXMgYWxsIHRoZSBwcm9wZXJ0aWVzIGZyb20gaXRzIG93biBwcm9wZXJ0eSBibG9jayBhc1xyXG4gKiB3ZWxsIGFzIGZyb20gYWxsIG9mIHN0eWxlIHJ1bGVzIGl0IGluaGVyaXRlcyBmcm9tLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHNldFByb3A8SyBleHRlbmRzIGtleW9mIElTdHlsZXNldD4oIG5hbWU6IEssIHZhbHVlOiBJU3R5bGVzZXRbS10sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY3VzdG1vbSBjU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBjdXN0b21WYXIgSUNVc3RvbVZhciBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHNldEN1c3RvbVByb3A8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIGN1c3RvbVZhcjogSVZhclJ1bGU8Sz4sIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFic3RyYWN0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgdGhhdCBjYW4gb25seSBiZSB1c2VkIGFzIGEgYmFzZSBmb3Igb3RoZXJcclxuICogc3R5bGUgcnVsZXMuIE5vIENTU1N0eWxlUnVsZSBvYmplY3RzIGFyZSBjcmVhdGVkIGZvciB0aGUgYWJzdHJhY3QgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBYnN0cmFjdFJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogRmxhZywgd2hpY2ggaXMgYWx3YXlzIHRydWUsIHRoYXQgaXMgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGFic3RyYWN0IHJ1bGVzIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRyZWFkb25seSBpc0Fic3RyYWN0UnVsZTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUYWdSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIHRhZyBuYW1lLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skdGFnXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUYWdSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIEhUTUwgdGFnICovXHJcblx0cmVhZG9ubHkgdGFnOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIGNsYXNzLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY2xhc3NdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzUnVsZSBleHRlbmRzIElTdHlsZVJ1bGUsIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIEZsYWcsIHdoaWNoIGlzIGFsd2F5cyB0cnVlLCB0aGF0IGlzIG5lZWRlZCB0byBkaXN0aW5ndWlzaCBjbGFzcyBydWxlcyBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cmVhZG9ubHkgaXNDbGFzc1J1bGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSURSdWxlIGludGVyZmFjZSByZXByZXNlbnRzYSBhIHN0eWxlIHJ1bGUgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRpZF1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSURSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogRmxhZywgd2hpY2ggaXMgYWx3YXlzIHRydWUsIHRoYXQgaXMgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIElEIHJ1bGVzIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRyZWFkb25seSBpc0lEUnVsZTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZWxlY3RvclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHNhIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZXMgYnkgdGhlXHJcbiAqIGdpdmVuIHNlbGVjdG9yLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3R5bGVdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdG9yUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRyZWFkb25seSBzZWxlY3RvclRleHQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25SdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRrZXlmcmFtZXNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWUgdHlwZSBkZWZpbmVzIGEgc2luZ2xlIGtleWZyYW1lIHdpdGhpbiBhIEBrZXlmcmFtZXMgcnVsZS5cclxuICogVGhlIHdheXBvaW50IGNhbiBiZSBzcGVjaWZpZWQgYXMgXCJmcm9tXCIgb3IgXCJ0b1wiIHN0cmluZ3Mgb3IgYXMgYSBudW1iZXIgMCB0byAxMDAsIHdoaWNoIHdpbGwgYmVcclxuICogdXNlZCBhcyBhIHBlcmNlbnQuIFN0eWxlc2V0IGZvciBhIGtleWZyYW1lIGFsbG93cyBjdXN0b20gcHJvcGVydGllcyAodmlhIFwiLS1cIikgYnV0IGRvIG5vdFxyXG4gKiBhbGxvdyB0aGUgIWltcG9ydGFudCBmbGFnIChcIiFcIikuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GcmFtZSA9IFtcImZyb21cIiB8IFwidG9cIiB8IG51bWJlciwgT21pdDxFeHRlbmRlZFN0eWxlc2V0LFwiIVwiPl07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUltcG9ydFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRpbXBvcnRdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltcG9ydFJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0ltcG9ydFJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZvbnRGYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBmb250LWZhY2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGZvbnRmYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb250RmFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0ZvbnRGYWNlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZXNwYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG5hbWVzcGFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZXNwYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogTmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBwcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBuYW1lc3BhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU05hbWVzcGFjZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhZ2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHBhZ2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE9wdGlvbmFsIG5hbWUgb2YgdGhlIHBhZ2UgcHNldWRvIHN0eWxlIChlLmcuIFwiXCI6Zmlyc3RcIikgKi9cclxuXHRyZWFkb25seSBwc2V1ZG9DbGFzczogUGFnZVBzZXVkb0NsYXNzIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUGFnZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgY3VzdG9tIHByb3BlcnR5IGRlZmluaXRpb24uXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyR2YXJdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gZXh0ZW5kcyBJTmFtZWRFbnRpdHksIElWYXJQcm94eTxWYXJWYWx1ZVR5cGU8Sz4+XHJcbntcclxuXHQvKiogTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdHJlYWRvbmx5IHRlbXBsYXRlOiBLO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGZvciB0aGUgcHJvcGVydHkgaW4gdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyB0aGF0IGtlZXBzIHJlZmVyZW5jZSB0byB0aGVcclxuICogdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIERldmVsb3BlcnMgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGFjY2VzcyBydWxlcyBpbiB0aGVcclxuICogY2hhaW4gb2YgbmVzdGVkIGdyb3VwaW5nIHJ1bGVzLiBXZSBuZWVkIHRvIGF2b2lkIGVudW1lcmF0aW5nIHRoaXMgcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nXHJcbiAqIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3ltT3duZXIgPSBTeW1ib2woXCJvd25lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYSBiYXNlIGZvciBhbGwgY2xhc3NlcyB0aGF0IGNvbnRhaW4gZGVmaW5pbml0aW9ucyBvZiBDU1MgcnVsZXMuXHJcbiAqIFVzZSBpdCB0aGUgZm9sbG93aW5nIHdheTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgTXlTdHlsZXMgZXh0ZW5kIFN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICAvLyA4cHggcGFkZGluZyBvbiByZWd1bGFyIGRldmljZXNcclxuICogICAgIGRlZmF1bHRQYWRkaW5nID0gJHZhciggXCJwYWRkaW5nXCIsIDgpXHJcbiAqIFxyXG4gKiAgICAgaWZOYXJyb3dEZXZpY2UgPSAkbWVkaWEoIHttYXhXaWR0aDogNjAwIH0sXHJcbiAqICAgICAgICAgY2xhc3MgZXh0ZW5kcyBTdHlsZURlZmluaXRpb248TXlTdHlsZXM+XHJcbiAqICAgICAgICAge1xyXG4gKiAgICAgICAgICAgICAvLyA0cHggcGFkZGluZyBvbiBuYXJyb3cgZGV2aWNlc1xyXG4gKiAgICAgICAgICAgICBkZWZhdWx0UGFkZGluZyA9ICR2YXIoIFwicGFkZGluZ1wiLCBMZW4uY2FsYyggXCJ7MH0gLyAyXCIsIHRoaXMub3duZXIuZGVmYXVsdFBhZGRpbmcpKVxyXG4gKiAgICAgICAgIH1cclxuICogICAgIClcclxuICogfVxyXG4gKiBgYGBcclxuICogQHR5cGVwYXJhbSBPIFRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB3aGljaCBpcyB0aGUgb3duZXIgb2YgdGhpcyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZURlZmluaXRpb248TyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhcmUgbmV2ZXIgY3JlYXRlZCBkaXJlY3RseSAtIHRoZXkgYXJlIGluc3RhbnRpYXRlZCBvbmx5IHdoZW5cclxuXHQgKiBlaXRoZXIgdGhlIFtbJHVzZV1dIG9yIFtbJGFjdGl2YXRlXV0gZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSBvd25lciBSZWZlcmVuY2UgdG8gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0ICovXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBvd25lcjogTyB8IG51bGwpXHJcblx0e1xyXG5cdFx0dGhpc1tzeW1Pd25lcl0gPSBvd25lcjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZmVycyB0byB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSAqKm93bmVyKiogb2ZcclxuXHQgKiB0aGlzIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LiBUaGUgb3duZXIgaXMgdGhlIHRvcC1sZXZlbCBjbGFzcyBpbiB0aGUgY2hhaW4gb2Ygc3R5bGVcclxuXHQgKiBkZWZpbml0aW9uIGNsYXNzZXMuIFRocm91Z2ggdGhpcyBtZW1lYmVyLCBhbGwgcnVsZXMgYW5kIG90aGVyIG1lbWViZXJzIGRlZmluZWQgaW4gdGhlIG93bmVyXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzcyBjYW4gYmUgYWNjZXNzZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBvd25lcigpOiBPIHwgbnVsbCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZURlZmluaXRpb25DbGFzczxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPE8+ID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqIEFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgc2hvdWxkIGNvbmZvcm0gdG8gdGhpcyBjb25zdHJ1Y3RvciAqL1xyXG5cdG5ldyggb3duZXI/OiBPKTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdXBwb3J0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3VwcG9ydHNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBkZWZpbmluZyB0aGUgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlXHJcblx0cmVhZG9ubHkgcnVsZXM6IFQ7XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0dyb3VwaW5nUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3VwcG9ydFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHN1cHBvcnRzXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1lZGlhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbWVkaWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIHNlbGVjdG9yIHRva2VuIHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gYXJndW1lbnQgdG8gdGhlICRzZWxlY3RvciBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBTZWxlY3RvclRva2VuVHlwZSA9IElUYWdSdWxlIHwgSUNsYXNzUnVsZSB8IElJRFJ1bGUgfFxyXG4gICAgSVNlbGVjdG9yUnVsZSB8IG51bWJlciB8IHN0cmluZyB8IFN0cmluZ1Byb3h5O1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdHlsZVJ1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIElWYXJSdWxlLCBJQWJzdHJhY3RSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlLCBJU2VsZWN0b3JSdWxlLCBJVGFnUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7SVN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXN9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHttZXJnZVN0eWxlc2V0cywgc3R5bGVzZXRUb1N0cmluZywgc3R5bGVQcm9wVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7dmFsdWVUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCI7XHJcbmltcG9ydCB7IHBzZXVkb0VudGl0eVRvU3RyaW5nIH0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvckZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBydWxlcyB0aGF0IGNvbnRhaW4gYSBzdHlsZSBydWxlLiBUaGlzIGNsYXNzXHJcbiAqIGltcGxlbWVudHMgdGhlIHBhcnNpbmcgb2YgdGhlIEV4dGVuZGVkU3R5bGVzZXQgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJU3R5bGVSdWxlXHJcbntcclxuXHQvLyBUaGUgc3R5bGVzZXQgY2FuIGJlIGFuIEV4dGVuZGVkU3R5bGVzZXQgZm9yIG1hbnkgcnVsZXM7IGhvd2V2ZXIsIGZvciBzb21lIGl0IGlzIGp1c3RcclxuXHQvLyBvZiB0aGUgU3R5bGVzZXQgdHlwZS5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlc2V0PzogU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoc3R5bGVzZXQpXHJcblx0XHRcdHRoaXMucGFyc2VJbnB1dFN0eWxlc2V0KCBzdHlsZXNldCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdvZXMgb3ZlciBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlbiBzdHlsZXNldCBhbmQgcGFyc2VzIHRoZW0gaW50byBwcm9wZXIgc3R5bGVzZXQsIHNldCBvZlxyXG5cdCAqIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFuZCBuZXN0ZWQgcnVsZXMuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwYXJzZUlucHV0U3R5bGVzZXQoIGlucHV0U3R5bGVzZXQ6IFN0eWxlc2V0KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHByZXBhcmUgbG9jYWwgdmFyaWFibGVzIHRvIGFjY3VtdWxhdGUgcGFyc2luZyByZXN1bHRzLiBXZSBkbyBpdCBpbiBsb2NhbCB2YXJpYmFsZXNcclxuXHRcdC8vIGJlY2F1c2UgaW4gY2FzZSB0aGVyZSBhcmUgcGFyZW50cywgd2Ugd2FudCBmaXJzdCBjb3B5IHByb3BlcnRpZXMgZnJvbSB0aGVtIHNvIHRoYXRcclxuXHRcdC8vIG91ciBvd24gcHJvcGVydGllcyBjYW4gb3ZlcnJpZGUgdGhlbS5cclxuXHRcdGxldCBwYXJlbnRSdWxlczogU3R5bGVSdWxlW10gfCBudWxsID0gbnVsbDtcclxuXHRcdGxldCBuZXN0ZWRSdWxlczogTmVzdGVkUnVsZVtdIHwgbnVsbCA9IG51bGw7XHJcblx0XHRsZXQgc3R5bGVzZXQ6IFN0eWxlc2V0ID0ge307XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gaW5wdXRTdHlsZXNldClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBpbnB1dFN0eWxlc2V0W3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcIitcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoZSB2YWx1ZSBpcyBhIHNpbmdsZSBvciBhbiBhcnJheSBvZiBTdHlsZVJ1bGVzIHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXHJcblx0XHRcdFx0bGV0IGV4dGVuZHNQcm9wVmFsID0gcHJvcFZhbCBhcyAoU3R5bGVSdWxlIHwgU3R5bGVSdWxlW10pO1xyXG5cdFx0XHRcdGlmIChleHRlbmRzUHJvcFZhbCBpbnN0YW5jZW9mIFN0eWxlUnVsZSlcclxuXHRcdFx0XHRcdHBhcmVudFJ1bGVzID0gW2V4dGVuZHNQcm9wVmFsXTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRwYXJlbnRSdWxlcyA9IGV4dGVuZHNQcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCI6XCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYSBzdHlsZXNldCBmb3IgYSBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnRcclxuXHRcdFx0XHRpZiAoIW5lc3RlZFJ1bGVzKVxyXG5cdFx0XHRcdFx0bmVzdGVkUnVsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0Ly8gaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoaXMgaXMgYSBwYXJhbWV0ZXJpc2VkIHBzZXVkbyBlbnRpdHkgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnRcclxuXHRcdFx0XHQvLyBpcyB0aGUgcGFyYW1ldGVyIHZhbHVlIChzdHJpbmcpIGFuZCB0aGUgc2Vjb25kIHRoZSBFeHRlbmRlZFN0eWxlc2V0LiBPdGhlcndpc2UsIHRoZSB2YWx1ZSBpc1xyXG5cdFx0XHRcdC8vIGp1c3QgdGhlIEV4dGVuZGVkU3R5bGVzZXQuXHJcblx0XHRcdFx0bGV0IG5lc3RlZFJ1bGU6IE5lc3RlZFJ1bGU7XHJcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0XHRcdFx0XHRuZXN0ZWRSdWxlID0gbmV3IE5lc3RlZFJ1bGUoIHByb3BOYW1lLCBwcm9wVmFsWzBdLCBwcm9wVmFsWzFdIGFzIEV4dGVuZGVkU3R5bGVzZXQsIHRoaXMpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG5lc3RlZFJ1bGUgPSBuZXcgTmVzdGVkUnVsZSggXCImXCIgKyBwcm9wTmFtZSwgdW5kZWZpbmVkLCBwcm9wVmFsIGFzIEV4dGVuZGVkU3R5bGVzZXQsIHRoaXMpO1xyXG5cclxuXHRcdFx0XHRuZXN0ZWRSdWxlcy5wdXNoKCBuZXN0ZWRSdWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCImXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIEV4dGVuZGVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghbmVzdGVkUnVsZXMpXHJcblx0XHRcdFx0XHRcdG5lc3RlZFJ1bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dHVwbGVzLmZvckVhY2goIHR1cGxlID0+IG5lc3RlZFJ1bGVzIS5wdXNoKCBuZXcgTmVzdGVkUnVsZSggdHVwbGVbMF0sIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGNvcHkgdGhlIHByb3BlcnR5IHZhbHVlIHRvIG91ciBpbnRlcm5hbCBzdHlsZXNldFxyXG5cdFx0XHRcdHN0eWxlc2V0W3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBieSBub3cgd2Ugd2VudCBvdmVyIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBpbnB1dCBzdHlsZXNldC4gSWYgd2UgaGF2ZSBwYXJlbnQgc3R5bGVcclxuXHRcdC8vIHJ1bGVzLCBjb3B5IHN0eWxlc2V0LCBpbXBvcnRhbnQgYW5kIG5lc3RlZCBydWxlcyBkYXRhIGZyb20gdGhlbS5cclxuXHRcdGlmIChwYXJlbnRSdWxlcyAmJiBwYXJlbnRSdWxlcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRwYXJlbnRSdWxlcy5mb3JFYWNoKCBwYXJlbnQgPT5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChwYXJlbnQuc3R5bGVzZXQpXHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0ID0gbWVyZ2VTdHlsZXNldHMoIHRoaXMuc3R5bGVzZXQsIHBhcmVudC5zdHlsZXNldCk7XHJcblxyXG5cdFx0XHRcdGlmIChwYXJlbnQubmVzdGVkUnVsZXMgJiYgcGFyZW50Lm5lc3RlZFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCF0aGlzLm5lc3RlZFJ1bGVzKVxyXG5cdFx0XHRcdFx0XHR0aGlzLm5lc3RlZFJ1bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0cGFyZW50Lm5lc3RlZFJ1bGVzLmZvckVhY2goIG5lc3RlZFJ1bGUgPT5cclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGV0IG5ld05lc3RlZFJ1bGUgPSBuZXN0ZWRSdWxlLmNsb25lKCk7XHJcblx0XHRcdFx0XHRcdG5ld05lc3RlZFJ1bGUuY29udGFpbmluZ1J1bGUgPSB0aGlzO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5lc3RlZFJ1bGVzLnB1c2goIG5ld05lc3RlZFJ1bGUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBub3cgdGhhdCB3ZSBjb3BpZWQgZGF0YSBmcm9tIHRoZSBwYXJlbnRzIChpZiBhbnkpIHdlIG5lZWQgdG8gY29weSBvdmVyIG91ciBvd25cclxuXHRcdGlmIChzdHlsZXNldCAmJiBPYmplY3Qua2V5cyggc3R5bGVzZXQpLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdGlmICghdGhpcy5zdHlsZXNldClcclxuXHRcdFx0XHR0aGlzLnN0eWxlc2V0ID0gc3R5bGVzZXQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgc3R5bGVzZXQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChuZXN0ZWRSdWxlcyAmJiBuZXN0ZWRSdWxlcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoIXRoaXMubmVzdGVkUnVsZXMpXHJcblx0XHRcdFx0dGhpcy5uZXN0ZWRSdWxlcyA9IG5lc3RlZFJ1bGVzO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bmVzdGVkUnVsZXMuZm9yRWFjaCggbmVzdGVkUnVsZSA9PiB0aGlzLm5lc3RlZFJ1bGVzLnB1c2goIG5lc3RlZFJ1bGUpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHQvLyBpZiBuZXN0ZWQgcnVsZXMgZXhpc3QsIHByb2Nlc3MgdGhlbSB1bmRlciB0aGUgc2FtZSBjb250YWluZXJcclxuXHRcdGlmICh0aGlzLm5lc3RlZFJ1bGVzKVxyXG5cdFx0XHR0aGlzLm5lc3RlZFJ1bGVzLmZvckVhY2goIG5lc3RlZFJ1bGUgPT4gbmVzdGVkUnVsZS5wcm9jZXNzKCBvd25lciwgbnVsbCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNvcHlGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnN0eWxlc2V0ID0gc3JjLnN0eWxlc2V0O1xyXG5cclxuXHRcdC8vIGlmIG5lc3RlZCBydWxlcyBleGlzdCwgY2xvbmUgdGhlbVxyXG5cdFx0aWYgKHNyYy5uZXN0ZWRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5uZXN0ZWRSdWxlcyA9IFtdO1xyXG5cdFx0XHRmb3IoIGxldCBzcmNOZXN0ZWRSdWxlIG9mIHNyYy5uZXN0ZWRSdWxlcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBuZXdOZXN0ZWRSdWxlID0gc3JjTmVzdGVkUnVsZS5jbG9uZSgpO1xyXG5cdFx0XHRcdG5ld05lc3RlZFJ1bGUuY29udGFpbmluZ1J1bGUgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMubmVzdGVkUnVsZXMucHVzaCggbmV3TmVzdGVkUnVsZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHJ1bGUuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnN0eWxlc2V0XHJcblx0XHRcdD8gYCR7dGhpcy5nZXRTZWxlY3RvclN0cmluZygpfSAke3N0eWxlc2V0VG9TdHJpbmcoIHRoaXMuc3R5bGVzZXQpfWBcclxuXHRcdFx0OiBcIlwiO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdHlsZXNldClcclxuXHRcdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIHRoaXMudG9Dc3NTdHJpbmcoKSEsIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHRcdC8vIGlmIG5lc3RlZCBydWxlcyBleGlzdCwgaW5zZXJ0IHRoZW0gdW5kZXIgdGhlIHNhbWUgcGFyZW50XHJcblx0XHRpZiAodGhpcy5uZXN0ZWRSdWxlcylcclxuXHRcdFx0dGhpcy5uZXN0ZWRSdWxlcy5mb3JFYWNoKCBuZXN0ZWRSdWxlID0+IG5lc3RlZFJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlcnMgdGhlIENTUyBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyKCk7XHJcblxyXG5cdFx0Ly8gaWYgbmVzdGVkIHJ1bGVzIGV4aXN0LCBjbGVhciB0aGVtIHRvb1xyXG5cdFx0aWYgKHRoaXMubmVzdGVkUnVsZXMpXHJcblx0XHRcdHRoaXMubmVzdGVkUnVsZXMuZm9yRWFjaCggbmVzdGVkUnVsZSA9PiBuZXN0ZWRSdWxlLmNsZWFyKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICovXHJcblx0cHVibGljIHNldFByb3A8SyBleHRlbmRzIGtleW9mIElTdHlsZXNldD4oIG5hbWU6IEssIHZhbHVlOiBJU3R5bGVzZXRbS10sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmNzc1J1bGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUuc3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsXHJcblx0XHRcdHN0eWxlUHJvcFRvU3RyaW5nKCBuYW1lLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogbnVsbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3Rtb20gY1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gdmFyT2JqIElWYXJSdWxlIG9iamVjdCBkZWZpbmluZyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhclZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICovXHJcblx0cHVibGljIHNldEN1c3RvbVByb3A8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHZhck9iajogSVZhclJ1bGU8Sz4sIHZhclZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF2YXJPYmogfHwgIXRoaXMuY3NzUnVsZSB8fCAhKHZhck9iaiBpbnN0YW5jZW9mIFZhclJ1bGUpKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KCB2YXJPYmouY3NzTmFtZSxcclxuXHRcdFx0c3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgdmFyVmFsdWUsIHRydWUpLCBpbXBvcnRhbnQgPyBcIiFpbXBvcnRhbnRcIiA6IG51bGwpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdC8vIFJlc3VsdGFudCBTdHlsZXNldCBvYmplY3QgZGVmaW5pbmcgcHJvcGVydGllcyB0byBiZSBpbnNlcnRlZCBpbnRvIERPTS5cclxuXHRwcm90ZWN0ZWQgc3R5bGVzZXQ6IFN0eWxlc2V0O1xyXG5cclxuXHQvLyBMaXN0IG9mIG5lc3RlZCBzdHlsZXMuXHJcblx0cHJpdmF0ZSBuZXN0ZWRSdWxlczogTmVzdGVkUnVsZVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmVzdGVkUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGlzIG5lc3RlZCB3aXRoaW4gYW5vdGhlciBzdHlsZSBydWxlLlxyXG4gKi9cclxuY2xhc3MgTmVzdGVkUnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0Ly8gZm9yIHJlZ3VsYXIgc2VsZWN0b3JzLCBwc2V1ZG8gY2xhc3NlcyBhbmQgcHNldWRvIGVsZW1lbnRzLCB0aGUgc2VsZWN0b3IgYWxyZWFkeSBjb250YWluc1xyXG5cdC8vIHRoZSBhbXBlcnNhbmQuIEZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGFuZCBhc3VkbyBlbGVtZW50cywgdGhlIHNlbGVjdG9yIGlzIGp1c3RcclxuXHQvLyB0aGUgZW50aXR5IG5hbWUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHNlbGVjdG9yUGFyYW0/OiBhbnksIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldCwgY29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHRcdHRoaXMuc2VsZWN0b3JQYXJhbSA9IHNlbGVjdG9yUGFyYW07XHJcblx0XHR0aGlzLmNvbnRhaW5pbmdSdWxlID0gY29udGFpbmluZ1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBOZXN0ZWRSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgTmVzdGVkUnVsZSggdGhpcy5zZWxlY3Rvcik7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdG5ld1J1bGUuc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yO1xyXG5cdFx0bmV3UnVsZS5zZWxlY3RvclBhcmFtID0gdGhpcy5zZWxlY3RvclBhcmFtO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHRoaXMuY29udGFpbmluZ1J1bGUhLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRpZiAodGhpcy5zZWxlY3RvclBhcmFtKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLnNlbGVjdG9yIGFzIHN0cmluZztcclxuXHRcdFx0cmV0dXJuIGAke3BhcmVudFNlbGVjdG9yfSR7c2VsZWN0b3J9KCR7cHNldWRvRW50aXR5VG9TdHJpbmcoIHNlbGVjdG9yLCB0aGlzLnNlbGVjdG9yUGFyYW0pfSlgO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyByZXBsYWNlIGFsbCBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpbiB0aGUgc2VsZWN0b3Igc3RyaW5nIHdpdGggdGhlXHJcblx0XHRcdC8vIHNlbGVjdG9yIHN0cmluZyBvZiB0aGUgcGFyZW50IHJ1bGUuXHJcblx0XHRcdHJldHVybiB2YWx1ZVRvU3RyaW5nKCB0aGlzLnNlbGVjdG9yKS5yZXBsYWNlKCAvJi9nLCBwYXJlbnRTZWxlY3Rvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFBhcnRpYWwgc2VsZWN0b3IgdGhhdCBzaG91bGQgYmUgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBzZWxlY3Rvci5cclxuXHRwcml2YXRlIHNlbGVjdG9yOiBDc3NTZWxlY3RvcjtcclxuXHJcblx0Ly8gT3B0aW9uYWwgcGFyYW1ldGVycyBmb3IgdGhlIHNlbGVjdG9yIC0gdXNlZCBmb3IgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcyBhbmQgZWxlbWVudHMuXHJcblx0cHJpdmF0ZSBzZWxlY3RvclBhcmFtPzogYW55O1xyXG5cclxuXHQvLyBQYXJlbnQgc3R5bGUgd2l0aGluIHdoaWNoIHRoaXMgcnVsZSBpcyBuZXN0ZWQuXHJcblx0cHVibGljIGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQWJzdHJhY3RSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGJhc2UgZm9yIG90aGVyIHN0eWxlXHJcbiAqIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0UnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElBYnN0cmFjdFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBYnN0cmFjdFJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBBYnN0cmFjdFJ1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE92ZXJyaWRlcyB0aGUgU3R5bGVSdWxlJ3MgaW1wbGVtZW50YXRpb24gdG8gZG8gbm90aGluZy4gTm8gQ1NTU3R5bGVSdWxlIGlzIGNyZWF0ZWQgZm9yXHJcblx0Ly8gYWJzdHJhY3QgcnVsZXMuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogT25seSBuZWVkZWQgdG8gZGlzdGluZ3Vpc2ggZnJvbSBvdGhlciBydWxlcyAqL1xyXG5cdHB1YmxpYyBnZXQgaXNBYnN0cmFjdFJ1bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDbGFzc1J1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBDU1MgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUNsYXNzUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IEV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDbGFzc1J1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCIuXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ2xhc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQ2xhc3NSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0NsYXNzUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDbGFzc1J1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSURSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUlEUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IEV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElJRFJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCIjXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogSURSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgSURSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0lEUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElJRFJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTZWxlY3RvclJ1bGUgdHlwZSBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvclJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJU2VsZWN0b3JSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblxyXG5cdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0dGhpcy5zZWxlY3RvclRleHQgPSB2YWx1ZVRvU3RyaW5nKCB0aGlzLnNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFNlbGVjdG9yUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IFNlbGVjdG9yUnVsZSggdGhpcy5zZWxlY3Rvcik7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RvclRleHQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRwdWJsaWMgc2VsZWN0b3JUZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIHNlbGVjdG9yIG9iamVjdCBmb3IgdGhpcyBydWxlLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVGFnUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIHRhZyBuYW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRhZ1J1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJVGFnUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0YWc6IHN0cmluZywgc3R5bGU/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnRhZyA9IHRhZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFRhZ1J1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBUYWdSdWxlKCB0aGlzLnRhZyk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy50YWc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBIVE1MIHRhZyAqL1xyXG5cdHB1YmxpYyB0YWc6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lWYXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1ZhclZhbHVlVHlwZSwgVmFyVGVtcGxhdGVOYW1lfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVmFyUnVsZSBkb2VzIG5vdCBkZXJpdmUgZnJvbSB0aGUgUnVsZVxyXG4gKiBjbGFzcyBiZWNhdXNlIGl0IGlzIG5vdCBhIHJlYWwgQ1NTIHJ1bGU7IGhvd2V2ZXIsIGluIG1hbnkgYXNwZWN0cyBpdCByZXBlYXRzIHRoZSBSdWxlJ3NcclxuICogZnVuY3Rpb25hbGl0eS4gSW4gcGFydGljdWxhciBpdCBoYXMgdGhlIHByb2Nlc3MgZnVuY3Rpb24gdGhhdCBhbGxvd3MgaXQgdG8gb2J0YWluIGFuIGFjdHVhbFxyXG4gKiBuYW1lLCB3aGljaCB3aWxsIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBhbmQgdXNpbmcgdGhpcyBjdXN0b20gcHJvcGVydHkgaW4gQ1NTLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHdoaWxlIHRoZSB0eXBlIHBhcmFtZXRlciBLIGlzIGEga2V5IG9mIHRoZSBJQ3NzU3R5bGVzZXQgaW50ZXJmYWNlLCB0aGUgdmFsdWUgaXMgb2ZcclxuICogdHlwZSBJU3RpbGVzZXRbS10sIHdoY2loIGlzIEV4dGVuZGVkPElDc3NTdHlsZXNldFtLXT4uIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmcgdmFsdWVzIHRoYXQgYXJlXHJcbiAqIHZhbGlkIGZvciB0aGUgRXh0ZW5kZWQgcm9wZXJ0eSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gaW1wbGVtZW50cyBJVmFyUnVsZTxLPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZTogSywgdmFsdWU/OiBWYXJWYWx1ZVR5cGU8Sz4sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+KVxyXG5cdHtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCItLVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFZhclJ1bGU8Sz5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFZhclJ1bGU8Sz4odGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5jc3NOYW1lfTogJHtzdHlsZVByb3BUb1N0cmluZyggdGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdHJ1ZSl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIHZhcigtLW5hbWUpIGV4cHJlc3Npb24uXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiBgdmFyKCR7dGhpcy5jc3NOYW1lfSlgO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0VmFsdWUoIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q3VzdG9tVmFyVmFsdWUoIHRoaXMuY3NzTmFtZSwgc3R5bGVQcm9wVG9TdHJpbmcoIHRoaXMudGVtcGxhdGUsIHZhbHVlLCB0cnVlKSwgaW1wb3J0YW50KVxyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8vIC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBpc1xyXG5cdC8vIC8vIG51bGwgZm9yIFN0eWxlc2hlZXQuXHJcblx0Ly8gcHVibGljIHJ1bGVOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHRwdWJsaWMgdGVtcGxhdGU6IEs7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gVmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+O1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+O1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncyBhbmQgd2hpY2ggaGFzZSB0aGUgQ1NTU3R5bGVSdWxlIHRocm91Z2ggd2hpY2hcclxuXHQvLyB0aGUgdmFsdWUgb2YgdGhpcyBjdXN0b20gdmFyaWFibGUgY2FuIGJlIGNoYW5nZWQuXHJcblx0cHVibGljIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJTmFtZWRDb2xvcnMsIENzc0NvbG9yLCBDb2xvcnN9IGZyb20gXCIuL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQge0Nzc1BlcmNlbnRNYXRoLCBDc3NBbmdsZU1hdGgsIHZhbHVlVG9TdHJpbmd9IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWR9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIGNvbG9yIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGNvbG9yTnVtYmVyVG9TdHJpbmcoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICBpZiAodmFsIDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIFwiQSBudW1iZXIgcmVwcmVzZW50aW5nIGNvbG9yIGNhbm5vdCBiZSBuZWdhdGl2ZTogXCIgKyB2YWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCIjMDAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgZmxvYXRpbmcgcG9pbnQ6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZWQgY29sb3Igd2l0aCB0aGUgZ2l2ZW4gdmFsdWUsIHJldHVybiB0aGUgY29sb3IgbmFtZVxyXG4gICAgbGV0IG5hbWUgPSByZXZlcnNlZENvbG9yTWFwLmdldCggdmFsKTtcclxuICAgIGlmIChuYW1lKVxyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIG90aGVyd2lzZSBjb252ZXJ0IG51bWVyaWMgdmFsdWUgdG8gIyBub3RhdGlvblxyXG4gICAgICAgIGxldCBzID0gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICByZXR1cm4gXCIjXCIgKyAodmFsIDw9IDB4RkZGRkZGID8gcy5wYWRTdGFydCggNiwgXCIwXCIpIDogcy5wYWRTdGFydCggOCwgXCIwXCIpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb2xvclNlcGFyYXRpb25Ub1N0cmluZyggYzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBjID09IG51bGwgPyBcIjBcIiA6IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gYyA6IE51bWJlci5pc0ludGVnZXIoYykgPyBjLnRvU3RyaW5nKCkgOiBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyhjKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9TdHJpbmcoIHI6IG51bWJlciB8IHN0cmluZywgZzogbnVtYmVyIHwgc3RyaW5nLCBiOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgciA9IGNvbG9yU2VwYXJhdGlvblRvU3RyaW5nKCByKTtcclxuICAgIGcgPSBjb2xvclNlcGFyYXRpb25Ub1N0cmluZyggZyk7XHJcbiAgICBiID0gY29sb3JTZXBhcmF0aW9uVG9TdHJpbmcoIGIpO1xyXG4gICAgYSA9IGEgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGEpO1xyXG5cclxuICAgIHJldHVybiAhYSA/IGByZ2IoJHtyfSwke2d9LCR7Yn0pYCA6IGByZ2JhKCR7cn0sJHtnfSwke2J9LCR7YX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9TdHJpbmcoIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyIHwgc3RyaW5nLCBsOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgaCA9IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGgpO1xyXG4gICAgcyA9IHMgPT0gbnVsbCA/IFwiMTAwJVwiIDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggcyk7XHJcbiAgICBsID0gbCA9PSBudWxsID8gXCIxMDAlXCIgOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBsKTtcclxuICAgIGEgPSBhID09IG51bGwgPyB1bmRlZmluZWQgOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhKTtcclxuXHJcbiAgICByZXR1cm4gIWEgPyBgaHNsKCR7aH0sJHtzfSwke2x9KWAgOiBgaHNsYSgke2h9LCR7c30sJHtsfSwke2F9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFscGhhVG9TdHJpbmcoIGM6IG51bWJlciB8IGtleW9mIElOYW1lZENvbG9ycywgYTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGxldCByZ2JWYWwgPSB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIiA/IHRoaXNbY10gOiBjO1xyXG4gICAgcmV0dXJuIHJnYlRvU3RyaW5nKCAocmdiVmFsICYgMHhGRjAwMDApID4+IDE2LCAocmdiVmFsICYgMHgwMEZGMDApID4+IDgsIHJnYlZhbCAmIDB4MDAwMEZGLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByZWRlZmluZWQgY29sb3IgbmFtZXMgYnkgdGhlaXIgbnVtZXJpYyB2YWx1ZXNcclxuICovXHJcbmxldCByZXZlcnNlZENvbG9yTWFwID0gbmV3IE1hcDxudW1iZXIsc3RyaW5nPigpO1xyXG5cclxuLy8gYnVpbGQgUmV2ZXJzZWQgQ29sb3IgTWFwXHJcbk9iamVjdC5lbnRyaWVzKCBDb2xvcnMpLmZvckVhY2goIChbbmFtZSwgdmFsdWVdKSA9PiByZXZlcnNlZENvbG9yTWFwLnNldCggdmFsdWUsIG5hbWUpICk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLiBJZiBhIHN0cmluZyB2YWx1ZSBpcyBpbiB0aGUgQ29sb3JzIG9iamVjdCB3ZVxyXG4gKiBuZWVkIHRvIGdldCBpdHMgbnVtYmVyIGFuZCBjb252ZXJ0IGl0IHRvIHRoZSByZ2JbYV0oKSBmdW5jdGlvbiBiZWNhdXNlIGl0IG1pZ2h0IGJlIGEgY3VzdG9tXHJcbiAqIGNvbG9yIG5hbWUgYWRkZWQgdmlhIElOYW1lZENvbG9ycyBtb2R1bGUgYXVnbWVudGF0aW9uLiBGb3IgbnVtZXJpYyB2YWx1ZXMsIHdlIGNoZWNrIGlmIHRoaXMgaXNcclxuICogb25lIG9mIHRoZSBwcmVkZWZpbmVkXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NDb2xvcj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gQ29sb3JzW3ZdID8gY29sb3JOdW1iZXJUb1N0cmluZyggQ29sb3JzW3ZdKSA6IHYsXHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JOdW1iZXJUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHR5cGVzIGZvciB3b3JraW5nIHdpdGggQ1NTIGNvbG9ycy5cclxuICovXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkQ29sb3JzIGludGVyZmFjZSBsaXN0cyB0aGUgbmFtZXMgb2Ygc3RhbmRhcmQgV2ViIGNvbG9ycy4gSXQgaXMgbmVlZGVkIHRvIGFsbG93IGRldmVsb3BlcnNcclxuICogdG8gYWRkIG5ldyBuYW1lZCBjb2xvcnMgdGhyb3VnaCBtb2R1bGUgYXVnbWVudGF0aW9uIHRlY2huaXF1ZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkQ29sb3JzXHJcbntcclxuICAgIHJlYWRvbmx5IGJsYWNrOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpbHZlcjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyYXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hcm9vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlZDogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHB1cnBsZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvdzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdnk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRlYWw6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWE6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFsaWNlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFudGlxdWV3aGl0ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWFtYXJpbmU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGF6dXJlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJlaWdlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJpc3F1ZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsYW5jaGVkYWxtb25kOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWV2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJyb3duOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJ1cmx5d29vZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNhZGV0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNob2NvbGF0ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcmFsOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5mbG93ZXJibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5zaWxrOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNyaW1zb246ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGN5YW46ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtibHVlOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtjeWFuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmF5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmV5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtraGFraTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmttYWdlbnRhOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmFuZ2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmNoaWQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtyZWQ6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzYWxtb246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzZWFncmVlbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyYXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyZXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBwaW5rOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBza3libHVlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyYXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyZXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRvZGdlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZpcmVicmljazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZsb3JhbHdoaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZvcmVzdGdyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdhaW5zYm9ybzogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdob3N0d2hpdGU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGQ6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGRlbnJvZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVueWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvbmV5ZGV3OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvdHBpbms6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlhbnJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlnbzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGl2b3J5OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGtoYWtpOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyYmx1c2g6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhd25ncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxlbW9uY2hpZmZvbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y3lhbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z29sZGVucm9keWVsbG93OiAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JlZW46ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0cGluazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2FsbW9uOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmF5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmV5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0eWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbmVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hZ2VudGE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWFxdWFtYXJpbmU6ICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bW9yY2hpZDogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXB1cnBsZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNsYXRlYmx1ZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNwcmluZ2dyZWVuOiAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXR1cnF1b2lzZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXZpb2xldHJlZDogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pZG5pZ2h0Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pbnRjcmVhbTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pc3R5cm9zZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1vY2Nhc2luOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdmFqb3doaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9sZGxhY2U6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlZHJhYjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZXJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yY2hpZDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV2aW9sZXRyZWQ6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhcGF5YXdoaXA6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlYWNocHVmZjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlcnU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBpbms6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBsdW06ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBvd2RlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJvc3licm93bjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJveWFsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhZGRsZWJyb3duOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbG1vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbmR5YnJvd246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYWdyZWVuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYXNoZWxsOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpZW5uYTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNreWJsdWU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNub3c6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNwcmluZ2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHN0ZWVsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRhbjogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRoaXN0bGU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRvbWF0bzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHR1cnF1b2lzZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHZpb2xldDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoZWF0OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlc21va2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvd2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlYmVjY2FwdXJwbGU6ICAgICAgICAgIG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbG9yUHJveHkgdHlwZSByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIG9mIENTUyBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBmb3JcclxuICogc2VjaWZ5aW5nIGNvbG9ycy4gVGhpcyBpbnRlcmZhY2UgaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZTogcmdiKCksIGFscGhhKCksIGV0Yy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbG9yUHJveHkgPSAocD86IFwiY29sb3JcIikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIHN0cmluZyAoZS5nLiBcInJlZFwiIG9yIFwiI2ZlNVwiIG9yIFwicmdiYSgxOTAsIDIwMCwgMjM1LCA5MCUpXCIsIGV0Yy4pXHJcbiAqICAgLSBudW1iZXI6XHJcbiAqICAgICAtIHBvc2l0aXZlIGludGVnZXIgbnVtYmVycyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgYXJlIHRyZWF0ZWQgYXMgUkdCIHNlcGFyYXRpb25zIDB4UlJHR0JCLlxyXG4gKiAgICAgLSBwb3NpdGl2ZSBpbnRlZ2VyIG51bWJlcnMgZ3JlYXRlciB0aGFuIDB4RkZGRkZGIGFyZSB0cmVhdGVkIGFzIFJHQkEgc2VwYXJhdGlvbnMgMHhSUkdHQkJBQS5cclxuICogICAgIC0gbmVnYXRpdmUgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIHJlamVjdGVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzQ29sb3IgPSBcInRyYW5zcGFyZW50XCIgfCBcImN1cnJlbnRjb2xvclwiIHwga2V5b2YgSU5hbWVkQ29sb3JzIHwgbnVtYmVyIHwgQ29sb3JQcm94eTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzOiBJTmFtZWRDb2xvcnMgPVxyXG57XHJcbiAgICBibGFjazogICAgICAgICAgICAgICAgICAweDAwMDAwMCxcclxuICAgIHNpbHZlcjogICAgICAgICAgICAgICAgIDB4YzBjMGMwLFxyXG4gICAgZ3JheTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICB3aGl0ZTogICAgICAgICAgICAgICAgICAweGZmZmZmZixcclxuICAgIG1hcm9vbjogICAgICAgICAgICAgICAgIDB4ODAwMDAwLFxyXG4gICAgcmVkOiAgICAgICAgICAgICAgICAgICAgMHhmZjAwMDAsXHJcbiAgICBwdXJwbGU6ICAgICAgICAgICAgICAgICAweDgwMDA4MCxcclxuICAgIGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgZ3JlZW46ICAgICAgICAgICAgICAgICAgMHgwMDgwMDAsXHJcbiAgICBsaW1lOiAgICAgICAgICAgICAgICAgICAweDAwZmYwMCxcclxuICAgIG9saXZlOiAgICAgICAgICAgICAgICAgIDB4ODA4MDAwLFxyXG4gICAgeWVsbG93OiAgICAgICAgICAgICAgICAgMHhmZmZmMDAsXHJcbiAgICBuYXZ5OiAgICAgICAgICAgICAgICAgICAweDAwMDA4MCxcclxuICAgIGJsdWU6ICAgICAgICAgICAgICAgICAgIDB4MDAwMGZmLFxyXG4gICAgdGVhbDogICAgICAgICAgICAgICAgICAgMHgwMDgwODAsXHJcbiAgICBhcXVhOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIG9yYW5nZTogICAgICAgICAgICAgICAgIDB4ZmZhNTAwLFxyXG4gICAgYWxpY2VibHVlOiAgICAgICAgICAgICAgMHhmMGY4ZmYsXHJcbiAgICBhbnRpcXVld2hpdGU6ICAgICAgICAgICAweGZhZWJkNyxcclxuICAgIGFxdWFtYXJpbmU6ICAgICAgICAgICAgIDB4N2ZmZmQ0LFxyXG4gICAgYXp1cmU6ICAgICAgICAgICAgICAgICAgMHhmMGZmZmYsXHJcbiAgICBiZWlnZTogICAgICAgICAgICAgICAgICAweGY1ZjVkYyxcclxuICAgIGJpc3F1ZTogICAgICAgICAgICAgICAgIDB4ZmZlNGM0LFxyXG4gICAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgMHhmZmViY2QsXHJcbiAgICBibHVldmlvbGV0OiAgICAgICAgICAgICAweDhhMmJlMixcclxuICAgIGJyb3duOiAgICAgICAgICAgICAgICAgIDB4YTUyYTJhLFxyXG4gICAgYnVybHl3b29kOiAgICAgICAgICAgICAgMHhkZWI4ODcsXHJcbiAgICBjYWRldGJsdWU6ICAgICAgICAgICAgICAweDVmOWVhMCxcclxuICAgIGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIDB4N2ZmZjAwLFxyXG4gICAgY2hvY29sYXRlOiAgICAgICAgICAgICAgMHhkMjY5MWUsXHJcbiAgICBjb3JhbDogICAgICAgICAgICAgICAgICAweGZmN2Y1MCxcclxuICAgIGNvcm5mbG93ZXJibHVlOiAgICAgICAgIDB4NjQ5NWVkLFxyXG4gICAgY29ybnNpbGs6ICAgICAgICAgICAgICAgMHhmZmY4ZGMsXHJcbiAgICBjcmltc29uOiAgICAgICAgICAgICAgICAweGRjMTQzYyxcclxuICAgIGN5YW46ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgZGFya2JsdWU6ICAgICAgICAgICAgICAgMHgwMDAwOGIsXHJcbiAgICBkYXJrY3lhbjogICAgICAgICAgICAgICAweDAwOGI4YixcclxuICAgIGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIDB4Yjg4NjBiLFxyXG4gICAgZGFya2dyYXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJrZ3JlZW46ICAgICAgICAgICAgICAweDAwNjQwMCxcclxuICAgIGRhcmtncmV5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2toYWtpOiAgICAgICAgICAgICAgMHhiZGI3NmIsXHJcbiAgICBkYXJrbWFnZW50YTogICAgICAgICAgICAweDhiMDA4YixcclxuICAgIGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIDB4NTU2YjJmLFxyXG4gICAgZGFya29yYW5nZTogICAgICAgICAgICAgMHhmZjhjMDAsXHJcbiAgICBkYXJrb3JjaGlkOiAgICAgICAgICAgICAweDk5MzJjYyxcclxuICAgIGRhcmtyZWQ6ICAgICAgICAgICAgICAgIDB4OGIwMDAwLFxyXG4gICAgZGFya3NhbG1vbjogICAgICAgICAgICAgMHhlOTk2N2EsXHJcbiAgICBkYXJrc2VhZ3JlZW46ICAgICAgICAgICAweDhmYmM4ZixcclxuICAgIGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIDB4NDgzZDhiLFxyXG4gICAgZGFya3NsYXRlZ3JheTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrc2xhdGVncmV5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIDB4MDBjZWQxLFxyXG4gICAgZGFya3Zpb2xldDogICAgICAgICAgICAgMHg5NDAwZDMsXHJcbiAgICBkZWVwcGluazogICAgICAgICAgICAgICAweGZmMTQ5MyxcclxuICAgIGRlZXBza3libHVlOiAgICAgICAgICAgIDB4MDBiZmZmLFxyXG4gICAgZGltZ3JheTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkaW1ncmV5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRvZGdlcmJsdWU6ICAgICAgICAgICAgIDB4MWU5MGZmLFxyXG4gICAgZmlyZWJyaWNrOiAgICAgICAgICAgICAgMHhiMjIyMjIsXHJcbiAgICBmbG9yYWx3aGl0ZTogICAgICAgICAgICAweGZmZmFmMCxcclxuICAgIGZvcmVzdGdyZWVuOiAgICAgICAgICAgIDB4MjI4YjIyLFxyXG4gICAgZ2FpbnNib3JvOiAgICAgICAgICAgICAgMHhkY2RjZGMsXHJcbiAgICBnaG9zdHdoaXRlOiAgICAgICAgICAgICAweGY4ZjhmZixcclxuICAgIGdvbGQ6ICAgICAgICAgICAgICAgICAgIDB4ZmZkNzAwLFxyXG4gICAgZ29sZGVucm9kOiAgICAgICAgICAgICAgMHhkYWE1MjAsXHJcbiAgICBncmVlbnllbGxvdzogICAgICAgICAgICAweGFkZmYyZixcclxuICAgIGdyZXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgaG9uZXlkZXc6ICAgICAgICAgICAgICAgMHhmMGZmZjAsXHJcbiAgICBob3RwaW5rOiAgICAgICAgICAgICAgICAweGZmNjliNCxcclxuICAgIGluZGlhbnJlZDogICAgICAgICAgICAgIDB4Y2Q1YzVjLFxyXG4gICAgaW5kaWdvOiAgICAgICAgICAgICAgICAgMHg0YjAwODIsXHJcbiAgICBpdm9yeTogICAgICAgICAgICAgICAgICAweGZmZmZmMCxcclxuICAgIGtoYWtpOiAgICAgICAgICAgICAgICAgIDB4ZjBlNjhjLFxyXG4gICAgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgMHhlNmU2ZmEsXHJcbiAgICBsYXZlbmRlcmJsdXNoOiAgICAgICAgICAweGZmZjBmNSxcclxuICAgIGxhd25ncmVlbjogICAgICAgICAgICAgIDB4N2NmYzAwLFxyXG4gICAgbGVtb25jaGlmZm9uOiAgICAgICAgICAgMHhmZmZhY2QsXHJcbiAgICBsaWdodGJsdWU6ICAgICAgICAgICAgICAweGFkZDhlNixcclxuICAgIGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIDB4ZjA4MDgwLFxyXG4gICAgbGlnaHRjeWFuOiAgICAgICAgICAgICAgMHhlMGZmZmYsXHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogICAweGZhZmFkMixcclxuICAgIGxpZ2h0Z3JheTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRncmVlbjogICAgICAgICAgICAgMHg5MGVlOTAsXHJcbiAgICBsaWdodGdyZXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0cGluazogICAgICAgICAgICAgIDB4ZmZiNmMxLFxyXG4gICAgbGlnaHRzYWxtb246ICAgICAgICAgICAgMHhmZmEwN2EsXHJcbiAgICBsaWdodHNlYWdyZWVuOiAgICAgICAgICAweDIwYjJhYSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIDB4ODdjZWZhLFxyXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHNsYXRlZ3JleTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIDB4YjBjNGRlLFxyXG4gICAgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgMHhmZmZmZTAsXHJcbiAgICBsaW1lZ3JlZW46ICAgICAgICAgICAgICAweDMyY2QzMixcclxuICAgIGxpbmVuOiAgICAgICAgICAgICAgICAgIDB4ZmFmMGU2LFxyXG4gICAgbWFnZW50YTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICAweDY2Y2RhYSxcclxuICAgIG1lZGl1bWJsdWU6ICAgICAgICAgICAgIDB4MDAwMGNkLFxyXG4gICAgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgMHhiYTU1ZDMsXHJcbiAgICBtZWRpdW1wdXJwbGU6ICAgICAgICAgICAweDkzNzBkYixcclxuICAgIG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIDB4M2NiMzcxLFxyXG4gICAgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgMHg3YjY4ZWUsXHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogICAgICAweDAwZmE5YSxcclxuICAgIG1lZGl1bXR1cnF1b2lzZTogICAgICAgIDB4NDhkMWNjLFxyXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgMHhjNzE1ODUsXHJcbiAgICBtaWRuaWdodGJsdWU6ICAgICAgICAgICAweDE5MTk3MCxcclxuICAgIG1pbnRjcmVhbTogICAgICAgICAgICAgIDB4ZjVmZmZhLFxyXG4gICAgbWlzdHlyb3NlOiAgICAgICAgICAgICAgMHhmZmU0ZTEsXHJcbiAgICBtb2NjYXNpbjogICAgICAgICAgICAgICAweGZmZTRiNSxcclxuICAgIG5hdmFqb3doaXRlOiAgICAgICAgICAgIDB4ZmZkZWFkLFxyXG4gICAgb2xkbGFjZTogICAgICAgICAgICAgICAgMHhmZGY1ZTYsXHJcbiAgICBvbGl2ZWRyYWI6ICAgICAgICAgICAgICAweDZiOGUyMyxcclxuICAgIG9yYW5nZXJlZDogICAgICAgICAgICAgIDB4ZmY0NTAwLFxyXG4gICAgb3JjaGlkOiAgICAgICAgICAgICAgICAgMHhkYTcwZDYsXHJcbiAgICBwYWxlZ29sZGVucm9kOiAgICAgICAgICAweGVlZThhYSxcclxuICAgIHBhbGVncmVlbjogICAgICAgICAgICAgIDB4OThmYjk4LFxyXG4gICAgcGFsZXR1cnF1b2lzZTogICAgICAgICAgMHhhZmVlZWUsXHJcbiAgICBwYWxldmlvbGV0cmVkOiAgICAgICAgICAweGRiNzA5MyxcclxuICAgIHBhcGF5YXdoaXA6ICAgICAgICAgICAgIDB4ZmZlZmQ1LFxyXG4gICAgcGVhY2hwdWZmOiAgICAgICAgICAgICAgMHhmZmRhYjksXHJcbiAgICBwZXJ1OiAgICAgICAgICAgICAgICAgICAweGNkODUzZixcclxuICAgIHBpbms6ICAgICAgICAgICAgICAgICAgIDB4ZmZjMGNiLFxyXG4gICAgcGx1bTogICAgICAgICAgICAgICAgICAgMHhkZGEwZGQsXHJcbiAgICBwb3dkZXJibHVlOiAgICAgICAgICAgICAweGIwZTBlNixcclxuICAgIHJvc3licm93bjogICAgICAgICAgICAgIDB4YmM4ZjhmLFxyXG4gICAgcm95YWxibHVlOiAgICAgICAgICAgICAgMHg0MTY5ZTEsXHJcbiAgICBzYWRkbGVicm93bjogICAgICAgICAgICAweDhiNDUxMyxcclxuICAgIHNhbG1vbjogICAgICAgICAgICAgICAgIDB4ZmE4MDcyLFxyXG4gICAgc2FuZHlicm93bjogICAgICAgICAgICAgMHhmNGE0NjAsXHJcbiAgICBzZWFncmVlbjogICAgICAgICAgICAgICAweDJlOGI1NyxcclxuICAgIHNlYXNoZWxsOiAgICAgICAgICAgICAgIDB4ZmZmNWVlLFxyXG4gICAgc2llbm5hOiAgICAgICAgICAgICAgICAgMHhhMDUyMmQsXHJcbiAgICBza3libHVlOiAgICAgICAgICAgICAgICAweDg3Y2VlYixcclxuICAgIHNsYXRlYmx1ZTogICAgICAgICAgICAgIDB4NmE1YWNkLFxyXG4gICAgc2xhdGVncmF5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbGF0ZWdyZXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNub3c6ICAgICAgICAgICAgICAgICAgIDB4ZmZmYWZhLFxyXG4gICAgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgMHgwMGZmN2YsXHJcbiAgICBzdGVlbGJsdWU6ICAgICAgICAgICAgICAweDQ2ODJiNCxcclxuICAgIHRhbjogICAgICAgICAgICAgICAgICAgIDB4ZDJiNDhjLFxyXG4gICAgdGhpc3RsZTogICAgICAgICAgICAgICAgMHhkOGJmZDgsXHJcbiAgICB0b21hdG86ICAgICAgICAgICAgICAgICAweGZmNjM0NyxcclxuICAgIHR1cnF1b2lzZTogICAgICAgICAgICAgIDB4NDBlMGQwLFxyXG4gICAgdmlvbGV0OiAgICAgICAgICAgICAgICAgMHhlZTgyZWUsXHJcbiAgICB3aGVhdDogICAgICAgICAgICAgICAgICAweGY1ZGViMyxcclxuICAgIHdoaXRlc21va2U6ICAgICAgICAgICAgIDB4ZjVmNWY1LFxyXG4gICAgeWVsbG93Z3JlZW46ICAgICAgICAgICAgMHg5YWNkMzIsXHJcbiAgICByZWJlY2NhcHVycGxlOiAgICAgICAgICAweDY2MzM5OSxcclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgRm9udEZhY2VUeXBlcyBmcm9tIFwiLi9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0ICogYXMgVXRpbEZ1bmNzIGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZm9udCBmYWNlIGRlZmluaXRpb24gb2JqZWN0IHRvIHRoZSBDU1Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9udEZhY2VUb1N0cmluZyggZm9udGZhY2U6IEZvbnRGYWNlVHlwZXMuSUZvbnRGYWNlKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZvbnRmYWNlIHx8ICFmb250ZmFjZS5mb250RmFtaWx5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gXCJ7XCI7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gZm9udGZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcyArPSBgJHtVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0cmV0Y2hUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHJldGNoX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IFV0aWxGdW5jcy5Dc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IFV0aWxGdW5jcy5Dc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3R5bGVUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHlsZV9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy52YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBvYmxpcXVlICR7VXRpbEZ1bmNzLkNzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHYpfWAsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBvYmxpcXVlICR7VXRpbEZ1bmNzLmFycmF5VG9TdHJpbmcoIHYsIFV0aWxGdW5jcy5Dc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyl9YFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFdlaWdodFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy52YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBVdGlsRnVuY3MuQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3JjVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IGZvbnRTaW5nbGVTcmNUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTaW5nbGVTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBVdGlsRnVuY3Mub2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcImxvY2FsXCIsIHYgPT4gYGxvY2FsKCR7dn0pYF0sXHJcbiAgICAgICAgW1widXJsXCIsIHYgPT4gYHVybCgke3Z9KWBdLFxyXG4gICAgICAgIFtcImZvcm1hdFwiLCB2ID0+IGBmb3JtYXQoJHtmb250Rm9ybWF0VG9TdHJpbmcodil9KWBdXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250Rm9ybWF0VG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gYFxcXCIke3Z9XFxcImAsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgR3JhZGllbnRTdG9wT3JIaW50LCBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLCBMaW5lYXJHcmFkQW5nbGUsIFJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICBSYWRpYWxHcmFkaWVudEV4dGVudCwgQ3Jvc3NGYWRlUGFyYW1cclxufSBmcm9tIFwiLi9JbWFnZVR5cGVzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCB7Q3NzUG9zaXRpb24sIEV4dGVuZGVkLCBTaW1wbGVDc3NQb3NpdGlvbiwgQ3NzQW5nbGV9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmcsIElOdW1iZXJNYXRoQ2xhc3MsIENzc0FuZ2xlTWF0aCwgcG9zaXRpb25Ub1N0cmluZywgQ3NzUGVyY2VudE1hdGh9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnQsXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHYubGVuZ3RoID09PSAwID8gXCJcIiA6IHYubGVuZ3RoID09PSAxID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZbMF0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nKCB2IGFzIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIG1hdGhDbGFzcylcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyTWF0aENsYXNzPFQ+KTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzZWNvbmRTdG9wID0gdmFsLmxlbmd0aCA+IDIgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzJdKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7Y29sb3JUb1N0cmluZyh2YWxbMF0pfSAke21hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2YWxbMV0pfSAke3NlY29uZFN0b3B9YDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBhbmdsZTogTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBhbmdsZSA/IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSkgKyBcIixcIiA6IFwiXCI7XHJcbiAgICBsZXQgYnVmID0gc3RvcHNPckhpbnRzLm1hcCggc3RvcE9ySGludCA9PiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZyggc3RvcE9ySGludCwgQ3NzUGVyY2VudE1hdGgpKTtcclxuICAgIHJldHVybiBgJHtuYW1lfSgke2FuZ2xlU3RyaW5nfSR7YnVmLmpvaW4oXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHNoYXBlOiBSYWRpYWxHcmFkaWVudFNoYXBlLFxyXG4gICAgZXh0ZW50OiBSYWRpYWxHcmFkaWVudEV4dGVudCwgcG9zOiBDc3NQb3NpdGlvbixcclxuICAgIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNoYXBlU3RyaW5nID0gc2hhcGUgPyBzaGFwZSA6IFwiXCI7XHJcbiAgICBsZXQgZXh0ZW50U3RyaW5nID0gZXh0ZW50ID8gZXh0ZW50IDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3NpdGlvblRvU3RyaW5nKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IHNoYXBlIHx8IGV4dGVudFN0cmluZyB8fCBwb3MgPyBgJHtzaGFwZVN0cmluZ30gJHtleHRlbnRTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NQZXJjZW50TWF0aCkpO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7d2hhdEFuZFdoZXJlfSR7YnVmLmpvaW4oXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvczogU2ltcGxlQ3NzUG9zaXRpb24sXHJcbiAgICBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IGFuZ2xlID8gYGZyb20gJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHBvc1N0cmluZyA9IHBvcyA/IGBhdCAke3Bvc2l0aW9uVG9TdHJpbmcoIHBvcyl9YCA6IFwiXCI7XHJcbiAgICBsZXQgd2hhdEFuZFdoZXJlID0gYW5nbGUgfHwgcG9zID8gYCR7YW5nbGVTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NBbmdsZU1hdGgpKTtcclxuICAgIHJldHVybiBgY29uaWMtZ3JhZGllbnQoJHt3aGF0QW5kV2hlcmV9JHtidWYuam9pbihcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbHVlVG9TdHJpbmcodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHZhbHVlVG9TdHJpbmcoIGFyZ3MsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjcm9zc0ZhZGVQYXJhbVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGNyb3NzLWZhZGUoJHtwYXJhbXNTdHJpbmd9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgVXRpbEZ1bmNzIGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCAqIGFzIE1lZGlhVHlwZXMgZnJvbSBcIi4vTWVkaWFUeXBlc1wiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzcGVjdFJhdGlvVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5Bc3BlY3RSYXRpb0ZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsWzBdICsgXCIvXCIgKyB2YWxbMV07XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoRmVhdHVyZVRvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuTGVuZ3RoRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcInB4XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLlJlc29sdXRpb25GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwiZHBpXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxudHlwZSBjb252ZXJ0RnVuY1R5cGU8SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9ICh2YWw6IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFGZWF0dXJlSW5mbyByZXByZXNlbnRzIGluZm9ybWF0aW9uIHRoYXQgd2Uga2VlcCBmb3Igc3R5bGUgcHJvcGVydGllc1xyXG4gKi9cclxudHlwZSBNZWRpYUZlYXR1cmVJbmZvPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSBjb252ZXJ0RnVuY1R5cGU8Sz4gfCBib29sZWFuIHxcclxuICAgIHtcclxuICAgICAgICAvKiogRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBmcm9tIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxuICAgICAgICBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlPEs+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiBkZWZpbmVkLCBpbmRpY2F0ZXMgdGhlIHZhbHVlLCB3aGljaCB3ZSB3aWxsIG5vdCBwdXQgaW50byBDU1Mgc3RyaW5nLiBUaGlzIGlzIG5lZWRlZCBmb3JcclxuICAgICAgICAgKiBtZWRpYSBmZWF0dXJlcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgd2l0aG91dCB0aGUgdmFsdWUsIGUuZy4gY29sb3Igb3IgY29sb3ItaW5kZXguXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmZWF0dXJlIGlzIGEgXCJyYW5nZVwiIGZlYXR1cmU7IHRoYXQgaXMsIGNhbiBiZSB1c2VkIGluIGFuXHJcbiAgICAgICAgICogZXhwcmVzc2lvbiAoYSA8PSBmZWF0dXJlIDw9IGIpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhUXVlcnlUb1N0cmluZyggcXVlcnk6IE1lZGlhVHlwZXMuTWVkaWFRdWVyeSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKVxyXG4gICAgICAgIHJldHVybiBxdWVyeS5tYXAoIChzaW5nbGVRdWVyeSkgPT4gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBzaW5nbGVRdWVyeSkpLmpvaW4oXCIsIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBNZWRpYVR5cGVzLlNpbmdsZU1lZGlhUXVlcnkpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IG1lZGlhVHlwZSA9IHF1ZXJ5LiRtZWRpYVR5cGU7XHJcbiAgICBsZXQgb25seSA9IHF1ZXJ5LiRvbmx5O1xyXG4gICAgbGV0IG5lZ2F0ZSA9IHF1ZXJ5LiRuZWdhdGU7XHJcblxyXG4gICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG1lZGlhVHlwZSlcclxuICAgICAgICBpdGVtcy5wdXNoKCAob25seSA/IFwib25seSBcIiA6IFwiXCIpICsgbWVkaWFUeXBlKTtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBxdWVyeSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiRcIikpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocXVlcnlbcHJvcE5hbWVdKVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCBgKCR7bWVkaWFGZWF0dXJlVG9TdHJpbmcoIHByb3BOYW1lLCBxdWVyeVtwcm9wTmFtZV0pfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmVnYXRlID8gXCJub3QgXCIgOiBcIlwifSR7aXRlbXMuam9pbihcIiBhbmQgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBmZWF0dXJlIHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGZWF0dXJlVG9TdHJpbmcoIGZlYXR1cmVOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmZWF0dXJlTmFtZSB8fCBwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgXHJcbiAgICBsZXQgaW5mbzogTWVkaWFGZWF0dXJlSW5mbyA9IG1lZGlhRmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xyXG5cclxuICAgIGxldCByZWFsRmVhdHVyZU5hbWUgPSBVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIGZlYXR1cmVOYW1lKTtcclxuXHJcbiAgICAvLyBpZiBkZWZhdWx0VmFsdWUgaXMgZGVmaW5lZCBhbmQgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGVxdWFsIHRvIGl0LCBubyB2YWx1ZSBzaG91bGQgYmUgcmV0dXJuZWQuXHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmRlZmF1bHRWYWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wVmFsID09PSBkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IFwiXCIgOiByZWFsRmVhdHVyZU5hbWU7XHJcblxyXG4gICAgbGV0IGNvbnZlcnQgPSB0eXBlb2YgaW5mbyA9PT0gXCJmdW5jdGlvblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5jb252ZXJ0IDogdW5kZWZpbmVkO1xyXG4gICAgbGV0IGlzUmFuZ2UgPSB0eXBlb2YgaW5mbyA9PT0gXCJib29sZWFuXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmlzUmFuZ2UgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoaXNSYW5nZSAmJiAhdmFsdWVPbmx5ICYmIEFycmF5LmlzQXJyYXkoIHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzMSA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWxbMF0sIGNvbnZlcnQpO1xyXG4gICAgICAgIGxldCBzMiA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWxbMV0sIGNvbnZlcnQpO1xyXG4gICAgICAgIHJldHVybiBgJHtzMX0gPD0gJHtyZWFsRmVhdHVyZU5hbWV9IDw9ICR7czJ9YDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWwsIGNvbnZlcnQpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzIDogcmVhbEZlYXR1cmVOYW1lICsgXCI6XCIgKyBzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWw6IGFueSwgY29udmVydD86IGNvbnZlcnRGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGlmIChjb252ZXJ0KVxyXG4gICAgICAgIHJldHVybiBjb252ZXJ0KCBwcm9wVmFsKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggcHJvcFZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcHJvcFZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBtYXhBc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIGNvbG9yOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGhlaWdodDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbkhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtb25vY2hyb21lOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgcmVzb2x1dGlvbjogeyBjb252ZXJ0OiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5SZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4UmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIHdpZHRoOiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluV2lkdGg6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFdpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7U2VsZWN0b3JUb2tlblR5cGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtUYWdSdWxlLCBDbGFzc1J1bGUsIElEUnVsZSwgU2VsZWN0b3JSdWxlfSBmcm9tIFwiLi4vcnVsZXMvU3R5bGVSdWxlc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVcIjtcclxuaW1wb3J0IHsgdmFsdWVUb1N0cmluZyB9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIHNlbGVjdG9yLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IgdXNpbmcgdGhlIGdpdmVuIHRlbXBsYXRlIHN0cmluZyB3aXRoIG9wdGlvbmFsXHJcbiAqIHBsYWNlaG9sZGVycyAoZS5nLiB7MH0pLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5hbWVzIG9mIHRhZ3MsIGNsYXNzZXMgYW5kIElEcyBhbmQgb3RoZXJcclxuICogcG9zc2libGUgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0U2VsZWN0b3IoIHRlbXBsYXRlOiBzdHJpbmcsIHBhcmFtczogU2VsZWN0b3JUb2tlblR5cGVbXSk6IHN0cmluZ1xyXG57XHJcblx0bGV0IHRva2Vuczogc3RyaW5nW10gPSB0ZW1wbGF0ZS5zcGxpdCggL3soXFxkKyl9L2cpO1xyXG5cdGxldCB0b2tlbklzTnVtYmVyID0gZmFsc2U7XHJcblx0bGV0IGFycjogc3RyaW5nW10gPSBbXTtcclxuXHRmb3IgKGxldCB0b2tlbiBvZiB0b2tlbnMpXHJcblx0e1xyXG5cdFx0aWYgKHRva2VuSXNOdW1iZXIpXHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcnNlSW50KCB0b2tlbiwgMTApO1xyXG5cdFx0XHRpZiAoaW5kZXggPj0gcGFyYW1zLmxlbmd0aClcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBpdGVtID0gcGFyYW1zW2luZGV4XTtcclxuXHRcdFx0aWYgKGl0ZW0gPT0gbnVsbClcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdFx0YXJyLnB1c2goIGl0ZW0pO1xyXG5cdFx0XHRlbHNlIGlmIChpdGVtIGluc3RhbmNlb2YgUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChpdGVtIGluc3RhbmNlb2YgVGFnUnVsZSlcclxuXHRcdFx0XHRcdGFyci5wdXNoKCBpdGVtLnRhZyk7XHJcblx0XHRcdFx0ZWxzZSBpZiAoaXRlbSBpbnN0YW5jZW9mIENsYXNzUnVsZSlcclxuXHRcdFx0XHRcdGFyci5wdXNoKCBpdGVtLmNzc05hbWUpO1xyXG5cdFx0XHRcdGVsc2UgaWYgKGl0ZW0gaW5zdGFuY2VvZiBJRFJ1bGUpXHJcblx0XHRcdFx0XHRhcnIucHVzaCggaXRlbS5jc3NOYW1lKTtcclxuXHRcdFx0XHRlbHNlIGlmIChpdGVtIGluc3RhbmNlb2YgU2VsZWN0b3JSdWxlKVxyXG5cdFx0XHRcdFx0YXJyLnB1c2goIGl0ZW0uc2VsZWN0b3JUZXh0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIFxyXG5cdFx0XHRcdGFyci5wdXNoKCBpdGVtLnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodG9rZW4pXHJcblx0XHRcdGFyci5wdXNoKCB0b2tlbik7XHJcblxyXG5cdFx0dG9rZW5Jc051bWJlciA9ICF0b2tlbklzTnVtYmVyO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGFyci5qb2luKCBcIlwiKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHBhcmFtZXRlcml6ZWQgcHNldWRvIGVudGl0eS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwc2V1ZG9FbnRpdHlUb1N0cmluZyggZW50aXR5TmFtZTogc3RyaW5nLCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFlbnRpdHlOYW1lKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdGlmIChlbnRpdHlOYW1lLnN0YXJ0c1dpdGgoIFwiOm50aFwiKSlcclxuXHRcdHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHsgZnJvbUFycmF5OiB2ID0+IGAke3ZbMF19biske3ZbMV19YCB9KTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIFN0eWxlVHlwZXMgZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7SVN0eWxlc2V0fSBmcm9tIFwiLi9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtFeHRlbmRlZCwgTXVsdGlDc3NQb3NpdGlvbiwgQ3NzUmFkaXVzLCBPbmVPck1hbnl9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FtZWxUb0Rhc2gsIHZhbHVlVG9TdHJpbmcsIGFycmF5VG9TdHJpbmcsIG9iamVjdFRvU3RyaW5nLCBJVmFsdWVDb252ZXJ0T3B0aW9ucyxcclxuICAgIHBvc2l0aW9uVG9TdHJpbmcsIG11bHRpUG9zaXRpb25Ub1N0cmluZywgQ3NzTGVuZ3RoTWF0aCwgQ3NzVGltZU1hdGgsIENzc051bWJlck1hdGgsXHJcbiAgICBDc3NBbmdsZU1hdGgsIENzc0ZyZXF1ZW5jeU1hdGgsIENzc0ZyYWN0aW9uTWF0aCwgQ3NzUGVyY2VudE1hdGgsIENzc1Jlc29sdXRpb25NYXRoXHJcbn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1ZhclJ1bGVcIjtcclxuXHJcblxyXG5cclxuLy8gaGVscGVyIGZ1bmN0aW9ucyBmb3Igc3R5bGUgcHJvcGVydHkgY29udmVyc2lvbnNcclxuZnVuY3Rpb24gbXVsdGlQb3NpdGlvblRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPE11bHRpQ3NzUG9zaXRpb24+KTogc3RyaW5nIHsgcmV0dXJuIG11bHRpUG9zaXRpb25Ub1N0cmluZyggdmFsLCBcIixcIik7IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgY29udmVydGluZyBDU1MgcHJvcGVydHkgdHlwZXMgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkFuaW1hdGlvbl9TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY291bnRcIiwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiLFxyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICBcIm5hbWVcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkFuaW1hdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxPbmVPck1hbnk8U3R5bGVUeXBlcy5UaW1pbmdGdW5jdGlvbl9TaW5nbGU+Pik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlciggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBzdGVwcygke3ZhbH0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXkoIHZhbDogYW55W10pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsIGFzIFN0eWxlVHlwZXMuVGltaW5nRnVuY3Rpb25fU2luZ2xlKVxyXG4gICAgICAgIDogYXJyYXlUb1N0cmluZyggdmFsLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUsIFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UaW1pbmdGdW5jdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoIDwgMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBzdGVwcyBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCB2WzBdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgc3RlcHMoJHt2WzBdfSR7di5sZW5ndGggPT09IDIgPyBcIixcIiArIHZbMV0gOiBcIlwifSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPCAwIHx8IHZbMF0gPiAxIHx8IHZbMl0gPCAwIHx8IHZbMl0gPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4gWW91IGhhdmUgJHt2WzBdfSBhbmQgJHt2WzJdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dlswXX0sJHt2WzFdfSwke3ZbMl19LCR7dlszXX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkJhY2tncm91bmRfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgXCJpbWFnZVwiLFxyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIHBvc2l0aW9uVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInNpemVcIiwgQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiLFxyXG4gICAgICAgIFwiYXR0YWNobWVudFwiLFxyXG4gICAgICAgIFwib3JpZ2luXCIsXHJcbiAgICAgICAgXCJjbGlwXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuQmFja2dyb3VuZF9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuQmFja2dyb3VuZFNpemVfU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkJveFNoYWRvd19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJpbnNldFwiLCB2ID0+IHYgPyBcImluc2V0XCIgOiBcIlwiXSxcclxuICAgICAgICBbXCJ4XCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wieVwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImJsdXJcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJzcHJlYWRcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvcm5lciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVDb3JuZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSYWRpdXM+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCB2WzBdKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdHdvIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBhcnJheVRvU3RyaW5nKCB2WzBdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHMgKz0gXCIgLyBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgYXJyYXlUb1N0cmluZyggdlsxXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaW5nbGUgTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVRvU3RyaW5nKCB2LCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkJvcmRlcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnVmOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodlswXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlswXSkpXHJcblxyXG4gICAgICAgICAgICBpZiAodlsxXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHZhbHVlVG9TdHJpbmcodlsxXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZbMl0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb2xvclRvU3RyaW5nKHZbMl0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWYuam9pbihcIiBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1ucyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbHVtbnNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkNvbHVtbnNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHZbMF0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsxXSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjdXJzb3Igc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjdXJzb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkN1cnNvcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIC8vIHRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkuIElmIGl0IGlzIGFuIGFycmF5LFxyXG4gICAgLy8gaWYgdGhlIGZpcnN0IGVsZW1lbnQgaXMgYSBmdW5jdGlvbiwgdGhlbiB3ZSBuZWVkIHRvIHVzZSBzcGFjZSBhcyBhIHNlcGFyYXRvciAoYmVjYXVzZVxyXG4gICAgLy8gdGhpcyBpcyBhIFVSTCB3aXRoIG9wdGlvbmFsIG51bWJlcnMgZm9yIHRoZSBob3Qgc3BvdCk7IG90aGVyd2lzZSwgd2UgdXNlIGNvbW1hIGFzIGFcclxuICAgIC8vIHNlcGFyYXRvciAtIGJlY2F1c2UgdGhlc2UgYXJlIG11bHRpcGxlIGN1cnNvciBkZWZpbml0aW9ucy5cclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodi5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb1N0cmluZyh2KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZbMV0gPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdiwgeyBhcnJheVNlcGFyYXRvcjogXCIgXCJ9KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlJdGVtRnVuYzogY3Vyc29yVG9TdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGZsZXggc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBmbGV4VG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5GbGV4X1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuam9pbiggXCIgXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdlswXSArIFwiIFwiICsgdlsxXSArIFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udF9mcm9tT2JqZWN0KCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcInN0eWxlXCIsIGZvbnRTdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcInZhcmlhbnRcIixcclxuICAgICAgICBcIndlaWdodFwiLFxyXG4gICAgICAgIFwic3RyZXRjaFwiLFxyXG4gICAgICAgIFtcInNpemVcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJsaW5lSGVpZ2h0XCIsIHYgPT4gdi50b1N0cmluZygpICwgXCIvXCJdLFxyXG4gICAgICAgIFwiZmFtaWx5XCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuRm9udF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IFwib2JsaXF1ZSBcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCB2KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGV4dERlY29yYXRpb25fZnJvbU9iamVjdCggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlRleHREZWNvcmF0aW9uX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBcImxpbmVcIixcclxuICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgW1widGhpY2tuZXNzXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UcmFuc2l0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJwcm9wZXJ0eVwiLCBjYW1lbFRvRGFzaF0sXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY3Rpb25zIGZvciBoYW5kbGluZyBTdHlsZXNldHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LiBBbGwgcmVndWxhciBwcm9wZXJ0aWVzIGFyZVxyXG4gKiByZXBsYWNlZC4gUHJvcGVydGllcyBcIi0tXCIgYW5kIFwiIVwiIGdldCBzcGVjaWFsIHRyZWF0bWVudCBiZWNhdXNlIHRoZXkgbWlnaHQgYmUgYXJyYXlzLlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gc291cmNlIFxyXG4gKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIHRhcmdldCBzdHlsZXNldCBpZiBub3QgbnVsbCBvciBhIG5ldyBzdHlsZXNldCBvdGhlcndpc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldHMoIHRhcmdldDogU3R5bGVUeXBlcy5TdHlsZXNldCwgc291cmNlOiBTdHlsZVR5cGVzLlN0eWxlc2V0KTogU3R5bGVUeXBlcy5TdHlsZXNldFxyXG57XHJcbiAgICBpZiAoIXNvdXJjZSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG5cclxuICAgIC8vIGlmIHRhcmdldCBpcyBub3QgZGVmaW5lZCwgY3JlYXRlIGl0IGFzIGFuIGVtcHR5IG9iamVjdC4gVGhpcyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBhZnRlclxyXG4gICAgLy8gcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2UgYXJlIGNvcGllZCB0byBpdC5cclxuICAgIGlmICghdGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkLiBJZiB3ZSBkb24ndCBoYXZlXHJcbiAgICAvLyBlaXRoZXIsIHdlIGNhbiBqdXN0IHVzZSB0aGUgT2JqZWN0LmFzc2lnbiBmdW5jdGlvbi5cclxuICAgIGxldCBzb3VyY2VDdXN0b21Qcm9wcyA9IHNvdXJjZVtcIi0tXCJdO1xyXG4gICAgbGV0IHNvdXJjZUltcFByb3BzID0gc291cmNlW1wiIVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMgJiYgIXNvdXJjZUltcFByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldEN1c3RvbVByb3BzID0gdGFyZ2V0W1wiLS1cIl07XHJcbiAgICAgICAgdGFyZ2V0W1wiLS1cIl0gPSAhdGFyZ2V0Q3VzdG9tUHJvcHMgPyBzb3VyY2VDdXN0b21Qcm9wcyA6IHRhcmdldEN1c3RvbVByb3BzLmNvbmNhdCggc291cmNlQ3VzdG9tUHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGltcG9ydGFudCBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoc291cmNlSW1wUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldEltcFByb3BzID0gdGFyZ2V0W1wiIVwiXTtcclxuICAgICAgICB0YXJnZXRbXCIhXCJdID0gIXRhcmdldEltcFByb3BzID8gc291cmNlSW1wUHJvcHMgOiB0YXJnZXRJbXBQcm9wcy5jb25jYXQoIHNvdXJjZUltcFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb3B5IGFsbCBvdGhlciBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZVxyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHNvdXJjZSlcclxuXHR7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIiFcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xyXG5cdH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3R5bGVzZXQgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZyggc3R5bGVzZXQ6IFN0eWxlVHlwZXMuU3R5bGVzZXQpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFzdHlsZXNldClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgaW1wUHJvcHM6IFNldDxzdHJpbmc+IHwgbnVsbCA9IG51bGw7XHJcbiAgICBpZiAoc3R5bGVzZXRbXCIhXCJdKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHZhbHVlIGlzIGVpdGhlciBhIHNpbmdsZSBuYW1lIG9yIGFuIGFycmF5IG9mIG5hbWVzIG9mIENTUyBwcm9wZXJ0aWVzIHRvIGFkZCB0aGUgIWltcG9ydGFudCBmbGFnXHJcbiAgICAgICAgaW1wUHJvcHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICBsZXQgaW1wUHJvcFZhbCA9IHN0eWxlc2V0W1wiIVwiXSBhcyAoc3RyaW5nIHwgc3RyaW5nW10pO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW1wUHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgaW1wUHJvcHMuYWRkKCBpbXBQcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGltcFByb3BWYWwuZm9yRWFjaCggdiA9PiBpbXBQcm9wcyEuYWRkKCB2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHR7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIiFcIilcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIi0tXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIG9mIHRoZSBcIi0tXCIgcHJvcGVydHksIHdoaWNoIGlzIGFuIGFycmF5IHdoZXJlIGVhY2ggaXRlbSBpc1xyXG4gICAgICAgICAgICAvLyBhIHR3by1pdGVtIG9yIHRocmVlLWl0ZW0gYXJyYXlcclxuICAgICAgICAgICAgbGV0IHByb3BWYWwgPSBzdHlsZXNldFtwcm9wTmFtZV0gYXMgU3R5bGVUeXBlcy5DdXN0b21WYXJTdHlsZVR5cGVbXTtcclxuICAgICAgICAgICAgZm9yKCBsZXQgY3VzdG9tVmFsIG9mIHByb3BWYWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3VzdG9tVmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjdXN0b21Qcm9wVG9TdHJpbmcoIGN1c3RvbVZhbCwgZmFsc2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAgICAgYnVmLnB1c2goIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZSBhcyBrZXlvZiBJU3R5bGVzZXQsIHN0eWxlc2V0W3Byb3BOYW1lXSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIChpbXBQcm9wcyAmJiBpbXBQcm9wcy5oYXMoIHByb3BOYW1lKSA/IFwiICFpbXBvcnRhbnRcIiA6IFwiXCIpKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIC8vIGpvaW4gYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSBleGNlcHQgbnVsbHMsIHVuZGVmaW5lZCBhbmQgZW1wdHkgc3RyaW5nc1xyXG4gICAgcmV0dXJuIGB7JHtidWYuZmlsdGVyKCAoaXRlbSkgPT4gISFpdGVtKS5qb2luKFwiO1wiKX19YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgZGVmaW5pdGlvbiB0byBzdHJpbmcuXHJcbiAqIEBwYXJhbSBwcm9wVmFsIFxyXG4gKiBAcGFyYW0gdmFsdWVPbmx5IFxyXG4gKi9cclxuZnVuY3Rpb24gY3VzdG9tUHJvcFRvU3RyaW5nKCBwcm9wVmFsOiBTdHlsZVR5cGVzLkN1c3RvbVZhclN0eWxlVHlwZSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXByb3BWYWwpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IHZhck5hbWU6IHN0cmluZztcclxuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgbGV0IHZhbHVlOiBhbnk7XHJcbiAgICBpZiAocHJvcFZhbC5sZW5ndGggPT09IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyTmFtZSA9IChwcm9wVmFsWzBdIGFzIFZhclJ1bGUpLmNzc05hbWU7XHJcbiAgICAgICAgdGVtcGxhdGUgPSBwcm9wVmFsWzBdLnRlbXBsYXRlO1xyXG4gICAgICAgIHZhbHVlID0gcHJvcFZhbFsxXVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSBwcm9wVmFsWzBdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAoIXZhck5hbWUuc3RhcnRzV2l0aChcIi0tXCIpKVxyXG4gICAgICAgICAgICB2YXJOYW1lID0gXCItLVwiICsgdmFyTmFtZTtcclxuXHJcbiAgICAgICAgdGVtcGxhdGUgPSBwcm9wVmFsWzFdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSB8fCAhdGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgICAgICB2YWx1ZSA9IHByb3BWYWxbMl07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZhclZhbHVlID0gc3R5bGVQcm9wVG9TdHJpbmcoIHRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gdmFyVmFsdWUgOiBgJHt2YXJOYW1lfToke3ZhclZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0eWxlIHN0cmluZ1xyXG4gKiBAcGFyYW0gc3R5bGUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVQcm9wVG9TdHJpbmcoXHJcbiAgICBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnksIHZhbHVlT25seT86IGJvb2xlYW4pOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFwcm9wTmFtZSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIHByb3BlcnR5XHJcbiAgICBsZXQgaW5mbzogYW55ID0gU3R5bGVQcm9wZXJ0eUluZm9zW3Byb3BOYW1lXTtcclxuXHJcbiAgICBsZXQgdmFyVmFsdWUgPSAhaW5mb1xyXG4gICAgICAgID8gdmFsdWVUb1N0cmluZyggcHJvcFZhbClcclxuICAgICAgICA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgID8gdmFsdWVUb1N0cmluZyggcHJvcFZhbCwgaW5mbyBhcyBJVmFsdWVDb252ZXJ0T3B0aW9ucylcclxuICAgICAgICAgICAgOiAoaW5mbyBhcyBQcm9wVG9TdHJpbmdGdW5jKSggcHJvcFZhbCk7XHJcblxyXG4gICAgaWYgKCF2YXJWYWx1ZSAmJiAhdmFsdWVPbmx5KVxyXG4gICAgICAgIHZhclZhbHVlID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gdmFyVmFsdWUgOiBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfToke3ZhclZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZ2lzdHJ5IG9mIENTUyBwcm9wZXJ0aWVzIHRoYXQgc3BlY2lmaWVzIGhvdyB0aGVpciB2YWx1ZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIC8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgcHJvcGVydHkgdmFsdWUgYW5kIGNvbnZlcnRzIGl0IHRvIHN0cmluZyAqL1xyXG4vLyB0eXBlIFByb3BUb1N0cmluZ0Z1bmM8SyBleHRlbmRzIFN0eWxlVHlwZXMuVmFyVGVtcGxhdGVOYW1lID0gYW55PiA9ICh2YWw6IFN0eWxlVHlwZXMuVmFyVmFsdWVUeXBlPEs+KSA9PiBzdHJpbmc7XHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHByb3BlcnR5IHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxudHlwZSBQcm9wVG9TdHJpbmdGdW5jID0gKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vIEhlbHBlciBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIGluZGljYXRlIHRoYXQgdmFsdWVzIGluIGFuIGFycmF5IHNob3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEuXHJcbi8vIFdlIHVzZSBpdCBtYW55IHRpbWVzIGluIHRoZSBzdHVjdHVyZSBiZWxvdy5cclxubGV0IGNvbW1hQXJyYXlTZXBhcmF0b3IgPSB7IGFycmF5U2VwYXJhdG9yOiBcIixcIiB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHRoZSBTdHlsZVByb3BlcnR5SW5mbyBvYmplY3RzIGRlc2NyaWJpbmcgY3VzdG9tIGFjdGlvbnMgbmVjZXNzYXJ5IHRvXHJcbiAqIGNvbnZlcnQgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBDU1MtY29tcGxpYW50IHN0cmluZy5cclxuICovXHJcbmNvbnN0IFN0eWxlUHJvcGVydHlJbmZvczogeyBbSyBpbiBTdHlsZVR5cGVzLlZhclRlbXBsYXRlTmFtZV0/OiAoUHJvcFRvU3RyaW5nRnVuYyB8IElWYWx1ZUNvbnZlcnRPcHRpb25zKSB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uRGVsYXk6IENzc1RpbWVNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBDc3NUaW1lTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYW5pbWF0aW9uTmFtZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nLFxyXG5cclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZENsaXA6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBiYWNrZ3JvdW5kT3JpZ2luOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBtdWx0aVBvc2l0aW9uVG9TdHJpbmdXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSxcclxuICAgIGJhc2VsaW5lU2hpZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcjogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQmxvY2tFbmRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0V2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbTogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlckNvbG9yOiB7XHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW5saW5lRW5kOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZUVuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lRW5kV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZVN0YXJ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZVN0YXJ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJTcGFjaW5nOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvcmRlclRvcDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcldpZHRoOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm94U2hhZG93OiB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBjYXJldENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgY2xpcDogIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYHJlY3QoJHtDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSh2KX1gXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBjb2x1bW5HYXA6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGU6IGJvcmRlclRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZUNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVN0eWxlOiB2YWx1ZVRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGNvbHVtbnM6IGNvbHVtbnNUb1N0cmluZyxcclxuICAgIGNvbHVtbldpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBjdXJzb3I6IGN1cnNvclRvU3RyaW5nLFxyXG5cclxuICAgIGZpbGw6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBmaWxsT3BhY2l0eTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGZsZXg6IGZsZXhUb1N0cmluZyxcclxuICAgIGZsZXhCYXNpczogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZmxvb2RDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGZvbnQ6IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBmb250X2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICBmb250U2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZm9udFN0eWxlOiBmb250U3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBnYXA6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgZ3JpZENvbHVtbkdhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZ3JpZFJvd0dhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGhlaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGlubGluZVNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBsZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBsaWdodGluZ0NvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG5cclxuICAgIG1hcmdpbjogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBtYXJnaW5CbG9ja0VuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5JbmxpbmVFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbklubGluZVN0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5MZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5SaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luVG9wOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhCbG9ja1NpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heEhlaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4SW5saW5lU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4V2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heFpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtaW5CbG9ja1NpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1pbkhlaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWluSW5saW5lU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cdG1pbldpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtaW5ab29tOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIG9iamVjdFBvc2l0aW9uOiBwb3NpdGlvblRvU3RyaW5nLFxyXG4gICAgb3V0bGluZTogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBvdXRsaW5lQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBvdXRsaW5lT2Zmc2V0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBvdXRsaW5lU3R5bGU6IHZhbHVlVG9TdHJpbmcsXHJcblxyXG4gICAgcGFkZGluZzogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBwYWRkaW5nQmxvY2tFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdCbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdMZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdUb3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBlcnNwZWN0aXZlOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICBxdW90ZXM6IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiB2ID0+IGBcIiR7dn1cImBcclxuICAgIH0sXHJcblxyXG4gICAgcmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHJvd0dhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIHNjcm9sbE1hcmdpbjogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jazogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja0VuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmU6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpblRvcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZzogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0JvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZTogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdMZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdUb3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNoYXBlTWFyZ2luOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzdG9wQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcblxyXG4gICAgdGFiU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgdGV4dENvbWJpbmVVcHJpZ2h0OiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBgZGlnaXRzICR7dn1gXHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb246IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmplY3Q6IHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRleHRFbXBoYXNpczoge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIHRleHRJbmRlbnQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0U2l6ZUFkanVzdDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRvcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbkRlbGF5OiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB3aWxsQ2hhbmdlOiB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogY2FtZWxUb0Rhc2hcclxuICAgIH0sXHJcbiAgICB3b3JkU3BhY2luZzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIHpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgLy8gc3BlY2lhbCBwcm9wZXJ0aWVzIGZvciBJVmFyUnVsZSB0eXBlc1xyXG4gICAgXCJDc3NMZW5ndGhcIjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NBbmdsZVwiOiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzVGltZVwiOiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NSZXNvbHV0aW9uXCI6IENzc1Jlc29sdXRpb25NYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc0ZyZXF1ZW5jeVwiOiBDc3NGcmVxdWVuY3lNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc0ZyYWN0aW9uXCI6IENzc0ZyYWN0aW9uTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NQZXJjZW50XCI6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1Bvc2l0aW9uXCI6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICBcIkNzc0NvbG9yXCI6IGNvbG9yVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc3VwcG9ydHMgcXVlcnkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTdHlsZVR5cGVzLlN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiBvciBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU3R5bGVUeXBlcy5TaW5nbGVTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG5cclxuICAgIGxldCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyggcXVlcnkpLmZpbHRlciggKHByb3BOYW1lKSA9PiBwcm9wTmFtZSAhPSBcIiRuZWdhdGVcIik7XHJcbiAgICBpZiAocHJvcE5hbWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbm90ID0gcXVlcnkuJG5lZ2F0ZSA/IFwibm90XCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuICBgJHtub3R9ICgke3Byb3BOYW1lcy5tYXAoIChwcm9wTmFtZSkgPT5cclxuICAgICAgICBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUgYXMga2V5b2YgSVN0eWxlc2V0LCBxdWVyeVtwcm9wTmFtZV0pKS5qb2luKCBcIikgYW5kIChcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkLCBOdW1iZXJQcm94eSwgQ3NzTnVtYmVyLCBDc3NNdWx0aU51bWJlciwgSU51bWJlck1hdGgsXHJcbiAgICBJQ3NzRnJhY3Rpb25NYXRoLCBDc3NQb3NpdGlvbiwgTXVsdGlDc3NQb3NpdGlvbiwgTnVtYmVyQmFzZSwgTXVsdGlOdW1iZXJCYXNlLFxyXG4gICAgQ3NzTGVuZ3RoLCBDc3NNdWx0aUxlbmd0aCwgQ3NzQW5nbGUsIENzc011bHRpQW5nbGUsIENzc1RpbWUsIENzc011bHRpVGltZSxcclxuICAgIENzc1Jlc29sdXRpb24sIENzc011bHRpUmVzb2x1dGlvbiwgQ3NzRnJlcXVlbmN5LCBDc3NNdWx0aUZyZXF1ZW5jeSwgQ3NzRnJhY3Rpb24sXHJcbiAgICBDc3NNdWx0aUZyYWN0aW9uLCBDc3NQZXJjZW50LCBDc3NNdWx0aVBlcmNlbnQsIElDc3NMZW5ndGhNYXRoLFxyXG4gICAgSUNzc0FuZ2xlTWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLCBJQ3NzVGltZU1hdGgsXHJcbiAgICBOdW1iZXJUeXBlLCBMZW5ndGhUeXBlLCBQZXJjZW50VHlwZSwgQW5nbGVUeXBlLCBUaW1lVHlwZSwgUmVzb2x1dGlvblR5cGUsIEZyZXF1ZW5jeVR5cGUsIEZyYWN0aW9uVHlwZVxyXG59IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpY3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGRhc2hlLWNhc2UgdG8gY2FtZWxDYXNlLCBlLmcuIGZvbnQtc2l6ZSB0byBmb250U2l6ZS5cclxuICogQHBhcmFtIGRhc2hcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2UsIGUuZy4gZm9udFNpemUgdG8gZm9udC1zaXplLlxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhbHVlQ29udmVydE9wdGlvbnMgaW50ZXJmYWNlIGRlZmluZXMgb3B0aW9uYWwgZnVuY3Rpb25zIHRoYXQgY29udmVydHZhbHVlcyBvZiBkaWZmZXJudFxyXG4gKiB0eXBlcyB0byBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVDb252ZXJ0T3B0aW9uc1xyXG57XHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgIGZyb21OdWxsPzogKCB2YWw6IG51bGwgfCB1bmRlZmluZWQpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBzdHJpbmcuIFRoaXMgYWxsb3dzIHRyYW5zZm9ybWluZyBvbmUgc3RyaW5nIHRvIGFub3RoZXIuXHJcbiAgICBmcm9tU3RyaW5nPzogKCB2YWw6IHN0cmluZykgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgIGZyb21Cb29sPzogKHZhbDogYm9vbGVhbikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIG51bWJlclxyXG4gICAgZnJvbU51bWJlcj86ICh2YWw6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gICAgZnJvbUFycmF5PzogKHZhbDogYW55W10pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gb2JqZWN0XHJcbiAgICBmcm9tT2JqZWN0PzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHR5cGUtc3BlY2lmaWMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWRcclxuICAgIGZyb21Bbnk/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgdG8gY29udmVydCBhcnJheSBpdGVtcyBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFycmF5SXRlbUZ1bmM/OiAodjogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gU2VwYXJhdG9yIGZvciBhcnJheSBpdGVtcyAtIHVzZWQgb25seSBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFycmF5U2VwYXJhdG9yPzogc3RyaW5nO1xyXG5cclxuICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZXNlIGFyZSBhcmd1bWVudHMgdG8gcGFzcyB3aGVuIGludm9raW5nIGl0XHJcbiAgICBmdW5jQXJncz86IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHZhbHVlIG9mIGFuIGFyYml0cmFyeSB0eXBlIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhlIG9wdGlvbmFsIG9wdGlvbnMgcGFyYW1ldGVyXHJcbiAqIGNhbiBkZWZpbmUgaG93IHNwZWNpZmljIHR5cGVzIGFyZSBjb252ZXJ0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVUb1N0cmluZyggdmFsOiBhbnksIG9wdGlvbnM/OiBJVmFsdWVDb252ZXJ0T3B0aW9ucyk6IHN0cmluZ1xyXG57XHJcbiAgIGlmICghb3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICAvLyBzdGFuZGFyZCBwcm9jZXNzaW5nOlxyXG4gICAgICAgIC8vIC0gbnVsbC91bmRlZmluZWQgYmVjb21lIGVtcHR5IHN0cmluZy5cclxuICAgICAgICAvLyAtIGNhbGwgdmFsdWVUb1N0cmluZyAocHJveHkgb2JqZWN0cykgaWYgZXhpc3QuXHJcbiAgICAgICAgLy8gLSBmdW5jdGlvbjogY2FsbCB3aXRob3V0IHBhcmFtZXRlcnMuXHJcbiAgICAgICAgLy8gLSBldmVyeXRoaW5nIGVsc2U6IGNhbGwgdG9TdHJpbmcoKS5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlUb1N0cmluZyggdmFsKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcHJvY2Vzc2luZyB3aXRoIG9wdGlvbnMuIEZvciBhbGwgdHlwZXMgZXhjZXB0IG51bGwgYW5kIHN0cmluZywgaWYgdGhlIHR5cGUtc3BlY2lmaWNcclxuICAgICAgICAvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgY2FsbCBmcm9tQW55IGlmIGRlZmluZWQuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tTnVsbCA/IG9wdGlvbnMuZnJvbU51bGwoIHZhbCkgOiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21TdHJpbmcgPyBvcHRpb25zLmZyb21TdHJpbmcoIHZhbCkgOiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bWJlciA/IG9wdGlvbnMuZnJvbU51bWJlciggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIG9wdGlvbnMuZnVuY0FyZ3MgPyB2YWwoIC4uLm9wdGlvbnMuZnVuY0FyZ3MpIDogdmFsKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZyb21BcnJheSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BcnJheSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gb3B0aW9ucy5hcnJheVNlcGFyYXRvciAhPSBudWxsID8gb3B0aW9ucy5hcnJheVNlcGFyYXRvciA6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5VG9TdHJpbmcoIHZhbCwgb3B0aW9ucy5hcnJheUl0ZW1GdW5jIHx8IG9wdGlvbnMuZnJvbUFueSB8fCB1bmRlZmluZWQsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21PYmplY3QpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tT2JqZWN0KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQm9vbCA/IG9wdGlvbnMuZnJvbUJvb2woIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BbnkoIHZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIGFycmF5IG9mIHRoZSBnaXZlbiB0eXBldG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbiAqIEVsZW1lbnRzIG9mIHRoZSBhcnJheSBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9TdHJpbmcoIHZhbDogYW55W10sIGZ1bmM/OiAodikgPT4gc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiAhdmFsIHx8IHZhbC5sZW5ndGggPT09IDBcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IHZhbC5maWx0ZXIoIHggPT4geCAhPSBudWxsKS5tYXAoIHkgPT4gZnVuYyA/IGZ1bmMoeSkgOiB2YWx1ZVRvU3RyaW5nKCB5KSkuam9pbiggc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG9iamVjdCB0byBhIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgT2JqZWN0IHRvIGNvbnZlcnQgdG8gc3RyaW5nLlxyXG4gKiBAcGFyYW0gdXNlUHJvcE5hbWVzIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBuYW1lcyBvZiB0aGUgb2JqZWN0J3MgcHJvcHJ0aWVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gcHJvcHNBbmRGdW5jcyBBcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgb3B0aW9uYWxseSBmdW5jdGlvbnMuIFRoZSBvcmRlciBvZiB0aGUgbmFtZXMgZGV0ZXJtaW5lcyBpblxyXG4gKiAgICAgd2hpY2ggb3JkZXIgdGhlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzdHJpbmcuIElmIGEgZnVuY3Rpb24gaXMgcHJlc2VudCBmb3IgdGhlIHByb3BlcnR5LFxyXG4gKiAgICAgaXQgd2lsbCBiZSB1c2VkIHRvIGNvbnZlcnQgdGhlIHByb3BlcnR5J3MgdmFsdWUgdG8gdGhlIHN0cmluZy4gSWYgYSBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCwgdGhlbiB0aGVcclxuICogICAgIHByb3BlcnR5IHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHN0cmluZyB1c2luZyB0aGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1N0cmluZyggdmFsOiBhbnkscHJvcHNBbmRGdW5jczogKHN0cmluZyB8IFtzdHJpbmcsICh2YWw6IGFueSkgPT4gc3RyaW5nLCBzdHJpbmc/XSlbXSxcclxuICAgIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIsIHVzZVByb3BOYW1lczogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbCB8fCBwcm9wc0FuZEZ1bmNzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgYnVmOiAoc3RyaW5nKVtdID0gW107XHJcbiAgICBwcm9wc0FuZEZ1bmNzLmZvckVhY2goIHByb3BBbmRGdW5jID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvcE5hbWUgPSB0eXBlb2YgcHJvcEFuZEZ1bmMgPT09IFwic3RyaW5nXCIgPyBwcm9wQW5kRnVuYyA6IHByb3BBbmRGdW5jWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb3BWYWwgPSB2YWxbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZVByb3BOYW1lcylcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBwcm9wTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJlZml4ID0gdHlwZW9mIHByb3BBbmRGdW5jID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogcHJvcEFuZEZ1bmNbMl07XHJcbiAgICAgICAgICAgIGlmIChwcmVmaXgpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggcHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmdW5jID0gdHlwZW9mIHByb3BBbmRGdW5jID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogcHJvcEFuZEZ1bmNbMV07XHJcbiAgICAgICAgICAgIGlmIChmdW5jKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIGZ1bmMoIHByb3BWYWwpKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcFZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHZhbHVlVG9TdHJpbmcoIHByb3BWYWwpKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuXHRyZXR1cm4gYnVmLmpvaW4oc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgb2YgZnVuY3Rpb25zIHRoYXQgY29udmVydCBhIG51bWJlciB0byBhIHN0cmluZyAqL1xyXG50eXBlIENvbnZlcnROdW1iZXJGdW5jVHlwZSA9IChuOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nIG9wdGlvbmFsbHkgYXBwZW5kaW5nIHVuaXRzIHRoYXQgY2FuIGJlIGRpZmZlcmVudFxyXG4gKiBmb3IgaW50ZWdlciBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycy5cclxuICogQHBhcmFtIG4gTnVtYmVyIHRvIGNvbnZlcnQgdG8gc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gKiBAcGFyYW0gaW50VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBpbnRlZ2VyLlxyXG4gKiBAcGFyYW0gZmxvYXRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGZsb2F0aW5nIHBvaW50LlxyXG4gKi9cclxuZnVuY3Rpb24gbnVtYmVyVG9TdHJpbmcoIG46IG51bWJlciwgaW50VW5pdDogc3RyaW5nID0gXCJcIiwgZmxvYXRVaW50OiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG4pID8gIG4gKyBpbnRVbml0IDogbiArIGZsb2F0VWludDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTnVtYmVyIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwgeyBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuY30pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIENzc051bWJlciBvciBhcnJheSBvZiBDc3NOdW1iZXIgb2JqZWN0cyB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUtIG9yIG11bHRpLW51bWJlciBzdHlsZSB2YWx1ZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzZXBhcmF0b3IgU3RyaW5nIHRvIHVzZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBtdWx0aVN0eWxlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+PixcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuYyxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiB2ID0+IHN0eWxlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwbGFjZXMgcGF0dGVybnMge2luZGV4W3x1bml0XX0gaW4gdGhlIGZvcm1hdCBzdHJpbmcgd2l0aCB2YWx1ZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcbiAqIEBwYXJhbSBmb3JtYXQgXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBcclxuICogQHBhcmFtIHBhcmFtcyBcclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcnM8VCBleHRlbmRzIHN0cmluZz4oIGZvcm1hdDogc3RyaW5nLCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBmdW5jdGlvbiByZXBsYWNlciggdG9rZW46IHN0cmluZywgLi4uYXJnczogYW55W10pOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludCggYXJnc1swXSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IHBhcmFtcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiBcIjBcIjtcclxuXHJcbiAgICAgICAgbGV0IHVuaXQgPSBhcmdzWzFdO1xyXG4gICAgICAgIGxldCBwYXJhbSA9IHBhcmFtc1tpbmRleF07XHJcbiAgICAgICAgaWYgKHVuaXQgJiYgdHlwZW9mIHBhcmFtID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyYW0gKyB1bml0O1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHBhcmFtLCBjb252ZXJ0RnVuYykhO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmb3JtYXQucmVwbGFjZSggL3tcXHMqKFxcZCopXFxzKig/OlxcfFxccyooW2EtekEtWlxcJV0rKVxccyopP30vZywgcmVwbGFjZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWF0aEZ1bmMgZnVuY3Rpb24gcmV0dXJucyBvbmUgb2YgdGhlIG1hdGhlbWF0aWMgQ1NTIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgb3IgbW9yZVxyXG4gKiBwYXJhbWV0ZXJzIHdob2UgdHlwZSBpcyBkZXJpdmVkIGZyb20gTnVtYmVyQmFzZTxUPi5cclxuICovXHJcbmZ1bmN0aW9uIG1hdGhGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBuYW1lOiBzdHJpbmcsIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgJHtuYW1lfSgke211bHRpU3R5bGVUb1N0cmluZyggcGFyYW1zLCBjb252ZXJ0RnVuYywgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgY2FsY0Z1bmMgZnVuY3Rpb24gcmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjYWxjKCkgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY0Z1bmM8VCBleHRlbmRzIHN0cmluZz4oIGZvcm11bGE6IHN0cmluZywgcGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdLFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBjYWxjKCR7Zm9ybWF0TnVtYmVycyggZm9ybXVsYSwgcGFyYW1zLCBjb252ZXJ0RnVuYyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSB1bml0RnVuYyBmdW5jdGlvbiByZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gbnVtYmVyIHdpdGggdGhlIGdpdmVuIHVuaXRzLlxyXG4gKi9cclxuZnVuY3Rpb24gdW5pdEZ1bmM8VCBleHRlbmRzIHN0cmluZz4oIG46IG51bWJlciwgdW5pdDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBuICsgdW5pdDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleVxyXG4gKiBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgYnkgY2FsbGluZyBhIGZ1bmN0aW9uIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+IGltcGxlbWVudHMgSU51bWJlck1hdGg8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBjb252ZXJ0RnVuYzogQ29udmVydE51bWJlckZ1bmNUeXBlKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBudW1iZXJUb1N0cmluZyA9IChuOiBudW1iZXIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RnVuYyggbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aVN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCB0aGlzLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtaW4oIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pblwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1heFwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJjbGFtcFwiLCBbbWluLCBwcmVmLCBtYXhdLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsYyggZm9ybXVsYTogc3RyaW5nLCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYWxjRnVuYyggZm9ybXVsYSwgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVyY2VudCggbjogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyhuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5pdCggbjogbnVtYmVyLCB1bml0OiBzdHJpbmcpOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB1bml0RnVuYzxUPiggbiwgdW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aENsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgXCJzdGF0aWNcIiBzaWRlIG9mIGNsYXNzZXMgZGVyaXZlZCBmcm9tIHRoZVxyXG4gKiBOdW1iZXJNYXRoIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyTWF0aENsYXNzPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gICAgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZztcclxuXHJcbiAgICBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4pOiBzdHJpbmc7XHJcblxyXG4gICAgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4pOiBzdHJpbmc7XHJcblxyXG4gICAgbmV3KCk6IElOdW1iZXJNYXRoPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVW5pdGxlc3MgbnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NOdW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bnVtYmVyPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTnVtYmVyTWF0aCBleHRlbmRzIE51bWJlck1hdGg8TnVtYmVyVHlwZT5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG4udG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jLCBcIiBcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aU51bWJlcj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1BlcmNlbnRNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8cGVyY2VudD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1BlcmNlbnRNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxQZXJjZW50VHlwZT4gaW1wbGVtZW50cyBJQ3NzUGVyY2VudE1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gKE51bWJlci5pc0ludGVnZXIobikgPyBuIDogTWF0aC5yb3VuZChuICogMTAwKSkgKyBcIiVcIjsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlQZXJjZW50Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVBlcmNlbnQ+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jLCBcIiBcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aU51bWJlcj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIExlbmd0aFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzTGVuZ3RoTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGxlbmd0aD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0xlbmd0aE1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPExlbmd0aFR5cGU+IGltcGxlbWVudHMgSUNzc0xlbmd0aE1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcInB4XCIsIFwiZW1cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYywgXCIgXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBRKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJRXCIpOyB9XHJcbiAgICBwdWJsaWMgY2goIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImNoXCIpOyB9XHJcbiAgICBwdWJsaWMgY20oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImNtXCIpOyB9XHJcbiAgICBwdWJsaWMgZW0oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImVtXCIpOyB9XHJcbiAgICBwdWJsaWMgZXgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImV4XCIpOyB9XHJcbiAgICBwdWJsaWMgaWMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImljXCIpOyB9XHJcbiAgICBwdWJsaWMgaW4oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImluXCIpOyB9XHJcbiAgICBwdWJsaWMgbGgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImxoXCIpOyB9XHJcbiAgICBwdWJsaWMgbW0oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcIm1tXCIpOyB9XHJcbiAgICBwdWJsaWMgcGMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInBjXCIpOyB9XHJcbiAgICBwdWJsaWMgcHQoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInB0XCIpOyB9XHJcbiAgICBwdWJsaWMgcHgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInB4XCIpOyB9XHJcbiAgICBwdWJsaWMgdmIoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInZiXCIpOyB9XHJcbiAgICBwdWJsaWMgdmgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInZoXCIpOyB9XHJcbiAgICBwdWJsaWMgdmkoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInZpXCIpOyB9XHJcbiAgICBwdWJsaWMgdncoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInZ3XCIpOyB9XHJcbiAgICBwdWJsaWMgcmVtKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJyZW1cIik7IH1cclxuICAgIHB1YmxpYyBybGgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInJsaFwiKTsgfVxyXG4gICAgcHVibGljIHZtYXgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInZtYXhcIik7IH1cclxuICAgIHB1YmxpYyB2bWluKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ2bWluXCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEFuZ2xlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NBbmdsZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxhbmdsZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0FuZ2xlTWF0aCBleHRlbmRzIE51bWJlck1hdGg8QW5nbGVUeXBlPiBpbXBsZW1lbnRzIElDc3NBbmdsZU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcImRlZ1wiLCBcInR1cm5cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlBbmdsZT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpQW5nbGU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYywgXCIgXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlBbmdsZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLCBcIixcIik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBkZWcoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImRlZ1wiKTsgfVxyXG4gICAgcHVibGljIHJhZCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicmFkXCIpOyB9XHJcbiAgICBwdWJsaWMgZ3JhZCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZ3JhZFwiKTsgfVxyXG4gICAgcHVibGljIHR1cm4oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInR1cm5cIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGltZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzVGltZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDx0aW1lPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzVGltZU1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFRpbWVUeXBlPiBpbXBsZW1lbnRzIElDc3NUaW1lTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwibXNcIiwgXCJzXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1RpbWU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVRpbWU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMsIFwiIFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzVGltZU1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgbXMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcIm1zXCIpOyB9XHJcbiAgICBwdWJsaWMgcyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwic1wiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXNvbHV0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NSZXNvbHV0aW9uTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHJlc29sdXRpb24+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIE51bWJlck1hdGg8UmVzb2x1dGlvblR5cGU+IGltcGxlbWVudHMgSUNzc1Jlc29sdXRpb25NYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJkcGlcIiwgXCJ4XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1Jlc29sdXRpb24+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVJlc29sdXRpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUmVzb2x1dGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMsIFwiIFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUmVzb2x1dGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQSSAqL1xyXG4gICAgcHVibGljIGRwaSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZHBpXCIpOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUENNICovXHJcbiAgICBwdWJsaWMgZHBjbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZHBjbVwiKTsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBQWCAqL1xyXG4gICAgcHVibGljIGRwcHgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImRwcHhcIik7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuICAgIHB1YmxpYyB4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ4XCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZyZXF1ZW5jeVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzRnJlcXVlbmN5TWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGZyZXF1ZW5jZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0ZyZXF1ZW5jeU1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPEZyZXF1ZW5jeVR5cGU+IGltcGxlbWVudHMgSUNzc0ZyZXF1ZW5jeU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIkh6XCIsIFwia0h6XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0ZyZXF1ZW5jeT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlGcmVxdWVuY3k+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlGcmVxdWVuY3k+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMsIFwiIFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJlcXVlbmN5Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jLCBcIixcIik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgaHooIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcIkh6XCIpOyB9XHJcbiAgICBwdWJsaWMga2h6KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJrSHpcIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnJhY3Rpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0ZyYWN0aW9uTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGZyYWN0aW9uPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzRnJhY3Rpb25NYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxGcmFjdGlvblR5cGU+IGltcGxlbWVudHMgSUNzc0ZyYWN0aW9uTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZnJcIiwgXCJmclwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NGcmFjdGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyYWN0aW9uTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyYWN0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlGcmFjdGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jLCBcIiBcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyYWN0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmFjdGlvbk1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NGcmFjdGlvbj4sIG1heDogRXh0ZW5kZWQ8Q3NzRnJhY3Rpb24+KTogTnVtYmVyUHJveHk8RnJhY3Rpb25UeXBlPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtaW5tYXhcIiwgW21pbiwgbWF4XSwgQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnIoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImZyXCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBwb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvblRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bGw6IHYgPT4gXCJcIixcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBvc2l0aW9uVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TXVsdGlDc3NQb3NpdGlvbj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBwb3NpdGlvblRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBzZXBhcmF0b3JcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYmFzaWMgdHlwZXMgYW5kIGZ1bmN0aW9ucyB1c2VkIHRvIGRlZmluZSBDU1MgcHJvcGVydHkgdHlwZXMuXHJcbiAqIFxyXG4gKiBBbGwgQ1NTIHByb3BlcnRpZXMgc2hvdWxkIGFjY2VwdCBzdHJpbmcgYXMgdGhlIHR5cGUgb2YgdGhlaXIgdmFsdWUgZXZlbiBpZiBub3JtYWxseVxyXG4gKiB0aGV5IGFjY2VwdCBvdGhlciB0eXBlcyAoZS5nIGEgc2V0IG9mIHN0cmluZyBsaXRlcmFscyBhcyBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IC4uLmAgZm9yIHRoZVxyXG4gKiBjb2xvcikgcHJvcGVydHkuIFRoaXMgaXMgYmVjYXVzZSBpbiBhZGRpdGlvbiB0byB0aGVpciBub3JtYWwgdmFsdWVzIGFueSBwcm9wZXJ0eVxyXG4gKiBjYW4gdXNlIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhlIGZvcm0gYHZhcigtLXByb3BuYW1lKWAuIEhvd2V2ZXIsIGlmIHdlIGFkZCBzdHJpbmcgdHlwZVxyXG4gKiB0byB0aGUgc2V0IG9mIHN0cmluZyBsaXRlcmFscyAoZS5nLiBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IHN0cmluZ2ApLCB0aGlzIHRocm93cyBvZmYgdGhlXHJcbiAqIEludGVsbGlzZW5zZSBhbmQgaXQgZG9lc24ndCBwcm9tcHQgZGV2ZWxvcGVycyBmb3IgdGhlIHBvc3NpYmxlIHZhbHVlcy4gVGhlIElWYWx1ZVByb3h5XHJcbiAqIGNhbiBiZSB1c2VkIGluc3RlYWQgb2Ygc3RyaW5nIGFuZCB0aGlzIHNvbHZlcyB0aGUgSW50ZWxsaXNlbnNlIGlzc3VlLlxyXG4gKiBcclxuICogQW5vdGhlciBiZW5lZml0IG9mIHVzaW5nIGZ1bmN0aW9ucyBpcyB0aGF0IHRoZXkgYXJlXHJcbiAqIGNvbnN0cnVjdGVkIGF0IG9uZSB0aW1lIGJ1dCB0aGUgc3RyaW5nIGdlbmVyYXRpb24gb2NjdXJzIGF0IGFub3RoZXIgdGltZS4gVGhpcyBhbGxvd3NcclxuICogdXNpbmcgdGhlc2Ugb2JqZWN0cyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLiBUaGV5IGNhbiByZWZlcmVuY2Ugb2JqZWN0cyBsaWtlXHJcbiAqIElWYXJSdWxlIHRoYXQgYXJlIG5vdCBmdWxseSBpbml0aWFsaXplZCB5ZXQuIEhvd2V2ZXIsIHdoZW4gdGhlIHN0eWxlcyBzaG91bGQgYmUgaW5zZXJ0ZWRcclxuICogaW50byBET00gdGhlIGluaXRpYWxpemF0aW9uIHdpbGwgaGF2ZSBhbHJlYWR5IG9jY3VycmVkIGFuZCB0aGUgZnVuY3Rpb24gd2lsbFxyXG4gKiByZXR1cm4gYSBjb3JyZWN0IHN0cmluZy5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB0aGUgcHJveHkgZnVuY3Rpb25zIGhhdmUgYSBwYXJhbWV0ZXIgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZW0gZnJvbVxyXG4gKiBvdGhlciBwcm94eSBmdW5jdGlvbnMuIFRoaXMgaXMgYmVjYXVzZSB3ZSB3YW50IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gZGlmZmVyZW50IENTUyB0eXBlcyxcclxuICogc28gdGhhdCBhIGZ1bmN0aW9uIHVzZWQgZm9yIG9uZSBDU1MgdHlwZSBjYW5ub3QgYmUgdXNlZCBmb3IgYSBkaWZmZXJlbnQgQ1NTIHR5cGUuIEZvclxyXG4gKiBleGFtcGxlLCB0aGUgYGNhbGMoKWAgZnVuY3Rpb24gcmV0dXJucyB0aGUgTnVtYmVyUHJveHkgZnVuY3Rpb24sIHdoaWxlIHRoZVxyXG4gKiBgbGluZWFySW5ncmFkaWVudCgpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBJbWFnZVByb3h5IGZ1bmN0aW9uLiBUaHVzIHlvdSBjYW5ub3QgdXNlIHRoZVxyXG4gKiAnY2FsYygpYCBmdW5jdGlvbiBmb3IgaW1hZ2UtYmFzZWQgQ1NTIHByb3BlcnRpZXMgYW5kIHZpY2UgdmVyc2EuXHJcbiAqL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWMgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHJpbmdQcm94eSB0eXBlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdHJpbmcuIFRoaXMgZnVuY3Rpb24gaXMgcGFydCBvZiB0eXBlXHJcbiAqIGRlZmluaXRpb24gZm9yIGFsbCBDU1MgcHJvcGVydGllcyAtIGV2ZW4gZm9yIHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBgc3RyaW5nYCBhcyBwYXJ0IG9mIHRoZWlyXHJcbiAqIHR5cGUuXHJcbiAqIFxyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHJldHVybmVkIGZyb20gdGhlIGByYXcoKWAgZnVuY3Rpb24sIHdoaWNoIGFsbG93cyBieS1wYXNzaW5nIHRoZSBwcm9wZXJ0eVxyXG4gKiB0eXBpbmcgcnVsZXMgYW5kIHNwZWNpZnlpbmcgYSBzdHJpbmcgZGlyZWN0bHkuIFRoaXMgbWlnaHQgYmUgdXNlZnVsLCB3aGVuIGEgc3RyaW5nIHZhbHVlIGlzXHJcbiAqIG9idGFpbmVkIGZyb20gc29tZSBleHRlcm5hbCBjYWxjdWxhdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHJpbmdQcm94eSA9IChwPzogXCJzdHJpbmdcIikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogU3R5bGUgdmFsdWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIChhbG1vc3QpIGFueSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCYXNlX1N0eWxlVHlwZSA9IFwiaW5oZXJpdFwiIHwgXCJpbml0aWFsXCIgfCBcInVuc2V0XCIgfCBcInJldmVydFwiIHwgU3RyaW5nUHJveHkgfCBudWxsIHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYXJQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgb2JqZWN0IHdpdGggdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gKiB3ZSBuZWVkIHRoaXMgaW50ZXJmYWNlIGJlY2F1c2UgZXZlcnkgc3R5bGUgcHJvcGVydHkgY2FuIGFjY2VwdCB2YWx1ZSBpbiB0aGUgZm9ybSBvZiB2YXIoKVxyXG4gKiBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYXJQcm94eTxUID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU2V0cyBuZXcgdmFsdWUgb2YgdGhpcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgZm9yIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHNldFZhbHVlKCB2YWx1ZTogVCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBleHRlbmRzIHRoZSBnaXZlbiB0eXBlIHdpdGggdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBiYXNpYyBzdHlsZSB2YWx1ZXMgdGhhdCBhcmUgdmFsaWQgZm9yIGFsbCBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKiAtIFN0cmluZ1Byb3h5IHR5cGUgdGhhdCBhbGxvd3Mgc3BlY2lmeWluZyByYXcgc3RyaW5nIHZhbHVlLlxyXG4gKiAtIElWYXJQcm94eSBvYmplY3QgdGhhdCBhbGxvd3MgdXNpbmcgYSBDU1MgY3VzdG9tIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWQ8VD4gPSBUIHwgQmFzZV9TdHlsZVR5cGUgfCBJVmFyUHJveHk8VD47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBwYWlyLWxpa2UgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIHRvIDIgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yUGFpcjxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3gtbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gNCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JCb3g8VD4gPSBUIHwgW0V4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD4/LCBFeHRlbmRlZDxUPj9dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIG9yIG1vcmUgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yTWFueTxUPiA9IFQgfCBFeHRlbmRlZDxUPltdO1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIG9yIG1vcmUgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE1hbnk8VD4gPSBFeHRlbmRlZDxUPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtZXJpYyB0eXBlcyBhcyBhIGJhc2VpcyBmb3IgaGFuZGxpbmcgQ1NTIDxudW1iZXI+LiA8bGVuZ3RoPiwgPGFuZ2xlPiwgZXRjLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtYmVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhIHN0cmluZyB2YWx1ZSBjYW4gYmUgYXNzaWduZWQgdG8gcHJvcGVydGllcyBvZiB0aGUgQ1NTXHJcbiAqIG51bWVyaWMgdHlwZXMuIFRoaXMgZnVuY3Rpb24gaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZSBtaW4oKSwgbWF4KCkgYW5kIGNhbGMoKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE51bWJlclByb3h5PFQgZXh0ZW5kcyBzdHJpbmc+ID0gKHA/OiBUKSA9PiBzdHJpbmc7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIG51bWVyaWMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IG51bWJlciB8IHN0cmluZyB8IE51bWJlclByb3h5PFQ+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aU51bWJlckJhc2U8VCBleHRlbmRzIHN0cmluZz4gPSBPbmVPck1hbnk8TnVtYmVyQmFzZTxUPj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU51bWJlck1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciB0eXBlLCB0aGV5IGFyZSBjb252ZXJ0ZWRcclxuICogdG8gc3RyaW5ncyB1c2luZyB0aGUgYG51bWJlclRvU3RyaW5nYCBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIC8qKiBDb252ZXJ0cyBudW1iZXIgdG8gc3RyaW5nIGFwcGVuZGluZyBuZWNlc3NhcnkgdW5pdCBzdWZmaXhlcyAqL1xyXG4gICAgbnVtYmVyVG9TdHJpbmc6ICggbjogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIHNpbmdsZSBudW1lcmljIHN0eWxlIHZhbHVlIHRvIHN0cmluZyBhcHBlbmRpbmcgbmVjZXNzYXJ5IHVuaXQgc3VmZml4ZXMgKi9cclxuICAgIHN0eWxlVG9TdHJpbmc6ICggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8qKiBDb252ZXJ0cyBtdWx0aXBsZSBudW1lcmljIHN0eWxlIHZhbHVlIHRvIHN0cmluZyBhcHBlbmRpbmcgbmVjZXNzYXJ5IHVuaXQgc3VmZml4ZXMgKi9cclxuICAgIG11bHRpU3R5bGVUb1N0cmluZzogKCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgb2YgdXNpbmcgdGhlIENTUyBtaW4oKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjbGFtcCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2FsYygpIGZ1bmN0aW9uLiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBmb3JtdWxhclxyXG4gICAgICogc3RyaW5nIGFuZCBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mIHBhcmFtZXRlcnMuIFRoZSBmb3JtdWxhciBzdHJpbmcgY2FuIGNvbnRhaW4gcGxhY2Vob2xkZXJzXHJcbiAgICAgKiB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIHBhcmFtZXRlcnMuIFBsYWNlaG9sZGVycyBoYXZlIHRoZSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gICAgICogXHJcbiAgICAgKiBgYGBcclxuICAgICAqIHs8aW5kZXg+IFt8IDx1bml0Pl19XHJcbiAgICAgKiBgYGBcclxuICAgICAqIFRoZSBgPGluZGV4PmAgdG9rZW4gaXMgYSB6ZXJvLWJhc2VkIGluZGV4IGluIHRoZSBwYXJhbWV0ZXIgYXJyYXkuIFRoZSBvcHRpb25hbCBgPHVuaXQ+YCB0b2tlbiBpc1xyXG4gICAgICogYSBtZWFzdXJlbWVudCB1bml0IChsZW5ndGgsIHBlcmNlbnQsIGFuZ2xlLCBldGMuKSBhbmQgaXMgdXNlZCBpZiB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXJcclxuICAgICAqIGlzIGEgbnVtYmVyLlxyXG4gICAgICogXHJcbiAgICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICAgKiBjbGFzcyBNeVN0eWxlc1xyXG4gICAgICoge1xyXG4gICAgICogICAgIHdhbGxHYXAgPSAkdmFyKCBcIndpZHRoXCIsIDE2KTtcclxuICAgICAqICAgICBteUNsYXNzID0gJGNsYXNzKHsgbWF4V2lkdGg6IExlbi5jYWxjKFwiMTAwJSAtIDIqezB9XCIsIHRoaXMud2FsbEdhcCl9KVxyXG4gICAgICogfVxyXG4gICAgICogYGBgXHJcbiAgICAgKiBAcGFyYW0gZm9ybXVsYSBcclxuICAgICAqIEBwYXJhbSBwYXJhbXMgXHJcbiAgICAgKi9cclxuICAgIGNhbGMoIGZvcm11bGE6IHN0cmluZywgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIGludG8gcGVyY2VudHMuIFZhbHVlcyBiZXR3ZWVuIC0xLjAgYW5kIDEuMCBub24taW5jbHVzaXZlIGFyZVxyXG4gICAgICogbXVsdGlwbGllZCBieSAxMDAuXHJcbiAgICAgKi9cclxuICAgIHBlcmNlbnQoIG46IG51bWJlcik6IE51bWJlclByb3h5PFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxudW1iZXI+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBOdW1iZXIgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyVHlwZSA9IFwiTnVtYmVyXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzTnVtYmVyID0gRXhjbHVkZTxOdW1iZXJCYXNlPE51bWJlclR5cGU+LHN0cmluZz47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpTnVtYmVyID0gT25lT3JNYW55PENzc051bWJlcj47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by1mb3VyLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBDc3NOdW1iZXJCb3ggPSBPbmVPckJveDxDc3NOdW1iZXI+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bnVtYmVyPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTnVtYmVyTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPE51bWJlclR5cGU+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHBlcmNlbnQgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFVuaXRzID0gXCIlXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgUGVyY2VudCB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VHlwZSA9IFwiUGVyY2VudFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUGVyY2VudCA9IE51bWJlckJhc2U8UGVyY2VudFR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpUGVyY2VudCA9IE9uZU9yTWFueTxDc3NQZXJjZW50PjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUGVyY2VudEJveCA9IE9uZU9yQm94PENzc1BlcmNlbnQ+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFByb3h5ID0gTnVtYmVyUHJveHk8UGVyY2VudFR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRnJhY3Rpb25NYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxwZXJjZW50PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzUGVyY2VudE1hdGggZXh0ZW5kcyBJTnVtYmVyTWF0aDxQZXJjZW50VHlwZT5cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIHRvIGEgcGVyY2VudCBzdHJpbmcuIE51bWJlcnMgYmV0d2VlbiAtMSBhbmQgMSBhcmUgbXVsdGlwbHllZCBieSAxMDAuXHJcbiAgICAgKi9cclxuICAgIHBlcmNlbnQoIG46IG51bWJlcik6IFBlcmNlbnRQcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8bGVuZ3RoPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgbGVuZ3RoICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFVuaXRzID0gXCJRXCIgfCBcImNoXCIgfCBcImNtXCIgfCBcImVtXCIgfCBcImV4XCIgfCBcImljXCIgfCBcImluXCIgfCBcImxoXCIgfCBcIm1tXCIgfCBcInBjXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJwdFwiIHwgXCJweFwiIHwgXCJ2YlwiIHwgXCJ2aFwiIHwgXCJ2aVwiIHwgXCJ2d1wiIHwgXCJyZW1cIiB8IFwicmxoXCIgfCBcInZtYXhcIiB8IFwidm1pblwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIExlbmd0aCB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhUeXBlID0gXCJMZW5ndGhcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGggPSBOdW1iZXJCYXNlPExlbmd0aFR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlMZW5ndGggPSBPbmVPck1hbnk8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGhCb3ggPSBPbmVPckJveDxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhQcm94eSA9IE51bWJlclByb3h5PExlbmd0aFR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTGVuZ3RoTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bGVuZ3RoPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTGVuZ3RoTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPExlbmd0aFR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBxdWF0ZXJzIG9mIGFuIGluY2ggKi9cclxuICAgIFEoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjaCB1bml0cyAqL1xyXG4gICAgY2goIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYW50aW1ldGVycyAqL1xyXG4gICAgY20oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYWxjdWxhdGVkIGZvbnQtc2l6ZXMgb2YgdGhlIGVsZW1lbnQgKi9cclxuICAgIGVtKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaGVpZ2h0cyBvZiBsb3dlcmNhc2UgbGV0dGVyICd4JyBpbiB0aGUgZm9udCAqL1xyXG4gICAgZXgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpYyB1bml0cyAqL1xyXG4gICAgaWMoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpbmNoZXMgKi9cclxuICAgIGluKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSBlbGVtZW50ICovXHJcbiAgICBsaCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIG1pbGxpbWV0ZXJzICovXHJcbiAgICBtbSggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpY2FzICovXHJcbiAgICBwYyggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBvaW50cyAqL1xyXG4gICAgcHQoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaXhlbHMgKi9cclxuICAgIHB4KCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gICAgICogb2YgdGhlIHJvb3QgZWxlbWVudOKAmXMgYmxvY2sgYXhpcyAqL1xyXG4gICAgdmIoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG4gICAgdmgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAgICAgKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBpbmxpbmUgYXhpcyAqL1xyXG4gICAgdmkoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgd2lkdGggb2YgdGhlIHZpZXdwb3J0J3MgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrICovXHJcbiAgICB2dyggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGZvbnRzaXplcyBvZiB0aGUgcm9vdCBlbGVtZW50ICg8aHRtbD4pICovXHJcbiAgICByZW0oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBsaW5lLWhlaWdodHMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG4gICAgcmxoKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIHNtYWxsZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuICAgIHZtYXgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgbGFyZ2VyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbiAgICB2bWluKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgYSBwb2ludCB1c2luZyB4IGFuZCB5IGNvb3JkaW5hdGVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9pbnQgPSBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8YW5nbGU+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBhbmdsZSAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVVuaXRzID0gXCJkZWdcIiB8IFwicmFkXCIgfCBcImdyYWRcIiB8IFwidHVyblwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEFuZ2xlIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVHlwZSA9IFwiQW5nbGVcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0FuZ2xlID0gTnVtYmVyQmFzZTxBbmdsZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUFuZ2xlID0gT25lT3JNYW55PENzc0FuZ2xlPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0FuZ2xlQm94ID0gT25lT3JCb3g8Q3NzQW5nbGU+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlUHJveHkgPSBOdW1iZXJQcm94eTxBbmdsZVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzQW5nbGVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxhbmdsZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0FuZ2xlTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEFuZ2xlVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZGVncmVlcyAqL1xyXG4gICAgIGRlZyggbjogbnVtYmVyKTogQW5nbGVQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiByYWRpYW5zICovXHJcbiAgICByYWQoIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZ3JhZGlhbnMgKi9cclxuICAgIGdyYWQoIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gdHVybnMgKi9cclxuICAgIHR1cm4oIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPHRpbWU+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiB0aW1lICovXHJcbmV4cG9ydCB0eXBlIFRpbWVVbml0cyA9IFwic1wiIHwgXCJtc1wiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFRpbWUgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgVGltZVR5cGUgPSBcIlRpbWVcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzVGltZSA9IE51bWJlckJhc2U8VGltZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpVGltZSA9IE9uZU9yTWFueTxDc3NUaW1lPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzVGltZUJveCA9IE9uZU9yQm94PENzc1RpbWU+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBUaW1lUHJveHkgPSBOdW1iZXJQcm94eTxUaW1lVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NUaW1lTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8dGltZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1RpbWVNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8VGltZVR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuICAgIG1zKCBuOiBudW1iZXIpOiBUaW1lUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIHNlY29uZHMgKi9cclxuICAgIHMoIG46IG51bWJlcik6IFRpbWVQcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8cmVzb2x1dGlvbj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHJlc29sdXRpb24gKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblVuaXRzID0gXCJkcGlcIiB8IFwiZHBjbVwiIHwgXCJkcHB4XCIgfCBcInhcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBSZXNvbHV0aW9uIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25UeXBlID0gXCJSZXNvbHV0aW9uXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Jlc29sdXRpb24gPSBOdW1iZXJCYXNlPFJlc29sdXRpb25UeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVJlc29sdXRpb24gPSBPbmVPck1hbnk8Q3NzUmVzb2x1dGlvbj47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by1mb3VyLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Jlc29sdXRpb25Cb3ggPSBPbmVPckJveDxDc3NSZXNvbHV0aW9uPjtcclxuXHJcbi8qKiBQcm94eSB0eXBlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25Qcm94eSA9IE51bWJlclByb3h5PFJlc29sdXRpb25UeXBlPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1Jlc29sdXRpb25NYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzUmVzb2x1dGlvbk1hdGggZXh0ZW5kcyBJTnVtYmVyTWF0aDxSZXNvbHV0aW9uVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUEkgKi9cclxuICAgIGRwaSggbjogbnVtYmVyKTogUmVzb2x1dGlvblByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBDTSAqL1xyXG4gICAgZHBjbSggbjogbnVtYmVyKTogUmVzb2x1dGlvblByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBQWCAqL1xyXG4gICAgZHBweCggbjogbnVtYmVyKTogUmVzb2x1dGlvblByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gWCAqL1xyXG4gICAgeCggbjogbnVtYmVyKTogUmVzb2x1dGlvblByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxmcmVxdWVuY3k+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBmcmVxdWVuY3kgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VW5pdHMgPSBcIkh6XCIgfCBcImtIelwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEZyZXF1ZW5jeSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lUeXBlID0gXCJGcmVxdWVuY3lcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NGcmVxdWVuY3kgPSBOdW1iZXJCYXNlPEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlGcmVxdWVuY3kgPSBPbmVPck1hbnk8Q3NzRnJlcXVlbmN5PjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NGcmVxdWVuY3lCb3ggPSBPbmVPckJveDxDc3NGcmVxdWVuY3k+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lQcm94eSA9IE51bWJlclByb3h5PEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzRnJlcXVlbmN5TWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEZyZXF1ZW5jeVR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBIZXJ0eiAqL1xyXG4gICAgaHooIG46IG51bWJlcik6IEZyZXF1ZW5jeVByb3h5XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIEtpbG8tSGVydHogKi9cclxuICAgIGtoeiggbjogbnVtYmVyKTogRnJlcXVlbmN5UHJveHlcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnJhY3Rpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgZnJhY3Rpb25zIChmb3IgZmxleCBhbmQgZ3JpZCBsYXlvdXRzKSAqL1xyXG5leHBvcnQgdHlwZSBGcmFjdGlvblVuaXRzID0gXCJmclwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEZyYWN0aW9uIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEZyYWN0aW9uVHlwZSA9IFwiRnJhY3Rpb25cIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmFjdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyYWN0aW9uID0gTnVtYmVyQmFzZTxGcmFjdGlvblR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJhY3Rpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUZyYWN0aW9uID0gT25lT3JNYW55PENzc0ZyYWN0aW9uPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmFjdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyYWN0aW9uQm94ID0gT25lT3JCb3g8Q3NzRnJhY3Rpb24+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxmcmFjdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEZyYWN0aW9uUHJveHkgPSBOdW1iZXJQcm94eTxGcmFjdGlvblR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRnJhY3Rpb25NYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmFjdGlvbj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0ZyYWN0aW9uTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEZyYWN0aW9uVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW5tYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NGcmFjdGlvbj4sIG1heDogRXh0ZW5kZWQ8Q3NzRnJhY3Rpb24+KTogTnVtYmVyUHJveHk8RnJhY3Rpb25UeXBlPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBmcmFjdGlvbiB2YWx1ZSBmb3IgZmxleCAqL1xyXG4gICAgZnIoIG46IG51bWJlcik6IEZyYWN0aW9uUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCA9IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgYSBzaW1wbGUgMSBvciB0d28gdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBTaW1wbGVDc3NQb3NpdGlvbiA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgZnVsbCB1cCB0byA0IHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9zaXRpb24gPSBTaW1wbGVDc3NQb3NpdGlvbiB8IFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkXSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD5dIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIG11bHRpcGxlIGA8cG9zaXRpb24+YCBDU1MgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlDc3NQb3NpdGlvbiA9IEV4dGVuZGVkPENzc1Bvc2l0aW9uPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmFkaXVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIGNvcm5lciByYWRpdXMgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmFkaXVzID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVUkxzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXJsUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBDU1MgdXJsKCkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcmxQcm94eSA9IChwPzogXCJ1cmxcIikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gYXR0cigpIGZ1bmN0aW9uIHN1cHBvcnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVHlwZUtleXdvcmQgPSBcInN0cmluZ1wiIHwgXCJjb2xvclwiIHwgXCJ1cmxcIiB8IFwiaW50ZWdlclwiIHwgXCJudW1iZXJcIiB8IFwibGVuZ3RoXCIgfCBcImFuZ2xlXCIgfCBcInRpbWVcIiB8IFwiZnJlcXVlbmN5XCI7XHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVW5pdEtleXdvcmQgPSBQZXJjZW50VW5pdHMgfCBMZW5ndGhVbml0cyB8IFRpbWVVbml0cyB8IEFuZ2xlVW5pdHMgfCBSZXNvbHV0aW9uVW5pdHMgfCBGcmVxdWVuY3lVbml0cztcclxuXHJcbi8qKlxyXG4gKiBUaGUgQXR0clByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgQ1NTIGF0dHIoKSBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBdHRyUHJveHkgPSAocD86IFwiYXR0clwiKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXZWIgTmFtZXNwYWNlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFdlYk5hbWVzcGFjZXMgY2xhc3MgY29udGFpbnMgaWRlbnRpZmllcnMgZm9yIHRoZSBrbm93biBXZWItcmVsYXRlZCBuYW1lc3BhY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYk5hbWVzcGFjZXNcclxue1xyXG5cdHN0YXRpYyByZWFkb25seSBIVE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFNWRyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWExpbmsgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWE1MTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IE1hdGhNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=