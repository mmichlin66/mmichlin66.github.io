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

Object.defineProperty(exports, "__esModule", { value: true });
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
 * Processes the given stylesheet definition and returns the Stylesheet object that contains
 * names of IDs, classes and keyframes and allows style manipulations. For a given stylesheet
 * definition class there is a single stylesheet object, no matter how many times this function
 * is invoked. However, if an instance, whcih has not yet been processed, is passed, then a new
 * set of rules will be created for it.
 */
function $use(instanceOrClass) {
    return RuleContainerFuncs.processInstanceOrClass(instanceOrClass);
}
exports.$use = $use;
/**
 * Activates the given stylesheet and inserts all its rules into DOM. If the input object is not
 * a stylesheet but a style definition class, obtain stylesheet by calling the $use function.
 * Note that each stylesheet object maintains a reference counter of how many times it was
 * activated and deactivated. The rules are inserted into DOM only when this reference counter
 * goes up to 1.
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
    return () => UtilFuncs_1.templateStringToString(parts, params, (v) => UtilFuncs_1.valueToString(v));
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
 * will be wrapped in a "url()" invocation.
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
 * Returns a StringProxy function representing the CSS `counter()` function with additional
 * optional strings added after and/or before the counter.
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
        // return typeof this.waypoint === "string" ? this.waypoint : this.waypoint + "%";
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
        else if (propVal instanceof CounterRules_1.CounterRule)
            this.processCounterRule(propName, propVal);
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
                this.cssCustomVarStyleRule.style.setProperty(name, value, important ? "!important" : null);
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
 * it has already been processed. If yes, we just return it back; if no, we assign new unique names
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
            this.cssRule.style.setProperty(UtilFuncs_1.camelToDash(name), StyleFuncs_1.stylePropToString(name, value, true), important ? "!important" : null);
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
            this.cssRule.style.setProperty(varObj.cssName, StyleFuncs_1.stylePropToString(varObj.template, value, true), important ? "!important" : null);
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
        fromObject: v => v instanceof StyleRules_1.StyleRule ? v.selectorText : UtilFuncs_1.valueToString(v)
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
 * placeholders. This function is used as tag function that accepts a template string without
 * parentheses.
 */
