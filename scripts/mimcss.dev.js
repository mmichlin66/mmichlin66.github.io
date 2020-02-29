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

/***/ "./src/api/RuleFunctions.ts":
/*!**********************************!*\
  !*** ./src/api/RuleFunctions.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TagRule_1 = __webpack_require__(/*! ../rules/TagRule */ "./src/rules/TagRule.ts");
const ClassRule_1 = __webpack_require__(/*! ../rules/ClassRule */ "./src/rules/ClassRule.ts");
const IDRule_1 = __webpack_require__(/*! ../rules/IDRule */ "./src/rules/IDRule.ts");
const SelectorRule_1 = __webpack_require__(/*! ../rules/SelectorRule */ "./src/rules/SelectorRule.ts");
const AnimationRule_1 = __webpack_require__(/*! ../rules/AnimationRule */ "./src/rules/AnimationRule.ts");
const CustomVar_1 = __webpack_require__(/*! ../rules/CustomVar */ "./src/rules/CustomVar.ts");
const StyleScope_1 = __webpack_require__(/*! ../rules/StyleScope */ "./src/rules/StyleScope.ts");
/** Creates new TagRule object  */
function $tag(tagName, styleset) { return new TagRule_1.TagRule(tagName, styleset); }
exports.$tag = $tag;
/** Returns new ClassRule object  */
function $class(styleset) { return new ClassRule_1.ClassRule(styleset); }
exports.$class = $class;
/** Returns new IDRule object  */
function $id(styleset) { return new IDRule_1.IDRule(styleset); }
exports.$id = $id;
/** Creates new SelectorRule object  */
function $rule(selector, styleset) { return new SelectorRule_1.SelectorRule(selector, styleset); }
exports.$rule = $rule;
/** Returns new AnimationRule object  */
function $animation(...keyframes) { return new AnimationRule_1.AnimationRule(keyframes); }
exports.$animation = $animation;
/** Returns new CustomProp object that defines a custom CSS property */
function $custom(templatePropName, propVal) { return new CustomVar_1.CustomVar(templatePropName, propVal); }
exports.$custom = $custom;
/**
 * Processes the given style scope definition and returns the StyleScope object that contains
 * names of IDs, classes and keyframes and allows style manipulations. For a given style scope
 * definition class there is a single style scope object, no matter how many times this function
 * is invoked.
 * @param sheetDef
 */
function $scope(styleScopeDefinitionClass) {
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
exports.$scope = $scope;


/***/ }),

/***/ "./src/api/Selector.ts":
/*!*****************************!*\
  !*** ./src/api/Selector.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import {ISelector, IEmptySelector, AttrSelectorOperation, AttrSelectorOperationType, } from "./ISelector"
const TagRule_1 = __webpack_require__(/*! ../rules/TagRule */ "./src/rules/TagRule.ts");
const ClassRule_1 = __webpack_require__(/*! ../rules/ClassRule */ "./src/rules/ClassRule.ts");
const IDRule_1 = __webpack_require__(/*! ../rules/IDRule */ "./src/rules/IDRule.ts");
var AttrSelectorOperation;
(function (AttrSelectorOperation) {
    AttrSelectorOperation["Match"] = "=";
    AttrSelectorOperation["Word"] = "~=";
    AttrSelectorOperation["SubCode"] = "|=";
    AttrSelectorOperation["StartsWith"] = "^=";
    AttrSelectorOperation["EndsWith"] = "$=";
    AttrSelectorOperation["Contains"] = "*=";
})(AttrSelectorOperation = exports.AttrSelectorOperation || (exports.AttrSelectorOperation = {}));
/**
 * The selector class encapsulates all the functionality for building a CSS selector.
 */
class Selector {
    constructor(raw) {
        this.buf = [];
        if (raw)
            this.buf.push(raw);
    }
    // Selector combinators
    get and() { this.buf.push(", "); return this; }
    get child() { this.buf.push(" > "); return this; }
    get descendand() { this.buf.push(" "); return this; }
    get sibling() { this.buf.push(" ~ "); return this; }
    get adjacent() { this.buf.push(" + "); return this; }
    all(ns) { this.buf.push(ns == null ? "*" : `${ns}|*`); return this; }
    tag(tag) {
        this.buf.push(tag);
        return this;
    }
    class(cls) {
        this.buf.push(typeof cls === "string" ? "." + cls : cls);
        return this;
    }
    id(id) {
        this.buf.push(typeof id === "string" ? "." + id : id);
        return this;
    }
    attr(attrName, op, value, caseInsensitive) {
        let s = "[" + attrName;
        if (op)
            s += op + value;
        if (caseInsensitive)
            s += " i";
        s += "]";
        this.buf.push(s);
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
    nthChild(a, b) { this.buf.push(`:nth-child(${this.nth(a, b)})`); return this; }
    nthLastChild(a, b) { this.buf.push(`:nth-last-child(${this.nth(a, b)})`); return this; }
    nthLastOfType(a, b) { this.buf.push(`:nth-last-of-type(${this.nth(a, b)})`); return this; }
    nthOfType(a, b) { this.buf.push(`:nth-of-type(${this.nth(a, b)})`); return this; }
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
    // Returns the "nth" notation
    nth(a, b) {
        return b == null ? a.toString() : `${a}n${b >= 0 ? `+${b}` : `-${-b}`}`;
    }
    /**
     * Returns a list of all rules participating in the selector.
     */
    getRules() {
        return this.buf.filter((item) => typeof item !== "string");
    }
    /**
     * Converts the accumulated selector tokens into full selector string.
     */
    toCssString() {
        let s = "";
        for (let token of this.buf) {
            if (token instanceof TagRule_1.TagRule)
                s += token.tagName;
            else if (token instanceof ClassRule_1.ClassRule)
                s += token.combinedSelectorName;
            else if (token instanceof IDRule_1.IDRule)
                s += "#" + token.idName;
            else
                s += token;
        }
        return s;
    }
}
exports.Selector = Selector;
/**
 * Creates an empty selector from which selector building process starts.
 */
function $selector() { return new Selector(); }
exports.$selector = $selector;


/***/ }),

/***/ "./src/api/scope.ts":
/*!**************************!*\
  !*** ./src/api/scope.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module defines types and functions that allow building CSS style sheets using TypeScript.
 */
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Functions to configure TssManager options
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const TssManager_1 = __webpack_require__(/*! ../rules/TssManager */ "./src/rules/TssManager.ts");
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
__export(__webpack_require__(/*! ./styles/utils */ "./src/styles/utils.ts"));
__export(__webpack_require__(/*! ./styles/colors */ "./src/styles/colors.ts"));
__export(__webpack_require__(/*! ./styles/tsh */ "./src/styles/tsh.ts"));
__export(__webpack_require__(/*! ./styles/styles */ "./src/styles/styles.ts"));
__export(__webpack_require__(/*! ./api/Selector */ "./src/api/Selector.ts"));
__export(__webpack_require__(/*! ./api/scope */ "./src/api/scope.ts"));
__export(__webpack_require__(/*! ./api/RuleFunctions */ "./src/api/RuleFunctions.ts"));
__export(__webpack_require__(/*! ./api/Selector */ "./src/api/Selector.ts"));


/***/ }),

/***/ "./src/rules/AnimationRule.ts":
/*!************************************!*\
  !*** ./src/rules/AnimationRule.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tsh_1 = __webpack_require__(/*! ../styles/tsh */ "./src/styles/tsh.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const StyleRule_1 = __webpack_require__(/*! ./StyleRule */ "./src/rules/StyleRule.ts");
/**
 * The TagRule type describes a styleset that applies to elements identified by a tag name.
 */
class AnimationRule extends Rule_1.Rule {
    constructor(keyframes) {
        super();
        if (keyframes)
            this.keyframeRules = keyframes.map((keyframe) => new KeyframeRule(keyframe));
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        this.animationName = this.owner.generateScopedName(ruleName);
        for (let keyframeRule of this.keyframeRules)
            keyframeRule.process(owner, ruleName);
    }
    /**
     * Determines whether this rule requires name - that is it will be ignored if created within
     * the createUnnamedRules
     */
    get nameIsRequired() { return true; }
    // Creates a copy of the rule.
    clone() {
        let newRule = new AnimationRule();
        newRule.copyFrom(this);
        return newRule;
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        this.keyframeRules = src.keyframeRules.map((keyframeRule) => keyframeRule.clone());
    }
    // Converts the rule to CSS string.
    toCssString() {
        let s = `@keyframes ${this.animationName}{ `;
        for (let keyframeRule of this.keyframeRules)
            s += keyframeRule.toCssString();
        return s + "}";
    }
    /** Only needed to distinguish from other rules */
    get isAnimationRule() { return true; }
}
exports.AnimationRule = AnimationRule;
/**
 * The KeyframeRule class represents a single keyframe clause in the animation rule.
 */
class KeyframeRule extends StyleRule_1.StyleRule {
    constructor(keyframe) {
        super(keyframe ? keyframe.style : undefined);
        if (keyframe)
            this.waypointString = this.parseWaypoint(keyframe.waypoint);
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
        return newRule;
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        super.copyFrom(src);
        this.waypointString = src.waypointString;
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
    constructor(styleset) {
        super(styleset);
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        this.properName = this.owner.generateScopedName(ruleName);
        this.combinedName = this.properName;
        this.combinedSelectorName = "." + this.properName;
        // go through all parents; for those who are classes, add their names to the combined name.
        // For those who are not classes, copy their style properties to our own styleset.
        for (let parent of this.parents) {
            if (parent instanceof ClassRule && parent.isProcessed) {
                this.combinedName += " " + parent.combinedName;
                this.combinedSelectorName += parent.combinedSelectorName;
            }
            else
                Object.assign(this.styleset, parent.styleset);
        }
    }
    /**
     * Determines whether this rule requires name - that is it will be ignored if created within
     * the createUnnamedRules
     */
    get nameIsRequired() { return true; }
    // Creates a copy of the rule.
    clone() {
        let newRule = new ClassRule();
        newRule.copyFrom(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return "." + this.properName;
    }
    /** Only needed to distinguish from other rules */
    get isClassRule() { return true; }
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
const StyleInfo_1 = __webpack_require__(/*! ../styles/StyleInfo */ "./src/styles/StyleInfo.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
/**
 * The CustomVar class describes a custom CSS property.
 */
class CustomVar extends Rule_1.Rule {
    constructor(templatePropName, varValue) {
        super();
        this.templatePropName = templatePropName;
        this.varValue = varValue;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        this.varName = this.owner.generateScopedName(ruleName);
    }
    /**
     * Determines whether this rule requires name - that is it will be ignored if created within
     * the createUnnamedRules
     */
    get nameIsRequired() { return true; }
    // Creates a copy of the rule.
    clone() {
        let newRule = new CustomVar();
        newRule.copyFrom(this);
        return newRule;
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        this.templatePropName = src.templatePropName;
        this.varValue = src.varValue;
    }
    // Converts the rule to CSS string.
    toCssString() {
        return `--${this.varName}: ${StyleInfo_1.stylePropToCssString(this.templatePropName, this.varValue, true)}`;
    }
    // Determines whether this rule is a real CSS rule that should be inserted under the <style>
    // element. For the majority of Rule-derived classes this is true; however, for some classes,
    // e.g. for the CustomVar class, this is not so.
    get isRealCssRule() { return false; }
    /** Only needed to distinguish from other rules */
    get isCustomVar() { return true; }
}
exports.CustomVar = CustomVar;


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
    constructor(styleset) {
        super(styleset);
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        this.idName = this.owner.generateScopedName(ruleName);
        // go through all parents; for those who are classes, add their name to the
        // combined name. For those who are not classes, copy style properties to the
        // class's own styleset.
        for (let parent of this.parents)
            Object.assign(this.styleset, parent.styleset);
    }
    /**
     * Determines whether this rule requires name - that is it will be ignored if created within
     * the createUnnamedRules
     */
    get nameIsRequired() { return true; }
    // Creates a copy of the rule.
    clone() {
        let newRule = new IDRule();
        newRule.copyFrom(this);
        return newRule;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return "#" + this.idName;
    }
    /** Only needed to distinguish from other rules */
    get isIDRule() { return true; }
}
exports.IDRule = IDRule;


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
 * The RuleWithStyle class is used as a base class for rules that have a single style rule.
 */
class Rule {
    // Processes the rule.
    process(owner, ruleName) {
        this.owner = owner;
        this.ruleName = ruleName;
    }
    /**
     * Determines whether this rule requires name - that is it will be ignored if created within
     * the createUnnamedRules
     */
    get nameIsRequired() { return false; }
    // Determines whether this rule is a real CSS rule that should be inserted under the <style>
    // element. For the majority of Rule-derived classes this is true; however, for some classes,
    // e.g. for the CustomVar class, this is not so.
    get isRealCssRule() { return true; }
    /** Only needed to distinguish from other types */
    get isRule() { return true; }
    /** Determines whether this rule hs already been processed */
    get isProcessed() { return !!this.owner; }
}
exports.Rule = Rule;


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
const Selector_1 = __webpack_require__(/*! ../api/Selector */ "./src/api/Selector.ts");
/**
 * The SelectorRule type describes a styleset that applies to elements identified by a class.
 */
class SelectorRule extends StyleRule_1.StyleRule {
    constructor(selector, styleset) {
        super(styleset);
        if (selector)
            this.selector = typeof selector === "string" ? new Selector_1.Selector(selector) : selector;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        for (let parent of this.parents)
            Object.assign(this.styleset, parent.styleset);
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new SelectorRule();
        newRule.copyFrom(this);
        return newRule;
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        super.copyFrom(src);
        this.selector = src.selector;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return this.selector.toCssString();
    }
    /** Only needed to distinguish from other rules */
    get isSelectorRule() { return true; }
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
const StyleInfo_1 = __webpack_require__(/*! ../styles/StyleInfo */ "./src/styles/StyleInfo.ts");
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
/**
 * The StyleRule class is used as a base class for rules that have a single style rule.
 */
class StyleRule extends Rule_1.Rule {
    constructor(styleset) {
        super();
        this.styleset = {};
        this.parents = [];
        this.important = new Set();
        if (styleset)
            this.parseExtendedStyleset(styleset);
    }
    parseExtendedStyleset(styleset) {
        if (styleset instanceof StyleRule) {
            // styleset is a single IStyleRule object, which we add as our parent
            this.parents.push(styleset);
        }
        else if (Array.isArray(styleset)) {
            // styleset is an array of IStyleRule objects, which we add as our parents
            for (let rule of styleset)
                this.parents.push(rule);
        }
        else {
            // styleset is a set of style properties but can also include the $extends and
            // $important properties
            for (let propName in styleset) {
                let propVal = styleset[propName];
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
    // Copies internal data from another rule object.
    copyFrom(src) {
        this.styleset = src.styleset;
        this.parents = src.parents;
        this.important = src.important;
    }
    // Converts the rule to CSS string.
    toCssString() {
        return `${this.geSelectorString()} ${StyleInfo_1.stylesetToCssString(this.styleset, this.important)}`;
    }
    /** Only needed to distinguish from other rules */
    get isStyleRule() { return true; }
}
exports.StyleRule = StyleRule;


/***/ }),

/***/ "./src/rules/StyleScope.ts":
/*!*********************************!*\
  !*** ./src/rules/StyleScope.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Rule_1 = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.ts");
const TagRule_1 = __webpack_require__(/*! ./TagRule */ "./src/rules/TagRule.ts");
const ClassRule_1 = __webpack_require__(/*! ./ClassRule */ "./src/rules/ClassRule.ts");
const IDRule_1 = __webpack_require__(/*! ./IDRule */ "./src/rules/IDRule.ts");
const SelectorRule_1 = __webpack_require__(/*! ./SelectorRule */ "./src/rules/SelectorRule.ts");
const AnimationRule_1 = __webpack_require__(/*! ./AnimationRule */ "./src/rules/AnimationRule.ts");
const CustomVar_1 = __webpack_require__(/*! ./CustomVar */ "./src/rules/CustomVar.ts");
const TssManager_1 = __webpack_require__(/*! ./TssManager */ "./src/rules/TssManager.ts");
/**
 * The StyleSheet class represents a parsed form of a StyleSheetDefinition-derived class. This
 * class doesn't have a template parameter, but it conforms to the IStyleSheet<T> interface,
 * which provides names of classes, IDs and keyframes defined in the class T, which must be
 * derived from the StyleSheetDefinition class.
 */
class StyleScope {
    constructor(ssDefClass) {
        this.Definition = ssDefClass;
    }
    /** Names of classes defined in the style sheet */
    get classNames() { this.activate(); return this._classNames; }
    /** Names of classes defined in the style sheet */
    get idNames() { this.activate(); return this._idNames; }
    /** Names of keyframes defined in the style sheet */
    get animationNames() { this.activate(); return this._animationNames; }
    /** Names of custom CSS properties defined in the style scope */
    get varNames() { this.activate(); return this._varNames; }
    /** Map of all style (tag, class, ID and selector) rules. */
    get styleRules() { this.activate(); return this._styleRules; }
    /** Map of all tag rules. */
    get tagRules() { this.activate(); return this._tagRules; }
    /** Map of all class rules. */
    get classRules() { this.activate(); return this._classRules; }
    /** Map of all ID rules. */
    get idRules() { this.activate(); return this._idRules; }
    /** Map of all selector rules. */
    get selectorRules() { this.activate(); return this._selectorRules; }
    /** Map of all animation rules. */
    get animationRules() { this.activate(); return this._animationRules; }
    /** The ":root" block with CSS custom property definitions. */
    get varRules() { this.activate(); return this._varRules; }
    /** Map of all rules. */
    get namedRules() { this.activate(); return this._namedRules; }
    /** Map of all rules. */
    get unnamedRules() { this.activate(); return this._unnamedRules; }
    // Creates the style scope definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    process() {
        // check if the scope definition has already been processed
        if (this.isProcessed)
            return;
        this._classNames = {};
        this._idNames = {};
        this._animationNames = {};
        this._varNames = {};
        this._namedRules = {};
        this._styleRules = {};
        this._tagRules = {};
        this._classRules = {};
        this._idRules = {};
        this._selectorRules = {};
        this._animationRules = {};
        this._varRules = {};
        this._namedRules = {};
        this._unnamedRules = [];
        this.isMultiplex = !!this.Definition.isMultiplex;
        // in DEBUG, each class has a name unless it was created as an anonymous class. In RELEASE,
        // (as well as in the anonymous cases), the name is undefined and we generate a unique
        // name for the style scope.
        this.name = this.Definition.name;
        if (!this.name)
            this.name = TssManager_1.TssManager.generateUniqueName("s");
        // insert our internal rule for custom CSS properties into the list of unnamed rules.
        this._unnamedRules.push(new CustomVarRule(this));
        // create instance of the style scope definition class and then go over its properties,
        // which define CSS rules.
        let ssDef;
        let options = {};
        try {
            // create instance of the style scope definition class and then go over its properties,
            // which define CSS rules.
            ssDef = new this.Definition(options);
        }
        catch (err) {
            console.error(`Error instantiating Style Scope Definition of type '${this.Definition.name}'`);
            return;
        }
        this.processNamedRules(ssDef);
        // if the definition class implements unnamedRules process them now
        if (options.unnamedRules)
            this.processUnnamedRules(options.unnamedRules);
    }
    // Creates the style scope definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    processNamedRules(ssDef) {
        // loop over the properties of the definition object and process those that are rules.
        for (let propName in ssDef) {
            let propVal = ssDef[propName];
            if (!(propVal instanceof Rule_1.Rule))
                continue;
            let ruleName = propName;
            let rule = propVal;
            // if the rule object is already assigned to a style scope, we create a clone of the
            // rule and assign it to our scope.
            if (rule.owner)
                rule = rule.clone();
            rule.process(this, ruleName);
            if (rule.isRealCssRule)
                this._namedRules[ruleName] = rule;
            if (rule instanceof TagRule_1.TagRule) {
                this._styleRules[ruleName] = rule;
                this._tagRules[ruleName] = rule;
            }
            else if (rule instanceof ClassRule_1.ClassRule) {
                this._styleRules[ruleName] = rule;
                this._classRules[ruleName] = rule;
                this._classNames[ruleName] = rule.combinedName;
            }
            else if (rule instanceof IDRule_1.IDRule) {
                this._styleRules[ruleName] = rule;
                this._idRules[ruleName] = rule;
                this._idNames[ruleName] = rule.idName;
            }
            else if (rule instanceof SelectorRule_1.SelectorRule) {
                this._styleRules[ruleName] = rule;
                this._selectorRules[ruleName] = rule;
            }
            else if (rule instanceof AnimationRule_1.AnimationRule) {
                this._animationNames[ruleName] = rule.animationName;
                this._animationRules[ruleName] = rule;
            }
            else if (rule instanceof CustomVar_1.CustomVar) {
                this._varNames[ruleName] = rule.varName;
                this._varRules[ruleName] = rule;
            }
        }
    }
    // Creates the style scope definition instance, parses its properties and creates names for
    // classes, IDs, animations.
    processUnnamedRules(unnamedRules) {
        if (!unnamedRules)
            return;
        else if (!Array.isArray(unnamedRules)) {
            console.error(`createUnnamedRules method of Style Scope Definition of type '${this.Definition.name}' must return array`);
            return;
        }
        // loop over the properties of the definition object and process those that are rules.
        for (let unnamedRule of unnamedRules) {
            if (!(unnamedRule instanceof Rule_1.Rule))
                continue;
            let rule = unnamedRule;
            if (rule.nameIsRequired)
                continue;
            // if the rule object is already assigned to a style scope, we create a clone of the
            // rule and assign it to our scope.
            if (rule.owner)
                rule = rule.clone();
            rule.process(this, null);
            this._unnamedRules.push(rule);
        }
    }
    // Generates a name, which will be unique in this style scope
    generateScopedName(ruleName) {
        if (this.isMultiplex)
            return TssManager_1.TssManager.generateUniqueName();
        else
            return TssManager_1.TssManager.generateName(this.name, ruleName);
    }
    // Inserts this style sheet into DOM
    activate() {
        if (this.isActivated)
            return;
        this.process();
        TssManager_1.TssManager.activate(this);
    }
    // Removes this style scope from DOM - only works for multiplex style scopes
    deactivate() {
        if (!this.isActivated)
            return;
        TssManager_1.TssManager.deactivate(this);
    }
    setDOMInfo(styleElm, domSS) {
        this.styleElm = styleElm;
        this.styleSheet = domSS;
    }
    clearDOMInfo() {
        this.styleElm = undefined;
        this.styleSheet = undefined;
    }
    // Returns CSS string representatin of the :root rule with custom CSS properties. This is
    // invoked by the "fake" CustomVarRule.
    customVarsToCssString() {
        let s = ":root {";
        for (let varName in this._varRules)
            s += this._varRules[varName].toCssString() + ";";
        return s + "}";
    }
    // Helper properties
    get isProcessed() { return !!this._classNames; }
    get isActivated() { return !!this.styleSheet; }
}
exports.StyleScope = StyleScope;
/**
 * The CustomVarRule class represents a :root rule that is used for defining custom CSS properties.
 */
class CustomVarRule extends Rule_1.Rule {
    constructor(owner) {
        super();
        this.owner = owner;
        this.ruleName = ":root";
    }
    // Creates a copy of the rule.
    clone() { return null; }
    // Copies internal data from another rule object.
    copyFrom(src) { }
    // Converts the rule to CSS string.
    toCssString() { return this.owner.customVarsToCssString(); }
}


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
    constructor(tagName, styleset) {
        super(styleset);
        this.tagName = tagName;
    }
    // Processes the given rule.
    process(owner, ruleName) {
        super.process(owner, ruleName);
        // go through all parents and copy style properties to the class's own styleset.
        for (let parent of this.parents)
            Object.assign(this.styleset, parent.styleset);
    }
    // Creates a copy of the rule.
    clone() {
        let newRule = new TagRule();
        newRule.copyFrom(this);
        return newRule;
    }
    // Copies internal data from another rule object.
    copyFrom(src) {
        super.copyFrom(src);
        this.tagName = src.tagName;
    }
    // Returns the selector part of the style rule.
    geSelectorString() {
        return this.tagName;
    }
    /** Only needed to distinguish from other rules */
    get isTagRule() { return true; }
}
exports.TagRule = TagRule;


/***/ }),

/***/ "./src/rules/TssManager.ts":
/*!*********************************!*\
  !*** ./src/rules/TssManager.ts ***!
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
        let styleElm;
        let styleSheet;
        if (styleScope.Definition.isMultiplex) {
            styleElm = document.createElement("style");
            document.head.appendChild(styleElm);
            styleSheet = styleElm.sheet;
            this.multiplexScopes.set(styleScope, styleElm);
        }
        else {
            this.ensureDOM();
            styleElm = this.styleElm;
            styleSheet = this.styleSheet;
        }
        styleScope.setDOMInfo(styleElm, styleSheet);
        // go over the named rules, convert them to strings and insert them into the style sheet
        for (let ruleName in styleScope._namedRules) {
            let rule = styleScope._namedRules[ruleName];
            rule.index = styleSheet.insertRule(rule.toCssString());
        }
        // do the same for the unnamed rules
        for (let unnamedRule of styleScope._unnamedRules) {
            let rule = unnamedRule;
            rule.index = styleSheet.insertRule(rule.toCssString());
        }
    }
    // Removes this style scope from DOM - only works for multiplex style scopes
    static deactivate(styleScope) {
        if (!styleScope)
            return;
        if (styleScope.Definition.isMultiplex) {
            styleScope.clearDOMInfo();
            // remove the <style> element from the document
            let styleElm = this.multiplexScopes.get(styleScope);
            if (styleElm)
                styleElm.remove();
            this.multiplexScopes.delete(styleScope);
        }
    }
    /** Ensures that the <style> element is inserted into DOM */
    static ensureDOM() {
        if (this.styleSheet)
            return;
        // create <style> element and insert it into <head>
        this.styleElm = document.createElement("style");
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

/***/ "./src/styles/StyleInfo.ts":
/*!*********************************!*\
  !*** ./src/styles/StyleInfo.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils = __webpack_require__(/*! ./utils */ "./src/styles/utils.ts");
const styles = __webpack_require__(/*! ./styles */ "./src/styles/styles.ts");
const colors = __webpack_require__(/*! ./colors */ "./src/styles/colors.ts");
/** Converts the given styleset to its string representation */
function stylesetToCssString(styleset, important) {
    let s = "";
    for (let propName in styleset) {
        let propVal = styleset[propName];
        if (propName === "$custom") {
            // special handling of the "$custom" property
            for (let customPropName in propVal) {
                s += `--${customPropName}:${propVal[customPropName]}`;
                s += (important && important.has(propName) ? " !important;" : ";");
            }
        }
        else {
            // get the string representation of the property
            s += stylePropToCssString(propName, propVal);
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
    let s = valueOnly ? "" : utils.camelToDash(propName) + ":";
    if (typeof info === "function")
        s += info(propVal);
    else if (typeof propVal === "string")
        s += propVal;
    else if (propVal instanceof utils.StringProxy)
        s += propVal.toString();
    else if (Array.isArray(propVal))
        s += utils.arrayToCssString(propVal, item => item == null ? "" : item.toString());
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
    animation: styles.animationToCssString,
    animationDelay: utils.multiTimeToCssString,
    animationDuration: utils.multiTimeToCssString,
    animationIterationCount: utils.singleNumberToCssString,
    animationTimingFunction: styles.animationTimingFunctionToCssString,
    backgroundColor: colors.colorToCssString,
    bgc: "backgroundColor",
    backgroundPosition: utils.multiPositionToCssString,
    backgroundSize: utils.multiSizeToCssString,
    baselineShift: utils.singleLengthToCssString,
    border: styles.borderSideToCssString,
    borderBottom: styles.borderSideToCssString,
    borderBottomColor: colors.colorToCssString,
    borderBottomLeftRadius: styles.singleCornerRadiusToCssString,
    borderBottomRightRadius: styles.singleCornerRadiusToCssString,
    borderBottomWidth: utils.singleLengthToCssString,
    borderColor: styles.borderColorToCssString,
    borderImageOutset: styles.borderImageOutsetToCssString,
    borderImageWidth: styles.borderWidthToCssString,
    borderLeft: styles.borderSideToCssString,
    borderLeftColor: colors.colorToCssString,
    borderLeftWidth: utils.singleLengthToCssString,
    borderRadius: styles.borderRadiusToCssString,
    borderRight: styles.borderSideToCssString,
    borderRightColor: colors.colorToCssString,
    borderRightWidth: utils.singleLengthToCssString,
    borderStyle: styles.borderStyleToCssString,
    borderSpacing: styles.borderSpacingToCssString,
    borderTop: styles.borderSideToCssString,
    borderTopColor: colors.colorToCssString,
    borderTopLeftRadius: styles.singleCornerRadiusToCssString,
    borderTopRightRadius: styles.singleCornerRadiusToCssString,
    borderTopWidth: utils.singleLengthToCssString,
    borderWidth: styles.borderWidthToCssString,
    bottom: utils.singleLengthToCssString,
    boxShadow: styles.boxShadowToCssString,
    shadow: "boxShadow",
    caretColor: colors.colorToCssString,
    clip: styles.clipToCssString,
    color: colors.colorToCssString,
    columnGap: utils.singleLengthToCssString,
    columnRule: styles.columnRuleToCssString,
    columnRuleColor: colors.colorToCssString,
    columnRuleStyle: styles.borderStyleToCssString,
    columnRuleWidth: styles.borderWidthToCssString,
    columns: styles.columnsToCssString,
    flex: styles.flexToCssString,
    flexFlow: styles.flexFlowToCssString,
    floodColor: colors.colorToCssString,
    fontStyle: styles.fontStyleToCssString,
    gridColumnGap: utils.singleLengthToCssString,
    gridRowGap: utils.singleLengthToCssString,
    height: utils.singleLengthToCssString,
    left: utils.singleLengthToCssString,
    lightingColor: colors.colorToCssString,
    outlineColor: colors.colorToCssString,
    right: utils.singleLengthToCssString,
    rowGap: utils.singleLengthToCssString,
    textDecorationColor: colors.colorToCssString,
    textEmphasisColor: colors.colorToCssString,
    top: utils.singleLengthToCssString,
    width: utils.singleLengthToCssString,
};


/***/ }),

/***/ "./src/styles/colors.ts":
/*!******************************!*\
  !*** ./src/styles/colors.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file contains types and functions used to work with CSS colors.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Object whose property names are names of well-known colors and values correspond to the hexadecimal
 * representartion of the RGB separations (without an alpha mask).
 */
class ColorsClass {
    constructor() {
        this.black = 0x000000;
        this.silver = 0xc0c0c0;
        this.gray = 0x808080;
        this.white = 0xffffff;
        this.maroon = 0x800000;
        this.red = 0xff0000;
        this.purple = 0x800080;
        this.fuchsia = 0xff00ff;
        this.green = 0x008000;
        this.lime = 0x00ff00;
        this.olive = 0x808000;
        this.yellow = 0xffff00;
        this.navy = 0x000080;
        this.blue = 0x0000ff;
        this.teal = 0x008080;
        this.aqua = 0x00ffff;
        this.orange = 0xffa500;
        this.aliceblue = 0xf0f8ff;
        this.antiquewhite = 0xfaebd7;
        this.aquamarine = 0x7fffd4;
        this.azure = 0xf0ffff;
        this.beige = 0xf5f5dc;
        this.bisque = 0xffe4c4;
        this.blanchedalmond = 0xffebcd;
        this.blueviolet = 0x8a2be2;
        this.brown = 0xa52a2a;
        this.burlywood = 0xdeb887;
        this.cadetblue = 0x5f9ea0;
        this.chartreuse = 0x7fff00;
        this.chocolate = 0xd2691e;
        this.coral = 0xff7f50;
        this.cornflowerblue = 0x6495ed;
        this.cornsilk = 0xfff8dc;
        this.crimson = 0xdc143c;
        this.cyan = 0x00ffff;
        this.darkblue = 0x00008b;
        this.darkcyan = 0x008b8b;
        this.darkgoldenrod = 0xb8860b;
        this.darkgray = 0xa9a9a9;
        this.darkgreen = 0x006400;
        this.darkgrey = 0xa9a9a9;
        this.darkkhaki = 0xbdb76b;
        this.darkmagenta = 0x8b008b;
        this.darkolivegreen = 0x556b2f;
        this.darkorange = 0xff8c00;
        this.darkorchid = 0x9932cc;
        this.darkred = 0x8b0000;
        this.darksalmon = 0xe9967a;
        this.darkseagreen = 0x8fbc8f;
        this.darkslateblue = 0x483d8b;
        this.darkslategray = 0x2f4f4f;
        this.darkslategrey = 0x2f4f4f;
        this.darkturquoise = 0x00ced1;
        this.darkviolet = 0x9400d3;
        this.deeppink = 0xff1493;
        this.deepskyblue = 0x00bfff;
        this.dimgray = 0x696969;
        this.dimgrey = 0x696969;
        this.dodgerblue = 0x1e90ff;
        this.firebrick = 0xb22222;
        this.floralwhite = 0xfffaf0;
        this.forestgreen = 0x228b22;
        this.gainsboro = 0xdcdcdc;
        this.ghostwhite = 0xf8f8ff;
        this.gold = 0xffd700;
        this.goldenrod = 0xdaa520;
        this.greenyellow = 0xadff2f;
        this.grey = 0x808080;
        this.honeydew = 0xf0fff0;
        this.hotpink = 0xff69b4;
        this.indianred = 0xcd5c5c;
        this.indigo = 0x4b0082;
        this.ivory = 0xfffff0;
        this.khaki = 0xf0e68c;
        this.lavender = 0xe6e6fa;
        this.lavenderblush = 0xfff0f5;
        this.lawngreen = 0x7cfc00;
        this.lemonchiffon = 0xfffacd;
        this.lightblue = 0xadd8e6;
        this.lightcoral = 0xf08080;
        this.lightcyan = 0xe0ffff;
        this.lightgoldenrodyellow = 0xfafad2;
        this.lightgray = 0xd3d3d3;
        this.lightgreen = 0x90ee90;
        this.lightgrey = 0xd3d3d3;
        this.lightpink = 0xffb6c1;
        this.lightsalmon = 0xffa07a;
        this.lightseagreen = 0x20b2aa;
        this.lightskyblue = 0x87cefa;
        this.lightslategray = 0x778899;
        this.lightslategrey = 0x778899;
        this.lightsteelblue = 0xb0c4de;
        this.lightyellow = 0xffffe0;
        this.limegreen = 0x32cd32;
        this.linen = 0xfaf0e6;
        this.magenta = 0xff00ff;
        this.mediumaquamarine = 0x66cdaa;
        this.mediumblue = 0x0000cd;
        this.mediumorchid = 0xba55d3;
        this.mediumpurple = 0x9370db;
        this.mediumseagreen = 0x3cb371;
        this.mediumslateblue = 0x7b68ee;
        this.mediumspringgreen = 0x00fa9a;
        this.mediumturquoise = 0x48d1cc;
        this.mediumvioletred = 0xc71585;
        this.midnightblue = 0x191970;
        this.mintcream = 0xf5fffa;
        this.mistyrose = 0xffe4e1;
        this.moccasin = 0xffe4b5;
        this.navajowhite = 0xffdead;
        this.oldlace = 0xfdf5e6;
        this.olivedrab = 0x6b8e23;
        this.orangered = 0xff4500;
        this.orchid = 0xda70d6;
        this.palegoldenrod = 0xeee8aa;
        this.palegreen = 0x98fb98;
        this.paleturquoise = 0xafeeee;
        this.palevioletred = 0xdb7093;
        this.papayawhip = 0xffefd5;
        this.peachpuff = 0xffdab9;
        this.peru = 0xcd853f;
        this.pink = 0xffc0cb;
        this.plum = 0xdda0dd;
        this.powderblue = 0xb0e0e6;
        this.rosybrown = 0xbc8f8f;
        this.royalblue = 0x4169e1;
        this.saddlebrown = 0x8b4513;
        this.salmon = 0xfa8072;
        this.sandybrown = 0xf4a460;
        this.seagreen = 0x2e8b57;
        this.seashell = 0xfff5ee;
        this.sienna = 0xa0522d;
        this.skyblue = 0x87ceeb;
        this.slateblue = 0x6a5acd;
        this.slategray = 0x708090;
        this.slategrey = 0x708090;
        this.snow = 0xfffafa;
        this.springgreen = 0x00ff7f;
        this.steelblue = 0x4682b4;
        this.tan = 0xd2b48c;
        this.thistle = 0xd8bfd8;
        this.tomato = 0xff6347;
        this.turquoise = 0x40e0d0;
        this.violet = 0xee82ee;
        this.wheat = 0xf5deb3;
        this.whitesmoke = 0xf5f5f5;
        this.yellowgreen = 0x9acd32;
        this.rebeccapurple = 0x663399;
    }
}
exports.ColorsClass = ColorsClass;
/**
 * The Colors object is used to get string representations of the well-known Web colors as well as
 * to get their numeric values.
 */
exports.Colors = new ColorsClass();
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
    let rgbVal = typeof c === "string" ? exports.Colors[c] : c;
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

/***/ "./src/styles/styles.ts":
/*!******************************!*\
  !*** ./src/styles/styles.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils = __webpack_require__(/*! ./utils */ "./src/styles/utils.ts");
