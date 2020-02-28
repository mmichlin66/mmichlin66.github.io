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
const styles_1 = __webpack_require__(/*! ../styles/styles */ "./src/styles/styles.ts");
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
        return `--${this.varName}: ${styles_1.stylePropToCssString(this.templatePropName, this.varValue, true)}`;
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
const styles_1 = __webpack_require__(/*! ../styles/styles */ "./src/styles/styles.ts");
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
        return `${this.geSelectorString()} ${styles_1.stylesetToCssString(this.styleset, this.important)}`;
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
const tsh_1 = __webpack_require__(/*! ./tsh */ "./src/styles/tsh.ts");
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
/**
 * Converts color value from the array representation to the CSS time string.
 */
function colorAsArrayToCssString(val) {
    if (val.length === 1)
        return colorToCssString(val[0]);
    else if (val.length === 2)
        return tsh_1.tsh.alpha(val[0], val[1]).toString();
    else if (val.length === 3)
        return tsh_1.tsh.rgb(val[0], val[1], val[2]).toString();
    else
        return tsh_1.tsh.rgb(val[0], val[1], val[2], val[3]).toString();
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
/**
 * Map of property names to the StylePropertyInfo objects describing custom actions necessary to
 * convert the property value to the CSS-compliant string.
 */
const StylePropertyInfos = {
    animation: animationToCssString,
    animationDelay: utils.multiTimeToCssString,
    animationDuration: utils.multiTimeToCssString,
    animationIterationCount: utils.singleNumberToCssString,
    animationTimingFunction: animationTimingFunctionToCssString,
    backgroundColor: colors_1.colorToCssString,
    bgc: "backgroundColor",
    backgroundPosition: utils.multiPositionToCssString,
    backgroundSize: utils.multiSizeToCssString,
    baselineShift: utils.singleLengthToCssString,
    border: borderSideToCssString,
    borderBottom: borderSideToCssString,
    borderBottomColor: colors_1.colorToCssString,
    borderBottomLeftRadius: singleCornerRadiusToCssString,
    borderBottomRightRadius: singleCornerRadiusToCssString,
    borderBottomWidth: utils.singleLengthToCssString,
    borderColor: borderColorToCssString,
    borderImageOutset: borderImageOutsetToCssString,
    borderImageWidth: borderWidthToCssString,
    borderLeft: borderSideToCssString,
    borderLeftColor: colors_1.colorToCssString,
    borderLeftWidth: utils.singleLengthToCssString,
    borderRadius: borderRadiusToCssString,
    borderRight: borderSideToCssString,
    borderRightColor: colors_1.colorToCssString,
    borderRightWidth: utils.singleLengthToCssString,
    borderStyle: borderStyleToCssString,
    borderSpacing: borderSpacingToCssString,
    borderTop: borderSideToCssString,
    borderTopColor: colors_1.colorToCssString,
    borderTopLeftRadius: singleCornerRadiusToCssString,
    borderTopRightRadius: singleCornerRadiusToCssString,
    borderTopWidth: utils.singleLengthToCssString,
    borderWidth: borderWidthToCssString,
    bottom: utils.singleLengthToCssString,
    boxShadow: boxShadowToCssString,
    shadow: "boxShadow",
    caretColor: colors_1.colorToCssString,
    clip: clipToCssString,
    color: colors_1.colorToCssString,
    columnGap: utils.singleLengthToCssString,
    columnRule: columnRuleToCssString,
    columnRuleColor: colors_1.colorToCssString,
    columnRuleStyle: borderStyleToCssString,
    columnRuleWidth: borderWidthToCssString,
    columns: columnsToCssString,
    flex: flexToCssString,
    flexFlow: flexFlowToCssString,
    floodColor: colors_1.colorToCssString,
    fontStyle: fontStyleToCssString,
    gridColumnGap: utils.singleLengthToCssString,
    gridRowGap: utils.singleLengthToCssString,
    height: utils.singleLengthToCssString,
    left: utils.singleLengthToCssString,
    lightingColor: colors_1.colorToCssString,
    outlineColor: colors_1.colorToCssString,
    right: utils.singleLengthToCssString,
    rowGap: utils.singleLengthToCssString,
    textDecorationColor: colors_1.colorToCssString,
    textEmphasisColor: colors_1.colorToCssString,
    top: utils.singleLengthToCssString,
    width: utils.singleLengthToCssString,
};
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
const styles_1 = __webpack_require__(/*! ./styles */ "./src/styles/styles.ts");
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
    static percent(n) {
        return (Number.isInteger(n) ? n : n > -1.0 && n < 1.0 ? Math.round(n * 100) : Math.round(n)) + "%";
    }
    static units(n, unit) {
        return new utils_1.UnitValue(n, unit);
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    //
    // Colors
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////
    static colorSep(c) {
        return c == null ? "0" : typeof c === "string" ? c : Number.isInteger(c) ? c.toString() : this.percent(c);
    }
    static rgb(r, g, b, a) {
        r = this.colorSep(r);
        g = this.colorSep(g);
        b = this.colorSep(b);
        a = a == null ? null : typeof a === "string" ? a : this.percent(a);
        return new utils_1.StringProxy(a == null ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`);
    }
    static hsl(h, s, l, a) {
        h = typeof h === "string" ? h : Number.isInteger(h) ? h + "deg" : h + "rad";
        s = s == null ? "100%" : typeof s === "string" ? s : this.percent(s);
        l = l == null ? "100%" : typeof l === "string" ? l : this.percent(l);
        a = a == null ? null : typeof a === "string" ? a : this.percent(a);
        return new utils_1.StringProxy(a == null ? `hsl(${h},${s},${l})` : `hsla(${h},${s},${l},${a})`);
    }
    static alpha(c, a) {
        let rgb = typeof c === "string" ? colors_1.Colors[c] : c;
        return this.rgb((rgb & 0xFF0000) >> 16, (rgb & 0x00FF00) >> 8, rgb & 0x0000FF, a);
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
     * Converts length value from the numeric representation to the CSS string. Integer
     * values are treated as pixels while floating numbers are treated as percents from 0.0 to 1.0.
     * @param val Length as a number
     */
    static len(n, units) {
        return n === 0 ? "0" : units ? n + units : Number.isInteger(n) ? n + "px" : this.percent(n);
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
        return n === 0 ? "0" : units ? n + units : Number.isInteger(n) ? n + "deg" : n + "rad";
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
        return n === 0 ? "0s" : units ? n + units : Number.isInteger(n) ? n + "ms" : n + "s";
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
            if (fallbackValue instanceof CustomVar_1.CustomVar)
                s += this.var(fallbackValue);
            else if (typeof fallbackValue === "string")
                s += fallbackValue.toString();
            else if (fallbackValue instanceof utils_1.StringProxy || typeof customVar === "string")
                s += fallbackValue;
            else
                s += styles_1.stylePropToCssString(customVar.templatePropName, fallbackValue);
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

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file contains basic types and functions used to define CSS property types.
 */
const tsh_1 = __webpack_require__(/*! ./tsh */ "./src/styles/tsh.ts");
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
 * Creates a StringProxy object that represents the use of the given CSS custom property. Use it
 * as in the following:
 * ```typescript
 * style={{ color: useVar(--default-color, black) }}
 * ```
 * @param varName
 * @param fallbackValues
 */
function useVar(varName, fallbackValue) {
    let s = `var(--${varName}`;
    if (fallbackValue)
        s += "," + fallbackValue;
    s += ")";
    return new StringProxy(s);
}
exports.useVar = useVar;
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
 * Converts length style value to the CSS time string.
 * @param val Length as a style property type
 */
function singleLengthToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return tsh_1.tsh.len(val);
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
 * Converts length style value to the CSS time string.
 * @param val Length as a style property type
 */
function singleAngleToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return tsh_1.tsh.angle(val);
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
 * Converts time style value to the CSS time string.
 * @param val Time as a style property type
 */
function singleTimeToCssString(val) {
    if (typeof val === "string")
        return val;
    else if (val instanceof StringProxy)
        return val.toString();
    else
        return tsh_1.tsh.time(val);
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
        return tsh_1.tsh.time(val);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1jc3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL21pbWNzcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL1J1bGVGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL2FwaS9TZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvYXBpL3Njb3BlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9taW1jc3NUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQW5pbWF0aW9uUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvQ2xhc3NSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9DdXN0b21WYXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL0lEUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvUnVsZS50cyIsIndlYnBhY2s6Ly9taW1jc3MvLi9zcmMvcnVsZXMvU2VsZWN0b3JSdWxlLnRzIiwid2VicGFjazovL21pbWNzcy8uL3NyYy9ydWxlcy9TdHlsZVJ1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1N0eWxlU2NvcGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1RhZ1J1bGUudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3J1bGVzL1Rzc01hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9jb2xvcnMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy90c2gudHMiLCJ3ZWJwYWNrOi8vbWltY3NzLy4vc3JjL3N0eWxlcy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBp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LE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxFQUFFLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUUsQ0FBUyxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWpFOzs7O09B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LEdBQVEsRUFBRSxZQUFxQixFQUFFLEdBQUcsYUFBMEQ7SUFFN0gsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQztJQUVuQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFUixLQUFLLElBQUksV0FBVyxJQUFJLGFBQWEsRUFDckM7UUFDSSxJQUFJLFFBQVEsR0FBRyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksSUFBSSxHQUFHLE9BQU8sV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEUsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxJQUFJLElBQUk7WUFDZixTQUFTO1FBRWIsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDWixDQUFDLElBQUksR0FBRyxDQUFDO1FBRWIsSUFBSSxZQUFZO1lBQ1osQ0FBQyxJQUFJLFFBQVEsQ0FBQztRQUVsQixJQUFJLElBQUk7WUFDSixDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBRSxPQUFPLENBQUMsQ0FBQzthQUN6QixJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ3BCLENBQUMsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDO0tBQzFCO0lBRUosT0FBTyxDQUFDLENBQUM7QUFDVixDQUFDO0FBN0JELDhDQTZCQyIsImZpbGUiOiJtaW1jc3MuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wibWltY3NzXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWNzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21pbWNzc1R5cGVzLnRzXCIpO1xuIiwiaW1wb3J0IHtFeHRlbmRlZFN0eWxlc2V0LCBJVGFnUnVsZSwgSUNsYXNzUnVsZSwgSUlEUnVsZSwgSVNlbGVjdG9yUnVsZSwgSUFuaW1hdGlvblJ1bGUsXHJcblx0XHRLZXlmcmFtZSwgSUN1c3RvbVZhcn0gZnJvbSBcIi4vcnVsZXNcIlxyXG5pbXBvcnQge0lTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzLCBJU3R5bGVTY29wZX0gZnJvbSBcIi4vc2NvcGVcIlxyXG5pbXBvcnQge0lTZWxlY3Rvcn0gZnJvbSBcIi4vU2VsZWN0b3JcIlxyXG5cclxuaW1wb3J0IHtTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXNcIlxyXG5pbXBvcnQge1RhZ1J1bGV9IGZyb20gXCIuLi9ydWxlcy9UYWdSdWxlXCJcclxuaW1wb3J0IHtDbGFzc1J1bGV9IGZyb20gXCIuLi9ydWxlcy9DbGFzc1J1bGVcIlxyXG5pbXBvcnQge0lEUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0lEUnVsZVwiXHJcbmltcG9ydCB7U2VsZWN0b3JSdWxlfSBmcm9tIFwiLi4vcnVsZXMvU2VsZWN0b3JSdWxlXCJcclxuaW1wb3J0IHtBbmltYXRpb25SdWxlfSBmcm9tIFwiLi4vcnVsZXMvQW5pbWF0aW9uUnVsZVwiXHJcbmltcG9ydCB7Q3VzdG9tVmFyfSBmcm9tIFwiLi4vcnVsZXMvQ3VzdG9tVmFyXCJcclxuaW1wb3J0IHtTdHlsZVNjb3BlfSBmcm9tIFwiLi4vcnVsZXMvU3R5bGVTY29wZVwiXHJcblxyXG5cclxuXHJcbi8qKiBDcmVhdGVzIG5ldyBUYWdSdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICR0YWcoIHRhZ05hbWU6IHN0cmluZywgc3R5bGVzZXQ6IEV4dGVuZGVkU3R5bGVzZXQpOiBJVGFnUnVsZSB7IHJldHVybiBuZXcgVGFnUnVsZSggdGFnTmFtZSwgc3R5bGVzZXQpOyB9XHJcblxyXG4vKiogUmV0dXJucyBuZXcgQ2xhc3NSdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRjbGFzcyggc3R5bGVzZXQ6IEV4dGVuZGVkU3R5bGVzZXQpOiBJQ2xhc3NSdWxlIHsgcmV0dXJuIG5ldyBDbGFzc1J1bGUoIHN0eWxlc2V0KTsgfVxyXG5cclxuLyoqIFJldHVybnMgbmV3IElEUnVsZSBvYmplY3QgICovXHJcbmV4cG9ydCBmdW5jdGlvbiAkaWQoIHN0eWxlc2V0OiBFeHRlbmRlZFN0eWxlc2V0KTogSUlEUnVsZSB7IHJldHVybiBuZXcgSURSdWxlKCBzdHlsZXNldCk7IH1cclxuXHJcbi8qKiBDcmVhdGVzIG5ldyBTZWxlY3RvclJ1bGUgb2JqZWN0ICAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHJ1bGUoIHNlbGVjdG9yOiBJU2VsZWN0b3IgfCBzdHJpbmcsIHN0eWxlc2V0OiBFeHRlbmRlZFN0eWxlc2V0KTogSVNlbGVjdG9yUnVsZVxyXG5cdHsgcmV0dXJuIG5ldyBTZWxlY3RvclJ1bGUoIHNlbGVjdG9yLCBzdHlsZXNldCk7IH1cclxuXHJcbi8qKiBSZXR1cm5zIG5ldyBBbmltYXRpb25SdWxlIG9iamVjdCAgKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRhbmltYXRpb24oIC4uLmtleWZyYW1lczogS2V5ZnJhbWVbXSk6IElBbmltYXRpb25SdWxlIHsgcmV0dXJuIG5ldyBBbmltYXRpb25SdWxlKCBrZXlmcmFtZXMpOyB9XHJcblxyXG4vKiogUmV0dXJucyBuZXcgQ3VzdG9tUHJvcCBvYmplY3QgdGhhdCBkZWZpbmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJGN1c3RvbTxLIGV4dGVuZHMga2V5b2YgU3R5bGVzZXQ+KCB0ZW1wbGF0ZVByb3BOYW1lOiBLLCBwcm9wVmFsOiBTdHlsZXNldFtLXSk6IElDdXN0b21WYXI8U3R5bGVzZXRbS10+XHJcblx0eyByZXR1cm4gbmV3IEN1c3RvbVZhciggdGVtcGxhdGVQcm9wTmFtZSwgcHJvcFZhbCk7IH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBhbmQgcmV0dXJucyB0aGUgU3R5bGVTY29wZSBvYmplY3QgdGhhdCBjb250YWluc1xyXG4gKiBuYW1lcyBvZiBJRHMsIGNsYXNzZXMgYW5kIGtleWZyYW1lcyBhbmQgYWxsb3dzIHN0eWxlIG1hbmlwdWxhdGlvbnMuIEZvciBhIGdpdmVuIHN0eWxlIHNjb3BlXHJcbiAqIGRlZmluaXRpb24gY2xhc3MgdGhlcmUgaXMgYSBzaW5nbGUgc3R5bGUgc2NvcGUgb2JqZWN0LCBubyBtYXR0ZXIgaG93IG1hbnkgdGltZXMgdGhpcyBmdW5jdGlvblxyXG4gKiBpcyBpbnZva2VkLlxyXG4gKiBAcGFyYW0gc2hlZXREZWYgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gJHNjb3BlPFQ+KCBzdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzOiBJU3R5bGVTY29wZURlZmluaXRpb25DbGFzczxUPik6IElTdHlsZVNjb3BlPFQ+XHJcbntcclxuXHQvLyBpZiB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBpcyBtdWx0aXBsZXgsIGNyZWF0ZSBuZXcgU3R5bGVTY29wZSBvYmplY3QgZXZlcnkgdGltZTtcclxuXHQvLyBvdGhlcndpc2UsIGNoZWNrIHdoZXRoZXIgdGhlIHN0eWxlIHNoZWV0IGRlZmluaXRpb24gb2JqZWN0IGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLiBUaGlzXHJcblx0Ly8gaXMgaW5kaWNhdGVkIGJ5IHRoZSBleGlzdGVuY2Ugb2YgdGhlIGluc3RhbmNlIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgY2xhc3MuXHJcblx0aWYgKHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MuaXNNdWx0aXBsZXgpXHJcblx0XHRyZXR1cm4gbmV3IFN0eWxlU2NvcGUoIHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRsZXQgc3R5bGVTY29wZSA9IHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3Muc3R5bGVTY29wZSBhcyBTdHlsZVNjb3BlPFQ+O1xyXG5cdFx0aWYgKCFzdHlsZVNjb3BlKVxyXG5cdFx0e1xyXG5cdFx0XHRzdHlsZVNjb3BlID0gbmV3IFN0eWxlU2NvcGUoIHN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3MpO1xyXG5cdFx0XHRzdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzLnN0eWxlU2NvcGUgPSBzdHlsZVNjb3BlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzdHlsZVNjb3BlO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTdHlsZVJ1bGUsIElUYWdSdWxlLCBJQ2xhc3NSdWxlLCBJSURSdWxlfSBmcm9tIFwiLi9ydWxlc1wiXHJcbi8vIGltcG9ydCB7SVNlbGVjdG9yLCBJRW1wdHlTZWxlY3RvciwgQXR0clNlbGVjdG9yT3BlcmF0aW9uLCBBdHRyU2VsZWN0b3JPcGVyYXRpb25UeXBlLCB9IGZyb20gXCIuL0lTZWxlY3RvclwiXHJcbmltcG9ydCB7VGFnUnVsZX0gZnJvbSBcIi4uL3J1bGVzL1RhZ1J1bGVcIlxyXG5pbXBvcnQge0NsYXNzUnVsZX0gZnJvbSBcIi4uL3J1bGVzL0NsYXNzUnVsZVwiXHJcbmltcG9ydCB7SURSdWxlfSBmcm9tIFwiLi4vcnVsZXMvSURSdWxlXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjb21wbGV0ZSBDU1Mgc2VsZWN0b3IgdGhhdCBjYW4gYmUgZWl0aGVyIHVzZWQgYXMgaXMgb3IgY2FuIGJlIGNvbWJpbmVkIHdpdGggb3RoZXIgc2VsZWN0b3JzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU2VsZWN0b3IgZXh0ZW5kcyBJQ29tcG91bmRTZWxlY3RvclxyXG57XHJcblx0cmVhZG9ubHkgYW5kOiBJRW1wdHlTZWxlY3RvcjtcclxuXHRyZWFkb25seSBjaGlsZDogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZGVzY2VuZGFuZDogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc2libGluZzogSUVtcHR5U2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYWRqYWNlbnQ6IElFbXB0eVNlbGVjdG9yO1xyXG5cclxuXHQvKiogUmV0dXJucyBhIGxpc3Qgb2YgYWxsIHJ1bGVzIHBhcnRpY2lwYXRpbmcgaW4gdGhlIHNlbGVjdG9yLiAqL1xyXG5cdGdldFJ1bGVzKCk6IElTdHlsZVJ1bGVbXTtcclxuXHJcblx0LyoqIFJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgc2VsZWN0b3IgKi9cclxuXHR0b0Nzc1N0cmluZygpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBzdGFydGluZyBwb2ludCBpbiB0aGUgc2VsZWN0b3IgYnVpbGRpbmcgcHJvY2Vzcy4gVGhpcyBzZWxlY3RvciBjYW5ub3QgYmUgdXNlZCBhc1xyXG4gKiBpcyBiZWNhdXNlIGl0IGRvZXNuJ3QgY29udGFpbiBhbnkgc2VsZWN0aW9uIGNvbnRlbnQgeWV0LlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJRW1wdHlTZWxlY3RvciBleHRlbmRzIElDb21wb3VuZFNlbGVjdG9yXHJcbntcclxuXHRhbGwoIG5zPzogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdHRhZyggdGFnOiBzdHJpbmcgfCBJVGFnUnVsZSk6IElTZWxlY3RvcjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHBvaW50IGluIHNlbGVjdG9yIGJ1aWxkaW5nLCB3aGljaCBhbGxvd3MgY2xhc3MsIGF0dHJpYnV0ZSwgcHNldWRvLWNsYXNzIGFuZCBwc2V1ZG8gZWxlbWVudCBzZWxlY3RvcnNcclxuICovXHJcbmludGVyZmFjZSBJQ29tcG91bmRTZWxlY3RvclxyXG57XHJcblx0Y2xhc3MoIGNsczogc3RyaW5nIHwgSUNsYXNzUnVsZSk6IElTZWxlY3RvcjtcclxuXHRpZCggaWQ6IHN0cmluZyB8IElJRFJ1bGUpOiBJU2VsZWN0b3I7XHJcblx0YXR0ciggYXR0ck5hbWU6IHN0cmluZywgb3A/OiBBdHRyU2VsZWN0b3JPcGVyYXRpb24gfCBBdHRyU2VsZWN0b3JPcGVyYXRpb25UeXBlLCB2YWx1ZT86IHN0cmluZywgY2FzZUluc2Vuc2l0aXZlPzogYm9vbGVhbik6IElTZWxlY3RvcjtcclxuXHJcblx0Ly8gcHNldWRvIGNsYXNzZXNcclxuXHRyZWFkb25seSBhY3RpdmU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBhbnlMaW5rOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYmxhbms6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBjaGVja2VkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZGVmYXVsdDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGRlZmluZWQ6IElTZWxlY3RvcjtcclxuXHRkaXIoIHM6IFwicnRsXCIgfCBcImx0clwiKTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGRpc2FibGVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZW1wdHk6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBlbmFibGVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3Q6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdENoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3RPZlR5cGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmdWxsc2NyZWVuOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZm9jdXM6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmb2N1c1Zpc2libGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmb2N1c1dpdGhpbjogSVNlbGVjdG9yO1xyXG5cdGhhcyggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdGhvc3QoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRob3N0Q29udGV4dCggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGhvdmVyOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgaW5kZXRlcm1pbmF0ZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGluUmFuZ2U6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBpbnZhbGlkOiBJU2VsZWN0b3I7XHJcblx0aXMoIHM6IHN0cmluZyk6IElTZWxlY3RvcjtcclxuXHRsYW5nKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgbGFzdENoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgbGFzdE9mVHlwZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGxlZnQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBsaW5rOiBJU2VsZWN0b3I7XHJcblx0bm90KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0bnRoQ2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvcjtcclxuXHRudGhMYXN0Q2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvcjtcclxuXHRudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3I7XHJcblx0bnRoT2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb25seUNoaWxkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb25seU9mVHlwZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IG9wdGlvbmFsOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgb3V0T2ZSYW5nZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHBsYWNlaG9sZGVyU2hvd246IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSByZWFkT25seTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHJlYWRXcml0ZTogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHJlcXVpcmVkOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcmlnaHQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSByb290OiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc2NvcGU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSB0YXJnZXQ6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSB2YWxpZDogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IHZpc2l0ZWQ6IElTZWxlY3RvcjtcclxuXHR3aGVyZSggczogc3RyaW5nKTogSVNlbGVjdG9yO1xyXG5cclxuXHQvLyBwc2V1ZG8gZWxlbWVudHNcclxuXHRyZWFkb25seSBhZnRlcjogSVNlbGVjdG9yO1xyXG5cdHJlYWRvbmx5IGJhY2tkcm9wOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgYmVmb3JlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgY3VlOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgZmlyc3RMZXR0ZXI6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBmaXJzdExpbmU6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBncmFtbWFyRXJyb3I6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBtYXJrZXI6IElTZWxlY3RvcjtcclxuXHRwYXJ0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgcGxhY2Vob2xkZXI6IElTZWxlY3RvcjtcclxuXHRyZWFkb25seSBzZWxlY3Rpb246IElTZWxlY3RvcjtcclxuXHRzbG90dGVkKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3I7XHJcblx0cmVhZG9ubHkgc3BlbGxpbmdFcnJvcjogSVNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHBvc3NpYmxlIG9wZXJhdGlvbnMgZm9yIGF0dHJpYnV0ZSBzZWxlY3RvclxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQXR0clNlbGVjdG9yT3BlcmF0aW9uVHlwZSA9IFwiPVwiIHwgXCJ+PVwiIHwgXCJ8PVwiIHwgXCJePVwiIHwgXCIkPVwiIHwgXCIqPVwiO1xyXG5leHBvcnQgZW51bSBBdHRyU2VsZWN0b3JPcGVyYXRpb25cclxue1xyXG5cdE1hdGNoID0gXCI9XCIsXHJcblx0V29yZCA9IFwifj1cIixcclxuXHRTdWJDb2RlID0gXCJ8PVwiLFxyXG5cdFN0YXJ0c1dpdGggPSBcIl49XCIsXHJcblx0RW5kc1dpdGggPSBcIiQ9XCIsXHJcblx0Q29udGFpbnMgPSBcIio9XCIsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBzZWxlY3RvciBjbGFzcyBlbmNhcHN1bGF0ZXMgYWxsIHRoZSBmdW5jdGlvbmFsaXR5IGZvciBidWlsZGluZyBhIENTUyBzZWxlY3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvciBpbXBsZW1lbnRzIElFbXB0eVNlbGVjdG9yLCBJU2VsZWN0b3Jcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvciggcmF3Pzogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHRoaXMuYnVmID0gW107XHJcblxyXG5cdFx0aWYgKHJhdylcclxuXHRcdFx0dGhpcy5idWYucHVzaCggcmF3KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2VsZWN0b3IgY29tYmluYXRvcnNcclxuXHRwdWJsaWMgZ2V0IGFuZCgpOiBJRW1wdHlTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiLCBcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBjaGlsZCgpOiBJRW1wdHlTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiID4gXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZGVzY2VuZGFuZCgpOiBJRW1wdHlTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiIFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHNpYmxpbmcoKTogSUVtcHR5U2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIiB+IFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGFkamFjZW50KCk6IElFbXB0eVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCIgKyBcIik7IHJldHVybiB0aGlzOyB9XHJcblxyXG5cdHB1YmxpYyBhbGwoIG5zPzogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggbnMgPT0gbnVsbCA/IFwiKlwiIDogYCR7bnN9fCpgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgdGFnKCB0YWc6IHN0cmluZyB8IElUYWdSdWxlKTogSVNlbGVjdG9yXHJcblx0e1xyXG5cdFx0dGhpcy5idWYucHVzaCggdGFnKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRwdWJsaWMgY2xhc3MoIGNsczogc3RyaW5nIHwgSUNsYXNzUnVsZSk6IElTZWxlY3RvclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmLnB1c2goIHR5cGVvZiBjbHMgPT09IFwic3RyaW5nXCIgPyBcIi5cIiArIGNscyA6IGNscyk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIGlkKCBpZDogc3RyaW5nIHwgSUlEUnVsZSk6IElTZWxlY3RvclxyXG5cdHtcclxuXHRcdHRoaXMuYnVmLnB1c2goIHR5cGVvZiBpZCA9PT0gXCJzdHJpbmdcIiA/IFwiLlwiICsgaWQgOiBpZCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0cHVibGljIGF0dHIoIGF0dHJOYW1lOiBzdHJpbmcsIG9wPzogQXR0clNlbGVjdG9yT3BlcmF0aW9uIHwgQXR0clNlbGVjdG9yT3BlcmF0aW9uVHlwZSxcclxuXHRcdFx0XHRcdHZhbHVlPzogc3RyaW5nLCBjYXNlSW5zZW5zaXRpdmU/OiBib29sZWFuKTogSVNlbGVjdG9yXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBcIltcIiArIGF0dHJOYW1lO1xyXG5cdFx0aWYgKG9wKVxyXG5cdFx0XHRzICs9IG9wICsgdmFsdWU7XHJcblx0XHRpZiAoY2FzZUluc2Vuc2l0aXZlKVxyXG5cdFx0XHRzICs9IFwiIGlcIjtcclxuXHRcdHMgKz0gXCJdXCI7XHJcblx0XHR0aGlzLmJ1Zi5wdXNoKHMpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvLyBwc2V1ZG8gY2xhc3Nlc1xyXG5cdHB1YmxpYyBnZXQgYWN0aXZlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmFjdGl2ZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGFueUxpbmsoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6YW55LWxpbmtcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBibGFuaygpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpibGFua1wiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGNoZWNrZWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Y2hlY2tlZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGRlZmF1bHQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6ZGVmYXVsdFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGRlZmluZWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6ZGVmaW5lZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZGlyKCBzOiBcInJ0bFwiIHwgXCJsdHJcIik6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmRpcigke3N9KVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGRpc2FibGVkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmRpc2FibGVkXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZW1wdHkoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6ZW1wdHlcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBlbmFibGVkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmVuYWJsZWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmaXJzdCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpmaXJzdFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZpcnN0Q2hpbGQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Zmlyc3QtY2hpbGRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmaXJzdE9mVHlwZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpmaXJzdC1vZi10eXBlXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZnVsbHNjcmVlbigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpmdWxsc2NyZWVuXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgZm9jdXMoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Zm9jdXNcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmb2N1c1Zpc2libGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Zm9jdXMtdmlzaWJsZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZvY3VzV2l0aGluKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmZvY3VzLXdpdGhpblwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgaGFzKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOmhhcygke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBob3N0KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOmhvc3QoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgaG9zdENvbnRleHQoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6aG9zdC1jb250ZXh0KCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBob3ZlcigpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpob3ZlclwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGluZGV0ZXJtaW5hdGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6aW5kZXRlcm1pbmF0ZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGluUmFuZ2UoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6aW4tcmFuZ2VcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBpbnZhbGlkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmludmFsaWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGlzKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOmlzKCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGxhbmcoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bGFuZygke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgbGFzdENoaWxkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmxhc3QtY2hpbGRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBsYXN0T2ZUeXBlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOmxhc3Qtb2YtdHlwZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGxlZnQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6bGVmdFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGxpbmsoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6bGlua1wiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgbm90KCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm5vdCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBudGhDaGlsZCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDpudGgtY2hpbGQoJHt0aGlzLm50aCggYSwgYil9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBudGhMYXN0Q2hpbGQoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bnRoLWxhc3QtY2hpbGQoJHt0aGlzLm50aCggYSwgYil9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBudGhMYXN0T2ZUeXBlKCBhOiBudW1iZXIgfCBcIm9kZFwiIHwgXCJldmVuXCIsIGI/OiBudW1iZXIpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOm50aC1sYXN0LW9mLXR5cGUoJHt0aGlzLm50aCggYSwgYil9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBudGhPZlR5cGUoIGE6IG51bWJlciB8IFwib2RkXCIgfCBcImV2ZW5cIiwgYj86IG51bWJlcik6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6bnRoLW9mLXR5cGUoJHt0aGlzLm50aCggYSwgYil9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgb25seUNoaWxkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOm9ubHktY2hpbGRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBvbmx5T2ZUeXBlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOm9ubHktb2YtdHlwZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IG9wdGlvbmFsKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOm9wdGlvbmFsXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgb3V0T2ZSYW5nZSgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpvdXQtb2YtcmFuZ2VcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBwbGFjZWhvbGRlclNob3duKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnBsYWNlaG9sZGVyLXNob3duXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgcmVhZE9ubHkoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6cmVhZC1vbmx5XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgcmVhZFdyaXRlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnJlYWQtd3JpdGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCByZXF1aXJlZCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpyZXF1aXJlZFwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHJpZ2h0KCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnJpZ2h0XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgcm9vdCgpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBcIjpyb290XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgc2NvcGUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6c2NvcGVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCB0YXJnZXQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6dGFyZ2V0XCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgdmFsaWQoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6dmFsaWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCB2aXNpdGVkKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOnZpc2l0ZWRcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIHdoZXJlKCBzOiBzdHJpbmcpOiBJU2VsZWN0b3IgeyB0aGlzLmJ1Zi5wdXNoKCBgOndoZXJlKCR7c30pYCk7IHJldHVybiB0aGlzOyB9XHJcblxyXG5cdC8vIHBzZXVkbyBlbGVtZW50c1xyXG5cdHB1YmxpYyBnZXQgYWZ0ZXIoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmFmdGVyXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgYmFja2Ryb3AoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmJhY2tkcm9wXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgYmVmb3JlKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOjpiZWZvcmVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBjdWUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmN1ZVwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IGZpcnN0TGV0dGVyKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOjpmaXJzdC1sZXR0ZXJcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBmaXJzdExpbmUoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmZpcnN0LWxpbmVcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBncmFtbWFyRXJyb3IoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OmdyYW1tYXItZXJyb3JcIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIGdldCBtYXJrZXIoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6Om1hcmtlclwiKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgcGFydCggczogc3RyaW5nKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggYDo6cGFydCgke3N9KWApOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgcGxhY2Vob2xkZXIoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OnBsYWNlaG9sZGVyXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cdHB1YmxpYyBnZXQgc2VsZWN0aW9uKCk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIFwiOjpzZWxlY3Rpb25cIik7IHJldHVybiB0aGlzOyB9XHJcblx0cHVibGljIHNsb3R0ZWQoIHM6IHN0cmluZyk6IElTZWxlY3RvciB7IHRoaXMuYnVmLnB1c2goIGA6OnNsb3R0ZWQoJHtzfSlgKTsgcmV0dXJuIHRoaXM7IH1cclxuXHRwdWJsaWMgZ2V0IHNwZWxsaW5nRXJyb3IoKTogSVNlbGVjdG9yIHsgdGhpcy5idWYucHVzaCggXCI6OnNwZWxsaW5nLWVycm9yXCIpOyByZXR1cm4gdGhpczsgfVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIFwibnRoXCIgbm90YXRpb25cclxuXHRwcml2YXRlIG50aCggYTogbnVtYmVyIHwgXCJvZGRcIiB8IFwiZXZlblwiLCBiPzogbnVtYmVyKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGIgPT0gbnVsbCA/IGEudG9TdHJpbmcoKSA6IGAke2F9biR7YiA+PSAwID8gYCske2J9YCA6IGAtJHstYn1gfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCBydWxlcyBwYXJ0aWNpcGF0aW5nIGluIHRoZSBzZWxlY3Rvci5cclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0UnVsZXMoKTogSVN0eWxlUnVsZVtdXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuYnVmLmZpbHRlciggKGl0ZW0pID0+IHR5cGVvZiBpdGVtICE9PSBcInN0cmluZ1wiKSBhcyBJU3R5bGVSdWxlW107XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnZlcnRzIHRoZSBhY2N1bXVsYXRlZCBzZWxlY3RvciB0b2tlbnMgaW50byBmdWxsIHNlbGVjdG9yIHN0cmluZy5cclxuXHQgKi9cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0Zm9yKCBsZXQgdG9rZW4gb2YgdGhpcy5idWYpXHJcblx0XHR7XHJcblx0XHRcdGlmICh0b2tlbiBpbnN0YW5jZW9mIFRhZ1J1bGUpXHJcblx0XHRcdFx0cyArPSB0b2tlbi50YWdOYW1lO1xyXG5cdFx0XHRlbHNlIGlmICh0b2tlbiBpbnN0YW5jZW9mIENsYXNzUnVsZSlcclxuXHRcdFx0XHRzICs9IHRva2VuLmNvbWJpbmVkU2VsZWN0b3JOYW1lO1xyXG5cdFx0XHRlbHNlIGlmICh0b2tlbiBpbnN0YW5jZW9mIElEUnVsZSlcclxuXHRcdFx0XHRzICs9IFwiI1wiICsgdG9rZW4uaWROYW1lO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cyArPSB0b2tlbjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW50ZXJuYWwgYnVmZmVyLCB3aGVyZSBzZWxlY3RvciB0b2tlbnMgYXJlIGFjY3VtdWxhdGVkLlxyXG5cdHByaXZhdGUgYnVmOiAoc3RyaW5nIHwgSVRhZ1J1bGUgfCBJQ2xhc3NSdWxlIHwgSUlEUnVsZSlbXTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBlbXB0eSBzZWxlY3RvciBmcm9tIHdoaWNoIHNlbGVjdG9yIGJ1aWxkaW5nIHByb2Nlc3Mgc3RhcnRzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICRzZWxlY3RvcigpOiBJRW1wdHlTZWxlY3RvciB7IHJldHVybiBuZXcgU2VsZWN0b3IoKTsgfVxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogVGhpcyBtb2R1bGUgZGVmaW5lcyB0eXBlcyBhbmQgZnVuY3Rpb25zIHRoYXQgYWxsb3cgYnVpbGRpbmcgQ1NTIHN0eWxlIHNoZWV0cyB1c2luZyBUeXBlU2NyaXB0LlxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQge05hbWVzT2ZQcm9wc09mVHlwZSwgUHJvcHNPZlR5cGUsIElSdWxlLCBJU3R5bGVSdWxlLCBJVGFnUnVsZSwgSUNsYXNzUnVsZSwgSUlEUnVsZSxcclxuXHRcdElTZWxlY3RvclJ1bGUsIElBbmltYXRpb25SdWxlLCBJQ3VzdG9tVmFyLCBVbm5hbWVkUnVsZX0gZnJvbSBcIi4vcnVsZXNcIjtcclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTdHlsZVNjb3BlRGVmaW5pdGlvbk9wdGlvbnMgPVxyXG57XHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHdpdGhpbiB3aGljaCBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGNyZWF0ZSBydWxlcyBub3QgYXNzaWduZWRcclxuXHQgKiB0byBhIG1lbWJlciBwcm9wZXJ0eS4gVGhlc2UgcnVsZXMgY2Fubm90IGJlIHRob3NlIHRoYXQgcmVxdWlyZSBuYW1lLCBzdWNoIGFzIGNsYXNzLCBJRCxcclxuXHQgKiBhbmltYXRpb24gb3IgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuXHQgKi9cclxuXHR1bm5hbWVkUnVsZXM/OiBVbm5hbWVkUnVsZVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBcIkNvbnN0cnVjdG9yXCIgaW50ZXJmYWNlIGRlZmluaW5nIGhvdyBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGNsYXNzZXMgY2FuIGJlIGNyZWF0ZWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzPFQ+XHJcbntcclxuXHQvKiogQWxsIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gb2JqZWN0cyBzaG91bGQgY29uZm9ybSB0byB0aGlzIGNvbnN0cnVjdG9yICovXHJcblx0bmV3KCBvcHRpb25zPzogU3R5bGVTY29wZURlZmluaXRpb25PcHRpb25zKTogVDtcclxuXHJcblx0LyoqXHJcblx0ICogRmxhZyBpbmlkaWNhdGluZyB0aGF0IG11bHRpcGxlIHN0eWxlIHNjb3BlcyBjYW4gYmUgY3JlYXRlZCBmb3IgdGhpcyBzdHlsZSBzY29wZSBkZWZpbml0aW9uIC1cclxuXHQgKiBlYWNoIHRpbWUgd2l0aCB1bmlxdWUgcnVsZSBJRHMuIFRoaXMgaXMgdXNlZnVsIGZvciBzdHlsZXMgY3JlYXRlZCBmb3IgYSBjb250cm9sIC0gZS5nLiB0cmVlXHJcblx0ICogb3IgYWNjb3JkZW9uIC0gd2hpY2ggY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgcGFnZSBidXQgd2l0aCBkaWZmZXJlbnQgc3R5bGVzLlxyXG5cdCAqIEJ5IGRlZmF1bHQsIHN0eWxlIHNjb3BlIGRlZmluaXRpb25zIGFyZSBzaW5ndWxhciwgdGhhdCBpcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiBhIHN0eWxlIHNjb3BlXHJcblx0ICogb2JqZWN0IGlzIGNyZWF0ZWQgZm9yIHRoZW0gYW5kIGluc2VydGVkIGludG8gRE9NLlxyXG5cdCAqL1xyXG5cdGlzTXVsdGlwbGV4PzogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogU2luZ2xldG9uIGluc3RhbmNlIG9mIHRoZSBTdHlsZSBTY29wZSBjbGFzcyBjcmVhdGVkIGZyb20gdGhpcyBkZWZpbml0aW9uLiBUaGlzIGlzIHVzZWQgb25seVxyXG5cdCAqIGZvciBzaW5ndWxhciBzdHlsZSBzY29wZXMuXHJcblx0ICovXHJcblx0c3R5bGVTY29wZT86IElTdHlsZVNjb3BlPFQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTY29wZSB0eXBlIGRlZmluZXMgdGhlIHJlc3VsdGFudCBzdHlsZSBzY29wZSBhZnRlciB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBoYXMgYmVlblxyXG4gKiBwcm9jZXNzZWQuIFRoZSBzdHlsZSBzY29wZSBvYmplY3QgY29udGFpbnMgbmFtZXMgb2YgSURzLCBjbGFzc2VzIGFuZCBhbmltYXRpb25zLCB3aGljaCBjYW4gYmVcclxuICogdXNlZCBpbiB0aGUgYXBwbGljYXRpb24gY29kZS4gVGhlIGludGVyZmFjZSBhbHNvIHByb3ZpZGVzIG1ldGhvZHMgdGhhdCBhcmUgdXNlZCB0byBtYW5pcHVsYXRlXHJcbiAqIHRoZSBydWxlcyBhbmQgdGhlaXIgc3R5bGVzZXRzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJU3R5bGVTY29wZTxUID0gYW55PlxyXG57XHJcblx0LyoqXHJcblx0ICogQ2xhc3MgdGhhdCBkZWZpbmVkIHRoaXMgc3R5bGUgc2NvcGUuIFRoaXMgbWVtYmVyIGlzIHVzZWQgZm9yIHN0eWxlIHNjb3BlIGRlcml2YXRpb246XHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqIGxldCBzY29wZTEgPSAkc2NvcGUoIGNsYXNzIC4uLik7XHJcblx0ICogbGV0IHNjb3BlMiA9ICRzY29wZSggY2xhc3MgZXh0ZW5kcyBzY29wZTEuRGVmaW5pdGlvbiAuLi4pO1xyXG5cdCAqIGBgYFxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IERlZmluaXRpb246IElTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzPFQ+O1xyXG5cclxuXHQvKiogTmFtZXMgb2YgY2xhc3NlcyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzY29wZSAqL1xyXG5cdHJlYWRvbmx5IGNsYXNzTmFtZXM6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElDbGFzc1J1bGU+O1xyXG5cclxuXHQvKiogTmFtZXMgb2YgZWxlbWVudCBpZGVudGlmaWVycyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzY29wZSAqL1xyXG5cdHJlYWRvbmx5IGlkTmFtZXM6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElJRFJ1bGU+O1xyXG5cclxuXHQvKiogTmFtZXMgb2YgYW5pbWF0aW9ucyBkZWZpbmVkIGluIHRoZSBzdHlsZSBzY29wZSAqL1xyXG5cdHJlYWRvbmx5IGFuaW1hdGlvbk5hbWVzOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT47XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBjdXN0b20gQ1NTIHByb3BlcnRpZXMgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2NvcGUgKi9cclxuXHRyZWFkb25seSB2YXJOYW1lczogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj47XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIHN0eWxlICh0YWcsIGNsYXNzLCBJRCBhbmQgc2VsZWN0b3IpIHJ1bGVzLiAqL1xyXG5cdHJlYWRvbmx5IHN0eWxlUnVsZXM6IFByb3BzT2ZUeXBlPFQsSVN0eWxlUnVsZT47XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIHRhZyBydWxlcy4gKi9cclxuXHRyZWFkb25seSB0YWdSdWxlczogUHJvcHNPZlR5cGU8VCxJVGFnUnVsZT47XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIGNsYXNzIHJ1bGVzLiAqL1xyXG5cdHJlYWRvbmx5IGNsYXNzUnVsZXM6IFByb3BzT2ZUeXBlPFQsSUNsYXNzUnVsZT47XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIElEIHJ1bGVzLiAqL1xyXG5cdHJlYWRvbmx5IGlkUnVsZXM6IFByb3BzT2ZUeXBlPFQsSUlEUnVsZT47XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIHNlbGVjdG9yIHJ1bGVzLiAqL1xyXG5cdHJlYWRvbmx5IHNlbGVjdG9yUnVsZXM6IFByb3BzT2ZUeXBlPFQsSVNlbGVjdG9yUnVsZT47XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIGFuaW1hdGlvbiBydWxlcy4gKi9cclxuXHRyZWFkb25seSBhbmltYXRpb25SdWxlczogUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT47XHJcblxyXG4gXHQvKiogTWFwIG9mIENTUyBjdXN0b20gcHJvcGVydHkgZGVmaW5pdGlvbnMuICovXHJcblx0cmVhZG9ubHkgdmFyUnVsZXM/OiBQcm9wc09mVHlwZTxULElDdXN0b21WYXI+O1xyXG5cclxuXHQvKiogTWFwIG9mIGFsbCBuYW1lZCBydWxlcy4gKi9cclxuXHRyZWFkb25seSBuYW1lZFJ1bGVzOiBQcm9wc09mVHlwZTxULElSdWxlPjtcclxuXHJcblx0LyoqIExpc3Qgb2YgYWxsIHVubmFtZWQgcnVsZXMuICovXHJcblx0cmVhZG9ubHkgdW5uYW1lZFJ1bGVzOiBJUnVsZVtdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jdGlvbnMgdG8gY29uZmlndXJlIFRzc01hbmFnZXIgb3B0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtUc3NNYW5hZ2VyfSBmcm9tIFwiLi4vcnVsZXMvVHNzTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHVuaXF1ZSkgc3R5bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcbiAqIHdpbGwgYmUgY3JlYXRlZCBieSBhcHBlbmRpbmcgYSB1bmlxdWUgbnVtYmVyIHRvIHRoZSBnaXZlbiBwcmVmaXguIElmIHRoZSBwcmVmaXggaXMgbm90XHJcbiAqIHNwZWNpZmllZCwgdGhlIHN0YW5kYXJkIHByZWZpeCBcIm5cIiB3aWxsIGJlIHVzZWQuXHJcbiAqIEBwYXJhbSBvcHRpbWl6ZVxyXG4gKiBAcGFyYW0gcHJlZml4XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlT3B0aW1pemVkU3R5bGVOYW1lcyggb3B0aW1pemU6IGJvb2xlYW4sIHByZWZpeD86IHN0cmluZyk6IHZvaWRcclxuXHR7IFRzc01hbmFnZXIudXNlT3B0aW1pemVkU3R5bGVOYW1lcyggb3B0aW1pemUsIHByZWZpeCk7IH1cclxuXHJcblxyXG5cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy91dGlsc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9zdHlsZXMvY29sb3JzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3N0eWxlcy90c2hcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vc3R5bGVzL3N0eWxlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU2VsZWN0b3JcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL3J1bGVzXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9zY29wZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvUnVsZUZ1bmN0aW9uc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU2VsZWN0b3JcIjtcclxuIiwiaW1wb3J0IHtJQW5pbWF0aW9uUnVsZSwgS2V5ZnJhbWV9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge3RzaH0gZnJvbSBcIi4uL3N0eWxlcy90c2hcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCI7XHJcbmltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVGFnUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgdGFnIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uUnVsZSBleHRlbmRzIFJ1bGUgaW1wbGVtZW50cyBJQW5pbWF0aW9uUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBrZXlmcmFtZXM/OiBLZXlmcmFtZVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0aWYgKGtleWZyYW1lcylcclxuXHRcdFx0dGhpcy5rZXlmcmFtZVJ1bGVzID0ga2V5ZnJhbWVzLm1hcCggKGtleWZyYW1lKSA9PiBuZXcgS2V5ZnJhbWVSdWxlKCBrZXlmcmFtZSkpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBTdHlsZVNjb3BlLCBydWxlTmFtZTogc3RyaW5nKVxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0dGhpcy5hbmltYXRpb25OYW1lID0gdGhpcy5vd25lci5nZW5lcmF0ZVNjb3BlZE5hbWUoIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRmb3IoIGxldCBrZXlmcmFtZVJ1bGUgb2YgdGhpcy5rZXlmcmFtZVJ1bGVzKVxyXG5cdFx0XHRrZXlmcmFtZVJ1bGUucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSByZXF1aXJlcyBuYW1lIC0gdGhhdCBpcyBpdCB3aWxsIGJlIGlnbm9yZWQgaWYgY3JlYXRlZCB3aXRoaW5cclxuXHQgKiB0aGUgY3JlYXRlVW5uYW1lZFJ1bGVzXHJcblx0ICovXHJcblx0cHVibGljIGdldCBuYW1lSXNSZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQW5pbWF0aW9uUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEFuaW1hdGlvblJ1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY29weUZyb20oIHNyYzogQW5pbWF0aW9uUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmtleWZyYW1lUnVsZXMgPSBzcmMua2V5ZnJhbWVSdWxlcy5tYXAoIChrZXlmcmFtZVJ1bGUpID0+IGtleWZyYW1lUnVsZS5jbG9uZSgpKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZy5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IHMgPSBgQGtleWZyYW1lcyAke3RoaXMuYW5pbWF0aW9uTmFtZX17IGA7XHJcblx0XHRmb3IoIGxldCBrZXlmcmFtZVJ1bGUgb2YgdGhpcy5rZXlmcmFtZVJ1bGVzKVxyXG5cdFx0XHRzICs9IGtleWZyYW1lUnVsZS50b0Nzc1N0cmluZygpO1xyXG5cdFx0cmV0dXJuIHMgKyBcIn1cIjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzQW5pbWF0aW9uUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gY2xhc3MgYW5kIElEIHJ1bGVzICovXHJcblx0cHVibGljIGtleWZyYW1lUnVsZXM6IEtleWZyYW1lUnVsZVtdO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBhbmltYXRpb24gdG8gdXNlIGluIGFuaW1hdGlvbi1uYW1lIENTUyBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgYW5pbWF0aW9uTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgS2V5ZnJhbWVSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSBzaW5nbGUga2V5ZnJhbWUgY2xhdXNlIGluIHRoZSBhbmltYXRpb24gcnVsZS5cclxuICovXHJcbmNsYXNzIEtleWZyYW1lUnVsZSBleHRlbmRzIFN0eWxlUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBrZXlmcmFtZT86IEtleWZyYW1lKVxyXG5cdHtcclxuXHRcdHN1cGVyKCBrZXlmcmFtZSA/IGtleWZyYW1lLnN0eWxlIDogdW5kZWZpbmVkKTtcclxuXHJcblx0XHRpZiAoa2V5ZnJhbWUpXHJcblx0XHRcdHRoaXMud2F5cG9pbnRTdHJpbmcgPSB0aGlzLnBhcnNlV2F5cG9pbnQoIGtleWZyYW1lLndheXBvaW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwYXJzZVdheXBvaW50KCB3YXlwb2ludDogXCJmcm9tXCIgfCBcInRvXCIgfCBudW1iZXIpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodHlwZW9mIHdheXBvaW50ID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRyZXR1cm4gd2F5cG9pbnQ7XHJcblx0XHRlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKCB3YXlwb2ludCkpXHJcblx0XHRcdHJldHVybiB3YXlwb2ludCArIFwiJVwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHNoLnBlcmNlbnQoIHdheXBvaW50KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEtleWZyYW1lUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEtleWZyYW1lUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBLZXlmcmFtZVJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY29weUZyb20oIHNyYyk7XHJcblx0XHR0aGlzLndheXBvaW50U3RyaW5nID0gc3JjLndheXBvaW50U3RyaW5nO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiAgdGhpcy53YXlwb2ludFN0cmluZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIElkZW50aWZpZXIgb2YgdGhlIHdheXBvaW50IGFzIGEgc3RyaW5nICovXHJcblx0cHVibGljIHdheXBvaW50U3RyaW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJQ2xhc3NSdWxlLCBFeHRlbmRlZFN0eWxlc2V0fSBmcm9tIFwiLi4vYXBpL3J1bGVzXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiO1xyXG5pbXBvcnQge1N0eWxlU2NvcGV9IGZyb20gXCIuL1N0eWxlU2NvcGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIENsYXNzUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgY2xhc3MuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xhc3NSdWxlIGV4dGVuZHMgU3R5bGVSdWxlIGltcGxlbWVudHMgSUNsYXNzUnVsZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBzdHlsZXNldD86IEV4dGVuZGVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogU3R5bGVTY29wZSwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdHRoaXMucHJvcGVyTmFtZSA9IHRoaXMub3duZXIuZ2VuZXJhdGVTY29wZWROYW1lKCBydWxlTmFtZSk7XHJcblx0XHR0aGlzLmNvbWJpbmVkTmFtZSA9IHRoaXMucHJvcGVyTmFtZTtcclxuXHRcdHRoaXMuY29tYmluZWRTZWxlY3Rvck5hbWUgPSBcIi5cIiArIHRoaXMucHJvcGVyTmFtZTtcclxuXHJcblx0XHQvLyBnbyB0aHJvdWdoIGFsbCBwYXJlbnRzOyBmb3IgdGhvc2Ugd2hvIGFyZSBjbGFzc2VzLCBhZGQgdGhlaXIgbmFtZXMgdG8gdGhlIGNvbWJpbmVkIG5hbWUuXHJcblx0XHQvLyBGb3IgdGhvc2Ugd2hvIGFyZSBub3QgY2xhc3NlcywgY29weSB0aGVpciBzdHlsZSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gc3R5bGVzZXQuXHJcblx0XHRmb3IoIGxldCBwYXJlbnQgb2YgdGhpcy5wYXJlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocGFyZW50IGluc3RhbmNlb2YgQ2xhc3NSdWxlICYmIHBhcmVudC5pc1Byb2Nlc3NlZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuY29tYmluZWROYW1lICs9IFwiIFwiICsgcGFyZW50LmNvbWJpbmVkTmFtZTtcclxuXHRcdFx0XHR0aGlzLmNvbWJpbmVkU2VsZWN0b3JOYW1lICs9IHBhcmVudC5jb21iaW5lZFNlbGVjdG9yTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5zdHlsZXNldCwgcGFyZW50LnN0eWxlc2V0KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSByZXF1aXJlcyBuYW1lIC0gdGhhdCBpcyBpdCB3aWxsIGJlIGlnbm9yZWQgaWYgY3JlYXRlZCB3aXRoaW5cclxuXHQgKiB0aGUgY3JlYXRlVW5uYW1lZFJ1bGVzXHJcblx0ICovXHJcblx0cHVibGljIGdldCBuYW1lSXNSZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogQ2xhc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IG5ld1J1bGUgPSBuZXcgQ2xhc3NSdWxlKCk7XHJcblx0XHRuZXdSdWxlLmNvcHlGcm9tKCB0aGlzKTtcclxuXHRcdHJldHVybiBuZXdSdWxlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBcIi5cIiArIHRoaXMucHJvcGVyTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzQ2xhc3NSdWxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBjbGFzcyB1bmRlciB3aGljaCB0aGUgc3R5bGVzZXQgd2lsbCBhcHBlYXIgaW4gdGhlIHN0eWxlIHNoZWV0LlxyXG5cdHB1YmxpYyBwcm9wZXJOYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8vIE5hbWUgdGhhdCBjb21iaW5lcyB0aGUgcHJvcGVyIG5hbWUgb2YgdGhpcyBjbGFzcyBhbmQgdGhlIHByb3BlciBuYW1lcyBvZiBhbGwgY2xhc3NlcyB0aGlzXHJcblx0Ly8gY2xhc3MgaW5oZXJpdHMgZnJvbS4gVGhpcyBuYW1lIHVzZWQgd2l0aCB0aGUgXCJjbGFzc1wiIGF0dHJpYnV0ZSBvbiB0aGUgZWxlbWVudHMuXHJcblx0cHVibGljIGNvbWJpbmVkTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lIHRoYXQgY29tYmluZXMgdGhlIHByb3BlciBuYW1lIG9mIHRoaXMgY2xhc3MgYW5kIHRoZSBwcm9wZXIgbmFtZXMgb2YgYWxsIGNsYXNzZXMgdGhpc1xyXG5cdC8vIGNsYXNzIGluaGVyaXRzIGZyb20uIFRoaXMgbmFtZSBpcyB1c2VkIGFzIGEgc2VsZWN0b3IgZm9yIENTUyBydWxlcy5cclxuXHRwdWJsaWMgY29tYmluZWRTZWxlY3Rvck5hbWU6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lDdXN0b21WYXJ9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge3N0eWxlUHJvcFRvQ3NzU3RyaW5nLCBTdHlsZXNldH0gZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXNcIlxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIjtcclxuaW1wb3J0IHtTdHlsZVNjb3BlfSBmcm9tIFwiLi9TdHlsZVNjb3BlXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDdXN0b21WYXIgY2xhc3MgZGVzY3JpYmVzIGEgY3VzdG9tIENTUyBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21WYXI8VD4gZXh0ZW5kcyBSdWxlIGltcGxlbWVudHMgSUN1c3RvbVZhcjxUPlxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCB0ZW1wbGF0ZVByb3BOYW1lPzoga2V5b2YgU3R5bGVzZXQsIHZhclZhbHVlPzogVClcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50ZW1wbGF0ZVByb3BOYW1lID0gdGVtcGxhdGVQcm9wTmFtZTtcclxuXHRcdHRoaXMudmFyVmFsdWUgPSB2YXJWYWx1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogU3R5bGVTY29wZSwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdHRoaXMudmFyTmFtZSA9IHRoaXMub3duZXIuZ2VuZXJhdGVTY29wZWROYW1lKCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIERldGVybWluZXMgd2hldGhlciB0aGlzIHJ1bGUgcmVxdWlyZXMgbmFtZSAtIHRoYXQgaXMgaXQgd2lsbCBiZSBpZ25vcmVkIGlmIGNyZWF0ZWQgd2l0aGluXHJcblx0ICogdGhlIGNyZWF0ZVVubmFtZWRSdWxlc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgbmFtZUlzUmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IEN1c3RvbVZhcjxUPlxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IEN1c3RvbVZhcjxUPigpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBDdXN0b21WYXI8VD4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZW1wbGF0ZVByb3BOYW1lID0gc3JjLnRlbXBsYXRlUHJvcE5hbWU7XHJcblx0XHR0aGlzLnZhclZhbHVlID0gc3JjLnZhclZhbHVlO1xyXG5cdH1cclxuXHJcblx0Ly8gQ29udmVydHMgdGhlIHJ1bGUgdG8gQ1NTIHN0cmluZy5cclxuXHRwdWJsaWMgdG9Dc3NTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIGAtLSR7dGhpcy52YXJOYW1lfTogJHtzdHlsZVByb3BUb0Nzc1N0cmluZyggdGhpcy50ZW1wbGF0ZVByb3BOYW1lLCB0aGlzLnZhclZhbHVlLCB0cnVlKX1gO1xyXG5cdH1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBpcyBhIHJlYWwgQ1NTIHJ1bGUgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgdW5kZXIgdGhlIDxzdHlsZT5cclxuXHQvLyBlbGVtZW50LiBGb3IgdGhlIG1ham9yaXR5IG9mIFJ1bGUtZGVyaXZlZCBjbGFzc2VzIHRoaXMgaXMgdHJ1ZTsgaG93ZXZlciwgZm9yIHNvbWUgY2xhc3NlcyxcclxuXHQvLyBlLmcuIGZvciB0aGUgQ3VzdG9tVmFyIGNsYXNzLCB0aGlzIGlzIG5vdCBzby5cclxuXHRwdWJsaWMgZ2V0IGlzUmVhbENzc1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0N1c3RvbVZhcigpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvZiBhIG5vbi1jdXN0b20gQ1NTIHByb3BlcnR5IHdob3NlIHR5cGUgZGV0ZXJtaW5lcyB0aGUgdHlwZSBvZiB0aGUgY3VzdG9tIHByb3BlcnR5IHZhbHVlLlxyXG5cdHB1YmxpYyB0ZW1wbGF0ZVByb3BOYW1lOiBrZXlvZiBTdHlsZXNldDtcclxuXHJcblx0Ly8gVmFsdWUgb2YgdGhlIGN1c3RvbSBDU1MgcHJvcGVydHkuXHJcblx0cHVibGljIHZhclZhbHVlOiBUO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBjdXN0b20gQ1NTIHByb3BlcnR5LlxyXG5cdHB1YmxpYyB2YXJOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtJSURSdWxlLCBFeHRlbmRlZFN0eWxlc2V0fSBmcm9tIFwiLi4vYXBpL3J1bGVzXCJcclxuaW1wb3J0IHtTdHlsZVJ1bGV9IGZyb20gXCIuL1N0eWxlUnVsZVwiO1xyXG5pbXBvcnQge1N0eWxlU2NvcGV9IGZyb20gXCIuL1N0eWxlU2NvcGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElEUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGFuIElELlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElEUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElJRFJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGVzZXQ/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCBzdHlsZXNldCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByb2Nlc3NlcyB0aGUgZ2l2ZW4gcnVsZS5cclxuXHRwdWJsaWMgcHJvY2Vzcyggb3duZXI6IFN0eWxlU2NvcGUsIHJ1bGVOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIucHJvY2Vzcyggb3duZXIsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHR0aGlzLmlkTmFtZSA9IHRoaXMub3duZXIuZ2VuZXJhdGVTY29wZWROYW1lKCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Ly8gZ28gdGhyb3VnaCBhbGwgcGFyZW50czsgZm9yIHRob3NlIHdobyBhcmUgY2xhc3NlcywgYWRkIHRoZWlyIG5hbWUgdG8gdGhlXHJcblx0XHQvLyBjb21iaW5lZCBuYW1lLiBGb3IgdGhvc2Ugd2hvIGFyZSBub3QgY2xhc3NlcywgY29weSBzdHlsZSBwcm9wZXJ0aWVzIHRvIHRoZVxyXG5cdFx0Ly8gY2xhc3MncyBvd24gc3R5bGVzZXQuXHJcblx0XHRmb3IoIGxldCBwYXJlbnQgb2YgdGhpcy5wYXJlbnRzKVxyXG5cdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBydWxlIHJlcXVpcmVzIG5hbWUgLSB0aGF0IGlzIGl0IHdpbGwgYmUgaWdub3JlZCBpZiBjcmVhdGVkIHdpdGhpblxyXG5cdCAqIHRoZSBjcmVhdGVVbm5hbWVkUnVsZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWVJc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBJRFJ1bGVcclxuXHR7XHJcblx0XHRsZXQgbmV3UnVsZSA9IG5ldyBJRFJ1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdlU2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIFwiI1wiICsgdGhpcy5pZE5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKiBPbmx5IG5lZWRlZCB0byBkaXN0aW5ndWlzaCBmcm9tIG90aGVyIHJ1bGVzICovXHJcblx0cHVibGljIGdldCBpc0lEUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgZWxlbWVudCBpZGVudGlmaWVyIGZvciBhcHBseWluZyB0aGUgc3R5bGVzZXQuXHJcblx0cHVibGljIGlkTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVJ1bGV9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge1N0eWxlU2NvcGV9IGZyb20gXCIuL1N0eWxlU2NvcGVcIlxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFJ1bGVXaXRoU3R5bGUgY2xhc3MgaXMgdXNlZCBhcyBhIGJhc2UgY2xhc3MgZm9yIHJ1bGVzIHRoYXQgaGF2ZSBhIHNpbmdsZSBzdHlsZSBydWxlLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJ1bGUgaW1wbGVtZW50cyBJUnVsZVxyXG57XHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogU3R5bGVTY29wZSwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLm93bmVyID0gb3duZXI7XHJcblx0XHR0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBydWxlIHJlcXVpcmVzIG5hbWUgLSB0aGF0IGlzIGl0IHdpbGwgYmUgaWdub3JlZCBpZiBjcmVhdGVkIHdpdGhpblxyXG5cdCAqIHRoZSBjcmVhdGVVbm5hbWVkUnVsZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0IG5hbWVJc1JlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGFic3RyYWN0IGNsb25lKCk6IFJ1bGU7XHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgYWJzdHJhY3QgY29weUZyb20oIHNyYzogUnVsZSk6IHZvaWQ7XHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcuXHJcblx0cHVibGljIGFic3RyYWN0IHRvQ3NzU3RyaW5nKCk6IHN0cmluZztcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBpcyBhIHJlYWwgQ1NTIHJ1bGUgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQgdW5kZXIgdGhlIDxzdHlsZT5cclxuXHQvLyBlbGVtZW50LiBGb3IgdGhlIG1ham9yaXR5IG9mIFJ1bGUtZGVyaXZlZCBjbGFzc2VzIHRoaXMgaXMgdHJ1ZTsgaG93ZXZlciwgZm9yIHNvbWUgY2xhc3NlcyxcclxuXHQvLyBlLmcuIGZvciB0aGUgQ3VzdG9tVmFyIGNsYXNzLCB0aGlzIGlzIG5vdCBzby5cclxuXHRwdWJsaWMgZ2V0IGlzUmVhbENzc1J1bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgdHlwZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gU3R5bGUgc2NvcGUgdG8gd2hpY2ggdGhpcyBydWxlIGJlbG9uZ3MuXHJcblx0cHVibGljIG93bmVyOiBTdHlsZVNjb3BlO1xyXG5cclxuXHQvLyBOYW1lIG9mIHRoZSBwcm9wZXJ0eSBvZiB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiB0byB3aGljaCB0aGlzIHJ1bGUgd2FzIGFzc2lnbmVkLlxyXG5cdHB1YmxpYyBydWxlTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvKiogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoaXMgcnVsZSBocyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkICovXHJcblx0cHVibGljIGdldCBpc1Byb2Nlc3NlZCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5vd25lcjsgfVxyXG5cclxuXHQvLyBJbmRleCBvZiB0aGUgcnVsZSBpbiB0aGUgRE9NIHN0eWxlIHNoZWV0LiBUaGUgRE9NIHN0eWxlIHNoZWV0IG9iamVjdCBpcyBoZWxkIGJ5IHRoZVxyXG5cdC8vIG93bmVyIFN0eWxlU2NvcGVcclxuXHRwdWJsaWMgaW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0lTZWxlY3RvclJ1bGUsIEV4dGVuZGVkU3R5bGVzZXR9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge0lTZWxlY3Rvcn0gZnJvbSBcIi4uL2FwaS9TZWxlY3RvclwiXHJcbmltcG9ydCB7U3R5bGVSdWxlfSBmcm9tIFwiLi9TdHlsZVJ1bGVcIlxyXG5pbXBvcnQge1NlbGVjdG9yfSBmcm9tIFwiLi4vYXBpL1NlbGVjdG9yXCI7XHJcbmltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU2VsZWN0b3JSdWxlIHR5cGUgZGVzY3JpYmVzIGEgc3R5bGVzZXQgdGhhdCBhcHBsaWVzIHRvIGVsZW1lbnRzIGlkZW50aWZpZWQgYnkgYSBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvclJ1bGUgZXh0ZW5kcyBTdHlsZVJ1bGUgaW1wbGVtZW50cyBJU2VsZWN0b3JSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHNlbGVjdG9yPzogSVNlbGVjdG9yIHwgc3RyaW5nLCBzdHlsZXNldD86IEV4dGVuZGVkU3R5bGVzZXQpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHN0eWxlc2V0KTtcclxuXHJcblx0XHRpZiAoc2VsZWN0b3IpXHJcblx0XHRcdHRoaXMuc2VsZWN0b3IgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgPyBuZXcgU2VsZWN0b3IoIHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcm9jZXNzZXMgdGhlIGdpdmVuIHJ1bGUuXHJcblx0cHVibGljIHByb2Nlc3MoIG93bmVyOiBTdHlsZVNjb3BlLCBydWxlTmFtZTogc3RyaW5nKTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLnByb2Nlc3MoIG93bmVyLCBydWxlTmFtZSk7XHJcblxyXG5cdFx0Zm9yKCBsZXQgcGFyZW50IG9mIHRoaXMucGFyZW50cylcclxuXHRcdFx0T2JqZWN0LmFzc2lnbiggdGhpcy5zdHlsZXNldCwgcGFyZW50LnN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhIGNvcHkgb2YgdGhlIHJ1bGUuXHJcblx0cHVibGljIGNsb25lKCk6IFNlbGVjdG9yUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IFNlbGVjdG9yUnVsZSgpO1xyXG5cdFx0bmV3UnVsZS5jb3B5RnJvbSggdGhpcyk7XHJcblx0XHRyZXR1cm4gbmV3UnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBTZWxlY3RvclJ1bGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0c3VwZXIuY29weUZyb20oIHNyYyk7XHJcblx0XHR0aGlzLnNlbGVjdG9yID0gc3JjLnNlbGVjdG9yO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBzZWxlY3RvciBwYXJ0IG9mIHRoZSBzdHlsZSBydWxlLlxyXG5cdHByb3RlY3RlZCBnZVNlbGVjdG9yU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiAgdGhpcy5zZWxlY3Rvci50b0Nzc1N0cmluZygpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKiogT25seSBuZWVkZWQgdG8gZGlzdGluZ3Vpc2ggZnJvbSBvdGhlciBydWxlcyAqL1xyXG5cdHB1YmxpYyBnZXQgaXNTZWxlY3RvclJ1bGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XHJcblxyXG5cdC8vIHNlbGVjdG9yIG9iamVjdCBmb3IgdGhpcyBydWxlLlxyXG5cdHB1YmxpYyBzZWxlY3RvcjogSVNlbGVjdG9yO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVN0eWxlUnVsZSwgRXh0ZW5kZWRTdHlsZXNldH0gZnJvbSBcIi4uL2FwaS9ydWxlc1wiO1xyXG5pbXBvcnQge1N0eWxlc2V0LCBzdHlsZXNldFRvQ3NzU3RyaW5nfSBmcm9tIFwiLi4vc3R5bGVzL3N0eWxlc1wiXHJcbmltcG9ydCB7UnVsZX0gZnJvbSBcIi4vUnVsZVwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFN0eWxlUnVsZSBjbGFzcyBpcyB1c2VkIGFzIGEgYmFzZSBjbGFzcyBmb3IgcnVsZXMgdGhhdCBoYXZlIGEgc2luZ2xlIHN0eWxlIHJ1bGUuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3R5bGVSdWxlIGV4dGVuZHMgUnVsZSBpbXBsZW1lbnRzIElTdHlsZVJ1bGVcclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3R5bGVzZXQ/OiBFeHRlbmRlZFN0eWxlc2V0KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy5zdHlsZXNldCA9IHt9O1xyXG5cdFx0dGhpcy5wYXJlbnRzID0gW107XHJcblx0XHR0aGlzLmltcG9ydGFudCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cclxuXHRcdGlmIChzdHlsZXNldClcclxuXHRcdFx0dGhpcy5wYXJzZUV4dGVuZGVkU3R5bGVzZXQoIHN0eWxlc2V0KTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgcGFyc2VFeHRlbmRlZFN0eWxlc2V0KCBzdHlsZXNldDogRXh0ZW5kZWRTdHlsZXNldCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoc3R5bGVzZXQgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpXHJcblx0XHR7XHJcblx0XHRcdC8vIHN0eWxlc2V0IGlzIGEgc2luZ2xlIElTdHlsZVJ1bGUgb2JqZWN0LCB3aGljaCB3ZSBhZGQgYXMgb3VyIHBhcmVudFxyXG5cdFx0XHR0aGlzLnBhcmVudHMucHVzaCggc3R5bGVzZXQpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShzdHlsZXNldCkpXHJcblx0XHR7XHJcblx0XHRcdC8vIHN0eWxlc2V0IGlzIGFuIGFycmF5IG9mIElTdHlsZVJ1bGUgb2JqZWN0cywgd2hpY2ggd2UgYWRkIGFzIG91ciBwYXJlbnRzXHJcblx0XHRcdGZvciggbGV0IHJ1bGUgb2Ygc3R5bGVzZXQpXHJcblx0XHRcdFx0dGhpcy5wYXJlbnRzLnB1c2goIHJ1bGUgYXMgU3R5bGVSdWxlKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gc3R5bGVzZXQgaXMgYSBzZXQgb2Ygc3R5bGUgcHJvcGVydGllcyBidXQgY2FuIGFsc28gaW5jbHVkZSB0aGUgJGV4dGVuZHMgYW5kXHJcblx0XHRcdC8vICRpbXBvcnRhbnQgcHJvcGVydGllc1xyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBwcm9wVmFsID0gc3R5bGVzZXRbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wTmFtZSA9PT0gXCIkZXh0ZW5kc1wiKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxldCBpbmhlcml0c1Byb3BWYWwgPSBwcm9wVmFsIGFzIChJU3R5bGVSdWxlIHwgSVN0eWxlUnVsZVtdKTtcclxuXHRcdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KGluaGVyaXRzUHJvcFZhbCkpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vIHRoaXMgaXMgaXMgYW4gYXJyYXkgb2YgSVN0eWxlUnVsZSBvYmplY3RzLCB3aGljaCB3ZSBhZGQgYXMgb3VyIHBhcmVudHNcclxuXHRcdFx0XHRcdFx0Zm9yKCBsZXQgcnVsZSBvZiBpbmhlcml0c1Byb3BWYWwpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5wYXJlbnRzLnB1c2goIHJ1bGUgYXMgU3R5bGVSdWxlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBhIHNpbmdsZSBJU3R5bGVSdWxlIG9iamVjdCwgd2hpY2ggd2UgYWRkIGFzIG91ciBwYXJlbnRcclxuXHRcdFx0XHRcdFx0dGhpcy5wYXJlbnRzLnB1c2goIGluaGVyaXRzUHJvcFZhbCBhcyBTdHlsZVJ1bGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCIkaW1wb3J0YW50XCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGltcG9ydGFudFByb3BWYWwgPSBwcm9wVmFsIGFzIChzdHJpbmcgfCBzdHJpbmdbXSk7XHJcblx0XHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShpbXBvcnRhbnRQcm9wVmFsKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBpcyBhbiBhcnJheSBvZiBzdHJpbmdzXHJcblx0XHRcdFx0XHRcdGZvciggbGV0IGltcG9ydGFudCBvZiBpbXBvcnRhbnRQcm9wVmFsKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW1wb3J0YW50LmFkZCggaW1wb3J0YW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcyBpcyBhIHNpbmdsZSBzdHJpbmdcclxuXHRcdFx0XHRcdFx0dGhpcy5pbXBvcnRhbnQuYWRkKCBpbXBvcnRhbnRQcm9wVmFsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNvcHkgdGhlIHByb3BlcnR5IHZhbHVlIHRvIG91ciBpbnRlcm5hbCBzdHlsZXNldFxyXG5cdFx0XHRcdFx0dGhpcy5zdHlsZXNldFtwcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb3BpZXMgaW50ZXJuYWwgZGF0YSBmcm9tIGFub3RoZXIgcnVsZSBvYmplY3QuXHJcblx0cHVibGljIGNvcHlGcm9tKCBzcmM6IFN0eWxlUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnN0eWxlc2V0ID0gc3JjLnN0eWxlc2V0O1xyXG5cdFx0dGhpcy5wYXJlbnRzID0gc3JjLnBhcmVudHM7XHJcblx0XHR0aGlzLmltcG9ydGFudCA9IHNyYy5pbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnZlcnRzIHRoZSBydWxlIHRvIENTUyBzdHJpbmcuXHJcblx0cHVibGljIHRvQ3NzU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLmdlU2VsZWN0b3JTdHJpbmcoKX0gJHtzdHlsZXNldFRvQ3NzU3RyaW5nKCB0aGlzLnN0eWxlc2V0LCB0aGlzLmltcG9ydGFudCl9YDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgc2VsZWN0b3IgcGFydCBvZiB0aGUgc3R5bGUgcnVsZS5cclxuXHRwcm90ZWN0ZWQgYWJzdHJhY3QgZ2VTZWxlY3RvclN0cmluZygpOiBzdHJpbmc7XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzU3R5bGVSdWxlKCk6IGJvb2xlYW4geyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuXHQvLyBTdHlsZSBydWxlIGRlZmluaW5nIHN0eWxlIHByb3BlcnRpZXMuXHJcblx0cHVibGljIHN0eWxlc2V0OiBTdHlsZXNldDtcclxuXHJcblx0Ly8gU3R5bGUgcnVsZSBkZWZpbmluZyBzdHlsZSBwcm9wZXJ0aWVzLlxyXG5cdHB1YmxpYyBwYXJlbnRzOiBTdHlsZVJ1bGVbXTtcclxuXHJcblx0Ly8gU2V0IG9mIHByb3BlcnR5IG5hbWVzIGZyb20gdGhpcyBzdHlsZXNldCB0aGF0IHNob3VsZCBiZSAhaW1wb3J0YW50LlxyXG5cdGltcG9ydGFudDogU2V0PHN0cmluZz47XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtOYW1lc09mUHJvcHNPZlR5cGUsIFByb3BzT2ZUeXBlLCBJUnVsZSwgSVN0eWxlUnVsZSwgSVRhZ1J1bGUsIElDbGFzc1J1bGUsIElJRFJ1bGUsXHJcblx0XHRJU2VsZWN0b3JSdWxlLCBJQW5pbWF0aW9uUnVsZSwgSUN1c3RvbVZhciwgVW5uYW1lZFJ1bGV9XHJcblx0XHRmcm9tIFwiLi4vYXBpL3J1bGVzXCJcclxuaW1wb3J0IHtTdHlsZVNjb3BlRGVmaW5pdGlvbk9wdGlvbnMsIElTdHlsZVNjb3BlRGVmaW5pdGlvbkNsYXNzLCBJU3R5bGVTY29wZX0gZnJvbSBcIi4uL2FwaS9zY29wZVwiXHJcblxyXG5pbXBvcnQge1J1bGV9IGZyb20gXCIuL1J1bGVcIlxyXG5pbXBvcnQge1RhZ1J1bGV9IGZyb20gXCIuL1RhZ1J1bGVcIlxyXG5pbXBvcnQge0NsYXNzUnVsZX0gZnJvbSBcIi4vQ2xhc3NSdWxlXCJcclxuaW1wb3J0IHtJRFJ1bGV9IGZyb20gXCIuL0lEUnVsZVwiXHJcbmltcG9ydCB7U2VsZWN0b3JSdWxlfSBmcm9tIFwiLi9TZWxlY3RvclJ1bGVcIlxyXG5pbXBvcnQge0FuaW1hdGlvblJ1bGV9IGZyb20gXCIuL0FuaW1hdGlvblJ1bGVcIlxyXG5pbXBvcnQge0N1c3RvbVZhcn0gZnJvbSBcIi4vQ3VzdG9tVmFyXCJcclxuaW1wb3J0IHtHcm91cFJ1bGV9IGZyb20gXCIuL0dyb3VwUnVsZVwiXHJcbmltcG9ydCB7VHNzTWFuYWdlcn0gZnJvbSBcIi4vVHNzTWFuYWdlclwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVTaGVldCBjbGFzcyByZXByZXNlbnRzIGEgcGFyc2VkIGZvcm0gb2YgYSBTdHlsZVNoZWV0RGVmaW5pdGlvbi1kZXJpdmVkIGNsYXNzLiBUaGlzXHJcbiAqIGNsYXNzIGRvZXNuJ3QgaGF2ZSBhIHRlbXBsYXRlIHBhcmFtZXRlciwgYnV0IGl0IGNvbmZvcm1zIHRvIHRoZSBJU3R5bGVTaGVldDxUPiBpbnRlcmZhY2UsXHJcbiAqIHdoaWNoIHByb3ZpZGVzIG5hbWVzIG9mIGNsYXNzZXMsIElEcyBhbmQga2V5ZnJhbWVzIGRlZmluZWQgaW4gdGhlIGNsYXNzIFQsIHdoaWNoIG11c3QgYmVcclxuICogZGVyaXZlZCBmcm9tIHRoZSBTdHlsZVNoZWV0RGVmaW5pdGlvbiBjbGFzcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdHlsZVNjb3BlPFQgPSBhbnk+IGltcGxlbWVudHMgSVN0eWxlU2NvcGU8VD5cclxue1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvciggc3NEZWZDbGFzczogSVN0eWxlU2NvcGVEZWZpbml0aW9uQ2xhc3M8VD4pXHJcblx0e1xyXG5cdFx0dGhpcy5EZWZpbml0aW9uID0gc3NEZWZDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE5hbWVzIG9mIGNsYXNzZXMgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2hlZXQgKi9cclxuXHRwdWJsaWMgZ2V0IGNsYXNzTmFtZXMoKTogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUNsYXNzUnVsZT4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl9jbGFzc05hbWVzIGFzIE5hbWVzT2ZQcm9wc09mVHlwZTxULElDbGFzc1J1bGU+IH1cclxuXHJcblx0LyoqIE5hbWVzIG9mIGNsYXNzZXMgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2hlZXQgKi9cclxuXHRwdWJsaWMgZ2V0IGlkTmFtZXMoKTogTmFtZXNPZlByb3BzT2ZUeXBlPFQsSUlEUnVsZT4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl9pZE5hbWVzIGFzIE5hbWVzT2ZQcm9wc09mVHlwZTxULElJRFJ1bGU+OyB9XHJcblxyXG5cdC8qKiBOYW1lcyBvZiBrZXlmcmFtZXMgZGVmaW5lZCBpbiB0aGUgc3R5bGUgc2hlZXQgKi9cclxuXHRwdWJsaWMgZ2V0IGFuaW1hdGlvbk5hbWVzKCk6IE5hbWVzT2ZQcm9wc09mVHlwZTxULElBbmltYXRpb25SdWxlPiB7IHRoaXMuYWN0aXZhdGUoKTsgcmV0dXJuIHRoaXMuX2FuaW1hdGlvbk5hbWVzIGFzIE5hbWVzT2ZQcm9wc09mVHlwZTxULElBbmltYXRpb25SdWxlPjsgfVxyXG5cclxuXHQvKiogTmFtZXMgb2YgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNjb3BlICovXHJcblx0cHVibGljIGdldCB2YXJOYW1lcygpOiBOYW1lc09mUHJvcHNPZlR5cGU8VCxJQ3VzdG9tVmFyPiB7IHRoaXMuYWN0aXZhdGUoKTsgcmV0dXJuIHRoaXMuX3Zhck5hbWVzIGFzIE5hbWVzT2ZQcm9wc09mVHlwZTxULElDdXN0b21WYXI+OyB9XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIHN0eWxlICh0YWcsIGNsYXNzLCBJRCBhbmQgc2VsZWN0b3IpIHJ1bGVzLiAqL1xyXG5cdHB1YmxpYyBnZXQgc3R5bGVSdWxlcygpOiBQcm9wc09mVHlwZTxULElTdHlsZVJ1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5fc3R5bGVSdWxlcyBhcyBQcm9wc09mVHlwZTxULElTdHlsZVJ1bGU+OyB9XHJcblxyXG5cdC8qKiBNYXAgb2YgYWxsIHRhZyBydWxlcy4gKi9cclxuXHRwdWJsaWMgZ2V0IHRhZ1J1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSVRhZ1J1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5fdGFnUnVsZXMgYXMgUHJvcHNPZlR5cGU8VCxJVGFnUnVsZT47IH1cclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgY2xhc3MgcnVsZXMuICovXHJcblx0cHVibGljIGdldCBjbGFzc1J1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSUNsYXNzUnVsZT4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl9jbGFzc1J1bGVzIGFzIFByb3BzT2ZUeXBlPFQsSUNsYXNzUnVsZT47IH1cclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgSUQgcnVsZXMuICovXHJcblx0cHVibGljIGdldCBpZFJ1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSUlEUnVsZT4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl9pZFJ1bGVzIGFzIFByb3BzT2ZUeXBlPFQsSUlEUnVsZT47IH1cclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgc2VsZWN0b3IgcnVsZXMuICovXHJcblx0cHVibGljIGdldCBzZWxlY3RvclJ1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSVNlbGVjdG9yUnVsZT4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl9zZWxlY3RvclJ1bGVzIGFzIFByb3BzT2ZUeXBlPFQsSVNlbGVjdG9yUnVsZT47IH1cclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgYW5pbWF0aW9uIHJ1bGVzLiAqL1xyXG5cdHB1YmxpYyBnZXQgYW5pbWF0aW9uUnVsZXMoKTogUHJvcHNPZlR5cGU8VCxJQW5pbWF0aW9uUnVsZT4geyB0aGlzLmFjdGl2YXRlKCk7IHJldHVybiB0aGlzLl9hbmltYXRpb25SdWxlcyBhcyBQcm9wc09mVHlwZTxULElBbmltYXRpb25SdWxlPjsgfVxyXG5cclxuIFx0LyoqIFRoZSBcIjpyb290XCIgYmxvY2sgd2l0aCBDU1MgY3VzdG9tIHByb3BlcnR5IGRlZmluaXRpb25zLiAqL1xyXG5cdHB1YmxpYyBnZXQgdmFyUnVsZXMoKTogUHJvcHNPZlR5cGU8VCxJQ3VzdG9tVmFyPiB7IHRoaXMuYWN0aXZhdGUoKTsgcmV0dXJuIHRoaXMuX3ZhclJ1bGVzIGFzIFByb3BzT2ZUeXBlPFQsSUN1c3RvbVZhcj47IH1cclxuXHJcblx0LyoqIE1hcCBvZiBhbGwgcnVsZXMuICovXHJcblx0cHVibGljIGdldCBuYW1lZFJ1bGVzKCk6IFByb3BzT2ZUeXBlPFQsSVJ1bGU+IHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5fbmFtZWRSdWxlcyBhcyBQcm9wc09mVHlwZTxULElSdWxlPjsgfVxyXG5cclxuXHQvKiogTWFwIG9mIGFsbCBydWxlcy4gKi9cclxuXHRwdWJsaWMgZ2V0IHVubmFtZWRSdWxlcygpOiBJUnVsZVtdIHsgdGhpcy5hY3RpdmF0ZSgpOyByZXR1cm4gdGhpcy5fdW5uYW1lZFJ1bGVzOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyB0aGUgc3R5bGUgc2NvcGUgZGVmaW5pdGlvbiBpbnN0YW5jZSwgcGFyc2VzIGl0cyBwcm9wZXJ0aWVzIGFuZCBjcmVhdGVzIG5hbWVzIGZvclxyXG5cdC8vIGNsYXNzZXMsIElEcywgYW5pbWF0aW9ucy5cclxuXHRwcml2YXRlIHByb2Nlc3MoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBzY29wZSBkZWZpbml0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkXHJcblx0XHRpZiAodGhpcy5pc1Byb2Nlc3NlZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdHRoaXMuX2NsYXNzTmFtZXMgPSB7fTtcclxuXHRcdHRoaXMuX2lkTmFtZXMgPSB7fTtcclxuXHRcdHRoaXMuX2FuaW1hdGlvbk5hbWVzID0ge307XHJcblx0XHR0aGlzLl92YXJOYW1lcyA9IHt9O1xyXG5cdFx0dGhpcy5fbmFtZWRSdWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5fc3R5bGVSdWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5fdGFnUnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX2NsYXNzUnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX2lkUnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX3NlbGVjdG9yUnVsZXMgPSB7fTtcclxuXHRcdHRoaXMuX2FuaW1hdGlvblJ1bGVzID0ge307XHJcblx0XHR0aGlzLl92YXJSdWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5fbmFtZWRSdWxlcyA9IHt9O1xyXG5cdFx0dGhpcy5fdW5uYW1lZFJ1bGVzID0gW11cclxuXHJcblx0XHR0aGlzLmlzTXVsdGlwbGV4ID0gISF0aGlzLkRlZmluaXRpb24uaXNNdWx0aXBsZXg7XHJcblxyXG5cdFx0Ly8gaW4gREVCVUcsIGVhY2ggY2xhc3MgaGFzIGEgbmFtZSB1bmxlc3MgaXQgd2FzIGNyZWF0ZWQgYXMgYW4gYW5vbnltb3VzIGNsYXNzLiBJbiBSRUxFQVNFLFxyXG5cdFx0Ly8gKGFzIHdlbGwgYXMgaW4gdGhlIGFub255bW91cyBjYXNlcyksIHRoZSBuYW1lIGlzIHVuZGVmaW5lZCBhbmQgd2UgZ2VuZXJhdGUgYSB1bmlxdWVcclxuXHRcdC8vIG5hbWUgZm9yIHRoZSBzdHlsZSBzY29wZS5cclxuXHRcdHRoaXMubmFtZSA9IHRoaXMuRGVmaW5pdGlvbi5uYW1lO1xyXG5cdFx0aWYgKCF0aGlzLm5hbWUpXHJcblx0XHRcdHRoaXMubmFtZSA9IFRzc01hbmFnZXIuZ2VuZXJhdGVVbmlxdWVOYW1lKCBcInNcIik7XHJcblxyXG5cdFx0Ly8gaW5zZXJ0IG91ciBpbnRlcm5hbCBydWxlIGZvciBjdXN0b20gQ1NTIHByb3BlcnRpZXMgaW50byB0aGUgbGlzdCBvZiB1bm5hbWVkIHJ1bGVzLlxyXG5cdFx0dGhpcy5fdW5uYW1lZFJ1bGVzLnB1c2goIG5ldyBDdXN0b21WYXJSdWxlKHRoaXMpKTtcclxuXHJcblx0XHQvLyBjcmVhdGUgaW5zdGFuY2Ugb2YgdGhlIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gY2xhc3MgYW5kIHRoZW4gZ28gb3ZlciBpdHMgcHJvcGVydGllcyxcclxuXHRcdC8vIHdoaWNoIGRlZmluZSBDU1MgcnVsZXMuXHJcblx0XHRsZXQgc3NEZWY6IFQ7XHJcblx0XHRsZXQgb3B0aW9uczogU3R5bGVTY29wZURlZmluaXRpb25PcHRpb25zID0ge307XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0Ly8gY3JlYXRlIGluc3RhbmNlIG9mIHRoZSBzdHlsZSBzY29wZSBkZWZpbml0aW9uIGNsYXNzIGFuZCB0aGVuIGdvIG92ZXIgaXRzIHByb3BlcnRpZXMsXHJcblx0XHRcdC8vIHdoaWNoIGRlZmluZSBDU1MgcnVsZXMuXHJcblx0XHRcdHNzRGVmID0gbmV3IHRoaXMuRGVmaW5pdGlvbiggb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgaW5zdGFudGlhdGluZyBTdHlsZSBTY29wZSBEZWZpbml0aW9uIG9mIHR5cGUgJyR7dGhpcy5EZWZpbml0aW9uLm5hbWV9J2ApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5wcm9jZXNzTmFtZWRSdWxlcyggc3NEZWYpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBkZWZpbml0aW9uIGNsYXNzIGltcGxlbWVudHMgdW5uYW1lZFJ1bGVzIHByb2Nlc3MgdGhlbSBub3dcclxuXHRcdGlmIChvcHRpb25zLnVubmFtZWRSdWxlcylcclxuXHRcdFx0dGhpcy5wcm9jZXNzVW5uYW1lZFJ1bGVzKCBvcHRpb25zLnVubmFtZWRSdWxlcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgdGhlIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gaW5zdGFuY2UsIHBhcnNlcyBpdHMgcHJvcGVydGllcyBhbmQgY3JlYXRlcyBuYW1lcyBmb3JcclxuXHQvLyBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzTmFtZWRSdWxlcyggc3NEZWY6IFQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gbG9vcCBvdmVyIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBkZWZpbml0aW9uIG9iamVjdCBhbmQgcHJvY2VzcyB0aG9zZSB0aGF0IGFyZSBydWxlcy5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHNzRGVmKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgcHJvcFZhbCA9IHNzRGVmW3Byb3BOYW1lXTtcclxuXHRcdFx0aWYgKCEocHJvcFZhbCBpbnN0YW5jZW9mIFJ1bGUpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IHJ1bGVOYW1lID0gcHJvcE5hbWU7XHJcblx0XHRcdGxldCBydWxlID0gcHJvcFZhbCBhcyBSdWxlO1xyXG5cclxuXHRcdFx0Ly8gaWYgdGhlIHJ1bGUgb2JqZWN0IGlzIGFscmVhZHkgYXNzaWduZWQgdG8gYSBzdHlsZSBzY29wZSwgd2UgY3JlYXRlIGEgY2xvbmUgb2YgdGhlXHJcblx0XHRcdC8vIHJ1bGUgYW5kIGFzc2lnbiBpdCB0byBvdXIgc2NvcGUuXHJcblx0XHRcdGlmIChydWxlLm93bmVyKVxyXG5cdFx0XHRcdHJ1bGUgPSBydWxlLmNsb25lKCk7XHJcblxyXG5cdFx0XHRydWxlLnByb2Nlc3MoIHRoaXMsIHJ1bGVOYW1lKTtcclxuXHJcblx0XHRcdGlmIChydWxlLmlzUmVhbENzc1J1bGUpXHJcblx0XHRcdFx0dGhpcy5fbmFtZWRSdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cclxuXHRcdFx0aWYgKHJ1bGUgaW5zdGFuY2VvZiBUYWdSdWxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fc3R5bGVSdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHRcdHRoaXMuX3RhZ1J1bGVzW3J1bGVOYW1lXSA9IHJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIENsYXNzUnVsZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX3N0eWxlUnVsZXNbcnVsZU5hbWVdID0gcnVsZTtcclxuXHRcdFx0XHR0aGlzLl9jbGFzc1J1bGVzW3J1bGVOYW1lXSA9IHJ1bGU7XHJcblx0XHRcdFx0dGhpcy5fY2xhc3NOYW1lc1tydWxlTmFtZV0gPSBydWxlLmNvbWJpbmVkTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChydWxlIGluc3RhbmNlb2YgSURSdWxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fc3R5bGVSdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHRcdHRoaXMuX2lkUnVsZXNbcnVsZU5hbWVdID0gcnVsZTtcclxuXHRcdFx0XHR0aGlzLl9pZE5hbWVzW3J1bGVOYW1lXSA9IHJ1bGUuaWROYW1lO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBTZWxlY3RvclJ1bGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLl9zdHlsZVJ1bGVzW3J1bGVOYW1lXSA9IHJ1bGU7XHJcblx0XHRcdFx0dGhpcy5fc2VsZWN0b3JSdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKHJ1bGUgaW5zdGFuY2VvZiBBbmltYXRpb25SdWxlKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uTmFtZXNbcnVsZU5hbWVdID0gcnVsZS5hbmltYXRpb25OYW1lO1xyXG5cdFx0XHRcdHRoaXMuX2FuaW1hdGlvblJ1bGVzW3J1bGVOYW1lXSA9IHJ1bGU7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIEN1c3RvbVZhcilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuX3Zhck5hbWVzW3J1bGVOYW1lXSA9IHJ1bGUudmFyTmFtZTtcclxuXHRcdFx0XHR0aGlzLl92YXJSdWxlc1tydWxlTmFtZV0gPSBydWxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgdGhlIHN0eWxlIHNjb3BlIGRlZmluaXRpb24gaW5zdGFuY2UsIHBhcnNlcyBpdHMgcHJvcGVydGllcyBhbmQgY3JlYXRlcyBuYW1lcyBmb3JcclxuXHQvLyBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMuXHJcblx0cHJpdmF0ZSBwcm9jZXNzVW5uYW1lZFJ1bGVzKCB1bm5hbWVkUnVsZXM6IFVubmFtZWRSdWxlW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF1bm5hbWVkUnVsZXMpXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHVubmFtZWRSdWxlcykpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBjcmVhdGVVbm5hbWVkUnVsZXMgbWV0aG9kIG9mIFN0eWxlIFNjb3BlIERlZmluaXRpb24gb2YgdHlwZSAnJHt0aGlzLkRlZmluaXRpb24ubmFtZX0nIG11c3QgcmV0dXJuIGFycmF5YCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBsb29wIG92ZXIgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBwcm9jZXNzIHRob3NlIHRoYXQgYXJlIHJ1bGVzLlxyXG5cdFx0Zm9yKCBsZXQgdW5uYW1lZFJ1bGUgb2YgdW5uYW1lZFJ1bGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoISh1bm5hbWVkUnVsZSBpbnN0YW5jZW9mIFJ1bGUpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0bGV0IHJ1bGUgPSB1bm5hbWVkUnVsZSBhcyBSdWxlO1xyXG5cdFx0XHRpZiAocnVsZS5uYW1lSXNSZXF1aXJlZClcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBydWxlIG9iamVjdCBpcyBhbHJlYWR5IGFzc2lnbmVkIHRvIGEgc3R5bGUgc2NvcGUsIHdlIGNyZWF0ZSBhIGNsb25lIG9mIHRoZVxyXG5cdFx0XHQvLyBydWxlIGFuZCBhc3NpZ24gaXQgdG8gb3VyIHNjb3BlLlxyXG5cdFx0XHRpZiAocnVsZS5vd25lcilcclxuXHRcdFx0XHRydWxlID0gcnVsZS5jbG9uZSgpO1xyXG5cclxuXHRcdFx0cnVsZS5wcm9jZXNzKCB0aGlzLCBudWxsKTtcclxuXHJcblx0XHRcdHRoaXMuX3VubmFtZWRSdWxlcy5wdXNoKCBydWxlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGEgbmFtZSwgd2hpY2ggd2lsbCBiZSB1bmlxdWUgaW4gdGhpcyBzdHlsZSBzY29wZVxyXG5cdHB1YmxpYyBnZW5lcmF0ZVNjb3BlZE5hbWUoIHJ1bGVOYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAodGhpcy5pc011bHRpcGxleClcclxuXHRcdFx0cmV0dXJuIFRzc01hbmFnZXIuZ2VuZXJhdGVVbmlxdWVOYW1lKCk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBUc3NNYW5hZ2VyLmdlbmVyYXRlTmFtZSggdGhpcy5uYW1lLCBydWxlTmFtZSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEluc2VydHMgdGhpcyBzdHlsZSBzaGVldCBpbnRvIERPTVxyXG5cdHB1YmxpYyBhY3RpdmF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmF0ZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR0aGlzLnByb2Nlc3MoKTtcclxuXHRcdFRzc01hbmFnZXIuYWN0aXZhdGUoIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoaXMgc3R5bGUgc2NvcGUgZnJvbSBET00gLSBvbmx5IHdvcmtzIGZvciBtdWx0aXBsZXggc3R5bGUgc2NvcGVzXHJcblx0cHVibGljIGRlYWN0aXZhdGUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghdGhpcy5pc0FjdGl2YXRlZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdFRzc01hbmFnZXIuZGVhY3RpdmF0ZSggdGhpcyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzZXRET01JbmZvKCBzdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudCwgZG9tU1M6IENTU1N0eWxlU2hlZXQpXHJcblx0e1xyXG5cdFx0dGhpcy5zdHlsZUVsbSA9IHN0eWxlRWxtO1xyXG5cdFx0dGhpcy5zdHlsZVNoZWV0ID0gZG9tU1M7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2xlYXJET01JbmZvKClcclxuXHR7XHJcblx0XHR0aGlzLnN0eWxlRWxtID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5zdHlsZVNoZWV0ID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIENTUyBzdHJpbmcgcmVwcmVzZW50YXRpbiBvZiB0aGUgOnJvb3QgcnVsZSB3aXRoIGN1c3RvbSBDU1MgcHJvcGVydGllcy4gVGhpcyBpc1xyXG5cdC8vIGludm9rZWQgYnkgdGhlIFwiZmFrZVwiIEN1c3RvbVZhclJ1bGUuXHJcblx0cHVibGljIGN1c3RvbVZhcnNUb0Nzc1N0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRsZXQgcyA9IFwiOnJvb3Qge1wiO1xyXG5cdFx0Zm9yKCBsZXQgdmFyTmFtZSBpbiB0aGlzLl92YXJSdWxlcylcclxuXHRcdFx0cyArPSB0aGlzLl92YXJSdWxlc1t2YXJOYW1lXS50b0Nzc1N0cmluZygpICsgXCI7XCI7XHJcblxyXG5cdFx0cmV0dXJuIHMgKyBcIn1cIjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSGVscGVyIHByb3BlcnRpZXNcclxuXHRwcml2YXRlIGdldCBpc1Byb2Nlc3NlZCgpOiBib29sZWFuIHsgcmV0dXJuICEhdGhpcy5fY2xhc3NOYW1lczsgfVxyXG5cdHByaXZhdGUgZ2V0IGlzQWN0aXZhdGVkKCk6IGJvb2xlYW4geyByZXR1cm4gISF0aGlzLnN0eWxlU2hlZXQ7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDbGFzcyB0aGF0IGRlZmluZWQgdGhpcyBzdHlsZSBzY29wZS4gVGhpcyBtZW1iZXIgaXMgdXNlZCBmb3Igc3R5bGUgc2NvcGUgZGVyaXZhdGlvblxyXG5cdHB1YmxpYyByZWFkb25seSBEZWZpbml0aW9uOiBJU3R5bGVTY29wZURlZmluaXRpb25DbGFzczxUPjtcclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgc3R5bGUgc2hlZXQgLSB1c2VkIHRvIGNyZWF0ZSBzY29wZWQgbmFtZXMgb2Ygc3R5bGUgcnVsZXNcclxuXHRwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBOYW1lcyBvZiBjbGFzc2VzLCBJRHMsIGFuaW1hdGlvbnMgYW5kIGN1c3RvbSBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGhlIHN0eWxlIHNoZWV0LiBUaGVcclxuXHQvLyBrZXlzIGFyZSBwcm9wZXJ0eSBuYW1lcyB1c2VkIGluIHRoZSBzdHlsZSBzaGVldCBkZWZpbml0aW9uOyB0aGUgdmFsdWVzIGFyZSB0aGUgYWN0dWFsIG5hbWVzXHJcblx0Ly8gdGhhdCB3aWxsIGJlIGluc2VydGVkIGludG8gdGhlIGFjdHVhbCBzdHlsZSBzaGVldC5cclxuXHRwcml2YXRlIF9jbGFzc05hbWVzOiB7IFtLOiBzdHJpbmddOiBzdHJpbmcgfVxyXG5cdHByaXZhdGUgX2lkTmFtZXM6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9XHJcblx0cHJpdmF0ZSBfYW5pbWF0aW9uTmFtZXM6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9XHJcblx0cHJpdmF0ZSBfdmFyTmFtZXM6IHsgW0s6IHN0cmluZ106IHN0cmluZyB9XHJcblxyXG5cdC8vIE1hcCBvZiBuYW1lcyBvZiBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBkZWZpbml0aW9uIHRvIHRoZSBSdWxlIG9iamVjdHMuIFRoaXMgaXMgdXNlZCB3aGVuXHJcblx0Ly8gY3JlYXRpbmcgYW4gYWN0dWFsIHN0eWxlIHNoZWV0LlxyXG5cdHByaXZhdGUgX3N0eWxlUnVsZXM6IHsgW0s6IHN0cmluZ106IFJ1bGUgfVxyXG5cdHByaXZhdGUgX3RhZ1J1bGVzOiB7IFtLOiBzdHJpbmddOiBSdWxlIH1cclxuXHRwcml2YXRlIF9jbGFzc1J1bGVzOiB7IFtLOiBzdHJpbmddOiBSdWxlIH1cclxuXHRwcml2YXRlIF9pZFJ1bGVzOiB7IFtLOiBzdHJpbmddOiBSdWxlIH1cclxuXHRwcml2YXRlIF9zZWxlY3RvclJ1bGVzOiB7IFtLOiBzdHJpbmddOiBSdWxlIH1cclxuXHRwcml2YXRlIF9hbmltYXRpb25SdWxlczogeyBbSzogc3RyaW5nXTogUnVsZSB9XHJcblx0cHJpdmF0ZSBfdmFyUnVsZXM6eyBbSzogc3RyaW5nXTogQ3VzdG9tVmFyPGFueT4gfTtcclxuXHJcblx0Ly8gTWFwIG9mIGFsbCBuYW1lZCBydWxlc1xyXG5cdHB1YmxpYyBfbmFtZWRSdWxlczogeyBbSzogc3RyaW5nXTogUnVsZSB9XHJcblxyXG5cdC8vIExpc3Qgb2YgcnVsZXMgd2l0aG91dCBuYW1lcy4gVGhpcyBydWxlcyBhcmUgaW5zZXJ0ZWQgaW50byBET00gYnV0IGNhbm5vdCBiZSBhY2Nlc3NlZFxyXG5cdC8vIGFuZCBtYW5pcHVsYXRlZCBwcm9ncmFtbWF0aWNhbGx5XHJcblx0cHVibGljIF91bm5hbWVkUnVsZXM6IFJ1bGVbXTtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhpcyBzdHlsZSBzY29wZSBvYmplY3Qgb3ducyB0aGUgPHN0eWxlPiBlbGVtZW50LiBUaGlzIGlzIHRydWUgb25seVxyXG5cdC8vIGZvciBtdWx0aXBsZXggc3R5bGVzIHNjb3BlcyAtIHRob3NlIHRoYXQgY2FuIGJlIGNyZWFlZCBtdWx0aXBsZSB0aW1lcy5cclxuXHRwdWJsaWMgaXNNdWx0aXBsZXg6IGJvb2xlYW47XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdC5cclxuXHRwcml2YXRlIHN0eWxlRWxtPzogSFRNTFN0eWxlRWxlbWVudDtcclxuXHJcblx0Ly8gV2hlbiBhY3RpdmF0ZWQsIHBvaW50cyB0byB0aGUgRE9NIHN0eWxlIHNoZWV0IG9iamVjdCBpbnNlcnRlZCBpbnRvIHRoZSA8aGVhZD4gZWxlbWVudFxyXG5cdHByaXZhdGUgc3R5bGVTaGVldD86IENTU1N0eWxlU2hlZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDdXN0b21WYXJSdWxlIGNsYXNzIHJlcHJlc2VudHMgYSA6cm9vdCBydWxlIHRoYXQgaXMgdXNlZCBmb3IgZGVmaW5pbmcgY3VzdG9tIENTUyBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuY2xhc3MgQ3VzdG9tVmFyUnVsZSBleHRlbmRzIFJ1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCBvd25lcjogU3R5bGVTY29wZSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xyXG5cdFx0dGhpcy5ydWxlTmFtZSA9IFwiOnJvb3RcIjtcclxuXHR9XHJcblxyXG5cdC8vIENyZWF0ZXMgYSBjb3B5IG9mIHRoZSBydWxlLlxyXG5cdHB1YmxpYyBjbG9uZSgpOiBSdWxlIHsgcmV0dXJuIG51bGw7IH1cclxuXHJcblx0Ly8gQ29waWVzIGludGVybmFsIGRhdGEgZnJvbSBhbm90aGVyIHJ1bGUgb2JqZWN0LlxyXG5cdHB1YmxpYyBjb3B5RnJvbSggc3JjOiBSdWxlKTogdm9pZCB7fVxyXG5cclxuXHQvLyBDb252ZXJ0cyB0aGUgcnVsZSB0byBDU1Mgc3RyaW5nLlxyXG5cdHB1YmxpYyB0b0Nzc1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5vd25lci5jdXN0b21WYXJzVG9Dc3NTdHJpbmcoKTsgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7SVRhZ1J1bGUsIEV4dGVuZGVkU3R5bGVzZXR9IGZyb20gXCIuLi9hcGkvcnVsZXNcIlxyXG5pbXBvcnQge1N0eWxlUnVsZX0gZnJvbSBcIi4vU3R5bGVSdWxlXCI7XHJcbmltcG9ydCB7U3R5bGVTY29wZX0gZnJvbSBcIi4vU3R5bGVTY29wZVwiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVGFnUnVsZSB0eXBlIGRlc2NyaWJlcyBhIHN0eWxlc2V0IHRoYXQgYXBwbGllcyB0byBlbGVtZW50cyBpZGVudGlmaWVkIGJ5IGEgdGFnIG5hbWUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVGFnUnVsZSBleHRlbmRzIFN0eWxlUnVsZSBpbXBsZW1lbnRzIElUYWdSdWxlXHJcbntcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoIHRhZ05hbWU/OiBzdHJpbmcsIHN0eWxlc2V0PzogRXh0ZW5kZWRTdHlsZXNldClcclxuXHR7XHJcblx0XHRzdXBlciggc3R5bGVzZXQpO1xyXG5cdFx0dGhpcy50YWdOYW1lID0gdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJvY2Vzc2VzIHRoZSBnaXZlbiBydWxlLlxyXG5cdHB1YmxpYyBwcm9jZXNzKCBvd25lcjogU3R5bGVTY29wZSwgcnVsZU5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5wcm9jZXNzKCBvd25lciwgcnVsZU5hbWUpO1xyXG5cclxuXHRcdC8vIGdvIHRocm91Z2ggYWxsIHBhcmVudHMgYW5kIGNvcHkgc3R5bGUgcHJvcGVydGllcyB0byB0aGUgY2xhc3MncyBvd24gc3R5bGVzZXQuXHJcblx0XHRmb3IoIGxldCBwYXJlbnQgb2YgdGhpcy5wYXJlbnRzKVxyXG5cdFx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnN0eWxlc2V0LCBwYXJlbnQuc3R5bGVzZXQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGEgY29weSBvZiB0aGUgcnVsZS5cclxuXHRwdWJsaWMgY2xvbmUoKTogVGFnUnVsZVxyXG5cdHtcclxuXHRcdGxldCBuZXdSdWxlID0gbmV3IFRhZ1J1bGUoKTtcclxuXHRcdG5ld1J1bGUuY29weUZyb20oIHRoaXMpO1xyXG5cdFx0cmV0dXJuIG5ld1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvcGllcyBpbnRlcm5hbCBkYXRhIGZyb20gYW5vdGhlciBydWxlIG9iamVjdC5cclxuXHRwdWJsaWMgY29weUZyb20oIHNyYzogVGFnUnVsZSk6IHZvaWRcclxuXHR7XHJcblx0XHRzdXBlci5jb3B5RnJvbSggc3JjKVxyXG5cdFx0dGhpcy50YWdOYW1lID0gc3JjLnRhZ05hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIHNlbGVjdG9yIHBhcnQgb2YgdGhlIHN0eWxlIHJ1bGUuXHJcblx0cHJvdGVjdGVkIGdlU2VsZWN0b3JTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIE9ubHkgbmVlZGVkIHRvIGRpc3Rpbmd1aXNoIGZyb20gb3RoZXIgcnVsZXMgKi9cclxuXHRwdWJsaWMgZ2V0IGlzVGFnUnVsZSgpOiBib29sZWFuIHsgcmV0dXJuIHRydWU7IH1cclxuXHJcblx0Ly8gTmFtZSBvZiB0aGUgdGFnIHRvIHdoaWNoIHRoZSBzdHlsZXNldCBhcHBsaWVzLlxyXG5cdHB1YmxpYyB0YWdOYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHlsZVNjb3BlfSBmcm9tIFwiLi9TdHlsZVNjb3BlXCJcclxuaW1wb3J0IHtSdWxlfSBmcm9tIFwiLi9SdWxlXCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBUc3NNYW5hZ2VyIGNsYXNzIGlzIHJlc3BvbnNpYmxlIGZvciBpbnNlcnRpbmcgQ1NTIHJ1bGVzIGludG8gdGhlIERPTS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUc3NNYW5hZ2VyXHJcbntcclxuXHQvLyBUaGlzIGNsYXNzIGhhcyBzdGF0aWMgbWVtYmVycyBvbmx5LlxyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgdGhlIGZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRvIHVzZSBvcHRpbWl6ZWQgKHVuaXF1ZSkgc3R5bGUgbmFtZXMuIElmIHllcywgdGhlIG5hbWVzXHJcblx0ICogd2lsbCBiZSBjcmVhdGVkIGJ5IGFwcGVuZGluZyBhIHVuaXF1ZSBudW1iZXIgdG8gdGhlIGdpdmVuIHByZWZpeC4gSWYgdGhlIHByZWZpeCBpcyBub3RcclxuXHQgKiBzcGVjaWZpZWQsIHRoZSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIEBwYXJhbSBvcHRpbWl6ZVxyXG5cdCAqIEBwYXJhbSBwcmVmaXhcclxuXHQgKi9cclxuXHRwdWJsaWMgc3RhdGljIHVzZU9wdGltaXplZFN0eWxlTmFtZXMoIG9wdGltaXplOiBib29sZWFuLCBwcmVmaXg/OiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51c2VVbmlxdWVTdHlsZU5hbWVzID0gb3B0aW1pemU7XHJcblx0XHR0aGlzLnVuaXF1ZVN0eWxlTmFtZXNQcmVmaXggPSBwcmVmaXg7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBuYW1lIHRvIHVzZSBmb3IgdGhlIGdpdmVuIHJ1bGUgZnJvbSB0aGUgZ2l2ZW4gc3R5bGUgc2hlZXQuXHJcblx0ICogQHBhcmFtIHNoZWV0TmFtZSBcclxuXHQgKiBAcGFyYW0gcnVsZU5hbWUgXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBnZW5lcmF0ZU5hbWUoIHNoZWV0TmFtZTogc3RyaW5nLCBydWxlTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMudXNlVW5pcXVlU3R5bGVOYW1lc1xyXG5cdFx0XHQ/IHRoaXMuZ2VuZXJhdGVVbmlxdWVOYW1lKCB0aGlzLnVuaXF1ZVN0eWxlTmFtZXNQcmVmaXgpXHJcblx0XHRcdDogYCR7c2hlZXROYW1lfV8ke3J1bGVOYW1lfWA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdlbmVyYXRlcyBhIHVuaXF1ZSBuYW1lLCB3aGljaCBjYW4gYmUgdXNlZCBlaXRoZXIgZm9yIHN0eWxlIGVsZW1lbnQncyBJRCBvciBvciBjbGFzcyxcclxuXHQgKiBpZGVudGlmaWVyIG9yIGFuaW1hdGlvbiBuYW1lLiBOYW1lcyBhcmUgZ2VuZXJhdGVkIHVzaW5nIGEgc2ltcGxlIGluY3JlbWVudGluZyBudW1iZXIuXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyBnZW5lcmF0ZVVuaXF1ZU5hbWUoIHByZWZpeD86IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiAocHJlZml4ID8gcHJlZml4IDogXCJuXCIpICsgdGhpcy5uZXh0VW5pcXVlSUQrKztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEluc2VydHMgcnVsZXMgZnJvbSB0aGUgZ2l2ZW4gc3R5bGUgc2NvcGUgaW50byBET00gKi9cclxuXHRwdWJsaWMgc3RhdGljIGFjdGl2YXRlKCBzdHlsZVNjb3BlOiBTdHlsZVNjb3BlKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICghc3R5bGVTY29wZSlcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcclxuXHRcdC8vIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBnaXZlbiBzY29wZSBpcyBtdWx0aXBsZXgsIHdlIGVpdGhlciBjcmVhdGUgYSBuZXcgPHN0eWxlPiBlbGVtZW50XHJcblx0XHQvLyBvciByZXVzZSBvdXIgXCJnbG9iYWxcIiBvbmVcclxuXHRcdGxldCBzdHlsZUVsbTogSFRNTFN0eWxlRWxlbWVudDtcclxuXHRcdGxldCBzdHlsZVNoZWV0OiBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0aWYgKHN0eWxlU2NvcGUuRGVmaW5pdGlvbi5pc011bHRpcGxleClcclxuXHRcdHtcclxuXHRcdFx0c3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZUVsbSk7XHJcblx0XHRcdHN0eWxlU2hlZXQgPSBzdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0XHR0aGlzLm11bHRpcGxleFNjb3Blcy5zZXQoIHN0eWxlU2NvcGUsIHN0eWxlRWxtKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5lbnN1cmVET00oKTtcclxuXHRcdFx0c3R5bGVFbG0gPSB0aGlzLnN0eWxlRWxtO1xyXG5cdFx0XHRzdHlsZVNoZWV0ID0gdGhpcy5zdHlsZVNoZWV0O1xyXG5cdFx0fVxyXG5cclxuXHRcdHN0eWxlU2NvcGUuc2V0RE9NSW5mbyggc3R5bGVFbG0sIHN0eWxlU2hlZXQpO1xyXG5cclxuXHRcdC8vIGdvIG92ZXIgdGhlIG5hbWVkIHJ1bGVzLCBjb252ZXJ0IHRoZW0gdG8gc3RyaW5ncyBhbmQgaW5zZXJ0IHRoZW0gaW50byB0aGUgc3R5bGUgc2hlZXRcclxuXHRcdGZvciggbGV0IHJ1bGVOYW1lIGluIHN0eWxlU2NvcGUuX25hbWVkUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBydWxlOiBSdWxlID0gc3R5bGVTY29wZS5fbmFtZWRSdWxlc1tydWxlTmFtZV07XHJcblx0XHRcdHJ1bGUuaW5kZXggPSBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoIHJ1bGUudG9Dc3NTdHJpbmcoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZG8gdGhlIHNhbWUgZm9yIHRoZSB1bm5hbWVkIHJ1bGVzXHJcblx0XHRmb3IoIGxldCB1bm5hbWVkUnVsZSBvZiBzdHlsZVNjb3BlLl91bm5hbWVkUnVsZXMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBydWxlID0gdW5uYW1lZFJ1bGUgYXMgUnVsZTtcclxuXHRcdFx0cnVsZS5pbmRleCA9IHN0eWxlU2hlZXQuaW5zZXJ0UnVsZSggcnVsZS50b0Nzc1N0cmluZygpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGlzIHN0eWxlIHNjb3BlIGZyb20gRE9NIC0gb25seSB3b3JrcyBmb3IgbXVsdGlwbGV4IHN0eWxlIHNjb3Blc1xyXG5cdHB1YmxpYyBzdGF0aWMgZGVhY3RpdmF0ZSggc3R5bGVTY29wZTogU3R5bGVTY29wZSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoIXN0eWxlU2NvcGUpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRpZiAoc3R5bGVTY29wZS5EZWZpbml0aW9uLmlzTXVsdGlwbGV4KVxyXG5cdFx0e1xyXG5cdFx0XHRzdHlsZVNjb3BlLmNsZWFyRE9NSW5mbygpO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8gcmVtb3ZlIHRoZSA8c3R5bGU+IGVsZW1lbnQgZnJvbSB0aGUgZG9jdW1lbnRcclxuXHRcdFx0bGV0IHN0eWxlRWxtID0gdGhpcy5tdWx0aXBsZXhTY29wZXMuZ2V0KCBzdHlsZVNjb3BlKTtcclxuXHRcdFx0aWYgKHN0eWxlRWxtKVxyXG5cdFx0XHRcdHN0eWxlRWxtLnJlbW92ZSgpO1xyXG5cclxuXHRcdFx0dGhpcy5tdWx0aXBsZXhTY29wZXMuZGVsZXRlKCBzdHlsZVNjb3BlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqIEVuc3VyZXMgdGhhdCB0aGUgPHN0eWxlPiBlbGVtZW50IGlzIGluc2VydGVkIGludG8gRE9NICovXHJcblx0cHJpdmF0ZSBzdGF0aWMgZW5zdXJlRE9NKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdHlsZVNoZWV0KVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0Ly8gY3JlYXRlIDxzdHlsZT4gZWxlbWVudCBhbmQgaW5zZXJ0IGl0IGludG8gPGhlYWQ+XHJcblx0XHR0aGlzLnN0eWxlRWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzdHlsZVwiKTtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG0pO1xyXG5cclxuXHRcdHRoaXMuc3R5bGVTaGVldCA9IHRoaXMuc3R5bGVFbG0uc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdG8gdXNlIG9wdGltYWl6ZWQgbmFtZXMgZm9yIHN0eWxlIGVsZW1lbnRzIChjbGFzcyBuYW1lcywgYW5pbWF0aW9uXHJcblx0Ly8gbmFtZXMsIGV0Yy4pXHJcblx0cHJpdmF0ZSBzdGF0aWMgdXNlVW5pcXVlU3R5bGVOYW1lczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvLyBQcmVmaXggdG8gdXNlIHdoZW4gZ2VuZXJhdGluZyB1bmlxdWUgc3R5bGUgbmFtZXMuIElmIHVuZGVmaW5lZCwgYSBzdGFuZGFyZCBwcmVmaXggXCJuXCIgd2lsbFxyXG5cdC8vIGJlIHVzZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgdW5pcXVlU3R5bGVOYW1lc1ByZWZpeDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuXHQvLyBOZXh0IG51bWJlciB0byB1c2Ugd2hlbiBnZW5lcmF0aW5nIHVuaXF1ZSBpZGVudGlmaWVycy5cclxuXHRwcml2YXRlIHN0YXRpYyBuZXh0VW5pcXVlSUQ6IG51bWJlciA9IDE7XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdCB3aGVyZSBhbGwgcnVsZXMgZnJvbSBhbGwgU3R5bGVTY29wZSBvYmplY3RzIGFyZSBjcmVhZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgc3R5bGVFbG0/OiBIVE1MU3R5bGVFbGVtZW50O1xyXG5cclxuXHQvLyBET00gc3R5bGUgc2hlZXQgb2JqZWN0IGluc2VydGVkIGludG8gdGhlIDxoZWFkPiBlbGVtZW50LlxyXG5cdHByaXZhdGUgc3RhdGljIHN0eWxlU2hlZXQ/OiBDU1NTdHlsZVNoZWV0O1xyXG5cclxuXHQvLyBNYXAgb2YgU3R5bGVTY29wZSBtdWx0aXBsZXggb2JqZWN0cyB0byB0aGVpciA8c3R5bGU+IGVsZW1lbnQgRE9NIG9iamVjdHMuXHJcblx0cHJpdmF0ZSBzdGF0aWMgbXVsdGlwbGV4U2NvcGVzID0gbmV3IE1hcDxTdHlsZVNjb3BlLEhUTUxTdHlsZUVsZW1lbnQ+KCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBjb250YWlucyB0eXBlcyBhbmQgZnVuY3Rpb25zIHVzZWQgdG8gd29yayB3aXRoIENTUyBjb2xvcnMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtCYXNlX1N0eWxlVHlwZSwgU3RyaW5nUHJveHl9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHt0c2h9IGZyb20gXCIuL3RzaFwiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogT2JqZWN0IHdob3NlIHByb3BlcnR5IG5hbWVzIGFyZSBuYW1lcyBvZiB3ZWxsLWtub3duIGNvbG9ycyBhbmQgdmFsdWVzIGNvcnJlc3BvbmQgdG8gdGhlIGhleGFkZWNpbWFsXHJcbiAqIHJlcHJlc2VudGFydGlvbiBvZiB0aGUgUkdCIHNlcGFyYXRpb25zICh3aXRob3V0IGFuIGFscGhhIG1hc2spLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yc0NsYXNzIFxyXG57XHJcbiAgICBibGFjayA9IDB4MDAwMDAwO1xyXG4gICAgc2lsdmVyID0gMHhjMGMwYzA7XHJcbiAgICBncmF5ID0gMHg4MDgwODA7XHJcbiAgICB3aGl0ZSA9IDB4ZmZmZmZmO1xyXG4gICAgbWFyb29uID0gMHg4MDAwMDA7XHJcbiAgICByZWQgPSAweGZmMDAwMDtcclxuICAgIHB1cnBsZSA9IDB4ODAwMDgwO1xyXG4gICAgZnVjaHNpYSA9IDB4ZmYwMGZmO1xyXG4gICAgZ3JlZW4gPSAweDAwODAwMDtcclxuICAgIGxpbWUgPSAweDAwZmYwMDtcclxuICAgIG9saXZlID0gMHg4MDgwMDA7XHJcbiAgICB5ZWxsb3cgPSAweGZmZmYwMDtcclxuICAgIG5hdnkgPSAweDAwMDA4MDtcclxuICAgIGJsdWUgPSAweDAwMDBmZjtcclxuICAgIHRlYWwgPSAweDAwODA4MDtcclxuICAgIGFxdWEgPSAweDAwZmZmZjtcclxuICAgIG9yYW5nZSA9IDB4ZmZhNTAwO1xyXG4gICAgYWxpY2VibHVlID0gMHhmMGY4ZmY7XHJcbiAgICBhbnRpcXVld2hpdGUgPSAweGZhZWJkNztcclxuICAgIGFxdWFtYXJpbmUgPSAweDdmZmZkNDtcclxuICAgIGF6dXJlID0gMHhmMGZmZmY7XHJcbiAgICBiZWlnZSA9IDB4ZjVmNWRjO1xyXG4gICAgYmlzcXVlID0gMHhmZmU0YzQ7XHJcbiAgICBibGFuY2hlZGFsbW9uZCA9IDB4ZmZlYmNkO1xyXG4gICAgYmx1ZXZpb2xldCA9IDB4OGEyYmUyO1xyXG4gICAgYnJvd24gPSAweGE1MmEyYTtcclxuICAgIGJ1cmx5d29vZCA9IDB4ZGViODg3O1xyXG4gICAgY2FkZXRibHVlID0gMHg1ZjllYTA7XHJcbiAgICBjaGFydHJldXNlID0gMHg3ZmZmMDA7XHJcbiAgICBjaG9jb2xhdGUgPSAweGQyNjkxZTtcclxuICAgIGNvcmFsID0gMHhmZjdmNTA7XHJcbiAgICBjb3JuZmxvd2VyYmx1ZSA9IDB4NjQ5NWVkO1xyXG4gICAgY29ybnNpbGsgPSAweGZmZjhkYztcclxuICAgIGNyaW1zb24gPSAweGRjMTQzYztcclxuICAgIGN5YW4gPSAweDAwZmZmZjtcclxuICAgIGRhcmtibHVlID0gMHgwMDAwOGI7XHJcbiAgICBkYXJrY3lhbiA9IDB4MDA4YjhiO1xyXG4gICAgZGFya2dvbGRlbnJvZCA9IDB4Yjg4NjBiO1xyXG4gICAgZGFya2dyYXkgPSAweGE5YTlhOTtcclxuICAgIGRhcmtncmVlbiA9IDB4MDA2NDAwO1xyXG4gICAgZGFya2dyZXkgPSAweGE5YTlhOTtcclxuICAgIGRhcmtraGFraSA9IDB4YmRiNzZiO1xyXG4gICAgZGFya21hZ2VudGEgPSAweDhiMDA4YjtcclxuICAgIGRhcmtvbGl2ZWdyZWVuID0gMHg1NTZiMmY7XHJcbiAgICBkYXJrb3JhbmdlID0gMHhmZjhjMDA7XHJcbiAgICBkYXJrb3JjaGlkID0gMHg5OTMyY2M7XHJcbiAgICBkYXJrcmVkID0gMHg4YjAwMDA7XHJcbiAgICBkYXJrc2FsbW9uID0gMHhlOTk2N2E7XHJcbiAgICBkYXJrc2VhZ3JlZW4gPSAweDhmYmM4ZjtcclxuICAgIGRhcmtzbGF0ZWJsdWUgPSAweDQ4M2Q4YjtcclxuICAgIGRhcmtzbGF0ZWdyYXkgPSAweDJmNGY0ZjtcclxuICAgIGRhcmtzbGF0ZWdyZXkgPSAweDJmNGY0ZjtcclxuICAgIGRhcmt0dXJxdW9pc2UgPSAweDAwY2VkMTtcclxuICAgIGRhcmt2aW9sZXQgPSAweDk0MDBkMztcclxuICAgIGRlZXBwaW5rID0gMHhmZjE0OTM7XHJcbiAgICBkZWVwc2t5Ymx1ZSA9IDB4MDBiZmZmO1xyXG4gICAgZGltZ3JheSA9IDB4Njk2OTY5O1xyXG4gICAgZGltZ3JleSA9IDB4Njk2OTY5O1xyXG4gICAgZG9kZ2VyYmx1ZSA9IDB4MWU5MGZmO1xyXG4gICAgZmlyZWJyaWNrID0gMHhiMjIyMjI7XHJcbiAgICBmbG9yYWx3aGl0ZSA9IDB4ZmZmYWYwO1xyXG4gICAgZm9yZXN0Z3JlZW4gPSAweDIyOGIyMjtcclxuICAgIGdhaW5zYm9ybyA9IDB4ZGNkY2RjO1xyXG4gICAgZ2hvc3R3aGl0ZSA9IDB4ZjhmOGZmO1xyXG4gICAgZ29sZCA9IDB4ZmZkNzAwO1xyXG4gICAgZ29sZGVucm9kID0gMHhkYWE1MjA7XHJcbiAgICBncmVlbnllbGxvdyA9IDB4YWRmZjJmO1xyXG4gICAgZ3JleSA9IDB4ODA4MDgwO1xyXG4gICAgaG9uZXlkZXcgPSAweGYwZmZmMDtcclxuICAgIGhvdHBpbmsgPSAweGZmNjliNDtcclxuICAgIGluZGlhbnJlZCA9IDB4Y2Q1YzVjO1xyXG4gICAgaW5kaWdvID0gMHg0YjAwODI7XHJcbiAgICBpdm9yeSA9IDB4ZmZmZmYwO1xyXG4gICAga2hha2kgPSAweGYwZTY4YztcclxuICAgIGxhdmVuZGVyID0gMHhlNmU2ZmE7XHJcbiAgICBsYXZlbmRlcmJsdXNoID0gMHhmZmYwZjU7XHJcbiAgICBsYXduZ3JlZW4gPSAweDdjZmMwMDtcclxuICAgIGxlbW9uY2hpZmZvbiA9IDB4ZmZmYWNkO1xyXG4gICAgbGlnaHRibHVlID0gMHhhZGQ4ZTY7XHJcbiAgICBsaWdodGNvcmFsID0gMHhmMDgwODA7XHJcbiAgICBsaWdodGN5YW4gPSAweGUwZmZmZjtcclxuICAgIGxpZ2h0Z29sZGVucm9keWVsbG93ID0gMHhmYWZhZDI7XHJcbiAgICBsaWdodGdyYXkgPSAweGQzZDNkMztcclxuICAgIGxpZ2h0Z3JlZW4gPSAweDkwZWU5MDtcclxuICAgIGxpZ2h0Z3JleSA9IDB4ZDNkM2QzO1xyXG4gICAgbGlnaHRwaW5rID0gMHhmZmI2YzE7XHJcbiAgICBsaWdodHNhbG1vbiA9IDB4ZmZhMDdhO1xyXG4gICAgbGlnaHRzZWFncmVlbiA9IDB4MjBiMmFhO1xyXG4gICAgbGlnaHRza3libHVlID0gMHg4N2NlZmE7XHJcbiAgICBsaWdodHNsYXRlZ3JheSA9IDB4Nzc4ODk5O1xyXG4gICAgbGlnaHRzbGF0ZWdyZXkgPSAweDc3ODg5OTtcclxuICAgIGxpZ2h0c3RlZWxibHVlID0gMHhiMGM0ZGU7XHJcbiAgICBsaWdodHllbGxvdyA9IDB4ZmZmZmUwO1xyXG4gICAgbGltZWdyZWVuID0gMHgzMmNkMzI7XHJcbiAgICBsaW5lbiA9IDB4ZmFmMGU2O1xyXG4gICAgbWFnZW50YSA9IDB4ZmYwMGZmO1xyXG4gICAgbWVkaXVtYXF1YW1hcmluZSA9IDB4NjZjZGFhO1xyXG4gICAgbWVkaXVtYmx1ZSA9IDB4MDAwMGNkO1xyXG4gICAgbWVkaXVtb3JjaGlkID0gMHhiYTU1ZDM7XHJcbiAgICBtZWRpdW1wdXJwbGUgPSAweDkzNzBkYjtcclxuICAgIG1lZGl1bXNlYWdyZWVuID0gMHgzY2IzNzE7XHJcbiAgICBtZWRpdW1zbGF0ZWJsdWUgPSAweDdiNjhlZTtcclxuICAgIG1lZGl1bXNwcmluZ2dyZWVuID0gMHgwMGZhOWE7XHJcbiAgICBtZWRpdW10dXJxdW9pc2UgPSAweDQ4ZDFjYztcclxuICAgIG1lZGl1bXZpb2xldHJlZCA9IDB4YzcxNTg1O1xyXG4gICAgbWlkbmlnaHRibHVlID0gMHgxOTE5NzA7XHJcbiAgICBtaW50Y3JlYW0gPSAweGY1ZmZmYTtcclxuICAgIG1pc3R5cm9zZSA9IDB4ZmZlNGUxO1xyXG4gICAgbW9jY2FzaW4gPSAweGZmZTRiNTtcclxuICAgIG5hdmFqb3doaXRlID0gMHhmZmRlYWQ7XHJcbiAgICBvbGRsYWNlID0gMHhmZGY1ZTY7XHJcbiAgICBvbGl2ZWRyYWIgPSAweDZiOGUyMztcclxuICAgIG9yYW5nZXJlZCA9IDB4ZmY0NTAwO1xyXG4gICAgb3JjaGlkID0gMHhkYTcwZDY7XHJcbiAgICBwYWxlZ29sZGVucm9kID0gMHhlZWU4YWE7XHJcbiAgICBwYWxlZ3JlZW4gPSAweDk4ZmI5ODtcclxuICAgIHBhbGV0dXJxdW9pc2UgPSAweGFmZWVlZTtcclxuICAgIHBhbGV2aW9sZXRyZWQgPSAweGRiNzA5MztcclxuICAgIHBhcGF5YXdoaXAgPSAweGZmZWZkNTtcclxuICAgIHBlYWNocHVmZiA9IDB4ZmZkYWI5O1xyXG4gICAgcGVydSA9IDB4Y2Q4NTNmO1xyXG4gICAgcGluayA9IDB4ZmZjMGNiO1xyXG4gICAgcGx1bSA9IDB4ZGRhMGRkO1xyXG4gICAgcG93ZGVyYmx1ZSA9IDB4YjBlMGU2O1xyXG4gICAgcm9zeWJyb3duID0gMHhiYzhmOGY7XHJcbiAgICByb3lhbGJsdWUgPSAweDQxNjllMTtcclxuICAgIHNhZGRsZWJyb3duID0gMHg4YjQ1MTM7XHJcbiAgICBzYWxtb24gPSAweGZhODA3MjtcclxuICAgIHNhbmR5YnJvd24gPSAweGY0YTQ2MDtcclxuICAgIHNlYWdyZWVuID0gMHgyZThiNTc7XHJcbiAgICBzZWFzaGVsbCA9IDB4ZmZmNWVlO1xyXG4gICAgc2llbm5hID0gMHhhMDUyMmQ7XHJcbiAgICBza3libHVlID0gMHg4N2NlZWI7XHJcbiAgICBzbGF0ZWJsdWUgPSAweDZhNWFjZDtcclxuICAgIHNsYXRlZ3JheSA9IDB4NzA4MDkwO1xyXG4gICAgc2xhdGVncmV5ID0gMHg3MDgwOTA7XHJcbiAgICBzbm93ID0gMHhmZmZhZmE7XHJcbiAgICBzcHJpbmdncmVlbiA9IDB4MDBmZjdmO1xyXG4gICAgc3RlZWxibHVlID0gMHg0NjgyYjQ7XHJcbiAgICB0YW4gPSAweGQyYjQ4YztcclxuICAgIHRoaXN0bGUgPSAweGQ4YmZkODtcclxuICAgIHRvbWF0byA9IDB4ZmY2MzQ3O1xyXG4gICAgdHVycXVvaXNlID0gMHg0MGUwZDA7XHJcbiAgICB2aW9sZXQgPSAweGVlODJlZTtcclxuICAgIHdoZWF0ID0gMHhmNWRlYjM7XHJcbiAgICB3aGl0ZXNtb2tlID0gMHhmNWY1ZjU7XHJcbiAgICB5ZWxsb3dncmVlbiA9IDB4OWFjZDMyO1xyXG4gICAgcmViZWNjYXB1cnBsZSA9IDB4NjYzMzk5XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDb2xvcnMgb2JqZWN0IGlzIHVzZWQgdG8gZ2V0IHN0cmluZyByZXByZXNlbnRhdGlvbnMgb2YgdGhlIHdlbGwta25vd24gV2ViIGNvbG9ycyBhcyB3ZWxsIGFzXHJcbiAqIHRvIGdldCB0aGVpciBudW1lcmljIHZhbHVlcy5cclxuICovXHJcbmV4cG9ydCBsZXQgQ29sb3JzID0gbmV3IENvbG9yc0NsYXNzKCk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgY29sb3IgcmVwcmVzZW50ZWQgYXMgYW4gYXJyYXk6XHJcbiAqICAgLSBzaW5nbGUtZWxlbWVudCBhcnJheSByZXByZXNlbnRzIGEgY29sb3IgdmFsdWUgZWl0aGVyIGFzIGEgc3RyaW5nIG9yIGFzIGEgbnVtYmVyLlxyXG4gKiAgIC0gdHdvLWVsZW1lbnQgYXJyYXkgcmVwcmVzZW50cyBlaXRoZXIgYSBjb2xvciBuYW1lIG9yIGEgbnVtZXJpYyBSR0IgdmFsdWUgaW4gdGhlIGZpcnN0IGVsZW1lbnRcclxuICogICAgIGFuZCBhbiBhbHBoYSBzZXBhcmF0aW9uIGluIHRoZSBzZWNvbmQgZWxlbWVudC5cclxuICogICAtIHRocmVlLWVsZW1lbnQgYXJheSByZXByZXNlbnRzIFJHQiBzZXBhcmF0aW9ucyBhcyBlaXRoZXIgaW50ZWdlciBudW1iZXJzICgwIHRvIDI1NSkgb3IgZmxvYXRpbmdcclxuICogICAgIG51bWJlcnMgKDAuMCB0byAxLjApIGZvciBwZXJjZW50YWdlcy5cclxuICogICAtIGZvdXItZWxlbWVudCBhcmF5IHJlcHJlc2VudHMgUkdCQSBzZXBhcmF0aW9ucyBhcyBlaXRoZXIgaW50ZWdlciBudW1iZXJzICgwIHRvIDI1NSkgb3IgZmxvYXRpbmdcclxuICogICAgIG51bWJlcnMgKDAuMCB0byAxLjApIGZvciBwZXJjZW50YWdlcy4gVGhlIGFscGhhIHNlcGFyYXRpb24gKHRoZSBsYXN0IGVsZW1lbnQpIGlzIGFsd2F5cyBhXHJcbiAqICAgICBwZXJjZW50YWdlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JBc0FycmF5ID1cclxuICAgICAgICAgICAgICAgIFtrZXlvZiBDb2xvcnNDbGFzcyB8IG51bWJlcl0gfFxyXG4gICAgICAgICAgICAgICAgW2tleW9mIENvbG9yc0NsYXNzIHwgbnVtYmVyLCBudW1iZXJdIHxcclxuICAgICAgICAgICAgICAgIFtudW1iZXIsIG51bWJlciwgbnVtYmVyXSB8XHJcbiAgICAgICAgICAgICAgICBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgY29sb3IuIENvbG9yIGNhbiBiZSByZXByZXNlbnRlZCB1c2luZyB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4gKiAgIC0gc3RyaW5nIChlLmcuIFwicmVkXCIgb3IgXCIjZmU1XCIgb3IgXCJyZ2JhKDE5MCwgMjAwLCAyMzUsIDkwJSlcIiwgZXRjLilcclxuICogICAtIG51bWJlcjpcclxuICogICAgIC0gcG9zaXRpdmUgaW50ZWdlciBudW1iZXJzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAweEZGRkZGRiBhcmUgdHJlYXRlZCBhcyBSR0Igc2VwYXJhdGlvbnMgMHhSUkdHQkIuXHJcbiAqICAgICAtIHBvc2l0aXZlIGludGVnZXIgbnVtYmVycyBncmVhdGVyIHRoYW4gMHhGRkZGRkYgYXJlIHRyZWF0ZWQgYXMgUkdCQSBzZXBhcmF0aW9ucyAweFJSR0dCQkFBLlxyXG4gKiAgICAgLSBuZWdhdGl2ZSBhbmQgZmxvYXRpbmcgcG9pbnQgbnVtYmVycyBhcmUgcmVqZWN0ZWQuXHJcbiAqICAgLSBhcnJheSBbW0NvbG9yQXNBcnJheV1dXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb2xvcl9TdHlsZVR5cGUgPSBcInRyYW5zcGFyZW50XCIgfCBcImN1cnJlbnRjb2xvclwiIHwga2V5b2YgQ29sb3JzQ2xhc3MgfCBudW1iZXIgfCBDb2xvckFzQXJyYXkgfCBCYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHNlcGFyYXRpb24gdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgMi1kaWdpdCBoZXhhZGVjaW1hbCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgTnVtYmVyIGZyb20gMCB0byAyNTVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXBUb0hleCggdmFsOiBudW1iZXIpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHMgPSB2YWwudG9TdHJpbmcoMTYpO1xyXG4gICAgcmV0dXJuIHMubGVuZ3RoID09PSAxID8gXCIwXCIgKyBzIDogcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY29sb3IgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIGNvbG9yIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBDb2xvciBhcyBhIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yTnVtYmVyVG9Dc3NTdHJpbmcoIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcbntcclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBpZiAodmFsIDwgMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIFwiQSBudW1iZXIgcmVwcmVzZW50aW5nIGNvbG9yIGNhbm5vdCBiZSBuZWdhdGl2ZTogXCIgKyB2YWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gXCIjMDAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCBcIkEgbnVtYmVyIHJlcHJlc2VudGluZyBjb2xvciBjYW5ub3QgYmUgZmxvYXRpbmcgcG9pbnQ6IFwiICsgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiIzAwMFwiO1xyXG4gICAgICAgIH1cclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBpZiAodmFsIDw9IDB4RkZGRkZGKVxyXG4gICAge1xyXG4gICAgICAgIGxldCByID0gKHZhbCAmIDB4RkYwMDAwKSA+PiAxNjtcclxuICAgICAgICBsZXQgZyA9ICh2YWwgJiAweDAwRkYwMCkgPj4gODtcclxuICAgICAgICBsZXQgYiA9ICh2YWwgJiAweDAwMDBGRik7XHJcbiAgICAgICAgcmV0dXJuIGAjJHtzZXBUb0hleChyKX0ke3NlcFRvSGV4KGcpfSR7c2VwVG9IZXgoYil9YDtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICBsZXQgciA9ICh2YWwgJiAweEZGMDAwMDAwKSA+PiAyNDtcclxuICAgICAgICBsZXQgZyA9ICh2YWwgJiAweDAwRkYwMDAwKSA+PiAxNjtcclxuICAgICAgICBsZXQgYiA9ICh2YWwgJiAweDAwMDBGRjAwKSA+PiA4O1xyXG4gICAgICAgIGxldCBhID0gKHZhbCAmIDB4MDAwMDAwRkYpO1xyXG4gICAgICAgIHJldHVybiBgIyR7c2VwVG9IZXgocil9JHtzZXBUb0hleChnKX0ke3NlcFRvSGV4KGIpfSR7c2VwVG9IZXgoYSl9fWA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbG9yIHZhbHVlIGZyb20gdGhlIGFycmF5IHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1MgdGltZSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sb3JBc0FycmF5VG9Dc3NTdHJpbmcoIHZhbDogQ29sb3JBc0FycmF5KTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKVxyXG4gICAgICAgIHJldHVybiBjb2xvclRvQ3NzU3RyaW5nKCB2YWxbMF0pO1xyXG4gICAgZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gMilcclxuICAgICAgICByZXR1cm4gdHNoLmFscGhhKCB2YWxbMF0sIHZhbFsxXSkudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKHZhbC5sZW5ndGggPT09IDMpXHJcbiAgICAgICAgcmV0dXJuIHRzaC5yZ2IoIHZhbFswXSwgdmFsWzFdLCB2YWxbMl0pLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHRzaC5yZ2IoIHZhbFswXSwgdmFsWzFdLCB2YWxbMl0sIHZhbFszXSkudG9TdHJpbmcoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRpbWUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBUaW1lIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yVG9Dc3NTdHJpbmcoIHZhbDogQ29sb3JfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG5cdCAgICByZXR1cm4gY29sb3JOdW1iZXJUb0Nzc1N0cmluZyggdmFsKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcblx0ICAgIHJldHVybiBjb2xvckFzQXJyYXlUb0Nzc1N0cmluZyggdmFsKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIlxyXG5pbXBvcnQge0NvbG9yX1N0eWxlVHlwZSwgY29sb3JUb0Nzc1N0cmluZ30gZnJvbSBcIi4vY29sb3JzXCJcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFsaWduLWNvbnRlbnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25Db250ZW50U3R5bGVUeXBlID0gXCJub3JtYWxcIiB8IFwic3RyZXRjaFwiIHwgXCJjZW50ZXJcIiB8IFwic3RhcnRcIiB8IFwiZW5kXCIgfCBcImZsZXgtc3RhcnRcIiB8IFwiZmxleC1lbmRcIiB8XHJcblx0XHRcdFx0XCJiYXNlbGluZVwiIHwgXCJmaXJzdCBiYXNlbGluZVwiIHwgXCJsYXN0IGJhc2VsaW5lXCIgfCBcInNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBjZW50ZXJcIiB8XHJcblx0XHRcdFx0XCJzcGFjZS1iZXR3ZWVuXCIgfCBcInNwYWNlLWFyb3VuZFwiIHwgXCJzcGFjZS1ldmVubHlcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ24taXRlbXMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25JdGVtc1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcInN0cmV0Y2hcIiB8IFwiY2VudGVyXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiIHwgXCJmbGV4LXN0YXJ0XCIgfCBcImZsZXgtZW5kXCIgfFxyXG5cdFx0XHRcdFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHwgXCJzYWZlIGNlbnRlclwiIHwgXCJ1bnNhZmUgY2VudGVyXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGFsaWduLXNlbGYgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQWxpZ25TZWxmU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcIm5vcm1hbFwiIHwgXCJzdHJldGNoXCIgfCBcImNlbnRlclwiIHwgXCJzdGFydFwiIHwgXCJlbmRcIiB8IFwiZmxleC1zdGFydFwiIHwgXCJmbGV4LWVuZFwiIHxcclxuXHRcdFx0XHRcInNlbGYtc3RhcnRcIiB8IFwic2VsZi1lbmRcIiB8IFwiYmFzZWxpbmVcIiB8IFwiZmlyc3QgYmFzZWxpbmVcIiB8IFwibGFzdCBiYXNlbGluZVwiIHxcclxuXHRcdFx0XHRcInNhZmUgY2VudGVyXCIgfCBcInVuc2FmZSBjZW50ZXJcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYWxpZ25tZW50LWJhc2VsaW5lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFsaWdubWVudEJhc2VsaW5lU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcImJhc2VsaW5lXCIgfCBcImJlZm9yZS1lZGdlXCIgfCBcInRleHQtYmVmb3JlLWVkZ2VcIiB8XHJcblx0XHRcdFx0XCJtaWRkbGVcIiB8IFwiY2VudHJhbFwiIHwgXCJhZnRlci1lZGdlXCIgfCBcInRleHQtYWZ0ZXItZWRnZVwiIHwgXCJpZGVvZ3JhcGhpY1wiIHwgXCJhbHBoYWJldGljXCIgfFxyXG5cdFx0XHRcdFwiaGFuZ2luZ1wiIHwgXCJtYXRoZW1hdGljYWxcIiB8IFwidG9wXCIgfCBcImNlbnRlclwiIHwgXCJib3R0b21cIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVBbmltYXRpb24gPSB1dGlscy5CYXNlX1N0eWxlVHlwZSB8XHJcbntcclxuXHRkZWxheT86IHV0aWxzLlNpbmdsZVRpbWVfU3R5bGVUeXBlO1xyXG5cdGZ1bmN0aW9uPzogU2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb247XHJcblx0ZHVyYXRpb24/OiB1dGlscy5TaW5nbGVUaW1lX1N0eWxlVHlwZTtcclxuXHRjb3VudD86IFNpbmdsZUFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50O1xyXG5cdGRpcmVjdGlvbj86IFNpbmdsZUFuaW1hdGlvbkRpcmVjdGlvbjtcclxuXHRzdGF0ZT86IFNpbmdsZUFuaW1hdGlvblBsYXlTdGF0ZTtcclxuXHRtb2RlPzogU2luZ2xlQW5pbWF0aW9uRmlsbE1vZGU7XHJcblx0bmFtZT86IFNpbmdsZUFuaW1hdGlvbk5hbWU7XHJcbn07XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblN0eWxlVHlwZSA9IFNpbmdsZUFuaW1hdGlvbiB8IFNpbmdsZUFuaW1hdGlvbltdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuaW1hdGlvbiBzdHlsZSByZXByZXNlbnRlZCBhcyBhbiBvYmplY3Qgd2l0aCBmaWVsZHMgY29ycmVzcG9uZGluZyB0byBhbmltYXRpb25cclxuICogcHJvcGVydGllcyB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIHZhbCBTaW5nbGUgYW5pbWF0aW9uIG9iamVjdC4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uVG9Dc3NTdHJpbmcoIHZhbDogU2luZ2xlQW5pbWF0aW9uKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLm9iamVjdFRvQ3NzU3RyaW5nKCB2YWwsIGZhbHNlLFxyXG4gICAgICAgICAgICBbXCJkZWxheVwiLCB1dGlscy5zaW5nbGVUaW1lVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJmdW5jdGlvblwiLCBzaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wiZHVyYXRpb25cIiwgdXRpbHMuc2luZ2xlVGltZVRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wiY291bnRcIiwgdXRpbHMuc2luZ2xlTnVtYmVyVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBcImRpcmVjdGlvblwiLFxyXG4gICAgICAgICAgICBcInN0YXRlXCIsXHJcbiAgICAgICAgICAgIFwibW9kZVwiLFxyXG4gICAgICAgICAgICBcIm5hbWVcIixcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYW5pbWF0aW9uIHN0eWxlIHRvIGl0cyBDU1Mgc3RyaW5nIHZhbHVlLlxyXG4gKiBAcGFyYW0gb2JqIFNpbmdsZSBhbmltYXRpb24gb2JqZWN0LiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRpb25Ub0Nzc1N0cmluZyggdmFsOiBBbmltYXRpb25TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgc2luZ2xlQW5pbWF0aW9uVG9Dc3NTdHJpbmcpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzaW5nbGVBbmltYXRpb25Ub0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBkaXJlY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQW5pbWF0aW9uRGlyZWN0aW9uID0gXCJub3JtYWxcIiB8IFwicmV2ZXJzZVwiIHwgXCJhbHRlcm5hdGVcIiB8IFwiYWx0ZXJuYXRlLXJldmVyc2VcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIGFuaW1hdGlvbi1kaXJlY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uRGlyZWN0aW9uU3R5bGVUeXBlID0gU2luZ2xlQW5pbWF0aW9uRGlyZWN0aW9uIHwgU2luZ2xlQW5pbWF0aW9uRGlyZWN0aW9uW107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYW5pbWF0aW9uIGZpbGwgbW9kZSAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVBbmltYXRpb25GaWxsTW9kZSA9IFwibm9uZVwiIHwgXCJmb3J3YXJkc1wiIHwgXCJiYWNrd2FyZHNcIiB8IFwiYm90aFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWZpbGwtbW9kZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25GaWxsTW9kZVN0eWxlVHlwZSA9IFNpbmdsZUFuaW1hdGlvbkRpcmVjdGlvbiB8IFNpbmdsZUFuaW1hdGlvbkRpcmVjdGlvbltdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiBpdGVyYXRpb24gY291bnQgKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQW5pbWF0aW9uSXRlcmF0aW9uQ291bnQgPSBcImluZmluaXRlXCIgfCB1dGlscy5TaW5nbGVOdW1iZXJfU3R5bGVUeXBlIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25JdGVyYXRpb25Db3VudFN0eWxlVHlwZSA9IFNpbmdsZUFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50IHwgU2luZ2xlQW5pbWF0aW9uSXRlcmF0aW9uQ291bnRbXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gbmFtZSAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVBbmltYXRpb25OYW1lID0gXCJub25lXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZSB8IHN0cmluZztcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tbmFtZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25OYW1lU3R5bGVUeXBlID0gU2luZ2xlQW5pbWF0aW9uTmFtZSB8IFNpbmdsZUFuaW1hdGlvbk5hbWVbXSB8IHN0cmluZztcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBhbmltYXRpb24gcGxheSBzdGF0ZSAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVBbmltYXRpb25QbGF5U3RhdGUgPSBcInBhdXNlZFwiIHwgXCJydW5uaW5nXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBhbmltYXRpb24tcGxheS1zdGF0ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25QbGF5U3RhdGVTdHlsZVR5cGUgPSBTaW5nbGVBbmltYXRpb25QbGF5U3RhdGUgfCBTaW5nbGVBbmltYXRpb25QbGF5U3RhdGVbXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbXBsZSBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9ucyAtIHRob3NlIHRoYXQgZG9uJ3QgaGF2ZSBwYXJhbWV0ZXJzICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1NpbXBsZSA9IFwibGluZWFyXCIgfCBcImVhc2VcIiB8IFwiZWFzZS1pblwiIHwgXCJlYXNlLW91dFwiIHwgXCJlYXNlLWluLW91dFwiIHwgXCJzdGVwLXN0YXJ0XCIgfCBcInN0ZXAtZW5kXCI7XHJcblxyXG4vKiogVHlwZSBmb3Igc3RlcCBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uIHBvc2l0aW9uICovXHJcbmV4cG9ydCB0eXBlIEFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uX1N0ZXBQb3NpdGlvbiA9IFwianVtcC1zdGFydFwiIHwgXCJqdW1wLWVuZFwiIHwgXCJqdW1wLW5vbmVcIiB8IFwianVtcC1ib3RoXCIgfCBcInN0YXJ0XCIgfCBcImVuZFwiO1xyXG5cclxuLyoqIFR5cGUgZm9yIHN0ZXAgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9TdGVwID0gW251bWJlciwgQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fU3RlcFBvc2l0aW9uP107XHJcblxyXG4vKiogVHlwZSBmb3IgQmV6aWVyIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fQmV6aWVyID0gW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlcl07XHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGFuaW1hdGlvbiB0aW1pbmcgZnVuY3Rpb24gKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb24gPSBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9TaW1wbGUgfCBBbmltYXRpb25UaW1pbmdGdW5jdGlvbl9TdGVwIHwgQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25fQmV6aWVyIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBBbmltYXRpb25UaW1pbmdGdW5jdGlvblN0eWxlVHlwZSA9IFNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uIHwgU2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25bXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgYW5pbWF0aW9uIHRpbWluZyBmdW5jdGlvbiB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpbmdsZSBhbmltYXRpb24gdGltaW5nIGZ1bmN0aW9uIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25Ub0Nzc1N0cmluZyggdmFsOiBTaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvbik6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodmFsLmxlbmd0aCA8IDMpXHJcblx0e1xyXG5cdFx0Ly8gdGhpcyBpcyBzdGVwIGZ1bmN0aW9uIHdpdGggb25seSB0aGUgbnVtYmVyIG9mIHN0ZXBzXHJcblxyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0aWYgKHZhbFswXSA8PSAwKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJOdW1iZXIgb2Ygc3RlcHMgaW4gYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgZ3JlYXRlciB0aGFuIHplcm9cIik7XHJcblx0XHRcdGVsc2UgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKCB2YWxbMF0pKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJOdW1iZXIgb2Ygc3RlcHMgaW4gYW5pbWF0aW9uIGZ1bmN0aW9uIG11c3QgYmUgYW4gSW50ZWdlclwiKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIGBzdGVwKCR7dmFsWzBdfSR7dmFsLmxlbmd0aCA9PT0gMiA/IFwiLFwiICsgdmFsWzFdIDogXCJcIn0pYDtcclxuXHR9XHJcblx0ZWxzZVxyXG5cdHtcclxuXHRcdC8vIHRoaXMgaXMgYmV6aWVyIGZ1bmN0aW9uXHJcblxyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0aWYgKHZhbFswXSA8IDAgfHwgdmFsWzBdID4gMSB8fCB2YWxbMl0gPCAwIHx8IHZhbFsyXSA+IDEpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkZpcnN0IGFuZCB0aGlyZCBwYXJhbWV0ZXJzIG9mIGN1YmljLWJlemllciBhbmltYXRpb24gZnVuY3Rpb24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDFcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHJldHVybiBgY3ViaWMtYmV6aWVyKCR7dmFsWzBdfSwke3ZhbFsxXX0sJHt2YWxbMl19LCR7dmFsWzNdfSlgO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuaW1hdGlvbiBpdGVyYXRpb24gY291bnQgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyB0aW1lIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBBbmltYXRpb24gaXRlcmF0aW9uIGNvdW50IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25Ub0Nzc1N0cmluZyggdmFsOiBBbmltYXRpb25UaW1pbmdGdW5jdGlvblN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodmFsLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWxbMF0gPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZUFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uVG9Dc3NTdHJpbmcoIHZhbCBhcyBTaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvbik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCBhcyBTaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvbltdLCBzaW5nbGVBbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2ZhY2UtdmlzaWJpbGl0eSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZmFjZVZpc2liaWxpdHlNb2RlU3R5bGVUeXBlID0gXCJ2aXNpYmxlXCIgfCBcImhpZGRlblwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCBhdHRhY2htZW50ICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUJhY2tncm91bmRBdHRhY2htZW50ID0gXCJzY3JvbGxcIiB8IFwiZml4ZWRcIiB8IFwibG9jYWxcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtYXR0YWNobWVudCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kQXR0YWNobWVudFN0eWxlVHlwZSA9IFNpbmdsZUJhY2tncm91bmRBdHRhY2htZW50IHwgU2luZ2xlQmFja2dyb3VuZEF0dGFjaG1lbnRbXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBiYWNrZ3JvdW5kIGNsaXAgKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQmFja2dyb3VuZENsaXAgPSBcImJvcmRlci1ib3hcIiB8IFwicGFkZGluZy1ib3hcIiB8IFwiY29udGVudC1ib3hcIiB8IFwidGV4dFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1jbGlwIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJhY2tncm91bmRDbGlwU3R5bGVUeXBlID0gU2luZ2xlQmFja2dyb3VuZENsaXAgfCBTaW5nbGVCYWNrZ3JvdW5kQ2xpcFtdO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJhY2tncm91bmQgb3JpZ2luICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUJhY2tncm91bmRPcmlnaW4gPSBcImJvcmRlci1ib3hcIiB8IFwicGFkZGluZy1ib3hcIiB8IFwiY29udGVudC1ib3hcIiB8IFwidGV4dFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1vcmlnaW4gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZE9yaWdpblN0eWxlVHlwZSA9IFNpbmdsZUJhY2tncm91bmRPcmlnaW4gfCBTaW5nbGVCYWNrZ3JvdW5kT3JpZ2luW107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgYmFja2dyb3VuZCByZXBlYXQgKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQmFja2dyb3VuZFJlcGVhdCA9IFwicmVwZWF0LXhcIiB8IFwicmVwZWF0LXlcIiB8IFwicmVwZWF0XCIgfCBcInNwYWNlXCIgfCBcInJvdW5kXCIgfCBcIm5vLXJlcGVhdFwiIHxcclxuICAgICAgICAgICAgICAgIFwicmVwZWF0IHJlcGVhdFwiIHwgXCJyZXBlYXQgc3BhY2VcIiB8IFwicmVwZWF0IHJvdW5kXCIgfCBcInJlcGVhdCBuby1yZXBlYXRcIiB8XHJcbiAgICAgICAgICAgICAgICBcInNwYWNlIHJlcGVhdFwiIHwgXCJzcGFjZSBzcGFjZVwiIHwgXCJzcGFjZSByb3VuZFwiIHwgXCJzcGFjZSBuby1yZXBlYXRcIiB8XHJcbiAgICAgICAgICAgICAgICBcInJvdW5kIHJlcGVhdFwiIHwgXCJyb3VuZCBzcGFjZVwiIHwgXCJyb3VuZCByb3VuZFwiIHwgXCJyb3VuZCBuby1yZXBlYXRcIiB8XHJcbiAgICAgICAgICAgICAgICBcIm5vLXJlcGVhdCByZXBlYXRcIiB8IFwibm8tcmVwZWF0IHNwYWNlXCIgfCBcIm5vLXJlcGVhdCByb3VuZFwiIHwgXCJuby1yZXBlYXQgbm8tcmVwZWF0XCIgfFxyXG4gICAgICAgICAgICAgICAgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgYmFja2dyb3VuZC1yZXBlYXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFja2dyb3VuZFJlcGVhdFN0eWxlVHlwZSA9IFNpbmdsZUJhY2tncm91bmRSZXBlYXQgfCBTaW5nbGVCYWNrZ3JvdW5kUmVwZWF0W107XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBiYWNrZ3JvdW5kIHNpemUgKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCIgfCBcImNvbnRhaW5cIiB8IHV0aWxzLlNpbmdsZVNpemVfU3R5bGVUeXBlO1xyXG5cclxuLyoqIFR5cGUgZm9yIGJhY2tncm91bmQtc2l6ZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCYWNrZ3JvdW5kU2l6ZVN0eWxlVHlwZSA9IFNpbmdsZUJhY2tncm91bmRTaXplIHwgU2luZ2xlQmFja2dyb3VuZFNpemVbXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGEgc2luZ2xlIGNvcm5lciByYWRpdXMgKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlQ29ybmVyUmFkaXVzX1N0eWxlVHlwZSA9IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICAgW3V0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUsIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGVdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvcm5lciByYWRpdXMgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQW5pbWF0aW9uIGRlbGF5IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlQ29ybmVyUmFkaXVzVG9Dc3NTdHJpbmcoIHZhbDogU2luZ2xlQ29ybmVyUmFkaXVzX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiB1dGlscy5hcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBIZWxwZXIgdHlwZSB0aGF0IGRlZmluZXMgYW4gYXJyYXkgb2Ygb25lIHRvIDQgZWxlbWVudHMgZWFjaCBkZWZpbmluZyBhIGxlbmd0aC9wZXJjZW50YWdlICovXHJcbmV4cG9ydCB0eXBlIE11bHRpQ29ybmVyUmFkaXVzX1N0eWxlVHlwZSA9XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlP1xyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItcmFkaXVzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclJhZGl1c1N0eWxlVHlwZSA9IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUgfCBNdWx0aUNvcm5lclJhZGl1c19TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICAgW011bHRpQ29ybmVyUmFkaXVzX1N0eWxlVHlwZSwgTXVsdGlDb3JuZXJSYWRpdXNfU3R5bGVUeXBlXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXIgcmFkaXVzIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEJvcmRlciByYWRpdXMgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXNUb0Nzc1N0cmluZyggdmFsOiBCb3JkZXJSYWRpdXNTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggdmFsWzBdKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHR3byBNdWx0aUNvcm5lclJhZGl1cyB2YWx1ZXNcclxuICAgICAgICAgICAgbGV0IHMgPSB1dGlscy5hcnJheVRvQ3NzU3RyaW5nKCB2YWxbMF0sIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIHMgKz0gXCIgLyBcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHMgKyB1dGlscy5hcnJheVRvQ3NzU3RyaW5nKCB2YWxbMV0gYXMgTXVsdGlDb3JuZXJSYWRpdXNfU3R5bGVUeXBlLCB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBzaW5nbGUgTXVsdGlDb3JuZXJSYWRpdXMgdmFsdWVcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCBhcyBNdWx0aUNvcm5lclJhZGl1c19TdHlsZVR5cGUsIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYmFzZWxpbmUtc2hpZnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQmFzZWxpbmVTaGlmdFN0eWxlVHlwZSA9IFwic3ViXCIgfCBcInN1cGVyXCIgfCB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3Igc2luZ2xlIGJvcmRlciBzaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiaGlkZGVuXCIgfCBcImRvdHRlZFwiIHwgXCJkYXNoZWRcIiB8IFwic29saWRcIiB8IFwiZG91YmxlXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJncm9vdmVcIiB8IFwicmlkZ2VcIiB8IFwiaW5zZXRcIiB8IFwib3V0c2V0XCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1zdHlsZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJTdHlsZVN0eWxlVHlwZSA9IEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBCb3JkZXJTaWRlU3R5bGVfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgICAgICBCb3JkZXJTaWRlU3R5bGVfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHN0eWxlIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEJvcmRlciBzdHlsZSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlclN0eWxlVG9Dc3NTdHJpbmcoIHZhbDogQm9yZGVyU3R5bGVTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gdXRpbHMuc3RyaW5nQXJyYXlUb0Nzc1N0cmluZyggdmFsLCBcIiBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyIHNpZGUgd2lkdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyU2lkZVdpZHRoX1N0eWxlVHlwZSA9IFwidGhpblwiIHwgXCJtZWRpdW1cIiB8IFwidGhpY2tcIiB8IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItd2lkdGggc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVyV2lkdGhTdHlsZVR5cGUgPSBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlIHxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIEJvcmRlclNpZGVXaWR0aF9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgQm9yZGVyU2lkZVdpZHRoX1N0eWxlVHlwZT8sXHJcbiAgICAgICAgICAgICAgICAgICAgQm9yZGVyU2lkZVdpZHRoX1N0eWxlVHlwZT8sXHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciB3aWR0aCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBCb3JkZXIgd2lkdGggdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJXaWR0aFRvQ3NzU3RyaW5nKCB2YWw6IEJvcmRlcldpZHRoU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1jb2xsYXBzZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJDb2xhcHNlU3R5bGVUeXBlID0gXCJjb2xsYXBzZVwiIHwgXCJzZXBhcmF0ZVwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBib3JkZXItc3BhY2luZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJTcGFjaW5nU3R5bGVUeXBlID0gdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlIHxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGJvcmRlciBzcGFjaW5nIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEJvcmRlciBzcGFjaW5nIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYm9yZGVyU3BhY2luZ1RvQ3NzU3RyaW5nKCB2YWw6IEJvcmRlclNwYWNpbmdTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZywgXCIgXCIpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWNvbG9yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlckNvbG9yU3R5bGVUeXBlID0gQ29sb3JfU3R5bGVUeXBlIHxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBDb2xvcl9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3JfU3R5bGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIENvbG9yX1N0eWxlVHlwZT8sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3JfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIGNvbG9yIHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEJvcmRlciBjb2xvciB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJvcmRlckNvbG9yVG9Dc3NTdHJpbmcoIHZhbDogQm9yZGVyQ29sb3JTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsIGFzIENvbG9yX1N0eWxlVHlwZVtdLCBjb2xvclRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlciBzaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEJvcmRlclNpZGVfU3R5bGVUeXBlID0gdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSB8ICBCb3JkZXJTaWRlU3R5bGVfU3R5bGVUeXBlIHwgQ29sb3JfU3R5bGVUeXBlIHxcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZT8sXHJcbiAgICAgICAgICAgICAgICAgICAgQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZT8sXHJcbiAgICAgICAgICAgICAgICAgICAgQ29sb3JfU3R5bGVUeXBlPyxcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9yZGVyIHNpZGUgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQm9yZGVyIHNpZGUgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJTaWRlVG9Dc3NTdHJpbmcoIHZhbDogQm9yZGVyU2lkZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBzID0gXCJcIjtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbFswXSA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbFswXTtcclxuICAgICAgICBlbHNlIGlmICh2YWxbMF0gaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICAgICAgcmV0dXJuIHZhbFswXS50b1N0cmluZygpO1xyXG4gICAgICAgIGVsc2UgaWYgKHZhbFswXSAhPSBudWxsKVxyXG4gICAgICAgICAgICBzICs9IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWxbMF0pICsgXCIgXCI7XHJcblxyXG4gICAgICAgIGlmICh2YWxbMV0pXHJcbiAgICAgICAgICAgIHMgKz0gdmFsWzFdICsgXCIgXCI7XHJcblxyXG4gICAgICAgIGlmICh2YWxbMl0pXHJcbiAgICAgICAgICAgIHMgKz0gY29sb3JUb0Nzc1N0cmluZyggdmFsWzJdKSArIFwiIFwiO1xyXG5cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gY29sb3JUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm9yZGVyLWltYWdlLW91dHNldCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZU91dHNldFN0eWxlVHlwZSA9IHN0cmluZyB8IG51bWJlciB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlIHxcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyB8IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAoc3RyaW5nIHwgbnVtYmVyKT8sXHJcbiAgICAgICAgICAgICAgICAgICAgKHN0cmluZyB8IG51bWJlcik/LFxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBib3JkZXItaW1hZ2Utb3V0c2V0IHN0eWxlIHZhbHVlIHRvIHRoZSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEJvcmRlciBpbWFnZSBvdXRzZXQgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJJbWFnZU91dHNldFRvQ3NzU3RyaW5nKCB2YWw6IEJvcmRlckltYWdlT3V0c2V0U3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdXRpbHMuYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBib3JkZXJJbWFnZU91dHNldFRvQ3NzU3RyaW5nLCBcIiBcIik7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS1yZXBlYXQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQm9yZGVySW1hZ2VSZXBlYXRLZXl3b3JkID0gXCJzdHJldGNoXCIgfCBcInJlcGVhdFwiIHwgXCJyb3VuZFwiIHwgXCJzcGFjZVwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcbmV4cG9ydCB0eXBlIEJvcmRlckltYWdlUmVwZWF0U3R5bGVUeXBlID0gQm9yZGVySW1hZ2VSZXBlYXRLZXl3b3JkIHwgW0JvcmRlckltYWdlUmVwZWF0S2V5d29yZCwgQm9yZGVySW1hZ2VSZXBlYXRLZXl3b3JkXTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJvcmRlci1pbWFnZS13aWR0aCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3JkZXJJbWFnZVdpZHRoU3R5bGVUeXBlID0gdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU/LFxyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU/LFxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgZm9yIHNpbmdsZSBib3ggc2hhZG93LiBCb3ggc2hhZG93IGNhbiBiZSBwcmVzZW50ZWQgYnkgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIFwibm9uZVwiIC0gbm8gc2hhZG93LlxyXG4gKiAgIC0gYm9vbGVhbiAtIGZhbHNlIC0gbm8gc2hhZG93OyB0cnVlIC0gZGVmYXVsdCBzaGFkb3c6IFwiMCAwIDFlbSAxZW0gI2MwYzBjMFwiLlxyXG4gKiAgIC0gbnVtYmVyIC0gXCIwIDAgTmVtIE5lbSAjYzBjMGMwXCI7IHRoYXQgaXMsIHRoZSBudW1iZXIgZGVmaW5lcyB0aGUgdmFsdWUgb2YgYmx1ciBhbmQgc3ByZWFkXHJcbiAqICAgICByYWRpaSBpbiBcImVtXCIgdW5pdHMuXHJcbiAqICAgLSBzdHJpbmcgLSBsaXRlcmFsIENTUyBib3ggc2hhZG93IHN0cmluZy5cclxuICogICAtIG9iamVjdCAtIGZpZWxkcyBzcGVjaWZ5IGJveCBzaGFkb3cgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBTaW5nbGVCb3hTaGFkb3cgPSBcIm5vbmVcIiB8IGJvb2xlYW4gfCBudW1iZXIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZSB8XHJcbntcclxuICAgIC8qKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgc2hhZG93IGlzIGluc2lkZSB0aGUgYm94ICh0cnVlKSBvciBvdXRzaWRlIGl0IChmYWxzZSkuIERlZmF1bHQgaXMgZmFsc2UuICovXHJcbiAgICBpbnNldD86IGJvb2xlYW47XHJcbiAgICAvKiogSG9yaXpvbnRhbCBvZmZzZXQgd2hlcmUgdGhlIHNoYWRvdyBzaG91bGQgYmVnaW4uIERlZmF1bHQgaXMgMC4gKi9cclxuXHR4PzogdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuICAgIC8qKiBWZXJ0aWNhbCBvZmZzZXQgd2hlcmUgdGhlIHNoYWRvdyBzaG91bGQgYmVnaW4uIERlZmF1bHQgaXMgMC4gKi9cclxuICAgIHk/OiB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG4gICAgLyoqIEJsdXIgcmFkaXVzLiBEZWZhdWx0IGlzIDFlbS4gKi9cclxuICAgIGJsdXI/OiB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG4gICAgLyoqIFNwcmVhZCByYWRpdXMuIERlZmF1bHQgaXMgMWVtLiAqL1xyXG4gICAgc3ByZWFkPzogdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuICAgIC8qKiBTaGFkb3cgY29sb3IuIERlZmF1bHQgaXMgMHhjMGMwYzAuICovXHJcblx0Y29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbn07XHJcblxyXG4vKiogVHlwZSBmb3IgYm94IHNoYWRvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3hTaGFkb3dTdHlsZVR5cGUgPSBTaW5nbGVCb3hTaGFkb3cgfCBTaW5nbGVCb3hTaGFkb3dbXTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzaW5nbGUgYm94IHNoYWRvdyBzdHlsZSByZXByZXNlbnRlZCBhcyBhbiBvYmplY3Qgd2l0aCBmaWVsZHMgY29ycmVzcG9uZGluZyB0byBib3ggc2hhZG93XHJcbiAqIHByb3BlcnRpZXMgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqIEBwYXJhbSB2YWwgU2luZ2xlIGJveCBzaGFkb3cgb2JqZWN0LiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVCb3hTaGFkb3dUb0Nzc1N0cmluZyggdmFsOiBTaW5nbGVCb3hTaGFkb3cpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCF2YWwpXHJcbiAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJib29sZWFuXCIpXHJcbiAgICAgICAgcmV0dXJuIFwiMCAwIDFlbSAxZW0gI2MwYzBjMFwiO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICByZXR1cm4gYDAgMCAke3ZhbH1lbSAke3ZhbH0xZW0gI2MwYzBjMGA7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLm9iamVjdFRvQ3NzU3RyaW5nKCB2YWwsIGZhbHNlLFxyXG4gICAgICAgICAgICBbXCJpbnNldFwiLCB2ID0+IHYgPT09IHRydWUgPyBcImluc2V0XCIgOiBcIlwiXSxcclxuICAgICAgICAgICAgW1wieFwiLCB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFtcInlcIiwgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJibHVyXCIsIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wic3ByZWFkXCIsIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nXSxcclxuICAgICAgICAgICAgW1wiY29sb3JcIiwgY29sb3JUb0Nzc1N0cmluZ11cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm94IHNoYWRvdyBzdHlsZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIG9iaiBCb3ggc2hhZG93IHZhbHVlLiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBib3hTaGFkb3dUb0Nzc1N0cmluZyggdmFsOiBCb3hTaGFkb3dTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoIHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgc2luZ2xlQm94U2hhZG93VG9Dc3NTdHJpbmcpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBzaW5nbGVCb3hTaGFkb3dUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYm94LXNpemluZyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCb3hTaXppbmdTdHlsZVR5cGUgPSBcImNvbnRlbnQtYm94XCIgfCBcImJvcmRlci1ib3hcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgYnJlYWstYWZ0ZXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQnJlYWtBZnRlclN0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJhdm9pZFwiIHwgXCJhbHdheXNcIiB8IFwiYWxsXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwicGFnZVwiIHxcclxuICAgICAgICAgICAgICAgIFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJyZWN0b1wiIHwgXCJ2ZXJzb1wiIHwgXCJhdm9pZC1jb2x1bW5cIiB8IFwiY29sdW1uXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJhdm9pZC1yZWdpb25cIiB8IFwicmVnaW9uXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJyZWFrLWJlZm9yZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCcmVha0JlZm9yZVN0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJhdm9pZFwiIHwgXCJhbHdheXNcIiB8IFwiYWxsXCIgfCBcImF2b2lkLXBhZ2VcIiB8IFwicGFnZVwiIHxcclxuICAgICAgICAgICAgICAgIFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJyZWN0b1wiIHwgXCJ2ZXJzb1wiIHwgXCJhdm9pZC1jb2x1bW5cIiB8IFwiY29sdW1uXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJhdm9pZC1yZWdpb25cIiB8IFwicmVnaW9uXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGJyZWFrLWluc2lkZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBCcmVha0luc2lkZVN0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJhdm9pZFwiIHwgXCJhdm9pZC1wYWdlXCIgfCBcImF2b2lkLWNvbHVtblwiIHwgXCJhdm9pZC1yZWdpb25cIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2FwdGlvbi1zaWRlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENhcHRpb25TaWRlU3R5bGVUeXBlID0gXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBcImJsb2NrLXN0YXJ0XCIgfCBcImJsb2NrLWVuZFwiIHwgXCJpbmxpbmUtc3RhcnRcIiB8IFwiaW5saW5lLWVuZFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjYXJldC1jb2xvciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDYXJldENvbG9yU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBDb2xvcl9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjbGVhciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBDbGVhclN0eWxlVHlwZSA9IFwibm9uZVwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImJvdGhcIiB8IFwiaW5saW5lLXN0YXJ0XCIgfCBcImlubGluZS1lbmRcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY2xlYXIgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ2xpcFN0eWxlVHlwZSA9IFwiYXV0b1wiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGUgfFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlLCBcclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2xpcCBzdHlsZSB2YWx1ZSB0byBpdHMgQ1NTIHN0cmluZyB2YWx1ZS5cclxuICogQHBhcmFtIHZhbCBDbGlwIHZhbHVlLiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGlwVG9Dc3NTdHJpbmcoIHZhbDogQ2xpcFN0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBgcmVjdCgke3V0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsIFwiIFwiKX1gO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJzUkdCXCIgfCBcImxpbmVhclJHQlwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBjb2x1bW4tY291bnQgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uQ291bnRTdHlsZVR5cGUgPSBcImF1dG9cIiB8IG51bWJlciB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY29sdW1uLWZpbGwgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uRmlsbFN0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJiYWxhbmNlXCIgfCBcImJhbGFuY2UtYWxsXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIHNpbmdsZSBnYXAgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlR2FwX1N0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgY29sdW1uIHJ1bGUuIENvbHVtbiBydWxlIGNhbiBiZSBwcmVzZW50ZWQgYnkgdGhlIGZvbGxvd2luZyB0eXBlczpcclxuICogICAtIHN0cmluZyAtIGxpdGVyYWwgQ1NTIGJveCBzaGFkb3cgc3RyaW5nLlxyXG4gKiAgIC0gb2JqZWN0IC0gZmllbGRzIHNwZWNpZnkgY29sdW1uIHJ1bGUgcGFydHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBDb2x1bW5SdWxlU3R5bGVUeXBlID0gc3RyaW5nIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGUgfFxyXG4gICAge1xyXG4gICAgICAgIC8qKiBDb2x1bW4gcnVsZSB3aWR0aC4gKi9cclxuICAgICAgICB3aWR0aD86IEJvcmRlcldpZHRoU3R5bGVUeXBlO1xyXG4gICAgICAgIC8qKiBDb2x1bW4gcnVsZSBzdHlsZS4gKi9cclxuICAgICAgICBzdHlsZT86IEJvcmRlclN0eWxlU3R5bGVUeXBlO1xyXG4gICAgICAgIC8qKiBDb2x1bW4gcnVsZSBjb2xvci4gKi9cclxuICAgICAgICBjb2xvcj86IFNpbmdsZUdhcF9TdHlsZVR5cGU7XHJcbiAgICB9O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbiBydWxlIHN0eWxlIHJlcHJlc2VudGVkIGFzIGFuIG9iamVjdCB3aXRoIGZpZWxkcyBjb3JyZXNwb25kaW5nIHRvIGNvbHVtbiBydWxlXHJcbiAqIHByb3BlcnRpZXMgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqIEBwYXJhbSB2YWwgQ29sdW1uIHJ1bGUgc3R5bGUgdmFsdWUuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtblJ1bGVUb0Nzc1N0cmluZyggdmFsOiBDb2x1bW5SdWxlU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghdmFsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5vYmplY3RUb0Nzc1N0cmluZyggdmFsLCBmYWxzZSxcclxuICAgICAgICAgICAgW1wid2lkdGhcIiwgYm9yZGVyV2lkdGhUb0Nzc1N0cmluZ10sXHJcbiAgICAgICAgICAgIFtcInN0eWxlXCIsIGJvcmRlclN0eWxlVG9Dc3NTdHJpbmddLFxyXG4gICAgICAgICAgICBbXCJjb2xvclwiLCBjb2xvclRvQ3NzU3RyaW5nXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbi1zcGFuIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIENvbHVtblNwYW5TdHlsZVR5cGUgPSBcIm5vbmVcIiB8IFwiYWxsXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGNvbHVtbnMgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgQ29sdW1uc1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgbnVtYmVyIHwgW1wiYXV0b1wiIHwgbnVtYmVyLCB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlXSB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNvbHVtbnMgc3R5bGUgdG8gaXRzIENTUyBzdHJpbmcgdmFsdWUuXHJcbiAqIEBwYXJhbSB2YWwgQ29sdW1ucyBzdHlsZSB2YWx1ZS4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sdW1uc1RvQ3NzU3RyaW5nKCB2YWw6IENvbHVtbnNTdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKCF2YWwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gdmFsWzBdLnRvU3RyaW5nKCkgKyBcIiBcIiArIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWxbMV0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbG9hdCAoY3NzRmxvYXQpIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsb2F0U3R5bGVUeXBlID0gXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcIm5vbmVcIiB8IFwiaW5saW5lLXN0YXJ0XCIgfCBcImlubGluZS1lbmRcIiB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKiogVHlwZSBmb3IgY3Vyc29yIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEN1cnNvclN0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJkZWZhdWx0XCIgfCBcIm5vbmVcIiB8IFwiY29udGV4dC1tZW51XCIgfCBcImhlbHBcIiB8IFwicG9pbnRlclwiIHwgXCJwcm9ncmVzc1wiIHxcclxuICAgICAgICAgICAgICAgIFwid2FpdFwiIHwgXCJjZWxsXCIgfCBcImNyb3NzaGFpclwiIHwgXCJ0ZXh0XCIgfCBcInZlcnRpY2FsLXRleHRcIiB8IFwiYWxpYXNcIiB8IFwiY29weVwiIHwgXCJtb3ZlXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJuby1kcm9wXCIgfCBcIm5vdC1hbGxvd2VkXCIgfCBcImUtcmVzaXplXCIgfCBcIm4tcmVzaXplXCIgfCBcIm5lLXJlc2l6ZVwiIHwgXCJudy1yZXNpemVcIiB8XHJcbiAgICAgICAgICAgICAgICBcInMtcmVzaXplXCIgfCBcInNlLXJlc2l6ZVwiIHwgXCJzdy1yZXNpemVcIiB8IFwidy1yZXNpemVcIiB8IFwiZXctcmVzaXplXCIgfCBcIm5zLXJlc2l6ZVwiIHxcclxuICAgICAgICAgICAgICAgIFwibmVzdy1yZXNpemVcIiB8IFwibndzZS1yZXNpemVcIiB8IFwiY29sLXJlc2l6ZVwiIHwgXCJyb3ctcmVzaXplXCIgfCBcImFsbC1zY3JvbGxcIiB8IFwiem9vbS1pblwiIHxcclxuICAgICAgICAgICAgICAgIFwiem9vbS1vdXRcIiB8IFwiZ3JhYlwiIHwgXCJncmFiYmluZ1wiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBkaXJlY3Rpb24gc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRGlyZWN0aW9uU3R5bGVUeXBlID0gXCJsdHJcIiB8IFwicnRsXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGRpc3BsYXkgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRGlzcGxheVN0eWxlVHlwZSA9IFwiYmxvY2tcIiB8IFwiaW5saW5lXCIgfCBcInJ1bi1pblwiIHwgXCJjb250ZW50c1wiIHwgXCJub25lXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJpbmxpbmUtYmxvY2tcIiB8IFwiaW5saW5lLWxpc3QtaXRlbVwiIHwgXCJpbmxpbmUtdGFibGVcIiB8IFwiaW5saW5lLWZsZXhcIiB8IFwiaW5saW5lLWdyaWRcIiB8XHJcbiAgICAgICAgICAgICAgICBcImZsb3dcIiB8IFwiZmxvdy1yb290XCIgfCBcInRhYmxlXCIgfCBcImZsZXhcIiB8IFwiZ3JpZFwiIHwgXCJydWJ5XCIgfFxyXG4gICAgICAgICAgICAgICAgXCJ0YWJsZS1yb3ctZ3JvdXBcIiB8IFwidGFibGUtaGVhZGVyLWdyb3VwXCIgfCBcInRhYmxlLWZvb3Rlci1ncm91cFwiIHwgXCJ0YWJsZS1yb3dcIiB8IFwidGFibGUtY2VsbFwiIHxcclxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlLWNvbHVtbi1ncm91cFwiIHwgXCJ0YWJsZS1jb2x1bW5cIiB8IFwidGFibGUtY2FwdGlvblwiIHwgXCJydWJ5LWJhc2VcIiB8IFwicnVieS10ZXh0XCIgfFxyXG4gICAgICAgICAgICAgICAgICAgIFwicnVieS1iYXNlLWNvbnRhaW5lclwiIHwgXCJydWJ5LXRleHQtY29udGFpbmVyXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJsaXN0LWl0ZW1cIiB8IFwibGlzdC1pdGVtIGJsb2NrXCIgfCBcImxpc3QtaXRlbSBpbmxpbmVcIiB8IFwibGlzdC1pdGVtIGZsb3dcIiB8IFwibGlzdC1pdGVtIGZsb3ctcm9vdFwiIHxcclxuICAgICAgICAgICAgICAgICAgICBcImxpc3QtaXRlbSBibG9jayBmbG93XCIgfCBcImxpc3QtaXRlbSBibG9jayBmbG93LXJvb3RcIiB8IFwiZmxvdyBsaXN0LWl0ZW0gYmxvY2tcIiB8XHJcbiAgICAgICAgICAgICAgICB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbi8qKiBUeXBlIGZvciBkb21pbmFudC1iYXNlbGluZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBEb21pbmFudEJhc2VsaW5lU3R5bGVUeXBlID0gXCJhdXRvXCIgfCBcInRleHQtYm90dG9tXCIgfCBcImFscGhhYmV0aWNcIiB8IFwiaWRlb2dyYXBoaWNcIiB8IFwibWlkZGxlXCIgfFxyXG4gICAgICAgICAgICAgICAgXCJjZW50cmFsXCIgfCBcIm1hdGhlbWF0aWNhbFwiIHwgXCJoYW5naW5nXCIgfCBcInRleHQtdG9wXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGVtcHR5LWNlbGxzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEVtcHR5Q2VsbHNTdHlsZVR5cGUgPSBcInNob3dcIiB8IFwiaGlkZVwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmaWxsLXJ1bGUgc3R5bGUgcHJvcGVydHkgKi9cclxuZXhwb3J0IHR5cGUgRmlsbFJ1bGVTdHlsZVR5cGUgPSBcIm5vbnplcm9cIiB8IFwiZXZlbm9kZFwiIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LWJhc2lzIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhCYXNpc1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgXCJjb250ZW50XCIgfCB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZsZXhTdHlsZVR5cGUgPSBGbGV4QmFzaXNTdHlsZVR5cGUgfCBbbnVtYmVyLG51bWJlcl0gfCBbbnVtYmVyLG51bWJlcixGbGV4QmFzaXNTdHlsZVR5cGVdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGZsZXggc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgRmxleCB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZsZXhUb0Nzc1N0cmluZyggdmFsOiBGbGV4U3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKHZhbCBpbnN0YW5jZW9mIHV0aWxzLlN0cmluZ1Byb3h5KVxyXG4gICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgIHtcclxuICAgICAgICBpZiAodmFsLmxlbmd0aCA9PT0gMilcclxuICAgICAgICAgICAgcmV0dXJuIHZhbC5qb2luKCBcIiBcIik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IHMgPSB2YWxbMF0gKyBcIiBcIiArIHZhbFsxXSArIFwiIFwiO1xyXG4gICAgICAgICAgICBsZXQgdiA9IHZhbFsyXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcyArPSB2O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgcyArPSB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyggdik7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmbGV4LWRpcmVjdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4RGlyZWN0aW9uU3R5bGVUeXBlID0gXCJyb3dcIiB8IFwicm93LXJldmVyc2VcIiB8IFwiY29sdW1uXCIgfCBcImNvbHVtbi1yZXZlcnNlXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtd3JhcCBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4V3JhcFN0eWxlVHlwZSA9IFwibm93cmFwXCIgfCBcIndyYXBcIiB8IFwid3JhcC1yZXZlcnNlXCIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZsZXgtZmxvdyBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBGbGV4Rmxvd1N0eWxlVHlwZSA9IEZsZXhEaXJlY3Rpb25TdHlsZVR5cGUgfCBGbGV4V3JhcFN0eWxlVHlwZSB8XHJcbiAgICAgICAgICAgICAgICBbRmxleERpcmVjdGlvblN0eWxlVHlwZSxGbGV4V3JhcFN0eWxlVHlwZV0gfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBmbGV4LWZsb3cgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgRmxleC1mbG93IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmxleEZsb3dUb0Nzc1N0cmluZyggdmFsOiBGbGV4Rmxvd1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiB1dGlscy5zdHJpbmdBcnJheVRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBmb250LXN0eWxlIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRTdHlsZVN0eWxlVHlwZSA9IFwibm9ybWFsXCIgfCBcIml0YWxpY1wiIHwgXCJvYmxpcXVlXCIgfCB1dGlscy5TaW5nbGVBbmdsZV9TdHlsZVR5cGU7XHJcblxyXG4vKipcclxuICogQ29udmVydHMgZm9udC1zdHlsZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBGb250LXN0eWxlIHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9udFN0eWxlVG9Dc3NTdHJpbmcoIHZhbDogRm9udFN0eWxlU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiB1dGlscy5TdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLnNpbmdsZUFuZ2xlVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZm9yIGZvbnQtd2VpZ2h0IHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIEZvbnRXZWlnaHRTdHlsZVR5cGUgPSBcIm5vcm1hbFwiIHwgXCJib2xkXCIgfCBcImJvbGRlclwiIHwgXCJsaWdodGVyXCIgfFxyXG4gICAgICAgICAgICAgICAgMTAwIHwgMjAwIHwgMzAwIHwgNDAwIHwgNTAwIHwgNjAwIHwgNzAwIHwgODAwIHwgOTAwIHwgdXRpbHMuQmFzZV9TdHlsZVR5cGU7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFN0eWxlVHlwZSA9IHN0cmluZyB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHJlcHJlc2VudGluZyBhIGNvbGxlY3Rpb24gb2Ygc3R5bGUgcHJvcGVydGllcyBhbmQgdGhlaXIgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdHlsZXNldFxyXG57XHJcbiAgICBhbGlnbkNvbnRlbnQ/OiBBbGlnbkNvbnRlbnRTdHlsZVR5cGU7XHJcbiAgICBhbGlnbkl0ZW1zPzogQWxpZ25JdGVtc1N0eWxlVHlwZTtcclxuICAgIGFsaWduU2VsZj86IEFsaWduU2VsZlN0eWxlVHlwZTtcclxuICAgIGFsaWdubWVudEJhc2VsaW5lPzogQWxpZ25tZW50QmFzZWxpbmVTdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb24/OiBBbmltYXRpb25TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25EZWxheT86IHV0aWxzLk11bHRpVGltZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25EaXJlY3Rpb24/OiBBbmltYXRpb25EaXJlY3Rpb25TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25EdXJhdGlvbj86IHV0aWxzLk11bHRpVGltZV9TdHlsZVR5cGU7XHJcbiAgICBhbmltYXRpb25GaWxsTW9kZT86IEFuaW1hdGlvbkZpbGxNb2RlU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ/OiBBbmltYXRpb25JdGVyYXRpb25Db3VudFN0eWxlVHlwZTtcclxuICAgIGFuaW1hdGlvbk5hbWU/OiBBbmltYXRpb25OYW1lU3R5bGVUeXBlO1xyXG4gICAgYW5pbWF0aW9uUGxheVN0YXRlPzogQW5pbWF0aW9uUGxheVN0YXRlU3R5bGVUeXBlO1xyXG5cdGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uPzogQW5pbWF0aW9uVGltaW5nRnVuY3Rpb25TdHlsZVR5cGU7XHJcblx0XHJcbiAgICBiYWNrZmFjZVZpc2liaWxpdHk/OiBCYWNrZmFjZVZpc2liaWxpdHlNb2RlU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZD86IFN0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50PzogQmFja2dyb3VuZEF0dGFjaG1lbnRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kQ2xpcD86IEJhY2tncm91bmRDbGlwU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZENvbG9yPzogQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZEltYWdlPzogU3R5bGVUeXBlO1xyXG4gICAgYmFja2dyb3VuZE9yaWdpbj86IEJhY2tncm91bmRPcmlnaW5TdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb24/OiB1dGlscy5NdWx0aVBvc2l0aW9uX1N0eWxlVHlwZTtcclxuICAgIGJhY2tncm91bmRQb3NpdGlvblg/OiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZPzogc3RyaW5nO1xyXG4gICAgYmFja2dyb3VuZFJlcGVhdD86IEJhY2tncm91bmRSZXBlYXRTdHlsZVR5cGU7XHJcbiAgICBiYWNrZ3JvdW5kU2l6ZT86IEJhY2tncm91bmRTaXplU3R5bGVUeXBlO1xyXG4gICAgYmFzZWxpbmVTaGlmdD86IEJhc2VsaW5lU2hpZnRTdHlsZVR5cGU7XHJcbiAgICBib3JkZXI/OiBCb3JkZXJTaWRlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJvdHRvbT86IEJvcmRlclNpZGVfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyQm90dG9tQ29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPzogU2luZ2xlQ29ybmVyUmFkaXVzX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogU2luZ2xlQ29ybmVyUmFkaXVzX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJvdHRvbVN0eWxlPzogQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckJvdHRvbVdpZHRoPzogQm9yZGVyU2lkZVdpZHRoX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlckNvbGxhcHNlPzogQm9yZGVyQ29sYXBzZVN0eWxlVHlwZTtcclxuICAgIGJvcmRlckNvbG9yPzogQm9yZGVyQ29sb3JTdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZT86IHN0cmluZztcclxuICAgIGJvcmRlckltYWdlT3V0c2V0PzogQm9yZGVySW1hZ2VPdXRzZXRTdHlsZVR5cGU7XHJcbiAgICBib3JkZXJJbWFnZVJlcGVhdD86IEJvcmRlckltYWdlUmVwZWF0U3R5bGVUeXBlO1xyXG4gICAgYm9yZGVySW1hZ2VTbGljZT86IHN0cmluZztcclxuICAgIGJvcmRlckltYWdlU291cmNlPzogc3RyaW5nO1xyXG4gICAgYm9yZGVySW1hZ2VXaWR0aD86IEJvcmRlckltYWdlV2lkdGhTdHlsZVR5cGU7XHJcbiAgICBib3JkZXJMZWZ0PzogQm9yZGVyU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJMZWZ0Q29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJMZWZ0U3R5bGU/OiBCb3JkZXJTaWRlU3R5bGVfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyTGVmdFdpZHRoPzogQm9yZGVyU2lkZVdpZHRoX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclJhZGl1cz86IEJvcmRlclJhZGl1c1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclJpZ2h0PzogQm9yZGVyU2lkZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJSaWdodENvbG9yPzogQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyUmlnaHRTdHlsZT86IEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJSaWdodFdpZHRoPzogQm9yZGVyU2lkZVdpZHRoX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclNwYWNpbmc/OiBCb3JkZXJTcGFjaW5nU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyU3R5bGU/OiBCb3JkZXJTdHlsZVN0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcD86IEJvcmRlclNpZGVfU3R5bGVUeXBlO1xyXG4gICAgYm9yZGVyVG9wQ29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzPzogU2luZ2xlQ29ybmVyUmFkaXVzX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzPzogU2luZ2xlQ29ybmVyUmFkaXVzX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcFN0eWxlPzogQm9yZGVyU2lkZVN0eWxlX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlclRvcFdpZHRoPzogQm9yZGVyU2lkZVdpZHRoX1N0eWxlVHlwZTtcclxuICAgIGJvcmRlcldpZHRoPzogQm9yZGVyV2lkdGhTdHlsZVR5cGU7XHJcbiAgICBib3R0b20/OiB1dGlscy5TaW5nbGVMZW5ndGhfU3R5bGVUeXBlO1xyXG4gICAgYm94U2hhZG93PzogQm94U2hhZG93U3R5bGVUeXBlO1xyXG4gICAgYm94U2l6aW5nPzogQm94U2l6aW5nU3R5bGVUeXBlO1xyXG4gICAgYnJlYWtBZnRlcj86IEJyZWFrQWZ0ZXJTdHlsZVR5cGU7XHJcbiAgICBicmVha0JlZm9yZT86IEJyZWFrQmVmb3JlU3R5bGVUeXBlO1xyXG5cdGJyZWFrSW5zaWRlPzogQnJlYWtJbnNpZGVTdHlsZVR5cGU7XHJcblx0XHJcbiAgICBjYXB0aW9uU2lkZT86IENhcHRpb25TaWRlU3R5bGVUeXBlO1xyXG4gICAgY2FyZXRDb2xvcj86IENhcmV0Q29sb3JTdHlsZVR5cGU7XHJcbiAgICBjbGVhcj86IENsZWFyU3R5bGVUeXBlO1xyXG4gICAgY2xpcD86IENsaXBTdHlsZVR5cGU7XHJcbiAgICBjbGlwUGF0aD86IHN0cmluZztcclxuICAgIGNsaXBSdWxlPzogc3RyaW5nO1xyXG4gICAgY29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzPzogQ29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc1N0eWxlVHlwZTtcclxuICAgIGNvbHVtbkNvdW50PzogQ29sdW1uQ291bnRTdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5GaWxsPzogQ29sdW1uRmlsbFN0eWxlVHlwZTtcclxuICAgIGNvbHVtbkdhcD86IFNpbmdsZUdhcF9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5SdWxlPzogQ29sdW1uUnVsZVN0eWxlVHlwZTtcclxuICAgIGNvbHVtblJ1bGVDb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGNvbHVtblJ1bGVTdHlsZT86IEJvcmRlclNpZGVTdHlsZV9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5SdWxlV2lkdGg/OiBCb3JkZXJTaWRlV2lkdGhfU3R5bGVUeXBlO1xyXG4gICAgY29sdW1uU3Bhbj86IENvbHVtblNwYW5TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5XaWR0aD86IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcbiAgICBjb2x1bW5zPzogQ29sdW1uc1N0eWxlVHlwZTtcclxuICAgIGNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICBjb3VudGVySW5jcmVtZW50PzogU3R5bGVUeXBlO1xyXG4gICAgY291bnRlclJlc2V0PzogU3R5bGVUeXBlO1xyXG4gICAgY3NzRmxvYXQ/OiBGbG9hdFN0eWxlVHlwZTtcclxuICAgIGNzc1RleHQ/OiBzdHJpbmc7XHJcblx0Y3Vyc29yPzogQ3Vyc29yU3R5bGVUeXBlO1xyXG5cdFxyXG4gICAgZGlyZWN0aW9uPzogRGlyZWN0aW9uU3R5bGVUeXBlO1xyXG4gICAgZGlzcGxheT86IERpc3BsYXlTdHlsZVR5cGU7XHJcbiAgICBkb21pbmFudEJhc2VsaW5lPzogRG9taW5hbnRCYXNlbGluZVN0eWxlVHlwZTtcclxuXHJcbiAgICBlbXB0eUNlbGxzPzogRW1wdHlDZWxsc1N0eWxlVHlwZTtcclxuXHRlbmFibGVCYWNrZ3JvdW5kPzogc3RyaW5nO1xyXG5cdFxyXG4gICAgZmlsbD86IFN0eWxlVHlwZTtcclxuICAgIGZpbGxPcGFjaXR5PzogU3R5bGVUeXBlO1xyXG4gICAgZmlsbFJ1bGU/OiBGaWxsUnVsZVN0eWxlVHlwZTtcclxuICAgIGZpbHRlcj86IHN0cmluZztcclxuICAgIGZsZXg/OiBGbGV4U3R5bGVUeXBlO1xyXG4gICAgZmxleEJhc2lzPzogRmxleEJhc2lzU3R5bGVUeXBlO1xyXG4gICAgZmxleERpcmVjdGlvbj86IEZsZXhEaXJlY3Rpb25TdHlsZVR5cGU7XHJcbiAgICBmbGV4Rmxvdz86IEZsZXhGbG93U3R5bGVUeXBlO1xyXG4gICAgZmxleEdyb3c/OiB1dGlscy5TaW5nbGVOdW1iZXJfU3R5bGVUeXBlO1xyXG4gICAgZmxleFNocmluaz86IHV0aWxzLlNpbmdsZU51bWJlcl9TdHlsZVR5cGU7XHJcbiAgICBmbGV4V3JhcD86IEZsZXhXcmFwU3R5bGVUeXBlO1xyXG4gICAgZmxvb2RDb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGZsb29kT3BhY2l0eT86IHN0cmluZztcclxuICAgIGZvbnQ/OiBzdHJpbmc7XHJcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xyXG4gICAgZm9udEZlYXR1cmVTZXR0aW5ncz86IHN0cmluZztcclxuICAgIGZvbnRLZXJuaW5nPzogc3RyaW5nO1xyXG4gICAgZm9udFNpemU/OiBzdHJpbmc7XHJcbiAgICBmb250U2l6ZUFkanVzdD86IHN0cmluZztcclxuICAgIGZvbnRTdHJldGNoPzogc3RyaW5nO1xyXG4gICAgZm9udFN0eWxlPzogRm9udFN0eWxlU3R5bGVUeXBlO1xyXG4gICAgZm9udFN5bnRoZXNpcz86IHN0cmluZztcclxuICAgIGZvbnRWYXJpYW50Pzogc3RyaW5nO1xyXG4gICAgZm9udFZhcmlhbnRDYXBzPzogc3RyaW5nO1xyXG4gICAgZm9udFZhcmlhbnRFYXN0QXNpYW4/OiBzdHJpbmc7XHJcbiAgICBmb250VmFyaWFudExpZ2F0dXJlcz86IHN0cmluZztcclxuICAgIGZvbnRWYXJpYW50TnVtZXJpYz86IHN0cmluZztcclxuICAgIGZvbnRWYXJpYW50UG9zaXRpb24/OiBzdHJpbmc7XHJcblx0Zm9udFdlaWdodD86IEZvbnRXZWlnaHRTdHlsZVR5cGU7XHJcblx0XHJcbiAgICBnYXA/OiBzdHJpbmc7XHJcbiAgICBnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbD86IFN0eWxlVHlwZTtcclxuICAgIGdseXBoT3JpZW50YXRpb25WZXJ0aWNhbD86IHN0cmluZztcclxuICAgIGdyaWQ/OiBTdHlsZVR5cGU7XHJcbiAgICBncmlkQXJlYT86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRBdXRvQ29sdW1ucz86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRBdXRvRmxvdz86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRBdXRvUm93cz86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRDb2x1bW4/OiBTdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uRW5kPzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZENvbHVtbkdhcD86IFNpbmdsZUdhcF9TdHlsZVR5cGU7XHJcbiAgICBncmlkQ29sdW1uU3RhcnQ/OiBTdHlsZVR5cGU7XHJcbiAgICBncmlkR2FwPzogc3RyaW5nO1xyXG4gICAgZ3JpZFJvdz86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRSb3dFbmQ/OiBTdHlsZVR5cGU7XHJcbiAgICBncmlkUm93R2FwPzogU2luZ2xlR2FwX1N0eWxlVHlwZTtcclxuICAgIGdyaWRSb3dTdGFydD86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZT86IFN0eWxlVHlwZTtcclxuICAgIGdyaWRUZW1wbGF0ZUFyZWFzPzogU3R5bGVUeXBlO1xyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1ucz86IFN0eWxlVHlwZTtcclxuXHRncmlkVGVtcGxhdGVSb3dzPzogU3R5bGVUeXBlO1xyXG5cdFxyXG4gICAgaGVpZ2h0PzogdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuXHRoeXBoZW5zPzogc3RyaW5nO1xyXG5cdFxyXG4gICAgaW1hZ2VPcmllbnRhdGlvbj86IHN0cmluZztcclxuICAgIGltYWdlUmVuZGVyaW5nPzogc3RyaW5nO1xyXG5cdGltZU1vZGU/OiBTdHlsZVR5cGU7XHJcblx0XHJcbiAgICBqdXN0aWZ5Q29udGVudD86IHN0cmluZztcclxuICAgIGp1c3RpZnlJdGVtcz86IHN0cmluZztcclxuXHRqdXN0aWZ5U2VsZj86IHN0cmluZztcclxuXHRcclxuXHRrZXJuaW5nPzogU3R5bGVUeXBlO1xyXG5cdFxyXG4gICAgbGF5b3V0R3JpZD86IFN0eWxlVHlwZTtcclxuICAgIGxheW91dEdyaWRDaGFyPzogU3R5bGVUeXBlO1xyXG4gICAgbGF5b3V0R3JpZExpbmU/OiBTdHlsZVR5cGU7XHJcbiAgICBsYXlvdXRHcmlkTW9kZT86IFN0eWxlVHlwZTtcclxuICAgIGxheW91dEdyaWRUeXBlPzogU3R5bGVUeXBlO1xyXG4gICAgbGVmdD86IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcbiAgICBsZXR0ZXJTcGFjaW5nPzogc3RyaW5nO1xyXG4gICAgbGlnaHRpbmdDb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIGxpbmVCcmVhaz86IHN0cmluZztcclxuICAgIGxpbmVIZWlnaHQ/OiBTdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGU/OiBTdHlsZVR5cGU7XHJcbiAgICBsaXN0U3R5bGVJbWFnZT86IFN0eWxlVHlwZTtcclxuICAgIGxpc3RTdHlsZVBvc2l0aW9uPzogU3R5bGVUeXBlO1xyXG5cdGxpc3RTdHlsZVR5cGU/OiBTdHlsZVR5cGU7XHJcblx0XHJcbiAgICBtYXJnaW4/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXJnaW5Cb3R0b20/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXJnaW5MZWZ0PzogU3R5bGVUeXBlO1xyXG4gICAgbWFyZ2luUmlnaHQ/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXJnaW5Ub3A/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXJrZXI/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXJrZXJFbmQ/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXJrZXJNaWQ/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXJrZXJTdGFydD86IFN0eWxlVHlwZTtcclxuICAgIG1hc2s/OiBzdHJpbmc7XHJcbiAgICBtYXNrQ29tcG9zaXRlPzogc3RyaW5nO1xyXG4gICAgbWFza0ltYWdlPzogc3RyaW5nO1xyXG4gICAgbWFza1Bvc2l0aW9uPzogc3RyaW5nO1xyXG4gICAgbWFza1JlcGVhdD86IHN0cmluZztcclxuICAgIG1hc2tTaXplPzogc3RyaW5nO1xyXG4gICAgbWFza1R5cGU/OiBzdHJpbmc7XHJcbiAgICBtYXhIZWlnaHQ/OiBTdHlsZVR5cGU7XHJcbiAgICBtYXhXaWR0aD86IFN0eWxlVHlwZTtcclxuICAgIG1pbkhlaWdodD86IFN0eWxlVHlwZTtcclxuXHRtaW5XaWR0aD86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIG1zQ29udGVudFpvb21DaGFpbmluZz86IFN0eWxlVHlwZTtcclxuICAgIG1zQ29udGVudFpvb21MaW1pdD86IFN0eWxlVHlwZTtcclxuICAgIG1zQ29udGVudFpvb21MaW1pdE1heD86IGFueTtcclxuICAgIG1zQ29udGVudFpvb21MaW1pdE1pbj86IGFueTtcclxuICAgIG1zQ29udGVudFpvb21TbmFwPzogU3R5bGVUeXBlO1xyXG4gICAgbXNDb250ZW50Wm9vbVNuYXBQb2ludHM/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0NvbnRlbnRab29tU25hcFR5cGU/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0NvbnRlbnRab29taW5nPzogU3R5bGVUeXBlO1xyXG4gICAgbXNGbG93RnJvbT86IFN0eWxlVHlwZTtcclxuICAgIG1zRmxvd0ludG8/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0ZvbnRGZWF0dXJlU2V0dGluZ3M/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0dyaWRDb2x1bW4/OiBhbnk7XHJcbiAgICBtc0dyaWRDb2x1bW5BbGlnbj86IFN0eWxlVHlwZTtcclxuICAgIG1zR3JpZENvbHVtblNwYW4/OiBhbnk7XHJcbiAgICBtc0dyaWRDb2x1bW5zPzogU3R5bGVUeXBlO1xyXG4gICAgbXNHcmlkUm93PzogYW55O1xyXG4gICAgbXNHcmlkUm93QWxpZ24/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0dyaWRSb3dTcGFuPzogYW55O1xyXG4gICAgbXNHcmlkUm93cz86IFN0eWxlVHlwZTtcclxuICAgIG1zSGlnaENvbnRyYXN0QWRqdXN0PzogU3R5bGVUeXBlO1xyXG4gICAgbXNIeXBoZW5hdGVMaW1pdENoYXJzPzogU3R5bGVUeXBlO1xyXG4gICAgbXNIeXBoZW5hdGVMaW1pdExpbmVzPzogYW55O1xyXG4gICAgbXNIeXBoZW5hdGVMaW1pdFpvbmU/OiBhbnk7XHJcbiAgICBtc0h5cGhlbnM/OiBTdHlsZVR5cGU7XHJcbiAgICBtc0ltZUFsaWduPzogU3R5bGVUeXBlO1xyXG4gICAgbXNPdmVyZmxvd1N0eWxlPzogU3R5bGVUeXBlO1xyXG4gICAgbXNTY3JvbGxDaGFpbmluZz86IFN0eWxlVHlwZTtcclxuICAgIG1zU2Nyb2xsTGltaXQ/OiBTdHlsZVR5cGU7XHJcbiAgICBtc1Njcm9sbExpbWl0WE1heD86IGFueTtcclxuICAgIG1zU2Nyb2xsTGltaXRYTWluPzogYW55O1xyXG4gICAgbXNTY3JvbGxMaW1pdFlNYXg/OiBhbnk7XHJcbiAgICBtc1Njcm9sbExpbWl0WU1pbj86IGFueTtcclxuICAgIG1zU2Nyb2xsUmFpbHM/OiBTdHlsZVR5cGU7XHJcbiAgICBtc1Njcm9sbFNuYXBQb2ludHNYPzogU3R5bGVUeXBlO1xyXG4gICAgbXNTY3JvbGxTbmFwUG9pbnRzWT86IFN0eWxlVHlwZTtcclxuICAgIG1zU2Nyb2xsU25hcFR5cGU/OiBTdHlsZVR5cGU7XHJcbiAgICBtc1Njcm9sbFNuYXBYPzogU3R5bGVUeXBlO1xyXG4gICAgbXNTY3JvbGxTbmFwWT86IFN0eWxlVHlwZTtcclxuICAgIG1zU2Nyb2xsVHJhbnNsYXRpb24/OiBTdHlsZVR5cGU7XHJcbiAgICBtc1RleHRDb21iaW5lSG9yaXpvbnRhbD86IFN0eWxlVHlwZTtcclxuICAgIG1zVGV4dFNpemVBZGp1c3Q/OiBhbnk7XHJcbiAgICBtc1RvdWNoQWN0aW9uPzogU3R5bGVUeXBlO1xyXG4gICAgbXNUb3VjaFNlbGVjdD86IFN0eWxlVHlwZTtcclxuICAgIG1zVXNlclNlbGVjdD86IFN0eWxlVHlwZTtcclxuICAgIG1zV3JhcEZsb3c/OiBzdHJpbmc7XHJcbiAgICBtc1dyYXBNYXJnaW4/OiBhbnk7XHJcblx0bXNXcmFwVGhyb3VnaD86IHN0cmluZztcclxuXHRcclxuICAgIG9iamVjdEZpdD86IHN0cmluZztcclxuICAgIG9iamVjdFBvc2l0aW9uPzogc3RyaW5nO1xyXG4gICAgb3BhY2l0eT86IFN0eWxlVHlwZTtcclxuICAgIG9yZGVyPzogU3R5bGVUeXBlO1xyXG4gICAgb3JwaGFucz86IG51bWJlciB8IHV0aWxzLkJhc2VfU3R5bGVUeXBlO1xyXG4gICAgb3V0bGluZT86IHN0cmluZztcclxuICAgIG91dGxpbmVDb2xvcj86IENvbG9yX1N0eWxlVHlwZTtcclxuICAgIG91dGxpbmVPZmZzZXQ/OiBzdHJpbmc7XHJcbiAgICBvdXRsaW5lU3R5bGU/OiBzdHJpbmc7XHJcbiAgICBvdXRsaW5lV2lkdGg/OiBzdHJpbmc7XHJcbiAgICBvdmVyZmxvdz86IHN0cmluZztcclxuICAgIG92ZXJmbG93QW5jaG9yPzogc3RyaW5nO1xyXG4gICAgb3ZlcmZsb3dXcmFwPzogc3RyaW5nO1xyXG4gICAgb3ZlcmZsb3dYPzogc3RyaW5nO1xyXG5cdG92ZXJmbG93WT86IHN0cmluZztcclxuXHRcclxuICAgIHBhZGRpbmc/OiBTdHlsZVR5cGU7XHJcbiAgICBwYWRkaW5nQm90dG9tPzogU3R5bGVUeXBlO1xyXG4gICAgcGFkZGluZ0xlZnQ/OiBTdHlsZVR5cGU7XHJcbiAgICBwYWRkaW5nUmlnaHQ/OiBTdHlsZVR5cGU7XHJcbiAgICBwYWRkaW5nVG9wPzogU3R5bGVUeXBlO1xyXG4gICAgcGFnZUJyZWFrQWZ0ZXI/OiBCcmVha0FmdGVyU3R5bGVUeXBlO1xyXG4gICAgcGFnZUJyZWFrQmVmb3JlPzogQnJlYWtCZWZvcmVTdHlsZVR5cGU7XHJcbiAgICBwYWdlQnJlYWtJbnNpZGU/OiBCcmVha0luc2lkZVN0eWxlVHlwZTtcclxuICAgIHBlbkFjdGlvbj86IFN0eWxlVHlwZTtcclxuICAgIHBlcnNwZWN0aXZlPzogU3R5bGVUeXBlO1xyXG4gICAgcGVyc3BlY3RpdmVPcmlnaW4/OiBTdHlsZVR5cGU7XHJcbiAgICBwbGFjZUNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICBwbGFjZUl0ZW1zPzogc3RyaW5nO1xyXG4gICAgcGxhY2VTZWxmPzogc3RyaW5nO1xyXG4gICAgcG9pbnRlckV2ZW50cz86IFN0eWxlVHlwZTtcclxuXHRwb3NpdGlvbj86IFN0eWxlVHlwZTtcclxuXHRcclxuXHRxdW90ZXM/OiBTdHlsZVR5cGU7XHJcblx0XHJcbiAgICByZXNpemU/OiBzdHJpbmc7XHJcbiAgICByaWdodD86IHV0aWxzLlNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7XHJcbiAgICByb3RhdGU/OiBTdHlsZVR5cGU7XHJcbiAgICByb3dHYXA/OiBTaW5nbGVHYXBfU3R5bGVUeXBlO1xyXG4gICAgcnVieUFsaWduPzogU3R5bGVUeXBlO1xyXG4gICAgcnVieU92ZXJoYW5nPzogU3R5bGVUeXBlO1xyXG5cdHJ1YnlQb3NpdGlvbj86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIHNjYWxlPzogU3R5bGVUeXBlO1xyXG4gICAgc2Nyb2xsQmVoYXZpb3I/OiBzdHJpbmc7XHJcbiAgICBzdG9wQ29sb3I/OiBTdHlsZVR5cGU7XHJcbiAgICBzdG9wT3BhY2l0eT86IFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZT86IFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZURhc2hhcnJheT86IFN0eWxlVHlwZTtcclxuICAgIHN0cm9rZURhc2hvZmZzZXQ/OiBTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VMaW5lY2FwPzogU3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlTGluZWpvaW4/OiBTdHlsZVR5cGU7XHJcbiAgICBzdHJva2VNaXRlcmxpbWl0PzogU3R5bGVUeXBlO1xyXG4gICAgc3Ryb2tlT3BhY2l0eT86IFN0eWxlVHlwZTtcclxuXHRzdHJva2VXaWR0aD86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIHRhYlNpemU/OiBzdHJpbmc7XHJcbiAgICB0YWJsZUxheW91dD86IFN0eWxlVHlwZTtcclxuICAgIHRleHRBbGlnbj86IHN0cmluZztcclxuICAgIHRleHRBbGlnbkxhc3Q/OiBzdHJpbmc7XHJcbiAgICB0ZXh0QW5jaG9yPzogU3R5bGVUeXBlO1xyXG4gICAgdGV4dENvbWJpbmVVcHJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgdGV4dERlY29yYXRpb24/OiBzdHJpbmc7XHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yPzogQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgdGV4dERlY29yYXRpb25MaW5lPzogc3RyaW5nO1xyXG4gICAgdGV4dERlY29yYXRpb25TdHlsZT86IHN0cmluZztcclxuICAgIHRleHRFbXBoYXNpcz86IHN0cmluZztcclxuICAgIHRleHRFbXBoYXNpc0NvbG9yPzogQ29sb3JfU3R5bGVUeXBlO1xyXG4gICAgdGV4dEVtcGhhc2lzUG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgICB0ZXh0RW1waGFzaXNTdHlsZT86IHN0cmluZztcclxuICAgIHRleHRJbmRlbnQ/OiBzdHJpbmc7XHJcbiAgICB0ZXh0SnVzdGlmeT86IHN0cmluZztcclxuICAgIHRleHRLYXNoaWRhPzogU3R5bGVUeXBlO1xyXG4gICAgdGV4dEthc2hpZGFTcGFjZT86IFN0eWxlVHlwZTtcclxuICAgIHRleHRPcmllbnRhdGlvbj86IHN0cmluZztcclxuICAgIHRleHRPdmVyZmxvdz86IHN0cmluZztcclxuICAgIHRleHRTaGFkb3c/OiBzdHJpbmc7XHJcbiAgICB0ZXh0VHJhbnNmb3JtPzogc3RyaW5nO1xyXG4gICAgdGV4dFVuZGVybGluZVBvc2l0aW9uPzogc3RyaW5nO1xyXG4gICAgdG9wPzogdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuICAgIHRvdWNoQWN0aW9uPzogc3RyaW5nO1xyXG4gICAgdHJhbnNmb3JtPzogc3RyaW5nO1xyXG4gICAgdHJhbnNmb3JtQm94Pzogc3RyaW5nO1xyXG4gICAgdHJhbnNmb3JtT3JpZ2luPzogc3RyaW5nO1xyXG4gICAgdHJhbnNmb3JtU3R5bGU/OiBTdHlsZVR5cGU7XHJcbiAgICB0cmFuc2l0aW9uPzogc3RyaW5nO1xyXG4gICAgdHJhbnNpdGlvbkRlbGF5Pzogc3RyaW5nO1xyXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xyXG4gICAgdHJhbnNpdGlvblByb3BlcnR5Pzogc3RyaW5nO1xyXG4gICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uPzogc3RyaW5nO1xyXG5cdHRyYW5zbGF0ZT86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIHVuaWNvZGVCaWRpPzogc3RyaW5nO1xyXG5cdHVzZXJTZWxlY3Q/OiBzdHJpbmc7XHJcblx0XHJcbiAgICB2ZXJ0aWNhbEFsaWduPzogU3R5bGVUeXBlO1xyXG5cdHZpc2liaWxpdHk/OiBTdHlsZVR5cGU7XHJcblx0XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QWxpZ25Db250ZW50Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEFsaWduSXRlbXM/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QWxpZ25TZWxmPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEFuaW1hdGlvbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbmltYXRpb25EZWxheT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbmltYXRpb25EaXJlY3Rpb24/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QW5pbWF0aW9uRHVyYXRpb24/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QW5pbWF0aW9uRmlsbE1vZGU/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QW5pbWF0aW9uTmFtZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRBbmltYXRpb25QbGF5U3RhdGU/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QW5pbWF0aW9uVGltaW5nRnVuY3Rpb24/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QXBwZWFyYW5jZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCYWNrZmFjZVZpc2liaWxpdHk/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QmFja2dyb3VuZENsaXA/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0QmFja2dyb3VuZE9yaWdpbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCYWNrZ3JvdW5kU2l6ZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCb3JkZXJCb3R0b21MZWZ0UmFkaXVzPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPzogc3RyaW5nO1xyXG4gICAgd2Via2l0Qm9yZGVySW1hZ2U/OiBTdHlsZVR5cGU7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0Qm9yZGVyUmFkaXVzPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEJvcmRlclRvcExlZnRSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0Qm9yZGVyVG9wUmlnaHRSYWRpdXM/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0Qm94QWxpZ24/OiBzdHJpbmc7XHJcbiAgICB3ZWJraXRCb3hEaXJlY3Rpb24/OiBTdHlsZVR5cGU7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0Qm94RmxleD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCb3hPcmRpbmFsR3JvdXA/OiBzdHJpbmc7XHJcbiAgICB3ZWJraXRCb3hPcmllbnQ/OiBTdHlsZVR5cGU7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0Qm94UGFjaz86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL3dlYmtpdEJveFNoYWRvdz86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRCb3hTaXppbmc/OiBzdHJpbmc7XHJcbiAgICB3ZWJraXRDb2x1bW5CcmVha0FmdGVyPzogU3R5bGVUeXBlO1xyXG4gICAgd2Via2l0Q29sdW1uQnJlYWtCZWZvcmU/OiBTdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5CcmVha0luc2lkZT86IFN0eWxlVHlwZTtcclxuICAgIHdlYmtpdENvbHVtbkNvdW50PzogQ29sdW1uQ291bnRTdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5HYXA/OiBTaW5nbGVHYXBfU3R5bGVUeXBlO1xyXG4gICAgd2Via2l0Q29sdW1uUnVsZT86IENvbHVtblJ1bGVTdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5SdWxlQ29sb3I/OiBDb2xvcl9TdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5SdWxlU3R5bGU/OiBDb2x1bW5SdWxlU3R5bGVUeXBlO1xyXG4gICAgd2Via2l0Q29sdW1uUnVsZVdpZHRoPzogQm9yZGVyV2lkdGhTdHlsZVR5cGU7XHJcbiAgICB3ZWJraXRDb2x1bW5TcGFuPzogU3R5bGVUeXBlO1xyXG4gICAgd2Via2l0Q29sdW1uV2lkdGg/OiBhbnk7XHJcbiAgICB3ZWJraXRDb2x1bW5zPzogU3R5bGVUeXBlO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEZpbHRlcj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRGbGV4Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEZsZXhCYXNpcz86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRGbGV4RGlyZWN0aW9uPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEZsZXhGbG93Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEZsZXhHcm93Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdEZsZXhTaHJpbms/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0RmxleFdyYXA/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0SnVzdGlmeUNvbnRlbnQ/OiBzdHJpbmc7XHJcbiAgICB3ZWJraXRMaW5lQ2xhbXA/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0TWFzaz86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrQm94SW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0TWFza0JveEltYWdlT3V0c2V0Pzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdE1hc2tCb3hJbWFnZVJlcGVhdD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrQm94SW1hZ2VTbGljZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrQm94SW1hZ2VTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0TWFza0JveEltYWdlV2lkdGg/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0TWFza0NsaXA/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0TWFza0NvbXBvc2l0ZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrSW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0TWFza09yaWdpbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrUG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0TWFza1JlcGVhdD86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRNYXNrU2l6ZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRPcmRlcj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRQZXJzcGVjdGl2ZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRQZXJzcGVjdGl2ZU9yaWdpbj86IHN0cmluZztcclxuICAgIHdlYmtpdFRhcEhpZ2hsaWdodENvbG9yPzogU3R5bGVUeXBlO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFRleHRGaWxsQ29sb3I/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VGV4dFNpemVBZGp1c3Q/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VGV4dFN0cm9rZT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUZXh0U3Ryb2tlQ29sb3I/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VGV4dFN0cm9rZVdpZHRoPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFRyYW5zZm9ybT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUcmFuc2Zvcm1PcmlnaW4/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VHJhbnNmb3JtU3R5bGU/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VHJhbnNpdGlvbj86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUcmFuc2l0aW9uRGVsYXk/OiBzdHJpbmc7XHJcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi8gd2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uPzogc3RyaW5nO1xyXG4gICAgLyoqIEBkZXByZWNhdGVkICovIHdlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eT86IHN0cmluZztcclxuICAgIC8qKiBAZGVwcmVjYXRlZCAqLyB3ZWJraXRUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb24/OiBzdHJpbmc7XHJcbiAgICB3ZWJraXRVc2VyTW9kaWZ5PzogU3R5bGVUeXBlO1xyXG4gICAgd2Via2l0VXNlclNlbGVjdD86IFN0eWxlVHlwZTtcclxuXHR3ZWJraXRXcml0aW5nTW9kZT86IFN0eWxlVHlwZTtcclxuXHRcclxuICAgIHdoaXRlU3BhY2U/OiBzdHJpbmc7XHJcbiAgICB3aWRvd3M/OiBudW1iZXIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuICAgIHdpZHRoPzogdXRpbHMuU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTtcclxuICAgIHdpbGxDaGFuZ2U/OiBzdHJpbmc7XHJcbiAgICB3b3JkQnJlYWs/OiBzdHJpbmc7XHJcbiAgICB3b3JkU3BhY2luZz86IHN0cmluZztcclxuICAgIHdvcmRXcmFwPzogc3RyaW5nO1xyXG5cdHdyaXRpbmdNb2RlPzogc3RyaW5nO1xyXG5cdFxyXG4gICAgekluZGV4PzogXCJhdXRvXCIgfCBudW1iZXIgfCB1dGlscy5CYXNlX1N0eWxlVHlwZTtcclxuICAgIHpvb20/OiBTdHlsZVR5cGU7XHJcblxyXG4gICAgLy8gY3VzdG9tIHByb3BlcnRpZXMvYWxpYXNlc1xyXG4gICAgc2hhZG93PzogQm94U2hhZG93U3R5bGVUeXBlO1xyXG4gICAgYmdjPzogQ29sb3JfU3R5bGVUeXBlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lhbCBwcm9wZXJ0eSB0aGF0IGNvbnRhaW5zIHNldmVyYWwgZGVmaW5pdGlvbnMgb2YgY3VzdG9tIENTUyBwcm9wZXJ0aWVzLlxyXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0aGUgZm9sbG93aW5nIHdheTpcclxuICAgICAqICAgJGN1c3RvbTogeyBtYWluQ29sb3I6IFwiYmxhY2tcIiwgbWFpbkJnQ29sb3I6IFwid2hpdGVcIiB9XHJcbiAgICAgKiBUaGUgZmlyc3QgbmFtZSAobWFpbkNvbG9yKSBkZXRlcm1pbmVzIHRoZSBjdXN0b20gcHJvcGVydHkgbmFtZS4gVGhlIHNlY29uZCBuYW1lIChjb2xvcikgaXNcclxuICAgICAqIG9uZSBvZiBTdHlsZXNldCBwcm9wZXJ0aWVzIGFuZCBpcyBvbmx5IHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSB0eXBlIG9mIHZhbHVlIGZvciB0aGUgY3VzdG9tXHJcbiAgICAgKiBwcm9wZXJ0eS5cclxuICAgICAqL1xyXG4gICAgJGN1c3RvbT86IHsgW0s6IHN0cmluZ106IHN0cmluZyB9XHJcbiAgICAvLyAkY3VzdG9tPzogeyBbSzogc3RyaW5nXTogW1A6IGtleW9mIFN0eWxlc2V0LCBTdHlsZXNldFtQXV0gfSB9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIFR5cGUgZGVmbml0aW9uIG9mIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBwcm9wZXJ0eSB2YWx1ZSBhbmQgY29udmVydHMgaXQgdG8gc3RyaW5nICovXHJcbnR5cGUgUHJvcFRvU3RyaW5nRnVuYzxUPiA9ICh2YWw6IFQpID0+IHN0cmluZztcclxuXHJcbi8qKlxyXG4gKiBUaGUgU3R5bGVQcm9wZXJ0eUluZm8gdHlwZSByZXByZXNlbnRzIGluZm9ybWF0aW9uIHRoYXQgd2Uga2VlcCBmb3Igc3R5bGUgcHJvcGVydGllcy4gTW9zdFxyXG4gKiBjb21tb25seSwgdGhlIGluZm9ybWF0aW9uIG5lZWRlZCBmb3IgYSBwcm9wZXJ0eSBpcyBhIGNvbnZlcnNpb24gZnVuY3Rpb24sIHdoaWNoIHRha2VzIGEgdmFsdWVcclxuICogb2YgYSB0eXBlIGFsbG93ZWQgZm9yIHRoZSBwcm9wZXJ0eSBhbmQgY29udmVydHMgaXQgdG8gdGhlIENTUyBjb21wbGlhbnQgc3RyaW5nLiBBbHRlcm5hdGl2ZWx5LFxyXG4gKiBpdCBjYW4gYmUgYSBuYW1lIG9mIGFub3RoZXIgU3R5bGVzZXQgcHJvcGVydHkgZm9yIHdoaWNoIHRoaXMgcHJvcGVydHkgaXMgYW4gYWxpYXMuIFRoaXMgaXMgdXNlZFxyXG4gKiBmb3Igc2hvcnRlbmluZyBmcmVxdWVudGx5IHVzZWQgYnV0IGxvbmcgcHJvcGVydHkgbmFtZXMgKGUuZy4gYmFja2dyb3VuZENvbG9yKSBhbmQgZm9yIHByZWZpeGVkXHJcbiAqIHByb3BlcnRpZXMuXHJcbiAqL1xyXG50eXBlIFN0eWxlUHJvcGVydHlJbmZvPFQ+ID0gUHJvcFRvU3RyaW5nRnVuYzxUPiB8IGtleW9mIFN0eWxlc2V0O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFwIG9mIHByb3BlcnR5IG5hbWVzIHRvIHRoZSBTdHlsZVByb3BlcnR5SW5mbyBvYmplY3RzIGRlc2NyaWJpbmcgY3VzdG9tIGFjdGlvbnMgbmVjZXNzYXJ5IHRvXHJcbiAqIGNvbnZlcnQgdGhlIHByb3BlcnR5IHZhbHVlIHRvIHRoZSBDU1MtY29tcGxpYW50IHN0cmluZy5cclxuICovXHJcbmNvbnN0IFN0eWxlUHJvcGVydHlJbmZvczogeyBbSyBpbiBrZXlvZiBTdHlsZXNldF06IFN0eWxlUHJvcGVydHlJbmZvPFN0eWxlc2V0W0tdPiB9ID1cclxue1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRpb25Ub0Nzc1N0cmluZyxcclxuICAgIGFuaW1hdGlvbkRlbGF5OiB1dGlscy5tdWx0aVRpbWVUb0Nzc1N0cmluZyxcclxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB1dGlscy5tdWx0aVRpbWVUb0Nzc1N0cmluZyxcclxuICAgIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB1dGlscy5zaW5nbGVOdW1iZXJUb0Nzc1N0cmluZyxcclxuICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBhbmltYXRpb25UaW1pbmdGdW5jdGlvblRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJnYzogXCJiYWNrZ3JvdW5kQ29sb3JcIixcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogdXRpbHMubXVsdGlQb3NpdGlvblRvQ3NzU3RyaW5nLFxyXG4gICAgYmFja2dyb3VuZFNpemU6IHV0aWxzLm11bHRpU2l6ZVRvQ3NzU3RyaW5nLFxyXG4gICAgYmFzZWxpbmVTaGlmdDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgYm9yZGVyOiBib3JkZXJTaWRlVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b206IGJvcmRlclNpZGVUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogc2luZ2xlQ29ybmVyUmFkaXVzVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJCb3R0b21XaWR0aDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckltYWdlT3V0c2V0OiBib3JkZXJJbWFnZU91dHNldFRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVySW1hZ2VXaWR0aDogYm9yZGVyV2lkdGhUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckxlZnQ6IGJvcmRlclNpZGVUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlckxlZnRXaWR0aDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyUmlnaHQ6IGJvcmRlclNpZGVUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJSaWdodFdpZHRoOiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZVRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyU3BhY2luZzogYm9yZGVyU3BhY2luZ1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wOiBib3JkZXJTaWRlVG9Dc3NTdHJpbmcsXHJcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHNpbmdsZUNvcm5lclJhZGl1c1RvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyVG9wV2lkdGg6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoVG9Dc3NTdHJpbmcsXHJcbiAgICBib3R0b206IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgYm94U2hhZG93OiBib3hTaGFkb3dUb0Nzc1N0cmluZyxcclxuICAgIHNoYWRvdzogXCJib3hTaGFkb3dcIixcclxuXHJcbiAgICBjYXJldENvbG9yOiBjb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgY2xpcDogY2xpcFRvQ3NzU3RyaW5nLFxyXG4gICAgY29sb3I6IGNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICBjb2x1bW5HYXA6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZTogY29sdW1uUnVsZVRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZUNvbG9yOiBjb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVN0eWxlOiBib3JkZXJTdHlsZVRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uUnVsZVdpZHRoOiBib3JkZXJXaWR0aFRvQ3NzU3RyaW5nLFxyXG4gICAgY29sdW1uczogY29sdW1uc1RvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGZsZXg6IGZsZXhUb0Nzc1N0cmluZyxcclxuICAgIGZsZXhGbG93OiBmbGV4Rmxvd1RvQ3NzU3RyaW5nLFxyXG4gICAgZmxvb2RDb2xvcjogY29sb3JUb0Nzc1N0cmluZyxcclxuICAgIGZvbnRTdHlsZTogZm9udFN0eWxlVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgZ3JpZENvbHVtbkdhcDogdXRpbHMuc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcsXHJcbiAgICBncmlkUm93R2FwOiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBoZWlnaHQ6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIGxlZnQ6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgbGlnaHRpbmdDb2xvcjogY29sb3JUb0Nzc1N0cmluZyxcclxuXHJcbiAgICBvdXRsaW5lQ29sb3I6IGNvbG9yVG9Dc3NTdHJpbmcsXHJcblxyXG4gICAgcmlnaHQ6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG4gICAgcm93R2FwOiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyxcclxuXHJcbiAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiBjb2xvclRvQ3NzU3RyaW5nLFxyXG4gICAgdGV4dEVtcGhhc2lzQ29sb3I6IGNvbG9yVG9Dc3NTdHJpbmcsXHJcbiAgICB0b3A6IHV0aWxzLnNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nLFxyXG5cclxuICAgIHdpZHRoOiB1dGlscy5zaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyxcclxufTtcclxuXHJcblxyXG5cclxuLyoqIENvbnZlcnRzIHRoZSBnaXZlbiBzdHlsZXNldCB0byBpdHMgc3RyaW5nIHJlcHJlc2VudGF0aW9uICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZXNldFRvQ3NzU3RyaW5nKCBzdHlsZXNldDogU3R5bGVzZXQsIGltcG9ydGFudD86IFNldDxzdHJpbmc+KTogc3RyaW5nXHJcbntcclxuICAgIGxldCBzID0gXCJcIjtcclxuXHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZXNldClcclxuXHR7XHJcbiAgICAgICAgbGV0IHByb3BWYWw6IGFueSA9IHN0eWxlc2V0W3Byb3BOYW1lXTtcclxuICAgICAgICBpZiAocHJvcE5hbWUgPT09IFwiJGN1c3RvbVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBvZiB0aGUgXCIkY3VzdG9tXCIgcHJvcGVydHlcclxuICAgICAgICAgICAgZm9yKCBsZXQgY3VzdG9tUHJvcE5hbWUgaW4gcHJvcFZhbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcyArPSBgLS0ke2N1c3RvbVByb3BOYW1lfToke3Byb3BWYWxbY3VzdG9tUHJvcE5hbWVdfWA7XHJcbiAgICAgICAgICAgICAgICBzICs9IChpbXBvcnRhbnQgJiYgaW1wb3J0YW50LmhhcyggcHJvcE5hbWUpID8gXCIgIWltcG9ydGFudDtcIiA6IFwiO1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJvcGVydHlcclxuICAgICAgICAgICAgcyArPSBzdHlsZVByb3BUb0Nzc1N0cmluZyggcHJvcE5hbWUsIHByb3BWYWwpO1xyXG4gICAgICAgICAgICBzICs9IChpbXBvcnRhbnQgJiYgaW1wb3J0YW50LmhhcyggcHJvcE5hbWUpID8gXCIgIWltcG9ydGFudDtcIiA6IFwiO1wiKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuICAgIHJldHVybiBgeyR7c319YDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGhlIGdpdmVuIHN0eWxlIHByb3BlcnR5IHRvIHRoZSBDU1Mgc3R5bGUgc3RyaW5nXHJcbiAqIEBwYXJhbSBzdHlsZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZVByb3BUb0Nzc1N0cmluZyggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogYW55LCB2YWx1ZU9ubHk/OiBib29sZWFuKTogc3RyaW5nXHJcbntcclxuICAgIGlmICghcHJvcE5hbWUgfHwgcHJvcFZhbCA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIC8vIGZpbmQgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgcHJvcGVydHlcclxuICAgIGxldCBpbmZvID0gU3R5bGVQcm9wZXJ0eUluZm9zW3Byb3BOYW1lXTtcclxuICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gXCJzdHJpbmdcIilcclxuICAgIHtcclxuICAgICAgICAvLyBnbyB1cCB0aGUgY2hhaW4gb2YgYWxpYXNlcyBpZiBhbnkgKHdlIGFkbWl0dGVkbHkgZG9uJ3QgbWFrZSB0aGUgZWZmb3J0IHRvIGRldGVjdCBjaXJjdWxhclxyXG4gICAgICAgIC8vIGRlcGVuZGVuY2llcywgYmVjYXVzZSBzZXR0aW5nIHVwIHRoZSBpbmZvcm1hdGlvbiBvYmplY3RzIGlzIG91ciBqb2IgYW5kIG5vdCBkZXZlbG9wZXJzJykuXHJcbiAgICAgICAgd2hpbGUoIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvcE5hbWUgPSBpbmZvO1xyXG4gICAgICAgICAgICBpbmZvID0gU3R5bGVQcm9wZXJ0eUluZm9zW3Byb3BOYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHMgPSB2YWx1ZU9ubHkgPyBcIlwiIDogdXRpbHMuY2FtZWxUb0Rhc2goIHByb3BOYW1lKSArIFwiOlwiO1xyXG5cclxuICAgIGlmICh0eXBlb2YgaW5mbyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHMgKz0gaW5mbyggcHJvcFZhbCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICBzICs9IHByb3BWYWw7XHJcbiAgICBlbHNlIGlmIChwcm9wVmFsIGluc3RhbmNlb2YgdXRpbHMuU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcyArPSBwcm9wVmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KCBwcm9wVmFsKSlcclxuICAgICAgICBzICs9IHV0aWxzLmFycmF5VG9Dc3NTdHJpbmcoIHByb3BWYWwsIGl0ZW0gPT4gaXRlbSA9PSBudWxsID8gXCJcIiA6IGl0ZW0udG9TdHJpbmcoKSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcyArPSBwcm9wVmFsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IHtTdHJpbmdQcm94eSwgVW5pdFZhbHVlfSBmcm9tIFwiLi91dGlsc1wiXHJcbmltcG9ydCB7Q29sb3JzfSBmcm9tIFwiLi9jb2xvcnNcIjtcclxuaW1wb3J0IHtJQ3VzdG9tVmFyfSBmcm9tIFwiLi4vYXBpL3J1bGVzXCJcclxuaW1wb3J0IHtDdXN0b21WYXJ9IGZyb20gXCIuLi9ydWxlcy9DdXN0b21WYXJcIlxyXG5pbXBvcnQgeyBzdHlsZVByb3BUb0Nzc1N0cmluZyB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIG1zaCBjbGFzcyBjb250YWlucyBzdGF0aWMgaGVscGVyIGZ1bmN0aW9ucyB0aGF0IGFyZSB1c2VkIHdoZW5ldmVyIHRoZXJlIGlzIGEgbmVlZCB0byBwcm9kdWNlXHJcbiAqIENTUyBzdHJpbmcgdmFsdWUgYmFzZWQgb24gbW9yZSBjb21wbGljYXRlZCB0eXBlKHMpLiBUaGUgbWFqb3JpdHkgb2YgdGhlc2UgZnVuY3Rpb25zIHJldHVyblxyXG4gKiBTdHJpbmdQcm94eSBvYmplY3Qgc28gdGhhdCB0aGV5IGNhbiBiZSB1c2VkIGluIHN0eWxlc2V0IHByb3BlcnRpZXMgYXNzaWdubWVudHMsIGZvciBleGFtcGxlOlxyXG4gKiBgYGB0c3hcclxuICogPGRpdiBzdHlsZT17eyBjb2xvcjogdHNoLnJnYiggMjU1LCAxMjgsIDY0KSB9fVxyXG4gKiBgYGBcclxuICovXHJcbmV4cG9ydCBjbGFzcyB0c2hcclxue1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBVdGlsaXRpZXNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIHN0YXRpYyBwZXJjZW50KCBuOiBudW1iZXIpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKE51bWJlci5pc0ludGVnZXIobikgPyBuIDogbiA+IC0xLjAgJiYgbiA8IDEuMCA/IE1hdGgucm91bmQoIG4gKiAxMDApIDogTWF0aC5yb3VuZChuKSkgKyBcIiVcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHVuaXRzKCBuOiBudW1iZXIsIHVuaXQ6IHN0cmluZyk6IFVuaXRWYWx1ZVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgVW5pdFZhbHVlKCBuLCB1bml0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gQ29sb3JzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBzdGF0aWMgY29sb3JTZXAoIGM6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBjID09IG51bGwgPyBcIjBcIiA6IHR5cGVvZiBjID09PSBcInN0cmluZ1wiID8gYyA6IE51bWJlci5pc0ludGVnZXIoYykgPyBjLnRvU3RyaW5nKCkgOiB0aGlzLnBlcmNlbnQoYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyByZ2IoIHI6IG51bWJlciB8IHN0cmluZywgZzogbnVtYmVyIHwgc3RyaW5nLCBiOiBudW1iZXIgfCBzdHJpbmcsIGE/OiBudW1iZXIgfCBzdHJpbmcpOiBTdHJpbmdQcm94eVxyXG4gICAge1xyXG4gICAgICAgIHIgPSB0aGlzLmNvbG9yU2VwKHIpO1xyXG4gICAgICAgIGcgPSB0aGlzLmNvbG9yU2VwKGcpO1xyXG4gICAgICAgIGIgPSB0aGlzLmNvbG9yU2VwKGIpO1xyXG4gICAgICAgIGEgPSBhID09IG51bGwgPyBudWxsIDogdHlwZW9mIGEgPT09IFwic3RyaW5nXCIgPyBhIDogdGhpcy5wZXJjZW50KGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBhID09IG51bGwgPyBgcmdiKCR7cn0sJHtnfSwke2J9KWAgOiBgcmdiYSgke3J9LCR7Z30sJHtifSwke2F9KWApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgaHNsKCBoOiBudW1iZXIgfCBzdHJpbmcsIHM6IG51bWJlciB8IHN0cmluZywgbDogbnVtYmVyIHwgc3RyaW5nLCBhPzogbnVtYmVyIHwgc3RyaW5nKTogU3RyaW5nUHJveHlcclxuICAgIHtcclxuICAgICAgICBoID0gdHlwZW9mIGggPT09IFwic3RyaW5nXCIgPyBoIDogTnVtYmVyLmlzSW50ZWdlciggaCkgPyBoICsgXCJkZWdcIiA6IGggKyBcInJhZFwiO1xyXG4gICAgICAgIHMgPSBzID09IG51bGwgPyBcIjEwMCVcIiA6IHR5cGVvZiBzID09PSBcInN0cmluZ1wiID8gcyA6IHRoaXMucGVyY2VudChzKTtcclxuICAgICAgICBsID0gbCA9PSBudWxsID8gXCIxMDAlXCIgOiB0eXBlb2YgbCA9PT0gXCJzdHJpbmdcIiA/IGwgOiB0aGlzLnBlcmNlbnQobCk7XHJcbiAgICAgICAgYSA9IGEgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIiA/IGEgOiB0aGlzLnBlcmNlbnQoYSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgU3RyaW5nUHJveHkoIGEgPT0gbnVsbCA/IGBoc2woJHtofSwke3N9LCR7bH0pYCA6IGBoc2xhKCR7aH0sJHtzfSwke2x9LCR7YX0pYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhbHBoYSggYzogbnVtYmVyIHwga2V5b2YgdHlwZW9mIENvbG9ycywgYTogbnVtYmVyIHwgc3RyaW5nKTogU3RyaW5nUHJveHlcclxuICAgIHtcclxuICAgICAgICBsZXQgcmdiID0gdHlwZW9mIGMgPT09IFwic3RyaW5nXCIgPyBDb2xvcnNbY10gOiBjO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJnYiggKHJnYiAmIDB4RkYwMDAwKSA+PiAxNiwgKHJnYiAmIDB4MDBGRjAwKSA+PiA4LCByZ2IgJiAweDAwMDBGRiwgYSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIExlbmd0aCB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIFEoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJRXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGNoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiY2hcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgY20oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJjbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImVtXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGV4KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZXhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgaWMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJpY1wiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBpbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImluXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGxoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwibGhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgbW0oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJtbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBwYyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInBjXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHB0KCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwicHRcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgcHgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJweFwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyB2YiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZiXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHZoKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwidmhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdmkoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJ2aVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyB2dyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZ3XCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbSggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInJlbVwiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyBybGgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJybGhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdm1heCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZtYXhcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdm1pbiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInZtaW5cIik7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGxlbmd0aCB2YWx1ZSBmcm9tIHRoZSBudW1lcmljIHJlcHJlc2VudGF0aW9uIHRvIHRoZSBDU1Mgc3RyaW5nLiBJbnRlZ2VyXHJcbiAgICAgKiB2YWx1ZXMgYXJlIHRyZWF0ZWQgYXMgcGl4ZWxzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcGVyY2VudHMgZnJvbSAwLjAgdG8gMS4wLlxyXG4gICAgICogQHBhcmFtIHZhbCBMZW5ndGggYXMgYSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBsZW4oIG46IG51bWJlciwgdW5pdHM/OiBzdHJpbmcpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbiA9PT0gMCA/IFwiMFwiIDogdW5pdHMgPyBuICsgdW5pdHMgOiBOdW1iZXIuaXNJbnRlZ2VyKCBuKSA/ICBuICsgXCJweFwiIDogdGhpcy5wZXJjZW50KG4pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBBbmdsZSB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlZyggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImRlZ1wiKTsgfVxyXG4gICAgcHVibGljIHN0YXRpYyByYWQoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJyYWRcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgZ3JhZCggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImdyYWRcIik7IH1cclxuICAgIHB1YmxpYyBzdGF0aWMgdHVybiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcInR1cm5cIik7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIGFuZ2xlIHZhbHVlIGZyb20gdGhlIG51bWVyaWMgcmVwcmVzZW50YXRpb24gdG8gdGhlIENTUyBzdHJpbmcuIEludGVnZXJcclxuICAgICAqIHZhbHVlcyBhcmUgdHJlYXRlZCBhcyBkZWdyZWVzIHdoaWxlIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcmFkaWFucy5cclxuICAgICAqIEBwYXJhbSB2YWwgQW5nbGUgYXMgYSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBhbmdsZSggbjogbnVtYmVyLCB1bml0cz86IHN0cmluZyk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuID09PSAwID8gXCIwXCIgOiB1bml0cyA/IG4gKyB1bml0cyA6IE51bWJlci5pc0ludGVnZXIobikgPyAgbiArIFwiZGVnXCIgOiBuICsgXCJyYWRcIjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAvL1xyXG4gICAgLy8gVGltZSB1bml0c1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICBwdWJsaWMgc3RhdGljIHMoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJzXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIG1zKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwibXNcIik7IH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnZlcnRzIHRpbWUgdmFsdWUgZnJvbSB0aGUgbnVtZXJpYyByZXByZXNlbnRhdGlvbiB0byB0aGUgQ1NTIHN0cmluZy4gSW50ZWdlclxyXG4gICAgICogdmFsdWVzIGFyZSB0cmVhdGVkIGFzIG1pbGxpc2Vjb25kcyB3aGlsZSBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIHNlY29uZHMuXHJcbiAgICAgKiBAcGFyYW0gdmFsIFRpbWUgYXMgYSBudW1iZXJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0aW1lKCBuOiBudW1iZXIsIHVuaXRzPzogXCJzXCIgfCBcIm1zXCIpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbiA9PT0gMCA/IFwiMHNcIiA6IHVuaXRzID8gbiArIHVuaXRzIDogTnVtYmVyLmlzSW50ZWdlcihuKSA/ICBuICsgXCJtc1wiIDogbiArIFwic1wiO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBGcmVxdWVuY3kgdW5pdHNcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIHN0YXRpYyBoeiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcIkh6XCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGtoeiggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImtIelwiKTsgfVxyXG5cclxuXHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIC8vXHJcbiAgICAvLyBSZXNvbHV0aW9uIHVuaXRzXHJcbiAgICAvL1xyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIHB1YmxpYyBzdGF0aWMgZHBpKCBuOiBudW1iZXIpIHsgcmV0dXJuIHRoaXMudW5pdHMoIG4sIFwiZHBpXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRwY20oIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJkcGNtXCIpOyB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGRwcHgoIG46IG51bWJlcikgeyByZXR1cm4gdGhpcy51bml0cyggbiwgXCJkcHB4XCIpOyB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIEZyYWN0aW9uIHVuaXRzIChmb3IgZmxleClcclxuICAgIC8vXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgcHVibGljIHN0YXRpYyBmciggbjogbnVtYmVyKSB7IHJldHVybiB0aGlzLnVuaXRzKCBuLCBcImZyXCIpOyB9XHJcblxyXG5cclxuXHJcbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgLy9cclxuICAgIC8vIEN1c3RvbSBDU1MgcHJvcGVydGllc1xyXG4gICAgLy9cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIENTUyB2YXIoKSBmdW5jdGlvbiBmb3IgdGhlIGdpdmVuIGN1c3RvbSBwcm9wZXJ0eS5cclxuICAgICAqIEV4YW1wbGU6XHJcbiAgICAgKiBgYGB0c3hcclxuICAgICAqIGxldCBteVN0eWxlcyA9ICRzY29wZSggY2xhc3NcclxuICAgICAqIHtcclxuICAgICAqICAgICBkZWZhdWx0Q29sb3IgPSAkY3VzdG9tKCBcImNvbG9yXCIsIFwiYmx1ZVwiKTtcclxuICAgICAqIFxyXG4gICAgICogICAgIHNpZGViYXIgPSAkY2xhc3MoIHsgY29sb3I6IHRzaC52YXIoIHRoaXMuZGVmYXVsdENvbG9yLCBcImJsYWNrXCIpIH0pXHJcbiAgICAgKiB9KTtcclxuICAgICAqIGBgYFxyXG4gICAgICogVGhlIHZhciBtZXRob2QgY2FuIGFsc28gYmUgdXNlZCB3aXRoIHNpbXBsZSBzdHJpbmcgdmFsdWVzOlxyXG4gICAgICogYGBgdHN4XHJcbiAgICAgKiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiB0c2gudmFyKCBcImRlZmF1bHQtY29sb3JcIiwgXCJibGFja1wiKSB9fVxyXG4gICAgICogYGBgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdmFyPFQ+KCBjdXN0b21WYXI6IElDdXN0b21WYXI8VD4gfCBzdHJpbmcsIGZhbGxiYWNrVmFsdWU/OiBUIHwgSUN1c3RvbVZhcjxUPiB8IHN0cmluZyB8IFN0cmluZ1Byb3h5KTogU3RyaW5nUHJveHlcclxuICAgIHtcclxuICAgICAgICBsZXQgdmFyTmFtZSA9IHR5cGVvZiBjdXN0b21WYXIgPT09IFwic3RyaW5nXCIgPyBjdXN0b21WYXIgOiAoY3VzdG9tVmFyIGFzIEN1c3RvbVZhcjxUPikudmFyTmFtZTtcclxuICAgICAgICBsZXQgcyA9IGB2YXIoLS0ke3Zhck5hbWV9YDtcclxuICAgICAgICBpZiAoZmFsbGJhY2tWYWx1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChmYWxsYmFja1ZhbHVlIGluc3RhbmNlb2YgQ3VzdG9tVmFyKVxyXG4gICAgICAgICAgICAgICAgcyArPSB0aGlzLnZhciggZmFsbGJhY2tWYWx1ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBmYWxsYmFja1ZhbHVlID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcyArPSBmYWxsYmFja1ZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGZhbGxiYWNrVmFsdWUgaW5zdGFuY2VvZiBTdHJpbmdQcm94eSB8fCB0eXBlb2YgY3VzdG9tVmFyID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgICAgICAgICAgcyArPSBmYWxsYmFja1ZhbHVlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzICs9IHN0eWxlUHJvcFRvQ3NzU3RyaW5nKCAoY3VzdG9tVmFyIGFzIEN1c3RvbVZhcjxUPikudGVtcGxhdGVQcm9wTmFtZSwgZmFsbGJhY2tWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KCBzICsgXCIpXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgY29udGFpbnMgYmFzaWMgdHlwZXMgYW5kIGZ1bmN0aW9ucyB1c2VkIHRvIGRlZmluZSBDU1MgcHJvcGVydHkgdHlwZXMuXHJcbiAqL1xyXG5pbXBvcnQge3RzaH0gZnJvbSBcIi4vdHNoXCJcclxuXHJcblxyXG4vKipcclxuICogU3R5bGUgdmFsdWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIChhbG1vc3QpIGFueSBwcm9wZXJ0eVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQmFzZV9TdHlsZVR5cGUgPSBcImluaGVyaXRcIiB8IFwiaW5pdGlhbFwiIHwgXCJ1bnNldFwiIHwgU3RyaW5nUHJveHk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgU3RyaW5nUHJveHkgY2xhc3MgZW5jYXBzdWxhdGVzIGEgc3RyaW5nLCB3aGljaCBpcyByZXR1cm5lZCB2aWEgdGhlIHN0YW5kYXJkIHRvU3RyaW5nKClcclxuICogbWV0aG9kLiBBbGwgQ1NTIHByb3BlcnRpZXMgc2hvdWxkIGFjY2VwdCBzdHJpbmcgYXMgdGhlIHR5cGUgb2YgdGhlaXIgdmFsdWUgZXZlbiBpZiBub3JtYWxseVxyXG4gKiB0aGV5IGFjY2VwdCBvdGhlciB0eXBlcyAoZS5nIGEgc2V0IG9mIHN0cmluZyBsaXRlcmFscyBhcyBgXCJyb3dcIiB8IFwiY29sdW1uXCJgIGZvciB0aGVcclxuICogZmxleC1kaXJjdGlvbikgcHJvcGVydHkuIFRoaXMgaXMgYmVjYXVzZSBpbiBhZGRpdGlvbiB0byB0aGVpciBub3JtYWwgdmFsdWVzIGFueSBwcm9wZXJ0eVxyXG4gKiBjYW4gdXNlIGN1c3RvbSBDU1MgcHJvcGVydHkgaW4gdGhlIGZvcm0gYHZhcigtLXByb3BuYW1lKWAuIEhvd2V2ZXIsIGlmIHdlIGFkZCBzdHJpbmcgdHlwZVxyXG4gKiB0byB0aGUgc2V0IG9mIHN0cmluZyBsaXRlcmFscyAoZS5nLiBgXCJyb3dcIiB8IFwiY29sdW1uXCIgfCBzdHJpbmdgKSwgdGhpcyB0aHJvd3Mgb2ZmIHRoZVxyXG4gKiBJbnRlbGxpc2Vuc2UgYW5kIGl0IGRvZXNuJ3QgcHJvbXB0IGRldmVsb3BlcnMgZm9yIHRoZSBwb3NzaWJsZSB2YWx1ZXMuIFRoZSBTdHJpbmdQcm94eVxyXG4gKiBjYW4gYmUgdXNlZCBpbnN0ZWFkIG9mIHN0cmluZyAoZS5nLiBgXCJyb3dcIiB8IFwiY29sdW1uXCIgfCBTdHJpbmdQcm94eWApIGFuZCB0aGlzIHNvbHZlc1xyXG4gKiB0aGUgSW50ZWxsaXNlbnNlIGlzc3VlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0cmluZ1Byb3h5XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCBzPzogc3RyaW5nIHwgU3RyaW5nUHJveHkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zID0gdHlwZW9mIHMgPT09IFwic3RyaW5nXCIgPyBzIDogcyAhPSBudWxsID8gcy50b1N0cmluZygpIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zOyB9XHJcblxyXG4gICAgcHJpdmF0ZSBzOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBTdHJpbmdQcm94eSBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gc3RyaW5nIG9yIGFub3RoZXIgU3RyaW5nUHJveHkgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhdyggczogc3RyaW5nIHwgU3RyaW5nUHJveHkpOiBTdHJpbmdQcm94eVxyXG57XHJcbiAgICByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVW5pdFZhbHVlIGNsYXNzIGVuY2Fwc3VsYXRlcyBhIG51bWVyaWMgdmFsdWUgYW5kIGEgdW5pdC4gSXQgaXMgdXNlZCB0byByZXByZXNlbnRzIHN1Y2hcclxuICogdmFsdWVzIGFzIGxlbmd0aHMsIGFuZ2xlcywgdGltZSwgZXRjLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFVuaXRWYWx1ZSBleHRlbmRzIFN0cmluZ1Byb3h5XHJcbntcclxuICAgIGNvbnN0cnVjdG9yKCB2YWx1ZT86IG51bWJlciwgdW5pdD86IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVuaXQgPSB1bml0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy52YWx1ZSArIHRoaXMudW5pdDsgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIHVuaXQ6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIFN0cmluZ1Byb3h5IG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIHVzZSBvZiB0aGUgZ2l2ZW4gQ1NTIGN1c3RvbSBwcm9wZXJ0eS4gVXNlIGl0XHJcbiAqIGFzIGluIHRoZSBmb2xsb3dpbmc6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogc3R5bGU9e3sgY29sb3I6IHVzZVZhcigtLWRlZmF1bHQtY29sb3IsIGJsYWNrKSB9fVxyXG4gKiBgYGBcclxuICogQHBhcmFtIHZhck5hbWVcclxuICogQHBhcmFtIGZhbGxiYWNrVmFsdWVzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZhciggdmFyTmFtZTogc3RyaW5nLCBmYWxsYmFja1ZhbHVlPzogc3RyaW5nIHwgU3RyaW5nUHJveHkpOiBTdHJpbmdQcm94eVxyXG57XHJcbiAgICBsZXQgcyA9IGB2YXIoLS0ke3Zhck5hbWV9YDtcclxuICAgIGlmIChmYWxsYmFja1ZhbHVlKVxyXG4gICAgICAgIHMgKz0gXCIsXCIgKyBmYWxsYmFja1ZhbHVlO1xyXG5cclxuICAgIHMgKz0gXCIpXCI7XHJcbiAgICByZXR1cm4gbmV3IFN0cmluZ1Byb3h5KHMpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG4gKiBjYXBpdGFsaXplZCBhbmQgZGFzaGVzIGFyZSByZW1vdmVkLlxyXG4gKiBAcGFyYW0gZGFzaFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRhc2hUb0NhbWVsKCBkYXNoOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG5cdGlmICghZGFzaClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cclxuXHRyZXR1cm4gZGFzaC5yZXBsYWNlKCAvLShbYS16QS1aXSkvZywgKHgsICQxKSA9PiAkMS50b1VwcGVyQ2FzZSgpKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZS5cclxuICogQHBhcmFtIGNhbWVsXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0Rhc2goIGNhbWVsOiBzdHJpbmcpOiBzdHJpbmdcclxue1xyXG4gIHJldHVybiBjYW1lbC5yZXBsYWNlKCAvKFthLXpBLVpdKSg/PVtBLVpdKS9nLCAnJDEtJykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogR2VuZXJpYyBmdW5jdGlvbiB0aGF0IGNvbnZlcnRzIGFuIGFycmF5IG9mIHRoZSBnaXZlbiB0eXBldG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbiAqIEVsZW1lbnRzIG9mIHRoZSBhcnJheSBhcmUgY29udmVydGVkIHRvIHN0cmluZ3MgdXNpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gdmFsIEFycmF5IG9mIHRpbWUgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlUb0Nzc1N0cmluZzxUPiggdmFsOiBUW10sIGZ1bmM6ICh2OiBUKSA9PiBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIsXCIpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgZm9yKCBsZXQgdiBvZiB2YWwpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBmdW5jKCB2KTtcclxuICAgICAgICBpZiAoaXRlbSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHMgKz0gc2VwYXJhdG9yO1xyXG5cclxuICAgICAgICAgICAgcyArPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcztcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQ29udmVydHMgYXJyYXkgb2Ygc3RyaW5nIHZhbHVlcyB0byBhIHNpbmdsZSBzdHJpbmcgdXNpbmcgdGhlIGdpdmVuIHNlcGFyYXRvci5cclxuICogQHBhcmFtIHZhbCBBcnJheSBvZiBzdHJpbmcgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nQXJyYXlUb0Nzc1N0cmluZyggdmFsOiAoc3RyaW5nIHwgQmFzZV9TdHlsZVR5cGUpW10sIHNlcGFyYXRvcjogc3RyaW5nID0gXCIsXCIpOiBzdHJpbmdcclxue1xyXG4gICAgbGV0IHMgPSBcIlwiO1xyXG4gICAgZm9yKCBsZXQgdiBvZiB2YWwpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHYgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICBzICs9IHNlcGFyYXRvcjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICAgICAgICAgIHMgKz0gdjtcclxuICAgICAgICAgICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgICAgICAgICBzICs9IHYudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLyoqXHJcbi8vICAqIENvbnZlcnRzIGEgdmFsdWUgdGhhdCBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdG8gYSBzaW5nbGUgc3RyaW5nIHVzaW5nXHJcbi8vICAqIHRoZSBnaXZlbiBzZXBhcmF0b3IuXHJcbi8vICAqIEBwYXJhbSB2YWwgU3RyaW5nIHZhbHVlIG9yIGFycmF5IG9mIHN0cmluZyB2YWx1ZXNcclxuLy8gICovXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzdHJpbmdPclN0cmluZ0FycmF5VG9Dc3NTdHJpbmcoIHZhbDogc3RyaW5nW10gfCBzdHJpbmcsIHNlcGFyYXRvcjogc3RyaW5nID0gXCIsXCIpOiBzdHJpbmdcclxuLy8ge1xyXG4vLyAgICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbi8vICAgICAgICAgcmV0dXJuIHZhbDtcclxuLy8gICAgIGVsc2VcclxuLy8gICAgICAgICByZXR1cm4gc3RyaW5nQXJyYXlUb0Nzc1N0cmluZyggdmFsLCBzZXBhcmF0b3IpO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8qKiBUeXBlIGZvciBzaW5nbGUgbnVtYmVyIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZU51bWJlcl9TdHlsZVR5cGUgPSBudW1iZXIgfCBzdHJpbmcgfCBCYXNlX1N0eWxlVHlwZTtcclxuXHJcbi8qKiBUeXBlIGZvciBtdWx0aS1wYXJ0IG51bWJlciBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aU51bWJlcl9TdHlsZVR5cGUgPSBTaW5nbGVOdW1iZXJfU3R5bGVUeXBlIHwgU2luZ2xlTnVtYmVyX1N0eWxlVHlwZVtdIHwgc3RyaW5nO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBudW1iZXIgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgU2luZ2xlIG51bWJlciBvciBzdHJpbmcgdmFsdWVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVOdW1iZXJUb0Nzc1N0cmluZyggdmFsOiBTaW5nbGVOdW1iZXJfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBTdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcGFydCBudW1iZXIgc3R5bGUgdmFsdWUgdG8gdGhlIENTUyBzdHJpbmcuXHJcbiAqIEBwYXJhbSB2YWwgQW5pbWF0aW9uIGRlbGF5IHZhbHVlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlOdW1iZXJUb0Nzc1N0cmluZyggdmFsOiBNdWx0aU51bWJlcl9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHNpbmdsZU51bWJlclRvQ3NzU3RyaW5nKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGxlbmd0aCBvciBwZXJjZW50YWdlLiBMZW5ndGggY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gMjBweCBvciA3NSUpXHJcbiAqICAgLSBudW1iZXI6IHplcm8gaXMgdHJlYXRlZCBhcyBub3QgaGF2aW5nIGFueSBzdWZmaXg7IGludGVnZXIgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBwaXhlbHM7XHJcbiAqICAgICBmbG9hdGluZyBudW1iZXJzIGFyZSB0cmVhdGVkIGFzIHBlcmNlbnRzOiAwLjAgdG8gMS4wLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSA9IFwiYXV0b1wiIHwgbnVtYmVyIHwgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBsZW5ndGggb3IgcGVyY2VudGFnZSBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aUxlbmd0aF9TdHlsZVR5cGUgPSBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlIHwgU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZVtdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGxlbmd0aCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIExlbmd0aCBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyggdmFsOiBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBTdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiB0c2gubGVuKCB2YWwpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydHMgbXVsdGktcGFydCBsZW5ndGggb3IgcGVyY2VudGFnZSBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBBcnJheSBvZiBsZW5ndGggc3R5bGUgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlMZW5ndGhUb0Nzc1N0cmluZyggdmFsOiBNdWx0aUxlbmd0aF9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSlcclxuICAgICAgICByZXR1cm4gYXJyYXlUb0Nzc1N0cmluZyggdmFsLCBzaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1Mgc2l6ZSwgd2hpY2ggY2FuIGJlIGV4cHJlc3NlZCBhcyBvbmUgb3IgdHdvIHZhbHVlcyBlYWNoIG9mIGVhY2ggaXMgb2YgdGhlXHJcbiAqIExlbmd0aF9TdHlsZVR5cGUgdHlwZS4gVHdvIHZhbHVlcyBhcmUgZ2l2ZW4gYXMgYW4gb2JqZWN0IHdpdGggJ3cnICh3aWR0aCkgYW5kICdoJyAoaGVpZ2h0KVxyXG4gKiBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlU2l6ZV9TdHlsZVR5cGUgPSBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlIHwgeyB3OiBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlOyBoOiBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlIH07XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBzaXplIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpU2l6ZV9TdHlsZVR5cGUgPSBTaW5nbGVTaXplX1N0eWxlVHlwZSB8IFNpbmdsZVNpemVfU3R5bGVUeXBlW107XHJcblxyXG4vKipcclxuICogQ29udmVydHMgc2l6ZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBTaXplIGFzIGEgc3R5bGUgcHJvcGVydHkgdHlwZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpbmdsZVNpemVUb0Nzc1N0cmluZyggdmFsOiBTaW5nbGVTaXplX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIilcclxuICAgICAgICByZXR1cm4gb2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsIFtcIndcIiwgc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmddLCBbXCJoXCIsIHNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nXSk7XHJcbiAgICAvLyBlbHNlIGlmIChBcnJheS5pc0FycmF5KCB2YWwpKVxyXG4gICAgLy8gICAgIHJldHVybiBsZW5ndGhUb0Nzc1N0cmluZyggdmFsWzBdKSArIFwiIFwiICsgbGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbFsxXSk7XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiBzaW5nbGVMZW5ndGhUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIG11bHRpLXBhcnQgc2l6ZSBzdHlsZSBwcm9wZXJ0eSB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBBcnJheSBvZiBsZW5ndGggc3R5bGUgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlTaXplVG9Dc3NTdHJpbmcoIHZhbDogTXVsdGlTaXplX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHNpbmdsZVNpemVUb0Nzc1N0cmluZyk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZVNpemVUb0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIGFuZ2xlLiBMZW5ndGggY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gMjBkZWcgb3IgMS40cmFkKVxyXG4gKiAgIC0gbnVtYmVyOiB6ZXJvIGlzIHRyZWF0ZWQgYXMgbm90IGhhdmluZyBhbnkgc3VmZml4OyBpbnRlZ2VyIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgZGVncmVlcztcclxuICogICAgIGZsb2F0aW5nIG51bWJlcnMgYXJlIHRyZWF0ZWQgYXMgcmFkaWFucy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZUFuZ2xlX1N0eWxlVHlwZSA9IG51bWJlciB8IEJhc2VfU3R5bGVUeXBlO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGxlbmd0aCBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIExlbmd0aCBhcyBhIHN0eWxlIHByb3BlcnR5IHR5cGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVBbmdsZVRvQ3NzU3RyaW5nKCB2YWw6IFNpbmdsZUFuZ2xlX1N0eWxlVHlwZSk6IHN0cmluZ1xyXG57XHJcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIilcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG5cdCAgICByZXR1cm4gdHNoLmFuZ2xlKCB2YWwpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIGZvciBDU1MgcG9zaXRpb24sIHdoaWNoIGNhbiBiZSBleHByZXNzZWQgYXMgb25lIG9yIHR3byBvciAzIG9yIDQgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2luZ2xlUG9zaXRpb25fU3R5bGVUeXBlID0gXCJjZW50ZXJcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJ0b3BcIiB8IFwiYm90dG9tXCIgfCBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlIHxcclxuICAgICAgICAgICAgICAgIHsgeDogXCJjZW50ZXJcIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZTsgeTogXCJjZW50ZXJcIiB8IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgU2luZ2xlTGVuZ3RoX1N0eWxlVHlwZSB9IHxcclxuICAgICAgICAgICAgICAgIHsgeGVkZ2U6IHN0cmluZzsgeD86IFNpbmdsZUxlbmd0aF9TdHlsZVR5cGU7IHllZGdlOiBzdHJpbmc7IHk/OiBTaW5nbGVMZW5ndGhfU3R5bGVUeXBlIH0gfFxyXG4gICAgICAgICAgICAgICAgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCBwb3NpdGlvbiBzdHlsZSBwcm9wZXJ0eSAqL1xyXG5leHBvcnQgdHlwZSBNdWx0aVBvc2l0aW9uX1N0eWxlVHlwZSA9IFNpbmdsZVBvc2l0aW9uX1N0eWxlVHlwZSB8IFNpbmdsZVBvc2l0aW9uX1N0eWxlVHlwZVtdO1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNpbmdsZSBwb3NpdGlvbiBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFNpemUgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gIHNpbmdsZVBvc2l0aW9uVG9Dc3NTdHJpbmcoIHZhbDogU2luZ2xlUG9zaXRpb25fU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBTdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChcInhlZGdlXCIgaW4gdmFsKVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0VG9Dc3NTdHJpbmcoIHZhbCwgZmFsc2UsIFwieGVkZ2VcIiwgW1wieFwiLCBzaW5nbGVMZW5ndGhUb0Nzc1N0cmluZ10sIFwieWVkZ2VcIiwgW1wieVwiLCBzaW5nbGVMZW5ndGhUb0Nzc1N0cmluZ10pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFRvQ3NzU3RyaW5nKCB2YWwsIGZhbHNlLCBbXCJ4XCIsIHNpbmdsZUxlbmd0aFRvQ3NzU3RyaW5nXSwgW1wieVwiLCBzaW5nbGVMZW5ndGhUb0Nzc1N0cmluZ10pO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG5cdCAgICByZXR1cm4gc2luZ2xlTGVuZ3RoVG9Dc3NTdHJpbmcoIHZhbCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBtdWx0aS1wYXJ0IHBvc2l0aW9uIHN0eWxlIHZhbHVlcyB0byB0aGUgQ1NTIHN0cmluZy5cclxuICogQHBhcmFtIHZhbCBBcnJheSBvZiBsZW5ndGggc3R5bGUgdmFsdWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlQb3NpdGlvblRvQ3NzU3RyaW5nKCB2YWw6IE11bHRpUG9zaXRpb25fU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpXHJcbiAgICAgICAgcmV0dXJuIGFycmF5VG9Dc3NTdHJpbmcoIHZhbCwgIHNpbmdsZVBvc2l0aW9uVG9Dc3NTdHJpbmcpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiAgc2luZ2xlUG9zaXRpb25Ub0Nzc1N0cmluZyggdmFsKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBmb3IgQ1NTIHRpbWUuIFRpbWUgY2FuIGJlIHJlcHJlc2VudGVkIHVzaW5nIHRoZSBmb2xsb3dpbmcgdHlwZXM6XHJcbiAqICAgLSBzdHJpbmcgKGUuZy4gMnMgb3IgMjUwbXMpXHJcbiAqICAgLSBudW1iZXI6IGludGVnZXIgbnVtYmVycyBhcmUgdHJlYXRlZCBhcyBtaWxsaXNlY29uZHMgd2hpbGUgZmxvYXRpbmcgbnVtYmVycyBhcmUgdHJlYXRlZFxyXG4gKiAgICAgYXMgc2Vjb25kcy5cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpbmdsZVRpbWVfU3R5bGVUeXBlID0gbnVtYmVyIHwgQmFzZV9TdHlsZVR5cGU7XHJcblxyXG4vKiogVHlwZSBmb3IgbXVsdGktcGFydCB0aW1lIHN0eWxlIHByb3BlcnR5ICovXHJcbmV4cG9ydCB0eXBlIE11bHRpVGltZV9TdHlsZVR5cGUgPSBTaW5nbGVUaW1lX1N0eWxlVHlwZSB8IFNpbmdsZVRpbWVfU3R5bGVUeXBlW107XHJcblxyXG4vKipcclxuICogQ29udmVydHMgdGltZSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIFRpbWUgYXMgYSBzdHlsZSBwcm9wZXJ0eSB0eXBlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2luZ2xlVGltZVRvQ3NzU3RyaW5nKCB2YWw6IFNpbmdsZVRpbWVfU3R5bGVUeXBlKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBTdHJpbmdQcm94eSlcclxuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKCk7XHJcbiAgICBlbHNlXHJcblx0ICAgIHJldHVybiB0c2gudGltZSggdmFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGFuaW1hdGlvbiBkZWxheSBzdHlsZSB2YWx1ZSB0byB0aGUgQ1NTIHRpbWUgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIEFuaW1hdGlvbiBkZWxheSB2YWx1ZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpVGltZVRvQ3NzU3RyaW5nKCB2YWw6IE11bHRpVGltZV9TdHlsZVR5cGUpOiBzdHJpbmdcclxue1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV0dXJuIHRzaC50aW1lKCB2YWwpO1xyXG4gICAgZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgU3RyaW5nUHJveHkpXHJcbiAgICAgICAgcmV0dXJuIHZhbC50b1N0cmluZygpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiBhcnJheVRvQ3NzU3RyaW5nKCB2YWwsIHNpbmdsZVRpbWVUb0Nzc1N0cmluZyk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHRoZSBnaXZlbiBvYmplY3QgdG8gYSBDU1Mgc3RyaW5nLlxyXG4gKiBAcGFyYW0gdmFsIE9iamVjdCB0byBjb252ZXJ0IHRvIHN0cmluZy5cclxuICogQHBhcmFtIHVzZVByb3BOYW1lcyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGUgbmFtZXMgb2YgdGhlIG9iamVjdCdzIHByb3BydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy5cclxuICogQHBhcmFtIHByb3BzQW5kRnVuY3MgQXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIG9wdGlvbmFsbHkgZnVuY3Rpb25zLiBUaGUgb3JkZXIgb2YgdGhlIG5hbWVzIGRldGVybWluZXMgaW5cclxuICogICAgIHdoaWNoIG9wcmRlciB0aGUgcHJvcGVydGllcyBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHN0cmluZy4gSWYgYSBmdW5jdGlvbiBpcyBwcmVzZW50IGZvciB0aGUgcHJvcGVydHksXHJcbiAqICAgICBpdCB3aWxsIGJlIHVzZWQgdG8gY29udmVydCB0aGUgcHJvcGVydHkncyB2YWx1ZSB0byB0aGUgc3RyaW5nLiBJZiBhIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50LCB0aGVuIHRoZVxyXG4gKiAgICAgcHJvcGVydHkgdmFsdWUgc2hvdWxkIGJlIGNvbnZlcnRlZCB0byB0aGUgc3RyaW5nIHVzaW5nIHRoZSB0b1N0cmluZyBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2JqZWN0VG9Dc3NTdHJpbmcoIHZhbDogYW55LCB1c2VQcm9wTmFtZXM6IGJvb2xlYW4sIC4uLnByb3BzQW5kRnVuY3M6IChzdHJpbmcgfCBbc3RyaW5nLCAodmFsOiBhbnkpID0+IHN0cmluZ10pW10gKTogc3RyaW5nXHJcbntcclxuICAgIGlmICh2YWwgPT0gbnVsbCB8fCBwcm9wc0FuZEZ1bmNzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcblx0bGV0IHMgPSBcIlwiO1xyXG5cclxuICAgIGZvciggbGV0IHByb3BBbmRGdW5jIGluIHByb3BzQW5kRnVuY3MpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHByb3BOYW1lID0gdHlwZW9mIHByb3BBbmRGdW5jID09PSBcInN0cmluZ1wiID8gcHJvcEFuZEZ1bmMgOiBwcm9wQW5kRnVuY1swXTtcclxuICAgICAgICBsZXQgZnVuYyA9IHR5cGVvZiBwcm9wQW5kRnVuYyA9PT0gXCJzdHJpbmdcIiA/IHVuZGVmaW5lZCA6IHByb3BBbmRGdW5jWzFdO1xyXG5cclxuICAgICAgICBsZXQgcHJvcFZhbCA9IHZhbFtwcm9wTmFtZV07XHJcbiAgICAgICAgaWYgKHByb3BWYWwgPT0gbnVsbClcclxuICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgIGlmIChzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgIHMgKz0gXCIgXCI7XHJcblxyXG4gICAgICAgIGlmICh1c2VQcm9wTmFtZXMpXHJcbiAgICAgICAgICAgIHMgKz0gcHJvcE5hbWU7XHJcblxyXG4gICAgICAgIGlmIChmdW5jKVxyXG4gICAgICAgICAgICBzICs9IFwiIFwiICsgZnVuYyggcHJvcFZhbCk7XHJcbiAgICAgICAgZWxzZSBpZiAocHJvcFZhbCAhPSBudWxsKVxyXG4gICAgICAgICAgICBzICs9IFwiIFwiICsgcHJvcFZhbDtcclxuICAgIH1cclxuXHJcblx0cmV0dXJuIHM7XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==