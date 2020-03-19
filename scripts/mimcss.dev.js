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
    raw(raw) { return new UtilTypes_1.StringProxy(raw); }
    all(ns) { return ns == null ? "*" : `${ns}|*`; }
    attr(attrName, op, value, caseInsensitive, caseSensitive) { return new UtilTypes_1.StringProxy(SelectorFuncs_1.attr(attrName, op, value, caseInsensitive, caseSensitive)); }
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
const CustomVar_1 = __webpack_require__(/*! ../rules/CustomVar */ "./src/rules/CustomVar.ts");
const StyleFuncs_1 = __webpack_require__(/*! ../styles/StyleFuncs */ "./src/styles/StyleFuncs.ts");
/**
 * The msh class contains static helper functions that are used whenever there is a need to produce
 * CSS string value based on more complicated type(s). The majority of these functions return
 * StringProxy object so that they can be used in styleset properties assignments, for example:
 * ```tsx
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
     * Converts the given value corresponding to the given style property to string.
     * @param stylePropName Style property name that determines how the value should be converted
     * to a CSS compliant string.
     * @param stylePropValue Value to convert.
     */
    static val(stylePropName, stylePropValue) {
        return StyleFuncs_1.stylePropToCssString(stylePropName, stylePropValue, true);
    }
    static units(n, unit) {
        return n + unit;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Colors
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    static colorSep(c) {
        return ColorFuncs.colorSep(c);
    }
    static rgb(r, g, b, a) {
        return new UtilTypes_1.StringProxy(ColorFuncs.rgb(r, g, b, a));
    }
    static hsl(h, s, l, a) {
        return new UtilTypes_1.StringProxy(ColorFuncs.hsl(h, s, l, a));
    }
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
    static Q(n) { return this.units(n, "Q"); }
    static ch(n) { return this.units(n, "ch"); }
    static cm(n) { return this.units(n, "cm"); }
    static em(n) { return this.units(n, "em"); }
    static ex(n) { return this.units(n, "ex"); }
    static ic(n) { return this.units(n, "ic"); }
    static in(n) { return this.units(n, "in"); }
    static lh(n) { return this.units(n, "lh"); }
    static mm(n) { return this.units(n, "mm"); }
    static pc(n) { return this.units(n, "pc"); }
    static pt(n) { return this.units(n, "pt"); }
    static px(n) { return this.units(n, "px"); }
    static vb(n) { return this.units(n, "vb"); }
    static vh(n) { return this.units(n, "vh"); }
    static vi(n) { return this.units(n, "vi"); }
    static vw(n) { return this.units(n, "vw"); }
    static rem(n) { return this.units(n, "rem"); }
    static rlh(n) { return this.units(n, "rlh"); }
    static vmax(n) { return this.units(n, "vmax"); }
    static vmin(n) { return this.units(n, "vmin"); }
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
    static deg(n) { return this.units(n, "deg"); }
    /** Creates angle value in radians */
    static rad(n) { return this.units(n, "rad"); }
    /** Creates angle value in gradians */
    static grad(n) { return this.units(n, "grad"); }
    /** Creates angle value in turns */
    static turn(n) { return this.units(n, "turn"); }
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
    static s(n) { return this.units(n, "s"); }
    /** Creates time value in milliseconds */
    static ms(n) { return this.units(n, "ms"); }
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
    static hz(n) { return this.units(n, "Hz"); }
    static khz(n) { return this.units(n, "kHz"); }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Resolution units
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    static dpi(n) { return this.units(n, "dpi"); }
    static dpcm(n) { return this.units(n, "dpcm"); }
    static dppx(n) { return this.units(n, "dppx"); }
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
    static fr(n) { return this.units(n, "fr"); }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Custom CSS properties
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    /**
     * Defines a custom CSS property as part of a Styleset. Use it as in the following example:
     * ```tsx
     * let myStyles = $scope( class
     * {
     *     mainColor = $custom( "color", "black");
     *     div = $tag( "div", { $custom: [ tsh.custom( this.mainColor, "brown") ] })
     * });
     * ```
     * This is equivalent to the following CSS:
     * ```css
     * :root { --mainColor: "black"; }
     * div { --mainColor: "brown"; }
     * ```
     * The `tsh.custom` method will produce a compilation error if an invalid type is used for the
     * property value.
     */
    static custom(varDef, varValue) {
        return { varDef, varValue };
    }
    /**
     * Returns the string representation of the CSS var() function for the given custom property.
     * Use it as in the following example:
     * ```tsx
     * let myStyles = $scope( class
     * {
     *     defaultColor = $custom( "color", "blue");
     *
     *     sidebar = $class( { color: tsh.var( this.defaultColor, "black") })
     * });
     * ```
     * The var method can also be used with simple string values:
     * ```tsx
     * <div style={{ color: tsh.var( "default-color", "black") }}
     * ```
     */
    static var(varDef, fallbackValue) {
        return new VarValue(varDef, fallbackValue);
    }
}
exports.tsh = tsh;
/**
 * The VarValue class encapsulates a usage of the CSS `var` function for getting a value of a
 * custom CSS property.
 */
class VarValue extends UtilTypes_1.StringProxy {
    constructor(varDef, fallbackValue) {
        super();
        this.varDef = varDef;
        this.fallbackValue = fallbackValue;
    }
    toString() {
        let varName = typeof this.varDef === "string" ? this.varDef : this.varDef.varName;
        let s = `var(--${varName}`;
        if (this.fallbackValue) {
            s += ",";
            if (this.fallbackValue instanceof CustomVar_1.CustomVar)
                s += tsh.var(this.fallbackValue);
            else if (typeof this.fallbackValue === "string" || this.fallbackValue instanceof UtilTypes_1.StringProxy || typeof this.varDef === "string")
                s += this.fallbackValue;
            else
                s += tsh.val(this.varDef.templatePropName, this.fallbackValue);
        }
        return s + ")";
    }
}
exports.VarValue = VarValue;


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
const tsh_1 = __webpack_require__(/*! ../helpers/tsh */ "./src/helpers/tsh.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
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
        return `--${this.varName}: ${tsh_1.tsh.val(this.templatePropName, this.varValue)}`;
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
        // create instance of the rules definition class and then go over its properties,
        // which define CSS rules.
        let rulesDef;
        if (typeof this.definitionClass === "function") {
            try {
                // create instance of the rules definition class
                rulesDef = new this.definitionClass();
            }
            catch (err) {
                console.error(`Error instantiating Rule Definition of type '${this.definitionClass.name}'`);
                return;
            }
        }
        else
            rulesDef = this.definitionClass;
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
/**
 * The SupportRule type describes a CSS @supports rule.
 */
class SupportsRule extends GroupRule_1.GroupRule {
    constructor(query, definition) {
        super(7 /* SUPPORTS */, definition);
        this.query = query;
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new SupportsRule();
        newRule.query = this.query;
        return newRule;
    }
    // Inserts this rule into the given parent rule or stylesheet.
    insert(parent) {
        // determine whether the query is supported and if it is not, don't insert the rule
        if (!CSS.supports(this.query))
            return;
        let index = parent.insertRule(`@supports ${this.query} {}`, parent.cssRules.length);
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
function colorSep(c) {
    return c == null ? "0" : typeof c === "string" ? c : Number.isInteger(c) ? c.toString() : this.percent(c);
}
exports.colorSep = colorSep;
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
 * This file contains types for working with CSS colors.
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
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (val.length < 3) {
        // this is step function with only the number of steps
        ///////////////
        if (val[0] <= 0)
            throw new Error("Number of steps in animation function must be greater than zero");
        else if (!Number.isInteger(val[0]))
            throw new Error("Number of steps in animation function must be an Integer");
        ////////////
        return `step(${val[0]}${val.length === 2 ? "," + val[1] : ""})`;
    }
    else {
        // this is bezier function
        ///////////////
        if (val[0] < 0 || val[0] > 1 || val[2] < 0 || val[2] > 1)
            throw new Error("First and third parameters of cubic-bezier animation function must be between 0 and 1");
        ////////////
        return `cubic-bezier(${val[0]},${val[1]},${val[2]},${val[3]})`;
    }
}
/**
 * Converts animation iteration count style value to the CSS time string.
 */
function animationTimingFunctionToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (val.length === 0)
        return "";
    else if (typeof val[0] === "number")
        return singleAnimationTimingFunctionToCssString(val);
    else
        return UtilFuncs.arrayToCssString(val, singleAnimationTimingFunctionToCssString, ",");
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
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return UtilFuncs.stringArrayToCssString(val, " ");
    else
        return val;
}
/**
 * Converts border width style value to the CSS string.
 */
function borderWidthToCssString(val) {
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
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
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
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else
        return UtilFuncs.arrayToCssString(val, borderImageOutsetToCssString, " ");
}
/**
 * Converts box shadow style to its CSS string value.
 */
function boxShadowToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else
        return UtilFuncs.stringArrayToCssString(val);
}
/**
 * Converts clip style value to its CSS string value.
 */
function clipToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else
        return `rect(${UtilFuncs.arrayToCssString(val, UtilFuncs.lengthToCssString, " ")}`;
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
            if (typeof v === "string")
                s += v;
            else
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
    else if (val instanceof UtilTypes.StringProxy)
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
    else if (val instanceof UtilTypes.StringProxy)
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
    else if (val instanceof UtilTypes.StringProxy)
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
    else if (val instanceof UtilTypes.StringProxy)
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
    else if (val instanceof UtilTypes.StringProxy)
        return val.toString();
    else
        return arrayToCssString(val, timeToCssString);
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
    toString() {
        return this.s == null ? "" : typeof this.s === "string" ? this.s : this.s.toString();
    }
}
exports.StringProxy = StringProxy;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvaGVscGVycy9TZWxlY3RvckZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9oZWxwZXJzL1NlbGVjdG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2hlbHBlcnMvdHNoLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQ2xhc3NSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9DdXN0b21WYXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0ZvbnRGYWNlUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvR3JvdXBSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9JRFJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0ltcG9ydFJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL01lZGlhUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvUnVsZUNvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvUnVsZVR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9TZWxlY3RvclJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1N0eWxlUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU3VwcG9ydHNSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9UYWdSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zY29wZS9TY29wZVR5cGVzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zY29wZS9TdHlsZVNjb3BlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zY29wZS9Uc3NNYW5hZ2VyLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvQ29sb3JGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL0NvbG9yVHlwZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9Gb250RmFjZUZ1bmNzLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9zdHlsZXMvTWVkaWFGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvc3R5bGVzL1N0eWxlRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9VdGlsRnVuY3MudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9VdGlsVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsRUFBRSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxNQUFNLENBQUMsR0FBRyxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxNQUFNLENBQUMsR0FBRyxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRTs7T0FFRztJQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBUyxFQUFFLEtBQW1CO1FBRTdDLE9BQU8sU0FBUyxDQUFDLHVCQUF1QixDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBSUQsK0ZBQStGO0lBQy9GLEVBQUU7SUFDRixjQUFjO0lBQ2QsRUFBRTtJQUNGLCtGQUErRjtJQUUvRixxQ0FBcUM7SUFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0QscUNBQXFDO0lBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9ELHNDQUFzQztJQUMvQixNQUFNLENBQUMsSUFBSSxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVqRSxtQ0FBbUM7SUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFakU7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFTLEVBQUUsS0FBa0I7UUFFOUMsT0FBTyxTQUFTLENBQUMsc0JBQXNCLENBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFJRCwrRkFBK0Y7SUFDL0YsRUFBRTtJQUNGLGFBQWE7SUFDYixFQUFFO0lBQ0YsK0ZBQStGO0lBRS9GLG9DQUFvQztJQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFFLENBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCx5Q0FBeUM7SUFDbEMsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0Q7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFTLEVBQUUsS0FBaUI7UUFFNUMsT0FBTyxTQUFTLENBQUMscUJBQXFCLENBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFJRCwrRkFBK0Y7SUFDL0YsRUFBRTtJQUNGLGtCQUFrQjtJQUNsQixFQUFFO0lBQ0YsK0ZBQStGO0lBQ3hGLE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBSS9ELCtGQUErRjtJQUMvRixFQUFFO0lBQ0YsbUJBQW1CO0lBQ25CLEVBQUU7SUFDRiwrRkFBK0Y7SUFDeEYsTUFBTSxDQUFDLEdBQUcsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckU7OztXQUdPO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBRSxDQUFTLEVBQUUsS0FBYztRQUUvQyxPQUFPLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUlELCtGQUErRjtJQUMvRixFQUFFO0lBQ0YsNEJBQTRCO0lBQzVCLEVBQUU7SUFDRiwrRkFBK0Y7SUFDeEYsTUFBTSxDQUFDLEVBQUUsQ0FBRSxDQUFTLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFJN0QsK0ZBQStGO0lBQy9GLEVBQUU7SUFDRix3QkFBd0I7SUFDeEIsRUFBRTtJQUNGLCtGQUErRjtJQUUvRjs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRztJQUNJLE1BQU0sQ0FBQyxNQUFNLENBQWdDLE1BQXFCLEVBQUUsUUFBeUI7UUFFdEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBZ0MsTUFBOEIsRUFDL0QsYUFBc0U7UUFFbEYsT0FBTyxJQUFJLFFBQVEsQ0FBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBN1BELGtCQTZQQztBQUlEOzs7R0FHRztBQUNILE1BQWEsUUFBdUMsU0FBUSx1QkFBVztJQUVuRSxZQUFhLE1BQThCLEVBQzNCLGFBQXNFO1FBRWxGLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVNLFFBQVE7UUFFWCxJQUFJLE9BQU8sR0FBRyxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRSxJQUFJLENBQUMsTUFBdUIsQ0FBQyxPQUFPLENBQUM7UUFDcEcsSUFBSSxDQUFDLEdBQUcsU0FBUyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQ3RCO1lBQ0ksQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUNULElBQUksSUFBSSxDQUFDLGFBQWEsWUFBWSxxQkFBUztnQkFDdkMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUNqQyxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsWUFBWSx1QkFBVyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRO2dCQUMzSCxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Z0JBRXhCLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFHLElBQUksQ0FBQyxNQUF1QixDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6RjtRQUVELE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0NBS0o7QUEvQkQsNEJBK0JDOzs7Ozs7Ozs7Ozs7OztBQ3ZURCw2QkFBNkI7Ozs7O0FBRTdCLHFGQUFtQztBQUNuQyx1RkFBb0M7QUFJcEMsbUZBQWtDO0FBQ2xDLHFGQUFtQztBQUNuQywrRkFBd0M7QUFDeEMsMkVBQThCOzs7Ozs7Ozs7Ozs7Ozs7QUNUOUIsZ0ZBQWtDO0FBQ2xDLG1HQUF3RDtBQUN4RCx3RUFBMkI7QUFDM0IsdUZBQXNDO0FBS3RDOztHQUVHO0FBQ0gsTUFBYSxhQUFjLFNBQVEsV0FBSTtJQUV0QyxZQUFvQixTQUFzQixFQUFFLFlBQWtDO1FBRTdFLEtBQUssbUJBQXFCLENBQUM7UUFFM0IsSUFBSSxTQUFTO1lBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXdCLEVBQUUsS0FBMEIsRUFBRSxRQUFnQjtRQUVyRixLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBRSxRQUFRLENBQUMsQ0FBQzthQUMxRCxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7WUFFdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztRQUU3QyxLQUFLLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhO1lBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBSUE7Ozs7R0FJRTtJQUNILElBQVcsSUFBSSxLQUFhLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFeEQ7Ozs7T0FJRztJQUNILElBQVcsT0FBTyxLQUFhLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFJM0QsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLE9BQU8sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QyxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBSUQsOERBQThEO0lBQ3ZELE1BQU0sQ0FBRSxNQUF1QztRQUVyRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFFLGNBQWMsSUFBSSxDQUFDLGFBQWEsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQTJCLENBQUM7UUFFeEQsS0FBSyxJQUFJLFlBQVksSUFBSSxJQUFJLENBQUMsYUFBYTtZQUMxQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUUsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFJRCx5QkFBeUI7SUFDekIsSUFBVyxnQkFBZ0IsS0FBdUIsT0FBTyxJQUFJLENBQUMsT0FBMkIsQ0FBQyxDQUFDLENBQUM7Q0FXNUY7QUFwRkQsc0NBb0ZDO0FBSUQ7O0dBRUc7QUFDSCxNQUFNLFlBQWEsU0FBUSxxQkFBUztJQUVuQyxZQUFvQixRQUFtQjtRQUV0QyxLQUFLLG1CQUFxQixRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFOUQsSUFBSSxRQUFRO1lBQ1gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFJRCw0QkFBNEI7SUFDcEIsYUFBYSxDQUFFLFFBQWdDO1FBRXRELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUTtZQUMvQixPQUFPLFFBQVEsQ0FBQzthQUNaLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBRSxRQUFRLENBQUM7WUFDbkMsT0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDOztZQUV0QixPQUFPLFNBQUcsQ0FBQyxPQUFPLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBSUQsOERBQThEO0lBQ3ZELFdBQVc7UUFFakIsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLElBQUksZ0NBQW1CLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztJQUN4RixDQUFDO0lBSUQsK0NBQStDO0lBQ3JDLGdCQUFnQjtRQUV6QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztDQU1EOzs7Ozs7Ozs7Ozs7Ozs7QUM1SkQsdUZBQXNDO0FBS3RDOztHQUVHO0FBQ0gsTUFBYSxTQUFVLFNBQVEscUJBQVM7SUFFdkMsWUFBb0IsS0FBd0IsRUFBRSxZQUFrQztRQUUvRSxLQUFLLGdCQUFrQixLQUFLLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBSUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF3QixFQUFFLEtBQTBCLEVBQUUsUUFBZ0I7UUFFckYsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUUsUUFBUSxDQUFDLENBQUM7YUFDdEQsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssUUFBUTtZQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O1lBRW5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUlEOzs7O09BSUc7SUFDSCxJQUFXLElBQUksS0FBYSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXBEOzs7O09BSUc7SUFDSCxJQUFXLE9BQU8sS0FBYSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUk3RCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDOUIsT0FBTyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDekMsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUlELCtDQUErQztJQUNyQyxnQkFBZ0I7UUFFekIsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM3QixDQUFDO0lBSUQsa0RBQWtEO0lBQ2xELElBQVcsS0FBSyxLQUFhLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Q0FRckQ7QUF0RUQsOEJBc0VDOzs7Ozs7Ozs7Ozs7Ozs7QUM3RUQsZ0ZBQWtDO0FBQ2xDLHdFQUE0QjtBQUs1Qjs7R0FFRztBQUNILE1BQWEsU0FBd0MsU0FBUSxXQUFJO0lBRWhFLFlBQW9CLGdCQUFvQixFQUFFLFFBQTBCLEVBQUUsWUFBa0M7UUFFdkcsS0FBSyxjQUFlLENBQUM7UUFFckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXdCLEVBQUUsS0FBMEIsRUFBRSxRQUFnQjtRQUVyRixLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBRSxRQUFRLENBQUMsQ0FBQzthQUNwRCxJQUFJLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxRQUFRO1lBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7WUFFakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBSUQ7Ozs7T0FJRztJQUNILElBQVcsSUFBSSxLQUFhLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFbEQ7Ozs7T0FJRztJQUNILElBQVcsT0FBTyxLQUFhLE9BQU8sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBSTVELDRGQUE0RjtJQUM1Riw2RkFBNkY7SUFDN0YsZ0RBQWdEO0lBQ2hELElBQVcsYUFBYSxLQUFjLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUlyRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksU0FBUyxFQUFLLENBQUM7UUFDakMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDakMsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCw4REFBOEQ7SUFDOUQseUZBQXlGO0lBQ3pGLDBEQUEwRDtJQUNuRCxNQUFNLENBQUUsTUFBdUMsSUFBUyxDQUFDO0lBSWhFLG1DQUFtQztJQUM1QixXQUFXO1FBRWpCLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQUcsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7Q0FnQkQ7QUExRkQsOEJBMEZDOzs7Ozs7Ozs7Ozs7Ozs7QUNuR0QsNEdBQTJEO0FBQzNELHdFQUE0QjtBQUk1Qjs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLFdBQUk7SUFFckMsWUFBb0IsUUFBbUI7UUFFdEMsS0FBSyxrQkFBb0IsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMxQixDQUFDO0lBRUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FDNUIsY0FBYyxtQ0FBbUIsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELHlCQUF5QjtJQUN6QixJQUFXLGVBQWUsS0FBc0IsT0FBTyxJQUFJLENBQUMsT0FBMEIsQ0FBQyxDQUFDLENBQUM7Q0FJekY7QUFyQ0Qsb0NBcUNDOzs7Ozs7Ozs7Ozs7Ozs7QUM5Q0QsbUdBQWtFO0FBSWxFOzs7OztHQUtHO0FBQ0gsTUFBc0IsU0FBbUIsU0FBUSw2QkFBZ0I7SUFFaEUsWUFBb0IsSUFBYyxFQUFFLFVBQWE7UUFFaEQsS0FBSyxDQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBSUQsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF3QixFQUFFLEtBQTBCLEVBQUUsUUFBZ0I7UUFFckYsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUlELHdCQUF3QjtJQUN4QixJQUFXLFlBQVksS0FBc0IsT0FBTyxJQUFJLENBQUMsT0FBMEIsQ0FBQyxDQUFDLENBQUM7Q0FDdEY7QUF0QkQsOEJBc0JDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0QsdUZBQXNDO0FBS3RDOztHQUVHO0FBQ0gsTUFBYSxNQUFPLFNBQVEscUJBQVM7SUFFcEMsWUFBb0IsS0FBd0IsRUFBRSxZQUFrQztRQUUvRSxLQUFLLGFBQWUsS0FBSyxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUlELDRCQUE0QjtJQUNyQixPQUFPLENBQUUsU0FBd0IsRUFBRSxLQUEwQixFQUFFLFFBQWdCO1FBRXJGLEtBQUssQ0FBQyxPQUFPLENBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ25ELElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFFBQVE7WUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztZQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFJRDs7OztPQUlHO0lBQ0gsSUFBVyxJQUFJLEtBQWEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVqRDs7OztPQUlHO0lBQ0gsSUFBVyxPQUFPLEtBQWEsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFJMUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3pDLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCwrQ0FBK0M7SUFDckMsZ0JBQWdCO1FBRXpCLE9BQU8sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUlELDZCQUE2QjtJQUM3QixJQUFXLEVBQUUsS0FBYSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBUS9DO0FBdEVELHdCQXNFQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUVELHdFQUEyQjtBQUUzQixtR0FBMkQ7QUFDM0QsaUdBQThDO0FBSTlDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsV0FBSTtJQUVuQyxZQUFvQixHQUFZLEVBQUUsS0FBMkI7UUFFNUQsS0FBSyxpQkFBa0IsQ0FBQztRQUV4QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBSUQsOERBQThEO0lBQ3ZELE1BQU0sQ0FBRSxNQUF1QztRQUVyRCxJQUFJLEdBQUcsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztZQUNaLE9BQU87YUFDSCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUMzRixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7WUFFZixHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFMUIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGtDQUFxQixDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0SCxJQUFJLENBQUMsT0FBTyxHQUFHLHVCQUFVLENBQUMsYUFBYSxDQUFFLFdBQVcsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUlELHFCQUFxQjtJQUNyQixJQUFXLGFBQWEsS0FBb0IsT0FBTyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxDQUFDLENBQUM7Q0FPbkY7QUFoREQsZ0NBZ0RDOzs7Ozs7Ozs7Ozs7Ozs7QUMxREQsdUZBQXFDO0FBRXJDLG1HQUEyRDtBQUkzRDs7R0FFRztBQUNILE1BQWEsU0FBbUIsU0FBUSxxQkFBWTtJQUVuRCxZQUFvQixLQUEyQixFQUFFLFVBQWM7UUFFOUQsS0FBSyxnQkFBa0IsVUFBVSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxTQUFTLEVBQUssQ0FBQztRQUNqQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxXQUFXLEdBQUcsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0NBQXFCLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5HLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUUsVUFBVSxXQUFXLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUlELHFCQUFxQjtJQUNyQixJQUFXLFlBQVksS0FBbUIsT0FBTyxJQUFJLENBQUMsT0FBdUIsQ0FBQyxDQUFDLENBQUM7Q0FJaEY7QUF4Q0QsOEJBd0NDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7Ozs7R0FJRztBQUNILE1BQXNCLElBQUk7SUFFekIsWUFBYSxJQUFjO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFJRCxzQkFBc0I7SUFDZixPQUFPLENBQUUsU0FBd0IsRUFBRSxLQUEwQixFQUFFLFFBQWdCO1FBRXJGLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0RkFBNEY7SUFDNUYsNkZBQTZGO0lBQzdGLGdEQUFnRDtJQUNoRCxJQUFXLGFBQWEsS0FBYyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7Q0EwQnBEO0FBOUNELG9CQThDQzs7Ozs7Ozs7Ozs7Ozs7O0FDcERELHdFQUEyQjtBQUMzQix1RkFBcUM7QUFDckMsOEVBQStCO0FBQy9CLG1HQUE2QztBQUM3Qyx1RkFBcUM7QUFtQnJDOztHQUVHO0FBQ0gsTUFBc0IsYUFBbUMsU0FBUSxXQUFJO0lBRXBFLFlBQW9CLElBQVksRUFBRSxVQUF1QztRQUV4RSxLQUFLLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUNuQyxDQUFDO0lBSUQsa0RBQWtEO0lBQ2xELElBQVcsT0FBTyxLQUF1QyxPQUFPLElBQUksQ0FBQyxRQUE0QyxFQUFDLENBQUM7SUFFbkgsa0RBQWtEO0lBQ2xELElBQVcsR0FBRyxLQUFvQyxPQUFPLElBQUksQ0FBQyxJQUFxQyxDQUFDLENBQUMsQ0FBQztJQUV0RyxvREFBb0Q7SUFDcEQsSUFBVyxVQUFVLEtBQTJDLE9BQU8sSUFBSSxDQUFDLFdBQW1ELENBQUMsQ0FBQyxDQUFDO0lBRWxJLGdFQUFnRTtJQUNoRSxJQUFXLElBQUksS0FBdUMsT0FBTyxJQUFJLENBQUMsS0FBeUMsQ0FBQyxDQUFDLENBQUM7SUFFOUcsNEJBQTRCO0lBQzVCLElBQVcsS0FBSyxLQUEyQixPQUFPLElBQUksQ0FBQyxNQUE4QixDQUFDLENBQUMsQ0FBQztJQUV2Riw4REFBOEQ7SUFDL0QsSUFBVyxPQUFPLEtBQXFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFJOUQsMkZBQTJGO0lBQzNGLDRCQUE0QjtJQUNsQixZQUFZO1FBRXJCLHFEQUFxRDtRQUNyRCxJQUFJLElBQUksQ0FBQyxXQUFXO1lBQ25CLE9BQU87UUFFUixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBRWhCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRXBCLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxFQUFLLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwQyxpRkFBaUY7UUFDakYsMEJBQTBCO1FBQzFCLElBQUksUUFBeUIsQ0FBQztRQUM5QixJQUFJLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxVQUFVLEVBQzlDO1lBQ0MsSUFDQTtnQkFDQyxnREFBZ0Q7Z0JBQ2hELFFBQVEsR0FBRyxJQUFLLElBQUksQ0FBQyxlQUF5RCxFQUFFLENBQUM7YUFDakY7WUFDRCxPQUFPLEdBQUcsRUFDVjtnQkFDQyxPQUFPLENBQUMsS0FBSyxDQUFFLGdEQUFnRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdGLE9BQU87YUFDUDtTQUNEOztZQUVBLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRWpDLDRFQUE0RTtRQUM1RSxJQUFJLENBQUMsaUJBQWlCLENBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUlELDJGQUEyRjtJQUMzRiw0QkFBNEI7SUFDcEIsaUJBQWlCLENBQUUsUUFBeUI7UUFFbkQsc0ZBQXNGO1FBQ3RGLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxFQUM3QjtZQUNDLElBQUksUUFBUSxLQUFLLFVBQVUsRUFDM0I7Z0JBQ0MsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFFLE9BQWlCLENBQUM7Z0JBQzVDLFNBQVM7YUFDVDtZQUVELElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsQ0FBQyxPQUFPLFlBQVksV0FBSSxDQUFDO2dCQUM3QixTQUFTO1lBRVYsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLElBQUksSUFBSSxHQUFHLE9BQWUsQ0FBQztZQUUzQixvRkFBb0Y7WUFDcEYsb0ZBQW9GO1lBQ3BGLHlEQUF5RDtZQUN6RCxJQUFJLElBQUksQ0FBQyxJQUFJLG1CQUFtQixFQUNoQztnQkFDQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLElBQTBCLENBQUMsQ0FBQztnQkFDekQsU0FBUzthQUNUO1lBRUQsb0ZBQW9GO1lBQ3BGLG1DQUFtQztZQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLO2dCQUNiLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUUxQyxzQkFBc0I7WUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUN0QjtnQkFDQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7YUFDM0I7WUFFRCx5Q0FBeUM7WUFDekMsSUFBSSxJQUFJLFlBQVkscUJBQVMsRUFDN0I7Z0JBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDekM7aUJBQ0ksSUFBSSxJQUFJLFlBQVksZUFBTSxFQUMvQjtnQkFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNsQztpQkFDSSxJQUFJLElBQUksWUFBWSw2QkFBYSxFQUN0QztnQkFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNoRDtpQkFDSSxJQUFJLElBQUksWUFBWSxxQkFBUyxFQUNsQztnQkFDQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3JDO1NBQ0Q7SUFDRixDQUFDO0lBSUQsMkZBQTJGO0lBQzNGLDRCQUE0QjtJQUNwQixtQkFBbUIsQ0FBRSxLQUFhO1FBRXpDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQy9CLE9BQU87UUFFUixzRkFBc0Y7UUFDdEYsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQ3RCO1lBQ0Msb0ZBQW9GO1lBQ3BGLG9GQUFvRjtZQUNwRix5REFBeUQ7WUFDekQsSUFBSSxJQUFJLENBQUMsSUFBSSxtQkFBbUIsRUFDaEM7Z0JBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBRSxJQUEwQixDQUFDLENBQUM7Z0JBQ3pELFNBQVM7YUFDVDtZQUVELG9GQUFvRjtZQUNwRixtQ0FBbUM7WUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSztnQkFDYixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXJCLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUM7U0FDM0I7SUFDRixDQUFDO0lBSUQsaURBQWlEO0lBQ3ZDLFFBQVEsQ0FBRSxHQUFrQjtJQUV0QyxDQUFDO0lBSUQsMEZBQTBGO0lBQ2hGLFdBQVcsQ0FBRSxNQUF1QztRQUU3RCxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUlELG9CQUFvQjtJQUNwQixJQUFXLFdBQVcsS0FBYyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztDQTBCM0Q7QUEvTkQsc0NBK05DO0FBSUQ7O0dBRUc7QUFDSCxNQUFNLGFBQXVCLFNBQVEsV0FBSTtJQUV4QztRQUVDLEtBQUssQ0FBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUlBLDhEQUE4RDtJQUMvRCxJQUFXLElBQUksS0FBZ0MsT0FBTyxJQUFJLENBQUMsS0FBa0MsQ0FBQyxDQUFDLENBQUM7SUFFaEcsNEJBQTRCO0lBQ3JCLE9BQU8sQ0FBRSxTQUF3QixFQUFFLEtBQTBCLEVBQUUsUUFBZ0I7UUFFckYsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUlELDhEQUE4RDtJQUN2RCxNQUFNLENBQUUsTUFBdUM7UUFFckQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDeEIsT0FBTztRQUVSLElBQUksQ0FBQyxHQUFHLFVBQVUsUUFBUSxDQUFDLEdBQUcsQ0FBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzdGLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FLRDs7Ozs7Ozs7Ozs7Ozs7QUNoVEQ7O0dBRUc7O0FBd1dILGlGQUFpQztBQUNqQyx1RkFBcUM7QUFDckMsOEVBQStCO0FBRS9CLGdHQUEyQztBQUMzQyxtR0FBNkM7QUFDN0MsdUZBQXFDO0FBQ3JDLGdHQUEyQztBQUUzQyx1RkFBcUM7QUFDckMsMEZBQXVDO0FBRXZDLGdHQUEyQztBQUkzQyxrQ0FBa0M7QUFDbEMsU0FBZ0IsSUFBSSxDQUFFLE9BQWUsRUFBRSxLQUF1QixJQUMzRCxPQUFPLElBQUksaUJBQU8sQ0FBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRHpDLG9CQUN5QztBQUV6QyxvQ0FBb0M7QUFDcEMsU0FBZ0IsTUFBTSxDQUFFLEtBQXVCLEVBQUUsWUFBa0MsSUFDaEYsT0FBTyxJQUFJLHFCQUFTLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQURoRCx3QkFDZ0Q7QUFFaEQsaUNBQWlDO0FBQ2pDLFNBQWdCLEdBQUcsQ0FBRSxLQUF1QixFQUFFLFlBQWtDLElBQzdFLE9BQU8sSUFBSSxlQUFNLENBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUQ3QyxrQkFDNkM7QUFFN0MsdUNBQXVDO0FBQ3ZDLFNBQWdCLEtBQUssQ0FBRSxRQUFzQixFQUFFLEtBQXVCLElBQ25FLE9BQU8sSUFBSSwyQkFBWSxDQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEL0Msc0JBQytDO0FBRS9DLHdDQUF3QztBQUN4QyxTQUFnQixVQUFVLENBQUUsU0FBcUIsRUFBRSxZQUFrQyxJQUNsRixPQUFPLElBQUksNkJBQWEsQ0FBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRHhELGdDQUN3RDtBQUV4RCxzRUFBc0U7QUFDdEUsU0FBZ0IsT0FBTyxDQUFnQyxnQkFBbUIsRUFBRSxPQUF3QixFQUNoRyxZQUFrQyxJQUNuQyxPQUFPLElBQUkscUJBQVMsQ0FBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRnBFLDBCQUVvRTtBQUVwRSx1Q0FBdUM7QUFDdkMsU0FBZ0IsU0FBUyxDQUFLLEtBQWEsRUFBRSxVQUFhLElBQ3ZELE9BQU8sSUFBSSwyQkFBWSxDQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEakQsOEJBQ2lEO0FBRWpELG9DQUFvQztBQUNwQyxTQUFnQixNQUFNLENBQUssS0FBMEIsRUFBRSxVQUFhLElBQ2pFLE9BQU8sSUFBSSxxQkFBUyxDQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEOUMsd0JBQzhDO0FBRTlDLHFDQUFxQztBQUNyQyxTQUFnQixPQUFPLENBQUUsR0FBVyxFQUFFLEtBQTJCLElBQzlELE9BQU8sSUFBSSx1QkFBVSxDQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFEeEMsMEJBQ3dDO0FBRXhDLHNDQUFzQztBQUN0QyxTQUFnQixTQUFTLENBQUUsUUFBa0IsSUFDMUMsT0FBTyxJQUFJLDJCQUFZLENBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRHhDLDhCQUN3Qzs7Ozs7Ozs7Ozs7Ozs7O0FDaGF4Qyx1RkFBcUM7QUFFckMsOEdBQWtEO0FBS2xEOztHQUVHO0FBQ0gsTUFBYSxZQUFhLFNBQVEscUJBQVM7SUFFMUMsWUFBb0IsUUFBdUIsRUFBRSxLQUF3QjtRQUVwRSxLQUFLLG1CQUFxQixLQUFLLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksd0JBQVEsQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSUQsOEJBQThCO0lBQ3ZCLEtBQUs7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxRQUFRLENBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2pDLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCwrQ0FBK0M7SUFDckMsZ0JBQWdCO1FBRXpCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBSUQsK0JBQStCO0lBQy9CLElBQVcsWUFBWSxLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FJekU7QUFuQ0Qsb0NBbUNDOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q0QsbUdBQXdEO0FBQ3hELHdFQUE0QjtBQUs1Qjs7R0FFRztBQUNILE1BQXNCLFNBQVUsU0FBUSxXQUFJO0lBRTNDLFlBQW9CLElBQWMsRUFBRSxLQUF3QjtRQUUzRCxLQUFLLENBQUUsSUFBSSxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFFbkMsSUFBSSxLQUFLO1lBQ1IsSUFBSSxDQUFDLHFCQUFxQixDQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxxQkFBcUIsQ0FBRSxLQUF1QjtRQUVyRCxJQUFJLEtBQUssWUFBWSxTQUFTLEVBQzlCO1lBQ0MscUVBQXFFO1lBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzFCO2FBQ0ksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUM3QjtZQUNDLDBFQUEwRTtZQUMxRSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUs7Z0JBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFFLElBQWlCLENBQUMsQ0FBQztTQUN2QzthQUVEO1lBQ0Msc0ZBQXNGO1lBQ3RGLG1GQUFtRjtZQUNuRixvREFBb0Q7WUFDcEQsS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQzFCO2dCQUNDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUMzQjtvQkFDQyxJQUFJLGVBQWUsR0FBRyxPQUFzQyxDQUFDO29CQUM3RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQ2xDO3dCQUNDLHlFQUF5RTt3QkFDekUsS0FBSyxJQUFJLElBQUksSUFBSSxlQUFlOzRCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFpQixDQUFDLENBQUM7cUJBQ3ZDO3lCQUVEO3dCQUNDLGlFQUFpRTt3QkFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsZUFBNEIsQ0FBQyxDQUFDO3FCQUNqRDtpQkFDRDtxQkFDSSxJQUFJLFFBQVEsS0FBSyxZQUFZLEVBQ2xDO29CQUNDLElBQUksZ0JBQWdCLEdBQUcsT0FBOEIsQ0FBQztvQkFDdEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQ25DO3dCQUNDLGlDQUFpQzt3QkFDakMsS0FBSyxJQUFJLFNBQVMsSUFBSSxnQkFBZ0I7NEJBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLFNBQVMsQ0FBQyxDQUFDO3FCQUNoQzt5QkFFRDt3QkFDQywwQkFBMEI7d0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFFLGdCQUFnQixDQUFDLENBQUM7cUJBQ3RDO2lCQUNEO3FCQUVEO29CQUNDLG1EQUFtRDtvQkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQ2xDO2FBQ0Q7U0FDRDtJQUNGLENBQUM7SUFJRCw0QkFBNEI7SUFDckIsT0FBTyxDQUFFLFNBQXdCLEVBQUUsS0FBMEIsRUFBRSxRQUFnQjtRQUVyRixLQUFLLENBQUMsT0FBTyxDQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0Msc0ZBQXNGO1FBQ3RGLHlCQUF5QjtRQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDM0I7WUFDQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBRW5CLDhFQUE4RTtZQUM5RSxLQUFLLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPO2dCQUM5QixNQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWhELDRDQUE0QztZQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDNUM7SUFDRixDQUFDO0lBSUQsaURBQWlEO0lBQ3ZDLFFBQVEsQ0FBRSxHQUFjO1FBRWpDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQzVCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksZ0NBQW1CLENBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFDbkYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVNELHFCQUFxQjtJQUNyQixJQUFXLFlBQVksS0FBbUIsT0FBTyxJQUFJLENBQUMsT0FBdUIsQ0FBQyxDQUFDLENBQUM7Q0FVaEY7QUF6SUQsOEJBeUlDOzs7Ozs7Ozs7Ozs7Ozs7QUNuSkQsdUZBQXFDO0FBSXJDOztHQUVHO0FBQ0gsTUFBYSxZQUFzQixTQUFRLHFCQUFZO0lBRXRELFlBQW9CLEtBQWMsRUFBRSxVQUFjO1FBRWpELEtBQUssbUJBQXFCLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFJRCw4QkFBOEI7SUFDdkIsS0FBSztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksWUFBWSxFQUFLLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLE9BQU8sT0FBTyxDQUFDO0lBQ2hCLENBQUM7SUFJRCw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELG1GQUFtRjtRQUNuRixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzdCLE9BQU87UUFFUixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFFLGFBQWEsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBSUQsd0JBQXdCO0lBQ3hCLElBQVcsZUFBZSxLQUFzQixPQUFPLElBQUksQ0FBQyxPQUEwQixDQUFDLENBQUMsQ0FBQztDQUl6RjtBQTFDRCxvQ0EwQ0M7Ozs7Ozs7Ozs7Ozs7OztBQ2pERCx1RkFBc0M7QUFLdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxxQkFBUztJQUVyQyxZQUFvQixPQUFnQixFQUFFLEtBQXdCO1FBRTdELEtBQUssY0FBZ0IsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUlELDhCQUE4QjtJQUN2QixLQUFLO1FBRVgsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsUUFBUSxDQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMvQixPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBSUQsK0NBQStDO0lBQ3JDLGdCQUFnQjtRQUV6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUlELDJCQUEyQjtJQUMzQixJQUFXLEdBQUcsS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBSWpEO0FBbENELDBCQWtDQzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7O0dBRUc7O0FBMERILDBGQUF1QztBQUl2Qzs7Ozs7R0FLRztBQUNILFNBQWdCLElBQUksQ0FBdUIseUJBQXdEO0lBRWxHLHVGQUF1RjtJQUN2Riw4RkFBOEY7SUFDOUYsOEVBQThFO0lBQzlFLElBQUkseUJBQXlCLENBQUMsV0FBVztRQUN4QyxPQUFPLElBQUksdUJBQVUsQ0FBRSx5QkFBeUIsQ0FBQyxDQUFDO1NBRW5EO1FBQ0MsSUFBSSxVQUFVLEdBQUcseUJBQXlCLENBQUMsVUFBMkIsQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxFQUNmO1lBQ0MsVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBRSx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3hELHlCQUF5QixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDbEQ7UUFFRCxPQUFPLFVBQVUsQ0FBQztLQUNsQjtBQUNGLENBQUM7QUFsQkQsb0JBa0JDO0FBSUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixTQUFTLENBQXVCLHlCQUF3RDtJQUV2RyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUUseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakIsT0FBTyxLQUFLLENBQUM7QUFDZCxDQUFDO0FBTEQsOEJBS0M7QUFJRCxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLDRDQUE0QztBQUM1QyxFQUFFO0FBQ0YsbUdBQW1HO0FBQ25HLDBGQUF3QztBQUV4Qzs7Ozs7O0dBTUc7QUFDSCxTQUFnQixzQkFBc0IsQ0FBRSxRQUFpQixFQUFFLE1BQWUsSUFDdkUsdUJBQVUsQ0FBQyxzQkFBc0IsQ0FBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRDFELHdEQUMwRDs7Ozs7Ozs7Ozs7Ozs7O0FDdkgxRCwwRkFBdUM7QUFDdkMsMEdBQXlFO0FBSXpFOztHQUVHO0FBQ0gsTUFBYSxVQUFnQyxTQUFRLDZCQUFnQjtJQUVwRSxZQUFvQixlQUE4QztRQUVqRSxLQUFLLGlCQUFrQixlQUFlLENBQUM7UUFFdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFFdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUV6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUlELDRGQUE0RjtJQUM1Riw2RkFBNkY7SUFDN0YsZ0RBQWdEO0lBQ2hELElBQVcsYUFBYSxLQUFjLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUlyRCw4QkFBOEI7SUFDdkIsS0FBSyxLQUFXLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQztJQUlyQyw4REFBOEQ7SUFDdkQsTUFBTSxDQUFFLE1BQXVDO1FBRXJELEtBQUssQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFJRCwyRkFBMkY7SUFDM0YsNEJBQTRCO0lBQ3BCLFlBQVk7UUFFbkIsMkRBQTJEO1FBQzNELElBQUksSUFBSSxDQUFDLFdBQVc7WUFDbkIsT0FBTztRQUVSLHdGQUF3RjtRQUN4RixnQkFBZ0I7UUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1FBRXRELDJGQUEyRjtRQUMzRixzRkFBc0Y7UUFDdEYsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWpELDJCQUEyQjtRQUMzQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUlELDBDQUEwQztJQUNuQyxnQkFBZ0IsQ0FBRSxLQUFrQjtRQUUxQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBSUQsaUVBQWlFO0lBQzFELGtCQUFrQixDQUFFLFFBQWdCO1FBRTFDLG9GQUFvRjtRQUNwRixxQkFBcUI7UUFDckIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDN0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUVoQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBRSxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBSUQsNkRBQTZEO0lBQ3RELGtCQUFrQixDQUFFLFFBQWdCO1FBRTFDLElBQUksSUFBSSxDQUFDLFdBQVc7WUFDbkIsT0FBTyx1QkFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUM7O1lBRXZDLE9BQU8sdUJBQVUsQ0FBQyxZQUFZLENBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBSUQseUNBQXlDO0lBQ2xDLFFBQVE7UUFFZCwyQkFBMkI7UUFDM0IsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYztZQUNwQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFbEIsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztZQUN2RCx1QkFBVSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBSUQsaUZBQWlGO0lBQzFFLFVBQVU7UUFFaEIsb0NBQW9DO1FBQ3BDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLENBQUM7WUFDaEMsT0FBTztRQUVSLDZCQUE2QjtRQUM3QixLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQ3BDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVwQixJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVztZQUN0RCx1QkFBVSxDQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBSU0sVUFBVSxDQUFFLFVBQXlCO1FBRTNDLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFJTSxZQUFZO1FBRWxCLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFJRCxvQkFBb0I7SUFDcEIsSUFBWSxXQUFXLEtBQWMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Q0FzQm5FO0FBbEtELGdDQWtLQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEtEOztHQUVHO0FBQ0gsTUFBYSxVQUFVO0lBRXRCLHNDQUFzQztJQUN0QyxnQkFBdUIsQ0FBQztJQUl4Qjs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsc0JBQXNCLENBQUUsUUFBaUIsRUFBRSxNQUFlO1FBRXZFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBSUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUUsU0FBaUIsRUFBRSxRQUFnQjtRQUU5RCxPQUFPLElBQUksQ0FBQyxtQkFBbUI7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBRSxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDdkQsQ0FBQyxDQUFDLEdBQUcsU0FBUyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFJRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsa0JBQWtCLENBQUUsTUFBZTtRQUVoRCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBSUQsd0RBQXdEO0lBQ2pELE1BQU0sQ0FBQyxRQUFRLENBQUUsVUFBc0I7UUFFN0MsSUFBSSxDQUFDLFVBQVU7WUFDZCxPQUFPO1FBRVIsNEZBQTRGO1FBQzVGLDRCQUE0QjtRQUM1QixJQUFJLFVBQXlCLENBQUM7UUFDOUIsSUFBSSxVQUFVLENBQUMsV0FBVyxFQUMxQjtZQUNDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUUsT0FBTyxDQUFDLENBQUM7WUFDaEQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsUUFBUSxDQUFDLENBQUM7WUFDckMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFzQixDQUFDO1lBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNoRDthQUVEO1lBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzdCO1FBRUQsVUFBVSxDQUFDLFVBQVUsQ0FBRSxVQUFVLENBQUMsQ0FBQztRQUNuQyxVQUFVLENBQUMsTUFBTSxDQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFJRCw0RUFBNEU7SUFDckUsTUFBTSxDQUFDLFVBQVUsQ0FBRSxVQUFzQjtRQUUvQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVc7WUFDekMsT0FBTztRQUVSLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUUxQiwrQ0FBK0M7UUFDL0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUUsVUFBVSxDQUFDLENBQUM7UUFDckQsSUFBSSxRQUFRO1lBQ1gsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFJRCw0RUFBNEU7SUFDckUsTUFBTSxDQUFDLGFBQWEsQ0FBRSxVQUFrQjtRQUU5QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFrQixDQUFDO0lBQ25FLENBQUM7SUFJRCw0REFBNEQ7SUFDcEQsTUFBTSxDQUFDLFNBQVM7UUFFdkIsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUNsQixPQUFPO1FBRVIsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsZUFBZSxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBc0IsQ0FBQztRQUUzRSxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLGNBQWMsQ0FBQztRQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQXNCLENBQUM7SUFDeEQsQ0FBQzs7QUF4SEYsZ0NBcUpDO0FBekJBLDZGQUE2RjtBQUM3RixlQUFlO0FBQ0EsOEJBQW1CLEdBQVksS0FBSyxDQUFDO0FBRXBELDZGQUE2RjtBQUM3RixXQUFXO0FBQ0ksaUNBQXNCLEdBQVcsU0FBUyxDQUFDO0FBRTFELHlEQUF5RDtBQUMxQyx1QkFBWSxHQUFXLENBQUMsQ0FBQztBQWN4Qyw0RUFBNEU7QUFDN0QsMEJBQWUsR0FBRyxJQUFJLEdBQUcsRUFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDNUp6RSx5RkFBMEM7QUFJMUM7OztHQUdHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFFLEdBQVc7SUFFakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUpELDRCQUlDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQUUsR0FBVztJQUVuRCxpQkFBaUI7SUFDVCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQ1g7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFFLGtEQUFrRCxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sTUFBTSxDQUFDO0tBQ2pCO1NBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQy9CO1FBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBRSx3REFBd0QsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMvRSxPQUFPLE1BQU0sQ0FBQztLQUNqQjtJQUNULGNBQWM7SUFFVixJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQ25CO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUN6QixPQUFPLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN4RDtTQUVEO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQ3ZFO0FBQ0wsQ0FBQztBQTlCRCx3REE4QkM7QUFJRCxTQUFnQixRQUFRLENBQUUsQ0FBa0I7SUFFeEMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUcsQ0FBQztBQUhELDRCQUdDO0FBSUQsU0FBZ0IsR0FBRyxDQUFFLENBQWtCLEVBQUUsQ0FBa0IsRUFBRSxDQUFrQixFQUFFLENBQW1CO0lBRWhHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRW5FLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzNFLENBQUM7QUFSRCxrQkFRQztBQUlELFNBQWdCLEdBQUcsQ0FBRSxDQUFrQixFQUFFLENBQWtCLEVBQUUsQ0FBa0IsRUFBRSxDQUFtQjtJQUVoRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDN0UsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkUsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDM0UsQ0FBQztBQVJELGtCQVFDO0FBRUQsU0FBZ0IsS0FBSyxDQUFFLENBQTBDLEVBQUUsQ0FBa0I7SUFFakYsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsT0FBTyxHQUFHLENBQUUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNGLENBQUM7QUFKRCxzQkFJQztBQUlEOztHQUVHO0FBQ0gsU0FBZ0IsdUJBQXVCLENBQUUsR0FBNEI7SUFFakUsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDaEIsT0FBTyxnQkFBZ0IsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNyQixPQUFPLEtBQUssQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEMsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUM7UUFDckIsT0FBTyxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFFL0MsT0FBTyxHQUFHLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDL0QsQ0FBQztBQVZELDBEQVVDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsR0FBK0I7SUFFN0QsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1YsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQy9CLE9BQU8sc0JBQXNCLENBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBQztRQUMzQixPQUFPLHVCQUF1QixDQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUVsQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM5QixDQUFDO0FBVkQsNENBVUM7Ozs7Ozs7Ozs7Ozs7O0FDeEhEOztHQUVHOztBQU1IOzs7R0FHRztBQUNRLGNBQU0sR0FDakI7SUFDSSxLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsUUFBUTtJQUNoQixHQUFHLEVBQUUsUUFBUTtJQUNiLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLEtBQUssRUFBRSxRQUFRO0lBQ2YsSUFBSSxFQUFFLFFBQVE7SUFDZCxLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsTUFBTSxFQUFFLFFBQVE7SUFDaEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsS0FBSyxFQUFFLFFBQVE7SUFDZixLQUFLLEVBQUUsUUFBUTtJQUNmLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLEtBQUssRUFBRSxRQUFRO0lBQ2YsU0FBUyxFQUFFLFFBQVE7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsS0FBSyxFQUFFLFFBQVE7SUFDZixjQUFjLEVBQUUsUUFBUTtJQUN4QixRQUFRLEVBQUUsUUFBUTtJQUNsQixPQUFPLEVBQUUsUUFBUTtJQUNqQixJQUFJLEVBQUUsUUFBUTtJQUNkLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLGNBQWMsRUFBRSxRQUFRO0lBQ3hCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFlBQVksRUFBRSxRQUFRO0lBQ3RCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLElBQUksRUFBRSxRQUFRO0lBQ2QsU0FBUyxFQUFFLFFBQVE7SUFDbkIsV0FBVyxFQUFFLFFBQVE7SUFDckIsSUFBSSxFQUFFLFFBQVE7SUFDZCxRQUFRLEVBQUUsUUFBUTtJQUNsQixPQUFPLEVBQUUsUUFBUTtJQUNqQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsUUFBUTtJQUNmLEtBQUssRUFBRSxRQUFRO0lBQ2YsUUFBUSxFQUFFLFFBQVE7SUFDbEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsb0JBQW9CLEVBQUUsUUFBUTtJQUM5QixTQUFTLEVBQUUsUUFBUTtJQUNuQixVQUFVLEVBQUUsUUFBUTtJQUNwQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixXQUFXLEVBQUUsUUFBUTtJQUNyQixhQUFhLEVBQUUsUUFBUTtJQUN2QixZQUFZLEVBQUUsUUFBUTtJQUN0QixjQUFjLEVBQUUsUUFBUTtJQUN4QixjQUFjLEVBQUUsUUFBUTtJQUN4QixjQUFjLEVBQUUsUUFBUTtJQUN4QixXQUFXLEVBQUUsUUFBUTtJQUNyQixTQUFTLEVBQUUsUUFBUTtJQUNuQixLQUFLLEVBQUUsUUFBUTtJQUNmLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLGdCQUFnQixFQUFFLFFBQVE7SUFDMUIsVUFBVSxFQUFFLFFBQVE7SUFDcEIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsWUFBWSxFQUFFLFFBQVE7SUFDdEIsY0FBYyxFQUFFLFFBQVE7SUFDeEIsZUFBZSxFQUFFLFFBQVE7SUFDekIsaUJBQWlCLEVBQUUsUUFBUTtJQUMzQixlQUFlLEVBQUUsUUFBUTtJQUN6QixlQUFlLEVBQUUsUUFBUTtJQUN6QixZQUFZLEVBQUUsUUFBUTtJQUN0QixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixRQUFRLEVBQUUsUUFBUTtJQUNsQixXQUFXLEVBQUUsUUFBUTtJQUNyQixPQUFPLEVBQUUsUUFBUTtJQUNqQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixNQUFNLEVBQUUsUUFBUTtJQUNoQixhQUFhLEVBQUUsUUFBUTtJQUN2QixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsUUFBUTtJQUN2QixhQUFhLEVBQUUsUUFBUTtJQUN2QixVQUFVLEVBQUUsUUFBUTtJQUNwQixTQUFTLEVBQUUsUUFBUTtJQUNuQixJQUFJLEVBQUUsUUFBUTtJQUNkLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUUsUUFBUTtJQUNwQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixXQUFXLEVBQUUsUUFBUTtJQUNyQixNQUFNLEVBQUUsUUFBUTtJQUNoQixVQUFVLEVBQUUsUUFBUTtJQUNwQixRQUFRLEVBQUUsUUFBUTtJQUNsQixRQUFRLEVBQUUsUUFBUTtJQUNsQixNQUFNLEVBQUUsUUFBUTtJQUNoQixPQUFPLEVBQUUsUUFBUTtJQUNqQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixTQUFTLEVBQUUsUUFBUTtJQUNuQixJQUFJLEVBQUUsUUFBUTtJQUNkLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLEdBQUcsRUFBRSxRQUFRO0lBQ2IsT0FBTyxFQUFFLFFBQVE7SUFDakIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsS0FBSyxFQUFFLFFBQVE7SUFDZixVQUFVLEVBQUUsUUFBUTtJQUNwQixXQUFXLEVBQUUsUUFBUTtJQUNyQixhQUFhLEVBQUUsUUFBUTtDQUMxQjs7Ozs7Ozs7Ozs7Ozs7O0FDaktELHNGQUF3QztBQUl4Qzs7R0FFRztBQUNILFNBQWdCLG1CQUFtQixDQUFFLFFBQWdDO0lBRWpFLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVTtRQUNqQyxPQUFPLElBQUksQ0FBQztJQUVoQixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7SUFFWixLQUFLLElBQUksUUFBUSxJQUFJLFFBQVEsRUFDN0I7UUFDSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksUUFBUSxLQUFLLGFBQWE7WUFDMUIsQ0FBQyxJQUFJLHNCQUFzQixDQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3JDLElBQUksUUFBUSxLQUFLLFdBQVc7WUFDN0IsQ0FBQyxJQUFJLG9CQUFvQixDQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ25DLElBQUksUUFBUSxLQUFLLFlBQVk7WUFDOUIsQ0FBQyxJQUFJLHFCQUFxQixDQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDLElBQUksUUFBUSxLQUFLLEtBQUs7WUFDdkIsQ0FBQyxJQUFJLGtCQUFrQixDQUFFLE9BQU8sQ0FBQyxDQUFDOztZQUVsQyxDQUFDLElBQUksT0FBTyxDQUFDO1FBRWpCLENBQUMsSUFBSSxHQUFHO0tBQ1g7SUFFRCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDbkIsQ0FBQztBQTFCRCxrREEwQkM7QUFJRCxTQUFnQixzQkFBc0IsQ0FBRSxHQUFrQztJQUV0RSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDdkIsT0FBTyxHQUFHLENBQUM7U0FDVixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDNUIsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDOztRQUVqQixPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0FBQ3ZDLENBQUM7QUFSRCx3REFRQztBQUlELFNBQWdCLG9CQUFvQixDQUFFLEdBQWtDO0lBRXBFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUM1QixPQUFPLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FFL0I7UUFDSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDbkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO1lBQzFCLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRVosQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFeEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ1Y7WUFDSSxDQUFDLElBQUksR0FBRyxDQUFDO1lBQ1QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO2dCQUMxQixDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztnQkFFWixDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUVELE9BQU8sQ0FBQyxDQUFDO0tBQ1o7QUFDTCxDQUFDO0FBekJELG9EQXlCQztBQUlELFNBQWdCLHFCQUFxQixDQUFFLEdBQWlDO0lBRXBFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUM1QixPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFFdEIsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztBQUMzRCxDQUFDO0FBUkQsc0RBUUM7QUFJRCxTQUFnQixrQkFBa0IsQ0FBRSxHQUE4QjtJQUU5RCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzlDLE9BQU8sd0JBQXdCLENBQUUsR0FBc0MsQ0FBQyxDQUFDOztRQUV6RSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLHdCQUF3QixDQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZGLENBQUM7QUFORCxnREFNQztBQUlELFNBQWdCLHdCQUF3QixDQUFFLEdBQW9DO0lBRTFFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUMzQjtRQUNJLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNsRCxPQUFPLEdBQUcsQ0FBQzs7WUFFWCxPQUFPLE9BQU8sR0FBRyxHQUFHLENBQUM7S0FDNUI7U0FDSSxJQUFLLE9BQU8sSUFBSSxHQUFHO1FBQ3BCLE9BQU8sU0FBUyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7U0FFakM7UUFDSSxJQUFJLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMxQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQ2Q7WUFDSSxDQUFDLElBQUksVUFBVSxDQUFDO1lBQ2hCLElBQUksT0FBTyxHQUFHLENBQUMsTUFBTSxLQUFLLFFBQVE7Z0JBQzlCLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQzs7Z0JBRXpCLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBRSxHQUFHLENBQUMsQ0FBQztZQUV2RCxDQUFDLElBQUksR0FBRyxDQUFDO1NBQ1o7UUFFRCxPQUFPLENBQUMsQ0FBQztLQUNaO0FBQ0wsQ0FBQztBQTNCRCw0REEyQkM7Ozs7Ozs7Ozs7Ozs7OztBQ2hJRCxzRkFBd0M7QUFLeEMsU0FBUyxzQkFBc0IsQ0FBRSxHQUFzQztJQUVuRSxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBSUQsU0FBUyx3QkFBd0IsQ0FBRSxHQUFpQztJQUVoRSxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0FBQ3RELENBQUM7QUFJRCxTQUFTLDRCQUE0QixDQUFFLEdBQXFDO0lBRXhFLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDdkQsQ0FBQztBQThCRDs7R0FFRztBQUNILFNBQWdCLHFCQUFxQixDQUFFLEtBQTRCO0lBRS9ELElBQUksQ0FBQyxLQUFLO1FBQ04sT0FBTyxJQUFJLENBQUM7U0FDWCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsMkJBQTJCLENBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBRXpGLE9BQU8sMkJBQTJCLENBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQVJELHNEQVFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQiwyQkFBMkIsQ0FBRSxLQUFrQztJQUUzRSxJQUFJLENBQUMsS0FBSztRQUNOLE9BQU8sSUFBSSxDQUFDO0lBRWhCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7SUFDakMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN2QixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBRTNCLElBQUksS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUN6QixJQUFJLFNBQVM7UUFDVCxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBRW5ELEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxFQUMxQjtRQUNJLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDeEIsU0FBUztRQUViLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNmLEtBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSx1QkFBdUIsQ0FBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9FO0lBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0FBQzNELENBQUM7QUF2QkQsa0VBdUJDO0FBSUQ7O0dBRUc7QUFDSCxTQUFnQix1QkFBdUIsQ0FBRSxXQUFtQixFQUFFLE9BQVksRUFBRSxTQUFtQjtJQUUzRixJQUFJLENBQUMsV0FBVyxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBRWhCLDREQUE0RDtJQUM1RCxJQUFJLElBQUksR0FBcUIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELE9BQU8sSUFBSSxFQUNYO1FBQ0ksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1lBQ3hCLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRO1lBQzdCLElBQUksR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUVuQyxNQUFNO0tBQ2I7SUFFRCxJQUFJLGVBQWUsR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTFELGlHQUFpRztJQUNqRyxJQUFJLFlBQVksR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RSxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLFlBQVk7UUFDdEQsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0lBRTVDLElBQUksQ0FBUyxDQUFDO0lBQ2QsSUFBSSxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3RHLElBQUksT0FBTztRQUNQLENBQUMsR0FBRyxPQUFPLENBQUUsT0FBTyxDQUFDLENBQUM7U0FDckIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO1FBQ2hDLENBQUMsR0FBRyxPQUFPLENBQUM7U0FDWCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUUsT0FBTyxDQUFDO1FBQzVCLENBQUMsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs7UUFFdEYsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUzQixPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBcENELDBEQW9DQztBQUlELElBQUksYUFBYSxHQUNqQjtJQUNJLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkMsY0FBYyxFQUFFLGFBQWE7SUFDN0IsY0FBYyxFQUFFLGFBQWE7SUFDN0IsS0FBSyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtJQUMxQixRQUFRLEVBQUUsT0FBTztJQUNqQixRQUFRLEVBQUUsT0FBTztJQUNqQixVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFO0lBQy9CLGFBQWEsRUFBRSxPQUFPO0lBQ3RCLGFBQWEsRUFBRSxPQUFPO0lBQ3RCLE1BQU0sRUFBRSx3QkFBd0I7SUFDaEMsU0FBUyxFQUFFLFFBQVE7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsVUFBVSxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRTtJQUMvQixhQUFhLEVBQUUsWUFBWTtJQUMzQixhQUFhLEVBQUMsWUFBWTtJQUMxQixVQUFVLEVBQUUsNEJBQTRCO0lBQ3hDLGFBQWEsRUFBRSxZQUFZO0lBQzNCLGFBQWEsRUFBRSxZQUFZO0lBQzNCLEtBQUssRUFBRSx3QkFBd0I7SUFDL0IsUUFBUSxFQUFFLE9BQU87SUFDakIsUUFBUSxFQUFDLE9BQU87Q0FDbkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbktGLHNGQUF3QztBQUN4QyxzRkFBd0M7QUFFeEMseUZBQTJDO0FBTTNDOzs7R0FHRztBQUNILFNBQVMsMEJBQTBCLENBQUUsR0FBK0I7SUFFaEUsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBRWY7UUFDSSxPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUMxQyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQ3BDLENBQUMsVUFBVSxFQUFFLHdDQUF3QyxDQUFDLEVBQ3RELENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxlQUFlLENBQUMsRUFDdkMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQ3RDLFdBQVcsRUFDWCxPQUFPLEVBQ1AsTUFBTSxFQUNOLE1BQU0sQ0FDVCxDQUFDO0tBQ0w7QUFDTCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLG9CQUFvQixDQUFFLEdBQWtDO0lBRTdELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUM7UUFDeEIsT0FBTyxTQUFTLENBQUMsZ0JBQWdCLENBQUUsR0FBRyxFQUFFLDBCQUEwQixFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUV6RSxPQUFPLDBCQUEwQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsd0NBQXdDLENBQUUsR0FBNkM7SUFFNUYsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1YsSUFBSSxHQUFHLFlBQVksU0FBUyxDQUFDLFdBQVc7UUFDekMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDckIsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDMUI7UUFDQyxzREFBc0Q7UUFFeEQsZUFBZTtRQUNaLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFFLGlFQUFpRSxDQUFDLENBQUM7YUFDaEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUUsMERBQTBELENBQUMsQ0FBQztRQUNqRixZQUFZO1FBRVYsT0FBTyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7S0FDaEU7U0FFRDtRQUNDLDBCQUEwQjtRQUU1QixlQUFlO1FBQ1osSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUN2RCxNQUFNLElBQUksS0FBSyxDQUFFLHVGQUF1RixDQUFDLENBQUM7UUFDOUcsWUFBWTtRQUVWLE9BQU8sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0tBQy9EO0FBQ0YsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FBRSxHQUFnRDtJQUV6RixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDdkIsT0FBTyxHQUFHLENBQUM7U0FDVixJQUFJLEdBQUcsWUFBWSxTQUFTLENBQUMsV0FBVztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQixJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUNyQixPQUFPLEVBQUUsQ0FBQztTQUNULElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUTtRQUMvQixPQUFPLHdDQUF3QyxDQUFFLEdBQStDLENBQUMsQ0FBQzs7UUFFbEcsT0FBTyxTQUFTLENBQUMsZ0JBQWdCLENBQUUsR0FBaUQsRUFDcEYsd0NBQXdDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyw2QkFBNkIsQ0FBRSxHQUE0QztJQUVoRixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDdkIsT0FBTyxHQUFHLENBQUM7U0FDVixJQUFJLEdBQUcsWUFBWSxTQUFTLENBQUMsV0FBVztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLE9BQU8sU0FBUyxDQUFDLGdCQUFnQixDQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7O1FBRTFFLE9BQU8sU0FBUyxDQUFDLGlCQUFpQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsdUJBQXVCLENBQUUsR0FBcUM7SUFFbkUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUN0QjtRQUNJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDMUI7WUFDSSwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUUsQ0FBQyxJQUFJLEtBQUssQ0FBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUEyQyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM5SDthQUVEO1lBQ0ksaUNBQWlDO1lBQ2pDLE9BQU8sU0FBUyxDQUFDLGdCQUFnQixDQUFFLEdBQTZDLEVBQUUsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZIO0tBQ0o7O1FBRUcsT0FBTyxTQUFTLENBQUMsaUJBQWlCLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBRSxHQUFvQztJQUVqRSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDdkIsT0FBTyxHQUFHLENBQUM7U0FDVixJQUFJLEdBQUcsWUFBWSxTQUFTLENBQUMsV0FBVztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLE9BQU8sU0FBUyxDQUFDLHNCQUFzQixDQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7UUFFbkQsT0FBTyxHQUFHLENBQUM7QUFDbkIsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBRSxHQUFvQztJQUVqRSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDdkIsT0FBTyxHQUFHLENBQUM7U0FDVixJQUFJLEdBQUcsWUFBWSxTQUFTLENBQUMsV0FBVztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLE9BQU8sU0FBUyxDQUFDLGdCQUFnQixDQUFFLEdBQUcsRUFBRSxTQUFTLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7O1FBRTFFLE9BQU8sU0FBUyxDQUFDLGlCQUFpQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsd0JBQXdCLENBQUUsR0FBc0M7SUFFckUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNsQixPQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUUxRSxPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBRSxHQUFHLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBUyxzQkFBc0IsQ0FBRSxHQUFvQztJQUVqRSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDdkIsT0FBTyxHQUFHLENBQUM7U0FDVixJQUFJLEdBQUcsWUFBWSxTQUFTLENBQUMsV0FBVztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ3ZCLE9BQU8sU0FBUyxDQUFDLGdCQUFnQixDQUFFLEdBQW1DLEVBQUUsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUUxRyxPQUFPLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBRSxHQUFHLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLHFCQUFxQixDQUFFLEdBQW9DO0lBRWhFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUM1QixPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBRSxHQUFHLENBQUMsQ0FBQztTQUN4QyxJQUFJLEdBQUcsWUFBWSxTQUFTLENBQUMsV0FBVztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQzNCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO1lBQzFCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksU0FBUyxDQUFDLFdBQVc7WUFDNUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDeEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSTtZQUNuQixDQUFDLElBQUksU0FBUyxDQUFDLGlCQUFpQixDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVwRCxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUV0QixJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLElBQUksVUFBVSxDQUFDLGdCQUFnQixDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVwRCxPQUFPLENBQUMsQ0FBQztLQUNaOztRQUVHLE9BQU8sVUFBVSxDQUFDLGdCQUFnQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMsNEJBQTRCLENBQUUsR0FBMEM7SUFFN0UsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1YsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQzVCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCLElBQUksR0FBRyxZQUFZLFNBQVMsQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUV0QixPQUFPLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBRSxHQUFHLEVBQUUsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkYsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBRSxHQUFrQztJQUU1RCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDeEIsT0FBTyxHQUFHLENBQUM7U0FDVixJQUFJLEdBQUcsWUFBWSxTQUFTLENBQUMsV0FBVztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFFdEIsT0FBTyxTQUFTLENBQUMsc0JBQXNCLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxlQUFlLENBQUUsR0FBNkI7SUFFbkQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1YsSUFBSSxHQUFHLFlBQVksU0FBUyxDQUFDLFdBQVc7UUFDekMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBRXRCLE9BQU8sUUFBUSxTQUFTLENBQUMsZ0JBQWdCLENBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzVGLENBQUM7QUFJRDs7O0dBR0c7QUFDSCxTQUFTLHFCQUFxQixDQUFFLEdBQW1DO0lBRS9ELElBQUksQ0FBQyxHQUFHO1FBQ0osT0FBTyxJQUFJLENBQUM7U0FDWCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDNUIsT0FBTyxHQUFHLENBQUM7U0FFZjtRQUNJLE9BQU8sU0FBUyxDQUFDLGlCQUFpQixDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQzFDLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLEVBQ2pDLENBQUMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLEVBQ2pDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN6QyxDQUFDO0tBQ0w7QUFDTCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLGtCQUFrQixDQUFFLEdBQWdDO0lBRXpELElBQUksQ0FBQyxHQUFHO1FBQ0osT0FBTyxJQUFJLENBQUM7U0FDWCxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDNUIsT0FBTyxHQUFHLENBQUM7U0FDVixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDNUIsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDckIsSUFBSSxHQUFHLFlBQVksU0FBUyxDQUFDLFdBQVc7UUFDekMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBRXRCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxlQUFlLENBQUUsR0FBNkI7SUFFbkQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1YsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQzVCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCLElBQUksR0FBRyxZQUFZLFNBQVMsQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDM0I7UUFDSSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUNoQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUUsR0FBRyxDQUFDLENBQUM7YUFFMUI7WUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRO2dCQUNyQixDQUFDLElBQUksQ0FBQyxDQUFDOztnQkFFVCxDQUFDLElBQUksU0FBUyxDQUFDLGlCQUFpQixDQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZDLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7S0FDSjs7UUFFRyxPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBRSxHQUFHLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBSUQ7O0dBRUc7QUFDSCxTQUFTLCtCQUErQixDQUFFLEdBQTZDO0lBRW5GLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUM7UUFDbkIsT0FBTyxTQUFTLENBQUMsc0JBQXNCLENBQUUsR0FBRyxDQUFDLENBQUM7O1FBRTlDLE9BQU8sU0FBUyxDQUFDLGlCQUFpQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFJRDs7R0FFRztBQUNILFNBQVMscUJBQXFCLENBQUUsR0FBbUM7SUFFL0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUN0QjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzVELElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNOLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sQ0FBQyxDQUFDO0tBQ1o7O1FBRUcsT0FBTyxTQUFTLENBQUMsaUJBQWlCLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUlEOztHQUVHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FBRSxHQUFrQztJQUU3RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2xCLE9BQU8sU0FBUyxDQUFDLHNCQUFzQixDQUFFLEdBQUcsQ0FBQyxDQUFDOztRQUU5QyxPQUFPLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBRSxHQUFHLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBbUJELCtEQUErRDtBQUMvRCxTQUFnQixtQkFBbUIsQ0FBRSxRQUE2QixFQUFFLFNBQXVCO0lBRXZGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNkLEtBQUssSUFBSSxRQUFRLElBQUksUUFBUSxFQUM3QjtRQUNPLElBQUksUUFBUSxLQUFLLFNBQVMsRUFDMUI7WUFDSSw2Q0FBNkM7WUFDN0MsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBaUIsQ0FBQztZQUNqRCxLQUFLLElBQUksU0FBUyxJQUFJLE9BQU8sRUFDN0I7Z0JBQ0ksSUFBSSxjQUFzQixDQUFDO2dCQUMzQixJQUFJLGdCQUF3QixDQUFDO2dCQUM3QixJQUFJLE9BQU8sU0FBUyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQ3hDO29CQUNJLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO29CQUNsQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7aUJBQ2pEO3FCQUVEO29CQUNJLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDdkMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDeEQ7Z0JBRUQsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLGdCQUFnQjtvQkFDcEMsU0FBUztnQkFFYixDQUFDLElBQUksS0FBSyxjQUFjLElBQUksb0JBQW9CLENBQUUsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNoRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2RTtTQUNKO2FBRUQ7WUFDSSxnREFBZ0Q7WUFDaEQsQ0FBQyxJQUFJLG9CQUFvQixDQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN6RCxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2RTtLQUNQO0lBRUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3BCLENBQUM7QUF4Q0Qsa0RBd0NDO0FBSUQ7OztHQUdHO0FBQ0gsU0FBZ0Isb0JBQW9CLENBQUUsUUFBZ0IsRUFBRSxPQUFZLEVBQUUsU0FBbUI7SUFFckYsSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLElBQUksSUFBSTtRQUM1QixPQUFPLEVBQUUsQ0FBQztJQUVkLDJDQUEyQztJQUMzQyxJQUFJLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFDNUI7UUFDSSw0RkFBNEY7UUFDNUYsNEZBQTRGO1FBQzVGLE9BQU8sT0FBTyxJQUFJLEtBQUssUUFBUSxFQUMvQjtZQUNJLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0o7SUFFRCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBRSxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7SUFFaEUsSUFBSSxPQUFPLElBQUksS0FBSyxVQUFVO1FBQzFCLENBQUMsSUFBSSxJQUFJLENBQUUsT0FBTyxDQUFDLENBQUM7U0FDbkIsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO1FBQ2hDLENBQUMsSUFBSSxPQUFPLENBQUM7U0FDWixJQUFJLE9BQU8sWUFBWSxTQUFTLENBQUMsV0FBVztRQUM3QyxDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3ZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBRSxPQUFPLENBQUM7UUFDNUIsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOztRQUV2RixDQUFDLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRTVCLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQWhDRCxvREFnQ0M7QUFJRDs7O0dBR0c7QUFDSCxNQUFNLGtCQUFrQixHQUN4QjtJQUNJLFNBQVMsRUFBRSxvQkFBb0I7SUFDL0IsY0FBYyxFQUFFLFNBQVMsQ0FBQyxvQkFBb0I7SUFDOUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLG9CQUFvQjtJQUNqRCx1QkFBdUIsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ3BELHVCQUF1QixFQUFFLGtDQUFrQztJQUUzRCxlQUFlLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtJQUM1QywwQkFBMEI7SUFDMUIsa0JBQWtCLEVBQUUsU0FBUyxDQUFDLHdCQUF3QjtJQUN0RCxjQUFjLEVBQUUsU0FBUyxDQUFDLG9CQUFvQjtJQUM5QyxhQUFhLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtJQUUxQyxNQUFNLEVBQUUscUJBQXFCO0lBQzdCLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtJQUM5QyxzQkFBc0IsRUFBRSw2QkFBNkI7SUFDckQsdUJBQXVCLEVBQUUsNkJBQTZCO0lBQ3RELGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDOUMsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQyxpQkFBaUIsRUFBRSw0QkFBNEI7SUFDL0MsZ0JBQWdCLEVBQUUsc0JBQXNCO0lBQ3hDLFVBQVUsRUFBRSxxQkFBcUI7SUFDakMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxnQkFBZ0I7SUFDNUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDNUMsWUFBWSxFQUFFLHVCQUF1QjtJQUNyQyxXQUFXLEVBQUUscUJBQXFCO0lBQ2xDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxnQkFBZ0I7SUFDN0MsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtJQUM3QyxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLGFBQWEsRUFBRSx3QkFBd0I7SUFDdkMsU0FBUyxFQUFFLHFCQUFxQjtJQUNoQyxjQUFjLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtJQUMzQyxtQkFBbUIsRUFBRSw2QkFBNkI7SUFDbEQsb0JBQW9CLEVBQUUsNkJBQTZCO0lBQ25ELGNBQWMsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQzNDLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDbkMsU0FBUyxFQUFFLG9CQUFvQjtJQUUvQixVQUFVLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtJQUN2QyxJQUFJLEVBQUUsZUFBZTtJQUNyQixLQUFLLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtJQUNsQyxTQUFTLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtJQUN0QyxVQUFVLEVBQUUscUJBQXFCO0lBQ2pDLGVBQWUsRUFBRSxVQUFVLENBQUMsZ0JBQWdCO0lBQzVDLGVBQWUsRUFBRSxzQkFBc0I7SUFDdkMsZUFBZSxFQUFFLHNCQUFzQjtJQUN2QyxPQUFPLEVBQUUsa0JBQWtCO0lBRTNCLElBQUksRUFBRSxlQUFlO0lBQ3JCLFVBQVUsRUFBRSxVQUFVLENBQUMsZ0JBQWdCO0lBQ3ZDLFNBQVMsRUFBRSxTQUFTLENBQUMsZ0JBQWdCO0lBRXJDLEdBQUcsRUFBRSxTQUFTLENBQUMsc0JBQXNCO0lBQ3JDLGFBQWEsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQzFDLFVBQVUsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBRXZDLE1BQU0sRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBRW5DLElBQUksRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ2pDLGFBQWEsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQzFDLGFBQWEsRUFBRSxVQUFVLENBQUMsZ0JBQWdCO0lBRTFDLE1BQU0sRUFBRSxTQUFTLENBQUMsc0JBQXNCO0lBQ3hDLFlBQVksRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ3pDLFVBQVUsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ3ZDLFdBQVcsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ3hDLFNBQVMsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ3RDLFNBQVMsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ3RDLFFBQVEsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ3JDLFNBQVMsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQ3pDLFFBQVEsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBRWxDLGNBQWMsRUFBRSxTQUFTLENBQUMsbUJBQW1CO0lBQzdDLFlBQVksRUFBRSxVQUFVLENBQUMsZ0JBQWdCO0lBQ3pDLGFBQWEsRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBQzFDLFlBQVksRUFBRSxzQkFBc0I7SUFFcEMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxzQkFBc0I7SUFDekMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDMUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDeEMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDekMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDdkMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDeEMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLG1CQUFtQjtJQUVoRCxLQUFLLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtJQUNsQyxNQUFNLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtJQUVuQyxTQUFTLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtJQUV0QyxPQUFPLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtJQUNwQyxtQkFBbUIsRUFBRSxVQUFVLENBQUMsZ0JBQWdCO0lBQ2hELHVCQUF1QixFQUFFLFNBQVMsQ0FBQyxpQkFBaUI7SUFDcEQsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLGdCQUFnQjtJQUM5QyxvQkFBb0IsRUFBRSwrQkFBK0I7SUFDckQsVUFBVSxFQUFFLHFCQUFxQjtJQUNqQyxHQUFHLEVBQUUsU0FBUyxDQUFDLGlCQUFpQjtJQUNoQyxTQUFTLEVBQUUsb0JBQW9CO0lBRS9CLEtBQUssRUFBRSxTQUFTLENBQUMsaUJBQWlCO0lBRWxDLElBQUksRUFBRSxTQUFTLENBQUMsaUJBQWlCO0NBQ3BDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVtQkYsc0ZBQXdDO0FBSXhDOzs7O0dBSUc7QUFDSCxTQUFnQixXQUFXLENBQUUsSUFBWTtJQUV4QyxJQUFJLENBQUMsSUFBSTtRQUNSLE9BQU8sSUFBSSxDQUFDO0lBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFFLGNBQWMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ25FLENBQUM7QUFORCxrQ0FNQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLFdBQVcsQ0FBRSxLQUFhO0lBRXhDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBRSxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNyRSxDQUFDO0FBSEQsa0NBR0M7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUssR0FBUSxFQUFFLElBQXNCLEVBQUUsWUFBb0IsR0FBRztJQUUxRixPQUFPLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUMsQ0FBQztBQUMzRixDQUFDO0FBSEQsNENBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixzQkFBc0IsQ0FBRSxHQUF1QyxFQUFFLFlBQW9CLEdBQUc7SUFFcEcsT0FBTyxnQkFBZ0IsQ0FBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUNuRixDQUFDO0FBSEQsd0RBR0M7QUFJRCxNQUFNO0FBQ04sa0dBQWtHO0FBQ2xHLDBCQUEwQjtBQUMxQix1REFBdUQ7QUFDdkQsTUFBTTtBQUNOLDJHQUEyRztBQUMzRyxJQUFJO0FBQ0osbUNBQW1DO0FBQ25DLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1gsMERBQTBEO0FBQzFELElBQUk7QUFJSixtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLFNBQVM7QUFDVCxFQUFFO0FBQ0YsbUdBQW1HO0FBRW5HOzs7R0FHRztBQUNILFNBQWdCLGlCQUFpQixDQUFFLEdBQStCO0lBRTlELE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxRCxDQUFDO0FBSEQsOENBR0M7QUFFRDs7O0dBR0c7QUFDSCxTQUFnQixzQkFBc0IsQ0FBRSxHQUFvQztJQUV4RSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2xCLE9BQU8sZ0JBQWdCLENBQUUsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7O1FBRWpELE9BQU8saUJBQWlCLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQU5ELHdEQU1DO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixVQUFVO0FBQ1YsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7R0FFRztBQUNILFNBQWdCLHdCQUF3QixDQUFFLENBQVM7SUFFL0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ3hHLENBQUM7QUFIRCw0REFHQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLGtCQUFrQixDQUFFLEdBQWdDO0lBRWhFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksR0FBRyxZQUFZLFNBQVMsQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUV6QixPQUFPLHdCQUF3QixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFSRCxnREFRQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLHVCQUF1QixDQUFFLEdBQXFDLEVBQUUsWUFBb0IsR0FBRztJQUVuRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQ2xCLE9BQU8sZ0JBQWdCLENBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDOztRQUU3RCxPQUFPLGtCQUFrQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFORCwwREFNQztBQUlELG1HQUFtRztBQUNuRyxFQUFFO0FBQ0YsU0FBUztBQUNULEVBQUU7QUFDRixtR0FBbUc7QUFFbkc7Ozs7O0dBS0c7QUFDSCxTQUFnQix1QkFBdUIsQ0FBRSxDQUFTLEVBQUUsS0FBNkI7SUFFN0UsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7QUFDOUgsQ0FBQztBQUhELDBEQUdDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUUsR0FBK0I7SUFFOUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1YsSUFBSSxHQUFHLFlBQVksU0FBUyxDQUFDLFdBQVc7UUFDekMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBRXpCLE9BQU8sdUJBQXVCLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDMUMsQ0FBQztBQVJELDhDQVFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQUUsR0FBb0MsRUFBRSxZQUFvQixHQUFHO0lBRWpHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDbEIsT0FBTyxnQkFBZ0IsQ0FBRSxHQUFHLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7O1FBRTVELE9BQU8saUJBQWlCLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQU5ELHdEQU1DO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixRQUFRO0FBQ1IsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7OztHQUlHO0FBQ0gsU0FBZ0Isc0JBQXNCLENBQUUsQ0FBUyxFQUFFLEtBQTRCO0lBRTNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDNUYsQ0FBQztBQUhELHdEQUdDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsZ0JBQWdCLENBQUUsR0FBOEI7SUFFNUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1YsSUFBSSxHQUFHLFlBQVksU0FBUyxDQUFDLFdBQVc7UUFDekMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBRXpCLE9BQU8sc0JBQXNCLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQVJELDRDQVFDO0FBSUQsbUdBQW1HO0FBQ25HLEVBQUU7QUFDRixPQUFPO0FBQ1AsRUFBRTtBQUNGLG1HQUFtRztBQUVuRzs7OztHQUlHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUUsQ0FBUyxFQUFFLEtBQTJCO0lBRXpFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDMUYsQ0FBQztBQUhELHNEQUdDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0IsZUFBZSxDQUFFLEdBQTZCO0lBRTFELElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksR0FBRyxZQUFZLFNBQVMsQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUV6QixPQUFPLHFCQUFxQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFSRCwwQ0FRQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLG9CQUFvQixDQUFFLEdBQWtDO0lBRXBFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUM1QixPQUFPLHFCQUFxQixDQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDLElBQUksR0FBRyxZQUFZLFNBQVMsQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUV0QixPQUFPLGdCQUFnQixDQUFFLEdBQUcsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBVkQsb0RBVUM7QUFJRDs7OztHQUlHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQUUsQ0FBUyxFQUFFLEtBQWM7SUFFNUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUM3RixDQUFDO0FBSEQsc0RBR0M7QUFJRDs7O0dBR0c7QUFDSCxTQUFnQixlQUFlLENBQUUsR0FBNkI7SUFFMUQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQ3ZCLE9BQU8sR0FBRyxDQUFDO1NBQ1YsSUFBSSxHQUFHLFlBQVksU0FBUyxDQUFDLFdBQVc7UUFDekMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDckIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRO1FBQzVCLE9BQU8saUJBQWlCLENBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUM5RixnQ0FBZ0M7SUFDaEMsNEVBQTRFOztRQUUzRSxPQUFPLGlCQUFpQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFaRCwwQ0FZQztBQUVEOzs7R0FHRztBQUNILFNBQWdCLG9CQUFvQixDQUFFLEdBQWtDO0lBRXBFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksR0FBRyxZQUFZLFNBQVMsQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDdkIsT0FBTyxnQkFBZ0IsQ0FBRSxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7O1FBRS9DLE9BQU8sZUFBZSxDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFWRCxvREFVQztBQUlEOzs7R0FHRztBQUNILFNBQWdCLG1CQUFtQixDQUFFLEdBQWlDO0lBRWxFLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtRQUN2QixPQUFPLEdBQUcsQ0FBQztTQUNWLElBQUksR0FBRyxZQUFZLFNBQVMsQ0FBQyxXQUFXO1FBQ3pDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3JCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUNoQztRQUNJLElBQUksT0FBTyxJQUFJLEdBQUc7WUFDZCxPQUFPLGlCQUFpQixDQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQzs7WUFFNUcsT0FBTyxpQkFBaUIsQ0FBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0tBQ2pHOztRQUVBLE9BQU8saUJBQWlCLENBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQWZELGtEQWVDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBZ0Isd0JBQXdCLENBQUUsR0FBc0M7SUFFNUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNsQixPQUFPLGdCQUFnQixDQUFFLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDOztRQUVuRCxPQUFRLG1CQUFtQixDQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFORCw0REFNQztBQUlEOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUUsR0FBUSxFQUFFLFlBQXFCLEVBQUUsR0FBRyxhQUEwRDtJQUU3SCxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBRW5CLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVSLEtBQUssSUFBSSxXQUFXLElBQUksYUFBYSxFQUNyQztRQUNJLElBQUksUUFBUSxHQUFHLE9BQU8sV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4RSxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNmLFNBQVM7UUFFYixJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNaLENBQUMsSUFBSSxHQUFHLENBQUM7UUFFYixJQUFJLFlBQVk7WUFDWixDQUFDLElBQUksUUFBUSxDQUFDO1FBRWxCLElBQUksSUFBSTtZQUNKLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3pCLElBQUksT0FBTyxJQUFJLElBQUk7WUFDcEIsQ0FBQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUM7S0FDMUI7SUFFSixPQUFPLENBQUMsQ0FBQztBQUNWLENBQUM7QUE3QkQsOENBNkJDOzs7Ozs7Ozs7Ozs7OztBQ2pZRDs7R0FFRzs7QUFHSDs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBYSxXQUFXO0lBRXBCLFlBQWEsQ0FBd0I7UUFFakMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU0sUUFBUTtRQUVYLE9BQU8sSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RixDQUFDO0NBR0o7QUFiRCxrQ0FhQyIsImZpbGUiOiJtaW1jc3MuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbWNzc1R5cGVzLnRzXCIpO1xuIiwiaW1wb3J0IHtJU2VsZWN0b3IsIElFbXB0eVNlbGVjdG9yLCBTZWxlY3RvclR5cGUsIFNlbGVjdG9yVG9rZW5UeXBlLCBBdHRyU2VsZWN0b3JPcGVyYXRpb24sIEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsIFNlbGVjdG9yQ29tYmluYXRvcn0gZnJvbSBcIi4vU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7SVRhZ1J1bGUsIElDbGFzc1J1bGUsIElJRFJ1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1RhZ1J1bGV9IGZyb20gXCIuLi9ydWxlcy9UYWdSdWxlXCJcclxuaW1wb3J0IHtDbGFzc1J1bGV9IGZyb20gXCIuLi9ydWxlcy9DbGFzc1J1bGVcIlxyXG5pbXBvcnQge0lEUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0lEUnVsZVwiXHJcbmltcG9ydCB7U3RyaW5nUHJveHl9IGZyb20gXCIuLi9zdHlsZXMvVXRpbFR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHBvc3NpYmxlIHBzZXVkbyBjbGFzc2VzICovXHJcbmV4cG9ydCB0eXBlIHhQc2V1ZG9DbGFzcyA9XHJcblx0Ly8gXCJkaXIoIHM6IFwicnRsXCIgfCBcImx0clwiKVwiIHxcclxuXHQvLyBcImhhcyggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpoYXMoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHQvLyBcImhvc3QoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aG9zdCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdC8vIFwiaG9zdENvbnRleHQoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aG9zdC1jb250ZXh0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0XCI6aG92ZXJcIiB8XHJcblx0XCI6aW5kZXRlcm1pbmF0ZVwiIHxcclxuXHRcIjppbi1yYW5nZVwiIHxcclxuXHRcIjppbnZhbGlkXCIgfFxyXG5cdC8vIFwiaXMoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aXMoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHQvLyBcImxhbmcoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bGFuZygke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdC8vIFwibm90KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm5vdCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdC8vIFwibnRoQ2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bnRoLWNoaWxkKCR7dGhpcy5udGgoIGEsIGIpfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHQvLyBcIm50aExhc3RDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpudGgtbGFzdC1jaGlsZCgke3RoaXMubnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0Ly8gXCJudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1sYXN0LW9mLXR5cGUoJHt0aGlzLm50aCggYSwgYil9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdC8vIFwibnRoT2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1vZi10eXBlKCR7dGhpcy5udGgoIGEsIGIpfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHQvLyBcIndoZXJlKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOndoZXJlKCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0XCJcIjtcclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcG9zc2libGUgcHNldWRvIGVsZW1lbnRzICovXHJcbmV4cG9ydCB0eXBlIHhQc2V1ZG9FbGVtZW50ID1cclxuXHQvLyBwYXJ0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOjpwYXJ0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0Ly8gc2xvdHRlZCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDo6c2xvdHRlZCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdFwiXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgc2VsZWN0b3IgY2xhc3MgZW5jYXBzdWxhdGVzIGFsbCB0aGUgZnVuY3Rpb25hbGl0eSBmb3IgYnVpbGRpbmcgYSBDU1Mgc2VsZWN0b3IuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3IgaW1wbGVtZW50cyBJRW1wdHlTZWxlY3RvciwgSVNlbGVjdG9yXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGluaXREYXRhPzogU2VsZWN0b3JUeXBlKVxyXG5cdHtcclxuXHRcdGlmIChBcnJheS5pc0FycmF5KGluaXREYXRhKSlcclxuXHRcdFx0dGhpcy5idWYgPSBpbml0RGF0YS5zbGljZSgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmJ1ZiA9IFtpbml0RGF0YV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNlbGVjdG9yIGNvbWJpbmF0b3JzXHJcblx0cHVibGljIGdldCBhbmQoKTogSUVtcHR5U2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBTZWxlY3RvckNvbWJpbmF0b3IuQW5kKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGNoaWxkKCk6IElFbXB0eVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggU2VsZWN0b3JDb21iaW5hdG9yLkNoaWxkKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGRlc2NlbmRhbmQoKTogSUVtcHR5U2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBTZWxlY3RvckNvbWJpbmF0b3IuRGVzY2VuZGFuZCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBzaWJsaW5nKCk6IElFbXB0eVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggU2VsZWN0b3JDb21iaW5hdG9yLlNpYmxpbmcpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgYWRqYWNlbnQoKTogSUVtcHR5U2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBTZWxlY3RvckNvbWJpbmF0b3IuQW5kKTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcblx0cHVibGljIHJhdyggcmF3Pzogc3RyaW5nKTogSVNlbGVjdG9yXHJcblx0e1xyXG5cdFx0dGhpcy5idWYucHVzaCggcmF3KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgYWxsKCBucz86IHN0cmluZyk6IElTZWxlY3RvclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmLnB1c2goIG5zID09IG51bGwgPyBcIipcIiA6IGAke25zfXwqYCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIHRhZyggdGFnOiBzdHJpbmcgfCBJVGFnUnVsZSk6IElTZWxlY3RvclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmLnB1c2goIHRhZyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIGNsYXNzKCBjbHM6IHN0cmluZyB8IElDbGFzc1J1bGUpOiBJU2VsZWN0b3JcclxuXHR7XHJcblx0XHR0aGlzLmJ1Zi5wdXNoKCB0eXBlb2YgY2xzID09PSBcInN0cmluZ1wiICYmICFjbHMuc3RhcnRzV2l0aChcIi5cIikgPyBcIi5cIiArIGNscyA6IGNscyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIGlkKCBpZDogc3RyaW5nIHwgSUlEUnVsZSk6IElTZWxlY3RvclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmLnB1c2goIHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIiAmJiAhaWQuc3RhcnRzV2l0aChcIiNcIikgPyBcIiNcIiArIGlkIDogaWQpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHB1YmxpYyBhdHRyKCBhdHRyTmFtZTogc3RyaW5nLCBvcD86IEF0dHJTZWxlY3Rvck9wZXJhdGlvbiB8IEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsXHJcblx0XHRcdFx0XHR2YWx1ZT86IHN0cmluZywgY2FzZUluc2Vuc2l0aXZlPzogYm9vbGVhbiwgY2FzZVNlbnNpdGl2ZT86IGJvb2xlYW4pOiBJU2VsZWN0b3JcclxuXHR7XHJcblx0XHR0aGlzLmJ1Zi5wdXNoKCBhdHRyKCBhdHRyTmFtZSwgb3AsIHZhbHVlLCBjYXNlSW5zZW5zaXRpdmUsIGNhc2VTZW5zaXRpdmUpKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Ly8gcHNldWRvIGNsYXNzZXNcclxuXHRwdWJsaWMgZ2V0IGFjdGl2ZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjphY3RpdmVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBhbnlMaW5rKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmFueS1saW5rXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgYmxhbmsoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6YmxhbmtcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBjaGVja2VkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmNoZWNrZWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBkZWZhdWx0KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmRlZmF1bHRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBkZWZpbmVkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmRlZmluZWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGRpciggczogXCJydGxcIiB8IFwibHRyXCIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpkaXIoJHtzfSlcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBkaXNhYmxlZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpkaXNhYmxlZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGVtcHR5KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmVtcHR5XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZW5hYmxlZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjplbmFibGVkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZmlyc3QoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Zmlyc3RcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmaXJzdENoaWxkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZpcnN0LWNoaWxkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZmlyc3RPZlR5cGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Zmlyc3Qtb2YtdHlwZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZ1bGxzY3JlZW4oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6ZnVsbHNjcmVlblwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZvY3VzKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZvY3VzXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZm9jdXNWaXNpYmxlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZvY3VzLXZpc2libGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmb2N1c1dpdGhpbigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpmb2N1cy13aXRoaW5cIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGhhcyggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpoYXMoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgaG9zdCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpob3N0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGhvc3RDb250ZXh0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOmhvc3QtY29udGV4dCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgaG92ZXIoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6aG92ZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBpbmRldGVybWluYXRlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmluZGV0ZXJtaW5hdGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBpblJhbmdlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmluLXJhbmdlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgaW52YWxpZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjppbnZhbGlkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBpcyggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDppcygke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBsYW5nKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOmxhbmcoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGxhc3RDaGlsZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpsYXN0LWNoaWxkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgbGFzdE9mVHlwZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpsYXN0LW9mLXR5cGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBsZWZ0KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmxlZnRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBsaW5rKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmxpbmtcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIG5vdCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpub3QoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgbnRoQ2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bnRoLWNoaWxkKCR7bnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIG50aExhc3RDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpudGgtbGFzdC1jaGlsZCgke250aCggYSwgYil9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1sYXN0LW9mLXR5cGUoJHtudGgoIGEsIGIpfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgbnRoT2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1vZi10eXBlKCR7bnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBvbmx5Q2hpbGQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b25seS1jaGlsZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IG9ubHlPZlR5cGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b25seS1vZi10eXBlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgb3B0aW9uYWwoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b3B0aW9uYWxcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBvdXRPZlJhbmdlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOm91dC1vZi1yYW5nZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHBsYWNlaG9sZGVyU2hvd24oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cGxhY2Vob2xkZXItc2hvd25cIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByZWFkT25seSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpyZWFkLW9ubHlcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByZWFkV3JpdGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cmVhZC13cml0ZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHJlcXVpcmVkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnJlcXVpcmVkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgcmlnaHQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cmlnaHRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByb290KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnJvb3RcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBzY29wZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpzY29wZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHRhcmdldCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjp0YXJnZXRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCB2YWxpZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjp2YWxpZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHZpc2l0ZWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6dmlzaXRlZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgd2hlcmUoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6d2hlcmUoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcblx0Ly8gcHNldWRvIGVsZW1lbnRzXHJcblx0cHVibGljIGdldCBhZnRlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6YWZ0ZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBiYWNrZHJvcCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6YmFja2Ryb3BcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBiZWZvcmUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmJlZm9yZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGN1ZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Y3VlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZmlyc3RMZXR0ZXIoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmZpcnN0LWxldHRlclwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZpcnN0TGluZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Zmlyc3QtbGluZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGdyYW1tYXJFcnJvcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Z3JhbW1hci1lcnJvclwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IG1hcmtlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6bWFya2VyXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBwYXJ0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOjpwYXJ0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBwbGFjZWhvbGRlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6cGxhY2Vob2xkZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBzZWxlY3Rpb24oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OnNlbGVjdGlvblwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgc2xvdHRlZCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDo6c2xvdHRlZCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgc3BlbGxpbmdFcnJvcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6c3BlbGxpbmctZXJyb3JcIik7IHJldHVybiB0aGlzOyB9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVydHMgdGhlIGFjY3VtdWxhdGVkIHNlbGVjdG9yIHRva2VucyBpbnRvIGZ1bGwgc2VsZWN0b3Igc3RyaW5nLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5idWYubWFwKCAodG9rZW4pID0+XHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAodG9rZW4gaW5zdGFuY2VvZiBUYWdSdWxlKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRva2VuLnRhZ05hbWU7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBDbGFzc1J1bGUpXHJcblx0XHRcdFx0XHRyZXR1cm4gXCIuXCIgKyB0b2tlbi5jbGFzc05hbWU7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBJRFJ1bGUpXHJcblx0XHRcdFx0XHRyZXR1cm4gXCIjXCIgKyB0b2tlbi5pZE5hbWU7XHJcblx0XHRcdFx0ZWxzZSBpZiAodG9rZW4gaW5zdGFuY2VvZiBTdHJpbmdQcm94eSlcclxuXHRcdFx0XHRcdHJldHVybiB0b2tlbi50b1N0cmluZygpO1xyXG5cdFx0XHRcdGVsc2UgaWYgKHRva2VuIGluc3RhbmNlb2YgU2VsZWN0b3IpXHJcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW4udG9Dc3NTdHJpbmcoKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm4gdG9rZW47XHJcblx0XHRcdH1cclxuXHRcdCkuam9pbihcIlwiKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW50ZXJuYWwgYnVmZmVyLCB3aGVyZSBzZWxlY3RvciB0b2tlbnMgYXJlIGFjY3VtdWxhdGVkLlxyXG5cdHByaXZhdGUgYnVmOiAoc3RyaW5nIHwgU2VsZWN0b3JUb2tlblR5cGUpW107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFJldHVybnMgdGhlIFwibnRoXCIgbm90YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG50aCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gYiA9PSBudWxsID8gYS50b1N0cmluZygpIDogYCR7YX1uJHtiID49IDAgPyBgKyR7Yn1gIDogYC0key1ifWB9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogUmV0dXJucyB0aGUgYXR0cmlidXRlIHNlbGVjdG9yIHRva2VuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhdHRyKCBhdHRyTmFtZTogc3RyaW5nLCBvcD86IEF0dHJTZWxlY3Rvck9wZXJhdGlvbiB8IEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsXHJcblx0XHRcdFx0dmFsdWU/OiBzdHJpbmcsIGNhc2VJbnNlbnNpdGl2ZT86IGJvb2xlYW4sIGNhc2VTZW5zaXRpdmU/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuXHRsZXQgb3BBbmRWYWwgPSBvcCA/IGAke29wfVwiJHt2YWx1ZX1cImAgOiBcIlwiO1xyXG5cdGxldCBjYXNlU2lnbiA9IGNhc2VJbnNlbnNpdGl2ZSA/IFwiIGlcIiA6IGNhc2VTZW5zaXRpdmUgPyBcIiBzXCIgOiBcIlwiO1xyXG5cdHJldHVybiBgWyR7YXR0ck5hbWV9JHtvcEFuZFZhbH0ke2Nhc2VTaWdufV1gO1xyXG59XHJcblxyXG4iLCJpbXBvcnQge0lUYWdSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtTdHJpbmdQcm94eX0gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjb21wbGV0ZSBDU1Mgc2VsZWN0b3IgdGhhdCBjYW4gYmUgZWl0aGVyIHVzZWQgYXMgaXMgb3IgY2FuIGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgc2VsZWN0b3JzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0b3IgZXh0ZW5kcyBJQ29tcG91bmRTZWxlY3RvclxyXG57XHJcblx0cmVhZG9ubHkgYW5kOiBJRW1wdHlTZWxlY3RvcjtcclxuXHRyZWFkb25seSBjaGlsZDogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZGVzY2VuZGFuZDogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc2libGluZzogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYWRqYWNlbnQ6IElFbXB0eVNlbGVjdG9yO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZWxlY3RvciAqL1xyXG5cdHRvQ3NzU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHN0YXJ0aW5nIHBvaW50IGluIHRoZSBzZWxlY3RvciBidWlsZGluZyBwcm9jZXNzLiBUaGlzIHNlbGVjdG9yIGNhbm5vdCBiZSB1c2VkIGFzXHJcbiAqIGlzIGJlY2F1c2UgaXQgZG9lc24ndCBjb250YWluIGFueSBzZWxlY3Rpb24gY29udGVudCB5ZXQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbXB0eVNlbGVjdG9yIGV4dGVuZHMgSUNvbXBvdW5kU2VsZWN0b3Jcclxue1xyXG5cdGFsbCggbnM/OiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0dGFnKCB0YWc6IHN0cmluZyB8IElUYWdSdWxlKTogSVNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcG9pbnQgaW4gc2VsZWN0b3IgYnVpbGRpbmcsIHdoaWNoIGFsbG93cyBjbGFzcywgSUQsIGF0dHJpYnV0ZSwgcHNldWRvLWNsYXNzIGFuZFxyXG4gKiBwc2V1ZG8gZWxlbWVudCBzZWxlY3RvcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb3VuZFNlbGVjdG9yXHJcbntcclxuXHRjbGFzcyggY2xzOiBzdHJpbmcgfCBJQ2xhc3NSdWxlKTogSVNlbGVjdG9yO1xyXG5cdGlkKCBpZDogc3RyaW5nIHwgSUlEUnVsZSk6IElTZWxlY3RvcjtcclxuXHRhdHRyKCBhdHRyTmFtZTogc3RyaW5nLCBvcD86IEF0dHJTZWxlY3Rvck9wZXJhdGlvbiB8IEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsXHJcblx0XHRcdFx0XHR2YWx1ZT86IHN0cmluZywgY2FzZUluc2Vuc2l0aXZlPzogYm9vbGVhbik6IElTZWxlY3RvcjtcclxuXHJcblx0Ly8gcHNldWRvIGNsYXNzZXNcclxuXHRyZWFkb25seSBhY3RpdmU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBhbnlMaW5rOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYmxhbms6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBjaGVja2VkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZGVmYXVsdDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGRlZmluZWQ6IElTZWxlY3RvcjtcclxuXHRkaXIoIHM6IFwicnRsXCIgfCBcImx0clwiKTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGRpc2FibGVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZW1wdHk6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBlbmFibGVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3Q6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdENoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3RPZlR5cGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmdWxsc2NyZWVuOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZm9jdXM6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmb2N1c1Zpc2libGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmb2N1c1dpdGhpbjogSVNlbGVjdG9yO1xyXG5cdGhhcyggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdGhvc3QoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRob3N0Q29udGV4dCggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGhvdmVyOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgaW5kZXRlcm1pbmF0ZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGluUmFuZ2U6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBpbnZhbGlkOiBJU2VsZWN0b3I7XHJcblx0aXMoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRsYW5nKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgbGFzdENoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgbGFzdE9mVHlwZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGxlZnQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBsaW5rOiBJU2VsZWN0b3I7XHJcblx0bm90KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0bnRoQ2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvcjtcclxuXHRudGhMYXN0Q2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvcjtcclxuXHRudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3I7XHJcblx0bnRoT2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb25seUNoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb25seU9mVHlwZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IG9wdGlvbmFsOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb3V0T2ZSYW5nZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHBsYWNlaG9sZGVyU2hvd246IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSByZWFkT25seTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHJlYWRXcml0ZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHJlcXVpcmVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcmlnaHQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSByb290OiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc2NvcGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSB0YXJnZXQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSB2YWxpZDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHZpc2l0ZWQ6IElTZWxlY3RvcjtcclxuXHR3aGVyZSggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cclxuXHQvLyBwc2V1ZG8gZWxlbWVudHNcclxuXHRyZWFkb25seSBhZnRlcjogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGJhY2tkcm9wOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYmVmb3JlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgY3VlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3RMZXR0ZXI6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdExpbmU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBncmFtbWFyRXJyb3I6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBtYXJrZXI6IElTZWxlY3RvcjtcclxuXHRwYXJ0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcGxhY2Vob2xkZXI6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBzZWxlY3Rpb246IElTZWxlY3RvcjtcclxuXHRzbG90dGVkKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc3BlbGxpbmdFcnJvcjogSVNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHBvc3NpYmxlIHNlbGVjdG9yIGNvbWJpbmF0b3JzICovXHJcbmV4cG9ydCB0eXBlIFNlbGVjdG9yQ29tYmluYXRvclR5cGUgPSBcIixcIiB8IFwiID4gXCIgfCBcIiBcIiB8IFwiIH4gXCIgfCBcIiArIFwiO1xyXG5cclxuLyoqIFJlcHJlc2VudHMgcG9zc2libGUgc2VsZWN0b3IgY29tYmluYXRvcnMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gU2VsZWN0b3JDb21iaW5hdG9yXHJcbntcclxuXHRBbmQgPSBcIiwgXCIsXHJcblx0Q2hpbGQgPSBcIiA+IFwiLFxyXG5cdERlc2NlbmRhbmQgPSBcIiBcIixcclxuXHRTaWJsaW5nID0gXCIgfiBcIixcclxuXHRBZGphY2VudCA9IFwiICsgXCIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcG9zc2libGUgb3BlcmF0aW9ucyBmb3IgYXR0cmlidXRlIHNlbGVjdG9yICovXHJcbmV4cG9ydCB0eXBlIEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUgPSBcIj1cIiB8IFwifj1cIiB8IFwifD1cIiB8IFwiXj1cIiB8IFwiJD1cIiB8IFwiKj1cIjtcclxuXHJcbi8qKiBSZXByZXNlbnRzIHBvc3NpYmxlIG9wZXJhdGlvbnMgZm9yIGF0dHJpYnV0ZSBzZWxlY3RvciAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBBdHRyU2VsZWN0b3JPcGVyYXRpb25cclxue1xyXG5cdE1hdGNoID0gXCI9XCIsXHJcblx0V29yZCA9IFwifj1cIixcclxuXHRTdWJDb2RlID0gXCJ8PVwiLFxyXG5cdFN0YXJ0c1dpdGggPSBcIl49XCIsXHJcblx0RW5kc1dpdGggPSBcIiQ9XCIsXHJcblx0Q29udGFpbnMgPSBcIio9XCIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFJlcHJlc2VudHMgcG9zc2libGUgcHNldWRvIGNsYXNzZXMgKi9cclxuZXhwb3J0IHR5cGUgUHNldWRvQ2xhc3MgPSBcIjphY3RpdmVcIiB8IFwiOmFueS1saW5rXCIgfCBcIjpibGFua1wiIHwgXCI6Y2hlY2tlZFwiIHwgXCI6ZGVmYXVsdFwiIHwgXCI6ZGVmaW5lZFwiIHxcclxuXHRcIjpkaXNhYmxlZFwiIHwgXCI6ZW1wdHlcIiB8IFwiOmVuYWJsZWRcIiB8IFwiOmZpcnN0XCIgfCBcIjpmaXJzdC1jaGlsZFwiIHwgXCI6Zmlyc3Qtb2YtdHlwZVwiIHwgXCI6ZnVsbHNjcmVlblwiIHxcclxuXHRcIjpmb2N1c1wiIHwgXCI6Zm9jdXMtdmlzaWJsZVwiIHwgXCI6Zm9jdXMtV2l0aGluXCIgfCBcIjpob3ZlclwiIHwgXCI6aW5kZXRlcm1pbmF0ZVwiIHwgXCI6aW4tcmFuZ2VcIiB8IFwiOmludmFsaWRcIiB8XHJcblx0XCI6bGFzdC1jaGlsZFwiIHwgXCI6bGFzdC1vZi10eXBlXCIgfCBcIjpsZWZ0XCIgfCBcIjpsaW5rXCIgfCBcIjpvbmx5LWNoaWxkXCIgfCBcIjpvbmx5LW9mLXR5cGVcIiB8IFwiOm9wdGlvbmFsXCIgfFxyXG5cdFwiOm91dC1vZi1yYW5nZVwiIHwgXCI6cGxhY2Vob2xkZXItc2hvd25cIiB8IFwiOnJlYWQtb25seVwiIHwgXCI6cmVhZC13cml0ZVwiIHwgXCI6cmVxdWlyZWRcIiB8IFwiOnJpZ2h0XCIgfFxyXG5cdFwiOnJvb3RcIiB8IFwiOnNjb3BlXCIgfCBcIjp0YXJnZXRcIiB8IFwiOnZhbGlkXCIgfCBcIjp2aXNpdGVkXCI7XHJcblxyXG5cclxuXHJcbi8qKiBSZXByZXNlbnRzIHBvc3NpYmxlIHBzZXVkbyBlbGVtZW50cyAqL1xyXG5leHBvcnQgdHlwZSBQc2V1ZG9FbGVtZW50ID0gXCI6OmFmdGVyXCIgfCBcIjo6YmFja2Ryb3BcIiB8IFwiOjpiZWZvcmVcIiB8IFwiOjpjdWVcIiB8IFwiOjpmaXJzdExldHRlclwiIHxcclxuXHRcIjo6Zmlyc3RMaW5lXCIgfCBcIjo6Z3JhbW1hckVycm9yXCIgfCBcIjo6bWFya2VyXCIgfCBcIjo6cGxhY2Vob2xkZXJcIiB8IFwiOjpzZWxlY3Rpb25cIiB8IFwiOjpzcGVsbGluZ0Vycm9yXCI7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSBzZWxlY3RvciB0b2tlbiAqL1xyXG5leHBvcnQgdHlwZSBTZWxlY3RvclRva2VuVHlwZSA9IElUYWdSdWxlIHwgSUNsYXNzUnVsZSB8IElJRFJ1bGUgfFxyXG5cdFNlbGVjdG9yQ29tYmluYXRvciB8IFNlbGVjdG9yQ29tYmluYXRvclR5cGUgfFxyXG5cdFBzZXVkb0NsYXNzIHwgUHNldWRvRWxlbWVudCB8XHJcblx0U3RyaW5nUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhIHNpbmdsZSBzZWxlY3RvciB0b2tlbiAqL1xyXG5leHBvcnQgdHlwZSBTZWxlY3RvclR5cGUgPSBzdHJpbmcgfCBJU2VsZWN0b3IgfCBTZWxlY3RvclRva2VuVHlwZSB8IFNlbGVjdG9yVG9rZW5UeXBlW107XHJcblxyXG5cclxuXHJcbmltcG9ydCB7U2VsZWN0b3IsIG50aCwgYXR0cn0gZnJvbSBcIi4vU2VsZWN0b3JGdW5jc1wiXHJcblxyXG4vKipcclxuICogSGVscGVyIGNsYXNzIGZvciBjcmVhdGluZyBlbGVtZW50cyBvZiBhIHNlbGVjdG9yIChzZWxlY3RvciB0b2tlbnMpLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNlbGVjdG9ySGVscGVyXHJcbntcclxuXHRwdWJsaWMgcmF3KCByYXc/OiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggcmF3KTsgfVxyXG5cdHB1YmxpYyBhbGwoIG5zPzogc3RyaW5nKSB7IHJldHVybiBucyA9PSBudWxsID8gXCIqXCIgOiBgJHtuc318KmA7IH1cclxuXHRwdWJsaWMgYXR0ciggYXR0ck5hbWU6IHN0cmluZywgb3A/OiBBdHRyU2VsZWN0b3JPcGVyYXRpb24gfCBBdHRyU2VsZWN0b3JPcGVyYXRpb25UeXBlLFxyXG5cdFx0XHRcdFx0dmFsdWU/OiBzdHJpbmcsIGNhc2VJbnNlbnNpdGl2ZT86IGJvb2xlYW4sIGNhc2VTZW5zaXRpdmU/OiBib29sZWFuKVxyXG5cdFx0eyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBhdHRyKCBhdHRyTmFtZSwgb3AsIHZhbHVlLCBjYXNlSW5zZW5zaXRpdmUsIGNhc2VTZW5zaXRpdmUpKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgdGFnKCBzOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggcyk7IH1cclxuXHRwdWJsaWMgc3RhdGljIHJ0bCgpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggXCI6ZGlyKHJ0bClcIik7IH1cclxuXHRwdWJsaWMgc3RhdGljIGx0cigpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggXCI6ZGlyKGx0cilcIik7IH1cclxuXHRwdWJsaWMgc3RhdGljIGhhcyggczogc3RyaW5nKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6aGFzKCR7c30pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIGhvc3QoIHM6IHN0cmluZykgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBgOmhvc3QoJHtzfSlgKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgaG9zdENvbnRleHQoIHM6IHN0cmluZykgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBgOmhvc3QtY29udGV4dCgke3N9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBpcyggczogc3RyaW5nKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6aXMoJHtzfSlgKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgbGFuZyggczogc3RyaW5nKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6bGFuZygke3N9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBub3QoIHM6IHN0cmluZykgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBgOm5vdCgke3N9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBudGhDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6bnRoLWNoaWxkKCR7bnRoKCBhLCBiKX0pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIG50aExhc3RDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6bnRoLWxhc3QtY2hpbGQoJHtudGgoIGEsIGIpfSlgKTsgfVxyXG5cdHB1YmxpYyBzdGF0aWMgbnRoTGFzdE9mVHlwZSggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKSB7IHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGA6bnRoLWxhc3Qtb2YtdHlwZSgke250aCggYSwgYil9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBudGhPZlR5cGUoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcikgeyByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBgOm50aC1vZi10eXBlKCR7bnRoKCBhLCBiKX0pYCk7IH1cclxuXHRwdWJsaWMgc3RhdGljIHdoZXJlKCBzOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDp3aGVyZSgke3N9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBwYXJ0KCBzOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDo6cGFydCgke3N9KWApOyB9XHJcblx0cHVibGljIHN0YXRpYyBzbG90dGVkKCBzOiBzdHJpbmcpIHsgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggYDo6c2xvdHRlZCgke3N9KWApOyB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gZW1wdHkgc2VsZWN0b3IgZnJvbSB3aGljaCBzZWxlY3RvciBidWlsZGluZyBwcm9jZXNzIHN0YXJ0cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc2VsZWN0b3IoKTogSUVtcHR5U2VsZWN0b3IgeyByZXR1cm4gbmV3IFNlbGVjdG9yKCk7IH1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHJpbmdQcm94eSwgTGVuZ3RoVW5pdHMsIEFuZ2xlVW5pdHMsIFRpbWVVbml0c30gZnJvbSBcIi4uL3N0eWxlcy9VdGlsVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBVdGlsRnVuY3MgZnJvbSBcIi4uL3N0eWxlcy9VdGlsRnVuY3NcIlxyXG5pbXBvcnQgKiBhcyBDb2xvclR5cGVzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBDb2xvckZ1bmNzIGZyb20gXCIuLi9zdHlsZXMvQ29sb3JGdW5jc1wiO1xyXG5pbXBvcnQge0lDdXN0b21WYXIsIElDdXN0b21WYWx9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge0N1c3RvbVZhcn0gZnJvbSBcIi4uL3J1bGVzL0N1c3RvbVZhclwiXHJcbmltcG9ydCB7UHVyZVN0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBtc2ggY2xhc3MgY29udGFpbnMgc3RhdGljIGhlbHBlciBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCB3aGVuZXZlciB0aGVyZSBpcyBhIG5lZWQgdG8gcHJvZHVjZVxyXG4gKiBDU1Mgc3RyaW5nIHZhbHVlIGJhc2VkIG9uIG1vcmUgY29tcGxpY2F0ZWQgdHlwZShzKS4gVGhlIG1ham9yaXR5IG9mIHRoZXNlIGZ1bmN0aW9ucyByZXR1cm5cclxuICogU3RyaW5nUHJveHkgb2JqZWN0IHNvIHRoYXQgdGhleSBjYW4gYmUgdXNlZCBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzIGFzc2lnbm1lbnRzLCBmb3IgZXhhbXBsZTpcclxuICogYGBgdHN4XHJcbiAqIDxkaXYgc3R5bGU9e3sgY29sb3I6IHRzaC5yZ2IoIDI1NSwgMTI4LCA2NCkgfX1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgdHNoXHJcbntcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gVXRpbGl0aWVzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBTdHJpbmdQcm94eSBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIG9yIGFub3RoZXIgU3RyaW5nUHJveHkgb2JqZWN0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhdyggczogc3RyaW5nIHwgU3RyaW5nUHJveHkpOiBTdHJpbmdQcm94eVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nUHJveHkocyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gdmFsdWUgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW4gc3R5bGUgcHJvcGVydHkgdG8gc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHN0eWxlUHJvcE5hbWUgU3R5bGUgcHJvcGVydHkgbmFtZSB0aGF0IGRldGVybWluZXMgaG93IHRoZSB2YWx1ZSBzaG91bGQgYmUgY29udmVydGVkXHJcbiAgICAgKiB0byBhIENTUyBjb21wbGlhbnQgc3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHN0eWxlUHJvcFZhbHVlIFZhbHVlIHRvIGNvbnZlcnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdmFsKCBzdHlsZVByb3BOYW1lOiBzdHJpbmcsIHN0eWxlUHJvcFZhbHVlOiBhbnkpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gc3R5bGVQcm9wVG9Dc3NTdHJpbmcoIHN0eWxlUHJvcE5hbWUsIHN0eWxlUHJvcFZhbHVlLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVuaXRzPFQgZXh0ZW5kcyBzdHJpbmc+KCBuOiBudW1iZXIsIHVuaXQ6IFQpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbiArIHVuaXQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIENvbG9yc1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbG9yU2VwKCBjOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gQ29sb3JGdW5jcy5jb2xvclNlcChjKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJnYiggcjogbnVtYmVyIHwgc3RyaW5nLCBnOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IFN0cmluZ1Byb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggQ29sb3JGdW5jcy5yZ2IoIHIsIGcsIGIsIGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhzbCggaDogbnVtYmVyIHwgc3RyaW5nLCBzOiBudW1iZXIgfCBzdHJpbmcsIGw6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IFN0cmluZ1Byb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggQ29sb3JGdW5jcy5oc2woIGgsIHMsIGwsIGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFscGhhKCBjOiBudW1iZXIgfCBrZXlvZiB0eXBlb2YgQ29sb3JUeXBlcy5Db2xvcnMsIGE6IG51bWJlciB8IHN0cmluZyk6IFN0cmluZ1Byb3h5XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggQ29sb3JGdW5jcy5hbHBoYSggYywgYSkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBQZXJjZW50XHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgdG8gYSBwZXJjZW50IHN0cmluZy4gTnVtYmVycyBiZXR3ZWVuIC0xIGFuZCAxIGFyZSBtdWx0aXBseWVkIGJ5IDEwMC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwZXJjZW50KCBuOiBudW1iZXIpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLnBlcmNlbnROdW1iZXJUb0Nzc1N0cmluZyggbik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIExlbmd0aCB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIFEoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJRXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiY2hcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY20oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJjbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImVtXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGV4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZXhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaWMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJpY1wiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBpbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImluXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGxoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwibGhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgbW0oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJtbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBwYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInBjXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHB0KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwicHRcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgcHgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJweFwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyB2YiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZiXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHZoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwidmhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdmkoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJ2aVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyB2dyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZ3XCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInJlbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBybGgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJybGhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdm1heCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZtYXhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdm1pbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZtaW5cIik7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGxlbmd0aCB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxlbiggbjogbnVtYmVyLCB1bml0cz86IExlbmd0aFVuaXRzKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhOdW1iZXJUb0Nzc1N0cmluZyggbiwgdW5pdHMpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBBbmdsZSB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gZGVncmVlcyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkZWcoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJkZWdcIik7IH1cclxuXHJcbiAgICAvKiogQ3JlYXRlcyBhbmdsZSB2YWx1ZSBpbiByYWRpYW5zICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJhZCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInJhZFwiKTsgfVxyXG5cclxuICAgIC8qKiBDcmVhdGVzIGFuZ2xlIHZhbHVlIGluIGdyYWRpYW5zICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdyYWQoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJncmFkXCIpOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgYW5nbGUgdmFsdWUgaW4gdHVybnMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdHVybiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInR1cm5cIik7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGFuZ2xlIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICAgICAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBkZWdyZWVzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcmFkaWFucy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhbmdsZSggbjogbnVtYmVyLCB1bml0cz86IEFuZ2xlVW5pdHMpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFuZ2xlTnVtYmVyVG9Dc3NTdHJpbmcoIG4sIHVuaXRzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gVGltZSB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLyoqIENyZWF0ZXMgdGltZSB2YWx1ZSBpbiBzZWNvbmRzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJzXCIpOyB9XHJcblxyXG4gICAgLyoqIENyZWF0ZXMgdGltZSB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgbXMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJtc1wiKTsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgdGltZSB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLiBJbnRlZ2VyXHJcbiAgICAgKiB2YWx1ZXMgYXJlIHRyZWF0ZWQgYXMgbWlsbGlzZWNvbmRzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgc2Vjb25kcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0aW1lKCBuOiBudW1iZXIsIHVuaXRzPzogVGltZVVuaXRzKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy50aW1lTnVtYmVyVG9Dc3NTdHJpbmcoIG4sIHVuaXRzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gRnJlcXVlbmN5IHVuaXRzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBzdGF0aWMgaHooIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJIelwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBraHooIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJrSHpcIik7IH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gUmVzb2x1dGlvbiB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIGRwaSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImRwaVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkcGNtKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZHBjbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkcHB4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZHBweFwiKTsgfVxyXG5cclxuLyoqXHJcbiAgICAgKiBDb252ZXJ0cyByZXNvbHV0aW9uIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICAgICAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBEUEkgd2hpbGUgZmxvYXRpbmcgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBEUENNLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlc29sdXRpb24oIG46IG51bWJlciwgdW5pdHM/OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLnJlc29sdXRpb25Ub0Nzc1N0cmluZyggbiwgdW5pdHMpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBGcmFjdGlvbiB1bml0cyAoZm9yIGZsZXgpXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBzdGF0aWMgZnIoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJmclwiKTsgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBDdXN0b20gQ1NTIHByb3BlcnRpZXNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyBhIGN1c3RvbSBDU1MgcHJvcGVydHkgYXMgcGFydCBvZiBhIFN0eWxlc2V0LiBVc2UgaXQgYXMgaW4gdGhlIGZvbGxvd2luZyBleGFtcGxlOlxyXG4gICAgICogYGBgdHN4XHJcbiAgICAgKiBsZXQgbXlTdHlsZXMgPSAkc2NvcGUoIGNsYXNzXHJcbiAgICAgKiB7XHJcbiAgICAgKiAgICAgbWFpbkNvbG9yID0gJGN1c3RvbSggXCJjb2xvclwiLCBcImJsYWNrXCIpO1xyXG4gICAgICogICAgIGRpdiA9ICR0YWcoIFwiZGl2XCIsIHsgJGN1c3RvbTogWyB0c2guY3VzdG9tKCB0aGlzLm1haW5Db2xvciwgXCJicm93blwiKSBdIH0pXHJcbiAgICAgKiB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIHRoZSBmb2xsb3dpbmcgQ1NTOlxyXG4gICAgICogYGBgY3NzXHJcbiAgICAgKiA6cm9vdCB7IC0tbWFpbkNvbG9yOiBcImJsYWNrXCI7IH1cclxuICAgICAqIGRpdiB7IC0tbWFpbkNvbG9yOiBcImJyb3duXCI7IH1cclxuICAgICAqIGBgYFxyXG4gICAgICogVGhlIGB0c2guY3VzdG9tYCBtZXRob2Qgd2lsbCBwcm9kdWNlIGEgY29tcGlsYXRpb24gZXJyb3IgaWYgYW4gaW52YWxpZCB0eXBlIGlzIHVzZWQgZm9yIHRoZVxyXG4gICAgICogcHJvcGVydHkgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY3VzdG9tPEsgZXh0ZW5kcyBrZXlvZiBQdXJlU3R5bGVzZXQ+KCB2YXJEZWY6IElDdXN0b21WYXI8Sz4sIHZhclZhbHVlOiBQdXJlU3R5bGVzZXRbS10pOiBJQ3VzdG9tVmFsPEs+XHJcbiAgICB7XHJcblx0XHRyZXR1cm4geyB2YXJEZWYsIHZhclZhbHVlIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIENTUyB2YXIoKSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIGN1c3RvbSBwcm9wZXJ0eS5cclxuICAgICAqIFVzZSBpdCBhcyBpbiB0aGUgZm9sbG93aW5nIGV4YW1wbGU6XHJcbiAgICAgKiBgYGB0c3hcclxuICAgICAqIGxldCBteVN0eWxlcyA9ICRzY29wZSggY2xhc3NcclxuICAgICAqIHtcclxuICAgICAqICAgICBkZWZhdWx0Q29sb3IgPSAkY3VzdG9tKCBcImNvbG9yXCIsIFwiYmx1ZVwiKTtcclxuICAgICAqIFxyXG4gICAgICogICAgIHNpZGViYXIgPSAkY2xhc3MoIHsgY29sb3I6IHRzaC52YXIoIHRoaXMuZGVmYXVsdENvbG9yLCBcImJsYWNrXCIpIH0pXHJcbiAgICAgKiB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICogVGhlIHZhciBtZXRob2QgY2FuIGFsc28gYmUgdXNlZCB3aXRoIHNpbXBsZSBzdHJpbmcgdmFsdWVzOlxyXG4gICAgICogYGBgdHN4XHJcbiAgICAgKiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiB0c2gudmFyKCBcImRlZmF1bHQtY29sb3JcIiwgXCJibGFja1wiKSB9fVxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdmFyPEsgZXh0ZW5kcyBrZXlvZiBQdXJlU3R5bGVzZXQ+KCB2YXJEZWY6IElDdXN0b21WYXI8Sz4gfCBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2tWYWx1ZT86IFB1cmVTdHlsZXNldFtLXSB8IElDdXN0b21WYXI8Sz4gfCBzdHJpbmcgfCBTdHJpbmdQcm94eSk6IFZhclZhbHVlPEs+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWYXJWYWx1ZSggdmFyRGVmLCBmYWxsYmFja1ZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFZhclZhbHVlIGNsYXNzIGVuY2Fwc3VsYXRlcyBhIHVzYWdlIG9mIHRoZSBDU1MgYHZhcmAgZnVuY3Rpb24gZm9yIGdldHRpbmcgYSB2YWx1ZSBvZiBhXHJcbiAqIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVmFyVmFsdWU8SyBleHRlbmRzIGtleW9mIFB1cmVTdHlsZXNldD4gZXh0ZW5kcyBTdHJpbmdQcm94eVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvciggdmFyRGVmOiBJQ3VzdG9tVmFyPEs+IHwgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrVmFsdWU/OiBQdXJlU3R5bGVzZXRbS10gfCBJQ3VzdG9tVmFyPEs+IHwgc3RyaW5nIHwgU3RyaW5nUHJveHkpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhckRlZiA9IHZhckRlZjtcclxuICAgICAgICB0aGlzLmZhbGxiYWNrVmFsdWUgPSBmYWxsYmFja1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgdmFyTmFtZSA9IHR5cGVvZiB0aGlzLnZhckRlZiA9PT0gXCJzdHJpbmdcIiA/IHRoaXMudmFyRGVmIDogKHRoaXMudmFyRGVmIGFzIEN1c3RvbVZhcjxLPikudmFyTmFtZTtcclxuICAgICAgICBsZXQgcyA9IGB2YXIoLS0ke3Zhck5hbWV9YDtcclxuICAgICAgICBpZiAodGhpcy5mYWxsYmFja1ZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcyArPSBcIixcIjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmFsbGJhY2tWYWx1ZSBpbnN0YW5jZW9mIEN1c3RvbVZhcilcclxuICAgICAgICAgICAgICAgIHMgKz0gdHNoLnZhciggdGhpcy5mYWxsYmFja1ZhbHVlKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXMuZmFsbGJhY2tWYWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0aGlzLmZhbGxiYWNrVmFsdWUgaW5zdGFuY2VvZiBTdHJpbmdQcm94eSB8fCB0eXBlb2YgdGhpcy52YXJEZWYgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICBzICs9IHRoaXMuZmFsbGJhY2tWYWx1ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcyArPSB0c2gudmFsKCAodGhpcy52YXJEZWYgYXMgQ3VzdG9tVmFyPEs+KS50ZW1wbGF0ZVByb3BOYW1lLCB0aGlzLmZhbGxiYWNrVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHMgKyBcIilcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFyRGVmOiBJQ3VzdG9tVmFyPEs+IHwgc3RyaW5nO1xyXG4gICAgLy8gcHVibGljIGZhbGxiYWNrVmFsdWU/OiBQdXJlU3R5bGVzZXRbS10gfCBJQ3VzdG9tVmFyPEs+IHwgc3RyaW5nIHwgU3RyaW5nUHJveHk7XHJcbiAgICBwdWJsaWMgZmFsbGJhY2tWYWx1ZT86IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1ibFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL1V0aWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvQ29sb3JUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvU3R5bGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvTWVkaWFUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9ydWxlcy9SdWxlVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc2NvcGUvU2NvcGVUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9oZWxwZXJzL1NlbGVjdG9yVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vaGVscGVycy90c2hcIjtcclxuIiwiaW1wb3J0IHtJQW5pbWF0aW9uUnVsZSwgS2V5ZnJhbWUsIFJ1bGVUeXBlLCBJTmFtZWRSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge3RzaH0gZnJvbSBcIi4uL2hlbHBlcnMvdHNoXCJcclxuaW1wb3J0IHtzdHlsZXNldFRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlRnVuY3NcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCI7XHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lciwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVGFnUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgdGFnIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBrZXlmcmFtZXM/OiBLZXlmcmFtZVtdLCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRSdWxlKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5BTklNQVRJT04pO1xyXG5cclxuXHRcdGlmIChrZXlmcmFtZXMpXHJcblx0XHRcdHRoaXMua2V5ZnJhbWVSdWxlcyA9IGtleWZyYW1lcy5tYXAoIChrZXlmcmFtZSkgPT4gbmV3IEtleWZyYW1lUnVsZSgga2V5ZnJhbWUpKTtcclxuXHJcblx0XHR0aGlzLm5hbWVPdmVycmlkZSA9IG5hbWVPdmVycmlkZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IFJ1bGVDb250YWluZXIsIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRpZiAoIXRoaXMubmFtZU92ZXJyaWRlKVxyXG5cdFx0XHR0aGlzLmFuaW1hdGlvbk5hbWUgPSB0aGlzLm93bmVyLmdldFNjb3BlZFJ1bGVOYW1lZCggcnVsZU5hbWUpO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRoaXMubmFtZU92ZXJyaWRlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHR0aGlzLmFuaW1hdGlvbk5hbWUgPSB0aGlzLm5hbWVPdmVycmlkZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5hbmltYXRpb25OYW1lID0gdGhpcy5uYW1lT3ZlcnJpZGUubmFtZTtcclxuXHJcblx0XHRmb3IoIGxldCBrZXlmcmFtZVJ1bGUgb2YgdGhpcy5rZXlmcmFtZVJ1bGVzKVxyXG5cdFx0XHRrZXlmcmFtZVJ1bGUucHJvY2VzcyggY29udGFpbmVyLCBvd25lciwgcnVsZU5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRcdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmFuaW1hdGlvbk5hbWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBjc3NOYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmFuaW1hdGlvbk5hbWU7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQW5pbWF0aW9uUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEFuaW1hdGlvblJ1bGUoKTtcclxuXHRcdG5ld1J1bGUua2V5ZnJhbWVSdWxlcyA9IHRoaXMua2V5ZnJhbWVSdWxlcy5tYXAoIChrZXlmcmFtZVJ1bGUpID0+IGtleWZyYW1lUnVsZS5jbG9uZSgpKTtcclxuXHRcdG5ld1J1bGUubmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IGluZGV4ID0gcGFyZW50Lmluc2VydFJ1bGUoIGBAa2V5ZnJhbWVzICR7dGhpcy5hbmltYXRpb25OYW1lfSB7fWAsIHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cdFx0dGhpcy5jc3NSdWxlID0gcGFyZW50LmNzc1J1bGVzW2luZGV4XTtcclxuXHRcdGxldCBjc3NLZXlmcmFtZXNSdWxlID0gdGhpcy5jc3NSdWxlIGFzIENTU0tleWZyYW1lc1J1bGU7XHJcblx0XHRcclxuXHRcdGZvciggbGV0IGtleWZyYW1lUnVsZSBvZiB0aGlzLmtleWZyYW1lUnVsZXMpXHJcblx0XHRcdGNzc0tleWZyYW1lc1J1bGUuYXBwZW5kUnVsZSgga2V5ZnJhbWVSdWxlLnRvQ3NzU3RyaW5nKCkpXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBTT00ga2V5ZnJhbWVzIHJ1bGUgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0tleWZyYW1lc1J1bGUoKTogQ1NTS2V5ZnJhbWVzUnVsZSB7IHJldHVybiB0aGlzLmNzc1J1bGUgYXMgQ1NTS2V5ZnJhbWVzUnVsZTsgfVxyXG5cclxuXHQvKiogT25seSBuZWVkZWQgdG8gZGlzdGluZ3Vpc2ggZnJvbSBjbGFzcyBhbmQgSUQgcnVsZXMgKi9cclxuXHRwdWJsaWMga2V5ZnJhbWVSdWxlczogS2V5ZnJhbWVSdWxlW107XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGFuaW1hdGlvbiB0byB1c2UgaW4gYW5pbWF0aW9uLW5hbWUgQ1NTIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBhbmltYXRpb25OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEtleWZyYW1lUnVsZSBjbGFzcyByZXByZXNlbnRzIGEgc2luZ2xlIGtleWZyYW1lIGNsYXVzZSBpbiB0aGUgYW5pbWF0aW9uIHJ1bGUuXHJcbiAqL1xyXG5jbGFzcyBLZXlmcmFtZVJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcigga2V5ZnJhbWU/OiBLZXlmcmFtZSlcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuS0VZRlJBTUUsIGtleWZyYW1lID8ga2V5ZnJhbWVbMV0gOiB1bmRlZmluZWQpO1xyXG5cclxuXHRcdGlmIChrZXlmcmFtZSlcclxuXHRcdFx0dGhpcy53YXlwb2ludFN0cmluZyA9IHRoaXMucGFyc2VXYXlwb2ludCgga2V5ZnJhbWVbMF0pO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHJpdmF0ZSBwYXJzZVdheXBvaW50KCB3YXlwb2ludDogXCJmcm9tXCIgfCBcInRvXCIgfCBudW1iZXIpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIHdheXBvaW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gd2F5cG9pbnQ7XHJcblx0XHRlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKCB3YXlwb2ludCkpXHJcblx0XHRcdHJldHVybiB3YXlwb2ludCArIFwiJVwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHNoLnBlcmNlbnQoIHdheXBvaW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEtleWZyYW1lUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEtleWZyYW1lUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRuZXdSdWxlLndheXBvaW50U3RyaW5nID0gdGhpcy53YXlwb2ludFN0cmluZztcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy53YXlwb2ludFN0cmluZ30gJHtzdHlsZXNldFRvQ3NzU3RyaW5nKCB0aGlzLnN0eWxlc2V0LCB0aGlzLmltcG9ydGFudCl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2VTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy53YXlwb2ludFN0cmluZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50IGFzIGEgc3RyaW5nICovXHJcblx0cHVibGljIHdheXBvaW50U3RyaW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJQ2xhc3NSdWxlLCBFeHRlbmRlZFN0eWxlc2V0LCBSdWxlVHlwZSwgSU5hbWVkUnVsZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiO1xyXG5pbXBvcnQge1J1bGVDb250YWluZXIsIElSdWxlQ29udGFpbmVyT3duZXJ9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUNsYXNzUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IEV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZFJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLkNMQVNTLCBzdHlsZSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBSdWxlQ29udGFpbmVyLCBvd25lcjogSVJ1bGVDb250YWluZXJPd25lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLm5hbWVPdmVycmlkZSlcclxuXHRcdFx0dGhpcy5jbGFzc05hbWUgPSB0aGlzLm93bmVyLmdldFNjb3BlZFJ1bGVOYW1lZCggcnVsZU5hbWUpO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRoaXMubmFtZU92ZXJyaWRlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMubmFtZU92ZXJyaWRlLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNsYXNzTmFtZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc05hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiLlwiICsgdGhpcy5jbGFzc05hbWU7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ2xhc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQ2xhc3NSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdG5ld1J1bGUubmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2VTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gXCIuXCIgKyB0aGlzLmNsYXNzTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGNsYXNzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmNsYXNzTmFtZTsgfVxyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBjbGFzcyB1bmRlciB3aGljaCB0aGUgc3R5bGVzZXQgd2lsbCBhcHBlYXIgaW4gdGhlIHN0eWxlIHNoZWV0LlxyXG5cdHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSBvciBuYW1lZCBvYmplY3QgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBjcmVhdGUgYSBuYW1lIGZvciB0aGlzIHJ1bGUuIElmIHRoaXMgcHJvcGVydHlcclxuXHQvLyBpcyBub3QgZGVmaW5lZCwgdGhlIG5hbWUgd2lsbCBiZSB1bmlxdWVseSBnZW5lcmF0ZWQuXHJcblx0cHJpdmF0ZSBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUN1c3RvbVZhciwgUnVsZVR5cGUsIElOYW1lZFJ1bGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UHVyZVN0eWxlc2V0LCBTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCJcclxuaW1wb3J0IHt0c2h9IGZyb20gXCIuLi9oZWxwZXJzL3RzaFwiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge1J1bGVDb250YWluZXIsIElSdWxlQ29udGFpbmVyT3duZXJ9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEN1c3RvbVZhciBjbGFzcyBkZXNjcmliZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVZhcjxLIGV4dGVuZHMga2V5b2YgUHVyZVN0eWxlc2V0PiBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJQ3VzdG9tVmFyPEs+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHRlbXBsYXRlUHJvcE5hbWU/OiBLLCB2YXJWYWx1ZT86IFB1cmVTdHlsZXNldFtLXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZSlcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuVkFSKTtcclxuXHJcblx0XHR0aGlzLnRlbXBsYXRlUHJvcE5hbWUgPSB0ZW1wbGF0ZVByb3BOYW1lO1xyXG5cdFx0dGhpcy52YXJWYWx1ZSA9IHZhclZhbHVlO1xyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBSdWxlQ29udGFpbmVyLCBvd25lcjogSVJ1bGVDb250YWluZXJPd25lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLm5hbWVPdmVycmlkZSlcclxuXHRcdFx0dGhpcy52YXJOYW1lID0gdGhpcy5vd25lci5nZXRTY29wZWRSdWxlTmFtZWQoIHJ1bGVOYW1lKTtcclxuXHRcdGVsc2UgaWYgKHR5cGVvZiB0aGlzLm5hbWVPdmVycmlkZSA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0dGhpcy52YXJOYW1lID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMudmFyTmFtZSA9IHRoaXMubmFtZU92ZXJyaWRlLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnZhck5hbWU7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBjc3NOYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIi0tXCIgKyB0aGlzLnZhck5hbWU7IH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBydWxlIGlzIGEgcmVhbCBDU1MgcnVsZSB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCB1bmRlciB0aGUgPHN0eWxlPlxyXG5cdC8vIGVsZW1lbnQuIEZvciB0aGUgbWFqb3JpdHkgb2YgUnVsZS1kZXJpdmVkIGNsYXNzZXMgdGhpcyBpcyB0cnVlOyBob3dldmVyLCBmb3Igc29tZSBjbGFzc2VzLFxyXG5cdC8vIGUuZy4gZm9yIHRoZSBDdXN0b21WYXIgY2xhc3MsIHRoaXMgaXMgbm90IHNvLlxyXG5cdHB1YmxpYyBnZXQgaXNSZWFsQ3NzUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEN1c3RvbVZhcjxLPlxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEN1c3RvbVZhcjxLPigpO1xyXG5cdFx0bmV3UnVsZS50ZW1wbGF0ZVByb3BOYW1lID0gdGhpcy50ZW1wbGF0ZVByb3BOYW1lO1xyXG5cdFx0bmV3UnVsZS52YXJWYWx1ZSA9IHRoaXMudmFyVmFsdWU7XHJcblx0XHRuZXdSdWxlLm5hbWVPdmVycmlkZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0Ly8gU2luY2UgQ3VzdG9tVmFyIGlzIG5vdCBhIHJlYWwgQ1NTIHJ1bGUsIHRoaXMgaW1wbGVtZW50YXRpb24gZG9lcyBub3RoaW5nLiBJbnN0ZWFkLCB0aGVcclxuXHQvLyBSdWxlQ29udGFpbmVyIHVzZXMgdGhlIHRvQ3NzU3RyaW5nIG1ldGhvZCBvZiBvdXIgY2xhc3MuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZCB7fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgLS0ke3RoaXMudmFyTmFtZX06ICR7dHNoLnZhbCggdGhpcy50ZW1wbGF0ZVByb3BOYW1lLCB0aGlzLnZhclZhbHVlKX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHkgdmFsdWUuXHJcblx0cHVibGljIHRlbXBsYXRlUHJvcE5hbWU6IEs7XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHVibGljIHZhck5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gVmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHVibGljIHZhclZhbHVlOiBQdXJlU3R5bGVzZXRbS107XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lGb250RmFjZVJ1bGUsIFJ1bGVUeXBlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIjtcclxuaW1wb3J0IHtGb250ZmFjZX0gZnJvbSBcIi4uL3N0eWxlcy9Gb250RmFjZVR5cGVzXCJcclxuaW1wb3J0IHtmb250RmFjZVRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL0ZvbnRGYWNlRnVuY3NcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBGb250RmFjZVJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgaGF2ZSBhIHNpbmdsZSBzdHlsZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZvbnRGYWNlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJRm9udEZhY2VSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGZvbnRmYWNlPzogRm9udGZhY2UpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLkZPTlRGQUNFKTtcclxuXHJcblx0XHR0aGlzLmZvbnRmYWNlID0gZm9udGZhY2U7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogRm9udEZhY2VSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgRm9udEZhY2VSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmZvbnRmYWNlID0ge307XHJcblx0XHRPYmplY3QuYXNzaWduKCB0aGlzLmZvbnRmYWNlLCB0aGlzLmZvbnRmYWNlKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZShcclxuXHRcdFx0YEBmb250LWZhY2UgJHtmb250RmFjZVRvQ3NzU3RyaW5nKCB0aGlzLmZvbnRmYWNlKX1gLFxyXG5cdFx0XHRwYXJlbnQuY3NzUnVsZXMubGVuZ3RoKTtcclxuXHJcblx0XHR0aGlzLmNzc1J1bGUgPSBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cHVibGljIGdldCBjc3NGb250RmFjZVJ1bGUoKTogQ1NTRm9udEZhY2VSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NGb250RmFjZVJ1bGU7IH1cclxuXHJcblx0Ly8gT2JqZWN0IGRlZmluaW5nIGZvbnQtZmFjZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBmb250ZmFjZTogRm9udGZhY2U7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJUnVsZURlZmluaXRpb25DbGFzcywgSUdyb3VwUnVsZSwgUnVsZVR5cGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lciwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgR3JvdXBSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSBwYXJzZWQgZm9ybSBvZiBhIFN0eWxlU2hlZXREZWZpbml0aW9uLWRlcml2ZWQgY2xhc3MuIFRoaXNcclxuICogY2xhc3MgZG9lc24ndCBoYXZlIGEgdGVtcGxhdGUgcGFyYW1ldGVyLCBidXQgaXQgY29uZm9ybXMgdG8gdGhlIElTdHlsZVNoZWV0PFQ+IGludGVyZmFjZSxcclxuICogd2hpY2ggcHJvdmlkZXMgbmFtZXMgb2YgY2xhc3NlcywgSURzIGFuZCBrZXlmcmFtZXMgZGVmaW5lZCBpbiB0aGUgY2xhc3MgVCwgd2hpY2ggbXVzdCBiZVxyXG4gKiBkZXJpdmVkIGZyb20gdGhlIFN0eWxlU2hlZXREZWZpbml0aW9uIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyb3VwUnVsZTxUID0gYW55PiBleHRlbmRzIFJ1bGVDb250YWluZXI8VD4gaW1wbGVtZW50cyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IFJ1bGVUeXBlLCBkZWZpbml0aW9uOiBUKVxyXG5cdHtcclxuXHRcdHN1cGVyKCB0eXBlLCBkZWZpbml0aW9uKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IFJ1bGVDb250YWluZXIsIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIGNvbnRhaW5lciwgb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHQvLyBwcm9jZXNzIHN1Yi1ydWxlc1xyXG5cdFx0dGhpcy5wcm9jZXNzUnVsZXMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBncm91cGluZyBydWxlICovXHJcblx0cHVibGljIGdldCBjc3NHcm91cFJ1bGUoKTogQ1NTR3JvdXBpbmdSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NHcm91cGluZ1J1bGU7IH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lJRFJ1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIFJ1bGVUeXBlLCBJTmFtZWRSdWxlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCI7XHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lciwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSURSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYW4gSUQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSURSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUlEUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZT86IEV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZFJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLklELCBzdHlsZSk7XHJcblxyXG5cdFx0dGhpcy5uYW1lT3ZlcnJpZGUgPSBuYW1lT3ZlcnJpZGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2VzcyggY29udGFpbmVyOiBSdWxlQ29udGFpbmVyLCBvd25lcjogSVJ1bGVDb250YWluZXJPd25lciwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBjb250YWluZXIsIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLm5hbWVPdmVycmlkZSlcclxuXHRcdFx0dGhpcy5pZE5hbWUgPSB0aGlzLm93bmVyLmdldFNjb3BlZFJ1bGVOYW1lZCggcnVsZU5hbWUpO1xyXG5cdFx0ZWxzZSBpZiAodHlwZW9mIHRoaXMubmFtZU92ZXJyaWRlID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHR0aGlzLmlkTmFtZSA9IHRoaXMubmFtZU92ZXJyaWRlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmlkTmFtZSA9IHRoaXMubmFtZU92ZXJyaWRlLm5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1bGUncyBuYW1lIC0gdGhpcyBpcyBhIHVuaXF1ZSBuYW1lIHRoYXQgaXMgYXNzaWduZWQgYnkgdGhlIE1pbWNzcyBpbmZyYXN0dWN0dXJlLiBUaGlzIG5hbWVcclxuXHQgKiBkb2Vzbid0IGhhdmUgdGhlIHByZWZpeCB0aGF0IGlzIHVzZWQgd2hlbiByZWZlcnJpbmcgdG8gY2xhc3NlcyAoLiksIElEcyAoIykgYW5kIGN1c3RvbSBDU1NcclxuXHQgKiBwcm9wZXJ0aWVzICgtLSkuXHJcblx0ICovXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmlkTmFtZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSBuYW1lIHRoYXQgaGFzIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLFxyXG5cdCAqIElEcyAoIykgYW5kIGN1c3RvbSBDU1MgcHJvcGVydGllcyAoLS0pLiBGb3IgYW5pbWF0aW9ucywgdGhpcyBuYW1lIGlzIHRoZSBzYW1lIGFzIGluIHRoZVxyXG5cdCAqIGBuYW1lYCBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc05hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwiI1wiICsgdGhpcy5pZE5hbWU7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogSURSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgSURSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdG5ld1J1bGUubmFtZU92ZXJyaWRlID0gdGhpcy5uYW1lT3ZlcnJpZGU7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2VTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gXCIjXCIgKyB0aGlzLmlkTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIElEIG9mIHRoZSBIVE1MIGVsZW1lbnQgKi9cclxuXHRwdWJsaWMgZ2V0IGlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLmlkTmFtZTsgfVxyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBlbGVtZW50IGlkZW50aWZpZXIgZm9yIGFwcGx5aW5nIHRoZSBzdHlsZXNldC5cclxuXHRwdWJsaWMgaWROYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgb3IgbmFtZWQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gY3JlYXRlIGEgbmFtZSBmb3IgdGhpcyBydWxlLiBJZiB0aGlzIHByb3BlcnR5XHJcblx0Ly8gaXMgbm90IGRlZmluZWQsIHRoZSBuYW1lIHdpbGwgYmUgdW5pcXVlbHkgZ2VuZXJhdGVkLlxyXG5cdHByaXZhdGUgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lJbXBvcnRSdWxlLCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtNZWRpYVF1ZXJ5fSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhVHlwZXNcIlxyXG5pbXBvcnQge21lZGlhUXVlcnlUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYUZ1bmNzXCI7XHJcbmltcG9ydCB7VHNzTWFuYWdlcn0gZnJvbSBcIi4uL3Njb3BlL1Rzc01hbmFnZXJcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEltcG9ydFJ1bGUgdHlwZSBkZXNjcmliZXMgYSBDU1MgQGltcG9ydCBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEltcG9ydFJ1bGUgZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUltcG9ydFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdXJsPzogc3RyaW5nLCBxdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLklNUE9SVCk7XHJcblxyXG5cdFx0dGhpcy51cmwgPSB1cmw7XHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJbXBvcnRSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgSW1wb3J0UnVsZSgpO1xyXG5cdFx0bmV3UnVsZS51cmwgPSB0aGlzLnVybDtcclxuXHRcdG5ld1J1bGUucXVlcnkgPSB0aGlzLnF1ZXJ5O1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCB1cmw7XHJcblx0XHRpZiAoIXRoaXMudXJsKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmICh0aGlzLnVybC5zdGFydHNXaXRoKFwidXJsXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCJcXFwiXCIpIHx8IHRoaXMudXJsLnN0YXJ0c1dpdGgoXCInXCIpKVxyXG5cdFx0XHR1cmwgPSB0aGlzLnVybDtcclxuXHRcdGVsc2VcclxuXHRcdFx0dXJsID0gYHVybCgke3RoaXMudXJsfSlgO1xyXG5cclxuXHRcdGxldCBxdWVyeVN0cmluZyA9ICF0aGlzLnF1ZXJ5ID8gXCJcIiA6IHR5cGVvZiB0aGlzLnF1ZXJ5ID09PSBcInN0cmluZ1wiID8gdGhpcy5xdWVyeSA6IG1lZGlhUXVlcnlUb0Nzc1N0cmluZyggdGhpcy5xdWVyeSk7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBUc3NNYW5hZ2VyLmFkZEltcG9ydFJ1bGUoIGBAaW1wb3J0ICR7dXJsfSAke3F1ZXJ5U3RyaW5nfWApO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRwdWJsaWMgZ2V0IGNzc0ltcG9ydFJ1bGUoKTogQ1NTSW1wb3J0UnVsZSB7IHJldHVybiB0aGlzLmNzc1J1bGUgYXMgQ1NTSW1wb3J0UnVsZTsgfVxyXG5cclxuXHQvLyBVUkwgdG8gaW1wb3J0IGZyb20uXHJcblx0cHVibGljIHVybDogc3RyaW5nO1xyXG5cclxuXHQvLyBPcHRpb25hbCBtZWRpYSBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBxdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJTWVkaWFSdWxlLCBJUnVsZURlZmluaXRpb25DbGFzcywgUnVsZVR5cGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7R3JvdXBSdWxlfSBmcm9tIFwiLi9Hcm91cFJ1bGVcIlxyXG5pbXBvcnQge01lZGlhUXVlcnl9IGZyb20gXCIuLi9zdHlsZXMvTWVkaWFUeXBlc1wiXHJcbmltcG9ydCB7bWVkaWFRdWVyeVRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL01lZGlhRnVuY3NcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBNZWRpYVJ1bGUgdHlwZSBkZXNjcmliZXMgYSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVkaWFSdWxlPFQgPSBhbnk+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSU1lZGlhUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeT86IHN0cmluZyB8IE1lZGlhUXVlcnksIGRlZmluaXRpb24/OiBUKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBSdWxlVHlwZS5NRURJQSwgZGVmaW5pdGlvbik7XHJcblxyXG5cdFx0dGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogTWVkaWFSdWxlPFQ+XHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgTWVkaWFSdWxlPFQ+KCk7XHJcblx0XHRuZXdSdWxlLnF1ZXJ5ID0gdGhpcy5xdWVyeTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgcXVlcnlTdHJpbmcgPSB0eXBlb2YgdGhpcy5xdWVyeSA9PT0gXCJzdHJpbmdcIiA/IHRoaXMucXVlcnkgOiBtZWRpYVF1ZXJ5VG9Dc3NTdHJpbmcoIHRoaXMucXVlcnkpO1xyXG5cclxuXHRcdGxldCBpbmRleCA9IHBhcmVudC5pbnNlcnRSdWxlKCBgQG1lZGlhICR7cXVlcnlTdHJpbmd9IHt9YCwgcGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdHRoaXMuaW5zZXJ0UnVsZXMoIHRoaXMuY3NzTWVkaWFSdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBtZWRpYSBydWxlICovXHJcblx0cHVibGljIGdldCBjc3NNZWRpYVJ1bGUoKTogQ1NTTWVkaWFSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NNZWRpYVJ1bGU7IH1cclxuXHJcblx0Ly8gbWVkaWEgcXVlcnkgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJUnVsZSwgUnVsZVR5cGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lciwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHJ1bGVzLiBBcyBhIHBhcmVudCBvZiBSdWxlQ29udGFpbmVyLCB0aGUgUnVsZVxyXG4gKiBjbGFzcyBpcyBhbHNvIGFuIGFuY2VzdG9yIGZvciBTdHlsZVNjb3BlOyBob3dldmVyLCBtb3N0IG9mIGl0cyB0aGUgZmllbGRzIGFyZSB1bmRlZmluZWQgaW5cclxuICogdGUgU3R5bGVTY29wZSBpbnN0YW5jZXMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUnVsZSBpbXBsZW1lbnRzIElSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdHlwZTogUnVsZVR5cGUpXHJcblx0e1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBjb250YWluZXI6IFJ1bGVDb250YWluZXIsIG93bmVyOiBJUnVsZUNvbnRhaW5lck93bmVyLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xyXG5cdFx0dGhpcy5ydWxlTmFtZSA9IHJ1bGVOYW1lO1xyXG5cdH1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBpcyBhIHJlYWwgQ1NTIHJ1bGUgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgdW5kZXIgdGhlIDxzdHlsZT5cclxuXHQvLyBlbGVtZW50LiBGb3IgdGhlIG1ham9yaXR5IG9mIFJ1bGUtZGVyaXZlZCBjbGFzc2VzIHRoaXMgaXMgdHJ1ZTsgaG93ZXZlciwgZm9yIHNvbWUgY2xhc3NlcyxcclxuXHQvLyBlLmcuIGZvciB0aGUgQ3VzdG9tVmFyIGNsYXNzLCB0aGlzIGlzIG5vdCBzby5cclxuXHRwdWJsaWMgZ2V0IGlzUmVhbENzc1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBjbG9uZSgpOiBSdWxlO1xyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBhYnN0cmFjdCBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0LyoqIFR5cGUgb2YgdGhlIHJ1bGUgKi9cclxuXHRwdWJsaWMgcmVhZG9ubHkgdHlwZTogUnVsZVR5cGU7XHJcblxyXG5cdC8vIFJ1bGUgY29udGFpbmVyIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLiBUaGlzIGlzIFwidGhpc1wiIGZvciBTdHlsZVNjb3BlLlxyXG5cdHB1YmxpYyBjb250YWluZXI6IFJ1bGVDb250YWluZXI7XHJcblxyXG5cdC8vIFN0eWxlIHNjb3BlIHRvIHdoaWNoIHRoaXMgcnVsZSBiZWxvbmdzLiBUaGlzIGlzIFwidGhpc1wiIGZvciBTdHlsZVNjb3BlLlxyXG5cdHB1YmxpYyBvd25lcjogSVJ1bGVDb250YWluZXJPd25lcjtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgcHJvcGVydHkgb2YgdGhlIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gdG8gd2hpY2ggdGhpcyBydWxlIHdhcyBhc3NpZ25lZC4gVGhpcyBpc1xyXG5cdC8vIG51bGwgZm9yIFN0eWxlU2NvcGUuXHJcblx0cHVibGljIHJ1bGVOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU1J1bGUtZGVyaXZlZCBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgYWN0dWFsbCBDU1MgcnVsZSBpbnNlcnRlZCBpbnRvXHJcblx0Ly8gdGhlIHN0eWxlcyBzaGVldCBvciB0aGUgcGFyZW50IHJ1bGUuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciBTdHlsZVNjb3BlIG9iamVjdHMuXHJcblx0cHVibGljIGNzc1J1bGU6IENTU1J1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtOYW1lc09mUHJvcHNPZlR5cGUsIFByb3BzT2ZUeXBlLCBJUnVsZSwgSUNsYXNzUnVsZSwgSUlEUnVsZSwgSUFuaW1hdGlvblJ1bGUsIElDdXN0b21WYXIsXHJcblx0XHRJQ3VzdG9tVmFyUnVsZSwgSVJ1bGVEZWZpbml0aW9uLCBJUnVsZURlZmluaXRpb25DbGFzcywgSVJ1bGVDb250YWluZXIsIFJ1bGVUeXBlXHJcblx0XHR9IGZyb20gXCIuL1J1bGVUeXBlc1wiXHJcbmltcG9ydCB7SVN0eWxlU2NvcGV9IGZyb20gXCIuLi9zY29wZS9TY29wZVR5cGVzXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtDbGFzc1J1bGV9IGZyb20gXCIuL0NsYXNzUnVsZVwiXHJcbmltcG9ydCB7SURSdWxlfSBmcm9tIFwiLi9JRFJ1bGVcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuL0FuaW1hdGlvblJ1bGVcIlxyXG5pbXBvcnQge0N1c3RvbVZhcn0gZnJvbSBcIi4vQ3VzdG9tVmFyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJUnVsZUNvbnRhaW5lck93bmVyIGludGVyZmFjZSByZXByZXNlbnRzIGEgc3R5bGUgc2NvcGUgdGhhdCBcIm93bnNcIiB0aGUgcnVsZXMgdW5kZXIgdGhpc1xyXG4gKiBjb250YWluZXIuIEluIHBhcnRpY3VsYXIsIHRoZSBvd25lcidzIGpvYiBpcyB0byBnZW5lcmF0ZSBcInNjb3BlZFwiIHVuaXF1ZSBuYW1lcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVDb250YWluZXJPd25lclxyXG57XHJcblx0LyoqIEFkZHMgYSBzdHlsZSBzY29wZSB0aGlzIHN0eWxlIHNjb3BlICovXHJcblx0YWRkSW1wb3J0ZWRTY29wZSggc2NvcGU6IElTdHlsZVNjb3BlKTogdm9pZDtcclxuXHJcblx0LyoqIEdlbmVyYXRlcyBhIG5hbWUsIHdoaWNoIHdpbGwgYmUgdW5pcXVlIGluIHRoaXMgc3R5bGUgc2NvcGUgKi9cclxuXHRnZXRTY29wZWRSdWxlTmFtZWQoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlQ29udGFpbmVyIGNsYXNzIHJlcHJlc2VudHMgYSBwYXJzZWQgZm9ybSBvZiBhIHJ1bGUgZGVmaW5pdGlvbiBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSdWxlQ29udGFpbmVyPFQgPSBJUnVsZURlZmluaXRpb24+IGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElSdWxlQ29udGFpbmVyPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHR5cGU6IG51bWJlciwgZGVmaW5pdGlvbjogVCB8IElSdWxlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHN1cGVyKCB0eXBlKTtcclxuXHRcdHRoaXMuZGVmaW5pdGlvbkNsYXNzID0gZGVmaW5pdGlvbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE5hbWVzIG9mIGNsYXNzZXMgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2hlZXQgKi9cclxuXHRwdWJsaWMgZ2V0IGNsYXNzZXMoKTogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUNsYXNzUnVsZT4geyByZXR1cm4gdGhpcy5fY2xhc3NlcyBhcyBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ2xhc3NSdWxlPiB9XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBjbGFzc2VzIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNoZWV0ICovXHJcblx0cHVibGljIGdldCBpZHMoKTogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUlEUnVsZT4geyByZXR1cm4gdGhpcy5faWRzIGFzIE5hbWVzT2ZQcm9wc09mVHlwZTxULElJRFJ1bGU+OyB9XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBrZXlmcmFtZXMgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2hlZXQgKi9cclxuXHRwdWJsaWMgZ2V0IGFuaW1hdGlvbnMoKTogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUFuaW1hdGlvblJ1bGU+IHsgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbnMgYXMgTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUFuaW1hdGlvblJ1bGU+OyB9XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBjdXN0b20gQ1NTIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2NvcGUgKi9cclxuXHRwdWJsaWMgZ2V0IHZhcnMoKTogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj4geyByZXR1cm4gdGhpcy5fdmFycyBhcyBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ3VzdG9tVmFyPjsgfVxyXG5cclxuXHQvKiogTWFwIG9mIGFsbCB0YWcgcnVsZXMuICovXHJcblx0cHVibGljIGdldCBydWxlcygpOiBQcm9wc09mVHlwZTxULElSdWxlPiB7IHJldHVybiB0aGlzLl9ydWxlcyBhcyBQcm9wc09mVHlwZTxULElSdWxlPjsgfVxyXG5cclxuIFx0LyoqIFRoZSBcIjpyb290XCIgYmxvY2sgd2l0aCBDU1MgY3VzdG9tIHByb3BlcnR5IGRlZmluaXRpb25zLiAqL1xyXG5cdHB1YmxpYyBnZXQgdmFyUnVsZSgpOiBJQ3VzdG9tVmFyUnVsZSB7IHJldHVybiB0aGlzLl92YXJSdWxlOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBpbnN0YW5jZSwgcGFyc2VzIGl0cyBwcm9wZXJ0aWVzIGFuZCBjcmVhdGVzIG5hbWVzIGZvclxyXG5cdC8vIGNsYXNzZXMsIElEcywgYW5pbWF0aW9ucy5cclxuXHRwcm90ZWN0ZWQgcHJvY2Vzc1J1bGVzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgZGVmaW5pdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZFxyXG5cdFx0aWYgKHRoaXMuaXNQcm9jZXNzZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLl9hbGxOYW1lcyA9IHt9O1xyXG5cdFx0dGhpcy5fY2xhc3NlcyA9IHt9O1xyXG5cdFx0dGhpcy5faWRzID0ge307XHJcblx0XHR0aGlzLl9hbmltYXRpb25zID0ge307XHJcblx0XHR0aGlzLl92YXJzID0ge307XHJcblxyXG5cdFx0dGhpcy5fcnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX2FsbFJ1bGVzID0gW107XHJcblxyXG5cdFx0Ly8gY3JlYXRlIG91ciBpbnRlcm5hbCBydWxlIGZvciBjdXN0b20gQ1NTIHByb3BlcnRpZXNcclxuXHRcdHRoaXMuX3ZhclJ1bGUgPSBuZXcgQ3VzdG9tVmFyUnVsZTxUPigpO1xyXG5cdFx0dGhpcy5fdmFyUnVsZS5wcm9jZXNzKCB0aGlzLCB0aGlzLm93bmVyLCBudWxsKVxyXG5cdFx0dGhpcy5fYWxsUnVsZXMucHVzaCggdGhpcy5fdmFyUnVsZSk7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGluc3RhbmNlIG9mIHRoZSBydWxlcyBkZWZpbml0aW9uIGNsYXNzIGFuZCB0aGVuIGdvIG92ZXIgaXRzIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3aGljaCBkZWZpbmUgQ1NTIHJ1bGVzLlxyXG5cdFx0bGV0IHJ1bGVzRGVmOiBJUnVsZURlZmluaXRpb247XHJcblx0XHRpZiAodHlwZW9mIHRoaXMuZGVmaW5pdGlvbkNsYXNzID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHR7XHJcblx0XHRcdHRyeVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY3JlYXRlIGluc3RhbmNlIG9mIHRoZSBydWxlcyBkZWZpbml0aW9uIGNsYXNzXHJcblx0XHRcdFx0cnVsZXNEZWYgPSBuZXcgKHRoaXMuZGVmaW5pdGlvbkNsYXNzIGFzIElSdWxlRGVmaW5pdGlvbkNsYXNzPElSdWxlRGVmaW5pdGlvbj4pKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2F0Y2goIGVycilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBpbnN0YW50aWF0aW5nIFJ1bGUgRGVmaW5pdGlvbiBvZiB0eXBlICcke3RoaXMuZGVmaW5pdGlvbkNsYXNzLm5hbWV9J2ApO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0XHRydWxlc0RlZiA9IHRoaXMuZGVmaW5pdGlvbkNsYXNzO1xyXG5cclxuXHRcdC8vIHByb2Nlc3MgcnVsZXMgdGhhdCBhcmUgYXNzaWduZWQgdG8gdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gY2xhc3NcclxuXHRcdHRoaXMucHJvY2Vzc05hbWVkUnVsZXMoIHJ1bGVzRGVmKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBpbnN0YW5jZSwgcGFyc2VzIGl0cyBwcm9wZXJ0aWVzIGFuZCBjcmVhdGVzIG5hbWVzIGZvclxyXG5cdC8vIGNsYXNzZXMsIElEcywgYW5pbWF0aW9ucy5cclxuXHRwcml2YXRlIHByb2Nlc3NOYW1lZFJ1bGVzKCBydWxlc0RlZjogSVJ1bGVEZWZpbml0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhvc2UgdGhhdCBhcmUgcnVsZXMuXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBydWxlc0RlZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHByb3BOYW1lID09PSBcIiR1bm5hbWVkXCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbCA9IHJ1bGVzRGVmLiR1bm5hbWVkO1xyXG5cdFx0XHRcdHRoaXMucHJvY2Vzc1VubmFtZWRSdWxlcyggcHJvcFZhbCBhcyBSdWxlW10pXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGxldCBwcm9wVmFsID0gcnVsZXNEZWZbcHJvcE5hbWVdO1xyXG5cdFx0XHRpZiAoIShwcm9wVmFsIGluc3RhbmNlb2YgUnVsZSkpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRsZXQgcnVsZU5hbWUgPSBwcm9wTmFtZTtcclxuXHRcdFx0bGV0IHJ1bGUgPSBwcm9wVmFsIGFzIFJ1bGU7XHJcblxyXG5cdFx0XHQvLyBTY29wZVN0eWxlIGRlcml2ZXMgZnJvbSBSdWxlICh2aWEgUnVsZUNvbnRhaW5lcik7IGhvd2V2ZXIsIGl0IGlzIG5vdCBhIHJlYWwgcnVsZS5cclxuXHRcdFx0Ly8gV2UgaW5mb3JtIG91ciBvd25lciBzdHlsZSBzY29wZSBhYm91dCB0aGUgXCJpbXBvcnRlZFwiIHNjb3BlIHNvIHRoYXQgd2hlbiB0aGUgb3duZXJcclxuXHRcdFx0Ly8gc2NvcGUgaXMgYWN0aXZhdGVkLCB0aGUgaW1wb3J0ZWQgb25lIGlzIGFjdGl2YXRlZCB0b28uXHJcblx0XHRcdGlmIChydWxlLnR5cGUgPT09IFJ1bGVUeXBlLlNDT1BFKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5vd25lci5hZGRJbXBvcnRlZFNjb3BlKCBydWxlIGFzIGFueSBhcyBJU3R5bGVTY29wZSk7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGUgc2NvcGUsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHNjb3BlLlxyXG5cdFx0XHRpZiAocnVsZS5vd25lcilcclxuXHRcdFx0XHRydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0cnVsZS5wcm9jZXNzKCB0aGlzLCB0aGlzLm93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0XHQvLyByZW1lbWJlciByZWFsIHJ1bGVzXHJcblx0XHRcdGlmIChydWxlLmlzUmVhbENzc1J1bGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9ydWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHRcdHRoaXMuX2FsbFJ1bGVzLnB1c2goIHJ1bGUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBwdXQgcnVsZXMgYW5kIHRoZWlyIG5hbWVzIGludG8gYnVja2V0c1xyXG5cdFx0XHRpZiAocnVsZSBpbnN0YW5jZW9mIENsYXNzUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX2FsbE5hbWVzW3J1bGVOYW1lXSA9IHJ1bGUuY2xhc3NOYW1lO1xyXG5cdFx0XHRcdHRoaXMuX2NsYXNzZXNbcnVsZU5hbWVdID0gcnVsZS5jbGFzc05hbWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIElEUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX2FsbE5hbWVzW3J1bGVOYW1lXSA9IHJ1bGUuaWROYW1lO1xyXG5cdFx0XHRcdHRoaXMuX2lkc1tydWxlTmFtZV0gPSBydWxlLmlkTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgQW5pbWF0aW9uUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX2FsbE5hbWVzW3J1bGVOYW1lXSA9IHJ1bGUuYW5pbWF0aW9uTmFtZTtcclxuXHRcdFx0XHR0aGlzLl9hbmltYXRpb25zW3J1bGVOYW1lXSA9IHJ1bGUuYW5pbWF0aW9uTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgQ3VzdG9tVmFyKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fYWxsTmFtZXNbcnVsZU5hbWVdID0gcnVsZS52YXJOYW1lO1xyXG5cdFx0XHRcdHRoaXMuX3ZhcnNbcnVsZU5hbWVdID0gcnVsZS52YXJOYW1lO1xyXG5cdFx0XHRcdHRoaXMuX3ZhclJ1bGUuX3ZhcnNbcnVsZU5hbWVdID0gcnVsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGluc3RhbmNlLCBwYXJzZXMgaXRzIHByb3BlcnRpZXMgYW5kIGNyZWF0ZXMgbmFtZXMgZm9yXHJcblx0Ly8gY2xhc3NlcywgSURzLCBhbmltYXRpb25zLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1VubmFtZWRSdWxlcyggcnVsZXM6IFJ1bGVbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXJ1bGVzIHx8IHJ1bGVzLmxlbmd0aCA9PT0gMClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhvc2UgdGhhdCBhcmUgcnVsZXMuXHJcblx0XHRmb3IoIGxldCBydWxlIG9mIHJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBTY29wZVN0eWxlIGRlcml2ZXMgZnJvbSBSdWxlICh2aWEgUnVsZUNvbnRhaW5lcik7IGhvd2V2ZXIsIGl0IGlzIG5vdCBhIHJlYWwgcnVsZS5cclxuXHRcdFx0Ly8gV2UgaW5mb3JtIG91ciBvd25lciBzdHlsZSBzY29wZSBhYm91dCB0aGUgXCJpbXBvcnRlZFwiIHNjb3BlIHNvIHRoYXQgd2hlbiB0aGUgb3duZXJcclxuXHRcdFx0Ly8gc2NvcGUgaXMgYWN0aXZhdGVkLCB0aGUgaW1wb3J0ZWQgb25lIGlzIGFjdGl2YXRlZCB0b28uXHJcblx0XHRcdGlmIChydWxlLnR5cGUgPT09IFJ1bGVUeXBlLlNDT1BFKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5vd25lci5hZGRJbXBvcnRlZFNjb3BlKCBydWxlIGFzIGFueSBhcyBJU3R5bGVTY29wZSk7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGUgc2NvcGUsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHNjb3BlLlxyXG5cdFx0XHRpZiAocnVsZS5vd25lcilcclxuXHRcdFx0XHRydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0cnVsZS5wcm9jZXNzKCB0aGlzLCB0aGlzLm93bmVyLCBudWxsKTtcclxuXHJcblx0XHRcdHRoaXMuX2FsbFJ1bGVzLnB1c2goIHJ1bGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHJvdGVjdGVkIGNvcHlGcm9tKCBzcmM6IFJ1bGVDb250YWluZXIpOiB2b2lkXHJcblx0e1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIGFsbCBydWxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyIHRvIGVpdGhlciB0aGUgc3R5bGUgc2hlZXQgb3IgZ3JvdXBpbmcgcnVsZS5cclxuXHRwcm90ZWN0ZWQgaW5zZXJ0UnVsZXMoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRmb3IoIGxldCBydWxlIG9mIHRoaXMuX2FsbFJ1bGVzKVxyXG5cdFx0XHRydWxlLmluc2VydCggcGFyZW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGVscGVyIHByb3BlcnRpZXNcclxuXHRwdWJsaWMgZ2V0IGlzUHJvY2Vzc2VkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLl9ydWxlczsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENsYXNzIHRoYXQgZGVmaW5lZCB0aGlzIHN0eWxlIHNjb3BlLiBUaGlzIG1lbWJlciBpcyB1c2VkIGZvciBzdHlsZSBzY29wZSBkZXJpdmF0aW9uXHJcblx0cHJvdGVjdGVkIHJlYWRvbmx5IGRlZmluaXRpb25DbGFzczogSVJ1bGVEZWZpbml0aW9uQ2xhc3M8VD4gfCBUO1xyXG5cclxuXHQvLyBOYW1lcyBvZiBhbGwgY2xhc3NlcywgSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gcHJvcGVydGllcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLlxyXG5cdHByb3RlY3RlZCBfYWxsTmFtZXM6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuXHQvLyBOYW1lcyBvZiBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhpcyBjb250YWluZXIuIFRoZVxyXG5cdC8vIGtleXMgYXJlIHByb3BlcnR5IG5hbWVzIHVzZWQgaW4gdGhlIHJ1bGUgZGVmaW5pdGlvbjsgdGhlIHZhbHVlcyBhcmUgdGhlIGFjdHVhbCBuYW1lc1xyXG5cdC8vIHRoYXQgd2lsbCBiZSBpbnNlcnRlZCBpbnRvIHRoZSBhY3R1YWwgc3R5bGUgc2hlZXQuXHJcblx0cHJvdGVjdGVkIF9jbGFzc2VzOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHRwcm90ZWN0ZWQgX2lkczogeyBbSzogc3RyaW5nXTogc3RyaW5nIH07XHJcblx0cHJvdGVjdGVkIF9hbmltYXRpb25zOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHRwcm90ZWN0ZWQgX3ZhcnM6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuXHQvLyBNYXAgb2YgbmFtZXMgb2YgcHJvcGVydGllcyBvZiB0aGUgcnVsZSBkZWZpbml0aW9ucyB0byB0aGUgUnVsZSBvYmplY3RzLlxyXG5cdHByb3RlY3RlZCBfcnVsZXM6IHsgW0s6IHN0cmluZ106IElSdWxlIH07XHJcblxyXG5cdC8vIFJ1bGUgdGhhdCBjb21iaW5lcyBhbGwgY3VzdG9tIHZhcmlhYmxlcyBkZWZpbmVkIGluIHRoaXMgY29udGFpbmVyLlxyXG5cdHByb3RlY3RlZCBfdmFyUnVsZTogQ3VzdG9tVmFyUnVsZTtcclxuXHJcblx0Ly8gTGlzdCBvZiBhbGwgcnVsZXNcclxuXHRwdWJsaWMgX2FsbFJ1bGVzOiBSdWxlW107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDdXN0b21WYXJSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSA6cm9vdCBydWxlIHRoYXQgaXMgdXNlZCBmb3IgZGVmaW5pbmcgY3VzdG9tIENTUyBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuY2xhc3MgQ3VzdG9tVmFyUnVsZTxUID0gYW55PiBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJQ3VzdG9tVmFyUnVsZTxUPlxyXG57XHJcblx0Y29uc3RydWN0b3IoKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBDU1NSdWxlLlNUWUxFX1JVTEUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuIFx0LyoqIFRoZSBcIjpyb290XCIgYmxvY2sgd2l0aCBDU1MgY3VzdG9tIHByb3BlcnR5IGRlZmluaXRpb25zLiAqL1xyXG5cdHB1YmxpYyBnZXQgdmFycygpOiBQcm9wc09mVHlwZTxULElDdXN0b21WYXI+IHsgcmV0dXJuIHRoaXMuX3ZhcnMgYXMgUHJvcHNPZlR5cGU8VCxJQ3VzdG9tVmFyPjsgfVxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogUnVsZUNvbnRhaW5lciwgb3duZXI6IElSdWxlQ29udGFpbmVyT3duZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lciwgcnVsZU5hbWUpO1xyXG5cdFx0dGhpcy5fdmFycyA9IHt9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogUnVsZVxyXG5cdHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgdmFyTmFtZXMgPSBPYmplY3Qua2V5cyggdGhpcy5fdmFycyk7XHJcblx0XHRpZiAodmFyTmFtZXMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHMgPSBgOnJvb3QgeyR7dmFyTmFtZXMubWFwKCAodmFyTmFtZSkgPT4gdGhpcy5fdmFyc1t2YXJOYW1lXS50b0Nzc1N0cmluZygpKS5qb2luKFwiO1wiKX19YDtcclxuXHRcdGxldCBpbmRleCA9IHBhcmVudC5pbnNlcnRSdWxlKCBzLCBwYXJlbnQuY3NzUnVsZXMubGVuZ3RoKTtcclxuXHRcdHRoaXMuY3NzUnVsZSA9IHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBfdmFyczp7IFtLOiBzdHJpbmddOiBDdXN0b21WYXI8YW55PiB9O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBkZWZpbmVzIHR5cGVzIG9mIG9iamVjdCB0aGF0IHJlcHJlc2VudCBDU1MgcnVsZXMuXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCB7U3R5bGVzZXQsIFB1cmVTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZVR5cGVzXCI7XHJcblxyXG5cclxuLyoqIFV0aWxpdHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgYWxsIHByb3BlcnRpZXMgb2YgdHlwZSBUIHRoYXQgYXJlIG9mIHR5cGUgVSAqL1xyXG50eXBlIFByb3BzT2ZUeXBlT3JOZXZlcjxULFU+ID0geyBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIFUgPyBLIDogbmV2ZXIgfTtcclxuXHJcbi8qKiBVdGlsaXR5IHR5cGUgdGhhdCByZXByZXNlbnRzIG5hbWVzIG9mIGFsbCBwcm9wZXJ0aWVzIG9mIHR5cGUgVCB0aGF0IGFyZSBvZiB0eXBlIFUgKi9cclxudHlwZSBQcm9wTmFtZXNPZlR5cGU8VCxVPiA9IFByb3BzT2ZUeXBlT3JOZXZlcjxULFU+W2tleW9mIFRdO1xyXG5cclxuLyoqIFV0aWxpdHkgdHlwZSB0aGF0IHJlcHJlc2VudHMgc3RyaW5nIHZhbHVlcyBtYXBwZWQgdG8gbmFtZXMgb2YgcHJvcGVydGllcyBvZiB0eXBlIFQgdGhhdCBhcmUgb2YgdHlwZSBVLiAqL1xyXG5leHBvcnQgdHlwZSBOYW1lc09mUHJvcHNPZlR5cGU8VCxVPiA9IHsgW0sgaW4gUHJvcE5hbWVzT2ZUeXBlPFQsVT5dOiBzdHJpbmcgfTtcclxuXHJcbi8qKiBUeXBlIHRoYXQgcmVwcmVzZW50cyBhbGwgcHJvcGVydGllcyBvZiB0eXBlIFQgdGhhdCBhcmUgb2YgdHlwZSBVICovXHJcbmV4cG9ydCB0eXBlIFByb3BzT2ZUeXBlPFQsVT4gPSB7IFtLIGluIFByb3BOYW1lc09mVHlwZTxULFU+XTogVFtLXSB9O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIEV4dGVuZGVkU3R5bGVzZXQgdHlwZSBleHRlbmRzIHRoZSBTdHlsZXNldCB0eXBlIHdpdGggY2VydGFpbiBwcm9wZXJ0aWVzIHRoYXQgcHJvdmlkZVxyXG4gKiBhZGRpdGlvbmFsIG1lYW5pbmcgdG8gdGhlIHN0eWxlc2V0OlxyXG4gKiAtIFRoZSBgJGV4dGVuZHNgIHByb3BlcnR5IHNwZWNpZmllcyBvbmUgb3IgbW9yZSBwYXJlbnQgc3R5bGUgcnVsZXMuIFRoaXMgYWxsb3dzIHNwZWNpZnlpbmdcclxuICogICBwYXJlbnQgcnVsZXMgdXNpbmcgYSBjb252ZW5pZW50IHN0eWxlLXByb3BlcnR5LWxpa2Ugbm90YXRpb24uIFBhcmVudHMgY2FuIGFsc28gYmUgc3BlY2lmaWVkXHJcbiAqICAgd2l0aG91dCBhIHN0eWxlc2V0LlxyXG4gKiAtIFRoZSBgJGltcG9ydGFudGAgcHJvcGVydHkgc3BlY2lmaWVzIG9uZSBvciBtb3JlIG5hbWVzIG9mIHN0eWxlc2V0IHByb3BlcnRpZXMgdGhhdCBzaHVsZCBiZVxyXG4gKiAgIGNvbnNpZGVyZWQgXCJpbXBvcnRhbnRcIi4gV2hlbiB0aGUgcnVsZSBpcyBpbnNlcnRlZCBpbnRvIERPTSwgdGhlIFwiIWltcG9ydGFudFwiIGF0dHJpYnV0ZSBpc1xyXG4gKiAgIGFkZGVkIHRvIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkU3R5bGVzZXQgPVxyXG5cdChTdHlsZXNldCAmXHJcblx0XHR7XHJcblx0XHRcdCRleHRlbmRzPzogSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSxcclxuXHRcdFx0JGltcG9ydGFudD86IGtleW9mIFB1cmVTdHlsZXNldCB8IChrZXlvZiBQdXJlU3R5bGVzZXQpW10sXHJcblx0XHR9XHJcblx0KSB8IElTdHlsZVJ1bGUgfCBJU3R5bGVSdWxlW107XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBSdWxlVHlwZSBlbnVtZXJhdGlvbiBsaXN0cyB0eXBlcyBvZiBydWxlcyB0aGF0IE1pbWNzcyBsaWJyYXJ5IHdvcmtzIHdpdGguXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBSdWxlVHlwZVxyXG57XHJcbiAgICBUQUcgPSAxLFxyXG4gICAgQ0xBU1MsXHJcbiAgICBJRCxcclxuICAgIFNFTEVDVE9SLFxyXG4gICAgQU5JTUFUSU9OLFxyXG4gICAgS0VZRlJBTUUsXHJcbiAgICBTVVBQT1JUUyxcclxuICAgIE1FRElBLFxyXG4gICAgRk9OVEZBQ0UsXHJcbiAgICBJTVBPUlQsXHJcbiAgICBOQU1FU1BBQ0UsXHJcbiAgICBQQUdFLFxyXG4gICAgVklFV1BPUlQsXHJcblxyXG5cdC8vIG5vdCByZWFsIHJ1bGVzIGJ1dCBkZXJpdmUgZnJvbSB0aGUgUnVsZSBvYmplY3RcclxuICAgIFZBUiA9IDUwLFxyXG4gICAgU0NPUEUgPSA1MSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIHRoYXQgaXMgaW1wbGVtZW50ZWQgYnkgYWxsIHJ1bGVzLiBJdHMgb25seSBwdXJwb3NlIGlzIHRvXHJcbiAqIHByb3ZpZGUgdGhlIHJlZmVyZW5jZSB0byB0aGUgc3R5bGUgc2NvcGUgdGhhdCBvd25zIGl0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZVxyXG57XHJcblx0LyoqXHJcblx0ICogTmFtZSBvZiB0aGUgcHJvcGVydHkgb24gdGhlIHJ1bGUgZGVmaW5pdGlvbiBvYmplY3QgdG8gd2hpY2ggdGhpcyBydWxlIGlzIGFzc2lnbmVkLlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IHJ1bGVOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBUeXBlIG9mIHRoZSBydWxlICovXHJcblx0cmVhZG9ubHkgdHlwZTogUnVsZVR5cGU7XHJcblxyXG5cdC8qKiBTT00gcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc1J1bGU6IENTU1J1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJTmFtZWRSdWxlIGludGVyZmFjZSBpcyBhIGJhc2UgaW50ZXJmYWNlIGltcGxlbWVudGVkIGJ5IGFsbCBydWxlcyB0aGF0IGhhdmUgYSBuYW1lOyB0aGF0IGlzLFxyXG4gKiBjbGFzcywgSUQsIGFuaW1hdGlvbiBhbmQgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5hbWVkUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKipcclxuXHQgKiBSdWxlJ3MgbmFtZSAtIHRoaXMgaXMgYSB1bmlxdWUgbmFtZSB0aGF0IGlzIGFzc2lnbmVkIGJ5IHRoZSBNaW1jc3MgaW5mcmFzdHVjdHVyZS4gVGhpcyBuYW1lXHJcblx0ICogZG9lc24ndCBoYXZlIHRoZSBwcmVmaXggdGhhdCBpcyB1c2VkIHdoZW4gcmVmZXJyaW5nIHRvIGNsYXNzZXMgKC4pLCBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydGllcyAoLS0pLlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuXHJcblx0LyoqXHJcblx0ICogUnVsZSdzIG5hbWUgLSB0aGlzIGlzIGEgbmFtZSB0aGF0IGhhcyB0aGUgcHJlZml4IHRoYXQgaXMgdXNlZCB3aGVuIHJlZmVycmluZyB0byBjbGFzc2VzICguKSxcclxuXHQgKiBJRHMgKCMpIGFuZCBjdXN0b20gQ1NTIHByb3BlcnRpZXMgKC0tKS4gRm9yIGFuaW1hdGlvbnMsIHRoaXMgbmFtZSBpcyB0aGUgc2FtZSBhcyBpbiB0aGVcclxuXHQgKiBgbmFtZWAgcHJvcGVydHkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgY3NzTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSVN0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxpbmcgcnVsZSBpbiBhIHN0eWxlIHNoZWV0LiBTdHlsZSBydWxlcyBjYW4gYmUgdXNlZFxyXG4gKiBhbnl3aGVyZSB3aGVyZSBzdHlsZSBwcm9wZXJ0aWVzIGNhbiBiZSBkZWZpbmVkOiBjbGFzcyBydWxlcywgSUQgcnVsZXMsIHNlbGVjdG9yIHJ1bGVzLFxyXG4gKiBrZXlmcmFtZXMsIGV0Yy4gU3R5bGVSdWxlIGRlZmluZXMgYSBzdHlsZXNldCBhbmQgY2FuIG9wdGlvbmFsbHkgcG9pbnQgdG8gb25lIG9yIG1vcmUgc3R5bGUgcnVsZXNcclxuICogZnJvbSB3aGljaCBpdCBpbmhlcml0cy4gQSBzdHlsZXNldCBjb21iaW5lcyBhbGwgdGhlIHByb3BlcnRpZXMgZnJvbSBpdHMgb3duIHByb3BlcnR5IGJsb2NrIGFzXHJcbiAqIHdlbGwgYXMgZnJvbSBhbGwgb2Ygc3R5bGUgcnVsZXMgaXQgaW5oZXJpdGVzIGZyb20uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzU3R5bGVSdWxlOiBDU1NTdHlsZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJVGFnUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSB0YWcgbmFtZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRhZ1J1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgSFRNTCB0YWcgKi9cclxuXHRyZWFkb25seSB0YWc6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDbGFzc1J1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc1J1bGUgZXh0ZW5kcyBJU3R5bGVSdWxlLCBJTmFtZWRSdWxlXHJcbntcclxuXHQvKiogTmFtZSBvZiB0aGUgQ1NTIGNsYXNzICovXHJcblx0cmVhZG9ubHkgY2xhc3M6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJRFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHNhIGEgc3R5bGUgcnVsZSB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhbiBJRC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUlEUnVsZSBleHRlbmRzIElTdHlsZVJ1bGUsIElOYW1lZFJ1bGVcclxue1xyXG5cdC8qKiBJRCBvZiB0aGUgSFRNTCBlbGVtZW50ICovXHJcblx0cmVhZG9ubHkgaWQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZWxlY3RvclJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHNhIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZXMgYnkgdGhlXHJcbiAqIGdpdmVuIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0b3JSdWxlIGV4dGVuZHMgSVN0eWxlUnVsZVxyXG57XHJcblx0LyoqIENTUyBydWxlIHNlbGVjdG9yIHN0cmluZyAqL1xyXG5cdHJlYWRvbmx5IHNlbGVjdG9yVGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUFuaW1hdGlvblJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBAa2V5ZnJhbWVzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElBbmltYXRpb25SdWxlIGV4dGVuZHMgSU5hbWVkUnVsZVxyXG57XHJcblx0LyoqIFNPTSBrZXlmcmFtZXMgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc0tleWZyYW1lc1J1bGU6IENTU0tleWZyYW1lc1J1bGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgS2V5ZnJhbWUgdHlwZSBkZWZpbmVzIGEgc2luZ2xlIGtleWZyYW1lIHdpdGhpbiBhIEBrZXlmcmFtZXMgcnVsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEtleWZyYW1lID0gW1wiZnJvbVwiIHwgXCJ0b1wiIHwgbnVtYmVyLCBFeHRlbmRlZFN0eWxlc2V0XTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJR3JvdXBSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGdyb3VwaW5nIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElHcm91cFJ1bGU8VCA9IGFueT4gZXh0ZW5kcyBJUnVsZUNvbnRhaW5lcjxUPlxyXG57XHJcblx0LyoqIFNPTSBncm91cGluZyBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzR3JvdXBSdWxlOiBDU1NHcm91cGluZ1J1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3VwcG9ydFJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgQHN1cHBvcnRzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdXBwb3J0c1J1bGU8VCA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIHN1cHBvcnRzIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NTdXBwb3J0c1J1bGU6IENTU1N1cHBvcnRzUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElNZWRpYVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBDU1MgQG1lZGlhIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNZWRpYVJ1bGU8VCA9IGFueT4gZXh0ZW5kcyBJR3JvdXBSdWxlPFQ+XHJcbntcclxuXHQvKiogU09NIG1lZGlhIHJ1bGUgKi9cclxuXHRyZWFkb25seSBjc3NNZWRpYVJ1bGU6IENTU01lZGlhUnVsZTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElJbXBvcnRSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIEBpbXBvcnQgcnVsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltcG9ydFJ1bGUgZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIFNPTSBpbXBvcnQgcnVsZSAqL1xyXG5cdHJlYWRvbmx5IGNzc0ltcG9ydFJ1bGU6IENTU0ltcG9ydFJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJRm9udEZhY2VSdWxlIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIEBmb250LWZhY2UgcnVsZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZvbnRGYWNlUnVsZSBleHRlbmRzIElSdWxlXHJcbntcclxuXHQvKiogU09NIGZvbnQtZmFjZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzRm9udEZhY2VSdWxlOiBDU1NGb250RmFjZVJ1bGU7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tVmFyIGludGVyZmFjZSByZXByZXNlbnRzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWZpbml0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFyPEsgZXh0ZW5kcyBrZXlvZiBQdXJlU3R5bGVzZXQgPSBhbnk+IGV4dGVuZHMgSU5hbWVkUnVsZVxyXG57XHJcblx0LyoqXHJcblx0ICogTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5XHJcblx0ICogdmFsdWUuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgdGVtcGxhdGVQcm9wTmFtZTogSztcclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIENTUyBjdXN0b20gcHJvcGVydHkgKi9cclxuXHRyZWFkb25seSB2YXJOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJQ3VzdG9tVmFyUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIFwiOnJvb3RcIiBibG9jayB3aXRoIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21WYXJSdWxlPFQgPSBhbnk+IGV4dGVuZHMgSVJ1bGVcclxue1xyXG5cdC8qKiBNYXAgb2YgY3VzdG9tIHByb3BlcnR5IG5hbWVzIHRvIHByb3BlcnR5IGRlZmluaXRpb25zICovXHJcblx0cmVhZG9ubHkgdmFyczogUHJvcHNPZlR5cGU8VCxJQ3VzdG9tVmFyPjtcclxuXHJcblx0LyoqIFNPTSBzdHlsZSBydWxlICovXHJcblx0cmVhZG9ubHkgY3NzU3R5bGVSdWxlPzogQ1NTU3R5bGVSdWxlO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUN1c3RvbVZhbCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGN1c3RvbSBDU1MgcHJvcGVydHkgbmFtZSBhbmQgdmFsdWUgdGhhdCBjYW4gYmUgdXNlZCB0b1xyXG4gKiBkZWZpbmUgY3VzdG9tIHByb3BlcnRpZXMgaW4gdGhlIFN0eWxlc2V0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tVmFsPEsgZXh0ZW5kcyBrZXlvZiBQdXJlU3R5bGVzZXQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBFaXRoZXIgbmFtZSBvZiBhIGN1c3RvbSBDU1MgcHJvcGVydHkgb3IgYSBJQ3VzdG9tVmFyIG9iamVjdCByZXByZXNlbnRpbmcgYSBjdXN0b20gQ1NTXHJcblx0ICogcHJvcGVydHkuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgdmFyRGVmOiBzdHJpbmcgfCBJQ3VzdG9tVmFyPEs+O1xyXG5cclxuXHQvKipcclxuXHQgKiBOYW1lIG9mIGEgbm9uLWN1c3RvbSBDU1MgcHJvcGVydHkgd2hvc2UgdHlwZSBkZXRlcm1pbmVzIHRoZSB0eXBlIG9mIHRoZSBjdXN0b20gcHJvcGVydHlcclxuXHQgKiB2YWx1ZS4gVGhpcyBwcm9wZXJ0eSBtYXkgYmUgdW5kZWZpbmVkIGlmIHRoZSBgdmFyRGVmYCBwcm9wZXJ0eSBwb2ludHMgdG8gdGhlIElDdXN0b21WYXJcclxuXHQgKiBvYmplY3QsIHNpbmNlIHRoZSBsYXR0ZXIgYWxyZWFkeSBoYXMgdGhlIHRlbXBsYXRlIHByb3BlcnR5IG5hbWUgZGVmaW5lZC5cclxuXHQgKi9cclxuXHRyZWFkb25seSB0ZW1wbGF0ZVByb3BOYW1lPzogSztcclxuXHJcblx0LyoqIFZhbHVlIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LiAqL1xyXG5cdHJlYWRvbmx5IHZhclZhbHVlOiBQdXJlU3R5bGVzZXRbS107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgdGhhdCBjb21iaW5lcyBpbnRlcmZhY2VzIG9mIHJ1bGVzIHRoYXQgaGF2ZSBuYW1lczsgYXVjaCBydWxlcyBoYXZlIHRvIGJlIGFzc2lnbmVkIHRvIGFcclxuICogbWVtYmVyIHByb3BlcnR5IGFuZCBjYW5ub3QgYmUgYmUgY3JlYXRlZCBieSB0aGUgYWRkVW5uYW1lZFJVbGVzIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIE5hbWVkUnVsZSA9IElOYW1lZFJ1bGU7XHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGNvbWJpbmVzIGludGVyZmFjZXMgb2YgcnVsZXMgdGhhdCBkb24ndCBoYXZlIG5hbWVzOyB0aGF0IGlzLCB0aGV5IGRvbid0IGhhdmUgdG8gYmVcclxuICogYXNzaWduZWQgdG8gYSBtZW1iZXIgcHJvcGVydHkgYW5kIG1heSBiZSBjcmVhdGVkIGJ5IHRoZSBhZGRVbm5hbWVkUlVsZXMgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVW5uYW1lZFJ1bGUgPSBJVGFnUnVsZSB8IElTZWxlY3RvclJ1bGUgfCBJR3JvdXBSdWxlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElSdWxlQ29udGFpbmVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIENTUyBydWxlcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJ1bGVDb250YWluZXI8VCA9IElSdWxlRGVmaW5pdGlvbj4gZXh0ZW5kcyBJUnVsZVxyXG57XHJcblx0LyoqIE5hbWVzIG9mIGNsYXNzZXMuICovXHJcblx0cmVhZG9ubHkgY2xhc3NlczogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUNsYXNzUnVsZT47XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBlbGVtZW50IGlkZW50aWZpZXJzLiAqL1xyXG5cdHJlYWRvbmx5IGlkczogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUlEUnVsZT47XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBhbmltYXRpb25zLiAqL1xyXG5cdHJlYWRvbmx5IGFuaW1hdGlvbnM6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElBbmltYXRpb25SdWxlPjtcclxuXHJcblx0LyoqIE5hbWVzIG9mIGN1c3RvbSBDU1MgcHJvcGVydGllcyAqL1xyXG5cdHJlYWRvbmx5IHZhcnM6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElDdXN0b21WYXI+O1xyXG5cclxuXHQvKiogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHJ1bGUgb2JqZWN0cy4gKi9cclxuXHRyZWFkb25seSBydWxlczogUHJvcHNPZlR5cGU8VCxJUnVsZT47XHJcblxyXG5cdC8qKiBSdWxlIHRoYXQgY29tYmluZXMgYWxsIGN1c3RvbSB2YXJpYWJsZXMgZGVmaW5lZCBpbiB0aGlzIGNvbnRhaW5lci4gKi9cclxuXHRyZWFkb25seSB2YXJSdWxlOiBJQ3VzdG9tVmFyUnVsZTxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogXCJDb25zdHJ1Y3RvclwiIGludGVyZmFjZSBkZWZpbmluZyBob3cgcnVsZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSdWxlRGVmaW5pdGlvblxyXG57XHJcblx0LyoqIEFycmF5IG9mIHVubmFtZWQgcnVsZXMgKi9cclxuXHQkdW5uYW1lZD86IElSdWxlW107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFwiQ29uc3RydWN0b3JcIiBpbnRlcmZhY2UgZGVmaW5pbmcgaG93IHJ1bGUgZGVmaW5pdGlvbiBjbGFzc2VzIGNhbiBiZSBjcmVhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUnVsZURlZmluaXRpb25DbGFzczxUIGV4dGVuZHMgSVJ1bGVEZWZpbml0aW9uPlxyXG57XHJcblx0LyoqIEFsbCBydWxlIGRlZmluaXRpb24gY2xhc3NlcyBzaG91bGQgY29uZm9ybSB0byB0aGlzIGNvbnN0cnVjdG9yICovXHJcblx0bmV3KCk6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuaW1wb3J0IHtUYWdSdWxlfSBmcm9tIFwiLi9UYWdSdWxlXCJcclxuaW1wb3J0IHtDbGFzc1J1bGV9IGZyb20gXCIuL0NsYXNzUnVsZVwiXHJcbmltcG9ydCB7SURSdWxlfSBmcm9tIFwiLi9JRFJ1bGVcIlxyXG5pbXBvcnQge1NlbGVjdG9yVHlwZX0gZnJvbSBcIi4uL2hlbHBlcnMvU2VsZWN0b3JUeXBlc1wiXHJcbmltcG9ydCB7U2VsZWN0b3JSdWxlfSBmcm9tIFwiLi9TZWxlY3RvclJ1bGVcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuL0FuaW1hdGlvblJ1bGVcIlxyXG5pbXBvcnQge0N1c3RvbVZhcn0gZnJvbSBcIi4vQ3VzdG9tVmFyXCJcclxuaW1wb3J0IHtTdXBwb3J0c1J1bGV9IGZyb20gXCIuL1N1cHBvcnRzUnVsZVwiXHJcbmltcG9ydCB7TWVkaWFRdWVyeX0gZnJvbSBcIi4uL3N0eWxlcy9NZWRpYVR5cGVzXCJcclxuaW1wb3J0IHtNZWRpYVJ1bGV9IGZyb20gXCIuL01lZGlhUnVsZVwiXHJcbmltcG9ydCB7SW1wb3J0UnVsZX0gZnJvbSBcIi4vSW1wb3J0UnVsZVwiXHJcbmltcG9ydCB7Rm9udGZhY2V9IGZyb20gXCIuLi9zdHlsZXMvRm9udEZhY2VUeXBlc1wiO1xyXG5pbXBvcnQge0ZvbnRGYWNlUnVsZX0gZnJvbSBcIi4vRm9udEZhY2VSdWxlXCJcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgbmV3IFRhZ1J1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHRhZyggdGFnTmFtZTogc3RyaW5nLCBzdHlsZTogRXh0ZW5kZWRTdHlsZXNldCk6IElUYWdSdWxlXHJcblx0eyByZXR1cm4gbmV3IFRhZ1J1bGUoIHRhZ05hbWUsIHN0eWxlKTsgfVxyXG5cclxuLyoqIFJldHVybnMgbmV3IENsYXNzUnVsZSBvYmplY3QgICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY2xhc3MoIHN0eWxlOiBFeHRlbmRlZFN0eWxlc2V0LCBuYW1lT3ZlcnJpZGU/OiBzdHJpbmcgfCBJTmFtZWRSdWxlKTogSUNsYXNzUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBDbGFzc1J1bGUoIHN0eWxlLCBuYW1lT3ZlcnJpZGUpOyB9XHJcblxyXG4vKiogUmV0dXJucyBuZXcgSURSdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpZCggc3R5bGU6IEV4dGVuZGVkU3R5bGVzZXQsIG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZFJ1bGUpOiBJSURSdWxlXHJcblx0eyByZXR1cm4gbmV3IElEUnVsZSggc3R5bGUsIG5hbWVPdmVycmlkZSk7IH1cclxuXHJcbi8qKiBDcmVhdGVzIG5ldyBTZWxlY3RvclJ1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHJ1bGUoIHNlbGVjdG9yOiBTZWxlY3RvclR5cGUsIHN0eWxlOiBFeHRlbmRlZFN0eWxlc2V0KTogSVNlbGVjdG9yUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBTZWxlY3RvclJ1bGUoIHNlbGVjdG9yLCBzdHlsZSk7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBBbmltYXRpb25SdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhbmltYXRpb24oIGtleWZyYW1lczogS2V5ZnJhbWVbXSwgbmFtZU92ZXJyaWRlPzogc3RyaW5nIHwgSU5hbWVkUnVsZSk6IElBbmltYXRpb25SdWxlXHJcblx0eyByZXR1cm4gbmV3IEFuaW1hdGlvblJ1bGUoIGtleWZyYW1lcywgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqIFJldHVybnMgbmV3IEN1c3RvbVZhciBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGN1c3RvbTxLIGV4dGVuZHMga2V5b2YgUHVyZVN0eWxlc2V0PiggdGVtcGxhdGVQcm9wTmFtZTogSywgcHJvcFZhbDogUHVyZVN0eWxlc2V0W0tdLFxyXG5cdFx0XHRcdG5hbWVPdmVycmlkZT86IHN0cmluZyB8IElOYW1lZFJ1bGUpOiBJQ3VzdG9tVmFyPEs+XHJcblx0eyByZXR1cm4gbmV3IEN1c3RvbVZhciggdGVtcGxhdGVQcm9wTmFtZSwgcHJvcFZhbCwgbmFtZU92ZXJyaWRlKTsgfVxyXG5cclxuLyoqIFJldHVybnMgbmV3IFN1cHBvcnRzUnVsZSBvYmplY3QgICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc3VwcG9ydHM8VD4oIHF1ZXJ5OiBzdHJpbmcsIGRlZmluaXRpb246IFQpOiBJU3VwcG9ydHNSdWxlPFQ+XHJcblx0eyByZXR1cm4gbmV3IFN1cHBvcnRzUnVsZSggcXVlcnksIGRlZmluaXRpb24pOyB9XHJcblxyXG4vKiogUmV0dXJucyBuZXcgTWVkaWFSdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRtZWRpYTxUPiggcXVlcnk6IHN0cmluZyB8IE1lZGlhUXVlcnksIGRlZmluaXRpb246IFQpOiBJTWVkaWFSdWxlPFQ+XHJcblx0eyByZXR1cm4gbmV3IE1lZGlhUnVsZSggcXVlcnksIGRlZmluaXRpb24pOyB9XHJcblxyXG4vKiogUmV0dXJucyBuZXcgSW1wb3J0UnVsZSBvYmplY3QgICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaW1wb3J0KCB1cmw6IHN0cmluZywgcXVlcnk/OiBzdHJpbmcgfCBNZWRpYVF1ZXJ5KTogSUltcG9ydFJ1bGVcclxuXHR7IHJldHVybiBuZXcgSW1wb3J0UnVsZSggdXJsLCBxdWVyeSk7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBGb25GYWNlUnVsZSBvYmplY3QgICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkZm9udGZhY2UoIGZvbnRmYWNlOiBGb250ZmFjZSk6IElGb250RmFjZVJ1bGVcclxuXHR7IHJldHVybiBuZXcgRm9udEZhY2VSdWxlKCBmb250ZmFjZSk7IH1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJU2VsZWN0b3JSdWxlLCBFeHRlbmRlZFN0eWxlc2V0LCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiXHJcbmltcG9ydCB7U2VsZWN0b3JUeXBlfSBmcm9tIFwiLi4vaGVscGVycy9TZWxlY3RvclR5cGVzXCI7XHJcbmltcG9ydCB7U2VsZWN0b3J9IGZyb20gXCIuLi9oZWxwZXJzL1NlbGVjdG9yRnVuY3NcIjtcclxuaW1wb3J0IHtSdWxlQ29udGFpbmVyLCBJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi9SdWxlQ29udGFpbmVyXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTZWxlY3RvclJ1bGUgdHlwZSBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIGNsYXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElTZWxlY3RvclJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc2VsZWN0b3I/OiBTZWxlY3RvclR5cGUsIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuU0VMRUNUT1IsIHN0eWxlKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKCBzZWxlY3Rvcik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTZWxlY3RvclJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBTZWxlY3RvclJ1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0bmV3UnVsZS5zZWxlY3RvciA9IHRoaXMuc2VsZWN0b3I7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgZ2VTZWxlY3RvclN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3Rvci50b0Nzc1N0cmluZygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogQ1NTIHJ1bGUgc2VsZWN0b3Igc3RyaW5nICovXHJcblx0cHVibGljIGdldCBzZWxlY3RvclRleHQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuc2VsZWN0b3IudG9Dc3NTdHJpbmcoKTsgfVxyXG5cclxuXHQvLyBzZWxlY3RvciBvYmplY3QgZm9yIHRoaXMgcnVsZS5cclxuXHRwdWJsaWMgc2VsZWN0b3I6IFNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlUnVsZSwgRXh0ZW5kZWRTdHlsZXNldCwgUnVsZVR5cGV9IGZyb20gXCIuL1J1bGVUeXBlc1wiO1xyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL1N0eWxlVHlwZXNcIlxyXG5pbXBvcnQge3N0eWxlc2V0VG9Dc3NTdHJpbmd9IGZyb20gXCIuLi9zdHlsZXMvU3R5bGVGdW5jc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5pbXBvcnQge1J1bGVDb250YWluZXIsIElSdWxlQ29udGFpbmVyT3duZXJ9IGZyb20gXCIuL1J1bGVDb250YWluZXJcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgcnVsZXMgdGhhdCBoYXZlIGEgc2luZ2xlIHN0eWxlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggdHlwZTogUnVsZVR5cGUsIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggdHlwZSk7XHJcblxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHt9O1xyXG5cdFx0dGhpcy5wYXJlbnRzID0gW107XHJcblx0XHR0aGlzLmltcG9ydGFudCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuXHRcdGlmIChzdHlsZSlcclxuXHRcdFx0dGhpcy5wYXJzZUV4dGVuZGVkU3R5bGVzZXQoIHN0eWxlKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VFeHRlbmRlZFN0eWxlc2V0KCBzdHlsZTogRXh0ZW5kZWRTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoc3R5bGUgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpXHJcblx0XHR7XHJcblx0XHRcdC8vIHN0eWxlc2V0IGlzIGEgc2luZ2xlIElTdHlsZVJ1bGUgb2JqZWN0LCB3aGljaCB3ZSBhZGQgYXMgb3VyIHBhcmVudFxyXG5cdFx0XHR0aGlzLnBhcmVudHMucHVzaCggc3R5bGUpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpXHJcblx0XHR7XHJcblx0XHRcdC8vIHN0eWxlc2V0IGlzIGFuIGFycmF5IG9mIElTdHlsZVJ1bGUgb2JqZWN0cywgd2hpY2ggd2UgYWRkIGFzIG91ciBwYXJlbnRzXHJcblx0XHRcdGZvciggbGV0IHJ1bGUgb2Ygc3R5bGUpXHJcblx0XHRcdFx0dGhpcy5wYXJlbnRzLnB1c2goIHJ1bGUgYXMgU3R5bGVSdWxlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZXh0ZW5kZWRTdHlsZXNldCBpcyBhIHNldCBvZiBzdHlsZSBwcm9wZXJ0aWVzIGJ1dCBjYW4gYWxzbyBpbmNsdWRlIHRoZSAkZXh0ZW5kcyBhbmRcclxuXHRcdFx0Ly8gJGltcG9ydGFudCBwcm9wZXJ0aWVzLiBSZW1lbWJlciBwYXJlbnRzIGFuZCBpbXBvcnRhbnQgbmFtZXMgYW5kIGNvcHkgdGhlIHJlc3Qgb2ZcclxuXHRcdFx0Ly8gc3R5bGUgcHJvcGVydGllcyB0byBvdXIgaW50ZXJuYWwgU3R5bGVzZXQgb2JqZWN0LlxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsID0gc3R5bGVbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wTmFtZSA9PT0gXCIkZXh0ZW5kc1wiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbmhlcml0c1Byb3BWYWwgPSBwcm9wVmFsIGFzIChJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdKTtcclxuXHRcdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KGluaGVyaXRzUHJvcFZhbCkpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMgaXMgaXMgYW4gYXJyYXkgb2YgSVN0eWxlUnVsZSBvYmplY3RzLCB3aGljaCB3ZSBhZGQgYXMgb3VyIHBhcmVudHNcclxuXHRcdFx0XHRcdFx0Zm9yKCBsZXQgcnVsZSBvZiBpbmhlcml0c1Byb3BWYWwpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wYXJlbnRzLnB1c2goIHJ1bGUgYXMgU3R5bGVSdWxlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBhIHNpbmdsZSBJU3R5bGVSdWxlIG9iamVjdCwgd2hpY2ggd2UgYWRkIGFzIG91ciBwYXJlbnRcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnRzLnB1c2goIGluaGVyaXRzUHJvcFZhbCBhcyBTdHlsZVJ1bGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCIkaW1wb3J0YW50XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGltcG9ydGFudFByb3BWYWwgPSBwcm9wVmFsIGFzIChzdHJpbmcgfCBzdHJpbmdbXSk7XHJcblx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShpbXBvcnRhbnRQcm9wVmFsKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXHJcblx0XHRcdFx0XHRcdGZvciggbGV0IGltcG9ydGFudCBvZiBpbXBvcnRhbnRQcm9wVmFsKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW1wb3J0YW50LmFkZCggaW1wb3J0YW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBhIHNpbmdsZSBzdHJpbmdcclxuXHRcdFx0XHRcdFx0dGhpcy5pbXBvcnRhbnQuYWRkKCBpbXBvcnRhbnRQcm9wVmFsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNvcHkgdGhlIHByb3BlcnR5IHZhbHVlIHRvIG91ciBpbnRlcm5hbCBzdHlsZXNldFxyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtwcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIGNvbnRhaW5lcjogUnVsZUNvbnRhaW5lciwgb3duZXI6IElSdWxlQ29udGFpbmVyT3duZXIsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2VzcyggY29udGFpbmVyLCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdC8vIGlmIHdlIGhhdmUgcGFyZW50cywgd2UgbmVlZCB0byBmaXJzdCBjb3B5IHRoZWlyIHN0eWxlc2V0cywgc28gdGhhdCBvdXIgc3R5bGVzZXQgY2FuXHJcblx0XHQvLyBvdmVycmlkZSB0aGVpciB2YWx1ZXMuXHJcblx0XHRpZiAodGhpcy5wYXJlbnRzLmxlbmd0aCA+IDApXHJcblx0XHR7XHJcblx0XHRcdGxldCB0ZW1wU3R5bGVzZXQgPSB0aGlzLnN0eWxlc2V0O1xyXG5cdFx0XHR0aGlzLnN0eWxlc2V0ID0ge307XHJcblxyXG5cdFx0XHQvLyBnbyB0aHJvdWdoIGFsbCBwYXJlbnRzIGFuZCBjb3B5IHRoZWlyIHN0eWxlIHByb3BlcnRpZXMgdG8gb3VyIG93biBzdHlsZXNldC5cclxuXHRcdFx0Zm9yKCBsZXQgcGFyZW50IG9mIHRoaXMucGFyZW50cylcclxuXHRcdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cclxuXHRcdFx0Ly8gY29weSBvdXIgc3R5bGVzIG92ZXIgdGhvc2Ugb2YgdGhlIHBhcmVudHNcclxuXHRcdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5zdHlsZXNldCwgdGVtcFN0eWxlc2V0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHByb3RlY3RlZCBjb3B5RnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHNyYy5zdHlsZXNldDtcclxuXHRcdHRoaXMucGFyZW50cyA9IHNyYy5wYXJlbnRzO1xyXG5cdFx0dGhpcy5pbXBvcnRhbnQgPSBzcmMuaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgcnVsZSBpbnRvIHRoZSBnaXZlbiBwYXJlbnQgcnVsZSBvciBzdHlsZXNoZWV0LlxyXG5cdHB1YmxpYyBpbnNlcnQoIHBhcmVudDogQ1NTU3R5bGVTaGVldCB8IENTU0dyb3VwaW5nUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZShcclxuXHRcdFx0YCR7dGhpcy5nZVNlbGVjdG9yU3RyaW5nKCl9ICR7c3R5bGVzZXRUb0Nzc1N0cmluZyggdGhpcy5zdHlsZXNldCwgdGhpcy5pbXBvcnRhbnQpfWAsXHJcblx0XHRcdHBhcmVudC5jc3NSdWxlcy5sZW5ndGgpO1xyXG5cclxuXHRcdHRoaXMuY3NzUnVsZSA9IHBhcmVudC5jc3NSdWxlc1tpbmRleF07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdlU2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nO1xyXG5cclxuXHJcblxyXG5cdC8qKiBTT00gc3R5bGUgcnVsZSAqL1xyXG5cdHB1YmxpYyBnZXQgY3NzU3R5bGVSdWxlKCk6IENTU1N0eWxlUnVsZSB7IHJldHVybiB0aGlzLmNzc1J1bGUgYXMgQ1NTU3R5bGVSdWxlOyB9XHJcblxyXG5cdC8vIFN0eWxlIHJ1bGUgZGVmaW5pbmcgc3R5bGUgcHJvcGVydGllcy5cclxuXHRwdWJsaWMgcGFyZW50czogU3R5bGVSdWxlW107XHJcblxyXG5cdC8vIFNldCBvZiBwcm9wZXJ0eSBuYW1lcyBmcm9tIHRoaXMgc3R5bGVzZXQgdGhhdCBzaG91bGQgYmUgIWltcG9ydGFudC5cclxuXHRpbXBvcnRhbnQ6IFNldDxzdHJpbmc+O1xyXG5cclxuXHQvLyBSZXN1bHRhbnQgU3R5bGVzZXQgb2JqZWN0IGRlZmluaW5nIHByb3BlcnRpZXMgdG8gYmUgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0cHVibGljIHN0eWxlc2V0OiBTdHlsZXNldDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdXBwb3J0c1J1bGUsIElSdWxlRGVmaW5pdGlvbkNsYXNzLCBSdWxlVHlwZX0gZnJvbSBcIi4vUnVsZVR5cGVzXCJcclxuaW1wb3J0IHtHcm91cFJ1bGV9IGZyb20gXCIuL0dyb3VwUnVsZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3VwcG9ydFJ1bGUgdHlwZSBkZXNjcmliZXMgYSBDU1MgQHN1cHBvcnRzIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3VwcG9ydHNSdWxlPFQgPSBhbnk+IGV4dGVuZHMgR3JvdXBSdWxlPFQ+IGltcGxlbWVudHMgSVN1cHBvcnRzUnVsZTxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBxdWVyeT86IHN0cmluZywgZGVmaW5pdGlvbj86IFQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLlNVUFBPUlRTLCBkZWZpbml0aW9uKTtcclxuXHJcblx0XHR0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBTdXBwb3J0c1J1bGU8VD5cclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBTdXBwb3J0c1J1bGU8VD4oKTtcclxuXHRcdG5ld1J1bGUucXVlcnkgPSB0aGlzLnF1ZXJ5O1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBydWxlIGludG8gdGhlIGdpdmVuIHBhcmVudCBydWxlIG9yIHN0eWxlc2hlZXQuXHJcblx0cHVibGljIGluc2VydCggcGFyZW50OiBDU1NTdHlsZVNoZWV0IHwgQ1NTR3JvdXBpbmdSdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBxdWVyeSBpcyBzdXBwb3J0ZWQgYW5kIGlmIGl0IGlzIG5vdCwgZG9uJ3QgaW5zZXJ0IHRoZSBydWxlXHJcblx0XHRpZiAoIUNTUy5zdXBwb3J0cyggdGhpcy5xdWVyeSkpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdFx0XHJcblx0XHRsZXQgaW5kZXggPSBwYXJlbnQuaW5zZXJ0UnVsZSggYEBzdXBwb3J0cyAke3RoaXMucXVlcnl9IHt9YCwgcGFyZW50LmNzc1J1bGVzLmxlbmd0aCk7XHJcblx0XHR0aGlzLmNzc1J1bGUgPSBwYXJlbnQuY3NzUnVsZXNbaW5kZXhdO1xyXG5cclxuXHRcdC8vIGluc2VydCBzdWItcnVsZXNcclxuXHRcdHRoaXMuaW5zZXJ0UnVsZXMoIHRoaXMuY3NzU3VwcG9ydHNSdWxlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIFNPTSBzdXBwb3J0cyBydWxlICovXHJcblx0cHVibGljIGdldCBjc3NTdXBwb3J0c1J1bGUoKTogQ1NTU3VwcG9ydHNSdWxlIHsgcmV0dXJuIHRoaXMuY3NzUnVsZSBhcyBDU1NTdXBwb3J0c1J1bGU7IH1cclxuXHJcblx0Ly8gc3VwcG9ydCBxdWVyeSBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBxdWVyeTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVRhZ1J1bGUsIEV4dGVuZGVkU3R5bGVzZXQsIFJ1bGVUeXBlfSBmcm9tIFwiLi9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCI7XHJcbmltcG9ydCB7UnVsZUNvbnRhaW5lciwgSVJ1bGVDb250YWluZXJPd25lcn0gZnJvbSBcIi4vUnVsZUNvbnRhaW5lclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVGFnUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgdGFnIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGFnUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElUYWdSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHRhZ05hbWU/OiBzdHJpbmcsIHN0eWxlPzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggUnVsZVR5cGUuVEFHLCBzdHlsZSk7XHJcblx0XHR0aGlzLnRhZ05hbWUgPSB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogVGFnUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IFRhZ1J1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0bmV3UnVsZS50YWdOYW1lID0gdGhpcy50YWdOYW1lO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdlU2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE5hbWUgb2YgdGhlIEhUTUwgdGFnICovXHJcblx0cHVibGljIGdldCB0YWcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMudGFnTmFtZTsgfVxyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSB0YWcgdG8gd2hpY2ggdGhlIHN0eWxlc2V0IGFwcGxpZXMuXHJcblx0cHVibGljIHRhZ05hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhpcyBtb2R1bGUgZGVmaW5lcyB0eXBlcyBhbmQgZnVuY3Rpb25zIHRoYXQgYWxsb3cgYnVpbGRpbmcgQ1NTIHN0eWxlIHNoZWV0cyB1c2luZyBUeXBlU2NyaXB0LlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQge0lSdWxlQ29udGFpbmVyLCBJUnVsZURlZmluaXRpb25DbGFzcywgSVJ1bGVEZWZpbml0aW9ufSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIFwiQ29uc3RydWN0b3JcIiBpbnRlcmZhY2UgZGVmaW5pbmcgaG93IHN0eWxlIHNjb3BlIGRlZmluaXRpb24gY2xhc3NlcyBjYW4gYmUgY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M8VD4gZXh0ZW5kcyBJUnVsZURlZmluaXRpb25DbGFzczxUPlxyXG57XHJcblx0LyoqIEFsbCBzdHlsZSBzY29wZSBkZWZpbml0aW9uIG9iamVjdHMgc2hvdWxkIGNvbmZvcm0gdG8gdGhpcyBjb25zdHJ1Y3RvciAqL1xyXG5cdG5ldygpOiBUO1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluaWRpY2F0aW5nIHRoYXQgbXVsdGlwbGUgc3R5bGUgc2NvcGVzIGNhbiBiZSBjcmVhdGVkIGZvciB0aGlzIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gLVxyXG5cdCAqIGVhY2ggdGltZSB3aXRoIHVuaXF1ZSBydWxlIElEcy4gVGhpcyBpcyB1c2VmdWwgZm9yIHN0eWxlcyBjcmVhdGVkIGZvciBhIGNvbnRyb2wgLSBlLmcuIHRyZWVcclxuXHQgKiBvciBhY2NvcmRlb24gLSB3aGljaCBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBwYWdlIGJ1dCB3aXRoIGRpZmZlcmVudCBzdHlsZXMuXHJcblx0ICogQnkgZGVmYXVsdCwgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbnMgYXJlIHNpbmd1bGFyLCB0aGF0IGlzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3R5bGUgc2NvcGVcclxuXHQgKiBvYmplY3QgaXMgY3JlYXRlZCBmb3IgdGhlbSBhbmQgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0ICovXHJcblx0aXNNdWx0aXBsZXg/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBTaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFN0eWxlIFNjb3BlIGNsYXNzIGNyZWF0ZWQgZnJvbSB0aGlzIGRlZmluaXRpb24uIFRoaXMgaXMgdXNlZCBvbmx5XHJcblx0ICogZm9yIHNpbmd1bGFyIHN0eWxlIHNjb3Blcy5cclxuXHQgKi9cclxuXHRzdHlsZVNjb3BlPzogSVN0eWxlU2NvcGU8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBJU3R5bGVTY29wZSBpbnRlcmZhY2UgcmVwcmVzZW50cyB0aGUgcmVzdWx0YW50IHN0eWxlIHNjb3BlIGFmdGVyIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uXHJcbiAqIGhhcyBiZWVuIHByb2Nlc3NlZC4gVGhlIHN0eWxlIHNjb3BlIG9iamVjdCBjb250YWlucyBuYW1lcyBvZiBJRHMsIGNsYXNzZXMgYW5kIGFuaW1hdGlvbnMsIHdoaWNoXHJcbiAqIGNhbiBiZSB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbiBjb2RlLiBUaGUgaW50ZXJmYWNlIGFsc28gcHJvdmlkZXMgbWV0aG9kcyB0aGF0IGFyZSB1c2VkIHRvXHJcbiAqIG1hbmlwdWxhdGUgdGhlIHJ1bGVzIGFuZCB0aGVpciBzdHlsZXNldHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVNjb3BlPFQgPSBhbnk+IGV4dGVuZHMgSVJ1bGVDb250YWluZXI8VD5cclxue1xyXG5cdC8vIC8qKlxyXG5cdC8vICAqIENsYXNzIHRoYXQgZGVmaW5lZCB0aGlzIHN0eWxlIHNjb3BlLiBUaGlzIG1lbWJlciBpcyB1c2VkIGZvciBzdHlsZSBzY29wZSBkZXJpdmF0aW9uOlxyXG5cdC8vICAqIGBgYHR5cGVzY3JpcHRcclxuXHQvLyAgKiBsZXQgc2NvcGUxID0gJHNjb3BlKCBjbGFzcyB7Li4ufSk7XHJcblx0Ly8gICogbGV0IHNjb3BlMiA9ICRzY29wZSggY2xhc3MgZXh0ZW5kcyBzY29wZTEuRGVmaW5pdGlvbiB7Li4ufSk7XHJcblx0Ly8gICogYGBgXHJcblx0Ly8gICovXHJcblx0Ly8gcmVhZG9ubHkgRGVmaW5pdGlvbjogSVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M8VD47XHJcblxyXG5cdC8qKiBJbnNlcnRzIHRoaXMgc3R5bGUgc2NvcGUgaW50byBET00uICovXHJcblx0YWN0aXZhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqIFJlbW92ZXMgdGhpcyBzdHlsZSBzY29wZSBmcm9tIERPTSAtIG9ubHkgd29ya3MgZm9yIG11bHRpcGxleCBzdHlsZSBzY29wZXMuICovXHJcblx0ZGVhY3RpdmF0ZSgpOiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcbmltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBQcm9jZXNzZXMgdGhlIGdpdmVuIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gYW5kIHJldHVybnMgdGhlIFN0eWxlU2NvcGUgb2JqZWN0IHRoYXQgY29udGFpbnNcclxuICogbmFtZXMgb2YgSURzLCBjbGFzc2VzIGFuZCBrZXlmcmFtZXMgYW5kIGFsbG93cyBzdHlsZSBtYW5pcHVsYXRpb25zLiBGb3IgYSBnaXZlbiBzdHlsZSBzY29wZVxyXG4gKiBkZWZpbml0aW9uIGNsYXNzIHRoZXJlIGlzIGEgc2luZ2xlIHN0eWxlIHNjb3BlIG9iamVjdCwgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb25cclxuICogaXMgaW52b2tlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkdXNlPFQgPSBJUnVsZURlZmluaXRpb24+KCBzdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVTY29wZURlZmluaXRpb25DbGFzczxUPik6IElTdHlsZVNjb3BlPFQ+XHJcbntcclxuXHQvLyBpZiB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBpcyBtdWx0aXBsZXgsIGNyZWF0ZSBuZXcgU3R5bGVTY29wZSBvYmplY3QgZXZlcnkgdGltZTtcclxuXHQvLyBvdGhlcndpc2UsIGNoZWNrIHdoZXRoZXIgdGhlIHN0eWxlIHNoZWV0IGRlZmluaXRpb24gb2JqZWN0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLiBUaGlzXHJcblx0Ly8gaXMgaW5kaWNhdGVkIGJ5IHRoZSBleGlzdGVuY2Ugb2YgdGhlIGluc3RhbmNlIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgY2xhc3MuXHJcblx0aWYgKHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MuaXNNdWx0aXBsZXgpXHJcblx0XHRyZXR1cm4gbmV3IFN0eWxlU2NvcGUoIHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRsZXQgc3R5bGVTY29wZSA9IHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3Muc3R5bGVTY29wZSBhcyBTdHlsZVNjb3BlPFQ+O1xyXG5cdFx0aWYgKCFzdHlsZVNjb3BlKVxyXG5cdFx0e1xyXG5cdFx0XHRzdHlsZVNjb3BlID0gbmV3IFN0eWxlU2NvcGUoIHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MpO1xyXG5cdFx0XHRzdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzLnN0eWxlU2NvcGUgPSBzdHlsZVNjb3BlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzdHlsZVNjb3BlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBzY29wZSBkZWZpbml0aW9uLCBpbnNlcnRzIHRoZSBDU1MgcnVsZXMgaW50byBET00gYW5kIHJldHVybnMgdGhlXHJcbiAqIFN0eWxlU2NvcGUgb2JqZWN0IHRoYXQgY29udGFpbnMgbmFtZXMgb2YgSURzLCBjbGFzc2VzIGFuZCBrZXlmcmFtZXMgYW5kIGFsbG93cyBzdHlsZVxyXG4gKiBtYW5pcHVsYXRpb25zLiBGb3IgYSBnaXZlbiBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGNsYXNzIHRoZXJlIGlzIGEgc2luZ2xlIHN0eWxlIHNjb3BlIG9iamVjdCxcclxuICogbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzIHRoaXMgZnVuY3Rpb24gaXMgaW52b2tlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkYWN0aXZhdGU8VCA9IElSdWxlRGVmaW5pdGlvbj4oIHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M6IElTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzPFQ+KTogSVN0eWxlU2NvcGU8VD5cclxue1xyXG5cdGxldCBzY29wZSA9ICR1c2UoIHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MpO1xyXG5cdHNjb3BlLmFjdGl2YXRlKCk7XHJcblx0cmV0dXJuIHNjb3BlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgdG8gY29uZmlndXJlIFRzc01hbmFnZXIgb3B0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtUc3NNYW5hZ2VyfSBmcm9tIFwiLi9Uc3NNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAodW5pcXVlKSBzdHlsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIG9wdGltaXplXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VPcHRpbWl6ZWRTdHlsZU5hbWVzKCBvcHRpbWl6ZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG5cdHsgVHNzTWFuYWdlci51c2VPcHRpbWl6ZWRTdHlsZU5hbWVzKCBvcHRpbWl6ZSwgcHJlZml4KTsgfVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzLCBJU3R5bGVTY29wZX0gZnJvbSBcIi4vU2NvcGVUeXBlc1wiXHJcbmltcG9ydCB7UnVsZVR5cGUsIElSdWxlRGVmaW5pdGlvbiwgSVJ1bGVEZWZpbml0aW9uQ2xhc3N9IGZyb20gXCIuLi9ydWxlcy9SdWxlVHlwZXNcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuLi9ydWxlcy9SdWxlXCJcclxuaW1wb3J0IHtUc3NNYW5hZ2VyfSBmcm9tIFwiLi9Uc3NNYW5hZ2VyXCJcclxuaW1wb3J0IHtSdWxlQ29udGFpbmVyLCBJUnVsZUNvbnRhaW5lck93bmVyfSBmcm9tIFwiLi4vcnVsZXMvUnVsZUNvbnRhaW5lclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTY29wZSBjbGFzcyByZXByZXNlbnRzIGEgcGFyc2VkIGZvcm0gb2YgYSBJU3R5bGVTY29wZURlZmluaXRpb24tZGVyaXZlZCBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdHlsZVNjb3BlPFQgPSBJUnVsZURlZmluaXRpb24+IGV4dGVuZHMgUnVsZUNvbnRhaW5lcjxUPiBpbXBsZW1lbnRzIElTdHlsZVNjb3BlPFQ+LCBJUnVsZUNvbnRhaW5lck93bmVyXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGRlZmluaXRpb25DbGFzczogSVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0c3VwZXIoIFJ1bGVUeXBlLlNDT1BFLCBkZWZpbml0aW9uQ2xhc3MpXHJcblxyXG5cdFx0dGhpcy5kZWZpbml0aW9uQ2xhc3MgPSBkZWZpbml0aW9uQ2xhc3M7XHJcblxyXG5cdFx0dGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPSAwO1xyXG5cdFx0dGhpcy5pbXBvcnRlZFNjb3BlcyA9IFtdO1xyXG5cclxuXHRcdHRoaXMucHJvY2Vzc1Njb3BlKCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGlzIHJ1bGUgaXMgYSByZWFsIENTUyBydWxlIHRoYXQgc2hvdWxkIGJlIGluc2VydGVkIHVuZGVyIHRoZSA8c3R5bGU+XHJcblx0Ly8gZWxlbWVudC4gRm9yIHRoZSBtYWpvcml0eSBvZiBSdWxlLWRlcml2ZWQgY2xhc3NlcyB0aGlzIGlzIHRydWU7IGhvd2V2ZXIsIGZvciBzb21lIGNsYXNzZXMsXHJcblx0Ly8gZS5nLiBmb3IgdGhlIEN1c3RvbVZhciBjbGFzcywgdGhpcyBpcyBub3Qgc28uXHJcblx0cHVibGljIGdldCBpc1JlYWxDc3NSdWxlKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogUnVsZSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5zZXJ0cyB0aGlzIHJ1bGUgaW50byB0aGUgZ2l2ZW4gcGFyZW50IHJ1bGUgb3Igc3R5bGVzaGVldC5cclxuXHRwdWJsaWMgaW5zZXJ0KCBwYXJlbnQ6IENTU1N0eWxlU2hlZXQgfCBDU1NHcm91cGluZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuaW5zZXJ0UnVsZXMoIHRoaXMuY3NzU3R5bGVTaGVldCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgdGhlIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gaW5zdGFuY2UsIHBhcnNlcyBpdHMgcHJvcGVydGllcyBhbmQgY3JlYXRlcyBuYW1lcyBmb3JcclxuXHQvLyBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzU2NvcGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBzY29wZSBkZWZpbml0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkXHJcblx0XHRpZiAodGhpcy5pc1Byb2Nlc3NlZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIHRoZSBjb250YWluZXIgYW5kIHRoZSBvd25lciBwcm9wZXJ0aWVzIG9mIHRoZSBSdWxlIGJhc2UgY2xhc3MgcG9pbnQgdG8gdGhlIFN0eWxlU2NvcGVcclxuXHRcdC8vIG9iamVjdCBpdHNlbGZcclxuXHRcdHN1cGVyLnByb2Nlc3MoIHRoaXMsIHRoaXMsIG51bGwpO1xyXG5cclxuXHRcdHRoaXMuaXNNdWx0aXBsZXggPSAhIXRoaXMuZGVmaW5pdGlvbkNsYXNzLmlzTXVsdGlwbGV4O1xyXG5cclxuXHRcdC8vIGluIERFQlVHLCBlYWNoIGNsYXNzIGhhcyBhIG5hbWUgdW5sZXNzIGl0IHdhcyBjcmVhdGVkIGFzIGFuIGFub255bW91cyBjbGFzcy4gSW4gUkVMRUFTRSxcclxuXHRcdC8vIChhcyB3ZWxsIGFzIGluIHRoZSBhbm9ueW1vdXMgY2FzZXMpLCB0aGUgbmFtZSBpcyB1bmRlZmluZWQgYW5kIHdlIGdlbmVyYXRlIGEgdW5pcXVlXHJcblx0XHQvLyBuYW1lIGZvciB0aGUgc3R5bGUgc2NvcGUuXHJcblx0XHR0aGlzLm5hbWUgPSB0aGlzLmRlZmluaXRpb25DbGFzcy5uYW1lO1xyXG5cdFx0aWYgKCF0aGlzLm5hbWUpXHJcblx0XHRcdHRoaXMubmFtZSA9IFRzc01hbmFnZXIuZ2VuZXJhdGVVbmlxdWVOYW1lKCBcInNcIik7XHJcblxyXG5cdFx0Ly8gcHJvY2VzcyBzdWItcnVsZXMgcnVsZXMuXHJcblx0XHR0aGlzLnByb2Nlc3NSdWxlcygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogQWRkcyBhIHN0eWxlIHNjb3BlIHRoaXMgc3R5bGUgc2NvcGUgKi9cclxuXHRwdWJsaWMgYWRkSW1wb3J0ZWRTY29wZSggc2NvcGU6IElTdHlsZVNjb3BlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuaW1wb3J0ZWRTY29wZXMucHVzaCggc2NvcGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZSBzY29wZSAqL1xyXG5cdHB1YmxpYyBnZXRTY29wZWRSdWxlTmFtZWQoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSB0aGlzIHJ1bGUgbmFtZTogaWYgeWVzLCByZXR1cm4gdGhlIGFscmVhZHkgYXNzaWduZWRcclxuXHRcdC8vIHVuaXF1ZSBzY29wZWQgbmFtZVxyXG5cdFx0aWYgKHJ1bGVOYW1lIGluIHRoaXMuX2FsbE5hbWVzKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fYWxsTmFtZXNbcnVsZU5hbWVdO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZW5lcmF0ZVNjb3BlZE5hbWUoIHJ1bGVOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZSBzY29wZVxyXG5cdHB1YmxpYyBnZW5lcmF0ZVNjb3BlZE5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5pc011bHRpcGxleClcclxuXHRcdFx0cmV0dXJuIFRzc01hbmFnZXIuZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBUc3NNYW5hZ2VyLmdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIHRoaXMgc3R5bGUgc2NvcGUgaW50byBET00uICovXHJcblx0cHVibGljIGFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBhY3RpdmF0ZSBpbXBvcnRlZCBzY29wZXNcclxuXHRcdGZvciggbGV0IHNjb3BlIG9mIHRoaXMuaW1wb3J0ZWRTY29wZXMpXHJcblx0XHRcdHNjb3BlLmFjdGl2YXRlKCk7XHJcblxyXG5cdFx0aWYgKCsrdGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDEgJiYgIXRoaXMuaXNBY3RpdmF0ZWQpXHJcblx0XHRcdFRzc01hbmFnZXIuYWN0aXZhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogUmVtb3ZlcyB0aGlzIHN0eWxlIHNjb3BlIGZyb20gRE9NIC0gb25seSB3b3JrcyBmb3IgbXVsdGlwbGV4IHN0eWxlIHNjb3Blcy4gKi9cclxuXHRwdWJsaWMgZGVhY3RpdmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZ3VhcmQgZnJvbSBleHRyYSBkZWFjdGl2YXRlIGNhbGxzXHJcblx0XHRpZiAodGhpcy5hY3RpdmF0aW9uUmVmQ291bnQgPT09IDApXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBkZWFjdGl2YXRlIGltcG9ydGVkIHNjb3Blc1xyXG5cdFx0Zm9yKCBsZXQgc2NvcGUgb2YgdGhpcy5pbXBvcnRlZFNjb3BlcylcclxuXHRcdFx0c2NvcGUuZGVhY3RpdmF0ZSgpO1xyXG5cclxuXHRcdGlmICgtLXRoaXMuYWN0aXZhdGlvblJlZkNvdW50ID09PSAwICYmIHRoaXMuaXNBY3RpdmF0ZWQpXHJcblx0XHRcdFRzc01hbmFnZXIuZGVhY3RpdmF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzZXRET01JbmZvKCBzdHlsZVNoZWV0OiBDU1NTdHlsZVNoZWV0KVxyXG5cdHtcclxuXHRcdHRoaXMuY3NzU3R5bGVTaGVldCA9IHN0eWxlU2hlZXQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBjbGVhckRPTUluZm8oKVxyXG5cdHtcclxuXHRcdHRoaXMuY3NzU3R5bGVTaGVldCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGVscGVyIHByb3BlcnRpZXNcclxuXHRwcml2YXRlIGdldCBpc0FjdGl2YXRlZCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5jc3NTdHlsZVNoZWV0OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xhc3MgdGhhdCBkZWZpbmVkIHRoaXMgc3R5bGUgc2NvcGUuIFRoaXMgbWVtYmVyIGlzIHVzZWQgZm9yIHN0eWxlIHNjb3BlIGRlcml2YXRpb25cclxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVTY29wZURlZmluaXRpb25DbGFzczxUPjtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgc3R5bGUgc2hlZXQgLSB1c2VkIHRvIGNyZWF0ZSBzY29wZWQgbmFtZXMgb2Ygc3R5bGUgcnVsZXNcclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIHN0eWxlIHNjb3BlIG9iamVjdCBvd25zIHRoZSA8c3R5bGU+IGVsZW1lbnQuIFRoaXMgaXMgdHJ1ZSBvbmx5XHJcblx0Ly8gZm9yIG11bHRpcGxleCBzdHlsZXMgc2NvcGVzIC0gdGhvc2UgdGhhdCBjYW4gYmUgY3JlYWVkIG11bHRpcGxlIHRpbWVzLlxyXG5cdHB1YmxpYyBpc011bHRpcGxleDogYm9vbGVhbjtcclxuXHJcblx0Ly8gQ1NTIHN0eWxlIHNoZWV0XHJcblx0cHVibGljIGNzc1N0eWxlU2hlZXQ6IENTU1N0eWxlU2hlZXQ7XHJcblxyXG5cdC8vIFJlZmVyZW5jZSBjb3VudCBvZiBhY3RpdmF0aW9uIHJlcXVlc3RzLlxyXG5cdHByaXZhdGUgYWN0aXZhdGlvblJlZkNvdW50OiBudW1iZXI7XHJcblxyXG5cdC8vIExpc3Qgb2YgaW1wb3J0ZWQgc3R5bGUgc2NvcGUgb2JqZWN0cyB0aGF0IHdpbGwgYmUgYWN0aXZhdGVkIHdoZW4gb3VyIHNjb3BlIGlzIGFjdGl2YXRlZC5cclxuXHRwcml2YXRlIGltcG9ydGVkU2NvcGVzOiBJU3R5bGVTY29wZVtdO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4uL3J1bGVzL1J1bGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRzc01hbmFnZXIgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGluc2VydGluZyBDU1MgcnVsZXMgaW50byB0aGUgRE9NLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRzc01hbmFnZXJcclxue1xyXG5cdC8vIFRoaXMgY2xhc3MgaGFzIHN0YXRpYyBtZW1iZXJzIG9ubHkuXHJcblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAodW5pcXVlKSBzdHlsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuXHQgKiB3aWxsIGJlIGNyZWF0ZWQgYnkgYXBwZW5kaW5nIGEgdW5pcXVlIG51bWJlciB0byB0aGUgZ2l2ZW4gcHJlZml4LiBJZiB0aGUgcHJlZml4IGlzIG5vdFxyXG5cdCAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogQHBhcmFtIG9wdGltaXplXHJcblx0ICogQHBhcmFtIHByZWZpeFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgdXNlT3B0aW1pemVkU3R5bGVOYW1lcyggb3B0aW1pemU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnVzZVVuaXF1ZVN0eWxlTmFtZXMgPSBvcHRpbWl6ZTtcclxuXHRcdHRoaXMudW5pcXVlU3R5bGVOYW1lc1ByZWZpeCA9IHByZWZpeDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGVzIG5hbWUgdG8gdXNlIGZvciB0aGUgZ2l2ZW4gcnVsZSBmcm9tIHRoZSBnaXZlbiBzdHlsZSBzaGVldC5cclxuXHQgKiBAcGFyYW0gc2hlZXROYW1lIFxyXG5cdCAqIEBwYXJhbSBydWxlTmFtZSBcclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIGdlbmVyYXRlTmFtZSggc2hlZXROYW1lOiBzdHJpbmcsIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy51c2VVbmlxdWVTdHlsZU5hbWVzXHJcblx0XHRcdD8gdGhpcy5nZW5lcmF0ZVVuaXF1ZU5hbWUoIHRoaXMudW5pcXVlU3R5bGVOYW1lc1ByZWZpeClcclxuXHRcdFx0OiBgJHtzaGVldE5hbWV9XyR7cnVsZU5hbWV9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2VuZXJhdGVzIGEgdW5pcXVlIG5hbWUsIHdoaWNoIGNhbiBiZSB1c2VkIGVpdGhlciBmb3Igc3R5bGUgZWxlbWVudCdzIElEIG9yIG9yIGNsYXNzLFxyXG5cdCAqIGlkZW50aWZpZXIgb3IgYW5pbWF0aW9uIG5hbWUuIE5hbWVzIGFyZSBnZW5lcmF0ZWQgdXNpbmcgYSBzaW1wbGUgaW5jcmVtZW50aW5nIG51bWJlci5cclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIGdlbmVyYXRlVW5pcXVlTmFtZSggcHJlZml4Pzogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiBcIm5cIikgKyB0aGlzLm5leHRVbmlxdWVJRCsrO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSW5zZXJ0cyBydWxlcyBmcm9tIHRoZSBnaXZlbiBzdHlsZSBzY29wZSBpbnRvIERPTSAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgYWN0aXZhdGUoIHN0eWxlU2NvcGU6IFN0eWxlU2NvcGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFzdHlsZVNjb3BlKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRcdFxyXG5cdFx0Ly8gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGdpdmVuIHNjb3BlIGlzIG11bHRpcGxleCwgd2UgZWl0aGVyIGNyZWF0ZSBhIG5ldyA8c3R5bGU+IGVsZW1lbnRcclxuXHRcdC8vIG9yIHJldXNlIG91ciBcImdsb2JhbFwiIG9uZVxyXG5cdFx0bGV0IHN0eWxlU2hlZXQ6IENTU1N0eWxlU2hlZXQ7XHJcblx0XHRpZiAoc3R5bGVTY29wZS5pc011bHRpcGxleClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHN0eWxlRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGVFbG0pO1xyXG5cdFx0XHRzdHlsZVNoZWV0ID0gc3R5bGVFbG0uc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcclxuXHRcdFx0dGhpcy5tdWx0aXBsZXhTY29wZXMuc2V0KCBzdHlsZVNjb3BlLCBzdHlsZUVsbSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZW5zdXJlRE9NKCk7XHJcblx0XHRcdHN0eWxlU2hlZXQgPSB0aGlzLnN0eWxlU2hlZXQ7XHJcblx0XHR9XHJcblxyXG5cdFx0c3R5bGVTY29wZS5zZXRET01JbmZvKCBzdHlsZVNoZWV0KTtcclxuXHRcdHN0eWxlU2NvcGUuaW5zZXJ0KCBzdHlsZVNoZWV0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGlzIHN0eWxlIHNjb3BlIGZyb20gRE9NIC0gb25seSB3b3JrcyBmb3IgbXVsdGlwbGV4IHN0eWxlIHNjb3Blc1xyXG5cdHB1YmxpYyBzdGF0aWMgZGVhY3RpdmF0ZSggc3R5bGVTY29wZTogU3R5bGVTY29wZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXN0eWxlU2NvcGUgfHwgIXN0eWxlU2NvcGUuaXNNdWx0aXBsZXgpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRzdHlsZVNjb3BlLmNsZWFyRE9NSW5mbygpO1xyXG5cdFx0XHJcblx0XHQvLyByZW1vdmUgdGhlIDxzdHlsZT4gZWxlbWVudCBmcm9tIHRoZSBkb2N1bWVudFxyXG5cdFx0bGV0IHN0eWxlRWxtID0gdGhpcy5tdWx0aXBsZXhTY29wZXMuZ2V0KCBzdHlsZVNjb3BlKTtcclxuXHRcdGlmIChzdHlsZUVsbSlcclxuXHRcdFx0c3R5bGVFbG0ucmVtb3ZlKCk7XHJcblxyXG5cdFx0dGhpcy5tdWx0aXBsZXhTY29wZXMuZGVsZXRlKCBzdHlsZVNjb3BlKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGlzIHN0eWxlIHNjb3BlIGZyb20gRE9NIC0gb25seSB3b3JrcyBmb3IgbXVsdGlwbGV4IHN0eWxlIHNjb3Blc1xyXG5cdHB1YmxpYyBzdGF0aWMgYWRkSW1wb3J0UnVsZSggaW1wb3J0UnVsZTogc3RyaW5nKTogQ1NTSW1wb3J0UnVsZVxyXG5cdHtcclxuXHRcdHRoaXMuZW5zdXJlRE9NKCk7XHJcblx0XHRsZXQgaW5kZXggPSB0aGlzLnN0eWxlU2hlZXRGb3JJbXBvcnRzLmluc2VydFJ1bGUoIGltcG9ydFJ1bGUsIHRoaXMuc3R5bGVTaGVldEZvckltcG9ydHMuY3NzUnVsZXMubGVuZ3RoKTtcclxuXHRcdHJldHVybiB0aGlzLnN0eWxlU2hlZXRGb3JJbXBvcnRzLmNzc1J1bGVzW2luZGV4XSBhcyBDU1NJbXBvcnRSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogRW5zdXJlcyB0aGF0IHRoZSA8c3R5bGU+IGVsZW1lbnQgaXMgaW5zZXJ0ZWQgaW50byBET00gKi9cclxuXHRwcml2YXRlIHN0YXRpYyBlbnN1cmVET00oKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnN0eWxlU2hlZXQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHQvLyBjcmVhdGUgPHN0eWxlPiBlbGVtZW50IGFuZCBpbnNlcnQgaXQgaW50byA8aGVhZD5cclxuXHRcdHRoaXMuc3R5bGVFbG1Gb3JJbXBvcnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdHRoaXMuc3R5bGVFbG1Gb3JJbXBvcnRzLmlkID0gXCJtaW1jc3NJbXBvcnRzXCI7XHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLnN0eWxlRWxtRm9ySW1wb3J0cyk7XHJcblx0XHR0aGlzLnN0eWxlU2hlZXRGb3JJbXBvcnRzID0gdGhpcy5zdHlsZUVsbUZvckltcG9ydHMuc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcclxuXHJcblx0XHQvLyBjcmVhdGUgPHN0eWxlPiBlbGVtZW50IGFuZCBpbnNlcnQgaXQgaW50byA8aGVhZD5cclxuXHRcdHRoaXMuc3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5zdHlsZUVsbS5pZCA9IFwibWltY3NzU3R5bGVzXCI7XHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLnN0eWxlRWxtKTtcclxuXHRcdHRoaXMuc3R5bGVTaGVldCA9IHRoaXMuc3R5bGVFbG0uc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltYWl6ZWQgbmFtZXMgZm9yIHN0eWxlIGVsZW1lbnRzIChjbGFzcyBuYW1lcywgYW5pbWF0aW9uXHJcblx0Ly8gbmFtZXMsIGV0Yy4pXHJcblx0cHJpdmF0ZSBzdGF0aWMgdXNlVW5pcXVlU3R5bGVOYW1lczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBQcmVmaXggdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgc3R5bGUgbmFtZXMuIElmIHVuZGVmaW5lZCwgYSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbFxyXG5cdC8vIGJlIHVzZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgdW5pcXVlU3R5bGVOYW1lc1ByZWZpeDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy5cclxuXHRwcml2YXRlIHN0YXRpYyBuZXh0VW5pcXVlSUQ6IG51bWJlciA9IDE7XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdCB3aGVyZSBhbGwgQGltcG9ydCBydWxlcyBmcm9tIGFsbCBTdHlsZVNjb3BlIG9iamVjdHMgYXJlIGNyZWFlZC5cclxuXHRwcml2YXRlIHN0YXRpYyBzdHlsZUVsbUZvckltcG9ydHM/OiBIVE1MU3R5bGVFbGVtZW50O1xyXG5cclxuXHQvLyBET00gc3R5bGUgc2hlZXQgb2JqZWN0IGZvciBAaW1wb3J0IHJ1bGVzLlxyXG5cdHByaXZhdGUgc3RhdGljIHN0eWxlU2hlZXRGb3JJbXBvcnRzPzogQ1NTU3R5bGVTaGVldDtcclxuXHJcblx0Ly8gU3R5bGUgZWxlbWVudCBET00gb2JqZWN0IHdoZXJlIGFsbCBydWxlcyBleGNlcHQgQGltcG9ydCBmcm9tIGFsbCBTdHlsZVNjb3BlIG9iamVjdHMgYXJlIGNyZWFlZC5cclxuXHRwcml2YXRlIHN0YXRpYyBzdHlsZUVsbT86IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIERPTSBzdHlsZSBzaGVldCBvYmplY3QgZm9yIGFsbCBydWxlcyBleGNlcHQgQGltcG9ydC5cclxuXHRwcml2YXRlIHN0YXRpYyBzdHlsZVNoZWV0PzogQ1NTU3R5bGVTaGVldDtcclxuXHJcblx0Ly8gTWFwIG9mIFN0eWxlU2NvcGUgbXVsdGlwbGV4IG9iamVjdHMgdG8gdGhlaXIgPHN0eWxlPiBlbGVtZW50IERPTSBvYmplY3RzLlxyXG5cdHByaXZhdGUgc3RhdGljIG11bHRpcGxleFNjb3BlcyA9IG5ldyBNYXA8U3R5bGVTY29wZSxIVE1MU3R5bGVFbGVtZW50PigpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIENvbG9yVHlwZXMgZnJvbSBcIi4vQ29sb3JUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciBzZXBhcmF0aW9uIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIDItZGlnaXQgaGV4YWRlY2ltYWwgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE51bWJlciBmcm9tIDAgdG8gMjU1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VwVG9IZXgoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzID0gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBzLmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgcyA6IHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBjb2xvciBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQ29sb3IgYXMgYSBudW1iZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvck51bWJlclRvQ3NzU3RyaW5nKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgaWYgKHZhbCA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgbmVnYXRpdmU6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJBIG51bWJlciByZXByZXNlbnRpbmcgY29sb3IgY2Fubm90IGJlIGZsb2F0aW5nIHBvaW50OiBcIiArIHZhbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBcIiMwMDBcIjtcclxuICAgICAgICB9XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgaWYgKHZhbCA8PSAweEZGRkZGRilcclxuICAgIHtcclxuICAgICAgICBsZXQgciA9ICh2YWwgJiAweEZGMDAwMCkgPj4gMTY7XHJcbiAgICAgICAgbGV0IGcgPSAodmFsICYgMHgwMEZGMDApID4+IDg7XHJcbiAgICAgICAgbGV0IGIgPSAodmFsICYgMHgwMDAwRkYpO1xyXG4gICAgICAgIHJldHVybiBgIyR7c2VwVG9IZXgocil9JHtzZXBUb0hleChnKX0ke3NlcFRvSGV4KGIpfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHIgPSAodmFsICYgMHhGRjAwMDAwMCkgPj4gMjQ7XHJcbiAgICAgICAgbGV0IGcgPSAodmFsICYgMHgwMEZGMDAwMCkgPj4gMTY7XHJcbiAgICAgICAgbGV0IGIgPSAodmFsICYgMHgwMDAwRkYwMCkgPj4gODtcclxuICAgICAgICBsZXQgYSA9ICh2YWwgJiAweDAwMDAwMEZGKTtcclxuICAgICAgICByZXR1cm4gYCMke3NlcFRvSGV4KHIpfSR7c2VwVG9IZXgoZyl9JHtzZXBUb0hleChiKX0ke3NlcFRvSGV4KGEpfX1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclNlcCggYzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBjID09IG51bGwgPyBcIjBcIiA6IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gYyA6IE51bWJlci5pc0ludGVnZXIoYykgPyBjLnRvU3RyaW5nKCkgOiB0aGlzLnBlcmNlbnQoYyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyIHwgc3RyaW5nLCBnOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByID0gdGhpcy5jb2xvclNlcChyKTtcclxuICAgIGcgPSB0aGlzLmNvbG9yU2VwKGcpO1xyXG4gICAgYiA9IHRoaXMuY29sb3JTZXAoYik7XHJcbiAgICBhID0gYSA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBhID09PSBcInN0cmluZ1wiID8gYSA6IHRoaXMucGVyY2VudChhKTtcclxuXHJcbiAgICByZXR1cm4gYSA9PSBudWxsID8gYHJnYigke3J9LCR7Z30sJHtifSlgIDogYHJnYmEoJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2woIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyIHwgc3RyaW5nLCBsOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgaCA9IHR5cGVvZiBoID09PSBcInN0cmluZ1wiID8gaCA6IE51bWJlci5pc0ludGVnZXIoIGgpID8gaCArIFwiZGVnXCIgOiBoICsgXCJyYWRcIjtcclxuICAgIHMgPSBzID09IG51bGwgPyBcIjEwMCVcIiA6IHR5cGVvZiBzID09PSBcInN0cmluZ1wiID8gcyA6IHRoaXMucGVyY2VudChzKTtcclxuICAgIGwgPSBsID09IG51bGwgPyBcIjEwMCVcIiA6IHR5cGVvZiBsID09PSBcInN0cmluZ1wiID8gbCA6IHRoaXMucGVyY2VudChsKTtcclxuICAgIGEgPSBhID09IG51bGwgPyBudWxsIDogdHlwZW9mIGEgPT09IFwic3RyaW5nXCIgPyBhIDogdGhpcy5wZXJjZW50KGEpO1xyXG5cclxuICAgIHJldHVybiBhID09IG51bGwgPyBgaHNsKCR7aH0sJHtzfSwke2x9KWAgOiBgaHNsYSgke2h9LCR7c30sJHtsfSwke2F9KWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgdHlwZW9mIENvbG9yVHlwZXMuQ29sb3JzLCBhOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHJnYlZhbCA9IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gQ29sb3JUeXBlcy5Db2xvcnNbY10gOiBjO1xyXG4gICAgcmV0dXJuIHJnYiggKHJnYlZhbCAmIDB4RkYwMDAwKSA+PiAxNiwgKHJnYlZhbCAmIDB4MDBGRjAwKSA+PiA4LCByZ2JWYWwgJiAweDAwMDBGRiwgYSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIGFycmF5IHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JBc0FycmF5VG9Dc3NTdHJpbmcoIHZhbDogQ29sb3JUeXBlcy5Db2xvckFzQXJyYXkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9Dc3NTdHJpbmcoIHZhbFswXSk7XHJcbiAgICBlbHNlIGlmICh2YWwubGVuZ3RoID09PSAyKVxyXG4gICAgICAgIHJldHVybiBhbHBoYSggdmFsWzBdLCB2YWxbMV0pLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwubGVuZ3RoID09PSAzKVxyXG4gICAgICAgIHJldHVybiByZ2IoIHZhbFswXSwgdmFsWzFdLCB2YWxbMl0pLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHJnYiggdmFsWzBdLCB2YWxbMV0sIHZhbFsyXSwgdmFsWzNdKS50b1N0cmluZygpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGltZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFRpbWUgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb0Nzc1N0cmluZyggdmFsOiBDb2xvclR5cGVzLkNvbG9yX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuXHQgICAgcmV0dXJuIGNvbG9yTnVtYmVyVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCB2YWwpKVxyXG5cdCAgICByZXR1cm4gY29sb3JBc0FycmF5VG9Dc3NTdHJpbmcoIHZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdHlwZXMgZm9yIHdvcmtpbmcgd2l0aCBDU1MgY29sb3JzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7QmFzZV9TdHlsZVR5cGV9IGZyb20gXCIuL1V0aWxUeXBlc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBPYmplY3Qgd2hvc2UgcHJvcGVydHkgbmFtZXMgYXJlIG5hbWVzIG9mIHdlbGwta25vd24gY29sb3JzIGFuZCB2YWx1ZXMgY29ycmVzcG9uZCB0byB0aGUgaGV4YWRlY2ltYWxcclxuICogcmVwcmVzZW50YXJ0aW9uIG9mIHRoZSBSR0Igc2VwYXJhdGlvbnMgKHdpdGhvdXQgYW4gYWxwaGEgbWFzaykuXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbG9ycyA9XHJcbntcclxuICAgIGJsYWNrOiAweDAwMDAwMCxcclxuICAgIHNpbHZlcjogMHhjMGMwYzAsXHJcbiAgICBncmF5OiAweDgwODA4MCxcclxuICAgIHdoaXRlOiAweGZmZmZmZixcclxuICAgIG1hcm9vbjogMHg4MDAwMDAsXHJcbiAgICByZWQ6IDB4ZmYwMDAwLFxyXG4gICAgcHVycGxlOiAweDgwMDA4MCxcclxuICAgIGZ1Y2hzaWE6IDB4ZmYwMGZmLFxyXG4gICAgZ3JlZW46IDB4MDA4MDAwLFxyXG4gICAgbGltZTogMHgwMGZmMDAsXHJcbiAgICBvbGl2ZTogMHg4MDgwMDAsXHJcbiAgICB5ZWxsb3c6IDB4ZmZmZjAwLFxyXG4gICAgbmF2eTogMHgwMDAwODAsXHJcbiAgICBibHVlOiAweDAwMDBmZixcclxuICAgIHRlYWw6IDB4MDA4MDgwLFxyXG4gICAgYXF1YTogMHgwMGZmZmYsXHJcbiAgICBvcmFuZ2U6IDB4ZmZhNTAwLFxyXG4gICAgYWxpY2VibHVlOiAweGYwZjhmZixcclxuICAgIGFudGlxdWV3aGl0ZTogMHhmYWViZDcsXHJcbiAgICBhcXVhbWFyaW5lOiAweDdmZmZkNCxcclxuICAgIGF6dXJlOiAweGYwZmZmZixcclxuICAgIGJlaWdlOiAweGY1ZjVkYyxcclxuICAgIGJpc3F1ZTogMHhmZmU0YzQsXHJcbiAgICBibGFuY2hlZGFsbW9uZDogMHhmZmViY2QsXHJcbiAgICBibHVldmlvbGV0OiAweDhhMmJlMixcclxuICAgIGJyb3duOiAweGE1MmEyYSxcclxuICAgIGJ1cmx5d29vZDogMHhkZWI4ODcsXHJcbiAgICBjYWRldGJsdWU6IDB4NWY5ZWEwLFxyXG4gICAgY2hhcnRyZXVzZTogMHg3ZmZmMDAsXHJcbiAgICBjaG9jb2xhdGU6IDB4ZDI2OTFlLFxyXG4gICAgY29yYWw6IDB4ZmY3ZjUwLFxyXG4gICAgY29ybmZsb3dlcmJsdWU6IDB4NjQ5NWVkLFxyXG4gICAgY29ybnNpbGs6IDB4ZmZmOGRjLFxyXG4gICAgY3JpbXNvbjogMHhkYzE0M2MsXHJcbiAgICBjeWFuOiAweDAwZmZmZixcclxuICAgIGRhcmtibHVlOiAweDAwMDA4YixcclxuICAgIGRhcmtjeWFuOiAweDAwOGI4YixcclxuICAgIGRhcmtnb2xkZW5yb2Q6IDB4Yjg4NjBiLFxyXG4gICAgZGFya2dyYXk6IDB4YTlhOWE5LFxyXG4gICAgZGFya2dyZWVuOiAweDAwNjQwMCxcclxuICAgIGRhcmtncmV5OiAweGE5YTlhOSxcclxuICAgIGRhcmtraGFraTogMHhiZGI3NmIsXHJcbiAgICBkYXJrbWFnZW50YTogMHg4YjAwOGIsXHJcbiAgICBkYXJrb2xpdmVncmVlbjogMHg1NTZiMmYsXHJcbiAgICBkYXJrb3JhbmdlOiAweGZmOGMwMCxcclxuICAgIGRhcmtvcmNoaWQ6IDB4OTkzMmNjLFxyXG4gICAgZGFya3JlZDogMHg4YjAwMDAsXHJcbiAgICBkYXJrc2FsbW9uOiAweGU5OTY3YSxcclxuICAgIGRhcmtzZWFncmVlbjogMHg4ZmJjOGYsXHJcbiAgICBkYXJrc2xhdGVibHVlOiAweDQ4M2Q4YixcclxuICAgIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmLFxyXG4gICAgZGFya3NsYXRlZ3JleTogMHgyZjRmNGYsXHJcbiAgICBkYXJrdHVycXVvaXNlOiAweDAwY2VkMSxcclxuICAgIGRhcmt2aW9sZXQ6IDB4OTQwMGQzLFxyXG4gICAgZGVlcHBpbms6IDB4ZmYxNDkzLFxyXG4gICAgZGVlcHNreWJsdWU6IDB4MDBiZmZmLFxyXG4gICAgZGltZ3JheTogMHg2OTY5NjksXHJcbiAgICBkaW1ncmV5OiAweDY5Njk2OSxcclxuICAgIGRvZGdlcmJsdWU6IDB4MWU5MGZmLFxyXG4gICAgZmlyZWJyaWNrOiAweGIyMjIyMixcclxuICAgIGZsb3JhbHdoaXRlOiAweGZmZmFmMCxcclxuICAgIGZvcmVzdGdyZWVuOiAweDIyOGIyMixcclxuICAgIGdhaW5zYm9ybzogMHhkY2RjZGMsXHJcbiAgICBnaG9zdHdoaXRlOiAweGY4ZjhmZixcclxuICAgIGdvbGQ6IDB4ZmZkNzAwLFxyXG4gICAgZ29sZGVucm9kOiAweGRhYTUyMCxcclxuICAgIGdyZWVueWVsbG93OiAweGFkZmYyZixcclxuICAgIGdyZXk6IDB4ODA4MDgwLFxyXG4gICAgaG9uZXlkZXc6IDB4ZjBmZmYwLFxyXG4gICAgaG90cGluazogMHhmZjY5YjQsXHJcbiAgICBpbmRpYW5yZWQ6IDB4Y2Q1YzVjLFxyXG4gICAgaW5kaWdvOiAweDRiMDA4MixcclxuICAgIGl2b3J5OiAweGZmZmZmMCxcclxuICAgIGtoYWtpOiAweGYwZTY4YyxcclxuICAgIGxhdmVuZGVyOiAweGU2ZTZmYSxcclxuICAgIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1LFxyXG4gICAgbGF3bmdyZWVuOiAweDdjZmMwMCxcclxuICAgIGxlbW9uY2hpZmZvbjogMHhmZmZhY2QsXHJcbiAgICBsaWdodGJsdWU6IDB4YWRkOGU2LFxyXG4gICAgbGlnaHRjb3JhbDogMHhmMDgwODAsXHJcbiAgICBsaWdodGN5YW46IDB4ZTBmZmZmLFxyXG4gICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyLFxyXG4gICAgbGlnaHRncmF5OiAweGQzZDNkMyxcclxuICAgIGxpZ2h0Z3JlZW46IDB4OTBlZTkwLFxyXG4gICAgbGlnaHRncmV5OiAweGQzZDNkMyxcclxuICAgIGxpZ2h0cGluazogMHhmZmI2YzEsXHJcbiAgICBsaWdodHNhbG1vbjogMHhmZmEwN2EsXHJcbiAgICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYSxcclxuICAgIGxpZ2h0c2t5Ymx1ZTogMHg4N2NlZmEsXHJcbiAgICBsaWdodHNsYXRlZ3JheTogMHg3Nzg4OTksXHJcbiAgICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTksXHJcbiAgICBsaWdodHN0ZWVsYmx1ZTogMHhiMGM0ZGUsXHJcbiAgICBsaWdodHllbGxvdzogMHhmZmZmZTAsXHJcbiAgICBsaW1lZ3JlZW46IDB4MzJjZDMyLFxyXG4gICAgbGluZW46IDB4ZmFmMGU2LFxyXG4gICAgbWFnZW50YTogMHhmZjAwZmYsXHJcbiAgICBtZWRpdW1hcXVhbWFyaW5lOiAweDY2Y2RhYSxcclxuICAgIG1lZGl1bWJsdWU6IDB4MDAwMGNkLFxyXG4gICAgbWVkaXVtb3JjaGlkOiAweGJhNTVkMyxcclxuICAgIG1lZGl1bXB1cnBsZTogMHg5MzcwZGIsXHJcbiAgICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzEsXHJcbiAgICBtZWRpdW1zbGF0ZWJsdWU6IDB4N2I2OGVlLFxyXG4gICAgbWVkaXVtc3ByaW5nZ3JlZW46IDB4MDBmYTlhLFxyXG4gICAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjYyxcclxuICAgIG1lZGl1bXZpb2xldHJlZDogMHhjNzE1ODUsXHJcbiAgICBtaWRuaWdodGJsdWU6IDB4MTkxOTcwLFxyXG4gICAgbWludGNyZWFtOiAweGY1ZmZmYSxcclxuICAgIG1pc3R5cm9zZTogMHhmZmU0ZTEsXHJcbiAgICBtb2NjYXNpbjogMHhmZmU0YjUsXHJcbiAgICBuYXZham93aGl0ZTogMHhmZmRlYWQsXHJcbiAgICBvbGRsYWNlOiAweGZkZjVlNixcclxuICAgIG9saXZlZHJhYjogMHg2YjhlMjMsXHJcbiAgICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwLFxyXG4gICAgb3JjaGlkOiAweGRhNzBkNixcclxuICAgIHBhbGVnb2xkZW5yb2Q6IDB4ZWVlOGFhLFxyXG4gICAgcGFsZWdyZWVuOiAweDk4ZmI5OCxcclxuICAgIHBhbGV0dXJxdW9pc2U6IDB4YWZlZWVlLFxyXG4gICAgcGFsZXZpb2xldHJlZDogMHhkYjcwOTMsXHJcbiAgICBwYXBheWF3aGlwOiAweGZmZWZkNSxcclxuICAgIHBlYWNocHVmZjogMHhmZmRhYjksXHJcbiAgICBwZXJ1OiAweGNkODUzZixcclxuICAgIHBpbms6IDB4ZmZjMGNiLFxyXG4gICAgcGx1bTogMHhkZGEwZGQsXHJcbiAgICBwb3dkZXJibHVlOiAweGIwZTBlNixcclxuICAgIHJvc3licm93bjogMHhiYzhmOGYsXHJcbiAgICByb3lhbGJsdWU6IDB4NDE2OWUxLFxyXG4gICAgc2FkZGxlYnJvd246IDB4OGI0NTEzLFxyXG4gICAgc2FsbW9uOiAweGZhODA3MixcclxuICAgIHNhbmR5YnJvd246IDB4ZjRhNDYwLFxyXG4gICAgc2VhZ3JlZW46IDB4MmU4YjU3LFxyXG4gICAgc2Vhc2hlbGw6IDB4ZmZmNWVlLFxyXG4gICAgc2llbm5hOiAweGEwNTIyZCxcclxuICAgIHNreWJsdWU6IDB4ODdjZWViLFxyXG4gICAgc2xhdGVibHVlOiAweDZhNWFjZCxcclxuICAgIHNsYXRlZ3JheTogMHg3MDgwOTAsXHJcbiAgICBzbGF0ZWdyZXk6IDB4NzA4MDkwLFxyXG4gICAgc25vdzogMHhmZmZhZmEsXHJcbiAgICBzcHJpbmdncmVlbjogMHgwMGZmN2YsXHJcbiAgICBzdGVlbGJsdWU6IDB4NDY4MmI0LFxyXG4gICAgdGFuOiAweGQyYjQ4YyxcclxuICAgIHRoaXN0bGU6IDB4ZDhiZmQ4LFxyXG4gICAgdG9tYXRvOiAweGZmNjM0NyxcclxuICAgIHR1cnF1b2lzZTogMHg0MGUwZDAsXHJcbiAgICB2aW9sZXQ6IDB4ZWU4MmVlLFxyXG4gICAgd2hlYXQ6IDB4ZjVkZWIzLFxyXG4gICAgd2hpdGVzbW9rZTogMHhmNWY1ZjUsXHJcbiAgICB5ZWxsb3dncmVlbjogMHg5YWNkMzIsXHJcbiAgICByZWJlY2NhcHVycGxlOiAweDY2MzM5OVxyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBUaGUgQ29sb3JzIG9iamVjdCBpcyB1c2VkIHRvIGdldCBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIHRoZSB3ZWxsLWtub3duIFdlYiBjb2xvcnMgYXMgd2VsbCBhc1xyXG4vLyAgKiB0byBnZXQgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuXHJcbi8vICAqL1xyXG4vLyBleHBvcnQgbGV0IENvbG9ycyA9IG5ldyBDb2xvcnNDbGFzcygpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5OlxyXG4gKiAgIC0gc2luZ2xlLWVsZW1lbnQgYXJyYXkgcmVwcmVzZW50cyBhIGNvbG9yIHZhbHVlIGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyBhIG51bWJlci5cclxuICogICAtIHR3by1lbGVtZW50IGFycmF5IHJlcHJlc2VudHMgZWl0aGVyIGEgY29sb3IgbmFtZSBvciBhIG51bWVyaWMgUkdCIHZhbHVlIGluIHRoZSBmaXJzdCBlbGVtZW50XHJcbiAqICAgICBhbmQgYW4gYWxwaGEgc2VwYXJhdGlvbiBpbiB0aGUgc2Vjb25kIGVsZW1lbnQuXHJcbiAqICAgLSB0aHJlZS1lbGVtZW50IGFyYXkgcmVwcmVzZW50cyBSR0Igc2VwYXJhdGlvbnMgYXMgZWl0aGVyIGludGVnZXIgbnVtYmVycyAoMCB0byAyNTUpIG9yIGZsb2F0aW5nXHJcbiAqICAgICBudW1iZXJzICgwLjAgdG8gMS4wKSBmb3IgcGVyY2VudGFnZXMuXHJcbiAqICAgLSBmb3VyLWVsZW1lbnQgYXJheSByZXByZXNlbnRzIFJHQkEgc2VwYXJhdGlvbnMgYXMgZWl0aGVyIGludGVnZXIgbnVtYmVycyAoMCB0byAyNTUpIG9yIGZsb2F0aW5nXHJcbiAqICAgICBudW1iZXJzICgwLjAgdG8gMS4wKSBmb3IgcGVyY2VudGFnZXMuIFRoZSBhbHBoYSBzZXBhcmF0aW9uICh0aGUgbGFzdCBlbGVtZW50KSBpcyBhbHdheXMgYVxyXG4gKiAgICAgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbG9yQXNBcnJheSA9XHJcbiAgICAgICAgICAgICAgICBba2V5b2YgdHlwZW9mIENvbG9ycyB8IG51bWJlcl0gfFxyXG4gICAgICAgICAgICAgICAgW2tleW9mIHR5cGVvZiBDb2xvcnMgfCBudW1iZXIsIG51bWJlcl0gfFxyXG4gICAgICAgICAgICAgICAgW251bWJlciwgbnVtYmVyLCBudW1iZXJdIHxcclxuICAgICAgICAgICAgICAgIFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyBjb2xvci4gQ29sb3IgY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gXCJyZWRcIiBvciBcIiNmZTVcIiBvciBcInJnYmEoMTkwLCAyMDAsIDIzNSwgOTAlKVwiLCBldGMuKVxyXG4gKiAgIC0gbnVtYmVyOlxyXG4gKiAgICAgLSBwb3NpdGl2ZSBpbnRlZ2VyIG51bWJlcnMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIDB4RkZGRkZGIGFyZSB0cmVhdGVkIGFzIFJHQiBzZXBhcmF0aW9ucyAweFJSR0dCQi5cclxuICogICAgIC0gcG9zaXRpdmUgaW50ZWdlciBudW1iZXJzIGdyZWF0ZXIgdGhhbiAweEZGRkZGRiBhcmUgdHJlYXRlZCBhcyBSR0JBIHNlcGFyYXRpb25zIDB4UlJHR0JCQUEuXHJcbiAqICAgICAtIG5lZ2F0aXZlIGFuZCBmbG9hdGluZyBwb2ludCBudW1iZXJzIGFyZSByZWplY3RlZC5cclxuICogICAtIGFycmF5IFtbQ29sb3JBc0FycmF5XV1cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbG9yX1N0eWxlVHlwZSA9IFwidHJhbnNwYXJlbnRcIiB8IFwiY3VycmVudGNvbG9yXCIgfCBrZXlvZiB0eXBlb2YgQ29sb3JzIHwgbnVtYmVyIHwgQ29sb3JBc0FycmF5IHwgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIEZvbnRGYWNlVHlwZXMgZnJvbSBcIi4vRm9udEZhY2VUeXBlc1wiXHJcbmltcG9ydCAqIGFzIFV0aWxGdW5jcyBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIGZvbnQgZmFjZSBkZWZpbml0aW9uIG9iamVjdCB0byB0aGUgQ1NTIHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRGYWNlVG9Dc3NTdHJpbmcoIGZvbnRmYWNlOiBGb250RmFjZVR5cGVzLkZvbnRmYWNlKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZvbnRmYWNlIHx8ICFmb250ZmFjZS5mb250RmFtaWx5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIGxldCBzID0gXCJ7XCI7XHJcblxyXG4gICAgZm9yKCBsZXQgcHJvcE5hbWUgaW4gZm9udGZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgcyArPSBgJHtVdGlsRnVuY3MuY2FtZWxUb0Rhc2goIHByb3BOYW1lKX06YDtcclxuICAgICAgICBsZXQgcHJvcFZhbCA9IGZvbnRmYWNlW3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiZm9udFN0cmV0Y2hcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3RyZXRjaFRvQ3NzU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJmb250U3R5bGVcIilcclxuICAgICAgICAgICAgcyArPSBmb250U3R5bGVUb0Nzc1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiZm9udFdlaWdodFwiKVxyXG4gICAgICAgICAgICBzICs9IGZvbnRXZWlnaHRUb0Nzc1N0cmluZyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcE5hbWUgPT09IFwic3JjXCIpXHJcbiAgICAgICAgICAgIHMgKz0gZm9udFNyY1RvQ3NzU3RyaW5nKCBwcm9wVmFsKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcFZhbDtcclxuXHJcbiAgICAgICAgcyArPSBcIjtcIlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzICsgXCJ9XCI7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRTdHJldGNoVG9Dc3NTdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3RyZXRjaFR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbCArIFwiJVwiO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgJHt2YWxbMF19JSAke3ZhbFsxXX0lYDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9udFN0eWxlVG9Dc3NTdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3RyZXRjaFR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIGBvYmxpcXVlICR7dmFsfWRlZ2A7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBcIm9ibGlxdWUgXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWxbMF0gPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHMgKz0gdmFsWzBdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcyArPSBgJHt2YWxbMF19ZGVnYDtcclxuXHJcbiAgICAgICAgaWYgKHZhbFsxXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHMgKz0gXCIgXCI7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsWzFdID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcyArPSB2YWxbMV07XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHMgKz0gYCR7dmFsWzFdfWRlZ2A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9udFdlaWdodFRvQ3NzU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFdlaWdodFR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgJHt2YWxbMF0udG9TdHJpbmcoKX0gJHt2YWxbMV0udG9TdHJpbmcoKX1gO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb250U3JjVG9Dc3NTdHJpbmcoIHZhbDogRm9udEZhY2VUeXBlcy5Gb250U3JjVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiB8fCAhQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBmb250U2luZ2xlU3JjVG9Dc3NTdHJpbmcoIHZhbCBhcyBGb250RmFjZVR5cGVzLkZvbnRTaW5nbGVTcmNUeXBlKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsLm1hcCggKHNpbmdsZVZhbCkgPT4gZm9udFNpbmdsZVNyY1RvQ3NzU3RyaW5nKCBzaW5nbGVWYWwpKS5qb2luKFwiLFwiKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9udFNpbmdsZVNyY1RvQ3NzU3RyaW5nKCB2YWw6IEZvbnRGYWNlVHlwZXMuRm9udFNpbmdsZVNyY1R5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZhbC5zdGFydHNXaXRoKFwibG9jYWwoXCIpIHx8IHZhbC5zdGFydHNXaXRoKFwidXJsKFwiKSlcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBgdXJsKCR7dmFsfSlgO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIFwibG9jYWxcIiBpbiB2YWwpXHJcbiAgICAgICAgcmV0dXJuIGBsb2NhbCgke3ZhbC5sb2NhbH0pYDtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IGB1cmwoJHt2YWwudXJsfSlgO1xyXG4gICAgICAgIGlmICh2YWwuZm9ybWF0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcyArPSBcIiBmb3JtYXQoXCI7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsLmZvcm1hdCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHMgKz0gYFxcXCIke3ZhbC5mb3JtYXR9XFxcImA7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHMgKz0gdmFsLmZvcm1hdC5tYXAoICh2KSA9PiBgXFxcIiR7dn1cXFwiYCkuam9pbiggXCIsXCIpO1xyXG5cclxuICAgICAgICAgICAgcyArPSBcIilcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFV0aWxGdW5jcyBmcm9tIFwiLi9VdGlsRnVuY3NcIlxyXG5pbXBvcnQgKiBhcyBNZWRpYVR5cGVzIGZyb20gXCIuL01lZGlhVHlwZXNcIlxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhc3BlY3RSYXRpb1RvQ3NzU3RyaW5nKCB2YWw6IE1lZGlhVHlwZXMuQXNwZWN0UmF0aW9GZWF0dXJlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIiA/IHZhbCA6IHZhbFswXSArIFwiL1wiICsgdmFsWzFdO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGxlbmd0aEZlYXR1cmVUb0Nzc1N0cmluZyggdmFsOiBNZWRpYVR5cGVzLkxlbmd0aEZlYXR1cmVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiID8gdmFsIDogdmFsICsgXCJweFwiO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc29sdXRpb25GZWF0dXJlVG9Dc3NTdHJpbmcoIHZhbDogTWVkaWFUeXBlcy5SZXNvbHV0aW9uRmVhdHVyZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwgKyBcImRwaVwiO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIG9mIGEgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyB0aGUgcHJvcGVydHktc3BlY2lmaWMgdHlwZSB0byBDU1Mgc3RyaW5nICovXHJcbnR5cGUgY29udmVydEZ1bmNUeXBlPEsgZXh0ZW5kcyBrZXlvZiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldD4gPSAodmFsOiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXSkgPT4gc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIE1lZGlhRmVhdHVyZUluZm8gcmVwcmVzZW50cyBpbmZvcm1hdGlvbiB0aGF0IHdlIGtlZXAgZm9yIHN0eWxlIHByb3BlcnRpZXNcclxuICovXHJcbnR5cGUgTWVkaWFGZWF0dXJlSW5mbzxLIGV4dGVuZHMga2V5b2YgTWVkaWFUeXBlcy5NZWRpYUZlYXR1cmVzZXQgPSBhbnk+ID0gY29udmVydEZ1bmNUeXBlPEs+IHwgc3RyaW5nIHxcclxuICAgIHtcclxuICAgICAgICAvKiogRnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBmcm9tIHRoZSBwcm9wZXJ0eS1zcGVjaWZpYyB0eXBlIHRvIENTUyBzdHJpbmcgKi9cclxuICAgICAgICBjb252ZXJ0PzogY29udmVydEZ1bmNUeXBlPEs+O1xyXG5cclxuICAgICAgICAvKiogSWYgZGVmaW5lZCwgaW5kaWNhdGVzIHRoZSBwcm9wZXJ0eSB0aGF0IG91ciBwcm9wZXJ0eSBzaG91bGQgYmUgdHJlYXRlZCBhcyAqL1xyXG4gICAgICAgIHRyZWF0QXM/OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIGRlZmluZWQsIGluZGljYXRlcyB0aGUgdmFsdWUsIHdoaWNoIHdlIHdpbGwgbm90IHB1dCBpbnRvIENTUyBzdHJpbmcuIFRoaXMgaXMgbmVlZGVkIGZvclxyXG4gICAgICAgICAqIG1lZGlhIGZlYXR1cmVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRob3V0IHRoZSB2YWx1ZSwgZS5nLiBjb2xvciBvciBjb2xvci1pbmRleC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBkZWZhdWx0VmFsdWU/OiBNZWRpYVR5cGVzLk1lZGlhRmVhdHVyZXNldFtLXTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbWVkaWEgcXVlcnkgb2JqZWN0IHRvIHRoZSBDU1MgbWVkaWEgcXVlcnkgc3RyaW5nXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFRdWVyeVRvQ3NzU3RyaW5nKCBxdWVyeTogTWVkaWFUeXBlcy5NZWRpYVF1ZXJ5KTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIXF1ZXJ5KVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeSkpXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lm1hcCggKHNpbmdsZVF1ZXJ5KSA9PiBzaW5nbGVNZWRpYVF1ZXJ5VG9Dc3NTdHJpbmcoIHNpbmdsZVF1ZXJ5KSkuam9pbihcIiwgXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzaW5nbGVNZWRpYVF1ZXJ5VG9Dc3NTdHJpbmcoIHF1ZXJ5KTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIHF1ZXJ5IG9iamVjdCB0byB0aGUgQ1NTIG1lZGlhIHF1ZXJ5IHN0cmluZ1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZU1lZGlhUXVlcnlUb0Nzc1N0cmluZyggcXVlcnk6IE1lZGlhVHlwZXMuU2luZ2xlTWVkaWFRdWVyeSk6IHN0cmluZyB8IG51bGxcclxue1xyXG4gICAgaWYgKCFxdWVyeSlcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBsZXQgbWVkaWFUeXBlID0gcXVlcnkuJG1lZGlhVHlwZTtcclxuICAgIGxldCBvbmx5ID0gcXVlcnkuJG9ubHk7XHJcbiAgICBsZXQgbmVnYXRlID0gcXVlcnkuJG5lZ2F0ZTtcclxuXHJcbiAgICBsZXQgaXRlbXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAobWVkaWFUeXBlKVxyXG4gICAgICAgIGl0ZW1zLnB1c2goIChvbmx5ID8gXCJvbmx5IFwiIDogXCJcIikgKyBtZWRpYVR5cGUpO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BOYW1lIGluIHF1ZXJ5KVxyXG4gICAge1xyXG4gICAgICAgIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKFwiJFwiKSlcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChxdWVyeVtwcm9wTmFtZV0pXHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goIGAoJHttZWRpYUZlYXR1cmVUb0Nzc1N0cmluZyggcHJvcE5hbWUsIHF1ZXJ5W3Byb3BOYW1lXSl9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtuZWdhdGUgPyBcIm5vdCBcIiA6IFwiXCJ9JHtpdGVtcy5qb2luKFwiIGFuZCBcIil9YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIG1lZGlhIGZlYXR1cmUgdG8gdGhlIENTUyBtZWRpYSBxdWVyeSBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWRpYUZlYXR1cmVUb0Nzc1N0cmluZyggZmVhdHVyZU5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nIHwgbnVsbFxyXG57XHJcbiAgICBpZiAoIWZlYXR1cmVOYW1lIHx8IHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgZm9sbG93IFwidHJlYXRBc1wiIHdoaWxlIGV4aXN0c1xyXG4gICAgbGV0IGluZm86IE1lZGlhRmVhdHVyZUluZm8gPSBtZWRpYUZlYXR1cmVzW2ZlYXR1cmVOYW1lXTtcclxuICAgIHdoaWxlKCBpbmZvKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgaW5mbyA9IG1lZGlhRmVhdHVyZXNbaW5mb107XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIGluZm8gPSBtZWRpYUZlYXR1cmVzW2luZm8udHJlYXRBc107XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVhbEZlYXR1cmVOYW1lID0gVXRpbEZ1bmNzLmNhbWVsVG9EYXNoKCBmZWF0dXJlTmFtZSk7XHJcblxyXG4gICAgLy8gaWYgZGVmYXVsdFZhbHVlIGlzIGRlZmluZWQgYW5kIHRoZSBwcm9wZXJ0eSB2YWx1ZSBpcyBlcXVhbCB0byBpdCwgbm8gdmFsdWUgc2hvdWxkIGJlIHJldHVybmVkLlxyXG4gICAgbGV0IGRlZmF1bHRWYWx1ZSA9IHR5cGVvZiBpbmZvID09PSBcIm9iamVjdFwiID8gaW5mby5kZWZhdWx0VmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcFZhbCA9PT0gZGVmYXVsdFZhbHVlKVxyXG4gICAgICAgIHJldHVybiB2YWx1ZU9ubHkgPyBcIlwiIDogcmVhbEZlYXR1cmVOYW1lO1xyXG5cclxuICAgIGxldCBzOiBzdHJpbmc7XHJcbiAgICBsZXQgY29udmVydCA9IHR5cGVvZiBpbmZvID09PSBcImZ1bmN0aW9uXCIgPyBpbmZvIDogdHlwZW9mIGluZm8gPT09IFwib2JqZWN0XCIgPyBpbmZvLmNvbnZlcnQgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAoY29udmVydClcclxuICAgICAgICBzID0gY29udmVydCggcHJvcFZhbCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBzID0gcHJvcFZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHByb3BWYWwpKVxyXG4gICAgICAgIHMgPSBVdGlsRnVuY3MuYXJyYXlUb0Nzc1N0cmluZyggcHJvcFZhbCwgaXRlbSA9PiBpdGVtID09IG51bGwgPyBcIlwiIDogaXRlbS50b1N0cmluZygpKTtcclxuICAgIGVsc2VcclxuICAgICAgICBzID0gcHJvcFZhbC50b1N0cmluZygpO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZU9ubHkgPyBzIDogcmVhbEZlYXR1cmVOYW1lICsgXCI6XCIgKyBzO1xyXG59XHJcblxyXG5cclxuXHJcbmxldCBtZWRpYUZlYXR1cmVzOiB7IFtLIGluIGtleW9mIE1lZGlhVHlwZXMuTWVkaWFGZWF0dXJlc2V0XT86IE1lZGlhRmVhdHVyZUluZm88Sz4gfSA9XHJcbntcclxuICAgIGFzcGVjdFJhdGlvOiBhc3BlY3RSYXRpb1RvQ3NzU3RyaW5nLFxyXG4gICAgbWluQXNwZWN0UmF0aW86IFwiYXNwZWN0UmF0aW9cIixcclxuICAgIG1heEFzcGVjdFJhdGlvOiBcImFzcGVjdFJhdGlvXCIsXHJcbiAgICBjb2xvcjogeyBkZWZhdWx0VmFsdWU6IDAgfSxcclxuICAgIG1pbkNvbG9yOiBcImNvbG9yXCIsXHJcbiAgICBtYXhDb2xvcjogXCJjb2xvclwiLFxyXG4gICAgY29sb3JJbmRleDogeyBkZWZhdWx0VmFsdWU6IDAgfSxcclxuICAgIG1pbkNvbG9ySW5kZXg6IFwiY29sb3JcIixcclxuICAgIG1heENvbG9ySW5kZXg6IFwiY29sb3JcIixcclxuICAgIGhlaWdodDogbGVuZ3RoRmVhdHVyZVRvQ3NzU3RyaW5nLFxyXG4gICAgbWluSGVpZ2h0OiBcImhlaWdodFwiLFxyXG4gICAgbWF4SGVpZ2h0OiBcImhlaWdodFwiLFxyXG4gICAgbW9ub2Nocm9tZTogeyBkZWZhdWx0VmFsdWU6IDAgfSxcclxuICAgIG1pbk1vbm9jaHJvbWU6IFwibW9ub2Nocm9tZVwiLFxyXG4gICAgbWF4TW9ub2Nocm9tZTpcIm1vbm9jaHJvbWVcIixcclxuICAgIHJlc29sdXRpb246IHJlc29sdXRpb25GZWF0dXJlVG9Dc3NTdHJpbmcsXHJcbiAgICBtaW5SZXNvbHV0aW9uOiBcInJlc29sdXRpb25cIixcclxuICAgIG1heFJlc29sdXRpb246IFwicmVzb2x1dGlvblwiLFxyXG4gICAgd2lkdGg6IGxlbmd0aEZlYXR1cmVUb0Nzc1N0cmluZyxcclxuICAgIG1pbldpZHRoOiBcIndpZHRoXCIsXHJcbiAgICBtYXhXaWR0aDpcIndpZHRoXCIsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFV0aWxUeXBlcyBmcm9tIFwiLi9VdGlsVHlwZXNcIlxyXG5pbXBvcnQgKiBhcyBVdGlsRnVuY3MgZnJvbSBcIi4vVXRpbEZ1bmNzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JUeXBlcyBmcm9tIFwiLi9Db2xvclR5cGVzXCJcclxuaW1wb3J0ICogYXMgQ29sb3JGdW5jcyBmcm9tIFwiLi9Db2xvckZ1bmNzXCI7XHJcbmltcG9ydCAqIGFzIFN0eWxlVHlwZXMgZnJvbSBcIi4vU3R5bGVUeXBlc1wiXHJcbmltcG9ydCB7IElDdXN0b21WYWwgfSBmcm9tIFwiLi4vcnVsZXMvUnVsZVR5cGVzXCI7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbmltYXRpb24gc3R5bGUgcmVwcmVzZW50ZWQgYXMgYW4gb2JqZWN0IHdpdGggZmllbGRzIGNvcnJlc3BvbmRpbmcgdG8gYW5pbWF0aW9uXHJcbiAqIHByb3BlcnRpZXMgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25Ub0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLlNpbmdsZUFuaW1hdGlvbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3Mub2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsXHJcbiAgICAgICAgICAgIFtcImRlbGF5XCIsIFV0aWxGdW5jcy50aW1lVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJmdW5jdGlvblwiLCBzaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wiZHVyYXRpb25cIiwgVXRpbEZ1bmNzLnRpbWVUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFtcImNvdW50XCIsIFV0aWxGdW5jcy5udW1iZXJUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbmltYXRpb24gc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBhbmltYXRpb25Ub0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkFuaW1hdGlvblN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgc2luZ2xlQW5pbWF0aW9uVG9Dc3NTdHJpbmcsIFwiLFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlQW5pbWF0aW9uVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuU2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb24pOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwubGVuZ3RoIDwgMylcclxuXHR7XHJcblx0XHQvLyB0aGlzIGlzIHN0ZXAgZnVuY3Rpb24gd2l0aCBvbmx5IHRoZSBudW1iZXIgb2Ygc3RlcHNcclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAodmFsWzBdIDw9IDApXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIk51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyb1wiKTtcclxuXHRcdFx0ZWxzZSBpZiAoIU51bWJlci5pc0ludGVnZXIoIHZhbFswXSkpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIk51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyXCIpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gYHN0ZXAoJHt2YWxbMF19JHt2YWwubGVuZ3RoID09PSAyID8gXCIsXCIgKyB2YWxbMV0gOiBcIlwifSlgO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAodmFsWzBdIDwgMCB8fCB2YWxbMF0gPiAxIHx8IHZhbFsyXSA8IDAgfHwgdmFsWzJdID4gMSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMVwiKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIGBjdWJpYy1iZXppZXIoJHt2YWxbMF19LCR7dmFsWzFdfSwke3ZhbFsyXX0sJHt2YWxbM119KWA7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW5pbWF0aW9uIGl0ZXJhdGlvbiBjb3VudCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25Ub0Nzc1N0cmluZyggdmFsOiBTdHlsZVR5cGVzLkFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uVG9Dc3NTdHJpbmcoIHZhbCBhcyBTdHlsZVR5cGVzLlNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCBhcyBTdHlsZVR5cGVzLlNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uW10sXHJcbiAgICAgICAgc2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25Ub0Nzc1N0cmluZywgXCIsXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb3JuZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gc2luZ2xlQ29ybmVyUmFkaXVzVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5TaW5nbGVDb3JuZXJSYWRpdXNfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3MuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVyUmFkaXVzVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Cb3JkZXJSYWRpdXNTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggdmFsWzBdKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHR3byBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZXNcclxuICAgICAgICAgICAgbGV0IHMgPSBVdGlsRnVuY3MuYXJyYXlUb0Nzc1N0cmluZyggdmFsWzBdLCBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgcyArPSBcIiAvIFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gcyArIFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCB2YWxbMV0gYXMgU3R5bGVUeXBlcy5NdWx0aUNvcm5lclJhZGl1c19TdHlsZVR5cGUsIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5nbGUgTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwgYXMgU3R5bGVUeXBlcy5NdWx0aUNvcm5lclJhZGl1c19TdHlsZVR5cGUsIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgc3R5bGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJTdHlsZVRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVyU3R5bGVTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5zdHJpbmdBcnJheVRvQ3NzU3RyaW5nKCB2YWwsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgd2lkdGggc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJXaWR0aFRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVyV2lkdGhTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwsIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBzcGFjaW5nIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gYm9yZGVyU3BhY2luZ1RvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVyU3BhY2luZ1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3MuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgY29sb3Igc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQm9yZGVyIGNvbG9yIHZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJDb2xvclRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVyQ29sb3JTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwgYXMgQ29sb3JUeXBlcy5Db2xvcl9TdHlsZVR5cGVbXSwgQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJTaWRlVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Cb3JkZXJTaWRlX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVXRpbFR5cGVzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgIHtcclxuICAgICAgICBsZXQgcyA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWxbMF0gPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB2YWxbMF07XHJcbiAgICAgICAgZWxzZSBpZiAodmFsWzBdIGluc3RhbmNlb2YgVXRpbFR5cGVzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsWzBdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodmFsWzBdICE9IG51bGwpXHJcbiAgICAgICAgICAgIHMgKz0gVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWxbMF0pICsgXCIgXCI7XHJcblxyXG4gICAgICAgIGlmICh2YWxbMV0pXHJcbiAgICAgICAgICAgIHMgKz0gdmFsWzFdICsgXCIgXCI7XHJcblxyXG4gICAgICAgIGlmICh2YWxbMl0pXHJcbiAgICAgICAgICAgIHMgKz0gQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nKCB2YWxbMl0pICsgXCIgXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlci1pbWFnZS1vdXRzZXQgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiBib3JkZXJJbWFnZU91dHNldFRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuQm9yZGVySW1hZ2VPdXRzZXRTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVXRpbFR5cGVzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgYm9yZGVySW1hZ2VPdXRzZXRUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3ggc2hhZG93IHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKi9cclxuZnVuY3Rpb24gYm94U2hhZG93VG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Cb3hTaGFkb3dTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLnN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNsaXAgc3R5bGUgdmFsdWUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjbGlwVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5DbGlwU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgcmVjdCgke1V0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwsIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbiBydWxlIHN0eWxlIHJlcHJlc2VudGVkIGFzIGFuIG9iamVjdCB3aXRoIGZpZWxkcyBjb3JyZXNwb25kaW5nIHRvIGNvbHVtbiBydWxlXHJcbiAqIHByb3BlcnRpZXMgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2x1bW5SdWxlVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Db2x1bW5SdWxlU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghdmFsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBVdGlsRnVuY3Mub2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsXHJcbiAgICAgICAgICAgIFtcIndpZHRoXCIsIGJvcmRlcldpZHRoVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJzdHlsZVwiLCBib3JkZXJTdHlsZVRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wiY29sb3JcIiwgQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbnMgc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb2x1bW5zVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5Db2x1bW5zU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghdmFsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2YWxbMF0udG9TdHJpbmcoKSArIFwiIFwiICsgVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nKCB2YWxbMV0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmbGV4IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gZmxleFRvQ3NzU3RyaW5nKCB2YWw6IFN0eWxlVHlwZXMuRmxleFN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmpvaW4oIFwiIFwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcyA9IHZhbFswXSArIFwiIFwiICsgdmFsWzFdICsgXCIgXCI7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmFsWzJdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICBzICs9IHY7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBzICs9IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGV4dC1lbXBoYXNpcyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICovXHJcbmZ1bmN0aW9uIHRleHRFbXBoYXNpc1Bvc2l0aW9uVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5UZXh0RW1waGFzaXNQb3NpdGlvblN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLnN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGV4dC1pbmRlbnQgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqL1xyXG5mdW5jdGlvbiB0ZXh0SW5kZW50VG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5UZXh0SW5kZW50U3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBgJHtVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbFswXSl9ICR7dmFsWzFdfWA7XHJcbiAgICAgICAgaWYgKHZhbFsyXSlcclxuICAgICAgICAgICAgcyArPSBcIiBcIiArIHZhbFsyXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdHJhbnNsYXRlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKi9cclxuZnVuY3Rpb24gdHJhbnNsYXRlVG9Dc3NTdHJpbmcoIHZhbDogU3R5bGVUeXBlcy5UcmFuc2xhdGVTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gVXRpbEZ1bmNzLm11bHRpTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHByb3BlcnR5IHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxudHlwZSBQcm9wVG9TdHJpbmdGdW5jPFQ+ID0gKHZhbDogVCkgPT4gc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVByb3BlcnR5SW5mbyB0eXBlIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gdGhhdCB3ZSBrZWVwIGZvciBzdHlsZSBwcm9wZXJ0aWVzLiBNb3N0XHJcbiAqIGNvbW1vbmx5LCB0aGUgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhIHByb3BlcnR5IGlzIGEgY29udmVyc2lvbiBmdW5jdGlvbiwgd2hpY2ggdGFrZXMgYSB2YWx1ZVxyXG4gKiBvZiBhIHR5cGUgYWxsb3dlZCBmb3IgdGhlIHByb3BlcnR5IGFuZCBjb252ZXJ0cyBpdCB0byB0aGUgQ1NTIGNvbXBsaWFudCBzdHJpbmcuIEFsdGVybmF0aXZlbHksXHJcbiAqIGl0IGNhbiBiZSBhIG5hbWUgb2YgYW5vdGhlciBTdHlsZXNldCBwcm9wZXJ0eSBmb3Igd2hpY2ggdGhpcyBwcm9wZXJ0eSBpcyBhbiBhbGlhcy4gVGhpcyBpcyB1c2VkXHJcbiAqIGZvciBzaG9ydGVuaW5nIGZyZXF1ZW50bHkgdXNlZCBidXQgbG9uZyBwcm9wZXJ0eSBuYW1lcyAoZS5nLiBcImJnY1wiIGZvciBcImJhY2tncm91bmRDb2xvclwiKSBhbmRcclxuICogZm9yIHZlbmRvci1wcmVmaXhlZCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxudHlwZSBTdHlsZVByb3BlcnR5SW5mbzxUPiA9IFByb3BUb1N0cmluZ0Z1bmM8VD4gfCBrZXlvZiBTdHlsZVR5cGVzLlN0eWxlc2V0O1xyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlc2V0IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9Dc3NTdHJpbmcoIHN0eWxlc2V0OiBTdHlsZVR5cGVzLlN0eWxlc2V0LCBpbXBvcnRhbnQ/OiBTZXQ8c3RyaW5nPik6IHN0cmluZ1xyXG57XHJcbiAgICBsZXQgcyA9IFwiXCI7XHJcblx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVzZXQpXHJcblx0e1xyXG4gICAgICAgIGlmIChwcm9wTmFtZSA9PT0gXCIkY3VzdG9tXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzcGVjaWFsIGhhbmRsaW5nIG9mIHRoZSBcIiRjdXN0b21cIiBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBsZXQgcHJvcFZhbCA9IHN0eWxlc2V0W3Byb3BOYW1lXSBhcyBJQ3VzdG9tVmFsW107XHJcbiAgICAgICAgICAgIGZvciggbGV0IGN1c3RvbVZhbCBvZiBwcm9wVmFsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VzdG9tUHJvcE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZVByb3BOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1c3RvbVZhbC52YXJEZWYgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tUHJvcE5hbWUgPSBjdXN0b21WYWwudmFyRGVmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlUHJvcE5hbWUgPSBjdXN0b21WYWwudGVtcGxhdGVQcm9wTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXN0b21Qcm9wTmFtZSA9IGN1c3RvbVZhbC52YXJEZWYubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVByb3BOYW1lID0gY3VzdG9tVmFsLnZhckRlZi50ZW1wbGF0ZVByb3BOYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghY3VzdG9tUHJvcE5hbWUgfHwgIXRlbXBsYXRlUHJvcE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzICs9IGAtLSR7Y3VzdG9tUHJvcE5hbWV9OiR7c3R5bGVQcm9wVG9Dc3NTdHJpbmcoIHRlbXBsYXRlUHJvcE5hbWUsIGN1c3RvbVZhbC52YXJWYWx1ZSwgdHJ1ZSl9YDtcclxuICAgICAgICAgICAgICAgIHMgKz0gKGltcG9ydGFudCAmJiBpbXBvcnRhbnQuaGFzKCBwcm9wTmFtZSkgPyBcIiAhaW1wb3J0YW50O1wiIDogXCI7XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGdldCB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBzICs9IHN0eWxlUHJvcFRvQ3NzU3RyaW5nKCBwcm9wTmFtZSwgc3R5bGVzZXRbcHJvcE5hbWVdKTtcclxuICAgICAgICAgICAgcyArPSAoaW1wb3J0YW50ICYmIGltcG9ydGFudC5oYXMoIHByb3BOYW1lKSA/IFwiICFpbXBvcnRhbnQ7XCIgOiBcIjtcIik7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICByZXR1cm4gYHske3N9fWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0eWxlIHN0cmluZ1xyXG4gKiBAcGFyYW0gc3R5bGUgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3R5bGVQcm9wVG9Dc3NTdHJpbmcoIHByb3BOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSwgdmFsdWVPbmx5PzogYm9vbGVhbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXByb3BOYW1lIHx8IHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAvLyBmaW5kIGluZm9ybWF0aW9uIG9iamVjdCBmb3IgdGhlIHByb3BlcnR5XHJcbiAgICBsZXQgaW5mbyA9IFN0eWxlUHJvcGVydHlJbmZvc1twcm9wTmFtZV07XHJcbiAgICBpZiAodHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ28gdXAgdGhlIGNoYWluIG9mIGFsaWFzZXMgaWYgYW55ICh3ZSBhZG1pdHRlZGx5IGRvbid0IG1ha2UgdGhlIGVmZm9ydCB0byBkZXRlY3QgY2lyY3VsYXJcclxuICAgICAgICAvLyBkZXBlbmRlbmNpZXMsIGJlY2F1c2Ugc2V0dGluZyB1cCB0aGUgaW5mb3JtYXRpb24gb2JqZWN0cyBpcyBvdXIgam9iIGFuZCBub3QgZGV2ZWxvcGVycycpLlxyXG4gICAgICAgIHdoaWxlKCB0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3BOYW1lID0gaW5mbztcclxuICAgICAgICAgICAgaW5mbyA9IFN0eWxlUHJvcGVydHlJbmZvc1twcm9wTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzID0gdmFsdWVPbmx5ID8gXCJcIiA6IFV0aWxGdW5jcy5jYW1lbFRvRGFzaCggcHJvcE5hbWUpICsgXCI6XCI7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBpbmZvID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgcyArPSBpbmZvKCBwcm9wVmFsKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiBwcm9wVmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHMgKz0gcHJvcFZhbDtcclxuICAgIGVsc2UgaWYgKHByb3BWYWwgaW5zdGFuY2VvZiBVdGlsVHlwZXMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcyArPSBwcm9wVmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBwcm9wVmFsKSlcclxuICAgICAgICBzICs9IFV0aWxGdW5jcy5hcnJheVRvQ3NzU3RyaW5nKCBwcm9wVmFsLCBpdGVtID0+IGl0ZW0gPT0gbnVsbCA/IFwiXCIgOiBpdGVtLnRvU3RyaW5nKCkpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHMgKz0gcHJvcFZhbC50b1N0cmluZygpO1xyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgcHJvcGVydHkgbmFtZXMgdG8gdGhlIFN0eWxlUHJvcGVydHlJbmZvIG9iamVjdHMgZGVzY3JpYmluZyBjdXN0b20gYWN0aW9ucyBuZWNlc3NhcnkgdG9cclxuICogY29udmVydCB0aGUgcHJvcGVydHkgdmFsdWUgdG8gdGhlIENTUy1jb21wbGlhbnQgc3RyaW5nLlxyXG4gKi9cclxuY29uc3QgU3R5bGVQcm9wZXJ0eUluZm9zOiB7IFtLIGluIGtleW9mIFN0eWxlVHlwZXMuU3R5bGVzZXRdOiBTdHlsZVByb3BlcnR5SW5mbzxTdHlsZVR5cGVzLlN0eWxlc2V0W0tdPiB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb25Ub0Nzc1N0cmluZyxcclxuICAgIGFuaW1hdGlvbkRlbGF5OiBVdGlsRnVuY3MubXVsdGlUaW1lVG9Dc3NTdHJpbmcsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogVXRpbEZ1bmNzLm11bHRpVGltZVRvQ3NzU3RyaW5nLFxyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IFV0aWxGdW5jcy5udW1iZXJUb0Nzc1N0cmluZyxcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBhbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGJhY2tncm91bmRDb2xvcjogQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgLy8gYmdjOiBcImJhY2tncm91bmRDb2xvclwiLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBVdGlsRnVuY3MubXVsdGlQb3NpdGlvblRvQ3NzU3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IFV0aWxGdW5jcy5tdWx0aVNpemVUb0Nzc1N0cmluZyxcclxuICAgIGJhc2VsaW5lU2hpZnQ6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBib3JkZXI6IGJvcmRlclNpZGVUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbTogYm9yZGVyU2lkZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVySW1hZ2VPdXRzZXQ6IGJvcmRlckltYWdlT3V0c2V0VG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJJbWFnZVdpZHRoOiBib3JkZXJXaWR0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyTGVmdDogYm9yZGVyU2lkZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyTGVmdENvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0V2lkdGg6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodDogYm9yZGVyU2lkZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJTcGFjaW5nOiBib3JkZXJTcGFjaW5nVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJUb3A6IGJvcmRlclNpZGVUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclRvcENvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBzaW5nbGVDb3JuZXJSYWRpdXNUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiBzaW5nbGVDb3JuZXJSYWRpdXNUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclRvcFdpZHRoOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGhUb0Nzc1N0cmluZyxcclxuICAgIGJvdHRvbTogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm94U2hhZG93OiBib3hTaGFkb3dUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBjYXJldENvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBjbGlwOiBjbGlwVG9Dc3NTdHJpbmcsXHJcbiAgICBjb2xvcjogQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uR2FwOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBjb2x1bW5SdWxlOiBjb2x1bW5SdWxlVG9Dc3NTdHJpbmcsXHJcbiAgICBjb2x1bW5SdWxlQ29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVTdHlsZTogYm9yZGVyU3R5bGVUb0Nzc1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVXaWR0aDogYm9yZGVyV2lkdGhUb0Nzc1N0cmluZyxcclxuICAgIGNvbHVtbnM6IGNvbHVtbnNUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBmbGV4OiBmbGV4VG9Dc3NTdHJpbmcsXHJcbiAgICBmbG9vZENvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBmb250U3R5bGU6IFV0aWxGdW5jcy5hbmdsZVRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGdhcDogVXRpbEZ1bmNzLm11bHRpTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBncmlkQ29sdW1uR2FwOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBncmlkUm93R2FwOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgaGVpZ2h0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgbGVmdDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbGV0dGVyU3BhY2luZzogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbGlnaHRpbmdDb2xvcjogQ29sb3JGdW5jcy5jb2xvclRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIG1hcmdpbjogVXRpbEZ1bmNzLm11bHRpTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBtYXJnaW5Cb3R0b206IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIG1hcmdpbkxlZnQ6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIG1hcmdpblJpZ2h0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBtYXJnaW5Ub3A6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIG1heEhlaWdodDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbWF4V2lkdGg6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIG1pbkhlaWdodDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG5cdG1pbldpZHRoOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgb2JqZWN0UG9zaXRpb246IFV0aWxGdW5jcy5wb3NpdGlvblRvQ3NzU3RyaW5nLFxyXG4gICAgb3V0bGluZUNvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBvdXRsaW5lT2Zmc2V0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBvdXRsaW5lU3R5bGU6IGJvcmRlclN0eWxlVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgcGFkZGluZzogVXRpbEZ1bmNzLm11bHRpTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBwYWRkaW5nTGVmdDogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBwYWRkaW5nVG9wOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBwZXJzcGVjdGl2ZTogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IFV0aWxGdW5jcy5wb3NpdGlvblRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIHJpZ2h0OiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICByb3dHYXA6IFV0aWxGdW5jcy5sZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBzdG9wQ29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuXHJcbiAgICB0YWJTaXplOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBDb2xvckZ1bmNzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I6IENvbG9yRnVuY3MuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIHRleHRFbXBoYXNpc1Bvc2l0aW9uOiB0ZXh0RW1waGFzaXNQb3NpdGlvblRvQ3NzU3RyaW5nLFxyXG4gICAgdGV4dEluZGVudDogdGV4dEluZGVudFRvQ3NzU3RyaW5nLFxyXG4gICAgdG9wOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZVRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIHdpZHRoOiBVdGlsRnVuY3MubGVuZ3RoVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgem9vbTogVXRpbEZ1bmNzLmxlbmd0aFRvQ3NzU3RyaW5nLFxyXG59O1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBVdGlsVHlwZXMgZnJvbSBcIi4vVXRpbFR5cGVzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG5hbWVzIHdpdGggZGFzaGVzIGludG8gbmFtZXMgaW4gY2FtZWxDYXNlLCB3aGVyZSBldmVyeSBjaGFyYWN0ZXIgYWZ0ZXIgYSBkYXNoIGlzXHJcbiAqIGNhcGl0YWxpemVkIGFuZCBkYXNoZXMgYXJlIHJlbW92ZWQuXHJcbiAqIEBwYXJhbSBkYXNoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFkYXNoKVxyXG5cdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdHJldHVybiBkYXNoLnJlcGxhY2UoIC8tKFthLXpBLVpdKS9nLCAoeCwgJDEpID0+ICQxLnRvVXBwZXJDYXNlKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjYW1lbENhc2UgdG8gZGFzaC1jYXNlLlxyXG4gKiBAcGFyYW0gY2FtZWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW1lbFRvRGFzaCggY2FtZWw6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgcmV0dXJuIGNhbWVsLnJlcGxhY2UoIC8oW2EtekEtWl0pKD89W0EtWl0pL2csICckMS0nKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmljIGZ1bmN0aW9uIHRoYXQgY29udmVydHMgYW4gYXJyYXkgb2YgdGhlIGdpdmVuIHR5cGV0byBhIHNpbmdsZSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIHNlcGFyYXRvci5cclxuICogRWxlbWVudHMgb2YgdGhlIGFycmF5IGFyZSBjb252ZXJ0ZWQgdG8gc3RyaW5ncyB1c2luZyB0aGUgZ2l2ZW4gZnVuY3Rpb24uXHJcbiAqIEBwYXJhbSB2YWwgQXJyYXkgb2YgdGltZSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvQ3NzU3RyaW5nPFQ+KCB2YWw6IFRbXSwgZnVuYzogKHY6IFQpID0+IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gIXZhbCB8fCB2YWwubGVuZ3RoID09PSAwID8gXCJcIiA6IHZhbC5tYXAoIChpdGVtKSA9PiBmdW5jKGl0ZW0pKS5qb2luKCBzZXBhcmF0b3IpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhcnJheSBvZiBzdHJpbmcgdmFsdWVzIHRvIGEgc2luZ2xlIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gc2VwYXJhdG9yLlxyXG4gKiBAcGFyYW0gdmFsIEFycmF5IG9mIHN0cmluZyB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdBcnJheVRvQ3NzU3RyaW5nKCB2YWw6IChzdHJpbmcgfCBVdGlsVHlwZXMuU3RyaW5nUHJveHkpW10sIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIGFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgKHYpID0+IHR5cGVvZiB2ID09PSBcInN0cmluZ1wiID8gdiA6IHYudG9TdHJpbmcoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIENvbnZlcnRzIGEgdmFsdWUgdGhhdCBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nXHJcbi8vICAqIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbi8vICAqIEBwYXJhbSB2YWwgU3RyaW5nIHZhbHVlIG9yIGFycmF5IG9mIHN0cmluZyB2YWx1ZXNcclxuLy8gICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzdHJpbmdPclN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbDogc3RyaW5nW10gfCBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIsXCIpOiBzdHJpbmdcclxuLy8ge1xyXG4vLyAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbi8vICAgICAgICAgcmV0dXJuIHZhbDtcclxuLy8gICAgIGVsc2VcclxuLy8gICAgICAgICByZXR1cm4gc3RyaW5nQXJyYXlUb0Nzc1N0cmluZyggdmFsLCBzZXBhcmF0b3IpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBOdW1iZXJcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2luZ2xlIG51bWJlciBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUgbnVtYmVyIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLk51bWJlcl9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIgPyB2YWwgOiB2YWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBhcnQgbnVtYmVyIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE11bHRpLXBhcnQgbnVtYmVyIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlOdW1iZXJUb0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuTXVsdGlOdW1iZXJfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIGFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgbnVtYmVyVG9Dc3NTdHJpbmcpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBudW1iZXJUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gbnVtYmVyIHRvIGEgcGVyY2VudCBzdHJpbmcuIE51bWJlcnMgYmV0d2VlbiAtMSBhbmQgMSBhcmUgbXVsdGlwbHllZCBieSAxMDAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGVyY2VudE51bWJlclRvQ3NzU3RyaW5nKCBuOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIChOdW1iZXIuaXNJbnRlZ2VyKG4pID8gbiA6IG4gPiAtMS4wICYmIG4gPCAxLjAgPyBNYXRoLnJvdW5kKCBuICogMTAwKSA6IE1hdGgucm91bmQobikpICsgXCIlXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgcGVyY2VudCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUgcGVyY2VudCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBlcmNlbnRUb0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuUGVyY2VudF9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiBwZXJjZW50TnVtYmVyVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wYXJ0IHBlcmNlbnQgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTXVsdGktcGFydCBwZXJjZW50IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlQZXJjZW50VG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLk11bHRpUGVyY2VudF9TdHlsZVR5cGUsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIgXCIpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBwZXJjZW50VG9Dc3NTdHJpbmcsIHNlcGFyYXRvcik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHBlcmNlbnRUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gTGVuZ3RoXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGxlbmd0aCB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLiBJbnRlZ2VyXHJcbiAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBwaXhlbHMgd2hpbGUgZmxvYXRpbmcgbnVtYmVycyB3aXRoaW4gLTEgYW5kIDEgYXJlIHRyZWF0ZWQgYXNcclxuICogcGVyY2VudHMgYW5kIGZsb2F0aW5nIG51bWJlcnMgb3V0c2lkZSAtMSBhbmQgMSBhcmUgdHJlYXRlZCBhcyBcImVtXCIuXHJcbiAqIEBwYXJhbSB2YWwgTGVuZ3RoIGFzIGEgbnVtYmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoTnVtYmVyVG9Dc3NTdHJpbmcoIG46IG51bWJlciwgdW5pdHM/OiBVdGlsVHlwZXMuTGVuZ3RoVW5pdHMpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIHVuaXRzID8gbiArIHVuaXRzIDogTnVtYmVyLmlzSW50ZWdlciggbikgPyAgbiArIFwicHhcIiA6IG4gPiAtMS4wICYmIG4gPCAxLjAgPyBNYXRoLnJvdW5kKCBuICogMTAwKSArIFwiJVwiIDogbiArIFwiZW1cIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGxlbmd0aCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBMZW5ndGggYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLkxlbmd0aF9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiBsZW5ndGhOdW1iZXJUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBhcnQgbGVuZ3RoIG9yIHBlcmNlbnRhZ2Ugc3R5bGUgcHJvcGVydHkgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQXJyYXkgb2YgbGVuZ3RoIHN0eWxlIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLk11bHRpTGVuZ3RoX1N0eWxlVHlwZSwgc2VwYXJhdG9yOiBzdHJpbmcgPSBcIiBcIik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIGxlbmd0aFRvQ3NzU3RyaW5nLCBzZXBhcmF0b3IpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBsZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gQW5nbGVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW5nbGUgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIHN0cmluZy4gSW50ZWdlclxyXG4gKiB2YWx1ZXMgYXJlIHRyZWF0ZWQgYXMgZGVncmVlcyB3aGlsZSBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIHJhZGlhbnMuXHJcbiAqIEBwYXJhbSB2YWwgQW5nbGUgYXMgYSBudW1iZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmdsZU51bWJlclRvQ3NzU3RyaW5nKCBuOiBudW1iZXIsIHVuaXRzPzogVXRpbFR5cGVzLkFuZ2xlVW5pdHMpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPT09IDAgPyBcIjBcIiA6IHVuaXRzID8gbiArIHVuaXRzIDogTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgXCJkZWdcIiA6IG4gKyBcInJhZFwiO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbGVuZ3RoIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIExlbmd0aCBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmdsZVRvQ3NzU3RyaW5nKCB2YWw6IFV0aWxUeXBlcy5BbmdsZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiBhbmdsZU51bWJlclRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaW1lXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIHN0cmluZy4gSW50ZWdlclxyXG4gKiB2YWx1ZXMgYXJlIHRyZWF0ZWQgYXMgbWlsbGlzZWNvbmRzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgc2Vjb25kcy5cclxuICogQHBhcmFtIHZhbCBUaW1lIGFzIGEgbnVtYmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGltZU51bWJlclRvQ3NzU3RyaW5nKCBuOiBudW1iZXIsIHVuaXRzPzogVXRpbFR5cGVzLlRpbWVVbml0cyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gbiA9PT0gMCA/IFwiMHNcIiA6IHVuaXRzID8gbiArIHVuaXRzIDogTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgXCJtc1wiIDogbiArIFwic1wiO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGltZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBUaW1lIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVUb0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuVGltZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiB0aW1lTnVtYmVyVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbmltYXRpb24gZGVsYXkgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQW5pbWF0aW9uIGRlbGF5IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlUaW1lVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLk11bHRpVGltZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHRpbWVOdW1iZXJUb0Nzc1N0cmluZyggdmFsKTtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgdGltZVRvQ3NzU3RyaW5nKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgcmVzb2x1dGlvbiB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLiBJbnRlZ2VyXHJcbiAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBEUEkgd2hpbGUgZmxvYXRpbmcgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBEUENNLlxyXG4gKiBAcGFyYW0gdmFsIFJlc29sdXRpb24gYXMgYSBudW1iZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHV0aW9uVG9Dc3NTdHJpbmcoIG46IG51bWJlciwgdW5pdHM/OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPT09IDAgPyBcIjBcIiA6IHVuaXRzID8gbiArIHVuaXRzIDogTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgXCJkcGlcIiA6IG4gKyBcImRwY21cIjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2l6ZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaXplIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpemVUb0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuU2l6ZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFV0aWxUeXBlcy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBvYmplY3RUb0Nzc1N0cmluZyggdmFsLCBmYWxzZSwgW1wid1wiLCBsZW5ndGhUb0Nzc1N0cmluZ10sIFtcImhcIiwgbGVuZ3RoVG9Dc3NTdHJpbmddKTtcclxuICAgIC8vIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcbiAgICAvLyAgICAgcmV0dXJuIGxlbmd0aFRvQ3NzU3RyaW5nKCB2YWxbMF0pICsgXCIgXCIgKyBsZW5ndGhUb0Nzc1N0cmluZyggdmFsWzFdKTtcclxuICAgIGVsc2VcclxuXHQgICAgcmV0dXJuIGxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcGFydCBzaXplIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEFycmF5IG9mIGxlbmd0aCBzdHlsZSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVNpemVUb0Nzc1N0cmluZyggdmFsOiBVdGlsVHlwZXMuTXVsdGlTaXplX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVXRpbFR5cGVzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBzaXplVG9Dc3NTdHJpbmcpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzaXplVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBwb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaXplIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLlBvc2l0aW9uX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgVXRpbFR5cGVzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKFwieGVkZ2VcIiBpbiB2YWwpXHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RUb0Nzc1N0cmluZyggdmFsLCBmYWxzZSwgXCJ4ZWRnZVwiLCBbXCJ4XCIsIGxlbmd0aFRvQ3NzU3RyaW5nXSwgXCJ5ZWRnZVwiLCBbXCJ5XCIsIGxlbmd0aFRvQ3NzU3RyaW5nXSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsIFtcInhcIiwgbGVuZ3RoVG9Dc3NTdHJpbmddLCBbXCJ5XCIsIGxlbmd0aFRvQ3NzU3RyaW5nXSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiBsZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBhcnQgcG9zaXRpb24gc3R5bGUgdmFsdWVzIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEFycmF5IG9mIGxlbmd0aCBzdHlsZSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVBvc2l0aW9uVG9Dc3NTdHJpbmcoIHZhbDogVXRpbFR5cGVzLk11bHRpUG9zaXRpb25fU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIGFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgcG9zaXRpb25Ub0Nzc1N0cmluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuICBwb3NpdGlvblRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gb2JqZWN0IHRvIGEgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBPYmplY3QgdG8gY29udmVydCB0byBzdHJpbmcuXHJcbiAqIEBwYXJhbSB1c2VQcm9wTmFtZXMgRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIG5hbWVzIG9mIHRoZSBvYmplY3QncyBwcm9wcnRpZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzdHJpbmcuXHJcbiAqIEBwYXJhbSBwcm9wc0FuZEZ1bmNzIEFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBvcHRpb25hbGx5IGZ1bmN0aW9ucy4gVGhlIG9yZGVyIG9mIHRoZSBuYW1lcyBkZXRlcm1pbmVzIGluXHJcbiAqICAgICB3aGljaCBvcHJkZXIgdGhlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBzdHJpbmcuIElmIGEgZnVuY3Rpb24gaXMgcHJlc2VudCBmb3IgdGhlIHByb3BlcnR5LFxyXG4gKiAgICAgaXQgd2lsbCBiZSB1c2VkIHRvIGNvbnZlcnQgdGhlIHByb3BlcnR5J3MgdmFsdWUgdG8gdGhlIHN0cmluZy4gSWYgYSBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCwgdGhlbiB0aGVcclxuICogICAgIHByb3BlcnR5IHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWQgdG8gdGhlIHN0cmluZyB1c2luZyB0aGUgdG9TdHJpbmcgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9iamVjdFRvQ3NzU3RyaW5nKCB2YWw6IGFueSwgdXNlUHJvcE5hbWVzOiBib29sZWFuLCAuLi5wcm9wc0FuZEZ1bmNzOiAoc3RyaW5nIHwgW3N0cmluZywgKHZhbDogYW55KSA9PiBzdHJpbmddKVtdICk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodmFsID09IG51bGwgfHwgcHJvcHNBbmRGdW5jcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBzID0gXCJcIjtcclxuXHJcbiAgICBmb3IoIGxldCBwcm9wQW5kRnVuYyBpbiBwcm9wc0FuZEZ1bmNzKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBwcm9wTmFtZSA9IHR5cGVvZiBwcm9wQW5kRnVuYyA9PT0gXCJzdHJpbmdcIiA/IHByb3BBbmRGdW5jIDogcHJvcEFuZEZ1bmNbMF07XHJcbiAgICAgICAgbGV0IGZ1bmMgPSB0eXBlb2YgcHJvcEFuZEZ1bmMgPT09IFwic3RyaW5nXCIgPyB1bmRlZmluZWQgOiBwcm9wQW5kRnVuY1sxXTtcclxuXHJcbiAgICAgICAgbGV0IHByb3BWYWwgPSB2YWxbcHJvcE5hbWVdO1xyXG4gICAgICAgIGlmIChwcm9wVmFsID09IG51bGwpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICBpZiAocy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICBzICs9IFwiIFwiO1xyXG5cclxuICAgICAgICBpZiAodXNlUHJvcE5hbWVzKVxyXG4gICAgICAgICAgICBzICs9IHByb3BOYW1lO1xyXG5cclxuICAgICAgICBpZiAoZnVuYylcclxuICAgICAgICAgICAgcyArPSBcIiBcIiArIGZ1bmMoIHByb3BWYWwpO1xyXG4gICAgICAgIGVsc2UgaWYgKHByb3BWYWwgIT0gbnVsbClcclxuICAgICAgICAgICAgcyArPSBcIiBcIiArIHByb3BWYWw7XHJcbiAgICB9XHJcblxyXG5cdHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYmFzaWMgdHlwZXMgYW5kIGZ1bmN0aW9ucyB1c2VkIHRvIGRlZmluZSBDU1MgcHJvcGVydHkgdHlwZXMuXHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3RyaW5nUHJveHkgY2xhc3MgZW5jYXBzdWxhdGVzIGEgc3RyaW5nLCB3aGljaCBpcyByZXR1cm5lZCB2aWEgdGhlIHN0YW5kYXJkIHRvU3RyaW5nKClcclxuICogbWV0aG9kLiBBbGwgQ1NTIHByb3BlcnRpZXMgc2hvdWxkIGFjY2VwdCBzdHJpbmcgYXMgdGhlIHR5cGUgb2YgdGhlaXIgdmFsdWUgZXZlbiBpZiBub3JtYWxseVxyXG4gKiB0aGV5IGFjY2VwdCBvdGhlciB0eXBlcyAoZS5nIGEgc2V0IG9mIHN0cmluZyBsaXRlcmFscyBhcyBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IC4uLmAgZm9yIHRoZVxyXG4gKiBjb2xvcikgcHJvcGVydHkuIFRoaXMgaXMgYmVjYXVzZSBpbiBhZGRpdGlvbiB0byB0aGVpciBub3JtYWwgdmFsdWVzIGFueSBwcm9wZXJ0eVxyXG4gKiBjYW4gdXNlIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhlIGZvcm0gYHZhcigtLXByb3BuYW1lKWAuIEhvd2V2ZXIsIGlmIHdlIGFkZCBzdHJpbmcgdHlwZVxyXG4gKiB0byB0aGUgc2V0IG9mIHN0cmluZyBsaXRlcmFscyAoZS5nLiBgXCJyZWRcIiB8IFwiZ3JlZW5cIiB8IHN0cmluZ2ApLCB0aGlzIHRocm93cyBvZmYgdGhlXHJcbiAqIEludGVsbGlzZW5zZSBhbmQgaXQgZG9lc24ndCBwcm9tcHQgZGV2ZWxvcGVycyBmb3IgdGhlIHBvc3NpYmxlIHZhbHVlcy4gVGhlIFN0cmluZ1Byb3h5XHJcbiAqIGNhbiBiZSB1c2VkIGluc3RlYWQgb2Ygc3RyaW5nIChlLmcuIGBcInJvd1wiIHwgXCJjb2x1bW5cIiB8IFN0cmluZ1Byb3h5YCkgYW5kIHRoaXMgc29sdmVzXHJcbiAqIHRoZSBJbnRlbGxpc2Vuc2UgaXNzdWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RyaW5nUHJveHlcclxue1xyXG4gICAgY29uc3RydWN0b3IoIHM/OiBzdHJpbmcgfCBTdHJpbmdQcm94eSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLnMgPSBzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zID09IG51bGwgPyBcIlwiIDogdHlwZW9mIHRoaXMucyA9PT0gXCJzdHJpbmdcIiA/IHRoaXMucyA6IHRoaXMucy50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcz86IHN0cmluZyB8IFN0cmluZ1Byb3h5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBTdHlsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgKGFsbW9zdCkgYW55IHByb3BlcnR5XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCYXNlX1N0eWxlVHlwZSA9IFwiaW5oZXJpdFwiIHwgXCJpbml0aWFsXCIgfCBcInVuc2V0XCIgfCBTdHJpbmdQcm94eTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIE51bWJlclxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgbnVtYmVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE51bWJlcl9TdHlsZVR5cGUgPSBudW1iZXIgfCBCYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IG51bWJlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aU51bWJlcl9TdHlsZVR5cGUgPSBOdW1iZXJfU3R5bGVUeXBlIHwgTnVtYmVyX1N0eWxlVHlwZVtdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUGVyY2VudFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgcGVyY2VudGFnZS4gUGVyY2VudCBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIHN0cmluZyAoZS5nLiBcIjc1JVwiKVxyXG4gKiAgIC0gbnVtYmVyOiBpbnRlZ2VyIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudHM7IGZsb2F0aW5nIG51bWJlcnMgd2l0aGluIC0xIGFuZCAxXHJcbiAqICAgICBhcmUgbXVsdGlsaWVkIGJ5IDEwMC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFBlcmNlbnRfU3R5bGVUeXBlID0gbnVtYmVyIHwgc3RyaW5nIHwgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBwZXJjZW50YWdlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpUGVyY2VudF9TdHlsZVR5cGUgPSBQZXJjZW50X1N0eWxlVHlwZSB8IFBlcmNlbnRfU3R5bGVUeXBlW107XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBMZW5ndGhcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKiogVW5pdHMgb2YgbGVuZ3RoICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aFVuaXRzID0gXCJRXCIgfCBcImNoXCIgfCBcImNtXCIgfCBcImVtXCIgfCBcImV4XCIgfCBcImljXCIgfCBcImluXCIgfCBcImxoXCIgfCBcIm1tXCIgfCBcInBjXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJwdFwiIHwgXCJweFwiIHwgXCJ2YlwiIHwgXCJ2aFwiIHwgXCJ2aVwiIHwgXCJ2d1wiIHwgXCJyZW1cIiB8IFwicmxoXCIgfCBcInZtYXhcIiB8IFwidm1pblwiIHwgXCIlXCI7XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGxlbmd0aCBvciBwZXJjZW50YWdlLiBMZW5ndGggY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gXCIyMHB4XCIgb3IgXCI3NSVcIilcclxuICogICAtIG51bWJlcjogaW50ZWdlciB2YWx1ZXMgYXJlIHRyZWF0ZWQgYXMgcGl4ZWxzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgd2l0aGluIC0xIGFuZCAxIGFyZVxyXG4gKiAgICAgdHJlYXRlZCBhcyBwZXJjZW50cyBhbmQgZmxvYXRpbmcgbnVtYmVycyBvdXRzaWRlIC0xIGFuZCAxIGFyZSB0cmVhdGVkIGFzIFwiZW1cIi5cclxuICovXHJcbmV4cG9ydCB0eXBlIExlbmd0aF9TdHlsZVR5cGUgPSBcImF1dG9cIiB8IG51bWJlciB8IHN0cmluZyB8IEJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgbGVuZ3RoIG9yIHBlcmNlbnRhZ2Ugc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlMZW5ndGhfU3R5bGVUeXBlID0gTGVuZ3RoX1N0eWxlVHlwZSB8IExlbmd0aF9TdHlsZVR5cGVbXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEFuZ2xlXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIGFuZ2xlICovXHJcbmV4cG9ydCB0eXBlIEFuZ2xlVW5pdHMgPSBcImRlZ1wiIHwgXCJyYWRcIiB8IFwiZ3JhZFwiIHwgXCJ0dXJuXCI7XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGFuZ2xlLiBBbmdsZSBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIHN0cmluZyAoZS5nLiAyMGRlZyBvciAxLjRyYWQpXHJcbiAqICAgLSBudW1iZXI6IHplcm8gaXMgdHJlYXRlZCBhcyBub3QgaGF2aW5nIGFueSBzdWZmaXg7IGludGVnZXIgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBkZWdyZWVzO1xyXG4gKiAgICAgZmxvYXRpbmcgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyByYWRpYW5zLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQW5nbGVfU3R5bGVUeXBlID0gbnVtYmVyIHwgc3RyaW5nIHwgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaW1lXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLyoqIFVuaXRzIG9mIHRpbWUgKi9cclxuZXhwb3J0IHR5cGUgVGltZVVuaXRzID0gXCJzXCIgfCBcIm1zXCI7XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIHRpbWUuIFRpbWUgY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gXCIyc1wiIG9yIFwiMjUwbXNcIilcclxuICogICAtIG51bWJlcjogaW50ZWdlciBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIG1pbGxpc2Vjb25kcyB3aGlsZSBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkXHJcbiAqICAgICBhcyBzZWNvbmRzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVGltZV9TdHlsZVR5cGUgPSBudW1iZXIgfCBzdHJpbmcgfCBCYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHRpbWUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlUaW1lX1N0eWxlVHlwZSA9IFRpbWVfU3R5bGVUeXBlIHwgVGltZV9TdHlsZVR5cGVbXTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFNpemVcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIHNpemUsIHdoaWNoIGNhbiBiZSBleHByZXNzZWQgYXMgb25lIG9yIHR3byB2YWx1ZXMgZWFjaCBvZiBlYWNoIGlzIG9mIHRoZVxyXG4gKiBMZW5ndGhfU3R5bGVUeXBlIHR5cGUuIFR3byB2YWx1ZXMgYXJlIGdpdmVuIGFzIGFuIG9iamVjdCB3aXRoICd3JyAod2lkdGgpIGFuZCAnaCcgKGhlaWdodClcclxuICogcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpemVfU3R5bGVUeXBlID0gTGVuZ3RoX1N0eWxlVHlwZSB8IHsgdzogTGVuZ3RoX1N0eWxlVHlwZTsgaDogTGVuZ3RoX1N0eWxlVHlwZSB9O1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgc2l6ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aVNpemVfU3R5bGVUeXBlID0gU2l6ZV9TdHlsZVR5cGUgfCBTaXplX1N0eWxlVHlwZVtdO1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUG9zaXRpb25cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIHBvc2l0aW9uLCB3aGljaCBjYW4gYmUgZXhwcmVzc2VkIGFzIG9uZSBvciB0d28gb3IgMyBvciA0IHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFBvc2l0aW9uX1N0eWxlVHlwZSA9IFwiY2VudGVyXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgTGVuZ3RoX1N0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICB7IHg6IFwiY2VudGVyXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IExlbmd0aF9TdHlsZVR5cGU7IHk6IFwiY2VudGVyXCIgfCBcInRvcFwiIHwgXCJib3R0b21cIiB8IExlbmd0aF9TdHlsZVR5cGUgfSB8XHJcbiAgICAgICAgICAgICAgICB7IHhlZGdlOiBzdHJpbmc7IHg/OiBMZW5ndGhfU3R5bGVUeXBlOyB5ZWRnZTogc3RyaW5nOyB5PzogTGVuZ3RoX1N0eWxlVHlwZSB9IHxcclxuICAgICAgICAgICAgICAgIEJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlQb3NpdGlvbl9TdHlsZVR5cGUgPSBQb3NpdGlvbl9TdHlsZVR5cGUgfCBQb3NpdGlvbl9TdHlsZVR5cGVbXTtcclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==