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

/***/ "./src/helpers/SelectorFuncs.ts":
/*!**************************************!*\
  !*** ./src/helpers/SelectorFuncs.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TagRule_1 = __webpack_require__(/*! ../rules/TagRule */ "./src/rules/TagRule.ts");
const ClassRule_1 = __webpack_require__(/*! ../rules/ClassRule */ "./src/rules/ClassRule.ts");
const IDRule_1 = __webpack_require__(/*! ../rules/IDRule */ "./src/rules/IDRule.ts");
const UtilTypes_1 = __webpack_require__(/*! ../styles/UtilTypes */ "./src/styles/UtilTypes.ts");
/**
 * The selector class encapsulates all the functionality for building a CSS selector.
 */
class Selector {
    constructor(initData) {
        if (Array.isArray(initData))
            this.buf = initData.slice();
        else
            this.buf = [initData];
    }
    // Selector combinators
    get and() { this.buf.push(", " /* And */); return this; }
    get child() { this.buf.push(" > " /* Child */); return this; }
    get descendand() { this.buf.push(" " /* Descendand */); return this; }
    get sibling() { this.buf.push(" ~ " /* Sibling */); return this; }
    get adjacent() { this.buf.push(", " /* And */); return this; }
    raw(raw) {
        this.buf.push(raw);
        return this;
    }
    all(ns) {
        this.buf.push(ns == null ? "*" : `${ns}|*`);
        return this;
    }
    tag(tag) {
        this.buf.push(tag);
        return this;
    }
    class(cls) {
        this.buf.push(typeof cls === "string" && !cls.startsWith(".") ? "." + cls : cls);
        return this;
    }
    id(id) {
        this.buf.push(typeof id === "string" && !id.startsWith("#") ? "#" + id : id);
        return this;
    }
    attr(attrName, op, value, caseInsensitive, caseSensitive) {
        this.buf.push(attr(attrName, op, value, caseInsensitive, caseSensitive));
        return this;
    }
    // pseudo classes
    get active() { this.buf.push(":active"); return this; }
    get anyLink() { this.buf.push(":any-link"); return this; }
    get blank() { this.buf.push(":blank"); return this; }
    get checked() { this.buf.push(":checked"); return this; }
    get default() { this.buf.push(":default"); return this; }
    get defined() { this.buf.push(":defined"); return this; }
    dir(s) { this.buf.push(":dir(${s})"); return this; }
    get disabled() { this.buf.push(":disabled"); return this; }
    get empty() { this.buf.push(":empty"); return this; }
    get enabled() { this.buf.push(":enabled"); return this; }
    get first() { this.buf.push(":first"); return this; }
    get firstChild() { this.buf.push(":first-child"); return this; }
    get firstOfType() { this.buf.push(":first-of-type"); return this; }
    get fullscreen() { this.buf.push(":fullscreen"); return this; }
    get focus() { this.buf.push(":focus"); return this; }
    get focusVisible() { this.buf.push(":focus-visible"); return this; }
    get focusWithin() { this.buf.push(":focus-within"); return this; }
    has(s) { this.buf.push(`:has(${s})`); return this; }
    host(s) { this.buf.push(`:host(${s})`); return this; }
    hostContext(s) { this.buf.push(`:host-context(${s})`); return this; }
    get hover() { this.buf.push(":hover"); return this; }
    get indeterminate() { this.buf.push(":indeterminate"); return this; }
    get inRange() { this.buf.push(":in-range"); return this; }
    get invalid() { this.buf.push(":invalid"); return this; }
    is(s) { this.buf.push(`:is(${s})`); return this; }
    lang(s) { this.buf.push(`:lang(${s})`); return this; }
    get lastChild() { this.buf.push(":last-child"); return this; }
    get lastOfType() { this.buf.push(":last-of-type"); return this; }
    get left() { this.buf.push(":left"); return this; }
    get link() { this.buf.push(":link"); return this; }
    not(s) { this.buf.push(`:not(${s})`); return this; }
    nthChild(a, b) { this.buf.push(`:nth-child(${nth(a, b)})`); return this; }
    nthLastChild(a, b) { this.buf.push(`:nth-last-child(${nth(a, b)})`); return this; }
    nthLastOfType(a, b) { this.buf.push(`:nth-last-of-type(${nth(a, b)})`); return this; }
    nthOfType(a, b) { this.buf.push(`:nth-of-type(${nth(a, b)})`); return this; }
    get onlyChild() { this.buf.push(":only-child"); return this; }
    get onlyOfType() { this.buf.push(":only-of-type"); return this; }
    get optional() { this.buf.push(":optional"); return this; }
    get outOfRange() { this.buf.push(":out-of-range"); return this; }
    get placeholderShown() { this.buf.push(":placeholder-shown"); return this; }
    get readOnly() { this.buf.push(":read-only"); return this; }
    get readWrite() { this.buf.push(":read-write"); return this; }
    get required() { this.buf.push(":required"); return this; }
    get right() { this.buf.push(":right"); return this; }
    get root() { this.buf.push(":root"); return this; }
    get scope() { this.buf.push(":scope"); return this; }
    get target() { this.buf.push(":target"); return this; }
    get valid() { this.buf.push(":valid"); return this; }
    get visited() { this.buf.push(":visited"); return this; }
    where(s) { this.buf.push(`:where(${s})`); return this; }
    // pseudo elements
    get after() { this.buf.push("::after"); return this; }
    get backdrop() { this.buf.push("::backdrop"); return this; }
    get before() { this.buf.push("::before"); return this; }
    get cue() { this.buf.push("::cue"); return this; }
    get firstLetter() { this.buf.push("::first-letter"); return this; }
    get firstLine() { this.buf.push("::first-line"); return this; }
    get grammarError() { this.buf.push("::grammar-error"); return this; }
    get marker() { this.buf.push("::marker"); return this; }
    part(s) { this.buf.push(`::part(${s})`); return this; }
    get placeholder() { this.buf.push("::placeholder"); return this; }
    get selection() { this.buf.push("::selection"); return this; }
    slotted(s) { this.buf.push(`::slotted(${s})`); return this; }
    get spellingError() { this.buf.push("::spelling-error"); return this; }
    /**
     * Converts the accumulated selector tokens into full selector string.
     */
    toCssString() {
        return this.buf.map((token) => {
            if (token instanceof TagRule_1.TagRule)
                return token.tagName;
            else if (token instanceof ClassRule_1.ClassRule)
                return "." + token.className;
            else if (token instanceof IDRule_1.IDRule)
                return "#" + token.idName;
            else if (token instanceof UtilTypes_1.StringProxy)
                return token.toString();
            else if (token instanceof Selector)
                return token.toCssString();
            else
                return token;
        }).join("");
    }
}
exports.Selector = Selector;
/** Returns the "nth" notation */
function nth(a, b) {
    return b == null ? a.toString() : `${a}n${b >= 0 ? `+${b}` : `-${-b}`}`;
}
exports.nth = nth;
/** Returns the attribute selector token */
function attr(attrName, op, value, caseInsensitive, caseSensitive) {
    let opAndVal = op ? `${op}"${value}"` : "";
    let caseSign = caseInsensitive ? " i" : caseSensitive ? " s" : "";
    return `[${attrName}${opAndVal}${caseSign}]`;
}
exports.attr = attr;


/***/ }),

/***/ "./src/helpers/SelectorTypes.ts":
/*!**************************************!*\
  !*** ./src/helpers/SelectorTypes.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilTypes_1 = __webpack_require__(/*! ../styles/UtilTypes */ "./src/styles/UtilTypes.ts");
const SelectorFuncs_1 = __webpack_require__(/*! ./SelectorFuncs */ "./src/helpers/SelectorFuncs.ts");
/**
 * Helper class for creating elements of a selector (selector tokens).
 */
class SelectorHelper {
    static raw(raw) { return new UtilTypes_1.StringProxy(raw); }
    static all(ns) { return ns == null ? "*" : `${ns}|*`; }
    static attr(attrName, op, value, caseInsensitive, caseSensitive) { return new UtilTypes_1.StringProxy(SelectorFuncs_1.attr(attrName, op, value, caseInsensitive, caseSensitive)); }
    static tag(s) { return new UtilTypes_1.StringProxy(s); }
    static rtl() { return new UtilTypes_1.StringProxy(":dir(rtl)"); }
    static ltr() { return new UtilTypes_1.StringProxy(":dir(ltr)"); }
    static has(s) { return new UtilTypes_1.StringProxy(`:has(${s})`); }
    static host(s) { return new UtilTypes_1.StringProxy(`:host(${s})`); }
    static hostContext(s) { return new UtilTypes_1.StringProxy(`:host-context(${s})`); }
    static is(s) { return new UtilTypes_1.StringProxy(`:is(${s})`); }
    static lang(s) { return new UtilTypes_1.StringProxy(`:lang(${s})`); }
    static not(s) { return new UtilTypes_1.StringProxy(`:not(${s})`); }
    static nthChild(a, b) { return new UtilTypes_1.StringProxy(`:nth-child(${SelectorFuncs_1.nth(a, b)})`); }
    static nthLastChild(a, b) { return new UtilTypes_1.StringProxy(`:nth-last-child(${SelectorFuncs_1.nth(a, b)})`); }
    static nthLastOfType(a, b) { return new UtilTypes_1.StringProxy(`:nth-last-of-type(${SelectorFuncs_1.nth(a, b)})`); }
    static nthOfType(a, b) { return new UtilTypes_1.StringProxy(`:nth-of-type(${SelectorFuncs_1.nth(a, b)})`); }
    static where(s) { return new UtilTypes_1.StringProxy(`:where(${s})`); }
    static part(s) { return new UtilTypes_1.StringProxy(`::part(${s})`); }
    static slotted(s) { return new UtilTypes_1.StringProxy(`::slotted(${s})`); }
}
exports.SelectorHelper = SelectorHelper;
/**
 * Creates an empty selector from which selector building process starts.
 */
function $selector() { return new SelectorFuncs_1.Selector(); }
exports.$selector = $selector;


/***/ }),

/***/ "./src/helpers/tsh.ts":
/*!****************************!*\
  !*** ./src/helpers/tsh.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilTypes_1 = __webpack_require__(/*! ../styles/UtilTypes */ "./src/styles/UtilTypes.ts");
const UtilFuncs = __webpack_require__(/*! ../styles/UtilFuncs */ "./src/styles/UtilFuncs.ts");
const ColorFuncs = __webpack_require__(/*! ../styles/ColorFuncs */ "./src/styles/ColorFuncs.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
/**
 * The msh class contains static helper functions that are used whenever there is a need to produce
 * CSS string value based on more complicated type(s). The majority of these functions return
 * StringProxy object so that they can be used in styleset properties assignments, for example:
 * ```typescript
 * <div style={{ color: tsh.rgb( 255, 128, 64) }}
 * ```
 */
class tsh {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Utilities
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Creates a StringProxy object from the given string or another StringProxy object.
     */
    static raw(s) {
        return new UtilTypes_1.StringProxy(s);
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
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Colors
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Converts the color specified as red, green, blue separation values and an optional alpha
     * mask to a CSS color representation. This method should be used when defining CSS color
     * values in styleset properties. Each color separation cna be represented as a number or a
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
        return new UtilTypes_1.StringProxy(ColorFuncs.rgb(r, g, b, a));
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
        return new UtilTypes_1.StringProxy(ColorFuncs.hsl(h, s, l, a));
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
        return new UtilTypes_1.StringProxy(ColorFuncs.alpha(c, a));
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Percent
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Converts the given number to a percent string. Numbers between -1 and 1 are multiplyed by 100.
     */
    static percent(n) {
        return UtilFuncs.percentNumberToCssString(n);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Length units
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /** Creates length value in quaters of an inch */
    static Q(n) { return n + "Q"; }
    /** Creates length value in ch units */
    static ch(n) { return n + "ch"; }
    /** Creates length value in cantimeters */
    static cm(n) { return n + "cm"; }
    /** Creates length value in calculated font-sizes of the element */
    static em(n) { return n + "em"; }
    /** Creates length value in heights of lowercase letter 'x' in the font */
    static ex(n) { return n + "ex"; }
    /** Creates length value in ic units */
    static ic(n) { return n + "ic"; }
    /** Creates length value in inches */
    static in(n) { return n + "in"; }
    /** Creates length value in line-heights of the element */
    static lh(n) { return n + "lh"; }
    /** Creates length value in millimeters */
    static mm(n) { return n + "mm"; }
    /** Creates length value in picas */
    static pc(n) { return n + "pc"; }
    /** Creates length value in points */
    static pt(n) { return n + "pt"; }
    /** Creates length value in pixels */
    static px(n) { return n + "px"; }
    /** Creates length value in 1% of the size of the initial containing block, in the direction
     * of the root element’s block axis */
    static vb(n) { return n + "vb"; }
    /** Creates length value in 1% of the height of the viewport's initial containing block */
    static vh(n) { return n + "vh"; }
    /** Creates length value in 1% of the size of the initial containing block, in the direction
     * of the root element’s inline axis */
    static vi(n) { return n + "vi"; }
    /** Creates length value in 1% of the width of the viewport's initial containing block */
    static vw(n) { return n + "vw"; }
    /** Creates length value in fontsizes of the root element (<html>) */
    static rem(n) { return n + "rem"; }
    /** Creates length value in line-heights of the root element (<html>) */
    static rlh(n) { return n + "rlh"; }
    /** Creates length value in the units which are a smaller value between vw and vh */
    static vmax(n) { return n + "vmax"; }
    /** Creates length value in the units which are a larger value between vw and vh */
    static vmin(n) { return n + "vmin"; }
    /**
     * Converts length value from the numeric representation to the CSS string.
     */
    static len(n, units) {
        return UtilFuncs.lengthNumberToCssString(n, units);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Angle units
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /** Creates angle value in degrees */
    static deg(n) { return n + "deg"; }
    /** Creates angle value in radians */
    static rad(n) { return n + "rad"; }
    /** Creates angle value in gradians */
    static grad(n) { return n + "grad"; }
    /** Creates angle value in turns */
    static turn(n) { return n + "turn"; }
    /**
     * Converts angle value from the numeric representation to the CSS string. Integer
     * values are treated as degrees while floating numbers are treated as radians.
     */
    static angle(n, units) {
        return UtilFuncs.angleNumberToCssString(n, units);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Time units
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /** Creates time value in seconds */
    static s(n) { return n + "s"; }
    /** Creates time value in milliseconds */
    static ms(n) { return n + "ms"; }
    /**
     * Converts time value from the numeric representation to the CSS string. Integer
     * values are treated as milliseconds while floating numbers are treated as seconds.
     */
    static time(n, units) {
        return UtilFuncs.timeNumberToCssString(n, units);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Frequency units
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /** Creates frequency value in Hertz */
    static hz(n) { return n + "Hz"; }
    /** Creates frequency value in Kilo-Hertz */
    static khz(n) { n + "kHz"; }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Resolution units
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /** Creates resolution value in DPI */
    static dpi(n) { return n + "dpi"; }
    /** Creates resolution value in DPCM */
    static dpcm(n) { return n + "dpcm"; }
    /** Creates resolution value in DPPX */
    static dppx(n) { return n + "dppx"; }
    /**
         * Converts resolution value from the numeric representation to the CSS string. Integer
         * values are treated as DPI while floating numbers are treated as DPCM.
         */
    static resolution(n, units) {
        return UtilFuncs.resolutionToCssString(n, units);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Fraction units (for flex)
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /** Creates fraction value for flex */
    static fr(n) { return n + "fr"; }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Custom CSS properties
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Defines a custom CSS property as part of a Styleset. Use it as in the following example:
     *
     * ```typescript
     * let myStyles = $scope( class
     * {
     *     mainColor = $custom( "color", "black");
     *     div = $tag( "div", { $custom: [ tsh.custom( this.mainColor, "brown") ] })
     * });
     * ```
     *
     * This is equivalent to the following CSS:
     *
     * ```css
     * :root { --mainColor: "black"; }
     * div { --mainColor: "brown"; }
     * ```
     *
     * The `tsh.custom` method will produce a compilation error if an invalid type is used for the
     * property value.
     */
    static custom(varDef, varValue) {
        return { varDef, varValue };
    }
    /**
     * Returns the string representation of the CSS var() function for the given custom property.
     * Use it as in the following example:
     *
     * ```typescript
     * let myStyles = $scope( class
     * {
     *     defaultColor = $custom( "color", "blue");
     *
     *     sidebar = $class( { color: tsh.var( this.defaultColor) })
     * });
     * ```
     */
    static var(varDef, fallbackValue) {
        return new UtilTypes_1.VarValue(varDef, fallbackValue);
    }
}
exports.tsh = tsh;


/***/ }),

/***/ "./src/mimcssTypes.ts":
/*!****************************!*\
  !*** ./src/mimcssTypes.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimbl
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./styles/UtilTypes */ "./src/styles/UtilTypes.ts"));
__export(__webpack_require__(/*! ./styles/ColorTypes */ "./src/styles/ColorTypes.ts"));
__export(__webpack_require__(/*! ./rules/RuleTypes */ "./src/rules/RuleTypes.ts"));
__export(__webpack_require__(/*! ./scope/ScopeTypes */ "./src/scope/ScopeTypes.ts"));
__export(__webpack_require__(/*! ./helpers/SelectorTypes */ "./src/helpers/SelectorTypes.ts"));
__export(__webpack_require__(/*! ./helpers/tsh */ "./src/helpers/tsh.ts"));


/***/ }),

/***/ "./src/rules/AnimationRule.ts":
/*!************************************!*\
  !*** ./src/rules/AnimationRule.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsh_1 = __webpack_require__(/*! ../helpers/tsh */ "./src/helpers/tsh.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
/**
 * The TagRule type describes a styleset that applies to elements identified by a tag name.
 */
class AnimationRule extends Rule_1.Rule {
    constructor(keyframes, nameOverride) {
        super(5 /* ANIMATION */);
        if (keyframes)
            this.keyframeRules = keyframes.map((keyframe) => new KeyframeRule(keyframe));
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, owner, ruleName) {
        super.process(container, owner, ruleName);
        if (!this.nameOverride)
            this.animationName = this.owner.getScopedRuleNamed(ruleName);
        else if (typeof this.nameOverride === "string")
            this.animationName = this.nameOverride;
        else
            this.animationName = this.nameOverride.name;
        for (let keyframeRule of this.keyframeRules)
            keyframeRule.process(container, owner, ruleName);
    }
    /**
 * Rule's name - this is a unique name that is assigned by the Mimcss infrastucture. This name
 * doesn't have the prefix that is used when referring to classes (.), IDs (#) and custom CSS
 * properties (--).
 */
    get name() { return this.animationName; }
    /**
     * Rule's name - this is a name that has the prefix that is used when referring to classes (.),
     * IDs (#) and custom CSS properties (--). For animations, this name is the same as in the
     * `name` property.
     */
    get cssName() { return this.animationName; }
    // Creates a copy of the rule.
    clone() {
        let newRule = new AnimationRule();
        newRule.keyframeRules = this.keyframeRules.map((keyframeRule) => keyframeRule.clone());
        newRule.nameOverride = this.nameOverride;
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        let index = parent.insertRule(`@keyframes ${this.animationName} {}`, parent.cssRules.length);
        this.cssRule = parent.cssRules[index];
        let cssKeyframesRule = this.cssRule;
        for (let keyframeRule of this.keyframeRules)
            cssKeyframesRule.appendRule(keyframeRule.toCssString());
    }
    /** SOM keyframes rule */
    get cssKeyframesRule() { return this.cssRule; }
}
exports.AnimationRule = AnimationRule;
/**
 * The KeyframeRule class represents a single keyframe clause in the animation rule.
 */
class KeyframeRule extends StyleRule_1.StyleRule {
    constructor(keyframe) {
        super(6 /* KEYFRAME */, keyframe ? keyframe[1] : undefined);
        if (keyframe)
            this.waypointString = this.parseWaypoint(keyframe[0]);
    }
    // Processes the given rule.
    parseWaypoint(waypoint) {
        if (typeof waypoint === "string")
            return waypoint;
        else if (Number.isInteger(waypoint))
            return waypoint + "%";
        else
            return tsh_1.tsh.percent(waypoint);
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new KeyframeRule();
        newRule.copyFrom(this);
        newRule.waypointString = this.waypointString;
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    toCssString() {
        return `${this.waypointString} ${StyleFuncs_1.stylesetToCssString(this.styleset, this.important)}`;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return this.waypointString;
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
/**
 * The ClassRule type describes a styleset that applies to elements identified by a class.
 */
class ClassRule extends StyleRule_1.StyleRule {
    constructor(style, nameOverride) {
        super(2 /* CLASS */, style);
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, owner, ruleName) {
        super.process(container, owner, ruleName);
        if (!this.nameOverride)
            this.className = this.owner.getScopedRuleNamed(ruleName);
        else if (typeof this.nameOverride === "string")
            this.className = this.nameOverride;
        else
            this.className = this.nameOverride.name;
    }
    /**
     * Rule's name - this is a unique name that is assigned by the Mimcss infrastucture. This name
     * doesn't have the prefix that is used when referring to classes (.), IDs (#) and custom CSS
     * properties (--).
     */
    get name() { return this.className; }
    /**
     * Rule's name - this is a name that has the prefix that is used when referring to classes (.),
     * IDs (#) and custom CSS properties (--). For animations, this name is the same as in the
     * `name` property.
     */
    get cssName() { return "." + this.className; }
    // Creates a copy of the rule.
    clone() {
        let newRule = new ClassRule();
        newRule.copyFrom(this);
        newRule.nameOverride = this.nameOverride;
        return newRule;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return "." + this.className;
    }
    /** Only needed to distinguish from other rules */
    get class() { return this.className; }
}
exports.ClassRule = ClassRule;


/***/ }),

/***/ "./src/rules/CustomVar.ts":
/*!********************************!*\
  !*** ./src/rules/CustomVar.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
/**
 * The CustomVar class describes a custom CSS property.
 */
class CustomVar extends Rule_1.Rule {
    constructor(templatePropName, varValue, nameOverride) {
        super(50 /* VAR */);
        this.templatePropName = templatePropName;
        this.varValue = varValue;
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, owner, ruleName) {
        super.process(container, owner, ruleName);
        if (!this.nameOverride)
            this.varName = this.owner.getScopedRuleNamed(ruleName);
        else if (typeof this.nameOverride === "string")
            this.varName = this.nameOverride;
        else
            this.varName = this.nameOverride.name;
    }
    /**
     * Rule's name - this is a unique name that is assigned by the Mimcss infrastucture. This name
     * doesn't have the prefix that is used when referring to classes (.), IDs (#) and custom CSS
     * properties (--).
     */
    get name() { return this.varName; }
    /**
     * Rule's name - this is a name that has the prefix that is used when referring to classes (.),
     * IDs (#) and custom CSS properties (--). For animations, this name is the same as in the
     * `name` property.
     */
    get cssName() { return "--" + this.varName; }
    // Determines whether this rule is a real CSS rule that should be inserted under the <style>
    // element. For the majority of Rule-derived classes this is true; however, for some classes,
    // e.g. for the CustomVar class, this is not so.
    get isRealCssRule() { return false; }
    // Creates a copy of the rule.
    clone() {
        let newRule = new CustomVar();
        newRule.templatePropName = this.templatePropName;
        newRule.varValue = this.varValue;
        newRule.nameOverride = this.nameOverride;
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    // Since CustomVar is not a real CSS rule, this implementation does nothing. Instead, the
    // RuleContainer uses the toCssString method of our class.
    insert(parent) { }
    // Converts the rule to CSS string.
    toCssString() {
        return `--${this.varName}: ${StyleFuncs_1.stylePropToCssString(this.templatePropName, this.varValue, true)}`;
    }
}
exports.CustomVar = CustomVar;


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
 * The FontFaceRule class is used as a base class for rules that have a single style rule.
 */
class FontFaceRule extends Rule_1.Rule {
    constructor(fontface) {
        super(9 /* FONTFACE */);
        this.fontface = fontface;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new FontFaceRule();
        newRule.fontface = {};
        Object.assign(this.fontface, this.fontface);
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        let index = parent.insertRule(`@font-face ${FontFaceFuncs_1.fontFaceToCssString(this.fontface)}`, parent.cssRules.length);
        this.cssRule = parent.cssRules[index];
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
 * The GroupRule class represents a parsed form of a StyleSheetDefinition-derived class. This
 * class doesn't have a template parameter, but it conforms to the IStyleSheet<T> interface,
 * which provides names of classes, IDs and keyframes defined in the class T, which must be
 * derived from the StyleSheetDefinition class.
 */
class GroupRule extends RuleContainer_1.RuleContainer {
    constructor(type, definition) {
        super(type, definition);
    }
    // Processes the given rule.
    process(container, owner, ruleName) {
        super.process(container, owner, ruleName);
        // process sub-rules
        this.processRules();
    }
    /** SOM grouping rule */
    get cssGroupRule() { return this.cssRule; }
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
/**
 * The IDRule type describes a styleset that applies to elements identified by an ID.
 */
class IDRule extends StyleRule_1.StyleRule {
    constructor(style, nameOverride) {
        super(3 /* ID */, style);
        this.nameOverride = nameOverride;
    }
    // Processes the given rule.
    process(container, owner, ruleName) {
        super.process(container, owner, ruleName);
        if (!this.nameOverride)
            this.idName = this.owner.getScopedRuleNamed(ruleName);
        else if (typeof this.nameOverride === "string")
            this.idName = this.nameOverride;
        else
            this.idName = this.nameOverride.name;
    }
    /**
     * Rule's name - this is a unique name that is assigned by the Mimcss infrastucture. This name
     * doesn't have the prefix that is used when referring to classes (.), IDs (#) and custom CSS
     * properties (--).
     */
    get name() { return this.idName; }
    /**
     * Rule's name - this is a name that has the prefix that is used when referring to classes (.),
     * IDs (#) and custom CSS properties (--). For animations, this name is the same as in the
     * `name` property.
     */
    get cssName() { return "#" + this.idName; }
    // Creates a copy of the rule.
    clone() {
        let newRule = new IDRule();
        newRule.copyFrom(this);
        newRule.nameOverride = this.nameOverride;
        return newRule;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return "#" + this.idName;
    }
    /** ID of the HTML element */
    get id() { return this.idName; }
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
const TssManager_1 = __webpack_require__(/*! ../scope/TssManager */ "./src/scope/TssManager.ts");
/**
 * The ImportRule type describes a CSS @import rule.
 */
class ImportRule extends Rule_1.Rule {
    constructor(url, query) {
        super(10 /* IMPORT */);
        this.url = url;
        this.query = query;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new ImportRule();
        newRule.url = this.url;
        newRule.query = this.query;
        return newRule;
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
        let queryString = !this.query ? "" : typeof this.query === "string" ? this.query : MediaFuncs_1.mediaQueryToCssString(this.query);
        this.cssRule = TssManager_1.TssManager.addImportRule(`@import ${url} ${queryString}`);
    }
    /** SOM media rule */
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
const GroupRule_1 = __webpack_require__(/*! ./GroupRule */ "./src/rules/GroupRule.ts");
const MediaFuncs_1 = __webpack_require__(/*! ../styles/MediaFuncs */ "./src/styles/MediaFuncs.ts");
/**
 * The MediaRule type describes a CSS @media rule.
 */
class MediaRule extends GroupRule_1.GroupRule {
    constructor(query, definition) {
        super(8 /* MEDIA */, definition);
        this.query = query;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new MediaRule();
        newRule.query = this.query;
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        let queryString = typeof this.query === "string" ? this.query : MediaFuncs_1.mediaQueryToCssString(this.query);
        let index = parent.insertRule(`@media ${queryString} {}`, parent.cssRules.length);
        this.cssRule = parent.cssRules[index];
        // insert sub-rules
        this.insertRules(this.cssMediaRule);
    }
    /** SOM media rule */
    get cssMediaRule() { return this.cssRule; }
}
exports.MediaRule = MediaRule;


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
 * class is also an ancestor for StyleScope; however, most of its the fields are undefined in
 * te StyleScope instances.
 */
class Rule {
    constructor(type) {
        this.type = type;
    }
    // Processes the rule.
    process(container, owner, ruleName) {
        this.container = container;
        this.owner = owner;
        this.ruleName = ruleName;
    }
    // Determines whether this rule is a real CSS rule that should be inserted under the <style>
    // element. For the majority of Rule-derived classes this is true; however, for some classes,
    // e.g. for the CustomVar class, this is not so.
    get isRealCssRule() { return true; }
}
exports.Rule = Rule;


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
const CustomVar_1 = __webpack_require__(/*! ./CustomVar */ "./src/rules/CustomVar.ts");
/**
 * The RuleContainer class represents a parsed form of a rule definition class.
 */
class RuleContainer extends Rule_1.Rule {
    constructor(type, definition) {
        super(type);
        this.definitionClass = definition;
    }
    /** Names of classes defined in the style sheet */
    get classes() { return this._classes; }
    /** Names of classes defined in the style sheet */
    get ids() { return this._ids; }
    /** Names of keyframes defined in the style sheet */
    get animations() { return this._animations; }
    /** Names of custom CSS properties defined in the style scope */
    get vars() { return this._vars; }
    /** Map of all tag rules. */
    get rules() { return this._rules; }
    /** The ":root" block with CSS custom property definitions. */
    get varRule() { return this._varRule; }
    // Creates the style scope definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    processRules() {
        // check if the definition has already been processed
        if (this.isProcessed)
            return;
        this._allNames = {};
        this._classes = {};
        this._ids = {};
        this._animations = {};
        this._vars = {};
        this._rules = {};
        this._allRules = [];
        // create our internal rule for custom CSS properties
        this._varRule = new CustomVarRule();
        this._varRule.process(this, this.owner, null);
        this._allRules.push(this._varRule);
        // get the "rule definition" object whose properties are the rule objects
        let rulesDef;
        if (typeof this.definitionClass === "function") {
            // if the "definition" is a class then create an instance of it
            try {
                rulesDef = new this.definitionClass();
            }
            catch (err) {
                console.error(`Error instantiating Rule Definition of type '${this.definitionClass.name}'`);
                return;
            }
        }
        else {
            // if the "definition" is an object (not a class) then use it directly
            rulesDef = this.definitionClass;
        }
        // process rules that are assigned to the properties of the definition class
        this.processNamedRules(rulesDef);
    }
    // Creates the style scope definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    processNamedRules(rulesDef) {
        // loop over the properties of the definition object and process those that are rules.
        for (let propName in rulesDef) {
            if (propName === "$unnamed") {
                let propVal = rulesDef.$unnamed;
                this.processUnnamedRules(propVal);
                continue;
            }
            let propVal = rulesDef[propName];
            if (!(propVal instanceof Rule_1.Rule))
                continue;
            let ruleName = propName;
            let rule = propVal;
            // ScopeStyle derives from Rule (via RuleContainer); however, it is not a real rule.
            // We inform our owner style scope about the "imported" scope so that when the owner
            // scope is activated, the imported one is activated too.
            if (rule.type === 51 /* SCOPE */) {
                this.owner.addImportedScope(rule);
                continue;
            }
            // if the rule object is already assigned to a style scope, we create a clone of the
            // rule and assign it to our scope.
            if (rule.owner)
                rule = rule.clone();
            rule.process(this, this.owner, ruleName);
            // remember real rules
            if (rule.isRealCssRule) {
                this._rules[ruleName] = rule;
                this._allRules.push(rule);
            }
            // put rules and their names into buckets
            if (rule instanceof ClassRule_1.ClassRule) {
                this._allNames[ruleName] = rule.className;
                this._classes[ruleName] = rule.className;
            }
            else if (rule instanceof IDRule_1.IDRule) {
                this._allNames[ruleName] = rule.idName;
                this._ids[ruleName] = rule.idName;
            }
            else if (rule instanceof AnimationRule_1.AnimationRule) {
                this._allNames[ruleName] = rule.animationName;
                this._animations[ruleName] = rule.animationName;
            }
            else if (rule instanceof CustomVar_1.CustomVar) {
                this._allNames[ruleName] = rule.varName;
                this._vars[ruleName] = rule.varName;
                this._varRule._vars[ruleName] = rule;
            }
        }
    }
    // Creates the style scope definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    processUnnamedRules(rules) {
        if (!rules || rules.length === 0)
            return;
        // loop over the properties of the definition object and process those that are rules.
        for (let rule of rules) {
            // ScopeStyle derives from Rule (via RuleContainer); however, it is not a real rule.
            // We inform our owner style scope about the "imported" scope so that when the owner
            // scope is activated, the imported one is activated too.
            if (rule.type === 51 /* SCOPE */) {
                this.owner.addImportedScope(rule);
                continue;
            }
            // if the rule object is already assigned to a style scope, we create a clone of the
            // rule and assign it to our scope.
            if (rule.owner)
                rule = rule.clone();
            rule.process(this, this.owner, null);
            this._allRules.push(rule);
        }
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
    }
    // Inserts all rules defined in this container to either the style sheet or grouping rule.
    insertRules(parent) {
        for (let rule of this._allRules)
            rule.insert(parent);
    }
    // Helper properties
    get isProcessed() { return !!this._rules; }
}
exports.RuleContainer = RuleContainer;
/**
 * The CustomVarRule class represents a :root rule that is used for defining custom CSS properties.
 */
class CustomVarRule extends Rule_1.Rule {
    constructor() {
        super(CSSRule.STYLE_RULE);
    }
    /** The ":root" block with CSS custom property definitions. */
    get vars() { return this._vars; }
    // Processes the given rule.
    process(container, owner, ruleName) {
        super.process(container, owner, ruleName);
        this._vars = {};
    }
    // Creates a copy of the rule.
    clone() {
        return null;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        let varNames = Object.keys(this._vars);
        if (varNames.length === 0)
            return;
        let s = `:root {${varNames.map((varName) => this._vars[varName].toCssString()).join(";")}}`;
        let index = parent.insertRule(s, parent.cssRules.length);
        this.cssRule = parent.cssRules[index];
    }
}


/***/ }),

/***/ "./src/rules/RuleTypes.ts":
/*!********************************!*\
  !*** ./src/rules/RuleTypes.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module defines types of object that represent CSS rules.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TagRule_1 = __webpack_require__(/*! ./TagRule */ "./src/rules/TagRule.ts");
const ClassRule_1 = __webpack_require__(/*! ./ClassRule */ "./src/rules/ClassRule.ts");
const IDRule_1 = __webpack_require__(/*! ./IDRule */ "./src/rules/IDRule.ts");
const SelectorRule_1 = __webpack_require__(/*! ./SelectorRule */ "./src/rules/SelectorRule.ts");
const AnimationRule_1 = __webpack_require__(/*! ./AnimationRule */ "./src/rules/AnimationRule.ts");
const CustomVar_1 = __webpack_require__(/*! ./CustomVar */ "./src/rules/CustomVar.ts");
const SupportsRule_1 = __webpack_require__(/*! ./SupportsRule */ "./src/rules/SupportsRule.ts");
const MediaRule_1 = __webpack_require__(/*! ./MediaRule */ "./src/rules/MediaRule.ts");
const ImportRule_1 = __webpack_require__(/*! ./ImportRule */ "./src/rules/ImportRule.ts");
const FontFaceRule_1 = __webpack_require__(/*! ./FontFaceRule */ "./src/rules/FontFaceRule.ts");
/** Creates new TagRule object  */
function $tag(tagName, style) { return new TagRule_1.TagRule(tagName, style); }
exports.$tag = $tag;
/** Returns new ClassRule object  */
function $class(style, nameOverride) { return new ClassRule_1.ClassRule(style, nameOverride); }
exports.$class = $class;
/** Returns new IDRule object  */
function $id(style, nameOverride) { return new IDRule_1.IDRule(style, nameOverride); }
exports.$id = $id;
/** Creates new SelectorRule object  */
function $rule(selector, style) { return new SelectorRule_1.SelectorRule(selector, style); }
exports.$rule = $rule;
/** Returns new AnimationRule object  */
function $animation(keyframes, nameOverride) { return new AnimationRule_1.AnimationRule(keyframes, nameOverride); }
exports.$animation = $animation;
/** Returns new CustomVar object that defines a custom CSS property */
function $custom(templatePropName, propVal, nameOverride) { return new CustomVar_1.CustomVar(templatePropName, propVal, nameOverride); }
exports.$custom = $custom;
/** Returns new SupportsRule object  */
function $supports(query, definition) { return new SupportsRule_1.SupportsRule(query, definition); }
exports.$supports = $supports;
/** Returns new MediaRule object  */
function $media(query, definition) { return new MediaRule_1.MediaRule(query, definition); }
exports.$media = $media;
/** Returns new ImportRule object  */
function $import(url, query) { return new ImportRule_1.ImportRule(url, query); }
exports.$import = $import;
/** Returns new FonFaceRule object  */
function $fontface(fontface) { return new FontFaceRule_1.FontFaceRule(fontface); }
exports.$fontface = $fontface;


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
const SelectorFuncs_1 = __webpack_require__(/*! ../helpers/SelectorFuncs */ "./src/helpers/SelectorFuncs.ts");
/**
 * The SelectorRule type describes a styleset that applies to elements identified by a class.
 */
class SelectorRule extends StyleRule_1.StyleRule {
    constructor(selector, style) {
        super(4 /* SELECTOR */, style);
        this.selector = new SelectorFuncs_1.Selector(selector);
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new SelectorRule();
        newRule.copyFrom(this);
        newRule.selector = this.selector;
        return newRule;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return this.selector.toCssString();
    }
    /** CSS rule selector string */
    get selectorText() { return this.selector.toCssString(); }
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
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
/**
 * The StyleRule class is used as a base class for rules that have a single style rule.
 */
class StyleRule extends Rule_1.Rule {
    constructor(type, style) {
        super(type);
        this.styleset = {};
        this.parents = [];
        this.important = new Set();
        if (style)
            this.parseExtendedStyleset(style);
    }
    parseExtendedStyleset(style) {
        if (style instanceof StyleRule) {
            // styleset is a single IStyleRule object, which we add as our parent
            this.parents.push(style);
        }
        else if (Array.isArray(style)) {
            // styleset is an array of IStyleRule objects, which we add as our parents
            for (let rule of style)
                this.parents.push(rule);
        }
        else {
            // extendedStyleset is a set of style properties but can also include the $extends and
            // $important properties. Remember parents and important names and copy the rest of
            // style properties to our internal Styleset object.
            for (let propName in style) {
                let propVal = style[propName];
                if (propName === "$extends") {
                    let inheritsPropVal = propVal;
                    if (Array.isArray(inheritsPropVal)) {
                        // this is is an array of IStyleRule objects, which we add as our parents
                        for (let rule of inheritsPropVal)
                            this.parents.push(rule);
                    }
                    else {
                        // this is a single IStyleRule object, which we add as our parent
                        this.parents.push(inheritsPropVal);
                    }
                }
                else if (propName === "$important") {
                    let importantPropVal = propVal;
                    if (Array.isArray(importantPropVal)) {
                        // this is is an array of strings
                        for (let important of importantPropVal)
                            this.important.add(important);
                    }
                    else {
                        // this is a single string
                        this.important.add(importantPropVal);
                    }
                }
                else {
                    // copy the property value to our internal styleset
                    this.styleset[propName] = propVal;
                }
            }
        }
    }
    // Processes the given rule.
    process(container, owner, ruleName) {
        super.process(container, owner, ruleName);
        // if we have parents, we need to first copy their stylesets, so that our styleset can
        // override their values.
        if (this.parents.length > 0) {
            let tempStyleset = this.styleset;
            this.styleset = {};
            // go through all parents and copy their style properties to our own styleset.
            for (let parent of this.parents)
                Object.assign(this.styleset, parent.styleset);
            // copy our styles over those of the parents
            Object.assign(this.styleset, tempStyleset);
        }
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        this.styleset = src.styleset;
        this.parents = src.parents;
        this.important = src.important;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        let index = parent.insertRule(`${this.geSelectorString()} ${StyleFuncs_1.stylesetToCssString(this.styleset, this.important)}`, parent.cssRules.length);
        this.cssRule = parent.cssRules[index];
    }
    /** SOM style rule */
    get cssStyleRule() { return this.cssRule; }
}
exports.StyleRule = StyleRule;


/***/ }),

/***/ "./src/rules/SupportsRule.ts":
/*!***********************************!*\
  !*** ./src/rules/SupportsRule.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GroupRule_1 = __webpack_require__(/*! ./GroupRule */ "./src/rules/GroupRule.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
/**
 * The SupportRule type describes a CSS @supports rule.
 */
class SupportsRule extends GroupRule_1.GroupRule {
    constructor(query, definition) {
        super(7 /* SUPPORTS */, definition);
        // convert the query to its string form
        this.queryString = StyleFuncs_1.supportQueryToCssString(query);
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new SupportsRule();
        newRule.queryString = this.queryString;
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        // determine whether the query is supported and if it is not, don't insert the rule
        if (!CSS.supports(this.queryString))
            return;
        let index = parent.insertRule(`@supports ${this.queryString} {}`, parent.cssRules.length);
        this.cssRule = parent.cssRules[index];
        // insert sub-rules
        this.insertRules(this.cssSupportsRule);
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
 * The TagRule type describes a styleset that applies to elements identified by a tag name.
 */
class TagRule extends StyleRule_1.StyleRule {
    constructor(tagName, style) {
        super(1 /* TAG */, style);
        this.tagName = tagName;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new TagRule();
        newRule.copyFrom(this);
        newRule.tagName = this.tagName;
        return newRule;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return this.tagName;
    }
    /** Name of the HTML tag */
    get tag() { return this.tagName; }
}
exports.TagRule = TagRule;


/***/ }),

/***/ "./src/scope/ScopeTypes.ts":
/*!*********************************!*\
  !*** ./src/scope/ScopeTypes.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module defines types and functions that allow building CSS style sheets using TypeScript.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const StyleScope_1 = __webpack_require__(/*! ./StyleScope */ "./src/scope/StyleScope.ts");
/**
 * Processes the given style scope definition and returns the StyleScope object that contains
 * names of IDs, classes and keyframes and allows style manipulations. For a given style scope
 * definition class there is a single style scope object, no matter how many times this function
 * is invoked.
 */
function $use(styleScopeDefinitionClass) {
    // if the style scope definition is multiplex, create new StyleScope object every time;
    // otherwise, check whether the style sheet definition object has already been processed. This
    // is indicated by the existence of the instance static property on the class.
    if (styleScopeDefinitionClass.isMultiplex)
        return new StyleScope_1.StyleScope(styleScopeDefinitionClass);
    else {
        // we don't want the class styleScope property to be exposed on the publicly available
        // interface; therefore, we access it via "as any".
        let styleScope = styleScopeDefinitionClass.styleScope;
        if (!styleScope) {
            styleScope = new StyleScope_1.StyleScope(styleScopeDefinitionClass);
            styleScopeDefinitionClass.styleScope = styleScope;
        }
        return styleScope;
    }
}
exports.$use = $use;
/**
 * Processes the given style scope definition, inserts the CSS rules into DOM and returns the
 * StyleScope object that contains names of IDs, classes and keyframes and allows style
 * manipulations. For a given style scope definition class there is a single style scope object,
 * no matter how many times this function is invoked.
 */
function $activate(styleScopeDefinitionClass) {
    let scope = $use(styleScopeDefinitionClass);
    scope.activate();
    return scope;
}
exports.$activate = $activate;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions to configure TssManager options
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const TssManager_1 = __webpack_require__(/*! ./TssManager */ "./src/scope/TssManager.ts");
/**
 * Sets the flag indicating whether to use optimized (unique) style names. If yes, the names
 * will be created by appending a unique number to the given prefix. If the prefix is not
 * specified, the standard prefix "n" will be used.
 * @param optimize
 * @param prefix
 */
function useOptimizedStyleNames(optimize, prefix) { TssManager_1.TssManager.useOptimizedStyleNames(optimize, prefix); }
exports.useOptimizedStyleNames = useOptimizedStyleNames;


/***/ }),

/***/ "./src/scope/StyleScope.ts":
/*!*********************************!*\
  !*** ./src/scope/StyleScope.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TssManager_1 = __webpack_require__(/*! ./TssManager */ "./src/scope/TssManager.ts");
const RuleContainer_1 = __webpack_require__(/*! ../rules/RuleContainer */ "./src/rules/RuleContainer.ts");
/**
 * The StyleScope class represents a parsed form of a IStyleScopeDefinition-derived class.
 */
class StyleScope extends RuleContainer_1.RuleContainer {
    constructor(definitionClass) {
        super(51 /* SCOPE */, definitionClass);
        this.definitionClass = definitionClass;
        this.activationRefCount = 0;
        this.importedScopes = [];
        this.processScope();
    }
    // Determines whether this rule is a real CSS rule that should be inserted under the <style>
    // element. For the majority of Rule-derived classes this is true; however, for some classes,
    // e.g. for the CustomVar class, this is not so.
    get isRealCssRule() { return false; }
    // Creates a copy of the rule.
    clone() { return null; }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        super.insertRules(this.cssStyleSheet);
    }
    // Creates the style scope definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    processScope() {
        // check if the scope definition has already been processed
        if (this.isProcessed)
            return;
        // the container and the owner properties of the Rule base class point to the StyleScope
        // object itself
        super.process(this, this, null);
        this.isMultiplex = !!this.definitionClass.isMultiplex;
        // in DEBUG, each class has a name unless it was created as an anonymous class. In RELEASE,
        // (as well as in the anonymous cases), the name is undefined and we generate a unique
        // name for the style scope.
        this.name = this.definitionClass.name;
        if (!this.name)
            this.name = TssManager_1.TssManager.generateUniqueName("s");
        // process sub-rules rules.
        this.processRules();
    }
    /** Adds a style scope this style scope */
    addImportedScope(scope) {
        this.importedScopes.push(scope);
    }
    /** Generates a name, which will be unique in this style scope */
    getScopedRuleNamed(ruleName) {
        // check whether we already have this rule name: if yes, return the already assigned
        // unique scoped name
        if (ruleName in this._allNames)
            return this._allNames[ruleName];
        else
            return this.generateScopedName(ruleName);
    }
    // Generates a name, which will be unique in this style scope
    generateScopedName(ruleName) {
        if (this.isMultiplex)
            return TssManager_1.TssManager.generateUniqueName();
        else
            return TssManager_1.TssManager.generateName(this.name, ruleName);
    }
    /** Inserts this style scope into DOM. */
    activate() {
        // activate imported scopes
        for (let scope of this.importedScopes)
            scope.activate();
        if (++this.activationRefCount === 1 && !this.isActivated)
            TssManager_1.TssManager.activate(this);
    }
    /** Removes this style scope from DOM - only works for multiplex style scopes. */
    deactivate() {
        // guard from extra deactivate calls
        if (this.activationRefCount === 0)
            return;
        // deactivate imported scopes
        for (let scope of this.importedScopes)
            scope.deactivate();
        if (--this.activationRefCount === 0 && this.isActivated)
            TssManager_1.TssManager.deactivate(this);
    }
    setDOMInfo(styleSheet) {
        this.cssStyleSheet = styleSheet;
    }
    clearDOMInfo() {
        this.cssStyleSheet = undefined;
    }
    // Helper properties
    get isActivated() { return !!this.cssStyleSheet; }
}
exports.StyleScope = StyleScope;


/***/ }),

/***/ "./src/scope/TssManager.ts":
/*!*********************************!*\
  !*** ./src/scope/TssManager.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The TssManager class is responsible for inserting CSS rules into the DOM.
 */
class TssManager {
    // This class has static members only.
    constructor() { }
    /**
     * Sets the flag indicating whether to use optimized (unique) style names. If yes, the names
     * will be created by appending a unique number to the given prefix. If the prefix is not
     * specified, the standard prefix "n" will be used.
     * @param optimize
     * @param prefix
     */
    static useOptimizedStyleNames(optimize, prefix) {
        this.useUniqueStyleNames = optimize;
        this.uniqueStyleNamesPrefix = prefix;
    }
    /**
     * Generates name to use for the given rule from the given style sheet.
     * @param sheetName
     * @param ruleName
     */
    static generateName(sheetName, ruleName) {
        return this.useUniqueStyleNames
            ? this.generateUniqueName(this.uniqueStyleNamesPrefix)
            : `${sheetName}_${ruleName}`;
    }
    /**
     * Generates a unique name, which can be used either for style element's ID or or class,
     * identifier or animation name. Names are generated using a simple incrementing number.
     */
    static generateUniqueName(prefix) {
        return (prefix ? prefix : "n") + this.nextUniqueID++;
    }
    /** Inserts rules from the given style scope into DOM */
    static activate(styleScope) {
        if (!styleScope)
            return;
        // depending on whether the given scope is multiplex, we either create a new <style> element
        // or reuse our "global" one
        let styleSheet;
        if (styleScope.isMultiplex) {
            let styleElm = document.createElement("style");
            document.head.appendChild(styleElm);
            styleSheet = styleElm.sheet;
            this.multiplexScopes.set(styleScope, styleElm);
        }
        else {
            this.ensureDOM();
            styleSheet = this.styleSheet;
        }
        styleScope.setDOMInfo(styleSheet);
        styleScope.insert(styleSheet);
    }
    // Removes this style scope from DOM - only works for multiplex style scopes
    static deactivate(styleScope) {
        if (!styleScope || !styleScope.isMultiplex)
            return;
        styleScope.clearDOMInfo();
        // remove the <style> element from the document
        let styleElm = this.multiplexScopes.get(styleScope);
        if (styleElm)
            styleElm.remove();
        this.multiplexScopes.delete(styleScope);
    }
    // Removes this style scope from DOM - only works for multiplex style scopes
    static addImportRule(importRule) {
        this.ensureDOM();
        let index = this.styleSheetForImports.insertRule(importRule, this.styleSheetForImports.cssRules.length);
        return this.styleSheetForImports.cssRules[index];
    }
    /** Ensures that the <style> element is inserted into DOM */
    static ensureDOM() {
        if (this.styleSheet)
            return;
        // create <style> element and insert it into <head>
        this.styleElmForImports = document.createElement("style");
        this.styleElmForImports.id = "mimcssImports";
        document.head.appendChild(this.styleElmForImports);
        this.styleSheetForImports = this.styleElmForImports.sheet;
        // create <style> element and insert it into <head>
        this.styleElm = document.createElement("style");
        this.styleElm.id = "mimcssStyles";
        document.head.appendChild(this.styleElm);
        this.styleSheet = this.styleElm.sheet;
    }
}
exports.TssManager = TssManager;
// Flag indicating whether to use optimaized names for style elements (class names, animation
// names, etc.)
TssManager.useUniqueStyleNames = false;
// Prefix to use when generating unique style names. If undefined, a standard prefix "n" will
// be used.
TssManager.uniqueStyleNamesPrefix = undefined;
// Next number to use when generating unique identifiers.
TssManager.nextUniqueID = 1;
// Map of StyleScope multiplex objects to their <style> element DOM objects.
TssManager.multiplexScopes = new Map();


/***/ }),

/***/ "./src/styles/ColorFuncs.ts":
/*!**********************************!*\
  !*** ./src/styles/ColorFuncs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ColorTypes = __webpack_require__(/*! ./ColorTypes */ "./src/styles/ColorTypes.ts");
/**
 * Converts color separation value from the numeric representation to the 2-digit hexadecimal string.
 * @param val Number from 0 to 255
 */
function sepToHex(val) {
    let s = val.toString(16);
    return s.length === 1 ? "0" + s : s;
}
exports.sepToHex = sepToHex;
/**
 * Converts color value from the numeric representation to the CSS color string.
 * @param val Color as a number
 */
function colorNumberToCssString(val) {
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
    if (val <= 0xFFFFFF) {
        let r = (val & 0xFF0000) >> 16;
        let g = (val & 0x00FF00) >> 8;
        let b = (val & 0x0000FF);
        return `#${sepToHex(r)}${sepToHex(g)}${sepToHex(b)}`;
    }
    else {
        let r = (val & 0xFF000000) >> 24;
        let g = (val & 0x00FF0000) >> 16;
        let b = (val & 0x0000FF00) >> 8;
        let a = (val & 0x000000FF);
        return `#${sepToHex(r)}${sepToHex(g)}${sepToHex(b)}${sepToHex(a)}}`;
    }
}
exports.colorNumberToCssString = colorNumberToCssString;
function colorSeparation(c) {
    return c == null ? "0" : typeof c === "string" ? c : Number.isInteger(c) ? c.toString() : this.percent(c);
}
exports.colorSeparation = colorSeparation;
function rgb(r, g, b, a) {
    r = this.colorSep(r);
    g = this.colorSep(g);
    b = this.colorSep(b);
    a = a == null ? null : typeof a === "string" ? a : this.percent(a);
    return a == null ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`;
}
exports.rgb = rgb;
function hsl(h, s, l, a) {
    h = typeof h === "string" ? h : Number.isInteger(h) ? h + "deg" : h + "rad";
    s = s == null ? "100%" : typeof s === "string" ? s : this.percent(s);
    l = l == null ? "100%" : typeof l === "string" ? l : this.percent(l);
    a = a == null ? null : typeof a === "string" ? a : this.percent(a);
    return a == null ? `hsl(${h},${s},${l})` : `hsla(${h},${s},${l},${a})`;
}
exports.hsl = hsl;
function alpha(c, a) {
    let rgbVal = typeof c === "string" ? ColorTypes.Colors[c] : c;
    return rgb((rgbVal & 0xFF0000) >> 16, (rgbVal & 0x00FF00) >> 8, rgbVal & 0x0000FF, a);
}
exports.alpha = alpha;
/**
 * Converts color value from the array representation to the CSS time string.
 */
function colorAsArrayToCssString(val) {
    if (val.length === 1)
        return colorToCssString(val[0]);
    else if (val.length === 2)
        return alpha(val[0], val[1]).toString();
    else if (val.length === 3)
        return rgb(val[0], val[1], val[2]).toString();
    else
        return rgb(val[0], val[1], val[2], val[3]).toString();
}
exports.colorAsArrayToCssString = colorAsArrayToCssString;
/**
 * Converts time style value to the CSS time string.
 * @param val Time as a style property type
 */
function colorToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return colorNumberToCssString(val);
    else if (Array.isArray(val))
        return colorAsArrayToCssString(val);
    else
        return val.toString();
}
exports.colorToCssString = colorToCssString;


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
    rebeccapurple: 0x663399
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
exports.fontStretchToCssString = fontStretchToCssString;
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
exports.fontStyleToCssString = fontStyleToCssString;
function fontWeightToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else
        return `${val[0].toString()} ${val[1].toString()}`;
}
exports.fontWeightToCssString = fontWeightToCssString;
function fontSrcToCssString(val) {
    if (typeof val === "string" || !Array.isArray(val))
        return fontSingleSrcToCssString(val);
    else
        return val.map((singleVal) => fontSingleSrcToCssString(singleVal)).join(",");
}
exports.fontSrcToCssString = fontSrcToCssString;
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
exports.fontSingleSrcToCssString = fontSingleSrcToCssString;


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
    // find information object and follow "treatAs" while exists
    let info = mediaFeatures[featureName];
    while (info) {
        if (typeof info === "string")
            info = mediaFeatures[info];
        else if (typeof info === "object")
            info = mediaFeatures[info.treatAs];
        else
            break;
    }
    let realFeatureName = UtilFuncs.camelToDash(featureName);
    // if defaultValue is defined and the property value is equal to it, no value should be returned.
    let defaultValue = typeof info === "object" ? info.defaultValue : undefined;
    if (defaultValue !== undefined && propVal === defaultValue)
        return valueOnly ? "" : realFeatureName;
    let s;
    let convert = typeof info === "function" ? info : typeof info === "object" ? info.convert : undefined;
    if (convert)
        s = convert(propVal);
    else if (typeof propVal === "string")
        s = propVal;
    else if (Array.isArray(propVal))
        s = UtilFuncs.arrayToCssString(propVal, item => item == null ? "" : item.toString());
    else
        s = propVal.toString();
    return valueOnly ? s : realFeatureName + ":" + s;
}
exports.mediaFeatureToCssString = mediaFeatureToCssString;
let mediaFeatures = {
    aspectRatio: aspectRatioToCssString,
    minAspectRatio: "aspectRatio",
    maxAspectRatio: "aspectRatio",
    color: { defaultValue: 0 },
    minColor: "color",
    maxColor: "color",
    colorIndex: { defaultValue: 0 },
    minColorIndex: "color",
    maxColorIndex: "color",
    height: lengthFeatureToCssString,
    minHeight: "height",
    maxHeight: "height",
    monochrome: { defaultValue: 0 },
    minMonochrome: "monochrome",
    maxMonochrome: "monochrome",
    resolution: resolutionFeatureToCssString,
    minResolution: "resolution",
    maxResolution: "resolution",
    width: lengthFeatureToCssString,
    minWidth: "width",
    maxWidth: "width",
};


/***/ }),

/***/ "./src/styles/StyleFuncs.ts":
/*!**********************************!*\
  !*** ./src/styles/StyleFuncs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilTypes = __webpack_require__(/*! ./UtilTypes */ "./src/styles/UtilTypes.ts");
const UtilFuncs = __webpack_require__(/*! ./UtilFuncs */ "./src/styles/UtilFuncs.ts");
const ColorFuncs = __webpack_require__(/*! ./ColorFuncs */ "./src/styles/ColorFuncs.ts");
/**
 * Converts animation style represented as an object with fields corresponding to animation
 * properties to its CSS string value.
 */
function singleAnimationToCssString(val) {
    if (typeof val === "string")
        return val;
    else {
        return UtilFuncs.objectToCssString(val, false, ["delay", UtilFuncs.timeToCssString], ["function", singleAnimationTimingFunctionToCssString], ["duration", UtilFuncs.timeToCssString], ["count", UtilFuncs.numberToCssString], "direction", "state", "mode", "name");
    }
}
/**
 * Converts animation style to its CSS string value.
 */
function animationToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (Array.isArray(val))
        return UtilFuncs.arrayToCssString(val, singleAnimationToCssString, ",");
    else
        return singleAnimationToCssString(val);
}
/**
 * Converts single animation timing function value to the CSS time string.
 */
function singleAnimationTimingFunctionToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (Array.isArray(val)) {
        if (val.length < 3) {
            // this is step function with only the number of steps
            /////////////////////////
            if (val[0] <= 0)
                throw new Error("Number of steps in animation function must be greater than zero");
            else if (!Number.isInteger(val[0]))
                throw new Error("Number of steps in animation function must be an Integer");
            //////////////////////
            return `step(${val[0]}${val.length === 2 ? "," + val[1] : ""})`;
        }
        else {
            // this is bezier function
            /////////////////////////
            if (val[0] < 0 || val[0] > 1 || val[2] < 0 || val[2] > 1)
                throw new Error("First and third parameters of cubic-bezier animation function must be between 0 and 1");
            //////////////////////
            return `cubic-bezier(${val[0]},${val[1]},${val[2]},${val[3]})`;
        }
    }
    else
        return val.toString();
}
/**
 * Converts animation iteration count style value to the CSS time string.
 */
function animationTimingFunctionToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (Array.isArray(val)) {
        if (val.length === 0)
            return "";
        else if (typeof val[0] === "number")
            return singleAnimationTimingFunctionToCssString(val);
        else
            return UtilFuncs.arrayToCssString(val, singleAnimationTimingFunctionToCssString, ",");
    }
    else
        return val.toString();
}
/**
 * Converts corner radius style value to the CSS string.
 */
function singleCornerRadiusToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return UtilFuncs.arrayToCssString(val, UtilFuncs.lengthToCssString, " ");
    else
        return UtilFuncs.lengthToCssString(val);
}
/**
 * Converts border radius style value to the CSS string.
 */
function borderRadiusToCssString(val) {
    if (Array.isArray(val)) {
        if (Array.isArray(val[0])) {
            // two MultiCornerRadius values
            let s = UtilFuncs.arrayToCssString(val[0], UtilFuncs.lengthToCssString, " ");
            s += " / ";
            return s + UtilFuncs.arrayToCssString(val[1], UtilFuncs.lengthToCssString, " ");
        }
        else {
            // single MultiCornerRadius value
            return UtilFuncs.arrayToCssString(val, UtilFuncs.lengthToCssString, " ");
        }
    }
    else
        return UtilFuncs.lengthToCssString(val);
}
/**
 * Converts border style style value to the CSS string.
 */
function borderStyleToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (Array.isArray(val))
        return UtilFuncs.stringArrayToCssString(val, " ");
    else
        return val.toString();
}
/**
 * Converts border width style value to the CSS string.
 */
function borderWidthToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return UtilFuncs.lengthNumberToCssString(val);
    else if (Array.isArray(val))
        return UtilFuncs.arrayToCssString(val, UtilFuncs.lengthToCssString, " ");
    else
        return val.toString();
}
/**
 * Converts border spacing style value to the CSS string.
 */
function borderSpacingToCssString(val) {
    if (Array.isArray(val))
        return UtilFuncs.arrayToCssString(val, UtilFuncs.lengthToCssString, " ");
    else
        return UtilFuncs.lengthToCssString(val);
}
/**
 * Converts border color style value to the CSS string.
 * @param val Border color value
 */
function borderColorToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return UtilFuncs.arrayToCssString(val, ColorFuncs.colorToCssString, " ");
    else
        return ColorFuncs.colorToCssString(val);
}
/**
 * Converts border side style value to the CSS string.
 */
function borderSideToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return UtilFuncs.lengthToCssString(val);
    else if (Array.isArray(val)) {
        let s = "";
        if (typeof val[0] === "string")
            return val[0];
        else if (val[0] instanceof UtilTypes.StringProxy)
            return val[0].toString();
        else if (val[0] != null)
            s += UtilFuncs.lengthToCssString(val[0]) + " ";
        if (val[1])
            s += val[1] + " ";
        if (val[2])
            s += ColorFuncs.colorToCssString(val[2]) + " ";
        return s;
    }
    else if (typeof val === "object")
        return val.toString();
    else
        return ColorFuncs.colorToCssString(val);
}
/**
 * Converts border-image-outset style value to the CSS string.
 */
function borderImageOutsetToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else if (Array.isArray(val))
        return UtilFuncs.arrayToCssString(val, borderImageOutsetToCssString, " ");
    else
        return val.toString();
}
/**
 * Converts box shadow style to its CSS string value.
 */
function boxShadowToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (Array.isArray(val))
        return UtilFuncs.stringArrayToCssString(val);
    else
        return val.toString();
}
/**
 * Converts clip style value to its CSS string value.
 */
function clipToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (Array.isArray(val))
        return `rect(${UtilFuncs.arrayToCssString(val, UtilFuncs.lengthToCssString, " ")}`;
    else
        return val.toString();
}
/**
 * Converts column rule style represented as an object with fields corresponding to column rule
 * properties to its CSS string value.
 */
function columnRuleToCssString(val) {
    if (!val)
        return null;
    else if (typeof val === "string")
        return val;
    else {
        return UtilFuncs.objectToCssString(val, false, ["width", borderWidthToCssString], ["style", borderStyleToCssString], ["color", ColorFuncs.colorToCssString]);
    }
}
/**
 * Converts columns style to its CSS string value.
 */
function columnsToCssString(val) {
    if (!val)
        return null;
    else if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else
        return val[0].toString() + " " + UtilFuncs.lengthToCssString(val[1]);
}
/**
 * Converts flex style value to the CSS string.
 */
function flexToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (Array.isArray(val)) {
        if (val.length === 2)
            return val.join(" ");
        else {
            let s = val[0] + " " + val[1] + " ";
            let v = val[2];
            s += UtilFuncs.lengthToCssString(v);
            return s;
        }
    }
    else
        return UtilFuncs.lengthToCssString(val);
}
/**
 * Converts text-emphasis style value to the CSS string.
 */
function textEmphasisPositionToCssString(val) {
    if (Array.isArray(val))
        return UtilFuncs.stringArrayToCssString(val);
    else
        return UtilFuncs.lengthToCssString(val);
}
/**
 * Converts text-indent style value to the CSS string.
 */
function textIndentToCssString(val) {
    if (Array.isArray(val)) {
        let s = `${UtilFuncs.lengthToCssString(val[0])} ${val[1]}`;
        if (val[2])
            s += " " + val[2];
        return s;
    }
    else
        return UtilFuncs.lengthToCssString(val);
}
/**
 * Converts translate style value to the CSS string.
 */
function translateToCssString(val) {
    if (Array.isArray(val))
        return UtilFuncs.multiLengthToCssString(val);
    else
        return UtilFuncs.lengthToCssString(val);
}
/** Converts the given styleset to its string representation */
function stylesetToCssString(styleset, important) {
    let s = "";
    for (let propName in styleset) {
        if (propName === "$custom") {
            // special handling of the "$custom" property
            let propVal = styleset[propName];
            for (let customVal of propVal) {
                let customPropName;
                let templatePropName;
                if (typeof customVal.varDef === "string") {
                    customPropName = customVal.varDef;
                    templatePropName = customVal.templatePropName;
                }
                else {
                    customPropName = customVal.varDef.name;
                    templatePropName = customVal.varDef.templatePropName;
                }
                if (!customPropName || !templatePropName)
                    continue;
                s += `--${customPropName}:${stylePropToCssString(templatePropName, customVal.varValue, true)}`;
                s += (important && important.has(propName) ? " !important;" : ";");
            }
        }
        else {
            // get the string representation of the property
            s += stylePropToCssString(propName, styleset[propName]);
            s += (important && important.has(propName) ? " !important;" : ";");
        }
    }
    return `{${s}}`;
}
exports.stylesetToCssString = stylesetToCssString;
/**
 * Converts the given style property to the CSS style string
 * @param style
 */
function stylePropToCssString(propName, propVal, valueOnly) {
    if (!propName || propVal == null)
        return "";
    // find information object for the property
    let info = StylePropertyInfos[propName];
    if (typeof info === "string") {
        // go up the chain of aliases if any (we admittedly don't make the effort to detect circular
        // dependencies, because setting up the information objects is our job and not developers').
        while (typeof info === "string") {
            propName = info;
            info = StylePropertyInfos[propName];
        }
    }
    let s = valueOnly ? "" : UtilFuncs.camelToDash(propName) + ":";
    if (typeof info === "function")
        s += info(propVal);
    else if (typeof propVal === "string")
        s += propVal;
    else if (propVal instanceof UtilTypes.StringProxy)
        s += propVal.toString();
    else if (Array.isArray(propVal))
        s += UtilFuncs.arrayToCssString(propVal, item => item == null ? "" : item.toString());
    else
        s += propVal.toString();
    return s;
}
exports.stylePropToCssString = stylePropToCssString;
/**
 * Map of property names to the StylePropertyInfo objects describing custom actions necessary to
 * convert the property value to the CSS-compliant string.
 */
const StylePropertyInfos = {
    animation: animationToCssString,
    animationDelay: UtilFuncs.multiTimeToCssString,
    animationDuration: UtilFuncs.multiTimeToCssString,
    animationIterationCount: UtilFuncs.numberToCssString,
    animationTimingFunction: animationTimingFunctionToCssString,
    backgroundColor: ColorFuncs.colorToCssString,
    // bgc: "backgroundColor",
    backgroundPosition: UtilFuncs.multiPositionToCssString,
    backgroundSize: UtilFuncs.multiSizeToCssString,
    baselineShift: UtilFuncs.lengthToCssString,
    border: borderSideToCssString,
    borderBottom: borderSideToCssString,
    borderBottomColor: ColorFuncs.colorToCssString,
    borderBottomLeftRadius: singleCornerRadiusToCssString,
    borderBottomRightRadius: singleCornerRadiusToCssString,
    borderBottomWidth: UtilFuncs.lengthToCssString,
    borderColor: borderColorToCssString,
    borderImageOutset: borderImageOutsetToCssString,
    borderImageWidth: borderWidthToCssString,
    borderLeft: borderSideToCssString,
    borderLeftColor: ColorFuncs.colorToCssString,
    borderLeftWidth: UtilFuncs.lengthToCssString,
    borderRadius: borderRadiusToCssString,
    borderRight: borderSideToCssString,
    borderRightColor: ColorFuncs.colorToCssString,
    borderRightWidth: UtilFuncs.lengthToCssString,
    borderStyle: borderStyleToCssString,
    borderSpacing: borderSpacingToCssString,
    borderTop: borderSideToCssString,
    borderTopColor: ColorFuncs.colorToCssString,
    borderTopLeftRadius: singleCornerRadiusToCssString,
    borderTopRightRadius: singleCornerRadiusToCssString,
    borderTopWidth: UtilFuncs.lengthToCssString,
    borderWidth: borderWidthToCssString,
    bottom: UtilFuncs.lengthToCssString,
    boxShadow: boxShadowToCssString,
    caretColor: ColorFuncs.colorToCssString,
    clip: clipToCssString,
    color: ColorFuncs.colorToCssString,
    columnGap: UtilFuncs.lengthToCssString,
    columnRule: columnRuleToCssString,
    columnRuleColor: ColorFuncs.colorToCssString,
    columnRuleStyle: borderStyleToCssString,
    columnRuleWidth: borderWidthToCssString,
    columns: columnsToCssString,
    flex: flexToCssString,
    floodColor: ColorFuncs.colorToCssString,
    fontStyle: UtilFuncs.angleToCssString,
    gap: UtilFuncs.multiLengthToCssString,
    gridColumnGap: UtilFuncs.lengthToCssString,
    gridRowGap: UtilFuncs.lengthToCssString,
    height: UtilFuncs.lengthToCssString,
    left: UtilFuncs.lengthToCssString,
    letterSpacing: UtilFuncs.lengthToCssString,
    lightingColor: ColorFuncs.colorToCssString,
    margin: UtilFuncs.multiLengthToCssString,
    marginBottom: UtilFuncs.lengthToCssString,
    marginLeft: UtilFuncs.lengthToCssString,
    marginRight: UtilFuncs.lengthToCssString,
    marginTop: UtilFuncs.lengthToCssString,
    maxHeight: UtilFuncs.lengthToCssString,
    maxWidth: UtilFuncs.lengthToCssString,
    minHeight: UtilFuncs.lengthToCssString,
    minWidth: UtilFuncs.lengthToCssString,
    objectPosition: UtilFuncs.positionToCssString,
    outlineColor: ColorFuncs.colorToCssString,
    outlineOffset: UtilFuncs.lengthToCssString,
    outlineStyle: borderStyleToCssString,
    padding: UtilFuncs.multiLengthToCssString,
    paddingBottom: UtilFuncs.lengthToCssString,
    paddingLeft: UtilFuncs.lengthToCssString,
    paddingRight: UtilFuncs.lengthToCssString,
    paddingTop: UtilFuncs.lengthToCssString,
    perspective: UtilFuncs.lengthToCssString,
    perspectiveOrigin: UtilFuncs.positionToCssString,
    right: UtilFuncs.lengthToCssString,
    rowGap: UtilFuncs.lengthToCssString,
    stopColor: ColorFuncs.colorToCssString,
    tabSize: UtilFuncs.lengthToCssString,
    textDecorationColor: ColorFuncs.colorToCssString,
    textDecorationThickness: UtilFuncs.lengthToCssString,
    textEmphasisColor: ColorFuncs.colorToCssString,
    textEmphasisPosition: textEmphasisPositionToCssString,
    textIndent: textIndentToCssString,
    top: UtilFuncs.lengthToCssString,
    translate: translateToCssString,
    width: UtilFuncs.lengthToCssString,
    zoom: UtilFuncs.lengthToCssString,
};
/** Converts the given supports query to its string representation */
function supportQueryToCssString(query) {
    if (!query)
        return "";
    else if (typeof query === "string")
        return query;
    else if (Array.isArray(query))
        return query.map((singleQuery) => singleSupportQueryToCssString(singleQuery)).join(" or ");
    else
        return singleSupportQueryToCssString(query);
}
exports.supportQueryToCssString = supportQueryToCssString;
/** Converts the given supports query to its string representation */
function singleSupportQueryToCssString(query) {
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
exports.singleSupportQueryToCssString = singleSupportQueryToCssString;


/***/ }),

/***/ "./src/styles/UtilFuncs.ts":
/*!*********************************!*\
  !*** ./src/styles/UtilFuncs.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UtilTypes = __webpack_require__(/*! ./UtilTypes */ "./src/styles/UtilTypes.ts");
/**
 * Converts names with dashes into names in camelCase, where every character after a dash is
 * capitalized and dashes are removed.
 * @param dash
 */
function dashToCamel(dash) {
    if (!dash)
        return dash;
    return dash.replace(/-([a-zA-Z])/g, (x, $1) => $1.toUpperCase());
}
exports.dashToCamel = dashToCamel;
/**
 * Converts camelCase to dash-case.
 * @param camel
 */
function camelToDash(camel) {
    return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}
exports.camelToDash = camelToDash;
/**
 * Generic function that converts an array of the given typeto a single string using the given separator.
 * Elements of the array are converted to strings using the given function.
 * @param val Array of time values
 */
function arrayToCssString(val, func, separator = " ") {
    return !val || val.length === 0 ? "" : val.map((item) => func(item)).join(separator);
}
exports.arrayToCssString = arrayToCssString;
/**
 * Converts array of string values to a single string using the given separator.
 * @param val Array of string values
 */
function stringArrayToCssString(val, separator = " ") {
    return arrayToCssString(val, (v) => typeof v === "string" ? v : v.toString());
}
exports.stringArrayToCssString = stringArrayToCssString;
// /**
//  * Converts a value that can be either a string or an array of strings to a single string using
//  * the given separator.
//  * @param val String value or array of string values
//  */
// export function stringOrStringArrayToCssString( val: string[] | string, separator: string = ","): string
// {
//     if (typeof val === "string")
//         return val;
//     else
//         return stringArrayToCssString( val, separator);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Number
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts single number style value to the CSS string.
 * @param val Single number value
 */
function numberToCssString(val) {
    return typeof val === "string" ? val : val.toString();
}
exports.numberToCssString = numberToCssString;
/**
 * Converts multi-part number style value to the CSS string.
 * @param val Multi-part number value
 */
function multiNumberToCssString(val) {
    if (Array.isArray(val))
        return arrayToCssString(val, numberToCssString);
    else
        return numberToCssString(val);
}
exports.multiNumberToCssString = multiNumberToCssString;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Percent
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts the given number to a percent string. Numbers between -1 and 1 are multiplyed by 100.
 */
function percentNumberToCssString(n) {
    return (Number.isInteger(n) ? n : n > -1.0 && n < 1.0 ? Math.round(n * 100) : Math.round(n)) + "%";
}
exports.percentNumberToCssString = percentNumberToCssString;
/**
 * Converts single percent style value to the CSS string.
 * @param val Single percent value
 */
function percentToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "object")
        return val.toString();
    else
        return percentNumberToCssString(val);
}
exports.percentToCssString = percentToCssString;
/**
 * Converts multi-part percent style value to the CSS string.
 * @param val Multi-part percent value
 */
function multiPercentToCssString(val, separator = " ") {
    if (Array.isArray(val))
        return arrayToCssString(val, percentToCssString, separator);
    else
        return percentToCssString(val);
}
exports.multiPercentToCssString = multiPercentToCssString;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Length
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts length value from the numeric representation to the CSS string. Integer
 * values are treated as pixels while floating numbers within -1 and 1 are treated as
 * percents and floating numbers outside -1 and 1 are treated as "em".
 * @param val Length as a number
 */
function lengthNumberToCssString(n, units) {
    return units ? n + units : Number.isInteger(n) ? n + "px" : n > -1.0 && n < 1.0 ? Math.round(n * 100) + "%" : n + "em";
}
exports.lengthNumberToCssString = lengthNumberToCssString;
/**
 * Converts length style value to the CSS string.
 * @param val Length as a style property type
 */
function lengthToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "object")
        return val.toString();
    else
        return lengthNumberToCssString(val);
}
exports.lengthToCssString = lengthToCssString;
/**
 * Converts multi-part length or percentage style property to the CSS string.
 * @param val Array of length style values
 */
function multiLengthToCssString(val, separator = " ") {
    if (Array.isArray(val))
        return arrayToCssString(val, lengthToCssString, separator);
    else
        return lengthToCssString(val);
}
exports.multiLengthToCssString = multiLengthToCssString;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Angle
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts angle value from the numeric representation to the CSS string. Integer
 * values are treated as degrees while floating numbers are treated as radians.
 * @param val Angle as a number
 */
function angleNumberToCssString(n, units) {
    return n === 0 ? "0" : units ? n + units : Number.isInteger(n) ? n + "deg" : n + "rad";
}
exports.angleNumberToCssString = angleNumberToCssString;
/**
 * Converts length style value to the CSS string.
 * @param val Length as a style property type
 */
function angleToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "object")
        return val.toString();
    else
        return angleNumberToCssString(val);
}
exports.angleToCssString = angleToCssString;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Time
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Converts time value from the numeric representation to the CSS string. Integer
 * values are treated as milliseconds while floating numbers are treated as seconds.
 * @param val Time as a number
 */
function timeNumberToCssString(n, units) {
    return n === 0 ? "0s" : units ? n + units : Number.isInteger(n) ? n + "ms" : n + "s";
}
exports.timeNumberToCssString = timeNumberToCssString;
/**
 * Converts time style value to the CSS string.
 * @param val Time as a style property type
 */
function timeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "object")
        return val.toString();
    else
        return timeNumberToCssString(val);
}
exports.timeToCssString = timeToCssString;
/**
 * Converts animation delay style value to the CSS string.
 * @param val Animation delay value
 */
function multiTimeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return timeNumberToCssString(val);
    else if (Array.isArray(val))
        return arrayToCssString(val, timeToCssString);
    else
        return val.toString();
}
exports.multiTimeToCssString = multiTimeToCssString;
/**
 * Converts resolution value from the numeric representation to the CSS string. Integer
 * values are treated as DPI while floating numbers are treated as DPCM.
 * @param val Resolution as a number
 */
function resolutionToCssString(n, units) {
    return n === 0 ? "0" : units ? n + units : Number.isInteger(n) ? n + "dpi" : n + "dpcm";
}
exports.resolutionToCssString = resolutionToCssString;
/**
 * Converts size style value to the CSS string.
 * @param val Size as a style property type
 */
function sizeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (typeof val === "object")
        return objectToCssString(val, false, ["w", lengthToCssString], ["h", lengthToCssString]);
    // else if (Array.isArray( val))
    //     return lengthToCssString( val[0]) + " " + lengthToCssString( val[1]);
    else
        return lengthToCssString(val);
}
exports.sizeToCssString = sizeToCssString;
/**
 * Converts multi-part size style property to the CSS string.
 * @param val Array of length style values
 */
function multiSizeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return arrayToCssString(val, sizeToCssString);
    else
        return sizeToCssString(val);
}
exports.multiSizeToCssString = multiSizeToCssString;
/**
 * Converts single position style value to the CSS string.
 * @param val Size as a style property type
 */
function positionToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (typeof val === "object") {
        if ("xedge" in val)
            return objectToCssString(val, false, "xedge", ["x", lengthToCssString], "yedge", ["y", lengthToCssString]);
        else
            return objectToCssString(val, false, ["x", lengthToCssString], ["y", lengthToCssString]);
    }
    else
        return lengthToCssString(val);
}
exports.positionToCssString = positionToCssString;
/**
 * Converts multi-part position style values to the CSS string.
 * @param val Array of length style values
 */
function multiPositionToCssString(val) {
    if (Array.isArray(val))
        return arrayToCssString(val, positionToCssString);
    else
        return positionToCssString(val);
}
exports.multiPositionToCssString = multiPositionToCssString;
/**
 * Converts the given object to a CSS string.
 * @param val Object to convert to string.
 * @param usePropNames Flag indicating whether the names of the object's proprties should be added to the string.
 * @param propsAndFuncs Array of property names and optionally functions. The order of the names determines in
 *     which oprder the properties should be added to the string. If a function is present for the property,
 *     it will be used to convert the property's value to the string. If a function is not present, then the
 *     property value should be converted to the string using the toString method.
 */
function objectToCssString(val, usePropNames, ...propsAndFuncs) {
    if (val == null || propsAndFuncs.length === 0)
        return null;
    let s = "";
    for (let propAndFunc in propsAndFuncs) {
        let propName = typeof propAndFunc === "string" ? propAndFunc : propAndFunc[0];
        let func = typeof propAndFunc === "string" ? undefined : propAndFunc[1];
        let propVal = val[propName];
        if (propVal == null)
            continue;
        if (s.length > 0)
            s += " ";
        if (usePropNames)
            s += propName;
        if (func)
            s += " " + func(propVal);
        else if (propVal != null)
            s += " " + propVal;
    }
    return s;
}
exports.objectToCssString = objectToCssString;


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
const CustomVar_1 = __webpack_require__(/*! ../rules/CustomVar */ "./src/rules/CustomVar.ts");
const StyleFuncs_1 = __webpack_require__(/*! ./StyleFuncs */ "./src/styles/StyleFuncs.ts");
/**
 * The StringProxy class encapsulates a string, which is returned via the standard toString()
 * method. All CSS properties should accept string as the type of their value even if normally
 * they accept other types (e.g a set of string literals as `"red" | "green" | ...` for the
 * color) property. This is because in addition to their normal values any property
 * can use custom CSS property in the form `var(--propname)`. However, if we add string type
 * to the set of string literals (e.g. `"red" | "green" | string`), this throws off the
 * Intellisense and it doesn't prompt developers for the possible values. The StringProxy
 * can be used instead of string (e.g. `"row" | "column" | StringProxy`) and this solves
 * the Intellisense issue.
 */
class StringProxy {
    constructor(s) {
        this.s = s;
    }
    stringProxyToCssString() {
        return this.s == null ? "" : typeof this.s === "string" ? this.s : this.s.toString();
    }
    toString() {
        return this.stringProxyToCssString();
    }
}
exports.StringProxy = StringProxy;
/**
 * The VarValue class encapsulates a usage of the CSS `var` function for getting a value of a
 * custom CSS property.
 */
class VarValue {
    constructor(varDef, fallbackValue) {
        this.varDef = varDef;
        this.fallbackValue = fallbackValue;
    }
    varValueToCssString() {
        let varName = typeof this.varDef === "string" ? this.varDef : this.varDef.varName;
        let s = `var(--${varName}`;
        if (this.fallbackValue) {
            s += ",";
            if (this.fallbackValue instanceof CustomVar_1.CustomVar)
                s += new VarValue(this.fallbackValue);
            else if (typeof this.fallbackValue === "string" || this.fallbackValue instanceof StringProxy || typeof this.varDef === "string")
                s += this.fallbackValue;
            else
                s += StyleFuncs_1.stylePropToCssString(this.varDef.templatePropName, this.fallbackValue, true);
        }
        return s + ")";
    }
    toString() {
        return this.varValueToCssString();
    }
}
exports.VarValue = VarValue;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvaGVscGVycy9TZWxlY3RvckZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9oZWxwZXJzL1NlbGVjdG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2hlbHBlcnMvdHNoLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQ2xhc3NSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9DdXN0b21WYXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0ZvbnRGYWNlUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JvdXBSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9JRFJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0ltcG9ydFJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL01lZGlhUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvUnVsZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvUnVsZVR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9TZWxlY3RvclJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1N0eWxlUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3VwcG9ydHNSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9UYWdSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zY29wZS9TY29wZVR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zY29wZS9TdHlsZVNjb3BlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zY29wZS9Uc3NNYW5hZ2VyLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvQ29sb3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Gb250RmFjZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvTWVkaWFGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1N0eWxlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9VdGlsRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9VdGlsVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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MEM7SUFDbkMsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRCxvQ0FBb0M7SUFDN0IsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRCxxQ0FBcUM7SUFDOUIsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRCxxQ0FBcUM7SUFDOUIsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRDswQ0FDc0M7SUFDL0IsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRCwwRkFBMEY7SUFDbkYsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRDsyQ0FDdUM7SUFDaEMsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRCx5RkFBeUY7SUFDbEYsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVqRCxxRUFBcUU7SUFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVuRCx3RUFBd0U7SUFDakUsTUFBTSxDQUFDLEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUVuRCxvRkFBb0Y7SUFDN0UsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFTLElBQUksT0FBTyxDQUFDLEdBQUcsTUFBTSxD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QUksQ0FBQyxhQUFhLFlBQVkscUJBQVM7Z0JBQ3ZDLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7aUJBQ3RDLElBQUksT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxZQUFZLFdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUTtnQkFDM0gsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7O2dCQUV4QixDQUFDLElBQUksaUNBQW9CLENBQUcsSUFBSSxDQUFDLE1BQXVCLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1RztRQUVELE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBRU0sUUFBUTtRQUVYLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUlKO0FBakNELDRCQWlDQyIsImZpbGUiOiJtaW1jc3MuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbWNzc1R5cGVzLnRzXCIpO1xuIiwiaW1wb3J0IHtJU2VsZWN0b3IsIElFbXB0eVNlbGVjdG9yLCBTZWxlY3RvclR5cGUsIFNlbGVjdG9yVG9rZW5UeXBlLCBBdHRyU2VsZWN0b3JPcGVyYXRpb24sIEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsIFNlbGVjdG9yQ29tYmluYXRvcn0gZnJvbSBcIi4vU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7SVRhZ1J1bGUsIElDbGFzc1J1bGUsIElJRFJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1RhZ1J1bGV9IGZyb20gXCIuLi9ydWxlcy9UYWdSdWxlXCJcclxuaW1wb3J0IHtDbGFzc1J1bGV9IGZyb20gXCIuLi9ydWxlcy9DbGFzc1J1bGVcIlxyXG5pbXBvcnQge0lEUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0lEUnVsZVwiXHJcbmltcG9ydCB7U3RyaW5nUHJveHl9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHBvc3NpYmxlIHBzZXVkbyBjbGFzc2VzICovXHJcbmV4cG9ydCB0eXBlIHhQc2V1ZG9DbGFzcyA9XHJcblx0Ly8gXCJkaXIoIHM6IFwicnRsXCIgfCBcImx0clwiKVwiIHxcclxuXHQvLyBcImhhcyggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpoYXMoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHQvLyBcImhvc3QoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aG9zdCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdC8vIFwiaG9zdENvbnRleHQoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aG9zdC1jb250ZXh0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0XCI6aG92ZXJcIiB8XHJcblx0XCI6aW5kZXRlcm1pbmF0ZVwiIHxcclxuXHRcIjppbi1yYW5nZVwiIHxcclxuXHRcIjppbnZhbGlkXCIgfFxyXG5cdC8vIFwiaXMoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aXMoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHQvLyBcImxhbmcoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bGFuZygke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdC8vIFwibm90KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm5vdCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdC8vIFwibnRoQ2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bnRoLWNoaWxkKCR7dGhpcy5udGgoIGEsIGIpfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHQvLyBcIm50aExhc3RDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpudGgtbGFzdC1jaGlsZCgke3RoaXMubnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0Ly8gXCJudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1sYXN0LW9mLXR5cGUoJHt0aGlzLm50aCggYSwgYil9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdC8vIFwibnRoT2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1vZi10eXBlKCR7dGhpcy5udGgoIGEsIGIpfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHQvLyBcIndoZXJlKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOndoZXJlKCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0XCJcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcG9zc2libGUgcHNldWRvIGVsZW1lbnRzICovXHJcbmV4cG9ydCB0eXBlIHhQc2V1ZG9FbGVtZW50ID1cclxuXHQvLyBwYXJ0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOjpwYXJ0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0Ly8gc2xvdHRlZCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDo6c2xvdHRlZCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdFwiXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgc2VsZWN0b3IgY2xhc3MgZW5jYXBzdWxhdGVzIGFsbCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgYnVpbGRpbmcgYSBDU1Mgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3IgaW1wbGVtZW50cyBJRW1wdHlTZWxlY3RvciwgSVNlbGVjdG9yXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGluaXREYXRhPzogU2VsZWN0b3JUeXBlKVxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KGluaXREYXRhKSlcclxuXHRcdFx0dGhpcy5idWYgPSBpbml0RGF0YS5zbGljZSgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmJ1ZiA9IFtpbml0RGF0YV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdG9yIGNvbWJpbmF0b3JzXHJcblx0cHVibGljIGdldCBhbmQoKTogSUVtcHR5U2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBTZWxlY3RvckNvbWJpbmF0b3IuQW5kKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGNoaWxkKCk6IElFbXB0eVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggU2VsZWN0b3JDb21iaW5hdG9yLkNoaWxkKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGRlc2NlbmRhbmQoKTogSUVtcHR5U2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBTZWxlY3RvckNvbWJpbmF0b3IuRGVzY2VuZGFuZCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBzaWJsaW5nKCk6IElFbXB0eVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggU2VsZWN0b3JDb21iaW5hdG9yLlNpYmxpbmcpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgYWRqYWNlbnQoKTogSUVtcHR5U2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBTZWxlY3RvckNvbWJpbmF0b3IuQW5kKTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcblx0cHVibGljIHJhdyggcmF3Pzogc3RyaW5nKTogSVNlbGVjdG9yXHJcblx0e1xyXG5cdFx0dGhpcy5idWYucHVzaCggcmF3KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgYWxsKCBucz86IHN0cmluZyk6IElTZWxlY3RvclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmLnB1c2goIG5zID09IG51bGwgPyBcIipcIiA6IGAke25zfXwqYCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIHRhZyggdGFnOiBzdHJpbmcgfCBJVGFnUnVsZSk6IElTZWxlY3RvclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmLnB1c2goIHRhZyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIGNsYXNzKCBjbHM6IHN0cmluZyB8IElDbGFzc1J1bGUpOiBJU2VsZWN0b3JcclxuXHR7XHJcblx0XHR0aGlzLmJ1Zi5wdXNoKCB0eXBlb2YgY2xzID09PSBcInN0cmluZ1wiICYmICFjbHMuc3RhcnRzV2l0aChcIi5cIikgPyBcIi5cIiArIGNscyA6IGNscyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIGlkKCBpZDogc3RyaW5nIHwgSUlEUnVsZSk6IElTZWxlY3RvclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmLnB1c2goIHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIiAmJiAhaWQuc3RhcnRzV2l0aChcIiNcIikgPyBcIiNcIiArIGlkIDogaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHB1YmxpYyBhdHRyKCBhdHRyTmFtZTogc3RyaW5nLCBvcD86IEF0dHJTZWxlY3Rvck9wZXJhdGlvbiB8IEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsXHJcblx0XHRcdFx0XHR2YWx1ZT86IHN0cmluZywgY2FzZUluc2Vuc2l0aXZlPzogYm9vbGVhbiwgY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4pOiBJU2VsZWN0b3JcclxuXHR7XHJcblx0XHR0aGlzLmJ1Zi5wdXNoKCBhdHRyKCBhdHRyTmFtZSwgb3AsIHZhbHVlLCBjYXNlSW5zZW5zaXRpdmUsIGNhc2VTZW5zaXRpdmUpKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Ly8gcHNldWRvIGNsYXNzZXNcclxuXHRwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjphY3RpdmVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBhbnlMaW5rKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmFueS1saW5rXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgYmxhbmsoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6YmxhbmtcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBjaGVja2VkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmNoZWNrZWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBkZWZhdWx0KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmRlZmF1bHRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBkZWZpbmVkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmRlZmluZWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGRpciggczogXCJydGxcIiB8IFwibHRyXCIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpkaXIoJHtzfSlcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBkaXNhYmxlZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpkaXNhYmxlZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGVtcHR5KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmVtcHR5XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZW5hYmxlZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjplbmFibGVkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZmlyc3QoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Zmlyc3RcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmaXJzdENoaWxkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZpcnN0LWNoaWxkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZmlyc3RPZlR5cGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Zmlyc3Qtb2YtdHlwZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZ1bGxzY3JlZW4oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6ZnVsbHNjcmVlblwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZvY3VzKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZvY3VzXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZm9jdXNWaXNpYmxlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZvY3VzLXZpc2libGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmb2N1c1dpdGhpbigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpmb2N1cy13aXRoaW5cIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGhhcyggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpoYXMoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgaG9zdCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpob3N0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGhvc3RDb250ZXh0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOmhvc3QtY29udGV4dCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgaG92ZXIoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6aG92ZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBpbmRldGVybWluYXRlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmluZGV0ZXJtaW5hdGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBpblJhbmdlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmluLXJhbmdlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgaW52YWxpZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjppbnZhbGlkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBpcyggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDppcygke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBsYW5nKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOmxhbmcoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGxhc3RDaGlsZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpsYXN0LWNoaWxkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgbGFzdE9mVHlwZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpsYXN0LW9mLXR5cGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBsZWZ0KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmxlZnRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBsaW5rKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmxpbmtcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIG5vdCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpub3QoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgbnRoQ2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bnRoLWNoaWxkKCR7bnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIG50aExhc3RDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpudGgtbGFzdC1jaGlsZCgke250aCggYSwgYil9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1sYXN0LW9mLXR5cGUoJHtudGgoIGEsIGIpfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgbnRoT2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1vZi10eXBlKCR7bnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBvbmx5Q2hpbGQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b25seS1jaGlsZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IG9ubHlPZlR5cGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b25seS1vZi10eXBlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgb3B0aW9uYWwoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b3B0aW9uYWxcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBvdXRPZlJhbmdlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOm91dC1vZi1yYW5nZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHBsYWNlaG9sZGVyU2hvd24oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cGxhY2Vob2xkZXItc2hvd25cIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByZWFkT25seSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpyZWFkLW9ubHlcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByZWFkV3JpdGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cmVhZC13cml0ZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHJlcXVpcmVkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnJlcXVpcmVkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgcmlnaHQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cmlnaHRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByb290KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnJvb3RcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBzY29wZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpzY29wZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHRhcmdldCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjp0YXJnZXRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCB2YWxpZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjp2YWxpZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHZpc2l0ZWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6dmlzaXRlZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgd2hlcmUoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6d2hlcmUoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcblx0Ly8gcHNldWRvIGVsZW1lbnRzXHJcblx0cHVibGljIGdldCBhZnRlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6YWZ0ZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBiYWNrZHJvcCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6YmFja2Ryb3BcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBiZWZvcmUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmJlZm9yZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGN1ZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Y3VlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZmlyc3RMZXR0ZXIoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmZpcnN0LWxldHRlclwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZpcnN0TGluZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Zmlyc3QtbGluZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGdyYW1tYXJFcnJvcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Z3JhbW1hci1lcnJvclwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IG1hcmtlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6bWFya2VyXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBwYXJ0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOjpwYXJ0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBwbGFjZWhvbGRlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6cGxhY2Vob2xkZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBzZWxlY3Rpb24oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OnNlbGVjdGlvblwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgc2xvdHRlZCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDo6c2xvdHRlZCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgc3BlbGxpbmdFcnJvcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6c3BlbGxpbmctZXJyb3JcIik7IHJldHVybiB0aGlzOyB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVydHMgdGhlIGFjY3VtdWxhdGVkIHNlbGVjdG9yIHRva2VucyBpbnRvIGZ1bGwgc2VsZWN0b3Igc3RyaW5nLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5idWYubWFwKCAodG9rZW4pID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodG9rZW4gaW5zdGFuY2VvZiBUYWdSdWxlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRva2VuLnRhZ05hbWU7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBDbGFzc1J1bGUpXHJcblx0XHRcdFx0XHRyZXR1cm4gXCIuXCIgKyB0b2tlbi5jbGFzc05hbWU7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBJRFJ1bGUpXHJcblx0XHRcdFx0XHRyZXR1cm4gXCIjXCIgKyB0b2tlbi5pZE5hbWU7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBTdHJpbmdQcm94eSlcclxuXHRcdFx0XHRcdHJldHVybiB0b2tlbi50b1N0cmluZygpO1xyXG5cdFx0XHRcdGVsc2UgaWYgKHRva2VuIGluc3RhbmNlb2YgU2VsZWN0b3IpXHJcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW4udG9Dc3NTdHJpbmcoKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW47XHJcblx0XHRcdH1cclxuXHRcdCkuam9pbihcIlwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW50ZXJuYWwgYnVmZmVyLCB3aGVyZSBzZWxlY3RvciB0b2tlbnMgYXJlIGFjY3VtdWxhdGVkLlxyXG5cdHByaXZhdGUgYnVmOiAoc3RyaW5nIHwgSVNlbGVjdG9yIHwgU2VsZWN0b3JUb2tlblR5cGUpW107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFJldHVybnMgdGhlIFwibnRoXCIgbm90YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG50aCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gYiA9PSBudWxsID8gYS50b1N0cmluZygpIDogYCR7YX1uJHtiID49IDAgPyBgKyR7Yn1gIDogYC0key1ifWB9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogUmV0dXJucyB0aGUgYXR0cmlidXRlIHNlbGVjdG9yIHRva2VuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRyKCBhdHRyTmFtZTogc3RyaW5nLCBvcD86IEF0dHJTZWxlY3Rvck9wZXJhdGlvbiB8IEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsXHJcblx0XHRcdFx0dmFsdWU/OiBzdHJpbmcsIGNhc2VJbnNlbnNpdGl2ZT86IGJvb2xlYW4sIGNhc2VTZW5zaXRpdmU/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuXHRsZXQgb3BBbmRWYWwgPSBvcCA/IGAke29wfVwiJHt2YWx1ZX1cImAgOiBcIlwiO1xyXG5cdGxldCBjYXNlU2lnbiA9IGNhc2VJbnNlbnNpdGl2ZSA/IFwiIGlcIiA6IGNhc2VTZW5zaXRpdmUgPyBcIiBzXCIgOiBcIlwiO1xyXG5cdHJldHVybiBgWyR7YXR0ck5hbWV9JHtvcEFuZFZhbH0ke2Nhc2VTaWdufV1gO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge0lUYWdSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtTdHJpbmdQcm94eX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjb21wbGV0ZSBDU1Mgc2VsZWN0b3IgdGhhdCBjYW4gYmUgZWl0aGVyIHVzZWQgYXMgaXMgb3IgY2FuIGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgc2VsZWN0b3JzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0b3IgZXh0ZW5kcyBJQ29tcG91bmRTZWxlY3RvclxyXG57XHJcblx0cmVhZG9ubHkgYW5kOiBJRW1wdHlTZWxlY3RvcjtcclxuXHRyZWFkb25seSBjaGlsZDogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZGVzY2VuZGFuZDogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc2libGluZzogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYWRqYWNlbnQ6IElFbXB0eVNlbGVjdG9yO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZWxlY3RvciAqL1xyXG5cdHRvQ3NzU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHN0YXJ0aW5nIHBvaW50IGluIHRoZSBzZWxlY3RvciBidWlsZGluZyBwcm9jZXNzLiBUaGlzIHNlbGVjdG9yIGNhbm5vdCBiZSB1c2VkIGFzXHJcbiAqIGlzIGJlY2F1c2UgaXQgZG9lc24ndCBjb250YWluIGFueSBzZWxlY3Rpb24gY29udGVudCB5ZXQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbXB0eVNlbGVjdG9yIGV4dGVuZHMgSUNvbXBvdW5kU2VsZWN0b3Jcclxue1xyXG5cdGFsbCggbnM/OiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0dGFnKCB0YWc6IHN0cmluZyB8IElUYWdSdWxlKTogSVNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcG9pbnQgaW4gc2VsZWN0b3IgYnVpbGRpbmcsIHdoaWNoIGFsbG93cyBjbGFzcywgSUQsIGF0dHJpYnV0ZSwgcHNldWRvLWNsYXNzIGFuZFxyXG4gKiBwc2V1ZG8gZWxlbWVudCBzZWxlY3RvcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb3VuZFNlbGVjdG9yXHJcbntcclxuXHRjbGFzcyggY2xzOiBzdHJpbmcgfCBJQ2xhc3NSdWxlKTogSVNlbGVjdG9yO1xyXG5cdGlkKCBpZDogc3RyaW5nIHwgSUlEUnVsZSk6IElTZWxlY3RvcjtcclxuXHRhdHRyKCBhdHRyTmFtZTogc3RyaW5nLCBvcD86IEF0dHJTZWxlY3Rvck9wZXJhdGlvbiB8IEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsXHJcblx0XHRcdFx0XHR2YWx1ZT86IHN0cmluZywgY2FzZUluc2Vuc2l0aXZlPzogYm9vbGVhbik6IElTZWxlY3RvcjtcclxuXHJcblx0Ly8gcHNldWRvIGNsYXNzZXNcclxuXHRyZWFkb25seSBhY3RpdmU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBhbnlMaW5rOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYmxhbms6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBjaGVja2VkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZGVmYXVsdDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGRlZmluZWQ6IElTZWxlY3RvcjtcclxuXHRkaXIoIHM6IFwicnRsXCIgfCBcImx0clwiKTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGRpc2FibGVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZW1wdHk6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBlbmFibGVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3Q6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdENoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3RPZlR5cGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmdWxsc2NyZWVuOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZm9jdXM6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmb2N1c1Zpc2libGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmb2N1c1dpdGhpbjogSVNlbGVjdG9yO1xyXG5cdGhhcyggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdGhvc3QoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRob3N0Q29udGV4dCggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGhvdmVyOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgaW5kZXRlcm1pbmF0ZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGluUmFuZ2U6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBpbnZhbGlkOiBJU2VsZWN0b3I7XHJcblx0aXMoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRsYW5nKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgbGFzdENoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgbGFzdE9mVHlwZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGxlZnQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBsaW5rOiBJU2VsZWN0b3I7XHJcblx0bm90KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0bnRoQ2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvcjtcclxuXHRudGhMYXN0Q2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvcjtcclxuXHRudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3I7XHJcblx0bnRoT2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb25seUNoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb25seU9mVHlwZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IG9wdGlvbmFsOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb3V0T2ZSYW5nZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHBsYWNlaG9sZGVyU2hvd246IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSByZWFkT25seTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHJlYWRXcml0ZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHJlcXVpcmVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcmlnaHQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSByb290OiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc2NvcGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSB0YXJnZXQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSB2YWxpZDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHZpc2l0ZWQ6IElTZWxlY3RvcjtcclxuXHR3aGVyZSggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cclxuXHQvLyBwc2V1ZG8gZWxlbWVudHNcclxuXHRyZWFkb25seSBhZnRlcjogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGJhY2tkcm9wOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYmVmb3JlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgY3VlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3RMZXR0ZXI6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdExpbmU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBncmFtbWFyRXJyb3I6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBtYXJrZXI6IElTZWxlY3RvcjtcclxuXHRwYXJ0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcGxhY2Vob2xkZXI6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBzZWxlY3Rpb246IElTZWxlY3RvcjtcclxuXHRzbG90dGVkKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc3BlbGxpbmdFcnJvcjogSVNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHBvc3NpYmxlIHNlbGVjdG9yIGNvbWJpbmF0b3JzICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yQ29tYmluYXRvclR5cGUgPSBcIixcIiB8IFwiID4gXCIgfCBcIiBcIiB8IFwiIH4gXCIgfCBcIiArIFwiO1xyXG5cclxuLyoqIFJlcHJlc2VudHMgcG9zc2libGUgc2VsZWN0b3IgY29tYmluYXRvcnMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gU2VsZWN0b3JDb21iaW5hdG9yXHJcbntcclxuXHRBbmQgPSBcIiwgXCIsXHJcblx0Q2hpbGQgPSBcIiA+IFwiLFxyXG5cdERlc2NlbmRhbmQgPSBcIiBcIixcclxuXHRTaWJsaW5nID0gXCIgfiBcIixcclxuXHRBZGphY2VudCA9IFwiICsgXCIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcG9zc2libGUgb3BlcmF0aW9ucyBmb3IgYXR0cmlidXRlIHNlbGVjdG9yICovXHJcbmV4cG9ydCB0eXBlIEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUgPSBcIj1cIiB8IFwifj1cIiB8IFwifD1cIiB8IFwiXj1cIiB8IFwiJD1cIiB8IFwiKj1cIjtcclxuXHJcbi8qKiBSZXByZXNlbnRzIHBvc3NpYmxlIG9wZXJhdGlvbnMgZm9yIGF0dHJpYnV0ZSBzZWxlY3RvciAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBdHRyU2VsZWN0b3JPcGVyYXRpb25cclxue1xyXG5cdE1hdGNoID0gXCI9XCIsXHJcblx0V29yZCA9IFwifj1cIixcclxuXHRTdWJDb2RlID0gXCJ8PVwiLFxyXG5cdFN0YXJ0c1dpdGggPSBcIl49XCIsXHJcblx0RW5kc1dpdGggPSBcIiQ9XCIsXHJcblx0Q29udGFpbnMgPSBcIio9XCIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcG9zc2libGUgcHNldWRvIGNsYXNzZXMgKi9cclxuZXhwb3J0IHR5cGUgUHNldWRvQ2xhc3MgPSBcIjphY3RpdmVcIiB8IFwiOmFueS1saW5rXCIgfCBcIjpibGFua1wiIHwgXCI6Y2hlY2tlZFwiIHwgXCI6ZGVmYXVsdFwiIHwgXCI6ZGVmaW5lZFwiIHxcclxuXHRcIjpkaXNhYmxlZFwiIHwgXCI6ZW1wdHlcIiB8IFwiOmVuYWJsZWRcIiB8IFwiOmZpcnN0XCIgfCBcIjpmaXJzdC1jaGlsZFwiIHwgXCI6Zmlyc3Qtb2YtdHlwZVwiIHwgXCI6ZnVsbHNjcmVlblwiIHxcclxuXHRcIjpmb2N1c1wiIHwgXCI6Zm9jdXMtdmlzaWJsZVwiIHwgXCI6Zm9jdXMtV2l0aGluXCIgfCBcIjpob3ZlclwiIHwgXCI6aW5kZXRlcm1pbmF0ZVwiIHwgXCI6aW4tcmFuZ2VcIiB8IFwiOmludmFsaWRcIiB8XHJcblx0XCI6bGFzdC1jaGlsZFwiIHwgXCI6bGFzdC1vZi10eXBlXCIgfCBcIjpsZWZ0XCIgfCBcIjpsaW5rXCIgfCBcIjpvbmx5LWNoaWxkXCIgfCBcIjpvbmx5LW9mLXR5cGVcIiB8IFwiOm9wdGlvbmFsXCIgfFxyXG5cdFwiOm91dC1vZi1yYW5nZVwiIHwgXCI6cGxhY2Vob2xkZXItc2hvd25cIiB8IFwiOnJlYWQtb25seVwiIHwgXCI6cmVhZC13cml0ZVwiIHwgXCI6cmVxdWlyZWRcIiB8IFwiOnJpZ2h0XCIgfFxyXG5cdFwiOnJvb3RcIiB8IFwiOnNjb3BlXCIgfCBcIjp0YXJnZXRcIiB8IFwiOnZhbGlkXCIgfCBcIjp2aXNpdGVkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHBvc3NpYmxlIHBzZXVkbyBlbGVtZW50cyAqL1xyXG5leHBvcnQgdHlwZSBQc2V1ZG9FbGVtZW50ID0gXCI6OmFmdGVyXCIgfCBcIjo6YmFja2Ryb3BcIiB8IFwiOjpiZWZvcmVcIiB8IFwiOjpjdWVcIiB8IFwiOjpmaXJzdExldHRlclwiIHxcclxuXHRcIjo6Zmlyc3RMaW5lXCIgfCBcIjo6Z3JhbW1hckVycm9yXCIgfCBcIjo6bWFya2VyXCIgfCBcIjo6cGxhY2Vob2xkZXJcIiB8IFwiOjpzZWxlY3Rpb25cIiB8IFwiOjpzcGVsbGluZ0Vycm9yXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSBzZWxlY3RvciB0b2tlbiAqL1xyXG5leHBvcnQgdHlwZSBTZWxlY3RvclRva2VuVHlwZSA9IElUYWdSdWxlIHwgSUNsYXNzUnVsZSB8IElJRFJ1bGUgfFxyXG5cdFNlbGVjdG9yQ29tYmluYXRvciB8IFNlbGVjdG9yQ29tYmluYXRvclR5cGUgfFxyXG5cdFBzZXVkb0NsYXNzIHwgUHNldWRvRWxlbWVudCB8XHJcblx0U3RyaW5nUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNlbGVjdG9yICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yVHlwZSA9IHN0cmluZyB8IElTZWxlY3RvciB8IFNlbGVjdG9yVG9rZW5UeXBlIHwgU2VsZWN0b3JUb2tlblR5cGVbXTtcclxuXHJcblxyXG5cclxuaW1wb3J0IHtTZWxlY3RvciwgbnRoLCBhdHRyfSBmcm9tIFwiLi9TZWxlY3RvckZ1bmNzXCJcclxuXHJcbi8qKlxyXG4gKiBIZWxwZXIgY2xhc3MgZm9yIGNyZWF0aW5nIGVsZW1lbnRzIG9mIGEgc2VsZWN0b3IgKHNlbGVjdG9yIHRva2VucykuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VsZWN0b3JIZWxwZXJcclxue1xyXG5cdHB1YmxpYyBzdGF0aWMgcmF3KCByYXc/OiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggcmF3KTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgYWxsKCBucz86IHN0cmluZykgeyByZXR1cm4gbnMgPT0gbnVsbCA/IFwiKlwiIDogYCR7bnN9fCpgOyB9XHJcblx0cHVibGljIHN0YXRpYyBhdHRyKCBhdHRyTmFtZTogc3RyaW5nLCBvcD86IEF0dHJTZWxlY3Rvck9wZXJhdGlvbiB8IEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsXHJcblx0XHRcdFx0XHR2YWx1ZT86IHN0cmluZywgY2FzZUluc2Vuc2l0aXZlPzogYm9vbGVhbiwgY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4pXHJcblx0XHR7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGF0dHIoIGF0dHJOYW1lLCBvcCwgdmFsdWUsIGNhc2VJbnNlbnNpdGl2ZSwgY2FzZVNlbnNpdGl2ZSkpOyB9XHJcblx0cHVibGljIHN0YXRpYyB0YWcoIHM6IHN0cmluZykgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBzKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgcnRsKCkgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBcIjpkaXIocnRsKVwiKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgbHRyKCkgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBcIjpkaXIobHRyKVwiKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgaGFzKCBzOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDpoYXMoJHtzfSlgKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgaG9zdCggczogc3RyaW5nKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6aG9zdCgke3N9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBob3N0Q29udGV4dCggczogc3RyaW5nKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6aG9zdC1jb250ZXh0KCR7c30pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIGlzKCBzOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDppcygke3N9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBsYW5nKCBzOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDpsYW5nKCR7c30pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIG5vdCggczogc3RyaW5nKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6bm90KCR7c30pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIG50aENoaWxkKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDpudGgtY2hpbGQoJHtudGgoIGEsIGIpfSlgKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgbnRoTGFzdENoaWxkKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDpudGgtbGFzdC1jaGlsZCgke250aCggYSwgYil9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDpudGgtbGFzdC1vZi10eXBlKCR7bnRoKCBhLCBiKX0pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIG50aE9mVHlwZSggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6bnRoLW9mLXR5cGUoJHtudGgoIGEsIGIpfSlgKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgd2hlcmUoIHM6IHN0cmluZykgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBgOndoZXJlKCR7c30pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIHBhcnQoIHM6IHN0cmluZykgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBgOjpwYXJ0KCR7c30pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIHNsb3R0ZWQoIHM6IHN0cmluZykgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBgOjpzbG90dGVkKCR7c30pYCk7IH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBlbXB0eSBzZWxlY3RvciBmcm9tIHdoaWNoIHNlbGVjdG9yIGJ1aWxkaW5nIHByb2Nlc3Mgc3RhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzZWxlY3RvcigpOiBJRW1wdHlTZWxlY3RvciB7IHJldHVybiBuZXcgU2VsZWN0b3IoKTsgfVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1N0cmluZ1Byb3h5LCBWYXJWYWx1ZSwgRXh0ZW5kZWRQcm9wVHlwZSwgTGVuZ3RoVW5pdHMsIEFuZ2xlVW5pdHMsIFRpbWVVbml0c30gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBVdGlsRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIlxyXG5pbXBvcnQgKiBhcyBDb2xvclR5cGVzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBDb2xvckZ1bmNzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge1B1cmVTdHlsZXNldCwgSUN1c3RvbVZhbH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHtzdHlsZVByb3BUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCI7XHJcbmltcG9ydCB7SUN1c3RvbVZhcn0gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgbXNoIGNsYXNzIGNvbnRhaW5zIHN0YXRpYyBoZWxwZXIgZnVuY3Rpb25zIHRoYXQgYXJlIHVzZWQgd2hlbmV2ZXIgdGhlcmUgaXMgYSBuZWVkIHRvIHByb2R1Y2VcclxuICogQ1NTIHN0cmluZyB2YWx1ZSBiYXNlZCBvbiBtb3JlIGNvbXBsaWNhdGVkIHR5cGUocykuIFRoZSBtYWpvcml0eSBvZiB0aGVzZSBmdW5jdGlvbnMgcmV0dXJuXHJcbiAqIFN0cmluZ1Byb3h5IG9iamVjdCBzbyB0aGF0IHRoZXkgY2FuIGJlIHVzZWQgaW4gc3R5bGVzZXQgcHJvcGVydGllcyBhc3NpZ25tZW50cywgZm9yIGV4YW1wbGU6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogPGRpdiBzdHlsZT17eyBjb2xvcjogdHNoLnJnYiggMjU1LCAxMjgsIDY0KSB9fVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjbGFzcyB0c2hcclxue1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBVdGlsaXRpZXNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIFN0cmluZ1Byb3h5IG9iamVjdCBmcm9tIHRoZSBnaXZlbiBzdHJpbmcgb3IgYW5vdGhlciBTdHJpbmdQcm94eSBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmF3KCBzOiBzdHJpbmcgfCBTdHJpbmdQcm94eSk6IFN0cmluZ1Byb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdQcm94eShzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byBhIENTUyBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gc3R5bGVQcm9wTmFtZSBTdHlsZSBwcm9wZXJ0eSBuYW1lIHRoYXQgZGV0ZXJtaW5lcyBob3cgdGhlIHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWRcclxuICAgICAqIHRvIGEgQ1NTIGNvbXBsaWFudCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gc3R5bGVQcm9wVmFsdWUgVmFsdWUgdG8gY29udmVydC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB2YWw8SyBleHRlbmRzIGtleW9mIFB1cmVTdHlsZXNldD4oIHN0eWxlUHJvcE5hbWU6IEssIHN0eWxlUHJvcFZhbHVlOiBQdXJlU3R5bGVzZXRbS10pOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gc3R5bGVQcm9wVG9Dc3NTdHJpbmcoIHN0eWxlUHJvcE5hbWUsIHN0eWxlUHJvcFZhbHVlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gQ29sb3JzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgY29sb3Igc3BlY2lmaWVkIGFzIHJlZCwgZ3JlZW4sIGJsdWUgc2VwYXJhdGlvbiB2YWx1ZXMgYW5kIGFuIG9wdGlvbmFsIGFscGhhXHJcbiAgICAgKiBtYXNrIHRvIGEgQ1NTIGNvbG9yIHJlcHJlc2VudGF0aW9uLiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvclxyXG4gICAgICogdmFsdWVzIGluIHN0eWxlc2V0IHByb3BlcnRpZXMuIEVhY2ggY29sb3Igc2VwYXJhdGlvbiBjbmEgYmUgcmVwcmVzZW50ZWQgYXMgYSBudW1iZXIgb3IgYVxyXG4gICAgICogc3RyaW5nIHdpdGggdGhlIGZvbGxvd2luZyBtZWFuaW5nOlxyXG4gICAgICogICAtIEludGVnZXIgbnVtYmVyIDAgdG8gMjU1LlxyXG4gICAgICogICAtIEZsb2F0aW5nIG51bWJlciAwLjAgdG8gMS4wIG5vbi1pbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICAgICAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICAgICAqIFxyXG4gICAgICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gICAgICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAgICAgKiAgIC0gU3RyaW5nIHdoaWNoIGlzIHVzZWQgYXMgaXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSByIFJlZCBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIGcgR3JlZW4gc2VwYXJhdGlvbiB2YXVlLlxyXG4gICAgICogQHBhcmFtIGIgQmx1ZSBzZXBhcmF0aW9uIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmdiKCByOiBudW1iZXIgfCBzdHJpbmcsIGc6IG51bWJlciB8IHN0cmluZywgYjogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogU3RyaW5nUHJveHlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBDb2xvckZ1bmNzLnJnYiggciwgZywgYiwgYSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGNvbG9yIHNwZWNpZmllZCBhcyBodWUtc2F0dXJhdGlvbi1saWdodG5lc3MgY29tcG9uZW50cyBhbmQgYW4gb3B0aW9uYWwgYWxwaGFcclxuICAgICAqIG1hc2sgdG8gYSBDU1MgY29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXMgbWV0aG9kIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVmaW5pbmcgQ1NTIGNvbG9yXHJcbiAgICAgKiB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICAgICAqIFxyXG4gICAgICogVGhlIGFscGhhIG1hc2sgY2FuIGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxyXG4gICAgICogICAtIE51bWJlciAwIHRvIDEgaW5jbHVzaXZlLCB3aGljaCBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuXHJcbiAgICAgKiAgIC0gU3RyaW5nIHdoaWNoIGlzIHVzZWQgYXMgaXMuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBoIEh1ZSBjb21wb25lbnQgYXMgYW4gYW5nbGUgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gcyBTYXR1cmF0aW9uIGFzIGEgcGVyY2VudGFnZSB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSBsIExpZ2h0bmVzcyBjb21wb25lbnQgYXMgYSBwZXJjZW50YWdlIHZhbHVlLlxyXG4gICAgICogQHBhcmFtIGEgT3B0aW9uYWwgYWxwaGEgbWFzayBhcyBhIHBlcmNlbnRhZ2UgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciB8IHN0cmluZywgbDogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogU3RyaW5nUHJveHlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBDb2xvckZ1bmNzLmhzbCggaCwgcywgbCwgYSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGhlIGdpdmVuIGNvbG9yIGFuZCBhbiBvcHRpb25hbCBhbHBoYSBtYXNrIHRvIHRoZSBDU1MgQ29sb3IgcmVwcmVzZW50YXRpb24uIFRoaXNcclxuICAgICAqIG1ldGhvZCBzaG91bGQgYmUgdXNlZCB3aGVuIGRlZmluaW5nIENTUyBjb2xvciB2YWx1ZXMgaW4gc3R5bGVzZXQgcHJvcGVydGllcy5cclxuICAgICAqIFRoZSBjb2xvciBjYW4gYmUgc3BlY2lmaWVkIGFzIGEgbnVtZXJpYyB2YWx1ZSBvciBhcyBhIHN0cmluZyBjb2xvciBuYW1lLlxyXG4gICAgICogXHJcbiAgICAgKiBUaGUgYWxwaGEgbWFzayBjYW4gYmUgb25lIG9mIHRoZSBmb2xsb3dpbmc6XHJcbiAgICAgKiAgIC0gTnVtYmVyIDAgdG8gMSBpbmNsdXNpdmUsIHdoaWNoIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS5cclxuICAgICAqICAgLSBTdHJpbmcgd2hpY2ggaXMgdXNlZCBhcyBpcy5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIGMgXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgdHlwZW9mIENvbG9yVHlwZXMuQ29sb3JzLCBhOiBudW1iZXIgfCBzdHJpbmcpOiBTdHJpbmdQcm94eVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nUHJveHkoIENvbG9yRnVuY3MuYWxwaGEoIGMsIGEpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gUGVyY2VudFxyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIHRvIGEgcGVyY2VudCBzdHJpbmcuIE51bWJlcnMgYmV0d2VlbiAtMSBhbmQgMSBhcmUgbXVsdGlwbHllZCBieSAxMDAuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGVyY2VudCggbjogbnVtYmVyKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5wZXJjZW50TnVtYmVyVG9Dc3NTdHJpbmcoIG4pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBMZW5ndGggdW5pdHNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBxdWF0ZXJzIG9mIGFuIGluY2ggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgUSggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJRXCI7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gY2ggdW5pdHMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2goIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwiY2hcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBjYW50aW1ldGVycyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjbSggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJjbVwiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGNhbGN1bGF0ZWQgZm9udC1zaXplcyBvZiB0aGUgZWxlbWVudCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBlbSggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJlbVwiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGhlaWdodHMgb2YgbG93ZXJjYXNlIGxldHRlciAneCcgaW4gdGhlIGZvbnQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZXgoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwiZXhcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBpYyB1bml0cyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpYyggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJpY1wiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGluY2hlcyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBpbiggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJpblwiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIGxpbmUtaGVpZ2h0cyBvZiB0aGUgZWxlbWVudCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsaCggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJsaFwiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIG1pbGxpbWV0ZXJzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIG1tKCBuOiBudW1iZXIpIHsgcmV0dXJuIG4gKyBcIm1tXCI7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gcGljYXMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcGMoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwicGNcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwb2ludHMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcHQoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwicHRcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBwaXhlbHMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcHgoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwicHhcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAgICAgKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBibG9jayBheGlzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHZiKCBuOiBudW1iZXIpIHsgcmV0dXJuIG4gKyBcInZiXCI7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gMSUgb2YgdGhlIGhlaWdodCBvZiB0aGUgdmlld3BvcnQncyBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2sgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdmgoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwidmhcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiAxJSBvZiB0aGUgc2l6ZSBvZiB0aGUgaW5pdGlhbCBjb250YWluaW5nIGJsb2NrLCBpbiB0aGUgZGlyZWN0aW9uXHJcbiAgICAgKiBvZiB0aGUgcm9vdCBlbGVtZW504oCZcyBpbmxpbmUgYXhpcyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB2aSggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJ2aVwiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIDElIG9mIHRoZSB3aWR0aCBvZiB0aGUgdmlld3BvcnQncyBpbml0aWFsIGNvbnRhaW5pbmcgYmxvY2sgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdncoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwidndcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGxlbmd0aCB2YWx1ZSBpbiBmb250c2l6ZXMgb2YgdGhlIHJvb3QgZWxlbWVudCAoPGh0bWw+KSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyByZW0oIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwicmVtXCI7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyBsZW5ndGggdmFsdWUgaW4gbGluZS1oZWlnaHRzIG9mIHRoZSByb290IGVsZW1lbnQgKDxodG1sPikgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcmxoKCBuOiBudW1iZXIpIHsgcmV0dXJuIG4gKyBcInJsaFwiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHRoZSB1bml0cyB3aGljaCBhcmUgYSBzbWFsbGVyIHZhbHVlIGJldHdlZW4gdncgYW5kIHZoICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHZtYXgoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwidm1heFwiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgbGVuZ3RoIHZhbHVlIGluIHRoZSB1bml0cyB3aGljaCBhcmUgYSBsYXJnZXIgdmFsdWUgYmV0d2VlbiB2dyBhbmQgdmggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdm1pbiggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJ2bWluXCI7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGxlbmd0aCB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxlbiggbjogbnVtYmVyLCB1bml0cz86IExlbmd0aFVuaXRzKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhOdW1iZXJUb0Nzc1N0cmluZyggbiwgdW5pdHMpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBBbmdsZSB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZGVncmVlcyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkZWcoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwiZGVnXCI7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiByYWRpYW5zICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhZCggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJyYWRcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGdyYWRpYW5zICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdyYWQoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwiZ3JhZFwiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gdHVybnMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdHVybiggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJ0dXJuXCI7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGFuZ2xlIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICAgICAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBkZWdyZWVzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcmFkaWFucy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhbmdsZSggbjogbnVtYmVyLCB1bml0cz86IEFuZ2xlVW5pdHMpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFuZ2xlTnVtYmVyVG9Dc3NTdHJpbmcoIG4sIHVuaXRzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gVGltZSB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLyoqIENyZWF0ZXMgdGltZSB2YWx1ZSBpbiBzZWNvbmRzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHMoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwic1wiOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgdGltZSB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbXMoIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwibXNcIjsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGltZSB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLiBJbnRlZ2VyXHJcbiAgICAgKiB2YWx1ZXMgYXJlIHRyZWF0ZWQgYXMgbWlsbGlzZWNvbmRzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0aW1lKCBuOiBudW1iZXIsIHVuaXRzPzogVGltZVVuaXRzKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy50aW1lTnVtYmVyVG9Dc3NTdHJpbmcoIG4sIHVuaXRzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gRnJlcXVlbmN5IHVuaXRzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvKiogQ3JlYXRlcyBmcmVxdWVuY3kgdmFsdWUgaW4gSGVydHogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaHooIG46IG51bWJlcikgeyByZXR1cm4gbiArIFwiSHpcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGZyZXF1ZW5jeSB2YWx1ZSBpbiBLaWxvLUhlcnR6ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGtoeiggbjogbnVtYmVyKSB7IG4gKyBcImtIelwiOyB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIFJlc29sdXRpb24gdW5pdHNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBJICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGRwaSggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJkcGlcIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBDTSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkcGNtKCBuOiBudW1iZXIpIHsgcmV0dXJuIG4gKyBcImRwY21cIjsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIHJlc29sdXRpb24gdmFsdWUgaW4gRFBQWCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkcHB4KCBuOiBudW1iZXIpIHsgcmV0dXJuIG4gKyBcImRwcHhcIjsgfVxyXG5cclxuLyoqXHJcbiAgICAgKiBDb252ZXJ0cyByZXNvbHV0aW9uIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICAgICAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBEUEkgd2hpbGUgZmxvYXRpbmcgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBEUENNLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc29sdXRpb24oIG46IG51bWJlciwgdW5pdHM/OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLnJlc29sdXRpb25Ub0Nzc1N0cmluZyggbiwgdW5pdHMpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBGcmFjdGlvbiB1bml0cyAoZm9yIGZsZXgpXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvKiogQ3JlYXRlcyBmcmFjdGlvbiB2YWx1ZSBmb3IgZmxleCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBmciggbjogbnVtYmVyKSB7IHJldHVybiBuICsgXCJmclwiOyB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIEN1c3RvbSBDU1MgcHJvcGVydGllc1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eSBhcyBwYXJ0IG9mIGEgU3R5bGVzZXQuIFVzZSBpdCBhcyBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XHJcbiAgICAgKiBcclxuICAgICAqIGBgYHR5cGVzY3JpcHRcclxuICAgICAqIGxldCBteVN0eWxlcyA9ICRzY29wZSggY2xhc3NcclxuICAgICAqIHtcclxuICAgICAqICAgICBtYWluQ29sb3IgPSAkY3VzdG9tKCBcImNvbG9yXCIsIFwiYmxhY2tcIik7XHJcbiAgICAgKiAgICAgZGl2ID0gJHRhZyggXCJkaXZcIiwgeyAkY3VzdG9tOiBbIHRzaC5jdXN0b20oIHRoaXMubWFpbkNvbG9yLCBcImJyb3duXCIpIF0gfSlcclxuICAgICAqIH0pO1xyXG4gICAgICogYGBgXHJcbiAgICAgKiBcclxuICAgICAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byB0aGUgZm9sbG93aW5nIENTUzpcclxuICAgICAqIFxyXG4gICAgICogYGBgY3NzXHJcbiAgICAgKiA6cm9vdCB7IC0tbWFpbkNvbG9yOiBcImJsYWNrXCI7IH1cclxuICAgICAqIGRpdiB7IC0tbWFpbkNvbG9yOiBcImJyb3duXCI7IH1cclxuICAgICAqIGBgYFxyXG4gICAgICogXHJcbiAgICAgKiBUaGUgYHRzaC5jdXN0b21gIG1ldGhvZCB3aWxsIHByb2R1Y2UgYSBjb21waWxhdGlvbiBlcnJvciBpZiBhbiBpbnZhbGlkIHR5cGUgaXMgdXNlZCBmb3IgdGhlXHJcbiAgICAgKiBwcm9wZXJ0eSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjdXN0b208VD4oIHZhckRlZjogSUN1c3RvbVZhcjxUPiwgdmFyVmFsdWU6IFQpOiBJQ3VzdG9tVmFsPFQ+XHJcbiAgICB7XHJcblx0XHRyZXR1cm4geyB2YXJEZWYsIHZhclZhbHVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIENTUyB2YXIoKSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIGN1c3RvbSBwcm9wZXJ0eS5cclxuICAgICAqIFVzZSBpdCBhcyBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XHJcbiAgICAgKiBcclxuICAgICAqIGBgYHR5cGVzY3JpcHRcclxuICAgICAqIGxldCBteVN0eWxlcyA9ICRzY29wZSggY2xhc3NcclxuICAgICAqIHtcclxuICAgICAqICAgICBkZWZhdWx0Q29sb3IgPSAkY3VzdG9tKCBcImNvbG9yXCIsIFwiYmx1ZVwiKTtcclxuICAgICAqIFxyXG4gICAgICogICAgIHNpZGViYXIgPSAkY2xhc3MoIHsgY29sb3I6IHRzaC52YXIoIHRoaXMuZGVmYXVsdENvbG9yKSB9KVxyXG4gICAgICogfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB2YXI8VD4oIHZhckRlZjogSUN1c3RvbVZhcjxFeHRlbmRlZFByb3BUeXBlPFQ+PiwgZmFsbGJhY2tWYWx1ZT86IFQgfCBJQ3VzdG9tVmFyPEV4dGVuZGVkUHJvcFR5cGU8VD4+IHwgc3RyaW5nKTogVmFyVmFsdWU8VD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZhclZhbHVlKCB2YXJEZWYsIGZhbGxiYWNrVmFsdWUpIGFzIFZhclZhbHVlPFQ+O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8vIFR5cGUgZGVmaW5pdGlvbnMgZm9yIG1pbWJsXHJcblxyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9Db2xvclR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9NZWRpYVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9Gb250RmFjZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3J1bGVzL1J1bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zY29wZS9TY29wZVR5cGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnMvU2VsZWN0b3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZWxwZXJzL3RzaFwiO1xyXG4iLCJpbXBvcnQge0lBbmltYXRpb25SdWxlLCBLZXlmcmFtZSwgUnVsZVR5cGUsIElOYW1lZFJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7dHNofSBmcm9tIFwiLi4vaGVscGVycy90c2hcIlxyXG5pbXBvcnQge3N0eWxlc2V0VG9Dc3NTdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVcIjtcclxuaW1wb3J0IHtSdWxlQ29udGFpbmVyLCBJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUYWdSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSB0YWcgbmFtZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25SdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25SdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGtleWZyYW1lcz86IEtleWZyYW1lW10sIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZFJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLkFOSU1BVElPTik7XHJcblxyXG5cdFx0aWYgKGtleWZyYW1lcylcclxuXHRcdFx0dGhpcy5rZXlmcmFtZVJ1bGVzID0ga2V5ZnJhbWVzLm1hcCggKGtleWZyYW1lKSA9PiBuZXcgS2V5ZnJhbWVSdWxlKCBrZXlmcmFtZSkpO1xyXG5cclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogUnVsZUNvbnRhaW5lciwgb3duZXI6IElSdWxlQ29udGFpbmVyT3duZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdGlmICghdGhpcy5uYW1lT3ZlcnJpZGUpXHJcblx0XHRcdHRoaXMuYW5pbWF0aW9uTmFtZSA9IHRoaXMub3duZXIuZ2V0U2NvcGVkUnVsZU5hbWVkKCBydWxlTmFtZSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgdGhpcy5uYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRoaXMuYW5pbWF0aW9uTmFtZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmFuaW1hdGlvbk5hbWUgPSB0aGlzLm5hbWVPdmVycmlkZS5uYW1lO1xyXG5cclxuXHRcdGZvciggbGV0IGtleWZyYW1lUnVsZSBvZiB0aGlzLmtleWZyYW1lUnVsZXMpXHJcblx0XHRcdGtleWZyYW1lUnVsZS5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyLCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYW5pbWF0aW9uTmFtZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc05hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuYW5pbWF0aW9uTmFtZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBbmltYXRpb25SdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQW5pbWF0aW9uUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5rZXlmcmFtZVJ1bGVzID0gdGhpcy5rZXlmcmFtZVJ1bGVzLm1hcCggKGtleWZyYW1lUnVsZSkgPT4ga2V5ZnJhbWVSdWxlLmNsb25lKCkpO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggYEBrZXlmcmFtZXMgJHt0aGlzLmFuaW1hdGlvbk5hbWV9IHt9YCwgcGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cdFx0bGV0IGNzc0tleWZyYW1lc1J1bGUgPSB0aGlzLmNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVzUnVsZTtcclxuXHRcdFxyXG5cdFx0Zm9yKCBsZXQga2V5ZnJhbWVSdWxlIG9mIHRoaXMua2V5ZnJhbWVSdWxlcylcclxuXHRcdFx0Y3NzS2V5ZnJhbWVzUnVsZS5hcHBlbmRSdWxlKCBrZXlmcmFtZVJ1bGUudG9Dc3NTdHJpbmcoKSlcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBrZXlmcmFtZXMgcnVsZSAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzS2V5ZnJhbWVzUnVsZSgpOiBDU1NLZXlmcmFtZXNSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NLZXlmcmFtZXNSdWxlOyB9XHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIGNsYXNzIGFuZCBJRCBydWxlcyAqL1xyXG5cdHB1YmxpYyBrZXlmcmFtZVJ1bGVzOiBLZXlmcmFtZVJ1bGVbXTtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgYW5pbWF0aW9uIHRvIHVzZSBpbiBhbmltYXRpb24tbmFtZSBDU1MgcHJvcGVydHkuXHJcblx0cHVibGljIGFuaW1hdGlvbk5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgS2V5ZnJhbWVSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUga2V5ZnJhbWUgY2xhdXNlIGluIHRoZSBhbmltYXRpb24gcnVsZS5cclxuICovXHJcbmNsYXNzIEtleWZyYW1lUnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBrZXlmcmFtZT86IEtleWZyYW1lKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5LRVlGUkFNRSwga2V5ZnJhbWUgPyBrZXlmcmFtZVsxXSA6IHVuZGVmaW5lZCk7XHJcblxyXG5cdFx0aWYgKGtleWZyYW1lKVxyXG5cdFx0XHR0aGlzLndheXBvaW50U3RyaW5nID0gdGhpcy5wYXJzZVdheXBvaW50KCBrZXlmcmFtZVswXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwcml2YXRlIHBhcnNlV2F5cG9pbnQoIHdheXBvaW50OiBcImZyb21cIiB8IFwidG9cIiB8IG51bWJlcik6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0eXBlb2Ygd2F5cG9pbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiB3YXlwb2ludDtcclxuXHRcdGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoIHdheXBvaW50KSlcclxuXHRcdFx0cmV0dXJuIHdheXBvaW50ICsgXCIlXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0c2gucGVyY2VudCggd2F5cG9pbnQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogS2V5ZnJhbWVSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgS2V5ZnJhbWVSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdG5ld1J1bGUud2F5cG9pbnRTdHJpbmcgPSB0aGlzLndheXBvaW50U3RyaW5nO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLndheXBvaW50U3RyaW5nfSAke3N0eWxlc2V0VG9Dc3NTdHJpbmcoIHRoaXMuc3R5bGVzZXQsIHRoaXMuaW1wb3J0YW50KX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLndheXBvaW50U3RyaW5nO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSWRlbnRpZmllciBvZiB0aGUgd2F5cG9pbnQgYXMgYSBzdHJpbmcgKi9cclxuXHRwdWJsaWMgd2F5cG9pbnRTdHJpbmc6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lDbGFzc1J1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIFJ1bGVUeXBlLCBJTmFtZWRSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCI7XHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lciwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2xhc3NSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQ2xhc3NSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuQ0xBU1MsIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IFJ1bGVDb250YWluZXIsIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRpZiAoIXRoaXMubmFtZU92ZXJyaWRlKVxyXG5cdFx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMub3duZXIuZ2V0U2NvcGVkUnVsZU5hbWVkKCBydWxlTmFtZSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgdGhpcy5uYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRoaXMuY2xhc3NOYW1lID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuY2xhc3NOYW1lID0gdGhpcy5uYW1lT3ZlcnJpZGUubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY2xhc3NOYW1lOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCIuXCIgKyB0aGlzLmNsYXNzTmFtZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBDbGFzc1J1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBDbGFzc1J1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBcIi5cIiArIHRoaXMuY2xhc3NOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogT25seSBuZWVkZWQgdG8gZGlzdGluZ3Vpc2ggZnJvbSBvdGhlciBydWxlcyAqL1xyXG5cdHB1YmxpYyBnZXQgY2xhc3MoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuY2xhc3NOYW1lOyB9XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGNsYXNzIHVuZGVyIHdoaWNoIHRoZSBzdHlsZXNldCB3aWxsIGFwcGVhciBpbiB0aGUgc3R5bGUgc2hlZXQuXHJcblx0cHVibGljIGNsYXNzTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9yIG5hbWVkIG9iamVjdCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGNyZWF0ZSBhIG5hbWUgZm9yIHRoaXMgcnVsZS4gSWYgdGhpcyBwcm9wZXJ0eVxyXG5cdC8vIGlzIG5vdCBkZWZpbmVkLCB0aGUgbmFtZSB3aWxsIGJlIHVuaXF1ZWx5IGdlbmVyYXRlZC5cclxuXHRwcml2YXRlIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZFJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJQ3VzdG9tVmFyLCBSdWxlVHlwZSwgSU5hbWVkUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lciwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcbmltcG9ydCB7RXh0ZW5kZWRQcm9wVHlwZX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuaW1wb3J0IHtzdHlsZVByb3BUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDdXN0b21WYXIgY2xhc3MgZGVzY3JpYmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WYXI8VCA9IGFueT4gZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUN1c3RvbVZhcjxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVByb3BOYW1lPzogc3RyaW5nLCB2YXJWYWx1ZT86IFQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZFJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLlZBUik7XHJcblxyXG5cdFx0dGhpcy50ZW1wbGF0ZVByb3BOYW1lID0gdGVtcGxhdGVQcm9wTmFtZTtcclxuXHRcdHRoaXMudmFyVmFsdWUgPSB2YXJWYWx1ZTtcclxuXHRcdHRoaXMubmFtZU92ZXJyaWRlID0gbmFtZU92ZXJyaWRlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogUnVsZUNvbnRhaW5lciwgb3duZXI6IElSdWxlQ29udGFpbmVyT3duZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdGlmICghdGhpcy5uYW1lT3ZlcnJpZGUpXHJcblx0XHRcdHRoaXMudmFyTmFtZSA9IHRoaXMub3duZXIuZ2V0U2NvcGVkUnVsZU5hbWVkKCBydWxlTmFtZSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgdGhpcy5uYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRoaXMudmFyTmFtZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLnZhck5hbWUgPSB0aGlzLm5hbWVPdmVycmlkZS5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy52YXJOYW1lOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCItLVwiICsgdGhpcy52YXJOYW1lOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBpcyBhIHJlYWwgQ1NTIHJ1bGUgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgdW5kZXIgdGhlIDxzdHlsZT5cclxuXHQvLyBlbGVtZW50LiBGb3IgdGhlIG1ham9yaXR5IG9mIFJ1bGUtZGVyaXZlZCBjbGFzc2VzIHRoaXMgaXMgdHJ1ZTsgaG93ZXZlciwgZm9yIHNvbWUgY2xhc3NlcyxcclxuXHQvLyBlLmcuIGZvciB0aGUgQ3VzdG9tVmFyIGNsYXNzLCB0aGlzIGlzIG5vdCBzby5cclxuXHRwdWJsaWMgZ2V0IGlzUmVhbENzc1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBDdXN0b21WYXI8VD5cclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBDdXN0b21WYXI8VD4oKTtcclxuXHRcdG5ld1J1bGUudGVtcGxhdGVQcm9wTmFtZSA9IHRoaXMudGVtcGxhdGVQcm9wTmFtZTtcclxuXHRcdG5ld1J1bGUudmFyVmFsdWUgPSB0aGlzLnZhclZhbHVlO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdC8vIFNpbmNlIEN1c3RvbVZhciBpcyBub3QgYSByZWFsIENTUyBydWxlLCB0aGlzIGltcGxlbWVudGF0aW9uIGRvZXMgbm90aGluZy4gSW5zdGVhZCwgdGhlXHJcblx0Ly8gUnVsZUNvbnRhaW5lciB1c2VzIHRoZSB0b0Nzc1N0cmluZyBtZXRob2Qgb2Ygb3VyIGNsYXNzLlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQge31cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYC0tJHt0aGlzLnZhck5hbWV9OiAke3N0eWxlUHJvcFRvQ3NzU3RyaW5nKCB0aGlzLnRlbXBsYXRlUHJvcE5hbWUsIHRoaXMudmFyVmFsdWUsIHRydWUpfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5hbWUgb2YgYSBub24tY3VzdG9tIENTUyBwcm9wZXJ0eSB3aG9zZSB0eXBlIGRldGVybWluZXMgdGhlIHR5cGUgb2YgdGhlIGN1c3RvbSBwcm9wZXJ0eSB2YWx1ZS5cclxuXHRwdWJsaWMgdGVtcGxhdGVQcm9wTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHB1YmxpYyB2YXJOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHB1YmxpYyB2YXJWYWx1ZTogVDtcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUZvbnRGYWNlUnVsZSwgUnVsZVR5cGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge0ZvbnRmYWNlfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlVHlwZXNcIlxyXG5pbXBvcnQge2ZvbnRGYWNlVG9Dc3NTdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VGdW5jc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEZvbnRGYWNlUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgcnVsZXMgdGhhdCBoYXZlIGEgc2luZ2xlIHN0eWxlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRm9udEZhY2VSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElGb250RmFjZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZm9udGZhY2U/OiBGb250ZmFjZSlcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuRk9OVEZBQ0UpO1xyXG5cclxuXHRcdHRoaXMuZm9udGZhY2UgPSBmb250ZmFjZTtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBGb250RmFjZVJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBGb250RmFjZVJ1bGUoKTtcclxuXHRcdG5ld1J1bGUuZm9udGZhY2UgPSB7fTtcclxuXHRcdE9iamVjdC5hc3NpZ24oIHRoaXMuZm9udGZhY2UsIHRoaXMuZm9udGZhY2UpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmRleCA9IHBhcmVudC5pbnNlcnRSdWxlKFxyXG5cdFx0XHRgQGZvbnQtZmFjZSAke2ZvbnRGYWNlVG9Dc3NTdHJpbmcoIHRoaXMuZm9udGZhY2UpfWAsXHJcblx0XHRcdHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gZm9udC1mYWNlIHJ1bGUgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0ZvbnRGYWNlUnVsZSgpOiBDU1NGb250RmFjZVJ1bGUgeyByZXR1cm4gdGhpcy5jc3NSdWxlIGFzIENTU0ZvbnRGYWNlUnVsZTsgfVxyXG5cclxuXHQvLyBPYmplY3QgZGVmaW5pbmcgZm9udC1mYWNlIHByb3BlcnRpZXMuXHJcblx0cHVibGljIGZvbnRmYWNlOiBGb250ZmFjZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lSdWxlRGVmaW5pdGlvbkNsYXNzLCBJR3JvdXBSdWxlLCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlQ29udGFpbmVyLCBJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBHcm91cFJ1bGUgY2xhc3MgcmVwcmVzZW50cyBhIHBhcnNlZCBmb3JtIG9mIGEgU3R5bGVTaGVldERlZmluaXRpb24tZGVyaXZlZCBjbGFzcy4gVGhpc1xyXG4gKiBjbGFzcyBkb2Vzbid0IGhhdmUgYSB0ZW1wbGF0ZSBwYXJhbWV0ZXIsIGJ1dCBpdCBjb25mb3JtcyB0byB0aGUgSVN0eWxlU2hlZXQ8VD4gaW50ZXJmYWNlLFxyXG4gKiB3aGljaCBwcm92aWRlcyBuYW1lcyBvZiBjbGFzc2VzLCBJRHMgYW5kIGtleWZyYW1lcyBkZWZpbmVkIGluIHRoZSBjbGFzcyBULCB3aGljaCBtdXN0IGJlXHJcbiAqIGRlcml2ZWQgZnJvbSB0aGUgU3R5bGVTaGVldERlZmluaXRpb24gY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JvdXBSdWxlPFQgPSBhbnk+IGV4dGVuZHMgUnVsZUNvbnRhaW5lcjxUPiBpbXBsZW1lbnRzIElHcm91cFJ1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogUnVsZVR5cGUsIGRlZmluaXRpb246IFQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHR5cGUsIGRlZmluaXRpb24pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogUnVsZUNvbnRhaW5lciwgb3duZXI6IElSdWxlQ29udGFpbmVyT3duZXIsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdC8vIHByb2Nlc3Mgc3ViLXJ1bGVzXHJcblx0XHR0aGlzLnByb2Nlc3NSdWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIGdyb3VwaW5nIHJ1bGUgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0dyb3VwUnVsZSgpOiBDU1NHcm91cGluZ1J1bGUgeyByZXR1cm4gdGhpcy5jc3NSdWxlIGFzIENTU0dyb3VwaW5nUnVsZTsgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUlEUnVsZSwgRXh0ZW5kZWRTdHlsZXNldCwgUnVsZVR5cGUsIElOYW1lZFJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVcIjtcclxuaW1wb3J0IHtSdWxlQ29udGFpbmVyLCBJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRFJ1bGUgdHlwZSBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhbiBJRC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJRFJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJSURSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuSUQsIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IFJ1bGVDb250YWluZXIsIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRpZiAoIXRoaXMubmFtZU92ZXJyaWRlKVxyXG5cdFx0XHR0aGlzLmlkTmFtZSA9IHRoaXMub3duZXIuZ2V0U2NvcGVkUnVsZU5hbWVkKCBydWxlTmFtZSk7XHJcblx0XHRlbHNlIGlmICh0eXBlb2YgdGhpcy5uYW1lT3ZlcnJpZGUgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHRoaXMuaWROYW1lID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuaWROYW1lID0gdGhpcy5uYW1lT3ZlcnJpZGUubmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaWROYW1lOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzTmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCIjXCIgKyB0aGlzLmlkTmFtZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJRFJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBJRFJ1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0bmV3UnVsZS5uYW1lT3ZlcnJpZGUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBcIiNcIiArIHRoaXMuaWROYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSUQgb2YgdGhlIEhUTUwgZWxlbWVudCAqL1xyXG5cdHB1YmxpYyBnZXQgaWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuaWROYW1lOyB9XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGVsZW1lbnQgaWRlbnRpZmllciBmb3IgYXBwbHlpbmcgdGhlIHN0eWxlc2V0LlxyXG5cdHB1YmxpYyBpZE5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUltcG9ydFJ1bGUsIFJ1bGVUeXBlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuaW1wb3J0IHtUc3NNYW5hZ2VyfSBmcm9tIFwiLi4vc2NvcGUvVHNzTWFuYWdlclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSW1wb3J0UnVsZSB0eXBlIGRlc2NyaWJlcyBhIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSW1wb3J0UnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJSW1wb3J0UnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB1cmw/OiBzdHJpbmcsIHF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSlcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuSU1QT1JUKTtcclxuXHJcblx0XHR0aGlzLnVybCA9IHVybDtcclxuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEltcG9ydFJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBJbXBvcnRSdWxlKCk7XHJcblx0XHRuZXdSdWxlLnVybCA9IHRoaXMudXJsO1xyXG5cdFx0bmV3UnVsZS5xdWVyeSA9IHRoaXMucXVlcnk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHVybDtcclxuXHRcdGlmICghdGhpcy51cmwpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJ1cmxcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIlxcXCJcIikgfHwgdGhpcy51cmwuc3RhcnRzV2l0aChcIidcIikpXHJcblx0XHRcdHVybCA9IHRoaXMudXJsO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR1cmwgPSBgdXJsKCR7dGhpcy51cmx9KWA7XHJcblxyXG5cdFx0bGV0IHF1ZXJ5U3RyaW5nID0gIXRoaXMucXVlcnkgPyBcIlwiIDogdHlwZW9mIHRoaXMucXVlcnkgPT09IFwic3RyaW5nXCIgPyB0aGlzLnF1ZXJ5IDogbWVkaWFRdWVyeVRvQ3NzU3RyaW5nKCB0aGlzLnF1ZXJ5KTtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IFRzc01hbmFnZXIuYWRkSW1wb3J0UnVsZSggYEBpbXBvcnQgJHt1cmx9ICR7cXVlcnlTdHJpbmd9YCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gbWVkaWEgcnVsZSAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzSW1wb3J0UnVsZSgpOiBDU1NJbXBvcnRSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NJbXBvcnRSdWxlOyB9XHJcblxyXG5cdC8vIFVSTCB0byBpbXBvcnQgZnJvbS5cclxuXHRwdWJsaWMgdXJsOiBzdHJpbmc7XHJcblxyXG5cdC8vIE9wdGlvbmFsIG1lZGlhIHF1ZXJ5IGZvciB0aGlzIHJ1bGUuXHJcblx0cHVibGljIHF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lNZWRpYVJ1bGUsIElSdWxlRGVmaW5pdGlvbkNsYXNzLCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtHcm91cFJ1bGV9IGZyb20gXCIuL0dyb3VwUnVsZVwiXHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHttZWRpYVF1ZXJ5VG9Dc3NTdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFGdW5jc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhUnVsZSB0eXBlIGRlc2NyaWJlcyBhIENTUyBAbWVkaWEgcnVsZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpYVJ1bGU8VCA9IGFueT4gZXh0ZW5kcyBHcm91cFJ1bGU8VD4gaW1wbGVtZW50cyBJTWVkaWFSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHF1ZXJ5Pzogc3RyaW5nIHwgTWVkaWFRdWVyeSwgZGVmaW5pdGlvbj86IFQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLk1FRElBLCBkZWZpbml0aW9uKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBNZWRpYVJ1bGU8VD5cclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBNZWRpYVJ1bGU8VD4oKTtcclxuXHRcdG5ld1J1bGUucXVlcnkgPSB0aGlzLnF1ZXJ5O1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBxdWVyeVN0cmluZyA9IHR5cGVvZiB0aGlzLnF1ZXJ5ID09PSBcInN0cmluZ1wiID8gdGhpcy5xdWVyeSA6IG1lZGlhUXVlcnlUb0Nzc1N0cmluZyggdGhpcy5xdWVyeSk7XHJcblxyXG5cdFx0bGV0IGluZGV4ID0gcGFyZW50Lmluc2VydFJ1bGUoIGBAbWVkaWEgJHtxdWVyeVN0cmluZ30ge31gLCBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoKTtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IHN1Yi1ydWxlc1xyXG5cdFx0dGhpcy5pbnNlcnRSdWxlcyggdGhpcy5jc3NNZWRpYVJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc01lZGlhUnVsZSgpOiBDU1NNZWRpYVJ1bGUgeyByZXR1cm4gdGhpcy5jc3NSdWxlIGFzIENTU01lZGlhUnVsZTsgfVxyXG5cclxuXHQvLyBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lSdWxlLCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlQ29udGFpbmVyLCBJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBhbGwgcnVsZXMuIEFzIGEgcGFyZW50IG9mIFJ1bGVDb250YWluZXIsIHRoZSBSdWxlXHJcbiAqIGNsYXNzIGlzIGFsc28gYW4gYW5jZXN0b3IgZm9yIFN0eWxlU2NvcGU7IGhvd2V2ZXIsIG1vc3Qgb2YgaXRzIHRoZSBmaWVsZHMgYXJlIHVuZGVmaW5lZCBpblxyXG4gKiB0ZSBTdHlsZVNjb3BlIGluc3RhbmNlcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlIGltcGxlbWVudHMgSVJ1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB0eXBlOiBSdWxlVHlwZSlcclxuXHR7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogUnVsZUNvbnRhaW5lciwgb3duZXI6IElSdWxlQ29udGFpbmVyT3duZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcblx0XHR0aGlzLm93bmVyID0gb3duZXI7XHJcblx0XHR0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XHJcblx0fVxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBydWxlIGlzIGEgcmVhbCBDU1MgcnVsZSB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCB1bmRlciB0aGUgPHN0eWxlPlxyXG5cdC8vIGVsZW1lbnQuIEZvciB0aGUgbWFqb3JpdHkgb2YgUnVsZS1kZXJpdmVkIGNsYXNzZXMgdGhpcyBpcyB0cnVlOyBob3dldmVyLCBmb3Igc29tZSBjbGFzc2VzLFxyXG5cdC8vIGUuZy4gZm9yIHRoZSBDdXN0b21WYXIgY2xhc3MsIHRoaXMgaXMgbm90IHNvLlxyXG5cdHB1YmxpYyBnZXQgaXNSZWFsQ3NzUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGU7XHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGFic3RyYWN0IGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZDtcclxuXHJcblxyXG5cclxuXHQvKiogVHlwZSBvZiB0aGUgcnVsZSAqL1xyXG5cdHB1YmxpYyByZWFkb25seSB0eXBlOiBSdWxlVHlwZTtcclxuXHJcblx0Ly8gUnVsZSBjb250YWluZXIgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuIFRoaXMgaXMgXCJ0aGlzXCIgZm9yIFN0eWxlU2NvcGUuXHJcblx0cHVibGljIGNvbnRhaW5lcjogUnVsZUNvbnRhaW5lcjtcclxuXHJcblx0Ly8gU3R5bGUgc2NvcGUgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuIFRoaXMgaXMgXCJ0aGlzXCIgZm9yIFN0eWxlU2NvcGUuXHJcblx0cHVibGljIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiB0byB3aGljaCB0aGlzIHJ1bGUgd2FzIGFzc2lnbmVkLiBUaGlzIGlzXHJcblx0Ly8gbnVsbCBmb3IgU3R5bGVTY29wZS5cclxuXHRwdWJsaWMgcnVsZU5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTUnVsZS1kZXJpdmVkIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBhY3R1YWxsIENTUyBydWxlIGluc2VydGVkIGludG9cclxuXHQvLyB0aGUgc3R5bGVzIHNoZWV0IG9yIHRoZSBwYXJlbnQgcnVsZS4gVGhpcyBpcyB1bmRlZmluZWQgZm9yIFN0eWxlU2NvcGUgb2JqZWN0cy5cclxuXHRwdWJsaWMgY3NzUnVsZTogQ1NTUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge05hbWVzT2ZQcm9wc09mVHlwZSwgUHJvcHNPZlR5cGUsIElSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlLCBJQW5pbWF0aW9uUnVsZSwgSUN1c3RvbVZhcixcclxuXHRcdElDdXN0b21WYXJSdWxlLCBJUnVsZURlZmluaXRpb24sIElSdWxlRGVmaW5pdGlvbkNsYXNzLCBJUnVsZUNvbnRhaW5lciwgUnVsZVR5cGVcclxuXHRcdH0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtJU3R5bGVTY29wZX0gZnJvbSBcIi4uL3Njb3BlL1Njb3BlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge0NsYXNzUnVsZX0gZnJvbSBcIi4vQ2xhc3NSdWxlXCJcclxuaW1wb3J0IHtJRFJ1bGV9IGZyb20gXCIuL0lEUnVsZVwiXHJcbmltcG9ydCB7QW5pbWF0aW9uUnVsZX0gZnJvbSBcIi4vQW5pbWF0aW9uUnVsZVwiXHJcbmltcG9ydCB7Q3VzdG9tVmFyfSBmcm9tIFwiLi9DdXN0b21WYXJcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlQ29udGFpbmVyT3duZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBzY29wZSB0aGF0IFwib3duc1wiIHRoZSBydWxlcyB1bmRlciB0aGlzXHJcbiAqIGNvbnRhaW5lci4gSW4gcGFydGljdWxhciwgdGhlIG93bmVyJ3Mgam9iIGlzIHRvIGdlbmVyYXRlIFwic2NvcGVkXCIgdW5pcXVlIG5hbWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZUNvbnRhaW5lck93bmVyXHJcbntcclxuXHQvKiogQWRkcyBhIHN0eWxlIHNjb3BlIHRoaXMgc3R5bGUgc2NvcGUgKi9cclxuXHRhZGRJbXBvcnRlZFNjb3BlKCBzY29wZTogSVN0eWxlU2NvcGUpOiB2b2lkO1xyXG5cclxuXHQvKiogR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZSBzY29wZSAqL1xyXG5cdGdldFNjb3BlZFJ1bGVOYW1lZCggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVDb250YWluZXIgY2xhc3MgcmVwcmVzZW50cyBhIHBhcnNlZCBmb3JtIG9mIGEgcnVsZSBkZWZpbml0aW9uIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGVDb250YWluZXI8VCA9IElSdWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSVJ1bGVDb250YWluZXI8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogbnVtYmVyLCBkZWZpbml0aW9uOiBUIHwgSVJ1bGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIHR5cGUpO1xyXG5cdFx0dGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBkZWZpbml0aW9uO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogTmFtZXMgb2YgY2xhc3NlcyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzaGVldCAqL1xyXG5cdHB1YmxpYyBnZXQgY2xhc3NlcygpOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ2xhc3NSdWxlPiB7IHJldHVybiB0aGlzLl9jbGFzc2VzIGFzIE5hbWVzT2ZQcm9wc09mVHlwZTxULElDbGFzc1J1bGU+IH1cclxuXHJcblx0LyoqIE5hbWVzIG9mIGNsYXNzZXMgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2hlZXQgKi9cclxuXHRwdWJsaWMgZ2V0IGlkcygpOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJSURSdWxlPiB7IHJldHVybiB0aGlzLl9pZHMgYXMgTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUlEUnVsZT47IH1cclxuXHJcblx0LyoqIE5hbWVzIG9mIGtleWZyYW1lcyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzaGVldCAqL1xyXG5cdHB1YmxpYyBnZXQgYW5pbWF0aW9ucygpOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT4geyByZXR1cm4gdGhpcy5fYW5pbWF0aW9ucyBhcyBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT47IH1cclxuXHJcblx0LyoqIE5hbWVzIG9mIGN1c3RvbSBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzY29wZSAqL1xyXG5cdHB1YmxpYyBnZXQgdmFycygpOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ3VzdG9tVmFyPiB7IHJldHVybiB0aGlzLl92YXJzIGFzIE5hbWVzT2ZQcm9wc09mVHlwZTxULElDdXN0b21WYXI+OyB9XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIHRhZyBydWxlcy4gKi9cclxuXHRwdWJsaWMgZ2V0IHJ1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSVJ1bGU+IHsgcmV0dXJuIHRoaXMuX3J1bGVzIGFzIFByb3BzT2ZUeXBlPFQsSVJ1bGU+OyB9XHJcblxyXG4gXHQvKiogVGhlIFwiOnJvb3RcIiBibG9jayB3aXRoIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbnMuICovXHJcblx0cHVibGljIGdldCB2YXJSdWxlKCk6IElDdXN0b21WYXJSdWxlIHsgcmV0dXJuIHRoaXMuX3ZhclJ1bGU7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGluc3RhbmNlLCBwYXJzZXMgaXRzIHByb3BlcnRpZXMgYW5kIGNyZWF0ZXMgbmFtZXMgZm9yXHJcblx0Ly8gY2xhc3NlcywgSURzLCBhbmltYXRpb25zLlxyXG5cdHByb3RlY3RlZCBwcm9jZXNzUnVsZXMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBkZWZpbml0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkXHJcblx0XHRpZiAodGhpcy5pc1Byb2Nlc3NlZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuX2FsbE5hbWVzID0ge307XHJcblx0XHR0aGlzLl9jbGFzc2VzID0ge307XHJcblx0XHR0aGlzLl9pZHMgPSB7fTtcclxuXHRcdHRoaXMuX2FuaW1hdGlvbnMgPSB7fTtcclxuXHRcdHRoaXMuX3ZhcnMgPSB7fTtcclxuXHJcblx0XHR0aGlzLl9ydWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5fYWxsUnVsZXMgPSBbXTtcclxuXHJcblx0XHQvLyBjcmVhdGUgb3VyIGludGVybmFsIHJ1bGUgZm9yIGN1c3RvbSBDU1MgcHJvcGVydGllc1xyXG5cdFx0dGhpcy5fdmFyUnVsZSA9IG5ldyBDdXN0b21WYXJSdWxlPFQ+KCk7XHJcblx0XHR0aGlzLl92YXJSdWxlLnByb2Nlc3MoIHRoaXMsIHRoaXMub3duZXIsIG51bGwpXHJcblx0XHR0aGlzLl9hbGxSdWxlcy5wdXNoKCB0aGlzLl92YXJSdWxlKTtcclxuXHJcblx0XHQvLyBnZXQgdGhlIFwicnVsZSBkZWZpbml0aW9uXCIgb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIHRoZSBydWxlIG9iamVjdHNcclxuXHRcdGxldCBydWxlc0RlZjogSVJ1bGVEZWZpbml0aW9uO1xyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLmRlZmluaXRpb25DbGFzcyA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgXCJkZWZpbml0aW9uXCIgaXMgYSBjbGFzcyB0aGVuIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiBpdFxyXG5cdFx0XHR0cnlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHJ1bGVzRGVmID0gbmV3ICh0aGlzLmRlZmluaXRpb25DbGFzcyBhcyBJUnVsZURlZmluaXRpb25DbGFzczxJUnVsZURlZmluaXRpb24+KSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgaW5zdGFudGlhdGluZyBSdWxlIERlZmluaXRpb24gb2YgdHlwZSAnJHt0aGlzLmRlZmluaXRpb25DbGFzcy5uYW1lfSdgKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gaWYgdGhlIFwiZGVmaW5pdGlvblwiIGlzIGFuIG9iamVjdCAobm90IGEgY2xhc3MpIHRoZW4gdXNlIGl0IGRpcmVjdGx5XHJcblx0XHRcdHJ1bGVzRGVmID0gdGhpcy5kZWZpbml0aW9uQ2xhc3M7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcHJvY2VzcyBydWxlcyB0aGF0IGFyZSBhc3NpZ25lZCB0byB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBjbGFzc1xyXG5cdFx0dGhpcy5wcm9jZXNzTmFtZWRSdWxlcyggcnVsZXNEZWYpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGluc3RhbmNlLCBwYXJzZXMgaXRzIHByb3BlcnRpZXMgYW5kIGNyZWF0ZXMgbmFtZXMgZm9yXHJcblx0Ly8gY2xhc3NlcywgSURzLCBhbmltYXRpb25zLlxyXG5cdHByaXZhdGUgcHJvY2Vzc05hbWVkUnVsZXMoIHJ1bGVzRGVmOiBJUnVsZURlZmluaXRpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aG9zZSB0aGF0IGFyZSBydWxlcy5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHJ1bGVzRGVmKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwiJHVubmFtZWRcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsID0gcnVsZXNEZWYuJHVubmFtZWQ7XHJcblx0XHRcdFx0dGhpcy5wcm9jZXNzVW5uYW1lZFJ1bGVzKCBwcm9wVmFsIGFzIFJ1bGVbXSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IHByb3BWYWwgPSBydWxlc0RlZltwcm9wTmFtZV07XHJcblx0XHRcdGlmICghKHByb3BWYWwgaW5zdGFuY2VvZiBSdWxlKSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBydWxlTmFtZSA9IHByb3BOYW1lO1xyXG5cdFx0XHRsZXQgcnVsZSA9IHByb3BWYWwgYXMgUnVsZTtcclxuXHJcblx0XHRcdC8vIFNjb3BlU3R5bGUgZGVyaXZlcyBmcm9tIFJ1bGUgKHZpYSBSdWxlQ29udGFpbmVyKTsgaG93ZXZlciwgaXQgaXMgbm90IGEgcmVhbCBydWxlLlxyXG5cdFx0XHQvLyBXZSBpbmZvcm0gb3VyIG93bmVyIHN0eWxlIHNjb3BlIGFib3V0IHRoZSBcImltcG9ydGVkXCIgc2NvcGUgc28gdGhhdCB3aGVuIHRoZSBvd25lclxyXG5cdFx0XHQvLyBzY29wZSBpcyBhY3RpdmF0ZWQsIHRoZSBpbXBvcnRlZCBvbmUgaXMgYWN0aXZhdGVkIHRvby5cclxuXHRcdFx0aWYgKHJ1bGUudHlwZSA9PT0gUnVsZVR5cGUuU0NPUEUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm93bmVyLmFkZEltcG9ydGVkU2NvcGUoIHJ1bGUgYXMgYW55IGFzIElTdHlsZVNjb3BlKTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHJ1bGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZSBzY29wZSwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc2NvcGUuXHJcblx0XHRcdGlmIChydWxlLm93bmVyKVxyXG5cdFx0XHRcdHJ1bGUgPSBydWxlLmNsb25lKCk7XHJcblxyXG5cdFx0XHRydWxlLnByb2Nlc3MoIHRoaXMsIHRoaXMub3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRcdC8vIHJlbWVtYmVyIHJlYWwgcnVsZXNcclxuXHRcdFx0aWYgKHJ1bGUuaXNSZWFsQ3NzUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX3J1bGVzW3J1bGVOYW1lXSA9IHJ1bGU7XHJcblx0XHRcdFx0dGhpcy5fYWxsUnVsZXMucHVzaCggcnVsZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIHB1dCBydWxlcyBhbmQgdGhlaXIgbmFtZXMgaW50byBidWNrZXRzXHJcblx0XHRcdGlmIChydWxlIGluc3RhbmNlb2YgQ2xhc3NSdWxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fYWxsTmFtZXNbcnVsZU5hbWVdID0gcnVsZS5jbGFzc05hbWU7XHJcblx0XHRcdFx0dGhpcy5fY2xhc3Nlc1tydWxlTmFtZV0gPSBydWxlLmNsYXNzTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgSURSdWxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fYWxsTmFtZXNbcnVsZU5hbWVdID0gcnVsZS5pZE5hbWU7XHJcblx0XHRcdFx0dGhpcy5faWRzW3J1bGVOYW1lXSA9IHJ1bGUuaWROYW1lO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBBbmltYXRpb25SdWxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fYWxsTmFtZXNbcnVsZU5hbWVdID0gcnVsZS5hbmltYXRpb25OYW1lO1xyXG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvbnNbcnVsZU5hbWVdID0gcnVsZS5hbmltYXRpb25OYW1lO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDdXN0b21WYXIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9hbGxOYW1lc1tydWxlTmFtZV0gPSBydWxlLnZhck5hbWU7XHJcblx0XHRcdFx0dGhpcy5fdmFyc1tydWxlTmFtZV0gPSBydWxlLnZhck5hbWU7XHJcblx0XHRcdFx0dGhpcy5fdmFyUnVsZS5fdmFyc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgdGhlIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gaW5zdGFuY2UsIHBhcnNlcyBpdHMgcHJvcGVydGllcyBhbmQgY3JlYXRlcyBuYW1lcyBmb3JcclxuXHQvLyBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzVW5uYW1lZFJ1bGVzKCBydWxlczogUnVsZVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghcnVsZXMgfHwgcnVsZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aG9zZSB0aGF0IGFyZSBydWxlcy5cclxuXHRcdGZvciggbGV0IHJ1bGUgb2YgcnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdC8vIFNjb3BlU3R5bGUgZGVyaXZlcyBmcm9tIFJ1bGUgKHZpYSBSdWxlQ29udGFpbmVyKTsgaG93ZXZlciwgaXQgaXMgbm90IGEgcmVhbCBydWxlLlxyXG5cdFx0XHQvLyBXZSBpbmZvcm0gb3VyIG93bmVyIHN0eWxlIHNjb3BlIGFib3V0IHRoZSBcImltcG9ydGVkXCIgc2NvcGUgc28gdGhhdCB3aGVuIHRoZSBvd25lclxyXG5cdFx0XHQvLyBzY29wZSBpcyBhY3RpdmF0ZWQsIHRoZSBpbXBvcnRlZCBvbmUgaXMgYWN0aXZhdGVkIHRvby5cclxuXHRcdFx0aWYgKHJ1bGUudHlwZSA9PT0gUnVsZVR5cGUuU0NPUEUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLm93bmVyLmFkZEltcG9ydGVkU2NvcGUoIHJ1bGUgYXMgYW55IGFzIElTdHlsZVNjb3BlKTtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHJ1bGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZSBzY29wZSwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc2NvcGUuXHJcblx0XHRcdGlmIChydWxlLm93bmVyKVxyXG5cdFx0XHRcdHJ1bGUgPSBydWxlLmNsb25lKCk7XHJcblxyXG5cdFx0XHRydWxlLnByb2Nlc3MoIHRoaXMsIHRoaXMub3duZXIsIG51bGwpO1xyXG5cclxuXHRcdFx0dGhpcy5fYWxsUnVsZXMucHVzaCggcnVsZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwcm90ZWN0ZWQgY29weUZyb20oIHNyYzogUnVsZUNvbnRhaW5lcik6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgYWxsIHJ1bGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIgdG8gZWl0aGVyIHRoZSBzdHlsZSBzaGVldCBvciBncm91cGluZyBydWxlLlxyXG5cdHByb3RlY3RlZCBpbnNlcnRSdWxlcyggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGZvciggbGV0IHJ1bGUgb2YgdGhpcy5fYWxsUnVsZXMpXHJcblx0XHRcdHJ1bGUuaW5zZXJ0KCBwYXJlbnQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBIZWxwZXIgcHJvcGVydGllc1xyXG5cdHB1YmxpYyBnZXQgaXNQcm9jZXNzZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuX3J1bGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xhc3MgdGhhdCBkZWZpbmVkIHRoaXMgc3R5bGUgc2NvcGUuIFRoaXMgbWVtYmVyIGlzIHVzZWQgZm9yIHN0eWxlIHNjb3BlIGRlcml2YXRpb25cclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZGVmaW5pdGlvbkNsYXNzOiBJUnVsZURlZmluaXRpb25DbGFzczxUPiB8IFQ7XHJcblxyXG5cdC8vIE5hbWVzIG9mIGFsbCBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuXHJcblx0cHJvdGVjdGVkIF9hbGxOYW1lczogeyBbSzogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG5cdC8vIE5hbWVzIG9mIGNsYXNzZXMsIElEcywgYW5pbWF0aW9ucyBhbmQgY3VzdG9tIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gVGhlXHJcblx0Ly8ga2V5cyBhcmUgcHJvcGVydHkgbmFtZXMgdXNlZCBpbiB0aGUgcnVsZSBkZWZpbml0aW9uOyB0aGUgdmFsdWVzIGFyZSB0aGUgYWN0dWFsIG5hbWVzXHJcblx0Ly8gdGhhdCB3aWxsIGJlIGluc2VydGVkIGludG8gdGhlIGFjdHVhbCBzdHlsZSBzaGVldC5cclxuXHRwcm90ZWN0ZWQgX2NsYXNzZXM6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cdHByb3RlY3RlZCBfaWRzOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHRwcm90ZWN0ZWQgX2FuaW1hdGlvbnM6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cdHByb3RlY3RlZCBfdmFyczogeyBbSzogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG5cdC8vIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIG9mIHRoZSBydWxlIGRlZmluaXRpb25zIHRvIHRoZSBSdWxlIG9iamVjdHMuXHJcblx0cHJvdGVjdGVkIF9ydWxlczogeyBbSzogc3RyaW5nXTogSVJ1bGUgfTtcclxuXHJcblx0Ly8gUnVsZSB0aGF0IGNvbWJpbmVzIGFsbCBjdXN0b20gdmFyaWFibGVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuXHJcblx0cHJvdGVjdGVkIF92YXJSdWxlOiBDdXN0b21WYXJSdWxlO1xyXG5cclxuXHQvLyBMaXN0IG9mIGFsbCBydWxlc1xyXG5cdHB1YmxpYyBfYWxsUnVsZXM6IFJ1bGVbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEN1c3RvbVZhclJ1bGUgY2xhc3MgcmVwcmVzZW50cyBhIDpyb290IHJ1bGUgdGhhdCBpcyB1c2VkIGZvciBkZWZpbmluZyBjdXN0b20gQ1NTIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5jbGFzcyBDdXN0b21WYXJSdWxlPFQgPSBhbnk+IGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElDdXN0b21WYXJSdWxlPFQ+XHJcbntcclxuXHRjb25zdHJ1Y3RvcigpXHJcblx0e1xyXG5cdFx0c3VwZXIoIENTU1J1bGUuU1RZTEVfUlVMRSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG4gXHQvKiogVGhlIFwiOnJvb3RcIiBibG9jayB3aXRoIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbnMuICovXHJcblx0cHVibGljIGdldCB2YXJzKCk6IFByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj4geyByZXR1cm4gdGhpcy5fdmFycyBhcyBQcm9wc09mVHlwZTxULElDdXN0b21WYXI+OyB9XHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBSdWxlQ29udGFpbmVyLCBvd25lcjogSVJ1bGVDb250YWluZXJPd25lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyLCBydWxlTmFtZSk7XHJcblx0XHR0aGlzLl92YXJzID0ge307XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBSdWxlXHJcblx0e1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCB2YXJOYW1lcyA9IE9iamVjdC5rZXlzKCB0aGlzLl92YXJzKTtcclxuXHRcdGlmICh2YXJOYW1lcy5sZW5ndGggPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgcyA9IGA6cm9vdCB7JHt2YXJOYW1lcy5tYXAoICh2YXJOYW1lKSA9PiB0aGlzLl92YXJzW3Zhck5hbWVdLnRvQ3NzU3RyaW5nKCkpLmpvaW4oXCI7XCIpfX1gO1xyXG5cdFx0bGV0IGluZGV4ID0gcGFyZW50Lmluc2VydFJ1bGUoIHMsIHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0dGhpcy5jc3NSdWxlID0gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIF92YXJzOnsgW0s6IHN0cmluZ106IEN1c3RvbVZhcjxhbnk+IH07XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgbW9kdWxlIGRlZmluZXMgdHlwZXMgb2Ygb2JqZWN0IHRoYXQgcmVwcmVzZW50IENTUyBydWxlcy5cclxuICovXHJcblxyXG5cclxuaW1wb3J0IHtFeHRlbmRlZFByb3BUeXBlfSBmcm9tIFwiLi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5pbXBvcnQge1N0eWxlc2V0LCBQdXJlU3R5bGVzZXQsIFN1cHBvcnRzUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7Rm9udGZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5cclxuXHJcbi8qKiBVdGlsaXR5IHR5cGUgdGhhdCByZXByZXNlbnRzIGFsbCBwcm9wZXJ0aWVzIG9mIHR5cGUgVCB0aGF0IGFyZSBvZiB0eXBlIFUgKi9cclxudHlwZSBQcm9wc09mVHlwZU9yTmV2ZXI8VCxVPiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gZXh0ZW5kcyBVID8gSyA6IG5ldmVyIH07XHJcblxyXG4vKiogVXRpbGl0eSB0eXBlIHRoYXQgcmVwcmVzZW50cyBuYW1lcyBvZiBhbGwgcHJvcGVydGllcyBvZiB0eXBlIFQgdGhhdCBhcmUgb2YgdHlwZSBVICovXHJcbnR5cGUgUHJvcE5hbWVzT2ZUeXBlPFQsVT4gPSBQcm9wc09mVHlwZU9yTmV2ZXI8VCxVPltrZXlvZiBUXTtcclxuXHJcbi8qKiBVdGlsaXR5IHR5cGUgdGhhdCByZXByZXNlbnRzIHN0cmluZyB2YWx1ZXMgbWFwcGVkIHRvIG5hbWVzIG9mIHByb3BlcnRpZXMgb2YgdHlwZSBUIHRoYXQgYXJlIG9mIHR5cGUgVS4gKi9cclxuZXhwb3J0IHR5cGUgTmFtZXNPZlByb3BzT2ZUeXBlPFQsVT4gPSB7IFtLIGluIFByb3BOYW1lc09mVHlwZTxULFU+XTogc3RyaW5nIH07XHJcblxyXG4vKiogVHlwZSB0aGF0IHJlcHJlc2VudHMgYWxsIHByb3BlcnRpZXMgb2YgdHlwZSBUIHRoYXQgYXJlIG9mIHR5cGUgVSAqL1xyXG5leHBvcnQgdHlwZSBQcm9wc09mVHlwZTxULFU+ID0geyBbSyBpbiBQcm9wTmFtZXNPZlR5cGU8VCxVPl06IFRbS10gfTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBFeHRlbmRlZFN0eWxlc2V0IHR5cGUgZXh0ZW5kcyB0aGUgU3R5bGVzZXQgdHlwZSB3aXRoIGNlcnRhaW4gcHJvcGVydGllcyB0aGF0IHByb3ZpZGVcclxuICogYWRkaXRpb25hbCBtZWFuaW5nIHRvIHRoZSBzdHlsZXNldDpcclxuICogLSBUaGUgYCRleHRlbmRzYCBwcm9wZXJ0eSBzcGVjaWZpZXMgb25lIG9yIG1vcmUgcGFyZW50IHN0eWxlIHJ1bGVzLiBUaGlzIGFsbG93cyBzcGVjaWZ5aW5nXHJcbiAqICAgcGFyZW50IHJ1bGVzIHVzaW5nIGEgY29udmVuaWVudCBzdHlsZS1wcm9wZXJ0eS1saWtlIG5vdGF0aW9uLiBQYXJlbnRzIGNhbiBhbHNvIGJlIHNwZWNpZmllZFxyXG4gKiAgIHdpdGhvdXQgYSBzdHlsZXNldC5cclxuICogLSBUaGUgYCRpbXBvcnRhbnRgIHByb3BlcnR5IHNwZWNpZmllcyBvbmUgb3IgbW9yZSBuYW1lcyBvZiBzdHlsZXNldCBwcm9wZXJ0aWVzIHRoYXQgc2h1bGQgYmVcclxuICogICBjb25zaWRlcmVkIFwiaW1wb3J0YW50XCIuIFdoZW4gdGhlIHJ1bGUgaXMgaW5zZXJ0ZWQgaW50byBET00sIHRoZSBcIiFpbXBvcnRhbnRcIiBhdHRyaWJ1dGUgaXNcclxuICogICBhZGRlZCB0byB0aGUgcHJvcGVydHkgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFN0eWxlc2V0ID1cclxuXHQoU3R5bGVzZXQgJlxyXG5cdFx0e1xyXG5cdFx0XHQkZXh0ZW5kcz86IElTdHlsZVJ1bGUgfCBJU3R5bGVSdWxlW10sXHJcblx0XHRcdCRpbXBvcnRhbnQ/OiBrZXlvZiBQdXJlU3R5bGVzZXQgfCAoa2V5b2YgUHVyZVN0eWxlc2V0KVtdLFxyXG5cdFx0fVxyXG5cdCkgfCBJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZVR5cGUgZW51bWVyYXRpb24gbGlzdHMgdHlwZXMgb2YgcnVsZXMgdGhhdCBNaW1jc3MgbGlicmFyeSB3b3JrcyB3aXRoLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gUnVsZVR5cGVcclxue1xyXG4gICAgVEFHID0gMSxcclxuICAgIENMQVNTLFxyXG4gICAgSUQsXHJcbiAgICBTRUxFQ1RPUixcclxuICAgIEFOSU1BVElPTixcclxuICAgIEtFWUZSQU1FLFxyXG4gICAgU1VQUE9SVFMsXHJcbiAgICBNRURJQSxcclxuICAgIEZPTlRGQUNFLFxyXG4gICAgSU1QT1JULFxyXG4gICAgTkFNRVNQQUNFLFxyXG4gICAgUEFHRSxcclxuICAgIFZJRVdQT1JULFxyXG5cclxuXHQvLyBub3QgcmVhbCBydWxlcyBidXQgZGVyaXZlIGZyb20gdGhlIFJ1bGUgb2JqZWN0XHJcbiAgICBWQVIgPSA1MCxcclxuICAgIFNDT1BFID0gNTEsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcy4gSXRzIG9ubHkgcHVycG9zZSBpcyB0b1xyXG4gKiBwcm92aWRlIHRoZSByZWZlcmVuY2UgdG8gdGhlIHN0eWxlIHNjb3BlIHRoYXQgb3ducyBpdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVcclxue1xyXG5cdC8qKlxyXG5cdCAqIE5hbWUgb2YgdGhlIHByb3BlcnR5IG9uIHRoZSBydWxlIGRlZmluaXRpb24gb2JqZWN0IHRvIHdoaWNoIHRoaXMgcnVsZSBpcyBhc3NpZ25lZC5cclxuXHQgKi9cclxuXHRyZWFkb25seSBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogVHlwZSBvZiB0aGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IHR5cGU6IFJ1bGVUeXBlO1xyXG5cclxuXHQvKiogU09NIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NSdWxlOiBDU1NSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU5hbWVkUnVsZSBpbnRlcmZhY2UgaXMgYSBiYXNlIGludGVyZmFjZSBpbXBsZW1lbnRlZCBieSBhbGwgcnVsZXMgdGhhdCBoYXZlIGEgbmFtZTsgdGhhdCBpcyxcclxuICogY2xhc3MsIElELCBhbmltYXRpb24gYW5kIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElOYW1lZFJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgdW5pcXVlIG5hbWUgdGhhdCBpcyBhc3NpZ25lZCBieSB0aGUgTWltY3NzIGluZnJhc3R1Y3R1cmUuIFRoaXMgbmFtZVxyXG5cdCAqIGRvZXNuJ3QgaGF2ZSB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSwgSURzICgjKSBhbmQgY3VzdG9tIENTU1xyXG5cdCAqIHByb3BlcnRpZXMgKC0tKS5cclxuXHQgKi9cclxuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIG5hbWUgdGhhdCBoYXMgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksXHJcblx0ICogSURzICgjKSBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICgtLSkuIEZvciBhbmltYXRpb25zLCB0aGlzIG5hbWUgaXMgdGhlIHNhbWUgYXMgaW4gdGhlXHJcblx0ICogYG5hbWVgIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGNzc05hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsaW5nIHJ1bGUgaW4gYSBzdHlsZSBzaGVldC4gU3R5bGUgcnVsZXMgY2FuIGJlIHVzZWRcclxuICogYW55d2hlcmUgd2hlcmUgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgZGVmaW5lZDogY2xhc3MgcnVsZXMsIElEIHJ1bGVzLCBzZWxlY3RvciBydWxlcyxcclxuICoga2V5ZnJhbWVzLCBldGMuIFN0eWxlUnVsZSBkZWZpbmVzIGEgc3R5bGVzZXQgYW5kIGNhbiBvcHRpb25hbGx5IHBvaW50IHRvIG9uZSBvciBtb3JlIHN0eWxlIHJ1bGVzXHJcbiAqIGZyb20gd2hpY2ggaXQgaW5oZXJpdHMuIEEgc3R5bGVzZXQgY29tYmluZXMgYWxsIHRoZSBwcm9wZXJ0aWVzIGZyb20gaXRzIG93biBwcm9wZXJ0eSBibG9jayBhc1xyXG4gKiB3ZWxsIGFzIGZyb20gYWxsIG9mIHN0eWxlIHJ1bGVzIGl0IGluaGVyaXRlcyBmcm9tLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1N0eWxlUnVsZTogQ1NTU3R5bGVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVRhZ1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgdGFnIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElUYWdSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIEhUTUwgdGFnICovXHJcblx0cmVhZG9ubHkgdGFnOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ2xhc3NSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgcnVsZSB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ2xhc3NSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZSwgSU5hbWVkUnVsZVxyXG57XHJcblx0LyoqIE5hbWUgb2YgdGhlIENTUyBjbGFzcyAqL1xyXG5cdHJlYWRvbmx5IGNsYXNzOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSURSdWxlIGludGVyZmFjZSByZXByZXNlbnRzYSBhIHN0eWxlIHJ1bGUgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJRFJ1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlLCBJTmFtZWRSdWxlXHJcbntcclxuXHQvKiogSUQgb2YgdGhlIEhUTUwgZWxlbWVudCAqL1xyXG5cdHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU2VsZWN0b3JSdWxlIGludGVyZmFjZSByZXByZXNlbnRzYSBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVzIGJ5IHRoZVxyXG4gKiBnaXZlbiBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlbGVjdG9yUnVsZSBleHRlbmRzIElTdHlsZVJ1bGVcclxue1xyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRyZWFkb25seSBzZWxlY3RvclRleHQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElBbmltYXRpb25SdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQGtleWZyYW1lcyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQW5pbWF0aW9uUnVsZSBleHRlbmRzIElOYW1lZFJ1bGVcclxue1xyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NLZXlmcmFtZXNSdWxlOiBDU1NLZXlmcmFtZXNSdWxlO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIEtleWZyYW1lIHR5cGUgZGVmaW5lcyBhIHNpbmdsZSBrZXlmcmFtZSB3aXRoaW4gYSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBLZXlmcmFtZSA9IFtcImZyb21cIiB8IFwidG9cIiB8IG51bWJlciwgRXh0ZW5kZWRTdHlsZXNldF07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUdyb3VwUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBncm91cGluZyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJR3JvdXBSdWxlPFQgPSBhbnk+IGV4dGVuZHMgSVJ1bGVDb250YWluZXI8VD5cclxue1xyXG5cdC8qKiBTT00gZ3JvdXBpbmcgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc0dyb3VwUnVsZTogQ1NTR3JvdXBpbmdSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN1cHBvcnRSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3VwcG9ydHNSdWxlPFQgPSBhbnk+IGV4dGVuZHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzU3VwcG9ydHNSdWxlOiBDU1NTdXBwb3J0c1J1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTWVkaWFSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIEBtZWRpYSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTWVkaWFSdWxlPFQgPSBhbnk+IGV4dGVuZHMgSUdyb3VwUnVsZTxUPlxyXG57XHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzTWVkaWFSdWxlOiBDU1NNZWRpYVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJSW1wb3J0UnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBAaW1wb3J0IHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElJbXBvcnRSdWxlIGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBTT00gaW1wb3J0IHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NJbXBvcnRSdWxlOiBDU1NJbXBvcnRSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUZvbnRGYWNlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBAZm9udC1mYWNlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElGb250RmFjZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBmb250LWZhY2UgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc0ZvbnRGYWNlUnVsZTogQ1NTRm9udEZhY2VSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbVZhciBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUN1c3RvbVZhcjxUID0gYW55PiBleHRlbmRzIElOYW1lZFJ1bGVcclxue1xyXG5cdC8qKiBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuICovXHJcblx0cmVhZG9ubHkgdGVtcGxhdGVQcm9wTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgQ1NTIGN1c3RvbSBwcm9wZXJ0eSAqL1xyXG5cdHJlYWRvbmx5IHZhck5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LiAqL1xyXG5cdHJlYWRvbmx5IHZhclZhbHVlOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbVZhclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBcIjpyb290XCIgYmxvY2sgd2l0aCBDU1MgY3VzdG9tIHByb3BlcnR5IGRlZmluaXRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFyUnVsZTxUID0gYW55PiBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogTWFwIG9mIGN1c3RvbSBwcm9wZXJ0eSBuYW1lcyB0byBwcm9wZXJ0eSBkZWZpbml0aW9ucyAqL1xyXG5cdHJlYWRvbmx5IHZhcnM6IFByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj47XHJcblxyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1N0eWxlUnVsZT86IENTU1N0eWxlUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGNvbWJpbmVzIGludGVyZmFjZXMgb2YgcnVsZXMgdGhhdCBoYXZlIG5hbWVzOyBhdWNoIHJ1bGVzIGhhdmUgdG8gYmUgYXNzaWduZWQgdG8gYVxyXG4gKiBtZW1iZXIgcHJvcGVydHkgYW5kIGNhbm5vdCBiZSBiZSBjcmVhdGVkIGJ5IHRoZSBhZGRVbm5hbWVkUlVsZXMgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTmFtZWRSdWxlID0gSU5hbWVkUnVsZTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgY29tYmluZXMgaW50ZXJmYWNlcyBvZiBydWxlcyB0aGF0IGRvbid0IGhhdmUgbmFtZXM7IHRoYXQgaXMsIHRoZXkgZG9uJ3QgaGF2ZSB0byBiZVxyXG4gKiBhc3NpZ25lZCB0byBhIG1lbWJlciBwcm9wZXJ0eSBhbmQgbWF5IGJlIGNyZWF0ZWQgYnkgdGhlIGFkZFVubmFtZWRSVWxlcyBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVbm5hbWVkUnVsZSA9IElUYWdSdWxlIHwgSVNlbGVjdG9yUnVsZSB8IElHcm91cFJ1bGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVJ1bGVDb250YWluZXIgaW50ZXJmYWNlIHJlcHJlc2VudHMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgQ1NTIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZUNvbnRhaW5lcjxUID0gSVJ1bGVEZWZpbml0aW9uPiBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogTmFtZXMgb2YgY2xhc3Nlcy4gKi9cclxuXHRyZWFkb25seSBjbGFzc2VzOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ2xhc3NSdWxlPjtcclxuXHJcblx0LyoqIE5hbWVzIG9mIGVsZW1lbnQgaWRlbnRpZmllcnMuICovXHJcblx0cmVhZG9ubHkgaWRzOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJSURSdWxlPjtcclxuXHJcblx0LyoqIE5hbWVzIG9mIGFuaW1hdGlvbnMuICovXHJcblx0cmVhZG9ubHkgYW5pbWF0aW9uczogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUFuaW1hdGlvblJ1bGU+O1xyXG5cclxuXHQvKiogTmFtZXMgb2YgY3VzdG9tIENTUyBwcm9wZXJ0aWVzICovXHJcblx0cmVhZG9ubHkgdmFyczogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj47XHJcblxyXG5cdC8qKiBNYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gcnVsZSBvYmplY3RzLiAqL1xyXG5cdHJlYWRvbmx5IHJ1bGVzOiBQcm9wc09mVHlwZTxULElSdWxlPjtcclxuXHJcblx0LyoqIFJ1bGUgdGhhdCBjb21iaW5lcyBhbGwgY3VzdG9tIHZhcmlhYmxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLiAqL1xyXG5cdHJlYWRvbmx5IHZhclJ1bGU6IElDdXN0b21WYXJSdWxlPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBydWxlIGRlZmluaXRpb24gY2xhc3NlcyBjYW4gYmUgY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVEZWZpbml0aW9uXHJcbntcclxuXHQvKiogQXJyYXkgb2YgdW5uYW1lZCBydWxlcyAqL1xyXG5cdCR1bm5hbWVkPzogSVJ1bGVbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXCJDb25zdHJ1Y3RvclwiIGludGVyZmFjZSBkZWZpbmluZyBob3cgcnVsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlRGVmaW5pdGlvbkNsYXNzPFQgZXh0ZW5kcyBJUnVsZURlZmluaXRpb24+XHJcbntcclxuXHQvKiogQWxsIHJ1bGUgZGVmaW5pdGlvbiBjbGFzc2VzIHNob3VsZCBjb25mb3JtIHRvIHRoaXMgY29uc3RydWN0b3IgKi9cclxuXHRuZXcoKTogVDtcclxufVxyXG5cclxuXHJcblxyXG5pbXBvcnQge1RhZ1J1bGV9IGZyb20gXCIuL1RhZ1J1bGVcIlxyXG5pbXBvcnQge0NsYXNzUnVsZX0gZnJvbSBcIi4vQ2xhc3NSdWxlXCJcclxuaW1wb3J0IHtJRFJ1bGV9IGZyb20gXCIuL0lEUnVsZVwiXHJcbmltcG9ydCB7U2VsZWN0b3JUeXBlfSBmcm9tIFwiLi4vaGVscGVycy9TZWxlY3RvclR5cGVzXCJcclxuaW1wb3J0IHtTZWxlY3RvclJ1bGV9IGZyb20gXCIuL1NlbGVjdG9yUnVsZVwiXHJcbmltcG9ydCB7QW5pbWF0aW9uUnVsZX0gZnJvbSBcIi4vQW5pbWF0aW9uUnVsZVwiXHJcbmltcG9ydCB7Q3VzdG9tVmFyfSBmcm9tIFwiLi9DdXN0b21WYXJcIlxyXG5pbXBvcnQge1N1cHBvcnRzUnVsZX0gZnJvbSBcIi4vU3VwcG9ydHNSdWxlXCJcclxuaW1wb3J0IHtNZWRpYVJ1bGV9IGZyb20gXCIuL01lZGlhUnVsZVwiXHJcbmltcG9ydCB7SW1wb3J0UnVsZX0gZnJvbSBcIi4vSW1wb3J0UnVsZVwiXHJcbmltcG9ydCB7Rm9udEZhY2VSdWxlfSBmcm9tIFwiLi9Gb250RmFjZVJ1bGVcIlxyXG5cclxuXHJcblxyXG4vKiogQ3JlYXRlcyBuZXcgVGFnUnVsZSBvYmplY3QgICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdGFnKCB0YWdOYW1lOiBzdHJpbmcsIHN0eWxlOiBFeHRlbmRlZFN0eWxlc2V0KTogSVRhZ1J1bGVcclxuXHR7IHJldHVybiBuZXcgVGFnUnVsZSggdGFnTmFtZSwgc3R5bGUpOyB9XHJcblxyXG4vKiogUmV0dXJucyBuZXcgQ2xhc3NSdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGU6IEV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZFJ1bGUpOiBJQ2xhc3NSdWxlXHJcblx0eyByZXR1cm4gbmV3IENsYXNzUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBJRFJ1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGlkKCBzdHlsZTogRXh0ZW5kZWRTdHlsZXNldCwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZSk6IElJRFJ1bGVcclxuXHR7IHJldHVybiBuZXcgSURSdWxlKCBzdHlsZSwgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbmV3IFNlbGVjdG9yUnVsZSBvYmplY3QgICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkcnVsZSggc2VsZWN0b3I6IFNlbGVjdG9yVHlwZSwgc3R5bGU6IEV4dGVuZGVkU3R5bGVzZXQpOiBJU2VsZWN0b3JSdWxlXHJcblx0eyByZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlKTsgfVxyXG5cclxuLyoqIFJldHVybnMgbmV3IEFuaW1hdGlvblJ1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFuaW1hdGlvbigga2V5ZnJhbWVzOiBLZXlmcmFtZVtdLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRSdWxlKTogSUFuaW1hdGlvblJ1bGVcclxuXHR7IHJldHVybiBuZXcgQW5pbWF0aW9uUnVsZSgga2V5ZnJhbWVzLCBuYW1lT3ZlcnJpZGUpOyB9XHJcblxyXG4vKiogUmV0dXJucyBuZXcgQ3VzdG9tVmFyIG9iamVjdCB0aGF0IGRlZmluZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY3VzdG9tPEsgZXh0ZW5kcyBrZXlvZiBQdXJlU3R5bGVzZXQ+KCB0ZW1wbGF0ZVByb3BOYW1lOiBLLCBwcm9wVmFsOiBQdXJlU3R5bGVzZXRbS10sXHJcblx0XHRcdFx0bmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZSk6IElDdXN0b21WYXI8UHVyZVN0eWxlc2V0W0tdPlxyXG5cdHsgcmV0dXJuIG5ldyBDdXN0b21WYXIoIHRlbXBsYXRlUHJvcE5hbWUsIHByb3BWYWwsIG5hbWVPdmVycmlkZSk7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBTdXBwb3J0c1J1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHN1cHBvcnRzPFQ+KCBxdWVyeTogU3VwcG9ydHNRdWVyeSwgZGVmaW5pdGlvbjogVCk6IElTdXBwb3J0c1J1bGU8VD5cclxuXHR7IHJldHVybiBuZXcgU3VwcG9ydHNSdWxlKCBxdWVyeSwgZGVmaW5pdGlvbik7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBNZWRpYVJ1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJG1lZGlhPFQ+KCBxdWVyeTogc3RyaW5nIHwgTWVkaWFRdWVyeSwgZGVmaW5pdGlvbjogVCk6IElNZWRpYVJ1bGU8VD5cclxuXHR7IHJldHVybiBuZXcgTWVkaWFSdWxlKCBxdWVyeSwgZGVmaW5pdGlvbik7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBJbXBvcnRSdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpbXBvcnQoIHVybDogc3RyaW5nLCBxdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnkpOiBJSW1wb3J0UnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBJbXBvcnRSdWxlKCB1cmwsIHF1ZXJ5KTsgfVxyXG5cclxuLyoqIFJldHVybnMgbmV3IEZvbkZhY2VSdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRmb250ZmFjZSggZm9udGZhY2U6IEZvbnRmYWNlKTogSUZvbnRGYWNlUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBGb250RmFjZVJ1bGUoIGZvbnRmYWNlKTsgfVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTZWxlY3RvclJ1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIFJ1bGVUeXBlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCJcclxuaW1wb3J0IHtTZWxlY3RvclR5cGV9IGZyb20gXCIuLi9oZWxwZXJzL1NlbGVjdG9yVHlwZXNcIjtcclxuaW1wb3J0IHtTZWxlY3Rvcn0gZnJvbSBcIi4uL2hlbHBlcnMvU2VsZWN0b3JGdW5jc1wiO1xyXG5pbXBvcnQge1J1bGVDb250YWluZXIsIElSdWxlQ29udGFpbmVyT3duZXJ9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNlbGVjdG9yUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3JSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVNlbGVjdG9yUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzZWxlY3Rvcj86IFNlbGVjdG9yVHlwZSwgc3R5bGU/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5TRUxFQ1RPUiwgc3R5bGUpO1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoIHNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFNlbGVjdG9yUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IFNlbGVjdG9yUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRuZXdSdWxlLnNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnNlbGVjdG9yLnRvQ3NzU3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBDU1MgcnVsZSBzZWxlY3RvciBzdHJpbmcgKi9cclxuXHRwdWJsaWMgZ2V0IHNlbGVjdG9yVGV4dCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zZWxlY3Rvci50b0Nzc1N0cmluZygpOyB9XHJcblxyXG5cdC8vIHNlbGVjdG9yIG9iamVjdCBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzZWxlY3RvcjogU2VsZWN0b3I7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU3R5bGVSdWxlLCBFeHRlbmRlZFN0eWxlc2V0LCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCI7XHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7c3R5bGVzZXRUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUZ1bmNzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCI7XHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lciwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVSdWxlIGNsYXNzIGlzIHVzZWQgYXMgYSBiYXNlIGNsYXNzIGZvciBydWxlcyB0aGF0IGhhdmUgYSBzaW5nbGUgc3R5bGUgcnVsZS5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHlsZVJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSVN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0eXBlOiBSdWxlVHlwZSwgc3R5bGU/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCB0eXBlKTtcclxuXHJcblx0XHR0aGlzLnN0eWxlc2V0ID0ge307XHJcblx0XHR0aGlzLnBhcmVudHMgPSBbXTtcclxuXHRcdHRoaXMuaW1wb3J0YW50ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG5cdFx0aWYgKHN0eWxlKVxyXG5cdFx0XHR0aGlzLnBhcnNlRXh0ZW5kZWRTdHlsZXNldCggc3R5bGUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBwYXJzZUV4dGVuZGVkU3R5bGVzZXQoIHN0eWxlOiBFeHRlbmRlZFN0eWxlc2V0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmIChzdHlsZSBpbnN0YW5jZW9mIFN0eWxlUnVsZSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gc3R5bGVzZXQgaXMgYSBzaW5nbGUgSVN0eWxlUnVsZSBvYmplY3QsIHdoaWNoIHdlIGFkZCBhcyBvdXIgcGFyZW50XHJcblx0XHRcdHRoaXMucGFyZW50cy5wdXNoKCBzdHlsZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHN0eWxlKSlcclxuXHRcdHtcclxuXHRcdFx0Ly8gc3R5bGVzZXQgaXMgYW4gYXJyYXkgb2YgSVN0eWxlUnVsZSBvYmplY3RzLCB3aGljaCB3ZSBhZGQgYXMgb3VyIHBhcmVudHNcclxuXHRcdFx0Zm9yKCBsZXQgcnVsZSBvZiBzdHlsZSlcclxuXHRcdFx0XHR0aGlzLnBhcmVudHMucHVzaCggcnVsZSBhcyBTdHlsZVJ1bGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBleHRlbmRlZFN0eWxlc2V0IGlzIGEgc2V0IG9mIHN0eWxlIHByb3BlcnRpZXMgYnV0IGNhbiBhbHNvIGluY2x1ZGUgdGhlICRleHRlbmRzIGFuZFxyXG5cdFx0XHQvLyAkaW1wb3J0YW50IHByb3BlcnRpZXMuIFJlbWVtYmVyIHBhcmVudHMgYW5kIGltcG9ydGFudCBuYW1lcyBhbmQgY29weSB0aGUgcmVzdCBvZlxyXG5cdFx0XHQvLyBzdHlsZSBwcm9wZXJ0aWVzIHRvIG91ciBpbnRlcm5hbCBTdHlsZXNldCBvYmplY3QuXHJcblx0XHRcdGZvciggbGV0IHByb3BOYW1lIGluIHN0eWxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHByb3BWYWwgPSBzdHlsZVtwcm9wTmFtZV07XHJcblx0XHRcdFx0aWYgKHByb3BOYW1lID09PSBcIiRleHRlbmRzXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGluaGVyaXRzUHJvcFZhbCA9IHByb3BWYWwgYXMgKElTdHlsZVJ1bGUgfCBJU3R5bGVSdWxlW10pO1xyXG5cdFx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaW5oZXJpdHNQcm9wVmFsKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBpcyBhbiBhcnJheSBvZiBJU3R5bGVSdWxlIG9iamVjdHMsIHdoaWNoIHdlIGFkZCBhcyBvdXIgcGFyZW50c1xyXG5cdFx0XHRcdFx0XHRmb3IoIGxldCBydWxlIG9mIGluaGVyaXRzUHJvcFZhbClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnBhcmVudHMucHVzaCggcnVsZSBhcyBTdHlsZVJ1bGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzIGlzIGEgc2luZ2xlIElTdHlsZVJ1bGUgb2JqZWN0LCB3aGljaCB3ZSBhZGQgYXMgb3VyIHBhcmVudFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhcmVudHMucHVzaCggaW5oZXJpdHNQcm9wVmFsIGFzIFN0eWxlUnVsZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKHByb3BOYW1lID09PSBcIiRpbXBvcnRhbnRcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW1wb3J0YW50UHJvcFZhbCA9IHByb3BWYWwgYXMgKHN0cmluZyB8IHN0cmluZ1tdKTtcclxuXHRcdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KGltcG9ydGFudFByb3BWYWwpKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzIGlzIGlzIGFuIGFycmF5IG9mIHN0cmluZ3NcclxuXHRcdFx0XHRcdFx0Zm9yKCBsZXQgaW1wb3J0YW50IG9mIGltcG9ydGFudFByb3BWYWwpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5pbXBvcnRhbnQuYWRkKCBpbXBvcnRhbnQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzIGlzIGEgc2luZ2xlIHN0cmluZ1xyXG5cdFx0XHRcdFx0XHR0aGlzLmltcG9ydGFudC5hZGQoIGltcG9ydGFudFByb3BWYWwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gY29weSB0aGUgcHJvcGVydHkgdmFsdWUgdG8gb3VyIGludGVybmFsIHN0eWxlc2V0XHJcblx0XHRcdFx0XHR0aGlzLnN0eWxlc2V0W3Byb3BOYW1lXSA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBSdWxlQ29udGFpbmVyLCBvd25lcjogSVJ1bGVDb250YWluZXJPd25lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gaWYgd2UgaGF2ZSBwYXJlbnRzLCB3ZSBuZWVkIHRvIGZpcnN0IGNvcHkgdGhlaXIgc3R5bGVzZXRzLCBzbyB0aGF0IG91ciBzdHlsZXNldCBjYW5cclxuXHRcdC8vIG92ZXJyaWRlIHRoZWlyIHZhbHVlcy5cclxuXHRcdGlmICh0aGlzLnBhcmVudHMubGVuZ3RoID4gMClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHRlbXBTdHlsZXNldCA9IHRoaXMuc3R5bGVzZXQ7XHJcblx0XHRcdHRoaXMuc3R5bGVzZXQgPSB7fTtcclxuXHJcblx0XHRcdC8vIGdvIHRocm91Z2ggYWxsIHBhcmVudHMgYW5kIGNvcHkgdGhlaXIgc3R5bGUgcHJvcGVydGllcyB0byBvdXIgb3duIHN0eWxlc2V0LlxyXG5cdFx0XHRmb3IoIGxldCBwYXJlbnQgb2YgdGhpcy5wYXJlbnRzKVxyXG5cdFx0XHRcdE9iamVjdC5hc3NpZ24oIHRoaXMuc3R5bGVzZXQsIHBhcmVudC5zdHlsZXNldCk7XHJcblxyXG5cdFx0XHQvLyBjb3B5IG91ciBzdHlsZXMgb3ZlciB0aG9zZSBvZiB0aGUgcGFyZW50c1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnN0eWxlc2V0LCB0ZW1wU3R5bGVzZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHJvdGVjdGVkIGNvcHlGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnN0eWxlc2V0ID0gc3JjLnN0eWxlc2V0O1xyXG5cdFx0dGhpcy5wYXJlbnRzID0gc3JjLnBhcmVudHM7XHJcblx0XHR0aGlzLmltcG9ydGFudCA9IHNyYy5pbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBpbmRleCA9IHBhcmVudC5pbnNlcnRSdWxlKFxyXG5cdFx0XHRgJHt0aGlzLmdlU2VsZWN0b3JTdHJpbmcoKX0gJHtzdHlsZXNldFRvQ3NzU3RyaW5nKCB0aGlzLnN0eWxlc2V0LCB0aGlzLmltcG9ydGFudCl9YCxcclxuXHRcdFx0cGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblxyXG5cdFx0dGhpcy5jc3NSdWxlID0gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2VTZWxlY3RvclN0cmluZygpOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cHVibGljIGdldCBjc3NTdHlsZVJ1bGUoKTogQ1NTU3R5bGVSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NTdHlsZVJ1bGU7IH1cclxuXHJcblx0Ly8gU3R5bGUgcnVsZSBkZWZpbmluZyBzdHlsZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBwYXJlbnRzOiBTdHlsZVJ1bGVbXTtcclxuXHJcblx0Ly8gU2V0IG9mIHByb3BlcnR5IG5hbWVzIGZyb20gdGhpcyBzdHlsZXNldCB0aGF0IHNob3VsZCBiZSAhaW1wb3J0YW50LlxyXG5cdGltcG9ydGFudDogU2V0PHN0cmluZz47XHJcblxyXG5cdC8vIFJlc3VsdGFudCBTdHlsZXNldCBvYmplY3QgZGVmaW5pbmcgcHJvcGVydGllcyB0byBiZSBpbnNlcnRlZCBpbnRvIERPTS5cclxuXHRwdWJsaWMgc3R5bGVzZXQ6IFN0eWxlc2V0O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN1cHBvcnRzUnVsZSwgSVJ1bGVEZWZpbml0aW9uQ2xhc3MsIFJ1bGVUeXBlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge0dyb3VwUnVsZX0gZnJvbSBcIi4vR3JvdXBSdWxlXCJcclxuaW1wb3J0IHtTdXBwb3J0c1F1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N1cHBvcnRRdWVyeVRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN1cHBvcnRSdWxlIHR5cGUgZGVzY3JpYmVzIGEgQ1NTIEBzdXBwb3J0cyBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN1cHBvcnRzUnVsZTxUID0gYW55PiBleHRlbmRzIEdyb3VwUnVsZTxUPiBpbXBsZW1lbnRzIElTdXBwb3J0c1J1bGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcXVlcnk/OiBTdXBwb3J0c1F1ZXJ5LCBkZWZpbml0aW9uPzogVClcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuU1VQUE9SVFMsIGRlZmluaXRpb24pO1xyXG5cclxuXHRcdC8vIGNvbnZlcnQgdGhlIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgZm9ybVxyXG5cdFx0dGhpcy5xdWVyeVN0cmluZyA9IHN1cHBvcnRRdWVyeVRvQ3NzU3RyaW5nKCBxdWVyeSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdXBwb3J0c1J1bGU8VD5cclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBTdXBwb3J0c1J1bGU8VD4oKTtcclxuXHRcdG5ld1J1bGUucXVlcnlTdHJpbmcgPSB0aGlzLnF1ZXJ5U3RyaW5nO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBxdWVyeSBpcyBzdXBwb3J0ZWQgYW5kIGlmIGl0IGlzIG5vdCwgZG9uJ3QgaW5zZXJ0IHRoZSBydWxlXHJcblx0XHRpZiAoIUNTUy5zdXBwb3J0cyggdGhpcy5xdWVyeVN0cmluZykpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdFx0XHJcblx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggYEBzdXBwb3J0cyAke3RoaXMucXVlcnlTdHJpbmd9IHt9YCwgcGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdHRoaXMuaW5zZXJ0UnVsZXMoIHRoaXMuY3NzU3VwcG9ydHNSdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGdldCBjc3NTdXBwb3J0c1J1bGUoKTogQ1NTU3VwcG9ydHNSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NTdXBwb3J0c1J1bGU7IH1cclxuXHJcblx0Ly8gc3VwcG9ydCBxdWVyeSBmb3IgdGhpcyBydWxlIGluIGEgc3RyaW5nIGZvcm0uXHJcblx0cHVibGljIHF1ZXJ5U3RyaW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJVGFnUnVsZSwgRXh0ZW5kZWRTdHlsZXNldCwgUnVsZVR5cGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVcIjtcclxuaW1wb3J0IHtSdWxlQ29udGFpbmVyLCBJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUYWdSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSB0YWcgbmFtZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUYWdSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSVRhZ1J1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdGFnTmFtZT86IHN0cmluZywgc3R5bGU/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5UQUcsIHN0eWxlKTtcclxuXHRcdHRoaXMudGFnTmFtZSA9IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBUYWdSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgVGFnUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRuZXdSdWxlLnRhZ05hbWUgPSB0aGlzLnRhZ05hbWU7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2VTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy50YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogTmFtZSBvZiB0aGUgSFRNTCB0YWcgKi9cclxuXHRwdWJsaWMgZ2V0IHRhZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy50YWdOYW1lOyB9XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHRhZyB0byB3aGljaCB0aGUgc3R5bGVzZXQgYXBwbGllcy5cclxuXHRwdWJsaWMgdGFnTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBkZWZpbmVzIHR5cGVzIGFuZCBmdW5jdGlvbnMgdGhhdCBhbGxvdyBidWlsZGluZyBDU1Mgc3R5bGUgc2hlZXRzIHVzaW5nIFR5cGVTY3JpcHQuXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCB7SVJ1bGVDb250YWluZXIsIElSdWxlRGVmaW5pdGlvbkNsYXNzLCBJUnVsZURlZmluaXRpb259IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuXHJcblxyXG4vKipcclxuICogXCJDb25zdHJ1Y3RvclwiIGludGVyZmFjZSBkZWZpbmluZyBob3cgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBjbGFzc2VzIGNhbiBiZSBjcmVhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVTY29wZURlZmluaXRpb25DbGFzczxUPiBleHRlbmRzIElSdWxlRGVmaW5pdGlvbkNsYXNzPFQ+XHJcbntcclxuXHQvKiogQWxsIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gb2JqZWN0cyBzaG91bGQgY29uZm9ybSB0byB0aGlzIGNvbnN0cnVjdG9yICovXHJcblx0bmV3KCk6IFQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5pZGljYXRpbmcgdGhhdCBtdWx0aXBsZSBzdHlsZSBzY29wZXMgY2FuIGJlIGNyZWF0ZWQgZm9yIHRoaXMgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiAtXHJcblx0ICogZWFjaCB0aW1lIHdpdGggdW5pcXVlIHJ1bGUgSURzLiBUaGlzIGlzIHVzZWZ1bCBmb3Igc3R5bGVzIGNyZWF0ZWQgZm9yIGEgY29udHJvbCAtIGUuZy4gdHJlZVxyXG5cdCAqIG9yIGFjY29yZGVvbiAtIHdoaWNoIGNhbiBiZSB1c2VkIG11bHRpcGxlIHRpbWVzIG9uIHRoZSBzYW1lIHBhZ2UgYnV0IHdpdGggZGlmZmVyZW50IHN0eWxlcy5cclxuXHQgKiBCeSBkZWZhdWx0LCBzdHlsZSBzY29wZSBkZWZpbml0aW9ucyBhcmUgc2luZ3VsYXIsIHRoYXQgaXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYSBzdHlsZSBzY29wZVxyXG5cdCAqIG9iamVjdCBpcyBjcmVhdGVkIGZvciB0aGVtIGFuZCBpbnNlcnRlZCBpbnRvIERPTS5cclxuXHQgKi9cclxuXHRpc011bHRpcGxleD86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3R5bGVTY29wZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgcmVzdWx0YW50IHN0eWxlIHNjb3BlIGFmdGVyIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uXHJcbiAqIGhhcyBiZWVuIHByb2Nlc3NlZC4gVGhlIHN0eWxlIHNjb3BlIG9iamVjdCBjb250YWlucyBuYW1lcyBvZiBJRHMsIGNsYXNzZXMgYW5kIGFuaW1hdGlvbnMsIHdoaWNoXHJcbiAqIGNhbiBiZSB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbiBjb2RlLiBUaGUgaW50ZXJmYWNlIGFsc28gcHJvdmlkZXMgbWV0aG9kcyB0aGF0IGFyZSB1c2VkIHRvXHJcbiAqIG1hbmlwdWxhdGUgdGhlIHJ1bGVzIGFuZCB0aGVpciBzdHlsZXNldHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVNjb3BlPFQgPSBhbnk+IGV4dGVuZHMgSVJ1bGVDb250YWluZXI8VD5cclxue1xyXG5cdC8qKiBJbnNlcnRzIHRoaXMgc3R5bGUgc2NvcGUgaW50byBET00uICovXHJcblx0YWN0aXZhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqIFJlbW92ZXMgdGhpcyBzdHlsZSBzY29wZSBmcm9tIERPTSAtIG9ubHkgd29ya3MgZm9yIG11bHRpcGxleCBzdHlsZSBzY29wZXMuICovXHJcblx0ZGVhY3RpdmF0ZSgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gYW5kIHJldHVybnMgdGhlIFN0eWxlU2NvcGUgb2JqZWN0IHRoYXQgY29udGFpbnNcclxuICogbmFtZXMgb2YgSURzLCBjbGFzc2VzIGFuZCBrZXlmcmFtZXMgYW5kIGFsbG93cyBzdHlsZSBtYW5pcHVsYXRpb25zLiBGb3IgYSBnaXZlbiBzdHlsZSBzY29wZVxyXG4gKiBkZWZpbml0aW9uIGNsYXNzIHRoZXJlIGlzIGEgc2luZ2xlIHN0eWxlIHNjb3BlIG9iamVjdCwgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb25cclxuICogaXMgaW52b2tlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdXNlPFQgPSBJUnVsZURlZmluaXRpb24+KCBzdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVTY29wZURlZmluaXRpb25DbGFzczxUPik6IElTdHlsZVNjb3BlPFQ+XHJcbntcclxuXHQvLyBpZiB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBpcyBtdWx0aXBsZXgsIGNyZWF0ZSBuZXcgU3R5bGVTY29wZSBvYmplY3QgZXZlcnkgdGltZTtcclxuXHQvLyBvdGhlcndpc2UsIGNoZWNrIHdoZXRoZXIgdGhlIHN0eWxlIHNoZWV0IGRlZmluaXRpb24gb2JqZWN0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLiBUaGlzXHJcblx0Ly8gaXMgaW5kaWNhdGVkIGJ5IHRoZSBleGlzdGVuY2Ugb2YgdGhlIGluc3RhbmNlIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgY2xhc3MuXHJcblx0aWYgKHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MuaXNNdWx0aXBsZXgpXHJcblx0XHRyZXR1cm4gbmV3IFN0eWxlU2NvcGUoIHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyB3ZSBkb24ndCB3YW50IHRoZSBjbGFzcyBzdHlsZVNjb3BlIHByb3BlcnR5IHRvIGJlIGV4cG9zZWQgb24gdGhlIHB1YmxpY2x5IGF2YWlsYWJsZVxyXG5cdFx0Ly8gaW50ZXJmYWNlOyB0aGVyZWZvcmUsIHdlIGFjY2VzcyBpdCB2aWEgXCJhcyBhbnlcIi5cclxuXHRcdGxldCBzdHlsZVNjb3BlID0gKHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MgYXMgYW55KS5zdHlsZVNjb3BlIGFzIFN0eWxlU2NvcGU8VD47XHJcblx0XHRpZiAoIXN0eWxlU2NvcGUpXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlU2NvcGUgPSBuZXcgU3R5bGVTY29wZSggc3R5bGVTY29wZURlZmluaXRpb25DbGFzcyk7XHJcblx0XHRcdChzdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzIGFzIGFueSkuc3R5bGVTY29wZSA9IHN0eWxlU2NvcGU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHN0eWxlU2NvcGU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIHNjb3BlIGRlZmluaXRpb24sIGluc2VydHMgdGhlIENTUyBydWxlcyBpbnRvIERPTSBhbmQgcmV0dXJucyB0aGVcclxuICogU3R5bGVTY29wZSBvYmplY3QgdGhhdCBjb250YWlucyBuYW1lcyBvZiBJRHMsIGNsYXNzZXMgYW5kIGtleWZyYW1lcyBhbmQgYWxsb3dzIHN0eWxlXHJcbiAqIG1hbmlwdWxhdGlvbnMuIEZvciBhIGdpdmVuIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gY2xhc3MgdGhlcmUgaXMgYSBzaW5nbGUgc3R5bGUgc2NvcGUgb2JqZWN0LFxyXG4gKiBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXMgdGhpcyBmdW5jdGlvbiBpcyBpbnZva2VkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhY3RpdmF0ZTxUID0gSVJ1bGVEZWZpbml0aW9uPiggc3R5bGVTY29wZURlZmluaXRpb25DbGFzczogSVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M8VD4pOiBJU3R5bGVTY29wZTxUPlxyXG57XHJcblx0bGV0IHNjb3BlID0gJHVzZSggc3R5bGVTY29wZURlZmluaXRpb25DbGFzcyk7XHJcblx0c2NvcGUuYWN0aXZhdGUoKTtcclxuXHRyZXR1cm4gc2NvcGU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyB0byBjb25maWd1cmUgVHNzTWFuYWdlciBvcHRpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge1Rzc01hbmFnZXJ9IGZyb20gXCIuL1Rzc01hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkICh1bmlxdWUpIHN0eWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG4gKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG4gKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG4gKiBAcGFyYW0gb3B0aW1pemVcclxuICogQHBhcmFtIHByZWZpeFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZU9wdGltaXplZFN0eWxlTmFtZXMoIG9wdGltaXplOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcblx0eyBUc3NNYW5hZ2VyLnVzZU9wdGltaXplZFN0eWxlTmFtZXMoIG9wdGltaXplLCBwcmVmaXgpOyB9XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MsIElTdHlsZVNjb3BlfSBmcm9tIFwiLi9TY29wZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlVHlwZSwgSVJ1bGVEZWZpbml0aW9uLCBJUnVsZURlZmluaXRpb25DbGFzc30gZnJvbSBcIi4uL3J1bGVzL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVcIlxyXG5pbXBvcnQge1Rzc01hbmFnZXJ9IGZyb20gXCIuL1Rzc01hbmFnZXJcIlxyXG5pbXBvcnQge1J1bGVDb250YWluZXIsIElSdWxlQ29udGFpbmVyT3duZXJ9IGZyb20gXCIuLi9ydWxlcy9SdWxlQ29udGFpbmVyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNjb3BlIGNsYXNzIHJlcHJlc2VudHMgYSBwYXJzZWQgZm9ybSBvZiBhIElTdHlsZVNjb3BlRGVmaW5pdGlvbi1kZXJpdmVkIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0eWxlU2NvcGU8VCA9IElSdWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBSdWxlQ29udGFpbmVyPFQ+IGltcGxlbWVudHMgSVN0eWxlU2NvcGU8VD4sIElSdWxlQ29udGFpbmVyT3duZXJcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVTY29wZURlZmluaXRpb25DbGFzczxUPilcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuU0NPUEUsIGRlZmluaXRpb25DbGFzcylcclxuXHJcblx0XHR0aGlzLmRlZmluaXRpb25DbGFzcyA9IGRlZmluaXRpb25DbGFzcztcclxuXHJcblx0XHR0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9IDA7XHJcblx0XHR0aGlzLmltcG9ydGVkU2NvcGVzID0gW107XHJcblxyXG5cdFx0dGhpcy5wcm9jZXNzU2NvcGUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBpcyBhIHJlYWwgQ1NTIHJ1bGUgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgdW5kZXIgdGhlIDxzdHlsZT5cclxuXHQvLyBlbGVtZW50LiBGb3IgdGhlIG1ham9yaXR5IG9mIFJ1bGUtZGVyaXZlZCBjbGFzc2VzIHRoaXMgaXMgdHJ1ZTsgaG93ZXZlciwgZm9yIHNvbWUgY2xhc3NlcyxcclxuXHQvLyBlLmcuIGZvciB0aGUgQ3VzdG9tVmFyIGNsYXNzLCB0aGlzIGlzIG5vdCBzby5cclxuXHRwdWJsaWMgZ2V0IGlzUmVhbENzc1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBSdWxlIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5pbnNlcnRSdWxlcyggdGhpcy5jc3NTdHlsZVNoZWV0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBpbnN0YW5jZSwgcGFyc2VzIGl0cyBwcm9wZXJ0aWVzIGFuZCBjcmVhdGVzIG5hbWVzIGZvclxyXG5cdC8vIGNsYXNzZXMsIElEcywgYW5pbWF0aW9ucy5cclxuXHRwcml2YXRlIHByb2Nlc3NTY29wZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY2hlY2sgaWYgdGhlIHNjb3BlIGRlZmluaXRpb24gaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWRcclxuXHRcdGlmICh0aGlzLmlzUHJvY2Vzc2VkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gdGhlIGNvbnRhaW5lciBhbmQgdGhlIG93bmVyIHByb3BlcnRpZXMgb2YgdGhlIFJ1bGUgYmFzZSBjbGFzcyBwb2ludCB0byB0aGUgU3R5bGVTY29wZVxyXG5cdFx0Ly8gb2JqZWN0IGl0c2VsZlxyXG5cdFx0c3VwZXIucHJvY2VzcyggdGhpcywgdGhpcywgbnVsbCk7XHJcblxyXG5cdFx0dGhpcy5pc011bHRpcGxleCA9ICEhdGhpcy5kZWZpbml0aW9uQ2xhc3MuaXNNdWx0aXBsZXg7XHJcblxyXG5cdFx0Ly8gaW4gREVCVUcsIGVhY2ggY2xhc3MgaGFzIGEgbmFtZSB1bmxlc3MgaXQgd2FzIGNyZWF0ZWQgYXMgYW4gYW5vbnltb3VzIGNsYXNzLiBJbiBSRUxFQVNFLFxyXG5cdFx0Ly8gKGFzIHdlbGwgYXMgaW4gdGhlIGFub255bW91cyBjYXNlcyksIHRoZSBuYW1lIGlzIHVuZGVmaW5lZCBhbmQgd2UgZ2VuZXJhdGUgYSB1bmlxdWVcclxuXHRcdC8vIG5hbWUgZm9yIHRoZSBzdHlsZSBzY29wZS5cclxuXHRcdHRoaXMubmFtZSA9IHRoaXMuZGVmaW5pdGlvbkNsYXNzLm5hbWU7XHJcblx0XHRpZiAoIXRoaXMubmFtZSlcclxuXHRcdFx0dGhpcy5uYW1lID0gVHNzTWFuYWdlci5nZW5lcmF0ZVVuaXF1ZU5hbWUoIFwic1wiKTtcclxuXHJcblx0XHQvLyBwcm9jZXNzIHN1Yi1ydWxlcyBydWxlcy5cclxuXHRcdHRoaXMucHJvY2Vzc1J1bGVzKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBBZGRzIGEgc3R5bGUgc2NvcGUgdGhpcyBzdHlsZSBzY29wZSAqL1xyXG5cdHB1YmxpYyBhZGRJbXBvcnRlZFNjb3BlKCBzY29wZTogSVN0eWxlU2NvcGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5pbXBvcnRlZFNjb3Blcy5wdXNoKCBzY29wZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBHZW5lcmF0ZXMgYSBuYW1lLCB3aGljaCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGlzIHN0eWxlIHNjb3BlICovXHJcblx0cHVibGljIGdldFNjb3BlZFJ1bGVOYW1lZCggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNoZWNrIHdoZXRoZXIgd2UgYWxyZWFkeSBoYXZlIHRoaXMgcnVsZSBuYW1lOiBpZiB5ZXMsIHJldHVybiB0aGUgYWxyZWFkeSBhc3NpZ25lZFxyXG5cdFx0Ly8gdW5pcXVlIHNjb3BlZCBuYW1lXHJcblx0XHRpZiAocnVsZU5hbWUgaW4gdGhpcy5fYWxsTmFtZXMpXHJcblx0XHRcdHJldHVybiB0aGlzLl9hbGxOYW1lc1tydWxlTmFtZV07XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0aGlzLmdlbmVyYXRlU2NvcGVkTmFtZSggcnVsZU5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgYSBuYW1lLCB3aGljaCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGlzIHN0eWxlIHNjb3BlXHJcblx0cHVibGljIGdlbmVyYXRlU2NvcGVkTmFtZSggcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0aGlzLmlzTXVsdGlwbGV4KVxyXG5cdFx0XHRyZXR1cm4gVHNzTWFuYWdlci5nZW5lcmF0ZVVuaXF1ZU5hbWUoKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIFRzc01hbmFnZXIuZ2VuZXJhdGVOYW1lKCB0aGlzLm5hbWUsIHJ1bGVOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEluc2VydHMgdGhpcyBzdHlsZSBzY29wZSBpbnRvIERPTS4gKi9cclxuXHRwdWJsaWMgYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGFjdGl2YXRlIGltcG9ydGVkIHNjb3Blc1xyXG5cdFx0Zm9yKCBsZXQgc2NvcGUgb2YgdGhpcy5pbXBvcnRlZFNjb3BlcylcclxuXHRcdFx0c2NvcGUuYWN0aXZhdGUoKTtcclxuXHJcblx0XHRpZiAoKyt0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMSAmJiAhdGhpcy5pc0FjdGl2YXRlZClcclxuXHRcdFx0VHNzTWFuYWdlci5hY3RpdmF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBSZW1vdmVzIHRoaXMgc3R5bGUgc2NvcGUgZnJvbSBET00gLSBvbmx5IHdvcmtzIGZvciBtdWx0aXBsZXggc3R5bGUgc2NvcGVzLiAqL1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBndWFyZCBmcm9tIGV4dHJhIGRlYWN0aXZhdGUgY2FsbHNcclxuXHRcdGlmICh0aGlzLmFjdGl2YXRpb25SZWZDb3VudCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGRlYWN0aXZhdGUgaW1wb3J0ZWQgc2NvcGVzXHJcblx0XHRmb3IoIGxldCBzY29wZSBvZiB0aGlzLmltcG9ydGVkU2NvcGVzKVxyXG5cdFx0XHRzY29wZS5kZWFjdGl2YXRlKCk7XHJcblxyXG5cdFx0aWYgKC0tdGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDAgJiYgdGhpcy5pc0FjdGl2YXRlZClcclxuXHRcdFx0VHNzTWFuYWdlci5kZWFjdGl2YXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHNldERPTUluZm8oIHN0eWxlU2hlZXQ6IENTU1N0eWxlU2hlZXQpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NTdHlsZVNoZWV0ID0gc3R5bGVTaGVldDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIGNsZWFyRE9NSW5mbygpXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NTdHlsZVNoZWV0ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBIZWxwZXIgcHJvcGVydGllc1xyXG5cdHByaXZhdGUgZ2V0IGlzQWN0aXZhdGVkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLmNzc1N0eWxlU2hlZXQ7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGFzcyB0aGF0IGRlZmluZWQgdGhpcyBzdHlsZSBzY29wZS4gVGhpcyBtZW1iZXIgaXMgdXNlZCBmb3Igc3R5bGUgc2NvcGUgZGVyaXZhdGlvblxyXG5cdHByb3RlY3RlZCByZWFkb25seSBkZWZpbml0aW9uQ2xhc3M6IElTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzPFQ+O1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBzdHlsZSBzaGVldCAtIHVzZWQgdG8gY3JlYXRlIHNjb3BlZCBuYW1lcyBvZiBzdHlsZSBydWxlc1xyXG5cdHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgc3R5bGUgc2NvcGUgb2JqZWN0IG93bnMgdGhlIDxzdHlsZT4gZWxlbWVudC4gVGhpcyBpcyB0cnVlIG9ubHlcclxuXHQvLyBmb3IgbXVsdGlwbGV4IHN0eWxlcyBzY29wZXMgLSB0aG9zZSB0aGF0IGNhbiBiZSBjcmVhZWQgbXVsdGlwbGUgdGltZXMuXHJcblx0cHVibGljIGlzTXVsdGlwbGV4OiBib29sZWFuO1xyXG5cclxuXHQvLyBDU1Mgc3R5bGUgc2hlZXRcclxuXHRwdWJsaWMgY3NzU3R5bGVTaGVldDogQ1NTU3R5bGVTaGVldDtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIGNvdW50IG9mIGFjdGl2YXRpb24gcmVxdWVzdHMuXHJcblx0cHJpdmF0ZSBhY3RpdmF0aW9uUmVmQ291bnQ6IG51bWJlcjtcclxuXHJcblx0Ly8gTGlzdCBvZiBpbXBvcnRlZCBzdHlsZSBzY29wZSBvYmplY3RzIHRoYXQgd2lsbCBiZSBhY3RpdmF0ZWQgd2hlbiBvdXIgc2NvcGUgaXMgYWN0aXZhdGVkLlxyXG5cdHByaXZhdGUgaW1wb3J0ZWRTY29wZXM6IElTdHlsZVNjb3BlW107XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZVNjb3BlfSBmcm9tIFwiLi9TdHlsZVNjb3BlXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHNzTWFuYWdlciBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgaW5zZXJ0aW5nIENTUyBydWxlcyBpbnRvIHRoZSBET00uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHNzTWFuYWdlclxyXG57XHJcblx0Ly8gVGhpcyBjbGFzcyBoYXMgc3RhdGljIG1lbWJlcnMgb25seS5cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkICh1bmlxdWUpIHN0eWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG5cdCAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcblx0ICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiBAcGFyYW0gb3B0aW1pemVcclxuXHQgKiBAcGFyYW0gcHJlZml4XHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1c2VPcHRpbWl6ZWRTdHlsZU5hbWVzKCBvcHRpbWl6ZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudXNlVW5pcXVlU3R5bGVOYW1lcyA9IG9wdGltaXplO1xyXG5cdFx0dGhpcy51bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gcHJlZml4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZXMgbmFtZSB0byB1c2UgZm9yIHRoZSBnaXZlbiBydWxlIGZyb20gdGhlIGdpdmVuIHN0eWxlIHNoZWV0LlxyXG5cdCAqIEBwYXJhbSBzaGVldE5hbWUgXHJcblx0ICogQHBhcmFtIHJ1bGVOYW1lIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVOYW1lKCBzaGVldE5hbWU6IHN0cmluZywgcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVzZVVuaXF1ZVN0eWxlTmFtZXNcclxuXHRcdFx0PyB0aGlzLmdlbmVyYXRlVW5pcXVlTmFtZSggdGhpcy51bmlxdWVTdHlsZU5hbWVzUHJlZml4KVxyXG5cdFx0XHQ6IGAke3NoZWV0TmFtZX1fJHtydWxlTmFtZX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgbmFtZSwgd2hpY2ggY2FuIGJlIHVzZWQgZWl0aGVyIGZvciBzdHlsZSBlbGVtZW50J3MgSUQgb3Igb3IgY2xhc3MsXHJcblx0ICogaWRlbnRpZmllciBvciBhbmltYXRpb24gbmFtZS4gTmFtZXMgYXJlIGdlbmVyYXRlZCB1c2luZyBhIHNpbXBsZSBpbmNyZW1lbnRpbmcgbnVtYmVyLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVVbmlxdWVOYW1lKCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6IFwiblwiKSArIHRoaXMubmV4dFVuaXF1ZUlEKys7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIHJ1bGVzIGZyb20gdGhlIGdpdmVuIHN0eWxlIHNjb3BlIGludG8gRE9NICovXHJcblx0cHVibGljIHN0YXRpYyBhY3RpdmF0ZSggc3R5bGVTY29wZTogU3R5bGVTY29wZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXN0eWxlU2NvcGUpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdFx0XHJcblx0XHQvLyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZ2l2ZW4gc2NvcGUgaXMgbXVsdGlwbGV4LCB3ZSBlaXRoZXIgY3JlYXRlIGEgbmV3IDxzdHlsZT4gZWxlbWVudFxyXG5cdFx0Ly8gb3IgcmV1c2Ugb3VyIFwiZ2xvYmFsXCIgb25lXHJcblx0XHRsZXQgc3R5bGVTaGVldDogQ1NTU3R5bGVTaGVldDtcclxuXHRcdGlmIChzdHlsZVNjb3BlLmlzTXVsdGlwbGV4KVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgc3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZUVsbSk7XHJcblx0XHRcdHN0eWxlU2hlZXQgPSBzdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0XHR0aGlzLm11bHRpcGxleFNjb3Blcy5zZXQoIHN0eWxlU2NvcGUsIHN0eWxlRWxtKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5lbnN1cmVET00oKTtcclxuXHRcdFx0c3R5bGVTaGVldCA9IHRoaXMuc3R5bGVTaGVldDtcclxuXHRcdH1cclxuXHJcblx0XHRzdHlsZVNjb3BlLnNldERPTUluZm8oIHN0eWxlU2hlZXQpO1xyXG5cdFx0c3R5bGVTY29wZS5pbnNlcnQoIHN0eWxlU2hlZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoaXMgc3R5bGUgc2NvcGUgZnJvbSBET00gLSBvbmx5IHdvcmtzIGZvciBtdWx0aXBsZXggc3R5bGUgc2NvcGVzXHJcblx0cHVibGljIHN0YXRpYyBkZWFjdGl2YXRlKCBzdHlsZVNjb3BlOiBTdHlsZVNjb3BlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghc3R5bGVTY29wZSB8fCAhc3R5bGVTY29wZS5pc011bHRpcGxleClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHN0eWxlU2NvcGUuY2xlYXJET01JbmZvKCk7XHJcblx0XHRcclxuXHRcdC8vIHJlbW92ZSB0aGUgPHN0eWxlPiBlbGVtZW50IGZyb20gdGhlIGRvY3VtZW50XHJcblx0XHRsZXQgc3R5bGVFbG0gPSB0aGlzLm11bHRpcGxleFNjb3Blcy5nZXQoIHN0eWxlU2NvcGUpO1xyXG5cdFx0aWYgKHN0eWxlRWxtKVxyXG5cdFx0XHRzdHlsZUVsbS5yZW1vdmUoKTtcclxuXHJcblx0XHR0aGlzLm11bHRpcGxleFNjb3Blcy5kZWxldGUoIHN0eWxlU2NvcGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoaXMgc3R5bGUgc2NvcGUgZnJvbSBET00gLSBvbmx5IHdvcmtzIGZvciBtdWx0aXBsZXggc3R5bGUgc2NvcGVzXHJcblx0cHVibGljIHN0YXRpYyBhZGRJbXBvcnRSdWxlKCBpbXBvcnRSdWxlOiBzdHJpbmcpOiBDU1NJbXBvcnRSdWxlXHJcblx0e1xyXG5cdFx0dGhpcy5lbnN1cmVET00oKTtcclxuXHRcdGxldCBpbmRleCA9IHRoaXMuc3R5bGVTaGVldEZvckltcG9ydHMuaW5zZXJ0UnVsZSggaW1wb3J0UnVsZSwgdGhpcy5zdHlsZVNoZWV0Rm9ySW1wb3J0cy5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0cmV0dXJuIHRoaXMuc3R5bGVTaGVldEZvckltcG9ydHMuY3NzUnVsZXNbaW5kZXhdIGFzIENTU0ltcG9ydFJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBFbnN1cmVzIHRoYXQgdGhlIDxzdHlsZT4gZWxlbWVudCBpcyBpbnNlcnRlZCBpbnRvIERPTSAqL1xyXG5cdHByaXZhdGUgc3RhdGljIGVuc3VyZURPTSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3R5bGVTaGVldClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSA8c3R5bGU+IGVsZW1lbnQgYW5kIGluc2VydCBpdCBpbnRvIDxoZWFkPlxyXG5cdFx0dGhpcy5zdHlsZUVsbUZvckltcG9ydHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5zdHlsZUVsbUZvckltcG9ydHMuaWQgPSBcIm1pbWNzc0ltcG9ydHNcIjtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG1Gb3JJbXBvcnRzKTtcclxuXHRcdHRoaXMuc3R5bGVTaGVldEZvckltcG9ydHMgPSB0aGlzLnN0eWxlRWxtRm9ySW1wb3J0cy5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cclxuXHRcdC8vIGNyZWF0ZSA8c3R5bGU+IGVsZW1lbnQgYW5kIGluc2VydCBpdCBpbnRvIDxoZWFkPlxyXG5cdFx0dGhpcy5zdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHR0aGlzLnN0eWxlRWxtLmlkID0gXCJtaW1jc3NTdHlsZXNcIjtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG0pO1xyXG5cdFx0dGhpcy5zdHlsZVNoZWV0ID0gdGhpcy5zdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1haXplZCBuYW1lcyBmb3Igc3R5bGUgZWxlbWVudHMgKGNsYXNzIG5hbWVzLCBhbmltYXRpb25cclxuXHQvLyBuYW1lcywgZXRjLilcclxuXHRwcml2YXRlIHN0YXRpYyB1c2VVbmlxdWVTdHlsZU5hbWVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8vIFByZWZpeCB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBzdHlsZSBuYW1lcy4gSWYgdW5kZWZpbmVkLCBhIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsXHJcblx0Ly8gYmUgdXNlZC5cclxuXHRwcml2YXRlIHN0YXRpYyB1bmlxdWVTdHlsZU5hbWVzUHJlZml4OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIE5leHQgbnVtYmVyIHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdW5pcXVlIGlkZW50aWZpZXJzLlxyXG5cdHByaXZhdGUgc3RhdGljIG5leHRVbmlxdWVJRDogbnVtYmVyID0gMTtcclxuXHJcblx0Ly8gU3R5bGUgZWxlbWVudCBET00gb2JqZWN0IHdoZXJlIGFsbCBAaW1wb3J0IHJ1bGVzIGZyb20gYWxsIFN0eWxlU2NvcGUgb2JqZWN0cyBhcmUgY3JlYWVkLlxyXG5cdHByaXZhdGUgc3RhdGljIHN0eWxlRWxtRm9ySW1wb3J0cz86IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBzaGVldCBvYmplY3QgZm9yIEBpbXBvcnQgcnVsZXMuXHJcblx0cHJpdmF0ZSBzdGF0aWMgc3R5bGVTaGVldEZvckltcG9ydHM/OiBDU1NTdHlsZVNoZWV0O1xyXG5cclxuXHQvLyBTdHlsZSBlbGVtZW50IERPTSBvYmplY3Qgd2hlcmUgYWxsIHJ1bGVzIGV4Y2VwdCBAaW1wb3J0IGZyb20gYWxsIFN0eWxlU2NvcGUgb2JqZWN0cyBhcmUgY3JlYWVkLlxyXG5cdHByaXZhdGUgc3RhdGljIHN0eWxlRWxtPzogSFRNTFN0eWxlRWxlbWVudDtcclxuXHJcblx0Ly8gRE9NIHN0eWxlIHNoZWV0IG9iamVjdCBmb3IgYWxsIHJ1bGVzIGV4Y2VwdCBAaW1wb3J0LlxyXG5cdHByaXZhdGUgc3RhdGljIHN0eWxlU2hlZXQ/OiBDU1NTdHlsZVNoZWV0O1xyXG5cclxuXHQvLyBNYXAgb2YgU3R5bGVTY29wZSBtdWx0aXBsZXggb2JqZWN0cyB0byB0aGVpciA8c3R5bGU+IGVsZW1lbnQgRE9NIG9iamVjdHMuXHJcblx0cHJpdmF0ZSBzdGF0aWMgbXVsdGlwbGV4U2NvcGVzID0gbmV3IE1hcDxTdHlsZVNjb3BlLEhUTUxTdHlsZUVsZW1lbnQ+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgQ29sb3JUeXBlcyBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHNlcGFyYXRpb24gdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgMi1kaWdpdCBoZXhhZGVjaW1hbCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTnVtYmVyIGZyb20gMCB0byAyNTVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXBUb0hleCggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHMgPSB2YWwudG9TdHJpbmcoMTYpO1xyXG4gICAgcmV0dXJuIHMubGVuZ3RoID09PSAxID8gXCIwXCIgKyBzIDogcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIGNvbG9yIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBDb2xvciBhcyBhIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yTnVtYmVyVG9Dc3NTdHJpbmcoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBpZiAodmFsIDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIFwiQSBudW1iZXIgcmVwcmVzZW50aW5nIGNvbG9yIGNhbm5vdCBiZSBuZWdhdGl2ZTogXCIgKyB2YWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCIjMDAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgZmxvYXRpbmcgcG9pbnQ6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBpZiAodmFsIDw9IDB4RkZGRkZGKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByID0gKHZhbCAmIDB4RkYwMDAwKSA+PiAxNjtcclxuICAgICAgICBsZXQgZyA9ICh2YWwgJiAweDAwRkYwMCkgPj4gODtcclxuICAgICAgICBsZXQgYiA9ICh2YWwgJiAweDAwMDBGRik7XHJcbiAgICAgICAgcmV0dXJuIGAjJHtzZXBUb0hleChyKX0ke3NlcFRvSGV4KGcpfSR7c2VwVG9IZXgoYil9YDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgciA9ICh2YWwgJiAweEZGMDAwMDAwKSA+PiAyNDtcclxuICAgICAgICBsZXQgZyA9ICh2YWwgJiAweDAwRkYwMDAwKSA+PiAxNjtcclxuICAgICAgICBsZXQgYiA9ICh2YWwgJiAweDAwMDBGRjAwKSA+PiA4O1xyXG4gICAgICAgIGxldCBhID0gKHZhbCAmIDB4MDAwMDAwRkYpO1xyXG4gICAgICAgIHJldHVybiBgIyR7c2VwVG9IZXgocil9JHtzZXBUb0hleChnKX0ke3NlcFRvSGV4KGIpfSR7c2VwVG9IZXgoYSl9fWA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yU2VwYXJhdGlvbiggYzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBjID09IG51bGwgPyBcIjBcIiA6IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gYyA6IE51bWJlci5pc0ludGVnZXIoYykgPyBjLnRvU3RyaW5nKCkgOiB0aGlzLnBlcmNlbnQoYyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyIHwgc3RyaW5nLCBnOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByID0gdGhpcy5jb2xvclNlcChyKTtcclxuICAgIGcgPSB0aGlzLmNvbG9yU2VwKGcpO1xyXG4gICAgYiA9IHRoaXMuY29sb3JTZXAoYik7XHJcbiAgICBhID0gYSA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBhID09PSBcInN0cmluZ1wiID8gYSA6IHRoaXMucGVyY2VudChhKTtcclxuXHJcbiAgICByZXR1cm4gYSA9PSBudWxsID8gYHJnYigke3J9LCR7Z30sJHtifSlgIDogYHJnYmEoJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2woIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyIHwgc3RyaW5nLCBsOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgaCA9IHR5cGVvZiBoID09PSBcInN0cmluZ1wiID8gaCA6IE51bWJlci5pc0ludGVnZXIoIGgpID8gaCArIFwiZGVnXCIgOiBoICsgXCJyYWRcIjtcclxuICAgIHMgPSBzID09IG51bGwgPyBcIjEwMCVcIiA6IHR5cGVvZiBzID09PSBcInN0cmluZ1wiID8gcyA6IHRoaXMucGVyY2VudChzKTtcclxuICAgIGwgPSBsID09IG51bGwgPyBcIjEwMCVcIiA6IHR5cGVvZiBsID09PSBcInN0cmluZ1wiID8gbCA6IHRoaXMucGVyY2VudChsKTtcclxuICAgIGEgPSBhID09IG51bGwgPyBudWxsIDogdHlwZW9mIGEgPT09IFwic3RyaW5nXCIgPyBhIDogdGhpcy5wZXJjZW50KGEpO1xyXG5cclxuICAgIHJldHVybiBhID09IG51bGwgPyBgaHNsKCR7aH0sJHtzfSwke2x9KWAgOiBgaHNsYSgke2h9LCR7c30sJHtsfSwke2F9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFscGhhKCBjOiBudW1iZXIgfCBrZXlvZiB0eXBlb2YgQ29sb3JUeXBlcy5Db2xvcnMsIGE6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgcmdiVmFsID0gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIgPyBDb2xvclR5cGVzLkNvbG9yc1tjXSA6IGM7XHJcbiAgICByZXR1cm4gcmdiKCAocmdiVmFsICYgMHhGRjAwMDApID4+IDE2LCAocmdiVmFsICYgMHgwMEZGMDApID4+IDgsIHJnYlZhbCAmIDB4MDAwMEZGLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgYXJyYXkgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyB0aW1lIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvckFzQXJyYXlUb0Nzc1N0cmluZyggdmFsOiBDb2xvclR5cGVzLkNvbG9yQXNBcnJheSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSlcclxuICAgICAgICByZXR1cm4gY29sb3JUb0Nzc1N0cmluZyggdmFsWzBdKTtcclxuICAgIGVsc2UgaWYgKHZhbC5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgcmV0dXJuIGFscGhhKCB2YWxbMF0sIHZhbFsxXSkudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKHZhbC5sZW5ndGggPT09IDMpXHJcbiAgICAgICAgcmV0dXJuIHJnYiggdmFsWzBdLCB2YWxbMV0sIHZhbFsyXSkudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcmdiKCB2YWxbMF0sIHZhbFsxXSwgdmFsWzJdLCB2YWxbM10pLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBUaW1lIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9Dc3NTdHJpbmcoIHZhbDogQ29sb3JUeXBlcy5Db2xvcl9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcblx0ICAgIHJldHVybiBjb2xvck51bWJlclRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuXHQgICAgcmV0dXJuIGNvbG9yQXNBcnJheVRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgdHlwZXMgZm9yIHdvcmtpbmcgd2l0aCBDU1MgY29sb3JzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7RXh0ZW5kZWRQcm9wVHlwZX0gZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzID1cclxue1xyXG4gICAgYmxhY2s6IDB4MDAwMDAwLFxyXG4gICAgc2lsdmVyOiAweGMwYzBjMCxcclxuICAgIGdyYXk6IDB4ODA4MDgwLFxyXG4gICAgd2hpdGU6IDB4ZmZmZmZmLFxyXG4gICAgbWFyb29uOiAweDgwMDAwMCxcclxuICAgIHJlZDogMHhmZjAwMDAsXHJcbiAgICBwdXJwbGU6IDB4ODAwMDgwLFxyXG4gICAgZnVjaHNpYTogMHhmZjAwZmYsXHJcbiAgICBncmVlbjogMHgwMDgwMDAsXHJcbiAgICBsaW1lOiAweDAwZmYwMCxcclxuICAgIG9saXZlOiAweDgwODAwMCxcclxuICAgIHllbGxvdzogMHhmZmZmMDAsXHJcbiAgICBuYXZ5OiAweDAwMDA4MCxcclxuICAgIGJsdWU6IDB4MDAwMGZmLFxyXG4gICAgdGVhbDogMHgwMDgwODAsXHJcbiAgICBhcXVhOiAweDAwZmZmZixcclxuICAgIG9yYW5nZTogMHhmZmE1MDAsXHJcbiAgICBhbGljZWJsdWU6IDB4ZjBmOGZmLFxyXG4gICAgYW50aXF1ZXdoaXRlOiAweGZhZWJkNyxcclxuICAgIGFxdWFtYXJpbmU6IDB4N2ZmZmQ0LFxyXG4gICAgYXp1cmU6IDB4ZjBmZmZmLFxyXG4gICAgYmVpZ2U6IDB4ZjVmNWRjLFxyXG4gICAgYmlzcXVlOiAweGZmZTRjNCxcclxuICAgIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZCxcclxuICAgIGJsdWV2aW9sZXQ6IDB4OGEyYmUyLFxyXG4gICAgYnJvd246IDB4YTUyYTJhLFxyXG4gICAgYnVybHl3b29kOiAweGRlYjg4NyxcclxuICAgIGNhZGV0Ymx1ZTogMHg1ZjllYTAsXHJcbiAgICBjaGFydHJldXNlOiAweDdmZmYwMCxcclxuICAgIGNob2NvbGF0ZTogMHhkMjY5MWUsXHJcbiAgICBjb3JhbDogMHhmZjdmNTAsXHJcbiAgICBjb3JuZmxvd2VyYmx1ZTogMHg2NDk1ZWQsXHJcbiAgICBjb3Juc2lsazogMHhmZmY4ZGMsXHJcbiAgICBjcmltc29uOiAweGRjMTQzYyxcclxuICAgIGN5YW46IDB4MDBmZmZmLFxyXG4gICAgZGFya2JsdWU6IDB4MDAwMDhiLFxyXG4gICAgZGFya2N5YW46IDB4MDA4YjhiLFxyXG4gICAgZGFya2dvbGRlbnJvZDogMHhiODg2MGIsXHJcbiAgICBkYXJrZ3JheTogMHhhOWE5YTksXHJcbiAgICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxyXG4gICAgZGFya2dyZXk6IDB4YTlhOWE5LFxyXG4gICAgZGFya2toYWtpOiAweGJkYjc2YixcclxuICAgIGRhcmttYWdlbnRhOiAweDhiMDA4YixcclxuICAgIGRhcmtvbGl2ZWdyZWVuOiAweDU1NmIyZixcclxuICAgIGRhcmtvcmFuZ2U6IDB4ZmY4YzAwLFxyXG4gICAgZGFya29yY2hpZDogMHg5OTMyY2MsXHJcbiAgICBkYXJrcmVkOiAweDhiMDAwMCxcclxuICAgIGRhcmtzYWxtb246IDB4ZTk5NjdhLFxyXG4gICAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZixcclxuICAgIGRhcmtzbGF0ZWJsdWU6IDB4NDgzZDhiLFxyXG4gICAgZGFya3NsYXRlZ3JheTogMHgyZjRmNGYsXHJcbiAgICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZixcclxuICAgIGRhcmt0dXJxdW9pc2U6IDB4MDBjZWQxLFxyXG4gICAgZGFya3Zpb2xldDogMHg5NDAwZDMsXHJcbiAgICBkZWVwcGluazogMHhmZjE0OTMsXHJcbiAgICBkZWVwc2t5Ymx1ZTogMHgwMGJmZmYsXHJcbiAgICBkaW1ncmF5OiAweDY5Njk2OSxcclxuICAgIGRpbWdyZXk6IDB4Njk2OTY5LFxyXG4gICAgZG9kZ2VyYmx1ZTogMHgxZTkwZmYsXHJcbiAgICBmaXJlYnJpY2s6IDB4YjIyMjIyLFxyXG4gICAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwLFxyXG4gICAgZm9yZXN0Z3JlZW46IDB4MjI4YjIyLFxyXG4gICAgZ2FpbnNib3JvOiAweGRjZGNkYyxcclxuICAgIGdob3N0d2hpdGU6IDB4ZjhmOGZmLFxyXG4gICAgZ29sZDogMHhmZmQ3MDAsXHJcbiAgICBnb2xkZW5yb2Q6IDB4ZGFhNTIwLFxyXG4gICAgZ3JlZW55ZWxsb3c6IDB4YWRmZjJmLFxyXG4gICAgZ3JleTogMHg4MDgwODAsXHJcbiAgICBob25leWRldzogMHhmMGZmZjAsXHJcbiAgICBob3RwaW5rOiAweGZmNjliNCxcclxuICAgIGluZGlhbnJlZDogMHhjZDVjNWMsXHJcbiAgICBpbmRpZ286IDB4NGIwMDgyLFxyXG4gICAgaXZvcnk6IDB4ZmZmZmYwLFxyXG4gICAga2hha2k6IDB4ZjBlNjhjLFxyXG4gICAgbGF2ZW5kZXI6IDB4ZTZlNmZhLFxyXG4gICAgbGF2ZW5kZXJibHVzaDogMHhmZmYwZjUsXHJcbiAgICBsYXduZ3JlZW46IDB4N2NmYzAwLFxyXG4gICAgbGVtb25jaGlmZm9uOiAweGZmZmFjZCxcclxuICAgIGxpZ2h0Ymx1ZTogMHhhZGQ4ZTYsXHJcbiAgICBsaWdodGNvcmFsOiAweGYwODA4MCxcclxuICAgIGxpZ2h0Y3lhbjogMHhlMGZmZmYsXHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogMHhmYWZhZDIsXHJcbiAgICBsaWdodGdyYXk6IDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRncmVlbjogMHg5MGVlOTAsXHJcbiAgICBsaWdodGdyZXk6IDB4ZDNkM2QzLFxyXG4gICAgbGlnaHRwaW5rOiAweGZmYjZjMSxcclxuICAgIGxpZ2h0c2FsbW9uOiAweGZmYTA3YSxcclxuICAgIGxpZ2h0c2VhZ3JlZW46IDB4MjBiMmFhLFxyXG4gICAgbGlnaHRza3libHVlOiAweDg3Y2VmYSxcclxuICAgIGxpZ2h0c2xhdGVncmF5OiAweDc3ODg5OSxcclxuICAgIGxpZ2h0c2xhdGVncmV5OiAweDc3ODg5OSxcclxuICAgIGxpZ2h0c3RlZWxibHVlOiAweGIwYzRkZSxcclxuICAgIGxpZ2h0eWVsbG93OiAweGZmZmZlMCxcclxuICAgIGxpbWVncmVlbjogMHgzMmNkMzIsXHJcbiAgICBsaW5lbjogMHhmYWYwZTYsXHJcbiAgICBtYWdlbnRhOiAweGZmMDBmZixcclxuICAgIG1lZGl1bWFxdWFtYXJpbmU6IDB4NjZjZGFhLFxyXG4gICAgbWVkaXVtYmx1ZTogMHgwMDAwY2QsXHJcbiAgICBtZWRpdW1vcmNoaWQ6IDB4YmE1NWQzLFxyXG4gICAgbWVkaXVtcHVycGxlOiAweDkzNzBkYixcclxuICAgIG1lZGl1bXNlYWdyZWVuOiAweDNjYjM3MSxcclxuICAgIG1lZGl1bXNsYXRlYmx1ZTogMHg3YjY4ZWUsXHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbjogMHgwMGZhOWEsXHJcbiAgICBtZWRpdW10dXJxdW9pc2U6IDB4NDhkMWNjLFxyXG4gICAgbWVkaXVtdmlvbGV0cmVkOiAweGM3MTU4NSxcclxuICAgIG1pZG5pZ2h0Ymx1ZTogMHgxOTE5NzAsXHJcbiAgICBtaW50Y3JlYW06IDB4ZjVmZmZhLFxyXG4gICAgbWlzdHlyb3NlOiAweGZmZTRlMSxcclxuICAgIG1vY2Nhc2luOiAweGZmZTRiNSxcclxuICAgIG5hdmFqb3doaXRlOiAweGZmZGVhZCxcclxuICAgIG9sZGxhY2U6IDB4ZmRmNWU2LFxyXG4gICAgb2xpdmVkcmFiOiAweDZiOGUyMyxcclxuICAgIG9yYW5nZXJlZDogMHhmZjQ1MDAsXHJcbiAgICBvcmNoaWQ6IDB4ZGE3MGQ2LFxyXG4gICAgcGFsZWdvbGRlbnJvZDogMHhlZWU4YWEsXHJcbiAgICBwYWxlZ3JlZW46IDB4OThmYjk4LFxyXG4gICAgcGFsZXR1cnF1b2lzZTogMHhhZmVlZWUsXHJcbiAgICBwYWxldmlvbGV0cmVkOiAweGRiNzA5MyxcclxuICAgIHBhcGF5YXdoaXA6IDB4ZmZlZmQ1LFxyXG4gICAgcGVhY2hwdWZmOiAweGZmZGFiOSxcclxuICAgIHBlcnU6IDB4Y2Q4NTNmLFxyXG4gICAgcGluazogMHhmZmMwY2IsXHJcbiAgICBwbHVtOiAweGRkYTBkZCxcclxuICAgIHBvd2RlcmJsdWU6IDB4YjBlMGU2LFxyXG4gICAgcm9zeWJyb3duOiAweGJjOGY4ZixcclxuICAgIHJveWFsYmx1ZTogMHg0MTY5ZTEsXHJcbiAgICBzYWRkbGVicm93bjogMHg4YjQ1MTMsXHJcbiAgICBzYWxtb246IDB4ZmE4MDcyLFxyXG4gICAgc2FuZHlicm93bjogMHhmNGE0NjAsXHJcbiAgICBzZWFncmVlbjogMHgyZThiNTcsXHJcbiAgICBzZWFzaGVsbDogMHhmZmY1ZWUsXHJcbiAgICBzaWVubmE6IDB4YTA1MjJkLFxyXG4gICAgc2t5Ymx1ZTogMHg4N2NlZWIsXHJcbiAgICBzbGF0ZWJsdWU6IDB4NmE1YWNkLFxyXG4gICAgc2xhdGVncmF5OiAweDcwODA5MCxcclxuICAgIHNsYXRlZ3JleTogMHg3MDgwOTAsXHJcbiAgICBzbm93OiAweGZmZmFmYSxcclxuICAgIHNwcmluZ2dyZWVuOiAweDAwZmY3ZixcclxuICAgIHN0ZWVsYmx1ZTogMHg0NjgyYjQsXHJcbiAgICB0YW46IDB4ZDJiNDhjLFxyXG4gICAgdGhpc3RsZTogMHhkOGJmZDgsXHJcbiAgICB0b21hdG86IDB4ZmY2MzQ3LFxyXG4gICAgdHVycXVvaXNlOiAweDQwZTBkMCxcclxuICAgIHZpb2xldDogMHhlZTgyZWUsXHJcbiAgICB3aGVhdDogMHhmNWRlYjMsXHJcbiAgICB3aGl0ZXNtb2tlOiAweGY1ZjVmNSxcclxuICAgIHllbGxvd2dyZWVuOiAweDlhY2QzMixcclxuICAgIHJlYmVjY2FwdXJwbGU6IDB4NjYzMzk5XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIFRoZSBDb2xvcnMgb2JqZWN0IGlzIHVzZWQgdG8gZ2V0IHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgdGhlIHdlbGwta25vd24gV2ViIGNvbG9ycyBhcyB3ZWxsIGFzXHJcbi8vICAqIHRvIGdldCB0aGVpciBudW1lcmljIHZhbHVlcy5cclxuLy8gICovXHJcbi8vIGV4cG9ydCBsZXQgQ29sb3JzID0gbmV3IENvbG9yc0NsYXNzKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgY29sb3IgcmVwcmVzZW50ZWQgYXMgYW4gYXJyYXk6XHJcbiAqICAgLSBzaW5nbGUtZWxlbWVudCBhcnJheSByZXByZXNlbnRzIGEgY29sb3IgdmFsdWUgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIGEgbnVtYmVyLlxyXG4gKiAgIC0gdHdvLWVsZW1lbnQgYXJyYXkgcmVwcmVzZW50cyBlaXRoZXIgYSBjb2xvciBuYW1lIG9yIGEgbnVtZXJpYyBSR0IgdmFsdWUgaW4gdGhlIGZpcnN0IGVsZW1lbnRcclxuICogICAgIGFuZCBhbiBhbHBoYSBzZXBhcmF0aW9uIGluIHRoZSBzZWNvbmQgZWxlbWVudC5cclxuICogICAtIHRocmVlLWVsZW1lbnQgYXJheSByZXByZXNlbnRzIFJHQiBzZXBhcmF0aW9ucyBhcyBlaXRoZXIgaW50ZWdlciBudW1iZXJzICgwIHRvIDI1NSkgb3IgZmxvYXRpbmdcclxuICogICAgIG51bWJlcnMgKDAuMCB0byAxLjApIGZvciBwZXJjZW50YWdlcy5cclxuICogICAtIGZvdXItZWxlbWVudCBhcmF5IHJlcHJlc2VudHMgUkdCQSBzZXBhcmF0aW9ucyBhcyBlaXRoZXIgaW50ZWdlciBudW1iZXJzICgwIHRvIDI1NSkgb3IgZmxvYXRpbmdcclxuICogICAgIG51bWJlcnMgKDAuMCB0byAxLjApIGZvciBwZXJjZW50YWdlcy4gVGhlIGFscGhhIHNlcGFyYXRpb24gKHRoZSBsYXN0IGVsZW1lbnQpIGlzIGFsd2F5cyBhXHJcbiAqICAgICBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JBc0FycmF5ID1cclxuICAgICAgICAgICAgICAgIFtrZXlvZiB0eXBlb2YgQ29sb3JzIHwgbnVtYmVyXSB8XHJcbiAgICAgICAgICAgICAgICBba2V5b2YgdHlwZW9mIENvbG9ycyB8IG51bWJlciwgbnVtYmVyXSB8XHJcbiAgICAgICAgICAgICAgICBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gfFxyXG4gICAgICAgICAgICAgICAgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIHN0cmluZyAoZS5nLiBcInJlZFwiIG9yIFwiI2ZlNVwiIG9yIFwicmdiYSgxOTAsIDIwMCwgMjM1LCA5MCUpXCIsIGV0Yy4pXHJcbiAqICAgLSBudW1iZXI6XHJcbiAqICAgICAtIHBvc2l0aXZlIGludGVnZXIgbnVtYmVycyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgYXJlIHRyZWF0ZWQgYXMgUkdCIHNlcGFyYXRpb25zIDB4UlJHR0JCLlxyXG4gKiAgICAgLSBwb3NpdGl2ZSBpbnRlZ2VyIG51bWJlcnMgZ3JlYXRlciB0aGFuIDB4RkZGRkZGIGFyZSB0cmVhdGVkIGFzIFJHQkEgc2VwYXJhdGlvbnMgMHhSUkdHQkJBQS5cclxuICogICAgIC0gbmVnYXRpdmUgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIHJlamVjdGVkLlxyXG4gKiAgIC0gYXJyYXkgW1tDb2xvckFzQXJyYXldXVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JfU3R5bGVUeXBlID0gRXh0ZW5kZWRQcm9wVHlwZTxcInRyYW5zcGFyZW50XCIgfCBcImN1cnJlbnRjb2xvclwiIHwga2V5b2YgdHlwZW9mIENvbG9ycyB8IG51bWJlciB8IENvbG9yQXNBcnJheT47XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIEZvbnRGYWNlVHlwZXMgZnJvbSBcIi4vRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCAqIGFzIFV0aWxGdW5jcyBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGZvbnQgZmFjZSBkZWZpbml0aW9uIG9iamVjdCB0byB0aGUgQ1NTIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRGYWNlVG9Dc3NTdHJpbmcoIGZvbnRmYWNlOiBGb250RmFjZVR5cGVzLkZvbnRmYWNlKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZvbnRmYWNlIHx8ICFmb250ZmFjZS5mb250RmFtaWx5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gXCJ7XCI7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gZm9udGZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcyArPSBgJHtVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvQ3NzU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb0Nzc1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb0Nzc1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvQ3NzU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRTdHJldGNoVG9Dc3NTdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3RyZXRjaFR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbCArIFwiJVwiO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgJHt2YWxbMF19JSAke3ZhbFsxXX0lYDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9udFN0eWxlVG9Dc3NTdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3RyZXRjaFR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIGBvYmxpcXVlICR7dmFsfWRlZ2A7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBcIm9ibGlxdWUgXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWxbMF0gPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHMgKz0gdmFsWzBdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBgJHt2YWxbMF19ZGVnYDtcclxuXHJcbiAgICAgICAgaWYgKHZhbFsxXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHMgKz0gXCIgXCI7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsWzFdID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcyArPSB2YWxbMV07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHMgKz0gYCR7dmFsWzFdfWRlZ2A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9udFdlaWdodFRvQ3NzU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodFR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgJHt2YWxbMF0udG9TdHJpbmcoKX0gJHt2YWxbMV0udG9TdHJpbmcoKX1gO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb250U3JjVG9Dc3NTdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiB8fCAhQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBmb250U2luZ2xlU3JjVG9Dc3NTdHJpbmcoIHZhbCBhcyBGb250RmFjZVR5cGVzLkZvbnRTaW5nbGVTcmNUeXBlKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsLm1hcCggKHNpbmdsZVZhbCkgPT4gZm9udFNpbmdsZVNyY1RvQ3NzU3RyaW5nKCBzaW5nbGVWYWwpKS5qb2luKFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9udFNpbmdsZVNyY1RvQ3NzU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNpbmdsZVNyY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZhbC5zdGFydHNXaXRoKFwibG9jYWwoXCIpIHx8IHZhbC5zdGFydHNXaXRoKFwidXJsKFwiKSlcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBgdXJsKCR7dmFsfSlgO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIFwibG9jYWxcIiBpbiB2YWwpXHJcbiAgICAgICAgcmV0dXJuIGBsb2NhbCgke3ZhbC5sb2NhbH0pYDtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IGB1cmwoJHt2YWwudXJsfSlgO1xyXG4gICAgICAgIGlmICh2YWwuZm9ybWF0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcyArPSBcIiBmb3JtYXQoXCI7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLmZvcm1hdCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHMgKz0gYFxcXCIke3ZhbC5mb3JtYXR9XFxcImA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHMgKz0gdmFsLmZvcm1hdC5tYXAoICh2KSA9PiBgXFxcIiR7dn1cXFwiYCkuam9pbiggXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgcyArPSBcIilcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFV0aWxGdW5jcyBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQgKiBhcyBNZWRpYVR5cGVzIGZyb20gXCIuL01lZGlhVHlwZXNcIlxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhc3BlY3RSYXRpb1RvQ3NzU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuQXNwZWN0UmF0aW9GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbFswXSArIFwiL1wiICsgdmFsWzFdO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxlbmd0aEZlYXR1cmVUb0Nzc1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkxlbmd0aEZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJweFwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc29sdXRpb25GZWF0dXJlVG9Dc3NTdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5SZXNvbHV0aW9uRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcImRwaVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbnR5cGUgY29udmVydEZ1bmNUeXBlPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldD4gPSAodmFsOiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhRmVhdHVyZUluZm8gcmVwcmVzZW50cyBpbmZvcm1hdGlvbiB0aGF0IHdlIGtlZXAgZm9yIHN0eWxlIHByb3BlcnRpZXNcclxuICovXHJcbnR5cGUgTWVkaWFGZWF0dXJlSW5mbzxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gY29udmVydEZ1bmNUeXBlPEs+IHwgc3RyaW5nIHxcclxuICAgIHtcclxuICAgICAgICAvKiogRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBmcm9tIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxuICAgICAgICBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlPEs+O1xyXG5cclxuICAgICAgICAvKiogSWYgZGVmaW5lZCwgaW5kaWNhdGVzIHRoZSBwcm9wZXJ0eSB0aGF0IG91ciBwcm9wZXJ0eSBzaG91bGQgYmUgdHJlYXRlZCBhcyAqL1xyXG4gICAgICAgIHRyZWF0QXM/OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIGRlZmluZWQsIGluZGljYXRlcyB0aGUgdmFsdWUsIHdoaWNoIHdlIHdpbGwgbm90IHB1dCBpbnRvIENTUyBzdHJpbmcuIFRoaXMgaXMgbmVlZGVkIGZvclxyXG4gICAgICAgICAqIG1lZGlhIGZlYXR1cmVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRob3V0IHRoZSB2YWx1ZSwgZS5nLiBjb2xvciBvciBjb2xvci1pbmRleC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFRdWVyeVRvQ3NzU3RyaW5nKCBxdWVyeTogTWVkaWFUeXBlcy5NZWRpYVF1ZXJ5KTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIXF1ZXJ5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVNZWRpYVF1ZXJ5VG9Dc3NTdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiwgXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzaW5nbGVNZWRpYVF1ZXJ5VG9Dc3NTdHJpbmcoIHF1ZXJ5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZU1lZGlhUXVlcnlUb0Nzc1N0cmluZyggcXVlcnk6IE1lZGlhVHlwZXMuU2luZ2xlTWVkaWFRdWVyeSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBsZXQgbWVkaWFUeXBlID0gcXVlcnkuJG1lZGlhVHlwZTtcclxuICAgIGxldCBvbmx5ID0gcXVlcnkuJG9ubHk7XHJcbiAgICBsZXQgbmVnYXRlID0gcXVlcnkuJG5lZ2F0ZTtcclxuXHJcbiAgICBsZXQgaXRlbXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobWVkaWFUeXBlKVxyXG4gICAgICAgIGl0ZW1zLnB1c2goIChvbmx5ID8gXCJvbmx5IFwiIDogXCJcIikgKyBtZWRpYVR5cGUpO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIHF1ZXJ5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJFwiKSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChxdWVyeVtwcm9wTmFtZV0pXHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goIGAoJHttZWRpYUZlYXR1cmVUb0Nzc1N0cmluZyggcHJvcE5hbWUsIHF1ZXJ5W3Byb3BOYW1lXSl9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuZWdhdGUgPyBcIm5vdCBcIiA6IFwiXCJ9JHtpdGVtcy5qb2luKFwiIGFuZCBcIil9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIGZlYXR1cmUgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUZlYXR1cmVUb0Nzc1N0cmluZyggZmVhdHVyZU5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZlYXR1cmVOYW1lIHx8IHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgZm9sbG93IFwidHJlYXRBc1wiIHdoaWxlIGV4aXN0c1xyXG4gICAgbGV0IGluZm86IE1lZGlhRmVhdHVyZUluZm8gPSBtZWRpYUZlYXR1cmVzW2ZlYXR1cmVOYW1lXTtcclxuICAgIHdoaWxlKCBpbmZvKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgaW5mbyA9IG1lZGlhRmVhdHVyZXNbaW5mb107XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIGluZm8gPSBtZWRpYUZlYXR1cmVzW2luZm8udHJlYXRBc107XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVhbEZlYXR1cmVOYW1lID0gVXRpbEZ1bmNzLmNhbWVsVG9EYXNoKCBmZWF0dXJlTmFtZSk7XHJcblxyXG4gICAgLy8gaWYgZGVmYXVsdFZhbHVlIGlzIGRlZmluZWQgYW5kIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBlcXVhbCB0byBpdCwgbm8gdmFsdWUgc2hvdWxkIGJlIHJldHVybmVkLlxyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5kZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcFZhbCA9PT0gZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBcIlwiIDogcmVhbEZlYXR1cmVOYW1lO1xyXG5cclxuICAgIGxldCBzOiBzdHJpbmc7XHJcbiAgICBsZXQgY29udmVydCA9IHR5cGVvZiBpbmZvID09PSBcImZ1bmN0aW9uXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmNvbnZlcnQgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoY29udmVydClcclxuICAgICAgICBzID0gY29udmVydCggcHJvcFZhbCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBzID0gcHJvcFZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHByb3BWYWwpKVxyXG4gICAgICAgIHMgPSBVdGlsRnVuY3MuYXJyYXlUb0Nzc1N0cmluZyggcHJvcFZhbCwgaXRlbSA9PiBpdGVtID09IG51bGwgPyBcIlwiIDogaXRlbS50b1N0cmluZygpKTtcclxuICAgIGVsc2VcclxuICAgICAgICBzID0gcHJvcFZhbC50b1N0cmluZygpO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzIDogcmVhbEZlYXR1cmVOYW1lICsgXCI6XCIgKyBzO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvQ3NzU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IFwiYXNwZWN0UmF0aW9cIixcclxuICAgIG1heEFzcGVjdFJhdGlvOiBcImFzcGVjdFJhdGlvXCIsXHJcbiAgICBjb2xvcjogeyBkZWZhdWx0VmFsdWU6IDAgfSxcclxuICAgIG1pbkNvbG9yOiBcImNvbG9yXCIsXHJcbiAgICBtYXhDb2xvcjogXCJjb2xvclwiLFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAgfSxcclxuICAgIG1pbkNvbG9ySW5kZXg6IFwiY29sb3JcIixcclxuICAgIG1heENvbG9ySW5kZXg6IFwiY29sb3JcIixcclxuICAgIGhlaWdodDogbGVuZ3RoRmVhdHVyZVRvQ3NzU3RyaW5nLFxyXG4gICAgbWluSGVpZ2h0OiBcImhlaWdodFwiLFxyXG4gICAgbWF4SGVpZ2h0OiBcImhlaWdodFwiLFxyXG4gICAgbW9ub2Nocm9tZTogeyBkZWZhdWx0VmFsdWU6IDAgfSxcclxuICAgIG1pbk1vbm9jaHJvbWU6IFwibW9ub2Nocm9tZVwiLFxyXG4gICAgbWF4TW9ub2Nocm9tZTpcIm1vbm9jaHJvbWVcIixcclxuICAgIHJlc29sdXRpb246IHJlc29sdXRpb25GZWF0dXJlVG9Dc3NTdHJpbmcsXHJcbiAgICBtaW5SZXNvbHV0aW9uOiBcInJlc29sdXRpb25cIixcclxuICAgIG1heFJlc29sdXRpb246IFwicmVzb2x1dGlvblwiLFxyXG4gICAgd2lkdGg6IGxlbmd0aEZlYXR1cmVUb0Nzc1N0cmluZyxcclxuICAgIG1pbldpZHRoOiBcIndpZHRoXCIsXHJcbiAgICBtYXhXaWR0aDpcIndpZHRoXCIsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFV0aWxUeXBlcyBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBVdGlsRnVuY3MgZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JUeXBlcyBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JGdW5jcyBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCAqIGFzIFN0eWxlVHlwZXMgZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbmltYXRpb24gc3R5bGUgcmVwcmVzZW50ZWQgYXMgYW4gb2JqZWN0IHdpdGggZmllbGRzIGNvcnJlc3BvbmRpbmcgdG8gYW5pbWF0aW9uXHJcbiAqIHByb3BlcnRpZXMgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25Ub0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLlNpbmdsZUFuaW1hdGlvbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3Mub2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsXHJcbiAgICAgICAgICAgIFtcImRlbGF5XCIsIFV0aWxGdW5jcy50aW1lVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJmdW5jdGlvblwiLCBzaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wiZHVyYXRpb25cIiwgVXRpbEZ1bmNzLnRpbWVUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFtcImNvdW50XCIsIFV0aWxGdW5jcy5udW1iZXJUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbmltYXRpb24gc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBhbmltYXRpb25Ub0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkFuaW1hdGlvblN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgc2luZ2xlQW5pbWF0aW9uVG9Dc3NTdHJpbmcsIFwiLFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlQW5pbWF0aW9uVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuU2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb24pOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgIHtcclxuICAgICAgICBpZiAodmFsLmxlbmd0aCA8IDMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHN0ZXAgZnVuY3Rpb24gd2l0aCBvbmx5IHRoZSBudW1iZXIgb2Ygc3RlcHNcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgICAgIGlmICh2YWxbMF0gPD0gMClcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTnVtYmVyIG9mIHN0ZXBzIGluIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiB6ZXJvXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIU51bWJlci5pc0ludGVnZXIoIHZhbFswXSkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIk51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyXCIpO1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYHN0ZXAoJHt2YWxbMF19JHt2YWwubGVuZ3RoID09PSAyID8gXCIsXCIgKyB2YWxbMV0gOiBcIlwifSlgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGJlemllciBmdW5jdGlvblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbFswXSA8IDAgfHwgdmFsWzBdID4gMSB8fCB2YWxbMl0gPCAwIHx8IHZhbFsyXSA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIkZpcnN0IGFuZCB0aGlyZCBwYXJhbWV0ZXJzIG9mIGN1YmljLWJlemllciBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDFcIik7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dmFsWzBdfSwke3ZhbFsxXX0sJHt2YWxbMl19LCR7dmFsWzNdfSlgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbmltYXRpb24gaXRlcmF0aW9uIGNvdW50IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBhbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgIHtcclxuICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbFswXSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgcmV0dXJuIHNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uVG9Dc3NTdHJpbmcoIHZhbCBhcyBTdHlsZVR5cGVzLlNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsRnVuY3MuYXJyYXlUb0Nzc1N0cmluZyggdmFsIGFzIFN0eWxlVHlwZXMuU2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25bXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uVG9Dc3NTdHJpbmcsIFwiLFwiKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvcm5lciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVDb3JuZXJSYWRpdXNUb0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLlNpbmdsZUNvcm5lclJhZGl1c19TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwsIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJSYWRpdXNUb0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkJvcmRlclJhZGl1c1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCB2YWxbMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdHdvIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlc1xyXG4gICAgICAgICAgICBsZXQgcyA9IFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCB2YWxbMF0sIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgICAgICBzICs9IFwiIC8gXCI7XHJcbiAgICAgICAgICAgIHJldHVybiBzICsgVXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbFsxXSBhcyBTdHlsZVR5cGVzLk11bHRpQ29ybmVyUmFkaXVzX1N0eWxlVHlwZSwgVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNpbmdsZSBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZVxyXG4gICAgICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCBhcyBTdHlsZVR5cGVzLk11bHRpQ29ybmVyUmFkaXVzX1N0eWxlVHlwZSwgVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBzdHlsZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIGJvcmRlclN0eWxlVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Cb3JkZXJTdHlsZVN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3Muc3RyaW5nQXJyYXlUb0Nzc1N0cmluZyggdmFsLCBcIiBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgd2lkdGggc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJXaWR0aFRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVyV2lkdGhTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhOdW1iZXJUb0Nzc1N0cmluZyh2YWwpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3MuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBzcGFjaW5nIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVyU3BhY2luZ1RvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVyU3BhY2luZ1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3MuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgY29sb3Igc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQm9yZGVyIGNvbG9yIHZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJDb2xvclRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVyQ29sb3JTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwgYXMgQ29sb3JUeXBlcy5Db2xvcl9TdHlsZVR5cGVbXSwgQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJTaWRlVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Cb3JkZXJTaWRlX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzID0gXCJcIjtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbFswXSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbFswXTtcclxuICAgICAgICBlbHNlIGlmICh2YWxbMF0gaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWxbMF0udG9TdHJpbmcoKTtcclxuICAgICAgICBlbHNlIGlmICh2YWxbMF0gIT0gbnVsbClcclxuICAgICAgICAgICAgcyArPSBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbFswXSkgKyBcIiBcIjtcclxuXHJcbiAgICAgICAgaWYgKHZhbFsxXSlcclxuICAgICAgICAgICAgcyArPSB2YWxbMV0gKyBcIiBcIjtcclxuXHJcbiAgICAgICAgaWYgKHZhbFsyXSlcclxuICAgICAgICAgICAgcyArPSBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcoIHZhbFsyXSkgKyBcIiBcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXItaW1hZ2Utb3V0c2V0IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVySW1hZ2VPdXRzZXRUb0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkJvcmRlckltYWdlT3V0c2V0U3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgYm9yZGVySW1hZ2VPdXRzZXRUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm94IHNoYWRvdyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICovXHJcbmZ1bmN0aW9uIGJveFNoYWRvd1RvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm94U2hhZG93U3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3Muc3RyaW5nQXJyYXlUb0Nzc1N0cmluZyggdmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNsaXAgc3R5bGUgdmFsdWUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGlwVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5DbGlwU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIGByZWN0KCR7VXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLCBcIiBcIil9YDtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbiBydWxlIHN0eWxlIHJlcHJlc2VudGVkIGFzIGFuIG9iamVjdCB3aXRoIGZpZWxkcyBjb3JyZXNwb25kaW5nIHRvIGNvbHVtbiBydWxlXHJcbiAqIHByb3BlcnRpZXMgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2x1bW5SdWxlVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Db2x1bW5SdWxlU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghdmFsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3Mub2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsXHJcbiAgICAgICAgICAgIFtcIndpZHRoXCIsIGJvcmRlcldpZHRoVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJzdHlsZVwiLCBib3JkZXJTdHlsZVRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wiY29sb3JcIiwgQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbnMgc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2x1bW5zVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Db2x1bW5zU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghdmFsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2YWxbMF0udG9TdHJpbmcoKSArIFwiIFwiICsgVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWxbMV0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmbGV4IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZmxleFRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuRmxleFN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmpvaW4oIFwiIFwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcyA9IHZhbFswXSArIFwiIFwiICsgdmFsWzFdICsgXCIgXCI7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmFsWzJdO1xyXG4gICAgICAgICAgICBzICs9IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGV4dC1lbXBoYXNpcyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIHRleHRFbXBoYXNpc1Bvc2l0aW9uVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5UZXh0RW1waGFzaXNQb3NpdGlvblN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLnN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGV4dC1pbmRlbnQgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiB0ZXh0SW5kZW50VG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5UZXh0SW5kZW50U3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBgJHtVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbFswXSl9ICR7dmFsWzFdfWA7XHJcbiAgICAgICAgaWYgKHZhbFsyXSlcclxuICAgICAgICAgICAgcyArPSBcIiBcIiArIHZhbFsyXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdHJhbnNsYXRlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5UcmFuc2xhdGVTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLm11bHRpTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHByb3BlcnR5IHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxudHlwZSBQcm9wVG9TdHJpbmdGdW5jPFQ+ID0gKHZhbDogVCkgPT4gc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVByb3BlcnR5SW5mbyB0eXBlIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gdGhhdCB3ZSBrZWVwIGZvciBzdHlsZSBwcm9wZXJ0aWVzLiBNb3N0XHJcbiAqIGNvbW1vbmx5LCB0aGUgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhIHByb3BlcnR5IGlzIGEgY29udmVyc2lvbiBmdW5jdGlvbiwgd2hpY2ggdGFrZXMgYSB2YWx1ZVxyXG4gKiBvZiBhIHR5cGUgYWxsb3dlZCBmb3IgdGhlIHByb3BlcnR5IGFuZCBjb252ZXJ0cyBpdCB0byB0aGUgQ1NTIGNvbXBsaWFudCBzdHJpbmcuIEFsdGVybmF0aXZlbHksXHJcbiAqIGl0IGNhbiBiZSBhIG5hbWUgb2YgYW5vdGhlciBTdHlsZXNldCBwcm9wZXJ0eSBmb3Igd2hpY2ggdGhpcyBwcm9wZXJ0eSBpcyBhbiBhbGlhcy4gVGhpcyBpcyB1c2VkXHJcbiAqIGZvciBzaG9ydGVuaW5nIGZyZXF1ZW50bHkgdXNlZCBidXQgbG9uZyBwcm9wZXJ0eSBuYW1lcyAoZS5nLiBcImJnY1wiIGZvciBcImJhY2tncm91bmRDb2xvclwiKSBhbmRcclxuICogZm9yIHZlbmRvci1wcmVmaXhlZCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxudHlwZSBTdHlsZVByb3BlcnR5SW5mbzxUPiA9IFByb3BUb1N0cmluZ0Z1bmM8VD4gfCBrZXlvZiBTdHlsZVR5cGVzLlN0eWxlc2V0O1xyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlc2V0IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9Dc3NTdHJpbmcoIHN0eWxlc2V0OiBTdHlsZVR5cGVzLlN0eWxlc2V0LCBpbXBvcnRhbnQ/OiBTZXQ8c3RyaW5nPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVzZXQpXHJcblx0e1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCIkY3VzdG9tXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIG9mIHRoZSBcIiRjdXN0b21cIiBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbCA9IHN0eWxlc2V0W3Byb3BOYW1lXSBhcyBTdHlsZVR5cGVzLklDdXN0b21WYWxbXTtcclxuICAgICAgICAgICAgZm9yKCBsZXQgY3VzdG9tVmFsIG9mIHByb3BWYWwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjdXN0b21Qcm9wTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlUHJvcE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VzdG9tVmFsLnZhckRlZiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Qcm9wTmFtZSA9IGN1c3RvbVZhbC52YXJEZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVQcm9wTmFtZSA9IGN1c3RvbVZhbC50ZW1wbGF0ZVByb3BOYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbVByb3BOYW1lID0gY3VzdG9tVmFsLnZhckRlZi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUHJvcE5hbWUgPSBjdXN0b21WYWwudmFyRGVmLnRlbXBsYXRlUHJvcE5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFjdXN0b21Qcm9wTmFtZSB8fCAhdGVtcGxhdGVQcm9wTmFtZSlcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHMgKz0gYC0tJHtjdXN0b21Qcm9wTmFtZX06JHtzdHlsZVByb3BUb0Nzc1N0cmluZyggdGVtcGxhdGVQcm9wTmFtZSwgY3VzdG9tVmFsLnZhclZhbHVlLCB0cnVlKX1gO1xyXG4gICAgICAgICAgICAgICAgcyArPSAoaW1wb3J0YW50ICYmIGltcG9ydGFudC5oYXMoIHByb3BOYW1lKSA/IFwiICFpbXBvcnRhbnQ7XCIgOiBcIjtcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gZ2V0IHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHByb3BlcnR5XHJcbiAgICAgICAgICAgIHMgKz0gc3R5bGVQcm9wVG9Dc3NTdHJpbmcoIHByb3BOYW1lLCBzdHlsZXNldFtwcm9wTmFtZV0pO1xyXG4gICAgICAgICAgICBzICs9IChpbXBvcnRhbnQgJiYgaW1wb3J0YW50LmhhcyggcHJvcE5hbWUpID8gXCIgIWltcG9ydGFudDtcIiA6IFwiO1wiKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIHJldHVybiBgeyR7c319YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3R5bGUgc3RyaW5nXHJcbiAqIEBwYXJhbSBzdHlsZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVByb3BUb0Nzc1N0cmluZyggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcE5hbWUgfHwgcHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgcHJvcGVydHlcclxuICAgIGxldCBpbmZvID0gU3R5bGVQcm9wZXJ0eUluZm9zW3Byb3BOYW1lXTtcclxuICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIilcclxuICAgIHtcclxuICAgICAgICAvLyBnbyB1cCB0aGUgY2hhaW4gb2YgYWxpYXNlcyBpZiBhbnkgKHdlIGFkbWl0dGVkbHkgZG9uJ3QgbWFrZSB0aGUgZWZmb3J0IHRvIGRldGVjdCBjaXJjdWxhclxyXG4gICAgICAgIC8vIGRlcGVuZGVuY2llcywgYmVjYXVzZSBzZXR0aW5nIHVwIHRoZSBpbmZvcm1hdGlvbiBvYmplY3RzIGlzIG91ciBqb2IgYW5kIG5vdCBkZXZlbG9wZXJzJykuXHJcbiAgICAgICAgd2hpbGUoIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcE5hbWUgPSBpbmZvO1xyXG4gICAgICAgICAgICBpbmZvID0gU3R5bGVQcm9wZXJ0eUluZm9zW3Byb3BOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHMgPSB2YWx1ZU9ubHkgPyBcIlwiIDogVXRpbEZ1bmNzLmNhbWVsVG9EYXNoKCBwcm9wTmFtZSkgKyBcIjpcIjtcclxuXHJcbiAgICBpZiAodHlwZW9mIGluZm8gPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBzICs9IGluZm8oIHByb3BWYWwpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHByb3BWYWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcyArPSBwcm9wVmFsO1xyXG4gICAgZWxzZSBpZiAocHJvcFZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICBzICs9IHByb3BWYWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHByb3BWYWwpKVxyXG4gICAgICAgIHMgKz0gVXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHByb3BWYWwsIGl0ZW0gPT4gaXRlbSA9PSBudWxsID8gXCJcIiA6IGl0ZW0udG9TdHJpbmcoKSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcyArPSBwcm9wVmFsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byB0aGUgU3R5bGVQcm9wZXJ0eUluZm8gb2JqZWN0cyBkZXNjcmliaW5nIGN1c3RvbSBhY3Rpb25zIG5lY2Vzc2FyeSB0b1xyXG4gKiBjb252ZXJ0IHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgQ1NTLWNvbXBsaWFudCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBTdHlsZVByb3BlcnR5SW5mb3M6IHsgW0sgaW4ga2V5b2YgU3R5bGVUeXBlcy5TdHlsZXNldF06IFN0eWxlUHJvcGVydHlJbmZvPFN0eWxlVHlwZXMuU3R5bGVzZXRbS10+IH0gPVxyXG57XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGlvblRvQ3NzU3RyaW5nLFxyXG4gICAgYW5pbWF0aW9uRGVsYXk6IFV0aWxGdW5jcy5tdWx0aVRpbWVUb0Nzc1N0cmluZyxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBVdGlsRnVuY3MubXVsdGlUaW1lVG9Dc3NTdHJpbmcsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogVXRpbEZ1bmNzLm51bWJlclRvQ3NzU3RyaW5nLFxyXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICAvLyBiZ2M6IFwiYmFja2dyb3VuZENvbG9yXCIsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFV0aWxGdW5jcy5tdWx0aVBvc2l0aW9uVG9Dc3NTdHJpbmcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogVXRpbEZ1bmNzLm11bHRpU2l6ZVRvQ3NzU3RyaW5nLFxyXG4gICAgYmFzZWxpbmVTaGlmdDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGJvcmRlcjogYm9yZGVyU2lkZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tOiBib3JkZXJTaWRlVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21Db2xvcjogQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21XaWR0aDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQ29sb3I6IGJvcmRlckNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJJbWFnZU91dHNldDogYm9yZGVySW1hZ2VPdXRzZXRUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckltYWdlV2lkdGg6IGJvcmRlcldpZHRoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0OiBib3JkZXJTaWRlVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0Q29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRXaWR0aDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0OiBib3JkZXJTaWRlVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodENvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodFdpZHRoOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGVUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclNwYWNpbmc6IGJvcmRlclNwYWNpbmdUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclRvcDogYm9yZGVyU2lkZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wQ29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlcldpZHRoOiBib3JkZXJXaWR0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm90dG9tOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3hTaGFkb3c6IGJveFNoYWRvd1RvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGNhcmV0Q29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGNsaXA6IGNsaXBUb0Nzc1N0cmluZyxcclxuICAgIGNvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBjb2x1bW5HYXA6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGU6IGNvbHVtblJ1bGVUb0Nzc1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVDb2xvcjogQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVN0eWxlOiBib3JkZXJTdHlsZVRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBib3JkZXJXaWR0aFRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uczogY29sdW1uc1RvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGZsZXg6IGZsZXhUb0Nzc1N0cmluZyxcclxuICAgIGZsb29kQ29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGZvbnRTdHlsZTogVXRpbEZ1bmNzLmFuZ2xlVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgZ2FwOiBVdGlsRnVuY3MubXVsdGlMZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGdyaWRDb2x1bW5HYXA6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGdyaWRSb3dHYXA6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBoZWlnaHQ6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBsZWZ0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBsaWdodGluZ0NvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgbWFyZ2luOiBVdGlsRnVuY3MubXVsdGlMZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIG1hcmdpbkJvdHRvbTogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbWFyZ2luTGVmdDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIG1hcmdpblRvcDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbWF4SGVpZ2h0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBtYXhXaWR0aDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbWluSGVpZ2h0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcblx0bWluV2lkdGg6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBvYmplY3RQb3NpdGlvbjogVXRpbEZ1bmNzLnBvc2l0aW9uVG9Dc3NTdHJpbmcsXHJcbiAgICBvdXRsaW5lQ29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIG91dGxpbmVPZmZzZXQ6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIG91dGxpbmVTdHlsZTogYm9yZGVyU3R5bGVUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBwYWRkaW5nOiBVdGlsRnVuY3MubXVsdGlMZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIHBhZGRpbmdCb3R0b206IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIHBhZGRpbmdMZWZ0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIHBhZGRpbmdUb3A6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIHBlcnNwZWN0aXZlOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogVXRpbEZ1bmNzLnBvc2l0aW9uVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgcmlnaHQ6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIHJvd0dhcDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIHN0b3BDb2xvcjogQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIHRhYlNpemU6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIHRleHREZWNvcmF0aW9uVGhpY2tuZXNzOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICB0ZXh0RW1waGFzaXNDb2xvcjogQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgdGV4dEVtcGhhc2lzUG9zaXRpb246IHRleHRFbXBoYXNpc1Bvc2l0aW9uVG9Dc3NTdHJpbmcsXHJcbiAgICB0ZXh0SW5kZW50OiB0ZXh0SW5kZW50VG9Dc3NTdHJpbmcsXHJcbiAgICB0b3A6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgd2lkdGg6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICB6b29tOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbi8qKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gc3VwcG9ydHMgcXVlcnkgdG8gaXRzIHN0cmluZyByZXByZXNlbnRhdGlvbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydFF1ZXJ5VG9Dc3NTdHJpbmcoIHF1ZXJ5OiBTdHlsZVR5cGVzLlN1cHBvcnRzUXVlcnkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBxdWVyeSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gcXVlcnk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVTdXBwb3J0UXVlcnlUb0Nzc1N0cmluZyggc2luZ2xlUXVlcnkpKS5qb2luKFwiIG9yIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlU3VwcG9ydFF1ZXJ5VG9Dc3NTdHJpbmcoIHF1ZXJ5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN1cHBvcnRzIHF1ZXJ5IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVN1cHBvcnRRdWVyeVRvQ3NzU3RyaW5nKCBxdWVyeTogU3R5bGVUeXBlcy5TaW5nbGVTdXBwb3J0c1F1ZXJ5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcXVlcnkpXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcXVlcnkgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xyXG5cclxuICAgIGxldCBwcm9wTmFtZXMgPSBPYmplY3Qua2V5cyggcXVlcnkpLmZpbHRlciggKHByb3BOYW1lKSA9PiBwcm9wTmFtZSAhPSBcIiRuZWdhdGVcIik7XHJcbiAgICBpZiAocHJvcE5hbWVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICBsZXQgbm90ID0gcXVlcnkuJG5lZ2F0ZSA/IFwibm90XCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuICBgJHtub3R9ICgke3Byb3BOYW1lcy5tYXAoIChwcm9wTmFtZSkgPT4gc3R5bGVQcm9wVG9Dc3NTdHJpbmcoIHByb3BOYW1lLCBxdWVyeVtwcm9wTmFtZV0pKS5qb2luKCBcIikgYW5kIChcIil9KWA7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgVXRpbFR5cGVzIGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG4gKiBjYXBpdGFsaXplZCBhbmQgZGFzaGVzIGFyZSByZW1vdmVkLlxyXG4gKiBAcGFyYW0gZGFzaFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hUb0NhbWVsKCBkYXNoOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZGFzaClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cclxuXHRyZXR1cm4gZGFzaC5yZXBsYWNlKCAvLShbYS16QS1aXSkvZywgKHgsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZS5cclxuICogQHBhcmFtIGNhbWVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2goIGNhbWVsOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gIHJldHVybiBjYW1lbC5yZXBsYWNlKCAvKFthLXpBLVpdKSg/PVtBLVpdKS9nLCAnJDEtJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJpYyBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGFuIGFycmF5IG9mIHRoZSBnaXZlbiB0eXBldG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbiAqIEVsZW1lbnRzIG9mIHRoZSBhcnJheSBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gdmFsIEFycmF5IG9mIHRpbWUgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlUb0Nzc1N0cmluZzxUPiggdmFsOiBUW10sIGZ1bmM6ICh2OiBUKSA9PiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuICF2YWwgfHwgdmFsLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiB2YWwubWFwKCAoaXRlbSkgPT4gZnVuYyhpdGVtKSkuam9pbiggc2VwYXJhdG9yKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYXJyYXkgb2Ygc3RyaW5nIHZhbHVlcyB0byBhIHNpbmdsZSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIHNlcGFyYXRvci5cclxuICogQHBhcmFtIHZhbCBBcnJheSBvZiBzdHJpbmcgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nQXJyYXlUb0Nzc1N0cmluZyggdmFsOiAoc3RyaW5nIHwgb2JqZWN0KVtdLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiIFwiKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsICh2KSA9PiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIiA/IHYgOiB2LnRvU3RyaW5nKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBDb252ZXJ0cyBhIHZhbHVlIHRoYXQgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzIHRvIGEgc2luZ2xlIHN0cmluZyB1c2luZ1xyXG4vLyAgKiB0aGUgZ2l2ZW4gc2VwYXJhdG9yLlxyXG4vLyAgKiBAcGFyYW0gdmFsIFN0cmluZyB2YWx1ZSBvciBhcnJheSBvZiBzdHJpbmcgdmFsdWVzXHJcbi8vICAqL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RyaW5nT3JTdHJpbmdBcnJheVRvQ3NzU3RyaW5nKCB2YWw6IHN0cmluZ1tdIHwgc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiLFwiKTogc3RyaW5nXHJcbi8vIHtcclxuLy8gICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4vLyAgICAgICAgIHJldHVybiB2YWw7XHJcbi8vICAgICBlbHNlXHJcbi8vICAgICAgICAgcmV0dXJuIHN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbCwgc2VwYXJhdG9yKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTnVtYmVyXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBudW1iZXIgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgU2luZ2xlIG51bWJlciB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG51bWJlclRvQ3NzU3RyaW5nKCB2YWw6IFV0aWxUeXBlcy5OdW1iZXJfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wYXJ0IG51bWJlciBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBNdWx0aS1wYXJ0IG51bWJlciB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpTnVtYmVyVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLk11bHRpTnVtYmVyX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIG51bWJlclRvQ3NzU3RyaW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gbnVtYmVyVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBlcmNlbnRcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG51bWJlciB0byBhIHBlcmNlbnQgc3RyaW5nLiBOdW1iZXJzIGJldHdlZW4gLTEgYW5kIDEgYXJlIG11bHRpcGx5ZWQgYnkgMTAwLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnROdW1iZXJUb0Nzc1N0cmluZyggbjogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiAoTnVtYmVyLmlzSW50ZWdlcihuKSA/IG4gOiBuID4gLTEuMCAmJiBuIDwgMS4wID8gTWF0aC5yb3VuZCggbiAqIDEwMCkgOiBNYXRoLnJvdW5kKG4pKSArIFwiJVwiO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIHBlcmNlbnQgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgU2luZ2xlIHBlcmNlbnQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50VG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLlBlcmNlbnRfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuXHQgICAgcmV0dXJuIHBlcmNlbnROdW1iZXJUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBhcnQgcGVyY2VudCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBNdWx0aS1wYXJ0IHBlcmNlbnQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBlcmNlbnRUb0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuTXVsdGlQZXJjZW50X1N0eWxlVHlwZSwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHBlcmNlbnRUb0Nzc1N0cmluZywgc2VwYXJhdG9yKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gcGVyY2VudFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBMZW5ndGhcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgbGVuZ3RoIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICogdmFsdWVzIGFyZSB0cmVhdGVkIGFzIHBpeGVscyB3aGlsZSBmbG9hdGluZyBudW1iZXJzIHdpdGhpbiAtMSBhbmQgMSBhcmUgdHJlYXRlZCBhc1xyXG4gKiBwZXJjZW50cyBhbmQgZmxvYXRpbmcgbnVtYmVycyBvdXRzaWRlIC0xIGFuZCAxIGFyZSB0cmVhdGVkIGFzIFwiZW1cIi5cclxuICogQHBhcmFtIHZhbCBMZW5ndGggYXMgYSBudW1iZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGhOdW1iZXJUb0Nzc1N0cmluZyggbjogbnVtYmVyLCB1bml0cz86IFV0aWxUeXBlcy5MZW5ndGhVbml0cyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdW5pdHMgPyBuICsgdW5pdHMgOiBOdW1iZXIuaXNJbnRlZ2VyKCBuKSA/ICBuICsgXCJweFwiIDogbiA+IC0xLjAgJiYgbiA8IDEuMCA/IE1hdGgucm91bmQoIG4gKiAxMDApICsgXCIlXCIgOiBuICsgXCJlbVwiO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbGVuZ3RoIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIExlbmd0aCBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGhUb0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuTGVuZ3RoX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiBsZW5ndGhOdW1iZXJUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBhcnQgbGVuZ3RoIG9yIHBlcmNlbnRhZ2Ugc3R5bGUgcHJvcGVydHkgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQXJyYXkgb2YgbGVuZ3RoIHN0eWxlIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLk11bHRpTGVuZ3RoX1N0eWxlVHlwZSwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIGxlbmd0aFRvQ3NzU3RyaW5nLCBzZXBhcmF0b3IpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBsZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQW5nbGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW5nbGUgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIHN0cmluZy4gSW50ZWdlclxyXG4gKiB2YWx1ZXMgYXJlIHRyZWF0ZWQgYXMgZGVncmVlcyB3aGlsZSBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIHJhZGlhbnMuXHJcbiAqIEBwYXJhbSB2YWwgQW5nbGUgYXMgYSBudW1iZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmdsZU51bWJlclRvQ3NzU3RyaW5nKCBuOiBudW1iZXIsIHVuaXRzPzogVXRpbFR5cGVzLkFuZ2xlVW5pdHMpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPT09IDAgPyBcIjBcIiA6IHVuaXRzID8gbiArIHVuaXRzIDogTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgXCJkZWdcIiA6IG4gKyBcInJhZFwiO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbGVuZ3RoIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIExlbmd0aCBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmdsZVRvQ3NzU3RyaW5nKCB2YWw6IFV0aWxUeXBlcy5BbmdsZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG5cdCAgICByZXR1cm4gYW5nbGVOdW1iZXJUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGltZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aW1lIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICogdmFsdWVzIGFyZSB0cmVhdGVkIGFzIG1pbGxpc2Vjb25kcyB3aGlsZSBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIHNlY29uZHMuXHJcbiAqIEBwYXJhbSB2YWwgVGltZSBhcyBhIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVOdW1iZXJUb0Nzc1N0cmluZyggbjogbnVtYmVyLCB1bml0cz86IFV0aWxUeXBlcy5UaW1lVW5pdHMpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPT09IDAgPyBcIjBzXCIgOiB1bml0cyA/IG4gKyB1bml0cyA6IE51bWJlci5pc0ludGVnZXIobikgPyAgbiArIFwibXNcIiA6IG4gKyBcInNcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgVGltZSBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLlRpbWVfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuXHQgICAgcmV0dXJuIHRpbWVOdW1iZXJUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuaW1hdGlvbiBkZWxheSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBBbmltYXRpb24gZGVsYXkgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVRpbWVUb0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuTXVsdGlUaW1lX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gdGltZU51bWJlclRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHRpbWVUb0Nzc1N0cmluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyByZXNvbHV0aW9uIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICogdmFsdWVzIGFyZSB0cmVhdGVkIGFzIERQSSB3aGlsZSBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIERQQ00uXHJcbiAqIEBwYXJhbSB2YWwgUmVzb2x1dGlvbiBhcyBhIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdXRpb25Ub0Nzc1N0cmluZyggbjogbnVtYmVyLCB1bml0cz86IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gbiA9PT0gMCA/IFwiMFwiIDogdW5pdHMgPyBuICsgdW5pdHMgOiBOdW1iZXIuaXNJbnRlZ2VyKG4pID8gIG4gKyBcImRwaVwiIDogbiArIFwiZHBjbVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaXplIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpemUgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2l6ZVRvQ3NzU3RyaW5nKCB2YWw6IFV0aWxUeXBlcy5TaXplX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVXRpbFR5cGVzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIG9iamVjdFRvQ3NzU3RyaW5nKCB2YWwsIGZhbHNlLCBbXCJ3XCIsIGxlbmd0aFRvQ3NzU3RyaW5nXSwgW1wiaFwiLCBsZW5ndGhUb0Nzc1N0cmluZ10pO1xyXG4gICAgLy8gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuICAgIC8vICAgICByZXR1cm4gbGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbFswXSkgKyBcIiBcIiArIGxlbmd0aFRvQ3NzU3RyaW5nKCB2YWxbMV0pO1xyXG4gICAgZWxzZVxyXG5cdCAgICByZXR1cm4gbGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wYXJ0IHNpemUgc3R5bGUgcHJvcGVydHkgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQXJyYXkgb2YgbGVuZ3RoIHN0eWxlIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpU2l6ZVRvQ3NzU3RyaW5nKCB2YWw6IFV0aWxUeXBlcy5NdWx0aVNpemVfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHNpemVUb0Nzc1N0cmluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpemVUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIHBvc2l0aW9uIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpemUgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25Ub0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuUG9zaXRpb25fU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgIHtcclxuICAgICAgICBpZiAoXCJ4ZWRnZVwiIGluIHZhbClcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFRvQ3NzU3RyaW5nKCB2YWwsIGZhbHNlLCBcInhlZGdlXCIsIFtcInhcIiwgbGVuZ3RoVG9Dc3NTdHJpbmddLCBcInllZGdlXCIsIFtcInlcIiwgbGVuZ3RoVG9Dc3NTdHJpbmddKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RUb0Nzc1N0cmluZyggdmFsLCBmYWxzZSwgW1wieFwiLCBsZW5ndGhUb0Nzc1N0cmluZ10sIFtcInlcIiwgbGVuZ3RoVG9Dc3NTdHJpbmddKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuXHQgICAgcmV0dXJuIGxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcGFydCBwb3NpdGlvbiBzdHlsZSB2YWx1ZXMgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQXJyYXkgb2YgbGVuZ3RoIHN0eWxlIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9zaXRpb25Ub0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuTXVsdGlQb3NpdGlvbl9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBwb3NpdGlvblRvQ3NzU3RyaW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gIHBvc2l0aW9uVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE9iamVjdCB0byBjb252ZXJ0IHRvIHN0cmluZy5cclxuICogQHBhcmFtIHVzZVByb3BOYW1lcyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbmFtZXMgb2YgdGhlIG9iamVjdCdzIHByb3BydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy5cclxuICogQHBhcmFtIHByb3BzQW5kRnVuY3MgQXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIG9wdGlvbmFsbHkgZnVuY3Rpb25zLiBUaGUgb3JkZXIgb2YgdGhlIG5hbWVzIGRldGVybWluZXMgaW5cclxuICogICAgIHdoaWNoIG9wcmRlciB0aGUgcHJvcGVydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy4gSWYgYSBmdW5jdGlvbiBpcyBwcmVzZW50IGZvciB0aGUgcHJvcGVydHksXHJcbiAqICAgICBpdCB3aWxsIGJlIHVzZWQgdG8gY29udmVydCB0aGUgcHJvcGVydHkncyB2YWx1ZSB0byB0aGUgc3RyaW5nLiBJZiBhIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50LCB0aGVuIHRoZVxyXG4gKiAgICAgcHJvcGVydHkgdmFsdWUgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byB0aGUgc3RyaW5nIHVzaW5nIHRoZSB0b1N0cmluZyBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9Dc3NTdHJpbmcoIHZhbDogYW55LCB1c2VQcm9wTmFtZXM6IGJvb2xlYW4sIC4uLnByb3BzQW5kRnVuY3M6IChzdHJpbmcgfCBbc3RyaW5nLCAodmFsOiBhbnkpID0+IHN0cmluZ10pW10gKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbCB8fCBwcm9wc0FuZEZ1bmNzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcblx0bGV0IHMgPSBcIlwiO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BBbmRGdW5jIGluIHByb3BzQW5kRnVuY3MpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByb3BOYW1lID0gdHlwZW9mIHByb3BBbmRGdW5jID09PSBcInN0cmluZ1wiID8gcHJvcEFuZEZ1bmMgOiBwcm9wQW5kRnVuY1swXTtcclxuICAgICAgICBsZXQgZnVuYyA9IHR5cGVvZiBwcm9wQW5kRnVuYyA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IHByb3BBbmRGdW5jWzFdO1xyXG5cclxuICAgICAgICBsZXQgcHJvcFZhbCA9IHZhbFtwcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHMgKz0gXCIgXCI7XHJcblxyXG4gICAgICAgIGlmICh1c2VQcm9wTmFtZXMpXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcE5hbWU7XHJcblxyXG4gICAgICAgIGlmIChmdW5jKVxyXG4gICAgICAgICAgICBzICs9IFwiIFwiICsgZnVuYyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcFZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICBzICs9IFwiIFwiICsgcHJvcFZhbDtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyBiYXNpYyB0eXBlcyBhbmQgZnVuY3Rpb25zIHVzZWQgdG8gZGVmaW5lIENTUyBwcm9wZXJ0eSB0eXBlcy5cclxuICovXHJcblxyXG5pbXBvcnQge0lDdXN0b21WYXJ9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge0N1c3RvbVZhcn0gZnJvbSBcIi4uL3J1bGVzL0N1c3RvbVZhclwiO1xyXG5pbXBvcnQge3N0eWxlUHJvcFRvQ3NzU3RyaW5nfSBmcm9tIFwiLi9TdHlsZUZ1bmNzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTdHlsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgKGFsbW9zdCkgYW55IENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEJhc2VfU3R5bGVUeXBlID0gXCJpbmhlcml0XCIgfCBcImluaXRpYWxcIiB8IFwidW5zZXRcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHJpbmdQcm94eSBjbGFzcyBlbmNhcHN1bGF0ZXMgYSBzdHJpbmcsIHdoaWNoIGlzIHJldHVybmVkIHZpYSB0aGUgc3RhbmRhcmQgdG9TdHJpbmcoKVxyXG4gKiBtZXRob2QuIEFsbCBDU1MgcHJvcGVydGllcyBzaG91bGQgYWNjZXB0IHN0cmluZyBhcyB0aGUgdHlwZSBvZiB0aGVpciB2YWx1ZSBldmVuIGlmIG5vcm1hbGx5XHJcbiAqIHRoZXkgYWNjZXB0IG90aGVyIHR5cGVzIChlLmcgYSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIGFzIGBcInJlZFwiIHwgXCJncmVlblwiIHwgLi4uYCBmb3IgdGhlXHJcbiAqIGNvbG9yKSBwcm9wZXJ0eS4gVGhpcyBpcyBiZWNhdXNlIGluIGFkZGl0aW9uIHRvIHRoZWlyIG5vcm1hbCB2YWx1ZXMgYW55IHByb3BlcnR5XHJcbiAqIGNhbiB1c2UgY3VzdG9tIENTUyBwcm9wZXJ0eSBpbiB0aGUgZm9ybSBgdmFyKC0tcHJvcG5hbWUpYC4gSG93ZXZlciwgaWYgd2UgYWRkIHN0cmluZyB0eXBlXHJcbiAqIHRvIHRoZSBzZXQgb2Ygc3RyaW5nIGxpdGVyYWxzIChlLmcuIGBcInJlZFwiIHwgXCJncmVlblwiIHwgc3RyaW5nYCksIHRoaXMgdGhyb3dzIG9mZiB0aGVcclxuICogSW50ZWxsaXNlbnNlIGFuZCBpdCBkb2Vzbid0IHByb21wdCBkZXZlbG9wZXJzIGZvciB0aGUgcG9zc2libGUgdmFsdWVzLiBUaGUgU3RyaW5nUHJveHlcclxuICogY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBzdHJpbmcgKGUuZy4gYFwicm93XCIgfCBcImNvbHVtblwiIHwgU3RyaW5nUHJveHlgKSBhbmQgdGhpcyBzb2x2ZXNcclxuICogdGhlIEludGVsbGlzZW5zZSBpc3N1ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdQcm94eVxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvciggcz86IHN0cmluZyB8IFN0cmluZ1Byb3h5KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucyA9IHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0cmluZ1Byb3h5VG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucyA9PSBudWxsID8gXCJcIiA6IHR5cGVvZiB0aGlzLnMgPT09IFwic3RyaW5nXCIgPyB0aGlzLnMgOiB0aGlzLnMudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nUHJveHlUb0Nzc1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcz86IHN0cmluZyB8IFN0cmluZ1Byb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVmFyVmFsdWUgY2xhc3MgZW5jYXBzdWxhdGVzIGEgdXNhZ2Ugb2YgdGhlIENTUyBgdmFyYCBmdW5jdGlvbiBmb3IgZ2V0dGluZyBhIHZhbHVlIG9mIGFcclxuICogY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBWYXJWYWx1ZTxUPlxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggdmFyRGVmOiBJQ3VzdG9tVmFyPFQ+LCBmYWxsYmFja1ZhbHVlPzogVCB8IElDdXN0b21WYXI8VD4gfCBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy52YXJEZWYgPSB2YXJEZWY7XHJcbiAgICAgICAgdGhpcy5mYWxsYmFja1ZhbHVlID0gZmFsbGJhY2tWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFyVmFsdWVUb0Nzc1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgdmFyTmFtZSA9IHR5cGVvZiB0aGlzLnZhckRlZiA9PT0gXCJzdHJpbmdcIiA/IHRoaXMudmFyRGVmIDogKHRoaXMudmFyRGVmIGFzIEN1c3RvbVZhcjxUPikudmFyTmFtZTtcclxuICAgICAgICBsZXQgcyA9IGB2YXIoLS0ke3Zhck5hbWV9YDtcclxuICAgICAgICBpZiAodGhpcy5mYWxsYmFja1ZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcyArPSBcIixcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tWYWx1ZSBpbnN0YW5jZW9mIEN1c3RvbVZhcilcclxuICAgICAgICAgICAgICAgIHMgKz0gbmV3IFZhclZhbHVlKCB0aGlzLmZhbGxiYWNrVmFsdWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy5mYWxsYmFja1ZhbHVlID09PSBcInN0cmluZ1wiIHx8IHRoaXMuZmFsbGJhY2tWYWx1ZSBpbnN0YW5jZW9mIFN0cmluZ1Byb3h5IHx8IHR5cGVvZiB0aGlzLnZhckRlZiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHMgKz0gdGhpcy5mYWxsYmFja1ZhbHVlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzICs9IHN0eWxlUHJvcFRvQ3NzU3RyaW5nKCAodGhpcy52YXJEZWYgYXMgQ3VzdG9tVmFyPFQ+KS50ZW1wbGF0ZVByb3BOYW1lLCB0aGlzLmZhbGxiYWNrVmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHMgKyBcIilcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFyVmFsdWVUb0Nzc1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YXJEZWY6IElDdXN0b21WYXI8VD47XHJcbiAgICBwdWJsaWMgZmFsbGJhY2tWYWx1ZT86IFQgfCBJQ3VzdG9tVmFyPFQ+IHwgc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHRoYXQgZXh0ZW5kcyB0aGUgZ2l2ZW4gdHlwZSB3aXRoIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqIC0gYmFzaWMgc3R5bGUgdmFsdWVzIHRoYXQgYXJlIHZhbGlkIGZvciBhbGwgc3R5bGUgcHJvcGVydGllcy5cclxuICogLSBTdHJpbmdQcm94eSB0eXBlIHRoYXQgYWxsb3dzIHNwZWNpZnlpbmcgcmF3IHN0cmluZyB2YWx1ZS5cclxuICogLSBWYXJWYWx1ZSBnZW5lcmljIHR5cGUgdGhhdCBhbGxvd3MgdXNpbmcgYSBDU1MgY3VzdG9tIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRQcm9wVHlwZTxUPiA9IFQgfCBCYXNlX1N0eWxlVHlwZSB8IFN0cmluZ1Byb3h5IHwgVmFyVmFsdWU8VD47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIG51bWJlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBOdW1iZXJfU3R5bGVUeXBlID0gRXh0ZW5kZWRQcm9wVHlwZTxudW1iZXI+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgbnVtYmVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpTnVtYmVyX1N0eWxlVHlwZSA9IE51bWJlcl9TdHlsZVR5cGUgfCBOdW1iZXJfU3R5bGVUeXBlW107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBQZXJjZW50XHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyBwZXJjZW50YWdlLiBQZXJjZW50IGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gbnVtYmVyOiBpbnRlZ2VyIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudHM7IGZsb2F0aW5nIG51bWJlcnMgd2l0aGluIC0xIGFuZCAxXHJcbiAqICAgICBhcmUgbXVsdGlsaWVkIGJ5IDEwMC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRfU3R5bGVUeXBlID0gRXh0ZW5kZWRQcm9wVHlwZTxudW1iZXI+O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgcGVyY2VudGFnZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aVBlcmNlbnRfU3R5bGVUeXBlID0gUGVyY2VudF9TdHlsZVR5cGUgfCBQZXJjZW50X1N0eWxlVHlwZVtdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTGVuZ3RoXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGxlbmd0aCAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhVbml0cyA9IFwiUVwiIHwgXCJjaFwiIHwgXCJjbVwiIHwgXCJlbVwiIHwgXCJleFwiIHwgXCJpY1wiIHwgXCJpblwiIHwgXCJsaFwiIHwgXCJtbVwiIHwgXCJwY1wiIHxcclxuICAgICAgICAgICAgICAgIFwicHRcIiB8IFwicHhcIiB8IFwidmJcIiB8IFwidmhcIiB8IFwidmlcIiB8IFwidndcIiB8IFwicmVtXCIgfCBcInJsaFwiIHwgXCJ2bWF4XCIgfCBcInZtaW5cIiB8IFwiJVwiO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyBsZW5ndGggb3IgcGVyY2VudGFnZS4gTGVuZ3RoIGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gc3RyaW5nIChlLmcuIFwiMjBweFwiIG9yIFwiNzUlXCIpXHJcbiAqICAgLSBudW1iZXI6IGludGVnZXIgdmFsdWVzIGFyZSB0cmVhdGVkIGFzIHBpeGVscyB3aGlsZSBmbG9hdGluZyBudW1iZXJzIHdpdGhpbiAtMSBhbmQgMSBhcmVcclxuICogICAgIHRyZWF0ZWQgYXMgcGVyY2VudHMgYW5kIGZsb2F0aW5nIG51bWJlcnMgb3V0c2lkZSAtMSBhbmQgMSBhcmUgdHJlYXRlZCBhcyBcImVtXCIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBMZW5ndGhfU3R5bGVUeXBlID0gRXh0ZW5kZWRQcm9wVHlwZTxcImF1dG9cIiB8IG51bWJlciB8IHN0cmluZz47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBsZW5ndGggb3IgcGVyY2VudGFnZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUxlbmd0aF9TdHlsZVR5cGUgPSBMZW5ndGhfU3R5bGVUeXBlIHwgTGVuZ3RoX1N0eWxlVHlwZVtdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQW5nbGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgYW5nbGUgKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVVbml0cyA9IFwiZGVnXCIgfCBcInJhZFwiIHwgXCJncmFkXCIgfCBcInR1cm5cIjtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgYW5nbGUuIEFuZ2xlIGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gc3RyaW5nIChlLmcuIDIwZGVnIG9yIDEuNHJhZClcclxuICogICAtIG51bWJlcjogemVybyBpcyB0cmVhdGVkIGFzIG5vdCBoYXZpbmcgYW55IHN1ZmZpeDsgaW50ZWdlciBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIGRlZ3JlZXM7XHJcbiAqICAgICBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIHJhZGlhbnMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBbmdsZV9TdHlsZVR5cGUgPSBFeHRlbmRlZFByb3BUeXBlPG51bWJlciB8IHN0cmluZz47XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaW1lXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHRpbWUgKi9cclxuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0gXCJzXCIgfCBcIm1zXCI7XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIHRpbWUuIFRpbWUgY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gXCIyc1wiIG9yIFwiMjUwbXNcIilcclxuICogICAtIG51bWJlcjogaW50ZWdlciBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIG1pbGxpc2Vjb25kcyB3aGlsZSBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkXHJcbiAqICAgICBhcyBzZWNvbmRzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGltZV9TdHlsZVR5cGUgPSBFeHRlbmRlZFByb3BUeXBlPG51bWJlcj47XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCB0aW1lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpVGltZV9TdHlsZVR5cGUgPSBUaW1lX1N0eWxlVHlwZSB8IFRpbWVfU3R5bGVUeXBlW107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBTaXplXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyBzaXplLCB3aGljaCBjYW4gYmUgZXhwcmVzc2VkIGFzIG9uZSBvciB0d28gdmFsdWVzIGVhY2ggb2YgZWFjaCBpcyBvZiB0aGVcclxuICogTGVuZ3RoX1N0eWxlVHlwZSB0eXBlLiBUd28gdmFsdWVzIGFyZSBnaXZlbiBhcyBhbiBvYmplY3Qgd2l0aCAndycgKHdpZHRoKSBhbmQgJ2gnIChoZWlnaHQpXHJcbiAqIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaXplX1N0eWxlVHlwZSA9IExlbmd0aF9TdHlsZVR5cGUgfCB7IHc6IExlbmd0aF9TdHlsZVR5cGU7IGg6IExlbmd0aF9TdHlsZVR5cGUgfTtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHNpemUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlTaXplX1N0eWxlVHlwZSA9IFNpemVfU3R5bGVUeXBlIHwgU2l6ZV9TdHlsZVR5cGVbXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFBvc2l0aW9uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyBwb3NpdGlvbiwgd2hpY2ggY2FuIGJlIGV4cHJlc3NlZCBhcyBvbmUgb3IgdHdvIG9yIDMgb3IgNCB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQb3NpdGlvbl9TdHlsZVR5cGUgPSBFeHRlbmRlZFByb3BUeXBlPFwiY2VudGVyXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgTGVuZ3RoX1N0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICB7IHg6IFwiY2VudGVyXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IExlbmd0aF9TdHlsZVR5cGU7IHk6IFwiY2VudGVyXCIgfCBcInRvcFwiIHwgXCJib3R0b21cIiB8IExlbmd0aF9TdHlsZVR5cGUgfSB8XHJcbiAgICAgICAgICAgICAgICB7IHhlZGdlOiBzdHJpbmc7IHg/OiBMZW5ndGhfU3R5bGVUeXBlOyB5ZWRnZTogc3RyaW5nOyB5PzogTGVuZ3RoX1N0eWxlVHlwZSB9PjtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHBvc2l0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpUG9zaXRpb25fU3R5bGVUeXBlID0gUG9zaXRpb25fU3R5bGVUeXBlIHwgUG9zaXRpb25fU3R5bGVUeXBlW107XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=