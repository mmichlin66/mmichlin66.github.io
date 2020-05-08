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
 * Creates new selector rule. Selector can be specified as a string or via the selector function.
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
function $enableShortNames(enable, prefix) {
    return RuleContainerFuncs.enableShortNames(enable, prefix);
}
exports.$enableShortNames = $enableShortNames;
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
 * Returns a string representation of a selector. This function is a tag function and must be
 * invoked with the template string without parentheses.
 */
function selector(parts, ...params) {
    return () => SelectorFuncs_1.formatSelector(parts, params);
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
 * to convert it to a proper type. This function is a tag function and must be invoked with
 * the template string without parentheses.
 */
function raw(parts, ...params) {
    // number of parameters is always 1 less than the number of string parts
    let paramsLen = params.length;
    if (paramsLen === 0)
        return () => parts[0];
    let buf = [];
    for (let i = 0; i < paramsLen; i++) {
        buf.push(parts[i]);
        buf.push(UtilFuncs_1.valueToString(params[i]));
    }
    return () => `${buf.join("")}${parts[paramsLen]}`;
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
     * important properties and dependent rules.
     */
    parseInputStyleset(inputStyleset) {
        // prepare local variables to accumulate parsing results. We do it in local varibales
        // because in case there are parents, we want first copy properties from them so that
        // our own properties can override them.
        let parentRules = null;
        let dependentRules = null;
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
                if (!dependentRules)
                    dependentRules = [];
                // if the value is an array, then this is a parameterised pseudo entity where the first element
                // is the parameter value (string) and the second the ExtendedStyleset. Otherwise, the value is
                // just the ExtendedStyleset.
                let dependentRule;
                if (Array.isArray(propVal))
                    dependentRule = new DependentRule(propName, propVal[0], propVal[1], this);
                else
                    dependentRule = new DependentRule("&" + propName, undefined, propVal, this);
                dependentRules.push(dependentRule);
            }
            else if (propName === "&") {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    if (!dependentRules)
                        dependentRules = [];
                    tuples.forEach(tuple => dependentRules.push(new DependentRule(tuple[0], undefined, tuple[1], this)));
                }
            }
            else if (propName.startsWith("&")) {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    if (!dependentRules)
                        dependentRules = [];
                    tuples.forEach(tuple => dependentRules.push(new DependentRule(() => propName + SelectorFuncs_1.selectorToString(tuple[0]), undefined, tuple[1], this)));
                }
            }
            else if (propName.endsWith("&")) {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    if (!dependentRules)
                        dependentRules = [];
                    tuples.forEach(tuple => dependentRules.push(new DependentRule(() => SelectorFuncs_1.selectorToString(tuple[0]) + propName, undefined, tuple[1], this)));
                }
            }
            else {
                // copy the property value to our internal styleset
                styleset[propName] = propVal;
            }
        }
        // by now we went over all properties of the input styleset. If we have parent style
        // rules, copy styleset, important and dependent rules data from them.
        if (parentRules && parentRules.length > 0) {
            parentRules.forEach(parent => {
                if (parent.styleset)
                    this.styleset = StyleFuncs_1.mergeStylesets(this.styleset, parent.styleset);
                if (parent.dependentRules && parent.dependentRules.length > 0) {
                    if (!this.dependentRules)
                        this.dependentRules = [];
                    parent.dependentRules.forEach(dependentRule => {
                        let newDependentRule = dependentRule.clone();
                        newDependentRule.containingRule = this;
                        this.dependentRules.push(newDependentRule);
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
        if (dependentRules && dependentRules.length > 0) {
            if (!this.dependentRules)
                this.dependentRules = dependentRules;
            else
                dependentRules.forEach(dependentRule => this.dependentRules.push(dependentRule));
        }
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        // if dependent rules exist, process them under the same container
        if (this.dependentRules)
            this.dependentRules.forEach(dependentRule => dependentRule.process(owner, null));
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        this.styleset = src.styleset;
        // if dependent rules exist, clone them
        if (src.dependentRules) {
            this.dependentRules = [];
            for (let srcDependentRule of src.dependentRules) {
                let newDependentRule = srcDependentRule.clone();
                newDependentRule.containingRule = this;
                this.dependentRules.push(newDependentRule);
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
        // if dependent rules exist, insert them under the same parent
        if (this.dependentRules)
            this.dependentRules.forEach(dependentRule => dependentRule.insert(parent));
    }
    // Clers the CSS rule object.
    clear() {
        super.clear();
        // if dependent rules exist, clear them too
        if (this.dependentRules)
            this.dependentRules.forEach(dependentRule => dependentRule.clear());
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
        this.cssRule.style.setProperty(UtilFuncs_1.camelToDash(name), StyleFuncs_1.stylePropToString(name, value, true), important ? "!important" : null);
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
    clone() {
        let newRule = new DependentRule(this.selector);
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
    let rgbVal = typeof c === "string" ? ColorTypes_1.Colors[c] : c;
    return rgbToString((rgbVal & 0xFF0000) >> 16, (rgbVal & 0x00FF00) >> 8, rgbVal & 0x0000FF, a);
}
exports.alphaToString = alphaToString;
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
function selectorItemToString(val) {
    return UtilFuncs_1.valueToString(val, {
        fromNull: v => "",
        fromObject: v => {
            if (v instanceof StyleRules_1.ClassRule)
                return v.cssName;
            else if (v instanceof StyleRules_1.IDRule)
                return v.cssName;
            else if (v instanceof StyleRules_1.SelectorRule)
                return v.selectorText;
            else
                return UtilFuncs_1.valueToString(v);
        }
    });
}
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
        fromAny: selectorItemToString,
        arraySeparator: ""
    });
}
exports.selectorToString = selectorToString;
/**
 * Returns a string representation of a selector using the given template string with optional
 * placeholders (e.g. {0}), which will be replaced by names of tags, classes and IDs and other
 * possible types.
 */
function formatSelector(parts, params) {
    // number of parameters is always 1 less than the number of string parts
    let paramsLen = params.length;
    if (paramsLen === 0)
        return parts[0];
    let buf = [];
    for (let i = 0; i < paramsLen; i++) {
        buf.push(parts[i]);
        buf.push(selectorItemToString(params[i]));
    }
    return `${buf.join("")}${parts[paramsLen]}`;
}
exports.formatSelector = formatSelector;
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
    // number of parameters is always 1 less than the number of string parts
    let paramsLen = params.length;
    if (paramsLen === 0)
        return parts[0];
    let buf = [];
    for (let i = 0; i < paramsLen; i++) {
        buf.push(parts[i]);
        buf.push(styleToString(params[i], convertFunc));
    }
    return `calc(${buf.join("")}${parts[paramsLen]})`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU3R5bGVBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9VdGlsQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JvdXBSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvTWlzY1J1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlQ29udGFpbmVyLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9SdWxlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1N0eWxlUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1ZhclJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvckZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvQ29sb3JUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ZvbnRGYWNlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9JbWFnZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvTWVkaWFGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1NlbGVjdG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvVXRpbEZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvVXRpbFR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsaUdBQWtEO0FBSWxEOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCRztBQUNILFNBQWdCLEdBQUcsQ0FBRSxDQUFrQixFQUFFLENBQWtCLEVBQUUsQ0FBa0IsRUFB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LENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFD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QixnQkFBZ0IsQ0FBRSxHQUEwQjtJQUV4RCxPQUFPLGFBQWEsQ0FBRSxHQUFHLEVBQUU7UUFDdkIsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNqQixVQUFVLEVBQUUsYUFBYSxDQUFDLGFBQWE7UUFDdkMsU0FBUyxFQUFFLGFBQWEsQ0FBQywyQkFBMkI7S0FDdkQsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVBELDRDQU9DO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixxQkFBcUIsQ0FBRSxHQUErQixFQUFFLFNBQWlCO0lBRXJGLE9BQU8sYUFBYSxDQUFFLEdBQUcsRUFBRTtRQUN2QixhQUFhLEVBQUUsZ0JBQWdCO1FBQy9CLGNBQWMsRUFBRSxTQUFTO0tBQzVCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFORCxzREFNQzs7Ozs7Ozs7Ozs7Ozs7QUMxc0JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7O0FBeWxCSCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtCQUFrQjtBQUNsQixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOztHQUVHO0FBQ0gsTUFBc0IsYUFBYTs7QUFBbkMsc0NBUUM7QUFOZ0Isa0JBQUksR0FBRyw4QkFBOEIsQ0FBQztBQUN0QyxpQkFBRyxHQUFHLDRCQUE0QixDQUFDO0FBQ25DLG1CQUFLLEdBQUcsOEJBQThCLENBQUM7QUFDdkMsaUJBQUcsR0FBRyxzQ0FBc0MsQ0FBQztBQUM3QyxtQkFBSyxHQUFHLCtCQUErQixDQUFDO0FBQ3hDLG9CQUFNLEdBQUcsb0NBQW9DLENBQUMiLCJmaWxlIjoibWltY3NzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9taW1jc3NUeXBlcy5qc1wiKTtcbiIsIu+7v2ltcG9ydCAqIGFzIENvbG9yVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyByZWQsIGdyZWVuLCBibHVlIHNlcGFyYXRpb24gdmFsdWVzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciBvciBhXHJcbiAqIHN0cmluZyB3aXRoIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIDAgdG8gMjU1LlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gU3RyaW5nIHdoaWNoIGlzIHVzZWQgYXMgaXMuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gU3RyaW5nIHdoaWNoIGlzIHVzZWQgYXMgaXMuXHJcbiAqIFxyXG4gKiBAcGFyYW0gciBSZWQgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YXVlLlxyXG4gKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyIHwgc3RyaW5nLCBnOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IENvbG9yVHlwZXMuQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5yZ2JUb1N0cmluZyggciwgZywgYiwgYSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIGh1ZS1zYXR1cmF0aW9uLWxpZ2h0bmVzcyBjb21wb25lbnRzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICogXHJcbiAqIEBwYXJhbSBoIEh1ZSBjb21wb25lbnQgYXMgYW4gYW5nbGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBzIFNhdHVyYXRpb24gYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciB8IHN0cmluZywgbDogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogQ29sb3JUeXBlcy5Db2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmhzbFRvU3RyaW5nKCBoLCBzLCBsLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjb2xvciBhbmQgYW4gb3B0aW9uYWwgYWxwaGEgbWFzayB0byB0aGUgQ1NTIENvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzXHJcbiAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvciB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gU3RyaW5nIHdoaWNoIGlzIHVzZWQgYXMgaXMuXHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBcclxuICogQHBhcmFtIGEgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoIGM6IG51bWJlciB8IGtleW9mIENvbG9yVHlwZXMuSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIgfCBzdHJpbmcpOiBDb2xvclR5cGVzLkNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MuYWxwaGFUb1N0cmluZyggYywgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIFNpbXBsZUNzc1Bvc2l0aW9uLCBDc3NBbmdsZX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBJbWFnZVR5cGVzIGZyb20gXCIuLi9zdHlsZXMvSW1hZ2VUeXBlc1wiXHJcbmltcG9ydCAqIGFzIEltYWdlRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9JbWFnZUZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBsaW5lYXItZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50KCBhbmdsZT86IEltYWdlVHlwZXMuTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogSW1hZ2VUeXBlcy5JbWFnZVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLmxpbmVhckdyYWRpZW50VG9TdHJpbmcoIFwibGluZWFyLWdyYWRpZW50XCIsIGFuZ2xlLCBzdG9wc09ySGludHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0aW5nTGluZWFyR3JhZGllbnQoIGFuZ2xlPzogSW1hZ2VUeXBlcy5MaW5lYXJHcmFkQW5nbGUsXHJcbiAgICAuLi5zdG9wc09ySGludHM6IEltYWdlVHlwZXMuR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVR5cGVzLkltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IEltYWdlRnVuY3MubGluZWFyR3JhZGllbnRUb1N0cmluZyggXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50XCIsIGFuZ2xlLCBzdG9wc09ySGludHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmFkaWFsLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRpYWxHcmFkaWVudCggc2hhcGU/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICBleHRlbnQ/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50RXh0ZW50LCBwb3M/OiBDc3NQb3NpdGlvbixcclxuICAgIC4uLnN0b3BzT3JIaW50czogSW1hZ2VUeXBlcy5HcmFkaWVudFN0b3BPckhpbnRbXSk6IEltYWdlVHlwZXMuSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gSW1hZ2VGdW5jcy5yYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBcInJhZGlhbC1ncmFkaWVudFwiLCBzaGFwZSwgZXh0ZW50LCBwb3MsIHN0b3BzT3JIaW50cyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRpbmdSYWRpYWxHcmFkaWVudCggc2hhcGU/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICBleHRlbnQ/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50RXh0ZW50LCBwb3M/OiBDc3NQb3NpdGlvbixcclxuICAgIC4uLnN0b3BzT3JIaW50czogSW1hZ2VUeXBlcy5HcmFkaWVudFN0b3BPckhpbnRbXSk6IEltYWdlVHlwZXMuSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gSW1hZ2VGdW5jcy5yYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBcInJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRcIiwgc2hhcGUsIGV4dGVudCwgcG9zLCBzdG9wc09ySGludHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZWBjb25pYy1ncmFkaWVudCgpYCAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmljR3JhZGllbnQoIGFuZ2xlPzogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBwb3M/OiBTaW1wbGVDc3NQb3NpdGlvbixcclxuICAgIC4uLnN0b3BzT3JIaW50czogSW1hZ2VUeXBlcy5HcmFkaWVudFN0b3BPckhpbnRbXSk6IChpbWc/OlwiaW1hZ2VcIikgPT4gc3RyaW5nXHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLmNvbmljR3JhZGllbnRUb1N0cmluZyggYW5nbGUsIHBvcywgc3RvcHNPckhpbnRzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJbWFnZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNyb3NzLWZhZGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzRmFkZSggLi4uYXJnczogSW1hZ2VUeXBlcy5Dcm9zc0ZhZGVQYXJhbVtdKTogSW1hZ2VUeXBlcy5JbWFnZVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLmNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBtb2R1bGUgZGVmaW5lcyB0eXBlcyBvZiBvYmplY3QgdGhhdCByZXByZXNlbnQgQ1NTIHJ1bGVzLlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBSdWxlVHlwZXMgZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBSdWxlQ29udGFpbmVyRnVuY3MgZnJvbSBcIi4uL3J1bGVzL1J1bGVDb250YWluZXJcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnksIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7Q3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHtJRm9udEZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5pbXBvcnQge0Fic3RyYWN0UnVsZSwgQ2xhc3NSdWxlLCBJRFJ1bGUsIFNlbGVjdG9yUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1N0eWxlUnVsZXNcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuLi9ydWxlcy9BbmltYXRpb25SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVmFyUnVsZVwiXHJcbmltcG9ydCB7Rm9udEZhY2VSdWxlLCBJbXBvcnRSdWxlLCBOYW1lc3BhY2VSdWxlLCBQYWdlUnVsZX0gZnJvbSBcIi4uL3J1bGVzL01pc2NSdWxlc1wiXHJcbmltcG9ydCB7U3VwcG9ydHNSdWxlLCBNZWRpYVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9Hcm91cFJ1bGVzXCJcclxuaW1wb3J0IHt2YWx1ZVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgYWJzdHJhY3QgcnVsZSwgd2hpY2ggZGVmaW5lcyBhIHN0eWxlc2V0IHRoYXQgY2FuIGJlIGV4dGVuZGVkIGJ5IG90aGVyIHN0eWxlXHJcbiAqIHJ1bGVzLiBBYnN0cmFjdCBydWxlcyBkb24ndCBoYXZlIHNlbGVjdG9ycyBhbmQgYXJlIG5vdCBpbnNlcnRlZCBpbnRvIERPTS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWJzdHJhY3QoIHN0eWxlOiBSdWxlVHlwZXMuRXh0ZW5kZWRTdHlsZXNldCk6IFJ1bGVUeXBlcy5JQWJzdHJhY3RSdWxlXHJcblx0eyByZXR1cm4gbmV3IEFic3RyYWN0UnVsZSggc3R5bGUpOyB9XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY2xhc3MgcnVsZS4gVGhlIGNsYXNzIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2ZcclxuICogdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdFxyXG4gKiBuYW1lIG9yIGFub3RoZXIgY2xhc3MgcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG8gXCJkZWNsYXJlXCJcclxuICogdGhlIGNsYXNzLiBTdWNoIGNsYXNzIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY2xhc3MoIHN0eWxlPzogUnVsZVR5cGVzLkV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JQ2xhc3NSdWxlKTogUnVsZVR5cGVzLklDbGFzc1J1bGVcclxuXHR7IHJldHVybiBuZXcgQ2xhc3NSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IElEIHJ1bGUuIFRoZSBJRCBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhcyBwYXJ0IG9mXHJcbiAqIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW4gZXhwbGljaXRcclxuICogbmFtZSBvciBhbm90aGVyIElEIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvIFwiZGVjbGFyZVwiXHJcbiAqIHRoZSBJRC4gU3VjaCBJRCBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZFxyXG4gKiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGlkKCBzdHlsZT86IFJ1bGVUeXBlcy5FeHRlbmRlZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUlEUnVsZSk6IFJ1bGVUeXBlcy5JSURSdWxlXHJcblx0eyByZXR1cm4gbmV3IElEUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzZWxlY3RvciBydWxlLiBTZWxlY3RvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgc3RyaW5nIG9yIHZpYSB0aGUgc2VsZWN0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN0eWxlKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlOiBSdWxlVHlwZXMuRXh0ZW5kZWRTdHlsZXNldCk6IFJ1bGVUeXBlcy5JU2VsZWN0b3JSdWxlXHJcblx0eyByZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBSdWxlVHlwZXMuQW5pbWF0aW9uRnJhbWVbXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgUnVsZVR5cGVzLklBbmltYXRpb25SdWxlKTogUnVsZVR5cGVzLklBbmltYXRpb25SdWxlXHJcblx0eyByZXR1cm4gbmV3IEFuaW1hdGlvblJ1bGUoIGZyYW1lcywgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGN1c3RvbSB2YXJpYWJsZSBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVGhlIHZhcmlhYmxlIG5hbWUgd2lsbFxyXG4gKiBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZVxyXG4gKiBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgY3VzdG9tIHZhcmlhYmxlIHJ1bGUuIFRoZVxyXG4gKiBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgc3BlY2lmeWluZyB0aGUgdmFsdWUganVzdCB0byBcImRlY2xhcmVcIiB0aGUgdmFyaWFibGUuIFN1Y2hcclxuICogdmFyaWFibGUgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWQgc3R5bGUgZGVmaW5pdGlvblxyXG4gKiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR2YXI8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHRlbXBsYXRlOiBLLCBwcm9wVmFsPzogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0XHRcdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JVmFyUnVsZTxLPik6IFJ1bGVUeXBlcy5JVmFyUnVsZTxLPlxyXG5cdHsgcmV0dXJuIG5ldyBWYXJSdWxlKCB0ZW1wbGF0ZSwgcHJvcFZhbCwgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpOiBSdWxlVHlwZXMuSUltcG9ydFJ1bGVcclxuXHR7IHJldHVybiBuZXcgSW1wb3J0UnVsZSggdXJsLCBtZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5KTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGZvbnQtZmFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRmb250ZmFjZSggZm9udGZhY2U6IElGb250RmFjZSk6IFJ1bGVUeXBlcy5JRm9udEZhY2VSdWxlXHJcblx0eyByZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggZm9udGZhY2UpOyB9XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG5hbWVzcGFjZSggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IFJ1bGVUeXBlcy5JTmFtZXNwYWNlUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBOYW1lc3BhY2VSdWxlKCBuYW1lc3BhY2UsIHByZWZpeCk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBwYWdlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHBhZ2UoIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzLCBzdHlsZT86IFN0eWxlc2V0KTogUnVsZVR5cGVzLklQYWdlUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBQYWdlUnVsZSggcHNldWRvQ2xhc3MsIHN0eWxlKTsgfVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHN1cHBvcnRzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN1cHBvcnRzPFQgZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPE8+LCBPIGV4dGVuZHMgUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbj4oIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCxPPik6IFJ1bGVUeXBlcy5JU3VwcG9ydHNSdWxlPFQ+XHJcblx0eyByZXR1cm4gbmV3IFN1cHBvcnRzUnVsZSggcXVlcnksIGluc3RhbmNlT3JDbGFzcyk7IH1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBtZWRpYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRtZWRpYTxUIGV4dGVuZHMgUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbjxPPiwgTyBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFQgfCBSdWxlVHlwZXMuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQsTz4pOiBSdWxlVHlwZXMuSU1lZGlhUnVsZTxUPlxyXG5cdHsgcmV0dXJuIG5ldyBNZWRpYVJ1bGUoIHF1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3MpOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBhbmQgcmV0dXJucyB0aGUgU3R5bGVzaGVldCBvYmplY3QgdGhhdCBjb250YWluc1xyXG4gKiBuYW1lcyBvZiBJRHMsIGNsYXNzZXMgYW5kIGtleWZyYW1lcyBhbmQgYWxsb3dzIHN0eWxlIG1hbmlwdWxhdGlvbnMuIEZvciBhIGdpdmVuIHN0eWxlc2hlZXRcclxuICogZGVmaW5pdGlvbiBjbGFzcyB0aGVyZSBpcyBhIHNpbmdsZSBzdHlsZXNoZWV0IG9iamVjdCwgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb25cclxuICogaXMgaW52b2tlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdXNlPFQgZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPihcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5wcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3MpIGFzIFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBhbmQgaW5zZXJ0cyBhbGwgaXRzIHJ1bGVzIGludG8gRE9NLiBJZiB0aGUgaW5wdXQgb2JqZWN0IGlzIG5vdFxyXG4gKiBhIHN0eWxlc2hlZXQgYnV0IGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgb2J0YWluIHN0eWxlc2hlZXQgYnkgY2FsbGluZyB0aGUgJHVzZSBmdW5jdGlvbi5cclxuICogTm90ZSB0aGF0IGVhY2ggc3R5bGVzaGVldCBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzXHJcbiAqIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgaW5zZXJ0ZWQgdG8gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXNcclxuICogdXAgdG8gMS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWN0aXZhdGU8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5hY3RpdmF0ZSggaW5zdGFuY2VPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaCBzdHlsZXNoZWV0XHJcbiAqIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlXHJcbiAqIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRkZWFjdGl2YXRlKCBpbnN0YW5jZTogUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxue1xyXG5cdHJldHVybiBSdWxlQ29udGFpbmVyRnVuY3MuZGVhY3RpdmF0ZSggaW5zdGFuY2UpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIChzaG9ydCkgcnVsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIGVuYWJsZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGVuYWJsZVNob3J0TmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5lbmFibGVTaG9ydE5hbWVzKCBlbmFibGUsIHByZWZpeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyB0aGUgbmFtZXMgb2YgdGhlIGdpdmVuIGNsYXNzZXMgaW50byBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gYVxyXG4gKiBgY2Fzc2AgcHJvcGVydHkgb2YgYW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gY2xhc3Nlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoIC4uLmNsYXNzZXM6IChSdWxlVHlwZXMuSUNsYXNzUnVsZSB8IEV4dGVuZGVkPHN0cmluZz4pW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWx1ZVRvU3RyaW5nKCBjbGFzc2VzLCB7XHJcblx0XHRhcnJheUl0ZW1GdW5jOiB2ID0+IHYgaW5zdGFuY2VvZiBDbGFzc1J1bGUgPyB2Lm5hbWUgOiB2YWx1ZVRvU3RyaW5nKHYpXHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc1RpbWUsIENzc0xlbmd0aCwgQ3NzUGVyY2VudCwgQ3NzQW5nbGUsIENzc051bWJlciwgT25lT3JCb3gsIENzc1BvaW50fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7Q3NzSW1hZ2V9IGZyb20gXCIuLi9zdHlsZXMvSW1hZ2VUeXBlc1wiXHJcbmltcG9ydCB7Rm9udFN0cmV0Y2hfU2luZ2xlIH0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmltcG9ydCB7U2VsZWN0b3JJdGVtLCBTZWxlY3RvclByb3h5fSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuXHRWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZSwgQW5pbWF0aW9uTmFtZV9TaW5nbGUsIFRpbWluZ0Z1bmN0aW9uX1NpbmdsZSxcclxuXHRBbmltYXRpb25JdGVyYXRpb25Db3VudF9TaW5nbGUsIEFuaW1hdGlvbkRpcmVjdGlvbl9TaW5nbGUsIEFuaW1hdGlvbkZpbGxNb2RlX1NpbmdsZSxcclxuXHRBbmltYXRpb25QbGF5U3RhdGVfU2luZ2xlLCBBbmltYXRpb25fU2luZ2xlLCBCYWNrZ3JvdW5kU2l6ZV9TaW5nbGUsIEJhY2tncm91bmRSZXBlYXRfU2luZ2xlLFxyXG5cdEJhY2tncm91bmRBdHRhY2htZW50X1NpbmdsZSwgQmFja2dyb3VuZE9yaWdpbl9TaW5nbGUsIEJhY2tncm91bmRDbGlwX1NpbmdsZSxcclxuXHRCYWNrZ3JvdW5kX1NpbmdsZSwgQm94U2hhZG93X1NpbmdsZSwgU3R5bGVzZXQsIEZpbHRlclByb3h5LCBCYXNpY1NoYXBlUHJveHksXHJcblx0Rm9udFN0eWxlX1N0eWxlVHlwZSwgRm9udFdlaWdodF9TdHlsZVR5cGUsIEZvbnRfU3R5bGVUeXBlLCBUZXh0RGVjb3JhdGlvbkxpbmVfU3R5bGVUeXBlLFxyXG5cdFRleHREZWNvcmF0aW9uU3R5bGVfU3R5bGVUeXBlLCBUZXh0RGVjb3JhdGlvblRoaWNrbmVzc19TdHlsZVR5cGUsIFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZSxcclxuXHRUZXh0U2hhZG93X1NpbmdsZSwgVHJhbnNmb3JtUHJveHksIFRyYW5zaXRpb25fU2luZ2xlLCBUcmFuc2l0aW9uUHJvcGVydHlfU2luZ2xlLCBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlLCBGaWxsUnVsZV9TdHlsZVR5cGVcclxufSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvU3RyaW5nLCBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCwgYm9yZGVyUmFkaXVzVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7Zm9ybWF0U2VsZWN0b3J9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JGdW5jc1wiO1xyXG5pbXBvcnQge0Nzc1BlcmNlbnRNYXRoLCBDc3NMZW5ndGhNYXRoLCBhcnJheVRvU3RyaW5nLCBDc3NBbmdsZU1hdGgsIENzc051bWJlck1hdGgsIHBvc2l0aW9uVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IuIFRoaXMgZnVuY3Rpb24gaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3QgYmVcclxuICogaW52b2tlZCB3aXRoIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvciggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IFNlbGVjdG9ySXRlbVtdKTogU2VsZWN0b3JQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IGZvcm1hdFNlbGVjdG9yKCBwYXJ0cywgcGFyYW1zKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdHlsZXNldCBtYW5pcHVsYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVQcm9wTmFtZSBTdHlsZSBwcm9wZXJ0eSBuYW1lIHRoYXQgZGV0ZXJtaW5lcyBob3cgdGhlIHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWRcclxuICogdG8gYSBDU1MgY29tcGxpYW50IHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlUHJvcFZhbHVlIFZhbHVlIHRvIGNvbnZlcnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVQcm9wVmFsdWU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHN0eWxlUHJvcE5hbWU6IEssXHJcblx0c3R5bGVQcm9wVmFsdWU6IFZhclZhbHVlVHlwZTxLPik6IHN0cmluZyB8IG51bGxcclxue1xyXG5cdHJldHVybiBzdHlsZVByb3BUb1N0cmluZyggc3R5bGVQcm9wTmFtZSwgc3R5bGVQcm9wVmFsdWUsIHRydWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHZhbHVlcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBTdHlsZXNldCBvYmplY3QgdG8gdGhlIGBzdHlsZWAgYXR0cmlidXRlXHJcbiAqIG9mIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gSFRNTCBlbGVtZW50IHdob3NlIHN0eWxlcyB3aWxsIGJlIHNldC5cclxuICogQHBhcmFtIHN0eWxlc2V0IFN0eWxlc2V0IG9iamVjdCB3aGljaCBwcm92aWRlcyB2YWx1ZXMgZm9yIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFN0eWxlKCBlbG06IEhUTUxFbGVtZW50LCBzdHlsZXNldDogU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuXHRpZiAoc3R5bGVzZXQgPT0gdW5kZWZpbmVkKVxyXG5cdFx0ZWxtLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiKTtcclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0bGV0IGVsbVN0eWxlID0gZWxtLnN0eWxlO1xyXG5cdFx0T2JqZWN0LmtleXMoc3R5bGVzZXQpLmZvckVhY2goIGtleSA9PiBlbG1TdHlsZVtrZXldID0gc3R5bGVQcm9wVG9TdHJpbmcoIGtleSwgc3R5bGVzZXRba2V5XSwgdHJ1ZSkpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIHR3byBTdHlsZXNldCBvYmplY3RzIGJ5IGNvbnZlcnRpbmcgc3R5bGUgcHJvcGVydGllcyB0byBzdHJpbmdzIGFuZCByZXR1cm5zIGFuIG9iamVjdFxyXG4gKiB0aGF0IGNvbnRhaW5zIHN0cmluZyB2YWx1ZXMgb2YgcHJvcGVydGllcyB0aGF0IHdlcmUgbmV3IG9yIGhhdmUgZGlmZmVyZW50IHZhbHVlcyBpbiB0aGUgbmV3XHJcbiAqIHN0eWxlc2V0IGFuZCB1bmRlZmluZWQgdmFsdWVzIGZvciBwcm9wZXJ0aWVzIHRoYXQgZXhpc3QgaW4gdGhlIG9sZCBzdHlsZXNldCBidXQgZG9uJ3QgZXhpc3RcclxuICogaW4gdGhlIG5ldyBvbmUuXHJcbiAqIEBwYXJhbSBvbGRTdHlsZXNldCBcclxuICogQHBhcmFtIG5ld1N0eWxlc2V0IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZTdHlsZXNldHMoIG9sZFN0eWxlc2V0OiBTdHlsZXNldCwgbmV3U3R5bGVzZXQ6IFN0eWxlc2V0KTogeyBbSzogc3RyaW5nXTogc3RyaW5nIHwgdW5kZWZpbmVkIH0gfCBudWxsXHJcbntcclxuXHRjb25zdCB1cGRhdGVWYWw6IHsgW0s6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9ID0ge307XHJcblx0bGV0IGNoYW5nZXNFeGlzdCA9IGZhbHNlO1xyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgb2xkIHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG5ldyBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBvbGRTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgbmV3VmFsID0gbmV3U3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChuZXdWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0dXBkYXRlVmFsW2tleV0gPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBvbGRTdHJpbmdWYWwgPSBzdHlsZVByb3BUb1N0cmluZygga2V5LCBvbGRTdHlsZXNldFtrZXldLCB0cnVlKTtcclxuXHRcdFx0bGV0IG5ld1N0cmluZ1ZhbCA9IHN0eWxlUHJvcFRvU3RyaW5nKCBrZXksIG5ld1ZhbCwgdHJ1ZSk7XHJcblx0XHRcdGlmIChvbGRTdHJpbmdWYWwgIT09IG5ld1N0cmluZ1ZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHJpbmdWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBuZXcgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgb2xkIG9uZS4gVGhlc2VcclxuXHQvLyB3aWxsIGJlIGFkZGVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBuZXdTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgb2xkVmFsID0gb2xkU3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChvbGRWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0Y2hhbmdlc0V4aXN0ID0gdHJ1ZTtcclxuXHRcdFx0dXBkYXRlVmFsW2tleV0gPSBzdHlsZVByb3BUb1N0cmluZygga2V5LCBuZXdTdHlsZXNldFtrZXldLCB0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBjaGFuZ2VzRXhpc3QgPyB1cGRhdGVWYWwgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gW1tTdHlsZXNldF1dIG9iamVjdCBpbnRvIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBTdHlsZXNldCdzIHByb3BlcnR5IGlzXHJcbiAqIGNvbnZlcnRlZCB0byBpdHMgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZ09iamVjdCggc3R5bGVzZXQ6IFN0eWxlc2V0KTogeyBbSzogc3RyaW5nXTogc3RyaW5nIH1cclxue1xyXG5cdGxldCByZXMgPSB7fTtcclxuXHRPYmplY3Qua2V5cyggc3R5bGVzZXQpLmZvckVhY2goIGtleSA9PiByZXNba2V5XSA9IHN0eWxlUHJvcFRvU3RyaW5nKCBrZXksIHN0eWxlc2V0W2tleV0sIHRydWUpKTtcclxuXHRyZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEFuaW1hdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgYW5pbWF0aW9uIHByb3BlcnR5LlxyXG4gKiBAcGFyYW0gbmFtZSBBbmltYXRpb24gbmFtZS4gVGhpcyBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgcmVmZXJlbmNlIHRvIHRoZSBhbmltYXRpb25cclxuICogcnVsZSBkZWZpbml0aW9uLlxyXG4gKiBAcGFyYW0gZHVyYXRpb24gQW5pbWF0aW9uIGR1cmF0aW9uLiBJbnRlZ2VyIG51bWJlcnMgZm9yIG1pbGxpc2Vjb25kcywgZmxvYXRpbmcgcG9pbnRcclxuICogbnVtYmVycyBmb3Igc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSBzZWNvbmQuXHJcbiAqIEBwYXJhbSBmdW5jIFRpbWluZyBmdW5jdGlvbi4gRGVmYXVsdCB2YWx1ZSBpcyBcImVhc2VcIi4gVGhpcyBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBvbmUgb2YgcHJlLWRlZmluZWQgdGltaW5nIGZ1bmN0aW9uIG5hbWVzLlxyXG4gKiAgIC0gYSBudW1iZXIgb2Ygc3RlcHMgaW4gdGhlIHN0ZXBzIGZ1bmN0aW9uLiBUaGUgc3RlcCBwb3NpdGlvbiB3aWxsIGJlIHNldCB0byBqdW1wLXN0YXJ0LlxyXG4gKiAgIC0gb25lLSBvciB0d28taXRlbSBhcnJheSB0aGF0IGRlZmluZXMgYSBzdGVwIGZ1bmN0aW9uLiBUaGUgZmlyc3QgaXRlbSBkZWZpbmVzIHRoZSBudW1iZXJcclxuICogICAgIG9mIHN0ZXBzLiBUaGUgb3B0aW9uYWwgc2Vjb25kIGl0ZW0gaXMgb25lIG9mIHByZS1kZWZpbmVkIHN0ZXAgcG9zdGlvbiBuYW1lcy5cclxuICogICAtIGZvdXItaXRlbSBhcnJheSB0aGF0IGRlZmluZXMgY3ViaWMtYmV6aWVyIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gZGVsYXkgRGVsYXkgYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzLiBJbnRlZ2VyIG51bWJlcnMgZm9yIG1pbGxpc2Vjb25kcywgZmxvYXRpbmdcclxuICogcG9pbnQgbnVtYmVycyBmb3Igc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cclxuICogQHBhcmFtIGNvdW50IE51bWJlciBvZiBpdGVyYXRpb25zIHRoZSBhbmltYXRpb24gc2hvbGQgcnVuLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLlxyXG4gKiBAcGFyYW0gZGlyZWN0aW9uIEFuaW1hdGlvbiBkaXJlY3Rpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwibm9ybWFsXCIuXHJcbiAqIEBwYXJhbSBtb2RlIEFuaW1hdGlvbiBmaWxsIG1vZGUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwibm9uZVwiLlxyXG4gKiBAcGFyYW0gc3RhdGUgQW5pbWF0aW9uIHN0YXRlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBcInJ1bm5pbmdcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRpb24oIG5hbWU6IEV4dGVuZGVkPEFuaW1hdGlvbk5hbWVfU2luZ2xlPixcclxuXHRcdGR1cmF0aW9uOiBFeHRlbmRlZDxDc3NUaW1lPiA9IDEwMDAsXHJcblx0XHRmdW5jOiBFeHRlbmRlZDxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+ID0gXCJlYXNlXCIsXHJcblx0XHRkZWxheTogRXh0ZW5kZWQ8Q3NzVGltZT4gPSAwLFxyXG5cdFx0Y291bnQ6IEV4dGVuZGVkPEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1NpbmdsZT4gPSAxLFxyXG5cdFx0ZGlyZWN0aW9uOiBFeHRlbmRlZDxBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlPiA9IFwibm9ybWFsXCIsXHJcblx0XHRtb2RlOiBFeHRlbmRlZDxBbmltYXRpb25GaWxsTW9kZV9TaW5nbGU+ID0gXCJub25lXCIsXHJcblx0XHRzdGF0ZTogRXh0ZW5kZWQ8QW5pbWF0aW9uUGxheVN0YXRlX1NpbmdsZT4gPSBcInJ1bm5pbmdcIlxyXG5cdCk6IEFuaW1hdGlvbl9TaW5nbGVcclxue1xyXG5cdHJldHVybiB7IG5hbWUsIGR1cmF0aW9uLCBmdW5jLCBkZWxheSxjb3VudCwgZGlyZWN0aW9uLCBzdGF0ZSwgbW9kZSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhY2tncm91bmRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgYW5pbWF0aW9uIHByb3BlcnR5LlxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3IgdmFsdWUuXHJcbiAqIEBwYXJhbSBwb3NpdGlvblxyXG4gKiBAcGFyYW0gc2l6ZVxyXG4gKiBAcGFyYW0gcmVwZWF0IEJhY2tncm91bmQgcmVwZWF0IHZhbHVlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBcInJlcGVhdFwiLlxyXG4gKiBAcGFyYW0gYXR0YWNobWVudCBCYWNrZ3JvdW5kIGF0dGFjaG1lbnQuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwic2Nyb2xsXCIuXHJcbiAqIEBwYXJhbSBvcmlnaW4gQmFja2dyb3VuZCBvcmlnaW4uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwicGFkZGluZy1ib3hcIi5cclxuICogQHBhcmFtIGNsaXAgQmFja2dyb3VuZCBjbGlwLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBcImJvcmRlci1ib3hcIi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiYWNrZ3JvdW5kKFxyXG5cdFx0Y29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcblx0XHRpbWFnZT86IEV4dGVuZGVkPENzc0ltYWdlPixcclxuXHRcdHBvc2l0aW9uPzogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+LFxyXG5cdFx0c2l6ZT86IEV4dGVuZGVkPEJhY2tncm91bmRTaXplX1NpbmdsZT4sXHJcblx0XHRyZXBlYXQ6IEV4dGVuZGVkPEJhY2tncm91bmRSZXBlYXRfU2luZ2xlPiA9IFwicmVwZWF0XCIsXHJcblx0XHRhdHRhY2htZW50OiBFeHRlbmRlZDxCYWNrZ3JvdW5kQXR0YWNobWVudF9TaW5nbGU+ID0gXCJzY3JvbGxcIixcclxuXHRcdG9yaWdpbjogRXh0ZW5kZWQ8QmFja2dyb3VuZE9yaWdpbl9TaW5nbGU+ID0gXCJwYWRkaW5nLWJveFwiLFxyXG5cdFx0Y2xpcDogRXh0ZW5kZWQ8QmFja2dyb3VuZENsaXBfU2luZ2xlPiA9IFwiYm9yZGVyLWJveFwiXHJcblx0KTogQmFja2dyb3VuZF9TaW5nbGVcclxue1xyXG5cdHJldHVybiB7IGNvbG9yLCBpbWFnZSwgcG9zaXRpb24sIHNpemUsIHJlcGVhdCwgYXR0YWNobWVudCwgb3JpZ2luLCBjbGlwIH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJhbnNpdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgdHJhbnNpdGlvbiBwcm9wZXJ0eS5cclxuICogQHBhcmFtIHByb3BlcnR5IE5hbWUgb2YgdGhlIHByb3BlcnR5IHRvIHRyYW5zaXRpb24uIFRoZSBkZWZhdWx0IHZhbHVlIGlzIFwiYWxsXCIuXHJcbiAqIEBwYXJhbSBkdXJhdGlvbiBUcmFuc2l0aW9uIGR1cmF0aW9uLiBJbnRlZ2VyIG51bWJlcnMgZm9yIG1pbGxpc2Vjb25kcywgZmxvYXRpbmcgcG9pbnRcclxuICogbnVtYmVycyBmb3Igc2Vjb25kcy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSBzZWNvbmQuXHJcbiAqIEBwYXJhbSBmdW5jIFRpbWluZyBmdW5jdGlvbi4gRGVmYXVsdCB2YWx1ZSBpcyBcImVhc2VcIi4gVGhpcyBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBvbmUgb2YgcHJlLWRlZmluZWQgdGltaW5nIGZ1bmN0aW9uIG5hbWVzLlxyXG4gKiAgIC0gYSBudW1iZXIgb2Ygc3RlcHMgaW4gdGhlIHN0ZXBzIGZ1bmN0aW9uLiBUaGUgc3RlcCBwb3NpdGlvbiB3aWxsIGJlIHNldCB0byBqdW1wLXN0YXJ0LlxyXG4gKiAgIC0gb25lLSBvciB0d28taXRlbSBhcnJheSB0aGF0IGRlZmluZXMgYSBzdGVwIGZ1bmN0aW9uLiBUaGUgZmlyc3QgaXRlbSBkZWZpbmVzIHRoZSBudW1iZXJcclxuICogICAgIG9mIHN0ZXBzLiBUaGUgb3B0aW9uYWwgc2Vjb25kIGl0ZW0gaXMgb25lIG9mIHByZS1kZWZpbmVkIHN0ZXAgcG9zdGlvbiBuYW1lcy5cclxuICogICAtIGZvdXItaXRlbSBhcnJheSB0aGF0IGRlZmluZXMgY3ViaWMtYmV6aWVyIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gZGVsYXkgRGVsYXkgYmVmb3JlIHRoZSB0cmFuc2l0aW9uIHN0YXJ0cy4gSW50ZWdlciBudW1iZXJzIGZvciBtaWxsaXNlY29uZHMsIGZsb2F0aW5nXHJcbiAqIHBvaW50IG51bWJlcnMgZm9yIHNlY29uZHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbiggcHJvcGVydHk6IEV4dGVuZGVkPFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGU+ID0gXCJhbGxcIixcclxuXHRkdXJhdGlvbjogRXh0ZW5kZWQ8Q3NzVGltZT4gPSAxMDAwLFxyXG5cdGZ1bmM6IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT4gPSBcImVhc2VcIixcclxuXHRkZWxheTogRXh0ZW5kZWQ8Q3NzVGltZT4gPSAwXHJcblx0KTogVHJhbnNpdGlvbl9TaW5nbGVcclxue1xyXG5yZXR1cm4geyBwcm9wZXJ0eSwgZHVyYXRpb24sIGZ1bmMsIGRlbGF5IH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU2hhZG93c1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBib3gtc2hhZG93IHByb3BlcnR5LlxyXG4gKiBAcGFyYW0geCBIb3Jpem9udGFsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0geSBWZXJ0aWNhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGNvbG9yIENvbG9yIG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBibHVyIFZhbHVlIG9mIHRoZSBzaGFkb3cncyBibHVycmluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSBwaXhlbC5cclxuICogQHBhcmFtIHNwcmVhZCBWYWx1ZSBvZiB0aGUgc2hhZG93J3Mgc3ByZWFkaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxyXG4gKiBAcGFyYW0gaW5zZXQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNoYWRvdyBnb2VzIGluc2lkZSB0aGUgc2hhcGUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJveFNoYWRvdyhcclxuXHRcdHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcblx0XHR5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdFx0Y29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcblx0XHRibHVyOiBFeHRlbmRlZDxDc3NMZW5ndGg+ID0gMSxcclxuXHRcdHNwcmVhZDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiA9IDAsXHJcblx0XHRpbnNldDogRXh0ZW5kZWQ8Ym9vbGVhbj4gPSBmYWxzZVxyXG5cdCk6IEJveFNoYWRvd19TaW5nbGVcclxue1xyXG5cdHJldHVybiB7IHgsIHksIGNvbG9yLCBibHVyLCBzcHJlYWQsIGluc2V0IH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgdGV4dC1zaGFkb3cgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSB4IEhvcml6b250YWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSB5IFZlcnRpY2FsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3Igb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGJsdXIgVmFsdWUgb2YgdGhlIHNoYWRvdydzIGJsdXJyaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxIHBpeGVsLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRleHRTaGFkb3coXHJcblx0XHR4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdFx0eTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuXHRcdGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG5cdFx0Ymx1cjogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiA9IDEsXHJcblx0KTogVGV4dFNoYWRvd19TaW5nbGVcclxue1xyXG5cdHJldHVybiB7IHgsIHksIGNvbG9yLCBibHVyIH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRm9udFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBgZm9udGAgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSBmYW1pbHkgRm9udCBmYW1pbHkuXHJcbiAqIEBwYXJhbSBzaXplIEZvbnQgc2l6ZS5cclxuICogQHBhcmFtIHN0eWxlIEZvbnQgc3R5bGUuXHJcbiAqIEBwYXJhbSB2YXJpYW50IEZvbnQgdmFyaWFudC5cclxuICogQHBhcmFtIHdlaWdodCBGb250IHdlaWdodC5cclxuICogQHBhcmFtIHN0cmV0Y2ggRm9udCBzdHJldGNoLlxyXG4gKiBAcGFyYW0gbGluZUhlaWdodCBMaW5lIGhlaWdodC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb250KFxyXG5cdFx0ZmFtaWx5OiBzdHJpbmcsXHJcblx0XHRzaXplOiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdFx0c3R5bGU/OiBFeHRlbmRlZDxGb250U3R5bGVfU3R5bGVUeXBlPixcclxuXHRcdHdlaWdodD86IEV4dGVuZGVkPEZvbnRXZWlnaHRfU3R5bGVUeXBlPixcclxuXHRcdGxpbmVIZWlnaHQ/OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0dmFyaWFudD86IEV4dGVuZGVkPFwibm9ybWFsXCIgfCBcInNtYWxsLWNhcHNcIj4sXHJcblx0XHRzdHJldGNoPzogRXh0ZW5kZWQ8RXhjbHVkZTxGb250U3RyZXRjaF9TaW5nbGUsbnVtYmVyPj5cclxuXHQpOiBGb250X1N0eWxlVHlwZVxyXG57XHJcblx0cmV0dXJuIHsgc2l6ZSwgZmFtaWx5LCBzdHlsZSwgdmFyaWFudCwgd2VpZ2h0LCBzdHJldGNoLCBsaW5lSGVpZ2h0IH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGV4dCBkZWNvcmF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIGB0ZXh0LWRlY29yYXRpb25gIHByb3BlcnR5LlxyXG4gKiBAcGFyYW0gbGluZSBUeXBlIG9mIGxpbmUuXHJcbiAqIEBwYXJhbSBjb2xvciBMaW5lIGNvbG9yLlxyXG4gKiBAcGFyYW0gc3R5bGUgTGluZSBzdHlsZS5cclxuICogQHBhcmFtIHRoaWNrbmVzcyBMaW5lIHNpemUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGV4dERlY29yYXRpb24oXHJcbiAgICAgICAgbGluZT86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgICAgIHN0eWxlPzogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHRoaWNrbmVzcz86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZT4sXHJcblx0KTogVGV4dERlY29yYXRpb25fU3R5bGVUeXBlXHJcbntcclxuXHRyZXR1cm4geyBsaW5lLCBzdHlsZSwgY29sb3IsIHRoaWNrbmVzcyB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZpbHRlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0aW5nIHBlcmNlbnQgdmFsdWUgdG8gaW52b2NhdGlvbiBvZiB0aGUgZ2l2ZW4gQ1NTIGZ1bmN0aW9uLlxyXG5mdW5jdGlvbiBwZXJjZW50RmlsdGVyKCBuYW1lOiBzdHJpbmcsIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJyaWdodG5lc3MoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJyaWdodG5lc3MoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJicmlnaHRuZXNzXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY29udHJhc3QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyYXN0KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiY29udHJhc3RcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBncmF5c2NhbGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdyYXlzY2FsZSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImdyYXlzY2FsZVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGludmVydCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiaW52ZXJ0XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgb3BhY2l0eSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3BhY2l0eSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcIm9wYWNpdHlcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzYXR1cmF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F0dXJhdGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzYXR1cmF0ZVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNlcGlhKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXBpYSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcInNlcGlhXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYmx1cigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmx1ciggcmFkaXVzOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBibHVyKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCByYWRpdXMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGRyb3BTaGFkb3coKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0geCBIb3Jpem9udGFsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0geSBWZXJ0aWNhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGNvbG9yIENvbG9yIG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBibHVyIFZhbHVlIG9mIHRoZSBzaGFkb3cncyBibHVycmluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSBwaXhlbC5cclxuICogQHBhcmFtIHNwcmVhZCBWYWx1ZSBvZiB0aGUgc2hhZG93J3Mgc3ByZWFkaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxyXG4gKiBAcGFyYW0gaW5zZXQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNoYWRvdyBnb2VzIGluc2lkZSB0aGUgc2hhcGUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRyb3BTaGFkb3coXHJcbiAgICB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgYmx1cjogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiA9IDEsXHJcbiAgICBzcHJlYWQ6IEV4dGVuZGVkPENzc0xlbmd0aD4gPSAwKTogRmlsdGVyUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggeyB4LCB5LCBjb2xvciwgYmx1ciwgc3ByZWFkfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaHVlLXJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHVlUm90YXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc0FuZ2xlPik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgaHVlLXJvdGF0ZSgke0Nzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGFtb3VudCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWMgc2hhcGVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaW5zZXQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2V0KCBvZmZzZXQ6IEV4dGVuZGVkPE9uZU9yQm94PENzc0xlbmd0aD4+LCByYWRpdXM/OiBFeHRlbmRlZDxCb3JkZXJSYWRpdXNfU3R5bGVUeXBlPik6IEJhc2ljU2hhcGVQcm94eVxyXG57XHJcblx0bGV0IHIgPSByYWRpdXMgIT0gbnVsbCA/IFwicm91bmQgXCIgKyBib3JkZXJSYWRpdXNUb1N0cmluZyggcmFkaXVzKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGluc2V0KCR7Q3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2Uob2Zmc2V0KX0ke3J9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBpcyB1c2VkIHRvIHNwZWNpZnkgYSByYWRpdXMgaW4gW1tjaXJjbGVdXSBhbmQgW1tlbGxpcHNlXV0gZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVSYWRpdXMgPSBFeHRlbmRlZDxDc3NMZW5ndGggfCBcImNsb3Nlc3Qtc2lkZVwiIHwgXCJmYXJ0aGVzdC1zaWRlXCI+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY2lyY2xlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGUoIGNlbnRlcj86IFNoYXBlUmFkaXVzLCBwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IEJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgYyA9ICBjZW50ZXIgIT0gbnVsbCA/IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhjZW50ZXIpIDogXCJcIjtcclxuXHRsZXQgcG9zID0gcG9zaXRpb24gIT0gbnVsbCA/IFwiIGF0IFwiICsgcG9zaXRpb25Ub1N0cmluZyggcG9zaXRpb24pIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgY2lyY2xlKCR7Y30ke3Bvc30pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZWxsaXBzZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzZSggcng/OiBTaGFwZVJhZGl1cywgcnk/OiBTaGFwZVJhZGl1cyxcclxuXHRwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IEJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgcnhzID0gIHJ4ICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocngpIDogXCJcIjtcclxuICAgIGxldCByeXMgPSAgcnkgIT0gbnVsbCA/IFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ5KSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvc2l0aW9uVG9TdHJpbmcoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGVsbGlwc2UoJHtyeHN9JHtyeXN9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHBvbHlnb24oKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbHlnb24oIHBvaW50T3JSdWxlOiBDc3NQb2ludCB8IEZpbGxSdWxlX1N0eWxlVHlwZSxcclxuXHQuLi5wb2ludHM6IENzc1BvaW50W10pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzID0gXCJwb2x5Z29uKFwiO1xyXG5cdFx0aWYgKHR5cGVvZiBwb2ludE9yUnVsZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cyArPSBwb2ludE9yUnVsZSArIFwiLFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzICs9IGAke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCBwb2ludE9yUnVsZSl9LGA7XHJcblxyXG5cdFx0cyArPSBwb2ludHMubWFwKCBwdCA9PiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggcHQpKS5qb2luKFwiLFwiKTtcclxuXHJcblx0XHRyZXR1cm4gcyArIFwiKVwiO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJhbnNmb3Jtc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWF0cml4KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgoIGE6IEV4dGVuZGVkPENzc051bWJlcj4sIGI6IEV4dGVuZGVkPENzc051bWJlcj4sIGM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0ZDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHg6IEV4dGVuZGVkPENzc051bWJlcj4sIHR5OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBtYXRyaXgoJHthcnJheVRvU3RyaW5nKCBbYSwgYiwgYywgZCwgdHgsIHR5XSwgdW5kZWZpbmVkLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWF0cml4M2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdHJpeDNkKFxyXG5cdFx0YTE6IEV4dGVuZGVkPENzc051bWJlcj4sIGIxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDE6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjI6IEV4dGVuZGVkPENzc051bWJlcj4sIGMyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGEzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzM6IEV4dGVuZGVkPENzc051bWJlcj4sIGQzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGI0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDQ6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBtYXRyaXgoJHthcnJheVRvU3RyaW5nKCBbYTEsIGIxLCBjMSwgZDEsIGEyLCBiMiwgYzIsIGQyLCBhMywgYjMsIGMzLCBkMywgYTQsIGI0LCBjNCwgZDRdLCB1bmRlZmluZWQsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBwZXJzcGVjdGl2ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmUoIGQ6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHBlcnNwZWN0aXZlKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKGQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gQ1NTIHJvdGF0aW9uIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gcm90YXRlSW1wbCggbmFtZTogc3RyaW5nLCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZSggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVgoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVhcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWSggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWVwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVaXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUzZChcclxuXHR4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB5OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB6OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeCksIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh5KSxcclxuXHRcdENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh6KSwgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYSldLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGByb3RhdGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKCBjeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k/OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBzY2FsZSgke0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhjeCl9JHtzeSAhPSBudWxsID8gXCIsXCIgKyBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3kpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIHNjYWxlIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHNjYWxlSW1wbCggbmFtZTogc3RyaW5nLCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVYKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVhcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVkoIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWVwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWiggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVaXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlM2QoIHN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRzejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3gpLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3kpLFxyXG5cdFx0Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN6KV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHNjYWxlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXcoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXcoIGF4OiBFeHRlbmRlZDxDc3NBbmdsZT4sIGF5PzogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXgpfSR7YXkgIT0gbnVsbCA/IFwiLFwiICsgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXkpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3WCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tld1goIGF4OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WSggYXk6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tld1goJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk/OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeCl9JHt5ICE9IG51bGwgPyBcIixcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiB0cmFuc2xhdGUgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlSW1wbCggbmFtZTogc3RyaW5nLCBzOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVgoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVYXCIsIHgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVkoIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVZXCIsIHkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVooIHo6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVaXCIsIHopO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUzZCggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuXHR6OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh4KSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHkpLFxyXG5cdFx0Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHopXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgdHJhbnNsYXRlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcblx0SUNzc051bWJlck1hdGgsIElDc3NMZW5ndGhNYXRoLCBJQ3NzQW5nbGVNYXRoLCBJQ3NzVGltZU1hdGgsIElDc3NSZXNvbHV0aW9uTWF0aCxcclxuXHRJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc0ZyYWN0aW9uTWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBFeHRlbmRlZCwgU3RyaW5nUHJveHksXHJcblx0VXJsUHJveHksIEF0dHJUeXBlS2V5d29yZCwgQXR0clVuaXRLZXl3b3JkLCBBdHRyUHJveHlcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7XHJcblx0Q3NzTnVtYmVyTWF0aCwgQ3NzTGVuZ3RoTWF0aCwgQ3NzQW5nbGVNYXRoLCBDc3NUaW1lTWF0aCwgQ3NzUmVzb2x1dGlvbk1hdGgsXHJcblx0Q3NzRnJlcXVlbmN5TWF0aCwgQ3NzRnJhY3Rpb25NYXRoLCBDc3NQZXJjZW50TWF0aCwgdmFsdWVUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOdW0gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxudW1iZXI+YFxyXG4gKiBDU1MgdHlwZS4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleSBhcmVcclxuICogY29udmVydGVkIHRvIHN0cmluZ3Mgd2l0aG91dCBhcHBlbmRpbmcgYW55IHVuaXRzIHRvIHRoZW0uXHJcbiAqL1xyXG5leHBvcnQgbGV0IE51bTogSUNzc051bWJlck1hdGggPSBuZXcgQ3NzTnVtYmVyTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIExlbiBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPGxlbmd0aD5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGxlbmd0aCB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcInB4XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiZW1cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgTGVuOiBJQ3NzTGVuZ3RoTWF0aCA9IG5ldyBDc3NMZW5ndGhNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5nbGUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxhbmdsZT5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhbiBhbmdsZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImRlZ1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInR1cm5cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgQW5nbGU6IElDc3NBbmdsZU1hdGggPSBuZXcgQ3NzQW5nbGVNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVGltZSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPHRpbWU+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSB0aW1lIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwibXNcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJzXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFRpbWU6IElDc3NUaW1lTWF0aCA9IG5ldyBDc3NUaW1lTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJlc29sdXRpb24gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgcmVzb2x1dGlvbiB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImRwaVwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImRwY21cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgUmVzb2x1dGlvbjogSUNzc1Jlc29sdXRpb25NYXRoID0gbmV3IENzc1Jlc29sdXRpb25NYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnJlcXVlbmN5IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgZnJlcXVlbmN5IHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiSHpcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJrSHpcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgRnJlcXVlbmN5OiBJQ3NzRnJlcXVlbmN5TWF0aCA9IG5ldyBDc3NGcmVxdWVuY3lNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnJhY3Rpb24gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmFjdGlvbj5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGZyYWN0aW9uIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiZnJcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCIlXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEZyYWN0aW9uOiBJQ3NzRnJhY3Rpb25NYXRoID0gbmV3IENzc0ZyYWN0aW9uTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBlcmNlbnQgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxwZXJjZW50YWdlPmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgXCIlXCIgdW5pdCBzdWZmaXguXHJcbiAqL1xyXG5leHBvcnQgbGV0IFBlcmNlbnQ6IElDc3NQZXJjZW50TWF0aCA9IG5ldyBDc3NQZXJjZW50TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyByYXcoKVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBTdHJpbmdQcm94eSBmdW5jdGlvbiBlbmNhcHN1bGF0aW5nIHRoZSBnaXZlbiBzdHJpbmctbGlrZSBwYXJhbWV0ZXIuIFRoaXMgZnVuY3Rpb25cclxuICogYWxsb3dzIHNwZWNpZnlpbmcgYXJiaXRyYXJ5IHRleHQgZm9yIHByb3BlcnRpZXMgd2hvc2UgdHlwZSBub3JtYWxseSBkb2Vzbid0IGFsbG93IHN0cmluZ3MuXHJcbiAqIFRoaXMgaXMgdXNlZCBhcyBhbiBcImVzY2FwZSBoYXRjaFwiIHdoZW4gYSBzdHJpbmcgdmFsdWUgYWxyZWFkeSBleGlzdHMgYW5kIHRoZXJlIGlzIG5vIHNlbnNlXHJcbiAqIHRvIGNvbnZlcnQgaXQgdG8gYSBwcm9wZXIgdHlwZS4gVGhpcyBmdW5jdGlvbiBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdCBiZSBpbnZva2VkIHdpdGhcclxuICogdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhdyggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IGFueVtdKTogU3RyaW5nUHJveHlcclxue1xyXG4gICAgLy8gbnVtYmVyIG9mIHBhcmFtZXRlcnMgaXMgYWx3YXlzIDEgbGVzcyB0aGFuIHRoZSBudW1iZXIgb2Ygc3RyaW5nIHBhcnRzXHJcbiAgICBsZXQgcGFyYW1zTGVuID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGlmIChwYXJhbXNMZW4gPT09IDApXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHBhcnRzWzBdO1xyXG5cclxuICAgIGxldCBidWY6IHN0cmluZ1tdID0gW107XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHBhcmFtc0xlbjsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGJ1Zi5wdXNoKCBwYXJ0c1tpXSk7XHJcbiAgICAgICAgYnVmLnB1c2goIHZhbHVlVG9TdHJpbmcoIHBhcmFtc1tpXSkpO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gKCkgPT4gYCR7YnVmLmpvaW4oXCJcIil9JHtwYXJ0c1twYXJhbXNMZW5dfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gdXJsKClcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgVXJsUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYHVybCgpYCBmdW5jdGlvbi4gVGhlIHN0cmluZyBwYXJhbWV0ZXJcclxuICogd2lsbCBiZSB3cmFwcGVkIGluIGEgXCJ1cmwoKVwiIGludm9jYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXJsKCB2YWw6IEV4dGVuZGVkPHN0cmluZz4pOiBVcmxQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IGB1cmwoJHt2YWx1ZVRvU3RyaW5nKHZhbCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gYXR0cigpXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBBdHRyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYXR0cigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXR0ciggYXR0ck5hbWU6IEV4dGVuZGVkPHN0cmluZz4sIHR5cGVPclVuaXQ/OiBFeHRlbmRlZDxBdHRyVHlwZUtleXdvcmQgfCBBdHRyVW5pdEtleXdvcmQ+LFxyXG5cdGZhbGxiYWNrPzogRXh0ZW5kZWQ8c3RyaW5nPik6IEF0dHJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGF0dHIoJHthdHRyTmFtZX0ke3R5cGVPclVuaXQgPyBcIiBcIiArIHR5cGVPclVuaXQgOiBcIlwifSR7ZmFsbGJhY2sgPyBcIixcIiArIGZhbGxiYWNrIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jc3NcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0NvbG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ltYWdlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9VdGlsQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9Db2xvckFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSW1hZ2VBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N0eWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9SdWxlQVBJXCI7XHJcbiIsImltcG9ydCB7SUFuaW1hdGlvblJ1bGUsIEFuaW1hdGlvbkZyYW1lLCBJTmFtZWRFbnRpdHl9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXN9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQGtleWZyYW1lcyBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25SdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25SdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZyYW1lcz86IEFuaW1hdGlvbkZyYW1lW10sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0aWYgKGZyYW1lcylcclxuXHRcdFx0dGhpcy5mcmFtZVJ1bGVzID0gZnJhbWVzLm1hcCggKGtleWZyYW1lKSA9PiBuZXcgQW5pbWF0aW9uRnJhbWVSdWxlKCBrZXlmcmFtZSkpO1xyXG5cclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoICBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG5cdFx0Zm9yKCBsZXQga2V5ZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0a2V5ZnJhbWVSdWxlLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBbmltYXRpb25SdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQW5pbWF0aW9uUnVsZSgpO1xyXG5cdFx0aWYgKHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0bmV3UnVsZS5mcmFtZVJ1bGVzID0gdGhpcy5mcmFtZVJ1bGVzLm1hcCggKGtleWZyYW1lUnVsZSkgPT4ga2V5ZnJhbWVSdWxlLmNsb25lKCkpO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGtleWZyYW1lcyAke3RoaXMubmFtZX0ge31gLCBwYXJlbnQpIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdFx0bGV0IGNzc0tleWZyYW1lc1J1bGUgPSB0aGlzLmNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHRcdGZvciggbGV0IGtleWZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3NzS2V5ZnJhbWVzUnVsZS5hcHBlbmRSdWxlKCBrZXlmcmFtZVJ1bGUudG9Dc3NTdHJpbmcoKSlcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCh4KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJDYW5ub3QgYWRkIENTUyBrZXlmcmFtZSBydWxlXCIsIHgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZXMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIGNsYXNzIGFuZCBJRCBydWxlcyAqL1xyXG5cdHByaXZhdGUgZnJhbWVSdWxlczogQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWVSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUga2V5ZnJhbWUgY2xhdXNlIGluIHRoZSBhbmltYXRpb24gcnVsZS5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmcmFtZT86IEFuaW1hdGlvbkZyYW1lKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBmcmFtZSA/IGZyYW1lWzFdIDogdW5kZWZpbmVkKTtcclxuXHJcblx0XHRpZiAoZnJhbWUpXHJcblx0XHRcdHRoaXMud2F5cG9pbnQgPSB0eXBlb2YgZnJhbWVbMF0gPT09IFwic3RyaW5nXCIgPyBmcmFtZVswXSA6IGZyYW1lWzBdICsgXCIlXCI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBbmltYXRpb25GcmFtZVJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0bmV3UnVsZS53YXlwb2ludCA9IHRoaXMud2F5cG9pbnQ7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMud2F5cG9pbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCBhcyBhIHN0cmluZyAqL1xyXG5cdHB1YmxpYyB3YXlwb2ludDogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBTdHlsZURlZmluaXRpb24sIElHcm91cFJ1bGUsIElNZWRpYVJ1bGUsIElTdXBwb3J0c1J1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Z2V0Q29udGFpbmVyRnJvbURlZmluaXRpb24sIHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3N9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5pbXBvcnQge0lSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtzdXBwb3J0c1F1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5pbXBvcnQge21lZGlhUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JvdXBSdWxlIGNsYXNzIHNlcnZlcyBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBncm91cGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JvdXBSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmluc3RhbmNlT3JDbGFzcyA9IGluc3RhbmNlT3JDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIHRoaXMuaW5zdGFuY2VPckNsYXNzLCBvd25lci5nZXREZWZpbml0aW9uSW5zdGFuY2UoKSk7XHJcblx0XHRpZiAoIWluc3RhbmNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5ydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbURlZmluaXRpb24oIGluc3RhbmNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmdldEdyb3VwU2VsZWN0b3JUZXh0KCk7XHJcblx0XHRpZiAoIXNlbGVjdG9yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGAke3NlbGVjdG9yfSB7fWAsIHBhcmVudCkgYXMgQ1NTU3VwcG9ydHNSdWxlO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcblx0XHRcdHRoaXMucnVsZUNvbnRhaW5lci5pbnNlcnRSdWxlcyggdGhpcy5jc3NSdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBjbGVhciBzdWItcnVsZXNcclxuXHRcdGlmICh0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHRoaXMucnVsZUNvbnRhaW5lci5jbGVhclJ1bGVzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCBkZWZpbmVzIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciBmb3IgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIHJ1bGVDb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBkZWZpbmluZyB0aGUgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlXHJcblx0cHVibGljIGdldCBydWxlcygpOiBUIHsgcmV0dXJuIHRoaXMuaW5zdGFuY2UgYXMgVDsgfVxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTR3JvdXBpbmdSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN1cHBvcnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxPPiwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJU3VwcG9ydHNSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCxPPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdXBwb3J0c1J1bGU8VCxPPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlPFQsTz4oIHRoaXMucXVlcnksIHRoaXMuaW5zdGFuY2VPckNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdC8vIGNvbnZlcnQgdGhlIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgZm9ybVxyXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KTtcclxuXHJcblx0XHQvLyBkZXRlcm1pbmUgd2hldGhlciB0aGUgcXVlcnkgaXMgc3VwcG9ydGVkIGFuZCBpZiBpdCBpcyBub3QsIGRvbid0IGluc2VydCB0aGUgcnVsZVxyXG5cdFx0cmV0dXJuIENTUy5zdXBwb3J0cyggcXVlcnlTdHJpbmcpID8gYEBzdXBwb3J0cyAke3F1ZXJ5U3RyaW5nfWAgOiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gc3VwcG9ydCBxdWVyeSBmb3IgdGhpcyBydWxlIGluIGEgc3RyaW5nIGZvcm0uXHJcblx0cHVibGljIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxPPiwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCxPPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBNZWRpYVJ1bGU8VCxPPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTWVkaWFSdWxlPFQsTz4oIHRoaXMucXVlcnksIHRoaXMuaW5zdGFuY2VPckNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdGxldCBxdWVyeVN0cmluZyA9IHR5cGVvZiB0aGlzLnF1ZXJ5ID09PSBcInN0cmluZ1wiID8gdGhpcy5xdWVyeSA6IG1lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSk7XHJcblx0XHRyZXR1cm4gYEBtZWRpYSAke3F1ZXJ5U3RyaW5nfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lGb250RmFjZVJ1bGUsIElJbXBvcnRSdWxlLCBJUGFnZVJ1bGUsIElOYW1lc3BhY2VSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtJRm9udEZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCB7Zm9udEZhY2VUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZUZ1bmNzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeSwgU3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge3N1cHBvcnRzUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZXNcIjtcclxuaW1wb3J0IHtQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZvbnRGYWNlUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBAZm9udC1mYWNlIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvbnRGYWNlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZvbnRmYWNlOiBJRm9udEZhY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmZvbnRmYWNlID0gZm9udGZhY2U7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogRm9udEZhY2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIHRoaXMuZm9udGZhY2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBmb250LWZhY2UgJHtmb250RmFjZVRvU3RyaW5nKCB0aGlzLmZvbnRmYWNlKX1gLFxyXG5cdFx0XHRwYXJlbnQpIGFzIENTU0ZvbnRGYWNlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NGb250RmFjZVJ1bGU7XHJcblxyXG5cdC8vIE9iamVjdCBkZWZpbmluZyBmb250LWZhY2UgcHJvcGVydGllcy5cclxuXHRwdWJsaWMgZm9udGZhY2U6IElGb250RmFjZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEltcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbXBvcnRSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElJbXBvcnRSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnVybCA9IHVybDtcclxuXHRcdHRoaXMubWVkaWFRdWVyeSA9IG1lZGlhUXVlcnk7XHJcblx0XHR0aGlzLnN1cHBvcnRzUXVlcnkgPSBzdXBwb3J0c1F1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogSW1wb3J0UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgSW1wb3J0UnVsZSggdGhpcy51cmwsIHRoaXMubWVkaWFRdWVyeSwgdGhpcy5zdXBwb3J0c1F1ZXJ5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHVybDtcclxuXHRcdGlmICghdGhpcy51cmwpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJ1cmxcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIlxcXCJcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIidcIikpXHJcblx0XHRcdHVybCA9IHRoaXMudXJsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR1cmwgPSBgdXJsKCR7dGhpcy51cmx9KWA7XHJcblxyXG5cdFx0bGV0IHN1cHBvcnRzUXVlcnlTdHJpbmcgPSAhdGhpcy5zdXBwb3J0c1F1ZXJ5XHJcblx0XHRcdD8gXCJcIlxyXG5cdFx0XHQ6IHR5cGVvZiB0aGlzLnN1cHBvcnRzUXVlcnkgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0XHQ/IHRoaXMuc3VwcG9ydHNRdWVyeVxyXG5cdFx0XHRcdDogc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cclxuXHRcdGlmIChzdXBwb3J0c1F1ZXJ5U3RyaW5nICYmICFzdXBwb3J0c1F1ZXJ5U3RyaW5nLnN0YXJ0c1dpdGgoIFwic3VwcG9ydHNcIikpXHJcblx0XHRzdXBwb3J0c1F1ZXJ5U3RyaW5nID0gYHN1cHBvcnRzKCAke3N1cHBvcnRzUXVlcnlTdHJpbmd9IClgO1xyXG5cclxuXHRcdGxldCBtZWRpYVF1ZXJ5U3RyaW5nID0gIXRoaXMubWVkaWFRdWVyeVxyXG5cdFx0XHQ/IFwiXCJcclxuXHRcdFx0OiB0eXBlb2YgdGhpcy5tZWRpYVF1ZXJ5ID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0PyB0aGlzLm1lZGlhUXVlcnlcclxuXHRcdFx0XHQ6IG1lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5tZWRpYVF1ZXJ5KTtcclxuXHRcdFx0XHRcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGltcG9ydCAke3VybH0gJHtzdXBwb3J0c1F1ZXJ5U3RyaW5nfSAke21lZGlhUXVlcnlTdHJpbmd9YCxcclxuXHRcdFx0cGFyZW50KSBhcyBDU1NJbXBvcnRSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NJbXBvcnRSdWxlO1xyXG5cclxuXHQvLyBVUkwgdG8gaW1wb3J0IGZyb20uXHJcblx0cHVibGljIHVybDogc3RyaW5nO1xyXG5cclxuXHQvLyBPcHRpb25hbCBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgc3VwcG9ydHMgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYWdlUnVsZSBjbGFzcyByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBQYWdlUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElQYWdlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBwc2V1ZG9DbGFzcz86IFBhZ2VQc2V1ZG9DbGFzcywgc3R5bGU/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5wc2V1ZG9DbGFzcyA9IHBzZXVkb0NsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogUGFnZVJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBQYWdlUnVsZSggdGhpcy5wc2V1ZG9DbGFzcyk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYEBwYWdlICR7dGhpcy5wc2V1ZG9DbGFzcyA/IHRoaXMucHNldWRvQ2xhc3MgOiBcIlwifWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gcGFnZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1BhZ2VSdWxlO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgbmFtZSBvZiB0aGUgcGFnZSBwc2V1ZG8gc3R5bGUgKGUuZy4gXCJcIjpmaXJzdFwiKSAqL1xyXG5cdHB1YmxpYyBwc2V1ZG9DbGFzczogUGFnZVBzZXVkb0NsYXNzIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmFtZXNwYWNlUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5hbWVzcGFjZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSU5hbWVzcGFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xyXG5cdFx0dGhpcy5wcmVmaXggPSBwcmVmaXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBOYW1lc3BhY2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBOYW1lc3BhY2VSdWxlKCB0aGlzLm5hbWVzcGFjZSwgdGhpcy5wcmVmaXgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMubmFtZXNwYWNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHVybCA9IHRoaXMubmFtZXNwYWNlLnN0YXJ0c1dpdGgoIFwidXJsKFwiKSA/IHRoaXMubmFtZXNwYWNlIDogYHVybCgke3RoaXMubmFtZXNwYWNlfSlgO1xyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAbmFtZXNwYWNlICR7dGhpcy5wcmVmaXggPyB0aGlzLnByZWZpeCA6IFwiXCJ9ICR7dXJsfWAsXHJcblx0XHRcdHBhcmVudCkgYXMgQ1NTTmFtZXNwYWNlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBuYW1lc3BhY2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NOYW1lc3BhY2VSdWxlO1xyXG5cclxuXHQvKiogTmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgbmFtZXNwYWNlOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBwcmVmaXggZm9yIHRoZSBydWxlICovXHJcblx0cHVibGljIHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lSdWxlLCBJTmFtZWRFbnRpdHksIFN0eWxlRGVmaW5pdGlvbn0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBhY2NvbXBhbmllcyBhbmQgaXMgYXNzb2NpYXRlZCB3aXRoXHJcbiAqIGEgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlQ29udGFpbmVyXHJcbntcclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZDtcclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdGNsZWFyUnVsZXMoKTogdm9pZDtcclxuXHJcblx0LyoqIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuICovXHJcblx0c2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRvcExldmVsUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCB0aGF0IFwib3duc1wiXHJcbiAqIHRoZSBydWxlcyB1bmRlciB0aGlzIGNvbnRhaW5lci4gSW4gcGFydGljdWxhciwgdGhlIG93bmVyJ3Mgam9iIGlzIHRvIGdlbmVyYXRlIFwic2NvcGVkXCIgdW5pcXVlXHJcbiAqIG5hbWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGV4dGVuZHMgSVJ1bGVDb250YWluZXJcclxue1xyXG5cdC8qKiBHZW5lcmF0ZXMgYSBuYW1lLCB3aGljaCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGlzIHN0eWxlc2hlZXQgKi9cclxuXHRnZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBydWxlcy4gQXMgYSBwYXJlbnQgb2YgUnVsZUNvbnRhaW5lciwgdGhlIFJ1bGVcclxuICogY2xhc3MgaXMgYWxzbyBhbiBhbmNlc3RvciBmb3IgU3R5bGVzaGVldDsgaG93ZXZlciwgbW9zdCBvZiBpdHMgdGhlIGZpZWxkcyBhcmUgdW5kZWZpbmVkIGluXHJcbiAqIHRlIFN0eWxlc2hlZXQgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGUgaW1wbGVtZW50cyBJUnVsZVxyXG57XHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xyXG5cdFx0dGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGU7XHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdC8vIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBhY3RpdmF0ZWQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZCB7fVxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2hcclxuXHQvLyB0aGlzIHJ1bGUgYmVsb25ncywgaXMgZGVhY3RpdmF0ZWQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWQgeyB0aGlzLmNzc1J1bGUgPSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgZ2l2ZW4gcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkUnVsZVRvRE9NKCBydWxlVGV4dDogc3RyaW5nLCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlIHwgbnVsbFxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0XHRyZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCB4KVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgQ2Fubm90IGFkZCBDU1MgcnVsZSAnJHtydWxlVGV4dH0nYCwgeClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0eWxlc2hlZXQgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuIFRoaXMgaXMgXCJ0aGlzXCIgZm9yIFN0eWxlc2hlZXQuXHJcblx0cHVibGljIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBydWxlTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblx0Ly8gQ1NTUnVsZS1kZXJpdmVkIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBhY3R1YWxsIENTUyBydWxlIGluc2VydGVkIGludG9cclxuXHQvLyB0aGUgc3R5bGVzIHNoZWV0IG9yIHRoZSBwYXJlbnQgcnVsZS4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIFN0eWxlc2hlZXQgb2JqZWN0cy5cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgc2NvcGVkIG5hbWVzIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lcyggb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHksXHJcblx0Y3NzUHJlZml4Pzogc3RyaW5nKTogW3N0cmluZyxzdHJpbmddXHJcbntcclxuXHRpZiAoIXJ1bGVOYW1lICYmICFuYW1lT3ZlcnJpZGUpXHJcblx0XHRyZXR1cm4gW1wiXCIsIFwiXCJdO1xyXG5cclxuXHRsZXQgbmFtZSA9ICFuYW1lT3ZlcnJpZGVcclxuXHRcdD8gb3duZXIuZ2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lISlcclxuXHRcdDogdHlwZW9mIG5hbWVPdmVycmlkZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHQ/IG5hbWVPdmVycmlkZVxyXG5cdFx0XHQ6IG5hbWVPdmVycmlkZS5uYW1lO1xyXG5cclxuXHRyZXR1cm4gW25hbWUsIGNzc1ByZWZpeCA/IG5hbWUuc3RhcnRzV2l0aCggY3NzUHJlZml4KSA/IG5hbWUgOiBjc3NQcmVmaXggKyBuYW1lIDogbmFtZV07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzc30gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCJcclxuaW1wb3J0IHtJbXBvcnRSdWxlLCBOYW1lc3BhY2VSdWxlfSBmcm9tIFwiLi9NaXNjUnVsZXNcIlxyXG5cclxuXHJcblxyXG4vLyBEZWZpbmUgc3ltYm9scyB0aGF0IGFyZSB1c2VkIGZvciBrZWVwaW5nIGltcG9ydGFudCBpbmZvcm1hdGlvbiBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZSBkb24ndCB3YW50IHRvIGJlIHZpc2libGUgdG8gZGV2ZWxvcGVycy5cclxuXHJcbi8qKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBwb2ludGluZyB0byB0aGUgc2luZ2x0b24gaW5zdGFuY2UuICovXHJcbmNvbnN0IHN5bUluc3RhbmNlID0gU3ltYm9sKFwiZGVmaW5pdGlvblwiKTtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBwb2ludGluZyB0byB0aGUgUnVsZUNvbnRhaW5lciBvYmplY3QgdGhhdCBpc1xyXG4gKiByZXNwb25zaWJsZSBmb3IgcHJvY2Vzc2luZyBydWxlcy5cclxuICovXHJcbmNvbnN0IHN5bVJ1bGVDb250YWluZXIgPSBTeW1ib2woXCJydWxlQ29udGFpbmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVDb250YWluZXIgY2xhc3MgaXMgYSBzaGFkb3cgc3RydWN0dXJlIHRoYXQgYWNjb21wYW5pZXMgZXZlcnkgcHJvY2Vzc2VkIHN0eWxlIGRlZmluaXRpb25cclxuICogb2JqZWN0LiBTaW5jZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYW4gZXhwb3J0ZWQgY2xhc3MgdmlzaWJsZSB0byBkZXZlbG9wZXJzLCB3ZSBkb24ndCB3YW50XHJcbiAqIHRvIGhhdmUgYSBsb3Qgb2YgZnVuY3Rpb25hbGl0eSBpbiBpdC4gVGhlIFJ1bGVDb250YWluZXIgb2JqZWN0IGlzIGxpbmtlZCB0byB0aGUgU3R5bGVEZWZpbml0aW9uXHJcbiAqIG9iamVjdCB2aWEgdGhlIFtzeW1SdWxlQ29udGFpbmVyXSBzeW1ib2wuIEl0IGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgcGFyc2luZyBydWxlXHJcbiAqIGRlZmluaXRpb25zLCBuYW1lIGFzc2lnbm1lbnQgYW5kIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG4gKi9cclxuY2xhc3MgUnVsZUNvbnRhaW5lciBpbXBsZW1lbnRzIElUb3BMZXZlbFJ1bGVDb250YWluZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuZGVmaW5pdGlvbkNsYXNzID0gaW5zdGFuY2UuY29uc3RydWN0b3IgYXMgSVN0eWxlRGVmaW5pdGlvbkNsYXNzO1xyXG5cdFx0dGhpcy5vd25lciA9IGluc3RhbmNlLm93bmVyO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID0gMDtcclxuXHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMucHJvY2VzcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgY3JlYXRlcyBuYW1lcyBmb3IgY2xhc3NlcyxcclxuXHQvLyBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSB2YXJpYWJsZXMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwdXQgcmVmZXJlbmNlIHRvIHRoaXMgY29udGFpbmVyIGluIHRoZSBzeW1ib2wgcHJvcGVydHkgb2YgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0XHR0aGlzLmluc3RhbmNlW3N5bVJ1bGVDb250YWluZXJdID0gdGhpcztcclxuXHJcblx0XHQvLyBpZiB0aGUgb3duZXIgdGFrZW4gZnJvbSB0aGUgaW5zdGFuY2UgaXMgbnVsbCAodGhhdCBpcyB0aGlzIGlzIGEgdG9wLWxldmVsIGRlZmluaXRpb24pLFxyXG5cdFx0Ly8gY2hhbmdlIG91ciBvd25lciBwcm9wZXJ0eSB0byBwb2ludCB0byB0aGUgaW5zdGFuY2UgaXRzZWxmXHJcblx0XHRpZiAoIXRoaXMub3duZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMub3duZXIgPSB0aGlzLmluc3RhbmNlO1xyXG5cdFx0XHR0aGlzLnRvcExldmVsQ29udGFpbmVyID0gdGhpcztcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy50b3BMZXZlbENvbnRhaW5lciA9IHRoaXMub3duZXJbc3ltUnVsZUNvbnRhaW5lcl07XHJcblxyXG5cdFx0Ly8gaWYgb3VyIGNvbnRhaW5lciBpcyBub3QgdGhlIHRvcC1sZXZlbCBjb250YWluZXIsIHByZWZpeCBvdXIgbmFtZSB3aXRoIHRoZSB1cHBlciBvbmVcclxuXHRcdGlmICghdGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHR0aGlzLm5hbWUgPSBgJHt0aGlzLnRvcExldmVsQ29udGFpbmVyLm5hbWV9XyR7dGhpcy5uYW1lfWA7XHJcblxyXG5cdFx0dGhpcy5pbXBvcnRzID0gW107XHJcblx0XHR0aGlzLm5hbWVzcGFjZXMgPSBbXTtcclxuXHRcdHRoaXMudmFycyA9IFtdO1xyXG5cdFx0dGhpcy5yZWZzID0gW107XHJcblx0XHR0aGlzLm90aGVyUnVsZXMgPSBbXTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRoZW0uXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggcHJvcE5hbWUsIHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSZWZlcmVuY2UoIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgVmFyUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzVmFyUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzQXJyYXkoIHByb3BWYWwpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyByZWZlcmVuY2UgdG8gYW5vdGhlciBzdHlsZSBkZWZpbml0aW9uIGNyZWF0ZWQgYnkgdGhlICR1c2UgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSBwcm9jZXNzUmVmZXJlbmNlKCByZWY6IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnJlZnMucHVzaCggcmVmKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzVmFyUnVsZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHZhck9iajogVmFyUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZXNoZWV0LCB3ZSBjcmVhdGUgYSBjbG9uZSBvZiB0aGVcclxuXHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc3R5bGVzaGVldC5cclxuXHRcdGlmICh2YXJPYmouY29udGFpbmVyKVxyXG5cdFx0XHR2YXJPYmogPSB2YXJPYmouY2xvbmUoKTtcclxuXHJcblx0XHR2YXJPYmoucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cdFx0dGhpcy52YXJzLnB1c2goIHZhck9iaik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gUnVsZS1kZXJpdmVkIG9iamVjdC5cclxuXHRwcml2YXRlIHByb2Nlc3NSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcnVsZTogUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgcnVsZSBvYmplY3QgaXMgYWxyZWFkeSBwcm9jZXNzZWQgYXMgcGFydCBvZiBhbm90aGVyIGluc3RhbmNlLCB3ZSBjcmVhdGUgYSBjbG9uZVxyXG5cdFx0Ly8gb2YgdGhlIHJ1bGUgYW5kIHNldCBpdCB0byBvdXIgaW5zdGFuY2UuXHJcblx0XHRpZiAocnVsZS5vd25lcilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lKVxyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdID0gcnVsZSA9IHJ1bGUuY2xvbmUoKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gVE9ETzogc3VwcG9ydCBhbHJlYWR5IHVzZWQgcnVsZXMgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRydWxlLnByb2Nlc3MoIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHJcblx0XHRpZiAocnVsZSBpbnN0YW5jZW9mIEltcG9ydFJ1bGUpXHJcblx0XHRcdHRoaXMuaW1wb3J0cy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBOYW1lc3BhY2VSdWxlKVxyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMucHVzaCggcnVsZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMub3RoZXJSdWxlcy5wdXNoKCBydWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJ1bGVzIGZyb20gdGhlIGdpdmVuIGFycmF5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc0FycmF5KCBwcm9wVmFsczogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wVmFscyB8fCBwcm9wVmFscy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRob3NlIHRoYXQgYXJlIHJ1bGVzLlxyXG5cdFx0Zm9yKCBsZXQgcHJvcFZhbCBvZiBwcm9wVmFscylcclxuXHRcdFx0dGhpcy5wcm9jZXNzUHJvcGVydHkoIG51bGwsIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdHB1YmxpYyBnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHNldEN1c3RvbVZhclZhbHVlKCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlKVxyXG5cdFx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggbmFtZSwgdmFsdWUsIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogbnVsbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBhIGdsb2JhbGx5IHVuaXF1ZSBDU1MgbmFtZSBmb3IgdGhlIGdpdmVuIHJ1bGUgbmFtZSB1bmxlc3MgdGhpcyBydWxlIG5hbWUgYWxyZWFkeVxyXG5cdCAqIGV4aXN0cyBlaXRoZXIgaW4gYSBiYXNlIGNsYXNzIG9yIGluIHRoZSBjaGFpbiBvZiBwYXJlbnQgZ3JvdXBpbmcgcnVsZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gaWYgcnVsZSBuYW1lIHdhcyBub3Qgc3BlY2lmaWVkLCBnZW5lcmF0ZSBpdCB1bmlxdWVseTsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHdlXHJcblx0XHQvLyBhbHJlYWR5IGhhdmUgdGhpcyBydWxlIG5hbWU6IGlmIHllcywgcmV0dXJuIHRoZSBhbHJlYWR5IGFzc2lnbmVkIG5hbWUuIElmIHdlIGRpZG4ndFxyXG5cdFx0Ly8gZmluZCB0aGUgbmFtZSwgdHJ5IHRvIGZpbmQgaXQgaW4gdGhlIGJhc2UgY2xhc3Nlcyk7IGlmIG5vdCBmb3VuZCB0aGVyZSwgZ2VuZXJhdGUgaXRcclxuXHRcdC8vIHVzaW5nIHRoaXMgY29udGFpbmVyJ3MgbmFtZSBhbmQgdGhlIHJ1bGUgbmFtZSAobm90ZSB0aGF0IGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgYm90aFxyXG5cdFx0Ly8gY2FuIGJlIGdlbmVyYXRlZCB1bmlxdWVseSkuXHJcblx0XHRpZiAoIXJ1bGVOYW1lKVxyXG5cdFx0XHRyZXR1cm4gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRlbHNlIGlmIChydWxlTmFtZSBpbiB0aGlzLmluc3RhbmNlICYmIFwibmFtZVwiIGluIHRoaXMuaW5zdGFuY2VbcnVsZU5hbWVdKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0ubmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCBvdXQgaWYgdGhlcmUgaXMgYSBydWxlIHdpdGggdGhpcyBuYW1lIGRlZmluZWQgaW4gYSBzdHlsZXNoZWV0IGluc3RhbmNlIGNyZWF0ZWQgZm9yXHJcblx0XHRcdC8vIGEgY2xhc3MgZnJvbSB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLlxyXG5cdFx0XHRsZXQgZXhpc3RpbmdOYW1lID0gZmluZE5hbWVGb3JSdWxlSW5Qcm90b3R5cGVDaGFpbiggdGhpcy5kZWZpbml0aW9uQ2xhc3MsIHJ1bGVOYW1lKTtcclxuXHRcdFx0cmV0dXJuIGV4aXN0aW5nTmFtZSA/IGV4aXN0aW5nTmFtZSA6IGdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRwdWJsaWMgaW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBhY3RpdmF0ZSByZWZlcmVuY2VkIHN0eWxlIGRlZmluaXRpb25zXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltUnVsZUNvbnRhaW5lcl0uYWN0aXZhdGUoKTtcclxuXHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaXNlcnQgb3VyIGN1c3RvbSB2YXJpYWJsZXMgaW4gYSBcIjpyb290XCIgcnVsZVxyXG5cdFx0aWYgKHRoaXMudmFycy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgOnJvb3QgeyR7dGhpcy52YXJzLm1hcCggdmFyT2JqID0+XHJcblx0XHRcdFx0dmFyT2JqLnRvQ3NzU3RyaW5nKCkpLmpvaW4oXCI7XCIpfX1gLCBwYXJlbnQpIGFzIENTU1N0eWxlUnVsZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbnNlcnQgYWxsIG90aGVyIHJ1bGVzXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBDbGVhcnMgYWxsIENTUyBydWxlIG9iamVjdHMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRwdWJsaWMgY2xlYXJSdWxlcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMub3duZXIgPT09IHRoaXMuaW5zdGFuY2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMgJiYgdGhpcy5uYW1lc3BhY2VzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vdGhlclJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHJcblx0XHQvLyBkZWFjdGl2YXRlIGltcG9ydGVkIHN0eWxlc2hlZXRzXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltUnVsZUNvbnRhaW5lcl0uZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyB0aGlzIHN0eWxlc2hlZXQgaW50byBET00uICovXHJcblx0cHVibGljIGFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoKyt0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmlpdGlvbiBjcmVhdGVzIHRoZSBgPHN0eWxlPmAgZWxlbWVudFxyXG5cdFx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbS5pZCA9IHRoaXMubmFtZTtcclxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLmRvbVN0eWxlRWxtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IHRoaXMudG9wTGV2ZWxDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblxyXG5cdFx0XHR0aGlzLmluc2VydFJ1bGVzKCB0aGlzLmRvbVN0eWxlRWxtIS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhpcyBzdHlsZXNoZWV0IGZyb20gRE9NLiAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBndWFyZCBmcm9tIGV4dHJhIGRlYWN0aXZhdGUgY2FsbHNcclxuXHRcdGlmICh0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICgtLXRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyUnVsZXMoKTtcclxuXHJcblx0XHRcdC8vIG9ubHkgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpaXRpb24gY3JlYXRlcyB0aGUgYDxzdHlsZT5gIGVsZW1lbnRcclxuXHRcdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtIS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGNvbnRhaW5lciBpcyBmb3IgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uLlxyXG5cdHByaXZhdGUgZ2V0IGlzVG9wTGV2ZWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm93bmVyID09PSBudWxsIHx8IHRoaXMub3duZXIgPT09IHRoaXMuaW5zdGFuY2UgfVxyXG5cclxuXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhpcyBjb250YWluZXIgcHJvY2Vzc2VkLlxyXG5cdHB1YmxpYyBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhpcyBjb250YWluZXIgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZi5cclxuXHRwcml2YXRlIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzXHJcblxyXG5cdC8vIE5hbWUgb2YgdGhpcyBjb250YWluZXIsIHdoaWNoLCBkZXBlbmRpbmcgb24gdGhlIG1vZGUsIGlzIGVpdGhlciB0YWtlbiBmcm9tIHRoZSBjbGFzc1xyXG5cdC8vIGRlZmluaXRpb24gbmFtZSBvciBnZW5lcmF0ZWQgdW5pcXVlbHkuXHJcblx0cHJpdmF0ZSBuYW1lOiBzdHJpbmdcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBncm91cGluZyBydWxlcyB0aGF0XHJcblx0Ly8gbGVhZCB0byB0aGlzIHJ1bGUgY29udGFpbmVyLiBGb3IgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb25zLCB0aGlzIHBvaW50cyB0byB0aGUgc2FtZVxyXG5cdC8vIHNpbmdsZXRvbiBkZWZpbml0aW9uIGluc3RhbmNlIGFzIHRoZSAnZGVmaW5pdGlvbicgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBvd25lcjogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIG93bmVyIHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBwb2ludHMgdG8gYHRoaXNgLlxyXG5cdHByaXZhdGUgdG9wTGV2ZWxDb250YWluZXI6IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIExpc3Qgb2YgcmVmZXJlbmNlcyB0byBvdGhlciBzdHlsZSBkZWZpbml0aW9ucyBjcmVhZWQgdmlhIHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVmczogU3R5bGVEZWZpbml0aW9uW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQGltcG9ydCBydWxlc1xyXG5cdHByaXZhdGUgaW1wb3J0czogSW1wb3J0UnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBuYW1lc3BhY2UgcnVsZXNcclxuXHRwcml2YXRlIG5hbWVzcGFjZXM6IE5hbWVzcGFjZVJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBjdXN0b20gdmFyaWFibGUgcnVsZXMuXHJcblx0cHJpdmF0ZSB2YXJzOiBWYXJSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgcnVsZXMgdGhhdCBhcmUgbm90IGltcG9ydHMsIG5hbWVzcGFjZXMsIGN1c3RvbSB2YXJzLCByZWZlcmVuY2VzIG9yIGdyb3VwaW5nIHJ1bGVzLlxyXG5cdHByaXZhdGUgb3RoZXJSdWxlczogUnVsZVtdO1xyXG5cclxuXHQvLyBcIjpyb290XCIgcnVsZSB3aGVyZSBhbGwgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgYXJlIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBjc3NDdXN0b21WYXJTdHlsZVJ1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uIHJlcXVlc3RzLlxyXG5cdHByaXZhdGUgYWN0aXZhdGlvblJlZkNvdW50OiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBlbGVtbnRcclxuXHRwdWJsaWMgZG9tU3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOYW1lIGdlbmVyYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1haXplZCBuYW1lcyBmb3Igc3R5bGUgZWxlbWVudHMgKGNsYXNzIG5hbWVzLCBhbmltYXRpb25cclxuLy8gbmFtZXMsIGV0Yy4pXHJcbmxldCB1c2VVbmlxdWVTdHlsZU5hbWVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4vLyBQcmVmaXggdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgc3R5bGUgbmFtZXMuIElmIHVuZGVmaW5lZCwgYSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbFxyXG4vLyBiZSB1c2VkLlxyXG5sZXQgdW5pcXVlU3R5bGVOYW1lc1ByZWZpeDogc3RyaW5nID0gXCJuXCI7XHJcblxyXG4vLyBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy5cclxubGV0IG5leHRVbmlxdWVJRDogbnVtYmVyID0gMTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGdpdmVuIHJ1bGUgZnJvbSB0aGUgZ2l2ZW4gc3R5bGUgc2hlZXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZU5hbWUoIHNoZWV0TmFtZTogc3RyaW5nLCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdXNlVW5pcXVlU3R5bGVOYW1lc1xyXG5cdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHVuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpXHJcblx0XHQ6IGAke3NoZWV0TmFtZX1fJHtydWxlTmFtZX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgbmFtZSwgd2hpY2ggY2FuIGJlIHVzZWQgZWl0aGVyIGZvciBzdHlsZSBlbGVtZW50J3MgSUQgb3Igb3IgY2xhc3MsXHJcbiAqIGlkZW50aWZpZXIgb3IgYW5pbWF0aW9uIG5hbWUuIE5hbWVzIGFyZSBnZW5lcmF0ZWQgdXNpbmcgYSBzaW1wbGUgaW5jcmVtZW50aW5nIG51bWJlci5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlTmFtZSggcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6IHVuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpICsgbmV4dFVuaXF1ZUlEKys7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTG9va3MgdXAgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb25cclxuLy8gY2xhc3MuIElmIGZvdW5kIGFuZCBpZiB0aGUgcHJvcGVydHkgaXMgYSBydWxlLCB0aGVuIHJldHVybnMgdGhlIG5hbWUgYXNzaWduZWQgZm9yIGl0LlxyXG5mdW5jdGlvbiBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcywgcnVsZU5hbWU6IHN0cmluZylcclxue1xyXG5cdGlmICghZGVmaW5pdGlvbkNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBwcm90b3R5cGVzXHJcblx0bGV0IGJhc2VDbGFzcyA9IGRlZmluaXRpb25DbGFzcztcclxuXHR3aGlsZSggKGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggYmFzZUNsYXNzKSkgIT09IFN0eWxlRGVmaW5pdGlvbilcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgYmFzZSBjbGFzcyBhbHJlYWR5IGhhcyBhbiBhc3NvY2lhdGVkIGluc3RhbmNlOyBpZiB5ZXMsIGNoZWNrIHdoZXRoZXJcclxuXHRcdC8vIGl0IGhhc2UgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBydWxlIG5hbWUuIElmIHllcywgdGhlbiB1c2UgdGhpcyBydWxlJ3MgYWxyZWFkeVxyXG5cdFx0Ly8gZ2VuZXJhdGVkIG5hbWUgKGlmIGV4aXN0cykuXHJcblx0XHRpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHN5bUluc3RhbmNlKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGJhc2VJbnN0ID0gYmFzZUNsYXNzW3N5bUluc3RhbmNlXTtcclxuXHRcdFx0aWYgKGJhc2VJbnN0ICYmIHJ1bGVOYW1lIGluIGJhc2VJbnN0ICYmIFwibmFtZVwiIGluIGJhc2VJbnN0W3J1bGVOYW1lXSlcclxuXHRcdFx0XHRyZXR1cm4gYmFzZUluc3RbcnVsZU5hbWVdLm5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvY2Vzc2luZyBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGJ5IGNyZWF0aW5nIGl0cyBpbnN0YW5jZSBhbmQgYXNzb2NpYXRpbmcgYVxyXG4gKiBydWxlIGNvbnRhaW5lciBvYmplY3Qgd2l0aCBpdC4gVGhlIGNsYXNzIHdpbGwgYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnN0YW5jZSB1c2luZyB0aGVcclxuICogU3ltYm9sIHByb3BlcnR5LiBUaGUgb3duZXIgcGFyYW1ldGVyIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uXHJcbiAqIG9iamVjdCBvciBudWxsIGlmIHRoZSBnaXZlbiBjbGFzcyBpcyBpdHNlbGYgYSB0b3AtbGV2ZWwgY2xhc3MgKHRoYXQgaXMsIGlzIG5vdCBhIGNsYXNzXHJcbiAqIHRoYXQgZGVmaW5lcyBydWxlcyB3aXRoaW4gbmVzdGVkIGdyb3VwaW5nIHJ1bGVzKS5cclxuICogQHBhcmFtIGRlZmluaXRpb25DbGFzcyBcclxuICogQHBhcmFtIG93bmVyIFxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0NsYXNzKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuXHRvd25lcj86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG5cdC8vIGNhbGwgdGhlICd1c2UnIGZ1bmN0aW9uIGZvciBhbGwgdGhlIGJhc2UgY2xhc3NlcyBzbyB0aGF0IHJ1bGUgbmFtZXMgYXJlIGdlbmVyYXRlZC4gV2VcclxuXHQvLyBkb24ndCBhY3RpdmF0ZSBzdHlsZXMgZm9yIHRoZXNlIGNsYXNlcyBiZWNhdXNlIGRlcml2ZWQgY2xhc3NlcyB3aWxsIGhhdmUgYWxsIHRoZVxyXG5cdC8vIHJ1bGVzIGZyb20gYWxsIHRoZSBiYXNlIGNsYXNzZXMgYXMgdGhlaXIgb3duIGFuZCBzbyB0aGVzZSBydWxlcyB3aWxsIGJlIGFjdGl2YXRlZCBhc1xyXG5cdC8vIHBhcnQgb2YgdGhlIGRlcml2ZWQgY2xhc3MuXHJcblx0bGV0IGJhc2VDbGFzcyA9IGRlZmluaXRpb25DbGFzcztcclxuXHR3aGlsZSggKGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggYmFzZUNsYXNzKSkgIT09IFN0eWxlRGVmaW5pdGlvbilcclxuXHRcdHByb2Nlc3NDbGFzcyggYmFzZUNsYXNzLCBvd25lcik7XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGRlZmluaXRpb24gY2xhc3NcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBkZWZpbml0aW9uQ2xhc3MoIG93bmVyKTtcclxuXHJcblx0XHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRcdGxldCBuYW1lID0gdXNlVW5pcXVlU3R5bGVOYW1lcyB8fCAhZGVmaW5pdGlvbkNsYXNzLm5hbWVcclxuXHRcdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoKVxyXG5cdFx0XHQ6IGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cclxuXHRcdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSk7XHJcblx0XHRkZWZpbml0aW9uQ2xhc3Nbc3ltSW5zdGFuY2VdID0gaW5zdGFuY2U7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGluc3RhbnRpYXRpbmcgU3R5bGUgRGVmaW5pdGlvbiBDbGFzcyAnJHtkZWZpbml0aW9uQ2xhc3MubmFtZX0nYCwgZXJyKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UgYW5kIGFzc2lnbnMgbmFtZXMgdG8gaXRzIHJ1bGVzLlxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3ZSBjaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGluc3RhbmNlIGFscmVhZHlcclxuICogY3JlYXRlZCBmb3IgaXQgYXMgYSBjbGFzcyB3aWxsIGhhdmUgb25seSBhIHNpbmdsZSBhc3NvY2lhdGVkIGluc3RhbmUgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzXHJcbiAqIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG4gKiBcclxuICogSWYgdGhlIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgKGFuIGluc3RhbmNlIG9mIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MpIHRoZW4gd2UgY2hlY2sgd2hldGhlclxyXG4gKiBpdCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZC4gSWYgeWVzIHdlIGp1c3QgcmV0dXJuIGl0IGJhY2s7IGlmIG5vLCB3ZSBhc3NpZ24gbmV3IHVuaXF1ZSBuYW1lc1xyXG4gKiB0byBpdHMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdGFuY2VPckNsYXNzOiBTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsXHJcblx0b3duZXI/OiBTdHlsZURlZmluaXRpb24pOiBTdHlsZURlZmluaXRpb24gfCBudWxsXHJcbntcclxuXHRpZiAoIWluc3RhbmNlT3JDbGFzcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRpZiAoaW5zdGFuY2VPckNsYXNzIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uKVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBkZWZpbml0aW9uIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkXHJcblx0XHRsZXQgcnVsZUNvbnRhaW5lciA9IGluc3RhbmNlT3JDbGFzc1tzeW1SdWxlQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdFx0aWYgKCFydWxlQ29udGFpbmVyKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRcdFx0bGV0IG5hbWUgPSBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRcdFx0aWYgKCF1c2VVbmlxdWVTdHlsZU5hbWVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IGRlZmluaXRpb25DbGFzcyA9IGluc3RhbmNlT3JDbGFzcy5jb25zdHJ1Y3RvcjtcclxuXHRcdFx0XHRpZiAoZGVmaW5pdGlvbkNsYXNzLm5hbWUpXHJcblx0XHRcdFx0XHRuYW1lICs9IFwiX1wiICsgZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZU9yQ2xhc3MsIG5hbWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpbnN0YW5jZU9yQ2xhc3M7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2VPckNsYXNzLmhhc093blByb3BlcnR5KHN5bUluc3RhbmNlKVxyXG5cdFx0XHQ/IGluc3RhbmNlT3JDbGFzc1tzeW1JbnN0YW5jZV1cclxuXHRcdFx0OiBwcm9jZXNzQ2xhc3MoIGluc3RhbmNlT3JDbGFzcywgb3duZXIpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBydWxlIGNvbnRhaW5lciBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250YWluZXJGcm9tRGVmaW5pdGlvbiggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogUnVsZUNvbnRhaW5lclxyXG57XHJcblx0cmV0dXJuIGRlZmluaXRpb24gPyBkZWZpbml0aW9uW3N5bVJ1bGVDb250YWluZXJdIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmIHRoZSBpbnB1dCBvYmplY3QgaXNcclxuICogbm90IGEgc3R5bGUgZGVmaW5pdGlvbiBidXQgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCBvYnRhaW4gc3R5bGUgZGVmaW5pdGlvbiBieSBjYWxsaW5nIHRoZSAkdXNlXHJcbiAqIGZ1bmN0aW9uLiBOb3RlIHRoYXQgZWFjaCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lc1xyXG4gKiBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZCB0byBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXJcclxuICogZ29lcyB1cCB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0bGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdGFuY2VPckNsYXNzKSBhcyBUO1xyXG5cdGlmICghaW5zdGFuY2UpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBpbnN0YW5jZVtzeW1SdWxlQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdHJ1bGVDb250YWluZXIuYWN0aXZhdGUoKTtcclxuXHRyZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlYWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGJ5IHJlbW92aW5nIGl0cyBydWxlcyBmcm9tIERPTS4gTm90ZSB0aGF0IGVhY2ggc3R5bGVcclxuICogZGVmaW5pdGlvbiBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzIGFjdGl2YXRlZCBhbmRcclxuICogZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgcmVtb3ZlZCBmcm9tIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlciBnb2VzIGRvd24gdG8gMC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcbntcclxuXHRpZiAoIWRlZmluaXRpb24pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZGVmaW5pdGlvbltzeW1SdWxlQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdFx0cnVsZUNvbnRhaW5lci5kZWFjdGl2YXRlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVTaG9ydE5hbWVzKCBlbmFibGU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdHVzZVVuaXF1ZVN0eWxlTmFtZXMgPSBlbmFibGU7XHJcblx0dW5pcXVlU3R5bGVOYW1lc1ByZWZpeCA9IHByZWZpeCA/IHByZWZpeCA6IFwiblwiO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIG1vZHVsZSBkZWZpbmVzIHR5cGVzIGFuZCBpbnRlcmZhY2VzIHRoYXQgcmVwcmVzZW50IENTUyBydWxlcy5cclxuICovXHJcblxyXG5cclxuaW1wb3J0IHtJVmFyUHJveHl9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7SVN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFBzZXVkb0NsYXNzLCBQc2V1ZG9FbGVtZW50LCBDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzLCBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0aWVzLFxyXG5cdFNlbGVjdG9yQ29tYmluYXRvclxyXG59IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXh0ZW5kZWRTdHlsZXNldCB0eXBlIGV4dGVuZHMgdGhlIFN0eWxlc2V0IHR5cGUgd2l0aCBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBwcm92aWRlXHJcbiAqIGFkZGl0aW9uYWwgbWVhbmluZyB0byB0aGUgc3R5bGVzZXQgYW5kIGFsbG93IGJ1aWxkaW5nIG5lc3RlZCBzdHlsZXM6XHJcbiAqIC0gVGhlIGArYCBwcm9wZXJ0eSBzcGVjaWZpZXMgb25lIG9yIG1vcmUgcGFyZW50IHN0eWxlIHJ1bGVzLiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nXHJcbiAqICAgcGFyZW50IHJ1bGVzIHVzaW5nIGEgY29udmVuaWVudCBzdHlsZS1wcm9wZXJ0eS1saWtlIG5vdGF0aW9uLlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBwc2V1ZG8gY2xhc3MgbmFtZXMgKGUuZy4gXCI6aG92ZXJcIikgb3IgcHNldWRvIGVsZW1lbnQgbmFtZXMgKGUuZy4gXCI6OmFmdGVyXCIpLlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIG5hbWVzIG9mIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgKGUuZy4gXCI6bnRoLWNoaWxkXCIpIG9yIHBhcmFtZXRlcml6ZWRcclxuICogICBwc2V1ZG8gZWxlbWVudHMgKGUuZy4gXCI6OnNsb3R0ZWRcIikuIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBhIHR1cGxlLCB3aGVyZSB0aGUgZmlyc3RcclxuICogICBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgZm9yIHRoZSBzZWxlY3RvciBhbmQgdGhlIHNlY29uZCBlbGVtZW50IGlzIHRoZSBzdHlsc2V0LlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIHRoZSBhbXBlcnNhbmQgc3ltYm9sICgnJicpIHRoYXQgY29udGFpbiBhcnJheXMgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIGVhY2hcclxuICogICBkZWZpbmluZyBhIHNlbGVjdG9yIGFuZCBhIHN0eWxlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBzZWxlY3Rvci4gU2VsZWN0b3JzIGNhbiB1c2UgdGhlXHJcbiAqICAgYW1wZXJzYW5kIHN5bWJvbCB0byByZWZlciB0byB0aGUgcGFyZW50IHN0eWxlIHNlbGVjdG9yLiBJZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpcyBub3QgdXNlZCxcclxuICogICB0aGUgc2VsZWN0b3Igd2lsbCBiZSBzaW1wbHkgYXBwZW5kZWQgdG8gdGhlIHBhcmVudCBzZWxlY3Rvci5cclxuICogXHJcbiAqIEZ1bmN0aW9ucyB0aGF0IHJldHVybiBzdHlsZSBydWxlcyAoZS5nLiAkY2xhc3MpIGFjY2VwdCB0aGUgRXh0ZW5kZWRTdHlsZXNldCBhcyBhIHBhcmFtZXRlcixcclxuICogZm9yIGV4YW1wbGU6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIE15U3R5bGVzIGV4dGVuZHMgY3NzLlN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICBjbGFzczEgPSBjc3MuJGNsYXNzKHt9KVxyXG4gKiAgICAgY2xhc3MyID0gY3NzLiRjbGFzcyh7XHJcbiAqICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsXHJcbiAqICAgICAgICAgXCI6aG92ZXJcIiA6IHsgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiB9LFxyXG4gKiAgICAgICAgIFwiJlwiOiBbXHJcbiAqICAgICAgICAgICAgIFsgXCJsaSA+ICZcIiwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIgfSBdLFxyXG4gKiAgICAgICAgICAgICBbIHRoaXMuY2xhc3MxLCB7IGJhY2tncm91bmRDb2xvcjogXCJvcmFuZ2VcIiB9IF1cclxuICogICAgICAgICBdXHJcbiAqICAgICB9KVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhpcyB3aWxsIHRyYW5zbGF0ZSB0byB0aGUgZm9sbG93aW5nIENTUyAoY2xhc3MgbmFtZSBpcyBhdXRvLWdlbmVyYXRlZCk6XHJcbiAqIFxyXG4gKiBgYGBjc3NcclxuICogLm0xMjMgeyBiYWNrZ3JvdW5kQ29sb3I6IHdoaXRlOyB9XHJcbiAqIC5tMTIzOmhvdmVyIHsgYmFja2dyb3VuZENvbG9yOiBncmV5OyB9XHJcbiAqIGxpID4gLm0xMjMgeyBiYWNrZ3JvdW5kQ29sb3I6IHllbGxvdzsgfVxyXG4gKiAubTEyMy5tMTIyIHsgYmFja2dyb3VuZENvbG9yOiBvcmFuZ2U7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFN0eWxlc2V0ID0gU3R5bGVzZXQgJlxyXG5cdHsgW0sgaW4gUHNldWRvQ2xhc3MgfCBQc2V1ZG9FbGVtZW50XT86IEV4dGVuZGVkU3R5bGVzZXQgfSAmXHJcblx0eyBcIitcIj86IElTdHlsZVJ1bGUgfCBJU3R5bGVSdWxlW10gfSAmXHJcblx0eyBbSyBpbiBTZWxlY3RvckNvbWJpbmF0b3JdPzogW0Nzc1NlbGVjdG9yLCBFeHRlbmRlZFN0eWxlc2V0XVtdIH0gJlxyXG5cdHsgW0sgaW4ga2V5b2YgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdGllc10/OiBbSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdGllc1tLXSwgRXh0ZW5kZWRTdHlsZXNldF0gfTtcclxuXHRcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMgdGhhdCBoYXZlIGEgbmFtZTsgdGhhdCBpcyxcclxuICogY2xhc3MsIElELCBrZXlmcmFtZXMgYW5kIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGluZyBydWxlIGluIGEgc3R5bGUgc2hlZXQuIFN0eWxlIHJ1bGVzIGNhbiBiZSB1c2VkXHJcbiAqIGFueXdoZXJlIHdoZXJlIHN0eWxlIHByb3BlcnRpZXMgY2FuIGJlIGRlZmluZWQ6IGNsYXNzIHJ1bGVzLCBJRCBydWxlcywgc2VsZWN0b3IgcnVsZXMsXHJcbiAqIGtleWZyYW1lcywgZXRjLiBTdHlsZVJ1bGUgZGVmaW5lcyBhIHN0eWxlc2V0IGFuZCBjYW4gb3B0aW9uYWxseSBwb2ludCB0byBvbmUgb3IgbW9yZSBzdHlsZSBydWxlc1xyXG4gKiBmcm9tIHdoaWNoIGl0IGluaGVyaXRzLiBBIHN0eWxlc2V0IGNvbWJpbmVzIGFsbCB0aGUgcHJvcGVydGllcyBmcm9tIGl0cyBvd24gcHJvcGVydHkgYmxvY2sgYXNcclxuICogd2VsbCBhcyBmcm9tIGFsbCBvZiBzdHlsZSBydWxlcyBpdCBpbmhlcml0ZXMgZnJvbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdHlsZVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBJU3R5bGVzZXQ+KCBuYW1lOiBLLCB2YWx1ZTogSVN0eWxlc2V0W0tdLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3Rtb20gY1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gY3VzdG9tVmFyIElDVXN0b21WYXIgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBjdXN0b21WYXI6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElBYnN0cmFjdFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGJhc2UgZm9yIG90aGVyXHJcbiAqIHN0eWxlIHJ1bGVzLiBObyBDU1NTdHlsZVJ1bGUgb2JqZWN0cyBhcmUgY3JlYXRlZCBmb3IgdGhlIGFic3RyYWN0IHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWJzdHJhY3RSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIEZsYWcsIHdoaWNoIGlzIGFsd2F5cyB0cnVlLCB0aGF0IGlzIG5lZWRlZCB0byBkaXN0aW5ndWlzaCBhYnN0cmFjdCBydWxlcyBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cmVhZG9ubHkgaXNBYnN0cmFjdFJ1bGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIGNsYXNzLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY2xhc3NdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzUnVsZSBleHRlbmRzIElTdHlsZVJ1bGUsIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIEZsYWcsIHdoaWNoIGlzIGFsd2F5cyB0cnVlLCB0aGF0IGlzIG5lZWRlZCB0byBkaXN0aW5ndWlzaCBjbGFzcyBydWxlcyBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cmVhZG9ubHkgaXNDbGFzc1J1bGU6IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSURSdWxlIGludGVyZmFjZSByZXByZXNlbnRzYSBhIHN0eWxlIHJ1bGUgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRpZF1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSURSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogRmxhZywgd2hpY2ggaXMgYWx3YXlzIHRydWUsIHRoYXQgaXMgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIElEIHJ1bGVzIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRyZWFkb25seSBpc0lEUnVsZTogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZWxlY3RvclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHNhIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZXMgYnkgdGhlXHJcbiAqIGdpdmVuIHNlbGVjdG9yLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3R5bGVdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdG9yUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRyZWFkb25seSBzZWxlY3RvclRleHQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25SdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRrZXlmcmFtZXNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWUgdHlwZSBkZWZpbmVzIGEgc2luZ2xlIGtleWZyYW1lIHdpdGhpbiBhIEBrZXlmcmFtZXMgcnVsZS5cclxuICogVGhlIHdheXBvaW50IGNhbiBiZSBzcGVjaWZpZWQgYXMgXCJmcm9tXCIgb3IgXCJ0b1wiIHN0cmluZ3Mgb3IgYXMgYSBudW1iZXIgMCB0byAxMDAsIHdoaWNoIHdpbGwgYmVcclxuICogdXNlZCBhcyBhIHBlcmNlbnQuIFN0eWxlc2V0IGZvciBhIGtleWZyYW1lIGFsbG93cyBjdXN0b20gcHJvcGVydGllcyAodmlhIFwiLS1cIikgYnV0IGRvIG5vdFxyXG4gKiBhbGxvdyB0aGUgIWltcG9ydGFudCBmbGFnIChcIiFcIikuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GcmFtZSA9IFtcImZyb21cIiB8IFwidG9cIiB8IG51bWJlciwgT21pdDxFeHRlbmRlZFN0eWxlc2V0LFwiIVwiPl07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUltcG9ydFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRpbXBvcnRdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltcG9ydFJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0ltcG9ydFJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZvbnRGYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBmb250LWZhY2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGZvbnRmYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb250RmFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0ZvbnRGYWNlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZXNwYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG5hbWVzcGFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZXNwYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogTmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBwcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBuYW1lc3BhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU05hbWVzcGFjZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhZ2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHBhZ2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE9wdGlvbmFsIG5hbWUgb2YgdGhlIHBhZ2UgcHNldWRvIHN0eWxlIChlLmcuIFwiXCI6Zmlyc3RcIikgKi9cclxuXHRyZWFkb25seSBwc2V1ZG9DbGFzczogUGFnZVBzZXVkb0NsYXNzIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUGFnZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgY3VzdG9tIHByb3BlcnR5IGRlZmluaXRpb24uXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyR2YXJdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gZXh0ZW5kcyBJTmFtZWRFbnRpdHksIElWYXJQcm94eTxWYXJWYWx1ZVR5cGU8Sz4+XHJcbntcclxuXHQvKiogTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdHJlYWRvbmx5IHRlbXBsYXRlOiBLO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGZvciB0aGUgcHJvcGVydHkgaW4gdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyB0aGF0IGtlZXBzIHJlZmVyZW5jZSB0byB0aGVcclxuICogdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIERldmVsb3BlcnMgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGFjY2VzcyBydWxlcyBpbiB0aGVcclxuICogY2hhaW4gb2YgbmVzdGVkIGdyb3VwaW5nIHJ1bGVzLiBXZSBuZWVkIHRvIGF2b2lkIGVudW1lcmF0aW5nIHRoaXMgcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nXHJcbiAqIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3ltT3duZXIgPSBTeW1ib2woXCJvd25lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYSBiYXNlIGZvciBhbGwgY2xhc3NlcyB0aGF0IGNvbnRhaW4gZGVmaW5pbml0aW9ucyBvZiBDU1MgcnVsZXMuXHJcbiAqIFVzZSBpdCB0aGUgZm9sbG93aW5nIHdheTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgTXlTdHlsZXMgZXh0ZW5kIFN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICAvLyA4cHggcGFkZGluZyBvbiByZWd1bGFyIGRldmljZXNcclxuICogICAgIGRlZmF1bHRQYWRkaW5nID0gJHZhciggXCJwYWRkaW5nXCIsIDgpXHJcbiAqIFxyXG4gKiAgICAgaWZOYXJyb3dEZXZpY2UgPSAkbWVkaWEoIHttYXhXaWR0aDogNjAwIH0sXHJcbiAqICAgICAgICAgY2xhc3MgZXh0ZW5kcyBTdHlsZURlZmluaXRpb248TXlTdHlsZXM+XHJcbiAqICAgICAgICAge1xyXG4gKiAgICAgICAgICAgICAvLyA0cHggcGFkZGluZyBvbiBuYXJyb3cgZGV2aWNlc1xyXG4gKiAgICAgICAgICAgICBkZWZhdWx0UGFkZGluZyA9ICR2YXIoIFwicGFkZGluZ1wiLCBMZW4uY2FsYyggXCJ7MH0gLyAyXCIsIHRoaXMub3duZXIuZGVmYXVsdFBhZGRpbmcpKVxyXG4gKiAgICAgICAgIH1cclxuICogICAgIClcclxuICogfVxyXG4gKiBgYGBcclxuICogQHR5cGVwYXJhbSBPIFRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB3aGljaCBpcyB0aGUgb3duZXIgb2YgdGhpcyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZURlZmluaXRpb248TyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhcmUgY3JlYXRlZCBkaXJlY3RseSBvbmx5IGJ5IHRoZSAqc3R5bGVkIGNvbXBvbmVudHMqIC0gdGhhdCBpcyxcclxuXHQgKiBjb21wb25lbnRzIHRoYXQgdXNlIGRpZmZlcmVudCBzdHlsZXMgZm9yIGVhY2ggaW5zdGFuY2UuIE90aGVyd2lzZSwgc3R5bGUgZGVmaW5pdGlvblxyXG5cdCAqIGNsYXNzIGluc3RhbmNlcyBhcmUgY3JlYXRlZCB3aGVuIGVpdGhlciB0aGUgW1skdXNlXV0gb3IgW1skYWN0aXZhdGVdXSBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcblx0ICogQHBhcmFtIG93bmVyIFJlZmVyZW5jZSB0byB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NcclxuXHQgKi9cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG93bmVyOiBPIHwgbnVsbCA9IG51bGwpXHJcblx0e1xyXG5cdFx0dGhpc1tzeW1Pd25lcl0gPSBvd25lcjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZmVycyB0byB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSAqb3duZXIqIG9mXHJcblx0ICogdGhpcyBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC4gVGhlIG93bmVyIGlzIHRoZSB0b3AtbGV2ZWwgY2xhc3MgaW4gdGhlIGNoYWluIG9mIHN0eWxlXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzc2VzLiBUaHJvdWdoIHRoaXMgbWVtZWJlciwgYWxsIHJ1bGVzIGFuZCBvdGhlciBtZW1lYmVycyBkZWZpbmVkIGluIHRoZSBvd25lclxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3MgY2FuIGJlIGFjY2Vzc2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgb3duZXIoKTogTyB8IG51bGwgeyByZXR1cm4gdGhpc1tzeW1Pd25lcl07IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXCJDb25zdHJ1Y3RvclwiIGludGVyZmFjZSBkZWZpbmluZyBob3cgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGNhbiBiZSBjcmVhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxPPiA9IGFueSwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKiBBbGwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIHNob3VsZCBjb25mb3JtIHRvIHRoaXMgY29uc3RydWN0b3IgKi9cclxuXHRuZXcoIG93bmVyPzogTyk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3VwcG9ydFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHN1cHBvcnRzXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHJlYWRvbmx5IHJ1bGVzOiBUO1xyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN1cHBvcnRSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQHN1cHBvcnRzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRzdXBwb3J0c11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3VwcG9ydHNSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+IGV4dGVuZHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNZWRpYVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbWVkaWEgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG1lZGlhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlUnVsZSwgRXh0ZW5kZWRTdHlsZXNldCwgSVZhclJ1bGUsIElBYnN0cmFjdFJ1bGUsIElDbGFzc1J1bGUsIElJRFJ1bGUsIElTZWxlY3RvclJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIGNyZWF0ZU5hbWVzfSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7bWVyZ2VTdHlsZXNldHMsIHN0eWxlc2V0VG9TdHJpbmcsIHN0eWxlUHJvcFRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmcsIGNhbWVsVG9EYXNofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuL1ZhclJ1bGVcIjtcclxuaW1wb3J0IHsgcHNldWRvRW50aXR5VG9TdHJpbmcsIHNlbGVjdG9yVG9TdHJpbmcgfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgY29udGFpbiBhIHN0eWxlIHJ1bGUuIFRoaXMgY2xhc3NcclxuICogaW1wbGVtZW50cyB0aGUgcGFyc2luZyBvZiB0aGUgRXh0ZW5kZWRTdHlsZXNldCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFRoZSBzdHlsZXNldCBjYW4gYmUgYW4gRXh0ZW5kZWRTdHlsZXNldCBmb3IgbWFueSBydWxlczsgaG93ZXZlciwgZm9yIHNvbWUgaXQgaXMganVzdFxyXG5cdC8vIG9mIHRoZSBTdHlsZXNldCB0eXBlLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGVzZXQ/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGlmIChzdHlsZXNldClcclxuXHRcdFx0dGhpcy5wYXJzZUlucHV0U3R5bGVzZXQoIHN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR29lcyBvdmVyIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuIHN0eWxlc2V0IGFuZCBwYXJzZXMgdGhlbSBpbnRvIHByb3BlciBzdHlsZXNldCwgc2V0IG9mXHJcblx0ICogaW1wb3J0YW50IHByb3BlcnRpZXMgYW5kIGRlcGVuZGVudCBydWxlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlSW5wdXRTdHlsZXNldCggaW5wdXRTdHlsZXNldDogU3R5bGVzZXQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcHJlcGFyZSBsb2NhbCB2YXJpYWJsZXMgdG8gYWNjdW11bGF0ZSBwYXJzaW5nIHJlc3VsdHMuIFdlIGRvIGl0IGluIGxvY2FsIHZhcmliYWxlc1xyXG5cdFx0Ly8gYmVjYXVzZSBpbiBjYXNlIHRoZXJlIGFyZSBwYXJlbnRzLCB3ZSB3YW50IGZpcnN0IGNvcHkgcHJvcGVydGllcyBmcm9tIHRoZW0gc28gdGhhdFxyXG5cdFx0Ly8gb3VyIG93biBwcm9wZXJ0aWVzIGNhbiBvdmVycmlkZSB0aGVtLlxyXG5cdFx0bGV0IHBhcmVudFJ1bGVzOiBTdHlsZVJ1bGVbXSB8IG51bGwgPSBudWxsO1xyXG5cdFx0bGV0IGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlW10gfCBudWxsID0gbnVsbDtcclxuXHRcdGxldCBzdHlsZXNldDogU3R5bGVzZXQgPSB7fTtcclxuXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBpbnB1dFN0eWxlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IGlucHV0U3R5bGVzZXRbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwiK1wiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdGhlIHZhbHVlIGlzIGEgc2luZ2xlIG9yIGFuIGFycmF5IG9mIFN0eWxlUnVsZXMgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cclxuXHRcdFx0XHRsZXQgZXh0ZW5kc1Byb3BWYWwgPSBwcm9wVmFsIGFzIChTdHlsZVJ1bGUgfCBTdHlsZVJ1bGVbXSk7XHJcblx0XHRcdFx0aWYgKGV4dGVuZHNQcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVSdWxlKVxyXG5cdFx0XHRcdFx0cGFyZW50UnVsZXMgPSBbZXh0ZW5kc1Byb3BWYWxdO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHBhcmVudFJ1bGVzID0gZXh0ZW5kc1Byb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIjpcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhIHN0eWxlc2V0IGZvciBhIHBzZXVkbyBjbGFzcyBvciBwc2V1ZG8gZWxlbWVudFxyXG5cdFx0XHRcdGlmICghZGVwZW5kZW50UnVsZXMpXHJcblx0XHRcdFx0XHRkZXBlbmRlbnRSdWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHQvLyBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhpcyBpcyBhIHBhcmFtZXRlcmlzZWQgcHNldWRvIGVudGl0eSB3aGVyZSB0aGUgZmlyc3QgZWxlbWVudFxyXG5cdFx0XHRcdC8vIGlzIHRoZSBwYXJhbWV0ZXIgdmFsdWUgKHN0cmluZykgYW5kIHRoZSBzZWNvbmQgdGhlIEV4dGVuZGVkU3R5bGVzZXQuIE90aGVyd2lzZSwgdGhlIHZhbHVlIGlzXHJcblx0XHRcdFx0Ly8ganVzdCB0aGUgRXh0ZW5kZWRTdHlsZXNldC5cclxuXHRcdFx0XHRsZXQgZGVwZW5kZW50UnVsZTogRGVwZW5kZW50UnVsZTtcclxuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHRcdFx0XHRcdGRlcGVuZGVudFJ1bGUgPSBuZXcgRGVwZW5kZW50UnVsZSggcHJvcE5hbWUsIHByb3BWYWxbMF0sIHByb3BWYWxbMV0gYXMgRXh0ZW5kZWRTdHlsZXNldCwgdGhpcyk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZGVwZW5kZW50UnVsZSA9IG5ldyBEZXBlbmRlbnRSdWxlKCBcIiZcIiArIHByb3BOYW1lLCB1bmRlZmluZWQsIHByb3BWYWwgYXMgRXh0ZW5kZWRTdHlsZXNldCwgdGhpcyk7XHJcblxyXG5cdFx0XHRcdGRlcGVuZGVudFJ1bGVzLnB1c2goIGRlcGVuZGVudFJ1bGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcIiZcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgRXh0ZW5kZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCFkZXBlbmRlbnRSdWxlcylcclxuXHRcdFx0XHRcdFx0ZGVwZW5kZW50UnVsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR0dXBsZXMuZm9yRWFjaCggdHVwbGUgPT4gZGVwZW5kZW50UnVsZXMhLnB1c2goIG5ldyBEZXBlbmRlbnRSdWxlKCB0dXBsZVswXSxcclxuXHRcdFx0XHRcdFx0dW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiZcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIEV4dGVuZGVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmICghZGVwZW5kZW50UnVsZXMpXHJcblx0XHRcdFx0XHRcdGRlcGVuZGVudFJ1bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dHVwbGVzLmZvckVhY2goIHR1cGxlID0+IGRlcGVuZGVudFJ1bGVzIS5wdXNoKCBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0KCkgPT4gcHJvcE5hbWUgKyBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSksXHJcblx0XHRcdFx0XHRcdHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLmVuZHNXaXRoKFwiJlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgRXh0ZW5kZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWYgKCFkZXBlbmRlbnRSdWxlcylcclxuXHRcdFx0XHRcdFx0ZGVwZW5kZW50UnVsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR0dXBsZXMuZm9yRWFjaCggdHVwbGUgPT4gZGVwZW5kZW50UnVsZXMhLnB1c2goIG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBzZWxlY3RvclRvU3RyaW5nKCB0dXBsZVswXSkgKyBwcm9wTmFtZSxcclxuXHRcdFx0XHRcdFx0dW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY29weSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gb3VyIGludGVybmFsIHN0eWxlc2V0XHJcblx0XHRcdFx0c3R5bGVzZXRbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGJ5IG5vdyB3ZSB3ZW50IG92ZXIgYWxsIHByb3BlcnRpZXMgb2YgdGhlIGlucHV0IHN0eWxlc2V0LiBJZiB3ZSBoYXZlIHBhcmVudCBzdHlsZVxyXG5cdFx0Ly8gcnVsZXMsIGNvcHkgc3R5bGVzZXQsIGltcG9ydGFudCBhbmQgZGVwZW5kZW50IHJ1bGVzIGRhdGEgZnJvbSB0aGVtLlxyXG5cdFx0aWYgKHBhcmVudFJ1bGVzICYmIHBhcmVudFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHBhcmVudFJ1bGVzLmZvckVhY2goIHBhcmVudCA9PlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHBhcmVudC5zdHlsZXNldClcclxuXHRcdFx0XHRcdHRoaXMuc3R5bGVzZXQgPSBtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgcGFyZW50LnN0eWxlc2V0KTtcclxuXHJcblx0XHRcdFx0aWYgKHBhcmVudC5kZXBlbmRlbnRSdWxlcyAmJiBwYXJlbnQuZGVwZW5kZW50UnVsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHRwYXJlbnQuZGVwZW5kZW50UnVsZXMuZm9yRWFjaCggZGVwZW5kZW50UnVsZSA9PlxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsZXQgbmV3RGVwZW5kZW50UnVsZSA9IGRlcGVuZGVudFJ1bGUuY2xvbmUoKTtcclxuXHRcdFx0XHRcdFx0bmV3RGVwZW5kZW50UnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXMucHVzaCggbmV3RGVwZW5kZW50UnVsZSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG5vdyB0aGF0IHdlIGNvcGllZCBkYXRhIGZyb20gdGhlIHBhcmVudHMgKGlmIGFueSkgd2UgbmVlZCB0byBjb3B5IG92ZXIgb3VyIG93blxyXG5cdFx0aWYgKHN0eWxlc2V0ICYmIE9iamVjdC5rZXlzKCBzdHlsZXNldCkubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0aWYgKCF0aGlzLnN0eWxlc2V0KVxyXG5cdFx0XHRcdHRoaXMuc3R5bGVzZXQgPSBzdHlsZXNldDtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBzdHlsZXNldCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGRlcGVuZGVudFJ1bGVzICYmIGRlcGVuZGVudFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdGlmICghdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzID0gZGVwZW5kZW50UnVsZXM7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkZXBlbmRlbnRSdWxlcy5mb3JFYWNoKCBkZXBlbmRlbnRSdWxlID0+IHRoaXMuZGVwZW5kZW50UnVsZXMucHVzaCggZGVwZW5kZW50UnVsZSkpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgcHJvY2VzcyB0aGVtIHVuZGVyIHRoZSBzYW1lIGNvbnRhaW5lclxyXG5cdFx0aWYgKHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXMuZm9yRWFjaCggZGVwZW5kZW50UnVsZSA9PiBkZXBlbmRlbnRSdWxlLnByb2Nlc3MoIG93bmVyLCBudWxsKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY29weUZyb20oIHNyYzogU3R5bGVSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuc3R5bGVzZXQgPSBzcmMuc3R5bGVzZXQ7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBjbG9uZSB0aGVtXHJcblx0XHRpZiAoc3JjLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzID0gW107XHJcblx0XHRcdGZvciggbGV0IHNyY0RlcGVuZGVudFJ1bGUgb2Ygc3JjLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG5ld0RlcGVuZGVudFJ1bGUgPSBzcmNEZXBlbmRlbnRSdWxlLmNsb25lKCk7XHJcblx0XHRcdFx0bmV3RGVwZW5kZW50UnVsZS5jb250YWluaW5nUnVsZSA9IHRoaXM7XHJcblx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlcy5wdXNoKCBuZXdEZXBlbmRlbnRSdWxlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcnVsZS5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuc3R5bGVzZXRcclxuXHRcdFx0PyBgJHt0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCl9ICR7c3R5bGVzZXRUb1N0cmluZyggdGhpcy5zdHlsZXNldCl9YFxyXG5cdFx0XHQ6IFwiXCI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN0eWxlc2V0KVxyXG5cdFx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggdGhpcy50b0Nzc1N0cmluZygpISwgcGFyZW50KSBhcyBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBpbnNlcnQgdGhlbSB1bmRlciB0aGUgc2FtZSBwYXJlbnRcclxuXHRcdGlmICh0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzLmZvckVhY2goIGRlcGVuZGVudFJ1bGUgPT4gZGVwZW5kZW50UnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY2xlYXIoKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGNsZWFyIHRoZW0gdG9vXHJcblx0XHRpZiAodGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlcy5mb3JFYWNoKCBkZXBlbmRlbnRSdWxlID0+IGRlcGVuZGVudFJ1bGUuY2xlYXIoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0UHJvcDxLIGV4dGVuZHMga2V5b2YgSVN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IElTdHlsZXNldFtLXSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY3NzUnVsZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggY2FtZWxUb0Rhc2goIG5hbWUpLFxyXG5cdFx0XHRzdHlsZVByb3BUb1N0cmluZyggbmFtZSwgdmFsdWUsIHRydWUpLCBpbXBvcnRhbnQgPyBcIiFpbXBvcnRhbnRcIiA6IG51bGwpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0bW9tIGNTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIHZhck9iaiBJVmFyUnVsZSBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YXJWYWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCB2YXJPYmo6IElWYXJSdWxlPEs+LCB2YXJWYWx1ZTogVmFyVmFsdWVUeXBlPEs+LCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdmFyT2JqIHx8ICF0aGlzLmNzc1J1bGUgfHwgISh2YXJPYmogaW5zdGFuY2VvZiBWYXJSdWxlKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggdmFyT2JqLmNzc05hbWUsXHJcblx0XHRcdHN0eWxlUHJvcFRvU3RyaW5nKCB2YXJPYmoudGVtcGxhdGUsIHZhclZhbHVlLCB0cnVlKSwgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiBudWxsKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTU3R5bGVSdWxlO1xyXG5cclxuXHQvLyBSZXN1bHRhbnQgU3R5bGVzZXQgb2JqZWN0IGRlZmluaW5nIHByb3BlcnRpZXMgdG8gYmUgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0cHJvdGVjdGVkIHN0eWxlc2V0OiBTdHlsZXNldDtcclxuXHJcblx0Ly8gTGlzdCBvZiBkZXBlbmRlbnQgc3R5bGVzLlxyXG5cdHByaXZhdGUgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERlcGVuZGVudFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBkZXBlbmRzIG9uIHRoZSBjb250YWluaW5nIHN0eWxlIHJ1bGUuIFRoaXNcclxuICogaXMgdXNlZCBmb3IgcHNldWRvIGNsYXNzZXMsIHBzZXVkbyBlbGVtZW50cywgY29tYmluYXRvcnMgYW5kIG90aGVyIHNlbGVjdG9ycyB0aGF0IGNvbWJpbmUgdGhlXHJcbiAqIGNvbnRhaW5pbmcgcnVsZSdzIHNlbGVjdG9yIHdpdGggYWRkaXRpb25hbCBzZWxlY3RvciBpdGVtcy5cclxuICovXHJcbmNsYXNzIERlcGVuZGVudFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdC8vIGZvciByZWd1bGFyIHNlbGVjdG9ycywgcHNldWRvIGNsYXNzZXMgYW5kIHBzZXVkbyBlbGVtZW50cywgdGhlIHNlbGVjdG9yIGFscmVhZHkgY29udGFpbnNcclxuXHQvLyB0aGUgYW1wZXJzYW5kIGFuZCB0aGUgc2VsZWN0b3JQYXJhbSBpcyB1bmRlZmluZWQuIEZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzLCBwc3Vkb1xyXG5cdC8vIGVsZW1lbnRzIGFuZCBjb21iaW5hdG9ycywgdGhlIHNlbGVjdG9yUGFyYW0gaXMgZGVmaW5lZCBhbmQgdGhlIHNlbGVjdG9yIGlzIGp1c3QgdGhlIGVudGl0eVxyXG5cdC8vIG5hbWUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHNlbGVjdG9yUGFyYW0/OiBhbnksIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldCxcclxuXHRcdGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0XHR0aGlzLnNlbGVjdG9yUGFyYW0gPSBzZWxlY3RvclBhcmFtO1xyXG5cdFx0dGhpcy5jb250YWluaW5nUnVsZSA9IGNvbnRhaW5pbmdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogRGVwZW5kZW50UnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IERlcGVuZGVudFJ1bGUoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRuZXdSdWxlLnNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcclxuXHRcdG5ld1J1bGUuc2VsZWN0b3JQYXJhbSA9IHRoaXMuc2VsZWN0b3JQYXJhbTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcGFyZW50U2VsZWN0b3IgPSB0aGlzLmNvbnRhaW5pbmdSdWxlIS5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0b3JQYXJhbSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciBhcyBzdHJpbmc7XHJcblx0XHRcdHJldHVybiBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfSgke3BzZXVkb0VudGl0eVRvU3RyaW5nKCBzZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKX0pYDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29udmVydCBzZWxlY3RvciB0byBzdHJpbmcuXHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHNlbGVjdG9yVG9TdHJpbmcoIHRoaXMuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHNlbGVjdG9yIHN0cmluZyBkb2Vzbid0IGhhdmUgYW55IG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sLCB3ZVxyXG5cdFx0XHQvLyBzaW1wbHkgYXBwZW5kIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IHNlbGVjdG9yOyBvdGhlcndpc2UsIHdlIHJlcGxhY2UgYWxsXHJcblx0XHRcdC8vIG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sIGluIHRoZSBzZWxlY3RvciBzdHJpbmcgd2l0aCB0aGUgc2VsZWN0b3JcclxuXHRcdFx0Ly8gc3RyaW5nIG9mIHRoZSBwYXJlbnQgcnVsZS5cclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yLmluZGV4T2YoIFwiJlwiKSA8IDBcclxuXHRcdFx0XHQ/IGAke3BhcmVudFNlbGVjdG9yfSR7c2VsZWN0b3J9YFxyXG5cdFx0XHRcdDogc2VsZWN0b3IucmVwbGFjZSggLyYvZywgcGFyZW50U2VsZWN0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJ0aWFsIHNlbGVjdG9yIHRoYXQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWxlY3RvciAtIHVzZWQgZm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgYW5kIGVsZW1lbnRzLlxyXG5cdHByaXZhdGUgc2VsZWN0b3JQYXJhbT86IGFueTtcclxuXHJcblx0Ly8gUGFyZW50IHN0eWxlIHJ1bGUgb2Ygd2hpY2ggdGhpcyBydWxlIGlzIGRlcGVuZGVudC5cclxuXHRwdWJsaWMgY29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBYnN0cmFjdFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gb25seSBiZSB1c2VkIGFzIGEgYmFzZSBmb3Igb3RoZXIgc3R5bGVcclxuICogcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUFic3RyYWN0UnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IEV4dGVuZGVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEFic3RyYWN0UnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEFic3RyYWN0UnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT3ZlcnJpZGVzIHRoZSBTdHlsZVJ1bGUncyBpbXBsZW1lbnRhdGlvbiB0byBkbyBub3RoaW5nLiBObyBDU1NTdHlsZVJ1bGUgaXMgY3JlYXRlZCBmb3JcclxuXHQvLyBhYnN0cmFjdCBydWxlcy5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0Fic3RyYWN0UnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQ2xhc3NSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNsYXNzUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlLCBcIi5cIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBDbGFzc1J1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBDbGFzc1J1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzQ2xhc3NSdWxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNsYXNzUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhbiBJRC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJRFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJSURSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUlEUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlLCBcIiNcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJRFJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBJRFJ1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzSURSdWxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUlEUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNlbGVjdG9yUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgQ1NTIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElTZWxlY3RvclJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzdHlsZT86IEV4dGVuZGVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdG9yVGV4dCA9IHZhbHVlVG9TdHJpbmcoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogU2VsZWN0b3JSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgU2VsZWN0b3JSdWxlKCB0aGlzLnNlbGVjdG9yKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdG9yVGV4dDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHB1YmxpYyBzZWxlY3RvclRleHQ6IHN0cmluZztcclxuXHJcblx0Ly8gc2VsZWN0b3Igb2JqZWN0IGZvciB0aGlzIHJ1bGUuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJVmFyUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtWYXJWYWx1ZVR5cGUsIFZhclRlbXBsYXRlTmFtZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXJ9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWYXJSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuIFZhclJ1bGUgZG9lcyBub3QgZGVyaXZlIGZyb20gdGhlIFJ1bGVcclxuICogY2xhc3MgYmVjYXVzZSBpdCBpcyBub3QgYSByZWFsIENTUyBydWxlOyBob3dldmVyLCBpbiBtYW55IGFzcGVjdHMgaXQgcmVwZWF0cyB0aGUgUnVsZSdzXHJcbiAqIGZ1bmN0aW9uYWxpdHkuIEluIHBhcnRpY3VsYXIgaXQgaGFzIHRoZSBwcm9jZXNzIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIGl0IHRvIG9idGFpbiBhbiBhY3R1YWxcclxuICogbmFtZSwgd2hpY2ggd2lsbCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgYW5kIHVzaW5nIHRoaXMgY3VzdG9tIHByb3BlcnR5IGluIENTUy5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB3aGlsZSB0aGUgdHlwZSBwYXJhbWV0ZXIgSyBpcyBhIGtleSBvZiB0aGUgSUNzc1N0eWxlc2V0IGludGVyZmFjZSwgdGhlIHZhbHVlIGlzIG9mXHJcbiAqIHR5cGUgSVN0aWxlc2V0W0tdLCB3aGNpaCBpcyBFeHRlbmRlZDxJQ3NzU3R5bGVzZXRbS10+LiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nIHZhbHVlcyB0aGF0IGFyZVxyXG4gKiB2YWxpZCBmb3IgdGhlIEV4dGVuZGVkIHJvcGVydHkgdHlwZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYXJSdWxlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+IGltcGxlbWVudHMgSVZhclJ1bGU8Sz5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdGVtcGxhdGU6IEssIHZhbHVlPzogVmFyVmFsdWVUeXBlPEs+LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPilcclxuXHR7XHJcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUsIFwiLS1cIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBWYXJSdWxlPEs+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBWYXJSdWxlPEs+KHRoaXMudGVtcGxhdGUsIHRoaXMudmFsdWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZy5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGAke3RoaXMuY3NzTmFtZX06ICR7c3R5bGVQcm9wVG9TdHJpbmcoIHRoaXMudGVtcGxhdGUsIHRoaXMudmFsdWUsIHRydWUpfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSB2YXIoLS1uYW1lKSBleHByZXNzaW9uLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gYHZhcigke3RoaXMuY3NzTmFtZX0pYDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBmb3IgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICovXHJcblx0cHVibGljIHNldFZhbHVlKCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnNldEN1c3RvbVZhclZhbHVlKCB0aGlzLmNzc05hbWUsIHN0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudClcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvLyAvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyAvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdC8vIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcblx0cHVibGljIHRlbXBsYXRlOiBLO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgdmFsdWU6IFZhclZhbHVlVHlwZTxLPjtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MgYW5kIHdoaWNoIGhhc2UgdGhlIENTU1N0eWxlUnVsZSB0aHJvdWdoIHdoaWNoXHJcblx0Ly8gdGhlIHZhbHVlIG9mIHRoaXMgY3VzdG9tIHZhcmlhYmxlIGNhbiBiZSBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SU5hbWVkQ29sb3JzLCBDc3NDb2xvciwgQ29sb3JzfSBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtDc3NQZXJjZW50TWF0aCwgQ3NzQW5nbGVNYXRoLCB2YWx1ZVRvU3RyaW5nfSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBjb2xvciBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvck51bWJlclRvU3RyaW5nKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgaWYgKHZhbCA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgbmVnYXRpdmU6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJBIG51bWJlciByZXByZXNlbnRpbmcgY29sb3IgY2Fubm90IGJlIGZsb2F0aW5nIHBvaW50OiBcIiArIHZhbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBcIiMwMDBcIjtcclxuICAgICAgICB9XHJcbiAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVkIGNvbG9yIHdpdGggdGhlIGdpdmVuIHZhbHVlLCByZXR1cm4gdGhlIGNvbG9yIG5hbWVcclxuICAgIGxldCBuYW1lID0gcmV2ZXJzZWRDb2xvck1hcC5nZXQoIHZhbCk7XHJcbiAgICBpZiAobmFtZSlcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBvdGhlcndpc2UgY29udmVydCBudW1lcmljIHZhbHVlIHRvICMgbm90YXRpb25cclxuICAgICAgICBsZXQgcyA9IHZhbC50b1N0cmluZygxNik7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgKHZhbCA8PSAweEZGRkZGRiA/IHMucGFkU3RhcnQoIDYsIFwiMFwiKSA6IHMucGFkU3RhcnQoIDgsIFwiMFwiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29sb3JTZXBhcmF0aW9uVG9TdHJpbmcoIGM6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYyA9PSBudWxsID8gXCIwXCIgOiB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIiA/IGMgOiBOdW1iZXIuaXNJbnRlZ2VyKGMpID8gYy50b1N0cmluZygpIDogQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMoYyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvU3RyaW5nKCByOiBudW1iZXIgfCBzdHJpbmcsIGc6IG51bWJlciB8IHN0cmluZywgYjogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHIgPSBjb2xvclNlcGFyYXRpb25Ub1N0cmluZyggcik7XHJcbiAgICBnID0gY29sb3JTZXBhcmF0aW9uVG9TdHJpbmcoIGcpO1xyXG4gICAgYiA9IGNvbG9yU2VwYXJhdGlvblRvU3RyaW5nKCBiKTtcclxuICAgIGEgPSBhID09IG51bGwgPyB1bmRlZmluZWQgOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhKTtcclxuXHJcbiAgICByZXR1cm4gIWEgPyBgcmdiKCR7cn0sJHtnfSwke2J9KWAgOiBgcmdiYSgke3J9LCR7Z30sJHtifSwke2F9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvU3RyaW5nKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciB8IHN0cmluZywgbDogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGggPSBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhoKTtcclxuICAgIHMgPSBzID09IG51bGwgPyBcIjEwMCVcIiA6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIHMpO1xyXG4gICAgbCA9IGwgPT0gbnVsbCA/IFwiMTAwJVwiIDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggbCk7XHJcbiAgICBhID0gYSA9PSBudWxsID8gdW5kZWZpbmVkIDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYSk7XHJcblxyXG4gICAgcmV0dXJuICFhID8gYGhzbCgke2h9LCR7c30sJHtsfSlgIDogYGhzbGEoJHtofSwke3N9LCR7bH0sJHthfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYVRvU3RyaW5nKCBjOiBudW1iZXIgfCBrZXlvZiBJTmFtZWRDb2xvcnMsIGE6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgcmdiVmFsID0gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIgPyBDb2xvcnNbY10gOiBjO1xyXG4gICAgcmV0dXJuIHJnYlRvU3RyaW5nKCAocmdiVmFsICYgMHhGRjAwMDApID4+IDE2LCAocmdiVmFsICYgMHgwMEZGMDApID4+IDgsIHJnYlZhbCAmIDB4MDAwMEZGLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByZWRlZmluZWQgY29sb3IgbmFtZXMgYnkgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuIE9ubHkgYnVpbHQtaW4gY29sb3IgbmFtZXMgd2lsbCBiZSBpblxyXG4gKiB0aGlzIG1hcCAtIHRob3NlIG5hbWVkIGNvbG9ycyB0aGF0IGFyZSBhZGRlZCB1c2luZyBtb2R1bGUgYXVnbWVudGF0aW9uIHdpbGwgTk9UIHJlc2lkZSBpblxyXG4gKiB0aGlzIG1hcC4gVGhpcyBpcyBuZWVkZWQgdG8gY29udmVydCB0aGUgbnVtZXJpYyBjb2xvciB2YWx1ZXMgc2V0IHVzaW5nIHRoZSBDb2xvci5icm93blxyXG4gKiBub3RhdGlvbiB0byB0aGVpciBuYW1lcyB3aGVuIGluc2VydGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5sZXQgcmV2ZXJzZWRDb2xvck1hcCA9IG5ldyBNYXA8bnVtYmVyLHN0cmluZz4oKTtcclxuXHJcbi8vIGJ1aWxkIFJldmVyc2VkIENvbG9yIE1hcFxyXG5PYmplY3QuZW50cmllcyggQ29sb3JzKS5mb3JFYWNoKCAoW25hbWUsIHZhbHVlXSkgPT4gcmV2ZXJzZWRDb2xvck1hcC5zZXQoIHZhbHVlLCBuYW1lKSApO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3Igc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy4gSWYgYSBzdHJpbmcgdmFsdWUgaXMgaW4gdGhlIENvbG9ycyBvYmplY3Qgd2VcclxuICogbmVlZCB0byBnZXQgaXRzIG51bWJlciBhbmQgY29udmVydCBpdCB0byB0aGUgcmdiW2FdKCkgZnVuY3Rpb24gYmVjYXVzZSBpdCBtaWdodCBiZSBhIGN1c3RvbVxyXG4gKiBjb2xvciBuYW1lIGFkZGVkIHZpYSBJTmFtZWRDb2xvcnMgbW9kdWxlIGF1Z21lbnRhdGlvbi4gRm9yIG51bWVyaWMgdmFsdWVzLCB3ZSBjaGVjayBpZiB0aGlzIGlzXHJcbiAqIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBjb2xvcnMgYW5kIHJldHVybiBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NDb2xvcj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gQ29sb3JzW3ZdID8gY29sb3JOdW1iZXJUb1N0cmluZyggQ29sb3JzW3ZdKSA6IHYsXHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JOdW1iZXJUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHR5cGVzIGZvciB3b3JraW5nIHdpdGggQ1NTIGNvbG9ycy5cclxuICovXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkQ29sb3JzIGludGVyZmFjZSBsaXN0cyB0aGUgbmFtZXMgb2Ygc3RhbmRhcmQgV2ViIGNvbG9ycy4gSXQgaXMgbmVlZGVkIHRvIGFsbG93IGRldmVsb3BlcnNcclxuICogdG8gYWRkIG5ldyBuYW1lZCBjb2xvcnMgdGhyb3VnaCBtb2R1bGUgYXVnbWVudGF0aW9uIHRlY2huaXF1ZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkQ29sb3JzXHJcbntcclxuICAgIHJlYWRvbmx5IGJsYWNrOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpbHZlcjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyYXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hcm9vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlZDogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHB1cnBsZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvdzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdnk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRlYWw6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWE6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFsaWNlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFudGlxdWV3aGl0ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWFtYXJpbmU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGF6dXJlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJlaWdlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJpc3F1ZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsYW5jaGVkYWxtb25kOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWV2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJyb3duOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJ1cmx5d29vZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNhZGV0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNob2NvbGF0ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcmFsOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5mbG93ZXJibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5zaWxrOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNyaW1zb246ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGN5YW46ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtibHVlOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtjeWFuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmF5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmV5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtraGFraTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmttYWdlbnRhOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmFuZ2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmNoaWQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtyZWQ6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzYWxtb246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzZWFncmVlbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyYXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyZXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBwaW5rOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBza3libHVlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyYXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyZXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRvZGdlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZpcmVicmljazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZsb3JhbHdoaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZvcmVzdGdyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdhaW5zYm9ybzogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdob3N0d2hpdGU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGQ6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGRlbnJvZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVueWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvbmV5ZGV3OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvdHBpbms6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlhbnJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlnbzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGl2b3J5OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGtoYWtpOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyYmx1c2g6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhd25ncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxlbW9uY2hpZmZvbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y3lhbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z29sZGVucm9keWVsbG93OiAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JlZW46ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0cGluazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2FsbW9uOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmF5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmV5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0eWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbmVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hZ2VudGE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWFxdWFtYXJpbmU6ICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bW9yY2hpZDogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXB1cnBsZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNsYXRlYmx1ZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNwcmluZ2dyZWVuOiAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXR1cnF1b2lzZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXZpb2xldHJlZDogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pZG5pZ2h0Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pbnRjcmVhbTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pc3R5cm9zZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1vY2Nhc2luOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdmFqb3doaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9sZGxhY2U6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlZHJhYjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZXJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yY2hpZDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV2aW9sZXRyZWQ6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhcGF5YXdoaXA6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlYWNocHVmZjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlcnU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBpbms6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBsdW06ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBvd2RlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJvc3licm93bjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJveWFsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhZGRsZWJyb3duOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbG1vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbmR5YnJvd246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYWdyZWVuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYXNoZWxsOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpZW5uYTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNreWJsdWU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNub3c6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNwcmluZ2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHN0ZWVsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRhbjogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRoaXN0bGU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRvbWF0bzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHR1cnF1b2lzZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHZpb2xldDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoZWF0OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlc21va2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvd2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlYmVjY2FwdXJwbGU6ICAgICAgICAgIG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbG9yUHJveHkgdHlwZSByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIG9mIENTUyBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBmb3JcclxuICogc2VjaWZ5aW5nIGNvbG9ycy4gVGhpcyBpbnRlcmZhY2UgaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZTogcmdiKCksIGFscGhhKCksIGV0Yy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbG9yUHJveHkgPSAocD86IFwiY29sb3JcIikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIHN0cmluZyAoZS5nLiBcInJlZFwiIG9yIFwiI2ZlNVwiIG9yIFwicmdiYSgxOTAsIDIwMCwgMjM1LCA5MCUpXCIsIGV0Yy4pXHJcbiAqICAgLSBudW1iZXI6XHJcbiAqICAgICAtIHBvc2l0aXZlIGludGVnZXIgbnVtYmVycyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgYXJlIHRyZWF0ZWQgYXMgUkdCIHNlcGFyYXRpb25zIDB4UlJHR0JCLlxyXG4gKiAgICAgLSBwb3NpdGl2ZSBpbnRlZ2VyIG51bWJlcnMgZ3JlYXRlciB0aGFuIDB4RkZGRkZGIGFyZSB0cmVhdGVkIGFzIFJHQkEgc2VwYXJhdGlvbnMgMHhSUkdHQkJBQS5cclxuICogICAgIC0gbmVnYXRpdmUgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIHJlamVjdGVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzQ29sb3IgPSBcInRyYW5zcGFyZW50XCIgfCBcImN1cnJlbnRjb2xvclwiIHwga2V5b2YgSU5hbWVkQ29sb3JzIHwgbnVtYmVyIHwgQ29sb3JQcm94eTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzOiBJTmFtZWRDb2xvcnMgPVxyXG57XHJcbiAgICBibGFjazogICAgICAgICAgICAgICAgICAweDAwMDAwMCxcclxuICAgIHNpbHZlcjogICAgICAgICAgICAgICAgIDB4YzBjMGMwLFxyXG4gICAgZ3JheTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICB3aGl0ZTogICAgICAgICAgICAgICAgICAweGZmZmZmZixcclxuICAgIG1hcm9vbjogICAgICAgICAgICAgICAgIDB4ODAwMDAwLFxyXG4gICAgcmVkOiAgICAgICAgICAgICAgICAgICAgMHhmZjAwMDAsXHJcbiAgICBwdXJwbGU6ICAgICAgICAgICAgICAgICAweDgwMDA4MCxcclxuICAgIGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgZ3JlZW46ICAgICAgICAgICAgICAgICAgMHgwMDgwMDAsXHJcbiAgICBsaW1lOiAgICAgICAgICAgICAgICAgICAweDAwZmYwMCxcclxuICAgIG9saXZlOiAgICAgICAgICAgICAgICAgIDB4ODA4MDAwLFxyXG4gICAgeWVsbG93OiAgICAgICAgICAgICAgICAgMHhmZmZmMDAsXHJcbiAgICBuYXZ5OiAgICAgICAgICAgICAgICAgICAweDAwMDA4MCxcclxuICAgIGJsdWU6ICAgICAgICAgICAgICAgICAgIDB4MDAwMGZmLFxyXG4gICAgdGVhbDogICAgICAgICAgICAgICAgICAgMHgwMDgwODAsXHJcbiAgICBhcXVhOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIG9yYW5nZTogICAgICAgICAgICAgICAgIDB4ZmZhNTAwLFxyXG4gICAgYWxpY2VibHVlOiAgICAgICAgICAgICAgMHhmMGY4ZmYsXHJcbiAgICBhbnRpcXVld2hpdGU6ICAgICAgICAgICAweGZhZWJkNyxcclxuICAgIGFxdWFtYXJpbmU6ICAgICAgICAgICAgIDB4N2ZmZmQ0LFxyXG4gICAgYXp1cmU6ICAgICAgICAgICAgICAgICAgMHhmMGZmZmYsXHJcbiAgICBiZWlnZTogICAgICAgICAgICAgICAgICAweGY1ZjVkYyxcclxuICAgIGJpc3F1ZTogICAgICAgICAgICAgICAgIDB4ZmZlNGM0LFxyXG4gICAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgMHhmZmViY2QsXHJcbiAgICBibHVldmlvbGV0OiAgICAgICAgICAgICAweDhhMmJlMixcclxuICAgIGJyb3duOiAgICAgICAgICAgICAgICAgIDB4YTUyYTJhLFxyXG4gICAgYnVybHl3b29kOiAgICAgICAgICAgICAgMHhkZWI4ODcsXHJcbiAgICBjYWRldGJsdWU6ICAgICAgICAgICAgICAweDVmOWVhMCxcclxuICAgIGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIDB4N2ZmZjAwLFxyXG4gICAgY2hvY29sYXRlOiAgICAgICAgICAgICAgMHhkMjY5MWUsXHJcbiAgICBjb3JhbDogICAgICAgICAgICAgICAgICAweGZmN2Y1MCxcclxuICAgIGNvcm5mbG93ZXJibHVlOiAgICAgICAgIDB4NjQ5NWVkLFxyXG4gICAgY29ybnNpbGs6ICAgICAgICAgICAgICAgMHhmZmY4ZGMsXHJcbiAgICBjcmltc29uOiAgICAgICAgICAgICAgICAweGRjMTQzYyxcclxuICAgIGN5YW46ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgZGFya2JsdWU6ICAgICAgICAgICAgICAgMHgwMDAwOGIsXHJcbiAgICBkYXJrY3lhbjogICAgICAgICAgICAgICAweDAwOGI4YixcclxuICAgIGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIDB4Yjg4NjBiLFxyXG4gICAgZGFya2dyYXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJrZ3JlZW46ICAgICAgICAgICAgICAweDAwNjQwMCxcclxuICAgIGRhcmtncmV5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2toYWtpOiAgICAgICAgICAgICAgMHhiZGI3NmIsXHJcbiAgICBkYXJrbWFnZW50YTogICAgICAgICAgICAweDhiMDA4YixcclxuICAgIGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIDB4NTU2YjJmLFxyXG4gICAgZGFya29yYW5nZTogICAgICAgICAgICAgMHhmZjhjMDAsXHJcbiAgICBkYXJrb3JjaGlkOiAgICAgICAgICAgICAweDk5MzJjYyxcclxuICAgIGRhcmtyZWQ6ICAgICAgICAgICAgICAgIDB4OGIwMDAwLFxyXG4gICAgZGFya3NhbG1vbjogICAgICAgICAgICAgMHhlOTk2N2EsXHJcbiAgICBkYXJrc2VhZ3JlZW46ICAgICAgICAgICAweDhmYmM4ZixcclxuICAgIGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIDB4NDgzZDhiLFxyXG4gICAgZGFya3NsYXRlZ3JheTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrc2xhdGVncmV5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIDB4MDBjZWQxLFxyXG4gICAgZGFya3Zpb2xldDogICAgICAgICAgICAgMHg5NDAwZDMsXHJcbiAgICBkZWVwcGluazogICAgICAgICAgICAgICAweGZmMTQ5MyxcclxuICAgIGRlZXBza3libHVlOiAgICAgICAgICAgIDB4MDBiZmZmLFxyXG4gICAgZGltZ3JheTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkaW1ncmV5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRvZGdlcmJsdWU6ICAgICAgICAgICAgIDB4MWU5MGZmLFxyXG4gICAgZmlyZWJyaWNrOiAgICAgICAgICAgICAgMHhiMjIyMjIsXHJcbiAgICBmbG9yYWx3aGl0ZTogICAgICAgICAgICAweGZmZmFmMCxcclxuICAgIGZvcmVzdGdyZWVuOiAgICAgICAgICAgIDB4MjI4YjIyLFxyXG4gICAgZ2FpbnNib3JvOiAgICAgICAgICAgICAgMHhkY2RjZGMsXHJcbiAgICBnaG9zdHdoaXRlOiAgICAgICAgICAgICAweGY4ZjhmZixcclxuICAgIGdvbGQ6ICAgICAgICAgICAgICAgICAgIDB4ZmZkNzAwLFxyXG4gICAgZ29sZGVucm9kOiAgICAgICAgICAgICAgMHhkYWE1MjAsXHJcbiAgICBncmVlbnllbGxvdzogICAgICAgICAgICAweGFkZmYyZixcclxuICAgIGdyZXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgaG9uZXlkZXc6ICAgICAgICAgICAgICAgMHhmMGZmZjAsXHJcbiAgICBob3RwaW5rOiAgICAgICAgICAgICAgICAweGZmNjliNCxcclxuICAgIGluZGlhbnJlZDogICAgICAgICAgICAgIDB4Y2Q1YzVjLFxyXG4gICAgaW5kaWdvOiAgICAgICAgICAgICAgICAgMHg0YjAwODIsXHJcbiAgICBpdm9yeTogICAgICAgICAgICAgICAgICAweGZmZmZmMCxcclxuICAgIGtoYWtpOiAgICAgICAgICAgICAgICAgIDB4ZjBlNjhjLFxyXG4gICAgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgMHhlNmU2ZmEsXHJcbiAgICBsYXZlbmRlcmJsdXNoOiAgICAgICAgICAweGZmZjBmNSxcclxuICAgIGxhd25ncmVlbjogICAgICAgICAgICAgIDB4N2NmYzAwLFxyXG4gICAgbGVtb25jaGlmZm9uOiAgICAgICAgICAgMHhmZmZhY2QsXHJcbiAgICBsaWdodGJsdWU6ICAgICAgICAgICAgICAweGFkZDhlNixcclxuICAgIGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIDB4ZjA4MDgwLFxyXG4gICAgbGlnaHRjeWFuOiAgICAgICAgICAgICAgMHhlMGZmZmYsXHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogICAweGZhZmFkMixcclxuICAgIGxpZ2h0Z3JheTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRncmVlbjogICAgICAgICAgICAgMHg5MGVlOTAsXHJcbiAgICBsaWdodGdyZXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0cGluazogICAgICAgICAgICAgIDB4ZmZiNmMxLFxyXG4gICAgbGlnaHRzYWxtb246ICAgICAgICAgICAgMHhmZmEwN2EsXHJcbiAgICBsaWdodHNlYWdyZWVuOiAgICAgICAgICAweDIwYjJhYSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIDB4ODdjZWZhLFxyXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHNsYXRlZ3JleTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIDB4YjBjNGRlLFxyXG4gICAgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgMHhmZmZmZTAsXHJcbiAgICBsaW1lZ3JlZW46ICAgICAgICAgICAgICAweDMyY2QzMixcclxuICAgIGxpbmVuOiAgICAgICAgICAgICAgICAgIDB4ZmFmMGU2LFxyXG4gICAgbWFnZW50YTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICAweDY2Y2RhYSxcclxuICAgIG1lZGl1bWJsdWU6ICAgICAgICAgICAgIDB4MDAwMGNkLFxyXG4gICAgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgMHhiYTU1ZDMsXHJcbiAgICBtZWRpdW1wdXJwbGU6ICAgICAgICAgICAweDkzNzBkYixcclxuICAgIG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIDB4M2NiMzcxLFxyXG4gICAgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgMHg3YjY4ZWUsXHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogICAgICAweDAwZmE5YSxcclxuICAgIG1lZGl1bXR1cnF1b2lzZTogICAgICAgIDB4NDhkMWNjLFxyXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgMHhjNzE1ODUsXHJcbiAgICBtaWRuaWdodGJsdWU6ICAgICAgICAgICAweDE5MTk3MCxcclxuICAgIG1pbnRjcmVhbTogICAgICAgICAgICAgIDB4ZjVmZmZhLFxyXG4gICAgbWlzdHlyb3NlOiAgICAgICAgICAgICAgMHhmZmU0ZTEsXHJcbiAgICBtb2NjYXNpbjogICAgICAgICAgICAgICAweGZmZTRiNSxcclxuICAgIG5hdmFqb3doaXRlOiAgICAgICAgICAgIDB4ZmZkZWFkLFxyXG4gICAgb2xkbGFjZTogICAgICAgICAgICAgICAgMHhmZGY1ZTYsXHJcbiAgICBvbGl2ZWRyYWI6ICAgICAgICAgICAgICAweDZiOGUyMyxcclxuICAgIG9yYW5nZXJlZDogICAgICAgICAgICAgIDB4ZmY0NTAwLFxyXG4gICAgb3JjaGlkOiAgICAgICAgICAgICAgICAgMHhkYTcwZDYsXHJcbiAgICBwYWxlZ29sZGVucm9kOiAgICAgICAgICAweGVlZThhYSxcclxuICAgIHBhbGVncmVlbjogICAgICAgICAgICAgIDB4OThmYjk4LFxyXG4gICAgcGFsZXR1cnF1b2lzZTogICAgICAgICAgMHhhZmVlZWUsXHJcbiAgICBwYWxldmlvbGV0cmVkOiAgICAgICAgICAweGRiNzA5MyxcclxuICAgIHBhcGF5YXdoaXA6ICAgICAgICAgICAgIDB4ZmZlZmQ1LFxyXG4gICAgcGVhY2hwdWZmOiAgICAgICAgICAgICAgMHhmZmRhYjksXHJcbiAgICBwZXJ1OiAgICAgICAgICAgICAgICAgICAweGNkODUzZixcclxuICAgIHBpbms6ICAgICAgICAgICAgICAgICAgIDB4ZmZjMGNiLFxyXG4gICAgcGx1bTogICAgICAgICAgICAgICAgICAgMHhkZGEwZGQsXHJcbiAgICBwb3dkZXJibHVlOiAgICAgICAgICAgICAweGIwZTBlNixcclxuICAgIHJvc3licm93bjogICAgICAgICAgICAgIDB4YmM4ZjhmLFxyXG4gICAgcm95YWxibHVlOiAgICAgICAgICAgICAgMHg0MTY5ZTEsXHJcbiAgICBzYWRkbGVicm93bjogICAgICAgICAgICAweDhiNDUxMyxcclxuICAgIHNhbG1vbjogICAgICAgICAgICAgICAgIDB4ZmE4MDcyLFxyXG4gICAgc2FuZHlicm93bjogICAgICAgICAgICAgMHhmNGE0NjAsXHJcbiAgICBzZWFncmVlbjogICAgICAgICAgICAgICAweDJlOGI1NyxcclxuICAgIHNlYXNoZWxsOiAgICAgICAgICAgICAgIDB4ZmZmNWVlLFxyXG4gICAgc2llbm5hOiAgICAgICAgICAgICAgICAgMHhhMDUyMmQsXHJcbiAgICBza3libHVlOiAgICAgICAgICAgICAgICAweDg3Y2VlYixcclxuICAgIHNsYXRlYmx1ZTogICAgICAgICAgICAgIDB4NmE1YWNkLFxyXG4gICAgc2xhdGVncmF5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbGF0ZWdyZXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNub3c6ICAgICAgICAgICAgICAgICAgIDB4ZmZmYWZhLFxyXG4gICAgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgMHgwMGZmN2YsXHJcbiAgICBzdGVlbGJsdWU6ICAgICAgICAgICAgICAweDQ2ODJiNCxcclxuICAgIHRhbjogICAgICAgICAgICAgICAgICAgIDB4ZDJiNDhjLFxyXG4gICAgdGhpc3RsZTogICAgICAgICAgICAgICAgMHhkOGJmZDgsXHJcbiAgICB0b21hdG86ICAgICAgICAgICAgICAgICAweGZmNjM0NyxcclxuICAgIHR1cnF1b2lzZTogICAgICAgICAgICAgIDB4NDBlMGQwLFxyXG4gICAgdmlvbGV0OiAgICAgICAgICAgICAgICAgMHhlZTgyZWUsXHJcbiAgICB3aGVhdDogICAgICAgICAgICAgICAgICAweGY1ZGViMyxcclxuICAgIHdoaXRlc21va2U6ICAgICAgICAgICAgIDB4ZjVmNWY1LFxyXG4gICAgeWVsbG93Z3JlZW46ICAgICAgICAgICAgMHg5YWNkMzIsXHJcbiAgICByZWJlY2NhcHVycGxlOiAgICAgICAgICAweDY2MzM5OSxcclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgRm9udEZhY2VUeXBlcyBmcm9tIFwiLi9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0ICogYXMgVXRpbEZ1bmNzIGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZm9udCBmYWNlIGRlZmluaXRpb24gb2JqZWN0IHRvIHRoZSBDU1Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9udEZhY2VUb1N0cmluZyggZm9udGZhY2U6IEZvbnRGYWNlVHlwZXMuSUZvbnRGYWNlKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZvbnRmYWNlIHx8ICFmb250ZmFjZS5mb250RmFtaWx5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gXCJ7XCI7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gZm9udGZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcyArPSBgJHtVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0cmV0Y2hUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHJldGNoX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IFV0aWxGdW5jcy5Dc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IFV0aWxGdW5jcy5Dc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3R5bGVUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHlsZV9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy52YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBvYmxpcXVlICR7VXRpbEZ1bmNzLkNzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHYpfWAsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBvYmxpcXVlICR7VXRpbEZ1bmNzLmFycmF5VG9TdHJpbmcoIHYsIFV0aWxGdW5jcy5Dc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyl9YFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFdlaWdodFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy52YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBVdGlsRnVuY3MuQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3JjVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IGZvbnRTaW5nbGVTcmNUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTaW5nbGVTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBVdGlsRnVuY3Mub2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcImxvY2FsXCIsIHYgPT4gYGxvY2FsKCR7dn0pYF0sXHJcbiAgICAgICAgW1widXJsXCIsIHYgPT4gYHVybCgke3Z9KWBdLFxyXG4gICAgICAgIFtcImZvcm1hdFwiLCB2ID0+IGBmb3JtYXQoJHtmb250Rm9ybWF0VG9TdHJpbmcodil9KWBdXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250Rm9ybWF0VG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gYFxcXCIke3Z9XFxcImAsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgR3JhZGllbnRTdG9wT3JIaW50LCBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLCBMaW5lYXJHcmFkQW5nbGUsIFJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICBSYWRpYWxHcmFkaWVudEV4dGVudCwgQ3Jvc3NGYWRlUGFyYW1cclxufSBmcm9tIFwiLi9JbWFnZVR5cGVzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCB7Q3NzUG9zaXRpb24sIEV4dGVuZGVkLCBTaW1wbGVDc3NQb3NpdGlvbiwgQ3NzQW5nbGV9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmcsIElOdW1iZXJNYXRoQ2xhc3MsIENzc0FuZ2xlTWF0aCwgcG9zaXRpb25Ub1N0cmluZywgQ3NzUGVyY2VudE1hdGh9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnQsXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHYubGVuZ3RoID09PSAwID8gXCJcIiA6IHYubGVuZ3RoID09PSAxID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZbMF0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nKCB2IGFzIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIG1hdGhDbGFzcylcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyTWF0aENsYXNzPFQ+KTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzZWNvbmRTdG9wID0gdmFsLmxlbmd0aCA+IDIgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzJdKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7Y29sb3JUb1N0cmluZyh2YWxbMF0pfSAke21hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2YWxbMV0pfSAke3NlY29uZFN0b3B9YDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBhbmdsZTogTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBhbmdsZSA/IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSkgKyBcIixcIiA6IFwiXCI7XHJcbiAgICBsZXQgYnVmID0gc3RvcHNPckhpbnRzLm1hcCggc3RvcE9ySGludCA9PiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZyggc3RvcE9ySGludCwgQ3NzUGVyY2VudE1hdGgpKTtcclxuICAgIHJldHVybiBgJHtuYW1lfSgke2FuZ2xlU3RyaW5nfSR7YnVmLmpvaW4oXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHNoYXBlOiBSYWRpYWxHcmFkaWVudFNoYXBlLFxyXG4gICAgZXh0ZW50OiBSYWRpYWxHcmFkaWVudEV4dGVudCwgcG9zOiBDc3NQb3NpdGlvbixcclxuICAgIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNoYXBlU3RyaW5nID0gc2hhcGUgPyBzaGFwZSA6IFwiXCI7XHJcbiAgICBsZXQgZXh0ZW50U3RyaW5nID0gZXh0ZW50ID8gZXh0ZW50IDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3NpdGlvblRvU3RyaW5nKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IHNoYXBlIHx8IGV4dGVudFN0cmluZyB8fCBwb3MgPyBgJHtzaGFwZVN0cmluZ30gJHtleHRlbnRTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NQZXJjZW50TWF0aCkpO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7d2hhdEFuZFdoZXJlfSR7YnVmLmpvaW4oXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvczogU2ltcGxlQ3NzUG9zaXRpb24sXHJcbiAgICBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IGFuZ2xlID8gYGZyb20gJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHBvc1N0cmluZyA9IHBvcyA/IGBhdCAke3Bvc2l0aW9uVG9TdHJpbmcoIHBvcyl9YCA6IFwiXCI7XHJcbiAgICBsZXQgd2hhdEFuZFdoZXJlID0gYW5nbGUgfHwgcG9zID8gYCR7YW5nbGVTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NBbmdsZU1hdGgpKTtcclxuICAgIHJldHVybiBgY29uaWMtZ3JhZGllbnQoJHt3aGF0QW5kV2hlcmV9JHtidWYuam9pbihcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbHVlVG9TdHJpbmcodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHZhbHVlVG9TdHJpbmcoIGFyZ3MsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjcm9zc0ZhZGVQYXJhbVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGNyb3NzLWZhZGUoJHtwYXJhbXNTdHJpbmd9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgVXRpbEZ1bmNzIGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCAqIGFzIE1lZGlhVHlwZXMgZnJvbSBcIi4vTWVkaWFUeXBlc1wiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzcGVjdFJhdGlvVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5Bc3BlY3RSYXRpb0ZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsWzBdICsgXCIvXCIgKyB2YWxbMV07XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoRmVhdHVyZVRvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuTGVuZ3RoRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcInB4XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLlJlc29sdXRpb25GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwiZHBpXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxudHlwZSBjb252ZXJ0RnVuY1R5cGU8SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9ICh2YWw6IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFGZWF0dXJlSW5mbyByZXByZXNlbnRzIGluZm9ybWF0aW9uIHRoYXQgd2Uga2VlcCBmb3Igc3R5bGUgcHJvcGVydGllc1xyXG4gKi9cclxudHlwZSBNZWRpYUZlYXR1cmVJbmZvPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSBjb252ZXJ0RnVuY1R5cGU8Sz4gfCBib29sZWFuIHxcclxuICAgIHtcclxuICAgICAgICAvKiogRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBmcm9tIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxuICAgICAgICBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlPEs+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiBkZWZpbmVkLCBpbmRpY2F0ZXMgdGhlIHZhbHVlLCB3aGljaCB3ZSB3aWxsIG5vdCBwdXQgaW50byBDU1Mgc3RyaW5nLiBUaGlzIGlzIG5lZWRlZCBmb3JcclxuICAgICAgICAgKiBtZWRpYSBmZWF0dXJlcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgd2l0aG91dCB0aGUgdmFsdWUsIGUuZy4gY29sb3Igb3IgY29sb3ItaW5kZXguXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmZWF0dXJlIGlzIGEgXCJyYW5nZVwiIGZlYXR1cmU7IHRoYXQgaXMsIGNhbiBiZSB1c2VkIGluIGFuXHJcbiAgICAgICAgICogZXhwcmVzc2lvbiAoYSA8PSBmZWF0dXJlIDw9IGIpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhUXVlcnlUb1N0cmluZyggcXVlcnk6IE1lZGlhVHlwZXMuTWVkaWFRdWVyeSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKVxyXG4gICAgICAgIHJldHVybiBxdWVyeS5tYXAoIChzaW5nbGVRdWVyeSkgPT4gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBzaW5nbGVRdWVyeSkpLmpvaW4oXCIsIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBNZWRpYVR5cGVzLlNpbmdsZU1lZGlhUXVlcnkpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IG1lZGlhVHlwZSA9IHF1ZXJ5LiRtZWRpYVR5cGU7XHJcbiAgICBsZXQgb25seSA9IHF1ZXJ5LiRvbmx5O1xyXG4gICAgbGV0IG5lZ2F0ZSA9IHF1ZXJ5LiRuZWdhdGU7XHJcblxyXG4gICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG1lZGlhVHlwZSlcclxuICAgICAgICBpdGVtcy5wdXNoKCAob25seSA/IFwib25seSBcIiA6IFwiXCIpICsgbWVkaWFUeXBlKTtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBxdWVyeSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiRcIikpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocXVlcnlbcHJvcE5hbWVdKVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCBgKCR7bWVkaWFGZWF0dXJlVG9TdHJpbmcoIHByb3BOYW1lLCBxdWVyeVtwcm9wTmFtZV0pfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmVnYXRlID8gXCJub3QgXCIgOiBcIlwifSR7aXRlbXMuam9pbihcIiBhbmQgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBmZWF0dXJlIHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGZWF0dXJlVG9TdHJpbmcoIGZlYXR1cmVOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmZWF0dXJlTmFtZSB8fCBwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgXHJcbiAgICBsZXQgaW5mbzogTWVkaWFGZWF0dXJlSW5mbyA9IG1lZGlhRmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xyXG5cclxuICAgIGxldCByZWFsRmVhdHVyZU5hbWUgPSBVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIGZlYXR1cmVOYW1lKTtcclxuXHJcbiAgICAvLyBpZiBkZWZhdWx0VmFsdWUgaXMgZGVmaW5lZCBhbmQgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGVxdWFsIHRvIGl0LCBubyB2YWx1ZSBzaG91bGQgYmUgcmV0dXJuZWQuXHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmRlZmF1bHRWYWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wVmFsID09PSBkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IFwiXCIgOiByZWFsRmVhdHVyZU5hbWU7XHJcblxyXG4gICAgbGV0IGNvbnZlcnQgPSB0eXBlb2YgaW5mbyA9PT0gXCJmdW5jdGlvblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5jb252ZXJ0IDogdW5kZWZpbmVkO1xyXG4gICAgbGV0IGlzUmFuZ2UgPSB0eXBlb2YgaW5mbyA9PT0gXCJib29sZWFuXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmlzUmFuZ2UgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoaXNSYW5nZSAmJiAhdmFsdWVPbmx5ICYmIEFycmF5LmlzQXJyYXkoIHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzMSA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWxbMF0sIGNvbnZlcnQpO1xyXG4gICAgICAgIGxldCBzMiA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWxbMV0sIGNvbnZlcnQpO1xyXG4gICAgICAgIHJldHVybiBgJHtzMX0gPD0gJHtyZWFsRmVhdHVyZU5hbWV9IDw9ICR7czJ9YDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWwsIGNvbnZlcnQpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzIDogcmVhbEZlYXR1cmVOYW1lICsgXCI6XCIgKyBzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWw6IGFueSwgY29udmVydD86IGNvbnZlcnRGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGlmIChjb252ZXJ0KVxyXG4gICAgICAgIHJldHVybiBjb252ZXJ0KCBwcm9wVmFsKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggcHJvcFZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcHJvcFZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBtYXhBc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIGNvbG9yOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGhlaWdodDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbkhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtb25vY2hyb21lOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgcmVzb2x1dGlvbjogeyBjb252ZXJ0OiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5SZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4UmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIHdpZHRoOiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluV2lkdGg6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFdpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7U2VsZWN0b3JJdGVtLCBDc3NTZWxlY3Rvcn0gZnJvbSBcIi4vU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge0NsYXNzUnVsZSwgSURSdWxlLCBTZWxlY3RvclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9TdHlsZVJ1bGVzXCJcclxuaW1wb3J0IHt2YWx1ZVRvU3RyaW5nfSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBzZWxlY3Rvci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yIHVzaW5nIHRoZSBnaXZlbiB0ZW1wbGF0ZSBzdHJpbmcgd2l0aCBvcHRpb25hbFxyXG4gKiBwbGFjZWhvbGRlcnMgKGUuZy4gezB9KSwgd2hpY2ggd2lsbCBiZSByZXBsYWNlZCBieSBuYW1lcyBvZiB0YWdzLCBjbGFzc2VzIGFuZCBJRHMgYW5kIG90aGVyXHJcbiAqIHBvc3NpYmxlIHR5cGVzLlxyXG4gKi9cclxuZnVuY3Rpb24gc2VsZWN0b3JJdGVtVG9TdHJpbmcoIHZhbDogU2VsZWN0b3JJdGVtKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcblx0XHRmcm9tTnVsbDogdiA9PiBcIlwiLFxyXG5cdFx0ZnJvbU9iamVjdDogdiA9PiB7XHJcblx0XHRcdGlmICh2IGluc3RhbmNlb2YgQ2xhc3NSdWxlKVxyXG5cdFx0XHRcdHJldHVybiB2LmNzc05hbWU7XHJcblx0XHRcdGVsc2UgaWYgKHYgaW5zdGFuY2VvZiBJRFJ1bGUpXHJcblx0XHRcdFx0cmV0dXJuIHYuY3NzTmFtZTtcclxuXHRcdFx0ZWxzZSBpZiAodiBpbnN0YW5jZW9mIFNlbGVjdG9yUnVsZSlcclxuXHRcdFx0XHRyZXR1cm4gdi5zZWxlY3RvclRleHQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyh2KTtcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdHdvLW51bWJlciB0dXBsZSB0byBhIHN0cmluZyBpbiB0aGUgZm9ybSBBbitCLlxyXG4gKi9cclxuZnVuY3Rpb24gbnRoVHVwbGVUb1N0cmluZyggdmFsOiBbbnVtYmVyLCBudW1iZXI/XSk6IHN0cmluZ1xyXG57XHJcblx0bGV0IHYwID0gdmFsdWVUb1N0cmluZyggdmFsWzBdKTtcclxuXHRsZXQgdjFuID0gdmFsWzFdO1xyXG5cclxuXHQvLyB0aGUgJyF2MW4nIGV4cHJlc3Npb24gY292ZXJzIG51bGwsIHVuZGVmaW5lZCBhbmQgMC5cclxuXHRsZXQgdjEgPSAhdjFuID8gXCJcIiA6IHYxbiA+IDAgPyBcIitcIiArIHZhbHVlVG9TdHJpbmcoIHYxbikgOiBcIi1cIiArIHZhbHVlVG9TdHJpbmcoIC12MW4pO1xyXG5cclxuXHRyZXR1cm4gYCR7djB9biR7djF9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yVG9TdHJpbmcoIHZhbDogQ3NzU2VsZWN0b3IpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuXHRcdGZyb21Bbnk6IHNlbGVjdG9ySXRlbVRvU3RyaW5nLFxyXG5cdFx0YXJyYXlTZXBhcmF0b3I6IFwiXCJcclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IgdXNpbmcgdGhlIGdpdmVuIHRlbXBsYXRlIHN0cmluZyB3aXRoIG9wdGlvbmFsXHJcbiAqIHBsYWNlaG9sZGVycyAoZS5nLiB7MH0pLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5hbWVzIG9mIHRhZ3MsIGNsYXNzZXMgYW5kIElEcyBhbmQgb3RoZXJcclxuICogcG9zc2libGUgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0U2VsZWN0b3IoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcGFyYW1zOiBTZWxlY3Rvckl0ZW1bXSk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBudW1iZXIgb2YgcGFyYW1ldGVycyBpcyBhbHdheXMgMSBsZXNzIHRoYW4gdGhlIG51bWJlciBvZiBzdHJpbmcgcGFydHNcclxuICAgIGxldCBwYXJhbXNMZW4gPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgaWYgKHBhcmFtc0xlbiA9PT0gMClcclxuICAgICAgICByZXR1cm4gcGFydHNbMF07XHJcblxyXG4gICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcGFyYW1zTGVuOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgYnVmLnB1c2goIHBhcnRzW2ldKTtcclxuICAgICAgICBidWYucHVzaCggc2VsZWN0b3JJdGVtVG9TdHJpbmcoIHBhcmFtc1tpXSkpO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gYCR7YnVmLmpvaW4oXCJcIil9JHtwYXJ0c1twYXJhbXNMZW5dfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBwYXJhbWV0ZXJpemVkIHBzZXVkbyBlbnRpdHkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHNldWRvRW50aXR5VG9TdHJpbmcoIGVudGl0eU5hbWU6IHN0cmluZywgdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZW50aXR5TmFtZSlcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRpZiAoZW50aXR5TmFtZS5zdGFydHNXaXRoKCBcIjpudGhcIikpXHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7IGZyb21BcnJheTogbnRoVHVwbGVUb1N0cmluZyB9KTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIFN0eWxlVHlwZXMgZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7SVN0eWxlc2V0fSBmcm9tIFwiLi9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtFeHRlbmRlZCwgTXVsdGlDc3NQb3NpdGlvbiwgQ3NzUmFkaXVzLCBPbmVPck1hbnl9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FtZWxUb0Rhc2gsIHZhbHVlVG9TdHJpbmcsIGFycmF5VG9TdHJpbmcsIG9iamVjdFRvU3RyaW5nLCBJVmFsdWVDb252ZXJ0T3B0aW9ucyxcclxuICAgIHBvc2l0aW9uVG9TdHJpbmcsIG11bHRpUG9zaXRpb25Ub1N0cmluZywgQ3NzTGVuZ3RoTWF0aCwgQ3NzVGltZU1hdGgsIENzc051bWJlck1hdGgsXHJcbiAgICBDc3NBbmdsZU1hdGgsIENzc0ZyZXF1ZW5jeU1hdGgsIENzc0ZyYWN0aW9uTWF0aCwgQ3NzUGVyY2VudE1hdGgsIENzc1Jlc29sdXRpb25NYXRoXHJcbn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1ZhclJ1bGVcIjtcclxuXHJcblxyXG5cclxuLy8gaGVscGVyIGZ1bmN0aW9ucyBmb3Igc3R5bGUgcHJvcGVydHkgY29udmVyc2lvbnNcclxuZnVuY3Rpb24gbXVsdGlQb3NpdGlvblRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPE11bHRpQ3NzUG9zaXRpb24+KTogc3RyaW5nIHsgcmV0dXJuIG11bHRpUG9zaXRpb25Ub1N0cmluZyggdmFsLCBcIixcIik7IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgY29udmVydGluZyBDU1MgcHJvcGVydHkgdHlwZXMgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkFuaW1hdGlvbl9TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY291bnRcIiwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiLFxyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICBcIm5hbWVcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkFuaW1hdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxPbmVPck1hbnk8U3R5bGVUeXBlcy5UaW1pbmdGdW5jdGlvbl9TaW5nbGU+Pik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlciggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBzdGVwcygke3ZhbH0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXkoIHZhbDogYW55W10pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsIGFzIFN0eWxlVHlwZXMuVGltaW5nRnVuY3Rpb25fU2luZ2xlKVxyXG4gICAgICAgIDogYXJyYXlUb1N0cmluZyggdmFsLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUsIFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UaW1pbmdGdW5jdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoIDwgMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBzdGVwcyBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCB2WzBdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgc3RlcHMoJHt2WzBdfSR7di5sZW5ndGggPT09IDIgPyBcIixcIiArIHZbMV0gOiBcIlwifSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPCAwIHx8IHZbMF0gPiAxIHx8IHZbMl0gPCAwIHx8IHZbMl0gPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4gWW91IGhhdmUgJHt2WzBdfSBhbmQgJHt2WzJdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dlswXX0sJHt2WzFdfSwke3ZbMl19LCR7dlszXX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkJhY2tncm91bmRfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgXCJpbWFnZVwiLFxyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIHBvc2l0aW9uVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInNpemVcIiwgQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiLFxyXG4gICAgICAgIFwiYXR0YWNobWVudFwiLFxyXG4gICAgICAgIFwib3JpZ2luXCIsXHJcbiAgICAgICAgXCJjbGlwXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuQmFja2dyb3VuZF9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuQmFja2dyb3VuZFNpemVfU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkJveFNoYWRvd19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJpbnNldFwiLCB2ID0+IHYgPyBcImluc2V0XCIgOiBcIlwiXSxcclxuICAgICAgICBbXCJ4XCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wieVwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImJsdXJcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJzcHJlYWRcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvcm5lciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVDb3JuZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSYWRpdXM+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCB2WzBdKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdHdvIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBhcnJheVRvU3RyaW5nKCB2WzBdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHMgKz0gXCIgLyBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgYXJyYXlUb1N0cmluZyggdlsxXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaW5nbGUgTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVRvU3RyaW5nKCB2LCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkJvcmRlcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnVmOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodlswXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlswXSkpXHJcblxyXG4gICAgICAgICAgICBpZiAodlsxXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHZhbHVlVG9TdHJpbmcodlsxXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZbMl0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb2xvclRvU3RyaW5nKHZbMl0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWYuam9pbihcIiBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1ucyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbHVtbnNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkNvbHVtbnNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHZbMF0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsxXSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjdXJzb3Igc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjdXJzb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkN1cnNvcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIC8vIHRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkuIElmIGl0IGlzIGFuIGFycmF5LFxyXG4gICAgLy8gaWYgdGhlIGZpcnN0IGVsZW1lbnQgaXMgYSBmdW5jdGlvbiwgdGhlbiB3ZSBuZWVkIHRvIHVzZSBzcGFjZSBhcyBhIHNlcGFyYXRvciAoYmVjYXVzZVxyXG4gICAgLy8gdGhpcyBpcyBhIFVSTCB3aXRoIG9wdGlvbmFsIG51bWJlcnMgZm9yIHRoZSBob3Qgc3BvdCk7IG90aGVyd2lzZSwgd2UgdXNlIGNvbW1hIGFzIGFcclxuICAgIC8vIHNlcGFyYXRvciAtIGJlY2F1c2UgdGhlc2UgYXJlIG11bHRpcGxlIGN1cnNvciBkZWZpbml0aW9ucy5cclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodi5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb1N0cmluZyh2KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZbMV0gPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdiwgeyBhcnJheVNlcGFyYXRvcjogXCIgXCJ9KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlJdGVtRnVuYzogY3Vyc29yVG9TdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGZsZXggc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBmbGV4VG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5GbGV4X1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuam9pbiggXCIgXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdlswXSArIFwiIFwiICsgdlsxXSArIFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udF9mcm9tT2JqZWN0KCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcInN0eWxlXCIsIGZvbnRTdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcInZhcmlhbnRcIixcclxuICAgICAgICBcIndlaWdodFwiLFxyXG4gICAgICAgIFwic3RyZXRjaFwiLFxyXG4gICAgICAgIFtcInNpemVcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJsaW5lSGVpZ2h0XCIsIHYgPT4gdi50b1N0cmluZygpICwgXCIvXCJdLFxyXG4gICAgICAgIFwiZmFtaWx5XCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuRm9udF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IFwib2JsaXF1ZSBcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCB2KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGV4dERlY29yYXRpb25fZnJvbU9iamVjdCggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlRleHREZWNvcmF0aW9uX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBcImxpbmVcIixcclxuICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgW1widGhpY2tuZXNzXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UcmFuc2l0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJwcm9wZXJ0eVwiLCBjYW1lbFRvRGFzaF0sXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY3Rpb25zIGZvciBoYW5kbGluZyBTdHlsZXNldHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LiBBbGwgcmVndWxhciBwcm9wZXJ0aWVzIGFyZVxyXG4gKiByZXBsYWNlZC4gUHJvcGVydGllcyBcIi0tXCIgYW5kIFwiIVwiIGdldCBzcGVjaWFsIHRyZWF0bWVudCBiZWNhdXNlIHRoZXkgbWlnaHQgYmUgYXJyYXlzLlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gc291cmNlIFxyXG4gKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIHRhcmdldCBzdHlsZXNldCBpZiBub3QgbnVsbCBvciBhIG5ldyBzdHlsZXNldCBvdGhlcndpc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldHMoIHRhcmdldDogU3R5bGVUeXBlcy5TdHlsZXNldCwgc291cmNlOiBTdHlsZVR5cGVzLlN0eWxlc2V0KTogU3R5bGVUeXBlcy5TdHlsZXNldFxyXG57XHJcbiAgICBpZiAoIXNvdXJjZSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG5cclxuICAgIC8vIGlmIHRhcmdldCBpcyBub3QgZGVmaW5lZCwgY3JlYXRlIGl0IGFzIGFuIGVtcHR5IG9iamVjdC4gVGhpcyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBhZnRlclxyXG4gICAgLy8gcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2UgYXJlIGNvcGllZCB0byBpdC5cclxuICAgIGlmICghdGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkLiBJZiB3ZSBkb24ndCBoYXZlXHJcbiAgICAvLyBlaXRoZXIsIHdlIGNhbiBqdXN0IHVzZSB0aGUgT2JqZWN0LmFzc2lnbiBmdW5jdGlvbi5cclxuICAgIGxldCBzb3VyY2VDdXN0b21Qcm9wcyA9IHNvdXJjZVtcIi0tXCJdO1xyXG4gICAgbGV0IHNvdXJjZUltcFByb3BzID0gc291cmNlW1wiIVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMgJiYgIXNvdXJjZUltcFByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldEN1c3RvbVByb3BzID0gdGFyZ2V0W1wiLS1cIl07XHJcbiAgICAgICAgdGFyZ2V0W1wiLS1cIl0gPSAhdGFyZ2V0Q3VzdG9tUHJvcHMgPyBzb3VyY2VDdXN0b21Qcm9wcyA6IHRhcmdldEN1c3RvbVByb3BzLmNvbmNhdCggc291cmNlQ3VzdG9tUHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGltcG9ydGFudCBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoc291cmNlSW1wUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldEltcFByb3BzID0gdGFyZ2V0W1wiIVwiXTtcclxuICAgICAgICB0YXJnZXRbXCIhXCJdID0gIXRhcmdldEltcFByb3BzID8gc291cmNlSW1wUHJvcHMgOiB0YXJnZXRJbXBQcm9wcy5jb25jYXQoIHNvdXJjZUltcFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjb3B5IGFsbCBvdGhlciBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZVxyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHNvdXJjZSlcclxuXHR7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIiFcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xyXG5cdH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3R5bGVzZXQgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZyggc3R5bGVzZXQ6IFN0eWxlVHlwZXMuU3R5bGVzZXQpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFzdHlsZXNldClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgaW1wUHJvcHM6IFNldDxzdHJpbmc+IHwgbnVsbCA9IG51bGw7XHJcbiAgICBpZiAoc3R5bGVzZXRbXCIhXCJdKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHZhbHVlIGlzIGVpdGhlciBhIHNpbmdsZSBuYW1lIG9yIGFuIGFycmF5IG9mIG5hbWVzIG9mIENTUyBwcm9wZXJ0aWVzIHRvIGFkZCB0aGUgIWltcG9ydGFudCBmbGFnXHJcbiAgICAgICAgaW1wUHJvcHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICAgICAgICBsZXQgaW1wUHJvcFZhbCA9IHN0eWxlc2V0W1wiIVwiXSBhcyAoc3RyaW5nIHwgc3RyaW5nW10pO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW1wUHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgaW1wUHJvcHMuYWRkKCBpbXBQcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGltcFByb3BWYWwuZm9yRWFjaCggdiA9PiBpbXBQcm9wcyEuYWRkKCB2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHR7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIiFcIilcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIi0tXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIG9mIHRoZSBcIi0tXCIgcHJvcGVydHksIHdoaWNoIGlzIGFuIGFycmF5IHdoZXJlIGVhY2ggaXRlbSBpc1xyXG4gICAgICAgICAgICAvLyBhIHR3by1pdGVtIG9yIHRocmVlLWl0ZW0gYXJyYXlcclxuICAgICAgICAgICAgbGV0IHByb3BWYWwgPSBzdHlsZXNldFtwcm9wTmFtZV0gYXMgU3R5bGVUeXBlcy5DdXN0b21WYXJTdHlsZVR5cGVbXTtcclxuICAgICAgICAgICAgZm9yKCBsZXQgY3VzdG9tVmFsIG9mIHByb3BWYWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3VzdG9tVmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjdXN0b21Qcm9wVG9TdHJpbmcoIGN1c3RvbVZhbCwgZmFsc2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAgICAgYnVmLnB1c2goIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZSBhcyBrZXlvZiBJU3R5bGVzZXQsIHN0eWxlc2V0W3Byb3BOYW1lXSkgK1xyXG4gICAgICAgICAgICAgICAgICAgIChpbXBQcm9wcyAmJiBpbXBQcm9wcy5oYXMoIHByb3BOYW1lKSA/IFwiICFpbXBvcnRhbnRcIiA6IFwiXCIpKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIC8vIGpvaW4gYWxsIGVsZW1lbnRzIGluIHRoZSBhcnJheSBleGNlcHQgbnVsbHMsIHVuZGVmaW5lZCBhbmQgZW1wdHkgc3RyaW5nc1xyXG4gICAgcmV0dXJuIGB7JHtidWYuZmlsdGVyKCAoaXRlbSkgPT4gISFpdGVtKS5qb2luKFwiO1wiKX19YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgZGVmaW5pdGlvbiB0byBzdHJpbmcuXHJcbiAqIEBwYXJhbSBwcm9wVmFsIFxyXG4gKiBAcGFyYW0gdmFsdWVPbmx5IFxyXG4gKi9cclxuZnVuY3Rpb24gY3VzdG9tUHJvcFRvU3RyaW5nKCBwcm9wVmFsOiBTdHlsZVR5cGVzLkN1c3RvbVZhclN0eWxlVHlwZSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXByb3BWYWwpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IHZhck5hbWU6IHN0cmluZztcclxuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xyXG4gICAgbGV0IHZhbHVlOiBhbnk7XHJcbiAgICBpZiAocHJvcFZhbC5sZW5ndGggPT09IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyTmFtZSA9IChwcm9wVmFsWzBdIGFzIFZhclJ1bGUpLmNzc05hbWU7XHJcbiAgICAgICAgdGVtcGxhdGUgPSBwcm9wVmFsWzBdLnRlbXBsYXRlO1xyXG4gICAgICAgIHZhbHVlID0gcHJvcFZhbFsxXVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSBwcm9wVmFsWzBdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAoIXZhck5hbWUuc3RhcnRzV2l0aChcIi0tXCIpKVxyXG4gICAgICAgICAgICB2YXJOYW1lID0gXCItLVwiICsgdmFyTmFtZTtcclxuXHJcbiAgICAgICAgdGVtcGxhdGUgPSBwcm9wVmFsWzFdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSB8fCAhdGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgICAgICB2YWx1ZSA9IHByb3BWYWxbMl07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZhclZhbHVlID0gc3R5bGVQcm9wVG9TdHJpbmcoIHRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gdmFyVmFsdWUgOiBgJHt2YXJOYW1lfToke3ZhclZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0eWxlIHN0cmluZ1xyXG4gKiBAcGFyYW0gc3R5bGUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVQcm9wVG9TdHJpbmcoXHJcbiAgICBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnksIHZhbHVlT25seT86IGJvb2xlYW4pOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFwcm9wTmFtZSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIHByb3BlcnR5XHJcbiAgICBsZXQgaW5mbzogYW55ID0gU3R5bGVQcm9wZXJ0eUluZm9zW3Byb3BOYW1lXTtcclxuXHJcbiAgICBsZXQgdmFyVmFsdWUgPSAhaW5mb1xyXG4gICAgICAgID8gdmFsdWVUb1N0cmluZyggcHJvcFZhbClcclxuICAgICAgICA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgID8gdmFsdWVUb1N0cmluZyggcHJvcFZhbCwgaW5mbyBhcyBJVmFsdWVDb252ZXJ0T3B0aW9ucylcclxuICAgICAgICAgICAgOiAoaW5mbyBhcyBQcm9wVG9TdHJpbmdGdW5jKSggcHJvcFZhbCk7XHJcblxyXG4gICAgaWYgKCF2YXJWYWx1ZSAmJiAhdmFsdWVPbmx5KVxyXG4gICAgICAgIHZhclZhbHVlID0gXCJpbml0aWFsXCI7XHJcbiAgICAgICAgXHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gdmFyVmFsdWUgOiBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfToke3ZhclZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZ2lzdHJ5IG9mIENTUyBwcm9wZXJ0aWVzIHRoYXQgc3BlY2lmaWVzIGhvdyB0aGVpciB2YWx1ZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIC8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgcHJvcGVydHkgdmFsdWUgYW5kIGNvbnZlcnRzIGl0IHRvIHN0cmluZyAqL1xyXG4vLyB0eXBlIFByb3BUb1N0cmluZ0Z1bmM8SyBleHRlbmRzIFN0eWxlVHlwZXMuVmFyVGVtcGxhdGVOYW1lID0gYW55PiA9ICh2YWw6IFN0eWxlVHlwZXMuVmFyVmFsdWVUeXBlPEs+KSA9PiBzdHJpbmc7XHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHByb3BlcnR5IHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxudHlwZSBQcm9wVG9TdHJpbmdGdW5jID0gKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vIEhlbHBlciBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIGluZGljYXRlIHRoYXQgdmFsdWVzIGluIGFuIGFycmF5IHNob3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEuXHJcbi8vIFdlIHVzZSBpdCBtYW55IHRpbWVzIGluIHRoZSBzdHVjdHVyZSBiZWxvdy5cclxubGV0IGNvbW1hQXJyYXlTZXBhcmF0b3IgPSB7IGFycmF5U2VwYXJhdG9yOiBcIixcIiB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHRoZSBTdHlsZVByb3BlcnR5SW5mbyBvYmplY3RzIGRlc2NyaWJpbmcgY3VzdG9tIGFjdGlvbnMgbmVjZXNzYXJ5IHRvXHJcbiAqIGNvbnZlcnQgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBDU1MtY29tcGxpYW50IHN0cmluZy5cclxuICovXHJcbmNvbnN0IFN0eWxlUHJvcGVydHlJbmZvczogeyBbSyBpbiBTdHlsZVR5cGVzLlZhclRlbXBsYXRlTmFtZV0/OiAoUHJvcFRvU3RyaW5nRnVuYyB8IElWYWx1ZUNvbnZlcnRPcHRpb25zKSB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uRGVsYXk6IENzc1RpbWVNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBDc3NUaW1lTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYW5pbWF0aW9uTmFtZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nLFxyXG5cclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZENsaXA6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBiYWNrZ3JvdW5kT3JpZ2luOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBtdWx0aVBvc2l0aW9uVG9TdHJpbmdXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSxcclxuICAgIGJhc2VsaW5lU2hpZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcjogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQmxvY2tFbmRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0V2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbTogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlckNvbG9yOiB7XHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW5saW5lRW5kOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZUVuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lRW5kV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZVN0YXJ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZVN0YXJ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJTcGFjaW5nOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvcmRlclRvcDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcldpZHRoOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm94U2hhZG93OiB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBjYXJldENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgY2xpcDogIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYHJlY3QoJHtDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSh2KX1gXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBjb2x1bW5HYXA6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGU6IGJvcmRlclRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZUNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVN0eWxlOiB2YWx1ZVRvU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGNvbHVtbnM6IGNvbHVtbnNUb1N0cmluZyxcclxuICAgIGNvbHVtbldpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBjdXJzb3I6IGN1cnNvclRvU3RyaW5nLFxyXG5cclxuICAgIGZpbGw6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBmaWxsT3BhY2l0eTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGZsZXg6IGZsZXhUb1N0cmluZyxcclxuICAgIGZsZXhCYXNpczogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZmxvb2RDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGZvbnQ6IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBmb250X2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICBmb250U2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZm9udFN0eWxlOiBmb250U3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBnYXA6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgZ3JpZENvbHVtbkdhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZ3JpZFJvd0dhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGhlaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGlubGluZVNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBsZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBsaWdodGluZ0NvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG5cclxuICAgIG1hcmdpbjogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBtYXJnaW5CbG9ja0VuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5JbmxpbmVFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbklubGluZVN0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5MZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5SaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luVG9wOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhCbG9ja1NpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heEhlaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4SW5saW5lU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4V2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heFpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtaW5CbG9ja1NpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1pbkhlaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWluSW5saW5lU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cdG1pbldpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtaW5ab29tOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIG9iamVjdFBvc2l0aW9uOiBwb3NpdGlvblRvU3RyaW5nLFxyXG4gICAgb3V0bGluZTogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBvdXRsaW5lQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBvdXRsaW5lT2Zmc2V0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBvdXRsaW5lU3R5bGU6IHZhbHVlVG9TdHJpbmcsXHJcblxyXG4gICAgcGFkZGluZzogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBwYWRkaW5nQmxvY2tFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdCbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdMZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBhZGRpbmdUb3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHBlcnNwZWN0aXZlOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICBxdW90ZXM6IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiB2ID0+IGBcIiR7dn1cImBcclxuICAgIH0sXHJcblxyXG4gICAgcmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHJvd0dhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIHNjcm9sbE1hcmdpbjogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jazogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja0VuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmU6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpblRvcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZzogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0JvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZTogQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdMZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nUmlnaHQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdUb3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNoYXBlTWFyZ2luOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzdG9wQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcblxyXG4gICAgdGFiU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgdGV4dENvbWJpbmVVcHJpZ2h0OiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBgZGlnaXRzICR7dn1gXHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb246IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmplY3Q6IHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRleHRFbXBoYXNpczoge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIHRleHRJbmRlbnQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIixcclxuICAgIH0sXHJcbiAgICB0ZXh0U2l6ZUFkanVzdDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRvcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbkRlbGF5OiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB3aWxsQ2hhbmdlOiB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogY2FtZWxUb0Rhc2hcclxuICAgIH0sXHJcbiAgICB3b3JkU3BhY2luZzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIHpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgLy8gc3BlY2lhbCBwcm9wZXJ0aWVzIGZvciBJVmFyUnVsZSB0eXBlc1xyXG4gICAgXCJDc3NMZW5ndGhcIjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NBbmdsZVwiOiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzVGltZVwiOiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NSZXNvbHV0aW9uXCI6IENzc1Jlc29sdXRpb25NYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc0ZyZXF1ZW5jeVwiOiBDc3NGcmVxdWVuY3lNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc0ZyYWN0aW9uXCI6IENzc0ZyYWN0aW9uTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NQZXJjZW50XCI6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1Bvc2l0aW9uXCI6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICBcIkNzc0NvbG9yXCI6IGNvbG9yVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc3VwcG9ydHMgcXVlcnkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTdHlsZVR5cGVzLlN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiBvciBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU3R5bGVUeXBlcy5TaW5nbGVTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG5cclxuICAgIGxldCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyggcXVlcnkpLmZpbHRlciggKHByb3BOYW1lKSA9PiBwcm9wTmFtZSAhPSBcIiRuZWdhdGVcIik7XHJcbiAgICBpZiAocHJvcE5hbWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbm90ID0gcXVlcnkuJG5lZ2F0ZSA/IFwibm90XCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuICBgJHtub3R9ICgke3Byb3BOYW1lcy5tYXAoIChwcm9wTmFtZSkgPT5cclxuICAgICAgICBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUgYXMga2V5b2YgSVN0eWxlc2V0LCBxdWVyeVtwcm9wTmFtZV0pKS5qb2luKCBcIikgYW5kIChcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkLCBOdW1iZXJQcm94eSwgQ3NzTnVtYmVyLCBDc3NNdWx0aU51bWJlciwgSU51bWJlck1hdGgsXHJcbiAgICBJQ3NzRnJhY3Rpb25NYXRoLCBDc3NQb3NpdGlvbiwgTXVsdGlDc3NQb3NpdGlvbiwgTnVtYmVyQmFzZSwgTXVsdGlOdW1iZXJCYXNlLFxyXG4gICAgQ3NzTGVuZ3RoLCBDc3NNdWx0aUxlbmd0aCwgQ3NzQW5nbGUsIENzc011bHRpQW5nbGUsIENzc1RpbWUsIENzc011bHRpVGltZSxcclxuICAgIENzc1Jlc29sdXRpb24sIENzc011bHRpUmVzb2x1dGlvbiwgQ3NzRnJlcXVlbmN5LCBDc3NNdWx0aUZyZXF1ZW5jeSwgQ3NzRnJhY3Rpb24sXHJcbiAgICBDc3NNdWx0aUZyYWN0aW9uLCBDc3NQZXJjZW50LCBDc3NNdWx0aVBlcmNlbnQsIElDc3NMZW5ndGhNYXRoLFxyXG4gICAgSUNzc0FuZ2xlTWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLCBJQ3NzVGltZU1hdGgsXHJcbiAgICBOdW1iZXJUeXBlLCBMZW5ndGhUeXBlLCBQZXJjZW50VHlwZSwgQW5nbGVUeXBlLCBUaW1lVHlwZSwgUmVzb2x1dGlvblR5cGUsIEZyZXF1ZW5jeVR5cGUsIEZyYWN0aW9uVHlwZVxyXG59IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpY3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGRhc2hlLWNhc2UgdG8gY2FtZWxDYXNlLCBlLmcuIGZvbnQtc2l6ZSB0byBmb250U2l6ZS5cclxuICogQHBhcmFtIGRhc2hcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2UsIGUuZy4gZm9udFNpemUgdG8gZm9udC1zaXplLlxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhbHVlQ29udmVydE9wdGlvbnMgaW50ZXJmYWNlIGRlZmluZXMgb3B0aW9uYWwgZnVuY3Rpb25zIHRoYXQgY29udmVydHZhbHVlcyBvZiBkaWZmZXJudFxyXG4gKiB0eXBlcyB0byBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVDb252ZXJ0T3B0aW9uc1xyXG57XHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgIGZyb21OdWxsPzogKCB2YWw6IG51bGwgfCB1bmRlZmluZWQpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBzdHJpbmcuIFRoaXMgYWxsb3dzIHRyYW5zZm9ybWluZyBvbmUgc3RyaW5nIHRvIGFub3RoZXIuXHJcbiAgICBmcm9tU3RyaW5nPzogKCB2YWw6IHN0cmluZykgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgIGZyb21Cb29sPzogKHZhbDogYm9vbGVhbikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIG51bWJlclxyXG4gICAgZnJvbU51bWJlcj86ICh2YWw6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gICAgZnJvbUFycmF5PzogKHZhbDogYW55W10pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gb2JqZWN0XHJcbiAgICBmcm9tT2JqZWN0PzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHR5cGUtc3BlY2lmaWMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWRcclxuICAgIGZyb21Bbnk/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgdG8gY29udmVydCBhcnJheSBpdGVtcyBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFycmF5SXRlbUZ1bmM/OiAodjogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gU2VwYXJhdG9yIGZvciBhcnJheSBpdGVtcyAtIHVzZWQgb25seSBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFycmF5U2VwYXJhdG9yPzogc3RyaW5nO1xyXG5cclxuICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIHRoZXNlIGFyZSBhcmd1bWVudHMgdG8gcGFzcyB3aGVuIGludm9raW5nIGl0XHJcbiAgICBmdW5jQXJncz86IGFueVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIHZhbHVlIG9mIGFuIGFyYml0cmFyeSB0eXBlIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhlIG9wdGlvbmFsIG9wdGlvbnMgcGFyYW1ldGVyXHJcbiAqIGNhbiBkZWZpbmUgaG93IHNwZWNpZmljIHR5cGVzIGFyZSBjb252ZXJ0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsdWVUb1N0cmluZyggdmFsOiBhbnksIG9wdGlvbnM/OiBJVmFsdWVDb252ZXJ0T3B0aW9ucyk6IHN0cmluZ1xyXG57XHJcbiAgIGlmICghb3B0aW9ucylcclxuICAgIHtcclxuICAgICAgICAvLyBzdGFuZGFyZCBwcm9jZXNzaW5nOlxyXG4gICAgICAgIC8vIC0gbnVsbC91bmRlZmluZWQgYmVjb21lIGVtcHR5IHN0cmluZy5cclxuICAgICAgICAvLyAtIGNhbGwgdmFsdWVUb1N0cmluZyAocHJveHkgb2JqZWN0cykgaWYgZXhpc3QuXHJcbiAgICAgICAgLy8gLSBmdW5jdGlvbjogY2FsbCB3aXRob3V0IHBhcmFtZXRlcnMuXHJcbiAgICAgICAgLy8gLSBldmVyeXRoaW5nIGVsc2U6IGNhbGwgdG9TdHJpbmcoKS5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlUb1N0cmluZyggdmFsKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcHJvY2Vzc2luZyB3aXRoIG9wdGlvbnMuIEZvciBhbGwgdHlwZXMgZXhjZXB0IG51bGwgYW5kIHN0cmluZywgaWYgdGhlIHR5cGUtc3BlY2lmaWNcclxuICAgICAgICAvLyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgY2FsbCBmcm9tQW55IGlmIGRlZmluZWQuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tTnVsbCA/IG9wdGlvbnMuZnJvbU51bGwoIHZhbCkgOiBcIlwiO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21TdHJpbmcgPyBvcHRpb25zLmZyb21TdHJpbmcoIHZhbCkgOiB2YWw7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bWJlciA/IG9wdGlvbnMuZnJvbU51bWJlciggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIG9wdGlvbnMuZnVuY0FyZ3MgPyB2YWwoIC4uLm9wdGlvbnMuZnVuY0FyZ3MpIDogdmFsKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmZyb21BcnJheSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BcnJheSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VwYXJhdG9yID0gb3B0aW9ucy5hcnJheVNlcGFyYXRvciAhPSBudWxsID8gb3B0aW9ucy5hcnJheVNlcGFyYXRvciA6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5VG9TdHJpbmcoIHZhbCwgb3B0aW9ucy5hcnJheUl0ZW1GdW5jIHx8IG9wdGlvbnMuZnJvbUFueSB8fCB1bmRlZmluZWQsIHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLnZhbHVlVG9TdHJpbmcgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21PYmplY3QpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tT2JqZWN0KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQm9vbCA/IG9wdGlvbnMuZnJvbUJvb2woIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLmZyb21BbnkpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BbnkoIHZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuIGFycmF5IG9mIHRoZSBnaXZlbiB0eXBldG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbiAqIEVsZW1lbnRzIG9mIHRoZSBhcnJheSBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9TdHJpbmcoIHZhbDogYW55W10sIGZ1bmM/OiAodikgPT4gc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiAhdmFsIHx8IHZhbC5sZW5ndGggPT09IDBcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IHZhbC5maWx0ZXIoIHggPT4geCAhPSBudWxsKS5tYXAoIHkgPT4gZnVuYyA/IGZ1bmMoeSkgOiB2YWx1ZVRvU3RyaW5nKCB5KSkuam9pbiggc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG9iamVjdCB0byBhIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgT2JqZWN0IHRvIGNvbnZlcnQgdG8gc3RyaW5nLlxyXG4gKiBAcGFyYW0gdXNlUHJvcE5hbWVzIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBuYW1lcyBvZiB0aGUgb2JqZWN0J3MgcHJvcHJ0aWVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gcHJvcHNBbmRGdW5jcyBBcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgb3B0aW9uYWxseSBmdW5jdGlvbnMuIFRoZSBvcmRlciBvZiB0aGUgbmFtZXMgZGV0ZXJtaW5lcyBpblxyXG4gKiAgICAgd2hpY2ggb3JkZXIgdGhlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzdHJpbmcuIElmIGEgZnVuY3Rpb24gaXMgcHJlc2VudCBmb3IgdGhlIHByb3BlcnR5LFxyXG4gKiAgICAgaXQgd2lsbCBiZSB1c2VkIHRvIGNvbnZlcnQgdGhlIHByb3BlcnR5J3MgdmFsdWUgdG8gdGhlIHN0cmluZy4gSWYgYSBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCwgdGhlbiB0aGVcclxuICogICAgIHByb3BlcnR5IHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHN0cmluZyB1c2luZyB0aGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RUb1N0cmluZyggdmFsOiBhbnkscHJvcHNBbmRGdW5jczogKHN0cmluZyB8IFtzdHJpbmcsICh2YWw6IGFueSkgPT4gc3RyaW5nLCBzdHJpbmc/XSlbXSxcclxuICAgIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIsIHVzZVByb3BOYW1lczogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbCB8fCBwcm9wc0FuZEZ1bmNzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgYnVmOiAoc3RyaW5nKVtdID0gW107XHJcbiAgICBwcm9wc0FuZEZ1bmNzLmZvckVhY2goIHByb3BBbmRGdW5jID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcHJvcE5hbWUgPSB0eXBlb2YgcHJvcEFuZEZ1bmMgPT09IFwic3RyaW5nXCIgPyBwcm9wQW5kRnVuYyA6IHByb3BBbmRGdW5jWzBdO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByb3BWYWwgPSB2YWxbcHJvcE5hbWVdO1xyXG4gICAgICAgICAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZVByb3BOYW1lcylcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBwcm9wTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJlZml4ID0gdHlwZW9mIHByb3BBbmRGdW5jID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogcHJvcEFuZEZ1bmNbMl07XHJcbiAgICAgICAgICAgIGlmIChwcmVmaXgpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggcHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmdW5jID0gdHlwZW9mIHByb3BBbmRGdW5jID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogcHJvcEFuZEZ1bmNbMV07XHJcbiAgICAgICAgICAgIGlmIChmdW5jKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIGZ1bmMoIHByb3BWYWwpKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAocHJvcFZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHZhbHVlVG9TdHJpbmcoIHByb3BWYWwpKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuXHRyZXR1cm4gYnVmLmpvaW4oc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgb2YgZnVuY3Rpb25zIHRoYXQgY29udmVydCBhIG51bWJlciB0byBhIHN0cmluZyAqL1xyXG50eXBlIENvbnZlcnROdW1iZXJGdW5jVHlwZSA9IChuOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nIG9wdGlvbmFsbHkgYXBwZW5kaW5nIHVuaXRzIHRoYXQgY2FuIGJlIGRpZmZlcmVudFxyXG4gKiBmb3IgaW50ZWdlciBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycy5cclxuICogQHBhcmFtIG4gTnVtYmVyIHRvIGNvbnZlcnQgdG8gc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gKiBAcGFyYW0gaW50VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBpbnRlZ2VyLlxyXG4gKiBAcGFyYW0gZmxvYXRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGZsb2F0aW5nIHBvaW50LlxyXG4gKi9cclxuZnVuY3Rpb24gbnVtYmVyVG9TdHJpbmcoIG46IG51bWJlciwgaW50VW5pdDogc3RyaW5nID0gXCJcIiwgZmxvYXRVaW50OiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG4pID8gIG4gKyBpbnRVbml0IDogbiArIGZsb2F0VWludDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTnVtYmVyIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzdHlsZVRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwgeyBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuY30pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIENzc051bWJlciBvciBhcnJheSBvZiBDc3NOdW1iZXIgb2JqZWN0cyB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUtIG9yIG11bHRpLW51bWJlciBzdHlsZSB2YWx1ZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzZXBhcmF0b3IgU3RyaW5nIHRvIHVzZSB0byBzZXBhcmF0ZSBtdWx0aXBsZSB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBtdWx0aVN0eWxlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+PixcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb252ZXJ0RnVuYyxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiB2ID0+IHN0eWxlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIG1hdGhGdW5jIGZ1bmN0aW9uIHJldHVybnMgb25lIG9mIHRoZSBtYXRoZW1hdGljIENTUyBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIG9yIG1vcmVcclxuICogcGFyYW1ldGVycyB3aG9zZSB0eXBlIGlzIGRlcml2ZWQgZnJvbSBOdW1iZXJCYXNlPFQ+LlxyXG4gKi9cclxuZnVuY3Rpb24gbWF0aEZ1bmM8VCBleHRlbmRzIHN0cmluZz4oIG5hbWU6IHN0cmluZywgcGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdLFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7bXVsdGlTdHlsZVRvU3RyaW5nKCBwYXJhbXMsIGNvbnZlcnRGdW5jLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBjYWxjRnVuYyBmdW5jdGlvbiByZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNhbGMoKSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjRnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBudW1iZXIgb2YgcGFyYW1ldGVycyBpcyBhbHdheXMgMSBsZXNzIHRoYW4gdGhlIG51bWJlciBvZiBzdHJpbmcgcGFydHNcclxuICAgIGxldCBwYXJhbXNMZW4gPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgaWYgKHBhcmFtc0xlbiA9PT0gMClcclxuICAgICAgICByZXR1cm4gcGFydHNbMF07XHJcblxyXG4gICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcGFyYW1zTGVuOyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgYnVmLnB1c2goIHBhcnRzW2ldKTtcclxuICAgICAgICBidWYucHVzaCggc3R5bGVUb1N0cmluZyggcGFyYW1zW2ldLCBjb252ZXJ0RnVuYykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgY2FsYygke2J1Zi5qb2luKFwiXCIpfSR7cGFydHNbcGFyYW1zTGVuXX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIHVuaXRGdW5jIGZ1bmN0aW9uIHJldHVybnMgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlbiBudW1iZXIgd2l0aCB0aGUgZ2l2ZW4gdW5pdHMuXHJcbiAqL1xyXG5mdW5jdGlvbiB1bml0RnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggbjogbnVtYmVyLCB1bml0OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gKyB1bml0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtbWJlck1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIEphdmFTY3JpcHQgdHlwZSB0aGV5XHJcbiAqIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyBieSBjYWxsaW5nIGEgZnVuY3Rpb24gc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuICovXHJcbmNsYXNzIE51bWJlck1hdGg8VCBleHRlbmRzIHN0cmluZz4gaW1wbGVtZW50cyBJTnVtYmVyTWF0aDxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggcHJvdGVjdGVkIGNvbnZlcnRGdW5jOiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpXHJcbiAgICB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG51bWJlclRvU3RyaW5nID0gKG46IG51bWJlcik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRGdW5jKCBuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpU3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMsIHNlcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWluXCIsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWF4XCIsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsYW1wKCBtaW46IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBwcmVmOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgbWF4OiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcImNsYW1wXCIsIFttaW4sIHByZWYsIG1heF0sIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxjKCBmb3JtdWxhUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYWxjRnVuYyggZm9ybXVsYVBhcnRzLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZXJjZW50KCBuOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bml0KCBuOiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHVuaXRGdW5jPFQ+KCBuLCB1bml0KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOdW1iZXJNYXRoQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBcInN0YXRpY1wiIHNpZGUgb2YgY2xhc3NlcyBkZXJpdmVkIGZyb20gdGhlXHJcbiAqIE51bWJlck1hdGggY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJNYXRoQ2xhc3M8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgICBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nO1xyXG5cclxuICAgIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZztcclxuXHJcbiAgICBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZztcclxuXHJcbiAgICBuZXcoKTogSU51bWJlck1hdGg8VD47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVbml0bGVzcyBudW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc051bWJlck1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxudW1iZXI+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NOdW1iZXJNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxOdW1iZXJUeXBlPlxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbi50b1N0cmluZygpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc051bWJlcj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc051bWJlck1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlOdW1iZXI+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlOdW1iZXI+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc051bWJlck1hdGguY29udmVydEZ1bmMsIFwiIFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jLCBcIixcIik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc051bWJlck1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzUGVyY2VudE1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxwZXJjZW50PiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzUGVyY2VudE1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFBlcmNlbnRUeXBlPiBpbXBsZW1lbnRzIElDc3NQZXJjZW50TWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiAoTnVtYmVyLmlzSW50ZWdlcihuKSA/IG4gOiBNYXRoLnJvdW5kKG4gKiAxMDApKSArIFwiJVwiOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVBlcmNlbnQ+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUGVyY2VudD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMsIFwiIFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NGcmFjdGlvbk1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTGVuZ3RoXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NMZW5ndGhNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bGVuZ3RoPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTGVuZ3RoTWF0aCBleHRlbmRzIE51bWJlck1hdGg8TGVuZ3RoVHlwZT4gaW1wbGVtZW50cyBJQ3NzTGVuZ3RoTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwicHhcIiwgXCJlbVwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTGVuZ3RoPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTGVuZ3RoPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jLCBcIiBcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIFEoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcIlFcIik7IH1cclxuICAgIHB1YmxpYyBjaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiY2hcIik7IH1cclxuICAgIHB1YmxpYyBjbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiY21cIik7IH1cclxuICAgIHB1YmxpYyBlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZW1cIik7IH1cclxuICAgIHB1YmxpYyBleCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZXhcIik7IH1cclxuICAgIHB1YmxpYyBpYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiaWNcIik7IH1cclxuICAgIHB1YmxpYyBpbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiaW5cIik7IH1cclxuICAgIHB1YmxpYyBsaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwibGhcIik7IH1cclxuICAgIHB1YmxpYyBtbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwibW1cIik7IH1cclxuICAgIHB1YmxpYyBwYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicGNcIik7IH1cclxuICAgIHB1YmxpYyBwdCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicHRcIik7IH1cclxuICAgIHB1YmxpYyBweCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicHhcIik7IH1cclxuICAgIHB1YmxpYyB2YiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmJcIik7IH1cclxuICAgIHB1YmxpYyB2aCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmhcIik7IH1cclxuICAgIHB1YmxpYyB2aSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmlcIik7IH1cclxuICAgIHB1YmxpYyB2dyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidndcIik7IH1cclxuICAgIHB1YmxpYyByZW0oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInJlbVwiKTsgfVxyXG4gICAgcHVibGljIHJsaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicmxoXCIpOyB9XHJcbiAgICBwdWJsaWMgdm1heCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidm1heFwiKTsgfVxyXG4gICAgcHVibGljIHZtaW4oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInZtaW5cIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQW5nbGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0FuZ2xlTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGFuZ2xlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzQW5nbGVNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxBbmdsZVR5cGU+IGltcGxlbWVudHMgSUNzc0FuZ2xlTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZGVnXCIsIFwidHVyblwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUFuZ2xlPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlBbmdsZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLCBcIiBcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUFuZ2xlPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIGRlZyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZGVnXCIpOyB9XHJcbiAgICBwdWJsaWMgcmFkKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJyYWRcIik7IH1cclxuICAgIHB1YmxpYyBncmFkKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJncmFkXCIpOyB9XHJcbiAgICBwdWJsaWMgdHVybiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidHVyblwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaW1lXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NUaW1lTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHRpbWU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NUaW1lTWF0aCBleHRlbmRzIE51bWJlck1hdGg8VGltZVR5cGU+IGltcGxlbWVudHMgSUNzc1RpbWVNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJtc1wiLCBcInNcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzVGltZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYywgXCIgXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBtcyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwibXNcIik7IH1cclxuICAgIHB1YmxpYyBzKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJzXCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlc29sdXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1Jlc29sdXRpb25NYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8cmVzb2x1dGlvbj4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1Jlc29sdXRpb25NYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxSZXNvbHV0aW9uVHlwZT4gaW1wbGVtZW50cyBJQ3NzUmVzb2x1dGlvbk1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcImRwaVwiLCBcInhcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmVzb2x1dGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUmVzb2x1dGlvbj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgXCIgXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBJICovXHJcbiAgICBwdWJsaWMgZHBpKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJkcGlcIik7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQQ00gKi9cclxuICAgIHB1YmxpYyBkcGNtKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJkcGNtXCIpOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUFBYICovXHJcbiAgICBwdWJsaWMgZHBweCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZHBweFwiKTsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBQWCAqL1xyXG4gICAgcHVibGljIHgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInhcIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnJlcXVlbmN5XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NGcmVxdWVuY3lNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8ZnJlcXVlbmNlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIE51bWJlck1hdGg8RnJlcXVlbmN5VHlwZT4gaW1wbGVtZW50cyBJQ3NzRnJlcXVlbmN5TWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiSHpcIiwgXCJrSHpcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzRnJlcXVlbmN5Pik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyZXF1ZW5jeT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyZXF1ZW5jeT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYywgXCIgXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlGcmVxdWVuY3k+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMsIFwiLFwiKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBoeiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiSHpcIik7IH1cclxuICAgIHB1YmxpYyBraHooIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImtIelwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGcmFjdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzRnJhY3Rpb25NYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8ZnJhY3Rpb24+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NGcmFjdGlvbk1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPEZyYWN0aW9uVHlwZT4gaW1wbGVtZW50cyBJQ3NzRnJhY3Rpb25NYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJmclwiLCBcImZyXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0ZyYWN0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJhY3Rpb25NYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJhY3Rpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmFjdGlvbk1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyYWN0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmFjdGlvbk1hdGguY29udmVydEZ1bmMsIFwiIFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJhY3Rpb24+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyYWN0aW9uTWF0aC5jb252ZXJ0RnVuYywgXCIsXCIpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NGcmFjdGlvbk1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0ZyYWN0aW9uPiwgbWF4OiBFeHRlbmRlZDxDc3NGcmFjdGlvbj4pOiBOdW1iZXJQcm94eTxGcmFjdGlvblR5cGU+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pbm1heFwiLCBbbWluLCBtYXhdLCBDc3NGcmFjdGlvbk1hdGguY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmciggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZnJcIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIHBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVsbDogdiA9PiBcIlwiLFxyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nV2l0aFNwYWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9zaXRpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxNdWx0aUNzc1Bvc2l0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBiYXNpYyB0eXBlcyBhbmQgZnVuY3Rpb25zIHVzZWQgdG8gZGVmaW5lIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuICogXHJcbiAqIEFsbCBDU1MgcHJvcGVydGllcyBzaG91bGQgYWNjZXB0IHN0cmluZyBhcyB0aGUgdHlwZSBvZiB0aGVpciB2YWx1ZSBldmVuIGlmIG5vcm1hbGx5XHJcbiAqIHRoZXkgYWNjZXB0IG90aGVyIHR5cGVzIChlLmcgYSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIGFzIGBcInJlZFwiIHwgXCJncmVlblwiIHwgLi4uYCBmb3IgdGhlXHJcbiAqIGNvbG9yKSBwcm9wZXJ0eS4gVGhpcyBpcyBiZWNhdXNlIGluIGFkZGl0aW9uIHRvIHRoZWlyIG5vcm1hbCB2YWx1ZXMgYW55IHByb3BlcnR5XHJcbiAqIGNhbiB1c2UgY3VzdG9tIENTUyBwcm9wZXJ0eSBpbiB0aGUgZm9ybSBgdmFyKC0tcHJvcG5hbWUpYC4gSG93ZXZlciwgaWYgd2UgYWRkIHN0cmluZyB0eXBlXHJcbiAqIHRvIHRoZSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIChlLmcuIGBcInJlZFwiIHwgXCJncmVlblwiIHwgc3RyaW5nYCksIHRoaXMgdGhyb3dzIG9mZiB0aGVcclxuICogSW50ZWxsaXNlbnNlIGFuZCBpdCBkb2Vzbid0IHByb21wdCBkZXZlbG9wZXJzIGZvciB0aGUgcG9zc2libGUgdmFsdWVzLiBUaGUgSVZhbHVlUHJveHlcclxuICogY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBzdHJpbmcgYW5kIHRoaXMgc29sdmVzIHRoZSBJbnRlbGxpc2Vuc2UgaXNzdWUuXHJcbiAqIFxyXG4gKiBBbm90aGVyIGJlbmVmaXQgb2YgdXNpbmcgZnVuY3Rpb25zIGlzIHRoYXQgdGhleSBhcmVcclxuICogY29uc3RydWN0ZWQgYXQgb25lIHRpbWUgYnV0IHRoZSBzdHJpbmcgZ2VuZXJhdGlvbiBvY2N1cnMgYXQgYW5vdGhlciB0aW1lLiBUaGlzIGFsbG93c1xyXG4gKiB1c2luZyB0aGVzZSBvYmplY3RzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuIFRoZXkgY2FuIHJlZmVyZW5jZSBvYmplY3RzIGxpa2VcclxuICogSVZhclJ1bGUgdGhhdCBhcmUgbm90IGZ1bGx5IGluaXRpYWxpemVkIHlldC4gSG93ZXZlciwgd2hlbiB0aGUgc3R5bGVzIHNob3VsZCBiZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSB0aGUgaW5pdGlhbGl6YXRpb24gd2lsbCBoYXZlIGFscmVhZHkgb2NjdXJyZWQgYW5kIHRoZSBmdW5jdGlvbiB3aWxsXHJcbiAqIHJldHVybiBhIGNvcnJlY3Qgc3RyaW5nLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHRoZSBwcm94eSBmdW5jdGlvbnMgaGF2ZSBhIHBhcmFtZXRlciB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlbSBmcm9tXHJcbiAqIG90aGVyIHByb3h5IGZ1bmN0aW9ucy4gVGhpcyBpcyBiZWNhdXNlIHdlIHdhbnQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbnQgQ1NTIHR5cGVzLFxyXG4gKiBzbyB0aGF0IGEgZnVuY3Rpb24gdXNlZCBmb3Igb25lIENTUyB0eXBlIGNhbm5vdCBiZSB1c2VkIGZvciBhIGRpZmZlcmVudCBDU1MgdHlwZS4gRm9yXHJcbiAqIGV4YW1wbGUsIHRoZSBgY2FsYygpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBOdW1iZXJQcm94eSBmdW5jdGlvbiwgd2hpbGUgdGhlXHJcbiAqIGBsaW5lYXJJbmdyYWRpZW50KClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIEltYWdlUHJveHkgZnVuY3Rpb24uIFRodXMgeW91IGNhbm5vdCB1c2UgdGhlXHJcbiAqICdjYWxjKClgIGZ1bmN0aW9uIGZvciBpbWFnZS1iYXNlZCBDU1MgcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cclxuICovXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFN0cmluZ1Byb3h5IHR5cGUgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBwYXJ0IG9mIHR5cGVcclxuICogZGVmaW5pdGlvbiBmb3IgYWxsIENTUyBwcm9wZXJ0aWVzIC0gZXZlbiBmb3IgdGhvc2UgdGhhdCBkb24ndCBoYXZlIGBzdHJpbmdgIGFzIHBhcnQgb2YgdGhlaXJcclxuICogdHlwZS5cclxuICogXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcmV0dXJuZWQgZnJvbSB0aGUgYHJhdygpYCBmdW5jdGlvbiwgd2hpY2ggYWxsb3dzIGJ5LXBhc3NpbmcgdGhlIHByb3BlcnR5XHJcbiAqIHR5cGluZyBydWxlcyBhbmQgc3BlY2lmeWluZyBhIHN0cmluZyBkaXJlY3RseS4gVGhpcyBtaWdodCBiZSB1c2VmdWwsIHdoZW4gYSBzdHJpbmcgdmFsdWUgaXNcclxuICogb2J0YWluZWQgZnJvbSBzb21lIGV4dGVybmFsIGNhbGN1bGF0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN0cmluZ1Byb3h5ID0gKHA/OiBcInN0cmluZ1wiKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTdHlsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgKGFsbW9zdCkgYW55IENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJhc2VfU3R5bGVUeXBlID0gXCJpbmhlcml0XCIgfCBcImluaXRpYWxcIiB8IFwidW5zZXRcIiB8IFwicmV2ZXJ0XCIgfCBTdHJpbmdQcm94eSB8IG51bGwgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhclByb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBvYmplY3Qgd2l0aCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAqIHdlIG5lZWQgdGhpcyBpbnRlcmZhY2UgYmVjYXVzZSBldmVyeSBzdHlsZSBwcm9wZXJ0eSBjYW4gYWNjZXB0IHZhbHVlIGluIHRoZSBmb3JtIG9mIHZhcigpXHJcbiAqIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhclByb3h5PFQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBmb3IgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICovXHJcblx0c2V0VmFsdWUoIHZhbHVlOiBULCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGV4dGVuZHMgdGhlIGdpdmVuIHR5cGUgd2l0aCB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAtIGJhc2ljIHN0eWxlIHZhbHVlcyB0aGF0IGFyZSB2YWxpZCBmb3IgYWxsIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqIC0gU3RyaW5nUHJveHkgdHlwZSB0aGF0IGFsbG93cyBzcGVjaWZ5aW5nIHJhdyBzdHJpbmcgdmFsdWUuXHJcbiAqIC0gSVZhclByb3h5IG9iamVjdCB0aGF0IGFsbG93cyB1c2luZyBhIENTUyBjdXN0b20gcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZDxUPiA9IFQgfCBCYXNlX1N0eWxlVHlwZSB8IElWYXJQcm94eTxUPjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIHBhaXItbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gMiB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JQYWlyPFQ+ID0gVCB8IFtFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD5dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJveC1saWtlIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSB0byA0IHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPckJveDxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPj8sIEV4dGVuZGVkPFQ+P107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgb3IgbW9yZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JNYW55PFQ+ID0gVCB8IEV4dGVuZGVkPFQ+W107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgb3IgbW9yZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgTWFueTxUPiA9IEV4dGVuZGVkPFQ+W107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1lcmljIHR5cGVzIGFzIGEgYmFzZWlzIGZvciBoYW5kbGluZyBDU1MgPG51bWJlcj4uIDxsZW5ndGg+LCA8YW5nbGU+LCBldGMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBOdW1iZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGEgc3RyaW5nIHZhbHVlIGNhbiBiZSBhc3NpZ25lZCB0byBwcm9wZXJ0aWVzIG9mIHRoZSBDU1NcclxuICogbnVtZXJpYyB0eXBlcy4gVGhpcyBmdW5jdGlvbiBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlIG1pbigpLCBtYXgoKSBhbmQgY2FsYygpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyUHJveHk8VCBleHRlbmRzIHN0cmluZz4gPSAocD86IFQpID0+IHN0cmluZztcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmc+ID0gbnVtYmVyIHwgc3RyaW5nIHwgTnVtYmVyUHJveHk8VD47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBudW1lcmljIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IE9uZU9yTWFueTxOdW1iZXJCYXNlPFQ+PjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIHR5cGUsIHRoZXkgYXJlIGNvbnZlcnRlZFxyXG4gKiB0byBzdHJpbmdzIHVzaW5nIHRoZSBgbnVtYmVyVG9TdHJpbmdgIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlck1hdGg8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgLyoqIENvbnZlcnRzIG51bWJlciB0byBzdHJpbmcgYXBwZW5kaW5nIG5lY2Vzc2FyeSB1bml0IHN1ZmZpeGVzICovXHJcbiAgICBudW1iZXJUb1N0cmluZzogKCBuOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcbiAgICAvKiogQ29udmVydHMgc2luZ2xlIG51bWVyaWMgc3R5bGUgdmFsdWUgdG8gc3RyaW5nIGFwcGVuZGluZyBuZWNlc3NhcnkgdW5pdCBzdWZmaXhlcyAqL1xyXG4gICAgc3R5bGVUb1N0cmluZzogKCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIENvbnZlcnRzIG11bHRpcGxlIG51bWVyaWMgc3R5bGUgdmFsdWUgdG8gc3RyaW5nIGFwcGVuZGluZyBuZWNlc3NhcnkgdW5pdCBzdWZmaXhlcyAqL1xyXG4gICAgbXVsdGlTdHlsZVRvU3RyaW5nOiAoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Piwgc2VwYXJhdG9yOiBzdHJpbmcpID0+IHN0cmluZztcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSBvZiB1c2luZyB0aGUgQ1NTIG1pbigpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWluKCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBOdW1iZXJQcm94eTxUPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1heCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWF4KCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBOdW1iZXJQcm94eTxUPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIGNsYW1wKCkgZnVuY3Rpb24uICovXHJcbiAgICBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBOdW1iZXJQcm94eTxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjYWxjKCkgZnVuY3Rpb24uIFRoaXMgbWV0aG9kIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0XHJcbiAgICAgKiBiZSBpbnZva2VkIHdpdGggYSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICAgICAqIFxyXG4gICAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAgICogY2xhc3MgTXlTdHlsZXNcclxuICAgICAqIHtcclxuICAgICAqICAgICB3YWxsR2FwID0gJHZhciggXCJ3aWR0aFwiLCAxNik7XHJcbiAgICAgKiAgICAgbXlDbGFzcyA9ICRjbGFzcyh7IG1heFdpZHRoOiBjc3MuTGVuLmNhbGMgYDEwMCUgLSAyICoge3RoaXMud2FsbEdhcH1gIH0pXHJcbiAgICAgKiB9XHJcbiAgICAgKiBgYGBcclxuICAgICAqIEBwYXJhbSBmb3JtdWxhIFxyXG4gICAgICogQHBhcmFtIHBhcmFtcyBcclxuICAgICAqL1xyXG4gICAgY2FsYyggZm9ybXVsYVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPG51bWJlcj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIE51bWJlciB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJUeXBlID0gXCJOdW1iZXJcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBDc3NOdW1iZXIgPSBFeGNsdWRlPE51bWJlckJhc2U8TnVtYmVyVHlwZT4sc3RyaW5nPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlOdW1iZXIgPSBPbmVPck1hbnk8Q3NzTnVtYmVyPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSovXHJcbmV4cG9ydCB0eXBlIENzc051bWJlckJveCA9IE9uZU9yQm94PENzc051bWJlcj47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NOdW1iZXJNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxudW1iZXI+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NOdW1iZXJNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8TnVtYmVyVHlwZT4ge31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgcGVyY2VudCAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VW5pdHMgPSBcIiVcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBQZXJjZW50IHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRUeXBlID0gXCJQZXJjZW50XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NQZXJjZW50ID0gTnVtYmVyQmFzZTxQZXJjZW50VHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlQZXJjZW50ID0gT25lT3JNYW55PENzc1BlcmNlbnQ+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tZm91ci1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NQZXJjZW50Qm94ID0gT25lT3JCb3g8Q3NzUGVyY2VudD47XHJcblxyXG4vKiogUHJveHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50UHJveHkgPSBOdW1iZXJQcm94eTxQZXJjZW50VHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElGcmFjdGlvbk1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHBlcmNlbnQ+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NQZXJjZW50TWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPFBlcmNlbnRUeXBlPlxyXG57XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgdG8gYSBwZXJjZW50IHN0cmluZy4gTnVtYmVycyBiZXR3ZWVuIC0xIGFuZCAxIGFyZSBtdWx0aXBseWVkIGJ5IDEwMC5cclxuICAgICAqL1xyXG4gICAgcGVyY2VudCggbjogbnVtYmVyKTogUGVyY2VudFByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxsZW5ndGg+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBsZW5ndGggKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVW5pdHMgPSBcIlFcIiB8IFwiY2hcIiB8IFwiY21cIiB8IFwiZW1cIiB8IFwiZXhcIiB8IFwiaWNcIiB8IFwiaW5cIiB8IFwibGhcIiB8IFwibW1cIiB8IFwicGNcIiB8XHJcbiAgICAgICAgICAgICAgICBcInB0XCIgfCBcInB4XCIgfCBcInZiXCIgfCBcInZoXCIgfCBcInZpXCIgfCBcInZ3XCIgfCBcInJlbVwiIHwgXCJybGhcIiB8IFwidm1heFwiIHwgXCJ2bWluXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTGVuZ3RoIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFR5cGUgPSBcIkxlbmd0aFwiIHwgUGVyY2VudFR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aCA9IE51bWJlckJhc2U8TGVuZ3RoVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUxlbmd0aCA9IE9uZU9yTWFueTxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tZm91ci1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aEJveCA9IE9uZU9yQm94PENzc0xlbmd0aD47XHJcblxyXG4vKiogUHJveHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFByb3h5ID0gTnVtYmVyUHJveHk8TGVuZ3RoVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NMZW5ndGhNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxsZW5ndGg+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NMZW5ndGhNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8TGVuZ3RoVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHF1YXRlcnMgb2YgYW4gaW5jaCAqL1xyXG4gICAgUSggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNoIHVuaXRzICovXHJcbiAgICBjaCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNhbnRpbWV0ZXJzICovXHJcbiAgICBjbSggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNhbGN1bGF0ZWQgZm9udC1zaXplcyBvZiB0aGUgZWxlbWVudCAqL1xyXG4gICAgZW0oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBoZWlnaHRzIG9mIGxvd2VyY2FzZSBsZXR0ZXIgJ3gnIGluIHRoZSBmb250ICovXHJcbiAgICBleCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGljIHVuaXRzICovXHJcbiAgICBpYyggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGluY2hlcyAqL1xyXG4gICAgaW4oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBsaW5lLWhlaWdodHMgb2YgdGhlIGVsZW1lbnQgKi9cclxuICAgIGxoKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbWlsbGltZXRlcnMgKi9cclxuICAgIG1tKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcGljYXMgKi9cclxuICAgIHBjKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcG9pbnRzICovXHJcbiAgICBwdCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpeGVscyAqL1xyXG4gICAgcHgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAgICAgKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBibG9jayBheGlzICovXHJcbiAgICB2YiggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0J3MgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrICovXHJcbiAgICB2aCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBzaXplIG9mIHRoZSBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2ssIGluIHRoZSBkaXJlY3Rpb25cclxuICAgICAqIG9mIHRoZSByb290IGVsZW1lbnTigJlzIGlubGluZSBheGlzICovXHJcbiAgICB2aSggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSB3aWR0aCBvZiB0aGUgdmlld3BvcnQncyBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2sgKi9cclxuICAgIHZ3KCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gZm9udHNpemVzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuICAgIHJlbSggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGxpbmUtaGVpZ2h0cyBvZiB0aGUgcm9vdCBlbGVtZW50ICg8aHRtbD4pICovXHJcbiAgICBybGgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgc21hbGxlciB2YWx1ZSBiZXR3ZWVuIHZ3IGFuZCB2aCAqL1xyXG4gICAgdm1heCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHRoZSB1bml0cyB3aGljaCBhcmUgYSBsYXJnZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuICAgIHZtaW4oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciBpbnRvIHBlcmNlbnRzLiBWYWx1ZXMgYmV0d2VlbiAtMS4wIGFuZCAxLjAgbm9uLWluY2x1c2l2ZSBhcmVcclxuICAgICAqIG11bHRpcGxpZWQgYnkgMTAwLlxyXG4gICAgICovXHJcbiAgICBwZXJjZW50KCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgYSBwb2ludCB1c2luZyB4IGFuZCB5IGNvb3JkaW5hdGVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9pbnQgPSBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8YW5nbGU+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBhbmdsZSAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVVuaXRzID0gXCJkZWdcIiB8IFwicmFkXCIgfCBcImdyYWRcIiB8IFwidHVyblwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEFuZ2xlIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVHlwZSA9IFwiQW5nbGVcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0FuZ2xlID0gTnVtYmVyQmFzZTxBbmdsZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUFuZ2xlID0gT25lT3JNYW55PENzc0FuZ2xlPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0FuZ2xlQm94ID0gT25lT3JCb3g8Q3NzQW5nbGU+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlUHJveHkgPSBOdW1iZXJQcm94eTxBbmdsZVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzQW5nbGVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxhbmdsZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0FuZ2xlTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEFuZ2xlVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZGVncmVlcyAqL1xyXG4gICAgIGRlZyggbjogbnVtYmVyKTogQW5nbGVQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiByYWRpYW5zICovXHJcbiAgICByYWQoIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZ3JhZGlhbnMgKi9cclxuICAgIGdyYWQoIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gdHVybnMgKi9cclxuICAgIHR1cm4oIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIGludG8gcGVyY2VudHMuIFZhbHVlcyBiZXR3ZWVuIC0xLjAgYW5kIDEuMCBub24taW5jbHVzaXZlIGFyZVxyXG4gICAgICogbXVsdGlwbGllZCBieSAxMDAuXHJcbiAgICAgKi9cclxuICAgIHBlcmNlbnQoIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPHRpbWU+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiB0aW1lICovXHJcbmV4cG9ydCB0eXBlIFRpbWVVbml0cyA9IFwic1wiIHwgXCJtc1wiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFRpbWUgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgVGltZVR5cGUgPSBcIlRpbWVcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1RpbWUgPSBOdW1iZXJCYXNlPFRpbWVUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVRpbWUgPSBPbmVPck1hbnk8Q3NzVGltZT47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by1mb3VyLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1RpbWVCb3ggPSBPbmVPckJveDxDc3NUaW1lPjtcclxuXHJcbi8qKiBQcm94eSB0eXBlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgVGltZVByb3h5ID0gTnVtYmVyUHJveHk8VGltZVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzVGltZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHRpbWU+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NUaW1lTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPFRpbWVUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBmcmVxdWVuY3kgdmFsdWUgaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgICBtcyggbjogbnVtYmVyKTogVGltZVByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBzZWNvbmRzICovXHJcbiAgICBzKCBuOiBudW1iZXIpOiBUaW1lUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPHJlc29sdXRpb24+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiByZXNvbHV0aW9uICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25Vbml0cyA9IFwiZHBpXCIgfCBcImRwY21cIiB8IFwiZHBweFwiIHwgXCJ4XCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgUmVzb2x1dGlvbiB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uVHlwZSA9IFwiUmVzb2x1dGlvblwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmVzb2x1dGlvbiA9IE51bWJlckJhc2U8UmVzb2x1dGlvblR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpUmVzb2x1dGlvbiA9IE9uZU9yTWFueTxDc3NSZXNvbHV0aW9uPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmVzb2x1dGlvbkJveCA9IE9uZU9yQm94PENzc1Jlc29sdXRpb24+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblByb3h5ID0gTnVtYmVyUHJveHk8UmVzb2x1dGlvblR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzUmVzb2x1dGlvbk1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHJlc29sdXRpb24+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPFJlc29sdXRpb25UeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQSSAqL1xyXG4gICAgZHBpKCBuOiBudW1iZXIpOiBSZXNvbHV0aW9uUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUENNICovXHJcbiAgICBkcGNtKCBuOiBudW1iZXIpOiBSZXNvbHV0aW9uUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUFBYICovXHJcbiAgICBkcHB4KCBuOiBudW1iZXIpOiBSZXNvbHV0aW9uUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBYICovXHJcbiAgICB4KCBuOiBudW1iZXIpOiBSZXNvbHV0aW9uUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGZyZXF1ZW5jeT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGZyZXF1ZW5jeSAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lVbml0cyA9IFwiSHpcIiB8IFwia0h6XCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgRnJlcXVlbmN5IHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVR5cGUgPSBcIkZyZXF1ZW5jeVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NGcmVxdWVuY3kgPSBOdW1iZXJCYXNlPEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlGcmVxdWVuY3kgPSBPbmVPck1hbnk8Q3NzRnJlcXVlbmN5PjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NGcmVxdWVuY3lCb3ggPSBPbmVPckJveDxDc3NGcmVxdWVuY3k+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lQcm94eSA9IE51bWJlclByb3h5PEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzRnJlcXVlbmN5TWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEZyZXF1ZW5jeVR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBIZXJ0eiAqL1xyXG4gICAgaHooIG46IG51bWJlcik6IEZyZXF1ZW5jeVByb3h5XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIEtpbG8tSGVydHogKi9cclxuICAgIGtoeiggbjogbnVtYmVyKTogRnJlcXVlbmN5UHJveHlcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnJhY3Rpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgZnJhY3Rpb25zIChmb3IgZmxleCBhbmQgZ3JpZCBsYXlvdXRzKSAqL1xyXG5leHBvcnQgdHlwZSBGcmFjdGlvblVuaXRzID0gXCJmclwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIEZyYWN0aW9uIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEZyYWN0aW9uVHlwZSA9IFwiRnJhY3Rpb25cIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmFjdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyYWN0aW9uID0gTnVtYmVyQmFzZTxGcmFjdGlvblR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJhY3Rpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUZyYWN0aW9uID0gT25lT3JNYW55PENzc0ZyYWN0aW9uPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLWZvdXItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmFjdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyYWN0aW9uQm94ID0gT25lT3JCb3g8Q3NzRnJhY3Rpb24+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxmcmFjdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEZyYWN0aW9uUHJveHkgPSBOdW1iZXJQcm94eTxGcmFjdGlvblR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRnJhY3Rpb25NYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmFjdGlvbj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0ZyYWN0aW9uTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEZyYWN0aW9uVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW5tYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NGcmFjdGlvbj4sIG1heDogRXh0ZW5kZWQ8Q3NzRnJhY3Rpb24+KTogTnVtYmVyUHJveHk8RnJhY3Rpb25UeXBlPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBmcmFjdGlvbiB2YWx1ZSBmb3IgZmxleCAqL1xyXG4gICAgZnIoIG46IG51bWJlcik6IEZyYWN0aW9uUHJveHk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIGludG8gcGVyY2VudHMuIFZhbHVlcyBiZXR3ZWVuIC0xLjAgYW5kIDEuMCBub24taW5jbHVzaXZlIGFyZVxyXG4gICAgICogbXVsdGlwbGllZCBieSAxMDAuXHJcbiAgICAgKi9cclxuICAgIHBlcmNlbnQoIG46IG51bWJlcik6IEZyYWN0aW9uUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCA9IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgYSBzaW1wbGUgMSBvciB0d28gdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBTaW1wbGVDc3NQb3NpdGlvbiA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgZnVsbCB1cCB0byA0IHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9zaXRpb24gPSBTaW1wbGVDc3NQb3NpdGlvbiB8IFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkXSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD5dIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIG11bHRpcGxlIGA8cG9zaXRpb24+YCBDU1MgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlDc3NQb3NpdGlvbiA9IEV4dGVuZGVkPENzc1Bvc2l0aW9uPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmFkaXVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIGNvcm5lciByYWRpdXMgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmFkaXVzID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVUkxzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXJsUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBDU1MgdXJsKCkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcmxQcm94eSA9IChwPzogXCJ1cmxcIikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gYXR0cigpIGZ1bmN0aW9uIHN1cHBvcnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVHlwZUtleXdvcmQgPSBcInN0cmluZ1wiIHwgXCJjb2xvclwiIHwgXCJ1cmxcIiB8IFwiaW50ZWdlclwiIHwgXCJudW1iZXJcIiB8IFwibGVuZ3RoXCIgfCBcImFuZ2xlXCIgfCBcInRpbWVcIiB8IFwiZnJlcXVlbmN5XCI7XHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVW5pdEtleXdvcmQgPSBQZXJjZW50VW5pdHMgfCBMZW5ndGhVbml0cyB8IFRpbWVVbml0cyB8IEFuZ2xlVW5pdHMgfCBSZXNvbHV0aW9uVW5pdHMgfCBGcmVxdWVuY3lVbml0cztcclxuXHJcbi8qKlxyXG4gKiBUaGUgQXR0clByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgQ1NTIGF0dHIoKSBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBdHRyUHJveHkgPSAocD86IFwiYXR0clwiKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXZWIgTmFtZXNwYWNlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFdlYk5hbWVzcGFjZXMgY2xhc3MgY29udGFpbnMgaWRlbnRpZmllcnMgZm9yIHRoZSBrbm93biBXZWItcmVsYXRlZCBuYW1lc3BhY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYk5hbWVzcGFjZXNcclxue1xyXG5cdHN0YXRpYyByZWFkb25seSBIVE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFNWRyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWExpbmsgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWE1MTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IE1hdGhNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=