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
/*! exports provided: $abstract, $class, $classname, $id, $style, $keyframes, $var, $counter, $gridline, $gridarea, $import, $fontface, $namespace, $page, $supports, $media, $use, $embed, enableShortNames, classes, chooseClass, createCssSerializer, serializeToCSS, virtual */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseClass", function() { return chooseClass; });
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
 * @param classProps
 */
function classes(...classProps) {
    return Object(_styles_UtilFuncs__WEBPACK_IMPORTED_MODULE_9__["val2str"])(classProps, {
        arrItemFunc: v => v instanceof _rules_StyleRules__WEBPACK_IMPORTED_MODULE_2__["ClassRule"] ? v.name : classes(v)
    });
}
/**
 * Chooses the first non-null name from the given list of classes.
 * @param classProps
 */
function chooseClass(...classProps) {
    for (let cls of classProps) {
        if (!cls)
            continue;
        else if (typeof cls === "string")
            return cls;
        else if (Array.isArray(cls)) {
            let name = chooseClass(cls);
            if (name)
                return name;
        }
        else if (cls.name)
            return cls.name;
    }
    return null;
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chooseClass", function() { return _api_RuleAPI__WEBPACK_IMPORTED_MODULE_12__["chooseClass"]; });

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
        return "#FFF";
    // negative and positive values of alpha are treated identically, so convert to positive
    if (a < 0)
        a = -a;
    // convert alpha to a number with absolute value less than 1 (if it is not yet). If alpha
    // is 1 or 100, then set it to 0 because 0 in the colorNumberToString means "no alpha".
    a = a === 1 || a >= 100 ? 0 : a > 1 ? a / 100 : a;
    // make the new alpha
    return colorNumberToString(n >= 0 ? n + a : n - a);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL0NvbG9yQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvSW1hZ2VBUEkudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9SdWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvU2NoZWR1bGluZ0FQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1N0eWxlQVBJLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9hcGkvVXRpbEFQSS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0FuaW1hdGlvblJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0NvdW50ZXJSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JpZFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9Hcm91cFJ1bGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9NaXNjUnVsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1J1bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2NoZWR1bGluZy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3R5bGVSdWxlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvVmFyUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Db2xvclR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvRm9udEZhY2VGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0ltYWdlVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9NZWRpYUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU2VsZWN0b3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1NlbGVjdG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvU3R5bGVUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1V0aWxUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUFFRDs7R0FFRztBQUNJLFNBQVMsWUFBWSxDQUFFLEdBQStCLEVBQUUsU0FBaUI7SUFFNUUsT0FBTyxPQUFPLENBQUUsR0FBRyxFQUFFO1FBQ2pCLFdBQVcsRUFBRSxPQUFPO1FBQ3BCLE1BQU0sRUFBRSxTQUFTO0tBQ3BCLENBQUMsQ0FBQztBQUNQLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNuaUJEO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBd0JHO0FBd0srRCxDQUFDO0FBNkJDLENBQUM7QUFzQ0gsQ0FBQztBQWlDSCxDQUFDO0FBK0JILENBQUM7QUErQlcsQ0FBQztBQStCSCxDQUFDO0FBa0VmLENBQUM7QUFnQjNELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0Ysa0JBQWtCO0FBQ2xCLEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7O0dBRUc7QUFDSSxNQUFlLGFBQWE7O0FBRWxCLGtCQUFJLEdBQUcsOEJBQThCLENBQUM7QUFDdEMsaUJBQUcsR0FBRyw0QkFBNEIsQ0FBQztBQUNuQyxtQkFBSyxHQUFHLDhCQUE4QixDQUFDO0FBQ3ZDLGlCQUFHLEdBQUcsc0NBQXNDLENBQUM7QUFDN0MsbUJBQUssR0FBRywrQkFBK0IsQ0FBQztBQUN4QyxvQkFBTSxHQUFHLG9DQUFvQyxDQUFDIiwiZmlsZSI6Im1pbWNzcy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCLvu79pbXBvcnQgKiBhcyBDb2xvclR5cGVzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCAqIGFzIENvbG9yRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9Db2xvckZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgcmVkLCBncmVlbiwgYmx1ZSBzZXBhcmF0aW9uIHZhbHVlcyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciB3aXRoXHJcbiAqIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwLCB3aGljaCBpcyBkaXZpZGVkIGJ5IDEwMC4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICogICAtIFRoZSBzaWduIG9mIGFscGhhIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqIFxyXG4gKiBAcGFyYW0gciBSZWQgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGIgQmx1ZSBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gYSBPcHRpb25hbCBhbHBoYSBtYXNrIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2IoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLnJnYlRvU3RyaW5nKCByLCBnLCBiLCBhKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIEh1ZSBjb21wb25lbnQgaXMgdHJlYXRlZCBhcyB0aGUgQ1NTIGA8YW5nbGU+YCB0eXBlLiBOdW1iZXJzIGFyZSBjb25zaWRlcmVkIGRlZ3JlZXMuXHJcbiAqIFxyXG4gKiBUaGUgU2F0dXJhdGlvbiBhbmQgTGlnaHRuZXNzIGNvbXBvbmVudHMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZXM6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUgYXJlIG11bHRpcGxpZWQgYnkgMTAwIGFuZCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCBhcmUgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkIHRvIDEwMC5cclxuICpcclxuICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUuXHJcbiAqICAgLSBJbnRlZ2VyIG9yIGZsb2F0aW5nIG51bWJlciAxIHRvIDEwMCwgd2hpY2ggaXMgZGl2aWRlZCBieSAxMDAuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQuXHJcbiAqICAgLSBUaGUgc2lnbiBvZiBhbHBoYSBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiBcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciwgbDogbnVtYmVyLCBhPzogbnVtYmVyKTogQ29sb3JUeXBlcy5JQ29sb3JQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gQ29sb3JGdW5jcy5oc2xUb1N0cmluZyggaCwgcywgbCwgYSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gY29sb3IgYW5kIHRoZSBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKiBcclxuICogVGhlIGNvbG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBudW1lcmljIHZhbHVlIG9yIGFzIGEgc3RyaW5nIGNvbG9yIG5hbWUuXHJcbiAqIFxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqIFxyXG4gKiBAcGFyYW0gYyBDb2xvciB2YWx1ZSBhcyBlaXRoZXIgYSBudW1iZXIgb3IgYSBuYW1lZCBjb2xvclxyXG4gKiBAcGFyYW0gYSBBbHBoYSBjaGFubmVsIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWxwaGEoIGM6IG51bWJlciB8IGtleW9mIENvbG9yVHlwZXMuSU5hbWVkQ29sb3JzLCBhOiBudW1iZXIpOiBDb2xvclR5cGVzLklDb2xvclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBDb2xvckZ1bmNzLmNvbG9yV2l0aEFscGhhVG9TdHJpbmcoIGMsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7RXh0ZW5kZWQsIENzc1Bvc2l0aW9uLCBDc3NBbmdsZSwgQ3NzTGVuZ3RofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7XHJcbiAgICBHcmFkaWVudFN0b3BPckhpbnQsIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIExpbmVhckdyYWRBbmdsZSxcclxuICAgIENyb3NzRmFkZVBhcmFtLCBJSW1hZ2VQcm94eSwgUmFkaWFsR3JhZGllbnRTaGFwZSwgUmFkaWFsR3JhZGllbnRTaXplLCBcclxuICAgIElHcmFkaWVudCwgSUxpbmVhckdyYWRpZW50LCBJUmFkaWFsR3JhZGllbnQsIElDb25pY0dyYWRpZW50XHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9JbWFnZVR5cGVzXCJcclxuaW1wb3J0IHtjb2xvclRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0NvbG9yRnVuY3NcIjtcclxuaW1wb3J0IHt2YWwyc3RyLCBJTnVtYmVyQmFzZU1hdGhDbGFzcywgQ3NzQW5nbGVNYXRoLCBwb3Myc3RyLCBDc3NQZXJjZW50TWF0aCwgQ3NzTGVuZ3RoTWF0aH0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHsgRXh0ZW50S2V5d29yZCB9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyYWRpZW50IGNsYXNzIGltcGxlbWVudHMgdGhlIElHcmFkaWVudCBpbnRlcmZhY2UgdXNpbmcgcHJvcGVydHkgZ2V0IGFjY2Vzc29yLCB3aGNpaCBhbGxvd3NcclxuICogY3JlYXRlaW5nIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBhcHByb3ByaWVudCBncmFkaWVudCBpbnRlcmZhY2UuIFdlIG5lZWQgbmV3IGluc3RhbmNlcywgYmVjYXVzZVxyXG4gKiB0aGUgZnVuY3Rpb25zIGltcGxlbWVudGluZyB0aGVzZSBjYWxsYWJsZSBpbnRlcmZhY2VzIGtlZXAgb3B0aW9uYWwgcGFyYW1ldGVycyBhcyBwcm9wZXJ0aWVzIG9mXHJcbiAqIHRoZSBmdWNudGlvbiBvYmplY3RzIHRoZW1zZWx2ZXMuXHJcbiAqL1xyXG5jbGFzcyBHcmFkaWVudCBpbXBsZW1lbnRzIElHcmFkaWVudFxyXG57XHJcbiAgICBwdWJsaWMgZ2V0IGxpbmVhcigpOiBJTGluZWFyR3JhZGllbnQgeyByZXR1cm4gbGluZWFyR3JhZGllbnRGdW5jKCBcImxpbmVhci1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdMaW5lYXIoKTogSUxpbmVhckdyYWRpZW50IHsgcmV0dXJuIGxpbmVhckdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJhZGlhbCgpOiBJUmFkaWFsR3JhZGllbnQgeyByZXR1cm4gcmFkaWFsR3JhZGllbnRGdW5jKCBcInJhZGlhbC1ncmFkaWVudFwiKTsgfVxyXG4gICAgcHVibGljIGdldCByZXBlYXRpbmdSYWRpYWwoKTogSVJhZGlhbEdyYWRpZW50IHsgcmV0dXJuIHJhZGlhbEdyYWRpZW50RnVuYyggXCJyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IGNvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcImNvbmljLWdyYWRpZW50XCIpOyB9XHJcbiAgICBwdWJsaWMgZ2V0IHJlcGVhdGluZ0NvbmljKCk6IElDb25pY0dyYWRpZW50IHsgcmV0dXJuIGNvbmljR3JhZGllbnRGdW5jKCBcInJlcGVhdGluZy1jb25pYy1ncmFkaWVudFwiKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgZ3JhZGllbnQgdmFyaWFibGUgcHJvdmlkZXMgYWNjZXNzIHRvIGZ1bmN0aW9ucyBpbXBsZW1lbnRpbmcgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGxldCBncmFkaWVudDogSUdyYWRpZW50ID0gbmV3IEdyYWRpZW50KCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEltYWdlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3NGYWRlKCAuLi5hcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogSUltYWdlUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBJTGluZWFyR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGxpbmVyLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWxpbmVyLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gbGluZWFyR3JhZGllbnRGdW5jKCBuYW1lOiBzdHJpbmcpOiBJTGluZWFyR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuYW5nbGVQYXJhbSk7XHJcblxyXG5cdGYudG8gPSAoYW5nbGU6IExpbmVhckdyYWRBbmdsZSkgPT4ge1xyXG4gICAgICAgIGYuYW5nbGVQYXJhbSA9IGFuZ2xlO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG4gICAgXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSVJhZGlhbEdyYWRpZW50IGludGVyZmFjZSBmb3IgZWl0aGVyIGByYWRpYWwtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRGdW5jKCBuYW1lOiBzdHJpbmcpOiBJUmFkaWFsR3JhZGllbnRcclxue1xyXG4gICAgbGV0IGY6IGFueSA9ICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHkgPT5cclxuICAgICAgICAoKSA9PiByYWRpYWxHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuc2hhcGVQYXJhbSwgZi5zaXplUGFyYW0sIGYucG9zUGFyYW0pO1xyXG5cclxuICAgIGYuY2lyY2xlID0gKHNpemVPckV4dGVudD86IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiY2lyY2xlXCI7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBzaXplT3JFeHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuZWxsaXBzZSA9IChzaXplT3JFeHRlbnQ/OiBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPikgPT4ge1xyXG4gICAgICAgIGYuc2hhcGVQYXJhbSA9IFwiZWxsaXBzZVwiO1xyXG4gICAgICAgIGYuc2l6ZVBhcmFtID0gc2l6ZU9yRXh0ZW50O1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRmLmV4dGVudCA9IChleHRlbnQ6IEV4dGVuZGVkPEV4dGVudEtleXdvcmQ+KSA9PiB7XHJcbiAgICAgICAgZi5zaXplUGFyYW0gPSBleHRlbnQ7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zOyByZXR1cm4gZjtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIGY7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHJldHVybmluZyB0aGUgSUNvbmljR3JhZGllbnQgaW50ZXJmYWNlIGZvciBlaXRoZXIgYGNvbmljLWdyYWRpZW50YCBvclxyXG4gKiBgcmVwZWF0aW5nLWNvbmljLWdyYWRpZW50YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gY29uaWNHcmFkaWVudEZ1bmMoIG5hbWU6IHN0cmluZyk6IElDb25pY0dyYWRpZW50XHJcbntcclxuICAgIGxldCBmOiBhbnkgPSAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5ID0+XHJcbiAgICAgICAgKCkgPT4gY29uaWNHcmFkaWVudFRvU3RyaW5nKCBuYW1lLCBzdG9wc09ySGludHMsIGYuYW5nbGVQYXJhbSwgZi5wb3NQYXJhbSk7XHJcblxyXG5cdGYuZnJvbSA9IChhbmdsZTogTGluZWFyR3JhZEFuZ2xlKSA9PiB7XHJcbiAgICAgICAgZi5hbmdsZVBhcmFtID0gYW5nbGU7XHJcbiAgICAgICAgcmV0dXJuIGY7XHJcbiAgICB9XHJcblxyXG5cdGYuYXQgPSAocG9zOiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pID0+IHtcclxuICAgICAgICBmLnBvc1BhcmFtID0gcG9zO1xyXG4gICAgICAgIHJldHVybiBmO1xyXG4gICAgfVxyXG5cclxuXHRyZXR1cm4gZjtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudFRvU3RyaW5nKCBuYW1lOiBzdHJpbmcsIHN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10sXHJcbiAgICBhbmdsZT86IExpbmVhckdyYWRBbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgYW5nbGVTdHJpbmcgPSBcIlwiO1xyXG4gICAgaWYgKGFuZ2xlKVxyXG4gICAge1xyXG4gICAgICAgIGFuZ2xlU3RyaW5nID0gdmFsMnN0ciggYW5nbGUsIHtcclxuICAgICAgICAgICAgZnJvbU51bWJlcjogQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jLFxyXG4gICAgICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IC9cXGQrLiovLnRlc3QodikgPyB2IDogXCJ0byBcIiArIHZcclxuICAgICAgICB9KSArIFwiLFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuYW1lfSgke2FuZ2xlU3RyaW5nfSR7Z3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZyggc3RvcHNPckhpbnRzLCBDc3NQZXJjZW50TWF0aCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnRUb1N0cmluZyggbmFtZTogc3RyaW5nLCBzdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdLFxyXG4gICAgc2hhcGU6IFJhZGlhbEdyYWRpZW50U2hhcGUsIHNpemVPckV4dGVudDogUmFkaWFsR3JhZGllbnRTaXplIHwgRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4sXHJcbiAgICBwb3M6IENzc1Bvc2l0aW9uKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzaGFwZVN0cmluZyA9IHNoYXBlID8gc2hhcGUgOiBcIlwiO1xyXG4gICAgbGV0IHNpemVPckV4dGVudFN0cmluZyA9IHNpemVPckV4dGVudCA/IENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBzaXplT3JFeHRlbnQsIFwiIFwiKSA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zMnN0ciggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBzaGFwZSB8fCBzaXplT3JFeHRlbnRTdHJpbmcgfHwgcG9zID8gYCR7c2hhcGVTdHJpbmd9ICR7c2l6ZU9yRXh0ZW50U3RyaW5nfSAke3Bvc1N0cmluZ30sYCA6IFwiXCI7XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHt3aGF0QW5kV2hlcmV9JHtncmFkaWVudFN0b3BzT3JIaW50c1RvU3RyaW5nKCBzdG9wc09ySGludHMsIENzc1BlcmNlbnRNYXRoKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb25pY0dyYWRpZW50VG9TdHJpbmcoIG5hbWU6IHN0cmluZywgc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIGFuZ2xlPzogRXh0ZW5kZWQ8Q3NzQW5nbGU+LCBwb3M/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGFuZ2xlU3RyaW5nID0gYW5nbGUgPyBgZnJvbSAke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKCBhbmdsZSl9YCA6IFwiXCI7XHJcbiAgICBsZXQgcG9zU3RyaW5nID0gcG9zID8gYGF0ICR7cG9zMnN0ciggcG9zKX1gIDogXCJcIjtcclxuICAgIGxldCB3aGF0QW5kV2hlcmUgPSBhbmdsZSB8fCBwb3MgPyBgJHthbmdsZVN0cmluZ30gJHtwb3NTdHJpbmd9LGAgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke25hbWV9KCR7d2hhdEFuZFdoZXJlfSR7Z3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZyggc3RvcHNPckhpbnRzLCBDc3NBbmdsZU1hdGgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyb3NzRmFkZVRvU3RyaW5nKCBhcmdzOiBDcm9zc0ZhZGVQYXJhbVtdKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBwYXJhbXNTdHJpbmcgPSB2YWwyc3RyKCBhcmdzLCB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IGNyb3NzRmFkZVBhcmFtVG9TdHJpbmcsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIlxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYGNyb3NzLWZhZGUoJHtwYXJhbXNTdHJpbmd9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ3JhZGllbnRTdG9wc09ySGludHNUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudFN0b3BPckhpbnRbXSxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbC5tYXAoIHYgPT4gZ3JhZGllbnRTdG9wT3JIaW50VG9TdHJpbmcoIHYsIG1hdGhDbGFzcykpLmpvaW4oXCIsXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50U3RvcE9ySGludFRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEdyYWRpZW50U3RvcE9ySGludCxcclxuICAgIG1hdGhDbGFzczogSU51bWJlckJhc2VNYXRoQ2xhc3M8VD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHYubGVuZ3RoID09PSAwID8gXCJcIiA6IHYubGVuZ3RoID09PSAxID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZbMF0pIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhZGllbnRDb2xvckFuZExlbmd0aFRvU3RyaW5nKCB2IGFzIEdyYWRpZW50Q29sb3JBbmRMZW5ndGgsIG1hdGhDbGFzcylcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyYWRpZW50Q29sb3JBbmRMZW5ndGhUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBHcmFkaWVudENvbG9yQW5kTGVuZ3RoLFxyXG4gICAgbWF0aENsYXNzOiBJTnVtYmVyQmFzZU1hdGhDbGFzczxUPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2Vjb25kU3RvcCA9IHZhbC5sZW5ndGggPiAyID8gbWF0aENsYXNzLnN0eWxlVG9TdHJpbmcoIHZhbFsyXSkgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGAke2NvbG9yVG9TdHJpbmcodmFsWzBdKX0gJHttYXRoQ2xhc3Muc3R5bGVUb1N0cmluZyggdmFsWzFdKX0gJHtzZWNvbmRTdG9wfWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3Jvc3NGYWRlUGFyYW1Ub1N0cmluZyggdmFsOiBDcm9zc0ZhZGVQYXJhbSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGAke3ZhbDJzdHIodlswXSl9LCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgQ29tYmluZWRTdHlsZXNldCwgSVN0eWxlUnVsZSwgSUNsYXNzUnVsZSwgSUlEUnVsZSwgQW5pbWF0aW9uRnJhbWUsIElBbmltYXRpb25SdWxlLCBJVmFyUnVsZSxcclxuICAgIElDb3VudGVyUnVsZSwgSUdyaWRMaW5lUnVsZSwgSUdyaWRBcmVhUnVsZSwgSUltcG9ydFJ1bGUsIElGb250RmFjZVJ1bGUsIElOYW1lc3BhY2VSdWxlLFxyXG4gICAgSVBhZ2VSdWxlLCBTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzcywgSVN1cHBvcnRzUnVsZSwgSU1lZGlhUnVsZSwgSUNsYXNzTmFtZVJ1bGVcclxufSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7cHJvY2Vzc0luc3RhbmNlT3JDbGFzcywgc19lbmFibGVTaG9ydE5hbWVzLCBzZXJpYWxpemVJbnN0YW5jZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVDb250YWluZXJcIjtcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5LCBTdHlsZXNldCwgVmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGV9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge0Nzc1NlbGVjdG9yLCBQYWdlUHNldWRvQ2xhc3N9IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7SUZvbnRGYWNlfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuaW1wb3J0IHtBYnN0cmFjdFJ1bGUsIENsYXNzUnVsZSwgSURSdWxlLCBTZWxlY3RvclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9TdHlsZVJ1bGVzXCJcclxuaW1wb3J0IHtBbmltYXRpb25SdWxlfSBmcm9tIFwiLi4vcnVsZXMvQW5pbWF0aW9uUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1ZhclJ1bGVcIlxyXG5pbXBvcnQge0NvdW50ZXJSdWxlfSBmcm9tIFwiLi4vcnVsZXMvQ291bnRlclJ1bGVzXCI7XHJcbmltcG9ydCB7R3JpZExpbmVSdWxlLCBHcmlkQXJlYVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9HcmlkUnVsZXNcIjtcclxuaW1wb3J0IHtGb250RmFjZVJ1bGUsIEltcG9ydFJ1bGUsIE5hbWVzcGFjZVJ1bGUsIFBhZ2VSdWxlLCBDbGFzc05hbWVSdWxlfSBmcm9tIFwiLi4vcnVsZXMvTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGUsIE1lZGlhUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0dyb3VwUnVsZXNcIlxyXG5pbXBvcnQge3ZhbDJzdHJ9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcbmltcG9ydCB7SVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4uL3J1bGVzL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFic3RyYWN0IHJ1bGUsIHdoaWNoIGRlZmluZXMgYSBzdHlsZXNldCB0aGF0IGNhbiBiZSBleHRlbmRlZCBieSBvdGhlciBzdHlsZVxyXG4gKiBydWxlcy4gQWJzdHJhY3QgcnVsZXMgZG9uJ3QgaGF2ZSBzZWxlY3RvcnMgYW5kIGFyZSBub3QgaW5zZXJ0ZWQgaW50byBET00uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFic3RyYWN0KCBzdHlsZTogQ29tYmluZWRTdHlsZXNldCk6IElTdHlsZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBjbGFzcyBydWxlLiBUaGUgY2xhc3MgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZlxyXG4gKiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0XHJcbiAqIG5hbWUgb3IgYW5vdGhlciBjbGFzcyBydWxlLiBUaGUgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCB3aXRob3V0IHBhcmFtZXRlcnMganVzdCB0byBcImRlY2xhcmVcIlxyXG4gKiB0aGUgY2xhc3MuIFN1Y2ggY2xhc3MgY2FuIGJlIGxhdGVyIHVzZWQgZWl0aGVyIGluIGNvbmRpdGlvbmFsIGdyb3VwaW5nIHJ1bGVzIG9yIGluIGRlcml2ZWRcclxuICogc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LFxyXG4gICAgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlKTogSUNsYXNzUnVsZVxyXG57XHJcblx0cmV0dXJuIG5ldyBDbGFzc1J1bGUoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY2xhc3MgbmFtZSBydWxlLCB3aGljaCBjb21iaW5lcyBvbmUgb3IgbW9yZSBvdGhlciBjbGFzcyBuYW1lcy4gVGhpcyBjcmVhdGVzIGFcclxuICogXCJzeW5vbnltXCIgdGhhdCBpcyBlYXNpZXIgdG8gYXBwbHkgdG8gYW4gZWxlbWVudCdzIGNsYXNzIGF0dHJpYnV0ZSB0aGFuIGFuIGFycmF5IG9mIHR3byBvclxyXG4gKiBtb3JlIGNsYXMgcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNsYXNzbmFtZSggLi4uY2xhc3NlczogKElDbGFzc1J1bGUgfCBJQ2xhc3NOYW1lUnVsZSB8IHN0cmluZylbXSk6IElDbGFzc05hbWVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENsYXNzTmFtZVJ1bGUoIGNsYXNzZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgSUQgcnVsZS4gVGhlIElEIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzIHBhcnQgb2ZcclxuICogdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhbiBleHBsaWNpdFxyXG4gKiBuYW1lIG9yIGFub3RoZXIgSUQgcnVsZS4gVGhlIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBwYXJhbWV0ZXJzIGp1c3QgdG8gXCJkZWNsYXJlXCJcclxuICogdGhlIElELiBTdWNoIElEIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlcyBvciBpbiBkZXJpdmVkXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaWQoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUlEUnVsZSk6IElJRFJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgSURSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHNlbGVjdG9yIHJ1bGUuIFNlbGVjdG9yIGNhbiBiZSBzcGVjaWZpZWQgYXMgYSBzdHJpbmcgb3IgdmlhIHRoZSBzZWxlY3RvciBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3R5bGUoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU6IENvbWJpbmVkU3R5bGVzZXQpOiBJU3R5bGVSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGFuaW1hdGlvbiBydWxlLiBUaGUgYW5pbWF0aW9uIG5hbWUgd2lsbCBiZSBjcmVhdGVkIHdoZW4gdGhlIHJ1bGUgaXMgcHJvY2Vzc2VkIGFzXHJcbiAqIHBhcnQgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBuYW1lIGNhbiBiZSBhbHNvIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGVpdGhlciBhblxyXG4gKiBleHBsaWNpdCBuYW1lIG9yIGFub3RoZXIgYW5pbWF0aW9uIHJ1bGUuIFRoZSBmdW5jdGlvbiBjYW4gYmUgY2FsbGVkIHdpdGhvdXQgcGFyYW1ldGVycyBqdXN0IHRvXHJcbiAqIFwiZGVjbGFyZVwiIHRoZSBhbmltYXRpb24uIFN1Y2ggYW5pbWF0aW9uIGNhbiBiZSBsYXRlciB1c2VkIGVpdGhlciBpbiBjb25kaXRpb25hbCBncm91cGluZyBydWxlc1xyXG4gKiBvciBpbiBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAka2V5ZnJhbWVzKCBmcmFtZXM/OiBBbmltYXRpb25GcmFtZVtdLFxyXG5cdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlKTogSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgQW5pbWF0aW9uUnVsZSggZnJhbWVzLCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgY3VzdG9tIHZhcmlhYmxlIG9iamVjdCB0aGF0IGRlZmluZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBUaGUgdmFyaWFibGUgbmFtZSB3aWxsXHJcbiAqIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXMgcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlXHJcbiAqIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBjdXN0b20gdmFyaWFibGUgcnVsZS4gVGhlXHJcbiAqIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgd2l0aG91dCBzcGVjaWZ5aW5nIHRoZSB2YWx1ZSBqdXN0IHRvIFwiZGVjbGFyZVwiIHRoZSB2YXJpYWJsZS4gU3VjaFxyXG4gKiB2YXJpYWJsZSBjYW4gYmUgbGF0ZXIgdXNlZCBlaXRoZXIgaW4gY29uZGl0aW9uYWwgZ3JvdXBpbmcgcnVsZXMgb3IgaW4gZGVyaXZlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIGNsYXNzZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHZhcjxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiggdGVtcGxhdGU6IEssIHByb3BWYWw/OiBWYXJWYWx1ZVR5cGU8Sz4sXHJcblx0XHRcdFx0bmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSVZhclJ1bGU8Sz4pOiBJVmFyUnVsZTxLPlxyXG57XHJcblx0cmV0dXJuIG5ldyBWYXJSdWxlKCB0ZW1wbGF0ZSwgcHJvcFZhbCwgbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGNvdW50ZXIgb2JqZWN0LiBUaGUgY291bnRlciBuYW1lIHdpbGwgYmUgY3JlYXRlZCB3aGVuIHRoZSBydWxlIGlzIHByb2Nlc3NlZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzLiBUaGUgbmFtZSBjYW4gYmUgYWxzbyBvdmVycmlkZGVuIGJ5IHByb3ZpZGluZyBlaXRoZXIgYW5cclxuICogZXhwbGljaXQgbmFtZSBvciBhbm90aGVyIGNvdW50ZXIgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY291bnRlciggbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlKTogSUNvdW50ZXJSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IENvdW50ZXJSdWxlKCBuYW1lT3ZlcnJpZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZ3JpZCBsaW5lIG9iamVjdC4gVGhlIGxpbmUgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBncmlkIGxpbmUgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZ3JpZGxpbmUoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUsXHJcbiAgICBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbik6IElHcmlkTGluZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgR3JpZExpbmVSdWxlKCBuYW1lT3ZlcnJpZGUsIGlzU3RhcnRFbmRPck5vbmUpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgZ3JpZCBhcmVhIG9iamVjdC4gVGhlIGFyZWEgbmFtZSB3aWxsIGJlIGNyZWF0ZWQgd2hlbiB0aGUgcnVsZSBpcyBwcm9jZXNzZWQgYXNcclxuICogcGFydCBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gVGhlIG5hbWUgY2FuIGJlIGFsc28gb3ZlcnJpZGRlbiBieSBwcm92aWRpbmcgZWl0aGVyIGFuXHJcbiAqIGV4cGxpY2l0IG5hbWUgb3IgYW5vdGhlciBncmlkIGFyZWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZ3JpZGFyZWEoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkQXJlYVJ1bGUpOiBJR3JpZEFyZWFSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEdyaWRBcmVhUnVsZSggbmFtZU92ZXJyaWRlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSxcclxuXHRzdXBwb3J0c1F1ZXJ5Pzogc3RyaW5nIHwgU3VwcG9ydHNRdWVyeSk6IElJbXBvcnRSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEltcG9ydFJ1bGUoIHVybCwgbWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBmb250LWZhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZm9udGZhY2UoIGZvbnRmYWNlOiBJRm9udEZhY2UpOiBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IEZvbnRGYWNlUnVsZSggZm9udGZhY2UpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG5hbWVzcGFjZSggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZyk6IElOYW1lc3BhY2VSdWxlXHJcbntcclxuXHRyZXR1cm4gbmV3IE5hbWVzcGFjZVJ1bGUoIG5hbWVzcGFjZSwgcHJlZml4KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbmV3IHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkcGFnZSggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpOiBJUGFnZVJ1bGVcclxue1xyXG5cdHJldHVybiBuZXcgUGFnZVJ1bGUoIHBzZXVkb0NsYXNzLCBzdHlsZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIG5ldyBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzdXBwb3J0czxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPiggcXVlcnk6IFN1cHBvcnRzUXVlcnksXHJcbiAgICBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlKCBxdWVyeSwgaW5zdE9yQ2xhc3MpO1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBuZXcgbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkbWVkaWE8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LFxyXG4gICAgaW5zdE9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRyZXR1cm4gbmV3IE1lZGlhUnVsZSggcXVlcnksIGluc3RPckNsYXNzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBjcmVhdGVzIHVuaXF1ZSBuYW1lcyBmb3IgYWxsIG5hbWVkXHJcbiAqIGVudGl0aWVzLiBGb3IgYSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9ubHkgYSBzaW5nbGUgaW5zdGFuY2UgaXMgY3JlYXRlZCwgbm8gbWF0dGVyIGhvd1xyXG4gKiBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZC4gSG93ZXZlciwgaWYgYW4gaW5zdGFuY2UsIHdoaWNoIGhhcyBub3QgeWV0IGJlZW4gcHJvY2Vzc2VkLFxyXG4gKiBpcyBwYXNzZWQsIHRoZW4gYSBuZXcgc2V0IG9mIHVuaXF1ZSBuYW1lcyB3aWxsIGJlIGNyZWF0ZWQgZm9yIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR1c2U8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4oIGluc3RPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KTogVCB8IG51bGxcclxue1xyXG5cdHJldHVybiBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0T3JDbGFzcykgYXMgVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRW1iZWRzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGludG8gYW5vdGhlciBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC4gV2hlbiBhY3RpdmF0ZWQsXHJcbiAqIHRoZSBlbWJlZGRlZCBvYmplY3QgZG9lc24ndCBjcmVhdGUgaXRzIG93biBgPHN0eWxlPmAgZWxlbWVudCBidXQgdXNlcyB0aGF0IG9mIGl0cyBvd25lci4gVGhpc1xyXG4gKiBhbGxvd3MgY3JlYXRpbmcgbWFueSBzbWFsbCBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgaW5zdGVhZCBvZiBvbmUgaHVnZSBvbmUgd2l0aG91dCBpbmN1cnJpbmdcclxuICogdGhlIG92ZXJoZWFkIG9mIG1hbnkgYDxzdHlsZT5gIGVsZW1lbnRzLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IGFzIG9wcG9zZWQgdG8gdGhlICR1c2UgZnVuY3Rpb24sIHRoZSAkZW1iZWQgZnVuY3Rpb24gYWx3YXlzIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2ZcclxuICogdGhlIGdpdmVuIGNsYXNzIGFuZCBkb2Vzbid0IGFzc29jaWF0ZSB0aGUgY2xhc3Mgd2l0aCB0aGUgY3JlYXRlZCBpbnN0YW5jZS4gVGhhdCBtZWFucyB0aGF0IGlmXHJcbiAqIGEgY2xhc3MgaXMgZW1iZWRkZWQgaW50byBtb3JlIHRoYW4gb25lIFwib3duZXJcIiwgdHdvIHNlcGFyYXRlIGluc3RhbmNlcyBvZiBlYWNoIENTUyBydWxlIHdpbGwgYmVcclxuICogY3JlYXRlZCB3aXRoIGRpZmZlcmVudCB1bmlxdWUgbmFtZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGVtYmVkPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+KCBpbnN0T3JDbGFzczogVCB8IElTdHlsZURlZmluaXRpb25DbGFzczxUPik6IFQgfCBudWxsXHJcbntcclxuXHQvLyByZXR1cm4gZGVmaW5pdGlvbiBpbnN0YW5jZSB3aXRob3V0IHByb2Nlc3NpbmcgaXQuIFRoaXMgaXMgdGhlIGluZGljYXRpb24gdGhhdCB0aGUgZGVmaW50aW9uXHJcblx0Ly8gd2lsbCBiZSBlbWJlZGRlZCBpbnRvIGFub3RoZXIgZGVmaW5pdGlvbi5cclxuXHRyZXR1cm4gaW5zdE9yQ2xhc3MgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24gPyBpbnN0T3JDbGFzcyA6IG5ldyBpbnN0T3JDbGFzcygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkIChzaG9ydCkgcnVsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIGVuYWJsZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRyZXR1cm4gc19lbmFibGVTaG9ydE5hbWVzKCBlbmFibGUsIHByZWZpeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIHRoZSBjbGFzcyBwcm9wZXJ0eSBvZiBIVE1MIGVsZW1lbnRzLlxyXG4gKi9cdFx0XHRcdFxyXG5leHBvcnQgdHlwZSBDbGFzc1Byb3BUeXBlID0gc3RyaW5nIHwgSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlIHwgQ2xhc3NQcm9wVHlwZVtdO1xyXG5cclxuLyoqXHJcbiAqIENvbmNhdGVuYXRlcyB0aGUgbmFtZXMgb2YgdGhlIGdpdmVuIGNsYXNzZXMgaW50byBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gYVxyXG4gKiBgY2xhc3NgIHByb3BlcnR5IG9mIGFuIEhUTUwgZWxlbWVudC5cclxuICogQHBhcmFtIGNsYXNzUHJvcHNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VzKCAuLi5jbGFzc1Byb3BzOiBDbGFzc1Byb3BUeXBlW10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiB2YWwyc3RyKCBjbGFzc1Byb3BzLCB7XHJcblx0XHRhcnJJdGVtRnVuYzogdiA9PiB2IGluc3RhbmNlb2YgQ2xhc3NSdWxlID8gdi5uYW1lIDogY2xhc3Nlcyh2KVxyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hvb3NlcyB0aGUgZmlyc3Qgbm9uLW51bGwgbmFtZSBmcm9tIHRoZSBnaXZlbiBsaXN0IG9mIGNsYXNzZXMuXHJcbiAqIEBwYXJhbSBjbGFzc1Byb3BzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlQ2xhc3MoIC4uLmNsYXNzUHJvcHM6IENsYXNzUHJvcFR5cGVbXSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgZm9yKCBsZXQgY2xzIG9mIGNsYXNzUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFjbHMpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjbHMgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBjbHM7XHJcbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjbHMpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBjaG9vc2VDbGFzcyggY2xzKTtcclxuICAgICAgICAgICAgaWYgKG5hbWUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2xzLm5hbWUpXHJcbiAgICAgICAgICAgIHJldHVybiBjbHMubmFtZTtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUnVsZSB2aXJ0dWFsaXphdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1NlcmlhbGl6ZXIgaW50ZXJmYWNlIGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGFuZCBvYmplY3RzXHJcbiAqIGFuZCBzZXJpYWxpemluZyB0aGVtIHRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBjYW4gYmUgdXNlZCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nIHdoZW5cclxuICogdGhlIHJlc3VsdGFudCBzdHJpbmcgY2FuIGJlIHNldCBhcyB0aGUgY29udGVudCBvZiBhIGA8c3R5bGU+YCBlbGVtZW50LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzU2VyaWFsaXplclxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEFkZHMgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBvciBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgYWRkKCBpbnN0T3JDbGFzczogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzKTogdm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgY29uY2F0ZW5hdGVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhbGwgQ1NTIHJ1bGVzIGFkZGVkIHRvIHRoZSBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBzZXJpYWxpemUoKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IElDc3NTZXJpYWxpemVyIG9iamVjdCB0aGF0IGFsbG93cyBhZGRpbmcgc3R5bGUgZGVmaW5pdGlvbiBjbGFzc2VzXHJcbiAqIGFuZCBpbnN0YW5jZXMgYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzdHJpbmcuIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuXHJcbiAqIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZSBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDc3NTZXJpYWxpemVyKCk6IElDc3NTZXJpYWxpemVyXHJcbntcclxuICAgIHJldHVybiBuZXcgQ3NzU2VyaWFsaXplcigpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXJpYWxpemVzIG9uZSBvciBtb3JlIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgaW5zdGFuY2VzIGFuZCByZXR1cm5zIHRoZWlyIENTUyBzdHJpbmdcclxuICogcmVwcmVzZW50YXRpb24uIFRoaXMgY2FuIGJlIHVzZWQgZm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZyB3aGVuIHRoZSByZXN1bHRhbnQgc3RyaW5nIGNhbiBiZVxyXG4gKiBzZXQgYXMgdGhlIGNvbnRlbnQgb2YgYSBgPHN0eWxlPmAgZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVUb0NTUyggYXJnMTogU3R5bGVEZWZpbml0aW9uIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG4gICAgLi4uYXJnczogKFN0eWxlRGVmaW5pdGlvbiB8IElTdHlsZURlZmluaXRpb25DbGFzcylbXSk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgc2VyaWFsaXplciA9IG5ldyBDc3NTZXJpYWxpemVyKCk7XHJcbiAgICBzZXJpYWxpemVyLmFkZCggYXJnMSk7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxyXG4gICAgICAgIGFyZ3MuZm9yRWFjaCggaW5zdE9yQ2xhc3MgPT4gc2VyaWFsaXplci5hZGQoIGluc3RPckNsYXNzKSk7XHJcblxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZXIuc2VyaWFsaXplKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNlcmlhbGl6ZXIgY2xhc3MgYWxsb3dzIGFkZGluZyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIG9iamVjdHNcclxuICogYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5jbGFzcyBDc3NTZXJpYWxpemVyIGltcGxlbWVudHMgSUNzc1NlcmlhbGl6ZXJcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGQoIGluc3RPckNsYXNzOiBTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gcHJvY2Vzc0luc3RhbmNlT3JDbGFzcyggaW5zdE9yQ2xhc3MpO1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UgfHwgdGhpcy5pbnN0YW5jZXMuaGFzKGluc3RhbmNlKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmluc3RhbmNlcy5hZGQoIGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgY29uY2F0ZW5hdGVkIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhbGwgQ1NTIHJ1bGVzIGFkZGVkIHRvIHRoZSBjb250ZXh0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBjdHggPSBuZXcgUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuZm9yRWFjaCggaW5zdGFuY2UgPT4gY3R4LmFkZFN0eWxlRGVmaW5pdGlvbiggaW5zdGFuY2UpKTtcclxuICAgICAgICByZXR1cm4gY3R4LnRvcExldmVsQnVmICsgY3R4Lm5vblRvcExldmVsQnVmO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBvZiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlcy4gVGhpcyBpcyBuZWVkZWQgdG8gbm90IGFkZCBzdHlsZSBkZWZpbml0aW9ucyBtb3JlIHRoYW4gb25jZVxyXG4gICAgaW5zdGFuY2VzID0gbmV3IFNldDxTdHlsZURlZmluaXRpb24+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNlcmlhbGl6ZXIgY2xhc3MgYWxsb3dzIGFkZGluZyBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgYW5kIG9iamVjdHNcclxuICogYW5kIHNlcmlhbGl6aW5nIHRoZW0gdG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2hlblxyXG4gKiB0aGUgcmVzdWx0YW50IHN0cmluZyBjYW4gYmUgc2V0IGFzIHRoZSBjb250ZW50IG9mIGEgYDxzdHlsZT5gIGVsZW1lbnQuXHJcbiAqL1xyXG5jbGFzcyBSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQgaW1wbGVtZW50cyBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0XHJcbntcclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBwdWJsaWMgYWRkUnVsZVRleHQoIHM6IHN0cmluZywgaXNUb3BMZXZlbFJ1bGU/OiBib29sZWFuKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmIChpc1RvcExldmVsUnVsZSlcclxuICAgICAgICAgICAgdGhpcy50b3BMZXZlbEJ1ZiArPSBzICsgXCJcXG5cIjtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9uVG9wTGV2ZWxCdWYgKz0gcyArIFwiXFxuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkcyBydWxlIHRleHRcclxuICAgIHB1YmxpYyBhZGRTdHlsZURlZmluaXRpb24oIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlcy5oYXMoIGluc3RhbmNlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzLmFkZCggaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICBzZXJpYWxpemVJbnN0YW5jZSggaW5zdGFuY2UsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdHJpbmcgYnVmZmVyIHRoYXQgYWNjdW11bGF0ZXMgdG9wLWxldmVsIHJ1bGUgdGV4dHMuXHJcbiAgICBwdWJsaWMgdG9wTGV2ZWxCdWYgPSBcIlwiO1xyXG5cclxuICAgIC8vIFN0cmluZyBidWZmZXIgdGhhdCBhY2N1bXVsYXRlcyBub24tdG9wLWxldmVsIHJ1bGUgdGV4dHMuXHJcbiAgICBwdWJsaWMgbm9uVG9wTGV2ZWxCdWYgPSBcIlwiO1xyXG5cclxuICAgIC8vIFNldCBvZiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlcyB0aGF0IHdlcmUgYWxyZWFkeSBzZXJpYWxpemVkIGluIHRoaXMgY29udGV4dC5cclxuICAgIHByaXZhdGUgaW5zdGFuY2VzID0gbmV3IFNldDxTdHlsZURlZmluaXRpb24+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUnVsZSB2aXJ0dWFsaXphdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBEZWNvcmF0b3IgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byBhIHJ1bGUgaWYgaXQgaXMgZGVmaW5lZCBhbmQgdXNlZCBpbiB0aGUgc2FtZSBzdHlsZVxyXG4gKiBkZWZpbml0aW9uIGNsYXNzIGJ1dCB0aGVuIGlzIG92ZXJyaWRkZW4gaW4gYSBkZXJpdmVkIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIFRoZSBwcm9ibGVtXHJcbiAqIHRoaXMgc29sdmVzIGlzIHRoaXM6IHdoZW4gYSBydWxlIGlzIGRlZmluZWQgaW4gYSBiYXNlIGNsYXNzIGFuZCB0aGVuIG92ZXJyaWRkZW4gaW4gYSBkZXJpdmVkXHJcbiAqIGNsYXNzLCB3aGVuIGFuIGluc3RhbmNlIG9mIHRoZSBkZXJpdmVkIGNsYXNzIGlzIGNyZWF0ZWQsIHRoZSBydWxlcyB0aGF0IGFyZSBjcmVhdGVkIGluIHRoZVxyXG4gKiBiYXNlIGFuZCBkZXJpdmVkIGNsYXNzZXMgc2VlIGRpZmZlcmVudCB2YWx1ZXMgb2YgdGhlIHJ1bGUuIFNpbmNlIG91ciBydWxlcyBhcmUgZGVmaW5lZCBhc1xyXG4gKiBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RvciwgdGhlIGJhc2UgY2xhc3MgY29uc3RydWN0b3IncyBjb2RlIG9ubHkgc2VlcyB0aGUgdmFsdWUgYXNzaWduZWQgaW4gdGhhdFxyXG4gKiBjb2RlLiBJZiBhbm90aGVyIHJ1bGUgaW4gdGhlIGJhc2UgY2xhc3MgdXNlcyB0aGlzIGZpcnN0IHJ1bGUsIHRoaXMgdmFsdWUgaXMgcmVtZW1iZXJlZC5cclxuICogXHJcbiAqIFRoZSBgQHZpcnR1YWxgIGRlY29yYXRvciBjcmVhdGVzIGEgUHJveHkgb2JqZWN0IGZvciB0aGUgcnVsZSB3aXRoIHRoZSBoYW5kbGVyIHRoYXQga2VlcHMgdGhlXHJcbiAqIG1vc3QgcmVjZW50IHZhbHVlIHNldC4gVGh1cyB3aGVuIGEgcnVsZSBpbiB0aGUgYmFzZSBjbGFzcydzIGNvbnN0cnVjdG9yIHVzZXMgYSB2aXJ0dWFsaXplZFxyXG4gKiBydWxlLCB0aGUgZmlyc3QgcnVsZSB3aWxsIHNlZSB0aGUgb3ZlcnJpZGRlbiB2YWx1ZSBvZiB0aGUgcnVsZSB3aGVuIGFjY2Vzc2VkIGluIHRoZVxyXG4gKiBwb3N0LWNvbnN0cnVjdG9yIGNvZGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmlydHVhbCggdGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZylcclxue1xyXG4gICAgLy8gc3ltYm9sIHRvIGtlZXAgdGhlIHByb3h5IGhhbmRsZXIgdmFsdWVcclxuICAgIGxldCBzeW0gPSBTeW1ib2wobmFtZSArIFwiX3Byb3h5X2hhbmRsZXJcIik7XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGdldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSB0aGUgaGFuZGxlciBhbmQgY3JlYXRlIGl0IGlmIHdlIGRvbid0LiBJbiB0aGlzXHJcbiAgICAgICAgICAgIC8vIGNhc2Ugd2UgYWxzbyBjcmVhdGUgYSBwcm94eSBmb3IgYW4gZW1wdHkgb2JqZWN0XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gdGhpc1tzeW1dIGFzIFZpcnRIYW5kbGVyO1xyXG4gICAgICAgICAgICBpZiAoIWhhbmRsZXIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbc3ltXSA9IGhhbmRsZXIgPSBuZXcgVmlydEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIucHJveHkgPSBuZXcgUHJveHkoIHt9LCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIucHJveHk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2V0KHYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gdGhlIG9iamVjdCB0eXBlIHdlIG1heSBoYXZlIGEgZGlmZmVyZW50IG9iamVjdCB0byBwYXNzIHRvIHRoZSBwcm94eTtcclxuICAgICAgICAgICAgLy8gYWxzbyB3ZSBuZWVkIHRvIGtub3cgd2hldGhlciB0aGUgb2JqZWN0IGlzIGEgc3BlY2lhbCAoaW50ZXJuYWwgdG8gSmF2YVNjcmlwdCkgb25lXHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgaGFuZGxlciB3aWxsIGhhdmUgdG8gdHJlYXQgaXQgc3BlY2lhbGx5XHJcbiAgICAgICAgICAgIGxldCBbbmV3VGFyZ2V0LCBpc1NwZWNpYWxdID0gZ2V0UHJveGlhYmxlT2JqZWN0KHYpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgdGhlIGhhbmRsZXIgYW5kIGNyZWF0ZSBpdCBpZiB3ZSBkb24ndFxyXG4gICAgICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXNbc3ltXSBhcyBWaXJ0SGFuZGxlcjtcclxuICAgICAgICAgICAgaWYgKCFoYW5kbGVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3N5bV0gPSBoYW5kbGVyID0gbmV3IFZpcnRIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLnByb3h5ID0gbmV3VGFyZ2V0ID09IG51bGwgPyB7fSA6IG5ldyBQcm94eSggbmV3VGFyZ2V0LCBoYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHRoZSBuZXcgdmF1bGVzIHRvIHRoZSBoYW5kbGVyIHNvIHRoYXQgaXQgd2lsbCB1c2UgaXQgZnJvbSBub3cgb25cclxuICAgICAgICAgICAgaGFuZGxlci50YXJnZXQgPSBuZXdUYXJnZXQ7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuaXNTcGVjaWFsID0gaXNTcGVjaWFsO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3IgdGhlIGdpdmVuIHZhbHVlIHJldHVybnMgYSB0d28tZWxlbWVudCB0dXBsZTpcclxuICogLSB0aGUgZmlyc3QgZWxlbWVudCBpcyB0aGUgdmFsdWUgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIGEgcHJveHkuIEZvciBvYmplY3RzLCBpdCBpcyB0aGUgaW5wdXRcclxuICogICB2YWx1ZS4gRm9yIHByaW1pdGl2ZSB0eXBlcyBpdCBpcyB0aGUgYm94ZWQgb2JqZWN0IChlLmcuIE51bWJlciBmb3IgbnVtYmVycykuIEZvciBudWxsIGFuZFxyXG4gKiAgIHVuZGVmaW5lZCBpdCBpcyBudWxsIGFuZCB1bmRlZmluZWQgcmVzcGVjdGl2ZWx5XHJcbiAqIC0gdGhlIHNlY29uZCBlbGVtZW50IGlzIHRoZSBcInNwZWNpYWxcIiBmbGFnLCB3aGljaCBpcyB0cnVlIGlmIHRoZSBwcm94eSBoYW5kbGVyIHdpbGwgaGF2ZSB0byBoYXZlXHJcbiAqICAgYSBzcGVjaWFsIHRyZWF0bWVudCB0aGUgb2JqZWN0cycgbWV0aG9kczsgdGhhdCBpcywgaXQgd2lsbCBoYXZlIHRvIGJpbmQgdGhlbSB0byB0aGUgdGFyZ2V0XHJcbiAqICAgb2JqZWN0IGJlZm9yZSByZXR1cm5pbmcgdGhlbSBmcm9tIHRoZSBnZXQgbWV0aG9kLiBUaGlzIGlzIHRydWUgZm9yIFwiaW50ZXJuYWxcIiBKYXZhU2NyaXB0XHJcbiAqICAgY2xhc3NlcyBsaWtlIGJveGVkIHByaW1pdGl2ZSB0eXBlcywgTWFwLCBTZXQsIFByb21pc2UgYW5kIHNvbWUgb3RoZXJzLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0UHJveGlhYmxlT2JqZWN0KCB2OiBhbnkpOiBbYW55LCBib29sZWFuXVxyXG57XHJcbiAgICBpZiAodiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBbdiwgZmFsc2VdO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIFtuZXcgU3RyaW5nKHYpLCB0cnVlXTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiBbbmV3IE51bWJlcih2KSwgdHJ1ZV07XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgcmV0dXJuIFtuZXcgQm9vbGVhbih2KSwgdHJ1ZV07XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdiA9PT0gXCJzeW1ib2xcIilcclxuICAgICAgICByZXR1cm4gW25ldyBPYmplY3QodiksIHRydWVdO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgKHYgaW5zdGFuY2VvZiBNYXAgfHwgdiBpbnN0YW5jZW9mIFNldCkpXHJcbiAgICAgICAgcmV0dXJuIFt2LCB0cnVlXTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gW3YsIGZhbHNlXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlciBmb3IgdGhlIHByb3h5IGNyZWF0ZWQgYnkgdGhlIGBAdmlydHVhbGAgZGVjb3JhdG9yLiBJdCBrZWVwcyB0aGUgY3VycmVudCB2YWx1ZSBvZiBhXHJcbiAqIHJ1bGUgc28gdGhhdCB0aGUgbW9zdCByZWNlbnQgdmFsdWUgaXMgdXNlZCB3aGVuZXZlciB0aGUgcHJveHkgaXMgYWNjZXNzZWQuXHJcbiAqL1xyXG5jbGFzcyBWaXJ0SGFuZGxlciBpbXBsZW1lbnRzIFByb3h5SGFuZGxlcjxhbnk+XHJcbntcclxuICAgIHB1YmxpYyBwcm94eTogYW55O1xyXG4gICAgcHVibGljIHRhcmdldDogYW55O1xyXG4gICAgcHVibGljIGlzU3BlY2lhbDogYm9vbGVhbjtcclxuXHJcbiAgICAvLyBpbnRlcmVzdGluZyB0aGluZ3MgaGFwcGVuIGluIHRoZSBnZXQgbWV0aG9kXHJcbiAgICBnZXQoIHQ6IGFueSwgcDogUHJvcGVydHlLZXksIHI6IGFueSk6IGFueVxyXG4gICAge1xyXG4gICAgICAgIC8vIGlmIG91ciB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZCBhbmQgdGhlIHJlcXVlc3RlZCBwcm9wZXJ0eSBpcyBhIHdlbGwta25vd24gc3ltYm9sXHJcbiAgICAgICAgLy8gdG9QcmltaXRpdmUgd2UgcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGVpdGhlciBudWxsIG9yIHVuZGVmaW5lZC4gVGhpcyB3aWxsIGhlbHBcclxuICAgICAgICAvLyBpZiBvdXIgcHJveHkgZWl0aGVyIHBhcnRpY2lwYXRlIGluIGFuIGFyaXRobWV0aWMgZXhwcmVzc2lvbiBvciBvciBpcyBjb21iaW5lZCB3aXRoIGFcclxuICAgICAgICAvLyBzdHJpbmcuXHJcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09IG51bGwgJiYgcCA9PT0gU3ltYm9sLnRvUHJpbWl0aXZlKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy50YXJnZXQ7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgdmFsdWUgb2YgdGhlIHJlcXVlc3QgcHJvcGVydHk7IGlmIHRoZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZCwgYW4gZXhjZXB0aW9uXHJcbiAgICAgICAgLy8gd2lsbCBiZSB0aHJvd24gLSB3aGljaCBpcyBleHBlY3RlZC5cclxuICAgICAgICBsZXQgcHYgPSBSZWZsZWN0LmdldCggdGhpcy50YXJnZXQsIHAsIHIpO1xyXG5cclxuICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdGVkIHByb3BlcnR5IGlzIGEgZnVuY3Rpb24gb2YgYSBib3hlZCBwcmltaXRpdmUsIGJpbmQgdGhlIG9yaWdpbmFsIG1ldGhvZFxyXG4gICAgICAgIC8vIHRvIHRoZSB0YXJnZXQgb2JqZWN0XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTcGVjaWFsICYmIHR5cGVvZiBwdiA9PT0gXCJmdW5jdGlvblwiID8gcHYuYmluZCggdGhpcy50YXJnZXQpIDogcHY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIHJlc3Qgb2YgdGhlIG1ldGhvZHMgbW9zdGx5IGRlbGVnYXRlIHRoZSBjYWxscyB0byB0aGUgbGF0ZXN0IHRhcmdldCBpbnN0ZWFkIG9mIHRoZVxyXG4gICAgLy8gb3JpZ2luYWwgdGFyZ2V0LiBJbiBzb21lIGNhc2VzLCB3ZSBjaGVjayB3aGV0aGVyIHRoZSB0YXJnZXQgaXMgbnVsbCBvciB1bmRlZmluZWQgc28gdGhhdFxyXG4gICAgLy8gd2UgZG9uJ3R0aHJvdyBleGNlcHRpb25zIHdoZXIgd2UgY2FuIGF2b2lkIGl0LlxyXG5cclxuICAgIGdldFByb3RvdHlwZU9mKCB0OiBhbnkpOiBvYmplY3QgfCBudWxsXHJcbiAgICAgICAgeyByZXR1cm4gdGhpcy50YXJnZXQgPT0gbnVsbCA/IG51bGwgOiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKCB0aGlzLnRhcmdldCk7IH1cclxuICAgIHNldFByb3RvdHlwZU9mKHQ6IGFueSwgdjogYW55KTogYm9vbGVhblxyXG4gICAgICAgIHsgcmV0dXJuIFJlZmxlY3Quc2V0UHJvdG90eXBlT2YoIHRoaXMudGFyZ2V0LCB2KTsgfVxyXG4gICAgaXNFeHRlbnNpYmxlKHQ6IGFueSk6IGJvb2xlYW5cclxuICAgICAgICB7IHJldHVybiB0aGlzLnRhcmdldCA9PSBudWxsID8gZmFsc2UgOiBSZWZsZWN0LmlzRXh0ZW5zaWJsZSggdGhpcy50YXJnZXQpOyB9XHJcbiAgICBwcmV2ZW50RXh0ZW5zaW9ucyh0OiBhbnkpOiBib29sZWFuXHJcbiAgICAgICAgeyByZXR1cm4gdGhpcy50YXJnZXQgPT0gbnVsbCA/IGZhbHNlIDogUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyggdGhpcy50YXJnZXQpOyB9XHJcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodDogYW55LCBwOiBQcm9wZXJ0eUtleSk6IFByb3BlcnR5RGVzY3JpcHRvciB8IHVuZGVmaW5lZFxyXG4gICAgICAgIHsgcmV0dXJuIFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKCB0aGlzLnRhcmdldCwgcCk7IH1cclxuICAgIGhhcyh0OiBhbnksIHA6IFByb3BlcnR5S2V5KTogYm9vbGVhblxyXG4gICAgICAgIHsgcmV0dXJuIHRoaXMudGFyZ2V0ID09IG51bGwgPyBmYWxzZSA6IFJlZmxlY3QuaGFzKCB0aGlzLnRhcmdldCwgcCk7IH1cclxuICAgIHNldCggdDogYW55LCBwOiBQcm9wZXJ0eUtleSwgdjogYW55LCByOiBhbnkpOiBib29sZWFuXHJcbiAgICAgICAgeyByZXR1cm4gUmVmbGVjdC5zZXQoIHRoaXMudGFyZ2V0LCBwLCB2LCByKTsgfVxyXG4gICAgZGVsZXRlUHJvcGVydHkodDogYW55LCBwOiBQcm9wZXJ0eUtleSk6IGJvb2xlYW5cclxuICAgICAgICB7IHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KCB0aGlzLnRhcmdldCwgcCk7IH1cclxuICAgIGRlZmluZVByb3BlcnR5KHQ6IGFueSwgcDogUHJvcGVydHlLZXksIGF0dHJzOiBQcm9wZXJ0eURlc2NyaXB0b3IpOiBib29sZWFuXHJcbiAgICAgICAgeyByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcy50YXJnZXQsIHAsIGF0dHJzKTsgfVxyXG4gICAgZW51bWVyYXRlKHQ6IGFueSk6IFByb3BlcnR5S2V5W11cclxuICAgICAgICB7IHJldHVybiBBcnJheS5mcm9tKCBSZWZsZWN0LmVudW1lcmF0ZSggdGhpcy50YXJnZXQpKTsgfVxyXG4gICAgb3duS2V5cyh0OiBhbnkpOiBQcm9wZXJ0eUtleVtdXHJcbiAgICAgICAgeyByZXR1cm4gUmVmbGVjdC5vd25LZXlzKCB0aGlzLnRhcmdldCk7IH1cclxuICAgIGFwcGx5KHQ6IGFueSwgdGhpc0FyZzogYW55LCBhcmdzPzogYW55KTogYW55XHJcbiAgICAgICAgeyByZXR1cm4gdGhpcy50YXJnZXQuYXBwbHkoIHRoaXMsIGFyZ3MpOyB9XHJcbiAgICBjb25zdHJ1Y3QodDogYW55LCBhcmdzOiBhbnksIG5ld1RhcmdldD86IGFueSk6IG9iamVjdFxyXG4gICAgICAgIHsgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0KCB0aGlzLnRhcmdldCwgYXJncywgbmV3VGFyZ2V0KTsgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U3R5bGVEZWZpbml0aW9uLCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsIElTY2hlZHVsZXJ9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtwcm9jZXNzSW5zdGFuY2VPckNsYXNzfSBmcm9tIFwiLi4vcnVsZXMvUnVsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1xyXG4gICAgc19zY2hlZHVsZUNhbGwsIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUsIHNfZ2V0RGVmYXVsdFNjaGVkdWxlclR5cGUsXHJcbiAgICBJQWN0aXZhdG9yLCBzX3JlZ2lzdGVyU2NoZWR1bGVyLCBzX3VucmVnaXN0ZXJTY2hlZHVsZXJcclxufSBmcm9tIFwiLi4vcnVsZXMvU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQWN0aXZhdGVzIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIG9yIGluc3RhbmNlIGFuZCBpbnNlcnRzIGFsbCBpdHMgcnVsZXMgaW50byBET00uIElmXHJcbiAqIHRoZSBpbnB1dCBvYmplY3QgaXMgbm90IGFuIGluc3RhbmNlIGJ1dCBhIGNsYXNzLCB3aGljaCBpcyBub3QgeWV0IGFzc29jaWF0ZWQgd2l0aCBhbiBpbnN0YW5jZSxcclxuICogdGhlIGluc3RhbmNlIGlzIGZpcnN0IGNyZWF0ZWQgYW5kIHByb2Nlc3NlZC4gTm90ZSB0aGF0IGVhY2ggc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBtYWludGFpbnNcclxuICogYSByZWZlcmVuY2UgY291bnRlciBvZiBob3cgbWFueSB0aW1lcyBpdCB3YXMgYWN0aXZhdGVkIGFuZCBkZWFjdGl2YXRlZC4gVGhlIHJ1bGVzIGFyZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSBvbmx5IHVwb24gZmlyc3QgYWN0aXZhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uPihcclxuXHRpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4sXHJcblx0c2NoZWR1bGVyVHlwZT86IG51bWJlcik6IFQgfCBudWxsXHJcbntcclxuXHRsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCBpbnN0YW5jZU9yQ2xhc3MpIGFzIFQ7XHJcblx0aWYgKGluc3RhbmNlKVxyXG5cdFx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IGFjdGl2YXRvci5hY3RpdmF0ZSggaW5zdGFuY2UpLCBzY2hlZHVsZXJUeXBlKTtcclxuXHJcblx0cmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBieSByZW1vdmluZyBpdHMgcnVsZXMgZnJvbSBET00uIE5vdGUgdGhhdCBlYWNoXHJcbiAqIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgbWFpbnRhaW5zIGEgcmVmZXJlbmNlIGNvdW50ZXIgb2YgaG93IG1hbnkgdGltZXMgaXQgd2FzIGFjdGl2YXRlZCBhbmRcclxuICogZGVhY3RpdmF0ZWQuIFRoZSBydWxlcyBhcmUgcmVtb3ZlZCBmcm9tIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlciBnb2VzIGRvd24gdG8gMC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0c19zY2hlZHVsZUNhbGwoIChhY3RpdmF0b3I6IElBY3RpdmF0b3IpID0+IGFjdGl2YXRvci5kZWFjdGl2YXRlKCBpbnN0YW5jZSksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcml0ZXMgdG8gRE9NIGFsbCBzdHlsZSBjaGFuZ2VzIGNhdXNlZCBieSB0aGUgY2FsbHMgdG8gdGhlIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9uc1xyXG4gKiBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdCBhY3RpdmF0aW9uIG9mIHRoZSBnaXZlbiBzY2hlZHVsaW5nIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yY2VET01VcGRhdGUoIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmZvcmNlRE9NVXBkYXRlKCksIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGFsbCBzY2hlZHVsZWQgYWN0aXZhdGlvbnMgY2F1c2VkIGJ5IHRoZSBjYWxscyB0byB0aGUgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zXHJcbiAqIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0IGFjdGl2YXRpb24gb2YgdGhlIGdpdmVuIHNjaGVkdWxpbmcgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxET01VcGRhdGUoIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gYWN0aXZhdG9yLmNhbmNlbERPTVVwZGF0ZSgpLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZGVmYXVsdCBzY2hlZHVsZXIgdHlwZSB0aGF0IGlzIHVzZWQgYnkgYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIHRoYXQgYXJlXHJcbiAqIGNhbGxlZCB3aXRob3V0IGV4cGxpY2l0bHkgcHJvdmlkaW5nIHZhbHVlIHRvIHRoZSBzY2hlZHVsZXIgdHlwZSBwYXJhbWV0ZXIuIFJldHVybnMgdGhlIHR5cGUgb2ZcclxuICogdGhlIHByZXZpb3VzIGRlZmF1bHQgc2NoZWR1bGVyIG9yIDAgaWYgYW4gZXJyb3Igb2NjdXJzIChlLmcuIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBJRCBpcyBub3RcclxuICogcmVnaXN0ZXJlZCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGU6IG51bWJlcik6IG51bWJlclxyXG57XHJcblx0cmV0dXJuIHNfc2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCBieSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgdGhhdCBhcmVcclxuICogY2FsbGVkIHdpdGhvdXQgZXhwbGljaXRseSBwcm92aWRpbmcgdmFsdWUgdG8gdGhlIHNjaGVkdWxlciB0eXBlIHBhcmFtZXRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0U2NoZWR1bGVyVHlwZSgpOiBudW1iZXJcclxue1xyXG5cdHJldHVybiBzX2dldERlZmF1bHRTY2hlZHVsZXJUeXBlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyB0aGUgZ2l2ZW4gc2NoZWR1bGVyIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllciwgd2hpY2hcclxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclNjaGVkdWxlciggc2NoZWR1bGVyOiBJU2NoZWR1bGVyKTogbnVtYmVyXHJcbntcclxuICAgIHJldHVybiBzX3JlZ2lzdGVyU2NoZWR1bGVyKCBzY2hlZHVsZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBVbnJlZ2lzdGVycyBhIHNjaGVkdWxlciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZDogbnVtYmVyKTogdm9pZFxyXG57XHJcbiAgICByZXR1cm4gc191bnJlZ2lzdGVyU2NoZWR1bGVyKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtFeHRlbmRlZCwgQ3NzUG9zaXRpb24sIENzc0xlbmd0aCwgQ3NzUGVyY2VudCwgQ3NzQW5nbGUsIENzc051bWJlciwgT25lT3JCb3gsIENzc1BvaW50fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQ29sb3J9IGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7U2VsZWN0b3JJdGVtLCBJU2VsZWN0b3JQcm94eX0gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7XHJcblx0U3R5bGVzZXQsIEV4dGVuZGVkU3R5bGVzZXQsIFN0cmluZ1N0eWxlc2V0LCBFeHRlbnRLZXl3b3JkLCBJRmlsdGVyUHJveHksIElCYXNpY1NoYXBlUHJveHksXHJcblx0SVRyYW5zZm9ybVByb3h5LCBCb3JkZXJSYWRpdXNfU3R5bGVUeXBlLCBGaWxsUnVsZV9TdHlsZVR5cGUsIElQYXRoQnVpbGRlciwgSVJheVByb3h5LFxyXG5cdElGaXRDb250ZW50UHJveHksIElSZXBlYXRQcm94eSwgSU1pbk1heFByb3h5LCBHcmlkVHJhY2tTaXplLCBHcmlkVHJhY2ssIElTcGFuUHJveHksIEdyaWRMaW5lQ291bnRPck5hbWVcclxufSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge1xyXG5cdHN0eWxlUHJvcFRvU3RyaW5nLCBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCwgYm9yZGVyUmFkaXVzVG9TdHJpbmcsIGZvckFsbFByb3BzSW5TdHlsc2V0LCBncmlkVHJhY2tUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7XHJcblx0Q3NzUGVyY2VudE1hdGgsIENzc0xlbmd0aE1hdGgsIGFycjJzdHIsIENzc0FuZ2xlTWF0aCwgQ3NzTnVtYmVyTWF0aCwgcG9zMnN0cixcclxuXHR0ZW1wbGF0ZVN0cmluZ1RvU3RyaW5nLCB2YWwyc3RyXHJcbn0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIjtcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4uL3J1bGVzL1NjaGVkdWxpbmdcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZWxlY3Rvci4gVGhpcyBmdW5jdGlvbiBpcyBhIHRhZyBmdW5jdGlvbiBhbmQgbXVzdCBiZVxyXG4gKiBpbnZva2VkIHdpdGggdGhlIHRlbXBsYXRlIHN0cmluZyB3aXRob3V0IHBhcmVudGhlc2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdG9yKCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIC4uLnBhcmFtczogU2VsZWN0b3JJdGVtW10pOiBJU2VsZWN0b3JQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+IHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFN0eWxlc2V0IG1hbmlwdWxhdGlvblxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byBhIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSBzdHlsZVByb3BOYW1lIFN0eWxlIHByb3BlcnR5IG5hbWUgdGhhdCBkZXRlcm1pbmVzIGhvdyB0aGUgdmFsdWUgc2hvdWxkIGJlIGNvbnZlcnRlZFxyXG4gKiB0byBhIENTUyBjb21wbGlhbnQgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVQcm9wVmFsdWUgVmFsdWUgdG8gY29udmVydC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZVByb3BWYWx1ZTxLIGV4dGVuZHMga2V5b2YgRXh0ZW5kZWRTdHlsZXNldD4oIHN0eWxlUHJvcE5hbWU6IEssXHJcblx0c3R5bGVQcm9wVmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10pOiBzdHJpbmdcclxue1xyXG5cdHJldHVybiBzdHlsZVByb3BUb1N0cmluZyggc3R5bGVQcm9wTmFtZSwgc3R5bGVQcm9wVmFsdWUsIHRydWUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXRzIHZhbHVlcyBvZiB0aGUgc3R5bGUgcHJvcGVydGllcyBmcm9tIHRoZSBnaXZlbiBTdHlsZXNldCBvYmplY3QgdG8gdGhlIGBzdHlsZWAgYXR0cmlidXRlXHJcbiAqIG9mIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gSFRNTCBlbGVtZW50IHdob3NlIHN0eWxlcyB3aWxsIGJlIHNldC5cclxuICogQHBhcmFtIHN0eWxlc2V0IFN0eWxlc2V0IG9iamVjdCB3aGljaCBwcm92aWRlcyB2YWx1ZXMgZm9yIHN0eWxlIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudFN0eWxlKCBlbG06IEhUTUxFbGVtZW50LCBzdHlsZXNldDogU3R5bGVzZXQgfCBudWxsIHwgdW5kZWZpbmVkLFxyXG5cdHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuICAgIHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtLCBzdHlsZXNldCA/IHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldChzdHlsZXNldCkgOiBudWxsLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB2YWx1ZXMgb2YgdGhlIHN0eWxlIHByb3BlcnRpZXMgZnJvbSB0aGUgZ2l2ZW4gU3RyaW5nU3R5bGVzZXQgb2JqZWN0IHRvIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZVxyXG4gKiBvZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50LlxyXG4gKiBAcGFyYW0gZWxtIEhUTUwgZWxlbWVudCB3aG9zZSBzdHlsZXMgd2lsbCBiZSBzZXQuXHJcbiAqIEBwYXJhbSBzdHlsZXNldCBTdHJpbmdTdHlsZXNldCBvYmplY3Qgd2hpY2ggcHJvdmlkZXMgdmFsdWVzIGZvciBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRTdHJpbmdTdHlsZSggZWxtOiBIVE1MRWxlbWVudCwgc3R5bGVzZXQ6IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuXHRzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG57XHJcbiAgICBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggZWxtLCBudWxsLCBzdHlsZXNldCwgZmFsc2UsIHNjaGVkdWxlclR5cGUpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gW1tTdHlsZXNldF1dIG9iamVjdCBpbnRvIGFuIG9iamVjdCwgd2hlcmUgZWFjaCBTdHlsZXNldCdzIHByb3BlcnR5IGlzXHJcbiAqIGNvbnZlcnRlZCB0byBpdHMgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBzdHlsZXNldDogU3R5bGVzZXQpOiBTdHJpbmdTdHlsZXNldFxyXG57XHJcblx0bGV0IHJlczogU3RyaW5nU3R5bGVzZXQgPSB7fTtcclxuXHJcblx0Zm9yQWxsUHJvcHNJblN0eWxzZXQoIHN0eWxlc2V0LFxyXG5cdFx0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQgPT4geyByZXNbbmFtZV0gPSB2YWx1ZSB9KTtcclxuXHJcblx0cmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgdHdvIFN0eWxlc2V0IG9iamVjdHMgYnkgY29udmVydGluZyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHN0cmluZ3MgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcbiAqIHRoYXQgY29udGFpbnMgc3RyaW5nIHZhbHVlcyBvZiBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBuZXcgb3IgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIGluIHRoZSBuZXdcclxuICogc3R5bGVzZXQgYW5kIHVuZGVmaW5lZCB2YWx1ZXMgZm9yIHByb3BlcnRpZXMgdGhhdCBleGlzdCBpbiB0aGUgb2xkIHN0eWxlc2V0IGJ1dCBkb24ndCBleGlzdFxyXG4gKiBpbiB0aGUgbmV3IG9uZS5cclxuICogQHBhcmFtIG9sZFN0eWxlc2V0IFxyXG4gKiBAcGFyYW0gbmV3U3R5bGVzZXQgXHJcbiAqIEByZXR1cm5zIFN0cmluZ1N0eWxlc2V0IG9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCBoYXZlIGRpZmZlcmVudCB2YWx1ZXMgaW4gdGhlIG9sZCBhbmQgbmV3XHJcbiAqIHN0eWxlc2V0cy4gUHJvcGVydGllcyB0aGF0IGV4aXN0ZWQgaW4gdGhlIG9sZCBidXQgZG9uJ3QgZXhpc3QgaW4gdGhlIG5ldyBzdHlsZXNldCwgd2lsbCBoYXZlXHJcbiAqIHRoZWlyIHZhbHVlcyBzZXQgdG8gdW5kZWZpbmVkLiBJZiB0aGVyZSBpcyBubyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSB0d28gc3R5bGVzZXRzIG51bGwgaXNcclxuICogcmV0dXJuZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlmZlN0eWxlc2V0cyggb2xkU3R5bGVzZXQ6IFN0eWxlc2V0LCBuZXdTdHlsZXNldDogU3R5bGVzZXQpOiBTdHJpbmdTdHlsZXNldCB8IG51bGxcclxue1xyXG5cdGlmICghb2xkU3R5bGVzZXQgJiYgIW5ld1N0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0ZWxzZSBpZiAoIW9sZFN0eWxlc2V0KVxyXG5cdFx0cmV0dXJuIHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggbmV3U3R5bGVzZXQpO1xyXG5cdGVsc2UgaWYgKCFuZXdTdHlsZXNldClcclxuXHRcdHJldHVybiBzdHlsZXNldFRvU3RyaW5nU3R5bGVzZXQoIG9sZFN0eWxlc2V0KTtcclxuXHJcblx0Ly8gZmlyc3QgY29udmVydCBib3RoIHN0eWxlc2V0cyB0byB0aGVpciBzdHJpbmcgdmVyc2lvbnNcclxuXHRsZXQgb2xkU3RyaW5nU3R5bGVzZXQgPVx0c3R5bGVzZXRUb1N0cmluZ1N0eWxlc2V0KCBvbGRTdHlsZXNldCk7XHJcblx0bGV0IG5ld1N0cmluZ1N0eWxlc2V0ID1cdHN0eWxlc2V0VG9TdHJpbmdTdHlsZXNldCggbmV3U3R5bGVzZXQpO1xyXG5cclxuXHRsZXQgdXBkYXRlVmFsOiBTdHJpbmdTdHlsZXNldCB8IG51bGwgPSBudWxsO1xyXG5cclxuXHQvLyBsb29wIG92ZXIga2V5cyBpbiB0aGUgb2xkIHN0eWxlIG9iamVjdCBhbmQgZmluZCB0aG9zZSB0aGF0IGFyZSBub3QgaW4gdGhlIG5ldyBvbmUuIFRoZXNlXHJcblx0Ly8gd2lsbCBiZSByZW1vdmVkLlxyXG5cdGZvciggbGV0IGtleSBpbiBvbGRTdHJpbmdTdHlsZXNldClcclxuXHR7XHJcblx0XHRsZXQgbmV3U3RyaW5nVmFsID0gbmV3U3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdGlmIChuZXdTdHJpbmdWYWwgPT0gbnVsbClcclxuXHRcdHtcclxuXHRcdFx0dXBkYXRlVmFsID0gdXBkYXRlVmFsIHx8IHt9O1xyXG5cdFx0XHR1cGRhdGVWYWxba2V5XSA9IHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0bGV0IG9sZFN0cmluZ1ZhbCA9IG9sZFN0cmluZ1N0eWxlc2V0W2tleV07XHJcblx0XHRcdGlmIChvbGRTdHJpbmdWYWwgIT09IG5ld1N0cmluZ1ZhbClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHVwZGF0ZVZhbCA9IHVwZGF0ZVZhbCB8fCB7fTtcclxuXHRcdFx0XHR1cGRhdGVWYWxba2V5XSA9IG5ld1N0cmluZ1ZhbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG5ldyBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBvbGQgb25lLiBUaGVzZVxyXG5cdC8vIHdpbGwgYmUgYWRkZWQuXHJcblx0Zm9yKCBsZXQga2V5IGluIG5ld1N0cmluZ1N0eWxlc2V0KVxyXG5cdHtcclxuXHRcdGxldCBvbGRTdHJpbmdWYWwgPSBvbGRTdHJpbmdTdHlsZXNldFtrZXldO1xyXG5cdFx0aWYgKG9sZFN0cmluZ1ZhbCA9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSB1cGRhdGVWYWwgfHwge307XHJcblx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3RyaW5nU3R5bGVzZXRba2V5XTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB1cGRhdGVWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRmlsdGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRpbmcgcGVyY2VudCB2YWx1ZSB0byBpbnZvY2F0aW9uIG9mIHRoZSBnaXZlbiBDU1MgZnVuY3Rpb24uXHJcbmZ1bmN0aW9uIHBlcmNlbnRGaWx0ZXIoIG5hbWU6IHN0cmluZywgYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYCR7bmFtZX0oJHtDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nKCBhbW91bnQpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBicmlnaHRuZXNzKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBicmlnaHRuZXNzKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImJyaWdodG5lc3NcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgY29udHJhc3QoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyYXN0KCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImNvbnRyYXN0XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGdyYXlzY2FsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ3JheXNjYWxlKCBhbW91bnQ6IEV4dGVuZGVkPENzc1BlcmNlbnQ+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiBwZXJjZW50RmlsdGVyKCBcImdyYXlzY2FsZVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBpbnZlcnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVydCggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJpbnZlcnRcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgb3BhY2l0eSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3BhY2l0eSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJvcGFjaXR5XCIsIGFtb3VudCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNhdHVyYXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXR1cmF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NQZXJjZW50Pik6IElGaWx0ZXJQcm94eVxyXG57XHJcbiAgICByZXR1cm4gcGVyY2VudEZpbHRlciggXCJzYXR1cmF0ZVwiLCBhbW91bnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaWx0ZXJQcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzZXBpYSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VwaWEoIGFtb3VudDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHBlcmNlbnRGaWx0ZXIoIFwic2VwaWFcIiwgYW1vdW50KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYmx1cigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYmx1ciggcmFkaXVzOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSUZpbHRlclByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgYmx1cigke0Nzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggcmFkaXVzKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZHJvcFNoYWRvdygpYCBDU1MgZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSB4IEhvcml6b250YWwgb2Zmc2V0IG9mIHRoZSBzaGFkb3cuXHJcbiAqIEBwYXJhbSB5IFZlcnRpY2FsIG9mZnNldCBvZiB0aGUgc2hhZG93LlxyXG4gKiBAcGFyYW0gY29sb3IgQ29sb3Igb2YgdGhlIHNoYWRvdy5cclxuICogQHBhcmFtIGJsdXIgVmFsdWUgb2YgdGhlIHNoYWRvdydzIGJsdXJyaW5nLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxIHBpeGVsLlxyXG4gKiBAcGFyYW0gc3ByZWFkIFZhbHVlIG9mIHRoZSBzaGFkb3cncyBzcHJlYWRpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIDAuXHJcbiAqIEBwYXJhbSBpbnNldCBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2hhZG93IGdvZXMgaW5zaWRlIHRoZSBzaGFwZS4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHJvcFNoYWRvdyhcclxuICAgIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICB5OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICBibHVyPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgIHNwcmVhZD86IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRmlsdGVyUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBgZHJvcC1zaGFkb3coJHtzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggeyB4LCB5LCBjb2xvciwgYmx1ciwgc3ByZWFkfSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSUZpbHRlclByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGh1ZS1yb3RhdGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGh1ZVJvdGF0ZSggYW1vdW50OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJRmlsdGVyUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBodWUtcm90YXRlKCR7Q3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyggYW1vdW50KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNpYyBzaGFwZXNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgaW5zZXQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGluc2V0KCBvZmZzZXQ6IEV4dGVuZGVkPE9uZU9yQm94PENzc0xlbmd0aD4+LCByYWRpdXM/OiBFeHRlbmRlZDxCb3JkZXJSYWRpdXNfU3R5bGVUeXBlPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdGxldCByID0gcmFkaXVzICE9IG51bGwgPyBcInJvdW5kIFwiICsgYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHJhZGl1cykgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBpbnNldCgke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBvZmZzZXQsIFwiIFwiKX0ke3J9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBpcyB1c2VkIHRvIHNwZWNpZnkgYSByYWRpdXMgaW4gW1tjaXJjbGVdXSBhbmQgW1tlbGxpcHNlXV0gZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2hhcGVSYWRpdXMgPSBFeHRlbmRlZDxDc3NMZW5ndGggfCBcImNsb3Nlc3Qtc2lkZVwiIHwgXCJmYXJ0aGVzdC1zaWRlXCI+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYGNpcmNsZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlKCBjZW50ZXI/OiBTaGFwZVJhZGl1cywgcG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4pOiBJQmFzaWNTaGFwZVByb3h5XHJcbntcclxuICAgIGxldCBjID0gIGNlbnRlciAhPSBudWxsID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKGNlbnRlcikgOiBcIlwiO1xyXG5cdGxldCBwb3MgPSBwb3NpdGlvbiAhPSBudWxsID8gXCIgYXQgXCIgKyBwb3Myc3RyKCBwb3NpdGlvbikgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBjaXJjbGUoJHtjfSR7cG9zfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZWxsaXBzZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZWxsaXBzZSggcng/OiBTaGFwZVJhZGl1cywgcnk/OiBTaGFwZVJhZGl1cyxcclxuXHRwb3NpdGlvbj86IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG4gICAgbGV0IHJ4cyA9ICByeCAhPSBudWxsID8gQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHJ4KSA6IFwiXCI7XHJcbiAgICBsZXQgcnlzID0gIHJ5ICE9IG51bGwgPyBcIiBcIiArIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyhyeSkgOiBcIlwiO1xyXG5cdGxldCBwb3MgPSBwb3NpdGlvbiAhPSBudWxsID8gXCIgYXQgXCIgKyBwb3Myc3RyKCBwb3NpdGlvbikgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBlbGxpcHNlKCR7cnhzfSR7cnlzfSR7cG9zfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElCYXNpY1NoYXBlUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcG9seWdvbigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9seWdvbiggcG9pbnRPclJ1bGU6IENzc1BvaW50IHwgRmlsbFJ1bGVfU3R5bGVUeXBlLFxyXG5cdC4uLnBvaW50czogQ3NzUG9pbnRbXSk6IElCYXNpY1NoYXBlUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzID0gXCJwb2x5Z29uKFwiO1xyXG5cdFx0aWYgKHR5cGVvZiBwb2ludE9yUnVsZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0cyArPSBwb2ludE9yUnVsZSArIFwiLFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzICs9IGAke0Nzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCBwb2ludE9yUnVsZSwgXCIgXCIpfSxgO1xyXG5cclxuXHRcdHMgKz0gcG9pbnRzLm1hcCggcHQgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHB0LCBcIiBcIikpLmpvaW4oXCIsXCIpO1xyXG5cclxuXHRcdHJldHVybiBzICsgXCIpXCI7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUmF5UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcmF5KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYXkoIGFuZ2xlOiBFeHRlbmRlZDxDc3NBbmdsZT4sIHNpemU/OiBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkIHwgQ3NzTGVuZ3RoPixcclxuXHRjb250YWluPzogYm9vbGVhbik6IElSYXlQcm94eVxyXG57XHJcblx0cmV0dXJuICgpID0+XHJcblx0e1xyXG5cdFx0bGV0IGFuZ2xlU3RyaW5nID0gQ3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoIGFuZ2xlKTtcclxuXHRcdGxldCBzaXplU3RyaW5nID0gc2l6ZSA9ISBudWxsID8gXCIsXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHNpemUpIDogXCJcIjtcclxuXHRcdGxldCBjb250YWluU3RyaW5nID0gY29udGFpbiA/IFwiLGNvbnRhaW5cIiA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYHJheSgke2FuZ2xlU3RyaW5nfSR7c2l6ZVN0cmluZ30ke2NvbnRhaW5TdHJpbmd9KWA7XHJcblx0fTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJUGF0aEJ1aWxkZXIgaW50ZXJmYWNlIHRoYXQgYWxsb3dzIGJ1aWxkaW5nIGEgQ1NTIHBhdGguXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGF0aCggZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGUpOiBJUGF0aEJ1aWxkZXJcclxue1xyXG5cdHJldHVybiBuZXcgUGF0aEJ1aWxkZXIoIGZpbGxSdWxlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXRoQnVpbGRlciBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgb2JqZWN0IHRoYXQgYWNjdW11bGF0ZXMgcGF0aCBjb21tYW5kcyB0aGF0IGFyZSB0aGVuXHJcbiAqIGNvbnZlcnRlZCB0byBhIHN0cmluZyBwYXJhbWV0ZXIgb2YgdGhlIENTUyBgcGF0aCgpYCBmdW5jdGlvbi5cclxuICovXHJcbmNsYXNzIFBhdGhCdWlsZGVyIGltcGxlbWVudHMgSVBhdGhCdWlsZGVyXHJcbntcclxuXHRwcml2YXRlIGJ1Zjogc3RyaW5nO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZpbGxSdWxlPzogRmlsbFJ1bGVfU3R5bGVUeXBlKVxyXG5cdHtcclxuXHRcdHRoaXMuYnVmID0gXCJwYXRoKFwiO1xyXG5cdFx0aWYgKGZpbGxSdWxlKVxyXG5cdFx0XHR0aGlzLmJ1ZiArPSBmaWxsUnVsZSArIFwiLFwiO1xyXG5cclxuXHRcdHRoaXMuYnVmICs9IFwiJ1wiO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgc3RyaW5nXHJcblx0cHVibGljIHZhbHVlVG9TdHJpbmcoKSA6IHN0cmluZyB7IHJldHVybiB0aGlzLmJ1ZiArIFwiJylcIjsgfVxyXG5cclxuXHJcblx0XHJcbiAgICAvLyBNb3ZlLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRwcml2YXRlIGl0ZW1zKCBjb21tYW5kOiBzdHJpbmcsIC4uLml0ZW1zOiAobnVtYmVyIHwgbnVtYmVyW10pW10pOiBJUGF0aEJ1aWxkZXJcclxuXHR7XHJcblx0XHR0aGlzLmJ1ZiArPSBcIiBcIiArIGNvbW1hbmQ7XHJcblxyXG5cdFx0Zm9yKCBsZXQgaXRlbSBvZiBpdGVtcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBpdGVtID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdHRoaXMuYnVmICs9IFwiIFwiICsgaXRlbTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Zm9yKCBsZXQgc3ViSXRlbSBvZiBpdGVtKVxyXG5cdFx0XHRcdFx0dGhpcy5idWYgKz0gXCIgXCIgKyBzdWJJdGVtO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgTSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiTVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBtKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJtXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgTCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiTFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBsKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJsXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgSCggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiSFwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyBoKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJoXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgViggZmlyc3Q6IG51bWJlciwgLi4ubmV4dDogbnVtYmVyW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiVlwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuICAgIHB1YmxpYyB2KCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJ2XCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgQyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiQ1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgYyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiY1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIFMoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiU1wiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHRwdWJsaWMgcyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJzXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cclxuXHRwdWJsaWMgUSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJRXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG5cdHB1YmxpYyBxKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBUKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSkgeyByZXR1cm4gdGhpcy5pdGVtcyggXCJUXCIsIGZpcnN0LCAuLi5uZXh0KTsgfVxyXG4gICAgcHVibGljIHQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcInRcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblxyXG5cdHB1YmxpYyBBKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXVtdKSB7IHJldHVybiB0aGlzLml0ZW1zKCBcIkFcIiwgZmlyc3QsIC4uLm5leHQpOyB9XHJcblx0cHVibGljIGEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsMHwxLDB8MSxudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdW10pIHsgcmV0dXJuIHRoaXMuaXRlbXMoIFwiYVwiLCBmaXJzdCwgLi4ubmV4dCk7IH1cclxuXHJcblx0cHVibGljIHooKSB7IHRoaXMuYnVmICs9IFwiIHpcIjsgcmV0dXJuIHRoaXM7IH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUcmFuc2Zvcm1zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgbWF0cml4KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXgoIGE6IEV4dGVuZGVkPENzc051bWJlcj4sIGI6IEV4dGVuZGVkPENzc051bWJlcj4sIGM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0ZDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgdHg6IEV4dGVuZGVkPENzc051bWJlcj4sIHR5OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgbWF0cml4KCR7YXJyMnN0ciggW2EsIGIsIGMsIGQsIHR4LCB0eV0sIHVuZGVmaW5lZCwgXCIsXCIpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBtYXRyaXgzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4M2QoXHJcblx0XHRhMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjE6IEV4dGVuZGVkPENzc051bWJlcj4sIGMxOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkMTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRcdGEyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBiMjogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYzI6IEV4dGVuZGVkPENzc051bWJlcj4sIGQyOiBFeHRlbmRlZDxDc3NOdW1iZXI+LFxyXG5cdFx0YTM6IEV4dGVuZGVkPENzc051bWJlcj4sIGIzOiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBjMzogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgZDM6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0XHRhNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgYjQ6IEV4dGVuZGVkPENzc051bWJlcj4sIGM0OiBFeHRlbmRlZDxDc3NOdW1iZXI+LCBkNDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHQpOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBtYXRyaXgoJHthcnIyc3RyKCBbYTEsIGIxLCBjMSwgZDEsIGEyLCBiMiwgYzIsIGQyLCBhMywgYjMsIGMzLCBkMywgYTQsIGI0LCBjNCwgZDRdLCB1bmRlZmluZWQsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcGVyc3BlY3RpdmUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKCBkOiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgcGVyc3BlY3RpdmUoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoZCl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gQ1NTIHJvdGF0aW9uIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gcm90YXRlSW1wbCggbmFtZTogc3RyaW5nLCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVYKCBhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHJvdGF0ZUltcGwoIFwicm90YXRlWFwiLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgcm90YXRlWSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWSggYTogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiByb3RhdGVJbXBsKCBcInJvdGF0ZVlcIiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJvdGF0ZVooKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVooIGE6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gcm90YXRlSW1wbCggXCJyb3RhdGVaXCIsIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGByb3RhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlM2QoXHJcblx0eDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgeTogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgejogRXh0ZW5kZWQ8Q3NzTnVtYmVyPixcclxuXHRhOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyh4KSwgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHkpLFxyXG5cdFx0Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHopLCBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyhhKV0uam9pbihcIixcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gYHJvdGF0ZTNkKCR7dn0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGUoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKCBjeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k/OiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUoJHtDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoY3gpfSR7c3kgIT0gbnVsbCA/IFwiLFwiICsgQ3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHN5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgZ2l2ZW4gc2NhbGUgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gc2NhbGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzTnVtYmVyTWF0aC5zdHlsZVRvU3RyaW5nKHMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZVgoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlWCggczogRXh0ZW5kZWQ8Q3NzTnVtYmVyPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gc2NhbGVJbXBsKCBcInNjYWxlWFwiLCBzKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgc2NhbGVZKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVkoIHM6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHNjYWxlSW1wbCggXCJzY2FsZVlcIiwgcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNjYWxlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVaKCBzOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiBzY2FsZUltcGwoIFwic2NhbGVaXCIsIHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBzY2FsZTNkKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTNkKCBzeDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgc3k6IEV4dGVuZGVkPENzc051bWJlcj4sXHJcblx0c3o6IEV4dGVuZGVkPENzc051bWJlcj4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG5cdGxldCB2ID0gW0Nzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeCksIENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZyhzeSksXHJcblx0XHRDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmcoc3opXS5qb2luKFwiLFwiKTtcclxuICAgIHJldHVybiAoKSA9PiBgc2NhbGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXcoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNrZXcoIGF4OiBFeHRlbmRlZDxDc3NBbmdsZT4sIGF5PzogRXh0ZW5kZWQ8Q3NzQW5nbGU+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgc2tldygke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF4KX0ke2F5ICE9IG51bGwgPyBcIixcIiArIENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KSA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHNrZXdYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBza2V3WCggYXg6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gYHNrZXdYKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoYXgpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGBza2V3WSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2tld1koIGF5OiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBza2V3WCgke0Nzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nKGF5KX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk/OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgdHJhbnNsYXRlKCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpfSR7eSAhPSBudWxsID8gXCIsXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSkgOiBcIlwifSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGdpdmVuIHRyYW5zbGF0ZSBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5mdW5jdGlvbiB0cmFuc2xhdGVJbXBsKCBuYW1lOiBzdHJpbmcsIHM6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGAke25hbWV9KCR7Q3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHMpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGVYKClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVYKCB4OiBFeHRlbmRlZDxDc3NMZW5ndGg+KTogSVRyYW5zZm9ybVByb3h5XHJcbntcclxuICAgIHJldHVybiB0cmFuc2xhdGVJbXBsKCBcInRyYW5zbGF0ZVhcIiwgeCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHRyYW5zbGF0ZVkoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVkoIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJVHJhbnNmb3JtUHJveHlcclxue1xyXG4gICAgcmV0dXJuIHRyYW5zbGF0ZUltcGwoIFwidHJhbnNsYXRlWVwiLCB5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhbiBJVHJhbnNmb3JtUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgdHJhbnNsYXRlWigpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlWiggejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcbiAgICByZXR1cm4gdHJhbnNsYXRlSW1wbCggXCJ0cmFuc2xhdGVaXCIsIHopO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElUcmFuc2Zvcm1Qcm94eSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGB0cmFuc2xhdGUzZCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlM2QoIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sIHk6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcblx0ejogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElUcmFuc2Zvcm1Qcm94eVxyXG57XHJcblx0bGV0IHYgPSBbQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKHgpLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeSksXHJcblx0XHRDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoeildLmpvaW4oXCIsXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IGB0cmFuc2xhdGUzZCgke3Z9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gR3JpZCBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElGaXRDb250ZW50UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgZml0LWNvbnRlbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpdENvbnRlbnQoIHNpemU6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJRml0Q29udGVudFByb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBgZml0LWNvbnRlbnQoJHtDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoc2l6ZSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSU1pbk1heFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYG1pbm1heCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWlubWF4KCBtaW46IEdyaWRUcmFja1NpemUsIG1heDogR3JpZFRyYWNrU2l6ZSk6IElNaW5NYXhQcm94eVxyXG57XHJcbiAgICBsZXQgb3B0aW9ucyA9IHsgZnJvbU51bWJlcjogQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyB9O1xyXG4gICAgcmV0dXJuICgpID0+IGBtaW5tYXgoJHt2YWwyc3RyKCBtaW4sIG9wdGlvbnMpfSwke3ZhbDJzdHIoIG1heCwgb3B0aW9ucyl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYW4gSVJlcGVhdFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgYHJlcGVhdCgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwZWF0KCBjb3VudDogRXh0ZW5kZWQ8Q3NzTnVtYmVyPiB8IFwiYXV0by1maWxsXCIgfCBcImF1dG8tZml0XCIsXHJcbiAgICAuLi50cmFja3M6IEdyaWRUcmFja1tdKTogSVJlcGVhdFByb3h5XHJcbntcclxuICAgIC8vIHJldHVybiAoKSA9PiBgcmVwZWF0KCR7dmFsMnN0cihjb3VudCl9LCR7c3R5bGVQcm9wVG9TdHJpbmcoIFwiZ3JpZFRlbXBsYXRlUm93c1wiLCB0cmFja3MsIHRydWUpfSlgO1xyXG4gICAgcmV0dXJuICgpID0+IGByZXBlYXQoJHt2YWwyc3RyKGNvdW50KX0sJHt2YWwyc3RyKCB0cmFja3MsIHsgYXJySXRlbUZ1bmM6IGdyaWRUcmFja1RvU3RyaW5nIH0pfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIElTcGFuUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBzcGFuIGV4cHJlc3Npb24gZm9yIGdyaWQgbGF5b3V0cy4gSWYgdGhlIGZpcnN0XHJcbiAqIHBhcmFtZXRlciBpcyBhIG51bWJlciwgdGhlIHNlY29uZCBwYXJhbWV0ZXIgKGlmIGRlZmluZWQpIG11c3QgYmUgYSBuYW1lOyBpZiB0aGUgZmlyc3QgcGFyYW1ldGVyXHJcbiAqIGlzIGEgbmFtZSwgdGhlIHNlY29uZCBwYXJhbWV0ZXIgKGlmIGRlZmluZWQpIG11c3QgYmUgYSBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3BhbiggY291bnRPck5hbWU6IEV4dGVuZGVkPEdyaWRMaW5lQ291bnRPck5hbWU+LFxyXG4gICAgbmFtZU9yQ291bnQ/OiBFeHRlbmRlZDxHcmlkTGluZUNvdW50T3JOYW1lPik6IElTcGFuUHJveHlcclxue1xyXG4gICAgbGV0IGZpcnN0RWxtID0gdmFsMnN0cihjb3VudE9yTmFtZSk7XHJcbiAgICBsZXQgc2Vjb25kRWxtID0gbmFtZU9yQ291bnQgPyB2YWwyc3RyKCBuYW1lT3JDb3VudCkgOiBcIlwiO1xyXG4gICAgcmV0dXJuICgpID0+IGBzcGFuICR7Zmlyc3RFbG19ICR7c2Vjb25kRWxtfWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuXHRJQ3NzTnVtYmVyTWF0aCwgSUNzc0xlbmd0aE1hdGgsIElDc3NBbmdsZU1hdGgsIElDc3NUaW1lTWF0aCwgSUNzc1Jlc29sdXRpb25NYXRoLFxyXG4gICAgSUNzc0ZyZXF1ZW5jeU1hdGgsIElDc3NQZXJjZW50TWF0aCwgRXh0ZW5kZWQsIElTdHJpbmdQcm94eSwgSVVybFByb3h5LFxyXG4gICAgQXR0clR5cGVLZXl3b3JkLCBBdHRyVW5pdEtleXdvcmQsIElMZW5ndGhQcm94eSwgSVBlcmNlbnRQcm94eSwgSUFuZ2xlUHJveHksXHJcbiAgICBJVGltZVByb3h5LCBJUmVzb2x1dGlvblByb3h5LCBJRnJlcXVlbmN5UHJveHksIElRdW90ZWRQcm94eVxyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtcclxuXHRDc3NOdW1iZXJNYXRoLCBDc3NMZW5ndGhNYXRoLCBDc3NBbmdsZU1hdGgsIENzc1RpbWVNYXRoLCBDc3NSZXNvbHV0aW9uTWF0aCxcclxuXHRDc3NGcmVxdWVuY3lNYXRoLCBDc3NQZXJjZW50TWF0aCwgdmFsMnN0ciwgdGVtcGxhdGVTdHJpbmdUb1N0cmluZ1xyXG59IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCJcclxuaW1wb3J0IHtJVmFyUnVsZSwgSUNvdW50ZXJSdWxlLCBJSURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7VmFyVGVtcGxhdGVOYW1lLCBWYXJWYWx1ZVR5cGUsIExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTnVtIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8bnVtYmVyPmBcclxuICogQ1NTIHR5cGUuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXkgYXJlXHJcbiAqIGNvbnZlcnRlZCB0byBzdHJpbmdzIHdpdGhvdXQgYXBwZW5kaW5nIGFueSB1bml0cyB0byB0aGVtLlxyXG4gKi9cclxuZXhwb3J0IGxldCBOdW06IElDc3NOdW1iZXJNYXRoID0gbmV3IENzc051bWJlck1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQZXJjZW50IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cGVyY2VudGFnZT5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIFwiJVwiIHVuaXQgc3VmZml4LlxyXG4gKi9cclxuZXhwb3J0IGxldCBQZXJjZW50OiBJQ3NzUGVyY2VudE1hdGggPSBuZXcgQ3NzUGVyY2VudE1hdGgoKTtcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgcGVyY2VudCB2YWx1ZSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudCggbjogbnVtYmVyKTogSVBlcmNlbnRQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCIlXCI7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBMZW4gb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxsZW5ndGg+YFxyXG4gKiBDU1MgdHlwZSBieSBhcHBlbmRpbmcgYSBsZW5ndGggdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJweFwiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcImVtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IExlbjogSUNzc0xlbmd0aE1hdGggPSBuZXcgQ3NzTGVuZ3RoTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcXVhcnRlcnMgb2YgYW4gaW5jaCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gUSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcIlFcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNoIHVuaXRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImNoXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYW50aW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY20oIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJjbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2FsY3VsYXRlZCBmb250LXNpemVzIG9mIHRoZSBlbGVtZW50ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImVtXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBoZWlnaHRzIG9mIGxvd2VyY2FzZSBsZXR0ZXIgJ3gnIGluIHRoZSBmb250ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImV4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpYyB1bml0cyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaWMoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJpY1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gaW5jaGVzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNoKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiaW5cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGxpbmUtaGVpZ2h0cyBvZiB0aGUgZWxlbWVudCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJsaFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbWlsbGltZXRlcnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1tKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwibW1cIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpY2FzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYyggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInBjXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwb2ludHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHB0KCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicHRcIjsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHBpeGVscyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJweFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBibG9jayBheGlzICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YiggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInZiXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2aFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHNpemUgb2YgdGhlIGluaXRpYWwgY29udGFpbmluZyBibG9jaywgaW4gdGhlIGRpcmVjdGlvblxyXG4gKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBpbmxpbmUgYXhpcyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdmkoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2aVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIHdpZHRoIG9mIHRoZSB2aWV3cG9ydCdzIGluaXRpYWwgY29udGFpbmluZyBibG9jayAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdncoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2d1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gZm9udHNpemVzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbSggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInJlbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJsaCggbjogbnVtYmVyKTogSUxlbmd0aFByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcInJsaFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gdGhlIHVuaXRzIHdoaWNoIGFyZSBhIHNtYWxsZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZtYXgoIG46IG51bWJlcik6IElMZW5ndGhQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ2bWF4XCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiB0aGUgdW5pdHMgd2hpY2ggYXJlIGEgbGFyZ2VyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2bWluKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwidm1pblwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgZm9yIGZsZXggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZyKCBuOiBudW1iZXIpOiBJTGVuZ3RoUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZnJcIjsgfVxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5nbGUgb2JqZWN0IGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGUgYDxhbmdsZT5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhbiBhbmdsZSB1bml0IHN1ZmZpeC5cclxuICogSW50ZWdlciBudW1iZXJzIHVzZSBcImRlZ1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInR1cm5cIi5cclxuICovXHJcbmV4cG9ydCBsZXQgQW5nbGU6IElDc3NBbmdsZU1hdGggPSBuZXcgQ3NzQW5nbGVNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGRlZ3JlZXMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZyggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZGVnXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHJhZGlhbnMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhZCggbjogbnVtYmVyKTogSUFuZ2xlUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwicmFkXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGdyYWRpYW5zICovXHJcbmV4cG9ydCBmdW5jdGlvbiBncmFkKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJncmFkXCI7IH1cclxuXHJcbi8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIHR1cm5zICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0dXJuKCBuOiBudW1iZXIpOiBJQW5nbGVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJ0dXJuXCI7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUaW1lIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlIGA8dGltZT5gXHJcbiAqIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHRpbWUgdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJtc1wiOyBmbG9hdGluZyBwb2ludCBudW1iZXJzIHVzZSBcInNcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgVGltZTogSUNzc1RpbWVNYXRoID0gbmV3IENzc1RpbWVNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHRpbWUgdmFsdWUgaW4gbWlsbGlzZWNvbmRzICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtcyggbjogbnVtYmVyKTogSVRpbWVQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJtc1wiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyB0aW1lIHZhbHVlIGluIHNlY29uZHMgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHMoIG46IG51bWJlcik6IElUaW1lUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwic1wiOyB9XHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSZXNvbHV0aW9uIG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8cmVzb2x1dGlvbj5gIENTUyB0eXBlIGJ5IGFwcGVuZGluZyBhIHJlc29sdXRpb24gdW5pdCBzdWZmaXguXHJcbiAqIEludGVnZXIgbnVtYmVycyB1c2UgXCJkcGlcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJkcGNtXCIuXHJcbiAqL1xyXG5leHBvcnQgbGV0IFJlc29sdXRpb246IElDc3NSZXNvbHV0aW9uTWF0aCA9IG5ldyBDc3NSZXNvbHV0aW9uTWF0aCgpO1xyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQSSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHBpKCBuOiBudW1iZXIpOiBJUmVzb2x1dGlvblByb3h5IHsgcmV0dXJuICgpID0+IG4gKyBcImRwaVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQQ00gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRwY20oIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZHBjbVwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIERQUFggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRwcHgoIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwiZHBweFwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyByZXNvbHV0aW9uIHZhbHVlIGluIFggKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHgoIG46IG51bWJlcik6IElSZXNvbHV0aW9uUHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwieFwiOyB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRnJlcXVlbmN5IG9iamVjdCBjb250YWlucyBzdGF0aWMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8ZnJlcXVlbmN5PmAgQ1NTIHR5cGUgYnkgYXBwZW5kaW5nIGEgZnJlcXVlbmN5IHVuaXQgc3VmZml4LlxyXG4gKiBJbnRlZ2VyIG51bWJlcnMgdXNlIFwiSHpcIjsgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyB1c2UgXCJrSHpcIi5cclxuICovXHJcbmV4cG9ydCBsZXQgRnJlcXVlbmN5OiBJQ3NzRnJlcXVlbmN5TWF0aCA9IG5ldyBDc3NGcmVxdWVuY3lNYXRoKCk7XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBIZXJ0eiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHooIG46IG51bWJlcik6IElGcmVxdWVuY3lQcm94eSB7IHJldHVybiAoKSA9PiBuICsgXCJoelwiOyB9XHJcblxyXG4vKiogQ3JlYXRlcyBmcmVxdWVuY3kgdmFsdWUgaW4gS2lsby1IZXJ0eiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ga2h6KCBuOiBudW1iZXIpOiBJRnJlcXVlbmN5UHJveHkgeyByZXR1cm4gKCkgPT4gbiArIFwia2h6XCI7IH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gdXRpbGl0eSBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gZW5jYXBzdWxhdGluZyB0aGUgZ2l2ZW4gc3RyaW5nLWxpa2UgcGFyYW1ldGVyLiBUaGlzIGZ1bmN0aW9uXHJcbiAqIGFsbG93cyBzcGVjaWZ5aW5nIGFyYml0cmFyeSB0ZXh0IGZvciBwcm9wZXJ0aWVzIHdob3NlIHR5cGUgbm9ybWFsbHkgZG9lc24ndCBhbGxvdyBzdHJpbmdzLlxyXG4gKiBUaGlzIGlzIHVzZWQgYXMgYW4gXCJlc2NhcGUgaGF0Y2hcIiB3aGVuIGEgc3RyaW5nIHZhbHVlIGFscmVhZHkgZXhpc3RzIGFuZCB0aGVyZSBpcyBubyBzZW5zZVxyXG4gKiB0byBjb252ZXJ0IGl0IHRvIGEgcHJvcGVyIHR5cGUuIFRoaXMgZnVuY3Rpb24gaXMgYSB0YWcgZnVuY3Rpb24gYW5kIG11c3QgYmUgaW52b2tlZCB3aXRoXHJcbiAqIHRoZSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYXcoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBhbnlbXSk6IElTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gKCkgPT4gdGVtcGxhdGVTdHJpbmdUb1N0cmluZyggcGFydHMsIHBhcmFtcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIGludm9jYXRpb24gb2YgdGhlIGB2YXIoKWAgQ1NTIGZ1bmN0aW9uIGZvclxyXG4gKiB0aGUgZ2l2ZW4gY3VzdG9tIENTUyBwcm9wZXJ0eSB3aXRoIG9wdGlvbmFsIGZhbGxiYWNrcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2V2YXI8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZT4oIHZhck9iajogSVZhclJ1bGU8Sz4sIGZhbGxiYWNrPzogVmFyVmFsdWVUeXBlPEs+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuICAgIHJldHVybiAoKSA9PiBmYWxsYmFja1xyXG4gICAgICAgID8gYHZhcigtLSR7dmFyT2JqLm5hbWV9LCR7c3R5bGVQcm9wVG9TdHJpbmcoIHZhck9iai50ZW1wbGF0ZSwgZmFsbGJhY2ssIHRydWUpfSlgXHJcbiAgICAgICAgOiBgdmFyKC0tJHt2YXJPYmoubmFtZX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGB1cmwoKWAgZnVuY3Rpb24uIFRoZSBzdHJpbmcgcGFyYW1ldGVyXHJcbiAqIHdpbGwgYmUgd3JhcHBlZCBpbiBhIFwidXJsKClcIiBpbnZvY2F0aW9uLiBUaGUgZnVuY3Rpb24gY2FuIGFsc28gYWNjZXB0IHRoZSBJSURSdWxlIG9iamVjdCB0b1xyXG4gKiBjcmVhdGUgdXJsKCNlbGVtZW50KSBpbnZvY2F0aW9uLCB3aGljaCBpcyBvZnRlbiB1c2VkIHRvIGFkZHJlc3MgU1ZHIGVsZW1lbnRzIGJ5IHRoZWlyIElEcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cmwoIHZhbDogRXh0ZW5kZWQ8c3RyaW5nIHwgSUlEUnVsZT4pOiBJVXJsUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PiBgdXJsKCR7dmFsMnN0cih2YWwpfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gcmVwcmVzZW50aW5nIHRoZSBgYXR0cigpYCBDU1MgZnVuY3Rpb24uIEl0IHJldHVybnMgSVN0cmluZ1Byb3h5XHJcbiAqIGFuZCB0aGVvcmV0aWNhbGx5IGNhbiBiZSB1c2VkIGluIGFueSBzdHlsZSBwcm9wZXJ0eTsgaG93ZXZlciwgaXRzIHVzZSBieSBicm93c2VycyBpcyBjdXJyZW50bHlcclxuICogbGltaXRlZCB0byB0aGUgYGNvbnRlbnRgIHByb3BlcnR5LiBBbHNvIG5vIGJyb3dzZXIgY3VycmVudGx5IHN1cHBvcnQgdHlwZSwgdW5pdHMgb3IgZmFsbGJhY2tcclxuICogdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGF0dHIoIGF0dHJOYW1lOiBFeHRlbmRlZDxzdHJpbmc+LCB0eXBlT3JVbml0PzogRXh0ZW5kZWQ8QXR0clR5cGVLZXl3b3JkIHwgQXR0clVuaXRLZXl3b3JkPixcclxuXHRmYWxsYmFjaz86IEV4dGVuZGVkPHN0cmluZz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBhdHRyKCR7YXR0ck5hbWV9JHt0eXBlT3JVbml0ID8gXCIgXCIgKyB0eXBlT3JVbml0IDogXCJcIn0ke2ZhbGxiYWNrID8gXCIsXCIgKyBmYWxsYmFjayA6IFwiXCJ9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgYSBzdHJpbmcgaW4gcXVvdGF0aW9uIG1hcmtzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlZCggdmFsOiBhbnkpOiBJUXVvdGVkUHJveHlcclxue1xyXG4gICAgcmV0dXJuICgpID0+IGBcIiR7dmFsMnN0cih2YWwpfVwiYDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDb3VudGVyc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBmdW5jdGlvbiByZXByZXNlbnRpbmcgdGhlIENTUyBgY291bnRlcigpYCBmdW5jdGlvbiB3aXRoIGFkZGl0aW9uYWxcclxuICogb3B0aW9uYWwgc3RyaW5ncyBhZGRlZCBhZnRlciBhbmQvb3IgYmVmb3JlIHRoZSBjb3VudGVyLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50ZXIoIGNvdW50ZXJPYmo6IEV4dGVuZGVkPElDb3VudGVyUnVsZSB8IHN0cmluZz4sXHJcblx0c3R5bGU/OiBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4sXHJcblx0dGV4dEFmdGVyPzogRXh0ZW5kZWQ8c3RyaW5nPiwgdGV4dEJlZm9yZT86IEV4dGVuZGVkPHN0cmluZz4pOiBJU3RyaW5nUHJveHlcclxue1xyXG5cdHJldHVybiAoKSA9PlxyXG5cdHtcclxuXHRcdGxldCBzdHlsZVN0cmluZyA9IHN0eWxlID8gYCwke3ZhbDJzdHIoIHN0eWxlKX1gIDogXCJcIjtcclxuXHRcdGxldCBiZWZvcmUgPSB0ZXh0QmVmb3JlID8gYFwiJHt2YWwyc3RyKCB0ZXh0QmVmb3JlKX1cImAgOiBcIlwiO1xyXG5cdFx0bGV0IGFmdGVyID0gdGV4dEFmdGVyID8gYFwiJHt2YWwyc3RyKCB0ZXh0QWZ0ZXIpfVwiYCA6IFwiXCI7XHJcblx0XHRyZXR1cm4gYCR7YmVmb3JlfSBjb3VudGVyKCR7dmFsMnN0cihjb3VudGVyT2JqKX0ke3N0eWxlU3RyaW5nfSkgJHthZnRlcn1gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHJlcHJlc2VudGluZyB0aGUgQ1NTIGBjb3VudGVzcigpYCBmdW5jdGlvbiB3aXRoIHRoZSBnaXZlblxyXG4gKiBzZXBhcmF0b3Igc3RyaW5nIGFuZCBhZGRpdGlvbmFsIG9wdGlvbmFsIHN0cmluZ3MgYWRkZWQgYWZ0ZXIgYW5kL29yIGJlZm9yZSB0aGUgY291bnRlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudGVycyggY291bnRlck9iajogRXh0ZW5kZWQ8SUNvdW50ZXJSdWxlIHwgc3RyaW5nPixcclxuXHRzZXBhcmF0b3I6IEV4dGVuZGVkPHN0cmluZz4sIHN0eWxlPzogRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+LFxyXG5cdHRleHRBZnRlcj86IEV4dGVuZGVkPHN0cmluZz4sIHRleHRCZWZvcmU/OiBFeHRlbmRlZDxzdHJpbmc+KTogSVN0cmluZ1Byb3h5XHJcbntcclxuXHRyZXR1cm4gKCkgPT5cclxuXHR7XHJcblx0XHRsZXQgc2VwU3RyaW5nID0gc2VwYXJhdG9yID8gYFwiJHt2YWwyc3RyKCBzZXBhcmF0b3IpfVwiYCA6IGBcIi5cImA7XHJcblx0XHRsZXQgc3R5bGVTdHJpbmcgPSBzdHlsZSA/IGAsJHt2YWwyc3RyKCBzdHlsZSl9YCA6IFwiXCI7XHJcblx0XHRsZXQgYmVmb3JlID0gdGV4dEJlZm9yZSA/IGBcIiR7dmFsMnN0ciggdGV4dEJlZm9yZSl9XCJgIDogXCJcIjtcclxuXHRcdGxldCBhZnRlciA9IHRleHRBZnRlciA/IGBcIiR7dmFsMnN0ciggdGV4dEFmdGVyKX1cImAgOiBcIlwiO1xyXG5cdFx0cmV0dXJuIGAke2JlZm9yZX0gY291bnRlcnMoJHt2YWwyc3RyKGNvdW50ZXJPYmopfSwke3NlcFN0cmluZ30ke3N0eWxlU3RyaW5nfSkgJHthZnRlcn1gO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1jc3NcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0NvbG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ltYWdlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL01lZGlhVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9VdGlsQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9Db2xvckFQSVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvSW1hZ2VBUElcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL1N0eWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9SdWxlQVBJXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TY2hlZHVsaW5nQVBJXCI7XHJcbiIsImltcG9ydCB7SUFuaW1hdGlvblJ1bGUsIEFuaW1hdGlvbkZyYW1lLCBBbmltYXRpb25XYXlwb2ludCwgQW5pbWF0aW9uU3R5bGVzZXQsIElBbmltYXRpb25GcmFtZVJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZSwgSVRvcExldmVsUnVsZUNvbnRhaW5lciwgY3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0fSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZXNcIjtcclxuaW1wb3J0IHsgdmFsMnN0ciB9IGZyb20gXCIuLi9zdHlsZXMvVXRpbEZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBAa2V5ZnJhbWVzIENTUyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUFuaW1hdGlvblJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZnJhbWVzPzogQW5pbWF0aW9uRnJhbWVbXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUFuaW1hdGlvblJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoZnJhbWVzKVxyXG5cdFx0XHR0aGlzLmZyYW1lUnVsZXMgPSBmcmFtZXMubWFwKCBmcmFtZSA9PiBuZXcgQW5pbWF0aW9uRnJhbWVSdWxlKCBmcmFtZVswXSwgZnJhbWVbMV0pKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcblx0XHRmb3IoIGxldCBrZXlmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRrZXlmcmFtZVJ1bGUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQW5pbWF0aW9uUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEFuaW1hdGlvblJ1bGUodW5kZWZpbmVkLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0XHRpZiAodGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0XHRuZXdSdWxlLmZyYW1lUnVsZXMgPSB0aGlzLmZyYW1lUnVsZXMubWFwKCBmcmFtZVJ1bGUgPT4gZnJhbWVSdWxlLmNsb25lKCkgYXMgQW5pbWF0aW9uRnJhbWVSdWxlKTtcclxuXHRcdG5ld1J1bGUubmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYEBrZXlmcmFtZXMgJHt0aGlzLm5hbWV9IHt9YCwgcGFyZW50KSBhcyBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cclxuXHRcdGxldCBjc3NLZXlmcmFtZXNSdWxlID0gdGhpcy5jc3NSdWxlIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblx0XHRmb3IoIGxldCBmcmFtZVJ1bGUgb2YgdGhpcy5mcmFtZVJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNzc0tleWZyYW1lc1J1bGUuYXBwZW5kUnVsZSggZnJhbWVSdWxlLnRvQ3NzU3RyaW5nKCkpXHJcblx0XHRcdFx0bGV0IGNzc1J1bGUgPSBjc3NLZXlmcmFtZXNSdWxlLmNzc1J1bGVzLml0ZW0oICBjc3NLZXlmcmFtZXNSdWxlLmNzc1J1bGVzLmxlbmd0aCAtIDEpO1xyXG5cdFx0XHRcdGlmIChjc3NSdWxlKVxyXG5cdFx0XHRcdFx0ZnJhbWVSdWxlLmNzc0tleWZyYW1lUnVsZSA9IGNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVSdWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKHgpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBcIkNhbm5vdCBhZGQgQ1NTIGtleWZyYW1lIHJ1bGVcIiwgeClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG4gICAge1xyXG5cdFx0aWYgKCF0aGlzLmZyYW1lUnVsZXMpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRjdHguYWRkUnVsZVRleHQoIGBAa2V5ZnJhbWVzICR7dGhpcy5uYW1lfSB7YCk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgZnJhbWVSdWxlIG9mIHRoaXMuZnJhbWVSdWxlcylcclxuXHRcdFx0Y3R4LmFkZFJ1bGVUZXh0KCBmcmFtZVJ1bGUudG9Dc3NTdHJpbmcoKSlcclxuICAgICAgICBcclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggXCJ9XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIGNvbnZlcnQgYW4gb2JqZWN0IHRvIGEgc3RyaW5nLiBBbmltYXRpb24gcnVsZSByZXR1cm5zIGl0cyBuYW1lLlxyXG5cdHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblx0XHJcblx0LyoqIFNPTSBrZXlmcmFtZXMgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBDU1NLZXlmcmFtZXNSdWxlO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN0eWxlIHJ1bGVzIHJlcHJlc2VudGluZyBhbmltYXRpb24gZnJhbWVzICovXHJcblx0cHVibGljIGZyYW1lUnVsZXM6IEFuaW1hdGlvbkZyYW1lUnVsZVtdO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElBbmltYXRpb25SdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQW5pbWF0aW9uRnJhbWVSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUga2V5ZnJhbWUgY2xhdXNlIGluIHRoZSBhbmltYXRpb24gcnVsZS5cclxuICovXHJcbmNsYXNzIEFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25GcmFtZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50LCBzdHlsZXNldD86IEFuaW1hdGlvblN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZXNldCk7XHJcblx0XHR0aGlzLndheXBvaW50ID0gd2F5cG9pbnQ7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogQW5pbWF0aW9uRnJhbWVSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBBbmltYXRpb25GcmFtZVJ1bGUoIHRoaXMud2F5cG9pbnQpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHRoaXMud2F5cG9pbnQsIHtcclxuXHRcdFx0ZnJvbU51bWJlcjogdiA9PiB2ICsgXCIlXCIsXHJcblx0XHRcdGFyckl0ZW1GdW5jOiB2ID0+IHZhbDJzdHIoIHYsIHsgZnJvbU51bWJlcjogdiA9PiB2ICsgXCIlXCIgfSksXHJcblx0XHRcdGFyclNlcDogXCIsXCJcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHQvKiogSWRlbnRpZmllciBvZiB0aGUgd2F5cG9pbnQgKi9cclxuXHRwdWJsaWMgd2F5cG9pbnQ6IEFuaW1hdGlvbldheXBvaW50O1xyXG5cclxuXHQvKiogU09NIGtleWZyYW1lIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzS2V5ZnJhbWVSdWxlOiBDU1NLZXlmcmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJQ291bnRlclJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7Y3JlYXRlTmFtZXMsIElSdWxlQ29udGFpbmVyLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENvdW50ZXJSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIG5hbWVkIGNvdW50ZXIgZGVmaW5pdGlvbi4gVXNlIHRoaXMgcnVsZSB0byBjcmVhdGVcclxuICogY291bnRlciBvYmplY3RzIHRoYXQgY2FuIGJlIHVzZWQgaW4gY291bnRlci1pbmNyZW1lbnQsIGNvdW50ZXItcmVzZXQgYW5kIGNvdW50ZXItc2V0IHN0eWxlXHJcbiAqIHByb3BlcnRpZXMuIE5vIENTUyBydWxlIGlzIGNyZWF0ZWQgZm9yIGNvdW50ZXJzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmVcclxuICogY291bnRlciBkZWZpbml0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSUNvdW50ZXJSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElDb3VudGVyUnVsZSlcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cdFx0W3RoaXMubmFtZV0gPSBjcmVhdGVOYW1lcyggb3duZXJDb250YWluZXIsIHJ1bGVOYW1lLCB0aGlzLm5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBDb3VudGVyUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQ291bnRlclJ1bGUoIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIGNvdW50ZXIgbmFtZS5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBjb3VudGVyICovXHJcblx0cHVibGljIGdldCBjb3VudGVyTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5uYW1lOyB9XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUNvdW50ZXJSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUdyaWRMaW5lUnVsZSwgSUdyaWRBcmVhUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JpZExpbmVSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIG5hbWVkIGdyaWQgbGluZSBkZWZpbml0aW9uLiBObyBDU1MgcnVsZSBpcyBjcmVhdGVkIGZvciBncmlkXHJcbiAqIGxpbmVzIC0gdGhleSBhcmUgbmVlZGVkIG9ubHkgdG8gcHJvdmlkZSB0eXBlLXNhZmUgZ3JpZCBsaW5lIGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyaWRMaW5lUnVsZSBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSUdyaWRMaW5lUnVsZVxyXG57XHJcbiAgICAvLyBpZiB0aGUgbmFtZU92ZXJyaWRlIGlzIGFuIGFyZWEgcnVsZSBvYmplY3QsIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgYWx3YXlzIGRlZmluZWRcclxuICAgIC8vIGJlY2F1c2UgdGhpcyBjb25zdHJ1Y3RvciBjYW4gb25seSBiZSBpbnZva2VkIGZvciB0aGUgc3RhcnQgYW5kIGVuZCBsaW5lcyBvZiB0aGUgR3JpZEFyZWFSdWxlXHJcbiAgICAvLyBvYmplY3QuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElHcmlkTGluZVJ1bGUgfCBJR3JpZEFyZWFSdWxlLCBpc1N0YXJ0RW5kT3JOb25lPzogYm9vbGVhbilcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSBpc1N0YXJ0RW5kT3JOb25lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICBsZXQgbmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcbiAgICAgICAgaWYgKG5hbWVPdmVycmlkZSBpbnN0YW5jZW9mIEdyaWRMaW5lUnVsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVPdmVycmlkZS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RhcnRFbmRPck5vbmUgPSBuYW1lT3ZlcnJpZGUuaXNTdGFydEVuZE9yTm9uZTtcclxuICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IG5hbWVPdmVycmlkZS5hcmVhTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZU92ZXJyaWRlIGluc3RhbmNlb2YgR3JpZEFyZWFSdWxlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZU92ZXJyaWRlLm5hbWUgKyAodGhpcy5pc1N0YXJ0RW5kT3JOb25lID8gXCItc3RhcnRcIiA6IFwiLWVuZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IG5hbWVPdmVycmlkZS5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBbdGhpcy5uYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBvYnRhaW5lZCBuYW1lIGRvZXNuJ3QgaGF2ZSBcIi1zdGFydFwiIG9yIFwiLWVuZFwiIGJ1dCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzXHJcbiAgICAgICAgICAgIC8vIGRlZmluZWQgKHRoYXQgaXMsIGl0IGlzIGVpdGhlciBzdGFydCBvciBlbmQgbGluZSksIHdlIG5lZWQgdG8gYXBwZW5kIHRoZSBzdWZmaXguIElmIHRoZVxyXG4gICAgICAgICAgICAvLyBvYnRhaW5lZCBuYW1lIGFscmVhZHkgaGFzIFwiLXN0YXJ0XCIgb3IgXCItZW5kXCIgYW5kIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgbm90XHJcbiAgICAgICAgICAgIC8vIGRlZmluZWQsIHdlIHNldCB0aGlzIGZsYWcgdG8gZWl0aGVyIHRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIHRoZSBzdWZmaXguIE5vdGUgdGhhdCBpZlxyXG4gICAgICAgICAgICAvLyB0aGUgbmFtZU92ZXJyaWRlIGlzIGFuIGFyZWEgcnVsZSBvYmplY3QsIHRoZSBpc1N0YXJ0RW5kT3JOb25lIGZsYWcgaXMgYWx3YXlzIGRlZmluZWQuXHJcbiAgICAgICAgICAgIGxldCBuYW1lSGFzU3RhcnQgPSB0aGlzLm5hbWUuZW5kc1dpdGgoXCItc3RhcnRcIik7XHJcbiAgICAgICAgICAgIGxldCBuYW1lSGFzRW5kID0gdGhpcy5uYW1lLmVuZHNXaXRoKFwiLWVuZFwiKTtcclxuICAgICAgICAgICAgaWYgKG5hbWVIYXNTdGFydClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0RW5kT3JOb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSB0aGlzLm5hbWUuc3Vic3RyKCAwLCB0aGlzLm5hbWUubGVuZ3RoIC0gXCItc3RhcnRcIi5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5hbWVIYXNFbmQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZS5zdWJzdHIoIDAsIHRoaXMubmFtZS5sZW5ndGggLSBcIi1lbmRcIi5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhTmFtZSA9IHRoaXMubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSArPSBcIi1zdGFydFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdGFydEVuZE9yTm9uZSA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYU5hbWUgPSB0aGlzLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgKz0gXCItZW5kXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBHcmlkTGluZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IEdyaWRMaW5lUnVsZSggdGhpcy5uYW1lT3ZlcnJpZGUsIHRoaXMuaXNTdGFydEVuZE9yTm9uZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoZSB2YWx1ZVRvU3RyaW5nIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiB0aGUgb2JqZWN0IGlzIHNwZWNpZmllZCBhcyBhIHZhbHVlIG9mIGEgc3R5bGUgcHJvcGVydHkuXHJcblx0Ly8gV2UgcmV0dXJuIHRoZSBsaW5lIG5hbWUuXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuICAgICAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBsaW5lIGlzIGEgc3RhcnQgb3IgZW5kIGxpbmUgb2YgYSBncmlkIGFyZWEuIFRoZSB2YWx1ZSBpcyB0cnVlXHJcbiAgICAgKiBpZiB0aGlzIGlzIHRoZSBzdGFydCBsaW5lOyBmYWxzZSBpZiB0aGlzIGlzIHRoZSBlbmQgbGluZTsgYW5kIHVuZGVmaW5lZCBpZiB0aGUgbGluZSBpc1xyXG4gICAgICogbm90IHJlbGF0ZWQgdG8gYW55IGFyZWEuXHJcbiAgICAgKi9cclxuXHRwdWJsaWMgaXNTdGFydEVuZE9yTm9uZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIE5hbWUgb2YgdGhlIGdyaWQgYXJlYSBvZiB3aGljaCB0aGUgbGluZSBpcyBlaXRoZXIgYSBzdGFydCBvciBhbiBlbmQgbGluZS4gSXQgaXMgZGVmaW5lZFxyXG4gICAgICogb25seSBpZiB0aGUgbGluZSBuYW1lIGVuZHMgd2l0aCBcIi1zdGFydFwiIG9yIFwiLWVuZFwiLlxyXG4gICAgICovXHJcblx0cHVibGljIGFyZWFOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZExpbmVSdWxlIHwgSUdyaWRBcmVhUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEdyaWRBcmVhUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBuYW1lZCBncmlkIGFyZWEgZGVmaW5pdGlvbi4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgZ3JpZFxyXG4gKiBhcmVhcyAtIHRoZXkgYXJlIG5lZWRlZCBvbmx5IHRvIHByb3ZpZGUgdHlwZS1zYWZlIGdyaWQgYXJlYSBkZWZpbml0aW9ucy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBHcmlkQXJlYVJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElHcmlkQXJlYVJ1bGVcclxue1xyXG4gICAgLy8gaWYgdGhlIG5hbWVPdmVycmlkZSBpcyBhbiBhcmVhIHJ1bGUgb2JqZWN0LCB0aGUgaXNTdGFydEVuZE9yTm9uZSBmbGFnIGlzIGFsd2F5cyBkZWZpbmVkXHJcbiAgICAvLyBiZWNhdXNlIHRoaXMgY29uc3RydWN0b3IgY2FuIG9ubHkgYmUgaW52b2tlZCBmb3IgdGhlIHN0YXJ0IGFuZCBlbmQgbGluZXMgb2YgdGhlIEdyaWRBcmVhUnVsZVxyXG4gICAgLy8gb2JqZWN0LlxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJR3JpZEFyZWFSdWxlKVxyXG5cdHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgbGluZSBydWxlc1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaW5lID0gbmV3IEdyaWRMaW5lUnVsZSggdGhpcywgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5lbmRMaW5lID0gbmV3IEdyaWRMaW5lUnVsZSggdGhpcywgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICBbdGhpcy5uYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHJcbiAgICAgICAgLy8gcHJvY2VzcyBsaW5lIHJ1bGVzXHJcbiAgICAgICAgdGhpcy5zdGFydExpbmUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCk7XHJcbiAgICAgICAgdGhpcy5lbmRMaW5lLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIG51bGwpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogR3JpZEFyZWFSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBHcmlkQXJlYVJ1bGUoIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIGxpbmUgbmFtZS5cclxuICAgIHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBTdGFydCBsaW5lIG9mIHRoZSBhcmVhLiAqL1xyXG5cdHB1YmxpYyBzdGFydExpbmU6IEdyaWRMaW5lUnVsZTtcclxuXHJcbiAgICAvKiogRW5kIGxpbmUgb2YgdGhlIGFyZWEgYXJlYS4gKi9cclxuXHRwdWJsaWMgZW5kTGluZTogR3JpZExpbmVSdWxlO1xyXG5cclxuICAgIC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSUdyaWRBcmVhUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdHlsZURlZmluaXRpb25DbGFzcywgU3R5bGVEZWZpbml0aW9uLCBJR3JvdXBSdWxlLCBJTWVkaWFSdWxlLCBJU3VwcG9ydHNSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge2dldENvbnRhaW5lckZyb21JbnN0YW5jZSwgcHJvY2Vzc0luc3RhbmNlT3JDbGFzc30gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7SVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGUsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHR9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge3N1cHBvcnRzUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7U3VwcG9ydHNRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcm91cFJ1bGUgY2xhc3Mgc2VydmVzIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIGdyb3VwaW5nIENTUyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHcm91cFJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuaW5zdGFuY2VPckNsYXNzID0gaW5zdGFuY2VPckNsYXNzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXJDb250YWluZXIsIHJ1bGVOYW1lKTtcclxuXHJcbiAgICAgICAgLy8gY29udGFpbmVyIHRvIHdoaWNoIG91ciBncm91cG5nIHJ1bGUgYmVsb25ncyBiZWNvbWVzIHRoZSBwYXJlbnQgY29udGFpbmVyIGZvciB0aGVcclxuICAgICAgICAvLyBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlXHJcblx0XHRsZXQgaW5zdGFuY2UgPSBwcm9jZXNzSW5zdGFuY2VPckNsYXNzKCB0aGlzLmluc3RhbmNlT3JDbGFzcywgY29udGFpbmVyLmdldERlZmluaXRpb25JbnN0YW5jZSgpKTtcclxuXHRcdGlmICghaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XHJcblx0XHR0aGlzLnJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnJ1bGVDb250YWluZXIpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgc2VsZWN0b3IgPSB0aGlzLmdldEdyb3VwU2VsZWN0b3JUZXh0KCk7XHJcblx0XHRpZiAoIXNlbGVjdG9yKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIGAke3NlbGVjdG9yfSB7fWAsIHBhcmVudCkgYXMgQ1NTR3JvdXBpbmdSdWxlO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdGlmICh0aGlzLmNzc1J1bGUpXHJcblx0XHRcdHRoaXMucnVsZUNvbnRhaW5lci5pbnNlcnRSdWxlcyggdGhpcy5jc3NSdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRpZiAoIXRoaXMucnVsZUNvbnRhaW5lcilcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGxldCBzZWxlY3RvciA9IHRoaXMuZ2V0R3JvdXBTZWxlY3RvclRleHQoKTtcclxuXHRcdGlmICghc2VsZWN0b3IpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRjdHguYWRkUnVsZVRleHQoIGAke3NlbGVjdG9yfSB7YCk7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IHN1Yi1ydWxlc1xyXG5cdFx0dGhpcy5ydWxlQ29udGFpbmVyLnNlcmlhbGl6ZVJ1bGVzKCBjdHgpO1xyXG5cclxuXHRcdGN0eC5hZGRSdWxlVGV4dCggXCJ9XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGw7XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlcnMgdGhlIENTUyBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyKCk7XHJcblxyXG5cdFx0Ly8gY2xlYXIgc3ViLXJ1bGVzXHJcblx0XHRpZiAodGhpcy5ydWxlQ29udGFpbmVyKVxyXG5cdFx0XHR0aGlzLnJ1bGVDb250YWluZXIuY2xlYXJSdWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBkZWZpbmluZyB0aGUgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlXHJcblx0cHVibGljIGdldCBydWxlcygpOiBUIHsgcmV0dXJuIHRoaXMuaW5zdGFuY2UgYXMgVDsgfVxyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTR3JvdXBpbmdSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IGRlZmluZXMgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcblxyXG5cdC8vIFN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0cHJvdGVjdGVkIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIGZvciB0aGUgZGVmaW5pdGlvbiBpbnN0YW5jZS5cclxuXHRwcm90ZWN0ZWQgcnVsZUNvbnRhaW5lcjogSVJ1bGVDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdXBwb3J0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQHN1cHBvcnRzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3VwcG9ydHNSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSVN1cHBvcnRzUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeTogU3VwcG9ydHNRdWVyeSwgaW5zdGFuY2VPckNsYXNzOiBUIHwgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBpbnN0YW5jZU9yQ2xhc3MpO1xyXG5cclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFN1cHBvcnRzUnVsZTxUPlxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgU3VwcG9ydHNSdWxlPFQ+KCB0aGlzLnF1ZXJ5LCB0aGlzLmluc3RhbmNlT3JDbGFzcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHN0cmluZyBvZiB0aGlzIGdyb3VwaW5nIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdldEdyb3VwU2VsZWN0b3JUZXh0KCk6IHN0cmluZyB8IG51bGxcclxuXHR7XHJcblx0XHQvLyBjb252ZXJ0IHRoZSBxdWVyeSB0byBpdHMgc3RyaW5nIGZvcm1cclxuXHRcdGxldCBxdWVyeVN0cmluZyA9IHN1cHBvcnRzUXVlcnlUb1N0cmluZyggdGhpcy5xdWVyeSk7XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHF1ZXJ5IGlzIHN1cHBvcnRlZCBhbmQgaWYgaXQgaXMgbm90LCBkb24ndCBpbnNlcnQgdGhlIHJ1bGVcclxuXHRcdHJldHVybiBDU1Muc3VwcG9ydHMoIHF1ZXJ5U3RyaW5nKSA/IGBAc3VwcG9ydHMgJHtxdWVyeVN0cmluZ31gIDogbnVsbDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEZsYWcgaW5kaWNhdGVkIHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhpcyBydWxlJ3MgcXVlcnkgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNTdXBwb3J0ZWQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAgQ1NTLnN1cHBvcnRzKCBzdXBwb3J0c1F1ZXJ5VG9TdHJpbmcoIHRoaXMucXVlcnkpKTtcclxuICAgIH1cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1N1cHBvcnRzUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIHN1cHBvcnQgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwcml2YXRlIHF1ZXJ5OiBTdXBwb3J0c1F1ZXJ5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgTWVkaWFSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpYVJ1bGU8VCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5LCBpbnN0YW5jZU9yQ2xhc3M6IFQgfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIGluc3RhbmNlT3JDbGFzcyk7XHJcblxyXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogTWVkaWFSdWxlPFQ+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBNZWRpYVJ1bGU8VD4oIHRoaXMucXVlcnksIHRoaXMuaW5zdGFuY2VPckNsYXNzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3Igc3RyaW5nIG9mIHRoaXMgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2V0R3JvdXBTZWxlY3RvclRleHQoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdHJldHVybiBgQG1lZGlhICR7bWVkaWFRdWVyeVRvU3RyaW5nKCB0aGlzLnF1ZXJ5KX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTTWVkaWFSdWxlIHwgbnVsbDtcclxuXHJcblx0Ly8gbWVkaWEgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJRm9udEZhY2VSdWxlLCBJSW1wb3J0UnVsZSwgSVBhZ2VSdWxlLCBJTmFtZXNwYWNlUnVsZSwgSUNsYXNzTmFtZVJ1bGUsIElDbGFzc1J1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0lGb250RmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtmb250RmFjZVRvU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlRnVuY3NcIlxyXG5pbXBvcnQge1J1bGUsIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQsIFJ1bGVMaWtlLCBJUnVsZUNvbnRhaW5lciwgSVRvcExldmVsUnVsZUNvbnRhaW5lcn0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5pbXBvcnQge1N1cHBvcnRzUXVlcnksIFN0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuaW1wb3J0IHtzdXBwb3J0c1F1ZXJ5VG9TdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiO1xyXG5pbXBvcnQge21lZGlhUXVlcnlUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVzXCI7XHJcbmltcG9ydCB7UGFnZVBzZXVkb0NsYXNzfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNaXNjUnVsZSBjbGFzcyBzZXJ2ZXMgYXMgYSBiYXNlIGNsYXNzIGZvciBzaW1wbGUgcnVsZXMuXHJcbiAqL1xyXG5hYnN0cmFjdCBjbGFzcyBNaXNjUnVsZTxUIGV4dGVuZHMgQ1NTUnVsZT4gZXh0ZW5kcyBSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGlzVG9wTGV2ZWxSdWxlPzogYm9vbGVhbilcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5pc1RvcExldmVsUnVsZSA9IGlzVG9wTGV2ZWxSdWxlO1xyXG5cdH1cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NSdWxlID0gUnVsZS5hZGRSdWxlVG9ET00oIHRoaXMuZ2V0UnVsZVRleHQoKSwgcGFyZW50KSBhcyBUO1xyXG5cdH1cclxuXHJcblx0Ly8gU2VyaWFsaXplcyB0aGlzIHJ1bGUgdG8gYSBzdHJpbmcuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRjdHguYWRkUnVsZVRleHQoIHRoaXMuZ2V0UnVsZVRleHQoKSwgdGhpcy5pc1RvcExldmVsUnVsZSk7XHJcbiAgICB9XHJcblxyXG5cdC8vIFJldHVybnMgQ1NTIHN0cmluZyBmb3IgdGhpcyBydWxlLlxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldFJ1bGVUZXh0KCk6IHN0cmluZztcclxuXHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHB1YmxpYyBjc3NSdWxlOiBUO1xyXG5cclxuICAgIC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgcnVsZSBjYW4gb25seSBiZSBhdCB0aGUgdG9wLWxldmVsIG9mIHN0eWxlc2hlZXRzIChlLmcuIEBpbXBvcnRcclxuICAgIC8vIGFuZCBAbmFtZXNwYWNlKS5cclxuICAgIHByaXZhdGUgaXNUb3BMZXZlbFJ1bGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSW1wb3J0UnVsZSBjbGFzcyBkZXNjcmliZXMgYSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEltcG9ydFJ1bGUgZXh0ZW5kcyBNaXNjUnVsZTxDU1NJbXBvcnRSdWxlPiBpbXBsZW1lbnRzIElJbXBvcnRSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHVybDogc3RyaW5nLCBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSwgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnkpXHJcblx0e1xyXG4gICAgICAgIC8vIHRoaXMgaXMgYSB0b3AtbGV2ZWwgcnVsZVxyXG5cdFx0c3VwZXIoIHRydWUpO1xyXG5cclxuXHRcdHRoaXMudXJsID0gdXJsO1xyXG5cdFx0dGhpcy5tZWRpYVF1ZXJ5ID0gbWVkaWFRdWVyeTtcclxuXHRcdHRoaXMuc3VwcG9ydHNRdWVyeSA9IHN1cHBvcnRzUXVlcnk7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogSW1wb3J0UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgSW1wb3J0UnVsZSggdGhpcy51cmwsIHRoaXMubWVkaWFRdWVyeSwgdGhpcy5zdXBwb3J0c1F1ZXJ5KTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgQ1NTIHN0cmluZyBmb3IgdGhpcyBydWxlLlxyXG4gICAgcHJvdGVjdGVkIGdldFJ1bGVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0bGV0IHVybDogc3RyaW5nO1xyXG5cdFx0aWYgKHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJ1cmxcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIlxcXCJcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIidcIikpXHJcblx0XHRcdHVybCA9IHRoaXMudXJsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR1cmwgPSBgdXJsKCR7dGhpcy51cmx9KWA7XHJcblxyXG5cdFx0bGV0IHN1cHBvcnRzUXVlcnlTdHJpbmcgPSAhdGhpcy5zdXBwb3J0c1F1ZXJ5ID8gXCJcIiA6IHN1cHBvcnRzUXVlcnlUb1N0cmluZyggdGhpcy5zdXBwb3J0c1F1ZXJ5KTtcclxuXHRcdGlmIChzdXBwb3J0c1F1ZXJ5U3RyaW5nICYmICFzdXBwb3J0c1F1ZXJ5U3RyaW5nLnN0YXJ0c1dpdGgoIFwic3VwcG9ydHNcIikpXHJcblx0XHQgICAgc3VwcG9ydHNRdWVyeVN0cmluZyA9IGBzdXBwb3J0cyggJHtzdXBwb3J0c1F1ZXJ5U3RyaW5nfSApYDtcclxuXHJcblx0XHRsZXQgbWVkaWFRdWVyeVN0cmluZyA9ICF0aGlzLm1lZGlhUXVlcnkgPyBcIlwiIDogbWVkaWFRdWVyeVRvU3RyaW5nKCB0aGlzLm1lZGlhUXVlcnkpO1xyXG5cdFx0cmV0dXJuIGBAaW1wb3J0ICR7dXJsfSAke3N1cHBvcnRzUXVlcnlTdHJpbmd9ICR7bWVkaWFRdWVyeVN0cmluZ31gO1xyXG4gICAgfVxyXG5cclxuXHQvLyBVUkwgdG8gaW1wb3J0IGZyb20uXHJcblx0cHVibGljIHVybDogc3RyaW5nO1xyXG5cclxuXHQvLyBPcHRpb25hbCBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBtZWRpYVF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxuXHJcblx0Ly8gT3B0aW9uYWwgc3VwcG9ydHMgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgc3VwcG9ydHNRdWVyeT86IHN0cmluZyB8IFN1cHBvcnRzUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOYW1lc3BhY2VSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIENTUyBAbmFtZXNwYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTmFtZXNwYWNlUnVsZSBleHRlbmRzIE1pc2NSdWxlPENTU05hbWVzcGFjZVJ1bGU+IGltcGxlbWVudHMgSU5hbWVzcGFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggbmFtZXNwYWNlOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZylcclxuXHR7XHJcbiAgICAgICAgLy8gdGhpcyBpcyBhIHRvcC1sZXZlbCBydWxlXHJcblx0XHRzdXBlciggdHJ1ZSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XHJcblx0XHR0aGlzLnByZWZpeCA9IHByZWZpeDtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBOYW1lc3BhY2VSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBOYW1lc3BhY2VSdWxlKCB0aGlzLm5hbWVzcGFjZSwgdGhpcy5wcmVmaXgpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIGZvciB0aGlzIHJ1bGUuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0UnVsZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcblx0XHRsZXQgdXJsID0gdGhpcy5uYW1lc3BhY2Uuc3RhcnRzV2l0aCggXCJ1cmwoXCIpID8gdGhpcy5uYW1lc3BhY2UgOiBgdXJsKCR7dGhpcy5uYW1lc3BhY2V9KWA7XHJcblx0XHRyZXR1cm4gYEBuYW1lc3BhY2UgJHt0aGlzLnByZWZpeCA/IHRoaXMucHJlZml4IDogXCJcIn0gJHt1cmx9YDtcclxuICAgIH1cclxuXHJcblx0LyoqIE5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBydWxlICovXHJcblx0cHVibGljIG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBwcmVmaXg6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGb250RmFjZVJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgQGZvbnQtZmFjZSBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb250RmFjZVJ1bGUgZXh0ZW5kcyBNaXNjUnVsZTxDU1NGb250RmFjZVJ1bGU+IGltcGxlbWVudHMgSUZvbnRGYWNlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBmb250ZmFjZTogSUZvbnRGYWNlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5mb250ZmFjZSA9IGZvbnRmYWNlO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEZvbnRGYWNlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgRm9udEZhY2VSdWxlKCB0aGlzLmZvbnRmYWNlKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgQ1NTIHN0cmluZyBmb3IgdGhpcyBydWxlLlxyXG4gICAgcHJvdGVjdGVkIGdldFJ1bGVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG5cdFx0cmV0dXJuIGBAZm9udC1mYWNlICR7Zm9udEZhY2VUb1N0cmluZyggdGhpcy5mb250ZmFjZSl9YDtcclxuICAgIH1cclxuXHJcblx0Ly8gT2JqZWN0IGRlZmluaW5nIGZvbnQtZmFjZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBmb250ZmFjZTogSUZvbnRGYWNlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUGFnZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyB0aGUgQ1NTIEBwYWdlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUGFnZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJUGFnZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcHNldWRvQ2xhc3M/OiBQYWdlUHNldWRvQ2xhc3MsIHN0eWxlPzogU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMucHNldWRvQ2xhc3MgPSBwc2V1ZG9DbGFzcztcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZU9iamVjdCgpOiBQYWdlUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgUGFnZVJ1bGUoIHRoaXMucHNldWRvQ2xhc3MpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGBAcGFnZSAke3RoaXMucHNldWRvQ2xhc3MgPyB0aGlzLnBzZXVkb0NsYXNzIDogXCJcIn1gO1xyXG5cdH1cclxuXHJcblx0LyoqIFNPTSBwYWdlIHJ1bGUgKi9cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUGFnZVJ1bGU7XHJcblxyXG5cdC8qKiBPcHRpb25hbCBuYW1lIG9mIHRoZSBwYWdlIHBzZXVkbyBzdHlsZSAoZS5nLiBcIlwiOmZpcnN0XCIpICovXHJcblx0cHVibGljIHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBQYWdlUnVsZSBjbGFzcyByZXByZXNlbnRzIHRoZSBDU1MgQHBhZ2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc05hbWVSdWxlIGV4dGVuZHMgUnVsZUxpa2UgaW1wbGVtZW50cyBJQ2xhc3NOYW1lUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBjbGFzc2VzOiAoSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlIHwgc3RyaW5nKVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNsYXNzZXMgPSBjbGFzc2VzO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IENsYXNzTmFtZVJ1bGVcclxuXHR7XHJcblx0XHRyZXR1cm4gbmV3IENsYXNzTmFtZVJ1bGUoIHRoaXMuY2xhc3Nlcyk7XHJcblx0fVxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgc3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSB0aGlzLmNsYXNzZXMubWFwKCBjbHMgPT4gdHlwZW9mIGNscyA9PT0gXCJzdHJpbmdcIiA/IGNscyA6IGNscy5uYW1lKS5qb2luKFwiIFwiKTtcclxuICAgICAgICB0aGlzLmNzc0NsYXNzTmFtZSA9IFwiLlwiICsgdGhpcy5jbGFzc2VzLm1hcCggY2xzID0+IHR5cGVvZiBjbHMgPT09IFwic3RyaW5nXCIgPyBjbHMgOiBjbHMubmFtZSkuam9pbihcIi5cIik7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHRoZSBvYmplY3QgdG8gcGFydGljcGF0ZSBpbiBcInZhbHVlVG9TdHJpbmdcIiBzZXJpYWxpemF0aW9uLiBXaGVuZXZlclxyXG5cdCAqIHRoZSBDbGFzc05hbWVSdWxlIG9iamVjdCBpcyBlbmNvdW50ZXJlZCBieSB0aGUgYFV0aWxGdW5jLnZhbHVlVG9TdHJpbmdgIGZ1bmN0aW9uLFxyXG5cdCAqIHRoZSBydWxlJ3MgQ1NTIG5hbWUgKHRoZSBvbmUgd2l0aCB0aGUgZG90cykgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB2YWx1ZVRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmNzc0NsYXNzTmFtZTtcclxuXHR9XHJcblxyXG4gICAgLy8gSW1wbGVtZW50YXRpb24gb2YgdGhlIHRvU3RyaW5nIG1ldGhvZCByZXR1cm5zIHRoZSBjb21iaW5lZCBuYW1lIG9mIHRoZSBjbGFzc2VzICh3aXRob3V0XHJcbiAgICAvLyB0aGUgQ1NTIHByZWZpeGVzKS5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG4gICAgLyoqIEFsbCBjbGFzcyBuYW1lcyBjb25jYXRlbmF0ZWQgd2l0aCBzcGFjZSAqL1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIFxyXG4gICAgLyoqIEFsbCBjbGFzcyBDU1MgbmFtZXMgKHdpdGggZG90cykgY29uY2F0ZW5hdGVkIHRvZ2V0aGVyICovXHJcbiAgICBwdWJsaWMgY3NzQ2xhc3NOYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgcHJpdmF0ZSBjbGFzc2VzOiAoSUNsYXNzUnVsZSB8IElDbGFzc05hbWVSdWxlIHwgc3RyaW5nKVtdO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVJ1bGUsIElOYW1lZEVudGl0eSwgU3R5bGVEZWZpbml0aW9ufSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQgaW50ZXJmYWNlIGtlZXBzIGluZm9ybWF0aW9uIGR1cmluZyBzZXJpYWxpemF0aW9uIG9mIHN0eWxlXHJcbiAqIGRlZmluaXRpb24gY2xhc3NlcyBhbmQgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0XHJcbntcclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBhZGRSdWxlVGV4dCggczogc3RyaW5nLCBpc1RvcExldmVsUnVsZT86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuICAgIC8vIEFkZHMgcnVsZSB0ZXh0XHJcbiAgICBhZGRTdHlsZURlZmluaXRpb24oIGluc3RhbmNlOiBTdHlsZURlZmluaXRpb24pOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgYWNjb21wYW5pZXMgYW5kIGlzIGFzc29jaWF0ZWQgd2l0aFxyXG4gKiBhIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZUNvbnRhaW5lclxyXG57XHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRnZXREZWZpbml0aW9uSW5zdGFuY2UoKTogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvKiogSW5zZXJ0cyBhbGwgcnVsZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lciB0byBlaXRoZXIgdGhlIHN0eWxlIHNoZWV0IG9yIGdyb3VwaW5nIHJ1bGUuICovXHJcblx0aW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8qKiBDbGVhcnMgYWxsIENTUyBydWxlIG9iamVjdHMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRjbGVhclJ1bGVzKCk6IHZvaWQ7XHJcblxyXG5cdC8qKiBXcml0ZXMgYWxsIHJ1bGVzIHJlY3Vyc2l2ZWx5IHRvIHRoZSBnaXZlbiBzdHJpbmcuICovXHJcblx0c2VyaWFsaXplUnVsZXMoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWQ7XHJcblxyXG4gICAgLyoqIFNldHMgdGhlIGdpdmVuIHZhbHVlIGZvciB0aGUgY3VzdG9tIENTUyByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUuICovXHJcblx0c2V0Q3VzdG9tVmFyVmFsdWUoIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRvcExldmVsUnVsZUNvbnRhaW5lciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9uIG9iamVjdCB0aGF0IFwib3duc1wiXHJcbiAqIHRoZSBydWxlcyB1bmRlciB0aGlzIGNvbnRhaW5lci4gSW4gcGFydGljdWxhciwgdGhlIG93bmVyJ3Mgam9iIGlzIHRvIGdlbmVyYXRlIFwic2NvcGVkXCIgdW5pcXVlXHJcbiAqIG5hbWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyIGV4dGVuZHMgSVJ1bGVDb250YWluZXJcclxue1xyXG5cdC8qKiBHZW5lcmF0ZXMgYSBuYW1lLCB3aGljaCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGlzIHN0eWxlc2hlZXQgKi9cclxuXHRnZXRTY29wZWRSdWxlTmFtZSggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVMaWtlIGFic3RyYWN0IGNsYXNzIGlzIGEgYmFzZSBmb3IgYWxsIFwicnVsZXNcIiBkZWZpbmVkIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMgLVxyXG4gKiB3aGV0aGVyIHRoZXkgY29ycmVzcG9uZCB0byByZWFsIENzc1J1bGVzIChhbmQgdGh1cyBkZXJpdmUgZnJvbSB0aGUgUnVsZSBjbGFzcykgb3Igbm90IChzdWNoIGFzXHJcbiAqIGNvdW50ZXJzLCBncmlkIGxpbmVzIGFuZCBncmlkIGFyZWFzKS5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlTGlrZVxyXG57XHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFx0dGhpcy5vd25lckNvbnRhaW5lciA9IG93bmVyQ29udGFpbmVyO1xyXG5cdFx0dGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGVMaWtlO1xyXG5cclxuXHQvLyBDb250YWluZXIgYXQgdGhlIHRvcCBvZiB0aGUgY2hhaW4gb2YgY29udGFpbmVycyB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncy5cclxuXHRwdWJsaWMgb3duZXJDb250YWluZXI6IElUb3BMZXZlbFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBjYW5cclxuXHQvLyBiZSBudWxsIGZvciBydWxlcyBub3QgY3JlYXRlZCB2aWEgYXNzaWdubWVudCB0byBzdHlsZSBkZWZpbml0aW9uIHByb3BlcnRpZXMuXHJcblx0cHVibGljIHJ1bGVOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0byB3aGljaCB0aGlzIHJ1bGUgYmVsb25ncy5cclxuXHRwdWJsaWMgY29udGFpbmVyOiBJUnVsZUNvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIGFsbCBydWxlcy4gQXMgYSBwYXJlbnQgb2YgUnVsZUNvbnRhaW5lciwgdGhlIFJ1bGVcclxuICogY2xhc3MgaXMgYWxzbyBhbiBhbmNlc3RvciBmb3IgU3R5bGVzaGVldDsgaG93ZXZlciwgbW9zdCBvZiBpdHMgdGhlIGZpZWxkcyBhcmUgdW5kZWZpbmVkIGluXHJcbiAqIHRlIFN0eWxlc2hlZXQgaW5zdGFuY2VzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGUgZXh0ZW5kcyBSdWxlTGlrZSBpbXBsZW1lbnRzIElSdWxlXHJcbntcclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY2xvbmUoKTogUnVsZTtcclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0Ly8gc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MsIGlzIGFjdGl2YXRlZC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVycyB0aGUgQ1NTIHJ1bGUgb2JqZWN0LiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgdG8gd2hpY2hcclxuXHQvLyB0aGlzIHJ1bGUgYmVsb25ncywgaXMgZGVhY3RpdmF0ZWQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWQgeyB0aGlzLmNzc1J1bGUgPSBudWxsOyB9XHJcblxyXG5cdC8vIFNlcmlhbGl6ZXMgdGhpcyBydWxlIHRvIGEgc3RyaW5nLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGUgZ2l2ZW4gcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBzdGF0aWMgYWRkUnVsZVRvRE9NKCBydWxlVGV4dDogc3RyaW5nLCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiBDU1NSdWxlIHwgbnVsbFxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0XHRyZXR1cm4gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCB4KVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgQ2Fubm90IGFkZCBDU1MgcnVsZSAnJHtydWxlVGV4dH0nYCwgeClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENTU1J1bGUtZGVyaXZlZCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgYWN0dWFsbCBDU1MgcnVsZSBpbnNlcnRlZCBpbnRvXHJcblx0Ly8gdGhlIHN0eWxlcyBzaGVldCBvciB0aGUgcGFyZW50IHJ1bGUuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciBTdHlsZXNoZWV0IG9iamVjdHMuXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIHNjb3BlZCBuYW1lcyBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycyAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5LFxyXG5cdGNzc1ByZWZpeD86IHN0cmluZyk6IFtzdHJpbmcsc3RyaW5nXVxyXG57XHJcblx0aWYgKCFydWxlTmFtZSAmJiAhbmFtZU92ZXJyaWRlKVxyXG5cdFx0cmV0dXJuIFtcIlwiLCBcIlwiXTtcclxuXHJcblx0bGV0IG5hbWUgPSAhbmFtZU92ZXJyaWRlXHJcblx0XHQ/IG93bmVyQ29udGFpbmVyLmdldFNjb3BlZFJ1bGVOYW1lKCBydWxlTmFtZSEpXHJcblx0XHQ6IHR5cGVvZiBuYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCJcclxuXHRcdFx0PyBuYW1lT3ZlcnJpZGVcclxuXHRcdFx0OiBuYW1lT3ZlcnJpZGUubmFtZTtcclxuXHJcblx0cmV0dXJuICFjc3NQcmVmaXhcclxuXHRcdD8gW25hbWUsbmFtZV1cclxuXHRcdDogbmFtZS5zdGFydHNXaXRoKCBjc3NQcmVmaXgpXHJcblx0XHRcdD8gW25hbWUuc3Vic3RyKCBjc3NQcmVmaXgubGVuZ3RoKSwgbmFtZV1cclxuXHRcdFx0OiBbbmFtZSwgY3NzUHJlZml4ICsgbmFtZV07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZURlZmluaXRpb24sIElTdHlsZURlZmluaXRpb25DbGFzc30gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlLCBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBSdWxlTGlrZSwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7VmFyUnVsZX0gZnJvbSBcIi4vVmFyUnVsZVwiXHJcbmltcG9ydCB7SW1wb3J0UnVsZSwgTmFtZXNwYWNlUnVsZX0gZnJvbSBcIi4vTWlzY1J1bGVzXCJcclxuaW1wb3J0IHtzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZX0gZnJvbSBcIi4vU2NoZWR1bGluZ1wiO1xyXG5cclxuXHJcblxyXG4vLyBEZWZpbmUgc3ltYm9scyB0aGF0IGFyZSB1c2VkIGZvciBrZWVwaW5nIGltcG9ydGFudCBpbmZvcm1hdGlvbiBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBpbnN0YW5jZXMgdGhhdCB3ZSBkb24ndCB3YW50IHRvIGJlIHZpc2libGUgdG8gZGV2ZWxvcGVycy5cclxuXHJcbi8qKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBwb2ludGluZyB0byB0aGUgc2luZ2x0b24gaW5zdGFuY2UuICovXHJcbmNvbnN0IHN5bUluc3RhbmNlID0gU3ltYm9sKFwiZGVmaW5pdGlvblwiKTtcclxuXHJcbi8qKlxyXG4gKiBQcm9wZXJ0eSBvbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZSBwb2ludGluZyB0byB0aGUgUnVsZUNvbnRhaW5lciBvYmplY3QgdGhhdCBpc1xyXG4gKiByZXNwb25zaWJsZSBmb3IgcHJvY2Vzc2luZyBydWxlcy5cclxuICovXHJcbmNvbnN0IHN5bUNvbnRhaW5lciA9IFN5bWJvbChcImNvbnRhaW5lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlQ29udGFpbmVyIGNsYXNzIGlzIGEgc2hhZG93IHN0cnVjdHVyZSB0aGF0IGFjY29tcGFuaWVzIGV2ZXJ5IHByb2Nlc3NlZCBzdHlsZSBkZWZpbml0aW9uXHJcbiAqIG9iamVjdC4gU2luY2UgU3R5bGVEZWZpbml0aW9uIGNsYXNzIGlzIGFuIGV4cG9ydGVkIGNsYXNzIHZpc2libGUgdG8gZGV2ZWxvcGVycywgd2UgZG9uJ3Qgd2FudFxyXG4gKiB0byBoYXZlIGEgbG90IG9mIGZ1bmN0aW9uYWxpdHkgaW4gaXQuIFRoZSBSdWxlQ29udGFpbmVyIG9iamVjdCBpcyBsaW5rZWQgdG8gdGhlIFN0eWxlRGVmaW5pdGlvblxyXG4gKiBvYmplY3QgdmlhIHRoZSBbc3ltUnVsZUNvbnRhaW5lcl0gc3ltYm9sLiBJdCBjb250YWlucyBhbGwgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIHBhcnNpbmcgcnVsZVxyXG4gKiBkZWZpbml0aW9ucywgbmFtZSBhc3NpZ25tZW50IGFuZCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuICovXHJcbmNsYXNzIFJ1bGVDb250YWluZXIgaW1wbGVtZW50cyBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyXHJcbntcclxuXHRjb25zdHJ1Y3RvciggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgbmFtZTogc3RyaW5nLCBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyKVxyXG5cdHtcclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0XHR0aGlzLmVtYmVkZGluZ0NvbnRhaW5lciA9IGVtYmVkZGluZ0NvbnRhaW5lcjtcclxuXHJcbiAgICAgICAgdGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvciBhcyBJU3R5bGVEZWZpbml0aW9uQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBpbnN0YW5jZS4kcGFyZW50O1xyXG5cdFx0dGhpcy5vd25lciA9IGluc3RhbmNlLiRvd25lcjtcclxuXHJcblx0XHR0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9IDA7XHJcblx0XHR0aGlzLmRvbVN0eWxlRWxtID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnByb2Nlc3MoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIGNyZWF0ZXMgbmFtZXMgZm9yIGNsYXNzZXMsXHJcblx0Ly8gSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gdmFyaWFibGVzLlxyXG5cdHByaXZhdGUgcHJvY2VzcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gcHV0IHJlZmVyZW5jZSB0byB0aGlzIGNvbnRhaW5lciBpbiB0aGUgc3ltYm9sIHByb3BlcnR5IG9mIHRoZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdFx0dGhpcy5pbnN0YW5jZVtzeW1Db250YWluZXJdID0gdGhpcztcclxuXHJcblx0XHQvLyBnZXQgY29udGFpbmVycyBmb3IgdGhlIHBhcmVudCBhbmQgb3duZXIgc3R5bGUgZGVmaW5pdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudClcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRDb250YWluZXIgPSB0aGlzLnBhcmVudFtzeW1Db250YWluZXJdO1xyXG5cclxuXHRcdGlmICh0aGlzLm93bmVyKVxyXG5cdFx0XHR0aGlzLnRvcExldmVsQ29udGFpbmVyID0gdGhpcy5vd25lcltzeW1Db250YWluZXJdO1xyXG5cclxuXHRcdC8vIGlmIG91ciBjb250YWluZXIgaGFzIHBhcmVudCBjb250YWluZXIsIHByZWZpeCBvdXIgbmFtZSB3aXRoIHRoZSB1cHBlciBvbmVcclxuXHRcdGlmICh0aGlzLnBhcmVudENvbnRhaW5lcilcclxuXHRcdFx0dGhpcy5uYW1lID0gYCR7dGhpcy5wYXJlbnRDb250YWluZXIubmFtZX1fJHt0aGlzLm5hbWV9YDtcclxuXHJcblx0XHR0aGlzLmltcG9ydHMgPSBbXTtcclxuXHRcdHRoaXMubmFtZXNwYWNlcyA9IFtdO1xyXG5cdFx0dGhpcy52YXJzID0gW107XHJcblx0XHR0aGlzLnJlZnMgPSBbXTtcclxuXHRcdHRoaXMub3RoZXJSdWxlcyA9IFtdO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhlbS5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1Byb3BlcnR5KCBwcm9wTmFtZSwgdGhpcy5pbnN0YW5jZVtwcm9wTmFtZV0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuIFRoaXMgY3JlYXRlcyBuYW1lcyBmb3IgY2xhc3NlcyxcclxuXHQvLyBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSB2YXJpYWJsZXMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcgfCBudWxsLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHByb3BWYWwgaW5zdGFuY2VvZiBTdHlsZURlZmluaXRpb24pXHJcblx0XHRcdHRoaXMucHJvY2Vzc1JlZmVyZW5jZSggcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBWYXJSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NWYXJSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBSdWxlKVxyXG5cdFx0XHR0aGlzLnByb2Nlc3NSdWxlKCBwcm9wTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgUnVsZUxpa2UpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1J1bGVMaWtlKCBwcm9wTmFtZSwgcHJvcFZhbClcclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkpXHJcblx0XHRcdHRoaXMucHJvY2Vzc0FycmF5KCBwcm9wVmFsKVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgcmVmZXJlbmNlIHRvIGFub3RoZXIgc3R5bGUgZGVmaW5pdGlvbiBjcmVhdGVkIGJ5IHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1JlZmVyZW5jZSggcmVmOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIGluc3RhbmNlIGhhcyBub3QgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCwgcHJvY2VzcyBpdCBhbmQgaW5kaWNhdGUgdGhhdCBpdCBpc1xyXG5cdFx0Ly8gZW1iZWRkZWQgaW50byBvdXIgY29udGFpbmVyIGJlY2F1c2Ugb25seSBkZWZpbml0aW9ucyBjcmVhdGVkIHdpdGggdGhlICRlbWJlZCBmdW5jdGlvblxyXG5cdFx0Ly8gYXJlIG5vdCBwcm9jZXNzZWQuXHJcblx0XHRwcm9jZXNzSW5zdGFuY2UoIHJlZiwgdGhpcyk7XHJcblx0XHR0aGlzLnJlZnMucHVzaCggcmVmKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBwcm9jZXNzVmFyUnVsZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHZhck9iajogVmFyUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZXNoZWV0LCB3ZSBjcmVhdGUgYSBjbG9uZSBvZiB0aGVcclxuXHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc3R5bGVzaGVldC5cclxuXHRcdGlmICh2YXJPYmouY29udGFpbmVyKVxyXG5cdFx0XHR2YXJPYmogPSB2YXJPYmouY2xvbmUoKTtcclxuXHJcblx0XHR2YXJPYmoucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cdFx0dGhpcy52YXJzLnB1c2goIHZhck9iaik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBjb3VudGVyIG9iamVjdC5cclxuXHRwcml2YXRlIHByb2Nlc3NSdWxlTGlrZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHJ1bGVMaWtlOiBSdWxlTGlrZSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB0aGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZXNoZWV0LCB3ZSBjcmVhdGUgYSBjbG9uZSBvZiB0aGVcclxuXHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc3R5bGVzaGVldC5cclxuXHRcdGlmIChydWxlTGlrZS5jb250YWluZXIpXHJcbiAgICAgICAgICAgIHJ1bGVMaWtlID0gcnVsZUxpa2UuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgcnVsZUxpa2UucHJvY2VzcyggdGhpcywgdGhpcy50b3BMZXZlbENvbnRhaW5lciwgcHJvcE5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIFJ1bGUtZGVyaXZlZCBvYmplY3QuXHJcblx0cHJpdmF0ZSBwcm9jZXNzUnVsZSggcHJvcE5hbWU6IHN0cmluZyB8IG51bGwsIHJ1bGU6IFJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIHJ1bGUgb2JqZWN0IGlzIGFscmVhZHkgcHJvY2Vzc2VkIGFzIHBhcnQgb2YgYW5vdGhlciBpbnN0YW5jZSwgd2UgY3JlYXRlIGEgY2xvbmVcclxuXHRcdC8vIG9mIHRoZSBydWxlIGFuZCBzZXQgaXQgdG8gb3VyIGluc3RhbmNlLlxyXG5cdFx0aWYgKHJ1bGUub3duZXJDb250YWluZXIpXHJcblx0XHR7XHJcblx0XHRcdGlmIChwcm9wTmFtZSlcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlW3Byb3BOYW1lXSA9IHJ1bGUgPSBydWxlLmNsb25lKCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIFRPRE86IHN1cHBvcnQgYWxyZWFkeSB1c2VkIHJ1bGVzIGluIGFuIGFycmF5XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cnVsZS5wcm9jZXNzKCB0aGlzLCB0aGlzLnRvcExldmVsQ29udGFpbmVyLCBwcm9wTmFtZSk7XHJcblxyXG5cdFx0aWYgKHJ1bGUgaW5zdGFuY2VvZiBJbXBvcnRSdWxlKVxyXG5cdFx0XHR0aGlzLmltcG9ydHMucHVzaCggcnVsZSk7XHJcblx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgTmFtZXNwYWNlUnVsZSlcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzLnB1c2goIHJ1bGUpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLm90aGVyUnVsZXMucHVzaCggcnVsZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyBydWxlcyBmcm9tIHRoZSBnaXZlbiBhcnJheS5cclxuXHRwcml2YXRlIHByb2Nlc3NBcnJheSggcHJvcFZhbHM6IGFueVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcHJvcFZhbHMgfHwgcHJvcFZhbHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aG9zZSB0aGF0IGFyZSBydWxlcy5cclxuXHRcdGZvciggbGV0IHByb3BWYWwgb2YgcHJvcFZhbHMpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1Byb3BlcnR5KCBudWxsLCBwcm9wVmFsKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3MgKi9cclxuXHRwdWJsaWMgZ2V0RGVmaW5pdGlvbkluc3RhbmNlKCk6IFN0eWxlRGVmaW5pdGlvblxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBnaXZlbiB2YWx1ZSBmb3IgdGhlIGN1c3RvbSBDU1Mgcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBzZXRDdXN0b21WYXJWYWx1ZSggbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSlcclxuICAgICAgICAgICAgc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHRoaXMuY3NzQ3VzdG9tVmFyU3R5bGVSdWxlLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50LCBzY2hlZHVsZXJUeXBlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGVzIGEgZ2xvYmFsbHkgdW5pcXVlIENTUyBuYW1lIGZvciB0aGUgZ2l2ZW4gcnVsZSBuYW1lIHVubGVzcyB0aGlzIHJ1bGUgbmFtZSBhbHJlYWR5XHJcblx0ICogZXhpc3RzIGVpdGhlciBpbiBhIGJhc2UgY2xhc3Mgb3IgaW4gdGhlIGNoYWluIG9mIHBhcmVudCBncm91cGluZyBydWxlcy5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0U2NvcGVkUnVsZU5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBpZiBydWxlIG5hbWUgd2FzIG5vdCBzcGVjaWZpZWQsIGdlbmVyYXRlIGl0IHVuaXF1ZWx5OyBvdGhlcndpc2UsIGNoZWNrIHdoZXRoZXIgd2VcclxuXHRcdC8vIGFscmVhZHkgaGF2ZSB0aGlzIHJ1bGUgbmFtZTogaWYgeWVzLCByZXR1cm4gdGhlIGFscmVhZHkgYXNzaWduZWQgbmFtZS4gSWYgd2UgZGlkbid0XHJcblx0XHQvLyBmaW5kIHRoZSBuYW1lLCB0cnkgdG8gZmluZCBpdCBpbiB0aGUgYmFzZSBjbGFzc2VzKTsgaWYgbm90IGZvdW5kIHRoZXJlLCBnZW5lcmF0ZSBpdFxyXG5cdFx0Ly8gdXNpbmcgdGhpcyBjb250YWluZXIncyBuYW1lIGFuZCB0aGUgcnVsZSBuYW1lIChub3RlIHRoYXQgZGVwZW5kaW5nIG9uIHRoZSBtb2RlLCBib3RoXHJcblx0XHQvLyBjYW4gYmUgZ2VuZXJhdGVkIHVuaXF1ZWx5KS5cclxuXHRcdGlmICghcnVsZU5hbWUpXHJcblx0XHRcdHJldHVybiBnZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRcdGVsc2UgaWYgKHJ1bGVOYW1lIGluIHRoaXMuaW5zdGFuY2UgJiYgXCJuYW1lXCIgaW4gdGhpcy5pbnN0YW5jZVtydWxlTmFtZV0pXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlW3J1bGVOYW1lXS5uYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmaW5kIG91dCBpZiB0aGVyZSBpcyBhIHJ1bGUgd2l0aCB0aGlzIG5hbWUgZGVmaW5lZCBpbiBhIHN0eWxlc2hlZXQgaW5zdGFuY2UgY3JlYXRlZCBmb3JcclxuXHRcdFx0Ly8gYSBjbGFzcyBmcm9tIHRoZSBwcm90b3R5cGUgY2hhaW4gb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3MuXHJcblx0XHRcdGxldCBleGlzdGluZ05hbWUgPSBmaW5kTmFtZUZvclJ1bGVJblByb3RvdHlwZUNoYWluKCB0aGlzLmRlZmluaXRpb25DbGFzcywgcnVsZU5hbWUpO1xyXG5cdFx0XHRyZXR1cm4gZXhpc3RpbmdOYW1lID8gZXhpc3RpbmdOYW1lIDogZ2VuZXJhdGVOYW1lKCB0aGlzLm5hbWUsIHJ1bGVOYW1lKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLiAqL1xyXG5cdHB1YmxpYyBpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGFzIHRoZXkgbXVzdCBiZSBiZWZvcmUgb3RoZXIgcnVsZXMuIElmIHRoZSBwYXJlbnQgaXMgYSBncm91cGluZ1xyXG5cdFx0Ly8gcnVsZSwgZG9uJ3QgaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXQgYWxsXHJcblx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbXBvcnRzICYmIHRoaXMuaW1wb3J0cy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdFx0dGhpcy5uYW1lc3BhY2VzICYmIHRoaXMubmFtZXNwYWNlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBhY3RpdmF0ZSByZWZlcmVuY2VkIHN0eWxlIGRlZmluaXRpb25zXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltQ29udGFpbmVyXS5hY3RpdmF0ZSgpO1xyXG5cclxuXHRcdC8vIGlzZXJ0IG91ciBjdXN0b20gdmFyaWFibGVzIGluIGEgXCI6cm9vdFwiIHJ1bGVcclxuXHRcdGlmICh0aGlzLnZhcnMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5jc3NDdXN0b21WYXJTdHlsZVJ1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggYDpyb290IHske3RoaXMudmFycy5tYXAoIHZhck9iaiA9PlxyXG5cdFx0XHRcdHZhck9iai50b0Nzc1N0cmluZygpKS5maWx0ZXIoIHYgPT4gdiAhPSBudWxsKS5qb2luKFwiO1wiKX19YCwgcGFyZW50KSBhcyBDU1NTdHlsZVJ1bGU7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IGFsbCBvdGhlciBydWxlc1xyXG5cdFx0dGhpcy5vdGhlclJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5pbnNlcnQoIHBhcmVudCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogQ2xlYXJzIGFsbCBDU1MgcnVsZSBvYmplY3RzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuICovXHJcblx0cHVibGljIGNsZWFyUnVsZXMoKTogdm9pZFxyXG5cdHtcclxuICAgICAgICAvLyBpbXBvcnQgYW5kIG5hbWVzcGFjZSBydWxlcyBjYW4gb25seSBleGlzdCBpbiB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NcclxuXHRcdGlmICh0aGlzLmlzVG9wTGV2ZWwpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuaW1wb3J0cyAmJiB0aGlzLmltcG9ydHMuZm9yRWFjaCggcnVsZSA9PiBydWxlLmNsZWFyKCkpO1xyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMgJiYgdGhpcy5uYW1lc3BhY2VzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNzc0N1c3RvbVZhclN0eWxlUnVsZSA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5vdGhlclJ1bGVzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5jbGVhcigpKTtcclxuXHJcblx0XHQvLyBkZWFjdGl2YXRlIGltcG9ydGVkIHN0eWxlc2hlZXRzXHJcblx0XHRmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG5cdFx0XHRyZWZbc3ltQ29udGFpbmVyXS5kZWFjdGl2YXRlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIHRoaXMgc3R5bGVzaGVldCBpbnRvIERPTS4gKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICgrK3RoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBvbmx5IHRoZSB0b3AtbGV2ZWwgbm90LWVtYmVkZGVkIHN0eWxlIGRlZmluaXRpb25zIGNyZWF0ZSB0aGUgYDxzdHlsZT5gIGVsZW1lbnRcclxuXHRcdFx0aWYgKHRoaXMuZW1iZWRkaW5nQ29udGFpbmVyKVxyXG5cdFx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSB0aGlzLmVtYmVkZGluZ0NvbnRhaW5lci5kb21TdHlsZUVsbTtcclxuXHRcdFx0ZWxzZSBpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbS5pZCA9IHRoaXMubmFtZTtcclxuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLmRvbVN0eWxlRWxtKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy5kb21TdHlsZUVsbSA9IHRoaXMudG9wTGV2ZWxDb250YWluZXIuZG9tU3R5bGVFbG07XHJcblxyXG5cdFx0XHR0aGlzLmluc2VydFJ1bGVzKCB0aGlzLmRvbVN0eWxlRWxtIS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFJlbW92ZXMgdGhpcyBzdHlsZXNoZWV0IGZyb20gRE9NLiAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBndWFyZCBmcm9tIGV4dHJhIGRlYWN0aXZhdGUgY2FsbHNcclxuXHRcdGlmICh0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGlmICgtLXRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNsZWFyUnVsZXMoKTtcclxuXHJcblx0XHRcdC8vIG9ubHkgdGhlIHRvcC1sZXZlbCBzdHlsZSBkZWZpaXRpb24gY3JlYXRlcyB0aGUgYDxzdHlsZT5gIGVsZW1lbnRcclxuXHRcdFx0aWYgKHRoaXMuaXNUb3BMZXZlbClcclxuXHRcdFx0XHR0aGlzLmRvbVN0eWxlRWxtIS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMuZG9tU3R5bGVFbG0gPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogV3JpdGVzIGFsbCBydWxlcyByZWN1cnNpdmVseSB0byB0aGUgZ2l2ZW4gc3RyaW5nLiAqL1xyXG5cdHB1YmxpYyBzZXJpYWxpemVSdWxlcyggY3R4OiBJUnVsZVNlcmlhbGl6YXRpb25Db250ZXh0KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGluc2VydCBAaW1wb3J0IGFuZCBAbmFtZXNwYWNlIHJ1bGVzIGFzIHRoZXkgbXVzdCBiZSBiZWZvcmUgb3RoZXIgcnVsZXMuIElmIHRoZSBwYXJlbnQgaXMgYSBncm91cGluZ1xyXG5cdFx0Ly8gcnVsZSwgZG9uJ3QgaW5zZXJ0IEBpbXBvcnQgYW5kIEBuYW1lc3BhY2UgcnVsZXMgYXQgYWxsXHJcblx0XHRpZiAodGhpcy5pc1RvcExldmVsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmltcG9ydHMgJiYgdGhpcy5pbXBvcnRzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5zZXJpYWxpemUoIGN0eCkpO1xyXG5cdFx0XHR0aGlzLm5hbWVzcGFjZXMgJiYgdGhpcy5uYW1lc3BhY2VzLmZvckVhY2goIHJ1bGUgPT4gcnVsZS5zZXJpYWxpemUoIGN0eCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGFjdGl2YXRlIHJlZmVyZW5jZWQgc3R5bGUgZGVmaW5pdGlvbnNcclxuICAgICAgICBmb3IoIGxldCByZWYgb2YgdGhpcy5yZWZzKVxyXG4gICAgICAgICAgICBjdHguYWRkU3R5bGVEZWZpbml0aW9uKCByZWYpO1xyXG5cclxuXHRcdC8vIHNlcmlhbGl6ZSBvdXIgY3VzdG9tIHZhcmlhYmxlcyBpbiBhIFwiOnJvb3RcIiBydWxlXHJcblx0XHRpZiAodGhpcy52YXJzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdGN0eC5hZGRSdWxlVGV4dCggYDpyb290IHske3RoaXMudmFycy5tYXAoIHZhck9iaiA9PiB2YXJPYmoudG9Dc3NTdHJpbmcoKSkuZmlsdGVyKCB2ID0+IHYgIT0gbnVsbCkuam9pbihcIjtcIil9fWApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNlcmlhbGl6ZSBhbGwgb3RoZXIgcnVsZXNcclxuXHRcdHRoaXMub3RoZXJSdWxlcy5mb3JFYWNoKCBydWxlID0+IHJ1bGUuc2VyaWFsaXplKCBjdHgpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBjb250YWluZXIgaXMgZm9yIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbi5cclxuXHRwcml2YXRlIGdldCBpc1RvcExldmVsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5vd25lciA9PT0gbnVsbCB8fCB0aGlzLm93bmVyID09PSB0aGlzLmluc3RhbmNlIH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoaXMgY29udGFpbmVyIHByb2Nlc3NlZC5cclxuXHRwdWJsaWMgaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbjtcclxuXHJcblx0Ly8gU3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB0aGF0IHRoaXMgY29udGFpbmVyIGNyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YuXHJcblx0cHJpdmF0ZSBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZURlZmluaXRpb25DbGFzc1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoaXMgY29udGFpbmVyLCB3aGljaCwgZGVwZW5kaW5nIG9uIHRoZSBtb2RlLCBpcyBlaXRoZXIgdGFrZW4gZnJvbSB0aGUgY2xhc3NcclxuXHQvLyBkZWZpbml0aW9uIG5hbWUgb3IgZ2VuZXJhdGVkIHVuaXF1ZWx5LlxyXG5cdHByaXZhdGUgbmFtZTogc3RyaW5nXHJcblxyXG5cdC8vIEluc3RhbmNlIG9mIHRoZSBwYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBpbiB0aGUgY2hhaW4gb2YgZ3JvdXBpbmcgcnVsZXMgdGhhdFxyXG5cdC8vIGxlYWQgdG8gdGhpcyBydWxlIGNvbnRhaW5lci4gRm9yIHRvcC1sZXZlbCBzdHlsZSBkZWZpbml0aW9ucywgdGhpcyBpcyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBwYXJlbnQ/OiBTdHlsZURlZmluaXRpb247XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRoYXQgYmVsb25ncyB0byB0aGUgcGFyZW50IHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBpcyB1bmRlZmluZWQuXHJcblx0cHJpdmF0ZSBwYXJlbnRDb250YWluZXI/OiBSdWxlQ29udGFpbmVyO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgdG9wLWxldmVsIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgaW4gdGhlIGNoYWluIG9mIGdyb3VwaW5nIHJ1bGVzIHRoYXRcclxuXHQvLyBsZWFkIHRvIHRoaXMgcnVsZSBjb250YWluZXIuIEZvciB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbnMsIHRoaXMgcG9pbnRzIHRvIHRoZSBzYW1lXHJcblx0Ly8gc2luZ2xldG9uIGRlZmluaXRpb24gaW5zdGFuY2UgYXMgdGhlICdpbnN0YW5jZScgcHJvcGVydHkuXHJcblx0cHJpdmF0ZSBvd25lcjogU3R5bGVEZWZpbml0aW9uO1xyXG5cclxuXHQvLyBSdWxlIGNvbnRhaW5lciB0aGF0IGJlbG9uZ3MgdG8gdGhlIG93bmVyIHN0eWxlIGRlZmludGlvbi4gSWYgb3VyIGNvbnRhaW5lciBpcyB0b3AtbGV2ZWwsXHJcblx0Ly8gdGhpcyBwcm9wZXJ0eSBwb2ludHMgdG8gYHRoaXNgLiBOYW1lcyBmb3IgbmFtZWQgcnVsZXMgYXJlIGNyZWF0ZWQgdXNpbmcgdGhpcyBjb250YWluZXIuXHJcblx0cHJpdmF0ZSB0b3BMZXZlbENvbnRhaW5lcjogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gQ29udGFpbmVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgdGhhdCBpcyBlbWJlZGRpbmcgb3VyIGluc3RhbmNlXHJcblx0Ly8gKHRoYXQgaXMsIHRoZSBpbnN0YW5jZSBjb3JyZXNwb25kaW5nIHRvIG91ciBjb250YWluZXIpLiBJZiBkZWZpbmVkLCB0aGlzIGNvbnRhaW5lcidzXHJcblx0Ly8gYDxzdHlsZT5gIGVsZW1lbnQgaXMgdXNlZCB0byBpbnNlcnQgQ1NTIHJ1bGVzIGludG8gaW5zdGVhZCBvZiB0b3BMZXZlbENvbnRhaW5lci5cclxuXHRwcml2YXRlIGVtYmVkZGluZ0NvbnRhaW5lcj86IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIExpc3Qgb2YgcmVmZXJlbmNlcyB0byBvdGhlciBzdHlsZSBkZWZpbml0aW9ucyBjcmVhZWQgdmlhIHRoZSAkdXNlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgcmVmczogU3R5bGVEZWZpbml0aW9uW107XHJcblxyXG5cdC8vIExpc3Qgb2YgQGltcG9ydCBydWxlc1xyXG5cdHByaXZhdGUgaW1wb3J0czogSW1wb3J0UnVsZVtdO1xyXG5cclxuXHQvLyBMaXN0IG9mIEBuYW1lc3BhY2UgcnVsZXNcclxuXHRwcml2YXRlIG5hbWVzcGFjZXM6IE5hbWVzcGFjZVJ1bGVbXTtcclxuXHJcblx0Ly8gTGlzdCBvZiBjdXN0b20gdmFyaWFibGUgcnVsZXMuXHJcblx0cHJpdmF0ZSB2YXJzOiBWYXJSdWxlW107XHJcblxyXG5cdC8vIExpc3Qgb2YgcnVsZXMgdGhhdCBhcmUgbm90IGltcG9ydHMsIG5hbWVzcGFjZXMsIGN1c3RvbSB2YXJzLCByZWZlcmVuY2VzIG9yIGdyb3VwaW5nIHJ1bGVzLlxyXG5cdHByaXZhdGUgb3RoZXJSdWxlczogUnVsZVtdO1xyXG5cclxuXHQvLyBcIjpyb290XCIgcnVsZSB3aGVyZSBhbGwgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgYXJlIGRlZmluZWQuXHJcblx0cHJpdmF0ZSBjc3NDdXN0b21WYXJTdHlsZVJ1bGU6IENTU1N0eWxlUnVsZSB8IG51bGw7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uIHJlcXVlc3RzLlxyXG5cdHByaXZhdGUgYWN0aXZhdGlvblJlZkNvdW50OiBudW1iZXI7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBlbGVtbnRcclxuXHRwdWJsaWMgZG9tU3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOYW1lIGdlbmVyYXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAoc2hvcnQpIHJ1bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBlbmFibGVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfZW5hYmxlU2hvcnROYW1lcyggZW5hYmxlOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHRzX3VzZVVuaXF1ZVN0eWxlTmFtZXMgPSBlbmFibGU7XHJcblx0c191bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gcHJlZml4ID8gcHJlZml4IDogXCJuXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgbmFtZXMgZm9yIHN0eWxlIGVsZW1lbnRzIChjbGFzc2VzLCAgYW5pbWF0aW9ucywgZXRjLilcclxuICogQnkgZGVmYXVsdCB0aGlzIGZsYWcgaXMgdHJ1ZSBpbiB0aGUgUmVsZWFzZSBidWlsZCBvZiB0aGUgbGlicmFyeSBhbmQgZmFsc2UgaW4gdGhlIERlYnVnIGJ1aWxkLlxyXG4gKi9cclxubGV0IHNfdXNlVW5pcXVlU3R5bGVOYW1lczogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4vLy8gI2lmIERFQlVHXHJcbnNfdXNlVW5pcXVlU3R5bGVOYW1lcyA9IGZhbHNlO1xyXG4vLy8gI2VuZGlmXHJcblxyXG4vKipcclxuICogUHJlZml4IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdW5pcXVlIHN0eWxlIG5hbWVzLiBJZiB1bmRlZmluZWQsIGEgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICovXHJcbmxldCBzX3VuaXF1ZVN0eWxlTmFtZXNQcmVmaXggPSBcIm5cIjtcclxuXHJcbi8qKiBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy4gKi9cclxubGV0IHNfbmV4dFVuaXF1ZUlEID0gMTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGdpdmVuIHJ1bGUgZnJvbSB0aGUgZ2l2ZW4gc3R5bGUgc2hlZXQuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZU5hbWUoIHNoZWV0TmFtZTogc3RyaW5nLCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gc191c2VVbmlxdWVTdHlsZU5hbWVzXHJcblx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSggc191bmlxdWVTdHlsZU5hbWVzUHJlZml4KVxyXG5cdFx0OiBgJHtzaGVldE5hbWV9XyR7cnVsZU5hbWV9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgdW5pcXVlIG5hbWUsIHdoaWNoIGNhbiBiZSB1c2VkIGVpdGhlciBmb3Igc3R5bGUgZWxlbWVudCdzIElEIG9yIG9yIGNsYXNzLFxyXG4gKiBpZGVudGlmaWVyIG9yIGFuaW1hdGlvbiBuYW1lLiBOYW1lcyBhcmUgZ2VuZXJhdGVkIHVzaW5nIGEgc2ltcGxlIGluY3JlbWVudGluZyBudW1iZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHByZWZpeD86IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0cmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiBzX3VuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpICsgc19uZXh0VW5pcXVlSUQrKztcclxufVxyXG5cclxuXHJcblxyXG4vLyBMb29rcyB1cCBhIHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaW4gdGhlIHByb3RvdHlwZSBjaGFpbiBvZiB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvblxyXG4vLyBjbGFzcy4gSWYgZm91bmQgYW5kIGlmIHRoZSBwcm9wZXJ0eSBpcyBhIHJ1bGUsIHRoZW4gcmV0dXJucyB0aGUgbmFtZSBhc3NpZ25lZCBmb3IgaXQuXHJcbmZ1bmN0aW9uIGZpbmROYW1lRm9yUnVsZUluUHJvdG90eXBlQ2hhaW4oIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLCBydWxlTmFtZTogc3RyaW5nKVxyXG57XHJcblx0aWYgKCFkZWZpbml0aW9uQ2xhc3MpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gbG9vcCBvdmVyIHByb3RvdHlwZXNcclxuICAgIGZvciggbGV0IGJhc2VDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiggZGVmaW5pdGlvbkNsYXNzKTtcclxuICAgICAgICAgICAgYmFzZUNsYXNzICE9PSBTdHlsZURlZmluaXRpb247XHJcbiAgICAgICAgICAgICAgICBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGJhc2VDbGFzcykpXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgdGhlIGJhc2UgY2xhc3MgYWxyZWFkeSBoYXMgYW4gYXNzb2NpYXRlZCBpbnN0YW5jZTsgaWYgeWVzLCBjaGVjayB3aGV0aGVyXHJcblx0XHQvLyBpdCBoYXNlIGEgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gcnVsZSBuYW1lLiBJZiB5ZXMsIHRoZW4gdXNlIHRoaXMgcnVsZSdzIGFscmVhZHlcclxuICAgICAgICAvLyBnZW5lcmF0ZWQgbmFtZSAoaWYgZXhpc3RzKS5cclxuXHRcdGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpKVxyXG5cdFx0e1xyXG4gICAgICAgICAgICBsZXQgYmFzZUluc3QgPSBiYXNlQ2xhc3Nbc3ltSW5zdGFuY2VdO1xyXG5cdFx0XHRpZiAoYmFzZUluc3QgJiYgIGJhc2VJbnN0W3J1bGVOYW1lXSAhPSBudWxsICYmIFwibmFtZVwiIGluIGJhc2VJbnN0W3J1bGVOYW1lXSlcclxuXHRcdFx0XHRyZXR1cm4gYmFzZUluc3RbcnVsZU5hbWVdLm5hbWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJvY2Vzc2luZyBmdW5jdGlvbnNcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZXNoZWV0IGRlZmluaXRpb24gY2xhc3Mgb3IgaW5zdGFuY2UgYW5kIGFzc2lnbnMgbmFtZXMgdG8gaXRzIHJ1bGVzLlxyXG4gKiBJZiB0aGUgcGFyYW1ldGVyIGlzIGEgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3ZSBjaGVjayB3aGV0aGVyIHRoZXJlIGlzIGFuIGluc3RhbmNlIGFscmVhZHlcclxuICogY3JlYXRlZCBmb3IgaXQgYXMgYSBjbGFzcyB3aWxsIGhhdmUgb25seSBhIHNpbmdsZSBhc3NvY2lhdGVkIGluc3RhbmUgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzXHJcbiAqIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLlxyXG4gKiBcclxuICogSWYgdGhlIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgKGFuIGluc3RhbmNlIG9mIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MpIHRoZW4gd2UgY2hlY2sgd2hldGhlclxyXG4gKiBpdCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZC4gSWYgeWVzLCB3ZSBqdXN0IHJldHVybiBpdCBiYWNrOyBpZiBubywgd2UgYXNzaWduIG5ldyB1bmlxdWUgbmFtZXNcclxuICogdG8gaXRzIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NJbnN0YW5jZU9yQ2xhc3MoIGluc3RPckNsYXNzOiBTdHlsZURlZmluaXRpb24gfCBJU3R5bGVEZWZpbml0aW9uQ2xhc3MsXHJcblx0cGFyZW50PzogU3R5bGVEZWZpbml0aW9uKTogU3R5bGVEZWZpbml0aW9uIHwgbnVsbFxyXG57XHJcblx0aWYgKCFpbnN0T3JDbGFzcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cclxuXHQvLyBpbnN0T3JDbGFzcyBoYXMgdHlwZSBcIm9iamVjdFwiIGlmIGl0IGlzIGFuIGluc3RhbmNlIGFuZCBcImZ1bmN0aW9uXCIgaWYgaXQgaXMgYSBjbGFzc1xyXG5cdGlmICh0eXBlb2YgaW5zdE9yQ2xhc3MgPT09IFwib2JqZWN0XCIpXHJcblx0e1xyXG5cdFx0cHJvY2Vzc0luc3RhbmNlKCBpbnN0T3JDbGFzcyk7XHJcblx0XHRyZXR1cm4gaW5zdE9yQ2xhc3M7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBwcm9jZXNzQ2xhc3MoIGluc3RPckNsYXNzLCBwYXJlbnQpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gY2xhc3MgYnkgY3JlYXRpbmcgaXRzIGluc3RhbmNlIGFuZCBhc3NvY2lhdGluZyBhXHJcbiAqIHJ1bGUgY29udGFpbmVyIG9iamVjdCB3aXRoIGl0LiBUaGUgY2xhc3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGggdGhlIGluc3RhbmNlIHVzaW5nIGFcclxuICogU3ltYm9sIHByb3BlcnR5LiBUaGUgcGFyZW50IHBhcmFtZXRlciBpcyBhIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IHN0eWxlIGRlZmlpdGlvblxyXG4gKiBvYmplY3Qgb3IgbnVsbCBpZiB0aGUgZ2l2ZW4gY2xhc3MgaXMgaXRzZWxmIGEgdG9wLWxldmVsIGNsYXNzICh0aGF0IGlzLCBpcyBub3QgYSBjbGFzc1xyXG4gKiB0aGF0IGRlZmluZXMgcnVsZXMgd2l0aGluIG5lc3RlZCBncm91cGluZyBydWxlcykuXHJcbiAqL1xyXG5mdW5jdGlvbiBwcm9jZXNzQ2xhc3MoIGRlZmluaXRpb25DbGFzczogSVN0eWxlRGVmaW5pdGlvbkNsYXNzLFxyXG5cdHBhcmVudD86IFN0eWxlRGVmaW5pdGlvbik6IFN0eWxlRGVmaW5pdGlvbiB8IG51bGxcclxue1xyXG4gICAgLy8gY2hlY2sgd2hldGhlciB0aGlzIGRlZmluaXRpb24gY2xhc3MgaXMgYWxyZWFkeSBhc3NvY2lhdGVkIHdpdGggYW4gaW5zdGFuY2VcclxuICAgIGlmIChkZWZpbml0aW9uQ2xhc3MuaGFzT3duUHJvcGVydHkoc3ltSW5zdGFuY2UpKVxyXG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uQ2xhc3Nbc3ltSW5zdGFuY2VdXHJcblxyXG4gICAgLy8gcmVjdXJzaXZlbHkgcHJvY2VzcyBhbGwgYmFzZSBjbGFzc2VzIHNvIHRoYXQgcnVsZSBuYW1lcyBhcmUgZ2VuZXJhdGVkLiBXZSBkb24ndCBhY3RpdmF0ZSBzdHlsZXNcclxuICAgIC8vIGZvciB0aGVzZSBjbGFzc2VzIGJlY2F1c2UgZGVyaXZlZCBjbGFzc2VzIHdpbGwgaGF2ZSBhbGwgdGhlIHJ1bGVzIGZyb20gYWxsIHRoZSBiYXNlIGNsYXNzZXNcclxuICAgIC8vIGFzIHRoZWlyIG93biBhbmQgc28gdGhlc2UgcnVsZXMgd2lsbCBiZSBhY3RpdmF0ZWQgYXMgcGFydCBvZiB0aGUgZGVyaXZlZCBjbGFzcy5cclxuICAgIGxldCBiYXNlQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoIGRlZmluaXRpb25DbGFzcyk7XHJcbiAgICBpZiAoYmFzZUNsYXNzICE9PSBTdHlsZURlZmluaXRpb24pXHJcblx0XHRwcm9jZXNzQ2xhc3MoIGJhc2VDbGFzcywgcGFyZW50KTtcclxuXHJcblx0dHJ5XHJcblx0e1xyXG5cdFx0Ly8gY3JlYXRlIHRoZSBpbnN0YW5jZSBvZiB0aGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IGRlZmluaXRpb25DbGFzcyggcGFyZW50KTtcclxuXHJcblx0XHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRcdGxldCBuYW1lID0gc191c2VVbmlxdWVTdHlsZU5hbWVzIHx8ICFkZWZpbml0aW9uQ2xhc3MubmFtZVxyXG5cdFx0XHQ/IGdlbmVyYXRlVW5pcXVlTmFtZSgpXHJcblx0XHRcdDogZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblxyXG5cdFx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lKTtcclxuXHRcdGRlZmluaXRpb25DbGFzc1tzeW1JbnN0YW5jZV0gPSBpbnN0YW5jZTtcclxuXHRcdHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcblx0Y2F0Y2goIGVycilcclxuXHR7XHJcblx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgaW5zdGFudGlhdGluZyBTdHlsZSBEZWZpbml0aW9uIENsYXNzICcke2RlZmluaXRpb25DbGFzcy5uYW1lfSdgLCBlcnIpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UgYW5kIGFzc2lnbnMgbmFtZXMgdG8gaXRzIHJ1bGVzLiBJZiB0aGVcclxuICogaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQsIHdlIGRvIG5vdGhpbmc7IG90aGVyd2lzZSwgd2UgYXNzaWduIG5ldyB1bmlxdWUgbmFtZXNcclxuICogdG8gaXRzIHJ1bGVzLlxyXG4gKi9cclxuZnVuY3Rpb24gcHJvY2Vzc0luc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBlbWJlZGRpbmdDb250YWluZXI/OiBSdWxlQ29udGFpbmVyKTogdm9pZFxyXG57XHJcblx0Ly8gaWYgdGhlIGluc3RhbmNlIGlzIGFscmVhZHkgcHJvY2Vzc2VkLCBqdXN0IHJldHVybjsgaW4gdGhpcyBjYXNlIHdlIGlnbm9yZSB0aGVcclxuXHQvLyBlbWJlZGRpbmdDb250YWluZXIgcGFyYW1ldGVyLlxyXG5cdGxldCBydWxlQ29udGFpbmVyID0gaW5zdGFuY2Vbc3ltQ29udGFpbmVyXSBhcyBSdWxlQ29udGFpbmVyO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgdGhlIG5hbWUgZm9yIG91ciBjb250YWluZXJcclxuXHRsZXQgbmFtZSA9IGdlbmVyYXRlVW5pcXVlTmFtZSgpO1xyXG5cdGlmICghc191c2VVbmlxdWVTdHlsZU5hbWVzKVxyXG5cdHtcclxuXHRcdGxldCBkZWZpbml0aW9uQ2xhc3MgPSBpbnN0YW5jZS5jb25zdHJ1Y3RvcjtcclxuXHRcdGlmIChkZWZpbml0aW9uQ2xhc3MubmFtZSlcclxuXHRcdFx0bmFtZSArPSBcIl9cIiArIGRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gY3JlYXRlIGNvbnRhaW5lciAtIHRoaXMgd2lsbCBhc3NvY2lhdGUgdGhlIG5ldyBjb250YWluZXIgd2l0aCB0aGUgaW5zdGFuY2UgYW5kIHByb2Nlc3NcclxuXHQvLyB0aGUgcnVsZXMuXHJcblx0bmV3IFJ1bGVDb250YWluZXIoIGluc3RhbmNlLCBuYW1lLCBlbWJlZGRpbmdDb250YWluZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHJ1bGUgY29udGFpbmVyIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbik6IFJ1bGVDb250YWluZXJcclxue1xyXG5cdHJldHVybiBpbnN0YW5jZSA/IGluc3RhbmNlW3N5bUNvbnRhaW5lcl0gOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBBY3RpdmF0ZXMgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gYW5kIGluc2VydHMgYWxsIGl0cyBydWxlcyBpbnRvIERPTS4gSWYgdGhlIGlucHV0IG9iamVjdCBpc1xyXG4gKiBub3QgYSBzdHlsZSBkZWZpbml0aW9uIGJ1dCBhIHN0eWxlIGRlZmluaXRpb24gY2xhc3MsIG9idGFpbiBzdHlsZSBkZWZpbml0aW9uIGJ5IGNhbGxpbmcgdGhlICR1c2VcclxuICogZnVuY3Rpb24uIE5vdGUgdGhhdCBlYWNoIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzXHJcbiAqIGl0IHdhcyBhY3RpdmF0ZWQgYW5kIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIGluc2VydGVkIHRvIERPTSBvbmx5IHdoZW4gdGhpcyByZWZlcmVuY2UgY291bnRlclxyXG4gKiBnb2VzIHVwIHRvIDEuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVJbnN0YW5jZSggaW5zdGFuY2U6IFN0eWxlRGVmaW5pdGlvbiwgY291bnQ6IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGxldCBydWxlQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyRnJvbUluc3RhbmNlKCBpbnN0YW5jZSk7XHJcblx0aWYgKHJ1bGVDb250YWluZXIpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxyXG5cdFx0XHRydWxlQ29udGFpbmVyLmFjdGl2YXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZWFjdGl2YXRlcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBieSByZW1vdmluZyBpdHMgcnVsZXMgZnJvbSBET00uIE5vdGUgdGhhdCBlYWNoIHN0eWxlXHJcbiAqIGRlZmluaXRpb24gb2JqZWN0IG1haW50YWlucyBhIHJlZmVyZW5jZSBjb3VudGVyIG9mIGhvdyBtYW55IHRpbWVzIGl0IHdhcyBhY3RpdmF0ZWQgYW5kXHJcbiAqIGRlYWN0aXZhdGVkLiBUaGUgcnVsZXMgYXJlIHJlbW92ZWQgZnJvbSBET00gb25seSB3aGVuIHRoaXMgcmVmZXJlbmNlIGNvdW50ZXIgZ29lcyBkb3duIHRvIDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUluc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBjb3VudDogbnVtYmVyKTogdm9pZFxyXG57XHJcblx0bGV0IHJ1bGVDb250YWluZXIgPSBnZXRDb250YWluZXJGcm9tSW5zdGFuY2UoIGluc3RhbmNlKTtcclxuXHRpZiAocnVsZUNvbnRhaW5lcilcclxuXHR7XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspXHJcblx0XHRcdHJ1bGVDb250YWluZXIuZGVhY3RpdmF0ZSgpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiB0byB0aGUgZ2l2ZW4gc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZUluc3RhbmNlKCBpbnN0YW5jZTogU3R5bGVEZWZpbml0aW9uLCBjdHg6IElSdWxlU2VyaWFsaXphdGlvbkNvbnRleHQpOiB2b2lkXHJcbntcclxuXHRsZXQgcnVsZUNvbnRhaW5lciA9IGdldENvbnRhaW5lckZyb21JbnN0YW5jZSggaW5zdGFuY2UpO1xyXG5cdGlmIChydWxlQ29udGFpbmVyKVxyXG5cdCAgICBydWxlQ29udGFpbmVyLnNlcmlhbGl6ZVJ1bGVzKCBjdHgpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7SUN1c3RvbVZhciwgT25lT3JNYW55fSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge0V4dGVuZGVkU3R5bGVzZXQsIFN0eWxlc2V0LCBWYXJUZW1wbGF0ZU5hbWUsIFZhclZhbHVlVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmltcG9ydCB7XHJcblx0UHNldWRvRW50aXR5LCBDc3NTZWxlY3RvciwgUGFnZVBzZXVkb0NsYXNzLCBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eVxyXG59IGZyb20gXCIuLi9zdHlsZXMvU2VsZWN0b3JUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwcm9wZXJ0aWVzIHVzZWQgaW4gdGhlIFtbQ29tYmluZWRTdHlsZXNldF1dIHdoaWNoIGFyZSB1c2VkIHRvIGRlZmluZSBkZXBlbmRlbnQgcnVsZXMgKi9cclxuZXhwb3J0IHR5cGUgU2VsZWN0b3JDb21iaW5hdG9yID0gXCImXCIgfCBcIiYsXCIgfCBcIiYgXCIgfCBcIiY+XCIgfCBcIiYrXCIgfCBcIiZ+XCIgfCBcIiwmXCIgfCBcIiAmXCIgfCBcIj4mXCIgfCBcIismXCIgfCBcIn4mXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29tYmluZWRTdHlsZXNldCB0eXBlIGV4dGVuZHMgdGhlIFN0eWxlc2V0IHR5cGUgd2l0aCBjZXJ0YWluIHByb3BlcnRpZXMgdGhhdCBwcm92aWRlXHJcbiAqIGFkZGl0aW9uYWwgbWVhbmluZyB0byB0aGUgc3R5bGVzZXQgYW5kIGFsbG93IGJ1aWxkaW5nIGRlcGVuZGVudCBzdHlsZSBydWxlczpcclxuICogLSBUaGUgYFwiK1wiYCBwcm9wZXJ0eSBzcGVjaWZpZXMgb25lIG9yIG1vcmUgcGFyZW50IHN0eWxlIHJ1bGVzLiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nXHJcbiAqICAgcGFyZW50IHJ1bGVzIHVzaW5nIGEgY29udmVuaWVudCBzdHlsZS1wcm9wZXJ0eS1saWtlIG5vdGF0aW9uLlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCBwc2V1ZG8gY2xhc3MgbmFtZXMgKGUuZy4gXCI6aG92ZXJcIikgb3IgcHNldWRvIGVsZW1lbnQgbmFtZXMgKGUuZy4gXCI6OmFmdGVyXCIpLlxyXG4gKiAgIFRoZXNlIHByb3BlcnRpZXMgZGVmaW5lIGEgc3R5bGVzZXQgdGhhdCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBzZWxlY3RvciBvYnRhaW5lZCBieSB1c2luZ1xyXG4gKiAgIHRoZSBvcmlnaW5hbCBzdHlsZXNldCdzIG93bmVyIGZvbGxvd2VkIGJ5IHRoZSBnaXZlbiBwc2V1ZG8gY2xhc3Mgb3IgcHNldWRvIGVsZW1lbnQuXHJcbiAqIC0gUHJvcGVydGllcyB3aXRoIG5hbWVzIG9mIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgKGUuZy4gXCI6bnRoLWNoaWxkXCIpIG9yIHBhcmFtZXRlcml6ZWRcclxuICogICBwc2V1ZG8gZWxlbWVudHMgKGUuZy4gXCI6OnNsb3R0ZWRcIikuIFRoZXNlIHByb3BlcnRpZXMgY29udGFpbiBhIHR1cGxlLCB3aGVyZSB0aGUgZmlyc3RcclxuICogICBlbGVtZW50IGlzIHRoZSBwYXJhbWV0ZXIgZm9yIHRoZSBzZWxlY3RvciBhbmQgdGhlIHNlY29uZCBlbGVtZW50IGlzIHRoZSBzdHlsZXNldC5cclxuICogICBUaGVzZSBwcm9wZXJ0aWVzIGRlZmluZSBhIHN0eWxlc2V0IHRoYXQgd2lsbCBiZSBhc3NpZ25lZCB0byB0aGUgc2VsZWN0b3Igb2J0YWluZWQgYnkgdXNpbmdcclxuICogICB0aGUgb3JpZ2luYWwgc3R5bGVzZXQncyBvd25lciBmb2xsb3dlZCBieSB0aGUgZ2l2ZW4gcHNldWRvIGNsYXNzIG9yIHBzZXVkbyBlbGVtZW50LlxyXG4gKiAtIFByb3BlcnRpZXMgd2l0aCB0aGUgYW1wZXJzYW5kIHN5bWJvbCAoJyYnKSB0aGF0IGNvbnRhaW4gYXJyYXlzIG9mIHR3by1lbGVtZW50IHR1cGxlcyBlYWNoXHJcbiAqICAgZGVmaW5pbmcgYSBzZWxlY3RvciBhbmQgYSBzdHlsZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgc2VsZWN0b3IuIFNlbGVjdG9ycyBjYW4gdXNlIHRoZVxyXG4gKiAgIGFtcGVyc2FuZCBzeW1ib2wgdG8gcmVmZXIgdG8gdGhlIHBhcmVudCBzdHlsZSBzZWxlY3Rvci4gSWYgdGhlIGFtcGVyc2FuZCBzeW1ib2wgaXMgbm90IHVzZWQsXHJcbiAqICAgdGhlIHNlbGVjdG9yIHdpbGwgYmUgc2ltcGx5IGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcbiAqIFxyXG4gKiBGdW5jdGlvbnMgdGhhdCByZXR1cm4gc3R5bGUgcnVsZXMgKGUuZy4gJGNsYXNzKSBhY2NlcHQgdGhlIENvbWJpbmVkU3R5bGVzZXQgYXMgYSBwYXJhbWV0ZXIsXHJcbiAqIGZvciBleGFtcGxlOlxyXG4gKiBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBjbGFzcyBNeVN0eWxlcyBleHRlbmRzIGNzcy5TdHlsZURlZmluaXRpb25cclxuICoge1xyXG4gKiAgICAgY2xhc3MxID0gY3NzLiRjbGFzcyh7fSlcclxuICogICAgIGNsYXNzMiA9IGNzcy4kY2xhc3Moe1xyXG4gKiAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gKiAgICAgICAgIFwiOmhvdmVyXCIgOiB7IGJhY2tncm91bmRDb2xvcjogXCJncmV5XCIgfSxcclxuICogICAgICAgICBcIiZcIjogW1xyXG4gKiAgICAgICAgICAgICBbIFwibGkgPiAmXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcInllbGxvd1wiIH0gXSxcclxuICogICAgICAgICAgICAgWyB0aGlzLmNsYXNzMSwgeyBiYWNrZ3JvdW5kQ29sb3I6IFwib3JhbmdlXCIgfSBdXHJcbiAqICAgICAgICAgXVxyXG4gKiAgICAgfSlcclxuICogfVxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoaXMgd2lsbCB0cmFuc2xhdGUgdG8gdGhlIGZvbGxvd2luZyBDU1MgKGluIHJlYWxpdHksIGNsYXNzIG5hbWVzIGFyZSBhdXRvLWdlbmVyYXRlZCk6XHJcbiAqIFxyXG4gKiBgYGBjc3NcclxuICogLmNsYXNzMiB7IGJhY2tncm91bmRDb2xvcjogd2hpdGU7IH1cclxuICogLmNsYXNzMjpob3ZlciB7IGJhY2tncm91bmRDb2xvcjogZ3JleTsgfVxyXG4gKiBsaSA+IC5jbGFzczIgeyBiYWNrZ3JvdW5kQ29sb3I6IHllbGxvdzsgfVxyXG4gKiAuY2xhc3MyLmNsYXNzMSB7IGJhY2tncm91bmRDb2xvcjogb3JhbmdlOyB9XHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tYmluZWRTdHlsZXNldCA9IFN0eWxlc2V0ICZcclxuXHR7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9ICZcclxuXHR7IFtLIGluIFBzZXVkb0VudGl0eV0/OiBDb21iaW5lZFN0eWxlc2V0IH0gJlxyXG5cdHsgW0sgaW4ga2V5b2YgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHldPzogW0lQYXJhbWV0ZXJpemVkUHNldWRvRW50aXR5W0tdLCBDb21iaW5lZFN0eWxlc2V0XVtdIH0gJlxyXG5cdHsgW0sgaW4gU2VsZWN0b3JDb21iaW5hdG9yXT86IFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXSB9O1xyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMgdGhhdCBoYXZlIGEgbmFtZTsgdGhhdCBpcyxcclxuICogY2xhc3MsIElELCBrZXlmcmFtZXMgYW5kIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZEVudGl0eVxyXG57XHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3RydWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBkZXBlbmRlbnQgcnVsZXMgb2YgYSBzdHlsZSBydWxlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEZXBlbmRlbnRSdWxlcyA9XHJcblx0eyBbSyBpbiBQc2V1ZG9FbnRpdHldPzogSVN0eWxlUnVsZSB9ICZcclxuXHR7IFtLIGluIFNlbGVjdG9yQ29tYmluYXRvcl0/OiBJU3R5bGVSdWxlW10gfSAmXHJcblx0eyBbSyBpbiBrZXlvZiBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eV0/OiBJU3R5bGVSdWxlW10gfTtcclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxpbmcgcnVsZSBpbiBhIHN0eWxlIHNoZWV0LiBTdHlsZSBydWxlcyBjYW4gYmUgdXNlZFxyXG4gKiBhbnl3aGVyZSB3aGVyZSBzdHlsZSBwcm9wZXJ0aWVzIGNhbiBiZSBkZWZpbmVkOiBjbGFzcyBydWxlcywgSUQgcnVsZXMsIHNlbGVjdG9yIHJ1bGVzLFxyXG4gKiBrZXlmcmFtZXMsIGV0Yy4gU3R5bGVSdWxlIGRlZmluZXMgYSBzdHlsZXNldCBhbmQgY2FuIG9wdGlvbmFsbHkgcG9pbnQgdG8gb25lIG9yIG1vcmUgc3R5bGUgcnVsZXNcclxuICogZnJvbSB3aGljaCBpdCBpbmhlcml0cy4gQSBzdHlsZXNldCBjb21iaW5lcyBhbGwgdGhlIHByb3BlcnRpZXMgZnJvbSBpdHMgb3duIHByb3BlcnR5IGJsb2NrIGFzXHJcbiAqIHdlbGwgYXMgZnJvbSBhbGwgb2Ygc3R5bGUgcnVsZXMgaXQgaW5oZXJpdGVzIGZyb20uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTU3R5bGVSdWxlIHwgbnVsbDtcclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHJlYWRvbmx5IHNlbGVjdG9yVGV4dDogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBPYmplY3QgY29udGFpbmluZyBkZXBlbmRlbnQgcnVsZXMuIFByb3BlcnR5IG5hbWVzIGFyZSB0YWtlbiBmcm9tIHNwZWNpYWwgcHJvcGVydGllc1xyXG5cdCAqIG9mIHRoZSBDb21iaW5lZFN0eWxlc2V0LiBUaGlzIG9iamVjdCBhbGxvd3MgY2FsbGVycyB0byBhY2Nlc3MgZGVwZW5kZW50IHJ1bGVzIHRvIGNoYW5nZVxyXG5cdCAqIHN0eWxlIHByb3BlcnR5IHZhbHVlcyBwcm9ncmFtbWF0aWNhbGx5LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGRlcGVuZGVudFJ1bGVzOiBEZXBlbmRlbnRSdWxlcztcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGUgcHJvcGVydHlcclxuXHQgKiBpcyByZW1vdmVkIGZyb20gdGhlIHJ1bGUncyBzdHlsZXNldC5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRQcm9wPEsgZXh0ZW5kcyBrZXlvZiBFeHRlbmRlZFN0eWxlc2V0PiggbmFtZTogSywgdmFsdWU6IEV4dGVuZGVkU3R5bGVzZXRbS10sXHJcblx0XHRpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcy9yZW1vdmVzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gY3VzdG1vbSBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSBjdXN0b21WYXIgSVZhclJ1bGUgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LiBJZiB0aGlzIHZhbHVlIGlzIHVuZGVmaW5lZCBvciBudWxsLCB0aGUgcHJvcGVydHlcclxuXHQgKiBpcyByZW1vdmVkIGZyb20gdGhlIHJ1bGUncyBzdHlsZXNldC5cclxuXHQgKiBAcGFyYW0gaW1wb3J0YW50IEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZyBvbiB0aGUgcHJvcGVydHkgdmFsdWUuXHJcblx0ICogQHBhcmFtIHNjaGVkdWxlclR5cGUgSUQgb2YgYSByZWdpc3RlcmVkIHNjaGVkdWxlciB0eXBlIHRoYXQgaXMgdXNlZCB0byB3cml0ZSB0aGUgcHJvcGVydHlcclxuXHQgKiB2YWx1ZSB0byB0aGUgRE9NLiBJZiB1bmRlZmluZWQsIHRoZSBjdXJyZW50IGRlZmF1bHQgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCBjdXN0b21WYXI6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0aW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRTdHlsZVJ1bGUgaW50ZXJmYWNlIGNvbWJpbmVzIElTdHlsZVJ1bGUgYW5kIElOYW1lZEVudGl0eSBpbnRlcmZhY2VzLiBUaGlzIGlzIHVzZWRcclxuICogZm9yIGNsYXNzIGFuZCBJRCBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkU3R5bGVSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHdoZXJlIHRoZSBzZWxlY3RvciBpcyBhIHNpbmdsZSBjbGFzcyBuYW1lLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NSdWxlIGV4dGVuZHMgSU5hbWVkU3R5bGVSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgY2xhc3MgcHJlZml4ZWQgd2l0aCBcIi5cIiAqL1xyXG5cdHJlYWRvbmx5IGNzc0NsYXNzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzTmFtZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjb21iaW5hdGlvbiBvZiB0d28gb3IgbW9yZSBjbGFzcyBuYW1lcy4gSXQgY2FuIGJlXHJcbiAqIHVzZWQgdG8gbWFrZSBpdCBlYXNpZXIgdG8gY3JlYXRlIGVsZW1lbnRzIHdpdGggbW9yZSB0aGFuIG9uZSBDU1MgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc05hbWVSdWxlIGV4dGVuZHMgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogTmFtZSBvZiBhbGwgdGhlIGNsYXNzIG5hbWVzIHByZWZpeGVkIHdpdGggXCIuXCIgKi9cclxuXHRyZWFkb25seSBjc3NDbGFzc05hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJRFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHdoZXJlIHRoZSBzZWxlY3RvciBpcyBhIHNpbmdsZSBlbGVtZW50IElELlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSURSdWxlIGV4dGVuZHMgSU5hbWVkU3R5bGVSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgZWxlbWVudCBJRCBwcmVmaXhlZCB3aXRoIFwiI1wiICovXHJcblx0cmVhZG9ubHkgY3NzSUROYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25XYXlwb2ludCB0eXBlIGRlZmluZXMgYSB0eXBlIHRoYXQgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIGEgd2F5cG9pbnQgaW4gYW5cclxuICogYW5pbWF0aW9uIHNlcXVlbmNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uV2F5cG9pbnQgPSBPbmVPck1hbnk8XCJmcm9tXCIgfCBcInRvXCIgfCBudW1iZXI+O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25TdHlsZXMgdHlwZSBkZWZpbmVzIGEgb2JqZWN0IGNvbnRhaW5pbmcgc3R5bGUgcHJvcGVydGllcyBmb3IgYW4gYW5pbWF0aW9uIGZyYW1lLlxyXG4gKiBTdHlsZXNldHMgZm9yIGtleWZyYW1lcyBhbGxvdyBjdXN0b20gcHJvcGVydGllcyAodmlhIFwiLS1cIikuIEFuaW1hdGlvbiBzdHlsZXNldCBjYW4gZXh0ZW5kXHJcbiAqIG90aGVyIHN0eWxlIHJ1bGVzOyBob3dldmVyLCBhbnkgZGVwZW5kZW50IHJ1bGVzIHdpbGwgYmUgaWdub3JlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblN0eWxlc2V0ID0gU3R5bGVzZXQgJiB7IFwiK1wiPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSB9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBBbmltYXRpb25GcmFtZSB0eXBlIGRlZmluZXMgYSBzaW5nbGUga2V5ZnJhbWUgd2l0aGluIGEgQGtleWZyYW1lcyBydWxlLlxyXG4gKiBUaGUgd2F5cG9pbnQgY2FuIGJlIHNwZWNpZmllZCBhcyBcImZyb21cIiBvciBcInRvXCIgc3RyaW5ncyBvciBhcyBhIG51bWJlciAwIHRvIDEwMCwgd2hpY2ggd2lsbCBiZVxyXG4gKiB1c2VkIGFzIGEgcGVyY2VudC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZyYW1lID0gW0FuaW1hdGlvbldheXBvaW50LCBBbmltYXRpb25TdHlsZXNldF07XHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25SdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRrZXlmcmFtZXNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvblJ1bGUgZXh0ZW5kcyBJUnVsZSwgSU5hbWVkRW50aXR5XHJcbntcclxuXHQvKiogU09NIGtleWZyYW1lcyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTS2V5ZnJhbWVzUnVsZSB8IG51bGw7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN0eWxlIHJ1bGVzIHJlcHJlc2VudGluZyBhbmltYXRpb24gZnJhbWVzICovXHJcblx0cmVhZG9ubHkgZnJhbWVSdWxlczogSUFuaW1hdGlvbkZyYW1lUnVsZVtdO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25GcmFtZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzaW5nbGUgZnJhbWUgaW4gdGhlIEBrZXlmcmFtZXMgcnVsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdGlvbkZyYW1lUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBJZGVudGlmaWVyIG9mIHRoZSB3YXlwb2ludCAqL1xyXG5cdHJlYWRvbmx5IHdheXBvaW50OiBBbmltYXRpb25XYXlwb2ludDtcclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzS2V5ZnJhbWVSdWxlOiBDU1NLZXlmcmFtZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVmFyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbi5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJHZhcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVmFyUnVsZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiBleHRlbmRzIElOYW1lZEVudGl0eSwgSUN1c3RvbVZhcjxWYXJWYWx1ZVR5cGU8Sz4+XHJcbntcclxuXHQvKiogTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLiAqL1xyXG5cdHJlYWRvbmx5IHRlbXBsYXRlOiBLO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvdW50ZXJSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgbmFtZWQgY291bnRlciBkZWZpbml0aW9uLiBVc2UgdGhpcyBydWxlIHRvIGNyZWF0ZVxyXG4gKiBjb3VudGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZCBpbiBjb3VudGVyLWluY3JlbWVudCwgY291bnRlci1yZXNldCBhbmQgY291bnRlci1zZXQgc3R5bGVcclxuICogcHJvcGVydGllcy4gTm8gQ1NTIHJ1bGUgaXMgY3JlYXRlZCBmb3IgY291bnRlcnMgLSB0aGV5IGFyZSBuZWVkZWQgb25seSB0byBwcm92aWRlIHR5cGUtc2FmZVxyXG4gKiBjb3VudGVyIGRlZmluaXRpb25zLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skY291bnRlcl1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ291bnRlclJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdC8qKiBOYW1lIG9mIHRoZSBjb3VudGVyICovXHJcblx0cmVhZG9ubHkgY291bnRlck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogVGhlIElDb3VudGVyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQGNvdW50ZXItc3R5bGUgcnVsZS5cclxuLy8gICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGNvdW50ZXJTdHlsZV1dIGZ1bmN0aW9uLlxyXG4vLyAgKi9cclxuLy8gZXhwb3J0IGludGVyZmFjZSBJQ291bnRlclN0eWxlUnVsZSBleHRlbmRzIElSdWxlLCBJTmFtZWRFbnRpdHlcclxuLy8ge1xyXG4vLyBcdC8qKiBTT00gY291bnRlci1zdHlsZSBydWxlICovXHJcbi8vIFx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTQ291bnRlclN0eWxlUnVsZSB8IG51bGw7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSW1wb3J0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGltcG9ydF1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1wb3J0UnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGltcG9ydCBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTSW1wb3J0UnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRm9udEZhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQGZvbnQtZmFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skZm9udGZhY2VdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvbnRGYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTRm9udEZhY2VSdWxlIHwgbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElOYW1lc3BhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQG5hbWVzcGFjZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbmFtZXNwYWNlXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lc3BhY2VSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBOYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IG5hbWVzcGFjZTogc3RyaW5nO1xyXG5cclxuXHQvKiogT3B0aW9uYWwgcHJlZml4IGZvciB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IHByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuXHQvKiogU09NIG5hbWVzcGFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTTmFtZXNwYWNlUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGFnZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIENTUyBAcGFnZSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skcGFnZV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFnZVJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogT3B0aW9uYWwgbmFtZSBvZiB0aGUgcGFnZSBwc2V1ZG8gc3R5bGUgKGUuZy4gXCJcIjpmaXJzdFwiKSAqL1xyXG5cdHJlYWRvbmx5IHBzZXVkb0NsYXNzOiBQYWdlUHNldWRvQ2xhc3MgfCB1bmRlZmluZWQ7XHJcblxyXG5cdC8qKiBTT00gcGFnZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzUnVsZTogQ1NTUGFnZVJ1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyaWRMaW5lUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGRlZmluaXRpb24gb2YgYSBuYW1lZCBncmlkIGxpbmUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRncmlkbGluZV1dIGZ1bmN0aW9uIG9yIGNyZWF0ZWRcclxuICogd2hlbiBhIGdyaWQgYXJlYSBpcyBkZWZpbmVkIHVzaW5nIHRoZSBbWyRncmlkYXJlYV1dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JpZExpbmVSdWxlIGV4dGVuZHMgSU5hbWVkRW50aXR5XHJcbntcclxuICAgIC8qKlxyXG4gICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGxpbmUgaXMgYSBzdGFydCBvciBlbmQgbGluZSBvZiBhIGdyaWQgYXJlYS4gVGhlIHZhbHVlIGlzIHRydWVcclxuICAgICAqIGlmIHRoaXMgaXMgdGhlIHN0YXJ0IGxpbmU7IGZhbHNlIGlmIHRoaXMgaXMgdGhlIGVuZCBsaW5lOyBhbmQgdW5kZWZpbmVkIGlmIHRoZSBsaW5lIGlzXHJcbiAgICAgKiBub3QgcmVsYXRlZCB0byBhbnkgYXJlYS5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgaXNTdGFydEVuZE9yTm9uZT86IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOYW1lIG9mIHRoZSBncmlkIGFyZWEgb2Ygd2hpY2ggdGhlIGxpbmUgaXMgZWl0aGVyIGEgc3RhcnQgb3IgYW4gZW5kIGxpbmUuIEl0IGlzIGRlZmluZWRcclxuICAgICAqIG9ubHkgaWYgdGhlIGxpbmUgbmFtZSBlbmRzIHdpdGggXCItc3RhcnRcIiBvciBcIi1lbmRcIi5cclxuICAgICAqL1xyXG4gICAgcmVhZG9ubHkgYXJlYU5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElHcmlkQXJlYVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkZWZpbml0aW9uIG9mIGEgbmFtZWQgZ3JpZCBhcmUuIEdyaWQgYXJlYSBydWxlXHJcbiAqIGRlZmluZXMgdHdvIGxpbmUgcnVsZXM6IGZvciBpdHMgc3RhcnQgYW5kIGVuZCBsaW5lcy5cclxuICogT2JqZWN0cyBpbXBsZW1lbnRpbmcgdGhpcyBpbnRlcmZhY2UgYXJlIHJldHVybmVkIGZyb20gdGhlIFtbJGdyaWRhcmVhXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcmlkQXJlYVJ1bGUgZXh0ZW5kcyBJTmFtZWRFbnRpdHlcclxue1xyXG4gICAgLyoqIFN0YXJ0IGxpbmUgb2YgdGhlIGFyZWEuICovXHJcbiAgICByZWFkb25seSBzdGFydExpbmU6IElHcmlkTGluZVJ1bGU7XHJcblxyXG4gICAgLyoqIEVuZCBsaW5lIG9mIHRoZSBhcmVhLiAqL1xyXG4gICAgcmVhZG9ubHkgZW5kTGluZTogSUdyaWRMaW5lUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU3ltYm9sIHRoYXQgaXMgdXNlZCBieSB0aGUgYCRwYXJlbnRgIHByb3BlcnR5IGluIHRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgdGhhdCBrZWVwcyByZWZlcmVuY2VcclxuICogdG8gdGhlIHBhcm50IHN0eWxlIGRlZmluaXRpb24gY2xhc3MuIERldmVsb3BlcnMgY2FuIHVzZSB0aGlzIHByb3BlcnR5IHRvIGFjY2VzcyBydWxlcyBpblxyXG4gKiB0aGUgY2hhaW4gb2YgbmVzdGVkIGdyb3VwaW5nIHJ1bGVzLiBXZSBuZWVkIHRoaXMgc3ltYm9sIHRvIGF2b2lkIGVudW1lcmF0aW5nIHRoZSBgJHBhcmVudGBcclxuICogcHJvcGVydHkgd2hlbiBwcm9jZXNzaW5nIHRoZSBydWxlcyBpbiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBzeW1QYXJlbnQgPSBTeW1ib2woXCJwYXJlbnRcIik7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTeW1ib2wgdGhhdCBpcyB1c2VkIGJ5IHRoZSBgJG93bmVyYCBwcm9wZXJ0eSBpbiB0aGUgU3R5bGVEZWZpbml0aW9uIGNsYXNzIHRoYXQga2VlcHMgcmVmZXJlbmNlXHJcbiAqIHRvIHRoZSB0b3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gRGV2ZWxvcGVycyBjYW4gdXNlIHRoaXMgcHJvcGVydHkgdG8gYWNjZXNzIHJ1bGVzIGluXHJcbiAqIHRoZSBjaGFpbiBvZiBuZXN0ZWQgZ3JvdXBpbmcgcnVsZXMuIFdlIG5lZWQgdGhpcyBzeW1ib2wgdG8gYXZvaWQgZW51bWVyYXRpbmcgdGhlIGAkb3duZXJgXHJcbiAqIHByb3BlcnR5IHdoZW4gcHJvY2Vzc2luZyB0aGUgcnVsZXMgaW4gdGhlIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0LlxyXG4gKi9cclxuY29uc3Qgc3ltT3duZXIgPSBTeW1ib2woXCJvd25lclwiKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZURlZmluaXRpb24gY2xhc3MgaXMgYSBiYXNlIGZvciBhbGwgY2xhc3NlcyB0aGF0IGNvbnRhaW4gZGVmaW5pbml0aW9ucyBvZiBDU1MgcnVsZXMuXHJcbiAqIEB0eXBlcGFyYW0gUCBQYXJlbnQgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcy4gUGFyZW50IG9mIHRvcC1sdmVsIGNsYXNzIGlzIG51bGwuXHJcbiAqIEB0eXBlcGFyYW0gTyBUb3AtbGV2ZWwgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcywgd2hpY2ggaXMgdGhlIG93bmVyIG9mIHRoaXMgY2xhc3MuIFRoZSB0b3AtbGV2ZWxcclxuICogY2xhc3MgaXMgaXRzIG93biBvd25lci5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZURlZmluaXRpb248UCBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueSwgTyBleHRlbmRzIFN0eWxlRGVmaW5pdGlvbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBhcmUgY3JlYXRlZCBkaXJlY3RseSBvbmx5IGJ5IHRoZSAqc3R5bGVkIGNvbXBvbmVudHMqIC0gdGhhdCBpcyxcclxuXHQgKiBjb21wb25lbnRzIHRoYXQgdXNlIGRpZmZlcmVudCBzdHlsZXMgZm9yIGVhY2ggaW5zdGFuY2UuIE90aGVyd2lzZSwgc3R5bGUgZGVmaW5pdGlvblxyXG5cdCAqIGNsYXNzIGluc3RhbmNlcyBhcmUgY3JlYXRlZCB3aGVuIGVpdGhlciB0aGUgW1skdXNlXV0gb3IgW1thY3RpdmF0ZV1dIGZ1bmN0aW9uIGlzIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gcGFyZW50IFJlZmVyZW5jZSB0byB0aGUgcGFyZW50IHN0eWxlIGRlZmluaXRpb24gY2xhc3NcclxuXHQgKi9cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHBhcmVudD86IFApXHJcblx0e1xyXG5cdFx0dGhpc1tzeW1QYXJlbnRdID0gcGFyZW50O1xyXG5cclxuICAgICAgICAvLyBPd25lciBpcyB0YWtlbiBmcm9tIHRoZSBwYXJlbnQgY2xhc3M7IGEgdG9wLWxldmVsIGNsYXNzIGlzIGl0cyBvd24gb3duZXIuXHJcblx0XHR0aGlzW3N5bU93bmVyXSA9IHBhcmVudCA/IHBhcmVudC4kb3duZXIgOiB0aGlzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVmZXJzIHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyB3aGljaCBpcyB0aGUgcGFybnQgb2YgdGhpcyBzdHlsZVxyXG4gICAgICogZGVmaW5pdGlvbiBvYmplY3QgaW4gdGhlIGNoYWluIG9mIHN0eWxlIGRlZmluaXRpb24gY2xhc3Nlcy4gVGhyb3VnaCB0aGlzIG1lbWJlciwgYWxsIHJ1bGVzXHJcbiAgICAgKiBhbmQgb3RoZXIgbWVtYmVycyBkZWZpbmVkIGluIHRoZSBwYXJlbnQgZGVmaW5pdGlvbiBjbGFzcyBjYW4gYmUgYWNjZXNzZWQuXHJcblx0ICovXHJcblx0cHVibGljIGdldCAkcGFyZW50KCk6IFAgfCB1bmRlZmluZWQgeyByZXR1cm4gdGhpc1tzeW1QYXJlbnRdOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZmVycyB0byB0aGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlIGRlZmluaXRpb24gY2xhc3Mgd2hpY2ggaXMgdGhlIG93bmVyIG9mXHJcblx0ICogdGhpcyBzdHlsZSBkZWZpbml0aW9uIG9iamVjdC4gVGhlIG93bmVyIGlzIHRoZSB0b3AtbGV2ZWwgY2xhc3MgaW4gdGhlIGNoYWluIG9mIHN0eWxlXHJcblx0ICogZGVmaW5pdGlvbiBjbGFzc2VzLiBUaHJvdWdoIHRoaXMgbWVtYmVyLCBhbGwgcnVsZXMgYW5kIG90aGVyIG1lbWJlcnMgZGVmaW5lZCBpbiB0aGUgb3duZXJcclxuXHQgKiBkZWZpbml0aW9uIGNsYXNzIGNhbiBiZSBhY2Nlc3NlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0ICRvd25lcigpOiBPIHwgdW5kZWZpbmVkIHsgcmV0dXJuIHRoaXNbc3ltT3duZXJdOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFwiQ29uc3RydWN0b3JcIiBpbnRlcmZhY2UgZGVmaW5pbmcgaG93IHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBjYW4gYmUgY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlRGVmaW5pdGlvbkNsYXNzPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb248UCxPPiA9IGFueSxcclxuICAgIFAgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnksIE8gZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+XHJcbntcclxuXHQvKiogQWxsIHN0eWxlIGRlZmluaXRpb24gY2xhc3NlcyBzaG91bGQgY29uZm9ybSB0byB0aGlzIGNvbnN0cnVjdG9yICovXHJcblx0bmV3KCBwYXJlbnQ/OiBQKTogVDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElHcm91cFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBncm91cGluZyBDU1MgcnVsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvLyBJbnN0YW5jZSBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiBjbGFzcyBkZWZpbmluZyB0aGUgcnVsZXMgdW5kZXIgdGhpcyBncm91cGluZyBydWxlXHJcblx0cmVhZG9ubHkgcnVsZXM6IFQ7XHJcblxyXG5cdC8qKiBTT00gc3VwcG9ydHMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU0dyb3VwaW5nUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3VwcG9ydHNSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIHRoZSBDU1MgQHN1cHBvcnRzIHJ1bGUuXHJcbiAqIE9iamVjdHMgaW1wbGVtZW50aW5nIHRoaXMgaW50ZXJmYWNlIGFyZSByZXR1cm5lZCBmcm9tIHRoZSBbWyRzdXBwb3J0c11dIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3VwcG9ydHNSdWxlPFQgZXh0ZW5kcyBTdHlsZURlZmluaXRpb24gPSBhbnk+IGV4dGVuZHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0LyoqIEZsYWcgaW5kaWNhdGVkIHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhpcyBydWxlJ3MgcXVlcnkgKi9cclxuICAgIHJlYWRvbmx5IGlzU3VwcG9ydGVkOiBib29sZWFuO1xyXG5cclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NTdXBwb3J0c1J1bGUgfCBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1lZGlhUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKiBPYmplY3RzIGltcGxlbWVudGluZyB0aGlzIGludGVyZmFjZSBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgW1skbWVkaWFdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1lZGlhUnVsZTxUIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uID0gYW55PiBleHRlbmRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU01lZGlhUnVsZSB8IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY2hlZHVsZXJUeXBlIGVudW1lcmF0aW9uIHByb3ZpZGVzIHZhbHVlcyB1c2VkIHRvIGRlZmluZSBob3cgdGhlIGNhbGxzIHRvIHRoZVxyXG4gKiBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgc2NoZWR1bGUgdGhlIHdyaXRpbmcgb2Ygc3R5bGUgY2hhbmdlcyB0byB0aGUgRE9NLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gU2NoZWR1bGVyVHlwZVxyXG57XHJcblx0LyoqXHJcblx0ICogU3luY2hyb25vdXMgYWN0aXZhdGlvbiAtIHN0eWxlIGRlZmluaXRpb25zIGFyZSB3cml0dGVuIHRvIHRoZSBET00gdXBvbiB0aGUgYWN0aXZhdGVcclxuXHQgKiBhbmQgZGVhY3RpdmF0ZSBjYWxscy5cclxuXHQgKi9cclxuXHRTeW5jID0gMSxcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsbHMgdG8gYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIGFyZSBhY2N1bXVsYXRlZCB1bnRpbCB0aGUgbmV4dCBhbmltYXRpb25cclxuXHQgKiBmcmFtZSBhbmQgdGhlbiBleGVjdXRlZCBhbGx0b2dldGhlci5cclxuXHQgKi9cclxuXHRBbmltYXRpb25GcmFtZSxcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsbHMgdG8gYWN0aXZhdGUgYW5kIGRlYWN0aXZhdGUgZnVuY3Rpb25zIGFyZSBhY2N1bXVsYXRlZCB1bnRpbCB0aGUgY2FsbCB0byB0aGVcclxuXHQgKiBmb3JjZURPTVVwZGF0ZSBmdW5jdGlvbiBhbmQgdGhlbiBleGVjdXRlZCBhbGx0b2dldGhlci5cclxuXHQgKi9cclxuXHRNYW51YWwsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU2NoZWR1bGVyIGludGVyZmFjZSBzaG91bGQgYmUgaW1wbGVtZW50ZWQgYnkgY3VzdG9tIHNjaGVkdWxlcnMuIEl0cyBtZXRob2RzIGFyZSBpbnZva2VkXHJcbiAqIGJ5IHRoZSBhY3RpdmF0aW9uIGluZnJhc3RydWN0dXJlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2NoZWR1bGVyXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHNjaGVkdWxlciBvYmplY3QgYW5kIHByb3ZpZGVzIHRoZSBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBpbnZva2VkIHdoZW4gdGhlXHJcbiAgICAgKiBzY2hlZHVsZXIgZGVjaWRlcyB0byBtYWtlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuICAgICAqL1xyXG4gICAgaW5pdCggZG9ET01VcGRhdGU6ICgpID0+IHZvaWQpO1xyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gdGhlIHNjaGVkdWxlciBuZWVkcyB0byBzY2hlZHVsZSBpdHMgY2FsbGJhY2sgb3IgZXZlbnQuXHJcblx0ICovXHJcblx0c2NoZWR1bGVET01VcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gY2FuY2VscyBpdHMgc2NoZWR1bGVkIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG5cdGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkO1xyXG59IiwiaW1wb3J0IHtTY2hlZHVsZXJUeXBlLCBTdHlsZURlZmluaXRpb24sIElTY2hlZHVsZXJ9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge2FjdGl2YXRlSW5zdGFuY2UsIGRlYWN0aXZhdGVJbnN0YW5jZX0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQge1N0cmluZ1N0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQWN0aXZhdG9yIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCByZXNwb25zaWJsZSBmb3IgYSBjZXJ0YWluIHR5cGUgb2YgYWN0aXZhdGlvblxyXG4gKiBtZWNoYW5pc20uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBY3RpdmF0b3Jcclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogYWN0aXZhdGUgZnVuY3Rpb24gaXMgY2FsbGVkIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdGFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gZGVhY3RpdmF0ZSB0aGUgZ2l2ZW4gc3R5bGUgZGVmaW5pdGlvbiBpbnN0YW5jZS4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlXHJcblx0ICogZGVhY3RpdmF0ZSBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0ZGVhY3RpdmF0ZSggZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIHNldCB0aGUgdmFsdWUgb2YgZWl0aGVyIGEgc2luZ2xlIHByb3BlcnR5IG9yIGEgc2V0IG9mIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuXHJcbiAgICAgKiBDU1Mgc3R5bGUgb2JqZWN0LlxyXG5cdCAqL1xyXG4gICAgc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGUsIG5hbWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBmb3JjZURPTVVwZGF0ZSBmdW5jdGlvbiBpcyBjYWxsZWRcclxuXHQgKiBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKi9cclxuXHRmb3JjZURPTVVwZGF0ZSgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBDYW5jZWwgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZm9yIGFsbCBzdHlsZSBkZWZpbml0aW9ucyBhY2N1bXVsYXRlZCBzaW5jZSB0aGUgbGFzdFxyXG5cdCAqIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsRE9NVXBkYXRlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG5cdCAqIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXQgdGhlIHZhbHVlIG9mIGVpdGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIHNldCBvZiBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlblxyXG4gKiBDU1Mgc3R5bGUgb2JqZWN0LlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlU3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGUsIG5hbWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICB2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxue1xyXG4gICAgaWYgKCFuYW1lICYmIHZhbHVlID09IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHJ1bGVPckVsbSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSlcclxuICAgICAgICAgICAgcnVsZU9yRWxtLmNzc1RleHQgPSBcIlwiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgKHJ1bGVPckVsbSBhcyBhbnkgYXMgRWxlbWVudCkucmVtb3ZlQXR0cmlidXRlKCBcInN0eWxlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAobmFtZSlcclxuICAgIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbClcclxuICAgICAgICAgICAgcnVsZU9yRWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KCBuYW1lKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5zdHlsZS5zZXRQcm9wZXJ0eSggbmFtZSwgdmFsdWUgYXMgc3RyaW5nLCBpbXBvcnRhbnQgPyBcIiFpbXBvcnRhbnRcIiA6IHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHN0eWxlc2V0ID0gdmFsdWUgYXMgU3RyaW5nU3R5bGVzZXQ7XHJcbiAgICAgICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVzZXQpXHJcbiAgICAgICAgICAgIHJ1bGVPckVsbS5zdHlsZVtwcm9wTmFtZV0gPSBzdHlsZXNldFtwcm9wTmFtZV07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTeW5jaHJvbm91c0FjdGl2YXRvciBjbGFzcyByZXByZXNlbnRzIHRoZSBzeW5jaHJvbm91cyBhY3RpdmF0aW9uIG1lY2hhbmlzbSwgd2hpY2ggd3JpdGVzXHJcbiAqIHN0eWxlIGNoYW5nZXMgdG8gdGhlIERPTSB3aGVuIHRoZSBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMgYXJlIGNhbGxlZC5cclxuICovXHJcbmNsYXNzIFN5bmNocm9ub3VzQWN0aXZhdG9yIGltcGxlbWVudHMgSUFjdGl2YXRvclxyXG57XHJcblx0LyoqXHJcblx0ICogSW5zdHJ1Y3RzIHRvIGFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQgKiBhY3RpdmF0ZSBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICogQHBhcmFtIGRlZmluaXRpb25cclxuXHQgKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoIGRlZmluaXRpb246IFN0eWxlRGVmaW5pdGlvbik6IHZvaWRcclxuXHR7XHJcblx0XHRhY3RpdmF0ZUluc3RhbmNlKCBkZWZpbml0aW9uLCAxKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBkZWFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiB0aGVcclxuXHQgKiBkZWFjdGl2YXRlIGZ1bmN0aW9uIGlzIGNhbGxlZCBmb3IgdGhpcyBhY3RpdmF0aW9uIG1lY2hhbmlzbS5cclxuXHQgKiBAcGFyYW0gZGVmaW5pdGlvblxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0ZGVhY3RpdmF0ZUluc3RhbmNlKCBkZWZpbml0aW9uLCAxKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBzZXQgdGhlIHZhbHVlIG9mIGVpdGhlciBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIHNldCBvZiBwcm9wZXJ0aWVzIGluIHRoZSBnaXZlblxyXG4gICAgICogQ1NTIHN0eWxlIG9iamVjdC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzZXRTdHlsZVByb3BlcnR5KCBydWxlT3JFbG06IENTU1N0eWxlUnVsZSB8IEVsZW1lbnRDU1NJbmxpbmVTdHlsZSwgbmFtZTogc3RyaW5nIHwgbnVsbCxcclxuICAgICAgICB2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCwgaW1wb3J0YW50PzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdXBkYXRlU3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtLCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW50KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm1zIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi4gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIGZvcmNlRE9NVXBkYXRlIGZ1bmN0aW9uIGlzIGNhbGxlZFxyXG5cdCAqIGZvciB0aGlzIGFjdGl2YXRpb24gbWVjaGFuaXNtLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBmb3JjZURPTVVwZGF0ZSgpOiB2b2lkIHt9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbmNlbCBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWxET01VcGRhdGUgZnVuY3Rpb24gaXMgY2FsbGVkXHJcblx0ICogZm9yIHRoaXMgYWN0aXZhdGlvbiBtZWNoYW5pc20uXHJcblx0ICovXHJcblx0cHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkIHt9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgb2JqZWN0cyB0aGF0IGFyZSB1c2VkIGJ5IHRoZSBTY2hlZHVsaW5nQWN0aXZhdG9yIGNsYXNzIGZvciBzZXR0aW5nIHByb3BlcnR5IHZhbHVlcy5cclxuICogV2hlbiBib3RoIG5hbWUgYW5kIHZhbHVlIHByb3BlcnRpZXMgYXJlIG51bGwsIHRoZSBzdHlsZSB3aWxsIGJlIHNldCB0byBhbiBlbXB0eSBzdHJpbmdcclxuICogZWZmZWN0aXZlbHkgcmVtb3ZpbmcgYWxsIHN0eWxlcyBmcm9tIHRoZSBlbGVtZW50IG9yIHRoZSBydWxlLlxyXG4gKi9cclxuaW50ZXJmYWNlIFNjaGVkdWxlZFN0eWxlUHJvcFZhbHVlXHJcbntcclxuXHQvKipcclxuICAgICAqIFN0eWxlIG9iamVjdCBpbiB3aGljaCB0byBzZXQgdGhlIHByb3BlcnR5IHZhbHVlLiBUaGUgc3R5bGUgb2JqZWN0IGNhbiBiZWxvbmcgdG8gZWl0aGVyIGFcclxuICAgICAqIHN0eWxlIHJ1bGVlIG9yIHRvIGFuIEhUTUwgZWxlbWVudC5cclxuICAgICAqL1xyXG5cdHJ1bGVPckVsbTogQ1NTU3R5bGVSdWxlIHwgRWxlbWVudENTU0lubGluZVN0eWxlO1xyXG5cclxuXHQvKipcclxuICAgICAqIERhc2hlLWNhc2VkIHByb3BlcnR5IG5hbWUgaWYgc2V0dGluZyBhIHZhbHVlIG9mIGEgc2luZ2xlIHByb3BlcnR5IG9yIG51bGwgaWYgc2V0dGluZyB2YWx1ZXNcclxuICAgICAqIG9mIG11bHRpcGxlIHByb3BlcnRpZXMuXHJcbiAgICAgKi9cclxuXHRuYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuXHQvKipcclxuICAgICAqIFByb3BlcnR5IHZhbHVlIGlmIHNldHRpbmcgYSB2YWx1ZSBvZiBhIHNpbmdsZSBwcm9wZXJ0eSBvciBhIFN0cmluZ1N0eWxlc2V0IG9iamVjdCBpZiBzZXR0aW5nXHJcbiAgICAgKiB2YWx1ZXMgb2YgbXVsdGlwbGUgcHJvcGVydGllcy4gSWYgdGhlIHZhbHVlIGlzIG51bGwgb3IgdW5kZWZpbmVkLCBpdCBpcyByZW1vdmVkLlxyXG4gICAgICovXHJcblx0dmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGw7XHJcblxyXG5cdC8qKlxyXG4gICAgICogRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHByb3BlcnR5IHNob3VsZCBiZSBtYXJrZWQgXCIhaW1wb3J0YW50XCIuIFRoaXMgZmxhZyBpcyBpZ25vcmVkXHJcbiAgICAgKiB3aGVuIHNldHRpbmcgdmFsdWVzIG9mIG11bHRpcGxlIHByb3BlcnRpZXMuXHJcbiAgICAgKi9cclxuXHRpbXBvcnRhbnQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2NoZWR1bGluZ0FjdGl2YXRvciBjbGFzcyBrZWVwcyBhIG1hcCBvZiBTdHlsZURlZmluaXRpb24gaW5zdGFuY2VzIHRoYXQgYXJlIHNjaGVkdWxlZCBmb3JcclxuICogYWN0aXZhdGlvbiBvciBkZWFjdGl2YXRpb24uIEVhY2ggaW5zdGFuY2UgaXMgbWFwcGVkIHRvIGEgcmVmZXJuY2UgY291bnQsIHdoaWNoIGlzIGluY3JlbWVudGVkXHJcbiAqIHVwb24gdGhlIGFjdGl2YXRlIGNhbGxzIGFuZCBkZWNyZW1lbnRlZCB1cG9uIHRoZSBkZWFjdGl2YXRlIGNhbGxzLiBXaGVuIHRoZSBkb0FjdGl2YXRpb25cclxuICogbWV0aG9kIGlzIGNhbGxlZCBUaGUgc3R5bGUgZGVmaW5pdGlvbiB3aWxsIGJlIGVpdGhlciBhY3RpdmF0ZWQgb3IgZGVhY3RpdmF0ZWQgYmFzZWQgb24gd2hldGhlclxyXG4gKiB0aGUgcmVmZXJlbmNlIGNvdW50IGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNjaGVkdWxpbmdBY3RpdmF0b3IgaW1wbGVtZW50cyBJQWN0aXZhdG9yXHJcbntcclxuICAgIC8vIE1hcCBvZiBzdHlsZSBkZWZpbml0aW9uIGNsYXNzIGluc3RhbmNlcyB0byB0aGUgcmVmZXJlbmNlIGNvdW50IG9mIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uLlxyXG5cdHByaXZhdGUgZGVmaW5pdGlvbnMgPSBuZXcgTWFwPFN0eWxlRGVmaW5pdGlvbixudW1iZXI+KCk7XHJcblxyXG4gICAgLy8gQXJyYXkgb2Ygc3R5bGUgcHJvcGVydHkgdmFsdWVzIHRvIGJlIHNldC9yZW1vdmVkLlxyXG4gICAgcHJpdmF0ZSBwcm9wczogU2NoZWR1bGVkU3R5bGVQcm9wVmFsdWVbXSA9IFtdO1xyXG4gICAgXHJcbiAgICAvLyBvcHRpb25hbCBzY2hlZHVsZXIgb2JqZWN0XHJcbiAgICBwcml2YXRlIHNjaGVkdWxlcj86IElTY2hlZHVsZXI7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvciggc2NoZWR1bGVyPzogSVNjaGVkdWxlcilcclxuICAgIHtcclxuICAgICAgICBpZiAoc2NoZWR1bGVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2NoZWR1bGVyLmluaXQoICgpID0+IHRoaXMuZG9ET01VcGRhdGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gYWN0aXZhdGUgdGhlIGdpdmVuIHN0eWxlIGRlZmluaXRpb24gaW5zdGFuY2UuXHJcblx0ICovXHJcblx0cHVibGljIGFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlZkNvdW50ID0gdGhpcy5kZWZpbml0aW9ucy5nZXQoIGRlZmluaXRpb24pIHx8IDA7XHJcblx0XHRpZiAocmVmQ291bnQgPT09IC0xKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmRlZmluaXRpb25zLmRlbGV0ZSggZGVmaW5pdGlvbik7XHJcblx0XHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcblx0XHRcdFx0dGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuY2FuY2VsRE9NVXBkYXRlKCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPT09IDAgJiYgdGhpcy5wcm9wcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZURPTVVwZGF0ZSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR0aGlzLmRlZmluaXRpb25zLnNldCggZGVmaW5pdGlvbiwgKytyZWZDb3VudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEluc3RydWN0cyB0byBkZWFjdGl2YXRlIHRoZSBnaXZlbiBzdHlsZSBkZWZpbml0aW9uIGluc3RhbmNlLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCBkZWZpbml0aW9uOiBTdHlsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHJlZkNvdW50ID0gdGhpcy5kZWZpbml0aW9ucy5nZXQoIGRlZmluaXRpb24pIHx8IDA7XHJcblx0XHRpZiAocmVmQ291bnQgPT09IDEpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZGVmaW5pdGlvbnMuZGVsZXRlKCBkZWZpbml0aW9uKTtcclxuXHRcdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLmNhbmNlbERPTVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID09PSAwICYmIHRoaXMucHJvcHMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGVET01VcGRhdGUoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0dGhpcy5kZWZpbml0aW9ucy5zZXQoIGRlZmluaXRpb24sIC0tcmVmQ291bnQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJbnN0cnVjdHMgdG8gc2V0IHRoZSB2YWx1ZSBvZiBlaXRoZXIgYSBzaW5nbGUgcHJvcGVydHkgb3IgYSBzZXQgb2YgcHJvcGVydGllcyBpbiB0aGUgZ2l2ZW5cclxuICAgICAqIENTUyBzdHlsZSBvYmplY3QuXHJcblx0ICovXHJcbiAgICBwdWJsaWMgc2V0U3R5bGVQcm9wZXJ0eSggcnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGUsIG5hbWU6IHN0cmluZyB8IG51bGwsXHJcbiAgICAgICAgdmFsdWU/OiBzdHJpbmcgfCBTdHJpbmdTdHlsZXNldCB8IG51bGwsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuZGVmaW5pdGlvbnMuc2l6ZSA9PT0gMCAmJiB0aGlzLnByb3BzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZXIgJiYgdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGVET01VcGRhdGUoKTtcclxuXHJcblx0XHR0aGlzLnByb3BzLnB1c2goeyBydWxlT3JFbG0sIG5hbWUsIHZhbHVlLCBpbXBvcnRhbnQgfSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFBlcmZvcm1zIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgaW4gb3VyIGludGVybmFsIG1hcC5cclxuXHQgKi9cclxuXHRwdWJsaWMgZm9yY2VET01VcGRhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmRlZmluaXRpb25zLnNpemUgPiAwIHx8IHRoaXMucHJvcHMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuICAgICAgICAgICAgdGhpcy5kb0RPTVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlciAmJiB0aGlzLnNjaGVkdWxlci5jYW5jZWxET01VcGRhdGUoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ2FuY2VsIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGZvciBhbGwgc3R5bGUgZGVmaW5pdGlvbnMgYWNjdW11bGF0ZWQgc2luY2UgdGhlIGxhc3RcclxuXHQgKiBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbi5cclxuXHQgKi9cclxuXHRwdWJsaWMgY2FuY2VsRE9NVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5kZWZpbml0aW9ucy5zaXplID4gMCB8fCB0aGlzLnByb3BzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2xlYXJBY3RpdmF0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVyICYmIHRoaXMuc2NoZWR1bGVyLmNhbmNlbERPTVVwZGF0ZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBQZXJmb3JtcyBhY3RpdmF0aW9uL2RlYWN0aXZhdGlvbiBhbmQgcHJvcGVydHkgc2V0IG9wZXJhdGlvbnMgYWNjdW11bGF0ZWQgaW50ZXJuYWxseS4gVGhpc1xyXG4gICAgICogbWV0aG9kIHNob3VsZCBiZSB1c2VkIGJ5IHRoZSBkZXJpdmVkIGNsYXNzZXMgd2hlbiBzY2hlZHVsZWQgYWN0aXZhdGlvbnMgc2hvdWxkIGJlIHBlcmZvcm1lZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIGRvRE9NVXBkYXRlKCk6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgLy8gYWN0aXZhdGUvZGVhY3RpdmF0ZSBzdHlsZSBkZWZpbml0aW9uc1xyXG5cdFx0dGhpcy5kZWZpbml0aW9ucy5mb3JFYWNoKCAocmVmQ291bnQ6IG51bWJlciwgZGVmaW5pdGlvbjogU3R5bGVEZWZpbml0aW9uKSA9PlxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVmQ291bnQgPiAwKVxyXG5cdFx0XHRcdGFjdGl2YXRlSW5zdGFuY2UoIGRlZmluaXRpb24sIHJlZkNvdW50KTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGRlYWN0aXZhdGVJbnN0YW5jZSggZGVmaW5pdGlvbiwgLXJlZkNvdW50KTtcclxuXHRcdH0pXHJcblxyXG5cdFx0dGhpcy5kZWZpbml0aW9ucy5jbGVhcigpO1xyXG5cclxuICAgICAgICAvLyB1cGRhdGUgc3R5bGUgcHJvcGVydGllc1xyXG5cdFx0dGhpcy5wcm9wcy5mb3JFYWNoKCBwcm9wID0+IHVwZGF0ZVN0eWxlUHJvcGVydHkoIHByb3AucnVsZU9yRWxtLCBwcm9wLm5hbWUsIHByb3AudmFsdWUsIHByb3AuaW1wb3J0YW50KSk7XHJcblx0XHR0aGlzLnByb3BzID0gW107XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENsZWFycyBhbGwgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gZGF0YSBmb3IgYWxsIHN0eWxlIGRlZmluaXRpb25zIGFjY3VtdWxhdGVkIHNpbmNlIHRoZSBsYXN0XHJcblx0ICogYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24uXHJcblx0ICovXHJcblx0cHJpdmF0ZSBjbGVhckFjdGl2YXRpb24oKTogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLmRlZmluaXRpb25zLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IFtdO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIGltcGxlbWVudHMgc2NoZWR1bGluZyB1c2luZyBhbmltYXRpb24gZnJhbWVzLlxyXG4gKi9cclxuY2xhc3MgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgaW1wbGVtZW50cyBJU2NoZWR1bGVyXHJcbntcclxuICAgIC8vIEhhbmRsZSByZXR1cm5lZCBieSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSByZXF1ZXN0SGFuZGxlID0gMDtcclxuXHJcbiAgICAvLyBDYWxsYmFjayB0byBjYWxsIHRvIHdyaXRlIGNoYW5nZXMgdG8gdGhlIERPTS5cclxuXHRwcml2YXRlIGRvRE9NVXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemVzIHRoZSBzY2hlZHVsZXIgb2JqZWN0IGFuZCBwcm92aWRlcyB0aGUgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgaW52b2tlZCB3aGVuIHRoZVxyXG4gICAgICogc2NoZWR1bGVyIGRlY2lkZXMgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBET00uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpbml0KCBkb0RPTVVwZGF0ZTogKCkgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRvRE9NVXBkYXRlID0gZG9ET01VcGRhdGU7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGludm9rZWQgd2hlbiB0aGUgc2NoZWR1bGVyIG5lZWRzIHRvIHNjaGVkdWxlIGl0cyBjYWxsYmFjayBvciBldmVudC5cclxuXHQgKi9cclxuICAgIHB1YmxpYyBzY2hlZHVsZURPTVVwZGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcblx0XHR0aGlzLnJlcXVlc3RIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHRoaXMub25BbmltYXRpb25GcmFtZSlcclxuICAgIH1cclxuXHJcblx0LyoqXHJcblx0ICogSXMgaW52b2tlZCB3aGVuIHRoZSBzY2hlZHVsZXIgbmVlZHMgdG8gY2FuY2VscyBpdHMgc2NoZWR1bGVkIGNhbGxiYWNrIG9yIGV2ZW50LlxyXG5cdCAqL1xyXG4gICAgcHVibGljIGNhbmNlbERPTVVwZGF0ZSgpOiB2b2lkXHJcbiAgICB7XHJcblx0XHRpZiAodGhpcy5yZXF1ZXN0SGFuZGxlID4gMClcclxuXHRcdHtcclxuXHRcdFx0Y2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRoaXMucmVxdWVzdEhhbmRsZSk7XHJcblx0XHRcdHRoaXMucmVxdWVzdEhhbmRsZSA9IDA7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJcyBpbnZva2VkIHdoZW4gYW5pbWF0aW9uIGZyYW1lIHNob3VsZCBiZSBleGVjdXRlZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIG9uQW5pbWF0aW9uRnJhbWUgPSAoKTogdm9pZCA9PlxyXG5cdHtcclxuXHRcdHRoaXMucmVxdWVzdEhhbmRsZSA9IDA7XHJcblx0XHR0aGlzLmRvRE9NVXBkYXRlKCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXMgdGhlIHVwZGF0ZSBvZiB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIENTUyBwcm9wZXJ0eSBpbiB0aGUgZ2l2ZW4gcnVsZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX3NjaGVkdWxlU3R5bGVQcm9wZXJ0eVVwZGF0ZSggcnVsZU9yRWxtOiBDU1NTdHlsZVJ1bGUgfCBFbGVtZW50Q1NTSW5saW5lU3R5bGUsXHJcbiAgICBuYW1lOiBzdHJpbmcgfCBudWxsLCB2YWx1ZT86IHN0cmluZyB8IFN0cmluZ1N0eWxlc2V0IHwgbnVsbCxcclxuICAgIGltcG9ydGFudD86IGJvb2xlYW4sIHNjaGVkdWxlclR5cGU/OiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRzX3NjaGVkdWxlQ2FsbCggKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT5cclxuXHRcdGFjdGl2YXRvci5zZXRTdHlsZVByb3BlcnR5KCBydWxlT3JFbG0sIG5hbWUsIHZhbHVlLCBpbXBvcnRhbnQpLCBzY2hlZHVsZXJUeXBlKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2NoZWR1bGVzIGNhbGxpbmcgb2YgdGhlIGdpdmVuIGZ1bmN0aW9uIHVzaW5nIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX3NjaGVkdWxlQ2FsbCggZnVuYzogKGFjdGl2YXRvcjogSUFjdGl2YXRvcikgPT4gdm9pZCwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxue1xyXG5cdGxldCBhY3RpdmF0b3IgPSBzY2hlZHVsZXJUeXBlID09IG51bGwgPyBzX2RlZmF1bHRBY3RpdmF0b3IgOiBzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLmdldCggc2NoZWR1bGVyVHlwZSk7XHJcbiAgICBpZiAoYWN0aXZhdG9yKVxyXG5cdFx0ZnVuYyggYWN0aXZhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgY3VycmVudCBkZWZhdWx0IHNjaGVkdWxlciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNfZ2V0RGVmYXVsdFNjaGVkdWxlclR5cGUoKTogbnVtYmVyXHJcbntcclxuXHRyZXR1cm4gc19kZWZhdWx0U2NoZWR1bGVyVHlwZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZGVmYXVsdCBzY2hlZHVsaW5nIHR5cGUgdGhhdCBpcyB1c2VkIGJ5IGFjdGl2YXRlIGFuZCBkZWFjdGl2YXRlIGZ1bmN0aW9ucyB0aGF0IGFyZVxyXG4gKiBjYWxsZWQgd2l0aG91dCBleHBsaWNpdGx5IHByb3ZpZGluZyB2YWx1ZSB0byB0aGUgc2NoZWR1bGluZyBwYXJhbWV0ZXIuIFJldHVybnMgdGhlIHR5cGUgb2YgdGhlXHJcbiAqIHByZXZpb3VzIGRlZmF1bHQgYWN0aXZhdG9yIG9yIDAgaWYgYW4gZXJyb3Igb2NjdXJzIChlLmcuIHRoZSBnaXZlbiBzY2hlZHVsZXIgdHlwZSBJRCBpcyBub3RcclxuICogcmVnaXN0ZXJlZCkuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19zZXREZWZhdWx0U2NoZWR1bGVyVHlwZSggc2NoZWR1bGVyVHlwZTogbnVtYmVyKTogbnVtYmVyXHJcbntcclxuICAgIC8vIGNoZWNrIHRoYXQgdGhlIGdpdmVuIG51bWJlciBpcyBpbiBvdXIgbWFwIG9mIHJlZ2lzdGVyZWQgYWN0aXZhdG9yc1xyXG4gICAgbGV0IGFjdGl2YXRvciA9IHNfcmVnaXN0ZXJlZEFjdGl2YXRvcnMuZ2V0KCBzY2hlZHVsZXJUeXBlKTtcclxuXHRpZiAoIWFjdGl2YXRvcilcclxuXHRcdHJldHVybiAwO1xyXG5cclxuXHRsZXQgcHJldlNjaGVkdWxlclR5cGUgPSBzX2RlZmF1bHRTY2hlZHVsZXJUeXBlO1xyXG4gICAgc19kZWZhdWx0U2NoZWR1bGVyVHlwZSA9IHNjaGVkdWxlclR5cGU7XHJcbiAgICBzX2RlZmF1bHRBY3RpdmF0b3IgPSBhY3RpdmF0b3I7XHJcblx0cmV0dXJuIHByZXZTY2hlZHVsZXJUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgdGhlIGdpdmVuIHNjaGVkdWxlciBvYmplY3QgYW5kIHJldHVybnMgdGhlIHNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIsIHdoaWNoXHJcbiAqIHNob3VsZCBiZSB1c2VkIHdoZW4gY2FsbGluZyBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSBmdW5jdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc19yZWdpc3RlclNjaGVkdWxlciggc2NoZWR1bGVyOiBJU2NoZWR1bGVyKTogbnVtYmVyXHJcbntcclxuXHQvLyBnZXQgdGhlIHJlZ2lzdHJhdGlvbiBJRCBmb3IgdGhpcyBzY2hlZHVsZXJcclxuXHRsZXQgaWQgPSBzX25leHRDdXN0b21TY2hlZHVsZXJUeXBlKys7XHJcblx0c19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIGlkLCBuZXcgU2NoZWR1bGluZ0FjdGl2YXRvciggc2NoZWR1bGVyKSk7XHJcblx0cmV0dXJuIGlkO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBVbnJlZ2lzdGVycyBhIHNjaGVkdWxlciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gc2NoZWR1bGVyIHR5cGUgaWRlbnRpZmllci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzX3VucmVnaXN0ZXJTY2hlZHVsZXIoIGlkOiBudW1iZXIpOiB2b2lkXHJcbntcclxuXHRpZiAoaWQgPj0gc19maXJzdEN1c3RvbVNjaGVkdWxlclR5cGUpXHJcblx0e1xyXG5cdFx0c19yZWdpc3RlcmVkQWN0aXZhdG9ycy5kZWxldGUoIGlkKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgZGVsZXRlZCBzY2hlZHVsZXIgd2FzIG91ciBkZWZhdWx0IG9uZSwgd2Ugc2V0IHRoZSBkZWZhdWx0IHRvIFNZTkNcclxuICAgICAgICBpZiAoc19kZWZhdWx0U2NoZWR1bGVyVHlwZSA9PT0gaWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzX2RlZmF1bHRTY2hlZHVsZXJUeXBlID0gU2NoZWR1bGVyVHlwZS5TeW5jO1xyXG4gICAgICAgICAgICBzX2RlZmF1bHRBY3RpdmF0b3IgPSBzX3N5bmNocm9ub3VzQWN0aXZhdG9yO1xyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIuIFRoaXMgc2NoZWR1bGVyIHdpbGwgYmUgdXNlZCBpZiBzY2hlZHVsZXIgdHlwZSBpcyBub3QgZXhwbGljaXRseVxyXG4gKiBzcGVjaWZpZWQgaW4gY2FsbHMgc3VjaCBhcyBhY3RpdmF0ZSBvciBJU3R5bGVSdWxlLnNldFByb3AuXHJcbiAqL1xyXG5sZXQgc19kZWZhdWx0U2NoZWR1bGVyVHlwZTogbnVtYmVyID0gU2NoZWR1bGVyVHlwZS5TeW5jO1xyXG5cclxuLyoqXHJcbiAqIFN5bmNocm9ub3VzIGFjdGl2YXRvciBpbnN0YW5jZS5cclxuICovXHJcbmxldCBzX3N5bmNocm9ub3VzQWN0aXZhdG9yID0gbmV3IFN5bmNocm9ub3VzQWN0aXZhdG9yKCk7XHJcblxyXG4vKipcclxuICogQ3VycmVudCBkZWZhdWx0IGFjdGl2YXRvci4gVGhpcyBhY3RpdmF0b3Igd2lsbCBiZSB1c2VkIGlmIHNjaGVkdWxlciB0eXBlIGlzIG5vdCBleHBsaWNpdGx5XHJcbiAqIHNwZWNpZmllZCBpbiBjYWxscyBzdWNoIGFzIGFjdGl2YXRlIG9yIElTdHlsZVJ1bGUuc2V0UHJvcC5cclxuICovXHJcbmxldCBzX2RlZmF1bHRBY3RpdmF0b3I6IElBY3RpdmF0b3IgPSBzX3N5bmNocm9ub3VzQWN0aXZhdG9yO1xyXG5cclxuLyoqXHJcbiAqIFNjaGVkdWxlciB0eXBlIGlkZW50aWZpZXIgdG8gYmUgYXNzaWduZWQgdG8gdGhlIGZpcnN0IGN1c3RvbSBzY2hlZHVsZXIgdG8gYmUgcmVnaXN0ZXJlZC5cclxuICogQWxsIGN1c3RvbSBzY2hlZHVsZXIgaWRlbnRpZmllcnMgYXJlIGdyZWF0ZXIgb3IgZXF1YWwgdG8gdGhpcyBudW1iZXIuXHJcbiAqL1xyXG5jb25zdCBzX2ZpcnN0Q3VzdG9tU2NoZWR1bGVyVHlwZTogbnVtYmVyID0gMTAwMTtcclxuXHJcbi8qKlxyXG4gKiBTY2hlZHVsZXIgdHlwZSBpZGVudGlmaWVyIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBuZXh0IGN1c3RvbSBzY2hlZHVsZXIgdG8gYmUgcmVnaXN0ZXJlZC5cclxuICovXHJcbmxldCBzX25leHRDdXN0b21TY2hlZHVsZXJUeXBlOiBudW1iZXIgPSBzX2ZpcnN0Q3VzdG9tU2NoZWR1bGVyVHlwZTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiByZWdpc3RlcmVkIGJ1aWx0LWluIGFuZCBjdXN0b20gYWN0aXZhdG9ycy5cclxuICovXHJcbmxldCBzX3JlZ2lzdGVyZWRBY3RpdmF0b3JzID0gbmV3IE1hcDxudW1iZXIsSUFjdGl2YXRvcj4oKTtcclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlciBidWlsdC1pbiBhbmQgY3VzdG9tIGFjdGl2YXRvcnMuXHJcbiAqL1xyXG5zX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLnNldCggU2NoZWR1bGVyVHlwZS5TeW5jLCBzX3N5bmNocm9ub3VzQWN0aXZhdG9yKTtcclxuc19yZWdpc3RlcmVkQWN0aXZhdG9ycy5zZXQoIFNjaGVkdWxlclR5cGUuQW5pbWF0aW9uRnJhbWUsIG5ldyBTY2hlZHVsaW5nQWN0aXZhdG9yKCBuZXcgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIoKSkpO1xyXG5zX3JlZ2lzdGVyZWRBY3RpdmF0b3JzLnNldCggU2NoZWR1bGVyVHlwZS5NYW51YWwsIG5ldyBTY2hlZHVsaW5nQWN0aXZhdG9yKCkpO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdHlsZVJ1bGUsIENvbWJpbmVkU3R5bGVzZXQsIElWYXJSdWxlLCBEZXBlbmRlbnRSdWxlcywgSU5hbWVkRW50aXR5LCBJQ2xhc3NSdWxlLCBJSURSdWxlLCBJQ2xhc3NOYW1lUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7RXh0ZW5kZWRTdHlsZXNldCwgU3R5bGVzZXQsIFZhclRlbXBsYXRlTmFtZSwgVmFyVmFsdWVUeXBlLCBDdXN0b21WYXJfU3R5bGVUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0Nzc1NlbGVjdG9yfSBmcm9tIFwiLi4vc3R5bGVzL1NlbGVjdG9yVHlwZXNcIlxyXG5pbXBvcnQge1J1bGUsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIGNyZWF0ZU5hbWVzLCBJUnVsZUNvbnRhaW5lciwgSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dH0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge21lcmdlU3R5bGVzZXRzLCBzdHlsZXNldFRvU3RyaW5nLCBzdHlsZVByb3BUb1N0cmluZywgbWVyZ2VTdHlsZXNldEN1c3RvbVByb3BzfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge3ZhbDJzdHIsIGNhbWVsVG9EYXNofSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuL1ZhclJ1bGVcIjtcclxuaW1wb3J0IHtwc2V1ZG9FbnRpdHlUb1N0cmluZywgc2VsZWN0b3JUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TZWxlY3RvckZ1bmNzXCI7XHJcbmltcG9ydCB7c19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGV9IGZyb20gXCIuL1NjaGVkdWxpbmdcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgY29udGFpbiBhIHN0eWxlIHJ1bGUuIFRoaXMgY2xhc3NcclxuICogaW1wbGVtZW50cyB0aGUgcGFyc2luZyBvZiB0aGUgQ29tYmluZWRTdHlsZXNldCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8vIFRoZSBzdHlsZXNldCBjYW4gYmUgYW4gQ29tYmluZWRTdHlsZXNldCBmb3IgbWFueSBydWxlczsgaG93ZXZlciwgZm9yIHNvbWUgaXQgaXMganVzdFxyXG5cdC8vIG9mIHRoZSBTdHlsZXNldCB0eXBlLlxyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGVzZXQ/OiBTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuc3R5bGVzZXQgPSB7fTtcclxuXHRcdHRoaXMuZGVwZW5kZW50UnVsZXMgPSB7fTtcclxuXHJcblx0XHRpZiAoc3R5bGVzZXQpXHJcblx0XHRcdHRoaXMucGFyc2VJbnB1dFN0eWxlc2V0KCBzdHlsZXNldCBhcyBDb21iaW5lZFN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR29lcyBvdmVyIHByb3BlcnRpZXMgaW4gdGhlIGdpdmVuIHN0eWxlc2V0IGFuZCBwYXJzZXMgdGhlbSBpbnRvIHByb3BlciBzdHlsZXNldCwgc2V0IG9mXHJcblx0ICogaW1wb3J0YW50IHByb3BlcnRpZXMgYW5kIGRlcGVuZGVudCBydWxlcy5cclxuXHQgKi9cclxuXHRwcml2YXRlIHBhcnNlSW5wdXRTdHlsZXNldCggaW5wdXRTdHlsZXNldDogQ29tYmluZWRTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBpZiB3ZSBoYXZlIHBhcmVudHMsIHdlIGZpcnN0IGNvcHkgcHJvcGVydGllcyBmcm9tIHRoZW0gc28gdGhhdCBvdXIgb3duIHByb3BlcnRpZXNcclxuXHRcdC8vIGNhbiBvdmVycmlkZSB0aGVtLlxyXG5cdFx0aWYgKGlucHV0U3R5bGVzZXRbXCIrXCJdKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyB0aGUgdmFsdWUgaXMgYSBzaW5nbGUgU3R5bGVSdWxlIG9yIGFuIGFycmF5IG9mIFN0eWxlUnVsZXMgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cclxuXHRcdFx0bGV0IGV4dGVuZHNQcm9wVmFsID0gaW5wdXRTdHlsZXNldFtcIitcIl0gYXMgKFN0eWxlUnVsZSB8IFN0eWxlUnVsZVtdKTtcclxuXHRcdFx0bGV0IHBhcmVudFJ1bGVzOiBTdHlsZVJ1bGVbXTtcclxuXHRcdFx0aWYgKGV4dGVuZHNQcm9wVmFsIGluc3RhbmNlb2YgU3R5bGVSdWxlKVxyXG5cdFx0XHRcdHBhcmVudFJ1bGVzID0gW2V4dGVuZHNQcm9wVmFsXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHBhcmVudFJ1bGVzID0gZXh0ZW5kc1Byb3BWYWw7XHJcblxyXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIHBhcmVudCBydWxlcywgY29weSBzdHlsZXNldHMgYW5kIGRlcGVuZGVudCBydWxlcyBmcm9tIHRoZW0uXHJcblx0XHRcdGlmIChwYXJlbnRSdWxlcyAmJiBwYXJlbnRSdWxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0cGFyZW50UnVsZXMuZm9yRWFjaCggcGFyZW50ID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldCA9IG1lcmdlU3R5bGVzZXRzKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cdFx0XHRcdFx0dGhpcy5jb3B5RGVwZW5kZW50UnVsZXNGcm9tKCBwYXJlbnQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbWVyZ2UgY3VzdG9tICBwcm9wZXJ0aWVzXHJcblx0XHRtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRoaXMuc3R5bGVzZXQsIGlucHV0U3R5bGVzZXQpO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIGlucHV0U3R5bGVzZXQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNraXAgb3ZlciBhbHJlYWR5IHByb2Nlc3NlZCBwYXJlbnRzIGFuZCBjdXN0b20gcHJvcGVydGllc1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwiK1wiIHx8IHByb3BOYW1lID09PSBcIi0tXCIpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IGlucHV0U3R5bGVzZXRbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIjpcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gdGhpcyBpcyBhbiBhcnJheSBvZiB0dXBsZXMgcmVwcmVzZW50aW5nXHJcblx0XHRcdFx0Ly8gcGFyYW1ldGVyaXNlZCBwc2V1ZG8gZW50aXRpZXMgd2hlcmUgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdGhlIHBhcmFtZXRlciB2YWx1ZVxyXG5cdFx0XHRcdC8vIChzdHJpbmcpIGFuZCB0aGUgc2Vjb25kIHRoZSBDb21iaW5lZFN0eWxlc2V0LiBPdGhlcndpc2UsIHRoZSB2YWx1ZSBpcyBqdXN0IGFuXHJcblx0XHRcdFx0Ly8gQ29tYmluZWRTdHlsZXNldC5cclxuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsKSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbYW55LCBDb21iaW5lZFN0eWxlc2V0XVtdO1xyXG5cdFx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXSA9IHR1cGxlcy5tYXAoIHR1cGxlID0+IG5ldyBEZXBlbmRlbnRSdWxlKFxyXG5cdFx0XHRcdFx0XHRcdHByb3BOYW1lLCB0dXBsZVswXSwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSBuZXcgRGVwZW5kZW50UnVsZSggXCImXCIgKyBwcm9wTmFtZSwgdW5kZWZpbmVkLFxyXG5cdFx0XHRcdFx0XHRwcm9wVmFsIGFzIENvbWJpbmVkU3R5bGVzZXQsIHRoaXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcIiZcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0dHVwbGVbMF0sIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aChcIiZcIikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyB2YWx1ZSBpcyBhbiBhcnJheSBvZiB0d28tZWxlbWVudCB0dXBsZXMgd2l0aCBzZWxlY3RvciBhbmQgc3R5bGVzZXRcclxuXHRcdFx0XHRsZXQgdHVwbGVzID0gcHJvcFZhbCBhcyBbQ3NzU2VsZWN0b3IsIENvbWJpbmVkU3R5bGVzZXRdW107XHJcblx0XHRcdFx0aWYgKHR1cGxlcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gdHVwbGVzLm1hcCggdHVwbGUgPT4gbmV3IERlcGVuZGVudFJ1bGUoXHJcblx0XHRcdFx0XHRcdCgpID0+IHByb3BOYW1lICsgc2VsZWN0b3JUb1N0cmluZyggdHVwbGVbMF0pLCB1bmRlZmluZWQsIHR1cGxlWzFdLCB0aGlzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHByb3BOYW1lLmVuZHNXaXRoKFwiJlwiKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHZhbHVlIGlzIGFuIGFycmF5IG9mIHR3by1lbGVtZW50IHR1cGxlcyB3aXRoIHNlbGVjdG9yIGFuZCBzdHlsZXNldFxyXG5cdFx0XHRcdGxldCB0dXBsZXMgPSBwcm9wVmFsIGFzIFtDc3NTZWxlY3RvciwgQ29tYmluZWRTdHlsZXNldF1bXTtcclxuXHRcdFx0XHRpZiAodHVwbGVzLmxlbmd0aCA+IDApXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV0gPSB0dXBsZXMubWFwKCB0dXBsZSA9PiBuZXcgRGVwZW5kZW50UnVsZShcclxuXHRcdFx0XHRcdFx0KCkgPT4gc2VsZWN0b3JUb1N0cmluZyggdHVwbGVbMF0pICsgcHJvcE5hbWUsIHVuZGVmaW5lZCwgdHVwbGVbMV0sIHRoaXMpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gdGhpcyBpcyBhIHJlZ3VsYXIgQ1NTIHByb3BlcnR5OiBjb3B5IHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byBvdXIgaW50ZXJuYWwgc3R5bGVzZXRcclxuXHRcdFx0XHR0aGlzLnN0eWxlc2V0W3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdC8vIGlmIGRlcGVuZGVudCBydWxlcyBleGlzdCwgcHJvY2VzcyB0aGVtIHVuZGVyIHRoZSBzYW1lIGNvbnRhaW5lclxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0KHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkucHJvY2VzcyggY29udGFpbmVyLCBvd25lckNvbnRhaW5lciwgbnVsbCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwcm90ZWN0ZWQgY29weUZyb20oIHNyYzogU3R5bGVSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCBvbiBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0IHNvIHdlIGRvbid0IGhhdmUgYW55IHByb3BlcnRpZXMgaW5cclxuXHRcdC8vIG91ciBvd24gc3R5bGVzZXQgeWV0XHJcblx0XHR0aGlzLnN0eWxlc2V0ID0gbWVyZ2VTdHlsZXNldHMoIHRoaXMuc3R5bGVzZXQsIHNyYy5zdHlsZXNldCk7XHJcblx0XHR0aGlzLmNvcHlEZXBlbmRlbnRSdWxlc0Zyb20oIHNyYyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvcGllcyBkZXBlbmRlbnQgcnVsZXMgZnJvbSBhbm90aGVyIHN0eWxlIHJ1bGUgb2JqZWN0LlxyXG5cdHByaXZhdGUgY29weURlcGVuZGVudFJ1bGVzRnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3JjLmRlcGVuZGVudFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHNyYy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBhcnIgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAoIWFycilcclxuXHRcdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gYXJyID0gW107XHJcblxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKHNyY0RlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IG5ld0RlcFJ1bGUgPSBzcmNEZXBSdWxlLmNsb25lKCkgYXMgRGVwZW5kZW50UnVsZTtcclxuXHRcdFx0XHRcdG5ld0RlcFJ1bGUuY29udGFpbmluZ1J1bGUgPSB0aGlzO1xyXG5cdFx0XHRcdFx0YXJyLnB1c2goIG5ld0RlcFJ1bGUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBuZXdEZXBSdWxlID0gKHByb3BWYWwgYXMgRGVwZW5kZW50UnVsZSkuY2xvbmUoKSBhcyBEZXBlbmRlbnRSdWxlO1xyXG5cdFx0XHRcdG5ld0RlcFJ1bGUuY29udGFpbmluZ1J1bGUgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMuZGVwZW5kZW50UnVsZXNbcHJvcE5hbWVdID0gbmV3RGVwUnVsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcnVsZS5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPT0gbnVsbClcclxuXHRcdFx0dGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZyA9IHRoaXMuZ2V0U2VsZWN0b3JTdHJpbmcoKTtcclxuXHRcdFx0XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5jYWNoZWRTZWxlY3RvclN0cmluZ30geyR7c3R5bGVzZXRUb1N0cmluZyggdGhpcy5zdHlsZXNldCl9fWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdHlsZVJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IHRoaXMuY2xvbmVPYmplY3QoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnN0eWxlc2V0KS5sZW5ndGggPiAwKVxyXG5cdFx0XHR0aGlzLmNzc1J1bGUgPSBSdWxlLmFkZFJ1bGVUb0RPTSggdGhpcy50b0Nzc1N0cmluZygpLCBwYXJlbnQpIGFzIENTU1N0eWxlUnVsZTtcclxuXHJcblx0XHQvLyBpZiBkZXBlbmRlbnQgcnVsZXMgZXhpc3QsIGluc2VydCB0aGVtIHVuZGVyIHRoZSBzYW1lIHBhcmVudFxyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUuaW5zZXJ0KCBwYXJlbnQpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdChwcm9wVmFsIGFzIERlcGVuZGVudFJ1bGUpLmluc2VydCggcGFyZW50KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlcnMgdGhlIENTUyBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmNsZWFyKCk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBjbGVhciB0aGVtIHRvb1xyXG5cdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gdGhpcy5kZXBlbmRlbnRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSB0aGlzLmRlcGVuZGVudFJ1bGVzW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbCkgJiYgcHJvcFZhbC5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHByb3BWYWwuZm9yRWFjaCggKGRlcFJ1bGU6IERlcGVuZGVudFJ1bGUpID0+IGRlcFJ1bGUuY2xlYXIoKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5jbGVhcigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXJpYWxpemVzIHRoaXMgcnVsZSB0byBhIHN0cmluZy5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoIGN0eDogSVJ1bGVTZXJpYWxpemF0aW9uQ29udGV4dCk6IHZvaWRcclxuICAgIHtcclxuXHRcdGlmIChPYmplY3Qua2V5cyh0aGlzLnN0eWxlc2V0KS5sZW5ndGggPiAwKVxyXG5cdFx0XHRjdHguYWRkUnVsZVRleHQoIHRoaXMudG9Dc3NTdHJpbmcoKSk7XHJcblxyXG5cdFx0Ly8gaWYgZGVwZW5kZW50IHJ1bGVzIGV4aXN0LCBpbnNlcnQgdGhlbSB1bmRlciB0aGUgc2FtZSBwYXJlbnRcclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHRoaXMuZGVwZW5kZW50UnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBwcm9wVmFsID0gdGhpcy5kZXBlbmRlbnRSdWxlc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpICYmIHByb3BWYWwubGVuZ3RoID4gMClcclxuXHRcdFx0XHRwcm9wVmFsLmZvckVhY2goIChkZXBSdWxlOiBEZXBlbmRlbnRSdWxlKSA9PiBkZXBSdWxlLnNlcmlhbGl6ZSggY3R4KSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHQocHJvcFZhbCBhcyBEZXBlbmRlbnRSdWxlKS5zZXJpYWxpemUoIGN0eCk7XHJcblx0XHR9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHB1YmxpYyBnZXQgc2VsZWN0b3JUZXh0KCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmNhY2hlZFNlbGVjdG9yU3RyaW5nID09IG51bGwpXHJcblx0XHRcdHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmcgPSB0aGlzLmdldFNlbGVjdG9yU3RyaW5nKCk7XHJcblx0XHRcdFxyXG5cdFx0cmV0dXJuIHRoaXMuY2FjaGVkU2VsZWN0b3JTdHJpbmc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gYWxsb3dzIHRoZSBvYmplY3QgdG8gcGFydGljcGF0ZSBpbiBcInZhbHVlVG9TdHJpbmdcIiBzZXJpYWxpemF0aW9uLiBXaGVuZXZlclxyXG5cdCAqIHRoZSBTdHlsZVJ1bGUtZGVyaXZlZCBvYmplY3QgaXMgZW5jb3VudGVyZWQgYnkgdGhlIGBVdGlsRnVuYy52YWx1ZVRvU3RyaW5nYCBmdW5jdGlvbixcclxuXHQgKiB0aGUgcnVsZSdzIHNlbGVjdG9yIHdpbGwgYmUgdXNlZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RvclRleHQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBuZXcgc3R5bGUgcnVsZSBvYmplY3Qgb2YgdGhlIHByb3BlciB0eXBlLCBidXQgd2l0aG91dCB0aGUgc3R5bGVzZXQgYW5kIGRlcGVuZGVudFxyXG5cdC8vIHJ1bGVzLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjbG9uZU9iamVjdCgpOiBTdHlsZVJ1bGU7XHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdldFNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZztcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBZGRzL3JlcGxhY2VzIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gQ1NTIHByb3BlcnR5IGluIHRoaXMgcnVsZS5cclxuXHQgKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBDU1MgcHJvcGVydHkuXHJcblx0ICogQHBhcmFtIHZhbHVlIE5ldyB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG4gICAgcHVibGljIHNldFByb3A8SyBleHRlbmRzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQ+KCBuYW1lOiBLLCB2YWx1ZTogRXh0ZW5kZWRTdHlsZXNldFtLXSxcclxuICAgICAgICBpbXBvcnRhbnQ/OiBib29sZWFuLCBzY2hlZHVsZXJUeXBlPzogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGZpcnN0IHNldC9yZW1vdmUgdGhlIHZhbHVlIGluIG91ciBpbnRlcm5hbCBzdHlsZXNldCBvYmplY3RcclxuXHRcdGlmICh2YWx1ZSA9PSBudWxsKVxyXG5cdFx0XHRkZWxldGUgdGhpcy5zdHlsZXNldFtuYW1lXTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5zdHlsZXNldFtuYW1lXSA9IGltcG9ydGFudCA/IHsgXCIhXCI6IHZhbHVlIGFzIGFueSB9IDogdmFsdWUgYXMgYW55O1xyXG5cclxuXHRcdC8vIHNlY29uZCwgaWYgQ1NTUnVsZSBhbHJlZHkgZXhpc3RzLCBzZXQvcmVtb3ZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0aGVyZVxyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuICAgICAgICB7XHJcblx0XHQgICAgc19zY2hlZHVsZVN0eWxlUHJvcGVydHlVcGRhdGUoIHRoaXMuY3NzUnVsZSwgY2FtZWxUb0Rhc2goIG5hbWUpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBzdHlsZVByb3BUb1N0cmluZyggbmFtZSwgdmFsdWUsIHRydWUpLCBpbXBvcnRhbnQsIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQWRkcy9yZXBsYWNlcyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhpcyBydWxlLlxyXG5cdCAqIEBwYXJhbSB2YXJPYmogSVZhclJ1bGUgb2JqZWN0IGRlZmluaW5nIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFyVmFsdWUgTmV3IHZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRDdXN0b21Qcm9wPEsgZXh0ZW5kcyBWYXJUZW1wbGF0ZU5hbWU+KCB2YXJPYmo6IElWYXJSdWxlPEs+LCB2YWx1ZTogVmFyVmFsdWVUeXBlPEs+LFxyXG5cdFx0aW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXZhck9iaiB8fCAhKHZhck9iaiBpbnN0YW5jZW9mIFZhclJ1bGUpKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gZmlyc3Qgc2V0L3JlbW92ZSB0aGUgdmFsdWUgaW4gb3VyIGludGVybmFsIHN0eWxlc2V0IG9iamVjdFxyXG5cdFx0bGV0IGN1cnJDdXN0b21Qcm9wcyA9IHRoaXMuc3R5bGVzZXRbXCItLVwiXSBhcyBDdXN0b21WYXJfU3R5bGVUeXBlW107XHJcblx0XHRpZiAoY3VyckN1c3RvbVByb3BzIHx8IHZhbHVlICE9IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2YWx1ZSA9PSBudWxsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKGN1cnJDdXN0b21Qcm9wcy5sZW5ndGggPiAwKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGN1cnJDdXN0b21Qcm9wcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbVswXSA9PT0gdmFyT2JqKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZiAoY3VyckN1c3RvbVByb3BzLmxlbmd0aCA9PT0gMSlcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0W1wiLS1cIl0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHMuc3BsaWNlKCBpbmRleCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghY3VyckN1c3RvbVByb3BzKVxyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtcIi0tXCJdID0gY3VyckN1c3RvbVByb3BzID0gW1t2YXJPYmosIHZhbHVlXV07XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGN1cnJDdXN0b21Qcm9wcy5maW5kSW5kZXgoIGl0ZW0gPT4gaXRlbVswXSA9PT0gdmFyT2JqKTtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+PSAwKVxyXG5cdFx0XHRcdFx0XHRjdXJyQ3VzdG9tUHJvcHNbaW5kZXhdWzFdID0gdmFsdWU7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGN1cnJDdXN0b21Qcm9wcy5wdXNoKCBbdmFyT2JqLCB2YWx1ZV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHNlY29uZCwgaWYgQ1NTUnVsZSBhbHJlZHkgZXhpc3RzLCBzZXQvcmVtb3ZlIHRoZSBwcm9wZXJ0eSB2YWx1ZSB0aGVyZVxyXG5cdFx0aWYgKHRoaXMuY3NzUnVsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNfc2NoZWR1bGVTdHlsZVByb3BlcnR5VXBkYXRlKCB0aGlzLmNzc1J1bGUsIHZhck9iai5jc3NOYW1lLFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPT0gbnVsbCA/IG51bGwgOiBzdHlsZVByb3BUb1N0cmluZyggdmFyT2JqLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQsIHNjaGVkdWxlclR5cGUpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1N0eWxlUnVsZTtcclxuXHJcblx0LyoqXHJcblx0ICogT2JqZWN0IGNvbnRhaW5pbmcgZGVwZW5kZW50IHJ1bGVzLiBQcm9wZXJ0eSBuYW1lcyBhcmUgdGFrZW4gZnJvbSBzcGVjaWFsIHByb3BlcnRpZXNcclxuXHQgKiBvZiB0aGUgQ29tYmluZWRTdHlsZXNldC4gVGhpcyBvYmplY3QgYWxsb3dzIGNhbGxlcnMgdG8gYWNjZXNzIGRlcGVuZGVudCBydWxlcyB0byBjaGFuZ2VcclxuXHQgKiBzdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgcHJvZ3JhbW1hdGljYWxseS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGVwZW5kZW50UnVsZXM6IERlcGVuZGVudFJ1bGVzO1xyXG5cclxuXHQvLyBSZXN1bHRhbnQgb2JqZWN0IGRlZmluaW5nIHByb3BlcnRpZXMgdG8gYmUgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0cHJpdmF0ZSBzdHlsZXNldDogU3R5bGVzZXQ7XHJcblxyXG5cdC8vIFNlbGVjdG9yIHN0cmluZyBjYWNoZWQgYWZ0ZXIgaXQgaXMgZmlyc3Qgb2J0YWluZWQuIE5lZWRlZCB0byBub3QgaW52b2tlIGdldFNlbGVjdG9yU3RyaW5nXHJcblx0Ly8gbXVsdGlwbGUgdGltZXMgaW4gdGhlIHByZXNlbmNlIG9mIGRlcGVuZGVudCBydWxlcy5cclxuXHRwcml2YXRlIGNhY2hlZFNlbGVjdG9yU3RyaW5nOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIERlcGVuZGVudFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBkZXBlbmRzIG9uIHRoZSBjb250YWluaW5nIHN0eWxlIHJ1bGUuIFRoaXNcclxuICogaXMgdXNlZCBmb3IgcHNldWRvIGNsYXNzZXMsIHBzZXVkbyBlbGVtZW50cywgY29tYmluYXRvcnMgYW5kIG90aGVyIHNlbGVjdG9ycyB0aGF0IGNvbWJpbmUgdGhlXHJcbiAqIGNvbnRhaW5pbmcgcnVsZSdzIHNlbGVjdG9yIHdpdGggYWRkaXRpb25hbCBzZWxlY3RvciBpdGVtcy5cclxuICovXHJcbmNsYXNzIERlcGVuZGVudFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdC8vIGZvciByZWd1bGFyIHNlbGVjdG9ycywgcHNldWRvIGNsYXNzZXMgYW5kIHBzZXVkbyBlbGVtZW50cywgdGhlIHNlbGVjdG9yIGFscmVhZHkgY29udGFpbnNcclxuXHQvLyB0aGUgYW1wZXJzYW5kIGFuZCB0aGUgc2VsZWN0b3JQYXJhbSBpcyB1bmRlZmluZWQuIEZvciBwYXJhbWV0ZXJpemVkIHBzZXVkbyBjbGFzc2VzLCBwc3Vkb1xyXG5cdC8vIGVsZW1lbnRzIGFuZCBjb21iaW5hdG9ycywgdGhlIHNlbGVjdG9yUGFyYW0gaXMgZGVmaW5lZCBhbmQgdGhlIHNlbGVjdG9yIGlzIGp1c3QgdGhlIGVudGl0eVxyXG5cdC8vIG5hbWUuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3RvcjogQ3NzU2VsZWN0b3IsIHNlbGVjdG9yUGFyYW0/OiBhbnksIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldCxcclxuXHRcdGNvbnRhaW5pbmdSdWxlPzogU3R5bGVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0XHR0aGlzLnNlbGVjdG9yUGFyYW0gPSBzZWxlY3RvclBhcmFtO1xyXG5cdFx0dGhpcy5jb250YWluaW5nUnVsZSA9IGNvbnRhaW5pbmdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogRGVwZW5kZW50UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgRGVwZW5kZW50UnVsZSggdGhpcy5zZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHBhcmVudFNlbGVjdG9yID0gdGhpcy5jb250YWluaW5nUnVsZSEuc2VsZWN0b3JUZXh0O1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0b3JQYXJhbSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciBhcyBzdHJpbmc7XHJcblx0XHRcdHJldHVybiBgJHtwYXJlbnRTZWxlY3Rvcn0ke3NlbGVjdG9yfSgke3BzZXVkb0VudGl0eVRvU3RyaW5nKCBzZWxlY3RvciwgdGhpcy5zZWxlY3RvclBhcmFtKX0pYDtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gY29udmVydCBzZWxlY3RvciB0byBzdHJpbmcuXHJcblx0XHRcdGxldCBzZWxlY3RvciA9IHNlbGVjdG9yVG9TdHJpbmcoIHRoaXMuc2VsZWN0b3IpO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHNlbGVjdG9yIHN0cmluZyBkb2Vzbid0IGhhdmUgYW55IG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sLCB3ZVxyXG5cdFx0XHQvLyBzaW1wbHkgYXBwZW5kIHRoZSBzZWxlY3RvciB0byB0aGUgcGFyZW50IHNlbGVjdG9yOyBvdGhlcndpc2UsIHdlIHJlcGxhY2UgYWxsXHJcblx0XHRcdC8vIG9jY3VycmVuY2VzIG9mIHRoZSBhbXBlcnNhbmQgc3ltYm9sIGluIHRoZSBzZWxlY3RvciBzdHJpbmcgd2l0aCB0aGUgc2VsZWN0b3JcclxuXHRcdFx0Ly8gc3RyaW5nIG9mIHRoZSBwYXJlbnQgcnVsZS5cclxuXHRcdFx0cmV0dXJuIHNlbGVjdG9yLmluZGV4T2YoIFwiJlwiKSA8IDBcclxuXHRcdFx0XHQ/IGAke3BhcmVudFNlbGVjdG9yfSR7c2VsZWN0b3J9YFxyXG5cdFx0XHRcdDogc2VsZWN0b3IucmVwbGFjZSggLyYvZywgcGFyZW50U2VsZWN0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQYXJ0aWFsIHNlbGVjdG9yIHRoYXQgc2hvdWxkIGJlIGFwcGVuZGVkIHRvIHRoZSBwYXJlbnQgc2VsZWN0b3IuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcblxyXG5cdC8vIE9wdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWxlY3RvciAtIHVzZWQgZm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgYW5kIGVsZW1lbnRzLlxyXG5cdHByaXZhdGUgc2VsZWN0b3JQYXJhbT86IGFueTtcclxuXHJcblx0Ly8gUGFyZW50IHN0eWxlIHJ1bGUgb2Ygd2hpY2ggdGhpcyBydWxlIGlzIGRlcGVuZGVudC5cclxuXHRwdWJsaWMgY29udGFpbmluZ1J1bGU/OiBTdHlsZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBBYnN0cmFjdFJ1bGUgY2xhc3MgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBjYW4gb25seSBiZSB1c2VkIGFzIGEgYmFzZSBmb3Igb3RoZXIgc3R5bGVcclxuICogcnVsZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogQ29tYmluZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IEFic3RyYWN0UnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQWJzdHJhY3RSdWxlKCk7XHJcblx0fVxyXG5cclxuXHQvLyBPdmVycmlkZXMgdGhlIFN0eWxlUnVsZSdzIGltcGxlbWVudGF0aW9uIHRvIGRvIG5vdGhpbmcuIE5vIENTU1N0eWxlUnVsZSBpcyBjcmVhdGVkIGZvclxyXG5cdC8vIGFic3RyYWN0IHJ1bGVzLlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBOYW1lZFN0eWxlUnVsZSBjbGFzcyBpcyBhIGJhc2UgZm9yIHN0eWxlIHJ1bGUgY2xhc3NlcyB0aGF0IGFyZSBhbHNvIG5hbWVkIGVudGl0aWVzIC0gc3VjaFxyXG4gKiBhcyBjbGFzcyBydWxlIGFuZCBJRCBydWxlLlxyXG4gKi9cclxuYWJzdHJhY3QgY2xhc3MgTmFtZWRTdHlsZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJTmFtZWRFbnRpdHlcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRFbnRpdHkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlKTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IElSdWxlQ29udGFpbmVyLCBvd25lckNvbnRhaW5lcjogSVRvcExldmVsUnVsZUNvbnRhaW5lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0W3RoaXMubmFtZSwgdGhpcy5jc3NOYW1lXSA9IGNyZWF0ZU5hbWVzKCBvd25lckNvbnRhaW5lciwgcnVsZU5hbWUsIHRoaXMubmFtZU92ZXJyaWRlLCB0aGlzLmNzc1ByZWZpeCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBnZXRTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jc3NOYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gSW1wbGVtZW50YXRpb24gb2YgdGhlIHRvU3RyaW5nIG1ldGhvZCByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBydWxlICh3aXRob3V0IHRoZSBDU1MgcHJlZml4KS5cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMubmFtZTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3NzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcm90ZWN0ZWQgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkRW50aXR5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2xhc3NSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgQ1NTIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsYXNzUnVsZSBleHRlbmRzIE5hbWVkU3R5bGVSdWxlIGltcGxlbWVudHMgSUNsYXNzUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSB8IElDbGFzc05hbWVSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8qKiBOYW1lIG9mIHRoZSBjbGFzcyBwcmVmaXhlZCB3aXRoIFwiLlwiICovXHJcblx0cHVibGljIGdldCBjc3NDbGFzc05hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY3NzTmFtZTsgfVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IENsYXNzUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgQ2xhc3NSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZyB7IHJldHVybiBcIi5cIjsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURSdWxlIGNsYXNzIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGFuIElELlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElEUnVsZSBleHRlbmRzIE5hbWVkU3R5bGVSdWxlIGltcGxlbWVudHMgSUlEUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IENvbWJpbmVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZEVudGl0eSlcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGUsIG5hbWVPdmVycmlkZSk7XHJcblx0fVxyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgZWxlbWVudCBJRCBwcmVmaXhlZCB3aXRoIFwiI1wiICovXHJcblx0cHVibGljIGdldCBjc3NJRE5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY3NzTmFtZTsgfVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNsb25lT2JqZWN0KCk6IElEUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBuZXcgSURSdWxlKCB1bmRlZmluZWQsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cdC8vIFJldHVybnMgcHJlZml4IHRoYXQgaXMgcHV0IGJlZm9yZSB0aGUgZW50aXR5IG5hbWUgdG8gY3JlYXRlIGEgQ1NTIG5hbWUgdXNlZCBpbiBzdHlsZSBydWxlXHJcblx0Ly8gc2VsZWN0b3JzLlxyXG5cdHByb3RlY3RlZCBnZXQgY3NzUHJlZml4KCk6IHN0cmluZyB7IHJldHVybiBcIiNcIjsgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2VsZWN0b3JSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBDU1Mgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yOiBDc3NTZWxlY3Rvciwgc3R5bGU/OiBDb21iaW5lZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZSk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmVPYmplY3QoKTogU2VsZWN0b3JSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBTZWxlY3RvclJ1bGUoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwdWJsaWMgZ2V0U2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHRoaXMuc2VsZWN0b3IpO1xyXG5cdH1cclxuXHJcblx0Ly8gc2VsZWN0b3Igb2JqZWN0IGZvciB0aGlzIHJ1bGUuXHJcblx0cHJpdmF0ZSBzZWxlY3RvcjogQ3NzU2VsZWN0b3I7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJVmFyUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtWYXJWYWx1ZVR5cGUsIFZhclRlbXBsYXRlTmFtZX0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtzdHlsZVByb3BUb1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtjcmVhdGVOYW1lcywgSVJ1bGVDb250YWluZXIsIElUb3BMZXZlbFJ1bGVDb250YWluZXIsIFJ1bGVMaWtlfSBmcm9tIFwiLi9SdWxlXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyUnVsZSBjbGFzcyBkZXNjcmliZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LiBWYXJSdWxlIGRvZXMgbm90IGRlcml2ZSBmcm9tIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGJlY2F1c2UgaXQgaXMgbm90IGEgcmVhbCBDU1MgcnVsZTsgaG93ZXZlciwgaW4gbWFueSBhc3BlY3RzIGl0IHJlcGVhdHMgdGhlIFJ1bGUnc1xyXG4gKiBmdW5jdGlvbmFsaXR5LiBJbiBwYXJ0aWN1bGFyIGl0IGhhcyB0aGUgcHJvY2VzcyBmdW5jdGlvbiB0aGF0IGFsbG93cyBpdCB0byBvYnRhaW4gYW4gYWN0dWFsXHJcbiAqIG5hbWUsIHdoaWNoIHdpbGwgYmUgdXNlZCB3aGVuIGRlZmluaW5nIGFuZCB1c2luZyB0aGlzIGN1c3RvbSBwcm9wZXJ0eSBpbiBDU1MuXHJcbiAqIFxyXG4gKiBOb3RlIHRoYXQgd2hpbGUgdGhlIHR5cGUgcGFyYW1ldGVyIEsgaXMgYSBrZXkgb2YgdGhlIElDc3NTdHlsZXNldCBpbnRlcmZhY2UsIHRoZSB2YWx1ZSBpcyBvZlxyXG4gKiB0eXBlIElTdGlsZXNldFtLXSwgd2hpY2ggaXMgRXh0ZW5kZWQ8SUNzc1N0eWxlc2V0W0tdPi4gVGhpcyBhbGxvd3Mgc3BlY2lmeWluZyB2YWx1ZXMgdGhhdCBhcmVcclxuICogdmFsaWQgZm9yIHRoZSBFeHRlbmRlZCByb3BlcnR5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFyUnVsZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lID0gYW55PiBleHRlbmRzIFJ1bGVMaWtlIGltcGxlbWVudHMgSVZhclJ1bGU8Sz5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdGVtcGxhdGU6IEssIHZhbHVlPzogVmFyVmFsdWVUeXBlPEs+LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPilcclxuXHR7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcclxuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogSVJ1bGVDb250YWluZXIsIG93bmVyQ29udGFpbmVyOiBJVG9wTGV2ZWxSdWxlQ29udGFpbmVyLCBydWxlTmFtZTogc3RyaW5nIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSk7XHJcblx0XHRbdGhpcy5uYW1lLCB0aGlzLmNzc05hbWVdID0gY3JlYXRlTmFtZXMoIG93bmVyQ29udGFpbmVyLCBydWxlTmFtZSwgdGhpcy5uYW1lT3ZlcnJpZGUsIFwiLS1cIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBWYXJSdWxlPEs+XHJcblx0e1xyXG5cdFx0cmV0dXJuIG5ldyBWYXJSdWxlPEs+KHRoaXMudGVtcGxhdGUsIHRoaXMudmFsdWUsIHRoaXMubmFtZU92ZXJyaWRlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZy5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nIHwgbnVsbFxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnZhbHVlID09IG51bGwgPyBudWxsIDogYCR7dGhpcy5jc3NOYW1lfTogJHtzdHlsZVByb3BUb1N0cmluZyggdGhpcy50ZW1wbGF0ZSwgdGhpcy52YWx1ZSwgdHJ1ZSl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRoZSBvYmplY3QgaXMgc3BlY2lmaWVkIGFzIGEgdmFsdWUgb2YgYSBzdHlsZSBwcm9wZXJ0eS5cclxuXHQvLyBXZSByZXR1cm4gdGhlIHZhcigtLW5hbWUpIGV4cHJlc3Npb24uXHJcbiAgICBwdWJsaWMgdmFsdWVUb1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuXHRcdHJldHVybiBgdmFyKCR7dGhpcy5jc3NOYW1lfSlgO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzZXRWYWx1ZSggdmFsdWU6IFZhclZhbHVlVHlwZTxLPiwgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRhaW5lci5zZXRDdXN0b21WYXJWYWx1ZSggdGhpcy5jc3NOYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZSA9PSBudWxsID8gbnVsbCA6IHN0eWxlUHJvcFRvU3RyaW5nKCB0aGlzLnRlbXBsYXRlLCB2YWx1ZSwgdHJ1ZSksXHJcbiAgICAgICAgICAgIGltcG9ydGFudCwgc2NoZWR1bGVyVHlwZSlcclxuXHR9XHJcblxyXG5cclxuXHRcclxuXHQvLyAvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGVzaGVldCBkZWZpbml0aW9uIHRvIHdoaWNoIHRoaXMgcnVsZSB3YXMgYXNzaWduZWQuIFRoaXMgaXNcclxuXHQvLyAvLyBudWxsIGZvciBTdHlsZXNoZWV0LlxyXG5cdC8vIHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcblx0cHVibGljIHRlbXBsYXRlOiBLO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjc3NOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHByaXZhdGUgdmFsdWU6IFZhclZhbHVlVHlwZTxLPjtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJVmFyUnVsZTxLPjtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lOYW1lZENvbG9ycywgQ3NzQ29sb3IsIENvbG9yc30gZnJvbSBcIi4vQ29sb3JUeXBlc1wiXHJcbmltcG9ydCB7Q3NzQW5nbGVNYXRoLCB2YWwyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQge0V4dGVuZGVkfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBwcmVkZWZpbmVkIGNvbG9yIG5hbWVzIGJ5IHRoZWlyIG51bWVyaWMgdmFsdWVzLiBPbmx5IGJ1aWx0LWluIGNvbG9yIG5hbWVzIHdpbGwgYmUgaW5cclxuICogdGhpcyBtYXAgLSB0aG9zZSBuYW1lZCBjb2xvcnMgdGhhdCBhcmUgYWRkZWQgdXNpbmcgbW9kdWxlIGF1Z21lbnRhdGlvbiB3aWxsIE5PVCByZXNpZGUgaW5cclxuICogdGhpcyBtYXAuIFRoaXMgaXMgbmVlZGVkIHRvIGNvbnZlcnQgdGhlIG51bWVyaWMgY29sb3IgdmFsdWVzIHNldCB1c2luZyB0aGUgQ29sb3IuYnJvd25cclxuICogbm90YXRpb24gdG8gdGhlaXIgbmFtZXMgd2hlbiBpbnNlcnRpbmcgQ1NTIHJ1bGVzLlxyXG4gKi9cclxubGV0IHJldmVyc2VkQ29sb3JNYXAgPSBuZXcgTWFwPG51bWJlcixzdHJpbmc+KCk7XHJcblxyXG4vLyBidWlsZCBSZXZlcnNlZCBDb2xvciBNYXBcclxuT2JqZWN0LmVudHJpZXMoIENvbG9ycykuZm9yRWFjaCggKFtuYW1lLCB2YWx1ZV0pID0+IHJldmVyc2VkQ29sb3JNYXAuc2V0KCB2YWx1ZSwgbmFtZSkgKTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBjb2xvciBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2xvck51bWJlclRvU3RyaW5nKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB0aGUgbnVtYmVyIGlzIG5lZ2F0aXZlLCByZW1lbWJlciB0aGF0IGZhY3QgYW5kIGdldCB0aGUgcG9zaXRpdmUgbnVtYmVyXHJcbiAgICBsZXQgbiA9IHZhbCA8IDAgPyAtdmFsIDogdmFsO1xyXG4gICAgbGV0IGlzTmVnYXRpdmUgPSBuICE9PSB2YWw7XHJcblxyXG4gICAgLy8gaWYgdGhlIG51bWJlciBoYXMgYSBmbG9hdGluZyBwb2ludCBwYXJ0LCBzZXBhcmF0ZSBpdCBpbnRvIGFscGhhIGNoYW5uZWxcclxuICAgIGxldCBhID0gMDtcclxuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihuKSlcclxuICAgIHtcclxuICAgICAgICBsZXQgayA9IE1hdGguZmxvb3Iobik7XHJcbiAgICAgICAgLy8gYSA9IE1hdGgucm91bmQoIChuIC0gaykgKiAxMDApO1xyXG4gICAgICAgIGEgPSBNYXRoLnJvdW5kKCAobiAtIGspICogMjU1KTtcclxuICAgICAgICBuID0gaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0aGUgbnVtYmVyIHdhcyBuZWdhdGl2ZSB3ZSByZXZlcnQgdGhlIGNvbG9yIGJ5IG5lZ2F0aW5nIGFsbCB0aGUgYml0cy4gSW4gYW55IGNhc2UsXHJcbiAgICAvLyB3ZSBjbGVhciBldmVyeXRoaW5nIGJleW9uZCB0aGUgZmlyc3QgdGhyZWUgYnl0ZXMuXHJcbiAgICBuID0gaXNOZWdhdGl2ZSA/IH4oMHhGRjAwMDAwMCB8IG4pIDogMHgwMEZGRkZGRiAmIG47XHJcblxyXG4gICAgaWYgKGEgPiAwKVxyXG4gICAgICAgIC8vIHJldHVybiBjb2xvcldpdGhBbHBoYVRvU3RyaW5nKCBuLCBhKTtcclxuICAgICAgICAvLyByZXR1cm4gcmdiVG9TdHJpbmcoIChuICYgMHhGRjAwMDApID4+IDE2LCAobiAmIDB4MDBGRjAwKSA+PiA4LCBuICYgMHgwMDAwRkYsIGEpO1xyXG4gICAgICAgIHJldHVybiBcIiNcIiArIG4udG9TdHJpbmcoMTYpLnBhZFN0YXJ0KCA2LCBcIjBcIikgKyBhLnRvU3RyaW5nKDE2KS5wYWRTdGFydCggMiwgXCIwXCIpO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgYSBuYW1lZCBjb2xvciB3aXRoIHRoZSBnaXZlbiB2YWx1ZSwgcmV0dXJuIHRoZSBjb2xvciBuYW1lXHJcbiAgICAgICAgbGV0IG5hbWUgPSByZXZlcnNlZENvbG9yTWFwLmdldCggbik7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUgPyBuYW1lIDogXCIjXCIgKyBuLnRvU3RyaW5nKDE2KS5wYWRTdGFydCggNiwgXCIwXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgY29sb3Igc2VwYXJhdGlvbiB2YWx1ZSB0byBhIENTUyBzdHJpbmcuIFNlcGFyYXRpb24gYXJlIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyXHJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gSW50ZWdlciBudW1iZXIgLTI1NSB0byAyNTUuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLiBOZWdhdGl2ZSBudW1iZXJzXHJcbiAqICAgICB3aWxsIGJlIGludmVydGVkLlxyXG4gKiAgIC0gRmxvYXRpbmcgbnVtYmVyIC0xLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIG11bHRpcGxpZWQgYnkgMTAwIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAgIEZsb2F0aW5nIG51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSByb3VuZGVkIGFuZCB0cmVhdGVkIGFzIGludGVnZXIgbnVtYmVycy4gTmVnYXRpdmVcclxuICogICAgIG51bWJlcnMgd2lsbCBiZSBpbnZlcnRlZC5cclxuICpcclxuICogQHBhcmFtIGMgQ29sb3Igc2VwYXJhdGlvbiB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIHNlcGFyYXRpb25Ub1N0cmluZyggYzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChjICE9PSAwICYmIGMgPiAtMSAmJiBjIDwgMSlcclxuICAgIHtcclxuICAgICAgICAvLyBpbnZlcnQgbmVnYXRpdmUgdmFsdWVcclxuICAgICAgICBpZiAoYyA8IDApXHJcbiAgICAgICAgICAgIGMgPSAxICsgYztcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoIGMgKiAxMDApICsgXCIlXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgLy8gY2xhbXAgdGhlIHZhbHVlIGJldHdlZW4gLTI1NSBhbmQgMjU1XHJcbiAgICAgICAgYyA9IGMgPiAyNTUgPyAyNTUgOiBjIDwgLTI1NSA/IC0yNTUgOiBjO1xyXG5cclxuICAgICAgICBpZiAoIU51bWJlci5pc0ludGVnZXIoYykpXHJcbiAgICAgICAgICAgIGMgPSBNYXRoLnJvdW5kKGMpO1xyXG5cclxuICAgICAgICAvLyBpbnZlcnQgbmVnYXRpdmUgdmFsdWVcclxuICAgICAgICBpZiAoYyA8IDApXHJcbiAgICAgICAgICAgIGMgPSAyNTUgKyBjO1xyXG5cclxuICAgICAgICByZXR1cm4gYy50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSB0byBhIENTUyBzdHJpbmcuIEFscGhhIGlzIHJlcHJlc2VudGVkIGFzIGEgbnVtYmVyXHJcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC5cclxuICovXHJcbmZ1bmN0aW9uIGFscGhhVG9TdHJpbmcoIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgLy8gaWYgYWxwaGEgaXMgbnVsbCBvciB1bmRlZmluZWQsIHNldCBpdCB0byAxXHJcbiAgICBpZiAoYSA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIjFcIjtcclxuXHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIG9mIGFscGhhIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAoYSA8IDApXHJcbiAgICAgICAgYSA9IC1hO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gMTAwLCBzZXQgaXQgdG8gMTsgb3RoZXJ3aXNlLFxyXG4gICAgcmV0dXJuIChhID4gMTAwID8gMSA6IGEgPiAxID8gYSAvIDEwMCA6IGEpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgcmVkLCBncmVlbiwgYmx1ZSBzZXBhcmF0aW9uIHZhbHVlcyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICogbWFzayB0byBhIENTUyBjb2xvciByZXByZXNlbnRhdGlvbi4gRWFjaCBjb2xvciBzZXBhcmF0aW9uIGNhbiBiZSByZXByZXNlbnRlZCBhcyBhIG51bWJlciB3aXRoXHJcbiAqIHRoZSBmb2xsb3dpbmcgbWVhbmluZzpcclxuICogICAtIEludGVnZXIgbnVtYmVyIC0yNTUgdG8gMjU1LiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZC4gTmVnYXRpdmUgbnVtYmVyc1xyXG4gKiAgICAgd2lsbCBiZSBpbnZlcnRlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAtMS4wIHRvIDEuMCBub24taW5jbHVzaXZlLCB3aGljaCBpcyBtdWx0aXBsaWVkIGJ5IDEwMCB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAqICAgICBGbG9hdGluZyBudW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgcm91bmRlZCBhbmQgdHJlYXRlZCBhcyBpbnRlZ2VyIG51bWJlcnMuIE5lZ2F0aXZlXHJcbiAqICAgICBudW1iZXJzIHdpbGwgYmUgaW52ZXJ0ZWQuXHJcbiAqXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICpcclxuICogQHBhcmFtIHIgUmVkIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBnIEdyZWVuIHNlcGFyYXRpb24gdmFsdWUuXHJcbiAqIEBwYXJhbSBiIEJsdWUgc2VwYXJhdGlvbiB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9TdHJpbmcoIHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7c2VwYXJhdGlvblRvU3RyaW5nKCByKX0sJHtzZXBhcmF0aW9uVG9TdHJpbmcoIGcpfSwke3NlcGFyYXRpb25Ub1N0cmluZyggYil9LCR7YWxwaGFUb1N0cmluZyggYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGEgbnVtYmVyIHJlcHJlc2VudGluZyBlaXRoZXIgc2F0dXJhdGlvbiBvciBsaWdodG5lc3MgaW4gdGhlIEhTTCBzY2hlbWUgdG8gcGVyY2VudGFnZTpcclxuICogICAtIFRoZSBzaWduIGlzIGlnbm9yZWQ7IHRoYXQgaXMsIG9ubHkgdGhlIGFic29sdXRlIHZhbHVlIGlzIGNvbnNpZGVyZWQuXHJcbiAqICAgLSBGbG9hdGluZyBudW1iZXIgMCB0byAxIGluY2x1c2l2ZSBhcmUgbXVsdGlwbGllZCBieSAxMDAgYW5kIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIEludGVnZXIgb3IgZmxvYXRpbmcgbnVtYmVyIDEgdG8gMTAwIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIEZsb2F0aW5nIG51bWJlcnMgd2lsbCBiZVxyXG4gKiAgICAgcm91bmRlZC4gTnVtYmVycyBiZXlvbmQgdGhpcyByYW5nZSB3aWxsIGJlIGNsYW1wZWQgdG8gMTAwLlxyXG4gKi9cclxuZnVuY3Rpb24gY29sb3JQZXJjZW50VG9TdHJpbmcoIG46IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBuZWdhdGl2ZSBhbmQgcG9zaXRpdmUgdmFsdWVzIGFyZSB0cmVhdGVkIGlkZW50aWNhbGx5LCBzbyBjb252ZXJ0IHRvIHBvc2l0aXZlXHJcbiAgICBpZiAobiA8IDApXHJcbiAgICAgICAgbiA9IC1uO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgYWxwaGEgdG8gYSBudW1iZXIgd2l0aCBhYnNvbHV0ZSB2YWx1ZSBsZXNzIHRoYW4gMSAoaWYgaXQgaXMgbm90IHlldCkuIElmIGFscGhhXHJcbiAgICAvLyBpcyBncmVhdGVyIHRoYW4gMTAwLCBjbGFtcCBpdC5cclxuICAgIHJldHVybiAobiA+IDEwMCA/IDEwMCA6IE1hdGgucm91bmQobiA8PSAxID8gbiAqIDEwMCA6IG4pKS50b1N0cmluZygpICsgXCIlXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBjb2xvciBzcGVjaWZpZWQgYXMgaHVlLXNhdHVyYXRpb24tbGlnaHRuZXNzIGNvbXBvbmVudHMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAqIHZhbHVlcyBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBUaGUgSHVlIGNvbXBvbmVudCBpcyB0cmVhdGVkIGFzIHRoZSBDU1MgYDxhbmdsZT5gIHR5cGUuIE51bWJlcnMgYXJlIGNvbnNpZGVyZWQgZGVncmVlcy5cclxuICpcclxuICogVGhlIFNhdHVyYXRpb24gYW5kIExpZ2h0bmVzcyBjb21wb25lbnRzIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRhZ2VzOlxyXG4gKiAgIC0gVGhlIHNpZ24gaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlIGFyZSBtdWx0aXBsaWVkIGJ5IDEwMCBhbmQgdHJlYXRlZCBhcyBwZXJjZW50YWdlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gRmxvYXRpbmcgbnVtYmVycyB3aWxsIGJlXHJcbiAqICAgICByb3VuZGVkLiBOdW1iZXJzIGJleW9uZCB0aGlzIHJhbmdlIHdpbGwgYmUgY2xhbXBlZCB0byAxMDAuXHJcbiAqXHJcbiAqIFRoZSBhbHBoYSBtYXNrIGNhbiBiZSBvbmUgb2YgdGhlIGZvbGxvd2luZzpcclxuICogICAtIEZsb2F0aW5nIG51bWJlciAwIHRvIDEgaW5jbHVzaXZlLlxyXG4gKiAgIC0gSW50ZWdlciBvciBmbG9hdGluZyBudW1iZXIgMSB0byAxMDAsIHdoaWNoIGlzIGRpdmlkZWQgYnkgMTAwLiBGbG9hdGluZyBudW1iZXJzIHdpbGwgYmVcclxuICogICAgIHJvdW5kZWQuIE51bWJlcnMgYmV5b25kIHRoaXMgcmFuZ2Ugd2lsbCBiZSBjbGFtcGVkLlxyXG4gKiAgIC0gVGhlIHNpZ24gb2YgYWxwaGEgaXMgaWdub3JlZDsgdGhhdCBpcywgb25seSB0aGUgYWJzb2x1dGUgdmFsdWUgaXMgY29uc2lkZXJlZC5cclxuICpcclxuICogQHBhcmFtIGggSHVlIGNvbXBvbmVudCBhcyBhbiBhbmdsZSB2YWx1ZS5cclxuICogQHBhcmFtIHMgU2F0dXJhdGlvbiBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKiBAcGFyYW0gbCBMaWdodG5lc3MgY29tcG9uZW50IGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaHNsVG9TdHJpbmcoIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyLCBsOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGBoc2xhKCR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcoaCl9LCR7Y29sb3JQZXJjZW50VG9TdHJpbmcocyl9LCR7Y29sb3JQZXJjZW50VG9TdHJpbmcobCl9LCR7YWxwaGFUb1N0cmluZyggYSl9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBjb2xvciBhbmQgdGhlIGFscGhhIG1hc2sgdG8gdGhlIENTUyBDb2xvciByZXByZXNlbnRhdGlvbi4gVGhpc1xyXG4gKiBtZXRob2Qgc2hvdWxkIGJlIHVzZWQgd2hlbiBkZWZpbmluZyBDU1MgY29sb3IgdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIFRoZSBjb2xvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgbnVtZXJpYyB2YWx1ZSBvciBhcyBhIHN0cmluZyBjb2xvciBuYW1lLlxyXG4gKlxyXG4gKiBUaGUgYWxwaGEgbWFzayBpcyBzcGVjaWZpZWQgYXMgYSBudW1iZXI6XHJcbiAqICAgLSBUaGUgc2lnbiBpcyBpZ25vcmVkOyB0aGF0IGlzLCBvbmx5IHRoZSBhYnNvbHV0ZSB2YWx1ZSBpcyBjb25zaWRlcmVkLlxyXG4gKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlciAxIHRvIDEwMCBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICogICAtIE51bWJlcnMgZ3JlYXRlciB0aGFuIDEwMCBhcmUgY2xhbXBlZCB0byAxMDA7XHJcbiAqXHJcbiAqIEBwYXJhbSBjIENvbG9yIHZhbHVlIGFzIGVpdGhlciBhIG51bWJlciBvciBhIG5hbWVkIGNvbG9yXHJcbiAqIEBwYXJhbSBhIEFscGhhIGNoYW5uZWwgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvcldpdGhBbHBoYVRvU3RyaW5nKCBjOiBudW1iZXIgfCBrZXlvZiBJTmFtZWRDb2xvcnMsIGE6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB0aGUgYWxwaGEgaXMgMCwgcmV0dXJuIHRyYW5zcGFyZW50IGNvbG9yXHJcbiAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCIjMDAwMFwiO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgY29sb3IgdG8gbnVtZXJpYyB2YWx1ZSAoaWYgaXQncyBub3QgYSBudW1iZXIgeWV0KS4gSWYgdGhlIGNvbG9yIHdhcyBnaXZlbiBhcyBhXHJcbiAgICAvLyBzdHJpbmcgdGhhdCB3ZSBjYW5ub3QgZmluZCBpbiB0aGUgQ29sb3JzIG9iamVjdCwgcmV0dXJuIHB1cmUgd2hpdGUuXHJcbiAgICBsZXQgbiA9IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gQ29sb3JzW2NdIDogYztcclxuICAgIGlmIChuID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiI0ZGRlwiO1xyXG5cclxuICAgIC8vIG5lZ2F0aXZlIGFuZCBwb3NpdGl2ZSB2YWx1ZXMgb2YgYWxwaGEgYXJlIHRyZWF0ZWQgaWRlbnRpY2FsbHksIHNvIGNvbnZlcnQgdG8gcG9zaXRpdmVcclxuICAgIGlmIChhIDwgMClcclxuICAgICAgICBhID0gLWE7XHJcblxyXG4gICAgLy8gY29udmVydCBhbHBoYSB0byBhIG51bWJlciB3aXRoIGFic29sdXRlIHZhbHVlIGxlc3MgdGhhbiAxIChpZiBpdCBpcyBub3QgeWV0KS4gSWYgYWxwaGFcclxuICAgIC8vIGlzIDEgb3IgMTAwLCB0aGVuIHNldCBpdCB0byAwIGJlY2F1c2UgMCBpbiB0aGUgY29sb3JOdW1iZXJUb1N0cmluZyBtZWFucyBcIm5vIGFscGhhXCIuXHJcbiAgICBhID0gYSA9PT0gMSB8fCBhID49IDEwMCA/IDAgOiBhID4gMSA/IGEgLyAxMDAgOiBhO1xyXG5cclxuICAgIC8vIG1ha2UgdGhlIG5ldyBhbHBoYVxyXG4gICAgcmV0dXJuIGNvbG9yTnVtYmVyVG9TdHJpbmcoIG4gPj0gMCA/IG4gKyBhIDogbiAtIGEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLiBJZiBhIHN0cmluZyB2YWx1ZSBpcyBpbiB0aGUgQ29sb3JzIG9iamVjdCB3ZVxyXG4gKiBuZWVkIHRvIGdldCBpdHMgbnVtYmVyIGFuZCBjb252ZXJ0IGl0IHRvIHRoZSByZ2JbYV0oKSBmdW5jdGlvbiBiZWNhdXNlIGl0IG1pZ2h0IGJlIGEgY3VzdG9tXHJcbiAqIGNvbG9yIG5hbWUgYWRkZWQgdmlhIElOYW1lZENvbG9ycyBtb2R1bGUgYXVnbWVudGF0aW9uLiBGb3IgbnVtZXJpYyB2YWx1ZXMsIHdlIGNoZWNrIGlmIHRoaXMgaXNcclxuICogb25lIG9mIHRoZSBwcmVkZWZpbmVkIGNvbG9ycyBhbmQgcmV0dXJuIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0NvbG9yPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbVN0cmluZzogdiA9PiBDb2xvcnNbdl0gPyBjb2xvck51bWJlclRvU3RyaW5nKCBDb2xvcnNbdl0pIDogdixcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvck51bWJlclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu78vKipcclxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgdHlwZXMgZm9yIHdvcmtpbmcgd2l0aCBDU1MgY29sb3JzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IElHZW5lcmljUHJveHkgfSBmcm9tIFwiLi9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRDb2xvcnMgaW50ZXJmYWNlIGxpc3RzIHRoZSBuYW1lcyBvZiBzdGFuZGFyZCBXZWIgY29sb3JzLiBJdCBpcyBuZWVkZWQgdG8gYWxsb3cgZGV2ZWxvcGVyc1xyXG4gKiB0byBhZGQgbmV3IG5hbWVkIGNvbG9ycyB0aHJvdWdoIG1vZHVsZSBhdWdtZW50YXRpb24gdGVjaG5pcXVlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRDb2xvcnNcclxue1xyXG4gICAgcmVhZG9ubHkgYmxhY2s6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2lsdmVyOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JheTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hpdGU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWFyb29uOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcmVkOiAgICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcHVycGxlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZnVjaHNpYTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JlZW46ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGltZTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xpdmU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgeWVsbG93OiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2eTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmx1ZTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGVhbDogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXF1YTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JhbmdlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYWxpY2VibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYW50aXF1ZXdoaXRlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXF1YW1hcmluZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYXp1cmU6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmVpZ2U6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmlzcXVlOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYmx1ZXZpb2xldDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYnJvd246ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgYnVybHl3b29kOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2FkZXRibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2hhcnRyZXVzZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY2hvY29sYXRlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29yYWw6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29ybmZsb3dlcmJsdWU6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY29ybnNpbGs6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY3JpbXNvbjogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgY3lhbjogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2JsdWU6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2N5YW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dvbGRlbnJvZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyYXk6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2dyZXk6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya2toYWtpOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya21hZ2VudGE6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29saXZlZ3JlZW46ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29yYW5nZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya29yY2hpZDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3JlZDogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NhbG1vbjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NlYWdyZWVuOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlYmx1ZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlZ3JheTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3NsYXRlZ3JleTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3R1cnF1b2lzZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGFya3Zpb2xldDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVlcHBpbms6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVlcHNreWJsdWU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGltZ3JheTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGltZ3JleTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZG9kZ2VyYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZmlyZWJyaWNrOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZmxvcmFsd2hpdGU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZm9yZXN0Z3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ2FpbnNib3JvOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ2hvc3R3aGl0ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ29sZDogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ29sZGVucm9kOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JlZW55ZWxsb3c6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZ3JleTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaG9uZXlkZXc6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaG90cGluazogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaW5kaWFucmVkOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaW5kaWdvOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaXZvcnk6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkga2hha2k6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF2ZW5kZXJibHVzaDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGF3bmdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGVtb25jaGlmZm9uOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRjb3JhbDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRjeWFuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmF5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmVlbjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRncmV5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRwaW5rOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzYWxtb246ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzZWFncmVlbjogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRza3libHVlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzbGF0ZWdyZXk6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHRzdGVlbGJsdWU6ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGltZWdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbGluZW46ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWFnZW50YTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtYXF1YW1hcmluZTogICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtcHVycGxlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc2VhZ3JlZW46ICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtc3ByaW5nZ3JlZW46ICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtdHVycXVvaXNlOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWlkbmlnaHRibHVlOiAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWludGNyZWFtOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbWlzdHlyb3NlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbW9jY2FzaW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgbmF2YWpvd2hpdGU6ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xkbGFjZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb2xpdmVkcmFiOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JhbmdlcmVkOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgb3JjaGlkOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZWdvbGRlbnJvZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZWdyZWVuOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZXR1cnF1b2lzZTogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFsZXZpb2xldHJlZDogICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGFwYXlhd2hpcDogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGVhY2hwdWZmOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGVydTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGluazogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcGx1bTogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcG93ZGVyYmx1ZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm9zeWJyb3duOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcm95YWxibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FkZGxlYnJvd246ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FsbW9uOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2FuZHlicm93bjogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2VhZ3JlZW46ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2Vhc2hlbGw6ICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2llbm5hOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2t5Ymx1ZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVncmF5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc2xhdGVncmV5OiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc25vdzogICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgc3RlZWxibHVlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGFuOiAgICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdGhpc3RsZTogICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdG9tYXRvOiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdHVycXVvaXNlOiAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgdmlvbGV0OiAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hlYXQ6ICAgICAgICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2hpdGVzbW9rZTogICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgeWVsbG93Z3JlZW46ICAgICAgICAgICAgbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgcmViZWNjYXB1cnBsZTogICAgICAgICAgbnVtYmVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbG9yUHJveHkgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgb2YgQ1NTIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIGZvclxyXG4gKiBzcGVjaWZ5aW5nIGNvbG9ycy4gVGhpcyBpbnRlcmZhY2UgaXMgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMgbGlrZTogcmdiKCksIGFscGhhKCksIGV0Yy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbG9yUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiY29sb3JcIj4ge307XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3lzdGVtQ29sb3JzIHR5cGUgZGVmaW5lcyBrZXl3b3JkcyBmb3Igc3lzdGVtIGNvbG9ycyB0aGF0IGFyZSB1c2VkIGluIGZvcmNlZC1jb2xvciBtb2RlXHJcbiAqIChidXQgY2FuIGJlIGFsc28gdXNlZCBpbiB0aGUgcmVndWxhciBtb2RlKS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN5c3RlbUNvbG9ycyA9IFwiQWN0aXZlVGV4dFwiIHwgXCJCdXR0b25GYWNlXCIgfCBcIkJ1dHRvblRleHRcIiB8IFwiQ2FudmFzXCIgfCBcIkNhbnZhc1RleHRcIiB8XHJcbiAgICBcIkZpZWxkXCIgfCBcIkZpZWxkVGV4dFwiIHwgXCJHcmF5VGV4dFwiIHwgXCJIaWdobGlnaHRcIiB8IFwiSGlnaGxpZ2h0VGV4dFwiIHwgXCJMaW5rVGV4dFwiIHwgXCJWaXNpdGVkVGV4dFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBrZXl3b3JkczogYW55IHN0cmluZyB0aGF0IGlzIGEgbmFtZSBvZiBhIHByb3BlcnR5IGluIHRoZSBJTmFtZWRDb2xvcnMgaW50ZXJmYWNlLlxyXG4gKiAtIG51bWJlcjpcclxuICogICAtIG5lZ2F0aXZlIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgaW52ZXJ0ZWQgY29sb3JzLlxyXG4gKiAgIC0gaW50ZWdlciBwYXJ0IG9mIHRoZSBudW1iZXIgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgLSBldmVyeXRoaW5nIGVsc2UgaXNcclxuICogICAgIGlnbm9yZWQuXHJcbiAqICAgLSBmbG9hdGluZyBwb2ludCBwYXJ0IG9mIHRoZSBudW1iZXIgaXMgdHJlYXRlZCBhcyBwZXJjZW50cyBvZiBhbHBoYSBjaGFubmVsLiBJZiB0aGVyZSBpcyBub1xyXG4gKiAgICAgZmxvYXRpbmcgcGFydCwgYWxwaGEgaXMgMS5cclxuICogLSBmdW5jdGlvbnM6IHJnYigpLCBoc2woKSwgYWxwaGEoKSBhcyB3ZWxsIGFzIGFueSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIElDb2xvclByb3h5IHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NDb2xvciA9IFwidHJhbnNwYXJlbnRcIiB8IFwiY3VycmVudGNvbG9yXCIgfCBrZXlvZiBJTmFtZWRDb2xvcnMgfCBudW1iZXIgfCBJQ29sb3JQcm94eSB8IFN5c3RlbUNvbG9ycztcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzOiBJTmFtZWRDb2xvcnMgPVxyXG57XHJcbiAgICBibGFjazogICAgICAgICAgICAgICAgICAweDAwMDAwMCxcclxuICAgIHNpbHZlcjogICAgICAgICAgICAgICAgIDB4YzBjMGMwLFxyXG4gICAgZ3JheTogICAgICAgICAgICAgICAgICAgMHg4MDgwODAsXHJcbiAgICB3aGl0ZTogICAgICAgICAgICAgICAgICAweGZmZmZmZixcclxuICAgIG1hcm9vbjogICAgICAgICAgICAgICAgIDB4ODAwMDAwLFxyXG4gICAgcmVkOiAgICAgICAgICAgICAgICAgICAgMHhmZjAwMDAsXHJcbiAgICBwdXJwbGU6ICAgICAgICAgICAgICAgICAweDgwMDA4MCxcclxuICAgIGZ1Y2hzaWE6ICAgICAgICAgICAgICAgIDB4ZmYwMGZmLFxyXG4gICAgZ3JlZW46ICAgICAgICAgICAgICAgICAgMHgwMDgwMDAsXHJcbiAgICBsaW1lOiAgICAgICAgICAgICAgICAgICAweDAwZmYwMCxcclxuICAgIG9saXZlOiAgICAgICAgICAgICAgICAgIDB4ODA4MDAwLFxyXG4gICAgeWVsbG93OiAgICAgICAgICAgICAgICAgMHhmZmZmMDAsXHJcbiAgICBuYXZ5OiAgICAgICAgICAgICAgICAgICAweDAwMDA4MCxcclxuICAgIGJsdWU6ICAgICAgICAgICAgICAgICAgIDB4MDAwMGZmLFxyXG4gICAgdGVhbDogICAgICAgICAgICAgICAgICAgMHgwMDgwODAsXHJcbiAgICBhcXVhOiAgICAgICAgICAgICAgICAgICAweDAwZmZmZixcclxuICAgIG9yYW5nZTogICAgICAgICAgICAgICAgIDB4ZmZhNTAwLFxyXG4gICAgYWxpY2VibHVlOiAgICAgICAgICAgICAgMHhmMGY4ZmYsXHJcbiAgICBhbnRpcXVld2hpdGU6ICAgICAgICAgICAweGZhZWJkNyxcclxuICAgIGFxdWFtYXJpbmU6ICAgICAgICAgICAgIDB4N2ZmZmQ0LFxyXG4gICAgYXp1cmU6ICAgICAgICAgICAgICAgICAgMHhmMGZmZmYsXHJcbiAgICBiZWlnZTogICAgICAgICAgICAgICAgICAweGY1ZjVkYyxcclxuICAgIGJpc3F1ZTogICAgICAgICAgICAgICAgIDB4ZmZlNGM0LFxyXG4gICAgYmxhbmNoZWRhbG1vbmQ6ICAgICAgICAgMHhmZmViY2QsXHJcbiAgICBibHVldmlvbGV0OiAgICAgICAgICAgICAweDhhMmJlMixcclxuICAgIGJyb3duOiAgICAgICAgICAgICAgICAgIDB4YTUyYTJhLFxyXG4gICAgYnVybHl3b29kOiAgICAgICAgICAgICAgMHhkZWI4ODcsXHJcbiAgICBjYWRldGJsdWU6ICAgICAgICAgICAgICAweDVmOWVhMCxcclxuICAgIGNoYXJ0cmV1c2U6ICAgICAgICAgICAgIDB4N2ZmZjAwLFxyXG4gICAgY2hvY29sYXRlOiAgICAgICAgICAgICAgMHhkMjY5MWUsXHJcbiAgICBjb3JhbDogICAgICAgICAgICAgICAgICAweGZmN2Y1MCxcclxuICAgIGNvcm5mbG93ZXJibHVlOiAgICAgICAgIDB4NjQ5NWVkLFxyXG4gICAgY29ybnNpbGs6ICAgICAgICAgICAgICAgMHhmZmY4ZGMsXHJcbiAgICBjcmltc29uOiAgICAgICAgICAgICAgICAweGRjMTQzYyxcclxuICAgIGN5YW46ICAgICAgICAgICAgICAgICAgIDB4MDBmZmZmLFxyXG4gICAgZGFya2JsdWU6ICAgICAgICAgICAgICAgMHgwMDAwOGIsXHJcbiAgICBkYXJrY3lhbjogICAgICAgICAgICAgICAweDAwOGI4YixcclxuICAgIGRhcmtnb2xkZW5yb2Q6ICAgICAgICAgIDB4Yjg4NjBiLFxyXG4gICAgZGFya2dyYXk6ICAgICAgICAgICAgICAgMHhhOWE5YTksXHJcbiAgICBkYXJrZ3JlZW46ICAgICAgICAgICAgICAweDAwNjQwMCxcclxuICAgIGRhcmtncmV5OiAgICAgICAgICAgICAgIDB4YTlhOWE5LFxyXG4gICAgZGFya2toYWtpOiAgICAgICAgICAgICAgMHhiZGI3NmIsXHJcbiAgICBkYXJrbWFnZW50YTogICAgICAgICAgICAweDhiMDA4YixcclxuICAgIGRhcmtvbGl2ZWdyZWVuOiAgICAgICAgIDB4NTU2YjJmLFxyXG4gICAgZGFya29yYW5nZTogICAgICAgICAgICAgMHhmZjhjMDAsXHJcbiAgICBkYXJrb3JjaGlkOiAgICAgICAgICAgICAweDk5MzJjYyxcclxuICAgIGRhcmtyZWQ6ICAgICAgICAgICAgICAgIDB4OGIwMDAwLFxyXG4gICAgZGFya3NhbG1vbjogICAgICAgICAgICAgMHhlOTk2N2EsXHJcbiAgICBkYXJrc2VhZ3JlZW46ICAgICAgICAgICAweDhmYmM4ZixcclxuICAgIGRhcmtzbGF0ZWJsdWU6ICAgICAgICAgIDB4NDgzZDhiLFxyXG4gICAgZGFya3NsYXRlZ3JheTogICAgICAgICAgMHgyZjRmNGYsXHJcbiAgICBkYXJrc2xhdGVncmV5OiAgICAgICAgICAweDJmNGY0ZixcclxuICAgIGRhcmt0dXJxdW9pc2U6ICAgICAgICAgIDB4MDBjZWQxLFxyXG4gICAgZGFya3Zpb2xldDogICAgICAgICAgICAgMHg5NDAwZDMsXHJcbiAgICBkZWVwcGluazogICAgICAgICAgICAgICAweGZmMTQ5MyxcclxuICAgIGRlZXBza3libHVlOiAgICAgICAgICAgIDB4MDBiZmZmLFxyXG4gICAgZGltZ3JheTogICAgICAgICAgICAgICAgMHg2OTY5NjksXHJcbiAgICBkaW1ncmV5OiAgICAgICAgICAgICAgICAweDY5Njk2OSxcclxuICAgIGRvZGdlcmJsdWU6ICAgICAgICAgICAgIDB4MWU5MGZmLFxyXG4gICAgZmlyZWJyaWNrOiAgICAgICAgICAgICAgMHhiMjIyMjIsXHJcbiAgICBmbG9yYWx3aGl0ZTogICAgICAgICAgICAweGZmZmFmMCxcclxuICAgIGZvcmVzdGdyZWVuOiAgICAgICAgICAgIDB4MjI4YjIyLFxyXG4gICAgZ2FpbnNib3JvOiAgICAgICAgICAgICAgMHhkY2RjZGMsXHJcbiAgICBnaG9zdHdoaXRlOiAgICAgICAgICAgICAweGY4ZjhmZixcclxuICAgIGdvbGQ6ICAgICAgICAgICAgICAgICAgIDB4ZmZkNzAwLFxyXG4gICAgZ29sZGVucm9kOiAgICAgICAgICAgICAgMHhkYWE1MjAsXHJcbiAgICBncmVlbnllbGxvdzogICAgICAgICAgICAweGFkZmYyZixcclxuICAgIGdyZXk6ICAgICAgICAgICAgICAgICAgIDB4ODA4MDgwLFxyXG4gICAgaG9uZXlkZXc6ICAgICAgICAgICAgICAgMHhmMGZmZjAsXHJcbiAgICBob3RwaW5rOiAgICAgICAgICAgICAgICAweGZmNjliNCxcclxuICAgIGluZGlhbnJlZDogICAgICAgICAgICAgIDB4Y2Q1YzVjLFxyXG4gICAgaW5kaWdvOiAgICAgICAgICAgICAgICAgMHg0YjAwODIsXHJcbiAgICBpdm9yeTogICAgICAgICAgICAgICAgICAweGZmZmZmMCxcclxuICAgIGtoYWtpOiAgICAgICAgICAgICAgICAgIDB4ZjBlNjhjLFxyXG4gICAgbGF2ZW5kZXI6ICAgICAgICAgICAgICAgMHhlNmU2ZmEsXHJcbiAgICBsYXZlbmRlcmJsdXNoOiAgICAgICAgICAweGZmZjBmNSxcclxuICAgIGxhd25ncmVlbjogICAgICAgICAgICAgIDB4N2NmYzAwLFxyXG4gICAgbGVtb25jaGlmZm9uOiAgICAgICAgICAgMHhmZmZhY2QsXHJcbiAgICBsaWdodGJsdWU6ICAgICAgICAgICAgICAweGFkZDhlNixcclxuICAgIGxpZ2h0Y29yYWw6ICAgICAgICAgICAgIDB4ZjA4MDgwLFxyXG4gICAgbGlnaHRjeWFuOiAgICAgICAgICAgICAgMHhlMGZmZmYsXHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogICAweGZhZmFkMixcclxuICAgIGxpZ2h0Z3JheTogICAgICAgICAgICAgIDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRncmVlbjogICAgICAgICAgICAgMHg5MGVlOTAsXHJcbiAgICBsaWdodGdyZXk6ICAgICAgICAgICAgICAweGQzZDNkMyxcclxuICAgIGxpZ2h0cGluazogICAgICAgICAgICAgIDB4ZmZiNmMxLFxyXG4gICAgbGlnaHRzYWxtb246ICAgICAgICAgICAgMHhmZmEwN2EsXHJcbiAgICBsaWdodHNlYWdyZWVuOiAgICAgICAgICAweDIwYjJhYSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogICAgICAgICAgIDB4ODdjZWZhLFxyXG4gICAgbGlnaHRzbGF0ZWdyYXk6ICAgICAgICAgMHg3Nzg4OTksXHJcbiAgICBsaWdodHNsYXRlZ3JleTogICAgICAgICAweDc3ODg5OSxcclxuICAgIGxpZ2h0c3RlZWxibHVlOiAgICAgICAgIDB4YjBjNGRlLFxyXG4gICAgbGlnaHR5ZWxsb3c6ICAgICAgICAgICAgMHhmZmZmZTAsXHJcbiAgICBsaW1lZ3JlZW46ICAgICAgICAgICAgICAweDMyY2QzMixcclxuICAgIGxpbmVuOiAgICAgICAgICAgICAgICAgIDB4ZmFmMGU2LFxyXG4gICAgbWFnZW50YTogICAgICAgICAgICAgICAgMHhmZjAwZmYsXHJcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAgICAgICAweDY2Y2RhYSxcclxuICAgIG1lZGl1bWJsdWU6ICAgICAgICAgICAgIDB4MDAwMGNkLFxyXG4gICAgbWVkaXVtb3JjaGlkOiAgICAgICAgICAgMHhiYTU1ZDMsXHJcbiAgICBtZWRpdW1wdXJwbGU6ICAgICAgICAgICAweDkzNzBkYixcclxuICAgIG1lZGl1bXNlYWdyZWVuOiAgICAgICAgIDB4M2NiMzcxLFxyXG4gICAgbWVkaXVtc2xhdGVibHVlOiAgICAgICAgMHg3YjY4ZWUsXHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogICAgICAweDAwZmE5YSxcclxuICAgIG1lZGl1bXR1cnF1b2lzZTogICAgICAgIDB4NDhkMWNjLFxyXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAgICAgICAgMHhjNzE1ODUsXHJcbiAgICBtaWRuaWdodGJsdWU6ICAgICAgICAgICAweDE5MTk3MCxcclxuICAgIG1pbnRjcmVhbTogICAgICAgICAgICAgIDB4ZjVmZmZhLFxyXG4gICAgbWlzdHlyb3NlOiAgICAgICAgICAgICAgMHhmZmU0ZTEsXHJcbiAgICBtb2NjYXNpbjogICAgICAgICAgICAgICAweGZmZTRiNSxcclxuICAgIG5hdmFqb3doaXRlOiAgICAgICAgICAgIDB4ZmZkZWFkLFxyXG4gICAgb2xkbGFjZTogICAgICAgICAgICAgICAgMHhmZGY1ZTYsXHJcbiAgICBvbGl2ZWRyYWI6ICAgICAgICAgICAgICAweDZiOGUyMyxcclxuICAgIG9yYW5nZXJlZDogICAgICAgICAgICAgIDB4ZmY0NTAwLFxyXG4gICAgb3JjaGlkOiAgICAgICAgICAgICAgICAgMHhkYTcwZDYsXHJcbiAgICBwYWxlZ29sZGVucm9kOiAgICAgICAgICAweGVlZThhYSxcclxuICAgIHBhbGVncmVlbjogICAgICAgICAgICAgIDB4OThmYjk4LFxyXG4gICAgcGFsZXR1cnF1b2lzZTogICAgICAgICAgMHhhZmVlZWUsXHJcbiAgICBwYWxldmlvbGV0cmVkOiAgICAgICAgICAweGRiNzA5MyxcclxuICAgIHBhcGF5YXdoaXA6ICAgICAgICAgICAgIDB4ZmZlZmQ1LFxyXG4gICAgcGVhY2hwdWZmOiAgICAgICAgICAgICAgMHhmZmRhYjksXHJcbiAgICBwZXJ1OiAgICAgICAgICAgICAgICAgICAweGNkODUzZixcclxuICAgIHBpbms6ICAgICAgICAgICAgICAgICAgIDB4ZmZjMGNiLFxyXG4gICAgcGx1bTogICAgICAgICAgICAgICAgICAgMHhkZGEwZGQsXHJcbiAgICBwb3dkZXJibHVlOiAgICAgICAgICAgICAweGIwZTBlNixcclxuICAgIHJvc3licm93bjogICAgICAgICAgICAgIDB4YmM4ZjhmLFxyXG4gICAgcm95YWxibHVlOiAgICAgICAgICAgICAgMHg0MTY5ZTEsXHJcbiAgICBzYWRkbGVicm93bjogICAgICAgICAgICAweDhiNDUxMyxcclxuICAgIHNhbG1vbjogICAgICAgICAgICAgICAgIDB4ZmE4MDcyLFxyXG4gICAgc2FuZHlicm93bjogICAgICAgICAgICAgMHhmNGE0NjAsXHJcbiAgICBzZWFncmVlbjogICAgICAgICAgICAgICAweDJlOGI1NyxcclxuICAgIHNlYXNoZWxsOiAgICAgICAgICAgICAgIDB4ZmZmNWVlLFxyXG4gICAgc2llbm5hOiAgICAgICAgICAgICAgICAgMHhhMDUyMmQsXHJcbiAgICBza3libHVlOiAgICAgICAgICAgICAgICAweDg3Y2VlYixcclxuICAgIHNsYXRlYmx1ZTogICAgICAgICAgICAgIDB4NmE1YWNkLFxyXG4gICAgc2xhdGVncmF5OiAgICAgICAgICAgICAgMHg3MDgwOTAsXHJcbiAgICBzbGF0ZWdyZXk6ICAgICAgICAgICAgICAweDcwODA5MCxcclxuICAgIHNub3c6ICAgICAgICAgICAgICAgICAgIDB4ZmZmYWZhLFxyXG4gICAgc3ByaW5nZ3JlZW46ICAgICAgICAgICAgMHgwMGZmN2YsXHJcbiAgICBzdGVlbGJsdWU6ICAgICAgICAgICAgICAweDQ2ODJiNCxcclxuICAgIHRhbjogICAgICAgICAgICAgICAgICAgIDB4ZDJiNDhjLFxyXG4gICAgdGhpc3RsZTogICAgICAgICAgICAgICAgMHhkOGJmZDgsXHJcbiAgICB0b21hdG86ICAgICAgICAgICAgICAgICAweGZmNjM0NyxcclxuICAgIHR1cnF1b2lzZTogICAgICAgICAgICAgIDB4NDBlMGQwLFxyXG4gICAgdmlvbGV0OiAgICAgICAgICAgICAgICAgMHhlZTgyZWUsXHJcbiAgICB3aGVhdDogICAgICAgICAgICAgICAgICAweGY1ZGViMyxcclxuICAgIHdoaXRlc21va2U6ICAgICAgICAgICAgIDB4ZjVmNWY1LFxyXG4gICAgeWVsbG93Z3JlZW46ICAgICAgICAgICAgMHg5YWNkMzIsXHJcbiAgICByZWJlY2NhcHVycGxlOiAgICAgICAgICAweDY2MzM5OSxcclxufTtcclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0ICogYXMgRm9udEZhY2VUeXBlcyBmcm9tIFwiLi9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtvYmoyc3RyfSBmcm9tIFwiLi9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7Y2FtZWxUb0Rhc2gsIHZhbDJzdHIsIENzc1BlcmNlbnRNYXRoLCBDc3NBbmdsZU1hdGgsIGFycjJzdHIsIENzc051bWJlck1hdGh9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGZvbnQgZmFjZSBkZWZpbml0aW9uIG9iamVjdCB0byB0aGUgQ1NTIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRGYWNlVG9TdHJpbmcoIGZvbnRmYWNlOiBGb250RmFjZVR5cGVzLklGb250RmFjZSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFmb250ZmFjZSB8fCAhZm9udGZhY2UuZm9udEZhbWlseSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBsZXQgcyA9IFwie1wiO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIGZvbnRmYWNlKVxyXG4gICAge1xyXG4gICAgICAgIHMgKz0gYCR7Y2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0cmV0Y2hUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTdHJldGNoX0ZvbnRGYWNlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFN0eWxlVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3R5bGVfRm9udEZhY2VUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBvYmxpcXVlICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodil9YCxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gYG9ibGlxdWUgJHthcnIyc3RyKCB2LCBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyl9YFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFdlaWdodFRvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodF9Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc051bWJlck1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udFNyY1RvU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNyY19Gb250RmFjZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21Bbnk6IGZvbnRTaW5nbGVTcmNUb1N0cmluZyxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBmb250U2luZ2xlU3JjVG9TdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wibG9jYWxcIiwgdiA9PiBgbG9jYWwoJHt2fSlgXSxcclxuICAgICAgICBbXCJ1cmxcIiwgdiA9PiBgdXJsKCR7dn0pYF0sXHJcbiAgICAgICAgW1wiZm9ybWF0XCIsIHYgPT4gYGZvcm1hdCgke2ZvbnRGb3JtYXRUb1N0cmluZyh2KX0pYF1cclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRGb3JtYXRUb1N0cmluZyggdmFsOiBGb250RmFjZVR5cGVzLkZvbnRTcmNfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tU3RyaW5nOiB2ID0+IGBcXFwiJHt2fVxcXCJgLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7vy8qKlxyXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyB0eXBlcyB1c2VkIHRvIGRlZmluZSBDU1MgYDxpbWFnZT5gIHR5cGUgYW5kIHJlbGF0ZWQgZnVuY3Rpb25zLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7SVVybFByb3h5LCBFeHRlbmRlZCwgQ3NzTnVtYmVyLCBDc3NBbmdsZSwgTnVtYmVyQmFzZSwgQ3NzTGVuZ3RoLCBDc3NQb3NpdGlvbiwgSUdlbmVyaWNQcm94eX0gZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuaW1wb3J0IHtDc3NDb2xvcn0gZnJvbSBcIi4vQ29sb3JUeXBlc1wiO1xyXG5pbXBvcnQgeyBFeHRlbnRLZXl3b3JkIH0gZnJvbSBcIi4vU3R5bGVUeXBlc1wiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSW1hZ2VQcm94eSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSBvZiBDU1MgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgZm9yXHJcbiAqIHNlY2lmeWluZyBpbWFnZXMuIFRoaXMgaW50ZXJmYWNlIGlzIHJldHVybmVkIGZyb20gZnVuY3Rpb25zIGxpa2U6IGxpbmVhckdyYWRpZW50KCksIHBhaW50KCksXHJcbiAqIGVsZW1lbnQoKSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8XCJpbWFnZVwiPiB7fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NJbWFnZSB0eXBlIHJlcHJlc2VudHMgYSB0eXBlIHVzZWQgZm9yIENTUyBwcm9wZXJ0aWVzIHRoYXQgYWNjZXB0IHRoZSBgPGltYWdlPmAgdHlwZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENzc0ltYWdlID0gSVVybFByb3h5IHwgSUltYWdlUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBWYWx1ZSBvZiBhIGhpbnQgZm9yIHRoZSBgPGdyYWRpZW50PmAgQ1NTIGZ1bmN0aW9ucyBpcyBleHByZXNzZWQgYXMgYSBDU1MgbnVtZXJpYyB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50SGludFZhbHVlID0gRXh0ZW5kZWQ8TnVtYmVyQmFzZTxhbnk+PjtcclxuXHJcbi8qKlxyXG4gKiBDb2xvciBoaW50IGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMgaXMgZXhwcmVzc2VkIGFzIGEgc2luZ2xlLWl0ZW0gYXJyYXkgdGhhdFxyXG4gKiBjb250YWlucyBhIENTUyBudW1lcmljIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JhZGllbnRIaW50ID0gW0dyYWRpZW50SGludFZhbHVlXTtcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY29sb3Igc3RvcCB3aXRoIGluZGljYXRpb24gb2YgbGVuZ3RoIGZvciB0aGUgYDxncmFkaWVudD5gIENTUyBmdW5jdGlvbnMuIFRoZSBmaXJzdFxyXG4gKiBpdGVtIGlzIHRoZSBjb2xvciB2YWx1ZSwgdGhlIHNlY29uZCBpdGVtIGlzIHRoZSBwb3NpdGlvbiBvZiB3aGVyZSB0aGUgY29sb3Igc3RhcnRzIGFuZCB0aGVcclxuICogb3B0aW9uYWwgdGhpcmQgaXRlbSBpcyB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIGNvbG9yIHN0b3BzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JhZGllbnRDb2xvckFuZExlbmd0aCA9IFtFeHRlbmRlZDxDc3NDb2xvcj4sIEdyYWRpZW50SGludFZhbHVlLCBHcmFkaWVudEhpbnRWYWx1ZT9dO1xyXG5cclxuLyoqXHJcbiAqIENvbG9yIHN0b3AgZm9yIHRoZSBgPGdyYWRpZW50PmAgQ1NTIGZ1bmN0aW9ucyBpcyBleHByZXNzZWQgYXMgZWl0aGVyIGEgc2luZ2xlIGNvbG9yIHZhbHVlXHJcbiAqIG9yIGFuIGFycmF5IG9mIHR3byBvciB0aHJlZSBpdGVtcy4gSW4gdGhlIGxhdHRlciBjYXNlLCB0aGUgZmlyc3QgaXRlbSBpcyB0aGUgY29sb3IgdmFsdWUsIHRoZVxyXG4gKiBzZWNvbmQgaXRlbSBpcyB0aGUgcG9zaXRpb24gb2Ygd2hlcmUgdGhlIGNvbG9yIHN0YXJ0cyBhbmQgdGhlIG9wdGlvbmFsIHRoaXJkIGl0ZW0gaXMgdGhlXHJcbiAqIHBvc2l0aW9uIHdoZXJlIHRoZSBjb2xvciBzdG9wcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdyYWRpZW50U3RvcCA9IEV4dGVuZGVkPENzc0NvbG9yPiB8IEdyYWRpZW50Q29sb3JBbmRMZW5ndGg7XHJcblxyXG4vKipcclxuICogVHlwZSByZXByZXNlbnRpbmcgZWl0aGVyIGNvbG9yIHN0b3Agb3IgY29sb3IgaGludCBmb3IgdGhlIGA8Z3JhZGllbnQ+YCBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JhZGllbnRTdG9wT3JIaW50ID0gR3JhZGllbnRTdG9wIHwgR3JhZGllbnRIaW50O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGVudW1lcmF0ZXMgcG9zc2libGUgdmFsdWVzIG9mIHRoZSBzaWRlLW9yLWNvcm5lciBmb3IgdGhlIGBsaW5lYXItZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTGluZWFyR3JhZFNpZGVPckNvcm5lciA9IFwiYm90dG9tXCIgfCBcImxlZnRcIiB8IFwidG9wXCIgfCBcInJpZ2h0XCIgfFxyXG4gICAgXCJ0b3AgbGVmdFwiIHwgXCJ0b3AgcmlnaHRcIiB8IFwiYm90dG9tIHJpZ2h0XCIgfCBcImJvdHRvbSBsZWZ0XCIgfFxyXG4gICAgXCJsZWZ0IHRvcFwiIHwgXCJyaWdodCB0b3BcIiB8IFwibGVmdCBib3R0b21cIiB8IFwicmlnaHQgYm90dG9tXCI7XHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IHJlcHJlc2VudHMgdGhlIGFuZ2xlIG9mIHRoZSBgbGluZWFyLWdyYWRpZW50KClgIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIExpbmVhckdyYWRBbmdsZSA9IEV4dGVuZGVkPENzc0FuZ2xlPiB8IExpbmVhckdyYWRTaWRlT3JDb3JuZXI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBzaGFwZSBmb3IgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgQ1NTIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmFkaWFsR3JhZGllbnRTaGFwZSA9IFwiY2lyY2xlXCIgfCBcImVsbGlwc2VcIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBzaXplIGZvciB0aGUgYHJhZGlhbC1ncmFkaWVudCgpYCBDU1MgZnVuY3Rpb24uIEl0IGlzIGEgc2luZ2xlIExlbmd0aCB2YWx1ZVxyXG4gKiBmb3IgY2lyY2xlIGFuZCB0d28tZWxlbWVudCB0dXBsZSBvZiBDc3NMZW5ndGggdmFsdWVzIGZvciBlbGxpcHNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmFkaWFsR3JhZGllbnRTaXplID0gRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiB8IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIHBhcmFtZXRlcnMgZm9yIHRoZSBgY3Jvc3MtZmFkZSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDcm9zc0ZhZGVQYXJhbSA9IEV4dGVuZGVkPENzc0ltYWdlPiB8IFtFeHRlbmRlZDxDc3NJbWFnZT4sIEV4dGVuZGVkPENzc051bWJlcj5dO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElHcmFkaWVudCBpbnRlcmZhY2UgcmVwcmVzZW50cyBwcm9wZXJ0aWVzIHRoYXQgcmV0dXJuIGludGVyZmFjZXMgcmVwcmVzZW50aW5nIGA8Z3JhZGllbnQ+YFxyXG4gKiBDU1MgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JhZGllbnRcclxue1xyXG4gICAgcmVhZG9ubHkgbGluZWFyOiBJTGluZWFyR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSByZXBlYXRpbmdMaW5lYXI6IElMaW5lYXJHcmFkaWVudDtcclxuICAgIHJlYWRvbmx5IHJhZGlhbDogSVJhZGlhbEdyYWRpZW50O1xyXG4gICAgcmVhZG9ubHkgcmVwZWF0aW5nUmFkaWFsOiBJUmFkaWFsR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSBjb25pYzogSUNvbmljR3JhZGllbnQ7XHJcbiAgICByZWFkb25seSByZXBlYXRpbmdDb25pYzogSUNvbmljR3JhZGllbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTGluZWFyR3JhZGllbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGVpdGhlciBgbGluZXItZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctbGluZXItZ3JhZGllbnRgIENTUyBmdW5jdGlvbi4gVGhlIGludGVyZmFjZSBhbGxvd3Mgc3BlY2lmeWluZyBhbiBhbmdsZSBwYXJhbWV0ZXJcclxuICogYmVmb3JlIGludm9jYXRpb24gdGhhdCBhY2NlcHRzIGEgbGlzdCBvZiBjb2xvciBzdG9wcyBhbmQgaGludHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMaW5lYXJHcmFkaWVudFxyXG57XHJcbiAgICAoLi4uc3RvcHNPckhpbnRzOiBHcmFkaWVudFN0b3BPckhpbnRbXSk6IElJbWFnZVByb3h5O1xyXG5cdHRvKCBhbmdsZTogTGluZWFyR3JhZEFuZ2xlKTogSUxpbmVhckdyYWRpZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJhZGlhbEdyYWRpZW50IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBlaXRoZXIgYHJhZGlhbC1ncmFkaWVudGAgb3JcclxuICogYHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnRgIENTUyBmdW5jdGlvbi4gVGhlIGludGVyZmFjZSBhbGxvd3Mgc3BlY2lmeWluZyB0aGUgc2hhcGUsIHNpemUgYW5kXHJcbiAqIGV4dGVudCBwYXJhbWV0ZXJzIGJlZm9yZSBpbnZvY2F0aW9uIHRoYXQgYWNjZXB0cyBhIGxpc3Qgb2YgY29sb3Igc3RvcHMgYW5kIGhpbnRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUmFkaWFsR3JhZGllbnRcclxue1xyXG4gICAgKC4uLnN0b3BzT3JIaW50czogR3JhZGllbnRTdG9wT3JIaW50W10pOiBJSW1hZ2VQcm94eTtcclxuXHRjaXJjbGUoIHNpemVPckV4dGVudD86IEV4dGVuZGVkPENzc0xlbmd0aD4gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPik6IElSYWRpYWxHcmFkaWVudDtcclxuXHRlbGxpcHNlKCBzaXplT3JFeHRlbnQ/OiBbRXh0ZW5kZWQ8Q3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl0gfCBFeHRlbmRlZDxFeHRlbnRLZXl3b3JkPik6IElSYWRpYWxHcmFkaWVudDtcclxuXHRleHRlbnQoIGV4dGVudDogRXh0ZW5kZWQ8RXh0ZW50S2V5d29yZD4pOiBJUmFkaWFsR3JhZGllbnQ7XHJcblx0YXQoIHBvczogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogSVJhZGlhbEdyYWRpZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbmljR3JhZGllbnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmdW5jdGlvbiB0aGF0IHByb2R1Y2VzIGVpdGhlciBgY29uaWMtZ3JhZGllbnRgIG9yXHJcbiAqIGByZXBlYXRpbmctY29uaWMtZ3JhZGllbnRgIENTUyBmdW5jdGlvbi4gVGhlIGludGVyZmFjZSBhbGxvd3Mgc3BlY2lmeWluZyB0aGUgYGZyb21gIGFuZFxyXG4gKiBgcG9zaXRpb25gIHBhcmFtZXRlcnMgYmVmb3JlIGludm9jYXRpb24gdGhhdCBhY2NlcHRzIGEgbGlzdCBvZiBjb2xvciBzdG9wcyBhbmQgaGludHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb25pY0dyYWRpZW50XHJcbntcclxuICAgICguLi5zdG9wc09ySGludHM6IEdyYWRpZW50U3RvcE9ySGludFtdKTogSUltYWdlUHJveHk7XHJcblx0ZnJvbSggYW5nbGU6IEV4dGVuZGVkPENzc0FuZ2xlPik6IElDb25pY0dyYWRpZW50O1xyXG5cdGF0KCBwb3M6IEV4dGVuZGVkPENzc1Bvc2l0aW9uPik6IElDb25pY0dyYWRpZW50O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCAqIGFzIE1lZGlhVHlwZXMgZnJvbSBcIi4vTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7dmFsMnN0ciwgY2FtZWxUb0Rhc2gsIGFycjJzdHJ9IGZyb20gXCIuL1V0aWxGdW5jc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhc3BlY3RSYXRpb1RvU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuQXNwZWN0UmF0aW9GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbFswXSArIFwiL1wiICsgdmFsWzFdO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxlbmd0aEZlYXR1cmVUb1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkxlbmd0aEZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJweFwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc29sdXRpb25GZWF0dXJlVG9TdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5SZXNvbHV0aW9uRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcImRwaVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbnR5cGUgY29udmVydEZ1bmNUeXBlPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldCA9IGFueT4gPSAodmFsOiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhRmVhdHVyZUluZm8gcmVwcmVzZW50cyBpbmZvcm1hdGlvbiB0aGF0IHdlIGtlZXAgZm9yIHN0eWxlIHByb3BlcnRpZXNcclxuICovXHJcbnR5cGUgTWVkaWFGZWF0dXJlSW5mbzxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gY29udmVydEZ1bmNUeXBlPEs+IHwgYm9vbGVhbiB8XHJcbiAgICB7XHJcbiAgICAgICAgLyoqIEZ1bmN0aW9uIHRoYXQgY29udmVydHMgZnJvbSB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbiAgICAgICAgY29udmVydD86IGNvbnZlcnRGdW5jVHlwZTxLPjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgZGVmaW5lZCwgaW5kaWNhdGVzIHRoZSB2YWx1ZSwgd2hpY2ggd2Ugd2lsbCBub3QgcHV0IGludG8gQ1NTIHN0cmluZy4gVGhpcyBpcyBuZWVkZWQgZm9yXHJcbiAgICAgICAgICogbWVkaWEgZmVhdHVyZXMgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIHdpdGhvdXQgdGhlIHZhbHVlLCBlLmcuIGNvbG9yIG9yIGNvbG9yLWluZGV4LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT86IE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0W0tdO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgZmVhdHVyZSBpcyBhIFwicmFuZ2VcIiBmZWF0dXJlOyB0aGF0IGlzLCBjYW4gYmUgdXNlZCBpbiBhblxyXG4gICAgICAgICAqIGV4cHJlc3Npb24gKGEgPD0gZmVhdHVyZSA8PSBiKS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpc1JhbmdlPzogYm9vbGVhbjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBzdHJpbmcgfCBNZWRpYVR5cGVzLk1lZGlhUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHF1ZXJ5LCB7XHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlTWVkaWFRdWVyeVRvU3RyaW5nLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBtZWRpYSBxdWVyeSBvYmplY3QgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVNZWRpYVF1ZXJ5VG9TdHJpbmcoIHF1ZXJ5OiBNZWRpYVR5cGVzLlNpbmdsZU1lZGlhUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbWVkaWFUeXBlID0gcXVlcnkuJG1lZGlhVHlwZTtcclxuICAgIGxldCBvbmx5ID0gcXVlcnkuJG9ubHk7XHJcbiAgICBsZXQgbmVnYXRlID0gcXVlcnkuJG5lZ2F0ZTtcclxuXHJcbiAgICBsZXQgaXRlbXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobWVkaWFUeXBlKVxyXG4gICAgICAgIGl0ZW1zLnB1c2goIChvbmx5ID8gXCJvbmx5IFwiIDogXCJcIikgKyBtZWRpYVR5cGUpO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIHF1ZXJ5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJFwiKSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChxdWVyeVtwcm9wTmFtZV0pXHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goIGAoJHttZWRpYUZlYXR1cmVUb1N0cmluZyggcHJvcE5hbWUsIHF1ZXJ5W3Byb3BOYW1lXSl9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuZWdhdGUgPyBcIm5vdCBcIiA6IFwiXCJ9JHtpdGVtcy5qb2luKFwiIGFuZCBcIil9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIGZlYXR1cmUgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUZlYXR1cmVUb1N0cmluZyggZmVhdHVyZU5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZlYXR1cmVOYW1lIHx8IHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBcclxuICAgIGxldCBpbmZvOiBNZWRpYUZlYXR1cmVJbmZvID0gbWVkaWFGZWF0dXJlc1tmZWF0dXJlTmFtZV07XHJcblxyXG4gICAgbGV0IHJlYWxGZWF0dXJlTmFtZSA9IGNhbWVsVG9EYXNoKCBmZWF0dXJlTmFtZSk7XHJcblxyXG4gICAgLy8gaWYgZGVmYXVsdFZhbHVlIGlzIGRlZmluZWQgYW5kIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBlcXVhbCB0byBpdCwgbm8gdmFsdWUgc2hvdWxkIGJlIHJldHVybmVkLlxyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5kZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcFZhbCA9PT0gZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBcIlwiIDogcmVhbEZlYXR1cmVOYW1lO1xyXG5cclxuICAgIGxldCBjb252ZXJ0ID0gdHlwZW9mIGluZm8gPT09IFwiZnVuY3Rpb25cIiA/IGluZm8gOiB0eXBlb2YgaW5mbyA9PT0gXCJvYmplY3RcIiA/IGluZm8uY29udmVydCA6IHVuZGVmaW5lZDtcclxuICAgIGxldCBpc1JhbmdlID0gdHlwZW9mIGluZm8gPT09IFwiYm9vbGVhblwiID8gaW5mbyA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5pc1JhbmdlIDogdW5kZWZpbmVkO1xyXG4gICAgaWYgKGlzUmFuZ2UgJiYgIXZhbHVlT25seSAmJiBBcnJheS5pc0FycmF5KCBwcm9wVmFsKSAmJiBwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuICAgIHtcclxuICAgICAgICBsZXQgczEgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsWzBdLCBjb252ZXJ0KTtcclxuICAgICAgICBsZXQgczIgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsWzFdLCBjb252ZXJ0KTtcclxuICAgICAgICByZXR1cm4gYCR7czF9IDw9ICR7cmVhbEZlYXR1cmVOYW1lfSA8PSAke3MyfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsLCBjb252ZXJ0KTtcclxuICAgICAgICByZXR1cm4gdmFsdWVPbmx5ID8gcyA6IHJlYWxGZWF0dXJlTmFtZSArIFwiOlwiICsgcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtZWRpYUZlYXR1cmVTaW5nbGVWYWx1ZVRvU3RyaW5nKCBwcm9wVmFsOiBhbnksIGNvbnZlcnQ/OiBjb252ZXJ0RnVuY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBpZiAoY29udmVydClcclxuICAgICAgICByZXR1cm4gY29udmVydCggcHJvcFZhbCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcHJvcFZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHByb3BWYWwpKVxyXG4gICAgICAgIHJldHVybiBhcnIyc3RyKCBwcm9wVmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcHJvcFZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IGFzcGVjdFJhdGlvVG9TdHJpbmcsXHJcbiAgICBtYXhBc3BlY3RSYXRpbzogYXNwZWN0UmF0aW9Ub1N0cmluZyxcclxuICAgIGNvbG9yOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIGhlaWdodDogeyBjb252ZXJ0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsIGlzUmFuZ2U6IHRydWUgfSxcclxuICAgIG1pbkhlaWdodDogbGVuZ3RoRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbiAgICBtb25vY2hyb21lOiB7IGRlZmF1bHRWYWx1ZTogMCwgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgcmVzb2x1dGlvbjogeyBjb252ZXJ0OiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLCBpc1JhbmdlOiB0cnVlIH0sXHJcbiAgICBtaW5SZXNvbHV0aW9uOiByZXNvbHV0aW9uRmVhdHVyZVRvU3RyaW5nLFxyXG4gICAgbWF4UmVzb2x1dGlvbjogcmVzb2x1dGlvbkZlYXR1cmVUb1N0cmluZyxcclxuICAgIHdpZHRoOiB7IGNvbnZlcnQ6IGxlbmd0aEZlYXR1cmVUb1N0cmluZywgaXNSYW5nZTogdHJ1ZSB9LFxyXG4gICAgbWluV2lkdGg6IGxlbmd0aEZlYXR1cmVUb1N0cmluZyxcclxuICAgIG1heFdpZHRoOiBsZW5ndGhGZWF0dXJlVG9TdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIu+7v2ltcG9ydCB7Q3NzU2VsZWN0b3J9IGZyb20gXCIuL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHt2YWwyc3RyfSBmcm9tIFwiLi9VdGlsRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBzZWxlY3Rvci5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHR3by1udW1iZXIgdHVwbGUgdG8gYSBzdHJpbmcgaW4gdGhlIGZvcm0gQW4rQi5cclxuICovXHJcbmZ1bmN0aW9uIG50aFR1cGxlVG9TdHJpbmcoIHZhbDogW251bWJlciwgbnVtYmVyP10pOiBzdHJpbmdcclxue1xyXG5cdGxldCB2MCA9IHZhbDJzdHIoIHZhbFswXSk7XHJcblx0bGV0IHYxbiA9IHZhbFsxXTtcclxuXHJcblx0Ly8gdGhlICchdjFuJyBleHByZXNzaW9uIGNvdmVycyBudWxsLCB1bmRlZmluZWQgYW5kIDAuXHJcblx0bGV0IHYxID0gIXYxbiA/IFwiXCIgOiB2MW4gPiAwID8gXCIrXCIgKyB2YWwyc3RyKCB2MW4pIDogXCItXCIgKyB2YWwyc3RyKCAtdjFuKTtcclxuXHJcblx0cmV0dXJuIGAke3YwfW4ke3YxfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RvclRvU3RyaW5nKCB2YWw6IENzc1NlbGVjdG9yKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcblx0XHRhcnJTZXA6IFwiXCJcclxuXHR9KVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcGFyYW1ldGVyaXplZCBwc2V1ZG8gZW50aXR5LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBzZXVkb0VudGl0eVRvU3RyaW5nKCBlbnRpdHlOYW1lOiBzdHJpbmcsIHZhbDogYW55KTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWVudGl0eU5hbWUpXHJcblx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0aWYgKGVudGl0eU5hbWUuc3RhcnRzV2l0aCggXCI6bnRoXCIpKVxyXG5cdFx0cmV0dXJuIHZhbDJzdHIoIHZhbCwgeyBmcm9tQXJyYXk6IG50aFR1cGxlVG9TdHJpbmcgfSk7XHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHZhbDJzdHIodmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge0lTdHJpbmdQcm94eSwgSUdlbmVyaWNQcm94eX0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7SVN0eWxlUnVsZSwgSUNsYXNzTmFtZVJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU2VsZWN0b3JQcm94eSBmdW5jdGlvbiByZXR1cm5zIGEgQ1NTIHNlbGVjdG9yIHN0cmluZy4gVGhpcyB0eXBlIGlzIHJldHVybmVkIGZyb20gdGhlXHJcbiAqIFtbc2VsZWN0b3JdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdG9yUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwic2VsZWN0b3JcIj4ge307XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSBzZWxlY3RvciB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSBbW3NlbGVjdG9yXV0gZnVuY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgU2VsZWN0b3JJdGVtID0gc3RyaW5nIHwgSVN0eWxlUnVsZSB8IElDbGFzc05hbWVSdWxlIHwgSVN0cmluZ1Byb3h5IHwgSVNlbGVjdG9yUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNlbGVjdG9yICovXHJcbmV4cG9ydCB0eXBlIENzc1NlbGVjdG9yID0gU2VsZWN0b3JJdGVtIHwgU2VsZWN0b3JJdGVtW107XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHByaW50LXJlbGF0ZWQgcHNldWRvIGNsYXNzZXMgLSB0aG9zZSB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgd2l0aCB0aGUgQHBhZ2UgQ1NTIHJ1bGUgKi9cclxuZXhwb3J0IHR5cGUgUGFnZVBzZXVkb0NsYXNzID0gXCI6YmxhbmtcIiB8IFwiOmZpcnN0XCIgfCBcIjpsZWZ0XCIgfCBcIjpyaWdodFwiO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwc2V1ZG8gY2xhc3NlcyAqL1xyXG5leHBvcnQgdHlwZSBQc2V1ZG9DbGFzcyA9IFBhZ2VQc2V1ZG9DbGFzcyB8XHJcblx0XCI6YWN0aXZlXCIgfCBcIjphbnktbGlua1wiIHwgXCI6YmxhbmtcIiB8IFwiOmNoZWNrZWRcIiB8IFwiOmRlZmF1bHRcIiB8IFwiOmRlZmluZWRcIiB8IFwiOmRpc2FibGVkXCIgfFxyXG5cdFwiOmVtcHR5XCIgfCBcIjplbmFibGVkXCIgfCBcIjpmaXJzdC1jaGlsZFwiIHwgXCI6Zmlyc3Qtb2YtdHlwZVwiIHwgXCI6ZnVsbHNjcmVlblwiIHwgXCI6Zm9jdXNcIiB8XHJcblx0XCI6Zm9jdXMtdmlzaWJsZVwiIHwgXCI6Zm9jdXMtV2l0aGluXCIgfCBcIjpob3ZlclwiIHwgXCI6aW5kZXRlcm1pbmF0ZVwiIHwgXCI6aW4tcmFuZ2VcIiB8IFwiOmludmFsaWRcIiB8XHJcblx0XCI6bGFzdC1jaGlsZFwiIHwgXCI6bGFzdC1vZi10eXBlXCIgfCBcIjpsaW5rXCIgfCBcIjpvbmx5LWNoaWxkXCIgfCBcIjpvbmx5LW9mLXR5cGVcIiB8IFwiOm9wdGlvbmFsXCIgfFxyXG5cdFwiOm91dC1vZi1yYW5nZVwiIHwgXCI6cGxhY2Vob2xkZXItc2hvd25cIiB8IFwiOnJlYWQtb25seVwiIHwgXCI6cmVhZC13cml0ZVwiIHwgXCI6cmVxdWlyZWRcIiB8IFwiOnJvb3RcIiB8XHJcblx0XCI6c2NvcGVcIiB8IFwiOnRhcmdldFwiIHwgXCI6dmFsaWRcIiB8IFwiOnZpc2l0ZWRcIiB8IFwiOmRpcihydGwpXCIgfCBcIjpkaXIobHRyKVwiO1xyXG5cclxuXHJcblxyXG4vKiogUmVwcmVzZW50cyBwc2V1ZG8gZWxlbWVudHMgKi9cclxuZXhwb3J0IHR5cGUgUHNldWRvRWxlbWVudCA9IFwiOjphZnRlclwiIHwgXCI6OmJhY2tkcm9wXCIgfCBcIjo6YmVmb3JlXCIgfCBcIjo6Y3VlXCIgfCBcIjo6Zmlyc3RMZXR0ZXJcIiB8XHJcblx0XCI6OmZpcnN0TGluZVwiIHwgXCI6OmdyYW1tYXJFcnJvclwiIHwgXCI6Om1hcmtlclwiIHwgXCI6OnBsYWNlaG9sZGVyXCIgfCBcIjo6c2VsZWN0aW9uXCIgfCBcIjo6c3BlbGxpbmdFcnJvclwiO1xyXG5cclxuXHJcblxyXG4vKiogQ29tYmluZXMgbmFtZXMgb2Ygbm9uLXBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgYW5kIHBzZXVkbyBlbGVtZW50cyAqL1xyXG5leHBvcnQgdHlwZSBQc2V1ZG9FbnRpdHkgPSBQc2V1ZG9DbGFzcyB8IFBzZXVkb0VsZW1lbnQ7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBleHByZXNzaW9uIEFuK0IsIHdoaWNoIGlzIHVzZWQgZm9yIHBhcmFtZXRlcml6ZWQgcHNldWRvIGNsYXNzZXMgbGlrZSBgbnRoLWNoaWxkYC4gSXRcclxuICogY2FuIGJlIGEgc3RyaW5nLCBhIHNpbmdsZSBudW1iZXIgb3IgYSB0dXBsZSB3aXRoIG9uZSBvciB0d28gbnVtYmVycy4gSWYgaXQgaXMgYSBzaW5nbGUgbnVtYmVyLFxyXG4gKiB0aGUgJ24nIGluIEFuK0Igd2lsbCBub3QgYmUgdXNlZCAtIGFzIGluIGBudGgtY2hpbGQoMilgLiBJZiBpdCBpcyBhIHR1cGxlLCB0aGUgJ24nIHdpbGwgYmUgdXNlZFxyXG4gKiBldmVuIGlmIHRoZSBzZWNvbmQgdHVwbGUncyBlbGVtZW50IGlzIG5vdCBwcm92aWRlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIE50aENoaWxkRXhwcmVzc2lvbiA9IFwib2RkXCIgfCBcImV2ZW5cIiB8IG51bWJlciB8IFtudW1iZXIsIG51bWJlcj9dIHwgc3RyaW5nIHwgSVN0cmluZ1Byb3h5O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElQYXJhbWV0ZXJpemVkUHNldWRvQ2xhc3MgaW50ZXJmYWNlIG1hcHMgbmFtZXMgb2YgcHNldWRvIGNsYXNzZXMgdGhhdCByZXF1aXJlIHBhcmFtZXRlcnNcclxuICogdG8gdGhlIHR5cGUgdGhhdCBjYW4gYmUgdXNlZCB0byBzcGVjaWZ5IHRoZXNlIHBhcmFtZXRlcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXJhbWV0ZXJpemVkUHNldWRvQ2xhc3Ncclxue1xyXG5cdFwiOmhhc1wiOiBzdHJpbmc7XHJcblx0XCI6aG9zdFwiOiBzdHJpbmc7XHJcblx0XCI6aG9zdC1jb250ZXh0XCI6IHN0cmluZztcclxuXHRcIjppc1wiOiBzdHJpbmc7XHJcblx0XCI6bGFuZ1wiOiBzdHJpbmc7XHJcblx0XCI6bm90XCI6IHN0cmluZztcclxuXHRcIjpudGgtY2hpbGRcIjogTnRoQ2hpbGRFeHByZXNzaW9uO1xyXG5cdFwiOm50aC1vZi10eXBlXCI6IE50aENoaWxkRXhwcmVzc2lvbjtcclxuXHRcIjpudGgtbGFzdC1jaGlsZFwiOiBOdGhDaGlsZEV4cHJlc3Npb247XHJcblx0XCI6bnRoLWxhc3Qtb2YtdHlwZVwiOiBOdGhDaGlsZEV4cHJlc3Npb247XHJcblx0XCI6d2hlcmVcIjogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbGVtZW50IGludGVyZmFjZSBtYXBzIG5hbWVzIG9mIHBzZXVkbyBlbGVtZW50cyB0aGF0IHJlcXVpcmUgcGFyYW1ldGVyc1xyXG4gKiB0byB0aGUgdHlwZSB0aGF0IGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgdGhlc2UgcGFyYW1ldGVycy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbGVtZW50XHJcbntcclxuXHRcIjo6cGFydFwiOiBzdHJpbmc7XHJcblx0XCI6OnNsb3R0ZWRcIjogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVBhcmFtZXRlcml6ZWRQc2V1ZG9FbnRpdHkgaW50ZXJmYWNlIGNvbWJpbmVzIElQYXJhbWV0ZXJpemVkUHNldWRvQ2xhc3MgYW5kXHJcbiAqIElQYXJhbWV0ZXJpemVkUHNldWRvRWxlbWVudCBpbnRlcmZhY2VzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFyYW1ldGVyaXplZFBzZXVkb0VudGl0eSBleHRlbmRzIElQYXJhbWV0ZXJpemVkUHNldWRvQ2xhc3MsIElQYXJhbWV0ZXJpemVkUHNldWRvRWxlbWVudFxyXG57XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHtcclxuICAgIEV4dGVuZGVkU3R5bGVzZXQsIEFuaW1hdGlvbl9TaW5nbGUsIFRpbWluZ0Z1bmN0aW9uX1NpbmdsZSwgQmFja2dyb3VuZF9TaW5nbGUsIEJhY2tncm91bmRTaXplX1NpbmdsZSxcclxuICAgIEJvcmRlckltYWdlX09iamVjdCwgQm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGUsIEJveFNoYWRvd19TaW5nbGUsIEJvcmRlclJhZGl1c19TdHlsZVR5cGUsXHJcbiAgICBCb3JkZXJfU3R5bGVUeXBlLCBDb2x1bW5zX1N0eWxlVHlwZSwgQ3Vyc29yX1N0eWxlVHlwZSwgRmxleF9TdHlsZVR5cGUsIEZvbnRfU3R5bGVUeXBlLFxyXG4gICAgR3JpZFRlbXBsYXRlQXJlYXNfU3R5bGVUeXBlLCBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZSwgTWFya2VyX1N0eWxlVHlwZSwgUm90YXRlX1N0eWxlVHlwZSxcclxuICAgIFRleHREZWNvcmF0aW9uX1N0eWxlVHlwZSwgVHJhbnNpdGlvbl9TaW5nbGUsIE9mZnNldF9TdHlsZVR5cGUsIFN0eWxlc2V0LCBDdXN0b21WYXJfU3R5bGVUeXBlLFxyXG4gICAgVmFyVGVtcGxhdGVOYW1lLCBTdXBwb3J0c1F1ZXJ5LCBTaW5nbGVTdXBwb3J0c1F1ZXJ5LCBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb24sIEdyaWRUcmFja1xyXG59IGZyb20gXCIuL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge0V4dGVuZGVkLCBDc3NSYWRpdXMsIE9uZU9yTWFueSwgQ3NzTXVsdGlMZW5ndGgsIENzc011bHRpVGltZX0gZnJvbSBcIi4vVXRpbFR5cGVzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYW1lbFRvRGFzaCwgZGFzaFRvQ2FtZWwsIHZhbDJzdHIsIGFycjJzdHIsIElWYWx1ZUNvbnZlcnRPcHRpb25zLFxyXG4gICAgcG9zMnN0ciwgbXVsdGlQb3Myc3RyLCBDc3NMZW5ndGhNYXRoLCBDc3NUaW1lTWF0aCwgQ3NzTnVtYmVyTWF0aCxcclxuICAgIENzc0FuZ2xlTWF0aCwgQ3NzRnJlcXVlbmN5TWF0aCwgQ3NzUGVyY2VudE1hdGgsIENzc1Jlc29sdXRpb25NYXRoLCB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nLFxyXG59IGZyb20gXCIuL1V0aWxGdW5jc1wiXHJcbmltcG9ydCB7Y29sb3JUb1N0cmluZ30gZnJvbSBcIi4vQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge1ZhclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9WYXJSdWxlXCI7XHJcbmltcG9ydCB7SUlEUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnVuY3Rpb25zIGZvciBjb252ZXJ0aW5nIENTUyBwcm9wZXJ0eSB0eXBlcyB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUFuaW1hdGlvbl9mcm9tT2JqZWN0KCB2YWw6IEFuaW1hdGlvbl9TaW5nbGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG9iajJzdHIoIHZhbCwgW1xyXG4gICAgICAgIFtcImR1cmF0aW9uXCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImZ1bmNcIiwgc2luZ2xlVGltaW5nRnVuY3Rpb25fZnJvbVN0eWxlXSxcclxuICAgICAgICBbXCJkZWxheVwiLCBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJjb3VudFwiLCBDc3NOdW1iZXJNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFwiZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgXCJzdGF0ZVwiLFxyXG4gICAgICAgIFwibmFtZVwiXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25fZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPEFuaW1hdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tT2JqOiBzaW5nbGVBbmltYXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25Ub1N0cmluZyggdmFsOiBFeHRlbmRlZDxPbmVPck1hbnk8VGltaW5nRnVuY3Rpb25fU2luZ2xlPj4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIsXHJcbiAgICAgICAgZnJvbUFycmF5OiB0aW1pbmdGdW5jdGlvbl9mcm9tQXJyYXlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9uX2Zyb21OdW1iZXIoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgc3RlcHMoJHt2YWx9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25fZnJvbUFycmF5KCB2YWw6IGFueVtdKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsWzBdID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgPyBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGUoIHZhbCBhcyBUaW1pbmdGdW5jdGlvbl9TaW5nbGUpXHJcbiAgICAgICAgOiBhcnIyc3RyKCB2YWwsIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSwgXCIsXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZVRpbWluZ0Z1bmN0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB0aW1pbmdGdW5jdGlvbl9mcm9tTnVtYmVyLFxyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoIDwgMylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBzdGVwcyBmdW5jdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIC8vLyAjaWYgREVCVUdcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlswXSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCB2WzBdKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvciggYE51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyLiBZb3UgaGF2ZTogJHt2WzBdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgc3RlcHMoJHt2WzBdfSR7di5sZW5ndGggPT09IDIgPyBcIixcIiArIHZbMV0gOiBcIlwifSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbiAgICAgICAgICAgICAgICAvLy8gI2lmIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZbMF0gPCAwIHx8IHZbMF0gPiAxIHx8IHZbMl0gPCAwIHx8IHZbMl0gPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCBgRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS4gWW91IGhhdmUgJHt2WzBdfSBhbmQgJHt2WzJdfWApO1xyXG4gICAgICAgICAgICAgICAgLy8vICNlbmRpZlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dlswXX0sJHt2WzFdfSwke3ZbMl19LCR7dlszXX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdCggdmFsOiBCYWNrZ3JvdW5kX1NpbmdsZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgXCJpbWFnZVwiLFxyXG4gICAgICAgIFtcInBvc2l0aW9uXCIsIHBvczJzdHJdLFxyXG4gICAgICAgIFtcInNpemVcIiwgbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSwgXCIvXCJdLFxyXG4gICAgICAgIFwicmVwZWF0XCIsXHJcbiAgICAgICAgXCJhdHRhY2htZW50XCIsXHJcbiAgICAgICAgXCJvcmlnaW5cIixcclxuICAgICAgICBcImNsaXBcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZF9mcm9tU3R5bGUoIHZhbDogRXh0ZW5kZWQ8QmFja2dyb3VuZF9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBjb2xvclRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJhY2tncm91bmRfZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlKCB2YWw6IEV4dGVuZGVkPEJhY2tncm91bmRTaXplX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IG11bHRpTGVuZ3RoVG9TdHJpbmdXaXRoU3BhY2VcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgaW1hZ2Ugc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJJbWFnZVRvU3RyaW5nKCB2YWw6IEJvcmRlckltYWdlX09iamVjdCk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBpZiB3aWR0aCBpcyBzcGVjaWZpZWQsIGJ1dCBzbGljZSBpcyBub3QsIHdlIG5lZWQgdG8gc2V0IHNsaWNlIHRvIHRoZSBkZWZhdWx0IDEwMCUgdmFsdWU7XHJcbiAgICAvLyBpZiBvdXRzZXQgaXMgc3BlY2lmaWVkIGJ1dCB3aWR0aCBpcyBub3QuIHdlIG5lZWQgdG8gc2V0IHdpZHRoIHRvIHRoZSBkZWZhdWx0IDEgdmFsdWU7XHJcbiAgICBsZXQgdmFsQ29weTogQm9yZGVySW1hZ2VfT2JqZWN0ID0gT2JqZWN0LmFzc2lnbigge30sIHZhbCk7XHJcbiAgICBpZiAodmFsLnNsaWNlID09IG51bGwgJiYgKHZhbC53aWR0aCAhPSBudWxsIHx8IHZhbC5vdXRzZXQgIT0gbnVsbCkpXHJcbiAgICAgICAgdmFsQ29weS5zbGljZSA9IFwiMTAwJVwiO1xyXG4gICAgaWYgKHZhbC53aWR0aCA9PSBudWxsICYmIHZhbC5vdXRzZXQgIT0gbnVsbClcclxuICAgICAgICB2YWxDb3B5LndpZHRoID0gMTtcclxuXHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsQ29weSwgW1xyXG4gICAgICAgIFwic291cmNlXCIsXHJcbiAgICAgICAgW1wic2xpY2VcIiwgXCJib3JkZXJJbWFnZVNsaWNlXCJdLFxyXG4gICAgICAgIFtcIndpZHRoXCIsIG51bGwsIFwiL1wiXSxcclxuICAgICAgICBbXCJvdXRzZXRcIixudWxsLCBcIi9cIl0sXHJcbiAgICAgICAgXCJyZXBlYXRcIlxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBpbWFnZSBzbGljZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlckltYWdlU2xpY2VUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxCb3JkZXJJbWFnZVNsaWNlX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHYgPT4gdmFsMnN0ciggdiwge1xyXG4gICAgICAgICAgICBmcm9tQm9vbDogKCkgPT4gXCJmaWxsXCIsXHJcbiAgICAgICAgICAgIGZyb21OdW1iZXI6IHVuaXRsZXNzT3JQZXJjZW50VG9TdHJpbmcsXHJcbiAgICAgICAgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVCb3hTaGFkb3dfZnJvbU9iamVjdCggdmFsOiBCb3hTaGFkb3dfU2luZ2xlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJpbnNldFwiLCB2ID0+IHYgPyBcImluc2V0XCIgOiBcIlwiXSxcclxuICAgICAgICBbXCJ4XCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wieVwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImJsdXJcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJzcHJlYWRcIiwgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXSxcclxuICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvU3RyaW5nXVxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvcm5lciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVDb3JuZXJSYWRpdXNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSYWRpdXM+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyUmFkaXVzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Qm9yZGVyUmFkaXVzX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHZbMF0pKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyB0d28gTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICBsZXQgcyA9IGFycjJzdHIoIHZbMF0sIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgcyArPSBcIiAvIFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMgKyBhcnIyc3RyKCB2WzFdLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHNpbmdsZSBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHYsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgc2lkZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlclRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEJvcmRlcl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgYnVmOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICBpZiAodlswXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdlswXSkpXHJcblxyXG4gICAgICAgICAgICBpZiAodlsxXSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYnVmLnB1c2goIHZhbDJzdHIodlsxXSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZbMl0gIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGJ1Zi5wdXNoKCBjb2xvclRvU3RyaW5nKHZbMl0pKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBidWYuam9pbihcIiBcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1ucyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbHVtbnNUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDb2x1bW5zX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB2WzBdICsgXCIgXCIgKyBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHZbMV0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY3Vyc29yIHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gY3Vyc29yVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3Vyc29yX1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgLy8gdGhlIHZhbHVlIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYSBmdW5jdGlvbiBvciBhbiBhcnJheS4gSWYgaXQgaXMgYW4gYXJyYXksXHJcbiAgICAvLyBpZiB0aGUgZmlyc3QgZWxlbWVudCBpcyBhIGZ1bmN0aW9uLCB0aGVuIHdlIG5lZWQgdG8gdXNlIHNwYWNlIGFzIGEgc2VwYXJhdG9yIChiZWNhdXNlXHJcbiAgICAvLyB0aGlzIGlzIGEgVVJMIHdpdGggb3B0aW9uYWwgbnVtYmVycyBmb3IgdGhlIGhvdCBzcG90KTsgb3RoZXJ3aXNlLCB3ZSB1c2UgY29tbWEgYXMgYVxyXG4gICAgLy8gc2VwYXJhdG9yIC0gYmVjYXVzZSB0aGVzZSBhcmUgbXVsdGlwbGUgY3Vyc29yIGRlZmluaXRpb25zLlxyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh2Lmxlbmd0aCA9PT0gMSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKHYpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdlsxXSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKCB2LCB7IGFyclNlcDogXCIgXCJ9KVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKCB2LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJySXRlbUZ1bmM6IGN1cnNvclRvU3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgZmxleCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGZsZXhUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxGbGV4X1N0eWxlVHlwZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21BcnJheTogdiA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuam9pbiggXCIgXCIpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdlswXSArIFwiIFwiICsgdlsxXSArIFwiIFwiICsgQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nKCB2WzJdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZyb21Bbnk6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZm9udF9mcm9tT2JqZWN0KCB2YWw6IGFueSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wic3R5bGVcIiwgZm9udFN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFwidmFyaWFudFwiLFxyXG4gICAgICAgIFwid2VpZ2h0XCIsXHJcbiAgICAgICAgXCJzdHJldGNoXCIsXHJcbiAgICAgICAgW1wic2l6ZVwiLCBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmddLFxyXG4gICAgICAgIFtcImxpbmVIZWlnaHRcIiwgbnVsbCwgXCIvXCJdLFxyXG4gICAgICAgIFwiZmFtaWx5XCJcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGZvbnRTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEZvbnRfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBcIm9ibGlxdWUgXCIgKyBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyggdilcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdyaWRUZW1wbGF0ZUFyZWFzVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8R3JpZFRlbXBsYXRlQXJlYXNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICAvLyB2YWwgY2FuIGJlIGFycmF5IG9mIGZ1bmN0aW9ucyAoSVF1b3RlZFByb3h5W10pIG9yIGFycmF5cyAoR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uW10pXHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IHtcclxuICAgICAgICAgICAgaWYgKHYubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2WzBdID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyMnN0ciggdik7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVHcmlkVGVtcGxhdGVBcmVhc0Zyb21EZWZpbml0aW9ucyh2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGFycmF5IG9mIEdyaWRUZW1wbGF0ZUFyZWFfRGVmaW5pdGlvbiBvYmplY3RzIHRvIGEgc3RyaW5nIHRoYXQgaXMgc3VpdGFibGUgZm9yXHJcbiAqIHRoZSBncmlkLXRlbXBsYXRlLWFyZWFzIGZvcm1hdC5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUdyaWRUZW1wbGF0ZUFyZWFzRnJvbURlZmluaXRpb25zKCBkZWZzOiBHcmlkVGVtcGxhdGVBcmVhX0RlZmluaXRpb25bXSk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBjYWxjdWxhdGUgdG90YWwgc2l6ZSBvZiB0aGUgbWF0cml4IGZyb20gdGhlIGFyZWFzJyBzaXplc1xyXG4gICAgbGV0IHJvd0NvdW50ID0gMCwgY29sQ291bnQgPSAwO1xyXG4gICAgZm9yKCBsZXQgZGVmIG9mIGRlZnMpXHJcbiAgICB7XHJcbiAgICAgICAgcm93Q291bnQgPSBNYXRoLm1heCggcm93Q291bnQsIGRlZlszXSk7XHJcbiAgICAgICAgY29sQ291bnQgPSBNYXRoLm1heCggY29sQ291bnQsIGRlZls0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJvd0NvdW50ID09PSAwIHx8IGNvbENvdW50ID09PSAwKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiByb3dzIHdoZXJlIGV2ZXJ5IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgY2VsbHNcclxuICAgIGxldCBtYXRyaXggPSBuZXcgQXJyYXk8c3RyaW5nW10+KHJvd0NvdW50KTtcclxuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKylcclxuICAgICAgICBtYXRyaXhbaV0gPSBuZXcgQXJyYXk8c3RyaW5nPihjb2xDb3VudCk7XHJcblxyXG4gICAgLy8gZ28gb3ZlciBkZWZpbml0aW9ucyBhbmQgZmlsbCB0aGUgYXBwcm9wcmlhdGUgcGxhY2VzIGluIHRoZSBjZWxscyB3aXRoIGFyZWEgbmFtZXNcclxuICAgIGZvciggbGV0IGRlZiBvZiBkZWZzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBuYW1lID0gdmFsMnN0ciggZGVmWzBdKTtcclxuICAgICAgICBmb3IoIGxldCBpID0gZGVmWzFdOyBpIDw9IGRlZlszXTsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yKCBsZXQgaiA9IGRlZlsyXTsgaiA8PSBkZWZbNF07IGorKylcclxuICAgICAgICAgICAgICAgIG1hdHJpeFtpLTFdW2otMV0gPSBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnbyBvdmVyIG91ciBtYXRyaXggYW5kIGZvciBldmVyeSByb3cgY3JlYXRlIGEgcXVvdGVkIHN0cmluZy4gU2luY2Ugb3VyIGNlbGwgYXJyYXlzIG1heSBiZVxyXG4gICAgLy8gc3BhcnNlLCB1c2UgZG90IGZvciB0aGUgdW5kZWZpbmVkIGNlbGxzXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICBmb3IoIGxldCBpID0gMDsgaSA8IHJvd0NvdW50OyBpKyspXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJvd05hbWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIGZvciggbGV0IGogPSAwOyBqIDwgcm93Q291bnQ7IGorKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gbWF0cml4W2ldW2pdO1xyXG4gICAgICAgICAgICByb3dOYW1lcy5wdXNoKCBuYW1lID8gbmFtZSA6IFwiLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcyArPSBgXCIke3Jvd05hbWVzLmpvaW4oXCIgXCIpfVwiXFxuYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3JpZFRyYWNrVG9TdHJpbmcoIHZhbDogR3JpZFRyYWNrKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyggdiksXHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGBbJHthcnIyc3RyKHYpfV1gXHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBncmlkQXhpc1RvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPEdyaWRUZW1wbGF0ZUF4aXNfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogdiA9PiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmcoIHYpLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBncmlkVHJhY2tUb1N0cmluZ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gbWFya2VyU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxNYXJrZXJfU3R5bGVUeXBlPik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU9iajogdiA9PiBgdXJsKCMkeyh2YWwgYXMgSUlEUnVsZSkubmFtZX0pYFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcm90YXRlVG9TdHJpbmcoIHZhbDpSb3RhdGVfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4ge1xyXG4gICAgICAgICAgICBpZiAodi5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dlswXX0gJHtDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyh2WzFdKX1gO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dlswXX0gJHt2WzFdfSAke3ZbMl19ICR7Q3NzQW5nbGVNYXRoLnN0eWxlVG9TdHJpbmcodlszXSl9YDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGV4dERlY29yYXRpb25fZnJvbU9iamVjdCggdmFsOiBFeHRlbmRlZDxUZXh0RGVjb3JhdGlvbl9TdHlsZVR5cGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBcImxpbmVcIixcclxuICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb1N0cmluZ10sXHJcbiAgICAgICAgW1widGhpY2tuZXNzXCIsIENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21PYmplY3QoIHZhbDogRXh0ZW5kZWQ8VHJhbnNpdGlvbl9TaW5nbGU+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBvYmoyc3RyKCB2YWwsIFtcclxuICAgICAgICBbXCJwcm9wZXJ0eVwiLCBjYW1lbFRvRGFzaF0sXHJcbiAgICAgICAgW1wiZHVyYXRpb25cIiwgQ3NzVGltZU1hdGguc3R5bGVUb1N0cmluZ10sXHJcbiAgICAgICAgW1wiZnVuY1wiLCBzaW5nbGVUaW1pbmdGdW5jdGlvbl9mcm9tU3R5bGVdLFxyXG4gICAgICAgIFtcImRlbGF5XCIsIENzc1RpbWVNYXRoLnN0eWxlVG9TdHJpbmddXHJcbiAgICBdKTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSggdmFsOiBFeHRlbmRlZDxUcmFuc2l0aW9uX1NpbmdsZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHZhbCwge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gb2Zmc2V0VG9TdHJpbmcoIHZhbDogT2Zmc2V0X1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gb2JqMnN0ciggdmFsLCBbXHJcbiAgICAgICAgW1wicG9zaXRpb25cIiwgXCJvZmZzZXRQb3NpdGlvblwiXSxcclxuICAgICAgICBbXCJwYXRoXCIsIFwib2Zmc2V0UGF0aFwiXSxcclxuICAgICAgICBbXCJkaXN0YW5jZVwiLCBcIm9mZnNldERpc3RhbmNlXCJdLFxyXG4gICAgICAgIFtcInJvdGF0ZVwiLCBcIm9mZnNldFJvdGF0ZVwiXSxcclxuICAgICAgICBbXCJhbmNob3JcIiwgXCJvZmZzZXRBbmNob3JcIiwgXCIvXCJdLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZGVmbml0aW9uIG9mIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxuZXhwb3J0IHR5cGUgVG9TdHJpbmdGdW5jID0gKHZhbDogYW55KSA9PiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHZhbHVlIHRvIGEgQ1NTIHN0cmluZyB1c2luZyB0aGUgaW5mbyBwYXJhbWV0ZXIgdG8gaW5mb3JtIGhvdyB0aGUgb2JqZWN0J3NcclxuICogcHJvcGVydGllcyBzaG91bGQgYmUgY29udmVydGVkIHRvIHN0cmluZ3MuIFRoZSBpbmZvIHBhcmFtZXRlciBpcyBhbiBhcnJheSBvZiBlaXRoZXIgc3RyaW5nc1xyXG4gKiBvciB0d28tIG9yIHRocmUtZWxlbWVudCB0dXBsZXMuIFRoZSBvbmx5IHN0cmluZyBhbmQgdGhlIGZpcnN0IHR1cGxlIGVsZW1lbnQgY29ycmVzcG9uZHMgdG8gYVxyXG4gKiBwcm9wZXJ0eSBleHBlY3RlZCBpbiB0aGUgdmFsdWUgb2JqZWN0IHRvIGJlIGNvbnZlcnRlZC4gRWFjaCBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgYWNjb3JkaW5nXHJcbiAqIHRvIHRoZSBmb2xsb3dpbmcgcnVsZXM6XHJcbiAqIC0gSWYgdGhlIGFycmF5IGl0ZW0gaXMganVzdCBhIHN0cmluZywgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUncyBwcm9wZXJ0eSBpcyBjb252ZXJ0ZWQgdXNpbmdcclxuICogICB0aGUgdmFsdWVUb1N0cmluZyBmdW5jdGlvbi5cclxuICogLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQsIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlJ3MgcHJvcGVydHkgaXMgY29udmVydGVkIHVzaW5nXHJcbiAqICAgdGhlIHZhbHVlVG9TdHJpbmcgZnVuY3Rpb24uLlxyXG4gKiAtIElmIHRoZSBzZWNvbmQgZWxlbWVudCBpcyBhIHN0cmluZyBpdCBpcyB0cmVhdGVkIGFzIGEgbmFtZSBvZiBhIGxvbmdoYW5kIHN0eWxlIHByb3BlcnR5LiBUaGVcclxuICogICB2YWx1ZSdzIHByb3BlcnR5IGlzIGNvbnZlcnRlZCB1c2luZyB0aGUgc3R5bGVQcm9wVG9TdHJpbmcgZnVuY3Rpb24gZm9yIHRoaXMgbG9uZ2hhbmQgc3R5bGVcclxuICogICBwcm9wZXJ0eS5cclxuICogLSBJZiB0aGUgc2Vjb25kIGVsZW1lbnQgaXMgYSBmdW5jdGlvbiwgaXQgaXMgdXNlZCB0byBjb252ZXJ0IHRoZSB2YWx1ZSdzIHByb3BlcnR5LlxyXG4gKiAtIElmIGEgdGhpcmQgZWxlbWVudCBleGlzdHMgaW4gdGhlIHR1cGxlIGl0IGlzIHRyZWF0ZWQgYXMgYSBwcmVmaXggdG8gYmUgcGxhY2VkIGJlZm9yZSB0aGVcclxuICogICBjb252ZXJ0ZWQgcHJvcGVydHkgdmFsdWUuXHJcbiAqIFxyXG4gKiBUaGUgb3JkZXIgb2YgdGhlIG5hbWVzIGRldGVybWluZXMgaW4gd2hpY2ggb3JkZXIgdGhlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqMnN0ciggdmFsOiBhbnksXHJcbiAgICBpbmZvOiAoc3RyaW5nIHwgW3N0cmluZywgbnVsbCB8IHN0cmluZyB8IFRvU3RyaW5nRnVuYywgc3RyaW5nP10gKVtdLFxyXG4gICAgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodmFsID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsICE9PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuXHJcbiAgICBsZXQgYnVmOiAoc3RyaW5nKVtdID0gW107XHJcbiAgICBpbmZvLmZvckVhY2goIG5hbWVPclR1cGxlID0+XHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ2V0IHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSBpbiB0aGUgdmFsdWUgdG8gYmUgY29udmVydGVkIGFuZCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZTtcclxuICAgICAgICAvLyBpZiB0aGUgcHJvcGVydGllcyB2YWx1ZSBpcyBub3QgZGVmaW5lZCwgc2tpcCBpdC5cclxuICAgICAgICBsZXQgcHJvcE5hbWUgPSB0eXBlb2YgbmFtZU9yVHVwbGUgPT09IFwic3RyaW5nXCIgPyBuYW1lT3JUdXBsZSA6IG5hbWVPclR1cGxlWzBdO1xyXG4gICAgICAgIGxldCBwcm9wVmFsID0gdmFsW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgd2UgaGF2ZSBhIHByZWZpeFxyXG4gICAgICAgIGxldCBwcmVmaXggPSB0eXBlb2YgbmFtZU9yVHVwbGUgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBuYW1lT3JUdXBsZVsyXTtcclxuICAgICAgICBpZiAocHJlZml4KVxyXG4gICAgICAgICAgICBidWYucHVzaCggcHJlZml4KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbnZlcnRvciA9IHR5cGVvZiBuYW1lT3JUdXBsZSA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IG5hbWVPclR1cGxlWzFdO1xyXG4gICAgICAgIGlmICghY29udmVydG9yKVxyXG4gICAgICAgICAgICBidWYucHVzaCggdmFsMnN0ciggcHJvcFZhbCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjb252ZXJ0b3IgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIGJ1Zi5wdXNoKCBzdHlsZVByb3BUb1N0cmluZyggY29udmVydG9yLCBwcm9wVmFsLCB0cnVlKSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBidWYucHVzaCggY29udmVydG9yKCBwcm9wVmFsKSk7XHJcbiAgICB9KTtcclxuXHJcblx0cmV0dXJuIGJ1Zi5qb2luKHNlcGFyYXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgU3R5bGVzZXRzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgcHJvcGVydGllcyBmcm9tIHRoZSBzb3VyY2Ugc3R5bGVzZXQgdG8gdGhlIHRhcmdldCBzdHlsZXNldC4gQWxsIHJlZ3VsYXIgcHJvcGVydGllcyBhcmVcclxuICogcmVwbGFjZWQuIFRoZSBcIi0tXCIgcHJvcGVydHkgZ2V0cyBzcGVjaWFsIHRyZWF0bWVudCBiZWNhdXNlIGl0IGlzIGFuIGFycmF5LlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gc291cmNlIFxyXG4gKiBAcmV0dXJucyBSZWZlcmVuY2UgdG8gdGhlIHRhcmdldCBzdHlsZXNldCBpZiBub3QgbnVsbCBvciBhIG5ldyBzdHlsZXNldCBvdGhlcndpc2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNldHMoIHRhcmdldDogU3R5bGVzZXQgfCB1bmRlZmluZWQgfCBudWxsLFxyXG4gICAgc291cmNlOiBTdHlsZXNldCk6IFN0eWxlc2V0XHJcbntcclxuICAgIGlmICghc291cmNlKVxyXG4gICAgICAgIHJldHVybiB0YXJnZXQgPyB0YXJnZXQgOiB7fTtcclxuXHJcbiAgICAvLyBpZiB0YXJnZXQgaXMgbm90IGRlZmluZWQsIGNyZWF0ZSBpdCBhcyBhbiBlbXB0eSBvYmplY3QuIFRoaXMgb2JqZWN0IHdpbGwgYmUgcmV0dXJuZWQgYWZ0ZXJcclxuICAgIC8vIHByb3BlcnRpZXMgZnJvbSB0aGUgc291cmNlIGFyZSBjb3BpZWQgdG8gaXQuXHJcbiAgICBpZiAoIXRhcmdldClcclxuICAgIHtcclxuICAgICAgICB0YXJnZXQgPSB7fTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCB0YXJnZXQsIHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayB3aGV0aGVyIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkLiBJZiBub3QsIHdlIGNhbiBqdXN0IHVzZSB0aGUgT2JqZWN0LmFzc2lnbiBmdW5jdGlvbi5cclxuICAgIGxldCBzb3VyY2VDdXN0b21Qcm9wcyA9IHNvdXJjZVtcIi0tXCJdO1xyXG4gICAgaWYgKCFzb3VyY2VDdXN0b21Qcm9wcylcclxuICAgIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCB0YXJnZXQsIHNvdXJjZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtZXJnZSBjdXN0b20gYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzXHJcbiAgICBtZXJnZVN0eWxlc2V0Q3VzdG9tUHJvcHMoIHRhcmdldCwgc291cmNlKTtcclxuXHJcbiAgICAvLyBjb3B5IGFsbCBvdGhlciBwcm9wZXJ0aWVzIGZyb20gdGhlIHNvdXJjZVxyXG5cdGZvciggbGV0IHByb3BOYW1lIGluIHNvdXJjZSlcclxuXHR7XHJcbiAgICAgICAgaWYgKHByb3BOYW1lID09PSBcIiFcIiB8fCBwcm9wTmFtZSA9PT0gXCItLVwiKVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRhcmdldFtwcm9wTmFtZV0gPSBzb3VyY2VbcHJvcE5hbWVdO1xyXG5cdH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgXCItLVwiIHByb3BlcnR5IGZyb20gdGhlIHNvdXJjZSBzdHlsZXNldCB0byB0aGUgdGFyZ2V0IHN0eWxlc2V0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU3R5bGVzZXRDdXN0b21Qcm9wcyggdGFyZ2V0OiBTdHlsZXNldCxcclxuICAgIHNvdXJjZTogU3R5bGVzZXQpOiB2b2lkXHJcbntcclxuICAgIC8vIGNoZWNrIHdoZXRoZXIgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGltcG9ydGFudCBwcm9wZXJ0aWVzIGFyZSBkZWZpbmVkXHJcbiAgICBsZXQgc291cmNlQ3VzdG9tUHJvcHMgPSBzb3VyY2VbXCItLVwiXTtcclxuICAgIGlmICghc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgIC8vIG1lcmdlIGN1c3RvbSBwcm9wZXJ0aWVzXHJcbiAgICBpZiAoc291cmNlQ3VzdG9tUHJvcHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRhcmdldEN1c3RvbVByb3BzID0gdGFyZ2V0W1wiLS1cIl07XHJcbiAgICAgICAgdGFyZ2V0W1wiLS1cIl0gPSAhdGFyZ2V0Q3VzdG9tUHJvcHMgPyBzb3VyY2VDdXN0b21Qcm9wcy5zbGljZSgpIDogdGFyZ2V0Q3VzdG9tUHJvcHMuY29uY2F0KCBzb3VyY2VDdXN0b21Qcm9wcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZXNldCB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNldFRvU3RyaW5nKCBzdHlsZXNldDogU3R5bGVzZXQpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFzdHlsZXNldClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcblxyXG5cdGZvckFsbFByb3BzSW5TdHlsc2V0KCBzdHlsZXNldCwgKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaXNDdXN0b206IGJvb2xlYW4pOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAoaXNDdXN0b20pXHJcbiAgICAgICAgICAgIHMgKz0gYCR7bmFtZX06JHt2YWx1ZX07YDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gYCR7Y2FtZWxUb0Rhc2gobmFtZSl9OiR7dmFsdWV9O2A7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogRXh0cmFjdHMgbmFtZSBhbmQgc3RyaW5nIHZhbHVlcyBmcm9tIHRoZSBnaXZlbiBjdXN0b20gQ1NTIHByb3BlcnR5IGRlZmluaXRpb24uXHJcbiAqIEBwYXJhbSBjdXN0b21WYWwgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VzdG9tUHJvcE5hbWVBbmRWYWx1ZSggY3VzdG9tVmFsOiBDdXN0b21WYXJfU3R5bGVUeXBlKTogW3N0cmluZz8sc3RyaW5nP11cclxue1xyXG4gICAgaWYgKCFjdXN0b21WYWwpXHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgIGxldCB2YXJOYW1lOiBzdHJpbmc7XHJcbiAgICBsZXQgdGVtcGxhdGU6IHN0cmluZztcclxuICAgIGxldCB2YWx1ZTogYW55O1xyXG4gICAgaWYgKGN1c3RvbVZhbC5sZW5ndGggPT09IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyTmFtZSA9IChjdXN0b21WYWxbMF0gYXMgVmFyUnVsZSkuY3NzTmFtZTtcclxuICAgICAgICB0ZW1wbGF0ZSA9IGN1c3RvbVZhbFswXS50ZW1wbGF0ZTtcclxuICAgICAgICB2YWx1ZSA9IGN1c3RvbVZhbFsxXVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHZhck5hbWUgPSBjdXN0b21WYWxbMF07XHJcbiAgICAgICAgaWYgKCF2YXJOYW1lKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgZWxzZSBpZiAoIXZhck5hbWUuc3RhcnRzV2l0aChcIi0tXCIpKVxyXG4gICAgICAgICAgICB2YXJOYW1lID0gXCItLVwiICsgdmFyTmFtZTtcclxuXHJcbiAgICAgICAgdGVtcGxhdGUgPSBjdXN0b21WYWxbMV07XHJcbiAgICAgICAgaWYgKCF2YXJOYW1lIHx8ICF0ZW1wbGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICB2YWx1ZSA9IGN1c3RvbVZhbFsyXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW3Zhck5hbWUsIHN0eWxlUHJvcFRvU3RyaW5nKCB0ZW1wbGF0ZSwgdmFsdWUsIHRydWUpXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3R5bGUgc3RyaW5nLiBQcm9wZXJ0eSBuYW1lIGNhbiBiZSBpbiBlaXRoZXJcclxuICogZGFzaCBvciBjYW1lbCBmb3JtLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlUHJvcFRvU3RyaW5nKCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnksIHZhbHVlT25seT86IGJvb2xlYW4pOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFwcm9wTmFtZSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIHByb3BlcnR5XHJcbiAgICBsZXQgaW5mbzogYW55ID0gU3R5bGVQcm9wZXJ0eUluZm9zW2Rhc2hUb0NhbWVsKHByb3BOYW1lKV07XHJcblxyXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHRoZSBcIiFcIiBwcm9wZXJ0eSwgdGhlbiB0aGUgYWN0dWFsIHZhbHVlIGlzIHRoZVxyXG4gICAgLy8gdmFsdWUgb2YgdGhpcyBwcm9wZXJ0eSBhbmQgd2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgXCIhaW1wb3J0YW50XCIgZmxhZ1xyXG4gICAgbGV0IHZhclZhbHVlID0gcHJvcFZhbDtcclxuICAgIGxldCBpbXBGbGFnID0gZmFsc2U7XHJcbiAgICBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwib2JqZWN0XCIgJiYgXCIhXCIgaW4gcHJvcFZhbClcclxuICAgIHtcclxuICAgICAgICB2YXJWYWx1ZSA9IHByb3BWYWxbXCIhXCJdO1xyXG4gICAgICAgIGltcEZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdHJpbmdWYWx1ZSA9ICFpbmZvXHJcbiAgICAgICAgPyB2YWwyc3RyKCB2YXJWYWx1ZSlcclxuICAgICAgICA6IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiXHJcbiAgICAgICAgICAgID8gdmFsMnN0ciggdmFyVmFsdWUsIGluZm8gYXMgSVZhbHVlQ29udmVydE9wdGlvbnMpXHJcbiAgICAgICAgICAgIDogdHlwZW9mIGluZm8gPT09IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgID8gdmFsdWVUb1N0cmluZ0J5V2VsbEtub3duRnVuYyggdmFyVmFsdWUsIGluZm8pXHJcbiAgICAgICAgICAgICAgICA6IChpbmZvIGFzIFRvU3RyaW5nRnVuYykoIHZhclZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXN0cmluZ1ZhbHVlICYmICF2YWx1ZU9ubHkpXHJcbiAgICAgICAgc3RyaW5nVmFsdWUgPSBcImluaXRpYWxcIjtcclxuXHJcbiAgICBpZiAoaW1wRmxhZylcclxuICAgICAgICBzdHJpbmdWYWx1ZSArPSBcIiAhaW1wb3J0YW50XCI7XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlT25seSA/IHN0cmluZ1ZhbHVlIDogYCR7Y2FtZWxUb0Rhc2goIHByb3BOYW1lKX06JHtzdHJpbmdWYWx1ZX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3IgZWFjaCBwcm9wZXJ0eSAtIHJlZ3VsYXIgYW5kIGN1c3RvbSAtIGluIHRoZSBnaXZlbiBzdHlsZXNldCBpbnZva2VzIHRoZSBhcHByb3ByaWF0ZVxyXG4gKiBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIHByb3BlcnR5IG5hbWUgYW5kIHRoZSB2YWx1ZSBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG4gKiBAcGFyYW0gc3R5bGVzZXQgXHJcbiAqIEBwYXJhbSBmb3JQcm9wIFxyXG4gKiBAcGFyYW0gZm9yQ3VzdG9tUHJvcCBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JBbGxQcm9wc0luU3R5bHNldCggc3R5bGVzZXQ6IFN0eWxlc2V0LFxyXG4gICAgZm9yUHJvcDogKG5hbWU6IHN0cmluZywgdmFsOiBzdHJpbmcsIGlzQ3VzdG9tOiBib29sZWFuKSA9PiB2b2lkKVxyXG57XHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0aWYgKHByb3BOYW1lID09PSBcIi0tXCIpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNwZWNpYWwgaGFuZGxpbmcgb2YgdGhlIFwiLS1cIiBwcm9wZXJ0eSwgd2hpY2ggaXMgYW4gYXJyYXkgd2hlcmUgZWFjaCBpdGVtIGlzXHJcblx0XHRcdC8vIGEgdHdvLWl0ZW0gb3IgdGhyZWUtaXRlbSBhcnJheVxyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHN0eWxlc2V0W3Byb3BOYW1lXSBhcyBDdXN0b21WYXJfU3R5bGVUeXBlW107XHJcblx0XHRcdGZvciggbGV0IGN1c3RvbVZhbCBvZiBwcm9wVmFsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFjdXN0b21WYWwpXHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdFx0bGV0IFt2YXJOYW1lLCB2YXJWYWx1ZV0gPSBnZXRDdXN0b21Qcm9wTmFtZUFuZFZhbHVlKCBjdXN0b21WYWwpO1xyXG5cdFx0XHRcdGlmICghdmFyTmFtZSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmICh2YXJWYWx1ZSA9PSBudWxsKVxyXG5cdFx0XHRcdFx0dmFyVmFsdWUgPSBcIlwiO1xyXG5cclxuXHRcdFx0XHRmb3JQcm9wKCB2YXJOYW1lLCB2YXJWYWx1ZSwgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGZvclByb3AoIHByb3BOYW1lLCBzdHlsZVByb3BUb1N0cmluZyggcHJvcE5hbWUsIHN0eWxlc2V0W3Byb3BOYW1lXSwgdHJ1ZSksIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBnaXZlbiBtdWx0aS1sZW5ndGggdmFsdWUgdG8gc3RyaW5nLiBJZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZVxyXG4vLyBpdGVtcyB3aWxsIGJlIHNlcGFyYXRlZCBieSBzcGFjZS5cclxuZnVuY3Rpb24gbXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIENzc0xlbmd0aE1hdGgubXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIFwiIFwiKTtcclxufVxyXG5cclxuLy8gSGVscGVyIGZ1bmN0aW9uIGNvbnZlcnRzIHRoZSBnaXZlbiBtdWx0aS10aW1lIHZhbHVlIHRvIHN0cmluZy4gSWYgdGhlIHZhbHVlIGlzIGFuIGFycmF5LCB0aGVcclxuLy8gaXRlbXMgd2lsbCBiZSBzZXBhcmF0ZWQgYnkgY29tbWEuXHJcbmZ1bmN0aW9uIG11bHRpVGltZVRvU3RyaW5nV2l0aENvbW1hKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4pOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIENzc1RpbWVNYXRoLm11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBcIixcIik7XHJcbn1cclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nLiBJZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZSBpdGVtcyB3aWxsIGJlXHJcbi8vIHNlcGFyYXRlZCBieSBjb21tYS5cclxuZnVuY3Rpb24gYXJyYXlUb1N0cmluZ1dpdGhDb21tYSggdmFsOiBhbnkpXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHsgYXJyU2VwOiBcIixcIiB9KTtcclxufTtcclxuXHJcbi8vIEhlbHBlciBmdW5jdGlvbiBjb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nLiBJZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZSBpdGVtcyB3aWxsIGJlXHJcbi8vIHNlcGFyYXRlZCBieSBzbGFzaC5cclxuZnVuY3Rpb24gYXJyYXlUb1N0cmluZ1dpdGhTbGFzaCggdmFsOiBhbnkpXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHsgYXJyU2VwOiBcIi9cIiB9KTtcclxufTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE51bWVyaWMgaWRlbnRpZmllcnMgY29ycmVzcG9uZGluZyB0byB3ZWxsIGtub3duIGZ1bmN0aW9ucyB1c2VkIHRvIGNvbnZlcnQgc3R5bGUgcHJvcGVydHkgdmFsdWVzXHJcbiAqIHRvIHN0cmluZ3MuIFRoaXMgaXMgdXNlZCB0byByZWR1Y2UgdGhlIHNpemUgb2YgdGhlIG9iamVjdCB1c2VkIGZvciBtYXBwaW5nIHN0eWxlIHByb3BlcnRpZXMgdG9cclxuICogY29udmVyc2lvbiBmdW5jdGlvbnMuXHJcbiAqIFxyXG4gKiBOb3RlISEhOiB0aGUgdmFsdWVzIGluIHRoZSBlbnVtZXJhdGlvbiBjYW5ub3QgYmUgY2hhbmdlZCAtIG90aGVyd2lzZSwgaXQgd2lsbCBub3QgYmUgYmFja3dhcmRzXHJcbiAqIGNvbXBhdGlibGUuIEFsbCBuZXcgdmFsdWVzIG11c3QgYmUgYXBwZW5kZWQgYXQgdGhlIGVuZC5cclxuICovXHJcbmNvbnN0IGVudW0gV2VsbEtub3duRnVuY1xyXG57XHJcbiAgICBMZW5ndGggPSAxLFxyXG4gICAgQ29sb3IsXHJcbiAgICBCb3JkZXIsXHJcbiAgICBQb3NpdGlvbixcclxuICAgIENvcm5lclJhZGl1cyxcclxuICAgIE11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBBcnJheVdpdGhTbGFzaCxcclxuICAgIEdyaWRBeGlzLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgdG8gc3RyaW5nIHVzaW5nIGEgd2VsbC1rbm93biBmdW5jdGlvbiBpbmRpY2F0ZWQgYnkgdGhlIGdpdmVuXHJcbiAqIGVudW1lcmF0aW9uIHZhbHVlLlxyXG4gKiBAcGFyYW0gdmFsIFxyXG4gKiBAcGFyYW0gZnVuY1R5cGUgXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWx1ZVRvU3RyaW5nQnlXZWxsS25vd25GdW5jKCB2YWw6IGFueSwgZnVuY1R5cGU6IFdlbGxLbm93bkZ1bmMpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IGZ1bmMgPVxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkxlbmd0aCA/IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQ29sb3IgPyBjb2xvclRvU3RyaW5nIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5Cb3JkZXIgPyBib3JkZXJUb1N0cmluZyA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24gPyBwb3Myc3RyIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5Db3JuZXJSYWRpdXMgPyBzaW5nbGVDb3JuZXJSYWRpdXNUb1N0cmluZyA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UgPyBtdWx0aUxlbmd0aFRvU3RyaW5nV2l0aFNwYWNlIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEgPyBtdWx0aVRpbWVUb1N0cmluZ1dpdGhDb21tYSA6XHJcbiAgICAgICAgZnVuY1R5cGUgPT09IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEgPyBhcnJheVRvU3RyaW5nV2l0aENvbW1hIDpcclxuICAgICAgICBmdW5jVHlwZSA9PT0gV2VsbEtub3duRnVuYy5BcnJheVdpdGhTbGFzaCA/IGFycmF5VG9TdHJpbmdXaXRoU2xhc2ggOlxyXG4gICAgICAgIGZ1bmNUeXBlID09PSBXZWxsS25vd25GdW5jLkdyaWRBeGlzID8gZ3JpZEF4aXNUb1N0cmluZyA6XHJcbiAgICAgICAgbnVsbDtcclxuXHJcbiAgICByZXR1cm4gZnVuYyA/IGZ1bmModmFsKSA6IFwiXCI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlZ2lzdHJ5IG9mIENTUyBwcm9wZXJ0aWVzIHRoYXQgc3BlY2lmaWVzIGhvdyB0aGVpciB2YWx1ZXMgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byBzdHJpbmdzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gdGhlIFN0eWxlUHJvcGVydHlJbmZvIG9iamVjdHMgZGVzY3JpYmluZyBjdXN0b20gYWN0aW9ucyBuZWNlc3NhcnkgdG9cclxuICogY29udmVydCB0aGUgcHJvcGVydHkgdmFsdWUgdG8gdGhlIENTUy1jb21wbGlhbnQgc3RyaW5nLlxyXG4gKi9cclxuY29uc3QgU3R5bGVQcm9wZXJ0eUluZm9zOiB7IFtLIGluIFZhclRlbXBsYXRlTmFtZV0/OiAoV2VsbEtub3duRnVuYyB8IFRvU3RyaW5nRnVuYyB8IElWYWx1ZUNvbnZlcnRPcHRpb25zKSB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQW5pbWF0aW9uX2Zyb21PYmplY3QsXHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlQW5pbWF0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGlvbkRlbGF5OiBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBXZWxsS25vd25GdW5jLk11bHRpVGltZVdpdGhDb21tYSxcclxuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uRmlsbE1vZGU6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBhbmltYXRpb25OYW1lOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uUGxheVN0YXRlOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IHRpbWluZ0Z1bmN0aW9uVG9TdHJpbmcsXHJcblxyXG4gICAgYmFja2dyb3VuZDoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQmFja2dyb3VuZF9mcm9tT2JqZWN0LFxyXG4gICAgICAgIGZyb21Bbnk6IHNpbmdsZUJhY2tncm91bmRfZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBzaW5nbGVCYWNrZ3JvdW5kX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRDbGlwOiBXZWxsS25vd25GdW5jLkFycmF5V2l0aENvbW1hLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYmFja2dyb3VuZE9yaWdpbjogV2VsbEtub3duRnVuYy5BcnJheVdpdGhDb21tYSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogdiA9PiBtdWx0aVBvczJzdHIoIHYsIFwiLFwiKSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoQ29tbWEsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBhcnJJdGVtRnVuYzogc2luZ2xlQmFja2dyb3VuZFNpemVfZnJvbVN0eWxlLFxyXG4gICAgICAgIGFyclNlcDogXCIsXCJcclxuICAgIH0sXHJcbiAgICBiYXNlbGluZVNoaWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlcjogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCbG9ja0VuZDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJCbG9ja0VuZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVyQmxvY2tFbmRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckJsb2NrU3RhcnRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckJsb2NrU3RhcnRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJCb3R0b206IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBXZWxsS25vd25GdW5jLkNvcm5lclJhZGl1cyxcclxuICAgIGJvcmRlckJvdHRvbVdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGJvcmRlckNvbG9yOiB7XHJcbiAgICAgICAgZnJvbUFueTogY29sb3JUb1N0cmluZ1xyXG4gICAgfSxcclxuICAgIGJvcmRlckltYWdlOiB7XHJcbiAgICAgICAgZnJvbU9iajogYm9yZGVySW1hZ2VUb1N0cmluZyxcclxuICAgIH0sXHJcbiAgICBib3JkZXJJbWFnZVNsaWNlOiBib3JkZXJJbWFnZVNsaWNlVG9TdHJpbmcsXHJcbiAgICBib3JkZXJJbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVySW5saW5lRW5kQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBib3JkZXJJbmxpbmVFbmRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJJbmxpbmVTdGFydENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJMZWZ0OiBXZWxsS25vd25GdW5jLkJvcmRlcixcclxuICAgIGJvcmRlckxlZnRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlckxlZnRXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1c1RvU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHQ6IFdlbGxLbm93bkZ1bmMuQm9yZGVyLFxyXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlclJpZ2h0V2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyU3BhY2luZzogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIGJvcmRlclRvcDogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IFdlbGxLbm93bkZ1bmMuQ29ybmVyUmFkaXVzLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm9yZGVyV2lkdGg6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBib3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgYm94U2hhZG93OiB7XHJcbiAgICAgICAgZnJvbU9iajogc2luZ2xlQm94U2hhZG93X2Zyb21PYmplY3QsXHJcbiAgICAgICAgYXJyU2VwOiBcIixcIixcclxuICAgIH0sXHJcblxyXG4gICAgY2FyZXRDb2xvcjogV2VsbEtub3duRnVuYy5Db2xvcixcclxuICAgIGNsaXA6ICB7XHJcbiAgICAgICAgZnJvbUFycmF5OiB2ID0+IGByZWN0KCR7bXVsdGlMZW5ndGhUb1N0cmluZ1dpdGhTcGFjZSh2KX1gXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBjb2x1bW5HYXA6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgY29sdW1uUnVsZTogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBjb2x1bW5SdWxlQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBjb2x1bW5SdWxlV2lkdGg6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBjb2x1bW5zOiBjb2x1bW5zVG9TdHJpbmcsXHJcbiAgICBjb2x1bW5XaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBjdXJzb3I6IGN1cnNvclRvU3RyaW5nLFxyXG5cclxuICAgIGZpbGw6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBmaWxsT3BhY2l0eTogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIGZsZXg6IGZsZXhUb1N0cmluZyxcclxuICAgIGZsZXhCYXNpczogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBmbG9vZENvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG4gICAgZm9udDoge1xyXG4gICAgICAgIGZyb21PYmo6IGZvbnRfZnJvbU9iamVjdFxyXG4gICAgfSxcclxuICAgIGZvbnRTaXplOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIGZvbnRTdHlsZTogZm9udFN0eWxlVG9TdHJpbmcsXHJcblxyXG4gICAgZ2FwOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgZ3JpZENvbHVtbkdhcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBncmlkR2FwOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgZ3JpZFJvd0dhcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBncmlkQXJlYTogV2VsbEtub3duRnVuYy5BcnJheVdpdGhTbGFzaCxcclxuICAgIGdyaWRBdXRvQ29sdW1uczogV2VsbEtub3duRnVuYy5HcmlkQXhpcyxcclxuICAgIGdyaWRBdXRvUm93czogV2VsbEtub3duRnVuYy5HcmlkQXhpcyxcclxuICAgIGdyaWRDb2x1bW46IFdlbGxLbm93bkZ1bmMuQXJyYXlXaXRoU2xhc2gsXHJcbiAgICBncmlkUm93OiBXZWxsS25vd25GdW5jLkFycmF5V2l0aFNsYXNoLFxyXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM6IGdyaWRUZW1wbGF0ZUFyZWFzVG9TdHJpbmcsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBXZWxsS25vd25GdW5jLkdyaWRBeGlzLFxyXG4gICAgZ3JpZFRlbXBsYXRlUm93czogV2VsbEtub3duRnVuYy5HcmlkQXhpcyxcclxuXHJcbiAgICBoZWlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIGlubGluZVNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIGxlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbGV0dGVyU3BhY2luZzogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBsaWdodGluZ0NvbG9yOiBXZWxsS25vd25GdW5jLkNvbG9yLFxyXG5cclxuICAgIG1hcmdpbjogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIG1hcmdpbkJsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbkJsb2NrU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWFyZ2luQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpbklubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5JbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJnaW5MZWZ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpblJpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1hcmdpblRvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXJrZXJFbmQ6IG1hcmtlclN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJrZXJNaWQ6IG1hcmtlclN0eWxlVG9TdHJpbmcsXHJcbiAgICBtYXJrZXJTdGFydDogbWFya2VyU3R5bGVUb1N0cmluZyxcclxuICAgIG1heEJsb2NrU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXhIZWlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWF4SW5saW5lU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtYXhXaWR0aDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBtaW5CbG9ja1NpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgbWluSGVpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIG1pbklubGluZVNpemU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cdG1pbldpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBvYmplY3RQb3NpdGlvbjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIG9mZnNldDogb2Zmc2V0VG9TdHJpbmcsXHJcbiAgICBvZmZzZXRBbmNob3I6IFdlbGxLbm93bkZ1bmMuUG9zaXRpb24sXHJcbiAgICBvZmZzZXREaXN0YW5jZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBvZmZzZXRQb3NpdGlvbjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIG9mZnNldFJvdGF0ZToge1xyXG4gICAgICAgIGZyb21Bbnk6IENzc0FuZ2xlTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgb3V0bGluZTogV2VsbEtub3duRnVuYy5Cb3JkZXIsXHJcbiAgICBvdXRsaW5lQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBvdXRsaW5lT2Zmc2V0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBwYWRkaW5nOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgcGFkZGluZ0Jsb2NrRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdCbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdCb3R0b206IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0lubGluZUVuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBwYWRkaW5nSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHBhZGRpbmdUb3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGVyc3BlY3RpdmU6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IHtcclxuICAgICAgICBmcm9tQW55OiBDc3NMZW5ndGhNYXRoLnN0eWxlVG9TdHJpbmdcclxuICAgIH0sXHJcblxyXG4gICAgcXVvdGVzOiB7XHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHYgPT4gYFwiJHt2fVwiYFxyXG4gICAgfSxcclxuXHJcbiAgICByaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICByb3RhdGU6IHJvdGF0ZVRvU3RyaW5nLFxyXG4gICAgcm93R2FwOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICBzY3JvbGxiYXJDb2xvcjoge1xyXG4gICAgICAgIGFyckl0ZW1GdW5jOiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsTWFyZ2luOiBXZWxsS25vd25GdW5jLk11bHRpTGVuZ3RoV2l0aFNwYWNlLFxyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2s6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja1N0YXJ0OiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbE1hcmdpbkJvdHRvbTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmU6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxNYXJnaW5JbmxpbmVFbmQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lU3RhcnQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsTWFyZ2luTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5SaWdodDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxNYXJnaW5Ub3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZzogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9jazogV2VsbEtub3duRnVuYy5NdWx0aUxlbmd0aFdpdGhTcGFjZSxcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9ja0VuZDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nQm90dG9tOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmU6IFdlbGxLbm93bkZ1bmMuTXVsdGlMZW5ndGhXaXRoU3BhY2UsXHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lRW5kOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVTdGFydDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nTGVmdDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzY3JvbGxQYWRkaW5nUmlnaHQ6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgc2Nyb2xsUGFkZGluZ1RvcDogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzaGFwZU1hcmdpbjogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICBzdG9wQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICBzdHJva2U6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcblxyXG4gICAgdGFiU2l6ZTogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICB0ZXh0Q29tYmluZVVwcmlnaHQ6IHtcclxuICAgICAgICBmcm9tTnVtYmVyOiB2ID0+IGBkaWdpdHMgJHt2fWBcclxuICAgIH0sXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjoge1xyXG4gICAgICAgIGZyb21OdW1iZXI6IGNvbG9yVG9TdHJpbmcsXHJcbiAgICAgICAgZnJvbU9iajogdGV4dERlY29yYXRpb25fZnJvbU9iamVjdFxyXG4gICAgfSxcclxuICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogV2VsbEtub3duRnVuYy5MZW5ndGgsXHJcbiAgICB0ZXh0RW1waGFzaXM6IHtcclxuICAgICAgICBmcm9tQW55OiBjb2xvclRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I6IFdlbGxLbm93bkZ1bmMuQ29sb3IsXHJcbiAgICB0ZXh0SW5kZW50OiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdGV4dFNoYWRvdzoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZUJveFNoYWRvd19mcm9tT2JqZWN0LFxyXG4gICAgICAgIGFyclNlcDogXCIsXCIsXHJcbiAgICB9LFxyXG4gICAgdGV4dFNpemVBZGp1c3Q6IENzc1BlcmNlbnRNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICB0b3A6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgdHJhbnNmb3JtT3JpZ2luOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgIGZyb21PYmo6IHNpbmdsZVRyYW5zaXRpb25fZnJvbU9iamVjdCxcclxuICAgICAgICBmcm9tQW55OiBzaW5nbGVUcmFuc2l0aW9uX2Zyb21TdHlsZSxcclxuICAgICAgICBhcnJTZXA6IFwiLFwiLFxyXG4gICAgfSxcclxuICAgIHRyYW5zaXRpb25EZWxheTogV2VsbEtub3duRnVuYy5NdWx0aVRpbWVXaXRoQ29tbWEsXHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IFdlbGxLbm93bkZ1bmMuTXVsdGlUaW1lV2l0aENvbW1hLFxyXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiB0aW1pbmdGdW5jdGlvblRvU3RyaW5nLFxyXG4gICAgdHJhbnNsYXRlOiB7XHJcbiAgICAgICAgZnJvbUFueTogQ3NzTGVuZ3RoTWF0aC5zdHlsZVRvU3RyaW5nXHJcbiAgICB9LFxyXG5cclxuICAgIHZlcnRpY2FsQWxpZ246IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG5cclxuICAgIHdpZHRoOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuICAgIHdpbGxDaGFuZ2U6IHtcclxuICAgICAgICBmcm9tU3RyaW5nOiBjYW1lbFRvRGFzaFxyXG4gICAgfSxcclxuICAgIHdvcmRTcGFjaW5nOiBXZWxsS25vd25GdW5jLkxlbmd0aCxcclxuXHJcbiAgICB6b29tOiBDc3NQZXJjZW50TWF0aC5zdHlsZVRvU3RyaW5nLFxyXG5cclxuICAgIC8vIHNwZWNpYWwgcHJvcGVydGllcyBmb3IgSVZhclJ1bGUgdHlwZXNcclxuICAgIFwiQ3NzTGVuZ3RoXCI6IFdlbGxLbm93bkZ1bmMuTGVuZ3RoLFxyXG4gICAgXCJDc3NBbmdsZVwiOiBDc3NBbmdsZU1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzVGltZVwiOiBDc3NUaW1lTWF0aC5zdHlsZVRvU3RyaW5nLFxyXG4gICAgXCJDc3NSZXNvbHV0aW9uXCI6IENzc1Jlc29sdXRpb25NYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc0ZyZXF1ZW5jeVwiOiBDc3NGcmVxdWVuY3lNYXRoLnN0eWxlVG9TdHJpbmcsXHJcbiAgICBcIkNzc1BlcmNlbnRcIjogQ3NzUGVyY2VudE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgIFwiQ3NzUG9zaXRpb25cIjogV2VsbEtub3duRnVuYy5Qb3NpdGlvbixcclxuICAgIFwiQ3NzQ29sb3JcIjogV2VsbEtub3duRnVuYy5Db2xvcixcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBzdXBwb3J0cyBxdWVyeS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN1cHBvcnRzIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzUXVlcnlUb1N0cmluZyggcXVlcnk6IFN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHZhbDJzdHIoIHF1ZXJ5LCB7XHJcbiAgICAgICAgZnJvbUFueTogc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nLFxyXG4gICAgICAgIGFyclNlcDogXCIgb3IgXCJcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU3VwcG9ydHNRdWVyeVRvU3RyaW5nKCBxdWVyeTogU2luZ2xlU3VwcG9ydHNRdWVyeSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggcXVlcnksIHtcclxuICAgICAgICBmcm9tT2JqOiAodjogRXh0ZW5kZWRTdHlsZXNldCAmIHsgJG5lZ2F0ZT86IGJvb2xlYW47IH0pID0+IHtcclxuICAgICAgICAgICAgbGV0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKCB2KS5maWx0ZXIoIChwcm9wTmFtZSkgPT4gcHJvcE5hbWUgIT0gXCIkbmVnYXRlXCIpO1xyXG4gICAgICAgICAgICBpZiAocHJvcE5hbWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5vdCA9IHYuJG5lZ2F0ZSA/IFwibm90XCIgOiBcIlwiO1xyXG4gICAgICAgICAgICByZXR1cm4gIGAke25vdH0gKCR7cHJvcE5hbWVzLm1hcCggKHByb3BOYW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgc3R5bGVQcm9wVG9TdHJpbmcoIHByb3BOYW1lIGFzIGtleW9mIEV4dGVuZGVkU3R5bGVzZXQsIHF1ZXJ5W3Byb3BOYW1lXSkpLmpvaW4oIFwiKSBhbmQgKFwiKX0pYDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgRXh0ZW5kZWQsIE9uZU9yUGFpciwgT25lT3JCb3gsIE9uZU9yTWFueSwgQ3NzTnVtYmVyLCBDc3NQb3NpdGlvbiwgTXVsdGlDc3NQb3NpdGlvbixcclxuICAgIENzc1RpbWUsIENzc0xlbmd0aCwgQ3NzQW5nbGUsIENzc1BlcmNlbnQsIENzc0xlbmd0aEJveCwgQ3NzTXVsdGlUaW1lLCBDc3NGcmVxdWVuY3ksXHJcbiAgICBDc3NSZXNvbHV0aW9uLCBDc3NSYWRpdXMsIElVcmxQcm94eSwgSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsXHJcbiAgICBDc3NQb2ludCwgRXh0ZW5kZWRQcm9wLCBJR2VuZXJpY1Byb3h5LCBDc3NMZW5ndGhQYWlyLCBJUXVvdGVkUHJveHlcclxufSBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5pbXBvcnQge0Nzc0NvbG9yfSBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0IHtDc3NJbWFnZX0gZnJvbSBcIi4vSW1hZ2VUeXBlc1wiO1xyXG5pbXBvcnQge0ZvbnRTdHJldGNoX1NpbmdsZX0gZnJvbSBcIi4vRm9udEZhY2VUeXBlc1wiO1xyXG5pbXBvcnQge0lWYXJSdWxlLCBJQW5pbWF0aW9uUnVsZSwgSUNvdW50ZXJSdWxlLCBJSURSdWxlLCBJR3JpZExpbmVSdWxlLCBJR3JpZEFyZWFSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIHByb3BlcnR5IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbi1jb250ZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFsaWduQ29udGVudF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHxcclxuICAgIFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHwgXCJzYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgY2VudGVyXCIgfFxyXG4gICAgXCJzcGFjZS1iZXR3ZWVuXCIgfCBcInNwYWNlLWFyb3VuZFwiIHwgXCJzcGFjZS1ldmVubHlcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFsaWduLWl0ZW1zIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFsaWduSXRlbXNfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8XHJcbiAgICBcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8IFwic2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIGNlbnRlclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ24tc2VsZiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnblNlbGZfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHxcclxuICAgIFwic2VsZi1zdGFydFwiIHwgXCJzZWxmLWVuZFwiIHwgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfFxyXG4gICAgXCJzYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgY2VudGVyXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbm1lbnQtYmFzZWxpbmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25tZW50QmFzZWxpbmVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImJhc2VsaW5lXCIgfCBcImJlZm9yZS1lZGdlXCIgfCBcInRleHQtYmVmb3JlLWVkZ2VcIiB8XHJcbiAgICBcIm1pZGRsZVwiIHwgXCJjZW50cmFsXCIgfCBcImFmdGVyLWVkZ2VcIiB8IFwidGV4dC1hZnRlci1lZGdlXCIgfCBcImlkZW9ncmFwaGljXCIgfCBcImFscGhhYmV0aWNcIiB8XHJcbiAgICBcImhhbmdpbmdcIiB8IFwibWF0aGVtYXRpY2FsXCIgfCBcInRvcFwiIHwgXCJjZW50ZXJcIiB8IFwiYm90dG9tXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbl9TaW5nbGUgPVxyXG4gICAge1xyXG4gICAgICAgIG5hbWU/OiBFeHRlbmRlZDxBbmltYXRpb25OYW1lX1NpbmdsZT47XHJcbiAgICAgICAgZHVyYXRpb24/OiBFeHRlbmRlZDxDc3NUaW1lPjtcclxuICAgICAgICBmdW5jPzogRXh0ZW5kZWQ8VGltaW5nRnVuY3Rpb25fU2luZ2xlPjtcclxuICAgICAgICBkZWxheT86IEV4dGVuZGVkPENzc1RpbWU+O1xyXG4gICAgICAgIGNvdW50PzogRXh0ZW5kZWQ8QW5pbWF0aW9uSXRlcmF0aW9uQ291bnRfU2luZ2xlPjtcclxuICAgICAgICBkaXJlY3Rpb24/OiBFeHRlbmRlZDxBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlPjtcclxuICAgICAgICBtb2RlPzogRXh0ZW5kZWQ8QW5pbWF0aW9uRmlsbE1vZGVfU2luZ2xlPjtcclxuICAgICAgICBzdGF0ZT86IEV4dGVuZGVkPEFuaW1hdGlvblBsYXlTdGF0ZV9TaW5nbGU+O1xyXG4gICAgfTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uX1N0eWxlVHlwZSA9IHN0cmluZyB8IE9uZU9yTWFueTxBbmltYXRpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1kZWxheSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EZWxheV9TdHlsZVR5cGUgPSBDc3NNdWx0aVRpbWU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGRpcmVjdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlID0gXCJub3JtYWxcIiB8IFwicmV2ZXJzZVwiIHwgXCJhbHRlcm5hdGVcIiB8IFwiYWx0ZXJuYXRlLXJldmVyc2VcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZGlyZWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkRpcmVjdGlvbl9TdHlsZVR5cGUgPSBPbmVPck1hbnk8QW5pbWF0aW9uRGlyZWN0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZHVyYXRvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EdXJhdGlvbl9TdHlsZVR5cGUgPSBDc3NNdWx0aVRpbWU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGZpbGwgbW9kZSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GaWxsTW9kZV9TaW5nbGUgPSBcIm5vbmVcIiB8IFwiZm9yd2FyZHNcIiB8IFwiYmFja3dhcmRzXCIgfCBcImJvdGhcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZmlsbC1tb2RlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZpbGxNb2RlX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25EaXJlY3Rpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gaXRlcmF0aW9uIGNvdW50ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1NpbmdsZSA9IFwiaW5maW5pdGVcIiB8IENzc051bWJlcjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25JdGVyYXRpb25Db3VudF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBuYW1lICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbk5hbWVfU2luZ2xlID0gXCJub25lXCIgfCBzdHJpbmcgfCBJQW5pbWF0aW9uUnVsZTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tbmFtZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25OYW1lX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxBbmltYXRpb25OYW1lX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIHBsYXkgc3RhdGUgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uUGxheVN0YXRlX1NpbmdsZSA9IFwicGF1c2VkXCIgfCBcInJ1bm5pbmdcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tcGxheS1zdGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25QbGF5U3RhdGVfU3R5bGVUeXBlID0gT25lT3JNYW55PEFuaW1hdGlvblBsYXlTdGF0ZV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2ltcGxlIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb25zIC0gdGhvc2UgdGhhdCBkb24ndCBoYXZlIHBhcmFtZXRlcnMgKi9cclxuZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb25fU2ltcGxlID0gXCJsaW5lYXJcIiB8IFwiZWFzZVwiIHwgXCJlYXNlLWluXCIgfCBcImVhc2Utb3V0XCIgfCBcImVhc2UtaW4tb3V0XCIgfCBcInN0ZXAtc3RhcnRcIiB8IFwic3RlcC1lbmRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzdGVwIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgVGltaW5nRnVuY3Rpb25fU3RlcFBvc2l0aW9uID0gXCJqdW1wLXN0YXJ0XCIgfCBcImp1bXAtZW5kXCIgfCBcImp1bXAtbm9uZVwiIHwgXCJqdW1wLWJvdGhcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc3RlcCBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX1N0ZXAgPSBudW1iZXIgfCBbRXh0ZW5kZWQ8bnVtYmVyPiwgRXh0ZW5kZWQ8VGltaW5nRnVuY3Rpb25fU3RlcFBvc2l0aW9uPj9dO1xyXG5cclxuLyoqIFR5cGUgZm9yIEJlemllciBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uICovXHJcbmV4cG9ydCB0eXBlIFRpbWluZ0Z1bmN0aW9uX0JlemllciA9IFtFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+XTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBUaW1pbmdGdW5jdGlvbl9TaW5nbGUgPSBUaW1pbmdGdW5jdGlvbl9TaW1wbGUgfCBUaW1pbmdGdW5jdGlvbl9TdGVwIHwgVGltaW5nRnVuY3Rpb25fQmV6aWVyO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fU3R5bGVUeXBlID0gT25lT3JNYW55PFRpbWluZ0Z1bmN0aW9uX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZmFjZS12aXNpYmlsaXR5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tmYWNlVmlzaWJpbGl0eU1vZGVfU3R5bGVUeXBlID0gXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgdmFsdWUgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZF9TaW5nbGUgPSBzdHJpbmcgfCBDc3NDb2xvciB8XHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICAgICAgaW1hZ2U/OiBFeHRlbmRlZDxDc3NJbWFnZSB8IHN0cmluZz4sXHJcbiAgICAgICAgcG9zaXRpb24/OiBFeHRlbmRlZDxDc3NQb3NpdGlvbj4sXHJcbiAgICAgICAgc2l6ZT86IEV4dGVuZGVkPEJhY2tncm91bmRTaXplX1NpbmdsZT4sXHJcbiAgICAgICAgcmVwZWF0PzogRXh0ZW5kZWQ8QmFja2dyb3VuZFJlcGVhdF9TaW5nbGU+LFxyXG4gICAgICAgIGF0dGFjaG1lbnQ/OiBFeHRlbmRlZDxCYWNrZ3JvdW5kQXR0YWNobWVudF9TaW5nbGU+LFxyXG4gICAgICAgIG9yaWdpbj86IEV4dGVuZGVkPEJhY2tncm91bmRPcmlnaW5fU2luZ2xlPixcclxuICAgICAgICBjbGlwPzogRXh0ZW5kZWQ8QmFja2dyb3VuZENsaXBfU2luZ2xlPixcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCBhdHRhY2htZW50ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRBdHRhY2htZW50X1NpbmdsZSA9IFwic2Nyb2xsXCIgfCBcImZpeGVkXCIgfCBcImxvY2FsXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1hdHRhY2htZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRBdHRhY2htZW50X1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kQXR0YWNobWVudF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgYmxlbmQgbW9kZSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQmxlbmRNb2RlX1NpbmdsZSA9IFwibm9ybWFsXCIgfCBcIm11bHRpcGx5XCIgfCBcInNjcmVlblwiIHwgXCJvdmVybGF5XCIgfCBcImRhcmtlblwiIHxcclxuICAgIFwibGlnaHRlblwiIHwgXCJjb2xvci1kb2RnZVwiIHwgXCJjb2xvci1idXJuXCIgfCBcImhhcmQtbGlnaHRcIiB8IFwic29mdC1saWdodFwiIHwgXCJkaWZmZXJlbmNlXCIgfFxyXG4gICAgXCJleGNsdXNpb25cIiB8IFwiaHVlXCIgfCBcInNhdHVyYXRpb25cIiB8IFwiY29sb3JcIiB8IFwibHVtaW5vc2l0eVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtYmxlbmQtbW9kZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQmxlbmRNb2RlX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kQmxlbmRNb2RlX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCBjbGlwICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRDbGlwX1NpbmdsZSA9IFwiYm9yZGVyLWJveFwiIHwgXCJwYWRkaW5nLWJveFwiIHwgXCJjb250ZW50LWJveFwiIHwgXCJ0ZXh0XCI7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1jbGlwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRDbGlwX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kQ2xpcF9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1pbWFnZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kSW1hZ2VfU3R5bGVUeXBlID0gXCJub25lXCIgfCBPbmVPck1hbnk8Q3NzSW1hZ2UgfCBzdHJpbmc+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgb3JpZ2luICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRPcmlnaW5fU2luZ2xlID0gXCJib3JkZXItYm94XCIgfCBcInBhZGRpbmctYm94XCIgfCBcImNvbnRlbnQtYm94XCIgfCBcInRleHRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLW9yaWdpbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kT3JpZ2luX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxCYWNrZ3JvdW5kT3JpZ2luX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRQb3NpdGlvbl9TdHlsZVR5cGUgPSBNdWx0aUNzc1Bvc2l0aW9uO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgcmVwZWF0ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRSZXBlYXRLZXl3b3JkX1NpbmdsZSA9IFwicmVwZWF0XCIgfCBcInNwYWNlXCIgfCBcInJvdW5kXCIgfCBcIm5vLXJlcGVhdFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIHJlcGVhdCAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUmVwZWF0X1NpbmdsZSA9IFwicmVwZWF0LXhcIiB8IFwicmVwZWF0LXlcIiB8IE9uZU9yUGFpcjxCYWNrZ3JvdW5kUmVwZWF0S2V5d29yZF9TaW5nbGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtcmVwZWF0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRSZXBlYXRfU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRSZXBlYXRfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQgc2l6ZSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kU2l6ZV9TaW5nbGUgPSBcImNvdmVyXCIgfCBcImNvbnRhaW5cIiB8IE9uZU9yUGFpcjxDc3NMZW5ndGggfCBcImF1dG9cIj47XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgYmFja2dyb3VuZC1zaXplIHN0eWxlIHByb3BlcnR5LiBUaGUgYmFja2dyb3VuZC1zaXplIHN0eWxlIGNhbiBzcGVjaWZ5IG9uZSBvciBtb3JlXHJcbiAqIGNvbW1hLXNlcGFyYXRlZCBzaXplcywgd2hlcmUgZWFjaCBzaXplIGNhbiBiZSBhIGtleXdvcmQsIGEgbGVuZ3RoIG9yIHR3byBsZW5ndGhzLiBXZSBtb2RlbFxyXG4gKiB0aGlzIHN0cnVjdHVyZSB0aGUgZm9sbG93aW5nIHdheTpcclxuICogLSBpZiB0aGUgdmFsdWUgaXMgYSBzdHJpbmcgb3IgYSBudW1iZXIsIHRoYXQncyB0aGUgb25seSB2YWx1ZTtcclxuICogLSBpZiB0aGUgdmFsdWUgaXMgYW4gYXJyYXksIHRoZW4gaXQgaXMgYSBsaXN0IG9mIHNldmVyYWwgc2l6ZXMuIEVhY2ggZWxlbWVudCBpbiB0aGlzIGFycmF5IGlzXHJcbiAqICAgZWl0aGVyIGEga2V5d29yZCBvciBhIGxlbmd0aCBvciBhbiBhcnJheSBvZiB0d28gZWxlbWVudHMuXHJcbiAqIFRodXMgWzEwMCwyMDBdIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgXCIxMDBweCwgMjAwcHhcIiBhbmQgbm90IFwiMTAwcHggMjAwcHhcIjsgdGhhdCBpcywgaXQgd2lsbFxyXG4gKiBkZWZpbmUgdHdvIHNpemVzIGVhY2ggd2l0aCBhIHdpZHRoIGluc3RlYWQgb2Ygb25lIHNpemUgd2l0aCBib3RoIHdpZHRoIGFuZCBoZWlnaHQuIElmIHlvdSBuZWVkXHJcbiAqIHRvIHNwZWNpZnkgYm90aCB3aWR0aCBhbmQgaGVpZ2h0IHlvdSBtdXN0IHVzZSBhcnJheSB3aXRoaW4gYXJyYXkgLSBldmVuIGZvciBhIHNpbmdsZSBzaXplOlxyXG4gKiBbWzEwMCwyMDBdXSB3bGwgYmUgaW50ZXJwcmV0ZWQgYXMgXCIxMDBweCAyMDBweFwiLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFNpemVfU3R5bGVUeXBlID0gT25lT3JNYW55PEJhY2tncm91bmRTaXplX1NpbmdsZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYXNlbGluZS1zaGlmdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYXNlbGluZVNoaWZ0X1N0eWxlVHlwZSA9IFwic3ViXCIgfCBcInN1cGVyXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItY29sbGFwc2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyQ29sYXBzZV9TdHlsZVR5cGUgPSBcImNvbGxhcHNlXCIgfCBcInNlcGFyYXRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItY29sb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyQ29sb3JfU3R5bGVUeXBlID0gT25lT3JCb3g8Q3NzQ29sb3I+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlIHN0eWxlIHByb3BlcnR5IGV4cHJlc3NlZCBhcyBhbiBvYmplY3QuICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlX09iamVjdCA9XHJcbiAgICB7XHJcbiAgICAgICAgc291cmNlOiBFeHRlbmRlZDxCb3JkZXJJbWFnZVNvdXJjZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHNsaWNlPzogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGU+LFxyXG4gICAgICAgIHdpZHRoPzogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VXaWR0aF9TdHlsZVR5cGU+LFxyXG4gICAgICAgIG91dHNldD86IEV4dGVuZGVkPEJvcmRlckltYWdlT3V0c2V0X1N0eWxlVHlwZT4sXHJcbiAgICAgICAgcmVwZWF0PzogRXh0ZW5kZWQ8Qm9yZGVySW1hZ2VSZXBlYXRfU3R5bGVUeXBlPixcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlIHN0eWxlIHByb3BlcnR5LiAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZV9TdHlsZVR5cGUgPSBzdHJpbmcgfCBDc3NJbWFnZSB8IEJvcmRlckltYWdlX09iamVjdDtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utb3V0c2V0IHN0eWxlIHByb3BlcnR5LiBJdCBpcyBDc3NOdW1iZXIgYW5kIG5vdCBDc3NMZW5ndGggYmVjYXVzZVxyXG4gKiBib3JkZXItaW1hZ2Utb3V0c2V0IGNhbiBiZSBzcGVjaWZpZWQgYXMgYSB1bml0bGVzcyBudW1iZXIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZU91dHNldF9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NOdW1iZXIgfCBzdHJpbmc+O1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS1yZXBlYXQga2V5d29yZHMgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VSZXBlYXRfS2V5d29yZCA9IFwic3RyZXRjaFwiIHwgXCJyZXBlYXRcIiB8IFwicm91bmRcIiB8IFwic3BhY2VcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2UtcmVwZWF0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlUmVwZWF0X1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxCb3JkZXJJbWFnZVJlcGVhdF9LZXl3b3JkPjtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utc2xpY2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VTbGljZV9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NOdW1iZXIgfCBzdHJpbmc+IHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCB0cnVlXSB8XHJcbiAgICBbRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgRXh0ZW5kZWQ8Q3NzTnVtYmVyIHwgc3RyaW5nPiwgdHJ1ZV0gfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIEV4dGVuZGVkPENzc051bWJlciB8IHN0cmluZz4sIHRydWVdIHxcclxuICAgIFtFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCBFeHRlbmRlZDxDc3NOdW1iZXIgfCBzdHJpbmc+LCB0cnVlXTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utc291cmNlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlU291cmNlX1N0eWxlVHlwZSA9IE9uZU9yQm94PENzc0ltYWdlIHwgc3RyaW5nPjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utd2lkdGggc3R5bGUgcHJvcGVydHkuIEl0IGlzIENzc051bWJlciBhbmQgbm90IENzc0xlbmd0aCBiZWNhdXNlXHJcbiAqIGJvcmRlci1pbWFnZS13aWR0aCBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgdW5pdGxlc3MgbnVtYmVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VXaWR0aF9TdHlsZVR5cGUgPSBPbmVPckJveDxDc3NOdW1iZXIgfCBcImF1dG9cIiB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItcmFkaXVzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclJhZGl1c19TdHlsZVR5cGUgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoQm94PjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1zcGFjaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclNwYWNpbmdfU3R5bGVUeXBlID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYm9yZGVyIHNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyU3R5bGVfS2V5d29yZCA9IFwibm9uZVwiIHwgXCJoaWRkZW5cIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiIHwgXCJzb2xpZFwiIHwgXCJkb3VibGVcIiB8XHJcbiAgICBcImdyb292ZVwiIHwgXCJyaWRnZVwiIHwgXCJpbnNldFwiIHwgXCJvdXRzZXRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJTdHlsZV9TdHlsZVR5cGUgPSBPbmVPckJveDxCb3JkZXJTdHlsZV9LZXl3b3JkPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJfU3R5bGVUeXBlID0gQ3NzTGVuZ3RoIHwgQm9yZGVyU3R5bGVfS2V5d29yZCB8IENzc0NvbG9yIHxcclxuICAgIFtFeHRlbmRlZDxDc3NMZW5ndGg+PywgRXh0ZW5kZWQ8Qm9yZGVyU3R5bGVfS2V5d29yZD4/LCBFeHRlbmRlZDxDc3NDb2xvcj4/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlciBzaWRlIHdpZHRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlcldpZHRoX1NpbmdsZSA9IFwidGhpblwiIHwgXCJtZWRpdW1cIiB8IFwidGhpY2tcIiB8IENzc0xlbmd0aDtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItd2lkdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhfU3R5bGVUeXBlID0gT25lT3JCb3g8Qm9yZGVyV2lkdGhfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBib3ggc2hhZG93LiAqL1xyXG5leHBvcnQgdHlwZSBCb3hTaGFkb3dfU2luZ2xlID0gXCJub25lXCIgfCBzdHJpbmcgfFxyXG4gICAge1xyXG4gICAgICAgIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBibHVyPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBzcHJlYWQ/OiBFeHRlbmRlZDxDc3NMZW5ndGg+LFxyXG4gICAgICAgIGNvbG9yPzogRXh0ZW5kZWQ8Q3NzQ29sb3I+LFxyXG4gICAgICAgIGluc2V0PzogRXh0ZW5kZWQ8Ym9vbGVhbj5cclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgYm94IHNoYWRvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3hTaGFkb3dfU3R5bGVUeXBlID0gT25lT3JNYW55PEJveFNoYWRvd19TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm94LXNpemluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3hTaXppbmdfU3R5bGVUeXBlID0gXCJjb250ZW50LWJveFwiIHwgXCJib3JkZXItYm94XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBicmVhay1hZnRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCcmVha0FmdGVyX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJhdm9pZFwiIHwgXCJhbHdheXNcIiB8IFwiYWxsXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwicGFnZVwiIHxcclxuICAgIFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJyZWN0b1wiIHwgXCJ2ZXJzb1wiIHwgXCJhdm9pZC1jb2x1bW5cIiB8IFwiY29sdW1uXCIgfFxyXG4gICAgXCJhdm9pZC1yZWdpb25cIiB8IFwicmVnaW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBicmVhay1iZWZvcmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQnJlYWtCZWZvcmVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImF2b2lkXCIgfCBcImFsd2F5c1wiIHwgXCJhbGxcIiB8IFwiYXZvaWQtcGFnZVwiIHwgXCJwYWdlXCIgfFxyXG4gICAgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInJlY3RvXCIgfCBcInZlcnNvXCIgfCBcImF2b2lkLWNvbHVtblwiIHwgXCJjb2x1bW5cIiB8XHJcbiAgICBcImF2b2lkLXJlZ2lvblwiIHwgXCJyZWdpb25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJyZWFrLWluc2lkZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCcmVha0luc2lkZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiYXZvaWRcIiB8IFwiYXZvaWQtcGFnZVwiIHwgXCJhdm9pZC1jb2x1bW5cIiB8IFwiYXZvaWQtcmVnaW9uXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjYXB0aW9uLXNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2FwdGlvblNpZGVfU3R5bGVUeXBlID0gXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImJsb2NrLXN0YXJ0XCIgfCBcImJsb2NrLWVuZFwiIHwgXCJpbmxpbmUtc3RhcnRcIiB8IFwiaW5saW5lLWVuZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2FyZXQtY29sb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2FyZXRDb2xvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IENzc0NvbG9yO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2xlYXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xlYXJfU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiYm90aFwiIHwgXCJpbmxpbmUtc3RhcnRcIiB8IFwiaW5saW5lLWVuZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2xpcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDbGlwX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzTGVuZ3RoQm94O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSB1c2VkIGZvciBzZXZlcmFsIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgR2VvbWV0cnlCb3hLZXl3b3JkID0gXCJtYXJnaW4tYm94XCIgfCBcImJvcmRlci1ib3hcIiB8IFwicGFkZGluZy1ib3hcIiB8IFwiY29udGVudC1ib3hcIiB8XHJcbiAgICBcImZpbGwtYm94XCIgfCBcInN0cm9rZS1ib3hcIiB8IFwidmlldy1ib3hcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGV4dGVudCBmb3IgdGhlIGByYWRpYWwtZ3JhZGllbnQoKWAgb3IgYHJheSgpYCBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbnRLZXl3b3JkID0gXCJjbG9zZXN0LWNvcm5lclwiIHwgXCJjbG9zZXN0LXNpZGVcIiB8IFwiZmFydGhlc3QtY29ybmVyXCIgfCBcImZhcnRoZXN0LXNpZGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNsaXAtcGF0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDbGlwUGF0aF9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IElVcmxQcm94eSB8IEJhc2ljU2hhcGUgfCBHZW9tZXRyeUJveEtleXdvcmQgfFxyXG4gICAgW0dlb21ldHJ5Qm94S2V5d29yZCwgQmFzaWNTaGFwZV07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjbGlwLXJ1bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xpcFJ1bGVfU3R5bGVUeXBlID0gXCJub256ZXJvXCIgfCBcImV2ZW5vZGRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbG9yLWludGVycG9sYXRpb24gYW5kIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIENvbG9ySW50ZXJwb2xhdGlvbl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwic1JHQlwiIHwgXCJsaW5lYXJSR0JcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1jb3VudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5Db3VudF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IG51bWJlcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1maWxsIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbHVtbkZpbGxfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImJhbGFuY2VcIiB8IFwiYmFsYW5jZS1hbGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1nYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uR2FwX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tc3BhbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5TcGFuX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhbGxcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGNvbHVtbnMgc3R5bGUgcHJvcGVydHkuIFRoZSB2YWx1ZSBjYW4gYmUgcHJvdmlkZWQgaW4gb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybXMgYW5kXHJcbiAqIGFuZCB3aWxsIGJlIGNvbnZlcnRlZCB0byBzdHJpbmcgYXMgZm9sbG93czpcclxuICogXHJcbiAqIC0gc3RyaW5nOiB3aWxsIGJlIHRyZWF0ZWQgYXMgaXMuXHJcbiAqIC0gbnVtYmVyOiB3aWxsIGJlIGNvbnZlcnRlZCB0byBhIHVuaXRsZXNzIG51bWJlciAtIGNvdW50IG9mIGNvbHVtbnMuXHJcbiAqIC0gSUxlbmd0aFByb3h5IChlLmcuIHB4KDgpKTogY29udmVydGVkIHRvIGEgbnVtYmVyIHdpdGggdGhlIHByb3BlciBsZW5ndGggdW5pdHMuXHJcbiAqIC0gdHdvIHZhcmlhbnRzIG9mIHR3byBlbGVtZW50IGFycmF5czogb25lIG9mIHRoZSBlbGVtZW50cyB3aWxsIGJlIHRyZWF0ZWQgYXMgYSBudW1iZXIgb2YgY29sdW1uc1xyXG4gKiAgIHdoaWxlIGFub3RoZXIgYXMgdGhlIGNvbHVtbiB3aWR0aC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbHVtbnNfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBDc3NOdW1iZXIgfCBDc3NMZW5ndGggfFxyXG4gICAgW1wiYXV0b1wiIHwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPiwgXCJhdXRvXCIgfCBFeGNsdWRlPEV4dGVuZGVkPENzc0xlbmd0aD4sbnVtYmVyPl0gfFxyXG4gICAgW1wiYXV0b1wiIHwgRXhjbHVkZTxFeHRlbmRlZDxDc3NMZW5ndGg+LG51bWJlcj4sIFwiYXV0b1wiIHwgRXh0ZW5kZWQ8Q3NzTnVtYmVyPl07XHJcbi8vIE5vdGUgdGhhdCBubyBzcGVjaWFsIGNvdmVyc2lvbiBmdW5jdGlvbiBpcyByZXF1aXJlZCBmb3IgdGhpcyBwcm9wZXJ0eSBiZWNhdXNlIHRoZSBudW1iZXIgdHlwZSB3aWxsXHJcbi8vIGFsd2F5cyBiZSBjb252ZXJ0ZWQgdG8gYSB1bml0bGVzcyBudW1iZXJcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbnRhaW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29udGFpbl9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwic3RyaWN0XCIgfCBcImNvbnRlbnRcIiB8IFwic2l6ZVwiIHwgXCJsYXlvdXRcIiB8IFwic3R5bGVcIiB8IFwicGFpbnRcIiB8XHJcbiAgICBFeHRlbmRlZDxcInNpemVcIiB8IFwibGF5b3V0XCIgfCBcInN0eWxlXCIgfCBcInBhaW50XCI+W107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb250ZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbnRlbnRfU3R5bGVUeXBlID0gc3RyaW5nIHwgXCJub25lXCIgfCBcIm5vcm1hbFwiIHwgT25lT3JNYW55PENzc0ltYWdlIHxcclxuICAgIFwib3Blbi1xdW90ZVwiIHwgXCJjbG9zZS1xdW90ZVwiIHwgXCJuby1vcGVuLXF1b3RlXCIgfCBcIm5vLWNsb3NlLXF1b3RlXCI+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY291bnRlci1pbmNyZW1lbnQsIGNvdW50ZXItcmVzZXQgYW5kIGNvdW50ZXItc2V0IHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgQ291bnRlcl9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IE9uZU9yTWFueTxJQ291bnRlclJ1bGUgfCBzdHJpbmcgfCBbSUNvdW50ZXJSdWxlIHwgc3RyaW5nLCBFeHRlbmRlZDxudW1iZXI+XT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjdXJzb3IgcHJlLWRlZmluZWQgbmFtZXMgKi9cclxuZXhwb3J0IHR5cGUgQ3Vyc29yX0tleXdvcmQgPSBcImF1dG9cIiB8IFwiZGVmYXVsdFwiIHwgXCJub25lXCIgfCBcImNvbnRleHQtbWVudVwiIHwgXCJoZWxwXCIgfCBcInBvaW50ZXJcIiB8IFwicHJvZ3Jlc3NcIiB8XHJcbiAgICBcIndhaXRcIiB8IFwiY2VsbFwiIHwgXCJjcm9zc2hhaXJcIiB8IFwidGV4dFwiIHwgXCJ2ZXJ0aWNhbC10ZXh0XCIgfCBcImFsaWFzXCIgfCBcImNvcHlcIiB8IFwibW92ZVwiIHxcclxuICAgIFwibm8tZHJvcFwiIHwgXCJub3QtYWxsb3dlZFwiIHwgXCJlLXJlc2l6ZVwiIHwgXCJuLXJlc2l6ZVwiIHwgXCJuZS1yZXNpemVcIiB8IFwibnctcmVzaXplXCIgfFxyXG4gICAgXCJzLXJlc2l6ZVwiIHwgXCJzZS1yZXNpemVcIiB8IFwic3ctcmVzaXplXCIgfCBcInctcmVzaXplXCIgfCBcImV3LXJlc2l6ZVwiIHwgXCJucy1yZXNpemVcIiB8XHJcbiAgICBcIm5lc3ctcmVzaXplXCIgfCBcIm53c2UtcmVzaXplXCIgfCBcImNvbC1yZXNpemVcIiB8IFwicm93LXJlc2l6ZVwiIHwgXCJhbGwtc2Nyb2xsXCIgfCBcInpvb20taW5cIiB8XHJcbiAgICBcInpvb20tb3V0XCIgfCBcImdyYWJcIiB8IFwiZ3JhYmJpbmdcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBjdXJzb3Igc3R5bGUgcHJvcGVydHkgc2luZ2xlIHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIEN1cnNvcl9TaW5nbGUgPSBDdXJzb3JfS2V5d29yZCB8IElVcmxQcm94eSB8IFtJVXJsUHJveHksIEV4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc051bWJlcj5dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGN1cnNvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDdXJzb3JfU3R5bGVUeXBlID0gT25lT3JNYW55PEN1cnNvcl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZGlyZWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIERpcmVjdGlvbl9TdHlsZVR5cGUgPSBcImx0clwiIHwgXCJydGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGRpc3BsYXkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRGlzcGxheV9TdHlsZVR5cGUgPSBcImJsb2NrXCIgfCBcImlubGluZVwiIHwgXCJydW4taW5cIiB8IFwiY29udGVudHNcIiB8IFwibm9uZVwiIHxcclxuICAgIFwiaW5saW5lLWJsb2NrXCIgfCBcImlubGluZS1saXN0LWl0ZW1cIiB8IFwiaW5saW5lLXRhYmxlXCIgfCBcImlubGluZS1mbGV4XCIgfCBcImlubGluZS1ncmlkXCIgfFxyXG4gICAgXCJmbG93XCIgfCBcImZsb3ctcm9vdFwiIHwgXCJ0YWJsZVwiIHwgXCJmbGV4XCIgfCBcImdyaWRcIiB8IFwicnVieVwiIHxcclxuICAgIFwidGFibGUtcm93LWdyb3VwXCIgfCBcInRhYmxlLWhlYWRlci1ncm91cFwiIHwgXCJ0YWJsZS1mb290ZXItZ3JvdXBcIiB8IFwidGFibGUtcm93XCIgfCBcInRhYmxlLWNlbGxcIiB8XHJcbiAgICAgICAgXCJ0YWJsZS1jb2x1bW4tZ3JvdXBcIiB8IFwidGFibGUtY29sdW1uXCIgfCBcInRhYmxlLWNhcHRpb25cIiB8IFwicnVieS1iYXNlXCIgfCBcInJ1YnktdGV4dFwiIHxcclxuICAgICAgICBcInJ1YnktYmFzZS1jb250YWluZXJcIiB8IFwicnVieS10ZXh0LWNvbnRhaW5lclwiIHxcclxuICAgIFwibGlzdC1pdGVtXCIgfCBcImxpc3QtaXRlbSBibG9ja1wiIHwgXCJsaXN0LWl0ZW0gaW5saW5lXCIgfCBcImxpc3QtaXRlbSBmbG93XCIgfCBcImxpc3QtaXRlbSBmbG93LXJvb3RcIiB8XHJcbiAgICAgICAgXCJsaXN0LWl0ZW0gYmxvY2sgZmxvd1wiIHwgXCJsaXN0LWl0ZW0gYmxvY2sgZmxvdy1yb290XCIgfCBcImZsb3cgbGlzdC1pdGVtIGJsb2NrXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4vKiogVHlwZSBmb3IgZG9taW5hbnQtYmFzZWxpbmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRG9taW5hbnRCYXNlbGluZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwidGV4dC1ib3R0b21cIiB8IFwiYWxwaGFiZXRpY1wiIHwgXCJpZGVvZ3JhcGhpY1wiIHwgXCJtaWRkbGVcIiB8XHJcbiAgICBcImNlbnRyYWxcIiB8IFwibWF0aGVtYXRpY2FsXCIgfCBcImhhbmdpbmdcIiB8IFwidGV4dC10b3BcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGVtcHR5LWNlbGxzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEVtcHR5Q2VsbHNfU3R5bGVUeXBlID0gXCJzaG93XCIgfCBcImhpZGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZpbGwtcnVsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGaWxsUnVsZV9TdHlsZVR5cGUgPSBcIm5vbnplcm9cIiB8IFwiZXZlbm9kZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmlsdGVyIGFuZCBiYWNrZHJvcC1maWx0ZXIgc3R5bGUgc2luZ2xlIHZhbHVlICovXHJcbmV4cG9ydCB0eXBlIEZpbHRlcl9TaW5nbGUgPSBzdHJpbmcgfCBJVXJsUHJveHkgfCBJRmlsdGVyUHJveHk7XHJcblxyXG4vKiogVHlwZSBmb3IgZmlsdGVyIGFuZCBiYWNrZHJvcC1maWx0ZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmlsdGVyX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxGaWx0ZXJfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleF9TdHlsZVR5cGUgPSBGbGV4QmFzaXNfU3R5bGVUeXBlIHwgW0V4dGVuZGVkPG51bWJlcj4sIEV4dGVuZGVkPG51bWJlcj5dIHxcclxuICAgIFtFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxudW1iZXI+LCBFeHRlbmRlZDxGbGV4QmFzaXNfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LWJhc2lzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhCYXNpc19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiY29udGVudFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleC1kaXJlY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleERpcmVjdGlvbl9TdHlsZVR5cGUgPSBcInJvd1wiIHwgXCJyb3ctcmV2ZXJzZVwiIHwgXCJjb2x1bW5cIiB8IFwiY29sdW1uLXJldmVyc2VcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtZmxvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4Rmxvd19TdHlsZVR5cGUgPSBGbGV4RGlyZWN0aW9uX1N0eWxlVHlwZSB8IEZsZXhXcmFwX1N0eWxlVHlwZSB8XHJcbiAgICBbRXh0ZW5kZWQ8RmxleERpcmVjdGlvbl9TdHlsZVR5cGU+LCBFeHRlbmRlZDxGbGV4V3JhcF9TdHlsZVR5cGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtd3JhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4V3JhcF9TdHlsZVR5cGUgPSBcIm5vd3JhcFwiIHwgXCJ3cmFwXCIgfCBcIndyYXAtcmV2ZXJzZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxvYXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxvYXRfU3R5bGVUeXBlID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcIm5vbmVcIiB8IFwiaW5saW5lLXN0YXJ0XCIgfCBcImlubGluZS1lbmRcIjtcclxuXHJcblxyXG5cclxuLyoqIEtleXdvcmRzIGZvciBmb250IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRfU3lzdGVtS2V5d29yZCA9IFwiY2FwdGlvblwiIHwgXCJpY29uXCIgfCBcIm1lbnVcIiB8IFwibWVzc2FnZS1ib3hcIiB8IFwic21hbGwtY2FwdGlvblwiIHwgXCJzdGF0dXMtYmFyXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgZm9udCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250X1N0eWxlVHlwZSA9IHN0cmluZyB8IEZvbnRfU3lzdGVtS2V5d29yZCB8XHJcbiAgICB7XHJcbiAgICAgICAgc2l6ZTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPjtcclxuICAgICAgICBmYW1pbHk6IEV4dGVuZGVkPHN0cmluZz47XHJcbiAgICAgICAgc3R5bGU/OiBFeHRlbmRlZDxGb250U3R5bGVfU3R5bGVUeXBlPjtcclxuICAgICAgICB2YXJpYW50PzogRXh0ZW5kZWQ8c3RyaW5nPjtcclxuICAgICAgICB3ZWlnaHQ/OiBFeHRlbmRlZDxGb250V2VpZ2h0X1N0eWxlVHlwZT47XHJcbiAgICAgICAgc3RyZXRjaD86IEV4dGVuZGVkPEV4Y2x1ZGU8Rm9udFN0cmV0Y2hfU2luZ2xlLG51bWJlcj4+O1xyXG4gICAgICAgIGxpbmVIZWlnaHQ/OiBFeHRlbmRlZDxDc3NOdW1iZXI+XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1rZXJuaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRLZXJuaW5nX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub3JtYWxcIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1vcHRpY2FsLXNpemluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250T3B0aWNhbFNpemluZ19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1zaXplIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRTaXplX1N0eWxlVHlwZSA9IFwieHgtc21hbGxcIiB8IFwieC1zbWFsbFwiIHwgXCJzbWFsbFwiIHwgXCJtZWRpdW1cIiB8IFwibGFyZ2VcIiB8XHJcbiAgICBcIngtbGFyZ2VcIiB8IFwieHgtbGFyZ2VcIiB8IFwieHh4LWxhcmdlXCIgfCBcImxhcmdlclwiIHwgXCJzbWFsbGVyXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXN0cmV0Y2ggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFN0cmV0Y2hfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwidWx0cmEtY29uZGVuc2VkXCIgfCBcImV4dHJhLWNvbmRlbnNlZFwiIHwgXCJjb25kZW5zZWRcIiB8XHJcblwic2VtaS1jb25kZW5zZWRcIiB8IFwic2VtaS1leHBhbmRlZFwiIHwgXCJleHBhbmRlZFwiIHwgXCJleHRyYS1leHBhbmRlZFwiIHwgXCJ1bHRyYS1leHBhbmRlZFwiIHwgQ3NzTnVtYmVyO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250U3R5bGVfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiaXRhbGljXCIgfCBcIm9ibGlxdWVcIiB8IENzc0FuZ2xlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC1zeW50aGVzaXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFN5bnRoZXNpc19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwid2VpZ2h0XCIgfCBcInN0eWxlXCIgfCBcIndlaWdodCBzdHlsZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC12YXJpYW50LWNhcHMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFZhcmlhbnRDYXBzX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInNtYWxsLWNhcHNcIiB8IFwiYWxsLXNtYWxsLWNhcHNcIiB8XHJcbiAgICBcInBldGl0ZS1jYXBzXCIgfCBcImFsbC1wZXRpdGUtY2Fwc1wiIHwgXCJ1bmljYXNlXCIgfCBcInRpdGxpbmctY2Fwc1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC12YXJpYW50LXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRWYXJpYW50UG9zaXRpb25fU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3ViXCIgfCBcInN1cGVyXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXdlaWdodCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGb250V2VpZ2h0X1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImJvbGRcIiB8IFwiYm9sZGVyXCIgfCBcImxpZ2h0ZXJcIiB8IENzc051bWJlcjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdhcCBvciBncmlkLWdhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBHYXBfU3R5bGVUeXBlID0gUm93R2FwX1N0eWxlVHlwZSB8IFtSb3dHYXBfU3R5bGVUeXBlLCBDb2x1bW5HYXBfU3R5bGVUeXBlXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIHRlbXBsYXRlIGVsZW1lbnQgZGVmaW5pbmcgdHJhY2sgc2l6ZSBpbiBncmlkIHRlbXBsYXRlICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUcmFja1NpemUgPSBDc3NMZW5ndGggfCBcIm1pbi1jb250ZW50XCIgfCBcIm1heC1jb250ZW50XCIgfCBcImF1dG9cIiB8XHJcbiAgICBJTWluTWF4UHJveHkgfCBJRml0Q29udGVudFByb3h5IHwgSVJlcGVhdFByb3h5O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC1hdXRvLWNvbHVtbnMgYW5kIGdyaWQtYXV0by1yb3dzIHN0eWxlIHByb3BlcnRpZXMgKi9cclxuZXhwb3J0IHR5cGUgR3JpZEF1dG9BeGlzX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxHcmlkVHJhY2tTaXplPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtYXV0by1mbG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEdyaWRBdXRvRmxvd19TdHlsZVR5cGUgPSBcInJvd1wiIHwgXCJjb2x1bW5cIiB8IFwiZGVuc2VcIiB8IFwicm93IGRlbnNlXCIgfCBcImNvbHVtbiBkZW5zZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc3BlY2lmeWluZyBlaXRoZXIgbnVtYmVyIG9mIGdyaWQgbGluZXMgb3IgbmFtZSBvZiBncmlkIGxpbmUgb3IgYXJlYSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkTGluZUNvdW50T3JOYW1lID0gQ3NzTnVtYmVyIHwgSUdyaWRBcmVhUnVsZSB8IElHcmlkTGluZVJ1bGUgfCBzdHJpbmc7XHJcblxyXG4vKiogVHlwZSBmb3IgZ3JpZC1jb2x1bW4tc3RhcnQvZW5kIGFuZCBncmlkLXJvdy1zdGFydC9lbmQgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXhpc1NpZGVfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBHcmlkTGluZUNvdW50T3JOYW1lIHwgSVNwYW5Qcm94eTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtY29sdW1uIGFuZCBncmlkLXJvdyBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdyaWRBeGlzX1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxHcmlkQXhpc1NpZGVfU3R5bGVUeXBlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGdyaWQtYXJlYSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBHcmlkQXJlYV9TdHlsZVR5cGUgPSBPbmVPckJveDxHcmlkQXhpc1NpZGVfU3R5bGVUeXBlPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIGRlZmluaW5nIGEgc2luZ2xlIGdyaWQgYXJlYSBwb3NpdGlvbi4gVGhlIG51bWJlcnMgYXJlIDEtYmFzZWQgaW5kaWNlcyBvZiB0aGUgbGluZXMgaW5cclxuICogdGhlIGZvbGxvd2luZyBzZXF1ZW5jZTogYmxvY2sgc3RhcnQsIGlubGluZSBzdGFydCwgYmxvY2sgZW5kLCBpbmxpbmUgZW5kLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uID0gW0lHcmlkQXJlYVJ1bGUgfCBFeHRlbmRlZDxzdHJpbmc+LFxyXG4gICAgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLXRlbXBsYXRlLWFyZWFzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUZW1wbGF0ZUFyZWFzX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgT25lT3JNYW55PElRdW90ZWRQcm94eT4gfFxyXG4gICAgR3JpZFRlbXBsYXRlQXJlYV9EZWZpbml0aW9uW107XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBhIHNpbmdsZSB0ZW1wbGF0ZSBlbGVtZW50IGRlZmluaW5nIG5hbWUgb3IgbmFtZXMgZm9yIGEgZ3JpZCBsaW5lIGluIGdyaWQgdGVtcGxhdGUuXHJcbiAqIFRoaXMgaXMgYWx3YXlzIGFuIGFycmF5IC0gZXZlbiBpZiBhIHNpbmdsZSBuYW1lIGlzIGdpdmVuLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgR3JpZFRyYWNrTGluZSA9IChJR3JpZExpbmVSdWxlIHwgRXh0ZW5kZWQ8c3RyaW5nPilbXTtcclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSB0cmFjayBlbGVtZW50IG9mIGdyaWQgdGVtcGxhdGUgYXhpcyAqL1xyXG5leHBvcnQgdHlwZSBHcmlkVHJhY2sgPSBHcmlkVHJhY2tTaXplIHwgR3JpZFRyYWNrTGluZTtcclxuXHJcbi8qKiBUeXBlIGZvciBncmlkLXRlbXBsYXRlLWNvbHVtbnMgYW5kIGdyaWQtdGVtcGxhdGUtcm93cyBzdHlsZSBwcm9wZXJ0aWVzICovXHJcbmV4cG9ydCB0eXBlIEdyaWRUZW1wbGF0ZUF4aXNfU3R5bGVUeXBlID0gXCJub25lXCIgfCBPbmVPck1hbnk8R3JpZFRyYWNrPiB8IFwic3ViZ3JpZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgaHlwaGVucyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBIeXBoZW5zX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJtYW51YWxcIiB8IFwiYXV0b1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgaW1hZ2UtcmVuZGVyaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEltYWdlUmVuZGVyaW5nX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJjcmlzcC1lZGdlc1wiIHwgXCJwaXhlbGF0ZWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGlzb2xhdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBJc29sYXRpb25fU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImlzb2xhdGVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGp1c3RpZnktY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBKdXN0aWZ5Q29udGVudF9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzcGFjZS1iZXR3ZWVuXCIgfCBcInNwYWNlLWFyb3VuZFwiIHwgXCJzcGFjZS1ldmVubHlcIiB8IFwic3RyZXRjaFwiIHxcclxuICAgIFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8XHJcbiAgICBcInNhZmUgY2VudGVyXCIgfCBcInNhZmUgc3RhcnRcIiB8IFwic2FmZSBlbmRcIiB8IFwic2FmZSBmbGV4LXN0YXJ0XCIgfCBcInNhZmUgZmxleC1lbmRcIiB8IFwic2FmZSBsZWZ0XCIgfCBcInNhZmUgcmlnaHRcIiB8XHJcbiAgICBcInVuc2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIHN0YXJ0XCIgfCBcInVuc2FmZSBlbmRcIiB8IFwidW5zYWZlIGZsZXgtc3RhcnRcIiB8IFwidW5zYWZlIGZsZXgtZW5kXCIgfCBcInVuc2FmZSBsZWZ0XCIgfCBcInVuc2FmZSByaWdodFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IganVzdGlmeS1pdGVtcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBKdXN0aWZ5SXRlbXNfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfFxyXG4gICAgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcInNlbGYtc3RhcnRcIiB8IFwic2VsZi1lbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfFxyXG4gICAgXCJzYWZlIGNlbnRlclwiIHwgXCJzYWZlIHN0YXJ0XCIgfCBcInNhZmUgZW5kXCIgfCBcInNhZmUgc2VsZi1zdGFydFwiIHwgXCJzYWZlIHNlbGYtZW5kXCIgfCBcInNhZmUgZmxleC1zdGFydFwiIHwgXCJzYWZlIGZsZXgtZW5kXCIgfCBcInNhZmUgbGVmdFwiIHwgXCJzYWZlIHJpZ2h0XCIgfFxyXG4gICAgXCJ1bnNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBzdGFydFwiIHwgXCJ1bnNhZmUgZW5kXCIgfCBcInVuc2FmZSBzZWxmLXN0YXJ0XCIgfCBcInVuc2FmZSBzZWxmLWVuZFwiIHwgXCJ1bnNhZmUgZmxleC1zdGFydFwiIHwgXCJ1bnNhZmUgZmxleC1lbmRcIiB8IFwidW5zYWZlIGxlZnRcIiB8IFwidW5zYWZlIHJpZ2h0XCIgfFxyXG4gICAgXCJsZWdhY3lcIiB8IFwibGVnYWN5IGxlZnRcIiB8IFwibGVnYWN5IHJpZ2h0XCIgfCBcImxlZ2FjeSBjZW50ZXJcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGp1c3RpZnktc2VsZiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBKdXN0aWZ5U2VsZl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHxcclxuICAgIFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJzZWxmLXN0YXJ0XCIgfCBcInNlbGYtZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHxcclxuICAgIFwic2FmZSBjZW50ZXJcIiB8IFwic2FmZSBzdGFydFwiIHwgXCJzYWZlIGVuZFwiIHwgXCJzYWZlIHNlbGYtc3RhcnRcIiB8IFwic2FmZSBzZWxmLWVuZFwiIHwgXCJzYWZlIGZsZXgtc3RhcnRcIiB8IFwic2FmZSBmbGV4LWVuZFwiIHwgXCJzYWZlIGxlZnRcIiB8IFwic2FmZSByaWdodFwiIHxcclxuICAgIFwidW5zYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgc3RhcnRcIiB8IFwidW5zYWZlIGVuZFwiIHwgXCJ1bnNhZmUgc2VsZi1zdGFydFwiIHwgXCJ1bnNhZmUgc2VsZi1lbmRcIiB8IFwidW5zYWZlIGZsZXgtc3RhcnRcIiB8IFwidW5zYWZlIGZsZXgtZW5kXCIgfCBcInVuc2FmZSBsZWZ0XCIgfCBcInVuc2FmZSByaWdodFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGV0dGVyLXNwYWNpbmcgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGV0dGVyU3BhY2luZ19TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgQ3NzTGVuZ3RoO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGluZS1icmVhayBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaW5lQnJlYWtfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImxvb3NlXCIgfCBcIm5vcm1hbFwiIHwgXCJzdHJpY3RcIiB8IFwiYW55d2hlcmVcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGxpbmUtaGVpZ2h0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpbmVIZWlnaHRfU3R5bGVUeXBlID0gQ3NzTnVtYmVyIHwgc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGlzdC1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaXN0U3R5bGVfU3R5bGVUeXBlID0gTGlzdFN0eWxlVHlwZV9TdHlsZVR5cGUgfCBMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGUgfCBMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGUgfFxyXG4gICAgW0V4dGVuZGVkPExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZT4sIEV4dGVuZGVkPExpc3RTdHlsZVBvc2l0aW9uX1N0eWxlVHlwZT5dIHxcclxuICAgIFtFeHRlbmRlZDxMaXN0U3R5bGVJbWFnZV9TdHlsZVR5cGU+LCBFeHRlbmRlZDxMaXN0U3R5bGVUeXBlX1N0eWxlVHlwZT4/XSB8XHJcbiAgICBbRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+LCBFeHRlbmRlZDxMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGU+XSB8XHJcbiAgICBbRXh0ZW5kZWQ8TGlzdFN0eWxlSW1hZ2VfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8TGlzdFN0eWxlVHlwZV9TdHlsZVR5cGU+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaW5lLXN0eWxlLWltYWdlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgSVVybFByb3h5O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgbGlzdC1zdHlsZS1wb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBMaXN0U3R5bGVQb3NpdGlvbl9TdHlsZVR5cGUgPSBcImluc2lkZVwiIHwgXCJvdXRzaWRlXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBsaXN0LXN0eWxlLXR5cGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTGlzdFN0eWxlVHlwZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiZGlzY1wiIHwgXCJjaXJjbGVcIiB8IFwic3F1YXJlXCIgfCBcImRlY2ltYWxcIiB8IFwiZGVjaW1hbC1sZWFkaW5nLXplcm9cIiB8XHJcbiAgICBcImNqay1kZWNpbWFsXCIgfCBcImNqay1lYXJ0aGx5LWJyYW5jaFwiIHwgXCJjamstaGVhdmVubHktc3RlbVwiIHwgXCJjamstaWRlb2dyYXBoaWNcIiB8XHJcbiAgICBcImxvd2VyLXJvbWFuXCIgfCBcInVwcGVyLXJvbWFuXCIgfCBcImxvd2VyLWdyZWVrXCIgfCBcImxvd2VyLWFscGhhXCIgfCBcImxvd2VyLWxhdGluXCIgfCBcInVwcGVyLWFscGhhXCIgfCBcInVwcGVyLWxhdGluXCIgfFxyXG4gICAgXCJhcmFiaWMtaW5kaWNcIiB8IFwiYXJtZW5pYW5cIiB8IFwiYmVuZ2FsaVwiIHwgXCJjYW1ib2RpYW5cIiB8IFwiZGV2YW5hZ2FyaVwiIHwgXCJnZW9yZ2lhblwiIHwgXCJndWphcmF0aVwiIHwgXCJndXJtdWtoaVwiIHwgXCJoZWJyZXdcIiB8XHJcbiAgICBcImhpcmFnYW5hXCIgfCBcImhpcmFnYW5hLWlyb2hhXCIgfCBcImphcGFuZXNlLWZvcm1hbFwiIHwgXCJqYXBhbmVzZS1pbmZvcm1hbFwiIHwgXCJrYW5uYWRhXCIgfCBcImthdGFrYW5hXCIgfCBcImthdGFrYW5hLWlyb2hhXCIgfFxyXG4gICAgXCJraG1lclwiIHwgXCJrb3JlYW4taGFuZ3VsLWZvcm1hbFwiIHwgXCJrb3JlYW4taGFuamEtZm9ybWFsXCIgfCBcImtvcmVhbi1oYW5qYS1pbmZvcm1hbFwiIHwgXCJsYW9cIiB8IFwibG93ZXItYXJtZW5pYW5cIiB8XHJcbiAgICBcIm1hbGF5YWxhbVwiIHwgXCJtb25nb2xpYW5cIiB8IFwibXlhbm1hclwiIHwgXCJvcml5YVwiIHwgXCJwZXJzaWFuXCIgfCBcInNpbXAtY2hpbmVzZS1mb3JtYWxcIiB8IFwic2ltcC1jaGluZXNlLWluZm9ybWFsXCIgfFxyXG4gICAgXCJ0YW1pbFwiIHwgXCJ0ZWx1Z3VcIiB8IFwidGhhaVwiIHwgXCJ0aWJldGFuXCIgfCBcInRyYWQtY2hpbmVzZS1mb3JtYWxcIiB8IFwidHJhZC1jaGluZXNlLWluZm9ybWFsXCIgfCBcInVwcGVyLWFybWVuaWFuXCIgfFxyXG4gICAgXCJkaXNjbG9zdXJlLW9wZW5cIiB8IFwiZGlzY2xvc3VyZS1jbG9zZWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBtYXJrZXItc3RhcnQsIG1hcmtlci1taWQgYW5kIG1hcmtlci1lbmQgc3R5bGUgcHJvcGVydGllcyAqL1xyXG5leHBvcnQgdHlwZSBNYXJrZXJfU3R5bGVUeXBlID0gXCJub25lXCIgfCBJSURSdWxlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG9iamVjdC1maXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2JqZWN0Rml0X1N0eWxlVHlwZSA9IFwiZmlsbFwiIHwgXCJjb250YWluXCIgfCBcImNvdmVyXCIgfCBcIm5vbmVcIiB8IFwic2NhbGUtZG93blwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG9mZnNldCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPZmZzZXRfU3R5bGVUeXBlID0gc3RyaW5nIHwgT2Zmc2V0UGF0aF9TdHlsZVR5cGUgfFxyXG57XHJcbiAgICBhbmNob3I/OiBPZmZzZXRBbmNob3JfU3R5bGVUeXBlLFxyXG4gICAgZGlzdGFuY2U/OiBDc3NMZW5ndGgsXHJcbiAgICBwYXRoPzogT2Zmc2V0UGF0aF9TdHlsZVR5cGUsXHJcbiAgICBwb3NpdGlvbj86IENzc1Bvc2l0aW9uLFxyXG4gICAgcm90YXRlPzogT2Zmc2V0Um90YXRlX1N0eWxlVHlwZSxcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG9mZnNldC1hbmNob3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgT2Zmc2V0QW5jaG9yX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzUG9zaXRpb247XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBvZmZzZXQtcGF0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPZmZzZXRQYXRoX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgSVJheVByb3h5IHwgSVVybFByb3h5IHwgQmFzaWNTaGFwZSB8IEdlb21ldHJ5Qm94S2V5d29yZCB8XHJcbiAgICBbR2VvbWV0cnlCb3hLZXl3b3JkLCBCYXNpY1NoYXBlXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvZmZzZXQtcm90YXRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE9mZnNldFJvdGF0ZV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwicmV2ZXJzZVwiIHwgQ3NzQW5nbGUgfCBbXCJhdXRvXCIgfCBcInJldmVyc2VcIiwgQ3NzQW5nbGVdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJmbG93LXgveSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyZmxvd19TaW5nbGVfU3R5bGVUeXBlID0gXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiIHwgXCJjbGlwXCIgfCBcInNjcm9sbFwiIHwgXCJhdXRvXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJmbG93LSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyZmxvd19TdHlsZVR5cGUgPSBPbmVPclBhaXI8T3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZT47XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcmZsb3ctYW5jaG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJmbG93QW5jaG9yX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub25lXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgb3ZlcmZsb3ctd3JhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBPdmVyZmxvd1dyYXBfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiYnJlYWstd29yZFwiIHwgXCJhbnl3aGVyZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIG92ZXJzY3JvbGwtYmVoYXZpb3IteC95IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlID0gXCJjb250YWluXCIgfCBcIm5vbmVcIiB8IFwiYXV0b1wiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBvdmVyc2Nyb2xsLWJlaGF2aW9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE92ZXJzY3JvbGxCZWhhdmlvcl9TdHlsZVR5cGUgPSBPbmVPclBhaXI8T3ZlcnNjcm9sbEJlaGF2aW9yX1NpbmdsZV9TdHlsZVR5cGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHBhaW50LW9yZGVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBhaW50T3JkZXJfS2V5d29yZCA9IFwiZmlsbFwiIHwgXCJzdHJva2VcIiB8IFwibWFya2Vyc1wiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwYWludC1vcmRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQYWludE9yZGVyX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBQYWludE9yZGVyX0tleXdvcmQgfFxyXG4gICAgW1BhaW50T3JkZXJfS2V5d29yZCwgUGFpbnRPcmRlcl9LZXl3b3JkPywgUGFpbnRPcmRlcl9LZXl3b3JkP107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGVyc3BlY3RpdmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGVyc3BlY3RpdmVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGVyc3BlY3RpdmUtb3JpZ2luIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBlcnNwZWN0aXZlT3JpZ2luX1N0eWxlVHlwZSA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aCB8XHJcbiAgICBbRXh0ZW5kZWQ8SG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aD4sIEV4dGVuZGVkPFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgQ3NzTGVuZ3RoPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGxhY2UtY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQbGFjZUNvbnRlbnRfU3R5bGVUeXBlID0gQWxpZ25Db250ZW50X1N0eWxlVHlwZSB8IFtFeHRlbmRlZDxBbGlnbkNvbnRlbnRfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8SnVzdGlmeUNvbnRlbnRfU3R5bGVUeXBlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcGxhY2UtaXRlbXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUGxhY2VJdGVtc19TdHlsZVR5cGUgPSBBbGlnbkl0ZW1zX1N0eWxlVHlwZSB8IFtFeHRlbmRlZDxBbGlnbkl0ZW1zX1N0eWxlVHlwZT4sIEV4dGVuZGVkPEp1c3RpZnlJdGVtc19TdHlsZVR5cGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwbGFjZS1zZWxmIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFBsYWNlU2VsZl9TdHlsZVR5cGUgPSBBbGlnblNlbGZfU3R5bGVUeXBlIHwgW0V4dGVuZGVkPEFsaWduU2VsZl9TdHlsZVR5cGU+LCBFeHRlbmRlZDxKdXN0aWZ5U2VsZl9TdHlsZVR5cGU+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwb2ludGVyLWV2ZW50cyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQb2ludGVyRXZlbnRzX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub25lXCIgfCBcInZpc2libGVQYWludGVkXCIgfCBcInZpc2libGVGaWxsXCIgfCBcInZpc2libGVTdHJva2VcIiB8IFwidmlzaWJsZVwiIHxcclxuICAgIFwicGFpbnRlZFwiIHwgXCJmaWxsXCIgfCBcInN0cm9rZVwiIHwgXCJhbGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBwb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBQb3NpdGlvbl9TdHlsZVR5cGUgPSBcInN0YXRpY1wiIHwgXCJyZWxhdGl2ZVwiIHwgXCJhYnNvbHV0ZVwiIHwgXCJzdGlja3lcIiB8IFwiZml4ZWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBxdW90ZXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgUXVvdGVzX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhdXRvXCIgfCBFeHRlbmRlZDxzdHJpbmc+W107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgcmVzaXplIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFJlc2l6ZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYm90aFwiIHwgXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCIgfCBcImJsb2NrXCIgfCBcImlubGluZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igcm90YXRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFJvdGF0ZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFtcInhcIiB8IFwieVwiIHwgXCJ6XCIsIEV4dGVuZGVkPENzc0FuZ2xlPl0gfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc0FuZ2xlPl07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciByb3ctZ2FwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFJvd0dhcF9TdHlsZVR5cGUgPSBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2NhbGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2NhbGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBDc3NOdW1iZXIgfFxyXG4gICAgW0V4dGVuZGVkPENzc051bWJlcj4sIEV4dGVuZGVkPENzc051bWJlcj4/LCBFeHRlbmRlZDxDc3NOdW1iZXI+P107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsYmFyLWNvbG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbGJhckNvbG9yX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJkYXJrXCIgfCBcImxpZ2h0XCIgfFxyXG4gICAgW0V4dGVuZGVkPENzc0NvbG9yPiwgRXh0ZW5kZWQ8Q3NzQ29sb3I+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGxiYXItd2lkdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsYmFyV2lkdGhfU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInRoaW5cIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbC1iZWhhdmlvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTY3JvbGxCZWhhdmlvcl9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwic21vb3RoXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgc2Nyb2xsLXNuYXAtYWxpZ24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsU25hcEFsaWduX1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxcIm5vbmVcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImNlbnRlclwiPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzY3JvbGwtc25hcC1zdG9wIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNjcm9sbFNuYXBTdG9wX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImFsd2F5c1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNjcm9sbC1zbmFwLXR5cGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2Nyb2xsU25hcFR5cGVfU3R5bGVUeXBlID0gXCJub25lXCIgfFxyXG4gICAgW0V4dGVuZGVkPFwieFwiIHwgXCJ5XCIgfCBcImJsb2NrXCIgfCBcImlubGluZVwiIHwgXCJib3RoXCI+LCBFeHRlbmRlZDxcIm1hbmRhdG9yeVwiIHwgXCJwcm94aW1pdHlcIj5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2hhcGUtb3V0c2lkZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTaGFwZU91dHNpZGVfU3R5bGVUeXBlID0gSVVybFByb3h5IHwgQmFzaWNTaGFwZSB8IEdlb21ldHJ5Qm94S2V5d29yZCB8IENzc0ltYWdlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHNoYXBlLXJlbmRlcmluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTaGFwZVJlbmRlcmluZ19TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwib3B0aW1pemVTcGVlZFwiIHwgXCJjcmlzcEVkZ2VzXCIgfCBcImdlb21ldHJpY1ByZWNpc2lvblwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRhYmxlLWxheW91dCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUYWJsZUxheW91dF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiZml4ZWRcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWFsaWduIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRBbGlnbl9TdHlsZVR5cGUgPSBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiIHwgXCJqdXN0aWZ5XCIgfCBcIm1hdGNoLXBhcmVudFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtYWxpZ24tbGFzdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0QWxpZ25MYXN0X1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIiB8IFwianVzdGlmeVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtYW5jaG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRBbmNob3JfU3R5bGVUeXBlID0gXCJzdGFydFwiIHwgXCJtaWRkbGVcIiB8IFwiZW5kXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1jb21iaW5lLXVwcmlnaHQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dENvbWJpbmVVcHJpZ2h0X1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhbGxcIiB8IFwiZGlnaXRzXCIgfCBudW1iZXI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uIHN0eWxlIHByb3BlcnR5LiBJZiBhIG51bWJlciBpcyBzcGVjaWZpZWQsIGl0IHdpbGwgYmUgaW50ZXJwcmV0ZWRcclxuICogYXMgY29sb3IgLSBub3QgYXMgdGhpY2tuZXNzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGV4dERlY29yYXRpb25fU3R5bGVUeXBlID0gVGV4dERlY29yYXRpb25MaW5lX1N0eWxlVHlwZSB8IFRleHREZWNvcmF0aW9uU3R5bGVfU3R5bGVUeXBlIHxcclxuICAgIENzc0NvbG9yIHwgVGV4dERlY29yYXRpb25UaGlja25lc3NfU3R5bGVUeXBlIHxcclxuICAgIHtcclxuICAgICAgICBsaW5lPzogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25MaW5lX1N0eWxlVHlwZT4sXHJcbiAgICAgICAgc3R5bGU/OiBFeHRlbmRlZDxUZXh0RGVjb3JhdGlvblN0eWxlX1N0eWxlVHlwZT4sXHJcbiAgICAgICAgY29sb3I/OiBFeHRlbmRlZDxDc3NDb2xvcj4sXHJcbiAgICAgICAgdGhpY2tuZXNzPzogRXh0ZW5kZWQ8VGV4dERlY29yYXRpb25UaGlja25lc3NfU3R5bGVUeXBlPixcclxuICAgIH07XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uLWxpbmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dERlY29yYXRpb25MaW5lX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJzcGVsbGluZy1lcnJvclwiIHwgXCJncmFtbWFyLWVycm9yXCIgfFxyXG4gICAgT25lT3JNYW55PFwidW5kZXJsaW5lXCIgfCBcIm92ZXJsaW5lXCIgfCBcImxpbmUtdGhyb3VnaFwiPjsgXHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uU3R5bGVfU3R5bGVUeXBlID0gXCJzb2xpZFwiIHwgXCJkb3VibGVcIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiIHwgXCJ3YXZ5XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uU2tpcElua19TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYXV0b1wiIHwgXCJhbGxcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJmcm9tLWZvbnRcIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLy8gLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWVtcGhhc2lzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc19TdHlsZVR5cGUgPSBUZXh0RW1waGFzaXNTdHlsZV9TdHlsZVR5cGUgfCBDc3NDb2xvciB8XHJcbiAgICBbRXh0ZW5kZWQ8VGV4dEVtcGhhc2lzU3R5bGVfU3R5bGVUeXBlPiwgRXh0ZW5kZWQ8Q3NzQ29sb3I+XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LWVtcGhhc2lzLXBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc1Bvc2l0aW9uX1N0eWxlVHlwZSA9IFwib3ZlciBsZWZ0XCIgfCBcIm92ZXIgcmlnaHRcIiB8IFwidW5kZXIgbGVmdFwiIHwgXCJ1bmRlciByaWdodFwiO1xyXG5cclxuXHJcblxyXG4vKiogU2hhcGUgZm9yIHRoZSB0ZXh0LWVtcGhhc2lzLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc1NoYXBlID0gXCJkb3RcIiB8IFwiY2lyY2xlXCIgfCBcImRvdWJsZS1jaXJjbGVcIiB8IFwidHJpYW5nbGVcIiB8IFwic2VzYW1lXCIgfCBzdHJpbmc7XHJcblxyXG4vKiogRmlsbCBvcHRpb24gZm9yIHRoZSB0ZXh0LWVtcGhhc2lzLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRFbXBoYXNpc0ZpbGwgPSBcImZpbGxlZFwiIHwgXCJvcGVuXCI7XHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtZW1waGFzaXMtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dEVtcGhhc2lzU3R5bGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBUZXh0RW1waGFzaXNGaWxsIHwgVGV4dEVtcGhhc2lzU2hhcGUgfFxyXG4gICAgW0V4dGVuZGVkPFRleHRFbXBoYXNpc0ZpbGw+LCBFeHRlbmRlZDxUZXh0RW1waGFzaXNTaGFwZT5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtaW5kZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRJbmRlbnRfU3R5bGVUeXBlID0gQ3NzTGVuZ3RoIHxcclxuICAgIFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxPbmVPck1hbnk8XCJlYWNoLWxpbmVcIiB8IFwiaGFuZ2luZ1wiIHwgXCJlYWNoLWxpbmUgaGFuZ2luZ1wiPj5dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtanVzdGlmeSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUZXh0SnVzdGlmeV9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiaW50ZXItY2hhcmFjdGVyXCIgfCBcImludGVyLXdvcmRcIiB8IFwibm9uZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtb3JpZW50YXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dE9yaWVudGF0aW9uX1N0eWxlVHlwZSA9IFwibWl4ZWRcIiB8IFwidXByaWdodFwiIHwgXCJzaWRld2F5c1wiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtb3ZlcmZsb3cgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dE92ZXJmbG93X1N0eWxlVHlwZSA9IE9uZU9yUGFpcjxcImNsaXBcIiB8IFwiZWxsaXBzaXNcIiB8IFwiZmFkZVwiIHwgc3RyaW5nPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSBzaW5nbGUgdmFsdWUgb2YgdGhlIHRleHQtc2hhZG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRTaGFkb3dfU2luZ2xlID0gXCJub25lXCIgfCBzdHJpbmcgfFxyXG4gICAge1xyXG4gICAgICAgIHg6IEV4dGVuZGVkPENzc0xlbmd0aD4sXHJcbiAgICAgICAgeTogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBibHVyPzogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPixcclxuICAgICAgICBjb2xvcj86IEV4dGVuZGVkPENzc0NvbG9yPixcclxuICAgIH07XHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtc2hhZG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRTaGFkb3dfU3R5bGVUeXBlID0gT25lT3JNYW55PFRleHRTaGFkb3dfU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB0ZXh0LXNpemUtYWRqdXN0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRTaXplQWRqdXN0X1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhdXRvXCIgfCBDc3NQZXJjZW50O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRleHQtdHJhbnNmb3JtIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRleHRUcmFuc2Zvcm1fU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImNhcGl0YWxpemVcIiB8IFwidXBwZXJjYXNlXCIgfCBcImxvd2VyY2FzZVwiIHwgXCJmdWxsLXdpZHRoXCIgfCBcImZ1bGwtc2l6ZS1rYW5hXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdGV4dC11bmRlcmxpbmUtcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVGV4dFVuZGVybGluZVBvc2l0aW9uX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJ1bmRlclwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImF1dG8tcG9zXCIgfCBcImFib3ZlXCIgfCBcImJlbG93XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdG91Y2gtYWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRvdWNoQWN0aW9uX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJub25lXCIgfCBcIm1hbmlwdWxhdGlvblwiIHxcclxuICAgIFwicGFuLXhcIiB8IFwicGFuLWxlZnRcIiB8IFwicGFuLXJpZ2h0XCIgfCBcInBhbi15XCIgfCBcInBhbi11cFwiIHwgXCJwYW4tZG93blwiIHwgXCJwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4teCBwaW5jaC16b29tXCIgfCBcInBhbi1sZWZ0IHBpbmNoLXpvb21cIiB8IFwicGFuLXJpZ2h0IHBpbmNoLXpvb21cIiB8IFwicGFuLXkgcGluY2gtem9vbVwiIHwgXCJwYW4tdXAgcGluY2gtem9vbVwiIHwgXCJwYW4tZG93biBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4teCBwYW4teVwiIHwgXCJwYW4teCBwYW4teSBwaW5jaC16b29tXCIgfCBcInBhbi14IHBhbi11cFwiIHwgXCJwYW4teCBwYW4tdXAgcGluY2gtem9vbVwiIHwgXCJwYW4teCBwYW4tZG93blwiIHwgXCJwYW4teCBwYW4tZG93biBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4teSBwYW4tbGVmdFwiIHwgXCJwYW4teSBwYW4tbGVmdCBwaW5jaC16b29tXCIgfCBcInBhbi15IHBhbi1yaWdodFwiIHwgXCJwYW4teSBwYW4tcmlnaHQgcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLWxlZnQgcGFuLXVwXCIgfCBcInBhbi1sZWZ0IHBhbi11cCBwaW5jaC16b29tXCIgfCBcInBhbi1sZWZ0IHBhbi1kb3duXCIgfCBcInBhbi1sZWZ0IHBhbi1kb3duIHBpbmNoLXpvb21cIiB8XHJcbiAgICBcInBhbi1yaWdodCBwYW4tdXBcIiB8IFwicGFuLXJpZ2h0IHBhbi11cCBwaW5jaC16b29tXCIgfCBcInBhbi1yaWdodCBwYW4tZG93blwiIHwgXCJwYW4tcmlnaHQgcGFuLWRvd24gcGluY2gtem9vbVwiIHxcclxuICAgIFwicGFuLXVwIHBhbi1sZWZ0XCIgfCBcInBhbi11cCBwYW4tbGVmdCBwaW5jaC16b29tXCIgfCBcInBhbi11cCBwYW4tcmlnaHRcIiB8IFwicGFuLXVwIHBhbi1yaWdodCBwaW5jaC16b29tXCIgfFxyXG4gICAgXCJwYW4tZG93biBwYW4tbGVmdFwiIHwgXCJwYW4tZG93biBwYW4tbGVmdCBwaW5jaC16b29tXCIgfCBcInBhbi1kb3duIHBhbi1yaWdodFwiIHwgXCJwYW4tZG93biBwYW4tcmlnaHQgcGluY2gtem9vbVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNmb3JtIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IHN0cmluZyB8IE9uZU9yTWFueTxJVHJhbnNmb3JtUHJveHk+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNmb3JtLWJveCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2Zvcm1Cb3hfU3R5bGVUeXBlID0gXCJjb250ZW50LWJveFwiIHwgXCJib3JkZXItYm94XCIgfCBcImZpbGwtYm94XCIgfCBcInN0cm9rZS1ib3hcIiB8IFwidmlldy1ib3hcIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRyYW5zZm9ybS1vcmlnaW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNmb3JtT3JpZ2luX1N0eWxlVHlwZSA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aCB8XHJcbiAgICBbRXh0ZW5kZWQ8SG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCB8IENzc0xlbmd0aD4sIEV4dGVuZGVkPFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkIHwgQ3NzTGVuZ3RoPiwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPj9dO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNmb3JtLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zZm9ybVN0eWxlX1N0eWxlVHlwZSA9IFwiZmxhdFwiIHwgXCJwcmVzZXJ2ZS0zZFwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHRyYW5zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvbl9TaW5nbGUgPSBzdHJpbmcgfFxyXG4gICAge1xyXG4gICAgICAgIHByb3BlcnR5PzogRXh0ZW5kZWQ8VHJhbnNpdGlvblByb3BlcnR5X1NpbmdsZT47XHJcbiAgICAgICAgZHVyYXRpb24/OiBFeHRlbmRlZDxDc3NUaW1lPjtcclxuICAgICAgICBmdW5jPzogRXh0ZW5kZWQ8VGltaW5nRnVuY3Rpb25fU2luZ2xlPjtcclxuICAgICAgICBkZWxheT86IEV4dGVuZGVkPENzc1RpbWU+O1xyXG4gICAgfTtcclxuXHJcbi8qKiBUeXBlIGZvciB0cmFuc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25fU3R5bGVUeXBlID0gT25lT3JNYW55PFRyYW5zaXRpb25fU2luZ2xlPjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSB0cmFuc2l0aW9uLXByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGUgPSBcIm5vbmVcIiB8IFwiYWxsXCIgfCBrZXlvZiBJQ3NzU3R5bGVzZXQ7XHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNpdGlvbi1wcm9wZXJ0eSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2l0aW9uUHJvcGVydHlfU3R5bGVUeXBlID0gT25lT3JNYW55PFRyYW5zaXRpb25Qcm9wZXJ0eV9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uX1N0eWxlVHlwZSA9IE9uZU9yTWFueTxUaW1pbmdGdW5jdGlvbl9TaW5nbGU+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHRyYW5zbGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2xhdGVfU3R5bGVUeXBlID0gXCJub25lXCIgfCBDc3NMZW5ndGggfFxyXG4gICAgW0V4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD4sIEV4dGVuZGVkPENzc0xlbmd0aD4/XTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB1bmljb2RlLWJpZGkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVW5pY29kZUJpZGlfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiZW1iZWRcIiB8IFwiaXNvbGF0ZVwiIHwgXCJiaWRpLW92ZXJyaWRlXCIgfCBcImlzb2xhdGUtb3ZlcnJpZGVcIiB8IFwicGxhaW50ZXh0XCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdXNlci1zZWxlY3Qgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVXNlclNlbGVjdF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwidGV4dFwiIHwgXCJub25lXCIgfCBcImNvbnRhaW5cIiB8IFwiYWxsXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgdmVydGljYWwtYWxpZ24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVmVydGljYWxBbGlnbl9TdHlsZVR5cGUgPSBcImJhc2VsaW5lXCIgfCBcInN1YlwiIHwgXCJzdXBlclwiIHwgXCJ0ZXh0LXRvcFwiIHwgXCJ0ZXh0LWJvdHRvbVwiIHxcclxuICAgIFwibWlkZGxlXCIgfCBcInRvcFwiIHwgXCJib3R0b21cIiB8IENzc0xlbmd0aDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB2aXNpYmlsaXR5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFZpc2liaWxpdHlfU3R5bGVUeXBlID0gXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiIHwgXCJjb2xsYXBzZVwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHZlY3Rvci1lZmZlY3Qgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgVmVjdG9yRWZmZWN0X1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJub24tc2NhbGluZy1zdHJva2VcIiB8IFwibm9uLXNjYWxpbmctc2l6ZVwiIHwgXCJub24tcm90YXRpb25cIiB8IFwiZml4ZWQtcG9zaXRpb25cIjtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHRoZSB3aGl0ZS1zcGFjZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXaGl0ZVNwYWNlX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInByZVwiIHwgXCJub3dyYXBcIiB8IFwicHJlLXdyYXBcIiB8IFwicHJlLWxpbmVcIiB8IFwiYnJlYWstc3BhY2VzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB3aWxsLWNoYW5nZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBXaWxsQ2hhbmdlX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgT25lT3JNYW55PFwic2Nyb2xsLXBvc2l0aW9uXCIgfCBcImNvbnRlbnRzXCIgfCBFeGNsdWRlPGtleW9mIElDc3NTdHlsZXNldCxcIndpbGxDaGFuZ2VcIj4+O1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHdvcmQtYnJlYWsgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgV29yZEJyZWFrX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImJyZWFrLWFsbFwiIHwgXCJrZWVwLWFsbFwiIHwgXCJicmVhay13b3JkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgd29yZC1zcGFjaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFdvcmRTcGFjaW5nX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBDc3NMZW5ndGg7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciB0aGUgd3JpdGluZy1tb2RlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFdyaXRpbmdNb2RlX1N0eWxlVHlwZSA9IFwiaG9yaXpvbnRhbC10YlwiIHwgXCJ2ZXJ0aWNhbC1ybFwiIHwgXCJ2ZXJ0aWNhbC1sclwiIHwgXCJzaWRld2F5cy1ybFwiIHwgXCJzaWRld2F5cy1sclwiO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHotaW5kZXggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgWkluZGV4X1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgQ3NzTnVtYmVyO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgdGhlIHpvb20gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgWm9vbV9TdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJyZXNldFwiIHwgQ3NzUGVyY2VudDtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHN0eWxlIHByb3BlcnRpZXMgZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHNwZWNpYWwgdHlwZSBkZWZpbmVkLiAqL1xyXG5leHBvcnQgdHlwZSBEZWZhdWx0U3R5bGVUeXBlID0gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUHJveHkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJRmlsdGVyUHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIG9uZSB0aGUgQ1NTIGA8ZmlsdGVyPmAgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRmlsdGVyUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiZmlsdGVyXCI+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQmFzaWNTaGFwZVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgPGJhc2ljLXNoYXBlPmAgZnVuY3Rpb25zXHJcbiAqIGV4Y2VwdCB0aGUgYHBhdGgoKWAgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElCYXNpY1NoYXBlUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiYmFzaWMtc2hhcGVcIj4ge307XHJcblxyXG4vKipcclxuICogVGhlIEJhc2ljU2hhcGVUeXBlIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgPGJhc2ljLXNoYXBlPmAgZnVuY3Rpb25zIGluY2x1ZGluZ1xyXG4gKiB0aGUgYHBhdGgoKWAgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCYXNpY1NoYXBlID0gSUJhc2ljU2hhcGVQcm94eSB8IElQYXRoQnVpbGRlcjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJheVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgcmF5KClgIGZ1bmN0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJheVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInJheVwiPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRyYW5zZm9ybVByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiBvbmUgdGhlIENTUyBgPGJhc2ljLXNoYXBlPmAgZnVuY3Rpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVHJhbnNmb3JtUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwidHJhbnNmb3JtXCI+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWluTWF4UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBtaW5tYXgoKSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWluTWF4UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwibWlubWF4XCI+IHt9XHJcblxyXG4vKipcclxuICogVGhlIElGaXRDb250ZW50UHJveHkgZnVuY3Rpb24gcmVwcmVzZW50cyBhbiBpbnZvY2F0aW9uIG9mIHRoZSBmaXQtY29udGVudCgpIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGaXRDb250ZW50UHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwiZml0LWNvbnRlbnRcIj4ge31cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJlcGVhdFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgcmVwZWF0KCkgZnVuY3Rpb25cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlcGVhdFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInJlcGVhdFwiPiB7fVxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3BhblByb3h5IGZ1bmN0aW9uIHByb2R1Y2VzIHRoZSBzcGFuIGV4cHJlc3Npb24gZm9yIGdyaWQgbGF5b3V0c1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3BhblByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxcInNwYW5cIj4ge31cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUGF0aEJ1aWxkZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgdGhlIG9iamVjdCB0aGF0IGFjY3VtdWxhdGVzIHBhdGggY29tbWFuZHMgdGhhdCBhcmUgdGhlblxyXG4gKiBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgcGFyYW1ldGVyIG9mIHRoZSBDU1MgYHBhdGgoKWAgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElQYXRoQnVpbGRlclxyXG57XHJcbiAgICAvLyBNb3ZlLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuICAgIE0oIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIE1vdmUtdG8gY29tbWFuZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzLlxyXG4gICAgbSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gTGluZS10byBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0TCggZmlyc3Q6IFtudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gTGluZS10byBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcbiAgICBsKCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBIb3Jpem9udGFsIGxpbmUtdG8gY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdEgoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEhvcml6b250YWwgbGluZS10byBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcbiAgICBoKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBWZXJ0aWNhbCBsaW5lLXRvIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRWKCBmaXJzdDogbnVtYmVyLCAuLi5uZXh0OiBudW1iZXJbXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBWZXJ0aWNhbCBsaW5lLXRvIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuICAgIHYoIGZpcnN0OiBudW1iZXIsIC4uLm5leHQ6IG51bWJlcltdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIEN1YmljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0QyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sXHJcblx0XHQuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gQ3ViaWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuXHRjKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSxcclxuXHRcdC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBTbW9vdGggY3ViaWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCBhYnNvbHV0ZSBjb29yZGluYXRlcy5cclxuXHRTKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gU21vb3RoIGN1YmljIGJlemllciBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0cyggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFF1YWRyYXRpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdFEoIGZpcnN0OiBbbnVtYmVyLG51bWJlcixudW1iZXIsbnVtYmVyXSwgLi4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBRdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuXHRxKCBmaXJzdDogW251bWJlcixudW1iZXIsbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdW10pOiBJUGF0aEJ1aWxkZXI7XHJcblxyXG4gICAgLy8gU21vb3RoIHF1YWRyYXRpYyBiZXppZXIgY3VydmUgY29tbWFuZCB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVzLlxyXG5cdFQoIGZpcnN0OiBbbnVtYmVyLG51bWJlcl0sIC4uLm5leHQ6IFtudW1iZXIsbnVtYmVyXVtdKTogSVBhdGhCdWlsZGVyO1xyXG5cclxuICAgIC8vIFNtb290aCBxdWFkcmF0aWMgYmV6aWVyIGN1cnZlIGNvbW1hbmQgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcy5cclxuXHR0KCBmaXJzdDogW251bWJlcixudW1iZXJdLCAuLi5uZXh0OiBbbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBFbGxpcHRpY2FsIGFyYyBjdXJ2ZSBjb21tYW5kIHdpdGggYWJzb2x1dGUgY29vcmRpbmF0ZXMuXHJcblx0QSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBFbGxpcHRpY2FsIGFyYyBjdXJ2ZSBjb21tYW5kIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMuXHJcblx0YSggZmlyc3Q6IFtudW1iZXIsbnVtYmVyLG51bWJlciwwfDEsMHwxLG51bWJlcixudW1iZXJdLFxyXG5cdFx0Li4ubmV4dDogW251bWJlcixudW1iZXIsbnVtYmVyLDB8MSwwfDEsbnVtYmVyLG51bWJlcl1bXSk6IElQYXRoQnVpbGRlcjtcclxuXHJcbiAgICAvLyBDbG9zZS1wYXRoIGNvbW1hbmQuXHJcbiAgICB6KCk6IElQYXRoQnVpbGRlcjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3R5bGVzZXQgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIEludGVyZmFjZSByZXByZXNlbnRpbmcgYSBjb2xsZWN0aW9uIG9mIGJ1aWx0LWluIHN0eWxlIHByb3BlcnRpZXMgYW5kIHRoZWlyIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc1N0eWxlc2V0XHJcbntcclxuICAgIGFsbD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBhbGlnbkNvbnRlbnQ/OiBBbGlnbkNvbnRlbnRfU3R5bGVUeXBlO1xyXG4gICAgYWxpZ25JdGVtcz86IEFsaWduSXRlbXNfU3R5bGVUeXBlO1xyXG4gICAgYWxpZ25TZWxmPzogQWxpZ25TZWxmX1N0eWxlVHlwZTtcclxuICAgIGFsaWdubWVudEJhc2VsaW5lPzogQWxpZ25tZW50QmFzZWxpbmVfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uPzogQW5pbWF0aW9uX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkRlbGF5PzogQW5pbWF0aW9uRGVsYXlfU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uRGlyZWN0aW9uPzogQW5pbWF0aW9uRGlyZWN0aW9uX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogQW5pbWF0aW9uRHVyYXRpb25fU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uRmlsbE1vZGU/OiBBbmltYXRpb25GaWxsTW9kZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudD86IEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50X1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbk5hbWU/OiBBbmltYXRpb25OYW1lX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvblBsYXlTdGF0ZT86IEFuaW1hdGlvblBsYXlTdGF0ZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbj86IEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1N0eWxlVHlwZTtcclxuXHJcbiAgICBiYWNrZHJvcEZpbHRlcj86IEZpbHRlcl9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZmFjZVZpc2liaWxpdHk/OiBCYWNrZmFjZVZpc2liaWxpdHlNb2RlX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmQ/OiBCYWNrZ3JvdW5kX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50PzogQmFja2dyb3VuZEF0dGFjaG1lbnRfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZEJsZW5kTW9kZT86IEJhY2tncm91bmRCbGVuZE1vZGVfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZENsaXA/OiBCYWNrZ3JvdW5kQ2xpcF9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJhY2tncm91bmRJbWFnZT86IEJhY2tncm91bmRJbWFnZV9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kT3JpZ2luPzogQmFja2dyb3VuZE9yaWdpbl9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24/OiBCYWNrZ3JvdW5kUG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRSZXBlYXQ/OiBCYWNrZ3JvdW5kUmVwZWF0X1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRSZXBlYXRYPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRSZXBlYXRZPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRTaXplPzogQmFja2dyb3VuZFNpemVfU3R5bGVUeXBlO1xyXG4gICAgYmFzZWxpbmVTaGlmdD86IEJhc2VsaW5lU2hpZnRfU3R5bGVUeXBlO1xyXG4gICAgYmxvY2tTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgYm9yZGVyPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJsb2NrRW5kPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJsb2NrRW5kQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlckJsb2NrRW5kU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyQmxvY2tFbmRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlckJsb2NrU3RhcnQ/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQmxvY2tTdGFydENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJCbG9ja1N0YXJ0U3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyQmxvY2tTdGFydFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyQm90dG9tPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPzogQ3NzUmFkaXVzO1xyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBDc3NSYWRpdXM7XHJcbiAgICBib3JkZXJCb3R0b21TdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJCb3R0b21XaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlckNvbGxhcHNlPzogQm9yZGVyQ29sYXBzZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJDb2xvcj86IEJvcmRlckNvbG9yX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlPzogQm9yZGVySW1hZ2VfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VPdXRzZXQ/OiBCb3JkZXJJbWFnZU91dHNldF9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVJlcGVhdD86IEJvcmRlckltYWdlUmVwZWF0X1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlU2xpY2U/OiBCb3JkZXJJbWFnZVNsaWNlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlU291cmNlPzogQm9yZGVySW1hZ2VTb3VyY2VfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VXaWR0aD86IEJvcmRlckltYWdlV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW5saW5lRW5kPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlcklubGluZUVuZENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJJbmxpbmVFbmRTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJJbmxpbmVFbmRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlcklubGluZVN0YXJ0PzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlcklubGluZVN0YXJ0Q29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlcklubGluZVN0YXJ0U3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVySW5saW5lU3RhcnRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlckxlZnQ/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyTGVmdENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJMZWZ0U3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyTGVmdFdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgYm9yZGVyUmFkaXVzPzogQm9yZGVyUmFkaXVzX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclJpZ2h0PzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGJvcmRlclJpZ2h0U3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgYm9yZGVyUmlnaHRXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlclNwYWNpbmc/OiBCb3JkZXJTcGFjaW5nX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclN0eWxlPzogQm9yZGVyU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyVG9wPzogQm9yZGVyX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcENvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPzogQ3NzUmFkaXVzO1xyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBDc3NSYWRpdXM7XHJcbiAgICBib3JkZXJUb3BTdHlsZT86IEJvcmRlclN0eWxlX0tleXdvcmQ7XHJcbiAgICBib3JkZXJUb3BXaWR0aD86IEJvcmRlcldpZHRoX1NpbmdsZTtcclxuICAgIGJvcmRlcldpZHRoPzogQm9yZGVyV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgYm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgYm94U2hhZG93PzogQm94U2hhZG93X1N0eWxlVHlwZTtcclxuICAgIGJveFNpemluZz86IEJveFNpemluZ19TdHlsZVR5cGU7XHJcbiAgICBicmVha0FmdGVyPzogQnJlYWtBZnRlcl9TdHlsZVR5cGU7XHJcbiAgICBicmVha0JlZm9yZT86IEJyZWFrQmVmb3JlX1N0eWxlVHlwZTtcclxuICAgIGJyZWFrSW5zaWRlPzogQnJlYWtJbnNpZGVfU3R5bGVUeXBlO1xyXG4gICAgYnVmZmVyZWRSZW5kZXJpbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG5cclxuICAgIGNhcHRpb25TaWRlPzogQ2FwdGlvblNpZGVfU3R5bGVUeXBlO1xyXG4gICAgY2FyZXRDb2xvcj86IENhcmV0Q29sb3JfU3R5bGVUeXBlO1xyXG4gICAgY2xlYXI/OiBDbGVhcl9TdHlsZVR5cGU7XHJcbiAgICBjbGlwPzogQ2xpcF9TdHlsZVR5cGU7XHJcbiAgICBjbGlwUGF0aD86IENsaXBQYXRoX1N0eWxlVHlwZTtcclxuICAgIGNsaXBSdWxlPzogQ2xpcFJ1bGVfU3R5bGVUeXBlO1xyXG4gICAgY29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbj86IENvbG9ySW50ZXJwb2xhdGlvbl9TdHlsZVR5cGU7XHJcbiAgICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPzogQ29sb3JJbnRlcnBvbGF0aW9uX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbkNvdW50PzogQ29sdW1uQ291bnRfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uRmlsbD86IENvbHVtbkZpbGxfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uR2FwPzogQ29sdW1uR2FwX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtblJ1bGU/OiBCb3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uUnVsZUNvbG9yPzogQ3NzQ29sb3I7XHJcbiAgICBjb2x1bW5SdWxlU3R5bGU/OiBCb3JkZXJTdHlsZV9LZXl3b3JkO1xyXG4gICAgY29sdW1uUnVsZVdpZHRoPzogQm9yZGVyV2lkdGhfU2luZ2xlO1xyXG4gICAgY29sdW1uU3Bhbj86IENvbHVtblNwYW5fU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uV2lkdGg/OiBDc3NMZW5ndGg7XHJcbiAgICBjb2x1bW5zPzogQ29sdW1uc19TdHlsZVR5cGU7XHJcbiAgICBjb250YWluPzogQ29udGFpbl9TdHlsZVR5cGU7XHJcbiAgICBjb250ZW50PzogQ29udGVudF9TdHlsZVR5cGU7XHJcbiAgICBjb3VudGVySW5jcmVtZW50PzogQ291bnRlcl9TdHlsZVR5cGU7XHJcbiAgICBjb3VudGVyUmVzZXQ/OiBDb3VudGVyX1N0eWxlVHlwZTtcclxuICAgIGNvdW50ZXJTZXQ/OiBDb3VudGVyX1N0eWxlVHlwZTtcclxuICAgIGN1cnNvcj86IEN1cnNvcl9TdHlsZVR5cGU7XHJcblxyXG4gICAgZGlyZWN0aW9uPzogRGlyZWN0aW9uX1N0eWxlVHlwZTtcclxuICAgIGRpc3BsYXk/OiBEaXNwbGF5X1N0eWxlVHlwZTtcclxuICAgIGRvbWluYW50QmFzZWxpbmU/OiBEb21pbmFudEJhc2VsaW5lX1N0eWxlVHlwZTtcclxuXHJcbiAgICBlbXB0eUNlbGxzPzogRW1wdHlDZWxsc19TdHlsZVR5cGU7XHJcblxyXG4gICAgZmlsbD86IENzc0NvbG9yO1xyXG4gICAgZmlsbE9wYWNpdHk/OiBDc3NQZXJjZW50O1xyXG4gICAgZmlsbFJ1bGU/OiBGaWxsUnVsZV9TdHlsZVR5cGU7XHJcbiAgICBmaWx0ZXI/OiBGaWx0ZXJfU3R5bGVUeXBlO1xyXG4gICAgZmxleD86IEZsZXhfU3R5bGVUeXBlO1xyXG4gICAgZmxleEJhc2lzPzogRmxleEJhc2lzX1N0eWxlVHlwZTtcclxuICAgIGZsZXhEaXJlY3Rpb24/OiBGbGV4RGlyZWN0aW9uX1N0eWxlVHlwZTtcclxuICAgIGZsZXhGbG93PzogRmxleEZsb3dfU3R5bGVUeXBlO1xyXG4gICAgZmxleEdyb3c/OiBDc3NOdW1iZXI7XHJcbiAgICBmbGV4U2hyaW5rPzogQ3NzTnVtYmVyO1xyXG4gICAgZmxleFdyYXA/OiBGbGV4V3JhcF9TdHlsZVR5cGU7XHJcbiAgICBmbG9hdD86IEZsb2F0X1N0eWxlVHlwZTtcclxuICAgIGZsb29kQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIGZsb29kT3BhY2l0eT86IENzc1BlcmNlbnQ7XHJcbiAgICBmb250PzogRm9udF9TdHlsZVR5cGU7XHJcbiAgICBmb250RmFtaWx5PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udEtlcm5pbmc/OiBGb250S2VybmluZ19TdHlsZVR5cGU7XHJcbiAgICBmb250T3B0aWNhbFNpemluZz86IEZvbnRPcHRpY2FsU2l6aW5nX1N0eWxlVHlwZTtcclxuICAgIGZvbnRTaXplPzogRm9udFNpemVfU3R5bGVUeXBlO1xyXG4gICAgZm9udFNpemVBZGp1c3Q/OiBDc3NOdW1iZXI7XHJcbiAgICBmb250U3RyZXRjaD86IEZvbnRTdHJldGNoX1N0eWxlVHlwZTtcclxuICAgIGZvbnRTdHlsZT86IEZvbnRTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBmb250U3ludGhlc2lzPzogRm9udFN5bnRoZXNpc19TdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250VmFyaWFudENhcHM/OiBGb250VmFyaWFudENhcHNfU3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnRFYXN0QXNpYW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnRMaWdhdHVyZXM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZm9udFZhcmlhbnROdW1lcmljPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYW50UG9zaXRpb24/OiBGb250VmFyaWFudFBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIGZvbnRWYXJpYXRpb25TZXR0aW5ncz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBmb250V2VpZ2h0PzogRm9udFdlaWdodF9TdHlsZVR5cGU7XHJcblxyXG4gICAgZ2FwPzogR2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgZ3JpZEFyZWE/OiBHcmlkQXJlYV9TdHlsZVR5cGU7XHJcbiAgICBncmlkQXV0b0NvbHVtbnM/OiBHcmlkQXV0b0F4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEF1dG9GbG93PzogR3JpZEF1dG9GbG93X1N0eWxlVHlwZTtcclxuICAgIGdyaWRBdXRvUm93cz86IEdyaWRBdXRvQXhpc19TdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uPzogR3JpZEF4aXNfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtbkVuZD86IEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uR2FwPzogQ29sdW1uR2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW5TdGFydD86IEdyaWRBeGlzU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBncmlkR2FwPzogR2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWRSb3c/OiBHcmlkQXhpc19TdHlsZVR5cGU7XHJcbiAgICBncmlkUm93RW5kPzogR3JpZEF4aXNTaWRlX1N0eWxlVHlwZTtcclxuICAgIGdyaWRSb3dHYXA/OiBSb3dHYXBfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFJvd1N0YXJ0PzogR3JpZEF4aXNTaWRlX1N0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGVBcmVhcz86IEdyaWRUZW1wbGF0ZUFyZWFzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM/OiBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZVJvd3M/OiBHcmlkVGVtcGxhdGVBeGlzX1N0eWxlVHlwZTtcclxuXHJcbiAgICBoZWlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBoeXBoZW5zPzogSHlwaGVuc19TdHlsZVR5cGU7XHJcblxyXG4gICAgaW1hZ2VSZW5kZXJpbmc/OiBJbWFnZVJlbmRlcmluZ19TdHlsZVR5cGU7XHJcbiAgICBpbmxpbmVTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgaXNvbGF0aW9uPzogSXNvbGF0aW9uX1N0eWxlVHlwZTtcclxuXHJcbiAgICBqdXN0aWZ5Q29udGVudD86IEp1c3RpZnlDb250ZW50X1N0eWxlVHlwZTtcclxuICAgIGp1c3RpZnlJdGVtcz86IEp1c3RpZnlJdGVtc19TdHlsZVR5cGU7XHJcbiAgICBqdXN0aWZ5U2VsZj86IEp1c3RpZnlTZWxmX1N0eWxlVHlwZTtcclxuXHJcbiAgICBsZWZ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbGV0dGVyU3BhY2luZz86IExldHRlclNwYWNpbmdfU3R5bGVUeXBlO1xyXG4gICAgbGlnaHRpbmdDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgbGluZUJyZWFrPzogTGluZUJyZWFrX1N0eWxlVHlwZTtcclxuICAgIGxpbmVIZWlnaHQ/OiBMaW5lSGVpZ2h0X1N0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZT86IExpc3RTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGVJbWFnZT86IExpc3RTdHlsZUltYWdlX1N0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZVBvc2l0aW9uPzogTGlzdFN0eWxlUG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgbGlzdFN0eWxlVHlwZT86IExpc3RTdHlsZVR5cGVfU3R5bGVUeXBlO1xyXG5cclxuICAgIG1hcmdpbj86IENzc0xlbmd0aEJveDtcclxuICAgIG1hcmdpbkJsb2NrRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luQmxvY2tTdGFydD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbkJvdHRvbT86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbklubGluZUVuZD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpbklubGluZVN0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luTGVmdD86IENzc0xlbmd0aDtcclxuICAgIG1hcmdpblJpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFyZ2luVG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWFya2VyPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hcmtlckVuZD86IE1hcmtlcl9TdHlsZVR5cGU7XHJcbiAgICBtYXJrZXJNaWQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFya2VyU3RhcnQ/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFzaz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrQ29tcG9zaXRlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIG1hc2tJbWFnZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrUG9zaXRpb24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgbWFza1JlcGVhdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrU2l6ZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXNrVHlwZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBtYXhCbG9ja1NpemU/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXhIZWlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtYXhJbmxpbmVTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWF4V2lkdGg/OiBDc3NMZW5ndGg7XHJcbiAgICBtaW5CbG9ja1NpemU/OiBDc3NMZW5ndGg7XHJcbiAgICBtaW5IZWlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBtaW5JbmxpbmVTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgbWluV2lkdGg/OiBDc3NMZW5ndGg7XHJcblxyXG4gICAgb2JqZWN0Rml0PzogT2JqZWN0Rml0X1N0eWxlVHlwZTtcclxuICAgIG9iamVjdFBvc2l0aW9uPzogQ3NzUG9zaXRpb247XHJcbiAgICBvZmZzZXQ/OiBPZmZzZXRfU3R5bGVUeXBlO1xyXG4gICAgb2Zmc2V0QW5jaG9yPzogT2Zmc2V0QW5jaG9yX1N0eWxlVHlwZVxyXG4gICAgb2Zmc2V0RGlzdGFuY2U/OiBDc3NMZW5ndGg7XHJcbiAgICBvZmZzZXRQYXRoPzogT2Zmc2V0UGF0aF9TdHlsZVR5cGU7XHJcbiAgICBvZmZzZXRQb3NpdGlvbj86IENzc1Bvc2l0aW9uO1xyXG4gICAgb2Zmc2V0Um90YXRlPzogT2Zmc2V0Um90YXRlX1N0eWxlVHlwZTtcclxuICAgIG9wYWNpdHk/OiBDc3NQZXJjZW50O1xyXG4gICAgb3JkZXI/OiBDc3NOdW1iZXI7XHJcbiAgICBvcnBoYW5zPzogQ3NzTnVtYmVyO1xyXG4gICAgb3V0bGluZT86IEJvcmRlcl9TdHlsZVR5cGU7XHJcbiAgICBvdXRsaW5lQ29sb3I/OiBDc3NDb2xvcjtcclxuICAgIG91dGxpbmVPZmZzZXQ/OiBDc3NMZW5ndGg7XHJcbiAgICBvdXRsaW5lU3R5bGU/OiBCb3JkZXJTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBvdXRsaW5lV2lkdGg/OiBCb3JkZXJXaWR0aF9TaW5nbGU7XHJcbiAgICBvdmVyZmxvdz86IE92ZXJmbG93X1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93QW5jaG9yPzogT3ZlcmZsb3dBbmNob3JfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dCbG9jaz86IE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd0lubGluZT86IE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyZmxvd1dyYXA/OiBPdmVyZmxvd1dyYXBfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcmZsb3dYPzogT3ZlcmZsb3dfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJmbG93WT86IE92ZXJmbG93X1NpbmdsZV9TdHlsZVR5cGU7XHJcbiAgICBvdmVyc2Nyb2xsQmVoYXZpb3I/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yQmxvY2s/OiBPdmVyc2Nyb2xsQmVoYXZpb3JfU2luZ2xlX1N0eWxlVHlwZTtcclxuICAgIG92ZXJzY3JvbGxCZWhhdmlvcklubGluZT86IE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yWD86IE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlO1xyXG4gICAgb3ZlcnNjcm9sbEJlaGF2aW9yWT86IE92ZXJzY3JvbGxCZWhhdmlvcl9TaW5nbGVfU3R5bGVUeXBlO1xyXG5cclxuICAgIHBhZGRpbmc/OiBDc3NMZW5ndGhCb3g7XHJcbiAgICBwYWRkaW5nQmxvY2tFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nQmxvY2tTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHBhZGRpbmdCb3R0b20/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nSW5saW5lRW5kPzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0lubGluZVN0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFkZGluZ0xlZnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nUmlnaHQ/OiBDc3NMZW5ndGg7XHJcbiAgICBwYWRkaW5nVG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgcGFpbnRPcmRlcj86IFBhaW50T3JkZXJfU3R5bGVUeXBlO1xyXG4gICAgcGFnZUJyZWFrQWZ0ZXI/OiBCcmVha0FmdGVyX1N0eWxlVHlwZTtcclxuICAgIHBhZ2VCcmVha0JlZm9yZT86IEJyZWFrQmVmb3JlX1N0eWxlVHlwZTtcclxuICAgIHBhZ2VCcmVha0luc2lkZT86IEJyZWFrSW5zaWRlX1N0eWxlVHlwZTtcclxuICAgIHBlcnNwZWN0aXZlPzogUGVyc3BlY3RpdmVfU3R5bGVUeXBlO1xyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW4/OiBQZXJzcGVjdGl2ZU9yaWdpbl9TdHlsZVR5cGU7XHJcbiAgICBwbGFjZUNvbnRlbnQ/OiBQbGFjZUNvbnRlbnRfU3R5bGVUeXBlO1xyXG4gICAgcGxhY2VJdGVtcz86IFBsYWNlSXRlbXNfU3R5bGVUeXBlO1xyXG4gICAgcGxhY2VTZWxmPzogUGxhY2VTZWxmX1N0eWxlVHlwZTtcclxuICAgIHBvaW50ZXJFdmVudHM/OiBQb2ludGVyRXZlbnRzX1N0eWxlVHlwZTtcclxuICAgIHBvc2l0aW9uPzogUG9zaXRpb25fU3R5bGVUeXBlO1xyXG5cclxuICAgIHF1b3Rlcz86IFF1b3Rlc19TdHlsZVR5cGU7XHJcblxyXG4gICAgcmVzaXplPzogUmVzaXplX1N0eWxlVHlwZTtcclxuICAgIHJpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgcm90YXRlPzogUm90YXRlX1N0eWxlVHlwZTtcclxuICAgIHJvd0dhcD86IFJvd0dhcF9TdHlsZVR5cGU7XHJcbiAgICBydWJ5QWxpZ24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgcnVieU92ZXJoYW5nPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHJ1YnlQb3NpdGlvbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcblxyXG4gICAgc2NhbGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsYmFyQ29sb3I/OiBTY3JvbGxiYXJDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxiYXJXaWR0aD86IFNjcm9sbGJhcldpZHRoX1N0eWxlVHlwZTtcclxuICAgIHNjcm9sbEJlaGF2aW9yPzogU2Nyb2xsQmVoYXZpb3JfU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsTWFyZ2luPzogQ3NzTGVuZ3RoQm94O1xyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2s/OiBDc3NMZW5ndGhQYWlyO1xyXG4gICAgc2Nyb2xsTWFyZ2luQmxvY2tFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxNYXJnaW5CbG9ja1N0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luQm90dG9tPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luSW5saW5lPzogQ3NzTGVuZ3RoUGFpcjtcclxuICAgIHNjcm9sbE1hcmdpbklubGluZUVuZD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpbklubGluZVN0YXJ0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luTGVmdD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbE1hcmdpblJpZ2h0PzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsTWFyZ2luVG9wPzogQ3NzTGVuZ3RoO1xyXG4gICAgc2Nyb2xsUGFkZGluZz86IENzc0xlbmd0aEJveDtcclxuICAgIHNjcm9sbFBhZGRpbmdCbG9jaz86IENzc0xlbmd0aFBhaXI7XHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nQmxvY2tTdGFydD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdCb3R0b20/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lPzogQ3NzTGVuZ3RoUGFpcjtcclxuICAgIHNjcm9sbFBhZGRpbmdJbmxpbmVFbmQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nSW5saW5lU3RhcnQ/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxQYWRkaW5nTGVmdD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdSaWdodD86IENzc0xlbmd0aDtcclxuICAgIHNjcm9sbFBhZGRpbmdUb3A/OiBDc3NMZW5ndGg7XHJcbiAgICBzY3JvbGxTbmFwQWxpZ24/OiBTY3JvbGxTbmFwQWxpZ25fU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsU25hcFN0b3A/OiBTY3JvbGxTbmFwU3RvcF9TdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxTbmFwVHlwZT86IFNjcm9sbFNuYXBUeXBlX1N0eWxlVHlwZTtcclxuICAgIHNoYXBlSW1hZ2VUaHJlc2hvbGQ/OiBDc3NOdW1iZXI7XHJcbiAgICBzaGFwZU1hcmdpbj86IENzc0xlbmd0aDtcclxuICAgIHNoYXBlT3V0c2lkZT86IFNoYXBlT3V0c2lkZV9TdHlsZVR5cGU7XHJcbiAgICBzaGFwZVJlbmRlcmluZz86IFNoYXBlUmVuZGVyaW5nX1N0eWxlVHlwZTtcclxuICAgIHN0b3BDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgc3RvcE9wYWNpdHk/OiBDc3NOdW1iZXI7XHJcbiAgICBzdHJva2U/OiBDc3NDb2xvcjtcclxuICAgIHN0cm9rZURhc2hhcnJheT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VEYXNob2Zmc2V0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZUxpbmVjYXA/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlTGluZWpvaW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VPcGFjaXR5PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZVdpZHRoPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuXHJcbiAgICB0YWJTaXplPzogQ3NzTGVuZ3RoO1xyXG4gICAgdGFibGVMYXlvdXQ/OiBUYWJsZUxheW91dF9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0QWxpZ24/OiBUZXh0QWxpZ25fU3R5bGVUeXBlO1xyXG4gICAgdGV4dEFsaWduTGFzdD86IFRleHRBbGlnbkxhc3RfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEFuY2hvcj86IFRleHRBbmNob3JfU3R5bGVUeXBlO1xyXG4gICAgdGV4dENvbWJpbmVVcHJpZ2h0PzogVGV4dENvbWJpbmVVcHJpZ2h0X1N0eWxlVHlwZTtcclxuICAgIHRleHREZWNvcmF0aW9uPzogVGV4dERlY29yYXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb25Db2xvcj86IENzc0NvbG9yO1xyXG4gICAgdGV4dERlY29yYXRpb25MaW5lPzogVGV4dERlY29yYXRpb25MaW5lX1N0eWxlVHlwZTtcclxuICAgIHRleHREZWNvcmF0aW9uU2tpcEluaz86IFRleHREZWNvcmF0aW9uU2tpcElua19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlPzogVGV4dERlY29yYXRpb25TdHlsZV9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcz86IFRleHREZWNvcmF0aW9uVGhpY2tuZXNzX1N0eWxlVHlwZTtcclxuICAgIHRleHRFbXBoYXNpcz86IFRleHRFbXBoYXNpc19TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgdGV4dEVtcGhhc2lzUG9zaXRpb24/OiBUZXh0RW1waGFzaXNQb3NpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RW1waGFzaXNTdHlsZT86IFRleHRFbXBoYXNpc1N0eWxlX1N0eWxlVHlwZTtcclxuICAgIHRleHRJbmRlbnQ/OiBUZXh0SW5kZW50X1N0eWxlVHlwZTtcclxuICAgIHRleHRKdXN0aWZ5PzogVGV4dEp1c3RpZnlfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEthc2hpZGE/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgdGV4dEthc2hpZGFTcGFjZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICB0ZXh0T3JpZW50YXRpb24/OiBUZXh0T3JpZW50YXRpb25fU3R5bGVUeXBlO1xyXG4gICAgdGV4dE92ZXJmbG93PzogVGV4dE92ZXJmbG93X1N0eWxlVHlwZTtcclxuICAgIHRleHRTaGFkb3c/OiBUZXh0U2hhZG93X1N0eWxlVHlwZTtcclxuICAgIHRleHRTaXplQWRqdXN0PzogVGV4dFNpemVBZGp1c3RfU3R5bGVUeXBlO1xyXG4gICAgdGV4dFRyYW5zZm9ybT86IFRleHRUcmFuc2Zvcm1fU3R5bGVUeXBlO1xyXG4gICAgdGV4dFVuZGVybGluZVBvc2l0aW9uPzogVGV4dFVuZGVybGluZVBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRvcD86IENzc0xlbmd0aDtcclxuICAgIHRvdWNoQWN0aW9uPzogVG91Y2hBY3Rpb25fU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNmb3JtPzogVHJhbnNmb3JtX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zZm9ybUJveD86IFRyYW5zZm9ybUJveF9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2Zvcm1PcmlnaW4/OiBUcmFuc2Zvcm1PcmlnaW5fU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNmb3JtU3R5bGU/OiBUcmFuc2Zvcm1TdHlsZV9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2l0aW9uPzogVHJhbnNpdGlvbl9TdHlsZVR5cGU7XHJcbiAgICB0cmFuc2l0aW9uRGVsYXk/OiBPbmVPck1hbnk8Q3NzVGltZT47XHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24/OiBPbmVPck1hbnk8Q3NzVGltZT47XHJcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk/OiBUcmFuc2l0aW9uUHJvcGVydHlfU3R5bGVUeXBlO1xyXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uPzogVHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uX1N0eWxlVHlwZTtcclxuICAgIHRyYW5zbGF0ZT86IFRyYW5zbGF0ZV9TdHlsZVR5cGU7XHJcblxyXG4gICAgdW5pY29kZUJpZGk/OiBVbmljb2RlQmlkaV9TdHlsZVR5cGU7XHJcbiAgICB1c2VyU2VsZWN0PzogVXNlclNlbGVjdF9TdHlsZVR5cGU7XHJcblxyXG4gICAgdmVydGljYWxBbGlnbj86IFZlcnRpY2FsQWxpZ25fU3R5bGVUeXBlO1xyXG4gICAgdmlzaWJpbGl0eT86IFZpc2liaWxpdHlfU3R5bGVUeXBlO1xyXG4gICAgdmVjdG9yRWZmZWN0PzogVmVjdG9yRWZmZWN0X1N0eWxlVHlwZTtcclxuXHJcbiAgICB3aGl0ZVNwYWNlPzogV2hpdGVTcGFjZV9TdHlsZVR5cGU7XHJcbiAgICB3aWRvd3M/OiBDc3NOdW1iZXI7XHJcbiAgICB3aWR0aD86IENzc0xlbmd0aDtcclxuICAgIHdpbGxDaGFuZ2U/OiBXaWxsQ2hhbmdlX1N0eWxlVHlwZTtcclxuICAgIHdvcmRCcmVhaz86IFdvcmRCcmVha19TdHlsZVR5cGU7XHJcbiAgICB3b3JkU3BhY2luZz86IFdvcmRTcGFjaW5nX1N0eWxlVHlwZTtcclxuICAgIHdyaXRpbmdNb2RlPzogV3JpdGluZ01vZGVfU3R5bGVUeXBlO1xyXG5cclxuICAgIHpJbmRleD86IFpJbmRleF9TdHlsZVR5cGU7XHJcbiAgICB6b29tPzogWm9vbV9TdHlsZVR5cGU7XHJcblxyXG4gICAgLy8gd2Via2l0Qm9yZGVySW1hZ2U/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Qm94RGlyZWN0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdEJveE9yaWVudD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5CcmVha0FmdGVyPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbkJyZWFrQmVmb3JlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbkJyZWFrSW5zaWRlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtbkNvdW50PzogQ29sdW1uQ291bnRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5HYXA/OiBTaW5nbGVHYXBTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRDb2x1bW5SdWxlPzogQ29sdW1uUnVsZVN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtblJ1bGVDb2xvcj86IENzc0NvbG9yO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uUnVsZVN0eWxlPzogQ29sdW1uUnVsZVN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtblJ1bGVXaWR0aD86IEJvcmRlckxlbmd0aFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdENvbHVtblNwYW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1uV2lkdGg/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0Q29sdW1ucz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRMaW5lQ2xhbXA/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gd2Via2l0VXNlck1vZGlmeT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyB3ZWJraXRVc2VyU2VsZWN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIHdlYmtpdFdyaXRpbmdNb2RlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuXHJcbiAgICAvLyBtc0NvbnRlbnRab29tQ2hhaW5pbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbUxpbWl0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21MaW1pdE1heD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0NvbnRlbnRab29tTGltaXRNaW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbVNuYXA/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbVNuYXBQb2ludHM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNDb250ZW50Wm9vbVNuYXBUeXBlPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zQ29udGVudFpvb21pbmc/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNGbG93RnJvbT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0Zsb3dJbnRvPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zRm9udEZlYXR1cmVTZXR0aW5ncz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRDb2x1bW4/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkQ29sdW1uQWxpZ24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNHcmlkQ29sdW1uU3Bhbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRDb2x1bW5zPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZFJvdz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRSb3dBbGlnbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0dyaWRSb3dTcGFuPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zR3JpZFJvd3M/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIaWdoQ29udHJhc3RBZGp1c3Q/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNIeXBoZW5hdGVMaW1pdENoYXJzPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zSHlwaGVuYXRlTGltaXRMaW5lcz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0h5cGhlbmF0ZUxpbWl0Wm9uZT86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc0h5cGhlbnM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNJbWVBbGlnbj86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc092ZXJmbG93U3R5bGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxDaGFpbmluZz86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbExpbWl0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXRYTWF4PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXRYTWluPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXRZTWF4PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsTGltaXRZTWluPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsUmFpbHM/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwUG9pbnRzWD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFNuYXBQb2ludHNZPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsU25hcFR5cGU/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNTY3JvbGxTbmFwWD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1Njcm9sbFNuYXBZPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zU2Nyb2xsVHJhbnNsYXRpb24/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNUZXh0Q29tYmluZUhvcml6b250YWw/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNUZXh0U2l6ZUFkanVzdD86IERlZmF1bHRTdHlsZVR5cGU7XHJcbiAgICAvLyBtc1RvdWNoQWN0aW9uPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zVG91Y2hTZWxlY3Q/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNVc2VyU2VsZWN0PzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zV3JhcEZsb3c/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG4gICAgLy8gbXNXcmFwTWFyZ2luPzogRGVmYXVsdFN0eWxlVHlwZTtcclxuICAgIC8vIG1zV3JhcFRocm91Z2g/OiBEZWZhdWx0U3R5bGVUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3RyaW5nU3R5bGVzZXQgdHlwZSBtYXBzIENTUyBwcm9wZXJ0aWVzIGluY2x1ZGluZyBjdXN0b20gcHJvcGVydGllcyB0byB0aGUgc3RyaW5nIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN0cmluZ1N0eWxlc2V0ID0geyBbSzogc3RyaW5nXTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXh0ZW5kZWRTdHlsZXNldCB0eXBlIG1hcHMgYWxsIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIFtbSUNzc1N0eWxlc2V0XV0gaW50ZXJmYWNlIHRvIHRoZVxyXG4gKiBcImV4dGVuZGVkXCIgdmVyc2lvbnMgb2YgdGhlaXIgdHlwZXMuIFRoZXNlIGV4dGVuZGVkIHR5cGVzIGFyZSBkZWZpbmVkIGJ5IGFkZGluZyBiYXNpYyBrZXl3b3Jkc1xyXG4gKiAoZS5nLiBcInVuc2V0XCIsIFwiaW5pdGlhbFwiLCBldGMuKSBhcyB3ZWxsIGFzIFtbU3RyaW5nUHJveHldXSBhbmQgW1tJQ3VzdG9tVmFyXV0gdG8gdGhlIHR5cGUgdGhhdFxyXG4gKiBpcyBkZWZpbmVkIGluIHRoZSBJQ3NzU3R5bGVzZXQgaW50ZXJmYWNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRTdHlsZXNldCA9IHsgW0sgaW4ga2V5b2YgSUNzc1N0eWxlc2V0XT86IEV4dGVuZGVkUHJvcDxJQ3NzU3R5bGVzZXRbS10+IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzVmFyVGVtcGxhdGVzIGludGVyZmFjZSBtYXBzIHRlbXBsYXRlIG5hbWVzIHRvIHRoZSB0eXBlcywgd2hpY2ggY2FuIGJlIHVzZWQgZm9yXHJcbiAqIGRlZmluaW5nIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoYS5rLmEuIHZhcmlhYmxlcykuIE5vcm1hbGx5LCB2YXJpYWJsZXMgYXJlIGRlZmluZWQgdXNpbmcgdGhlXHJcbiAqIG5hbWVzIG9mIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGFuZCB0aGVpciB0eXBlIGlzIGRldGVybWluZWQgYnkgdGhlIHR5cGUgb2YgdGhpcyBwcm9wZXJ0eSBpbiB0aGVcclxuICogSUNzc1N0eWxlc2V0IGludGVyZmFjZS4gU29tZXRpbWVzLCBob3dldmVyLCB0aGVyZSBpcyBhIG5lZWQgdG8gZGVmaW5lIHZhcmlhYmxlcyBvZiBzb21lIG90aGVyXHJcbiAqIHR5cGVzLCBmb3Igd2hpY2ggdGhlcmUgaXMgbm8gc3VpdGFibGUgc3R5bGUgcHJvcGVydHkuIFRoZSBJQ3NzVmFyVGVtcGxhdGVzIGludGVyZmFjZSBwcm92aWRlc1xyXG4gKiBtYW55IGJhc2ljIHR5cGVzIGFuZCBpdCBjYW4gYWxzbyBiZSBleHRlbmRlZCB1c2luZyB0aGUgVHlwZVNjcmlwdCdzIG1vZHVsZSBhdWdtZW50YXRpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NWYXJUZW1wbGF0ZXMgZXh0ZW5kcyBJQ3NzU3R5bGVzZXRcclxue1xyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCB2YWx1ZSBvZiBhbnkgdHlwZSAqL1xyXG4gICAgXCJhbnlcIj86IGFueTtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgc3RyaW5nIHZhbHVlICovXHJcbiAgICBDc3NTdHJpbmc/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8bnVtYmVyPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NOdW1iZXI/OiBDc3NOdW1iZXI7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8bGVuZ3RoPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NMZW5ndGg/OiBDc3NMZW5ndGg7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhbiBgPGFuZ2xlPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NBbmdsZT86IENzc0FuZ2xlO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPHRpbWU+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1RpbWU/OiBDc3NUaW1lO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPHJlc29sdXRpb24+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1Jlc29sdXRpb24/OiBDc3NSZXNvbHV0aW9uO1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPGZyZXF1ZW5jeT5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzRnJlcXVlbmN5PzogQ3NzRnJlcXVlbmN5O1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBgPHBlcmNlbnQ+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc1BlcmNlbnQ/OiBDc3NQZXJjZW50O1xyXG5cclxuICAgIC8qKiBBbGxvd3MgaGF2aW5nIENTUyB2YXJpYWJsZXMgdGhhdCBhY2NlcHQgYSBQb2ludCB2YWx1ZSAqL1xyXG4gICAgQ3NzUG9pbnQ/OiBDc3NQb2ludDtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYDxwb3NpdGlvbj5gIENTUyB2YWx1ZSAqL1xyXG4gICAgQ3NzUG9zaXRpb24/OiBDc3NQb3NpdGlvbjtcclxuXHJcbiAgICAvKiogQWxsb3dzIGhhdmluZyBDU1MgdmFyaWFibGVzIHRoYXQgYWNjZXB0IGEgYFJhZGl1c2AgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NSYWRpdXM/OiBDc3NSYWRpdXM7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhIGA8Y29sb3I+YCBDU1MgdmFsdWUgKi9cclxuICAgIENzc0NvbG9yPzogQ3NzQ29sb3I7XHJcblxyXG4gICAgLyoqIEFsbG93cyBoYXZpbmcgQ1NTIHZhcmlhYmxlcyB0aGF0IGFjY2VwdCBhbiBgPGltYWdlPmAgQ1NTIHZhbHVlICovXHJcbiAgICBDc3NJbWFnZT86IENzc0ltYWdlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyVGVtcGxhdGVOYW1lIHR5cGUgZGVmaW5lcyB0aGUga2V5cyAoc3RyaW5ncykgdGhhdCBjYW4gYmUgdXNlZCBhcyB0ZW1wbGF0ZXMgZm9yIGRlZmluaW5nXHJcbiAqIGN1c3RvbSBDU1MgcHJvcGVydGllcyB1c2luZyB0aGUgW1skdmFyXV0gZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWYXJUZW1wbGF0ZU5hbWUgPSBrZXlvZiBJQ3NzVmFyVGVtcGxhdGVzO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclRlbXBsYXRlcyB0eXBlIG1hcHMgYWxsIHRlbXBsYXRlIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgW1tJQ3NzVmFyVGVtcGxhdGVzXV1cclxuICogaW50ZXJmYWNlIHRvIHRoZSBcImV4dGVuZGVkXCIgdmVyc2lvbnMgb2YgdGhlaXIgdHlwZXMuIFRoZXNlIGV4dGVuZGVkIHR5cGVzIGFyZSBkZWZpbmVkIHVzaW5nXHJcbiAqIHRoZSBbW0V4dGVuZGVkXV0gZ2VuZXJpYyB0eXBlLCB3aGljaCBhZGRzIGJhc2ljIGtleXdvcmRzIChlLmcuIFwidW5zZXRcIiwgXCJpbml0aWFsXCIsIGV0Yy4pIGFzXHJcbiAqIHdlbGwgYXMgW1tTdHJpbmdQcm94eV1dIGFuZCBbW0lDdXN0b21WYXJdXSB0byB0aGUgdHlwZSB0aGF0IGlzIGRlZmluZWQgaW4gdGhlIElDc3NWYXJUZW1wbGF0ZXNcclxuICogaW50ZXJmYWNlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVmFyVGVtcGxhdGVzID0geyBbSyBpbiBWYXJUZW1wbGF0ZU5hbWVdOiBFeHRlbmRlZFByb3A8SUNzc1ZhclRlbXBsYXRlc1tLXT4gfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclZhbHVlVHlwZSBnZW5lcmljIHR5cGUgZGVmaW5lcyB0aGUgdHlwZSBvZiB0aGUgdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIGN1c3RvbVxyXG4gKiBDU1MgcHJvcGVydHkgdXNpbmcgdGhlIGdlbmVyaWMgdHlwZSBLIGFzIGl0cyB0ZW1wbGF0ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFZhclZhbHVlVHlwZTxLIGV4dGVuZHMgVmFyVGVtcGxhdGVOYW1lPiA9IFZhclRlbXBsYXRlc1tLXTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDdXN0b21WYXJTdHlsZVR5cGUgdHlwZSByZXByZXNlbnRzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eSBuYW1lIGFuZCB2YWx1ZSB0aGF0IGFyZSB1c2VkIHRvXHJcbiAqIGRlZmluZSBjdXN0b20gcHJvcGVydGllcyBpbiBhIFN0eWxlc2V0LiBUaGlzIG9iamVjdCBpcyB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXHJcbiAqIGAtLWAgcHJvcGVydHkgb2YgdGhlIFN0eWxlc2V0IHR5cGUuXHJcbiAqIFxyXG4gKiBDdXN0b21WYXJTdHlsZVR5cGUgb2JqZWN0cyBzaG91bGQgYmUgbW9zdGx5IHVzZWQgdG8gb3ZlcnJpZGUgY3VzdG9tIHByb3BlcnRpZXMgdGhhdCBoYXZlXHJcbiAqIHByZXZpb3VzbHkgYmVlbiBkZWZpbmVkIGF0IHRoZSB0b3AtbGV2ZWwgdXNpbmcgdGhlICR2YXIgZnVuY3Rpb24uIFRoYXQgd2F5IHlvdSBjYW4gaGF2ZSBhXHJcbiAqIFwiZ2xvYmFsXCIgdmFsdWUgb2YgYSBjdXN0b20gcHJvcGVydHkgYW5kIGFzc2lnbiBhIGRpZmZlcmVudCB2YWx1ZSB0byBpdCB1bmRlciBhIGNlcnRhaW4gQ1NTXHJcbiAqIHNlbGVjdG9yLlxyXG4gKiBcclxuICogVGhlIHZhbHVlcyBvZiB0aGUgdHlwZSBjYW4gYmUgc3BlY2lmaWVkIGFzIGVpdGhlciBhIHR3by1pdGVtIG9yIGEgdGhyZWUtaXRlbSBhcnJheS4gVGhlXHJcbiAqIHR3by1pdGVtIGFycmF5IGlzIHVzZWQgd2l0aCBhIHByZXZpb3VzbHkgZGVmaW5lZCBjdXN0b20gQ1NTIHByb3BlcnR5IHJlcHJlc2VudGVkIGJ5IGFuIElWYXJSdWxlXHJcbiAqIG9iamVjdDpcclxuICogLSBUaGUgZmlyc3QgaXRlbSBpcyB0aGUgSVZhclJ1bGUgb2JqZWN0LlxyXG4gKiAtIFRoZSBzZWNvbmQgaXRlbSBpcyB0aGUgdmFsdWVcclxuICogXHJcbiAqIFRoZSB0aHJlZS1pdGVtIGFycmF5IGFsbG93cyBkaXJlY3RseSBzcGVjaWZ5aW5nIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5IG5hbWU6XHJcbiAqIC0gVGhlIGZpcnN0IGl0ZW0gaXMgYSBzdHJpbmcgLSB0aGUgbmFtZSBvZiB0aGUgY3VzdG9tIENTUyBwcm9wZXJ0eS4gSWYgdGhlIG5hbWUgaXMgbm90IHByZWZpeGVkXHJcbiAqIHdpdGggdHdvIGRhc2hlcyB0aGV5IHdpbGwgYmUgYWRkZWQgYXV0b21hdGljYWxseS5cclxuICogLSBUaGUgc2Vjb25kIGl0ZW0gaXMgdGhlIG5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlXHJcbiAqIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS5cclxuICogLSBUaGUgdGhpcmQgaXRlbSBpcyB0aGUgdmFsdWVcclxuICogXHJcbiAqIFVzZSB0aGUgQ3VzdG9tVmFyU3R5bGVUeXBlIHR5cGUgaW4gdGhlIGZvbGxvd2luZyBtYW5uZXI6XHJcbiAqIFxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGNsYXNzIE15U3R5bGVzIGV4dGVuZHMgU3R5bGVEZWZpbml0aW9uXHJcbiAqIHtcclxuICogICAgIC8vIGRlZmluZSBnbG9iYWwgY3VzdG9tIENTUyBwcm9wZXJ0eSBhbmQgcmUtZGVmaW5lIGl0cyB2YWx1ZSB1bmRlciBcImJyb3duXCIgY2xhc3MuXHJcbiAqICAgICBtYWluQ29sb3IgPSAkdmFyKCBcImNvbG9yXCIsIFwiYmxhY2tcIik7XHJcbiAqICAgICBicm93biA9ICRjbGFzcyh7IFwiLS1cIjogWyBbdGhpcy5tYWluQ29sb3IsIFwiYnJvd25cIl0gXSB9KVxyXG5cclxuICogICAgIC8vIGRpcmVjdGx5IGRlZmluZSBjdXN0b20gQ1NTIHByb3BlcnR5IHVuZGVyIFwiYmx1ZVwiIGNsYXNzLlxyXG4gKiAgICAgYmx1ZSA9ICRjbGFzcyh7IFwiLS1cIjogWyBbXCJkaWZmZXJlbnQtY29sb3JcIiwgXCJjb2xvclwiLCBcImJsdWVcIl0gXSB9KVxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGZvbGxvd2luZyBDU1M6XHJcbiAqIFxyXG4gKiBgYGBjc3NcclxuICogOnJvb3QgeyAtLU15U3R5bGVzX21haW5Db2xvcjogXCJibGFja1wiOyB9XHJcbiAqIC5icm93biB7IC0tTXlTdHlsZXNfbWFpbkNvbG9yOiBcImJyb3duXCI7IH1cclxuICogLmJsdWUgeyAtLWRpZmZlcmVudC1vbG9yOiBcImJsdWVcIjsgfVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCB0eXBlIEN1c3RvbVZhcl9TdHlsZVR5cGU8SyBleHRlbmRzIFZhclRlbXBsYXRlTmFtZSA9IGFueT4gPSBcclxuICAgIFtJVmFyUnVsZTxLPiwgVmFyVmFsdWVUeXBlPEs+XSB8IFtzdHJpbmcsIEssIFZhclZhbHVlVHlwZTxLPl1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGEgY29sbGVjdGlvbiBvZiBzdHlsZSBwcm9wZXJ0aWVzIGFuZCB0aGVpciB2YWx1ZXMuIEluIGFkZGl0aW9uIHRvIHRoZVxyXG4gKiBwcm9wZXJ0aWVzIHJlcHJlc2VudGluZyB0aGUgc3RhbmRhcmQgQ1NTIHN0eWxlcywgdGhpcyB0eXBlIGFsc28gaW5jbHVkZXMgdGhlIFwiLS1cIiBwcm9wZXJ0eSxcclxuICogd2hpY2ggaXMgYW4gYXJyYXkgb2YgQ3VzdG9tVmFyU3R5bGVUeXBlIG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHlsZXNldCA9IEV4dGVuZGVkU3R5bGVzZXQgJlxyXG4gICAge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNwZWNpYWwgcHJvcGVydHkgXCItLVwiIHNwZWNpZmllcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIEN1c3RvbVZhclN0eWxlVHlwZSBvYmplY3RzIGVhY2hcclxuICAgICAgICAgKiByZXByZXNlbnRpbmcgYSBkZWZpbml0aW9uIG9mIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBcIi0tXCI/OiBDdXN0b21WYXJfU3R5bGVUeXBlW107XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3VwcG9ydHMgcXVlcnkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIGEgc2luZ2xlIHNldCBvZiBzdHlsZXMgYXMgcGFydCBvZiB0aGUgQHN1cHBvcnRzIHJ1bGVzLiBUaGUgc3R5bGVzIGluIHRoZVxyXG4gKiBzdHlsZXNldCBhcmUgY29tYmluZWQgd2l0aCB0aGUgXCJhbmRcIiBvcGVyYXRvci4gVGhlIGVudGlyZSBzdHlsZXNldCBjYW4gYmUgbmVnYXRlZCwgd2hpY2ggd2lsbFxyXG4gKiByZXN1bHQgaW4gcGxhY2luZyB0aGUgXCJub3RcIiBvcGVyYXRvciB0aGF0IHdpbGwgYWN0IG9uIGFsbCBzdHlsZXMgaW4gdGhlIHF1ZXJ5LlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHVzaW5nIFB1cmVTdHlsZXNldCBvYmplY3QgZG9lc24ndCBhbGxvdyBmb3IgY2hlY2tpbmcgd2hldGhlciB0d28gb3IgbW9yZSB2YWx1ZXMgb2ZcclxuICogYSBnaXZlbiBwcm9wZXJ0eSBhcmUgc3VwcG9ydGVkLiBGb3IgZXhhbXBsZSwgYWx0aG91Z2ggd2UgY2FuIHRlc3QgdGhhdCB0aGUgXCJkaXNwbGF5XCIgcHJvcGVydHlcclxuICogc3VwcG9ydHMgdGhlIFwiZmxleFwiIHZhbHVlLCB3ZSBjYW5ub3QgY2hlY2sgd2hldGhlciBib3RoIFwiZmxleFwiIGFuZCBcImdyaWRcIiB2YWx1ZXMgYXJlIHN1cHBvcnRlZC5cclxuICogVG8gY2hlY2sgc3VjaCBjcml0ZXJpYSB5b3UgbXVzdCBzcGVjaWZ5IHRoZSBxdWVyeSBhcyBhIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZVN1cHBvcnRzUXVlcnkgPSBzdHJpbmcgfCBFeHRlbmRlZFN0eWxlc2V0ICYgeyAkbmVnYXRlPzogYm9vbGVhbjsgfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgcmVwcmVzZW50aW5nIG9uZSBvciBtb3JlIHF1ZXJpZXMgYXMgcGFydCBvZiB0aGUgQHN1cHBvcnRzIHJ1bGUuIFdoaWxlIG11bHRpcGxlIHF1ZXJpZXMgaW5cclxuICogYW4gYXJyYXkgYXJlIGNvbWJpbmVkIHdpdGggdGhlIFwib3JcIiBvcGVyYXRvciwgdGhlIHN0eWxlcyB3aXRoaW4gZWFjaCBzdHlsZXNldCBhcmUgY29tYmluZWQgd2l0aFxyXG4gKiB0aGUgXCJhbmRcIiBvcGVyYXRvci5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN1cHBvcnRzUXVlcnkgPSBTaW5nbGVTdXBwb3J0c1F1ZXJ5IHwgU2luZ2xlU3VwcG9ydHNRdWVyeVtdO1xyXG5cclxuXHJcblxyXG4iLCLvu79pbXBvcnQge1xyXG4gICAgRXh0ZW5kZWQsIElHZW5lcmljUHJveHksIENzc051bWJlciwgQ3NzTXVsdGlOdW1iZXIsIElOdW1iZXJCYXNlTWF0aCxcclxuICAgIENzc1Bvc2l0aW9uLCBNdWx0aUNzc1Bvc2l0aW9uLCBOdW1iZXJCYXNlLCBNdWx0aU51bWJlckJhc2UsXHJcbiAgICBDc3NMZW5ndGgsIENzc011bHRpTGVuZ3RoLCBDc3NBbmdsZSwgQ3NzTXVsdGlBbmdsZSwgQ3NzVGltZSwgQ3NzTXVsdGlUaW1lLFxyXG4gICAgQ3NzUmVzb2x1dGlvbiwgQ3NzTXVsdGlSZXNvbHV0aW9uLCBDc3NGcmVxdWVuY3ksIENzc011bHRpRnJlcXVlbmN5LFxyXG4gICAgQ3NzUGVyY2VudCwgQ3NzTXVsdGlQZXJjZW50LCBJQ3NzTGVuZ3RoTWF0aCxcclxuICAgIElDc3NBbmdsZU1hdGgsIElDc3NQZXJjZW50TWF0aCwgSUNzc0ZyZXF1ZW5jeU1hdGgsIElDc3NSZXNvbHV0aW9uTWF0aCwgSUNzc1RpbWVNYXRoLFxyXG4gICAgTnVtYmVyVHlwZSwgTGVuZ3RoVHlwZSwgUGVyY2VudFR5cGUsIEFuZ2xlVHlwZSwgVGltZVR5cGUsIFJlc29sdXRpb25UeXBlLCBGcmVxdWVuY3lUeXBlXHJcbn0gZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgZGFzaGUtY2FzZSB0byBjYW1lbENhc2UsIGUuZy4gZm9udC1zaXplIHRvIGZvbnRTaXplLlxyXG4gKiBAcGFyYW0gZGFzaFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hUb0NhbWVsKCBkYXNoOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZGFzaClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cclxuXHRyZXR1cm4gZGFzaC5yZXBsYWNlKCAvLShbYS16QS1aXSkvZywgKHgsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZSwgZS5nLiBmb250U2l6ZSB0byBmb250LXNpemUuXHJcbiAqIEBwYXJhbSBjYW1lbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKCBjYW1lbDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICByZXR1cm4gY2FtZWwucmVwbGFjZSggLyhbYS16QS1aXSkoPz1bQS1aXSkvZywgJyQxLScpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVmFsdWVDb252ZXJ0T3B0aW9ucyBpbnRlcmZhY2UgZGVmaW5lcyBvcHRpb25hbCBmdW5jdGlvbnMgdGhhdCBjb252ZXJ0dmFsdWVzIG9mIGRpZmZlcm50XHJcbiAqIHR5cGVzIHRvIHN0cmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElWYWx1ZUNvbnZlcnRPcHRpb25zXHJcbntcclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZFxyXG4gICAgZnJvbU51bGw/OiAoIHZhbDogbnVsbCB8IHVuZGVmaW5lZCkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhIHN0cmluZy4gVGhpcyBhbGxvd3MgdHJhbnNmb3JtaW5nIG9uZSBzdHJpbmcgdG8gYW5vdGhlci5cclxuICAgIGZyb21TdHJpbmc/OiAoIHZhbDogc3RyaW5nKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgYm9vbGVhblxyXG4gICAgZnJvbUJvb2w/OiAodmFsOiBib29sZWFuKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGEgbnVtYmVyXHJcbiAgICBmcm9tTnVtYmVyPzogKHZhbDogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gQ2FsbGVkIGlmIHZhbHVlIGlzIGFuIGFycmF5XHJcbiAgICBmcm9tQXJyYXk/OiAodmFsOiBhbnlbXSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCBpZiB2YWx1ZSBpcyBhbiBvYmplY3RcclxuICAgIGZyb21PYmo/OiAodmFsOiBhbnkpID0+IHN0cmluZztcclxuXHJcbiAgICAvLyBDYWxsZWQgaWYgdHlwZS1zcGVjaWZpYyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZFxyXG4gICAgZnJvbUFueT86ICh2YWw6IGFueSkgPT4gc3RyaW5nO1xyXG5cclxuICAgIC8vIENhbGxlZCB0byBjb252ZXJ0IGFycmF5IGl0ZW1zIGlmIGZyb21BcnJheSBpcyBub3QgZGVmaW5lZFxyXG4gICAgYXJySXRlbUZ1bmM/OiAodjogYW55KSA9PiBzdHJpbmc7XHJcblxyXG4gICAgLy8gU2VwYXJhdG9yIGZvciBhcnJheSBpdGVtcyAtIHVzZWQgb25seSBpZiBmcm9tQXJyYXkgaXMgbm90IGRlZmluZWRcclxuICAgIGFyclNlcD86IHN0cmluZztcclxuXHJcbiAgICAvLyBJZiB2YWx1ZSBpcyBhIGZ1bmN0aW9uLCB0aGVzZSBhcmUgYXJndW1lbnRzIHRvIHBhc3Mgd2hlbiBpbnZva2luZyBpdFxyXG4gICAgZnVuY0FyZ3M/OiBhbnlbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSB2YWx1ZSBvZiBhbiBhcmJpdHJhcnkgdHlwZSB0byBhIHNpbmdsZSBzdHJpbmcuIFRoZSBvcHRpb25hbCBvcHRpb25zIHBhcmFtZXRlclxyXG4gKiBjYW4gZGVmaW5lIGhvdyBzcGVjaWZpYyB0eXBlcyBhcmUgY29udmVydGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZhbDJzdHIoIHZhbDogYW55LCBvcHRpb25zPzogSVZhbHVlQ29udmVydE9wdGlvbnMpOiBzdHJpbmdcclxue1xyXG4gICBpZiAoIW9wdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc3RhbmRhcmQgcHJvY2Vzc2luZzpcclxuICAgICAgICAvLyAtIG51bGwvdW5kZWZpbmVkIGJlY29tZSBlbXB0eSBzdHJpbmcuXHJcbiAgICAgICAgLy8gLSBjYWxsIHZhbHVlVG9TdHJpbmcgKHByb3h5IG9iamVjdHMpIGlmIGV4aXN0LlxyXG4gICAgICAgIC8vIC0gZnVuY3Rpb246IGNhbGwgd2l0aG91dCBwYXJhbWV0ZXJzLlxyXG4gICAgICAgIC8vIC0gZXZlcnl0aGluZyBlbHNlOiBjYWxsIHRvU3RyaW5nKCkuXHJcbiAgICAgICAgaWYgKHZhbCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbC52YWx1ZVRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudmFsdWVUb1N0cmluZygpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIC8vIHByb2Nlc3Npbmcgd2l0aCBvcHRpb25zLiBGb3IgYWxsIHR5cGVzIGV4Y2VwdCBudWxsIGFuZCBzdHJpbmcsIGlmIHRoZSB0eXBlLXNwZWNpZmljXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIGNhbGwgZnJvbUFueSBpZiBkZWZpbmVkLlxyXG4gICAgICAgIGlmICh2YWwgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU51bGwgPyBvcHRpb25zLmZyb21OdWxsKCB2YWwpIDogXCJcIjtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tU3RyaW5nID8gb3B0aW9ucy5mcm9tU3RyaW5nKCB2YWwpIDogdmFsO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZyb21OdW1iZXIgPyBvcHRpb25zLmZyb21OdW1iZXIoIHZhbCkgOiBvcHRpb25zLmZyb21BbnkgPyBvcHRpb25zLmZyb21BbnkoIHZhbCkgOiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWwyc3RyKCBvcHRpb25zLmZ1bmNBcmdzID8gdmFsKCAuLi5vcHRpb25zLmZ1bmNBcmdzKSA6IHZhbCgpKTtcclxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5mcm9tQXJyYXkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQXJyYXkoIHZhbCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlcGFyYXRvciA9IG9wdGlvbnMuYXJyU2VwICE9IG51bGwgPyBvcHRpb25zLmFyclNlcCA6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjJzdHIoIHZhbCwgb3B0aW9ucy5hcnJJdGVtRnVuYyB8fCBvcHRpb25zLmZyb21BbnkgfHwgdW5kZWZpbmVkLCBzZXBhcmF0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbC52YWx1ZVRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLnZhbHVlVG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tT2JqKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbU9iaiggdmFsKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tQW55KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUFueSggdmFsKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZnJvbUJvb2wgPyBvcHRpb25zLmZyb21Cb29sKCB2YWwpIDogb3B0aW9ucy5mcm9tQW55ID8gb3B0aW9ucy5mcm9tQW55KCB2YWwpIDogdmFsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5mcm9tQW55KVxyXG4gICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5mcm9tQW55KCB2YWwpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbiBhcnJheSBvZiB0aGUgZ2l2ZW4gdHlwZXRvIGEgc2luZ2xlIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gc2VwYXJhdG9yLlxyXG4gKiBFbGVtZW50cyBvZiB0aGUgYXJyYXkgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzIHVzaW5nIHRoZSBnaXZlbiBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnIyc3RyKCB2YWw6IGFueVtdLCBmdW5jPzogKHYpID0+IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gIXZhbCB8fCB2YWwubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgOiB2YWwuZmlsdGVyKCB4ID0+IHggIT0gbnVsbCkubWFwKCB5ID0+IGZ1bmMgPyBmdW5jKHkpIDogdmFsMnN0ciggeSkpLmpvaW4oIHNlcGFyYXRvcik7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgdGVtcGxhdGVTdHJpbmdUb1N0cmluZyBpcyBhIHRhZyBmdW5jdGlvbiBoZWxwZXIgdGhhdCBjb252ZXJ0cyB0aGUgdGVtcGxhdGUgc3RyaW5nIHdpdGhcclxuICogcGFyYW1ldGVycyB0byBhIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gY29udmVydCBwYXJhbWV0ZXJzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgcGFyYW1zOiBhbnlbXSxcclxuICAgIGNvbnZlcnRGdW5jPzogKCB2OiBhbnkpID0+IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICAvLyBudW1iZXIgb2YgcGFyYW1ldGVycyBpcyBhbHdheXMgMSBsZXNzIHRoYW4gdGhlIG51bWJlciBvZiBzdHJpbmcgcGFydHNcclxuICAgIGxldCBwYXJhbXNMZW4gPSBwYXJhbXMubGVuZ3RoO1xyXG4gICAgaWYgKHBhcmFtc0xlbiA9PT0gMClcclxuICAgICAgICByZXR1cm4gcGFydHNbMF07XHJcblxyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCBwYXJhbXNMZW47IGkrKylcclxuICAgICAgICBzICs9IHBhcnRzW2ldICsgKGNvbnZlcnRGdW5jID8gY29udmVydEZ1bmMoIHBhcmFtc1tpXSkgOiB2YWwyc3RyKCBwYXJhbXNbaV0pKTtcclxuXHJcbiAgICAvLyBhZGQgdGhlIGxhc3QgcGFydFxyXG4gICAgcmV0dXJuIHMgKyBwYXJ0c1twYXJhbXNMZW5dO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBvZiBmdW5jdGlvbnMgdGhhdCBjb252ZXJ0IGEgbnVtYmVyIHRvIGEgc3RyaW5nICovXHJcbnR5cGUgQ29udmVydE51bWJlckZ1bmNUeXBlID0gKG46IG51bWJlcikgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYSBzaW5nbGUgbnVtZXJpYyB2YWx1ZSB0byBhIENTUyBzdHJpbmcgb3B0aW9uYWxseSBhcHBlbmRpbmcgdW5pdHMgdGhhdCBjYW4gYmUgZGlmZmVyZW50XHJcbiAqIGZvciBpbnRlZ2VyIGFuZCBmbG9hdGluZyBwb2ludCBudW1iZXJzLlxyXG4gKiBAcGFyYW0gbiBOdW1iZXIgdG8gY29udmVydCB0byBzdHJpbmcgcmVwcmVzZW50YXRpb24uXHJcbiAqIEBwYXJhbSBpbnRVbml0IFVuaXRzIHRvIGFwcGVuZCBpZiB0aGUgbnVtYmVyIGlzIGludGVnZXIuXHJcbiAqIEBwYXJhbSBmbG9hdFVuaXQgVW5pdHMgdG8gYXBwZW5kIGlmIHRoZSBudW1iZXIgaXMgZmxvYXRpbmcgcG9pbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBudW1iZXJUb1N0cmluZyggbjogbnVtYmVyLCBpbnRVbml0OiBzdHJpbmcgPSBcIlwiLCBmbG9hdFVpbnQ6IHN0cmluZyA9IFwiXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIobikgPyAgbiArIGludFVuaXQgOiBuICsgZmxvYXRVaW50O1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGltZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBOdW1iZXIgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlLlxyXG4gKiBAcGFyYW0gY29udmVydEZ1bmMgRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhIG51bWJlciB0byBhIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIG51bWJlckJhc2VUb1N0cmluZzxUIGV4dGVuZHMgc3RyaW5nPiggdmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PixcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHsgZnJvbU51bWJlcjogY29udmVydEZ1bmN9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBDc3NOdW1iZXIgb3IgYXJyYXkgb2YgQ3NzTnVtYmVyIG9iamVjdHMgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgU2luZ2xlLSBvciBtdWx0aS1udW1iZXIgc3R5bGUgdmFsdWUuXHJcbiAqIEBwYXJhbSBjb252ZXJ0RnVuYyBGdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGEgbnVtYmVyIHRvIGEgc3RyaW5nLlxyXG4gKiBAcGFyYW0gc2VwYXJhdG9yIFN0cmluZyB0byB1c2UgdG8gc2VwYXJhdGUgbXVsdGlwbGUgdmFsdWVzLlxyXG4gKi9cclxuZnVuY3Rpb24gbXVsdGlTdHlsZVRvU3RyaW5nPFQgZXh0ZW5kcyBzdHJpbmc+KCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sXHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdmFsMnN0ciggdmFsLCB7XHJcbiAgICAgICAgZnJvbU51bWJlcjogY29udmVydEZ1bmMsXHJcbiAgICAgICAgYXJySXRlbUZ1bmM6IHYgPT4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2LCBjb252ZXJ0RnVuYyksXHJcbiAgICAgICAgYXJyU2VwOiBzZXBhcmF0b3JcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgbWF0aEZ1bmMgZnVuY3Rpb24gcmV0dXJucyBvbmUgb2YgdGhlIG1hdGhlbWF0aWMgQ1NTIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgb3IgbW9yZVxyXG4gKiBwYXJhbWV0ZXJzIHdob3NlIHR5cGUgaXMgZGVyaXZlZCBmcm9tIE51bWJlckJhc2U8VD4uXHJcbiAqL1xyXG5mdW5jdGlvbiBtYXRoRnVuYzxUIGV4dGVuZHMgc3RyaW5nPiggbmFtZTogc3RyaW5nLCBwYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10sXHJcbiAgICBjb252ZXJ0RnVuYz86IENvbnZlcnROdW1iZXJGdW5jVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gYCR7bmFtZX0oJHttdWx0aVN0eWxlVG9TdHJpbmcoIHBhcmFtcywgY29udmVydEZ1bmMsIFwiLFwiKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIGNhbGNGdW5jIGZ1bmN0aW9uIHJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgY2FsYygpIENTUyBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNhbGNGdW5jPFQgZXh0ZW5kcyBzdHJpbmc+KCBwYXJ0czogVGVtcGxhdGVTdHJpbmdzQXJyYXksIHBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSxcclxuICAgIGNvbnZlcnRGdW5jPzogQ29udmVydE51bWJlckZ1bmNUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBgY2FsYygke3RlbXBsYXRlU3RyaW5nVG9TdHJpbmcoIHBhcnRzLCBwYXJhbXMsICh2OiBhbnkpID0+IG51bWJlckJhc2VUb1N0cmluZyggdiwgY29udmVydEZ1bmMpKX0pYDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE51bW1iZXJCYXNlTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogbnVtZXJpYyBDU1MgdHlwZXMuIFdoZW4gYXJndW1lbnRzIGZvciB0aGVzZSBmdW5jdGlvbnMgYXJlIG9mIHRoZSBudW1iZXIgSmF2YVNjcmlwdCB0eXBlIHRoZXlcclxuICogYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzIGJ5IGNhbGxpbmcgYSBmdW5jdGlvbiBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLlxyXG4gKi9cclxuY2xhc3MgTnVtYmVyQmFzZU1hdGg8VCBleHRlbmRzIHN0cmluZz4gaW1wbGVtZW50cyBJTnVtYmVyQmFzZU1hdGg8VD5cclxue1xyXG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBjb252ZXJ0RnVuYzogQ29udmVydE51bWJlckZ1bmNUeXBlKVxyXG4gICAge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBudW1iZXJUb1N0cmluZyA9IChuOiBudW1iZXIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0RnVuYyggbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0eWxlVG9TdHJpbmcgPSAodmFsOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+Pik6IHN0cmluZyA9PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG11bHRpU3R5bGVUb1N0cmluZyA9ICh2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmcgPT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIHRoaXMuY29udmVydEZ1bmMsIHNlcGFyYXRvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1pbiggLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBtYXRoRnVuYyggXCJtaW5cIiwgcGFyYW1zLCB0aGlzLmNvbnZlcnRGdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWF4KCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcIm1heFwiLCBwYXJhbXMsIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGFtcCggbWluOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PiwgcHJlZjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIG1heDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IG1hdGhGdW5jKCBcImNsYW1wXCIsIFttaW4sIHByZWYsIG1heF0sIHRoaXMuY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYWxjKCBmb3JtdWxhUGFydHM6IFRlbXBsYXRlU3RyaW5nc0FycmF5LCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbGNGdW5jKCBmb3JtdWxhUGFydHMsIHBhcmFtcywgdGhpcy5jb252ZXJ0RnVuYyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyTWF0aENsYXNzIGludGVyZmFjZSByZXByZXNlbnRzIGEgXCJzdGF0aWNcIiBzaWRlIG9mIGNsYXNzZXMgZGVyaXZlZCBmcm9tIHRoZVxyXG4gKiBOdW1iZXJNYXRoIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyQmFzZU1hdGhDbGFzczxUIGV4dGVuZHMgc3RyaW5nPlxyXG57XHJcbiAgICBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICAgIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4pOiBzdHJpbmc7XHJcblxyXG4gICAgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPE11bHRpTnVtYmVyQmFzZTxUPj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICAgIG5ldygpOiBJTnVtYmVyQmFzZU1hdGg8VD47XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVbml0bGVzcyBudW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc051bWJlck1hdGggY2xhc3MgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIDxudW1iZXI+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NOdW1iZXJNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8TnVtYmVyVHlwZT5cclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG4udG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NOdW1iZXI+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc051bWJlck1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlOdW1iZXI+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NOdW1iZXJNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVGhlIENzc1BlcmNlbnRNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8cGVyY2VudD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc1BlcmNlbnRNYXRoIGV4dGVuZHMgTnVtYmVyQmFzZU1hdGg8UGVyY2VudFR5cGU+IGltcGxlbWVudHMgSUNzc1BlcmNlbnRNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIChOdW1iZXIuaXNJbnRlZ2VyKG4pID8gbiA6IE1hdGgucm91bmQobiAqIDEwMCkpICsgXCIlXCI7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzUGVyY2VudD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbDogRXh0ZW5kZWQ8Q3NzTXVsdGlQZXJjZW50Piwgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBtdWx0aVN0eWxlVG9TdHJpbmcoIHZhbCwgQ3NzUGVyY2VudE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc1BlcmNlbnRNYXRoLmNvbnZlcnRGdW5jKSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIHRvIHN0cmluZyB1c2luZyB0aGUgZm9sbG93aW5nIHJ1bGVzOlxyXG4gKiAtIGlmIHRoZSBudW1iZXIgaXMgYmV0d2VlbiAtMSBhbmQgMSAobm9uIGluY2x1c2l2ZSksIG11bHRpcGxpZXMgdGhlIG51bWJlciBhbmQgYXBwZW5kcyBcIiVcIlxyXG4gKiAtIG90aGVyd2lzZSwgY29udmVydHMgdGhlIG51bWJlciB0byBzdHJpbmcgd2l0aG91dCBhcHBlbmRpbmcgYW55IHV0aW50cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0bGVzc09yUGVyY2VudFRvU3RyaW5nKCBuOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPj0gMSB8fCBuIDw9IC0xID8gbi50b1N0cmluZygpIDogTWF0aC5yb3VuZChuICogMTAwKSArIFwiJVwiO1xyXG59XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIExlbmd0aFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzTGVuZ3RoTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPGxlbmd0aD4gQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENzc0xlbmd0aE1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxMZW5ndGhUeXBlPiBpbXBsZW1lbnRzIElDc3NMZW5ndGhNYXRoXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgY29udmVydEZ1bmMoIG46IG51bWJlcik6IHN0cmluZyB7IHJldHVybiBudW1iZXJUb1N0cmluZyggbiwgXCJweFwiLCBcImVtXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzTGVuZ3RoTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUxlbmd0aD4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpIH1cclxuXHJcbiAgICBwdWJsaWMgbWlubWF4KCBtaW46IEV4dGVuZGVkPENzc0xlbmd0aD4sIG1heDogRXh0ZW5kZWQ8Q3NzTGVuZ3RoPik6IElHZW5lcmljUHJveHk8TGVuZ3RoVHlwZT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4gbWF0aEZ1bmMoIFwibWlubWF4XCIsIFttaW4sIG1heF0sIENzc0xlbmd0aE1hdGguY29udmVydEZ1bmMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBBbmdsZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3NzQW5nbGVNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8YW5nbGU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NBbmdsZU1hdGggZXh0ZW5kcyBOdW1iZXJCYXNlTWF0aDxBbmdsZVR5cGU+IGltcGxlbWVudHMgSUNzc0FuZ2xlTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZGVnXCIsIFwidHVyblwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NBbmdsZT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzQW5nbGVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpQW5nbGU+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NBbmdsZU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0FuZ2xlTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaW1lXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NUaW1lTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHRpbWU+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NUaW1lTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPFRpbWVUeXBlPiBpbXBsZW1lbnRzIElDc3NUaW1lTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwibXNcIiwgXCJzXCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc1RpbWU+KTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbnVtYmVyQmFzZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc011bHRpVGltZT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc1RpbWVNYXRoLmNvbnZlcnRGdW5jLCBzZXBhcmF0b3IpOyB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCBDc3NUaW1lTWF0aC5jb252ZXJ0RnVuYykgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBSZXNvbHV0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NSZXNvbHV0aW9uTWF0aCBjbGFzcyBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogPHJlc29sdXRpb24+IENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDc3NSZXNvbHV0aW9uTWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPFJlc29sdXRpb25UeXBlPiBpbXBsZW1lbnRzIElDc3NSZXNvbHV0aW9uTWF0aFxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnRGdW5jKCBuOiBudW1iZXIpOiBzdHJpbmcgeyByZXR1cm4gbnVtYmVyVG9TdHJpbmcoIG4sIFwiZHBpXCIsIFwieFwiKTsgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NSZXNvbHV0aW9uPik6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG51bWJlckJhc2VUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aVJlc29sdXRpb24+LCBzZXBhcmF0b3I6IHN0cmluZyk6IHN0cmluZ1xyXG4gICAgICAgIHsgcmV0dXJuIG11bHRpU3R5bGVUb1N0cmluZyggdmFsLCBDc3NSZXNvbHV0aW9uTWF0aC5jb252ZXJ0RnVuYywgc2VwYXJhdG9yKTsgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlciggQ3NzUmVzb2x1dGlvbk1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRnJlcXVlbmN5XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDc3NGcmVxdWVuY3lNYXRoIGNsYXNzIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiA8ZnJlcXVlbmNlPiBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3NzRnJlcXVlbmN5TWF0aCBleHRlbmRzIE51bWJlckJhc2VNYXRoPEZyZXF1ZW5jeVR5cGU+IGltcGxlbWVudHMgSUNzc0ZyZXF1ZW5jeU1hdGhcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXJ0RnVuYyggbjogbnVtYmVyKTogc3RyaW5nIHsgcmV0dXJuIG51bWJlclRvU3RyaW5nKCBuLCBcIkh6XCIsIFwia0h6XCIpOyB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzdHlsZVRvU3RyaW5nKCB2YWw6IEV4dGVuZGVkPENzc0ZyZXF1ZW5jeT4pOiBzdHJpbmdcclxuICAgICAgICB7IHJldHVybiBudW1iZXJCYXNlVG9TdHJpbmcoIHZhbCwgQ3NzRnJlcXVlbmN5TWF0aC5jb252ZXJ0RnVuYyk7IH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG11bHRpU3R5bGVUb1N0cmluZyggdmFsOiBFeHRlbmRlZDxDc3NNdWx0aUZyZXF1ZW5jeT4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbiAgICAgICAgeyByZXR1cm4gbXVsdGlTdHlsZVRvU3RyaW5nKCB2YWwsIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMsIHNlcGFyYXRvcik7IH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoIENzc0ZyZXF1ZW5jeU1hdGguY29udmVydEZ1bmMpIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIHBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvczJzdHIoIHZhbDogRXh0ZW5kZWQ8Q3NzUG9zaXRpb24+KTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBmcm9tTnVsbDogdiA9PiBcIlwiLFxyXG4gICAgICAgIGZyb21OdW1iZXI6IENzc0xlbmd0aE1hdGguc3R5bGVUb1N0cmluZyxcclxuICAgICAgICBmcm9tQXJyYXk6IHYgPT4gQ3NzTGVuZ3RoTWF0aC5tdWx0aVN0eWxlVG9TdHJpbmcoIHYsIFwiIFwiKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBvczJzdHIoIHZhbDogRXh0ZW5kZWQ8TXVsdGlDc3NQb3NpdGlvbj4sIHNlcGFyYXRvcjogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB2YWwyc3RyKCB2YWwsIHtcclxuICAgICAgICBhcnJJdGVtRnVuYzogcG9zMnN0cixcclxuICAgICAgICBhcnJTZXA6IHNlcGFyYXRvclxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwi77u/LyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBiYXNpYyB0eXBlcyBhbmQgZnVuY3Rpb25zIHVzZWQgdG8gZGVmaW5lIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuICogXHJcbiAqIEFsbCBDU1MgcHJvcGVydGllcyBzaG91bGQgYWNjZXB0IHN0cmluZyBhcyB0aGUgdHlwZSBvZiB0aGVpciB2YWx1ZSBldmVuIGlmIG5vcm1hbGx5XHJcbiAqIHRoZXkgYWNjZXB0IG90aGVyIHR5cGVzIChlLmcgYSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIGFzIGBcInJlZFwiIHwgXCJncmVlblwiIHwgLi4uYCBmb3IgdGhlXHJcbiAqIGNvbG9yKSBwcm9wZXJ0eS4gVGhpcyBpcyBiZWNhdXNlIGluIGFkZGl0aW9uIHRvIHRoZWlyIG5vcm1hbCB2YWx1ZXMgYW55IHByb3BlcnR5XHJcbiAqIGNhbiB1c2UgY3VzdG9tIENTUyBwcm9wZXJ0eSBpbiB0aGUgZm9ybSBgdmFyKC0tcHJvcG5hbWUpYC4gSG93ZXZlciwgaWYgd2UgYWRkIHN0cmluZyB0eXBlXHJcbiAqIHRvIHRoZSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIChlLmcuIGBcInJlZFwiIHwgXCJncmVlblwiIHwgc3RyaW5nYCksIHRoaXMgdGhyb3dzIG9mZiB0aGVcclxuICogSW50ZWxsaXNlbnNlIGFuZCBpdCBkb2Vzbid0IHByb21wdCBkZXZlbG9wZXJzIGZvciB0aGUgcG9zc2libGUgdmFsdWVzLiBUaGUgSVZhbHVlUHJveHlcclxuICogY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBzdHJpbmcgYW5kIHRoaXMgc29sdmVzIHRoZSBJbnRlbGxpc2Vuc2UgaXNzdWUuXHJcbiAqIFxyXG4gKiBBbm90aGVyIGJlbmVmaXQgb2YgdXNpbmcgZnVuY3Rpb25zIGlzIHRoYXQgdGhleSBhcmVcclxuICogY29uc3RydWN0ZWQgYXQgb25lIHRpbWUgYnV0IHRoZSBzdHJpbmcgZ2VuZXJhdGlvbiBvY2N1cnMgYXQgYW5vdGhlciB0aW1lLiBUaGlzIGFsbG93c1xyXG4gKiB1c2luZyB0aGVzZSBvYmplY3RzIGluIHRoZSBzdHlsZSBkZWZpbml0aW9uIGNsYXNzZXMuIFRoZXkgY2FuIHJlZmVyZW5jZSBvYmplY3RzIGxpa2VcclxuICogSVZhclJ1bGUgdGhhdCBhcmUgbm90IGZ1bGx5IGluaXRpYWxpemVkIHlldC4gSG93ZXZlciwgd2hlbiB0aGUgc3R5bGVzIHNob3VsZCBiZSBpbnNlcnRlZFxyXG4gKiBpbnRvIERPTSB0aGUgaW5pdGlhbGl6YXRpb24gd2lsbCBoYXZlIGFscmVhZHkgb2NjdXJyZWQgYW5kIHRoZSBmdW5jdGlvbiB3aWxsXHJcbiAqIHJldHVybiBhIGNvcnJlY3Qgc3RyaW5nLlxyXG4gKiBcclxuICogTm90ZSB0aGF0IHRoZSBwcm94eSBmdW5jdGlvbnMgaGF2ZSBhIHBhcmFtZXRlciB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlbSBmcm9tXHJcbiAqIG90aGVyIHByb3h5IGZ1bmN0aW9ucy4gVGhpcyBpcyBiZWNhdXNlIHdlIHdhbnQgdG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkaWZmZXJlbnQgQ1NTIHR5cGVzLFxyXG4gKiBzbyB0aGF0IGEgZnVuY3Rpb24gdXNlZCBmb3Igb25lIENTUyB0eXBlIGNhbm5vdCBiZSB1c2VkIGZvciBhIGRpZmZlcmVudCBDU1MgdHlwZS4gRm9yXHJcbiAqIGV4YW1wbGUsIHRoZSBgY2FsYygpYCBmdW5jdGlvbiByZXR1cm5zIHRoZSBOdW1iZXJQcm94eSBmdW5jdGlvbiwgd2hpbGUgdGhlXHJcbiAqIGBncmFkaWVudC5saW5lYXIoKWAgZnVuY3Rpb24gcmV0dXJucyB0aGUgSW1hZ2VQcm94eSBmdW5jdGlvbi4gVGh1cyB5b3UgY2Fubm90IHVzZSB0aGVcclxuICogJ2NhbGMoKWAgZnVuY3Rpb24gZm9yIGltYWdlLWJhc2VkIENTUyBwcm9wZXJ0aWVzIGFuZCB2aWNlIHZlcnNhLlxyXG4gKi9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEJhc2ljIHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBTdHlsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYW55IENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEdsb2JhbF9TdHlsZVR5cGUgPSBcImluaGVyaXRcIiB8IFwiaW5pdGlhbFwiIHwgXCJ1bnNldFwiIHwgXCJyZXZlcnRcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR2VuZXJpY1Byb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGEgY2FsbGFibGUgaW50ZXJmYWNlIGltcGxlbWVudGVkIHVzaW5nIGZ1bmN0aW9ucyB0aGF0XHJcbiAqIGFjY2VwdCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgb2YgYSBnZW5lcmljIHR5cGUgYW5kIHJldHVybiBhIHN0cmluZy4gVGhpcyBpbnRlcmZhY2UgaXMgdXNlZCBhcyBhXHJcbiAqIGJhc2UgZm9yIHByb3h5IGludGVyZmFjZXMgZGVmaW5pbmcgdHlwZXMgYWNjZXB0YWJsZSBieSBjZXJ0YWluIHN0eWxlIHByb3BlcnRpZXMuIFRoZSB0eXBlXHJcbiAqIHBhcmFtZXRlciBoZWxwcyBkaWZmZXJlbnRpYXRlIHRoZXNlIGludGVyZmFjZXMgc28gdGhhdCBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gb25lXHJcbiAqIHR5cGUgb2Ygc3R5bGUgcHJvcGVydGllcyAoZS5nLiBcInRyYW5zZm9ybVwiKSBjYW5ub3QgYmUgYXNzaWduZWQgdG8gYW4gaW5jb21wYXRpYmxlIHN0eWxlIHByb3BlcnR5XHJcbiAqIChlLmcuIGNsaXAtcGF0aCkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHZW5lcmljUHJveHk8VCBleHRlbmRzIHN0cmluZz5cclxue1xyXG4gICAgKHA/OiBUKTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0cmluZ1Byb3h5IGludGVyZmFjZSByZXByZXNlbnRzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc3RyaW5nLiBUaGlzIGZ1bmN0aW9uIGlzIHBhcnRcclxuICogb2YgdHlwZSBkZWZpbml0aW9uIGZvciBhbGwgQ1NTIHByb3BlcnRpZXMgLSBldmVuIGZvciB0aG9zZSB0aGF0IGRvbid0IGhhdmUgYHN0cmluZ2AgYXMgcGFydCBvZlxyXG4gKiB0aGVpciB0eXBlLlxyXG4gKiBcclxuICogVGhpcyBmdW5jdGlvbiBpcyByZXR1cm5lZCBmcm9tIHRoZSBgcmF3KClgIGZ1bmN0aW9uLCB3aGljaCBhbGxvd3MgYnktcGFzc2luZyB0aGUgcHJvcGVydHlcclxuICogdHlwaW5nIHJ1bGVzIGFuZCBzcGVjaWZ5aW5nIGEgc3RyaW5nIGRpcmVjdGx5LiBUaGlzIG1pZ2h0IGJlIHVzZWZ1bCwgd2hlbiBhIHN0cmluZyB2YWx1ZSBpc1xyXG4gKiBvYnRhaW5lZCBmcm9tIHNvbWUgZXh0ZXJuYWwgY2FsY3VsYXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3RyaW5nUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwic3RyaW5nXCI+IHt9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbVZhciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgb2JqZWN0IHdpdGggdmFsdWVzIG9mIHRoZSBnaXZlbiB0eXBlLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBuZWVkZWQgYmVjYXVzZSBldmVyeSBzdHlsZSBwcm9wZXJ0eSBjYW4gYWNjZXB0IHZhbHVlIGluIHRoZSBmb3JtIG9mIHRoZSB2YXIoKVxyXG4gKiBDU1MgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYXI8VCA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIFNldHMgbmV3IHZhbHVlIG9mIHRoaXMgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIGZvciB0aGUgQ1NTIHByb3BlcnR5LlxyXG5cdCAqIEBwYXJhbSBpbXBvcnRhbnQgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gc2V0IHRoZSBcIiFpbXBvcnRhbnRcIiBmbGFnIG9uIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHQgKiBAcGFyYW0gc2NoZWR1bGVyVHlwZSBJRCBvZiBhIHJlZ2lzdGVyZWQgc2NoZWR1bGVyIHR5cGUgdGhhdCBpcyB1c2VkIHRvIHdyaXRlIHRoZSBwcm9wZXJ0eVxyXG5cdCAqIHZhbHVlIHRvIHRoZSBET00uIElmIHVuZGVmaW5lZCwgdGhlIGN1cnJlbnQgZGVmYXVsdCBzY2hlZHVsZXIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqL1xyXG5cdHNldFZhbHVlKCB2YWx1ZTogVCwgaW1wb3J0YW50PzogYm9vbGVhbiwgc2NoZWR1bGVyVHlwZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBleHRlbmRzIHRoZSBnaXZlbiB0eXBlIHdpdGggdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogLSBJQ3VzdG9tVmFyIGludGVyZmFjZSB0aGF0IGFsbG93cyB1c2luZyBhIENTUyBjdXN0b20gcHJvcGVydHkuXHJcbiAqIC0gSVN0cmluZ1Byb3h5IGludGVyZmFjZSB0aGF0IGFsbG93cyBzcGVjaWZ5aW5nIHJhdyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZDxUPiA9IFQgfCBJQ3VzdG9tVmFyPFQ+IHwgSVN0cmluZ1Byb3h5IHwgdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGVuY2Fwc3VsYXRlcyB0aGUgdHlwZSBvZiBwcm9wZXJ0eSBpbiBhbiBvYmplY3Qgd2l0aCBhIHNpbmdsZSBcIiFcIiBwcm9wZXJ0eS4gVGhpc1xyXG4gKiB0eXBlIGlzIHVzZWQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcHJvcGVydHkgdmFsdWUgbXVzdCBiZSBmbGFnZ2VkIGFzIFwiIWltcG9ydGFudFwiLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgSW1wb3J0YW50UHJvcDxUPiA9IHsgXCIhXCI6IEV4dGVuZGVkPFQ+IH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgRXh0ZW5kZWRQcm9wIGV4dGVuZHMgdGhlIGdpdmVuIGdlbmVyaWMgdHlwZSB3aXRoIHRoZSBmb2xsb3dpbmcgZWxlbWVudHM6XHJcbiAqIC0gT2JqZWN0IHdpdGggYSBzaW5nbGUgcHJvcGVydHkgXCIhXCIsIHdoaWNoIGlzIHVzZWQgdG8gbWFyayBhIHByb3BlcnR5IGFzIFwiIWltcG9ydGFudFwiLlxyXG4gKiAtIEdsb2JhbF9TdHlsZVR5cGUsIHdoaWNoIGFsbG93cyBhbnkgcHJvcGVydHkgdG8gYmUgYXNzaWduZWQgdGhlIGdsb2JhbCB2YWx1ZXMgc3VjaCBhc1xyXG4gKiAgIFwiaW5pdGlhbFwiLCBcImluaGVyaXRcIiwgXCJ1bnNldFwiIGFuZCBcInJldmVydFwiLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRQcm9wPFQ+ID0gRXh0ZW5kZWQ8VD4gfCBJbXBvcnRhbnRQcm9wPFQ+IHwgR2xvYmFsX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFV0aWxpdHkgdHlwZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIHBhaXItbGlrZSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgdG8gMiB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JQYWlyPFQ+ID0gVCB8IFtFeHRlbmRlZDxUPiwgRXh0ZW5kZWQ8VD5dO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJveC1saWtlIHByb3BlcnR5IHRoYXQgY2FuIGhhdmUgMSB0byA0IHZhbHVlcyBvZiB0aGUgZ2l2ZW4gdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBPbmVPckJveDxUPiA9IFQgfCBbRXh0ZW5kZWQ8VD4sIEV4dGVuZGVkPFQ+LCBFeHRlbmRlZDxUPj8sIEV4dGVuZGVkPFQ+P107XHJcblxyXG4vKiogVHlwZSBmb3IgYSBwcm9wZXJ0eSB0aGF0IGNhbiBoYXZlIDEgb3IgbW9yZSB2YWx1ZXMgb2YgdGhlIGdpdmVuIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgT25lT3JNYW55PFQ+ID0gVCB8IEV4dGVuZGVkPFQ+W107XHJcblxyXG4vKipcclxuICogVGhlIElRdW90ZWRQcm94eSBmdW5jdGlvbiByZXByZXNlbnRzIGEgc3RyaW5nIGluIHF1b3RhdGlvbiBtYXJrc1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUXVvdGVkUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwicXVvdGVkXCI+IHt9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1lcmljIHR5cGVzIGFzIGEgYmFzaXMgZm9yIGhhbmRsaW5nIENTUyA8bnVtYmVyPiwgPGxlbmd0aD4sIDxhbmdsZT4sIGV0Yy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIG51bWVyaWMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IG51bWJlciB8IHN0cmluZyB8IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBudW1lcmljIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpTnVtYmVyQmFzZTxUIGV4dGVuZHMgc3RyaW5nPiA9IE9uZU9yTWFueTxOdW1iZXJCYXNlPFQ+PjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTnVtYmVyQmFzZU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBudW1lcmljIENTUyB0eXBlcy4gV2hlbiBhcmd1bWVudHMgZm9yIHRoZXNlIGZ1bmN0aW9ucyBhcmUgb2YgdGhlIG51bWJlciB0eXBlLCB0aGV5IGFyZSBjb252ZXJ0ZWRcclxuICogdG8gc3RyaW5ncyB1c2luZyB0aGUgYG51bWJlclRvU3RyaW5nYCBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOdW1iZXJCYXNlTWF0aDxUIGV4dGVuZHMgc3RyaW5nPlxyXG57XHJcbiAgICAvKiogQ3JlYXRlcyBwcm9wZXJ0eSB2YWx1ZSB1c2luZyB0aGUgQ1NTIG1pbigpIGZ1bmN0aW9uLiAqL1xyXG4gICAgbWluKCAuLi5wYXJhbXM6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+W10pOiBJR2VuZXJpY1Byb3h5PFQ+O1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHByb3BlcnR5IHZhbHVlIHVzaW5nIHRoZSBDU1MgbWF4KCkgZnVuY3Rpb24uICovXHJcbiAgICBtYXgoIC4uLnBhcmFtczogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj5bXSk6IElHZW5lcmljUHJveHk8VD47XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjbGFtcCgpIGZ1bmN0aW9uLiAqL1xyXG4gICAgY2xhbXAoIG1pbjogRXh0ZW5kZWQ8TnVtYmVyQmFzZTxUPj4sIHByZWY6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+LCBtYXg6IEV4dGVuZGVkPE51bWJlckJhc2U8VD4+KTogSUdlbmVyaWNQcm94eTxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBjYWxjKCkgZnVuY3Rpb24uIFRoaXMgbWV0aG9kIGlzIGEgdGFnIGZ1bmN0aW9uIGFuZCBtdXN0XHJcbiAgICAgKiBiZSBpbnZva2VkIHdpdGggYSB0ZW1wbGF0ZSBzdHJpbmcgd2l0aG91dCBwYXJlbnRoZXNlcy5cclxuICAgICAqL1xyXG4gICAgY2FsYyggZm9ybXVsYVBhcnRzOiBUZW1wbGF0ZVN0cmluZ3NBcnJheSwgLi4ucGFyYW1zOiBFeHRlbmRlZDxOdW1iZXJCYXNlPFQ+PltdKTogSUdlbmVyaWNQcm94eTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8bnVtYmVyPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTnVtYmVyIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIE51bWJlclR5cGUgPSBcIk51bWJlclwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxudW1iZXI+YCBDU1MgdHlwZSAtIG5vdGUgdGhhdCBpdCBleGx1ZGVzIGBzdHJpbmdgICovXHJcbmV4cG9ydCB0eXBlIENzc051bWJlciA9IEV4Y2x1ZGU8TnVtYmVyQmFzZTxOdW1iZXJUeXBlPixzdHJpbmc+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8bnVtYmVyPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlOdW1iZXIgPSBPbmVPck1hbnk8Q3NzTnVtYmVyPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDxwZXJjZW50PmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTnVtYmVyUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PE51bWJlclR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzTnVtYmVyTWF0aCBpbnRlcmZhY2UgY29udGFpbnMgbWV0aG9kcyB0aGF0IGltcGxlbWVudCBDU1MgbWF0aGVtYXRpYyBmdW5jdGlvbnMgb24gdGhlXHJcbiAqIGA8bnVtYmVyPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzTnVtYmVyTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxOdW1iZXJUeXBlPiB7fVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBwZXJjZW50ICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRVbml0cyA9IFwiJVwiO1xyXG5cclxuLyoqIFVuaXF1ZSBzdHJpbmcgbGl0ZXJhbCB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhlIFBlcmNlbnQgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgUGVyY2VudFR5cGUgPSBcIlBlcmNlbnRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc1BlcmNlbnQgPSBOdW1iZXJCYXNlPFBlcmNlbnRUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHBlcmNlbnQ+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aVBlcmNlbnQgPSBPbmVPck1hbnk8Q3NzUGVyY2VudD47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8cGVyY2VudD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBlcmNlbnRQcm94eSBleHRlbmRzIElHZW5lcmljUHJveHk8UGVyY2VudFR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzUGVyY2VudE1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPHBlcmNlbnQ+YCBDU1MgdHlwZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDc3NQZXJjZW50TWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxQZXJjZW50VHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBDU1MgYDxsZW5ndGg+YCB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBVbml0cyBvZiBsZW5ndGggKi9cclxuZXhwb3J0IHR5cGUgTGVuZ3RoVW5pdHMgPSBcIlFcIiB8IFwiY2hcIiB8IFwiY21cIiB8IFwiZW1cIiB8IFwiZXhcIiB8IFwiaWNcIiB8IFwiaW5cIiB8IFwibGhcIiB8IFwibW1cIiB8IFwicGNcIiB8XHJcbiAgICAgICAgICAgICAgICBcInB0XCIgfCBcInB4XCIgfCBcInZiXCIgfCBcInZoXCIgfCBcInZpXCIgfCBcInZ3XCIgfCBcInJlbVwiIHwgXCJybGhcIiB8IFwidm1heFwiIHwgXCJ2bWluXCIgfCBcImZyXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgTGVuZ3RoIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFR5cGUgPSBcIkxlbmd0aFwiIHwgUGVyY2VudFR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aCA9IE51bWJlckJhc2U8TGVuZ3RoVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUxlbmd0aCA9IE9uZU9yTWFueTxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFR5cGUgZm9yIDEtdG8tMi1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0xlbmd0aFBhaXIgPSBPbmVPclBhaXI8Q3NzTGVuZ3RoPjtcclxuXHJcbi8qKiBUeXBlIGZvciAxLXRvLTQtcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxsZW5ndGg+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NMZW5ndGhCb3ggPSBPbmVPckJveDxDc3NMZW5ndGg+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGxlbmd0aD5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxlbmd0aFByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxMZW5ndGhUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0xlbmd0aE1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGxlbmd0aD5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0xlbmd0aE1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8TGVuZ3RoVHlwZT5cclxue1xyXG4gICAgLyoqIENyZWF0ZXMgcHJvcGVydHkgdmFsdWUgdXNpbmcgdGhlIENTUyBtaW5tYXgoKSBmdW5jdGlvbi4gKi9cclxuICAgIG1pbm1heCggbWluOiBFeHRlbmRlZDxDc3NMZW5ndGg+LCBtYXg6IEV4dGVuZGVkPENzc0xlbmd0aD4pOiBJTGVuZ3RoUHJveHk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENTUyBgPGFuZ2xlPmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgYW5nbGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0cyA9IFwiZGVnXCIgfCBcInJhZFwiIHwgXCJncmFkXCIgfCBcInR1cm5cIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBBbmdsZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZVR5cGUgPSBcIkFuZ2xlXCIgfCBQZXJjZW50VHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NBbmdsZSA9IE51bWJlckJhc2U8QW5nbGVUeXBlPjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGFuZ2xlPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlBbmdsZSA9IE9uZU9yTWFueTxDc3NBbmdsZT47XHJcblxyXG4vKiogUHJveHkgaW50ZXJmYWNlIHRoYXQgcmVwcmVzZW50cyB2YWx1ZXMgb2YgdGhlIGA8YW5nbGU+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmdsZVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxBbmdsZVR5cGU+IHt9O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3NzQW5nbGVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxhbmdsZT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0FuZ2xlTWF0aCBleHRlbmRzIElOdW1iZXJCYXNlTWF0aDxBbmdsZVR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8dGltZT5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHRpbWUgKi9cclxuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0gXCJzXCIgfCBcIm1zXCI7XHJcblxyXG4vKiogVW5pcXVlIHN0cmluZyBsaXRlcmFsIHRoYXQgZGlzdGluZ3Vpc2hlcyB0aGUgVGltZSB0eXBlIGZyb20gb3RoZXIgbnVtZXJpYyB0eXBlcyAqL1xyXG5leHBvcnQgdHlwZSBUaW1lVHlwZSA9IFwiVGltZVwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzVGltZSA9IE51bWJlckJhc2U8VGltZVR5cGU+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc3R5bGUgcHJvcGVydHkgb2YgdGhlIGA8dGltZT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc011bHRpVGltZSA9IE9uZU9yTWFueTxDc3NUaW1lPjtcclxuXHJcbi8qKiBQcm94eSBpbnRlcmZhY2UgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBvZiB0aGUgYDx0aW1lPmAgQ1NTIHR5cGUqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUaW1lUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFRpbWVUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1RpbWVNYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDx0aW1lPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzVGltZU1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8VGltZVR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8cmVzb2x1dGlvbj5gIHR5cGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHJlc29sdXRpb24gKi9cclxuZXhwb3J0IHR5cGUgUmVzb2x1dGlvblVuaXRzID0gXCJkcGlcIiB8IFwiZHBjbVwiIHwgXCJkcHB4XCIgfCBcInhcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBSZXNvbHV0aW9uIHR5cGUgZnJvbSBvdGhlciBudW1lcmljIHR5cGVzICovXHJcbmV4cG9ydCB0eXBlIFJlc29sdXRpb25UeXBlID0gXCJSZXNvbHV0aW9uXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NSZXNvbHV0aW9uID0gTnVtYmVyQmFzZTxSZXNvbHV0aW9uVHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzTXVsdGlSZXNvbHV0aW9uID0gT25lT3JNYW55PENzc1Jlc29sdXRpb24+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPHJlc29sdXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvbHV0aW9uUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFJlc29sdXRpb25UeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc1Jlc29sdXRpb25NYXRoIGludGVyZmFjZSBjb250YWlucyBtZXRob2RzIHRoYXQgaW1wbGVtZW50IENTUyBtYXRoZW1hdGljIGZ1bmN0aW9ucyBvbiB0aGVcclxuICogYDxyZXNvbHV0aW9uPmAgQ1NTIHR5cGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3NzUmVzb2x1dGlvbk1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8UmVzb2x1dGlvblR5cGU+XHJcbntcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQ1NTIGA8ZnJlcXVlbmN5PmAgdHlwZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgZnJlcXVlbmN5ICovXHJcbmV4cG9ydCB0eXBlIEZyZXF1ZW5jeVVuaXRzID0gXCJIelwiIHwgXCJrSHpcIjtcclxuXHJcbi8qKiBVbmlxdWUgc3RyaW5nIGxpdGVyYWwgdGhhdCBkaXN0aW5ndWlzaGVzIHRoZSBGcmVxdWVuY3kgdHlwZSBmcm9tIG90aGVyIG51bWVyaWMgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgRnJlcXVlbmN5VHlwZSA9IFwiRnJlcXVlbmN5XCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIHN0eWxlIHByb3BlcnR5IG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCB0eXBlIENzc0ZyZXF1ZW5jeSA9IE51bWJlckJhc2U8RnJlcXVlbmN5VHlwZT47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzdHlsZSBwcm9wZXJ0eSBvZiB0aGUgYDxmcmVxdWVuY3k+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBDc3NNdWx0aUZyZXF1ZW5jeSA9IE9uZU9yTWFueTxDc3NGcmVxdWVuY3k+O1xyXG5cclxuLyoqIFByb3h5IGludGVyZmFjZSB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIG9mIHRoZSBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZyZXF1ZW5jeVByb3h5IGV4dGVuZHMgSUdlbmVyaWNQcm94eTxGcmVxdWVuY3lUeXBlPiB7fTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNzc0ZyZXF1ZW5jeU1hdGggaW50ZXJmYWNlIGNvbnRhaW5zIG1ldGhvZHMgdGhhdCBpbXBsZW1lbnQgQ1NTIG1hdGhlbWF0aWMgZnVuY3Rpb25zIG9uIHRoZVxyXG4gKiBgPGZyZXF1ZW5jeT5gIENTUyB0eXBlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNzc0ZyZXF1ZW5jeU1hdGggZXh0ZW5kcyBJTnVtYmVyQmFzZU1hdGg8RnJlcXVlbmN5VHlwZT5cclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHJlcHJlc2VudGluZyBhIHBvaW50IHVzaW5nIHggYW5kIHkgY29vcmRpbmF0ZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDc3NQb2ludCA9IFtFeHRlbmRlZDxDc3NMZW5ndGg+LCBFeHRlbmRlZDxDc3NMZW5ndGg+XTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgaG9yaXpvbnRhbCBwb3NpdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCA9IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIjtcclxuXHJcbi8qKiBUeXBlIGRlc2NyaWJpbmcgYSBzaW1wbGUgMSBvciB0d28gdmFsdWVzIGA8cG9zaXRpb24+YCBDU1MgdHlwZSAqL1xyXG5leHBvcnQgdHlwZSBTaW1wbGVDc3NQb3NpdGlvbiA9IEhvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD4gfFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQgfCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCB8IEV4dGVuZGVkPENzc0xlbmd0aD5dO1xyXG5cclxuLyoqIFR5cGUgZGVzY3JpYmluZyB0aGUgZnVsbCB1cCB0byA0IHZhbHVlcyBgPHBvc2l0aW9uPmAgQ1NTIHR5cGUgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUG9zaXRpb24gPSBTaW1wbGVDc3NQb3NpdGlvbiB8IFxyXG4gICAgW0hvcml6b250YWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD4sIFZlcnRpY2FsUG9zaXRpb25LZXl3b3JkXSB8XHJcbiAgICBbSG9yaXpvbnRhbFBvc2l0aW9uS2V5d29yZCwgVmVydGljYWxQb3NpdGlvbktleXdvcmQsIEV4dGVuZGVkPENzc0xlbmd0aD5dIHxcclxuICAgIFtIb3Jpem9udGFsUG9zaXRpb25LZXl3b3JkLCBFeHRlbmRlZDxDc3NMZW5ndGg+LCBWZXJ0aWNhbFBvc2l0aW9uS2V5d29yZCwgRXh0ZW5kZWQ8Q3NzTGVuZ3RoPl07XHJcblxyXG4vKiogVHlwZSBkZXNjcmliaW5nIG11bHRpcGxlIGA8cG9zaXRpb24+YCBDU1MgdHlwZXMgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlDc3NQb3NpdGlvbiA9IEV4dGVuZGVkPENzc1Bvc2l0aW9uPltdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmFkaXVzXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIGNvcm5lciByYWRpdXMgKi9cclxuZXhwb3J0IHR5cGUgQ3NzUmFkaXVzID0gT25lT3JQYWlyPENzc0xlbmd0aD47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVUkxzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVVybFByb3h5IGZ1bmN0aW9uIHJlcHJlc2VudHMgYW4gaW52b2NhdGlvbiBvZiB0aGUgQ1NTIHVybCgpIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVXJsUHJveHkgZXh0ZW5kcyBJR2VuZXJpY1Byb3h5PFwidXJsXCI+IHt9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gYXR0cigpIGZ1bmN0aW9uIHN1cHBvcnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVHlwZUtleXdvcmQgPSBcInN0cmluZ1wiIHwgXCJjb2xvclwiIHwgXCJ1cmxcIiB8IFwiaW50ZWdlclwiIHwgXCJudW1iZXJcIiB8IFwibGVuZ3RoXCIgfCBcImFuZ2xlXCIgfCBcInRpbWVcIiB8IFwiZnJlcXVlbmN5XCI7XHJcblxyXG5leHBvcnQgdHlwZSBBdHRyVW5pdEtleXdvcmQgPSBQZXJjZW50VW5pdHMgfCBMZW5ndGhVbml0cyB8IFRpbWVVbml0cyB8IEFuZ2xlVW5pdHMgfCBSZXNvbHV0aW9uVW5pdHMgfCBGcmVxdWVuY3lVbml0cztcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFdlYiBOYW1lc3BhY2VzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUaGUgV2ViTmFtZXNwYWNlcyBjbGFzcyBjb250YWlucyBpZGVudGlmaWVycyBmb3IgdGhlIGtub3duIFdlYi1yZWxhdGVkIG5hbWVzcGFjZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2ViTmFtZXNwYWNlc1xyXG57XHJcblx0c3RhdGljIHJlYWRvbmx5IEhUTUwgPSBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgU1ZHID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTGluayA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUwgPSBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiO1xyXG5cdHN0YXRpYyByZWFkb25seSBYTUxOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIjtcclxuXHRzdGF0aWMgcmVhZG9ubHkgTWF0aE1MID0gXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==