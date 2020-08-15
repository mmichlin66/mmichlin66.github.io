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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/api/ColorAPI.js":
/*!*****************************!*\
  !*** ./lib/api/ColorAPI.js ***!
  \*****************************/
/*! exports provided: rgb, hsl, alpha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony import */ var _styles_ColorFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ColorFuncs */ "./lib/styles/ColorFuncs.js");

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
    return () => _styles_ColorFuncs__WEBPACK_IMPORTED_MODULE_0__["rgbToString"](r, g, b, a);
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
function hsl(h, s, l, a) {
    return () => _styles_ColorFuncs__WEBPACK_IMPORTED_MODULE_0__["hslToString"](h, s, l, a);
}
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
    return () => _styles_ColorFuncs__WEBPACK_IMPORTED_MODULE_0__["colorWithAlphaToString"](c, a);
}


/***/ }),

/***/ "./lib/api/ImageAPI.js":
/*!*****************************!*\
  !*** ./lib/api/ImageAPI.js ***!
  \*****************************/
/*! exports provided: gradient, crossFade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradient", function() { return gradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crossFade", function() { return crossFade; });
/* harmony import */ var _styles_ColorFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/ColorFuncs */ "./lib/styles/ColorFuncs.js");
/* harmony import */ var _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");


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
let gradient = new Gradient();
/**
 * Returns an ImageProxy function representing the `cross-fade()` CSS function.
 */
function crossFade(...args) {
    return () => crossFadeToString(args);
}
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
        angleString = Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(angle, {
            fromNumber: _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].convertFunc,
            fromString: v => /\d+.*/.test(v) ? v : "to " + v
        }) + ",";
    }
    return `${name}(${angleString}${gradientStopsOrHintsToString(stopsOrHints, _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssPercentMath"])})`;
}
function radialGradientToString(name, stopsOrHints, shape, sizeOrExtent, pos) {
    let shapeString = shape ? shape : "";
    let sizeOrExtentString = sizeOrExtent ? _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].multiStyleToString(sizeOrExtent, " ") : "";
    let posString = pos ? `at ${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["pos2str"])(pos)}` : "";
    let whatAndWhere = shape || sizeOrExtentString || pos ? `${shapeString} ${sizeOrExtentString} ${posString},` : "";
    return `${name}(${whatAndWhere}${gradientStopsOrHintsToString(stopsOrHints, _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssPercentMath"])})`;
}
function conicGradientToString(name, stopsOrHints, angle, pos) {
    let angleString = angle ? `from ${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(angle)}` : "";
    let posString = pos ? `at ${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["pos2str"])(pos)}` : "";
    let whatAndWhere = angle || pos ? `${angleString} ${posString},` : "";
    return `${name}(${whatAndWhere}${gradientStopsOrHintsToString(stopsOrHints, _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"])})`;
}
function crossFadeToString(args) {
    let paramsString = Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(args, {
        arrItemFunc: crossFadeParamToString,
        arrSep: ","
    });
    return `cross-fade(${paramsString})`;
}
function gradientStopsOrHintsToString(val, mathClass) {
    return val.map(v => gradientStopOrHintToString(v, mathClass)).join(",");
}
function gradientStopOrHintToString(val, mathClass) {
    return Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(val, {
        fromNumber: _styles_ColorFuncs__WEBPACK_IMPORTED_MODULE_0__["colorToString"],
        fromArray: v => v.length === 0 ? "" : v.length === 1 ? mathClass.styleToString(v[0]) :
            gradientColorAndLengthToString(v, mathClass)
    });
}
function gradientColorAndLengthToString(val, mathClass) {
    let secondStop = val.length > 2 ? mathClass.styleToString(val[2]) : "";
    return `${Object(_styles_ColorFuncs__WEBPACK_IMPORTED_MODULE_0__["colorToString"])(val[0])} ${mathClass.styleToString(val[1])} ${secondStop}`;
}
function crossFadeParamToString(val) {
    return Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(val, {
        fromArray: v => `${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(v[0])},${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssPercentMath"].styleToString(v[1])}`
    });
}


/***/ }),

/***/ "./lib/api/RuleAPI.js":
/*!****************************!*\
  !*** ./lib/api/RuleAPI.js ***!
  \****************************/
/*! exports provided: $abstract, $class, $classname, $id, $style, $keyframes, $var, $counter, $gridline, $gridarea, $import, $fontface, $namespace, $page, $supports, $media, $use, $embed, enableShortNames, classes, createCssSerializer, serializeToCSS, virtual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$abstract", function() { return $abstract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$class", function() { return $class; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$classname", function() { return $classname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$id", function() { return $id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$style", function() { return $style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$keyframes", function() { return $keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$var", function() { return $var; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$counter", function() { return $counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$gridline", function() { return $gridline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$gridarea", function() { return $gridarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$import", function() { return $import; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$fontface", function() { return $fontface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$namespace", function() { return $namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$page", function() { return $page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$supports", function() { return $supports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$media", function() { return $media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$use", function() { return $use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$embed", function() { return $embed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableShortNames", function() { return enableShortNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCssSerializer", function() { return createCssSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeToCSS", function() { return serializeToCSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "virtual", function() { return virtual; });
/* harmony import */ var _rules_RuleTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules/RuleTypes */ "./lib/rules/RuleTypes.js");
/* harmony import */ var _rules_RuleContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");
/* harmony import */ var _rules_StyleRules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/StyleRules */ "./lib/rules/StyleRules.js");
/* harmony import */ var _rules_AnimationRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rules/AnimationRule */ "./lib/rules/AnimationRule.js");
/* harmony import */ var _rules_VarRule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rules/VarRule */ "./lib/rules/VarRule.js");
/* harmony import */ var _rules_CounterRules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rules/CounterRules */ "./lib/rules/CounterRules.js");
/* harmony import */ var _rules_GridRules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rules/GridRules */ "./lib/rules/GridRules.js");
/* harmony import */ var _rules_MiscRules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rules/MiscRules */ "./lib/rules/MiscRules.js");
/* harmony import */ var _rules_GroupRules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../rules/GroupRules */ "./lib/rules/GroupRules.js");
/* harmony import */ var _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");










/**
 * Creates new abstract rule, which defines a styleset that can be extended by other style
 * rules. Abstract rules don't have selectors and are not inserted into DOM.
 */
function $abstract(style) {
    return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_2__["AbstractRule"](style);
}
/**
 * Creates new class rule. The class name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another class rule. The function can be called without parameters just to "declare"
 * the class. Such class can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
function $class(style, nameOverride) {
    return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_2__["ClassRule"](style, nameOverride);
}
/**
 * Creates new class name rule, which combines one or more other class names. This creates a
 * "synonym" that is easier to apply to an element's class attribute than an array of two or
 * more clas rules.
 */
function $classname(...classes) {
    return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_7__["ClassNameRule"](classes);
}
/**
 * Creates new ID rule. The ID name will be created when the rule is processed as part of
 * the style definition class. The name can be also overridden by providing either an explicit
 * name or another ID rule. The function can be called without parameters just to "declare"
 * the ID. Such ID can be later used either in conditional grouping rules or in derived
 * style definition classes.
 */
function $id(style, nameOverride) {
    return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_2__["IDRule"](style, nameOverride);
}
/**
 * Creates new selector rule. Selector can be specified as a string or via the selector function.
 */
function $style(selector, style) {
    return new _rules_StyleRules__WEBPACK_IMPORTED_MODULE_2__["SelectorRule"](selector, style);
}
/**
 * Creates new animation rule. The animation name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another animation rule. The function can be called without parameters just to
 * "declare" the animation. Such animation can be later used either in conditional grouping rules
 * or in derived style definition classes.
 */
function $keyframes(frames, nameOverride) {
    return new _rules_AnimationRule__WEBPACK_IMPORTED_MODULE_3__["AnimationRule"](frames, nameOverride);
}
/**
 * Creates new custom variable object that defines a custom CSS property. The variable name will
 * be created when the rule is processed as part of the style definition class. The name can be
 * also overridden by providing either an explicit name or another custom variable rule. The
 * function can be called without specifying the value just to "declare" the variable. Such
 * variable can be later used either in conditional grouping rules or in derived style definition
 * classes.
 */
function $var(template, propVal, nameOverride) {
    return new _rules_VarRule__WEBPACK_IMPORTED_MODULE_4__["VarRule"](template, propVal, nameOverride);
}
/**
 * Creates new counter object. The counter name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another counter rule.
 */
function $counter(nameOverride) {
    return new _rules_CounterRules__WEBPACK_IMPORTED_MODULE_5__["CounterRule"](nameOverride);
}
/**
 * Creates new grid line object. The line name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another grid line rule.
 */
function $gridline(nameOverride, isStartEndOrNone) {
    return new _rules_GridRules__WEBPACK_IMPORTED_MODULE_6__["GridLineRule"](nameOverride, isStartEndOrNone);
}
/**
 * Creates new grid area object. The area name will be created when the rule is processed as
 * part of the style definition class. The name can be also overridden by providing either an
 * explicit name or another grid area rule.
 */
function $gridarea(nameOverride) {
    return new _rules_GridRules__WEBPACK_IMPORTED_MODULE_6__["GridAreaRule"](nameOverride);
}
/**
 * Creates new import rule.
 */
function $import(url, mediaQuery, supportsQuery) {
    return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_7__["ImportRule"](url, mediaQuery, supportsQuery);
}
/**
 * Creates new font-face rule.
 */
function $fontface(fontface) {
    return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_7__["FontFaceRule"](fontface);
}
/**
 * Creates new namespace rule.
 */
function $namespace(namespace, prefix) {
    return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_7__["NamespaceRule"](namespace, prefix);
}
/**
 * Creates new page rule.
 */
function $page(pseudoClass, style) {
    return new _rules_MiscRules__WEBPACK_IMPORTED_MODULE_7__["PageRule"](pseudoClass, style);
}
/**
 * Creates new supports rule.
 */
function $supports(query, instOrClass) {
    return new _rules_GroupRules__WEBPACK_IMPORTED_MODULE_8__["SupportsRule"](query, instOrClass);
}
/**
 * Creates new media rule.
 */
function $media(query, instOrClass) {
    return new _rules_GroupRules__WEBPACK_IMPORTED_MODULE_8__["MediaRule"](query, instOrClass);
}
/**
 * Processes the given style definition class or instance and creates unique names for all named
 * entities. For a given style definition class only a single instance is created, no matter how
 * many times this function is invoked. However, if an instance, which has not yet been processed,
 * is passed, then a new set of unique names will be created for it.
 */
function $use(instOrClass) {
    return Object(_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_1__["processInstanceOrClass"])(instOrClass);
}
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
    return instOrClass instanceof _rules_RuleTypes__WEBPACK_IMPORTED_MODULE_0__["StyleDefinition"] ? instOrClass : new instOrClass();
}
/**
 * Sets the flag indicating whether to use optimized (short) rule names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param enable
 * @param prefix
 */
function enableShortNames(enable, prefix) {
    return Object(_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_1__["s_enableShortNames"])(enable, prefix);
}
/**
 * Concatenates the names of the given classes into a single string that can be assigned to a
 * `class` property of an HTML element.
 * @param classes
 */
function classes(...classes) {
    return Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_9__["val2str"])(classes, {
        arrItemFunc: v => v instanceof _rules_StyleRules__WEBPACK_IMPORTED_MODULE_2__["ClassRule"] ? v.name : Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_9__["val2str"])(v)
    });
}
/**
 * Creates a new ICssSerializer object that allows adding style definition classes
 * and instances and serializing them to a string. This can be used for server-side rendering when
 * the resultant string can be set as the content of a `<style>` element.
 */
function createCssSerializer() {
    return new CssSerializer();
}
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
        let instance = Object(_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_1__["processInstanceOrClass"])(instOrClass);
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
            Object(_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_1__["serializeInstance"])(instance, this);
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
/*! exports provided: activate, deactivate, forceDOMUpdate, cancelDOMUpdate, setDefaultSchedulerType, getDefaultSchedulerType, registerScheduler, unregisterScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activate", function() { return activate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivate", function() { return deactivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceDOMUpdate", function() { return forceDOMUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelDOMUpdate", function() { return cancelDOMUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultSchedulerType", function() { return setDefaultSchedulerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultSchedulerType", function() { return getDefaultSchedulerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerScheduler", function() { return registerScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterScheduler", function() { return unregisterScheduler; });
/* harmony import */ var _rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rules/RuleContainer */ "./lib/rules/RuleContainer.js");
/* harmony import */ var _rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/Scheduling */ "./lib/rules/Scheduling.js");


/**
 * Activates the given style definition class or instance and inserts all its rules into DOM. If
 * the input object is not an instance but a class, which is not yet associated with an instance,
 * the instance is first created and processed. Note that each style definition instance maintains
 * a reference counter of how many times it was activated and deactivated. The rules are inserted
 * into DOM only upon first activation.
 */
function activate(instanceOrClass, schedulerType) {
    let instance = Object(_rules_RuleContainer__WEBPACK_IMPORTED_MODULE_0__["processInstanceOrClass"])(instanceOrClass);
    if (instance)
        Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__["s_scheduleCall"])((activator) => activator.activate(instance), schedulerType);
    return instance;
}
/**
 * Deactivates the given style definition instance by removing its rules from DOM. Note that each
 * style definition instance maintains a reference counter of how many times it was activated and
 * deactivated. The rules are removed from DOM only when this reference counter goes down to 0.
 */
function deactivate(instance, schedulerType) {
    Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__["s_scheduleCall"])((activator) => activator.deactivate(instance), schedulerType);
}
/**
 * Writes to DOM all style changes caused by the calls to the activate and deactivate functions
 * accumulated since the last activation of the given scheduling type.
 */
function forceDOMUpdate(schedulerType) {
    Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__["s_scheduleCall"])((activator) => activator.forceDOMUpdate(), schedulerType);
}
/**
 * Removes all scheduled activations caused by the calls to the activate and deactivate functions
 * accumulated since the last activation of the given scheduling type.
 */
function cancelDOMUpdate(schedulerType) {
    Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__["s_scheduleCall"])((activator) => activator.cancelDOMUpdate(), schedulerType);
}
/**
 * Sets the default scheduler type that is used by activate and deactivate functions that are
 * called without explicitly providing value to the scheduler type parameter. Returns the type of
 * the previous default scheduler or 0 if an error occurs (e.g. the given scheduler type ID is not
 * registered).
 */
function setDefaultSchedulerType(schedulerType) {
    return Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__["s_setDefaultSchedulerType"])(schedulerType);
}
/**
 * Returns the default scheduler type that is used by activate and deactivate functions that are
 * called without explicitly providing value to the scheduler type parameter.
 */
function getDefaultSchedulerType() {
    return Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__["s_getDefaultSchedulerType"])();
}
/**
 * Registers the given scheduler object and returns the scheduler type identifier, which
 * should be used when calling activate and deactivate functions.
 */
function registerScheduler(scheduler) {
    return Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__["s_registerScheduler"])(scheduler);
}
/**
 * Unregisters a scheduler object with the given scheduler type identifier.
 */
function unregisterScheduler(id) {
    return Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_1__["s_unregisterScheduler"])(id);
}


/***/ }),

/***/ "./lib/api/StyleAPI.js":
/*!*****************************!*\
  !*** ./lib/api/StyleAPI.js ***!
  \*****************************/
/*! exports provided: selector, getStylePropValue, setElementStyle, setElementStringStyle, stylesetToStringStyleset, diffStylesets, brightness, contrast, grayscale, invert, opacity, saturate, sepia, blur, dropShadow, hueRotate, inset, circle, ellipse, polygon, ray, path, matrix, matrix3d, perspective, rotate, rotateX, rotateY, rotateZ, rotate3d, scale, scaleX, scaleY, scaleZ, scale3d, skew, skewX, skewY, translate, translateX, translateY, translateZ, translate3d, fitContent, minmax, repeat, span */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return selector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStylePropValue", function() { return getStylePropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementStyle", function() { return setElementStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setElementStringStyle", function() { return setElementStringStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesetToStringStyleset", function() { return stylesetToStringStyleset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffStylesets", function() { return diffStylesets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brightness", function() { return brightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrast", function() { return contrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayscale", function() { return grayscale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturate", function() { return saturate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepia", function() { return sepia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropShadow", function() { return dropShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hueRotate", function() { return hueRotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inset", function() { return inset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipse", function() { return ellipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygon", function() { return polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ray", function() { return ray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "path", function() { return path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrix", function() { return matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matrix3d", function() { return matrix3d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return perspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate3d", function() { return rotate3d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleX", function() { return scaleX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleY", function() { return scaleY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleZ", function() { return scaleZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale3d", function() { return scale3d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skew", function() { return skew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewX", function() { return skewX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewY", function() { return skewY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateX", function() { return translateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateY", function() { return translateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateZ", function() { return translateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate3d", function() { return translate3d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitContent", function() { return fitContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minmax", function() { return minmax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "span", function() { return span; });
/* harmony import */ var _styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
/* harmony import */ var _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/* harmony import */ var _rules_Scheduling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/Scheduling */ "./lib/rules/Scheduling.js");



/**
 * Returns a string representation of a selector. This function is a tag function and must be
 * invoked with the template string without parentheses.
 */
function selector(parts, ...params) {
    return () => Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["templateStringToString"])(parts, params);
}
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
    return Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__["stylePropToString"])(stylePropName, stylePropValue, true);
}
/**
 * Sets values of the style properties from the given Styleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset Styleset object which provides values for style properties.
 */
function setElementStyle(elm, styleset, schedulerType) {
    setElementStringStyle(elm, styleset ? stylesetToStringStyleset(styleset) : null, schedulerType);
}
/**
 * Sets values of the style properties from the given StringStyleset object to the `style` attribute
 * of the given HTML element.
 * @param elm HTML element whose styles will be set.
 * @param styleset StringStyleset object which provides values for style properties.
 */
function setElementStringStyle(elm, styleset, schedulerType) {
    Object(_rules_Scheduling__WEBPACK_IMPORTED_MODULE_2__["s_scheduleStylePropertyUpdate"])(elm, null, styleset, false, schedulerType);
}
/**
 * Converts the given [[Styleset]] object into an object, where each Styleset's property is
 * converted to its string value.
 * @param styleset
 */
function stylesetToStringStyleset(styleset) {
    let res = {};
    Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__["forAllPropsInStylset"])(styleset, (name, value) => { res[name] = value; });
    return res;
}
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
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Filters
//
///////////////////////////////////////////////////////////////////////////////////////////////
// Helper function converting percent value to invocation of the given CSS function.
function percentFilter(name, amount) {
    return () => `${name}(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssPercentMath"].styleToString(amount)})`;
}
/**
 * Returns an IFilterProxy function representing the `brightness()` CSS function.
 */
function brightness(amount) {
    return percentFilter("brightness", amount);
}
/**
 * Returns an IFilterProxy function representing the `contrast()` CSS function.
 */
function contrast(amount) {
    return percentFilter("contrast", amount);
}
/**
 * Returns an IFilterProxy function representing the `grayscale()` CSS function.
 */
function grayscale(amount) {
    return percentFilter("grayscale", amount);
}
/**
 * Returns an IFilterProxy function representing the `invert()` CSS function.
 */
function invert(amount) {
    return percentFilter("invert", amount);
}
/**
 * Returns an IFilterProxy function representing the `opacity()` CSS function.
 */
function opacity(amount) {
    return percentFilter("opacity", amount);
}
/**
 * Returns an IFilterProxy function representing the `saturate()` CSS function.
 */
function saturate(amount) {
    return percentFilter("saturate", amount);
}
/**
 * Returns an IFilterProxy function representing the `sepia()` CSS function.
 */
function sepia(amount) {
    return percentFilter("sepia", amount);
}
/**
 * Returns an IFilterProxy function representing the `blur()` CSS function.
 */
function blur(radius) {
    return () => `blur(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(radius)})`;
}
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
    return () => `drop-shadow(${Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__["singleBoxShadow_fromObject"])({ x, y, color, blur, spread })})`;
}
/**
 * Returns an IFilterProxy function representing the `hue-rotate()` CSS function.
 */
function hueRotate(amount) {
    return () => `hue-rotate(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssPercentMath"].styleToString(amount)})`;
}
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Basic shapes
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an IBasicShapeProxy function representing the `inset()` CSS function.
 */
function inset(offset, radius) {
    let r = radius != null ? "round " + Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__["borderRadiusToString"])(radius) : "";
    return () => `inset(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].multiStyleToString(offset, " ")}${r})`;
}
/**
 * Returns an IBasicShapeProxy function representing the `circle()` CSS function.
 */
function circle(center, position) {
    let c = center != null ? _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(center) : "";
    let pos = position != null ? " at " + Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["pos2str"])(position) : "";
    return () => `circle(${c}${pos})`;
}
/**
 * Returns an IBasicShapeProxy function representing the `ellipse()` CSS function.
 */
function ellipse(rx, ry, position) {
    let rxs = rx != null ? _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(rx) : "";
    let rys = ry != null ? " " + _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(ry) : "";
    let pos = position != null ? " at " + Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["pos2str"])(position) : "";
    return () => `ellipse(${rxs}${rys}${pos})`;
}
/**
 * Returns an IBasicShapeProxy function representing the `polygon()` CSS function.
 */
function polygon(pointOrRule, ...points) {
    return () => {
        let s = "polygon(";
        if (typeof pointOrRule === "string")
            s += pointOrRule + ",";
        else
            s += `${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].multiStyleToString(pointOrRule, " ")},`;
        s += points.map(pt => _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].multiStyleToString(pt, " ")).join(",");
        return s + ")";
    };
}
/**
 * Returns an IRayProxy function representing the `ray()` CSS function.
 */
function ray(angle, size, contain) {
    return () => {
        let angleString = _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(angle);
        let sizeString = size = !null ? "," + _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(size) : "";
        let containString = contain ? ",contain" : "";
        return `ray(${angleString}${sizeString}${containString})`;
    };
}
/**
 * Returns an IPathBuilder interface that allows building a CSS path.
 */
function path(fillRule) {
    return new PathBuilder(fillRule);
}
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
    return () => `matrix(${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["arr2str"])([a, b, c, d, tx, ty], undefined, ",")})`;
}
/**
 * Returns an ITransformProxy function representing the `matrix3d()` CSS function.
 */
function matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4) {
    return () => `matrix(${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["arr2str"])([a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4], undefined, ",")})`;
}
/**
 * Returns an ITransformProxy function representing the `perspective()` CSS function.
 */
function perspective(d) {
    return () => `perspective(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(d)})`;
}
/**
 * Returns an ITransformProxy function representing the given CSS rotation function.
 */
function rotateImpl(name, a) {
    return () => `${name}(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(a)})`;
}
/**
 * Returns an ITransformProxy function representing the `rotate()` CSS function.
 */
function rotate(a) {
    return rotateImpl("rotate", a);
}
/**
 * Returns an ITransformProxy function representing the `rotateX()` CSS function.
 */
function rotateX(a) {
    return rotateImpl("rotateX", a);
}
/**
 * Returns an ITransformProxy function representing the `rotateY()` CSS function.
 */
function rotateY(a) {
    return rotateImpl("rotateY", a);
}
/**
 * Returns an ITransformProxy function representing the `rotateZ()` CSS function.
 */
function rotateZ(a) {
    return rotateImpl("rotateZ", a);
}
/**
 * Returns an ITransformProxy function representing the `rotate3d()` CSS function.
 */
function rotate3d(x, y, z, a) {
    let v = [_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(x), _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(y),
        _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(z), _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(a)].join(",");
    return () => `rotate3d(${v})`;
}
/**
 * Returns an ITransformProxy function representing the `scale()` CSS function.
 */
function scale(cx, sy) {
    return () => `scale(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(cx)}${sy != null ? "," + _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(sy) : ""})`;
}
/**
 * Returns an ITransformProxy function representing the given scale CSS function.
 */
function scaleImpl(name, s) {
    return () => `${name}(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(s)})`;
}
/**
 * Returns an ITransformProxy function representing the `scaleX()` CSS function.
 */
function scaleX(s) {
    return scaleImpl("scaleX", s);
}
/**
 * Returns an ITransformProxy function representing the `scaleY()` CSS function.
 */
function scaleY(s) {
    return scaleImpl("scaleY", s);
}
/**
 * Returns an ITransformProxy function representing the `scaleZ()` CSS function.
 */
function scaleZ(s) {
    return scaleImpl("scaleZ", s);
}
/**
 * Returns an ITransformProxy function representing the `scale3d()` CSS function.
 */
function scale3d(sx, sy, sz) {
    let v = [_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(sx), _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(sy),
        _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString(sz)].join(",");
    return () => `scale3d(${v})`;
}
/**
 * Returns an ITransformProxy function representing the `skew()` CSS function.
 */
function skew(ax, ay) {
    return () => `skew(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(ax)}${ay != null ? "," + _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(ay) : ""})`;
}
/**
 * Returns an ITransformProxy function representing the `skewX()` CSS function.
 */
function skewX(ax) {
    return () => `skewX(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(ax)})`;
}
/**
 * Returns an ITransformProxy function representing the `skewY()` CSS function.
 */
function skewY(ay) {
    return () => `skewX(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(ay)})`;
}
/**
 * Returns an ITransformProxy function representing the `translate()` CSS function.
 */
function translate(x, y) {
    return () => `translate(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(x)}${y != null ? "," + _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(y) : ""})`;
}
/**
 * Returns an ITransformProxy function representing the given translate CSS function.
 */
function translateImpl(name, s) {
    return () => `${name}(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(s)})`;
}
/**
 * Returns an ITransformProxy function representing the `translateX()` CSS function.
 */
function translateX(x) {
    return translateImpl("translateX", x);
}
/**
 * Returns an ITransformProxy function representing the `translateY()` CSS function.
 */
function translateY(y) {
    return translateImpl("translateY", y);
}
/**
 * Returns an ITransformProxy function representing the `translateZ()` CSS function.
 */
function translateZ(z) {
    return translateImpl("translateZ", z);
}
/**
 * Returns an ITransformProxy function representing the `translate3d()` CSS function.
 */
function translate3d(x, y, z) {
    let v = [_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(x), _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(y),
        _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(z)].join(",");
    return () => `translate3d(${v})`;
}
///////////////////////////////////////////////////////////////////////////////////////////////
//
// Grid functions
//
///////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Returns an IFitContentProxy function representing the `fit-content()` CSS function.
 */
function fitContent(size) {
    return () => `fit-content(${_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].styleToString(size)})`;
}
/**
 * Returns an IMinMaxProxy function representing the `minmax()` CSS function.
 */
function minmax(min, max) {
    let options = { fromNumber: _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssLengthMath"].convertFunc };
    return () => `minmax(${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(min, options)},${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(max, options)})`;
}
/**
 * Returns an IRepeatProxy function representing the `repeat()` CSS function.
 */
function repeat(count, ...tracks) {
    // return () => `repeat(${val2str(count)},${stylePropToString( "gridTemplateRows", tracks, true)})`;
    return () => `repeat(${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(count)},${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(tracks, { arrItemFunc: _styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__["gridTrackToString"] })})`;
}
/**
 * Returns an ISpanProxy function representing the span expression for grid layouts. If the first
 * parameter is a number, the second parameter (if defined) must be a name; if the first parameter
 * is a name, the second parameter (if defined) must be a number.
 */
function span(countOrName, nameOrCount) {
    let firstElm = Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(countOrName);
    let secondElm = nameOrCount ? Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(nameOrCount) : "";
    return () => `span ${firstElm} ${secondElm}`;
}


/***/ }),

/***/ "./lib/api/UtilAPI.js":
/*!****************************!*\
  !*** ./lib/api/UtilAPI.js ***!
  \****************************/
/*! exports provided: Num, Percent, percent, Len, Q, ch, cm, em, ex, ic, inch, lh, mm, pc, pt, px, vb, vh, vi, vw, rem, rlh, vmax, vmin, fr, Angle, deg, rad, grad, turn, Time, ms, s, Resolution, dpi, dpcm, dppx, x, Frequency, hz, khz, raw, usevar, url, attr, quoted, counter, counters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Num", function() { return Num; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Percent", function() { return Percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Len", function() { return Len; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ch", function() { return ch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cm", function() { return cm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "em", function() { return em; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ex", function() { return ex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return ic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inch", function() { return inch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lh", function() { return lh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mm", function() { return mm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return pc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pt", function() { return pt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return vb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vi", function() { return vi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rem", function() { return rem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rlh", function() { return rlh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmax", function() { return vmax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmin", function() { return vmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fr", function() { return fr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angle", function() { return Angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg", function() { return deg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad", function() { return rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grad", function() { return grad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turn", function() { return turn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return ms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolution", function() { return Resolution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dpi", function() { return dpi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dpcm", function() { return dpcm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dppx", function() { return dppx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frequency", function() { return Frequency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hz", function() { return hz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "khz", function() { return khz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raw", function() { return raw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usevar", function() { return usevar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoted", function() { return quoted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counters", function() { return counters; });
/* harmony import */ var _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/* harmony import */ var _styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");


/**
 * The Num object contains static methods that implement CSS mathematic functions on the `<number>`
 * CSS type. When arguments for these functions are of the number JavaScript type they are
 * converted to strings without appending any units to them.
 */
let Num = new _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssNumberMath"]();
/**
 * The Percent object contains static methods that implement CSS mathematic functions on the
 * `<percentage>` CSS type by appending a "%" unit suffix.
 */
let Percent = new _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssPercentMath"]();
/** Creates percent value */
function percent(n) { return () => n + "%"; }
/**
 * The Len object contains static methods that implement CSS mathematic functions on the `<length>`
 * CSS type by appending a length unit suffix.
 * Integer numbers use "px"; floating point numbers use "em".
 */
let Len = new _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"]();
/** Creates length value in quarters of an inch */
function Q(n) { return () => n + "Q"; }
/** Creates length value in ch units */
function ch(n) { return () => n + "ch"; }
/** Creates length value in cantimeters */
function cm(n) { return () => n + "cm"; }
/** Creates length value in calculated font-sizes of the element */
function em(n) { return () => n + "em"; }
/** Creates length value in heights of lowercase letter 'x' in the font */
function ex(n) { return () => n + "ex"; }
/** Creates length value in ic units */
function ic(n) { return () => n + "ic"; }
/** Creates length value in inches */
function inch(n) { return () => n + "in"; }
/** Creates length value in line-heights of the element */
function lh(n) { return () => n + "lh"; }
/** Creates length value in millimeters */
function mm(n) { return () => n + "mm"; }
/** Creates length value in picas */
function pc(n) { return () => n + "pc"; }
/** Creates length value in points */
function pt(n) { return () => n + "pt"; }
/** Creates length value in pixels */
function px(n) { return () => n + "px"; }
/** Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s block axis */
function vb(n) { return () => n + "vb"; }
/** Creates length value in 1% of the height of the viewport's initial containing block */
function vh(n) { return () => n + "vh"; }
/** Creates length value in 1% of the size of the initial containing block, in the direction
 * of the root element’s inline axis */
function vi(n) { return () => n + "vi"; }
/** Creates length value in 1% of the width of the viewport's initial containing block */
function vw(n) { return () => n + "vw"; }
/** Creates length value in fontsizes of the root element (<html>) */
function rem(n) { return () => n + "rem"; }
/** Creates length value in line-heights of the root element (<html>) */
function rlh(n) { return () => n + "rlh"; }
/** Creates length value in the units which are a smaller value between vw and vh */
function vmax(n) { return () => n + "vmax"; }
/** Creates length value in the units which are a larger value between vw and vh */
function vmin(n) { return () => n + "vmin"; }
/** Creates length value for flex */
function fr(n) { return () => n + "fr"; }
/**
 * The Angle object contains static methods that implement CSS mathematic functions on the `<angle>`
 * CSS type by appending an angle unit suffix.
 * Integer numbers use "deg"; floating point numbers use "turn".
 */
let Angle = new _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssAngleMath"]();
/** Creates angle value in degrees */
function deg(n) { return () => n + "deg"; }
/** Creates angle value in radians */
function rad(n) { return () => n + "rad"; }
/** Creates angle value in gradians */
function grad(n) { return () => n + "grad"; }
/** Creates angle value in turns */
function turn(n) { return () => n + "turn"; }
/**
 * The Time object contains static methods that implement CSS mathematic functions on the `<time>`
 * CSS type by appending a time unit suffix.
 * Integer numbers use "ms"; floating point numbers use "s".
 */
let Time = new _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssTimeMath"]();
/** Creates time value in milliseconds */
function ms(n) { return () => n + "ms"; }
/** Creates time value in seconds */
function s(n) { return () => n + "s"; }
/**
 * The Resolution object contains static methods that implement CSS mathematic functions on the
 * `<resolution>` CSS type by appending a resolution unit suffix.
 * Integer numbers use "dpi"; floating point numbers use "dpcm".
 */
let Resolution = new _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssResolutionMath"]();
/** Creates resolution value in DPI */
function dpi(n) { return () => n + "dpi"; }
/** Creates resolution value in DPCM */
function dpcm(n) { return () => n + "dpcm"; }
/** Creates resolution value in DPPX */
function dppx(n) { return () => n + "dppx"; }
/** Creates resolution value in X */
function x(n) { return () => n + "x"; }
/**
 * The Frequency object contains static methods that implement CSS mathematic functions on the
 * `<frequency>` CSS type by appending a frequency unit suffix.
 * Integer numbers use "Hz"; floating point numbers use "kHz".
 */
let Frequency = new _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssFrequencyMath"]();
/** Creates frequency value in Hertz */
function hz(n) { return () => n + "hz"; }
/** Creates frequency value in Kilo-Hertz */
function khz(n) { return () => n + "khz"; }
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
    return () => Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["templateStringToString"])(parts, params);
}
/**
 * Returns a function representing the invocation of the `var()` CSS function for
 * the given custom CSS property with optional fallbacks.
 */
function usevar(varObj, fallback) {
    return () => fallback
        ? `var(--${varObj.name},${Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__["stylePropToString"])(varObj.template, fallback, true)})`
        : `var(--${varObj.name})`;
}
/**
 * Returns a function representing the CSS `url()` function. The string parameter
 * will be wrapped in a "url()" invocation. The function can also accept the IIDRule object to
 * create url(#element) invocation, which is often used to address SVG elements by their IDs.
 */
function url(val) {
    return () => `url(${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val)})`;
}
/**
 * Returns a function representing the `attr()` CSS function. It returns IStringProxy
 * and theoretically can be used in any style property; however, its use by browsers is currently
 * limited to the `content` property. Also no browser currently support type, units or fallback
 * values.
 */
function attr(attrName, typeOrUnit, fallback) {
    return () => `attr(${attrName}${typeOrUnit ? " " + typeOrUnit : ""}${fallback ? "," + fallback : ""})`;
}
/**
 * Returns a function representing a string in quotation marks.
 */
function quoted(val) {
    return () => `"${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val)}"`;
}
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
        let styleString = style ? `,${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(style)}` : "";
        let before = textBefore ? `"${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(textBefore)}"` : "";
        let after = textAfter ? `"${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(textAfter)}"` : "";
        return `${before} counter(${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(counterObj)}${styleString}) ${after}`;
    };
}
/**
 * Returns a function representing the CSS `countesr()` function with the given
 * separator string and additional optional strings added after and/or before the counter.
 */
function counters(counterObj, separator, style, textAfter, textBefore) {
    return () => {
        let sepString = separator ? `"${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(separator)}"` : `"."`;
        let styleString = style ? `,${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(style)}` : "";
        let before = textBefore ? `"${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(textBefore)}"` : "";
        let after = textAfter ? `"${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(textAfter)}"` : "";
        return `${before} counters(${Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(counterObj)},${sepString}${styleString}) ${after}`;
    };
}


/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_UtilTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/UtilTypes */ "./lib/styles/UtilTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebNamespaces", function() { return _styles_UtilTypes__WEBPACK_IMPORTED_MODULE_0__["WebNamespaces"]; });

/* harmony import */ var _styles_ColorTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/ColorTypes */ "./lib/styles/ColorTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return _styles_ColorTypes__WEBPACK_IMPORTED_MODULE_1__["Colors"]; });

/* harmony import */ var _styles_ImageTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/ImageTypes */ "./lib/styles/ImageTypes.js");
/* harmony import */ var _styles_ImageTypes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ImageTypes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _styles_ImageTypes__WEBPACK_IMPORTED_MODULE_2__) if(["default","WebNamespaces","Colors"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _styles_ImageTypes__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _styles_StyleTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/StyleTypes */ "./lib/styles/StyleTypes.js");
/* harmony import */ var _styles_StyleTypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_StyleTypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _styles_StyleTypes__WEBPACK_IMPORTED_MODULE_3__) if(["default","WebNamespaces","Colors"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _styles_StyleTypes__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _styles_SelectorTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/SelectorTypes */ "./lib/styles/SelectorTypes.js");
/* harmony import */ var _styles_SelectorTypes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_SelectorTypes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _styles_SelectorTypes__WEBPACK_IMPORTED_MODULE_4__) if(["default","WebNamespaces","Colors"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _styles_SelectorTypes__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _styles_MediaTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/MediaTypes */ "./lib/styles/MediaTypes.js");
/* harmony import */ var _styles_MediaTypes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_MediaTypes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _styles_MediaTypes__WEBPACK_IMPORTED_MODULE_5__) if(["default","WebNamespaces","Colors"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _styles_MediaTypes__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _styles_FontFaceTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/FontFaceTypes */ "./lib/styles/FontFaceTypes.js");
/* harmony import */ var _styles_FontFaceTypes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_FontFaceTypes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _styles_FontFaceTypes__WEBPACK_IMPORTED_MODULE_6__) if(["default","WebNamespaces","Colors"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _styles_FontFaceTypes__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _rules_RuleTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/RuleTypes */ "./lib/rules/RuleTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDefinition", function() { return _rules_RuleTypes__WEBPACK_IMPORTED_MODULE_7__["StyleDefinition"]; });

/* harmony import */ var _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/UtilAPI */ "./lib/api/UtilAPI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Num", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["Num"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Percent", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["Percent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["percent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Len", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["Len"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["Q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ch", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["ch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cm", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["cm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "em", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["em"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ex", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["ex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ic", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["ic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inch", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["inch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lh", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["lh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mm", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["mm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pc", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["pc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pt", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["pt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "px", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["px"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vb", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["vb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["vh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vi", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["vi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["vw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rem", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["rem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rlh", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["rlh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmax", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["vmax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmin", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["vmin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fr", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["fr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Angle", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["Angle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deg", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["deg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rad", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["rad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grad", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["grad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "turn", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["turn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["Time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ms", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["ms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resolution", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["Resolution"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dpi", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["dpi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dpcm", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["dpcm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dppx", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["dppx"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "x", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Frequency", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["Frequency"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hz", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["hz"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "khz", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["khz"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raw", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["raw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usevar", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["usevar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "url", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["url"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["attr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quoted", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["quoted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["counter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "counters", function() { return _api_UtilAPI__WEBPACK_IMPORTED_MODULE_8__["counters"]; });

/* harmony import */ var _api_ColorAPI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api/ColorAPI */ "./lib/api/ColorAPI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _api_ColorAPI__WEBPACK_IMPORTED_MODULE_9__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _api_ColorAPI__WEBPACK_IMPORTED_MODULE_9__["hsl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return _api_ColorAPI__WEBPACK_IMPORTED_MODULE_9__["alpha"]; });

/* harmony import */ var _api_ImageAPI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api/ImageAPI */ "./lib/api/ImageAPI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gradient", function() { return _api_ImageAPI__WEBPACK_IMPORTED_MODULE_10__["gradient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "crossFade", function() { return _api_ImageAPI__WEBPACK_IMPORTED_MODULE_10__["crossFade"]; });

/* harmony import */ var _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api/StyleAPI */ "./lib/api/StyleAPI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["selector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStylePropValue", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["getStylePropValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElementStyle", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["setElementStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setElementStringStyle", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["setElementStringStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stylesetToStringStyleset", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["stylesetToStringStyleset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "diffStylesets", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["diffStylesets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "brightness", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["brightness"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contrast", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["contrast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "grayscale", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["grayscale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["invert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["opacity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saturate", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["saturate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepia", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["sepia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["blur"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dropShadow", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["dropShadow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hueRotate", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["hueRotate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inset", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["inset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circle", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["circle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ellipse", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["ellipse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polygon", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["polygon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ray", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["ray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "path", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["path"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matrix", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["matrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matrix3d", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["matrix3d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "perspective", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["perspective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["rotate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["rotateX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["rotateY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["rotateZ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotate3d", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["rotate3d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["scale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleX", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["scaleX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleY", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["scaleY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleZ", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["scaleZ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scale3d", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["scale3d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skew", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["skew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skewX", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["skewX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skewY", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["skewY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["translate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateX", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["translateX"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateY", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["translateY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translateZ", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["translateZ"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "translate3d", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["translate3d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fitContent", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["fitContent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minmax", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["minmax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "span", function() { return _api_StyleAPI__WEBPACK_IMPORTED_MODULE_11__["span"]; });

/* harmony import */ var _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api/RuleAPI */ "./lib/api/RuleAPI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$abstract", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$abstract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$class", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$class"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$classname", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$classname"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$id", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$id"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$style", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$style"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$keyframes", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$keyframes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$var", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$var"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$counter", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$counter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$gridline", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$gridline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$gridarea", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$gridarea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$import", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$import"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$fontface", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$fontface"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$namespace", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$page", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$page"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$supports", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$supports"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$media", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$media"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$use", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$use"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "$embed", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["$embed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableShortNames", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["enableShortNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["classes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createCssSerializer", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["createCssSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeToCSS", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["serializeToCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "virtual", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["virtual"]; });

/* harmony import */ var _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./api/SchedulingAPI */ "./lib/api/SchedulingAPI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "activate", function() { return _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__["activate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deactivate", function() { return _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__["deactivate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceDOMUpdate", function() { return _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__["forceDOMUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cancelDOMUpdate", function() { return _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__["cancelDOMUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDefaultSchedulerType", function() { return _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__["setDefaultSchedulerType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultSchedulerType", function() { return _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__["getDefaultSchedulerType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerScheduler", function() { return _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__["registerScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unregisterScheduler", function() { return _api_SchedulingAPI__WEBPACK_IMPORTED_MODULE_13__["unregisterScheduler"]; });

// Type definitions for mimcss
















/***/ }),

/***/ "./lib/rules/AnimationRule.js":
/*!************************************!*\
  !*** ./lib/rules/AnimationRule.js ***!
  \************************************/
/*! exports provided: AnimationRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationRule", function() { return AnimationRule; });
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _StyleRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleRules */ "./lib/rules/StyleRules.js");
/* harmony import */ var _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");



/**
 * The AnimationRule class describes a @keyframes CSS rule.
 */
class AnimationRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__["Rule"] {
    constructor(frames, nameOverride) {
        super();
        if (frames)
            this.frameRules = frames.map(frame => new AnimationFrameRule(frame[0], frame[1]));
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        [this.name, this.cssName] = Object(_Rule__WEBPACK_IMPORTED_MODULE_0__["createNames"])(ownerContainer, ruleName, this.nameOverride);
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
        this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_0__["Rule"].addRuleToDOM(`@keyframes ${this.name} {}`, parent);
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
/**
 * The AnimationFrameRule class represents a single keyframe clause in the animation rule.
 */
class AnimationFrameRule extends _StyleRules__WEBPACK_IMPORTED_MODULE_1__["StyleRule"] {
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
        return Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_2__["val2str"])(this.waypoint, {
            fromNumber: v => v + "%",
            arrItemFunc: v => Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_2__["val2str"])(v, { fromNumber: v => v + "%" }),
            arrSep: ","
        });
    }
}


/***/ }),

/***/ "./lib/rules/CounterRules.js":
/*!***********************************!*\
  !*** ./lib/rules/CounterRules.js ***!
  \***********************************/
/*! exports provided: CounterRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterRule", function() { return CounterRule; });
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");

/**
 * The CounterRule class describes a named counter definition. Use this rule to create
 * counter objects that can be used in counter-increment, counter-reset and counter-set style
 * properties. No CSS rule is created for counters - they are needed only to provide type-safe
 * counter definitions.
 */
class CounterRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__["RuleLike"] {
    constructor(nameOverride) {
        super();
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        [this.name] = Object(_Rule__WEBPACK_IMPORTED_MODULE_0__["createNames"])(ownerContainer, ruleName, this.nameOverride);
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


/***/ }),

/***/ "./lib/rules/GridRules.js":
/*!********************************!*\
  !*** ./lib/rules/GridRules.js ***!
  \********************************/
/*! exports provided: GridLineRule, GridAreaRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridLineRule", function() { return GridLineRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridAreaRule", function() { return GridAreaRule; });
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");

/**
 * The GridLineRule class describes a named grid line definition. No CSS rule is created for grid
 * lines - they are needed only to provide type-safe grid line definitions.
 */
class GridLineRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__["RuleLike"] {
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
            [this.name] = Object(_Rule__WEBPACK_IMPORTED_MODULE_0__["createNames"])(ownerContainer, ruleName, this.nameOverride);
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
/**
 * The GridAreaRule class describes a named grid area definition. No CSS rule is created for grid
 * areas - they are needed only to provide type-safe grid area definitions.
 */
class GridAreaRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__["RuleLike"] {
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
        [this.name] = Object(_Rule__WEBPACK_IMPORTED_MODULE_0__["createNames"])(ownerContainer, ruleName, this.nameOverride);
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


/***/ }),

/***/ "./lib/rules/GroupRules.js":
/*!*********************************!*\
  !*** ./lib/rules/GroupRules.js ***!
  \*********************************/
/*! exports provided: GroupRule, SupportsRule, MediaRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupRule", function() { return GroupRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportsRule", function() { return SupportsRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaRule", function() { return MediaRule; });
/* harmony import */ var _RuleContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleContainer */ "./lib/rules/RuleContainer.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
/* harmony import */ var _styles_MediaFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/MediaFuncs */ "./lib/styles/MediaFuncs.js");




/**
 * The GroupRule class serves as a base class for all grouping CSS rules.
 */
class GroupRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__["Rule"] {
    constructor(instanceOrClass) {
        super();
        this.instanceOrClass = instanceOrClass;
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        // container to which our groupng rule belongs becomes the parent container for the
        // style definition instance
        let instance = Object(_RuleContainer__WEBPACK_IMPORTED_MODULE_0__["processInstanceOrClass"])(this.instanceOrClass, container.getDefinitionInstance());
        if (!instance)
            return;
        this.instance = instance;
        this.ruleContainer = Object(_RuleContainer__WEBPACK_IMPORTED_MODULE_0__["getContainerFromInstance"])(instance);
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        if (!this.ruleContainer)
            return;
        let selector = this.getGroupSelectorText();
        if (!selector)
            return;
        this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_1__["Rule"].addRuleToDOM(`${selector} {}`, parent);
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
        let queryString = Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_2__["supportsQueryToString"])(this.query);
        // determine whether the query is supported and if it is not, don't insert the rule
        return CSS.supports(queryString) ? `@supports ${queryString}` : null;
    }
    /** Flag indicated whether the browser supports this rule's query */
    get isSupported() {
        return CSS.supports(Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_2__["supportsQueryToString"])(this.query));
    }
}
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
        return `@media ${Object(_styles_MediaFuncs__WEBPACK_IMPORTED_MODULE_3__["mediaQueryToString"])(this.query)}`;
    }
}


/***/ }),

/***/ "./lib/rules/MiscRules.js":
/*!********************************!*\
  !*** ./lib/rules/MiscRules.js ***!
  \********************************/
/*! exports provided: ImportRule, NamespaceRule, FontFaceRule, PageRule, ClassNameRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportRule", function() { return ImportRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamespaceRule", function() { return NamespaceRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontFaceRule", function() { return FontFaceRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRule", function() { return PageRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNameRule", function() { return ClassNameRule; });
/* harmony import */ var _styles_FontFaceFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/FontFaceFuncs */ "./lib/styles/FontFaceFuncs.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
/* harmony import */ var _styles_MediaFuncs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/MediaFuncs */ "./lib/styles/MediaFuncs.js");
/* harmony import */ var _StyleRules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyleRules */ "./lib/rules/StyleRules.js");





/**
 * The MiscRule class serves as a base class for simple rules.
 */
class MiscRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__["Rule"] {
    constructor(isTopLevelRule) {
        super();
        this.isTopLevelRule = isTopLevelRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_1__["Rule"].addRuleToDOM(this.getRuleText(), parent);
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
        let supportsQueryString = !this.supportsQuery ? "" : Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_2__["supportsQueryToString"])(this.supportsQuery);
        if (supportsQueryString && !supportsQueryString.startsWith("supports"))
            supportsQueryString = `supports( ${supportsQueryString} )`;
        let mediaQueryString = !this.mediaQuery ? "" : Object(_styles_MediaFuncs__WEBPACK_IMPORTED_MODULE_3__["mediaQueryToString"])(this.mediaQuery);
        return `@import ${url} ${supportsQueryString} ${mediaQueryString}`;
    }
}
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
        return `@font-face ${Object(_styles_FontFaceFuncs__WEBPACK_IMPORTED_MODULE_0__["fontFaceToString"])(this.fontface)}`;
    }
}
/**
 * The PageRule class represents the CSS @page rule.
 */
class PageRule extends _StyleRules__WEBPACK_IMPORTED_MODULE_4__["StyleRule"] {
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
/**
 * The PageRule class represents the CSS @page rule.
 */
class ClassNameRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__["RuleLike"] {
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


/***/ }),

/***/ "./lib/rules/Rule.js":
/*!***************************!*\
  !*** ./lib/rules/Rule.js ***!
  \***************************/
/*! exports provided: RuleLike, Rule, createNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleLike", function() { return RuleLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rule", function() { return Rule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNames", function() { return createNames; });
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


/***/ }),

/***/ "./lib/rules/RuleContainer.js":
/*!************************************!*\
  !*** ./lib/rules/RuleContainer.js ***!
  \************************************/
/*! exports provided: s_enableShortNames, processInstanceOrClass, getContainerFromInstance, activateInstance, deactivateInstance, serializeInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_enableShortNames", function() { return s_enableShortNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processInstanceOrClass", function() { return processInstanceOrClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainerFromInstance", function() { return getContainerFromInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateInstance", function() { return activateInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivateInstance", function() { return deactivateInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeInstance", function() { return serializeInstance; });
/* harmony import */ var _RuleTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleTypes */ "./lib/rules/RuleTypes.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _VarRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VarRule */ "./lib/rules/VarRule.js");
/* harmony import */ var _MiscRules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MiscRules */ "./lib/rules/MiscRules.js");
/* harmony import */ var _Scheduling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Scheduling */ "./lib/rules/Scheduling.js");





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
        if (propVal instanceof _RuleTypes__WEBPACK_IMPORTED_MODULE_0__["StyleDefinition"])
            this.processReference(propVal);
        else if (propVal instanceof _VarRule__WEBPACK_IMPORTED_MODULE_2__["VarRule"])
            this.processVarRule(propName, propVal);
        else if (propVal instanceof _Rule__WEBPACK_IMPORTED_MODULE_1__["Rule"])
            this.processRule(propName, propVal);
        else if (propVal instanceof _Rule__WEBPACK_IMPORTED_MODULE_1__["RuleLike"])
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
        if (rule instanceof _MiscRules__WEBPACK_IMPORTED_MODULE_3__["ImportRule"])
            this.imports.push(rule);
        else if (rule instanceof _MiscRules__WEBPACK_IMPORTED_MODULE_3__["NamespaceRule"])
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
            Object(_Scheduling__WEBPACK_IMPORTED_MODULE_4__["s_scheduleStylePropertyUpdate"])(this.cssCustomVarStyleRule, name, value, important, schedulerType);
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
            this.cssCustomVarStyleRule = _Rule__WEBPACK_IMPORTED_MODULE_1__["Rule"].addRuleToDOM(`:root {${this.vars.map(varObj => varObj.toCssString()).filter(v => v != null).join(";")}}`, parent);
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
    for (let baseClass = Object.getPrototypeOf(definitionClass); baseClass !== _RuleTypes__WEBPACK_IMPORTED_MODULE_0__["StyleDefinition"]; baseClass = Object.getPrototypeOf(baseClass)) {
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
    if (baseClass !== _RuleTypes__WEBPACK_IMPORTED_MODULE_0__["StyleDefinition"])
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
/**
 * Serializes the given style definition to the given string.
 */
function serializeInstance(instance, ctx) {
    let ruleContainer = getContainerFromInstance(instance);
    if (ruleContainer)
        ruleContainer.serializeRules(ctx);
}


/***/ }),

/***/ "./lib/rules/RuleTypes.js":
/*!********************************!*\
  !*** ./lib/rules/RuleTypes.js ***!
  \********************************/
/*! exports provided: StyleDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDefinition", function() { return StyleDefinition; });
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


/***/ }),

/***/ "./lib/rules/Scheduling.js":
/*!*********************************!*\
  !*** ./lib/rules/Scheduling.js ***!
  \*********************************/
/*! exports provided: SchedulingActivator, s_scheduleStylePropertyUpdate, s_scheduleCall, s_getDefaultSchedulerType, s_setDefaultSchedulerType, s_registerScheduler, s_unregisterScheduler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingActivator", function() { return SchedulingActivator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_scheduleStylePropertyUpdate", function() { return s_scheduleStylePropertyUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_scheduleCall", function() { return s_scheduleCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_getDefaultSchedulerType", function() { return s_getDefaultSchedulerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_setDefaultSchedulerType", function() { return s_setDefaultSchedulerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_registerScheduler", function() { return s_registerScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_unregisterScheduler", function() { return s_unregisterScheduler; });
/* harmony import */ var _RuleContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RuleContainer */ "./lib/rules/RuleContainer.js");

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
        Object(_RuleContainer__WEBPACK_IMPORTED_MODULE_0__["activateInstance"])(definition, 1);
    }
    /**
     * Instructs to deactivate the given style definition instance. This method is called when the
     * deactivate function is called for this activation mechanism.
     * @param definition
     */
    deactivate(definition) {
        Object(_RuleContainer__WEBPACK_IMPORTED_MODULE_0__["deactivateInstance"])(definition, 1);
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
                Object(_RuleContainer__WEBPACK_IMPORTED_MODULE_0__["activateInstance"])(definition, refCount);
            else
                Object(_RuleContainer__WEBPACK_IMPORTED_MODULE_0__["deactivateInstance"])(definition, -refCount);
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
/**
 * Schedules calling of the given function using the given scheduler type.
 */
function s_scheduleCall(func, schedulerType) {
    let activator = schedulerType == null ? s_defaultActivator : s_registeredActivators.get(schedulerType);
    if (activator)
        func(activator);
}
/**
 * Returns the current default scheduler type.
 */
function s_getDefaultSchedulerType() {
    return s_defaultSchedulerType;
}
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
/*! exports provided: StyleRule, AbstractRule, ClassRule, IDRule, SelectorRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleRule", function() { return StyleRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractRule", function() { return AbstractRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRule", function() { return ClassRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDRule", function() { return IDRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorRule", function() { return SelectorRule; });
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");
/* harmony import */ var _styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
/* harmony import */ var _styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/UtilFuncs */ "./lib/styles/UtilFuncs.js");
/* harmony import */ var _VarRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VarRule */ "./lib/rules/VarRule.js");
/* harmony import */ var _styles_SelectorFuncs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/SelectorFuncs */ "./lib/styles/SelectorFuncs.js");
/* harmony import */ var _Scheduling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Scheduling */ "./lib/rules/Scheduling.js");






/**
 * The StyleRule class is used as a base class for rules that contain a style rule. This class
 * implements the parsing of the CombinedStyleset object.
 */
class StyleRule extends _Rule__WEBPACK_IMPORTED_MODULE_0__["Rule"] {
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
                    this.styleset = Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__["mergeStylesets"])(this.styleset, parent.styleset);
                    this.copyDependentRulesFrom(parent);
                });
            }
        }
        // merge custom  properties
        Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__["mergeStylesetCustomProps"])(this.styleset, inputStyleset);
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
                    this.dependentRules[propName] = tuples.map(tuple => new DependentRule(() => propName + Object(_styles_SelectorFuncs__WEBPACK_IMPORTED_MODULE_4__["selectorToString"])(tuple[0]), undefined, tuple[1], this));
                }
            }
            else if (propName.endsWith("&")) {
                // value is an array of two-element tuples with selector and styleset
                let tuples = propVal;
                if (tuples.length > 0) {
                    this.dependentRules[propName] = tuples.map(tuple => new DependentRule(() => Object(_styles_SelectorFuncs__WEBPACK_IMPORTED_MODULE_4__["selectorToString"])(tuple[0]) + propName, undefined, tuple[1], this));
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
        this.styleset = Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__["mergeStylesets"])(this.styleset, src.styleset);
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
        return `${this.cachedSelectorString} {${Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__["stylesetToString"])(this.styleset)}}`;
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
            this.cssRule = _Rule__WEBPACK_IMPORTED_MODULE_0__["Rule"].addRuleToDOM(this.toCssString(), parent);
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
            Object(_Scheduling__WEBPACK_IMPORTED_MODULE_5__["s_scheduleStylePropertyUpdate"])(this.cssRule, Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_2__["camelToDash"])(name), value == null ? null : Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__["stylePropToString"])(name, value, true), important, schedulerType);
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
        if (!varObj || !(varObj instanceof _VarRule__WEBPACK_IMPORTED_MODULE_3__["VarRule"]))
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
            Object(_Scheduling__WEBPACK_IMPORTED_MODULE_5__["s_scheduleStylePropertyUpdate"])(this.cssRule, varObj.cssName, value == null ? null : Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_1__["stylePropToString"])(varObj.template, value, true), important, schedulerType);
        }
    }
}
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
            return `${parentSelector}${selector}(${Object(_styles_SelectorFuncs__WEBPACK_IMPORTED_MODULE_4__["pseudoEntityToString"])(selector, this.selectorParam)})`;
        }
        else {
            // convert selector to string.
            let selector = Object(_styles_SelectorFuncs__WEBPACK_IMPORTED_MODULE_4__["selectorToString"])(this.selector);
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
        [this.name, this.cssName] = Object(_Rule__WEBPACK_IMPORTED_MODULE_0__["createNames"])(ownerContainer, ruleName, this.nameOverride, this.cssPrefix);
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
        return Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_2__["val2str"])(this.selector);
    }
}


/***/ }),

/***/ "./lib/rules/VarRule.js":
/*!******************************!*\
  !*** ./lib/rules/VarRule.js ***!
  \******************************/
/*! exports provided: VarRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VarRule", function() { return VarRule; });
/* harmony import */ var _styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/StyleFuncs */ "./lib/styles/StyleFuncs.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rule */ "./lib/rules/Rule.js");


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
class VarRule extends _Rule__WEBPACK_IMPORTED_MODULE_1__["RuleLike"] {
    constructor(template, value, nameOverride) {
        super();
        this.template = template;
        this.value = value;
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, ownerContainer, ruleName) {
        super.process(container, ownerContainer, ruleName);
        [this.name, this.cssName] = Object(_Rule__WEBPACK_IMPORTED_MODULE_1__["createNames"])(ownerContainer, ruleName, this.nameOverride, "--");
    }
    // Creates a copy of the rule.
    clone() {
        return new VarRule(this.template, this.value, this.nameOverride);
    }
    // Converts the rule to CSS string.
    toCssString() {
        return this.value == null ? null : `${this.cssName}: ${Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__["stylePropToString"])(this.template, this.value, true)}`;
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
        this.container.setCustomVarValue(this.cssName, value == null ? null : Object(_styles_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__["stylePropToString"])(this.template, value, true), important, schedulerType);
    }
}


/***/ }),

/***/ "./lib/styles/ColorFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/ColorFuncs.js ***!
  \**********************************/
/*! exports provided: rgbToString, hslToString, colorWithAlphaToString, colorToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToString", function() { return rgbToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToString", function() { return hslToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorWithAlphaToString", function() { return colorWithAlphaToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToString", function() { return colorToString; });
/* harmony import */ var _ColorTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorTypes */ "./lib/styles/ColorTypes.js");
/* harmony import */ var _UtilFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");


/**
 * Map of predefined color names by their numeric values. Only built-in color names will be in
 * this map - those named colors that are added using module augmentation will NOT reside in
 * this map. This is needed to convert the numeric color values set using the Color.brown
 * notation to their names when inserting CSS rules.
 */
let reversedColorMap = new Map();
// build Reversed Color Map
Object.entries(_ColorTypes__WEBPACK_IMPORTED_MODULE_0__["Colors"]).forEach(([name, value]) => reversedColorMap.set(value, name));
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
    return `hsla(${_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(h)},${colorPercentToString(s)},${colorPercentToString(l)},${alphaToString(a)})`;
}
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
    let n = typeof c === "string" ? _ColorTypes__WEBPACK_IMPORTED_MODULE_0__["Colors"][c] : c;
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
/**
 * Converts color style value to the CSS time string. If a string value is in the Colors object we
 * need to get its number and convert it to the rgb[a]() function because it might be a custom
 * color name added via INamedColors module augmentation. For numeric values, we check if this is
 * one of the predefined colors and return its string representation
 */
function colorToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(val, {
        fromString: v => _ColorTypes__WEBPACK_IMPORTED_MODULE_0__["Colors"][v] ? colorNumberToString(_ColorTypes__WEBPACK_IMPORTED_MODULE_0__["Colors"][v]) : v,
        fromNumber: colorNumberToString
    });
}


/***/ }),

/***/ "./lib/styles/ColorTypes.js":
/*!**********************************!*\
  !*** ./lib/styles/ColorTypes.js ***!
  \**********************************/
/*! exports provided: Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/**
 * This module contains types for working with CSS colors.
 */
;
/**
 * Object whose property names are names of well-known colors and values correspond to the hexadecimal
 * representartion of the RGB separations (without an alpha mask).
 */
let Colors = {
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
/*! exports provided: fontFaceToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFaceToString", function() { return fontFaceToString; });
/* harmony import */ var _StyleFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StyleFuncs */ "./lib/styles/StyleFuncs.js");
/* harmony import */ var _UtilFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");


/**
 * Converts the given font face definition object to the CSS string
 */
function fontFaceToString(fontface) {
    if (!fontface || !fontface.fontFamily)
        return null;
    let s = "{";
    for (let propName in fontface) {
        s += `${Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["camelToDash"])(propName)}:`;
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
function fontStretchToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(val, {
        fromNumber: _UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssPercentMath"].styleToString,
        arrItemFunc: _UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssPercentMath"].styleToString
    });
}
function fontStyleToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(val, {
        fromNumber: v => `oblique ${_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString(v)}`,
        fromArray: v => `oblique ${Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["arr2str"])(v, _UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssAngleMath"].styleToString)}`
    });
}
function fontWeightToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(val, {
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["CssNumberMath"].styleToString
    });
}
function fontSrcToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(val, {
        fromAny: fontSingleSrcToString,
        arrSep: ","
    });
}
function fontSingleSrcToString(val) {
    return Object(_StyleFuncs__WEBPACK_IMPORTED_MODULE_0__["obj2str"])(val, [
        ["local", v => `local(${v})`],
        ["url", v => `url(${v})`],
        ["format", v => `format(${fontFormatToString(v)})`]
    ]);
}
function fontFormatToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_1__["val2str"])(val, {
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
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/styles/ImageTypes.js":
/*!**********************************!*\
  !*** ./lib/styles/ImageTypes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This module contains types used to define CSS `<image>` type and related functions.
 */
;


/***/ }),

/***/ "./lib/styles/MediaFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/MediaFuncs.js ***!
  \**********************************/
/*! exports provided: mediaQueryToString, singleMediaQueryToString, mediaFeatureToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQueryToString", function() { return mediaQueryToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleMediaQueryToString", function() { return singleMediaQueryToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaFeatureToString", function() { return mediaFeatureToString; });
/* harmony import */ var _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");

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
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(query, {
        fromAny: singleMediaQueryToString,
        arrSep: ","
    });
}
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
/**
 * Converts the given media feature to the CSS media query string
 */
function mediaFeatureToString(featureName, propVal, valueOnly) {
    if (!featureName || propVal == null)
        return null;
    // find information object 
    let info = mediaFeatures[featureName];
    let realFeatureName = Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["camelToDash"])(featureName);
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
function mediaFeatureSingleValueToString(propVal, convert) {
    if (propVal == null)
        return "";
    if (convert)
        return convert(propVal);
    else if (typeof propVal === "string")
        return propVal;
    else if (Array.isArray(propVal))
        return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["arr2str"])(propVal);
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
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/styles/SelectorFuncs.js":
/*!*************************************!*\
  !*** ./lib/styles/SelectorFuncs.js ***!
  \*************************************/
/*! exports provided: selectorToString, pseudoEntityToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectorToString", function() { return selectorToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pseudoEntityToString", function() { return pseudoEntityToString; });
/* harmony import */ var _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");

///////////////////////////////////////////////////////////////////////////////////////////////////
//
// CSS selector.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the given two-number tuple to a string in the form An+B.
 */
function nthTupleToString(val) {
    let v0 = Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val[0]);
    let v1n = val[1];
    // the '!v1n' expression covers null, undefined and 0.
    let v1 = !v1n ? "" : v1n > 0 ? "+" + Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(v1n) : "-" + Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(-v1n);
    return `${v0}n${v1}`;
}
/**
 * Returns a string representation of a selector.
 */
function selectorToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        arrSep: ""
    });
}
/**
 * Returns a string representation of a parameterized pseudo entity.
 */
function pseudoEntityToString(entityName, val) {
    if (!entityName)
        return "";
    if (entityName.startsWith(":nth"))
        return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, { fromArray: nthTupleToString });
    else
        return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val);
}


/***/ }),

/***/ "./lib/styles/SelectorTypes.js":
/*!*************************************!*\
  !*** ./lib/styles/SelectorTypes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;


/***/ }),

/***/ "./lib/styles/StyleFuncs.js":
/*!**********************************!*\
  !*** ./lib/styles/StyleFuncs.js ***!
  \**********************************/
/*! exports provided: singleBoxShadow_fromObject, borderRadiusToString, gridTrackToString, obj2str, mergeStylesets, mergeStylesetCustomProps, stylesetToString, getCustomPropNameAndValue, stylePropToString, forAllPropsInStylset, supportsQueryToString, singleSupportsQueryToString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleBoxShadow_fromObject", function() { return singleBoxShadow_fromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadiusToString", function() { return borderRadiusToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridTrackToString", function() { return gridTrackToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj2str", function() { return obj2str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStylesets", function() { return mergeStylesets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeStylesetCustomProps", function() { return mergeStylesetCustomProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylesetToString", function() { return stylesetToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomPropNameAndValue", function() { return getCustomPropNameAndValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylePropToString", function() { return stylePropToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAllPropsInStylset", function() { return forAllPropsInStylset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsQueryToString", function() { return supportsQueryToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSupportsQueryToString", function() { return singleSupportsQueryToString; });
/* harmony import */ var _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UtilFuncs */ "./lib/styles/UtilFuncs.js");
/* harmony import */ var _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorFuncs */ "./lib/styles/ColorFuncs.js");


///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions for converting CSS property types to strings.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function singleAnimation_fromObject(val) {
    return obj2str(val, [
        ["duration", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssTimeMath"].styleToString],
        ["func", singleTimingFunction_fromStyle],
        ["delay", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssTimeMath"].styleToString],
        ["count", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssNumberMath"].styleToString],
        "direction",
        "mode",
        "state",
        "name"
    ]);
}
function singleAnimation_fromStyle(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromObj: singleAnimation_fromObject
    });
}
function timingFunctionToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
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
        : Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["arr2str"])(val, singleTimingFunction_fromStyle, ",");
}
function singleTimingFunction_fromStyle(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
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
        ["color", _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"]],
        "image",
        ["position", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["pos2str"]],
        ["size", multiLengthToStringWithSpace, "/"],
        "repeat",
        "attachment",
        "origin",
        "clip"
    ]);
}
function singleBackground_fromStyle(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromNumber: _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"],
        fromObj: singleBackground_fromObject
    });
}
function singleBackgroundSize_fromStyle(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromNumber: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString,
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
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromNumber: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["unitlessOrPercentToString"],
        arrItemFunc: v => Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(v, {
            fromBool: () => "fill",
            fromNumber: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["unitlessOrPercentToString"],
        })
    });
}
function singleBoxShadow_fromObject(val) {
    return obj2str(val, [
        ["inset", v => v ? "inset" : ""],
        ["x", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString],
        ["y", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString],
        ["blur", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString],
        ["spread", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString],
        ["color", _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"]]
    ]);
}
/**
 * Converts corner radius style value to the CSS string.
 */
function singleCornerRadiusToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        arrItemFunc: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString,
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString
    });
}
/**
 * Converts border radius style value to the CSS string.
 */
function borderRadiusToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromArray: v => {
            if (Array.isArray(v[0])) {
                // two MultiCornerRadius values
                let s = Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["arr2str"])(v[0], _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString, " ");
                s += " / ";
                return s + Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["arr2str"])(v[1], _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString, " ");
            }
            else {
                // single MultiCornerRadius value
                return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["arr2str"])(v, _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString, " ");
            }
        },
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString
    });
}
/**
 * Converts border side style value to the CSS string.
 */
function borderToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromNumber: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString,
        fromArray: v => {
            let buf = [];
            if (v[0] != null)
                buf.push(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString(v[0]));
            if (v[1] != null)
                buf.push(Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(v[1]));
            if (v[2] != null)
                buf.push(Object(_ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"])(v[2]));
            return buf.join(" ");
        },
        fromAny: _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"]
    });
}
/**
 * Converts columns style to its CSS string value.
 */
function columnsToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromArray: v => v[0] + " " + _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString(v[1])
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
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromArray: v => {
            if (v.length === 0)
                return "";
            else if (v.length === 1)
                return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(v);
            else if (typeof v[1] === "number")
                return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(v, { arrSep: " " });
            else {
                return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(v, {
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
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromArray: v => {
            if (v.length === 2)
                return v.join(" ");
            else
                return v[0] + " " + v[1] + " " + _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString(v[2]);
        },
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString
    });
}
function font_fromObject(val) {
    return obj2str(val, [
        ["style", fontStyleToString],
        "variant",
        "weight",
        "stretch",
        ["size", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString],
        ["lineHeight", null, "/"],
        "family"
    ]);
}
function fontStyleToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromNumber: v => "oblique " + _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssAngleMath"].styleToString(v)
    });
}
function gridTemplateAreasToString(val) {
    // val can be array of functions (IQuotedProxy[]) or arrays (GridTemplateArea_Definition[])
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromArray: v => {
            if (v.length === 0)
                return "";
            else if (typeof v[0] === "function")
                return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["arr2str"])(v);
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
        let name = Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(def[0]);
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
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromNumber: v => _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString(v),
        fromArray: v => `[${Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["arr2str"])(v)}]`
    });
}
function gridAxisToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromNumber: v => _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString(v),
        arrItemFunc: gridTrackToString
    });
}
function markerStyleToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromObj: v => `url(#${val.name})`
    });
}
function rotateToString(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
        fromArray: v => {
            if (v.length === 2)
                return `${v[0]} ${_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssAngleMath"].styleToString(v[1])}`;
            else
                return `${v[0]} ${v[1]} ${v[2]} ${_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssAngleMath"].styleToString(v[3])}`;
        }
    });
}
function textDecoration_fromObject(val) {
    return obj2str(val, [
        "line",
        "style",
        ["color", _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"]],
        ["thickness", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString],
    ]);
}
function singleTransition_fromObject(val) {
    return obj2str(val, [
        ["property", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["camelToDash"]],
        ["duration", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssTimeMath"].styleToString],
        ["func", singleTimingFunction_fromStyle],
        ["delay", _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssTimeMath"].styleToString]
    ]);
}
function singleTransition_fromStyle(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, {
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
            buf.push(Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(propVal));
        else if (typeof convertor === "string")
            buf.push(stylePropToString(convertor, propVal, true));
        else
            buf.push(convertor(propVal));
    });
    return buf.join(separator);
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
/** Converts the given styleset to its string representation */
function stylesetToString(styleset) {
    if (!styleset)
        return "";
    let s = "";
    forAllPropsInStylset(styleset, (name, value, isCustom) => {
        if (isCustom)
            s += `${name}:${value};`;
        else
            s += `${Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["camelToDash"])(name)}:${value};`;
    });
    return s;
}
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
/**
 * Converts the given style property to the CSS style string. Property name can be in either
 * dash or camel form.
 */
function stylePropToString(propName, propVal, valueOnly) {
    if (!propName)
        return "";
    // find information object for the property
    let info = StylePropertyInfos[Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["dashToCamel"])(propName)];
    // if the property value is an object with the "!" property, then the actual value is the
    // value of this property and we also need to set the "!important" flag
    let varValue = propVal;
    let impFlag = false;
    if (typeof propVal === "object" && "!" in propVal) {
        varValue = propVal["!"];
        impFlag = true;
    }
    let stringValue = !info
        ? Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(varValue)
        : typeof info === "object"
            ? Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(varValue, info)
            : typeof info === "number"
                ? valueToStringByWellKnownFunc(varValue, info)
                : info(varValue);
    if (!stringValue && !valueOnly)
        stringValue = "initial";
    if (impFlag)
        stringValue += " !important";
    return valueOnly ? stringValue : `${Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["camelToDash"])(propName)}:${stringValue}`;
}
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
// Helper function converts the given multi-length value to string. If the value is an array, the
// items will be separated by space.
function multiLengthToStringWithSpace(val) {
    return _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].multiStyleToString(val, " ");
}
// Helper function converts the given multi-time value to string. If the value is an array, the
// items will be separated by comma.
function multiTimeToStringWithComma(val) {
    return _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssTimeMath"].multiStyleToString(val, ",");
}
// Helper function converts the given value to string. If the value is an array, the items will be
// separated by comma.
function arrayToStringWithComma(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, { arrSep: "," });
}
;
// Helper function converts the given value to string. If the value is an array, the items will be
// separated by slash.
function arrayToStringWithSlash(val) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(val, { arrSep: "/" });
}
;
/**
 * Converts the given value to string using a well-known function indicated by the given
 * enumeration value.
 * @param val
 * @param funcType
 */
function valueToStringByWellKnownFunc(val, funcType) {
    let func = funcType === 1 /* Length */ ? _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString :
        funcType === 2 /* Color */ ? _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"] :
            funcType === 3 /* Border */ ? borderToString :
                funcType === 4 /* Position */ ? _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["pos2str"] :
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
        fromNumber: _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"],
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
    backgroundPosition: v => Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["multiPos2str"])(v, ","),
    backgroundRepeat: 8 /* ArrayWithComma */,
    backgroundSize: {
        fromNumber: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString,
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
        fromAny: _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"]
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
    fillOpacity: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssPercentMath"].styleToString,
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
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssAngleMath"].styleToString
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
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString
    },
    quotes: {
        arrItemFunc: v => `"${v}"`
    },
    right: 1 /* Length */,
    rotate: rotateToString,
    rowGap: 1 /* Length */,
    scrollbarColor: {
        arrItemFunc: _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"]
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
        fromNumber: _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"],
        fromObj: textDecoration_fromObject
    },
    textDecorationColor: 2 /* Color */,
    textDecorationThickness: 1 /* Length */,
    textEmphasis: {
        fromAny: _ColorFuncs__WEBPACK_IMPORTED_MODULE_1__["colorToString"]
    },
    textEmphasisColor: 2 /* Color */,
    textIndent: {
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString
    },
    textShadow: {
        fromObj: singleBoxShadow_fromObject,
        arrSep: ",",
    },
    textSizeAdjust: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssPercentMath"].styleToString,
    top: 1 /* Length */,
    transformOrigin: {
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString
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
        fromAny: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssLengthMath"].styleToString
    },
    verticalAlign: 1 /* Length */,
    width: 1 /* Length */,
    willChange: {
        fromString: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["camelToDash"]
    },
    wordSpacing: 1 /* Length */,
    zoom: _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssPercentMath"].styleToString,
    // special properties for IVarRule types
    "CssLength": 1 /* Length */,
    "CssAngle": _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssAngleMath"].styleToString,
    "CssTime": _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssTimeMath"].styleToString,
    "CssResolution": _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssResolutionMath"].styleToString,
    "CssFrequency": _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssFrequencyMath"].styleToString,
    "CssPercent": _UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["CssPercentMath"].styleToString,
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
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(query, {
        fromAny: singleSupportsQueryToString,
        arrSep: " or "
    });
}
/** Converts the given supports query to its string representation */
function singleSupportsQueryToString(query) {
    return Object(_UtilFuncs__WEBPACK_IMPORTED_MODULE_0__["val2str"])(query, {
        fromObj: (v) => {
            let propNames = Object.keys(v).filter((propName) => propName != "$negate");
            if (propNames.length === 0)
                return "";
            let not = v.$negate ? "not" : "";
            return `${not} (${propNames.map((propName) => stylePropToString(propName, query[propName])).join(") and (")})`;
        }
    });
}


/***/ }),

/***/ "./lib/styles/StyleTypes.js":
/*!**********************************!*\
  !*** ./lib/styles/StyleTypes.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

;
;
;
;


/***/ }),

/***/ "./lib/styles/UtilFuncs.js":
/*!*********************************!*\
  !*** ./lib/styles/UtilFuncs.js ***!
  \*********************************/
/*! exports provided: dashToCamel, camelToDash, val2str, arr2str, templateStringToString, CssNumberMath, CssPercentMath, unitlessOrPercentToString, CssLengthMath, CssAngleMath, CssTimeMath, CssResolutionMath, CssFrequencyMath, pos2str, multiPos2str */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashToCamel", function() { return dashToCamel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelToDash", function() { return camelToDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val2str", function() { return val2str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arr2str", function() { return arr2str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateStringToString", function() { return templateStringToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssNumberMath", function() { return CssNumberMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssPercentMath", function() { return CssPercentMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unitlessOrPercentToString", function() { return unitlessOrPercentToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssLengthMath", function() { return CssLengthMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssAngleMath", function() { return CssAngleMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssTimeMath", function() { return CssTimeMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssResolutionMath", function() { return CssResolutionMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CssFrequencyMath", function() { return CssFrequencyMath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pos2str", function() { return pos2str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiPos2str", function() { return multiPos2str; });
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
/**
 * Converts camelCase to dash-case, e.g. fontSize to font-size.
 * @param camel
 */
function camelToDash(camel) {
    return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
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
/**
 * Converts an array of the given typeto a single string using the given separator.
 * Elements of the array are converted to strings using the given function.
 */
function arr2str(val, func, separator = " ") {
    return !val || val.length === 0
        ? ""
        : val.filter(x => x != null).map(y => func ? func(y) : val2str(y)).join(separator);
}
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
/**
 * Converts the given number to string using the following rules:
 * - if the number is between -1 and 1 (non inclusive), multiplies the number and appends "%"
 * - otherwise, converts the number to string without appending any utints.
 */
function unitlessOrPercentToString(n) {
    return n >= 1 || n <= -1 ? n.toString() : Math.round(n * 100) + "%";
}
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
/**
 * Converts multi-position style value to the CSS string.
 */
function multiPos2str(val, separator) {
    return val2str(val, {
        arrItemFunc: pos2str,
        arrSep: separator
    });
}


/***/ }),

/***/ "./lib/styles/UtilTypes.js":
/*!*********************************!*\
  !*** ./lib/styles/UtilTypes.js ***!
  \*********************************/
/*! exports provided: WebNamespaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebNamespaces", function() { return WebNamespaces; });
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
WebNamespaces.HTML = "http://www.w3.org/1999/xhtml";
WebNamespaces.SVG = "http://www.w3.org/2000/svg";
WebNamespaces.XLink = "http://www.w3.org/1999/xlink";
WebNamespaces.XML = "http://www.w3.org/XML/1998/namespace";
WebNamespaces.XMLNS = "http://www.w3.org/2000/xmlns/";
WebNamespaces.MathML = "http://www.w3.org/1998/Math/MathML";


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU2NoZWR1bGluZ0FQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1N0eWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvVXRpbEFQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0FuaW1hdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0NvdW50ZXJSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JpZFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2NoZWR1bGluZy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ltYWdlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9NZWRpYUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU2VsZWN0b3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1NlbGVjdG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU3R5bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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LElBQUksaUVBQU8sQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0QsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLGlFQUFPLENBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxpRUFBTyxDQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMzRCxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksaUVBQU8sQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDeEQsT0FBTyxHQUFHLE1BQU0sYUFBYSxpRUFBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFNBQVMsR0FBRyxXQUFXLEtBQUssS0FBSyxFQUFFLENBQUM7SUFDekYsQ0FBQztBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7QUM5U0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QkFBOEIsQ0FBQztBQUN0QyxpQkFBRyxHQUFHLDRCQUE0QixDQUFDO0FBQ25DLG1CQUFLLEdBQUcsOEJBQThCLENBQUM7QUFDdkMsaUJBQUcsR0FBRyxzQ0FBc0MsQ0FBQztBQUM3QyxtQkFBSyxHQUFHLCtCQUErQixDQUFDO0FBQ3hDLG9CQUFNLEdBQUcsb0NBQW9DLENBQUMiLCJmaWxlIjoibWltY3NzLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIu+7v2ltcG9ydCAqIGFzIENvbG9yVHlwZXMgZnJvbSBcIi4uL3N0eWxlcy9Db2xvclR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JGdW5jcyBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyByZWQsIGdyZWVuLCBibHVlIHNlcGFyYXRpb24gdmFsdWVzIGFuZCBhbiBvcHRpb25hbCBhbHBoYVxyXG4gKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBFYWNoIGNvbG9yIHNlcGFyYXRpb24gY2FuIGJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyIHdpdGhcclxuICogdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogXHJcbiAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gZyBHcmVlbiBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYiBCbHVlIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBhIE9wdGlvbmFsIGFscGhhIG1hc2sgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IENvbG9yVHlwZXMuSUNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MucmdiVG9TdHJpbmcoIHIsIGcsIGIsIGEpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyBodWUtc2F0dXJhdGlvbi1saWdodG5lc3MgY29tcG9uZW50cyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3JcclxuICogdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgSHVlIGNvbXBvbmVudCBpcyB0cmVhdGVkIGFzIHRoZSBDU1MgYDxhbmdsZT5gIHR5cGUuIE51bWJlcnMgYXJlIGNvbnNpZGVyZWQgZGVncmVlcy5cclxuICogXHJcbiAqIFRoZSBTYXR1cmF0aW9uIGFuZCBMaWdodG5lc3MgY29tcG9uZW50cyBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlczpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKlxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gaCBIdWUgY29tcG9uZW50IGFzIGFuIGFuZ2xlIHZhbHVlLlxyXG4gKiBAcGFyYW0gcyBTYXR1cmF0aW9uIGNvbXBvbmVudCBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqIEBwYXJhbSBsIExpZ2h0bmVzcyBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2woIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyLCBsOiBudW1iZXIsIGE/OiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmhzbFRvU3RyaW5nKCBoLCBzLCBsLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjb2xvciBhbmQgdGhlIGFscGhhIG1hc2sgdG8gdGhlIENTUyBDb2xvciByZXByZXNlbnRhdGlvbi4gVGhpc1xyXG4gKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3IgdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBhcyBhIG51bWVyaWMgdmFsdWUgb3IgYXMgYSBzdHJpbmcgY29sb3IgbmFtZS5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGlzIHNwZWNpZmllZCBhcyBhIG51bWJlcjpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVyIDEgdG8gMTAwIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVycyBncmVhdGVyIHRoYW4gMTAwIGFyZSBjbGFtcGVkIHRvIDEwMDtcclxuICogXHJcbiAqIEBwYXJhbSBjIENvbG9yIHZhbHVlIGFzIGVpdGhlciBhIG51bWJlciBvciBhIG5hbWVkIGNvbG9yXHJcbiAqIEBwYXJhbSBhIEFscGhhIGNoYW5uZWwgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgQ29sb3JUeXBlcy5JTmFtZWRDb2xvcnMsIGE6IG51bWJlcik6IENvbG9yVHlwZXMuSUNvbG9yUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IENvbG9yRnVuY3MuY29sb3JXaXRoQWxwaGFUb1N0cmluZyggYywgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc0FuZ2xlLCBDc3NMZW5ndGh9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuICAgIEdyYWRpZW50U3RvcE9ySGludCwgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgTGluZWFyR3JhZEFuZ2xlLFxyXG4gICAgQ3Jvc3NGYWRlUGFyYW0sIElJbWFnZVByb3h5LCBSYWRpYWxHcmFkaWVudFNoYXBlLCBSYWRpYWxHcmFkaWVudFNpemUsIFxyXG4gICAgSUdyYWRpZW50LCBJTGluZWFyR3JhZGllbnQsIElSYWRpYWxHcmFkaWVudCwgSUNvbmljR3JhZGllbnRcclxufSBmcm9tIFwiLi4vc3R5bGVzL0ltYWdlVHlwZXNcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge3ZhbDJzdHIsIElOdW1iZXJCYXNlTWF0aENsYXNzLCBDc3NBbmdsZU1hdGgsIHBvczJzdHIsIENzc1BlcmNlbnRNYXRoLCBDc3NMZW5ndGhNYXRofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQgeyBFeHRlbnRLZXl3b3JkIH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JhZGllbnQgY2xhc3MgaW1wbGVtZW50cyB0aGUgSUdyYWRpZW50IGludGVyZmFjZSB1c2luZyBwcm9wZXJ0eSBnZXQgYWNjZXNzb3IsIHdoY2loIGFsbG93c1xyXG4gKiBjcmVhdGVpbmcgYSBuZXcgaW5zdGFuY2Ugb2YgdGhlIGFwcHJvcHJpZW50IGdyYWRpZW50IGludGVyZmFjZS4gV2UgbmVlZCBuZXcgaW5zdGFuY2VzLCBiZWNhdXNlXHJcbiAqIHRoZSBmdW5jdGlvbnMgaW1wbGVtZW50aW5nIHRoZXNlIGNhbGxhYmxlIGludGVyZmFjZXMga2VlcCBvcHRpb25hbCBwYXJhbWV0ZXJzIGFzIHByb3BlcnRpZXMgb2ZcclxuICogdGhlIGZ1Y250aW9uIG9iamVjdHMgdGhlbXNlbHZlcy5cclxuICovXHJcbmNsYXNzIEdyYWRpZW50IGltcGxlbWVudHMgSUdyYWRpZW50XHJcbntcclxuICAgIHB1YmxpYyBnZXQgbGluZWFyKCk6IElMaW5lYXJHcmFkaWVudCB7IHJldHVybiBsaW5lYXJHcmFkaWVudEZ1bmMoIFwibGluZWFyLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ0xpbmVhcigpOiBJTGluZWFyR3JhZGllbnQgeyByZXR1cm4gbGluZWFyR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1saW5lYXItZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgcmFkaWFsKCk6IElSYWRpYWxHcmFkaWVudCB7IHJldHVybiByYWRpYWxHcmFkaWVudEZ1bmMoIFwicmFkaWFsLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ1JhZGlhbCgpOiBJUmFkaWFsR3JhZGllbnQgeyByZXR1cm4gcmFkaWFsR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgY29uaWMoKTogSUNvbmljR3JhZGllbnQgeyByZXR1cm4gY29uaWNHcmFkaWVudEZ1bmMoIFwiY29uaWMtZ3JhZGllbnRcIik7IH1cclxuICAgIHB1YmxpYyBnZXQgcmVwZWF0aW5nQ29uaWMoKTogSUNvbmljR3JhZGllbnQgeyByZXR1cm4gY29uaWNHcmFkaWVudEZ1bmMoIFwicmVwZWF0aW5nLWNvbmljLWdyYWRpZW50XCIpOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBncmFkaWVudCB2YXJpYWJsZSBwcm92aWRlcyBhY2Nlc3MgdG8gZnVuY3Rpb25zIGltcGxlbWVudGluZyB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgbGV0IGdyYWRpZW50OiBJR3JhZGllbnQgPSBuZXcgR3JhZGllbnQoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSW1hZ2VQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBjcm9zcy1mYWRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcm9zc0ZhZGUoIC4uLmFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBJSW1hZ2VQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3MpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiByZXR1cm5pbmcgdGhlIElMaW5lYXJHcmFkaWVudCBpbnRlcmZhY2UgZm9yIGVpdGhlciBgbGluZXItZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctbGluZXItZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElMaW5lYXJHcmFkaWVudFxyXG57XHJcbiAgICBsZXQgZjogYW55ID0gKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eSA9PlxyXG4gICAgICAgICgpID0+IGxpbmVhckdyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5hbmdsZVBhcmFtKTtcclxuXHJcblx0Zi50byA9IChhbmdsZTogTGluZWFyR3JhZEFuZ2xlKSA9PiB7XHJcbiAgICAgICAgZi5hbmdsZVBhcmFtID0gYW5nbGU7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcbiAgICBcclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJUmFkaWFsR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYHJhZGlhbC1ncmFkaWVudGAgb3JcclxuICogYHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElSYWRpYWxHcmFkaWVudFxyXG57XHJcbiAgICBsZXQgZjogYW55ID0gKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eSA9PlxyXG4gICAgICAgICgpID0+IHJhZGlhbEdyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5zaGFwZVBhcmFtLCBmLnNpemVQYXJhbSwgZi5wb3NQYXJhbSk7XHJcblxyXG4gICAgZi5jaXJjbGUgPSAoc2l6ZU9yRXh0ZW50PzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaGFwZVBhcmFtID0gXCJjaXJjbGVcIjtcclxuICAgICAgICBmLnNpemVQYXJhbSA9IHNpemVPckV4dGVudDtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5lbGxpcHNlID0gKHNpemVPckV4dGVudD86IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XSB8IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaGFwZVBhcmFtID0gXCJlbGxpcHNlXCI7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBzaXplT3JFeHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuZXh0ZW50ID0gKGV4dGVudDogRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pID0+IHtcclxuICAgICAgICBmLnNpemVQYXJhbSA9IGV4dGVudDtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5hdCA9IChwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPikgPT4ge1xyXG4gICAgICAgIGYucG9zUGFyYW0gPSBwb3M7IHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJQ29uaWNHcmFkaWVudCBpbnRlcmZhY2UgZm9yIGVpdGhlciBgY29uaWMtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctY29uaWMtZ3JhZGllbnRgIENTUyBmdW5jdGlvbnMuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb25pY0dyYWRpZW50RnVuYyggbmFtZTogc3RyaW5nKTogSUNvbmljR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIG5hbWUsIHN0b3BzT3JIaW50cywgZi5hbmdsZVBhcmFtLCBmLnBvc1BhcmFtKTtcclxuXHJcblx0Zi5mcm9tID0gKGFuZ2xlOiBMaW5lYXJHcmFkQW5nbGUpID0+IHtcclxuICAgICAgICBmLmFuZ2xlUGFyYW0gPSBhbmdsZTtcclxuICAgICAgICByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0Zi5hdCA9IChwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPikgPT4ge1xyXG4gICAgICAgIGYucG9zUGFyYW0gPSBwb3M7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdHJldHVybiBmO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIGFuZ2xlPzogTGluZWFyR3JhZEFuZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBhbmdsZVN0cmluZyA9IFwiXCI7XHJcbiAgICBpZiAoYW5nbGUpXHJcbiAgICB7XHJcbiAgICAgICAgYW5nbGVTdHJpbmcgPSB2YWwyc3RyKCBhbmdsZSwge1xyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsXHJcbiAgICAgICAgICAgIGZyb21TdHJpbmc6IHYgPT4gL1xcZCsuKi8udGVzdCh2KSA/IHYgOiBcInRvIFwiICsgdlxyXG4gICAgICAgIH0pICsgXCIsXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7YW5nbGVTdHJpbmd9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc1BlcmNlbnRNYXRoKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBzaGFwZTogUmFkaWFsR3JhZGllbnRTaGFwZSwgc2l6ZU9yRXh0ZW50OiBSYWRpYWxHcmFkaWVudFNpemUgfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPixcclxuICAgIHBvczogQ3NzUG9zaXRpb24pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNoYXBlU3RyaW5nID0gc2hhcGUgPyBzaGFwZSA6IFwiXCI7XHJcbiAgICBsZXQgc2l6ZU9yRXh0ZW50U3RyaW5nID0gc2l6ZU9yRXh0ZW50ID8gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHNpemVPckV4dGVudCwgXCIgXCIpIDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3Myc3RyKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IHNoYXBlIHx8IHNpemVPckV4dGVudFN0cmluZyB8fCBwb3MgPyBgJHtzaGFwZVN0cmluZ30gJHtzaXplT3JFeHRlbnRTdHJpbmd9ICR7cG9zU3RyaW5nfSxgIDogXCJcIjtcclxuICAgIHJldHVybiBgJHtuYW1lfSgke3doYXRBbmRXaGVyZX0ke2dyYWRpZW50U3RvcHNPckhpbnRzVG9TdHJpbmcoIHN0b3BzT3JIaW50cywgQ3NzUGVyY2VudE1hdGgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbmljR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgYW5nbGU/OiBFeHRlbmRlZDxDc3NBbmdsZT4sIHBvcz86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBhbmdsZSA/IGBmcm9tICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIGFuZ2xlKX1gIDogXCJcIjtcclxuICAgIGxldCBwb3NTdHJpbmcgPSBwb3MgPyBgYXQgJHtwb3Myc3RyKCBwb3MpfWAgOiBcIlwiO1xyXG4gICAgbGV0IHdoYXRBbmRXaGVyZSA9IGFuZ2xlIHx8IHBvcyA/IGAke2FuZ2xlU3RyaW5nfSAke3Bvc1N0cmluZ30sYCA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc0FuZ2xlTWF0aCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlVG9TdHJpbmcoIGFyZ3M6IENyb3NzRmFkZVBhcmFtW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHZhbDJzdHIoIGFyZ3MsIHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBgY3Jvc3MtZmFkZSgke3BhcmFtc1N0cmluZ30pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyQmFzZU1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsLm1hcCggdiA9PiBncmFkaWVudFN0b3BPckhpbnRUb1N0cmluZyggdiwgbWF0aENsYXNzKSkuam9pbihcIixcIik7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogR3JhZGllbnRTdG9wT3JIaW50LFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyQmFzZU1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gdi5sZW5ndGggPT09IDAgPyBcIlwiIDogdi5sZW5ndGggPT09IDEgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdlswXSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudENvbG9yQW5kTGVuZ3RoVG9TdHJpbmcoIHYgYXMgR3JhZGllbnRDb2xvckFuZExlbmd0aCwgbWF0aENsYXNzKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsXHJcbiAgICBtYXRoQ2xhc3M6IElOdW1iZXJCYXNlTWF0aENsYXNzPFQ+KTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzZWNvbmRTdG9wID0gdmFsLmxlbmd0aCA+IDIgPyBtYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzJdKSA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7Y29sb3JUb1N0cmluZyh2YWxbMF0pfSAke21hdGhDbGFzcy5zdHlsZVRvU3RyaW5nKCB2YWxbMV0pfSAke3NlY29uZFN0b3B9YDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcm9zc0ZhZGVQYXJhbVRvU3RyaW5nKCB2YWw6IENyb3NzRmFkZVBhcmFtKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYCR7dmFsMnN0cih2WzBdKX0sJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKHZbMV0pfWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBDb21iaW5lZFN0eWxlc2V0LCBJU3R5bGVSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlLCBBbmltYXRpb25GcmFtZSwgSUFuaW1hdGlvblJ1bGUsIElWYXJSdWxlLFxyXG4gICAgSUNvdW50ZXJSdWxlLCBJR3JpZExpbmVSdWxlLCBJR3JpZEFyZWFSdWxlLCBJSW1wb3J0UnVsZSwgSUZvbnRGYWNlUnVsZSwgSU5hbWVzcGFjZVJ1bGUsXHJcbiAgICBJUGFnZVJ1bGUsIFN0eWxlRGVmaW5pdGlvbiwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBJU3VwcG9ydHNSdWxlLCBJTWVkaWFSdWxlLCBJQ2xhc3NOYW1lUnVsZVxyXG59IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtwcm9jZXNzSW5zdGFuY2VPckNsYXNzLCBzX2VuYWJsZVNob3J0TmFtZXMsIHNlcmlhbGl6ZUluc3RhbmNlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnksIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7Q3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHtJRm9udEZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5pbXBvcnQge0Fic3RyYWN0UnVsZSwgQ2xhc3NSdWxlLCBJRFJ1bGUsIFNlbGVjdG9yUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1N0eWxlUnVsZXNcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuLi9ydWxlcy9BbmltYXRpb25SdWxlXCJcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVmFyUnVsZVwiXHJcbmltcG9ydCB7Q291bnRlclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9Db3VudGVyUnVsZXNcIjtcclxuaW1wb3J0IHtHcmlkTGluZVJ1bGUsIEdyaWRBcmVhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyaWRSdWxlc1wiO1xyXG5pbXBvcnQge0ZvbnRGYWNlUnVsZSwgSW1wb3J0UnVsZSwgTmFtZXNwYWNlUnVsZSwgUGFnZVJ1bGUsIENsYXNzTmFtZVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9NaXNjUnVsZXNcIlxyXG5pbXBvcnQge1N1cHBvcnRzUnVsZSwgTWVkaWFSdWxlfSBmcm9tIFwiLi4vcnVsZXMvR3JvdXBSdWxlc1wiXHJcbmltcG9ydCB7dmFsMnN0cn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi4vcnVsZXMvUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgYWJzdHJhY3QgcnVsZSwgd2hpY2ggZGVmaW5lcyBhIHN0eWxlc2V0IHRoYXQgY2FuIGJlIGV4dGVuZGVkIGJ5IG90aGVyIHN0eWxlXHJcbiAqIHJ1bGVzLiBBYnN0cmFjdCBydWxlcyBkb24ndCBoYXZlIHNlbGVjdG9ycyBhbmQgYXJlIG5vdCBpbnNlcnRlZCBpbnRvIERPTS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWJzdHJhY3QoIHN0eWxlOiBDb21iaW5lZFN0eWxlc2V0KTogSVN0eWxlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBBYnN0cmFjdFJ1bGUoIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGNsYXNzIHJ1bGUuIFRoZSBjbGFzcyBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhcyBwYXJ0IG9mXHJcbiAqIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW4gZXhwbGljaXRcclxuICogbmFtZSBvciBhbm90aGVyIGNsYXNzIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvIFwiZGVjbGFyZVwiXHJcbiAqIHRoZSBjbGFzcy4gU3VjaCBjbGFzcyBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZFxyXG4gKiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNsYXNzKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsXHJcbiAgICBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ2xhc3NSdWxlIHwgSUNsYXNzTmFtZVJ1bGUpOiBJQ2xhc3NSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBuYW1lIHJ1bGUsIHdoaWNoIGNvbWJpbmVzIG9uZSBvciBtb3JlIG90aGVyIGNsYXNzIG5hbWVzLiBUaGlzIGNyZWF0ZXMgYVxyXG4gKiBcInN5bm9ueW1cIiB0aGF0IGlzIGVhc2llciB0byBhcHBseSB0byBhbiBlbGVtZW50J3MgY2xhc3MgYXR0cmlidXRlIHRoYW4gYW4gYXJyYXkgb2YgdHdvIG9yXHJcbiAqIG1vcmUgY2xhcyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY2xhc3NuYW1lKCAuLi5jbGFzc2VzOiAoSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlIHwgc3RyaW5nKVtdKTogSUNsYXNzTmFtZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQ2xhc3NOYW1lUnVsZSggY2xhc3Nlcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBJRCBydWxlLiBUaGUgSUQgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBJRCBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgSUQuIFN1Y2ggSUQgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpZCggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJSURSdWxlKTogSUlEUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBJRFJ1bGUoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgc2VsZWN0b3IgcnVsZS4gU2VsZWN0b3IgY2FuIGJlIHNwZWNpZmllZCBhcyBhIHN0cmluZyBvciB2aWEgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzdHlsZSggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzdHlsZTogQ29tYmluZWRTdHlsZXNldCk6IElTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgU2VsZWN0b3JSdWxlKCBzZWxlY3Rvciwgc3R5bGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgYW5pbWF0aW9uIHJ1bGUuIFRoZSBhbmltYXRpb24gbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBhbmltYXRpb24gcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG9cclxuICogXCJkZWNsYXJlXCIgdGhlIGFuaW1hdGlvbi4gU3VjaCBhbmltYXRpb24gY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzXHJcbiAqIG9yIGluIGRlcml2ZWQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRrZXlmcmFtZXMoIGZyYW1lcz86IEFuaW1hdGlvbkZyYW1lW10sXHJcblx0bmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGUpOiBJQW5pbWF0aW9uUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBBbmltYXRpb25SdWxlKCBmcmFtZXMsIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjdXN0b20gdmFyaWFibGUgb2JqZWN0IHRoYXQgZGVmaW5lcyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuIFRoZSB2YXJpYWJsZSBuYW1lIHdpbGxcclxuICogYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhcyBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmVcclxuICogYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW4gZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGN1c3RvbSB2YXJpYWJsZSBydWxlLiBUaGVcclxuICogZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHNwZWNpZnlpbmcgdGhlIHZhbHVlIGp1c3QgdG8gXCJkZWNsYXJlXCIgdGhlIHZhcmlhYmxlLiBTdWNoXHJcbiAqIHZhcmlhYmxlIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb25cclxuICogY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdmFyPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCB0ZW1wbGF0ZTogSywgcHJvcFZhbD86IFZhclZhbHVlVHlwZTxLPixcclxuXHRcdFx0XHRuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPik6IElWYXJSdWxlPEs+XHJcbntcclxuXHRyZXR1cm4gbmV3IFZhclJ1bGUoIHRlbXBsYXRlLCBwcm9wVmFsLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY291bnRlciBvYmplY3QuIFRoZSBjb3VudGVyIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgY291bnRlciBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjb3VudGVyKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ291bnRlclJ1bGUpOiBJQ291bnRlclJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQ291bnRlclJ1bGUoIG5hbWVPdmVycmlkZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBncmlkIGxpbmUgb2JqZWN0LiBUaGUgbGluZSBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW5cclxuICogZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGdyaWQgbGluZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRncmlkbGluZSggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRMaW5lUnVsZSxcclxuICAgIGlzU3RhcnRFbmRPck5vbmU/OiBib29sZWFuKTogSUdyaWRMaW5lUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBHcmlkTGluZVJ1bGUoIG5hbWVPdmVycmlkZSwgaXNTdGFydEVuZE9yTm9uZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBncmlkIGFyZWEgb2JqZWN0LiBUaGUgYXJlYSBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW5cclxuICogZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGdyaWQgYXJlYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRncmlkYXJlYSggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRBcmVhUnVsZSk6IElHcmlkQXJlYVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgR3JpZEFyZWFSdWxlKCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgaW1wb3J0IHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGltcG9ydCggdXJsOiBzdHJpbmcsIG1lZGlhUXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LFxyXG5cdHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5KTogSUltcG9ydFJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgSW1wb3J0UnVsZSggdXJsLCBtZWRpYVF1ZXJ5LCBzdXBwb3J0c1F1ZXJ5KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGZvbnQtZmFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRmb250ZmFjZSggZm9udGZhY2U6IElGb250RmFjZSk6IElGb250RmFjZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgRm9udEZhY2VSdWxlKCBmb250ZmFjZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBuYW1lc3BhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkbmFtZXNwYWNlKCBuYW1lc3BhY2U6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKTogSU5hbWVzcGFjZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgTmFtZXNwYWNlUnVsZSggbmFtZXNwYWNlLCBwcmVmaXgpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRwYWdlKCBwc2V1ZG9DbGFzcz86IFBhZ2VQc2V1ZG9DbGFzcywgc3R5bGU/OiBTdHlsZXNldCk6IElQYWdlUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBQYWdlUnVsZSggcHNldWRvQ2xhc3MsIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHN1cHBvcnRzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN1cHBvcnRzPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBxdWVyeTogU3VwcG9ydHNRdWVyeSxcclxuICAgIGluc3RPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogSVN1cHBvcnRzUnVsZTxUPlxyXG57XHJcblx0cmV0dXJuIG5ldyBTdXBwb3J0c1J1bGUoIHF1ZXJ5LCBpbnN0T3JDbGFzcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBtZWRpYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRtZWRpYTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnksXHJcbiAgICBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IElNZWRpYVJ1bGU8VD5cclxue1xyXG5cdHJldHVybiBuZXcgTWVkaWFSdWxlKCBxdWVyeSwgaW5zdE9yQ2xhc3MpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UgYW5kIGNyZWF0ZXMgdW5pcXVlIG5hbWVzIGZvciBhbGwgbmFtZWRcclxuICogZW50aXRpZXMuIEZvciBhIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb25seSBhIHNpbmdsZSBpbnN0YW5jZSBpcyBjcmVhdGVkLCBubyBtYXR0ZXIgaG93XHJcbiAqIG1hbnkgdGltZXMgdGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkLiBIb3dldmVyLCBpZiBhbiBpbnN0YW5jZSwgd2hpY2ggaGFzIG5vdCB5ZXQgYmVlbiBwcm9jZXNzZWQsXHJcbiAqIGlzIHBhc3NlZCwgdGhlbiBhIG5ldyBzZXQgb2YgdW5pcXVlIG5hbWVzIHdpbGwgYmUgY3JlYXRlZCBmb3IgaXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHVzZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBUIHwgbnVsbFxyXG57XHJcblx0cmV0dXJuIHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RPckNsYXNzKSBhcyBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbWJlZHMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW50byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LiBXaGVuIGFjdGl2YXRlZCxcclxuICogdGhlIGVtYmVkZGVkIG9iamVjdCBkb2Vzbid0IGNyZWF0ZSBpdHMgb3duIGA8c3R5bGU+YCBlbGVtZW50IGJ1dCB1c2VzIHRoYXQgb2YgaXRzIG93bmVyLiBUaGlzXHJcbiAqIGFsbG93cyBjcmVhdGluZyBtYW55IHNtYWxsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBpbnN0ZWFkIG9mIG9uZSBodWdlIG9uZSB3aXRob3V0IGluY3VycmluZ1xyXG4gKiB0aGUgb3ZlcmhlYWQgb2YgbWFueSBgPHN0eWxlPmAgZWxlbWVudHMuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgYXMgb3Bwb3NlZCB0byB0aGUgJHVzZSBmdW5jdGlvbiwgdGhlICRlbWJlZCBmdW5jdGlvbiBhbHdheXMgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZlxyXG4gKiB0aGUgZ2l2ZW4gY2xhc3MgYW5kIGRvZXNuJ3QgYXNzb2NpYXRlIHRoZSBjbGFzcyB3aXRoIHRoZSBjcmVhdGVkIGluc3RhbmNlLiBUaGF0IG1lYW5zIHRoYXQgaWZcclxuICogYSBjbGFzcyBpcyBlbWJlZGRlZCBpbnRvIG1vcmUgdGhhbiBvbmUgXCJvd25lclwiLCB0d28gc2VwYXJhdGUgaW5zdGFuY2VzIG9mIGVhY2ggQ1NTIHJ1bGUgd2lsbCBiZVxyXG4gKiBjcmVhdGVkIHdpdGggZGlmZmVyZW50IHVuaXF1ZSBuYW1lcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZW1iZWQ8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIGluc3RPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogVCB8IG51bGxcclxue1xyXG5cdC8vIHJldHVybiBkZWZpbml0aW9uIGluc3RhbmNlIHdpdGhvdXQgcHJvY2Vzc2luZyBpdC4gVGhpcyBpcyB0aGUgaW5kaWNhdGlvbiB0aGF0IHRoZSBkZWZpbnRpb25cclxuXHQvLyB3aWxsIGJlIGVtYmVkZGVkIGludG8gYW5vdGhlciBkZWZpbml0aW9uLlxyXG5cdHJldHVybiBpbnN0T3JDbGFzcyBpbnN0YW5jZW9mIFN0eWxlRGVmaW5pdGlvbiA/IGluc3RPckNsYXNzIDogbmV3IGluc3RPckNsYXNzKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVTaG9ydE5hbWVzKCBlbmFibGU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdHJldHVybiBzX2VuYWJsZVNob3J0TmFtZXMoIGVuYWJsZSwgcHJlZml4KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29uY2F0ZW5hdGVzIHRoZSBuYW1lcyBvZiB0aGUgZ2l2ZW4gY2xhc3NlcyBpbnRvIGEgc2luZ2xlIHN0cmluZyB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byBhXHJcbiAqIGBjbGFzc2AgcHJvcGVydHkgb2YgYW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gY2xhc3Nlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZXMoIC4uLmNsYXNzZXM6IChJQ2xhc3NSdWxlIHwgSUNsYXNzTmFtZVJ1bGUgfCBzdHJpbmcpW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWwyc3RyKCBjbGFzc2VzLCB7XHJcblx0XHRhcnJJdGVtRnVuYzogdiA9PiB2IGluc3RhbmNlb2YgQ2xhc3NSdWxlID8gdi5uYW1lIDogdmFsMnN0cih2KVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJ1bGUgdmlydHVhbGl6YXRpb24uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElDc3NTZXJpYWxpemVyIGludGVyZmFjZSBhbGxvd3MgYWRkaW5nIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgb2JqZWN0c1xyXG4gKiBhbmQgc2VyaWFsaXppbmcgdGhlbSB0byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuXHJcbiAqIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZSBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1NlcmlhbGl6ZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIGFkZCggaW5zdE9yQ2xhc3M6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyk6IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGNvbmNhdGVuYXRlZCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYWxsIENTUyBydWxlcyBhZGRlZCB0byB0aGUgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgc2VyaWFsaXplKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBJQ3NzU2VyaWFsaXplciBvYmplY3QgdGhhdCBhbGxvd3MgYWRkaW5nIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlc1xyXG4gKiBhbmQgaW5zdGFuY2VzIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3NzU2VyaWFsaXplcigpOiBJQ3NzU2VyaWFsaXplclxyXG57XHJcbiAgICByZXR1cm4gbmV3IENzc1NlcmlhbGl6ZXIoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2VyaWFsaXplcyBvbmUgb3IgbW9yZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIGluc3RhbmNlcyBhbmQgcmV0dXJucyB0aGVpciBDU1Mgc3RyaW5nXHJcbiAqIHJlcHJlc2VudGF0aW9uLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlbiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmVcclxuICogc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplVG9DU1MoIGFyZzE6IFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuICAgIC4uLmFyZ3M6IChTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MpW10pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHNlcmlhbGl6ZXIgPSBuZXcgQ3NzU2VyaWFsaXplcigpO1xyXG4gICAgc2VyaWFsaXplci5hZGQoIGFyZzEpO1xyXG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcclxuICAgICAgICBhcmdzLmZvckVhY2goIGluc3RPckNsYXNzID0+IHNlcmlhbGl6ZXIuYWRkKCBpbnN0T3JDbGFzcykpO1xyXG5cclxuICAgIHJldHVybiBzZXJpYWxpemVyLnNlcmlhbGl6ZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTZXJpYWxpemVyIGNsYXNzIGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBvYmplY3RzXHJcbiAqIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW5cclxuICogdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuY2xhc3MgQ3NzU2VyaWFsaXplciBpbXBsZW1lbnRzIElDc3NTZXJpYWxpemVyXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkKCBpbnN0T3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGxldCBpbnN0YW5jZSA9IHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RPckNsYXNzKTtcclxuICAgICAgICBpZiAoIWluc3RhbmNlIHx8IHRoaXMuaW5zdGFuY2VzLmhhcyhpbnN0YW5jZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuYWRkKCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGNvbmNhdGVuYXRlZCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYWxsIENTUyBydWxlcyBhZGRlZCB0byB0aGUgY29udGV4dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgY3R4ID0gbmV3IFJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLmZvckVhY2goIGluc3RhbmNlID0+IGN0eC5hZGRTdHlsZURlZmluaXRpb24oIGluc3RhbmNlKSk7XHJcbiAgICAgICAgcmV0dXJuIGN0eC50b3BMZXZlbEJ1ZiArIGN0eC5ub25Ub3BMZXZlbEJ1ZjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgb2Ygc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZXMuIFRoaXMgaXMgbmVlZGVkIHRvIG5vdCBhZGQgc3R5bGUgZGVmaW5pdGlvbnMgbW9yZSB0aGFuIG9uY2VcclxuICAgIGluc3RhbmNlcyA9IG5ldyBTZXQ8U3R5bGVEZWZpbml0aW9uPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTZXJpYWxpemVyIGNsYXNzIGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBvYmplY3RzXHJcbiAqIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW5cclxuICogdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuY2xhc3MgUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0IGltcGxlbWVudHMgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dFxyXG57XHJcbiAgICAvLyBBZGRzIHJ1bGUgdGV4dFxyXG4gICAgcHVibGljIGFkZFJ1bGVUZXh0KCBzOiBzdHJpbmcsIGlzVG9wTGV2ZWxSdWxlPzogYm9vbGVhbik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZiAoaXNUb3BMZXZlbFJ1bGUpXHJcbiAgICAgICAgICAgIHRoaXMudG9wTGV2ZWxCdWYgKz0gcyArIFwiXFxuXCI7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vblRvcExldmVsQnVmICs9IHMgKyBcIlxcblwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBwdWJsaWMgYWRkU3R5bGVEZWZpbml0aW9uKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZXMuaGFzKCBpbnN0YW5jZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlcy5hZGQoIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgc2VyaWFsaXplSW5zdGFuY2UoIGluc3RhbmNlLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU3RyaW5nIGJ1ZmZlciB0aGF0IGFjY3VtdWxhdGVzIHRvcC1sZXZlbCBydWxlIHRleHRzLlxyXG4gICAgcHVibGljIHRvcExldmVsQnVmID0gXCJcIjtcclxuXHJcbiAgICAvLyBTdHJpbmcgYnVmZmVyIHRoYXQgYWNjdW11bGF0ZXMgbm9uLXRvcC1sZXZlbCBydWxlIHRleHRzLlxyXG4gICAgcHVibGljIG5vblRvcExldmVsQnVmID0gXCJcIjtcclxuXHJcbiAgICAvLyBTZXQgb2Ygc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZXMgdGhhdCB3ZXJlIGFscmVhZHkgc2VyaWFsaXplZCBpbiB0aGlzIGNvbnRleHQuXHJcbiAgICBwcml2YXRlIGluc3RhbmNlcyA9IG5ldyBTZXQ8U3R5bGVEZWZpbml0aW9uPigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJ1bGUgdmlydHVhbGl6YXRpb24uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGVjb3JhdG9yIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQgdG8gYSBydWxlIGlmIGl0IGlzIGRlZmluZWQgYW5kIHVzZWQgaW4gdGhlIHNhbWUgc3R5bGVcclxuICogZGVmaW5pdGlvbiBjbGFzcyBidXQgdGhlbiBpcyBvdmVycmlkZGVuIGluIGEgZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgcHJvYmxlbVxyXG4gKiB0aGlzIHNvbHZlcyBpcyB0aGlzOiB3aGVuIGEgcnVsZSBpcyBkZWZpbmVkIGluIGEgYmFzZSBjbGFzcyBhbmQgdGhlbiBvdmVycmlkZGVuIGluIGEgZGVyaXZlZFxyXG4gKiBjbGFzcywgd2hlbiBhbiBpbnN0YW5jZSBvZiB0aGUgZGVyaXZlZCBjbGFzcyBpcyBjcmVhdGVkLCB0aGUgcnVsZXMgdGhhdCBhcmUgY3JlYXRlZCBpbiB0aGVcclxuICogYmFzZSBhbmQgZGVyaXZlZCBjbGFzc2VzIHNlZSBkaWZmZXJlbnQgdmFsdWVzIG9mIHRoZSBydWxlLiBTaW5jZSBvdXIgcnVsZXMgYXJlIGRlZmluZWQgYXNcclxuICogcGFydCBvZiB0aGUgY29uc3RydWN0b3IsIHRoZSBiYXNlIGNsYXNzIGNvbnN0cnVjdG9yJ3MgY29kZSBvbmx5IHNlZXMgdGhlIHZhbHVlIGFzc2lnbmVkIGluIHRoYXRcclxuICogY29kZS4gSWYgYW5vdGhlciBydWxlIGluIHRoZSBiYXNlIGNsYXNzIHVzZXMgdGhpcyBmaXJzdCBydWxlLCB0aGlzIHZhbHVlIGlzIHJlbWVtYmVyZWQuXHJcbiAqIFxyXG4gKiBUaGUgYEB2aXJ0dWFsYCBkZWNvcmF0b3IgY3JlYXRlcyBhIFByb3h5IG9iamVjdCBmb3IgdGhlIHJ1bGUgd2l0aCB0aGUgaGFuZGxlciB0aGF0IGtlZXBzIHRoZVxyXG4gKiBtb3N0IHJlY2VudCB2YWx1ZSBzZXQuIFRodXMgd2hlbiBhIHJ1bGUgaW4gdGhlIGJhc2UgY2xhc3MncyBjb25zdHJ1Y3RvciB1c2VzIGEgdmlydHVhbGl6ZWRcclxuICogcnVsZSwgdGhlIGZpcnN0IHJ1bGUgd2lsbCBzZWUgdGhlIG92ZXJyaWRkZW4gdmFsdWUgb2YgdGhlIHJ1bGUgd2hlbiBhY2Nlc3NlZCBpbiB0aGVcclxuICogcG9zdC1jb25zdHJ1Y3RvciBjb2RlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZpcnR1YWwoIHRhcmdldDogYW55LCBuYW1lOiBzdHJpbmcpXHJcbntcclxuICAgIC8vIHN5bWJvbCB0byBrZWVwIHRoZSBwcm94eSBoYW5kbGVyIHZhbHVlXHJcbiAgICBsZXQgc3ltID0gU3ltYm9sKG5hbWUgKyBcIl9wcm94eV9oYW5kbGVyXCIpO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgdGhlIGhhbmRsZXIgYW5kIGNyZWF0ZSBpdCBpZiB3ZSBkb24ndC4gSW4gdGhpc1xyXG4gICAgICAgICAgICAvLyBjYXNlIHdlIGFsc28gY3JlYXRlIGEgcHJveHkgZm9yIGFuIGVtcHR5IG9iamVjdFxyXG4gICAgICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXNbc3ltXSBhcyBWaXJ0SGFuZGxlcjtcclxuICAgICAgICAgICAgaWYgKCFoYW5kbGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSBoYW5kbGVyID0gbmV3IFZpcnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLnByb3h5ID0gbmV3IFByb3h5KCB7fSwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyLnByb3h5O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldCh2KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHRoZSBvYmplY3QgdHlwZSB3ZSBtYXkgaGF2ZSBhIGRpZmZlcmVudCBvYmplY3QgdG8gcGFzcyB0byB0aGUgcHJveHk7XHJcbiAgICAgICAgICAgIC8vIGFsc28gd2UgbmVlZCB0byBrbm93IHdoZXRoZXIgdGhlIG9iamVjdCBpcyBhIHNwZWNpYWwgKGludGVybmFsIHRvIEphdmFTY3JpcHQpIG9uZVxyXG4gICAgICAgICAgICAvLyBhbmQgdGhlIGhhbmRsZXIgd2lsbCBoYXZlIHRvIHRyZWF0IGl0IHNwZWNpYWxseVxyXG4gICAgICAgICAgICBsZXQgW25ld1RhcmdldCwgaXNTcGVjaWFsXSA9IGdldFByb3hpYWJsZU9iamVjdCh2KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHRoZSBoYW5kbGVyIGFuZCBjcmVhdGUgaXQgaWYgd2UgZG9uJ3RcclxuICAgICAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzW3N5bV0gYXMgVmlydEhhbmRsZXI7XHJcbiAgICAgICAgICAgIGlmICghaGFuZGxlcilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpc1tzeW1dID0gaGFuZGxlciA9IG5ldyBWaXJ0SGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5wcm94eSA9IG5ld1RhcmdldCA9PSBudWxsID8ge30gOiBuZXcgUHJveHkoIG5ld1RhcmdldCwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHNldCB0aGUgbmV3IHZhdWxlcyB0byB0aGUgaGFuZGxlciBzbyB0aGF0IGl0IHdpbGwgdXNlIGl0IGZyb20gbm93IG9uXHJcbiAgICAgICAgICAgIGhhbmRsZXIudGFyZ2V0ID0gbmV3VGFyZ2V0O1xyXG4gICAgICAgICAgICBoYW5kbGVyLmlzU3BlY2lhbCA9IGlzU3BlY2lhbDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRm9yIHRoZSBnaXZlbiB2YWx1ZSByZXR1cm5zIGEgdHdvLWVsZW1lbnQgdHVwbGU6XHJcbiAqIC0gdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHZhbHVlIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byBhIHByb3h5LiBGb3Igb2JqZWN0cywgaXQgaXMgdGhlIGlucHV0XHJcbiAqICAgdmFsdWUuIEZvciBwcmltaXRpdmUgdHlwZXMgaXQgaXMgdGhlIGJveGVkIG9iamVjdCAoZS5nLiBOdW1iZXIgZm9yIG51bWJlcnMpLiBGb3IgbnVsbCBhbmRcclxuICogICB1bmRlZmluZWQgaXQgaXMgbnVsbCBhbmQgdW5kZWZpbmVkIHJlc3BlY3RpdmVseVxyXG4gKiAtIHRoZSBzZWNvbmQgZWxlbWVudCBpcyB0aGUgXCJzcGVjaWFsXCIgZmxhZywgd2hpY2ggaXMgdHJ1ZSBpZiB0aGUgcHJveHkgaGFuZGxlciB3aWxsIGhhdmUgdG8gaGF2ZVxyXG4gKiAgIGEgc3BlY2lhbCB0cmVhdG1lbnQgdGhlIG9iamVjdHMnIG1ldGhvZHM7IHRoYXQgaXMsIGl0IHdpbGwgaGF2ZSB0byBiaW5kIHRoZW0gdG8gdGhlIHRhcmdldFxyXG4gKiAgIG9iamVjdCBiZWZvcmUgcmV0dXJuaW5nIHRoZW0gZnJvbSB0aGUgZ2V0IG1ldGhvZC4gVGhpcyBpcyB0cnVlIGZvciBcImludGVybmFsXCIgSmF2YVNjcmlwdFxyXG4gKiAgIGNsYXNzZXMgbGlrZSBib3hlZCBwcmltaXRpdmUgdHlwZXMsIE1hcCwgU2V0LCBQcm9taXNlIGFuZCBzb21lIG90aGVycy5cclxuICovXHJcbmZ1bmN0aW9uIGdldFByb3hpYWJsZU9iamVjdCggdjogYW55KTogW2FueSwgYm9vbGVhbl1cclxue1xyXG4gICAgaWYgKHYgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gW3YsIGZhbHNlXTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBbbmV3IFN0cmluZyh2KSwgdHJ1ZV07XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gW25ldyBOdW1iZXIodiksIHRydWVdO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHYgPT09IFwiYm9vbGVhblwiKVxyXG4gICAgICAgIHJldHVybiBbbmV3IEJvb2xlYW4odiksIHRydWVdO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHYgPT09IFwic3ltYm9sXCIpXHJcbiAgICAgICAgcmV0dXJuIFtuZXcgT2JqZWN0KHYpLCB0cnVlXTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmICh2IGluc3RhbmNlb2YgTWFwIHx8IHYgaW5zdGFuY2VvZiBTZXQpKVxyXG4gICAgICAgIHJldHVybiBbdiwgdHJ1ZV07XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFt2LCBmYWxzZV07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXIgZm9yIHRoZSBwcm94eSBjcmVhdGVkIGJ5IHRoZSBgQHZpcnR1YWxgIGRlY29yYXRvci4gSXQga2VlcHMgdGhlIGN1cnJlbnQgdmFsdWUgb2YgYVxyXG4gKiBydWxlIHNvIHRoYXQgdGhlIG1vc3QgcmVjZW50IHZhbHVlIGlzIHVzZWQgd2hlbmV2ZXIgdGhlIHByb3h5IGlzIGFjY2Vzc2VkLlxyXG4gKi9cclxuY2xhc3MgVmlydEhhbmRsZXIgaW1wbGVtZW50cyBQcm94eUhhbmRsZXI8YW55PlxyXG57XHJcbiAgICBwdWJsaWMgcHJveHk6IGFueTtcclxuICAgIHB1YmxpYyB0YXJnZXQ6IGFueTtcclxuICAgIHB1YmxpYyBpc1NwZWNpYWw6IGJvb2xlYW47XHJcblxyXG4gICAgLy8gaW50ZXJlc3RpbmcgdGhpbmdzIGhhcHBlbiBpbiB0aGUgZ2V0IG1ldGhvZFxyXG4gICAgZ2V0KCB0OiBhbnksIHA6IFByb3BlcnR5S2V5LCByOiBhbnkpOiBhbnlcclxuICAgIHtcclxuICAgICAgICAvLyBpZiBvdXIgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQgYW5kIHRoZSByZXF1ZXN0ZWQgcHJvcGVydHkgaXMgYSB3ZWxsLWtub3duIHN5bWJvbFxyXG4gICAgICAgIC8vIHRvUHJpbWl0aXZlIHdlIHJldHVybiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIgbnVsbCBvciB1bmRlZmluZWQuIFRoaXMgd2lsbCBoZWxwXHJcbiAgICAgICAgLy8gaWYgb3VyIHByb3h5IGVpdGhlciBwYXJ0aWNpcGF0ZSBpbiBhbiBhcml0aG1ldGljIGV4cHJlc3Npb24gb3Igb3IgaXMgY29tYmluZWQgd2l0aCBhXHJcbiAgICAgICAgLy8gc3RyaW5nLlxyXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCA9PSBudWxsICYmIHAgPT09IFN5bWJvbC50b1ByaW1pdGl2ZSlcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHRoaXMudGFyZ2V0O1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIHZhbHVlIG9mIHRoZSByZXF1ZXN0IHByb3BlcnR5OyBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQsIGFuIGV4Y2VwdGlvblxyXG4gICAgICAgIC8vIHdpbGwgYmUgdGhyb3duIC0gd2hpY2ggaXMgZXhwZWN0ZWQuXHJcbiAgICAgICAgbGV0IHB2ID0gUmVmbGVjdC5nZXQoIHRoaXMudGFyZ2V0LCBwLCByKTtcclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eSBpcyBhIGZ1bmN0aW9uIG9mIGEgYm94ZWQgcHJpbWl0aXZlLCBiaW5kIHRoZSBvcmlnaW5hbCBtZXRob2RcclxuICAgICAgICAvLyB0byB0aGUgdGFyZ2V0IG9iamVjdFxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzU3BlY2lhbCAmJiB0eXBlb2YgcHYgPT09IFwiZnVuY3Rpb25cIiA/IHB2LmJpbmQoIHRoaXMudGFyZ2V0KSA6IHB2O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSByZXN0IG9mIHRoZSBtZXRob2RzIG1vc3RseSBkZWxlZ2F0ZSB0aGUgY2FsbHMgdG8gdGhlIGxhdGVzdCB0YXJnZXQgaW5zdGVhZCBvZiB0aGVcclxuICAgIC8vIG9yaWdpbmFsIHRhcmdldC4gSW4gc29tZSBjYXNlcywgd2UgY2hlY2sgd2hldGhlciB0aGUgdGFyZ2V0IGlzIG51bGwgb3IgdW5kZWZpbmVkIHNvIHRoYXRcclxuICAgIC8vIHdlIGRvbid0dGhyb3cgZXhjZXB0aW9ucyB3aGVyIHdlIGNhbiBhdm9pZCBpdC5cclxuXHJcbiAgICBnZXRQcm90b3R5cGVPZiggdDogYW55KTogb2JqZWN0IHwgbnVsbFxyXG4gICAgICAgIHsgcmV0dXJuIHRoaXMudGFyZ2V0ID09IG51bGwgPyBudWxsIDogUmVmbGVjdC5nZXRQcm90b3R5cGVPZiggdGhpcy50YXJnZXQpOyB9XHJcbiAgICBzZXRQcm90b3R5cGVPZih0OiBhbnksIHY6IGFueSk6IGJvb2xlYW5cclxuICAgICAgICB7IHJldHVybiBSZWZsZWN0LnNldFByb3RvdHlwZU9mKCB0aGlzLnRhcmdldCwgdik7IH1cclxuICAgIGlzRXh0ZW5zaWJsZSh0OiBhbnkpOiBib29sZWFuXHJcbiAgICAgICAgeyByZXR1cm4gdGhpcy50YXJnZXQgPT0gbnVsbCA/IGZhbHNlIDogUmVmbGVjdC5pc0V4dGVuc2libGUoIHRoaXMudGFyZ2V0KTsgfVxyXG4gICAgcHJldmVudEV4dGVuc2lvbnModDogYW55KTogYm9vbGVhblxyXG4gICAgICAgIHsgcmV0dXJuIHRoaXMudGFyZ2V0ID09IG51bGwgPyBmYWxzZSA6IFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnMoIHRoaXMudGFyZ2V0KTsgfVxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQ6IGFueSwgcDogUHJvcGVydHlLZXkpOiBQcm9wZXJ0eURlc2NyaXB0b3IgfCB1bmRlZmluZWRcclxuICAgICAgICB7IHJldHVybiBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciggdGhpcy50YXJnZXQsIHApOyB9XHJcbiAgICBoYXModDogYW55LCBwOiBQcm9wZXJ0eUtleSk6IGJvb2xlYW5cclxuICAgICAgICB7IHJldHVybiB0aGlzLnRhcmdldCA9PSBudWxsID8gZmFsc2UgOiBSZWZsZWN0LmhhcyggdGhpcy50YXJnZXQsIHApOyB9XHJcbiAgICBzZXQoIHQ6IGFueSwgcDogUHJvcGVydHlLZXksIHY6IGFueSwgcjogYW55KTogYm9vbGVhblxyXG4gICAgICAgIHsgcmV0dXJuIFJlZmxlY3Quc2V0KCB0aGlzLnRhcmdldCwgcCwgdiwgcik7IH1cclxuICAgIGRlbGV0ZVByb3BlcnR5KHQ6IGFueSwgcDogUHJvcGVydHlLZXkpOiBib29sZWFuXHJcbiAgICAgICAgeyByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSggdGhpcy50YXJnZXQsIHApOyB9XHJcbiAgICBkZWZpbmVQcm9wZXJ0eSh0OiBhbnksIHA6IFByb3BlcnR5S2V5LCBhdHRyczogUHJvcGVydHlEZXNjcmlwdG9yKTogYm9vbGVhblxyXG4gICAgICAgIHsgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMudGFyZ2V0LCBwLCBhdHRycyk7IH1cclxuICAgIGVudW1lcmF0ZSh0OiBhbnkpOiBQcm9wZXJ0eUtleVtdXHJcbiAgICAgICAgeyByZXR1cm4gQXJyYXkuZnJvbSggUmVmbGVjdC5lbnVtZXJhdGUoIHRoaXMudGFyZ2V0KSk7IH1cclxuICAgIG93bktleXModDogYW55KTogUHJvcGVydHlLZXlbXVxyXG4gICAgICAgIHsgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyggdGhpcy50YXJnZXQpOyB9XHJcbiAgICBhcHBseSh0OiBhbnksIHRoaXNBcmc6IGFueSwgYXJncz86IGFueSk6IGFueVxyXG4gICAgICAgIHsgcmV0dXJuIHRoaXMudGFyZ2V0LmFwcGx5KCB0aGlzLCBhcmdzKTsgfVxyXG4gICAgY29uc3RydWN0KHQ6IGFueSwgYXJnczogYW55LCBuZXdUYXJnZXQ/OiBhbnkpOiBvYmplY3RcclxuICAgICAgICB7IHJldHVybiBSZWZsZWN0LmNvbnN0cnVjdCggdGhpcy50YXJnZXQsIGFyZ3MsIG5ld1RhcmdldCk7IH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1N0eWxlRGVmaW5pdGlvbiwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBJU2NoZWR1bGVyfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7cHJvY2Vzc0luc3RhbmNlT3JDbGFzc30gZnJvbSBcIi4uL3J1bGVzL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtcclxuICAgIHNfc2NoZWR1bGVDYWxsLCBzX3NldERlZmF1bHRTY2hlZHVsZXJUeXBlLCBzX2dldERlZmF1bHRTY2hlZHVsZXJUeXBlLFxyXG4gICAgSUFjdGl2YXRvciwgc19yZWdpc3RlclNjaGVkdWxlciwgc191bnJlZ2lzdGVyU2NoZWR1bGVyXHJcbn0gZnJvbSBcIi4uL3J1bGVzL1NjaGVkdWxpbmdcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZSBhbmQgaW5zZXJ0cyBhbGwgaXRzIHJ1bGVzIGludG8gRE9NLiBJZlxyXG4gKiB0aGUgaW5wdXQgb2JqZWN0IGlzIG5vdCBhbiBpbnN0YW5jZSBidXQgYSBjbGFzcywgd2hpY2ggaXMgbm90IHlldCBhc3NvY2lhdGVkIHdpdGggYW4gaW5zdGFuY2UsXHJcbiAqIHRoZSBpbnN0YW5jZSBpcyBmaXJzdCBjcmVhdGVkIGFuZCBwcm9jZXNzZWQuIE5vdGUgdGhhdCBlYWNoIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgbWFpbnRhaW5zXHJcbiAqIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzIGFjdGl2YXRlZCBhbmQgZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgaW5zZXJ0ZWRcclxuICogaW50byBET00gb25seSB1cG9uIGZpcnN0IGFjdGl2YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oXHJcblx0aW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+LFxyXG5cdHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiBUIHwgbnVsbFxyXG57XHJcblx0bGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdGFuY2VPckNsYXNzKSBhcyBUO1xyXG5cdGlmIChpbnN0YW5jZSlcclxuXHRcdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiBhY3RpdmF0b3IuYWN0aXZhdGUoIGluc3RhbmNlKSwgc2NoZWR1bGVyVHlwZSk7XHJcblxyXG5cdHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaFxyXG4gKiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kXHJcbiAqIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIHJlbW92ZWQgZnJvbSBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lcyBkb3duIHRvIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdHNfc2NoZWR1bGVDYWxsKCAoYWN0aXZhdG9yOiBJQWN0aXZhdG9yKSA9PiBhY3RpdmF0b3IuZGVhY3RpdmF0ZSggaW5zdGFuY2UpLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogV3JpdGVzIHRvIERPTSBhbGwgc3R5bGUgY2hhbmdlcyBjYXVzZWQgYnkgdGhlIGNhbGxzIHRvIHRoZSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnNcclxuICogYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3QgYWN0aXZhdGlvbiBvZiB0aGUgZ2l2ZW4gc2NoZWR1bGluZyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcmNlRE9NVXBkYXRlKCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IGFjdGl2YXRvci5mb3JjZURPTVVwZGF0ZSgpLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhbGwgc2NoZWR1bGVkIGFjdGl2YXRpb25zIGNhdXNlZCBieSB0aGUgY2FsbHMgdG8gdGhlIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9uc1xyXG4gKiBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdCBhY3RpdmF0aW9uIG9mIHRoZSBnaXZlbiBzY2hlZHVsaW5nIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsRE9NVXBkYXRlKCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IGFjdGl2YXRvci5jYW5jZWxET01VcGRhdGUoKSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGRlZmF1bHQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIGJ5IGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyB0aGF0IGFyZVxyXG4gKiBjYWxsZWQgd2l0aG91dCBleHBsaWNpdGx5IHByb3ZpZGluZyB2YWx1ZSB0byB0aGUgc2NoZWR1bGVyIHR5cGUgcGFyYW1ldGVyLiBSZXR1cm5zIHRoZSB0eXBlIG9mXHJcbiAqIHRoZSBwcmV2aW91cyBkZWZhdWx0IHNjaGVkdWxlciBvciAwIGlmIGFuIGVycm9yIG9jY3VycyAoZS5nLiB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgSUQgaXMgbm90XHJcbiAqIHJlZ2lzdGVyZWQpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRTY2hlZHVsZXJUeXBlKCBzY2hlZHVsZXJUeXBlOiBudW1iZXIpOiBudW1iZXJcclxue1xyXG5cdHJldHVybiBzX3NldERlZmF1bHRTY2hlZHVsZXJUeXBlKCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZGVmYXVsdCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgYnkgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHRoYXQgYXJlXHJcbiAqIGNhbGxlZCB3aXRob3V0IGV4cGxpY2l0bHkgcHJvdmlkaW5nIHZhbHVlIHRvIHRoZSBzY2hlZHVsZXIgdHlwZSBwYXJhbWV0ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoKTogbnVtYmVyXHJcbntcclxuXHRyZXR1cm4gc19nZXREZWZhdWx0U2NoZWR1bGVyVHlwZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgdGhlIGdpdmVuIHNjaGVkdWxlciBvYmplY3QgYW5kIHJldHVybnMgdGhlIHNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIsIHdoaWNoXHJcbiAqIHNob3VsZCBiZSB1c2VkIHdoZW4gY2FsbGluZyBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTY2hlZHVsZXIoIHNjaGVkdWxlcjogSVNjaGVkdWxlcik6IG51bWJlclxyXG57XHJcbiAgICByZXR1cm4gc19yZWdpc3RlclNjaGVkdWxlciggc2NoZWR1bGVyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVW5yZWdpc3RlcnMgYSBzY2hlZHVsZXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5yZWdpc3RlclNjaGVkdWxlciggaWQ6IG51bWJlcik6IHZvaWRcclxue1xyXG4gICAgcmV0dXJuIHNfdW5yZWdpc3RlclNjaGVkdWxlciggaWQpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RXh0ZW5kZWQsIENzc1Bvc2l0aW9uLCBDc3NMZW5ndGgsIENzc1BlcmNlbnQsIENzc0FuZ2xlLCBDc3NOdW1iZXIsIE9uZU9yQm94LCBDc3NQb2ludH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQge0Nzc0NvbG9yfSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQge1NlbGVjdG9ySXRlbSwgSVNlbGVjdG9yUHJveHl9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFN0eWxlc2V0LCBFeHRlbmRlZFN0eWxlc2V0LCBTdHJpbmdTdHlsZXNldCwgRXh0ZW50S2V5d29yZCwgSUZpbHRlclByb3h5LCBJQmFzaWNTaGFwZVByb3h5LFxyXG5cdElUcmFuc2Zvcm1Qcm94eSwgQm9yZGVyUmFkaXVzX1N0eWxlVHlwZSwgRmlsbFJ1bGVfU3R5bGVUeXBlLCBJUGF0aEJ1aWxkZXIsIElSYXlQcm94eSxcclxuXHRJRml0Q29udGVudFByb3h5LCBJUmVwZWF0UHJveHksIElNaW5NYXhQcm94eSwgR3JpZFRyYWNrU2l6ZSwgR3JpZFRyYWNrLCBJU3BhblByb3h5LCBHcmlkTGluZUNvdW50T3JOYW1lXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtcclxuXHRzdHlsZVByb3BUb1N0cmluZywgc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsIGJvcmRlclJhZGl1c1RvU3RyaW5nLCBmb3JBbGxQcm9wc0luU3R5bHNldCwgZ3JpZFRyYWNrVG9TdHJpbmdcclxufSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge1xyXG5cdENzc1BlcmNlbnRNYXRoLCBDc3NMZW5ndGhNYXRoLCBhcnIyc3RyLCBDc3NBbmdsZU1hdGgsIENzc051bWJlck1hdGgsIHBvczJzdHIsXHJcblx0dGVtcGxhdGVTdHJpbmdUb1N0cmluZywgdmFsMnN0clxyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcbmltcG9ydCB7c19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGV9IGZyb20gXCIuLi9ydWxlcy9TY2hlZHVsaW5nXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IuIFRoaXMgZnVuY3Rpb24gaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3QgYmVcclxuICogaW52b2tlZCB3aXRoIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvciggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IFNlbGVjdG9ySXRlbVtdKTogSVNlbGVjdG9yUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0cywgcGFyYW1zKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTdHlsZXNldCBtYW5pcHVsYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVQcm9wTmFtZSBTdHlsZSBwcm9wZXJ0eSBuYW1lIHRoYXQgZGV0ZXJtaW5lcyBob3cgdGhlIHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWRcclxuICogdG8gYSBDU1MgY29tcGxpYW50IHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlUHJvcFZhbHVlIFZhbHVlIHRvIGNvbnZlcnQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVQcm9wVmFsdWU8SyBleHRlbmRzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQ+KCBzdHlsZVByb3BOYW1lOiBLLFxyXG5cdHN0eWxlUHJvcFZhbHVlOiBFeHRlbmRlZFN0eWxlc2V0W0tdKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gc3R5bGVQcm9wVG9TdHJpbmcoIHN0eWxlUHJvcE5hbWUsIHN0eWxlUHJvcFZhbHVlLCB0cnVlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB2YWx1ZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgZnJvbSB0aGUgZ2l2ZW4gU3R5bGVzZXQgb2JqZWN0IHRvIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZVxyXG4gKiBvZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtIEhUTUwgZWxlbWVudCB3aG9zZSBzdHlsZXMgd2lsbCBiZSBzZXQuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBTdHlsZXNldCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdmFsdWVzIGZvciBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRTdHlsZSggZWxtOiBIVE1MRWxlbWVudCwgc3R5bGVzZXQ6IFN0eWxlc2V0IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuXHRzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcbiAgICBzZXRFbGVtZW50U3RyaW5nU3R5bGUoIGVsbSwgc3R5bGVzZXQgPyBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoc3R5bGVzZXQpIDogbnVsbCwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdmFsdWVzIG9mIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGZyb20gdGhlIGdpdmVuIFN0cmluZ1N0eWxlc2V0IG9iamVjdCB0byB0aGUgYHN0eWxlYCBhdHRyaWJ1dGVcclxuICogb2YgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuICogQHBhcmFtIGVsbSBIVE1MIGVsZW1lbnQgd2hvc2Ugc3R5bGVzIHdpbGwgYmUgc2V0LlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgU3RyaW5nU3R5bGVzZXQgb2JqZWN0IHdoaWNoIHByb3ZpZGVzIHZhbHVlcyBmb3Igc3R5bGUgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRFbGVtZW50U3RyaW5nU3R5bGUoIGVsbTogSFRNTEVsZW1lbnQsIHN0eWxlc2V0OiBTdHJpbmdTdHlsZXNldCB8IG51bGwgfCB1bmRlZmluZWQsXHJcblx0c2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG4gICAgc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIGVsbSwgbnVsbCwgc3R5bGVzZXQsIGZhbHNlLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIFtbU3R5bGVzZXRdXSBvYmplY3QgaW50byBhbiBvYmplY3QsIHdoZXJlIGVhY2ggU3R5bGVzZXQncyBwcm9wZXJ0eSBpc1xyXG4gKiBjb252ZXJ0ZWQgdG8gaXRzIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIHN0eWxlc2V0IFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggc3R5bGVzZXQ6IFN0eWxlc2V0KTogU3RyaW5nU3R5bGVzZXRcclxue1xyXG5cdGxldCByZXM6IFN0cmluZ1N0eWxlc2V0ID0ge307XHJcblxyXG5cdGZvckFsbFByb3BzSW5TdHlsc2V0KCBzdHlsZXNldCxcclxuXHRcdChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkID0+IHsgcmVzW25hbWVdID0gdmFsdWUgfSk7XHJcblxyXG5cdHJldHVybiByZXM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIHR3byBTdHlsZXNldCBvYmplY3RzIGJ5IGNvbnZlcnRpbmcgc3R5bGUgcHJvcGVydGllcyB0byBzdHJpbmdzIGFuZCByZXR1cm5zIGFuIG9iamVjdFxyXG4gKiB0aGF0IGNvbnRhaW5zIHN0cmluZyB2YWx1ZXMgb2YgcHJvcGVydGllcyB0aGF0IHdlcmUgbmV3IG9yIGhhdmUgZGlmZmVyZW50IHZhbHVlcyBpbiB0aGUgbmV3XHJcbiAqIHN0eWxlc2V0IGFuZCB1bmRlZmluZWQgdmFsdWVzIGZvciBwcm9wZXJ0aWVzIHRoYXQgZXhpc3QgaW4gdGhlIG9sZCBzdHlsZXNldCBidXQgZG9uJ3QgZXhpc3RcclxuICogaW4gdGhlIG5ldyBvbmUuXHJcbiAqIEBwYXJhbSBvbGRTdHlsZXNldCBcclxuICogQHBhcmFtIG5ld1N0eWxlc2V0IFxyXG4gKiBAcmV0dXJucyBTdHJpbmdTdHlsZXNldCBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHRoYXQgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGluIHRoZSBvbGQgYW5kIG5ld1xyXG4gKiBzdHlsZXNldHMuIFByb3BlcnRpZXMgdGhhdCBleGlzdGVkIGluIHRoZSBvbGQgYnV0IGRvbid0IGV4aXN0IGluIHRoZSBuZXcgc3R5bGVzZXQsIHdpbGwgaGF2ZVxyXG4gKiB0aGVpciB2YWx1ZXMgc2V0IHRvIHVuZGVmaW5lZC4gSWYgdGhlcmUgaXMgbm8gZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGUgdHdvIHN0eWxlc2V0cyBudWxsIGlzXHJcbiAqIHJldHVybmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZTdHlsZXNldHMoIG9sZFN0eWxlc2V0OiBTdHlsZXNldCwgbmV3U3R5bGVzZXQ6IFN0eWxlc2V0KTogU3RyaW5nU3R5bGVzZXQgfCBudWxsXHJcbntcclxuXHRpZiAoIW9sZFN0eWxlc2V0ICYmICFuZXdTdHlsZXNldClcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2UgaWYgKCFvbGRTdHlsZXNldClcclxuXHRcdHJldHVybiBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG5ld1N0eWxlc2V0KTtcclxuXHRlbHNlIGlmICghbmV3U3R5bGVzZXQpXHJcblx0XHRyZXR1cm4gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBvbGRTdHlsZXNldCk7XHJcblxyXG5cdC8vIGZpcnN0IGNvbnZlcnQgYm90aCBzdHlsZXNldHMgdG8gdGhlaXIgc3RyaW5nIHZlcnNpb25zXHJcblx0bGV0IG9sZFN0cmluZ1N0eWxlc2V0ID1cdHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggb2xkU3R5bGVzZXQpO1xyXG5cdGxldCBuZXdTdHJpbmdTdHlsZXNldCA9XHRzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG5ld1N0eWxlc2V0KTtcclxuXHJcblx0bGV0IHVwZGF0ZVZhbDogU3RyaW5nU3R5bGVzZXQgfCBudWxsID0gbnVsbDtcclxuXHJcblx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG9sZCBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBuZXcgb25lLiBUaGVzZVxyXG5cdC8vIHdpbGwgYmUgcmVtb3ZlZC5cclxuXHRmb3IoIGxldCBrZXkgaW4gb2xkU3RyaW5nU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0bGV0IG5ld1N0cmluZ1ZhbCA9IG5ld1N0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHRpZiAobmV3U3RyaW5nVmFsID09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdHVwZGF0ZVZhbCA9IHVwZGF0ZVZhbCB8fCB7fTtcclxuXHRcdFx0dXBkYXRlVmFsW2tleV0gPSB1bmRlZmluZWQ7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGxldCBvbGRTdHJpbmdWYWwgPSBvbGRTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0XHRpZiAob2xkU3RyaW5nVmFsICE9PSBuZXdTdHJpbmdWYWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR1cGRhdGVWYWwgPSB1cGRhdGVWYWwgfHwge307XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSBuZXdTdHJpbmdWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBuZXcgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgb2xkIG9uZS4gVGhlc2VcclxuXHQvLyB3aWxsIGJlIGFkZGVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBuZXdTdHJpbmdTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgb2xkU3RyaW5nVmFsID0gb2xkU3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChvbGRTdHJpbmdWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dXBkYXRlVmFsID0gdXBkYXRlVmFsIHx8IHt9O1xyXG5cdFx0XHR1cGRhdGVWYWxba2V5XSA9IG5ld1N0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdXBkYXRlVmFsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZpbHRlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0aW5nIHBlcmNlbnQgdmFsdWUgdG8gaW52b2NhdGlvbiBvZiB0aGUgZ2l2ZW4gQ1NTIGZ1bmN0aW9uLlxyXG5mdW5jdGlvbiBwZXJjZW50RmlsdGVyKCBuYW1lOiBzdHJpbmcsIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYW1vdW50KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYnJpZ2h0bmVzcygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnJpZ2h0bmVzcyggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJicmlnaHRuZXNzXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNvbnRyYXN0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb250cmFzdCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJjb250cmFzdFwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBncmF5c2NhbGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdyYXlzY2FsZSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJncmF5c2NhbGVcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaW52ZXJ0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwiaW52ZXJ0XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG9wYWNpdHkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwib3BhY2l0eVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzYXR1cmF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2F0dXJhdGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwic2F0dXJhdGVcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2VwaWEoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcGlhKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcInNlcGlhXCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGJsdXIoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJsdXIoIHJhZGl1czogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGJsdXIoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHJhZGl1cyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGRyb3BTaGFkb3coKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0geCBIb3Jpem9udGFsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0geSBWZXJ0aWNhbCBvZmZzZXQgb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGNvbG9yIENvbG9yIG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSBibHVyIFZhbHVlIG9mIHRoZSBzaGFkb3cncyBibHVycmluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMSBwaXhlbC5cclxuICogQHBhcmFtIHNwcmVhZCBWYWx1ZSBvZiB0aGUgc2hhZG93J3Mgc3ByZWFkaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxyXG4gKiBAcGFyYW0gaW5zZXQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHNoYWRvdyBnb2VzIGluc2lkZSB0aGUgc2hhcGUuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRyb3BTaGFkb3coXHJcbiAgICB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgYmx1cj86IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICBzcHJlYWQ/OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUZpbHRlclByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gYGRyb3Atc2hhZG93KCR7c2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHsgeCwgeSwgY29sb3IsIGJsdXIsIHNwcmVhZH0pfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBodWUtcm90YXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBodWVSb3RhdGUoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgaHVlLXJvdGF0ZSgke0Nzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcoIGFtb3VudCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQmFzaWMgc2hhcGVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGluc2V0KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnNldCggb2Zmc2V0OiBFeHRlbmRlZDxPbmVPckJveDxDc3NMZW5ndGg+PiwgcmFkaXVzPzogRXh0ZW5kZWQ8Qm9yZGVyUmFkaXVzX1N0eWxlVHlwZT4pOiBJQmFzaWNTaGFwZVByb3h5XHJcbntcclxuXHRsZXQgciA9IHJhZGl1cyAhPSBudWxsID8gXCJyb3VuZCBcIiArIGJvcmRlclJhZGl1c1RvU3RyaW5nKCByYWRpdXMpIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgaW5zZXQoJHtDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggb2Zmc2V0LCBcIiBcIil9JHtyfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgaXMgdXNlZCB0byBzcGVjaWZ5IGEgcmFkaXVzIGluIFtbY2lyY2xlXV0gYW5kIFtbZWxsaXBzZV1dIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNoYXBlUmFkaXVzID0gRXh0ZW5kZWQ8Q3NzTGVuZ3RoIHwgXCJjbG9zZXN0LXNpZGVcIiB8IFwiZmFydGhlc3Qtc2lkZVwiPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBjaXJjbGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZSggY2VudGVyPzogU2hhcGVSYWRpdXMsIHBvc2l0aW9uPzogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogSUJhc2ljU2hhcGVQcm94eVxyXG57XHJcbiAgICBsZXQgYyA9ICBjZW50ZXIgIT0gbnVsbCA/IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhjZW50ZXIpIDogXCJcIjtcclxuXHRsZXQgcG9zID0gcG9zaXRpb24gIT0gbnVsbCA/IFwiIGF0IFwiICsgcG9zMnN0ciggcG9zaXRpb24pIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgY2lyY2xlKCR7Y30ke3Bvc30pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGVsbGlwc2UoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVsbGlwc2UoIHJ4PzogU2hhcGVSYWRpdXMsIHJ5PzogU2hhcGVSYWRpdXMsXHJcblx0cG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBJQmFzaWNTaGFwZVByb3h5XHJcbntcclxuICAgIGxldCByeHMgPSAgcnggIT0gbnVsbCA/IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhyeCkgOiBcIlwiO1xyXG4gICAgbGV0IHJ5cyA9ICByeSAhPSBudWxsID8gXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcocnkpIDogXCJcIjtcclxuXHRsZXQgcG9zID0gcG9zaXRpb24gIT0gbnVsbCA/IFwiIGF0IFwiICsgcG9zMnN0ciggcG9zaXRpb24pIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgZWxsaXBzZSgke3J4c30ke3J5c30ke3Bvc30pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHBvbHlnb24oKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbHlnb24oIHBvaW50T3JSdWxlOiBDc3NQb2ludCB8IEZpbGxSdWxlX1N0eWxlVHlwZSxcclxuXHQuLi5wb2ludHM6IENzc1BvaW50W10pOiBJQmFzaWNTaGFwZVByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgcyA9IFwicG9seWdvbihcIjtcclxuXHRcdGlmICh0eXBlb2YgcG9pbnRPclJ1bGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHMgKz0gcG9pbnRPclJ1bGUgKyBcIixcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cyArPSBgJHtDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggcG9pbnRPclJ1bGUsIFwiIFwiKX0sYDtcclxuXHJcblx0XHRzICs9IHBvaW50cy5tYXAoIHB0ID0+IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBwdCwgXCIgXCIpKS5qb2luKFwiLFwiKTtcclxuXHJcblx0XHRyZXR1cm4gcyArIFwiKVwiO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVJheVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJheSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmF5KCBhbmdsZTogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBzaXplPzogRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZCB8IENzc0xlbmd0aD4sXHJcblx0Y29udGFpbj86IGJvb2xlYW4pOiBJUmF5UHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBhbmdsZVN0cmluZyA9IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSk7XHJcblx0XHRsZXQgc2l6ZVN0cmluZyA9IHNpemUgPSEgbnVsbCA/IFwiLFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCBzaXplKSA6IFwiXCI7XHJcblx0XHRsZXQgY29udGFpblN0cmluZyA9IGNvbnRhaW4gPyBcIixjb250YWluXCIgOiBcIlwiO1xyXG5cdFx0cmV0dXJuIGByYXkoJHthbmdsZVN0cmluZ30ke3NpemVTdHJpbmd9JHtjb250YWluU3RyaW5nfSlgO1xyXG5cdH07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVBhdGhCdWlsZGVyIGludGVyZmFjZSB0aGF0IGFsbG93cyBidWlsZGluZyBhIENTUyBwYXRoLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhdGgoIGZpbGxSdWxlPzogRmlsbFJ1bGVfU3R5bGVUeXBlKTogSVBhdGhCdWlsZGVyXHJcbntcclxuXHRyZXR1cm4gbmV3IFBhdGhCdWlsZGVyKCBmaWxsUnVsZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGF0aEJ1aWxkZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIG9iamVjdCB0aGF0IGFjY3VtdWxhdGVzIHBhdGggY29tbWFuZHMgdGhhdCBhcmUgdGhlblxyXG4gKiBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgcGFyYW1ldGVyIG9mIHRoZSBDU1MgYHBhdGgoKWAgZnVuY3Rpb24uXHJcbiAqL1xyXG5jbGFzcyBQYXRoQnVpbGRlciBpbXBsZW1lbnRzIElQYXRoQnVpbGRlclxyXG57XHJcblx0cHJpdmF0ZSBidWY6IHN0cmluZztcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmaWxsUnVsZT86IEZpbGxSdWxlX1N0eWxlVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLmJ1ZiA9IFwicGF0aChcIjtcclxuXHRcdGlmIChmaWxsUnVsZSlcclxuXHRcdFx0dGhpcy5idWYgKz0gZmlsbFJ1bGUgKyBcIixcIjtcclxuXHJcblx0XHR0aGlzLmJ1ZiArPSBcIidcIjtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHN0cmluZ1xyXG5cdHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCkgOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5idWYgKyBcIicpXCI7IH1cclxuXHJcblxyXG5cdFxyXG4gICAgLy8gTW92ZS10byBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0cHJpdmF0ZSBpdGVtcyggY29tbWFuZDogc3RyaW5nLCAuLi5pdGVtczogKG51bWJlciB8IG51bWJlcltdKVtdKTogSVBhdGhCdWlsZGVyXHJcblx0e1xyXG5cdFx0dGhpcy5idWYgKz0gXCIgXCIgKyBjb21tYW5kO1xyXG5cclxuXHRcdGZvciggbGV0IGl0ZW0gb2YgaXRlbXMpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0eXBlb2YgaXRlbSA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHR0aGlzLmJ1ZiArPSBcIiBcIiArIGl0ZW07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGZvciggbGV0IHN1Ykl0ZW0gb2YgaXRlbSlcclxuXHRcdFx0XHRcdHRoaXMuYnVmICs9IFwiIFwiICsgc3ViSXRlbTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIE0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIk1cIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcbiAgICBwdWJsaWMgbSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwibVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIEwoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIkxcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcbiAgICBwdWJsaWMgbCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwibFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIEgoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIkhcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcbiAgICBwdWJsaWMgaCggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiaFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFYoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlZcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcbiAgICBwdWJsaWMgdiggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwidlwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIEMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIkNcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIGMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImNcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBTKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIlNcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIHMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwic1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiUVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgcSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJxXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgVCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiVFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyB0KCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJ0XCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgQSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJBXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBhKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcImFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyB6KCkgeyB0aGlzLmJ1ZiArPSBcIiB6XCI7IHJldHVybiB0aGlzOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHJhbnNmb3Jtc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1hdHJpeCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4KCBhOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdGQ6IEV4dGVuZGVkPENzc051bWJlcj4sIHR4OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCB0eTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYG1hdHJpeCgke2FycjJzdHIoIFthLCBiLCBjLCBkLCB0eCwgdHldLCB1bmRlZmluZWQsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWF0cml4M2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1hdHJpeDNkKFxyXG5cdFx0YTE6IEV4dGVuZGVkPENzc051bWJlcj4sIGIxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDE6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjI6IEV4dGVuZGVkPENzc051bWJlcj4sIGMyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGEzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzM6IEV4dGVuZGVkPENzc051bWJlcj4sIGQzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGI0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDQ6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgbWF0cml4KCR7YXJyMnN0ciggW2ExLCBiMSwgYzEsIGQxLCBhMiwgYjIsIGMyLCBkMiwgYTMsIGIzLCBjMywgZDMsIGE0LCBiNCwgYzQsIGQ0XSwgdW5kZWZpbmVkLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHBlcnNwZWN0aXZlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJzcGVjdGl2ZSggZDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHBlcnNwZWN0aXZlKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKGQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIENTUyByb3RhdGlvbiBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHJvdGF0ZUltcGwoIG5hbWU6IHN0cmluZywgYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGEpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZSggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWCggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVhcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkoIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVZXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVaKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWlwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZTNkKFxyXG5cdHg6IEV4dGVuZGVkPENzc051bWJlcj4sIHk6IEV4dGVuZGVkPENzc051bWJlcj4sIHo6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0YTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoeCksIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh5KSxcclxuXHRcdENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh6KSwgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYSldLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGByb3RhdGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZSggY3g6IEV4dGVuZGVkPENzc051bWJlcj4sIHN5PzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNjYWxlKCR7Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKGN4KX0ke3N5ICE9IG51bGwgPyBcIixcIiArIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIHNjYWxlIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIHNjYWxlSW1wbCggbmFtZTogc3RyaW5nLCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVgoIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVhcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVZKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVZXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWiggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWlwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUzZCggc3g6IEV4dGVuZGVkPENzc051bWJlcj4sIHN5OiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdHN6OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuXHRsZXQgdiA9IFtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3gpLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3kpLFxyXG5cdFx0Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN6KV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHNjYWxlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3KCBheDogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBheT86IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXcoJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheCl9JHtheSAhPSBudWxsID8gXCIsXCIgKyBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3WCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tld1goIGF4OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3WCgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF4KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2tld1koKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXdZKCBheTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tld1goJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhheSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LCB5PzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHRyYW5zbGF0ZSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh4KX0ke3kgIT0gbnVsbCA/IFwiLFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHkpIDogXCJcIn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBnaXZlbiB0cmFuc2xhdGUgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlSW1wbCggbmFtZTogc3RyaW5nLCBzOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgJHtuYW1lfSgke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWCggeDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVYXCIsIHgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVZKCB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVlcIiwgeSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVooIHo6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWlwiLCB6KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlM2QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZTNkKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LCB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG5cdHo6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyh4KSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHkpLFxyXG5cdFx0Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHopXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgdHJhbnNsYXRlM2QoJHt2fSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEdyaWQgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRml0Q29udGVudFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGZpdC1jb250ZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaXRDb250ZW50KCBzaXplOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUZpdENvbnRlbnRQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYGZpdC1jb250ZW50KCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHNpemUpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElNaW5NYXhQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtaW5tYXgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbm1heCggbWluOiBHcmlkVHJhY2tTaXplLCBtYXg6IEdyaWRUcmFja1NpemUpOiBJTWluTWF4UHJveHlcclxue1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7IGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMgfTtcclxuICAgIHJldHVybiAoKSA9PiBgbWlubWF4KCR7dmFsMnN0ciggbWluLCBvcHRpb25zKX0sJHt2YWwyc3RyKCBtYXgsIG9wdGlvbnMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElSZXBlYXRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByZXBlYXQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdCggY291bnQ6IEV4dGVuZGVkPENzc051bWJlcj4gfCBcImF1dG8tZmlsbFwiIHwgXCJhdXRvLWZpdFwiLFxyXG4gICAgLi4udHJhY2tzOiBHcmlkVHJhY2tbXSk6IElSZXBlYXRQcm94eVxyXG57XHJcbiAgICAvLyByZXR1cm4gKCkgPT4gYHJlcGVhdCgke3ZhbDJzdHIoY291bnQpfSwke3N0eWxlUHJvcFRvU3RyaW5nKCBcImdyaWRUZW1wbGF0ZVJvd3NcIiwgdHJhY2tzLCB0cnVlKX0pYDtcclxuICAgIHJldHVybiAoKSA9PiBgcmVwZWF0KCR7dmFsMnN0cihjb3VudCl9LCR7dmFsMnN0ciggdHJhY2tzLCB7IGFyckl0ZW1GdW5jOiBncmlkVHJhY2tUb1N0cmluZyB9KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJU3BhblByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgc3BhbiBleHByZXNzaW9uIGZvciBncmlkIGxheW91dHMuIElmIHRoZSBmaXJzdFxyXG4gKiBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIHRoZSBzZWNvbmQgcGFyYW1ldGVyIChpZiBkZWZpbmVkKSBtdXN0IGJlIGEgbmFtZTsgaWYgdGhlIGZpcnN0IHBhcmFtZXRlclxyXG4gKiBpcyBhIG5hbWUsIHRoZSBzZWNvbmQgcGFyYW1ldGVyIChpZiBkZWZpbmVkKSBtdXN0IGJlIGEgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNwYW4oIGNvdW50T3JOYW1lOiBFeHRlbmRlZDxHcmlkTGluZUNvdW50T3JOYW1lPixcclxuICAgIG5hbWVPckNvdW50PzogRXh0ZW5kZWQ8R3JpZExpbmVDb3VudE9yTmFtZT4pOiBJU3BhblByb3h5XHJcbntcclxuICAgIGxldCBmaXJzdEVsbSA9IHZhbDJzdHIoY291bnRPck5hbWUpO1xyXG4gICAgbGV0IHNlY29uZEVsbSA9IG5hbWVPckNvdW50ID8gdmFsMnN0ciggbmFtZU9yQ291bnQpIDogXCJcIjtcclxuICAgIHJldHVybiAoKSA9PiBgc3BhbiAke2ZpcnN0RWxtfSAke3NlY29uZEVsbX1gO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcblx0SUNzc051bWJlck1hdGgsIElDc3NMZW5ndGhNYXRoLCBJQ3NzQW5nbGVNYXRoLCBJQ3NzVGltZU1hdGgsIElDc3NSZXNvbHV0aW9uTWF0aCxcclxuICAgIElDc3NGcmVxdWVuY3lNYXRoLCBJQ3NzUGVyY2VudE1hdGgsIEV4dGVuZGVkLCBJU3RyaW5nUHJveHksIElVcmxQcm94eSxcclxuICAgIEF0dHJUeXBlS2V5d29yZCwgQXR0clVuaXRLZXl3b3JkLCBJTGVuZ3RoUHJveHksIElQZXJjZW50UHJveHksIElBbmdsZVByb3h5LFxyXG4gICAgSVRpbWVQcm94eSwgSVJlc29sdXRpb25Qcm94eSwgSUZyZXF1ZW5jeVByb3h5LCBJUXVvdGVkUHJveHlcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7XHJcblx0Q3NzTnVtYmVyTWF0aCwgQ3NzTGVuZ3RoTWF0aCwgQ3NzQW5nbGVNYXRoLCBDc3NUaW1lTWF0aCwgQ3NzUmVzb2x1dGlvbk1hdGgsXHJcblx0Q3NzRnJlcXVlbmN5TWF0aCwgQ3NzUGVyY2VudE1hdGgsIHZhbDJzdHIsIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmdcclxufSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7SVZhclJ1bGUsIElDb3VudGVyUnVsZSwgSUlEUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge1ZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7c3R5bGVQcm9wVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPG51bWJlcj5gXHJcbiAqIENTUyB0eXBlLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIEphdmFTY3JpcHQgdHlwZSB0aGV5IGFyZVxyXG4gKiBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB3aXRob3V0IGFwcGVuZGluZyBhbnkgdW5pdHMgdG8gdGhlbS5cclxuICovXHJcbmV4cG9ydCBsZXQgTnVtOiBJQ3NzTnVtYmVyTWF0aCA9IG5ldyBDc3NOdW1iZXJNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGVyY2VudCBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHBlcmNlbnRhZ2U+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBcIiVcIiB1bml0IHN1ZmZpeC5cclxuICovXHJcbmV4cG9ydCBsZXQgUGVyY2VudDogSUNzc1BlcmNlbnRNYXRoID0gbmV3IENzc1BlcmNlbnRNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHBlcmNlbnQgdmFsdWUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnQoIG46IG51bWJlcik6IElQZXJjZW50UHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiJVwiOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTGVuIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bGVuZ3RoPmBcclxuICogQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgbGVuZ3RoIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwicHhcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJlbVwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBMZW46IElDc3NMZW5ndGhNYXRoID0gbmV3IENzc0xlbmd0aE1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHF1YXJ0ZXJzIG9mIGFuIGluY2ggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIFEoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJRXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjaCB1bml0cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2goIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJjaFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2FudGltZXRlcnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNtKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiY21cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNhbGN1bGF0ZWQgZm9udC1zaXplcyBvZiB0aGUgZWxlbWVudCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW0oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJlbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaGVpZ2h0cyBvZiBsb3dlcmNhc2UgbGV0dGVyICd4JyBpbiB0aGUgZm9udCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJleFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaWMgdW5pdHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGljKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiaWNcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGluY2hlcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaW5jaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImluXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBsaW5lLWhlaWdodHMgb2YgdGhlIGVsZW1lbnQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwibGhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIG1pbGxpbWV0ZXJzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIm1tXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaWNhcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGMoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJwY1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcG9pbnRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwdCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInB0XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaXhlbHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHB4KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicHhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBzaXplIG9mIHRoZSBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2ssIGluIHRoZSBkaXJlY3Rpb25cclxuICogb2YgdGhlIHJvb3QgZWxlbWVudOKAmXMgYmxvY2sgYXhpcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmIoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2YlwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQncyBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2sgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidmhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSBzaXplIG9mIHRoZSBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2ssIGluIHRoZSBkaXJlY3Rpb25cclxuICogb2YgdGhlIHJvb3QgZWxlbWVudOKAmXMgaW5saW5lIGF4aXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZpKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidmlcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSB3aWR0aCBvZiB0aGUgdmlld3BvcnQncyBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2sgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZ3KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidndcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGZvbnRzaXplcyBvZiB0aGUgcm9vdCBlbGVtZW50ICg8aHRtbD4pICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZW0oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJyZW1cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGxpbmUtaGVpZ2h0cyBvZiB0aGUgcm9vdCBlbGVtZW50ICg8aHRtbD4pICovXHJcbmV4cG9ydCBmdW5jdGlvbiBybGgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJybGhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHRoZSB1bml0cyB3aGljaCBhcmUgYSBzbWFsbGVyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2bWF4KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidm1heFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIGxhcmdlciB2YWx1ZSBiZXR3ZWVuIHZ3IGFuZCB2aCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdm1pbiggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZtaW5cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGZvciBmbGV4ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmciggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImZyXCI7IH1cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuZ2xlIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8YW5nbGU+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYW4gYW5nbGUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkZWdcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJ0dXJuXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEFuZ2xlOiBJQ3NzQW5nbGVNYXRoID0gbmV3IENzc0FuZ2xlTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiBkZWdyZWVzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWcoIG46IG51bWJlcik6IElBbmdsZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRlZ1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiByYWRpYW5zICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYWQoIG46IG51bWJlcik6IElBbmdsZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInJhZFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiBncmFkaWFucyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JhZCggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZ3JhZFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiB0dXJucyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHVybiggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidHVyblwiOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVGltZSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZSBgPHRpbWU+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSB0aW1lIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwibXNcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJzXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFRpbWU6IElDc3NUaW1lTWF0aCA9IG5ldyBDc3NUaW1lTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyB0aW1lIHZhbHVlIGluIG1pbGxpc2Vjb25kcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXMoIG46IG51bWJlcik6IElUaW1lUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwibXNcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgdGltZSB2YWx1ZSBpbiBzZWNvbmRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzKCBuOiBudW1iZXIpOiBJVGltZVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInNcIjsgfVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUmVzb2x1dGlvbiBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSByZXNvbHV0aW9uIHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiZHBpXCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwiZHBjbVwiLlxyXG4gKi9cclxuZXhwb3J0IGxldCBSZXNvbHV0aW9uOiBJQ3NzUmVzb2x1dGlvbk1hdGggPSBuZXcgQ3NzUmVzb2x1dGlvbk1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUEkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRwaSggbjogbnVtYmVyKTogSVJlc29sdXRpb25Qcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJkcGlcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUENNICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcGNtKCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRwY21cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBEUFBYICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcHB4KCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRwcHhcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgcmVzb2x1dGlvbiB2YWx1ZSBpbiBYICovXHJcbmV4cG9ydCBmdW5jdGlvbiB4KCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInhcIjsgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZyZXF1ZW5jeSBvYmplY3QgY29udGFpbnMgc3RhdGljIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIGZyZXF1ZW5jeSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcIkh6XCI7IGZsb2F0aW5nIHBvaW50IG51bWJlcnMgdXNlIFwia0h6XCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IEZyZXF1ZW5jeTogSUNzc0ZyZXF1ZW5jeU1hdGggPSBuZXcgQ3NzRnJlcXVlbmN5TWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBmcmVxdWVuY3kgdmFsdWUgaW4gSGVydHogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGh6KCBuOiBudW1iZXIpOiBJRnJlcXVlbmN5UHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiaHpcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgZnJlcXVlbmN5IHZhbHVlIGluIEtpbG8tSGVydHogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGtoeiggbjogbnVtYmVyKTogSUZyZXF1ZW5jeVByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImtoelwiOyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIHV0aWxpdHkgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIGVuY2Fwc3VsYXRpbmcgdGhlIGdpdmVuIHN0cmluZy1saWtlIHBhcmFtZXRlci4gVGhpcyBmdW5jdGlvblxyXG4gKiBhbGxvd3Mgc3BlY2lmeWluZyBhcmJpdHJhcnkgdGV4dCBmb3IgcHJvcGVydGllcyB3aG9zZSB0eXBlIG5vcm1hbGx5IGRvZXNuJ3QgYWxsb3cgc3RyaW5ncy5cclxuICogVGhpcyBpcyB1c2VkIGFzIGFuIFwiZXNjYXBlIGhhdGNoXCIgd2hlbiBhIHN0cmluZyB2YWx1ZSBhbHJlYWR5IGV4aXN0cyBhbmQgdGhlcmUgaXMgbm8gc2Vuc2VcclxuICogdG8gY29udmVydCBpdCB0byBhIHByb3BlciB0eXBlLiBUaGlzIGZ1bmN0aW9uIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0IGJlIGludm9rZWQgd2l0aFxyXG4gKiB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmF3KCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogYW55W10pOiBJU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBpbnZvY2F0aW9uIG9mIHRoZSBgdmFyKClgIENTUyBmdW5jdGlvbiBmb3JcclxuICogdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgd2l0aCBvcHRpb25hbCBmYWxsYmFja3MuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNldmFyPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCB2YXJPYmo6IElWYXJSdWxlPEs+LCBmYWxsYmFjaz86IFZhclZhbHVlVHlwZTxLPik6IElTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gZmFsbGJhY2tcclxuICAgICAgICA/IGB2YXIoLS0ke3Zhck9iai5uYW1lfSwke3N0eWxlUHJvcFRvU3RyaW5nKCB2YXJPYmoudGVtcGxhdGUsIGZhbGxiYWNrLCB0cnVlKX0pYFxyXG4gICAgICAgIDogYHZhcigtLSR7dmFyT2JqLm5hbWV9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgdXJsKClgIGZ1bmN0aW9uLiBUaGUgc3RyaW5nIHBhcmFtZXRlclxyXG4gKiB3aWxsIGJlIHdyYXBwZWQgaW4gYSBcInVybCgpXCIgaW52b2NhdGlvbi4gVGhlIGZ1bmN0aW9uIGNhbiBhbHNvIGFjY2VwdCB0aGUgSUlEUnVsZSBvYmplY3QgdG9cclxuICogY3JlYXRlIHVybCgjZWxlbWVudCkgaW52b2NhdGlvbiwgd2hpY2ggaXMgb2Z0ZW4gdXNlZCB0byBhZGRyZXNzIFNWRyBlbGVtZW50cyBieSB0aGVpciBJRHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXJsKCB2YWw6IEV4dGVuZGVkPHN0cmluZyB8IElJRFJ1bGU+KTogSVVybFByb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT4gYHVybCgke3ZhbDJzdHIodmFsKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGF0dHIoKWAgQ1NTIGZ1bmN0aW9uLiBJdCByZXR1cm5zIElTdHJpbmdQcm94eVxyXG4gKiBhbmQgdGhlb3JldGljYWxseSBjYW4gYmUgdXNlZCBpbiBhbnkgc3R5bGUgcHJvcGVydHk7IGhvd2V2ZXIsIGl0cyB1c2UgYnkgYnJvd3NlcnMgaXMgY3VycmVudGx5XHJcbiAqIGxpbWl0ZWQgdG8gdGhlIGBjb250ZW50YCBwcm9wZXJ0eS4gQWxzbyBubyBicm93c2VyIGN1cnJlbnRseSBzdXBwb3J0IHR5cGUsIHVuaXRzIG9yIGZhbGxiYWNrXHJcbiAqIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRyKCBhdHRyTmFtZTogRXh0ZW5kZWQ8c3RyaW5nPiwgdHlwZU9yVW5pdD86IEV4dGVuZGVkPEF0dHJUeXBlS2V5d29yZCB8IEF0dHJVbml0S2V5d29yZD4sXHJcblx0ZmFsbGJhY2s/OiBFeHRlbmRlZDxzdHJpbmc+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYXR0cigke2F0dHJOYW1lfSR7dHlwZU9yVW5pdCA/IFwiIFwiICsgdHlwZU9yVW5pdCA6IFwiXCJ9JHtmYWxsYmFjayA/IFwiLFwiICsgZmFsbGJhY2sgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIGEgc3RyaW5nIGluIHF1b3RhdGlvbiBtYXJrcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBxdW90ZWQoIHZhbDogYW55KTogSVF1b3RlZFByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgXCIke3ZhbDJzdHIodmFsKX1cImA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ291bnRlcnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBDU1MgYGNvdW50ZXIoKWAgZnVuY3Rpb24gd2l0aCBhZGRpdGlvbmFsXHJcbiAqIG9wdGlvbmFsIHN0cmluZ3MgYWRkZWQgYWZ0ZXIgYW5kL29yIGJlZm9yZSB0aGUgY291bnRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVyKCBjb3VudGVyT2JqOiBFeHRlbmRlZDxJQ291bnRlclJ1bGUgfCBzdHJpbmc+LFxyXG5cdHN0eWxlPzogRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+LFxyXG5cdHRleHRBZnRlcj86IEV4dGVuZGVkPHN0cmluZz4sIHRleHRCZWZvcmU/OiBFeHRlbmRlZDxzdHJpbmc+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgc3R5bGVTdHJpbmcgPSBzdHlsZSA/IGAsJHt2YWwyc3RyKCBzdHlsZSl9YCA6IFwiXCI7XHJcblx0XHRsZXQgYmVmb3JlID0gdGV4dEJlZm9yZSA/IGBcIiR7dmFsMnN0ciggdGV4dEJlZm9yZSl9XCJgIDogXCJcIjtcclxuXHRcdGxldCBhZnRlciA9IHRleHRBZnRlciA/IGBcIiR7dmFsMnN0ciggdGV4dEFmdGVyKX1cImAgOiBcIlwiO1xyXG5cdFx0cmV0dXJuIGAke2JlZm9yZX0gY291bnRlcigke3ZhbDJzdHIoY291bnRlck9iail9JHtzdHlsZVN0cmluZ30pICR7YWZ0ZXJ9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgY291bnRlc3IoKWAgZnVuY3Rpb24gd2l0aCB0aGUgZ2l2ZW5cclxuICogc2VwYXJhdG9yIHN0cmluZyBhbmQgYWRkaXRpb25hbCBvcHRpb25hbCBzdHJpbmdzIGFkZGVkIGFmdGVyIGFuZC9vciBiZWZvcmUgdGhlIGNvdW50ZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY291bnRlcnMoIGNvdW50ZXJPYmo6IEV4dGVuZGVkPElDb3VudGVyUnVsZSB8IHN0cmluZz4sXHJcblx0c2VwYXJhdG9yOiBFeHRlbmRlZDxzdHJpbmc+LCBzdHlsZT86IEV4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPixcclxuXHR0ZXh0QWZ0ZXI/OiBFeHRlbmRlZDxzdHJpbmc+LCB0ZXh0QmVmb3JlPzogRXh0ZW5kZWQ8c3RyaW5nPik6IElTdHJpbmdQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IHNlcFN0cmluZyA9IHNlcGFyYXRvciA/IGBcIiR7dmFsMnN0ciggc2VwYXJhdG9yKX1cImAgOiBgXCIuXCJgO1xyXG5cdFx0bGV0IHN0eWxlU3RyaW5nID0gc3R5bGUgPyBgLCR7dmFsMnN0ciggc3R5bGUpfWAgOiBcIlwiO1xyXG5cdFx0bGV0IGJlZm9yZSA9IHRleHRCZWZvcmUgPyBgXCIke3ZhbDJzdHIoIHRleHRCZWZvcmUpfVwiYCA6IFwiXCI7XHJcblx0XHRsZXQgYWZ0ZXIgPSB0ZXh0QWZ0ZXIgPyBgXCIke3ZhbDJzdHIoIHRleHRBZnRlcil9XCJgIDogXCJcIjtcclxuXHRcdHJldHVybiBgJHtiZWZvcmV9IGNvdW50ZXJzKCR7dmFsMnN0cihjb3VudGVyT2JqKX0sJHtzZXBTdHJpbmd9JHtzdHlsZVN0cmluZ30pICR7YWZ0ZXJ9YDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltY3NzXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9Db2xvclR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9JbWFnZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvVXRpbEFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvQ29sb3JBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0ltYWdlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TdHlsZUFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvUnVsZUFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU2NoZWR1bGluZ0FQSVwiO1xyXG4iLCJpbXBvcnQge0lBbmltYXRpb25SdWxlLCBBbmltYXRpb25GcmFtZSwgQW5pbWF0aW9uV2F5cG9pbnQsIEFuaW1hdGlvblN0eWxlc2V0LCBJQW5pbWF0aW9uRnJhbWVSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIGNyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVzXCI7XHJcbmltcG9ydCB7IHZhbDJzdHIgfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvblJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQGtleWZyYW1lcyBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25SdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25SdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZyYW1lcz86IEFuaW1hdGlvbkZyYW1lW10sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0aWYgKGZyYW1lcylcclxuXHRcdFx0dGhpcy5mcmFtZVJ1bGVzID0gZnJhbWVzLm1hcCggZnJhbWUgPT4gbmV3IEFuaW1hdGlvbkZyYW1lUnVsZSggZnJhbWVbMF0sIGZyYW1lWzFdKSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG5cdFx0Zm9yKCBsZXQga2V5ZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0a2V5ZnJhbWVSdWxlLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEFuaW1hdGlvblJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBBbmltYXRpb25SdWxlKHVuZGVmaW5lZCwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdFx0aWYgKHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0bmV3UnVsZS5mcmFtZVJ1bGVzID0gdGhpcy5mcmFtZVJ1bGVzLm1hcCggZnJhbWVSdWxlID0+IGZyYW1lUnVsZS5jbG9uZSgpIGFzIEFuaW1hdGlvbkZyYW1lUnVsZSk7XHJcblx0XHRuZXdSdWxlLm5hbWVPdmVycmlkZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGBAa2V5ZnJhbWVzICR7dGhpcy5uYW1lfSB7fWAsIHBhcmVudCkgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHJcblx0XHRsZXQgY3NzS2V5ZnJhbWVzUnVsZSA9IHRoaXMuY3NzUnVsZSBhcyBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cdFx0Zm9yKCBsZXQgZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjc3NLZXlmcmFtZXNSdWxlLmFwcGVuZFJ1bGUoIGZyYW1lUnVsZS50b0Nzc1N0cmluZygpKVxyXG5cdFx0XHRcdGxldCBjc3NSdWxlID0gY3NzS2V5ZnJhbWVzUnVsZS5jc3NSdWxlcy5pdGVtKCAgY3NzS2V5ZnJhbWVzUnVsZS5jc3NSdWxlcy5sZW5ndGggLSAxKTtcclxuXHRcdFx0XHRpZiAoY3NzUnVsZSlcclxuXHRcdFx0XHRcdGZyYW1lUnVsZS5jc3NLZXlmcmFtZVJ1bGUgPSBjc3NSdWxlIGFzIENTU0tleWZyYW1lUnVsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYXRjaCh4KVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvciggXCJDYW5ub3QgYWRkIENTUyBrZXlmcmFtZSBydWxlXCIsIHgpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGlmICghdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCBgQGtleWZyYW1lcyAke3RoaXMubmFtZX0ge2ApO1xyXG5cclxuXHRcdGZvciggbGV0IGZyYW1lUnVsZSBvZiB0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdGN0eC5hZGRSdWxlVGV4dCggZnJhbWVSdWxlLnRvQ3NzU3RyaW5nKCkpXHJcbiAgICAgICAgXHJcblx0XHRjdHguYWRkUnVsZVRleHQoIFwifVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB0byBjb252ZXJ0IGFuIG9iamVjdCB0byBhIHN0cmluZy4gQW5pbWF0aW9uIHJ1bGUgcmV0dXJucyBpdHMgbmFtZS5cclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cdFxyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdHlsZSBydWxlcyByZXByZXNlbnRpbmcgYW5pbWF0aW9uIGZyYW1lcyAqL1xyXG5cdHB1YmxpYyBmcmFtZVJ1bGVzOiBBbmltYXRpb25GcmFtZVJ1bGVbXTtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbkZyYW1lUnVsZSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIGtleWZyYW1lIGNsYXVzZSBpbiB0aGUgYW5pbWF0aW9uIHJ1bGUuXHJcbiAqL1xyXG5jbGFzcyBBbmltYXRpb25GcmFtZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uRnJhbWVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludCwgc3R5bGVzZXQ/OiBBbmltYXRpb25TdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGVzZXQpO1xyXG5cdFx0dGhpcy53YXlwb2ludCA9IHdheXBvaW50O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IEFuaW1hdGlvbkZyYW1lUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQW5pbWF0aW9uRnJhbWVSdWxlKCB0aGlzLndheXBvaW50KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB2YWwyc3RyKCB0aGlzLndheXBvaW50LCB7XHJcblx0XHRcdGZyb21OdW1iZXI6IHYgPT4gdiArIFwiJVwiLFxyXG5cdFx0XHRhcnJJdGVtRnVuYzogdiA9PiB2YWwyc3RyKCB2LCB7IGZyb21OdW1iZXI6IHYgPT4gdiArIFwiJVwiIH0pLFxyXG5cdFx0XHRhcnJTZXA6IFwiLFwiXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50ICovXHJcblx0cHVibGljIHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludDtcclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZSBydWxlICovXHJcblx0cHVibGljIGNzc0tleWZyYW1lUnVsZTogQ1NTS2V5ZnJhbWVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUNvdW50ZXJSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2NyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZUxpa2V9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb3VudGVyUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBuYW1lZCBjb3VudGVyIGRlZmluaXRpb24uIFVzZSB0aGlzIHJ1bGUgdG8gY3JlYXRlXHJcbiAqIGNvdW50ZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkIGluIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZVxyXG4gKiBwcm9wZXJ0aWVzLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBjb3VudGVycyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlXHJcbiAqIGNvdW50ZXIgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ291bnRlclJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElDb3VudGVyUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJQ291bnRlclJ1bGUpXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHRcdFt0aGlzLm5hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ291bnRlclJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IENvdW50ZXJSdWxlKCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSBjb3VudGVyIG5hbWUuXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgY291bnRlciAqL1xyXG5cdHB1YmxpYyBnZXQgY291bnRlck5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubmFtZTsgfVxyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDb3VudGVyUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lHcmlkTGluZVJ1bGUsIElHcmlkQXJlYVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Y3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyaWRMaW5lUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBuYW1lZCBncmlkIGxpbmUgZGVmaW5pdGlvbi4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgZ3JpZFxyXG4gKiBsaW5lcyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlIGdyaWQgbGluZSBkZWZpbml0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkTGluZVJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElHcmlkTGluZVJ1bGVcclxue1xyXG4gICAgLy8gaWYgdGhlIG5hbWVPdmVycmlkZSBpcyBhbiBhcmVhIHJ1bGUgb2JqZWN0LCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzIGFsd2F5cyBkZWZpbmVkXHJcbiAgICAvLyBiZWNhdXNlIHRoaXMgY29uc3RydWN0b3IgY2FuIG9ubHkgYmUgaW52b2tlZCBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgbGluZXMgb2YgdGhlIEdyaWRBcmVhUnVsZVxyXG4gICAgLy8gb2JqZWN0LlxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZExpbmVSdWxlIHwgSUdyaWRBcmVhUnVsZSwgaXNTdGFydEVuZE9yTm9uZT86IGJvb2xlYW4pXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gaXNTdGFydEVuZE9yTm9uZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcbiAgICAgICAgbGV0IG5hbWVPdmVycmlkZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG4gICAgICAgIGlmIChuYW1lT3ZlcnJpZGUgaW5zdGFuY2VvZiBHcmlkTGluZVJ1bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBuYW1lT3ZlcnJpZGUubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gbmFtZU92ZXJyaWRlLmlzU3RhcnRFbmRPck5vbmU7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSBuYW1lT3ZlcnJpZGUuYXJlYU5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5hbWVPdmVycmlkZSBpbnN0YW5jZW9mIEdyaWRBcmVhUnVsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVPdmVycmlkZS5uYW1lICsgKHRoaXMuaXNTdGFydEVuZE9yTm9uZSA/IFwiLXN0YXJ0XCIgOiBcIi1lbmRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSBuYW1lT3ZlcnJpZGUubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgW3RoaXMubmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgb2J0YWluZWQgbmFtZSBkb2Vzbid0IGhhdmUgXCItc3RhcnRcIiBvciBcIi1lbmRcIiBidXQgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpc1xyXG4gICAgICAgICAgICAvLyBkZWZpbmVkICh0aGF0IGlzLCBpdCBpcyBlaXRoZXIgc3RhcnQgb3IgZW5kIGxpbmUpLCB3ZSBuZWVkIHRvIGFwcGVuZCB0aGUgc3VmZml4LiBJZiB0aGVcclxuICAgICAgICAgICAgLy8gb2J0YWluZWQgbmFtZSBhbHJlYWR5IGhhcyBcIi1zdGFydFwiIG9yIFwiLWVuZFwiIGFuZCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzIG5vdFxyXG4gICAgICAgICAgICAvLyBkZWZpbmVkLCB3ZSBzZXQgdGhpcyBmbGFnIHRvIGVpdGhlciB0cnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiB0aGUgc3VmZml4LiBOb3RlIHRoYXQgaWZcclxuICAgICAgICAgICAgLy8gdGhlIG5hbWVPdmVycmlkZSBpcyBhbiBhcmVhIHJ1bGUgb2JqZWN0LCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzIGFsd2F5cyBkZWZpbmVkLlxyXG4gICAgICAgICAgICBsZXQgbmFtZUhhc1N0YXJ0ID0gdGhpcy5uYW1lLmVuZHNXaXRoKFwiLXN0YXJ0XCIpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZUhhc0VuZCA9IHRoaXMubmFtZS5lbmRzV2l0aChcIi1lbmRcIik7XHJcbiAgICAgICAgICAgIGlmIChuYW1lSGFzU3RhcnQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lLnN1YnN0ciggMCwgdGhpcy5uYW1lLmxlbmd0aCAtIFwiLXN0YXJ0XCIubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lSGFzRW5kKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSB0aGlzLm5hbWUuc3Vic3RyKCAwLCB0aGlzLm5hbWUubGVuZ3RoIC0gXCItZW5kXCIubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RhcnRFbmRPck5vbmUgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgKz0gXCItc3RhcnRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RhcnRFbmRPck5vbmUgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFOYW1lID0gdGhpcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lICs9IFwiLWVuZFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogR3JpZExpbmVSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBHcmlkTGluZVJ1bGUoIHRoaXMubmFtZU92ZXJyaWRlLCB0aGlzLmlzU3RhcnRFbmRPck5vbmUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbiBpcyB1c2VkIHdoZW4gdGhlIG9iamVjdCBpcyBzcGVjaWZpZWQgYXMgYSB2YWx1ZSBvZiBhIHN0eWxlIHByb3BlcnR5LlxyXG5cdC8vIFdlIHJldHVybiB0aGUgbGluZSBuYW1lLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcbiAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbGluZSBpcyBhIHN0YXJ0IG9yIGVuZCBsaW5lIG9mIGEgZ3JpZCBhcmVhLiBUaGUgdmFsdWUgaXMgdHJ1ZVxyXG4gICAgICogaWYgdGhpcyBpcyB0aGUgc3RhcnQgbGluZTsgZmFsc2UgaWYgdGhpcyBpcyB0aGUgZW5kIGxpbmU7IGFuZCB1bmRlZmluZWQgaWYgdGhlIGxpbmUgaXNcclxuICAgICAqIG5vdCByZWxhdGVkIHRvIGFueSBhcmVhLlxyXG4gICAgICovXHJcblx0cHVibGljIGlzU3RhcnRFbmRPck5vbmU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBncmlkIGFyZWEgb2Ygd2hpY2ggdGhlIGxpbmUgaXMgZWl0aGVyIGEgc3RhcnQgb3IgYW4gZW5kIGxpbmUuIEl0IGlzIGRlZmluZWRcclxuICAgICAqIG9ubHkgaWYgdGhlIGxpbmUgbmFtZSBlbmRzIHdpdGggXCItc3RhcnRcIiBvciBcIi1lbmRcIi5cclxuICAgICAqL1xyXG5cdHB1YmxpYyBhcmVhTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRMaW5lUnVsZSB8IElHcmlkQXJlYVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcmlkQXJlYVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgbmFtZWQgZ3JpZCBhcmVhIGRlZmluaXRpb24uIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGdyaWRcclxuICogYXJlYXMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZSBncmlkIGFyZWEgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR3JpZEFyZWFSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJR3JpZEFyZWFSdWxlXHJcbntcclxuICAgIC8vIGlmIHRoZSBuYW1lT3ZlcnJpZGUgaXMgYW4gYXJlYSBydWxlIG9iamVjdCwgdGhlIGlzU3RhcnRFbmRPck5vbmUgZmxhZyBpcyBhbHdheXMgZGVmaW5lZFxyXG4gICAgLy8gYmVjYXVzZSB0aGlzIGNvbnN0cnVjdG9yIGNhbiBvbmx5IGJlIGludm9rZWQgZm9yIHRoZSBzdGFydCBhbmQgZW5kIGxpbmVzIG9mIHRoZSBHcmlkQXJlYVJ1bGVcclxuICAgIC8vIG9iamVjdC5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRBcmVhUnVsZSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGxpbmUgcnVsZXNcclxuICAgICAgICB0aGlzLnN0YXJ0TGluZSA9IG5ldyBHcmlkTGluZVJ1bGUoIHRoaXMsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZW5kTGluZSA9IG5ldyBHcmlkTGluZVJ1bGUoIHRoaXMsIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcbiAgICAgICAgW3RoaXMubmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblxyXG4gICAgICAgIC8vIHByb2Nlc3MgbGluZSBydWxlc1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaW5lLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIG51bGwpO1xyXG4gICAgICAgIHRoaXMuZW5kTGluZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBudWxsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEdyaWRBcmVhUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgR3JpZEFyZWFSdWxlKCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSBsaW5lIG5hbWUuXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogU3RhcnQgbGluZSBvZiB0aGUgYXJlYS4gKi9cclxuXHRwdWJsaWMgc3RhcnRMaW5lOiBHcmlkTGluZVJ1bGU7XHJcblxyXG4gICAgLyoqIEVuZCBsaW5lIG9mIHRoZSBhcmVhIGFyZWEuICovXHJcblx0cHVibGljIGVuZExpbmU6IEdyaWRMaW5lUnVsZTtcclxuXHJcbiAgICAvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIFN0eWxlRGVmaW5pdGlvbiwgSUdyb3VwUnVsZSwgSU1lZGlhUnVsZSwgSVN1cHBvcnRzUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtnZXRDb250YWluZXJGcm9tSW5zdGFuY2UsIHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3N9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5pbXBvcnQge0lSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtzdXBwb3J0c1F1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5pbXBvcnQge21lZGlhUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JvdXBSdWxlIGNsYXNzIHNlcnZlcyBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBncm91cGluZyBDU1MgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JvdXBSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmluc3RhbmNlT3JDbGFzcyA9IGluc3RhbmNlT3JDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnRhaW5lciB0byB3aGljaCBvdXIgZ3JvdXBuZyBydWxlIGJlbG9uZ3MgYmVjb21lcyB0aGUgcGFyZW50IGNvbnRhaW5lciBmb3IgdGhlXHJcbiAgICAgICAgLy8gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZVxyXG5cdFx0bGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggdGhpcy5pbnN0YW5jZU9yQ2xhc3MsIGNvbnRhaW5lci5nZXREZWZpbml0aW9uSW5zdGFuY2UoKSk7XHJcblx0XHRpZiAoIWluc3RhbmNlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xyXG5cdFx0dGhpcy5ydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5ydWxlQ29udGFpbmVyKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5nZXRHcm91cFNlbGVjdG9yVGV4dCgpO1xyXG5cdFx0aWYgKCFzZWxlY3RvcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCBgJHtzZWxlY3Rvcn0ge31gLCBwYXJlbnQpIGFzIENTU0dyb3VwaW5nUnVsZTtcclxuXHJcblx0XHQvLyBpbnNlcnQgc3ViLXJ1bGVzXHJcblx0XHRpZiAodGhpcy5jc3NSdWxlKVxyXG5cdFx0XHR0aGlzLnJ1bGVDb250YWluZXIuaW5zZXJ0UnVsZXMoIHRoaXMuY3NzUnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKCF0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmdldEdyb3VwU2VsZWN0b3JUZXh0KCk7XHJcblx0XHRpZiAoIXNlbGVjdG9yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCBgJHtzZWxlY3Rvcn0ge2ApO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdHRoaXMucnVsZUNvbnRhaW5lci5zZXJpYWxpemVSdWxlcyggY3R4KTtcclxuXHJcblx0XHRjdHguYWRkUnVsZVRleHQoIFwifVwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGNsZWFyIHN1Yi1ydWxlc1xyXG5cdFx0aWYgKHRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0dGhpcy5ydWxlQ29udGFpbmVyLmNsZWFyUnVsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHB1YmxpYyBnZXQgcnVsZXMoKTogVCB7IHJldHVybiB0aGlzLmluc3RhbmNlIGFzIFQ7IH1cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU0dyb3VwaW5nUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCBkZWZpbmVzIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzO1xyXG5cclxuXHQvLyBTdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciBmb3IgdGhlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIHJ1bGVDb250YWluZXI6IElSdWxlQ29udGFpbmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3VwcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk6IFN1cHBvcnRzUXVlcnksIGluc3RhbmNlT3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlciggaW5zdGFuY2VPckNsYXNzKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdXBwb3J0c1J1bGU8VD5cclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFN1cHBvcnRzUnVsZTxUPiggdGhpcy5xdWVyeSwgdGhpcy5pbnN0YW5jZU9yQ2xhc3MpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBzdHJpbmcgb2YgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBnZXRHcm91cFNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgfCBudWxsXHJcblx0e1xyXG5cdFx0Ly8gY29udmVydCB0aGUgcXVlcnkgdG8gaXRzIHN0cmluZyBmb3JtXHJcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBxdWVyeSBpcyBzdXBwb3J0ZWQgYW5kIGlmIGl0IGlzIG5vdCwgZG9uJ3QgaW5zZXJ0IHRoZSBydWxlXHJcblx0XHRyZXR1cm4gQ1NTLnN1cHBvcnRzKCBxdWVyeVN0cmluZykgPyBgQHN1cHBvcnRzICR7cXVlcnlTdHJpbmd9YCA6IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBGbGFnIGluZGljYXRlZCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoaXMgcnVsZSdzIHF1ZXJ5ICovXHJcbiAgICBwdWJsaWMgZ2V0IGlzU3VwcG9ydGVkKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gIENTUy5zdXBwb3J0cyggc3VwcG9ydHNRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KSk7XHJcbiAgICB9XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBzdXBwb3J0IHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHJpdmF0ZSBxdWVyeTogU3VwcG9ydHNRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVkaWFSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSU1lZGlhUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IE1lZGlhUnVsZTxUPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTWVkaWFSdWxlPFQ+KCB0aGlzLnF1ZXJ5LCB0aGlzLmluc3RhbmNlT3JDbGFzcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHRyZXR1cm4gYEBtZWRpYSAke21lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUZvbnRGYWNlUnVsZSwgSUltcG9ydFJ1bGUsIElQYWdlUnVsZSwgSU5hbWVzcGFjZVJ1bGUsIElDbGFzc05hbWVSdWxlLCBJQ2xhc3NSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtJRm9udEZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCB7Zm9udEZhY2VUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZUZ1bmNzXCJcclxuaW1wb3J0IHtSdWxlLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0LCBSdWxlTGlrZSwgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXJ9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7c3VwcG9ydHNRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlc1wiO1xyXG5pbXBvcnQge1BhZ2VQc2V1ZG9DbGFzc30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWlzY1J1bGUgY2xhc3Mgc2VydmVzIGFzIGEgYmFzZSBjbGFzcyBmb3Igc2ltcGxlIHJ1bGVzLlxyXG4gKi9cclxuYWJzdHJhY3QgY2xhc3MgTWlzY1J1bGU8VCBleHRlbmRzIENTU1J1bGU+IGV4dGVuZHMgUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBpc1RvcExldmVsUnVsZT86IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaXNUb3BMZXZlbFJ1bGUgPSBpc1RvcExldmVsUnVsZTtcclxuXHR9XHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFJ1bGUuYWRkUnVsZVRvRE9NKCB0aGlzLmdldFJ1bGVUZXh0KCksIHBhcmVudCkgYXMgVDtcclxuXHR9XHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG4gICAge1xyXG5cdFx0Y3R4LmFkZFJ1bGVUZXh0KCB0aGlzLmdldFJ1bGVUZXh0KCksIHRoaXMuaXNUb3BMZXZlbFJ1bGUpO1xyXG4gICAgfVxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgZm9yIHRoaXMgcnVsZS5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRSdWxlVGV4dCgpOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogVDtcclxuXHJcbiAgICAvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHJ1bGUgY2FuIG9ubHkgYmUgYXQgdGhlIHRvcC1sZXZlbCBvZiBzdHlsZXNoZWV0cyAoZS5nLiBAaW1wb3J0XHJcbiAgICAvLyBhbmQgQG5hbWVzcGFjZSkuXHJcbiAgICBwcml2YXRlIGlzVG9wTGV2ZWxSdWxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEltcG9ydFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbXBvcnRSdWxlIGV4dGVuZHMgTWlzY1J1bGU8Q1NTSW1wb3J0UnVsZT4gaW1wbGVtZW50cyBJSW1wb3J0UnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB1cmw6IHN0cmluZywgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnksIHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5KVxyXG5cdHtcclxuICAgICAgICAvLyB0aGlzIGlzIGEgdG9wLWxldmVsIHJ1bGVcclxuXHRcdHN1cGVyKCB0cnVlKTtcclxuXHJcblx0XHR0aGlzLnVybCA9IHVybDtcclxuXHRcdHRoaXMubWVkaWFRdWVyeSA9IG1lZGlhUXVlcnk7XHJcblx0XHR0aGlzLnN1cHBvcnRzUXVlcnkgPSBzdXBwb3J0c1F1ZXJ5O1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEltcG9ydFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEltcG9ydFJ1bGUoIHRoaXMudXJsLCB0aGlzLm1lZGlhUXVlcnksIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgZm9yIHRoaXMgcnVsZS5cclxuICAgIHByb3RlY3RlZCBnZXRSdWxlVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdGxldCB1cmw6IHN0cmluZztcclxuXHRcdGlmICh0aGlzLnVybC5zdGFydHNXaXRoKFwidXJsXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJcXFwiXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCInXCIpKVxyXG5cdFx0XHR1cmwgPSB0aGlzLnVybDtcclxuXHRcdGVsc2VcclxuXHRcdFx0dXJsID0gYHVybCgke3RoaXMudXJsfSlgO1xyXG5cclxuXHRcdGxldCBzdXBwb3J0c1F1ZXJ5U3RyaW5nID0gIXRoaXMuc3VwcG9ydHNRdWVyeSA/IFwiXCIgOiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMuc3VwcG9ydHNRdWVyeSk7XHJcblx0XHRpZiAoc3VwcG9ydHNRdWVyeVN0cmluZyAmJiAhc3VwcG9ydHNRdWVyeVN0cmluZy5zdGFydHNXaXRoKCBcInN1cHBvcnRzXCIpKVxyXG5cdFx0ICAgIHN1cHBvcnRzUXVlcnlTdHJpbmcgPSBgc3VwcG9ydHMoICR7c3VwcG9ydHNRdWVyeVN0cmluZ30gKWA7XHJcblxyXG5cdFx0bGV0IG1lZGlhUXVlcnlTdHJpbmcgPSAhdGhpcy5tZWRpYVF1ZXJ5ID8gXCJcIiA6IG1lZGlhUXVlcnlUb1N0cmluZyggdGhpcy5tZWRpYVF1ZXJ5KTtcclxuXHRcdHJldHVybiBgQGltcG9ydCAke3VybH0gJHtzdXBwb3J0c1F1ZXJ5U3RyaW5nfSAke21lZGlhUXVlcnlTdHJpbmd9YDtcclxuICAgIH1cclxuXHJcblx0Ly8gVVJMIHRvIGltcG9ydCBmcm9tLlxyXG5cdHB1YmxpYyB1cmw6IHN0cmluZztcclxuXHJcblx0Ly8gT3B0aW9uYWwgbWVkaWEgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgbWVkaWFRdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHN1cHBvcnRzIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHN1cHBvcnRzUXVlcnk/OiBzdHJpbmcgfCBTdXBwb3J0c1F1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmFtZXNwYWNlUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIE5hbWVzcGFjZVJ1bGUgZXh0ZW5kcyBNaXNjUnVsZTxDU1NOYW1lc3BhY2VSdWxlPiBpbXBsZW1lbnRzIElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVzcGFjZTogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpXHJcblx0e1xyXG4gICAgICAgIC8vIHRoaXMgaXMgYSB0b3AtbGV2ZWwgcnVsZVxyXG5cdFx0c3VwZXIoIHRydWUpO1xyXG5cclxuXHRcdHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xyXG5cdFx0dGhpcy5wcmVmaXggPSBwcmVmaXg7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogTmFtZXNwYWNlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgTmFtZXNwYWNlUnVsZSggdGhpcy5uYW1lc3BhY2UsIHRoaXMucHJlZml4KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgQ1NTIHN0cmluZyBmb3IgdGhpcyBydWxlLlxyXG4gICAgcHJvdGVjdGVkIGdldFJ1bGVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0bGV0IHVybCA9IHRoaXMubmFtZXNwYWNlLnN0YXJ0c1dpdGgoIFwidXJsKFwiKSA/IHRoaXMubmFtZXNwYWNlIDogYHVybCgke3RoaXMubmFtZXNwYWNlfSlgO1xyXG5cdFx0cmV0dXJuIGBAbmFtZXNwYWNlICR7dGhpcy5wcmVmaXggPyB0aGlzLnByZWZpeCA6IFwiXCJ9ICR7dXJsfWA7XHJcbiAgICB9XHJcblxyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgcHJlZml4OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRm9udEZhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIEBmb250LWZhY2UgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9udEZhY2VSdWxlIGV4dGVuZHMgTWlzY1J1bGU8Q1NTRm9udEZhY2VSdWxlPiBpbXBsZW1lbnRzIElGb250RmFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZm9udGZhY2U6IElGb250RmFjZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuZm9udGZhY2UgPSBmb250ZmFjZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBGb250RmFjZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggdGhpcy5mb250ZmFjZSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgZm9yIHRoaXMgcnVsZS5cclxuICAgIHByb3RlY3RlZCBnZXRSdWxlVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiBgQGZvbnQtZmFjZSAke2ZvbnRGYWNlVG9TdHJpbmcoIHRoaXMuZm9udGZhY2UpfWA7XHJcbiAgICB9XHJcblxyXG5cdC8vIE9iamVjdCBkZWZpbmluZyBmb250LWZhY2UgcHJvcGVydGllcy5cclxuXHRwdWJsaWMgZm9udGZhY2U6IElGb250RmFjZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFBhZ2VSdWxlIGNsYXNzIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBhZ2VSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVBhZ2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHBzZXVkb0NsYXNzPzogUGFnZVBzZXVkb0NsYXNzLCBzdHlsZT86IFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnBzZXVkb0NsYXNzID0gcHNldWRvQ2xhc3M7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogUGFnZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IFBhZ2VSdWxlKCB0aGlzLnBzZXVkb0NsYXNzKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgQHBhZ2UgJHt0aGlzLnBzZXVkb0NsYXNzID8gdGhpcy5wc2V1ZG9DbGFzcyA6IFwiXCJ9YDtcclxuXHR9XHJcblxyXG5cdC8qKiBTT00gcGFnZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1BhZ2VSdWxlO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgbmFtZSBvZiB0aGUgcGFnZSBwc2V1ZG8gc3R5bGUgKGUuZy4gXCJcIjpmaXJzdFwiKSAqL1xyXG5cdHB1YmxpYyBwc2V1ZG9DbGFzczogUGFnZVBzZXVkb0NsYXNzIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFnZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NOYW1lUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSUNsYXNzTmFtZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggY2xhc3NlczogKElDbGFzc1J1bGUgfCBJQ2xhc3NOYW1lUnVsZSB8IHN0cmluZylbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5jbGFzc2VzID0gY2xhc3NlcztcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBDbGFzc05hbWVSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBDbGFzc05hbWVSdWxlKCB0aGlzLmNsYXNzZXMpO1xyXG5cdH1cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jbGFzc2VzLm1hcCggY2xzID0+IHR5cGVvZiBjbHMgPT09IFwic3RyaW5nXCIgPyBjbHMgOiBjbHMubmFtZSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgdGhpcy5jc3NDbGFzc05hbWUgPSBcIi5cIiArIHRoaXMuY2xhc3Nlcy5tYXAoIGNscyA9PiB0eXBlb2YgY2xzID09PSBcInN0cmluZ1wiID8gY2xzIDogY2xzLm5hbWUpLmpvaW4oXCIuXCIpO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFsbG93cyB0aGUgb2JqZWN0IHRvIHBhcnRpY3BhdGUgaW4gXCJ2YWx1ZVRvU3RyaW5nXCIgc2VyaWFsaXphdGlvbi4gV2hlbmV2ZXJcclxuXHQgKiB0aGUgQ2xhc3NOYW1lUnVsZSBvYmplY3QgaXMgZW5jb3VudGVyZWQgYnkgdGhlIGBVdGlsRnVuYy52YWx1ZVRvU3RyaW5nYCBmdW5jdGlvbixcclxuXHQgKiB0aGUgcnVsZSdzIENTUyBuYW1lICh0aGUgb25lIHdpdGggdGhlIGRvdHMpIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jc3NDbGFzc05hbWU7XHJcblx0fVxyXG5cclxuICAgIC8vIEltcGxlbWVudGF0aW9uIG9mIHRoZSB0b1N0cmluZyBtZXRob2QgcmV0dXJucyB0aGUgY29tYmluZWQgbmFtZSBvZiB0aGUgY2xhc3NlcyAod2l0aG91dFxyXG4gICAgLy8gdGhlIENTUyBwcmVmaXhlcykuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuICAgIC8qKiBBbGwgY2xhc3MgbmFtZXMgY29uY2F0ZW5hdGVkIHdpdGggc3BhY2UgKi9cclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBcclxuICAgIC8qKiBBbGwgY2xhc3MgQ1NTIG5hbWVzICh3aXRoIGRvdHMpIGNvbmNhdGVuYXRlZCB0b2dldGhlciAqL1xyXG4gICAgcHVibGljIGNzc0NsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgY2xhc3NlczogKElDbGFzc1J1bGUgfCBJQ2xhc3NOYW1lUnVsZSB8IHN0cmluZylbXTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lSdWxlLCBJTmFtZWRFbnRpdHksIFN0eWxlRGVmaW5pdGlvbn0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0IGludGVyZmFjZSBrZWVwcyBpbmZvcm1hdGlvbiBkdXJpbmcgc2VyaWFsaXphdGlvbiBvZiBzdHlsZVxyXG4gKiBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIGluc3RhbmNlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dFxyXG57XHJcbiAgICAvLyBBZGRzIHJ1bGUgdGV4dFxyXG4gICAgYWRkUnVsZVRleHQoIHM6IHN0cmluZywgaXNUb3BMZXZlbFJ1bGU/OiBib29sZWFuKTogdm9pZDtcclxuXHJcbiAgICAvLyBBZGRzIHJ1bGUgdGV4dFxyXG4gICAgYWRkU3R5bGVEZWZpbml0aW9uKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGFjY29tcGFuaWVzIGFuZCBpcyBhc3NvY2lhdGVkIHdpdGhcclxuICogYSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVDb250YWluZXJcclxue1xyXG5cdC8qKiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzICovXHJcblx0Z2V0RGVmaW5pdGlvbkluc3RhbmNlKCk6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0LyoqIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLiAqL1xyXG5cdGluc2VydFJ1bGVzKCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkO1xyXG5cclxuXHQvKiogQ2xlYXJzIGFsbCBDU1MgcnVsZSBvYmplY3RzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuICovXHJcblx0Y2xlYXJSdWxlcygpOiB2b2lkO1xyXG5cclxuXHQvKiogV3JpdGVzIGFsbCBydWxlcyByZWN1cnNpdmVseSB0byB0aGUgZ2l2ZW4gc3RyaW5nLiAqL1xyXG5cdHNlcmlhbGl6ZVJ1bGVzKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkO1xyXG5cclxuICAgIC8qKiBTZXRzIHRoZSBnaXZlbiB2YWx1ZSBmb3IgdGhlIGN1c3RvbSBDU1Mgcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLiAqL1xyXG5cdHNldEN1c3RvbVZhclZhbHVlKCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUb3BMZXZlbFJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QgdGhhdCBcIm93bnNcIlxyXG4gKiB0aGUgcnVsZXMgdW5kZXIgdGhpcyBjb250YWluZXIuIEluIHBhcnRpY3VsYXIsIHRoZSBvd25lcidzIGpvYiBpcyB0byBnZW5lcmF0ZSBcInNjb3BlZFwiIHVuaXF1ZVxyXG4gKiBuYW1lcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRvcExldmVsUnVsZUNvbnRhaW5lciBleHRlbmRzIElSdWxlQ29udGFpbmVyXHJcbntcclxuXHQvKiogR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZXNoZWV0ICovXHJcblx0Z2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlTGlrZSBhYnN0cmFjdCBjbGFzcyBpcyBhIGJhc2UgZm9yIGFsbCBcInJ1bGVzXCIgZGVmaW5lZCBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIC1cclxuICogd2hldGhlciB0aGV5IGNvcnJlc3BvbmQgdG8gcmVhbCBDc3NSdWxlcyAoYW5kIHRodXMgZGVyaXZlIGZyb20gdGhlIFJ1bGUgY2xhc3MpIG9yIG5vdCAoc3VjaCBhc1xyXG4gKiBjb3VudGVycywgZ3JpZCBsaW5lcyBhbmQgZ3JpZCBhcmVhcykuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUnVsZUxpa2Vcclxue1xyXG5cdC8vIFByb2Nlc3NlcyB0aGUgcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuXHRcdHRoaXMub3duZXJDb250YWluZXIgPSBvd25lckNvbnRhaW5lcjtcclxuXHRcdHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBjbG9uZSgpOiBSdWxlTGlrZTtcclxuXHJcblx0Ly8gQ29udGFpbmVyIGF0IHRoZSB0b3Agb2YgdGhlIGNoYWluIG9mIGNvbnRhaW5lcnMgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuXHJcblx0cHVibGljIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgY2FuXHJcblx0Ly8gYmUgbnVsbCBmb3IgcnVsZXMgbm90IGNyZWF0ZWQgdmlhIGFzc2lnbm1lbnQgdG8gc3R5bGUgZGVmaW5pdGlvbiBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBydWxlTmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuXHJcblx0cHVibGljIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgcnVsZXMuIEFzIGEgcGFyZW50IG9mIFJ1bGVDb250YWluZXIsIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGlzIGFsc28gYW4gYW5jZXN0b3IgZm9yIFN0eWxlc2hlZXQ7IGhvd2V2ZXIsIG1vc3Qgb2YgaXRzIHRoZSBmaWVsZHMgYXJlIHVuZGVmaW5lZCBpblxyXG4gKiB0ZSBTdHlsZXNoZWV0IGluc3RhbmNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJUnVsZVxyXG57XHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGU7XHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdC8vIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLCBpcyBhY3RpdmF0ZWQuXHJcblx0cHVibGljIGFic3RyYWN0IGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZDtcclxuXHJcblx0Ly8gQ2xlcnMgdGhlIENTUyBydWxlIG9iamVjdC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIHRvIHdoaWNoXHJcblx0Ly8gdGhpcyBydWxlIGJlbG9uZ3MsIGlzIGRlYWN0aXZhdGVkLlxyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHsgdGhpcy5jc3NSdWxlID0gbnVsbDsgfVxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuXHRwdWJsaWMgYWJzdHJhY3Qgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkO1xyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhlIGdpdmVuIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgc3RhdGljIGFkZFJ1bGVUb0RPTSggcnVsZVRleHQ6IHN0cmluZywgcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogQ1NTUnVsZSB8IG51bGxcclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0bGV0IGluZGV4ID0gcGFyZW50Lmluc2VydFJ1bGUoIHJ1bGVUZXh0LCBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoKTtcclxuXHRcdFx0cmV0dXJuIHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcblx0XHR9XHJcblx0XHRjYXRjaCggeClcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYENhbm5vdCBhZGQgQ1NTIHJ1bGUgJyR7cnVsZVRleHR9J2AsIHgpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDU1NSdWxlLWRlcml2ZWQgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGFjdHVhbGwgQ1NTIHJ1bGUgaW5zZXJ0ZWQgaW50b1xyXG5cdC8vIHRoZSBzdHlsZXMgc2hlZXQgb3IgdGhlIHBhcmVudCBydWxlLiBUaGlzIGlzIHVuZGVmaW5lZCBmb3IgU3R5bGVzaGVldCBvYmplY3RzLlxyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBzY29wZWQgbmFtZXMgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSxcclxuXHRjc3NQcmVmaXg/OiBzdHJpbmcpOiBbc3RyaW5nLHN0cmluZ11cclxue1xyXG5cdGlmICghcnVsZU5hbWUgJiYgIW5hbWVPdmVycmlkZSlcclxuXHRcdHJldHVybiBbXCJcIiwgXCJcIl07XHJcblxyXG5cdGxldCBuYW1lID0gIW5hbWVPdmVycmlkZVxyXG5cdFx0PyBvd25lckNvbnRhaW5lci5nZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWUhKVxyXG5cdFx0OiB0eXBlb2YgbmFtZU92ZXJyaWRlID09PSBcInN0cmluZ1wiXHJcblx0XHRcdD8gbmFtZU92ZXJyaWRlXHJcblx0XHRcdDogbmFtZU92ZXJyaWRlLm5hbWU7XHJcblxyXG5cdHJldHVybiAhY3NzUHJlZml4XHJcblx0XHQ/IFtuYW1lLG5hbWVdXHJcblx0XHQ6IG5hbWUuc3RhcnRzV2l0aCggY3NzUHJlZml4KVxyXG5cdFx0XHQ/IFtuYW1lLnN1YnN0ciggY3NzUHJlZml4Lmxlbmd0aCksIG5hbWVdXHJcblx0XHRcdDogW25hbWUsIGNzc1ByZWZpeCArIG5hbWVdO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U3R5bGVEZWZpbml0aW9uLCBJU3R5bGVEZWZpbml0aW9uQ2xhc3N9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgUnVsZUxpa2UsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHR9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuL1ZhclJ1bGVcIlxyXG5pbXBvcnQge0ltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGV9IGZyb20gXCIuL01pc2NSdWxlc1wiXHJcbmltcG9ydCB7c19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGV9IGZyb20gXCIuL1NjaGVkdWxpbmdcIjtcclxuXHJcblxyXG5cclxuLy8gRGVmaW5lIHN5bWJvbHMgdGhhdCBhcmUgdXNlZCBmb3Iga2VlcGluZyBpbXBvcnRhbnQgaW5mb3JtYXRpb24gb24gdGhlIHN0eWxlIGRlZmluaXRpb25cclxuLy8gaW5zdGFuY2VzIHRoYXQgd2UgZG9uJ3Qgd2FudCB0byBiZSB2aXNpYmxlIHRvIGRldmVsb3BlcnMuXHJcblxyXG4vKiogUHJvcGVydHkgb24gdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgcG9pbnRpbmcgdG8gdGhlIHNpbmdsdG9uIGluc3RhbmNlLiAqL1xyXG5jb25zdCBzeW1JbnN0YW5jZSA9IFN5bWJvbChcImRlZmluaXRpb25cIik7XHJcblxyXG4vKipcclxuICogUHJvcGVydHkgb24gdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgcG9pbnRpbmcgdG8gdGhlIFJ1bGVDb250YWluZXIgb2JqZWN0IHRoYXQgaXNcclxuICogcmVzcG9uc2libGUgZm9yIHByb2Nlc3NpbmcgcnVsZXMuXHJcbiAqL1xyXG5jb25zdCBzeW1Db250YWluZXIgPSBTeW1ib2woXCJjb250YWluZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZUNvbnRhaW5lciBjbGFzcyBpcyBhIHNoYWRvdyBzdHJ1Y3R1cmUgdGhhdCBhY2NvbXBhbmllcyBldmVyeSBwcm9jZXNzZWQgc3R5bGUgZGVmaW5pdGlvblxyXG4gKiBvYmplY3QuIFNpbmNlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyBpcyBhbiBleHBvcnRlZCBjbGFzcyB2aXNpYmxlIHRvIGRldmVsb3BlcnMsIHdlIGRvbid0IHdhbnRcclxuICogdG8gaGF2ZSBhIGxvdCBvZiBmdW5jdGlvbmFsaXR5IGluIGl0LiBUaGUgUnVsZUNvbnRhaW5lciBvYmplY3QgaXMgbGlua2VkIHRvIHRoZSBTdHlsZURlZmluaXRpb25cclxuICogb2JqZWN0IHZpYSB0aGUgW3N5bVJ1bGVDb250YWluZXJdIHN5bWJvbC4gSXQgY29udGFpbnMgYWxsIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBwYXJzaW5nIHJ1bGVcclxuICogZGVmaW5pdGlvbnMsIG5hbWUgYXNzaWdubWVudCBhbmQgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcbiAqL1xyXG5jbGFzcyBSdWxlQ29udGFpbmVyIGltcGxlbWVudHMgSVRvcExldmVsUnVsZUNvbnRhaW5lclxyXG57XHJcblx0Y29uc3RydWN0b3IoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIG5hbWU6IHN0cmluZywgZW1iZWRkaW5nQ29udGFpbmVyPzogUnVsZUNvbnRhaW5lcilcclxuXHR7XHJcblx0XHR0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xyXG5cdFx0dGhpcy5lbWJlZGRpbmdDb250YWluZXIgPSBlbWJlZGRpbmdDb250YWluZXI7XHJcblxyXG4gICAgICAgIHRoaXMuZGVmaW5pdGlvbkNsYXNzID0gaW5zdGFuY2UuY29uc3RydWN0b3IgYXMgSVN0eWxlRGVmaW5pdGlvbkNsYXNzO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gaW5zdGFuY2UuJHBhcmVudDtcclxuXHRcdHRoaXMub3duZXIgPSBpbnN0YW5jZS4kb3duZXI7XHJcblxyXG5cdFx0dGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPSAwO1xyXG5cdFx0dGhpcy5kb21TdHlsZUVsbSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5wcm9jZXNzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBjcmVhdGVzIG5hbWVzIGZvciBjbGFzc2VzLFxyXG5cdC8vIElEcywgYW5pbWF0aW9ucyBhbmQgY3VzdG9tIHZhcmlhYmxlcy5cclxuXHRwcml2YXRlIHByb2Nlc3MoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHB1dCByZWZlcmVuY2UgdG8gdGhpcyBjb250YWluZXIgaW4gdGhlIHN5bWJvbCBwcm9wZXJ0eSBvZiB0aGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRcdHRoaXMuaW5zdGFuY2Vbc3ltQ29udGFpbmVyXSA9IHRoaXM7XHJcblxyXG5cdFx0Ly8gZ2V0IGNvbnRhaW5lcnMgZm9yIHRoZSBwYXJlbnQgYW5kIG93bmVyIHN0eWxlIGRlZmluaXRpb25cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Q29udGFpbmVyID0gdGhpcy5wYXJlbnRbc3ltQ29udGFpbmVyXTtcclxuXHJcblx0XHRpZiAodGhpcy5vd25lcilcclxuXHRcdFx0dGhpcy50b3BMZXZlbENvbnRhaW5lciA9IHRoaXMub3duZXJbc3ltQ29udGFpbmVyXTtcclxuXHJcblx0XHQvLyBpZiBvdXIgY29udGFpbmVyIGhhcyBwYXJlbnQgY29udGFpbmVyLCBwcmVmaXggb3VyIG5hbWUgd2l0aCB0aGUgdXBwZXIgb25lXHJcblx0XHRpZiAodGhpcy5wYXJlbnRDb250YWluZXIpXHJcblx0XHRcdHRoaXMubmFtZSA9IGAke3RoaXMucGFyZW50Q29udGFpbmVyLm5hbWV9XyR7dGhpcy5uYW1lfWA7XHJcblxyXG5cdFx0dGhpcy5pbXBvcnRzID0gW107XHJcblx0XHR0aGlzLm5hbWVzcGFjZXMgPSBbXTtcclxuXHRcdHRoaXMudmFycyA9IFtdO1xyXG5cdFx0dGhpcy5yZWZzID0gW107XHJcblx0XHR0aGlzLm90aGVyUnVsZXMgPSBbXTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRoZW0uXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggcHJvcE5hbWUsIHRoaXMuaW5zdGFuY2VbcHJvcE5hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nIHwgbnVsbCwgcHJvcFZhbDogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSZWZlcmVuY2UoIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgVmFyUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzVmFyUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgUnVsZSlcclxuXHRcdFx0dGhpcy5wcm9jZXNzUnVsZSggcHJvcE5hbWUsIHByb3BWYWwpO1xyXG5cdFx0ZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFJ1bGVMaWtlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlTGlrZSggcHJvcE5hbWUsIHByb3BWYWwpXHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NBcnJheSggcHJvcFZhbClcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHJlZmVyZW5jZSB0byBhbm90aGVyIHN0eWxlIGRlZmluaXRpb24gY3JlYXRlZCBieSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHByb2Nlc3NSZWZlcmVuY2UoIHJlZjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBpbnN0YW5jZSBoYXMgbm90IGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHByb2Nlc3MgaXQgYW5kIGluZGljYXRlIHRoYXQgaXQgaXNcclxuXHRcdC8vIGVtYmVkZGVkIGludG8gb3VyIGNvbnRhaW5lciBiZWNhdXNlIG9ubHkgZGVmaW5pdGlvbnMgY3JlYXRlZCB3aXRoIHRoZSAkZW1iZWQgZnVuY3Rpb25cclxuXHRcdC8vIGFyZSBub3QgcHJvY2Vzc2VkLlxyXG5cdFx0cHJvY2Vzc0luc3RhbmNlKCByZWYsIHRoaXMpO1xyXG5cdFx0dGhpcy5yZWZzLnB1c2goIHJlZik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1ZhclJ1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCB2YXJPYmo6IFZhclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAodmFyT2JqLmNvbnRhaW5lcilcclxuXHRcdFx0dmFyT2JqID0gdmFyT2JqLmNsb25lKCk7XHJcblxyXG5cdFx0dmFyT2JqLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHRcdHRoaXMudmFycy5wdXNoKCB2YXJPYmopO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgY291bnRlciBvYmplY3QuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUnVsZUxpa2UoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlTGlrZTogUnVsZUxpa2UpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGVzaGVldCwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHN0eWxlc2hlZXQuXHJcblx0XHRpZiAocnVsZUxpa2UuY29udGFpbmVyKVxyXG4gICAgICAgICAgICBydWxlTGlrZSA9IHJ1bGVMaWtlLmNsb25lKCk7XHJcblxyXG4gICAgICAgIHJ1bGVMaWtlLnByb2Nlc3MoIHRoaXMsIHRoaXMudG9wTGV2ZWxDb250YWluZXIsIHByb3BOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBSdWxlLWRlcml2ZWQgb2JqZWN0LlxyXG5cdHByaXZhdGUgcHJvY2Vzc1J1bGUoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBydWxlOiBSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IHByb2Nlc3NlZCBhcyBwYXJ0IG9mIGFub3RoZXIgaW5zdGFuY2UsIHdlIGNyZWF0ZSBhIGNsb25lXHJcblx0XHQvLyBvZiB0aGUgcnVsZSBhbmQgc2V0IGl0IHRvIG91ciBpbnN0YW5jZS5cclxuXHRcdGlmIChydWxlLm93bmVyQ29udGFpbmVyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUpXHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0gPSBydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBUT0RPOiBzdXBwb3J0IGFscmVhZHkgdXNlZCBydWxlcyBpbiBhbiBhcnJheVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJ1bGUucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cclxuXHRcdGlmIChydWxlIGluc3RhbmNlb2YgSW1wb3J0UnVsZSlcclxuXHRcdFx0dGhpcy5pbXBvcnRzLnB1c2goIHJ1bGUpO1xyXG5cdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIE5hbWVzcGFjZVJ1bGUpXHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcy5wdXNoKCBydWxlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5vdGhlclJ1bGVzLnB1c2goIHJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgcnVsZXMgZnJvbSB0aGUgZ2l2ZW4gYXJyYXkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzQXJyYXkoIHByb3BWYWxzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXByb3BWYWxzIHx8IHByb3BWYWxzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhvc2UgdGhhdCBhcmUgcnVsZXMuXHJcblx0XHRmb3IoIGxldCBwcm9wVmFsIG9mIHByb3BWYWxzKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NQcm9wZXJ0eSggbnVsbCwgcHJvcFZhbCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzICovXHJcblx0cHVibGljIGdldERlZmluaXRpb25JbnN0YW5jZSgpOiBTdHlsZURlZmluaXRpb25cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBjdXN0b20gQ1NTIHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgc2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUpXHJcbiAgICAgICAgICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBhIGdsb2JhbGx5IHVuaXF1ZSBDU1MgbmFtZSBmb3IgdGhlIGdpdmVuIHJ1bGUgbmFtZSB1bmxlc3MgdGhpcyBydWxlIG5hbWUgYWxyZWFkeVxyXG5cdCAqIGV4aXN0cyBlaXRoZXIgaW4gYSBiYXNlIGNsYXNzIG9yIGluIHRoZSBjaGFpbiBvZiBwYXJlbnQgZ3JvdXBpbmcgcnVsZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gaWYgcnVsZSBuYW1lIHdhcyBub3Qgc3BlY2lmaWVkLCBnZW5lcmF0ZSBpdCB1bmlxdWVseTsgb3RoZXJ3aXNlLCBjaGVjayB3aGV0aGVyIHdlXHJcblx0XHQvLyBhbHJlYWR5IGhhdmUgdGhpcyBydWxlIG5hbWU6IGlmIHllcywgcmV0dXJuIHRoZSBhbHJlYWR5IGFzc2lnbmVkIG5hbWUuIElmIHdlIGRpZG4ndFxyXG5cdFx0Ly8gZmluZCB0aGUgbmFtZSwgdHJ5IHRvIGZpbmQgaXQgaW4gdGhlIGJhc2UgY2xhc3Nlcyk7IGlmIG5vdCBmb3VuZCB0aGVyZSwgZ2VuZXJhdGUgaXRcclxuXHRcdC8vIHVzaW5nIHRoaXMgY29udGFpbmVyJ3MgbmFtZSBhbmQgdGhlIHJ1bGUgbmFtZSAobm90ZSB0aGF0IGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgYm90aFxyXG5cdFx0Ly8gY2FuIGJlIGdlbmVyYXRlZCB1bmlxdWVseSkuXHJcblx0XHRpZiAoIXJ1bGVOYW1lKVxyXG5cdFx0XHRyZXR1cm4gZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRlbHNlIGlmIChydWxlTmFtZSBpbiB0aGlzLmluc3RhbmNlICYmIFwibmFtZVwiIGluIHRoaXMuaW5zdGFuY2VbcnVsZU5hbWVdKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0ubmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZmluZCBvdXQgaWYgdGhlcmUgaXMgYSBydWxlIHdpdGggdGhpcyBuYW1lIGRlZmluZWQgaW4gYSBzdHlsZXNoZWV0IGluc3RhbmNlIGNyZWF0ZWQgZm9yXHJcblx0XHRcdC8vIGEgY2xhc3MgZnJvbSB0aGUgcHJvdG90eXBlIGNoYWluIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLlxyXG5cdFx0XHRsZXQgZXhpc3RpbmdOYW1lID0gZmluZE5hbWVGb3JSdWxlSW5Qcm90b3R5cGVDaGFpbiggdGhpcy5kZWZpbml0aW9uQ2xhc3MsIHJ1bGVOYW1lKTtcclxuXHRcdFx0cmV0dXJuIGV4aXN0aW5nTmFtZSA/IGV4aXN0aW5nTmFtZSA6IGdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS4gKi9cclxuXHRwdWJsaWMgaW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHBhcmVudCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdHRoaXMubmFtZXNwYWNlcyAmJiB0aGlzLm5hbWVzcGFjZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gYWN0aXZhdGUgcmVmZXJlbmNlZCBzdHlsZSBkZWZpbml0aW9uc1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bUNvbnRhaW5lcl0uYWN0aXZhdGUoKTtcclxuXHJcblx0XHQvLyBpc2VydCBvdXIgY3VzdG9tIHZhcmlhYmxlcyBpbiBhIFwiOnJvb3RcIiBydWxlXHJcblx0XHRpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT5cclxuXHRcdFx0XHR2YXJPYmoudG9Dc3NTdHJpbmcoKSkuZmlsdGVyKCB2ID0+IHYgIT0gbnVsbCkuam9pbihcIjtcIil9fWAsIHBhcmVudCkgYXMgQ1NTU3R5bGVSdWxlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGluc2VydCBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIENsZWFycyBhbGwgQ1NTIHJ1bGUgb2JqZWN0cyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdHB1YmxpYyBjbGVhclJ1bGVzKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgLy8gaW1wb3J0IGFuZCBuYW1lc3BhY2UgcnVsZXMgY2FuIG9ubHkgZXhpc3QgaW4gdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuY2xlYXIoKSk7XHJcblxyXG5cdFx0Ly8gZGVhY3RpdmF0ZSBpbXBvcnRlZCBzdHlsZXNoZWV0c1xyXG5cdFx0Zm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuXHRcdFx0cmVmW3N5bUNvbnRhaW5lcl0uZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyB0aGlzIHN0eWxlc2hlZXQgaW50byBET00uICovXHJcblx0cHVibGljIGFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoKyt0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gb25seSB0aGUgdG9wLWxldmVsIG5vdC1lbWJlZGRlZCBzdHlsZSBkZWZpbml0aW9ucyBjcmVhdGUgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmVtYmVkZGluZ0NvbnRhaW5lcilcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gdGhpcy5lbWJlZGRpbmdDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblx0XHRcdGVsc2UgaWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0uaWQgPSB0aGlzLm5hbWU7XHJcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggdGhpcy5kb21TdHlsZUVsbSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSB0aGlzLnRvcExldmVsQ29udGFpbmVyLmRvbVN0eWxlRWxtO1xyXG5cclxuXHRcdFx0dGhpcy5pbnNlcnRSdWxlcyggdGhpcy5kb21TdHlsZUVsbSEuc2hlZXQgYXMgQ1NTU3R5bGVTaGVldCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoaXMgc3R5bGVzaGVldCBmcm9tIERPTS4gKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZ3VhcmQgZnJvbSBleHRyYSBkZWFjdGl2YXRlIGNhbGxzXHJcblx0XHRpZiAodGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoLS10aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jbGVhclJ1bGVzKCk7XHJcblxyXG5cdFx0XHQvLyBvbmx5IHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaWl0aW9uIGNyZWF0ZXMgdGhlIGA8c3R5bGU+YCBlbGVtZW50XHJcblx0XHRcdGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSEucmVtb3ZlKCk7XHJcblxyXG5cdFx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFdyaXRlcyBhbGwgcnVsZXMgcmVjdXJzaXZlbHkgdG8gdGhlIGdpdmVuIHN0cmluZy4gKi9cclxuXHRwdWJsaWMgc2VyaWFsaXplUnVsZXMoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpbnNlcnQgQGltcG9ydCBhbmQgQG5hbWVzcGFjZSBydWxlcyBhcyB0aGV5IG11c3QgYmUgYmVmb3JlIG90aGVyIHJ1bGVzLiBJZiB0aGUgcGFyZW50IGlzIGEgZ3JvdXBpbmdcclxuXHRcdC8vIHJ1bGUsIGRvbid0IGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGF0IGFsbFxyXG5cdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY3RpdmF0ZSByZWZlcmVuY2VkIHN0eWxlIGRlZmluaXRpb25zXHJcbiAgICAgICAgZm9yKCBsZXQgcmVmIG9mIHRoaXMucmVmcylcclxuICAgICAgICAgICAgY3R4LmFkZFN0eWxlRGVmaW5pdGlvbiggcmVmKTtcclxuXHJcblx0XHQvLyBzZXJpYWxpemUgb3VyIGN1c3RvbSB2YXJpYWJsZXMgaW4gYSBcIjpyb290XCIgcnVsZVxyXG5cdFx0aWYgKHRoaXMudmFycy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHRjdHguYWRkUnVsZVRleHQoIGA6cm9vdCB7JHt0aGlzLnZhcnMubWFwKCB2YXJPYmogPT4gdmFyT2JqLnRvQ3NzU3RyaW5nKCkpLmZpbHRlciggdiA9PiB2ICE9IG51bGwpLmpvaW4oXCI7XCIpfX1gKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZXJpYWxpemUgYWxsIG90aGVyIHJ1bGVzXHJcblx0XHR0aGlzLm90aGVyUnVsZXMuZm9yRWFjaCggcnVsZSA9PiBydWxlLnNlcmlhbGl6ZSggY3R4KSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgY29udGFpbmVyIGlzIGZvciB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24uXHJcblx0cHJpdmF0ZSBnZXQgaXNUb3BMZXZlbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3duZXIgPT09IG51bGwgfHwgdGhpcy5vd25lciA9PT0gdGhpcy5pbnN0YW5jZSB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBwcm9jZXNzZWQuXHJcblx0cHVibGljIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGlzIGNvbnRhaW5lciBjcmVhdGVzIGFuIGluc3RhbmNlIG9mLlxyXG5cdHByaXZhdGUgZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVEZWZpbml0aW9uQ2xhc3NcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGlzIGNvbnRhaW5lciwgd2hpY2gsIGRlcGVuZGluZyBvbiB0aGUgbW9kZSwgaXMgZWl0aGVyIHRha2VuIGZyb20gdGhlIGNsYXNzXHJcblx0Ly8gZGVmaW5pdGlvbiBuYW1lIG9yIGdlbmVyYXRlZCB1bmlxdWVseS5cclxuXHRwcml2YXRlIG5hbWU6IHN0cmluZ1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgcGFyZW50IHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW4gdGhlIGNoYWluIG9mIGdyb3VwaW5nIHJ1bGVzIHRoYXRcclxuXHQvLyBsZWFkIHRvIHRoaXMgcnVsZSBjb250YWluZXIuIEZvciB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbnMsIHRoaXMgaXMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgcGFyZW50PzogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIHBhcmVudCBzdHlsZSBkZWZpbnRpb24uIElmIG91ciBjb250YWluZXIgaXMgdG9wLWxldmVsLFxyXG5cdC8vIHRoaXMgcHJvcGVydHkgaXMgdW5kZWZpbmVkLlxyXG5cdHByaXZhdGUgcGFyZW50Q29udGFpbmVyPzogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBncm91cGluZyBydWxlcyB0aGF0XHJcblx0Ly8gbGVhZCB0byB0aGlzIHJ1bGUgY29udGFpbmVyLiBGb3IgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb25zLCB0aGlzIHBvaW50cyB0byB0aGUgc2FtZVxyXG5cdC8vIHNpbmdsZXRvbiBkZWZpbml0aW9uIGluc3RhbmNlIGFzIHRoZSAnaW5zdGFuY2UnIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgb3duZXI6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdGhhdCBiZWxvbmdzIHRvIHRoZSBvd25lciBzdHlsZSBkZWZpbnRpb24uIElmIG91ciBjb250YWluZXIgaXMgdG9wLWxldmVsLFxyXG5cdC8vIHRoaXMgcHJvcGVydHkgcG9pbnRzIHRvIGB0aGlzYC4gTmFtZXMgZm9yIG5hbWVkIHJ1bGVzIGFyZSBjcmVhdGVkIHVzaW5nIHRoaXMgY29udGFpbmVyLlxyXG5cdHByaXZhdGUgdG9wTGV2ZWxDb250YWluZXI6IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIENvbnRhaW5lciBjb3JyZXNwb25kaW5nIHRvIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIHRoYXQgaXMgZW1iZWRkaW5nIG91ciBpbnN0YW5jZVxyXG5cdC8vICh0aGF0IGlzLCB0aGUgaW5zdGFuY2UgY29ycmVzcG9uZGluZyB0byBvdXIgY29udGFpbmVyKS4gSWYgZGVmaW5lZCwgdGhpcyBjb250YWluZXInc1xyXG5cdC8vIGA8c3R5bGU+YCBlbGVtZW50IGlzIHVzZWQgdG8gaW5zZXJ0IENTUyBydWxlcyBpbnRvIGluc3RlYWQgb2YgdG9wTGV2ZWxDb250YWluZXIuXHJcblx0cHJpdmF0ZSBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBMaXN0IG9mIHJlZmVyZW5jZXMgdG8gb3RoZXIgc3R5bGUgZGVmaW5pdGlvbnMgY3JlYWVkIHZpYSB0aGUgJHVzZSBmdW5jdGlvbi5cclxuXHRwcml2YXRlIHJlZnM6IFN0eWxlRGVmaW5pdGlvbltdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBpbXBvcnQgcnVsZXNcclxuXHRwcml2YXRlIGltcG9ydHM6IEltcG9ydFJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBAbmFtZXNwYWNlIHJ1bGVzXHJcblx0cHJpdmF0ZSBuYW1lc3BhY2VzOiBOYW1lc3BhY2VSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgY3VzdG9tIHZhcmlhYmxlIHJ1bGVzLlxyXG5cdHByaXZhdGUgdmFyczogVmFyUnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIHJ1bGVzIHRoYXQgYXJlIG5vdCBpbXBvcnRzLCBuYW1lc3BhY2VzLCBjdXN0b20gdmFycywgcmVmZXJlbmNlcyBvciBncm91cGluZyBydWxlcy5cclxuXHRwcml2YXRlIG90aGVyUnVsZXM6IFJ1bGVbXTtcclxuXHJcblx0Ly8gXCI6cm9vdFwiIHJ1bGUgd2hlcmUgYWxsIGN1c3RvbSBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIGFyZSBkZWZpbmVkLlxyXG5cdHByaXZhdGUgY3NzQ3VzdG9tVmFyU3R5bGVSdWxlOiBDU1NTdHlsZVJ1bGUgfCBudWxsO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgY291bnQgb2YgYWN0aXZhdGlvbiByZXF1ZXN0cy5cclxuXHRwcml2YXRlIGFjdGl2YXRpb25SZWZDb3VudDogbnVtYmVyO1xyXG5cclxuXHQvLyBET00gc3R5bGUgZWxlbW50XHJcblx0cHVibGljIGRvbVN0eWxlRWxtOiBIVE1MU3R5bGVFbGVtZW50IHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTmFtZSBnZW5lcmF0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHNob3J0KSBydWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gZW5hYmxlXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2VuYWJsZVNob3J0TmFtZXMoIGVuYWJsZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0c191c2VVbmlxdWVTdHlsZU5hbWVzID0gZW5hYmxlO1xyXG5cdHNfdW5pcXVlU3R5bGVOYW1lc1ByZWZpeCA9IHByZWZpeCA/IHByZWZpeCA6IFwiblwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIG5hbWVzIGZvciBzdHlsZSBlbGVtZW50cyAoY2xhc3NlcywgIGFuaW1hdGlvbnMsIGV0Yy4pXHJcbiAqIEJ5IGRlZmF1bHQgdGhpcyBmbGFnIGlzIHRydWUgaW4gdGhlIFJlbGVhc2UgYnVpbGQgb2YgdGhlIGxpYnJhcnkgYW5kIGZhbHNlIGluIHRoZSBEZWJ1ZyBidWlsZC5cclxuICovXHJcbmxldCBzX3VzZVVuaXF1ZVN0eWxlTmFtZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuLy8vICNpZiBERUJVR1xyXG5zX3VzZVVuaXF1ZVN0eWxlTmFtZXMgPSBmYWxzZTtcclxuLy8vICNlbmRpZlxyXG5cclxuLyoqXHJcbiAqIFByZWZpeCB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBzdHlsZSBuYW1lcy4gSWYgdW5kZWZpbmVkLCBhIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqL1xyXG5sZXQgc191bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gXCJuXCI7XHJcblxyXG4vKiogTmV4dCBudW1iZXIgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgaWRlbnRpZmllcnMuICovXHJcbmxldCBzX25leHRVbmlxdWVJRCA9IDE7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgbmFtZSB0byB1c2UgZm9yIHRoZSBnaXZlbiBydWxlIGZyb20gdGhlIGdpdmVuIHN0eWxlIHNoZWV0LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKCBzaGVldE5hbWU6IHN0cmluZywgcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHNfdXNlVW5pcXVlU3R5bGVOYW1lc1xyXG5cdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHNfdW5pcXVlU3R5bGVOYW1lc1ByZWZpeClcclxuXHRcdDogYCR7c2hlZXROYW1lfV8ke3J1bGVOYW1lfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBuYW1lLCB3aGljaCBjYW4gYmUgdXNlZCBlaXRoZXIgZm9yIHN0eWxlIGVsZW1lbnQncyBJRCBvciBvciBjbGFzcyxcclxuICogaWRlbnRpZmllciBvciBhbmltYXRpb24gbmFtZS4gTmFtZXMgYXJlIGdlbmVyYXRlZCB1c2luZyBhIHNpbXBsZSBpbmNyZW1lbnRpbmcgbnVtYmVyLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVOYW1lKCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiAocHJlZml4ID8gcHJlZml4IDogc191bmlxdWVTdHlsZU5hbWVzUHJlZml4KSArIHNfbmV4dFVuaXF1ZUlEKys7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gTG9va3MgdXAgYSBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lIGluIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb25cclxuLy8gY2xhc3MuIElmIGZvdW5kIGFuZCBpZiB0aGUgcHJvcGVydHkgaXMgYSBydWxlLCB0aGVuIHJldHVybnMgdGhlIG5hbWUgYXNzaWduZWQgZm9yIGl0LlxyXG5mdW5jdGlvbiBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcywgcnVsZU5hbWU6IHN0cmluZylcclxue1xyXG5cdGlmICghZGVmaW5pdGlvbkNsYXNzKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdC8vIGxvb3Agb3ZlciBwcm90b3R5cGVzXHJcbiAgICBmb3IoIGxldCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGRlZmluaXRpb25DbGFzcyk7XHJcbiAgICAgICAgICAgIGJhc2VDbGFzcyAhPT0gU3R5bGVEZWZpbml0aW9uO1xyXG4gICAgICAgICAgICAgICAgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBiYXNlQ2xhc3MpKVxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBiYXNlIGNsYXNzIGFscmVhZHkgaGFzIGFuIGFzc29jaWF0ZWQgaW5zdGFuY2U7IGlmIHllcywgY2hlY2sgd2hldGhlclxyXG5cdFx0Ly8gaXQgaGFzZSBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIHJ1bGUgbmFtZS4gSWYgeWVzLCB0aGVuIHVzZSB0aGlzIHJ1bGUncyBhbHJlYWR5XHJcbiAgICAgICAgLy8gZ2VuZXJhdGVkIG5hbWUgKGlmIGV4aXN0cykuXHJcblx0XHRpZiAoYmFzZUNsYXNzLmhhc093blByb3BlcnR5KHN5bUluc3RhbmNlKSlcclxuXHRcdHtcclxuICAgICAgICAgICAgbGV0IGJhc2VJbnN0ID0gYmFzZUNsYXNzW3N5bUluc3RhbmNlXTtcclxuXHRcdFx0aWYgKGJhc2VJbnN0ICYmICBiYXNlSW5zdFtydWxlTmFtZV0gIT0gbnVsbCAmJiBcIm5hbWVcIiBpbiBiYXNlSW5zdFtydWxlTmFtZV0pXHJcblx0XHRcdFx0cmV0dXJuIGJhc2VJbnN0W3J1bGVOYW1lXS5uYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb2Nlc3NpbmcgZnVuY3Rpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGVzaGVldCBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBhc3NpZ25zIG5hbWVzIHRvIGl0cyBydWxlcy5cclxuICogSWYgdGhlIHBhcmFtZXRlciBpcyBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgd2UgY2hlY2sgd2hldGhlciB0aGVyZSBpcyBhbiBpbnN0YW5jZSBhbHJlYWR5XHJcbiAqIGNyZWF0ZWQgZm9yIGl0IGFzIGEgY2xhc3Mgd2lsbCBoYXZlIG9ubHkgYSBzaW5nbGUgYXNzb2NpYXRlZCBpbnN0YW5lIG5vIG1hdHRlciBob3cgbWFueSB0aW1lc1xyXG4gKiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuICogXHJcbiAqIElmIHRoZSBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IChhbiBpbnN0YW5jZSBvZiB0aGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzKSB0aGVuIHdlIGNoZWNrIHdoZXRoZXJcclxuICogaXQgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQuIElmIHllcywgd2UganVzdCByZXR1cm4gaXQgYmFjazsgaWYgbm8sIHdlIGFzc2lnbiBuZXcgdW5pcXVlIG5hbWVzXHJcbiAqIHRvIGl0cyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0T3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdHBhcmVudD86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG5cdGlmICghaW5zdE9yQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gaW5zdE9yQ2xhc3MgaGFzIHR5cGUgXCJvYmplY3RcIiBpZiBpdCBpcyBhbiBpbnN0YW5jZSBhbmQgXCJmdW5jdGlvblwiIGlmIGl0IGlzIGEgY2xhc3NcclxuXHRpZiAodHlwZW9mIGluc3RPckNsYXNzID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdHByb2Nlc3NJbnN0YW5jZSggaW5zdE9yQ2xhc3MpO1xyXG5cdFx0cmV0dXJuIGluc3RPckNsYXNzO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0XHRyZXR1cm4gcHJvY2Vzc0NsYXNzKCBpbnN0T3JDbGFzcywgcGFyZW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGJ5IGNyZWF0aW5nIGl0cyBpbnN0YW5jZSBhbmQgYXNzb2NpYXRpbmcgYVxyXG4gKiBydWxlIGNvbnRhaW5lciBvYmplY3Qgd2l0aCBpdC4gVGhlIGNsYXNzIHdpbGwgYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBpbnN0YW5jZSB1c2luZyBhXHJcbiAqIFN5bWJvbCBwcm9wZXJ0eS4gVGhlIHBhcmVudCBwYXJhbWV0ZXIgaXMgYSByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBzdHlsZSBkZWZpaXRpb25cclxuICogb2JqZWN0IG9yIG51bGwgaWYgdGhlIGdpdmVuIGNsYXNzIGlzIGl0c2VsZiBhIHRvcC1sZXZlbCBjbGFzcyAodGhhdCBpcywgaXMgbm90IGEgY2xhc3NcclxuICogdGhhdCBkZWZpbmVzIHJ1bGVzIHdpdGhpbiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMpLlxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0NsYXNzKCBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzcyxcclxuXHRwYXJlbnQ/OiBTdHlsZURlZmluaXRpb24pOiBTdHlsZURlZmluaXRpb24gfCBudWxsXHJcbntcclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBkZWZpbml0aW9uIGNsYXNzIGlzIGFscmVhZHkgYXNzb2NpYXRlZCB3aXRoIGFuIGluc3RhbmNlXHJcbiAgICBpZiAoZGVmaW5pdGlvbkNsYXNzLmhhc093blByb3BlcnR5KHN5bUluc3RhbmNlKSlcclxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbkNsYXNzW3N5bUluc3RhbmNlXVxyXG5cclxuICAgIC8vIHJlY3Vyc2l2ZWx5IHByb2Nlc3MgYWxsIGJhc2UgY2xhc3NlcyBzbyB0aGF0IHJ1bGUgbmFtZXMgYXJlIGdlbmVyYXRlZC4gV2UgZG9uJ3QgYWN0aXZhdGUgc3R5bGVzXHJcbiAgICAvLyBmb3IgdGhlc2UgY2xhc3NlcyBiZWNhdXNlIGRlcml2ZWQgY2xhc3NlcyB3aWxsIGhhdmUgYWxsIHRoZSBydWxlcyBmcm9tIGFsbCB0aGUgYmFzZSBjbGFzc2VzXHJcbiAgICAvLyBhcyB0aGVpciBvd24gYW5kIHNvIHRoZXNlIHJ1bGVzIHdpbGwgYmUgYWN0aXZhdGVkIGFzIHBhcnQgb2YgdGhlIGRlcml2ZWQgY2xhc3MuXHJcbiAgICBsZXQgYmFzZUNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKCBkZWZpbml0aW9uQ2xhc3MpO1xyXG4gICAgaWYgKGJhc2VDbGFzcyAhPT0gU3R5bGVEZWZpbml0aW9uKVxyXG5cdFx0cHJvY2Vzc0NsYXNzKCBiYXNlQ2xhc3MsIHBhcmVudCk7XHJcblxyXG5cdHRyeVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGRlZmluaXRpb24gY2xhc3NcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBkZWZpbml0aW9uQ2xhc3MoIHBhcmVudCk7XHJcblxyXG5cdFx0Ly8gZ2V0IHRoZSBuYW1lIGZvciBvdXIgY29udGFpbmVyXHJcblx0XHRsZXQgbmFtZSA9IHNfdXNlVW5pcXVlU3R5bGVOYW1lcyB8fCAhZGVmaW5pdGlvbkNsYXNzLm5hbWVcclxuXHRcdFx0PyBnZW5lcmF0ZVVuaXF1ZU5hbWUoKVxyXG5cdFx0XHQ6IGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cclxuXHRcdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSk7XHJcblx0XHRkZWZpbml0aW9uQ2xhc3Nbc3ltSW5zdGFuY2VdID0gaW5zdGFuY2U7XHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG5cdGNhdGNoKCBlcnIpXHJcblx0e1xyXG5cdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGluc3RhbnRpYXRpbmcgU3R5bGUgRGVmaW5pdGlvbiBDbGFzcyAnJHtkZWZpbml0aW9uQ2xhc3MubmFtZX0nYCwgZXJyKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlIGFuZCBhc3NpZ25zIG5hbWVzIHRvIGl0cyBydWxlcy4gSWYgdGhlXHJcbiAqIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLCB3ZSBkbyBub3RoaW5nOyBvdGhlcndpc2UsIHdlIGFzc2lnbiBuZXcgdW5pcXVlIG5hbWVzXHJcbiAqIHRvIGl0cyBydWxlcy5cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgZW1iZWRkaW5nQ29udGFpbmVyPzogUnVsZUNvbnRhaW5lcik6IHZvaWRcclxue1xyXG5cdC8vIGlmIHRoZSBpbnN0YW5jZSBpcyBhbHJlYWR5IHByb2Nlc3NlZCwganVzdCByZXR1cm47IGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlXHJcblx0Ly8gZW1iZWRkaW5nQ29udGFpbmVyIHBhcmFtZXRlci5cclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGluc3RhbmNlW3N5bUNvbnRhaW5lcl0gYXMgUnVsZUNvbnRhaW5lcjtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHRcdHJldHVybjtcclxuXHJcblx0Ly8gZ2V0IHRoZSBuYW1lIGZvciBvdXIgY29udGFpbmVyXHJcblx0bGV0IG5hbWUgPSBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRpZiAoIXNfdXNlVW5pcXVlU3R5bGVOYW1lcylcclxuXHR7XHJcblx0XHRsZXQgZGVmaW5pdGlvbkNsYXNzID0gaW5zdGFuY2UuY29uc3RydWN0b3I7XHJcblx0XHRpZiAoZGVmaW5pdGlvbkNsYXNzLm5hbWUpXHJcblx0XHRcdG5hbWUgKz0gXCJfXCIgKyBkZWZpbml0aW9uQ2xhc3MubmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIGNyZWF0ZSBjb250YWluZXIgLSB0aGlzIHdpbGwgYXNzb2NpYXRlIHRoZSBuZXcgY29udGFpbmVyIHdpdGggdGhlIGluc3RhbmNlIGFuZCBwcm9jZXNzXHJcblx0Ly8gdGhlIHJ1bGVzLlxyXG5cdG5ldyBSdWxlQ29udGFpbmVyKCBpbnN0YW5jZSwgbmFtZSwgZW1iZWRkaW5nQ29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBydWxlIGNvbnRhaW5lciBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiBSdWxlQ29udGFpbmVyXHJcbntcclxuXHRyZXR1cm4gaW5zdGFuY2UgPyBpbnN0YW5jZVtzeW1Db250YWluZXJdIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmIHRoZSBpbnB1dCBvYmplY3QgaXNcclxuICogbm90IGEgc3R5bGUgZGVmaW5pdGlvbiBidXQgYSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLCBvYnRhaW4gc3R5bGUgZGVmaW5pdGlvbiBieSBjYWxsaW5nIHRoZSAkdXNlXHJcbiAqIGZ1bmN0aW9uLiBOb3RlIHRoYXQgZWFjaCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lc1xyXG4gKiBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZCB0byBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXJcclxuICogZ29lcyB1cCB0byAxLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlSW5zdGFuY2UoIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24sIGNvdW50OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdFx0cnVsZUNvbnRhaW5lci5hY3RpdmF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVhY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYnkgcmVtb3ZpbmcgaXRzIHJ1bGVzIGZyb20gRE9NLiBOb3RlIHRoYXQgZWFjaCBzdHlsZVxyXG4gKiBkZWZpbml0aW9uIG9iamVjdCBtYWludGFpbnMgYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZFxyXG4gKiBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSByZW1vdmVkIGZyb20gRE9NIG9ubHkgd2hlbiB0aGlzIHJlZmVyZW5jZSBjb3VudGVyIGdvZXMgZG93biB0byAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY291bnQ6IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxyXG5cdFx0XHRydWxlQ29udGFpbmVyLmRlYWN0aXZhdGUoKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gdG8gdGhlIGdpdmVuIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG57XHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHQgICAgcnVsZUNvbnRhaW5lci5zZXJpYWxpemVSdWxlcyggY3R4KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lDdXN0b21WYXIsIE9uZU9yTWFueX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG5cdFBzZXVkb0VudGl0eSwgQ3NzU2VsZWN0b3IsIFBhZ2VQc2V1ZG9DbGFzcywgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHlcclxufSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHJvcGVydGllcyB1c2VkIGluIHRoZSBbW0NvbWJpbmVkU3R5bGVzZXRdXSB3aGljaCBhcmUgdXNlZCB0byBkZWZpbmUgZGVwZW5kZW50IHJ1bGVzICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yQ29tYmluYXRvciA9IFwiJlwiIHwgXCImLFwiIHwgXCImIFwiIHwgXCImPlwiIHwgXCImK1wiIHwgXCImflwiIHwgXCIsJlwiIHwgXCIgJlwiIHwgXCI+JlwiIHwgXCIrJlwiIHwgXCJ+JlwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvbWJpbmVkU3R5bGVzZXQgdHlwZSBleHRlbmRzIHRoZSBTdHlsZXNldCB0eXBlIHdpdGggY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgcHJvdmlkZVxyXG4gKiBhZGRpdGlvbmFsIG1lYW5pbmcgdG8gdGhlIHN0eWxlc2V0IGFuZCBhbGxvdyBidWlsZGluZyBkZXBlbmRlbnQgc3R5bGUgcnVsZXM6XHJcbiAqIC0gVGhlIGBcIitcImAgcHJvcGVydHkgc3BlY2lmaWVzIG9uZSBvciBtb3JlIHBhcmVudCBzdHlsZSBydWxlcy4gVGhpcyBhbGxvd3Mgc3BlY2lmeWluZ1xyXG4gKiAgIHBhcmVudCBydWxlcyB1c2luZyBhIGNvbnZlbmllbnQgc3R5bGUtcHJvcGVydHktbGlrZSBub3RhdGlvbi5cclxuICogLSBQcm9wZXJ0aWVzIHdpdGggcHNldWRvIGNsYXNzIG5hbWVzIChlLmcuIFwiOmhvdmVyXCIpIG9yIHBzZXVkbyBlbGVtZW50IG5hbWVzIChlLmcuIFwiOjphZnRlclwiKS5cclxuICogICBUaGVzZSBwcm9wZXJ0aWVzIGRlZmluZSBhIHN0eWxlc2V0IHRoYXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgc2VsZWN0b3Igb2J0YWluZWQgYnkgdXNpbmdcclxuICogICB0aGUgb3JpZ2luYWwgc3R5bGVzZXQncyBvd25lciBmb2xsb3dlZCBieSB0aGUgZ2l2ZW4gcHNldWRvIGNsYXNzIG9yIHBzZXVkbyBlbGVtZW50LlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBuYW1lcyBvZiBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIChlLmcuIFwiOm50aC1jaGlsZFwiKSBvciBwYXJhbWV0ZXJpemVkXHJcbiAqICAgcHNldWRvIGVsZW1lbnRzIChlLmcuIFwiOjpzbG90dGVkXCIpLiBUaGVzZSBwcm9wZXJ0aWVzIGNvbnRhaW4gYSB0dXBsZSwgd2hlcmUgdGhlIGZpcnN0XHJcbiAqICAgZWxlbWVudCBpcyB0aGUgcGFyYW1ldGVyIGZvciB0aGUgc2VsZWN0b3IgYW5kIHRoZSBzZWNvbmQgZWxlbWVudCBpcyB0aGUgc3R5bGVzZXQuXHJcbiAqICAgVGhlc2UgcHJvcGVydGllcyBkZWZpbmUgYSBzdHlsZXNldCB0aGF0IHdpbGwgYmUgYXNzaWduZWQgdG8gdGhlIHNlbGVjdG9yIG9idGFpbmVkIGJ5IHVzaW5nXHJcbiAqICAgdGhlIG9yaWdpbmFsIHN0eWxlc2V0J3Mgb3duZXIgZm9sbG93ZWQgYnkgdGhlIGdpdmVuIHBzZXVkbyBjbGFzcyBvciBwc2V1ZG8gZWxlbWVudC5cclxuICogLSBQcm9wZXJ0aWVzIHdpdGggdGhlIGFtcGVyc2FuZCBzeW1ib2wgKCcmJykgdGhhdCBjb250YWluIGFycmF5cyBvZiB0d28tZWxlbWVudCB0dXBsZXMgZWFjaFxyXG4gKiAgIGRlZmluaW5nIGEgc2VsZWN0b3IgYW5kIGEgc3R5bGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHNlbGVjdG9yLiBTZWxlY3RvcnMgY2FuIHVzZSB0aGVcclxuICogICBhbXBlcnNhbmQgc3ltYm9sIHRvIHJlZmVyIHRvIHRoZSBwYXJlbnQgc3R5bGUgc2VsZWN0b3IuIElmIHRoZSBhbXBlcnNhbmQgc3ltYm9sIGlzIG5vdCB1c2VkLFxyXG4gKiAgIHRoZSBzZWxlY3RvciB3aWxsIGJlIHNpbXBseSBhcHBlbmRlZCB0byB0aGUgcGFyZW50IHNlbGVjdG9yLlxyXG4gKiBcclxuICogRnVuY3Rpb25zIHRoYXQgcmV0dXJuIHN0eWxlIHJ1bGVzIChlLmcuICRjbGFzcykgYWNjZXB0IHRoZSBDb21iaW5lZFN0eWxlc2V0IGFzIGEgcGFyYW1ldGVyLFxyXG4gKiBmb3IgZXhhbXBsZTpcclxuICogXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogY2xhc3MgTXlTdHlsZXMgZXh0ZW5kcyBjc3MuU3R5bGVEZWZpbml0aW9uXHJcbiAqIHtcclxuICogICAgIGNsYXNzMSA9IGNzcy4kY2xhc3Moe30pXHJcbiAqICAgICBjbGFzczIgPSBjc3MuJGNsYXNzKHtcclxuICogICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICogICAgICAgICBcIjpob3ZlclwiIDogeyBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwiIH0sXHJcbiAqICAgICAgICAgXCImXCI6IFtcclxuICogICAgICAgICAgICAgWyBcImxpID4gJlwiLCB7IGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIiB9IF0sXHJcbiAqICAgICAgICAgICAgIFsgdGhpcy5jbGFzczEsIHsgYmFja2dyb3VuZENvbG9yOiBcIm9yYW5nZVwiIH0gXVxyXG4gKiAgICAgICAgIF1cclxuICogICAgIH0pXHJcbiAqIH1cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGlzIHdpbGwgdHJhbnNsYXRlIHRvIHRoZSBmb2xsb3dpbmcgQ1NTIChpbiByZWFsaXR5LCBjbGFzcyBuYW1lcyBhcmUgYXV0by1nZW5lcmF0ZWQpOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIC5jbGFzczIgeyBiYWNrZ3JvdW5kQ29sb3I6IHdoaXRlOyB9XHJcbiAqIC5jbGFzczI6aG92ZXIgeyBiYWNrZ3JvdW5kQ29sb3I6IGdyZXk7IH1cclxuICogbGkgPiAuY2xhc3MyIHsgYmFja2dyb3VuZENvbG9yOiB5ZWxsb3c7IH1cclxuICogLmNsYXNzMi5jbGFzczEgeyBiYWNrZ3JvdW5kQ29sb3I6IG9yYW5nZTsgfVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIENvbWJpbmVkU3R5bGVzZXQgPSBTdHlsZXNldCAmXHJcblx0eyBcIitcIj86IElTdHlsZVJ1bGUgfCBJU3R5bGVSdWxlW10gfSAmXHJcblx0eyBbSyBpbiBQc2V1ZG9FbnRpdHldPzogQ29tYmluZWRTdHlsZXNldCB9ICZcclxuXHR7IFtLIGluIGtleW9mIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5XT86IFtJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eVtLXSwgQ29tYmluZWRTdHlsZXNldF1bXSB9ICZcclxuXHR7IFtLIGluIFNlbGVjdG9yQ29tYmluYXRvcl0/OiBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW10gfTtcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGUgaW50ZXJmYWNlIGlzIGEgYmFzZSBpbnRlcmZhY2UgdGhhdCBpcyBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlXHJcbntcclxuXHQvKiogU09NIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lZFJ1bGUgaW50ZXJmYWNlIGlzIGEgYmFzZSBpbnRlcmZhY2UgaW1wbGVtZW50ZWQgYnkgYWxsIHJ1bGVzIHRoYXQgaGF2ZSBhIG5hbWU7IHRoYXQgaXMsXHJcbiAqIGNsYXNzLCBJRCwga2V5ZnJhbWVzIGFuZCBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0cnVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgZGVwZW5kZW50IHJ1bGVzIG9mIGEgc3R5bGUgcnVsZVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRGVwZW5kZW50UnVsZXMgPVxyXG5cdHsgW0sgaW4gUHNldWRvRW50aXR5XT86IElTdHlsZVJ1bGUgfSAmXHJcblx0eyBbSyBpbiBTZWxlY3RvckNvbWJpbmF0b3JdPzogSVN0eWxlUnVsZVtdIH0gJlxyXG5cdHsgW0sgaW4ga2V5b2YgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHldPzogSVN0eWxlUnVsZVtdIH07XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsaW5nIHJ1bGUgaW4gYSBzdHlsZSBzaGVldC4gU3R5bGUgcnVsZXMgY2FuIGJlIHVzZWRcclxuICogYW55d2hlcmUgd2hlcmUgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgZGVmaW5lZDogY2xhc3MgcnVsZXMsIElEIHJ1bGVzLCBzZWxlY3RvciBydWxlcyxcclxuICoga2V5ZnJhbWVzLCBldGMuIFN0eWxlUnVsZSBkZWZpbmVzIGEgc3R5bGVzZXQgYW5kIGNhbiBvcHRpb25hbGx5IHBvaW50IHRvIG9uZSBvciBtb3JlIHN0eWxlIHJ1bGVzXHJcbiAqIGZyb20gd2hpY2ggaXQgaW5oZXJpdHMuIEEgc3R5bGVzZXQgY29tYmluZXMgYWxsIHRoZSBwcm9wZXJ0aWVzIGZyb20gaXRzIG93biBwcm9wZXJ0eSBibG9jayBhc1xyXG4gKiB3ZWxsIGFzIGZyb20gYWxsIG9mIHN0eWxlIHJ1bGVzIGl0IGluaGVyaXRlcyBmcm9tLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRyZWFkb25seSBzZWxlY3RvclRleHQ6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogT2JqZWN0IGNvbnRhaW5pbmcgZGVwZW5kZW50IHJ1bGVzLiBQcm9wZXJ0eSBuYW1lcyBhcmUgdGFrZW4gZnJvbSBzcGVjaWFsIHByb3BlcnRpZXNcclxuXHQgKiBvZiB0aGUgQ29tYmluZWRTdHlsZXNldC4gVGhpcyBvYmplY3QgYWxsb3dzIGNhbGxlcnMgdG8gYWNjZXNzIGRlcGVuZGVudCBydWxlcyB0byBjaGFuZ2VcclxuXHQgKiBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgcHJvZ3JhbW1hdGljYWxseS5cclxuXHQgKi9cclxuXHRyZWFkb25seSBkZXBlbmRlbnRSdWxlczogRGVwZW5kZW50UnVsZXM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMvcmVtb3ZlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eS4gSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQgb3IgbnVsbCwgdGhlIHByb3BlcnR5XHJcblx0ICogaXMgcmVtb3ZlZCBmcm9tIHRoZSBydWxlJ3Mgc3R5bGVzZXQuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0c2V0UHJvcDxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIG5hbWU6IEssIHZhbHVlOiBFeHRlbmRlZFN0eWxlc2V0W0tdLFxyXG5cdFx0aW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMvcmVtb3ZlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3Rtb20gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gY3VzdG9tVmFyIElWYXJSdWxlIG9iamVjdCBkZWZpbmluZyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS4gSWYgdGhpcyB2YWx1ZSBpcyB1bmRlZmluZWQgb3IgbnVsbCwgdGhlIHByb3BlcnR5XHJcblx0ICogaXMgcmVtb3ZlZCBmcm9tIHRoZSBydWxlJ3Mgc3R5bGVzZXQuXHJcblx0ICogQHBhcmFtIGltcG9ydGFudCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWcgb24gdGhlIHByb3BlcnR5IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBzY2hlZHVsZXJUeXBlIElEIG9mIGEgcmVnaXN0ZXJlZCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgdG8gd3JpdGUgdGhlIHByb3BlcnR5XHJcblx0ICogdmFsdWUgdG8gdGhlIERPTS4gSWYgdW5kZWZpbmVkLCB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0c2V0Q3VzdG9tUHJvcDxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggY3VzdG9tVmFyOiBJVmFyUnVsZTxLPiwgdmFsdWU6IFZhclZhbHVlVHlwZTxLPixcclxuXHRcdGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkU3R5bGVSdWxlIGludGVyZmFjZSBjb21iaW5lcyBJU3R5bGVSdWxlIGFuZCBJTmFtZWRFbnRpdHkgaW50ZXJmYWNlcy4gVGhpcyBpcyB1c2VkXHJcbiAqIGZvciBjbGFzcyBhbmQgSUQgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZFN0eWxlUnVsZSBleHRlbmRzIElTdHlsZVJ1bGUsIElOYW1lZEVudGl0eVxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB3aGVyZSB0aGUgc2VsZWN0b3IgaXMgYSBzaW5nbGUgY2xhc3MgbmFtZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzUnVsZSBleHRlbmRzIElOYW1lZFN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGNsYXNzIHByZWZpeGVkIHdpdGggXCIuXCIgKi9cclxuXHRyZWFkb25seSBjc3NDbGFzc05hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc05hbWVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgY29tYmluYXRpb24gb2YgdHdvIG9yIG1vcmUgY2xhc3MgbmFtZXMuIEl0IGNhbiBiZVxyXG4gKiB1c2VkIHRvIG1ha2UgaXQgZWFzaWVyIHRvIGNyZWF0ZSBlbGVtZW50cyB3aXRoIG1vcmUgdGhhbiBvbmUgQ1NTIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NOYW1lUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIE5hbWUgb2YgYWxsIHRoZSBjbGFzcyBuYW1lcyBwcmVmaXhlZCB3aXRoIFwiLlwiICovXHJcblx0cmVhZG9ubHkgY3NzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSURSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB3aGVyZSB0aGUgc2VsZWN0b3IgaXMgYSBzaW5nbGUgZWxlbWVudCBJRC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUlEUnVsZSBleHRlbmRzIElOYW1lZFN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIGVsZW1lbnQgSUQgcHJlZml4ZWQgd2l0aCBcIiNcIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0lETmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uV2F5cG9pbnQgdHlwZSBkZWZpbmVzIGEgdHlwZSB0aGF0IGNhbiBiZSB1c2VkIHRvIGRlZmluZSBhIHdheXBvaW50IGluIGFuXHJcbiAqIGFuaW1hdGlvbiBzZXF1ZW5jZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbldheXBvaW50ID0gT25lT3JNYW55PFwiZnJvbVwiIHwgXCJ0b1wiIHwgbnVtYmVyPjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uU3R5bGVzIHR5cGUgZGVmaW5lcyBhIG9iamVjdCBjb250YWluaW5nIHN0eWxlIHByb3BlcnRpZXMgZm9yIGFuIGFuaW1hdGlvbiBmcmFtZS5cclxuICogU3R5bGVzZXRzIGZvciBrZXlmcmFtZXMgYWxsb3cgY3VzdG9tIHByb3BlcnRpZXMgKHZpYSBcIi0tXCIpLiBBbmltYXRpb24gc3R5bGVzZXQgY2FuIGV4dGVuZFxyXG4gKiBvdGhlciBzdHlsZSBydWxlczsgaG93ZXZlciwgYW55IGRlcGVuZGVudCBydWxlcyB3aWxsIGJlIGlnbm9yZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25TdHlsZXNldCA9IFN0eWxlc2V0ICYgeyBcIitcIj86IElTdHlsZVJ1bGUgfCBJU3R5bGVSdWxlW10gfTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWUgdHlwZSBkZWZpbmVzIGEgc2luZ2xlIGtleWZyYW1lIHdpdGhpbiBhIEBrZXlmcmFtZXMgcnVsZS5cclxuICogVGhlIHdheXBvaW50IGNhbiBiZSBzcGVjaWZpZWQgYXMgXCJmcm9tXCIgb3IgXCJ0b1wiIHN0cmluZ3Mgb3IgYXMgYSBudW1iZXIgMCB0byAxMDAsIHdoaWNoIHdpbGwgYmVcclxuICogdXNlZCBhcyBhIHBlcmNlbnQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GcmFtZSA9IFtBbmltYXRpb25XYXlwb2ludCwgQW5pbWF0aW9uU3R5bGVzZXRdO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQW5pbWF0aW9uUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQGtleWZyYW1lcyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1ska2V5ZnJhbWVzXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmltYXRpb25SdWxlIGV4dGVuZHMgSVJ1bGUsIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqIFNPTSBrZXlmcmFtZXMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0tleWZyYW1lc1J1bGUgfCBudWxsO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdHlsZSBydWxlcyByZXByZXNlbnRpbmcgYW5pbWF0aW9uIGZyYW1lcyAqL1xyXG5cdHJlYWRvbmx5IGZyYW1lUnVsZXM6IElBbmltYXRpb25GcmFtZVJ1bGVbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQW5pbWF0aW9uRnJhbWVSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc2luZ2xlIGZyYW1lIGluIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmltYXRpb25GcmFtZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogSWRlbnRpZmllciBvZiB0aGUgd2F5cG9pbnQgKi9cclxuXHRyZWFkb25seSB3YXlwb2ludDogQW5pbWF0aW9uV2F5cG9pbnQ7XHJcblxyXG5cdC8qKiBTT00ga2V5ZnJhbWUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc0tleWZyYW1lUnVsZTogQ1NTS2V5ZnJhbWVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgY3VzdG9tIHByb3BlcnR5IGRlZmluaXRpb24uXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyR2YXJdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gZXh0ZW5kcyBJTmFtZWRFbnRpdHksIElDdXN0b21WYXI8VmFyVmFsdWVUeXBlPEs+PlxyXG57XHJcblx0LyoqIE5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS4gKi9cclxuXHRyZWFkb25seSB0ZW1wbGF0ZTogSztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb3VudGVyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIG5hbWVkIGNvdW50ZXIgZGVmaW5pdGlvbi4gVXNlIHRoaXMgcnVsZSB0byBjcmVhdGVcclxuICogY291bnRlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWQgaW4gY291bnRlci1pbmNyZW1lbnQsIGNvdW50ZXItcmVzZXQgYW5kIGNvdW50ZXItc2V0IHN0eWxlXHJcbiAqIHByb3BlcnRpZXMuIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGNvdW50ZXJzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmVcclxuICogY291bnRlciBkZWZpbml0aW9ucy5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGNvdW50ZXJdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvdW50ZXJSdWxlIGV4dGVuZHMgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgY291bnRlciAqL1xyXG5cdHJlYWRvbmx5IGNvdW50ZXJOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIFRoZSBJQ291bnRlclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIEBjb3VudGVyLXN0eWxlIHJ1bGUuXHJcbi8vICAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRjb3VudGVyU3R5bGVdXSBmdW5jdGlvbi5cclxuLy8gICovXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgSUNvdW50ZXJTdHlsZVJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5XHJcbi8vIHtcclxuLy8gXHQvKiogU09NIGNvdW50ZXItc3R5bGUgcnVsZSAqL1xyXG4vLyBcdHJlYWRvbmx5IGNzc1J1bGU6IENTU0NvdW50ZXJTdHlsZVJ1bGUgfCBudWxsO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUltcG9ydFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRpbXBvcnRdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltcG9ydFJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0ltcG9ydFJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZvbnRGYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBmb250LWZhY2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGZvbnRmYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb250RmFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0ZvbnRGYWNlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZXNwYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBuYW1lc3BhY2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG5hbWVzcGFjZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZXNwYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogTmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBuYW1lc3BhY2U6IHN0cmluZztcclxuXHJcblx0LyoqIE9wdGlvbmFsIHByZWZpeCBmb3IgdGhlIHJ1bGUgKi9cclxuXHRyZWFkb25seSBwcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcblx0LyoqIFNPTSBuYW1lc3BhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU05hbWVzcGFjZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhZ2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHBhZ2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhZ2VSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE9wdGlvbmFsIG5hbWUgb2YgdGhlIHBhZ2UgcHNldWRvIHN0eWxlIChlLmcuIFwiXCI6Zmlyc3RcIikgKi9cclxuXHRyZWFkb25seSBwc2V1ZG9DbGFzczogUGFnZVBzZXVkb0NsYXNzIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIHBhZ2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1BhZ2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElHcmlkTGluZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkZWZpbml0aW9uIG9mIGEgbmFtZWQgZ3JpZCBsaW5lLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZ3JpZGxpbmVdXSBmdW5jdGlvbiBvciBjcmVhdGVkXHJcbiAqIHdoZW4gYSBncmlkIGFyZWEgaXMgZGVmaW5lZCB1c2luZyB0aGUgW1skZ3JpZGFyZWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyaWRMaW5lUnVsZSBleHRlbmRzIElOYW1lZEVudGl0eVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBsaW5lIGlzIGEgc3RhcnQgb3IgZW5kIGxpbmUgb2YgYSBncmlkIGFyZWEuIFRoZSB2YWx1ZSBpcyB0cnVlXHJcbiAgICAgKiBpZiB0aGlzIGlzIHRoZSBzdGFydCBsaW5lOyBmYWxzZSBpZiB0aGlzIGlzIHRoZSBlbmQgbGluZTsgYW5kIHVuZGVmaW5lZCBpZiB0aGUgbGluZSBpc1xyXG4gICAgICogbm90IHJlbGF0ZWQgdG8gYW55IGFyZWEuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGlzU3RhcnRFbmRPck5vbmU/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmFtZSBvZiB0aGUgZ3JpZCBhcmVhIG9mIHdoaWNoIHRoZSBsaW5lIGlzIGVpdGhlciBhIHN0YXJ0IG9yIGFuIGVuZCBsaW5lLiBJdCBpcyBkZWZpbmVkXHJcbiAgICAgKiBvbmx5IGlmIHRoZSBsaW5lIG5hbWUgZW5kcyB3aXRoIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIuXHJcbiAgICAgKi9cclxuICAgIHJlYWRvbmx5IGFyZWFOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JpZEFyZWFSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZGVmaW5pdGlvbiBvZiBhIG5hbWVkIGdyaWQgYXJlLiBHcmlkIGFyZWEgcnVsZVxyXG4gKiBkZWZpbmVzIHR3byBsaW5lIHJ1bGVzOiBmb3IgaXRzIHN0YXJ0IGFuZCBlbmQgbGluZXMuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRncmlkYXJlYV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZEFyZWFSdWxlIGV4dGVuZHMgSU5hbWVkRW50aXR5XHJcbntcclxuICAgIC8qKiBTdGFydCBsaW5lIG9mIHRoZSBhcmVhLiAqL1xyXG4gICAgcmVhZG9ubHkgc3RhcnRMaW5lOiBJR3JpZExpbmVSdWxlO1xyXG5cclxuICAgIC8qKiBFbmQgbGluZSBvZiB0aGUgYXJlYS4gKi9cclxuICAgIHJlYWRvbmx5IGVuZExpbmU6IElHcmlkTGluZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFN5bWJvbCB0aGF0IGlzIHVzZWQgYnkgdGhlIGAkcGFyZW50YCBwcm9wZXJ0eSBpbiB0aGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzIHRoYXQga2VlcHMgcmVmZXJlbmNlXHJcbiAqIHRvIHRoZSBwYXJudCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBEZXZlbG9wZXJzIGNhbiB1c2UgdGhpcyBwcm9wZXJ0eSB0byBhY2Nlc3MgcnVsZXMgaW5cclxuICogdGhlIGNoYWluIG9mIG5lc3RlZCBncm91cGluZyBydWxlcy4gV2UgbmVlZCB0aGlzIHN5bWJvbCB0byBhdm9pZCBlbnVtZXJhdGluZyB0aGUgYCRwYXJlbnRgXHJcbiAqIHByb3BlcnR5IHdoZW4gcHJvY2Vzc2luZyB0aGUgcnVsZXMgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuY29uc3Qgc3ltUGFyZW50ID0gU3ltYm9sKFwicGFyZW50XCIpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogU3ltYm9sIHRoYXQgaXMgdXNlZCBieSB0aGUgYCRvd25lcmAgcHJvcGVydHkgaW4gdGhlIFN0eWxlRGVmaW5pdGlvbiBjbGFzcyB0aGF0IGtlZXBzIHJlZmVyZW5jZVxyXG4gKiB0byB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIERldmVsb3BlcnMgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGFjY2VzcyBydWxlcyBpblxyXG4gKiB0aGUgY2hhaW4gb2YgbmVzdGVkIGdyb3VwaW5nIHJ1bGVzLiBXZSBuZWVkIHRoaXMgc3ltYm9sIHRvIGF2b2lkIGVudW1lcmF0aW5nIHRoZSBgJG93bmVyYFxyXG4gKiBwcm9wZXJ0eSB3aGVuIHByb2Nlc3NpbmcgdGhlIHJ1bGVzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC5cclxuICovXHJcbmNvbnN0IHN5bU93bmVyID0gU3ltYm9sKFwib3duZXJcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzIGlzIGEgYmFzZSBmb3IgYWxsIGNsYXNzZXMgdGhhdCBjb250YWluIGRlZmluaW5pdGlvbnMgb2YgQ1NTIHJ1bGVzLlxyXG4gKiBAdHlwZXBhcmFtIFAgUGFyZW50IHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFBhcmVudCBvZiB0b3AtbHZlbCBjbGFzcyBpcyBudWxsLlxyXG4gKiBAdHlwZXBhcmFtIE8gVG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIHdoaWNoIGlzIHRoZSBvd25lciBvZiB0aGlzIGNsYXNzLiBUaGUgdG9wLWxldmVsXHJcbiAqIGNsYXNzIGlzIGl0cyBvd24gb3duZXIuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVEZWZpbml0aW9uPFAgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnksIE8gZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBTdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYXJlIGNyZWF0ZWQgZGlyZWN0bHkgb25seSBieSB0aGUgKnN0eWxlZCBjb21wb25lbnRzKiAtIHRoYXQgaXMsXHJcblx0ICogY29tcG9uZW50cyB0aGF0IHVzZSBkaWZmZXJlbnQgc3R5bGVzIGZvciBlYWNoIGluc3RhbmNlLiBPdGhlcndpc2UsIHN0eWxlIGRlZmluaXRpb25cclxuXHQgKiBjbGFzcyBpbnN0YW5jZXMgYXJlIGNyZWF0ZWQgd2hlbiBlaXRoZXIgdGhlIFtbJHVzZV1dIG9yIFtbYWN0aXZhdGVdXSBmdW5jdGlvbiBpcyBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHBhcmVudCBSZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzXHJcblx0ICovXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBwYXJlbnQ/OiBQKVxyXG5cdHtcclxuXHRcdHRoaXNbc3ltUGFyZW50XSA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgLy8gT3duZXIgaXMgdGFrZW4gZnJvbSB0aGUgcGFyZW50IGNsYXNzOyBhIHRvcC1sZXZlbCBjbGFzcyBpcyBpdHMgb3duIG93bmVyLlxyXG5cdFx0dGhpc1tzeW1Pd25lcl0gPSBwYXJlbnQgPyBwYXJlbnQuJG93bmVyIDogdGhpcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZmVycyB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgd2hpY2ggaXMgdGhlIHBhcm50IG9mIHRoaXMgc3R5bGVcclxuICAgICAqIGRlZmluaXRpb24gb2JqZWN0IGluIHRoZSBjaGFpbiBvZiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuIFRocm91Z2ggdGhpcyBtZW1iZXIsIGFsbCBydWxlc1xyXG4gICAgICogYW5kIG90aGVyIG1lbWJlcnMgZGVmaW5lZCBpbiB0aGUgcGFyZW50IGRlZmluaXRpb24gY2xhc3MgY2FuIGJlIGFjY2Vzc2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgJHBhcmVudCgpOiBQIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXNbc3ltUGFyZW50XTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWZlcnMgdG8gdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIHdoaWNoIGlzIHRoZSBvd25lciBvZlxyXG5cdCAqIHRoaXMgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuIFRoZSBvd25lciBpcyB0aGUgdG9wLWxldmVsIGNsYXNzIGluIHRoZSBjaGFpbiBvZiBzdHlsZVxyXG5cdCAqIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhyb3VnaCB0aGlzIG1lbWJlciwgYWxsIHJ1bGVzIGFuZCBvdGhlciBtZW1iZXJzIGRlZmluZWQgaW4gdGhlIG93bmVyXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzcyBjYW4gYmUgYWNjZXNzZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCAkb3duZXIoKTogTyB8IHVuZGVmaW5lZCB7IHJldHVybiB0aGlzW3N5bU93bmVyXTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZURlZmluaXRpb25DbGFzczxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPFAsTz4gPSBhbnksXHJcbiAgICBQIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55LCBPIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PlxyXG57XHJcblx0LyoqIEFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgc2hvdWxkIGNvbmZvcm0gdG8gdGhpcyBjb25zdHJ1Y3RvciAqL1xyXG5cdG5ldyggcGFyZW50PzogUCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JvdXBSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgZ3JvdXBpbmcgQ1NTIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0Ly8gSW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgZGVmaW5pbmcgdGhlIHJ1bGVzIHVuZGVyIHRoaXMgZ3JvdXBpbmcgcnVsZVxyXG5cdHJlYWRvbmx5IHJ1bGVzOiBUO1xyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NHcm91cGluZ1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN1cHBvcnRzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skc3VwcG9ydHNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN1cHBvcnRzUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBGbGFnIGluZGljYXRlZCB3aGV0aGVyIHRoZSBicm93c2VyIHN1cHBvcnRzIHRoaXMgcnVsZSdzIHF1ZXJ5ICovXHJcbiAgICByZWFkb25seSBpc1N1cHBvcnRlZDogYm9vbGVhbjtcclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3VwcG9ydHNSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNZWRpYVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAbWVkaWEgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJG1lZGlhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NNZWRpYVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2NoZWR1bGVyVHlwZSBlbnVtZXJhdGlvbiBwcm92aWRlcyB2YWx1ZXMgdXNlZCB0byBkZWZpbmUgaG93IHRoZSBjYWxscyB0byB0aGVcclxuICogYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHNjaGVkdWxlIHRoZSB3cml0aW5nIG9mIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIFNjaGVkdWxlclR5cGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIFN5bmNocm9ub3VzIGFjdGl2YXRpb24gLSBzdHlsZSBkZWZpbml0aW9ucyBhcmUgd3JpdHRlbiB0byB0aGUgRE9NIHVwb24gdGhlIGFjdGl2YXRlXHJcblx0ICogYW5kIGRlYWN0aXZhdGUgY2FsbHMuXHJcblx0ICovXHJcblx0U3luYyA9IDEsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgYWNjdW11bGF0ZWQgdW50aWwgdGhlIG5leHQgYW5pbWF0aW9uXHJcblx0ICogZnJhbWUgYW5kIHRoZW4gZXhlY3V0ZWQgYWxsdG9nZXRoZXIuXHJcblx0ICovXHJcblx0QW5pbWF0aW9uRnJhbWUsXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGxzIHRvIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyBhcmUgYWNjdW11bGF0ZWQgdW50aWwgdGhlIGNhbGwgdG8gdGhlXHJcblx0ICogZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gYW5kIHRoZW4gZXhlY3V0ZWQgYWxsdG9nZXRoZXIuXHJcblx0ICovXHJcblx0TWFudWFsLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNjaGVkdWxlciBpbnRlcmZhY2Ugc2hvdWxkIGJlIGltcGxlbWVudGVkIGJ5IGN1c3RvbSBzY2hlZHVsZXJzLiBJdHMgbWV0aG9kcyBhcmUgaW52b2tlZFxyXG4gKiBieSB0aGUgYWN0aXZhdGlvbiBpbmZyYXN0cnVjdHVyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBzY2hlZHVsZXIgb2JqZWN0IGFuZCBwcm92aWRlcyB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZVxyXG4gICAgICogc2NoZWR1bGVyIGRlY2lkZXMgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIGluaXQoIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkKTtcclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gc2NoZWR1bGUgaXRzIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG5cdHNjaGVkdWxlRE9NVXBkYXRlKCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuXHRjYW5jZWxET01VcGRhdGUoKTogdm9pZDtcclxufSIsImltcG9ydCB7U2NoZWR1bGVyVHlwZSwgU3R5bGVEZWZpbml0aW9uLCBJU2NoZWR1bGVyfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHthY3RpdmF0ZUluc3RhbmNlLCBkZWFjdGl2YXRlSW5zdGFuY2V9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtTdHJpbmdTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFjdGl2YXRvciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBvYmplY3QgcmVzcG9uc2libGUgZm9yIGEgY2VydGFpbiB0eXBlIG9mIGFjdGl2YXRpb25cclxuICogbWVjaGFuaXNtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQWN0aXZhdG9yXHJcbntcclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGRlYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZVxyXG5cdCAqIGRlYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdGRlYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBzZXQgdGhlIHZhbHVlIG9mIGVpdGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIHNldCBvZiBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlblxyXG4gICAgICogQ1NTIHN0eWxlIG9iamVjdC5cclxuXHQgKi9cclxuICAgIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgZm9yY2VET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0Zm9yY2VET01VcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FuY2VsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbERPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRjYW5jZWxET01VcGRhdGUoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICogQ1NTIHN0eWxlIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcbntcclxuICAgIGlmICghbmFtZSAmJiB2YWx1ZSA9PSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChydWxlT3JFbG0gaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5jc3NUZXh0ID0gXCJcIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIChydWxlT3JFbG0gYXMgYW55IGFzIEVsZW1lbnQpLnJlbW92ZUF0dHJpYnV0ZSggXCJzdHlsZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSggbmFtZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGUuc2V0UHJvcGVydHkoIG5hbWUsIHZhbHVlIGFzIHN0cmluZywgaW1wb3J0YW50ID8gXCIhaW1wb3J0YW50XCIgOiB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzdHlsZXNldCA9IHZhbHVlIGFzIFN0cmluZ1N0eWxlc2V0O1xyXG4gICAgICAgIGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG4gICAgICAgICAgICBydWxlT3JFbG0uc3R5bGVbcHJvcE5hbWVdID0gc3R5bGVzZXRbcHJvcE5hbWVdO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3luY2hyb25vdXNBY3RpdmF0b3IgY2xhc3MgcmVwcmVzZW50cyB0aGUgc3luY2hyb25vdXMgYWN0aXZhdGlvbiBtZWNoYW5pc20sIHdoaWNoIHdyaXRlc1xyXG4gKiBzdHlsZSBjaGFuZ2VzIHRvIHRoZSBET00gd2hlbiB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIGFyZSBjYWxsZWQuXHJcbiAqL1xyXG5jbGFzcyBTeW5jaHJvbm91c0FjdGl2YXRvciBpbXBsZW1lbnRzIElBY3RpdmF0b3Jcclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqIEBwYXJhbSBkZWZpbml0aW9uXHJcblx0ICovXHJcblx0cHVibGljIGFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0YWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogZGVhY3RpdmF0ZSBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICogQHBhcmFtIGRlZmluaXRpb25cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGRlYWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgMSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gc2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICAgICAqIENTUyBzdHlsZSBvYmplY3QuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGUsIG5hbWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHVwZGF0ZVN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbSwgbmFtZSwgdmFsdWUsIGltcG9ydGFudCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBmb3JjZURPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZm9yY2VET01VcGRhdGUoKTogdm9pZCB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWwgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsRE9NVXBkYXRlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG5cdCAqIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZCB7fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIG9iamVjdHMgdGhhdCBhcmUgdXNlZCBieSB0aGUgU2NoZWR1bGluZ0FjdGl2YXRvciBjbGFzcyBmb3Igc2V0dGluZyBwcm9wZXJ0eSB2YWx1ZXMuXHJcbiAqIFdoZW4gYm90aCBuYW1lIGFuZCB2YWx1ZSBwcm9wZXJ0aWVzIGFyZSBudWxsLCB0aGUgc3R5bGUgd2lsbCBiZSBzZXQgdG8gYW4gZW1wdHkgc3RyaW5nXHJcbiAqIGVmZmVjdGl2ZWx5IHJlbW92aW5nIGFsbCBzdHlsZXMgZnJvbSB0aGUgZWxlbWVudCBvciB0aGUgcnVsZS5cclxuICovXHJcbmludGVyZmFjZSBTY2hlZHVsZWRTdHlsZVByb3BWYWx1ZVxyXG57XHJcblx0LyoqXHJcbiAgICAgKiBTdHlsZSBvYmplY3QgaW4gd2hpY2ggdG8gc2V0IHRoZSBwcm9wZXJ0eSB2YWx1ZS4gVGhlIHN0eWxlIG9iamVjdCBjYW4gYmVsb25nIHRvIGVpdGhlciBhXHJcbiAgICAgKiBzdHlsZSBydWxlZSBvciB0byBhbiBIVE1MIGVsZW1lbnQuXHJcbiAgICAgKi9cclxuXHRydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBEYXNoZS1jYXNlZCBwcm9wZXJ0eSBuYW1lIGlmIHNldHRpbmcgYSB2YWx1ZSBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvciBudWxsIGlmIHNldHRpbmcgdmFsdWVzXHJcbiAgICAgKiBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcblx0bmFtZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBQcm9wZXJ0eSB2YWx1ZSBpZiBzZXR0aW5nIGEgdmFsdWUgb2YgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBTdHJpbmdTdHlsZXNldCBvYmplY3QgaWYgc2V0dGluZ1xyXG4gICAgICogdmFsdWVzIG9mIG11bHRpcGxlIHByb3BlcnRpZXMuIElmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgaXQgaXMgcmVtb3ZlZC5cclxuICAgICAqL1xyXG5cdHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBwcm9wZXJ0eSBzaG91bGQgYmUgbWFya2VkIFwiIWltcG9ydGFudFwiLiBUaGlzIGZsYWcgaXMgaWdub3JlZFxyXG4gICAgICogd2hlbiBzZXR0aW5nIHZhbHVlcyBvZiBtdWx0aXBsZSBwcm9wZXJ0aWVzLlxyXG4gICAgICovXHJcblx0aW1wb3J0YW50PzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNjaGVkdWxpbmdBY3RpdmF0b3IgY2xhc3Mga2VlcHMgYSBtYXAgb2YgU3R5bGVEZWZpbml0aW9uIGluc3RhbmNlcyB0aGF0IGFyZSBzY2hlZHVsZWQgZm9yXHJcbiAqIGFjdGl2YXRpb24gb3IgZGVhY3RpdmF0aW9uLiBFYWNoIGluc3RhbmNlIGlzIG1hcHBlZCB0byBhIHJlZmVybmNlIGNvdW50LCB3aGljaCBpcyBpbmNyZW1lbnRlZFxyXG4gKiB1cG9uIHRoZSBhY3RpdmF0ZSBjYWxscyBhbmQgZGVjcmVtZW50ZWQgdXBvbiB0aGUgZGVhY3RpdmF0ZSBjYWxscy4gV2hlbiB0aGUgZG9BY3RpdmF0aW9uXHJcbiAqIG1ldGhvZCBpcyBjYWxsZWQgVGhlIHN0eWxlIGRlZmluaXRpb24gd2lsbCBiZSBlaXRoZXIgYWN0aXZhdGVkIG9yIGRlYWN0aXZhdGVkIGJhc2VkIG9uIHdoZXRoZXJcclxuICogdGhlIHJlZmVyZW5jZSBjb3VudCBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY2hlZHVsaW5nQWN0aXZhdG9yIGltcGxlbWVudHMgSUFjdGl2YXRvclxyXG57XHJcbiAgICAvLyBNYXAgb2Ygc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbnN0YW5jZXMgdG8gdGhlIHJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuXHRwcml2YXRlIGRlZmluaXRpb25zID0gbmV3IE1hcDxTdHlsZURlZmluaXRpb24sbnVtYmVyPigpO1xyXG5cclxuICAgIC8vIEFycmF5IG9mIHN0eWxlIHByb3BlcnR5IHZhbHVlcyB0byBiZSBzZXQvcmVtb3ZlZC5cclxuICAgIHByaXZhdGUgcHJvcHM6IFNjaGVkdWxlZFN0eWxlUHJvcFZhbHVlW10gPSBbXTtcclxuICAgIFxyXG4gICAgLy8gb3B0aW9uYWwgc2NoZWR1bGVyIG9iamVjdFxyXG4gICAgcHJpdmF0ZSBzY2hlZHVsZXI/OiBJU2NoZWR1bGVyO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoIHNjaGVkdWxlcj86IElTY2hlZHVsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHNjaGVkdWxlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNjaGVkdWxlci5pbml0KCAoKSA9PiB0aGlzLmRvRE9NVXBkYXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWZDb3VudCA9IHRoaXMuZGVmaW5pdGlvbnMuZ2V0KCBkZWZpbml0aW9uKSB8fCAwO1xyXG5cdFx0aWYgKHJlZkNvdW50ID09PSAtMSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5kZWxldGUoIGRlZmluaXRpb24pO1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRcdHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLmNhbmNlbERPTVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGVET01VcGRhdGUoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5zZXQoIGRlZmluaXRpb24sICsrcmVmQ291bnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCByZWZDb3VudCA9IHRoaXMuZGVmaW5pdGlvbnMuZ2V0KCBkZWZpbml0aW9uKSB8fCAwO1xyXG5cdFx0aWYgKHJlZkNvdW50ID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlZmluaXRpb25zLmRlbGV0ZSggZGVmaW5pdGlvbik7XHJcblx0XHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuc2V0KCBkZWZpbml0aW9uLCAtLXJlZkNvdW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIHNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAgICAgKiBDU1Mgc3R5bGUgb2JqZWN0LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNldFN0eWxlUHJvcGVydHkoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLCBuYW1lOiBzdHJpbmcgfCBudWxsLFxyXG4gICAgICAgIHZhbHVlPzogc3RyaW5nIHwgU3RyaW5nU3R5bGVzZXQgfCBudWxsLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRE9NVXBkYXRlKCk7XHJcblxyXG5cdFx0dGhpcy5wcm9wcy5wdXNoKHsgcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50IH0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGluIG91ciBpbnRlcm5hbCBtYXAuXHJcblx0ICovXHJcblx0cHVibGljIGZvcmNlRE9NVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID4gMCB8fCB0aGlzLnByb3BzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcbiAgICAgICAgICAgIHRoaXMuZG9ET01VcGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbmNlbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcblx0ICovXHJcblx0cHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA+IDAgfHwgdGhpcy5wcm9wcy5sZW5ndGggPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyQWN0aXZhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUGVyZm9ybXMgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5kIHByb3BlcnR5IHNldCBvcGVyYXRpb25zIGFjY3VtdWxhdGVkIGludGVybmFsbHkuIFRoaXNcclxuICAgICAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCBieSB0aGUgZGVyaXZlZCBjbGFzc2VzIHdoZW4gc2NoZWR1bGVkIGFjdGl2YXRpb25zIHNob3VsZCBiZSBwZXJmb3JtZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIC8vIGFjdGl2YXRlL2RlYWN0aXZhdGUgc3R5bGUgZGVmaW5pdGlvbnNcclxuXHRcdHRoaXMuZGVmaW5pdGlvbnMuZm9yRWFjaCggKHJlZkNvdW50OiBudW1iZXIsIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbikgPT5cclxuXHRcdHtcclxuXHRcdFx0aWYgKHJlZkNvdW50ID4gMClcclxuXHRcdFx0XHRhY3RpdmF0ZUluc3RhbmNlKCBkZWZpbml0aW9uLCByZWZDb3VudCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkZWFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIC1yZWZDb3VudCk7XHJcblx0XHR9KVxyXG5cclxuXHRcdHRoaXMuZGVmaW5pdGlvbnMuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIHN0eWxlIHByb3BlcnRpZXNcclxuXHRcdHRoaXMucHJvcHMuZm9yRWFjaCggcHJvcCA9PiB1cGRhdGVTdHlsZVByb3BlcnR5KCBwcm9wLnJ1bGVPckVsbSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlLCBwcm9wLmltcG9ydGFudCkpO1xyXG5cdFx0dGhpcy5wcm9wcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhcnMgYWxsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGRhdGEgZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY2xlYXJBY3RpdmF0aW9uKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9ucy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSBbXTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZVNjaGVkdWxlciBpbXBsZW1lbnRzIHNjaGVkdWxpbmcgdXNpbmcgYW5pbWF0aW9uIGZyYW1lcy5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIGltcGxlbWVudHMgSVNjaGVkdWxlclxyXG57XHJcbiAgICAvLyBIYW5kbGUgcmV0dXJuZWQgYnkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVxdWVzdEhhbmRsZSA9IDA7XHJcblxyXG4gICAgLy8gQ2FsbGJhY2sgdG8gY2FsbCB0byB3cml0ZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcblx0cHJpdmF0ZSBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgc2NoZWR1bGVyIG9iamVjdCBhbmQgcHJvdmlkZXMgdGhlIGNhbGxiYWNrIHRoYXQgc2hvdWxkIGJlIGludm9rZWQgd2hlbiB0aGVcclxuICAgICAqIHNjaGVkdWxlciBkZWNpZGVzIHRvIG1ha2UgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdCggZG9ET01VcGRhdGU6ICgpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kb0RPTVVwZGF0ZSA9IGRvRE9NVXBkYXRlO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBzY2hlZHVsZSBpdHMgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2NoZWR1bGVET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0dGhpcy5yZXF1ZXN0SGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCB0aGlzLm9uQW5pbWF0aW9uRnJhbWUpXHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIGNhbmNlbHMgaXRzIHNjaGVkdWxlZCBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBjYW5jZWxET01VcGRhdGUoKTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKHRoaXMucmVxdWVzdEhhbmRsZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdGNhbmNlbEFuaW1hdGlvbkZyYW1lKCB0aGlzLnJlcXVlc3RIYW5kbGUpO1xyXG5cdFx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIGFuaW1hdGlvbiBmcmFtZSBzaG91bGQgYmUgZXhlY3V0ZWQuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBvbkFuaW1hdGlvbkZyYW1lID0gKCk6IHZvaWQgPT5cclxuXHR7XHJcblx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSAwO1xyXG5cdFx0dGhpcy5kb0RPTVVwZGF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2NoZWR1bGVzIHRoZSB1cGRhdGUgb2YgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBDU1MgcHJvcGVydHkgaW4gdGhlIGdpdmVuIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlLFxyXG4gICAgbmFtZTogc3RyaW5nIHwgbnVsbCwgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsXHJcbiAgICBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+XHJcblx0XHRhY3RpdmF0b3Iuc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50KSwgc2NoZWR1bGVyVHlwZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlcyBjYWxsaW5nIG9mIHRoZSBnaXZlbiBmdW5jdGlvbiB1c2luZyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zY2hlZHVsZUNhbGwoIGZ1bmM6IChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IHZvaWQsIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRsZXQgYWN0aXZhdG9yID0gc2NoZWR1bGVyVHlwZSA9PSBudWxsID8gc19kZWZhdWx0QWN0aXZhdG9yIDogc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5nZXQoIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgaWYgKGFjdGl2YXRvcilcclxuXHRcdGZ1bmMoIGFjdGl2YXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX2dldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfZGVmYXVsdFNjaGVkdWxlclR5cGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGRlZmF1bHQgc2NoZWR1bGluZyB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxpbmcgcGFyYW1ldGVyLiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZVxyXG4gKiBwcmV2aW91cyBkZWZhdWx0IGFjdGl2YXRvciBvciAwIGlmIGFuIGVycm9yIG9jY3VycyAoZS5nLiB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgSUQgaXMgbm90XHJcbiAqIHJlZ2lzdGVyZWQpLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGU6IG51bWJlcik6IG51bWJlclxyXG57XHJcbiAgICAvLyBjaGVjayB0aGF0IHRoZSBnaXZlbiBudW1iZXIgaXMgaW4gb3VyIG1hcCBvZiByZWdpc3RlcmVkIGFjdGl2YXRvcnNcclxuICAgIGxldCBhY3RpdmF0b3IgPSBzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLmdldCggc2NoZWR1bGVyVHlwZSk7XHJcblx0aWYgKCFhY3RpdmF0b3IpXHJcblx0XHRyZXR1cm4gMDtcclxuXHJcblx0bGV0IHByZXZTY2hlZHVsZXJUeXBlID0gc19kZWZhdWx0U2NoZWR1bGVyVHlwZTtcclxuICAgIHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPSBzY2hlZHVsZXJUeXBlO1xyXG4gICAgc19kZWZhdWx0QWN0aXZhdG9yID0gYWN0aXZhdG9yO1xyXG5cdHJldHVybiBwcmV2U2NoZWR1bGVyVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIHRoZSBnaXZlbiBzY2hlZHVsZXIgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBzY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyLCB3aGljaFxyXG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfcmVnaXN0ZXJTY2hlZHVsZXIoIHNjaGVkdWxlcjogSVNjaGVkdWxlcik6IG51bWJlclxyXG57XHJcblx0Ly8gZ2V0IHRoZSByZWdpc3RyYXRpb24gSUQgZm9yIHRoaXMgc2NoZWR1bGVyXHJcblx0bGV0IGlkID0gc19uZXh0Q3VzdG9tU2NoZWR1bGVyVHlwZSsrO1xyXG5cdHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBpZCwgbmV3IFNjaGVkdWxpbmdBY3RpdmF0b3IoIHNjaGVkdWxlcikpO1xyXG5cdHJldHVybiBpZDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVW5yZWdpc3RlcnMgYSBzY2hlZHVsZXIgb2JqZWN0IHdpdGggdGhlIGdpdmVuIHNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc191bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZDogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0aWYgKGlkID49IHNfZmlyc3RDdXN0b21TY2hlZHVsZXJUeXBlKVxyXG5cdHtcclxuXHRcdHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuZGVsZXRlKCBpZCk7XHJcblxyXG5cdFx0Ly8gaWYgdGhlIGRlbGV0ZWQgc2NoZWR1bGVyIHdhcyBvdXIgZGVmYXVsdCBvbmUsIHdlIHNldCB0aGUgZGVmYXVsdCB0byBTWU5DXHJcbiAgICAgICAgaWYgKHNfZGVmYXVsdFNjaGVkdWxlclR5cGUgPT09IGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc19kZWZhdWx0U2NoZWR1bGVyVHlwZSA9IFNjaGVkdWxlclR5cGUuU3luYztcclxuICAgICAgICAgICAgc19kZWZhdWx0QWN0aXZhdG9yID0gc19zeW5jaHJvbm91c0FjdGl2YXRvcjtcclxuICAgICAgICB9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyLiBUaGlzIHNjaGVkdWxlciB3aWxsIGJlIHVzZWQgaWYgc2NoZWR1bGVyIHR5cGUgaXMgbm90IGV4cGxpY2l0bHlcclxuICogc3BlY2lmaWVkIGluIGNhbGxzIHN1Y2ggYXMgYWN0aXZhdGUgb3IgSVN0eWxlUnVsZS5zZXRQcm9wLlxyXG4gKi9cclxubGV0IHNfZGVmYXVsdFNjaGVkdWxlclR5cGU6IG51bWJlciA9IFNjaGVkdWxlclR5cGUuU3luYztcclxuXHJcbi8qKlxyXG4gKiBTeW5jaHJvbm91cyBhY3RpdmF0b3IgaW5zdGFuY2UuXHJcbiAqL1xyXG5sZXQgc19zeW5jaHJvbm91c0FjdGl2YXRvciA9IG5ldyBTeW5jaHJvbm91c0FjdGl2YXRvcigpO1xyXG5cclxuLyoqXHJcbiAqIEN1cnJlbnQgZGVmYXVsdCBhY3RpdmF0b3IuIFRoaXMgYWN0aXZhdG9yIHdpbGwgYmUgdXNlZCBpZiBzY2hlZHVsZXIgdHlwZSBpcyBub3QgZXhwbGljaXRseVxyXG4gKiBzcGVjaWZpZWQgaW4gY2FsbHMgc3VjaCBhcyBhY3RpdmF0ZSBvciBJU3R5bGVSdWxlLnNldFByb3AuXHJcbiAqL1xyXG5sZXQgc19kZWZhdWx0QWN0aXZhdG9yOiBJQWN0aXZhdG9yID0gc19zeW5jaHJvbm91c0FjdGl2YXRvcjtcclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBmaXJzdCBjdXN0b20gc2NoZWR1bGVyIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqIEFsbCBjdXN0b20gc2NoZWR1bGVyIGlkZW50aWZpZXJzIGFyZSBncmVhdGVyIG9yIGVxdWFsIHRvIHRoaXMgbnVtYmVyLlxyXG4gKi9cclxuY29uc3Qgc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGU6IG51bWJlciA9IDEwMDE7XHJcblxyXG4vKipcclxuICogU2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciB0byBiZSBhc3NpZ25lZCB0byB0aGUgbmV4dCBjdXN0b20gc2NoZWR1bGVyIHRvIGJlIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5sZXQgc19uZXh0Q3VzdG9tU2NoZWR1bGVyVHlwZTogbnVtYmVyID0gc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcmVnaXN0ZXJlZCBidWlsdC1pbiBhbmQgY3VzdG9tIGFjdGl2YXRvcnMuXHJcbiAqL1xyXG5sZXQgc19yZWdpc3RlcmVkQWN0aXZhdG9ycyA9IG5ldyBNYXA8bnVtYmVyLElBY3RpdmF0b3I+KCk7XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXIgYnVpbHQtaW4gYW5kIGN1c3RvbSBhY3RpdmF0b3JzLlxyXG4gKi9cclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuU3luYywgc19zeW5jaHJvbm91c0FjdGl2YXRvcik7XHJcbnNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuc2V0KCBTY2hlZHVsZXJUeXBlLkFuaW1hdGlvbkZyYW1lLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvciggbmV3IEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKCkpKTtcclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuTWFudWFsLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvcigpKTtcclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVSdWxlLCBDb21iaW5lZFN0eWxlc2V0LCBJVmFyUnVsZSwgRGVwZW5kZW50UnVsZXMsIElOYW1lZEVudGl0eSwgSUNsYXNzUnVsZSwgSUlEUnVsZSwgSUNsYXNzTmFtZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0V4dGVuZGVkU3R5bGVzZXQsIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZSwgQ3VzdG9tVmFyX1N0eWxlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtDc3NTZWxlY3Rvcn0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHR9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHttZXJnZVN0eWxlc2V0cywgc3R5bGVzZXRUb1N0cmluZywgc3R5bGVQcm9wVG9TdHJpbmcsIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wc30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHt2YWwyc3RyLCBjYW1lbFRvRGFzaH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi9WYXJSdWxlXCI7XHJcbmltcG9ydCB7cHNldWRvRW50aXR5VG9TdHJpbmcsIHNlbGVjdG9yVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JGdW5jc1wiO1xyXG5pbXBvcnQge3Nfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlfSBmcm9tIFwiLi9TY2hlZHVsaW5nXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBydWxlcyB0aGF0IGNvbnRhaW4gYSBzdHlsZSBydWxlLiBUaGlzIGNsYXNzXHJcbiAqIGltcGxlbWVudHMgdGhlIHBhcnNpbmcgb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJU3R5bGVSdWxlXHJcbntcclxuXHQvLyBUaGUgc3R5bGVzZXQgY2FuIGJlIGFuIENvbWJpbmVkU3R5bGVzZXQgZm9yIG1hbnkgcnVsZXM7IGhvd2V2ZXIsIGZvciBzb21lIGl0IGlzIGp1c3RcclxuXHQvLyBvZiB0aGUgU3R5bGVzZXQgdHlwZS5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlc2V0PzogU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnN0eWxlc2V0ID0ge307XHJcblx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzID0ge307XHJcblxyXG5cdFx0aWYgKHN0eWxlc2V0KVxyXG5cdFx0XHR0aGlzLnBhcnNlSW5wdXRTdHlsZXNldCggc3R5bGVzZXQgYXMgQ29tYmluZWRTdHlsZXNldCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdvZXMgb3ZlciBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlbiBzdHlsZXNldCBhbmQgcGFyc2VzIHRoZW0gaW50byBwcm9wZXIgc3R5bGVzZXQsIHNldCBvZlxyXG5cdCAqIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFuZCBkZXBlbmRlbnQgcnVsZXMuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBwYXJzZUlucHV0U3R5bGVzZXQoIGlucHV0U3R5bGVzZXQ6IENvbWJpbmVkU3R5bGVzZXQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBwYXJlbnRzLCB3ZSBmaXJzdCBjb3B5IHByb3BlcnRpZXMgZnJvbSB0aGVtIHNvIHRoYXQgb3VyIG93biBwcm9wZXJ0aWVzXHJcblx0XHQvLyBjYW4gb3ZlcnJpZGUgdGhlbS5cclxuXHRcdGlmIChpbnB1dFN0eWxlc2V0W1wiK1wiXSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gdGhlIHZhbHVlIGlzIGEgc2luZ2xlIFN0eWxlUnVsZSBvciBhbiBhcnJheSBvZiBTdHlsZVJ1bGVzIHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXHJcblx0XHRcdGxldCBleHRlbmRzUHJvcFZhbCA9IGlucHV0U3R5bGVzZXRbXCIrXCJdIGFzIChTdHlsZVJ1bGUgfCBTdHlsZVJ1bGVbXSk7XHJcblx0XHRcdGxldCBwYXJlbnRSdWxlczogU3R5bGVSdWxlW107XHJcblx0XHRcdGlmIChleHRlbmRzUHJvcFZhbCBpbnN0YW5jZW9mIFN0eWxlUnVsZSlcclxuXHRcdFx0XHRwYXJlbnRSdWxlcyA9IFtleHRlbmRzUHJvcFZhbF07XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRwYXJlbnRSdWxlcyA9IGV4dGVuZHNQcm9wVmFsO1xyXG5cclxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBwYXJlbnQgcnVsZXMsIGNvcHkgc3R5bGVzZXRzIGFuZCBkZXBlbmRlbnQgcnVsZXMgZnJvbSB0aGVtLlxyXG5cdFx0XHRpZiAocGFyZW50UnVsZXMgJiYgcGFyZW50UnVsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHBhcmVudFJ1bGVzLmZvckVhY2goIHBhcmVudCA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuc3R5bGVzZXQgPSBtZXJnZVN0eWxlc2V0cyggdGhpcy5zdHlsZXNldCwgcGFyZW50LnN0eWxlc2V0KTtcclxuXHRcdFx0XHRcdHRoaXMuY29weURlcGVuZGVudFJ1bGVzRnJvbSggcGFyZW50KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIG1lcmdlIGN1c3RvbSAgcHJvcGVydGllc1xyXG5cdFx0bWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0aGlzLnN0eWxlc2V0LCBpbnB1dFN0eWxlc2V0KTtcclxuXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBpbnB1dFN0eWxlc2V0KVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBza2lwIG92ZXIgYWxyZWFkeSBwcm9jZXNzZWQgcGFyZW50cyBhbmQgY3VzdG9tIHByb3BlcnRpZXNcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcIitcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IHByb3BWYWwgPSBpbnB1dFN0eWxlc2V0W3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCI6XCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIHRoaXMgaXMgYW4gYXJyYXkgb2YgdHVwbGVzIHJlcHJlc2VudGluZ1xyXG5cdFx0XHRcdC8vIHBhcmFtZXRlcmlzZWQgcHNldWRvIGVudGl0aWVzIHdoZXJlIHRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgdmFsdWVcclxuXHRcdFx0XHQvLyAoc3RyaW5nKSBhbmQgdGhlIHNlY29uZCB0aGUgQ29tYmluZWRTdHlsZXNldC4gT3RoZXJ3aXNlLCB0aGUgdmFsdWUgaXMganVzdCBhblxyXG5cdFx0XHRcdC8vIENvbWJpbmVkU3R5bGVzZXQuXHJcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW2FueSwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0XHRwcm9wTmFtZSwgdHVwbGVbMF0sIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gbmV3IERlcGVuZGVudFJ1bGUoIFwiJlwiICsgcHJvcE5hbWUsIHVuZGVmaW5lZCxcclxuXHRcdFx0XHRcdFx0cHJvcFZhbCBhcyBDb21iaW5lZFN0eWxlc2V0LCB0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCImXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdHR1cGxlWzBdLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoXCImXCIpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdmFsdWUgaXMgYW4gYXJyYXkgb2YgdHdvLWVsZW1lbnQgdHVwbGVzIHdpdGggc2VsZWN0b3IgYW5kIHN0eWxlc2V0XHJcblx0XHRcdFx0bGV0IHR1cGxlcyA9IHByb3BWYWwgYXMgW0Nzc1NlbGVjdG9yLCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdGlmICh0dXBsZXMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHQoKSA9PiBwcm9wTmFtZSArIHNlbGVjdG9yVG9TdHJpbmcoIHR1cGxlWzBdKSwgdW5kZWZpbmVkLCB0dXBsZVsxXSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZS5lbmRzV2l0aChcIiZcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdCgpID0+IHNlbGVjdG9yVG9TdHJpbmcoIHR1cGxlWzBdKSArIHByb3BOYW1lLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHRoaXMgaXMgYSByZWd1bGFyIENTUyBwcm9wZXJ0eTogY29weSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gb3VyIGludGVybmFsIHN0eWxlc2V0XHJcblx0XHRcdFx0dGhpcy5zdHlsZXNldFtwcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIHByb2Nlc3MgdGhlbSB1bmRlciB0aGUgc2FtZSBjb250YWluZXJcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIG51bGwpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIG51bGwpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHJvdGVjdGVkIGNvcHlGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgb24gYSBuZXdseSBjcmVhdGVkIG9iamVjdCBzbyB3ZSBkb24ndCBoYXZlIGFueSBwcm9wZXJ0aWVzIGluXHJcblx0XHQvLyBvdXIgb3duIHN0eWxlc2V0IHlldFxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBzcmMuc3R5bGVzZXQpO1xyXG5cdFx0dGhpcy5jb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBzcmMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgZGVwZW5kZW50IHJ1bGVzIGZyb20gYW5vdGhlciBzdHlsZSBydWxlIG9iamVjdC5cclxuXHRwcml2YXRlIGNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHNyYzogU3R5bGVSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHNyYy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBzcmMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgYXJyID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKCFhcnIpXHJcblx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IGFyciA9IFtdO1xyXG5cclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChzcmNEZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBuZXdEZXBSdWxlID0gc3JjRGVwUnVsZS5jbG9uZSgpIGFzIERlcGVuZGVudFJ1bGU7XHJcblx0XHRcdFx0XHRuZXdEZXBSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHRcdGFyci5wdXNoKCBuZXdEZXBSdWxlKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgbmV3RGVwUnVsZSA9IChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmNsb25lKCkgYXMgRGVwZW5kZW50UnVsZTtcclxuXHRcdFx0XHRuZXdEZXBSdWxlLmNvbnRhaW5pbmdSdWxlID0gdGhpcztcclxuXHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IG5ld0RlcFJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHJ1bGUuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID09IG51bGwpXHJcblx0XHRcdHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIGAke3RoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmd9IHske3N0eWxlc2V0VG9TdHJpbmcoIHRoaXMuc3R5bGVzZXQpfX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogU3R5bGVSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSB0aGlzLmNsb25lT2JqZWN0KCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5zdHlsZXNldCkubGVuZ3RoID4gMClcclxuXHRcdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIHRoaXMudG9Dc3NTdHJpbmcoKSwgcGFyZW50KSBhcyBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBpbnNlcnQgdGhlbSB1bmRlciB0aGUgc2FtZSBwYXJlbnRcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLmluc2VydCggcGFyZW50KSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5pbnNlcnQoIHBhcmVudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENsZXJzIHRoZSBDU1MgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jbGVhcigpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgY2xlYXIgdGhlbSB0b29cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLmNsZWFyKCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuY2xlYXIoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRpZiAoT2JqZWN0LmtleXModGhpcy5zdHlsZXNldCkubGVuZ3RoID4gMClcclxuXHRcdFx0Y3R4LmFkZFJ1bGVUZXh0KCB0aGlzLnRvQ3NzU3RyaW5nKCkpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgaW5zZXJ0IHRoZW0gdW5kZXIgdGhlIHNhbWUgcGFyZW50XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0cHJvcFZhbC5mb3JFYWNoKCAoZGVwUnVsZTogRGVwZW5kZW50UnVsZSkgPT4gZGVwUnVsZS5zZXJpYWxpemUoIGN0eCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuc2VyaWFsaXplKCBjdHgpO1xyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRwdWJsaWMgZ2V0IHNlbGVjdG9yVGV4dCgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9PSBudWxsKVxyXG5cdFx0XHR0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID0gdGhpcy5nZXRTZWxlY3RvclN0cmluZygpO1xyXG5cdFx0XHRcclxuXHRcdHJldHVybiB0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIGFsbG93cyB0aGUgb2JqZWN0IHRvIHBhcnRpY3BhdGUgaW4gXCJ2YWx1ZVRvU3RyaW5nXCIgc2VyaWFsaXphdGlvbi4gV2hlbmV2ZXJcclxuXHQgKiB0aGUgU3R5bGVSdWxlLWRlcml2ZWQgb2JqZWN0IGlzIGVuY291bnRlcmVkIGJ5IHRoZSBgVXRpbEZ1bmMudmFsdWVUb1N0cmluZ2AgZnVuY3Rpb24sXHJcblx0ICogdGhlIHJ1bGUncyBzZWxlY3RvciB3aWxsIGJlIHVzZWQuXHJcblx0ICovXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0b3JUZXh0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgbmV3IHN0eWxlIHJ1bGUgb2JqZWN0IG9mIHRoZSBwcm9wZXIgdHlwZSwgYnV0IHdpdGhvdXQgdGhlIHN0eWxlc2V0IGFuZCBkZXBlbmRlbnRcclxuXHQvLyBydWxlcy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgY2xvbmVPYmplY3QoKTogU3R5bGVSdWxlO1xyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGlzIHJ1bGUuXHJcblx0ICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgb2YgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sXHJcbiAgICAgICAgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaXJzdCBzZXQvcmVtb3ZlIHRoZSB2YWx1ZSBpbiBvdXIgaW50ZXJuYWwgc3R5bGVzZXQgb2JqZWN0XHJcblx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0ZGVsZXRlIHRoaXMuc3R5bGVzZXRbbmFtZV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuc3R5bGVzZXRbbmFtZV0gPSBpbXBvcnRhbnQgPyB7IFwiIVwiOiB2YWx1ZSBhcyBhbnkgfSA6IHZhbHVlIGFzIGFueTtcclxuXHJcblx0XHQvLyBzZWNvbmQsIGlmIENTU1J1bGUgYWxyZWR5IGV4aXN0cywgc2V0L3JlbW92ZSB0aGUgcHJvcGVydHkgdmFsdWUgdGhlcmVcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcbiAgICAgICAge1xyXG5cdFx0ICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc1J1bGUsIGNhbWVsVG9EYXNoKCBuYW1lKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIG5hbWUsIHZhbHVlLCB0cnVlKSwgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZHMvcmVwbGFjZXMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gdmFyT2JqIElWYXJSdWxlIG9iamVjdCBkZWZpbmluZyBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhclZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0Q3VzdG9tUHJvcDxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdmFyT2JqOiBJVmFyUnVsZTxLPiwgdmFsdWU6IFZhclZhbHVlVHlwZTxLPixcclxuXHRcdGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF2YXJPYmogfHwgISh2YXJPYmogaW5zdGFuY2VvZiBWYXJSdWxlKSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGZpcnN0IHNldC9yZW1vdmUgdGhlIHZhbHVlIGluIG91ciBpbnRlcm5hbCBzdHlsZXNldCBvYmplY3RcclxuXHRcdGxldCBjdXJyQ3VzdG9tUHJvcHMgPSB0aGlzLnN0eWxlc2V0W1wiLS1cIl0gYXMgQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG5cdFx0aWYgKGN1cnJDdXN0b21Qcm9wcyB8fCB2YWx1ZSAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodmFsdWUgPT0gbnVsbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChjdXJyQ3VzdG9tUHJvcHMubGVuZ3RoID4gMClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBjdXJyQ3VzdG9tUHJvcHMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW1bMF0gPT09IHZhck9iaik7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMClcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWYgKGN1cnJDdXN0b21Qcm9wcy5sZW5ndGggPT09IDEpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtcIi0tXCJdID0gdW5kZWZpbmVkO1xyXG5cdFx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzLnNwbGljZSggaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWN1cnJDdXN0b21Qcm9wcylcclxuXHRcdFx0XHRcdHRoaXMuc3R5bGVzZXRbXCItLVwiXSA9IGN1cnJDdXN0b21Qcm9wcyA9IFtbdmFyT2JqLCB2YWx1ZV1dO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBjdXJyQ3VzdG9tUHJvcHMuZmluZEluZGV4KCBpdGVtID0+IGl0ZW1bMF0gPT09IHZhck9iaik7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPj0gMClcclxuXHRcdFx0XHRcdFx0Y3VyckN1c3RvbVByb3BzW2luZGV4XVsxXSA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHMucHVzaCggW3Zhck9iaiwgdmFsdWVdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBzZWNvbmQsIGlmIENTU1J1bGUgYWxyZWR5IGV4aXN0cywgc2V0L3JlbW92ZSB0aGUgcHJvcGVydHkgdmFsdWUgdGhlcmVcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggdGhpcy5jc3NSdWxlLCB2YXJPYmouY3NzTmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlID09IG51bGwgPyBudWxsIDogc3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgdmFsdWUsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NTdHlsZVJ1bGU7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9iamVjdCBjb250YWluaW5nIGRlcGVuZGVudCBydWxlcy4gUHJvcGVydHkgbmFtZXMgYXJlIHRha2VuIGZyb20gc3BlY2lhbCBwcm9wZXJ0aWVzXHJcblx0ICogb2YgdGhlIENvbWJpbmVkU3R5bGVzZXQuIFRoaXMgb2JqZWN0IGFsbG93cyBjYWxsZXJzIHRvIGFjY2VzcyBkZXBlbmRlbnQgcnVsZXMgdG8gY2hhbmdlXHJcblx0ICogc3R5bGUgcHJvcGVydHkgdmFsdWVzIHByb2dyYW1tYXRpY2FsbHkuXHJcblx0ICovXHJcblx0cHVibGljIGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlcztcclxuXHJcblx0Ly8gUmVzdWx0YW50IG9iamVjdCBkZWZpbmluZyBwcm9wZXJ0aWVzIHRvIGJlIGluc2VydGVkIGludG8gRE9NLlxyXG5cdHByaXZhdGUgc3R5bGVzZXQ6IFN0eWxlc2V0O1xyXG5cclxuXHQvLyBTZWxlY3RvciBzdHJpbmcgY2FjaGVkIGFmdGVyIGl0IGlzIGZpcnN0IG9idGFpbmVkLiBOZWVkZWQgdG8gbm90IGludm9rZSBnZXRTZWxlY3RvclN0cmluZ1xyXG5cdC8vIG11bHRpcGxlIHRpbWVzIGluIHRoZSBwcmVzZW5jZSBvZiBkZXBlbmRlbnQgcnVsZXMuXHJcblx0cHJpdmF0ZSBjYWNoZWRTZWxlY3RvclN0cmluZzogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBEZXBlbmRlbnRSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgZGVwZW5kcyBvbiB0aGUgY29udGFpbmluZyBzdHlsZSBydWxlLiBUaGlzXHJcbiAqIGlzIHVzZWQgZm9yIHBzZXVkbyBjbGFzc2VzLCBwc2V1ZG8gZWxlbWVudHMsIGNvbWJpbmF0b3JzIGFuZCBvdGhlciBzZWxlY3RvcnMgdGhhdCBjb21iaW5lIHRoZVxyXG4gKiBjb250YWluaW5nIHJ1bGUncyBzZWxlY3RvciB3aXRoIGFkZGl0aW9uYWwgc2VsZWN0b3IgaXRlbXMuXHJcbiAqL1xyXG5jbGFzcyBEZXBlbmRlbnRSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHQvLyBmb3IgcmVndWxhciBzZWxlY3RvcnMsIHBzZXVkbyBjbGFzc2VzIGFuZCBwc2V1ZG8gZWxlbWVudHMsIHRoZSBzZWxlY3RvciBhbHJlYWR5IGNvbnRhaW5zXHJcblx0Ly8gdGhlIGFtcGVyc2FuZCBhbmQgdGhlIHNlbGVjdG9yUGFyYW0gaXMgdW5kZWZpbmVkLiBGb3IgcGFyYW1ldGVyaXplZCBwc2V1ZG8gY2xhc3NlcywgcHN1ZG9cclxuXHQvLyBlbGVtZW50cyBhbmQgY29tYmluYXRvcnMsIHRoZSBzZWxlY3RvclBhcmFtIGlzIGRlZmluZWQgYW5kIHRoZSBzZWxlY3RvciBpcyBqdXN0IHRoZSBlbnRpdHlcclxuXHQvLyBuYW1lLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I6IENzc1NlbGVjdG9yLCBzZWxlY3RvclBhcmFtPzogYW55LCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsXHJcblx0XHRjb250YWluaW5nUnVsZT86IFN0eWxlUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdFx0dGhpcy5zZWxlY3RvclBhcmFtID0gc2VsZWN0b3JQYXJhbTtcclxuXHRcdHRoaXMuY29udGFpbmluZ1J1bGUgPSBjb250YWluaW5nUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IERlcGVuZGVudFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IERlcGVuZGVudFJ1bGUoIHRoaXMuc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3JQYXJhbSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGxldCBwYXJlbnRTZWxlY3RvciA9IHRoaXMuY29udGFpbmluZ1J1bGUhLnNlbGVjdG9yVGV4dDtcclxuXHRcdGlmICh0aGlzLnNlbGVjdG9yUGFyYW0pXHJcblx0XHR7XHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IgYXMgc3RyaW5nO1xyXG5cdFx0XHRyZXR1cm4gYCR7cGFyZW50U2VsZWN0b3J9JHtzZWxlY3Rvcn0oJHtwc2V1ZG9FbnRpdHlUb1N0cmluZyggc2VsZWN0b3IsIHRoaXMuc2VsZWN0b3JQYXJhbSl9KWA7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGNvbnZlcnQgc2VsZWN0b3IgdG8gc3RyaW5nLlxyXG5cdFx0XHRsZXQgc2VsZWN0b3IgPSBzZWxlY3RvclRvU3RyaW5nKCB0aGlzLnNlbGVjdG9yKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBzZWxlY3RvciBzdHJpbmcgZG9lc24ndCBoYXZlIGFueSBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCwgd2VcclxuXHRcdFx0Ly8gc2ltcGx5IGFwcGVuZCB0aGUgc2VsZWN0b3IgdG8gdGhlIHBhcmVudCBzZWxlY3Rvcjsgb3RoZXJ3aXNlLCB3ZSByZXBsYWNlIGFsbFxyXG5cdFx0XHQvLyBvY2N1cnJlbmNlcyBvZiB0aGUgYW1wZXJzYW5kIHN5bWJvbCBpbiB0aGUgc2VsZWN0b3Igc3RyaW5nIHdpdGggdGhlIHNlbGVjdG9yXHJcblx0XHRcdC8vIHN0cmluZyBvZiB0aGUgcGFyZW50IHJ1bGUuXHJcblx0XHRcdHJldHVybiBzZWxlY3Rvci5pbmRleE9mKCBcIiZcIikgPCAwXHJcblx0XHRcdFx0PyBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfWBcclxuXHRcdFx0XHQ6IHNlbGVjdG9yLnJlcGxhY2UoIC8mL2csIHBhcmVudFNlbGVjdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUGFydGlhbCBzZWxlY3RvciB0aGF0IHNob3VsZCBiZSBhcHBlbmRlZCB0byB0aGUgcGFyZW50IHNlbGVjdG9yLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG5cclxuXHQvLyBPcHRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VsZWN0b3IgLSB1c2VkIGZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGFuZCBlbGVtZW50cy5cclxuXHRwcml2YXRlIHNlbGVjdG9yUGFyYW0/OiBhbnk7XHJcblxyXG5cdC8vIFBhcmVudCBzdHlsZSBydWxlIG9mIHdoaWNoIHRoaXMgcnVsZSBpcyBkZXBlbmRlbnQuXHJcblx0cHVibGljIGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQWJzdHJhY3RSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgY2FuIG9ubHkgYmUgdXNlZCBhcyBhIGJhc2UgZm9yIG90aGVyIHN0eWxlXHJcbiAqIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFic3RyYWN0UnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBBYnN0cmFjdFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEFic3RyYWN0UnVsZSgpO1xyXG5cdH1cclxuXHJcblx0Ly8gT3ZlcnJpZGVzIHRoZSBTdHlsZVJ1bGUncyBpbXBsZW1lbnRhdGlvbiB0byBkbyBub3RoaW5nLiBObyBDU1NTdHlsZVJ1bGUgaXMgY3JlYXRlZCBmb3JcclxuXHQvLyBhYnN0cmFjdCBydWxlcy5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTmFtZWRTdHlsZVJ1bGUgY2xhc3MgaXMgYSBiYXNlIGZvciBzdHlsZSBydWxlIGNsYXNzZXMgdGhhdCBhcmUgYWxzbyBuYW1lZCBlbnRpdGllcyAtIHN1Y2hcclxuICogYXMgY2xhc3MgcnVsZSBhbmQgSUQgcnVsZS5cclxuICovXHJcbmFic3RyYWN0IGNsYXNzIE5hbWVkU3R5bGVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSU5hbWVkRW50aXR5XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lciwgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdFt0aGlzLm5hbWUsIHRoaXMuY3NzTmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSwgdGhpcy5jc3NQcmVmaXgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY3NzTmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIEltcGxlbWVudGF0aW9uIG9mIHRoZSB0b1N0cmluZyBtZXRob2QgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgcnVsZSAod2l0aG91dCB0aGUgQ1NTIHByZWZpeCkuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGNzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJvdGVjdGVkIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIENTUyBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBOYW1lZFN0eWxlUnVsZSBpbXBsZW1lbnRzIElDbGFzc1J1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkgfCBJQ2xhc3NOYW1lUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgY2xhc3MgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzQ2xhc3NOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNzc05hbWU7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBDbGFzc1J1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IENsYXNzUnVsZSggdW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmcgeyByZXR1cm4gXCIuXCI7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhbiBJRC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJRFJ1bGUgZXh0ZW5kcyBOYW1lZFN0eWxlUnVsZSBpbXBsZW1lbnRzIElJRFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG5cdH1cclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIGVsZW1lbnQgSUQgcHJlZml4ZWQgd2l0aCBcIiNcIiAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzSUROYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNzc05hbWU7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBJRFJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IElEUnVsZSggdW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHByZWZpeCB0aGF0IGlzIHB1dCBiZWZvcmUgdGhlIGVudGl0eSBuYW1lIHRvIGNyZWF0ZSBhIENTUyBuYW1lIHVzZWQgaW4gc3R5bGUgcnVsZVxyXG5cdC8vIHNlbGVjdG9ycy5cclxuXHRwcm90ZWN0ZWQgZ2V0IGNzc1ByZWZpeCgpOiBzdHJpbmcgeyByZXR1cm4gXCIjXCI7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNlbGVjdG9yUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgQ1NTIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yUnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IFNlbGVjdG9yUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgU2VsZWN0b3JSdWxlKCB0aGlzLnNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHVibGljIGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB2YWwyc3RyKCB0aGlzLnNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cdC8vIHNlbGVjdG9yIG9iamVjdCBmb3IgdGhpcyBydWxlLlxyXG5cdHByaXZhdGUgc2VsZWN0b3I6IENzc1NlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVZhclJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7VmFyVmFsdWVUeXBlLCBWYXJUZW1wbGF0ZU5hbWV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7c3R5bGVQcm9wVG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7Y3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS4gVmFyUnVsZSBkb2VzIG5vdCBkZXJpdmUgZnJvbSB0aGUgUnVsZVxyXG4gKiBjbGFzcyBiZWNhdXNlIGl0IGlzIG5vdCBhIHJlYWwgQ1NTIHJ1bGU7IGhvd2V2ZXIsIGluIG1hbnkgYXNwZWN0cyBpdCByZXBlYXRzIHRoZSBSdWxlJ3NcclxuICogZnVuY3Rpb25hbGl0eS4gSW4gcGFydGljdWxhciBpdCBoYXMgdGhlIHByb2Nlc3MgZnVuY3Rpb24gdGhhdCBhbGxvd3MgaXQgdG8gb2J0YWluIGFuIGFjdHVhbFxyXG4gKiBuYW1lLCB3aGljaCB3aWxsIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBhbmQgdXNpbmcgdGhpcyBjdXN0b20gcHJvcGVydHkgaW4gQ1NTLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHdoaWxlIHRoZSB0eXBlIHBhcmFtZXRlciBLIGlzIGEga2V5IG9mIHRoZSBJQ3NzU3R5bGVzZXQgaW50ZXJmYWNlLCB0aGUgdmFsdWUgaXMgb2ZcclxuICogdHlwZSBJU3RpbGVzZXRbS10sIHdoaWNoIGlzIEV4dGVuZGVkPElDc3NTdHlsZXNldFtLXT4uIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmcgdmFsdWVzIHRoYXQgYXJlXHJcbiAqIHZhbGlkIGZvciB0aGUgRXh0ZW5kZWQgcm9wZXJ0eSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZhclJ1bGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElWYXJSdWxlPEs+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHRlbXBsYXRlOiBLLCB2YWx1ZT86IFZhclZhbHVlVHlwZTxLPiwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz4pXHJcblx0e1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlLCBcIi0tXCIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogVmFyUnVsZTxLPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgVmFyUnVsZTxLPih0aGlzLnRlbXBsYXRlLCB0aGlzLnZhbHVlLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy52YWx1ZSA9PSBudWxsID8gbnVsbCA6IGAke3RoaXMuY3NzTmFtZX06ICR7c3R5bGVQcm9wVG9TdHJpbmcoIHRoaXMudGVtcGxhdGUsIHRoaXMudmFsdWUsIHRydWUpfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSB2YXIoLS1uYW1lKSBleHByZXNzaW9uLlxyXG4gICAgcHVibGljIHZhbHVlVG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRyZXR1cm4gYHZhcigke3RoaXMuY3NzTmFtZX0pYDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBmb3IgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgc2V0VmFsdWUoIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz4sIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIuc2V0Q3VzdG9tVmFyVmFsdWUoIHRoaXMuY3NzTmFtZSxcclxuICAgICAgICAgICAgdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBzdHlsZVByb3BUb1N0cmluZyggdGhpcy50ZW1wbGF0ZSwgdmFsdWUsIHRydWUpLFxyXG4gICAgICAgICAgICBpbXBvcnRhbnQsIHNjaGVkdWxlclR5cGUpXHJcblx0fVxyXG5cclxuXHJcblx0XHJcblx0Ly8gLy8gTmFtZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIHN0eWxlc2hlZXQgZGVmaW5pdGlvbiB0byB3aGljaCB0aGlzIHJ1bGUgd2FzIGFzc2lnbmVkLiBUaGlzIGlzXHJcblx0Ly8gLy8gbnVsbCBmb3IgU3R5bGVzaGVldC5cclxuXHQvLyBwdWJsaWMgcnVsZU5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLlxyXG5cdHB1YmxpYyB0ZW1wbGF0ZTogSztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBWYWx1ZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHRwcml2YXRlIHZhbHVlOiBWYXJWYWx1ZVR5cGU8Sz47XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz47XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJTmFtZWRDb2xvcnMsIENzc0NvbG9yLCBDb2xvcnN9IGZyb20gXCIuL0NvbG9yVHlwZXNcIlxyXG5pbXBvcnQge0Nzc0FuZ2xlTWF0aCwgdmFsMnN0cn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtFeHRlbmRlZH0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcHJlZGVmaW5lZCBjb2xvciBuYW1lcyBieSB0aGVpciBudW1lcmljIHZhbHVlcy4gT25seSBidWlsdC1pbiBjb2xvciBuYW1lcyB3aWxsIGJlIGluXHJcbiAqIHRoaXMgbWFwIC0gdGhvc2UgbmFtZWQgY29sb3JzIHRoYXQgYXJlIGFkZGVkIHVzaW5nIG1vZHVsZSBhdWdtZW50YXRpb24gd2lsbCBOT1QgcmVzaWRlIGluXHJcbiAqIHRoaXMgbWFwLiBUaGlzIGlzIG5lZWRlZCB0byBjb252ZXJ0IHRoZSBudW1lcmljIGNvbG9yIHZhbHVlcyBzZXQgdXNpbmcgdGhlIENvbG9yLmJyb3duXHJcbiAqIG5vdGF0aW9uIHRvIHRoZWlyIG5hbWVzIHdoZW4gaW5zZXJ0aW5nIENTUyBydWxlcy5cclxuICovXHJcbmxldCByZXZlcnNlZENvbG9yTWFwID0gbmV3IE1hcDxudW1iZXIsc3RyaW5nPigpO1xyXG5cclxuLy8gYnVpbGQgUmV2ZXJzZWQgQ29sb3IgTWFwXHJcbk9iamVjdC5lbnRyaWVzKCBDb2xvcnMpLmZvckVhY2goIChbbmFtZSwgdmFsdWVdKSA9PiByZXZlcnNlZENvbG9yTWFwLnNldCggdmFsdWUsIG5hbWUpICk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1MgY29sb3Igc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gY29sb3JOdW1iZXJUb1N0cmluZyggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgdGhlIG51bWJlciBpcyBuZWdhdGl2ZSwgcmVtZW1iZXIgdGhhdCBmYWN0IGFuZCBnZXQgdGhlIHBvc2l0aXZlIG51bWJlclxyXG4gICAgbGV0IG4gPSB2YWwgPCAwID8gLXZhbCA6IHZhbDtcclxuICAgIGxldCBpc05lZ2F0aXZlID0gbiAhPT0gdmFsO1xyXG5cclxuICAgIC8vIGlmIHRoZSBudW1iZXIgaGFzIGEgZmxvYXRpbmcgcG9pbnQgcGFydCwgc2VwYXJhdGUgaXQgaW50byBhbHBoYSBjaGFubmVsXHJcbiAgICBsZXQgYSA9IDA7XHJcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIobikpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGsgPSBNYXRoLmZsb29yKG4pO1xyXG4gICAgICAgIC8vIGEgPSBNYXRoLnJvdW5kKCAobiAtIGspICogMTAwKTtcclxuICAgICAgICBhID0gTWF0aC5yb3VuZCggKG4gLSBrKSAqIDI1NSk7XHJcbiAgICAgICAgbiA9IGs7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGhlIG51bWJlciB3YXMgbmVnYXRpdmUgd2UgcmV2ZXJ0IHRoZSBjb2xvciBieSBuZWdhdGluZyBhbGwgdGhlIGJpdHMuIEluIGFueSBjYXNlLFxyXG4gICAgLy8gd2UgY2xlYXIgZXZlcnl0aGluZyBiZXlvbmQgdGhlIGZpcnN0IHRocmVlIGJ5dGVzLlxyXG4gICAgbiA9IGlzTmVnYXRpdmUgPyB+KDB4RkYwMDAwMDAgfCBuKSA6IDB4MDBGRkZGRkYgJiBuO1xyXG5cclxuICAgIGlmIChhID4gMClcclxuICAgICAgICAvLyByZXR1cm4gY29sb3JXaXRoQWxwaGFUb1N0cmluZyggbiwgYSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHJnYlRvU3RyaW5nKCAobiAmIDB4RkYwMDAwKSA+PiAxNiwgKG4gJiAweDAwRkYwMCkgPj4gOCwgbiAmIDB4MDAwMEZGLCBhKTtcclxuICAgICAgICByZXR1cm4gXCIjXCIgKyBuLnRvU3RyaW5nKDE2KS5wYWRTdGFydCggNiwgXCIwXCIpICsgYS50b1N0cmluZygxNikucGFkU3RhcnQoIDIsIFwiMFwiKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIGEgbmFtZWQgY29sb3Igd2l0aCB0aGUgZ2l2ZW4gdmFsdWUsIHJldHVybiB0aGUgY29sb3IgbmFtZVxyXG4gICAgICAgIGxldCBuYW1lID0gcmV2ZXJzZWRDb2xvck1hcC5nZXQoIG4pO1xyXG4gICAgICAgIHJldHVybiBuYW1lID8gbmFtZSA6IFwiI1wiICsgbi50b1N0cmluZygxNikucGFkU3RhcnQoIDYsIFwiMFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGNvbG9yIHNlcGFyYXRpb24gdmFsdWUgdG8gYSBDU1Mgc3RyaW5nLiBTZXBhcmF0aW9uIGFyZSByZXByZXNlbnRlZCBhcyBhIG51bWJlclxyXG4gKiB3aXRoIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gc2VwYXJhdGlvblRvU3RyaW5nKCBjOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKGMgIT09IDAgJiYgYyA+IC0xICYmIGMgPCAxKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGludmVydCBuZWdhdGl2ZSB2YWx1ZVxyXG4gICAgICAgIGlmIChjIDwgMClcclxuICAgICAgICAgICAgYyA9IDEgKyBjO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCggYyAqIDEwMCkgKyBcIiVcIjtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBjbGFtcCB0aGUgdmFsdWUgYmV0d2VlbiAtMjU1IGFuZCAyNTVcclxuICAgICAgICBjID0gYyA+IDI1NSA/IDI1NSA6IGMgPCAtMjU1ID8gLTI1NSA6IGM7XHJcblxyXG4gICAgICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihjKSlcclxuICAgICAgICAgICAgYyA9IE1hdGgucm91bmQoYyk7XHJcblxyXG4gICAgICAgIC8vIGludmVydCBuZWdhdGl2ZSB2YWx1ZVxyXG4gICAgICAgIGlmIChjIDwgMClcclxuICAgICAgICAgICAgYyA9IDI1NSArIGM7XHJcblxyXG4gICAgICAgIHJldHVybiBjLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIHRvIGEgQ1NTIHN0cmluZy4gQWxwaGEgaXMgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXJcclxuICogd2l0aCB0aGUgZm9sbG93aW5nIG1lYW5pbmc6XHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gYWxwaGFUb1N0cmluZyggYT86IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiBhbHBoYSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgc2V0IGl0IHRvIDFcclxuICAgIGlmIChhID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiMVwiO1xyXG5cclxuICAgIC8vIG5lZ2F0aXZlIGFuZCBwb3NpdGl2ZSB2YWx1ZXMgb2YgYWxwaGEgYXJlIHRyZWF0ZWQgaWRlbnRpY2FsbHksIHNvIGNvbnZlcnQgdG8gcG9zaXRpdmVcclxuICAgIGlmIChhIDwgMClcclxuICAgICAgICBhID0gLWE7XHJcblxyXG4gICAgLy8gY29udmVydCBhbHBoYSB0byBhIG51bWJlciB3aXRoIGFic29sdXRlIHZhbHVlIGxlc3MgdGhhbiAxIChpZiBpdCBpcyBub3QgeWV0KS4gSWYgYWxwaGFcclxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiAxMDAsIHNldCBpdCB0byAxOyBvdGhlcndpc2UsIFxyXG4gICAgcmV0dXJuIChhID4gMTAwID8gMSA6IGEgPiAxID8gYSAvIDEwMCA6IGEpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgcmVkLCBncmVlbiwgYmx1ZSBzZXBhcmF0aW9uIHZhbHVlcyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciB3aXRoXHJcbiAqIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gciBSZWQgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGIgQmx1ZSBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2JUb1N0cmluZyggcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYHJnYmEoJHtzZXBhcmF0aW9uVG9TdHJpbmcoIHIpfSwke3NlcGFyYXRpb25Ub1N0cmluZyggZyl9LCR7c2VwYXJhdGlvblRvU3RyaW5nKCBiKX0sJHthbHBoYVRvU3RyaW5nKCBhKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBudW1iZXIgcmVwcmVzZW50aW5nIGVpdGhlciBzYXR1cmF0aW9uIG9yIGxpZ2h0bmVzcyBpbiB0aGUgSFNMIHNjaGVtZSB0byBwZXJjZW50YWdlOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlIGFyZSBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZCB0byAxMDAuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvclBlcmNlbnRUb1N0cmluZyggbjogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIC8vIG5lZ2F0aXZlIGFuZCBwb3NpdGl2ZSB2YWx1ZXMgYXJlIHRyZWF0ZWQgaWRlbnRpY2FsbHksIHNvIGNvbnZlcnQgdG8gcG9zaXRpdmVcclxuICAgIGlmIChuIDwgMClcclxuICAgICAgICBuID0gLW47XHJcblxyXG4gICAgLy8gY29udmVydCBhbHBoYSB0byBhIG51bWJlciB3aXRoIGFic29sdXRlIHZhbHVlIGxlc3MgdGhhbiAxIChpZiBpdCBpcyBub3QgeWV0KS4gSWYgYWxwaGFcclxuICAgIC8vIGlzIGdyZWF0ZXIgdGhhbiAxMDAsIGNsYW1wIGl0LiBcclxuICAgIHJldHVybiAobiA+IDEwMCA/IDEwMCA6IE1hdGgucm91bmQobiA8PSAxID8gbiAqIDEwMCA6IG4pKS50b1N0cmluZygpICsgXCIlXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIEh1ZSBjb21wb25lbnQgaXMgdHJlYXRlZCBhcyB0aGUgQ1NTIGA8YW5nbGU+YCB0eXBlLiBOdW1iZXJzIGFyZSBjb25zaWRlcmVkIGRlZ3JlZXMuXHJcbiAqIFxyXG4gKiBUaGUgU2F0dXJhdGlvbiBhbmQgTGlnaHRuZXNzIGNvbXBvbmVudHMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZXM6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUgYXJlIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkIHRvIDEwMC5cclxuICpcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9TdHJpbmcoIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyLCBsOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBoc2xhKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoaCl9LCR7Y29sb3JQZXJjZW50VG9TdHJpbmcocyl9LCR7Y29sb3JQZXJjZW50VG9TdHJpbmcobCl9LCR7YWxwaGFUb1N0cmluZyggYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjb2xvciBhbmQgdGhlIGFscGhhIG1hc2sgdG8gdGhlIENTUyBDb2xvciByZXByZXNlbnRhdGlvbi4gVGhpc1xyXG4gKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3IgdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqIFxyXG4gKiBUaGUgY29sb3IgY2FuIGJlIHNwZWNpZmllZCBhcyBhIG51bWVyaWMgdmFsdWUgb3IgYXMgYSBzdHJpbmcgY29sb3IgbmFtZS5cclxuICogXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGlzIHNwZWNpZmllZCBhcyBhIG51bWJlcjpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBOdW1iZXIgMCB0byAxIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVyIDEgdG8gMTAwIGluY2x1c2l2ZSwgd2hpY2ggaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gTnVtYmVycyBncmVhdGVyIHRoYW4gMTAwIGFyZSBjbGFtcGVkIHRvIDEwMDtcclxuICogXHJcbiAqIEBwYXJhbSBjIENvbG9yIHZhbHVlIGFzIGVpdGhlciBhIG51bWJlciBvciBhIG5hbWVkIGNvbG9yXHJcbiAqIEBwYXJhbSBhIEFscGhhIGNoYW5uZWwgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvcldpdGhBbHBoYVRvU3RyaW5nKCBjOiBudW1iZXIgfCBrZXlvZiBJTmFtZWRDb2xvcnMsIGE6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB0aGUgYWxwaGEgaXMgMCwgcmV0dXJuIHRyYW5zcGFyZW50IGNvbG9yXHJcbiAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCIjMDAwMFwiO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgY29sb3IgdG8gbnVtZXJpYyB2YWx1ZSAoaWYgaXQncyBub3QgYSBudW1iZXIgeWV0KS4gSWYgdGhlIGNvbG9yIHdhcyBnaXZlbiBhcyBhXHJcbiAgICAvLyBzdHJpbmcgdGhhdCB3ZSBjYW5ub3QgZmluZCBpbiB0aGUgQ29sb3JzIG9iamVjdCwgcmV0dXJuIHB1cmUgd2hpdGUuXHJcbiAgICBsZXQgbiA9IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gQ29sb3JzW2NdIDogYztcclxuICAgIGlmIChuID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiRkZGXCI7XHJcblxyXG4gICAgLy8gbmVnYXRpdmUgYW5kIHBvc2l0aXZlIHZhbHVlcyBvZiBhbHBoYSBhcmUgdHJlYXRlZCBpZGVudGljYWxseSwgc28gY29udmVydCB0byBwb3NpdGl2ZVxyXG4gICAgaWYgKGEgPCAwKVxyXG4gICAgICAgIGEgPSAtYTtcclxuXHJcbiAgICAvLyBjb252ZXJ0IGFscGhhIHRvIGEgbnVtYmVyIHdpdGggYWJzb2x1dGUgdmFsdWUgbGVzcyB0aGFuIDEgKGlmIGl0IGlzIG5vdCB5ZXQpLiBJZiBhbHBoYVxyXG4gICAgLy8gaXMgMSBvciAxMDAsIHRoZW4gc2V0IGl0IHRvIDAgYmVjYXVzZSAwIGluIHRoZSBjb2xvck51bWJlclRvU3RyaW5nIG1lYW5zIFwibm8gYWxwaGFcIi5cclxuICAgIGEgPSBhID09PSAxIHx8IGEgPj0gMTAwID8gMCA6IGEgPiAxID8gYSAvIDEwMCA6IGE7XHJcblxyXG4gICAgLy8gbWFrZSB0aGUgbmV3IGFscGhhXHJcbiAgICByZXR1cm4gY29sb3JOdW1iZXJUb1N0cmluZyggbiA+IDAgPyBuICsgYSA6IG4gLSBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3Igc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy4gSWYgYSBzdHJpbmcgdmFsdWUgaXMgaW4gdGhlIENvbG9ycyBvYmplY3Qgd2VcclxuICogbmVlZCB0byBnZXQgaXRzIG51bWJlciBhbmQgY29udmVydCBpdCB0byB0aGUgcmdiW2FdKCkgZnVuY3Rpb24gYmVjYXVzZSBpdCBtaWdodCBiZSBhIGN1c3RvbVxyXG4gKiBjb2xvciBuYW1lIGFkZGVkIHZpYSBJTmFtZWRDb2xvcnMgbW9kdWxlIGF1Z21lbnRhdGlvbi4gRm9yIG51bWVyaWMgdmFsdWVzLCB3ZSBjaGVjayBpZiB0aGlzIGlzXHJcbiAqIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBjb2xvcnMgYW5kIHJldHVybiBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NDb2xvcj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21TdHJpbmc6IHYgPT4gQ29sb3JzW3ZdID8gY29sb3JOdW1iZXJUb1N0cmluZyggQ29sb3JzW3ZdKSA6IHYsXHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JOdW1iZXJUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHR5cGVzIGZvciB3b3JraW5nIHdpdGggQ1NTIGNvbG9ycy5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJR2VuZXJpY1Byb3h5IH0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkQ29sb3JzIGludGVyZmFjZSBsaXN0cyB0aGUgbmFtZXMgb2Ygc3RhbmRhcmQgV2ViIGNvbG9ycy4gSXQgaXMgbmVlZGVkIHRvIGFsbG93IGRldmVsb3BlcnNcclxuICogdG8gYWRkIG5ldyBuYW1lZCBjb2xvcnMgdGhyb3VnaCBtb2R1bGUgYXVnbWVudGF0aW9uIHRlY2huaXF1ZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkQ29sb3JzXHJcbntcclxuICAgIHJlYWRvbmx5IGJsYWNrOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpbHZlcjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyYXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hcm9vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlZDogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHB1cnBsZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvdzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdnk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRlYWw6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWE6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFsaWNlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFudGlxdWV3aGl0ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGFxdWFtYXJpbmU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGF6dXJlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJlaWdlOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJpc3F1ZTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsYW5jaGVkYWxtb25kOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJsdWV2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJyb3duOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGJ1cmx5d29vZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNhZGV0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNob2NvbGF0ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcmFsOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5mbG93ZXJibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNvcm5zaWxrOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGNyaW1zb246ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGN5YW46ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtibHVlOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtjeWFuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmF5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtncmV5OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtraGFraTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmttYWdlbnRhOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmFuZ2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtvcmNoaWQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtyZWQ6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzYWxtb246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzZWFncmVlbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyYXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmtzbGF0ZWdyZXk6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRhcmt2aW9sZXQ6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBwaW5rOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRlZXBza3libHVlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyYXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRpbWdyZXk6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGRvZGdlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZpcmVicmljazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZsb3JhbHdoaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZvcmVzdGdyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdhaW5zYm9ybzogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdob3N0d2hpdGU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGQ6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdvbGRlbnJvZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZWVueWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGdyZXk6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvbmV5ZGV3OiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGhvdHBpbms6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlhbnJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGluZGlnbzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGl2b3J5OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGtoYWtpOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhdmVuZGVyYmx1c2g6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxhd25ncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxlbW9uY2hpZmZvbjogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Ymx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Y3lhbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z29sZGVucm9keWVsbG93OiAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JlZW46ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0Z3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0cGluazogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2FsbW9uOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2VhZ3JlZW46ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmF5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c2xhdGVncmV5OiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpZ2h0eWVsbG93OiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbWVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGxpbmVuOiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1hZ2VudGE6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWFxdWFtYXJpbmU6ICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bWJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bW9yY2hpZDogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXB1cnBsZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNsYXRlYmx1ZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXNwcmluZ2dyZWVuOiAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXR1cnF1b2lzZTogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1lZGl1bXZpb2xldHJlZDogICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pZG5pZ2h0Ymx1ZTogICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pbnRjcmVhbTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1pc3R5cm9zZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG1vY2Nhc2luOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG5hdmFqb3doaXRlOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9sZGxhY2U6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9saXZlZHJhYjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yYW5nZXJlZDogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IG9yY2hpZDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVnb2xkZW5yb2Q6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGVncmVlbjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV0dXJxdW9pc2U6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhbGV2aW9sZXRyZWQ6ICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBhcGF5YXdoaXA6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlYWNocHVmZjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBlcnU6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBpbms6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBsdW06ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHBvd2RlcmJsdWU6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJvc3licm93bjogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJveWFsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhZGRsZWJyb3duOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbG1vbjogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNhbmR5YnJvd246ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYWdyZWVuOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNlYXNoZWxsOiAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNpZW5uYTogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNreWJsdWU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JheTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNsYXRlZ3JleTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNub3c6ICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHNwcmluZ2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHN0ZWVsYmx1ZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRhbjogICAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRoaXN0bGU6ICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHRvbWF0bzogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHR1cnF1b2lzZTogICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHZpb2xldDogICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoZWF0OiAgICAgICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdoaXRlc21va2U6ICAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHllbGxvd2dyZWVuOiAgICAgICAgICAgIG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHJlYmVjY2FwdXJwbGU6ICAgICAgICAgIG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb2xvclByb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIG9mIENTUyBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCBmb3JcclxuICogc3BlY2lmeWluZyBjb2xvcnMuIFRoaXMgaW50ZXJmYWNlIGlzIHJldHVybmVkIGZyb20gZnVuY3Rpb25zIGxpa2U6IHJnYigpLCBhbHBoYSgpLCBldGMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb2xvclByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImNvbG9yXCI+IHt9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN5c3RlbUNvbG9ycyB0eXBlIGRlZmluZXMga2V5d29yZHMgZm9yIHN5c3RlbSBjb2xvcnMgdGhhdCBhcmUgdXNlZCBpbiBmb3JjZWQtY29sb3IgbW9kZVxyXG4gKiAoYnV0IGNhbiBiZSBhbHNvIHVzZWQgaW4gdGhlIHJlZ3VsYXIgbW9kZSkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTeXN0ZW1Db2xvcnMgPSBcIkFjdGl2ZVRleHRcIiB8IFwiQnV0dG9uRmFjZVwiIHwgXCJCdXR0b25UZXh0XCIgfCBcIkNhbnZhc1wiIHwgXCJDYW52YXNUZXh0XCIgfFxyXG4gICAgXCJGaWVsZFwiIHwgXCJGaWVsZFRleHRcIiB8IFwiR3JheVRleHRcIiB8IFwiSGlnaGxpZ2h0XCIgfCBcIkhpZ2hsaWdodFRleHRcIiB8IFwiTGlua1RleHRcIiB8IFwiVmlzaXRlZFRleHRcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyBjb2xvci4gQ29sb3IgY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqIC0ga2V5d29yZHM6IGFueSBzdHJpbmcgdGhhdCBpcyBhIG5hbWUgb2YgYSBwcm9wZXJ0eSBpbiB0aGUgSU5hbWVkQ29sb3JzIGludGVyZmFjZS5cclxuICogLSBudW1iZXI6XHJcbiAqICAgLSBuZWdhdGl2ZSBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIGludmVydGVkIGNvbG9ycy5cclxuICogICAtIGludGVnZXIgcGFydCBvZiB0aGUgbnVtYmVyIG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDB4RkZGRkZGIC0gZXZlcnl0aGluZyBlbHNlIGlzXHJcbiAqICAgICBpZ25vcmVkLlxyXG4gKiAgIC0gZmxvYXRpbmcgcG9pbnQgcGFydCBvZiB0aGUgbnVtYmVyIGlzIHRyZWF0ZWQgYXMgcGVyY2VudHMgb2YgYWxwaGEgY2hhbm5lbC4gSWYgdGhlcmUgaXMgbm9cclxuICogICAgIGZsb2F0aW5nIHBhcnQsIGFscGhhIGlzIDEuXHJcbiAqIC0gZnVuY3Rpb25zOiByZ2IoKSwgaHNsKCksIGFscGhhKCkgYXMgd2VsbCBhcyBhbnkgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBJQ29sb3JQcm94eSB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzQ29sb3IgPSBcInRyYW5zcGFyZW50XCIgfCBcImN1cnJlbnRjb2xvclwiIHwga2V5b2YgSU5hbWVkQ29sb3JzIHwgbnVtYmVyIHwgSUNvbG9yUHJveHkgfCBTeXN0ZW1Db2xvcnM7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBPYmplY3Qgd2hvc2UgcHJvcGVydHkgbmFtZXMgYXJlIG5hbWVzIG9mIHdlbGwta25vd24gY29sb3JzIGFuZCB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgaGV4YWRlY2ltYWxcclxuICogcmVwcmVzZW50YXJ0aW9uIG9mIHRoZSBSR0Igc2VwYXJhdGlvbnMgKHdpdGhvdXQgYW4gYWxwaGEgbWFzaykuXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbG9yczogSU5hbWVkQ29sb3JzID1cclxue1xyXG4gICAgYmxhY2s6ICAgICAgICAgICAgICAgICAgMHgwMDAwMDAsXHJcbiAgICBzaWx2ZXI6ICAgICAgICAgICAgICAgICAweGMwYzBjMCxcclxuICAgIGdyYXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgd2hpdGU6ICAgICAgICAgICAgICAgICAgMHhmZmZmZmYsXHJcbiAgICBtYXJvb246ICAgICAgICAgICAgICAgICAweDgwMDAwMCxcclxuICAgIHJlZDogICAgICAgICAgICAgICAgICAgIDB4ZmYwMDAwLFxyXG4gICAgcHVycGxlOiAgICAgICAgICAgICAgICAgMHg4MDAwODAsXHJcbiAgICBmdWNoc2lhOiAgICAgICAgICAgICAgICAweGZmMDBmZixcclxuICAgIGdyZWVuOiAgICAgICAgICAgICAgICAgIDB4MDA4MDAwLFxyXG4gICAgbGltZTogICAgICAgICAgICAgICAgICAgMHgwMGZmMDAsXHJcbiAgICBvbGl2ZTogICAgICAgICAgICAgICAgICAweDgwODAwMCxcclxuICAgIHllbGxvdzogICAgICAgICAgICAgICAgIDB4ZmZmZjAwLFxyXG4gICAgbmF2eTogICAgICAgICAgICAgICAgICAgMHgwMDAwODAsXHJcbiAgICBibHVlOiAgICAgICAgICAgICAgICAgICAweDAwMDBmZixcclxuICAgIHRlYWw6ICAgICAgICAgICAgICAgICAgIDB4MDA4MDgwLFxyXG4gICAgYXF1YTogICAgICAgICAgICAgICAgICAgMHgwMGZmZmYsXHJcbiAgICBvcmFuZ2U6ICAgICAgICAgICAgICAgICAweGZmYTUwMCxcclxuICAgIGFsaWNlYmx1ZTogICAgICAgICAgICAgIDB4ZjBmOGZmLFxyXG4gICAgYW50aXF1ZXdoaXRlOiAgICAgICAgICAgMHhmYWViZDcsXHJcbiAgICBhcXVhbWFyaW5lOiAgICAgICAgICAgICAweDdmZmZkNCxcclxuICAgIGF6dXJlOiAgICAgICAgICAgICAgICAgIDB4ZjBmZmZmLFxyXG4gICAgYmVpZ2U6ICAgICAgICAgICAgICAgICAgMHhmNWY1ZGMsXHJcbiAgICBiaXNxdWU6ICAgICAgICAgICAgICAgICAweGZmZTRjNCxcclxuICAgIGJsYW5jaGVkYWxtb25kOiAgICAgICAgIDB4ZmZlYmNkLFxyXG4gICAgYmx1ZXZpb2xldDogICAgICAgICAgICAgMHg4YTJiZTIsXHJcbiAgICBicm93bjogICAgICAgICAgICAgICAgICAweGE1MmEyYSxcclxuICAgIGJ1cmx5d29vZDogICAgICAgICAgICAgIDB4ZGViODg3LFxyXG4gICAgY2FkZXRibHVlOiAgICAgICAgICAgICAgMHg1ZjllYTAsXHJcbiAgICBjaGFydHJldXNlOiAgICAgICAgICAgICAweDdmZmYwMCxcclxuICAgIGNob2NvbGF0ZTogICAgICAgICAgICAgIDB4ZDI2OTFlLFxyXG4gICAgY29yYWw6ICAgICAgICAgICAgICAgICAgMHhmZjdmNTAsXHJcbiAgICBjb3JuZmxvd2VyYmx1ZTogICAgICAgICAweDY0OTVlZCxcclxuICAgIGNvcm5zaWxrOiAgICAgICAgICAgICAgIDB4ZmZmOGRjLFxyXG4gICAgY3JpbXNvbjogICAgICAgICAgICAgICAgMHhkYzE0M2MsXHJcbiAgICBjeWFuOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIGRhcmtibHVlOiAgICAgICAgICAgICAgIDB4MDAwMDhiLFxyXG4gICAgZGFya2N5YW46ICAgICAgICAgICAgICAgMHgwMDhiOGIsXHJcbiAgICBkYXJrZ29sZGVucm9kOiAgICAgICAgICAweGI4ODYwYixcclxuICAgIGRhcmtncmF5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2dyZWVuOiAgICAgICAgICAgICAgMHgwMDY0MDAsXHJcbiAgICBkYXJrZ3JleTogICAgICAgICAgICAgICAweGE5YTlhOSxcclxuICAgIGRhcmtraGFraTogICAgICAgICAgICAgIDB4YmRiNzZiLFxyXG4gICAgZGFya21hZ2VudGE6ICAgICAgICAgICAgMHg4YjAwOGIsXHJcbiAgICBkYXJrb2xpdmVncmVlbjogICAgICAgICAweDU1NmIyZixcclxuICAgIGRhcmtvcmFuZ2U6ICAgICAgICAgICAgIDB4ZmY4YzAwLFxyXG4gICAgZGFya29yY2hpZDogICAgICAgICAgICAgMHg5OTMyY2MsXHJcbiAgICBkYXJrcmVkOiAgICAgICAgICAgICAgICAweDhiMDAwMCxcclxuICAgIGRhcmtzYWxtb246ICAgICAgICAgICAgIDB4ZTk5NjdhLFxyXG4gICAgZGFya3NlYWdyZWVuOiAgICAgICAgICAgMHg4ZmJjOGYsXHJcbiAgICBkYXJrc2xhdGVibHVlOiAgICAgICAgICAweDQ4M2Q4YixcclxuICAgIGRhcmtzbGF0ZWdyYXk6ICAgICAgICAgIDB4MmY0ZjRmLFxyXG4gICAgZGFya3NsYXRlZ3JleTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrdHVycXVvaXNlOiAgICAgICAgICAweDAwY2VkMSxcclxuICAgIGRhcmt2aW9sZXQ6ICAgICAgICAgICAgIDB4OTQwMGQzLFxyXG4gICAgZGVlcHBpbms6ICAgICAgICAgICAgICAgMHhmZjE0OTMsXHJcbiAgICBkZWVwc2t5Ymx1ZTogICAgICAgICAgICAweDAwYmZmZixcclxuICAgIGRpbWdyYXk6ICAgICAgICAgICAgICAgIDB4Njk2OTY5LFxyXG4gICAgZGltZ3JleTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkb2RnZXJibHVlOiAgICAgICAgICAgICAweDFlOTBmZixcclxuICAgIGZpcmVicmljazogICAgICAgICAgICAgIDB4YjIyMjIyLFxyXG4gICAgZmxvcmFsd2hpdGU6ICAgICAgICAgICAgMHhmZmZhZjAsXHJcbiAgICBmb3Jlc3RncmVlbjogICAgICAgICAgICAweDIyOGIyMixcclxuICAgIGdhaW5zYm9ybzogICAgICAgICAgICAgIDB4ZGNkY2RjLFxyXG4gICAgZ2hvc3R3aGl0ZTogICAgICAgICAgICAgMHhmOGY4ZmYsXHJcbiAgICBnb2xkOiAgICAgICAgICAgICAgICAgICAweGZmZDcwMCxcclxuICAgIGdvbGRlbnJvZDogICAgICAgICAgICAgIDB4ZGFhNTIwLFxyXG4gICAgZ3JlZW55ZWxsb3c6ICAgICAgICAgICAgMHhhZGZmMmYsXHJcbiAgICBncmV5OiAgICAgICAgICAgICAgICAgICAweDgwODA4MCxcclxuICAgIGhvbmV5ZGV3OiAgICAgICAgICAgICAgIDB4ZjBmZmYwLFxyXG4gICAgaG90cGluazogICAgICAgICAgICAgICAgMHhmZjY5YjQsXHJcbiAgICBpbmRpYW5yZWQ6ICAgICAgICAgICAgICAweGNkNWM1YyxcclxuICAgIGluZGlnbzogICAgICAgICAgICAgICAgIDB4NGIwMDgyLFxyXG4gICAgaXZvcnk6ICAgICAgICAgICAgICAgICAgMHhmZmZmZjAsXHJcbiAgICBraGFraTogICAgICAgICAgICAgICAgICAweGYwZTY4YyxcclxuICAgIGxhdmVuZGVyOiAgICAgICAgICAgICAgIDB4ZTZlNmZhLFxyXG4gICAgbGF2ZW5kZXJibHVzaDogICAgICAgICAgMHhmZmYwZjUsXHJcbiAgICBsYXduZ3JlZW46ICAgICAgICAgICAgICAweDdjZmMwMCxcclxuICAgIGxlbW9uY2hpZmZvbjogICAgICAgICAgIDB4ZmZmYWNkLFxyXG4gICAgbGlnaHRibHVlOiAgICAgICAgICAgICAgMHhhZGQ4ZTYsXHJcbiAgICBsaWdodGNvcmFsOiAgICAgICAgICAgICAweGYwODA4MCxcclxuICAgIGxpZ2h0Y3lhbjogICAgICAgICAgICAgIDB4ZTBmZmZmLFxyXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICAgMHhmYWZhZDIsXHJcbiAgICBsaWdodGdyYXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0Z3JlZW46ICAgICAgICAgICAgIDB4OTBlZTkwLFxyXG4gICAgbGlnaHRncmV5OiAgICAgICAgICAgICAgMHhkM2QzZDMsXHJcbiAgICBsaWdodHBpbms6ICAgICAgICAgICAgICAweGZmYjZjMSxcclxuICAgIGxpZ2h0c2FsbW9uOiAgICAgICAgICAgIDB4ZmZhMDdhLFxyXG4gICAgbGlnaHRzZWFncmVlbjogICAgICAgICAgMHgyMGIyYWEsXHJcbiAgICBsaWdodHNreWJsdWU6ICAgICAgICAgICAweDg3Y2VmYSxcclxuICAgIGxpZ2h0c2xhdGVncmF5OiAgICAgICAgIDB4Nzc4ODk5LFxyXG4gICAgbGlnaHRzbGF0ZWdyZXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHN0ZWVsYmx1ZTogICAgICAgICAweGIwYzRkZSxcclxuICAgIGxpZ2h0eWVsbG93OiAgICAgICAgICAgIDB4ZmZmZmUwLFxyXG4gICAgbGltZWdyZWVuOiAgICAgICAgICAgICAgMHgzMmNkMzIsXHJcbiAgICBsaW5lbjogICAgICAgICAgICAgICAgICAweGZhZjBlNixcclxuICAgIG1hZ2VudGE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgbWVkaXVtYXF1YW1hcmluZTogICAgICAgMHg2NmNkYWEsXHJcbiAgICBtZWRpdW1ibHVlOiAgICAgICAgICAgICAweDAwMDBjZCxcclxuICAgIG1lZGl1bW9yY2hpZDogICAgICAgICAgIDB4YmE1NWQzLFxyXG4gICAgbWVkaXVtcHVycGxlOiAgICAgICAgICAgMHg5MzcwZGIsXHJcbiAgICBtZWRpdW1zZWFncmVlbjogICAgICAgICAweDNjYjM3MSxcclxuICAgIG1lZGl1bXNsYXRlYmx1ZTogICAgICAgIDB4N2I2OGVlLFxyXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46ICAgICAgMHgwMGZhOWEsXHJcbiAgICBtZWRpdW10dXJxdW9pc2U6ICAgICAgICAweDQ4ZDFjYyxcclxuICAgIG1lZGl1bXZpb2xldHJlZDogICAgICAgIDB4YzcxNTg1LFxyXG4gICAgbWlkbmlnaHRibHVlOiAgICAgICAgICAgMHgxOTE5NzAsXHJcbiAgICBtaW50Y3JlYW06ICAgICAgICAgICAgICAweGY1ZmZmYSxcclxuICAgIG1pc3R5cm9zZTogICAgICAgICAgICAgIDB4ZmZlNGUxLFxyXG4gICAgbW9jY2FzaW46ICAgICAgICAgICAgICAgMHhmZmU0YjUsXHJcbiAgICBuYXZham93aGl0ZTogICAgICAgICAgICAweGZmZGVhZCxcclxuICAgIG9sZGxhY2U6ICAgICAgICAgICAgICAgIDB4ZmRmNWU2LFxyXG4gICAgb2xpdmVkcmFiOiAgICAgICAgICAgICAgMHg2YjhlMjMsXHJcbiAgICBvcmFuZ2VyZWQ6ICAgICAgICAgICAgICAweGZmNDUwMCxcclxuICAgIG9yY2hpZDogICAgICAgICAgICAgICAgIDB4ZGE3MGQ2LFxyXG4gICAgcGFsZWdvbGRlbnJvZDogICAgICAgICAgMHhlZWU4YWEsXHJcbiAgICBwYWxlZ3JlZW46ICAgICAgICAgICAgICAweDk4ZmI5OCxcclxuICAgIHBhbGV0dXJxdW9pc2U6ICAgICAgICAgIDB4YWZlZWVlLFxyXG4gICAgcGFsZXZpb2xldHJlZDogICAgICAgICAgMHhkYjcwOTMsXHJcbiAgICBwYXBheWF3aGlwOiAgICAgICAgICAgICAweGZmZWZkNSxcclxuICAgIHBlYWNocHVmZjogICAgICAgICAgICAgIDB4ZmZkYWI5LFxyXG4gICAgcGVydTogICAgICAgICAgICAgICAgICAgMHhjZDg1M2YsXHJcbiAgICBwaW5rOiAgICAgICAgICAgICAgICAgICAweGZmYzBjYixcclxuICAgIHBsdW06ICAgICAgICAgICAgICAgICAgIDB4ZGRhMGRkLFxyXG4gICAgcG93ZGVyYmx1ZTogICAgICAgICAgICAgMHhiMGUwZTYsXHJcbiAgICByb3N5YnJvd246ICAgICAgICAgICAgICAweGJjOGY4ZixcclxuICAgIHJveWFsYmx1ZTogICAgICAgICAgICAgIDB4NDE2OWUxLFxyXG4gICAgc2FkZGxlYnJvd246ICAgICAgICAgICAgMHg4YjQ1MTMsXHJcbiAgICBzYWxtb246ICAgICAgICAgICAgICAgICAweGZhODA3MixcclxuICAgIHNhbmR5YnJvd246ICAgICAgICAgICAgIDB4ZjRhNDYwLFxyXG4gICAgc2VhZ3JlZW46ICAgICAgICAgICAgICAgMHgyZThiNTcsXHJcbiAgICBzZWFzaGVsbDogICAgICAgICAgICAgICAweGZmZjVlZSxcclxuICAgIHNpZW5uYTogICAgICAgICAgICAgICAgIDB4YTA1MjJkLFxyXG4gICAgc2t5Ymx1ZTogICAgICAgICAgICAgICAgMHg4N2NlZWIsXHJcbiAgICBzbGF0ZWJsdWU6ICAgICAgICAgICAgICAweDZhNWFjZCxcclxuICAgIHNsYXRlZ3JheTogICAgICAgICAgICAgIDB4NzA4MDkwLFxyXG4gICAgc2xhdGVncmV5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbm93OiAgICAgICAgICAgICAgICAgICAweGZmZmFmYSxcclxuICAgIHNwcmluZ2dyZWVuOiAgICAgICAgICAgIDB4MDBmZjdmLFxyXG4gICAgc3RlZWxibHVlOiAgICAgICAgICAgICAgMHg0NjgyYjQsXHJcbiAgICB0YW46ICAgICAgICAgICAgICAgICAgICAweGQyYjQ4YyxcclxuICAgIHRoaXN0bGU6ICAgICAgICAgICAgICAgIDB4ZDhiZmQ4LFxyXG4gICAgdG9tYXRvOiAgICAgICAgICAgICAgICAgMHhmZjYzNDcsXHJcbiAgICB0dXJxdW9pc2U6ICAgICAgICAgICAgICAweDQwZTBkMCxcclxuICAgIHZpb2xldDogICAgICAgICAgICAgICAgIDB4ZWU4MmVlLFxyXG4gICAgd2hlYXQ6ICAgICAgICAgICAgICAgICAgMHhmNWRlYjMsXHJcbiAgICB3aGl0ZXNtb2tlOiAgICAgICAgICAgICAweGY1ZjVmNSxcclxuICAgIHllbGxvd2dyZWVuOiAgICAgICAgICAgIDB4OWFjZDMyLFxyXG4gICAgcmViZWNjYXB1cnBsZTogICAgICAgICAgMHg2NjMzOTksXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIEZvbnRGYWNlVHlwZXMgZnJvbSBcIi4vRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCB7b2JqMnN0cn0gZnJvbSBcIi4vU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge2NhbWVsVG9EYXNoLCB2YWwyc3RyLCBDc3NQZXJjZW50TWF0aCwgQ3NzQW5nbGVNYXRoLCBhcnIyc3RyLCBDc3NOdW1iZXJNYXRofSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBmb250IGZhY2UgZGVmaW5pdGlvbiBvYmplY3QgdG8gdGhlIENTUyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb250RmFjZVRvU3RyaW5nKCBmb250ZmFjZTogRm9udEZhY2VUeXBlcy5JRm9udEZhY2UpOiBzdHJpbmcgfCBudWxsXHJcbntcclxuICAgIGlmICghZm9udGZhY2UgfHwgIWZvbnRmYWNlLmZvbnRGYW1pbHkpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgbGV0IHMgPSBcIntcIjtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBmb250ZmFjZSlcclxuICAgIHtcclxuICAgICAgICBzICs9IGAke2NhbWVsVG9EYXNoKCBwcm9wTmFtZSl9OmA7XHJcbiAgICAgICAgbGV0IHByb3BWYWwgPSBmb250ZmFjZVtwcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcImZvbnRTdHJldGNoXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFN0cmV0Y2hUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0eWxlXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFN0eWxlVG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSBcImZvbnRXZWlnaHRcIilcclxuICAgICAgICAgICAgcyArPSBmb250V2VpZ2h0VG9TdHJpbmcoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BOYW1lID09PSBcInNyY1wiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRTcmNUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzICs9IHByb3BWYWw7XHJcblxyXG4gICAgICAgIHMgKz0gXCI7XCJcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcyArIFwifVwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHJldGNoVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3RyZXRjaF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFN0eWxlX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBgb2JsaXF1ZSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHYpfWAsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBvYmxpcXVlICR7YXJyMnN0ciggdiwgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcpfWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRXZWlnaHRUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRXZWlnaHRfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTcmNUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQW55OiBmb250U2luZ2xlU3JjVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFNpbmdsZVNyY1RvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNyY19TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImxvY2FsXCIsIHYgPT4gYGxvY2FsKCR7dn0pYF0sXHJcbiAgICAgICAgW1widXJsXCIsIHYgPT4gYHVybCgke3Z9KWBdLFxyXG4gICAgICAgIFtcImZvcm1hdFwiLCB2ID0+IGBmb3JtYXQoJHtmb250Rm9ybWF0VG9TdHJpbmcodil9KWBdXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250Rm9ybWF0VG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBgXFxcIiR7dn1cXFwiYCxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgdHlwZXMgdXNlZCB0byBkZWZpbmUgQ1NTIGA8aW1hZ2U+YCB0eXBlIGFuZCByZWxhdGVkIGZ1bmN0aW9ucy5cclxuICovXHJcblxyXG5pbXBvcnQge0lVcmxQcm94eSwgRXh0ZW5kZWQsIENzc051bWJlciwgQ3NzQW5nbGUsIE51bWJlckJhc2UsIENzc0xlbmd0aCwgQ3NzUG9zaXRpb24sIElHZW5lcmljUHJveHl9IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCIuL0NvbG9yVHlwZXNcIjtcclxuaW1wb3J0IHsgRXh0ZW50S2V5d29yZCB9IGZyb20gXCIuL1N0eWxlVHlwZXNcIjtcclxuXHJcblxyXG4vKipcclxuICogVGhlIEltYWdlUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgb2YgQ1NTIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGZvclxyXG4gKiBzZWNpZnlpbmcgaW1hZ2VzLiBUaGlzIGludGVyZmFjZSBpcyByZXR1cm5lZCBmcm9tIGZ1bmN0aW9ucyBsaWtlOiBsaW5lYXJHcmFkaWVudCgpLCBwYWludCgpLFxyXG4gKiBlbGVtZW50KCksIGV0Yy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiaW1hZ2VcIj4ge307XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzSW1hZ2UgdHlwZSByZXByZXNlbnRzIGEgdHlwZSB1c2VkIGZvciBDU1MgcHJvcGVydGllcyB0aGF0IGFjY2VwdCB0aGUgYDxpbWFnZT5gIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NJbWFnZSA9IElVcmxQcm94eSB8IElJbWFnZVByb3h5O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVmFsdWUgb2YgYSBoaW50IGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMgaXMgZXhwcmVzc2VkIGFzIGEgQ1NTIG51bWVyaWMgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmFkaWVudEhpbnRWYWx1ZSA9IEV4dGVuZGVkPE51bWJlckJhc2U8YW55Pj47XHJcblxyXG4vKipcclxuICogQ29sb3IgaGludCBmb3IgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zIGlzIGV4cHJlc3NlZCBhcyBhIHNpbmdsZS1pdGVtIGFycmF5IHRoYXRcclxuICogY29udGFpbnMgYSBDU1MgbnVtZXJpYyB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50SGludCA9IFtHcmFkaWVudEhpbnRWYWx1ZV07XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNvbG9yIHN0b3Agd2l0aCBpbmRpY2F0aW9uIG9mIGxlbmd0aCBmb3IgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLiBUaGUgZmlyc3RcclxuICogaXRlbSBpcyB0aGUgY29sb3IgdmFsdWUsIHRoZSBzZWNvbmQgaXRlbSBpcyB0aGUgcG9zaXRpb24gb2Ygd2hlcmUgdGhlIGNvbG9yIHN0YXJ0cyBhbmQgdGhlXHJcbiAqIG9wdGlvbmFsIHRoaXJkIGl0ZW0gaXMgdGhlIHBvc2l0aW9uIHdoZXJlIHRoZSBjb2xvciBzdG9wcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50Q29sb3JBbmRMZW5ndGggPSBbRXh0ZW5kZWQ8Q3NzQ29sb3I+LCBHcmFkaWVudEhpbnRWYWx1ZSwgR3JhZGllbnRIaW50VmFsdWU/XTtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBzdG9wIGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMgaXMgZXhwcmVzc2VkIGFzIGVpdGhlciBhIHNpbmdsZSBjb2xvciB2YWx1ZVxyXG4gKiBvciBhbiBhcnJheSBvZiB0d28gb3IgdGhyZWUgaXRlbXMuIEluIHRoZSBsYXR0ZXIgY2FzZSwgdGhlIGZpcnN0IGl0ZW0gaXMgdGhlIGNvbG9yIHZhbHVlLCB0aGVcclxuICogc2Vjb25kIGl0ZW0gaXMgdGhlIHBvc2l0aW9uIG9mIHdoZXJlIHRoZSBjb2xvciBzdGFydHMgYW5kIHRoZSBvcHRpb25hbCB0aGlyZCBpdGVtIGlzIHRoZVxyXG4gKiBwb3NpdGlvbiB3aGVyZSB0aGUgY29sb3Igc3RvcHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHcmFkaWVudFN0b3AgPSBFeHRlbmRlZDxDc3NDb2xvcj4gfCBHcmFkaWVudENvbG9yQW5kTGVuZ3RoO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGVpdGhlciBjb2xvciBzdG9wIG9yIGNvbG9yIGhpbnQgZm9yIHRoZSBgPGdyYWRpZW50PmAgQ1NTIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50U3RvcE9ySGludCA9IEdyYWRpZW50U3RvcCB8IEdyYWRpZW50SGludDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBlbnVtZXJhdGVzIHBvc3NpYmxlIHZhbHVlcyBvZiB0aGUgc2lkZS1vci1jb3JuZXIgZm9yIHRoZSBgbGluZWFyLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIExpbmVhckdyYWRTaWRlT3JDb3JuZXIgPSBcImJvdHRvbVwiIHwgXCJsZWZ0XCIgfCBcInRvcFwiIHwgXCJyaWdodFwiIHxcclxuICAgIFwidG9wIGxlZnRcIiB8IFwidG9wIHJpZ2h0XCIgfCBcImJvdHRvbSByaWdodFwiIHwgXCJib3R0b20gbGVmdFwiIHxcclxuICAgIFwibGVmdCB0b3BcIiB8IFwicmlnaHQgdG9wXCIgfCBcImxlZnQgYm90dG9tXCIgfCBcInJpZ2h0IGJvdHRvbVwiO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCByZXByZXNlbnRzIHRoZSBhbmdsZSBvZiB0aGUgYGxpbmVhci1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMaW5lYXJHcmFkQW5nbGUgPSBFeHRlbmRlZDxDc3NBbmdsZT4gfCBMaW5lYXJHcmFkU2lkZU9yQ29ybmVyO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgc2hhcGUgZm9yIHRoZSBgcmFkaWFsLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJhZGlhbEdyYWRpZW50U2hhcGUgPSBcImNpcmNsZVwiIHwgXCJlbGxpcHNlXCI7XHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgc2l6ZSBmb3IgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLiBJdCBpcyBhIHNpbmdsZSBMZW5ndGggdmFsdWVcclxuICogZm9yIGNpcmNsZSBhbmQgdHdvLWVsZW1lbnQgdHVwbGUgb2YgQ3NzTGVuZ3RoIHZhbHVlcyBmb3IgZWxsaXBzZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJhZGlhbEdyYWRpZW50U2l6ZSA9IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBwYXJhbWV0ZXJzIGZvciB0aGUgYGNyb3NzLWZhZGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3Jvc3NGYWRlUGFyYW0gPSBFeHRlbmRlZDxDc3NJbWFnZT4gfCBbRXh0ZW5kZWQ8Q3NzSW1hZ2U+LCBFeHRlbmRlZDxDc3NOdW1iZXI+XTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JhZGllbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgcHJvcGVydGllcyB0aGF0IHJldHVybiBpbnRlcmZhY2VzIHJlcHJlc2VudGluZyBgPGdyYWRpZW50PmBcclxuICogQ1NTIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyYWRpZW50XHJcbntcclxuICAgIHJlYWRvbmx5IGxpbmVhcjogSUxpbmVhckdyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nTGluZWFyOiBJTGluZWFyR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSByYWRpYWw6IElSYWRpYWxHcmFkaWVudDtcclxuICAgIHJlYWRvbmx5IHJlcGVhdGluZ1JhZGlhbDogSVJhZGlhbEdyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgY29uaWM6IElDb25pY0dyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nQ29uaWM6IElDb25pY0dyYWRpZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUxpbmVhckdyYWRpZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBlaXRoZXIgYGxpbmVyLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWxpbmVyLWdyYWRpZW50YCBDU1MgZnVuY3Rpb24uIFRoZSBpbnRlcmZhY2UgYWxsb3dzIHNwZWNpZnlpbmcgYW4gYW5nbGUgcGFyYW1ldGVyXHJcbiAqIGJlZm9yZSBpbnZvY2F0aW9uIHRoYXQgYWNjZXB0cyBhIGxpc3Qgb2YgY29sb3Igc3RvcHMgYW5kIGhpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTGluZWFyR3JhZGllbnRcclxue1xyXG4gICAgKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eTtcclxuXHR0byggYW5nbGU6IExpbmVhckdyYWRBbmdsZSk6IElMaW5lYXJHcmFkaWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSYWRpYWxHcmFkaWVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgZWl0aGVyIGByYWRpYWwtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50YCBDU1MgZnVuY3Rpb24uIFRoZSBpbnRlcmZhY2UgYWxsb3dzIHNwZWNpZnlpbmcgdGhlIHNoYXBlLCBzaXplIGFuZFxyXG4gKiBleHRlbnQgcGFyYW1ldGVycyBiZWZvcmUgaW52b2NhdGlvbiB0aGF0IGFjY2VwdHMgYSBsaXN0IG9mIGNvbG9yIHN0b3BzIGFuZCBoaW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJhZGlhbEdyYWRpZW50XHJcbntcclxuICAgICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHk7XHJcblx0Y2lyY2xlKCBzaXplT3JFeHRlbnQ/OiBFeHRlbmRlZDxDc3NMZW5ndGg+IHwgRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pOiBJUmFkaWFsR3JhZGllbnQ7XHJcblx0ZWxsaXBzZSggc2l6ZU9yRXh0ZW50PzogW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD5dIHwgRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pOiBJUmFkaWFsR3JhZGllbnQ7XHJcblx0ZXh0ZW50KCBleHRlbnQ6IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KTogSVJhZGlhbEdyYWRpZW50O1xyXG5cdGF0KCBwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElSYWRpYWxHcmFkaWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDb25pY0dyYWRpZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBlaXRoZXIgYGNvbmljLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWNvbmljLWdyYWRpZW50YCBDU1MgZnVuY3Rpb24uIFRoZSBpbnRlcmZhY2UgYWxsb3dzIHNwZWNpZnlpbmcgdGhlIGBmcm9tYCBhbmRcclxuICogYHBvc2l0aW9uYCBwYXJhbWV0ZXJzIGJlZm9yZSBpbnZvY2F0aW9uIHRoYXQgYWNjZXB0cyBhIGxpc3Qgb2YgY29sb3Igc3RvcHMgYW5kIGhpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uaWNHcmFkaWVudFxyXG57XHJcbiAgICAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5O1xyXG5cdGZyb20oIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJQ29uaWNHcmFkaWVudDtcclxuXHRhdCggcG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBJQ29uaWNHcmFkaWVudDtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQgKiBhcyBNZWRpYVR5cGVzIGZyb20gXCIuL01lZGlhVHlwZXNcIlxyXG5pbXBvcnQge3ZhbDJzdHIsIGNhbWVsVG9EYXNoLCBhcnIyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYXNwZWN0UmF0aW9Ub1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkFzcGVjdFJhdGlvRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWxbMF0gKyBcIi9cIiArIHZhbFsxXTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5MZW5ndGhGZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbCArIFwicHhcIjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuUmVzb2x1dGlvbkZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJkcGlcIjtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBvZiBhIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgdGhlIHByb3BlcnR5LXNwZWNpZmljIHR5cGUgdG8gQ1NTIHN0cmluZyAqL1xyXG50eXBlIGNvbnZlcnRGdW5jVHlwZTxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gKHZhbDogTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXRbS10pID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYUZlYXR1cmVJbmZvIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gdGhhdCB3ZSBrZWVwIGZvciBzdHlsZSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG50eXBlIE1lZGlhRmVhdHVyZUluZm88SyBleHRlbmRzIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0ID0gYW55PiA9IGNvbnZlcnRGdW5jVHlwZTxLPiB8IGJvb2xlYW4gfFxyXG4gICAge1xyXG4gICAgICAgIC8qKiBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGZyb20gdGhlIHByb3BlcnR5LXNwZWNpZmljIHR5cGUgdG8gQ1NTIHN0cmluZyAqL1xyXG4gICAgICAgIGNvbnZlcnQ/OiBjb252ZXJ0RnVuY1R5cGU8Sz47XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIGRlZmluZWQsIGluZGljYXRlcyB0aGUgdmFsdWUsIHdoaWNoIHdlIHdpbGwgbm90IHB1dCBpbnRvIENTUyBzdHJpbmcuIFRoaXMgaXMgbmVlZGVkIGZvclxyXG4gICAgICAgICAqIG1lZGlhIGZlYXR1cmVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRob3V0IHRoZSB2YWx1ZSwgZS5nLiBjb2xvciBvciBjb2xvci1pbmRleC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGZlYXR1cmUgaXMgYSBcInJhbmdlXCIgZmVhdHVyZTsgdGhhdCBpcywgY2FuIGJlIHVzZWQgaW4gYW5cclxuICAgICAgICAgKiBleHByZXNzaW9uIChhIDw9IGZlYXR1cmUgPD0gYikuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaXNSYW5nZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeTogc3RyaW5nIHwgTWVkaWFUeXBlcy5NZWRpYVF1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCBxdWVyeSwge1xyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZU1lZGlhUXVlcnlUb1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nKCBxdWVyeTogTWVkaWFUeXBlcy5TaW5nbGVNZWRpYVF1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IG1lZGlhVHlwZSA9IHF1ZXJ5LiRtZWRpYVR5cGU7XHJcbiAgICBsZXQgb25seSA9IHF1ZXJ5LiRvbmx5O1xyXG4gICAgbGV0IG5lZ2F0ZSA9IHF1ZXJ5LiRuZWdhdGU7XHJcblxyXG4gICAgbGV0IGl0ZW1zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKG1lZGlhVHlwZSlcclxuICAgICAgICBpdGVtcy5wdXNoKCAob25seSA/IFwib25seSBcIiA6IFwiXCIpICsgbWVkaWFUeXBlKTtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wTmFtZSBpbiBxdWVyeSlcclxuICAgIHtcclxuICAgICAgICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiRcIikpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocXVlcnlbcHJvcE5hbWVdKVxyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKCBgKCR7bWVkaWFGZWF0dXJlVG9TdHJpbmcoIHByb3BOYW1lLCBxdWVyeVtwcm9wTmFtZV0pfSlgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7bmVnYXRlID8gXCJub3QgXCIgOiBcIlwifSR7aXRlbXMuam9pbihcIiBhbmQgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBmZWF0dXJlIHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFGZWF0dXJlVG9TdHJpbmcoIGZlYXR1cmVOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmZWF0dXJlTmFtZSB8fCBwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgXHJcbiAgICBsZXQgaW5mbzogTWVkaWFGZWF0dXJlSW5mbyA9IG1lZGlhRmVhdHVyZXNbZmVhdHVyZU5hbWVdO1xyXG5cclxuICAgIGxldCByZWFsRmVhdHVyZU5hbWUgPSBjYW1lbFRvRGFzaCggZmVhdHVyZU5hbWUpO1xyXG5cclxuICAgIC8vIGlmIGRlZmF1bHRWYWx1ZSBpcyBkZWZpbmVkIGFuZCB0aGUgcHJvcGVydHkgdmFsdWUgaXMgZXF1YWwgdG8gaXQsIG5vIHZhbHVlIHNob3VsZCBiZSByZXR1cm5lZC5cclxuICAgIGxldCBkZWZhdWx0VmFsdWUgPSB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uZGVmYXVsdFZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BWYWwgPT09IGRlZmF1bHRWYWx1ZSlcclxuICAgICAgICByZXR1cm4gdmFsdWVPbmx5ID8gXCJcIiA6IHJlYWxGZWF0dXJlTmFtZTtcclxuXHJcbiAgICBsZXQgY29udmVydCA9IHR5cGVvZiBpbmZvID09PSBcImZ1bmN0aW9uXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmNvbnZlcnQgOiB1bmRlZmluZWQ7XHJcbiAgICBsZXQgaXNSYW5nZSA9IHR5cGVvZiBpbmZvID09PSBcImJvb2xlYW5cIiA/IGluZm8gOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uaXNSYW5nZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChpc1JhbmdlICYmICF2YWx1ZU9ubHkgJiYgQXJyYXkuaXNBcnJheSggcHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPT09IDIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMxID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbFswXSwgY29udmVydCk7XHJcbiAgICAgICAgbGV0IHMyID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbFsxXSwgY29udmVydCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3MxfSA8PSAke3JlYWxGZWF0dXJlTmFtZX0gPD0gJHtzMn1gO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzID0gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbCwgY29udmVydCk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlT25seSA/IHMgOiByZWFsRmVhdHVyZU5hbWUgKyBcIjpcIiArIHM7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWVkaWFGZWF0dXJlU2luZ2xlVmFsdWVUb1N0cmluZyggcHJvcFZhbDogYW55LCBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgaWYgKGNvbnZlcnQpXHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnQoIHByb3BWYWwpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHByb3BWYWw7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBwcm9wVmFsKSlcclxuICAgICAgICByZXR1cm4gYXJyMnN0ciggcHJvcFZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHByb3BWYWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgbWVkaWFGZWF0dXJlczogeyBbSyBpbiBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldF0/OiBNZWRpYUZlYXR1cmVJbmZvPEs+IH0gPVxyXG57XHJcbiAgICBhc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIG1pbkFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWF4QXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBjb2xvcjogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGNvbG9ySW5kZXg6IHsgZGVmYXVsdFZhbHVlOiAwLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBoZWlnaHQ6IHsgY29udmVydDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5IZWlnaHQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heEhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbW9ub2Nocm9tZTogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIHJlc29sdXRpb246IHsgY29udmVydDogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluUmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFJlc29sdXRpb246IHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcsXHJcbiAgICB3aWR0aDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbldpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtYXhXaWR0aDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG59O1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7dmFsMnN0cn0gZnJvbSBcIi4vVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc2VsZWN0b3IuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB0d28tbnVtYmVyIHR1cGxlIHRvIGEgc3RyaW5nIGluIHRoZSBmb3JtIEFuK0IuXHJcbiAqL1xyXG5mdW5jdGlvbiBudGhUdXBsZVRvU3RyaW5nKCB2YWw6IFtudW1iZXIsIG51bWJlcj9dKTogc3RyaW5nXHJcbntcclxuXHRsZXQgdjAgPSB2YWwyc3RyKCB2YWxbMF0pO1xyXG5cdGxldCB2MW4gPSB2YWxbMV07XHJcblxyXG5cdC8vIHRoZSAnIXYxbicgZXhwcmVzc2lvbiBjb3ZlcnMgbnVsbCwgdW5kZWZpbmVkIGFuZCAwLlxyXG5cdGxldCB2MSA9ICF2MW4gPyBcIlwiIDogdjFuID4gMCA/IFwiK1wiICsgdmFsMnN0ciggdjFuKSA6IFwiLVwiICsgdmFsMnN0ciggLXYxbik7XHJcblxyXG5cdHJldHVybiBgJHt2MH1uJHt2MX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0b3JUb1N0cmluZyggdmFsOiBDc3NTZWxlY3Rvcik6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG5cdFx0YXJyU2VwOiBcIlwiXHJcblx0fSlcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHBhcmFtZXRlcml6ZWQgcHNldWRvIGVudGl0eS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwc2V1ZG9FbnRpdHlUb1N0cmluZyggZW50aXR5TmFtZTogc3RyaW5nLCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFlbnRpdHlOYW1lKVxyXG5cdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdGlmIChlbnRpdHlOYW1lLnN0YXJ0c1dpdGgoIFwiOm50aFwiKSlcclxuXHRcdHJldHVybiB2YWwyc3RyKCB2YWwsIHsgZnJvbUFycmF5OiBudGhUdXBsZVRvU3RyaW5nIH0pO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiB2YWwyc3RyKHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtJU3RyaW5nUHJveHksIElHZW5lcmljUHJveHl9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge0lTdHlsZVJ1bGUsIElDbGFzc05hbWVSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNlbGVjdG9yUHJveHkgZnVuY3Rpb24gcmV0dXJucyBhIENTUyBzZWxlY3RvciBzdHJpbmcuIFRoaXMgdHlwZSBpcyByZXR1cm5lZCBmcm9tIHRoZVxyXG4gKiBbW3NlbGVjdG9yXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RvclByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInNlbGVjdG9yXCI+IHt9O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgc2VsZWN0b3IgdG9rZW4gdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBhcmd1bWVudCB0byB0aGUgW1tzZWxlY3Rvcl1dIGZ1bmN0aW9uICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9ySXRlbSA9IHN0cmluZyB8IElTdHlsZVJ1bGUgfCBJQ2xhc3NOYW1lUnVsZSB8IElTdHJpbmdQcm94eSB8IElTZWxlY3RvclByb3h5O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzZWxlY3RvciAqL1xyXG5leHBvcnQgdHlwZSBDc3NTZWxlY3RvciA9IFNlbGVjdG9ySXRlbSB8IFNlbGVjdG9ySXRlbVtdO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwcmludC1yZWxhdGVkIHBzZXVkbyBjbGFzc2VzIC0gdGhvc2UgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIHdpdGggdGhlIEBwYWdlIENTUyBydWxlICovXHJcbmV4cG9ydCB0eXBlIFBhZ2VQc2V1ZG9DbGFzcyA9IFwiOmJsYW5rXCIgfCBcIjpmaXJzdFwiIHwgXCI6bGVmdFwiIHwgXCI6cmlnaHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHNldWRvIGNsYXNzZXMgKi9cclxuZXhwb3J0IHR5cGUgUHNldWRvQ2xhc3MgPSBQYWdlUHNldWRvQ2xhc3MgfFxyXG5cdFwiOmFjdGl2ZVwiIHwgXCI6YW55LWxpbmtcIiB8IFwiOmJsYW5rXCIgfCBcIjpjaGVja2VkXCIgfCBcIjpkZWZhdWx0XCIgfCBcIjpkZWZpbmVkXCIgfCBcIjpkaXNhYmxlZFwiIHxcclxuXHRcIjplbXB0eVwiIHwgXCI6ZW5hYmxlZFwiIHwgXCI6Zmlyc3QtY2hpbGRcIiB8IFwiOmZpcnN0LW9mLXR5cGVcIiB8IFwiOmZ1bGxzY3JlZW5cIiB8IFwiOmZvY3VzXCIgfFxyXG5cdFwiOmZvY3VzLXZpc2libGVcIiB8IFwiOmZvY3VzLVdpdGhpblwiIHwgXCI6aG92ZXJcIiB8IFwiOmluZGV0ZXJtaW5hdGVcIiB8IFwiOmluLXJhbmdlXCIgfCBcIjppbnZhbGlkXCIgfFxyXG5cdFwiOmxhc3QtY2hpbGRcIiB8IFwiOmxhc3Qtb2YtdHlwZVwiIHwgXCI6bGlua1wiIHwgXCI6b25seS1jaGlsZFwiIHwgXCI6b25seS1vZi10eXBlXCIgfCBcIjpvcHRpb25hbFwiIHxcclxuXHRcIjpvdXQtb2YtcmFuZ2VcIiB8IFwiOnBsYWNlaG9sZGVyLXNob3duXCIgfCBcIjpyZWFkLW9ubHlcIiB8IFwiOnJlYWQtd3JpdGVcIiB8IFwiOnJlcXVpcmVkXCIgfCBcIjpyb290XCIgfFxyXG5cdFwiOnNjb3BlXCIgfCBcIjp0YXJnZXRcIiB8IFwiOnZhbGlkXCIgfCBcIjp2aXNpdGVkXCIgfCBcIjpkaXIocnRsKVwiIHwgXCI6ZGlyKGx0cilcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcHNldWRvIGVsZW1lbnRzICovXHJcbmV4cG9ydCB0eXBlIFBzZXVkb0VsZW1lbnQgPSBcIjo6YWZ0ZXJcIiB8IFwiOjpiYWNrZHJvcFwiIHwgXCI6OmJlZm9yZVwiIHwgXCI6OmN1ZVwiIHwgXCI6OmZpcnN0TGV0dGVyXCIgfFxyXG5cdFwiOjpmaXJzdExpbmVcIiB8IFwiOjpncmFtbWFyRXJyb3JcIiB8IFwiOjptYXJrZXJcIiB8IFwiOjpwbGFjZWhvbGRlclwiIHwgXCI6OnNlbGVjdGlvblwiIHwgXCI6OnNwZWxsaW5nRXJyb3JcIjtcclxuXHJcblxyXG5cclxuLyoqIENvbWJpbmVzIG5hbWVzIG9mIG5vbi1wYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGFuZCBwc2V1ZG8gZWxlbWVudHMgKi9cclxuZXhwb3J0IHR5cGUgUHNldWRvRW50aXR5ID0gUHNldWRvQ2xhc3MgfCBQc2V1ZG9FbGVtZW50O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgZXhwcmVzc2lvbiBBbitCLCB3aGljaCBpcyB1c2VkIGZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzIGxpa2UgYG50aC1jaGlsZGAuIEl0XHJcbiAqIGNhbiBiZSBhIHN0cmluZywgYSBzaW5nbGUgbnVtYmVyIG9yIGEgdHVwbGUgd2l0aCBvbmUgb3IgdHdvIG51bWJlcnMuIElmIGl0IGlzIGEgc2luZ2xlIG51bWJlcixcclxuICogdGhlICduJyBpbiBBbitCIHdpbGwgbm90IGJlIHVzZWQgLSBhcyBpbiBgbnRoLWNoaWxkKDIpYC4gSWYgaXQgaXMgYSB0dXBsZSwgdGhlICduJyB3aWxsIGJlIHVzZWRcclxuICogZXZlbiBpZiB0aGUgc2Vjb25kIHR1cGxlJ3MgZWxlbWVudCBpcyBub3QgcHJvdmlkZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBOdGhDaGlsZEV4cHJlc3Npb24gPSBcIm9kZFwiIHwgXCJldmVuXCIgfCBudW1iZXIgfCBbbnVtYmVyLCBudW1iZXI/XSB8IHN0cmluZyB8IElTdHJpbmdQcm94eTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFyYW1ldGVyaXplZFBzZXVkb0NsYXNzIGludGVyZmFjZSBtYXBzIG5hbWVzIG9mIHBzZXVkbyBjbGFzc2VzIHRoYXQgcmVxdWlyZSBwYXJhbWV0ZXJzXHJcbiAqIHRvIHRoZSB0eXBlIHRoYXQgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSB0aGVzZSBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyYW1ldGVyaXplZFBzZXVkb0NsYXNzXHJcbntcclxuXHRcIjpoYXNcIjogc3RyaW5nO1xyXG5cdFwiOmhvc3RcIjogc3RyaW5nO1xyXG5cdFwiOmhvc3QtY29udGV4dFwiOiBzdHJpbmc7XHJcblx0XCI6aXNcIjogc3RyaW5nO1xyXG5cdFwiOmxhbmdcIjogc3RyaW5nO1xyXG5cdFwiOm5vdFwiOiBzdHJpbmc7XHJcblx0XCI6bnRoLWNoaWxkXCI6IE50aENoaWxkRXhwcmVzc2lvbjtcclxuXHRcIjpudGgtb2YtdHlwZVwiOiBOdGhDaGlsZEV4cHJlc3Npb247XHJcblx0XCI6bnRoLWxhc3QtY2hpbGRcIjogTnRoQ2hpbGRFeHByZXNzaW9uO1xyXG5cdFwiOm50aC1sYXN0LW9mLXR5cGVcIjogTnRoQ2hpbGRFeHByZXNzaW9uO1xyXG5cdFwiOndoZXJlXCI6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJhbWV0ZXJpemVkUHNldWRvRWxlbWVudCBpbnRlcmZhY2UgbWFwcyBuYW1lcyBvZiBwc2V1ZG8gZWxlbWVudHMgdGhhdCByZXF1aXJlIHBhcmFtZXRlcnNcclxuICogdG8gdGhlIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZXNlIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJhbWV0ZXJpemVkUHNldWRvRWxlbWVudFxyXG57XHJcblx0XCI6OnBhcnRcIjogc3RyaW5nO1xyXG5cdFwiOjpzbG90dGVkXCI6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5IGludGVyZmFjZSBjb21iaW5lcyBJUGFyYW1ldGVyaXplZFBzZXVkb0NsYXNzIGFuZFxyXG4gKiBJUGFyYW1ldGVyaXplZFBzZXVkb0VsZW1lbnQgaW50ZXJmYWNlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHkgZXh0ZW5kcyBJUGFyYW1ldGVyaXplZFBzZXVkb0NsYXNzLCBJUGFyYW1ldGVyaXplZFBzZXVkb0VsZW1lbnRcclxue1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7XHJcbiAgICBFeHRlbmRlZFN0eWxlc2V0LCBBbmltYXRpb25fU2luZ2xlLCBUaW1pbmdGdW5jdGlvbl9TaW5nbGUsIEJhY2tncm91bmRfU2luZ2xlLCBCYWNrZ3JvdW5kU2l6ZV9TaW5nbGUsXHJcbiAgICBCb3JkZXJJbWFnZV9PYmplY3QsIEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlLCBCb3hTaGFkb3dfU2luZ2xlLCBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlLFxyXG4gICAgQm9yZGVyX1N0eWxlVHlwZSwgQ29sdW1uc19TdHlsZVR5cGUsIEN1cnNvcl9TdHlsZVR5cGUsIEZsZXhfU3R5bGVUeXBlLCBGb250X1N0eWxlVHlwZSxcclxuICAgIEdyaWRUZW1wbGF0ZUFyZWFzX1N0eWxlVHlwZSwgR3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGUsIE1hcmtlcl9TdHlsZVR5cGUsIFJvdGF0ZV9TdHlsZVR5cGUsXHJcbiAgICBUZXh0RGVjb3JhdGlvbl9TdHlsZVR5cGUsIFRyYW5zaXRpb25fU2luZ2xlLCBPZmZzZXRfU3R5bGVUeXBlLCBTdHlsZXNldCwgQ3VzdG9tVmFyX1N0eWxlVHlwZSxcclxuICAgIFZhclRlbXBsYXRlTmFtZSwgU3VwcG9ydHNRdWVyeSwgU2luZ2xlU3VwcG9ydHNRdWVyeSwgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uLCBHcmlkVHJhY2tcclxufSBmcm9tIFwiLi9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtFeHRlbmRlZCwgQ3NzUmFkaXVzLCBPbmVPck1hbnksIENzc011bHRpTGVuZ3RoLCBDc3NNdWx0aVRpbWV9IGZyb20gXCIuL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FtZWxUb0Rhc2gsIGRhc2hUb0NhbWVsLCB2YWwyc3RyLCBhcnIyc3RyLCBJVmFsdWVDb252ZXJ0T3B0aW9ucyxcclxuICAgIHBvczJzdHIsIG11bHRpUG9zMnN0ciwgQ3NzTGVuZ3RoTWF0aCwgQ3NzVGltZU1hdGgsIENzc051bWJlck1hdGgsXHJcbiAgICBDc3NBbmdsZU1hdGgsIENzc0ZyZXF1ZW5jeU1hdGgsIENzc1BlcmNlbnRNYXRoLCBDc3NSZXNvbHV0aW9uTWF0aCwgdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyxcclxufSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge2NvbG9yVG9TdHJpbmd9IGZyb20gXCIuL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHtWYXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVmFyUnVsZVwiO1xyXG5pbXBvcnQge0lJRFJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgY29udmVydGluZyBDU1MgcHJvcGVydHkgdHlwZXMgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdCggdmFsOiBBbmltYXRpb25fU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJkdXJhdGlvblwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJmdW5jXCIsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZV0sXHJcbiAgICAgICAgW1wiZGVsYXlcIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY291bnRcIiwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcImRpcmVjdGlvblwiLFxyXG4gICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICBcIm5hbWVcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxBbmltYXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8T25lT3JNYW55PFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT4+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdGltaW5nRnVuY3Rpb25fZnJvbUFycmF5XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYHN0ZXBzKCR7dmFsfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9uX2Zyb21BcnJheSggdmFsOiBhbnlbXSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbFswXSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgID8gc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlKCB2YWwgYXMgVGltaW5nRnVuY3Rpb25fU2luZ2xlKVxyXG4gICAgICAgIDogYXJyMnN0ciggdmFsLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUsIFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8VGltaW5nRnVuY3Rpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdGltaW5nRnVuY3Rpb25fZnJvbU51bWJlcixcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA8IDMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgc3RlcHMgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPD0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyby4gWW91IGhhdmU6ICR7dlswXX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghTnVtYmVyLmlzSW50ZWdlciggdlswXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIGBOdW1iZXIgb2Ygc3RlcHMgaW4gYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgYW4gSW50ZWdlci4gWW91IGhhdmU6ICR7dlswXX1gKTtcclxuICAgICAgICAgICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYHN0ZXBzKCR7dlswXX0ke3YubGVuZ3RoID09PSAyID8gXCIsXCIgKyB2WzFdIDogXCJcIn0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYmV6aWVyIGZ1bmN0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vICNpZiBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2WzBdIDwgMCB8fCB2WzBdID4gMSB8fCB2WzJdIDwgMCB8fCB2WzJdID4gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYEZpcnN0IGFuZCB0aGlyZCBwYXJhbWV0ZXJzIG9mIGN1YmljLWJlemllciBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDEuIFlvdSBoYXZlICR7dlswXX0gYW5kICR7dlsyXX1gKTtcclxuICAgICAgICAgICAgICAgIC8vLyAjZW5kaWZcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYGN1YmljLWJlemllcigke3ZbMF19LCR7dlsxXX0sJHt2WzJdfSwke3ZbM119KWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3QoIHZhbDogQmFja2dyb3VuZF9TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddLFxyXG4gICAgICAgIFwiaW1hZ2VcIixcclxuICAgICAgICBbXCJwb3NpdGlvblwiLCBwb3Myc3RyXSxcclxuICAgICAgICBbXCJzaXplXCIsIG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UsIFwiL1wiXSxcclxuICAgICAgICBcInJlcGVhdFwiLFxyXG4gICAgICAgIFwiYXR0YWNobWVudFwiLFxyXG4gICAgICAgIFwib3JpZ2luXCIsXHJcbiAgICAgICAgXCJjbGlwXCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPEJhY2tncm91bmRfU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29sb3JUb1N0cmluZyxcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRTaXplX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxCYWNrZ3JvdW5kU2l6ZV9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGltYWdlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VUb1N0cmluZyggdmFsOiBCb3JkZXJJbWFnZV9PYmplY3QpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgd2lkdGggaXMgc3BlY2lmaWVkLCBidXQgc2xpY2UgaXMgbm90LCB3ZSBuZWVkIHRvIHNldCBzbGljZSB0byB0aGUgZGVmYXVsdCAxMDAlIHZhbHVlO1xyXG4gICAgLy8gaWYgb3V0c2V0IGlzIHNwZWNpZmllZCBidXQgd2lkdGggaXMgbm90LiB3ZSBuZWVkIHRvIHNldCB3aWR0aCB0byB0aGUgZGVmYXVsdCAxIHZhbHVlO1xyXG4gICAgbGV0IHZhbENvcHk6IEJvcmRlckltYWdlX09iamVjdCA9IE9iamVjdC5hc3NpZ24oIHt9LCB2YWwpO1xyXG4gICAgaWYgKHZhbC5zbGljZSA9PSBudWxsICYmICh2YWwud2lkdGggIT0gbnVsbCB8fCB2YWwub3V0c2V0ICE9IG51bGwpKVxyXG4gICAgICAgIHZhbENvcHkuc2xpY2UgPSBcIjEwMCVcIjtcclxuICAgIGlmICh2YWwud2lkdGggPT0gbnVsbCAmJiB2YWwub3V0c2V0ICE9IG51bGwpXHJcbiAgICAgICAgdmFsQ29weS53aWR0aCA9IDE7XHJcblxyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbENvcHksIFtcclxuICAgICAgICBcInNvdXJjZVwiLFxyXG4gICAgICAgIFtcInNsaWNlXCIsIFwiYm9yZGVySW1hZ2VTbGljZVwiXSxcclxuICAgICAgICBbXCJ3aWR0aFwiLCBudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgW1wib3V0c2V0XCIsbnVsbCwgXCIvXCJdLFxyXG4gICAgICAgIFwicmVwZWF0XCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgaW1hZ2Ugc2xpY2Ugc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJJbWFnZVNsaWNlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiB2ID0+IHZhbDJzdHIoIHYsIHtcclxuICAgICAgICAgICAgZnJvbUJvb2w6ICgpID0+IFwiZmlsbFwiLFxyXG4gICAgICAgICAgICBmcm9tTnVtYmVyOiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG4gICAgICAgIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QoIHZhbDogQm94U2hhZG93X1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wiaW5zZXRcIiwgdiA9PiB2ID8gXCJpbnNldFwiIDogXCJcIl0sXHJcbiAgICAgICAgW1wieFwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInlcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJibHVyXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wic3ByZWFkXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ11cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb3JuZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmFkaXVzPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlclJhZGl1c1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEJvcmRlclJhZGl1c19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCB2WzBdKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdHdvIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBhcnIyc3RyKCB2WzBdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIHMgKz0gXCIgLyBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzICsgYXJyMnN0ciggdlsxXSwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaW5nbGUgTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2LCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxCb3JkZXJfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1Zjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgaWYgKHZbMF0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMF0pKVxyXG5cclxuICAgICAgICAgICAgaWYgKHZbMV0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCB2YWwyc3RyKHZbMV0pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2WzJdICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBidWYucHVzaCggY29sb3JUb1N0cmluZyh2WzJdKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnVmLmpvaW4oXCIgXCIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbnMgc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2x1bW5zVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q29sdW1uc19TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gdlswXSArIFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzFdKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGN1cnNvciBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGN1cnNvclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEN1cnNvcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIC8vIHRoZSB2YWx1ZSBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXkuIElmIGl0IGlzIGFuIGFycmF5LFxyXG4gICAgLy8gaWYgdGhlIGZpcnN0IGVsZW1lbnQgaXMgYSBmdW5jdGlvbiwgdGhlbiB3ZSBuZWVkIHRvIHVzZSBzcGFjZSBhcyBhIHNlcGFyYXRvciAoYmVjYXVzZVxyXG4gICAgLy8gdGhpcyBpcyBhIFVSTCB3aXRoIG9wdGlvbmFsIG51bWJlcnMgZm9yIHRoZSBob3Qgc3BvdCk7IG90aGVyd2lzZSwgd2UgdXNlIGNvbW1hIGFzIGFcclxuICAgIC8vIHNlcGFyYXRvciAtIGJlY2F1c2UgdGhlc2UgYXJlIG11bHRpcGxlIGN1cnNvciBkZWZpbml0aW9ucy5cclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodi5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsMnN0cih2KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZbMV0gPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsMnN0ciggdiwgeyBhcnJTZXA6IFwiIFwifSlcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsMnN0ciggdiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyckl0ZW1GdW5jOiBjdXJzb3JUb1N0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGZsZXggc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBmbGV4VG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8RmxleF9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2LmpvaW4oIFwiIFwiKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZbMF0gKyBcIiBcIiArIHZbMV0gKyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlsyXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRfZnJvbU9iamVjdCggdmFsOiBhbnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcInN0eWxlXCIsIGZvbnRTdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBcInZhcmlhbnRcIixcclxuICAgICAgICBcIndlaWdodFwiLFxyXG4gICAgICAgIFwic3RyZXRjaFwiLFxyXG4gICAgICAgIFtcInNpemVcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJsaW5lSGVpZ2h0XCIsIG51bGwsIFwiL1wiXSxcclxuICAgICAgICBcImZhbWlseVwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxGb250X1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gXCJvYmxpcXVlIFwiICsgQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIHYpXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmlkVGVtcGxhdGVBcmVhc1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEdyaWRUZW1wbGF0ZUFyZWFzX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgLy8gdmFsIGNhbiBiZSBhcnJheSBvZiBmdW5jdGlvbnMgKElRdW90ZWRQcm94eVtdKSBvciBhcnJheXMgKEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbltdKVxyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdlswXSA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHYpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlR3JpZFRlbXBsYXRlQXJlYXNGcm9tRGVmaW5pdGlvbnModik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBhcnJheSBvZiBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb24gb2JqZWN0cyB0byBhIHN0cmluZyB0aGF0IGlzIHN1aXRhYmxlIGZvclxyXG4gKiB0aGUgZ3JpZC10ZW1wbGF0ZS1hcmVhcyBmb3JtYXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVHcmlkVGVtcGxhdGVBcmVhc0Zyb21EZWZpbml0aW9ucyggZGVmczogR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uW10pOiBzdHJpbmdcclxue1xyXG4gICAgLy8gY2FsY3VsYXRlIHRvdGFsIHNpemUgb2YgdGhlIG1hdHJpeCBmcm9tIHRoZSBhcmVhcycgc2l6ZXNcclxuICAgIGxldCByb3dDb3VudCA9IDAsIGNvbENvdW50ID0gMDtcclxuICAgIGZvciggbGV0IGRlZiBvZiBkZWZzKVxyXG4gICAge1xyXG4gICAgICAgIHJvd0NvdW50ID0gTWF0aC5tYXgoIHJvd0NvdW50LCBkZWZbM10pO1xyXG4gICAgICAgIGNvbENvdW50ID0gTWF0aC5tYXgoIGNvbENvdW50LCBkZWZbNF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyb3dDb3VudCA9PT0gMCB8fCBjb2xDb3VudCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAvLyBjcmVhdGUgYXJyYXkgb2Ygcm93cyB3aGVyZSBldmVyeSBlbGVtZW50IGlzIGFuIGFycmF5IG9mIGNlbGxzXHJcbiAgICBsZXQgbWF0cml4ID0gbmV3IEFycmF5PHN0cmluZ1tdPihyb3dDb3VudCk7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspXHJcbiAgICAgICAgbWF0cml4W2ldID0gbmV3IEFycmF5PHN0cmluZz4oY29sQ291bnQpO1xyXG5cclxuICAgIC8vIGdvIG92ZXIgZGVmaW5pdGlvbnMgYW5kIGZpbGwgdGhlIGFwcHJvcHJpYXRlIHBsYWNlcyBpbiB0aGUgY2VsbHMgd2l0aCBhcmVhIG5hbWVzXHJcbiAgICBmb3IoIGxldCBkZWYgb2YgZGVmcylcclxuICAgIHtcclxuICAgICAgICBsZXQgbmFtZSA9IHZhbDJzdHIoIGRlZlswXSk7XHJcbiAgICAgICAgZm9yKCBsZXQgaSA9IGRlZlsxXTsgaSA8PSBkZWZbM107IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciggbGV0IGogPSBkZWZbMl07IGogPD0gZGVmWzRdOyBqKyspXHJcbiAgICAgICAgICAgICAgICBtYXRyaXhbaS0xXVtqLTFdID0gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ28gb3ZlciBvdXIgbWF0cml4IGFuZCBmb3IgZXZlcnkgcm93IGNyZWF0ZSBhIHF1b3RlZCBzdHJpbmcuIFNpbmNlIG91ciBjZWxsIGFycmF5cyBtYXkgYmVcclxuICAgIC8vIHNwYXJzZSwgdXNlIGRvdCBmb3IgdGhlIHVuZGVmaW5lZCBjZWxsc1xyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByb3dOYW1lczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IoIGxldCBqID0gMDsgaiA8IHJvd0NvdW50OyBqKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IG1hdHJpeFtpXVtqXTtcclxuICAgICAgICAgICAgcm93TmFtZXMucHVzaCggbmFtZSA/IG5hbWUgOiBcIi5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHMgKz0gYFwiJHtyb3dOYW1lcy5qb2luKFwiIFwiKX1cIlxcbmA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyaWRUcmFja1RvU3RyaW5nKCB2YWw6IEdyaWRUcmFjayk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHYpLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgWyR7YXJyMnN0cih2KX1dYFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JpZEF4aXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHYgPT4gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2KSxcclxuICAgICAgICBhcnJJdGVtRnVuYzogZ3JpZFRyYWNrVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG1hcmtlclN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TWFya2VyX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmo6IHYgPT4gYHVybCgjJHsodmFsIGFzIElJRFJ1bGUpLm5hbWV9KWBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJvdGF0ZVRvU3RyaW5nKCB2YWw6Um90YXRlX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZbMF19ICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodlsxXSl9YDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3ZbMF19ICR7dlsxXX0gJHt2WzJdfSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKHZbM10pfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25fU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgXCJsaW5lXCIsXHJcbiAgICAgICAgXCJzdHlsZVwiLFxyXG4gICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9TdHJpbmddLFxyXG4gICAgICAgIFtcInRoaWNrbmVzc1wiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVHJhbnNpdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEV4dGVuZGVkPFRyYW5zaXRpb25fU2luZ2xlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wicHJvcGVydHlcIiwgY2FtZWxUb0Rhc2hdLFxyXG4gICAgICAgIFtcImR1cmF0aW9uXCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImZ1bmNcIiwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlXSxcclxuICAgICAgICBbXCJkZWxheVwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlVHJhbnNpdGlvbl9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8VHJhbnNpdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3RcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9mZnNldFRvU3RyaW5nKCB2YWw6IE9mZnNldF9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIFwib2Zmc2V0UG9zaXRpb25cIl0sXHJcbiAgICAgICAgW1wicGF0aFwiLCBcIm9mZnNldFBhdGhcIl0sXHJcbiAgICAgICAgW1wiZGlzdGFuY2VcIiwgXCJvZmZzZXREaXN0YW5jZVwiXSxcclxuICAgICAgICBbXCJyb3RhdGVcIiwgXCJvZmZzZXRSb3RhdGVcIl0sXHJcbiAgICAgICAgW1wiYW5jaG9yXCIsIFwib2Zmc2V0QW5jaG9yXCIsIFwiL1wiXSxcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGRlZm5pdGlvbiBvZiBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YWx1ZSBhbmQgY29udmVydHMgaXQgdG8gc3RyaW5nICovXHJcbmV4cG9ydCB0eXBlIFRvU3RyaW5nRnVuYyA9ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSB0byBhIENTUyBzdHJpbmcgdXNpbmcgdGhlIGluZm8gcGFyYW1ldGVyIHRvIGluZm9ybSBob3cgdGhlIG9iamVjdCdzXHJcbiAqIHByb3BlcnRpZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLiBUaGUgaW5mbyBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2YgZWl0aGVyIHN0cmluZ3NcclxuICogb3IgdHdvLSBvciB0aHJlLWVsZW1lbnQgdHVwbGVzLiBUaGUgb25seSBzdHJpbmcgYW5kIHRoZSBmaXJzdCB0dXBsZSBlbGVtZW50IGNvcnJlc3BvbmRzIHRvIGFcclxuICogcHJvcGVydHkgZXhwZWN0ZWQgaW4gdGhlIHZhbHVlIG9iamVjdCB0byBiZSBjb252ZXJ0ZWQuIEVhY2ggcHJvcGVydHkgaXMgY29udmVydGVkIGFjY29yZGluZ1xyXG4gKiB0byB0aGUgZm9sbG93aW5nIHJ1bGVzOlxyXG4gKiAtIElmIHRoZSBhcnJheSBpdGVtIGlzIGp1c3QgYSBzdHJpbmcsIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlJ3MgcHJvcGVydHkgaXMgY29udmVydGVkIHVzaW5nXHJcbiAqICAgdGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24uXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIG51bGwgb3IgdW5kZWZpbmVkLCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSdzIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB1c2luZ1xyXG4gKiAgIHRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uLi5cclxuICogLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgYSBzdHJpbmcgaXQgaXMgdHJlYXRlZCBhcyBhIG5hbWUgb2YgYSBsb25naGFuZCBzdHlsZSBwcm9wZXJ0eS4gVGhlXHJcbiAqICAgdmFsdWUncyBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdXNpbmcgdGhlIHN0eWxlUHJvcFRvU3RyaW5nIGZ1bmN0aW9uIGZvciB0aGlzIGxvbmdoYW5kIHN0eWxlXHJcbiAqICAgcHJvcGVydHkuXHJcbiAqIC0gSWYgdGhlIHNlY29uZCBlbGVtZW50IGlzIGEgZnVuY3Rpb24sIGl0IGlzIHVzZWQgdG8gY29udmVydCB0aGUgdmFsdWUncyBwcm9wZXJ0eS5cclxuICogLSBJZiBhIHRoaXJkIGVsZW1lbnQgZXhpc3RzIGluIHRoZSB0dXBsZSBpdCBpcyB0cmVhdGVkIGFzIGEgcHJlZml4IHRvIGJlIHBsYWNlZCBiZWZvcmUgdGhlXHJcbiAqICAgY29udmVydGVkIHByb3BlcnR5IHZhbHVlLlxyXG4gKiBcclxuICogVGhlIG9yZGVyIG9mIHRoZSBuYW1lcyBkZXRlcm1pbmVzIGluIHdoaWNoIG9yZGVyIHRoZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBhZGRlZCB0byB0aGUgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iajJzdHIoIHZhbDogYW55LFxyXG4gICAgaW5mbzogKHN0cmluZyB8IFtzdHJpbmcsIG51bGwgfCBzdHJpbmcgfCBUb1N0cmluZ0Z1bmMsIHN0cmluZz9dIClbXSxcclxuICAgIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgbGV0IGJ1ZjogKHN0cmluZylbXSA9IFtdO1xyXG4gICAgaW5mby5mb3JFYWNoKCBuYW1lT3JUdXBsZSA9PlxyXG4gICAge1xyXG4gICAgICAgIC8vIGdldCB0aGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgaW4gdGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWU7XHJcbiAgICAgICAgLy8gaWYgdGhlIHByb3BlcnRpZXMgdmFsdWUgaXMgbm90IGRlZmluZWQsIHNraXAgaXQuXHJcbiAgICAgICAgbGV0IHByb3BOYW1lID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gbmFtZU9yVHVwbGUgOiBuYW1lT3JUdXBsZVswXTtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IHZhbFtwcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHdlIGhhdmUgYSBwcmVmaXhcclxuICAgICAgICBsZXQgcHJlZml4ID0gdHlwZW9mIG5hbWVPclR1cGxlID09PSBcInN0cmluZ1wiID8gdW5kZWZpbmVkIDogbmFtZU9yVHVwbGVbMl07XHJcbiAgICAgICAgaWYgKHByZWZpeClcclxuICAgICAgICAgICAgYnVmLnB1c2goIHByZWZpeCk7XHJcblxyXG4gICAgICAgIGxldCBjb252ZXJ0b3IgPSB0eXBlb2YgbmFtZU9yVHVwbGUgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBuYW1lT3JUdXBsZVsxXTtcclxuICAgICAgICBpZiAoIWNvbnZlcnRvcilcclxuICAgICAgICAgICAgYnVmLnB1c2goIHZhbDJzdHIoIHByb3BWYWwpKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY29udmVydG9yID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICBidWYucHVzaCggc3R5bGVQcm9wVG9TdHJpbmcoIGNvbnZlcnRvciwgcHJvcFZhbCwgdHJ1ZSkpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgYnVmLnB1c2goIGNvbnZlcnRvciggcHJvcFZhbCkpO1xyXG4gICAgfSk7XHJcblxyXG5cdHJldHVybiBidWYuam9pbihzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgZm9yIGhhbmRsaW5nIFN0eWxlc2V0cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogTWVyZ2VzIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIHN0eWxlc2V0IHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQuIEFsbCByZWd1bGFyIHByb3BlcnRpZXMgYXJlXHJcbiAqIHJlcGxhY2VkLiBUaGUgXCItLVwiIHByb3BlcnR5IGdldHMgc3BlY2lhbCB0cmVhdG1lbnQgYmVjYXVzZSBpdCBpcyBhbiBhcnJheS5cclxuICogQHBhcmFtIHRhcmdldCBcclxuICogQHBhcmFtIHNvdXJjZSBcclxuICogQHJldHVybnMgUmVmZXJlbmNlIHRvIHRoZSB0YXJnZXQgc3R5bGVzZXQgaWYgbm90IG51bGwgb3IgYSBuZXcgc3R5bGVzZXQgb3RoZXJ3aXNlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzZXRzKCB0YXJnZXQ6IFN0eWxlc2V0IHwgdW5kZWZpbmVkIHwgbnVsbCxcclxuICAgIHNvdXJjZTogU3R5bGVzZXQpOiBTdHlsZXNldFxyXG57XHJcbiAgICBpZiAoIXNvdXJjZSlcclxuICAgICAgICByZXR1cm4gdGFyZ2V0ID8gdGFyZ2V0IDoge307XHJcblxyXG4gICAgLy8gaWYgdGFyZ2V0IGlzIG5vdCBkZWZpbmVkLCBjcmVhdGUgaXQgYXMgYW4gZW1wdHkgb2JqZWN0LiBUaGlzIG9iamVjdCB3aWxsIGJlIHJldHVybmVkIGFmdGVyXHJcbiAgICAvLyBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZSBhcmUgY29waWVkIHRvIGl0LlxyXG4gICAgaWYgKCF0YXJnZXQpXHJcbiAgICB7XHJcbiAgICAgICAgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbiggdGFyZ2V0LCBzb3VyY2UpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgd2hldGhlciBjdXN0b20gcHJvcGVydGllcyBhcmUgZGVmaW5lZC4gSWYgbm90LCB3ZSBjYW4ganVzdCB1c2UgdGhlIE9iamVjdC5hc3NpZ24gZnVuY3Rpb24uXHJcbiAgICBsZXQgc291cmNlQ3VzdG9tUHJvcHMgPSBzb3VyY2VbXCItLVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbiggdGFyZ2V0LCBzb3VyY2UpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWVyZ2UgY3VzdG9tIGFuZCBpbXBvcnRhbnQgcHJvcGVydGllc1xyXG4gICAgbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzKCB0YXJnZXQsIHNvdXJjZSk7XHJcblxyXG4gICAgLy8gY29weSBhbGwgb3RoZXIgcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2VcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzb3VyY2UpXHJcblx0e1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCIhXCIgfHwgcHJvcE5hbWUgPT09IFwiLS1cIilcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gc291cmNlW3Byb3BOYW1lXTtcclxuXHR9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogTWVyZ2VzIFwiLS1cIiBwcm9wZXJ0eSBmcm9tIHRoZSBzb3VyY2Ugc3R5bGVzZXQgdG8gdGhlIHRhcmdldCBzdHlsZXNldC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRhcmdldDogU3R5bGVzZXQsXHJcbiAgICBzb3VyY2U6IFN0eWxlc2V0KTogdm9pZFxyXG57XHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBpbXBvcnRhbnQgcHJvcGVydGllcyBhcmUgZGVmaW5lZFxyXG4gICAgbGV0IHNvdXJjZUN1c3RvbVByb3BzID0gc291cmNlW1wiLS1cIl07XHJcbiAgICBpZiAoIXNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAvLyBtZXJnZSBjdXN0b20gcHJvcGVydGllc1xyXG4gICAgaWYgKHNvdXJjZUN1c3RvbVByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0YXJnZXRDdXN0b21Qcm9wcyA9IHRhcmdldFtcIi0tXCJdO1xyXG4gICAgICAgIHRhcmdldFtcIi0tXCJdID0gIXRhcmdldEN1c3RvbVByb3BzID8gc291cmNlQ3VzdG9tUHJvcHMuc2xpY2UoKSA6IHRhcmdldEN1c3RvbVByb3BzLmNvbmNhdCggc291cmNlQ3VzdG9tUHJvcHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3R5bGVzZXQgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZyggc3R5bGVzZXQ6IFN0eWxlc2V0KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghc3R5bGVzZXQpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG5cclxuXHRmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQsIChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGlzQ3VzdG9tOiBib29sZWFuKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKGlzQ3VzdG9tKVxyXG4gICAgICAgICAgICBzICs9IGAke25hbWV9OiR7dmFsdWV9O2A7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzICs9IGAke2NhbWVsVG9EYXNoKG5hbWUpfToke3ZhbHVlfTtgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3RzIG5hbWUgYW5kIHN0cmluZyB2YWx1ZXMgZnJvbSB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKiBAcGFyYW0gY3VzdG9tVmFsIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1c3RvbVByb3BOYW1lQW5kVmFsdWUoIGN1c3RvbVZhbDogQ3VzdG9tVmFyX1N0eWxlVHlwZSk6IFtzdHJpbmc/LHN0cmluZz9dXHJcbntcclxuICAgIGlmICghY3VzdG9tVmFsKVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICBsZXQgdmFyTmFtZTogc3RyaW5nO1xyXG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XHJcbiAgICBsZXQgdmFsdWU6IGFueTtcclxuICAgIGlmIChjdXN0b21WYWwubGVuZ3RoID09PSAyKVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSAoY3VzdG9tVmFsWzBdIGFzIFZhclJ1bGUpLmNzc05hbWU7XHJcbiAgICAgICAgdGVtcGxhdGUgPSBjdXN0b21WYWxbMF0udGVtcGxhdGU7XHJcbiAgICAgICAgdmFsdWUgPSBjdXN0b21WYWxbMV1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICB2YXJOYW1lID0gY3VzdG9tVmFsWzBdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIGVsc2UgaWYgKCF2YXJOYW1lLnN0YXJ0c1dpdGgoXCItLVwiKSlcclxuICAgICAgICAgICAgdmFyTmFtZSA9IFwiLS1cIiArIHZhck5hbWU7XHJcblxyXG4gICAgICAgIHRlbXBsYXRlID0gY3VzdG9tVmFsWzFdO1xyXG4gICAgICAgIGlmICghdmFyTmFtZSB8fCAhdGVtcGxhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgdmFsdWUgPSBjdXN0b21WYWxbMl07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFt2YXJOYW1lLCBzdHlsZVByb3BUb1N0cmluZyggdGVtcGxhdGUsIHZhbHVlLCB0cnVlKV07XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0eWxlIHN0cmluZy4gUHJvcGVydHkgbmFtZSBjYW4gYmUgaW4gZWl0aGVyXHJcbiAqIGRhc2ggb3IgY2FtZWwgZm9ybS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcE5hbWUpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcblxyXG4gICAgLy8gZmluZCBpbmZvcm1hdGlvbiBvYmplY3QgZm9yIHRoZSBwcm9wZXJ0eVxyXG4gICAgbGV0IGluZm86IGFueSA9IFN0eWxlUHJvcGVydHlJbmZvc1tkYXNoVG9DYW1lbChwcm9wTmFtZSldO1xyXG5cclxuICAgIC8vIGlmIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgXCIhXCIgcHJvcGVydHksIHRoZW4gdGhlIGFjdHVhbCB2YWx1ZSBpcyB0aGVcclxuICAgIC8vIHZhbHVlIG9mIHRoaXMgcHJvcGVydHkgYW5kIHdlIGFsc28gbmVlZCB0byBzZXQgdGhlIFwiIWltcG9ydGFudFwiIGZsYWdcclxuICAgIGxldCB2YXJWYWx1ZSA9IHByb3BWYWw7XHJcbiAgICBsZXQgaW1wRmxhZyA9IGZhbHNlO1xyXG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcIm9iamVjdFwiICYmIFwiIVwiIGluIHByb3BWYWwpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyVmFsdWUgPSBwcm9wVmFsW1wiIVwiXTtcclxuICAgICAgICBpbXBGbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RyaW5nVmFsdWUgPSAhaW5mb1xyXG4gICAgICAgID8gdmFsMnN0ciggdmFyVmFsdWUpXHJcbiAgICAgICAgOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICA/IHZhbDJzdHIoIHZhclZhbHVlLCBpbmZvIGFzIElWYWx1ZUNvbnZlcnRPcHRpb25zKVxyXG4gICAgICAgICAgICA6IHR5cGVvZiBpbmZvID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICA/IHZhbHVlVG9TdHJpbmdCeVdlbGxLbm93bkZ1bmMoIHZhclZhbHVlLCBpbmZvKVxyXG4gICAgICAgICAgICAgICAgOiAoaW5mbyBhcyBUb1N0cmluZ0Z1bmMpKCB2YXJWYWx1ZSk7XHJcblxyXG4gICAgaWYgKCFzdHJpbmdWYWx1ZSAmJiAhdmFsdWVPbmx5KVxyXG4gICAgICAgIHN0cmluZ1ZhbHVlID0gXCJpbml0aWFsXCI7XHJcblxyXG4gICAgaWYgKGltcEZsYWcpXHJcbiAgICAgICAgc3RyaW5nVmFsdWUgKz0gXCIgIWltcG9ydGFudFwiO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzdHJpbmdWYWx1ZSA6IGAke2NhbWVsVG9EYXNoKCBwcm9wTmFtZSl9OiR7c3RyaW5nVmFsdWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRm9yIGVhY2ggcHJvcGVydHkgLSByZWd1bGFyIGFuZCBjdXN0b20gLSBpbiB0aGUgZ2l2ZW4gc3R5bGVzZXQgaW52b2tlcyB0aGUgYXBwcm9wcmlhdGVcclxuICogZnVuY3Rpb24gdGhhdCBnZXRzIHRoZSBwcm9wZXJ0eSBuYW1lIGFuZCB0aGUgdmFsdWUgY29udmVydGVkIHRvIHN0cmluZy5cclxuICogQHBhcmFtIHN0eWxlc2V0IFxyXG4gKiBAcGFyYW0gZm9yUHJvcCBcclxuICogQHBhcmFtIGZvckN1c3RvbVByb3AgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0OiBTdHlsZXNldCxcclxuICAgIGZvclByb3A6IChuYW1lOiBzdHJpbmcsIHZhbDogc3RyaW5nLCBpc0N1c3RvbTogYm9vbGVhbikgPT4gdm9pZClcclxue1xyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGlmIChwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBzcGVjaWFsIGhhbmRsaW5nIG9mIHRoZSBcIi0tXCIgcHJvcGVydHksIHdoaWNoIGlzIGFuIGFycmF5IHdoZXJlIGVhY2ggaXRlbSBpc1xyXG5cdFx0XHQvLyBhIHR3by1pdGVtIG9yIHRocmVlLWl0ZW0gYXJyYXlcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBzdHlsZXNldFtwcm9wTmFtZV0gYXMgQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG5cdFx0XHRmb3IoIGxldCBjdXN0b21WYWwgb2YgcHJvcFZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghY3VzdG9tVmFsKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBbdmFyTmFtZSwgdmFyVmFsdWVdID0gZ2V0Q3VzdG9tUHJvcE5hbWVBbmRWYWx1ZSggY3VzdG9tVmFsKTtcclxuXHRcdFx0XHRpZiAoIXZhck5hbWUpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRpZiAodmFyVmFsdWUgPT0gbnVsbClcclxuXHRcdFx0XHRcdHZhclZhbHVlID0gXCJcIjtcclxuXHJcblx0XHRcdFx0Zm9yUHJvcCggdmFyTmFtZSwgdmFyVmFsdWUsIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIGdldCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBmb3JQcm9wKCBwcm9wTmFtZSwgc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lLCBzdHlsZXNldFtwcm9wTmFtZV0sIHRydWUpLCBmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZ2l2ZW4gbXVsdGktbGVuZ3RoIHZhbHVlIHRvIHN0cmluZy4gSWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVcclxuLy8gaXRlbXMgd2lsbCBiZSBzZXBhcmF0ZWQgYnkgc3BhY2UuXHJcbmZ1bmN0aW9uIG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2UoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBDc3NMZW5ndGhNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBcIiBcIik7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZ2l2ZW4gbXVsdGktdGltZSB2YWx1ZSB0byBzdHJpbmcuIElmIHRoZSB2YWx1ZSBpcyBhbiBhcnJheSwgdGhlXHJcbi8vIGl0ZW1zIHdpbGwgYmUgc2VwYXJhdGVkIGJ5IGNvbW1hLlxyXG5mdW5jdGlvbiBtdWx0aVRpbWVUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVRpbWU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBDc3NUaW1lTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgXCIsXCIpO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy4gSWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGUgaXRlbXMgd2lsbCBiZVxyXG4vLyBzZXBhcmF0ZWQgYnkgY29tbWEuXHJcbmZ1bmN0aW9uIGFycmF5VG9TdHJpbmdXaXRoQ29tbWEoIHZhbDogYW55KVxyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7IGFyclNlcDogXCIsXCIgfSk7XHJcbn07XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gY29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZy4gSWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGUgaXRlbXMgd2lsbCBiZVxyXG4vLyBzZXBhcmF0ZWQgYnkgc2xhc2guXHJcbmZ1bmN0aW9uIGFycmF5VG9TdHJpbmdXaXRoU2xhc2goIHZhbDogYW55KVxyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7IGFyclNlcDogXCIvXCIgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBOdW1lcmljIGlkZW50aWZpZXJzIGNvcnJlc3BvbmRpbmcgdG8gd2VsbCBrbm93biBmdW5jdGlvbnMgdXNlZCB0byBjb252ZXJ0IHN0eWxlIHByb3BlcnR5IHZhbHVlc1xyXG4gKiB0byBzdHJpbmdzLiBUaGlzIGlzIHVzZWQgdG8gcmVkdWNlIHRoZSBzaXplIG9mIHRoZSBvYmplY3QgdXNlZCBmb3IgbWFwcGluZyBzdHlsZSBwcm9wZXJ0aWVzIHRvXHJcbiAqIGNvbnZlcnNpb24gZnVuY3Rpb25zLlxyXG4gKiBcclxuICogTm90ZSEhITogdGhlIHZhbHVlcyBpbiB0aGUgZW51bWVyYXRpb24gY2Fubm90IGJlIGNoYW5nZWQgLSBvdGhlcndpc2UsIGl0IHdpbGwgbm90IGJlIGJhY2t3YXJkc1xyXG4gKiBjb21wYXRpYmxlLiBBbGwgbmV3IHZhbHVlcyBtdXN0IGJlIGFwcGVuZGVkIGF0IHRoZSBlbmQuXHJcbiAqL1xyXG5jb25zdCBlbnVtIFdlbGxLbm93bkZ1bmNcclxue1xyXG4gICAgTGVuZ3RoID0gMSxcclxuICAgIENvbG9yLFxyXG4gICAgQm9yZGVyLFxyXG4gICAgUG9zaXRpb24sXHJcbiAgICBDb3JuZXJSYWRpdXMsXHJcbiAgICBNdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIE11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIEFycmF5V2l0aENvbW1hLFxyXG4gICAgQXJyYXlXaXRoU2xhc2gsXHJcbiAgICBHcmlkQXhpcyxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIHN0cmluZyB1c2luZyBhIHdlbGwta25vd24gZnVuY3Rpb24gaW5kaWNhdGVkIGJ5IHRoZSBnaXZlblxyXG4gKiBlbnVtZXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIHZhbCBcclxuICogQHBhcmFtIGZ1bmNUeXBlIFxyXG4gKi9cclxuZnVuY3Rpb24gdmFsdWVUb1N0cmluZ0J5V2VsbEtub3duRnVuYyggdmFsOiBhbnksIGZ1bmNUeXBlOiBXZWxsS25vd25GdW5jKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBmdW5jID1cclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5MZW5ndGggPyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkNvbG9yID8gY29sb3JUb1N0cmluZyA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQm9yZGVyID8gYm9yZGVyVG9TdHJpbmcgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLlBvc2l0aW9uID8gcG9zMnN0ciA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzID8gc2luZ2xlQ29ybmVyUmFkaXVzVG9TdHJpbmcgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlID8gbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hID8gbXVsdGlUaW1lVG9TdHJpbmdXaXRoQ29tbWEgOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hID8gYXJyYXlUb1N0cmluZ1dpdGhDb21tYSA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoU2xhc2ggPyBhcnJheVRvU3RyaW5nV2l0aFNsYXNoIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5HcmlkQXhpcyA/IGdyaWRBeGlzVG9TdHJpbmcgOlxyXG4gICAgICAgIG51bGw7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmMgPyBmdW5jKHZhbCkgOiBcIlwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZWdpc3RyeSBvZiBDU1MgcHJvcGVydGllcyB0aGF0IHNwZWNpZmllcyBob3cgdGhlaXIgdmFsdWVzIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHRoZSBTdHlsZVByb3BlcnR5SW5mbyBvYmplY3RzIGRlc2NyaWJpbmcgY3VzdG9tIGFjdGlvbnMgbmVjZXNzYXJ5IHRvXHJcbiAqIGNvbnZlcnQgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBDU1MtY29tcGxpYW50IHN0cmluZy5cclxuICovXHJcbmNvbnN0IFN0eWxlUHJvcGVydHlJbmZvczogeyBbSyBpbiBWYXJUZW1wbGF0ZU5hbWVdPzogKFdlbGxLbm93bkZ1bmMgfCBUb1N0cmluZ0Z1bmMgfCBJVmFsdWVDb252ZXJ0T3B0aW9ucykgfSA9XHJcbntcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0LFxyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZUFuaW1hdGlvbl9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICBhbmltYXRpb25EZWxheTogV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uTmFtZTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nLFxyXG5cclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kQ2xpcDogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJhY2tncm91bmRPcmlnaW46IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHYgPT4gbXVsdGlQb3Myc3RyKCB2LCBcIixcIiksXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHNpbmdsZUJhY2tncm91bmRTaXplX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9LFxyXG4gICAgYmFzZWxpbmVTaGlmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXI6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQmxvY2tFbmRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckJsb2NrRW5kV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyQm90dG9tOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMsXHJcbiAgICBib3JkZXJCb3R0b21XaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJDb2xvcjoge1xyXG4gICAgICAgIGZyb21Bbnk6IGNvbG9yVG9TdHJpbmdcclxuICAgIH0sXHJcbiAgICBib3JkZXJJbWFnZToge1xyXG4gICAgICAgIGZyb21PYmo6IGJvcmRlckltYWdlVG9TdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgYm9yZGVySW1hZ2VTbGljZTogYm9yZGVySW1hZ2VTbGljZVRvU3RyaW5nLFxyXG4gICAgYm9yZGVySW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlcklubGluZUVuZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVySW5saW5lRW5kV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlcklubGluZVN0YXJ0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyTGVmdDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJMZWZ0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJMZWZ0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNUb1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJSaWdodFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlclNwYWNpbmc6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBib3JkZXJUb3A6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyVG9wQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlclRvcFdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlcldpZHRoOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgYm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJveFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGNhcmV0Q29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBjbGlwOiAge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiBgcmVjdCgke211bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2Uodil9YFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgY29sdW1uR2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGNvbHVtblJ1bGU6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgY29sdW1uUnVsZUNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgY29sdW1uczogY29sdW1uc1RvU3RyaW5nLFxyXG4gICAgY29sdW1uV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgY3Vyc29yOiBjdXJzb3JUb1N0cmluZyxcclxuXHJcbiAgICBmaWxsOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgZmlsbE9wYWNpdHk6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBmbGV4OiBmbGV4VG9TdHJpbmcsXHJcbiAgICBmbGV4QmFzaXM6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZmxvb2RDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGZvbnQ6IHtcclxuICAgICAgICBmcm9tT2JqOiBmb250X2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICBmb250U2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBmb250U3R5bGU6IGZvbnRTdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIGdhcDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGdyaWRDb2x1bW5HYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZ3JpZEdhcDogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGdyaWRSb3dHYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgZ3JpZEFyZWE6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoU2xhc2gsXHJcbiAgICBncmlkQXV0b0NvbHVtbnM6IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMsXHJcbiAgICBncmlkQXV0b1Jvd3M6IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMsXHJcbiAgICBncmlkQ29sdW1uOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aFNsYXNoLFxyXG4gICAgZ3JpZFJvdzogV2VsbEtub3duRnVuYy5BcnJheVdpdGhTbGFzaCxcclxuICAgIGdyaWRUZW1wbGF0ZUFyZWFzOiBncmlkVGVtcGxhdGVBcmVhc1RvU3RyaW5nLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogV2VsbEtub3duRnVuYy5HcmlkQXhpcyxcclxuICAgIGdyaWRUZW1wbGF0ZVJvd3M6IFdlbGxLbm93bkZ1bmMuR3JpZEF4aXMsXHJcblxyXG4gICAgaGVpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBpbmxpbmVTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBsZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGxldHRlclNwYWNpbmc6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbGlnaHRpbmdDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuXHJcbiAgICBtYXJnaW46IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBtYXJnaW5CbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5CbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbkJvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5JbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5SaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5Ub3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFya2VyRW5kOiBtYXJrZXJTdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFya2VyTWlkOiBtYXJrZXJTdHlsZVRvU3RyaW5nLFxyXG4gICAgbWFya2VyU3RhcnQ6IG1hcmtlclN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXhCbG9ja1NpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWF4SGVpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1heElubGluZVNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWF4V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWluQmxvY2tTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1pbkhlaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtaW5JbmxpbmVTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHRtaW5XaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgb2JqZWN0UG9zaXRpb246IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBvZmZzZXQ6IG9mZnNldFRvU3RyaW5nLFxyXG4gICAgb2Zmc2V0QW5jaG9yOiBXZWxsS25vd25GdW5jLlBvc2l0aW9uLFxyXG4gICAgb2Zmc2V0RGlzdGFuY2U6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgb2Zmc2V0UG9zaXRpb246IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBvZmZzZXRSb3RhdGU6IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgb3V0bGluZUNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgb3V0bGluZU9mZnNldDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgcGFkZGluZzogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHBhZGRpbmdCbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdJbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdMZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdSaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBlcnNwZWN0aXZlOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHF1b3Rlczoge1xyXG4gICAgICAgIGFyckl0ZW1GdW5jOiB2ID0+IGBcIiR7dn1cImBcclxuICAgIH0sXHJcblxyXG4gICAgcmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcm90YXRlOiByb3RhdGVUb1N0cmluZyxcclxuICAgIHJvd0dhcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgc2Nyb2xsYmFyQ29sb3I6IHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogY29sb3JUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHNjcm9sbE1hcmdpbjogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5Cb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbklubGluZVN0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbkxlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luUmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luVG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmc6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0JvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ0xlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ1JpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdUb3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2hhcGVNYXJnaW46IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc3RvcENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgc3Ryb2tlOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG5cclxuICAgIHRhYlNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgdGV4dENvbWJpbmVVcHJpZ2h0OiB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBgZGlnaXRzICR7dn1gXHJcbiAgICB9LFxyXG4gICAgdGV4dERlY29yYXRpb246IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmo6IHRleHREZWNvcmF0aW9uX2Zyb21PYmplY3RcclxuICAgIH0sXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgdGV4dEVtcGhhc2lzOiB7XHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRleHRFbXBoYXNpc0NvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgdGV4dEluZGVudDoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRleHRTaGFkb3c6IHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIHRleHRTaXplQWRqdXN0OiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgdG9wOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHRyYW5zZm9ybU9yaWdpbjoge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlVHJhbnNpdGlvbl9mcm9tU3R5bGUsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcbiAgICB0cmFuc2l0aW9uRGVsYXk6IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogdGltaW5nRnVuY3Rpb25Ub1N0cmluZyxcclxuICAgIHRyYW5zbGF0ZToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSxcclxuXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICB3aWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICB3aWxsQ2hhbmdlOiB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogY2FtZWxUb0Rhc2hcclxuICAgIH0sXHJcbiAgICB3b3JkU3BhY2luZzogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcblxyXG4gICAgem9vbTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuXHJcbiAgICAvLyBzcGVjaWFsIHByb3BlcnRpZXMgZm9yIElWYXJSdWxlIHR5cGVzXHJcbiAgICBcIkNzc0xlbmd0aFwiOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIFwiQ3NzQW5nbGVcIjogQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1RpbWVcIjogQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUmVzb2x1dGlvblwiOiBDc3NSZXNvbHV0aW9uTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NGcmVxdWVuY3lcIjogQ3NzRnJlcXVlbmN5TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NQZXJjZW50XCI6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1Bvc2l0aW9uXCI6IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBcIkNzc0NvbG9yXCI6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1Mgc3VwcG9ydHMgcXVlcnkuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdXBwb3J0cyBxdWVyeSB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCBxdWVyeSwge1xyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiIG9yIFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN1cHBvcnRzIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnk6IFNpbmdsZVN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHF1ZXJ5LCB7XHJcbiAgICAgICAgZnJvbU9iajogKHY6IEV4dGVuZGVkU3R5bGVzZXQgJiB7ICRuZWdhdGU/OiBib29sZWFuOyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyggdikuZmlsdGVyKCAocHJvcE5hbWUpID0+IHByb3BOYW1lICE9IFwiJG5lZ2F0ZVwiKTtcclxuICAgICAgICAgICAgaWYgKHByb3BOYW1lcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBub3QgPSB2LiRuZWdhdGUgPyBcIm5vdFwiIDogXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuICBgJHtub3R9ICgke3Byb3BOYW1lcy5tYXAoIChwcm9wTmFtZSkgPT5cclxuICAgICAgICAgICAgICAgIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZSBhcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0LCBxdWVyeVtwcm9wTmFtZV0pKS5qb2luKCBcIikgYW5kIChcIil9KWA7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkLCBPbmVPclBhaXIsIE9uZU9yQm94LCBPbmVPck1hbnksIENzc051bWJlciwgQ3NzUG9zaXRpb24sIE11bHRpQ3NzUG9zaXRpb24sXHJcbiAgICBDc3NUaW1lLCBDc3NMZW5ndGgsIENzc0FuZ2xlLCBDc3NQZXJjZW50LCBDc3NMZW5ndGhCb3gsIENzc011bHRpVGltZSwgQ3NzRnJlcXVlbmN5LFxyXG4gICAgQ3NzUmVzb2x1dGlvbiwgQ3NzUmFkaXVzLCBJVXJsUHJveHksIEhvcml6b250YWxQb3NpdGlvbktleXdvcmQsIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLFxyXG4gICAgQ3NzUG9pbnQsIEV4dGVuZGVkUHJvcCwgSUdlbmVyaWNQcm94eSwgQ3NzTGVuZ3RoUGFpciwgSVF1b3RlZFByb3h5XHJcbn0gZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4vQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7Q3NzSW1hZ2V9IGZyb20gXCIuL0ltYWdlVHlwZXNcIjtcclxuaW1wb3J0IHtGb250U3RyZXRjaF9TaW5nbGV9IGZyb20gXCIuL0ZvbnRGYWNlVHlwZXNcIjtcclxuaW1wb3J0IHtJVmFyUnVsZSwgSUFuaW1hdGlvblJ1bGUsIElDb3VudGVyUnVsZSwgSUlEUnVsZSwgSUdyaWRMaW5lUnVsZSwgSUdyaWRBcmVhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ24tY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnbkNvbnRlbnRfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8XHJcbiAgICBcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8IFwic2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIGNlbnRlclwiIHxcclxuICAgIFwic3BhY2UtYmV0d2VlblwiIHwgXCJzcGFjZS1hcm91bmRcIiB8IFwic3BhY2UtZXZlbmx5XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbi1pdGVtcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnbkl0ZW1zX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfFxyXG4gICAgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfCBcInNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBjZW50ZXJcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFsaWduLXNlbGYgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25TZWxmX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8XHJcbiAgICBcInNlbGYtc3RhcnRcIiB8IFwic2VsZi1lbmRcIiB8IFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHxcclxuICAgIFwic2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIGNlbnRlclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ25tZW50LWJhc2VsaW5lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFsaWdubWVudEJhc2VsaW5lX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJiYXNlbGluZVwiIHwgXCJiZWZvcmUtZWRnZVwiIHwgXCJ0ZXh0LWJlZm9yZS1lZGdlXCIgfFxyXG4gICAgXCJtaWRkbGVcIiB8IFwiY2VudHJhbFwiIHwgXCJhZnRlci1lZGdlXCIgfCBcInRleHQtYWZ0ZXItZWRnZVwiIHwgXCJpZGVvZ3JhcGhpY1wiIHwgXCJhbHBoYWJldGljXCIgfFxyXG4gICAgXCJoYW5naW5nXCIgfCBcIm1hdGhlbWF0aWNhbFwiIHwgXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25fU2luZ2xlID1cclxuICAgIHtcclxuICAgICAgICBuYW1lPzogRXh0ZW5kZWQ8QW5pbWF0aW9uTmFtZV9TaW5nbGU+O1xyXG4gICAgICAgIGR1cmF0aW9uPzogRXh0ZW5kZWQ8Q3NzVGltZT47XHJcbiAgICAgICAgZnVuYz86IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT47XHJcbiAgICAgICAgZGVsYXk/OiBFeHRlbmRlZDxDc3NUaW1lPjtcclxuICAgICAgICBjb3VudD86IEV4dGVuZGVkPEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1NpbmdsZT47XHJcbiAgICAgICAgZGlyZWN0aW9uPzogRXh0ZW5kZWQ8QW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZT47XHJcbiAgICAgICAgbW9kZT86IEV4dGVuZGVkPEFuaW1hdGlvbkZpbGxNb2RlX1NpbmdsZT47XHJcbiAgICAgICAgc3RhdGU/OiBFeHRlbmRlZDxBbmltYXRpb25QbGF5U3RhdGVfU2luZ2xlPjtcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbl9TdHlsZVR5cGUgPSBzdHJpbmcgfCBPbmVPck1hbnk8QW5pbWF0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZGVsYXkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRGVsYXlfU3R5bGVUeXBlID0gQ3NzTXVsdGlUaW1lO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBkaXJlY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZSA9IFwibm9ybWFsXCIgfCBcInJldmVyc2VcIiB8IFwiYWx0ZXJuYXRlXCIgfCBcImFsdGVybmF0ZS1yZXZlcnNlXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWRpcmVjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EaXJlY3Rpb25fU3R5bGVUeXBlID0gT25lT3JNYW55PEFuaW1hdGlvbkRpcmVjdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWR1cmF0b24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRHVyYXRpb25fU3R5bGVUeXBlID0gQ3NzTXVsdGlUaW1lO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBmaWxsIG1vZGUgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRmlsbE1vZGVfU2luZ2xlID0gXCJub25lXCIgfCBcImZvcndhcmRzXCIgfCBcImJhY2t3YXJkc1wiIHwgXCJib3RoXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWZpbGwtbW9kZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GaWxsTW9kZV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGl0ZXJhdGlvbiBjb3VudCAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25JdGVyYXRpb25Db3VudF9TaW5nbGUgPSBcImluZmluaXRlXCIgfCBDc3NOdW1iZXI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25JdGVyYXRpb25Db3VudF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uSXRlcmF0aW9uQ291bnRfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gbmFtZSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25OYW1lX1NpbmdsZSA9IFwibm9uZVwiIHwgc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLW5hbWUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uTmFtZV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uTmFtZV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBwbGF5IHN0YXRlICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblBsYXlTdGF0ZV9TaW5nbGUgPSBcInBhdXNlZFwiIHwgXCJydW5uaW5nXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLXBsYXktc3RhdGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uUGxheVN0YXRlX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25QbGF5U3RhdGVfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbXBsZSBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9ucyAtIHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBwYXJhbWV0ZXJzICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX1NpbXBsZSA9IFwibGluZWFyXCIgfCBcImVhc2VcIiB8IFwiZWFzZS1pblwiIHwgXCJlYXNlLW91dFwiIHwgXCJlYXNlLWluLW91dFwiIHwgXCJzdGVwLXN0YXJ0XCIgfCBcInN0ZXAtZW5kXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc3RlcCBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX1N0ZXBQb3NpdGlvbiA9IFwianVtcC1zdGFydFwiIHwgXCJqdW1wLWVuZFwiIHwgXCJqdW1wLW5vbmVcIiB8IFwianVtcC1ib3RoXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHN0ZXAgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbl9TdGVwID0gbnVtYmVyIHwgW0V4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1N0ZXBQb3NpdGlvbj4/XTtcclxuXHJcbi8qKiBUeXBlIGZvciBCZXppZXIgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbl9CZXppZXIgPSBbRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPl07XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb25fU2luZ2xlID0gVGltaW5nRnVuY3Rpb25fU2ltcGxlIHwgVGltaW5nRnVuY3Rpb25fU3RlcCB8IFRpbWluZ0Z1bmN0aW9uX0JlemllcjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2ZhY2UtdmlzaWJpbGl0eSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZmFjZVZpc2liaWxpdHlNb2RlX1N0eWxlVHlwZSA9IFwidmlzaWJsZVwiIHwgXCJoaWRkZW5cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRfU2luZ2xlID0gc3RyaW5nIHwgQ3NzQ29sb3IgfFxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgICAgIGltYWdlPzogRXh0ZW5kZWQ8Q3NzSW1hZ2UgfCBzdHJpbmc+LFxyXG4gICAgICAgIHBvc2l0aW9uPzogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+LFxyXG4gICAgICAgIHNpemU/OiBFeHRlbmRlZDxCYWNrZ3JvdW5kU2l6ZV9TaW5nbGU+LFxyXG4gICAgICAgIHJlcGVhdD86IEV4dGVuZGVkPEJhY2tncm91bmRSZXBlYXRfU2luZ2xlPixcclxuICAgICAgICBhdHRhY2htZW50PzogRXh0ZW5kZWQ8QmFja2dyb3VuZEF0dGFjaG1lbnRfU2luZ2xlPixcclxuICAgICAgICBvcmlnaW4/OiBFeHRlbmRlZDxCYWNrZ3JvdW5kT3JpZ2luX1NpbmdsZT4sXHJcbiAgICAgICAgY2xpcD86IEV4dGVuZGVkPEJhY2tncm91bmRDbGlwX1NpbmdsZT4sXHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgYXR0YWNobWVudCAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQXR0YWNobWVudF9TaW5nbGUgPSBcInNjcm9sbFwiIHwgXCJmaXhlZFwiIHwgXCJsb2NhbFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtYXR0YWNobWVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQXR0YWNobWVudF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZEF0dGFjaG1lbnRfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIGJsZW5kIG1vZGUgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEJsZW5kTW9kZV9TaW5nbGUgPSBcIm5vcm1hbFwiIHwgXCJtdWx0aXBseVwiIHwgXCJzY3JlZW5cIiB8IFwib3ZlcmxheVwiIHwgXCJkYXJrZW5cIiB8XHJcbiAgICBcImxpZ2h0ZW5cIiB8IFwiY29sb3ItZG9kZ2VcIiB8IFwiY29sb3ItYnVyblwiIHwgXCJoYXJkLWxpZ2h0XCIgfCBcInNvZnQtbGlnaHRcIiB8IFwiZGlmZmVyZW5jZVwiIHxcclxuICAgIFwiZXhjbHVzaW9uXCIgfCBcImh1ZVwiIHwgXCJzYXR1cmF0aW9uXCIgfCBcImNvbG9yXCIgfCBcImx1bWlub3NpdHlcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLWJsZW5kLW1vZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEJsZW5kTW9kZV9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZEJsZW5kTW9kZV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgY2xpcCAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQ2xpcF9TaW5nbGUgPSBcImJvcmRlci1ib3hcIiB8IFwicGFkZGluZy1ib3hcIiB8IFwiY29udGVudC1ib3hcIiB8IFwidGV4dFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtY2xpcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQ2xpcF9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZENsaXBfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtaW1hZ2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZEltYWdlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgT25lT3JNYW55PENzc0ltYWdlIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIG9yaWdpbiAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kT3JpZ2luX1NpbmdsZSA9IFwiYm9yZGVyLWJveFwiIHwgXCJwYWRkaW5nLWJveFwiIHwgXCJjb250ZW50LWJveFwiIHwgXCJ0ZXh0XCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1vcmlnaW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZE9yaWdpbl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QmFja2dyb3VuZE9yaWdpbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUG9zaXRpb25fU3R5bGVUeXBlID0gTXVsdGlDc3NQb3NpdGlvbjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIHJlcGVhdCAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUmVwZWF0S2V5d29yZF9TaW5nbGUgPSBcInJlcGVhdFwiIHwgXCJzcGFjZVwiIHwgXCJyb3VuZFwiIHwgXCJuby1yZXBlYXRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCByZXBlYXQgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFJlcGVhdF9TaW5nbGUgPSBcInJlcGVhdC14XCIgfCBcInJlcGVhdC15XCIgfCBPbmVPclBhaXI8QmFja2dyb3VuZFJlcGVhdEtleXdvcmRfU2luZ2xlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLXJlcGVhdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUmVwZWF0X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kUmVwZWF0X1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kIHNpemUgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFNpemVfU2luZ2xlID0gXCJjb3ZlclwiIHwgXCJjb250YWluXCIgfCBPbmVPclBhaXI8Q3NzTGVuZ3RoIHwgXCJhdXRvXCI+O1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGJhY2tncm91bmQtc2l6ZSBzdHlsZSBwcm9wZXJ0eS4gVGhlIGJhY2tncm91bmQtc2l6ZSBzdHlsZSBjYW4gc3BlY2lmeSBvbmUgb3IgbW9yZVxyXG4gKiBjb21tYS1zZXBhcmF0ZWQgc2l6ZXMsIHdoZXJlIGVhY2ggc2l6ZSBjYW4gYmUgYSBrZXl3b3JkLCBhIGxlbmd0aCBvciB0d28gbGVuZ3Rocy4gV2UgbW9kZWxcclxuICogdGhpcyBzdHJ1Y3R1cmUgdGhlIGZvbGxvd2luZyB3YXk6XHJcbiAqIC0gaWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGEgbnVtYmVyLCB0aGF0J3MgdGhlIG9ubHkgdmFsdWU7XHJcbiAqIC0gaWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVuIGl0IGlzIGEgbGlzdCBvZiBzZXZlcmFsIHNpemVzLiBFYWNoIGVsZW1lbnQgaW4gdGhpcyBhcnJheSBpc1xyXG4gKiAgIGVpdGhlciBhIGtleXdvcmQgb3IgYSBsZW5ndGggb3IgYW4gYXJyYXkgb2YgdHdvIGVsZW1lbnRzLlxyXG4gKiBUaHVzIFsxMDAsMjAwXSB3aWxsIGJlIGludGVycHJldGVkIGFzIFwiMTAwcHgsIDIwMHB4XCIgYW5kIG5vdCBcIjEwMHB4IDIwMHB4XCI7IHRoYXQgaXMsIGl0IHdpbGxcclxuICogZGVmaW5lIHR3byBzaXplcyBlYWNoIHdpdGggYSB3aWR0aCBpbnN0ZWFkIG9mIG9uZSBzaXplIHdpdGggYm90aCB3aWR0aCBhbmQgaGVpZ2h0LiBJZiB5b3UgbmVlZFxyXG4gKiB0byBzcGVjaWZ5IGJvdGggd2lkdGggYW5kIGhlaWdodCB5b3UgbXVzdCB1c2UgYXJyYXkgd2l0aGluIGFycmF5IC0gZXZlbiBmb3IgYSBzaW5nbGUgc2l6ZTpcclxuICogW1sxMDAsMjAwXV0gd2xsIGJlIGludGVycHJldGVkIGFzIFwiMTAwcHggMjAwcHhcIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRTaXplX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kU2l6ZV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFzZWxpbmUtc2hpZnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFzZWxpbmVTaGlmdF9TdHlsZVR5cGUgPSBcInN1YlwiIHwgXCJzdXBlclwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWNvbGxhcHNlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckNvbGFwc2VfU3R5bGVUeXBlID0gXCJjb2xsYXBzZVwiIHwgXCJzZXBhcmF0ZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWNvbG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckNvbG9yX1N0eWxlVHlwZSA9IE9uZU9yQm94PENzc0NvbG9yPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZSBzdHlsZSBwcm9wZXJ0eSBleHByZXNzZWQgYXMgYW4gb2JqZWN0LiAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZV9PYmplY3QgPVxyXG4gICAge1xyXG4gICAgICAgIHNvdXJjZTogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VTb3VyY2VfU3R5bGVUeXBlPixcclxuICAgICAgICBzbGljZT86IEV4dGVuZGVkPEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlPixcclxuICAgICAgICB3aWR0aD86IEV4dGVuZGVkPEJvcmRlckltYWdlV2lkdGhfU3R5bGVUeXBlPixcclxuICAgICAgICBvdXRzZXQ/OiBFeHRlbmRlZDxCb3JkZXJJbWFnZU91dHNldF9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHJlcGVhdD86IEV4dGVuZGVkPEJvcmRlckltYWdlUmVwZWF0X1N0eWxlVHlwZT4sXHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZSBzdHlsZSBwcm9wZXJ0eS4gKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VfU3R5bGVUeXBlID0gc3RyaW5nIHwgQ3NzSW1hZ2UgfCBCb3JkZXJJbWFnZV9PYmplY3Q7XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYm9yZGVyLWltYWdlLW91dHNldCBzdHlsZSBwcm9wZXJ0eS4gSXQgaXMgQ3NzTnVtYmVyIGFuZCBub3QgQ3NzTGVuZ3RoIGJlY2F1c2VcclxuICogYm9yZGVyLWltYWdlLW91dHNldCBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgdW5pdGxlc3MgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VPdXRzZXRfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzTnVtYmVyIHwgc3RyaW5nPjtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2UtcmVwZWF0IGtleXdvcmRzICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlUmVwZWF0X0tleXdvcmQgPSBcInN0cmV0Y2hcIiB8IFwicmVwZWF0XCIgfCBcInJvdW5kXCIgfCBcInNwYWNlXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXJlcGVhdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVJlcGVhdF9TdHlsZVR5cGUgPSBPbmVPclBhaXI8Qm9yZGVySW1hZ2VSZXBlYXRfS2V5d29yZD47XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXNsaWNlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlU2xpY2VfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzTnVtYmVyIHwgc3RyaW5nPiB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgdHJ1ZV0gfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIHRydWVdIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCB0cnVlXSB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgdHJ1ZV07XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXNvdXJjZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVNvdXJjZV9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NJbWFnZSB8IHN0cmluZz47XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXdpZHRoIHN0eWxlIHByb3BlcnR5LiBJdCBpcyBDc3NOdW1iZXIgYW5kIG5vdCBDc3NMZW5ndGggYmVjYXVzZVxyXG4gKiBib3JkZXItaW1hZ2Utd2lkdGggY2FuIGJlIHNwZWNpZmllZCBhcyBhIHVuaXRsZXNzIG51bWJlci5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlV2lkdGhfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzTnVtYmVyIHwgXCJhdXRvXCIgfCBzdHJpbmc+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLXJhZGl1cyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlID0gT25lT3JQYWlyPENzc0xlbmd0aEJveD47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItc3BhY2luZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJTcGFjaW5nX1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxDc3NMZW5ndGg+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJvcmRlciBzaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclN0eWxlX0tleXdvcmQgPSBcIm5vbmVcIiB8IFwiaGlkZGVuXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIiB8IFwic29saWRcIiB8IFwiZG91YmxlXCIgfFxyXG4gICAgXCJncm9vdmVcIiB8IFwicmlkZ2VcIiB8IFwiaW5zZXRcIiB8IFwib3V0c2V0XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyU3R5bGVfU3R5bGVUeXBlID0gT25lT3JCb3g8Qm9yZGVyU3R5bGVfS2V5d29yZD47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyX1N0eWxlVHlwZSA9IENzc0xlbmd0aCB8IEJvcmRlclN0eWxlX0tleXdvcmQgfCBDc3NDb2xvciB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPj8sIEV4dGVuZGVkPEJvcmRlclN0eWxlX0tleXdvcmQ+PywgRXh0ZW5kZWQ8Q3NzQ29sb3I+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXIgc2lkZSB3aWR0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJXaWR0aF9TaW5nbGUgPSBcInRoaW5cIiB8IFwibWVkaXVtXCIgfCBcInRoaWNrXCIgfCBDc3NMZW5ndGg7XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLXdpZHRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoX1N0eWxlVHlwZSA9IE9uZU9yQm94PEJvcmRlcldpZHRoX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYm94IHNoYWRvdy4gKi9cclxuZXhwb3J0IHR5cGUgQm94U2hhZG93X1NpbmdsZSA9IFwibm9uZVwiIHwgc3RyaW5nIHxcclxuICAgIHtcclxuICAgICAgICB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgYmx1cj86IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgc3ByZWFkPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgICAgICBpbnNldD86IEV4dGVuZGVkPGJvb2xlYW4+XHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJveCBzaGFkb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm94U2hhZG93X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCb3hTaGFkb3dfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJveC1zaXppbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm94U2l6aW5nX1N0eWxlVHlwZSA9IFwiY29udGVudC1ib3hcIiB8IFwiYm9yZGVyLWJveFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYnJlYWstYWZ0ZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQnJlYWtBZnRlcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiYXZvaWRcIiB8IFwiYWx3YXlzXCIgfCBcImFsbFwiIHwgXCJhdm9pZC1wYWdlXCIgfCBcInBhZ2VcIiB8XHJcbiAgICBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwicmVjdG9cIiB8IFwidmVyc29cIiB8IFwiYXZvaWQtY29sdW1uXCIgfCBcImNvbHVtblwiIHxcclxuICAgIFwiYXZvaWQtcmVnaW9uXCIgfCBcInJlZ2lvblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYnJlYWstYmVmb3JlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJyZWFrQmVmb3JlX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJhdm9pZFwiIHwgXCJhbHdheXNcIiB8IFwiYWxsXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwicGFnZVwiIHxcclxuICAgIFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJyZWN0b1wiIHwgXCJ2ZXJzb1wiIHwgXCJhdm9pZC1jb2x1bW5cIiB8IFwiY29sdW1uXCIgfFxyXG4gICAgXCJhdm9pZC1yZWdpb25cIiB8IFwicmVnaW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBicmVhay1pbnNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQnJlYWtJbnNpZGVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImF2b2lkXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwiYXZvaWQtY29sdW1uXCIgfCBcImF2b2lkLXJlZ2lvblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2FwdGlvbi1zaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENhcHRpb25TaWRlX1N0eWxlVHlwZSA9IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJibG9jay1zdGFydFwiIHwgXCJibG9jay1lbmRcIiB8IFwiaW5saW5lLXN0YXJ0XCIgfCBcImlubGluZS1lbmRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNhcmV0LWNvbG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENhcmV0Q29sb3JfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBDc3NDb2xvcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNsZWFyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENsZWFyX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImJvdGhcIiB8IFwiaW5saW5lLXN0YXJ0XCIgfCBcImlubGluZS1lbmRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNsaXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xpcF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc0xlbmd0aEJveDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgdXNlZCBmb3Igc2V2ZXJhbCBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdlb21ldHJ5Qm94S2V5d29yZCA9IFwibWFyZ2luLWJveFwiIHwgXCJib3JkZXItYm94XCIgfCBcInBhZGRpbmctYm94XCIgfCBcImNvbnRlbnQtYm94XCIgfFxyXG4gICAgXCJmaWxsLWJveFwiIHwgXCJzdHJva2UtYm94XCIgfCBcInZpZXctYm94XCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBleHRlbnQgZm9yIHRoZSBgcmFkaWFsLWdyYWRpZW50KClgIG9yIGByYXkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW50S2V5d29yZCA9IFwiY2xvc2VzdC1jb3JuZXJcIiB8IFwiY2xvc2VzdC1zaWRlXCIgfCBcImZhcnRoZXN0LWNvcm5lclwiIHwgXCJmYXJ0aGVzdC1zaWRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjbGlwLXBhdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xpcFBhdGhfU3R5bGVUeXBlID0gXCJub25lXCIgfCBJVXJsUHJveHkgfCBCYXNpY1NoYXBlIHwgR2VvbWV0cnlCb3hLZXl3b3JkIHxcclxuICAgIFtHZW9tZXRyeUJveEtleXdvcmQsIEJhc2ljU2hhcGVdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2xpcC1ydWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENsaXBSdWxlX1N0eWxlVHlwZSA9IFwibm9uemVyb1wiIHwgXCJldmVub2RkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2xvci1pbnRlcnBvbGF0aW9uIGFuZCBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBDb2xvckludGVycG9sYXRpb25fU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInNSR0JcIiB8IFwibGluZWFyUkdCXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tY291bnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uQ291bnRfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBudW1iZXI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tZmlsbCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5GaWxsX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJiYWxhbmNlXCIgfCBcImJhbGFuY2UtYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tZ2FwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbHVtbkdhcF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sdW1uLXNwYW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uU3Bhbl9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBjb2x1bW5zIHN0eWxlIHByb3BlcnR5LiBUaGUgdmFsdWUgY2FuIGJlIHByb3ZpZGVkIGluIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1zIGFuZFxyXG4gKiBhbmQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gc3RyaW5nIGFzIGZvbGxvd3M6XHJcbiAqIFxyXG4gKiAtIHN0cmluZzogd2lsbCBiZSB0cmVhdGVkIGFzIGlzLlxyXG4gKiAtIG51bWJlcjogd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSB1bml0bGVzcyBudW1iZXIgLSBjb3VudCBvZiBjb2x1bW5zLlxyXG4gKiAtIElMZW5ndGhQcm94eSAoZS5nLiBweCg4KSk6IGNvbnZlcnRlZCB0byBhIG51bWJlciB3aXRoIHRoZSBwcm9wZXIgbGVuZ3RoIHVuaXRzLlxyXG4gKiAtIHR3byB2YXJpYW50cyBvZiB0d28gZWxlbWVudCBhcnJheXM6IG9uZSBvZiB0aGUgZWxlbWVudHMgd2lsbCBiZSB0cmVhdGVkIGFzIGEgbnVtYmVyIG9mIGNvbHVtbnNcclxuICogICB3aGlsZSBhbm90aGVyIGFzIHRoZSBjb2x1bW4gd2lkdGguXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5zX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzTnVtYmVyIHwgQ3NzTGVuZ3RoIHxcclxuICAgIFtcImF1dG9cIiB8IEV4dGVuZGVkPENzc051bWJlcj4sIFwiYXV0b1wiIHwgRXhjbHVkZTxFeHRlbmRlZDxDc3NMZW5ndGg+LG51bWJlcj5dIHxcclxuICAgIFtcImF1dG9cIiB8IEV4Y2x1ZGU8RXh0ZW5kZWQ8Q3NzTGVuZ3RoPixudW1iZXI+LCBcImF1dG9cIiB8IEV4dGVuZGVkPENzc051bWJlcj5dO1xyXG4vLyBOb3RlIHRoYXQgbm8gc3BlY2lhbCBjb3ZlcnNpb24gZnVuY3Rpb24gaXMgcmVxdWlyZWQgZm9yIHRoaXMgcHJvcGVydHkgYmVjYXVzZSB0aGUgbnVtYmVyIHR5cGUgd2lsbFxyXG4vLyBhbHdheXMgYmUgY29udmVydGVkIHRvIGEgdW5pdGxlc3MgbnVtYmVyXHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb250YWluIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbnRhaW5fU3R5bGVUeXBlID0gXCJub25lXCIgfCBcInN0cmljdFwiIHwgXCJjb250ZW50XCIgfCBcInNpemVcIiB8IFwibGF5b3V0XCIgfCBcInN0eWxlXCIgfCBcInBhaW50XCIgfFxyXG4gICAgRXh0ZW5kZWQ8XCJzaXplXCIgfCBcImxheW91dFwiIHwgXCJzdHlsZVwiIHwgXCJwYWludFwiPltdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb250ZW50X1N0eWxlVHlwZSA9IHN0cmluZyB8IFwibm9uZVwiIHwgXCJub3JtYWxcIiB8IE9uZU9yTWFueTxDc3NJbWFnZSB8XHJcbiAgICBcIm9wZW4tcXVvdGVcIiB8IFwiY2xvc2UtcXVvdGVcIiB8IFwibm8tb3Blbi1xdW90ZVwiIHwgXCJuby1jbG9zZS1xdW90ZVwiPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvdW50ZXItaW5jcmVtZW50LCBjb3VudGVyLXJlc2V0IGFuZCBjb3VudGVyLXNldCBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIENvdW50ZXJfU3R5bGVUeXBlID0gXCJub25lXCIgfCBPbmVPck1hbnk8SUNvdW50ZXJSdWxlIHwgc3RyaW5nIHwgW0lDb3VudGVyUnVsZSB8IHN0cmluZywgRXh0ZW5kZWQ8bnVtYmVyPl0+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY3Vyc29yIHByZS1kZWZpbmVkIG5hbWVzICovXHJcbmV4cG9ydCB0eXBlIEN1cnNvcl9LZXl3b3JkID0gXCJhdXRvXCIgfCBcImRlZmF1bHRcIiB8IFwibm9uZVwiIHwgXCJjb250ZXh0LW1lbnVcIiB8IFwiaGVscFwiIHwgXCJwb2ludGVyXCIgfCBcInByb2dyZXNzXCIgfFxyXG4gICAgXCJ3YWl0XCIgfCBcImNlbGxcIiB8IFwiY3Jvc3NoYWlyXCIgfCBcInRleHRcIiB8IFwidmVydGljYWwtdGV4dFwiIHwgXCJhbGlhc1wiIHwgXCJjb3B5XCIgfCBcIm1vdmVcIiB8XHJcbiAgICBcIm5vLWRyb3BcIiB8IFwibm90LWFsbG93ZWRcIiB8IFwiZS1yZXNpemVcIiB8IFwibi1yZXNpemVcIiB8IFwibmUtcmVzaXplXCIgfCBcIm53LXJlc2l6ZVwiIHxcclxuICAgIFwicy1yZXNpemVcIiB8IFwic2UtcmVzaXplXCIgfCBcInN3LXJlc2l6ZVwiIHwgXCJ3LXJlc2l6ZVwiIHwgXCJldy1yZXNpemVcIiB8IFwibnMtcmVzaXplXCIgfFxyXG4gICAgXCJuZXN3LXJlc2l6ZVwiIHwgXCJud3NlLXJlc2l6ZVwiIHwgXCJjb2wtcmVzaXplXCIgfCBcInJvdy1yZXNpemVcIiB8IFwiYWxsLXNjcm9sbFwiIHwgXCJ6b29tLWluXCIgfFxyXG4gICAgXCJ6b29tLW91dFwiIHwgXCJncmFiXCIgfCBcImdyYWJiaW5nXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgY3Vyc29yIHN0eWxlIHByb3BlcnR5IHNpbmdsZSB2YWx1ZSAqL1xyXG5leHBvcnQgdHlwZSBDdXJzb3JfU2luZ2xlID0gQ3Vyc29yX0tleXdvcmQgfCBJVXJsUHJveHkgfCBbSVVybFByb3h5LCBFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NOdW1iZXI+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBjdXJzb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ3Vyc29yX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxDdXJzb3JfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGRpcmVjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBEaXJlY3Rpb25fU3R5bGVUeXBlID0gXCJsdHJcIiB8IFwicnRsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBkaXNwbGF5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIERpc3BsYXlfU3R5bGVUeXBlID0gXCJibG9ja1wiIHwgXCJpbmxpbmVcIiB8IFwicnVuLWluXCIgfCBcImNvbnRlbnRzXCIgfCBcIm5vbmVcIiB8XHJcbiAgICBcImlubGluZS1ibG9ja1wiIHwgXCJpbmxpbmUtbGlzdC1pdGVtXCIgfCBcImlubGluZS10YWJsZVwiIHwgXCJpbmxpbmUtZmxleFwiIHwgXCJpbmxpbmUtZ3JpZFwiIHxcclxuICAgIFwiZmxvd1wiIHwgXCJmbG93LXJvb3RcIiB8IFwidGFibGVcIiB8IFwiZmxleFwiIHwgXCJncmlkXCIgfCBcInJ1YnlcIiB8XHJcbiAgICBcInRhYmxlLXJvdy1ncm91cFwiIHwgXCJ0YWJsZS1oZWFkZXItZ3JvdXBcIiB8IFwidGFibGUtZm9vdGVyLWdyb3VwXCIgfCBcInRhYmxlLXJvd1wiIHwgXCJ0YWJsZS1jZWxsXCIgfFxyXG4gICAgICAgIFwidGFibGUtY29sdW1uLWdyb3VwXCIgfCBcInRhYmxlLWNvbHVtblwiIHwgXCJ0YWJsZS1jYXB0aW9uXCIgfCBcInJ1YnktYmFzZVwiIHwgXCJydWJ5LXRleHRcIiB8XHJcbiAgICAgICAgXCJydWJ5LWJhc2UtY29udGFpbmVyXCIgfCBcInJ1YnktdGV4dC1jb250YWluZXJcIiB8XHJcbiAgICBcImxpc3QtaXRlbVwiIHwgXCJsaXN0LWl0ZW0gYmxvY2tcIiB8IFwibGlzdC1pdGVtIGlubGluZVwiIHwgXCJsaXN0LWl0ZW0gZmxvd1wiIHwgXCJsaXN0LWl0ZW0gZmxvdy1yb290XCIgfFxyXG4gICAgICAgIFwibGlzdC1pdGVtIGJsb2NrIGZsb3dcIiB8IFwibGlzdC1pdGVtIGJsb2NrIGZsb3ctcm9vdFwiIHwgXCJmbG93IGxpc3QtaXRlbSBibG9ja1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuLyoqIFR5cGUgZm9yIGRvbWluYW50LWJhc2VsaW5lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIERvbWluYW50QmFzZWxpbmVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInRleHQtYm90dG9tXCIgfCBcImFscGhhYmV0aWNcIiB8IFwiaWRlb2dyYXBoaWNcIiB8IFwibWlkZGxlXCIgfFxyXG4gICAgXCJjZW50cmFsXCIgfCBcIm1hdGhlbWF0aWNhbFwiIHwgXCJoYW5naW5nXCIgfCBcInRleHQtdG9wXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBlbXB0eS1jZWxscyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBFbXB0eUNlbGxzX1N0eWxlVHlwZSA9IFwic2hvd1wiIHwgXCJoaWRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmaWxsLXJ1bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmlsbFJ1bGVfU3R5bGVUeXBlID0gXCJub256ZXJvXCIgfCBcImV2ZW5vZGRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZpbHRlciBhbmQgYmFja2Ryb3AtZmlsdGVyIHN0eWxlIHNpbmdsZSB2YWx1ZSAqL1xyXG5leHBvcnQgdHlwZSBGaWx0ZXJfU2luZ2xlID0gc3RyaW5nIHwgSVVybFByb3h5IHwgSUZpbHRlclByb3h5O1xyXG5cclxuLyoqIFR5cGUgZm9yIGZpbHRlciBhbmQgYmFja2Ryb3AtZmlsdGVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZpbHRlcl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8RmlsdGVyX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhfU3R5bGVUeXBlID0gRmxleEJhc2lzX1N0eWxlVHlwZSB8IFtFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+XSB8XHJcbiAgICBbRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8RmxleEJhc2lzX1N0eWxlVHlwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleC1iYXNpcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4QmFzaXNfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImNvbnRlbnRcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtZGlyZWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhEaXJlY3Rpb25fU3R5bGVUeXBlID0gXCJyb3dcIiB8IFwicm93LXJldmVyc2VcIiB8IFwiY29sdW1uXCIgfCBcImNvbHVtbi1yZXZlcnNlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LWZsb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleEZsb3dfU3R5bGVUeXBlID0gRmxleERpcmVjdGlvbl9TdHlsZVR5cGUgfCBGbGV4V3JhcF9TdHlsZVR5cGUgfFxyXG4gICAgW0V4dGVuZGVkPEZsZXhEaXJlY3Rpb25fU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8RmxleFdyYXBfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LXdyYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleFdyYXBfU3R5bGVUeXBlID0gXCJub3dyYXBcIiB8IFwid3JhcFwiIHwgXCJ3cmFwLXJldmVyc2VcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsb2F0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsb2F0X1N0eWxlVHlwZSA9IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJub25lXCIgfCBcImlubGluZS1zdGFydFwiIHwgXCJpbmxpbmUtZW5kXCI7XHJcblxyXG5cclxuXHJcbi8qKiBLZXl3b3JkcyBmb3IgZm9udCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250X1N5c3RlbUtleXdvcmQgPSBcImNhcHRpb25cIiB8IFwiaWNvblwiIHwgXCJtZW51XCIgfCBcIm1lc3NhZ2UtYm94XCIgfCBcInNtYWxsLWNhcHRpb25cIiB8IFwic3RhdHVzLWJhclwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udF9TdHlsZVR5cGUgPSBzdHJpbmcgfCBGb250X1N5c3RlbUtleXdvcmQgfFxyXG4gICAge1xyXG4gICAgICAgIHNpemU6IEV4dGVuZGVkPENzc0xlbmd0aD47XHJcbiAgICAgICAgZmFtaWx5OiBFeHRlbmRlZDxzdHJpbmc+O1xyXG4gICAgICAgIHN0eWxlPzogRXh0ZW5kZWQ8Rm9udFN0eWxlX1N0eWxlVHlwZT47XHJcbiAgICAgICAgdmFyaWFudD86IEV4dGVuZGVkPHN0cmluZz47XHJcbiAgICAgICAgd2VpZ2h0PzogRXh0ZW5kZWQ8Rm9udFdlaWdodF9TdHlsZVR5cGU+O1xyXG4gICAgICAgIHN0cmV0Y2g/OiBFeHRlbmRlZDxFeGNsdWRlPEZvbnRTdHJldGNoX1NpbmdsZSxudW1iZXI+PjtcclxuICAgICAgICBsaW5lSGVpZ2h0PzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPlxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQta2VybmluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250S2VybmluZ19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9ybWFsXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtb3B0aWNhbC1zaXppbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udE9wdGljYWxTaXppbmdfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtc2l6ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250U2l6ZV9TdHlsZVR5cGUgPSBcInh4LXNtYWxsXCIgfCBcIngtc21hbGxcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCIgfFxyXG4gICAgXCJ4LWxhcmdlXCIgfCBcInh4LWxhcmdlXCIgfCBcInh4eC1sYXJnZVwiIHwgXCJsYXJnZXJcIiB8IFwic21hbGxlclwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1zdHJldGNoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRTdHJldGNoX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInVsdHJhLWNvbmRlbnNlZFwiIHwgXCJleHRyYS1jb25kZW5zZWRcIiB8IFwiY29uZGVuc2VkXCIgfFxyXG5cInNlbWktY29uZGVuc2VkXCIgfCBcInNlbWktZXhwYW5kZWRcIiB8IFwiZXhwYW5kZWRcIiB8IFwiZXh0cmEtZXhwYW5kZWRcIiB8IFwidWx0cmEtZXhwYW5kZWRcIiB8IENzc051bWJlcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFN0eWxlX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcIml0YWxpY1wiIHwgXCJvYmxpcXVlXCIgfCBDc3NBbmdsZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtc3ludGhlc2lzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRTeW50aGVzaXNfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcIndlaWdodFwiIHwgXCJzdHlsZVwiIHwgXCJ3ZWlnaHQgc3R5bGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtdmFyaWFudC1jYXBzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRWYXJpYW50Q2Fwc19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzbWFsbC1jYXBzXCIgfCBcImFsbC1zbWFsbC1jYXBzXCIgfFxyXG4gICAgXCJwZXRpdGUtY2Fwc1wiIHwgXCJhbGwtcGV0aXRlLWNhcHNcIiB8IFwidW5pY2FzZVwiIHwgXCJ0aXRsaW5nLWNhcHNcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtdmFyaWFudC1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250VmFyaWFudFBvc2l0aW9uX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInN1YlwiIHwgXCJzdXBlclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC13ZWlnaHQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFdlaWdodF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJib2xkXCIgfCBcImJvbGRlclwiIHwgXCJsaWdodGVyXCIgfCBDc3NOdW1iZXI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBnYXAgb3IgZ3JpZC1nYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgR2FwX1N0eWxlVHlwZSA9IFJvd0dhcF9TdHlsZVR5cGUgfCBbUm93R2FwX1N0eWxlVHlwZSwgQ29sdW1uR2FwX1N0eWxlVHlwZV07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSB0ZW1wbGF0ZSBlbGVtZW50IGRlZmluaW5nIHRyYWNrIHNpemUgaW4gZ3JpZCB0ZW1wbGF0ZSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVHJhY2tTaXplID0gQ3NzTGVuZ3RoIHwgXCJtaW4tY29udGVudFwiIHwgXCJtYXgtY29udGVudFwiIHwgXCJhdXRvXCIgfFxyXG4gICAgSU1pbk1heFByb3h5IHwgSUZpdENvbnRlbnRQcm94eSB8IElSZXBlYXRQcm94eTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtYXV0by1jb2x1bW5zIGFuZCBncmlkLWF1dG8tcm93cyBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdyaWRBdXRvQXhpc19TdHlsZVR5cGUgPSBPbmVPck1hbnk8R3JpZFRyYWNrU2l6ZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLWF1dG8tZmxvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXV0b0Zsb3dfU3R5bGVUeXBlID0gXCJyb3dcIiB8IFwiY29sdW1uXCIgfCBcImRlbnNlXCIgfCBcInJvdyBkZW5zZVwiIHwgXCJjb2x1bW4gZGVuc2VcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNwZWNpZnlpbmcgZWl0aGVyIG51bWJlciBvZiBncmlkIGxpbmVzIG9yIG5hbWUgb2YgZ3JpZCBsaW5lIG9yIGFyZWEgKi9cclxuZXhwb3J0IHR5cGUgR3JpZExpbmVDb3VudE9yTmFtZSA9IENzc051bWJlciB8IElHcmlkQXJlYVJ1bGUgfCBJR3JpZExpbmVSdWxlIHwgc3RyaW5nO1xyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtY29sdW1uLXN0YXJ0L2VuZCBhbmQgZ3JpZC1yb3ctc3RhcnQvZW5kIHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgR3JpZEF4aXNTaWRlX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgR3JpZExpbmVDb3VudE9yTmFtZSB8IElTcGFuUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLWNvbHVtbiBhbmQgZ3JpZC1yb3cgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXhpc19TdHlsZVR5cGUgPSBPbmVPclBhaXI8R3JpZEF4aXNTaWRlX1N0eWxlVHlwZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLWFyZWEgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgR3JpZEFyZWFfU3R5bGVUeXBlID0gT25lT3JCb3g8R3JpZEF4aXNTaWRlX1N0eWxlVHlwZT47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBkZWZpbmluZyBhIHNpbmdsZSBncmlkIGFyZWEgcG9zaXRpb24uIFRoZSBudW1iZXJzIGFyZSAxLWJhc2VkIGluZGljZXMgb2YgdGhlIGxpbmVzIGluXHJcbiAqIHRoZSBmb2xsb3dpbmcgc2VxdWVuY2U6IGJsb2NrIHN0YXJ0LCBpbmxpbmUgc3RhcnQsIGJsb2NrIGVuZCwgaW5saW5lIGVuZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbiA9IFtJR3JpZEFyZWFSdWxlIHwgRXh0ZW5kZWQ8c3RyaW5nPixcclxuICAgIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC10ZW1wbGF0ZS1hcmVhcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IE9uZU9yTWFueTxJUXVvdGVkUHJveHk+IHxcclxuICAgIEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbltdO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYSBzaW5nbGUgdGVtcGxhdGUgZWxlbWVudCBkZWZpbmluZyBuYW1lIG9yIG5hbWVzIGZvciBhIGdyaWQgbGluZSBpbiBncmlkIHRlbXBsYXRlLlxyXG4gKiBUaGlzIGlzIGFsd2F5cyBhbiBhcnJheSAtIGV2ZW4gaWYgYSBzaW5nbGUgbmFtZSBpcyBnaXZlbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUcmFja0xpbmUgPSAoSUdyaWRMaW5lUnVsZSB8IEV4dGVuZGVkPHN0cmluZz4pW107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgdHJhY2sgZWxlbWVudCBvZiBncmlkIHRlbXBsYXRlIGF4aXMgKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRyYWNrID0gR3JpZFRyYWNrU2l6ZSB8IEdyaWRUcmFja0xpbmU7XHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zIGFuZCBncmlkLXRlbXBsYXRlLXJvd3Mgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgT25lT3JNYW55PEdyaWRUcmFjaz4gfCBcInN1YmdyaWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGh5cGhlbnMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSHlwaGVuc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwibWFudWFsXCIgfCBcImF1dG9cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGltYWdlLXJlbmRlcmluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBJbWFnZVJlbmRlcmluZ19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiY3Jpc3AtZWRnZXNcIiB8IFwicGl4ZWxhdGVkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBpc29sYXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSXNvbGF0aW9uX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJpc29sYXRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBqdXN0aWZ5LWNvbnRlbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSnVzdGlmeUNvbnRlbnRfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3BhY2UtYmV0d2VlblwiIHwgXCJzcGFjZS1hcm91bmRcIiB8IFwic3BhY2UtZXZlbmx5XCIgfCBcInN0cmV0Y2hcIiB8XHJcbiAgICBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfFxyXG4gICAgXCJzYWZlIGNlbnRlclwiIHwgXCJzYWZlIHN0YXJ0XCIgfCBcInNhZmUgZW5kXCIgfCBcInNhZmUgZmxleC1zdGFydFwiIHwgXCJzYWZlIGZsZXgtZW5kXCIgfCBcInNhZmUgbGVmdFwiIHwgXCJzYWZlIHJpZ2h0XCIgfFxyXG4gICAgXCJ1bnNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBzdGFydFwiIHwgXCJ1bnNhZmUgZW5kXCIgfCBcInVuc2FmZSBmbGV4LXN0YXJ0XCIgfCBcInVuc2FmZSBmbGV4LWVuZFwiIHwgXCJ1bnNhZmUgbGVmdFwiIHwgXCJ1bnNhZmUgcmlnaHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGp1c3RpZnktaXRlbXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSnVzdGlmeUl0ZW1zX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHxcclxuICAgIFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJzZWxmLXN0YXJ0XCIgfCBcInNlbGYtZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHxcclxuICAgIFwic2FmZSBjZW50ZXJcIiB8IFwic2FmZSBzdGFydFwiIHwgXCJzYWZlIGVuZFwiIHwgXCJzYWZlIHNlbGYtc3RhcnRcIiB8IFwic2FmZSBzZWxmLWVuZFwiIHwgXCJzYWZlIGZsZXgtc3RhcnRcIiB8IFwic2FmZSBmbGV4LWVuZFwiIHwgXCJzYWZlIGxlZnRcIiB8IFwic2FmZSByaWdodFwiIHxcclxuICAgIFwidW5zYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgc3RhcnRcIiB8IFwidW5zYWZlIGVuZFwiIHwgXCJ1bnNhZmUgc2VsZi1zdGFydFwiIHwgXCJ1bnNhZmUgc2VsZi1lbmRcIiB8IFwidW5zYWZlIGZsZXgtc3RhcnRcIiB8IFwidW5zYWZlIGZsZXgtZW5kXCIgfCBcInVuc2FmZSBsZWZ0XCIgfCBcInVuc2FmZSByaWdodFwiIHxcclxuICAgIFwibGVnYWN5XCIgfCBcImxlZ2FjeSBsZWZ0XCIgfCBcImxlZ2FjeSByaWdodFwiIHwgXCJsZWdhY3kgY2VudGVyXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBqdXN0aWZ5LXNlbGYgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgSnVzdGlmeVNlbGZfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8XHJcbiAgICBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwic2VsZi1zdGFydFwiIHwgXCJzZWxmLWVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8XHJcbiAgICBcInNhZmUgY2VudGVyXCIgfCBcInNhZmUgc3RhcnRcIiB8IFwic2FmZSBlbmRcIiB8IFwic2FmZSBzZWxmLXN0YXJ0XCIgfCBcInNhZmUgc2VsZi1lbmRcIiB8IFwic2FmZSBmbGV4LXN0YXJ0XCIgfCBcInNhZmUgZmxleC1lbmRcIiB8IFwic2FmZSBsZWZ0XCIgfCBcInNhZmUgcmlnaHRcIiB8XHJcbiAgICBcInVuc2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIHN0YXJ0XCIgfCBcInVuc2FmZSBlbmRcIiB8IFwidW5zYWZlIHNlbGYtc3RhcnRcIiB8IFwidW5zYWZlIHNlbGYtZW5kXCIgfCBcInVuc2FmZSBmbGV4LXN0YXJ0XCIgfCBcInVuc2FmZSBmbGV4LWVuZFwiIHwgXCJ1bnNhZmUgbGVmdFwiIHwgXCJ1bnNhZmUgcmlnaHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxldHRlci1zcGFjaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExldHRlclNwYWNpbmdfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpbmUtYnJlYWsgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGluZUJyZWFrX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJsb29zZVwiIHwgXCJub3JtYWxcIiB8IFwic3RyaWN0XCIgfCBcImFueXdoZXJlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaW5lLWhlaWdodCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaW5lSGVpZ2h0X1N0eWxlVHlwZSA9IENzc051bWJlciB8IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpc3Qtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGlzdFN0eWxlX1N0eWxlVHlwZSA9IExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlIHwgTGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlIHwgTGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlIHxcclxuICAgIFtFeHRlbmRlZDxMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGU+LCBFeHRlbmRlZDxMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGU+XSB8XHJcbiAgICBbRXh0ZW5kZWQ8TGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+P10gfFxyXG4gICAgW0V4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlPl0gfFxyXG4gICAgW0V4dGVuZGVkPExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZT4sIEV4dGVuZGVkPExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZT4sIEV4dGVuZGVkPExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlPj9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGluZS1zdHlsZS1pbWFnZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IElVcmxQcm94eTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpc3Qtc3R5bGUtcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlID0gXCJpbnNpZGVcIiB8IFwib3V0c2lkZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGlzdC1zdHlsZS10eXBlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImRpc2NcIiB8IFwiY2lyY2xlXCIgfCBcInNxdWFyZVwiIHwgXCJkZWNpbWFsXCIgfCBcImRlY2ltYWwtbGVhZGluZy16ZXJvXCIgfFxyXG4gICAgXCJjamstZGVjaW1hbFwiIHwgXCJjamstZWFydGhseS1icmFuY2hcIiB8IFwiY2prLWhlYXZlbmx5LXN0ZW1cIiB8IFwiY2prLWlkZW9ncmFwaGljXCIgfFxyXG4gICAgXCJsb3dlci1yb21hblwiIHwgXCJ1cHBlci1yb21hblwiIHwgXCJsb3dlci1ncmVla1wiIHwgXCJsb3dlci1hbHBoYVwiIHwgXCJsb3dlci1sYXRpblwiIHwgXCJ1cHBlci1hbHBoYVwiIHwgXCJ1cHBlci1sYXRpblwiIHxcclxuICAgIFwiYXJhYmljLWluZGljXCIgfCBcImFybWVuaWFuXCIgfCBcImJlbmdhbGlcIiB8IFwiY2FtYm9kaWFuXCIgfCBcImRldmFuYWdhcmlcIiB8IFwiZ2VvcmdpYW5cIiB8IFwiZ3VqYXJhdGlcIiB8IFwiZ3VybXVraGlcIiB8IFwiaGVicmV3XCIgfFxyXG4gICAgXCJoaXJhZ2FuYVwiIHwgXCJoaXJhZ2FuYS1pcm9oYVwiIHwgXCJqYXBhbmVzZS1mb3JtYWxcIiB8IFwiamFwYW5lc2UtaW5mb3JtYWxcIiB8IFwia2FubmFkYVwiIHwgXCJrYXRha2FuYVwiIHwgXCJrYXRha2FuYS1pcm9oYVwiIHxcclxuICAgIFwia2htZXJcIiB8IFwia29yZWFuLWhhbmd1bC1mb3JtYWxcIiB8IFwia29yZWFuLWhhbmphLWZvcm1hbFwiIHwgXCJrb3JlYW4taGFuamEtaW5mb3JtYWxcIiB8IFwibGFvXCIgfCBcImxvd2VyLWFybWVuaWFuXCIgfFxyXG4gICAgXCJtYWxheWFsYW1cIiB8IFwibW9uZ29saWFuXCIgfCBcIm15YW5tYXJcIiB8IFwib3JpeWFcIiB8IFwicGVyc2lhblwiIHwgXCJzaW1wLWNoaW5lc2UtZm9ybWFsXCIgfCBcInNpbXAtY2hpbmVzZS1pbmZvcm1hbFwiIHxcclxuICAgIFwidGFtaWxcIiB8IFwidGVsdWd1XCIgfCBcInRoYWlcIiB8IFwidGliZXRhblwiIHwgXCJ0cmFkLWNoaW5lc2UtZm9ybWFsXCIgfCBcInRyYWQtY2hpbmVzZS1pbmZvcm1hbFwiIHwgXCJ1cHBlci1hcm1lbmlhblwiIHxcclxuICAgIFwiZGlzY2xvc3VyZS1vcGVuXCIgfCBcImRpc2Nsb3N1cmUtY2xvc2VkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgbWFya2VyLXN0YXJ0LCBtYXJrZXItbWlkIGFuZCBtYXJrZXItZW5kIHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgTWFya2VyX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgSUlEUnVsZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvYmplY3QtZml0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE9iamVjdEZpdF9TdHlsZVR5cGUgPSBcImZpbGxcIiB8IFwiY29udGFpblwiIHwgXCJjb3ZlclwiIHwgXCJub25lXCIgfCBcInNjYWxlLWRvd25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvZmZzZXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2Zmc2V0X1N0eWxlVHlwZSA9IHN0cmluZyB8IE9mZnNldFBhdGhfU3R5bGVUeXBlIHxcclxue1xyXG4gICAgYW5jaG9yPzogT2Zmc2V0QW5jaG9yX1N0eWxlVHlwZSxcclxuICAgIGRpc3RhbmNlPzogQ3NzTGVuZ3RoLFxyXG4gICAgcGF0aD86IE9mZnNldFBhdGhfU3R5bGVUeXBlLFxyXG4gICAgcG9zaXRpb24/OiBDc3NQb3NpdGlvbixcclxuICAgIHJvdGF0ZT86IE9mZnNldFJvdGF0ZV9TdHlsZVR5cGUsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvZmZzZXQtYW5jaG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE9mZnNldEFuY2hvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc1Bvc2l0aW9uO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igb2Zmc2V0LXBhdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2Zmc2V0UGF0aF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IElSYXlQcm94eSB8IElVcmxQcm94eSB8IEJhc2ljU2hhcGUgfCBHZW9tZXRyeUJveEtleXdvcmQgfFxyXG4gICAgW0dlb21ldHJ5Qm94S2V5d29yZCwgQmFzaWNTaGFwZV07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb2Zmc2V0LXJvdGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPZmZzZXRSb3RhdGVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInJldmVyc2VcIiB8IENzc0FuZ2xlIHwgW1wiYXV0b1wiIHwgXCJyZXZlcnNlXCIsIENzc0FuZ2xlXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyZmxvdy14L3kgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZSA9IFwidmlzaWJsZVwiIHwgXCJoaWRkZW5cIiB8IFwiY2xpcFwiIHwgXCJzY3JvbGxcIiB8IFwiYXV0b1wiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyZmxvdy0gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcmZsb3dfU3R5bGVUeXBlID0gT25lT3JQYWlyPE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJmbG93LWFuY2hvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyZmxvd0FuY2hvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJmbG93LXdyYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT3ZlcmZsb3dXcmFwX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImJyZWFrLXdvcmRcIiB8IFwiYW55d2hlcmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyc2Nyb2xsLWJlaGF2aW9yLXgveSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZSA9IFwiY29udGFpblwiIHwgXCJub25lXCIgfCBcImF1dG9cIjtcclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcnNjcm9sbC1iZWhhdmlvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyc2Nyb2xsQmVoYXZpb3JfU3R5bGVUeXBlID0gT25lT3JQYWlyPE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwYWludC1vcmRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQYWludE9yZGVyX0tleXdvcmQgPSBcImZpbGxcIiB8IFwic3Ryb2tlXCIgfCBcIm1hcmtlcnNcIjtcclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGFpbnQtb3JkZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGFpbnRPcmRlcl9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgUGFpbnRPcmRlcl9LZXl3b3JkIHxcclxuICAgIFtQYWludE9yZGVyX0tleXdvcmQsIFBhaW50T3JkZXJfS2V5d29yZD8sIFBhaW50T3JkZXJfS2V5d29yZD9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBlcnNwZWN0aXZlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBlcnNwZWN0aXZlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBlcnNwZWN0aXZlLW9yaWdpbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQZXJzcGVjdGl2ZU9yaWdpbl9TdHlsZVR5cGUgPSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGggfFxyXG4gICAgW0V4dGVuZGVkPEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGg+LCBFeHRlbmRlZDxWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aD5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBsYWNlLWNvbnRlbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGxhY2VDb250ZW50X1N0eWxlVHlwZSA9IEFsaWduQ29udGVudF9TdHlsZVR5cGUgfCBbRXh0ZW5kZWQ8QWxpZ25Db250ZW50X1N0eWxlVHlwZT4sIEV4dGVuZGVkPEp1c3RpZnlDb250ZW50X1N0eWxlVHlwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBsYWNlLWl0ZW1zIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBsYWNlSXRlbXNfU3R5bGVUeXBlID0gQWxpZ25JdGVtc19TdHlsZVR5cGUgfCBbRXh0ZW5kZWQ8QWxpZ25JdGVtc19TdHlsZVR5cGU+LCBFeHRlbmRlZDxKdXN0aWZ5SXRlbXNfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGxhY2Utc2VsZiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQbGFjZVNlbGZfU3R5bGVUeXBlID0gQWxpZ25TZWxmX1N0eWxlVHlwZSB8IFtFeHRlbmRlZDxBbGlnblNlbGZfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8SnVzdGlmeVNlbGZfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcG9pbnRlci1ldmVudHMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUG9pbnRlckV2ZW50c19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9uZVwiIHwgXCJ2aXNpYmxlUGFpbnRlZFwiIHwgXCJ2aXNpYmxlRmlsbFwiIHwgXCJ2aXNpYmxlU3Ryb2tlXCIgfCBcInZpc2libGVcIiB8XHJcbiAgICBcInBhaW50ZWRcIiB8IFwiZmlsbFwiIHwgXCJzdHJva2VcIiB8IFwiYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUG9zaXRpb25fU3R5bGVUeXBlID0gXCJzdGF0aWNcIiB8IFwicmVsYXRpdmVcIiB8IFwiYWJzb2x1dGVcIiB8IFwic3RpY2t5XCIgfCBcImZpeGVkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcXVvdGVzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFF1b3Rlc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYXV0b1wiIHwgRXh0ZW5kZWQ8c3RyaW5nPltdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHJlc2l6ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBSZXNpemVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImJvdGhcIiB8IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiIHwgXCJibG9ja1wiIHwgXCJpbmxpbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHJvdGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBSb3RhdGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBbXCJ4XCIgfCBcInlcIiB8IFwielwiLCBFeHRlbmRlZDxDc3NBbmdsZT5dIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NBbmdsZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igcm93LWdhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBSb3dHYXBfU3R5bGVUeXBlID0gQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjYWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjYWxlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgQ3NzTnVtYmVyIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXI+LCBFeHRlbmRlZDxDc3NOdW1iZXI+PywgRXh0ZW5kZWQ8Q3NzTnVtYmVyPj9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbGJhci1jb2xvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxiYXJDb2xvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiZGFya1wiIHwgXCJsaWdodFwiIHxcclxuICAgIFtFeHRlbmRlZDxDc3NDb2xvcj4sIEV4dGVuZGVkPENzc0NvbG9yPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsYmFyLXdpZHRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbGJhcldpZHRoX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJ0aGluXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGwtYmVoYXZpb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsQmVoYXZpb3JfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInNtb290aFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbC1zbmFwLWFsaWduIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbFNuYXBBbGlnbl9TdHlsZVR5cGUgPSBPbmVPclBhaXI8XCJub25lXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJjZW50ZXJcIj47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsLXNuYXAtc3RvcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxTbmFwU3RvcF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJhbHdheXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGwtc25hcC10eXBlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbFNuYXBUeXBlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHxcclxuICAgIFtFeHRlbmRlZDxcInhcIiB8IFwieVwiIHwgXCJibG9ja1wiIHwgXCJpbmxpbmVcIiB8IFwiYm90aFwiPiwgRXh0ZW5kZWQ8XCJtYW5kYXRvcnlcIiB8IFwicHJveGltaXR5XCI+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNoYXBlLW91dHNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVPdXRzaWRlX1N0eWxlVHlwZSA9IElVcmxQcm94eSB8IEJhc2ljU2hhcGUgfCBHZW9tZXRyeUJveEtleXdvcmQgfCBDc3NJbWFnZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzaGFwZS1yZW5kZXJpbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVSZW5kZXJpbmdfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm9wdGltaXplU3BlZWRcIiB8IFwiY3Jpc3BFZGdlc1wiIHwgXCJnZW9tZXRyaWNQcmVjaXNpb25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0YWJsZS1sYXlvdXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGFibGVMYXlvdXRfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImZpeGVkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1hbGlnbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0QWxpZ25fU3R5bGVUeXBlID0gXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIiB8IFwianVzdGlmeVwiIHwgXCJtYXRjaC1wYXJlbnRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWFsaWduLWxhc3Qgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEFsaWduTGFzdF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCIgfCBcImp1c3RpZnlcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWFuY2hvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0QW5jaG9yX1N0eWxlVHlwZSA9IFwic3RhcnRcIiB8IFwibWlkZGxlXCIgfCBcImVuZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtY29tYmluZS11cHJpZ2h0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRDb21iaW5lVXByaWdodF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYWxsXCIgfCBcImRpZ2l0c1wiIHwgbnVtYmVyO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbiBzdHlsZSBwcm9wZXJ0eS4gSWYgYSBudW1iZXIgaXMgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIGludGVycHJldGVkXHJcbiAqIGFzIGNvbG9yIC0gbm90IGFzIHRoaWNrbmVzcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZSA9IFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGUgfCBUZXh0RGVjb3JhdGlvblN0eWxlX1N0eWxlVHlwZSB8XHJcbiAgICBDc3NDb2xvciB8IFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZSB8XHJcbiAgICB7XHJcbiAgICAgICAgbGluZT86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHN0eWxlPzogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgICAgIHRoaWNrbmVzcz86IEV4dGVuZGVkPFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZT4sXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbi1saW5lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwic3BlbGxpbmctZXJyb3JcIiB8IFwiZ3JhbW1hci1lcnJvclwiIHxcclxuICAgIE9uZU9yTWFueTxcInVuZGVybGluZVwiIHwgXCJvdmVybGluZVwiIHwgXCJsaW5lLXRocm91Z2hcIj47IFxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbi1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RGVjb3JhdGlvblN0eWxlX1N0eWxlVHlwZSA9IFwic29saWRcIiB8IFwiZG91YmxlXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIiB8IFwid2F2eVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZGVjb3JhdGlvbi1za2lwLWluayBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RGVjb3JhdGlvblNraXBJbmtfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImF1dG9cIiB8IFwiYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RGVjb3JhdGlvblRoaWNrbmVzc19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiZnJvbS1mb250XCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8vIC8qKiBUeXBlIGZvciB0aGUgdGV4dC1lbXBoYXNpcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNfU3R5bGVUeXBlID0gVGV4dEVtcGhhc2lzU3R5bGVfU3R5bGVUeXBlIHwgQ3NzQ29sb3IgfFxyXG4gICAgW0V4dGVuZGVkPFRleHRFbXBoYXNpc1N0eWxlX1N0eWxlVHlwZT4sIEV4dGVuZGVkPENzc0NvbG9yPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1lbXBoYXNpcy1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNQb3NpdGlvbl9TdHlsZVR5cGUgPSBcIm92ZXIgbGVmdFwiIHwgXCJvdmVyIHJpZ2h0XCIgfCBcInVuZGVyIGxlZnRcIiB8IFwidW5kZXIgcmlnaHRcIjtcclxuXHJcblxyXG5cclxuLyoqIFNoYXBlIGZvciB0aGUgdGV4dC1lbXBoYXNpcy1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNTaGFwZSA9IFwiZG90XCIgfCBcImNpcmNsZVwiIHwgXCJkb3VibGUtY2lyY2xlXCIgfCBcInRyaWFuZ2xlXCIgfCBcInNlc2FtZVwiIHwgc3RyaW5nO1xyXG5cclxuLyoqIEZpbGwgb3B0aW9uIGZvciB0aGUgdGV4dC1lbXBoYXNpcy1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0RW1waGFzaXNGaWxsID0gXCJmaWxsZWRcIiB8IFwib3BlblwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWVtcGhhc2lzLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc1N0eWxlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgVGV4dEVtcGhhc2lzRmlsbCB8IFRleHRFbXBoYXNpc1NoYXBlIHxcclxuICAgIFtFeHRlbmRlZDxUZXh0RW1waGFzaXNGaWxsPiwgRXh0ZW5kZWQ8VGV4dEVtcGhhc2lzU2hhcGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWluZGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0SW5kZW50X1N0eWxlVHlwZSA9IENzc0xlbmd0aCB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8T25lT3JNYW55PFwiZWFjaC1saW5lXCIgfCBcImhhbmdpbmdcIiB8IFwiZWFjaC1saW5lIGhhbmdpbmdcIj4+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWp1c3RpZnkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEp1c3RpZnlfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImludGVyLWNoYXJhY3RlclwiIHwgXCJpbnRlci13b3JkXCIgfCBcIm5vbmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LW9yaWVudGF0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRPcmllbnRhdGlvbl9TdHlsZVR5cGUgPSBcIm1peGVkXCIgfCBcInVwcmlnaHRcIiB8IFwic2lkZXdheXNcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LW92ZXJmbG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRPdmVyZmxvd19TdHlsZVR5cGUgPSBPbmVPclBhaXI8XCJjbGlwXCIgfCBcImVsbGlwc2lzXCIgfCBcImZhZGVcIiB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2luZ2xlIHZhbHVlIG9mIHRoZSB0ZXh0LXNoYWRvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0U2hhZG93X1NpbmdsZSA9IFwibm9uZVwiIHwgc3RyaW5nIHxcclxuICAgIHtcclxuICAgICAgICB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgYmx1cj86IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LXNoYWRvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0U2hhZG93X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUZXh0U2hhZG93X1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1zaXplLWFkanVzdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0U2l6ZUFkanVzdF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYXV0b1wiIHwgQ3NzUGVyY2VudDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LXRyYW5zZm9ybSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0VHJhbnNmb3JtX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJjYXBpdGFsaXplXCIgfCBcInVwcGVyY2FzZVwiIHwgXCJsb3dlcmNhc2VcIiB8IFwiZnVsbC13aWR0aFwiIHwgXCJmdWxsLXNpemUta2FuYVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtdW5kZXJsaW5lLXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRVbmRlcmxpbmVQb3NpdGlvbl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwidW5kZXJcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJhdXRvLXBvc1wiIHwgXCJhYm92ZVwiIHwgXCJiZWxvd1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRvdWNoLWFjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUb3VjaEFjdGlvbl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9uZVwiIHwgXCJtYW5pcHVsYXRpb25cIiB8XHJcbiAgICBcInBhbi14XCIgfCBcInBhbi1sZWZ0XCIgfCBcInBhbi1yaWdodFwiIHwgXCJwYW4teVwiIHwgXCJwYW4tdXBcIiB8IFwicGFuLWRvd25cIiB8IFwicGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXggcGluY2gtem9vbVwiIHwgXCJwYW4tbGVmdCBwaW5jaC16b29tXCIgfCBcInBhbi1yaWdodCBwaW5jaC16b29tXCIgfCBcInBhbi15IHBpbmNoLXpvb21cIiB8IFwicGFuLXVwIHBpbmNoLXpvb21cIiB8IFwicGFuLWRvd24gcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXggcGFuLXlcIiB8IFwicGFuLXggcGFuLXkgcGluY2gtem9vbVwiIHwgXCJwYW4teCBwYW4tdXBcIiB8IFwicGFuLXggcGFuLXVwIHBpbmNoLXpvb21cIiB8IFwicGFuLXggcGFuLWRvd25cIiB8IFwicGFuLXggcGFuLWRvd24gcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXkgcGFuLWxlZnRcIiB8IFwicGFuLXkgcGFuLWxlZnQgcGluY2gtem9vbVwiIHwgXCJwYW4teSBwYW4tcmlnaHRcIiB8IFwicGFuLXkgcGFuLXJpZ2h0IHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi1sZWZ0IHBhbi11cFwiIHwgXCJwYW4tbGVmdCBwYW4tdXAgcGluY2gtem9vbVwiIHwgXCJwYW4tbGVmdCBwYW4tZG93blwiIHwgXCJwYW4tbGVmdCBwYW4tZG93biBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4tcmlnaHQgcGFuLXVwXCIgfCBcInBhbi1yaWdodCBwYW4tdXAgcGluY2gtem9vbVwiIHwgXCJwYW4tcmlnaHQgcGFuLWRvd25cIiB8IFwicGFuLXJpZ2h0IHBhbi1kb3duIHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi11cCBwYW4tbGVmdFwiIHwgXCJwYW4tdXAgcGFuLWxlZnQgcGluY2gtem9vbVwiIHwgXCJwYW4tdXAgcGFuLXJpZ2h0XCIgfCBcInBhbi11cCBwYW4tcmlnaHQgcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLWRvd24gcGFuLWxlZnRcIiB8IFwicGFuLWRvd24gcGFuLWxlZnQgcGluY2gtem9vbVwiIHwgXCJwYW4tZG93biBwYW4tcmlnaHRcIiB8IFwicGFuLWRvd24gcGFuLXJpZ2h0IHBpbmNoLXpvb21cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zZm9ybSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1fU3R5bGVUeXBlID0gXCJub25lXCIgfCBzdHJpbmcgfCBPbmVPck1hbnk8SVRyYW5zZm9ybVByb3h5PjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zZm9ybS1ib3ggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtQm94X1N0eWxlVHlwZSA9IFwiY29udGVudC1ib3hcIiB8IFwiYm9yZGVyLWJveFwiIHwgXCJmaWxsLWJveFwiIHwgXCJzdHJva2UtYm94XCIgfCBcInZpZXctYm94XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2Zvcm0tb3JpZ2luIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybU9yaWdpbl9TdHlsZVR5cGUgPSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGggfFxyXG4gICAgW0V4dGVuZGVkPEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBDc3NMZW5ndGg+LCBFeHRlbmRlZDxWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD4/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zZm9ybS1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1TdHlsZV9TdHlsZVR5cGUgPSBcImZsYXRcIiB8IFwicHJlc2VydmUtM2RcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSB0cmFuc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25fU2luZ2xlID0gc3RyaW5nIHxcclxuICAgIHtcclxuICAgICAgICBwcm9wZXJ0eT86IEV4dGVuZGVkPFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGU+O1xyXG4gICAgICAgIGR1cmF0aW9uPzogRXh0ZW5kZWQ8Q3NzVGltZT47XHJcbiAgICAgICAgZnVuYz86IEV4dGVuZGVkPFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT47XHJcbiAgICAgICAgZGVsYXk/OiBFeHRlbmRlZDxDc3NUaW1lPjtcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUcmFuc2l0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgdHJhbnNpdGlvbi1wcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uUHJvcGVydHlfU2luZ2xlID0gXCJub25lXCIgfCBcImFsbFwiIHwga2V5b2YgSUNzc1N0eWxlc2V0O1xyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zaXRpb24tcHJvcGVydHkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvblByb3BlcnR5X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUcmFuc2l0aW9uUHJvcGVydHlfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8VGltaW5nRnVuY3Rpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0cmFuc2xhdGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNsYXRlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgQ3NzTGVuZ3RoIHxcclxuICAgIFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdW5pY29kZS1iaWRpIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFVuaWNvZGVCaWRpX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImVtYmVkXCIgfCBcImlzb2xhdGVcIiB8IFwiYmlkaS1vdmVycmlkZVwiIHwgXCJpc29sYXRlLW92ZXJyaWRlXCIgfCBcInBsYWludGV4dFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHVzZXItc2VsZWN0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFVzZXJTZWxlY3RfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInRleHRcIiB8IFwibm9uZVwiIHwgXCJjb250YWluXCIgfCBcImFsbFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHZlcnRpY2FsLWFsaWduIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFZlcnRpY2FsQWxpZ25fU3R5bGVUeXBlID0gXCJiYXNlbGluZVwiIHwgXCJzdWJcIiB8IFwic3VwZXJcIiB8IFwidGV4dC10b3BcIiB8IFwidGV4dC1ib3R0b21cIiB8XHJcbiAgICBcIm1pZGRsZVwiIHwgXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdmlzaWJpbGl0eSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBWaXNpYmlsaXR5X1N0eWxlVHlwZSA9IFwidmlzaWJsZVwiIHwgXCJoaWRkZW5cIiB8IFwiY29sbGFwc2VcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB2ZWN0b3ItZWZmZWN0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFZlY3RvckVmZmVjdF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwibm9uLXNjYWxpbmctc3Ryb2tlXCIgfCBcIm5vbi1zY2FsaW5nLXNpemVcIiB8IFwibm9uLXJvdGF0aW9uXCIgfCBcImZpeGVkLXBvc2l0aW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgd2hpdGUtc3BhY2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgV2hpdGVTcGFjZV9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJwcmVcIiB8IFwibm93cmFwXCIgfCBcInByZS13cmFwXCIgfCBcInByZS1saW5lXCIgfCBcImJyZWFrLXNwYWNlc1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igd2lsbC1jaGFuZ2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgV2lsbENoYW5nZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IE9uZU9yTWFueTxcInNjcm9sbC1wb3NpdGlvblwiIHwgXCJjb250ZW50c1wiIHwgRXhjbHVkZTxrZXlvZiBJQ3NzU3R5bGVzZXQsXCJ3aWxsQ2hhbmdlXCI+PjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB3b3JkLWJyZWFrIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFdvcmRCcmVha19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJicmVhay1hbGxcIiB8IFwia2VlcC1hbGxcIiB8IFwiYnJlYWstd29yZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHdvcmQtc3BhY2luZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXb3JkU3BhY2luZ19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHdyaXRpbmctbW9kZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXcml0aW5nTW9kZV9TdHlsZVR5cGUgPSBcImhvcml6b250YWwtdGJcIiB8IFwidmVydGljYWwtcmxcIiB8IFwidmVydGljYWwtbHJcIiB8IFwic2lkZXdheXMtcmxcIiB8IFwic2lkZXdheXMtbHJcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB6LWluZGV4IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFpJbmRleF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc051bWJlcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB6b29tIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFpvb21fU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwicmVzZXRcIiB8IENzc1BlcmNlbnQ7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzdHlsZSBwcm9wZXJ0aWVzIGZvciB3aGljaCB0aGVyZSBpcyBubyBzcGVjaWFsIHR5cGUgZGVmaW5lZC4gKi9cclxuZXhwb3J0IHR5cGUgRGVmYXVsdFN0eWxlVHlwZSA9IHN0cmluZztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3h5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgPGZpbHRlcj5gIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbHRlclByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImZpbHRlclwiPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUJhc2ljU2hhcGVQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYDxiYXNpYy1zaGFwZT5gIGZ1bmN0aW9uc1xyXG4gKiBleGNlcHQgdGhlIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQmFzaWNTaGFwZVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImJhc2ljLXNoYXBlXCI+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBCYXNpY1NoYXBlVHlwZSByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYDxiYXNpYy1zaGFwZT5gIGZ1bmN0aW9ucyBpbmNsdWRpbmdcclxuICogdGhlIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQmFzaWNTaGFwZSA9IElCYXNpY1NoYXBlUHJveHkgfCBJUGF0aEJ1aWxkZXI7XHJcblxyXG4vKipcclxuICogVGhlIElSYXlQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYHJheSgpYCBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSYXlQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJyYXlcIj4ge307XHJcblxyXG4vKipcclxuICogVGhlIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2Ygb25lIHRoZSBDU1MgYDxiYXNpYy1zaGFwZT5gIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRyYW5zZm9ybVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInRyYW5zZm9ybVwiPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1pbk1heFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgbWlubWF4KCkgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1pbk1heFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcIm1pbm1heFwiPiB7fVxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRml0Q29udGVudFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgZml0LWNvbnRlbnQoKSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRml0Q29udGVudFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcImZpdC1jb250ZW50XCI+IHt9XHJcblxyXG4vKipcclxuICogVGhlIElSZXBlYXRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2YgdGhlIHJlcGVhdCgpIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSZXBlYXRQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJyZXBlYXRcIj4ge31cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVNwYW5Qcm94eSBmdW5jdGlvbiBwcm9kdWNlcyB0aGUgc3BhbiBleHByZXNzaW9uIGZvciBncmlkIGxheW91dHNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNwYW5Qcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJzcGFuXCI+IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhdGhCdWlsZGVyIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBvYmplY3QgdGhhdCBhY2N1bXVsYXRlcyBwYXRoIGNvbW1hbmRzIHRoYXQgYXJlIHRoZW5cclxuICogY29udmVydGVkIHRvIGEgc3RyaW5nIHBhcmFtZXRlciBvZiB0aGUgQ1NTIGBwYXRoKClgIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGF0aEJ1aWxkZXJcclxue1xyXG4gICAgLy8gTW92ZS10byBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcbiAgICBNKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBNb3ZlLXRvIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuICAgIG0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIExpbmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdEwoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIExpbmUtdG8gY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG4gICAgbCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRIKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBIb3Jpem9udGFsIGxpbmUtdG8gY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG4gICAgaCggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gVmVydGljYWwgbGluZS10byBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0ViggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gVmVydGljYWwgbGluZS10byBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcbiAgICB2KCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBDdWJpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdEMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEN1YmljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0YyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gU21vb3RoIGN1YmljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0UyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFNtb290aCBjdWJpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG5cdHMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBRdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRRKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gUXVhZHJhdGljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0cSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFNtb290aCBxdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRUKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBTbW9vdGggcXVhZHJhdGljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0dCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gRWxsaXB0aWNhbCBhcmMgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdEEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gRWxsaXB0aWNhbCBhcmMgY3VydmUgY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG5cdGEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gQ2xvc2UtcGF0aCBjb21tYW5kLlxyXG4gICAgeigpOiBJUGF0aEJ1aWxkZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0eWxlc2V0IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgcmVwcmVzZW50aW5nIGEgY29sbGVjdGlvbiBvZiBidWlsdC1pbiBzdHlsZSBwcm9wZXJ0aWVzIGFuZCB0aGVpciB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NTdHlsZXNldFxyXG57XHJcbiAgICBhbGw/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgYWxpZ25Db250ZW50PzogQWxpZ25Db250ZW50X1N0eWxlVHlwZTtcclxuICAgIGFsaWduSXRlbXM/OiBBbGlnbkl0ZW1zX1N0eWxlVHlwZTtcclxuICAgIGFsaWduU2VsZj86IEFsaWduU2VsZl9TdHlsZVR5cGU7XHJcbiAgICBhbGlnbm1lbnRCYXNlbGluZT86IEFsaWdubWVudEJhc2VsaW5lX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbj86IEFuaW1hdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25EZWxheT86IEFuaW1hdGlvbkRlbGF5X1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkRpcmVjdGlvbj86IEFuaW1hdGlvbkRpcmVjdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25EdXJhdGlvbj86IEFuaW1hdGlvbkR1cmF0aW9uX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlPzogQW5pbWF0aW9uRmlsbE1vZGVfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ/OiBBbmltYXRpb25JdGVyYXRpb25Db3VudF9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25OYW1lPzogQW5pbWF0aW9uTmFtZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU/OiBBbmltYXRpb25QbGF5U3RhdGVfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24/OiBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9TdHlsZVR5cGU7XHJcblxyXG4gICAgYmFja2Ryb3BGaWx0ZXI/OiBGaWx0ZXJfU3R5bGVUeXBlO1xyXG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5PzogQmFja2ZhY2VWaXNpYmlsaXR5TW9kZV9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kPzogQmFja2dyb3VuZF9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudD86IEJhY2tncm91bmRBdHRhY2htZW50X1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRCbGVuZE1vZGU/OiBCYWNrZ3JvdW5kQmxlbmRNb2RlX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRDbGlwPzogQmFja2dyb3VuZENsaXBfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U/OiBCYWNrZ3JvdW5kSW1hZ2VfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZE9yaWdpbj86IEJhY2tncm91bmRPcmlnaW5fU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uPzogQmFja2dyb3VuZFBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvblg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0PzogQmFja2dyb3VuZFJlcGVhdF9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0WD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0WT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kU2l6ZT86IEJhY2tncm91bmRTaXplX1N0eWxlVHlwZTtcclxuICAgIGJhc2VsaW5lU2hpZnQ/OiBCYXNlbGluZVNoaWZ0X1N0eWxlVHlwZTtcclxuICAgIGJsb2NrU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIGJvcmRlcj86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCbG9ja0VuZD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCbG9ja0VuZENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJCbG9ja0VuZFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlckJsb2NrRW5kV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0PzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJsb2NrU3RhcnRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyQmxvY2tTdGFydFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlckJsb2NrU3RhcnRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlckJvdHRvbT86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCb3R0b21Db2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1cz86IENzc1JhZGl1cztcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogQ3NzUmFkaXVzO1xyXG4gICAgYm9yZGVyQm90dG9tU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJDb2xsYXBzZT86IEJvcmRlckNvbGFwc2VfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQ29sb3I/OiBCb3JkZXJDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZT86IEJvcmRlckltYWdlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlT3V0c2V0PzogQm9yZGVySW1hZ2VPdXRzZXRfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VSZXBlYXQ/OiBCb3JkZXJJbWFnZVJlcGVhdF9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVNsaWNlPzogQm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVNvdXJjZT86IEJvcmRlckltYWdlU291cmNlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlV2lkdGg/OiBCb3JkZXJJbWFnZVdpZHRoX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlcklubGluZUVuZD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbmxpbmVFbmRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVySW5saW5lRW5kU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVySW5saW5lRW5kV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJJbmxpbmVTdGFydD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJJbmxpbmVTdGFydFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlcklubGluZVN0YXJ0V2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJMZWZ0PzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckxlZnRDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyTGVmdFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlckxlZnRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlclJhZGl1cz86IEJvcmRlclJhZGl1c19TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJSaWdodD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJSaWdodENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJSaWdodFN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGJvcmRlclJpZ2h0V2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJTcGFjaW5nPzogQm9yZGVyU3BhY2luZ19TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJTdHlsZT86IEJvcmRlclN0eWxlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcD86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJUb3BDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1cz86IENzc1JhZGl1cztcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPzogQ3NzUmFkaXVzO1xyXG4gICAgYm9yZGVyVG9wU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyVG9wV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBib3JkZXJXaWR0aD86IEJvcmRlcldpZHRoX1N0eWxlVHlwZTtcclxuICAgIGJvdHRvbT86IENzc0xlbmd0aDtcclxuICAgIGJveFNoYWRvdz86IEJveFNoYWRvd19TdHlsZVR5cGU7XHJcbiAgICBib3hTaXppbmc/OiBCb3hTaXppbmdfU3R5bGVUeXBlO1xyXG4gICAgYnJlYWtBZnRlcj86IEJyZWFrQWZ0ZXJfU3R5bGVUeXBlO1xyXG4gICAgYnJlYWtCZWZvcmU/OiBCcmVha0JlZm9yZV9TdHlsZVR5cGU7XHJcbiAgICBicmVha0luc2lkZT86IEJyZWFrSW5zaWRlX1N0eWxlVHlwZTtcclxuICAgIGJ1ZmZlcmVkUmVuZGVyaW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuXHJcbiAgICBjYXB0aW9uU2lkZT86IENhcHRpb25TaWRlX1N0eWxlVHlwZTtcclxuICAgIGNhcmV0Q29sb3I/OiBDYXJldENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGNsZWFyPzogQ2xlYXJfU3R5bGVUeXBlO1xyXG4gICAgY2xpcD86IENsaXBfU3R5bGVUeXBlO1xyXG4gICAgY2xpcFBhdGg/OiBDbGlwUGF0aF9TdHlsZVR5cGU7XHJcbiAgICBjbGlwUnVsZT86IENsaXBSdWxlX1N0eWxlVHlwZTtcclxuICAgIGNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBjb2xvckludGVycG9sYXRpb24/OiBDb2xvckludGVycG9sYXRpb25fU3R5bGVUeXBlO1xyXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVycz86IENvbG9ySW50ZXJwb2xhdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5Db3VudD86IENvbHVtbkNvdW50X1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbkZpbGw/OiBDb2x1bW5GaWxsX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbkdhcD86IENvbHVtbkdhcF9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5SdWxlPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtblJ1bGVDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgY29sdW1uUnVsZVN0eWxlPzogQm9yZGVyU3R5bGVfS2V5d29yZDtcclxuICAgIGNvbHVtblJ1bGVXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGNvbHVtblNwYW4/OiBDb2x1bW5TcGFuX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbldpZHRoPzogQ3NzTGVuZ3RoO1xyXG4gICAgY29sdW1ucz86IENvbHVtbnNfU3R5bGVUeXBlO1xyXG4gICAgY29udGFpbj86IENvbnRhaW5fU3R5bGVUeXBlO1xyXG4gICAgY29udGVudD86IENvbnRlbnRfU3R5bGVUeXBlO1xyXG4gICAgY291bnRlckluY3JlbWVudD86IENvdW50ZXJfU3R5bGVUeXBlO1xyXG4gICAgY291bnRlclJlc2V0PzogQ291bnRlcl9TdHlsZVR5cGU7XHJcbiAgICBjb3VudGVyU2V0PzogQ291bnRlcl9TdHlsZVR5cGU7XHJcbiAgICBjdXJzb3I/OiBDdXJzb3JfU3R5bGVUeXBlO1xyXG5cclxuICAgIGRpcmVjdGlvbj86IERpcmVjdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBkaXNwbGF5PzogRGlzcGxheV9TdHlsZVR5cGU7XHJcbiAgICBkb21pbmFudEJhc2VsaW5lPzogRG9taW5hbnRCYXNlbGluZV9TdHlsZVR5cGU7XHJcblxyXG4gICAgZW1wdHlDZWxscz86IEVtcHR5Q2VsbHNfU3R5bGVUeXBlO1xyXG5cclxuICAgIGZpbGw/OiBDc3NDb2xvcjtcclxuICAgIGZpbGxPcGFjaXR5PzogQ3NzUGVyY2VudDtcclxuICAgIGZpbGxSdWxlPzogRmlsbFJ1bGVfU3R5bGVUeXBlO1xyXG4gICAgZmlsdGVyPzogRmlsdGVyX1N0eWxlVHlwZTtcclxuICAgIGZsZXg/OiBGbGV4X1N0eWxlVHlwZTtcclxuICAgIGZsZXhCYXNpcz86IEZsZXhCYXNpc19TdHlsZVR5cGU7XHJcbiAgICBmbGV4RGlyZWN0aW9uPzogRmxleERpcmVjdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBmbGV4Rmxvdz86IEZsZXhGbG93X1N0eWxlVHlwZTtcclxuICAgIGZsZXhHcm93PzogQ3NzTnVtYmVyO1xyXG4gICAgZmxleFNocmluaz86IENzc051bWJlcjtcclxuICAgIGZsZXhXcmFwPzogRmxleFdyYXBfU3R5bGVUeXBlO1xyXG4gICAgZmxvYXQ/OiBGbG9hdF9TdHlsZVR5cGU7XHJcbiAgICBmbG9vZENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBmbG9vZE9wYWNpdHk/OiBDc3NQZXJjZW50O1xyXG4gICAgZm9udD86IEZvbnRfU3R5bGVUeXBlO1xyXG4gICAgZm9udEZhbWlseT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250RmVhdHVyZVNldHRpbmdzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRLZXJuaW5nPzogRm9udEtlcm5pbmdfU3R5bGVUeXBlO1xyXG4gICAgZm9udE9wdGljYWxTaXppbmc/OiBGb250T3B0aWNhbFNpemluZ19TdHlsZVR5cGU7XHJcbiAgICBmb250U2l6ZT86IEZvbnRTaXplX1N0eWxlVHlwZTtcclxuICAgIGZvbnRTaXplQWRqdXN0PzogQ3NzTnVtYmVyO1xyXG4gICAgZm9udFN0cmV0Y2g/OiBGb250U3RyZXRjaF9TdHlsZVR5cGU7XHJcbiAgICBmb250U3R5bGU/OiBGb250U3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgZm9udFN5bnRoZXNpcz86IEZvbnRTeW50aGVzaXNfU3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnRDYXBzPzogRm9udFZhcmlhbnRDYXBzX1N0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50RWFzdEFzaWFuPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50TGlnYXR1cmVzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50TnVtZXJpYz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudFBvc2l0aW9uPzogRm9udFZhcmlhbnRQb3NpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFdlaWdodD86IEZvbnRXZWlnaHRfU3R5bGVUeXBlO1xyXG5cclxuICAgIGdhcD86IEdhcF9TdHlsZVR5cGU7XHJcbiAgICBncmlkPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGdyaWRBcmVhPzogR3JpZEFyZWFfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEF1dG9Db2x1bW5zPzogR3JpZEF1dG9BeGlzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRBdXRvRmxvdz86IEdyaWRBdXRvRmxvd19TdHlsZVR5cGU7XHJcbiAgICBncmlkQXV0b1Jvd3M/OiBHcmlkQXV0b0F4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtbj86IEdyaWRBeGlzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW5FbmQ/OiBHcmlkQXhpc1NpZGVfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtbkdhcD86IENvbHVtbkdhcF9TdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uU3RhcnQ/OiBHcmlkQXhpc1NpZGVfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEdhcD86IEdhcF9TdHlsZVR5cGU7XHJcbiAgICBncmlkUm93PzogR3JpZEF4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFJvd0VuZD86IEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBncmlkUm93R2FwPzogUm93R2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWRSb3dTdGFydD86IEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM/OiBHcmlkVGVtcGxhdGVBcmVhc19TdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zPzogR3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGVSb3dzPzogR3JpZFRlbXBsYXRlQXhpc19TdHlsZVR5cGU7XHJcblxyXG4gICAgaGVpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgaHlwaGVucz86IEh5cGhlbnNfU3R5bGVUeXBlO1xyXG5cclxuICAgIGltYWdlUmVuZGVyaW5nPzogSW1hZ2VSZW5kZXJpbmdfU3R5bGVUeXBlO1xyXG4gICAgaW5saW5lU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIGlzb2xhdGlvbj86IElzb2xhdGlvbl9TdHlsZVR5cGU7XHJcblxyXG4gICAganVzdGlmeUNvbnRlbnQ/OiBKdXN0aWZ5Q29udGVudF9TdHlsZVR5cGU7XHJcbiAgICBqdXN0aWZ5SXRlbXM/OiBKdXN0aWZ5SXRlbXNfU3R5bGVUeXBlO1xyXG4gICAganVzdGlmeVNlbGY/OiBKdXN0aWZ5U2VsZl9TdHlsZVR5cGU7XHJcblxyXG4gICAgbGVmdD86IENzc0xlbmd0aDtcclxuICAgIGxldHRlclNwYWNpbmc/OiBMZXR0ZXJTcGFjaW5nX1N0eWxlVHlwZTtcclxuICAgIGxpZ2h0aW5nQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGxpbmVCcmVhaz86IExpbmVCcmVha19TdHlsZVR5cGU7XHJcbiAgICBsaW5lSGVpZ2h0PzogTGluZUhlaWdodF9TdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGU/OiBMaXN0U3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgbGlzdFN0eWxlSW1hZ2U/OiBMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGVQb3NpdGlvbj86IExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZVR5cGU/OiBMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZTtcclxuXHJcbiAgICBtYXJnaW4/OiBDc3NMZW5ndGhCb3g7XHJcbiAgICBtYXJnaW5CbG9ja0VuZD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbkJsb2NrU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5Cb3R0b20/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5JbmxpbmVFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5JbmxpbmVTdGFydD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbkxlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXJnaW5SaWdodD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpblRvcD86IENzc0xlbmd0aDtcclxuICAgIG1hcmtlcj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXJrZXJFbmQ/OiBNYXJrZXJfU3R5bGVUeXBlO1xyXG4gICAgbWFya2VyTWlkPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hcmtlclN0YXJ0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2s/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza0NvbXBvc2l0ZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrSW1hZ2U/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza1Bvc2l0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2tSZXBlYXQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza1NpemU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza1R5cGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWF4QmxvY2tTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWF4SGVpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWF4SW5saW5lU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIG1heFdpZHRoPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWluQmxvY2tTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWluSGVpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWluSW5saW5lU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIG1pbldpZHRoPzogQ3NzTGVuZ3RoO1xyXG5cclxuICAgIG9iamVjdEZpdD86IE9iamVjdEZpdF9TdHlsZVR5cGU7XHJcbiAgICBvYmplY3RQb3NpdGlvbj86IENzc1Bvc2l0aW9uO1xyXG4gICAgb2Zmc2V0PzogT2Zmc2V0X1N0eWxlVHlwZTtcclxuICAgIG9mZnNldEFuY2hvcj86IE9mZnNldEFuY2hvcl9TdHlsZVR5cGVcclxuICAgIG9mZnNldERpc3RhbmNlPzogQ3NzTGVuZ3RoO1xyXG4gICAgb2Zmc2V0UGF0aD86IE9mZnNldFBhdGhfU3R5bGVUeXBlO1xyXG4gICAgb2Zmc2V0UG9zaXRpb24/OiBDc3NQb3NpdGlvbjtcclxuICAgIG9mZnNldFJvdGF0ZT86IE9mZnNldFJvdGF0ZV9TdHlsZVR5cGU7XHJcbiAgICBvcGFjaXR5PzogQ3NzUGVyY2VudDtcclxuICAgIG9yZGVyPzogQ3NzTnVtYmVyO1xyXG4gICAgb3JwaGFucz86IENzc051bWJlcjtcclxuICAgIG91dGxpbmU/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgb3V0bGluZUNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBvdXRsaW5lT2Zmc2V0PzogQ3NzTGVuZ3RoO1xyXG4gICAgb3V0bGluZVN0eWxlPzogQm9yZGVyU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgb3V0bGluZVdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgb3ZlcmZsb3c/OiBPdmVyZmxvd19TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd0FuY2hvcj86IE92ZXJmbG93QW5jaG9yX1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93QmxvY2s/OiBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dJbmxpbmU/OiBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dXcmFwPzogT3ZlcmZsb3dXcmFwX1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93WD86IE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd1k/OiBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yPzogT3ZlcnNjcm9sbEJlaGF2aW9yX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvckJsb2NrPzogT3ZlcnNjcm9sbEJlaGF2aW9yX1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3JJbmxpbmU/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvclg/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvclk/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZTtcclxuXHJcbiAgICBwYWRkaW5nPzogQ3NzTGVuZ3RoQm94O1xyXG4gICAgcGFkZGluZ0Jsb2NrRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0Jsb2NrU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nQm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0lubGluZUVuZD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdJbmxpbmVTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdMZWZ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ1JpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ1RvcD86IENzc0xlbmd0aDtcclxuICAgIHBhaW50T3JkZXI/OiBQYWludE9yZGVyX1N0eWxlVHlwZTtcclxuICAgIHBhZ2VCcmVha0FmdGVyPzogQnJlYWtBZnRlcl9TdHlsZVR5cGU7XHJcbiAgICBwYWdlQnJlYWtCZWZvcmU/OiBCcmVha0JlZm9yZV9TdHlsZVR5cGU7XHJcbiAgICBwYWdlQnJlYWtJbnNpZGU/OiBCcmVha0luc2lkZV9TdHlsZVR5cGU7XHJcbiAgICBwZXJzcGVjdGl2ZT86IFBlcnNwZWN0aXZlX1N0eWxlVHlwZTtcclxuICAgIHBlcnNwZWN0aXZlT3JpZ2luPzogUGVyc3BlY3RpdmVPcmlnaW5fU3R5bGVUeXBlO1xyXG4gICAgcGxhY2VDb250ZW50PzogUGxhY2VDb250ZW50X1N0eWxlVHlwZTtcclxuICAgIHBsYWNlSXRlbXM/OiBQbGFjZUl0ZW1zX1N0eWxlVHlwZTtcclxuICAgIHBsYWNlU2VsZj86IFBsYWNlU2VsZl9TdHlsZVR5cGU7XHJcbiAgICBwb2ludGVyRXZlbnRzPzogUG9pbnRlckV2ZW50c19TdHlsZVR5cGU7XHJcbiAgICBwb3NpdGlvbj86IFBvc2l0aW9uX1N0eWxlVHlwZTtcclxuXHJcbiAgICBxdW90ZXM/OiBRdW90ZXNfU3R5bGVUeXBlO1xyXG5cclxuICAgIHJlc2l6ZT86IFJlc2l6ZV9TdHlsZVR5cGU7XHJcbiAgICByaWdodD86IENzc0xlbmd0aDtcclxuICAgIHJvdGF0ZT86IFJvdGF0ZV9TdHlsZVR5cGU7XHJcbiAgICByb3dHYXA/OiBSb3dHYXBfU3R5bGVUeXBlO1xyXG4gICAgcnVieUFsaWduPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHJ1YnlPdmVyaGFuZz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBydWJ5UG9zaXRpb24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG5cclxuICAgIHNjYWxlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHNjcm9sbGJhckNvbG9yPzogU2Nyb2xsYmFyQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsYmFyV2lkdGg/OiBTY3JvbGxiYXJXaWR0aF9TdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxCZWhhdmlvcj86IFNjcm9sbEJlaGF2aW9yX1N0eWxlVHlwZTtcclxuICAgIHNjcm9sbE1hcmdpbj86IENzc0xlbmd0aEJveDtcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrPzogQ3NzTGVuZ3RoUGFpcjtcclxuICAgIHNjcm9sbE1hcmdpbkJsb2NrRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbkJvdHRvbT86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbklubGluZT86IENzc0xlbmd0aFBhaXI7XHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbkxlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5SaWdodD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpblRvcD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmc/OiBDc3NMZW5ndGhCb3g7XHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2s/OiBDc3NMZW5ndGhQYWlyO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0Jsb2NrU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nQm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZT86IENzc0xlbmd0aFBhaXI7XHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0lubGluZVN0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZ0xlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nUmlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nVG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsU25hcEFsaWduPzogU2Nyb2xsU25hcEFsaWduX1N0eWxlVHlwZTtcclxuICAgIHNjcm9sbFNuYXBTdG9wPzogU2Nyb2xsU25hcFN0b3BfU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsU25hcFR5cGU/OiBTY3JvbGxTbmFwVHlwZV9TdHlsZVR5cGU7XHJcbiAgICBzaGFwZUltYWdlVGhyZXNob2xkPzogQ3NzTnVtYmVyO1xyXG4gICAgc2hhcGVNYXJnaW4/OiBDc3NMZW5ndGg7XHJcbiAgICBzaGFwZU91dHNpZGU/OiBTaGFwZU91dHNpZGVfU3R5bGVUeXBlO1xyXG4gICAgc2hhcGVSZW5kZXJpbmc/OiBTaGFwZVJlbmRlcmluZ19TdHlsZVR5cGU7XHJcbiAgICBzdG9wQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIHN0b3BPcGFjaXR5PzogQ3NzTnVtYmVyO1xyXG4gICAgc3Ryb2tlPzogQ3NzQ29sb3I7XHJcbiAgICBzdHJva2VEYXNoYXJyYXk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlRGFzaG9mZnNldD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VMaW5lY2FwPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZUxpbmVqb2luPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZU1pdGVybGltaXQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlT3BhY2l0eT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VXaWR0aD86IERlZmF1bHRTdHlsZVR5cGU7XHJcblxyXG4gICAgdGFiU2l6ZT86IENzc0xlbmd0aDtcclxuICAgIHRhYmxlTGF5b3V0PzogVGFibGVMYXlvdXRfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEFsaWduPzogVGV4dEFsaWduX1N0eWxlVHlwZTtcclxuICAgIHRleHRBbGlnbkxhc3Q/OiBUZXh0QWxpZ25MYXN0X1N0eWxlVHlwZTtcclxuICAgIHRleHRBbmNob3I/OiBUZXh0QW5jaG9yX1N0eWxlVHlwZTtcclxuICAgIHRleHRDb21iaW5lVXByaWdodD86IFRleHRDb21iaW5lVXByaWdodF9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbj86IFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRleHREZWNvcmF0aW9uQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIHRleHREZWNvcmF0aW9uTGluZT86IFRleHREZWNvcmF0aW9uTGluZV9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvblNraXBJbms/OiBUZXh0RGVjb3JhdGlvblNraXBJbmtfU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb25TdHlsZT86IFRleHREZWNvcmF0aW9uU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb25UaGlja25lc3M/OiBUZXh0RGVjb3JhdGlvblRoaWNrbmVzc19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RW1waGFzaXM/OiBUZXh0RW1waGFzaXNfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uPzogVGV4dEVtcGhhc2lzUG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdGV4dEVtcGhhc2lzU3R5bGU/OiBUZXh0RW1waGFzaXNTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0SW5kZW50PzogVGV4dEluZGVudF9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0SnVzdGlmeT86IFRleHRKdXN0aWZ5X1N0eWxlVHlwZTtcclxuICAgIHRleHRLYXNoaWRhPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHRleHRLYXNoaWRhU3BhY2U/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgdGV4dE9yaWVudGF0aW9uPzogVGV4dE9yaWVudGF0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRleHRPdmVyZmxvdz86IFRleHRPdmVyZmxvd19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0U2hhZG93PzogVGV4dFNoYWRvd19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0U2l6ZUFkanVzdD86IFRleHRTaXplQWRqdXN0X1N0eWxlVHlwZTtcclxuICAgIHRleHRUcmFuc2Zvcm0/OiBUZXh0VHJhbnNmb3JtX1N0eWxlVHlwZTtcclxuICAgIHRleHRVbmRlcmxpbmVQb3NpdGlvbj86IFRleHRVbmRlcmxpbmVQb3NpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0b3A/OiBDc3NMZW5ndGg7XHJcbiAgICB0b3VjaEFjdGlvbj86IFRvdWNoQWN0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zZm9ybT86IFRyYW5zZm9ybV9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2Zvcm1Cb3g/OiBUcmFuc2Zvcm1Cb3hfU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNmb3JtT3JpZ2luPzogVHJhbnNmb3JtT3JpZ2luX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zZm9ybVN0eWxlPzogVHJhbnNmb3JtU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNpdGlvbj86IFRyYW5zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNpdGlvbkRlbGF5PzogT25lT3JNYW55PENzc1RpbWU+O1xyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPzogT25lT3JNYW55PENzc1RpbWU+O1xyXG4gICAgdHJhbnNpdGlvblByb3BlcnR5PzogVHJhbnNpdGlvblByb3BlcnR5X1N0eWxlVHlwZTtcclxuICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbj86IFRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2xhdGU/OiBUcmFuc2xhdGVfU3R5bGVUeXBlO1xyXG5cclxuICAgIHVuaWNvZGVCaWRpPzogVW5pY29kZUJpZGlfU3R5bGVUeXBlO1xyXG4gICAgdXNlclNlbGVjdD86IFVzZXJTZWxlY3RfU3R5bGVUeXBlO1xyXG5cclxuICAgIHZlcnRpY2FsQWxpZ24/OiBWZXJ0aWNhbEFsaWduX1N0eWxlVHlwZTtcclxuICAgIHZpc2liaWxpdHk/OiBWaXNpYmlsaXR5X1N0eWxlVHlwZTtcclxuICAgIHZlY3RvckVmZmVjdD86IFZlY3RvckVmZmVjdF9TdHlsZVR5cGU7XHJcblxyXG4gICAgd2hpdGVTcGFjZT86IFdoaXRlU3BhY2VfU3R5bGVUeXBlO1xyXG4gICAgd2lkb3dzPzogQ3NzTnVtYmVyO1xyXG4gICAgd2lkdGg/OiBDc3NMZW5ndGg7XHJcbiAgICB3aWxsQ2hhbmdlPzogV2lsbENoYW5nZV9TdHlsZVR5cGU7XHJcbiAgICB3b3JkQnJlYWs/OiBXb3JkQnJlYWtfU3R5bGVUeXBlO1xyXG4gICAgd29yZFNwYWNpbmc/OiBXb3JkU3BhY2luZ19TdHlsZVR5cGU7XHJcbiAgICB3cml0aW5nTW9kZT86IFdyaXRpbmdNb2RlX1N0eWxlVHlwZTtcclxuXHJcbiAgICB6SW5kZXg/OiBaSW5kZXhfU3R5bGVUeXBlO1xyXG4gICAgem9vbT86IFpvb21fU3R5bGVUeXBlO1xyXG5cclxuICAgIC8vIHdlYmtpdEJvcmRlckltYWdlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdEJveERpcmVjdGlvbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRCb3hPcmllbnQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uQnJlYWtBZnRlcj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5CcmVha0JlZm9yZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5CcmVha0luc2lkZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5Db3VudD86IENvbHVtbkNvdW50U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uR2FwPzogU2luZ2xlR2FwU3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uUnVsZT86IENvbHVtblJ1bGVTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5SdWxlQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIC8vIHdlYmtpdENvbHVtblJ1bGVTdHlsZT86IENvbHVtblJ1bGVTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5SdWxlV2lkdGg/OiBCb3JkZXJMZW5ndGhTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5TcGFuPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbldpZHRoPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbnM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0TGluZUNsYW1wPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdFRhcEhpZ2hsaWdodENvbG9yPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdFVzZXJNb2RpZnk/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0VXNlclNlbGVjdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRXcml0aW5nTW9kZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcblxyXG4gICAgLy8gbXNDb250ZW50Wm9vbUNoYWluaW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21MaW1pdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29tTGltaXRNYXg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbUxpbWl0TWluPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21TbmFwPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21TbmFwUG9pbnRzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21TbmFwVHlwZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29taW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zRmxvd0Zyb20/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNGbG93SW50bz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0ZvbnRGZWF0dXJlU2V0dGluZ3M/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkQ29sdW1uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZENvbHVtbkFsaWduPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZENvbHVtblNwYW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkQ29sdW1ucz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRSb3c/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkUm93QWxpZ24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkUm93U3Bhbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRSb3dzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSGlnaENvbnRyYXN0QWRqdXN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSHlwaGVuYXRlTGltaXRDaGFycz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0h5cGhlbmF0ZUxpbWl0TGluZXM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIeXBoZW5hdGVMaW1pdFpvbmU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIeXBoZW5zPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSW1lQWxpZ24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNPdmVyZmxvd1N0eWxlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsQ2hhaW5pbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxMaW1pdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0WE1heD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0WE1pbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0WU1heD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0WU1pbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFJhaWxzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsU25hcFBvaW50c1g/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwUG9pbnRzWT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFNuYXBUeXBlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsU25hcFg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwWT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFRyYW5zbGF0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVGV4dENvbWJpbmVIb3Jpem9udGFsPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVGV4dFNpemVBZGp1c3Q/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNUb3VjaEFjdGlvbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1RvdWNoU2VsZWN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVXNlclNlbGVjdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1dyYXBGbG93PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zV3JhcE1hcmdpbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1dyYXBUaHJvdWdoPzogRGVmYXVsdFN0eWxlVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0cmluZ1N0eWxlc2V0IHR5cGUgbWFwcyBDU1MgcHJvcGVydGllcyBpbmNsdWRpbmcgY3VzdG9tIHByb3BlcnRpZXMgdG8gdGhlIHN0cmluZyB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHJpbmdTdHlsZXNldCA9IHsgW0s6IHN0cmluZ106IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV4dGVuZGVkU3R5bGVzZXQgdHlwZSBtYXBzIGFsbCBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBbW0lDc3NTdHlsZXNldF1dIGludGVyZmFjZSB0byB0aGVcclxuICogXCJleHRlbmRlZFwiIHZlcnNpb25zIG9mIHRoZWlyIHR5cGVzLiBUaGVzZSBleHRlbmRlZCB0eXBlcyBhcmUgZGVmaW5lZCBieSBhZGRpbmcgYmFzaWMga2V5d29yZHNcclxuICogKGUuZy4gXCJ1bnNldFwiLCBcImluaXRpYWxcIiwgZXRjLikgYXMgd2VsbCBhcyBbW1N0cmluZ1Byb3h5XV0gYW5kIFtbSUN1c3RvbVZhcl1dIHRvIHRoZSB0eXBlIHRoYXRcclxuICogaXMgZGVmaW5lZCBpbiB0aGUgSUNzc1N0eWxlc2V0IGludGVyZmFjZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkU3R5bGVzZXQgPSB7IFtLIGluIGtleW9mIElDc3NTdHlsZXNldF0/OiBFeHRlbmRlZFByb3A8SUNzc1N0eWxlc2V0W0tdPiB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1ZhclRlbXBsYXRlcyBpbnRlcmZhY2UgbWFwcyB0ZW1wbGF0ZSBuYW1lcyB0byB0aGUgdHlwZXMsIHdoaWNoIGNhbiBiZSB1c2VkIGZvclxyXG4gKiBkZWZpbmluZyBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKGEuay5hLiB2YXJpYWJsZXMpLiBOb3JtYWxseSwgdmFyaWFibGVzIGFyZSBkZWZpbmVkIHVzaW5nIHRoZVxyXG4gKiBuYW1lcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBhbmQgdGhlaXIgdHlwZSBpcyBkZXRlcm1pbmVkIGJ5IHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHkgaW4gdGhlXHJcbiAqIElDc3NTdHlsZXNldCBpbnRlcmZhY2UuIFNvbWV0aW1lcywgaG93ZXZlciwgdGhlcmUgaXMgYSBuZWVkIHRvIGRlZmluZSB2YXJpYWJsZXMgb2Ygc29tZSBvdGhlclxyXG4gKiB0eXBlcywgZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHN1aXRhYmxlIHN0eWxlIHByb3BlcnR5LiBUaGUgSUNzc1ZhclRlbXBsYXRlcyBpbnRlcmZhY2UgcHJvdmlkZXNcclxuICogbWFueSBiYXNpYyB0eXBlcyBhbmQgaXQgY2FuIGFsc28gYmUgZXh0ZW5kZWQgdXNpbmcgdGhlIFR5cGVTY3JpcHQncyBtb2R1bGUgYXVnbWVudGF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzVmFyVGVtcGxhdGVzIGV4dGVuZHMgSUNzc1N0eWxlc2V0XHJcbntcclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgdmFsdWUgb2YgYW55IHR5cGUgKi9cclxuICAgIFwiYW55XCI/OiBhbnk7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIHN0cmluZyB2YWx1ZSAqL1xyXG4gICAgQ3NzU3RyaW5nPzogc3RyaW5nO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPG51bWJlcj5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzTnVtYmVyPzogQ3NzTnVtYmVyO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPGxlbmd0aD5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzTGVuZ3RoPzogQ3NzTGVuZ3RoO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYW4gYDxhbmdsZT5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzQW5nbGU/OiBDc3NBbmdsZTtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDx0aW1lPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NUaW1lPzogQ3NzVGltZTtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxyZXNvbHV0aW9uPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NSZXNvbHV0aW9uPzogQ3NzUmVzb2x1dGlvbjtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxmcmVxdWVuY3k+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc0ZyZXF1ZW5jeT86IENzc0ZyZXF1ZW5jeTtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxwZXJjZW50PmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NQZXJjZW50PzogQ3NzUGVyY2VudDtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgUG9pbnQgdmFsdWUgKi9cclxuICAgIENzc1BvaW50PzogQ3NzUG9pbnQ7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8cG9zaXRpb24+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1Bvc2l0aW9uPzogQ3NzUG9zaXRpb247XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGBSYWRpdXNgIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzUmFkaXVzPzogQ3NzUmFkaXVzO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPGNvbG9yPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NDb2xvcj86IENzc0NvbG9yO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYW4gYDxpbWFnZT5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzSW1hZ2U/OiBDc3NJbWFnZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclRlbXBsYXRlTmFtZSB0eXBlIGRlZmluZXMgdGhlIGtleXMgKHN0cmluZ3MpIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGVtcGxhdGVzIGZvciBkZWZpbmluZ1xyXG4gKiBjdXN0b20gQ1NTIHByb3BlcnRpZXMgdXNpbmcgdGhlIFtbJHZhcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVmFyVGVtcGxhdGVOYW1lID0ga2V5b2YgSUNzc1ZhclRlbXBsYXRlcztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWYXJUZW1wbGF0ZXMgdHlwZSBtYXBzIGFsbCB0ZW1wbGF0ZSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIFtbSUNzc1ZhclRlbXBsYXRlc11dXHJcbiAqIGludGVyZmFjZSB0byB0aGUgXCJleHRlbmRlZFwiIHZlcnNpb25zIG9mIHRoZWlyIHR5cGVzLiBUaGVzZSBleHRlbmRlZCB0eXBlcyBhcmUgZGVmaW5lZCB1c2luZ1xyXG4gKiB0aGUgW1tFeHRlbmRlZF1dIGdlbmVyaWMgdHlwZSwgd2hpY2ggYWRkcyBiYXNpYyBrZXl3b3JkcyAoZS5nLiBcInVuc2V0XCIsIFwiaW5pdGlhbFwiLCBldGMuKSBhc1xyXG4gKiB3ZWxsIGFzIFtbU3RyaW5nUHJveHldXSBhbmQgW1tJQ3VzdG9tVmFyXV0gdG8gdGhlIHR5cGUgdGhhdCBpcyBkZWZpbmVkIGluIHRoZSBJQ3NzVmFyVGVtcGxhdGVzXHJcbiAqIGludGVyZmFjZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFZhclRlbXBsYXRlcyA9IHsgW0sgaW4gVmFyVGVtcGxhdGVOYW1lXTogRXh0ZW5kZWRQcm9wPElDc3NWYXJUZW1wbGF0ZXNbS10+IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBWYXJWYWx1ZVR5cGUgZ2VuZXJpYyB0eXBlIGRlZmluZXMgdGhlIHR5cGUgb2YgdGhlIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBjdXN0b21cclxuICogQ1NTIHByb3BlcnR5IHVzaW5nIHRoZSBnZW5lcmljIHR5cGUgSyBhcyBpdHMgdGVtcGxhdGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWYXJWYWx1ZVR5cGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4gPSBWYXJUZW1wbGF0ZXNbS107XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3VzdG9tVmFyU3R5bGVUeXBlIHR5cGUgcmVwcmVzZW50cyBhIGN1c3RvbSBDU1MgcHJvcGVydHkgbmFtZSBhbmQgdmFsdWUgdGhhdCBhcmUgdXNlZCB0b1xyXG4gKiBkZWZpbmUgY3VzdG9tIHByb3BlcnRpZXMgaW4gYSBTdHlsZXNldC4gVGhpcyBvYmplY3QgaXMgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxyXG4gKiBgLS1gIHByb3BlcnR5IG9mIHRoZSBTdHlsZXNldCB0eXBlLlxyXG4gKiBcclxuICogQ3VzdG9tVmFyU3R5bGVUeXBlIG9iamVjdHMgc2hvdWxkIGJlIG1vc3RseSB1c2VkIHRvIG92ZXJyaWRlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgaGF2ZVxyXG4gKiBwcmV2aW91c2x5IGJlZW4gZGVmaW5lZCBhdCB0aGUgdG9wLWxldmVsIHVzaW5nIHRoZSAkdmFyIGZ1bmN0aW9uLiBUaGF0IHdheSB5b3UgY2FuIGhhdmUgYVxyXG4gKiBcImdsb2JhbFwiIHZhbHVlIG9mIGEgY3VzdG9tIHByb3BlcnR5IGFuZCBhc3NpZ24gYSBkaWZmZXJlbnQgdmFsdWUgdG8gaXQgdW5kZXIgYSBjZXJ0YWluIENTU1xyXG4gKiBzZWxlY3Rvci5cclxuICogXHJcbiAqIFRoZSB2YWx1ZXMgb2YgdGhlIHR5cGUgY2FuIGJlIHNwZWNpZmllZCBhcyBlaXRoZXIgYSB0d28taXRlbSBvciBhIHRocmVlLWl0ZW0gYXJyYXkuIFRoZVxyXG4gKiB0d28taXRlbSBhcnJheSBpcyB1c2VkIHdpdGggYSBwcmV2aW91c2x5IGRlZmluZWQgY3VzdG9tIENTUyBwcm9wZXJ0eSByZXByZXNlbnRlZCBieSBhbiBJVmFyUnVsZVxyXG4gKiBvYmplY3Q6XHJcbiAqIC0gVGhlIGZpcnN0IGl0ZW0gaXMgdGhlIElWYXJSdWxlIG9iamVjdC5cclxuICogLSBUaGUgc2Vjb25kIGl0ZW0gaXMgdGhlIHZhbHVlXHJcbiAqIFxyXG4gKiBUaGUgdGhyZWUtaXRlbSBhcnJheSBhbGxvd3MgZGlyZWN0bHkgc3BlY2lmeWluZyB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eSBuYW1lOlxyXG4gKiAtIFRoZSBmaXJzdCBpdGVtIGlzIGEgc3RyaW5nIC0gdGhlIG5hbWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuIElmIHRoZSBuYW1lIGlzIG5vdCBwcmVmaXhlZFxyXG4gKiB3aXRoIHR3byBkYXNoZXMgdGhleSB3aWxsIGJlIGFkZGVkIGF1dG9tYXRpY2FsbHkuXHJcbiAqIC0gVGhlIHNlY29uZCBpdGVtIGlzIHRoZSBuYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZVxyXG4gKiBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcbiAqIC0gVGhlIHRoaXJkIGl0ZW0gaXMgdGhlIHZhbHVlXHJcbiAqIFxyXG4gKiBVc2UgdGhlIEN1c3RvbVZhclN0eWxlVHlwZSB0eXBlIGluIHRoZSBmb2xsb3dpbmcgbWFubmVyOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlcyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvblxyXG4gKiB7XHJcbiAqICAgICAvLyBkZWZpbmUgZ2xvYmFsIGN1c3RvbSBDU1MgcHJvcGVydHkgYW5kIHJlLWRlZmluZSBpdHMgdmFsdWUgdW5kZXIgXCJicm93blwiIGNsYXNzLlxyXG4gKiAgICAgbWFpbkNvbG9yID0gJHZhciggXCJjb2xvclwiLCBcImJsYWNrXCIpO1xyXG4gKiAgICAgYnJvd24gPSAkY2xhc3MoeyBcIi0tXCI6IFsgW3RoaXMubWFpbkNvbG9yLCBcImJyb3duXCJdIF0gfSlcclxuXHJcbiAqICAgICAvLyBkaXJlY3RseSBkZWZpbmUgY3VzdG9tIENTUyBwcm9wZXJ0eSB1bmRlciBcImJsdWVcIiBjbGFzcy5cclxuICogICAgIGJsdWUgPSAkY2xhc3MoeyBcIi0tXCI6IFsgW1wiZGlmZmVyZW50LWNvbG9yXCIsIFwiY29sb3JcIiwgXCJibHVlXCJdIF0gfSlcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKiBcclxuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHRoZSBmb2xsb3dpbmcgQ1NTOlxyXG4gKiBcclxuICogYGBgY3NzXHJcbiAqIDpyb290IHsgLS1NeVN0eWxlc19tYWluQ29sb3I6IFwiYmxhY2tcIjsgfVxyXG4gKiAuYnJvd24geyAtLU15U3R5bGVzX21haW5Db2xvcjogXCJicm93blwiOyB9XHJcbiAqIC5ibHVlIHsgLS1kaWZmZXJlbnQtb2xvcjogXCJibHVlXCI7IH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDdXN0b21WYXJfU3R5bGVUeXBlPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWUgPSBhbnk+ID0gXHJcbiAgICBbSVZhclJ1bGU8Sz4sIFZhclZhbHVlVHlwZTxLPl0gfCBbc3RyaW5nLCBLLCBWYXJWYWx1ZVR5cGU8Sz5dXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhIGNvbGxlY3Rpb24gb2Ygc3R5bGUgcHJvcGVydGllcyBhbmQgdGhlaXIgdmFsdWVzLiBJbiBhZGRpdGlvbiB0byB0aGVcclxuICogcHJvcGVydGllcyByZXByZXNlbnRpbmcgdGhlIHN0YW5kYXJkIENTUyBzdHlsZXMsIHRoaXMgdHlwZSBhbHNvIGluY2x1ZGVzIHRoZSBcIi0tXCIgcHJvcGVydHksXHJcbiAqIHdoaWNoIGlzIGFuIGFycmF5IG9mIEN1c3RvbVZhclN0eWxlVHlwZSBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU3R5bGVzZXQgPSBFeHRlbmRlZFN0eWxlc2V0ICZcclxuICAgIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTcGVjaWFsIHByb3BlcnR5IFwiLS1cIiBzcGVjaWZpZXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBDdXN0b21WYXJTdHlsZVR5cGUgb2JqZWN0cyBlYWNoXHJcbiAgICAgICAgICogcmVwcmVzZW50aW5nIGEgZGVmaW5pdGlvbiBvZiBhIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgXCItLVwiPzogQ3VzdG9tVmFyX1N0eWxlVHlwZVtdO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN1cHBvcnRzIHF1ZXJ5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhIHNpbmdsZSBzZXQgb2Ygc3R5bGVzIGFzIHBhcnQgb2YgdGhlIEBzdXBwb3J0cyBydWxlcy4gVGhlIHN0eWxlcyBpbiB0aGVcclxuICogc3R5bGVzZXQgYXJlIGNvbWJpbmVkIHdpdGggdGhlIFwiYW5kXCIgb3BlcmF0b3IuIFRoZSBlbnRpcmUgc3R5bGVzZXQgY2FuIGJlIG5lZ2F0ZWQsIHdoaWNoIHdpbGxcclxuICogcmVzdWx0IGluIHBsYWNpbmcgdGhlIFwibm90XCIgb3BlcmF0b3IgdGhhdCB3aWxsIGFjdCBvbiBhbGwgc3R5bGVzIGluIHRoZSBxdWVyeS5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB1c2luZyBQdXJlU3R5bGVzZXQgb2JqZWN0IGRvZXNuJ3QgYWxsb3cgZm9yIGNoZWNraW5nIHdoZXRoZXIgdHdvIG9yIG1vcmUgdmFsdWVzIG9mXHJcbiAqIGEgZ2l2ZW4gcHJvcGVydHkgYXJlIHN1cHBvcnRlZC4gRm9yIGV4YW1wbGUsIGFsdGhvdWdoIHdlIGNhbiB0ZXN0IHRoYXQgdGhlIFwiZGlzcGxheVwiIHByb3BlcnR5XHJcbiAqIHN1cHBvcnRzIHRoZSBcImZsZXhcIiB2YWx1ZSwgd2UgY2Fubm90IGNoZWNrIHdoZXRoZXIgYm90aCBcImZsZXhcIiBhbmQgXCJncmlkXCIgdmFsdWVzIGFyZSBzdXBwb3J0ZWQuXHJcbiAqIFRvIGNoZWNrIHN1Y2ggY3JpdGVyaWEgeW91IG11c3Qgc3BlY2lmeSB0aGUgcXVlcnkgYXMgYSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVTdXBwb3J0c1F1ZXJ5ID0gc3RyaW5nIHwgRXh0ZW5kZWRTdHlsZXNldCAmIHsgJG5lZ2F0ZT86IGJvb2xlYW47IH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBvbmUgb3IgbW9yZSBxdWVyaWVzIGFzIHBhcnQgb2YgdGhlIEBzdXBwb3J0cyBydWxlLiBXaGlsZSBtdWx0aXBsZSBxdWVyaWVzIGluXHJcbiAqIGFuIGFycmF5IGFyZSBjb21iaW5lZCB3aXRoIHRoZSBcIm9yXCIgb3BlcmF0b3IsIHRoZSBzdHlsZXMgd2l0aGluIGVhY2ggc3R5bGVzZXQgYXJlIGNvbWJpbmVkIHdpdGhcclxuICogdGhlIFwiYW5kXCIgb3BlcmF0b3IuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdXBwb3J0c1F1ZXJ5ID0gU2luZ2xlU3VwcG9ydHNRdWVyeSB8IFNpbmdsZVN1cHBvcnRzUXVlcnlbXTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkLCBJR2VuZXJpY1Byb3h5LCBDc3NOdW1iZXIsIENzc011bHRpTnVtYmVyLCBJTnVtYmVyQmFzZU1hdGgsXHJcbiAgICBDc3NQb3NpdGlvbiwgTXVsdGlDc3NQb3NpdGlvbiwgTnVtYmVyQmFzZSwgTXVsdGlOdW1iZXJCYXNlLFxyXG4gICAgQ3NzTGVuZ3RoLCBDc3NNdWx0aUxlbmd0aCwgQ3NzQW5nbGUsIENzc011bHRpQW5nbGUsIENzc1RpbWUsIENzc011bHRpVGltZSxcclxuICAgIENzc1Jlc29sdXRpb24sIENzc011bHRpUmVzb2x1dGlvbiwgQ3NzRnJlcXVlbmN5LCBDc3NNdWx0aUZyZXF1ZW5jeSxcclxuICAgIENzc1BlcmNlbnQsIENzc011bHRpUGVyY2VudCwgSUNzc0xlbmd0aE1hdGgsXHJcbiAgICBJQ3NzQW5nbGVNYXRoLCBJQ3NzUGVyY2VudE1hdGgsIElDc3NGcmVxdWVuY3lNYXRoLCBJQ3NzUmVzb2x1dGlvbk1hdGgsIElDc3NUaW1lTWF0aCxcclxuICAgIE51bWJlclR5cGUsIExlbmd0aFR5cGUsIFBlcmNlbnRUeXBlLCBBbmdsZVR5cGUsIFRpbWVUeXBlLCBSZXNvbHV0aW9uVHlwZSwgRnJlcXVlbmN5VHlwZVxyXG59IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpY3MuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGRhc2hlLWNhc2UgdG8gY2FtZWxDYXNlLCBlLmcuIGZvbnQtc2l6ZSB0byBmb250U2l6ZS5cclxuICogQHBhcmFtIGRhc2hcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2UsIGUuZy4gZm9udFNpemUgdG8gZm9udC1zaXplLlxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVZhbHVlQ29udmVydE9wdGlvbnMgaW50ZXJmYWNlIGRlZmluZXMgb3B0aW9uYWwgZnVuY3Rpb25zIHRoYXQgY29udmVydHZhbHVlcyBvZiBkaWZmZXJudFxyXG4gKiB0eXBlcyB0byBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFsdWVDb252ZXJ0T3B0aW9uc1xyXG57XHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWRcclxuICAgIGZyb21OdWxsPzogKCB2YWw6IG51bGwgfCB1bmRlZmluZWQpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYSBzdHJpbmcuIFRoaXMgYWxsb3dzIHRyYW5zZm9ybWluZyBvbmUgc3RyaW5nIHRvIGFub3RoZXIuXHJcbiAgICBmcm9tU3RyaW5nPzogKCB2YWw6IHN0cmluZykgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cclxuICAgIGZyb21Cb29sPzogKHZhbDogYm9vbGVhbikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIG51bWJlclxyXG4gICAgZnJvbU51bWJlcj86ICh2YWw6IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBhcnJheVxyXG4gICAgZnJvbUFycmF5PzogKHZhbDogYW55W10pID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdmFsdWUgaXMgYW4gb2JqZWN0XHJcbiAgICBmcm9tT2JqPzogKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHR5cGUtc3BlY2lmaWMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWRcclxuICAgIGZyb21Bbnk/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgdG8gY29udmVydCBhcnJheSBpdGVtcyBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFyckl0ZW1GdW5jPzogKHY6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIFNlcGFyYXRvciBmb3IgYXJyYXkgaXRlbXMgLSB1c2VkIG9ubHkgaWYgZnJvbUFycmF5IGlzIG5vdCBkZWZpbmVkXHJcbiAgICBhcnJTZXA/OiBzdHJpbmc7XHJcblxyXG4gICAgLy8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgdGhlc2UgYXJlIGFyZ3VtZW50cyB0byBwYXNzIHdoZW4gaW52b2tpbmcgaXRcclxuICAgIGZ1bmNBcmdzPzogYW55W107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgdmFsdWUgb2YgYW4gYXJiaXRyYXJ5IHR5cGUgdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGUgb3B0aW9uYWwgb3B0aW9ucyBwYXJhbWV0ZXJcclxuICogY2FuIGRlZmluZSBob3cgc3BlY2lmaWMgdHlwZXMgYXJlIGNvbnZlcnRlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWwyc3RyKCB2YWw6IGFueSwgb3B0aW9ucz86IElWYWx1ZUNvbnZlcnRPcHRpb25zKTogc3RyaW5nXHJcbntcclxuICAgaWYgKCFvcHRpb25zKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHN0YW5kYXJkIHByb2Nlc3Npbmc6XHJcbiAgICAgICAgLy8gLSBudWxsL3VuZGVmaW5lZCBiZWNvbWUgZW1wdHkgc3RyaW5nLlxyXG4gICAgICAgIC8vIC0gY2FsbCB2YWx1ZVRvU3RyaW5nIChwcm94eSBvYmplY3RzKSBpZiBleGlzdC5cclxuICAgICAgICAvLyAtIGZ1bmN0aW9uOiBjYWxsIHdpdGhvdXQgcGFyYW1ldGVycy5cclxuICAgICAgICAvLyAtIGV2ZXJ5dGhpbmcgZWxzZTogY2FsbCB0b1N0cmluZygpLlxyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2YWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbCgpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwudmFsdWVUb1N0cmluZyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLnZhbHVlVG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAvLyBwcm9jZXNzaW5nIHdpdGggb3B0aW9ucy4gRm9yIGFsbCB0eXBlcyBleGNlcHQgbnVsbCBhbmQgc3RyaW5nLCBpZiB0aGUgdHlwZS1zcGVjaWZpY1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGlzIG5vdCBkZWZpbmVkLCBjYWxsIGZyb21BbnkgaWYgZGVmaW5lZC5cclxuICAgICAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21OdWxsID8gb3B0aW9ucy5mcm9tTnVsbCggdmFsKSA6IFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbVN0cmluZyA/IG9wdGlvbnMuZnJvbVN0cmluZyggdmFsKSA6IHZhbDtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tTnVtYmVyID8gb3B0aW9ucy5mcm9tTnVtYmVyKCB2YWwpIDogb3B0aW9ucy5mcm9tQW55ID8gb3B0aW9ucy5mcm9tQW55KCB2YWwpIDogdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsMnN0ciggb3B0aW9ucy5mdW5jQXJncyA/IHZhbCggLi4ub3B0aW9ucy5mdW5jQXJncykgOiB2YWwoKSk7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZnJvbUFycmF5KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFycmF5KCB2YWwpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBzZXBhcmF0b3IgPSBvcHRpb25zLmFyclNlcCAhPSBudWxsID8gb3B0aW9ucy5hcnJTZXAgOiBcIiBcIjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnIyc3RyKCB2YWwsIG9wdGlvbnMuYXJySXRlbUZ1bmMgfHwgb3B0aW9ucy5mcm9tQW55IHx8IHVuZGVmaW5lZCwgc2VwYXJhdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwudmFsdWVUb1N0cmluZyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC52YWx1ZVRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbU9iailcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21PYmooIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbUFueSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21BbnkoIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21Cb29sID8gb3B0aW9ucy5mcm9tQm9vbCggdmFsKSA6IG9wdGlvbnMuZnJvbUFueSA/IG9wdGlvbnMuZnJvbUFueSggdmFsKSA6IHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKG9wdGlvbnMuZnJvbUFueSlcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW4gYXJyYXkgb2YgdGhlIGdpdmVuIHR5cGV0byBhIHNpbmdsZSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIHNlcGFyYXRvci5cclxuICogRWxlbWVudHMgb2YgdGhlIGFycmF5IGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXJyMnN0ciggdmFsOiBhbnlbXSwgZnVuYz86ICh2KSA9PiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuICF2YWwgfHwgdmFsLmxlbmd0aCA9PT0gMFxyXG4gICAgICAgID8gXCJcIlxyXG4gICAgICAgIDogdmFsLmZpbHRlciggeCA9PiB4ICE9IG51bGwpLm1hcCggeSA9PiBmdW5jID8gZnVuYyh5KSA6IHZhbDJzdHIoIHkpKS5qb2luKCBzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcgaXMgYSB0YWcgZnVuY3Rpb24gaGVscGVyIHRoYXQgY29udmVydHMgdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRoXHJcbiAqIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvIGNvbnZlcnQgcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogYW55W10sXHJcbiAgICBjb252ZXJ0RnVuYz86ICggdjogYW55KSA9PiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gbnVtYmVyIG9mIHBhcmFtZXRlcnMgaXMgYWx3YXlzIDEgbGVzcyB0aGFuIHRoZSBudW1iZXIgb2Ygc3RyaW5nIHBhcnRzXHJcbiAgICBsZXQgcGFyYW1zTGVuID0gcGFyYW1zLmxlbmd0aDtcclxuICAgIGlmIChwYXJhbXNMZW4gPT09IDApXHJcbiAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xyXG5cclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcGFyYW1zTGVuOyBpKyspXHJcbiAgICAgICAgcyArPSBwYXJ0c1tpXSArIChjb252ZXJ0RnVuYyA/IGNvbnZlcnRGdW5jKCBwYXJhbXNbaV0pIDogdmFsMnN0ciggcGFyYW1zW2ldKSk7XHJcblxyXG4gICAgLy8gYWRkIHRoZSBsYXN0IHBhcnRcclxuICAgIHJldHVybiBzICsgcGFydHNbcGFyYW1zTGVuXTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgb2YgZnVuY3Rpb25zIHRoYXQgY29udmVydCBhIG51bWJlciB0byBhIHN0cmluZyAqL1xyXG50eXBlIENvbnZlcnROdW1iZXJGdW5jVHlwZSA9IChuOiBudW1iZXIpID0+IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgc2luZ2xlIG51bWVyaWMgdmFsdWUgdG8gYSBDU1Mgc3RyaW5nIG9wdGlvbmFsbHkgYXBwZW5kaW5nIHVuaXRzIHRoYXQgY2FuIGJlIGRpZmZlcmVudFxyXG4gKiBmb3IgaW50ZWdlciBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycy5cclxuICogQHBhcmFtIG4gTnVtYmVyIHRvIGNvbnZlcnQgdG8gc3RyaW5nIHJlcHJlc2VudGF0aW9uLlxyXG4gKiBAcGFyYW0gaW50VW5pdCBVbml0cyB0byBhcHBlbmQgaWYgdGhlIG51bWJlciBpcyBpbnRlZ2VyLlxyXG4gKiBAcGFyYW0gZmxvYXRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGZsb2F0aW5nIHBvaW50LlxyXG4gKi9cclxuZnVuY3Rpb24gbnVtYmVyVG9TdHJpbmcoIG46IG51bWJlciwgaW50VW5pdDogc3RyaW5nID0gXCJcIiwgZmxvYXRVaW50OiBzdHJpbmcgPSBcIlwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKG4pID8gIG4gKyBpbnRVbml0IDogbiArIGZsb2F0VWludDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTnVtYmVyIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZS5cclxuICogQHBhcmFtIGNvbnZlcnRGdW5jIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBudW1iZXJCYXNlVG9TdHJpbmc8VCBleHRlbmRzIHN0cmluZz4oIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7IGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgQ3NzTnVtYmVyIG9yIGFycmF5IG9mIENzc051bWJlciBvYmplY3RzIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpbmdsZS0gb3IgbXVsdGktbnVtYmVyIHN0eWxlIHZhbHVlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICogQHBhcmFtIHNlcGFyYXRvciBTdHJpbmcgdG8gdXNlIHRvIHNlcGFyYXRlIG11bHRpcGxlIHZhbHVlcy5cclxuICovXHJcbmZ1bmN0aW9uIG11bHRpU3R5bGVUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LFxyXG4gICAgICAgICAgICAgICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbnZlcnRGdW5jLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiB2ID0+IG51bWJlckJhc2VUb1N0cmluZyggdiwgY29udmVydEZ1bmMpLFxyXG4gICAgICAgIGFyclNlcDogc2VwYXJhdG9yXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIG1hdGhGdW5jIGZ1bmN0aW9uIHJldHVybnMgb25lIG9mIHRoZSBtYXRoZW1hdGljIENTUyBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIG9yIG1vcmVcclxuICogcGFyYW1ldGVycyB3aG9zZSB0eXBlIGlzIGRlcml2ZWQgZnJvbSBOdW1iZXJCYXNlPFQ+LlxyXG4gKi9cclxuZnVuY3Rpb24gbWF0aEZ1bmM8VCBleHRlbmRzIHN0cmluZz4oIG5hbWU6IHN0cmluZywgcGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdLFxyXG4gICAgY29udmVydEZ1bmM/OiBDb252ZXJ0TnVtYmVyRnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7bXVsdGlTdHlsZVRvU3RyaW5nKCBwYXJhbXMsIGNvbnZlcnRGdW5jLCBcIixcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBjYWxjRnVuYyBmdW5jdGlvbiByZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIGNhbGMoKSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjRnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggcGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYGNhbGMoJHt0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nKCBwYXJ0cywgcGFyYW1zLCAodjogYW55KSA9PiBudW1iZXJCYXNlVG9TdHJpbmcoIHYsIGNvbnZlcnRGdW5jKSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOdW1tYmVyQmFzZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIG51bWVyaWMgQ1NTIHR5cGVzLiBXaGVuIGFyZ3VtZW50cyBmb3IgdGhlc2UgZnVuY3Rpb25zIGFyZSBvZiB0aGUgbnVtYmVyIEphdmFTY3JpcHQgdHlwZSB0aGV5XHJcbiAqIGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyBieSBjYWxsaW5nIGEgZnVuY3Rpb24gc3BlY2lmaWVkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuICovXHJcbmNsYXNzIE51bWJlckJhc2VNYXRoPFQgZXh0ZW5kcyBzdHJpbmc+IGltcGxlbWVudHMgSU51bWJlckJhc2VNYXRoPFQ+XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBwcm90ZWN0ZWQgY29udmVydEZ1bmM6IENvbnZlcnROdW1iZXJGdW5jVHlwZSlcclxuICAgIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbnVtYmVyVG9TdHJpbmcgPSAobjogbnVtYmVyKTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydEZ1bmMoIG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdHlsZVRvU3RyaW5nID0gKHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtdWx0aVN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nID0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCB0aGlzLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtaW4oIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWluXCIsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1heCggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtYXhcIiwgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJjbGFtcFwiLCBbbWluLCBwcmVmLCBtYXhdLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsYyggZm9ybXVsYVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjYWxjRnVuYyggZm9ybXVsYVBhcnRzLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU51bWJlck1hdGhDbGFzcyBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIFwic3RhdGljXCIgc2lkZSBvZiBjbGFzc2VzIGRlcml2ZWQgZnJvbSB0aGVcclxuICogTnVtYmVyTWF0aCBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlckJhc2VNYXRoQ2xhc3M8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgICBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogc3RyaW5nO1xyXG5cclxuICAgIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxNdWx0aU51bWJlckJhc2U8VD4+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICBuZXcoKTogSU51bWJlckJhc2VNYXRoPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVW5pdGxlc3MgbnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NOdW1iZXJNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8bnVtYmVyPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzTnVtYmVyTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPE51bWJlclR5cGU+XHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBuLnRvU3RyaW5nKCk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpTnVtYmVyPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzTnVtYmVyTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NQZXJjZW50TWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHBlcmNlbnQ+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NQZXJjZW50TWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPFBlcmNlbnRUeXBlPiBpbXBsZW1lbnRzIElDc3NQZXJjZW50TWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiAoTnVtYmVyLmlzSW50ZWdlcihuKSA/IG4gOiBNYXRoLnJvdW5kKG4gKiAxMDApKSArIFwiJVwiOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpUGVyY2VudD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NQZXJjZW50TWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciB0byBzdHJpbmcgdXNpbmcgdGhlIGZvbGxvd2luZyBydWxlczpcclxuICogLSBpZiB0aGUgbnVtYmVyIGlzIGJldHdlZW4gLTEgYW5kIDEgKG5vbiBpbmNsdXNpdmUpLCBtdWx0aXBsaWVzIHRoZSBudW1iZXIgYW5kIGFwcGVuZHMgXCIlXCJcclxuICogLSBvdGhlcndpc2UsIGNvbnZlcnRzIHRoZSBudW1iZXIgdG8gc3RyaW5nIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1dGludHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5pdGxlc3NPclBlcmNlbnRUb1N0cmluZyggbjogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBuID49IDEgfHwgbiA8PSAtMSA/IG4udG9TdHJpbmcoKSA6IE1hdGgucm91bmQobiAqIDEwMCkgKyBcIiVcIjtcclxufVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBMZW5ndGhcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0xlbmd0aE1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxsZW5ndGg+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NMZW5ndGhNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8TGVuZ3RoVHlwZT4gaW1wbGVtZW50cyBJQ3NzTGVuZ3RoTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwicHhcIiwgXCJlbVwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlMZW5ndGg+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKSB9XHJcblxyXG4gICAgcHVibGljIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NMZW5ndGg+LCBtYXg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJR2VuZXJpY1Byb3h5PExlbmd0aFR5cGU+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1pbm1heFwiLCBbbWluLCBtYXhdLCBDc3NMZW5ndGhNYXRoLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQW5nbGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc0FuZ2xlTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGFuZ2xlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzQW5nbGVNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8QW5nbGVUeXBlPiBpbXBsZW1lbnRzIElDc3NBbmdsZU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcImRlZ1wiLCBcInR1cm5cIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUFuZ2xlPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGltZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzVGltZU1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDx0aW1lPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzVGltZU1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxUaW1lVHlwZT4gaW1wbGVtZW50cyBJQ3NzVGltZU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIm1zXCIsIFwic1wiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NUaW1lPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVRpbWU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzVGltZU1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVzb2x1dGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzUmVzb2x1dGlvbk1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxyZXNvbHV0aW9uPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzUmVzb2x1dGlvbk1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxSZXNvbHV0aW9uVHlwZT4gaW1wbGVtZW50cyBJQ3NzUmVzb2x1dGlvbk1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcImRwaVwiLCBcInhcIik7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUmVzb2x1dGlvbj4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlSZXNvbHV0aW9uPiwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1Jlc29sdXRpb25NYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZyZXF1ZW5jeVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzRnJlcXVlbmN5TWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGZyZXF1ZW5jZT4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0ZyZXF1ZW5jeU1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxGcmVxdWVuY3lUeXBlPiBpbXBsZW1lbnRzIElDc3NGcmVxdWVuY3lNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJIelwiLCBcImtIelwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NGcmVxdWVuY3k+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlGcmVxdWVuY3k+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NGcmVxdWVuY3lNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBwb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3Myc3RyKCB2YWw6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bGw6IHYgPT4gXCJcIixcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2LCBcIiBcIilcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcG9zaXRpb24gc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlQb3Myc3RyKCB2YWw6IEV4dGVuZGVkPE11bHRpQ3NzUG9zaXRpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHBvczJzdHIsXHJcbiAgICAgICAgYXJyU2VwOiBzZXBhcmF0b3JcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYmFzaWMgdHlwZXMgYW5kIGZ1bmN0aW9ucyB1c2VkIHRvIGRlZmluZSBDU1MgcHJvcGVydHkgdHlwZXMuXHJcbiAqIFxyXG4gKiBBbGwgQ1NTIHByb3BlcnRpZXMgc2hvdWxkIGFjY2VwdCBzdHJpbmcgYXMgdGhlIHR5cGUgb2YgdGhlaXIgdmFsdWUgZXZlbiBpZiBub3JtYWxseVxyXG4gKiB0aGV5IGFjY2VwdCBvdGhlciB0eXBlcyAoZS5nIGEgc2V0IG9mIHN0cmluZyBsaXRlcmFscyBhcyBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IC4uLmAgZm9yIHRoZVxyXG4gKiBjb2xvcikgcHJvcGVydHkuIFRoaXMgaXMgYmVjYXVzZSBpbiBhZGRpdGlvbiB0byB0aGVpciBub3JtYWwgdmFsdWVzIGFueSBwcm9wZXJ0eVxyXG4gKiBjYW4gdXNlIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhlIGZvcm0gYHZhcigtLXByb3BuYW1lKWAuIEhvd2V2ZXIsIGlmIHdlIGFkZCBzdHJpbmcgdHlwZVxyXG4gKiB0byB0aGUgc2V0IG9mIHN0cmluZyBsaXRlcmFscyAoZS5nLiBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IHN0cmluZ2ApLCB0aGlzIHRocm93cyBvZmYgdGhlXHJcbiAqIEludGVsbGlzZW5zZSBhbmQgaXQgZG9lc24ndCBwcm9tcHQgZGV2ZWxvcGVycyBmb3IgdGhlIHBvc3NpYmxlIHZhbHVlcy4gVGhlIElWYWx1ZVByb3h5XHJcbiAqIGNhbiBiZSB1c2VkIGluc3RlYWQgb2Ygc3RyaW5nIGFuZCB0aGlzIHNvbHZlcyB0aGUgSW50ZWxsaXNlbnNlIGlzc3VlLlxyXG4gKiBcclxuICogQW5vdGhlciBiZW5lZml0IG9mIHVzaW5nIGZ1bmN0aW9ucyBpcyB0aGF0IHRoZXkgYXJlXHJcbiAqIGNvbnN0cnVjdGVkIGF0IG9uZSB0aW1lIGJ1dCB0aGUgc3RyaW5nIGdlbmVyYXRpb24gb2NjdXJzIGF0IGFub3RoZXIgdGltZS4gVGhpcyBhbGxvd3NcclxuICogdXNpbmcgdGhlc2Ugb2JqZWN0cyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLiBUaGV5IGNhbiByZWZlcmVuY2Ugb2JqZWN0cyBsaWtlXHJcbiAqIElWYXJSdWxlIHRoYXQgYXJlIG5vdCBmdWxseSBpbml0aWFsaXplZCB5ZXQuIEhvd2V2ZXIsIHdoZW4gdGhlIHN0eWxlcyBzaG91bGQgYmUgaW5zZXJ0ZWRcclxuICogaW50byBET00gdGhlIGluaXRpYWxpemF0aW9uIHdpbGwgaGF2ZSBhbHJlYWR5IG9jY3VycmVkIGFuZCB0aGUgZnVuY3Rpb24gd2lsbFxyXG4gKiByZXR1cm4gYSBjb3JyZWN0IHN0cmluZy5cclxuICogXHJcbiAqIE5vdGUgdGhhdCB0aGUgcHJveHkgZnVuY3Rpb25zIGhhdmUgYSBwYXJhbWV0ZXIgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZW0gZnJvbVxyXG4gKiBvdGhlciBwcm94eSBmdW5jdGlvbnMuIFRoaXMgaXMgYmVjYXVzZSB3ZSB3YW50IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gZGlmZmVyZW50IENTUyB0eXBlcyxcclxuICogc28gdGhhdCBhIGZ1bmN0aW9uIHVzZWQgZm9yIG9uZSBDU1MgdHlwZSBjYW5ub3QgYmUgdXNlZCBmb3IgYSBkaWZmZXJlbnQgQ1NTIHR5cGUuIEZvclxyXG4gKiBleGFtcGxlLCB0aGUgYGNhbGMoKWAgZnVuY3Rpb24gcmV0dXJucyB0aGUgTnVtYmVyUHJveHkgZnVuY3Rpb24sIHdoaWxlIHRoZVxyXG4gKiBgZ3JhZGllbnQubGluZWFyKClgIGZ1bmN0aW9uIHJldHVybnMgdGhlIEltYWdlUHJveHkgZnVuY3Rpb24uIFRodXMgeW91IGNhbm5vdCB1c2UgdGhlXHJcbiAqICdjYWxjKClgIGZ1bmN0aW9uIGZvciBpbWFnZS1iYXNlZCBDU1MgcHJvcGVydGllcyBhbmQgdmljZSB2ZXJzYS5cclxuICovXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyB0eXBlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogU3R5bGUgdmFsdWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGFueSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBHbG9iYWxfU3R5bGVUeXBlID0gXCJpbmhlcml0XCIgfCBcImluaXRpYWxcIiB8IFwidW5zZXRcIiB8IFwicmV2ZXJ0XCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdlbmVyaWNQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGNhbGxhYmxlIGludGVyZmFjZSBpbXBsZW1lbnRlZCB1c2luZyBmdW5jdGlvbnMgdGhhdFxyXG4gKiBhY2NlcHQgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIG9mIGEgZ2VuZXJpYyB0eXBlIGFuZCByZXR1cm4gYSBzdHJpbmcuIFRoaXMgaW50ZXJmYWNlIGlzIHVzZWQgYXMgYVxyXG4gKiBiYXNlIGZvciBwcm94eSBpbnRlcmZhY2VzIGRlZmluaW5nIHR5cGVzIGFjY2VwdGFibGUgYnkgY2VydGFpbiBzdHlsZSBwcm9wZXJ0aWVzLiBUaGUgdHlwZVxyXG4gKiBwYXJhbWV0ZXIgaGVscHMgZGlmZmVyZW50aWF0ZSB0aGVzZSBpbnRlcmZhY2VzIHNvIHRoYXQgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIG9uZVxyXG4gKiB0eXBlIG9mIHN0eWxlIHByb3BlcnRpZXMgKGUuZy4gXCJ0cmFuc2Zvcm1cIikgY2Fubm90IGJlIGFzc2lnbmVkIHRvIGFuIGluY29tcGF0aWJsZSBzdHlsZSBwcm9wZXJ0eVxyXG4gKiAoZS5nLiBjbGlwLXBhdGgpLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR2VuZXJpY1Byb3h5PFQgZXh0ZW5kcyBzdHJpbmc+XHJcbntcclxuICAgIChwPzogVCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdHJpbmdQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHN0cmluZy4gVGhpcyBmdW5jdGlvbiBpcyBwYXJ0XHJcbiAqIG9mIHR5cGUgZGVmaW5pdGlvbiBmb3IgYWxsIENTUyBwcm9wZXJ0aWVzIC0gZXZlbiBmb3IgdGhvc2UgdGhhdCBkb24ndCBoYXZlIGBzdHJpbmdgIGFzIHBhcnQgb2ZcclxuICogdGhlaXIgdHlwZS5cclxuICogXHJcbiAqIFRoaXMgZnVuY3Rpb24gaXMgcmV0dXJuZWQgZnJvbSB0aGUgYHJhdygpYCBmdW5jdGlvbiwgd2hpY2ggYWxsb3dzIGJ5LXBhc3NpbmcgdGhlIHByb3BlcnR5XHJcbiAqIHR5cGluZyBydWxlcyBhbmQgc3BlY2lmeWluZyBhIHN0cmluZyBkaXJlY3RseS4gVGhpcyBtaWdodCBiZSB1c2VmdWwsIHdoZW4gYSBzdHJpbmcgdmFsdWUgaXNcclxuICogb2J0YWluZWQgZnJvbSBzb21lIGV4dGVybmFsIGNhbGN1bGF0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0cmluZ1Byb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInN0cmluZ1wiPiB7fVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21WYXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgY3VzdG9tIHByb3BlcnR5IG9iamVjdCB3aXRoIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZS5cclxuICogVGhpcyBpbnRlcmZhY2UgaXMgbmVlZGVkIGJlY2F1c2UgZXZlcnkgc3R5bGUgcHJvcGVydHkgY2FuIGFjY2VwdCB2YWx1ZSBpbiB0aGUgZm9ybSBvZiB0aGUgdmFyKClcclxuICogQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFyPFQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBTZXRzIG5ldyB2YWx1ZSBvZiB0aGlzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBmb3IgdGhlIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRWYWx1ZSggdmFsdWU6IFQsIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZXh0ZW5kcyB0aGUgZ2l2ZW4gdHlwZSB3aXRoIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqIC0gSUN1c3RvbVZhciBpbnRlcmZhY2UgdGhhdCBhbGxvd3MgdXNpbmcgYSBDU1MgY3VzdG9tIHByb3BlcnR5LlxyXG4gKiAtIElTdHJpbmdQcm94eSBpbnRlcmZhY2UgdGhhdCBhbGxvd3Mgc3BlY2lmeWluZyByYXcgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWQ8VD4gPSBUIHwgSUN1c3RvbVZhcjxUPiB8IElTdHJpbmdQcm94eSB8IHVuZGVmaW5lZDtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHR5cGUgb2YgcHJvcGVydHkgaW4gYW4gb2JqZWN0IHdpdGggYSBzaW5nbGUgXCIhXCIgcHJvcGVydHkuIFRoaXNcclxuICogdHlwZSBpcyB1c2VkIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3BlcnR5IHZhbHVlIG11c3QgYmUgZmxhZ2dlZCBhcyBcIiFpbXBvcnRhbnRcIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEltcG9ydGFudFByb3A8VD4gPSB7IFwiIVwiOiBFeHRlbmRlZDxUPiB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV4dGVuZGVkUHJvcCBleHRlbmRzIHRoZSBnaXZlbiBnZW5lcmljIHR5cGUgd2l0aCB0aGUgZm9sbG93aW5nIGVsZW1lbnRzOlxyXG4gKiAtIE9iamVjdCB3aXRoIGEgc2luZ2xlIHByb3BlcnR5IFwiIVwiLCB3aGljaCBpcyB1c2VkIHRvIG1hcmsgYSBwcm9wZXJ0eSBhcyBcIiFpbXBvcnRhbnRcIi5cclxuICogLSBHbG9iYWxfU3R5bGVUeXBlLCB3aGljaCBhbGxvd3MgYW55IHByb3BlcnR5IHRvIGJlIGFzc2lnbmVkIHRoZSBnbG9iYWwgdmFsdWVzIHN1Y2ggYXNcclxuICogICBcImluaXRpYWxcIiwgXCJpbmhlcml0XCIsIFwidW5zZXRcIiBhbmQgXCJyZXZlcnRcIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkUHJvcDxUPiA9IEV4dGVuZGVkPFQ+IHwgSW1wb3J0YW50UHJvcDxUPiB8IEdsb2JhbF9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBwYWlyLWxpa2UgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIHRvIDIgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yUGFpcjxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3gtbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gNCB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JCb3g8VD4gPSBUIHwgW0V4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD4/LCBFeHRlbmRlZDxUPj9dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgcHJvcGVydHkgdGhhdCBjYW4gaGF2ZSAxIG9yIG1vcmUgdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlICovXHJcbmV4cG9ydCB0eXBlIE9uZU9yTWFueTxUPiA9IFQgfCBFeHRlbmRlZDxUPltdO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJUXVvdGVkUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhIHN0cmluZyBpbiBxdW90YXRpb24gbWFya3NcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVF1b3RlZFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInF1b3RlZFwiPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtZXJpYyB0eXBlcyBhcyBhIGJhc2lzIGZvciBoYW5kbGluZyBDU1MgPG51bWJlcj4sIDxsZW5ndGg+LCA8YW5nbGU+LCBldGMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBudW1lcmljIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE51bWJlckJhc2U8VCBleHRlbmRzIHN0cmluZz4gPSBudW1iZXIgfCBzdHJpbmcgfCBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgbnVtZXJpYyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aU51bWJlckJhc2U8VCBleHRlbmRzIHN0cmluZz4gPSBPbmVPck1hbnk8TnVtYmVyQmFzZTxUPj47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU51bWJlckJhc2VNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogbnVtZXJpYyBDU1MgdHlwZXMuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgdHlwZSwgdGhleSBhcmUgY29udmVydGVkXHJcbiAqIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGBudW1iZXJUb1N0cmluZ2AgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyQmFzZU1hdGg8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW4oKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1heCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWF4KCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2xhbXAoKSBmdW5jdGlvbi4gKi9cclxuICAgIGNsYW1wKCBtaW46IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBwcmVmOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgbWF4OiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgY2FsYygpIGZ1bmN0aW9uLiBUaGlzIG1ldGhvZCBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdFxyXG4gICAgICogYmUgaW52b2tlZCB3aXRoIGEgdGVtcGxhdGUgc3RyaW5nIHdpdGhvdXQgcGFyZW50aGVzZXMuXHJcbiAgICAgKi9cclxuICAgIGNhbGMoIGZvcm11bGFQYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPG51bWJlcj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIE51bWJlciB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJUeXBlID0gXCJOdW1iZXJcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUgLSBub3RlIHRoYXQgaXQgZXhsdWRlcyBgc3RyaW5nYCAqL1xyXG5leHBvcnQgdHlwZSBDc3NOdW1iZXIgPSBFeGNsdWRlPE51bWJlckJhc2U8TnVtYmVyVHlwZT4sc3RyaW5nPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPG51bWJlcj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpTnVtYmVyID0gT25lT3JNYW55PENzc051bWJlcj47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU51bWJlclByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxOdW1iZXJUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc051bWJlck1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPG51bWJlcj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc051bWJlck1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8TnVtYmVyVHlwZT4ge31cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgcGVyY2VudCAqL1xyXG5leHBvcnQgdHlwZSBQZXJjZW50VW5pdHMgPSBcIiVcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBQZXJjZW50IHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRUeXBlID0gXCJQZXJjZW50XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NQZXJjZW50ID0gTnVtYmVyQmFzZTxQZXJjZW50VHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlQZXJjZW50ID0gT25lT3JNYW55PENzc1BlcmNlbnQ+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQZXJjZW50UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFBlcmNlbnRUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1BlcmNlbnRNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxwZXJjZW50PmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzUGVyY2VudE1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8UGVyY2VudFR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8bGVuZ3RoPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgbGVuZ3RoICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFVuaXRzID0gXCJRXCIgfCBcImNoXCIgfCBcImNtXCIgfCBcImVtXCIgfCBcImV4XCIgfCBcImljXCIgfCBcImluXCIgfCBcImxoXCIgfCBcIm1tXCIgfCBcInBjXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJwdFwiIHwgXCJweFwiIHwgXCJ2YlwiIHwgXCJ2aFwiIHwgXCJ2aVwiIHwgXCJ2d1wiIHwgXCJyZW1cIiB8IFwicmxoXCIgfCBcInZtYXhcIiB8IFwidm1pblwiIHwgXCJmclwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIExlbmd0aCB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhUeXBlID0gXCJMZW5ndGhcIiB8IFBlcmNlbnRUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGggPSBOdW1iZXJCYXNlPExlbmd0aFR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlMZW5ndGggPSBPbmVPck1hbnk8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLTItcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGhQYWlyID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG4vKiogVHlwZSBmb3IgMS10by00LXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bGVuZ3RoPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTGVuZ3RoQm94ID0gT25lT3JCb3g8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMZW5ndGhQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8TGVuZ3RoVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NMZW5ndGhNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxsZW5ndGg+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NMZW5ndGhNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPExlbmd0aFR5cGU+XHJcbntcclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWlubWF4KCkgZnVuY3Rpb24uICovXHJcbiAgICBtaW5tYXgoIG1pbjogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgbWF4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUxlbmd0aFByb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxhbmdsZT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGFuZ2xlICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVW5pdHMgPSBcImRlZ1wiIHwgXCJyYWRcIiB8IFwiZ3JhZFwiIHwgXCJ0dXJuXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgQW5nbGUgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVUeXBlID0gXCJBbmdsZVwiIHwgUGVyY2VudFR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzQW5nbGUgPSBOdW1iZXJCYXNlPEFuZ2xlVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxhbmdsZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpQW5nbGUgPSBPbmVPck1hbnk8Q3NzQW5nbGU+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5nbGVQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8QW5nbGVUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0FuZ2xlTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8YW5nbGU+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NBbmdsZU1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8QW5nbGVUeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPHRpbWU+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiB0aW1lICovXHJcbmV4cG9ydCB0eXBlIFRpbWVVbml0cyA9IFwic1wiIHwgXCJtc1wiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFRpbWUgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgVGltZVR5cGUgPSBcIlRpbWVcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1RpbWUgPSBOdW1iZXJCYXNlPFRpbWVUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHRpbWU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVRpbWUgPSBPbmVPck1hbnk8Q3NzVGltZT47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVGltZVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxUaW1lVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NUaW1lTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8dGltZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1RpbWVNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPFRpbWVUeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPHJlc29sdXRpb24+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiByZXNvbHV0aW9uICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25Vbml0cyA9IFwiZHBpXCIgfCBcImRwY21cIiB8IFwiZHBweFwiIHwgXCJ4XCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgUmVzb2x1dGlvbiB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBSZXNvbHV0aW9uVHlwZSA9IFwiUmVzb2x1dGlvblwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmVzb2x1dGlvbiA9IE51bWJlckJhc2U8UmVzb2x1dGlvblR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpUmVzb2x1dGlvbiA9IE9uZU9yTWFueTxDc3NSZXNvbHV0aW9uPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUmVzb2x1dGlvblByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxSZXNvbHV0aW9uVHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NSZXNvbHV0aW9uTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1Jlc29sdXRpb25NYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPFJlc29sdXRpb25UeXBlPlxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGZyZXF1ZW5jeT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGZyZXF1ZW5jeSAqL1xyXG5leHBvcnQgdHlwZSBGcmVxdWVuY3lVbml0cyA9IFwiSHpcIiB8IFwia0h6XCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgRnJlcXVlbmN5IHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVR5cGUgPSBcIkZyZXF1ZW5jeVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NGcmVxdWVuY3kgPSBOdW1iZXJCYXNlPEZyZXF1ZW5jeVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlGcmVxdWVuY3kgPSBPbmVPck1hbnk8Q3NzRnJlcXVlbmN5PjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGcmVxdWVuY3lQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8RnJlcXVlbmN5VHlwZT4ge307XHJcblxyXG4vKipcclxuICogVGhlIElDc3NGcmVxdWVuY3lNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxmcmVxdWVuY3k+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NGcmVxdWVuY3lNYXRoIGV4dGVuZHMgSU51bWJlckJhc2VNYXRoPEZyZXF1ZW5jeVR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgYSBwb2ludCB1c2luZyB4IGFuZCB5IGNvb3JkaW5hdGVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9pbnQgPSBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQb3NpdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGhvcml6b250YWwgcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCA9IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGhvcml6b250YWwgcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgVmVydGljYWxQb3NpdGlvbktleXdvcmQgPSBcInRvcFwiIHwgXCJjZW50ZXJcIiB8IFwiYm90dG9tXCI7XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIGEgc2ltcGxlIDEgb3IgdHdvIHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgU2ltcGxlQ3NzUG9zaXRpb24gPSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+IHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkIHwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgdGhlIGZ1bGwgdXAgdG8gNCB2YWx1ZXMgYDxwb3NpdGlvbj5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1Bvc2l0aW9uID0gU2ltcGxlQ3NzUG9zaXRpb24gfCBcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZF0gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+XSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyBtdWx0aXBsZSBgPHBvc2l0aW9uPmAgQ1NTIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIE11bHRpQ3NzUG9zaXRpb24gPSBFeHRlbmRlZDxDc3NQb3NpdGlvbj5bXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJhZGl1c1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSBjb3JuZXIgcmFkaXVzICovXHJcbmV4cG9ydCB0eXBlIENzc1JhZGl1cyA9IE9uZU9yUGFpcjxDc3NMZW5ndGg+O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVVJMcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIElVcmxQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGFuIGludm9jYXRpb24gb2YgdGhlIENTUyB1cmwoKSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVybFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInVybFwiPiB7fTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIGF0dHIoKSBmdW5jdGlvbiBzdXBwb3J0XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IHR5cGUgQXR0clR5cGVLZXl3b3JkID0gXCJzdHJpbmdcIiB8IFwiY29sb3JcIiB8IFwidXJsXCIgfCBcImludGVnZXJcIiB8IFwibnVtYmVyXCIgfCBcImxlbmd0aFwiIHwgXCJhbmdsZVwiIHwgXCJ0aW1lXCIgfCBcImZyZXF1ZW5jeVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQXR0clVuaXRLZXl3b3JkID0gUGVyY2VudFVuaXRzIHwgTGVuZ3RoVW5pdHMgfCBUaW1lVW5pdHMgfCBBbmdsZVVuaXRzIHwgUmVzb2x1dGlvblVuaXRzIHwgRnJlcXVlbmN5VW5pdHM7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBXZWIgTmFtZXNwYWNlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIFdlYk5hbWVzcGFjZXMgY2xhc3MgY29udGFpbnMgaWRlbnRpZmllcnMgZm9yIHRoZSBrbm93biBXZWItcmVsYXRlZCBuYW1lc3BhY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYk5hbWVzcGFjZXNcclxue1xyXG5cdHN0YXRpYyByZWFkb25seSBIVE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IFNWRyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWExpbmsgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgWE1MTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCI7XHJcblx0c3RhdGljIHJlYWRvbmx5IE1hdGhNTCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=