function formatSelector(parts, params) {
    return UtilFuncs_1.templateStringToString(parts, params, selectorItemToString);
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
function multiLengthToStringWithSpace(val) { return UtilFuncs_1.CssLengthMath.multiStyleToString(val, " "); }
function multiTimeToStringWithComma(val) { return UtilFuncs_1.CssTimeMath.multiStyleToString(val, ","); }
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
    // if width is specified, but slice is net we need to set slice to the default 100% value;
    // if outset is specified but width is not. we need to set width to the default 1 value;
    let valCopy = Object.assign({}, val);
    if (val.slice == null && (val.width != null || val.outset != null))
        valCopy.slice = "100%";
    if (val.width == null && val.outset != null)
        valCopy.width = 1;
    return UtilFuncs_1.objectToString(valCopy, [
        "source",
        ["slice", borderImageSliceToString],
        ["width", UtilFuncs_1.CssNumberMath.styleToString, "/"],
        ["outset", UtilFuncs_1.CssNumberMath.styleToString, "/"],
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
    let buf = [];
    for (let propName in styleset) {
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
            buf.push(stylePropToString(propName, styleset[propName]));
        }
    }
    // join all elements in the array except nulls, undefined and empty strings
    return buf.filter(item => item != null).join(";");
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
    borderImageWidth: multiLengthToStringWithSpace,
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
        s += parts[i] + convertFunc(params[i]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU3R5bGVBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9VdGlsQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQ291bnRlclJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ltYWdlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9NZWRpYUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU2VsZWN0b3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1N0eWxlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9VdGlsRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9VdGlsVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxpR0FBa0Q7QUFJbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gs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LEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJ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QUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQztLQUM1RCxDQUFDLENBQUM7QUFDUCxDQUFDO0FBUEQsNENBT0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLHFCQUFxQixDQUFFLEdBQStCLEVBQUUsU0FBaUI7SUFFckYsT0FBTyxhQUFhLENBQUUsR0FBRyxFQUFFO1FBQ3ZCLGFBQWEsRUFBRSxnQkFBZ0I7UUFDL0IsY0FBYyxFQUFFLFNBQVM7S0FDNUIsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQU5ELHNEQU1DOzs7Ozs7Ozs7Ozs7OztBQy9vQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRzs7QUF5Z0JILG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7O0dBRUc7QUFDSCxNQUFzQixhQUFhOztBQUFuQyxzQ0FRQztBQU5nQixrQkFBSSxHQUFHLDhCQUE4QixDQUFDO0FBQ3RDLGlCQUFHLEdBQUcsNEJBQTRCLENBQUM7QUFDbkMsbUJBQUssR0FBRyw4QkFBOEIsQ0FBQztBQUN2QyxpQkFBRyxHQUFHLHNDQUFzQyxDQUFDO0FBQzdDLG1CQUFLLEdBQUcsK0JBQStCLENBQUM7QUFDeEMsb0JBQU0sR0FBRyxvQ0FBb0MsQ0FBQyIsImZpbGUiOiJtaW1jc3MuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL21pbWNzc1R5cGVzLmpzXCIpO1xuIiwi77u/aW1wb3J0ICogYXMgQ29sb3JUeXBlcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBDb2xvckZ1bmNzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIHJlZCwgZ3JlZW4sIGJsdWUgc2VwYXJhdGlvbiB2YWx1ZXMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLiBFYWNoIGNvbG9yIHNlcGFyYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyIG9yIGFcclxuICogc3RyaW5nIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgMCB0byAyNTUuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMC4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICogXHJcbiAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhdWUuXHJcbiAqIEBwYXJhbSBiIEJsdWUgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmdiKCByOiBudW1iZXIgfCBzdHJpbmcsIGc6IG51bWJlciB8IHN0cmluZywgYjogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogQ29sb3JUeXBlcy5Db2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLnJnYlRvU3RyaW5nKCByLCBnLCBiLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIFN0cmluZyB3aGljaCBpcyB1c2VkIGFzIGlzLlxyXG4gKiBcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBsIExpZ2h0bmVzcyBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2woIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyIHwgc3RyaW5nLCBsOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBDb2xvclR5cGVzLkNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MuaHNsVG9TdHJpbmcoIGgsIHMsIGwsIGEpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGNvbG9yIGFuZCBhbiBvcHRpb25hbCBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBUaGUgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBhcyBhIG51bWVyaWMgdmFsdWUgb3IgYXMgYSBzdHJpbmcgY29sb3IgbmFtZS5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICogXHJcbiAqIEBwYXJhbSBjIFxyXG4gKiBAcGFyYW0gYSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgQ29sb3JUeXBlcy5JTmFtZWRDb2xvcnMsIGE6IG51bWJlciB8IHN0cmluZyk6IENvbG9yVHlwZXMuQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5hbHBoYVRvU3RyaW5nKCBjLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0V4dGVuZGVkLCBDc3NQb3NpdGlvbiwgU2ltcGxlQ3NzUG9zaXRpb24sIENzc0FuZ2xlfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCAqIGFzIEltYWdlVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9JbWFnZVR5cGVzXCJcclxuaW1wb3J0ICogYXMgSW1hZ2VGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJbWFnZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGxpbmVhci1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyR3JhZGllbnQoIGFuZ2xlPzogSW1hZ2VUeXBlcy5MaW5lYXJHcmFkQW5nbGUsXHJcbiAgICAuLi5zdG9wc09ySGludHM6IEltYWdlVHlwZXMuR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVR5cGVzLkltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IEltYWdlRnVuY3MubGluZWFyR3JhZGllbnRUb1N0cmluZyggXCJsaW5lYXItZ3JhZGllbnRcIiwgYW5nbGUsIHN0b3BzT3JIaW50cyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRpbmdMaW5lYXJHcmFkaWVudCggYW5nbGU/OiBJbWFnZVR5cGVzLkxpbmVhckdyYWRBbmdsZSxcclxuICAgIC4uLnN0b3BzT3JIaW50czogSW1hZ2VUeXBlcy5HcmFkaWVudFN0b3BPckhpbnRbXSk6IEltYWdlVHlwZXMuSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gSW1hZ2VGdW5jcy5saW5lYXJHcmFkaWVudFRvU3RyaW5nKCBcInJlcGVhdGluZy1saW5lYXItZ3JhZGllbnRcIiwgYW5nbGUsIHN0b3BzT3JIaW50cyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50KCBzaGFwZT86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRTaGFwZSxcclxuICAgIGV4dGVudD86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRFeHRlbnQsIHBvcz86IENzc1Bvc2l0aW9uLFxyXG4gICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogSW1hZ2VUeXBlcy5JbWFnZVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLnJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIFwicmFkaWFsLWdyYWRpZW50XCIsIHNoYXBlLCBleHRlbnQsIHBvcywgc3RvcHNPckhpbnRzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJbWFnZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGluZ1JhZGlhbEdyYWRpZW50KCBzaGFwZT86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRTaGFwZSxcclxuICAgIGV4dGVudD86IEltYWdlVHlwZXMuUmFkaWFsR3JhZGllbnRFeHRlbnQsIHBvcz86IENzc1Bvc2l0aW9uLFxyXG4gICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogSW1hZ2VUeXBlcy5JbWFnZVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLnJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIFwicmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudFwiLCBzaGFwZSwgZXh0ZW50LCBwb3MsIHN0b3BzT3JIaW50cyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlYGNvbmljLWdyYWRpZW50KClgICBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29uaWNHcmFkaWVudCggYW5nbGU/OiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvcz86IFNpbXBsZUNzc1Bvc2l0aW9uLFxyXG4gICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogKGltZz86XCJpbWFnZVwiKSA9PiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuICgpID0+IEltYWdlRnVuY3MuY29uaWNHcmFkaWVudFRvU3RyaW5nKCBhbmdsZSwgcG9zLCBzdG9wc09ySGludHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlKCAuLi5hcmdzOiBJbWFnZVR5cGVzLkNyb3NzRmFkZVBhcmFtW10pOiBJbWFnZVR5cGVzLkltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IEltYWdlRnVuY3MuY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3MpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIFJ1bGVUeXBlcyBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCAqIGFzIFJ1bGVDb250YWluZXJGdW5jcyBmcm9tIFwiLi4vcnVsZXMvUnVsZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7RXh0ZW5kZWR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeSwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIlxyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmltcG9ydCB7QWJzdHJhY3RSdWxlLCBDbGFzc1J1bGUsIElEUnVsZSwgU2VsZWN0b3JSdWxlfSBmcm9tIFwiLi4vcnVsZXMvU3R5bGVSdWxlc1wiXHJcbmltcG9ydCB7QW5pbWF0aW9uUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0FuaW1hdGlvblJ1bGVcIlxyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCJcclxuaW1wb3J0IHtDb3VudGVyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0NvdW50ZXJSdWxlc1wiO1xyXG5pbXBvcnQge0ZvbnRGYWNlUnVsZSwgSW1wb3J0UnVsZSwgTmFtZXNwYWNlUnVsZSwgUGFnZVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9NaXNjUnVsZXNcIlxyXG5pbXBvcnQge1N1cHBvcnRzUnVsZSwgTWVkaWFSdWxlfSBmcm9tIFwiLi4vcnVsZXMvR3JvdXBSdWxlc1wiXHJcbmltcG9ydCB7dmFsdWVUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFic3RyYWN0IHJ1bGUsIHdoaWNoIGRlZmluZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBiZSBleHRlbmRlZCBieSBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy4gQWJzdHJhY3QgcnVsZXMgZG9uJ3QgaGF2ZSBzZWxlY3RvcnMgYW5kIGFyZSBub3QgaW5zZXJ0ZWQgaW50byBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFic3RyYWN0KCBzdHlsZTogUnVsZVR5cGVzLkNvbWJpbmVkU3R5bGVzZXQpOiBSdWxlVHlwZXMuSVN0eWxlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBBYnN0cmFjdFJ1bGUoIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGNsYXNzIHJ1bGUuIFRoZSBjbGFzcyBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhcyBwYXJ0IG9mXHJcbiAqIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW4gZXhwbGljaXRcclxuICogbmFtZSBvciBhbm90aGVyIGNsYXNzIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvIFwiZGVjbGFyZVwiXHJcbiAqIHRoZSBjbGFzcy4gU3VjaCBjbGFzcyBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZFxyXG4gKiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNsYXNzKCBzdHlsZT86IFJ1bGVUeXBlcy5Db21iaW5lZFN0eWxlc2V0LFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JQ2xhc3NSdWxlKTogUnVsZVR5cGVzLklDbGFzc1J1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQ2xhc3NSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IElEIHJ1bGUuIFRoZSBJRCBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhcyBwYXJ0IG9mXHJcbiAqIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW4gZXhwbGljaXRcclxuICogbmFtZSBvciBhbm90aGVyIElEIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvIFwiZGVjbGFyZVwiXHJcbiAqIHRoZSBJRC4gU3VjaCBJRCBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZFxyXG4gKiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGlkKCBzdHlsZT86IFJ1bGVUeXBlcy5Db21iaW5lZFN0eWxlc2V0LFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JSURSdWxlKTogUnVsZVR5cGVzLklJRFJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgSURSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHNlbGVjdG9yIHJ1bGUuIFNlbGVjdG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcgb3IgdmlhIHRoZSBzZWxlY3RvciBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3R5bGUoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU6IFJ1bGVUeXBlcy5Db21iaW5lZFN0eWxlc2V0KTogUnVsZVR5cGVzLklTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgU2VsZWN0b3JSdWxlKCBzZWxlY3Rvciwgc3R5bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgYW5pbWF0aW9uIHJ1bGUuIFRoZSBhbmltYXRpb24gbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBhbmltYXRpb24gcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG9cclxuICogXCJkZWNsYXJlXCIgdGhlIGFuaW1hdGlvbi4gU3VjaCBhbmltYXRpb24gY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzXHJcbiAqIG9yIGluIGRlcml2ZWQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRrZXlmcmFtZXMoIGZyYW1lcz86IFJ1bGVUeXBlcy5BbmltYXRpb25GcmFtZVtdLFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JQW5pbWF0aW9uUnVsZSk6IFJ1bGVUeXBlcy5JQW5pbWF0aW9uUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBBbmltYXRpb25SdWxlKCBmcmFtZXMsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjdXN0b20gdmFyaWFibGUgb2JqZWN0IHRoYXQgZGVmaW5lcyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuIFRoZSB2YXJpYWJsZSBuYW1lIHdpbGxcclxuICogYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhcyBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmVcclxuICogYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW4gZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGN1c3RvbSB2YXJpYWJsZSBydWxlLiBUaGVcclxuICogZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIHZhbHVlIGp1c3QgdG8gXCJkZWNsYXJlXCIgdGhlIHZhcmlhYmxlLiBTdWNoXHJcbiAqIHZhcmlhYmxlIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb25cclxuICogY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdmFyPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCB0ZW1wbGF0ZTogSywgcHJvcFZhbD86IFZhclZhbHVlVHlwZTxLPixcclxuXHRcdFx0XHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSVZhclJ1bGU8Sz4pOiBSdWxlVHlwZXMuSVZhclJ1bGU8Sz5cclxue1xyXG5cdHJldHVybiBuZXcgVmFyUnVsZSggdGVtcGxhdGUsIHByb3BWYWwsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjb3VudGVyIG9iamVjdC4gVGhlIGNvdW50ZXIgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjb3VudGVyIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNvdW50ZXIoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IFJ1bGVUeXBlcy5JQ291bnRlclJ1bGUpOiBSdWxlVHlwZXMuSUNvdW50ZXJSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENvdW50ZXJSdWxlKCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgaW1wb3J0IHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGltcG9ydCggdXJsOiBzdHJpbmcsIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LFxyXG5cdHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5KTogUnVsZVR5cGVzLklJbXBvcnRSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEltcG9ydFJ1bGUoIHVybCwgbWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBmb250LWZhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZm9udGZhY2UoIGZvbnRmYWNlOiBJRm9udEZhY2UpOiBSdWxlVHlwZXMuSUZvbnRGYWNlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIGZvbnRmYWNlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG5hbWVzcGFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRuYW1lc3BhY2UoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpOiBSdWxlVHlwZXMuSU5hbWVzcGFjZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgTmFtZXNwYWNlUnVsZSggbmFtZXNwYWNlLCBwcmVmaXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRwYWdlKCBwc2V1ZG9DbGFzcz86IFBhZ2VQc2V1ZG9DbGFzcywgc3R5bGU/OiBTdHlsZXNldCk6IFJ1bGVUeXBlcy5JUGFnZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgUGFnZVJ1bGUoIHBzZXVkb0NsYXNzLCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzdXBwb3J0czxUIGV4dGVuZHMgUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbjxPPiwgTyBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KFxyXG5cdHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBSdWxlVHlwZXMuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQsTz4pOiBSdWxlVHlwZXMuSVN1cHBvcnRzUnVsZTxUPlxyXG57XHJcblx0cmV0dXJuIG5ldyBTdXBwb3J0c1J1bGUoIHF1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkbWVkaWE8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb248Tz4sIE8gZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPihcclxuXHRxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgUnVsZVR5cGVzLklTdHlsZURlZmluaXRpb25DbGFzczxULE8+KTogUnVsZVR5cGVzLklNZWRpYVJ1bGU8VD5cclxue1xyXG5cdHJldHVybiBuZXcgTWVkaWFSdWxlKCBxdWVyeSwgaW5zdGFuY2VPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZXNoZWV0IGRlZmluaXRpb24gYW5kIHJldHVybnMgdGhlIFN0eWxlc2hlZXQgb2JqZWN0IHRoYXQgY29udGFpbnNcclxuICogbmFtZXMgb2YgSURzLCBjbGFzc2VzIGFuZCBrZXlmcmFtZXMgYW5kIGFsbG93cyBzdHlsZSBtYW5pcHVsYXRpb25zLiBGb3IgYSBnaXZlbiBzdHlsZXNoZWV0XHJcbiAqIGRlZmluaXRpb24gY2xhc3MgdGhlcmUgaXMgYSBzaW5nbGUgc3R5bGVzaGVldCBvYmplY3QsIG5vIG1hdHRlciBob3cgbWFueSB0aW1lcyB0aGlzIGZ1bmN0aW9uXHJcbiAqIGlzIGludm9rZWQuIEhvd2V2ZXIsIGlmIGFuIGluc3RhbmNlLCB3aGNpaCBoYXMgbm90IHlldCBiZWVuIHByb2Nlc3NlZCwgaXMgcGFzc2VkLCB0aGVuIGEgbmV3XHJcbiAqIHNldCBvZiBydWxlcyB3aWxsIGJlIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR1c2U8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5wcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3MpIGFzIFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBhbmQgaW5zZXJ0cyBhbGwgaXRzIHJ1bGVzIGludG8gRE9NLiBJZiB0aGUgaW5wdXQgb2JqZWN0IGlzIG5vdFxyXG4gKiBhIHN0eWxlc2hlZXQgYnV0IGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgb2J0YWluIHN0eWxlc2hlZXQgYnkgY2FsbGluZyB0aGUgJHVzZSBmdW5jdGlvbi5cclxuICogTm90ZSB0aGF0IGVhY2ggc3R5bGVzaGVldCBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzXHJcbiAqIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgaW5zZXJ0ZWQgaW50byBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXJcclxuICogZ29lcyB1cCB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhY3RpdmF0ZTxUIGV4dGVuZHMgUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbj4oXHJcblx0aW5zdGFuY2VPckNsYXNzOiBUIHwgUnVsZVR5cGVzLklTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHRyZXR1cm4gUnVsZUNvbnRhaW5lckZ1bmNzLmFjdGl2YXRlKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBieSByZW1vdmluZyBpdHMgcnVsZXMgZnJvbSBET00uIE5vdGUgdGhhdCBlYWNoIHN0eWxlc2hlZXRcclxuICogb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGVcclxuICogcnVsZXMgYXJlIHJlbW92ZWQgZnJvbSBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lcyBkb3duIHRvIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGRlYWN0aXZhdGUoIGluc3RhbmNlOiBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5kZWFjdGl2YXRlKCBpbnN0YW5jZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRyZXR1cm4gUnVsZUNvbnRhaW5lckZ1bmNzLmVuYWJsZVNob3J0TmFtZXMoIGVuYWJsZSwgcHJlZml4KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29uY2F0ZW5hdGVzIHRoZSBuYW1lcyBvZiB0aGUgZ2l2ZW4gY2xhc3NlcyBpbnRvIGEgc2luZ2xlIHN0cmluZyB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byBhXHJcbiAqIGBjbGFzc2AgcHJvcGVydHkgb2YgYW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gY2xhc3Nlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoIC4uLmNsYXNzZXM6IChSdWxlVHlwZXMuSU5hbWVkU3R5bGVSdWxlIHwgRXh0ZW5kZWQ8c3RyaW5nPilbXSk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbHVlVG9TdHJpbmcoIGNsYXNzZXMsIHtcclxuXHRcdGFycmF5SXRlbUZ1bmM6IHYgPT4gdiBpbnN0YW5jZW9mIENsYXNzUnVsZSA/IHYubmFtZSA6IHZhbHVlVG9TdHJpbmcodilcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0V4dGVuZGVkLCBDc3NQb3NpdGlvbiwgQ3NzTGVuZ3RoLCBDc3NQZXJjZW50LCBDc3NBbmdsZSwgQ3NzTnVtYmVyLCBPbmVPckJveCwgQ3NzUG9pbnR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtTZWxlY3Rvckl0ZW0sIFNlbGVjdG9yUHJveHl9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBTdHlsZXNldCwgRmlsdGVyUHJveHksIEJhc2ljU2hhcGVQcm94eSxcclxuXHRUcmFuc2Zvcm1Qcm94eSwgQm9yZGVyUmFkaXVzX1N0eWxlVHlwZSwgRmlsbFJ1bGVfU3R5bGVUeXBlXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZywgc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsIGJvcmRlclJhZGl1c1RvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2Zvcm1hdFNlbGVjdG9yfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yRnVuY3NcIjtcclxuaW1wb3J0IHtDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aCwgYXJyYXlUb1N0cmluZywgQ3NzQW5nbGVNYXRoLCBDc3NOdW1iZXJNYXRoLCBwb3NpdGlvblRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yLiBUaGlzIGZ1bmN0aW9uIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0IGJlXHJcbiAqIGludm9rZWQgd2l0aCB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3IoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBTZWxlY3Rvckl0ZW1bXSk6IFNlbGVjdG9yUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBmb3JtYXRTZWxlY3RvciggcGFydHMsIHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3R5bGVzZXQgbWFuaXB1bGF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIGEgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlUHJvcE5hbWUgU3R5bGUgcHJvcGVydHkgbmFtZSB0aGF0IGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkXHJcbiAqIHRvIGEgQ1NTIGNvbXBsaWFudCBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BWYWx1ZSBWYWx1ZSB0byBjb252ZXJ0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlUHJvcFZhbHVlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBzdHlsZVByb3BOYW1lOiBLLFxyXG5cdHN0eWxlUHJvcFZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4pOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHRyZXR1cm4gc3R5bGVQcm9wVG9TdHJpbmcoIHN0eWxlUHJvcE5hbWUsIHN0eWxlUHJvcFZhbHVlLCB0cnVlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB2YWx1ZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgZnJvbSB0aGUgZ2l2ZW4gU3R5bGVzZXQgb2JqZWN0IHRvIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZVxyXG4gKiBvZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtIEhUTUwgZWxlbWVudCB3aG9zZSBzdHlsZXMgd2lsbCBiZSBzZXQuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBTdHlsZXNldCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdmFsdWVzIGZvciBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRTdHlsZSggZWxtOiBIVE1MRWxlbWVudCwgc3R5bGVzZXQ6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0aWYgKHN0eWxlc2V0ID09IHVuZGVmaW5lZClcclxuXHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGxldCBlbG1TdHlsZSA9IGVsbS5zdHlsZTtcclxuXHRcdE9iamVjdC5rZXlzKHN0eWxlc2V0KS5mb3JFYWNoKCBrZXkgPT4gZWxtU3R5bGVba2V5XSA9IHN0eWxlUHJvcFRvU3RyaW5nKCBrZXksIHN0eWxlc2V0W2tleV0sIHRydWUpKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyB0d28gU3R5bGVzZXQgb2JqZWN0cyBieSBjb252ZXJ0aW5nIHN0eWxlIHByb3BlcnRpZXMgdG8gc3RyaW5ncyBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuICogdGhhdCBjb250YWlucyBzdHJpbmcgdmFsdWVzIG9mIHByb3BlcnRpZXMgdGhhdCB3ZXJlIG5ldyBvciBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG5ld1xyXG4gKiBzdHlsZXNldCBhbmQgdW5kZWZpbmVkIHZhbHVlcyBmb3IgcHJvcGVydGllcyB0aGF0IGV4aXN0IGluIHRoZSBvbGQgc3R5bGVzZXQgYnV0IGRvbid0IGV4aXN0XHJcbiAqIGluIHRoZSBuZXcgb25lLlxyXG4gKiBAcGFyYW0gb2xkU3R5bGVzZXQgXHJcbiAqIEBwYXJhbSBuZXdTdHlsZXNldCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmU3R5bGVzZXRzKCBvbGRTdHlsZXNldDogU3R5bGVzZXQsIG5ld1N0eWxlc2V0OiBTdHlsZXNldCk6IHsgW0s6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9IHwgbnVsbFxyXG57XHJcblx0Y29uc3QgdXBkYXRlVmFsOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSA9IHt9O1xyXG5cdGxldCBjaGFuZ2VzRXhpc3QgPSBmYWxzZTtcclxuXHJcblx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG9sZCBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBuZXcgb25lLiBUaGVzZVxyXG5cdC8vIHdpbGwgYmUgcmVtb3ZlZC5cclxuXHRmb3IoIGxldCBrZXkgaW4gb2xkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0bGV0IG5ld1ZhbCA9IG5ld1N0eWxlc2V0W2tleV07XHJcblx0XHRpZiAobmV3VmFsID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb2xkU3RyaW5nVmFsID0gc3R5bGVQcm9wVG9TdHJpbmcoIGtleSwgb2xkU3R5bGVzZXRba2V5XSwgdHJ1ZSk7XHJcblx0XHRcdGxldCBuZXdTdHJpbmdWYWwgPSBzdHlsZVByb3BUb1N0cmluZygga2V5LCBuZXdWYWwsIHRydWUpO1xyXG5cdFx0XHRpZiAob2xkU3RyaW5nVmFsICE9PSBuZXdTdHJpbmdWYWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgbmV3IHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG9sZCBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSBhZGRlZC5cclxuXHRmb3IoIGxldCBrZXkgaW4gbmV3U3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFZhbCA9IG9sZFN0eWxlc2V0W2tleV07XHJcblx0XHRpZiAob2xkVmFsID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gc3R5bGVQcm9wVG9TdHJpbmcoIGtleSwgbmV3U3R5bGVzZXRba2V5XSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY2hhbmdlc0V4aXN0ID8gdXBkYXRlVmFsIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIFtbU3R5bGVzZXRdXSBvYmplY3QgaW50byBhbiBvYmplY3QsIHdoZXJlIGVhY2ggU3R5bGVzZXQncyBwcm9wZXJ0eSBpc1xyXG4gKiBjb252ZXJ0ZWQgdG8gaXRzIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIHN0eWxlc2V0IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9TdHJpbmdPYmplY3QoIHN0eWxlc2V0OiBTdHlsZXNldCk6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9XHJcbntcclxuXHRsZXQgcmVzID0ge307XHJcblx0T2JqZWN0LmtleXMoIHN0eWxlc2V0KS5mb3JFYWNoKCBrZXkgPT4gcmVzW2tleV0gPSBzdHlsZVByb3BUb1N0cmluZygga2V5LCBzdHlsZXNldFtrZXldLCB0cnVlKSk7XHJcblx0cmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGaWx0ZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydGluZyBwZXJjZW50IHZhbHVlIHRvIGludm9jYXRpb24gb2YgdGhlIGdpdmVuIENTUyBmdW5jdGlvbi5cclxuZnVuY3Rpb24gcGVyY2VudEZpbHRlciggbmFtZTogc3RyaW5nLCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYW1vdW50KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBicmlnaHRuZXNzKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBicmlnaHRuZXNzKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiYnJpZ2h0bmVzc1wiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNvbnRyYXN0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250cmFzdCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImNvbnRyYXN0XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZ3JheXNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmF5c2NhbGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJncmF5c2NhbGVcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnZlcnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVydCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImludmVydFwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG9wYWNpdHkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJvcGFjaXR5XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2F0dXJhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdHVyYXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwic2F0dXJhdGVcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzZXBpYSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VwaWEoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzZXBpYVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJsdXIoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJsdXIoIHJhZGl1czogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYmx1cigke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggcmFkaXVzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBkcm9wU2hhZG93KClgIENTUyBmdW5jdGlvbi5cclxuICogQHBhcmFtIHggSG9yaXpvbnRhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIHkgVmVydGljYWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gYmx1ciBWYWx1ZSBvZiB0aGUgc2hhZG93J3MgYmx1cnJpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEgcGl4ZWwuXHJcbiAqIEBwYXJhbSBzcHJlYWQgVmFsdWUgb2YgdGhlIHNoYWRvdydzIHNwcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cclxuICogQHBhcmFtIGluc2V0IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzaGFkb3cgZ29lcyBpbnNpZGUgdGhlIHNoYXBlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wU2hhZG93KFxyXG4gICAgeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgIGJsdXI6IEV4dGVuZGVkPENzc0xlbmd0aD4gPSAxLFxyXG4gICAgc3ByZWFkOiBFeHRlbmRlZDxDc3NMZW5ndGg+ID0gMCk6IEZpbHRlclByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHsgeCwgeSwgY29sb3IsIGJsdXIsIHNwcmVhZH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGh1ZS1yb3RhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGh1ZVJvdGF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGh1ZS1yb3RhdGUoJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHNoYXBlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGluc2V0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNldCggb2Zmc2V0OiBFeHRlbmRlZDxPbmVPckJveDxDc3NMZW5ndGg+PiwgcmFkaXVzPzogRXh0ZW5kZWQ8Qm9yZGVyUmFkaXVzX1N0eWxlVHlwZT4pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdGxldCByID0gcmFkaXVzICE9IG51bGwgPyBcInJvdW5kIFwiICsgYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHJhZGl1cykgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBpbnNldCgke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBvZmZzZXQsIFwiIFwiKX0ke3J9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBpcyB1c2VkIHRvIHNwZWNpZnkgYSByYWRpdXMgaW4gW1tjaXJjbGVdXSBhbmQgW1tlbGxpcHNlXV0gZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVSYWRpdXMgPSBFeHRlbmRlZDxDc3NMZW5ndGggfCBcImNsb3Nlc3Qtc2lkZVwiIHwgXCJmYXJ0aGVzdC1zaWRlXCI+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY2lyY2xlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGUoIGNlbnRlcj86IFNoYXBlUmFkaXVzLCBwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IEJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgYyA9ICBjZW50ZXIgIT0gbnVsbCA/IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhjZW50ZXIpIDogXCJcIjtcclxuXHRsZXQgcG9zID0gcG9zaXRpb24gIT0gbnVsbCA/IFwiIGF0IFwiICsgcG9zaXRpb25Ub1N0cmluZyggcG9zaXRpb24pIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgY2lyY2xlKCR7Y30ke3Bvc30pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZWxsaXBzZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzZSggcng/OiBTaGFwZVJhZGl1cywgcnk/OiBTaGFwZVJhZGl1cyxcclxuXHRwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IEJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgcnhzID0gIHJ4ICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocngpIDogXCJcIjtcclxuICAgIGxldCByeXMgPSAgcnkgIT0gbnVsbCA/IFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ5KSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvc2l0aW9uVG9TdHJpbmcoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGVsbGlwc2UoJHtyeHN9JHtyeXN9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHBvbHlnb24oKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbHlnb24oIHBvaW50T3JSdWxlOiBDc3NQb2ludCB8IEZpbGxSdWxlX1N0eWxlVHlwZSxcclxuXHQuLi5wb2ludHM6IENzc1BvaW50W10pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzID0gXCJwb2x5Z29uKFwiO1xyXG5cdFx0aWYgKHR5cGVvZiBwb2ludE9yUnVsZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cyArPSBwb2ludE9yUnVsZSArIFwiLFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzICs9IGAke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBwb2ludE9yUnVsZSwgXCIgXCIpfSxgO1xyXG5cclxuXHRcdHMgKz0gcG9pbnRzLm1hcCggcHQgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHB0LCBcIiBcIikpLmpvaW4oXCIsXCIpO1xyXG5cclxuXHRcdHJldHVybiBzICsgXCIpXCI7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmFuc2Zvcm1zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdHJpeCggYTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRkOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHk6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYG1hdHJpeCgke2FycmF5VG9TdHJpbmcoIFthLCBiLCBjLCBkLCB0eCwgdHldLCB1bmRlZmluZWQsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4M2QoXHJcblx0XHRhMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjE6IEV4dGVuZGVkPENzc051bWJlcj4sIGMxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGEyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzI6IEV4dGVuZGVkPENzc051bWJlcj4sIGQyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTM6IEV4dGVuZGVkPENzc051bWJlcj4sIGIzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGM0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHQpOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYG1hdHJpeCgke2FycmF5VG9TdHJpbmcoIFthMSwgYjEsIGMxLCBkMSwgYTIsIGIyLCBjMiwgZDIsIGEzLCBiMywgYzMsIGQzLCBhNCwgYjQsIGM0LCBkNF0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHBlcnNwZWN0aXZlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZSggZDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgcGVyc3BlY3RpdmUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoZCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBDU1Mgcm90YXRpb24gZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiByb3RhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGEpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWCggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWFwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVZXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVooIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVpcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTNkKFxyXG5cdHg6IEV4dGVuZGVkPENzc051bWJlcj4sIHk6IEV4dGVuZGVkPENzc051bWJlcj4sIHo6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0YTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHkpLFxyXG5cdFx0Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHopLCBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHJvdGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoIGN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeT86IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNjYWxlKCR7Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKGN4KX0ke3N5ICE9IG51bGwgPyBcIixcIiArIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gc2NhbGUgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gc2NhbGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVgoIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWFwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWSggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVZXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVaKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVpcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUzZCggc3g6IEV4dGVuZGVkPENzc051bWJlcj4sIHN5OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdHN6OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeCksIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3opXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tldygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tldyggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPiwgYXk/OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXcoJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheCl9JHtheSAhPSBudWxsID8gXCIsXCIgKyBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WCggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tld1goJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tld1koKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXdZKCBheTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3WCgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZSggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeT86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHRyYW5zbGF0ZSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh4KX0ke3kgIT0gbnVsbCA/IFwiLFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHkpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIHRyYW5zbGF0ZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWCggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVhcIiwgeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWSggeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVlcIiwgeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWiggejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVpcIiwgeik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTNkKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LCB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdHo6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuXHRJQ3NzTnVtYmVyTWF0aCwgSUNzc0xlbmd0aE1hdGgsIElDc3NBbmdsZU1hdGgsIElDc3NUaW1lTWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLFxyXG5cdElDc3NGcmVxdWVuY3lNYXRoLCBJQ3NzUGVyY2VudE1hdGgsIEV4dGVuZGVkLCBTdHJpbmdQcm94eSxcclxuXHRVcmxQcm94eSwgQXR0clR5cGVLZXl3b3JkLCBBdHRyVW5pdEtleXdvcmQsIEF0dHJQcm94eVxyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NOdW1iZXJNYXRoLCBDc3NMZW5ndGhNYXRoLCBDc3NBbmdsZU1hdGgsIENzc1RpbWVNYXRoLCBDc3NSZXNvbHV0aW9uTWF0aCxcclxuXHRDc3NGcmVxdWVuY3lNYXRoLCBDc3NQZXJjZW50TWF0aCwgdmFsdWVUb1N0cmluZywgdGVtcGxhdGVTdHJpbmdUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtJVmFyUnVsZSwgSUNvdW50ZXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7VmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGUsIExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bnVtYmVyPmBcclxuICogQ1NTIHR5cGUuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXkgYXJlXHJcbiAqIGNvbnZlcnRlZCB0byBzdHJpbmdzIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1bml0cyB0byB0aGVtLlxyXG4gKi9cclxuZXhwb3J0IGxldCBOdW06IElDc3NOdW1iZXJNYXRoID0gbmV3IENzc051bWJlck1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBMZW4gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxsZW5ndGg+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBsZW5ndGggdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJweFwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImVtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IExlbjogSUNzc0xlbmd0aE1hdGggPSBuZXcgQ3NzTGVuZ3RoTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuZ2xlIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8YW5nbGU+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYW4gYW5nbGUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkZWdcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJ0dXJuXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEFuZ2xlOiBJQ3NzQW5nbGVNYXRoID0gbmV3IENzc0FuZ2xlTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRpbWUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDx0aW1lPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgdGltZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIm1zXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwic1wiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBUaW1lOiBJQ3NzVGltZU1hdGggPSBuZXcgQ3NzVGltZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSZXNvbHV0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHJlc29sdXRpb24gdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkcGlcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJkcGNtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFJlc29sdXRpb246IElDc3NSZXNvbHV0aW9uTWF0aCA9IG5ldyBDc3NSZXNvbHV0aW9uTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZyZXF1ZW5jeSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGZyZXF1ZW5jeSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIkh6XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwia0h6XCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEZyZXF1ZW5jeTogSUNzc0ZyZXF1ZW5jeU1hdGggPSBuZXcgQ3NzRnJlcXVlbmN5TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBlcmNlbnQgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxwZXJjZW50YWdlPmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgXCIlXCIgdW5pdCBzdWZmaXguXHJcbiAqL1xyXG5leHBvcnQgbGV0IFBlcmNlbnQ6IElDc3NQZXJjZW50TWF0aCA9IG5ldyBDc3NQZXJjZW50TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyByYXcoKVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBTdHJpbmdQcm94eSBmdW5jdGlvbiBlbmNhcHN1bGF0aW5nIHRoZSBnaXZlbiBzdHJpbmctbGlrZSBwYXJhbWV0ZXIuIFRoaXMgZnVuY3Rpb25cclxuICogYWxsb3dzIHNwZWNpZnlpbmcgYXJiaXRyYXJ5IHRleHQgZm9yIHByb3BlcnRpZXMgd2hvc2UgdHlwZSBub3JtYWxseSBkb2Vzbid0IGFsbG93IHN0cmluZ3MuXHJcbiAqIFRoaXMgaXMgdXNlZCBhcyBhbiBcImVzY2FwZSBoYXRjaFwiIHdoZW4gYSBzdHJpbmcgdmFsdWUgYWxyZWFkeSBleGlzdHMgYW5kIHRoZXJlIGlzIG5vIHNlbnNlXHJcbiAqIHRvIGNvbnZlcnQgaXQgdG8gYSBwcm9wZXIgdHlwZS4gVGhpcyBmdW5jdGlvbiBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdCBiZSBpbnZva2VkIHdpdGhcclxuICogdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhdyggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IGFueVtdKTogU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMsICh2OiBhbnkpID0+IHZhbHVlVG9TdHJpbmcoIHYpKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyB1c2V2YXIoKVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBTdHJpbmdQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGludm9jYXRpb24gb2YgdGhlIGB2YXIoKWAgQ1NTIGZ1bmN0aW9uIGZvclxyXG4gKiB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSB3aXRoIG9wdGlvbmFsIGZhbGxiYWNrcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2V2YXI8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHZhck9iajogSVZhclJ1bGU8Sz4sIGZhbGxiYWNrPzogVmFyVmFsdWVUeXBlPEs+KTogU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGZhbGxiYWNrXHJcbiAgICAgICAgPyBgdmFyKC0tJHt2YXJPYmoubmFtZX0sJHtzdHlsZVByb3BUb1N0cmluZyggdmFyT2JqLnRlbXBsYXRlLCBmYWxsYmFjaywgdHJ1ZSl9KWBcclxuICAgICAgICA6IGB2YXIoLS0ke3Zhck9iai5uYW1lfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIHVybCgpXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIFVybFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGB1cmwoKWAgZnVuY3Rpb24uIFRoZSBzdHJpbmcgcGFyYW1ldGVyXHJcbiAqIHdpbGwgYmUgd3JhcHBlZCBpbiBhIFwidXJsKClcIiBpbnZvY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVybCggdmFsOiBFeHRlbmRlZDxzdHJpbmc+KTogVXJsUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBgdXJsKCR7dmFsdWVUb1N0cmluZyh2YWwpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENvdW50ZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIFN0cmluZ1Byb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGBjb3VudGVyKClgIGZ1bmN0aW9uIHdpdGggYWRkaXRpb25hbFxyXG4gKiBvcHRpb25hbCBzdHJpbmdzIGFkZGVkIGFmdGVyIGFuZC9vciBiZWZvcmUgdGhlIGNvdW50ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY291bnRlciggY291bnRlck9iajogRXh0ZW5kZWQ8SUNvdW50ZXJSdWxlIHwgc3RyaW5nPixcclxuXHRzdHlsZT86IEV4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPixcclxuXHR0ZXh0QWZ0ZXI/OiBFeHRlbmRlZDxzdHJpbmc+LCB0ZXh0QmVmb3JlPzogRXh0ZW5kZWQ8c3RyaW5nPik6IFN0cmluZ1Byb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgc3R5bGVTdHJpbmcgPSBzdHlsZSA/IGAsJHt2YWx1ZVRvU3RyaW5nKCBzdHlsZSl9YCA6IFwiXCI7XHJcblx0XHRsZXQgYmVmb3JlID0gdGV4dEJlZm9yZSA/IGBcIiR7dmFsdWVUb1N0cmluZyggdGV4dEJlZm9yZSl9XCJgIDogXCJcIjtcclxuXHRcdGxldCBhZnRlciA9IHRleHRBZnRlciA/IGBcIiR7dmFsdWVUb1N0cmluZyggdGV4dEFmdGVyKX1cImAgOiBcIlwiO1xyXG5cdFx0cmV0dXJuIGAke2JlZm9yZX0gY291bnRlcigke3ZhbHVlVG9TdHJpbmcoY291bnRlck9iail9JHtzdHlsZVN0cmluZ30pICR7YWZ0ZXJ9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBTdHJpbmdQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgY291bnRlcigpYCBmdW5jdGlvbiB3aXRoIGFkZGl0aW9uYWxcclxuICogb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXJzKCBjb3VudGVyT2JqOiBFeHRlbmRlZDxJQ291bnRlclJ1bGUgfCBzdHJpbmc+LFxyXG5cdHNlcGFyYXRvcjogRXh0ZW5kZWQ8c3RyaW5nPiwgc3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBTdHJpbmdQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHNlcFN0cmluZyA9IHNlcGFyYXRvciA/IGBcIiR7dmFsdWVUb1N0cmluZyggc2VwYXJhdG9yKX1cImAgOiBgXCIuXCJgO1xyXG5cdFx0bGV0IHN0eWxlU3RyaW5nID0gc3R5bGUgPyBgLCR7dmFsdWVUb1N0cmluZyggc3R5bGUpfWAgOiBcIlwiO1xyXG5cdFx0bGV0IGJlZm9yZSA9IHRleHRCZWZvcmUgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHRleHRCZWZvcmUpfVwiYCA6IFwiXCI7XHJcblx0XHRsZXQgYWZ0ZXIgPSB0ZXh0QWZ0ZXIgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHRleHRBZnRlcil9XCJgIDogXCJcIjtcclxuXHRcdHJldHVybiBgJHtiZWZvcmV9IGNvdW50ZXJzKCR7dmFsdWVUb1N0cmluZyhjb3VudGVyT2JqKX0sJHtzZXBTdHJpbmd9JHtzdHlsZVN0cmluZ30pICR7YWZ0ZXJ9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gYXR0cigpXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBBdHRyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYXR0cigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXR0ciggYXR0ck5hbWU6IEV4dGVuZGVkPHN0cmluZz4sIHR5cGVPclVuaXQ/OiBFeHRlbmRlZDxBdHRyVHlwZUtleXdvcmQgfCBBdHRyVW5pdEtleXdvcmQ+LFxyXG5cdGZhbGxiYWNrPzogRXh0ZW5kZWQ8c3RyaW5nPik6IEF0dHJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGF0dHIoJHthdHRyTmFtZX0ke3R5cGVPclVuaXQgPyBcIiBcIiArIHR5cGVPclVuaXQgOiBcIlwifSR7ZmFsbGJhY2sgPyBcIixcIiArIGZhbGxiYWNrIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jc3NcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0NvbG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ltYWdlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9VdGlsQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9Db2xvckFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSW1hZ2VBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N0eWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9SdWxlQVBJXCI7XHJcbiIsImltcG9ydCB7SUFuaW1hdGlvblJ1bGUsIEFuaW1hdGlvbkZyYW1lLCBBbmltYXRpb25XYXlwb2ludCwgQW5pbWF0aW9uU3R5bGVzZXQsIElBbmltYXRpb25GcmFtZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXN9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQgeyB2YWx1ZVRvU3RyaW5nIH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25SdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBrZXlmcmFtZXMgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmcmFtZXM/OiBBbmltYXRpb25GcmFtZVtdLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGlmIChmcmFtZXMpXHJcblx0XHRcdHRoaXMuZnJhbWVSdWxlcyA9IGZyYW1lcy5tYXAoIGZyYW1lID0+IG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoIGZyYW1lWzBdLCBmcmFtZVsxXSkpO1xyXG5cclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoICBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG5cdFx0Zm9yKCBsZXQga2V5ZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0a2V5ZnJhbWVSdWxlLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBbmltYXRpb25SdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQW5pbWF0aW9uUnVsZSh1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHRcdGlmICh0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdG5ld1J1bGUuZnJhbWVSdWxlcyA9IHRoaXMuZnJhbWVSdWxlcy5tYXAoIGZyYW1lUnVsZSA9PiBmcmFtZVJ1bGUuY2xvbmUoKSBhcyBBbmltYXRpb25GcmFtZVJ1bGUpO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGtleWZyYW1lcyAke3RoaXMubmFtZX0ge31gLCBwYXJlbnQpIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdFx0bGV0IGNzc0tleWZyYW1lc1J1bGUgPSB0aGlzLmNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHRcdGZvciggbGV0IGZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3NzS2V5ZnJhbWVzUnVsZS5hcHBlbmRSdWxlKCBmcmFtZVJ1bGUudG9Dc3NTdHJpbmcoKSlcclxuXHRcdFx0XHRsZXQgY3NzUnVsZSA9IGNzc0tleWZyYW1lc1J1bGUuY3NzUnVsZXMuaXRlbSggIGNzc0tleWZyYW1lc1J1bGUuY3NzUnVsZXMubGVuZ3RoIC0gMSk7XHJcblx0XHRcdFx0aWYgKGNzc1J1bGUpXHJcblx0XHRcdFx0XHRmcmFtZVJ1bGUuY3NzS2V5ZnJhbWVSdWxlID0gY3NzUnVsZSBhcyBDU1NLZXlmcmFtZVJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goeClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwiQ2Fubm90IGFkZCBDU1Mga2V5ZnJhbWUgcnVsZVwiLCB4KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gY29udmVydCBhbiBvYmplY3QgdG8gYSBzdHJpbmcuIEFuaW1hdGlvbiBydWxlIHJldHVybnMgaXRzIG5hbWUuXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3R5bGUgcnVsZXMgcmVwcmVzZW50aW5nIGFuaW1hdGlvbiBmcmFtZXMgKi9cclxuXHRwdWJsaWMgZnJhbWVSdWxlczogQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBrZXlmcmFtZSBjbGF1c2UgaW4gdGhlIGFuaW1hdGlvbiBydWxlLlxyXG4gKi9cclxuY2xhc3MgQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUFuaW1hdGlvbkZyYW1lUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQsIHN0eWxlc2V0PzogQW5pbWF0aW9uU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlc2V0KTtcclxuXHRcdHRoaXMud2F5cG9pbnQgPSB3YXlwb2ludDtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBBbmltYXRpb25GcmFtZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSggdGhpcy53YXlwb2ludCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyggdGhpcy53YXlwb2ludCwge1xyXG5cdFx0XHRmcm9tTnVtYmVyOiB2ID0+IHYgKyBcIiVcIixcclxuXHRcdFx0YXJyYXlJdGVtRnVuYzogdiA9PiB2YWx1ZVRvU3RyaW5nKCB2LCB7IGZyb21OdW1iZXI6IHYgPT4gdiArIFwiJVwiIH0pLFxyXG5cdFx0XHRhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuXHRcdH0pXHJcblx0XHQvLyByZXR1cm4gdHlwZW9mIHRoaXMud2F5cG9pbnQgPT09IFwic3RyaW5nXCIgPyB0aGlzLndheXBvaW50IDogdGhpcy53YXlwb2ludCArIFwiJVwiO1xyXG5cdH1cclxuXHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50ICovXHJcblx0cHVibGljIHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludDtcclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZSBydWxlICovXHJcblx0cHVibGljIGNzc0tleWZyYW1lUnVsZTogQ1NTS2V5ZnJhbWVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUNvdW50ZXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvdW50ZXJSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIG5hbWVkIGNvdW50ZXIgZGVmaW5pdGlvbi4gVXNlIHRoaXMgcnVsZSB0byBjcmVhdGVcclxuICogY291bnRlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWQgaW4gY291bnRlci1pbmNyZW1lbnQsIGNvdW50ZXItcmVzZXQgYW5kIGNvdW50ZXItc2V0IHN0eWxlXHJcbiAqIHByb3BlcnRpZXMuIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGNvdW50ZXJzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmVcclxuICogY291bnRlciBkZWZpbml0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyUnVsZSBpbXBsZW1lbnRzIElDb3VudGVyUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ291bnRlclJ1bGUpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFx0W3RoaXMubmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBDb3VudGVyUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQ291bnRlclJ1bGUoIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIGNvdW50ZXIgbmFtZS5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBjb3VudGVyICovXHJcblx0cHVibGljIGdldCBjb3VudGVyTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5uYW1lOyB9XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncyBhbmQgd2hpY2ggaGFzZSB0aGUgQ1NTU3R5bGVSdWxlIHRocm91Z2ggd2hpY2hcclxuXHQvLyB0aGUgdmFsdWUgb2YgdGhpcyBjdXN0b20gdmFyaWFibGUgY2FuIGJlIGNoYW5nZWQuXHJcblx0cHVibGljIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIFN0eWxlRGVmaW5pdGlvbiwgSUdyb3VwUnVsZSwgSU1lZGlhUnVsZSwgSVN1cHBvcnRzUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtnZXRDb250YWluZXJGcm9tRGVmaW5pdGlvbiwgcHJvY2Vzc0luc3RhbmNlT3JDbGFzc30gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7SVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGV9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge3N1cHBvcnRzUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcm91cFJ1bGUgY2xhc3Mgc2VydmVzIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIGdyb3VwaW5nIENTUyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaW5zdGFuY2VPckNsYXNzID0gaW5zdGFuY2VPckNsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0bGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggdGhpcy5pbnN0YW5jZU9yQ2xhc3MsIG93bmVyLmdldERlZmluaXRpb25JbnN0YW5jZSgpKTtcclxuXHRcdGlmICghaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblx0XHR0aGlzLnJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tRGVmaW5pdGlvbiggaW5zdGFuY2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0R3JvdXBTZWxlY3RvclRleHQoKTtcclxuXHRcdGlmICghc2VsZWN0b3IpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYCR7c2VsZWN0b3J9IHt9YCwgcGFyZW50KSBhcyBDU1NTdXBwb3J0c1J1bGU7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmluc2VydFJ1bGVzKCB0aGlzLmNzc1J1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGNsZWFyIHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmNsZWFyUnVsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IGRlZmluZXMgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIGZvciB0aGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRwcm90ZWN0ZWQgcnVsZUNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGRlZmluaW5nIHRoZSBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGVcclxuXHRwdWJsaWMgZ2V0IHJ1bGVzKCk6IFQgeyByZXR1cm4gdGhpcy5pbnN0YW5jZSBhcyBUOyB9XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3VwcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPE8+LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IFN1cHBvcnRzUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxULE8+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFN1cHBvcnRzUnVsZTxULE8+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBTdXBwb3J0c1J1bGU8VCxPPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0Ly8gY29udmVydCB0aGUgcXVlcnkgdG8gaXRzIHN0cmluZyBmb3JtXHJcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBxdWVyeSBpcyBzdXBwb3J0ZWQgYW5kIGlmIGl0IGlzIG5vdCwgZG9uJ3QgaW5zZXJ0IHRoZSBydWxlXHJcblx0XHRyZXR1cm4gQ1NTLnN1cHBvcnRzKCBxdWVyeVN0cmluZykgPyBgQHN1cHBvcnRzICR7cXVlcnlTdHJpbmd9YCA6IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBzdXBwb3J0IHF1ZXJ5IGZvciB0aGlzIHJ1bGUgaW4gYSBzdHJpbmcgZm9ybS5cclxuXHRwdWJsaWMgcXVlcnk6IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE1lZGlhUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPE8+LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElNZWRpYVJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxULE8+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE1lZGlhUnVsZTxULE8+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBNZWRpYVJ1bGU8VCxPPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gdHlwZW9mIHRoaXMucXVlcnkgPT09IFwic3RyaW5nXCIgPyB0aGlzLnF1ZXJ5IDogbWVkaWFRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KTtcclxuXHRcdHJldHVybiBgQG1lZGlhICR7cXVlcnlTdHJpbmd9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUZvbnRGYWNlUnVsZSwgSUltcG9ydFJ1bGUsIElQYWdlUnVsZSwgSU5hbWVzcGFjZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtmb250RmFjZVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlRnVuY3NcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQge1BhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRm9udEZhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBmb250LWZhY2UgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9udEZhY2VSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElGb250RmFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZm9udGZhY2U6IElGb250RmFjZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZm9udGZhY2UgPSBmb250ZmFjZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBGb250RmFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggdGhpcy5mb250ZmFjZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGZvbnQtZmFjZSAke2ZvbnRGYWNlVG9TdHJpbmcoIHRoaXMuZm9udGZhY2UpfWAsXHJcblx0XHRcdHBhcmVudCkgYXMgQ1NTRm9udEZhY2VSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0ZvbnRGYWNlUnVsZTtcclxuXHJcblx0Ly8gT2JqZWN0IGRlZmluaW5nIGZvbnQtZmFjZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBmb250ZmFjZTogSUZvbnRGYWNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSW1wb3J0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEltcG9ydFJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUltcG9ydFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdXJsOiBzdHJpbmcsIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMudXJsID0gdXJsO1xyXG5cdFx0dGhpcy5tZWRpYVF1ZXJ5ID0gbWVkaWFRdWVyeTtcclxuXHRcdHRoaXMuc3VwcG9ydHNRdWVyeSA9IHN1cHBvcnRzUXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJbXBvcnRSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB0aGlzLnVybCwgdGhpcy5tZWRpYVF1ZXJ5LCB0aGlzLnN1cHBvcnRzUXVlcnkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgdXJsO1xyXG5cdFx0aWYgKCF0aGlzLnVybClcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0ZWxzZSBpZiAodGhpcy51cmwuc3RhcnRzV2l0aChcInVybFwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiXFxcIlwiKSB8fCB0aGlzLnVybC5zdGFydHNXaXRoKFwiJ1wiKSlcclxuXHRcdFx0dXJsID0gdGhpcy51cmw7XHJcblx0XHRlbHNlXHJcblx0XHRcdHVybCA9IGB1cmwoJHt0aGlzLnVybH0pYDtcclxuXHJcblx0XHRsZXQgc3VwcG9ydHNRdWVyeVN0cmluZyA9ICF0aGlzLnN1cHBvcnRzUXVlcnlcclxuXHRcdFx0PyBcIlwiXHJcblx0XHRcdDogdHlwZW9mIHRoaXMuc3VwcG9ydHNRdWVyeSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdD8gdGhpcy5zdXBwb3J0c1F1ZXJ5XHJcblx0XHRcdFx0OiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblxyXG5cdFx0aWYgKHN1cHBvcnRzUXVlcnlTdHJpbmcgJiYgIXN1cHBvcnRzUXVlcnlTdHJpbmcuc3RhcnRzV2l0aCggXCJzdXBwb3J0c1wiKSlcclxuXHRcdHN1cHBvcnRzUXVlcnlTdHJpbmcgPSBgc3VwcG9ydHMoICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gKWA7XHJcblxyXG5cdFx0bGV0IG1lZGlhUXVlcnlTdHJpbmcgPSAhdGhpcy5tZWRpYVF1ZXJ5XHJcblx0XHRcdD8gXCJcIlxyXG5cdFx0XHQ6IHR5cGVvZiB0aGlzLm1lZGlhUXVlcnkgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0XHQ/IHRoaXMubWVkaWFRdWVyeVxyXG5cdFx0XHRcdDogbWVkaWFRdWVyeVRvU3RyaW5nKCB0aGlzLm1lZGlhUXVlcnkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAaW1wb3J0ICR7dXJsfSAke3N1cHBvcnRzUXVlcnlTdHJpbmd9ICR7bWVkaWFRdWVyeVN0cmluZ31gLFxyXG5cdFx0XHRwYXJlbnQpIGFzIENTU0ltcG9ydFJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIGltcG9ydCBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0ltcG9ydFJ1bGU7XHJcblxyXG5cdC8vIFVSTCB0byBpbXBvcnQgZnJvbS5cclxuXHRwdWJsaWMgdXJsOiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG5cclxuXHQvLyBPcHRpb25hbCBzdXBwb3J0cyBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhZ2VSdWxlIGNsYXNzIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhZ2VSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVBhZ2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzLCBzdHlsZT86IFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnBzZXVkb0NsYXNzID0gcHNldWRvQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBQYWdlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgUGFnZVJ1bGUoIHRoaXMucHNldWRvQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYEBwYWdlICR7dGhpcy5wc2V1ZG9DbGFzcyA/IHRoaXMucHNldWRvQ2xhc3MgOiBcIlwifWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gcGFnZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1BhZ2VSdWxlO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgbmFtZSBvZiB0aGUgcGFnZSBwc2V1ZG8gc3R5bGUgKGUuZy4gXCJcIjpmaXJzdFwiKSAqL1xyXG5cdHB1YmxpYyBwc2V1ZG9DbGFzczogUGFnZVBzZXVkb0NsYXNzIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmFtZXNwYWNlUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5hbWVzcGFjZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSU5hbWVzcGFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xyXG5cdFx0dGhpcy5wcmVmaXggPSBwcmVmaXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBOYW1lc3BhY2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBOYW1lc3BhY2VSdWxlKCB0aGlzLm5hbWVzcGFjZSwgdGhpcy5wcmVmaXgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMubmFtZXNwYWNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHVybCA9IHRoaXMubmFtZXNwYWNlLnN0YXJ0c1dpdGgoIFwidXJsKFwiKSA/IHRoaXMubmFtZXNwYWNlIDogYHVybCgke3RoaXMubmFtZXNwYWNlfSlgO1xyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAbmFtZXNwYWNlICR7dGhpcy5wcmVmaXggPyB0aGlzLnByZWZpeCA6IFwiXCJ9ICR7dXJsfWAsXHJcblx0XHRcdHBhcmVudCkgYXMgQ1NTTmFtZXNwYWNlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBuYW1lc3BhY2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NOYW1lc3BhY2VSdWxlO1xyXG5cclxuXHQvKiogTmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgbmFtZXNwYWNlOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBwcmVmaXggZm9yIHRoZSBydWxlICovXHJcblx0cHVibGljIHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lSdWxlLCBJTmFtZWRFbnRpdHksIFN0eWxlRGVmaW5pdGlvbn0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgdGhhdCBhY2NvbXBhbmllcyBhbmQgaXMgYXNzb2NpYXRlZCB3aXRoXHJcbiAqIGEgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlQ29udGFpbmVyXHJcbntcclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZDtcclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdGNsZWFyUnVsZXMoKTogdm9pZDtcclxuXHJcblx0LyoqIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuICovXHJcblx0c2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRvcExldmVsUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCB0aGF0IFwib3duc1wiXHJcbiAqIHRoZSBydWxlcyB1bmRlciB0aGlzIGNvbnRhaW5lci4gSW4gcGFydGljdWxhciwgdGhlIG93bmVyJ3Mgam9iIGlzIHRvIGdlbmVyYXRlIFwic2NvcGVkXCIgdW5pcXVlXHJcbiAqIG5hbWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGV4dGVuZHMgSVJ1bGVDb250YWluZXJcclxue1xyXG5cdC8qKiBHZW5lcmF0ZXMgYSBuYW1lLCB3aGljaCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGlzIHN0eWxlc2hlZXQgKi9cclxuXHRnZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBydWxlcy4gQXMgYSBwYXJlbnQgb2YgUnVsZUNvbnRhaW5lciwgdGhlIFJ1bGVcclxuICogY2xhc3MgaXMgYWxzbyBhbiBhbmNlc3RvciBmb3IgU3R5bGVzaGVldDsgaG93ZXZlciwgbW9zdCBvZiBpdHMgdGhlIGZpZWxkcyBhcmUgdW5kZWZpbmVkIGluXHJcbiAqIHRlIFN0eWxlc2hlZXQgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGUgaW1wbGVtZW50cyBJUnVsZVxyXG57XHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xyXG5cdFx0dGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGU7XHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdC8vIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBhY3RpdmF0ZWQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZCB7fVxyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2hcclxuXHQvLyB0aGlzIHJ1bGUgYmVsb25ncywgaXMgZGVhY3RpdmF0ZWQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWQgeyB0aGlzLmNzc1J1bGUgPSBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgZ2l2ZW4gcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkUnVsZVRvRE9NKCBydWxlVGV4dDogc3RyaW5nLCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlIHwgbnVsbFxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0XHRyZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCB4KVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgQ2Fubm90IGFkZCBDU1MgcnVsZSAnJHtydWxlVGV4dH0nYCwgeClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN0eWxlc2hlZXQgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuIFRoaXMgaXMgXCJ0aGlzXCIgZm9yIFN0eWxlc2hlZXQuXHJcblx0cHVibGljIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBydWxlTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblx0Ly8gQ1NTUnVsZS1kZXJpdmVkIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBhY3R1YWxsIENTUyBydWxlIGluc2VydGVkIGludG9cclxuXHQvLyB0aGUgc3R5bGVzIHNoZWV0IG9yIHRoZSBwYXJlbnQgcnVsZS4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIFN0eWxlc2hlZXQgb2JqZWN0cy5cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgc2NvcGVkIG5hbWVzIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOYW1lcyggb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHksXHJcblx0Y3NzUHJlZml4Pzogc3RyaW5nKTogW3N0cmluZyxzdHJpbmddXHJcbntcclxuXHRpZiAoIXJ1bGVOYW1lICYmICFuYW1lT3ZlcnJpZGUpXHJcblx0XHRyZXR1cm4gW1wiXCIsIFwiXCJdO1xyXG5cclxuXHRsZXQgbmFtZSA9ICFuYW1lT3ZlcnJpZGVcclxuXHRcdD8gb3duZXIuZ2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lISlcclxuXHRcdDogdHlwZW9mIG5hbWVPdmVycmlkZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHQ/IG5hbWVPdmVycmlkZVxyXG5cdFx0XHQ6IG5hbWVPdmVycmlkZS5uYW1lO1xyXG5cclxuXHRyZXR1cm4gIWNzc1ByZWZpeFxyXG5cdFx0PyBbbmFtZSxuYW1lXVxyXG5cdFx0OiBuYW1lLnN0YXJ0c1dpdGgoIGNzc1ByZWZpeClcclxuXHRcdFx0PyBbbmFtZS5zdWJzdHIoIGNzc1ByZWZpeC5sZW5ndGgpLCBuYW1lXVxyXG5cdFx0XHQ6IFtuYW1lLCBjc3NQcmVmaXggKyBuYW1lXTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1N0eWxlRGVmaW5pdGlvbiwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXJ9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuL1ZhclJ1bGVcIlxyXG5pbXBvcnQge0NvdW50ZXJSdWxlfSBmcm9tIFwiLi9Db3VudGVyUnVsZXNcIjtcclxuaW1wb3J0IHtJbXBvcnRSdWxlLCBOYW1lc3BhY2VSdWxlfSBmcm9tIFwiLi9NaXNjUnVsZXNcIlxyXG5cclxuXHJcblxyXG4vLyBEZWZpbmUgc3ltYm9scyB0aGF0IGFyZSB1c2VkIGZvciBrZWVwaW5nIGltcG9ydGFudCBpbmZvcm1hdGlvbiBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZSBkb24ndCB3YW50IHRvIGJlIHZpc2libGUgdG8gZGV2ZWxvcGVycy5cclxuXHJcbi8qKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBwb2ludGluZyB0byB0aGUgc2luZ2x0b24gaW5zdGFuY2UuICovXHJcbmNvbnN0IHN5bUluc3RhbmNlID0gU3ltYm9sKFwiZGVmaW5pdGlvblwiKTtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBwb2ludGluZyB0byB0aGUgUnVsZUNvbnRhaW5lciBvYmplY3QgdGhhdCBpc1xyXG4gKiByZXNwb25zaWJsZSBmb3IgcHJvY2Vzc2luZyBydWxlcy5cclxuICovXHJcbmNvbnN0IHN5bVJ1bGVDb250YWluZXIgPSBTeW1ib2woXCJydWxlQ29udGFpbmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVDb250YWluZXIgY2xhc3MgaXMgYSBzaGFkb3cgc3RydWN0dXJlIHRoYXQgYWNjb21wYW5pZXMgZXZlcnkgcHJvY2Vzc2VkIHN0eWxlIGRlZmluaXRpb25cclxuICogb2JqZWN0LiBTaW5jZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYW4gZXhwb3J0ZWQgY2xhc3MgdmlzaWJsZSB0byBkZXZlbG9wZXJzLCB3ZSBkb24ndCB3YW50XHJcbiAqIHRvIGhhdmUgYSBsb3Qgb2YgZnVuY3Rpb25hbGl0eSBpbiBpdC4gVGhlIFJ1bGVDb250YWluZXIgb2JqZWN0IGlzIGxpbmtlZCB0byB0aGUgU3R5bGVEZWZpbml0aW9uXHJcbiAqIG9iamVjdCB2aWEgdGhlIFtzeW1SdWxlQ29udGFpbmVyXSBzeW1ib2wuIEl0IGNvbnRhaW5zIGFsbCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgcGFyc2luZyBydWxlXHJcbiAqIGRlZmluaXRpb25zLCBuYW1lIGFzc2lnbm1lbnQgYW5kIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG4gKi9cclxuY2xhc3MgUnVsZUNvbnRhaW5lciBpbXBsZW1lbnRzIElUb3BMZXZlbFJ1bGVDb250YWluZXJcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHRcdHRoaXMuZGVmaW5pdGlvbkNsYXNzID0gaW5zdGFuY2UuY29uc3RydWN0b3IgYXMgSVN0eWxlRGVmaW5pdGlvbkNsYXNzO1xyXG5cdFx0dGhpcy5vd25lciA9IGluc3RhbmNlLm93bmVyO1xyXG5cclxuXHRcdHRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID0gMDtcclxuXHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cclxuXHRcdHRoaXMucHJvY2VzcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgY3JlYXRlcyBuYW1lcyBmb3IgY2xhc3NlcyxcclxuXHQvLyBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSB2YXJpYWJsZXMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBwdXQgcmVmZXJlbmNlIHRvIHRoaXMgY29udGFpbmVyIGluIHRoZSBzeW1ib2wgcHJvcGVydHkgb2YgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0XHR0aGlzLmluc3RhbmNlW3N5bVJ1bGVDb250YWluZXJdID0gdGhpcztcclxuXHJcblx0XHQvLyBpZiB0aGUgb3duZXIgdGFrZW4gZnJvbSB0aGUgaW5zdGFuY2UgaXMgbnVsbCAodGhhdCBpcyB0aGlzIGlzIGEgdG9wLWxldmVsIGRlZmluaXRpb24pLFxyXG5cdFx0Ly8gY2hhbmdlIG91ciBvd25lciBwcm9wZXJ0eSB0byBwb2ludCB0byB0aGUgaW5zdGFuY2UgaXRzZWxmXHJcblx0XHRpZiAoIXRoaXMub3duZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMub3duZXIgPSB0aGlzLmluc3RhbmNlO1xyXG5cdFx0XHR0aGlzLnRvcExldmVsQ29udGFpbmVyID0gdGhpcztcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy50b3BMZXZlbENvbnRhaW5lciA9IHRoaXMub3duZXJbc3ltUnVsZUNvbnRhaW5lcl07XHJcblxyXG5cdFx0Ly8gaWYgb3VyIGNvbnRhaW5lciBpcyBub3QgdGhlIHRvcC1sZXZlbCBjb250YWluZXIsIHByZWZpeCBvdXIgbmFtZSB3aXRoIHRoZSB1cHBlciBvbmVcclxuXHRcdGlmICghdGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHR0aGlzLm5hbWUgPSBgJHt0aGlzLnRvcExldmVsQ29udGFpbmVyLm5hbWV9XyR7dGhpcy5uYW1lfWA7XHJcblxyXG5cdFx0dGhpcy5pbXBvcnRzID0gW107XHJcblx0XHR0aGlzLm5hbWVzcGFjZXMgPSBbXTtcclxuXHRcdHRoaXMudmFycyA9IFtdO1xyXG5cdFx0dGhpcy5yZWZzID0gW107XHJcblx0XHR0aGlzLm90aGVyUnVsZXMgPSBbXTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRoZW0uXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggcHJvcE5hbWUsIHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSZWZlcmVuY2UoIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgVmFyUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzVmFyUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgQ291bnRlclJ1bGUpXHJcblx0XHRcdHRoaXMucHJvY2Vzc0NvdW50ZXJSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NBcnJheSggcHJvcFZhbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJlZmVyZW5jZSB0byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gY3JlYXRlZCBieSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHByb2Nlc3NSZWZlcmVuY2UoIHJlZjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucmVmcy5wdXNoKCByZWYpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIHByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgdmFyT2JqOiBWYXJSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlc2hlZXQsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0Ly8gcnVsZSBhbmQgYXNzaWduIGl0IHRvIG91ciBzdHlsZXNoZWV0LlxyXG5cdFx0aWYgKHZhck9iai5jb250YWluZXIpXHJcblx0XHRcdHZhck9iaiA9IHZhck9iai5jbG9uZSgpO1xyXG5cclxuXHRcdHZhck9iai5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblx0XHR0aGlzLnZhcnMucHVzaCggdmFyT2JqKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIGNvdW50ZXIgb2JqZWN0LlxyXG5cdHByaXZhdGUgcHJvY2Vzc0NvdW50ZXJSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgY291bnRlcjogQ291bnRlclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAoY291bnRlci5jb250YWluZXIpXHJcblx0XHRcdGNvdW50ZXIgPSBjb3VudGVyLmNsb25lKCk7XHJcblxyXG5cdFx0Y291bnRlci5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gUnVsZS1kZXJpdmVkIG9iamVjdC5cclxuXHRwcml2YXRlIHByb2Nlc3NSdWxlKCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcnVsZTogUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgcnVsZSBvYmplY3QgaXMgYWxyZWFkeSBwcm9jZXNzZWQgYXMgcGFydCBvZiBhbm90aGVyIGluc3RhbmNlLCB3ZSBjcmVhdGUgYSBjbG9uZVxyXG5cdFx0Ly8gb2YgdGhlIHJ1bGUgYW5kIHNldCBpdCB0byBvdXIgaW5zdGFuY2UuXHJcblx0XHRpZiAocnVsZS5vd25lcilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lKVxyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdID0gcnVsZSA9IHJ1bGUuY2xvbmUoKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gVE9ETzogc3VwcG9ydCBhbHJlYWR5IHVzZWQgcnVsZXMgaW4gYW4gYXJyYXlcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRydWxlLnByb2Nlc3MoIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHJcblx0XHRpZiAocnVsZSBpbnN0YW5jZW9mIEltcG9ydFJ1bGUpXHJcblx0XHRcdHRoaXMuaW1wb3J0cy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBOYW1lc3BhY2VSdWxlKVxyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMucHVzaCggcnVsZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMub3RoZXJSdWxlcy5wdXNoKCBydWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJ1bGVzIGZyb20gdGhlIGdpdmVuIGFycmF5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc0FycmF5KCBwcm9wVmFsczogYW55W10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wVmFscyB8fCBwcm9wVmFscy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRob3NlIHRoYXQgYXJlIHJ1bGVzLlxyXG5cdFx0Zm9yKCBsZXQgcHJvcFZhbCBvZiBwcm9wVmFscylcclxuXHRcdFx0dGhpcy5wcm9jZXNzUHJvcGVydHkoIG51bGwsIHByb3BWYWwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyAqL1xyXG5cdHB1YmxpYyBnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHNldEN1c3RvbVZhclZhbHVlKCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodmFsdWUgIT0gbnVsbClcclxuXHRcdFx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggbmFtZSwgdmFsdWUsIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogbnVsbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggbmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBhIGdsb2JhbGx5IHVuaXF1ZSBDU1MgbmFtZSBmb3IgdGhlIGdpdmVuIHJ1bGUgbmFtZSB1bmxlc3MgdGhpcyBydWxlIG5hbWUgYWxyZWFkeVxyXG5cdCAqIGV4aXN0cyBlaXRoZXIgaW4gYSBiYXNlIGNsYXNzIG9yIGluIHRoZSBjaGFpbiBvZiBwYXJlbnQgZ3JvdXBpbmcgcnVsZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gaWYgcnVsZSBuYW1lIHdhcyBub3Qgc3BlY2lmaWVkLCBnZW5lcmF0ZSBpdCB1bmlxdWVseTsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHdlXHJcblx0XHQvLyBhbHJlYWR5IGhhdmUgdGhpcyBydWxlIG5hbWU6IGlmIHllcywgcmV0dXJuIHRoZSBhbHJlYWR5IGFzc2lnbmVkIG5hbWUuIElmIHdlIGRpZG4ndFxyXG5cdFx0Ly8gZmluZCB0aGUgbmFtZSwgdHJ5IHRvIGZpbmQgaXQgaW4gdGhlIGJhc2UgY2xhc3Nlcyk7IGlmIG5vdCBmb3VuZCB0aGVyZSwgZ2VuZXJhdGUgaXRcclxuXHRcdC8vIHVzaW5nIHRoaXMgY29udGFpbmVyJ3MgbmFtZSBhbmQgdGhlIHJ1bGUgbmFtZSAobm90ZSB0aGF0IGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgYm90aFxyXG5cdFx0Ly8gY2FuIGJlIGdlbmVyYXRlZCB1bmlxdWVseSkuXHJcblx0XHRpZiAoIXJ1bGVOYW1lKVxyXG5cdFx0XHRyZXR1cm4gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRlbHNlIGlmIChydWxlTmFtZSBpbiB0aGlzLmluc3RhbmNlICYmIFwibmFtZVwiIGluIHRoaXMuaW5zdGFuY2VbcnVsZU5hbWVdKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0ubmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCBvdXQgaWYgdGhlcmUgaXMgYSBydWxlIHdpdGggdGhpcyBuYW1lIGRlZmluZWQgaW4gYSBzdHlsZXNoZWV0IGluc3RhbmNlIGNyZWF0ZWQgZm9yXHJcblx0XHRcdC8vIGEgY2xhc3MgZnJvbSB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLlxyXG5cdFx0XHRsZXQgZXhpc3RpbmdOYW1lID0gZmluZE5hbWVGb3JSdWxlSW5Qcm90b3R5cGVDaGFpbiggdGhpcy5kZWZpbml0aW9uQ2xhc3MsIHJ1bGVOYW1lKTtcclxuXHRcdFx0cmV0dXJuIGV4aXN0aW5nTmFtZSA/IGV4aXN0aW5nTmFtZSA6IGdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRwdWJsaWMgaW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBhY3RpdmF0ZSByZWZlcmVuY2VkIHN0eWxlIGRlZmluaXRpb25zXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltUnVsZUNvbnRhaW5lcl0uYWN0aXZhdGUoKTtcclxuXHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaXNlcnQgb3VyIGN1c3RvbSB2YXJpYWJsZXMgaW4gYSBcIjpyb290XCIgcnVsZVxyXG5cdFx0aWYgKHRoaXMudmFycy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgOnJvb3QgeyR7dGhpcy52YXJzLm1hcCggdmFyT2JqID0+XHJcblx0XHRcdFx0dmFyT2JqLnRvQ3NzU3RyaW5nKCkpLmZpbHRlciggdiA9PiB2ICE9IG51bGwpLmpvaW4oXCI7XCIpfX1gLCBwYXJlbnQpIGFzIENTU1N0eWxlUnVsZTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBpbnNlcnQgYWxsIG90aGVyIHJ1bGVzXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBDbGVhcnMgYWxsIENTUyBydWxlIG9iamVjdHMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRwdWJsaWMgY2xlYXJSdWxlcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMub3duZXIgPT09IHRoaXMuaW5zdGFuY2UpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMgJiYgdGhpcy5uYW1lc3BhY2VzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vdGhlclJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHJcblx0XHQvLyBkZWFjdGl2YXRlIGltcG9ydGVkIHN0eWxlc2hlZXRzXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltUnVsZUNvbnRhaW5lcl0uZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyB0aGlzIHN0eWxlc2hlZXQgaW50byBET00uICovXHJcblx0cHVibGljIGFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoKyt0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmlpdGlvbiBjcmVhdGVzIHRoZSBgPHN0eWxlPmAgZWxlbWVudFxyXG5cdFx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbS5pZCA9IHRoaXMubmFtZTtcclxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLmRvbVN0eWxlRWxtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IHRoaXMudG9wTGV2ZWxDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblxyXG5cdFx0XHR0aGlzLmluc2VydFJ1bGVzKCB0aGlzLmRvbVN0eWxlRWxtIS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhpcyBzdHlsZXNoZWV0IGZyb20gRE9NLiAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBndWFyZCBmcm9tIGV4dHJhIGRlYWN0aXZhdGUgY2FsbHNcclxuXHRcdGlmICh0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICgtLXRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyUnVsZXMoKTtcclxuXHJcblx0XHRcdC8vIG9ubHkgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpaXRpb24gY3JlYXRlcyB0aGUgYDxzdHlsZT5gIGVsZW1lbnRcclxuXHRcdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtIS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGNvbnRhaW5lciBpcyBmb3IgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uLlxyXG5cdHByaXZhdGUgZ2V0IGlzVG9wTGV2ZWwoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLm93bmVyID09PSBudWxsIHx8IHRoaXMub3duZXIgPT09IHRoaXMuaW5zdGFuY2UgfVxyXG5cclxuXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhpcyBjb250YWluZXIgcHJvY2Vzc2VkLlxyXG5cdHB1YmxpYyBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgdGhpcyBjb250YWluZXIgY3JlYXRlcyBhbiBpbnN0YW5jZSBvZi5cclxuXHRwcml2YXRlIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzXHJcblxyXG5cdC8vIE5hbWUgb2YgdGhpcyBjb250YWluZXIsIHdoaWNoLCBkZXBlbmRpbmcgb24gdGhlIG1vZGUsIGlzIGVpdGhlciB0YWtlbiBmcm9tIHRoZSBjbGFzc1xyXG5cdC8vIGRlZmluaXRpb24gbmFtZSBvciBnZW5lcmF0ZWQgdW5pcXVlbHkuXHJcblx0cHJpdmF0ZSBuYW1lOiBzdHJpbmdcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBncm91cGluZyBydWxlcyB0aGF0XHJcblx0Ly8gbGVhZCB0byB0aGlzIHJ1bGUgY29udGFpbmVyLiBGb3IgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb25zLCB0aGlzIHBvaW50cyB0byB0aGUgc2FtZVxyXG5cdC8vIHNpbmdsZXRvbiBkZWZpbml0aW9uIGluc3RhbmNlIGFzIHRoZSAnZGVmaW5pdGlvbicgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBvd25lcjogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIG93bmVyIHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBwb2ludHMgdG8gYHRoaXNgLlxyXG5cdHByaXZhdGUgdG9wTGV2ZWxDb250YWluZXI6IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIExpc3Qgb2YgcmVmZXJlbmNlcyB0byBvdGhlciBzdHlsZSBkZWZpbml0aW9ucyBjcmVhZWQgdmlhIHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVmczogU3R5bGVEZWZpbml0aW9uW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQGltcG9ydCBydWxlc1xyXG5cdHByaXZhdGUgaW1wb3J0czogSW1wb3J0UnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBuYW1lc3BhY2UgcnVsZXNcclxuXHRwcml2YXRlIG5hbWVzcGFjZXM6IE5hbWVzcGFjZVJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBjdXN0b20gdmFyaWFibGUgcnVsZXMuXHJcblx0cHJpdmF0ZSB2YXJzOiBWYXJSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgcnVsZXMgdGhhdCBhcmUgbm90IGltcG9ydHMsIG5hbWVzcGFjZXMsIGN1c3RvbSB2YXJzLCByZWZlcmVuY2VzIG9yIGdyb3VwaW5nIHJ1bGVzLlxyXG5cdHByaXZhdGUgb3RoZXJSdWxlczogUnVsZVtdO1xyXG5cclxuXHQvLyBcIjpyb290XCIgcnVsZSB3aGVyZSBhbGwgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgYXJlIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBjc3NDdXN0b21WYXJTdHlsZVJ1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uIHJlcXVlc3RzLlxyXG5cdHByaXZhdGUgYWN0aXZhdGlvblJlZkNvdW50OiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBlbGVtbnRcclxuXHRwdWJsaWMgZG9tU3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOYW1lIGdlbmVyYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1haXplZCBuYW1lcyBmb3Igc3R5bGUgZWxlbWVudHMgKGNsYXNzIG5hbWVzLCBhbmltYXRpb25cclxuLy8gbmFtZXMsIGV0Yy4pXHJcbmxldCB1c2VVbmlxdWVTdHlsZU5hbWVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4vLyBQcmVmaXggdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgc3R5bGUgbmFtZXMuIElmIHVuZGVmaW5lZCwgYSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbFxyXG4vLyBiZSB1c2VkLlxyXG5sZXQgdW5pcXVlU3R5bGVOYW1lc1ByZWZpeDogc3RyaW5nID0gXCJuXCI7XHJcblxyXG4vLyBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy5cclxubGV0IG5leHRVbmlxdWVJRDogbnVtYmVyID0gMTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGdpdmVuIHJ1bGUgZnJvbSB0aGUgZ2l2ZW4gc3R5bGUgc2hlZXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZU5hbWUoIHNoZWV0TmFtZTogc3RyaW5nLCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdXNlVW5pcXVlU3R5bGVOYW1lc1xyXG5cdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHVuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpXHJcblx0XHQ6IGAke3NoZWV0TmFtZX1fJHtydWxlTmFtZX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSB1bmlxdWUgbmFtZSwgd2hpY2ggY2FuIGJlIHVzZWQgZWl0aGVyIGZvciBzdHlsZSBlbGVtZW50J3MgSUQgb3Igb3IgY2xhc3MsXHJcbiAqIGlkZW50aWZpZXIgb3IgYW5pbWF0aW9uIG5hbWUuIE5hbWVzIGFyZSBnZW5lcmF0ZWQgdXNpbmcgYSBzaW1wbGUgaW5jcmVtZW50aW5nIG51bWJlci5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlTmFtZSggcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6IHVuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpICsgbmV4dFVuaXF1ZUlEKys7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTG9va3MgdXAgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb25cclxuLy8gY2xhc3MuIElmIGZvdW5kIGFuZCBpZiB0aGUgcHJvcGVydHkgaXMgYSBydWxlLCB0aGVuIHJldHVybnMgdGhlIG5hbWUgYXNzaWduZWQgZm9yIGl0LlxyXG5mdW5jdGlvbiBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcywgcnVsZU5hbWU6IHN0cmluZylcclxue1xyXG5cdGlmICghZGVmaW5pdGlvbkNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBwcm90b3R5cGVzXHJcblx0bGV0IGJhc2VDbGFzcyA9IGRlZmluaXRpb25DbGFzcztcclxuXHR3aGlsZSggKGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggYmFzZUNsYXNzKSkgIT09IFN0eWxlRGVmaW5pdGlvbilcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgYmFzZSBjbGFzcyBhbHJlYWR5IGhhcyBhbiBhc3NvY2lhdGVkIGluc3RhbmNlOyBpZiB5ZXMsIGNoZWNrIHdoZXRoZXJcclxuXHRcdC8vIGl0IGhhc2UgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBydWxlIG5hbWUuIElmIHllcywgdGhlbiB1c2UgdGhpcyBydWxlJ3MgYWxyZWFkeVxyXG5cdFx0Ly8gZ2VuZXJhdGVkIG5hbWUgKGlmIGV4aXN0cykuXHJcblx0XHRpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHN5bUluc3RhbmNlKSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGJhc2VJbnN0ID0gYmFzZUNsYXNzW3N5bUluc3RhbmNlXTtcclxuXHRcdFx0aWYgKGJhc2VJbnN0ICYmIHJ1bGVOYW1lIGluIGJhc2VJbnN0ICYmIFwibmFtZVwiIGluIGJhc2VJbnN0W3J1bGVOYW1lXSlcclxuXHRcdFx0XHRyZXR1cm4gYmFzZUluc3RbcnVsZU5hbWVdLm5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvY2Vzc2luZyBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGJ5IGNyZWF0aW5nIGl0cyBpbnN0YW5jZSBhbmQgYXNzb2NpYXRpbmcgYVxyXG4gKiBydWxlIGNvbnRhaW5lciBvYmplY3Qgd2l0aCBpdC4gVGhlIGNsYXNzIHdpbGwgYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnN0YW5jZSB1c2luZyB0aGVcclxuICogU3ltYm9sIHByb3BlcnR5LiBUaGUgb3duZXIgcGFyYW1ldGVyIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uXHJcbiAqIG9iamVjdCBvciBudWxsIGlmIHRoZSBnaXZlbiBjbGFzcyBpcyBpdHNlbGYgYSB0b3AtbGV2ZWwgY2xhc3MgKHRoYXQgaXMsIGlzIG5vdCBhIGNsYXNzXHJcbiAqIHRoYXQgZGVmaW5lcyBydWxlcyB3aXRoaW4gbmVzdGVkIGdyb3VwaW5nIHJ1bGVzKS5cclxuICogQHBhcmFtIGRlZmluaXRpb25DbGFzcyBcclxuICogQHBhcmFtIG93bmVyIFxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0NsYXNzKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuXHRvd25lcj86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG5cdC8vIGNhbGwgdGhlICd1c2UnIGZ1bmN0aW9uIGZvciBhbGwgdGhlIGJhc2UgY2xhc3NlcyBzbyB0aGF0IHJ1bGUgbmFtZXMgYXJlIGdlbmVyYXRlZC4gV2VcclxuXHQvLyBkb24ndCBhY3RpdmF0ZSBzdHlsZXMgZm9yIHRoZXNlIGNsYXNlcyBiZWNhdXNlIGRlcml2ZWQgY2xhc3NlcyB3aWxsIGhhdmUgYWxsIHRoZVxyXG5cdC8vIHJ1bGVzIGZyb20gYWxsIHRoZSBiYXNlIGNsYXNzZXMgYXMgdGhlaXIgb3duIGFuZCBzbyB0aGVzZSBydWxlcyB3aWxsIGJlIGFjdGl2YXRlZCBhc1xyXG5cdC8vIHBhcnQgb2YgdGhlIGRlcml2ZWQgY2xhc3MuXHJcblx0bGV0IGJhc2VDbGFzcyA9IGRlZmluaXRpb25DbGFzcztcclxuXHR3aGlsZSggKGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggYmFzZUNsYXNzKSkgIT09IFN0eWxlRGVmaW5pdGlvbilcclxuXHRcdHByb2Nlc3NDbGFzcyggYmFzZUNsYXNzLCBvd25lcik7XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGRlZmluaXRpb24gY2xhc3NcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBkZWZpbml0aW9uQ2xhc3MoIG93bmVyKTtcclxuXHJcblx0XHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRcdGxldCBuYW1lID0gdXNlVW5pcXVlU3R5bGVOYW1lcyB8fCAhZGVmaW5pdGlvbkNsYXNzLm5hbWVcclxuXHRcdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoKVxyXG5cdFx0XHQ6IGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cclxuXHRcdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSk7XHJcblx0XHRkZWZpbml0aW9uQ2xhc3Nbc3ltSW5zdGFuY2VdID0gaW5zdGFuY2U7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGluc3RhbnRpYXRpbmcgU3R5bGUgRGVmaW5pdGlvbiBDbGFzcyAnJHtkZWZpbml0aW9uQ2xhc3MubmFtZX0nYCwgZXJyKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UgYW5kIGFzc2lnbnMgbmFtZXMgdG8gaXRzIHJ1bGVzLlxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3ZSBjaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGluc3RhbmNlIGFscmVhZHlcclxuICogY3JlYXRlZCBmb3IgaXQgYXMgYSBjbGFzcyB3aWxsIGhhdmUgb25seSBhIHNpbmdsZSBhc3NvY2lhdGVkIGluc3RhbmUgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzXHJcbiAqIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG4gKiBcclxuICogSWYgdGhlIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgKGFuIGluc3RhbmNlIG9mIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MpIHRoZW4gd2UgY2hlY2sgd2hldGhlclxyXG4gKiBpdCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZC4gSWYgeWVzLCB3ZSBqdXN0IHJldHVybiBpdCBiYWNrOyBpZiBubywgd2UgYXNzaWduIG5ldyB1bmlxdWUgbmFtZXNcclxuICogdG8gaXRzIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RhbmNlT3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdG93bmVyPzogU3R5bGVEZWZpbml0aW9uKTogU3R5bGVEZWZpbml0aW9uIHwgbnVsbFxyXG57XHJcblx0aWYgKCFpbnN0YW5jZU9yQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0aWYgKGluc3RhbmNlT3JDbGFzcyBpbnN0YW5jZW9mIFN0eWxlRGVmaW5pdGlvbilcclxuXHR7XHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHRoaXMgZGVmaW5pdGlvbiBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZFxyXG5cdFx0bGV0IHJ1bGVDb250YWluZXIgPSBpbnN0YW5jZU9yQ2xhc3Nbc3ltUnVsZUNvbnRhaW5lcl0gYXMgUnVsZUNvbnRhaW5lcjtcclxuXHRcdGlmICghcnVsZUNvbnRhaW5lcilcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBuYW1lIGZvciBvdXIgY29udGFpbmVyXHJcblx0XHRcdGxldCBuYW1lID0gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRcdGlmICghdXNlVW5pcXVlU3R5bGVOYW1lcylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBkZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZU9yQ2xhc3MuY29uc3RydWN0b3I7XHJcblx0XHRcdFx0aWYgKGRlZmluaXRpb25DbGFzcy5uYW1lKVxyXG5cdFx0XHRcdFx0bmFtZSArPSBcIl9cIiArIGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXcgUnVsZUNvbnRhaW5lciggaW5zdGFuY2VPckNsYXNzLCBuYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2VPckNsYXNzO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlT3JDbGFzcy5oYXNPd25Qcm9wZXJ0eShzeW1JbnN0YW5jZSlcclxuXHRcdFx0PyBpbnN0YW5jZU9yQ2xhc3Nbc3ltSW5zdGFuY2VdXHJcblx0XHRcdDogcHJvY2Vzc0NsYXNzKCBpbnN0YW5jZU9yQ2xhc3MsIG93bmVyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgcnVsZSBjb250YWluZXIgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGFpbmVyRnJvbURlZmluaXRpb24oIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IFJ1bGVDb250YWluZXJcclxue1xyXG5cdHJldHVybiBkZWZpbml0aW9uID8gZGVmaW5pdGlvbltzeW1SdWxlQ29udGFpbmVyXSA6IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBhbmQgaW5zZXJ0cyBhbGwgaXRzIHJ1bGVzIGludG8gRE9NLiBJZiB0aGUgaW5wdXQgb2JqZWN0IGlzXHJcbiAqIG5vdCBhIHN0eWxlIGRlZmluaXRpb24gYnV0IGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgb2J0YWluIHN0eWxlIGRlZmluaXRpb24gYnkgY2FsbGluZyB0aGUgJHVzZVxyXG4gKiBmdW5jdGlvbi4gTm90ZSB0aGF0IGVhY2ggc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXNcclxuICogaXQgd2FzIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgaW5zZXJ0ZWQgdG8gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyXHJcbiAqIGdvZXMgdXAgdG8gMS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogVCB8IG51bGxcclxue1xyXG5cdGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RhbmNlT3JDbGFzcykgYXMgVDtcclxuXHRpZiAoIWluc3RhbmNlKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBydWxlQ29udGFpbmVyID0gaW5zdGFuY2Vbc3ltUnVsZUNvbnRhaW5lcl0gYXMgUnVsZUNvbnRhaW5lcjtcclxuXHRydWxlQ29udGFpbmVyLmFjdGl2YXRlKCk7XHJcblx0cmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBieSByZW1vdmluZyBpdHMgcnVsZXMgZnJvbSBET00uIE5vdGUgdGhhdCBlYWNoIHN0eWxlXHJcbiAqIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kXHJcbiAqIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIHJlbW92ZWQgZnJvbSBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lcyBkb3duIHRvIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG57XHJcblx0aWYgKCFkZWZpbml0aW9uKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGRlZmluaXRpb25bc3ltUnVsZUNvbnRhaW5lcl0gYXMgUnVsZUNvbnRhaW5lcjtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHRcdHJ1bGVDb250YWluZXIuZGVhY3RpdmF0ZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIChzaG9ydCkgcnVsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIGVuYWJsZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHR1c2VVbmlxdWVTdHlsZU5hbWVzID0gZW5hYmxlO1xyXG5cdHVuaXF1ZVN0eWxlTmFtZXNQcmVmaXggPSBwcmVmaXggPyBwcmVmaXggOiBcIm5cIjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lDdXN0b21WYXIsIE9uZU9yTWFueX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFBzZXVkb0VudGl0eSwgQ3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzcywgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHlcclxufSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHJvcGVydGllcyB1c2VkIGluIHRoZSBbW0NvbWJpbmVkU3R5bGVzZXRdXSB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgZGVwZW5kZW50IHJ1bGVzICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yQ29tYmluYXRvciA9IFwiJlwiIHwgXCImLFwiIHwgXCImIFwiIHwgXCImPlwiIHwgXCImK1wiIHwgXCImflwiIHwgXCIsJlwiIHwgXCIgJlwiIHwgXCI+JlwiIHwgXCIrJlwiIHwgXCJ+JlwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbWJpbmVkU3R5bGVzZXQgdHlwZSBleHRlbmRzIHRoZSBTdHlsZXNldCB0eXBlIHdpdGggY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgcHJvdmlkZVxyXG4gKiBhZGRpdGlvbmFsIG1lYW5pbmcgdG8gdGhlIHN0eWxlc2V0IGFuZCBhbGxvdyBidWlsZGluZyBuZXN0ZWQgc3R5bGVzOlxyXG4gKiAtIFRoZSBgK2AgcHJvcGVydHkgc3BlY2lmaWVzIG9uZSBvciBtb3JlIHBhcmVudCBzdHlsZSBydWxlcy4gVGhpcyBhbGxvd3Mgc3BlY2lmeWluZ1xyXG4gKiAgIHBhcmVudCBydWxlcyB1c2luZyBhIGNvbnZlbmllbnQgc3R5bGUtcHJvcGVydHktbGlrZSBub3RhdGlvbi5cclxuICogLSBQcm9wZXJ0aWVzIHdpdGggcHNldWRvIGNsYXNzIG5hbWVzIChlLmcuIFwiOmhvdmVyXCIpIG9yIHBzZXVkbyBlbGVtZW50IG5hbWVzIChlLmcuIFwiOjphZnRlclwiKS5cclxuICogICBUaGVzZSBwcm9wZXJ0aWVzIGRlZmluZSBhIHN0eWxlc2V0IHRoYXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgc2VsZWN0b3Igb2J0YWluZWQgYnkgdXNpbmdcclxuICogICB0aGUgb3JpZ2luYWwgc3R5bGVzZXQncyBvd25lciBmb2xsb3dlZCBieSB0aGUgZ2l2ZW4gcHNldWRvIGNsYXNzIG9yIHBzZXVkbyBlbGVtZW50LlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBuYW1lcyBvZiBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIChlLmcuIFwiOm50aC1jaGlsZFwiKSBvciBwYXJhbWV0ZXJpemVkXHJcbiAqICAgcHNldWRvIGVsZW1lbnRzIChlLmcuIFwiOjpzbG90dGVkXCIpLiBUaGVzZSBwcm9wZXJ0aWVzIGNvbnRhaW4gYSB0dXBsZSwgd2hlcmUgdGhlIGZpcnN0XHJcbiAqICAgZWxlbWVudCBpcyB0aGUgcGFyYW1ldGVyIGZvciB0aGUgc2VsZWN0b3IgYW5kIHRoZSBzZWNvbmQgZWxlbWVudCBpcyB0aGUgc3R5bHNldC5cclxuICogICBUaGVzZSBwcm9wZXJ0aWVzIGRlZmluZSBhIHN0eWxlc2V0IHRoYXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgc2VsZWN0b3Igb2J0YWluZWQgYnkgdXNpbmdcclxuICogICB0aGUgb3JpZ2luYWwgc3R5bGVzZXQncyBvd25lciBmb2xsb3dlZCBieSB0aGUgZ2l2ZW4gcHNldWRvIGNsYXNzIG9yIHBzZXVkbyBlbGVtZW50LlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCB0aGUgYW1wZXJzYW5kIHN5bWJvbCAoJyYnKSB0aGF0IGNvbnRhaW4gYXJyYXlzIG9mIHR3by1lbGVtZW50IHR1cGxlcyBlYWNoXHJcbiAqICAgZGVmaW5pbmcgYSBzZWxlY3RvciBhbmQgYSBzdHlsZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgc2VsZWN0b3IuIFNlbGVjdG9ycyBjYW4gdXNlIHRoZVxyXG4gKiAgIGFtcGVyc2FuZCBzeW1ib2wgdG8gcmVmZXIgdG8gdGhlIHBhcmVudCBzdHlsZSBzZWxlY3Rvci4gSWYgdGhlIGFtcGVyc2FuZCBzeW1ib2wgaXMgbm90IHVzZWQsXHJcbiAqICAgdGhlIHNlbGVjdG9yIHdpbGwgYmUgc2ltcGx5IGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcbiAqIFxyXG4gKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gc3R5bGUgcnVsZXMgKGUuZy4gJGNsYXNzKSBhY2NlcHQgdGhlIENvbWJpbmVkU3R5bGVzZXQgYXMgYSBwYXJhbWV0ZXIsXHJcbiAqIGZvciBleGFtcGxlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb25cclxuICoge1xyXG4gKiAgICAgY2xhc3MxID0gY3NzLiRjbGFzcyh7fSlcclxuICogICAgIGNsYXNzMiA9IGNzcy4kY2xhc3Moe1xyXG4gKiAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gKiAgICAgICAgIFwiOmhvdmVyXCIgOiB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIgfSxcclxuICogICAgICAgICBcIiZcIjogW1xyXG4gKiAgICAgICAgICAgICBbIFwibGkgPiAmXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiIH0gXSxcclxuICogICAgICAgICAgICAgWyB0aGlzLmNsYXNzMSwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIgfSBdXHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgfSlcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoaXMgd2lsbCB0cmFuc2xhdGUgdG8gdGhlIGZvbGxvd2luZyBDU1MgKGNsYXNzIG5hbWUgaXMgYXV0by1nZW5lcmF0ZWQpOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB3aGl0ZTsgfVxyXG4gKiAubTEyMzpob3ZlciB7IGJhY2tncm91bmRDb2xvcjogZ3JleTsgfVxyXG4gKiBsaSA+IC5tMTIzIHsgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3c7IH1cclxuICogLm0xMjMubTEyMiB7IGJhY2tncm91bmRDb2xvcjogb3JhbmdlOyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tYmluZWRTdHlsZXNldCA9IFN0eWxlc2V0ICZcclxuXHR7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBDb21iaW5lZFN0eWxlc2V0IH0gJlxyXG5cdHsgW0sgaW4ga2V5b2YgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHldPzogW0lQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5W0tdLCBDb21iaW5lZFN0eWxlc2V0XVtdIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMgdGhhdCBoYXZlIGEgbmFtZTsgdGhhdCBpcyxcclxuICogY2xhc3MsIElELCBrZXlmcmFtZXMgYW5kIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGRlcGVuZGVudCBydWxlcyBvZiBhIHN0eWxlIHJ1bGVcclxuICovXHJcbmV4cG9ydCB0eXBlIERlcGVuZGVudFJ1bGVzID1cclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBJU3R5bGVSdWxlIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIGtleW9mIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5XT86IElTdHlsZVJ1bGVbXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3R5bGVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGluZyBydWxlIGluIGEgc3R5bGUgc2hlZXQuIFN0eWxlIHJ1bGVzIGNhbiBiZSB1c2VkXHJcbiAqIGFueXdoZXJlIHdoZXJlIHN0eWxlIHByb3BlcnRpZXMgY2FuIGJlIGRlZmluZWQ6IGNsYXNzIHJ1bGVzLCBJRCBydWxlcywgc2VsZWN0b3IgcnVsZXMsXHJcbiAqIGtleWZyYW1lcywgZXRjLiBTdHlsZVJ1bGUgZGVmaW5lcyBhIHN0eWxlc2V0IGFuZCBjYW4gb3B0aW9uYWxseSBwb2ludCB0byBvbmUgb3IgbW9yZSBzdHlsZSBydWxlc1xyXG4gKiBmcm9tIHdoaWNoIGl0IGluaGVyaXRzLiBBIHN0eWxlc2V0IGNvbWJpbmVzIGFsbCB0aGUgcHJvcGVydGllcyBmcm9tIGl0cyBvd24gcHJvcGVydHkgYmxvY2sgYXNcclxuICogd2VsbCBhcyBmcm9tIGFsbCBvZiBzdHlsZSBydWxlcyBpdCBpbmhlcml0ZXMgZnJvbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIHN0eWxlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdHlsZVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvKiogQ1NTIHJ1bGUgc2VsZWN0b3Igc3RyaW5nICovXHJcblx0cmVhZG9ubHkgc2VsZWN0b3JUZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9iamVjdCBjb250YWluaW5nIGRlcGVuZGVudCBydWxlcy4gUHJvcGVydHkgbmFtZXMgYXJlIHRha2VuIGZyb20gc3BlY2lhbCBwcm9wZXJ0aWVzXHJcblx0ICogb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGFsbG93cyBjYWxsZXJzIHRvIGFjY2VzcyBkZXBlbmRlbnQgcnVsZXMgdG8gY2hhbmdlXHJcblx0ICogc3R5bGUgcHJvcGVydHkgdmFsdWVzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVzO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHkuIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgcnVsZSdzIHN0eWxlc2V0LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0bW9tIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIGN1c3RvbVZhciBJVmFyUnVsZSBvYmplY3QgZGVmaW5pbmcgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIGlzIHJlbW92ZWQgZnJvbSB0aGUgcnVsZSdzIHN0eWxlc2V0LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBjdXN0b21WYXI6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZFN0eWxlUnVsZSBpbnRlcmZhY2UgY29tYmluZXMgSVN0eWxlUnVsZSBhbmQgSU5hbWVkRW50aXR5IGludGVyZmFjZXMuIFRoaXMgaXMgdXNlZFxyXG4gKiBmb3IgY2xhc3MgYW5kIElEIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRTdHlsZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlLCBJTmFtZWRFbnRpdHlcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgd2hlcmUgdGhlIHNlbGVjdG9yIGlzIGEgc2luZ2xlIGNsYXNzIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc1J1bGUgZXh0ZW5kcyBJTmFtZWRTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBjbGFzcyBwcmVmaXhlZCB3aXRoIFwiLlwiICovXHJcblx0cmVhZG9ubHkgY3NzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSURSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB3aGVyZSB0aGUgc2VsZWN0b3IgaXMgYSBzaW5nbGUgZWxlbWVudCBJRC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUlEUnVsZSBleHRlbmRzIElOYW1lZFN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGVsZW1lbnQgSUQgcHJlZml4ZWQgd2l0aCBcIiNcIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0lETmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uV2F5cG9pbnQgdHlwZSBkZWZpbmVzIGEgdHlwZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIHdheXBvaW50IGluIGFuXHJcbiAqIGFuaW1hdGlvbiBzZXF1ZW5jZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbldheXBvaW50ID0gT25lT3JNYW55PFwiZnJvbVwiIHwgXCJ0b1wiIHwgbnVtYmVyPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uU3R5bGVzIHR5cGUgZGVmaW5lcyBhIG9iamVjdCBjb250YWluaW5nIHN0eWxlIHByb3BydGllcyBmb3IgYW4gYW5pbWF0aW9uIGZyYW1lLlxyXG4gKiBTdHlsZXNldHMgZm9yIGtleWZyYW1lcyBhbGxvdyBjdXN0b20gcHJvcGVydGllcyAodmlhIFwiLS1cIikuIEFuaW1hdGlvbiBzdHlsZXNldCBjYW4gZXh0ZW5kXHJcbiAqIG90aGVyIHN0eWxlIHJ1bGVzOyBob3dldmVyLCBhbnkgZGVwZW5kZW50IHJ1bGVzIHdpbGwgYmUgaWdub3JlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblN0eWxlc2V0ID0gU3R5bGVzZXQgJiB7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZSB0eXBlIGRlZmluZXMgYSBzaW5nbGUga2V5ZnJhbWUgd2l0aGluIGEgQGtleWZyYW1lcyBydWxlLlxyXG4gKiBUaGUgd2F5cG9pbnQgY2FuIGJlIHNwZWNpZmllZCBhcyBcImZyb21cIiBvciBcInRvXCIgc3RyaW5ncyBvciBhcyBhIG51bWJlciAwIHRvIDEwMCwgd2hpY2ggd2lsbCBiZVxyXG4gKiB1c2VkIGFzIGEgcGVyY2VudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZyYW1lID0gW0FuaW1hdGlvbldheXBvaW50LCBBbmltYXRpb25TdHlsZXNldF07XHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25SdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRrZXlmcmFtZXNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZSB8IG51bGw7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN0eWxlIHJ1bGVzIHJlcHJlc2VudGluZyBhbmltYXRpb24gZnJhbWVzICovXHJcblx0cmVhZG9ubHkgZnJhbWVSdWxlczogSUFuaW1hdGlvbkZyYW1lUnVsZVtdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25GcmFtZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzaW5nbGUgZnJhbWUgaW4gdGhlIEBrZXlmcmFtZXMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCAqL1xyXG5cdHJlYWRvbmx5IHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludDtcclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzS2V5ZnJhbWVSdWxlOiBDU1NLZXlmcmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVmFyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbi5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHZhcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFyUnVsZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiBleHRlbmRzIElOYW1lZEVudGl0eSwgSUN1c3RvbVZhcjxWYXJWYWx1ZVR5cGU8Sz4+XHJcbntcclxuXHQvKiogTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdHJlYWRvbmx5IHRlbXBsYXRlOiBLO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvdW50ZXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgbmFtZWQgY291bnRlciBkZWZpbml0aW9uLiBVc2UgdGhpcyBydWxlIHRvIGNyZWF0ZVxyXG4gKiBjb3VudGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZCBpbiBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGVcclxuICogcHJvcGVydGllcy4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgY291bnRlcnMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZVxyXG4gKiBjb3VudGVyIGRlZmluaXRpb25zLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY291bnRlcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ291bnRlclJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBjb3VudGVyICovXHJcblx0cmVhZG9ubHkgY291bnRlck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogVGhlIElDb3VudGVyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQGNvdW50ZXItc3R5bGUgcnVsZS5cclxuLy8gICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGNvdW50ZXJTdHlsZV1dIGZ1bmN0aW9uLlxyXG4vLyAgKi9cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJQ291bnRlclN0eWxlUnVsZSBleHRlbmRzIElSdWxlLCBJTmFtZWRFbnRpdHlcclxuLy8ge1xyXG4vLyBcdC8qKiBTT00gY291bnRlci1zdHlsZSBydWxlICovXHJcbi8vIFx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTQ291bnRlclN0eWxlUnVsZSB8IG51bGw7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSW1wb3J0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGltcG9ydF1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1wb3J0UnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGltcG9ydCBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTSW1wb3J0UnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRm9udEZhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQGZvbnQtZmFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZm9udGZhY2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvbnRGYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTRm9udEZhY2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lc3BhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbmFtZXNwYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lc3BhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTTmFtZXNwYWNlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFnZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skcGFnZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogT3B0aW9uYWwgbmFtZSBvZiB0aGUgcGFnZSBwc2V1ZG8gc3R5bGUgKGUuZy4gXCJcIjpmaXJzdFwiKSAqL1xyXG5cdHJlYWRvbmx5IHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBTT00gbmFtZXNwYWNlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NQYWdlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFN5bWJvbCB0aGF0IGlzIHVzZWQgZm9yIHRoZSBwcm9wZXJ0eSBpbiB0aGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzIHRoYXQga2VlcHMgcmVmZXJlbmNlIHRvIHRoZVxyXG4gKiB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gRGV2ZWxvcGVycyBjYW4gdXNlIHRoaXMgcHJvcGVydHkgdG8gYWNjZXNzIHJ1bGVzIGluIHRoZVxyXG4gKiBjaGFpbiBvZiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMuIFdlIG5lZWQgdG8gYXZvaWQgZW51bWVyYXRpbmcgdGhpcyBwcm9wZXJ0eSB3aGVuIHByb2Nlc3NpbmdcclxuICogdGhlIHJ1bGVzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzeW1Pd25lciA9IFN5bWJvbChcIm93bmVyXCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyBpcyBhIGJhc2UgZm9yIGFsbCBjbGFzc2VzIHRoYXQgY29udGFpbiBkZWZpbmluaXRpb25zIG9mIENTUyBydWxlcy5cclxuICogVXNlIGl0IHRoZSBmb2xsb3dpbmcgd2F5OlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlcyBleHRlbmQgU3R5bGVEZWZpbml0aW9uXHJcbiAqIHtcclxuICogICAgIC8vIDhweCBwYWRkaW5nIG9uIHJlZ3VsYXIgZGV2aWNlc1xyXG4gKiAgICAgZGVmYXVsdFBhZGRpbmcgPSAkdmFyKCBcInBhZGRpbmdcIiwgOClcclxuICogXHJcbiAqICAgICBpZk5hcnJvd0RldmljZSA9ICRtZWRpYSgge21heFdpZHRoOiA2MDAgfSxcclxuICogICAgICAgICBjbGFzcyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxNeVN0eWxlcz5cclxuICogICAgICAgICB7XHJcbiAqICAgICAgICAgICAgIC8vIDRweCBwYWRkaW5nIG9uIG5hcnJvdyBkZXZpY2VzXHJcbiAqICAgICAgICAgICAgIGRlZmF1bHRQYWRkaW5nID0gJHZhciggXCJwYWRkaW5nXCIsIExlbi5jYWxjKCBcInswfSAvIDJcIiwgdGhpcy5vd25lci5kZWZhdWx0UGFkZGluZykpXHJcbiAqICAgICAgICAgfVxyXG4gKiAgICAgKVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBAdHlwZXBhcmFtIE8gVG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIHdoaWNoIGlzIHRoZSBvd25lciBvZiB0aGlzIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlRGVmaW5pdGlvbjxPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFyZSBjcmVhdGVkIGRpcmVjdGx5IG9ubHkgYnkgdGhlICpzdHlsZWQgY29tcG9uZW50cyogLSB0aGF0IGlzLFxyXG5cdCAqIGNvbXBvbmVudHMgdGhhdCB1c2UgZGlmZmVyZW50IHN0eWxlcyBmb3IgZWFjaCBpbnN0YW5jZS4gT3RoZXJ3aXNlLCBzdHlsZSBkZWZpbml0aW9uXHJcblx0ICogY2xhc3MgaW5zdGFuY2VzIGFyZSBjcmVhdGVkIHdoZW4gZWl0aGVyIHRoZSBbWyR1c2VdXSBvciBbWyRhY3RpdmF0ZV1dIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gb3duZXIgUmVmZXJlbmNlIHRvIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggb3duZXI6IE8gfCBudWxsID0gbnVsbClcclxuXHR7XHJcblx0XHR0aGlzW3N5bU93bmVyXSA9IG93bmVyO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVmZXJzIHRvIHRoZSBzaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgd2hpY2ggaXMgdGhlICpvd25lciogb2ZcclxuXHQgKiB0aGlzIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LiBUaGUgb3duZXIgaXMgdGhlIHRvcC1sZXZlbCBjbGFzcyBpbiB0aGUgY2hhaW4gb2Ygc3R5bGVcclxuXHQgKiBkZWZpbml0aW9uIGNsYXNzZXMuIFRocm91Z2ggdGhpcyBtZW1lYmVyLCBhbGwgcnVsZXMgYW5kIG90aGVyIG1lbWViZXJzIGRlZmluZWQgaW4gdGhlIG93bmVyXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzcyBjYW4gYmUgYWNjZXNzZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBvd25lcigpOiBPIHwgbnVsbCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZURlZmluaXRpb25DbGFzczxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPE8+ID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqIEFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgc2hvdWxkIGNvbmZvcm0gdG8gdGhpcyBjb25zdHJ1Y3RvciAqL1xyXG5cdG5ldyggb3duZXI/OiBPKTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdXBwb3J0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3VwcG9ydHNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBkZWZpbmluZyB0aGUgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlXHJcblx0cmVhZG9ubHkgcnVsZXM6IFQ7XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0dyb3VwaW5nUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3VwcG9ydFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAc3VwcG9ydHMgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHN1cHBvcnRzXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdXBwb3J0c1J1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1lZGlhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbWVkaWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVSdWxlLCBDb21iaW5lZFN0eWxlc2V0LCBJVmFyUnVsZSwgRGVwZW5kZW50UnVsZXMsIElOYW1lZEVudGl0eSwgSUNsYXNzUnVsZSwgSUlEUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7RXh0ZW5kZWRTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBDdXN0b21WYXJTdHlsZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXN9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHttZXJnZVN0eWxlc2V0cywgc3R5bGVzZXRUb1N0cmluZywgc3R5bGVQcm9wVG9TdHJpbmcsIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wc30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHt2YWx1ZVRvU3RyaW5nLCBjYW1lbFRvRGFzaH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCI7XHJcbmltcG9ydCB7cHNldWRvRW50aXR5VG9TdHJpbmcsIHNlbGVjdG9yVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgcnVsZXMgdGhhdCBjb250YWluIGEgc3R5bGUgcnVsZS4gVGhpcyBjbGFzc1xyXG4gKiBpbXBsZW1lbnRzIHRoZSBwYXJzaW5nIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0IG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSVN0eWxlUnVsZVxyXG57XHJcblx0Ly8gVGhlIHN0eWxlc2V0IGNhbiBiZSBhbiBDb21iaW5lZFN0eWxlc2V0IGZvciBtYW55IHJ1bGVzOyBob3dldmVyLCBmb3Igc29tZSBpdCBpcyBqdXN0XHJcblx0Ly8gb2YgdGhlIFN0eWxlc2V0IHR5cGUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZXNldD86IFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHt9O1xyXG5cdFx0dGhpcy5kZXBlbmRlbnRSdWxlcyA9IHt9O1xyXG5cclxuXHRcdGlmIChzdHlsZXNldClcclxuXHRcdFx0dGhpcy5wYXJzZUlucHV0U3R5bGVzZXQoIHN0eWxlc2V0IGFzIENvbWJpbmVkU3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHb2VzIG92ZXIgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW4gc3R5bGVzZXQgYW5kIHBhcnNlcyB0aGVtIGludG8gcHJvcGVyIHN0eWxlc2V0LCBzZXQgb2ZcclxuXHQgKiBpbXBvcnRhbnQgcHJvcGVydGllcyBhbmQgZGVwZW5kZW50IHJ1bGVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VJbnB1dFN0eWxlc2V0KCBpbnB1dFN0eWxlc2V0OiBDb21iaW5lZFN0eWxlc2V0KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGhhdmUgcGFyZW50cywgd2UgZmlyc3QgY29weSBwcm9wZXJ0aWVzIGZyb20gdGhlbSBzbyB0aGF0IG91ciBvd24gcHJvcGVydGllc1xyXG5cdFx0Ly8gY2FuIG92ZXJyaWRlIHRoZW0uXHJcblx0XHRpZiAoaW5wdXRTdHlsZXNldFtcIitcIl0pXHJcblx0XHR7XHJcblx0XHRcdC8vIHRoZSB2YWx1ZSBpcyBhIHNpbmdsZSBTdHlsZVJ1bGUgb3IgYW4gYXJyYXkgb2YgU3R5bGVSdWxlcyB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxyXG5cdFx0XHRsZXQgZXh0ZW5kc1Byb3BWYWwgPSBpbnB1dFN0eWxlc2V0W1wiK1wiXSBhcyAoU3R5bGVSdWxlIHwgU3R5bGVSdWxlW10pO1xyXG5cdFx0XHRsZXQgcGFyZW50UnVsZXM6IFN0eWxlUnVsZVtdO1xyXG5cdFx0XHRpZiAoZXh0ZW5kc1Byb3BWYWwgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpXHJcblx0XHRcdFx0cGFyZW50UnVsZXMgPSBbZXh0ZW5kc1Byb3BWYWxdO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cGFyZW50UnVsZXMgPSBleHRlbmRzUHJvcFZhbDtcclxuXHJcblx0XHRcdC8vIElmIHdlIGhhdmUgcGFyZW50IHJ1bGVzLCBjb3B5IHN0eWxlc2V0cyBhbmQgZGVwZW5kZW50IHJ1bGVzIGZyb20gdGhlbS5cclxuXHRcdFx0aWYgKHBhcmVudFJ1bGVzICYmIHBhcmVudFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJlbnRSdWxlcy5mb3JFYWNoKCBwYXJlbnQgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0ID0gbWVyZ2VTdHlsZXNldHMoIHRoaXMuc3R5bGVzZXQsIHBhcmVudC5zdHlsZXNldCk7XHJcblx0XHRcdFx0XHR0aGlzLmNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHBhcmVudCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtZXJnZSBjdXN0b20gIHByb3BlcnRpZXNcclxuXHRcdG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGhpcy5zdHlsZXNldCwgaW5wdXRTdHlsZXNldCk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gaW5wdXRTdHlsZXNldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2tpcCBvdmVyIGFscmVhZHkgcHJvY2Vzc2VkIHBhcmVudHMsIGltcG9ydGFudCBhbmQgY3VzdG9tIHByb3BlcnRpZXNcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcIitcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IHByb3BWYWwgPSBpbnB1dFN0eWxlc2V0W3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCI6XCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoaXMgaXMgYW4gYXJyYXkgb2YgdHVwbGVzIHJlcHJlc2VudGluZ1xyXG5cdFx0XHRcdC8vIHBhcmFtZXRlcmlzZWQgcHNldWRvIGVudGl0aWVzIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgdmFsdWVcclxuXHRcdFx0XHQvLyAoc3RyaW5nKSBhbmQgdGhlIHNlY29uZCB0aGUgQ29tYmluZWRTdHlsZXNldC4gT3RoZXJ3aXNlLCB0aGUgdmFsdWUgaXMganVzdCBhblxyXG5cdFx0XHRcdC8vIENvbWJpbmVkU3R5bGVzZXQuXHJcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW2FueSwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0XHRwcm9wTmFtZSwgdHVwbGVbMF0sIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gbmV3IERlcGVuZGVudFJ1bGUoIFwiJlwiICsgcHJvcE5hbWUsIHVuZGVmaW5lZCxcclxuXHRcdFx0XHRcdFx0cHJvcFZhbCBhcyBDb21iaW5lZFN0eWxlc2V0LCB0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCImXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdHR1cGxlWzBdLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCImXCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBwcm9wTmFtZSArIHNlbGVjdG9yVG9TdHJpbmcoIHR1cGxlWzBdKSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZS5lbmRzV2l0aChcIiZcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdCgpID0+IHNlbGVjdG9yVG9TdHJpbmcoIHR1cGxlWzBdKSArIHByb3BOYW1lLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoaXMgaXMgYSByZWd1bGFyIENTUyBwcm9wZXJ0eTogY29weSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gb3VyIGludGVybmFsIHN0eWxlc2V0XHJcblx0XHRcdFx0dGhpcy5zdHlsZXNldFtwcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBwcm9jZXNzIHRoZW0gdW5kZXIgdGhlIHNhbWUgY29udGFpbmVyXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5wcm9jZXNzKCBvd25lciwgbnVsbCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkucHJvY2Vzcyggb3duZXIsIG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHJvdGVjdGVkIGNvcHlGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgb24gYSBuZXdseSBjcmVhdGVkIG9iamVjdCBzbyB3ZSBkb24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIGluXHJcblx0XHQvLyBvdXIgb3duIHN0eWxlc2V0IHlldFxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBzcmMuc3R5bGVzZXQpO1xyXG5cdFx0dGhpcy5jb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBzcmMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgZGVwZW5kZW50IHJ1bGVzIGZyb20gYW5vdGhlciBzdHlsZSBydWxlIG9iamVjdC5cclxuXHRwcml2YXRlIGNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHNyYzogU3R5bGVSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHNyYy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBzcmMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgYXJyID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKCFhcnIpXHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IGFyciA9IFtdO1xyXG5cclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChzcmNEZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBuZXdEZXBSdWxlID0gc3JjRGVwUnVsZS5jbG9uZSgpIGFzIERlcGVuZGVudFJ1bGU7XHJcblx0XHRcdFx0XHRuZXdEZXBSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHRcdGFyci5wdXNoKCBuZXdEZXBSdWxlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbmV3RGVwUnVsZSA9IChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmNsb25lKCkgYXMgRGVwZW5kZW50UnVsZTtcclxuXHRcdFx0XHRuZXdEZXBSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IG5ld0RlcFJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHJ1bGUuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID09IG51bGwpXHJcblx0XHRcdHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIGAke3RoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmd9IHske3N0eWxlc2V0VG9TdHJpbmcoIHRoaXMuc3R5bGVzZXQpfX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogU3R5bGVSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSB0aGlzLmNsb25lT2JqZWN0KCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5zdHlsZXNldCkubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIHRoaXMudG9Dc3NTdHJpbmcoKSwgcGFyZW50KSBhcyBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBpbnNlcnQgdGhlbSB1bmRlciB0aGUgc2FtZSBwYXJlbnRcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5pbnNlcnQoIHBhcmVudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgY2xlYXIgdGhlbSB0b29cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLmNsZWFyKCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuY2xlYXIoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHB1YmxpYyBnZXQgc2VsZWN0b3JUZXh0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID09IG51bGwpXHJcblx0XHRcdHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgc3R5bGUgcnVsZSBvYmplY3Qgb2YgdGhlIHByb3BlciB0eXBlLCBidXQgd2l0aG91dCB0aGUgc3R5bGVzZXQgYW5kIGRlcGVuZGVudFxyXG5cdC8vIHJ1bGVzLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjbG9uZU9iamVjdCgpOiBTdHlsZVJ1bGU7XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0UHJvcDxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIG5hbWU6IEssIHZhbHVlOiBFeHRlbmRlZFN0eWxlc2V0W0tdLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuc2V0UHJvcEludGVybmFsKCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSB2YXJPYmogSVZhclJ1bGUgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFyVmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0Q3VzdG9tUHJvcDxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdmFyT2JqOiBJVmFyUnVsZTxLPiwgdmFsdWU6IFZhclZhbHVlVHlwZTxLPixcclxuXHRcdGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF2YXJPYmogfHwgISh2YXJPYmogaW5zdGFuY2VvZiBWYXJSdWxlKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnNldEN1c3RvbVByb3BJbnRlcm5hbCggdmFyT2JqLCB2YWx1ZSwgaW1wb3J0YW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHNldFByb3BJbnRlcm5hbCggbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpcnN0IHNldC9yZW1vdmUgdGhlIHZhbHVlIGluIG91ciBpbnRlcm5hbCBzdHlsZXNldCBvYmplY3RcclxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5zdHlsZXNldFtuYW1lXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zdHlsZXNldFtuYW1lXSA9IGltcG9ydGFudCA/IHsgXCIhXCI6IHZhbHVlIH0gOiB2YWx1ZTtcclxuXHJcblx0XHQvLyBzZWNvbmQsIGlmIENTU1J1bGUgYWxyZWR5IGV4aXN0cywgc2V0L3JlbW92ZSB0aGUgcHJvcGVydHkgdmFsdWUgdGhlcmVcclxuXHRcdGlmICghdGhpcy5jc3NSdWxlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpXHJcblx0XHRcdHRoaXMuY3NzUnVsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggY2FtZWxUb0Rhc2goIG5hbWUpKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KCBjYW1lbFRvRGFzaCggbmFtZSksXHJcblx0XHRcdFx0c3R5bGVQcm9wVG9TdHJpbmcoIG5hbWUsIHZhbHVlLCB0cnVlKSwgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiBudWxsKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0bW9tIGNTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzZXRDdXN0b21Qcm9wSW50ZXJuYWwoIHZhck9iajogVmFyUnVsZSwgdmFsdWU6IGFueSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRsZXQgY3VyckN1c3RvbVByb3BzID0gdGhpcy5zdHlsZXNldFtcIi0tXCJdIGFzIEN1c3RvbVZhclN0eWxlVHlwZVtdO1xyXG5cdFx0aWYgKGN1cnJDdXN0b21Qcm9wcyB8fCB2YWx1ZSAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBjdXJyQ3VzdG9tUHJvcHMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW1bMF0gPT09IHZhck9iaik7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKGN1cnJDdXN0b21Qcm9wcy5sZW5ndGggPT09IDEpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtcIlwiXSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wcy5zcGxpY2UoIGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFjdXJyQ3VzdG9tUHJvcHMpXHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0W1wiLS1cIl0gPSBjdXJyQ3VzdG9tUHJvcHMgPSBbW3Zhck9iaiwgdmFsdWVdXTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gY3VyckN1c3RvbVByb3BzLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtWzBdID09PSB2YXJPYmopO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IDApXHJcblx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wc1tpbmRleF1bMV0gPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzLnB1c2goIFt2YXJPYmosIHZhbHVlXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gc2Vjb25kLCBpZiBDU1NSdWxlIGFscmVkeSBleGlzdHMsIHNldC9yZW1vdmUgdGhlIHByb3BlcnR5IHZhbHVlIHRoZXJlXHJcblx0XHRpZiAoIXRoaXMuY3NzUnVsZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNzc1J1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIHZhck9iai5jc3NOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KCB2YXJPYmouY3NzTmFtZSxcclxuXHRcdFx0XHRzdHlsZVByb3BUb1N0cmluZyggdmFyT2JqLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudCA/IFwiIWltcG9ydGFudFwiIDogbnVsbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1N0eWxlUnVsZTtcclxuXHJcblx0LyoqXHJcblx0ICogT2JqZWN0IGNvbnRhaW5pbmcgZGVwZW5kZW50IHJ1bGVzLiBQcm9wZXJ0eSBuYW1lcyBhcmUgdGFrZW4gZnJvbSBzcGVjaWFsIHByb3BlcnRpZXNcclxuXHQgKiBvZiB0aGUgQ29tYmluZWRTdHlsZXNldC4gVGhpcyBvYmplY3QgYWxsb3dzIGNhbGxlcnMgdG8gYWNjZXNzIGRlcGVuZGVudCBydWxlcyB0byBjaGFuZ2VcclxuXHQgKiBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgcHJvZ3JhbW1hdGljYWxseS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVzO1xyXG5cclxuXHQvLyBSZXN1bHRhbnQgb2JqZWN0IGRlZmluaW5nIHByb3BlcnRpZXMgdG8gYmUgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0cHJpdmF0ZSBzdHlsZXNldDogU3R5bGVzZXQ7XHJcblxyXG5cdC8vIFNlbGVjdG9yIHN0cmluZyBjYWNoZWQgYWZ0ZXIgaXQgaXMgZmlyc3Qgb2J0YWluZWQuIE5lZWRlZCB0byBub3QgaW52b2tlIGdldFNlbGVjdG9yU3RyaW5nXHJcblx0Ly8gbXVsdGlwbGUgdGltZXMgaW4gdGhlIHByZXNlbmNlIG9mIGRlcGVuZGVudCBydWxlcy5cclxuXHRwcml2YXRlIGNhY2hlZFNlbGVjdG9yU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERlcGVuZGVudFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBkZXBlbmRzIG9uIHRoZSBjb250YWluaW5nIHN0eWxlIHJ1bGUuIFRoaXNcclxuICogaXMgdXNlZCBmb3IgcHNldWRvIGNsYXNzZXMsIHBzZXVkbyBlbGVtZW50cywgY29tYmluYXRvcnMgYW5kIG90aGVyIHNlbGVjdG9ycyB0aGF0IGNvbWJpbmUgdGhlXHJcbiAqIGNvbnRhaW5pbmcgcnVsZSdzIHNlbGVjdG9yIHdpdGggYWRkaXRpb25hbCBzZWxlY3RvciBpdGVtcy5cclxuICovXHJcbmNsYXNzIERlcGVuZGVudFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdC8vIGZvciByZWd1bGFyIHNlbGVjdG9ycywgcHNldWRvIGNsYXNzZXMgYW5kIHBzZXVkbyBlbGVtZW50cywgdGhlIHNlbGVjdG9yIGFscmVhZHkgY29udGFpbnNcclxuXHQvLyB0aGUgYW1wZXJzYW5kIGFuZCB0aGUgc2VsZWN0b3JQYXJhbSBpcyB1bmRlZmluZWQuIEZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzLCBwc3Vkb1xyXG5cdC8vIGVsZW1lbnRzIGFuZCBjb21iaW5hdG9ycywgdGhlIHNlbGVjdG9yUGFyYW0gaXMgZGVmaW5lZCBhbmQgdGhlIHNlbGVjdG9yIGlzIGp1c3QgdGhlIGVudGl0eVxyXG5cdC8vIG5hbWUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHNlbGVjdG9yUGFyYW0/OiBhbnksIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCxcclxuXHRcdGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0XHR0aGlzLnNlbGVjdG9yUGFyYW0gPSBzZWxlY3RvclBhcmFtO1xyXG5cdFx0dGhpcy5jb250YWluaW5nUnVsZSA9IGNvbnRhaW5pbmdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogRGVwZW5kZW50UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgRGVwZW5kZW50UnVsZSggdGhpcy5zZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHBhcmVudFNlbGVjdG9yID0gdGhpcy5jb250YWluaW5nUnVsZSEuc2VsZWN0b3JUZXh0O1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0b3JQYXJhbSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciBhcyBzdHJpbmc7XHJcblx0XHRcdHJldHVybiBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfSgke3BzZXVkb0VudGl0eVRvU3RyaW5nKCBzZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKX0pYDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29udmVydCBzZWxlY3RvciB0byBzdHJpbmcuXHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHNlbGVjdG9yVG9TdHJpbmcoIHRoaXMuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHNlbGVjdG9yIHN0cmluZyBkb2Vzbid0IGhhdmUgYW55IG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sLCB3ZVxyXG5cdFx0XHQvLyBzaW1wbHkgYXBwZW5kIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IHNlbGVjdG9yOyBvdGhlcndpc2UsIHdlIHJlcGxhY2UgYWxsXHJcblx0XHRcdC8vIG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sIGluIHRoZSBzZWxlY3RvciBzdHJpbmcgd2l0aCB0aGUgc2VsZWN0b3JcclxuXHRcdFx0Ly8gc3RyaW5nIG9mIHRoZSBwYXJlbnQgcnVsZS5cclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yLmluZGV4T2YoIFwiJlwiKSA8IDBcclxuXHRcdFx0XHQ/IGAke3BhcmVudFNlbGVjdG9yfSR7c2VsZWN0b3J9YFxyXG5cdFx0XHRcdDogc2VsZWN0b3IucmVwbGFjZSggLyYvZywgcGFyZW50U2VsZWN0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJ0aWFsIHNlbGVjdG9yIHRoYXQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWxlY3RvciAtIHVzZWQgZm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgYW5kIGVsZW1lbnRzLlxyXG5cdHByaXZhdGUgc2VsZWN0b3JQYXJhbT86IGFueTtcclxuXHJcblx0Ly8gUGFyZW50IHN0eWxlIHJ1bGUgb2Ygd2hpY2ggdGhpcyBydWxlIGlzIGRlcGVuZGVudC5cclxuXHRwdWJsaWMgY29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBYnN0cmFjdFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gb25seSBiZSB1c2VkIGFzIGEgYmFzZSBmb3Igb3RoZXIgc3R5bGVcclxuICogcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IEFic3RyYWN0UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCk7XHJcblx0fVxyXG5cclxuXHQvLyBPdmVycmlkZXMgdGhlIFN0eWxlUnVsZSdzIGltcGxlbWVudGF0aW9uIHRvIGRvIG5vdGhpbmcuIE5vIENTU1N0eWxlUnVsZSBpcyBjcmVhdGVkIGZvclxyXG5cdC8vIGFic3RyYWN0IHJ1bGVzLlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOYW1lZFN0eWxlUnVsZSBjbGFzcyBpcyBhIGJhc2UgZm9yIHN0eWxlIHJ1bGUgY2xhc3NlcyB0aGF0IGFyZSBhbHNvIG5hbWVkIGVudGl0aWVzIC0gc3VjaFxyXG4gKiBhcyBjbGFzcyBydWxlIGFuZCBJRCBydWxlLlxyXG4gKi9cclxuYWJzdHJhY3QgY2xhc3MgTmFtZWRTdHlsZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgdGhpcy5jc3NQcmVmaXgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcm90ZWN0ZWQgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2xhc3NSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgQ1NTIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsYXNzUnVsZSBleHRlbmRzIE5hbWVkU3R5bGVSdWxlIGltcGxlbWVudHMgSUNsYXNzUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgY2xhc3MgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzQ2xhc3NOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNzc05hbWU7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBDbGFzc1J1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IENsYXNzUnVsZSggdW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmcgeyByZXR1cm4gXCIuXCI7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhbiBJRC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJRFJ1bGUgZXh0ZW5kcyBOYW1lZFN0eWxlUnVsZSBpbXBsZW1lbnRzIElJRFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGVsZW1lbnQgSUQgcHJlZml4ZWQgd2l0aCBcIiNcIiAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzSUROYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNzc05hbWU7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBJRFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IElEUnVsZSggdW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmcgeyByZXR1cm4gXCIjXCI7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNlbGVjdG9yUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgQ1NTIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yUnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IFNlbGVjdG9yUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgU2VsZWN0b3JSdWxlKCB0aGlzLnNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB2YWx1ZVRvU3RyaW5nKCB0aGlzLnNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdC8vIHNlbGVjdG9yIG9iamVjdCBmb3IgdGhpcyBydWxlLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVZhclJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7VmFyVmFsdWVUeXBlLCBWYXJUZW1wbGF0ZU5hbWV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7c3R5bGVQcm9wVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7Y3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBWYXJSdWxlIGRvZXMgbm90IGRlcml2ZSBmcm9tIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGJlY2F1c2UgaXQgaXMgbm90IGEgcmVhbCBDU1MgcnVsZTsgaG93ZXZlciwgaW4gbWFueSBhc3BlY3RzIGl0IHJlcGVhdHMgdGhlIFJ1bGUnc1xyXG4gKiBmdW5jdGlvbmFsaXR5LiBJbiBwYXJ0aWN1bGFyIGl0IGhhcyB0aGUgcHJvY2VzcyBmdW5jdGlvbiB0aGF0IGFsbG93cyBpdCB0byBvYnRhaW4gYW4gYWN0dWFsXHJcbiAqIG5hbWUsIHdoaWNoIHdpbGwgYmUgdXNlZCB3aGVuIGRlZmluaW5nIGFuZCB1c2luZyB0aGlzIGN1c3RvbSBwcm9wZXJ0eSBpbiBDU1MuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgdGhlIHR5cGUgcGFyYW1ldGVyIEsgaXMgYSBrZXkgb2YgdGhlIElDc3NTdHlsZXNldCBpbnRlcmZhY2UsIHRoZSB2YWx1ZSBpcyBvZlxyXG4gKiB0eXBlIElTdGlsZXNldFtLXSwgd2hjaWggaXMgRXh0ZW5kZWQ8SUNzc1N0eWxlc2V0W0tdPi4gVGhpcyBhbGxvd3Mgc3BlY2lmeWluZyB2YWx1ZXMgdGhhdCBhcmVcclxuICogdmFsaWQgZm9yIHRoZSBFeHRlbmRlZCByb3BlcnR5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFyUnVsZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiBpbXBsZW1lbnRzIElWYXJSdWxlPEs+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHRlbXBsYXRlOiBLLCB2YWx1ZT86IFZhclZhbHVlVHlwZTxLPiwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz4pXHJcblx0e1xyXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlLCBcIi0tXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogVmFyUnVsZTxLPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVmFyUnVsZTxLPih0aGlzLnRlbXBsYXRlLCB0aGlzLnZhbHVlLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy52YWx1ZSA9PSBudWxsID8gbnVsbCA6IGAke3RoaXMuY3NzTmFtZX06ICR7c3R5bGVQcm9wVG9TdHJpbmcoIHRoaXMudGVtcGxhdGUsIHRoaXMudmFsdWUsIHRydWUpfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSB2YXIoLS1uYW1lKSBleHByZXNzaW9uLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gYHZhcigke3RoaXMuY3NzTmFtZX0pYDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBmb3IgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICovXHJcblx0cHVibGljIHNldFZhbHVlKCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyLnNldEN1c3RvbVZhclZhbHVlKCB0aGlzLmNzc05hbWUsXHJcblx0XHRcdHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIHRoaXMudGVtcGxhdGUsIHZhbHVlLCB0cnVlKSwgaW1wb3J0YW50KVxyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8vIC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBpc1xyXG5cdC8vIC8vIG51bGwgZm9yIFN0eWxlc2hlZXQuXHJcblx0Ly8gcHVibGljIHJ1bGVOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHRwdWJsaWMgdGVtcGxhdGU6IEs7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gVmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+O1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+O1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncyBhbmQgd2hpY2ggaGFzZSB0aGUgQ1NTU3R5bGVSdWxlIHRocm91Z2ggd2hpY2hcclxuXHQvLyB0aGUgdmFsdWUgb2YgdGhpcyBjdXN0b20gdmFyaWFibGUgY2FuIGJlIGNoYW5nZWQuXHJcblx0cHVibGljIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJTmFtZWRDb2xvcnMsIENzc0NvbG9yLCBDb2xvcnN9IGZyb20gXCIuL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQge0Nzc1BlcmNlbnRNYXRoLCBDc3NBbmdsZU1hdGgsIHZhbHVlVG9TdHJpbmd9IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWR9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIGNvbG9yIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGNvbG9yTnVtYmVyVG9TdHJpbmcoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICBpZiAodmFsIDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIFwiQSBudW1iZXIgcmVwcmVzZW50aW5nIGNvbG9yIGNhbm5vdCBiZSBuZWdhdGl2ZTogXCIgKyB2YWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCIjMDAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgZmxvYXRpbmcgcG9pbnQ6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZWQgY29sb3Igd2l0aCB0aGUgZ2l2ZW4gdmFsdWUsIHJldHVybiB0aGUgY29sb3IgbmFtZVxyXG4gICAgbGV0IG5hbWUgPSByZXZlcnNlZENvbG9yTWFwLmdldCggdmFsKTtcclxuICAgIGlmIChuYW1lKVxyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIG90aGVyd2lzZSBjb252ZXJ0IG51bWVyaWMgdmFsdWUgdG8gIyBub3RhdGlvblxyXG4gICAgICAgIGxldCBzID0gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICByZXR1cm4gXCIjXCIgKyAodmFsIDw9IDB4RkZGRkZGID8gcy5wYWRTdGFydCggNiwgXCIwXCIpIDogcy5wYWRTdGFydCggOCwgXCIwXCIpKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb2xvclNlcGFyYXRpb25Ub1N0cmluZyggYzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBjID09IG51bGwgPyBcIjBcIiA6IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gYyA6IE51bWJlci5pc0ludGVnZXIoYykgPyBjLnRvU3RyaW5nKCkgOiBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyhjKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9TdHJpbmcoIHI6IG51bWJlciB8IHN0cmluZywgZzogbnVtYmVyIHwgc3RyaW5nLCBiOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgciA9IGNvbG9yU2VwYXJhdGlvblRvU3RyaW5nKCByKTtcclxuICAgIGcgPSBjb2xvclNlcGFyYXRpb25Ub1N0cmluZyggZyk7XHJcbiAgICBiID0gY29sb3JTZXBhcmF0aW9uVG9TdHJpbmcoIGIpO1xyXG4gICAgYSA9IGEgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGEpO1xyXG5cclxuICAgIHJldHVybiAhYSA/IGByZ2IoJHtyfSwke2d9LCR7Yn0pYCA6IGByZ2JhKCR7cn0sJHtnfSwke2J9LCR7YX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9TdHJpbmcoIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyIHwgc3RyaW5nLCBsOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgaCA9IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGgpO1xyXG4gICAgcyA9IHMgPT0gbnVsbCA/IFwiMTAwJVwiIDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggcyk7XHJcbiAgICBsID0gbCA9PSBudWxsID8gXCIxMDAlXCIgOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBsKTtcclxuICAgIGEgPSBhID09IG51bGwgPyB1bmRlZmluZWQgOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhKTtcclxuXHJcbiAgICByZXR1cm4gIWEgPyBgaHNsKCR7aH0sJHtzfSwke2x9KWAgOiBgaHNsYSgke2h9LCR7c30sJHtsfSwke2F9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFscGhhVG9TdHJpbmcoIGM6IG51bWJlciB8IGtleW9mIElOYW1lZENvbG9ycywgYTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGxldCByZ2JWYWwgPSB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIiA/IENvbG9yc1tjXSA6IGM7XHJcbiAgICByZXR1cm4gcmdiVG9TdHJpbmcoIChyZ2JWYWwgJiAweEZGMDAwMCkgPj4gMTYsIChyZ2JWYWwgJiAweDAwRkYwMCkgPj4gOCwgcmdiVmFsICYgMHgwMDAwRkYsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcHJlZGVmaW5lZCBjb2xvciBuYW1lcyBieSB0aGVpciBudW1lcmljIHZhbHVlcy4gT25seSBidWlsdC1pbiBjb2xvciBuYW1lcyB3aWxsIGJlIGluXHJcbiAqIHRoaXMgbWFwIC0gdGhvc2UgbmFtZWQgY29sb3JzIHRoYXQgYXJlIGFkZGVkIHVzaW5nIG1vZHVsZSBhdWdtZW50YXRpb24gd2lsbCBOT1QgcmVzaWRlIGluXHJcbiAqIHRoaXMgbWFwLiBUaGlzIGlzIG5lZWRlZCB0byBjb252ZXJ0IHRoZSBudW1lcmljIGNvbG9yIHZhbHVlcyBzZXQgdXNpbmcgdGhlIENvbG9yLmJyb3duXHJcbiAqIG5vdGF0aW9uIHRvIHRoZWlyIG5hbWVzIHdoZW4gaW5zZXJ0aW5nIENTUyBydWxlcy5cclxuICovXHJcbmxldCByZXZlcnNlZENvbG9yTWFwID0gbmV3IE1hcDxudW1iZXIsc3RyaW5nPigpO1xyXG5cclxuLy8gYnVpbGQgUmV2ZXJzZWQgQ29sb3IgTWFwXHJcbk9iamVjdC5lbnRyaWVzKCBDb2xvcnMpLmZvckVhY2goIChbbmFtZSwgdmFsdWVdKSA9PiByZXZlcnNlZENvbG9yTWFwLnNldCggdmFsdWUsIG5hbWUpICk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLiBJZiBhIHN0cmluZyB2YWx1ZSBpcyBpbiB0aGUgQ29sb3JzIG9iamVjdCB3ZVxyXG4gKiBuZWVkIHRvIGdldCBpdHMgbnVtYmVyIGFuZCBjb252ZXJ0IGl0IHRvIHRoZSByZ2JbYV0oKSBmdW5jdGlvbiBiZWNhdXNlIGl0IG1pZ2h0IGJlIGEgY3VzdG9tXHJcbiAqIGNvbG9yIG5hbWUgYWRkZWQgdmlhIElOYW1lZENvbG9ycyBtb2R1bGUgYXVnbWVudGF0aW9uLiBGb3IgbnVtZXJpYyB2YWx1ZXMsIHdlIGNoZWNrIGlmIHRoaXMgaXNcclxuICogb25lIG9mIHRoZSBwcmVkZWZpbmVkIGNvbG9ycyBhbmQgcmV0dXJuIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0NvbG9yPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBDb2xvcnNbdl0gPyBjb2xvck51bWJlclRvU3RyaW5nKCBDb2xvcnNbdl0pIDogdixcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvck51bWJlclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgdHlwZXMgZm9yIHdvcmtpbmcgd2l0aCBDU1MgY29sb3JzLlxyXG4gKi9cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRDb2xvcnMgaW50ZXJmYWNlIGxpc3RzIHRoZSBuYW1lcyBvZiBzdGFuZGFyZCBXZWIgY29sb3JzLiBJdCBpcyBuZWVkZWQgdG8gYWxsb3cgZGV2ZWxvcGVyc1xyXG4gKiB0byBhZGQgbmV3IG5hbWVkIGNvbG9ycyB0aHJvdWdoIG1vZHVsZSBhdWdtZW50YXRpb24gdGVjaG5pcXVlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRDb2xvcnNcclxue1xyXG4gICAgcmVhZG9ubHkgYmxhY2s6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2lsdmVyOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JheTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hpdGU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWFyb29uOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcmVkOiAgICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcHVycGxlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZnVjaHNpYTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JlZW46ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGltZTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xpdmU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgeWVsbG93OiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2eTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmx1ZTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGVhbDogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXF1YTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JhbmdlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYWxpY2VibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYW50aXF1ZXdoaXRlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXF1YW1hcmluZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXp1cmU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmVpZ2U6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmlzcXVlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmx1ZXZpb2xldDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYnJvd246ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYnVybHl3b29kOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2FkZXRibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2hhcnRyZXVzZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2hvY29sYXRlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29yYWw6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29ybmZsb3dlcmJsdWU6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29ybnNpbGs6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY3JpbXNvbjogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY3lhbjogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2JsdWU6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2N5YW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dvbGRlbnJvZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyYXk6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyZXk6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2toYWtpOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya21hZ2VudGE6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29saXZlZ3JlZW46ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29yYW5nZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29yY2hpZDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3JlZDogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NhbG1vbjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NlYWdyZWVuOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlYmx1ZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlZ3JheTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlZ3JleTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3R1cnF1b2lzZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3Zpb2xldDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVlcHBpbms6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVlcHNreWJsdWU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGltZ3JheTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGltZ3JleTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZG9kZ2VyYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZmlyZWJyaWNrOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZmxvcmFsd2hpdGU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZm9yZXN0Z3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ2FpbnNib3JvOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ2hvc3R3aGl0ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ29sZDogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ29sZGVucm9kOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JlZW55ZWxsb3c6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JleTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaG9uZXlkZXc6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaG90cGluazogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaW5kaWFucmVkOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaW5kaWdvOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaXZvcnk6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkga2hha2k6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF2ZW5kZXJibHVzaDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF3bmdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGVtb25jaGlmZm9uOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRjb3JhbDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRjeWFuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmF5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmVlbjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmV5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRwaW5rOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzYWxtb246ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzZWFncmVlbjogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRza3libHVlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzbGF0ZWdyZXk6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzdGVlbGJsdWU6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGltZWdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGluZW46ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWFnZW50YTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtYXF1YW1hcmluZTogICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtcHVycGxlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc2VhZ3JlZW46ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc3ByaW5nZ3JlZW46ICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtdHVycXVvaXNlOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWlkbmlnaHRibHVlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWludGNyZWFtOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWlzdHlyb3NlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbW9jY2FzaW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2YWpvd2hpdGU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xkbGFjZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xpdmVkcmFiOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JhbmdlcmVkOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JjaGlkOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZWdvbGRlbnJvZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZWdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZXR1cnF1b2lzZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZXZpb2xldHJlZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFwYXlhd2hpcDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGVhY2hwdWZmOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGVydTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGluazogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGx1bTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcG93ZGVyYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm9zeWJyb3duOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm95YWxibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FkZGxlYnJvd246ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FsbW9uOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FuZHlicm93bjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2VhZ3JlZW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2Vhc2hlbGw6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2llbm5hOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2t5Ymx1ZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVncmF5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVncmV5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc25vdzogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc3RlZWxibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGFuOiAgICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGhpc3RsZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdG9tYXRvOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdHVycXVvaXNlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdmlvbGV0OiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hlYXQ6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hpdGVzbW9rZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgeWVsbG93Z3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcmViZWNjYXB1cnBsZTogICAgICAgICAgbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29sb3JQcm94eSB0eXBlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgb2YgQ1NTIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGZvclxyXG4gKiBzZWNpZnlpbmcgY29sb3JzLiBUaGlzIGludGVyZmFjZSBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlOiByZ2IoKSwgYWxwaGEoKSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JQcm94eSA9IChwPzogXCJjb2xvclwiKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgY29sb3IuIENvbG9yIGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gc3RyaW5nIChlLmcuIFwicmVkXCIgb3IgXCIjZmU1XCIgb3IgXCJyZ2JhKDE5MCwgMjAwLCAyMzUsIDkwJSlcIiwgZXRjLilcclxuICogICAtIG51bWJlcjpcclxuICogICAgIC0gcG9zaXRpdmUgaW50ZWdlciBudW1iZXJzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAweEZGRkZGRiBhcmUgdHJlYXRlZCBhcyBSR0Igc2VwYXJhdGlvbnMgMHhSUkdHQkIuXHJcbiAqICAgICAtIHBvc2l0aXZlIGludGVnZXIgbnVtYmVycyBncmVhdGVyIHRoYW4gMHhGRkZGRkYgYXJlIHRyZWF0ZWQgYXMgUkdCQSBzZXBhcmF0aW9ucyAweFJSR0dCQkFBLlxyXG4gKiAgICAgLSBuZWdhdGl2ZSBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyBhcmUgcmVqZWN0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NDb2xvciA9IFwidHJhbnNwYXJlbnRcIiB8IFwiY3VycmVudGNvbG9yXCIgfCBrZXlvZiBJTmFtZWRDb2xvcnMgfCBudW1iZXIgfCBDb2xvclByb3h5O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogT2JqZWN0IHdob3NlIHByb3BlcnR5IG5hbWVzIGFyZSBuYW1lcyBvZiB3ZWxsLWtub3duIGNvbG9ycyBhbmQgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIGhleGFkZWNpbWFsXHJcbiAqIHJlcHJlc2VudGFydGlvbiBvZiB0aGUgUkdCIHNlcGFyYXRpb25zICh3aXRob3V0IGFuIGFscGhhIG1hc2spLlxyXG4gKi9cclxuZXhwb3J0IGxldCBDb2xvcnM6IElOYW1lZENvbG9ycyA9XHJcbntcclxuICAgIGJsYWNrOiAgICAgICAgICAgICAgICAgIDB4MDAwMDAwLFxyXG4gICAgc2lsdmVyOiAgICAgICAgICAgICAgICAgMHhjMGMwYzAsXHJcbiAgICBncmF5OiAgICAgICAgICAgICAgICAgICAweDgwODA4MCxcclxuICAgIHdoaXRlOiAgICAgICAgICAgICAgICAgIDB4ZmZmZmZmLFxyXG4gICAgbWFyb29uOiAgICAgICAgICAgICAgICAgMHg4MDAwMDAsXHJcbiAgICByZWQ6ICAgICAgICAgICAgICAgICAgICAweGZmMDAwMCxcclxuICAgIHB1cnBsZTogICAgICAgICAgICAgICAgIDB4ODAwMDgwLFxyXG4gICAgZnVjaHNpYTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBncmVlbjogICAgICAgICAgICAgICAgICAweDAwODAwMCxcclxuICAgIGxpbWU6ICAgICAgICAgICAgICAgICAgIDB4MDBmZjAwLFxyXG4gICAgb2xpdmU6ICAgICAgICAgICAgICAgICAgMHg4MDgwMDAsXHJcbiAgICB5ZWxsb3c6ICAgICAgICAgICAgICAgICAweGZmZmYwMCxcclxuICAgIG5hdnk6ICAgICAgICAgICAgICAgICAgIDB4MDAwMDgwLFxyXG4gICAgYmx1ZTogICAgICAgICAgICAgICAgICAgMHgwMDAwZmYsXHJcbiAgICB0ZWFsOiAgICAgICAgICAgICAgICAgICAweDAwODA4MCxcclxuICAgIGFxdWE6ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgb3JhbmdlOiAgICAgICAgICAgICAgICAgMHhmZmE1MDAsXHJcbiAgICBhbGljZWJsdWU6ICAgICAgICAgICAgICAweGYwZjhmZixcclxuICAgIGFudGlxdWV3aGl0ZTogICAgICAgICAgIDB4ZmFlYmQ3LFxyXG4gICAgYXF1YW1hcmluZTogICAgICAgICAgICAgMHg3ZmZmZDQsXHJcbiAgICBhenVyZTogICAgICAgICAgICAgICAgICAweGYwZmZmZixcclxuICAgIGJlaWdlOiAgICAgICAgICAgICAgICAgIDB4ZjVmNWRjLFxyXG4gICAgYmlzcXVlOiAgICAgICAgICAgICAgICAgMHhmZmU0YzQsXHJcbiAgICBibGFuY2hlZGFsbW9uZDogICAgICAgICAweGZmZWJjZCxcclxuICAgIGJsdWV2aW9sZXQ6ICAgICAgICAgICAgIDB4OGEyYmUyLFxyXG4gICAgYnJvd246ICAgICAgICAgICAgICAgICAgMHhhNTJhMmEsXHJcbiAgICBidXJseXdvb2Q6ICAgICAgICAgICAgICAweGRlYjg4NyxcclxuICAgIGNhZGV0Ymx1ZTogICAgICAgICAgICAgIDB4NWY5ZWEwLFxyXG4gICAgY2hhcnRyZXVzZTogICAgICAgICAgICAgMHg3ZmZmMDAsXHJcbiAgICBjaG9jb2xhdGU6ICAgICAgICAgICAgICAweGQyNjkxZSxcclxuICAgIGNvcmFsOiAgICAgICAgICAgICAgICAgIDB4ZmY3ZjUwLFxyXG4gICAgY29ybmZsb3dlcmJsdWU6ICAgICAgICAgMHg2NDk1ZWQsXHJcbiAgICBjb3Juc2lsazogICAgICAgICAgICAgICAweGZmZjhkYyxcclxuICAgIGNyaW1zb246ICAgICAgICAgICAgICAgIDB4ZGMxNDNjLFxyXG4gICAgY3lhbjogICAgICAgICAgICAgICAgICAgMHgwMGZmZmYsXHJcbiAgICBkYXJrYmx1ZTogICAgICAgICAgICAgICAweDAwMDA4YixcclxuICAgIGRhcmtjeWFuOiAgICAgICAgICAgICAgIDB4MDA4YjhiLFxyXG4gICAgZGFya2dvbGRlbnJvZDogICAgICAgICAgMHhiODg2MGIsXHJcbiAgICBkYXJrZ3JheTogICAgICAgICAgICAgICAweGE5YTlhOSxcclxuICAgIGRhcmtncmVlbjogICAgICAgICAgICAgIDB4MDA2NDAwLFxyXG4gICAgZGFya2dyZXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJra2hha2k6ICAgICAgICAgICAgICAweGJkYjc2YixcclxuICAgIGRhcmttYWdlbnRhOiAgICAgICAgICAgIDB4OGIwMDhiLFxyXG4gICAgZGFya29saXZlZ3JlZW46ICAgICAgICAgMHg1NTZiMmYsXHJcbiAgICBkYXJrb3JhbmdlOiAgICAgICAgICAgICAweGZmOGMwMCxcclxuICAgIGRhcmtvcmNoaWQ6ICAgICAgICAgICAgIDB4OTkzMmNjLFxyXG4gICAgZGFya3JlZDogICAgICAgICAgICAgICAgMHg4YjAwMDAsXHJcbiAgICBkYXJrc2FsbW9uOiAgICAgICAgICAgICAweGU5OTY3YSxcclxuICAgIGRhcmtzZWFncmVlbjogICAgICAgICAgIDB4OGZiYzhmLFxyXG4gICAgZGFya3NsYXRlYmx1ZTogICAgICAgICAgMHg0ODNkOGIsXHJcbiAgICBkYXJrc2xhdGVncmF5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmtzbGF0ZWdyZXk6ICAgICAgICAgIDB4MmY0ZjRmLFxyXG4gICAgZGFya3R1cnF1b2lzZTogICAgICAgICAgMHgwMGNlZDEsXHJcbiAgICBkYXJrdmlvbGV0OiAgICAgICAgICAgICAweDk0MDBkMyxcclxuICAgIGRlZXBwaW5rOiAgICAgICAgICAgICAgIDB4ZmYxNDkzLFxyXG4gICAgZGVlcHNreWJsdWU6ICAgICAgICAgICAgMHgwMGJmZmYsXHJcbiAgICBkaW1ncmF5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRpbWdyZXk6ICAgICAgICAgICAgICAgIDB4Njk2OTY5LFxyXG4gICAgZG9kZ2VyYmx1ZTogICAgICAgICAgICAgMHgxZTkwZmYsXHJcbiAgICBmaXJlYnJpY2s6ICAgICAgICAgICAgICAweGIyMjIyMixcclxuICAgIGZsb3JhbHdoaXRlOiAgICAgICAgICAgIDB4ZmZmYWYwLFxyXG4gICAgZm9yZXN0Z3JlZW46ICAgICAgICAgICAgMHgyMjhiMjIsXHJcbiAgICBnYWluc2Jvcm86ICAgICAgICAgICAgICAweGRjZGNkYyxcclxuICAgIGdob3N0d2hpdGU6ICAgICAgICAgICAgIDB4ZjhmOGZmLFxyXG4gICAgZ29sZDogICAgICAgICAgICAgICAgICAgMHhmZmQ3MDAsXHJcbiAgICBnb2xkZW5yb2Q6ICAgICAgICAgICAgICAweGRhYTUyMCxcclxuICAgIGdyZWVueWVsbG93OiAgICAgICAgICAgIDB4YWRmZjJmLFxyXG4gICAgZ3JleTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICBob25leWRldzogICAgICAgICAgICAgICAweGYwZmZmMCxcclxuICAgIGhvdHBpbms6ICAgICAgICAgICAgICAgIDB4ZmY2OWI0LFxyXG4gICAgaW5kaWFucmVkOiAgICAgICAgICAgICAgMHhjZDVjNWMsXHJcbiAgICBpbmRpZ286ICAgICAgICAgICAgICAgICAweDRiMDA4MixcclxuICAgIGl2b3J5OiAgICAgICAgICAgICAgICAgIDB4ZmZmZmYwLFxyXG4gICAga2hha2k6ICAgICAgICAgICAgICAgICAgMHhmMGU2OGMsXHJcbiAgICBsYXZlbmRlcjogICAgICAgICAgICAgICAweGU2ZTZmYSxcclxuICAgIGxhdmVuZGVyYmx1c2g6ICAgICAgICAgIDB4ZmZmMGY1LFxyXG4gICAgbGF3bmdyZWVuOiAgICAgICAgICAgICAgMHg3Y2ZjMDAsXHJcbiAgICBsZW1vbmNoaWZmb246ICAgICAgICAgICAweGZmZmFjZCxcclxuICAgIGxpZ2h0Ymx1ZTogICAgICAgICAgICAgIDB4YWRkOGU2LFxyXG4gICAgbGlnaHRjb3JhbDogICAgICAgICAgICAgMHhmMDgwODAsXHJcbiAgICBsaWdodGN5YW46ICAgICAgICAgICAgICAweGUwZmZmZixcclxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAgIDB4ZmFmYWQyLFxyXG4gICAgbGlnaHRncmF5OiAgICAgICAgICAgICAgMHhkM2QzZDMsXHJcbiAgICBsaWdodGdyZWVuOiAgICAgICAgICAgICAweDkwZWU5MCxcclxuICAgIGxpZ2h0Z3JleTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRwaW5rOiAgICAgICAgICAgICAgMHhmZmI2YzEsXHJcbiAgICBsaWdodHNhbG1vbjogICAgICAgICAgICAweGZmYTA3YSxcclxuICAgIGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgIDB4MjBiMmFhLFxyXG4gICAgbGlnaHRza3libHVlOiAgICAgICAgICAgMHg4N2NlZmEsXHJcbiAgICBsaWdodHNsYXRlZ3JheTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c2xhdGVncmV5OiAgICAgICAgIDB4Nzc4ODk5LFxyXG4gICAgbGlnaHRzdGVlbGJsdWU6ICAgICAgICAgMHhiMGM0ZGUsXHJcbiAgICBsaWdodHllbGxvdzogICAgICAgICAgICAweGZmZmZlMCxcclxuICAgIGxpbWVncmVlbjogICAgICAgICAgICAgIDB4MzJjZDMyLFxyXG4gICAgbGluZW46ICAgICAgICAgICAgICAgICAgMHhmYWYwZTYsXHJcbiAgICBtYWdlbnRhOiAgICAgICAgICAgICAgICAweGZmMDBmZixcclxuICAgIG1lZGl1bWFxdWFtYXJpbmU6ICAgICAgIDB4NjZjZGFhLFxyXG4gICAgbWVkaXVtYmx1ZTogICAgICAgICAgICAgMHgwMDAwY2QsXHJcbiAgICBtZWRpdW1vcmNoaWQ6ICAgICAgICAgICAweGJhNTVkMyxcclxuICAgIG1lZGl1bXB1cnBsZTogICAgICAgICAgIDB4OTM3MGRiLFxyXG4gICAgbWVkaXVtc2VhZ3JlZW46ICAgICAgICAgMHgzY2IzNzEsXHJcbiAgICBtZWRpdW1zbGF0ZWJsdWU6ICAgICAgICAweDdiNjhlZSxcclxuICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAgICAgIDB4MDBmYTlhLFxyXG4gICAgbWVkaXVtdHVycXVvaXNlOiAgICAgICAgMHg0OGQxY2MsXHJcbiAgICBtZWRpdW12aW9sZXRyZWQ6ICAgICAgICAweGM3MTU4NSxcclxuICAgIG1pZG5pZ2h0Ymx1ZTogICAgICAgICAgIDB4MTkxOTcwLFxyXG4gICAgbWludGNyZWFtOiAgICAgICAgICAgICAgMHhmNWZmZmEsXHJcbiAgICBtaXN0eXJvc2U6ICAgICAgICAgICAgICAweGZmZTRlMSxcclxuICAgIG1vY2Nhc2luOiAgICAgICAgICAgICAgIDB4ZmZlNGI1LFxyXG4gICAgbmF2YWpvd2hpdGU6ICAgICAgICAgICAgMHhmZmRlYWQsXHJcbiAgICBvbGRsYWNlOiAgICAgICAgICAgICAgICAweGZkZjVlNixcclxuICAgIG9saXZlZHJhYjogICAgICAgICAgICAgIDB4NmI4ZTIzLFxyXG4gICAgb3JhbmdlcmVkOiAgICAgICAgICAgICAgMHhmZjQ1MDAsXHJcbiAgICBvcmNoaWQ6ICAgICAgICAgICAgICAgICAweGRhNzBkNixcclxuICAgIHBhbGVnb2xkZW5yb2Q6ICAgICAgICAgIDB4ZWVlOGFhLFxyXG4gICAgcGFsZWdyZWVuOiAgICAgICAgICAgICAgMHg5OGZiOTgsXHJcbiAgICBwYWxldHVycXVvaXNlOiAgICAgICAgICAweGFmZWVlZSxcclxuICAgIHBhbGV2aW9sZXRyZWQ6ICAgICAgICAgIDB4ZGI3MDkzLFxyXG4gICAgcGFwYXlhd2hpcDogICAgICAgICAgICAgMHhmZmVmZDUsXHJcbiAgICBwZWFjaHB1ZmY6ICAgICAgICAgICAgICAweGZmZGFiOSxcclxuICAgIHBlcnU6ICAgICAgICAgICAgICAgICAgIDB4Y2Q4NTNmLFxyXG4gICAgcGluazogICAgICAgICAgICAgICAgICAgMHhmZmMwY2IsXHJcbiAgICBwbHVtOiAgICAgICAgICAgICAgICAgICAweGRkYTBkZCxcclxuICAgIHBvd2RlcmJsdWU6ICAgICAgICAgICAgIDB4YjBlMGU2LFxyXG4gICAgcm9zeWJyb3duOiAgICAgICAgICAgICAgMHhiYzhmOGYsXHJcbiAgICByb3lhbGJsdWU6ICAgICAgICAgICAgICAweDQxNjllMSxcclxuICAgIHNhZGRsZWJyb3duOiAgICAgICAgICAgIDB4OGI0NTEzLFxyXG4gICAgc2FsbW9uOiAgICAgICAgICAgICAgICAgMHhmYTgwNzIsXHJcbiAgICBzYW5keWJyb3duOiAgICAgICAgICAgICAweGY0YTQ2MCxcclxuICAgIHNlYWdyZWVuOiAgICAgICAgICAgICAgIDB4MmU4YjU3LFxyXG4gICAgc2Vhc2hlbGw6ICAgICAgICAgICAgICAgMHhmZmY1ZWUsXHJcbiAgICBzaWVubmE6ICAgICAgICAgICAgICAgICAweGEwNTIyZCxcclxuICAgIHNreWJsdWU6ICAgICAgICAgICAgICAgIDB4ODdjZWViLFxyXG4gICAgc2xhdGVibHVlOiAgICAgICAgICAgICAgMHg2YTVhY2QsXHJcbiAgICBzbGF0ZWdyYXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNsYXRlZ3JleTogICAgICAgICAgICAgIDB4NzA4MDkwLFxyXG4gICAgc25vdzogICAgICAgICAgICAgICAgICAgMHhmZmZhZmEsXHJcbiAgICBzcHJpbmdncmVlbjogICAgICAgICAgICAweDAwZmY3ZixcclxuICAgIHN0ZWVsYmx1ZTogICAgICAgICAgICAgIDB4NDY4MmI0LFxyXG4gICAgdGFuOiAgICAgICAgICAgICAgICAgICAgMHhkMmI0OGMsXHJcbiAgICB0aGlzdGxlOiAgICAgICAgICAgICAgICAweGQ4YmZkOCxcclxuICAgIHRvbWF0bzogICAgICAgICAgICAgICAgIDB4ZmY2MzQ3LFxyXG4gICAgdHVycXVvaXNlOiAgICAgICAgICAgICAgMHg0MGUwZDAsXHJcbiAgICB2aW9sZXQ6ICAgICAgICAgICAgICAgICAweGVlODJlZSxcclxuICAgIHdoZWF0OiAgICAgICAgICAgICAgICAgIDB4ZjVkZWIzLFxyXG4gICAgd2hpdGVzbW9rZTogICAgICAgICAgICAgMHhmNWY1ZjUsXHJcbiAgICB5ZWxsb3dncmVlbjogICAgICAgICAgICAweDlhY2QzMixcclxuICAgIHJlYmVjY2FwdXJwbGU6ICAgICAgICAgIDB4NjYzMzk5LFxyXG59O1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBGb250RmFjZVR5cGVzIGZyb20gXCIuL0ZvbnRGYWNlVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBVdGlsRnVuY3MgZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBmb250IGZhY2UgZGVmaW5pdGlvbiBvYmplY3QgdG8gdGhlIENTUyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb250RmFjZVRvU3RyaW5nKCBmb250ZmFjZTogRm9udEZhY2VUeXBlcy5JRm9udEZhY2UpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghZm9udGZhY2UgfHwgIWZvbnRmYWNlLmZvbnRGYW1pbHkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IHMgPSBcIntcIjtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBmb250ZmFjZSlcclxuICAgIHtcclxuICAgICAgICBzICs9IGAke1V0aWxGdW5jcy5jYW1lbFRvRGFzaCggcHJvcE5hbWUpfTpgO1xyXG4gICAgICAgIGxldCBwcm9wVmFsID0gZm9udGZhY2VbcHJvcE5hbWVdO1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3RyZXRjaFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTdHJldGNoVG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSBcImZvbnRTdHlsZVwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTdHlsZVRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250V2VpZ2h0XCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFdlaWdodFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJzcmNcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3JjVG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBwcm9wVmFsO1xyXG5cclxuICAgICAgICBzICs9IFwiO1wiXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHMgKyBcIn1cIjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3RyZXRjaFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFN0cmV0Y2hfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBVdGlsRnVuY3MudmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogVXRpbEZ1bmNzLkNzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogVXRpbEZ1bmNzLkNzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFN0eWxlX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gYG9ibGlxdWUgJHtVdGlsRnVuY3MuQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodil9YCxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYG9ibGlxdWUgJHtVdGlsRnVuY3MuYXJyYXlUb1N0cmluZyggdiwgVXRpbEZ1bmNzLkNzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250V2VpZ2h0VG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250V2VpZ2h0X0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IFV0aWxGdW5jcy5Dc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBVdGlsRnVuY3MudmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFueTogZm9udFNpbmdsZVNyY1RvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFNpbmdsZVNyY1RvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNyY19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy5vYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wibG9jYWxcIiwgdiA9PiBgbG9jYWwoJHt2fSlgXSxcclxuICAgICAgICBbXCJ1cmxcIiwgdiA9PiBgdXJsKCR7dn0pYF0sXHJcbiAgICAgICAgW1wiZm9ybWF0XCIsIHYgPT4gYGZvcm1hdCgke2ZvbnRGb3JtYXRUb1N0cmluZyh2KX0pYF1cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRGb3JtYXRUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBVdGlsRnVuY3MudmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBgXFxcIiR7dn1cXFwiYCxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBHcmFkaWVudFN0b3BPckhpbnQsIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIExpbmVhckdyYWRBbmdsZSwgUmFkaWFsR3JhZGllbnRTaGFwZSxcclxuICAgIFJhZGlhbEdyYWRpZW50RXh0ZW50LCBDcm9zc0ZhZGVQYXJhbVxyXG59IGZyb20gXCIuL0ltYWdlVHlwZXNcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHtDc3NQb3NpdGlvbiwgRXh0ZW5kZWQsIFNpbXBsZUNzc1Bvc2l0aW9uLCBDc3NBbmdsZX0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7dmFsdWVUb1N0cmluZywgSU51bWJlck1hdGhDbGFzcywgQ3NzQW5nbGVNYXRoLCBwb3NpdGlvblRvU3RyaW5nLCBDc3NQZXJjZW50TWF0aH0gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50U3RvcE9ySGludCxcclxuICAgIG1hdGhDbGFzczogSU51bWJlck1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gdi5sZW5ndGggPT09IDAgPyBcIlwiIDogdi5sZW5ndGggPT09IDEgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdlswXSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudENvbG9yQW5kTGVuZ3RoVG9TdHJpbmcoIHYgYXMgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgbWF0aENsYXNzKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNlY29uZFN0b3AgPSB2YWwubGVuZ3RoID4gMiA/IG1hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2YWxbMl0pIDogXCJcIjtcclxuICAgIHJldHVybiBgJHtjb2xvclRvU3RyaW5nKHZhbFswXSl9ICR7bWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZhbFsxXSl9ICR7c2Vjb25kU3RvcH1gO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIGFuZ2xlOiBMaW5lYXJHcmFkQW5nbGUsXHJcbiAgICBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IGFuZ2xlID8gQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIGFuZ2xlKSArIFwiLFwiIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NQZXJjZW50TWF0aCkpO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7YW5nbGVTdHJpbmd9JHtidWYuam9pbihcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc2hhcGU6IFJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICBleHRlbnQ6IFJhZGlhbEdyYWRpZW50RXh0ZW50LCBwb3M6IENzc1Bvc2l0aW9uLFxyXG4gICAgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2hhcGVTdHJpbmcgPSBzaGFwZSA/IHNoYXBlIDogXCJcIjtcclxuICAgIGxldCBleHRlbnRTdHJpbmcgPSBleHRlbnQgPyBleHRlbnQgOiBcIlwiO1xyXG4gICAgbGV0IHBvc1N0cmluZyA9IHBvcyA/IGBhdCAke3Bvc2l0aW9uVG9TdHJpbmcoIHBvcyl9YCA6IFwiXCI7XHJcbiAgICBsZXQgd2hhdEFuZFdoZXJlID0gc2hhcGUgfHwgZXh0ZW50U3RyaW5nIHx8IHBvcyA/IGAke3NoYXBlU3RyaW5nfSAke2V4dGVudFN0cmluZ30gJHtwb3NTdHJpbmd9LGAgOiBcIlwiO1xyXG4gICAgbGV0IGJ1ZiA9IHN0b3BzT3JIaW50cy5tYXAoIHN0b3BPckhpbnQgPT4gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmcoIHN0b3BPckhpbnQsIENzc1BlcmNlbnRNYXRoKSk7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtidWYuam9pbihcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmljR3JhZGllbnRUb1N0cmluZyggYW5nbGU6IEV4dGVuZGVkPENzc0FuZ2xlPiwgcG9zOiBTaW1wbGVDc3NQb3NpdGlvbixcclxuICAgIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFuZ2xlU3RyaW5nID0gYW5nbGUgPyBgZnJvbSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSl9YCA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zaXRpb25Ub1N0cmluZyggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBhbmdsZSB8fCBwb3MgPyBgJHthbmdsZVN0cmluZ30gJHtwb3NTdHJpbmd9LGAgOiBcIlwiO1xyXG4gICAgbGV0IGJ1ZiA9IHN0b3BzT3JIaW50cy5tYXAoIHN0b3BPckhpbnQgPT4gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmcoIHN0b3BPckhpbnQsIENzc0FuZ2xlTWF0aCkpO1xyXG4gICAgcmV0dXJuIGBjb25pYy1ncmFkaWVudCgke3doYXRBbmRXaGVyZX0ke2J1Zi5qb2luKFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcm9zc0ZhZGVQYXJhbVRvU3RyaW5nKCB2YWw6IENyb3NzRmFkZVBhcmFtKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYCR7dmFsdWVUb1N0cmluZyh2WzBdKX0sJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKHZbMV0pfWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcm9zc0ZhZGVUb1N0cmluZyggYXJnczogQ3Jvc3NGYWRlUGFyYW1bXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gdmFsdWVUb1N0cmluZyggYXJncywge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IGNyb3NzRmFkZVBhcmFtVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBgY3Jvc3MtZmFkZSgke3BhcmFtc1N0cmluZ30pYDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBVdGlsRnVuY3MgZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0ICogYXMgTWVkaWFUeXBlcyBmcm9tIFwiLi9NZWRpYVR5cGVzXCJcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYXNwZWN0UmF0aW9Ub1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkFzcGVjdFJhdGlvRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWxbMF0gKyBcIi9cIiArIHZhbFsxXTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5MZW5ndGhGZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwicHhcIjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuUmVzb2x1dGlvbkZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJkcGlcIjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIHByb3BlcnR5LXNwZWNpZmljIHR5cGUgdG8gQ1NTIHN0cmluZyAqL1xyXG50eXBlIGNvbnZlcnRGdW5jVHlwZTxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gKHZhbDogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS10pID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYUZlYXR1cmVJbmZvIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gdGhhdCB3ZSBrZWVwIGZvciBzdHlsZSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG50eXBlIE1lZGlhRmVhdHVyZUluZm88SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9IGNvbnZlcnRGdW5jVHlwZTxLPiB8IGJvb2xlYW4gfFxyXG4gICAge1xyXG4gICAgICAgIC8qKiBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGZyb20gdGhlIHByb3BlcnR5LXNwZWNpZmljIHR5cGUgdG8gQ1NTIHN0cmluZyAqL1xyXG4gICAgICAgIGNvbnZlcnQ/OiBjb252ZXJ0RnVuY1R5cGU8Sz47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIGRlZmluZWQsIGluZGljYXRlcyB0aGUgdmFsdWUsIHdoaWNoIHdlIHdpbGwgbm90IHB1dCBpbnRvIENTUyBzdHJpbmcuIFRoaXMgaXMgbmVlZGVkIGZvclxyXG4gICAgICAgICAqIG1lZGlhIGZlYXR1cmVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRob3V0IHRoZSB2YWx1ZSwgZS5nLiBjb2xvciBvciBjb2xvci1pbmRleC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZlYXR1cmUgaXMgYSBcInJhbmdlXCIgZmVhdHVyZTsgdGhhdCBpcywgY2FuIGJlIHVzZWQgaW4gYW5cclxuICAgICAgICAgKiBleHByZXNzaW9uIChhIDw9IGZlYXR1cmUgPD0gYikuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNSYW5nZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeTogTWVkaWFUeXBlcy5NZWRpYVF1ZXJ5KTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIXF1ZXJ5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiwgXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZU1lZGlhUXVlcnlUb1N0cmluZyggcXVlcnk6IE1lZGlhVHlwZXMuU2luZ2xlTWVkaWFRdWVyeSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBsZXQgbWVkaWFUeXBlID0gcXVlcnkuJG1lZGlhVHlwZTtcclxuICAgIGxldCBvbmx5ID0gcXVlcnkuJG9ubHk7XHJcbiAgICBsZXQgbmVnYXRlID0gcXVlcnkuJG5lZ2F0ZTtcclxuXHJcbiAgICBsZXQgaXRlbXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobWVkaWFUeXBlKVxyXG4gICAgICAgIGl0ZW1zLnB1c2goIChvbmx5ID8gXCJvbmx5IFwiIDogXCJcIikgKyBtZWRpYVR5cGUpO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIHF1ZXJ5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJFwiKSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChxdWVyeVtwcm9wTmFtZV0pXHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goIGAoJHttZWRpYUZlYXR1cmVUb1N0cmluZyggcHJvcE5hbWUsIHF1ZXJ5W3Byb3BOYW1lXSl9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuZWdhdGUgPyBcIm5vdCBcIiA6IFwiXCJ9JHtpdGVtcy5qb2luKFwiIGFuZCBcIil9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIGZlYXR1cmUgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUZlYXR1cmVUb1N0cmluZyggZmVhdHVyZU5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZlYXR1cmVOYW1lIHx8IHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBcclxuICAgIGxldCBpbmZvOiBNZWRpYUZlYXR1cmVJbmZvID0gbWVkaWFGZWF0dXJlc1tmZWF0dXJlTmFtZV07XHJcblxyXG4gICAgbGV0IHJlYWxGZWF0dXJlTmFtZSA9IFV0aWxGdW5jcy5jYW1lbFRvRGFzaCggZmVhdHVyZU5hbWUpO1xyXG5cclxuICAgIC8vIGlmIGRlZmF1bHRWYWx1ZSBpcyBkZWZpbmVkIGFuZCB0aGUgcHJvcGVydHkgdmFsdWUgaXMgZXF1YWwgdG8gaXQsIG5vIHZhbHVlIHNob3VsZCBiZSByZXR1cm5lZC5cclxuICAgIGxldCBkZWZhdWx0VmFsdWUgPSB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uZGVmYXVsdFZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BWYWwgPT09IGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICByZXR1cm4gdmFsdWVPbmx5ID8gXCJcIiA6IHJlYWxGZWF0dXJlTmFtZTtcclxuXHJcbiAgICBsZXQgY29udmVydCA9IHR5cGVvZiBpbmZvID09PSBcImZ1bmN0aW9uXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmNvbnZlcnQgOiB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaXNSYW5nZSA9IHR5cGVvZiBpbmZvID09PSBcImJvb2xlYW5cIiA/IGluZm8gOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uaXNSYW5nZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChpc1JhbmdlICYmICF2YWx1ZU9ubHkgJiYgQXJyYXkuaXNBcnJheSggcHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPT09IDIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMxID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbFswXSwgY29udmVydCk7XHJcbiAgICAgICAgbGV0IHMyID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbFsxXSwgY29udmVydCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3MxfSA8PSAke3JlYWxGZWF0dXJlTmFtZX0gPD0gJHtzMn1gO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbCwgY29udmVydCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IHMgOiByZWFsRmVhdHVyZU5hbWUgKyBcIjpcIiArIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbDogYW55LCBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgaWYgKGNvbnZlcnQpXHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnQoIHByb3BWYWwpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHByb3BWYWw7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBwcm9wVmFsKSlcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFycmF5VG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBwcm9wVmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxubGV0IG1lZGlhRmVhdHVyZXM6IHsgW0sgaW4ga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRdPzogTWVkaWFGZWF0dXJlSW5mbzxLPiB9ID1cclxue1xyXG4gICAgYXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBtaW5Bc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIG1heEFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgY29sb3I6IHsgZGVmYXVsdFZhbHVlOiAwLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBjb2xvckluZGV4OiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgaGVpZ2h0OiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluSGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtYXhIZWlnaHQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1vbm9jaHJvbWU6IHsgZGVmYXVsdFZhbHVlOiAwLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICByZXNvbHV0aW9uOiB7IGNvbnZlcnQ6IHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pblJlc29sdXRpb246IHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtYXhSZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgd2lkdGg6IHsgY29udmVydDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5XaWR0aDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4V2lkdGg6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtTZWxlY3Rvckl0ZW0sIENzc1NlbGVjdG9yfSBmcm9tIFwiLi9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi4vcnVsZXMvU3R5bGVSdWxlc1wiXHJcbmltcG9ydCB7dmFsdWVUb1N0cmluZywgdGVtcGxhdGVTdHJpbmdUb1N0cmluZ30gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc2VsZWN0b3IuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZWxlY3RvciB1c2luZyB0aGUgZ2l2ZW4gdGVtcGxhdGUgc3RyaW5nIHdpdGggb3B0aW9uYWxcclxuICogcGxhY2Vob2xkZXJzIChlLmcuIHswfSksIHdoaWNoIHdpbGwgYmUgcmVwbGFjZWQgYnkgbmFtZXMgb2YgdGFncywgY2xhc3NlcyBhbmQgSURzIGFuZCBvdGhlclxyXG4gKiBwb3NzaWJsZSB0eXBlcy5cclxuICovXHJcbmZ1bmN0aW9uIHNlbGVjdG9ySXRlbVRvU3RyaW5nKCB2YWw6IFNlbGVjdG9ySXRlbSk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG5cdFx0ZnJvbU51bGw6IHYgPT4gXCJcIixcclxuXHRcdGZyb21PYmplY3Q6IHYgPT4gdiBpbnN0YW5jZW9mIFN0eWxlUnVsZSA/IHYuc2VsZWN0b3JUZXh0IDogdmFsdWVUb1N0cmluZyh2KVxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB0d28tbnVtYmVyIHR1cGxlIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtIEFuK0IuXHJcbiAqL1xyXG5mdW5jdGlvbiBudGhUdXBsZVRvU3RyaW5nKCB2YWw6IFtudW1iZXIsIG51bWJlcj9dKTogc3RyaW5nXHJcbntcclxuXHRsZXQgdjAgPSB2YWx1ZVRvU3RyaW5nKCB2YWxbMF0pO1xyXG5cdGxldCB2MW4gPSB2YWxbMV07XHJcblxyXG5cdC8vIHRoZSAnIXYxbicgZXhwcmVzc2lvbiBjb3ZlcnMgbnVsbCwgdW5kZWZpbmVkIGFuZCAwLlxyXG5cdGxldCB2MSA9ICF2MW4gPyBcIlwiIDogdjFuID4gMCA/IFwiK1wiICsgdmFsdWVUb1N0cmluZyggdjFuKSA6IFwiLVwiICsgdmFsdWVUb1N0cmluZyggLXYxbik7XHJcblxyXG5cdHJldHVybiBgJHt2MH1uJHt2MX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JUb1N0cmluZyggdmFsOiBDc3NTZWxlY3Rvcik6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG5cdFx0ZnJvbUFueTogc2VsZWN0b3JJdGVtVG9TdHJpbmcsXHJcblx0XHRhcnJheVNlcGFyYXRvcjogXCJcIlxyXG5cdH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZWxlY3RvciB1c2luZyB0aGUgZ2l2ZW4gdGVtcGxhdGUgc3RyaW5nIHdpdGggb3B0aW9uYWxcclxuICogcGxhY2Vob2xkZXJzLiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGFnIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0XHJcbiAqIHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFNlbGVjdG9yKCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogU2VsZWN0b3JJdGVtW10pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMsIHNlbGVjdG9ySXRlbVRvU3RyaW5nKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHBhcmFtZXRlcml6ZWQgcHNldWRvIGVudGl0eS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwc2V1ZG9FbnRpdHlUb1N0cmluZyggZW50aXR5TmFtZTogc3RyaW5nLCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFlbnRpdHlOYW1lKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdGlmIChlbnRpdHlOYW1lLnN0YXJ0c1dpdGgoIFwiOm50aFwiKSlcclxuXHRcdHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHsgZnJvbUFycmF5OiBudGhUdXBsZVRvU3RyaW5nIH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiB2YWx1ZVRvU3RyaW5nKHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgU3R5bGVUeXBlcyBmcm9tIFwiLi9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0fSBmcm9tIFwiLi9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtFeHRlbmRlZCwgQ3NzUmFkaXVzLCBPbmVPck1hbnksIENzc011bHRpTGVuZ3RoLCBDc3NNdWx0aVRpbWV9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FtZWxUb0Rhc2gsIHZhbHVlVG9TdHJpbmcsIGFycmF5VG9TdHJpbmcsIG9iamVjdFRvU3RyaW5nLCBJVmFsdWVDb252ZXJ0T3B0aW9ucyxcclxuICAgIHBvc2l0aW9uVG9TdHJpbmcsIG11bHRpUG9zaXRpb25Ub1N0cmluZywgQ3NzTGVuZ3RoTWF0aCwgQ3NzVGltZU1hdGgsIENzc051bWJlck1hdGgsXHJcbiAgICBDc3NBbmdsZU1hdGgsIENzc0ZyZXF1ZW5jeU1hdGgsIENzc1BlcmNlbnRNYXRoLCBDc3NSZXNvbHV0aW9uTWF0aCwgdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZ1xyXG59IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7Y29sb3JUb1N0cmluZ30gZnJvbSBcIi4vQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+KTogc3RyaW5nXHJcbnsgcmV0dXJuIENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIFwiIFwiKTsgfVxyXG5cclxuZnVuY3Rpb24gbXVsdGlUaW1lVG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPik6IHN0cmluZ1xyXG57IHJldHVybiBDc3NUaW1lTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgXCIsXCIpOyB9XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgY29udmVydGluZyBDU1MgcHJvcGVydHkgdHlwZXMgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkFuaW1hdGlvbl9TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY291bnRcIiwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiLFxyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICBcIm5hbWVcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkFuaW1hdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxPbmVPck1hbnk8U3R5bGVUeXBlcy5UaW1pbmdGdW5jdGlvbl9TaW5nbGU+Pik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlciggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBzdGVwcygke3ZhbH0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXkoIHZhbDogYW55W10pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCJcclxuICAgICAgICA/IHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsIGFzIFN0eWxlVHlwZXMuVGltaW5nRnVuY3Rpb25fU2luZ2xlKVxyXG4gICAgICAgIDogYXJyYXlUb1N0cmluZyggdmFsLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUsIFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UaW1pbmdGdW5jdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoIDwgMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBzdGVwcyBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCB2WzBdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgc3RlcHMoJHt2WzBdfSR7di5sZW5ndGggPT09IDIgPyBcIixcIiArIHZbMV0gOiBcIlwifSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPCAwIHx8IHZbMF0gPiAxIHx8IHZbMl0gPCAwIHx8IHZbMl0gPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4gWW91IGhhdmUgJHt2WzBdfSBhbmQgJHt2WzJdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dlswXX0sJHt2WzFdfSwke3ZbMl19LCR7dlszXX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkJhY2tncm91bmRfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgXCJpbWFnZVwiLFxyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIHBvc2l0aW9uVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInNpemVcIiwgbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSwgXCIvXCJdLFxyXG4gICAgICAgIFwicmVwZWF0XCIsXHJcbiAgICAgICAgXCJhdHRhY2htZW50XCIsXHJcbiAgICAgICAgXCJvcmlnaW5cIixcclxuICAgICAgICBcImNsaXBcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5CYWNrZ3JvdW5kX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5CYWNrZ3JvdW5kU2l6ZV9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGltYWdlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VUb1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkJvcmRlckltYWdlX09iamVjdCk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB3aWR0aCBpcyBzcGVjaWZpZWQsIGJ1dCBzbGljZSBpcyBuZXQgd2UgbmVlZCB0byBzZXQgc2xpY2UgdG8gdGhlIGRlZmF1bHQgMTAwJSB2YWx1ZTtcclxuICAgIC8vIGlmIG91dHNldCBpcyBzcGVjaWZpZWQgYnV0IHdpZHRoIGlzIG5vdC4gd2UgbmVlZCB0byBzZXQgd2lkdGggdG8gdGhlIGRlZmF1bHQgMSB2YWx1ZTtcclxuICAgIGxldCB2YWxDb3B5OiBTdHlsZVR5cGVzLkJvcmRlckltYWdlX09iamVjdCA9IE9iamVjdC5hc3NpZ24oIHt9LCB2YWwpO1xyXG4gICAgaWYgKHZhbC5zbGljZSA9PSBudWxsICYmICh2YWwud2lkdGggIT0gbnVsbCB8fCB2YWwub3V0c2V0ICE9IG51bGwpKVxyXG4gICAgICAgIHZhbENvcHkuc2xpY2UgPSBcIjEwMCVcIjtcclxuICAgIGlmICh2YWwud2lkdGggPT0gbnVsbCAmJiB2YWwub3V0c2V0ICE9IG51bGwpXHJcbiAgICAgICAgdmFsQ29weS53aWR0aCA9IDE7XHJcblxyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWxDb3B5LCBbXHJcbiAgICAgICAgXCJzb3VyY2VcIixcclxuICAgICAgICBbXCJzbGljZVwiLCBib3JkZXJJbWFnZVNsaWNlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcIndpZHRoXCIsIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZywgXCIvXCJdLFxyXG4gICAgICAgIFtcIm91dHNldFwiLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGltYWdlIHNsaWNlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuQm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IHYgPT4gdmFsdWVUb1N0cmluZyggdiwge1xyXG4gICAgICAgICAgICBmcm9tQm9vbDogKCkgPT4gXCJmaWxsXCIsXHJcbiAgICAgICAgICAgIGZyb21OdW1iZXI6IHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcsXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggdmFsOiBTdHlsZVR5cGVzLkJveFNoYWRvd19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJpbnNldFwiLCB2ID0+IHYgPyBcImluc2V0XCIgOiBcIlwiXSxcclxuICAgICAgICBbXCJ4XCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wieVwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImJsdXJcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJzcHJlYWRcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvcm5lciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVDb3JuZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSYWRpdXM+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCB2WzBdKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdHdvIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBhcnJheVRvU3RyaW5nKCB2WzBdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHMgKz0gXCIgLyBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgYXJyYXlUb1N0cmluZyggdlsxXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaW5nbGUgTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVRvU3RyaW5nKCB2LCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkJvcmRlcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnVmOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodlswXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlswXSkpXHJcblxyXG4gICAgICAgICAgICBpZiAodlsxXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHZhbHVlVG9TdHJpbmcodlsxXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZbMl0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb2xvclRvU3RyaW5nKHZbMl0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWYuam9pbihcIiBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1ucyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbHVtbnNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkNvbHVtbnNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHZbMF0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsxXSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjdXJzb3Igc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjdXJzb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkN1cnNvcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIC8vIHRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkuIElmIGl0IGlzIGFuIGFycmF5LFxyXG4gICAgLy8gaWYgdGhlIGZpcnN0IGVsZW1lbnQgaXMgYSBmdW5jdGlvbiwgdGhlbiB3ZSBuZWVkIHRvIHVzZSBzcGFjZSBhcyBhIHNlcGFyYXRvciAoYmVjYXVzZVxyXG4gICAgLy8gdGhpcyBpcyBhIFVSTCB3aXRoIG9wdGlvbmFsIG51bWJlcnMgZm9yIHRoZSBob3Qgc3BvdCk7IG90aGVyd2lzZSwgd2UgdXNlIGNvbW1hIGFzIGFcclxuICAgIC8vIHNlcGFyYXRvciAtIGJlY2F1c2UgdGhlc2UgYXJlIG11bHRpcGxlIGN1cnNvciBkZWZpbml0aW9ucy5cclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodi5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb1N0cmluZyh2KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZbMV0gPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdiwgeyBhcnJheVNlcGFyYXRvcjogXCIgXCJ9KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlJdGVtRnVuYzogY3Vyc29yVG9TdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGZsZXggc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBmbGV4VG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5GbGV4X1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuam9pbiggXCIgXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdlswXSArIFwiIFwiICsgdlsxXSArIFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udF9mcm9tT2JqZWN0KCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcInN0eWxlXCIsIGZvbnRTdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcInZhcmlhbnRcIixcclxuICAgICAgICBcIndlaWdodFwiLFxyXG4gICAgICAgIFwic3RyZXRjaFwiLFxyXG4gICAgICAgIFtcInNpemVcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJsaW5lSGVpZ2h0XCIsIHYgPT4gdi50b1N0cmluZygpICwgXCIvXCJdLFxyXG4gICAgICAgIFwiZmFtaWx5XCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuRm9udF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IFwib2JsaXF1ZSBcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCB2KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGV4dERlY29yYXRpb25fZnJvbU9iamVjdCggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlRleHREZWNvcmF0aW9uX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBcImxpbmVcIixcclxuICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgW1widGhpY2tuZXNzXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UcmFuc2l0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJwcm9wZXJ0eVwiLCBjYW1lbFRvRGFzaF0sXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLlRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY3Rpb25zIGZvciBoYW5kbGluZyBTdHlsZXNldHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LiBBbGwgcmVndWxhciBwcm9wZXJ0aWVzIGFyZVxyXG4gKiByZXBsYWNlZC4gVGhlIFwiLS1cIiBwcm9wZXJ0eSBnZXRzIHNwZWNpYWwgdHJlYXRtZW50IGJlY2F1c2UgaXQgaXMgYW4gYXJyYXkuXHJcbiAqIEBwYXJhbSB0YXJnZXQgXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEByZXR1cm5zIFJlZmVyZW5jZSB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0IGlmIG5vdCBudWxsIG9yIGEgbmV3IHN0eWxlc2V0IG90aGVyd2lzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc2V0cyggdGFyZ2V0OiBTdHlsZVR5cGVzLlN0eWxlc2V0IHwgdW5kZWZpbmVkIHwgbnVsbCxcclxuICAgIHNvdXJjZTogU3R5bGVUeXBlcy5TdHlsZXNldCk6IFN0eWxlVHlwZXMuU3R5bGVzZXRcclxue1xyXG4gICAgaWYgKCFzb3VyY2UpXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldCA/IHRhcmdldCA6IHt9O1xyXG5cclxuICAgIC8vIGlmIHRhcmdldCBpcyBub3QgZGVmaW5lZCwgY3JlYXRlIGl0IGFzIGFuIGVtcHR5IG9iamVjdC4gVGhpcyBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBhZnRlclxyXG4gICAgLy8gcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2UgYXJlIGNvcGllZCB0byBpdC5cclxuICAgIGlmICghdGFyZ2V0KVxyXG4gICAge1xyXG4gICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYXJlIGRlZmluZWQuIElmIG5vdCwgd2UgY2FuIGp1c3QgdXNlIHRoZSBPYmplY3QuYXNzaWduIGZ1bmN0aW9uLlxyXG4gICAgbGV0IHNvdXJjZUN1c3RvbVByb3BzID0gc291cmNlW1wiLS1cIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oIHRhcmdldCwgc291cmNlKTtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBhbmQgaW1wb3J0YW50IHByb3BlcnRpZXNcclxuICAgIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGFyZ2V0LCBzb3VyY2UpO1xyXG5cclxuICAgIC8vIGNvcHkgYWxsIG90aGVyIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlXHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc291cmNlKVxyXG5cdHtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiIVwiIHx8IHByb3BOYW1lID09PSBcIi0tXCIpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGFyZ2V0W3Byb3BOYW1lXSA9IHNvdXJjZVtwcm9wTmFtZV07XHJcblx0fVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyBcIi0tXCIgcHJvcGVydHkgZnJvbSB0aGUgc291cmNlIHN0eWxlc2V0IHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0YXJnZXQ6IFN0eWxlVHlwZXMuU3R5bGVzZXQsXHJcbiAgICBzb3VyY2U6IFN0eWxlVHlwZXMuU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkXHJcbiAgICBsZXQgc291cmNlQ3VzdG9tUHJvcHMgPSBzb3VyY2VbXCItLVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldEN1c3RvbVByb3BzID0gdGFyZ2V0W1wiLS1cIl07XHJcbiAgICAgICAgdGFyZ2V0W1wiLS1cIl0gPSAhdGFyZ2V0Q3VzdG9tUHJvcHMgPyBzb3VyY2VDdXN0b21Qcm9wcy5zbGljZSgpIDogdGFyZ2V0Q3VzdG9tUHJvcHMuY29uY2F0KCBzb3VyY2VDdXN0b21Qcm9wcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZXNldCB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNldFRvU3RyaW5nKCBzdHlsZXNldDogU3R5bGVUeXBlcy5TdHlsZXNldCk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXN0eWxlc2V0KVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGxldCBidWY6IHN0cmluZ1tdID0gW107XHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVzZXQpXHJcblx0e1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBvZiB0aGUgXCItLVwiIHByb3BlcnR5LCB3aGljaCBpcyBhbiBhcnJheSB3aGVyZSBlYWNoIGl0ZW0gaXNcclxuICAgICAgICAgICAgLy8gYSB0d28taXRlbSBvciB0aHJlZS1pdGVtIGFycmF5XHJcbiAgICAgICAgICAgIGxldCBwcm9wVmFsID0gc3R5bGVzZXRbcHJvcE5hbWVdIGFzIFN0eWxlVHlwZXMuQ3VzdG9tVmFyU3R5bGVUeXBlW107XHJcbiAgICAgICAgICAgIGZvciggbGV0IGN1c3RvbVZhbCBvZiBwcm9wVmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN1c3RvbVZhbClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggY3VzdG9tUHJvcFRvU3RyaW5nKCBjdXN0b21WYWwsIGZhbHNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUsIHN0eWxlc2V0W3Byb3BOYW1lXSkpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG4gICAgLy8gam9pbiBhbGwgZWxlbWVudHMgaW4gdGhlIGFycmF5IGV4Y2VwdCBudWxscywgdW5kZWZpbmVkIGFuZCBlbXB0eSBzdHJpbmdzXHJcbiAgICByZXR1cm4gYnVmLmZpbHRlciggaXRlbSA9PiBpdGVtICE9IG51bGwpLmpvaW4oXCI7XCIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSBkZWZpbml0aW9uIHRvIHN0cmluZy5cclxuICogQHBhcmFtIHByb3BWYWwgXHJcbiAqIEBwYXJhbSB2YWx1ZU9ubHkgXHJcbiAqL1xyXG5mdW5jdGlvbiBjdXN0b21Qcm9wVG9TdHJpbmcoIHByb3BWYWw6IFN0eWxlVHlwZXMuQ3VzdG9tVmFyU3R5bGVUeXBlLCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcFZhbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgdmFyTmFtZTogc3RyaW5nO1xyXG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBsZXQgdmFsdWU6IGFueTtcclxuICAgIGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuICAgIHtcclxuICAgICAgICB2YXJOYW1lID0gKHByb3BWYWxbMF0gYXMgVmFyUnVsZSkuY3NzTmFtZTtcclxuICAgICAgICB0ZW1wbGF0ZSA9IHByb3BWYWxbMF0udGVtcGxhdGU7XHJcbiAgICAgICAgdmFsdWUgPSBwcm9wVmFsWzFdXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdmFyTmFtZSA9IHByb3BWYWxbMF07XHJcbiAgICAgICAgaWYgKCF2YXJOYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICBlbHNlIGlmICghdmFyTmFtZS5zdGFydHNXaXRoKFwiLS1cIikpXHJcbiAgICAgICAgICAgIHZhck5hbWUgPSBcIi0tXCIgKyB2YXJOYW1lO1xyXG5cclxuICAgICAgICB0ZW1wbGF0ZSA9IHByb3BWYWxbMV07XHJcbiAgICAgICAgaWYgKCF2YXJOYW1lIHx8ICF0ZW1wbGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgICAgIHZhbHVlID0gcHJvcFZhbFsyXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdmFyVmFsdWUgPSBzdHlsZVByb3BUb1N0cmluZyggdGVtcGxhdGUsIHZhbHVlLCB0cnVlKTtcclxuICAgIHJldHVybiB2YWx1ZU9ubHkgPyB2YXJWYWx1ZSA6IGAke3Zhck5hbWV9OiR7dmFyVmFsdWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3R5bGUgc3RyaW5nXHJcbiAqIEBwYXJhbSBzdHlsZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcE5hbWUpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgZm9yIHRoZSBwcm9wZXJ0eVxyXG4gICAgbGV0IGluZm86IGFueSA9IFN0eWxlUHJvcGVydHlJbmZvc1twcm9wTmFtZV07XHJcblxyXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBcIiFcIiBwcm9wZXJ0eSwgdGhlbiB0aGUgYWN0dWFsIHZhbHVlIGlzIHRoZVxyXG4gICAgLy8gdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBhbmQgd2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZ1xyXG4gICAgbGV0IHZhclZhbHVlID0gcHJvcFZhbDtcclxuICAgIGxldCBpbXBGbGFnID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwib2JqZWN0XCIgJiYgXCIhXCIgaW4gcHJvcFZhbClcclxuICAgIHtcclxuICAgICAgICB2YXJWYWx1ZSA9IHByb3BWYWxbXCIhXCJdO1xyXG4gICAgICAgIGltcEZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgbGV0IHN0cmluZ1ZhbHVlID0gIWluZm9cclxuICAgICAgICA/IHZhbHVlVG9TdHJpbmcoIHZhclZhbHVlKVxyXG4gICAgICAgIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgPyB2YWx1ZVRvU3RyaW5nKCB2YXJWYWx1ZSwgaW5mbyBhcyBJVmFsdWVDb252ZXJ0T3B0aW9ucylcclxuICAgICAgICAgICAgOiAoaW5mbyBhcyBQcm9wVG9TdHJpbmdGdW5jKSggdmFyVmFsdWUpO1xyXG5cclxuICAgIGlmICghc3RyaW5nVmFsdWUgJiYgIXZhbHVlT25seSlcclxuICAgICAgICBzdHJpbmdWYWx1ZSA9IFwiaW5pdGlhbFwiO1xyXG5cclxuICAgIGlmIChpbXBGbGFnKVxyXG4gICAgICAgIHN0cmluZ1ZhbHVlICs9IFwiICFpbXBvcnRhbnRcIjtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gc3RyaW5nVmFsdWUgOiBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfToke3N0cmluZ1ZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZ2lzdHJ5IG9mIENTUyBwcm9wZXJ0aWVzIHRoYXQgc3BlY2lmaWVzIGhvdyB0aGVpciB2YWx1ZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIC8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgcHJvcGVydHkgdmFsdWUgYW5kIGNvbnZlcnRzIGl0IHRvIHN0cmluZyAqL1xyXG4vLyB0eXBlIFByb3BUb1N0cmluZ0Z1bmM8SyBleHRlbmRzIFN0eWxlVHlwZXMuVmFyVGVtcGxhdGVOYW1lID0gYW55PiA9ICh2YWw6IFN0eWxlVHlwZXMuVmFyVmFsdWVUeXBlPEs+KSA9PiBzdHJpbmc7XHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHByb3BlcnR5IHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxudHlwZSBQcm9wVG9TdHJpbmdGdW5jID0gKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vIEhlbHBlciBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIGluZGljYXRlIHRoYXQgdmFsdWVzIGluIGFuIGFycmF5IHNob3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEuXHJcbi8vIFdlIHVzZSBpdCBtYW55IHRpbWVzIGluIHRoZSBzdHVjdHVyZSBiZWxvdy5cclxubGV0IGNvbW1hQXJyYXlTZXBhcmF0b3IgPSB7IGFycmF5U2VwYXJhdG9yOiBcIixcIiB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHRoZSBTdHlsZVByb3BlcnR5SW5mbyBvYmplY3RzIGRlc2NyaWJpbmcgY3VzdG9tIGFjdGlvbnMgbmVjZXNzYXJ5IHRvXHJcbiAqIGNvbnZlcnQgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBDU1MtY29tcGxpYW50IHN0cmluZy5cclxuICovXHJcbmNvbnN0IFN0eWxlUHJvcGVydHlJbmZvczogeyBbSyBpbiBTdHlsZVR5cGVzLlZhclRlbXBsYXRlTmFtZV0/OiAoUHJvcFRvU3RyaW5nRnVuYyB8IElWYWx1ZUNvbnZlcnRPcHRpb25zKSB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uRGVsYXk6IG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25GaWxsTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvbk5hbWU6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRDbGlwOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZE9yaWdpbjogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogdiA9PiBtdWx0aVBvc2l0aW9uVG9TdHJpbmcoIHYsIFwiLFwiKSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9LFxyXG4gICAgYmFzZWxpbmVTaGlmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrRW5kOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrU3RhcnRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrU3RhcnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21XaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQ29sb3I6IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBib3JkZXJJbWFnZToge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IGJvcmRlckltYWdlVG9TdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW1hZ2VTbGljZTogYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW1hZ2VXaWR0aDogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvcmRlcklubGluZUVuZDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVFbmRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZUVuZFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyTGVmdDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0V2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyU3BhY2luZzogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvcmRlclRvcDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcldpZHRoOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgYm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3hTaGFkb3c6IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmV0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBjbGlwOiAge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgcmVjdCgke211bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2Uodil9YFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgY29sdW1uR2FwOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBjb2x1bW5SdWxlOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVTdHlsZTogdmFsdWVUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVXaWR0aDogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGNvbHVtbnM6IGNvbHVtbnNUb1N0cmluZyxcclxuICAgIGNvbHVtbldpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBjdXJzb3I6IGN1cnNvclRvU3RyaW5nLFxyXG5cclxuICAgIGZpbGw6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBmaWxsT3BhY2l0eTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGZsZXg6IGZsZXhUb1N0cmluZyxcclxuICAgIGZsZXhCYXNpczogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZmxvb2RDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGZvbnQ6IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBmb250X2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICBmb250U2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZm9udFN0eWxlOiBmb250U3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBnYXA6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBncmlkQ29sdW1uR2FwOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBncmlkR2FwOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgZ3JpZFJvd0dhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGhlaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGlubGluZVNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBsZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBsaWdodGluZ0NvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG5cclxuICAgIG1hcmdpbjogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIG1hcmdpbkJsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5Cb3R0b206IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbklubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbkxlZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpblJpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5Ub3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heEJsb2NrU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhJbmxpbmVTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4Wm9vbTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1pbkJsb2NrU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWluSGVpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtaW5JbmxpbmVTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblx0bWluV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1pblpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgb2JqZWN0UG9zaXRpb246IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICBvdXRsaW5lOiBib3JkZXJUb1N0cmluZyxcclxuICAgIG91dGxpbmVDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIG91dGxpbmVPZmZzZXQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG91dGxpbmVTdHlsZTogdmFsdWVUb1N0cmluZyxcclxuXHJcbiAgICBwYWRkaW5nOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgcGFkZGluZ0Jsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0lubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nVG9wOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwZXJzcGVjdGl2ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgcXVvdGVzOiB7XHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogdiA9PiBgXCIke3Z9XCJgXHJcbiAgICB9LFxyXG5cclxuICAgIHJpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICByb3dHYXA6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBzY3JvbGxNYXJnaW46IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jazogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5Cb3R0b206IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZTogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpbkxlZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpblJpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5Ub3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmc6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ1JpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nVG9wOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzaGFwZU1hcmdpbjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc3RvcENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG5cclxuICAgIHRhYlNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRleHRDb21iaW5lVXByaWdodDoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gYGRpZ2l0cyAke3Z9YFxyXG4gICAgfSxcclxuICAgIHRleHREZWNvcmF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqZWN0OiB0ZXh0RGVjb3JhdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb25Db2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB0ZXh0RW1waGFzaXM6IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICB0ZXh0SW5kZW50OiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRleHRTaGFkb3c6IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dFNpemVBZGp1c3Q6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB0b3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlVHJhbnNpdGlvbl9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25EZWxheToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcsXHJcbiAgICB0cmFuc2xhdGU6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgdmVydGljYWxBbGlnbjoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICB3aWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgd2lsbENoYW5nZToge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IGNhbWVsVG9EYXNoXHJcbiAgICB9LFxyXG4gICAgd29yZFNwYWNpbmc6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICB6b29tOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIC8vIHNwZWNpYWwgcHJvcGVydGllcyBmb3IgSVZhclJ1bGUgdHlwZXNcclxuICAgIFwiQ3NzTGVuZ3RoXCI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzQW5nbGVcIjogQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1RpbWVcIjogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUmVzb2x1dGlvblwiOiBDc3NSZXNvbHV0aW9uTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NGcmVxdWVuY3lcIjogQ3NzRnJlcXVlbmN5TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NQZXJjZW50XCI6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1Bvc2l0aW9uXCI6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICBcIkNzc0NvbG9yXCI6IGNvbG9yVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc3VwcG9ydHMgcXVlcnkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTdHlsZVR5cGVzLlN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiBvciBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU3R5bGVUeXBlcy5TaW5nbGVTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG5cclxuICAgIGxldCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyggcXVlcnkpLmZpbHRlciggKHByb3BOYW1lKSA9PiBwcm9wTmFtZSAhPSBcIiRuZWdhdGVcIik7XHJcbiAgICBpZiAocHJvcE5hbWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbm90ID0gcXVlcnkuJG5lZ2F0ZSA/IFwibm90XCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuICBgJHtub3R9ICgke3Byb3BOYW1lcy5tYXAoIChwcm9wTmFtZSkgPT5cclxuICAgICAgICBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUgYXMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldCwgcXVlcnlbcHJvcE5hbWVdKSkuam9pbiggXCIpIGFuZCAoXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBFeHRlbmRlZCwgTnVtYmVyUHJveHksIENzc051bWJlciwgQ3NzTXVsdGlOdW1iZXIsIElOdW1iZXJNYXRoLFxyXG4gICAgQ3NzUG9zaXRpb24sIE11bHRpQ3NzUG9zaXRpb24sIE51bWJlckJhc2UsIE11bHRpTnVtYmVyQmFzZSxcclxuICAgIENzc0xlbmd0aCwgQ3NzTXVsdGlMZW5ndGgsIENzc0FuZ2xlLCBDc3NNdWx0aUFuZ2xlLCBDc3NUaW1lLCBDc3NNdWx0aVRpbWUsXHJcbiAgICBDc3NSZXNvbHV0aW9uLCBDc3NNdWx0aVJlc29sdXRpb24sIENzc0ZyZXF1ZW5jeSwgQ3NzTXVsdGlGcmVxdWVuY3ksXHJcbiAgICBDc3NQZXJjZW50LCBDc3NNdWx0aVBlcmNlbnQsIElDc3NMZW5ndGhNYXRoLFxyXG4gICAgSUNzc0FuZ2xlTWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLCBJQ3NzVGltZU1hdGgsXHJcbiAgICBOdW1iZXJUeXBlLCBMZW5ndGhUeXBlLCBQZXJjZW50VHlwZSwgQW5nbGVUeXBlLCBUaW1lVHlwZSwgUmVzb2x1dGlvblR5cGUsIEZyZXF1ZW5jeVR5cGVcclxufSBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBkYXNoZS1jYXNlIHRvIGNhbWVsQ2FzZSwgZS5nLiBmb250LXNpemUgdG8gZm9udFNpemUuXHJcbiAqIEBwYXJhbSBkYXNoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFkYXNoKVxyXG5cdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdHJldHVybiBkYXNoLnJlcGxhY2UoIC8tKFthLXpBLVpdKS9nLCAoeCwgJDEpID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjYW1lbENhc2UgdG8gZGFzaC1jYXNlLCBlLmcuIGZvbnRTaXplIHRvIGZvbnQtc2l6ZS5cclxuICogQHBhcmFtIGNhbWVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2goIGNhbWVsOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gIHJldHVybiBjYW1lbC5yZXBsYWNlKCAvKFthLXpBLVpdKSg/PVtBLVpdKS9nLCAnJDEtJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYWx1ZUNvbnZlcnRPcHRpb25zIGludGVyZmFjZSBkZWZpbmVzIG9wdGlvbmFsIGZ1bmN0aW9ucyB0aGF0IGNvbnZlcnR2YWx1ZXMgb2YgZGlmZmVybnRcclxuICogdHlwZXMgdG8gc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlQ29udmVydE9wdGlvbnNcclxue1xyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICBmcm9tTnVsbD86ICggdmFsOiBudWxsIHwgdW5kZWZpbmVkKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgc3RyaW5nLiBUaGlzIGFsbG93cyB0cmFuc2Zvcm1pbmcgb25lIHN0cmluZyB0byBhbm90aGVyLlxyXG4gICAgZnJvbVN0cmluZz86ICggdmFsOiBzdHJpbmcpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBib29sZWFuXHJcbiAgICBmcm9tQm9vbD86ICh2YWw6IGJvb2xlYW4pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBudW1iZXJcclxuICAgIGZyb21OdW1iZXI/OiAodmFsOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gYXJyYXlcclxuICAgIGZyb21BcnJheT86ICh2YWw6IGFueVtdKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGFuIG9iamVjdFxyXG4gICAgZnJvbU9iamVjdD86ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB0eXBlLXNwZWNpZmljIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkXHJcbiAgICBmcm9tQW55PzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIHRvIGNvbnZlcnQgYXJyYXkgaXRlbXMgaWYgZnJvbUFycmF5IGlzIG5vdCBkZWZpbmVkXHJcbiAgICBhcnJheUl0ZW1GdW5jPzogKHY6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIFNlcGFyYXRvciBmb3IgYXJyYXkgaXRlbXMgLSB1c2VkIG9ubHkgaWYgZnJvbUFycmF5IGlzIG5vdCBkZWZpbmVkXHJcbiAgICBhcnJheVNlcGFyYXRvcj86IHN0cmluZztcclxuXHJcbiAgICAvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCB0aGVzZSBhcmUgYXJndW1lbnRzIHRvIHBhc3Mgd2hlbiBpbnZva2luZyBpdFxyXG4gICAgZnVuY0FyZ3M/OiBhbnlbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSB2YWx1ZSBvZiBhbiBhcmJpdHJhcnkgdHlwZSB0byBhIHNpbmdsZSBzdHJpbmcuIFRoZSBvcHRpb25hbCBvcHRpb25zIHBhcmFtZXRlclxyXG4gKiBjYW4gZGVmaW5lIGhvdyBzcGVjaWZpYyB0eXBlcyBhcmUgY29udmVydGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlVG9TdHJpbmcoIHZhbDogYW55LCBvcHRpb25zPzogSVZhbHVlQ29udmVydE9wdGlvbnMpOiBzdHJpbmdcclxue1xyXG4gICBpZiAoIW9wdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc3RhbmRhcmQgcHJvY2Vzc2luZzpcclxuICAgICAgICAvLyAtIG51bGwvdW5kZWZpbmVkIGJlY29tZSBlbXB0eSBzdHJpbmcuXHJcbiAgICAgICAgLy8gLSBjYWxsIHZhbHVlVG9TdHJpbmcgKHByb3h5IG9iamVjdHMpIGlmIGV4aXN0LlxyXG4gICAgICAgIC8vIC0gZnVuY3Rpb246IGNhbGwgd2l0aG91dCBwYXJhbWV0ZXJzLlxyXG4gICAgICAgIC8vIC0gZXZlcnl0aGluZyBlbHNlOiBjYWxsIHRvU3RyaW5nKCkuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5VG9TdHJpbmcoIHZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbC52YWx1ZVRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIHByb2Nlc3Npbmcgd2l0aCBvcHRpb25zLiBGb3IgYWxsIHR5cGVzIGV4Y2VwdCBudWxsIGFuZCBzdHJpbmcsIGlmIHRoZSB0eXBlLXNwZWNpZmljXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIGNhbGwgZnJvbUFueSBpZiBkZWZpbmVkLlxyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bGwgPyBvcHRpb25zLmZyb21OdWxsKCB2YWwpIDogXCJcIjtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tU3RyaW5nID8gb3B0aW9ucy5mcm9tU3RyaW5nKCB2YWwpIDogdmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21OdW1iZXIgPyBvcHRpb25zLmZyb21OdW1iZXIoIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCBvcHRpb25zLmZ1bmNBcmdzID8gdmFsKCAuLi5vcHRpb25zLmZ1bmNBcmdzKSA6IHZhbCgpKTtcclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mcm9tQXJyYXkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQXJyYXkoIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9IG9wdGlvbnMuYXJyYXlTZXBhcmF0b3IgIT0gbnVsbCA/IG9wdGlvbnMuYXJyYXlTZXBhcmF0b3IgOiBcIiBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVRvU3RyaW5nKCB2YWwsIG9wdGlvbnMuYXJyYXlJdGVtRnVuYyB8fCBvcHRpb25zLmZyb21BbnkgfHwgdW5kZWZpbmVkLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbC52YWx1ZVRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnZhbHVlVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU9iamVjdCggdmFsKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tQW55KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUJvb2wgPyBvcHRpb25zLmZyb21Cb29sKCB2YWwpIDogb3B0aW9ucy5mcm9tQW55ID8gb3B0aW9ucy5mcm9tQW55KCB2YWwpIDogdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tQW55KVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBvZiB0aGUgZ2l2ZW4gdHlwZXRvIGEgc2luZ2xlIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gc2VwYXJhdG9yLlxyXG4gKiBFbGVtZW50cyBvZiB0aGUgYXJyYXkgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzIHVzaW5nIHRoZSBnaXZlbiBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvU3RyaW5nKCB2YWw6IGFueVtdLCBmdW5jPzogKHYpID0+IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gIXZhbCB8fCB2YWwubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgOiB2YWwuZmlsdGVyKCB4ID0+IHggIT0gbnVsbCkubWFwKCB5ID0+IGZ1bmMgPyBmdW5jKHkpIDogdmFsdWVUb1N0cmluZyggeSkpLmpvaW4oIHNlcGFyYXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE9iamVjdCB0byBjb252ZXJ0IHRvIHN0cmluZy5cclxuICogQHBhcmFtIHVzZVByb3BOYW1lcyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbmFtZXMgb2YgdGhlIG9iamVjdCdzIHByb3BydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy5cclxuICogQHBhcmFtIHByb3BzQW5kRnVuY3MgQXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIG9wdGlvbmFsbHkgZnVuY3Rpb25zLiBUaGUgb3JkZXIgb2YgdGhlIG5hbWVzIGRldGVybWluZXMgaW5cclxuICogICAgIHdoaWNoIG9yZGVyIHRoZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc3RyaW5nLiBJZiBhIGZ1bmN0aW9uIGlzIHByZXNlbnQgZm9yIHRoZSBwcm9wZXJ0eSxcclxuICogICAgIGl0IHdpbGwgYmUgdXNlZCB0byBjb252ZXJ0IHRoZSBwcm9wZXJ0eSdzIHZhbHVlIHRvIHRoZSBzdHJpbmcuIElmIGEgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQsIHRoZW4gdGhlXHJcbiAqICAgICBwcm9wZXJ0eSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkIHRvIHRoZSBzdHJpbmcgdXNpbmcgdGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcoIHZhbDogYW55LCBwcm9wc0FuZEZ1bmNzOiAoc3RyaW5nIHwgW3N0cmluZywgKHZhbDogYW55KSA9PiBzdHJpbmcsIHN0cmluZz9dKVtdLFxyXG4gICAgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIiwgdXNlUHJvcE5hbWVzOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHZhbCA9PSBudWxsIHx8IHByb3BzQW5kRnVuY3MubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGxldCBidWY6IChzdHJpbmcpW10gPSBbXTtcclxuICAgIHByb3BzQW5kRnVuY3MuZm9yRWFjaCggcHJvcEFuZEZ1bmMgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IHR5cGVvZiBwcm9wQW5kRnVuYyA9PT0gXCJzdHJpbmdcIiA/IHByb3BBbmRGdW5jIDogcHJvcEFuZEZ1bmNbMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbCA9IHZhbFtwcm9wTmFtZV07XHJcbiAgICAgICAgICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlUHJvcE5hbWVzKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHByb3BOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcmVmaXggPSB0eXBlb2YgcHJvcEFuZEZ1bmMgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBwcm9wQW5kRnVuY1syXTtcclxuICAgICAgICAgICAgaWYgKHByZWZpeClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZ1bmMgPSB0eXBlb2YgcHJvcEFuZEZ1bmMgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBwcm9wQW5kRnVuY1sxXTtcclxuICAgICAgICAgICAgaWYgKGZ1bmMpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggZnVuYyggcHJvcFZhbCkpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wVmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggdmFsdWVUb1N0cmluZyggcHJvcFZhbCkpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG5cdHJldHVybiBidWYuam9pbihzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgdGVtcGxhdGVTdHJpbmdUb1N0cmluZyBpcyBhIHRhZyBmdW5jdGlvbiBoZWxwZXIgdGhhdCBjb252ZXJ0cyB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhcclxuICogcGFyYW1ldGVycyB0byBhIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gY29udmVydCBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcGFyYW1zOiBhbnlbXSxcclxuICAgIGNvbnZlcnRGdW5jOiAoIHY6IGFueSkgPT4gc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIC8vIG51bWJlciBvZiBwYXJhbWV0ZXJzIGlzIGFsd2F5cyAxIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIHN0cmluZyBwYXJ0c1xyXG4gICAgbGV0IHBhcmFtc0xlbiA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBpZiAocGFyYW1zTGVuID09PSAwKVxyXG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcclxuXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHBhcmFtc0xlbjsgaSsrKVxyXG4gICAgICAgIHMgKz0gcGFydHNbaV0gKyBjb252ZXJ0RnVuYyggcGFyYW1zW2ldKTtcclxuXHJcbiAgICAvLyBhZGQgdGhlIGxhc3QgcGFydFxyXG4gICAgcmV0dXJuIHMgKyBwYXJ0c1twYXJhbXNMZW5dO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBvZiBmdW5jdGlvbnMgdGhhdCBjb252ZXJ0IGEgbnVtYmVyIHRvIGEgc3RyaW5nICovXHJcbnR5cGUgQ29udmVydE51bWJlckZ1bmNUeXBlID0gKG46IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSB0byBhIENTUyBzdHJpbmcgb3B0aW9uYWxseSBhcHBlbmRpbmcgdW5pdHMgdGhhdCBjYW4gYmUgZGlmZmVyZW50XHJcbiAqIGZvciBpbnRlZ2VyIGFuZCBmbG9hdGluZyBwb2ludCBudW1iZXJzLlxyXG4gKiBAcGFyYW0gbiBOdW1iZXIgdG8gY29udmVydCB0byBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAqIEBwYXJhbSBpbnRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGludGVnZXIuXHJcbiAqIEBwYXJhbSBmbG9hdFVuaXQgVW5pdHMgdG8gYXBwZW5kIGlmIHRoZSBudW1iZXIgaXMgZmxvYXRpbmcgcG9pbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBudW1iZXJUb1N0cmluZyggbjogbnVtYmVyLCBpbnRVbml0OiBzdHJpbmcgPSBcIlwiLCBmbG9hdFVpbnQ6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIobikgPyAgbiArIGludFVuaXQgOiBuICsgZmxvYXRVaW50O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGltZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBOdW1iZXIgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7IGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgQ3NzTnVtYmVyIG9yIGFycmF5IG9mIENzc051bWJlciBvYmplY3RzIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpbmdsZS0gb3IgbXVsdGktbnVtYmVyIHN0eWxlIHZhbHVlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICogQHBhcmFtIHNlcGFyYXRvciBTdHJpbmcgdG8gdXNlIHRvIHNlcGFyYXRlIG11bHRpcGxlIHZhbHVlcy5cclxuICovXHJcbmZ1bmN0aW9uIG11bHRpU3R5bGVUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LFxyXG4gICAgICAgICAgICAgICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IHYgPT4gc3R5bGVUb1N0cmluZyggdiwgY29udmVydEZ1bmMpLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBzZXBhcmF0b3JcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWF0aEZ1bmMgZnVuY3Rpb24gcmV0dXJucyBvbmUgb2YgdGhlIG1hdGhlbWF0aWMgQ1NTIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgb3IgbW9yZVxyXG4gKiBwYXJhbWV0ZXJzIHdob3NlIHR5cGUgaXMgZGVyaXZlZCBmcm9tIE51bWJlckJhc2U8VD4uXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXRoRnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggbmFtZTogc3RyaW5nLCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHttdWx0aVN0eWxlVG9TdHJpbmcoIHBhcmFtcywgY29udmVydEZ1bmMsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIGNhbGNGdW5jIGZ1bmN0aW9uIHJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY2FsYygpIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGNGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgY2FsYygke3RlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMsICh2OiBhbnkpID0+IHN0eWxlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSB1bml0RnVuYyBmdW5jdGlvbiByZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gbnVtYmVyIHdpdGggdGhlIGdpdmVuIHVuaXRzLlxyXG4gKi9cclxuZnVuY3Rpb24gdW5pdEZ1bmM8VCBleHRlbmRzIHN0cmluZz4oIG46IG51bWJlciwgdW5pdDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBuICsgdW5pdDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleVxyXG4gKiBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgYnkgY2FsbGluZyBhIGZ1bmN0aW9uIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+IGltcGxlbWVudHMgSU51bWJlck1hdGg8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBjb252ZXJ0RnVuYzogQ29udmVydE51bWJlckZ1bmNUeXBlKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBudW1iZXJUb1N0cmluZyA9IChuOiBudW1iZXIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RnVuYyggbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aVN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCB0aGlzLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtaW4oIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pblwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1heFwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJjbGFtcFwiLCBbbWluLCBwcmVmLCBtYXhdLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsYyggZm9ybXVsYVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2FsY0Z1bmMoIGZvcm11bGFQYXJ0cywgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVyY2VudCggbjogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyhuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5pdCggbjogbnVtYmVyLCB1bml0OiBzdHJpbmcpOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB1bml0RnVuYzxUPiggbiwgdW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aENsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgXCJzdGF0aWNcIiBzaWRlIG9mIGNsYXNzZXMgZGVyaXZlZCBmcm9tIHRoZVxyXG4gKiBOdW1iZXJNYXRoIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyTWF0aENsYXNzPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gICAgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZztcclxuXHJcbiAgICBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgbmV3KCk6IElOdW1iZXJNYXRoPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVW5pdGxlc3MgbnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NOdW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bnVtYmVyPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTnVtYmVyTWF0aCBleHRlbmRzIE51bWJlck1hdGg8TnVtYmVyVHlwZT5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG4udG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NQZXJjZW50TWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHBlcmNlbnQ+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NQZXJjZW50TWF0aCBleHRlbmRzIE51bWJlck1hdGg8UGVyY2VudFR5cGU+IGltcGxlbWVudHMgSUNzc1BlcmNlbnRNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIChOdW1iZXIuaXNJbnRlZ2VyKG4pID8gbiA6IE1hdGgucm91bmQobiAqIDEwMCkpICsgXCIlXCI7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUGVyY2VudD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciB0byBzdHJpbmcgdXNpbmcgdGhlIGZvbGxvd2luZyBydWxlczpcclxuICogLSBpZiB0aGUgbnVtYmVyIGlzIGJldHdlZW4gLTEgYW5kIDEgKG5vbiBpbmNsdXNpdmUpLCBtdWx0aXBsaWVzIHRoZSBudW1iZXIgYW5kIGFwcGVuZHMgXCIlXCJcclxuICogLSBvdGhlcndpc2UsIGNvbnZlcnRzIHRoZSBudW1iZXIgdG8gc3RyaW5nIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1dGludHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyggbjogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBuID49IDEgfHwgbiA8PSAtMSA/IG4udG9TdHJpbmcoKSA6IE1hdGgucm91bmQobiAqIDEwMCkgKyBcIiVcIjtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBMZW5ndGhcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0xlbmd0aE1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxsZW5ndGg+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NMZW5ndGhNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxMZW5ndGhUeXBlPiBpbXBsZW1lbnRzIElDc3NMZW5ndGhNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJweFwiLCBcImVtXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NMZW5ndGg+LCBtYXg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBOdW1iZXJQcm94eTxMZW5ndGhUeXBlPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtaW5tYXhcIiwgW21pbiwgbWF4XSwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFEoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcIlFcIik7IH1cclxuICAgIHB1YmxpYyBjaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiY2hcIik7IH1cclxuICAgIHB1YmxpYyBjbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiY21cIik7IH1cclxuICAgIHB1YmxpYyBlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZW1cIik7IH1cclxuICAgIHB1YmxpYyBleCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZXhcIik7IH1cclxuICAgIHB1YmxpYyBpYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiaWNcIik7IH1cclxuICAgIHB1YmxpYyBpbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiaW5cIik7IH1cclxuICAgIHB1YmxpYyBsaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwibGhcIik7IH1cclxuICAgIHB1YmxpYyBtbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwibW1cIik7IH1cclxuICAgIHB1YmxpYyBwYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicGNcIik7IH1cclxuICAgIHB1YmxpYyBwdCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicHRcIik7IH1cclxuICAgIHB1YmxpYyBweCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicHhcIik7IH1cclxuICAgIHB1YmxpYyB2YiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmJcIik7IH1cclxuICAgIHB1YmxpYyB2aCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmhcIik7IH1cclxuICAgIHB1YmxpYyB2aSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmlcIik7IH1cclxuICAgIHB1YmxpYyB2dyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidndcIik7IH1cclxuICAgIHB1YmxpYyByZW0oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInJlbVwiKTsgfVxyXG4gICAgcHVibGljIHJsaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicmxoXCIpOyB9XHJcbiAgICBwdWJsaWMgdm1heCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidm1heFwiKTsgfVxyXG4gICAgcHVibGljIHZtaW4oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInZtaW5cIik7IH1cclxuICAgIHB1YmxpYyBmciggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZnJcIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQW5nbGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0FuZ2xlTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGFuZ2xlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzQW5nbGVNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxBbmdsZVR5cGU+IGltcGxlbWVudHMgSUNzc0FuZ2xlTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZGVnXCIsIFwidHVyblwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUFuZ2xlPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgZGVnKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJkZWdcIik7IH1cclxuICAgIHB1YmxpYyByYWQoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInJhZFwiKTsgfVxyXG4gICAgcHVibGljIGdyYWQoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImdyYWRcIik7IH1cclxuICAgIHB1YmxpYyB0dXJuKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ0dXJuXCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRpbWVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1RpbWVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8dGltZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1RpbWVNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxUaW1lVHlwZT4gaW1wbGVtZW50cyBJQ3NzVGltZU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIm1zXCIsIFwic1wiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NUaW1lPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIG1zKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJtc1wiKTsgfVxyXG4gICAgcHVibGljIHMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInNcIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVzb2x1dGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzUmVzb2x1dGlvbk1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxyZXNvbHV0aW9uPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzUmVzb2x1dGlvbk1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFJlc29sdXRpb25UeXBlPiBpbXBsZW1lbnRzIElDc3NSZXNvbHV0aW9uTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZHBpXCIsIFwieFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlSZXNvbHV0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUEkgKi9cclxuICAgIHB1YmxpYyBkcGkoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImRwaVwiKTsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBDTSAqL1xyXG4gICAgcHVibGljIGRwY20oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImRwY21cIik7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuICAgIHB1YmxpYyBkcHB4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJkcHB4XCIpOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUFBYICovXHJcbiAgICBwdWJsaWMgeCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwieFwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGcmVxdWVuY3lcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0ZyZXF1ZW5jeU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxmcmVxdWVuY2U+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NGcmVxdWVuY3lNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxGcmVxdWVuY3lUeXBlPiBpbXBsZW1lbnRzIElDc3NGcmVxdWVuY3lNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJIelwiLCBcImtIelwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NGcmVxdWVuY3k+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJlcXVlbmN5Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBoeiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiSHpcIik7IH1cclxuICAgIHB1YmxpYyBraHooIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImtIelwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQb3NpdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgcG9zaXRpb24gc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdWxsOiB2ID0+IFwiXCIsXHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdiwgXCIgXCIpXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9zaXRpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxNdWx0aUNzc1Bvc2l0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBiYXNpYyB0eXBlcyBhbmQgZnVuY3Rpb25zIHVzZWQgdG8gZGVmaW5lIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuICogXHJcbiAqIEFsbCBDU1MgcHJvcGVydGllcyBzaG91bGQgYWNjZXB0IHN0cmluZyBhcyB0aGUgdHlwZSBvZiB0aGVpciB2YWx1ZSBldmVuIGlmIG5vcm1hbGx5XHJcbiAqIHRoZXkgYWNjZXB0IG90aGVyIHR5cGVzIChlLmcgYSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIGFzIGBcInJlZFwiIHwgXCJncmVlblwiIHwgLi4uYCBmb3IgdGhlXHJcbiAqIGNvbG9yKSBwcm9wZXJ0eS4gVGhpcyBpcyBiZWNhdXNlIGluIGFkZGl0aW9uIHRvIHRoZWlyIG5vcm1hbCB2YWx1ZXMgYW55IHByb3BlcnR5XHJcbiAqIGNhbiB1c2UgY3VzdG9tIENTUyBwcm9wZXJ0eSBpbiB0aGUgZm9ybSBgdmFyKC0tcHJvcG5hbWUpYC4gSG93ZXZlciwgaWYgd2UgYWRkIHN0cmluZyB0eXBlXHJcbiAqIHRvIHRoZSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIChlLmcuIGBcInJlZFwiIHwgXCJncmVlblwiIHwgc3RyaW5nYCksIHRoaXMgdGhyb3dzIG9mZiB0aGVcclxuICogSW50ZWxsaXNlbnNlIGFuZCBpdCBkb2Vzbid0IHByb21wdCBkZXZlbG9wZXJzIGZvciB0aGUgcG9zc2libGUgdmFsdWVzLiBUaGUgSVZhbHVlUHJveHlcclxuICogY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBzdHJpbmcgYW5kIHRoaXMgc29sdmVzIHRoZSBJbnRlbGxpc2Vuc2UgaXNzdWUuXHJcbiAqIFxyXG4gKiBBbm90aGVyIGJlbmVmaXQgb2YgdXNpbmcgZnVuY3Rpb25zIGlzIHRoYXQgdGhleSBhcmVcclxuICogY29uc3RydWN0ZWQgYXQgb25lIHRpbWUgYnV0IHRoZSBzdHJpbmcgZ2VuZXJhdGlvbiBvY2N1cnMgYXQgYW5vdGhlciB0aW1lLiBUaGlzIGFsbG93c1xyXG4gKiB1c2luZyB0aGVzZSBvYmplY3RzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuIFRoZXkgY2FuIHJlZmVyZW5jZSBvYmplY3RzIGxpa2VcclxuICogSVZhclJ1bGUgdGhhdCBhcmUgbm90IGZ1bGx5IGluaXRpYWxpemVkIHlldC4gSG93ZXZlciwgd2hlbiB0aGUgc3R5bGVzIHNob3VsZCBiZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSB0aGUgaW5pdGlhbGl6YXRpb24gd2lsbCBoYXZlIGFscmVhZHkgb2NjdXJyZWQgYW5kIHRoZSBmdW5jdGlvbiB3aWxsXHJcbiAqIHJldHVybiBhIGNvcnJlY3Qgc3RyaW5nLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHRoZSBwcm94eSBmdW5jdGlvbnMgaGF2ZSBhIHBhcmFtZXRlciB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlbSBmcm9tXHJcbiAqIG90aGVyIHByb3h5IGZ1bmN0aW9ucy4gVGhpcyBpcyBiZWNhdXNlIHdlIHdhbnQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbnQgQ1NTIHR5cGVzLFxyXG4gKiBzbyB0aGF0IGEgZnVuY3Rpb24gdXNlZCBmb3Igb25lIENTUyB0eXBlIGNhbm5vdCBiZSB1c2VkIGZvciBhIGRpZmZlcmVudCBDU1MgdHlwZS4gRm9yXHJcbiAqIGV4YW1wbGUsIHRoZSBgY2FsYygpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBOdW1iZXJQcm94eSBmdW5jdGlvbiwgd2hpbGUgdGhlXHJcbiAqIGBsaW5lYXJJbmdyYWRpZW50KClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIEltYWdlUHJveHkgZnVuY3Rpb24uIFRodXMgeW91IGNhbm5vdCB1c2UgdGhlXHJcbiAqICdjYWxjKClgIGZ1bmN0aW9uIGZvciBpbWFnZS1iYXNlZCBDU1MgcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cclxuICovXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFN0cmluZ1Byb3h5IHR5cGUgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBwYXJ0IG9mIHR5cGVcclxuICogZGVmaW5pdGlvbiBmb3IgYWxsIENTUyBwcm9wZXJ0aWVzIC0gZXZlbiBmb3IgdGhvc2UgdGhhdCBkb24ndCBoYXZlIGBzdHJpbmdgIGFzIHBhcnQgb2YgdGhlaXJcclxuICogdHlwZS5cclxuICogXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcmV0dXJuZWQgZnJvbSB0aGUgYHJhdygpYCBmdW5jdGlvbiwgd2hpY2ggYWxsb3dzIGJ5LXBhc3NpbmcgdGhlIHByb3BlcnR5XHJcbiAqIHR5cGluZyBydWxlcyBhbmQgc3BlY2lmeWluZyBhIHN0cmluZyBkaXJlY3RseS4gVGhpcyBtaWdodCBiZSB1c2VmdWwsIHdoZW4gYSBzdHJpbmcgdmFsdWUgaXNcclxuICogb2J0YWluZWQgZnJvbSBzb21lIGV4dGVybmFsIGNhbGN1bGF0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN0cmluZ1Byb3h5ID0gKHA/OiBcInN0cmluZ1wiKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbVZhciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgb2JqZWN0IHdpdGggdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBuZWVkZWQgYmVjYXVzZSBldmVyeSBzdHlsZSBwcm9wZXJ0eSBjYW4gYWNjZXB0IHZhbHVlIGluIHRoZSBmb3JtIG9mIHRoZSB2YXIoKVxyXG4gKiBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYXI8VCA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRzZXRWYWx1ZSggdmFsdWU6IFQsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZXh0ZW5kcyB0aGUgZ2l2ZW4gdHlwZSB3aXRoIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqIC0gSUN1c3RvbVZhciBvYmplY3QgdGhhdCBhbGxvd3MgdXNpbmcgYSBDU1MgY3VzdG9tIHByb3BlcnR5LlxyXG4gKiAtIFN0cmluZ1Byb3h5IHR5cGUgdGhhdCBhbGxvd3Mgc3BlY2lmeWluZyByYXcgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWQ8VD4gPSBUIHwgSUN1c3RvbVZhcjxUPiB8IFN0cmluZ1Byb3h5IHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogU3R5bGUgdmFsdWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFueSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHbG9iYWxfU3R5bGVUeXBlID0gXCJpbmhlcml0XCIgfCBcImluaXRpYWxcIiB8IFwidW5zZXRcIiB8IFwicmV2ZXJ0XCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBwYWlyLWxpa2UgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIHRvIDIgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yUGFpcjxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3gtbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gNCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JCb3g8VD4gPSBUIHwgW0V4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD4/LCBFeHRlbmRlZDxUPj9dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIG9yIG1vcmUgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yTWFueTxUPiA9IFQgfCBFeHRlbmRlZDxUPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtZXJpYyB0eXBlcyBhcyBhIGJhc2lzIGZvciBoYW5kbGluZyBDU1MgPG51bWJlcj4sIDxsZW5ndGg+LCA8YW5nbGU+LCBldGMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBOdW1iZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGEgc3RyaW5nIHZhbHVlIGNhbiBiZSBhc3NpZ25lZCB0byBwcm9wZXJ0aWVzIG9mIHRoZSBDU1NcclxuICogbnVtZXJpYyB0eXBlcy4gVGhpcyBmdW5jdGlvbiBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlIG1pbigpLCBtYXgoKSBhbmQgY2FsYygpLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyUHJveHk8VCBleHRlbmRzIHN0cmluZz4gPSAocD86IFQpID0+IHN0cmluZztcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJCYXNlPFQgZXh0ZW5kcyBzdHJpbmc+ID0gbnVtYmVyIHwgc3RyaW5nIHwgTnVtYmVyUHJveHk8VD47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBudW1lcmljIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IE9uZU9yTWFueTxOdW1iZXJCYXNlPFQ+PjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIHR5cGUsIHRoZXkgYXJlIGNvbnZlcnRlZFxyXG4gKiB0byBzdHJpbmdzIHVzaW5nIHRoZSBgbnVtYmVyVG9TdHJpbmdgIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlck1hdGg8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW4oKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjbGFtcCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogTnVtYmVyUHJveHk8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2FsYygpIGZ1bmN0aW9uLiBUaGlzIG1ldGhvZCBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdFxyXG4gICAgICogYmUgaW52b2tlZCB3aXRoIGEgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAgICAgKi9cclxuICAgIGNhbGMoIGZvcm11bGFQYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxudW1iZXI+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBOdW1iZXIgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyVHlwZSA9IFwiTnVtYmVyXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlIC0gbm90ZSB0aGF0IGl0IGV4bHVkZXMgYHN0cmluZ2AgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTnVtYmVyID0gRXhjbHVkZTxOdW1iZXJCYXNlPE51bWJlclR5cGU+LHN0cmluZz47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aU51bWJlciA9IE9uZU9yTWFueTxDc3NOdW1iZXI+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bnVtYmVyPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTnVtYmVyTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPE51bWJlclR5cGU+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHBlcmNlbnQgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFVuaXRzID0gXCIlXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgUGVyY2VudCB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VHlwZSA9IFwiUGVyY2VudFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUGVyY2VudCA9IE51bWJlckJhc2U8UGVyY2VudFR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpUGVyY2VudCA9IE9uZU9yTWFueTxDc3NQZXJjZW50PjtcclxuXHJcbi8qKiBQcm94eSB0eXBlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRQcm94eSA9IE51bWJlclByb3h5PFBlcmNlbnRUeXBlPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZyYWN0aW9uTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1BlcmNlbnRNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8UGVyY2VudFR5cGU+XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciB0byBhIHBlcmNlbnQgc3RyaW5nLiBOdW1iZXJzIGJldHdlZW4gLTEgYW5kIDEgYXJlIG11bHRpcGx5ZWQgYnkgMTAwLlxyXG4gICAgICovXHJcbiAgICBwZXJjZW50KCBuOiBudW1iZXIpOiBQZXJjZW50UHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGxlbmd0aD5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGxlbmd0aCAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhVbml0cyA9IFwiUVwiIHwgXCJjaFwiIHwgXCJjbVwiIHwgXCJlbVwiIHwgXCJleFwiIHwgXCJpY1wiIHwgXCJpblwiIHwgXCJsaFwiIHwgXCJtbVwiIHwgXCJwY1wiIHxcclxuICAgICAgICAgICAgICAgIFwicHRcIiB8IFwicHhcIiB8IFwidmJcIiB8IFwidmhcIiB8IFwidmlcIiB8IFwidndcIiB8IFwicmVtXCIgfCBcInJsaFwiIHwgXCJ2bWF4XCIgfCBcInZtaW5cIiB8IFwiZnJcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBMZW5ndGggdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVHlwZSA9IFwiTGVuZ3RoXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoID0gTnVtYmVyQmFzZTxMZW5ndGhUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpTGVuZ3RoID0gT25lT3JNYW55PENzc0xlbmd0aD47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by1mb3VyLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoQm94ID0gT25lT3JCb3g8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBQcm94eSB0eXBlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoUHJveHkgPSBOdW1iZXJQcm94eTxMZW5ndGhUeXBlPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0xlbmd0aE1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGxlbmd0aD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0xlbmd0aE1hdGggZXh0ZW5kcyBJTnVtYmVyTWF0aDxMZW5ndGhUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1pbm1heCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0xlbmd0aD4sIG1heDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IE51bWJlclByb3h5PExlbmd0aFR5cGU+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBxdWF0ZXJzIG9mIGFuIGluY2ggKi9cclxuICAgIFEoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjaCB1bml0cyAqL1xyXG4gICAgY2goIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYW50aW1ldGVycyAqL1xyXG4gICAgY20oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYWxjdWxhdGVkIGZvbnQtc2l6ZXMgb2YgdGhlIGVsZW1lbnQgKi9cclxuICAgIGVtKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaGVpZ2h0cyBvZiBsb3dlcmNhc2UgbGV0dGVyICd4JyBpbiB0aGUgZm9udCAqL1xyXG4gICAgZXgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpYyB1bml0cyAqL1xyXG4gICAgaWMoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpbmNoZXMgKi9cclxuICAgIGluKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSBlbGVtZW50ICovXHJcbiAgICBsaCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIG1pbGxpbWV0ZXJzICovXHJcbiAgICBtbSggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpY2FzICovXHJcbiAgICBwYyggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBvaW50cyAqL1xyXG4gICAgcHQoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaXhlbHMgKi9cclxuICAgIHB4KCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gICAgICogb2YgdGhlIHJvb3QgZWxlbWVudOKAmXMgYmxvY2sgYXhpcyAqL1xyXG4gICAgdmIoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG4gICAgdmgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAgICAgKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBpbmxpbmUgYXhpcyAqL1xyXG4gICAgdmkoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgd2lkdGggb2YgdGhlIHZpZXdwb3J0J3MgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrICovXHJcbiAgICB2dyggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGZvbnRzaXplcyBvZiB0aGUgcm9vdCBlbGVtZW50ICg8aHRtbD4pICovXHJcbiAgICByZW0oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBsaW5lLWhlaWdodHMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG4gICAgcmxoKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIHNtYWxsZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuICAgIHZtYXgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgbGFyZ2VyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbiAgICB2bWluKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgZm9yIGZsZXggKi9cclxuICAgIGZyKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgaW50byBwZXJjZW50cy4gVmFsdWVzIGJldHdlZW4gLTEuMCBhbmQgMS4wIG5vbi1pbmNsdXNpdmUgYXJlXHJcbiAgICAgKiBtdWx0aXBsaWVkIGJ5IDEwMC5cclxuICAgICAqL1xyXG4gICAgcGVyY2VudCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGEgcG9pbnQgdXNpbmcgeCBhbmQgeSBjb29yZGluYXRlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc1BvaW50ID0gW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGFuZ2xlPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgYW5nbGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0cyA9IFwiZGVnXCIgfCBcInJhZFwiIHwgXCJncmFkXCIgfCBcInR1cm5cIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBBbmdsZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVR5cGUgPSBcIkFuZ2xlXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NBbmdsZSA9IE51bWJlckJhc2U8QW5nbGVUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlBbmdsZSA9IE9uZU9yTWFueTxDc3NBbmdsZT47XHJcblxyXG4vKiogUHJveHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVQcm94eSA9IE51bWJlclByb3h5PEFuZ2xlVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NBbmdsZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGFuZ2xlPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzQW5nbGVNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8QW5nbGVUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiBkZWdyZWVzICovXHJcbiAgICBkZWcoIG46IG51bWJlcik6IEFuZ2xlUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gcmFkaWFucyAqL1xyXG4gICAgcmFkKCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGdyYWRpYW5zICovXHJcbiAgICBncmFkKCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHR1cm5zICovXHJcbiAgICB0dXJuKCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciBpbnRvIHBlcmNlbnRzLiBWYWx1ZXMgYmV0d2VlbiAtMS4wIGFuZCAxLjAgbm9uLWluY2x1c2l2ZSBhcmVcclxuICAgICAqIG11bHRpcGxpZWQgYnkgMTAwLlxyXG4gICAgICovXHJcbiAgICBwZXJjZW50KCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDx0aW1lPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgdGltZSAqL1xyXG5leHBvcnQgdHlwZSBUaW1lVW5pdHMgPSBcInNcIiB8IFwibXNcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBUaW1lIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFRpbWVUeXBlID0gXCJUaW1lXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NUaW1lID0gTnVtYmVyQmFzZTxUaW1lVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlUaW1lID0gT25lT3JNYW55PENzc1RpbWU+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgdHlwZSBUaW1lUHJveHkgPSBOdW1iZXJQcm94eTxUaW1lVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NUaW1lTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8dGltZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1RpbWVNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8VGltZVR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgICBtcyggbjogbnVtYmVyKTogVGltZVByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gc2Vjb25kcyAqL1xyXG4gICAgcyggbjogbnVtYmVyKTogVGltZVByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxyZXNvbHV0aW9uPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgcmVzb2x1dGlvbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uVW5pdHMgPSBcImRwaVwiIHwgXCJkcGNtXCIgfCBcImRwcHhcIiB8IFwieFwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFJlc29sdXRpb24gdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblR5cGUgPSBcIlJlc29sdXRpb25cIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Jlc29sdXRpb24gPSBOdW1iZXJCYXNlPFJlc29sdXRpb25UeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVJlc29sdXRpb24gPSBPbmVPck1hbnk8Q3NzUmVzb2x1dGlvbj47XHJcblxyXG4vKiogUHJveHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uUHJveHkgPSBOdW1iZXJQcm94eTxSZXNvbHV0aW9uVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NSZXNvbHV0aW9uTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1Jlc29sdXRpb25NYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8UmVzb2x1dGlvblR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBJICovXHJcbiAgICBkcGkoIG46IG51bWJlcik6IFJlc29sdXRpb25Qcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQQ00gKi9cclxuICAgIGRwY20oIG46IG51bWJlcik6IFJlc29sdXRpb25Qcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuICAgIGRwcHgoIG46IG51bWJlcik6IFJlc29sdXRpb25Qcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIFggKi9cclxuICAgIHgoIG46IG51bWJlcik6IFJlc29sdXRpb25Qcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8ZnJlcXVlbmN5PmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgZnJlcXVlbmN5ICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVVuaXRzID0gXCJIelwiIHwgXCJrSHpcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBGcmVxdWVuY3kgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VHlwZSA9IFwiRnJlcXVlbmN5XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyZXF1ZW5jeSA9IE51bWJlckJhc2U8RnJlcXVlbmN5VHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUZyZXF1ZW5jeSA9IE9uZU9yTWFueTxDc3NGcmVxdWVuY3k+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lQcm94eSA9IE51bWJlclByb3h5PEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzRnJlcXVlbmN5TWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEZyZXF1ZW5jeVR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBIZXJ0eiAqL1xyXG4gICAgaHooIG46IG51bWJlcik6IEZyZXF1ZW5jeVByb3h5XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIEtpbG8tSGVydHogKi9cclxuICAgIGtoeiggbjogbnVtYmVyKTogRnJlcXVlbmN5UHJveHlcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBob3Jpem9udGFsIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkID0gXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyBhIHNpbXBsZSAxIG9yIHR3byB2YWx1ZXMgYDxwb3NpdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIFNpbXBsZUNzc1Bvc2l0aW9uID0gSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIHRoZSBmdWxsIHVwIHRvIDQgdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NQb3NpdGlvbiA9IFNpbXBsZUNzc1Bvc2l0aW9uIHwgXHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmRdIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgbXVsdGlwbGUgYDxwb3NpdGlvbj5gIENTUyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUNzc1Bvc2l0aW9uID0gRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+W107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSYWRpdXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgY29ybmVyIHJhZGl1cyAqL1xyXG5leHBvcnQgdHlwZSBDc3NSYWRpdXMgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoPjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFVSTHMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBVcmxQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2YgdGhlIENTUyB1cmwoKSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFVybFByb3h5ID0gKHA/OiBcInVybFwiKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBhdHRyKCkgZnVuY3Rpb24gc3VwcG9ydFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCB0eXBlIEF0dHJUeXBlS2V5d29yZCA9IFwic3RyaW5nXCIgfCBcImNvbG9yXCIgfCBcInVybFwiIHwgXCJpbnRlZ2VyXCIgfCBcIm51bWJlclwiIHwgXCJsZW5ndGhcIiB8IFwiYW5nbGVcIiB8IFwidGltZVwiIHwgXCJmcmVxdWVuY3lcIjtcclxuXHJcbmV4cG9ydCB0eXBlIEF0dHJVbml0S2V5d29yZCA9IFBlcmNlbnRVbml0cyB8IExlbmd0aFVuaXRzIHwgVGltZVVuaXRzIHwgQW5nbGVVbml0cyB8IFJlc29sdXRpb25Vbml0cyB8IEZyZXF1ZW5jeVVuaXRzO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBBdHRyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBDU1MgYXR0cigpIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEF0dHJQcm94eSA9IChwPzogXCJhdHRyXCIpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFdlYiBOYW1lc3BhY2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgV2ViTmFtZXNwYWNlcyBjbGFzcyBjb250YWlucyBpZGVudGlmaWVycyBmb3IgdGhlIGtub3duIFdlYi1yZWxhdGVkIG5hbWVzcGFjZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2ViTmFtZXNwYWNlc1xyXG57XHJcblx0c3RhdGljIHJlYWRvbmx5IEhUTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgU1ZHID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTGluayA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUwgPSBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgTWF0aE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==