const colors_1 = __webpack_require__(/*! ./colors */ "./src/styles/colors.ts");
/**
 * Converts animation style represented as an object with fields corresponding to animation
 * properties to its CSS string value.
 * @param val Single animation object.
 */
function singleAnimationToCssString(val) {
    if (typeof val === "string")
        return val;
    else {
        return utils.objectToCssString(val, false, ["delay", utils.singleTimeToCssString], ["function", singleAnimationTimingFunctionToCssString], ["duration", utils.singleTimeToCssString], ["count", utils.singleNumberToCssString], "direction", "state", "mode", "name");
    }
}
exports.singleAnimationToCssString = singleAnimationToCssString;
/**
 * Converts animation style to its CSS string value.
 * @param obj Single animation object.
 */
function animationToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (Array.isArray(val))
        return utils.arrayToCssString(val, singleAnimationToCssString);
    else
        return singleAnimationToCssString(val);
}
exports.animationToCssString = animationToCssString;
/**
 * Converts single animation timing function value to the CSS time string.
 * @param val Single animation timing function value
 */
function singleAnimationTimingFunctionToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
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
exports.singleAnimationTimingFunctionToCssString = singleAnimationTimingFunctionToCssString;
/**
 * Converts animation iteration count style value to the CSS time string.
 * @param val Animation iteration count value
 */
function animationTimingFunctionToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else if (val.length === 0)
        return "";
    else if (typeof val[0] === "number")
        return singleAnimationTimingFunctionToCssString(val);
    else
        return utils.arrayToCssString(val, singleAnimationTimingFunctionToCssString);
}
exports.animationTimingFunctionToCssString = animationTimingFunctionToCssString;
/**
 * Converts corner radius style value to the CSS string.
 * @param val Animation delay value
 */
function singleCornerRadiusToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return utils.arrayToCssString(val, utils.singleLengthToCssString, " ");
    else
        return utils.singleLengthToCssString(val);
}
exports.singleCornerRadiusToCssString = singleCornerRadiusToCssString;
/**
 * Converts border radius style value to the CSS string.
 * @param val Border radius value
 */
function borderRadiusToCssString(val) {
    if (Array.isArray(val)) {
        if (Array.isArray(val[0])) {
            // two MultiCornerRadius values
            let s = utils.arrayToCssString(val[0], utils.singleLengthToCssString, " ");
            s += " / ";
            return s + utils.arrayToCssString(val[1], utils.singleLengthToCssString, " ");
        }
        else {
            // single MultiCornerRadius value
            return utils.arrayToCssString(val, utils.singleLengthToCssString, " ");
        }
    }
    else
        return utils.singleLengthToCssString(val);
}
exports.borderRadiusToCssString = borderRadiusToCssString;
/**
 * Converts border style style value to the CSS string.
 * @param val Border style value
 */
function borderStyleToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return utils.stringArrayToCssString(val, " ");
    else
        return val;
}
exports.borderStyleToCssString = borderStyleToCssString;
/**
 * Converts border width style value to the CSS string.
 * @param val Border width value
 */
function borderWidthToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return utils.arrayToCssString(val, utils.singleLengthToCssString, " ");
    else
        return utils.singleLengthToCssString(val);
}
exports.borderWidthToCssString = borderWidthToCssString;
/**
 * Converts border spacing style value to the CSS string.
 * @param val Border spacing value
 */
function borderSpacingToCssString(val) {
    if (Array.isArray(val))
        return utils.arrayToCssString(val, utils.singleLengthToCssString, " ");
    else
        return utils.singleLengthToCssString(val);
}
exports.borderSpacingToCssString = borderSpacingToCssString;
/**
 * Converts border color style value to the CSS string.
 * @param val Border color value
 */
function borderColorToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return utils.arrayToCssString(val, colors_1.colorToCssString, " ");
    else
        return colors_1.colorToCssString(val);
}
exports.borderColorToCssString = borderColorToCssString;
/**
 * Converts border side style value to the CSS string.
 * @param val Border side value
 */
function borderSideToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return utils.singleLengthToCssString(val);
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else if (Array.isArray(val)) {
        let s = "";
        if (typeof val[0] === "string")
            return val[0];
        else if (val[0] instanceof utils.StringProxy)
            return val[0].toString();
        else if (val[0] != null)
            s += utils.singleLengthToCssString(val[0]) + " ";
        if (val[1])
            s += val[1] + " ";
        if (val[2])
            s += colors_1.colorToCssString(val[2]) + " ";
        return s;
    }
    else
        return colors_1.colorToCssString(val);
}
exports.borderSideToCssString = borderSideToCssString;
/**
 * Converts border-image-outset style value to the CSS string.
 * @param val Border image outset value
 */
function borderImageOutsetToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else
        return utils.arrayToCssString(val, borderImageOutsetToCssString, " ");
}
exports.borderImageOutsetToCssString = borderImageOutsetToCssString;
/**
 * Converts single box shadow style represented as an object with fields corresponding to box shadow
 * properties to its CSS string value.
 * @param val Single box shadow object.
 */
function singleBoxShadowToCssString(val) {
    if (!val)
        return "none";
    else if (typeof val === "string")
        return val;
    else if (typeof val === "boolean")
        return "0 0 1em 1em #c0c0c0";
    else if (typeof val === "number")
        return `0 0 ${val}em ${val}1em #c0c0c0`;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else {
        return utils.objectToCssString(val, false, ["inset", v => v === true ? "inset" : ""], ["x", utils.singleLengthToCssString], ["y", utils.singleLengthToCssString], ["blur", utils.singleLengthToCssString], ["spread", utils.singleLengthToCssString], ["color", colors_1.colorToCssString]);
    }
}
exports.singleBoxShadowToCssString = singleBoxShadowToCssString;
/**
 * Converts box shadow style to its CSS string value.
 * @param obj Box shadow value.
 */
function boxShadowToCssString(val) {
    if (Array.isArray(val))
        return utils.arrayToCssString(val, singleBoxShadowToCssString);
    else
        return singleBoxShadowToCssString(val);
}
exports.boxShadowToCssString = boxShadowToCssString;
/**
 * Converts clip style value to its CSS string value.
 * @param val Clip value.
 */
function clipToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else
        return `rect(${utils.arrayToCssString(val, utils.singleLengthToCssString, " ")}`;
}
exports.clipToCssString = clipToCssString;
/**
 * Converts column rule style represented as an object with fields corresponding to column rule
 * properties to its CSS string value.
 * @param val Column rule style value.
 */
function columnRuleToCssString(val) {
    if (!val)
        return null;
    else if (typeof val === "string")
        return val;
    else {
        return utils.objectToCssString(val, false, ["width", borderWidthToCssString], ["style", borderStyleToCssString], ["color", colors_1.colorToCssString]);
    }
}
exports.columnRuleToCssString = columnRuleToCssString;
/**
 * Converts columns style to its CSS string value.
 * @param val Columns style value.
 */
function columnsToCssString(val) {
    if (!val)
        return null;
    else if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else
        return val[0].toString() + " " + utils.singleLengthToCssString(val[1]);
}
exports.columnsToCssString = columnsToCssString;
/**
 * Converts flex style value to the CSS string.
 * @param val Flex value
 */
function flexToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else if (val instanceof utils.StringProxy)
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
                s += utils.singleLengthToCssString(v);
            return s;
        }
    }
    else
        return utils.singleLengthToCssString(val);
}
exports.flexToCssString = flexToCssString;
/**
 * Converts flex-flow style value to the CSS string.
 * @param val Flex-flow value
 */
function flexFlowToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else
        return utils.stringArrayToCssString(val);
}
exports.flexFlowToCssString = flexFlowToCssString;
/**
 * Converts font-style style value to the CSS string.
 * @param val Font-style value
 */
function fontStyleToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof utils.StringProxy)
        return val.toString();
    else
        return utils.singleAngleToCssString(val);
}
exports.fontStyleToCssString = fontStyleToCssString;


/***/ }),

/***/ "./src/styles/tsh.ts":
/*!***************************!*\
  !*** ./src/styles/tsh.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __webpack_require__(/*! ./utils */ "./src/styles/utils.ts");
const colors_1 = __webpack_require__(/*! ./colors */ "./src/styles/colors.ts");
const CustomVar_1 = __webpack_require__(/*! ../rules/CustomVar */ "./src/rules/CustomVar.ts");
const StyleInfo_1 = __webpack_require__(/*! ./StyleInfo */ "./src/styles/StyleInfo.ts");
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
     * Converts the given number to a percent string. Numbers between -1 and 1 are multiplyed by 100.
     */
    static percent(n) {
        return utils_1.percentToCssString(n);
    }
    static units(n, unit) {
        return new utils_1.UnitValue(n, unit);
    }
    /**
     * Converts the given value corresponding to the given style property to string.
     * @param stylePropName Style property name that determines how the value should be converted
     * to a CSS compliant string.
     * @param stylePropValue Value to convert.
     */
    static val(stylePropName, stylePropValue) {
        return StyleInfo_1.stylePropToCssString(stylePropName, stylePropValue, true);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Colors
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    static colorSep(c) {
        return colors_1.colorSep(c);
    }
    static rgb(r, g, b, a) {
        return new utils_1.StringProxy(colors_1.rgb(r, g, b, a));
    }
    static hsl(h, s, l, a) {
        return new utils_1.StringProxy(colors_1.hsl(h, s, l, a));
    }
    static alpha(c, a) {
        return new utils_1.StringProxy(colors_1.alpha(c, a));
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
        return utils_1.lengthUnitsToCssString(n, units);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Angle units
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    static deg(n) { return this.units(n, "deg"); }
    static rad(n) { return this.units(n, "rad"); }
    static grad(n) { return this.units(n, "grad"); }
    static turn(n) { return this.units(n, "turn"); }
    /**
     * Converts angle value from the numeric representation to the CSS string. Integer
     * values are treated as degrees while floating numbers are treated as radians.
     * @param val Angle as a number
     */
    static angle(n, units) {
        return utils_1.angleToCssString(n);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Time units
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    static s(n) { return this.units(n, "s"); }
    static ms(n) { return this.units(n, "ms"); }
    /**
     * Converts time value from the numeric representation to the CSS string. Integer
     * values are treated as milliseconds while floating numbers are treated as seconds.
     * @param val Time as a number
     */
    static time(n, units) {
        return utils_1.timeToCssString(n);
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
     * Returns the string representation of the CSS var() function for the given custom property.
     * Example:
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
    static var(customVar, fallbackValue) {
        let varName = typeof customVar === "string" ? customVar : customVar.varName;
        let s = `var(--${varName}`;
        if (fallbackValue) {
            s += ",";
            if (fallbackValue instanceof CustomVar_1.CustomVar)
                s += this.var(fallbackValue);
            else if (typeof fallbackValue === "string")
                s += fallbackValue.toString();
            else if (fallbackValue instanceof utils_1.StringProxy || typeof customVar === "string")
                s += fallbackValue;
            else
                s += this.val(customVar.templatePropName, fallbackValue);
        }
        return new utils_1.StringProxy(s + ")");
    }
}
exports.tsh = tsh;


/***/ }),

/***/ "./src/styles/utils.ts":
/*!*****************************!*\
  !*** ./src/styles/utils.ts ***!
  \*****************************/
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
 * they accept other types (e.g a set of string literals as `"row" | "column"` for the
 * flex-dirction) property. This is because in addition to their normal values any property
 * can use custom CSS property in the form `var(--propname)`. However, if we add string type
 * to the set of string literals (e.g. `"row" | "column" | string`), this throws off the
 * Intellisense and it doesn't prompt developers for the possible values. The StringProxy
 * can be used instead of string (e.g. `"row" | "column" | StringProxy`) and this solves
 * the Intellisense issue.
 */
class StringProxy {
    constructor(s) {
        this.s = typeof s === "string" ? s : s != null ? s.toString() : undefined;
    }
    toString() { return this.s; }
}
exports.StringProxy = StringProxy;
/**
 * Creates a StringProxy object from the given string or another StringProxy object.
 */
function raw(s) {
    return new StringProxy(s);
}
exports.raw = raw;
/**
 * The UnitValue class encapsulates a numeric value and a unit. It is used to represents such
 * values as lengths, angles, time, etc.
 */
class UnitValue extends StringProxy {
    constructor(value, unit) {
        super();
        this.value = value;
        this.unit = unit;
    }
    toString() { return this.value + this.unit; }
}
exports.UnitValue = UnitValue;
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
function arrayToCssString(val, func, separator = ",") {
    let s = "";
    for (let v of val) {
        let item = func(v);
        if (item != null) {
            if (s.length > 0)
                s += separator;
            s += item;
        }
    }
    return s;
}
exports.arrayToCssString = arrayToCssString;
/**
 * Converts array of string values to a single string using the given separator.
 * @param val Array of string values
 */
function stringArrayToCssString(val, separator = ",") {
    let s = "";
    for (let v of val) {
        if (v != null) {
            if (s.length > 0)
                s += separator;
            if (typeof v === "string")
                s += v;
            else if (val instanceof StringProxy)
                s += v.toString();
        }
    }
    return s;
}
exports.stringArrayToCssString = stringArrayToCssString;
/**
 * Converts single number style value to the CSS string.
 * @param val Single number or string value
 */
function singleNumberToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return val.toString();
}
exports.singleNumberToCssString = singleNumberToCssString;
/**
 * Converts multi-part number style value to the CSS string.
 * @param val Animation delay value
 */
function multiNumberToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return val.toString();
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return arrayToCssString(val, singleNumberToCssString);
}
exports.multiNumberToCssString = multiNumberToCssString;
/**
 * Converts the given number to a percent string. Numbers between -1 and 1 are multiplyed by 100.
 */
function percentToCssString(n) {
    return (Number.isInteger(n) ? n : n > -1.0 && n < 1.0 ? Math.round(n * 100) : Math.round(n)) + "%";
}
exports.percentToCssString = percentToCssString;
/**
 * Converts length value from the numeric representation to the CSS string. Integer
 * values are treated as pixels while floating numbers are treated as percents from 0.0 to 1.0.
 * @param val Length as a number
 */
function lengthUnitsToCssString(n, units) {
    return n === 0 ? "0" : units ? n + units : Number.isInteger(n) ? n + "px" : percentToCssString(n);
}
exports.lengthUnitsToCssString = lengthUnitsToCssString;
/**
 * Converts length style value to the CSS time string.
 * @param val Length as a style property type
 */
function singleLengthToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return lengthUnitsToCssString(val);
}
exports.singleLengthToCssString = singleLengthToCssString;
/**
 * Converts multi-part length or percentage style property to the CSS string.
 * @param val Array of length style values
 */
function multiLengthToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (Array.isArray(val))
        return arrayToCssString(val, singleLengthToCssString);
    else
        return singleLengthToCssString(val);
}
exports.multiLengthToCssString = multiLengthToCssString;
/**
 * Converts size style value to the CSS string.
 * @param val Size as a style property type
 */
function singleSizeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else if (typeof val === "object")
        return objectToCssString(val, false, ["w", singleLengthToCssString], ["h", singleLengthToCssString]);
    // else if (Array.isArray( val))
    //     return lengthToCssString( val[0]) + " " + lengthToCssString( val[1]);
    else
        return singleLengthToCssString(val);
}
exports.singleSizeToCssString = singleSizeToCssString;
/**
 * Converts multi-part size style property to the CSS string.
 * @param val Array of length style values
 */
function multiSizeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else if (Array.isArray(val))
        return arrayToCssString(val, singleSizeToCssString);
    else
        return singleSizeToCssString(val);
}
exports.multiSizeToCssString = multiSizeToCssString;
/**
 * Converts angle value from the numeric representation to the CSS string. Integer
 * values are treated as degrees while floating numbers are treated as radians.
 * @param val Angle as a number
 */
function angleToCssString(n, units) {
    return n === 0 ? "0" : units ? n + units : Number.isInteger(n) ? n + "deg" : n + "rad";
}
exports.angleToCssString = angleToCssString;
/**
 * Converts length style value to the CSS time string.
 * @param val Length as a style property type
 */
function singleAngleToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return angleToCssString(val);
}
exports.singleAngleToCssString = singleAngleToCssString;
/**
 * Converts single position style value to the CSS time string.
 * @param val Size as a style property type
 */
function singlePositionToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else if (typeof val === "object") {
        if ("xedge" in val)
            return objectToCssString(val, false, "xedge", ["x", singleLengthToCssString], "yedge", ["y", singleLengthToCssString]);
        else
            return objectToCssString(val, false, ["x", singleLengthToCssString], ["y", singleLengthToCssString]);
    }
    else
        return singleLengthToCssString(val);
}
exports.singlePositionToCssString = singlePositionToCssString;
/**
 * Converts multi-part position style values to the CSS string.
 * @param val Array of length style values
 */
function multiPositionToCssString(val) {
    if (Array.isArray(val))
        return arrayToCssString(val, singlePositionToCssString);
    else
        return singlePositionToCssString(val);
}
exports.multiPositionToCssString = multiPositionToCssString;
/**
 * Converts time value from the numeric representation to the CSS string. Integer
 * values are treated as milliseconds while floating numbers are treated as seconds.
 * @param val Time as a number
 */
function timeToCssString(n, units) {
    return n === 0 ? "0s" : units ? n + units : Number.isInteger(n) ? n + "ms" : n + "s";
}
exports.timeToCssString = timeToCssString;
/**
 * Converts time style value to the CSS time string.
 * @param val Time as a style property type
 */
function singleTimeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return timeToCssString(val);
}
exports.singleTimeToCssString = singleTimeToCssString;
/**
 * Converts animation delay style value to the CSS time string.
 * @param val Animation delay value
 */
function multiTimeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (typeof val === "number")
        return timeToCssString(val);
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return arrayToCssString(val, singleTimeToCssString);
}
exports.multiTimeToCssString = multiTimeToCssString;
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


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1J1bGVGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9TZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL3Njb3BlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQ2xhc3NSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9DdXN0b21WYXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0lEUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2VsZWN0b3JSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9TdHlsZVJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1N0eWxlU2NvcGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1RhZ1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1Rzc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9TdHlsZUluZm8udHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy90c2gudHMiLCJ3ZWJwYWNrOi8vbWlt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QUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDN0UsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkUsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDM0UsQ0FBQztBQVJELGtCQVFDO0FBRUQsU0FBZ0IsS0FBSyxDQUFFLENBQStCLEVBQUUsQ0FBa0I7SUFFdEUsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRCxPQUFPLEdBQUcs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QUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpFOztPQUVHO0lBQ0ksTUFBTSxD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LFlBQVk7WUFDWixDQUFDLElBQUksUUFBUSxDQUFDO1FBRWxCLElBQUksSUFBSTtZQUNKLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3pCLElBQUksT0FBTyxJQUFJLElBQUk7WUFDcEIsQ0FBQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUM7S0FDMUI7SUFFSixPQUFPLENBQUMsQ0FBQztBQUNWLENBQUM7QUE3QkQsOENBNkJDIiwiZmlsZSI6Im1pbWNzcy5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJtaW1jc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltY3NzVHlwZXMudHNcIik7XG4iLCJpbXBvcnQge0V4dGVuZGVkU3R5bGVzZXQsIElUYWdSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlLCBJU2VsZWN0b3JSdWxlLCBJQW5pbWF0aW9uUnVsZSxcclxuXHRcdEtleWZyYW1lLCBJQ3VzdG9tVmFyfSBmcm9tIFwiLi9ydWxlc1wiXHJcbmltcG9ydCB7SVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MsIElTdHlsZVNjb3BlfSBmcm9tIFwiLi9zY29wZVwiXHJcbmltcG9ydCB7SVNlbGVjdG9yfSBmcm9tIFwiLi9TZWxlY3RvclwiXHJcblxyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlc1wiXHJcbmltcG9ydCB7VGFnUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1RhZ1J1bGVcIlxyXG5pbXBvcnQge0NsYXNzUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0NsYXNzUnVsZVwiXHJcbmltcG9ydCB7SURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvSURSdWxlXCJcclxuaW1wb3J0IHtTZWxlY3RvclJ1bGV9IGZyb20gXCIuLi9ydWxlcy9TZWxlY3RvclJ1bGVcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuLi9ydWxlcy9BbmltYXRpb25SdWxlXCJcclxuaW1wb3J0IHtDdXN0b21WYXJ9IGZyb20gXCIuLi9ydWxlcy9DdXN0b21WYXJcIlxyXG5pbXBvcnQge1N0eWxlU2NvcGV9IGZyb20gXCIuLi9ydWxlcy9TdHlsZVNjb3BlXCJcclxuXHJcblxyXG5cclxuLyoqIENyZWF0ZXMgbmV3IFRhZ1J1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHRhZyggdGFnTmFtZTogc3RyaW5nLCBzdHlsZXNldDogRXh0ZW5kZWRTdHlsZXNldCk6IElUYWdSdWxlIHsgcmV0dXJuIG5ldyBUYWdSdWxlKCB0YWdOYW1lLCBzdHlsZXNldCk7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBDbGFzc1J1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGNsYXNzKCBzdHlsZXNldDogRXh0ZW5kZWRTdHlsZXNldCk6IElDbGFzc1J1bGUgeyByZXR1cm4gbmV3IENsYXNzUnVsZSggc3R5bGVzZXQpOyB9XHJcblxyXG4vKiogUmV0dXJucyBuZXcgSURSdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRpZCggc3R5bGVzZXQ6IEV4dGVuZGVkU3R5bGVzZXQpOiBJSURSdWxlIHsgcmV0dXJuIG5ldyBJRFJ1bGUoIHN0eWxlc2V0KTsgfVxyXG5cclxuLyoqIENyZWF0ZXMgbmV3IFNlbGVjdG9yUnVsZSBvYmplY3QgICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkcnVsZSggc2VsZWN0b3I6IElTZWxlY3RvciB8IHN0cmluZywgc3R5bGVzZXQ6IEV4dGVuZGVkU3R5bGVzZXQpOiBJU2VsZWN0b3JSdWxlXHJcblx0eyByZXR1cm4gbmV3IFNlbGVjdG9yUnVsZSggc2VsZWN0b3IsIHN0eWxlc2V0KTsgfVxyXG5cclxuLyoqIFJldHVybnMgbmV3IEFuaW1hdGlvblJ1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGFuaW1hdGlvbiggLi4ua2V5ZnJhbWVzOiBLZXlmcmFtZVtdKTogSUFuaW1hdGlvblJ1bGUgeyByZXR1cm4gbmV3IEFuaW1hdGlvblJ1bGUoIGtleWZyYW1lcyk7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBDdXN0b21Qcm9wIG9iamVjdCB0aGF0IGRlZmluZXMgYSBjdXN0b20gQ1NTIHByb3BlcnR5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkY3VzdG9tPEsgZXh0ZW5kcyBrZXlvZiBTdHlsZXNldD4oIHRlbXBsYXRlUHJvcE5hbWU6IEssIHByb3BWYWw6IFN0eWxlc2V0W0tdKTogSUN1c3RvbVZhcjxTdHlsZXNldFtLXT5cclxuXHR7IHJldHVybiBuZXcgQ3VzdG9tVmFyKCB0ZW1wbGF0ZVByb3BOYW1lLCBwcm9wVmFsKTsgfVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUHJvY2Vzc2VzIHRoZSBnaXZlbiBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGFuZCByZXR1cm5zIHRoZSBTdHlsZVNjb3BlIG9iamVjdCB0aGF0IGNvbnRhaW5zXHJcbiAqIG5hbWVzIG9mIElEcywgY2xhc3NlcyBhbmQga2V5ZnJhbWVzIGFuZCBhbGxvd3Mgc3R5bGUgbWFuaXB1bGF0aW9ucy4gRm9yIGEgZ2l2ZW4gc3R5bGUgc2NvcGVcclxuICogZGVmaW5pdGlvbiBjbGFzcyB0aGVyZSBpcyBhIHNpbmdsZSBzdHlsZSBzY29wZSBvYmplY3QsIG5vIG1hdHRlciBob3cgbWFueSB0aW1lcyB0aGlzIGZ1bmN0aW9uXHJcbiAqIGlzIGludm9rZWQuXHJcbiAqIEBwYXJhbSBzaGVldERlZiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkc2NvcGU8VD4oIHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M6IElTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzPFQ+KTogSVN0eWxlU2NvcGU8VD5cclxue1xyXG5cdC8vIGlmIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGlzIG11bHRpcGxleCwgY3JlYXRlIG5ldyBTdHlsZVNjb3BlIG9iamVjdCBldmVyeSB0aW1lO1xyXG5cdC8vIG90aGVyd2lzZSwgY2hlY2sgd2hldGhlciB0aGUgc3R5bGUgc2hlZXQgZGVmaW5pdGlvbiBvYmplY3QgaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQuIFRoaXNcclxuXHQvLyBpcyBpbmRpY2F0ZWQgYnkgdGhlIGV4aXN0ZW5jZSBvZiB0aGUgaW5zdGFuY2Ugc3RhdGljIHByb3BlcnR5IG9uIHRoZSBjbGFzcy5cclxuXHRpZiAoc3R5bGVTY29wZURlZmluaXRpb25DbGFzcy5pc011bHRpcGxleClcclxuXHRcdHJldHVybiBuZXcgU3R5bGVTY29wZSggc3R5bGVTY29wZURlZmluaXRpb25DbGFzcyk7XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdGxldCBzdHlsZVNjb3BlID0gc3R5bGVTY29wZURlZmluaXRpb25DbGFzcy5zdHlsZVNjb3BlIGFzIFN0eWxlU2NvcGU8VD47XHJcblx0XHRpZiAoIXN0eWxlU2NvcGUpXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlU2NvcGUgPSBuZXcgU3R5bGVTY29wZSggc3R5bGVTY29wZURlZmluaXRpb25DbGFzcyk7XHJcblx0XHRcdHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3Muc3R5bGVTY29wZSA9IHN0eWxlU2NvcGU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHN0eWxlU2NvcGU7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlUnVsZSwgSVRhZ1J1bGUsIElDbGFzc1J1bGUsIElJRFJ1bGV9IGZyb20gXCIuL3J1bGVzXCJcclxuLy8gaW1wb3J0IHtJU2VsZWN0b3IsIElFbXB0eVNlbGVjdG9yLCBBdHRyU2VsZWN0b3JPcGVyYXRpb24sIEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsIH0gZnJvbSBcIi4vSVNlbGVjdG9yXCJcclxuaW1wb3J0IHtUYWdSdWxlfSBmcm9tIFwiLi4vcnVsZXMvVGFnUnVsZVwiXHJcbmltcG9ydCB7Q2xhc3NSdWxlfSBmcm9tIFwiLi4vcnVsZXMvQ2xhc3NSdWxlXCJcclxuaW1wb3J0IHtJRFJ1bGV9IGZyb20gXCIuLi9ydWxlcy9JRFJ1bGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNvbXBsZXRlIENTUyBzZWxlY3RvciB0aGF0IGNhbiBiZSBlaXRoZXIgdXNlZCBhcyBpcyBvciBjYW4gYmUgY29tYmluZWQgd2l0aCBvdGhlciBzZWxlY3RvcnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RvciBleHRlbmRzIElDb21wb3VuZFNlbGVjdG9yXHJcbntcclxuXHRyZWFkb25seSBhbmQ6IElFbXB0eVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGNoaWxkOiBJRW1wdHlTZWxlY3RvcjtcclxuXHRyZWFkb25seSBkZXNjZW5kYW5kOiBJRW1wdHlTZWxlY3RvcjtcclxuXHRyZWFkb25seSBzaWJsaW5nOiBJRW1wdHlTZWxlY3RvcjtcclxuXHRyZWFkb25seSBhZGphY2VudDogSUVtcHR5U2VsZWN0b3I7XHJcblxyXG5cdC8qKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgcnVsZXMgcGFydGljaXBhdGluZyBpbiB0aGUgc2VsZWN0b3IuICovXHJcblx0Z2V0UnVsZXMoKTogSVN0eWxlUnVsZVtdO1xyXG5cclxuXHQvKiogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZWxlY3RvciAqL1xyXG5cdHRvQ3NzU3RyaW5nKCk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHN0YXJ0aW5nIHBvaW50IGluIHRoZSBzZWxlY3RvciBidWlsZGluZyBwcm9jZXNzLiBUaGlzIHNlbGVjdG9yIGNhbm5vdCBiZSB1c2VkIGFzXHJcbiAqIGlzIGJlY2F1c2UgaXQgZG9lc24ndCBjb250YWluIGFueSBzZWxlY3Rpb24gY29udGVudCB5ZXQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFbXB0eVNlbGVjdG9yIGV4dGVuZHMgSUNvbXBvdW5kU2VsZWN0b3Jcclxue1xyXG5cdGFsbCggbnM/OiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0dGFnKCB0YWc6IHN0cmluZyB8IElUYWdSdWxlKTogSVNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcG9pbnQgaW4gc2VsZWN0b3IgYnVpbGRpbmcsIHdoaWNoIGFsbG93cyBjbGFzcywgYXR0cmlidXRlLCBwc2V1ZG8tY2xhc3MgYW5kIHBzZXVkbyBlbGVtZW50IHNlbGVjdG9yc1xyXG4gKi9cclxuaW50ZXJmYWNlIElDb21wb3VuZFNlbGVjdG9yXHJcbntcclxuXHRjbGFzcyggY2xzOiBzdHJpbmcgfCBJQ2xhc3NSdWxlKTogSVNlbGVjdG9yO1xyXG5cdGlkKCBpZDogc3RyaW5nIHwgSUlEUnVsZSk6IElTZWxlY3RvcjtcclxuXHRhdHRyKCBhdHRyTmFtZTogc3RyaW5nLCBvcD86IEF0dHJTZWxlY3Rvck9wZXJhdGlvbiB8IEF0dHJTZWxlY3Rvck9wZXJhdGlvblR5cGUsIHZhbHVlPzogc3RyaW5nLCBjYXNlSW5zZW5zaXRpdmU/OiBib29sZWFuKTogSVNlbGVjdG9yO1xyXG5cclxuXHQvLyBwc2V1ZG8gY2xhc3Nlc1xyXG5cdHJlYWRvbmx5IGFjdGl2ZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGFueUxpbms6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBibGFuazogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGNoZWNrZWQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBkZWZhdWx0OiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZGVmaW5lZDogSVNlbGVjdG9yO1xyXG5cdGRpciggczogXCJydGxcIiB8IFwibHRyXCIpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZGlzYWJsZWQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBlbXB0eTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGVuYWJsZWQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGZpcnN0Q2hpbGQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdE9mVHlwZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGZ1bGxzY3JlZW46IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmb2N1czogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGZvY3VzVmlzaWJsZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGZvY3VzV2l0aGluOiBJU2VsZWN0b3I7XHJcblx0aGFzKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0aG9zdCggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdGhvc3RDb250ZXh0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgaG92ZXI6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBpbmRldGVybWluYXRlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgaW5SYW5nZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGludmFsaWQ6IElTZWxlY3RvcjtcclxuXHRpcyggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdGxhbmcoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBsYXN0Q2hpbGQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBsYXN0T2ZUeXBlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgbGVmdDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGxpbms6IElTZWxlY3RvcjtcclxuXHRub3QoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRudGhDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yO1xyXG5cdG50aExhc3RDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yO1xyXG5cdG50aExhc3RPZlR5cGUoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvcjtcclxuXHRudGhPZlR5cGUoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBvbmx5Q2hpbGQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBvbmx5T2ZUeXBlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb3B0aW9uYWw6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBvdXRPZlJhbmdlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcGxhY2Vob2xkZXJTaG93bjogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHJlYWRPbmx5OiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcmVhZFdyaXRlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcmVxdWlyZWQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSByaWdodDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHJvb3Q6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBzY29wZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHRhcmdldDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHZhbGlkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgdmlzaXRlZDogSVNlbGVjdG9yO1xyXG5cdHdoZXJlKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblxyXG5cdC8vIHBzZXVkbyBlbGVtZW50c1xyXG5cdHJlYWRvbmx5IGFmdGVyOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYmFja2Ryb3A6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBiZWZvcmU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBjdWU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdExldHRlcjogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGZpcnN0TGluZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGdyYW1tYXJFcnJvcjogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IG1hcmtlcjogSVNlbGVjdG9yO1xyXG5cdHBhcnQoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBwbGFjZWhvbGRlcjogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHNlbGVjdGlvbjogSVNlbGVjdG9yO1xyXG5cdHNsb3R0ZWQoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBzcGVsbGluZ0Vycm9yOiBJU2VsZWN0b3I7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgcG9zc2libGUgb3BlcmF0aW9ucyBmb3IgYXR0cmlidXRlIHNlbGVjdG9yXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBdHRyU2VsZWN0b3JPcGVyYXRpb25UeXBlID0gXCI9XCIgfCBcIn49XCIgfCBcInw9XCIgfCBcIl49XCIgfCBcIiQ9XCIgfCBcIio9XCI7XHJcbmV4cG9ydCBlbnVtIEF0dHJTZWxlY3Rvck9wZXJhdGlvblxyXG57XHJcblx0TWF0Y2ggPSBcIj1cIixcclxuXHRXb3JkID0gXCJ+PVwiLFxyXG5cdFN1YkNvZGUgPSBcInw9XCIsXHJcblx0U3RhcnRzV2l0aCA9IFwiXj1cIixcclxuXHRFbmRzV2l0aCA9IFwiJD1cIixcclxuXHRDb250YWlucyA9IFwiKj1cIixcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIHNlbGVjdG9yIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbGwgdGhlIGZ1bmN0aW9uYWxpdHkgZm9yIGJ1aWxkaW5nIGEgQ1NTIHNlbGVjdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yIGltcGxlbWVudHMgSUVtcHR5U2VsZWN0b3IsIElTZWxlY3RvclxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCByYXc/OiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5idWYgPSBbXTtcclxuXHJcblx0XHRpZiAocmF3KVxyXG5cdFx0XHR0aGlzLmJ1Zi5wdXNoKCByYXcpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZWxlY3RvciBjb21iaW5hdG9yc1xyXG5cdHB1YmxpYyBnZXQgYW5kKCk6IElFbXB0eVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCIsIFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGNoaWxkKCk6IElFbXB0eVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCIgPiBcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBkZXNjZW5kYW5kKCk6IElFbXB0eVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCIgXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgc2libGluZygpOiBJRW1wdHlTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiIH4gXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgYWRqYWNlbnQoKTogSUVtcHR5U2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIiArIFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcblx0cHVibGljIGFsbCggbnM/OiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBucyA9PSBudWxsID8gXCIqXCIgOiBgJHtuc318KmApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyB0YWcoIHRhZzogc3RyaW5nIHwgSVRhZ1J1bGUpOiBJU2VsZWN0b3JcclxuXHR7XHJcblx0XHR0aGlzLmJ1Zi5wdXNoKCB0YWcpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdHB1YmxpYyBjbGFzcyggY2xzOiBzdHJpbmcgfCBJQ2xhc3NSdWxlKTogSVNlbGVjdG9yXHJcblx0e1xyXG5cdFx0dGhpcy5idWYucHVzaCggdHlwZW9mIGNscyA9PT0gXCJzdHJpbmdcIiA/IFwiLlwiICsgY2xzIDogY2xzKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgaWQoIGlkOiBzdHJpbmcgfCBJSURSdWxlKTogSVNlbGVjdG9yXHJcblx0e1xyXG5cdFx0dGhpcy5idWYucHVzaCggdHlwZW9mIGlkID09PSBcInN0cmluZ1wiID8gXCIuXCIgKyBpZCA6IGlkKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgYXR0ciggYXR0ck5hbWU6IHN0cmluZywgb3A/OiBBdHRyU2VsZWN0b3JPcGVyYXRpb24gfCBBdHRyU2VsZWN0b3JPcGVyYXRpb25UeXBlLFxyXG5cdFx0XHRcdFx0dmFsdWU/OiBzdHJpbmcsIGNhc2VJbnNlbnNpdGl2ZT86IGJvb2xlYW4pOiBJU2VsZWN0b3JcclxuXHR7XHJcblx0XHRsZXQgcyA9IFwiW1wiICsgYXR0ck5hbWU7XHJcblx0XHRpZiAob3ApXHJcblx0XHRcdHMgKz0gb3AgKyB2YWx1ZTtcclxuXHRcdGlmIChjYXNlSW5zZW5zaXRpdmUpXHJcblx0XHRcdHMgKz0gXCIgaVwiO1xyXG5cdFx0cyArPSBcIl1cIjtcclxuXHRcdHRoaXMuYnVmLnB1c2gocyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdC8vIHBzZXVkbyBjbGFzc2VzXHJcblx0cHVibGljIGdldCBhY3RpdmUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6YWN0aXZlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgYW55TGluaygpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjphbnktbGlua1wiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGJsYW5rKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmJsYW5rXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgY2hlY2tlZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpjaGVja2VkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZGVmYXVsdCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpkZWZhdWx0XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZGVmaW5lZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpkZWZpbmVkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBkaXIoIHM6IFwicnRsXCIgfCBcImx0clwiKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6ZGlyKCR7c30pXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZGlzYWJsZWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6ZGlzYWJsZWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBlbXB0eSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjplbXB0eVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGVuYWJsZWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6ZW5hYmxlZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZpcnN0KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZpcnN0XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZmlyc3RDaGlsZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpmaXJzdC1jaGlsZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZpcnN0T2ZUeXBlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZpcnN0LW9mLXR5cGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmdWxsc2NyZWVuKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZ1bGxzY3JlZW5cIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmb2N1cygpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpmb2N1c1wiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZvY3VzVmlzaWJsZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpmb2N1cy12aXNpYmxlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZm9jdXNXaXRoaW4oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Zm9jdXMtd2l0aGluXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBoYXMoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aGFzKCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGhvc3QoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aG9zdCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBob3N0Q29udGV4dCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpob3N0LWNvbnRleHQoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGhvdmVyKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmhvdmVyXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgaW5kZXRlcm1pbmF0ZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjppbmRldGVybWluYXRlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgaW5SYW5nZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjppbi1yYW5nZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGludmFsaWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6aW52YWxpZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgaXMoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aXMoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgbGFuZyggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpsYW5nKCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBsYXN0Q2hpbGQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6bGFzdC1jaGlsZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGxhc3RPZlR5cGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6bGFzdC1vZi10eXBlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgbGVmdCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpsZWZ0XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgbGluaygpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpsaW5rXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBub3QoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bm90KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIG50aENoaWxkKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1jaGlsZCgke3RoaXMubnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIG50aExhc3RDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpudGgtbGFzdC1jaGlsZCgke3RoaXMubnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIG50aExhc3RPZlR5cGUoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bnRoLWxhc3Qtb2YtdHlwZSgke3RoaXMubnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIG50aE9mVHlwZSggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpudGgtb2YtdHlwZSgke3RoaXMubnRoKCBhLCBiKX0pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBvbmx5Q2hpbGQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b25seS1jaGlsZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IG9ubHlPZlR5cGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b25seS1vZi10eXBlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgb3B0aW9uYWwoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6b3B0aW9uYWxcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBvdXRPZlJhbmdlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOm91dC1vZi1yYW5nZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHBsYWNlaG9sZGVyU2hvd24oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cGxhY2Vob2xkZXItc2hvd25cIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByZWFkT25seSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpyZWFkLW9ubHlcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByZWFkV3JpdGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cmVhZC13cml0ZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHJlcXVpcmVkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnJlcXVpcmVkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgcmlnaHQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cmlnaHRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByb290KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnJvb3RcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBzY29wZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpzY29wZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHRhcmdldCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjp0YXJnZXRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCB2YWxpZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjp2YWxpZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHZpc2l0ZWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6dmlzaXRlZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgd2hlcmUoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6d2hlcmUoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHJcblx0Ly8gcHNldWRvIGVsZW1lbnRzXHJcblx0cHVibGljIGdldCBhZnRlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6YWZ0ZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBiYWNrZHJvcCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6YmFja2Ryb3BcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBiZWZvcmUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmJlZm9yZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGN1ZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Y3VlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZmlyc3RMZXR0ZXIoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmZpcnN0LWxldHRlclwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZpcnN0TGluZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Zmlyc3QtbGluZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGdyYW1tYXJFcnJvcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6Z3JhbW1hci1lcnJvclwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IG1hcmtlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6bWFya2VyXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBwYXJ0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOjpwYXJ0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBwbGFjZWhvbGRlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6cGxhY2Vob2xkZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBzZWxlY3Rpb24oKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OnNlbGVjdGlvblwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgc2xvdHRlZCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDo6c2xvdHRlZCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgc3BlbGxpbmdFcnJvcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjo6c3BlbGxpbmctZXJyb3JcIik7IHJldHVybiB0aGlzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgXCJudGhcIiBub3RhdGlvblxyXG5cdHByaXZhdGUgbnRoKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYiA9PSBudWxsID8gYS50b1N0cmluZygpIDogYCR7YX1uJHtiID49IDAgPyBgKyR7Yn1gIDogYC0key1ifWB9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHJ1bGVzIHBhcnRpY2lwYXRpbmcgaW4gdGhlIHNlbGVjdG9yLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRSdWxlcygpOiBJU3R5bGVSdWxlW11cclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5idWYuZmlsdGVyKCAoaXRlbSkgPT4gdHlwZW9mIGl0ZW0gIT09IFwic3RyaW5nXCIpIGFzIElTdHlsZVJ1bGVbXTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVydHMgdGhlIGFjY3VtdWxhdGVkIHNlbGVjdG9yIHRva2VucyBpbnRvIGZ1bGwgc2VsZWN0b3Igc3RyaW5nLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRmb3IoIGxldCB0b2tlbiBvZiB0aGlzLmJ1ZilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHRva2VuIGluc3RhbmNlb2YgVGFnUnVsZSlcclxuXHRcdFx0XHRzICs9IHRva2VuLnRhZ05hbWU7XHJcblx0XHRcdGVsc2UgaWYgKHRva2VuIGluc3RhbmNlb2YgQ2xhc3NSdWxlKVxyXG5cdFx0XHRcdHMgKz0gdG9rZW4uY29tYmluZWRTZWxlY3Rvck5hbWU7XHJcblx0XHRcdGVsc2UgaWYgKHRva2VuIGluc3RhbmNlb2YgSURSdWxlKVxyXG5cdFx0XHRcdHMgKz0gXCIjXCIgKyB0b2tlbi5pZE5hbWU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRzICs9IHRva2VuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnRlcm5hbCBidWZmZXIsIHdoZXJlIHNlbGVjdG9yIHRva2VucyBhcmUgYWNjdW11bGF0ZWQuXHJcblx0cHJpdmF0ZSBidWY6IChzdHJpbmcgfCBJVGFnUnVsZSB8IElDbGFzc1J1bGUgfCBJSURSdWxlKVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIGVtcHR5IHNlbGVjdG9yIGZyb20gd2hpY2ggc2VsZWN0b3IgYnVpbGRpbmcgcHJvY2VzcyBzdGFydHMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHNlbGVjdG9yKCk6IElFbXB0eVNlbGVjdG9yIHsgcmV0dXJuIG5ldyBTZWxlY3RvcigpOyB9XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIG1vZHVsZSBkZWZpbmVzIHR5cGVzIGFuZCBmdW5jdGlvbnMgdGhhdCBhbGxvdyBidWlsZGluZyBDU1Mgc3R5bGUgc2hlZXRzIHVzaW5nIFR5cGVTY3JpcHQuXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCB7TmFtZXNPZlByb3BzT2ZUeXBlLCBQcm9wc09mVHlwZSwgSVJ1bGUsIElTdHlsZVJ1bGUsIElUYWdSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlLFxyXG5cdFx0SVNlbGVjdG9yUnVsZSwgSUFuaW1hdGlvblJ1bGUsIElDdXN0b21WYXIsIFVubmFtZWRSdWxlfSBmcm9tIFwiLi9ydWxlc1wiO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgZGVmaW5pbmcgaG93IHN0eWxlIHNjb3BlIGRlZmluaXRpb24gY2xhc3NlcyBjYW4gYmUgY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN0eWxlU2NvcGVEZWZpbml0aW9uT3B0aW9ucyA9XHJcbntcclxuXHQvKipcclxuXHQgKiBPcHRpb25hbCBtZXRob2Qgd2l0aGluIHdoaWNoIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gY2xhc3NlcyBjYW4gY3JlYXRlIHJ1bGVzIG5vdCBhc3NpZ25lZFxyXG5cdCAqIHRvIGEgbWVtYmVyIHByb3BlcnR5LiBUaGVzZSBydWxlcyBjYW5ub3QgYmUgdGhvc2UgdGhhdCByZXF1aXJlIG5hbWUsIHN1Y2ggYXMgY2xhc3MsIElELFxyXG5cdCAqIGFuaW1hdGlvbiBvciBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdCAqL1xyXG5cdHVubmFtZWRSdWxlcz86IFVubmFtZWRSdWxlW107XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFwiQ29uc3RydWN0b3JcIiBpbnRlcmZhY2UgZGVmaW5pbmcgaG93IHN0eWxlIHNjb3BlIGRlZmluaXRpb24gY2xhc3NlcyBjYW4gYmUgY3JlYXRlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M8VD5cclxue1xyXG5cdC8qKiBBbGwgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBvYmplY3RzIHNob3VsZCBjb25mb3JtIHRvIHRoaXMgY29uc3RydWN0b3IgKi9cclxuXHRuZXcoIG9wdGlvbnM/OiBTdHlsZVNjb3BlRGVmaW5pdGlvbk9wdGlvbnMpOiBUO1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluaWRpY2F0aW5nIHRoYXQgbXVsdGlwbGUgc3R5bGUgc2NvcGVzIGNhbiBiZSBjcmVhdGVkIGZvciB0aGlzIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gLVxyXG5cdCAqIGVhY2ggdGltZSB3aXRoIHVuaXF1ZSBydWxlIElEcy4gVGhpcyBpcyB1c2VmdWwgZm9yIHN0eWxlcyBjcmVhdGVkIGZvciBhIGNvbnRyb2wgLSBlLmcuIHRyZWVcclxuXHQgKiBvciBhY2NvcmRlb24gLSB3aGljaCBjYW4gYmUgdXNlZCBtdWx0aXBsZSB0aW1lcyBvbiB0aGUgc2FtZSBwYWdlIGJ1dCB3aXRoIGRpZmZlcmVudCBzdHlsZXMuXHJcblx0ICogQnkgZGVmYXVsdCwgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbnMgYXJlIHNpbmd1bGFyLCB0aGF0IGlzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGEgc3R5bGUgc2NvcGVcclxuXHQgKiBvYmplY3QgaXMgY3JlYXRlZCBmb3IgdGhlbSBhbmQgaW5zZXJ0ZWQgaW50byBET00uXHJcblx0ICovXHJcblx0aXNNdWx0aXBsZXg/OiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBTaW5nbGV0b24gaW5zdGFuY2Ugb2YgdGhlIFN0eWxlIFNjb3BlIGNsYXNzIGNyZWF0ZWQgZnJvbSB0aGlzIGRlZmluaXRpb24uIFRoaXMgaXMgdXNlZCBvbmx5XHJcblx0ICogZm9yIHNpbmd1bGFyIHN0eWxlIHNjb3Blcy5cclxuXHQgKi9cclxuXHRzdHlsZVNjb3BlPzogSVN0eWxlU2NvcGU8VD47XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVNjb3BlIHR5cGUgZGVmaW5lcyB0aGUgcmVzdWx0YW50IHN0eWxlIHNjb3BlIGFmdGVyIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGhhcyBiZWVuXHJcbiAqIHByb2Nlc3NlZC4gVGhlIHN0eWxlIHNjb3BlIG9iamVjdCBjb250YWlucyBuYW1lcyBvZiBJRHMsIGNsYXNzZXMgYW5kIGFuaW1hdGlvbnMsIHdoaWNoIGNhbiBiZVxyXG4gKiB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbiBjb2RlLiBUaGUgaW50ZXJmYWNlIGFsc28gcHJvdmlkZXMgbWV0aG9kcyB0aGF0IGFyZSB1c2VkIHRvIG1hbmlwdWxhdGVcclxuICogdGhlIHJ1bGVzIGFuZCB0aGVpciBzdHlsZXNldHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVNjb3BlPFQgPSBhbnk+XHJcbntcclxuXHQvKipcclxuXHQgKiBDbGFzcyB0aGF0IGRlZmluZWQgdGhpcyBzdHlsZSBzY29wZS4gVGhpcyBtZW1iZXIgaXMgdXNlZCBmb3Igc3R5bGUgc2NvcGUgZGVyaXZhdGlvbjpcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICogbGV0IHNjb3BlMSA9ICRzY29wZSggY2xhc3MgLi4uKTtcclxuXHQgKiBsZXQgc2NvcGUyID0gJHNjb3BlKCBjbGFzcyBleHRlbmRzIHNjb3BlMS5EZWZpbml0aW9uIC4uLik7XHJcblx0ICogYGBgXHJcblx0ICovXHJcblx0cmVhZG9ubHkgRGVmaW5pdGlvbjogSVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M8VD47XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBjbGFzc2VzIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNjb3BlICovXHJcblx0cmVhZG9ubHkgY2xhc3NOYW1lczogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUNsYXNzUnVsZT47XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBlbGVtZW50IGlkZW50aWZpZXJzIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNjb3BlICovXHJcblx0cmVhZG9ubHkgaWROYW1lczogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUlEUnVsZT47XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBhbmltYXRpb25zIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNjb3BlICovXHJcblx0cmVhZG9ubHkgYW5pbWF0aW9uTmFtZXM6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElBbmltYXRpb25SdWxlPjtcclxuXHJcblx0LyoqIE5hbWVzIG9mIGN1c3RvbSBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzY29wZSAqL1xyXG5cdHJlYWRvbmx5IHZhck5hbWVzOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ3VzdG9tVmFyPjtcclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgc3R5bGUgKHRhZywgY2xhc3MsIElEIGFuZCBzZWxlY3RvcikgcnVsZXMuICovXHJcblx0cmVhZG9ubHkgc3R5bGVSdWxlczogUHJvcHNPZlR5cGU8VCxJU3R5bGVSdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgdGFnIHJ1bGVzLiAqL1xyXG5cdHJlYWRvbmx5IHRhZ1J1bGVzOiBQcm9wc09mVHlwZTxULElUYWdSdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgY2xhc3MgcnVsZXMuICovXHJcblx0cmVhZG9ubHkgY2xhc3NSdWxlczogUHJvcHNPZlR5cGU8VCxJQ2xhc3NSdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgSUQgcnVsZXMuICovXHJcblx0cmVhZG9ubHkgaWRSdWxlczogUHJvcHNPZlR5cGU8VCxJSURSdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgc2VsZWN0b3IgcnVsZXMuICovXHJcblx0cmVhZG9ubHkgc2VsZWN0b3JSdWxlczogUHJvcHNPZlR5cGU8VCxJU2VsZWN0b3JSdWxlPjtcclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgYW5pbWF0aW9uIHJ1bGVzLiAqL1xyXG5cdHJlYWRvbmx5IGFuaW1hdGlvblJ1bGVzOiBQcm9wc09mVHlwZTxULElBbmltYXRpb25SdWxlPjtcclxuXHJcbiBcdC8qKiBNYXAgb2YgQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWZpbml0aW9ucy4gKi9cclxuXHRyZWFkb25seSB2YXJSdWxlcz86IFByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj47XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIG5hbWVkIHJ1bGVzLiAqL1xyXG5cdHJlYWRvbmx5IG5hbWVkUnVsZXM6IFByb3BzT2ZUeXBlPFQsSVJ1bGU+O1xyXG5cclxuXHQvKiogTGlzdCBvZiBhbGwgdW5uYW1lZCBydWxlcy4gKi9cclxuXHRyZWFkb25seSB1bm5hbWVkUnVsZXM6IElSdWxlW107XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEZ1bmN0aW9ucyB0byBjb25maWd1cmUgVHNzTWFuYWdlciBvcHRpb25zXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge1Rzc01hbmFnZXJ9IGZyb20gXCIuLi9ydWxlcy9Uc3NNYW5hZ2VyXCI7XHJcblxyXG4vKipcclxuICogU2V0cyB0aGUgZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltaXplZCAodW5pcXVlKSBzdHlsZSBuYW1lcy4gSWYgeWVzLCB0aGUgbmFtZXNcclxuICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuICogQHBhcmFtIG9wdGltaXplXHJcbiAqIEBwYXJhbSBwcmVmaXhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VPcHRpbWl6ZWRTdHlsZU5hbWVzKCBvcHRpbWl6ZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG5cdHsgVHNzTWFuYWdlci51c2VPcHRpbWl6ZWRTdHlsZU5hbWVzKCBvcHRpbWl6ZSwgcHJlZml4KTsgfVxyXG5cclxuXHJcblxyXG4iLCIvLyBUeXBlIGRlZmluaXRpb25zIGZvciBtaW1ibFxyXG5cclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL3V0aWxzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy9jb2xvcnNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL3RzaFwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvc3R5bGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TZWxlY3RvclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvcnVsZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL3Njb3BlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9SdWxlRnVuY3Rpb25zXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9TZWxlY3RvclwiO1xyXG4iLCJpbXBvcnQge0lBbmltYXRpb25SdWxlLCBLZXlmcmFtZX0gZnJvbSBcIi4uL2FwaS9ydWxlc1wiXHJcbmltcG9ydCB7dHNofSBmcm9tIFwiLi4vc3R5bGVzL3RzaFwiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVcIjtcclxuaW1wb3J0IHtTdHlsZVNjb3BlfSBmcm9tIFwiLi9TdHlsZVNjb3BlXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUYWdSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSB0YWcgbmFtZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25SdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElBbmltYXRpb25SdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGtleWZyYW1lcz86IEtleWZyYW1lW10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRpZiAoa2V5ZnJhbWVzKVxyXG5cdFx0XHR0aGlzLmtleWZyYW1lUnVsZXMgPSBrZXlmcmFtZXMubWFwKCAoa2V5ZnJhbWUpID0+IG5ldyBLZXlmcmFtZVJ1bGUoIGtleWZyYW1lKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IFN0eWxlU2NvcGUsIHJ1bGVOYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHR0aGlzLmFuaW1hdGlvbk5hbWUgPSB0aGlzLm93bmVyLmdlbmVyYXRlU2NvcGVkTmFtZSggcnVsZU5hbWUpO1xyXG5cclxuXHRcdGZvciggbGV0IGtleWZyYW1lUnVsZSBvZiB0aGlzLmtleWZyYW1lUnVsZXMpXHJcblx0XHRcdGtleWZyYW1lUnVsZS5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBydWxlIHJlcXVpcmVzIG5hbWUgLSB0aGF0IGlzIGl0IHdpbGwgYmUgaWdub3JlZCBpZiBjcmVhdGVkIHdpdGhpblxyXG5cdCAqIHRoZSBjcmVhdGVVbm5hbWVkUnVsZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWVJc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBBbmltYXRpb25SdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQW5pbWF0aW9uUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBBbmltYXRpb25SdWxlKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMua2V5ZnJhbWVSdWxlcyA9IHNyYy5rZXlmcmFtZVJ1bGVzLm1hcCggKGtleWZyYW1lUnVsZSkgPT4ga2V5ZnJhbWVSdWxlLmNsb25lKCkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcyA9IGBAa2V5ZnJhbWVzICR7dGhpcy5hbmltYXRpb25OYW1lfXsgYDtcclxuXHRcdGZvciggbGV0IGtleWZyYW1lUnVsZSBvZiB0aGlzLmtleWZyYW1lUnVsZXMpXHJcblx0XHRcdHMgKz0ga2V5ZnJhbWVSdWxlLnRvQ3NzU3RyaW5nKCk7XHJcblx0XHRyZXR1cm4gcyArIFwifVwiO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogT25seSBuZWVkZWQgdG8gZGlzdGluZ3Vpc2ggZnJvbSBvdGhlciBydWxlcyAqL1xyXG5cdHB1YmxpYyBnZXQgaXNBbmltYXRpb25SdWxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHQvKiogT25seSBuZWVkZWQgdG8gZGlzdGluZ3Vpc2ggZnJvbSBjbGFzcyBhbmQgSUQgcnVsZXMgKi9cclxuXHRwdWJsaWMga2V5ZnJhbWVSdWxlczogS2V5ZnJhbWVSdWxlW107XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGFuaW1hdGlvbiB0byB1c2UgaW4gYW5pbWF0aW9uLW5hbWUgQ1NTIHByb3BlcnR5LlxyXG5cdHB1YmxpYyBhbmltYXRpb25OYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBLZXlmcmFtZVJ1bGUgY2xhc3MgcmVwcmVzZW50cyBhIHNpbmdsZSBrZXlmcmFtZSBjbGF1c2UgaW4gdGhlIGFuaW1hdGlvbiBydWxlLlxyXG4gKi9cclxuY2xhc3MgS2V5ZnJhbWVSdWxlIGV4dGVuZHMgU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIGtleWZyYW1lPzogS2V5ZnJhbWUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIGtleWZyYW1lID8ga2V5ZnJhbWUuc3R5bGUgOiB1bmRlZmluZWQpO1xyXG5cclxuXHRcdGlmIChrZXlmcmFtZSlcclxuXHRcdFx0dGhpcy53YXlwb2ludFN0cmluZyA9IHRoaXMucGFyc2VXYXlwb2ludCgga2V5ZnJhbWUud2F5cG9pbnQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHBhcnNlV2F5cG9pbnQoIHdheXBvaW50OiBcImZyb21cIiB8IFwidG9cIiB8IG51bWJlcik6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICh0eXBlb2Ygd2F5cG9pbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdHJldHVybiB3YXlwb2ludDtcclxuXHRcdGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIoIHdheXBvaW50KSlcclxuXHRcdFx0cmV0dXJuIHdheXBvaW50ICsgXCIlXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiB0c2gucGVyY2VudCggd2F5cG9pbnQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogS2V5ZnJhbWVSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgS2V5ZnJhbWVSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNvcHlGcm9tKCBzcmM6IEtleWZyYW1lUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jb3B5RnJvbSggc3JjKTtcclxuXHRcdHRoaXMud2F5cG9pbnRTdHJpbmcgPSBzcmMud2F5cG9pbnRTdHJpbmc7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdlU2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuICB0aGlzLndheXBvaW50U3RyaW5nO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogSWRlbnRpZmllciBvZiB0aGUgd2F5cG9pbnQgYXMgYSBzdHJpbmcgKi9cclxuXHRwdWJsaWMgd2F5cG9pbnRTdHJpbmc6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lDbGFzc1J1bGUsIEV4dGVuZGVkU3R5bGVzZXR9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCI7XHJcbmltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ2xhc3NSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1J1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJQ2xhc3NSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlc2V0PzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBTdHlsZVNjb3BlLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0dGhpcy5wcm9wZXJOYW1lID0gdGhpcy5vd25lci5nZW5lcmF0ZVNjb3BlZE5hbWUoIHJ1bGVOYW1lKTtcclxuXHRcdHRoaXMuY29tYmluZWROYW1lID0gdGhpcy5wcm9wZXJOYW1lO1xyXG5cdFx0dGhpcy5jb21iaW5lZFNlbGVjdG9yTmFtZSA9IFwiLlwiICsgdGhpcy5wcm9wZXJOYW1lO1xyXG5cclxuXHRcdC8vIGdvIHRocm91Z2ggYWxsIHBhcmVudHM7IGZvciB0aG9zZSB3aG8gYXJlIGNsYXNzZXMsIGFkZCB0aGVpciBuYW1lcyB0byB0aGUgY29tYmluZWQgbmFtZS5cclxuXHRcdC8vIEZvciB0aG9zZSB3aG8gYXJlIG5vdCBjbGFzc2VzLCBjb3B5IHRoZWlyIHN0eWxlIHByb3BlcnRpZXMgdG8gb3VyIG93biBzdHlsZXNldC5cclxuXHRcdGZvciggbGV0IHBhcmVudCBvZiB0aGlzLnBhcmVudHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChwYXJlbnQgaW5zdGFuY2VvZiBDbGFzc1J1bGUgJiYgcGFyZW50LmlzUHJvY2Vzc2VkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5jb21iaW5lZE5hbWUgKz0gXCIgXCIgKyBwYXJlbnQuY29tYmluZWROYW1lO1xyXG5cdFx0XHRcdHRoaXMuY29tYmluZWRTZWxlY3Rvck5hbWUgKz0gcGFyZW50LmNvbWJpbmVkU2VsZWN0b3JOYW1lO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBydWxlIHJlcXVpcmVzIG5hbWUgLSB0aGF0IGlzIGl0IHdpbGwgYmUgaWdub3JlZCBpZiBjcmVhdGVkIHdpdGhpblxyXG5cdCAqIHRoZSBjcmVhdGVVbm5hbWVkUnVsZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWVJc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBDbGFzc1J1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBDbGFzc1J1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdlU2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiLlwiICsgdGhpcy5wcm9wZXJOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogT25seSBuZWVkZWQgdG8gZGlzdGluZ3Vpc2ggZnJvbSBvdGhlciBydWxlcyAqL1xyXG5cdHB1YmxpYyBnZXQgaXNDbGFzc1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIGNsYXNzIHVuZGVyIHdoaWNoIHRoZSBzdHlsZXNldCB3aWxsIGFwcGVhciBpbiB0aGUgc3R5bGUgc2hlZXQuXHJcblx0cHVibGljIHByb3Blck5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZSB0aGF0IGNvbWJpbmVzIHRoZSBwcm9wZXIgbmFtZSBvZiB0aGlzIGNsYXNzIGFuZCB0aGUgcHJvcGVyIG5hbWVzIG9mIGFsbCBjbGFzc2VzIHRoaXNcclxuXHQvLyBjbGFzcyBpbmhlcml0cyBmcm9tLiBUaGlzIG5hbWUgdXNlZCB3aXRoIHRoZSBcImNsYXNzXCIgYXR0cmlidXRlIG9uIHRoZSBlbGVtZW50cy5cclxuXHRwdWJsaWMgY29tYmluZWROYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgdGhhdCBjb21iaW5lcyB0aGUgcHJvcGVyIG5hbWUgb2YgdGhpcyBjbGFzcyBhbmQgdGhlIHByb3BlciBuYW1lcyBvZiBhbGwgY2xhc3NlcyB0aGlzXHJcblx0Ly8gY2xhc3MgaW5oZXJpdHMgZnJvbS4gVGhpcyBuYW1lIGlzIHVzZWQgYXMgYSBzZWxlY3RvciBmb3IgQ1NTIHJ1bGVzLlxyXG5cdHB1YmxpYyBjb21iaW5lZFNlbGVjdG9yTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SUN1c3RvbVZhcn0gZnJvbSBcIi4uL2FwaS9ydWxlc1wiXHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCIuLi9zdHlsZXMvc3R5bGVzXCJcclxuaW1wb3J0IHtzdHlsZVByb3BUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUluZm9cIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHtTdHlsZVNjb3BlfSBmcm9tIFwiLi9TdHlsZVNjb3BlXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDdXN0b21WYXIgY2xhc3MgZGVzY3JpYmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WYXI8VD4gZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUN1c3RvbVZhcjxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVByb3BOYW1lPzoga2V5b2YgU3R5bGVzZXQsIHZhclZhbHVlPzogVClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZVByb3BOYW1lID0gdGVtcGxhdGVQcm9wTmFtZTtcclxuXHRcdHRoaXMudmFyVmFsdWUgPSB2YXJWYWx1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogU3R5bGVTY29wZSwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdHRoaXMudmFyTmFtZSA9IHRoaXMub3duZXIuZ2VuZXJhdGVTY29wZWROYW1lKCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGlzIHJ1bGUgcmVxdWlyZXMgbmFtZSAtIHRoYXQgaXMgaXQgd2lsbCBiZSBpZ25vcmVkIGlmIGNyZWF0ZWQgd2l0aGluXHJcblx0ICogdGhlIGNyZWF0ZVVubmFtZWRSdWxlc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgbmFtZUlzUmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEN1c3RvbVZhcjxUPlxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEN1c3RvbVZhcjxUPigpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBDdXN0b21WYXI8VD4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZW1wbGF0ZVByb3BOYW1lID0gc3JjLnRlbXBsYXRlUHJvcE5hbWU7XHJcblx0XHR0aGlzLnZhclZhbHVlID0gc3JjLnZhclZhbHVlO1xyXG5cdH1cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZy5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGAtLSR7dGhpcy52YXJOYW1lfTogJHtzdHlsZVByb3BUb0Nzc1N0cmluZyggdGhpcy50ZW1wbGF0ZVByb3BOYW1lLCB0aGlzLnZhclZhbHVlLCB0cnVlKX1gO1xyXG5cdH1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBpcyBhIHJlYWwgQ1NTIHJ1bGUgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgdW5kZXIgdGhlIDxzdHlsZT5cclxuXHQvLyBlbGVtZW50LiBGb3IgdGhlIG1ham9yaXR5IG9mIFJ1bGUtZGVyaXZlZCBjbGFzc2VzIHRoaXMgaXMgdHJ1ZTsgaG93ZXZlciwgZm9yIHNvbWUgY2xhc3NlcyxcclxuXHQvLyBlLmcuIGZvciB0aGUgQ3VzdG9tVmFyIGNsYXNzLCB0aGlzIGlzIG5vdCBzby5cclxuXHRwdWJsaWMgZ2V0IGlzUmVhbENzc1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0N1c3RvbVZhcigpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLlxyXG5cdHB1YmxpYyB0ZW1wbGF0ZVByb3BOYW1lOiBrZXlvZiBTdHlsZXNldDtcclxuXHJcblx0Ly8gVmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHVibGljIHZhclZhbHVlOiBUO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHB1YmxpYyB2YXJOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJSURSdWxlLCBFeHRlbmRlZFN0eWxlc2V0fSBmcm9tIFwiLi4vYXBpL3J1bGVzXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiO1xyXG5pbXBvcnQge1N0eWxlU2NvcGV9IGZyb20gXCIuL1N0eWxlU2NvcGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGFuIElELlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElEUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElJRFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGVzZXQ/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZXNldCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IFN0eWxlU2NvcGUsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHR0aGlzLmlkTmFtZSA9IHRoaXMub3duZXIuZ2VuZXJhdGVTY29wZWROYW1lKCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gZ28gdGhyb3VnaCBhbGwgcGFyZW50czsgZm9yIHRob3NlIHdobyBhcmUgY2xhc3NlcywgYWRkIHRoZWlyIG5hbWUgdG8gdGhlXHJcblx0XHQvLyBjb21iaW5lZCBuYW1lLiBGb3IgdGhvc2Ugd2hvIGFyZSBub3QgY2xhc3NlcywgY29weSBzdHlsZSBwcm9wZXJ0aWVzIHRvIHRoZVxyXG5cdFx0Ly8gY2xhc3MncyBvd24gc3R5bGVzZXQuXHJcblx0XHRmb3IoIGxldCBwYXJlbnQgb2YgdGhpcy5wYXJlbnRzKVxyXG5cdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBydWxlIHJlcXVpcmVzIG5hbWUgLSB0aGF0IGlzIGl0IHdpbGwgYmUgaWdub3JlZCBpZiBjcmVhdGVkIHdpdGhpblxyXG5cdCAqIHRoZSBjcmVhdGVVbm5hbWVkUnVsZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWVJc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJRFJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBJRFJ1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdlU2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZE5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0lEUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgZWxlbWVudCBpZGVudGlmaWVyIGZvciBhcHBseWluZyB0aGUgc3R5bGVzZXQuXHJcblx0cHVibGljIGlkTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVJ1bGV9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge1N0eWxlU2NvcGV9IGZyb20gXCIuL1N0eWxlU2NvcGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVXaXRoU3R5bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgaGF2ZSBhIHNpbmdsZSBzdHlsZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGUgaW1wbGVtZW50cyBJUnVsZVxyXG57XHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogU3R5bGVTY29wZSwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLm93bmVyID0gb3duZXI7XHJcblx0XHR0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBydWxlIHJlcXVpcmVzIG5hbWUgLSB0aGF0IGlzIGl0IHdpbGwgYmUgaWdub3JlZCBpZiBjcmVhdGVkIHdpdGhpblxyXG5cdCAqIHRoZSBjcmVhdGVVbm5hbWVkUnVsZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWVJc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGU7XHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY29weUZyb20oIHNyYzogUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcuXHJcblx0cHVibGljIGFic3RyYWN0IHRvQ3NzU3RyaW5nKCk6IHN0cmluZztcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBpcyBhIHJlYWwgQ1NTIHJ1bGUgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgdW5kZXIgdGhlIDxzdHlsZT5cclxuXHQvLyBlbGVtZW50LiBGb3IgdGhlIG1ham9yaXR5IG9mIFJ1bGUtZGVyaXZlZCBjbGFzc2VzIHRoaXMgaXMgdHJ1ZTsgaG93ZXZlciwgZm9yIHNvbWUgY2xhc3NlcyxcclxuXHQvLyBlLmcuIGZvciB0aGUgQ3VzdG9tVmFyIGNsYXNzLCB0aGlzIGlzIG5vdCBzby5cclxuXHRwdWJsaWMgZ2V0IGlzUmVhbENzc1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgdHlwZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gU3R5bGUgc2NvcGUgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuXHJcblx0cHVibGljIG93bmVyOiBTdHlsZVNjb3BlO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiB0byB3aGljaCB0aGlzIHJ1bGUgd2FzIGFzc2lnbmVkLlxyXG5cdHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBocyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkICovXHJcblx0cHVibGljIGdldCBpc1Byb2Nlc3NlZCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5vd25lcjsgfVxyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgcnVsZSBpbiB0aGUgRE9NIHN0eWxlIHNoZWV0LiBUaGUgRE9NIHN0eWxlIHNoZWV0IG9iamVjdCBpcyBoZWxkIGJ5IHRoZVxyXG5cdC8vIG93bmVyIFN0eWxlU2NvcGVcclxuXHRwdWJsaWMgaW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTZWxlY3RvclJ1bGUsIEV4dGVuZGVkU3R5bGVzZXR9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge0lTZWxlY3Rvcn0gZnJvbSBcIi4uL2FwaS9TZWxlY3RvclwiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVcIlxyXG5pbXBvcnQge1NlbGVjdG9yfSBmcm9tIFwiLi4vYXBpL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2VsZWN0b3JSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvclJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJU2VsZWN0b3JSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yPzogSVNlbGVjdG9yIHwgc3RyaW5nLCBzdHlsZXNldD86IEV4dGVuZGVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlc2V0KTtcclxuXHJcblx0XHRpZiAoc2VsZWN0b3IpXHJcblx0XHRcdHRoaXMuc2VsZWN0b3IgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBuZXcgU2VsZWN0b3IoIHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBTdHlsZVNjb3BlLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgcGFyZW50IG9mIHRoaXMucGFyZW50cylcclxuXHRcdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5zdHlsZXNldCwgcGFyZW50LnN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFNlbGVjdG9yUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IFNlbGVjdG9yUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBTZWxlY3RvclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY29weUZyb20oIHNyYyk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc3JjLnNlbGVjdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiAgdGhpcy5zZWxlY3Rvci50b0Nzc1N0cmluZygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogT25seSBuZWVkZWQgdG8gZGlzdGluZ3Vpc2ggZnJvbSBvdGhlciBydWxlcyAqL1xyXG5cdHB1YmxpYyBnZXQgaXNTZWxlY3RvclJ1bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdC8vIHNlbGVjdG9yIG9iamVjdCBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzZWxlY3RvcjogSVNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlUnVsZSwgRXh0ZW5kZWRTdHlsZXNldH0gZnJvbSBcIi4uL2FwaS9ydWxlc1wiO1xyXG5pbXBvcnQge1N0eWxlc2V0fSBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlc1wiXHJcbmltcG9ydCB7c3R5bGVzZXRUb0Nzc1N0cmluZ30gZnJvbSBcIi4uL3N0eWxlcy9TdHlsZUluZm9cIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVJ1bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgaGF2ZSBhIHNpbmdsZSBzdHlsZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0eWxlUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJU3R5bGVSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHN0eWxlc2V0PzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuc3R5bGVzZXQgPSB7fTtcclxuXHRcdHRoaXMucGFyZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5pbXBvcnRhbnQgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHJcblx0XHRpZiAoc3R5bGVzZXQpXHJcblx0XHRcdHRoaXMucGFyc2VFeHRlbmRlZFN0eWxlc2V0KCBzdHlsZXNldCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBhcnNlRXh0ZW5kZWRTdHlsZXNldCggc3R5bGVzZXQ6IEV4dGVuZGVkU3R5bGVzZXQpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHN0eWxlc2V0IGluc3RhbmNlb2YgU3R5bGVSdWxlKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBzdHlsZXNldCBpcyBhIHNpbmdsZSBJU3R5bGVSdWxlIG9iamVjdCwgd2hpY2ggd2UgYWRkIGFzIG91ciBwYXJlbnRcclxuXHRcdFx0dGhpcy5wYXJlbnRzLnB1c2goIHN0eWxlc2V0KTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGVzZXQpKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBzdHlsZXNldCBpcyBhbiBhcnJheSBvZiBJU3R5bGVSdWxlIG9iamVjdHMsIHdoaWNoIHdlIGFkZCBhcyBvdXIgcGFyZW50c1xyXG5cdFx0XHRmb3IoIGxldCBydWxlIG9mIHN0eWxlc2V0KVxyXG5cdFx0XHRcdHRoaXMucGFyZW50cy5wdXNoKCBydWxlIGFzIFN0eWxlUnVsZSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHN0eWxlc2V0IGlzIGEgc2V0IG9mIHN0eWxlIHByb3BlcnRpZXMgYnV0IGNhbiBhbHNvIGluY2x1ZGUgdGhlICRleHRlbmRzIGFuZFxyXG5cdFx0XHQvLyAkaW1wb3J0YW50IHByb3BlcnRpZXNcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gc3R5bGVzZXQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbCA9IHN0eWxlc2V0W3Byb3BOYW1lXTtcclxuXHRcdFx0XHRpZiAocHJvcE5hbWUgPT09IFwiJGV4dGVuZHNcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRsZXQgaW5oZXJpdHNQcm9wVmFsID0gcHJvcFZhbCBhcyAoSVN0eWxlUnVsZSB8IElTdHlsZVJ1bGVbXSk7XHJcblx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShpbmhlcml0c1Byb3BWYWwpKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzIGlzIGlzIGFuIGFycmF5IG9mIElTdHlsZVJ1bGUgb2JqZWN0cywgd2hpY2ggd2UgYWRkIGFzIG91ciBwYXJlbnRzXHJcblx0XHRcdFx0XHRcdGZvciggbGV0IHJ1bGUgb2YgaW5oZXJpdHNQcm9wVmFsKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMucGFyZW50cy5wdXNoKCBydWxlIGFzIFN0eWxlUnVsZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMgaXMgYSBzaW5nbGUgSVN0eWxlUnVsZSBvYmplY3QsIHdoaWNoIHdlIGFkZCBhcyBvdXIgcGFyZW50XHJcblx0XHRcdFx0XHRcdHRoaXMucGFyZW50cy5wdXNoKCBpbmhlcml0c1Byb3BWYWwgYXMgU3R5bGVSdWxlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwiJGltcG9ydGFudFwiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbXBvcnRhbnRQcm9wVmFsID0gcHJvcFZhbCBhcyAoc3RyaW5nIHwgc3RyaW5nW10pO1xyXG5cdFx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaW1wb3J0YW50UHJvcFZhbCkpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMgaXMgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xyXG5cdFx0XHRcdFx0XHRmb3IoIGxldCBpbXBvcnRhbnQgb2YgaW1wb3J0YW50UHJvcFZhbClcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmltcG9ydGFudC5hZGQoIGltcG9ydGFudCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMgaXMgYSBzaW5nbGUgc3RyaW5nXHJcblx0XHRcdFx0XHRcdHRoaXMuaW1wb3J0YW50LmFkZCggaW1wb3J0YW50UHJvcFZhbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBjb3B5IHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byBvdXIgaW50ZXJuYWwgc3R5bGVzZXRcclxuXHRcdFx0XHRcdHRoaXMuc3R5bGVzZXRbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBTdHlsZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHNyYy5zdHlsZXNldDtcclxuXHRcdHRoaXMucGFyZW50cyA9IHNyYy5wYXJlbnRzO1xyXG5cdFx0dGhpcy5pbXBvcnRhbnQgPSBzcmMuaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gYCR7dGhpcy5nZVNlbGVjdG9yU3RyaW5nKCl9ICR7c3R5bGVzZXRUb0Nzc1N0cmluZyggdGhpcy5zdHlsZXNldCwgdGhpcy5pbXBvcnRhbnQpfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGFic3RyYWN0IGdlU2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nO1xyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc1N0eWxlUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gU3R5bGUgcnVsZSBkZWZpbmluZyBzdHlsZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBzdHlsZXNldDogU3R5bGVzZXQ7XHJcblxyXG5cdC8vIFN0eWxlIHJ1bGUgZGVmaW5pbmcgc3R5bGUgcHJvcGVydGllcy5cclxuXHRwdWJsaWMgcGFyZW50czogU3R5bGVSdWxlW107XHJcblxyXG5cdC8vIFNldCBvZiBwcm9wZXJ0eSBuYW1lcyBmcm9tIHRoaXMgc3R5bGVzZXQgdGhhdCBzaG91bGQgYmUgIWltcG9ydGFudC5cclxuXHRpbXBvcnRhbnQ6IFNldDxzdHJpbmc+O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7TmFtZXNPZlByb3BzT2ZUeXBlLCBQcm9wc09mVHlwZSwgSVJ1bGUsIElTdHlsZVJ1bGUsIElUYWdSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlLFxyXG5cdFx0SVNlbGVjdG9yUnVsZSwgSUFuaW1hdGlvblJ1bGUsIElDdXN0b21WYXIsIFVubmFtZWRSdWxlfVxyXG5cdFx0ZnJvbSBcIi4uL2FwaS9ydWxlc1wiXHJcbmltcG9ydCB7U3R5bGVTY29wZURlZmluaXRpb25PcHRpb25zLCBJU3R5bGVTY29wZURlZmluaXRpb25DbGFzcywgSVN0eWxlU2NvcGV9IGZyb20gXCIuLi9hcGkvc2NvcGVcIlxyXG5cclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCJcclxuaW1wb3J0IHtUYWdSdWxlfSBmcm9tIFwiLi9UYWdSdWxlXCJcclxuaW1wb3J0IHtDbGFzc1J1bGV9IGZyb20gXCIuL0NsYXNzUnVsZVwiXHJcbmltcG9ydCB7SURSdWxlfSBmcm9tIFwiLi9JRFJ1bGVcIlxyXG5pbXBvcnQge1NlbGVjdG9yUnVsZX0gZnJvbSBcIi4vU2VsZWN0b3JSdWxlXCJcclxuaW1wb3J0IHtBbmltYXRpb25SdWxlfSBmcm9tIFwiLi9BbmltYXRpb25SdWxlXCJcclxuaW1wb3J0IHtDdXN0b21WYXJ9IGZyb20gXCIuL0N1c3RvbVZhclwiXHJcbmltcG9ydCB7R3JvdXBSdWxlfSBmcm9tIFwiLi9Hcm91cFJ1bGVcIlxyXG5pbXBvcnQge1Rzc01hbmFnZXJ9IGZyb20gXCIuL1Rzc01hbmFnZXJcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlU2hlZXQgY2xhc3MgcmVwcmVzZW50cyBhIHBhcnNlZCBmb3JtIG9mIGEgU3R5bGVTaGVldERlZmluaXRpb24tZGVyaXZlZCBjbGFzcy4gVGhpc1xyXG4gKiBjbGFzcyBkb2Vzbid0IGhhdmUgYSB0ZW1wbGF0ZSBwYXJhbWV0ZXIsIGJ1dCBpdCBjb25mb3JtcyB0byB0aGUgSVN0eWxlU2hlZXQ8VD4gaW50ZXJmYWNlLFxyXG4gKiB3aGljaCBwcm92aWRlcyBuYW1lcyBvZiBjbGFzc2VzLCBJRHMgYW5kIGtleWZyYW1lcyBkZWZpbmVkIGluIHRoZSBjbGFzcyBULCB3aGljaCBtdXN0IGJlXHJcbiAqIGRlcml2ZWQgZnJvbSB0aGUgU3R5bGVTaGVldERlZmluaXRpb24gY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3R5bGVTY29wZTxUID0gYW55PiBpbXBsZW1lbnRzIElTdHlsZVNjb3BlPFQ+XHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNzRGVmQ2xhc3M6IElTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuRGVmaW5pdGlvbiA9IHNzRGVmQ2xhc3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBOYW1lcyBvZiBjbGFzc2VzIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNoZWV0ICovXHJcblx0cHVibGljIGdldCBjbGFzc05hbWVzKCk6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElDbGFzc1J1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5fY2xhc3NOYW1lcyBhcyBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ2xhc3NSdWxlPiB9XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBjbGFzc2VzIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNoZWV0ICovXHJcblx0cHVibGljIGdldCBpZE5hbWVzKCk6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElJRFJ1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5faWROYW1lcyBhcyBOYW1lc09mUHJvcHNPZlR5cGU8VCxJSURSdWxlPjsgfVxyXG5cclxuXHQvKiogTmFtZXMgb2Yga2V5ZnJhbWVzIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNoZWV0ICovXHJcblx0cHVibGljIGdldCBhbmltYXRpb25OYW1lcygpOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl9hbmltYXRpb25OYW1lcyBhcyBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT47IH1cclxuXHJcblx0LyoqIE5hbWVzIG9mIGN1c3RvbSBDU1MgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzY29wZSAqL1xyXG5cdHB1YmxpYyBnZXQgdmFyTmFtZXMoKTogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl92YXJOYW1lcyBhcyBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ3VzdG9tVmFyPjsgfVxyXG5cclxuXHQvKiogTWFwIG9mIGFsbCBzdHlsZSAodGFnLCBjbGFzcywgSUQgYW5kIHNlbGVjdG9yKSBydWxlcy4gKi9cclxuXHRwdWJsaWMgZ2V0IHN0eWxlUnVsZXMoKTogUHJvcHNPZlR5cGU8VCxJU3R5bGVSdWxlPiB7IHRoaXMuYWN0aXZhdGUoKTsgcmV0dXJuIHRoaXMuX3N0eWxlUnVsZXMgYXMgUHJvcHNPZlR5cGU8VCxJU3R5bGVSdWxlPjsgfVxyXG5cclxuXHQvKiogTWFwIG9mIGFsbCB0YWcgcnVsZXMuICovXHJcblx0cHVibGljIGdldCB0YWdSdWxlcygpOiBQcm9wc09mVHlwZTxULElUYWdSdWxlPiB7IHRoaXMuYWN0aXZhdGUoKTsgcmV0dXJuIHRoaXMuX3RhZ1J1bGVzIGFzIFByb3BzT2ZUeXBlPFQsSVRhZ1J1bGU+OyB9XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIGNsYXNzIHJ1bGVzLiAqL1xyXG5cdHB1YmxpYyBnZXQgY2xhc3NSdWxlcygpOiBQcm9wc09mVHlwZTxULElDbGFzc1J1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5fY2xhc3NSdWxlcyBhcyBQcm9wc09mVHlwZTxULElDbGFzc1J1bGU+OyB9XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIElEIHJ1bGVzLiAqL1xyXG5cdHB1YmxpYyBnZXQgaWRSdWxlcygpOiBQcm9wc09mVHlwZTxULElJRFJ1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5faWRSdWxlcyBhcyBQcm9wc09mVHlwZTxULElJRFJ1bGU+OyB9XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIHNlbGVjdG9yIHJ1bGVzLiAqL1xyXG5cdHB1YmxpYyBnZXQgc2VsZWN0b3JSdWxlcygpOiBQcm9wc09mVHlwZTxULElTZWxlY3RvclJ1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5fc2VsZWN0b3JSdWxlcyBhcyBQcm9wc09mVHlwZTxULElTZWxlY3RvclJ1bGU+OyB9XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIGFuaW1hdGlvbiBydWxlcy4gKi9cclxuXHRwdWJsaWMgZ2V0IGFuaW1hdGlvblJ1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSUFuaW1hdGlvblJ1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5fYW5pbWF0aW9uUnVsZXMgYXMgUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT47IH1cclxuXHJcbiBcdC8qKiBUaGUgXCI6cm9vdFwiIGJsb2NrIHdpdGggQ1NTIGN1c3RvbSBwcm9wZXJ0eSBkZWZpbml0aW9ucy4gKi9cclxuXHRwdWJsaWMgZ2V0IHZhclJ1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl92YXJSdWxlcyBhcyBQcm9wc09mVHlwZTxULElDdXN0b21WYXI+OyB9XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIHJ1bGVzLiAqL1xyXG5cdHB1YmxpYyBnZXQgbmFtZWRSdWxlcygpOiBQcm9wc09mVHlwZTxULElSdWxlPiB7IHRoaXMuYWN0aXZhdGUoKTsgcmV0dXJuIHRoaXMuX25hbWVkUnVsZXMgYXMgUHJvcHNPZlR5cGU8VCxJUnVsZT47IH1cclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgcnVsZXMuICovXHJcblx0cHVibGljIGdldCB1bm5hbWVkUnVsZXMoKTogSVJ1bGVbXSB7IHRoaXMuYWN0aXZhdGUoKTsgcmV0dXJuIHRoaXMuX3VubmFtZWRSdWxlczsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgdGhlIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gaW5zdGFuY2UsIHBhcnNlcyBpdHMgcHJvcGVydGllcyBhbmQgY3JlYXRlcyBuYW1lcyBmb3JcclxuXHQvLyBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzKCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBjaGVjayBpZiB0aGUgc2NvcGUgZGVmaW5pdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZFxyXG5cdFx0aWYgKHRoaXMuaXNQcm9jZXNzZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLl9jbGFzc05hbWVzID0ge307XHJcblx0XHR0aGlzLl9pZE5hbWVzID0ge307XHJcblx0XHR0aGlzLl9hbmltYXRpb25OYW1lcyA9IHt9O1xyXG5cdFx0dGhpcy5fdmFyTmFtZXMgPSB7fTtcclxuXHRcdHRoaXMuX25hbWVkUnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX3N0eWxlUnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX3RhZ1J1bGVzID0ge307XHJcblx0XHR0aGlzLl9jbGFzc1J1bGVzID0ge307XHJcblx0XHR0aGlzLl9pZFJ1bGVzID0ge307XHJcblx0XHR0aGlzLl9zZWxlY3RvclJ1bGVzID0ge307XHJcblx0XHR0aGlzLl9hbmltYXRpb25SdWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5fdmFyUnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX25hbWVkUnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX3VubmFtZWRSdWxlcyA9IFtdXHJcblxyXG5cdFx0dGhpcy5pc011bHRpcGxleCA9ICEhdGhpcy5EZWZpbml0aW9uLmlzTXVsdGlwbGV4O1xyXG5cclxuXHRcdC8vIGluIERFQlVHLCBlYWNoIGNsYXNzIGhhcyBhIG5hbWUgdW5sZXNzIGl0IHdhcyBjcmVhdGVkIGFzIGFuIGFub255bW91cyBjbGFzcy4gSW4gUkVMRUFTRSxcclxuXHRcdC8vIChhcyB3ZWxsIGFzIGluIHRoZSBhbm9ueW1vdXMgY2FzZXMpLCB0aGUgbmFtZSBpcyB1bmRlZmluZWQgYW5kIHdlIGdlbmVyYXRlIGEgdW5pcXVlXHJcblx0XHQvLyBuYW1lIGZvciB0aGUgc3R5bGUgc2NvcGUuXHJcblx0XHR0aGlzLm5hbWUgPSB0aGlzLkRlZmluaXRpb24ubmFtZTtcclxuXHRcdGlmICghdGhpcy5uYW1lKVxyXG5cdFx0XHR0aGlzLm5hbWUgPSBUc3NNYW5hZ2VyLmdlbmVyYXRlVW5pcXVlTmFtZSggXCJzXCIpO1xyXG5cclxuXHRcdC8vIGluc2VydCBvdXIgaW50ZXJuYWwgcnVsZSBmb3IgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGludG8gdGhlIGxpc3Qgb2YgdW5uYW1lZCBydWxlcy5cclxuXHRcdHRoaXMuX3VubmFtZWRSdWxlcy5wdXNoKCBuZXcgQ3VzdG9tVmFyUnVsZSh0aGlzKSk7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGNsYXNzIGFuZCB0aGVuIGdvIG92ZXIgaXRzIHByb3BlcnRpZXMsXHJcblx0XHQvLyB3aGljaCBkZWZpbmUgQ1NTIHJ1bGVzLlxyXG5cdFx0bGV0IHNzRGVmOiBUO1xyXG5cdFx0bGV0IG9wdGlvbnM6IFN0eWxlU2NvcGVEZWZpbml0aW9uT3B0aW9ucyA9IHt9O1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdC8vIGNyZWF0ZSBpbnN0YW5jZSBvZiB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBjbGFzcyBhbmQgdGhlbiBnbyBvdmVyIGl0cyBwcm9wZXJ0aWVzLFxyXG5cdFx0XHQvLyB3aGljaCBkZWZpbmUgQ1NTIHJ1bGVzLlxyXG5cdFx0XHRzc0RlZiA9IG5ldyB0aGlzLkRlZmluaXRpb24oIG9wdGlvbnMpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEVycm9yIGluc3RhbnRpYXRpbmcgU3R5bGUgU2NvcGUgRGVmaW5pdGlvbiBvZiB0eXBlICcke3RoaXMuRGVmaW5pdGlvbi5uYW1lfSdgKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucHJvY2Vzc05hbWVkUnVsZXMoIHNzRGVmKTtcclxuXHJcblx0XHQvLyBpZiB0aGUgZGVmaW5pdGlvbiBjbGFzcyBpbXBsZW1lbnRzIHVubmFtZWRSdWxlcyBwcm9jZXNzIHRoZW0gbm93XHJcblx0XHRpZiAob3B0aW9ucy51bm5hbWVkUnVsZXMpXHJcblx0XHRcdHRoaXMucHJvY2Vzc1VubmFtZWRSdWxlcyggb3B0aW9ucy51bm5hbWVkUnVsZXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGluc3RhbmNlLCBwYXJzZXMgaXRzIHByb3BlcnRpZXMgYW5kIGNyZWF0ZXMgbmFtZXMgZm9yXHJcblx0Ly8gY2xhc3NlcywgSURzLCBhbmltYXRpb25zLlxyXG5cdHByaXZhdGUgcHJvY2Vzc05hbWVkUnVsZXMoIHNzRGVmOiBUKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGxvb3Agb3ZlciB0aGUgcHJvcGVydGllcyBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgYW5kIHByb2Nlc3MgdGhvc2UgdGhhdCBhcmUgcnVsZXMuXHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzc0RlZilcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb3BWYWwgPSBzc0RlZltwcm9wTmFtZV07XHJcblx0XHRcdGlmICghKHByb3BWYWwgaW5zdGFuY2VvZiBSdWxlKSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBydWxlTmFtZSA9IHByb3BOYW1lO1xyXG5cdFx0XHRsZXQgcnVsZSA9IHByb3BWYWwgYXMgUnVsZTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGUgc2NvcGUsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHNjb3BlLlxyXG5cdFx0XHRpZiAocnVsZS5vd25lcilcclxuXHRcdFx0XHRydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0cnVsZS5wcm9jZXNzKCB0aGlzLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0XHRpZiAocnVsZS5pc1JlYWxDc3NSdWxlKVxyXG5cdFx0XHRcdHRoaXMuX25hbWVkUnVsZXNbcnVsZU5hbWVdID0gcnVsZTtcclxuXHJcblx0XHRcdGlmIChydWxlIGluc3RhbmNlb2YgVGFnUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX3N0eWxlUnVsZXNbcnVsZU5hbWVdID0gcnVsZTtcclxuXHRcdFx0XHR0aGlzLl90YWdSdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDbGFzc1J1bGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9zdHlsZVJ1bGVzW3J1bGVOYW1lXSA9IHJ1bGU7XHJcblx0XHRcdFx0dGhpcy5fY2xhc3NSdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHRcdHRoaXMuX2NsYXNzTmFtZXNbcnVsZU5hbWVdID0gcnVsZS5jb21iaW5lZE5hbWU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIElEUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX3N0eWxlUnVsZXNbcnVsZU5hbWVdID0gcnVsZTtcclxuXHRcdFx0XHR0aGlzLl9pZFJ1bGVzW3J1bGVOYW1lXSA9IHJ1bGU7XHJcblx0XHRcdFx0dGhpcy5faWROYW1lc1tydWxlTmFtZV0gPSBydWxlLmlkTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgU2VsZWN0b3JSdWxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fc3R5bGVSdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHRcdHRoaXMuX3NlbGVjdG9yUnVsZXNbcnVsZU5hbWVdID0gcnVsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgQW5pbWF0aW9uUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvbk5hbWVzW3J1bGVOYW1lXSA9IHJ1bGUuYW5pbWF0aW9uTmFtZTtcclxuXHRcdFx0XHR0aGlzLl9hbmltYXRpb25SdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBDdXN0b21WYXIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl92YXJOYW1lc1tydWxlTmFtZV0gPSBydWxlLnZhck5hbWU7XHJcblx0XHRcdFx0dGhpcy5fdmFyUnVsZXNbcnVsZU5hbWVdID0gcnVsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGluc3RhbmNlLCBwYXJzZXMgaXRzIHByb3BlcnRpZXMgYW5kIGNyZWF0ZXMgbmFtZXMgZm9yXHJcblx0Ly8gY2xhc3NlcywgSURzLCBhbmltYXRpb25zLlxyXG5cdHByaXZhdGUgcHJvY2Vzc1VubmFtZWRSdWxlcyggdW5uYW1lZFJ1bGVzOiBVbm5hbWVkUnVsZVtdKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdW5uYW1lZFJ1bGVzKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRlbHNlIGlmICghQXJyYXkuaXNBcnJheSh1bm5hbWVkUnVsZXMpKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgY3JlYXRlVW5uYW1lZFJ1bGVzIG1ldGhvZCBvZiBTdHlsZSBTY29wZSBEZWZpbml0aW9uIG9mIHR5cGUgJyR7dGhpcy5EZWZpbml0aW9uLm5hbWV9JyBtdXN0IHJldHVybiBhcnJheWApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aG9zZSB0aGF0IGFyZSBydWxlcy5cclxuXHRcdGZvciggbGV0IHVubmFtZWRSdWxlIG9mIHVubmFtZWRSdWxlcylcclxuXHRcdHtcclxuXHRcdFx0aWYgKCEodW5uYW1lZFJ1bGUgaW5zdGFuY2VvZiBSdWxlKSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGxldCBydWxlID0gdW5uYW1lZFJ1bGUgYXMgUnVsZTtcclxuXHRcdFx0aWYgKHJ1bGUubmFtZUlzUmVxdWlyZWQpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHQvLyBpZiB0aGUgcnVsZSBvYmplY3QgaXMgYWxyZWFkeSBhc3NpZ25lZCB0byBhIHN0eWxlIHNjb3BlLCB3ZSBjcmVhdGUgYSBjbG9uZSBvZiB0aGVcclxuXHRcdFx0Ly8gcnVsZSBhbmQgYXNzaWduIGl0IHRvIG91ciBzY29wZS5cclxuXHRcdFx0aWYgKHJ1bGUub3duZXIpXHJcblx0XHRcdFx0cnVsZSA9IHJ1bGUuY2xvbmUoKTtcclxuXHJcblx0XHRcdHJ1bGUucHJvY2VzcyggdGhpcywgbnVsbCk7XHJcblxyXG5cdFx0XHR0aGlzLl91bm5hbWVkUnVsZXMucHVzaCggcnVsZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBhIG5hbWUsIHdoaWNoIHdpbGwgYmUgdW5pcXVlIGluIHRoaXMgc3R5bGUgc2NvcGVcclxuXHRwdWJsaWMgZ2VuZXJhdGVTY29wZWROYW1lKCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNNdWx0aXBsZXgpXHJcblx0XHRcdHJldHVybiBUc3NNYW5hZ2VyLmdlbmVyYXRlVW5pcXVlTmFtZSgpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gVHNzTWFuYWdlci5nZW5lcmF0ZU5hbWUoIHRoaXMubmFtZSwgcnVsZU5hbWUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbnNlcnRzIHRoaXMgc3R5bGUgc2hlZXQgaW50byBET01cclxuXHRwdWJsaWMgYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmlzQWN0aXZhdGVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5wcm9jZXNzKCk7XHJcblx0XHRUc3NNYW5hZ2VyLmFjdGl2YXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGlzIHN0eWxlIHNjb3BlIGZyb20gRE9NIC0gb25seSB3b3JrcyBmb3IgbXVsdGlwbGV4IHN0eWxlIHNjb3Blc1xyXG5cdHB1YmxpYyBkZWFjdGl2YXRlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuaXNBY3RpdmF0ZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRUc3NNYW5hZ2VyLmRlYWN0aXZhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwdWJsaWMgc2V0RE9NSW5mbyggc3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQsIGRvbVNTOiBDU1NTdHlsZVNoZWV0KVxyXG5cdHtcclxuXHRcdHRoaXMuc3R5bGVFbG0gPSBzdHlsZUVsbTtcclxuXHRcdHRoaXMuc3R5bGVTaGVldCA9IGRvbVNTO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsZWFyRE9NSW5mbygpXHJcblx0e1xyXG5cdFx0dGhpcy5zdHlsZUVsbSA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuc3R5bGVTaGVldCA9IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBDU1Mgc3RyaW5nIHJlcHJlc2VudGF0aW4gb2YgdGhlIDpyb290IHJ1bGUgd2l0aCBjdXN0b20gQ1NTIHByb3BlcnRpZXMuIFRoaXMgaXNcclxuXHQvLyBpbnZva2VkIGJ5IHRoZSBcImZha2VcIiBDdXN0b21WYXJSdWxlLlxyXG5cdHB1YmxpYyBjdXN0b21WYXJzVG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBcIjpyb290IHtcIjtcclxuXHRcdGZvciggbGV0IHZhck5hbWUgaW4gdGhpcy5fdmFyUnVsZXMpXHJcblx0XHRcdHMgKz0gdGhpcy5fdmFyUnVsZXNbdmFyTmFtZV0udG9Dc3NTdHJpbmcoKSArIFwiO1wiO1xyXG5cclxuXHRcdHJldHVybiBzICsgXCJ9XCI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEhlbHBlciBwcm9wZXJ0aWVzXHJcblx0cHJpdmF0ZSBnZXQgaXNQcm9jZXNzZWQoKTogYm9vbGVhbiB7IHJldHVybiAhIXRoaXMuX2NsYXNzTmFtZXM7IH1cclxuXHRwcml2YXRlIGdldCBpc0FjdGl2YXRlZCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5zdHlsZVNoZWV0OyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xhc3MgdGhhdCBkZWZpbmVkIHRoaXMgc3R5bGUgc2NvcGUuIFRoaXMgbWVtYmVyIGlzIHVzZWQgZm9yIHN0eWxlIHNjb3BlIGRlcml2YXRpb25cclxuXHRwdWJsaWMgcmVhZG9ubHkgRGVmaW5pdGlvbjogSVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M8VD47XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHN0eWxlIHNoZWV0IC0gdXNlZCB0byBjcmVhdGUgc2NvcGVkIG5hbWVzIG9mIHN0eWxlIHJ1bGVzXHJcblx0cHVibGljIG5hbWU6IHN0cmluZztcclxuXHJcblx0Ly8gTmFtZXMgb2YgY2xhc3NlcywgSURzLCBhbmltYXRpb25zIGFuZCBjdXN0b20gcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzaGVldC4gVGhlXHJcblx0Ly8ga2V5cyBhcmUgcHJvcGVydHkgbmFtZXMgdXNlZCBpbiB0aGUgc3R5bGUgc2hlZXQgZGVmaW5pdGlvbjsgdGhlIHZhbHVlcyBhcmUgdGhlIGFjdHVhbCBuYW1lc1xyXG5cdC8vIHRoYXQgd2lsbCBiZSBpbnNlcnRlZCBpbnRvIHRoZSBhY3R1YWwgc3R5bGUgc2hlZXQuXHJcblx0cHJpdmF0ZSBfY2xhc3NOYW1lczogeyBbSzogc3RyaW5nXTogc3RyaW5nIH1cclxuXHRwcml2YXRlIF9pZE5hbWVzOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfVxyXG5cdHByaXZhdGUgX2FuaW1hdGlvbk5hbWVzOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfVxyXG5cdHByaXZhdGUgX3Zhck5hbWVzOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfVxyXG5cclxuXHQvLyBNYXAgb2YgbmFtZXMgb2YgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgZGVmaW5pdGlvbiB0byB0aGUgUnVsZSBvYmplY3RzLiBUaGlzIGlzIHVzZWQgd2hlblxyXG5cdC8vIGNyZWF0aW5nIGFuIGFjdHVhbCBzdHlsZSBzaGVldC5cclxuXHRwcml2YXRlIF9zdHlsZVJ1bGVzOiB7IFtLOiBzdHJpbmddOiBSdWxlIH1cclxuXHRwcml2YXRlIF90YWdSdWxlczogeyBbSzogc3RyaW5nXTogUnVsZSB9XHJcblx0cHJpdmF0ZSBfY2xhc3NSdWxlczogeyBbSzogc3RyaW5nXTogUnVsZSB9XHJcblx0cHJpdmF0ZSBfaWRSdWxlczogeyBbSzogc3RyaW5nXTogUnVsZSB9XHJcblx0cHJpdmF0ZSBfc2VsZWN0b3JSdWxlczogeyBbSzogc3RyaW5nXTogUnVsZSB9XHJcblx0cHJpdmF0ZSBfYW5pbWF0aW9uUnVsZXM6IHsgW0s6IHN0cmluZ106IFJ1bGUgfVxyXG5cdHByaXZhdGUgX3ZhclJ1bGVzOnsgW0s6IHN0cmluZ106IEN1c3RvbVZhcjxhbnk+IH07XHJcblxyXG5cdC8vIE1hcCBvZiBhbGwgbmFtZWQgcnVsZXNcclxuXHRwdWJsaWMgX25hbWVkUnVsZXM6IHsgW0s6IHN0cmluZ106IFJ1bGUgfVxyXG5cclxuXHQvLyBMaXN0IG9mIHJ1bGVzIHdpdGhvdXQgbmFtZXMuIFRoaXMgcnVsZXMgYXJlIGluc2VydGVkIGludG8gRE9NIGJ1dCBjYW5ub3QgYmUgYWNjZXNzZWRcclxuXHQvLyBhbmQgbWFuaXB1bGF0ZWQgcHJvZ3JhbW1hdGljYWxseVxyXG5cdHB1YmxpYyBfdW5uYW1lZFJ1bGVzOiBSdWxlW107XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgc3R5bGUgc2NvcGUgb2JqZWN0IG93bnMgdGhlIDxzdHlsZT4gZWxlbWVudC4gVGhpcyBpcyB0cnVlIG9ubHlcclxuXHQvLyBmb3IgbXVsdGlwbGV4IHN0eWxlcyBzY29wZXMgLSB0aG9zZSB0aGF0IGNhbiBiZSBjcmVhZWQgbXVsdGlwbGUgdGltZXMuXHJcblx0cHVibGljIGlzTXVsdGlwbGV4OiBib29sZWFuO1xyXG5cclxuXHQvLyBTdHlsZSBlbGVtZW50IERPTSBvYmplY3QuXHJcblx0cHJpdmF0ZSBzdHlsZUVsbT86IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIFdoZW4gYWN0aXZhdGVkLCBwb2ludHMgdG8gdGhlIERPTSBzdHlsZSBzaGVldCBvYmplY3QgaW5zZXJ0ZWQgaW50byB0aGUgPGhlYWQ+IGVsZW1lbnRcclxuXHRwcml2YXRlIHN0eWxlU2hlZXQ/OiBDU1NTdHlsZVNoZWV0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ3VzdG9tVmFyUnVsZSBjbGFzcyByZXByZXNlbnRzIGEgOnJvb3QgcnVsZSB0aGF0IGlzIHVzZWQgZm9yIGRlZmluaW5nIGN1c3RvbSBDU1MgcHJvcGVydGllcy5cclxuICovXHJcbmNsYXNzIEN1c3RvbVZhclJ1bGUgZXh0ZW5kcyBSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3Rvciggb3duZXI6IFN0eWxlU2NvcGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMub3duZXIgPSBvd25lcjtcclxuXHRcdHRoaXMucnVsZU5hbWUgPSBcIjpyb290XCI7XHJcblx0fVxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogUnVsZSB7IHJldHVybiBudWxsOyB9XHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY29weUZyb20oIHNyYzogUnVsZSk6IHZvaWQge31cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZy5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3duZXIuY3VzdG9tVmFyc1RvQ3NzU3RyaW5nKCk7IH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lUYWdSdWxlLCBFeHRlbmRlZFN0eWxlc2V0fSBmcm9tIFwiLi4vYXBpL3J1bGVzXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiO1xyXG5pbXBvcnQge1N0eWxlU2NvcGV9IGZyb20gXCIuL1N0eWxlU2NvcGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFRhZ1J1bGUgdHlwZSBkZXNjcmliZXMgYSBzdHlsZXNldCB0aGF0IGFwcGxpZXMgdG8gZWxlbWVudHMgaWRlbnRpZmllZCBieSBhIHRhZyBuYW1lLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFRhZ1J1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJVGFnUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0YWdOYW1lPzogc3RyaW5nLCBzdHlsZXNldD86IEV4dGVuZGVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlc2V0KTtcclxuXHRcdHRoaXMudGFnTmFtZSA9IHRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IFN0eWxlU2NvcGUsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHQvLyBnbyB0aHJvdWdoIGFsbCBwYXJlbnRzIGFuZCBjb3B5IHN0eWxlIHByb3BlcnRpZXMgdG8gdGhlIGNsYXNzJ3Mgb3duIHN0eWxlc2V0LlxyXG5cdFx0Zm9yKCBsZXQgcGFyZW50IG9mIHRoaXMucGFyZW50cylcclxuXHRcdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5zdHlsZXNldCwgcGFyZW50LnN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFRhZ1J1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBUYWdSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNvcHlGcm9tKCBzcmM6IFRhZ1J1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY29weUZyb20oIHNyYylcclxuXHRcdHRoaXMudGFnTmFtZSA9IHNyYy50YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc1RhZ1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdC8vIE5hbWUgb2YgdGhlIHRhZyB0byB3aGljaCB0aGUgc3R5bGVzZXQgYXBwbGllcy5cclxuXHRwdWJsaWMgdGFnTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVHNzTWFuYWdlciBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgaW5zZXJ0aW5nIENTUyBydWxlcyBpbnRvIHRoZSBET00uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVHNzTWFuYWdlclxyXG57XHJcblx0Ly8gVGhpcyBjbGFzcyBoYXMgc3RhdGljIG1lbWJlcnMgb25seS5cclxuXHRwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0byB1c2Ugb3B0aW1pemVkICh1bmlxdWUpIHN0eWxlIG5hbWVzLiBJZiB5ZXMsIHRoZSBuYW1lc1xyXG5cdCAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcblx0ICogc3BlY2lmaWVkLCB0aGUgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiBAcGFyYW0gb3B0aW1pemVcclxuXHQgKiBAcGFyYW0gcHJlZml4XHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1c2VPcHRpbWl6ZWRTdHlsZU5hbWVzKCBvcHRpbWl6ZTogYm9vbGVhbiwgcHJlZml4Pzogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudXNlVW5pcXVlU3R5bGVOYW1lcyA9IG9wdGltaXplO1xyXG5cdFx0dGhpcy51bmlxdWVTdHlsZU5hbWVzUHJlZml4ID0gcHJlZml4O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZXMgbmFtZSB0byB1c2UgZm9yIHRoZSBnaXZlbiBydWxlIGZyb20gdGhlIGdpdmVuIHN0eWxlIHNoZWV0LlxyXG5cdCAqIEBwYXJhbSBzaGVldE5hbWUgXHJcblx0ICogQHBhcmFtIHJ1bGVOYW1lIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVOYW1lKCBzaGVldE5hbWU6IHN0cmluZywgcnVsZU5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLnVzZVVuaXF1ZVN0eWxlTmFtZXNcclxuXHRcdFx0PyB0aGlzLmdlbmVyYXRlVW5pcXVlTmFtZSggdGhpcy51bmlxdWVTdHlsZU5hbWVzUHJlZml4KVxyXG5cdFx0XHQ6IGAke3NoZWV0TmFtZX1fJHtydWxlTmFtZX1gO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZW5lcmF0ZXMgYSB1bmlxdWUgbmFtZSwgd2hpY2ggY2FuIGJlIHVzZWQgZWl0aGVyIGZvciBzdHlsZSBlbGVtZW50J3MgSUQgb3Igb3IgY2xhc3MsXHJcblx0ICogaWRlbnRpZmllciBvciBhbmltYXRpb24gbmFtZS4gTmFtZXMgYXJlIGdlbmVyYXRlZCB1c2luZyBhIHNpbXBsZSBpbmNyZW1lbnRpbmcgbnVtYmVyLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVVbmlxdWVOYW1lKCBwcmVmaXg/OiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6IFwiblwiKSArIHRoaXMubmV4dFVuaXF1ZUlEKys7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBJbnNlcnRzIHJ1bGVzIGZyb20gdGhlIGdpdmVuIHN0eWxlIHNjb3BlIGludG8gRE9NICovXHJcblx0cHVibGljIHN0YXRpYyBhY3RpdmF0ZSggc3R5bGVTY29wZTogU3R5bGVTY29wZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXN0eWxlU2NvcGUpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdFx0XHJcblx0XHQvLyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZ2l2ZW4gc2NvcGUgaXMgbXVsdGlwbGV4LCB3ZSBlaXRoZXIgY3JlYXRlIGEgbmV3IDxzdHlsZT4gZWxlbWVudFxyXG5cdFx0Ly8gb3IgcmV1c2Ugb3VyIFwiZ2xvYmFsXCIgb25lXHJcblx0XHRsZXQgc3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblx0XHRsZXQgc3R5bGVTaGVldDogQ1NTU3R5bGVTaGVldDtcclxuXHRcdGlmIChzdHlsZVNjb3BlLkRlZmluaXRpb24uaXNNdWx0aXBsZXgpXHJcblx0XHR7XHJcblx0XHRcdHN0eWxlRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGVFbG0pO1xyXG5cdFx0XHRzdHlsZVNoZWV0ID0gc3R5bGVFbG0uc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcclxuXHRcdFx0dGhpcy5tdWx0aXBsZXhTY29wZXMuc2V0KCBzdHlsZVNjb3BlLCBzdHlsZUVsbSk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuZW5zdXJlRE9NKCk7XHJcblx0XHRcdHN0eWxlRWxtID0gdGhpcy5zdHlsZUVsbTtcclxuXHRcdFx0c3R5bGVTaGVldCA9IHRoaXMuc3R5bGVTaGVldDtcclxuXHRcdH1cclxuXHJcblx0XHRzdHlsZVNjb3BlLnNldERPTUluZm8oIHN0eWxlRWxtLCBzdHlsZVNoZWV0KTtcclxuXHJcblx0XHQvLyBnbyBvdmVyIHRoZSBuYW1lZCBydWxlcywgY29udmVydCB0aGVtIHRvIHN0cmluZ3MgYW5kIGluc2VydCB0aGVtIGludG8gdGhlIHN0eWxlIHNoZWV0XHJcblx0XHRmb3IoIGxldCBydWxlTmFtZSBpbiBzdHlsZVNjb3BlLl9uYW1lZFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcnVsZTogUnVsZSA9IHN0eWxlU2NvcGUuX25hbWVkUnVsZXNbcnVsZU5hbWVdO1xyXG5cdFx0XHRydWxlLmluZGV4ID0gc3R5bGVTaGVldC5pbnNlcnRSdWxlKCBydWxlLnRvQ3NzU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGRvIHRoZSBzYW1lIGZvciB0aGUgdW5uYW1lZCBydWxlc1xyXG5cdFx0Zm9yKCBsZXQgdW5uYW1lZFJ1bGUgb2Ygc3R5bGVTY29wZS5fdW5uYW1lZFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcnVsZSA9IHVubmFtZWRSdWxlIGFzIFJ1bGU7XHJcblx0XHRcdHJ1bGUuaW5kZXggPSBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoIHJ1bGUudG9Dc3NTdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhpcyBzdHlsZSBzY29wZSBmcm9tIERPTSAtIG9ubHkgd29ya3MgZm9yIG11bHRpcGxleCBzdHlsZSBzY29wZXNcclxuXHRwdWJsaWMgc3RhdGljIGRlYWN0aXZhdGUoIHN0eWxlU2NvcGU6IFN0eWxlU2NvcGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFzdHlsZVNjb3BlKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0aWYgKHN0eWxlU2NvcGUuRGVmaW5pdGlvbi5pc011bHRpcGxleClcclxuXHRcdHtcclxuXHRcdFx0c3R5bGVTY29wZS5jbGVhckRPTUluZm8oKTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIHJlbW92ZSB0aGUgPHN0eWxlPiBlbGVtZW50IGZyb20gdGhlIGRvY3VtZW50XHJcblx0XHRcdGxldCBzdHlsZUVsbSA9IHRoaXMubXVsdGlwbGV4U2NvcGVzLmdldCggc3R5bGVTY29wZSk7XHJcblx0XHRcdGlmIChzdHlsZUVsbSlcclxuXHRcdFx0XHRzdHlsZUVsbS5yZW1vdmUoKTtcclxuXHJcblx0XHRcdHRoaXMubXVsdGlwbGV4U2NvcGVzLmRlbGV0ZSggc3R5bGVTY29wZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBFbnN1cmVzIHRoYXQgdGhlIDxzdHlsZT4gZWxlbWVudCBpcyBpbnNlcnRlZCBpbnRvIERPTSAqL1xyXG5cdHByaXZhdGUgc3RhdGljIGVuc3VyZURPTSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3R5bGVTaGVldClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdC8vIGNyZWF0ZSA8c3R5bGU+IGVsZW1lbnQgYW5kIGluc2VydCBpdCBpbnRvIDxoZWFkPlxyXG5cdFx0dGhpcy5zdHlsZUVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic3R5bGVcIik7XHJcblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCB0aGlzLnN0eWxlRWxtKTtcclxuXHJcblx0XHR0aGlzLnN0eWxlU2hlZXQgPSB0aGlzLnN0eWxlRWxtLnNoZWV0IGFzIENTU1N0eWxlU2hlZXQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWFpemVkIG5hbWVzIGZvciBzdHlsZSBlbGVtZW50cyAoY2xhc3MgbmFtZXMsIGFuaW1hdGlvblxyXG5cdC8vIG5hbWVzLCBldGMuKVxyXG5cdHByaXZhdGUgc3RhdGljIHVzZVVuaXF1ZVN0eWxlTmFtZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Ly8gUHJlZml4IHRvIHVzZSB3aGVuIGdlbmVyYXRpbmcgdW5pcXVlIHN0eWxlIG5hbWVzLiBJZiB1bmRlZmluZWQsIGEgc3RhbmRhcmQgcHJlZml4IFwiblwiIHdpbGxcclxuXHQvLyBiZSB1c2VkLlxyXG5cdHByaXZhdGUgc3RhdGljIHVuaXF1ZVN0eWxlTmFtZXNQcmVmaXg6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gTmV4dCBudW1iZXIgdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgaWRlbnRpZmllcnMuXHJcblx0cHJpdmF0ZSBzdGF0aWMgbmV4dFVuaXF1ZUlEOiBudW1iZXIgPSAxO1xyXG5cclxuXHQvLyBTdHlsZSBlbGVtZW50IERPTSBvYmplY3Qgd2hlcmUgYWxsIHJ1bGVzIGZyb20gYWxsIFN0eWxlU2NvcGUgb2JqZWN0cyBhcmUgY3JlYWVkLlxyXG5cdHByaXZhdGUgc3RhdGljIHN0eWxlRWxtPzogSFRNTFN0eWxlRWxlbWVudDtcclxuXHJcblx0Ly8gRE9NIHN0eWxlIHNoZWV0IG9iamVjdCBpbnNlcnRlZCBpbnRvIHRoZSA8aGVhZD4gZWxlbWVudC5cclxuXHRwcml2YXRlIHN0YXRpYyBzdHlsZVNoZWV0PzogQ1NTU3R5bGVTaGVldDtcclxuXHJcblx0Ly8gTWFwIG9mIFN0eWxlU2NvcGUgbXVsdGlwbGV4IG9iamVjdHMgdG8gdGhlaXIgPHN0eWxlPiBlbGVtZW50IERPTSBvYmplY3RzLlxyXG5cdHByaXZhdGUgc3RhdGljIG11bHRpcGxleFNjb3BlcyA9IG5ldyBNYXA8U3R5bGVTY29wZSxIVE1MU3R5bGVFbGVtZW50PigpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiXHJcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tIFwiLi9jb2xvcnNcIlxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBkZWZuaXRpb24gb2YgYSBmdW5jdGlvbiB0aGF0IHRha2VzIHByb3BlcnR5IHZhbHVlIGFuZCBjb252ZXJ0cyBpdCB0byBzdHJpbmcgKi9cclxudHlwZSBQcm9wVG9TdHJpbmdGdW5jPFQ+ID0gKHZhbDogVCkgPT4gc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBTdHlsZVByb3BlcnR5SW5mbyB0eXBlIHJlcHJlc2VudHMgaW5mb3JtYXRpb24gdGhhdCB3ZSBrZWVwIGZvciBzdHlsZSBwcm9wZXJ0aWVzLiBNb3N0XHJcbiAqIGNvbW1vbmx5LCB0aGUgaW5mb3JtYXRpb24gbmVlZGVkIGZvciBhIHByb3BlcnR5IGlzIGEgY29udmVyc2lvbiBmdW5jdGlvbiwgd2hpY2ggdGFrZXMgYSB2YWx1ZVxyXG4gKiBvZiBhIHR5cGUgYWxsb3dlZCBmb3IgdGhlIHByb3BlcnR5IGFuZCBjb252ZXJ0cyBpdCB0byB0aGUgQ1NTIGNvbXBsaWFudCBzdHJpbmcuIEFsdGVybmF0aXZlbHksXHJcbiAqIGl0IGNhbiBiZSBhIG5hbWUgb2YgYW5vdGhlciBTdHlsZXNldCBwcm9wZXJ0eSBmb3Igd2hpY2ggdGhpcyBwcm9wZXJ0eSBpcyBhbiBhbGlhcy4gVGhpcyBpcyB1c2VkXHJcbiAqIGZvciBzaG9ydGVuaW5nIGZyZXF1ZW50bHkgdXNlZCBidXQgbG9uZyBwcm9wZXJ0eSBuYW1lcyAoZS5nLiBiYWNrZ3JvdW5kQ29sb3IpIGFuZCBmb3IgcHJlZml4ZWRcclxuICogcHJvcGVydGllcy5cclxuICovXHJcbnR5cGUgU3R5bGVQcm9wZXJ0eUluZm88VD4gPSBQcm9wVG9TdHJpbmdGdW5jPFQ+IHwga2V5b2Ygc3R5bGVzLlN0eWxlc2V0O1xyXG5cclxuXHJcblxyXG4vKiogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlc2V0IHRvIGl0cyBzdHJpbmcgcmVwcmVzZW50YXRpb24gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlc2V0VG9Dc3NTdHJpbmcoIHN0eWxlc2V0OiBzdHlsZXMuU3R5bGVzZXQsIGltcG9ydGFudD86IFNldDxzdHJpbmc+KTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzID0gXCJcIjtcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHR7XHJcbiAgICAgICAgbGV0IHByb3BWYWw6IGFueSA9IHN0eWxlc2V0W3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiJGN1c3RvbVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBvZiB0aGUgXCIkY3VzdG9tXCIgcHJvcGVydHlcclxuICAgICAgICAgICAgZm9yKCBsZXQgY3VzdG9tUHJvcE5hbWUgaW4gcHJvcFZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcyArPSBgLS0ke2N1c3RvbVByb3BOYW1lfToke3Byb3BWYWxbY3VzdG9tUHJvcE5hbWVdfWA7XHJcbiAgICAgICAgICAgICAgICBzICs9IChpbXBvcnRhbnQgJiYgaW1wb3J0YW50LmhhcyggcHJvcE5hbWUpID8gXCIgIWltcG9ydGFudDtcIiA6IFwiO1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAgICAgcyArPSBzdHlsZVByb3BUb0Nzc1N0cmluZyggcHJvcE5hbWUsIHByb3BWYWwpO1xyXG4gICAgICAgICAgICBzICs9IChpbXBvcnRhbnQgJiYgaW1wb3J0YW50LmhhcyggcHJvcE5hbWUpID8gXCIgIWltcG9ydGFudDtcIiA6IFwiO1wiKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIHJldHVybiBgeyR7c319YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3R5bGUgc3RyaW5nXHJcbiAqIEBwYXJhbSBzdHlsZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVByb3BUb0Nzc1N0cmluZyggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcE5hbWUgfHwgcHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgcHJvcGVydHlcclxuICAgIGxldCBpbmZvID0gU3R5bGVQcm9wZXJ0eUluZm9zW3Byb3BOYW1lXTtcclxuICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIilcclxuICAgIHtcclxuICAgICAgICAvLyBnbyB1cCB0aGUgY2hhaW4gb2YgYWxpYXNlcyBpZiBhbnkgKHdlIGFkbWl0dGVkbHkgZG9uJ3QgbWFrZSB0aGUgZWZmb3J0IHRvIGRldGVjdCBjaXJjdWxhclxyXG4gICAgICAgIC8vIGRlcGVuZGVuY2llcywgYmVjYXVzZSBzZXR0aW5nIHVwIHRoZSBpbmZvcm1hdGlvbiBvYmplY3RzIGlzIG91ciBqb2IgYW5kIG5vdCBkZXZlbG9wZXJzJykuXHJcbiAgICAgICAgd2hpbGUoIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcE5hbWUgPSBpbmZvO1xyXG4gICAgICAgICAgICBpbmZvID0gU3R5bGVQcm9wZXJ0eUluZm9zW3Byb3BOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHMgPSB2YWx1ZU9ubHkgPyBcIlwiIDogdXRpbHMuY2FtZWxUb0Rhc2goIHByb3BOYW1lKSArIFwiOlwiO1xyXG5cclxuICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHMgKz0gaW5mbyggcHJvcFZhbCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBzICs9IHByb3BWYWw7XHJcbiAgICBlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcyArPSBwcm9wVmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBwcm9wVmFsKSlcclxuICAgICAgICBzICs9IHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHByb3BWYWwsIGl0ZW0gPT4gaXRlbSA9PSBudWxsID8gXCJcIiA6IGl0ZW0udG9TdHJpbmcoKSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcyArPSBwcm9wVmFsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1hcCBvZiBwcm9wZXJ0eSBuYW1lcyB0byB0aGUgU3R5bGVQcm9wZXJ0eUluZm8gb2JqZWN0cyBkZXNjcmliaW5nIGN1c3RvbSBhY3Rpb25zIG5lY2Vzc2FyeSB0b1xyXG4gKiBjb252ZXJ0IHRoZSBwcm9wZXJ0eSB2YWx1ZSB0byB0aGUgQ1NTLWNvbXBsaWFudCBzdHJpbmcuXHJcbiAqL1xyXG5jb25zdCBTdHlsZVByb3BlcnR5SW5mb3M6IHsgW0sgaW4ga2V5b2Ygc3R5bGVzLlN0eWxlc2V0XTogU3R5bGVQcm9wZXJ0eUluZm88c3R5bGVzLlN0eWxlc2V0W0tdPiB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiBzdHlsZXMuYW5pbWF0aW9uVG9Dc3NTdHJpbmcsXHJcbiAgICBhbmltYXRpb25EZWxheTogdXRpbHMubXVsdGlUaW1lVG9Dc3NTdHJpbmcsXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogdXRpbHMubXVsdGlUaW1lVG9Dc3NTdHJpbmcsXHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdXRpbHMuc2luZ2xlTnVtYmVyVG9Dc3NTdHJpbmcsXHJcbiAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogc3R5bGVzLmFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJnYzogXCJiYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogdXRpbHMubXVsdGlQb3NpdGlvblRvQ3NzU3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IHV0aWxzLm11bHRpU2l6ZVRvQ3NzU3RyaW5nLFxyXG4gICAgYmFzZWxpbmVTaGlmdDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgYm9yZGVyOiBzdHlsZXMuYm9yZGVyU2lkZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tOiBzdHlsZXMuYm9yZGVyU2lkZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9ycy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogc3R5bGVzLnNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IHN0eWxlcy5zaW5nbGVDb3JuZXJSYWRpdXNUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbVdpZHRoOiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckNvbG9yOiBzdHlsZXMuYm9yZGVyQ29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckltYWdlT3V0c2V0OiBzdHlsZXMuYm9yZGVySW1hZ2VPdXRzZXRUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckltYWdlV2lkdGg6IHN0eWxlcy5ib3JkZXJXaWR0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyTGVmdDogc3R5bGVzLmJvcmRlclNpZGVUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3JzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJMZWZ0V2lkdGg6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBzdHlsZXMuYm9yZGVyUmFkaXVzVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodDogc3R5bGVzLmJvcmRlclNpZGVUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9ycy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHRXaWR0aDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJTdHlsZTogc3R5bGVzLmJvcmRlclN0eWxlVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJTcGFjaW5nOiBzdHlsZXMuYm9yZGVyU3BhY2luZ1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wOiBzdHlsZXMuYm9yZGVyU2lkZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wQ29sb3I6IGNvbG9ycy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogc3R5bGVzLnNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHN0eWxlcy5zaW5nbGVDb3JuZXJSYWRpdXNUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclRvcFdpZHRoOiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlcldpZHRoOiBzdHlsZXMuYm9yZGVyV2lkdGhUb0Nzc1N0cmluZyxcclxuICAgIGJvdHRvbTogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3hTaGFkb3c6IHN0eWxlcy5ib3hTaGFkb3dUb0Nzc1N0cmluZyxcclxuICAgIHNoYWRvdzogXCJib3hTaGFkb3dcIixcclxuXHJcbiAgICBjYXJldENvbG9yOiBjb2xvcnMuY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGNsaXA6IHN0eWxlcy5jbGlwVG9Dc3NTdHJpbmcsXHJcbiAgICBjb2xvcjogY29sb3JzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBjb2x1bW5HYXA6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZTogc3R5bGVzLmNvbHVtblJ1bGVUb0Nzc1N0cmluZyxcclxuICAgIGNvbHVtblJ1bGVDb2xvcjogY29sb3JzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBjb2x1bW5SdWxlU3R5bGU6IHN0eWxlcy5ib3JkZXJTdHlsZVRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBzdHlsZXMuYm9yZGVyV2lkdGhUb0Nzc1N0cmluZyxcclxuICAgIGNvbHVtbnM6IHN0eWxlcy5jb2x1bW5zVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgZmxleDogc3R5bGVzLmZsZXhUb0Nzc1N0cmluZyxcclxuICAgIGZsZXhGbG93OiBzdHlsZXMuZmxleEZsb3dUb0Nzc1N0cmluZyxcclxuICAgIGZsb29kQ29sb3I6IGNvbG9ycy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgZm9udFN0eWxlOiBzdHlsZXMuZm9udFN0eWxlVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgZ3JpZENvbHVtbkdhcDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBncmlkUm93R2FwOiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBoZWlnaHQ6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGxlZnQ6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbGlnaHRpbmdDb2xvcjogY29sb3JzLmNvbG9yVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgb3V0bGluZUNvbG9yOiBjb2xvcnMuY29sb3JUb0Nzc1N0cmluZyxcclxuXHJcbiAgICByaWdodDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICByb3dHYXA6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IGNvbG9ycy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I6IGNvbG9ycy5jb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgdG9wOiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICB3aWR0aDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbn07XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgdHlwZXMgYW5kIGZ1bmN0aW9ucyB1c2VkIHRvIHdvcmsgd2l0aCBDU1MgY29sb3JzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7QmFzZV9TdHlsZVR5cGV9IGZyb20gXCIuL3V0aWxzXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB3aG9zZSBwcm9wZXJ0eSBuYW1lcyBhcmUgbmFtZXMgb2Ygd2VsbC1rbm93biBjb2xvcnMgYW5kIHZhbHVlcyBjb3JyZXNwb25kIHRvIHRoZSBoZXhhZGVjaW1hbFxyXG4gKiByZXByZXNlbnRhcnRpb24gb2YgdGhlIFJHQiBzZXBhcmF0aW9ucyAod2l0aG91dCBhbiBhbHBoYSBtYXNrKS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDb2xvcnNDbGFzcyBcclxue1xyXG4gICAgYmxhY2sgPSAweDAwMDAwMDtcclxuICAgIHNpbHZlciA9IDB4YzBjMGMwO1xyXG4gICAgZ3JheSA9IDB4ODA4MDgwO1xyXG4gICAgd2hpdGUgPSAweGZmZmZmZjtcclxuICAgIG1hcm9vbiA9IDB4ODAwMDAwO1xyXG4gICAgcmVkID0gMHhmZjAwMDA7XHJcbiAgICBwdXJwbGUgPSAweDgwMDA4MDtcclxuICAgIGZ1Y2hzaWEgPSAweGZmMDBmZjtcclxuICAgIGdyZWVuID0gMHgwMDgwMDA7XHJcbiAgICBsaW1lID0gMHgwMGZmMDA7XHJcbiAgICBvbGl2ZSA9IDB4ODA4MDAwO1xyXG4gICAgeWVsbG93ID0gMHhmZmZmMDA7XHJcbiAgICBuYXZ5ID0gMHgwMDAwODA7XHJcbiAgICBibHVlID0gMHgwMDAwZmY7XHJcbiAgICB0ZWFsID0gMHgwMDgwODA7XHJcbiAgICBhcXVhID0gMHgwMGZmZmY7XHJcbiAgICBvcmFuZ2UgPSAweGZmYTUwMDtcclxuICAgIGFsaWNlYmx1ZSA9IDB4ZjBmOGZmO1xyXG4gICAgYW50aXF1ZXdoaXRlID0gMHhmYWViZDc7XHJcbiAgICBhcXVhbWFyaW5lID0gMHg3ZmZmZDQ7XHJcbiAgICBhenVyZSA9IDB4ZjBmZmZmO1xyXG4gICAgYmVpZ2UgPSAweGY1ZjVkYztcclxuICAgIGJpc3F1ZSA9IDB4ZmZlNGM0O1xyXG4gICAgYmxhbmNoZWRhbG1vbmQgPSAweGZmZWJjZDtcclxuICAgIGJsdWV2aW9sZXQgPSAweDhhMmJlMjtcclxuICAgIGJyb3duID0gMHhhNTJhMmE7XHJcbiAgICBidXJseXdvb2QgPSAweGRlYjg4NztcclxuICAgIGNhZGV0Ymx1ZSA9IDB4NWY5ZWEwO1xyXG4gICAgY2hhcnRyZXVzZSA9IDB4N2ZmZjAwO1xyXG4gICAgY2hvY29sYXRlID0gMHhkMjY5MWU7XHJcbiAgICBjb3JhbCA9IDB4ZmY3ZjUwO1xyXG4gICAgY29ybmZsb3dlcmJsdWUgPSAweDY0OTVlZDtcclxuICAgIGNvcm5zaWxrID0gMHhmZmY4ZGM7XHJcbiAgICBjcmltc29uID0gMHhkYzE0M2M7XHJcbiAgICBjeWFuID0gMHgwMGZmZmY7XHJcbiAgICBkYXJrYmx1ZSA9IDB4MDAwMDhiO1xyXG4gICAgZGFya2N5YW4gPSAweDAwOGI4YjtcclxuICAgIGRhcmtnb2xkZW5yb2QgPSAweGI4ODYwYjtcclxuICAgIGRhcmtncmF5ID0gMHhhOWE5YTk7XHJcbiAgICBkYXJrZ3JlZW4gPSAweDAwNjQwMDtcclxuICAgIGRhcmtncmV5ID0gMHhhOWE5YTk7XHJcbiAgICBkYXJra2hha2kgPSAweGJkYjc2YjtcclxuICAgIGRhcmttYWdlbnRhID0gMHg4YjAwOGI7XHJcbiAgICBkYXJrb2xpdmVncmVlbiA9IDB4NTU2YjJmO1xyXG4gICAgZGFya29yYW5nZSA9IDB4ZmY4YzAwO1xyXG4gICAgZGFya29yY2hpZCA9IDB4OTkzMmNjO1xyXG4gICAgZGFya3JlZCA9IDB4OGIwMDAwO1xyXG4gICAgZGFya3NhbG1vbiA9IDB4ZTk5NjdhO1xyXG4gICAgZGFya3NlYWdyZWVuID0gMHg4ZmJjOGY7XHJcbiAgICBkYXJrc2xhdGVibHVlID0gMHg0ODNkOGI7XHJcbiAgICBkYXJrc2xhdGVncmF5ID0gMHgyZjRmNGY7XHJcbiAgICBkYXJrc2xhdGVncmV5ID0gMHgyZjRmNGY7XHJcbiAgICBkYXJrdHVycXVvaXNlID0gMHgwMGNlZDE7XHJcbiAgICBkYXJrdmlvbGV0ID0gMHg5NDAwZDM7XHJcbiAgICBkZWVwcGluayA9IDB4ZmYxNDkzO1xyXG4gICAgZGVlcHNreWJsdWUgPSAweDAwYmZmZjtcclxuICAgIGRpbWdyYXkgPSAweDY5Njk2OTtcclxuICAgIGRpbWdyZXkgPSAweDY5Njk2OTtcclxuICAgIGRvZGdlcmJsdWUgPSAweDFlOTBmZjtcclxuICAgIGZpcmVicmljayA9IDB4YjIyMjIyO1xyXG4gICAgZmxvcmFsd2hpdGUgPSAweGZmZmFmMDtcclxuICAgIGZvcmVzdGdyZWVuID0gMHgyMjhiMjI7XHJcbiAgICBnYWluc2Jvcm8gPSAweGRjZGNkYztcclxuICAgIGdob3N0d2hpdGUgPSAweGY4ZjhmZjtcclxuICAgIGdvbGQgPSAweGZmZDcwMDtcclxuICAgIGdvbGRlbnJvZCA9IDB4ZGFhNTIwO1xyXG4gICAgZ3JlZW55ZWxsb3cgPSAweGFkZmYyZjtcclxuICAgIGdyZXkgPSAweDgwODA4MDtcclxuICAgIGhvbmV5ZGV3ID0gMHhmMGZmZjA7XHJcbiAgICBob3RwaW5rID0gMHhmZjY5YjQ7XHJcbiAgICBpbmRpYW5yZWQgPSAweGNkNWM1YztcclxuICAgIGluZGlnbyA9IDB4NGIwMDgyO1xyXG4gICAgaXZvcnkgPSAweGZmZmZmMDtcclxuICAgIGtoYWtpID0gMHhmMGU2OGM7XHJcbiAgICBsYXZlbmRlciA9IDB4ZTZlNmZhO1xyXG4gICAgbGF2ZW5kZXJibHVzaCA9IDB4ZmZmMGY1O1xyXG4gICAgbGF3bmdyZWVuID0gMHg3Y2ZjMDA7XHJcbiAgICBsZW1vbmNoaWZmb24gPSAweGZmZmFjZDtcclxuICAgIGxpZ2h0Ymx1ZSA9IDB4YWRkOGU2O1xyXG4gICAgbGlnaHRjb3JhbCA9IDB4ZjA4MDgwO1xyXG4gICAgbGlnaHRjeWFuID0gMHhlMGZmZmY7XHJcbiAgICBsaWdodGdvbGRlbnJvZHllbGxvdyA9IDB4ZmFmYWQyO1xyXG4gICAgbGlnaHRncmF5ID0gMHhkM2QzZDM7XHJcbiAgICBsaWdodGdyZWVuID0gMHg5MGVlOTA7XHJcbiAgICBsaWdodGdyZXkgPSAweGQzZDNkMztcclxuICAgIGxpZ2h0cGluayA9IDB4ZmZiNmMxO1xyXG4gICAgbGlnaHRzYWxtb24gPSAweGZmYTA3YTtcclxuICAgIGxpZ2h0c2VhZ3JlZW4gPSAweDIwYjJhYTtcclxuICAgIGxpZ2h0c2t5Ymx1ZSA9IDB4ODdjZWZhO1xyXG4gICAgbGlnaHRzbGF0ZWdyYXkgPSAweDc3ODg5OTtcclxuICAgIGxpZ2h0c2xhdGVncmV5ID0gMHg3Nzg4OTk7XHJcbiAgICBsaWdodHN0ZWVsYmx1ZSA9IDB4YjBjNGRlO1xyXG4gICAgbGlnaHR5ZWxsb3cgPSAweGZmZmZlMDtcclxuICAgIGxpbWVncmVlbiA9IDB4MzJjZDMyO1xyXG4gICAgbGluZW4gPSAweGZhZjBlNjtcclxuICAgIG1hZ2VudGEgPSAweGZmMDBmZjtcclxuICAgIG1lZGl1bWFxdWFtYXJpbmUgPSAweDY2Y2RhYTtcclxuICAgIG1lZGl1bWJsdWUgPSAweDAwMDBjZDtcclxuICAgIG1lZGl1bW9yY2hpZCA9IDB4YmE1NWQzO1xyXG4gICAgbWVkaXVtcHVycGxlID0gMHg5MzcwZGI7XHJcbiAgICBtZWRpdW1zZWFncmVlbiA9IDB4M2NiMzcxO1xyXG4gICAgbWVkaXVtc2xhdGVibHVlID0gMHg3YjY4ZWU7XHJcbiAgICBtZWRpdW1zcHJpbmdncmVlbiA9IDB4MDBmYTlhO1xyXG4gICAgbWVkaXVtdHVycXVvaXNlID0gMHg0OGQxY2M7XHJcbiAgICBtZWRpdW12aW9sZXRyZWQgPSAweGM3MTU4NTtcclxuICAgIG1pZG5pZ2h0Ymx1ZSA9IDB4MTkxOTcwO1xyXG4gICAgbWludGNyZWFtID0gMHhmNWZmZmE7XHJcbiAgICBtaXN0eXJvc2UgPSAweGZmZTRlMTtcclxuICAgIG1vY2Nhc2luID0gMHhmZmU0YjU7XHJcbiAgICBuYXZham93aGl0ZSA9IDB4ZmZkZWFkO1xyXG4gICAgb2xkbGFjZSA9IDB4ZmRmNWU2O1xyXG4gICAgb2xpdmVkcmFiID0gMHg2YjhlMjM7XHJcbiAgICBvcmFuZ2VyZWQgPSAweGZmNDUwMDtcclxuICAgIG9yY2hpZCA9IDB4ZGE3MGQ2O1xyXG4gICAgcGFsZWdvbGRlbnJvZCA9IDB4ZWVlOGFhO1xyXG4gICAgcGFsZWdyZWVuID0gMHg5OGZiOTg7XHJcbiAgICBwYWxldHVycXVvaXNlID0gMHhhZmVlZWU7XHJcbiAgICBwYWxldmlvbGV0cmVkID0gMHhkYjcwOTM7XHJcbiAgICBwYXBheWF3aGlwID0gMHhmZmVmZDU7XHJcbiAgICBwZWFjaHB1ZmYgPSAweGZmZGFiOTtcclxuICAgIHBlcnUgPSAweGNkODUzZjtcclxuICAgIHBpbmsgPSAweGZmYzBjYjtcclxuICAgIHBsdW0gPSAweGRkYTBkZDtcclxuICAgIHBvd2RlcmJsdWUgPSAweGIwZTBlNjtcclxuICAgIHJvc3licm93biA9IDB4YmM4ZjhmO1xyXG4gICAgcm95YWxibHVlID0gMHg0MTY5ZTE7XHJcbiAgICBzYWRkbGVicm93biA9IDB4OGI0NTEzO1xyXG4gICAgc2FsbW9uID0gMHhmYTgwNzI7XHJcbiAgICBzYW5keWJyb3duID0gMHhmNGE0NjA7XHJcbiAgICBzZWFncmVlbiA9IDB4MmU4YjU3O1xyXG4gICAgc2Vhc2hlbGwgPSAweGZmZjVlZTtcclxuICAgIHNpZW5uYSA9IDB4YTA1MjJkO1xyXG4gICAgc2t5Ymx1ZSA9IDB4ODdjZWViO1xyXG4gICAgc2xhdGVibHVlID0gMHg2YTVhY2Q7XHJcbiAgICBzbGF0ZWdyYXkgPSAweDcwODA5MDtcclxuICAgIHNsYXRlZ3JleSA9IDB4NzA4MDkwO1xyXG4gICAgc25vdyA9IDB4ZmZmYWZhO1xyXG4gICAgc3ByaW5nZ3JlZW4gPSAweDAwZmY3ZjtcclxuICAgIHN0ZWVsYmx1ZSA9IDB4NDY4MmI0O1xyXG4gICAgdGFuID0gMHhkMmI0OGM7XHJcbiAgICB0aGlzdGxlID0gMHhkOGJmZDg7XHJcbiAgICB0b21hdG8gPSAweGZmNjM0NztcclxuICAgIHR1cnF1b2lzZSA9IDB4NDBlMGQwO1xyXG4gICAgdmlvbGV0ID0gMHhlZTgyZWU7XHJcbiAgICB3aGVhdCA9IDB4ZjVkZWIzO1xyXG4gICAgd2hpdGVzbW9rZSA9IDB4ZjVmNWY1O1xyXG4gICAgeWVsbG93Z3JlZW4gPSAweDlhY2QzMjtcclxuICAgIHJlYmVjY2FwdXJwbGUgPSAweDY2MzM5OVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgQ29sb3JzIG9iamVjdCBpcyB1c2VkIHRvIGdldCBzdHJpbmcgcmVwcmVzZW50YXRpb25zIG9mIHRoZSB3ZWxsLWtub3duIFdlYiBjb2xvcnMgYXMgd2VsbCBhc1xyXG4gKiB0byBnZXQgdGhlaXIgbnVtZXJpYyB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbG9ycyA9IG5ldyBDb2xvcnNDbGFzcygpO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yIHJlcHJlc2VudGVkIGFzIGFuIGFycmF5OlxyXG4gKiAgIC0gc2luZ2xlLWVsZW1lbnQgYXJyYXkgcmVwcmVzZW50cyBhIGNvbG9yIHZhbHVlIGVpdGhlciBhcyBhIHN0cmluZyBvciBhcyBhIG51bWJlci5cclxuICogICAtIHR3by1lbGVtZW50IGFycmF5IHJlcHJlc2VudHMgZWl0aGVyIGEgY29sb3IgbmFtZSBvciBhIG51bWVyaWMgUkdCIHZhbHVlIGluIHRoZSBmaXJzdCBlbGVtZW50XHJcbiAqICAgICBhbmQgYW4gYWxwaGEgc2VwYXJhdGlvbiBpbiB0aGUgc2Vjb25kIGVsZW1lbnQuXHJcbiAqICAgLSB0aHJlZS1lbGVtZW50IGFyYXkgcmVwcmVzZW50cyBSR0Igc2VwYXJhdGlvbnMgYXMgZWl0aGVyIGludGVnZXIgbnVtYmVycyAoMCB0byAyNTUpIG9yIGZsb2F0aW5nXHJcbiAqICAgICBudW1iZXJzICgwLjAgdG8gMS4wKSBmb3IgcGVyY2VudGFnZXMuXHJcbiAqICAgLSBmb3VyLWVsZW1lbnQgYXJheSByZXByZXNlbnRzIFJHQkEgc2VwYXJhdGlvbnMgYXMgZWl0aGVyIGludGVnZXIgbnVtYmVycyAoMCB0byAyNTUpIG9yIGZsb2F0aW5nXHJcbiAqICAgICBudW1iZXJzICgwLjAgdG8gMS4wKSBmb3IgcGVyY2VudGFnZXMuIFRoZSBhbHBoYSBzZXBhcmF0aW9uICh0aGUgbGFzdCBlbGVtZW50KSBpcyBhbHdheXMgYVxyXG4gKiAgICAgcGVyY2VudGFnZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbG9yQXNBcnJheSA9XHJcbiAgICAgICAgICAgICAgICBba2V5b2YgQ29sb3JzQ2xhc3MgfCBudW1iZXJdIHxcclxuICAgICAgICAgICAgICAgIFtrZXlvZiBDb2xvcnNDbGFzcyB8IG51bWJlciwgbnVtYmVyXSB8XHJcbiAgICAgICAgICAgICAgICBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl0gfFxyXG4gICAgICAgICAgICAgICAgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGNvbG9yLiBDb2xvciBjYW4gYmUgcmVwcmVzZW50ZWQgdXNpbmcgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIHN0cmluZyAoZS5nLiBcInJlZFwiIG9yIFwiI2ZlNVwiIG9yIFwicmdiYSgxOTAsIDIwMCwgMjM1LCA5MCUpXCIsIGV0Yy4pXHJcbiAqICAgLSBudW1iZXI6XHJcbiAqICAgICAtIHBvc2l0aXZlIGludGVnZXIgbnVtYmVycyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMHhGRkZGRkYgYXJlIHRyZWF0ZWQgYXMgUkdCIHNlcGFyYXRpb25zIDB4UlJHR0JCLlxyXG4gKiAgICAgLSBwb3NpdGl2ZSBpbnRlZ2VyIG51bWJlcnMgZ3JlYXRlciB0aGFuIDB4RkZGRkZGIGFyZSB0cmVhdGVkIGFzIFJHQkEgc2VwYXJhdGlvbnMgMHhSUkdHQkJBQS5cclxuICogICAgIC0gbmVnYXRpdmUgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIHJlamVjdGVkLlxyXG4gKiAgIC0gYXJyYXkgW1tDb2xvckFzQXJyYXldXVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JfU3R5bGVUeXBlID0gXCJ0cmFuc3BhcmVudFwiIHwgXCJjdXJyZW50Y29sb3JcIiB8IGtleW9mIENvbG9yc0NsYXNzIHwgbnVtYmVyIHwgQ29sb3JBc0FycmF5IHwgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjb2xvciBzZXBhcmF0aW9uIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIDItZGlnaXQgaGV4YWRlY2ltYWwgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE51bWJlciBmcm9tIDAgdG8gMjU1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VwVG9IZXgoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzID0gdmFsLnRvU3RyaW5nKDE2KTtcclxuICAgIHJldHVybiBzLmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgcyA6IHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBjb2xvciBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQ29sb3IgYXMgYSBudW1iZXJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvck51bWJlclRvQ3NzU3RyaW5nKCB2YWw6IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgaWYgKHZhbCA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgbmVnYXRpdmU6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWwpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvciggXCJBIG51bWJlciByZXByZXNlbnRpbmcgY29sb3IgY2Fubm90IGJlIGZsb2F0aW5nIHBvaW50OiBcIiArIHZhbCk7XHJcbiAgICAgICAgICAgIHJldHVybiBcIiMwMDBcIjtcclxuICAgICAgICB9XHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgaWYgKHZhbCA8PSAweEZGRkZGRilcclxuICAgIHtcclxuICAgICAgICBsZXQgciA9ICh2YWwgJiAweEZGMDAwMCkgPj4gMTY7XHJcbiAgICAgICAgbGV0IGcgPSAodmFsICYgMHgwMEZGMDApID4+IDg7XHJcbiAgICAgICAgbGV0IGIgPSAodmFsICYgMHgwMDAwRkYpO1xyXG4gICAgICAgIHJldHVybiBgIyR7c2VwVG9IZXgocil9JHtzZXBUb0hleChnKX0ke3NlcFRvSGV4KGIpfWA7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHIgPSAodmFsICYgMHhGRjAwMDAwMCkgPj4gMjQ7XHJcbiAgICAgICAgbGV0IGcgPSAodmFsICYgMHgwMEZGMDAwMCkgPj4gMTY7XHJcbiAgICAgICAgbGV0IGIgPSAodmFsICYgMHgwMDAwRkYwMCkgPj4gODtcclxuICAgICAgICBsZXQgYSA9ICh2YWwgJiAweDAwMDAwMEZGKTtcclxuICAgICAgICByZXR1cm4gYCMke3NlcFRvSGV4KHIpfSR7c2VwVG9IZXgoZyl9JHtzZXBUb0hleChiKX0ke3NlcFRvSGV4KGEpfX1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvclNlcCggYzogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIHJldHVybiBjID09IG51bGwgPyBcIjBcIiA6IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gYyA6IE51bWJlci5pc0ludGVnZXIoYykgPyBjLnRvU3RyaW5nKCkgOiB0aGlzLnBlcmNlbnQoYyk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYiggcjogbnVtYmVyIHwgc3RyaW5nLCBnOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgYT86IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByID0gdGhpcy5jb2xvclNlcChyKTtcclxuICAgIGcgPSB0aGlzLmNvbG9yU2VwKGcpO1xyXG4gICAgYiA9IHRoaXMuY29sb3JTZXAoYik7XHJcbiAgICBhID0gYSA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBhID09PSBcInN0cmluZ1wiID8gYSA6IHRoaXMucGVyY2VudChhKTtcclxuXHJcbiAgICByZXR1cm4gYSA9PSBudWxsID8gYHJnYigke3J9LCR7Z30sJHtifSlgIDogYHJnYmEoJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoc2woIGg6IG51bWJlciB8IHN0cmluZywgczogbnVtYmVyIHwgc3RyaW5nLCBsOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgaCA9IHR5cGVvZiBoID09PSBcInN0cmluZ1wiID8gaCA6IE51bWJlci5pc0ludGVnZXIoIGgpID8gaCArIFwiZGVnXCIgOiBoICsgXCJyYWRcIjtcclxuICAgIHMgPSBzID09IG51bGwgPyBcIjEwMCVcIiA6IHR5cGVvZiBzID09PSBcInN0cmluZ1wiID8gcyA6IHRoaXMucGVyY2VudChzKTtcclxuICAgIGwgPSBsID09IG51bGwgPyBcIjEwMCVcIiA6IHR5cGVvZiBsID09PSBcInN0cmluZ1wiID8gbCA6IHRoaXMucGVyY2VudChsKTtcclxuICAgIGEgPSBhID09IG51bGwgPyBudWxsIDogdHlwZW9mIGEgPT09IFwic3RyaW5nXCIgPyBhIDogdGhpcy5wZXJjZW50KGEpO1xyXG5cclxuICAgIHJldHVybiBhID09IG51bGwgPyBgaHNsKCR7aH0sJHtzfSwke2x9KWAgOiBgaHNsYSgke2h9LCR7c30sJHtsfSwke2F9KWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgdHlwZW9mIENvbG9ycywgYTogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICAgIGxldCByZ2JWYWwgPSB0eXBlb2YgYyA9PT0gXCJzdHJpbmdcIiA/IENvbG9yc1tjXSA6IGM7XHJcbiAgICByZXR1cm4gcmdiKCAocmdiVmFsICYgMHhGRjAwMDApID4+IDE2LCAocmdiVmFsICYgMHgwMEZGMDApID4+IDgsIHJnYlZhbCAmIDB4MDAwMEZGLCBhKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgYXJyYXkgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyB0aW1lIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2xvckFzQXJyYXlUb0Nzc1N0cmluZyggdmFsOiBDb2xvckFzQXJyYXkpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpXHJcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9Dc3NTdHJpbmcoIHZhbFswXSk7XHJcbiAgICBlbHNlIGlmICh2YWwubGVuZ3RoID09PSAyKVxyXG4gICAgICAgIHJldHVybiBhbHBoYSggdmFsWzBdLCB2YWxbMV0pLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwubGVuZ3RoID09PSAzKVxyXG4gICAgICAgIHJldHVybiByZ2IoIHZhbFswXSwgdmFsWzFdLCB2YWxbMl0pLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHJnYiggdmFsWzBdLCB2YWxbMV0sIHZhbFsyXSwgdmFsWzNdKS50b1N0cmluZygpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGltZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFRpbWUgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JUb0Nzc1N0cmluZyggdmFsOiBDb2xvcl9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcblx0ICAgIHJldHVybiBjb2xvck51bWJlclRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuXHQgICAgcmV0dXJuIGNvbG9yQXNBcnJheVRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi91dGlsc1wiXHJcbmltcG9ydCB7Q29sb3JfU3R5bGVUeXBlLCBjb2xvclRvQ3NzU3RyaW5nfSBmcm9tIFwiLi9jb2xvcnNcIlxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ24tY29udGVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnbkNvbnRlbnRTdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHxcclxuXHRcdFx0XHRcImJhc2VsaW5lXCIgfCBcImZpcnN0IGJhc2VsaW5lXCIgfCBcImxhc3QgYmFzZWxpbmVcIiB8IFwic2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIGNlbnRlclwiIHxcclxuXHRcdFx0XHRcInNwYWNlLWJldHdlZW5cIiB8IFwic3BhY2UtYXJvdW5kXCIgfCBcInNwYWNlLWV2ZW5seVwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbi1pdGVtcyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnbkl0ZW1zU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8XHJcblx0XHRcdFx0XCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfCBcInNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBjZW50ZXJcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ24tc2VsZiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbGlnblNlbGZTdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfFxyXG5cdFx0XHRcdFwic2VsZi1zdGFydFwiIHwgXCJzZWxmLWVuZFwiIHwgXCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfFxyXG5cdFx0XHRcdFwic2FmZSBjZW50ZXJcIiB8IFwidW5zYWZlIGNlbnRlclwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBhbGlnbm1lbnQtYmFzZWxpbmUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25tZW50QmFzZWxpbmVTdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwiYmFzZWxpbmVcIiB8IFwiYmVmb3JlLWVkZ2VcIiB8IFwidGV4dC1iZWZvcmUtZWRnZVwiIHxcclxuXHRcdFx0XHRcIm1pZGRsZVwiIHwgXCJjZW50cmFsXCIgfCBcImFmdGVyLWVkZ2VcIiB8IFwidGV4dC1hZnRlci1lZGdlXCIgfCBcImlkZW9ncmFwaGljXCIgfCBcImFscGhhYmV0aWNcIiB8XHJcblx0XHRcdFx0XCJoYW5naW5nXCIgfCBcIm1hdGhlbWF0aWNhbFwiIHwgXCJ0b3BcIiB8IFwiY2VudGVyXCIgfCBcImJvdHRvbVwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUFuaW1hdGlvbiA9IHV0aWxzLkJhc2VfU3R5bGVUeXBlIHxcclxue1xyXG5cdGRlbGF5PzogdXRpbHMuU2luZ2xlVGltZV9TdHlsZVR5cGU7XHJcblx0ZnVuY3Rpb24/OiBTaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvbjtcclxuXHRkdXJhdGlvbj86IHV0aWxzLlNpbmdsZVRpbWVfU3R5bGVUeXBlO1xyXG5cdGNvdW50PzogU2luZ2xlQW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ7XHJcblx0ZGlyZWN0aW9uPzogU2luZ2xlQW5pbWF0aW9uRGlyZWN0aW9uO1xyXG5cdHN0YXRlPzogU2luZ2xlQW5pbWF0aW9uUGxheVN0YXRlO1xyXG5cdG1vZGU/OiBTaW5nbGVBbmltYXRpb25GaWxsTW9kZTtcclxuXHRuYW1lPzogU2luZ2xlQW5pbWF0aW9uTmFtZTtcclxufTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uU3R5bGVUeXBlID0gU2luZ2xlQW5pbWF0aW9uIHwgU2luZ2xlQW5pbWF0aW9uW107XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW5pbWF0aW9uIHN0eWxlIHJlcHJlc2VudGVkIGFzIGFuIG9iamVjdCB3aXRoIGZpZWxkcyBjb3JyZXNwb25kaW5nIHRvIGFuaW1hdGlvblxyXG4gKiBwcm9wZXJ0aWVzIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gdmFsIFNpbmdsZSBhbmltYXRpb24gb2JqZWN0LiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVBbmltYXRpb25Ub0Nzc1N0cmluZyggdmFsOiBTaW5nbGVBbmltYXRpb24pOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMub2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsXHJcbiAgICAgICAgICAgIFtcImRlbGF5XCIsIHV0aWxzLnNpbmdsZVRpbWVUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFtcImZ1bmN0aW9uXCIsIHNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJkdXJhdGlvblwiLCB1dGlscy5zaW5nbGVUaW1lVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJjb3VudFwiLCB1dGlscy5zaW5nbGVOdW1iZXJUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFwiZGlyZWN0aW9uXCIsXHJcbiAgICAgICAgICAgIFwic3RhdGVcIixcclxuICAgICAgICAgICAgXCJtb2RlXCIsXHJcbiAgICAgICAgICAgIFwibmFtZVwiLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbmltYXRpb24gc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqIEBwYXJhbSBvYmogU2luZ2xlIGFuaW1hdGlvbiBvYmplY3QuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGlvblRvQ3NzU3RyaW5nKCB2YWw6IEFuaW1hdGlvblN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBzaW5nbGVBbmltYXRpb25Ub0Nzc1N0cmluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZUFuaW1hdGlvblRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGRpcmVjdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVBbmltYXRpb25EaXJlY3Rpb24gPSBcIm5vcm1hbFwiIHwgXCJyZXZlcnNlXCIgfCBcImFsdGVybmF0ZVwiIHwgXCJhbHRlcm5hdGUtcmV2ZXJzZVwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWRpcmVjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25EaXJlY3Rpb25TdHlsZVR5cGUgPSBTaW5nbGVBbmltYXRpb25EaXJlY3Rpb24gfCBTaW5nbGVBbmltYXRpb25EaXJlY3Rpb25bXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gZmlsbCBtb2RlICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUFuaW1hdGlvbkZpbGxNb2RlID0gXCJub25lXCIgfCBcImZvcndhcmRzXCIgfCBcImJhY2t3YXJkc1wiIHwgXCJib3RoXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tZmlsbC1tb2RlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkZpbGxNb2RlU3R5bGVUeXBlID0gU2luZ2xlQW5pbWF0aW9uRGlyZWN0aW9uIHwgU2luZ2xlQW5pbWF0aW9uRGlyZWN0aW9uW107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGl0ZXJhdGlvbiBjb3VudCAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVBbmltYXRpb25JdGVyYXRpb25Db3VudCA9IFwiaW5maW5pdGVcIiB8IHV0aWxzLlNpbmdsZU51bWJlcl9TdHlsZVR5cGUgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50U3R5bGVUeXBlID0gU2luZ2xlQW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgfCBTaW5nbGVBbmltYXRpb25JdGVyYXRpb25Db3VudFtdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBuYW1lICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUFuaW1hdGlvbk5hbWUgPSBcIm5vbmVcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlIHwgc3RyaW5nO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1uYW1lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvbk5hbWVTdHlsZVR5cGUgPSBTaW5nbGVBbmltYXRpb25OYW1lIHwgU2luZ2xlQW5pbWF0aW9uTmFtZVtdIHwgc3RyaW5nO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBwbGF5IHN0YXRlICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUFuaW1hdGlvblBsYXlTdGF0ZSA9IFwicGF1c2VkXCIgfCBcInJ1bm5pbmdcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1wbGF5LXN0YXRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblBsYXlTdGF0ZVN0eWxlVHlwZSA9IFNpbmdsZUFuaW1hdGlvblBsYXlTdGF0ZSB8IFNpbmdsZUFuaW1hdGlvblBsYXlTdGF0ZVtdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2ltcGxlIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb25zIC0gdGhvc2UgdGhhdCBkb24ndCBoYXZlIHBhcmFtZXRlcnMgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fU2ltcGxlID0gXCJsaW5lYXJcIiB8IFwiZWFzZVwiIHwgXCJlYXNlLWluXCIgfCBcImVhc2Utb3V0XCIgfCBcImVhc2UtaW4tb3V0XCIgfCBcInN0ZXAtc3RhcnRcIiB8IFwic3RlcC1lbmRcIjtcclxuXHJcbi8qKiBUeXBlIGZvciBzdGVwIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gcG9zaXRpb24gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fU3RlcFBvc2l0aW9uID0gXCJqdW1wLXN0YXJ0XCIgfCBcImp1bXAtZW5kXCIgfCBcImp1bXAtbm9uZVwiIHwgXCJqdW1wLWJvdGhcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc3RlcCBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1N0ZXAgPSBbbnVtYmVyLCBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9TdGVwUG9zaXRpb24/XTtcclxuXHJcbi8qKiBUeXBlIGZvciBCZXppZXIgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9CZXppZXIgPSBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvbiA9IEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1NpbXBsZSB8IEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1N0ZXAgfCBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9CZXppZXIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uU3R5bGVUeXBlID0gU2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gfCBTaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvbltdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgU2luZ2xlIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nKCB2YWw6IFNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwubGVuZ3RoIDwgMylcclxuXHR7XHJcblx0XHQvLyB0aGlzIGlzIHN0ZXAgZnVuY3Rpb24gd2l0aCBvbmx5IHRoZSBudW1iZXIgb2Ygc3RlcHNcclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAodmFsWzBdIDw9IDApXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIk51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBncmVhdGVyIHRoYW4gemVyb1wiKTtcclxuXHRcdFx0ZWxzZSBpZiAoIU51bWJlci5pc0ludGVnZXIoIHZhbFswXSkpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIk51bWJlciBvZiBzdGVwcyBpbiBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBhbiBJbnRlZ2VyXCIpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gYHN0ZXAoJHt2YWxbMF19JHt2YWwubGVuZ3RoID09PSAyID8gXCIsXCIgKyB2YWxbMV0gOiBcIlwifSlgO1xyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyBpcyBiZXppZXIgZnVuY3Rpb25cclxuXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAodmFsWzBdIDwgMCB8fCB2YWxbMF0gPiAxIHx8IHZhbFsyXSA8IDAgfHwgdmFsWzJdID4gMSlcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRmlyc3QgYW5kIHRoaXJkIHBhcmFtZXRlcnMgb2YgY3ViaWMtYmV6aWVyIGFuaW1hdGlvbiBmdW5jdGlvbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMVwiKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIGBjdWJpYy1iZXppZXIoJHt2YWxbMF19LCR7dmFsWzFdfSwke3ZhbFsyXX0sJHt2YWxbM119KWA7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW5pbWF0aW9uIGl0ZXJhdGlvbiBjb3VudCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEFuaW1hdGlvbiBpdGVyYXRpb24gY291bnQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nKCB2YWw6IEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh2YWwubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbFswXSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gc2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25Ub0Nzc1N0cmluZyggdmFsIGFzIFNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsIGFzIFNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uW10sIHNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uVG9Dc3NTdHJpbmcpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZmFjZS12aXNpYmlsaXR5IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tmYWNlVmlzaWJpbGl0eU1vZGVTdHlsZVR5cGUgPSBcInZpc2libGVcIiB8IFwiaGlkZGVuXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIGF0dGFjaG1lbnQgKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQmFja2dyb3VuZEF0dGFjaG1lbnQgPSBcInNjcm9sbFwiIHwgXCJmaXhlZFwiIHwgXCJsb2NhbFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1hdHRhY2htZW50IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRBdHRhY2htZW50U3R5bGVUeXBlID0gU2luZ2xlQmFja2dyb3VuZEF0dGFjaG1lbnQgfCBTaW5nbGVCYWNrZ3JvdW5kQXR0YWNobWVudFtdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgY2xpcCAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVCYWNrZ3JvdW5kQ2xpcCA9IFwiYm9yZGVyLWJveFwiIHwgXCJwYWRkaW5nLWJveFwiIHwgXCJjb250ZW50LWJveFwiIHwgXCJ0ZXh0XCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLWNsaXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZENsaXBTdHlsZVR5cGUgPSBTaW5nbGVCYWNrZ3JvdW5kQ2xpcCB8IFNpbmdsZUJhY2tncm91bmRDbGlwW107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCBvcmlnaW4gKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQmFja2dyb3VuZE9yaWdpbiA9IFwiYm9yZGVyLWJveFwiIHwgXCJwYWRkaW5nLWJveFwiIHwgXCJjb250ZW50LWJveFwiIHwgXCJ0ZXh0XCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLW9yaWdpbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kT3JpZ2luU3R5bGVUeXBlID0gU2luZ2xlQmFja2dyb3VuZE9yaWdpbiB8IFNpbmdsZUJhY2tncm91bmRPcmlnaW5bXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIHJlcGVhdCAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVCYWNrZ3JvdW5kUmVwZWF0ID0gXCJyZXBlYXQteFwiIHwgXCJyZXBlYXQteVwiIHwgXCJyZXBlYXRcIiB8IFwic3BhY2VcIiB8IFwicm91bmRcIiB8IFwibm8tcmVwZWF0XCIgfFxyXG4gICAgICAgICAgICAgICAgXCJyZXBlYXQgcmVwZWF0XCIgfCBcInJlcGVhdCBzcGFjZVwiIHwgXCJyZXBlYXQgcm91bmRcIiB8IFwicmVwZWF0IG5vLXJlcGVhdFwiIHxcclxuICAgICAgICAgICAgICAgIFwic3BhY2UgcmVwZWF0XCIgfCBcInNwYWNlIHNwYWNlXCIgfCBcInNwYWNlIHJvdW5kXCIgfCBcInNwYWNlIG5vLXJlcGVhdFwiIHxcclxuICAgICAgICAgICAgICAgIFwicm91bmQgcmVwZWF0XCIgfCBcInJvdW5kIHNwYWNlXCIgfCBcInJvdW5kIHJvdW5kXCIgfCBcInJvdW5kIG5vLXJlcGVhdFwiIHxcclxuICAgICAgICAgICAgICAgIFwibm8tcmVwZWF0IHJlcGVhdFwiIHwgXCJuby1yZXBlYXQgc3BhY2VcIiB8IFwibm8tcmVwZWF0IHJvdW5kXCIgfCBcIm5vLXJlcGVhdCBuby1yZXBlYXRcIiB8XHJcbiAgICAgICAgICAgICAgICB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kLXJlcGVhdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kUmVwZWF0U3R5bGVUeXBlID0gU2luZ2xlQmFja2dyb3VuZFJlcGVhdCB8IFNpbmdsZUJhY2tncm91bmRSZXBlYXRbXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQgc2l6ZSAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVCYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIiB8IFwiY29udGFpblwiIHwgdXRpbHMuU2luZ2xlU2l6ZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1zaXplIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRTaXplU3R5bGVUeXBlID0gU2luZ2xlQmFja2dyb3VuZFNpemUgfCBTaW5nbGVCYWNrZ3JvdW5kU2l6ZVtdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYSBzaW5nbGUgY29ybmVyIHJhZGl1cyAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVDb3JuZXJSYWRpdXNfU3R5bGVUeXBlID0gdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICBbdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSwgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZV07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29ybmVyIHJhZGl1cyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBBbmltYXRpb24gZGVsYXkgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVDb3JuZXJSYWRpdXNUb0Nzc1N0cmluZyggdmFsOiBTaW5nbGVDb3JuZXJSYWRpdXNfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIEhlbHBlciB0eXBlIHRoYXQgZGVmaW5lcyBhbiBhcnJheSBvZiBvbmUgdG8gNCBlbGVtZW50cyBlYWNoIGRlZmluaW5nIGEgbGVuZ3RoL3BlcmNlbnRhZ2UgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlDb3JuZXJSYWRpdXNfU3R5bGVUeXBlID1cclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU/LFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU/LFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU/XHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1yYWRpdXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyUmFkaXVzU3R5bGVUeXBlID0gdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSB8IE11bHRpQ29ybmVyUmFkaXVzX1N0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICBbTXVsdGlDb3JuZXJSYWRpdXNfU3R5bGVUeXBlLCBNdWx0aUNvcm5lclJhZGl1c19TdHlsZVR5cGVdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQm9yZGVyIHJhZGl1cyB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlclJhZGl1c1RvQ3NzU3RyaW5nKCB2YWw6IEJvcmRlclJhZGl1c1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCB2YWxbMF0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gdHdvIE11bHRpQ29ybmVyUmFkaXVzIHZhbHVlc1xyXG4gICAgICAgICAgICBsZXQgcyA9IHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbFswXSwgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICAgICAgcyArPSBcIiAvIFwiO1xyXG4gICAgICAgICAgICByZXR1cm4gcyArIHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbFsxXSBhcyBNdWx0aUNvcm5lclJhZGl1c19TdHlsZVR5cGUsIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHNpbmdsZSBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZVxyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsIGFzIE11bHRpQ29ybmVyUmFkaXVzX1N0eWxlVHlwZSwgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYXNlbGluZS1zaGlmdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYXNlbGluZVNoaWZ0U3R5bGVUeXBlID0gXCJzdWJcIiB8IFwic3VwZXJcIiB8IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYm9yZGVyIHNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJoaWRkZW5cIiB8IFwiZG90dGVkXCIgfCBcImRhc2hlZFwiIHwgXCJzb2xpZFwiIHwgXCJkb3VibGVcIiB8XHJcbiAgICAgICAgICAgICAgICBcImdyb292ZVwiIHwgXCJyaWRnZVwiIHwgXCJpbnNldFwiIHwgXCJvdXRzZXRcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclN0eWxlU3R5bGVUeXBlID0gQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBCb3JkZXJTaWRlU3R5bGVfU3R5bGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGU/LFxyXG4gICAgICAgICAgICAgICAgICAgIEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGU/LFxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgc3R5bGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQm9yZGVyIHN0eWxlIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyU3R5bGVUb0Nzc1N0cmluZyggdmFsOiBCb3JkZXJTdHlsZVN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiB1dGlscy5zdHJpbmdBcnJheVRvQ3NzU3RyaW5nKCB2YWwsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXIgc2lkZSB3aWR0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlID0gXCJ0aGluXCIgfCBcIm1lZGl1bVwiIHwgXCJ0aGlja1wiIHwgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci13aWR0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJXaWR0aFN0eWxlVHlwZSA9IEJvcmRlclNpZGVXaWR0aF9TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIEJvcmRlclNpZGVXaWR0aF9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgQm9yZGVyU2lkZVdpZHRoX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgICAgICBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHdpZHRoIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEJvcmRlciB3aWR0aCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlcldpZHRoVG9Dc3NTdHJpbmcoIHZhbDogQm9yZGVyV2lkdGhTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWNvbGxhcHNlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckNvbGFwc2VTdHlsZVR5cGUgPSBcImNvbGxhcHNlXCIgfCBcInNlcGFyYXRlXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1zcGFjaW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclNwYWNpbmdTdHlsZVR5cGUgPSB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNwYWNpbmcgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQm9yZGVyIHNwYWNpbmcgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJTcGFjaW5nVG9Dc3NTdHJpbmcoIHZhbDogQm9yZGVyU3BhY2luZ1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiB1dGlscy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItY29sb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyQ29sb3JTdHlsZVR5cGUgPSBDb2xvcl9TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIENvbG9yX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBDb2xvcl9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3JfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgICAgICBDb2xvcl9TdHlsZVR5cGU/LFxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgY29sb3Igc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQm9yZGVyIGNvbG9yIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyQ29sb3JUb0Nzc1N0cmluZyggdmFsOiBCb3JkZXJDb2xvclN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiB1dGlscy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwgYXMgQ29sb3JfU3R5bGVUeXBlW10sIGNvbG9yVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gY29sb3JUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyIHNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyU2lkZV9TdHlsZVR5cGUgPSB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlIHwgIEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGUgfCBDb2xvcl9TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgICAgICBCb3JkZXJTaWRlU3R5bGVfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgICAgICBDb2xvcl9TdHlsZVR5cGU/LFxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgc2lkZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBCb3JkZXIgc2lkZSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlclNpZGVUb0Nzc1N0cmluZyggdmFsOiBCb3JkZXJTaWRlX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsWzBdID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsWzBdO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbFswXSBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsWzBdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgZWxzZSBpZiAodmFsWzBdICE9IG51bGwpXHJcbiAgICAgICAgICAgIHMgKz0gdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbFswXSkgKyBcIiBcIjtcclxuXHJcbiAgICAgICAgaWYgKHZhbFsxXSlcclxuICAgICAgICAgICAgcyArPSB2YWxbMV0gKyBcIiBcIjtcclxuXHJcbiAgICAgICAgaWYgKHZhbFsyXSlcclxuICAgICAgICAgICAgcyArPSBjb2xvclRvQ3NzU3RyaW5nKCB2YWxbMl0pICsgXCIgXCI7XHJcblxyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBjb2xvclRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItaW1hZ2Utb3V0c2V0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlT3V0c2V0U3R5bGVUeXBlID0gc3RyaW5nIHwgbnVtYmVyIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIChzdHJpbmcgfCBudW1iZXIpPyxcclxuICAgICAgICAgICAgICAgICAgICAoc3RyaW5nIHwgbnVtYmVyKT8sXHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlci1pbWFnZS1vdXRzZXQgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQm9yZGVyIGltYWdlIG91dHNldCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlckltYWdlT3V0c2V0VG9Dc3NTdHJpbmcoIHZhbDogQm9yZGVySW1hZ2VPdXRzZXRTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB1dGlscy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwsIGJvcmRlckltYWdlT3V0c2V0VG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXJlcGVhdCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVJlcGVhdEtleXdvcmQgPSBcInN0cmV0Y2hcIiB8IFwicmVwZWF0XCIgfCBcInJvdW5kXCIgfCBcInNwYWNlXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VSZXBlYXRTdHlsZVR5cGUgPSBCb3JkZXJJbWFnZVJlcGVhdEtleXdvcmQgfCBbQm9yZGVySW1hZ2VSZXBlYXRLZXl3b3JkLCBCb3JkZXJJbWFnZVJlcGVhdEtleXdvcmRdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLXdpZHRoIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlV2lkdGhTdHlsZVR5cGUgPSB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlIHxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZT8sXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZT8sXHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3Igc2luZ2xlIGJveCBzaGFkb3cuIEJveCBzaGFkb3cgY2FuIGJlIHByZXNlbnRlZCBieSB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gXCJub25lXCIgLSBubyBzaGFkb3cuXHJcbiAqICAgLSBib29sZWFuIC0gZmFsc2UgLSBubyBzaGFkb3c7IHRydWUgLSBkZWZhdWx0IHNoYWRvdzogXCIwIDAgMWVtIDFlbSAjYzBjMGMwXCIuXHJcbiAqICAgLSBudW1iZXIgLSBcIjAgMCBOZW0gTmVtICNjMGMwYzBcIjsgdGhhdCBpcywgdGhlIG51bWJlciBkZWZpbmVzIHRoZSB2YWx1ZSBvZiBibHVyIGFuZCBzcHJlYWRcclxuICogICAgIHJhZGlpIGluIFwiZW1cIiB1bml0cy5cclxuICogICAtIHN0cmluZyAtIGxpdGVyYWwgQ1NTIGJveCBzaGFkb3cgc3RyaW5nLlxyXG4gKiAgIC0gb2JqZWN0IC0gZmllbGRzIHNwZWNpZnkgYm94IHNoYWRvdyBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUJveFNoYWRvdyA9IFwibm9uZVwiIHwgYm9vbGVhbiB8IG51bWJlciB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlIHxcclxue1xyXG4gICAgLyoqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBzaGFkb3cgaXMgaW5zaWRlIHRoZSBib3ggKHRydWUpIG9yIG91dHNpZGUgaXQgKGZhbHNlKS4gRGVmYXVsdCBpcyBmYWxzZS4gKi9cclxuICAgIGluc2V0PzogYm9vbGVhbjtcclxuICAgIC8qKiBIb3Jpem9udGFsIG9mZnNldCB3aGVyZSB0aGUgc2hhZG93IHNob3VsZCBiZWdpbi4gRGVmYXVsdCBpcyAwLiAqL1xyXG5cdHg/OiB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG4gICAgLyoqIFZlcnRpY2FsIG9mZnNldCB3aGVyZSB0aGUgc2hhZG93IHNob3VsZCBiZWdpbi4gRGVmYXVsdCBpcyAwLiAqL1xyXG4gICAgeT86IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcbiAgICAvKiogQmx1ciByYWRpdXMuIERlZmF1bHQgaXMgMWVtLiAqL1xyXG4gICAgYmx1cj86IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcbiAgICAvKiogU3ByZWFkIHJhZGl1cy4gRGVmYXVsdCBpcyAxZW0uICovXHJcbiAgICBzcHJlYWQ/OiB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG4gICAgLyoqIFNoYWRvdyBjb2xvci4gRGVmYXVsdCBpcyAweGMwYzBjMC4gKi9cclxuXHRjb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxufTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3ggc2hhZG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJveFNoYWRvd1N0eWxlVHlwZSA9IFNpbmdsZUJveFNoYWRvdyB8IFNpbmdsZUJveFNoYWRvd1tdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBib3ggc2hhZG93IHN0eWxlIHJlcHJlc2VudGVkIGFzIGFuIG9iamVjdCB3aXRoIGZpZWxkcyBjb3JyZXNwb25kaW5nIHRvIGJveCBzaGFkb3dcclxuICogcHJvcGVydGllcyB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUgYm94IHNoYWRvdyBvYmplY3QuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZUJveFNoYWRvd1RvQ3NzU3RyaW5nKCB2YWw6IFNpbmdsZUJveFNoYWRvdyk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXZhbClcclxuICAgICAgICByZXR1cm4gXCJub25lXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcImJvb2xlYW5cIilcclxuICAgICAgICByZXR1cm4gXCIwIDAgMWVtIDFlbSAjYzBjMGMwXCI7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiBgMCAwICR7dmFsfWVtICR7dmFsfTFlbSAjYzBjMGMwYDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMub2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsXHJcbiAgICAgICAgICAgIFtcImluc2V0XCIsIHYgPT4gdiA9PT0gdHJ1ZSA/IFwiaW5zZXRcIiA6IFwiXCJdLFxyXG4gICAgICAgICAgICBbXCJ4XCIsIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wieVwiLCB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFtcImJsdXJcIiwgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJzcHJlYWRcIiwgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvQ3NzU3RyaW5nXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3ggc2hhZG93IHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gb2JqIEJveCBzaGFkb3cgdmFsdWUuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJveFNoYWRvd1RvQ3NzU3RyaW5nKCB2YWw6IEJveFNoYWRvd1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSggdmFsKSlcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBzaW5nbGVCb3hTaGFkb3dUb0Nzc1N0cmluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZUJveFNoYWRvd1RvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3gtc2l6aW5nIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJveFNpemluZ1N0eWxlVHlwZSA9IFwiY29udGVudC1ib3hcIiB8IFwiYm9yZGVyLWJveFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBicmVhay1hZnRlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCcmVha0FmdGVyU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImF2b2lkXCIgfCBcImFsd2F5c1wiIHwgXCJhbGxcIiB8IFwiYXZvaWQtcGFnZVwiIHwgXCJwYWdlXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInJlY3RvXCIgfCBcInZlcnNvXCIgfCBcImF2b2lkLWNvbHVtblwiIHwgXCJjb2x1bW5cIiB8XHJcbiAgICAgICAgICAgICAgICBcImF2b2lkLXJlZ2lvblwiIHwgXCJyZWdpb25cIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYnJlYWstYmVmb3JlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJyZWFrQmVmb3JlU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImF2b2lkXCIgfCBcImFsd2F5c1wiIHwgXCJhbGxcIiB8IFwiYXZvaWQtcGFnZVwiIHwgXCJwYWdlXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcInJlY3RvXCIgfCBcInZlcnNvXCIgfCBcImF2b2lkLWNvbHVtblwiIHwgXCJjb2x1bW5cIiB8XHJcbiAgICAgICAgICAgICAgICBcImF2b2lkLXJlZ2lvblwiIHwgXCJyZWdpb25cIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYnJlYWstaW5zaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJyZWFrSW5zaWRlU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImF2b2lkXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwiYXZvaWQtY29sdW1uXCIgfCBcImF2b2lkLXJlZ2lvblwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjYXB0aW9uLXNpZGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2FwdGlvblNpZGVTdHlsZVR5cGUgPSBcInRvcFwiIHwgXCJib3R0b21cIiB8IFwiYmxvY2stc3RhcnRcIiB8IFwiYmxvY2stZW5kXCIgfCBcImlubGluZS1zdGFydFwiIHwgXCJpbmxpbmUtZW5kXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNhcmV0LWNvbG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENhcmV0Q29sb3JTdHlsZVR5cGUgPSBcImF1dG9cIiB8IENvbG9yX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNsZWFyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENsZWFyU3R5bGVUeXBlID0gXCJub25lXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiYm90aFwiIHwgXCJpbmxpbmUtc3RhcnRcIiB8IFwiaW5saW5lLWVuZFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjbGVhciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDbGlwU3R5bGVUeXBlID0gXCJhdXRvXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUsIFxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBjbGlwIHN0eWxlIHZhbHVlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gdmFsIENsaXAgdmFsdWUuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsaXBUb0Nzc1N0cmluZyggdmFsOiBDbGlwU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGByZWN0KCR7dXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpfWA7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2xvckludGVycG9sYXRpb25GaWx0ZXJzU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInNSR0JcIiB8IFwibGluZWFyUkdCXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1jb3VudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5Db3VudFN0eWxlVHlwZSA9IFwiYXV0b1wiIHwgbnVtYmVyIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tZmlsbCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5GaWxsU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImJhbGFuY2VcIiB8IFwiYmFsYW5jZS1hbGxcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGdhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVHYXBfU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBjb2x1bW4gcnVsZS4gQ29sdW1uIHJ1bGUgY2FuIGJlIHByZXNlbnRlZCBieSB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gc3RyaW5nIC0gbGl0ZXJhbCBDU1MgYm94IHNoYWRvdyBzdHJpbmcuXHJcbiAqICAgLSBvYmplY3QgLSBmaWVsZHMgc3BlY2lmeSBjb2x1bW4gcnVsZSBwYXJ0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbHVtblJ1bGVTdHlsZVR5cGUgPSBzdHJpbmcgfCB1dGlscy5CYXNlX1N0eWxlVHlwZSB8XHJcbiAgICB7XHJcbiAgICAgICAgLyoqIENvbHVtbiBydWxlIHdpZHRoLiAqL1xyXG4gICAgICAgIHdpZHRoPzogQm9yZGVyV2lkdGhTdHlsZVR5cGU7XHJcbiAgICAgICAgLyoqIENvbHVtbiBydWxlIHN0eWxlLiAqL1xyXG4gICAgICAgIHN0eWxlPzogQm9yZGVyU3R5bGVTdHlsZVR5cGU7XHJcbiAgICAgICAgLyoqIENvbHVtbiBydWxlIGNvbG9yLiAqL1xyXG4gICAgICAgIGNvbG9yPzogU2luZ2xlR2FwX1N0eWxlVHlwZTtcclxuICAgIH07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1uIHJ1bGUgc3R5bGUgcmVwcmVzZW50ZWQgYXMgYW4gb2JqZWN0IHdpdGggZmllbGRzIGNvcnJlc3BvbmRpbmcgdG8gY29sdW1uIHJ1bGVcclxuICogcHJvcGVydGllcyB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIHZhbCBDb2x1bW4gcnVsZSBzdHlsZSB2YWx1ZS4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sdW1uUnVsZVRvQ3NzU3RyaW5nKCB2YWw6IENvbHVtblJ1bGVTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCF2YWwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLm9iamVjdFRvQ3NzU3RyaW5nKCB2YWwsIGZhbHNlLFxyXG4gICAgICAgICAgICBbXCJ3aWR0aFwiLCBib3JkZXJXaWR0aFRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wic3R5bGVcIiwgYm9yZGVyU3R5bGVUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFtcImNvbG9yXCIsIGNvbG9yVG9Dc3NTdHJpbmddXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sdW1uLXNwYW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uU3BhblN0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJhbGxcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sdW1ucyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5zU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBudW1iZXIgfCBbXCJhdXRvXCIgfCBudW1iZXIsIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGVdIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sdW1ucyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIHZhbCBDb2x1bW5zIHN0eWxlIHZhbHVlLiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW5zVG9Dc3NTdHJpbmcoIHZhbDogQ29sdW1uc1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoIXZhbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2YWxbMF0udG9TdHJpbmcoKSArIFwiIFwiICsgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbFsxXSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsb2F0IChjc3NGbG9hdCkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxvYXRTdHlsZVR5cGUgPSBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwibm9uZVwiIHwgXCJpbmxpbmUtc3RhcnRcIiB8IFwiaW5saW5lLWVuZFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjdXJzb3Igc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ3Vyc29yU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImRlZmF1bHRcIiB8IFwibm9uZVwiIHwgXCJjb250ZXh0LW1lbnVcIiB8IFwiaGVscFwiIHwgXCJwb2ludGVyXCIgfCBcInByb2dyZXNzXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJ3YWl0XCIgfCBcImNlbGxcIiB8IFwiY3Jvc3NoYWlyXCIgfCBcInRleHRcIiB8IFwidmVydGljYWwtdGV4dFwiIHwgXCJhbGlhc1wiIHwgXCJjb3B5XCIgfCBcIm1vdmVcIiB8XHJcbiAgICAgICAgICAgICAgICBcIm5vLWRyb3BcIiB8IFwibm90LWFsbG93ZWRcIiB8IFwiZS1yZXNpemVcIiB8IFwibi1yZXNpemVcIiB8IFwibmUtcmVzaXplXCIgfCBcIm53LXJlc2l6ZVwiIHxcclxuICAgICAgICAgICAgICAgIFwicy1yZXNpemVcIiB8IFwic2UtcmVzaXplXCIgfCBcInN3LXJlc2l6ZVwiIHwgXCJ3LXJlc2l6ZVwiIHwgXCJldy1yZXNpemVcIiB8IFwibnMtcmVzaXplXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJuZXN3LXJlc2l6ZVwiIHwgXCJud3NlLXJlc2l6ZVwiIHwgXCJjb2wtcmVzaXplXCIgfCBcInJvdy1yZXNpemVcIiB8IFwiYWxsLXNjcm9sbFwiIHwgXCJ6b29tLWluXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJ6b29tLW91dFwiIHwgXCJncmFiXCIgfCBcImdyYWJiaW5nXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGRpcmVjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBEaXJlY3Rpb25TdHlsZVR5cGUgPSBcImx0clwiIHwgXCJydGxcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZGlzcGxheSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBEaXNwbGF5U3R5bGVUeXBlID0gXCJibG9ja1wiIHwgXCJpbmxpbmVcIiB8IFwicnVuLWluXCIgfCBcImNvbnRlbnRzXCIgfCBcIm5vbmVcIiB8XHJcbiAgICAgICAgICAgICAgICBcImlubGluZS1ibG9ja1wiIHwgXCJpbmxpbmUtbGlzdC1pdGVtXCIgfCBcImlubGluZS10YWJsZVwiIHwgXCJpbmxpbmUtZmxleFwiIHwgXCJpbmxpbmUtZ3JpZFwiIHxcclxuICAgICAgICAgICAgICAgIFwiZmxvd1wiIHwgXCJmbG93LXJvb3RcIiB8IFwidGFibGVcIiB8IFwiZmxleFwiIHwgXCJncmlkXCIgfCBcInJ1YnlcIiB8XHJcbiAgICAgICAgICAgICAgICBcInRhYmxlLXJvdy1ncm91cFwiIHwgXCJ0YWJsZS1oZWFkZXItZ3JvdXBcIiB8IFwidGFibGUtZm9vdGVyLWdyb3VwXCIgfCBcInRhYmxlLXJvd1wiIHwgXCJ0YWJsZS1jZWxsXCIgfFxyXG4gICAgICAgICAgICAgICAgICAgIFwidGFibGUtY29sdW1uLWdyb3VwXCIgfCBcInRhYmxlLWNvbHVtblwiIHwgXCJ0YWJsZS1jYXB0aW9uXCIgfCBcInJ1YnktYmFzZVwiIHwgXCJydWJ5LXRleHRcIiB8XHJcbiAgICAgICAgICAgICAgICAgICAgXCJydWJ5LWJhc2UtY29udGFpbmVyXCIgfCBcInJ1YnktdGV4dC1jb250YWluZXJcIiB8XHJcbiAgICAgICAgICAgICAgICBcImxpc3QtaXRlbVwiIHwgXCJsaXN0LWl0ZW0gYmxvY2tcIiB8IFwibGlzdC1pdGVtIGlubGluZVwiIHwgXCJsaXN0LWl0ZW0gZmxvd1wiIHwgXCJsaXN0LWl0ZW0gZmxvdy1yb290XCIgfFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGlzdC1pdGVtIGJsb2NrIGZsb3dcIiB8IFwibGlzdC1pdGVtIGJsb2NrIGZsb3ctcm9vdFwiIHwgXCJmbG93IGxpc3QtaXRlbSBibG9ja1wiIHxcclxuICAgICAgICAgICAgICAgIHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuLyoqIFR5cGUgZm9yIGRvbWluYW50LWJhc2VsaW5lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIERvbWluYW50QmFzZWxpbmVTdHlsZVR5cGUgPSBcImF1dG9cIiB8IFwidGV4dC1ib3R0b21cIiB8IFwiYWxwaGFiZXRpY1wiIHwgXCJpZGVvZ3JhcGhpY1wiIHwgXCJtaWRkbGVcIiB8XHJcbiAgICAgICAgICAgICAgICBcImNlbnRyYWxcIiB8IFwibWF0aGVtYXRpY2FsXCIgfCBcImhhbmdpbmdcIiB8IFwidGV4dC10b3BcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZW1wdHktY2VsbHMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRW1wdHlDZWxsc1N0eWxlVHlwZSA9IFwic2hvd1wiIHwgXCJoaWRlXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZpbGwtcnVsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGaWxsUnVsZVN0eWxlVHlwZSA9IFwibm9uemVyb1wiIHwgXCJldmVub2RkXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtYmFzaXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleEJhc2lzU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImNvbnRlbnRcIiB8IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmxleFN0eWxlVHlwZSA9IEZsZXhCYXNpc1N0eWxlVHlwZSB8IFtudW1iZXIsbnVtYmVyXSB8IFtudW1iZXIsbnVtYmVyLEZsZXhCYXNpc1N0eWxlVHlwZV07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgZmxleCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBGbGV4IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmxleFRvQ3NzU3RyaW5nKCB2YWw6IEZsZXhTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh2YWwubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICByZXR1cm4gdmFsLmpvaW4oIFwiIFwiKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgcyA9IHZhbFswXSArIFwiIFwiICsgdmFsWzFdICsgXCIgXCI7XHJcbiAgICAgICAgICAgIGxldCB2ID0gdmFsWzJdO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICBzICs9IHY7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICBzICs9IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtZGlyZWN0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhEaXJlY3Rpb25TdHlsZVR5cGUgPSBcInJvd1wiIHwgXCJyb3ctcmV2ZXJzZVwiIHwgXCJjb2x1bW5cIiB8IFwiY29sdW1uLXJldmVyc2VcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleC13cmFwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhXcmFwU3R5bGVUeXBlID0gXCJub3dyYXBcIiB8IFwid3JhcFwiIHwgXCJ3cmFwLXJldmVyc2VcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZmxleC1mbG93IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhGbG93U3R5bGVUeXBlID0gRmxleERpcmVjdGlvblN0eWxlVHlwZSB8IEZsZXhXcmFwU3R5bGVUeXBlIHxcclxuICAgICAgICAgICAgICAgIFtGbGV4RGlyZWN0aW9uU3R5bGVUeXBlLEZsZXhXcmFwU3R5bGVUeXBlXSB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGZsZXgtZmxvdyBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBGbGV4LWZsb3cgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGV4Rmxvd1RvQ3NzU3RyaW5nKCB2YWw6IEZsZXhGbG93U3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtc3R5bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFN0eWxlU3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwiaXRhbGljXCIgfCBcIm9ibGlxdWVcIiB8IHV0aWxzLlNpbmdsZUFuZ2xlX1N0eWxlVHlwZTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmb250LXN0eWxlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEZvbnQtc3R5bGUgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb250U3R5bGVUb0Nzc1N0cmluZyggdmFsOiBGb250U3R5bGVTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdXRpbHMuc2luZ2xlQW5nbGVUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgZm9udC13ZWlnaHQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRm9udFdlaWdodFN0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcImJvbGRcIiB8IFwiYm9sZGVyXCIgfCBcImxpZ2h0ZXJcIiB8XHJcbiAgICAgICAgICAgICAgICAxMDAgfCAyMDAgfCAzMDAgfCA0MDAgfCA1MDAgfCA2MDAgfCA3MDAgfCA4MDAgfCA5MDAgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgU3R5bGVUeXBlID0gc3RyaW5nIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgcmVwcmVzZW50aW5nIGEgY29sbGVjdGlvbiBvZiBzdHlsZSBwcm9wZXJ0aWVzIGFuZCB0aGVpciB2YWx1ZXMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlc2V0XHJcbntcclxuICAgIGFsaWduQ29udGVudD86IEFsaWduQ29udGVudFN0eWxlVHlwZTtcclxuICAgIGFsaWduSXRlbXM/OiBBbGlnbkl0ZW1zU3R5bGVUeXBlO1xyXG4gICAgYWxpZ25TZWxmPzogQWxpZ25TZWxmU3R5bGVUeXBlO1xyXG4gICAgYWxpZ25tZW50QmFzZWxpbmU/OiBBbGlnbm1lbnRCYXNlbGluZVN0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbj86IEFuaW1hdGlvblN0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkRlbGF5PzogdXRpbHMuTXVsdGlUaW1lX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkRpcmVjdGlvbj86IEFuaW1hdGlvbkRpcmVjdGlvblN0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uPzogdXRpbHMuTXVsdGlUaW1lX1N0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbkZpbGxNb2RlPzogQW5pbWF0aW9uRmlsbE1vZGVTdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudD86IEFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50U3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uTmFtZT86IEFuaW1hdGlvbk5hbWVTdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25QbGF5U3RhdGU/OiBBbmltYXRpb25QbGF5U3RhdGVTdHlsZVR5cGU7XHJcblx0YW5pbWF0aW9uVGltaW5nRnVuY3Rpb24/OiBBbmltYXRpb25UaW1pbmdGdW5jdGlvblN0eWxlVHlwZTtcclxuXHRcclxuICAgIGJhY2tmYWNlVmlzaWJpbGl0eT86IEJhY2tmYWNlVmlzaWJpbGl0eU1vZGVTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kPzogU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ/OiBCYWNrZ3JvdW5kQXR0YWNobWVudFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRDbGlwPzogQmFja2dyb3VuZENsaXBTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U/OiBTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kT3JpZ2luPzogQmFja2dyb3VuZE9yaWdpblN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbj86IHV0aWxzLk11bHRpUG9zaXRpb25fU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWD86IHN0cmluZztcclxuICAgIGJhY2tncm91bmRQb3NpdGlvblk/OiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0PzogQmFja2dyb3VuZFJlcGVhdFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRTaXplPzogQmFja2dyb3VuZFNpemVTdHlsZVR5cGU7XHJcbiAgICBiYXNlbGluZVNoaWZ0PzogQmFzZWxpbmVTaGlmdFN0eWxlVHlwZTtcclxuICAgIGJvcmRlcj86IEJvcmRlclNpZGVfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQm90dG9tPzogQm9yZGVyU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCb3R0b21Db2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM/OiBTaW5nbGVDb3JuZXJSYWRpdXNfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBTaW5nbGVDb3JuZXJSYWRpdXNfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQm90dG9tU3R5bGU/OiBCb3JkZXJTaWRlU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQm90dG9tV2lkdGg/OiBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQ29sbGFwc2U/OiBCb3JkZXJDb2xhcHNlU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQ29sb3I/OiBCb3JkZXJDb2xvclN0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlPzogc3RyaW5nO1xyXG4gICAgYm9yZGVySW1hZ2VPdXRzZXQ/OiBCb3JkZXJJbWFnZU91dHNldFN0eWxlVHlwZTtcclxuICAgIGJvcmRlckltYWdlUmVwZWF0PzogQm9yZGVySW1hZ2VSZXBlYXRTdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVNsaWNlPzogc3RyaW5nO1xyXG4gICAgYm9yZGVySW1hZ2VTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICBib3JkZXJJbWFnZVdpZHRoPzogQm9yZGVySW1hZ2VXaWR0aFN0eWxlVHlwZTtcclxuICAgIGJvcmRlckxlZnQ/OiBCb3JkZXJTaWRlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckxlZnRDb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckxlZnRTdHlsZT86IEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJMZWZ0V2lkdGg/OiBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyUmFkaXVzPzogQm9yZGVyUmFkaXVzU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyUmlnaHQ/OiBCb3JkZXJTaWRlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJSaWdodFN0eWxlPzogQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclJpZ2h0V2lkdGg/OiBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyU3BhY2luZz86IEJvcmRlclNwYWNpbmdTdHlsZVR5cGU7XHJcbiAgICBib3JkZXJTdHlsZT86IEJvcmRlclN0eWxlU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyVG9wPzogQm9yZGVyU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJUb3BDb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM/OiBTaW5nbGVDb3JuZXJSYWRpdXNfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBTaW5nbGVDb3JuZXJSYWRpdXNfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyVG9wU3R5bGU/OiBCb3JkZXJTaWRlU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyVG9wV2lkdGg/OiBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyV2lkdGg/OiBCb3JkZXJXaWR0aFN0eWxlVHlwZTtcclxuICAgIGJvdHRvbT86IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcbiAgICBib3hTaGFkb3c/OiBCb3hTaGFkb3dTdHlsZVR5cGU7XHJcbiAgICBib3hTaXppbmc/OiBCb3hTaXppbmdTdHlsZVR5cGU7XHJcbiAgICBicmVha0FmdGVyPzogQnJlYWtBZnRlclN0eWxlVHlwZTtcclxuICAgIGJyZWFrQmVmb3JlPzogQnJlYWtCZWZvcmVTdHlsZVR5cGU7XHJcblx0YnJlYWtJbnNpZGU/OiBCcmVha0luc2lkZVN0eWxlVHlwZTtcclxuXHRcclxuICAgIGNhcHRpb25TaWRlPzogQ2FwdGlvblNpZGVTdHlsZVR5cGU7XHJcbiAgICBjYXJldENvbG9yPzogQ2FyZXRDb2xvclN0eWxlVHlwZTtcclxuICAgIGNsZWFyPzogQ2xlYXJTdHlsZVR5cGU7XHJcbiAgICBjbGlwPzogQ2xpcFN0eWxlVHlwZTtcclxuICAgIGNsaXBQYXRoPzogc3RyaW5nO1xyXG4gICAgY2xpcFJ1bGU/OiBzdHJpbmc7XHJcbiAgICBjb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnM/OiBDb2xvckludGVycG9sYXRpb25GaWx0ZXJzU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uQ291bnQ/OiBDb2x1bW5Db3VudFN0eWxlVHlwZTtcclxuICAgIGNvbHVtbkZpbGw/OiBDb2x1bW5GaWxsU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uR2FwPzogU2luZ2xlR2FwX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtblJ1bGU/OiBDb2x1bW5SdWxlU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uUnVsZUNvbG9yPzogQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uUnVsZVN0eWxlPzogQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtblJ1bGVXaWR0aD86IEJvcmRlclNpZGVXaWR0aF9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5TcGFuPzogQ29sdW1uU3BhblN0eWxlVHlwZTtcclxuICAgIGNvbHVtbldpZHRoPzogdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbnM/OiBDb2x1bW5zU3R5bGVUeXBlO1xyXG4gICAgY29udGVudD86IHN0cmluZztcclxuICAgIGNvdW50ZXJJbmNyZW1lbnQ/OiBTdHlsZVR5cGU7XHJcbiAgICBjb3VudGVyUmVzZXQ/OiBTdHlsZVR5cGU7XHJcbiAgICBjc3NGbG9hdD86IEZsb2F0U3R5bGVUeXBlO1xyXG4gICAgY3NzVGV4dD86IHN0cmluZztcclxuXHRjdXJzb3I/OiBDdXJzb3JTdHlsZVR5cGU7XHJcblx0XHJcbiAgICBkaXJlY3Rpb24/OiBEaXJlY3Rpb25TdHlsZVR5cGU7XHJcbiAgICBkaXNwbGF5PzogRGlzcGxheVN0eWxlVHlwZTtcclxuICAgIGRvbWluYW50QmFzZWxpbmU/OiBEb21pbmFudEJhc2VsaW5lU3R5bGVUeXBlO1xyXG5cclxuICAgIGVtcHR5Q2VsbHM/OiBFbXB0eUNlbGxzU3R5bGVUeXBlO1xyXG5cdGVuYWJsZUJhY2tncm91bmQ/OiBzdHJpbmc7XHJcblx0XHJcbiAgICBmaWxsPzogU3R5bGVUeXBlO1xyXG4gICAgZmlsbE9wYWNpdHk/OiBTdHlsZVR5cGU7XHJcbiAgICBmaWxsUnVsZT86IEZpbGxSdWxlU3R5bGVUeXBlO1xyXG4gICAgZmlsdGVyPzogc3RyaW5nO1xyXG4gICAgZmxleD86IEZsZXhTdHlsZVR5cGU7XHJcbiAgICBmbGV4QmFzaXM/OiBGbGV4QmFzaXNTdHlsZVR5cGU7XHJcbiAgICBmbGV4RGlyZWN0aW9uPzogRmxleERpcmVjdGlvblN0eWxlVHlwZTtcclxuICAgIGZsZXhGbG93PzogRmxleEZsb3dTdHlsZVR5cGU7XHJcbiAgICBmbGV4R3Jvdz86IHV0aWxzLlNpbmdsZU51bWJlcl9TdHlsZVR5cGU7XHJcbiAgICBmbGV4U2hyaW5rPzogdXRpbHMuU2luZ2xlTnVtYmVyX1N0eWxlVHlwZTtcclxuICAgIGZsZXhXcmFwPzogRmxleFdyYXBTdHlsZVR5cGU7XHJcbiAgICBmbG9vZENvbG9yPzogQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgZmxvb2RPcGFjaXR5Pzogc3RyaW5nO1xyXG4gICAgZm9udD86IHN0cmluZztcclxuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XHJcbiAgICBmb250RmVhdHVyZVNldHRpbmdzPzogc3RyaW5nO1xyXG4gICAgZm9udEtlcm5pbmc/OiBzdHJpbmc7XHJcbiAgICBmb250U2l6ZT86IHN0cmluZztcclxuICAgIGZvbnRTaXplQWRqdXN0Pzogc3RyaW5nO1xyXG4gICAgZm9udFN0cmV0Y2g/OiBzdHJpbmc7XHJcbiAgICBmb250U3R5bGU/OiBGb250U3R5bGVTdHlsZVR5cGU7XHJcbiAgICBmb250U3ludGhlc2lzPzogc3RyaW5nO1xyXG4gICAgZm9udFZhcmlhbnQ/OiBzdHJpbmc7XHJcbiAgICBmb250VmFyaWFudENhcHM/OiBzdHJpbmc7XHJcbiAgICBmb250VmFyaWFudEVhc3RBc2lhbj86IHN0cmluZztcclxuICAgIGZvbnRWYXJpYW50TGlnYXR1cmVzPzogc3RyaW5nO1xyXG4gICAgZm9udFZhcmlhbnROdW1lcmljPzogc3RyaW5nO1xyXG4gICAgZm9udFZhcmlhbnRQb3NpdGlvbj86IHN0cmluZztcclxuXHRmb250V2VpZ2h0PzogRm9udFdlaWdodFN0eWxlVHlwZTtcclxuXHRcclxuICAgIGdhcD86IHN0cmluZztcclxuICAgIGdseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsPzogU3R5bGVUeXBlO1xyXG4gICAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsPzogc3RyaW5nO1xyXG4gICAgZ3JpZD86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRBcmVhPzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEF1dG9Db2x1bW5zPzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEF1dG9GbG93PzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZEF1dG9Sb3dzPzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtbj86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW5FbmQ/OiBTdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uR2FwPzogU2luZ2xlR2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW5TdGFydD86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRHYXA/OiBzdHJpbmc7XHJcbiAgICBncmlkUm93PzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFJvd0VuZD86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRSb3dHYXA/OiBTaW5nbGVHYXBfU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFJvd1N0YXJ0PzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFRlbXBsYXRlPzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFRlbXBsYXRlQXJlYXM/OiBTdHlsZVR5cGU7XHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zPzogU3R5bGVUeXBlO1xyXG5cdGdyaWRUZW1wbGF0ZVJvd3M/OiBTdHlsZVR5cGU7XHJcblx0XHJcbiAgICBoZWlnaHQ/OiB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG5cdGh5cGhlbnM/OiBzdHJpbmc7XHJcblx0XHJcbiAgICBpbWFnZU9yaWVudGF0aW9uPzogc3RyaW5nO1xyXG4gICAgaW1hZ2VSZW5kZXJpbmc/OiBzdHJpbmc7XHJcblx0aW1lTW9kZT86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIGp1c3RpZnlDb250ZW50Pzogc3RyaW5nO1xyXG4gICAganVzdGlmeUl0ZW1zPzogc3RyaW5nO1xyXG5cdGp1c3RpZnlTZWxmPzogc3RyaW5nO1xyXG5cdFxyXG5cdGtlcm5pbmc/OiBTdHlsZVR5cGU7XHJcblx0XHJcbiAgICBsYXlvdXRHcmlkPzogU3R5bGVUeXBlO1xyXG4gICAgbGF5b3V0R3JpZENoYXI/OiBTdHlsZVR5cGU7XHJcbiAgICBsYXlvdXRHcmlkTGluZT86IFN0eWxlVHlwZTtcclxuICAgIGxheW91dEdyaWRNb2RlPzogU3R5bGVUeXBlO1xyXG4gICAgbGF5b3V0R3JpZFR5cGU/OiBTdHlsZVR5cGU7XHJcbiAgICBsZWZ0PzogdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuICAgIGxldHRlclNwYWNpbmc/OiBzdHJpbmc7XHJcbiAgICBsaWdodGluZ0NvbG9yPzogQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgbGluZUJyZWFrPzogc3RyaW5nO1xyXG4gICAgbGluZUhlaWdodD86IFN0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZT86IFN0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZUltYWdlPzogU3R5bGVUeXBlO1xyXG4gICAgbGlzdFN0eWxlUG9zaXRpb24/OiBTdHlsZVR5cGU7XHJcblx0bGlzdFN0eWxlVHlwZT86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIG1hcmdpbj86IFN0eWxlVHlwZTtcclxuICAgIG1hcmdpbkJvdHRvbT86IFN0eWxlVHlwZTtcclxuICAgIG1hcmdpbkxlZnQ/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXJnaW5SaWdodD86IFN0eWxlVHlwZTtcclxuICAgIG1hcmdpblRvcD86IFN0eWxlVHlwZTtcclxuICAgIG1hcmtlcj86IFN0eWxlVHlwZTtcclxuICAgIG1hcmtlckVuZD86IFN0eWxlVHlwZTtcclxuICAgIG1hcmtlck1pZD86IFN0eWxlVHlwZTtcclxuICAgIG1hcmtlclN0YXJ0PzogU3R5bGVUeXBlO1xyXG4gICAgbWFzaz86IHN0cmluZztcclxuICAgIG1hc2tDb21wb3NpdGU/OiBzdHJpbmc7XHJcbiAgICBtYXNrSW1hZ2U/OiBzdHJpbmc7XHJcbiAgICBtYXNrUG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgICBtYXNrUmVwZWF0Pzogc3RyaW5nO1xyXG4gICAgbWFza1NpemU/OiBzdHJpbmc7XHJcbiAgICBtYXNrVHlwZT86IHN0cmluZztcclxuICAgIG1heEhlaWdodD86IFN0eWxlVHlwZTtcclxuICAgIG1heFdpZHRoPzogU3R5bGVUeXBlO1xyXG4gICAgbWluSGVpZ2h0PzogU3R5bGVUeXBlO1xyXG5cdG1pbldpZHRoPzogU3R5bGVUeXBlO1xyXG5cdFxyXG4gICAgbXNDb250ZW50Wm9vbUNoYWluaW5nPzogU3R5bGVUeXBlO1xyXG4gICAgbXNDb250ZW50Wm9vbUxpbWl0PzogU3R5bGVUeXBlO1xyXG4gICAgbXNDb250ZW50Wm9vbUxpbWl0TWF4PzogYW55O1xyXG4gICAgbXNDb250ZW50Wm9vbUxpbWl0TWluPzogYW55O1xyXG4gICAgbXNDb250ZW50Wm9vbVNuYXA/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0NvbnRlbnRab29tU25hcFBvaW50cz86IFN0eWxlVHlwZTtcclxuICAgIG1zQ29udGVudFpvb21TbmFwVHlwZT86IFN0eWxlVHlwZTtcclxuICAgIG1zQ29udGVudFpvb21pbmc/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0Zsb3dGcm9tPzogU3R5bGVUeXBlO1xyXG4gICAgbXNGbG93SW50bz86IFN0eWxlVHlwZTtcclxuICAgIG1zRm9udEZlYXR1cmVTZXR0aW5ncz86IFN0eWxlVHlwZTtcclxuICAgIG1zR3JpZENvbHVtbj86IGFueTtcclxuICAgIG1zR3JpZENvbHVtbkFsaWduPzogU3R5bGVUeXBlO1xyXG4gICAgbXNHcmlkQ29sdW1uU3Bhbj86IGFueTtcclxuICAgIG1zR3JpZENvbHVtbnM/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0dyaWRSb3c/OiBhbnk7XHJcbiAgICBtc0dyaWRSb3dBbGlnbj86IFN0eWxlVHlwZTtcclxuICAgIG1zR3JpZFJvd1NwYW4/OiBhbnk7XHJcbiAgICBtc0dyaWRSb3dzPzogU3R5bGVUeXBlO1xyXG4gICAgbXNIaWdoQ29udHJhc3RBZGp1c3Q/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0h5cGhlbmF0ZUxpbWl0Q2hhcnM/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0h5cGhlbmF0ZUxpbWl0TGluZXM/OiBhbnk7XHJcbiAgICBtc0h5cGhlbmF0ZUxpbWl0Wm9uZT86IGFueTtcclxuICAgIG1zSHlwaGVucz86IFN0eWxlVHlwZTtcclxuICAgIG1zSW1lQWxpZ24/OiBTdHlsZVR5cGU7XHJcbiAgICBtc092ZXJmbG93U3R5bGU/OiBTdHlsZVR5cGU7XHJcbiAgICBtc1Njcm9sbENoYWluaW5nPzogU3R5bGVUeXBlO1xyXG4gICAgbXNTY3JvbGxMaW1pdD86IFN0eWxlVHlwZTtcclxuICAgIG1zU2Nyb2xsTGltaXRYTWF4PzogYW55O1xyXG4gICAgbXNTY3JvbGxMaW1pdFhNaW4/OiBhbnk7XHJcbiAgICBtc1Njcm9sbExpbWl0WU1heD86IGFueTtcclxuICAgIG1zU2Nyb2xsTGltaXRZTWluPzogYW55O1xyXG4gICAgbXNTY3JvbGxSYWlscz86IFN0eWxlVHlwZTtcclxuICAgIG1zU2Nyb2xsU25hcFBvaW50c1g/OiBTdHlsZVR5cGU7XHJcbiAgICBtc1Njcm9sbFNuYXBQb2ludHNZPzogU3R5bGVUeXBlO1xyXG4gICAgbXNTY3JvbGxTbmFwVHlwZT86IFN0eWxlVHlwZTtcclxuICAgIG1zU2Nyb2xsU25hcFg/OiBTdHlsZVR5cGU7XHJcbiAgICBtc1Njcm9sbFNuYXBZPzogU3R5bGVUeXBlO1xyXG4gICAgbXNTY3JvbGxUcmFuc2xhdGlvbj86IFN0eWxlVHlwZTtcclxuICAgIG1zVGV4dENvbWJpbmVIb3Jpem9udGFsPzogU3R5bGVUeXBlO1xyXG4gICAgbXNUZXh0U2l6ZUFkanVzdD86IGFueTtcclxuICAgIG1zVG91Y2hBY3Rpb24/OiBTdHlsZVR5cGU7XHJcbiAgICBtc1RvdWNoU2VsZWN0PzogU3R5bGVUeXBlO1xyXG4gICAgbXNVc2VyU2VsZWN0PzogU3R5bGVUeXBlO1xyXG4gICAgbXNXcmFwRmxvdz86IHN0cmluZztcclxuICAgIG1zV3JhcE1hcmdpbj86IGFueTtcclxuXHRtc1dyYXBUaHJvdWdoPzogc3RyaW5nO1xyXG5cdFxyXG4gICAgb2JqZWN0Rml0Pzogc3RyaW5nO1xyXG4gICAgb2JqZWN0UG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgICBvcGFjaXR5PzogU3R5bGVUeXBlO1xyXG4gICAgb3JkZXI/OiBTdHlsZVR5cGU7XHJcbiAgICBvcnBoYW5zPzogbnVtYmVyIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcbiAgICBvdXRsaW5lPzogc3RyaW5nO1xyXG4gICAgb3V0bGluZUNvbG9yPzogQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgb3V0bGluZU9mZnNldD86IHN0cmluZztcclxuICAgIG91dGxpbmVTdHlsZT86IHN0cmluZztcclxuICAgIG91dGxpbmVXaWR0aD86IHN0cmluZztcclxuICAgIG92ZXJmbG93Pzogc3RyaW5nO1xyXG4gICAgb3ZlcmZsb3dBbmNob3I/OiBzdHJpbmc7XHJcbiAgICBvdmVyZmxvd1dyYXA/OiBzdHJpbmc7XHJcbiAgICBvdmVyZmxvd1g/OiBzdHJpbmc7XHJcblx0b3ZlcmZsb3dZPzogc3RyaW5nO1xyXG5cdFxyXG4gICAgcGFkZGluZz86IFN0eWxlVHlwZTtcclxuICAgIHBhZGRpbmdCb3R0b20/OiBTdHlsZVR5cGU7XHJcbiAgICBwYWRkaW5nTGVmdD86IFN0eWxlVHlwZTtcclxuICAgIHBhZGRpbmdSaWdodD86IFN0eWxlVHlwZTtcclxuICAgIHBhZGRpbmdUb3A/OiBTdHlsZVR5cGU7XHJcbiAgICBwYWdlQnJlYWtBZnRlcj86IEJyZWFrQWZ0ZXJTdHlsZVR5cGU7XHJcbiAgICBwYWdlQnJlYWtCZWZvcmU/OiBCcmVha0JlZm9yZVN0eWxlVHlwZTtcclxuICAgIHBhZ2VCcmVha0luc2lkZT86IEJyZWFrSW5zaWRlU3R5bGVUeXBlO1xyXG4gICAgcGVuQWN0aW9uPzogU3R5bGVUeXBlO1xyXG4gICAgcGVyc3BlY3RpdmU/OiBTdHlsZVR5cGU7XHJcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbj86IFN0eWxlVHlwZTtcclxuICAgIHBsYWNlQ29udGVudD86IHN0cmluZztcclxuICAgIHBsYWNlSXRlbXM/OiBzdHJpbmc7XHJcbiAgICBwbGFjZVNlbGY/OiBzdHJpbmc7XHJcbiAgICBwb2ludGVyRXZlbnRzPzogU3R5bGVUeXBlO1xyXG5cdHBvc2l0aW9uPzogU3R5bGVUeXBlO1xyXG5cdFxyXG5cdHF1b3Rlcz86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIHJlc2l6ZT86IHN0cmluZztcclxuICAgIHJpZ2h0PzogdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuICAgIHJvdGF0ZT86IFN0eWxlVHlwZTtcclxuICAgIHJvd0dhcD86IFNpbmdsZUdhcF9TdHlsZVR5cGU7XHJcbiAgICBydWJ5QWxpZ24/OiBTdHlsZVR5cGU7XHJcbiAgICBydWJ5T3Zlcmhhbmc/OiBTdHlsZVR5cGU7XHJcblx0cnVieVBvc2l0aW9uPzogU3R5bGVUeXBlO1xyXG5cdFxyXG4gICAgc2NhbGU/OiBTdHlsZVR5cGU7XHJcbiAgICBzY3JvbGxCZWhhdmlvcj86IHN0cmluZztcclxuICAgIHN0b3BDb2xvcj86IFN0eWxlVHlwZTtcclxuICAgIHN0b3BPcGFjaXR5PzogU3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlPzogU3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlRGFzaGFycmF5PzogU3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlRGFzaG9mZnNldD86IFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZUxpbmVjYXA/OiBTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VMaW5lam9pbj86IFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZU1pdGVybGltaXQ/OiBTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VPcGFjaXR5PzogU3R5bGVUeXBlO1xyXG5cdHN0cm9rZVdpZHRoPzogU3R5bGVUeXBlO1xyXG5cdFxyXG4gICAgdGFiU2l6ZT86IHN0cmluZztcclxuICAgIHRhYmxlTGF5b3V0PzogU3R5bGVUeXBlO1xyXG4gICAgdGV4dEFsaWduPzogc3RyaW5nO1xyXG4gICAgdGV4dEFsaWduTGFzdD86IHN0cmluZztcclxuICAgIHRleHRBbmNob3I/OiBTdHlsZVR5cGU7XHJcbiAgICB0ZXh0Q29tYmluZVVwcmlnaHQ/OiBzdHJpbmc7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbj86IHN0cmluZztcclxuICAgIHRleHREZWNvcmF0aW9uQ29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbkxpbmU/OiBzdHJpbmc7XHJcbiAgICB0ZXh0RGVjb3JhdGlvblN0eWxlPzogc3RyaW5nO1xyXG4gICAgdGV4dEVtcGhhc2lzPzogc3RyaW5nO1xyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICB0ZXh0RW1waGFzaXNQb3NpdGlvbj86IHN0cmluZztcclxuICAgIHRleHRFbXBoYXNpc1N0eWxlPzogc3RyaW5nO1xyXG4gICAgdGV4dEluZGVudD86IHN0cmluZztcclxuICAgIHRleHRKdXN0aWZ5Pzogc3RyaW5nO1xyXG4gICAgdGV4dEthc2hpZGE/OiBTdHlsZVR5cGU7XHJcbiAgICB0ZXh0S2FzaGlkYVNwYWNlPzogU3R5bGVUeXBlO1xyXG4gICAgdGV4dE9yaWVudGF0aW9uPzogc3RyaW5nO1xyXG4gICAgdGV4dE92ZXJmbG93Pzogc3RyaW5nO1xyXG4gICAgdGV4dFNoYWRvdz86IHN0cmluZztcclxuICAgIHRleHRUcmFuc2Zvcm0/OiBzdHJpbmc7XHJcbiAgICB0ZXh0VW5kZXJsaW5lUG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgICB0b3A/OiB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG4gICAgdG91Y2hBY3Rpb24/OiBzdHJpbmc7XHJcbiAgICB0cmFuc2Zvcm0/OiBzdHJpbmc7XHJcbiAgICB0cmFuc2Zvcm1Cb3g/OiBzdHJpbmc7XHJcbiAgICB0cmFuc2Zvcm1PcmlnaW4/OiBzdHJpbmc7XHJcbiAgICB0cmFuc2Zvcm1TdHlsZT86IFN0eWxlVHlwZTtcclxuICAgIHRyYW5zaXRpb24/OiBzdHJpbmc7XHJcbiAgICB0cmFuc2l0aW9uRGVsYXk/OiBzdHJpbmc7XHJcbiAgICB0cmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XHJcbiAgICB0cmFuc2l0aW9uUHJvcGVydHk/OiBzdHJpbmc7XHJcbiAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24/OiBzdHJpbmc7XHJcblx0dHJhbnNsYXRlPzogU3R5bGVUeXBlO1xyXG5cdFxyXG4gICAgdW5pY29kZUJpZGk/OiBzdHJpbmc7XHJcblx0dXNlclNlbGVjdD86IHN0cmluZztcclxuXHRcclxuICAgIHZlcnRpY2FsQWxpZ24/OiBTdHlsZVR5cGU7XHJcblx0dmlzaWJpbGl0eT86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbGlnbkNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QWxpZ25JdGVtcz86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbGlnblNlbGY/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QW5pbWF0aW9uPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEFuaW1hdGlvbkRlbGF5Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEFuaW1hdGlvbkRpcmVjdGlvbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbmltYXRpb25EdXJhdGlvbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbmltYXRpb25GaWxsTW9kZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbmltYXRpb25JdGVyYXRpb25Db3VudD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbmltYXRpb25OYW1lPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEFuaW1hdGlvblBsYXlTdGF0ZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbmltYXRpb25UaW1pbmdGdW5jdGlvbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBcHBlYXJhbmNlPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCYWNrZ3JvdW5kQ2xpcD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCYWNrZ3JvdW5kT3JpZ2luPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEJhY2tncm91bmRTaXplPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEJvcmRlckJvdHRvbUxlZnRSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0Qm9yZGVyQm90dG9tUmlnaHRSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICB3ZWJraXRCb3JkZXJJbWFnZT86IFN0eWxlVHlwZTtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCb3JkZXJSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0Qm9yZGVyVG9wTGVmdFJhZGl1cz86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCb3JkZXJUb3BSaWdodFJhZGl1cz86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCb3hBbGlnbj86IHN0cmluZztcclxuICAgIHdlYmtpdEJveERpcmVjdGlvbj86IFN0eWxlVHlwZTtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCb3hGbGV4Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEJveE9yZGluYWxHcm91cD86IHN0cmluZztcclxuICAgIHdlYmtpdEJveE9yaWVudD86IFN0eWxlVHlwZTtcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCb3hQYWNrPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovd2Via2l0Qm94U2hhZG93Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEJveFNpemluZz86IHN0cmluZztcclxuICAgIHdlYmtpdENvbHVtbkJyZWFrQWZ0ZXI/OiBTdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5CcmVha0JlZm9yZT86IFN0eWxlVHlwZTtcclxuICAgIHdlYmtpdENvbHVtbkJyZWFrSW5zaWRlPzogU3R5bGVUeXBlO1xyXG4gICAgd2Via2l0Q29sdW1uQ291bnQ/OiBDb2x1bW5Db3VudFN0eWxlVHlwZTtcclxuICAgIHdlYmtpdENvbHVtbkdhcD86IFNpbmdsZUdhcF9TdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5SdWxlPzogQ29sdW1uUnVsZVN0eWxlVHlwZTtcclxuICAgIHdlYmtpdENvbHVtblJ1bGVDb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIHdlYmtpdENvbHVtblJ1bGVTdHlsZT86IENvbHVtblJ1bGVTdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5SdWxlV2lkdGg/OiBCb3JkZXJXaWR0aFN0eWxlVHlwZTtcclxuICAgIHdlYmtpdENvbHVtblNwYW4/OiBTdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5XaWR0aD86IGFueTtcclxuICAgIHdlYmtpdENvbHVtbnM/OiBTdHlsZVR5cGU7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0RmlsdGVyPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEZsZXg/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0RmxleEJhc2lzPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEZsZXhEaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0RmxleEZsb3c/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0RmxleEdyb3c/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0RmxleFNocmluaz86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRGbGV4V3JhcD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRKdXN0aWZ5Q29udGVudD86IHN0cmluZztcclxuICAgIHdlYmtpdExpbmVDbGFtcD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdE1hc2tCb3hJbWFnZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrQm94SW1hZ2VPdXRzZXQ/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0TWFza0JveEltYWdlUmVwZWF0Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdE1hc2tCb3hJbWFnZVNsaWNlPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdE1hc2tCb3hJbWFnZVNvdXJjZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrQm94SW1hZ2VXaWR0aD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrQ2xpcD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrQ29tcG9zaXRlPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdE1hc2tJbWFnZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrT3JpZ2luPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdE1hc2tQb3NpdGlvbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrUmVwZWF0Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdE1hc2tTaXplPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdE9yZGVyPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFBlcnNwZWN0aXZlPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFBlcnNwZWN0aXZlT3JpZ2luPzogc3RyaW5nO1xyXG4gICAgd2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I/OiBTdHlsZVR5cGU7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VGV4dEZpbGxDb2xvcj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUZXh0U2l6ZUFkanVzdD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUZXh0U3Ryb2tlPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFRleHRTdHJva2VDb2xvcj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUZXh0U3Ryb2tlV2lkdGg/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VHJhbnNmb3JtPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFRyYW5zZm9ybU9yaWdpbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUcmFuc2Zvcm1TdHlsZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUcmFuc2l0aW9uPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFRyYW5zaXRpb25EZWxheT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VHJhbnNpdGlvblByb3BlcnR5Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbj86IHN0cmluZztcclxuICAgIHdlYmtpdFVzZXJNb2RpZnk/OiBTdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRVc2VyU2VsZWN0PzogU3R5bGVUeXBlO1xyXG5cdHdlYmtpdFdyaXRpbmdNb2RlPzogU3R5bGVUeXBlO1xyXG5cdFxyXG4gICAgd2hpdGVTcGFjZT86IHN0cmluZztcclxuICAgIHdpZG93cz86IG51bWJlciB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG4gICAgd2lkdGg/OiB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG4gICAgd2lsbENoYW5nZT86IHN0cmluZztcclxuICAgIHdvcmRCcmVhaz86IHN0cmluZztcclxuICAgIHdvcmRTcGFjaW5nPzogc3RyaW5nO1xyXG4gICAgd29yZFdyYXA/OiBzdHJpbmc7XHJcblx0d3JpdGluZ01vZGU/OiBzdHJpbmc7XHJcblx0XHJcbiAgICB6SW5kZXg/OiBcImF1dG9cIiB8IG51bWJlciB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG4gICAgem9vbT86IFN0eWxlVHlwZTtcclxuXHJcbiAgICAvLyBjdXN0b20gcHJvcGVydGllcy9hbGlhc2VzXHJcbiAgICBzaGFkb3c/OiBCb3hTaGFkb3dTdHlsZVR5cGU7XHJcbiAgICBiZ2M/OiBDb2xvcl9TdHlsZVR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWFsIHByb3BlcnR5IHRoYXQgY29udGFpbnMgc2V2ZXJhbCBkZWZpbml0aW9ucyBvZiBjdXN0b20gQ1NTIHByb3BlcnRpZXMuXHJcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIHRoZSBmb2xsb3dpbmcgd2F5OlxyXG4gICAgICogICAkY3VzdG9tOiB7IG1haW5Db2xvcjogXCJibGFja1wiLCBtYWluQmdDb2xvcjogXCJ3aGl0ZVwiIH1cclxuICAgICAqIFRoZSBmaXJzdCBuYW1lIChtYWluQ29sb3IpIGRldGVybWluZXMgdGhlIGN1c3RvbSBwcm9wZXJ0eSBuYW1lLiBUaGUgc2Vjb25kIG5hbWUgKGNvbG9yKSBpc1xyXG4gICAgICogb25lIG9mIFN0eWxlc2V0IHByb3BlcnRpZXMgYW5kIGlzIG9ubHkgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHR5cGUgb2YgdmFsdWUgZm9yIHRoZSBjdXN0b21cclxuICAgICAqIHByb3BlcnR5LlxyXG4gICAgICovXHJcbiAgICAkY3VzdG9tPzogeyBbSzogc3RyaW5nXTogc3RyaW5nIH1cclxuICAgIC8vICRjdXN0b20/OiB7IFtLOiBzdHJpbmddOiBbUDoga2V5b2YgU3R5bGVzZXQsIFN0eWxlc2V0W1BdXSB9IH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1N0cmluZ1Byb3h5LCBVbml0VmFsdWUsIGxlbmd0aFVuaXRzVG9Dc3NTdHJpbmcsIHBlcmNlbnRUb0Nzc1N0cmluZyxcclxuICAgICAgICBhbmdsZVRvQ3NzU3RyaW5nLCB0aW1lVG9Dc3NTdHJpbmd9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHtDb2xvcnMsIGNvbG9yU2VwLCByZ2IsIGhzbCwgYWxwaGF9IGZyb20gXCIuL2NvbG9yc1wiO1xyXG5pbXBvcnQge0lDdXN0b21WYXJ9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge0N1c3RvbVZhcn0gZnJvbSBcIi4uL3J1bGVzL0N1c3RvbVZhclwiXHJcbmltcG9ydCB7U3R5bGVzZXR9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5pbXBvcnQge3N0eWxlUHJvcFRvQ3NzU3RyaW5nfSBmcm9tIFwiLi9TdHlsZUluZm9cIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBtc2ggY2xhc3MgY29udGFpbnMgc3RhdGljIGhlbHBlciBmdW5jdGlvbnMgdGhhdCBhcmUgdXNlZCB3aGVuZXZlciB0aGVyZSBpcyBhIG5lZWQgdG8gcHJvZHVjZVxyXG4gKiBDU1Mgc3RyaW5nIHZhbHVlIGJhc2VkIG9uIG1vcmUgY29tcGxpY2F0ZWQgdHlwZShzKS4gVGhlIG1ham9yaXR5IG9mIHRoZXNlIGZ1bmN0aW9ucyByZXR1cm5cclxuICogU3RyaW5nUHJveHkgb2JqZWN0IHNvIHRoYXQgdGhleSBjYW4gYmUgdXNlZCBpbiBzdHlsZXNldCBwcm9wZXJ0aWVzIGFzc2lnbm1lbnRzLCBmb3IgZXhhbXBsZTpcclxuICogYGBgdHN4XHJcbiAqIDxkaXYgc3R5bGU9e3sgY29sb3I6IHRzaC5yZ2IoIDI1NSwgMTI4LCA2NCkgfX1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgdHNoXHJcbntcclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gVXRpbGl0aWVzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgdG8gYSBwZXJjZW50IHN0cmluZy4gTnVtYmVycyBiZXR3ZWVuIC0xIGFuZCAxIGFyZSBtdWx0aXBseWVkIGJ5IDEwMC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBwZXJjZW50KCBuOiBudW1iZXIpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gcGVyY2VudFRvQ3NzU3RyaW5nKCBuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVuaXRzKCBuOiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IFVuaXRWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVW5pdFZhbHVlKCBuLCB1bml0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRoZSBnaXZlbiB2YWx1ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBzdHlsZSBwcm9wZXJ0eSB0byBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gc3R5bGVQcm9wTmFtZSBTdHlsZSBwcm9wZXJ0eSBuYW1lIHRoYXQgZGV0ZXJtaW5lcyBob3cgdGhlIHZhbHVlIHNob3VsZCBiZSBjb252ZXJ0ZWRcclxuICAgICAqIHRvIGEgQ1NTIGNvbXBsaWFudCBzdHJpbmcuXHJcbiAgICAgKiBAcGFyYW0gc3R5bGVQcm9wVmFsdWUgVmFsdWUgdG8gY29udmVydC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB2YWwoIHN0eWxlUHJvcE5hbWU6IHN0cmluZywgc3R5bGVQcm9wVmFsdWU6IGFueSk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBzdHlsZVByb3BUb0Nzc1N0cmluZyggc3R5bGVQcm9wTmFtZSwgc3R5bGVQcm9wVmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIENvbG9yc1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIGNvbG9yU2VwKCBjOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gY29sb3JTZXAoYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZ2IoIHI6IG51bWJlciB8IHN0cmluZywgZzogbnVtYmVyIHwgc3RyaW5nLCBiOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBTdHJpbmdQcm94eVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nUHJveHkoIHJnYiggciwgZywgYiwgYSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciB8IHN0cmluZywgbDogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogU3RyaW5nUHJveHlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBoc2woIGgsIHMsIGwsIGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFscGhhKCBjOiBudW1iZXIgfCBrZXlvZiB0eXBlb2YgQ29sb3JzLCBhOiBudW1iZXIgfCBzdHJpbmcpOiBTdHJpbmdQcm94eVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGFscGhhKCBjLCBhKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIExlbmd0aCB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIFEoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJRXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiY2hcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY20oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJjbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImVtXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGV4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZXhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaWMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJpY1wiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBpbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImluXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGxoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwibGhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgbW0oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJtbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBwYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInBjXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHB0KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwicHRcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgcHgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJweFwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyB2YiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZiXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHZoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwidmhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdmkoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJ2aVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyB2dyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZ3XCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInJlbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBybGgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJybGhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdm1heCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZtYXhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdm1pbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZtaW5cIik7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGxlbmd0aCB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxlbiggbjogbnVtYmVyLCB1bml0cz86IHN0cmluZyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0c1RvQ3NzU3RyaW5nKCBuLCB1bml0cyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIEFuZ2xlIHVuaXRzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVnKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZGVnXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHJhZCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInJhZFwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBncmFkKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZ3JhZFwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyB0dXJuKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwidHVyblwiKTsgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29udmVydHMgYW5nbGUgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIHN0cmluZy4gSW50ZWdlclxyXG4gICAgICogdmFsdWVzIGFyZSB0cmVhdGVkIGFzIGRlZ3JlZXMgd2hpbGUgZmxvYXRpbmcgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyByYWRpYW5zLlxyXG4gICAgICogQHBhcmFtIHZhbCBBbmdsZSBhcyBhIG51bWJlclxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGFuZ2xlKCBuOiBudW1iZXIsIHVuaXRzPzogc3RyaW5nKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlVG9Dc3NTdHJpbmcobik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIFRpbWUgdW5pdHNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIHN0YXRpYyBzKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwic1wiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBtcyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcIm1zXCIpOyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb252ZXJ0cyB0aW1lIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICAgICAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBtaWxsaXNlY29uZHMgd2hpbGUgZmxvYXRpbmcgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBzZWNvbmRzLlxyXG4gICAgICogQHBhcmFtIHZhbCBUaW1lIGFzIGEgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdGltZSggbjogbnVtYmVyLCB1bml0cz86IFwic1wiIHwgXCJtc1wiKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVUb0Nzc1N0cmluZyhuKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gRnJlcXVlbmN5IHVuaXRzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBzdGF0aWMgaHooIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJIelwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBraHooIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJrSHpcIik7IH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gUmVzb2x1dGlvbiB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIGRwaSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImRwaVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkcGNtKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZHBjbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBkcHB4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZHBweFwiKTsgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBGcmFjdGlvbiB1bml0cyAoZm9yIGZsZXgpXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBzdGF0aWMgZnIoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJmclwiKTsgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBDdXN0b20gQ1NTIHByb3BlcnRpZXNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBDU1MgdmFyKCkgZnVuY3Rpb24gZm9yIHRoZSBnaXZlbiBjdXN0b20gcHJvcGVydHkuXHJcbiAgICAgKiBFeGFtcGxlOlxyXG4gICAgICogYGBgdHN4XHJcbiAgICAgKiBsZXQgbXlTdHlsZXMgPSAkc2NvcGUoIGNsYXNzXHJcbiAgICAgKiB7XHJcbiAgICAgKiAgICAgZGVmYXVsdENvbG9yID0gJGN1c3RvbSggXCJjb2xvclwiLCBcImJsdWVcIik7XHJcbiAgICAgKiBcclxuICAgICAqICAgICBzaWRlYmFyID0gJGNsYXNzKCB7IGNvbG9yOiB0c2gudmFyKCB0aGlzLmRlZmF1bHRDb2xvciwgXCJibGFja1wiKSB9KVxyXG4gICAgICogfSk7XHJcbiAgICAgKiBgYGBcclxuICAgICAqIFRoZSB2YXIgbWV0aG9kIGNhbiBhbHNvIGJlIHVzZWQgd2l0aCBzaW1wbGUgc3RyaW5nIHZhbHVlczpcclxuICAgICAqIGBgYHRzeFxyXG4gICAgICogPGRpdiBzdHlsZT17eyBjb2xvcjogdHNoLnZhciggXCJkZWZhdWx0LWNvbG9yXCIsIFwiYmxhY2tcIikgfX1cclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHZhcjxUPiggY3VzdG9tVmFyOiBJQ3VzdG9tVmFyPFQ+IHwgc3RyaW5nLCBmYWxsYmFja1ZhbHVlPzogVCB8IElDdXN0b21WYXI8VD4gfCBzdHJpbmcgfCBTdHJpbmdQcm94eSk6IFN0cmluZ1Byb3h5XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHZhck5hbWUgPSB0eXBlb2YgY3VzdG9tVmFyID09PSBcInN0cmluZ1wiID8gY3VzdG9tVmFyIDogKGN1c3RvbVZhciBhcyBDdXN0b21WYXI8VD4pLnZhck5hbWU7XHJcbiAgICAgICAgbGV0IHMgPSBgdmFyKC0tJHt2YXJOYW1lfWA7XHJcbiAgICAgICAgaWYgKGZhbGxiYWNrVmFsdWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzICs9IFwiLFwiO1xyXG4gICAgICAgICAgICBpZiAoZmFsbGJhY2tWYWx1ZSBpbnN0YW5jZW9mIEN1c3RvbVZhcilcclxuICAgICAgICAgICAgICAgIHMgKz0gdGhpcy52YXIoIGZhbGxiYWNrVmFsdWUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZmFsbGJhY2tWYWx1ZSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHMgKz0gZmFsbGJhY2tWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChmYWxsYmFja1ZhbHVlIGluc3RhbmNlb2YgU3RyaW5nUHJveHkgfHwgdHlwZW9mIGN1c3RvbVZhciA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHMgKz0gZmFsbGJhY2tWYWx1ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcyArPSB0aGlzLnZhbCggKGN1c3RvbVZhciBhcyBDdXN0b21WYXI8VD4pLnRlbXBsYXRlUHJvcE5hbWUsIGZhbGxiYWNrVmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpbmdQcm94eSggcyArIFwiKVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhpcyBmaWxlIGNvbnRhaW5zIGJhc2ljIHR5cGVzIGFuZCBmdW5jdGlvbnMgdXNlZCB0byBkZWZpbmUgQ1NTIHByb3BlcnR5IHR5cGVzLlxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogU3R5bGUgdmFsdWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIChhbG1vc3QpIGFueSBwcm9wZXJ0eVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQmFzZV9TdHlsZVR5cGUgPSBcImluaGVyaXRcIiB8IFwiaW5pdGlhbFwiIHwgXCJ1bnNldFwiIHwgU3RyaW5nUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3RyaW5nUHJveHkgY2xhc3MgZW5jYXBzdWxhdGVzIGEgc3RyaW5nLCB3aGljaCBpcyByZXR1cm5lZCB2aWEgdGhlIHN0YW5kYXJkIHRvU3RyaW5nKClcclxuICogbWV0aG9kLiBBbGwgQ1NTIHByb3BlcnRpZXMgc2hvdWxkIGFjY2VwdCBzdHJpbmcgYXMgdGhlIHR5cGUgb2YgdGhlaXIgdmFsdWUgZXZlbiBpZiBub3JtYWxseVxyXG4gKiB0aGV5IGFjY2VwdCBvdGhlciB0eXBlcyAoZS5nIGEgc2V0IG9mIHN0cmluZyBsaXRlcmFscyBhcyBgXCJyb3dcIiB8IFwiY29sdW1uXCJgIGZvciB0aGVcclxuICogZmxleC1kaXJjdGlvbikgcHJvcGVydHkuIFRoaXMgaXMgYmVjYXVzZSBpbiBhZGRpdGlvbiB0byB0aGVpciBub3JtYWwgdmFsdWVzIGFueSBwcm9wZXJ0eVxyXG4gKiBjYW4gdXNlIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhlIGZvcm0gYHZhcigtLXByb3BuYW1lKWAuIEhvd2V2ZXIsIGlmIHdlIGFkZCBzdHJpbmcgdHlwZVxyXG4gKiB0byB0aGUgc2V0IG9mIHN0cmluZyBsaXRlcmFscyAoZS5nLiBgXCJyb3dcIiB8IFwiY29sdW1uXCIgfCBzdHJpbmdgKSwgdGhpcyB0aHJvd3Mgb2ZmIHRoZVxyXG4gKiBJbnRlbGxpc2Vuc2UgYW5kIGl0IGRvZXNuJ3QgcHJvbXB0IGRldmVsb3BlcnMgZm9yIHRoZSBwb3NzaWJsZSB2YWx1ZXMuIFRoZSBTdHJpbmdQcm94eVxyXG4gKiBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHN0cmluZyAoZS5nLiBgXCJyb3dcIiB8IFwiY29sdW1uXCIgfCBTdHJpbmdQcm94eWApIGFuZCB0aGlzIHNvbHZlc1xyXG4gKiB0aGUgSW50ZWxsaXNlbnNlIGlzc3VlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1Byb3h5XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBzPzogc3RyaW5nIHwgU3RyaW5nUHJveHkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zID0gdHlwZW9mIHMgPT09IFwic3RyaW5nXCIgPyBzIDogcyAhPSBudWxsID8gcy50b1N0cmluZygpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBzOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBTdHJpbmdQcm94eSBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIG9yIGFub3RoZXIgU3RyaW5nUHJveHkgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhdyggczogc3RyaW5nIHwgU3RyaW5nUHJveHkpOiBTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVW5pdFZhbHVlIGNsYXNzIGVuY2Fwc3VsYXRlcyBhIG51bWVyaWMgdmFsdWUgYW5kIGEgdW5pdC4gSXQgaXMgdXNlZCB0byByZXByZXNlbnRzIHN1Y2hcclxuICogdmFsdWVzIGFzIGxlbmd0aHMsIGFuZ2xlcywgdGltZSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVuaXRWYWx1ZSBleHRlbmRzIFN0cmluZ1Byb3h5XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCB2YWx1ZT86IG51bWJlciwgdW5pdD86IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVuaXQgPSB1bml0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy52YWx1ZSArIHRoaXMudW5pdDsgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHVuaXQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgbmFtZXMgd2l0aCBkYXNoZXMgaW50byBuYW1lcyBpbiBjYW1lbENhc2UsIHdoZXJlIGV2ZXJ5IGNoYXJhY3RlciBhZnRlciBhIGRhc2ggaXNcclxuICogY2FwaXRhbGl6ZWQgYW5kIGRhc2hlcyBhcmUgcmVtb3ZlZC5cclxuICogQHBhcmFtIGRhc2hcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXNoVG9DYW1lbCggZGFzaDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuXHRpZiAoIWRhc2gpXHJcblx0XHRyZXR1cm4gZGFzaDtcclxuXHJcblx0cmV0dXJuIGRhc2gucmVwbGFjZSggLy0oW2EtekEtWl0pL2csICh4LCAkMSkgPT4gJDEudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsQ2FzZSB0byBkYXNoLWNhc2UuXHJcbiAqIEBwYXJhbSBjYW1lbFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsVG9EYXNoKCBjYW1lbDogc3RyaW5nKTogc3RyaW5nXHJcbntcclxuICByZXR1cm4gY2FtZWwucmVwbGFjZSggLyhbYS16QS1aXSkoPz1bQS1aXSkvZywgJyQxLScpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEdlbmVyaWMgZnVuY3Rpb24gdGhhdCBjb252ZXJ0cyBhbiBhcnJheSBvZiB0aGUgZ2l2ZW4gdHlwZXRvIGEgc2luZ2xlIHN0cmluZyB1c2luZyB0aGUgZ2l2ZW4gc2VwYXJhdG9yLlxyXG4gKiBFbGVtZW50cyBvZiB0aGUgYXJyYXkgYXJlIGNvbnZlcnRlZCB0byBzdHJpbmdzIHVzaW5nIHRoZSBnaXZlbiBmdW5jdGlvbi5cclxuICogQHBhcmFtIHZhbCBBcnJheSBvZiB0aW1lIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5VG9Dc3NTdHJpbmc8VD4oIHZhbDogVFtdLCBmdW5jOiAodjogVCkgPT4gc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiLFwiKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIGZvciggbGV0IHYgb2YgdmFsKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVtID0gZnVuYyggdik7XHJcbiAgICAgICAgaWYgKGl0ZW0gIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICBzICs9IHNlcGFyYXRvcjtcclxuXHJcbiAgICAgICAgICAgIHMgKz0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFycmF5IG9mIHN0cmluZyB2YWx1ZXMgdG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbiAqIEBwYXJhbSB2YWwgQXJyYXkgb2Ygc3RyaW5nIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbDogKHN0cmluZyB8IEJhc2VfU3R5bGVUeXBlKVtdLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiLFwiKTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzID0gXCJcIjtcclxuICAgIGZvciggbGV0IHYgb2YgdmFsKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh2ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAocy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcyArPSBzZXBhcmF0b3I7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgICAgICAgICBzICs9IHY7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFN0cmluZ1Byb3h5KVxyXG4gICAgICAgICAgICAgICAgcyArPSB2LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBDb252ZXJ0cyBhIHZhbHVlIHRoYXQgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhbiBhcnJheSBvZiBzdHJpbmdzIHRvIGEgc2luZ2xlIHN0cmluZyB1c2luZ1xyXG4vLyAgKiB0aGUgZ2l2ZW4gc2VwYXJhdG9yLlxyXG4vLyAgKiBAcGFyYW0gdmFsIFN0cmluZyB2YWx1ZSBvciBhcnJheSBvZiBzdHJpbmcgdmFsdWVzXHJcbi8vICAqL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gc3RyaW5nT3JTdHJpbmdBcnJheVRvQ3NzU3RyaW5nKCB2YWw6IHN0cmluZ1tdIHwgc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyA9IFwiLFwiKTogc3RyaW5nXHJcbi8vIHtcclxuLy8gICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4vLyAgICAgICAgIHJldHVybiB2YWw7XHJcbi8vICAgICBlbHNlXHJcbi8vICAgICAgICAgcmV0dXJuIHN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbCwgc2VwYXJhdG9yKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIG51bWJlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVOdW1iZXJfU3R5bGVUeXBlID0gbnVtYmVyIHwgc3RyaW5nIHwgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBudW1iZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlOdW1iZXJfU3R5bGVUeXBlID0gU2luZ2xlTnVtYmVyX1N0eWxlVHlwZSB8IFNpbmdsZU51bWJlcl9TdHlsZVR5cGVbXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgbnVtYmVyIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpbmdsZSBudW1iZXIgb3Igc3RyaW5nIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlTnVtYmVyVG9Dc3NTdHJpbmcoIHZhbDogU2luZ2xlTnVtYmVyX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBhcnQgbnVtYmVyIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEFuaW1hdGlvbiBkZWxheSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpTnVtYmVyVG9Dc3NTdHJpbmcoIHZhbDogTXVsdGlOdW1iZXJfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBzaW5nbGVOdW1iZXJUb0Nzc1N0cmluZyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBudW1iZXIgdG8gYSBwZXJjZW50IHN0cmluZy4gTnVtYmVycyBiZXR3ZWVuIC0xIGFuZCAxIGFyZSBtdWx0aXBseWVkIGJ5IDEwMC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZXJjZW50VG9Dc3NTdHJpbmcoIG46IG51bWJlcik6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gKE51bWJlci5pc0ludGVnZXIobikgPyBuIDogbiA+IC0xLjAgJiYgbiA8IDEuMCA/IE1hdGgucm91bmQoIG4gKiAxMDApIDogTWF0aC5yb3VuZChuKSkgKyBcIiVcIjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGxlbmd0aCBvciBwZXJjZW50YWdlLiBMZW5ndGggY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gMjBweCBvciA3NSUpXHJcbiAqICAgLSBudW1iZXI6IHplcm8gaXMgdHJlYXRlZCBhcyBub3QgaGF2aW5nIGFueSBzdWZmaXg7IGludGVnZXIgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBwaXhlbHM7XHJcbiAqICAgICBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRzOiAwLjAgdG8gMS4wLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgbnVtYmVyIHwgc3RyaW5nIHwgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBsZW5ndGggb3IgcGVyY2VudGFnZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUxlbmd0aF9TdHlsZVR5cGUgPSBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlIHwgU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZVtdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGxlbmd0aCB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLiBJbnRlZ2VyXHJcbiAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBwaXhlbHMgd2hpbGUgZmxvYXRpbmcgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBwZXJjZW50cyBmcm9tIDAuMCB0byAxLjAuXHJcbiAqIEBwYXJhbSB2YWwgTGVuZ3RoIGFzIGEgbnVtYmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoVW5pdHNUb0Nzc1N0cmluZyggbjogbnVtYmVyLCB1bml0cz86IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcbiAgICByZXR1cm4gbiA9PT0gMCA/IFwiMFwiIDogdW5pdHMgPyBuICsgdW5pdHMgOiBOdW1iZXIuaXNJbnRlZ2VyKCBuKSA/ICBuICsgXCJweFwiIDogcGVyY2VudFRvQ3NzU3RyaW5nKG4pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbGVuZ3RoIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTGVuZ3RoIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWw6IFNpbmdsZUxlbmd0aF9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIFN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuXHQgICAgcmV0dXJuIGxlbmd0aFVuaXRzVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wYXJ0IGxlbmd0aCBvciBwZXJjZW50YWdlIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEFycmF5IG9mIGxlbmd0aCBzdHlsZSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWw6IE11bHRpTGVuZ3RoX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyBzaXplLCB3aGljaCBjYW4gYmUgZXhwcmVzc2VkIGFzIG9uZSBvciB0d28gdmFsdWVzIGVhY2ggb2YgZWFjaCBpcyBvZiB0aGVcclxuICogTGVuZ3RoX1N0eWxlVHlwZSB0eXBlLiBUd28gdmFsdWVzIGFyZSBnaXZlbiBhcyBhbiBvYmplY3Qgd2l0aCAndycgKHdpZHRoKSBhbmQgJ2gnIChoZWlnaHQpXHJcbiAqIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVTaXplX1N0eWxlVHlwZSA9IFNpbmdsZUxlbmd0aF9TdHlsZVR5cGUgfCB7IHc6IFNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7IGg6IFNpbmdsZUxlbmd0aF9TdHlsZVR5cGUgfTtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IHNpemUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlTaXplX1N0eWxlVHlwZSA9IFNpbmdsZVNpemVfU3R5bGVUeXBlIHwgU2luZ2xlU2l6ZV9TdHlsZVR5cGVbXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaXplIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpemUgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlU2l6ZVRvQ3NzU3RyaW5nKCB2YWw6IFNpbmdsZVNpemVfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBTdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBvYmplY3RUb0Nzc1N0cmluZyggdmFsLCBmYWxzZSwgW1wid1wiLCBzaW5nbGVMZW5ndGhUb0Nzc1N0cmluZ10sIFtcImhcIiwgc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmddKTtcclxuICAgIC8vIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcbiAgICAvLyAgICAgcmV0dXJuIGxlbmd0aFRvQ3NzU3RyaW5nKCB2YWxbMF0pICsgXCIgXCIgKyBsZW5ndGhUb0Nzc1N0cmluZyggdmFsWzFdKTtcclxuICAgIGVsc2VcclxuXHQgICAgcmV0dXJuIHNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcGFydCBzaXplIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEFycmF5IG9mIGxlbmd0aCBzdHlsZSB2YWx1ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtdWx0aVNpemVUb0Nzc1N0cmluZyggdmFsOiBNdWx0aVNpemVfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBTdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIGFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgc2luZ2xlU2l6ZVRvQ3NzU3RyaW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gc2luZ2xlU2l6ZVRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhbmdsZSB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLiBJbnRlZ2VyXHJcbiAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBkZWdyZWVzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcmFkaWFucy5cclxuICogQHBhcmFtIHZhbCBBbmdsZSBhcyBhIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFuZ2xlVG9Dc3NTdHJpbmcoIG46IG51bWJlciwgdW5pdHM/OiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPT09IDAgPyBcIjBcIiA6IHVuaXRzID8gbiArIHVuaXRzIDogTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgXCJkZWdcIiA6IG4gKyBcInJhZFwiO1xyXG59XHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGFuZ2xlLiBMZW5ndGggY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gMjBkZWcgb3IgMS40cmFkKVxyXG4gKiAgIC0gbnVtYmVyOiB6ZXJvIGlzIHRyZWF0ZWQgYXMgbm90IGhhdmluZyBhbnkgc3VmZml4OyBpbnRlZ2VyIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgZGVncmVlcztcclxuICogICAgIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcmFkaWFucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUFuZ2xlX1N0eWxlVHlwZSA9IG51bWJlciB8IEJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGxlbmd0aCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIExlbmd0aCBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVBbmdsZVRvQ3NzU3RyaW5nKCB2YWw6IFNpbmdsZUFuZ2xlX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG5cdCAgICByZXR1cm4gYW5nbGVUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIHBvc2l0aW9uLCB3aGljaCBjYW4gYmUgZXhwcmVzc2VkIGFzIG9uZSBvciB0d28gb3IgMyBvciA0IHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZVBvc2l0aW9uX1N0eWxlVHlwZSA9IFwiY2VudGVyXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICB7IHg6IFwiY2VudGVyXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7IHk6IFwiY2VudGVyXCIgfCBcInRvcFwiIHwgXCJib3R0b21cIiB8IFNpbmdsZUxlbmd0aF9TdHlsZVR5cGUgfSB8XHJcbiAgICAgICAgICAgICAgICB7IHhlZGdlOiBzdHJpbmc7IHg/OiBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlOyB5ZWRnZTogc3RyaW5nOyB5PzogU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSB9IHxcclxuICAgICAgICAgICAgICAgIEJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgcG9zaXRpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgTXVsdGlQb3NpdGlvbl9TdHlsZVR5cGUgPSBTaW5nbGVQb3NpdGlvbl9TdHlsZVR5cGUgfCBTaW5nbGVQb3NpdGlvbl9TdHlsZVR5cGVbXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgcG9zaXRpb24gc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaXplIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICBzaW5nbGVQb3NpdGlvblRvQ3NzU3RyaW5nKCB2YWw6IFNpbmdsZVBvc2l0aW9uX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgIHtcclxuICAgICAgICBpZiAoXCJ4ZWRnZVwiIGluIHZhbClcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFRvQ3NzU3RyaW5nKCB2YWwsIGZhbHNlLCBcInhlZGdlXCIsIFtcInhcIiwgc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmddLCBcInllZGdlXCIsIFtcInlcIiwgc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmddKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RUb0Nzc1N0cmluZyggdmFsLCBmYWxzZSwgW1wieFwiLCBzaW5nbGVMZW5ndGhUb0Nzc1N0cmluZ10sIFtcInlcIiwgc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmddKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuXHQgICAgcmV0dXJuIHNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcGFydCBwb3NpdGlvbiBzdHlsZSB2YWx1ZXMgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQXJyYXkgb2YgbGVuZ3RoIHN0eWxlIHZhbHVlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpUG9zaXRpb25Ub0Nzc1N0cmluZyggdmFsOiBNdWx0aVBvc2l0aW9uX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsICBzaW5nbGVQb3NpdGlvblRvQ3NzU3RyaW5nKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gIHNpbmdsZVBvc2l0aW9uVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIHN0cmluZy4gSW50ZWdlclxyXG4gKiB2YWx1ZXMgYXJlIHRyZWF0ZWQgYXMgbWlsbGlzZWNvbmRzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgc2Vjb25kcy5cclxuICogQHBhcmFtIHZhbCBUaW1lIGFzIGEgbnVtYmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGltZVRvQ3NzU3RyaW5nKCBuOiBudW1iZXIsIHVuaXRzPzogXCJzXCIgfCBcIm1zXCIpOiBzdHJpbmdcclxue1xyXG4gICAgcmV0dXJuIG4gPT09IDAgPyBcIjBzXCIgOiB1bml0cyA/IG4gKyB1bml0cyA6IE51bWJlci5pc0ludGVnZXIobikgPyAgbiArIFwibXNcIiA6IG4gKyBcInNcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIENTUyB0aW1lLiBUaW1lIGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gc3RyaW5nIChlLmcuIDJzIG9yIDI1MG1zKVxyXG4gKiAgIC0gbnVtYmVyOiBpbnRlZ2VyIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgbWlsbGlzZWNvbmRzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWRcclxuICogICAgIGFzIHNlY29uZHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVUaW1lX1N0eWxlVHlwZSA9IG51bWJlciB8IEJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIG11bHRpLXBhcnQgdGltZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aVRpbWVfU3R5bGVUeXBlID0gU2luZ2xlVGltZV9TdHlsZVR5cGUgfCBTaW5nbGVUaW1lX1N0eWxlVHlwZVtdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBUaW1lIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVRpbWVUb0Nzc1N0cmluZyggdmFsOiBTaW5nbGVUaW1lX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG5cdCAgICByZXR1cm4gdGltZVRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW5pbWF0aW9uIGRlbGF5IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQW5pbWF0aW9uIGRlbGF5IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlUaW1lVG9Dc3NTdHJpbmcoIHZhbDogTXVsdGlUaW1lX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gdGltZVRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHNpbmdsZVRpbWVUb0Nzc1N0cmluZyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE9iamVjdCB0byBjb252ZXJ0IHRvIHN0cmluZy5cclxuICogQHBhcmFtIHVzZVByb3BOYW1lcyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbmFtZXMgb2YgdGhlIG9iamVjdCdzIHByb3BydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy5cclxuICogQHBhcmFtIHByb3BzQW5kRnVuY3MgQXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIG9wdGlvbmFsbHkgZnVuY3Rpb25zLiBUaGUgb3JkZXIgb2YgdGhlIG5hbWVzIGRldGVybWluZXMgaW5cclxuICogICAgIHdoaWNoIG9wcmRlciB0aGUgcHJvcGVydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy4gSWYgYSBmdW5jdGlvbiBpcyBwcmVzZW50IGZvciB0aGUgcHJvcGVydHksXHJcbiAqICAgICBpdCB3aWxsIGJlIHVzZWQgdG8gY29udmVydCB0aGUgcHJvcGVydHkncyB2YWx1ZSB0byB0aGUgc3RyaW5nLiBJZiBhIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50LCB0aGVuIHRoZVxyXG4gKiAgICAgcHJvcGVydHkgdmFsdWUgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byB0aGUgc3RyaW5nIHVzaW5nIHRoZSB0b1N0cmluZyBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9Dc3NTdHJpbmcoIHZhbDogYW55LCB1c2VQcm9wTmFtZXM6IGJvb2xlYW4sIC4uLnByb3BzQW5kRnVuY3M6IChzdHJpbmcgfCBbc3RyaW5nLCAodmFsOiBhbnkpID0+IHN0cmluZ10pW10gKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbCB8fCBwcm9wc0FuZEZ1bmNzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcblx0bGV0IHMgPSBcIlwiO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BBbmRGdW5jIGluIHByb3BzQW5kRnVuY3MpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByb3BOYW1lID0gdHlwZW9mIHByb3BBbmRGdW5jID09PSBcInN0cmluZ1wiID8gcHJvcEFuZEZ1bmMgOiBwcm9wQW5kRnVuY1swXTtcclxuICAgICAgICBsZXQgZnVuYyA9IHR5cGVvZiBwcm9wQW5kRnVuYyA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IHByb3BBbmRGdW5jWzFdO1xyXG5cclxuICAgICAgICBsZXQgcHJvcFZhbCA9IHZhbFtwcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHMgKz0gXCIgXCI7XHJcblxyXG4gICAgICAgIGlmICh1c2VQcm9wTmFtZXMpXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcE5hbWU7XHJcblxyXG4gICAgICAgIGlmIChmdW5jKVxyXG4gICAgICAgICAgICBzICs9IFwiIFwiICsgZnVuYyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcFZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICBzICs9IFwiIFwiICsgcHJvcFZhbDtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==