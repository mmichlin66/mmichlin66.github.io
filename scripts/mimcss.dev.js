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
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// attr()
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an AttrProxy function representing the `attr()` CSS function. It returns StringPropxy
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU3R5bGVBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9VdGlsQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQ291bnRlclJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ltYWdlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9NZWRpYUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU2VsZWN0b3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1N0eWxlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9VdGlsRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9VdGlsVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQSxpR0FBa0Q7QUFJbEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0gs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LENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEQsSUFBSSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRCxJQUFJLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDeEQ7QUF0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QjtBQUNsQixFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOztHQUVHO0FBQ0gsTUFBc0IsYUFBYTs7QUFBbkMsc0NBUUM7QUFOZ0Isa0JBQUksR0FBRyw4QkFBOEIsQ0FBQztBQUN0QyxpQkFBRyxHQUFHLDRCQUE0QixDQUFDO0FBQ25DLG1CQUFLLEdBQUcsOEJBQThCLENBQUM7QUFDdkMsaUJBQUcsR0FBRyxzQ0FBc0MsQ0FBQztBQUM3QyxtQkFBSyxHQUFHLCtCQUErQixDQUFDO0FBQ3hDLG9CQUFNLEdBQUcsb0NBQW9DLENBQUMiLCJmaWxlIjoibWltY3NzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9taW1jc3NUeXBlcy5qc1wiKTtcbiIsIu+7v2ltcG9ydCAqIGFzIENvbG9yVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyByZWQsIGdyZWVuLCBibHVlIHNlcGFyYXRpb24gdmFsdWVzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciBvciBhXHJcbiAqIHN0cmluZyB3aXRoIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIDAgdG8gMjU1LlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAuMCB0byAxLjAgbm9uLWluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gU3RyaW5nIHdoaWNoIGlzIHVzZWQgYXMgaXMuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gU3RyaW5nIHdoaWNoIGlzIHVzZWQgYXMgaXMuXHJcbiAqIFxyXG4gKiBAcGFyYW0gciBSZWQgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YXVlLlxyXG4gKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyIHwgc3RyaW5nLCBnOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IENvbG9yVHlwZXMuQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5yZ2JUb1N0cmluZyggciwgZywgYiwgYSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIGh1ZS1zYXR1cmF0aW9uLWxpZ2h0bmVzcyBjb21wb25lbnRzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICogXHJcbiAqIEBwYXJhbSBoIEh1ZSBjb21wb25lbnQgYXMgYW4gYW5nbGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBzIFNhdHVyYXRpb24gYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciB8IHN0cmluZywgbDogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogQ29sb3JUeXBlcy5Db2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmhzbFRvU3RyaW5nKCBoLCBzLCBsLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjb2xvciBhbmQgYW4gb3B0aW9uYWwgYWxwaGEgbWFzayB0byB0aGUgQ1NTIENvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzXHJcbiAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvciB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gU3RyaW5nIHdoaWNoIGlzIHVzZWQgYXMgaXMuXHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBcclxuICogQHBhcmFtIGEgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoIGM6IG51bWJlciB8IGtleW9mIENvbG9yVHlwZXMuSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIgfCBzdHJpbmcpOiBDb2xvclR5cGVzLkNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MuYWxwaGFUb1N0cmluZyggYywgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIFNpbXBsZUNzc1Bvc2l0aW9uLCBDc3NBbmdsZX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBJbWFnZVR5cGVzIGZyb20gXCIuLi9zdHlsZXMvSW1hZ2VUeXBlc1wiXHJcbmltcG9ydCAqIGFzIEltYWdlRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9JbWFnZUZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBsaW5lYXItZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhckdyYWRpZW50KCBhbmdsZT86IEltYWdlVHlwZXMuTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgLi4uc3RvcHNPckhpbnRzOiBJbWFnZVR5cGVzLkdyYWRpZW50U3RvcE9ySGludFtdKTogSW1hZ2VUeXBlcy5JbWFnZVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLmxpbmVhckdyYWRpZW50VG9TdHJpbmcoIFwibGluZWFyLWdyYWRpZW50XCIsIGFuZ2xlLCBzdG9wc09ySGludHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0aW5nTGluZWFyR3JhZGllbnQoIGFuZ2xlPzogSW1hZ2VUeXBlcy5MaW5lYXJHcmFkQW5nbGUsXHJcbiAgICAuLi5zdG9wc09ySGludHM6IEltYWdlVHlwZXMuR3JhZGllbnRTdG9wT3JIaW50W10pOiBJbWFnZVR5cGVzLkltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IEltYWdlRnVuY3MubGluZWFyR3JhZGllbnRUb1N0cmluZyggXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50XCIsIGFuZ2xlLCBzdG9wc09ySGludHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmFkaWFsLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRpYWxHcmFkaWVudCggc2hhcGU/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICBleHRlbnQ/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50RXh0ZW50LCBwb3M/OiBDc3NQb3NpdGlvbixcclxuICAgIC4uLnN0b3BzT3JIaW50czogSW1hZ2VUeXBlcy5HcmFkaWVudFN0b3BPckhpbnRbXSk6IEltYWdlVHlwZXMuSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gSW1hZ2VGdW5jcy5yYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBcInJhZGlhbC1ncmFkaWVudFwiLCBzaGFwZSwgZXh0ZW50LCBwb3MsIHN0b3BzT3JIaW50cyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRpbmdSYWRpYWxHcmFkaWVudCggc2hhcGU/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICBleHRlbnQ/OiBJbWFnZVR5cGVzLlJhZGlhbEdyYWRpZW50RXh0ZW50LCBwb3M/OiBDc3NQb3NpdGlvbixcclxuICAgIC4uLnN0b3BzT3JIaW50czogSW1hZ2VUeXBlcy5HcmFkaWVudFN0b3BPckhpbnRbXSk6IEltYWdlVHlwZXMuSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gSW1hZ2VGdW5jcy5yYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBcInJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRcIiwgc2hhcGUsIGV4dGVudCwgcG9zLCBzdG9wc09ySGludHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZWBjb25pYy1ncmFkaWVudCgpYCAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmljR3JhZGllbnQoIGFuZ2xlPzogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBwb3M/OiBTaW1wbGVDc3NQb3NpdGlvbixcclxuICAgIC4uLnN0b3BzT3JIaW50czogSW1hZ2VUeXBlcy5HcmFkaWVudFN0b3BPckhpbnRbXSk6IChpbWc/OlwiaW1hZ2VcIikgPT4gc3RyaW5nXHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLmNvbmljR3JhZGllbnRUb1N0cmluZyggYW5nbGUsIHBvcywgc3RvcHNPckhpbnRzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJbWFnZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNyb3NzLWZhZGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzRmFkZSggLi4uYXJnczogSW1hZ2VUeXBlcy5Dcm9zc0ZhZGVQYXJhbVtdKTogSW1hZ2VUeXBlcy5JbWFnZVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBJbWFnZUZ1bmNzLmNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBSdWxlVHlwZXMgZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBSdWxlQ29udGFpbmVyRnVuY3MgZnJvbSBcIi4uL3J1bGVzL1J1bGVDb250YWluZXJcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnksIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7Q3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHtJRm9udEZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5pbXBvcnQge0Fic3RyYWN0UnVsZSwgQ2xhc3NSdWxlLCBJRFJ1bGUsIFNlbGVjdG9yUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1N0eWxlUnVsZXNcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuLi9ydWxlcy9BbmltYXRpb25SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVmFyUnVsZVwiXHJcbmltcG9ydCB7Q291bnRlclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9Db3VudGVyUnVsZXNcIjtcclxuaW1wb3J0IHtGb250RmFjZVJ1bGUsIEltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGUsIFBhZ2VSdWxlfSBmcm9tIFwiLi4vcnVsZXMvTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGUsIE1lZGlhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyb3VwUnVsZXNcIlxyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBhYnN0cmFjdCBydWxlLCB3aGljaCBkZWZpbmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gYmUgZXh0ZW5kZWQgYnkgb3RoZXIgc3R5bGVcclxuICogcnVsZXMuIEFic3RyYWN0IHJ1bGVzIGRvbid0IGhhdmUgc2VsZWN0b3JzIGFuZCBhcmUgbm90IGluc2VydGVkIGludG8gRE9NLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhYnN0cmFjdCggc3R5bGU6IFJ1bGVUeXBlcy5Db21iaW5lZFN0eWxlc2V0KTogUnVsZVR5cGVzLklTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBSdWxlVHlwZXMuQ29tYmluZWRTdHlsZXNldCxcclxuXHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUNsYXNzUnVsZSk6IFJ1bGVUeXBlcy5JQ2xhc3NSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBJRCBydWxlLiBUaGUgSUQgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBJRCBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgSUQuIFN1Y2ggSUQgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpZCggc3R5bGU/OiBSdWxlVHlwZXMuQ29tYmluZWRTdHlsZXNldCxcclxuXHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUlEUnVsZSk6IFJ1bGVUeXBlcy5JSURSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IElEUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzZWxlY3RvciBydWxlLiBTZWxlY3RvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgc3RyaW5nIG9yIHZpYSB0aGUgc2VsZWN0b3IgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN0eWxlKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlOiBSdWxlVHlwZXMuQ29tYmluZWRTdHlsZXNldCk6IFJ1bGVUeXBlcy5JU3R5bGVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBSdWxlVHlwZXMuQW5pbWF0aW9uRnJhbWVbXSxcclxuXHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUFuaW1hdGlvblJ1bGUpOiBSdWxlVHlwZXMuSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQW5pbWF0aW9uUnVsZSggZnJhbWVzLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY3VzdG9tIHZhcmlhYmxlIG9iamVjdCB0aGF0IGRlZmluZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBUaGUgdmFyaWFibGUgbmFtZSB3aWxsXHJcbiAqIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlXHJcbiAqIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjdXN0b20gdmFyaWFibGUgcnVsZS4gVGhlXHJcbiAqIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSB2YWx1ZSBqdXN0IHRvIFwiZGVjbGFyZVwiIHRoZSB2YXJpYWJsZS4gU3VjaFxyXG4gKiB2YXJpYWJsZSBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdGVtcGxhdGU6IEssIHByb3BWYWw/OiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRcdFx0bmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgUnVsZVR5cGVzLklWYXJSdWxlPEs+KTogUnVsZVR5cGVzLklWYXJSdWxlPEs+XHJcbntcclxuXHRyZXR1cm4gbmV3IFZhclJ1bGUoIHRlbXBsYXRlLCBwcm9wVmFsLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY291bnRlciBvYmplY3QuIFRoZSBjb3VudGVyIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgY291bnRlciBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjb3VudGVyKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBSdWxlVHlwZXMuSUNvdW50ZXJSdWxlKTogUnVsZVR5cGVzLklDb3VudGVyUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBDb3VudGVyUnVsZSggbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuXHRzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSk6IFJ1bGVUeXBlcy5JSW1wb3J0UnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB1cmwsIG1lZGlhUXVlcnksIHN1cHBvcnRzUXVlcnkpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZm9udC1mYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGZvbnRmYWNlKCBmb250ZmFjZTogSUZvbnRGYWNlKTogUnVsZVR5cGVzLklGb250RmFjZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgRm9udEZhY2VSdWxlKCBmb250ZmFjZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBuYW1lc3BhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkbmFtZXNwYWNlKCBuYW1lc3BhY2U6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogUnVsZVR5cGVzLklOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIG5hbWVzcGFjZSwgcHJlZml4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkcGFnZSggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpOiBSdWxlVHlwZXMuSVBhZ2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFBhZ2VSdWxlKCBwc2V1ZG9DbGFzcywgc3R5bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgc3VwcG9ydHMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3VwcG9ydHM8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb248Tz4sIE8gZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPihcclxuXHRxdWVyeTogU3VwcG9ydHNRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgUnVsZVR5cGVzLklTdHlsZURlZmluaXRpb25DbGFzczxULE8+KTogUnVsZVR5cGVzLklTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlKCBxdWVyeSwgaW5zdGFuY2VPckNsYXNzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG1lZGlhPFQgZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPE8+LCBPIGV4dGVuZHMgUnVsZVR5cGVzLlN0eWxlRGVmaW5pdGlvbj4oXHJcblx0cXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCxPPik6IFJ1bGVUeXBlcy5JTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IE1lZGlhUnVsZSggcXVlcnksIGluc3RhbmNlT3JDbGFzcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgY3JlYXRlcyB1bmlxdWUgbmFtZXMgZm9yIGFsbCBuYW1lZFxyXG4gKiBlbnRpdGllcy4gRm9yIGEgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvbmx5IGEgc2luZ2xlIGluc3RhbmNlIGlzIGNyZWF0ZWQsIG5vIG1hdHRlciBob3dcclxuICogbWFueSB0aW1lcyB0aGlzIGZ1bmN0aW9uIGlzIGludm9rZWQuIEhvd2V2ZXIsIGlmIGFuIGluc3RhbmNlLCB3aGljaCBoYXMgbm90IHlldCBiZWVuIHByb2Nlc3NlZCxcclxuICogaXMgcGFzc2VkLCB0aGVuIGEgbmV3IHNldCBvZiB1bmlxdWUgbmFtZXMgd2lsbCBiZSBjcmVhdGVkIGZvciBpdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdXNlPFQgZXh0ZW5kcyBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uPihcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFQgfCBSdWxlVHlwZXMuSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogVCB8IG51bGxcclxue1xyXG5cdHJldHVybiBSdWxlQ29udGFpbmVyRnVuY3MucHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdGFuY2VPckNsYXNzKSBhcyBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbWJlZHMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW50byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LiBXaGVuIGFjdGl2YXRlZCxcclxuICogdGhlIGVtYmVkZGVkIG9iamVjdCBkb2Vzbid0IGNyZWF0ZSBpdHMgb3duIGA8c3R5bGU+YCBlbGVtZW50IGJ1dCB1c2VzIHRoYXQgb2YgaXRzIG93bmVyLiBUaGlzXHJcbiAqIGFsbG93cyBjcmVhdGluZyBtYW55IHNtYWxsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBpbnN0ZWFkIG9mIG9uZSBodWdlIG9uZSB3aXRob3V0IGluY3VycmluZ1xyXG4gKiB0aGUgb3ZlcmhlYWQgb2YgbWFueSBgPHN0eWxlPmAgZWxlbWVudHMuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgYXMgb3Bwb3NlZCB0byB0aGUgJHVzZSBmdW5jdGlvbiwgdGhlICRlbWJlZCBmdW5jdGlvbiBhbHdheXMgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZlxyXG4gKiB0aGUgZ2l2ZW4gY2xhc3MgYW5kIGRvZXNuJ3QgYXNzb2NpYXRlIHRoZSBjbGFzcyB3aXRoIHRoZSBjcmVhdGVkIGluc3RhbmNlLiBUaGF0IG1lYW5zIHRoYXQgaWZcclxuICogYSBjbGFzcyBpcyBlbWJlZGRlZCBpbnRvIG1vcmUgdGhhbiBvbmUgXCJvd25lclwiLCB0d28gc2VwYXJhdGUgaW5zdGFuY2VzIG9mIGVhY2ggQ1NTIHJ1bGUgd2lsbCBiZVxyXG4gKiBjcmVhdGVkIHdpdGggZGlmZmVyZW50IHVuaXF1ZSBuYW1lcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZW1iZWQ8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0Ly8gcmV0dXJuIGRlZmluaXRpb24gaW5zdGFuY2Ugd2l0aG91dCBwcm9jZXNzaW5nIGl0LiBUaGlzIGlzIHRoZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGRlZmludGlvblxyXG5cdC8vIHdpbGwgYmUgZW1iZWRkZWQgaW50byBhbm90aGVyIGRlZmluaXRpb24uXHJcblx0cmV0dXJuIGluc3RhbmNlT3JDbGFzcyBpbnN0YW5jZW9mIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb25cclxuXHRcdD8gaW5zdGFuY2VPckNsYXNzXHJcblx0XHQ6IG5ldyBpbnN0YW5jZU9yQ2xhc3MoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmXHJcbiAqIHRoZSBpbnB1dCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIGJ1dCBhIGNsYXNzLCB3aGljaCBpcyBub3QgeWV0IGFzc29jaWF0ZWQgd2l0aCBhbiBpbnN0YW5jZSxcclxuICogdGhlIGluc3RhbmNlIGlzIGZpcnN0IGNyZWF0ZWQgYW5kIHByb2Nlc3NlZC4gTm90ZSB0aGF0IGVhY2ggc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBtYWludGFpbnNcclxuICogYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSBvbmx5IHVwb24gZmlyc3QgYWN0aXZhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWN0aXZhdGU8VCBleHRlbmRzIFJ1bGVUeXBlcy5TdHlsZURlZmluaXRpb24+KFxyXG5cdGluc3RhbmNlT3JDbGFzczogVCB8IFJ1bGVUeXBlcy5JU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5hY3RpdmF0ZSggaW5zdGFuY2VPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaFxyXG4gKiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kXHJcbiAqIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIHJlbW92ZWQgZnJvbSBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lcyBkb3duIHRvIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGRlYWN0aXZhdGUoIGluc3RhbmNlOiBSdWxlVHlwZXMuU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG57XHJcblx0cmV0dXJuIFJ1bGVDb250YWluZXJGdW5jcy5kZWFjdGl2YXRlKCBpbnN0YW5jZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVTaG9ydE5hbWVzKCBlbmFibGU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdHJldHVybiBSdWxlQ29udGFpbmVyRnVuY3MuZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlLCBwcmVmaXgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb25jYXRlbmF0ZXMgdGhlIG5hbWVzIG9mIHRoZSBnaXZlbiBjbGFzc2VzIGludG8gYSBzaW5nbGUgc3RyaW5nIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIGFcclxuICogYGNsYXNzYCBwcm9wZXJ0eSBvZiBhbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBjbGFzc2VzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlcyggLi4uY2xhc3NlczogKFJ1bGVUeXBlcy5JQ2xhc3NSdWxlIHwgRXh0ZW5kZWQ8c3RyaW5nPilbXSk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbHVlVG9TdHJpbmcoIGNsYXNzZXMsIHtcclxuXHRcdGFycmF5SXRlbUZ1bmM6IHYgPT4gdiBpbnN0YW5jZW9mIENsYXNzUnVsZSA/IHYubmFtZSA6IHZhbHVlVG9TdHJpbmcodilcclxuXHR9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0V4dGVuZGVkLCBDc3NQb3NpdGlvbiwgQ3NzTGVuZ3RoLCBDc3NQZXJjZW50LCBDc3NBbmdsZSwgQ3NzTnVtYmVyLCBPbmVPckJveCwgQ3NzUG9pbnR9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtTZWxlY3Rvckl0ZW0sIFNlbGVjdG9yUHJveHl9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBTdHlsZXNldCwgRmlsdGVyUHJveHksIEJhc2ljU2hhcGVQcm94eSxcclxuXHRUcmFuc2Zvcm1Qcm94eSwgQm9yZGVyUmFkaXVzX1N0eWxlVHlwZSwgRmlsbFJ1bGVfU3R5bGVUeXBlXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZywgc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsIGJvcmRlclJhZGl1c1RvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2Zvcm1hdFNlbGVjdG9yfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yRnVuY3NcIjtcclxuaW1wb3J0IHtDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aCwgYXJyYXlUb1N0cmluZywgQ3NzQW5nbGVNYXRoLCBDc3NOdW1iZXJNYXRoLCBwb3NpdGlvblRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yLiBUaGlzIGZ1bmN0aW9uIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0IGJlXHJcbiAqIGludm9rZWQgd2l0aCB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3IoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBTZWxlY3Rvckl0ZW1bXSk6IFNlbGVjdG9yUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBmb3JtYXRTZWxlY3RvciggcGFydHMsIHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3R5bGVzZXQgbWFuaXB1bGF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIGEgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlUHJvcE5hbWUgU3R5bGUgcHJvcGVydHkgbmFtZSB0aGF0IGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkXHJcbiAqIHRvIGEgQ1NTIGNvbXBsaWFudCBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BWYWx1ZSBWYWx1ZSB0byBjb252ZXJ0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlUHJvcFZhbHVlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBzdHlsZVByb3BOYW1lOiBLLFxyXG5cdHN0eWxlUHJvcFZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4pOiBzdHJpbmcgfCBudWxsXHJcbntcclxuXHRyZXR1cm4gc3R5bGVQcm9wVG9TdHJpbmcoIHN0eWxlUHJvcE5hbWUsIHN0eWxlUHJvcFZhbHVlLCB0cnVlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB2YWx1ZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgZnJvbSB0aGUgZ2l2ZW4gU3R5bGVzZXQgb2JqZWN0IHRvIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZVxyXG4gKiBvZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtIEhUTUwgZWxlbWVudCB3aG9zZSBzdHlsZXMgd2lsbCBiZSBzZXQuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBTdHlsZXNldCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdmFsdWVzIGZvciBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRTdHlsZSggZWxtOiBIVE1MRWxlbWVudCwgc3R5bGVzZXQ6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcblx0aWYgKHN0eWxlc2V0ID09IHVuZGVmaW5lZClcclxuXHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIFwic3R5bGVcIik7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGxldCBlbG1TdHlsZSA9IGVsbS5zdHlsZTtcclxuXHRcdE9iamVjdC5rZXlzKHN0eWxlc2V0KS5mb3JFYWNoKCBrZXkgPT4gZWxtU3R5bGVba2V5XSA9IHN0eWxlUHJvcFRvU3RyaW5nKCBrZXksIHN0eWxlc2V0W2tleV0sIHRydWUpKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb21wYXJlcyB0d28gU3R5bGVzZXQgb2JqZWN0cyBieSBjb252ZXJ0aW5nIHN0eWxlIHByb3BlcnRpZXMgdG8gc3RyaW5ncyBhbmQgcmV0dXJucyBhbiBvYmplY3RcclxuICogdGhhdCBjb250YWlucyBzdHJpbmcgdmFsdWVzIG9mIHByb3BlcnRpZXMgdGhhdCB3ZXJlIG5ldyBvciBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG5ld1xyXG4gKiBzdHlsZXNldCBhbmQgdW5kZWZpbmVkIHZhbHVlcyBmb3IgcHJvcGVydGllcyB0aGF0IGV4aXN0IGluIHRoZSBvbGQgc3R5bGVzZXQgYnV0IGRvbid0IGV4aXN0XHJcbiAqIGluIHRoZSBuZXcgb25lLlxyXG4gKiBAcGFyYW0gb2xkU3R5bGVzZXQgXHJcbiAqIEBwYXJhbSBuZXdTdHlsZXNldCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmU3R5bGVzZXRzKCBvbGRTdHlsZXNldDogU3R5bGVzZXQsIG5ld1N0eWxlc2V0OiBTdHlsZXNldCk6IHsgW0s6IHN0cmluZ106IHN0cmluZyB8IHVuZGVmaW5lZCB9IHwgbnVsbFxyXG57XHJcblx0Y29uc3QgdXBkYXRlVmFsOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfCB1bmRlZmluZWQgfSA9IHt9O1xyXG5cdGxldCBjaGFuZ2VzRXhpc3QgPSBmYWxzZTtcclxuXHJcblx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG9sZCBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBuZXcgb25lLiBUaGVzZVxyXG5cdC8vIHdpbGwgYmUgcmVtb3ZlZC5cclxuXHRmb3IoIGxldCBrZXkgaW4gb2xkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0bGV0IG5ld1ZhbCA9IG5ld1N0eWxlc2V0W2tleV07XHJcblx0XHRpZiAobmV3VmFsID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gdW5kZWZpbmVkO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgb2xkU3RyaW5nVmFsID0gc3R5bGVQcm9wVG9TdHJpbmcoIGtleSwgb2xkU3R5bGVzZXRba2V5XSwgdHJ1ZSk7XHJcblx0XHRcdGxldCBuZXdTdHJpbmdWYWwgPSBzdHlsZVByb3BUb1N0cmluZygga2V5LCBuZXdWYWwsIHRydWUpO1xyXG5cdFx0XHRpZiAob2xkU3RyaW5nVmFsICE9PSBuZXdTdHJpbmdWYWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgbmV3IHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG9sZCBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSBhZGRlZC5cclxuXHRmb3IoIGxldCBrZXkgaW4gbmV3U3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0bGV0IG9sZFZhbCA9IG9sZFN0eWxlc2V0W2tleV07XHJcblx0XHRpZiAob2xkVmFsID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gc3R5bGVQcm9wVG9TdHJpbmcoIGtleSwgbmV3U3R5bGVzZXRba2V5XSwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY2hhbmdlc0V4aXN0ID8gdXBkYXRlVmFsIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIFtbU3R5bGVzZXRdXSBvYmplY3QgaW50byBhbiBvYmplY3QsIHdoZXJlIGVhY2ggU3R5bGVzZXQncyBwcm9wZXJ0eSBpc1xyXG4gKiBjb252ZXJ0ZWQgdG8gaXRzIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIHN0eWxlc2V0IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9TdHJpbmdPYmplY3QoIHN0eWxlc2V0OiBTdHlsZXNldCk6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9XHJcbntcclxuXHRsZXQgcmVzID0ge307XHJcblx0T2JqZWN0LmtleXMoIHN0eWxlc2V0KS5mb3JFYWNoKCBrZXkgPT4gcmVzW2tleV0gPSBzdHlsZVByb3BUb1N0cmluZygga2V5LCBzdHlsZXNldFtrZXldLCB0cnVlKSk7XHJcblx0cmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGaWx0ZXJzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydGluZyBwZXJjZW50IHZhbHVlIHRvIGludm9jYXRpb24gb2YgdGhlIGdpdmVuIENTUyBmdW5jdGlvbi5cclxuZnVuY3Rpb24gcGVyY2VudEZpbHRlciggbmFtZTogc3RyaW5nLCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYW1vdW50KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBicmlnaHRuZXNzKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBicmlnaHRuZXNzKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiYnJpZ2h0bmVzc1wiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNvbnRyYXN0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250cmFzdCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImNvbnRyYXN0XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZ3JheXNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmF5c2NhbGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJncmF5c2NhbGVcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnZlcnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVydCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImludmVydFwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG9wYWNpdHkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJvcGFjaXR5XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2F0dXJhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdHVyYXRlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwic2F0dXJhdGVcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzZXBpYSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VwaWEoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzZXBpYVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJsdXIoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJsdXIoIHJhZGl1czogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IEZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYmx1cigke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggcmFkaXVzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBkcm9wU2hhZG93KClgIENTUyBmdW5jdGlvbi5cclxuICogQHBhcmFtIHggSG9yaXpvbnRhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIHkgVmVydGljYWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBjb2xvciBDb2xvciBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gYmx1ciBWYWx1ZSBvZiB0aGUgc2hhZG93J3MgYmx1cnJpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDEgcGl4ZWwuXHJcbiAqIEBwYXJhbSBzcHJlYWQgVmFsdWUgb2YgdGhlIHNoYWRvdydzIHNwcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cclxuICogQHBhcmFtIGluc2V0IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzaGFkb3cgZ29lcyBpbnNpZGUgdGhlIHNoYXBlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBmYWxzZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wU2hhZG93KFxyXG4gICAgeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgIGJsdXI6IEV4dGVuZGVkPENzc0xlbmd0aD4gPSAxLFxyXG4gICAgc3ByZWFkOiBFeHRlbmRlZDxDc3NMZW5ndGg+ID0gMCk6IEZpbHRlclByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHsgeCwgeSwgY29sb3IsIGJsdXIsIHNwcmVhZH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGh1ZS1yb3RhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGh1ZVJvdGF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGh1ZS1yb3RhdGUoJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHNoYXBlc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGluc2V0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNldCggb2Zmc2V0OiBFeHRlbmRlZDxPbmVPckJveDxDc3NMZW5ndGg+PiwgcmFkaXVzPzogRXh0ZW5kZWQ8Qm9yZGVyUmFkaXVzX1N0eWxlVHlwZT4pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdGxldCByID0gcmFkaXVzICE9IG51bGwgPyBcInJvdW5kIFwiICsgYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHJhZGl1cykgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBpbnNldCgke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBvZmZzZXQsIFwiIFwiKX0ke3J9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBpcyB1c2VkIHRvIHNwZWNpZnkgYSByYWRpdXMgaW4gW1tjaXJjbGVdXSBhbmQgW1tlbGxpcHNlXV0gZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVSYWRpdXMgPSBFeHRlbmRlZDxDc3NMZW5ndGggfCBcImNsb3Nlc3Qtc2lkZVwiIHwgXCJmYXJ0aGVzdC1zaWRlXCI+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY2lyY2xlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGUoIGNlbnRlcj86IFNoYXBlUmFkaXVzLCBwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IEJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgYyA9ICBjZW50ZXIgIT0gbnVsbCA/IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhjZW50ZXIpIDogXCJcIjtcclxuXHRsZXQgcG9zID0gcG9zaXRpb24gIT0gbnVsbCA/IFwiIGF0IFwiICsgcG9zaXRpb25Ub1N0cmluZyggcG9zaXRpb24pIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgY2lyY2xlKCR7Y30ke3Bvc30pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZWxsaXBzZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzZSggcng/OiBTaGFwZVJhZGl1cywgcnk/OiBTaGFwZVJhZGl1cyxcclxuXHRwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IEJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgcnhzID0gIHJ4ICE9IG51bGwgPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocngpIDogXCJcIjtcclxuICAgIGxldCByeXMgPSAgcnkgIT0gbnVsbCA/IFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ5KSA6IFwiXCI7XHJcblx0bGV0IHBvcyA9IHBvc2l0aW9uICE9IG51bGwgPyBcIiBhdCBcIiArIHBvc2l0aW9uVG9TdHJpbmcoIHBvc2l0aW9uKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gKCkgPT4gYGVsbGlwc2UoJHtyeHN9JHtyeXN9JHtwb3N9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHBvbHlnb24oKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbHlnb24oIHBvaW50T3JSdWxlOiBDc3NQb2ludCB8IEZpbGxSdWxlX1N0eWxlVHlwZSxcclxuXHQuLi5wb2ludHM6IENzc1BvaW50W10pOiBCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzID0gXCJwb2x5Z29uKFwiO1xyXG5cdFx0aWYgKHR5cGVvZiBwb2ludE9yUnVsZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cyArPSBwb2ludE9yUnVsZSArIFwiLFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzICs9IGAke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBwb2ludE9yUnVsZSwgXCIgXCIpfSxgO1xyXG5cclxuXHRcdHMgKz0gcG9pbnRzLm1hcCggcHQgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHB0LCBcIiBcIikpLmpvaW4oXCIsXCIpO1xyXG5cclxuXHRcdHJldHVybiBzICsgXCIpXCI7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmFuc2Zvcm1zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdHJpeCggYTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRkOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHk6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYG1hdHJpeCgke2FycmF5VG9TdHJpbmcoIFthLCBiLCBjLCBkLCB0eCwgdHldLCB1bmRlZmluZWQsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4M2QoXHJcblx0XHRhMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjE6IEV4dGVuZGVkPENzc051bWJlcj4sIGMxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGEyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzI6IEV4dGVuZGVkPENzc051bWJlcj4sIGQyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTM6IEV4dGVuZGVkPENzc051bWJlcj4sIGIzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGM0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHQpOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYG1hdHJpeCgke2FycmF5VG9TdHJpbmcoIFthMSwgYjEsIGMxLCBkMSwgYTIsIGIyLCBjMiwgZDIsIGEzLCBiMywgYzMsIGQzLCBhNCwgYjQsIGM0LCBkNF0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHBlcnNwZWN0aXZlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZSggZDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgcGVyc3BlY3RpdmUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoZCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiBDU1Mgcm90YXRpb24gZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiByb3RhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGEpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWCggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWFwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVZKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVZXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVooIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVpcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTNkKFxyXG5cdHg6IEV4dGVuZGVkPENzc051bWJlcj4sIHk6IEV4dGVuZGVkPENzc051bWJlcj4sIHo6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0YTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHkpLFxyXG5cdFx0Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHopLCBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHJvdGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUoIGN4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBzeT86IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNjYWxlKCR7Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKGN4KX0ke3N5ICE9IG51bGwgPyBcIixcIiArIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gc2NhbGUgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gc2NhbGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVgoIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWFwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWSggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVZXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVaKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVpcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUzZCggc3g6IEV4dGVuZGVkPENzc051bWJlcj4sIHN5OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdHN6OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeCksIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3opXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tldygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tldyggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPiwgYXk/OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXcoJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheCl9JHtheSAhPSBudWxsID8gXCIsXCIgKyBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIFRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WCggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tld1goJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tld1koKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXdZKCBheTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3WCgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZSggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgeT86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHRyYW5zbGF0ZSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh4KX0ke3kgIT0gbnVsbCA/IFwiLFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHkpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIHRyYW5zbGF0ZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWCggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVhcIiwgeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWSggeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVlcIiwgeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWiggejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IFRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVpcIiwgeik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTNkKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LCB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdHo6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuXHRJQ3NzTnVtYmVyTWF0aCwgSUNzc0xlbmd0aE1hdGgsIElDc3NBbmdsZU1hdGgsIElDc3NUaW1lTWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLFxyXG5cdElDc3NGcmVxdWVuY3lNYXRoLCBJQ3NzUGVyY2VudE1hdGgsIEV4dGVuZGVkLCBTdHJpbmdQcm94eSxcclxuXHRVcmxQcm94eSwgQXR0clR5cGVLZXl3b3JkLCBBdHRyVW5pdEtleXdvcmRcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7XHJcblx0Q3NzTnVtYmVyTWF0aCwgQ3NzTGVuZ3RoTWF0aCwgQ3NzQW5nbGVNYXRoLCBDc3NUaW1lTWF0aCwgQ3NzUmVzb2x1dGlvbk1hdGgsXHJcblx0Q3NzRnJlcXVlbmN5TWF0aCwgQ3NzUGVyY2VudE1hdGgsIHZhbHVlVG9TdHJpbmcsIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmdcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7SVZhclJ1bGUsIElDb3VudGVyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge1ZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7c3R5bGVQcm9wVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPG51bWJlcj5gXHJcbiAqIENTUyB0eXBlLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIEphdmFTY3JpcHQgdHlwZSB0aGV5IGFyZVxyXG4gKiBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB3aXRob3V0IGFwcGVuZGluZyBhbnkgdW5pdHMgdG8gdGhlbS5cclxuICovXHJcbmV4cG9ydCBsZXQgTnVtOiBJQ3NzTnVtYmVyTWF0aCA9IG5ldyBDc3NOdW1iZXJNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTGVuIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bGVuZ3RoPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgbGVuZ3RoIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwicHhcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJlbVwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBMZW46IElDc3NMZW5ndGhNYXRoID0gbmV3IENzc0xlbmd0aE1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmdsZSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPGFuZ2xlPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGFuIGFuZ2xlIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiZGVnXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwidHVyblwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBBbmdsZTogSUNzc0FuZ2xlTWF0aCA9IG5ldyBDc3NBbmdsZU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUaW1lIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8dGltZT5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHRpbWUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJtc1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInNcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgVGltZTogSUNzc1RpbWVNYXRoID0gbmV3IENzc1RpbWVNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUmVzb2x1dGlvbiBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSByZXNvbHV0aW9uIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiZHBpXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiZHBjbVwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBSZXNvbHV0aW9uOiBJQ3NzUmVzb2x1dGlvbk1hdGggPSBuZXcgQ3NzUmVzb2x1dGlvbk1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGcmVxdWVuY3kgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBmcmVxdWVuY3kgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJIelwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImtIelwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBGcmVxdWVuY3k6IElDc3NGcmVxdWVuY3lNYXRoID0gbmV3IENzc0ZyZXF1ZW5jeU1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQZXJjZW50IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudGFnZT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIFwiJVwiIHVuaXQgc3VmZml4LlxyXG4gKi9cclxuZXhwb3J0IGxldCBQZXJjZW50OiBJQ3NzUGVyY2VudE1hdGggPSBuZXcgQ3NzUGVyY2VudE1hdGgoKTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gcmF3KClcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgU3RyaW5nUHJveHkgZnVuY3Rpb24gZW5jYXBzdWxhdGluZyB0aGUgZ2l2ZW4gc3RyaW5nLWxpa2UgcGFyYW1ldGVyLiBUaGlzIGZ1bmN0aW9uXHJcbiAqIGFsbG93cyBzcGVjaWZ5aW5nIGFyYml0cmFyeSB0ZXh0IGZvciBwcm9wZXJ0aWVzIHdob3NlIHR5cGUgbm9ybWFsbHkgZG9lc24ndCBhbGxvdyBzdHJpbmdzLlxyXG4gKiBUaGlzIGlzIHVzZWQgYXMgYW4gXCJlc2NhcGUgaGF0Y2hcIiB3aGVuIGEgc3RyaW5nIHZhbHVlIGFscmVhZHkgZXhpc3RzIGFuZCB0aGVyZSBpcyBubyBzZW5zZVxyXG4gKiB0byBjb252ZXJ0IGl0IHRvIGEgcHJvcGVyIHR5cGUuIFRoaXMgZnVuY3Rpb24gaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3QgYmUgaW52b2tlZCB3aXRoXHJcbiAqIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYXcoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBhbnlbXSk6IFN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0cywgcGFyYW1zLCAodjogYW55KSA9PiB2YWx1ZVRvU3RyaW5nKCB2KSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gdXNldmFyKClcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgU3RyaW5nUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBpbnZvY2F0aW9uIG9mIHRoZSBgdmFyKClgIENTUyBmdW5jdGlvbiBmb3JcclxuICogdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgd2l0aCBvcHRpb25hbCBmYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNldmFyPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCB2YXJPYmo6IElWYXJSdWxlPEs+LCBmYWxsYmFjaz86IFZhclZhbHVlVHlwZTxLPik6IFN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBmYWxsYmFja1xyXG4gICAgICAgID8gYHZhcigtLSR7dmFyT2JqLm5hbWV9LCR7c3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgZmFsbGJhY2ssIHRydWUpfSlgXHJcbiAgICAgICAgOiBgdmFyKC0tJHt2YXJPYmoubmFtZX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyB1cmwoKVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBVcmxQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgdXJsKClgIGZ1bmN0aW9uLiBUaGUgc3RyaW5nIHBhcmFtZXRlclxyXG4gKiB3aWxsIGJlIHdyYXBwZWQgaW4gYSBcInVybCgpXCIgaW52b2NhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmwoIHZhbDogRXh0ZW5kZWQ8c3RyaW5nPik6IFVybFByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gYHVybCgke3ZhbHVlVG9TdHJpbmcodmFsKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb3VudGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBTdHJpbmdQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgY291bnRlcigpYCBmdW5jdGlvbiB3aXRoIGFkZGl0aW9uYWxcclxuICogb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXIoIGNvdW50ZXJPYmo6IEV4dGVuZGVkPElDb3VudGVyUnVsZSB8IHN0cmluZz4sXHJcblx0c3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBTdHJpbmdQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHN0eWxlU3RyaW5nID0gc3R5bGUgPyBgLCR7dmFsdWVUb1N0cmluZyggc3R5bGUpfWAgOiBcIlwiO1xyXG5cdFx0bGV0IGJlZm9yZSA9IHRleHRCZWZvcmUgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHRleHRCZWZvcmUpfVwiYCA6IFwiXCI7XHJcblx0XHRsZXQgYWZ0ZXIgPSB0ZXh0QWZ0ZXIgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHRleHRBZnRlcil9XCJgIDogXCJcIjtcclxuXHRcdHJldHVybiBgJHtiZWZvcmV9IGNvdW50ZXIoJHt2YWx1ZVRvU3RyaW5nKGNvdW50ZXJPYmopfSR7c3R5bGVTdHJpbmd9KSAke2FmdGVyfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgU3RyaW5nUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYGNvdW50ZXIoKWAgZnVuY3Rpb24gd2l0aCBhZGRpdGlvbmFsXHJcbiAqIG9wdGlvbmFsIHN0cmluZ3MgYWRkZWQgYWZ0ZXIgYW5kL29yIGJlZm9yZSB0aGUgY291bnRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVycyggY291bnRlck9iajogRXh0ZW5kZWQ8SUNvdW50ZXJSdWxlIHwgc3RyaW5nPixcclxuXHRzZXBhcmF0b3I6IEV4dGVuZGVkPHN0cmluZz4sIHN0eWxlPzogRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+LFxyXG5cdHRleHRBZnRlcj86IEV4dGVuZGVkPHN0cmluZz4sIHRleHRCZWZvcmU/OiBFeHRlbmRlZDxzdHJpbmc+KTogU3RyaW5nUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzZXBTdHJpbmcgPSBzZXBhcmF0b3IgPyBgXCIke3ZhbHVlVG9TdHJpbmcoIHNlcGFyYXRvcil9XCJgIDogYFwiLlwiYDtcclxuXHRcdGxldCBzdHlsZVN0cmluZyA9IHN0eWxlID8gYCwke3ZhbHVlVG9TdHJpbmcoIHN0eWxlKX1gIDogXCJcIjtcclxuXHRcdGxldCBiZWZvcmUgPSB0ZXh0QmVmb3JlID8gYFwiJHt2YWx1ZVRvU3RyaW5nKCB0ZXh0QmVmb3JlKX1cImAgOiBcIlwiO1xyXG5cdFx0bGV0IGFmdGVyID0gdGV4dEFmdGVyID8gYFwiJHt2YWx1ZVRvU3RyaW5nKCB0ZXh0QWZ0ZXIpfVwiYCA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYCR7YmVmb3JlfSBjb3VudGVycygke3ZhbHVlVG9TdHJpbmcoY291bnRlck9iail9LCR7c2VwU3RyaW5nfSR7c3R5bGVTdHJpbmd9KSAke2FmdGVyfWA7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBhdHRyKClcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBBdHRyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYXR0cigpYCBDU1MgZnVuY3Rpb24uIEl0IHJldHVybnMgU3RyaW5nUHJvcHh5XHJcbiAqIGFuZCB0aGVvcmV0aWNhbGx5IGNhbiBiZSB1c2VkIGluIGFueSBzdHlsZSBwcm9wZXJ0eTsgaG93ZXZlciwgaXRzIHVzZSBieSBicm93c2VycyBpcyBjdXJyZW50bHlcclxuICogbGltaXRlZCB0byB0aGUgYGNvbnRlbnRgIHByb3BlcnR5LiBBbHNvIG5vIGJyb3dzZXIgY3VycmVudGx5IHN1cHBvcnQgdHlwZSwgdW5pdHMgb3IgZmFsbGJhY2tcclxuICogdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dHIoIGF0dHJOYW1lOiBFeHRlbmRlZDxzdHJpbmc+LCB0eXBlT3JVbml0PzogRXh0ZW5kZWQ8QXR0clR5cGVLZXl3b3JkIHwgQXR0clVuaXRLZXl3b3JkPixcclxuXHRmYWxsYmFjaz86IEV4dGVuZGVkPHN0cmluZz4pOiBTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGF0dHIoJHthdHRyTmFtZX0ke3R5cGVPclVuaXQgPyBcIiBcIiArIHR5cGVPclVuaXQgOiBcIlwifSR7ZmFsbGJhY2sgPyBcIixcIiArIGZhbGxiYWNrIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jc3NcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0NvbG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ltYWdlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9VdGlsQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9Db2xvckFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSW1hZ2VBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N0eWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9SdWxlQVBJXCI7XHJcbiIsImltcG9ydCB7SUFuaW1hdGlvblJ1bGUsIEFuaW1hdGlvbkZyYW1lLCBBbmltYXRpb25XYXlwb2ludCwgQW5pbWF0aW9uU3R5bGVzZXQsIElBbmltYXRpb25GcmFtZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXN9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQgeyB2YWx1ZVRvU3RyaW5nIH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25SdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBrZXlmcmFtZXMgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmcmFtZXM/OiBBbmltYXRpb25GcmFtZVtdLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdGlmIChmcmFtZXMpXHJcblx0XHRcdHRoaXMuZnJhbWVSdWxlcyA9IGZyYW1lcy5tYXAoIGZyYW1lID0+IG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoIGZyYW1lWzBdLCBmcmFtZVsxXSkpO1xyXG5cclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoICBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG5cdFx0Zm9yKCBsZXQga2V5ZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0a2V5ZnJhbWVSdWxlLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBbmltYXRpb25SdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQW5pbWF0aW9uUnVsZSh1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHRcdGlmICh0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdG5ld1J1bGUuZnJhbWVSdWxlcyA9IHRoaXMuZnJhbWVSdWxlcy5tYXAoIGZyYW1lUnVsZSA9PiBmcmFtZVJ1bGUuY2xvbmUoKSBhcyBBbmltYXRpb25GcmFtZVJ1bGUpO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgQGtleWZyYW1lcyAke3RoaXMubmFtZX0ge31gLCBwYXJlbnQpIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdFx0bGV0IGNzc0tleWZyYW1lc1J1bGUgPSB0aGlzLmNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHRcdGZvciggbGV0IGZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y3NzS2V5ZnJhbWVzUnVsZS5hcHBlbmRSdWxlKCBmcmFtZVJ1bGUudG9Dc3NTdHJpbmcoKSlcclxuXHRcdFx0XHRsZXQgY3NzUnVsZSA9IGNzc0tleWZyYW1lc1J1bGUuY3NzUnVsZXMuaXRlbSggIGNzc0tleWZyYW1lc1J1bGUuY3NzUnVsZXMubGVuZ3RoIC0gMSk7XHJcblx0XHRcdFx0aWYgKGNzc1J1bGUpXHJcblx0XHRcdFx0XHRmcmFtZVJ1bGUuY3NzS2V5ZnJhbWVSdWxlID0gY3NzUnVsZSBhcyBDU1NLZXlmcmFtZVJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goeClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwiQ2Fubm90IGFkZCBDU1Mga2V5ZnJhbWUgcnVsZVwiLCB4KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gY29udmVydCBhbiBvYmplY3QgdG8gYSBzdHJpbmcuIEFuaW1hdGlvbiBydWxlIHJldHVybnMgaXRzIG5hbWUuXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0tleWZyYW1lc1J1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIExpc3Qgb2Ygc3R5bGUgcnVsZXMgcmVwcmVzZW50aW5nIGFuaW1hdGlvbiBmcmFtZXMgKi9cclxuXHRwdWJsaWMgZnJhbWVSdWxlczogQW5pbWF0aW9uRnJhbWVSdWxlW107XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBrZXlmcmFtZSBjbGF1c2UgaW4gdGhlIGFuaW1hdGlvbiBydWxlLlxyXG4gKi9cclxuY2xhc3MgQW5pbWF0aW9uRnJhbWVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUFuaW1hdGlvbkZyYW1lUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQsIHN0eWxlc2V0PzogQW5pbWF0aW9uU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlc2V0KTtcclxuXHRcdHRoaXMud2F5cG9pbnQgPSB3YXlwb2ludDtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBBbmltYXRpb25GcmFtZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSggdGhpcy53YXlwb2ludCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyggdGhpcy53YXlwb2ludCwge1xyXG5cdFx0XHRmcm9tTnVtYmVyOiB2ID0+IHYgKyBcIiVcIixcclxuXHRcdFx0YXJyYXlJdGVtRnVuYzogdiA9PiB2YWx1ZVRvU3RyaW5nKCB2LCB7IGZyb21OdW1iZXI6IHYgPT4gdiArIFwiJVwiIH0pLFxyXG5cdFx0XHRhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvKiogSWRlbnRpZmllciBvZiB0aGUgd2F5cG9pbnQgKi9cclxuXHRwdWJsaWMgd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50O1xyXG5cclxuXHQvKiogU09NIGtleWZyYW1lIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzS2V5ZnJhbWVSdWxlOiBDU1NLZXlmcmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJQ291bnRlclJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Y3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ291bnRlclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgY291bnRlciBkZWZpbml0aW9uLiBVc2UgdGhpcyBydWxlIHRvIGNyZWF0ZVxyXG4gKiBjb3VudGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZCBpbiBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGVcclxuICogcHJvcGVydGllcy4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgY291bnRlcnMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZVxyXG4gKiBjb3VudGVyIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvdW50ZXJSdWxlIGltcGxlbWVudHMgSUNvdW50ZXJSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDb3VudGVyUnVsZSlcclxuXHR7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblx0XHRbdGhpcy5uYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IENvdW50ZXJSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDb3VudGVyUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgY291bnRlciBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGNvdW50ZXIgKi9cclxuXHRwdWJsaWMgZ2V0IGNvdW50ZXJOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm5hbWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ291bnRlclJ1bGU7XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzIGFuZCB3aGljaCBoYXNlIHRoZSBDU1NTdHlsZVJ1bGUgdGhyb3VnaCB3aGljaFxyXG5cdC8vIHRoZSB2YWx1ZSBvZiB0aGlzIGN1c3RvbSB2YXJpYWJsZSBjYW4gYmUgY2hhbmdlZC5cclxuXHRwdWJsaWMgY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdHlsZURlZmluaXRpb25DbGFzcywgU3R5bGVEZWZpbml0aW9uLCBJR3JvdXBSdWxlLCBJTWVkaWFSdWxlLCBJU3VwcG9ydHNSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2dldENvbnRhaW5lckZyb21EZWZpbml0aW9uLCBwcm9jZXNzSW5zdGFuY2VPckNsYXNzfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuaW1wb3J0IHtJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZX0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyb3VwUnVsZSBjbGFzcyBzZXJ2ZXMgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgZ3JvdXBpbmcgQ1NTIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyb3VwUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZU9yQ2xhc3MgPSBpbnN0YW5jZU9yQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCB0aGlzLmluc3RhbmNlT3JDbGFzcywgb3duZXIuZ2V0RGVmaW5pdGlvbkluc3RhbmNlKCkpO1xyXG5cdFx0aWYgKCFpbnN0YW5jZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMucnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21EZWZpbml0aW9uKCBpbnN0YW5jZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ydWxlQ29udGFpbmVyKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5nZXRHcm91cFNlbGVjdG9yVGV4dCgpO1xyXG5cdFx0aWYgKCFzZWxlY3RvcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgJHtzZWxlY3Rvcn0ge31gLCBwYXJlbnQpIGFzIENTU0dyb3VwaW5nUnVsZTtcclxuXHJcblx0XHQvLyBpbnNlcnQgc3ViLXJ1bGVzXHJcblx0XHRpZiAodGhpcy5jc3NSdWxlKVxyXG5cdFx0XHR0aGlzLnJ1bGVDb250YWluZXIuaW5zZXJ0UnVsZXMoIHRoaXMuY3NzUnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGw7XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlcnMgdGhlIENTUyBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyKCk7XHJcblxyXG5cdFx0Ly8gY2xlYXIgc3ViLXJ1bGVzXHJcblx0XHRpZiAodGhpcy5ydWxlQ29udGFpbmVyKVxyXG5cdFx0XHR0aGlzLnJ1bGVDb250YWluZXIuY2xlYXJSdWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGNsYXNzIHRoYXQgZGVmaW5lcyBydWxlcyB1bmRlciB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzcztcclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRwcm90ZWN0ZWQgaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgZm9yIHRoZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBydWxlQ29udGFpbmVyOiBJUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHB1YmxpYyBnZXQgcnVsZXMoKTogVCB7IHJldHVybiB0aGlzLmluc3RhbmNlIGFzIFQ7IH1cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0dyb3VwaW5nUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdXBwb3J0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQHN1cHBvcnRzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3VwcG9ydHNSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb248Tz4sIE8gZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSVN1cHBvcnRzUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeTogU3VwcG9ydHNRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQsTz4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIGluc3RhbmNlT3JDbGFzcyk7XHJcblxyXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogU3VwcG9ydHNSdWxlPFQsTz5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFN1cHBvcnRzUnVsZTxULE8+KCB0aGlzLnF1ZXJ5LCB0aGlzLmluc3RhbmNlT3JDbGFzcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHQvLyBjb252ZXJ0IHRoZSBxdWVyeSB0byBpdHMgc3RyaW5nIGZvcm1cclxuXHRcdGxldCBxdWVyeVN0cmluZyA9IHN1cHBvcnRzUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSk7XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHF1ZXJ5IGlzIHN1cHBvcnRlZCBhbmQgaWYgaXQgaXMgbm90LCBkb24ndCBpbnNlcnQgdGhlIHJ1bGVcclxuXHRcdHJldHVybiBDU1Muc3VwcG9ydHMoIHF1ZXJ5U3RyaW5nKSA/IGBAc3VwcG9ydHMgJHtxdWVyeVN0cmluZ31gIDogbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1N1cHBvcnRzUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIHN1cHBvcnQgcXVlcnkgZm9yIHRoaXMgcnVsZSBpbiBhIHN0cmluZyBmb3JtLlxyXG5cdHB1YmxpYyBxdWVyeTogU3VwcG9ydHNRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVkaWFSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb248Tz4sIE8gZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSU1lZGlhUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQsTz4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIGluc3RhbmNlT3JDbGFzcyk7XHJcblxyXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogTWVkaWFSdWxlPFQsTz5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IE1lZGlhUnVsZTxULE8+KCB0aGlzLnF1ZXJ5LCB0aGlzLmluc3RhbmNlT3JDbGFzcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSB0eXBlb2YgdGhpcy5xdWVyeSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMucXVlcnkgOiBtZWRpYVF1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpO1xyXG5cdFx0cmV0dXJuIGBAbWVkaWEgJHtxdWVyeVN0cmluZ31gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTTWVkaWFSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gbWVkaWEgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJRm9udEZhY2VSdWxlLCBJSW1wb3J0UnVsZSwgSVBhZ2VSdWxlLCBJTmFtZXNwYWNlUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7SUZvbnRGYWNlfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIlxyXG5pbXBvcnQge2ZvbnRGYWNlVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VGdW5jc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnksIFN0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdXBwb3J0c1F1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge21lZGlhUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVzXCI7XHJcbmltcG9ydCB7UGFnZVBzZXVkb0NsYXNzfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGb250RmFjZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQGZvbnQtZmFjZSBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb250RmFjZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUZvbnRGYWNlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmb250ZmFjZTogSUZvbnRGYWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5mb250ZmFjZSA9IGZvbnRmYWNlO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEZvbnRGYWNlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgRm9udEZhY2VSdWxlKCB0aGlzLmZvbnRmYWNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAZm9udC1mYWNlICR7Zm9udEZhY2VUb1N0cmluZyggdGhpcy5mb250ZmFjZSl9YCxcclxuXHRcdFx0cGFyZW50KSBhcyBDU1NGb250RmFjZVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTRm9udEZhY2VSdWxlO1xyXG5cclxuXHQvLyBPYmplY3QgZGVmaW5pbmcgZm9udC1mYWNlIHByb3BlcnRpZXMuXHJcblx0cHVibGljIGZvbnRmYWNlOiBJRm9udEZhY2U7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJbXBvcnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW1wb3J0UnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJSW1wb3J0UnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB1cmw6IHN0cmluZywgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnksIHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy51cmwgPSB1cmw7XHJcblx0XHR0aGlzLm1lZGlhUXVlcnkgPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0dGhpcy5zdXBwb3J0c1F1ZXJ5ID0gc3VwcG9ydHNRdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEltcG9ydFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEltcG9ydFJ1bGUoIHRoaXMudXJsLCB0aGlzLm1lZGlhUXVlcnksIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCB1cmw7XHJcblx0XHRpZiAoIXRoaXMudXJsKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmICh0aGlzLnVybC5zdGFydHNXaXRoKFwidXJsXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJcXFwiXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCInXCIpKVxyXG5cdFx0XHR1cmwgPSB0aGlzLnVybDtcclxuXHRcdGVsc2VcclxuXHRcdFx0dXJsID0gYHVybCgke3RoaXMudXJsfSlgO1xyXG5cclxuXHRcdGxldCBzdXBwb3J0c1F1ZXJ5U3RyaW5nID0gIXRoaXMuc3VwcG9ydHNRdWVyeVxyXG5cdFx0XHQ/IFwiXCJcclxuXHRcdFx0OiB0eXBlb2YgdGhpcy5zdXBwb3J0c1F1ZXJ5ID09PSBcInN0cmluZ1wiXHJcblx0XHRcdFx0PyB0aGlzLnN1cHBvcnRzUXVlcnlcclxuXHRcdFx0XHQ6IHN1cHBvcnRzUXVlcnlUb1N0cmluZyggdGhpcy5zdXBwb3J0c1F1ZXJ5KTtcclxuXHJcblx0XHRpZiAoc3VwcG9ydHNRdWVyeVN0cmluZyAmJiAhc3VwcG9ydHNRdWVyeVN0cmluZy5zdGFydHNXaXRoKCBcInN1cHBvcnRzXCIpKVxyXG5cdFx0c3VwcG9ydHNRdWVyeVN0cmluZyA9IGBzdXBwb3J0cyggJHtzdXBwb3J0c1F1ZXJ5U3RyaW5nfSApYDtcclxuXHJcblx0XHRsZXQgbWVkaWFRdWVyeVN0cmluZyA9ICF0aGlzLm1lZGlhUXVlcnlcclxuXHRcdFx0PyBcIlwiXHJcblx0XHRcdDogdHlwZW9mIHRoaXMubWVkaWFRdWVyeSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdD8gdGhpcy5tZWRpYVF1ZXJ5XHJcblx0XHRcdFx0OiBtZWRpYVF1ZXJ5VG9TdHJpbmcoIHRoaXMubWVkaWFRdWVyeSk7XHJcblx0XHRcdFx0XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBpbXBvcnQgJHt1cmx9ICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gJHttZWRpYVF1ZXJ5U3RyaW5nfWAsXHJcblx0XHRcdHBhcmVudCkgYXMgQ1NTSW1wb3J0UnVsZTtcclxufVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gaW1wb3J0IHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTSW1wb3J0UnVsZTtcclxuXHJcblx0Ly8gVVJMIHRvIGltcG9ydCBmcm9tLlxyXG5cdHB1YmxpYyB1cmw6IHN0cmluZztcclxuXHJcblx0Ly8gT3B0aW9uYWwgbWVkaWEgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHN1cHBvcnRzIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFnZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFnZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJUGFnZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMucHNldWRvQ2xhc3MgPSBwc2V1ZG9DbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IFBhZ2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBQYWdlUnVsZSggdGhpcy5wc2V1ZG9DbGFzcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgQHBhZ2UgJHt0aGlzLnBzZXVkb0NsYXNzID8gdGhpcy5wc2V1ZG9DbGFzcyA6IFwiXCJ9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBwYWdlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUGFnZVJ1bGU7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cHVibGljIHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOYW1lc3BhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmFtZXNwYWNlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJTmFtZXNwYWNlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBuYW1lc3BhY2U6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XHJcblx0XHR0aGlzLnByZWZpeCA9IHByZWZpeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE5hbWVzcGFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIHRoaXMubmFtZXNwYWNlLCB0aGlzLnByZWZpeCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5uYW1lc3BhY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgdXJsID0gdGhpcy5uYW1lc3BhY2Uuc3RhcnRzV2l0aCggXCJ1cmwoXCIpID8gdGhpcy5uYW1lc3BhY2UgOiBgdXJsKCR7dGhpcy5uYW1lc3BhY2V9KWA7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBuYW1lc3BhY2UgJHt0aGlzLnByZWZpeCA/IHRoaXMucHJlZml4IDogXCJcIn0gJHt1cmx9YCxcclxuXHRcdFx0cGFyZW50KSBhcyBDU1NOYW1lc3BhY2VSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU05hbWVzcGFjZVJ1bGU7XHJcblxyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVJ1bGUsIElOYW1lZEVudGl0eSwgU3R5bGVEZWZpbml0aW9ufSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGFjY29tcGFuaWVzIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGhcclxuICogYSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVDb250YWluZXJcclxue1xyXG5cdC8qKiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzICovXHJcblx0Z2V0RGVmaW5pdGlvbkluc3RhbmNlKCk6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0LyoqIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLiAqL1xyXG5cdGluc2VydFJ1bGVzKCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkO1xyXG5cclxuXHQvKiogQ2xlYXJzIGFsbCBDU1MgcnVsZSBvYmplY3RzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuICovXHJcblx0Y2xlYXJSdWxlcygpOiB2b2lkO1xyXG5cclxuXHQvKiogU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS4gKi9cclxuXHRzZXRDdXN0b21WYXJWYWx1ZSggbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IHRoYXQgXCJvd25zXCJcclxuICogdGhlIHJ1bGVzIHVuZGVyIHRoaXMgY29udGFpbmVyLiBJbiBwYXJ0aWN1bGFyLCB0aGUgb3duZXIncyBqb2IgaXMgdG8gZ2VuZXJhdGUgXCJzY29wZWRcIiB1bmlxdWVcclxuICogbmFtZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUb3BMZXZlbFJ1bGVDb250YWluZXIgZXh0ZW5kcyBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIEdlbmVyYXRlcyBhIG5hbWUsIHdoaWNoIHdpbGwgYmUgdW5pcXVlIGluIHRoaXMgc3R5bGVzaGVldCAqL1xyXG5cdGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHJ1bGVzLiBBcyBhIHBhcmVudCBvZiBSdWxlQ29udGFpbmVyLCB0aGUgUnVsZVxyXG4gKiBjbGFzcyBpcyBhbHNvIGFuIGFuY2VzdG9yIGZvciBTdHlsZXNoZWV0OyBob3dldmVyLCBtb3N0IG9mIGl0cyB0aGUgZmllbGRzIGFyZSB1bmRlZmluZWQgaW5cclxuICogdGUgU3R5bGVzaGVldCBpbnN0YW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUnVsZSBpbXBsZW1lbnRzIElSdWxlXHJcbntcclxuXHQvLyBQcm9jZXNzZXMgdGhlIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLm93bmVyID0gb3duZXI7XHJcblx0XHR0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogUnVsZTtcclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0Ly8gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MsIGlzIGFjdGl2YXRlZC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkIHt9XHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB0byB3aGljaFxyXG5cdC8vIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBkZWFjdGl2YXRlZC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7IHRoaXMuY3NzUnVsZSA9IG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoZSBnaXZlbiBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIHN0YXRpYyBhZGRSdWxlVG9ET00oIHJ1bGVUZXh0OiBzdHJpbmcsIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IENTU1J1bGUgfCBudWxsXHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdGxldCBpbmRleCA9IHBhcmVudC5pbnNlcnRSdWxlKCBydWxlVGV4dCwgcGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblx0XHRcdHJldHVybiBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIHgpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBDYW5ub3QgYWRkIENTUyBydWxlICcke3J1bGVUZXh0fSdgLCB4KVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU3R5bGVzaGVldCB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncy4gVGhpcyBpcyBcInRoaXNcIiBmb3IgU3R5bGVzaGVldC5cclxuXHRwdWJsaWMgb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBpc1xyXG5cdC8vIG51bGwgZm9yIFN0eWxlc2hlZXQuXHJcblx0cHVibGljIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHQvLyBDU1NSdWxlLWRlcml2ZWQgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFjdHVhbGwgQ1NTIHJ1bGUgaW5zZXJ0ZWQgaW50b1xyXG5cdC8vIHRoZSBzdHlsZXMgc2hlZXQgb3IgdGhlIHBhcmVudCBydWxlLiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgU3R5bGVzaGVldCBvYmplY3RzLlxyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBzY29wZWQgbmFtZXMgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVzKCBvd25lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSxcclxuXHRjc3NQcmVmaXg/OiBzdHJpbmcpOiBbc3RyaW5nLHN0cmluZ11cclxue1xyXG5cdGlmICghcnVsZU5hbWUgJiYgIW5hbWVPdmVycmlkZSlcclxuXHRcdHJldHVybiBbXCJcIiwgXCJcIl07XHJcblxyXG5cdGxldCBuYW1lID0gIW5hbWVPdmVycmlkZVxyXG5cdFx0PyBvd25lci5nZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWUhKVxyXG5cdFx0OiB0eXBlb2YgbmFtZU92ZXJyaWRlID09PSBcInN0cmluZ1wiXHJcblx0XHRcdD8gbmFtZU92ZXJyaWRlXHJcblx0XHRcdDogbmFtZU92ZXJyaWRlLm5hbWU7XHJcblxyXG5cdHJldHVybiAhY3NzUHJlZml4XHJcblx0XHQ/IFtuYW1lLG5hbWVdXHJcblx0XHQ6IG5hbWUuc3RhcnRzV2l0aCggY3NzUHJlZml4KVxyXG5cdFx0XHQ/IFtuYW1lLnN1YnN0ciggY3NzUHJlZml4Lmxlbmd0aCksIG5hbWVdXHJcblx0XHRcdDogW25hbWUsIGNzc1ByZWZpeCArIG5hbWVdO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U3R5bGVEZWZpbml0aW9uLCBJU3R5bGVEZWZpbml0aW9uQ2xhc3N9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4vVmFyUnVsZVwiXHJcbmltcG9ydCB7Q291bnRlclJ1bGV9IGZyb20gXCIuL0NvdW50ZXJSdWxlc1wiO1xyXG5pbXBvcnQge0ltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGV9IGZyb20gXCIuL01pc2NSdWxlc1wiXHJcblxyXG5cclxuXHJcbi8vIERlZmluZSBzeW1ib2xzIHRoYXQgYXJlIHVzZWQgZm9yIGtlZXBpbmcgaW1wb3J0YW50IGluZm9ybWF0aW9uIG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uXHJcbi8vIGluc3RhbmNlcyB0aGF0IHdlIGRvbid0IHdhbnQgdG8gYmUgdmlzaWJsZSB0byBkZXZlbG9wZXJzLlxyXG5cclxuLyoqIFByb3BlcnR5IG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHBvaW50aW5nIHRvIHRoZSBzaW5nbHRvbiBpbnN0YW5jZS4gKi9cclxuY29uc3Qgc3ltSW5zdGFuY2UgPSBTeW1ib2woXCJkZWZpbml0aW9uXCIpO1xyXG5cclxuLyoqXHJcbiAqIFByb3BlcnR5IG9uIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIHBvaW50aW5nIHRvIHRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCB0aGF0IGlzXHJcbiAqIHJlc3BvbnNpYmxlIGZvciBwcm9jZXNzaW5nIHJ1bGVzLlxyXG4gKi9cclxuY29uc3Qgc3ltUnVsZUNvbnRhaW5lciA9IFN5bWJvbChcInJ1bGVDb250YWluZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZUNvbnRhaW5lciBjbGFzcyBpcyBhIHNoYWRvdyBzdHJ1Y3R1cmUgdGhhdCBhY2NvbXBhbmllcyBldmVyeSBwcm9jZXNzZWQgc3R5bGUgZGVmaW5pdGlvblxyXG4gKiBvYmplY3QuIFNpbmNlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyBpcyBhbiBleHBvcnRlZCBjbGFzcyB2aXNpYmxlIHRvIGRldmVsb3BlcnMsIHdlIGRvbid0IHdhbnRcclxuICogdG8gaGF2ZSBhIGxvdCBvZiBmdW5jdGlvbmFsaXR5IGluIGl0LiBUaGUgUnVsZUNvbnRhaW5lciBvYmplY3QgaXMgbGlua2VkIHRvIHRoZSBTdHlsZURlZmluaXRpb25cclxuICogb2JqZWN0IHZpYSB0aGUgW3N5bVJ1bGVDb250YWluZXJdIHN5bWJvbC4gSXQgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBwYXJzaW5nIHJ1bGVcclxuICogZGVmaW5pdGlvbnMsIG5hbWUgYXNzaWdubWVudCBhbmQgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcbiAqL1xyXG5jbGFzcyBSdWxlQ29udGFpbmVyIGltcGxlbWVudHMgSVRvcExldmVsUnVsZUNvbnRhaW5lclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIG5hbWU6IHN0cmluZywgZW1iZWRkaW5nQ29udGFpbmVyPzogUnVsZUNvbnRhaW5lcilcclxuXHR7XHJcblx0XHR0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5lbWJlZGRpbmdDb250YWluZXIgPSBlbWJlZGRpbmdDb250YWluZXI7XHJcblxyXG5cdFx0dGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvciBhcyBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcblx0XHR0aGlzLm93bmVyID0gaW5zdGFuY2Uub3duZXI7XHJcblxyXG5cdFx0dGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPSAwO1xyXG5cdFx0dGhpcy5kb21TdHlsZUVsbSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5wcm9jZXNzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBjcmVhdGVzIG5hbWVzIGZvciBjbGFzc2VzLFxyXG5cdC8vIElEcywgYW5pbWF0aW9ucyBhbmQgY3VzdG9tIHZhcmlhYmxlcy5cclxuXHRwcml2YXRlIHByb2Nlc3MoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHB1dCByZWZlcmVuY2UgdG8gdGhpcyBjb250YWluZXIgaW4gdGhlIHN5bWJvbCBwcm9wZXJ0eSBvZiB0aGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRcdHRoaXMuaW5zdGFuY2Vbc3ltUnVsZUNvbnRhaW5lcl0gPSB0aGlzO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBvd25lciB0YWtlbiBmcm9tIHRoZSBpbnN0YW5jZSBpcyBudWxsICh0aGF0IGlzLCB0aGlzIGlzIGEgdG9wLWxldmVsIGRlZmluaXRpb24pLFxyXG5cdFx0Ly8gY2hhbmdlIG91ciBvd25lciBwcm9wZXJ0eSB0byBwb2ludCB0byB0aGUgaW5zdGFuY2UgaXRzZWxmXHJcblx0XHRpZiAoIXRoaXMub3duZXIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMub3duZXIgPSB0aGlzLmluc3RhbmNlO1xyXG5cdFx0XHR0aGlzLnRvcExldmVsQ29udGFpbmVyID0gdGhpcztcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy50b3BMZXZlbENvbnRhaW5lciA9IHRoaXMub3duZXJbc3ltUnVsZUNvbnRhaW5lcl07XHJcblxyXG5cdFx0Ly8gaWYgb3VyIGNvbnRhaW5lciBpcyBub3QgdGhlIHRvcC1sZXZlbCBjb250YWluZXIsIHByZWZpeCBvdXIgbmFtZSB3aXRoIHRoZSB1cHBlciBvbmVcclxuXHRcdGlmICghdGhpcy5pc1RvcExldmVsICYmIHRoaXMudG9wTGV2ZWxDb250YWluZXIpXHJcblx0XHRcdHRoaXMubmFtZSA9IGAke3RoaXMudG9wTGV2ZWxDb250YWluZXIubmFtZX1fJHt0aGlzLm5hbWV9YDtcclxuXHJcblx0XHR0aGlzLmltcG9ydHMgPSBbXTtcclxuXHRcdHRoaXMubmFtZXNwYWNlcyA9IFtdO1xyXG5cdFx0dGhpcy52YXJzID0gW107XHJcblx0XHR0aGlzLnJlZnMgPSBbXTtcclxuXHRcdHRoaXMub3RoZXJSdWxlcyA9IFtdO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhlbS5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZSwgdGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgY3JlYXRlcyBuYW1lcyBmb3IgY2xhc3NlcyxcclxuXHQvLyBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSB2YXJpYWJsZXMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHByb3BWYWwgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24pXHJcblx0XHRcdHRoaXMucHJvY2Vzc1JlZmVyZW5jZSggcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBWYXJSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBDb3VudGVyUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzQ291bnRlclJ1bGUoIHByb3BOYW1lLCBwcm9wVmFsKVxyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFJ1bGUpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1J1bGUoIHByb3BOYW1lLCBwcm9wVmFsKTtcclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0XHRcdHRoaXMucHJvY2Vzc0FycmF5KCBwcm9wVmFsKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgcmVmZXJlbmNlIHRvIGFub3RoZXIgc3R5bGUgZGVmaW5pdGlvbiBjcmVhdGVkIGJ5IHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1JlZmVyZW5jZSggcmVmOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIGluc3RhbmNlIGhhcyBub3QgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCwgcHJvY2VzcyBpdCBhbmQgaW5kaWNhdGUgdGhhdCBpdCBpc1xyXG5cdFx0Ly8gZW1iZWRkZWQgaW50byBvdXIgY29udGFpbmVyIGJlY2F1c2Ugb25seSBkZWZpbml0aW9ucyBjcmVhdGVkIHdpdGggdGhlICRlbWJlZCBmdW5jdGlvblxyXG5cdFx0Ly8gYXJlIG5vdCBwcm9jZXNzZWQuXHJcblx0XHRwcm9jZXNzSW5zdGFuY2UoIHJlZiwgdGhpcyk7XHJcblx0XHR0aGlzLnJlZnMucHVzaCggcmVmKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzVmFyUnVsZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHZhck9iajogVmFyUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZXNoZWV0LCB3ZSBjcmVhdGUgYSBjbG9uZSBvZiB0aGVcclxuXHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc3R5bGVzaGVldC5cclxuXHRcdGlmICh2YXJPYmouY29udGFpbmVyKVxyXG5cdFx0XHR2YXJPYmogPSB2YXJPYmouY2xvbmUoKTtcclxuXHJcblx0XHR2YXJPYmoucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cdFx0dGhpcy52YXJzLnB1c2goIHZhck9iaik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBjb3VudGVyIG9iamVjdC5cclxuXHRwcml2YXRlIHByb2Nlc3NDb3VudGVyUnVsZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIGNvdW50ZXI6IENvdW50ZXJSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlc2hlZXQsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0Ly8gcnVsZSBhbmQgYXNzaWduIGl0IHRvIG91ciBzdHlsZXNoZWV0LlxyXG5cdFx0aWYgKGNvdW50ZXIuY29udGFpbmVyKVxyXG5cdFx0XHRjb3VudGVyID0gY291bnRlci5jbG9uZSgpO1xyXG5cclxuXHRcdGNvdW50ZXIucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIFJ1bGUtZGVyaXZlZCBvYmplY3QuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUnVsZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHJ1bGU6IFJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIHJ1bGUgb2JqZWN0IGlzIGFscmVhZHkgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYW5vdGhlciBpbnN0YW5jZSwgd2UgY3JlYXRlIGEgY2xvbmVcclxuXHRcdC8vIG9mIHRoZSBydWxlIGFuZCBzZXQgaXQgdG8gb3VyIGluc3RhbmNlLlxyXG5cdFx0aWYgKHJ1bGUub3duZXIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChwcm9wTmFtZSlcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlW3Byb3BOYW1lXSA9IHJ1bGUgPSBydWxlLmNsb25lKCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIFRPRE86IHN1cHBvcnQgYWxyZWFkeSB1c2VkIHJ1bGVzIGluIGFuIGFycmF5XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cnVsZS5wcm9jZXNzKCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblxyXG5cdFx0aWYgKHJ1bGUgaW5zdGFuY2VvZiBJbXBvcnRSdWxlKVxyXG5cdFx0XHR0aGlzLmltcG9ydHMucHVzaCggcnVsZSk7XHJcblx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgTmFtZXNwYWNlUnVsZSlcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzLnB1c2goIHJ1bGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLm90aGVyUnVsZXMucHVzaCggcnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBydWxlcyBmcm9tIHRoZSBnaXZlbiBhcnJheS5cclxuXHRwcml2YXRlIHByb2Nlc3NBcnJheSggcHJvcFZhbHM6IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcHJvcFZhbHMgfHwgcHJvcFZhbHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aG9zZSB0aGF0IGFyZSBydWxlcy5cclxuXHRcdGZvciggbGV0IHByb3BWYWwgb2YgcHJvcFZhbHMpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1Byb3BlcnR5KCBudWxsLCBwcm9wVmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRwdWJsaWMgZ2V0RGVmaW5pdGlvbkluc3RhbmNlKCk6IFN0eWxlRGVmaW5pdGlvblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBnaXZlbiB2YWx1ZSBmb3IgdGhlIGN1c3RvbSBDU1Mgcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBzZXRDdXN0b21WYXJWYWx1ZSggbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSlcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZhbHVlICE9IG51bGwpXHJcblx0XHRcdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUuc3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsIHZhbHVlLCBpbXBvcnRhbnQgPyBcIiFpbXBvcnRhbnRcIiA6IG51bGwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIG5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZXMgYSBnbG9iYWxseSB1bmlxdWUgQ1NTIG5hbWUgZm9yIHRoZSBnaXZlbiBydWxlIG5hbWUgdW5sZXNzIHRoaXMgcnVsZSBuYW1lIGFscmVhZHlcclxuXHQgKiBleGlzdHMgZWl0aGVyIGluIGEgYmFzZSBjbGFzcyBvciBpbiB0aGUgY2hhaW4gb2YgcGFyZW50IGdyb3VwaW5nIHJ1bGVzLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGlmIHJ1bGUgbmFtZSB3YXMgbm90IHNwZWNpZmllZCwgZ2VuZXJhdGUgaXQgdW5pcXVlbHk7IG90aGVyd2lzZSwgY2hlY2sgd2hldGhlciB3ZVxyXG5cdFx0Ly8gYWxyZWFkeSBoYXZlIHRoaXMgcnVsZSBuYW1lOiBpZiB5ZXMsIHJldHVybiB0aGUgYWxyZWFkeSBhc3NpZ25lZCBuYW1lLiBJZiB3ZSBkaWRuJ3RcclxuXHRcdC8vIGZpbmQgdGhlIG5hbWUsIHRyeSB0byBmaW5kIGl0IGluIHRoZSBiYXNlIGNsYXNzZXMpOyBpZiBub3QgZm91bmQgdGhlcmUsIGdlbmVyYXRlIGl0XHJcblx0XHQvLyB1c2luZyB0aGlzIGNvbnRhaW5lcidzIG5hbWUgYW5kIHRoZSBydWxlIG5hbWUgKG5vdGUgdGhhdCBkZXBlbmRpbmcgb24gdGhlIG1vZGUsIGJvdGhcclxuXHRcdC8vIGNhbiBiZSBnZW5lcmF0ZWQgdW5pcXVlbHkpLlxyXG5cdFx0aWYgKCFydWxlTmFtZSlcclxuXHRcdFx0cmV0dXJuIGdlbmVyYXRlVW5pcXVlTmFtZSgpO1xyXG5cdFx0ZWxzZSBpZiAocnVsZU5hbWUgaW4gdGhpcy5pbnN0YW5jZSAmJiBcIm5hbWVcIiBpbiB0aGlzLmluc3RhbmNlW3J1bGVOYW1lXSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2VbcnVsZU5hbWVdLm5hbWU7XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGZpbmQgb3V0IGlmIHRoZXJlIGlzIGEgcnVsZSB3aXRoIHRoaXMgbmFtZSBkZWZpbmVkIGluIGEgc3R5bGVzaGVldCBpbnN0YW5jZSBjcmVhdGVkIGZvclxyXG5cdFx0XHQvLyBhIGNsYXNzIGZyb20gdGhlIHByb3RvdHlwZSBjaGFpbiBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy5cclxuXHRcdFx0bGV0IGV4aXN0aW5nTmFtZSA9IGZpbmROYW1lRm9yUnVsZUluUHJvdG90eXBlQ2hhaW4oIHRoaXMuZGVmaW5pdGlvbkNsYXNzLCBydWxlTmFtZSk7XHJcblx0XHRcdHJldHVybiBleGlzdGluZ05hbWUgPyBleGlzdGluZ05hbWUgOiBnZW5lcmF0ZU5hbWUoIHRoaXMubmFtZSwgcnVsZU5hbWUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyBhbGwgcnVsZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciB0byBlaXRoZXIgdGhlIHN0eWxlIHNoZWV0IG9yIGdyb3VwaW5nIHJ1bGUuICovXHJcblx0cHVibGljIGluc2VydFJ1bGVzKCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXMgdGhleSBtdXN0IGJlIGJlZm9yZSBvdGhlciBydWxlcy4gSWYgdGhlIHBhcmVudCBpcyBhIGdyb3VwaW5nXHJcblx0XHQvLyBydWxlLCBkb24ndCBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhdCBhbGxcclxuXHRcdGlmIChwYXJlbnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0KVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMgJiYgdGhpcy5uYW1lc3BhY2VzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFjdGl2YXRlIHJlZmVyZW5jZWQgc3R5bGUgZGVmaW5pdGlvbnNcclxuXHRcdGZvciggbGV0IHJlZiBvZiB0aGlzLnJlZnMpXHJcblx0XHRcdHJlZltzeW1SdWxlQ29udGFpbmVyXS5hY3RpdmF0ZSgpO1xyXG5cclxuXHRcdC8vIGlzZXJ0IG91ciBjdXN0b20gdmFyaWFibGVzIGluIGEgXCI6cm9vdFwiIHJ1bGVcclxuXHRcdGlmICh0aGlzLnZhcnMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYDpyb290IHske3RoaXMudmFycy5tYXAoIHZhck9iaiA9PlxyXG5cdFx0XHRcdHZhck9iai50b0Nzc1N0cmluZygpKS5maWx0ZXIoIHYgPT4gdiAhPSBudWxsKS5qb2luKFwiO1wiKX19YCwgcGFyZW50KSBhcyBDU1NTdHlsZVJ1bGU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IGFsbCBvdGhlciBydWxlc1xyXG5cdFx0dGhpcy5vdGhlclJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogQ2xlYXJzIGFsbCBDU1MgcnVsZSBvYmplY3RzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuICovXHJcblx0cHVibGljIGNsZWFyUnVsZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLm93bmVyID09PSB0aGlzLmluc3RhbmNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblxyXG5cdFx0Ly8gZGVhY3RpdmF0ZSBpbXBvcnRlZCBzdHlsZXNoZWV0c1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bVJ1bGVDb250YWluZXJdLmRlYWN0aXZhdGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEluc2VydHMgdGhpcyBzdHlsZXNoZWV0IGludG8gRE9NLiAqL1xyXG5cdHB1YmxpYyBhY3RpdmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCsrdGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDEpXHJcblx0XHR7XHJcblx0XHRcdC8vIG9ubHkgdGhlIHRvcC1sZXZlbCBub3QtZW1iZWRkZWQgc3R5bGUgZGVmaW5pdGlvbnMgY3JlYXRlIHRoZSBgPHN0eWxlPmAgZWxlbWVudFxyXG5cdFx0XHRpZiAodGhpcy5lbWJlZGRpbmdDb250YWluZXIpXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IHRoaXMuZW1iZWRkaW5nQ29udGFpbmVyLmRvbVN0eWxlRWxtO1xyXG5cdFx0XHRlbHNlIGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtLmlkID0gdGhpcy5uYW1lO1xyXG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuZG9tU3R5bGVFbG0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gdGhpcy50b3BMZXZlbENvbnRhaW5lci5kb21TdHlsZUVsbTtcclxuXHJcblx0XHRcdHRoaXMuaW5zZXJ0UnVsZXMoIHRoaXMuZG9tU3R5bGVFbG0hLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGlzIHN0eWxlc2hlZXQgZnJvbSBET00uICovXHJcblx0cHVibGljIGRlYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGd1YXJkIGZyb20gZXh0cmEgZGVhY3RpdmF0ZSBjYWxsc1xyXG5cdFx0aWYgKHRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKC0tdGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2xlYXJSdWxlcygpO1xyXG5cclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmlpdGlvbiBjcmVhdGVzIHRoZSBgPHN0eWxlPmAgZWxlbWVudFxyXG5cdFx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0hLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgY29udGFpbmVyIGlzIGZvciB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24uXHJcblx0cHJpdmF0ZSBnZXQgaXNUb3BMZXZlbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3duZXIgPT09IG51bGwgfHwgdGhpcy5vd25lciA9PT0gdGhpcy5pbnN0YW5jZSB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBwcm9jZXNzZWQuXHJcblx0cHVibGljIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBjcmVhdGVzIGFuIGluc3RhbmNlIG9mLlxyXG5cdHByaXZhdGUgZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3NcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGlzIGNvbnRhaW5lciwgd2hpY2gsIGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgaXMgZWl0aGVyIHRha2VuIGZyb20gdGhlIGNsYXNzXHJcblx0Ly8gZGVmaW5pdGlvbiBuYW1lIG9yIGdlbmVyYXRlZCB1bmlxdWVseS5cclxuXHRwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW4gdGhlIGNoYWluIG9mIGdyb3VwaW5nIHJ1bGVzIHRoYXRcclxuXHQvLyBsZWFkIHRvIHRoaXMgcnVsZSBjb250YWluZXIuIEZvciB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbnMsIHRoaXMgcG9pbnRzIHRvIHRoZSBzYW1lXHJcblx0Ly8gc2luZ2xldG9uIGRlZmluaXRpb24gaW5zdGFuY2UgYXMgdGhlICdkZWZpbml0aW9uJyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIG93bmVyOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRoYXQgYmVsb25ncyB0byB0aGUgb3duZXIgc3R5bGUgZGVmaW50aW9uLiBJZiBvdXIgY29udGFpbmVyIGlzIHRvcC1sZXZlbCxcclxuXHQvLyB0aGlzIHByb3BlcnR5IHBvaW50cyB0byBgdGhpc2AuIE5hbWVzIGZvciBuYW1lZCBydWxlcyBhcmUgY3JlYXRlZCB1c2luZyB0aGlzIGNvbnRhaW5lci5cclxuXHRwcml2YXRlIHRvcExldmVsQ29udGFpbmVyOiBSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBDb250YWluZXIgY29ycmVzcG9uZGluZyB0byB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSB0aGF0IGlzIGVtYmVkZGluZyBvdXIgaW5zdGFuY2VcclxuXHQvLyAodGhhdCBpcywgdGhlIGluc3RhbmNlIGNvcnJlc3BvbmRpbmcgdG8gb3VyIGNvbnRhaW5lcikuIElmIGRlZmluZWQsIHRoaXMgY29udGFpbmVyJ3NcclxuXHQvLyBgPHN0eWxlPmAgZWxlbWVudCBpcyB1c2VkIHRvIGluc2VydCBDU1MgcnVsZXMgaW50byBpbnN0ZWFkIG9mIHRvcExldmVsQ29udGFpbmVyLlxyXG5cdHByaXZhdGUgZW1iZWRkaW5nQ29udGFpbmVyPzogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gTGlzdCBvZiByZWZlcmVuY2VzIHRvIG90aGVyIHN0eWxlIGRlZmluaXRpb25zIGNyZWFlZCB2aWEgdGhlICR1c2UgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSByZWZzOiBTdHlsZURlZmluaXRpb25bXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBAaW1wb3J0IHJ1bGVzXHJcblx0cHJpdmF0ZSBpbXBvcnRzOiBJbXBvcnRSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQG5hbWVzcGFjZSBydWxlc1xyXG5cdHByaXZhdGUgbmFtZXNwYWNlczogTmFtZXNwYWNlUnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIGN1c3RvbSB2YXJpYWJsZSBydWxlcy5cclxuXHRwcml2YXRlIHZhcnM6IFZhclJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBydWxlcyB0aGF0IGFyZSBub3QgaW1wb3J0cywgbmFtZXNwYWNlcywgY3VzdG9tIHZhcnMsIHJlZmVyZW5jZXMgb3IgZ3JvdXBpbmcgcnVsZXMuXHJcblx0cHJpdmF0ZSBvdGhlclJ1bGVzOiBSdWxlW107XHJcblxyXG5cdC8vIFwiOnJvb3RcIiBydWxlIHdoZXJlIGFsbCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciBhcmUgZGVmaW5lZC5cclxuXHRwcml2YXRlIGNzc0N1c3RvbVZhclN0eWxlUnVsZTogQ1NTU3R5bGVSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIGNvdW50IG9mIGFjdGl2YXRpb24gcmVxdWVzdHMuXHJcblx0cHJpdmF0ZSBhY3RpdmF0aW9uUmVmQ291bnQ6IG51bWJlcjtcclxuXHJcblx0Ly8gRE9NIHN0eWxlIGVsZW1udFxyXG5cdHB1YmxpYyBkb21TdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudCB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE5hbWUgZ2VuZXJhdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWFpemVkIG5hbWVzIGZvciBzdHlsZSBlbGVtZW50cyAoY2xhc3MgbmFtZXMsIGFuaW1hdGlvblxyXG4vLyBuYW1lcywgZXRjLilcclxubGV0IHVzZVVuaXF1ZVN0eWxlTmFtZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbi8vIFByZWZpeCB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBzdHlsZSBuYW1lcy4gSWYgdW5kZWZpbmVkLCBhIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsXHJcbi8vIGJlIHVzZWQuXHJcbmxldCB1bmlxdWVTdHlsZU5hbWVzUHJlZml4OiBzdHJpbmcgPSBcIm5cIjtcclxuXHJcbi8vIE5leHQgbnVtYmVyIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdW5pcXVlIGlkZW50aWZpZXJzLlxyXG5sZXQgbmV4dFVuaXF1ZUlEOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIG5hbWUgdG8gdXNlIGZvciB0aGUgZ2l2ZW4gcnVsZSBmcm9tIHRoZSBnaXZlbiBzdHlsZSBzaGVldC5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlTmFtZSggc2hlZXROYW1lOiBzdHJpbmcsIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB1c2VVbmlxdWVTdHlsZU5hbWVzXHJcblx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSggdW5pcXVlU3R5bGVOYW1lc1ByZWZpeClcclxuXHRcdDogYCR7c2hlZXROYW1lfV8ke3J1bGVOYW1lfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBuYW1lLCB3aGljaCBjYW4gYmUgdXNlZCBlaXRoZXIgZm9yIHN0eWxlIGVsZW1lbnQncyBJRCBvciBvciBjbGFzcyxcclxuICogaWRlbnRpZmllciBvciBhbmltYXRpb24gbmFtZS4gTmFtZXMgYXJlIGdlbmVyYXRlZCB1c2luZyBhIHNpbXBsZSBpbmNyZW1lbnRpbmcgbnVtYmVyLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVOYW1lKCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiAocHJlZml4ID8gcHJlZml4IDogdW5pcXVlU3R5bGVOYW1lc1ByZWZpeCkgKyBuZXh0VW5pcXVlSUQrKztcclxufVxyXG5cclxuXHJcblxyXG4vLyBMb29rcyB1cCBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIHByb3RvdHlwZSBjaGFpbiBvZiB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBjbGFzcy4gSWYgZm91bmQgYW5kIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHJ1bGUsIHRoZW4gcmV0dXJucyB0aGUgbmFtZSBhc3NpZ25lZCBmb3IgaXQuXHJcbmZ1bmN0aW9uIGZpbmROYW1lRm9yUnVsZUluUHJvdG90eXBlQ2hhaW4oIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBydWxlTmFtZTogc3RyaW5nKVxyXG57XHJcblx0aWYgKCFkZWZpbml0aW9uQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gbG9vcCBvdmVyIHByb3RvdHlwZXNcclxuXHRsZXQgYmFzZUNsYXNzID0gZGVmaW5pdGlvbkNsYXNzO1xyXG5cdHdoaWxlKCAoYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKSAhPT0gU3R5bGVEZWZpbml0aW9uKVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBiYXNlIGNsYXNzIGFscmVhZHkgaGFzIGFuIGFzc29jaWF0ZWQgaW5zdGFuY2U7IGlmIHllcywgY2hlY2sgd2hldGhlclxyXG5cdFx0Ly8gaXQgaGFzZSBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIHJ1bGUgbmFtZS4gSWYgeWVzLCB0aGVuIHVzZSB0aGlzIHJ1bGUncyBhbHJlYWR5XHJcblx0XHQvLyBnZW5lcmF0ZWQgbmFtZSAoaWYgZXhpc3RzKS5cclxuXHRcdGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgYmFzZUluc3QgPSBiYXNlQ2xhc3Nbc3ltSW5zdGFuY2VdO1xyXG5cdFx0XHRpZiAoYmFzZUluc3QgJiYgcnVsZU5hbWUgaW4gYmFzZUluc3QgJiYgXCJuYW1lXCIgaW4gYmFzZUluc3RbcnVsZU5hbWVdKVxyXG5cdFx0XHRcdHJldHVybiBiYXNlSW5zdFtydWxlTmFtZV0ubmFtZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQcm9jZXNzaW5nIGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgYXNzaWducyBuYW1lcyB0byBpdHMgcnVsZXMuXHJcbiAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdlIGNoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYW4gaW5zdGFuY2UgYWxyZWFkeVxyXG4gKiBjcmVhdGVkIGZvciBpdCBhcyBhIGNsYXNzIHdpbGwgaGF2ZSBvbmx5IGEgc2luZ2xlIGFzc29jaWF0ZWQgaW5zdGFuZSBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXNcclxuICogdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcbiAqIFxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCAoYW4gaW5zdGFuY2Ugb2YgdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcykgdGhlbiB3ZSBjaGVjayB3aGV0aGVyXHJcbiAqIGl0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLiBJZiB5ZXMsIHdlIGp1c3QgcmV0dXJuIGl0IGJhY2s7IGlmIG5vLCB3ZSBhc3NpZ24gbmV3IHVuaXF1ZSBuYW1lc1xyXG4gKiB0byBpdHMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdGFuY2VPckNsYXNzOiBTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsXHJcblx0b3duZXI/OiBTdHlsZURlZmluaXRpb24pOiBTdHlsZURlZmluaXRpb24gfCBudWxsXHJcbntcclxuXHRpZiAoIWluc3RhbmNlT3JDbGFzcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRpZiAoaW5zdGFuY2VPckNsYXNzIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uKVxyXG5cdHtcclxuXHRcdHByb2Nlc3NJbnN0YW5jZSggaW5zdGFuY2VPckNsYXNzKTtcclxuXHRcdHJldHVybiBpbnN0YW5jZU9yQ2xhc3M7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHRoaXMgZGVmaW5pdGlvbiBjbGFzcyBpcyBhbHJlYWR5IGFzc29jaWF0ZWQgd2l0aCBhbiBpbnN0YW5jZVxyXG5cdFx0cmV0dXJuIGluc3RhbmNlT3JDbGFzcy5oYXNPd25Qcm9wZXJ0eShzeW1JbnN0YW5jZSlcclxuXHRcdFx0PyBpbnN0YW5jZU9yQ2xhc3Nbc3ltSW5zdGFuY2VdXHJcblx0XHRcdDogcHJvY2Vzc0NsYXNzKCBpbnN0YW5jZU9yQ2xhc3MsIG93bmVyKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBieSBjcmVhdGluZyBpdHMgaW5zdGFuY2UgYW5kIGFzc29jaWF0aW5nIGFcclxuICogcnVsZSBjb250YWluZXIgb2JqZWN0IHdpdGggaXQuIFRoZSBjbGFzcyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgaW5zdGFuY2UgdXNpbmcgdGhlXHJcbiAqIFN5bWJvbCBwcm9wZXJ0eS4gVGhlIG93bmVyIHBhcmFtZXRlciBpcyBhIHJlZmVyZW5jZSB0byB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmlpdGlvblxyXG4gKiBvYmplY3Qgb3IgbnVsbCBpZiB0aGUgZ2l2ZW4gY2xhc3MgaXMgaXRzZWxmIGEgdG9wLWxldmVsIGNsYXNzICh0aGF0IGlzLCBpcyBub3QgYSBjbGFzc1xyXG4gKiB0aGF0IGRlZmluZXMgcnVsZXMgd2l0aGluIG5lc3RlZCBncm91cGluZyBydWxlcykuXHJcbiAqIEBwYXJhbSBkZWZpbml0aW9uQ2xhc3MgXHJcbiAqIEBwYXJhbSBvd25lciBcclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NDbGFzcyggZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsXHJcblx0b3duZXI/OiBTdHlsZURlZmluaXRpb24pOiBTdHlsZURlZmluaXRpb24gfCBudWxsXHJcbntcclxuXHQvLyBjYWxsIHRoZSAndXNlJyBmdW5jdGlvbiBmb3IgYWxsIHRoZSBiYXNlIGNsYXNzZXMgc28gdGhhdCBydWxlIG5hbWVzIGFyZSBnZW5lcmF0ZWQuIFdlXHJcblx0Ly8gZG9uJ3QgYWN0aXZhdGUgc3R5bGVzIGZvciB0aGVzZSBjbGFzZXMgYmVjYXVzZSBkZXJpdmVkIGNsYXNzZXMgd2lsbCBoYXZlIGFsbCB0aGVcclxuXHQvLyBydWxlcyBmcm9tIGFsbCB0aGUgYmFzZSBjbGFzc2VzIGFzIHRoZWlyIG93biBhbmQgc28gdGhlc2UgcnVsZXMgd2lsbCBiZSBhY3RpdmF0ZWQgYXNcclxuXHQvLyBwYXJ0IG9mIHRoZSBkZXJpdmVkIGNsYXNzLlxyXG5cdGxldCBiYXNlQ2xhc3MgPSBkZWZpbml0aW9uQ2xhc3M7XHJcblx0d2hpbGUoIChiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGJhc2VDbGFzcykpICE9PSBTdHlsZURlZmluaXRpb24pXHJcblx0XHRwcm9jZXNzQ2xhc3MoIGJhc2VDbGFzcywgb3duZXIpO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgdGhlIGluc3RhbmNlIG9mIHRoZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgZGVmaW5pdGlvbkNsYXNzKCBvd25lcik7XHJcblxyXG5cdFx0Ly8gZ2V0IHRoZSBuYW1lIGZvciBvdXIgY29udGFpbmVyXHJcblx0XHRsZXQgbmFtZSA9IHVzZVVuaXF1ZVN0eWxlTmFtZXMgfHwgIWRlZmluaXRpb25DbGFzcy5uYW1lXHJcblx0XHRcdD8gZ2VuZXJhdGVVbmlxdWVOYW1lKClcclxuXHRcdFx0OiBkZWZpbml0aW9uQ2xhc3MubmFtZTtcclxuXHJcblx0XHRuZXcgUnVsZUNvbnRhaW5lciggaW5zdGFuY2UsIG5hbWUpO1xyXG5cdFx0ZGVmaW5pdGlvbkNsYXNzW3N5bUluc3RhbmNlXSA9IGluc3RhbmNlO1xyXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBpbnN0YW50aWF0aW5nIFN0eWxlIERlZmluaXRpb24gQ2xhc3MgJyR7ZGVmaW5pdGlvbkNsYXNzLm5hbWV9J2AsIGVycik7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBkZWZpbml0aW9uIGluc3RhbmNlIGFuZCBhc3NpZ25zIG5hbWVzIHRvIGl0cyBydWxlcy4gSWYgdGhlXHJcbiAqIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLCB3ZSBqdXN0IHJldHVybiBpdCBiYWNrOyBpZiBubywgd2UgYXNzaWduIG5ldyB1bmlxdWUgbmFtZXNcclxuICogdG8gaXRzIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgZW1iZWRkaW5nQ29udGFpbmVyPzogUnVsZUNvbnRhaW5lcik6IHZvaWRcclxue1xyXG5cdC8vIGlmIHRoZSBpbnN0YW5jZSBpcyBhbHJlYWR5IHByb2Nlc3NlZCwganVzdCByZXR1cm4gaXQ7IGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlXHJcblx0Ly8gZW1iZWRkaW5nQ29udGFpbmVyIHBhcmFtZXRlci5cclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGluc3RhbmNlW3N5bVJ1bGVDb250YWluZXJdIGFzIFJ1bGVDb250YWluZXI7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGdldCB0aGUgbmFtZSBmb3Igb3VyIGNvbnRhaW5lclxyXG5cdGxldCBuYW1lID0gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0aWYgKCF1c2VVbmlxdWVTdHlsZU5hbWVzKVxyXG5cdHtcclxuXHRcdGxldCBkZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvcjtcclxuXHRcdGlmIChkZWZpbml0aW9uQ2xhc3MubmFtZSlcclxuXHRcdFx0bmFtZSArPSBcIl9cIiArIGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gY3JlYXRlIGNvbnRhaW5lciAtIHRoaXMgd2lsbCBhc3NvY2lhdGUgdGhlIG5ldyBjb250YWluZXIgd2l0aCB0aGUgaW5zdGFuY2UgYW5kIHByb2Nlc3NcclxuXHQvLyB0aGUgcnVsZXMuXHJcblx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lLCBlbWJlZGRpbmdDb250YWluZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHJ1bGUgY29udGFpbmVyIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRhaW5lckZyb21EZWZpbml0aW9uKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiBSdWxlQ29udGFpbmVyXHJcbntcclxuXHRyZXR1cm4gZGVmaW5pdGlvbiA/IGRlZmluaXRpb25bc3ltUnVsZUNvbnRhaW5lcl0gOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYW5kIGluc2VydHMgYWxsIGl0cyBydWxlcyBpbnRvIERPTS4gSWYgdGhlIGlucHV0IG9iamVjdCBpc1xyXG4gKiBub3QgYSBzdHlsZSBkZWZpbml0aW9uIGJ1dCBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIG9idGFpbiBzdHlsZSBkZWZpbml0aW9uIGJ5IGNhbGxpbmcgdGhlICR1c2VcclxuICogZnVuY3Rpb24uIE5vdGUgdGhhdCBlYWNoIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzXHJcbiAqIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIGluc2VydGVkIHRvIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlclxyXG4gKiBnb2VzIHVwIHRvIDEuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHRsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3MpIGFzIFQ7XHJcblx0aWYgKCFpbnN0YW5jZSlcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGluc3RhbmNlW3N5bVJ1bGVDb250YWluZXJdIGFzIFJ1bGVDb250YWluZXI7XHJcblx0cnVsZUNvbnRhaW5lci5hY3RpdmF0ZSgpO1xyXG5cdHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaCBzdHlsZVxyXG4gKiBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZFxyXG4gKiBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxue1xyXG5cdGlmICghZGVmaW5pdGlvbilcclxuXHRcdHJldHVybjtcclxuXHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBkZWZpbml0aW9uW3N5bVJ1bGVDb250YWluZXJdIGFzIFJ1bGVDb250YWluZXI7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0XHRydWxlQ29udGFpbmVyLmRlYWN0aXZhdGUoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAoc2hvcnQpIHJ1bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBlbmFibGVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVNob3J0TmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0dXNlVW5pcXVlU3R5bGVOYW1lcyA9IGVuYWJsZTtcclxuXHR1bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gcHJlZml4ID8gcHJlZml4IDogXCJuXCI7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJQ3VzdG9tVmFyLCBPbmVPck1hbnl9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7RXh0ZW5kZWRTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuXHRQc2V1ZG9FbnRpdHksIENzc1NlbGVjdG9yLCBQYWdlUHNldWRvQ2xhc3MsIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHByb3BlcnRpZXMgdXNlZCBpbiB0aGUgW1tDb21iaW5lZFN0eWxlc2V0XV0gd2hpY2ggYXJlIHVzZWQgdG8gZGVmaW5lIGRlcGVuZGVudCBydWxlcyAqL1xyXG5leHBvcnQgdHlwZSBTZWxlY3RvckNvbWJpbmF0b3IgPSBcIiZcIiB8IFwiJixcIiB8IFwiJiBcIiB8IFwiJj5cIiB8IFwiJitcIiB8IFwiJn5cIiB8IFwiLCZcIiB8IFwiICZcIiB8IFwiPiZcIiB8IFwiKyZcIiB8IFwifiZcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb21iaW5lZFN0eWxlc2V0IHR5cGUgZXh0ZW5kcyB0aGUgU3R5bGVzZXQgdHlwZSB3aXRoIGNlcnRhaW4gcHJvcGVydGllcyB0aGF0IHByb3ZpZGVcclxuICogYWRkaXRpb25hbCBtZWFuaW5nIHRvIHRoZSBzdHlsZXNldCBhbmQgYWxsb3cgYnVpbGRpbmcgZGVwZW5kZW50IHN0eWxlIHJ1bGVzOlxyXG4gKiAtIFRoZSBgK2AgcHJvcGVydHkgc3BlY2lmaWVzIG9uZSBvciBtb3JlIHBhcmVudCBzdHlsZSBydWxlcy4gVGhpcyBhbGxvd3Mgc3BlY2lmeWluZ1xyXG4gKiAgIHBhcmVudCBydWxlcyB1c2luZyBhIGNvbnZlbmllbnQgc3R5bGUtcHJvcGVydHktbGlrZSBub3RhdGlvbi5cclxuICogLSBQcm9wZXJ0aWVzIHdpdGggcHNldWRvIGNsYXNzIG5hbWVzIChlLmcuIFwiOmhvdmVyXCIpIG9yIHBzZXVkbyBlbGVtZW50IG5hbWVzIChlLmcuIFwiOjphZnRlclwiKS5cclxuICogICBUaGVzZSBwcm9wZXJ0aWVzIGRlZmluZSBhIHN0eWxlc2V0IHRoYXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgc2VsZWN0b3Igb2J0YWluZWQgYnkgdXNpbmdcclxuICogICB0aGUgb3JpZ2luYWwgc3R5bGVzZXQncyBvd25lciBmb2xsb3dlZCBieSB0aGUgZ2l2ZW4gcHNldWRvIGNsYXNzIG9yIHBzZXVkbyBlbGVtZW50LlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBuYW1lcyBvZiBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIChlLmcuIFwiOm50aC1jaGlsZFwiKSBvciBwYXJhbWV0ZXJpemVkXHJcbiAqICAgcHNldWRvIGVsZW1lbnRzIChlLmcuIFwiOjpzbG90dGVkXCIpLiBUaGVzZSBwcm9wZXJ0aWVzIGNvbnRhaW4gYSB0dXBsZSwgd2hlcmUgdGhlIGZpcnN0XHJcbiAqICAgZWxlbWVudCBpcyB0aGUgcGFyYW1ldGVyIGZvciB0aGUgc2VsZWN0b3IgYW5kIHRoZSBzZWNvbmQgZWxlbWVudCBpcyB0aGUgc3R5bGVzZXQuXHJcbiAqICAgVGhlc2UgcHJvcGVydGllcyBkZWZpbmUgYSBzdHlsZXNldCB0aGF0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIHNlbGVjdG9yIG9idGFpbmVkIGJ5IHVzaW5nXHJcbiAqICAgdGhlIG9yaWdpbmFsIHN0eWxlc2V0J3Mgb3duZXIgZm9sbG93ZWQgYnkgdGhlIGdpdmVuIHBzZXVkbyBjbGFzcyBvciBwc2V1ZG8gZWxlbWVudC5cclxuICogLSBQcm9wZXJ0aWVzIHdpdGggdGhlIGFtcGVyc2FuZCBzeW1ib2wgKCcmJykgdGhhdCBjb250YWluIGFycmF5cyBvZiB0d28tZWxlbWVudCB0dXBsZXMgZWFjaFxyXG4gKiAgIGRlZmluaW5nIGEgc2VsZWN0b3IgYW5kIGEgc3R5bGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHNlbGVjdG9yLiBTZWxlY3RvcnMgY2FuIHVzZSB0aGVcclxuICogICBhbXBlcnNhbmQgc3ltYm9sIHRvIHJlZmVyIHRvIHRoZSBwYXJlbnQgc3R5bGUgc2VsZWN0b3IuIElmIHRoZSBhbXBlcnNhbmQgc3ltYm9sIGlzIG5vdCB1c2VkLFxyXG4gKiAgIHRoZSBzZWxlY3RvciB3aWxsIGJlIHNpbXBseSBhcHBlbmRlZCB0byB0aGUgcGFyZW50IHNlbGVjdG9yLlxyXG4gKiBcclxuICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIHN0eWxlIHJ1bGVzIChlLmcuICRjbGFzcykgYWNjZXB0IHRoZSBDb21iaW5lZFN0eWxlc2V0IGFzIGEgcGFyYW1ldGVyLFxyXG4gKiBmb3IgZXhhbXBsZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgTXlTdHlsZXMgZXh0ZW5kcyBjc3MuU3R5bGVEZWZpbml0aW9uXHJcbiAqIHtcclxuICogICAgIGNsYXNzMSA9IGNzcy4kY2xhc3Moe30pXHJcbiAqICAgICBjbGFzczIgPSBjc3MuJGNsYXNzKHtcclxuICogICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICogICAgICAgICBcIjpob3ZlclwiIDogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiIH0sXHJcbiAqICAgICAgICAgXCImXCI6IFtcclxuICogICAgICAgICAgICAgWyBcImxpID4gJlwiLCB7IGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIiB9IF0sXHJcbiAqICAgICAgICAgICAgIFsgdGhpcy5jbGFzczEsIHsgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiIH0gXVxyXG4gKiAgICAgICAgIF1cclxuICogICAgIH0pXHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGlzIHdpbGwgdHJhbnNsYXRlIHRvIHRoZSBmb2xsb3dpbmcgQ1NTIChjbGFzcyBuYW1lIGlzIGF1dG8tZ2VuZXJhdGVkKTpcclxuICogXHJcbiAqIGBgYGNzc1xyXG4gKiAubTEyMyB7IGJhY2tncm91bmRDb2xvcjogd2hpdGU7IH1cclxuICogLm0xMjM6aG92ZXIgeyBiYWNrZ3JvdW5kQ29sb3I6IGdyZXk7IH1cclxuICogbGkgPiAubTEyMyB7IGJhY2tncm91bmRDb2xvcjogeWVsbG93OyB9XHJcbiAqIC5tMTIzLm0xMjIgeyBiYWNrZ3JvdW5kQ29sb3I6IG9yYW5nZTsgfVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIENvbWJpbmVkU3R5bGVzZXQgPSBTdHlsZXNldCAmXHJcblx0eyBcIitcIj86IElTdHlsZVJ1bGUgfCBJU3R5bGVSdWxlW10gfSAmXHJcblx0eyBbSyBpbiBQc2V1ZG9FbnRpdHldPzogQ29tYmluZWRTdHlsZXNldCB9ICZcclxuXHR7IFtLIGluIGtleW9mIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5XT86IFtJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eVtLXSwgQ29tYmluZWRTdHlsZXNldF1bXSB9ICZcclxuXHR7IFtLIGluIFNlbGVjdG9yQ29tYmluYXRvcl0/OiBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW10gfTtcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGUgaW50ZXJmYWNlIGlzIGEgYmFzZSBpbnRlcmZhY2UgdGhhdCBpcyBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlXHJcbntcclxuXHQvKiogU09NIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZFJ1bGUgaW50ZXJmYWNlIGlzIGEgYmFzZSBpbnRlcmZhY2UgaW1wbGVtZW50ZWQgYnkgYWxsIHJ1bGVzIHRoYXQgaGF2ZSBhIG5hbWU7IHRoYXQgaXMsXHJcbiAqIGNsYXNzLCBJRCwga2V5ZnJhbWVzIGFuZCBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0cnVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgZGVwZW5kZW50IHJ1bGVzIG9mIGEgc3R5bGUgcnVsZVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRGVwZW5kZW50UnVsZXMgPVxyXG5cdHsgW0sgaW4gUHNldWRvRW50aXR5XT86IElTdHlsZVJ1bGUgfSAmXHJcblx0eyBbSyBpbiBTZWxlY3RvckNvbWJpbmF0b3JdPzogSVN0eWxlUnVsZVtdIH0gJlxyXG5cdHsgW0sgaW4ga2V5b2YgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHldPzogSVN0eWxlUnVsZVtdIH07XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsaW5nIHJ1bGUgaW4gYSBzdHlsZSBzaGVldC4gU3R5bGUgcnVsZXMgY2FuIGJlIHVzZWRcclxuICogYW55d2hlcmUgd2hlcmUgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgZGVmaW5lZDogY2xhc3MgcnVsZXMsIElEIHJ1bGVzLCBzZWxlY3RvciBydWxlcyxcclxuICoga2V5ZnJhbWVzLCBldGMuIFN0eWxlUnVsZSBkZWZpbmVzIGEgc3R5bGVzZXQgYW5kIGNhbiBvcHRpb25hbGx5IHBvaW50IHRvIG9uZSBvciBtb3JlIHN0eWxlIHJ1bGVzXHJcbiAqIGZyb20gd2hpY2ggaXQgaW5oZXJpdHMuIEEgc3R5bGVzZXQgY29tYmluZXMgYWxsIHRoZSBwcm9wZXJ0aWVzIGZyb20gaXRzIG93biBwcm9wZXJ0eSBibG9jayBhc1xyXG4gKiB3ZWxsIGFzIGZyb20gYWxsIG9mIHN0eWxlIHJ1bGVzIGl0IGluaGVyaXRlcyBmcm9tLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRyZWFkb25seSBzZWxlY3RvclRleHQ6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogT2JqZWN0IGNvbnRhaW5pbmcgZGVwZW5kZW50IHJ1bGVzLiBQcm9wZXJ0eSBuYW1lcyBhcmUgdGFrZW4gZnJvbSBzcGVjaWFsIHByb3BlcnRpZXNcclxuXHQgKiBvZiB0aGUgQ29tYmluZWRTdHlsZXNldC4gVGhpcyBvYmplY3QgYWxsb3dzIGNhbGxlcnMgdG8gYWNjZXNzIGRlcGVuZGVudCBydWxlcyB0byBjaGFuZ2VcclxuXHQgKiBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgcHJvZ3JhbW1hdGljYWxseS5cclxuXHQgKi9cclxuXHRyZWFkb25seSBkZXBlbmRlbnRSdWxlczogRGVwZW5kZW50UnVsZXM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMvcmVtb3ZlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eS4gSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQgb3IgbnVsbCwgdGhlIHByb3BlcnR5XHJcblx0ICogaXMgcmVtb3ZlZCBmcm9tIHRoZSBydWxlJ3Mgc3R5bGVzZXQuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHNldFByb3A8SyBleHRlbmRzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQ+KCBuYW1lOiBLLCB2YWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMvcmVtb3ZlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3Rtb20gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gY3VzdG9tVmFyIElWYXJSdWxlIG9iamVjdCBkZWZpbmluZyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS4gSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQgb3IgbnVsbCwgdGhlIHByb3BlcnR5XHJcblx0ICogaXMgcmVtb3ZlZCBmcm9tIHRoZSBydWxlJ3Mgc3R5bGVzZXQuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHNldEN1c3RvbVByb3A8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIGN1c3RvbVZhcjogSVZhclJ1bGU8Sz4sIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkU3R5bGVSdWxlIGludGVyZmFjZSBjb21iaW5lcyBJU3R5bGVSdWxlIGFuZCBJTmFtZWRFbnRpdHkgaW50ZXJmYWNlcy4gVGhpcyBpcyB1c2VkXHJcbiAqIGZvciBjbGFzcyBhbmQgSUQgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZFN0eWxlUnVsZSBleHRlbmRzIElTdHlsZVJ1bGUsIElOYW1lZEVudGl0eVxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB3aGVyZSB0aGUgc2VsZWN0b3IgaXMgYSBzaW5nbGUgY2xhc3MgbmFtZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzUnVsZSBleHRlbmRzIElOYW1lZFN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGNsYXNzIHByZWZpeGVkIHdpdGggXCIuXCIgKi9cclxuXHRyZWFkb25seSBjc3NDbGFzc05hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJRFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHdoZXJlIHRoZSBzZWxlY3RvciBpcyBhIHNpbmdsZSBlbGVtZW50IElELlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSURSdWxlIGV4dGVuZHMgSU5hbWVkU3R5bGVSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgZWxlbWVudCBJRCBwcmVmaXhlZCB3aXRoIFwiI1wiICovXHJcblx0cmVhZG9ubHkgY3NzSUROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25XYXlwb2ludCB0eXBlIGRlZmluZXMgYSB0eXBlIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgd2F5cG9pbnQgaW4gYW5cclxuICogYW5pbWF0aW9uIHNlcXVlbmNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uV2F5cG9pbnQgPSBPbmVPck1hbnk8XCJmcm9tXCIgfCBcInRvXCIgfCBudW1iZXI+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25TdHlsZXMgdHlwZSBkZWZpbmVzIGEgb2JqZWN0IGNvbnRhaW5pbmcgc3R5bGUgcHJvcGVydGllcyBmb3IgYW4gYW5pbWF0aW9uIGZyYW1lLlxyXG4gKiBTdHlsZXNldHMgZm9yIGtleWZyYW1lcyBhbGxvdyBjdXN0b20gcHJvcGVydGllcyAodmlhIFwiLS1cIikuIEFuaW1hdGlvbiBzdHlsZXNldCBjYW4gZXh0ZW5kXHJcbiAqIG90aGVyIHN0eWxlIHJ1bGVzOyBob3dldmVyLCBhbnkgZGVwZW5kZW50IHJ1bGVzIHdpbGwgYmUgaWdub3JlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblN0eWxlc2V0ID0gU3R5bGVzZXQgJiB7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZSB0eXBlIGRlZmluZXMgYSBzaW5nbGUga2V5ZnJhbWUgd2l0aGluIGEgQGtleWZyYW1lcyBydWxlLlxyXG4gKiBUaGUgd2F5cG9pbnQgY2FuIGJlIHNwZWNpZmllZCBhcyBcImZyb21cIiBvciBcInRvXCIgc3RyaW5ncyBvciBhcyBhIG51bWJlciAwIHRvIDEwMCwgd2hpY2ggd2lsbCBiZVxyXG4gKiB1c2VkIGFzIGEgcGVyY2VudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZyYW1lID0gW0FuaW1hdGlvbldheXBvaW50LCBBbmltYXRpb25TdHlsZXNldF07XHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25SdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRrZXlmcmFtZXNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZSB8IG51bGw7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN0eWxlIHJ1bGVzIHJlcHJlc2VudGluZyBhbmltYXRpb24gZnJhbWVzICovXHJcblx0cmVhZG9ubHkgZnJhbWVSdWxlczogSUFuaW1hdGlvbkZyYW1lUnVsZVtdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25GcmFtZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzaW5nbGUgZnJhbWUgaW4gdGhlIEBrZXlmcmFtZXMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCAqL1xyXG5cdHJlYWRvbmx5IHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludDtcclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzS2V5ZnJhbWVSdWxlOiBDU1NLZXlmcmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVmFyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbi5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHZhcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFyUnVsZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiBleHRlbmRzIElOYW1lZEVudGl0eSwgSUN1c3RvbVZhcjxWYXJWYWx1ZVR5cGU8Sz4+XHJcbntcclxuXHQvKiogTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdHJlYWRvbmx5IHRlbXBsYXRlOiBLO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvdW50ZXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgbmFtZWQgY291bnRlciBkZWZpbml0aW9uLiBVc2UgdGhpcyBydWxlIHRvIGNyZWF0ZVxyXG4gKiBjb3VudGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZCBpbiBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGVcclxuICogcHJvcGVydGllcy4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgY291bnRlcnMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZVxyXG4gKiBjb3VudGVyIGRlZmluaXRpb25zLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY291bnRlcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ291bnRlclJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBjb3VudGVyICovXHJcblx0cmVhZG9ubHkgY291bnRlck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogVGhlIElDb3VudGVyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQGNvdW50ZXItc3R5bGUgcnVsZS5cclxuLy8gICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGNvdW50ZXJTdHlsZV1dIGZ1bmN0aW9uLlxyXG4vLyAgKi9cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJQ291bnRlclN0eWxlUnVsZSBleHRlbmRzIElSdWxlLCBJTmFtZWRFbnRpdHlcclxuLy8ge1xyXG4vLyBcdC8qKiBTT00gY291bnRlci1zdHlsZSBydWxlICovXHJcbi8vIFx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTQ291bnRlclN0eWxlUnVsZSB8IG51bGw7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSW1wb3J0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGltcG9ydF1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1wb3J0UnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGltcG9ydCBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTSW1wb3J0UnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRm9udEZhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQGZvbnQtZmFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZm9udGZhY2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvbnRGYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTRm9udEZhY2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lc3BhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbmFtZXNwYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lc3BhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTTmFtZXNwYWNlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFnZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skcGFnZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogT3B0aW9uYWwgbmFtZSBvZiB0aGUgcGFnZSBwc2V1ZG8gc3R5bGUgKGUuZy4gXCJcIjpmaXJzdFwiKSAqL1xyXG5cdHJlYWRvbmx5IHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBTT00gcGFnZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUGFnZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGZvciB0aGUgcHJvcGVydHkgaW4gdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyB0aGF0IGtlZXBzIHJlZmVyZW5jZSB0byB0aGVcclxuICogdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIERldmVsb3BlcnMgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGFjY2VzcyBydWxlcyBpbiB0aGVcclxuICogY2hhaW4gb2YgbmVzdGVkIGdyb3VwaW5nIHJ1bGVzLiBXZSBuZWVkIHRvIGF2b2lkIGVudW1lcmF0aW5nIHRoaXMgcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nXHJcbiAqIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3ltT3duZXIgPSBTeW1ib2woXCJvd25lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYSBiYXNlIGZvciBhbGwgY2xhc3NlcyB0aGF0IGNvbnRhaW4gZGVmaW5pbml0aW9ucyBvZiBDU1MgcnVsZXMuXHJcbiAqIFVzZSBpdCB0aGUgZm9sbG93aW5nIHdheTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgTXlTdHlsZXMgZXh0ZW5kIFN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICAvLyA4cHggcGFkZGluZyBvbiByZWd1bGFyIGRldmljZXNcclxuICogICAgIGRlZmF1bHRQYWRkaW5nID0gJHZhciggXCJwYWRkaW5nXCIsIDgpXHJcbiAqIFxyXG4gKiAgICAgaWZOYXJyb3dEZXZpY2UgPSAkbWVkaWEoIHttYXhXaWR0aDogNjAwIH0sXHJcbiAqICAgICAgICAgY2xhc3MgZXh0ZW5kcyBTdHlsZURlZmluaXRpb248TXlTdHlsZXM+XHJcbiAqICAgICAgICAge1xyXG4gKiAgICAgICAgICAgICAvLyA0cHggcGFkZGluZyBvbiBuYXJyb3cgZGV2aWNlc1xyXG4gKiAgICAgICAgICAgICBkZWZhdWx0UGFkZGluZyA9ICR2YXIoIFwicGFkZGluZ1wiLCBMZW4uY2FsYyggXCJ7MH0gLyAyXCIsIHRoaXMub3duZXIuZGVmYXVsdFBhZGRpbmcpKVxyXG4gKiAgICAgICAgIH1cclxuICogICAgIClcclxuICogfVxyXG4gKiBgYGBcclxuICogQHR5cGVwYXJhbSBPIFRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCB3aGljaCBpcyB0aGUgb3duZXIgb2YgdGhpcyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZURlZmluaXRpb248TyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhcmUgY3JlYXRlZCBkaXJlY3RseSBvbmx5IGJ5IHRoZSAqc3R5bGVkIGNvbXBvbmVudHMqIC0gdGhhdCBpcyxcclxuXHQgKiBjb21wb25lbnRzIHRoYXQgdXNlIGRpZmZlcmVudCBzdHlsZXMgZm9yIGVhY2ggaW5zdGFuY2UuIE90aGVyd2lzZSwgc3R5bGUgZGVmaW5pdGlvblxyXG5cdCAqIGNsYXNzIGluc3RhbmNlcyBhcmUgY3JlYXRlZCB3aGVuIGVpdGhlciB0aGUgW1skdXNlXV0gb3IgW1skYWN0aXZhdGVdXSBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcblx0ICogQHBhcmFtIG93bmVyIFJlZmVyZW5jZSB0byB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NcclxuXHQgKi9cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG93bmVyOiBPIHwgbnVsbCA9IG51bGwpXHJcblx0e1xyXG5cdFx0dGhpc1tzeW1Pd25lcl0gPSBvd25lcjtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZmVycyB0byB0aGUgc2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSAqb3duZXIqIG9mXHJcblx0ICogdGhpcyBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC4gVGhlIG93bmVyIGlzIHRoZSB0b3AtbGV2ZWwgY2xhc3MgaW4gdGhlIGNoYWluIG9mIHN0eWxlXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzc2VzLiBUaHJvdWdoIHRoaXMgbWVtZWJlciwgYWxsIHJ1bGVzIGFuZCBvdGhlciBtZW1lYmVycyBkZWZpbmVkIGluIHRoZSBvd25lclxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3MgY2FuIGJlIGFjY2Vzc2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgb3duZXIoKTogTyB8IG51bGwgeyByZXR1cm4gdGhpc1tzeW1Pd25lcl07IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXCJDb25zdHJ1Y3RvclwiIGludGVyZmFjZSBkZWZpbmluZyBob3cgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGNhbiBiZSBjcmVhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbjxPPiA9IGFueSwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKiBBbGwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIHNob3VsZCBjb25mb3JtIHRvIHRoaXMgY29uc3RydWN0b3IgKi9cclxuXHRuZXcoIG93bmVyPzogTyk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JvdXBSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZ3JvdXBpbmcgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHJlYWRvbmx5IHJ1bGVzOiBUO1xyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN1cHBvcnRzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3VwcG9ydHNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1N1cHBvcnRzUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWVkaWFSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRtZWRpYV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWVkaWFSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+IGV4dGVuZHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTTWVkaWFSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdHlsZVJ1bGUsIENvbWJpbmVkU3R5bGVzZXQsIElWYXJSdWxlLCBEZXBlbmRlbnRSdWxlcywgSU5hbWVkRW50aXR5LCBJQ2xhc3NSdWxlLCBJSURSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGUsIEN1c3RvbVZhcl9TdHlsZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXN9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHttZXJnZVN0eWxlc2V0cywgc3R5bGVzZXRUb1N0cmluZywgc3R5bGVQcm9wVG9TdHJpbmcsIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wc30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHt2YWx1ZVRvU3RyaW5nLCBjYW1lbFRvRGFzaH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCI7XHJcbmltcG9ydCB7cHNldWRvRW50aXR5VG9TdHJpbmcsIHNlbGVjdG9yVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgcnVsZXMgdGhhdCBjb250YWluIGEgc3R5bGUgcnVsZS4gVGhpcyBjbGFzc1xyXG4gKiBpbXBsZW1lbnRzIHRoZSBwYXJzaW5nIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0IG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSVN0eWxlUnVsZVxyXG57XHJcblx0Ly8gVGhlIHN0eWxlc2V0IGNhbiBiZSBhbiBDb21iaW5lZFN0eWxlc2V0IGZvciBtYW55IHJ1bGVzOyBob3dldmVyLCBmb3Igc29tZSBpdCBpcyBqdXN0XHJcblx0Ly8gb2YgdGhlIFN0eWxlc2V0IHR5cGUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZXNldD86IFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHt9O1xyXG5cdFx0dGhpcy5kZXBlbmRlbnRSdWxlcyA9IHt9O1xyXG5cclxuXHRcdGlmIChzdHlsZXNldClcclxuXHRcdFx0dGhpcy5wYXJzZUlucHV0U3R5bGVzZXQoIHN0eWxlc2V0IGFzIENvbWJpbmVkU3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHb2VzIG92ZXIgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW4gc3R5bGVzZXQgYW5kIHBhcnNlcyB0aGVtIGludG8gcHJvcGVyIHN0eWxlc2V0LCBzZXQgb2ZcclxuXHQgKiBpbXBvcnRhbnQgcHJvcGVydGllcyBhbmQgZGVwZW5kZW50IHJ1bGVzLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgcGFyc2VJbnB1dFN0eWxlc2V0KCBpbnB1dFN0eWxlc2V0OiBDb21iaW5lZFN0eWxlc2V0KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHdlIGhhdmUgcGFyZW50cywgd2UgZmlyc3QgY29weSBwcm9wZXJ0aWVzIGZyb20gdGhlbSBzbyB0aGF0IG91ciBvd24gcHJvcGVydGllc1xyXG5cdFx0Ly8gY2FuIG92ZXJyaWRlIHRoZW0uXHJcblx0XHRpZiAoaW5wdXRTdHlsZXNldFtcIitcIl0pXHJcblx0XHR7XHJcblx0XHRcdC8vIHRoZSB2YWx1ZSBpcyBhIHNpbmdsZSBTdHlsZVJ1bGUgb3IgYW4gYXJyYXkgb2YgU3R5bGVSdWxlcyB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxyXG5cdFx0XHRsZXQgZXh0ZW5kc1Byb3BWYWwgPSBpbnB1dFN0eWxlc2V0W1wiK1wiXSBhcyAoU3R5bGVSdWxlIHwgU3R5bGVSdWxlW10pO1xyXG5cdFx0XHRsZXQgcGFyZW50UnVsZXM6IFN0eWxlUnVsZVtdO1xyXG5cdFx0XHRpZiAoZXh0ZW5kc1Byb3BWYWwgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpXHJcblx0XHRcdFx0cGFyZW50UnVsZXMgPSBbZXh0ZW5kc1Byb3BWYWxdO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cGFyZW50UnVsZXMgPSBleHRlbmRzUHJvcFZhbDtcclxuXHJcblx0XHRcdC8vIElmIHdlIGhhdmUgcGFyZW50IHJ1bGVzLCBjb3B5IHN0eWxlc2V0cyBhbmQgZGVwZW5kZW50IHJ1bGVzIGZyb20gdGhlbS5cclxuXHRcdFx0aWYgKHBhcmVudFJ1bGVzICYmIHBhcmVudFJ1bGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRwYXJlbnRSdWxlcy5mb3JFYWNoKCBwYXJlbnQgPT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0ID0gbWVyZ2VTdHlsZXNldHMoIHRoaXMuc3R5bGVzZXQsIHBhcmVudC5zdHlsZXNldCk7XHJcblx0XHRcdFx0XHR0aGlzLmNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHBhcmVudCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBtZXJnZSBjdXN0b20gIHByb3BlcnRpZXNcclxuXHRcdG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGhpcy5zdHlsZXNldCwgaW5wdXRTdHlsZXNldCk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gaW5wdXRTdHlsZXNldClcclxuXHRcdHtcclxuXHRcdFx0Ly8gc2tpcCBvdmVyIGFscmVhZHkgcHJvY2Vzc2VkIHBhcmVudHMsIGltcG9ydGFudCBhbmQgY3VzdG9tIHByb3BlcnRpZXNcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcIitcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IHByb3BWYWwgPSBpbnB1dFN0eWxlc2V0W3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCI6XCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoaXMgaXMgYW4gYXJyYXkgb2YgdHVwbGVzIHJlcHJlc2VudGluZ1xyXG5cdFx0XHRcdC8vIHBhcmFtZXRlcmlzZWQgcHNldWRvIGVudGl0aWVzIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgdmFsdWVcclxuXHRcdFx0XHQvLyAoc3RyaW5nKSBhbmQgdGhlIHNlY29uZCB0aGUgQ29tYmluZWRTdHlsZXNldC4gT3RoZXJ3aXNlLCB0aGUgdmFsdWUgaXMganVzdCBhblxyXG5cdFx0XHRcdC8vIENvbWJpbmVkU3R5bGVzZXQuXHJcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW2FueSwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0XHRwcm9wTmFtZSwgdHVwbGVbMF0sIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gbmV3IERlcGVuZGVudFJ1bGUoIFwiJlwiICsgcHJvcE5hbWUsIHVuZGVmaW5lZCxcclxuXHRcdFx0XHRcdFx0cHJvcFZhbCBhcyBDb21iaW5lZFN0eWxlc2V0LCB0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCImXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdHR1cGxlWzBdLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCImXCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBwcm9wTmFtZSArIHNlbGVjdG9yVG9TdHJpbmcoIHR1cGxlWzBdKSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZS5lbmRzV2l0aChcIiZcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdCgpID0+IHNlbGVjdG9yVG9TdHJpbmcoIHR1cGxlWzBdKSArIHByb3BOYW1lLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoaXMgaXMgYSByZWd1bGFyIENTUyBwcm9wZXJ0eTogY29weSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gb3VyIGludGVybmFsIHN0eWxlc2V0XHJcblx0XHRcdFx0dGhpcy5zdHlsZXNldFtwcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBwcm9jZXNzIHRoZW0gdW5kZXIgdGhlIHNhbWUgY29udGFpbmVyXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5wcm9jZXNzKCBvd25lciwgbnVsbCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkucHJvY2Vzcyggb3duZXIsIG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHJvdGVjdGVkIGNvcHlGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgb24gYSBuZXdseSBjcmVhdGVkIG9iamVjdCBzbyB3ZSBkb24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIGluXHJcblx0XHQvLyBvdXIgb3duIHN0eWxlc2V0IHlldFxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBzcmMuc3R5bGVzZXQpO1xyXG5cdFx0dGhpcy5jb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBzcmMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgZGVwZW5kZW50IHJ1bGVzIGZyb20gYW5vdGhlciBzdHlsZSBydWxlIG9iamVjdC5cclxuXHRwcml2YXRlIGNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHNyYzogU3R5bGVSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHNyYy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBzcmMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgYXJyID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKCFhcnIpXHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IGFyciA9IFtdO1xyXG5cclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChzcmNEZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBuZXdEZXBSdWxlID0gc3JjRGVwUnVsZS5jbG9uZSgpIGFzIERlcGVuZGVudFJ1bGU7XHJcblx0XHRcdFx0XHRuZXdEZXBSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHRcdGFyci5wdXNoKCBuZXdEZXBSdWxlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbmV3RGVwUnVsZSA9IChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmNsb25lKCkgYXMgRGVwZW5kZW50UnVsZTtcclxuXHRcdFx0XHRuZXdEZXBSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IG5ld0RlcFJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHJ1bGUuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID09IG51bGwpXHJcblx0XHRcdHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIGAke3RoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmd9IHske3N0eWxlc2V0VG9TdHJpbmcoIHRoaXMuc3R5bGVzZXQpfX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogU3R5bGVSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSB0aGlzLmNsb25lT2JqZWN0KCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5zdHlsZXNldCkubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIHRoaXMudG9Dc3NTdHJpbmcoKSwgcGFyZW50KSBhcyBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBpbnNlcnQgdGhlbSB1bmRlciB0aGUgc2FtZSBwYXJlbnRcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5pbnNlcnQoIHBhcmVudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgY2xlYXIgdGhlbSB0b29cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLmNsZWFyKCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuY2xlYXIoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHB1YmxpYyBnZXQgc2VsZWN0b3JUZXh0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID09IG51bGwpXHJcblx0XHRcdHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgc3R5bGUgcnVsZSBvYmplY3Qgb2YgdGhlIHByb3BlciB0eXBlLCBidXQgd2l0aG91dCB0aGUgc3R5bGVzZXQgYW5kIGRlcGVuZGVudFxyXG5cdC8vIHJ1bGVzLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjbG9uZU9iamVjdCgpOiBTdHlsZVJ1bGU7XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0UHJvcDxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIG5hbWU6IEssIHZhbHVlOiBFeHRlbmRlZFN0eWxlc2V0W0tdLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuc2V0UHJvcEludGVybmFsKCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSB2YXJPYmogSVZhclJ1bGUgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFyVmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0Q3VzdG9tUHJvcDxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdmFyT2JqOiBJVmFyUnVsZTxLPiwgdmFsdWU6IFZhclZhbHVlVHlwZTxLPixcclxuXHRcdGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF2YXJPYmogfHwgISh2YXJPYmogaW5zdGFuY2VvZiBWYXJSdWxlKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLnNldEN1c3RvbVByb3BJbnRlcm5hbCggdmFyT2JqLCB2YWx1ZSwgaW1wb3J0YW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKi9cclxuXHRwcml2YXRlIHNldFByb3BJbnRlcm5hbCggbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpcnN0IHNldC9yZW1vdmUgdGhlIHZhbHVlIGluIG91ciBpbnRlcm5hbCBzdHlsZXNldCBvYmplY3RcclxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5zdHlsZXNldFtuYW1lXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zdHlsZXNldFtuYW1lXSA9IGltcG9ydGFudCA/IHsgXCIhXCI6IHZhbHVlIH0gOiB2YWx1ZTtcclxuXHJcblx0XHQvLyBzZWNvbmQsIGlmIENTU1J1bGUgYWxyZWR5IGV4aXN0cywgc2V0L3JlbW92ZSB0aGUgcHJvcGVydHkgdmFsdWUgdGhlcmVcclxuXHRcdGlmICghdGhpcy5jc3NSdWxlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHZhbHVlID09IG51bGwpXHJcblx0XHRcdHRoaXMuY3NzUnVsZS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggY2FtZWxUb0Rhc2goIG5hbWUpKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5jc3NSdWxlLnN0eWxlLnNldFByb3BlcnR5KCBjYW1lbFRvRGFzaCggbmFtZSksXHJcblx0XHRcdFx0c3R5bGVQcm9wVG9TdHJpbmcoIG5hbWUsIHZhbHVlLCB0cnVlKSwgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiBudWxsKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzL3JlbW92ZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0bW9tIGNTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBzZXRDdXN0b21Qcm9wSW50ZXJuYWwoIHZhck9iajogVmFyUnVsZSwgdmFsdWU6IGFueSwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRsZXQgY3VyckN1c3RvbVByb3BzID0gdGhpcy5zdHlsZXNldFtcIi0tXCJdIGFzIEN1c3RvbVZhcl9TdHlsZVR5cGVbXTtcclxuXHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMgfHwgdmFsdWUgIT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0aWYgKHZhbHVlID09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoY3VyckN1c3RvbVByb3BzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gY3VyckN1c3RvbVByb3BzLmZpbmRJbmRleCggaXRlbSA9PiBpdGVtWzBdID09PSB2YXJPYmopO1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID49IDApXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMubGVuZ3RoID09PSAxKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3R5bGVzZXRbXCJcIl0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHMuc3BsaWNlKCBpbmRleCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghY3VyckN1c3RvbVByb3BzKVxyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtcIi0tXCJdID0gY3VyckN1c3RvbVByb3BzID0gW1t2YXJPYmosIHZhbHVlXV07XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGN1cnJDdXN0b21Qcm9wcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbVswXSA9PT0gdmFyT2JqKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKVxyXG5cdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHNbaW5kZXhdWzFdID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wcy5wdXNoKCBbdmFyT2JqLCB2YWx1ZV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNlY29uZCwgaWYgQ1NTUnVsZSBhbHJlZHkgZXhpc3RzLCBzZXQvcmVtb3ZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0aGVyZVxyXG5cdFx0aWYgKCF0aGlzLmNzc1J1bGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0dGhpcy5jc3NSdWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KCB2YXJPYmouY3NzTmFtZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eSggdmFyT2JqLmNzc05hbWUsXHJcblx0XHRcdFx0c3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgdmFsdWUsIHRydWUpLCBpbXBvcnRhbnQgPyBcIiFpbXBvcnRhbnRcIiA6IG51bGwpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9iamVjdCBjb250YWluaW5nIGRlcGVuZGVudCBydWxlcy4gUHJvcGVydHkgbmFtZXMgYXJlIHRha2VuIGZyb20gc3BlY2lhbCBwcm9wZXJ0aWVzXHJcblx0ICogb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGFsbG93cyBjYWxsZXJzIHRvIGFjY2VzcyBkZXBlbmRlbnQgcnVsZXMgdG8gY2hhbmdlXHJcblx0ICogc3R5bGUgcHJvcGVydHkgdmFsdWVzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICovXHJcblx0cHVibGljIGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlcztcclxuXHJcblx0Ly8gUmVzdWx0YW50IG9iamVjdCBkZWZpbmluZyBwcm9wZXJ0aWVzIHRvIGJlIGluc2VydGVkIGludG8gRE9NLlxyXG5cdHByaXZhdGUgc3R5bGVzZXQ6IFN0eWxlc2V0O1xyXG5cclxuXHQvLyBTZWxlY3RvciBzdHJpbmcgY2FjaGVkIGFmdGVyIGl0IGlzIGZpcnN0IG9idGFpbmVkLiBOZWVkZWQgdG8gbm90IGludm9rZSBnZXRTZWxlY3RvclN0cmluZ1xyXG5cdC8vIG11bHRpcGxlIHRpbWVzIGluIHRoZSBwcmVzZW5jZSBvZiBkZXBlbmRlbnQgcnVsZXMuXHJcblx0cHJpdmF0ZSBjYWNoZWRTZWxlY3RvclN0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBEZXBlbmRlbnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgZGVwZW5kcyBvbiB0aGUgY29udGFpbmluZyBzdHlsZSBydWxlLiBUaGlzXHJcbiAqIGlzIHVzZWQgZm9yIHBzZXVkbyBjbGFzc2VzLCBwc2V1ZG8gZWxlbWVudHMsIGNvbWJpbmF0b3JzIGFuZCBvdGhlciBzZWxlY3RvcnMgdGhhdCBjb21iaW5lIHRoZVxyXG4gKiBjb250YWluaW5nIHJ1bGUncyBzZWxlY3RvciB3aXRoIGFkZGl0aW9uYWwgc2VsZWN0b3IgaXRlbXMuXHJcbiAqL1xyXG5jbGFzcyBEZXBlbmRlbnRSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHQvLyBmb3IgcmVndWxhciBzZWxlY3RvcnMsIHBzZXVkbyBjbGFzc2VzIGFuZCBwc2V1ZG8gZWxlbWVudHMsIHRoZSBzZWxlY3RvciBhbHJlYWR5IGNvbnRhaW5zXHJcblx0Ly8gdGhlIGFtcGVyc2FuZCBhbmQgdGhlIHNlbGVjdG9yUGFyYW0gaXMgdW5kZWZpbmVkLiBGb3IgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcywgcHN1ZG9cclxuXHQvLyBlbGVtZW50cyBhbmQgY29tYmluYXRvcnMsIHRoZSBzZWxlY3RvclBhcmFtIGlzIGRlZmluZWQgYW5kIHRoZSBzZWxlY3RvciBpcyBqdXN0IHRoZSBlbnRpdHlcclxuXHQvLyBuYW1lLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzZWxlY3RvclBhcmFtPzogYW55LCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsXHJcblx0XHRjb250YWluaW5nUnVsZT86IFN0eWxlUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdFx0dGhpcy5zZWxlY3RvclBhcmFtID0gc2VsZWN0b3JQYXJhbTtcclxuXHRcdHRoaXMuY29udGFpbmluZ1J1bGUgPSBjb250YWluaW5nUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IERlcGVuZGVudFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IERlcGVuZGVudFJ1bGUoIHRoaXMuc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3JQYXJhbSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHRoaXMuY29udGFpbmluZ1J1bGUhLnNlbGVjdG9yVGV4dDtcclxuXHRcdGlmICh0aGlzLnNlbGVjdG9yUGFyYW0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IgYXMgc3RyaW5nO1xyXG5cdFx0XHRyZXR1cm4gYCR7cGFyZW50U2VsZWN0b3J9JHtzZWxlY3Rvcn0oJHtwc2V1ZG9FbnRpdHlUb1N0cmluZyggc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3JQYXJhbSl9KWA7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbnZlcnQgc2VsZWN0b3IgdG8gc3RyaW5nLlxyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSBzZWxlY3RvclRvU3RyaW5nKCB0aGlzLnNlbGVjdG9yKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBzZWxlY3RvciBzdHJpbmcgZG9lc24ndCBoYXZlIGFueSBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCwgd2VcclxuXHRcdFx0Ly8gc2ltcGx5IGFwcGVuZCB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBzZWxlY3Rvcjsgb3RoZXJ3aXNlLCB3ZSByZXBsYWNlIGFsbFxyXG5cdFx0XHQvLyBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpbiB0aGUgc2VsZWN0b3Igc3RyaW5nIHdpdGggdGhlIHNlbGVjdG9yXHJcblx0XHRcdC8vIHN0cmluZyBvZiB0aGUgcGFyZW50IHJ1bGUuXHJcblx0XHRcdHJldHVybiBzZWxlY3Rvci5pbmRleE9mKCBcIiZcIikgPCAwXHJcblx0XHRcdFx0PyBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfWBcclxuXHRcdFx0XHQ6IHNlbGVjdG9yLnJlcGxhY2UoIC8mL2csIHBhcmVudFNlbGVjdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFydGlhbCBzZWxlY3RvciB0aGF0IHNob3VsZCBiZSBhcHBlbmRlZCB0byB0aGUgcGFyZW50IHNlbGVjdG9yLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG5cclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VsZWN0b3IgLSB1c2VkIGZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGFuZCBlbGVtZW50cy5cclxuXHRwcml2YXRlIHNlbGVjdG9yUGFyYW0/OiBhbnk7XHJcblxyXG5cdC8vIFBhcmVudCBzdHlsZSBydWxlIG9mIHdoaWNoIHRoaXMgcnVsZSBpcyBkZXBlbmRlbnQuXHJcblx0cHVibGljIGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQWJzdHJhY3RSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGJhc2UgZm9yIG90aGVyIHN0eWxlXHJcbiAqIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0UnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBBYnN0cmFjdFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEFic3RyYWN0UnVsZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gT3ZlcnJpZGVzIHRoZSBTdHlsZVJ1bGUncyBpbXBsZW1lbnRhdGlvbiB0byBkbyBub3RoaW5nLiBObyBDU1NTdHlsZVJ1bGUgaXMgY3JlYXRlZCBmb3JcclxuXHQvLyBhYnN0cmFjdCBydWxlcy5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmFtZWRTdHlsZVJ1bGUgY2xhc3MgaXMgYSBiYXNlIGZvciBzdHlsZSBydWxlIGNsYXNzZXMgdGhhdCBhcmUgYWxzbyBuYW1lZCBlbnRpdGllcyAtIHN1Y2hcclxuICogYXMgY2xhc3MgcnVsZSBhbmQgSUQgcnVsZS5cclxuICovXHJcbmFic3RyYWN0IGNsYXNzIE5hbWVkU3R5bGVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSU5hbWVkRW50aXR5XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUsIHRoaXMuY3NzUHJlZml4KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc05hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJvdGVjdGVkIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBOYW1lZFN0eWxlUnVsZSBpbXBsZW1lbnRzIElDbGFzc1J1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGNsYXNzIHByZWZpeGVkIHdpdGggXCIuXCIgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0NsYXNzTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jc3NOYW1lOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQ2xhc3NSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDbGFzc1J1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGdldCBjc3NQcmVmaXgoKTogc3RyaW5nIHsgcmV0dXJuIFwiLlwiOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSURSdWxlIGV4dGVuZHMgTmFtZWRTdHlsZVJ1bGUgaW1wbGVtZW50cyBJSURSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBlbGVtZW50IElEIHByZWZpeGVkIHdpdGggXCIjXCIgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0lETmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5jc3NOYW1lOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogSURSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBJRFJ1bGUoIHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBwcmVmaXggdGhhdCBpcyBwdXQgYmVmb3JlIHRoZSBlbnRpdHkgbmFtZSB0byBjcmVhdGUgYSBDU1MgbmFtZSB1c2VkIGluIHN0eWxlIHJ1bGVcclxuXHQvLyBzZWxlY3RvcnMuXHJcblx0cHJvdGVjdGVkIGdldCBjc3NQcmVmaXgoKTogc3RyaW5nIHsgcmV0dXJuIFwiI1wiOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTZWxlY3RvclJ1bGUgdHlwZSBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvclJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBTZWxlY3RvclJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggdGhpcy5zZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyggdGhpcy5zZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHQvLyBzZWxlY3RvciBvYmplY3QgZm9yIHRoaXMgcnVsZS5cclxuXHRwcml2YXRlIHNlbGVjdG9yOiBDc3NTZWxlY3RvcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lWYXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1ZhclZhbHVlVHlwZSwgVmFyVGVtcGxhdGVOYW1lfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVmFyUnVsZSBkb2VzIG5vdCBkZXJpdmUgZnJvbSB0aGUgUnVsZVxyXG4gKiBjbGFzcyBiZWNhdXNlIGl0IGlzIG5vdCBhIHJlYWwgQ1NTIHJ1bGU7IGhvd2V2ZXIsIGluIG1hbnkgYXNwZWN0cyBpdCByZXBlYXRzIHRoZSBSdWxlJ3NcclxuICogZnVuY3Rpb25hbGl0eS4gSW4gcGFydGljdWxhciBpdCBoYXMgdGhlIHByb2Nlc3MgZnVuY3Rpb24gdGhhdCBhbGxvd3MgaXQgdG8gb2J0YWluIGFuIGFjdHVhbFxyXG4gKiBuYW1lLCB3aGljaCB3aWxsIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBhbmQgdXNpbmcgdGhpcyBjdXN0b20gcHJvcGVydHkgaW4gQ1NTLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHdoaWxlIHRoZSB0eXBlIHBhcmFtZXRlciBLIGlzIGEga2V5IG9mIHRoZSBJQ3NzU3R5bGVzZXQgaW50ZXJmYWNlLCB0aGUgdmFsdWUgaXMgb2ZcclxuICogdHlwZSBJU3RpbGVzZXRbS10sIHdoaWNoIGlzIEV4dGVuZGVkPElDc3NTdHlsZXNldFtLXT4uIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmcgdmFsdWVzIHRoYXQgYXJlXHJcbiAqIHZhbGlkIGZvciB0aGUgRXh0ZW5kZWQgcm9wZXJ0eSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gaW1wbGVtZW50cyBJVmFyUnVsZTxLPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZTogSywgdmFsdWU/OiBWYXJWYWx1ZVR5cGU8Sz4sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElWYXJSdWxlPEs+KVxyXG5cdHtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgXCItLVwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFZhclJ1bGU8Sz5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFZhclJ1bGU8Sz4odGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudmFsdWUgPT0gbnVsbCA/IG51bGwgOiBgJHt0aGlzLmNzc05hbWV9OiAke3N0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB0aGlzLnZhbHVlLCB0cnVlKX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgdmFyKC0tbmFtZSkgZXhwcmVzc2lvbi5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIGB2YXIoJHt0aGlzLmNzc05hbWV9KWA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyBuZXcgdmFsdWUgb2YgdGhpcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgZm9yIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRWYWx1ZSggdmFsdWU6IFZhclZhbHVlVHlwZTxLPiwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDdXN0b21WYXJWYWx1ZSggdGhpcy5jc3NOYW1lLFxyXG5cdFx0XHR2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksIGltcG9ydGFudClcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvLyAvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyAvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdC8vIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcblx0cHVibGljIHRlbXBsYXRlOiBLO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgdmFsdWU6IFZhclZhbHVlVHlwZTxLPjtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MgYW5kIHdoaWNoIGhhc2UgdGhlIENTU1N0eWxlUnVsZSB0aHJvdWdoIHdoaWNoXHJcblx0Ly8gdGhlIHZhbHVlIG9mIHRoaXMgY3VzdG9tIHZhcmlhYmxlIGNhbiBiZSBjaGFuZ2VkLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SU5hbWVkQ29sb3JzLCBDc3NDb2xvciwgQ29sb3JzfSBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtDc3NQZXJjZW50TWF0aCwgQ3NzQW5nbGVNYXRoLCB2YWx1ZVRvU3RyaW5nfSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBjb2xvciBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvck51bWJlclRvU3RyaW5nKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgaWYgKHZhbCA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgbmVnYXRpdmU6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJBIG51bWJlciByZXByZXNlbnRpbmcgY29sb3IgY2Fubm90IGJlIGZsb2F0aW5nIHBvaW50OiBcIiArIHZhbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBcIiMwMDBcIjtcclxuICAgICAgICB9XHJcbiAgICAvLy8gI2VuZGlmXHJcblxyXG4gICAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVkIGNvbG9yIHdpdGggdGhlIGdpdmVuIHZhbHVlLCByZXR1cm4gdGhlIGNvbG9yIG5hbWVcclxuICAgIGxldCBuYW1lID0gcmV2ZXJzZWRDb2xvck1hcC5nZXQoIHZhbCk7XHJcbiAgICBpZiAobmFtZSlcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBvdGhlcndpc2UgY29udmVydCBudW1lcmljIHZhbHVlIHRvICMgbm90YXRpb25cclxuICAgICAgICBsZXQgcyA9IHZhbC50b1N0cmluZygxNik7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgKHZhbCA8PSAweEZGRkZGRiA/IHMucGFkU3RhcnQoIDYsIFwiMFwiKSA6IHMucGFkU3RhcnQoIDgsIFwiMFwiKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29sb3JTZXBhcmF0aW9uVG9TdHJpbmcoIGM6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYyA9PSBudWxsID8gXCIwXCIgOiB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIiA/IGMgOiBOdW1iZXIuaXNJbnRlZ2VyKGMpID8gYy50b1N0cmluZygpIDogQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMoYyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvU3RyaW5nKCByOiBudW1iZXIgfCBzdHJpbmcsIGc6IG51bWJlciB8IHN0cmluZywgYjogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHIgPSBjb2xvclNlcGFyYXRpb25Ub1N0cmluZyggcik7XHJcbiAgICBnID0gY29sb3JTZXBhcmF0aW9uVG9TdHJpbmcoIGcpO1xyXG4gICAgYiA9IGNvbG9yU2VwYXJhdGlvblRvU3RyaW5nKCBiKTtcclxuICAgIGEgPSBhID09IG51bGwgPyB1bmRlZmluZWQgOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhKTtcclxuXHJcbiAgICByZXR1cm4gIWEgPyBgcmdiKCR7cn0sJHtnfSwke2J9KWAgOiBgcmdiYSgke3J9LCR7Z30sJHtifSwke2F9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhzbFRvU3RyaW5nKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciB8IHN0cmluZywgbDogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGggPSBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhoKTtcclxuICAgIHMgPSBzID09IG51bGwgPyBcIjEwMCVcIiA6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIHMpO1xyXG4gICAgbCA9IGwgPT0gbnVsbCA/IFwiMTAwJVwiIDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggbCk7XHJcbiAgICBhID0gYSA9PSBudWxsID8gdW5kZWZpbmVkIDogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYSk7XHJcblxyXG4gICAgcmV0dXJuICFhID8gYGhzbCgke2h9LCR7c30sJHtsfSlgIDogYGhzbGEoJHtofSwke3N9LCR7bH0sJHthfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYVRvU3RyaW5nKCBjOiBudW1iZXIgfCBrZXlvZiBJTmFtZWRDb2xvcnMsIGE6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgcmdiVmFsID0gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIgPyBDb2xvcnNbY10gOiBjO1xyXG4gICAgcmV0dXJuIHJnYlRvU3RyaW5nKCAocmdiVmFsICYgMHhGRjAwMDApID4+IDE2LCAocmdiVmFsICYgMHgwMEZGMDApID4+IDgsIHJnYlZhbCAmIDB4MDAwMEZGLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByZWRlZmluZWQgY29sb3IgbmFtZXMgYnkgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuIE9ubHkgYnVpbHQtaW4gY29sb3IgbmFtZXMgd2lsbCBiZSBpblxyXG4gKiB0aGlzIG1hcCAtIHRob3NlIG5hbWVkIGNvbG9ycyB0aGF0IGFyZSBhZGRlZCB1c2luZyBtb2R1bGUgYXVnbWVudGF0aW9uIHdpbGwgTk9UIHJlc2lkZSBpblxyXG4gKiB0aGlzIG1hcC4gVGhpcyBpcyBuZWVkZWQgdG8gY29udmVydCB0aGUgbnVtZXJpYyBjb2xvciB2YWx1ZXMgc2V0IHVzaW5nIHRoZSBDb2xvci5icm93blxyXG4gKiBub3RhdGlvbiB0byB0aGVpciBuYW1lcyB3aGVuIGluc2VydGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5sZXQgcmV2ZXJzZWRDb2xvck1hcCA9IG5ldyBNYXA8bnVtYmVyLHN0cmluZz4oKTtcclxuXHJcbi8vIGJ1aWxkIFJldmVyc2VkIENvbG9yIE1hcFxyXG5PYmplY3QuZW50cmllcyggQ29sb3JzKS5mb3JFYWNoKCAoW25hbWUsIHZhbHVlXSkgPT4gcmV2ZXJzZWRDb2xvck1hcC5zZXQoIHZhbHVlLCBuYW1lKSApO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3Igc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy4gSWYgYSBzdHJpbmcgdmFsdWUgaXMgaW4gdGhlIENvbG9ycyBvYmplY3Qgd2VcclxuICogbmVlZCB0byBnZXQgaXRzIG51bWJlciBhbmQgY29udmVydCBpdCB0byB0aGUgcmdiW2FdKCkgZnVuY3Rpb24gYmVjYXVzZSBpdCBtaWdodCBiZSBhIGN1c3RvbVxyXG4gKiBjb2xvciBuYW1lIGFkZGVkIHZpYSBJTmFtZWRDb2xvcnMgbW9kdWxlIGF1Z21lbnRhdGlvbi4gRm9yIG51bWVyaWMgdmFsdWVzLCB3ZSBjaGVjayBpZiB0aGlzIGlzXHJcbiAqIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBjb2xvcnMgYW5kIHJldHVybiBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NDb2xvcj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gQ29sb3JzW3ZdID8gY29sb3JOdW1iZXJUb1N0cmluZyggQ29sb3JzW3ZdKSA6IHYsXHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JOdW1iZXJUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHR5cGVzIGZvciB3b3JraW5nIHdpdGggQ1NTIGNvbG9ycy5cclxuICovXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkQ29sb3JzIGludGVyZmFjZSBsaXN0cyB0aGUgbmFtZXMgb2Ygc3RhbmRhcmQgV2ViIGNvbG9ycy4gSXQgaXMgbmVlZGVkIHRvIGFsbG93IGRldmVsb3BlcnNcclxuICogdG8gYWRkIG5ldyBuYW1lZCBjb2xvcnMgdGhyb3VnaCBtb2R1bGUgYXVnbWVudGF0aW9uIHRlY2huaXF1ZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkQ29sb3JzXHJcbntcclxuICAgIHJlYWRvbmx5IGJsYWNrOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpbHZlcjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyYXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hcm9vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlZDogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHB1cnBsZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvdzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdnk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRlYWw6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWE6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFsaWNlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFudGlxdWV3aGl0ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWFtYXJpbmU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGF6dXJlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJlaWdlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJpc3F1ZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsYW5jaGVkYWxtb25kOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWV2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJyb3duOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJ1cmx5d29vZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNhZGV0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNob2NvbGF0ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcmFsOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5mbG93ZXJibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5zaWxrOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNyaW1zb246ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGN5YW46ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtibHVlOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtjeWFuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmF5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmV5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtraGFraTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmttYWdlbnRhOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmFuZ2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmNoaWQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtyZWQ6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzYWxtb246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzZWFncmVlbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyYXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyZXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBwaW5rOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBza3libHVlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyYXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyZXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRvZGdlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZpcmVicmljazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZsb3JhbHdoaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZvcmVzdGdyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdhaW5zYm9ybzogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdob3N0d2hpdGU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGQ6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGRlbnJvZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVueWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvbmV5ZGV3OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvdHBpbms6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlhbnJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlnbzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGl2b3J5OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGtoYWtpOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyYmx1c2g6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhd25ncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxlbW9uY2hpZmZvbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y3lhbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z29sZGVucm9keWVsbG93OiAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JlZW46ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0cGluazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2FsbW9uOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmF5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmV5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0eWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbmVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hZ2VudGE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWFxdWFtYXJpbmU6ICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bW9yY2hpZDogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXB1cnBsZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNsYXRlYmx1ZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNwcmluZ2dyZWVuOiAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXR1cnF1b2lzZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXZpb2xldHJlZDogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pZG5pZ2h0Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pbnRjcmVhbTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pc3R5cm9zZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1vY2Nhc2luOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdmFqb3doaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9sZGxhY2U6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlZHJhYjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZXJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yY2hpZDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV2aW9sZXRyZWQ6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhcGF5YXdoaXA6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlYWNocHVmZjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlcnU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBpbms6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBsdW06ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBvd2RlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJvc3licm93bjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJveWFsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhZGRsZWJyb3duOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbG1vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbmR5YnJvd246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYWdyZWVuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYXNoZWxsOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpZW5uYTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNreWJsdWU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNub3c6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNwcmluZ2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHN0ZWVsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRhbjogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRoaXN0bGU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRvbWF0bzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHR1cnF1b2lzZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHZpb2xldDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoZWF0OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlc21va2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvd2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlYmVjY2FwdXJwbGU6ICAgICAgICAgIG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbG9yUHJveHkgdHlwZSByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIG9mIENTUyBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBmb3JcclxuICogc2VjaWZ5aW5nIGNvbG9ycy4gVGhpcyBpbnRlcmZhY2UgaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZTogcmdiKCksIGFscGhhKCksIGV0Yy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbG9yUHJveHkgPSAocD86IFwiY29sb3JcIikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIHN0cmluZyAoZS5nLiBcInJlZFwiIG9yIFwiI2ZlNVwiIG9yIFwicmdiYSgxOTAsIDIwMCwgMjM1LCA5MCUpXCIsIGV0Yy4pXHJcbiAqICAgLSBudW1iZXI6XHJcbiAqICAgICAtIHBvc2l0aXZlIGludGVnZXIgbnVtYmVycyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgYXJlIHRyZWF0ZWQgYXMgUkdCIHNlcGFyYXRpb25zIDB4UlJHR0JCLlxyXG4gKiAgICAgLSBwb3NpdGl2ZSBpbnRlZ2VyIG51bWJlcnMgZ3JlYXRlciB0aGFuIDB4RkZGRkZGIGFyZSB0cmVhdGVkIGFzIFJHQkEgc2VwYXJhdGlvbnMgMHhSUkdHQkJBQS5cclxuICogICAgIC0gbmVnYXRpdmUgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIHJlamVjdGVkLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzQ29sb3IgPSBcInRyYW5zcGFyZW50XCIgfCBcImN1cnJlbnRjb2xvclwiIHwga2V5b2YgSU5hbWVkQ29sb3JzIHwgbnVtYmVyIHwgQ29sb3JQcm94eTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzOiBJTmFtZWRDb2xvcnMgPVxyXG57XHJcbiAgICBibGFjazogICAgICAgICAgICAgICAgICAweDAwMDAwMCxcclxuICAgIHNpbHZlcjogICAgICAgICAgICAgICAgIDB4YzBjMGMwLFxyXG4gICAgZ3JheTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICB3aGl0ZTogICAgICAgICAgICAgICAgICAweGZmZmZmZixcclxuICAgIG1hcm9vbjogICAgICAgICAgICAgICAgIDB4ODAwMDAwLFxyXG4gICAgcmVkOiAgICAgICAgICAgICAgICAgICAgMHhmZjAwMDAsXHJcbiAgICBwdXJwbGU6ICAgICAgICAgICAgICAgICAweDgwMDA4MCxcclxuICAgIGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgZ3JlZW46ICAgICAgICAgICAgICAgICAgMHgwMDgwMDAsXHJcbiAgICBsaW1lOiAgICAgICAgICAgICAgICAgICAweDAwZmYwMCxcclxuICAgIG9saXZlOiAgICAgICAgICAgICAgICAgIDB4ODA4MDAwLFxyXG4gICAgeWVsbG93OiAgICAgICAgICAgICAgICAgMHhmZmZmMDAsXHJcbiAgICBuYXZ5OiAgICAgICAgICAgICAgICAgICAweDAwMDA4MCxcclxuICAgIGJsdWU6ICAgICAgICAgICAgICAgICAgIDB4MDAwMGZmLFxyXG4gICAgdGVhbDogICAgICAgICAgICAgICAgICAgMHgwMDgwODAsXHJcbiAgICBhcXVhOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIG9yYW5nZTogICAgICAgICAgICAgICAgIDB4ZmZhNTAwLFxyXG4gICAgYWxpY2VibHVlOiAgICAgICAgICAgICAgMHhmMGY4ZmYsXHJcbiAgICBhbnRpcXVld2hpdGU6ICAgICAgICAgICAweGZhZWJkNyxcclxuICAgIGFxdWFtYXJpbmU6ICAgICAgICAgICAgIDB4N2ZmZmQ0LFxyXG4gICAgYXp1cmU6ICAgICAgICAgICAgICAgICAgMHhmMGZmZmYsXHJcbiAgICBiZWlnZTogICAgICAgICAgICAgICAgICAweGY1ZjVkYyxcclxuICAgIGJpc3F1ZTogICAgICAgICAgICAgICAgIDB4ZmZlNGM0LFxyXG4gICAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgMHhmZmViY2QsXHJcbiAgICBibHVldmlvbGV0OiAgICAgICAgICAgICAweDhhMmJlMixcclxuICAgIGJyb3duOiAgICAgICAgICAgICAgICAgIDB4YTUyYTJhLFxyXG4gICAgYnVybHl3b29kOiAgICAgICAgICAgICAgMHhkZWI4ODcsXHJcbiAgICBjYWRldGJsdWU6ICAgICAgICAgICAgICAweDVmOWVhMCxcclxuICAgIGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIDB4N2ZmZjAwLFxyXG4gICAgY2hvY29sYXRlOiAgICAgICAgICAgICAgMHhkMjY5MWUsXHJcbiAgICBjb3JhbDogICAgICAgICAgICAgICAgICAweGZmN2Y1MCxcclxuICAgIGNvcm5mbG93ZXJibHVlOiAgICAgICAgIDB4NjQ5NWVkLFxyXG4gICAgY29ybnNpbGs6ICAgICAgICAgICAgICAgMHhmZmY4ZGMsXHJcbiAgICBjcmltc29uOiAgICAgICAgICAgICAgICAweGRjMTQzYyxcclxuICAgIGN5YW46ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgZGFya2JsdWU6ICAgICAgICAgICAgICAgMHgwMDAwOGIsXHJcbiAgICBkYXJrY3lhbjogICAgICAgICAgICAgICAweDAwOGI4YixcclxuICAgIGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIDB4Yjg4NjBiLFxyXG4gICAgZGFya2dyYXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJrZ3JlZW46ICAgICAgICAgICAgICAweDAwNjQwMCxcclxuICAgIGRhcmtncmV5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2toYWtpOiAgICAgICAgICAgICAgMHhiZGI3NmIsXHJcbiAgICBkYXJrbWFnZW50YTogICAgICAgICAgICAweDhiMDA4YixcclxuICAgIGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIDB4NTU2YjJmLFxyXG4gICAgZGFya29yYW5nZTogICAgICAgICAgICAgMHhmZjhjMDAsXHJcbiAgICBkYXJrb3JjaGlkOiAgICAgICAgICAgICAweDk5MzJjYyxcclxuICAgIGRhcmtyZWQ6ICAgICAgICAgICAgICAgIDB4OGIwMDAwLFxyXG4gICAgZGFya3NhbG1vbjogICAgICAgICAgICAgMHhlOTk2N2EsXHJcbiAgICBkYXJrc2VhZ3JlZW46ICAgICAgICAgICAweDhmYmM4ZixcclxuICAgIGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIDB4NDgzZDhiLFxyXG4gICAgZGFya3NsYXRlZ3JheTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrc2xhdGVncmV5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIDB4MDBjZWQxLFxyXG4gICAgZGFya3Zpb2xldDogICAgICAgICAgICAgMHg5NDAwZDMsXHJcbiAgICBkZWVwcGluazogICAgICAgICAgICAgICAweGZmMTQ5MyxcclxuICAgIGRlZXBza3libHVlOiAgICAgICAgICAgIDB4MDBiZmZmLFxyXG4gICAgZGltZ3JheTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkaW1ncmV5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRvZGdlcmJsdWU6ICAgICAgICAgICAgIDB4MWU5MGZmLFxyXG4gICAgZmlyZWJyaWNrOiAgICAgICAgICAgICAgMHhiMjIyMjIsXHJcbiAgICBmbG9yYWx3aGl0ZTogICAgICAgICAgICAweGZmZmFmMCxcclxuICAgIGZvcmVzdGdyZWVuOiAgICAgICAgICAgIDB4MjI4YjIyLFxyXG4gICAgZ2FpbnNib3JvOiAgICAgICAgICAgICAgMHhkY2RjZGMsXHJcbiAgICBnaG9zdHdoaXRlOiAgICAgICAgICAgICAweGY4ZjhmZixcclxuICAgIGdvbGQ6ICAgICAgICAgICAgICAgICAgIDB4ZmZkNzAwLFxyXG4gICAgZ29sZGVucm9kOiAgICAgICAgICAgICAgMHhkYWE1MjAsXHJcbiAgICBncmVlbnllbGxvdzogICAgICAgICAgICAweGFkZmYyZixcclxuICAgIGdyZXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgaG9uZXlkZXc6ICAgICAgICAgICAgICAgMHhmMGZmZjAsXHJcbiAgICBob3RwaW5rOiAgICAgICAgICAgICAgICAweGZmNjliNCxcclxuICAgIGluZGlhbnJlZDogICAgICAgICAgICAgIDB4Y2Q1YzVjLFxyXG4gICAgaW5kaWdvOiAgICAgICAgICAgICAgICAgMHg0YjAwODIsXHJcbiAgICBpdm9yeTogICAgICAgICAgICAgICAgICAweGZmZmZmMCxcclxuICAgIGtoYWtpOiAgICAgICAgICAgICAgICAgIDB4ZjBlNjhjLFxyXG4gICAgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgMHhlNmU2ZmEsXHJcbiAgICBsYXZlbmRlcmJsdXNoOiAgICAgICAgICAweGZmZjBmNSxcclxuICAgIGxhd25ncmVlbjogICAgICAgICAgICAgIDB4N2NmYzAwLFxyXG4gICAgbGVtb25jaGlmZm9uOiAgICAgICAgICAgMHhmZmZhY2QsXHJcbiAgICBsaWdodGJsdWU6ICAgICAgICAgICAgICAweGFkZDhlNixcclxuICAgIGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIDB4ZjA4MDgwLFxyXG4gICAgbGlnaHRjeWFuOiAgICAgICAgICAgICAgMHhlMGZmZmYsXHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogICAweGZhZmFkMixcclxuICAgIGxpZ2h0Z3JheTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRncmVlbjogICAgICAgICAgICAgMHg5MGVlOTAsXHJcbiAgICBsaWdodGdyZXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0cGluazogICAgICAgICAgICAgIDB4ZmZiNmMxLFxyXG4gICAgbGlnaHRzYWxtb246ICAgICAgICAgICAgMHhmZmEwN2EsXHJcbiAgICBsaWdodHNlYWdyZWVuOiAgICAgICAgICAweDIwYjJhYSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIDB4ODdjZWZhLFxyXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHNsYXRlZ3JleTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIDB4YjBjNGRlLFxyXG4gICAgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgMHhmZmZmZTAsXHJcbiAgICBsaW1lZ3JlZW46ICAgICAgICAgICAgICAweDMyY2QzMixcclxuICAgIGxpbmVuOiAgICAgICAgICAgICAgICAgIDB4ZmFmMGU2LFxyXG4gICAgbWFnZW50YTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICAweDY2Y2RhYSxcclxuICAgIG1lZGl1bWJsdWU6ICAgICAgICAgICAgIDB4MDAwMGNkLFxyXG4gICAgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgMHhiYTU1ZDMsXHJcbiAgICBtZWRpdW1wdXJwbGU6ICAgICAgICAgICAweDkzNzBkYixcclxuICAgIG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIDB4M2NiMzcxLFxyXG4gICAgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgMHg3YjY4ZWUsXHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogICAgICAweDAwZmE5YSxcclxuICAgIG1lZGl1bXR1cnF1b2lzZTogICAgICAgIDB4NDhkMWNjLFxyXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgMHhjNzE1ODUsXHJcbiAgICBtaWRuaWdodGJsdWU6ICAgICAgICAgICAweDE5MTk3MCxcclxuICAgIG1pbnRjcmVhbTogICAgICAgICAgICAgIDB4ZjVmZmZhLFxyXG4gICAgbWlzdHlyb3NlOiAgICAgICAgICAgICAgMHhmZmU0ZTEsXHJcbiAgICBtb2NjYXNpbjogICAgICAgICAgICAgICAweGZmZTRiNSxcclxuICAgIG5hdmFqb3doaXRlOiAgICAgICAgICAgIDB4ZmZkZWFkLFxyXG4gICAgb2xkbGFjZTogICAgICAgICAgICAgICAgMHhmZGY1ZTYsXHJcbiAgICBvbGl2ZWRyYWI6ICAgICAgICAgICAgICAweDZiOGUyMyxcclxuICAgIG9yYW5nZXJlZDogICAgICAgICAgICAgIDB4ZmY0NTAwLFxyXG4gICAgb3JjaGlkOiAgICAgICAgICAgICAgICAgMHhkYTcwZDYsXHJcbiAgICBwYWxlZ29sZGVucm9kOiAgICAgICAgICAweGVlZThhYSxcclxuICAgIHBhbGVncmVlbjogICAgICAgICAgICAgIDB4OThmYjk4LFxyXG4gICAgcGFsZXR1cnF1b2lzZTogICAgICAgICAgMHhhZmVlZWUsXHJcbiAgICBwYWxldmlvbGV0cmVkOiAgICAgICAgICAweGRiNzA5MyxcclxuICAgIHBhcGF5YXdoaXA6ICAgICAgICAgICAgIDB4ZmZlZmQ1LFxyXG4gICAgcGVhY2hwdWZmOiAgICAgICAgICAgICAgMHhmZmRhYjksXHJcbiAgICBwZXJ1OiAgICAgICAgICAgICAgICAgICAweGNkODUzZixcclxuICAgIHBpbms6ICAgICAgICAgICAgICAgICAgIDB4ZmZjMGNiLFxyXG4gICAgcGx1bTogICAgICAgICAgICAgICAgICAgMHhkZGEwZGQsXHJcbiAgICBwb3dkZXJibHVlOiAgICAgICAgICAgICAweGIwZTBlNixcclxuICAgIHJvc3licm93bjogICAgICAgICAgICAgIDB4YmM4ZjhmLFxyXG4gICAgcm95YWxibHVlOiAgICAgICAgICAgICAgMHg0MTY5ZTEsXHJcbiAgICBzYWRkbGVicm93bjogICAgICAgICAgICAweDhiNDUxMyxcclxuICAgIHNhbG1vbjogICAgICAgICAgICAgICAgIDB4ZmE4MDcyLFxyXG4gICAgc2FuZHlicm93bjogICAgICAgICAgICAgMHhmNGE0NjAsXHJcbiAgICBzZWFncmVlbjogICAgICAgICAgICAgICAweDJlOGI1NyxcclxuICAgIHNlYXNoZWxsOiAgICAgICAgICAgICAgIDB4ZmZmNWVlLFxyXG4gICAgc2llbm5hOiAgICAgICAgICAgICAgICAgMHhhMDUyMmQsXHJcbiAgICBza3libHVlOiAgICAgICAgICAgICAgICAweDg3Y2VlYixcclxuICAgIHNsYXRlYmx1ZTogICAgICAgICAgICAgIDB4NmE1YWNkLFxyXG4gICAgc2xhdGVncmF5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbGF0ZWdyZXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNub3c6ICAgICAgICAgICAgICAgICAgIDB4ZmZmYWZhLFxyXG4gICAgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgMHgwMGZmN2YsXHJcbiAgICBzdGVlbGJsdWU6ICAgICAgICAgICAgICAweDQ2ODJiNCxcclxuICAgIHRhbjogICAgICAgICAgICAgICAgICAgIDB4ZDJiNDhjLFxyXG4gICAgdGhpc3RsZTogICAgICAgICAgICAgICAgMHhkOGJmZDgsXHJcbiAgICB0b21hdG86ICAgICAgICAgICAgICAgICAweGZmNjM0NyxcclxuICAgIHR1cnF1b2lzZTogICAgICAgICAgICAgIDB4NDBlMGQwLFxyXG4gICAgdmlvbGV0OiAgICAgICAgICAgICAgICAgMHhlZTgyZWUsXHJcbiAgICB3aGVhdDogICAgICAgICAgICAgICAgICAweGY1ZGViMyxcclxuICAgIHdoaXRlc21va2U6ICAgICAgICAgICAgIDB4ZjVmNWY1LFxyXG4gICAgeWVsbG93Z3JlZW46ICAgICAgICAgICAgMHg5YWNkMzIsXHJcbiAgICByZWJlY2NhcHVycGxlOiAgICAgICAgICAweDY2MzM5OSxcclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgRm9udEZhY2VUeXBlcyBmcm9tIFwiLi9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0ICogYXMgVXRpbEZ1bmNzIGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gZm9udCBmYWNlIGRlZmluaXRpb24gb2JqZWN0IHRvIHRoZSBDU1Mgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9udEZhY2VUb1N0cmluZyggZm9udGZhY2U6IEZvbnRGYWNlVHlwZXMuSUZvbnRGYWNlKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZvbnRmYWNlIHx8ICFmb250ZmFjZS5mb250RmFtaWx5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gXCJ7XCI7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gZm9udGZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcyArPSBgJHtVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0cmV0Y2hUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHJldGNoX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IFV0aWxGdW5jcy5Dc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IFV0aWxGdW5jcy5Dc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3R5bGVUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHlsZV9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy52YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBvYmxpcXVlICR7VXRpbEZ1bmNzLkNzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHYpfWAsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBvYmxpcXVlICR7VXRpbEZ1bmNzLmFycmF5VG9TdHJpbmcoIHYsIFV0aWxGdW5jcy5Dc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyl9YFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFdlaWdodFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIFV0aWxGdW5jcy52YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBVdGlsRnVuY3MuQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3JjVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IGZvbnRTaW5nbGVTcmNUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTaW5nbGVTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBVdGlsRnVuY3Mub2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcImxvY2FsXCIsIHYgPT4gYGxvY2FsKCR7dn0pYF0sXHJcbiAgICAgICAgW1widXJsXCIsIHYgPT4gYHVybCgke3Z9KWBdLFxyXG4gICAgICAgIFtcImZvcm1hdFwiLCB2ID0+IGBmb3JtYXQoJHtmb250Rm9ybWF0VG9TdHJpbmcodil9KWBdXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250Rm9ybWF0VG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gVXRpbEZ1bmNzLnZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gYFxcXCIke3Z9XFxcImAsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgR3JhZGllbnRTdG9wT3JIaW50LCBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLCBMaW5lYXJHcmFkQW5nbGUsIFJhZGlhbEdyYWRpZW50U2hhcGUsXHJcbiAgICBSYWRpYWxHcmFkaWVudEV4dGVudCwgQ3Jvc3NGYWRlUGFyYW1cclxufSBmcm9tIFwiLi9JbWFnZVR5cGVzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCB7Q3NzUG9zaXRpb24sIEV4dGVuZGVkLCBTaW1wbGVDc3NQb3NpdGlvbiwgQ3NzQW5nbGV9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmcsIElOdW1iZXJNYXRoQ2xhc3MsIENzc0FuZ2xlTWF0aCwgcG9zaXRpb25Ub1N0cmluZywgQ3NzUGVyY2VudE1hdGh9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnQsXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHYubGVuZ3RoID09PSAwID8gXCJcIiA6IHYubGVuZ3RoID09PSAxID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZbMF0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nKCB2IGFzIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIG1hdGhDbGFzcylcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyTWF0aENsYXNzPFQ+KTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzZWNvbmRTdG9wID0gdmFsLmxlbmd0aCA+IDIgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzJdKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7Y29sb3JUb1N0cmluZyh2YWxbMF0pfSAke21hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2YWxbMV0pfSAke3NlY29uZFN0b3B9YDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGluZWFyR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBhbmdsZTogTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBhbmdsZSA/IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSkgKyBcIixcIiA6IFwiXCI7XHJcbiAgICBsZXQgYnVmID0gc3RvcHNPckhpbnRzLm1hcCggc3RvcE9ySGludCA9PiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZyggc3RvcE9ySGludCwgQ3NzUGVyY2VudE1hdGgpKTtcclxuICAgIHJldHVybiBgJHtuYW1lfSgke2FuZ2xlU3RyaW5nfSR7YnVmLmpvaW4oXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHNoYXBlOiBSYWRpYWxHcmFkaWVudFNoYXBlLFxyXG4gICAgZXh0ZW50OiBSYWRpYWxHcmFkaWVudEV4dGVudCwgcG9zOiBDc3NQb3NpdGlvbixcclxuICAgIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNoYXBlU3RyaW5nID0gc2hhcGUgPyBzaGFwZSA6IFwiXCI7XHJcbiAgICBsZXQgZXh0ZW50U3RyaW5nID0gZXh0ZW50ID8gZXh0ZW50IDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3NpdGlvblRvU3RyaW5nKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IHNoYXBlIHx8IGV4dGVudFN0cmluZyB8fCBwb3MgPyBgJHtzaGFwZVN0cmluZ30gJHtleHRlbnRTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NQZXJjZW50TWF0aCkpO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7d2hhdEFuZFdoZXJlfSR7YnVmLmpvaW4oXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvczogU2ltcGxlQ3NzUG9zaXRpb24sXHJcbiAgICBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IGFuZ2xlID8gYGZyb20gJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggYW5nbGUpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHBvc1N0cmluZyA9IHBvcyA/IGBhdCAke3Bvc2l0aW9uVG9TdHJpbmcoIHBvcyl9YCA6IFwiXCI7XHJcbiAgICBsZXQgd2hhdEFuZFdoZXJlID0gYW5nbGUgfHwgcG9zID8gYCR7YW5nbGVTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIGxldCBidWYgPSBzdG9wc09ySGludHMubWFwKCBzdG9wT3JIaW50ID0+IGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nKCBzdG9wT3JIaW50LCBDc3NBbmdsZU1hdGgpKTtcclxuICAgIHJldHVybiBgY29uaWMtZ3JhZGllbnQoJHt3aGF0QW5kV2hlcmV9JHtidWYuam9pbihcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbHVlVG9TdHJpbmcodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHZhbHVlVG9TdHJpbmcoIGFyZ3MsIHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjcm9zc0ZhZGVQYXJhbVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGNyb3NzLWZhZGUoJHtwYXJhbXNTdHJpbmd9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgVXRpbEZ1bmNzIGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCAqIGFzIE1lZGlhVHlwZXMgZnJvbSBcIi4vTWVkaWFUeXBlc1wiXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFzcGVjdFJhdGlvVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5Bc3BlY3RSYXRpb0ZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsWzBdICsgXCIvXCIgKyB2YWxbMV07XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbGVuZ3RoRmVhdHVyZVRvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuTGVuZ3RoRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcInB4XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLlJlc29sdXRpb25GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwiZHBpXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgb2YgYSBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxudHlwZSBjb252ZXJ0RnVuY1R5cGU8SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9ICh2YWw6IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdKSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFGZWF0dXJlSW5mbyByZXByZXNlbnRzIGluZm9ybWF0aW9uIHRoYXQgd2Uga2VlcCBmb3Igc3R5bGUgcHJvcGVydGllc1xyXG4gKi9cclxudHlwZSBNZWRpYUZlYXR1cmVJbmZvPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSBjb252ZXJ0RnVuY1R5cGU8Sz4gfCBib29sZWFuIHxcclxuICAgIHtcclxuICAgICAgICAvKiogRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBmcm9tIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxuICAgICAgICBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlPEs+O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiBkZWZpbmVkLCBpbmRpY2F0ZXMgdGhlIHZhbHVlLCB3aGljaCB3ZSB3aWxsIG5vdCBwdXQgaW50byBDU1Mgc3RyaW5nLiBUaGlzIGlzIG5lZWRlZCBmb3JcclxuICAgICAgICAgKiBtZWRpYSBmZWF0dXJlcyB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgd2l0aG91dCB0aGUgdmFsdWUsIGUuZy4gY29sb3Igb3IgY29sb3ItaW5kZXguXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPzogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS107XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBmZWF0dXJlIGlzIGEgXCJyYW5nZVwiIGZlYXR1cmU7IHRoYXQgaXMsIGNhbiBiZSB1c2VkIGluIGFuXHJcbiAgICAgICAgICogZXhwcmVzc2lvbiAoYSA8PSBmZWF0dXJlIDw9IGIpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlzUmFuZ2U/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lZGlhUXVlcnlUb1N0cmluZyggcXVlcnk6IE1lZGlhVHlwZXMuTWVkaWFRdWVyeSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnkpKVxyXG4gICAgICAgIHJldHVybiBxdWVyeS5tYXAoIChzaW5nbGVRdWVyeSkgPT4gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBzaW5nbGVRdWVyeSkpLmpvaW4oXCIsIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBNZWRpYVR5cGVzLlNpbmdsZU1lZGlhUXVlcnkpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IG1lZGlhVHlwZSA9IHF1ZXJ5LiRtZWRpYVR5cGU7XHJcbiAgICBsZXQgb25seSA9IHF1ZXJ5LiRvbmx5O1xyXG4gICAgbGV0IG5lZ2F0ZSA9IHF1ZXJ5LiRuZWdhdGU7XHJcblxyXG4gICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG1lZGlhVHlwZSlcclxuICAgICAgICBpdGVtcy5wdXNoKCAob25seSA/IFwib25seSBcIiA6IFwiXCIpICsgbWVkaWFUeXBlKTtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBxdWVyeSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiRcIikpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocXVlcnlbcHJvcE5hbWVdKVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCBgKCR7bWVkaWFGZWF0dXJlVG9TdHJpbmcoIHByb3BOYW1lLCBxdWVyeVtwcm9wTmFtZV0pfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmVnYXRlID8gXCJub3QgXCIgOiBcIlwifSR7aXRlbXMuam9pbihcIiBhbmQgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBmZWF0dXJlIHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGZWF0dXJlVG9TdHJpbmcoIGZlYXR1cmVOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmZWF0dXJlTmFtZSB8fCBwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgXHJcbiAgICBsZXQgaW5mbzogTWVkaWFGZWF0dXJlSW5mbyA9IG1lZGlhRmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xyXG5cclxuICAgIGxldCByZWFsRmVhdHVyZU5hbWUgPSBVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIGZlYXR1cmVOYW1lKTtcclxuXHJcbiAgICAvLyBpZiBkZWZhdWx0VmFsdWUgaXMgZGVmaW5lZCBhbmQgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGVxdWFsIHRvIGl0LCBubyB2YWx1ZSBzaG91bGQgYmUgcmV0dXJuZWQuXHJcbiAgICBsZXQgZGVmYXVsdFZhbHVlID0gdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmRlZmF1bHRWYWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wVmFsID09PSBkZWZhdWx0VmFsdWUpXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IFwiXCIgOiByZWFsRmVhdHVyZU5hbWU7XHJcblxyXG4gICAgbGV0IGNvbnZlcnQgPSB0eXBlb2YgaW5mbyA9PT0gXCJmdW5jdGlvblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5jb252ZXJ0IDogdW5kZWZpbmVkO1xyXG4gICAgbGV0IGlzUmFuZ2UgPSB0eXBlb2YgaW5mbyA9PT0gXCJib29sZWFuXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmlzUmFuZ2UgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoaXNSYW5nZSAmJiAhdmFsdWVPbmx5ICYmIEFycmF5LmlzQXJyYXkoIHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzMSA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWxbMF0sIGNvbnZlcnQpO1xyXG4gICAgICAgIGxldCBzMiA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWxbMV0sIGNvbnZlcnQpO1xyXG4gICAgICAgIHJldHVybiBgJHtzMX0gPD0gJHtyZWFsRmVhdHVyZU5hbWV9IDw9ICR7czJ9YDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWwsIGNvbnZlcnQpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzIDogcmVhbEZlYXR1cmVOYW1lICsgXCI6XCIgKyBzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lZGlhRmVhdHVyZVNpbmdsZVZhbHVlVG9TdHJpbmcoIHByb3BWYWw6IGFueSwgY29udmVydD86IGNvbnZlcnRGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGlmIChjb252ZXJ0KVxyXG4gICAgICAgIHJldHVybiBjb252ZXJ0KCBwcm9wVmFsKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBwcm9wVmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggcHJvcFZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcHJvcFZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBtYXhBc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIGNvbG9yOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGhlaWdodDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbkhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtb25vY2hyb21lOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgcmVzb2x1dGlvbjogeyBjb252ZXJ0OiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5SZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4UmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIHdpZHRoOiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluV2lkdGg6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFdpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7U2VsZWN0b3JJdGVtLCBDc3NTZWxlY3Rvcn0gZnJvbSBcIi4vU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1N0eWxlUnVsZXNcIlxyXG5pbXBvcnQge3ZhbHVlVG9TdHJpbmcsIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmd9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIHNlbGVjdG9yLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IgdXNpbmcgdGhlIGdpdmVuIHRlbXBsYXRlIHN0cmluZyB3aXRoIG9wdGlvbmFsXHJcbiAqIHBsYWNlaG9sZGVycyAoZS5nLiB7MH0pLCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkIGJ5IG5hbWVzIG9mIHRhZ3MsIGNsYXNzZXMgYW5kIElEcyBhbmQgb3RoZXJcclxuICogcG9zc2libGUgdHlwZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBzZWxlY3Rvckl0ZW1Ub1N0cmluZyggdmFsOiBTZWxlY3Rvckl0ZW0pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuXHRcdGZyb21OdWxsOiB2ID0+IFwiXCIsXHJcblx0XHRmcm9tT2JqZWN0OiB2ID0+IHYgaW5zdGFuY2VvZiBTdHlsZVJ1bGUgPyB2LnNlbGVjdG9yVGV4dCA6IHZhbHVlVG9TdHJpbmcodilcclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdHdvLW51bWJlciB0dXBsZSB0byBhIHN0cmluZyBpbiB0aGUgZm9ybSBBbitCLlxyXG4gKi9cclxuZnVuY3Rpb24gbnRoVHVwbGVUb1N0cmluZyggdmFsOiBbbnVtYmVyLCBudW1iZXI/XSk6IHN0cmluZ1xyXG57XHJcblx0bGV0IHYwID0gdmFsdWVUb1N0cmluZyggdmFsWzBdKTtcclxuXHRsZXQgdjFuID0gdmFsWzFdO1xyXG5cclxuXHQvLyB0aGUgJyF2MW4nIGV4cHJlc3Npb24gY292ZXJzIG51bGwsIHVuZGVmaW5lZCBhbmQgMC5cclxuXHRsZXQgdjEgPSAhdjFuID8gXCJcIiA6IHYxbiA+IDAgPyBcIitcIiArIHZhbHVlVG9TdHJpbmcoIHYxbikgOiBcIi1cIiArIHZhbHVlVG9TdHJpbmcoIC12MW4pO1xyXG5cclxuXHRyZXR1cm4gYCR7djB9biR7djF9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yVG9TdHJpbmcoIHZhbDogQ3NzU2VsZWN0b3IpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuXHRcdGZyb21Bbnk6IHNlbGVjdG9ySXRlbVRvU3RyaW5nLFxyXG5cdFx0YXJyYXlTZXBhcmF0b3I6IFwiXCJcclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IgdXNpbmcgdGhlIGdpdmVuIHRlbXBsYXRlIHN0cmluZyB3aXRoIG9wdGlvbmFsXHJcbiAqIHBsYWNlaG9sZGVycy4gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGFzIHRhZyBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dFxyXG4gKiBwYXJlbnRoZXNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRTZWxlY3RvciggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBwYXJhbXM6IFNlbGVjdG9ySXRlbVtdKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0cywgcGFyYW1zLCBzZWxlY3Rvckl0ZW1Ub1N0cmluZyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBwYXJhbWV0ZXJpemVkIHBzZXVkbyBlbnRpdHkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHNldWRvRW50aXR5VG9TdHJpbmcoIGVudGl0eU5hbWU6IHN0cmluZywgdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZW50aXR5TmFtZSlcclxuXHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRpZiAoZW50aXR5TmFtZS5zdGFydHNXaXRoKCBcIjpudGhcIikpXHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7IGZyb21BcnJheTogbnRoVHVwbGVUb1N0cmluZyB9KTtcclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gdmFsdWVUb1N0cmluZyh2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIFN0eWxlVHlwZXMgZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWRTdHlsZXNldH0gZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7RXh0ZW5kZWQsIENzc1JhZGl1cywgT25lT3JNYW55LCBDc3NNdWx0aUxlbmd0aCwgQ3NzTXVsdGlUaW1lfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtcclxuICAgIGNhbWVsVG9EYXNoLCB2YWx1ZVRvU3RyaW5nLCBhcnJheVRvU3RyaW5nLCBvYmplY3RUb1N0cmluZywgSVZhbHVlQ29udmVydE9wdGlvbnMsXHJcbiAgICBwb3NpdGlvblRvU3RyaW5nLCBtdWx0aVBvc2l0aW9uVG9TdHJpbmcsIENzc0xlbmd0aE1hdGgsIENzc1RpbWVNYXRoLCBDc3NOdW1iZXJNYXRoLFxyXG4gICAgQ3NzQW5nbGVNYXRoLCBDc3NGcmVxdWVuY3lNYXRoLCBDc3NQZXJjZW50TWF0aCwgQ3NzUmVzb2x1dGlvbk1hdGgsIHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmdcclxufSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVmFyUnVsZVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTGVuZ3RoPik6IHN0cmluZ1xyXG57IHJldHVybiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBcIiBcIik7IH1cclxuXHJcbmZ1bmN0aW9uIG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4pOiBzdHJpbmdcclxueyByZXR1cm4gQ3NzVGltZU1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIFwiLFwiKTsgfVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgZm9yIGNvbnZlcnRpbmcgQ1NTIHByb3BlcnR5IHR5cGVzIHRvIHN0cmluZ3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QoIHZhbDogU3R5bGVUeXBlcy5BbmltYXRpb25fU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImNvdW50XCIsIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJkaXJlY3Rpb25cIixcclxuICAgICAgICBcIm1vZGVcIixcclxuICAgICAgICBcInN0YXRlXCIsXHJcbiAgICAgICAgXCJuYW1lXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUFuaW1hdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5BbmltYXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8T25lT3JNYW55PFN0eWxlVHlwZXMuVGltaW5nRnVuY3Rpb25fU2luZ2xlPj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIsXHJcbiAgICAgICAgZnJvbUFycmF5OiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgc3RlcHMoJHt2YWx9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbUFycmF5KCB2YWw6IGFueVtdKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsWzBdID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbCBhcyBTdHlsZVR5cGVzLlRpbWluZ0Z1bmN0aW9uX1NpbmdsZSlcclxuICAgICAgICA6IGFycmF5VG9TdHJpbmcoIHZhbCwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlLCBcIixcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuVGltaW5nRnVuY3Rpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA8IDMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgc3RlcHMgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPD0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby4gWW91IGhhdmU6ICR7dlswXX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghTnVtYmVyLmlzSW50ZWdlciggdlswXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBOdW1iZXIgb2Ygc3RlcHMgaW4gYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgYW4gSW50ZWdlci4gWW91IGhhdmU6ICR7dlswXX1gKTtcclxuICAgICAgICAgICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHN0ZXBzKCR7dlswXX0ke3YubGVuZ3RoID09PSAyID8gXCIsXCIgKyB2WzFdIDogXCJcIn0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYmV6aWVyIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2WzBdIDwgMCB8fCB2WzBdID4gMSB8fCB2WzJdIDwgMCB8fCB2WzJdID4gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEZpcnN0IGFuZCB0aGlyZCBwYXJhbWV0ZXJzIG9mIGN1YmljLWJlemllciBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEuIFlvdSBoYXZlICR7dlswXX0gYW5kICR7dlsyXX1gKTtcclxuICAgICAgICAgICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGN1YmljLWJlemllcigke3ZbMF19LCR7dlsxXX0sJHt2WzJdfSwke3ZbM119KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3QoIHZhbDogU3R5bGVUeXBlcy5CYWNrZ3JvdW5kX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoIHZhbCwgW1xyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddLFxyXG4gICAgICAgIFwiaW1hZ2VcIixcclxuICAgICAgICBbXCJwb3NpdGlvblwiLCBwb3NpdGlvblRvU3RyaW5nXSxcclxuICAgICAgICBbXCJzaXplXCIsIG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiLFxyXG4gICAgICAgIFwiYXR0YWNobWVudFwiLFxyXG4gICAgICAgIFwib3JpZ2luXCIsXHJcbiAgICAgICAgXCJjbGlwXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuQmFja2dyb3VuZF9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuQmFja2dyb3VuZFNpemVfU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBpbWFnZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlckltYWdlVG9TdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Cb3JkZXJJbWFnZV9PYmplY3QpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgd2lkdGggaXMgc3BlY2lmaWVkLCBidXQgc2xpY2UgaXMgbmV0IHdlIG5lZWQgdG8gc2V0IHNsaWNlIHRvIHRoZSBkZWZhdWx0IDEwMCUgdmFsdWU7XHJcbiAgICAvLyBpZiBvdXRzZXQgaXMgc3BlY2lmaWVkIGJ1dCB3aWR0aCBpcyBub3QuIHdlIG5lZWQgdG8gc2V0IHdpZHRoIHRvIHRoZSBkZWZhdWx0IDEgdmFsdWU7XHJcbiAgICBsZXQgdmFsQ29weTogU3R5bGVUeXBlcy5Cb3JkZXJJbWFnZV9PYmplY3QgPSBPYmplY3QuYXNzaWduKCB7fSwgdmFsKTtcclxuICAgIGlmICh2YWwuc2xpY2UgPT0gbnVsbCAmJiAodmFsLndpZHRoICE9IG51bGwgfHwgdmFsLm91dHNldCAhPSBudWxsKSlcclxuICAgICAgICB2YWxDb3B5LnNsaWNlID0gXCIxMDAlXCI7XHJcbiAgICBpZiAodmFsLndpZHRoID09IG51bGwgJiYgdmFsLm91dHNldCAhPSBudWxsKVxyXG4gICAgICAgIHZhbENvcHkud2lkdGggPSAxO1xyXG5cclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsQ29weSwgW1xyXG4gICAgICAgIFwic291cmNlXCIsXHJcbiAgICAgICAgW1wic2xpY2VcIiwgYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJ3aWR0aFwiLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcsIFwiL1wiXSxcclxuICAgICAgICBbXCJvdXRzZXRcIiwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nLCBcIi9cIl0sXHJcbiAgICAgICAgXCJyZXBlYXRcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBpbWFnZSBzbGljZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlckltYWdlU2xpY2VUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiB2ID0+IHZhbHVlVG9TdHJpbmcoIHYsIHtcclxuICAgICAgICAgICAgZnJvbUJvb2w6ICgpID0+IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHZhbDogU3R5bGVUeXBlcy5Cb3hTaGFkb3dfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wiaW5zZXRcIiwgdiA9PiB2ID8gXCJpbnNldFwiIDogXCJcIl0sXHJcbiAgICAgICAgW1wieFwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInlcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJibHVyXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wic3ByZWFkXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ11cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb3JuZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmFkaXVzPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5Cb3JkZXJSYWRpdXNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggdlswXSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHR3byBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzID0gYXJyYXlUb1N0cmluZyggdlswXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgICAgICBzICs9IFwiIC8gXCI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcyArIGFycmF5VG9TdHJpbmcoIHZbMV0sIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gc2luZ2xlIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlUb1N0cmluZyggdiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBzaWRlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVyVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5Cb3JkZXJfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHZbMF0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMF0pKVxyXG5cclxuICAgICAgICAgICAgaWYgKHZbMV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCB2YWx1ZVRvU3RyaW5nKHZbMV0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2WzJdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggY29sb3JUb1N0cmluZyh2WzJdKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnVmLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbnMgc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2x1bW5zVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5Db2x1bW5zX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB2WzBdICsgXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMV0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY3Vyc29yIHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY3Vyc29yVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5DdXJzb3JfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyB0aGUgdmFsdWUgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIGZ1bmN0aW9uIG9yIGFuIGFycmF5LiBJZiBpdCBpcyBhbiBhcnJheSxcclxuICAgIC8vIGlmIHRoZSBmaXJzdCBlbGVtZW50IGlzIGEgZnVuY3Rpb24sIHRoZW4gd2UgbmVlZCB0byB1c2Ugc3BhY2UgYXMgYSBzZXBhcmF0b3IgKGJlY2F1c2VcclxuICAgIC8vIHRoaXMgaXMgYSBVUkwgd2l0aCBvcHRpb25hbCBudW1iZXJzIGZvciB0aGUgaG90IHNwb3QpOyBvdGhlcndpc2UsIHdlIHVzZSBjb21tYSBhcyBhXHJcbiAgICAvLyBzZXBhcmF0b3IgLSBiZWNhdXNlIHRoZXNlIGFyZSBtdWx0aXBsZSBjdXJzb3IgZGVmaW5pdGlvbnMuXHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHYubGVuZ3RoID09PSAxKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcodik7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2WzFdID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHYsIHsgYXJyYXlTZXBhcmF0b3I6IFwiIFwifSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5SXRlbUZ1bmM6IGN1cnNvclRvU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5U2VwYXJhdG9yOiBcIixcIlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmbGV4IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZmxleFRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuRmxleF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LmpvaW4oIFwiIFwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbMF0gKyBcIiBcIiArIHZbMV0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsyXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRfZnJvbU9iamVjdCggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKCB2YWwsIFtcclxuICAgICAgICBbXCJzdHlsZVwiLCBmb250U3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgXCJ2YXJpYW50XCIsXHJcbiAgICAgICAgXCJ3ZWlnaHRcIixcclxuICAgICAgICBcInN0cmV0Y2hcIixcclxuICAgICAgICBbXCJzaXplXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wibGluZUhlaWdodFwiLCB2ID0+IHYudG9TdHJpbmcoKSAsIFwiL1wiXSxcclxuICAgICAgICBcImZhbWlseVwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxTdHlsZVR5cGVzLkZvbnRfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBcIm9ibGlxdWUgXCIgKyBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggdilcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UZXh0RGVjb3JhdGlvbl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgXCJsaW5lXCIsXHJcbiAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInRoaWNrbmVzc1wiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEV4dGVuZGVkPFN0eWxlVHlwZXMuVHJhbnNpdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmplY3RUb1N0cmluZyggdmFsLCBbXHJcbiAgICAgICAgW1wicHJvcGVydHlcIiwgY2FtZWxUb0Rhc2hdLFxyXG4gICAgICAgIFtcImR1cmF0aW9uXCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImZ1bmNcIiwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlXSxcclxuICAgICAgICBbXCJkZWxheVwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVHJhbnNpdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8U3R5bGVUeXBlcy5UcmFuc2l0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgU3R5bGVzZXRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2Ugc3R5bGVzZXQgdG8gdGhlIHRhcmdldCBzdHlsZXNldC4gQWxsIHJlZ3VsYXIgcHJvcGVydGllcyBhcmVcclxuICogcmVwbGFjZWQuIFRoZSBcIi0tXCIgcHJvcGVydHkgZ2V0cyBzcGVjaWFsIHRyZWF0bWVudCBiZWNhdXNlIGl0IGlzIGFuIGFycmF5LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gc291cmNlIFxyXG4gKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIHRhcmdldCBzdHlsZXNldCBpZiBub3QgbnVsbCBvciBhIG5ldyBzdHlsZXNldCBvdGhlcndpc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldHMoIHRhcmdldDogU3R5bGVUeXBlcy5TdHlsZXNldCB8IHVuZGVmaW5lZCB8IG51bGwsXHJcbiAgICBzb3VyY2U6IFN0eWxlVHlwZXMuU3R5bGVzZXQpOiBTdHlsZVR5cGVzLlN0eWxlc2V0XHJcbntcclxuICAgIGlmICghc291cmNlKVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQgPyB0YXJnZXQgOiB7fTtcclxuXHJcbiAgICAvLyBpZiB0YXJnZXQgaXMgbm90IGRlZmluZWQsIGNyZWF0ZSBpdCBhcyBhbiBlbXB0eSBvYmplY3QuIFRoaXMgb2JqZWN0IHdpbGwgYmUgcmV0dXJuZWQgYWZ0ZXJcclxuICAgIC8vIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIGFyZSBjb3BpZWQgdG8gaXQuXHJcbiAgICBpZiAoIXRhcmdldClcclxuICAgIHtcclxuICAgICAgICB0YXJnZXQgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCB0YXJnZXQsIHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkLiBJZiBub3QsIHdlIGNhbiBqdXN0IHVzZSB0aGUgT2JqZWN0LmFzc2lnbiBmdW5jdGlvbi5cclxuICAgIGxldCBzb3VyY2VDdXN0b21Qcm9wcyA9IHNvdXJjZVtcIi0tXCJdO1xyXG4gICAgaWYgKCFzb3VyY2VDdXN0b21Qcm9wcylcclxuICAgIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCB0YXJnZXQsIHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXJnZSBjdXN0b20gYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzXHJcbiAgICBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRhcmdldCwgc291cmNlKTtcclxuXHJcbiAgICAvLyBjb3B5IGFsbCBvdGhlciBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZVxyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHNvdXJjZSlcclxuXHR7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIiFcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xyXG5cdH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgXCItLVwiIHByb3BlcnR5IGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGFyZ2V0OiBTdHlsZVR5cGVzLlN0eWxlc2V0LFxyXG4gICAgc291cmNlOiBTdHlsZVR5cGVzLlN0eWxlc2V0KTogdm9pZFxyXG57XHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBpbXBvcnRhbnQgcHJvcGVydGllcyBhcmUgZGVmaW5lZFxyXG4gICAgbGV0IHNvdXJjZUN1c3RvbVByb3BzID0gc291cmNlW1wiLS1cIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBtZXJnZSBjdXN0b20gcHJvcGVydGllc1xyXG4gICAgaWYgKHNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0YXJnZXRDdXN0b21Qcm9wcyA9IHRhcmdldFtcIi0tXCJdO1xyXG4gICAgICAgIHRhcmdldFtcIi0tXCJdID0gIXRhcmdldEN1c3RvbVByb3BzID8gc291cmNlQ3VzdG9tUHJvcHMuc2xpY2UoKSA6IHRhcmdldEN1c3RvbVByb3BzLmNvbmNhdCggc291cmNlQ3VzdG9tUHJvcHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3R5bGVzZXQgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZyggc3R5bGVzZXQ6IFN0eWxlVHlwZXMuU3R5bGVzZXQpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFzdHlsZXNldClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgYnVmOiBzdHJpbmdbXSA9IFtdO1xyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG5cdHtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiLS1cIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgb2YgdGhlIFwiLS1cIiBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gYXJyYXkgd2hlcmUgZWFjaCBpdGVtIGlzXHJcbiAgICAgICAgICAgIC8vIGEgdHdvLWl0ZW0gb3IgdGhyZWUtaXRlbSBhcnJheVxyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbCA9IHN0eWxlc2V0W3Byb3BOYW1lXSBhcyBTdHlsZVR5cGVzLkN1c3RvbVZhcl9TdHlsZVR5cGVbXTtcclxuICAgICAgICAgICAgZm9yKCBsZXQgY3VzdG9tVmFsIG9mIHByb3BWYWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICghY3VzdG9tVmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjdXN0b21Qcm9wVG9TdHJpbmcoIGN1c3RvbVZhbCwgZmFsc2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAgICAgYnVmLnB1c2goIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZSwgc3R5bGVzZXRbcHJvcE5hbWVdKSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICAvLyBqb2luIGFsbCBlbGVtZW50cyBpbiB0aGUgYXJyYXkgZXhjZXB0IG51bGxzLCB1bmRlZmluZWQgYW5kIGVtcHR5IHN0cmluZ3NcclxuICAgIHJldHVybiBidWYuZmlsdGVyKCBpdGVtID0+IGl0ZW0gIT0gbnVsbCkuam9pbihcIjtcIik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IGRlZmluaXRpb24gdG8gc3RyaW5nLlxyXG4gKiBAcGFyYW0gcHJvcFZhbCBcclxuICogQHBhcmFtIHZhbHVlT25seSBcclxuICovXHJcbmZ1bmN0aW9uIGN1c3RvbVByb3BUb1N0cmluZyggcHJvcFZhbDogU3R5bGVUeXBlcy5DdXN0b21WYXJfU3R5bGVUeXBlLCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcFZhbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgdmFyTmFtZTogc3RyaW5nO1xyXG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBsZXQgdmFsdWU6IGFueTtcclxuICAgIGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuICAgIHtcclxuICAgICAgICB2YXJOYW1lID0gKHByb3BWYWxbMF0gYXMgVmFyUnVsZSkuY3NzTmFtZTtcclxuICAgICAgICB0ZW1wbGF0ZSA9IHByb3BWYWxbMF0udGVtcGxhdGU7XHJcbiAgICAgICAgdmFsdWUgPSBwcm9wVmFsWzFdXHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdmFyTmFtZSA9IHByb3BWYWxbMF07XHJcbiAgICAgICAgaWYgKCF2YXJOYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICBlbHNlIGlmICghdmFyTmFtZS5zdGFydHNXaXRoKFwiLS1cIikpXHJcbiAgICAgICAgICAgIHZhck5hbWUgPSBcIi0tXCIgKyB2YXJOYW1lO1xyXG5cclxuICAgICAgICB0ZW1wbGF0ZSA9IHByb3BWYWxbMV07XHJcbiAgICAgICAgaWYgKCF2YXJOYW1lIHx8ICF0ZW1wbGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgICAgIHZhbHVlID0gcHJvcFZhbFsyXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdmFyVmFsdWUgPSBzdHlsZVByb3BUb1N0cmluZyggdGVtcGxhdGUsIHZhbHVlLCB0cnVlKTtcclxuICAgIHJldHVybiB2YWx1ZU9ubHkgPyB2YXJWYWx1ZSA6IGAke3Zhck5hbWV9OiR7dmFyVmFsdWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3R5bGUgc3RyaW5nXHJcbiAqIEBwYXJhbSBzdHlsZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcE5hbWUpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgZm9yIHRoZSBwcm9wZXJ0eVxyXG4gICAgbGV0IGluZm86IGFueSA9IFN0eWxlUHJvcGVydHlJbmZvc1twcm9wTmFtZV07XHJcblxyXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBcIiFcIiBwcm9wZXJ0eSwgdGhlbiB0aGUgYWN0dWFsIHZhbHVlIGlzIHRoZVxyXG4gICAgLy8gdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBhbmQgd2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZ1xyXG4gICAgbGV0IHZhclZhbHVlID0gcHJvcFZhbDtcclxuICAgIGxldCBpbXBGbGFnID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwib2JqZWN0XCIgJiYgXCIhXCIgaW4gcHJvcFZhbClcclxuICAgIHtcclxuICAgICAgICB2YXJWYWx1ZSA9IHByb3BWYWxbXCIhXCJdO1xyXG4gICAgICAgIGltcEZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgbGV0IHN0cmluZ1ZhbHVlID0gIWluZm9cclxuICAgICAgICA/IHZhbHVlVG9TdHJpbmcoIHZhclZhbHVlKVxyXG4gICAgICAgIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgPyB2YWx1ZVRvU3RyaW5nKCB2YXJWYWx1ZSwgaW5mbyBhcyBJVmFsdWVDb252ZXJ0T3B0aW9ucylcclxuICAgICAgICAgICAgOiAoaW5mbyBhcyBQcm9wVG9TdHJpbmdGdW5jKSggdmFyVmFsdWUpO1xyXG5cclxuICAgIGlmICghc3RyaW5nVmFsdWUgJiYgIXZhbHVlT25seSlcclxuICAgICAgICBzdHJpbmdWYWx1ZSA9IFwiaW5pdGlhbFwiO1xyXG5cclxuICAgIGlmIChpbXBGbGFnKVxyXG4gICAgICAgIHN0cmluZ1ZhbHVlICs9IFwiICFpbXBvcnRhbnRcIjtcclxuXHJcbiAgICByZXR1cm4gdmFsdWVPbmx5ID8gc3RyaW5nVmFsdWUgOiBgJHtjYW1lbFRvRGFzaCggcHJvcE5hbWUpfToke3N0cmluZ1ZhbHVlfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZ2lzdHJ5IG9mIENTUyBwcm9wZXJ0aWVzIHRoYXQgc3BlY2lmaWVzIGhvdyB0aGVpciB2YWx1ZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIC8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgcHJvcGVydHkgdmFsdWUgYW5kIGNvbnZlcnRzIGl0IHRvIHN0cmluZyAqL1xyXG4vLyB0eXBlIFByb3BUb1N0cmluZ0Z1bmM8SyBleHRlbmRzIFN0eWxlVHlwZXMuVmFyVGVtcGxhdGVOYW1lID0gYW55PiA9ICh2YWw6IFN0eWxlVHlwZXMuVmFyVmFsdWVUeXBlPEs+KSA9PiBzdHJpbmc7XHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHByb3BlcnR5IHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxudHlwZSBQcm9wVG9TdHJpbmdGdW5jID0gKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcbi8vIEhlbHBlciBvYmplY3QgdGhhdCBpcyB1c2VkIHRvIGluZGljYXRlIHRoYXQgdmFsdWVzIGluIGFuIGFycmF5IHNob3VsZCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEuXHJcbi8vIFdlIHVzZSBpdCBtYW55IHRpbWVzIGluIHRoZSBzdHVjdHVyZSBiZWxvdy5cclxubGV0IGNvbW1hQXJyYXlTZXBhcmF0b3IgPSB7IGFycmF5U2VwYXJhdG9yOiBcIixcIiB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHRoZSBTdHlsZVByb3BlcnR5SW5mbyBvYmplY3RzIGRlc2NyaWJpbmcgY3VzdG9tIGFjdGlvbnMgbmVjZXNzYXJ5IHRvXHJcbiAqIGNvbnZlcnQgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBDU1MtY29tcGxpYW50IHN0cmluZy5cclxuICovXHJcbmNvbnN0IFN0eWxlUHJvcGVydHlJbmZvczogeyBbSyBpbiBTdHlsZVR5cGVzLlZhclRlbXBsYXRlTmFtZV0/OiAoUHJvcFRvU3RyaW5nRnVuYyB8IElWYWx1ZUNvbnZlcnRPcHRpb25zKSB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iamVjdDogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0aW9uRGVsYXk6IG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25GaWxsTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGFuaW1hdGlvbk5hbWU6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRDbGlwOiBjb21tYUFycmF5U2VwYXJhdG9yLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZE9yaWdpbjogY29tbWFBcnJheVNlcGFyYXRvcixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogdiA9PiBtdWx0aVBvc2l0aW9uVG9TdHJpbmcoIHYsIFwiLFwiKSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGNvbW1hQXJyYXlTZXBhcmF0b3IsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kU2l6ZV9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9LFxyXG4gICAgYmFzZWxpbmVTaGlmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrRW5kOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja0VuZFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0OiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrU3RhcnRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlckJsb2NrU3RhcnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21XaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyQ29sb3I6IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBib3JkZXJJbWFnZToge1xyXG4gICAgICAgIGZyb21PYmplY3Q6IGJvcmRlckltYWdlVG9TdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW1hZ2VTbGljZTogYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW1hZ2VXaWR0aDogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvcmRlcklubGluZUVuZDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVFbmRDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlcklubGluZUVuZFdpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyTGVmdDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0V2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVyU3BhY2luZzogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGJvcmRlclRvcDogYm9yZGVyVG9TdHJpbmcsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGJvcmRlcldpZHRoOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgYm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBib3hTaGFkb3c6IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmV0Q29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBjbGlwOiAge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgcmVjdCgke211bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2Uodil9YFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgY29sdW1uR2FwOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBjb2x1bW5SdWxlOiBib3JkZXJUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVTdHlsZTogdmFsdWVUb1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVXaWR0aDogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIGNvbHVtbnM6IGNvbHVtbnNUb1N0cmluZyxcclxuICAgIGNvbHVtbldpZHRoOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBjdXJzb3I6IGN1cnNvclRvU3RyaW5nLFxyXG5cclxuICAgIGZpbGw6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICBmaWxsT3BhY2l0eTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGZsZXg6IGZsZXhUb1N0cmluZyxcclxuICAgIGZsZXhCYXNpczogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZmxvb2RDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIGZvbnQ6IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBmb250X2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICBmb250U2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgZm9udFN0eWxlOiBmb250U3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBnYXA6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBncmlkQ29sdW1uR2FwOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBncmlkR2FwOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgZ3JpZFJvd0dhcDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGhlaWdodDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGlubGluZVNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBsZWZ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBsaWdodGluZ0NvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG5cclxuICAgIG1hcmdpbjogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIG1hcmdpbkJsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5Cb3R0b206IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbklubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFyZ2luSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpbkxlZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1hcmdpblJpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJnaW5Ub3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1heEJsb2NrU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhJbmxpbmVTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhXaWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWF4Wm9vbTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1pbkJsb2NrU2l6ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgbWluSGVpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBtaW5JbmxpbmVTaXplOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblx0bWluV2lkdGg6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG1pblpvb206IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgb2JqZWN0UG9zaXRpb246IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICBvdXRsaW5lOiBib3JkZXJUb1N0cmluZyxcclxuICAgIG91dGxpbmVDb2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIG91dGxpbmVPZmZzZXQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIG91dGxpbmVTdHlsZTogdmFsdWVUb1N0cmluZyxcclxuXHJcbiAgICBwYWRkaW5nOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgcGFkZGluZ0Jsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nQmxvY2tTdGFydDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0lubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwYWRkaW5nVG9wOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBwZXJzcGVjdGl2ZTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgcXVvdGVzOiB7XHJcbiAgICAgICAgYXJyYXlJdGVtRnVuYzogdiA9PiBgXCIke3Z9XCJgXHJcbiAgICB9LFxyXG5cclxuICAgIHJpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICByb3dHYXA6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICBzY3JvbGxNYXJnaW46IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9jazogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrRW5kOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5Cb3R0b206IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZTogbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpbkxlZnQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbE1hcmdpblJpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxNYXJnaW5Ub3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmc6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tFbmQ6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja1N0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nQm90dG9tOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lOiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZUVuZDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nTGVmdDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc2Nyb2xsUGFkZGluZ1JpZ2h0OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzY3JvbGxQYWRkaW5nVG9wOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBzaGFwZU1hcmdpbjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgc3RvcENvbG9yOiBjb2xvclRvU3RyaW5nLFxyXG5cclxuICAgIHRhYlNpemU6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRleHRDb21iaW5lVXByaWdodDoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gYGRpZ2l0cyAke3Z9YFxyXG4gICAgfSxcclxuICAgIHRleHREZWNvcmF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqZWN0OiB0ZXh0RGVjb3JhdGlvbl9mcm9tT2JqZWN0XHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb25Db2xvcjogY29sb3JUb1N0cmluZyxcclxuICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB0ZXh0RW1waGFzaXM6IHtcclxuICAgICAgICBhcnJheUl0ZW1GdW5jOiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICB0ZXh0SW5kZW50OiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRleHRTaGFkb3c6IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dFNpemVBZGp1c3Q6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB0b3A6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBmcm9tT2JqZWN0OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlVHJhbnNpdGlvbl9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25EZWxheToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IFwiLFwiXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJheVNlcGFyYXRvcjogXCIsXCJcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcsXHJcbiAgICB0cmFuc2xhdGU6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgdmVydGljYWxBbGlnbjoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICB3aWR0aDogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgd2lsbENoYW5nZToge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IGNhbWVsVG9EYXNoXHJcbiAgICB9LFxyXG4gICAgd29yZFNwYWNpbmc6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICB6b29tOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIC8vIHNwZWNpYWwgcHJvcGVydGllcyBmb3IgSVZhclJ1bGUgdHlwZXNcclxuICAgIFwiQ3NzTGVuZ3RoXCI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzQW5nbGVcIjogQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1RpbWVcIjogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUmVzb2x1dGlvblwiOiBDc3NSZXNvbHV0aW9uTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NGcmVxdWVuY3lcIjogQ3NzRnJlcXVlbmN5TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NQZXJjZW50XCI6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1Bvc2l0aW9uXCI6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICBcIkNzc0NvbG9yXCI6IGNvbG9yVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc3VwcG9ydHMgcXVlcnkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTdHlsZVR5cGVzLlN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVTdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiBvciBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU3R5bGVUeXBlcy5TaW5nbGVTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG5cclxuICAgIGxldCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyggcXVlcnkpLmZpbHRlciggKHByb3BOYW1lKSA9PiBwcm9wTmFtZSAhPSBcIiRuZWdhdGVcIik7XHJcbiAgICBpZiAocHJvcE5hbWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbm90ID0gcXVlcnkuJG5lZ2F0ZSA/IFwibm90XCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuICBgJHtub3R9ICgke3Byb3BOYW1lcy5tYXAoIChwcm9wTmFtZSkgPT5cclxuICAgICAgICBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUgYXMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldCwgcXVlcnlbcHJvcE5hbWVdKSkuam9pbiggXCIpIGFuZCAoXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBFeHRlbmRlZCwgTnVtYmVyUHJveHksIENzc051bWJlciwgQ3NzTXVsdGlOdW1iZXIsIElOdW1iZXJNYXRoLFxyXG4gICAgQ3NzUG9zaXRpb24sIE11bHRpQ3NzUG9zaXRpb24sIE51bWJlckJhc2UsIE11bHRpTnVtYmVyQmFzZSxcclxuICAgIENzc0xlbmd0aCwgQ3NzTXVsdGlMZW5ndGgsIENzc0FuZ2xlLCBDc3NNdWx0aUFuZ2xlLCBDc3NUaW1lLCBDc3NNdWx0aVRpbWUsXHJcbiAgICBDc3NSZXNvbHV0aW9uLCBDc3NNdWx0aVJlc29sdXRpb24sIENzc0ZyZXF1ZW5jeSwgQ3NzTXVsdGlGcmVxdWVuY3ksXHJcbiAgICBDc3NQZXJjZW50LCBDc3NNdWx0aVBlcmNlbnQsIElDc3NMZW5ndGhNYXRoLFxyXG4gICAgSUNzc0FuZ2xlTWF0aCwgSUNzc1BlcmNlbnRNYXRoLCBJQ3NzRnJlcXVlbmN5TWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLCBJQ3NzVGltZU1hdGgsXHJcbiAgICBOdW1iZXJUeXBlLCBMZW5ndGhUeXBlLCBQZXJjZW50VHlwZSwgQW5nbGVUeXBlLCBUaW1lVHlwZSwgUmVzb2x1dGlvblR5cGUsIEZyZXF1ZW5jeVR5cGVcclxufSBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWNzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBkYXNoZS1jYXNlIHRvIGNhbWVsQ2FzZSwgZS5nLiBmb250LXNpemUgdG8gZm9udFNpemUuXHJcbiAqIEBwYXJhbSBkYXNoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFkYXNoKVxyXG5cdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdHJldHVybiBkYXNoLnJlcGxhY2UoIC8tKFthLXpBLVpdKS9nLCAoeCwgJDEpID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjYW1lbENhc2UgdG8gZGFzaC1jYXNlLCBlLmcuIGZvbnRTaXplIHRvIGZvbnQtc2l6ZS5cclxuICogQHBhcmFtIGNhbWVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2goIGNhbWVsOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gIHJldHVybiBjYW1lbC5yZXBsYWNlKCAvKFthLXpBLVpdKSg/PVtBLVpdKS9nLCAnJDEtJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWYWx1ZUNvbnZlcnRPcHRpb25zIGludGVyZmFjZSBkZWZpbmVzIG9wdGlvbmFsIGZ1bmN0aW9ucyB0aGF0IGNvbnZlcnR2YWx1ZXMgb2YgZGlmZmVybnRcclxuICogdHlwZXMgdG8gc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhbHVlQ29udmVydE9wdGlvbnNcclxue1xyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgICBmcm9tTnVsbD86ICggdmFsOiBudWxsIHwgdW5kZWZpbmVkKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgc3RyaW5nLiBUaGlzIGFsbG93cyB0cmFuc2Zvcm1pbmcgb25lIHN0cmluZyB0byBhbm90aGVyLlxyXG4gICAgZnJvbVN0cmluZz86ICggdmFsOiBzdHJpbmcpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBib29sZWFuXHJcbiAgICBmcm9tQm9vbD86ICh2YWw6IGJvb2xlYW4pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBudW1iZXJcclxuICAgIGZyb21OdW1iZXI/OiAodmFsOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gYXJyYXlcclxuICAgIGZyb21BcnJheT86ICh2YWw6IGFueVtdKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGFuIG9iamVjdFxyXG4gICAgZnJvbU9iamVjdD86ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB0eXBlLXNwZWNpZmljIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkXHJcbiAgICBmcm9tQW55PzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIHRvIGNvbnZlcnQgYXJyYXkgaXRlbXMgaWYgZnJvbUFycmF5IGlzIG5vdCBkZWZpbmVkXHJcbiAgICBhcnJheUl0ZW1GdW5jPzogKHY6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIFNlcGFyYXRvciBmb3IgYXJyYXkgaXRlbXMgLSB1c2VkIG9ubHkgaWYgZnJvbUFycmF5IGlzIG5vdCBkZWZpbmVkXHJcbiAgICBhcnJheVNlcGFyYXRvcj86IHN0cmluZztcclxuXHJcbiAgICAvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCB0aGVzZSBhcmUgYXJndW1lbnRzIHRvIHBhc3Mgd2hlbiBpbnZva2luZyBpdFxyXG4gICAgZnVuY0FyZ3M/OiBhbnlbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSB2YWx1ZSBvZiBhbiBhcmJpdHJhcnkgdHlwZSB0byBhIHNpbmdsZSBzdHJpbmcuIFRoZSBvcHRpb25hbCBvcHRpb25zIHBhcmFtZXRlclxyXG4gKiBjYW4gZGVmaW5lIGhvdyBzcGVjaWZpYyB0eXBlcyBhcmUgY29udmVydGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlVG9TdHJpbmcoIHZhbDogYW55LCBvcHRpb25zPzogSVZhbHVlQ29udmVydE9wdGlvbnMpOiBzdHJpbmdcclxue1xyXG4gICBpZiAoIW9wdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc3RhbmRhcmQgcHJvY2Vzc2luZzpcclxuICAgICAgICAvLyAtIG51bGwvdW5kZWZpbmVkIGJlY29tZSBlbXB0eSBzdHJpbmcuXHJcbiAgICAgICAgLy8gLSBjYWxsIHZhbHVlVG9TdHJpbmcgKHByb3h5IG9iamVjdHMpIGlmIGV4aXN0LlxyXG4gICAgICAgIC8vIC0gZnVuY3Rpb246IGNhbGwgd2l0aG91dCBwYXJhbWV0ZXJzLlxyXG4gICAgICAgIC8vIC0gZXZlcnl0aGluZyBlbHNlOiBjYWxsIHRvU3RyaW5nKCkuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5VG9TdHJpbmcoIHZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbC52YWx1ZVRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIHByb2Nlc3Npbmcgd2l0aCBvcHRpb25zLiBGb3IgYWxsIHR5cGVzIGV4Y2VwdCBudWxsIGFuZCBzdHJpbmcsIGlmIHRoZSB0eXBlLXNwZWNpZmljXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIGNhbGwgZnJvbUFueSBpZiBkZWZpbmVkLlxyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bGwgPyBvcHRpb25zLmZyb21OdWxsKCB2YWwpIDogXCJcIjtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tU3RyaW5nID8gb3B0aW9ucy5mcm9tU3RyaW5nKCB2YWwpIDogdmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21OdW1iZXIgPyBvcHRpb25zLmZyb21OdW1iZXIoIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVRvU3RyaW5nKCBvcHRpb25zLmZ1bmNBcmdzID8gdmFsKCAuLi5vcHRpb25zLmZ1bmNBcmdzKSA6IHZhbCgpKTtcclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mcm9tQXJyYXkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQXJyYXkoIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9IG9wdGlvbnMuYXJyYXlTZXBhcmF0b3IgIT0gbnVsbCA/IG9wdGlvbnMuYXJyYXlTZXBhcmF0b3IgOiBcIiBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVRvU3RyaW5nKCB2YWwsIG9wdGlvbnMuYXJyYXlJdGVtRnVuYyB8fCBvcHRpb25zLmZyb21BbnkgfHwgdW5kZWZpbmVkLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbC52YWx1ZVRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnZhbHVlVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU9iamVjdCggdmFsKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tQW55KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUJvb2wgPyBvcHRpb25zLmZyb21Cb29sKCB2YWwpIDogb3B0aW9ucy5mcm9tQW55ID8gb3B0aW9ucy5mcm9tQW55KCB2YWwpIDogdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tQW55KVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBvZiB0aGUgZ2l2ZW4gdHlwZXRvIGEgc2luZ2xlIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gc2VwYXJhdG9yLlxyXG4gKiBFbGVtZW50cyBvZiB0aGUgYXJyYXkgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzIHVzaW5nIHRoZSBnaXZlbiBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvU3RyaW5nKCB2YWw6IGFueVtdLCBmdW5jPzogKHYpID0+IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gIXZhbCB8fCB2YWwubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgOiB2YWwuZmlsdGVyKCB4ID0+IHggIT0gbnVsbCkubWFwKCB5ID0+IGZ1bmMgPyBmdW5jKHkpIDogdmFsdWVUb1N0cmluZyggeSkpLmpvaW4oIHNlcGFyYXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE9iamVjdCB0byBjb252ZXJ0IHRvIHN0cmluZy5cclxuICogQHBhcmFtIHVzZVByb3BOYW1lcyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbmFtZXMgb2YgdGhlIG9iamVjdCdzIHByb3BydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy5cclxuICogQHBhcmFtIHByb3BzQW5kRnVuY3MgQXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIG9wdGlvbmFsbHkgZnVuY3Rpb25zLiBUaGUgb3JkZXIgb2YgdGhlIG5hbWVzIGRldGVybWluZXMgaW5cclxuICogICAgIHdoaWNoIG9yZGVyIHRoZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc3RyaW5nLiBJZiBhIGZ1bmN0aW9uIGlzIHByZXNlbnQgZm9yIHRoZSBwcm9wZXJ0eSxcclxuICogICAgIGl0IHdpbGwgYmUgdXNlZCB0byBjb252ZXJ0IHRoZSBwcm9wZXJ0eSdzIHZhbHVlIHRvIHRoZSBzdHJpbmcuIElmIGEgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQsIHRoZW4gdGhlXHJcbiAqICAgICBwcm9wZXJ0eSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkIHRvIHRoZSBzdHJpbmcgdXNpbmcgdGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcoIHZhbDogYW55LCBwcm9wc0FuZEZ1bmNzOiAoc3RyaW5nIHwgW3N0cmluZywgKHZhbDogYW55KSA9PiBzdHJpbmcsIHN0cmluZz9dKVtdLFxyXG4gICAgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIiwgdXNlUHJvcE5hbWVzOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHZhbCA9PSBudWxsIHx8IHByb3BzQW5kRnVuY3MubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGxldCBidWY6IChzdHJpbmcpW10gPSBbXTtcclxuICAgIHByb3BzQW5kRnVuY3MuZm9yRWFjaCggcHJvcEFuZEZ1bmMgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZSA9IHR5cGVvZiBwcm9wQW5kRnVuYyA9PT0gXCJzdHJpbmdcIiA/IHByb3BBbmRGdW5jIDogcHJvcEFuZEZ1bmNbMF07XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbCA9IHZhbFtwcm9wTmFtZV07XHJcbiAgICAgICAgICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlUHJvcE5hbWVzKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHByb3BOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcmVmaXggPSB0eXBlb2YgcHJvcEFuZEZ1bmMgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBwcm9wQW5kRnVuY1syXTtcclxuICAgICAgICAgICAgaWYgKHByZWZpeClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZ1bmMgPSB0eXBlb2YgcHJvcEFuZEZ1bmMgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBwcm9wQW5kRnVuY1sxXTtcclxuICAgICAgICAgICAgaWYgKGZ1bmMpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggZnVuYyggcHJvcFZhbCkpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChwcm9wVmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggdmFsdWVUb1N0cmluZyggcHJvcFZhbCkpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG5cdHJldHVybiBidWYuam9pbihzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgdGVtcGxhdGVTdHJpbmdUb1N0cmluZyBpcyBhIHRhZyBmdW5jdGlvbiBoZWxwZXIgdGhhdCBjb252ZXJ0cyB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhcclxuICogcGFyYW1ldGVycyB0byBhIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gY29udmVydCBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcGFyYW1zOiBhbnlbXSxcclxuICAgIGNvbnZlcnRGdW5jOiAoIHY6IGFueSkgPT4gc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIC8vIG51bWJlciBvZiBwYXJhbWV0ZXJzIGlzIGFsd2F5cyAxIGxlc3MgdGhhbiB0aGUgbnVtYmVyIG9mIHN0cmluZyBwYXJ0c1xyXG4gICAgbGV0IHBhcmFtc0xlbiA9IHBhcmFtcy5sZW5ndGg7XHJcbiAgICBpZiAocGFyYW1zTGVuID09PSAwKVxyXG4gICAgICAgIHJldHVybiBwYXJ0c1swXTtcclxuXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHBhcmFtc0xlbjsgaSsrKVxyXG4gICAgICAgIHMgKz0gcGFydHNbaV0gKyBjb252ZXJ0RnVuYyggcGFyYW1zW2ldKTtcclxuXHJcbiAgICAvLyBhZGQgdGhlIGxhc3QgcGFydFxyXG4gICAgcmV0dXJuIHMgKyBwYXJ0c1twYXJhbXNMZW5dO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBvZiBmdW5jdGlvbnMgdGhhdCBjb252ZXJ0IGEgbnVtYmVyIHRvIGEgc3RyaW5nICovXHJcbnR5cGUgQ29udmVydE51bWJlckZ1bmNUeXBlID0gKG46IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSB0byBhIENTUyBzdHJpbmcgb3B0aW9uYWxseSBhcHBlbmRpbmcgdW5pdHMgdGhhdCBjYW4gYmUgZGlmZmVyZW50XHJcbiAqIGZvciBpbnRlZ2VyIGFuZCBmbG9hdGluZyBwb2ludCBudW1iZXJzLlxyXG4gKiBAcGFyYW0gbiBOdW1iZXIgdG8gY29udmVydCB0byBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAqIEBwYXJhbSBpbnRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGludGVnZXIuXHJcbiAqIEBwYXJhbSBmbG9hdFVuaXQgVW5pdHMgdG8gYXBwZW5kIGlmIHRoZSBudW1iZXIgaXMgZmxvYXRpbmcgcG9pbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBudW1iZXJUb1N0cmluZyggbjogbnVtYmVyLCBpbnRVbml0OiBzdHJpbmcgPSBcIlwiLCBmbG9hdFVpbnQ6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIobikgPyAgbiArIGludFVuaXQgOiBuICsgZmxvYXRVaW50O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGltZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBOdW1iZXIgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIHN0eWxlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsdWVUb1N0cmluZyggdmFsLCB7IGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgQ3NzTnVtYmVyIG9yIGFycmF5IG9mIENzc051bWJlciBvYmplY3RzIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpbmdsZS0gb3IgbXVsdGktbnVtYmVyIHN0eWxlIHZhbHVlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICogQHBhcmFtIHNlcGFyYXRvciBTdHJpbmcgdG8gdXNlIHRvIHNlcGFyYXRlIG11bHRpcGxlIHZhbHVlcy5cclxuICovXHJcbmZ1bmN0aW9uIG11bHRpU3R5bGVUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LFxyXG4gICAgICAgICAgICAgICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jLFxyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IHYgPT4gc3R5bGVUb1N0cmluZyggdiwgY29udmVydEZ1bmMpLFxyXG4gICAgICAgIGFycmF5U2VwYXJhdG9yOiBzZXBhcmF0b3JcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWF0aEZ1bmMgZnVuY3Rpb24gcmV0dXJucyBvbmUgb2YgdGhlIG1hdGhlbWF0aWMgQ1NTIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgb3IgbW9yZVxyXG4gKiBwYXJhbWV0ZXJzIHdob3NlIHR5cGUgaXMgZGVyaXZlZCBmcm9tIE51bWJlckJhc2U8VD4uXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXRoRnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggbmFtZTogc3RyaW5nLCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHttdWx0aVN0eWxlVG9TdHJpbmcoIHBhcmFtcywgY29udmVydEZ1bmMsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIGNhbGNGdW5jIGZ1bmN0aW9uIHJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY2FsYygpIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGNGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgY2FsYygke3RlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMsICh2OiBhbnkpID0+IHN0eWxlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSB1bml0RnVuYyBmdW5jdGlvbiByZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gbnVtYmVyIHdpdGggdGhlIGdpdmVuIHVuaXRzLlxyXG4gKi9cclxuZnVuY3Rpb24gdW5pdEZ1bmM8VCBleHRlbmRzIHN0cmluZz4oIG46IG51bWJlciwgdW5pdDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBuICsgdW5pdDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciBKYXZhU2NyaXB0IHR5cGUgdGhleVxyXG4gKiBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgYnkgY2FsbGluZyBhIGZ1bmN0aW9uIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5jbGFzcyBOdW1iZXJNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+IGltcGxlbWVudHMgSU51bWJlck1hdGg8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBjb252ZXJ0RnVuYzogQ29udmVydE51bWJlckZ1bmNUeXBlKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBudW1iZXJUb1N0cmluZyA9IChuOiBudW1iZXIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RnVuYyggbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aVN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCB0aGlzLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtaW4oIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pblwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1heFwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJjbGFtcFwiLCBbbWluLCBwcmVmLCBtYXhdLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsYyggZm9ybXVsYVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogTnVtYmVyUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2FsY0Z1bmMoIGZvcm11bGFQYXJ0cywgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVyY2VudCggbjogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYyhuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdW5pdCggbjogbnVtYmVyLCB1bml0OiBzdHJpbmcpOiBOdW1iZXJQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB1bml0RnVuYzxUPiggbiwgdW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aENsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgXCJzdGF0aWNcIiBzaWRlIG9mIGNsYXNzZXMgZGVyaXZlZCBmcm9tIHRoZVxyXG4gKiBOdW1iZXJNYXRoIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyTWF0aENsYXNzPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gICAgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZztcclxuXHJcbiAgICBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TXVsdGlOdW1iZXJCYXNlPFQ+Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gICAgbmV3KCk6IElOdW1iZXJNYXRoPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVW5pdGxlc3MgbnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NOdW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bnVtYmVyPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTnVtYmVyTWF0aCBleHRlbmRzIE51bWJlck1hdGg8TnVtYmVyVHlwZT5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG4udG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NQZXJjZW50TWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHBlcmNlbnQ+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NQZXJjZW50TWF0aCBleHRlbmRzIE51bWJlck1hdGg8UGVyY2VudFR5cGU+IGltcGxlbWVudHMgSUNzc1BlcmNlbnRNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIChOdW1iZXIuaXNJbnRlZ2VyKG4pID8gbiA6IE1hdGgucm91bmQobiAqIDEwMCkpICsgXCIlXCI7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUGVyY2VudD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciB0byBzdHJpbmcgdXNpbmcgdGhlIGZvbGxvd2luZyBydWxlczpcclxuICogLSBpZiB0aGUgbnVtYmVyIGlzIGJldHdlZW4gLTEgYW5kIDEgKG5vbiBpbmNsdXNpdmUpLCBtdWx0aXBsaWVzIHRoZSBudW1iZXIgYW5kIGFwcGVuZHMgXCIlXCJcclxuICogLSBvdGhlcndpc2UsIGNvbnZlcnRzIHRoZSBudW1iZXIgdG8gc3RyaW5nIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1dGludHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyggbjogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBuID49IDEgfHwgbiA8PSAtMSA/IG4udG9TdHJpbmcoKSA6IE1hdGgucm91bmQobiAqIDEwMCkgKyBcIiVcIjtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBMZW5ndGhcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0xlbmd0aE1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxsZW5ndGg+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NMZW5ndGhNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxMZW5ndGhUeXBlPiBpbXBsZW1lbnRzIElDc3NMZW5ndGhNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJweFwiLCBcImVtXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NMZW5ndGg+LCBtYXg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBOdW1iZXJQcm94eTxMZW5ndGhUeXBlPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtaW5tYXhcIiwgW21pbiwgbWF4XSwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFEoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcIlFcIik7IH1cclxuICAgIHB1YmxpYyBjaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiY2hcIik7IH1cclxuICAgIHB1YmxpYyBjbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiY21cIik7IH1cclxuICAgIHB1YmxpYyBlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZW1cIik7IH1cclxuICAgIHB1YmxpYyBleCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZXhcIik7IH1cclxuICAgIHB1YmxpYyBpYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiaWNcIik7IH1cclxuICAgIHB1YmxpYyBpbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiaW5cIik7IH1cclxuICAgIHB1YmxpYyBsaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwibGhcIik7IH1cclxuICAgIHB1YmxpYyBtbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwibW1cIik7IH1cclxuICAgIHB1YmxpYyBwYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicGNcIik7IH1cclxuICAgIHB1YmxpYyBwdCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicHRcIik7IH1cclxuICAgIHB1YmxpYyBweCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicHhcIik7IH1cclxuICAgIHB1YmxpYyB2YiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmJcIik7IH1cclxuICAgIHB1YmxpYyB2aCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmhcIik7IH1cclxuICAgIHB1YmxpYyB2aSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidmlcIik7IH1cclxuICAgIHB1YmxpYyB2dyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidndcIik7IH1cclxuICAgIHB1YmxpYyByZW0oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInJlbVwiKTsgfVxyXG4gICAgcHVibGljIHJsaCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwicmxoXCIpOyB9XHJcbiAgICBwdWJsaWMgdm1heCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwidm1heFwiKTsgfVxyXG4gICAgcHVibGljIHZtaW4oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInZtaW5cIik7IH1cclxuICAgIHB1YmxpYyBmciggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiZnJcIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQW5nbGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0FuZ2xlTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGFuZ2xlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzQW5nbGVNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxBbmdsZVR5cGU+IGltcGxlbWVudHMgSUNzc0FuZ2xlTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZGVnXCIsIFwidHVyblwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBzdHlsZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUFuZ2xlPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgZGVnKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJkZWdcIik7IH1cclxuICAgIHB1YmxpYyByYWQoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInJhZFwiKTsgfVxyXG4gICAgcHVibGljIGdyYWQoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImdyYWRcIik7IH1cclxuICAgIHB1YmxpYyB0dXJuKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJ0dXJuXCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRpbWVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1RpbWVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8dGltZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1RpbWVNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxUaW1lVHlwZT4gaW1wbGVtZW50cyBJQ3NzVGltZU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIm1zXCIsIFwic1wiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NUaW1lPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlUaW1lPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzVGltZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIG1zKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJtc1wiKTsgfVxyXG4gICAgcHVibGljIHMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcInNcIik7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVzb2x1dGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzUmVzb2x1dGlvbk1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxyZXNvbHV0aW9uPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzUmVzb2x1dGlvbk1hdGggZXh0ZW5kcyBOdW1iZXJNYXRoPFJlc29sdXRpb25UeXBlPiBpbXBsZW1lbnRzIElDc3NSZXNvbHV0aW9uTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZHBpXCIsIFwieFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIHN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlSZXNvbHV0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUEkgKi9cclxuICAgIHB1YmxpYyBkcGkoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImRwaVwiKTsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBDTSAqL1xyXG4gICAgcHVibGljIGRwY20oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImRwY21cIik7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuICAgIHB1YmxpYyBkcHB4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdCggbiwgXCJkcHB4XCIpOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUFBYICovXHJcbiAgICBwdWJsaWMgeCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwieFwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGcmVxdWVuY3lcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0ZyZXF1ZW5jeU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxmcmVxdWVuY2U+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NGcmVxdWVuY3lNYXRoIGV4dGVuZHMgTnVtYmVyTWF0aDxGcmVxdWVuY3lUeXBlPiBpbXBsZW1lbnRzIElDc3NGcmVxdWVuY3lNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJIelwiLCBcImtIelwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NGcmVxdWVuY3k+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gc3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpRnJlcXVlbmN5Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYykgfVxyXG5cclxuICAgIHB1YmxpYyBoeiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXQoIG4sIFwiSHpcIik7IH1cclxuICAgIHB1YmxpYyBraHooIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0KCBuLCBcImtIelwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQb3NpdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgcG9zaXRpb24gc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdWxsOiB2ID0+IFwiXCIsXHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdiwgXCIgXCIpXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9zaXRpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxNdWx0aUNzc1Bvc2l0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbHVlVG9TdHJpbmcoIHZhbCwge1xyXG4gICAgICAgIGFycmF5SXRlbUZ1bmM6IHBvc2l0aW9uVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyYXlTZXBhcmF0b3I6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBiYXNpYyB0eXBlcyBhbmQgZnVuY3Rpb25zIHVzZWQgdG8gZGVmaW5lIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuICogXHJcbiAqIEFsbCBDU1MgcHJvcGVydGllcyBzaG91bGQgYWNjZXB0IHN0cmluZyBhcyB0aGUgdHlwZSBvZiB0aGVpciB2YWx1ZSBldmVuIGlmIG5vcm1hbGx5XHJcbiAqIHRoZXkgYWNjZXB0IG90aGVyIHR5cGVzIChlLmcgYSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIGFzIGBcInJlZFwiIHwgXCJncmVlblwiIHwgLi4uYCBmb3IgdGhlXHJcbiAqIGNvbG9yKSBwcm9wZXJ0eS4gVGhpcyBpcyBiZWNhdXNlIGluIGFkZGl0aW9uIHRvIHRoZWlyIG5vcm1hbCB2YWx1ZXMgYW55IHByb3BlcnR5XHJcbiAqIGNhbiB1c2UgY3VzdG9tIENTUyBwcm9wZXJ0eSBpbiB0aGUgZm9ybSBgdmFyKC0tcHJvcG5hbWUpYC4gSG93ZXZlciwgaWYgd2UgYWRkIHN0cmluZyB0eXBlXHJcbiAqIHRvIHRoZSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIChlLmcuIGBcInJlZFwiIHwgXCJncmVlblwiIHwgc3RyaW5nYCksIHRoaXMgdGhyb3dzIG9mZiB0aGVcclxuICogSW50ZWxsaXNlbnNlIGFuZCBpdCBkb2Vzbid0IHByb21wdCBkZXZlbG9wZXJzIGZvciB0aGUgcG9zc2libGUgdmFsdWVzLiBUaGUgSVZhbHVlUHJveHlcclxuICogY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBzdHJpbmcgYW5kIHRoaXMgc29sdmVzIHRoZSBJbnRlbGxpc2Vuc2UgaXNzdWUuXHJcbiAqIFxyXG4gKiBBbm90aGVyIGJlbmVmaXQgb2YgdXNpbmcgZnVuY3Rpb25zIGlzIHRoYXQgdGhleSBhcmVcclxuICogY29uc3RydWN0ZWQgYXQgb25lIHRpbWUgYnV0IHRoZSBzdHJpbmcgZ2VuZXJhdGlvbiBvY2N1cnMgYXQgYW5vdGhlciB0aW1lLiBUaGlzIGFsbG93c1xyXG4gKiB1c2luZyB0aGVzZSBvYmplY3RzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuIFRoZXkgY2FuIHJlZmVyZW5jZSBvYmplY3RzIGxpa2VcclxuICogSVZhclJ1bGUgdGhhdCBhcmUgbm90IGZ1bGx5IGluaXRpYWxpemVkIHlldC4gSG93ZXZlciwgd2hlbiB0aGUgc3R5bGVzIHNob3VsZCBiZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSB0aGUgaW5pdGlhbGl6YXRpb24gd2lsbCBoYXZlIGFscmVhZHkgb2NjdXJyZWQgYW5kIHRoZSBmdW5jdGlvbiB3aWxsXHJcbiAqIHJldHVybiBhIGNvcnJlY3Qgc3RyaW5nLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHRoZSBwcm94eSBmdW5jdGlvbnMgaGF2ZSBhIHBhcmFtZXRlciB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlbSBmcm9tXHJcbiAqIG90aGVyIHByb3h5IGZ1bmN0aW9ucy4gVGhpcyBpcyBiZWNhdXNlIHdlIHdhbnQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbnQgQ1NTIHR5cGVzLFxyXG4gKiBzbyB0aGF0IGEgZnVuY3Rpb24gdXNlZCBmb3Igb25lIENTUyB0eXBlIGNhbm5vdCBiZSB1c2VkIGZvciBhIGRpZmZlcmVudCBDU1MgdHlwZS4gRm9yXHJcbiAqIGV4YW1wbGUsIHRoZSBgY2FsYygpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBOdW1iZXJQcm94eSBmdW5jdGlvbiwgd2hpbGUgdGhlXHJcbiAqIGBsaW5lYXJJbmdyYWRpZW50KClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIEltYWdlUHJveHkgZnVuY3Rpb24uIFRodXMgeW91IGNhbm5vdCB1c2UgdGhlXHJcbiAqICdjYWxjKClgIGZ1bmN0aW9uIGZvciBpbWFnZS1iYXNlZCBDU1MgcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cclxuICovXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogU3R5bGUgdmFsdWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFueSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHbG9iYWxfU3R5bGVUeXBlID0gXCJpbmhlcml0XCIgfCBcImluaXRpYWxcIiB8IFwidW5zZXRcIiB8IFwicmV2ZXJ0XCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3RyaW5nUHJveHkgdHlwZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIHBhcnQgb2YgdHlwZVxyXG4gKiBkZWZpbml0aW9uIGZvciBhbGwgQ1NTIHByb3BlcnRpZXMgLSBldmVuIGZvciB0aG9zZSB0aGF0IGRvbid0IGhhdmUgYHN0cmluZ2AgYXMgcGFydCBvZiB0aGVpclxyXG4gKiB0eXBlLlxyXG4gKiBcclxuICogVGhpcyBmdW5jdGlvbiBpcyByZXR1cm5lZCBmcm9tIHRoZSBgcmF3KClgIGZ1bmN0aW9uLCB3aGljaCBhbGxvd3MgYnktcGFzc2luZyB0aGUgcHJvcGVydHlcclxuICogdHlwaW5nIHJ1bGVzIGFuZCBzcGVjaWZ5aW5nIGEgc3RyaW5nIGRpcmVjdGx5LiBUaGlzIG1pZ2h0IGJlIHVzZWZ1bCwgd2hlbiBhIHN0cmluZyB2YWx1ZSBpc1xyXG4gKiBvYnRhaW5lZCBmcm9tIHNvbWUgZXh0ZXJuYWwgY2FsY3VsYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3RyaW5nUHJveHkgPSAocD86IFwic3RyaW5nXCIpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tVmFyIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBvYmplY3Qgd2l0aCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGlzIG5lZWRlZCBiZWNhdXNlIGV2ZXJ5IHN0eWxlIHByb3BlcnR5IGNhbiBhY2NlcHQgdmFsdWUgaW4gdGhlIGZvcm0gb2YgdGhlIHZhcigpXHJcbiAqIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhcjxUID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogU2V0cyBuZXcgdmFsdWUgb2YgdGhpcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgZm9yIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqL1xyXG5cdHNldFZhbHVlKCB2YWx1ZTogVCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBleHRlbmRzIHRoZSBnaXZlbiB0eXBlIHdpdGggdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBJQ3VzdG9tVmFyIG9iamVjdCB0aGF0IGFsbG93cyB1c2luZyBhIENTUyBjdXN0b20gcHJvcGVydHkuXHJcbiAqIC0gU3RyaW5nUHJveHkgdHlwZSB0aGF0IGFsbG93cyBzcGVjaWZ5aW5nIHJhdyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZDxUPiA9IFQgfCBJQ3VzdG9tVmFyPFQ+IHwgU3RyaW5nUHJveHkgfCB1bmRlZmluZWQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZW5jYXBzdWxhdGVzIHRoZSB0eXBlIG9mIHByb3BlcnR5IGluIGFuIG9iamVjdCB3aXRoIGEgc2luZ2xlIFwiIVwiIHByb3BlcnR5LiBUaGlzXHJcbiAqIHR5cGUgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBwcm9wZXJ0eSB2YWx1ZSBtdXN0IGJlIGZsYWdnZWQgYXMgXCIhaW1wb3J0YW50XCIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBJbXBvcnRhbnRQcm9wPFQ+ID0geyBcIiFcIjogRXh0ZW5kZWQ8VD4gfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBFeHRlbmRlZFByb3AgZXh0ZW5kcyB0aGUgZ2l2ZW4gZ2VuZXJpYyB0eXBlIHdpdGggdGhlIGZvbGxvd2luZyBlbGVtZW50czpcclxuICogLSBPYmplY3Qgd2l0aCBhIHNpbmdsZSBwcm9wZXJ0eSBcIiFcIiwgd2hpY2ggaXMgdXNlZCB0byBtYXJrIGEgcHJvcGVydHkgYXMgXCIhaW1wb3J0YW50XCIuXHJcbiAqIC0gR2xvYmFsX1N0eWxlVHlwZSwgd2hpY2ggYWxsb3dzIGFueSBwcm9wZXJ0eSB0byBiZSBhc3NpZ25lZCB0aGUgZ2xvYmFsIHZhbHVlcyBzdWNoIGFzXHJcbiAqICAgXCJpbml0aWFsXCIsIFwiaW5oZXJpdFwiLCBcInVuc2V0XCIgYW5kIFwicmV2ZXJ0XCIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFByb3A8VD4gPSBFeHRlbmRlZDxUPiB8IEltcG9ydGFudFByb3A8VD4gfCBHbG9iYWxfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVXRpbGl0eSB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgcGFpci1saWtlIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSB0byAyIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPclBhaXI8VD4gPSBUIHwgW0V4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPl07XHJcblxyXG4vKiogVHlwZSBmb3IgYm94LWxpa2UgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIHRvIDQgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yQm94PFQ+ID0gVCB8IFtFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+PywgRXh0ZW5kZWQ8VD4/XTtcclxuXHJcbi8qKiBUeXBlIGZvciBhIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSBvciBtb3JlIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPck1hbnk8VD4gPSBUIHwgRXh0ZW5kZWQ8VD5bXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE51bWVyaWMgdHlwZXMgYXMgYSBiYXNpcyBmb3IgaGFuZGxpbmcgQ1NTIDxudW1iZXI+LCA8bGVuZ3RoPiwgPGFuZ2xlPiwgZXRjLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtYmVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhIHN0cmluZyB2YWx1ZSBjYW4gYmUgYXNzaWduZWQgdG8gcHJvcGVydGllcyBvZiB0aGUgQ1NTXHJcbiAqIG51bWVyaWMgdHlwZXMuIFRoaXMgZnVuY3Rpb24gaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZSBtaW4oKSwgbWF4KCkgYW5kIGNhbGMoKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE51bWJlclByb3h5PFQgZXh0ZW5kcyBzdHJpbmc+ID0gKHA/OiBUKSA9PiBzdHJpbmc7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIG51bWVyaWMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IG51bWJlciB8IHN0cmluZyB8IE51bWJlclByb3h5PFQ+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aU51bWJlckJhc2U8VCBleHRlbmRzIHN0cmluZz4gPSBPbmVPck1hbnk8TnVtYmVyQmFzZTxUPj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU51bWJlck1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciB0eXBlLCB0aGV5IGFyZSBjb252ZXJ0ZWRcclxuICogdG8gc3RyaW5ncyB1c2luZyB0aGUgYG51bWJlclRvU3RyaW5nYCBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWluKCkgZnVuY3Rpb24uICovXHJcbiAgICBtaW4oIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWF4KCkgZnVuY3Rpb24uICovXHJcbiAgICBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IE51bWJlclByb3h5PFQ+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2xhbXAoKSBmdW5jdGlvbi4gKi9cclxuICAgIGNsYW1wKCBtaW46IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBwcmVmOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgbWF4OiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IE51bWJlclByb3h5PFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIGNhbGMoKSBmdW5jdGlvbi4gVGhpcyBtZXRob2QgaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3RcclxuICAgICAqIGJlIGludm9rZWQgd2l0aCBhIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gICAgICovXHJcbiAgICBjYWxjKCBmb3JtdWxhUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBOdW1iZXJQcm94eTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8bnVtYmVyPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTnVtYmVyIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIE51bWJlclR5cGUgPSBcIk51bWJlclwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSAtIG5vdGUgdGhhdCBpdCBleGx1ZGVzIGBzdHJpbmdgICovXHJcbmV4cG9ydCB0eXBlIENzc051bWJlciA9IEV4Y2x1ZGU8TnVtYmVyQmFzZTxOdW1iZXJUeXBlPixzdHJpbmc+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlOdW1iZXIgPSBPbmVPck1hbnk8Q3NzTnVtYmVyPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc051bWJlck1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPG51bWJlcj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc051bWJlck1hdGggZXh0ZW5kcyBJTnVtYmVyTWF0aDxOdW1iZXJUeXBlPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBwZXJjZW50ICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRVbml0cyA9IFwiJVwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFBlcmNlbnQgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFR5cGUgPSBcIlBlcmNlbnRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1BlcmNlbnQgPSBOdW1iZXJCYXNlPFBlcmNlbnRUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVBlcmNlbnQgPSBPbmVPck1hbnk8Q3NzUGVyY2VudD47XHJcblxyXG4vKiogUHJveHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50UHJveHkgPSBOdW1iZXJQcm94eTxQZXJjZW50VHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElGcmFjdGlvbk1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHBlcmNlbnQ+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NQZXJjZW50TWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPFBlcmNlbnRUeXBlPlxyXG57XHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgdG8gYSBwZXJjZW50IHN0cmluZy4gTnVtYmVycyBiZXR3ZWVuIC0xIGFuZCAxIGFyZSBtdWx0aXBseWVkIGJ5IDEwMC5cclxuICAgICAqL1xyXG4gICAgcGVyY2VudCggbjogbnVtYmVyKTogUGVyY2VudFByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxsZW5ndGg+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBsZW5ndGggKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVW5pdHMgPSBcIlFcIiB8IFwiY2hcIiB8IFwiY21cIiB8IFwiZW1cIiB8IFwiZXhcIiB8IFwiaWNcIiB8IFwiaW5cIiB8IFwibGhcIiB8IFwibW1cIiB8IFwicGNcIiB8XHJcbiAgICAgICAgICAgICAgICBcInB0XCIgfCBcInB4XCIgfCBcInZiXCIgfCBcInZoXCIgfCBcInZpXCIgfCBcInZ3XCIgfCBcInJlbVwiIHwgXCJybGhcIiB8IFwidm1heFwiIHwgXCJ2bWluXCIgfCBcImZyXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTGVuZ3RoIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFR5cGUgPSBcIkxlbmd0aFwiIHwgUGVyY2VudFR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aCA9IE51bWJlckJhc2U8TGVuZ3RoVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUxlbmd0aCA9IE9uZU9yTWFueTxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tZm91ci1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aEJveCA9IE9uZU9yQm94PENzc0xlbmd0aD47XHJcblxyXG4vKiogUHJveHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFByb3h5ID0gTnVtYmVyUHJveHk8TGVuZ3RoVHlwZT47XHJcblxyXG4vKipcclxuICogVGhlIElDc3NMZW5ndGhNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxsZW5ndGg+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NMZW5ndGhNYXRoIGV4dGVuZHMgSU51bWJlck1hdGg8TGVuZ3RoVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW5tYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NMZW5ndGg+LCBtYXg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBOdW1iZXJQcm94eTxMZW5ndGhUeXBlPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcXVhdGVycyBvZiBhbiBpbmNoICovXHJcbiAgICBRKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2ggdW5pdHMgKi9cclxuICAgIGNoKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2FudGltZXRlcnMgKi9cclxuICAgIGNtKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2FsY3VsYXRlZCBmb250LXNpemVzIG9mIHRoZSBlbGVtZW50ICovXHJcbiAgICBlbSggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGhlaWdodHMgb2YgbG93ZXJjYXNlIGxldHRlciAneCcgaW4gdGhlIGZvbnQgKi9cclxuICAgIGV4KCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaWMgdW5pdHMgKi9cclxuICAgIGljKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaW5jaGVzICovXHJcbiAgICBpbiggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGxpbmUtaGVpZ2h0cyBvZiB0aGUgZWxlbWVudCAqL1xyXG4gICAgbGgoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBtaWxsaW1ldGVycyAqL1xyXG4gICAgbW0oIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaWNhcyAqL1xyXG4gICAgcGMoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwb2ludHMgKi9cclxuICAgIHB0KCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcGl4ZWxzICovXHJcbiAgICBweCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBzaXplIG9mIHRoZSBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2ssIGluIHRoZSBkaXJlY3Rpb25cclxuICAgICAqIG9mIHRoZSByb290IGVsZW1lbnTigJlzIGJsb2NrIGF4aXMgKi9cclxuICAgIHZiKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQncyBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2sgKi9cclxuICAgIHZoKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gICAgICogb2YgdGhlIHJvb3QgZWxlbWVudOKAmXMgaW5saW5lIGF4aXMgKi9cclxuICAgIHZpKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG4gICAgdncoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBmb250c2l6ZXMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG4gICAgcmVtKCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuICAgIHJsaCggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHRoZSB1bml0cyB3aGljaCBhcmUgYSBzbWFsbGVyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbiAgICB2bWF4KCBuOiBudW1iZXIpOiBMZW5ndGhQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIGxhcmdlciB2YWx1ZSBiZXR3ZWVuIHZ3IGFuZCB2aCAqL1xyXG4gICAgdm1pbiggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGZvciBmbGV4ICovXHJcbiAgICBmciggbjogbnVtYmVyKTogTGVuZ3RoUHJveHk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIGludG8gcGVyY2VudHMuIFZhbHVlcyBiZXR3ZWVuIC0xLjAgYW5kIDEuMCBub24taW5jbHVzaXZlIGFyZVxyXG4gICAgICogbXVsdGlwbGllZCBieSAxMDAuXHJcbiAgICAgKi9cclxuICAgIHBlcmNlbnQoIG46IG51bWJlcik6IExlbmd0aFByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhIHBvaW50IHVzaW5nIHggYW5kIHkgY29vcmRpbmF0ZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NQb2ludCA9IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxhbmdsZT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGFuZ2xlICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVW5pdHMgPSBcImRlZ1wiIHwgXCJyYWRcIiB8IFwiZ3JhZFwiIHwgXCJ0dXJuXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgQW5nbGUgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVUeXBlID0gXCJBbmdsZVwiIHwgUGVyY2VudFR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzQW5nbGUgPSBOdW1iZXJCYXNlPEFuZ2xlVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpQW5nbGUgPSBPbmVPck1hbnk8Q3NzQW5nbGU+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlUHJveHkgPSBOdW1iZXJQcm94eTxBbmdsZVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzQW5nbGVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxhbmdsZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0FuZ2xlTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPEFuZ2xlVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZGVncmVlcyAqL1xyXG4gICAgZGVnKCBuOiBudW1iZXIpOiBBbmdsZVByb3h5O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHJhZGlhbnMgKi9cclxuICAgIHJhZCggbjogbnVtYmVyKTogQW5nbGVQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiBncmFkaWFucyAqL1xyXG4gICAgZ3JhZCggbjogbnVtYmVyKTogQW5nbGVQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiB0dXJucyAqL1xyXG4gICAgdHVybiggbjogbnVtYmVyKTogQW5nbGVQcm94eTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgaW50byBwZXJjZW50cy4gVmFsdWVzIGJldHdlZW4gLTEuMCBhbmQgMS4wIG5vbi1pbmNsdXNpdmUgYXJlXHJcbiAgICAgKiBtdWx0aXBsaWVkIGJ5IDEwMC5cclxuICAgICAqL1xyXG4gICAgcGVyY2VudCggbjogbnVtYmVyKTogQW5nbGVQcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8dGltZT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHRpbWUgKi9cclxuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0gXCJzXCIgfCBcIm1zXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgVGltZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBUaW1lVHlwZSA9IFwiVGltZVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzVGltZSA9IE51bWJlckJhc2U8VGltZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpVGltZSA9IE9uZU9yTWFueTxDc3NUaW1lPjtcclxuXHJcbi8qKiBQcm94eSB0eXBlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlKi9cclxuZXhwb3J0IHR5cGUgVGltZVByb3h5ID0gTnVtYmVyUHJveHk8VGltZVR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzVGltZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHRpbWU+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NUaW1lTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPFRpbWVUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyB0aW1lIHZhbHVlIGluIG1pbGxpc2Vjb25kcyAqL1xyXG4gICAgbXMoIG46IG51bWJlcik6IFRpbWVQcm94eTtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyB0aW1lIHZhbHVlIGluIHNlY29uZHMgKi9cclxuICAgIHMoIG46IG51bWJlcik6IFRpbWVQcm94eTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8cmVzb2x1dGlvbj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHJlc29sdXRpb24gKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblVuaXRzID0gXCJkcGlcIiB8IFwiZHBjbVwiIHwgXCJkcHB4XCIgfCBcInhcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBSZXNvbHV0aW9uIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25UeXBlID0gXCJSZXNvbHV0aW9uXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NSZXNvbHV0aW9uID0gTnVtYmVyQmFzZTxSZXNvbHV0aW9uVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlSZXNvbHV0aW9uID0gT25lT3JNYW55PENzc1Jlc29sdXRpb24+O1xyXG5cclxuLyoqIFByb3h5IHR5cGUgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblByb3h5ID0gTnVtYmVyUHJveHk8UmVzb2x1dGlvblR5cGU+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzUmVzb2x1dGlvbk1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHJlc29sdXRpb24+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIElOdW1iZXJNYXRoPFJlc29sdXRpb25UeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQSSAqL1xyXG4gICAgZHBpKCBuOiBudW1iZXIpOiBSZXNvbHV0aW9uUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUENNICovXHJcbiAgICBkcGNtKCBuOiBudW1iZXIpOiBSZXNvbHV0aW9uUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUFBYICovXHJcbiAgICBkcHB4KCBuOiBudW1iZXIpOiBSZXNvbHV0aW9uUHJveHk7XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBYICovXHJcbiAgICB4KCBuOiBudW1iZXIpOiBSZXNvbHV0aW9uUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGZyZXF1ZW5jeT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGZyZXF1ZW5jeSAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lVbml0cyA9IFwiSHpcIiB8IFwia0h6XCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgRnJlcXVlbmN5IHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVR5cGUgPSBcIkZyZXF1ZW5jeVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NGcmVxdWVuY3kgPSBOdW1iZXJCYXNlPEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlGcmVxdWVuY3kgPSBPbmVPck1hbnk8Q3NzRnJlcXVlbmN5PjtcclxuXHJcbi8qKiBQcm94eSB0eXBlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5UHJveHkgPSBOdW1iZXJQcm94eTxGcmVxdWVuY3lUeXBlPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0ZyZXF1ZW5jeU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0ZyZXF1ZW5jeU1hdGggZXh0ZW5kcyBJTnVtYmVyTWF0aDxGcmVxdWVuY3lUeXBlPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBmcmVxdWVuY3kgdmFsdWUgaW4gSGVydHogKi9cclxuICAgIGh6KCBuOiBudW1iZXIpOiBGcmVxdWVuY3lQcm94eVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBLaWxvLUhlcnR6ICovXHJcbiAgICBraHooIG46IG51bWJlcik6IEZyZXF1ZW5jeVByb3h5XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCA9IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgYSBzaW1wbGUgMSBvciB0d28gdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBTaW1wbGVDc3NQb3NpdGlvbiA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgZnVsbCB1cCB0byA0IHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9zaXRpb24gPSBTaW1wbGVDc3NQb3NpdGlvbiB8IFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkXSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD5dIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIG11bHRpcGxlIGA8cG9zaXRpb24+YCBDU1MgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlDc3NQb3NpdGlvbiA9IEV4dGVuZGVkPENzc1Bvc2l0aW9uPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmFkaXVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIGNvcm5lciByYWRpdXMgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmFkaXVzID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVUkxzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXJsUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBDU1MgdXJsKCkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcmxQcm94eSA9IChwPzogXCJ1cmxcIikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gYXR0cigpIGZ1bmN0aW9uIHN1cHBvcnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVHlwZUtleXdvcmQgPSBcInN0cmluZ1wiIHwgXCJjb2xvclwiIHwgXCJ1cmxcIiB8IFwiaW50ZWdlclwiIHwgXCJudW1iZXJcIiB8IFwibGVuZ3RoXCIgfCBcImFuZ2xlXCIgfCBcInRpbWVcIiB8IFwiZnJlcXVlbmN5XCI7XHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVW5pdEtleXdvcmQgPSBQZXJjZW50VW5pdHMgfCBMZW5ndGhVbml0cyB8IFRpbWVVbml0cyB8IEFuZ2xlVW5pdHMgfCBSZXNvbHV0aW9uVW5pdHMgfCBGcmVxdWVuY3lVbml0cztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFdlYiBOYW1lc3BhY2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgV2ViTmFtZXNwYWNlcyBjbGFzcyBjb250YWlucyBpZGVudGlmaWVycyBmb3IgdGhlIGtub3duIFdlYi1yZWxhdGVkIG5hbWVzcGFjZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2ViTmFtZXNwYWNlc1xyXG57XHJcblx0c3RhdGljIHJlYWRvbmx5IEhUTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgU1ZHID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTGluayA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUwgPSBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgTWF0aE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==