(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mimbl"] = factory();
	else
		root["mimbl"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/mimblTypes.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/LocalStyles.ts":
/*!********************************!*\
  !*** ./src/api/LocalStyles.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./src/api/mim.ts");
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The ComponentWithLocalStyles class is a base class for components that define local CSS styles.
// When this component is mounted it creates a new <style> element (within the <head> element).
// All class names and variable names defined within this style will have a unique ID added to
// them in order to avoid duplication of names among other components (of the same or of different
// type. This class also publishes a service implementing the ILocalStyleService
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ComponentWithLocalStyles extends mim.Component {
    constructor(props = null) {
        super(props);
        this.m_uniqueID = (Math.floor(Math.random() * 1000000000)).toString();
        this.rules = new Map();
        this.ruleNames = [];
        // create <style> element in the <head>
        this.styleElm = document.createElement("style");
        this.styleElm.id = this.m_uniqueID;
        document.head.appendChild(this.styleElm);
        //// WebKit hack :(
        //this.styleElm.appendChild(document.createTextNode(""));
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ILocalStyleService implementation.
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Returns the unique ID used to decorate CSS class and variable names to make them unique.
    get uniqueID() { return this.m_uniqueID; }
    // Retrurns CSS class or variable name decorated with a unique ID.
    decorateName(name) {
        return name + this.m_uniqueID;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Public interface.
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // Creates style rule.
    createStyleRule(name, selector, props) {
        // create dummy style rule
        let info = this.createDummyRule(name, "dummy {}");
        let cssomRule = info.cssomRule;
        // create style rule object
        let mcssStyleRule = new MCssStyleRule(this.uniqueID, cssomRule);
        if (selector)
            mcssStyleRule.setSelector(selector);
        if (props)
            mcssStyleRule.setProperties(props);
        info.mcssRule = mcssStyleRule;
        return mcssStyleRule;
    }
    // Returns a rule with the given name.
    getRule(name) {
        let info = this.rules.get(name);
        return info === undefined ? undefined : info.mcssRule;
    }
    // Removes a rule with the given name.
    removeRule(name) {
    }
    willMount() {
        this.vn.publishService("LocalStyles", this);
    }
    willUnmount() {
        this.vn.unpublishService("LocalStyles");
        this.styleElm.remove();
    }
    // Creates style rule.
    createDummyRule(name, ruleText) {
        // check if we already have a rule with this name
        let info = this.rules.get(name);
        if (info !== undefined)
            this.removeRule(name);
        // the new rule will becomes the last in the array of rules
        let index = this.ruleNames.length;
        // create dummy style rule
        let sheet = this.styleElm.sheet;
        sheet.insertRule(ruleText, index);
        let cssomRule = sheet.rules[index];
        // add the rule to our internal structures
        this.ruleNames.push(name);
        info = { mcssRule: null, cssomRule, index };
        this.rules.set(name, info);
        return info;
    }
}
exports.ComponentWithLocalStyles = ComponentWithLocalStyles;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The MCssRule class is a base class for objects represented different types of CSS rules that
// are created by the ComponentWithLocalStyles component. This object simply keeps the unique
// ID that should be used by derived classes when creating class and variable names so that they
// are globally unique.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class MCssRuleBase {
    constructor(uniqueID, cssomRule) {
        this.uniqueID = uniqueID;
        this.cssomRule = cssomRule;
    }
    // Appends unique ID to the given name.
    decorate(name) {
        return name + this.uniqueID;
    }
    // Replaces the marker "(*)" in the given name with the unique ID
    replace(name) {
        return name.replace("(*)", this.uniqueID);
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The MCssStyleRule interface represents a style rule that contains a selector and a set of
// style property name-value pairs.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class MCssStyleRule extends MCssRuleBase {
    constructor(uniqueID, cssomRule) {
        super(uniqueID, cssomRule);
    }
    // Sets the rule selector. The string can contain the (*) marker, which will be substituted
    // with the unique ID.
    setSelector(selector) {
        this.cssomRule.selectorText = this.replace(selector);
    }
    // Sets value for a style property. Both property name and property value can use the
    // (*) marker, which will be substituted with the unique ID.
    setProperty(propName, propVal, important) {
        this.cssomRule.style.setProperty(this.replace(propName), this.replace(propVal), important ? "important" : undefined);
    }
    // Sets several style properties. Both property names and property values can use the
    // (*) marker, which will be substituted with the unique ID.
    setProperties(props) {
        if (!props)
            return;
        for (let propName in props)
            this.cssomRule.style[this.replace(propName)] = this.replace(props[propName]);
    }
    // Sets value for a style property. Property name can use the (*) marker, which will be
    // substituted with the unique ID.
    removeProperty(propName) {
        this.cssomRule.style.removeProperty(this.replace(propName));
    }
}


/***/ }),

/***/ "./src/api/mim.ts":
/*!************************!*\
  !*** ./src/api/mim.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventSlot_1 = __webpack_require__(/*! ../utils/EventSlot */ "./src/utils/EventSlot.ts");
/**
 * Reference class to use whenever a reference to an object is needed - for example, with JSX `ref`
 * attributes and services.
 */
class Ref {
    constructor(listener, initialReferene) {
        /** Event that is fired when the referenced value changes */
        this.changedEvent = new EventSlot_1.EventSlot();
        if (listener !== undefined)
            this.changedEvent.add(listener);
        this._r = initialReferene;
    }
    /** Adds a callback that will be invoked when the value of the reference changes. */
    addListener(listener) {
        this.changedEvent.add(listener);
    }
    /** Removes a callback that was added with addListener. */
    removeListener(listener) {
        this.changedEvent.remove(listener);
    }
    /** Get accessor for the reference value */
    get r() { return this._r; }
    /** Set accessor for the reference value */
    set r(newRef) {
        if (this._r !== newRef) {
            this._r = newRef;
            this.changedEvent.fire(newRef);
        }
    }
    /** Clears the reference value and also clears all all registered listeners */
    clear() {
        this._r = undefined;
        this.changedEvent.clear();
    }
}
exports.Ref = Ref;
/**
 * Helper function to set the value of the reference that takes care of the different types of
 * references. The optional `onlyIf` parameter may specify a value so that only if the reference
 * currently has the same value it will be replaced. This might be needed to not clear a
 * reference if it already points to a different object.
 * @param ref [[Ref]] object to which the new value will be set
 * @param val Reference value to set to the Ref object
 * @param onlyIf An optional value to which to compare the current (old) value of the reference.
 * The new value will be set only if the old value equals the `onlyIf` value.
 */
function setRef(ref, val, onlyIf) {
    if (typeof ref === "object") {
        let refObj = ref;
        if (onlyIf === undefined || refObj.r === onlyIf)
            refObj.r = val;
    }
    else if (typeof ref === "function")
        ref(val);
}
exports.setRef = setRef;
/**
 * Decorator function for defining properties with a set method that calls the updateMe method
 * whenever the property value changes.
 *	```tsx
 *	class Child extends Component
 *	{
 *		@mim.updatable text: string = "Hello!";
 *		render()
 *		{
 *	 		return <div>{text}</div>
 *		}
 *	}
 *
 *	class Parent extends Component
 *	{
 *		child = new Child();
 *		render()
 *		{
 *			return <div click={() => this.child.text += " again"}>{this.child}</div>
 *		}
 *	}
 *	```
 * In the above example, the Child component will be re-rendered when its `text` property changes.
 *
 * @param target
 * @param name
 */
function updatable(target, name) {
    let attrName = "_m_" + name;
    Object.defineProperty(target, name, {
        set(val) {
            if (this[attrName] !== val) {
                this[attrName] = val;
                let vn = this.vn;
                if (vn && !vn.updateRequested)
                    this.vn.requestUpdate();
            }
        },
        get() { return this[attrName]; }
    });
}
exports.updatable = updatable;
/**
 * An artificial "Fragment" component that is only used as a temporary collection of other items
 * in places where JSX only allows a single item. Our JSX factory function creates a virtual node
 * for each of its children and the function is never actually called. This function is only needed
 * because currently TypeScript doesn't allow the `<>` fragment notation if a custom JSX factory
 * function is used.
 *
 * Use it as follows:
 * ```tsx
 *	import * as mim from "mimbl"
 *	.....
 *	render()
 *	{
 *		return <mim.Fragment>
 *			<div1/>
 *			<div2/>
 *			<div3/>
 *		</mim.Fragment>
 *	}
  ```

 * @param props
 */
function Fragment(props) { }
exports.Fragment = Fragment;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Utility functions for determining whether an element is an SVG.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Determines whether the given element is one of the elements from the SVG spec; that is, <svg>
 * or any other from SVG.
 * @param elm Element to test
 */
function isSvg(elm) {
    return "ownerSVGElement" in elm;
}
exports.isSvg = isSvg;
/**
 * Determines whether the given element is the <svg> element.
 * @param elm  Element to test
 */
function isSvgSvg(elm) {
    return elm.tagName === "svg";
    // return (elm as any).ownerSVGElement === null;
}
exports.isSvgSvg = isSvgSvg;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Definition of mim.jsx function - JSX Factory
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const ContentFuncs_1 = __webpack_require__(/*! ../core/ContentFuncs */ "./src/core/ContentFuncs.ts");
/**
 * JSX Factory function. In order for this function to be invoked by the TypeScript compiler, the
 * tsconfig.json must have the following option:
 *
 * ```json
 * "compilerOptions":
 * {
 *     "jsx": "react",
 *     "jsxFactory": "mim.jsx"
 * }
 * ```
 *
 * The .tsx files must import the mimbl module as mim: import * as mim from "mimbl"
 * @param tag
 * @param props
 * @param children
 */
function jsx(tag, props, ...children) {
    return ContentFuncs_1.createNodesFromJSX(tag, props, children);
}
exports.jsx = jsx;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Provide implementation for the registerCustomAttribute exported function.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const ElmAttr_1 = __webpack_require__(/*! ../utils/ElmAttr */ "./src/utils/ElmAttr.ts");
/**
 * Registers custom attribute handler class for the given property name.
 * @param propName name of the custom attribute
 * @param factory custom attribute class
 */
function registerCustomAttribute(attrName, handlerClass) {
    ElmAttr_1.ElmAttr.registerProperty(attrName, { type: 3 /* CustomAttr */, handlerClass });
}
exports.registerCustomAttribute = registerCustomAttribute;
/**
 * Registers custom event for the given property name.
 * @param propName name of the custom event
 */
function registerCustomEvent(eventName) {
    ElmAttr_1.ElmAttr.registerProperty(eventName, { type: 2 /* Event */ });
}
exports.registerCustomEvent = registerCustomEvent;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Provide implementation of utility functions.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const utils = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/**
 * Combines arbitrary number of Slice objects merging classes, styles, properties and content
 * @param slices Array of Slice objects to merge.
 * @returns Resultant Slice object.
 */
function mergeSlices(...slices) {
    return utils.mergeSlices(...slices);
}
exports.mergeSlices = mergeSlices;
/**
 * Combines arbitrary number of Slice objects merging classes, styles, properties and content
 * into the given resultant slice.
 * @param resSlice Resultant Slice object.
 * @param slices Array of Slice objects to merge.
 */
function mergeSlicesTo(resSlice, ...slices) {
    utils.mergeSlicesTo(resSlice, ...slices);
}
exports.mergeSlicesTo = mergeSlicesTo;
/**
 * Combines arbitrary number of class properties merging later into the earlier ones. This method
 * returns a string or undefined - if all classNames were undefined.
 * @param classNames Array of strings or string arrays with class names
 * @returns Resultant class string.
 */
function mergeClasses(...classNames) {
    return utils.mergeClasses(...classNames);
}
exports.mergeClasses = mergeClasses;
/**
 * Combines arbitrary number of style objects merging later into the earlier ones. This method
 * always returns an object - even if empty
 * @param styles Array of style objects to merge.
 */
function mergeStyles(...styles) {
    return utils.mergeStyles(...styles);
}
exports.mergeStyles = mergeStyles;
/**
 * Combines arbitrary number of style objects merging later into the first one.
 * @param resStyle Resultant style object
 * @param styles Array of style objects to merge.
 */
function mergeStylesTo(resStyle, ...styles) {
    utils.mergeStylesTo(resStyle, ...styles);
}
exports.mergeStylesTo = mergeStylesTo;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Callback wrapping
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const Scheduler_1 = __webpack_require__(/*! ../core/Scheduler */ "./src/core/Scheduler.ts");
/**
 * Wraps the given callback and returns a wrapper function which is executed in the context of the
 * given virtual node. The given "that" object will be the value of "this" when the callback is
 * executed. If the original callback throws an exception, it is processed by the Mimbl error
 * handling mechanism so that the exception bubles from this virtual node up the hierarchy until a
 * node/component that knows to handle errors is found. Note that the VN can be null/undefined;
 * however, in this case if the exception is caught it will not be handled by the Mimbl error
 * handling mechanism.
 * @param callback Callback to be wrapped.
 * @param that Object that will be the value of "this" when the callback is executed.
 * @param vn Virtual node in whose context the callback will be executed.
 * @returns The wrapper function that should be used instead of the original callback.
 */
function wrapCallback(callback, that, vn) {
    return Scheduler_1.wrapCallbackWithVN(callback, that, vn);
}
exports.wrapCallback = wrapCallback;
/**
 * Base class for components. Components that derive from this class must implement the render
 * method.
 */
class Component {
    constructor(props) {
        if (props)
            this.props = props;
    }
    /** This method is called by the component to request to be updated. */
    updateMe() {
        if (this.vn)
            this.vn.requestUpdate();
    }
    /**
     * Schedules the given function to be called before any components scheduled to be updated in
     * the Mimbl tick are updated.
     * @param func Function to be called
     * @param that Object that will be used as "this" value when the function is called. If this
     *   parameter is undefined, the component instance will be used (which allows scheduling
     *   regular unbound components' methods). This parameter will be ignored if the function
     *   is already bound or is an arrow function.
     */
    callMeBeforeUpdate(func, that) {
        if (this.vn)
            this.vn.scheduleCallBeforeUpdate(func, that ? that : this);
    }
    /**
     * Schedules the given function to be called after all components scheduled to be updated in
     * the Mimbl tick have already been updated.
     * @param func Function to be called
     * @param that Object that will be used as "this" value when the function is called. If this
     *   parameter is undefined, the component instance will be used (which allows scheduling
     *   regular unbound components' methods). This parameter will be ignored if the the function
     *   is already bound or is an arrow function.
     */
    callMeAfterUpdate(func, that) {
        if (this.vn)
            this.vn.scheduleCallAfterUpdate(func, that ? that : this);
    }
    /**
     * Creates a wrapper function with the same signature as the given callback so that if the original
     * callback throws an exception, it is processed by the Mimbl error handling mechanism so that the
     * exception bubbles from this component up the hierarchy until a component that knows to
     * handle errors is found.
     *
     * Use this method before passing callbacks to document and window event handlers as well as
     * non-DOM objects that use callbacks, e.g. promises. For example:
     *
     * ```typescript
     *	class ResizeMonitor
     *	{
     *		private onWindowResize(e: Event): void {};
     *
     * 		wrapper: (e: Event): void;
     *
     * 		public startResizeMonitoring( vn: IVNode)
     *		{
     *			this.wrapper = vn.wrapCallback( this.onWindowResize, this);
     *			window.addEventListener( "resize", this.wrapper);
     *		}
     *
     * 		public stopResizeMonitoring()
     *		{
     *			window.removeEventListener( "resize", this.wrapper);
     *			this.wrapper = undefined;
     *		}
     *	}
     * ```
     *
     * @param callback Callback to be wrapped
     * @returns Function that has the same signature as the given callback and that should be used
     *     instead of the original callback
     */
    wrapCallback(callback, that) {
        return Scheduler_1.wrapCallbackWithVN(callback, this, this.vn);
    }
}
exports.Component = Component;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// FuncProxy support
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const FuncProxyVN_1 = __webpack_require__(/*! ../core/FuncProxyVN */ "./src/core/FuncProxyVN.ts");
/**
 * The FuncProxy component wraps a function that produces content. Proxies can wrap instance
 * methods of classes that have access to "this" thus allowing a single class to "host" multiple
 * components that can be updated separately. The FuncProxy component is not intended to be
 * created by developers; instead it is only used in its JSX form as the following:
 *
 * ```tsx
 * <FuncProxy func={this.renderSomething} key={...} args={...} thisArg={...} />
 * ```
 *
 * There is a simpler method of specifying a rendering function in JSX, e.g.:
 *
 * ```tsx
 * <div>{this.renderSomething}</div>
 * ```
 *
 * The FuncProxy coponent is needed in the case where one (or more) of the following is true:
 * - There is a need to pass arguments to the function
 * - The same function is used multiple times and keys must be used to distinguish between the
 * invocations.
 * - The value of "this" inside the function is not the component that does the rendering. That
 * is, the function is not a method of this component.
 *
 * FuncProxy has a public static Update method that should be called to
 * cause the rendering mechanism to invoke the function wrapped by the FuncProxy.
 */
class FuncProxy extends Component {
    /**
     * Instances of the FuncProxy component are never actually created; istead. the parameters
     * passed to it via JSX are used by an internal virtual node that handles function
     * invocation.
     */
    constructor(props) { super(props); }
    /** The render method of the FuncProxy component is never actually called */
    render() { }
    /**
     * Request re-rendering of the content produced by the given function by invoking this
     * function. The function must have been previously used in rendering using either
     * <FuncProxy func={} /> JSX construct or a simpler constuct
     * @param func Function to invoke.
     * @param key Value that helps distinguishing between multiple usages of the function.
     * @param args Arguments to be passed to the function.
     */
    static update(func, key, ...args) {
        FuncProxyVN_1.FuncProxyVN.update(func, key, args);
    }
}
exports.FuncProxy = FuncProxy;
/**
 * The Waiting component wraps a Promise and replaces its content when the promise is settled.
 * Before the promise is settled, the component displays an optional "in-progress" content
 * specified in the constructor. If the promise is rejected, the component will either display
 * the "error" content obtained by calling a functions specified in the constructor or if such
 * function is not specified show empty content.
 */
class Waiting extends Component {
    /**
     * Constructs the object
     * @param promise Promise object to wait for
     * @param progressContent Content to display while waiting for the promise
     * @param errorContentFunc Content to display if the promise is rejected
     */
    constructor(promise, progressContent, errorContentFunc) {
        super();
        this.content = progressContent;
        this.watchPromise(promise, errorContentFunc);
    }
    render() {
        return this.content;
    }
    watchPromise(promise, errorContentFunc) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.content = yield promise;
            }
            catch (err) {
                this.content = null;
                if (errorContentFunc !== undefined) {
                    try {
                        this.content = errorContentFunc(err);
                    }
                    catch (anotherErr) {
                    }
                }
            }
        });
    }
}
__decorate([
    updatable
], Waiting.prototype, "content", void 0);
exports.Waiting = Waiting;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Definitions of mount/unmount functions
//
///////////////////////////////////////////////////////////////////////////////////////////////////
const root = __webpack_require__(/*! ../core/RootVN */ "./src/core/RootVN.ts");
/**
 * Renders the given content (usually result of JSX expression) under the given HTML element in a
 * synchronous manner.
 * @param content Content to render.
 * @param anchorDN DOM element under which to render the content. If null or undefined, then
 * render under the document.body tag.
 */
function mountSync(content, anchorDN = null) {
    root.mountRootSync(content, anchorDN);
}
exports.mountSync = mountSync;
// 
/**
 * Removes the content that was originally generated by the mountSync function.
 * @param anchorDN DOM element under which the content was previously rendered.
 */
function unmountSync(anchorDN = null) {
    root.unmountRootSync(anchorDN);
}
exports.unmountSync = unmountSync;
/**
 * Renders the given content (usually result of JSX expression) under the given HTML element
// asynchronously.
 * @param content Content to render.
 * @param anchorDN DOM element under which to render the content. If null or undefined,then
 *				render under the document.body tag.
 */
function mount(content, anchorDN = null) {
    root.mountRoot(content, anchorDN);
}
exports.mount = mount;
/**
 * Removes the content that was originally generated by the mount function.
 * @param anchorDN DOM element under which the content was previously rendered.
 */
function unmount(anchorDN = null) {
    root.unmountRoot(anchorDN);
}
exports.unmount = unmount;


/***/ }),

/***/ "./src/core/ClassCompVN.ts":
/*!*********************************!*\
  !*** ./src/core/ClassCompVN.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./src/core/VNBase.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The class CompBaseVN is a base class for InstanceVN and ClassVN. It provides common functionality
// in terms of update requests and lifecycle management.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ClassCompVN extends VNBase_1.VNBase {
    //////////////////
    get statsCategory() { return Stats_1.StatsCategory.Comp; }
    ///////////
    /**
     * Retrieves update strategy object that determines different aspects of node behavior
     * during updates.
     */
    get updateStrategy() {
        return this.comp.getUpdateStrategy ? this.comp.getUpdateStrategy() : undefined;
    }
    // Generates list of sub-nodes according to the current state
    render() {
        ///////////////
        if (this.comp === undefined) {
            console.error("render() was called on unmounted component.");
            return null;
        }
        ////////////
        //////////////////////
        /////////////////////////////////////////////////////////////////////////
        ////////////
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
        ////////////
        return this.comp.render();
    }
    // Determines whether the node supports handling of errors; that is, exception thrown during
    // rendering of the node itself and/or its sub-nodes.
    supportsErrorHandling() {
        return this.comp.handleError !== undefined;
    }
    // This method is called after an exception was thrown during rendering of the node itself
    // and/or its sub-nodes.
    handleError(err, path) {
        this.comp.handleError(err, path);
    }
}
exports.ClassCompVN = ClassCompVN;


/***/ }),

/***/ "./src/core/ContentFuncs.ts":
/*!**********************************!*\
  !*** ./src/core/ContentFuncs.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./src/api/mim.ts");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./src/core/VNBase.ts");
const IndependentCompVN_1 = __webpack_require__(/*! ./IndependentCompVN */ "./src/core/IndependentCompVN.ts");
const ManagedCompVN_1 = __webpack_require__(/*! ./ManagedCompVN */ "./src/core/ManagedCompVN.ts");
const FuncVN_1 = __webpack_require__(/*! ./FuncVN */ "./src/core/FuncVN.ts");
const ElmVN_1 = __webpack_require__(/*! ./ElmVN */ "./src/core/ElmVN.ts");
const TextVN_1 = __webpack_require__(/*! ./TextVN */ "./src/core/TextVN.ts");
const FuncProxyVN_1 = __webpack_require__(/*! ./FuncProxyVN */ "./src/core/FuncProxyVN.ts");
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./src/core/Scheduler.ts");
// Creates either a single virtual node or an array of virtual nodes from the given content.
// For all types of contents other than an array, the returned value is a single VN. If the input
// content is an array, then a VN is created for each of the array elements. Since array elements
// might also be arrays, the process is recursive.
function createNodesFromContent(content) {
    if (content === null || content === undefined || content === false)
        return null;
    else if (content instanceof VNBase_1.VNBase)
        return content;
    else if (typeof content === "string")
        return new TextVN_1.TextVN(content);
    else if (typeof content.render === "function") {
        // if the component (this can only be an Instance component) is already attached to VN,
        // return this existing VN; otherwise create a new one.
        return content.vn
            ? content.vn
            : new IndependentCompVN_1.IndependentCompVN(content);
    }
    else if (Array.isArray(content))
        return createNodesFromArray(content);
    else if (content instanceof Promise)
        throw content;
    else if (typeof content === "function") {
        let vn = FuncProxyVN_1.FuncProxyVN.findVN(content);
        return vn || new FuncProxyVN_1.FuncProxyVN({ func: content, thisArg: Scheduler_1.s_currentClassComp });
    }
    else
        return new TextVN_1.TextVN(content.toString());
}
exports.createNodesFromContent = createNodesFromContent;
// Creates an array of virtual nodes from the given content. Calls the createNodesFromContent and
// if it returns a single node, wraps it in an array.
function createVNChainFromContent(content) {
    let nodes = createNodesFromContent(content);
    if (!nodes)
        return null;
    else if (Array.isArray(nodes))
        return nodes;
    else
        return [nodes];
}
exports.createVNChainFromContent = createVNChainFromContent;
// Creates a chain of virtual nodes from the data provided by the TypeScript's JSX parser.
function createNodesFromJSX(tag, props, children) {
    if (typeof tag === "string")
        return new ElmVN_1.ElmVN(tag, props, children);
    else if (tag === mim.Fragment)
        return createNodesFromArray(children);
    else if (tag === mim.FuncProxy) {
        if (!props || !props.func)
            return undefined;
        // check whether we already have a node linked to this function. If yes return it;
        // otherwise, create a new node.
        let funcProxyProps = props;
        let vn = FuncProxyVN_1.FuncProxyVN.findVN(props.func, funcProxyProps.key);
        if (!vn)
            return new FuncProxyVN_1.FuncProxyVN(props);
        else {
            // if the updateArgs property is true, we replace the arguments in the node; otherwise,
            // we ignore the arguments from the properties.
            if (funcProxyProps.replaceArgs)
                vn.replaceArgs(funcProxyProps.args);
            return vn;
        }
    }
    else if (typeof tag === "function") {
        // children parameter is always an array. A component can specify that its children are
        // an array of a certain type, e.g. class A extends mim.Component<{},T[]>. In this case
        // there are two ways to specify children in JSX that would be accepted by the TypeScript
        // compiler:
        //	1) <A>{t1}{t2}</A>. In this case, children will be [t1, t2] (as expected by A).
        //	2) <A>{[t1, t2]}</A>. In this case, children will be [[t1,t2]] (as NOT expected by A).
        //		This looks like a TypeScript bug.
        // The realChildren variable accommodates both cases.
        let realChildren = children.length === 1 && Array.isArray(children[0]) ? children[0] : children;
        if (typeof tag.prototype.render === "function")
            return new ManagedCompVN_1.ManagedCompVN(tag, props, realChildren);
        else
            return new FuncVN_1.FuncVN(tag, props, realChildren);
    }
    //////////////
    else
        throw new Error("Invalid tag in jsx processing function: " + tag);
    ///////////
}
exports.createNodesFromJSX = createNodesFromJSX;
// Creates array of virtual nodes from the given array of items.
function createNodesFromArray(arr) {
    if (arr.length === 0)
        return null;
    let nodes = [];
    for (let item of arr) {
        let itemNodes = createNodesFromContent(item);
        if (itemNodes === null)
            continue;
        else if (Array.isArray(itemNodes)) {
            for (let vn of itemNodes)
                nodes.push(vn);
        }
        else
            nodes.push(itemNodes);
    }
    return nodes.length > 0 ? nodes : null;
}
/**
 * Returns a reference to the component that is set as current at the time of the call.
 */
function getCurrentComponent() {
    // the s_currentVN should point to the virtual node behind the class-based component,
    // which should be used as "this" when the FuncProxy component calls the function.
    return Scheduler_1.s_currentClassComp;
}
exports.getCurrentComponent = getCurrentComponent;


/***/ }),

/***/ "./src/core/ElmVN.ts":
/*!***************************!*\
  !*** ./src/core/ElmVN.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./src/api/mim.ts");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./src/core/VNBase.ts");
const ElmAttr_1 = __webpack_require__(/*! ../utils/ElmAttr */ "./src/utils/ElmAttr.ts");
const SvgElms_1 = __webpack_require__(/*! ../utils/SvgElms */ "./src/utils/SvgElms.ts");
const Utils_1 = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Represents a DOM element created using JSX.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ElmVN extends VNBase_1.VNBase {
    constructor(tagName, props, children) {
        super();
        this.type = 4 /* Elm */;
        this.elmName = tagName;
        this.props = props;
        this.children = children;
        if (props) {
            // get the key property. If key property was not specified, use id; if id was not
            // specified key will remain undefined.
            this.key = props.key;
            if (this.key === undefined)
                this.key = props.id;
        }
    }
    //////////////////
    get statsCategory() { return Stats_1.StatsCategory.Elm; }
    ///////////
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() {
        // node name is the element's name plus key (or id) if specified.
        let name = this.elmName;
        if (this.key != null)
            name += "@" + this.key;
        return name;
    }
    // Returns DOM node corresponding to the virtual node itself and not to any of its sub-nodes.
    get ownDN() { return this.elm; }
    // Generates list of sub-nodes according to the current state
    render() {
        return this.children;
    }
    // Creates and returns DOM node corresponding to this virtual node.
    // This method is part of the Commit phase.
    mount() {
        // determine whether this is an SVG or HTML element and create the element
        let svgInfo = SvgElms_1.SvgElms.getSvgElmInfo(this.elmName);
        this.isSvg = svgInfo !== undefined && (svgInfo !== true || this.anchorDN.namespaceURI.endsWith("svg"));
        this.elm = this.isSvg
            ? this.elm = document.createElementNS(SvgElms_1.SvgElms.namespace, SvgElms_1.SvgElms.getElmName(svgInfo, this.elmName))
            : this.elm = document.createElement(this.elmName);
        // translate properties into attributes, events and custom attributes
        this.parseProps();
        if (this.attrs)
            this.addAttrs();
        if (this.events)
            this.addEvents();
        if (this.customAttrs)
            this.addCustomAttrs();
        // set the value of the reference (if specified)
        if (this.ref !== undefined)
            mim.setRef(this.ref, this.elm);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Added);
        ////////////
        return this.elm;
    }
    // Releases reference to the DOM node corresponding to this virtual node.
    // This method is part of the Commit phase.
    unmount() {
        // unset the reference value if specified. We check whether the reference still points
        // to our element before setting it to undefined. If the same Ref object is used for
        // more than one element (and/or components) it can happen that the reference is changed
        // before our element is unmounted.
        if (this.ref !== undefined)
            mim.setRef(this.ref, undefined, this.elm);
        ////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////
        ///////////////////
        ////////////////////////
        ////////////
        // terminate custom property handlers
        if (this.customAttrs)
            this.removeCustomAttrs(true);
        // clean up
        this.elm = null;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Deleted);
        ////////////
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        // update is possible if this is the same type of element; that is, it has the same
        // name.
        return this.elmName === newVN.elmName;
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        // commitUpdate method should be called if new props are different from the current ones
        let shouldCommit = !Utils_1.deepCompare(this.props, newVN.props);
        // render method should be called if either old or new node has children
        let shouldRender = this.children && this.children.length > 0 ||
            newVN.children && newVN.children.length > 0;
        // remember the new props and children
        this.props = newVN.props;
        this.children = newVN.children;
        return { shouldCommit, shouldRender };
    }
    // Commits updates made to this node to DOM.
    commitUpdate(newVN) {
        const newElmVN = newVN;
        newElmVN.parseProps();
        // if reference specification changed then set or unset it as necessary
        if (newElmVN.ref !== this.ref) {
            // remember the new reference specification
            this.ref = newElmVN.ref;
            // if reference is now specified, set it now; note that we already determined that
            // the reference object is different.
            if (this.ref !== undefined)
                mim.setRef(this.ref, this.elm);
        }
        // remeber the new value of the key, updateStartegy and creator property (even if the
        // values are the same)
        this.key = newElmVN.key;
        this.updateStrategy = newElmVN.updateStrategy;
        this.updateAttrs(newElmVN.attrs);
        this.updateEvents(newElmVN.events);
        this.updateCustomAttrs(newElmVN.customAttrs);
    }
    // Goes over the original properties and puts them into the buckets of attributes, event
    // listeners and custom attributes.
    parseProps() {
        if (!this.props)
            return;
        let propVal, propInfo, propType;
        for (let propName in this.props) {
            if (propName === "key") {
                // ignore the key property because we already extracted it in the constructor
                continue;
            }
            propVal = this.props[propName];
            if (propVal == null) {
                // ignore properties with values undefined and null
                continue;
            }
            else if (propName === "ref") {
                // remember ref property
                this.ref = propVal;
            }
            else if (propName === "updateStrategy") {
                // remember updateStrategy property
                this.updateStrategy = propVal;
            }
            else {
                // get information about the property and determine its type (regular attribute, event
                // or custom attribute). Note that getPropertyInfo may return null only for regular
                // attributes.
                propInfo = ElmAttr_1.ElmAttr.getPropertyInfo(propName);
                propType = propInfo ? propInfo.type : 1 /* Attr */;
                if (propType === 1 /* Attr */) {
                    if (!this.attrs)
                        this.attrs = {};
                    this.attrs[propName] = { info: propInfo, val: propVal };
                }
                else if (propType === 2 /* Event */) {
                    let eventInfo = getPropAsEventRunTimeData(propInfo, propVal);
                    if (eventInfo) {
                        if (!this.events)
                            this.events = {};
                        this.events[propName] = eventInfo;
                    }
                }
                else // if (propType === PropType.CustomAttr)
                 {
                    if (!this.customAttrs)
                        this.customAttrs = {};
                    // remember custome attributes value. Handler will be created later.
                    this.customAttrs[propName] = { info: propInfo, val: propVal,
                        handler: undefined };
                }
            }
        }
    }
    // Adds DOM attributes to the Element.
    addAttrs() {
        ///////////////
        if (!this.attrs)
            throw new Error("ElmVN.addAttrs called with this.attrs = null");
        ////////////
        for (let name in this.attrs) {
            let rtd = this.attrs[name];
            ElmAttr_1.ElmAttr.setAttr(this.elm, name, rtd.info, rtd.val);
        }
    }
    // Updates DOM attributes of this Element.
    updateAttrs(newAttrs) {
        // "cache" several memebers for faster access
        let elm = this.elm;
        let oldAttrs = this.attrs;
        // loop over existing attributes, remove those that are not found among the new ones and
        // update those whose value has changed
        if (oldAttrs) {
            for (let name in oldAttrs) {
                let oldRTD = oldAttrs[name];
                let newRTD = newAttrs ? newAttrs[name] : undefined;
                if (!newRTD || !newRTD.val) {
                    // if there is no new property with the given name, remove the old property and
                    // remove the attribute from the element
                    ElmAttr_1.ElmAttr.removeAttr(elm, name, oldRTD.info);
                }
                else {
                    // if the new property with the given name has a different value, remmeber this
                    // value and set it to the attribute in the element
                    ElmAttr_1.ElmAttr.updateAttr(elm, name, oldRTD.info, oldRTD.val, newRTD.val);
                }
            }
        }
        // loop over new attributes; add those that are not found among the old ones
        if (newAttrs) {
            for (let name in newAttrs) {
                if (oldAttrs && (name in oldAttrs))
                    continue;
                let newRTD = newAttrs[name];
                ElmAttr_1.ElmAttr.setAttr(elm, name, newRTD.info, newRTD.val);
            }
        }
        this.attrs = newAttrs;
    }
    // Adds information about events to the Element.
    addEvents() {
        ///////////////
        if (!this.events)
            throw new Error("ElmVN.addEvents called with this.events = null");
        ////////////
        for (let name in this.events)
            this.addEvent(name, this.events[name]);
    }
    // Using the given property name and its value set the appropriate attribute(s) on the
    // element. This method handles special cases of properties with non-trivial values.
    addEvent(name, event) {
        event.wrapper = this.createEventWrapper(event);
        this.elm.addEventListener(name, event.wrapper, event.useCapture);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Added);
        ////////////
    }
    ///////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////
    //////////////////////////////
    ///
    ////////////////
    /////////////////////
    ///////////////////////////////////////////////////////////////////////////
    /////////////
    ////////////////////////////////
    ///////////////////////////////////////////////
    ///
    ///////////
    // Removes the given event listener from the Element.
    removeEvent(name, event) {
        this.elm.removeEventListener(name, event.wrapper, event.useCapture);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Deleted);
        ////////////
    }
    // Adds event listeners to the Element.
    updateEvents(newEvents) {
        let oldEvents = this.events;
        // loop over existing event listeners, remove those that are not found among the new
        // ones and update those whose value has changed
        if (oldEvents) {
            for (let name in oldEvents) {
                let oldEvent = oldEvents[name];
                let newEvent = newEvents ? newEvents[name] : undefined;
                if (!newEvent)
                    this.removeEvent(name, oldEvent);
                else
                    this.updateEvent(name, oldEvent, newEvent);
            }
        }
        // loop over new event listeners and add those that are not found among the old ones
        if (newEvents) {
            for (let name in newEvents) {
                if (oldEvents && (name in oldEvents))
                    continue;
                this.addEvent(name, newEvents[name]);
            }
        }
        this.events = newEvents;
    }
    // Determines whether the old and the new values of the event listener are different and sets
    // the updated value. Returns true if update has been performed and false if no change has
    // been detected.
    updateEvent(name, oldEvent, newEvent) {
        // double-equal-sign for useCapture is on purpose, because useCapture can be undefined or boolean
        if (oldEvent.orgFunc === newEvent.orgFunc &&
            oldEvent.that === newEvent.that &&
            oldEvent.useCapture == newEvent.useCapture) {
            newEvent.wrapper = oldEvent.wrapper;
            return false;
        }
        else {
            // remove old event listener
            this.elm.removeEventListener(name, oldEvent.wrapper, oldEvent.useCapture);
            // create new wrapper and add it as event listener
            newEvent.wrapper = this.createEventWrapper(newEvent);
            this.elm.addEventListener(name, newEvent.wrapper, newEvent.useCapture);
            ////////////////////
            Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Event, Stats_1.StatsAction.Updated);
            /////////////
            return true;
        }
    }
    // Returns a wrapper function that will be used as an event listener. The wrapper is bound to
    // the instance of ElmVN and thus can intercept exceptions and process them using the standard
    // error service. Unless the original callback is already a bound function, it will be called
    // with "this" set to either the "event.that" object or, if the latter is undefined, to the
    // "creator" object, which is the class-based component that created the element i its render
    // method.
    createEventWrapper(event) {
        return this.wrapCallback(event.orgFunc, event.that ? event.that : this.creator);
    }
    // Creates custom attributes.
    addCustomAttrs() {
        ///////////////
        if (!this.customAttrs)
            throw new Error("ElmVN.addCustomAttrs called with this.customAttrs = null");
        ////////////
        // create and initialize custom property handlers
        for (let name in this.customAttrs) {
            let customAttr = this.customAttrs[name];
            // create custom property handler. If we cannot create the handler, remove the property
            // from our object.
            try {
                customAttr.handler = new customAttr.info.handlerClass(this, customAttr.val, name);
            }
            catch (err) {
                console.error(`Error creating handler for custom attribute '${name}': ${err.message}`);
                delete this.customAttrs[name];
                continue;
            }
        }
    }
    // Destroys custom attributes of this element.
    removeCustomAttrs(isRemoval) {
        ///////////////
        if (!this.customAttrs)
            throw new Error("ElmVN.removeCustomAttrs called with this.customAttrs = null");
        ////////////
        for (let name in this.customAttrs) {
            let customAttr = this.customAttrs[name];
            try {
                customAttr.handler.terminate(isRemoval);
            }
            catch (err) {
                console.error(`Error terminating handler for custom attribute '${name}': ${err.message}`);
            }
        }
    }
    // Updates custom attributes of this node.
    updateCustomAttrs(newCustomAttrs) {
        let oldCustomAttrs = this.customAttrs;
        // loop over existing custom properties, remove those that are not found among the new
        // ones and update those whose value has changed
        if (oldCustomAttrs) {
            for (let name in oldCustomAttrs) {
                const oldCustomAttr = oldCustomAttrs[name];
                const newCustomAttr = newCustomAttrs ? newCustomAttrs[name] : undefined;
                if (!newCustomAttr) {
                    // if there is no new property with the given name, remove the old property and
                    // terminate its handler
                    try {
                        oldCustomAttr.handler.terminate(false);
                    }
                    catch (err) {
                        console.error(`Error terminating handler for custom attribute '${name}': ${err.message}`);
                    }
                }
                else {
                    // update the custom property and remember the new value
                    try {
                        oldCustomAttr.handler.update(newCustomAttr.val);
                    }
                    catch (err) {
                        console.error(`Error updating handler for custom attribute '${name}': ${err.message}`);
                    }
                    newCustomAttr.handler = oldCustomAttr.handler;
                }
            }
        }
        // loop over new custom properties and add those that are not found among the old ones
        if (newCustomAttrs) {
            for (let name in newCustomAttrs) {
                if (oldCustomAttrs && (name in oldCustomAttrs))
                    continue;
                let newCustomAttr = newCustomAttrs[name];
                // create custom property handler. If we cannot create the handler, remove the property
                // from our object.
                try {
                    newCustomAttr.handler = new newCustomAttr.info.handlerClass(this, newCustomAttr.val, name);
                }
                catch (err) {
                    console.error(`Error creating handler for custom attribute '${name}': ${err.message}`);
                    delete newCustomAttrs[name];
                    continue;
                }
            }
        }
        this.customAttrs = newCustomAttrs;
    }
}
exports.ElmVN = ElmVN;
;
;
;
// Determines whether the given property value is of the type that is used for event handlers.
// If yes, then returns EventRunTimeData object; otherwise, returns undefined.
function getPropAsEventRunTimeData(info, propVal) {
    if (typeof propVal === "function")
        return { info, orgFunc: propVal };
    else if (Array.isArray(propVal)) {
        if (propVal.length === 2) {
            if (typeof propVal[1] === "boolean")
                return { info, orgFunc: propVal[0], useCapture: propVal[1] };
            else
                return { info, orgFunc: propVal[0], that: propVal[1] };
        }
        else if (propVal.length === 3)
            return { info, orgFunc: propVal[0], that: propVal[1], useCapture: propVal[2] };
    }
    // for all other type combinations the property is not treated as an event handler
    return undefined;
}


/***/ }),

/***/ "./src/core/FuncProxyVN.ts":
/*!*********************************!*\
  !*** ./src/core/FuncProxyVN.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./src/core/VNBase.ts");
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./src/core/Scheduler.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
/**
 * Encapsultes a rendering function, which is usually a method of a class-based component. This
 * object remembers the function, the "this" pointer to use when calling the function and the
 * arguments to pass to it. This allows re-rendering only the part of the parent component as
 * though the method were a full blown independent component. Updating the nodes is accomplished
 * using the FuncProxy static update method accepting the function to be updated.
 *
 * The same function can be used multiple times within the parent component's render() method -
 * especially (but not necessarily) if it is called with different parameters. To distinguish
 * between multiple nodes when updating (using FuncProxy.update), a unique key must be assigned.
 * The node then creates a link between the function and the node. This link is removed when the
 * node is unmounted. The key is optional if the function is used only once in the parent's
 * render method. If the function is used more than once and keys are not provided or are the same
 * Mimble will issue an error.
 *
 * The link between the function and the nodes that use this function is kept in a map from the
 * keys to the nodes. The map is stored in a custom property on the function object itself.
 */
class FuncProxyVN extends VNBase_1.VNBase {
    constructor(props) {
        super();
        this.type = 6 /* FuncProxy */;
        this.func = props.func;
        this.thisArg = props.thisArg || Scheduler_1.s_currentClassComp;
        this.args = props.args;
        this.argsReplaced = false;
        this.key = props.key;
        // if a key was not provided we use the value of thisArg (which might be the current
        // component) as a key. If that is undefined too we use the function itself as a key.
        this.linkKey = props.key || this.thisArg || this.func;
    }
    replaceArgs(args) {
        this.args = args;
        this.argsReplaced = true;
    }
    /////////////////
    get statsCategory() { return Stats_1.StatsCategory.Comp; }
    /**
     * Flag indicating whether this node should re-render during update even it is the same
     * physical node instance. This is needed for nodes that serve as a proxy to a rendering
     * function and that function must be invoked even none of the node parameters have changed.
     */
    get renderOnUpdate() { return this.argsReplaced; }
    ;
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() {
        // node name is the function's name plus key (or id) if specified.
        let name = this.func.name;
        if (this.key != null)
            name += "@" + this.key;
        return name;
    }
    // Generates list of sub-nodes according to the current state
    render() {
        //////////////////////
        ////////////////////////////////////////////////////////////////////////////
        ////////////
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
        ////////////
        this.argsReplaced = false;
        return this.func.apply(this.thisArg, this.args);
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.linkNodeToFunc();
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        this.unlinkNodeFromFunc();
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        let newFuncProxyVN = newVN;
        // update is possible if it is the same function object and the same thisArg property
        return this.func === newFuncProxyVN.func && this.thisArg === newFuncProxyVN.thisArg;
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        let newFuncProxyVN = newVN;
        // remeber the new value of the key property (even if it is the same)
        this.key = newFuncProxyVN.key;
        this.linkKey = newFuncProxyVN.linkKey;
        // take arguments from the new node; the function itself and "thisArg" remain the same.
        this.args = newFuncProxyVN.args;
        // indicate that it is necessary to update the sub-nodes. The commitUpdate
        // method should NOT be called.
        return VN_1.VNUpdateDisp.NoCommitDoRender;
    }
    static findVN(func, key) {
        // if the key is undefined, we use the function object itself
        let linkKey = key || Scheduler_1.s_currentClassComp || func;
        // try to find the key in the map on the function object; if not found, do nothing
        let mapKeysToNodes = func["__keys-to-nodes"];
        return mapKeysToNodes && mapKeysToNodes.get(linkKey);
    }
    static update(func, key, args) {
        // find the node
        let vn = FuncProxyVN.findVN(func, key);
        if (!vn)
            return;
        vn.args = args;
        vn.argsReplaced = true;
        vn.requestUpdate();
    }
    linkNodeToFunc() {
        let func = this.func;
        let mapKeysToNodes = func["__keys-to-nodes"];
        if (!mapKeysToNodes) {
            mapKeysToNodes = new Map();
            func["__keys-to-nodes"] = mapKeysToNodes;
        }
        mapKeysToNodes.set(this.linkKey, this);
    }
    unlinkNodeFromFunc() {
        let func = this.func;
        let mapKeysToNodes = func["__keys-to-nodes"];
        if (mapKeysToNodes)
            mapKeysToNodes.delete(this.linkKey);
    }
}
exports.FuncProxyVN = FuncProxyVN;


/***/ }),

/***/ "./src/core/FuncVN.ts":
/*!****************************!*\
  !*** ./src/core/FuncVN.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./src/api/mim.ts");
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./src/core/VNBase.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
/**
 * Represents a rendering function a.k.a. stateless component.
 */
class FuncVN extends VNBase_1.VNBase {
    /** Determines whether this node corresponds to a fragment placeholder. */
    static isVNaFragment(vn) {
        return vn.func === mim.Fragment;
    }
    constructor(func, props, children) {
        super();
        this.type = 3 /* FuncComp */;
        this.func = func;
        // copy properties to our own object excluding framework-handled key
        this.props = {};
        if (props) {
            for (let propName in props) {
                let propVal = props[propName];
                if (propVal === undefined || propVal === null) {
                    // ignore properties with values undefined and null
                    continue;
                }
                else if (propName === "key") {
                    // remember key property but don't copy it to this.props object
                    this.key = propVal;
                }
                else
                    this.props[propName] = propVal;
            }
            // if key property was not specified, use id; if id was not specified key will remain
            // undefined.
            if (this.key === undefined)
                this.key = props.id;
        }
        // remember children as part of props
        this.props.children = children;
    }
    ;
    /////////////////
    get statsCategory() { return Stats_1.StatsCategory.Comp; }
    //////////
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() {
        // node name is the function's name plus key (or id) if specified.
        let name = this.func.name;
        if (this.key != null)
            name += "@" + this.key;
        return name;
    }
    // Generates list of sub-nodes according to the current state
    render() {
        //////////////////////
        ////////////////////////////////////////////////////////////////////////
        ////////////
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Rendered);
        ////////////
        return this.func(this.props);
    }
    //////////////////
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
    }
    ///////////
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        // update is possible if it is the same function object
        return this.func === newVN.func;
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        let newFuncVN = newVN;
        // remeber the new value of the key property (even if it is the same)
        this.key = newFuncVN.key;
        // take properties from the new node
        this.func = newFuncVN.func;
        this.props = newFuncVN.props;
        // since the rendering produced by a function may depend on factors beyond properties,
        // we always indicate that it is necessary to update the sub-nodes. The commitUpdate
        // method should NOT be called.
        return VN_1.VNUpdateDisp.NoCommitDoRender;
    }
}
exports.FuncVN = FuncVN;


/***/ }),

/***/ "./src/core/IndependentCompVN.ts":
/*!***************************************!*\
  !*** ./src/core/IndependentCompVN.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const ClassCompVN_1 = __webpack_require__(/*! ./ClassCompVN */ "./src/core/ClassCompVN.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The class InstanceVN is a node that holds an instance of an IComponent-implementing object.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class IndependentCompVN extends ClassCompVN_1.ClassCompVN {
    constructor(comp) {
        super();
        this.type = 1 /* IndependentComp */;
        this.comp = comp;
    }
    ;
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() {
        // components can define the displayName property; if they don't then the default name
        // is the component's constructor name
        return this.comp.displayName ? this.comp.displayName : this.comp.constructor.name;
    }
    // Node's key. The derived classes set it based on their respective content. A key
    // can be of any type. The instance of our component is the key.
    get key() { return this.comp; }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.willMountInstance(this.comp);
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        this.willUnmountInstance(this.comp);
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        // if it is the same component instance, we don't need to do anything
        let newComp = newVN.comp;
        let needsUpdating = this.comp !== newComp;
        // if the coponent instance are different, then we need to prepare the new instance for
        // mounting and the old one for unmounting.
        if (needsUpdating) {
            this.willMountInstance(newComp);
            this.willUnmountInstance(this.comp);
            this.comp = newComp;
        }
        return VN_1.VNUpdateDisp.getStockValue(false, needsUpdating);
    }
    // Notifies the given component that it will be mounted.
    willMountInstance(comp) {
        comp.vn = this;
        if (comp.willMount)
            comp.willMount();
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
        ////////////
    }
    // Notifies the given component that it will be unmounted.
    willUnmountInstance(comp) {
        if (comp.willUnmount)
            comp.willUnmount();
        comp.vn = undefined;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
        ////////////
    }
}
exports.IndependentCompVN = IndependentCompVN;


/***/ }),

/***/ "./src/core/ManagedCompVN.ts":
/*!***********************************!*\
  !*** ./src/core/ManagedCompVN.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./src/api/mim.ts");
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const ClassCompVN_1 = __webpack_require__(/*! ./ClassCompVN */ "./src/core/ClassCompVN.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Represents a component implementing the IComponent<> interface.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ManagedCompVN extends ClassCompVN_1.ClassCompVN {
    constructor(compClass, props, children) {
        super();
        this.type = 2 /* ManagedComp */;
        this.compClass = compClass;
        // copy properties to our own object excluding framework-handled key and ref
        this.props = {};
        if (props) {
            for (let propName in props) {
                let propVal = props[propName];
                if (propVal === undefined || propVal === null) {
                    // ignore properties with values undefined and null
                    continue;
                }
                else if (propName === "key") {
                    // remember key property but don't copy it to this.props object
                    this.key = propVal;
                }
                else if (propName === "ref") {
                    // remember ref property but don't copy it to this.props object
                    this.ref = propVal;
                }
                else
                    this.props[propName] = propVal;
            }
            // if key property was not specified, use id; if id was not specified key will remain
            // undefined.
            if (this.key === undefined)
                this.key = props.id;
        }
        // remember children as part of props
        this.props.children = children;
    }
    ;
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() {
        // components can define the displayName property; if they don't then the default name
        // is the component's constructor name plus key if defined. Note that component instance
        // might not be created yet when this method is called
        if (this.comp && this.comp.displayName)
            return this.comp.displayName;
        else {
            let name = this.compClass.name;
            if (this.key != null)
                name += "@" + this.key;
            return name;
        }
    }
    // Initializes the node by passing the parent node to it. After this, the node knows its
    // place in the hierarchy and gets access to the root of it - the RootVN object.
    init(parent, creator) {
        super.init(parent, creator);
        // create component instance
        this.comp = new this.compClass(this.props);
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.comp.vn = this;
        if (this.comp.willMount)
            this.comp.willMount();
        // set the reference value if specified
        if (this.ref !== undefined)
            mim.setRef(this.ref, this.comp);
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Added);
        ////////////
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        // unset the reference value if specified. We check whether the reference still points
        // to our component before setting it to undefined. If the same Ref object is used for
        // more than one components (and/or elements) it can happen that the reference is changed
        // before our component is unmounted.
        if (this.ref !== undefined)
            mim.setRef(this.ref, undefined, this.comp);
        if (this.comp.willUnmount)
            this.comp.willUnmount();
        this.comp.vn = undefined;
        this.comp = undefined;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Comp, Stats_1.StatsAction.Deleted);
        ////////////
    }
    // Determines whether the update of this node from the given node is possible. The newVN
    // parameter is guaranteed to point to a VN of the same type as this node.
    isUpdatePossible(newVN) {
        // update is possible if the component class name is the same
        return this.compClass === newVN.compClass;
    }
    // Updates this node from the given node. The newVN parameter is guaranteed to point to a
    // VN of the same type as this node. Returns true if updating sub-nodes is necessary and
    // false otherwise.
    prepareUpdate(newVN) {
        let newClassVN = newVN;
        // let the component know about the new properties (if it is interested in them)
        let shouldRender = true;
        if (this.comp.shouldUpdate !== undefined)
            shouldRender = this.comp.shouldUpdate(newClassVN.props);
        // if reference specification changed then set or unset it as necessary
        if (newClassVN.ref !== this.ref) {
            // remember the new reference object
            this.ref = newClassVN.ref;
            // if reference is now specified, set it now; note that we already determined that
            // the reference object is different.
            if (this.ref !== undefined)
                mim.setRef(this.ref, this.comp);
        }
        else if (newClassVN.ref === undefined) {
            // we know that our reference is defined, so unset it
            mim.setRef(this.ref, undefined, this.comp);
        }
        // remeber the new value of the key property (even if it is the same)
        this.key = newClassVN.key;
        // shallow copy the new properties from the other node to our object. This is needed
        // because the component got our props object in the constructor and will keep
        // working with it - especially if it doesn't implement the shouldUpdate method.
        Object.keys(this.props).forEach(key => delete this.props[key]);
        Object.assign(this.props, newClassVN.props);
        // since the rendering produced by a function may depend on factors beyond properties,
        // we always indicate that it is necessary to update the sub-nodes. The commitUpdate
        // method should NOT be called.
        return VN_1.VNUpdateDisp.getStockValue(false, shouldRender);
    }
}
exports.ManagedCompVN = ManagedCompVN;


/***/ }),

/***/ "./src/core/PubSub.ts":
/*!****************************!*\
  !*** ./src/core/PubSub.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Information kept by Root virtual node about service export functionations and subscriptions. The same
// service can be published and subscribed to by multiple nodes.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ServiceInfo {
    constructor() {
        this.publishingVNs = new Set();
        this.subscribedVNs = new Set();
    }
}
// Map of service IDs to sets of virtual nodes that subscribed to this service.
let s_serviceInfos = new Map();
// Informs that a service with the given ID was published by the given node.
function notifyServicePublished(id, sourceVN) {
    let info = s_serviceInfos.get(id);
    if (info === undefined) {
        info = new ServiceInfo();
        s_serviceInfos.set(id, info);
    }
    info.publishingVNs.add(sourceVN);
    // notify all subscribed nodes that information about the service has changed
    for (let vn of info.subscribedVNs)
        vn.notifyServiceChanged(id);
}
exports.notifyServicePublished = notifyServicePublished;
// Informs that a service with the given ID was unpublished by the given node.
function notifyServiceUnpublished(id, sourceVN) {
    let info = s_serviceInfos.get(id);
    if (info === undefined)
        return;
    info.publishingVNs.delete(sourceVN);
    if (info.publishingVNs.size === 0 && info.subscribedVNs.size === 0)
        s_serviceInfos.delete(id);
    else {
        // notify all subscribed nodes that information about the service has changed
        for (let vn of info.subscribedVNs)
            vn.notifyServiceChanged(id);
    }
}
exports.notifyServiceUnpublished = notifyServiceUnpublished;
// Informs that the given node has subscribed to a service with the given ID.
function notifyServiceSubscribed(id, sourceVN) {
    let info = s_serviceInfos.get(id);
    if (info === undefined) {
        info = new ServiceInfo();
        s_serviceInfos.set(id, info);
    }
    info.subscribedVNs.add(sourceVN);
}
exports.notifyServiceSubscribed = notifyServiceSubscribed;
// Informs that the given node has unsubscribed from a service with the given ID.
function notifyServiceUnsubscribed(id, sourceVN) {
    let info = s_serviceInfos.get(id);
    if (info === undefined)
        return;
    info.subscribedVNs.delete(sourceVN);
    if (info.publishingVNs.size === 0 && info.subscribedVNs.size === 0)
        s_serviceInfos.delete(id);
}
exports.notifyServiceUnsubscribed = notifyServiceUnsubscribed;


/***/ }),

/***/ "./src/core/RootUI.tsx":
/*!*****************************!*\
  !*** ./src/core/RootUI.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./src/api/mim.ts");
class RootErrorUI extends mim.Component {
    constructor(rootVN, err, path) {
        super();
        this.onRestart = () => {
            this.rootVN.restart();
        };
        this.rootVN = rootVN;
        this.err = err;
        this.pathString = path ? path.join(" \u2192 ") : "";
    }
    render() {
        return mim.jsx("div", { id: "rootError", style: { display: "flex", flexDirection: "column", alignItems: "start" } },
            mim.jsx("div", null, this.err.message),
            mim.jsx("div", null, this.pathString),
            mim.jsx("hr", { style: { width: "100%" } }),
            mim.jsx("button", { click: this.onRestart }, "Restart"));
    }
}
exports.RootErrorUI = RootErrorUI;
class RootWaitingUI extends mim.Component {
    render() {
        return "Loading ...";
    }
}
exports.RootWaitingUI = RootWaitingUI;


/***/ }),

/***/ "./src/core/RootVN.ts":
/*!****************************!*\
  !*** ./src/core/RootVN.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./src/core/Scheduler.ts");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./src/core/VNBase.ts");
const RootUI_1 = __webpack_require__(/*! ./RootUI */ "./src/core/RootUI.tsx");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The RootVN class is used as a top-level virtual node for all rendered trees. RootVN serves
// as an error boundary of last resort. When it catches an error that wasn't caught by any
// descendand node, it displays a simple UI that shows the error and allows the user to restart.
// RootVN also manages service publishers and subscribers.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class RootVN extends VNBase_1.VNBase {
    constructor(anchorDN) {
        super();
        // Set of promises thrown by descendant nodes and not yet fulfilled.
        this.thrownPromises = new Set();
        this.type = 0 /* Root */;
        this.anchorDN = anchorDN;
        this.depth = 0;
        // this.willMount();
    }
    ;
    //////////////////
    get statsCategory() { return Stats_1.StatsCategory.Root; }
    ///////////
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() { return "Root"; }
    // Sets the content to be rendered under this root node and triggers update.
    setContent(content, sync) {
        this.content = content;
        if (sync)
            Scheduler_1.updateNodeSync(this);
        else
            Scheduler_1.requestNodeUpdate(this);
    }
    // Generates a chain of sub-nodes according to the current state. If the node doesn't have
    // sub-nodes, null should be returned.
    render() {
        if (this.errorUI)
            return this.errorUI;
        else if (this.waitingUI)
            return this.waitingUI;
        else
            return this.content;
    }
    // Creates internal stuctures of the virtual node so that it is ready to produce children.
    // This method is called right after the node has been constructed.
    // This method is part of the Render phase.
    willMount() {
        this.publishService("StdErrorHandling", this);
    }
    // This method is called before the content of node and all its sub-nodes is removed from the
    // DOM tree.
    // This method is part of the render phase.
    willUnmount() {
        this.unpublishService("StdErrorHandling");
    }
    // Determines whether the node supports handling of errors; that is, exception thrown during
    // rendering of the node itself and/or its sub-nodes.
    supportsErrorHandling() {
        return true;
    }
    // This method is called after an exception was thrown during rendering of the node itself
    // or its sub-nodes.
    handleError(err, path) {
        if (err instanceof Promise) {
            let promise = err;
            this.thrownPromises.add(promise);
            promise.then(() => { this.onPromiseFulfilled(promise); });
            promise.catch(() => { this.onPromiseFulfilled(promise); });
            if (!this.waitingUI)
                this.waitingUI = new RootUI_1.RootWaitingUI();
        }
        else {
            this.errorUI = new RootUI_1.RootErrorUI(this, err, path);
        }
    }
    // Displays the content originally passed in the constructor.
    restart() {
        // clear the error and request to be updated
        this.errorUI = undefined;
        Scheduler_1.requestNodeUpdate(this);
    }
    // Informs that the given node has unsubscribed from a service with the given ID.
    reportError(err, path) {
        this.handleError(err, path);
        Scheduler_1.requestNodeUpdate(this);
    }
    // Removes the fulfilled promise from our internal list and if the list is empty asks to
    // re-render
    onPromiseFulfilled(promise) {
        this.thrownPromises.delete(promise);
        if (this.thrownPromises.size === 0) {
            this.waitingUI = null;
            Scheduler_1.requestNodeUpdate(this);
        }
    }
}
exports.RootVN = RootVN;
let s_mimblAnchorPropName = "__mimblAnchorPropName__";
// Renders the given content (usually a result of JSX expression or a component instance)
// under the given HTML element in a synchronous way.
function mountRootSync(content, anchorDN) {
    let realAnchorDN = anchorDN ? anchorDN : document.body;
    // check whether we already have root node remembered in the anchor element's well-known
    // property
    let rootVN = realAnchorDN[s_mimblAnchorPropName];
    if (!rootVN) {
        // create root node and remember it in the anchor element's well-known property
        rootVN = new RootVN(realAnchorDN);
        realAnchorDN[s_mimblAnchorPropName] = rootVN;
    }
    // set content to the root node and trigger synchronous update
    rootVN.setContent(content, true);
}
exports.mountRootSync = mountRootSync;
// Unmounts a root node that was created using mountRootSync.
function unmountRootSync(anchorDN) {
    let realAnchorDN = anchorDN ? anchorDN : document.body;
    if (!realAnchorDN)
        return;
    // get our root node from the anchor element's well-known property.
    let rootVN = realAnchorDN[s_mimblAnchorPropName];
    if (!rootVN)
        return;
    // remove our root node from the anchor element's well-known property
    delete realAnchorDN[s_mimblAnchorPropName];
    rootVN.setContent(null, true);
    rootVN.term();
}
exports.unmountRootSync = unmountRootSync;
// Renders the given content (usually a result of JSX expression or a component instance)
// under the given HTML element.
function mountRoot(content, anchorDN) {
    let realAnchorDN = anchorDN ? anchorDN : document.body;
    // check whether we already have root node remembered in the anchor element's well-known
    // property
    let rootVN = realAnchorDN[s_mimblAnchorPropName];
    if (!rootVN) {
        // create root node and remember it in the anchor element's well-known property
        rootVN = new RootVN(realAnchorDN);
        realAnchorDN[s_mimblAnchorPropName] = rootVN;
    }
    // set content to the root node, which will trigger update
    rootVN.setContent(content, false);
}
exports.mountRoot = mountRoot;
// Unmounts a root node that was created using mountRoot.
function unmountRoot(anchorDN) {
    let realAnchorDN = anchorDN ? anchorDN : document.body;
    if (!realAnchorDN)
        return;
    // get our root node from the anchor element's well-known property.
    let rootVN = realAnchorDN[s_mimblAnchorPropName];
    if (!rootVN)
        return;
    // remove our root node from the anchor element's well-known property
    delete realAnchorDN[s_mimblAnchorPropName];
    // destruct the root node (asynchronously)
    rootVN.setContent(null, false);
    rootVN.scheduleCallAfterUpdate(() => rootVN.willUnmount());
}
exports.unmountRoot = unmountRoot;


/***/ }),

/***/ "./src/core/Scheduler.ts":
/*!*******************************!*\
  !*** ./src/core/Scheduler.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const ContentFuncs_1 = __webpack_require__(/*! ./ContentFuncs */ "./src/core/ContentFuncs.ts");
const VNDisp_1 = __webpack_require__(/*! ./VNDisp */ "./src/core/VNDisp.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// State of the scheduler indicating in what phase of the update cycle we currently reside.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
var SchedulerState;
(function (SchedulerState) {
    // The scheduler is not within the update cycle
    SchedulerState[SchedulerState["Idle"] = 0] = "Idle";
    // The scheduler is executing functions before updating nodes
    SchedulerState[SchedulerState["BeforeUpdate"] = 1] = "BeforeUpdate";
    // The scheduler is updating nodes
    SchedulerState[SchedulerState["Update"] = 2] = "Update";
    // The scheduler is executing functions after updating nodes
    SchedulerState[SchedulerState["AfterUpdate"] = 3] = "AfterUpdate";
})(SchedulerState || (SchedulerState = {}));
/**
 * The ScheduledFuncMap class represents a map of functions scheduled to be executed either before
 * or after component updates. The keys in this map are the original functions and the values are
 * the wrapper functions that will be executed in the context of a given virtual node. Both
 * the keys and the values have the same type: mim.ScheduledFuncType.
 */
class ScheduledFuncMap extends Map {
}
// Map of nodes that should be updated on the next UI cycle. We use Map in order to not include
// the same node more than once - which can happen if the node's requestUpdate method is called
// more than once during a single run (e.g. during event processing). The value mapped to the
// node determines the operation to be performed:
//	- undefined - the node will be updated
//	- null - the node will be deleted from its parent
//	- anything else - the node will be replaced with this new content
let s_vnsScheduledForUpdate = new Set();
// Map of functions that have been scheduled to be called upon a new animation frame before
// components scheduled for update are updated. The values in the map are objects that will
// be used s the "this" value in the callback.
let s_callsScheduledBeforeUpdate = new ScheduledFuncMap();
// Map of functions that have been scheduled to be called upon a new animation frame after
// components scheduled for update are updated. The values in the map are objects that will
// be used s the "this" value in the callback.
let s_callsScheduledAfterUpdate = new ScheduledFuncMap();
// Handle of the animation frame request (in case it should be canceled).
let s_scheduledFrameHandle = 0;
// State of the scheduler.
let s_schedulerState = SchedulerState.Idle;
// Number that serves as a unique ID of an update cycle. Each update cycle the root node
// increments this number. Each node being updated in this cycle is assigned this number.
// This helps prevent double-rendering of when both a component and its parent are
// updated in the same cycle.
let s_currentTick = 0;
// Node currently being processed. During creation and updating process, this value is set
// every time we recurse into sub-nodes and restored when we return back to the node. If
// during creation or updating process an exception is thrown and is caught by some upper
// level node, this value will still point at the node that caused the exception.
exports.s_currentVN = null;
// Class-based coponent whose rendering tree is currently being processed.
exports.s_currentClassComp = null;
// Callback that is called on a new UI cycle when there is a need to update UI components
function updateNodeSync(vn) {
    // increment tick number.
    s_currentTick++;
    //////////////////
    Stats_1.DetailedStats.stats = new Stats_1.DetailedStats(`Mimbl update cycle ${s_currentTick}: `);
    Stats_1.DetailedStats.stats.start();
    ///////////
    let vns = new Array(1);
    vns[0] = [vn];
    s_schedulerState = SchedulerState.Update;
    performCommitPhase(performRenderPhase(vns));
    //////////////////
    Stats_1.DetailedStats.stats.stop(true);
    Stats_1.DetailedStats.stats = null;
    ///////////
    s_schedulerState = SchedulerState.Idle;
}
exports.updateNodeSync = updateNodeSync;
;
// Schedules an update for the given node.
function requestNodeUpdate(vn) {
    if (!vn.anchorDN)
        console.warn(`Update requested for virtual node '${VN_1.getVNPath(vn).join("->")}' that doesn't have anchor DOM node`);
    // add this node to the map of nodes for which either update or replacement or
    // deletion is scheduled. Note that a node will only be present once in the map no
    // matter how many times it calls requestUpdate().
    s_vnsScheduledForUpdate.add(vn);
    // if this is a class-based component and it has beforeUpdate and/or afterUpdate methods
    // implemented, schedule their executions. Note that the "beforeUpdate" method is not
    // scheduled if the current scheduler state is BeforeUpdate. This is because the component
    // wil be updated in the current cycle and there is already no time to execute the "before
    // update" method.
    if (vn.type === 1 /* IndependentComp */ || vn.type === 2 /* ManagedComp */) {
        let comp = vn.comp;
        if (comp.beforeUpdate && s_schedulerState !== SchedulerState.BeforeUpdate)
            s_callsScheduledBeforeUpdate.set(comp.beforeUpdate, wrapCallbackWithVN(comp.beforeUpdate, comp, vn));
        if (comp.afterUpdate)
            s_callsScheduledAfterUpdate.set(comp.afterUpdate, wrapCallbackWithVN(comp.beforeUpdate, comp, vn));
    }
    // the update is scheduled in the next cycle unless the request is made during a
    // "before update" function execution.
    if (s_schedulerState !== SchedulerState.BeforeUpdate)
        requestFrameIfNeeded();
}
exports.requestNodeUpdate = requestNodeUpdate;
// Schedules to call the given function either before or after all the scheduled components
// have been updated.
function scheduleFuncCall(func, beforeUpdate, that, vn) {
    //////////////
    if (!func) {
        console.error("Trying to schedule undefined function for update");
        return;
    }
    ///////////
    if (beforeUpdate) {
        if (!s_callsScheduledBeforeUpdate.has(func)) {
            s_callsScheduledBeforeUpdate.set(func, wrapCallbackWithVN(func, that, vn));
            // a "before update" function is always scheduled in the next frame even if the
            // call is made from another "before update" function.
            requestFrameIfNeeded();
        }
    }
    else {
        if (!s_callsScheduledAfterUpdate.has(func)) {
            s_callsScheduledAfterUpdate.set(func, wrapCallbackWithVN(func, that, vn));
            // an "after update" function is scheduled in the next cycle unless the request is made
            // either from a "before update" function execution or during a node update.
            if (s_schedulerState !== SchedulerState.BeforeUpdate && s_schedulerState !== SchedulerState.Update)
                requestFrameIfNeeded();
        }
    }
}
exports.scheduleFuncCall = scheduleFuncCall;
/**
 * Wraps the given callback and returns a wrapper function which is executed in the context of the
 * given virtual node. The given "that" object will be the value of "this" when the callback is
 * executed. If the original callback throws an exception, it is processed by the Mimbl error
 * handling mechanism so that the exception bubles from this virtual node up the hierarchy until a
 * node/component that knows to handle errors is found.
 * @param callback Callback to be wrapped.
 * @param that Object that will be the value of "this" when the callback is executed.
 * @param vn Virtual node in whose context the callback will be executed.
 * @returns The wrapper function that should be used instead of the original callback.
 */
function wrapCallbackWithVN(callback, that, vn) {
    return CallbackWrapper.bind(vn, that, callback);
}
exports.wrapCallbackWithVN = wrapCallbackWithVN;
/**
 * The CallbackWrapper function is used to wrap a callback in order to catch exceptions from the
 * callback and pass it to the "StdErrorHandling" service. The function is bound to  the virtual
 * node as "this" and to two parameters: the object that will be the value of "this" when the
 * original callback is executed and the original callback itself. These two parameters are
 * accessed as the first and second elements of the `arguments` array). The rest of parameters in
 * the `arguments` array are passed to the original callback and the value returned by the callback
 * is returned from the wrapper.
 */
function CallbackWrapper() {
    // remember the current VN and set the current VN to be the VN from the "this" value. Note
    // that this can be undefined
    let currentVN = exports.s_currentVN;
    exports.s_currentVN = this;
    let currentClassComp = exports.s_currentClassComp;
    exports.s_currentClassComp = exports.s_currentVN.comp ? exports.s_currentVN.comp : exports.s_currentVN.creator;
    try {
        let [that, orgCallback, ...rest] = arguments;
        return that ? orgCallback.apply(that, rest) : orgCallback(...rest);
    }
    catch (err) {
        if (!this)
            throw err;
        else {
            let errorService = this.findService("StdErrorHandling");
            if (errorService)
                errorService.reportError(err, VN_1.getVNPath(this));
            else
                throw err;
        }
    }
    finally {
        // restore the current VN to the remembered value;
        exports.s_currentVN = currentVN;
        exports.s_currentClassComp = exports.s_currentClassComp;
    }
}
// Determines whether the call to requestAnimationFrame should be made or the frame has already
// been scheduled.
function requestFrameIfNeeded() {
    if (s_scheduledFrameHandle === 0)
        s_scheduledFrameHandle = requestAnimationFrame(onScheduledFrame);
}
// Callback that is called on a new UI cycle when there is a need to update UI components
let onScheduledFrame = () => {
    // clear the scheduled frame handle so that new update or replacement requests will
    // schedule a new frame.
    s_scheduledFrameHandle = 0;
    // increment tick number.
    s_currentTick++;
    // call functions scheduled to be invoked before updating components. If this function
    // calls the requestUpdate method or schedules a function to be invoked after updates,
    // they will be executed in this cycle. However, if it schedules a function to be invoked
    // after updates, it will be executed in the next cycle.
    if (s_callsScheduledBeforeUpdate.size > 0) {
        s_schedulerState = SchedulerState.BeforeUpdate;
        let callsScheduledBeforeUpdate = s_callsScheduledBeforeUpdate;
        s_callsScheduledBeforeUpdate = new ScheduledFuncMap();
        callScheduledFunctions(callsScheduledBeforeUpdate, true);
    }
    if (s_vnsScheduledForUpdate.size > 0) {
        ///////////////////
        Stats_1.DetailedStats.stats = new Stats_1.DetailedStats(`Mimbl update cycle ${s_currentTick}: `);
        Stats_1.DetailedStats.stats.start();
        ////////////
        // remember the internal set of nodes and re-create it so that it is ready for new
        // update requests. Arrange scheduled nodes by their nesting depths and perform updates.
        s_schedulerState = SchedulerState.Update;
        let vnsScheduledForUpdate = s_vnsScheduledForUpdate;
        s_vnsScheduledForUpdate = new Set();
        performCommitPhase(performRenderPhase(arrangeNodesByDepth(vnsScheduledForUpdate)));
        ///////////////////
        Stats_1.DetailedStats.stats.stop(true);
        Stats_1.DetailedStats.stats = null;
        ////////////
    }
    // call functions scheduled to be invoked after updating components
    if (s_callsScheduledAfterUpdate.size > 0) {
        s_schedulerState = SchedulerState.AfterUpdate;
        let callsScheduledAfterUpdate = s_callsScheduledAfterUpdate;
        s_callsScheduledAfterUpdate = new ScheduledFuncMap();
        callScheduledFunctions(callsScheduledAfterUpdate, false);
    }
    s_schedulerState = SchedulerState.Idle;
};
// Arranges the scheduled nodes by their nesting depths so that we update "upper" nodes before
// the lower ones. This can help avoid two conditions:
//	- rendering a child component twice: first because it called updateMe, and second
//		because its parent was also updated.
//	- unnecessary rendering a child component before it is removed by the parent
// We allocate contiguous array where indices correspond to depth. Each element in this
// array will either be undefined or contain an array of nodes at this depth.
function arrangeNodesByDepth(vnsScheduledForUpdate) {
    /////////////////////
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////
    ///////////
    // create a sparse array of certain reasonable size. If we have depths greater than this,
    // the array will grow automatically (although it is less performant it is still acceptable).
    let vnsByDepth = new Array(100);
    vnsScheduledForUpdate.forEach((vn) => {
        let arr = vnsByDepth[vn.depth];
        if (!arr) {
            arr = [];
            vnsByDepth[vn.depth] = arr;
        }
        arr.push(vn);
    });
    /////////////////////
    //////////////////////////
    ///////////
    return vnsByDepth;
}
// Performs rendering phase for all components scheduled for update and recursively for their
// sub-nodes where necessary. Returns array of VNDisp structures for each updated node.
function performRenderPhase(vnsByDepth) {
    let updatedNodeDisps = [];
    // iteration over the sparse array skips the holes.
    let disp;
    vnsByDepth.forEach((vns) => {
        vns.forEach((vn) => {
            try {
                // clear the flag that update has been requested for the node
                vn.updateRequested = false;
                // if the component was already updated in this cycle, don't update it again
                if (vn.lastUpdateTick === s_currentTick)
                    return;
                disp = new VNDisp_1.VNDisp(vn, 0 /* Unknown */, vn);
                updateVirtual(disp);
                updatedNodeDisps.push(disp);
            }
            catch (err) {
                // find the nearest error handling service. If nobody else, it is implemented
                // by the RootVN object.
                let errorService = vn.getService("StdErrorHandling", undefined, false);
                if (errorService)
                    errorService.reportError(err, exports.s_currentVN ? VN_1.getVNPath(exports.s_currentVN) : null);
                else
                    throw err;
            }
            exports.s_currentVN = null;
        });
    });
    return updatedNodeDisps;
}
// Performs the commit phase for all components scheduled for update and recursively for their
// sub-nodes where necessary. The Commit phase consists of updating DOM and calling life-cycle
// methods didMount, didUpdate and willUnmount.
function performCommitPhase(updatedNodeDisps) {
    // we don't unticipate any exceptions here because we don't invoke 3rd-party code here.
    updatedNodeDisps.forEach((disp) => {
        updatePhysical(disp);
    });
}
// Call functions scheduled before or after update cycle.
function callScheduledFunctions(funcs, beforeUpdate) {
    funcs.forEach((wrapper, func) => {
        try {
            wrapper();
        }
        catch (err) {
            console.error(`Exception while invoking function ${beforeUpdate ? "before" : "after"} updating components\n`, err);
        }
    });
}
// Recursively creates and renders this node and its sub-nodes. This method is invoked
// when a node is first mounted. If an exception is thrown during the execution of this
// method (which can be only from components' setSite or render methods),
// the component is asked to handle the error. If the component handles the error, the
// content returned from the error handling method is rendered; otherwise, the exception
// is re-thrown. Thus, the exception is propagated up until it is handled by a node that
// handles it or up to the root node.
function createVirtual(vn, parent) {
    vn.init(parent, exports.s_currentClassComp);
    // keep track of the node that is being currently processed.
    let currentVN = vn;
    exports.s_currentVN = currentVN;
    let currentClassComp = exports.s_currentClassComp;
    if (vn.comp)
        exports.s_currentClassComp = vn.comp;
    if (vn.willMount) {
        //////////////////////
        /////////////////////////////////////////////////////////////////////
        ////////////
        try {
            vn.willMount();
        }
        catch (err) {
            if (vn.supportsErrorHandling && vn.supportsErrorHandling()) {
                ////////////////////////
                /////////////////////////////////////////////////////////////////////////
                //////////////
                // let the node handle its own error and re-render
                vn.handleError(err, VN_1.getVNPath(exports.s_currentVN));
                vn.willMount();
            }
            else
                throw err;
        }
    }
    // if the node doesn't implement `render`, the node never has any sub-nodes (e.g. text nodes)
    if (vn.render) {
        try {
            createSubNodesVirtual(vn);
        }
        catch (err) {
            if (vn.supportsErrorHandling && vn.supportsErrorHandling()) {
                ////////////////////////
                /////////////////////////////////////////////////////////////////////////
                //////////////
                // let the node handle its own error and re-render
                vn.handleError(err, VN_1.getVNPath(exports.s_currentVN));
                createSubNodesVirtual(vn);
            }
            else
                throw err;
        }
    }
    // restore pointer to the currently being processed node after processing its sub-nodes.
    // If this node doesn't support error handling and an exception is thrown either by this
    // node or by one of its sub-nodes, this line is not executed and thus, s_currentVN
    // will point to our node when the exception is caught.
    exports.s_currentVN = currentVN;
    exports.s_currentClassComp = currentClassComp;
}
// Performs creation and initial rendering on the sub-nodes of our node.
function createSubNodesVirtual(vn) {
    // this method is only invoked if the node has the render function
    vn.subNodes = ContentFuncs_1.createVNChainFromContent(vn.render());
    if (vn.subNodes) {
        if (vn.subNodes.length > 1)
            vn.keyedSubNodes = new Map();
        let prevVN;
        for (let svn of vn.subNodes) {
            createVirtual(svn, vn);
            if (vn.keyedSubNodes !== undefined && svn.key !== undefined)
                vn.keyedSubNodes.set(svn.key, svn);
            if (prevVN) {
                prevVN.next = svn;
                svn.prev = prevVN;
            }
            prevVN = svn;
        }
    }
}
// Recursively creates DOM nodes for this VN and its sub-nodes.
function createPhysical(vn, anchorDN, beforeDN) {
    // remember the anchor node
    vn.anchorDN = anchorDN;
    /////////////////////
    ////////////////////////////////////////////////////////////////
    ///////////
    let ownDN = vn.mount ? vn.mount() : undefined;
    // if we have our own DOM node, add it under the anchor node
    if (ownDN)
        vn.anchorDN.insertBefore(ownDN, beforeDN);
    // if the node has sub-nodes, add DOM nodes for them. If the virtual node has its own
    // DOM node use it as an anchor for the sub-nodes.
    if (vn.subNodes) {
        // determine what nodes to use as anchor and "before" for the sub-nodes
        let newAnchorDN = ownDN ? ownDN : anchorDN;
        let newBeforeDN = ownDN ? null : beforeDN;
        // mount all sub-nodes
        for (let svn of vn.subNodes)
            createPhysical(svn, newAnchorDN, newBeforeDN);
    }
}
// Recursively calls willUnmount on this VN and its sub-nodes.
function preDestroy(vn) {
    if (vn.subNodes) {
        for (let svn of vn.subNodes)
            preDestroy(svn);
    }
    if (vn.willUnmount) {
        //////////////////////
        ///////////////////////////////////////////////////////////////////////
        ////////////
        try {
            vn.willUnmount();
        }
        catch (err) {
            console.error(`Node ${vn.name} threw exception '${err.message}' in willUnmount`);
        }
    }
}
// Recursively removes DOM nodes corresponding to this VN and its sub-nodes.
function destroyPhysical(vn) {
    // get the DOM node before we call unmount, because unmount will clear it.
    let ownDN = vn.ownDN;
    if (vn.unmount) {
        //////////////////////
        ///////////////////////////////////////////////////////////////////
        ////////////
        vn.unmount();
    }
    // If the virtual node has its own DOM node, we remove it from the DOM tree. In this case,
    // we don't need to recurse into sub-nodes, because they are removed with the parent.
    if (ownDN)
        ownDN.remove();
    else if (vn.subNodes) {
        // loop over sub-nodes from last to first because this way the DOM element removal is
        // easier.
        for (let i = vn.subNodes.length - 1; i >= 0; i--)
            destroyPhysical(vn.subNodes[i]);
    }
    vn.term();
    vn.anchorDN = undefined;
}
// Recursively renders this node and updates its sub-nodes if necessary. This method is
// invoked when a node is being updated either as a result of updateMe invocation or because
// the parent node was updated. If an exception is thrown during the execution of this method
// (which can be only from components' shouldUpdate or render methods), the component is asked
// to handle the error. If the component handles the error, the component is asked to render
// again; otherwise, the exception is re-thrown. Thus, the exception is propagated up until it
// is handled by a node that handles it or up to the root node.
function updateVirtual(disp) {
    // let vn = disp.action === VNDispAction.Insert ? disp.newVN : disp.oldVN;
    let vn = disp.oldVN;
    // keep track of the node that is being currently processed.
    let currentVN = vn;
    exports.s_currentVN = currentVN;
    let currentClassComp = exports.s_currentClassComp;
    if (vn.comp)
        exports.s_currentClassComp = vn.comp;
    try {
        updateSubNodesVirtual(disp);
    }
    catch (err) {
        if (vn.supportsErrorHandling && vn.supportsErrorHandling()) {
            ///////////////////////
            ////////////////////////////////////////////////////////////////////////
            /////////////
            // let the node handle its own error and re-render
            vn.handleError(err, VN_1.getVNPath(exports.s_currentVN));
            updateSubNodesVirtual(disp);
        }
        else
            throw err;
    }
    // indicate that the node was updated in this cycle - this will prevent it from 
    // rendering again in this cycle.
    vn.lastUpdateTick = s_currentTick;
    // restore pointer to the currently being processed node after processing its sub-nodes
    exports.s_currentVN = currentVN;
    exports.s_currentClassComp = currentClassComp;
}
// Performs rendering phase of the update on the sub-nodes of the node, which is passed as
// the oldVN member of the VNDisp structure.
function updateSubNodesVirtual(disp) {
    // render the new content and build array of dispositions objects for the sub-nodes.
    disp.buildSubNodeDispositions();
    // for nodes to be removed, call willUnmount
    if (disp.subNodesToRemove) {
        for (let svn of disp.subNodesToRemove)
            preDestroy(svn);
    }
    // perform rendering for sub-nodes that should be inserted, replaced or updated
    if (disp.subNodeDisps) {
        let oldVN, newVN;
        let parentVN = disp.oldVN;
        for (let subNodeDisp of disp.subNodeDisps) {
            oldVN = subNodeDisp.oldVN;
            newVN = subNodeDisp.newVN;
            if (subNodeDisp.action === 2 /* Update */) {
                if ((oldVN.renderOnUpdate || oldVN !== newVN) && oldVN.prepareUpdate) {
                    /////////////////////////
                    ///////////////////////////////////////////////////////////////////////////////
                    ///////////////
                    subNodeDisp.updateDisp = oldVN.prepareUpdate(newVN);
                    if (subNodeDisp.updateDisp.shouldRender)
                        updateVirtual(subNodeDisp);
                }
            }
            else if (subNodeDisp.action === 1 /* Insert */)
                createVirtual(newVN, parentVN);
        }
    }
}
// Recursively performs DOM updates corresponding to this VN and its sub-nodes.
function updatePhysical(disp) {
    // remove from DOM the old nodes designated to be removed (that is, those for which there
    // was no counterpart new node that would either update or replace it). We need to remove
    // old nodes first before we start inserting new - one reason is to properly maintain
    // references.
    if (disp.subNodesToRemove) {
        for (let svn of disp.subNodesToRemove)
            destroyPhysical(svn);
    }
    // get the node whose children are being updated. This is always the oldVN member of
    // the disp structure.
    let vn = disp.oldVN;
    // it might happen that the node being updated was already deleted by its parent. Check
    // for this situation and exit if this is the case
    if (!vn.anchorDN)
        return;
    // determine the anchor node to use when inserting new or moving existing sub-nodes. If
    // our node has its own DN, it will be the anchor for the sub-nodes; otherwise, our node's
    // anchor will be the anchor for the sub-nodes too.
    let ownDN = vn.ownDN;
    let anchorDN = ownDN != null ? ownDN : vn.anchorDN;
    // if this virtual node doesn't define its own DOM node (true for components), we will
    // need to find a DOM node before which to start inserting new nodes. Null means
    // append to the end of the anchor node's children.
    let beforeDN = ownDN != null ? null : VN_1.getNextDNUnderSameAnchorDN(vn, anchorDN);
    // re-create our current list of sub-nodes - we will populate it while updating them
    vn.subNodes = disp.subNodeDisps ? new Array(disp.subNodeDisps.length) : undefined;
    vn.keyedSubNodes = vn.subNodes !== undefined && vn.subNodes.length > 1 ? new Map() : undefined;
    // perform updates and inserts by either groups or individual nodes.
    if (disp.subNodeGroups) {
        updatePhysicalByGroups(vn, disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
        arrangeGroups(vn, disp.subNodeDisps, disp.subNodeGroups, anchorDN, beforeDN);
    }
    else if (disp.subNodeDisps) {
        updatePhysicalByNodes(vn, disp.subNodeDisps, anchorDN, beforeDN);
    }
}
// Performs updates and inserts by individual nodes.
function updatePhysicalByNodes(parentVN, disps, anchorDN, beforeDN) {
    // perform DOM operations according to sub-node disposition. We need to decide for each
    // node what node to use to insert or move it before. We go from the end of the list of
    // new nodes and on each iteration we decide the value of the "beforeDN".
    let nextVN, svn, disp, newVN, oldVN, firstDN;
    for (let i = disps.length - 1; i >= 0; i--) {
        disp = disps[i];
        newVN = disp.newVN;
        oldVN = disp.oldVN;
        // for the Update operation, the new node becomes a sub-node; for the Insert operation
        // the new node become a sub-node.
        svn = disp.action === 2 /* Update */ ? oldVN : newVN;
        parentVN.subNodes[i] = svn;
        if (disp.action === 2 /* Update */) {
            if (oldVN.renderOnUpdate || oldVN !== newVN) {
                if (disp.updateDisp.shouldCommit) {
                    /////////////////////////
                    //////////////////////////////////////////////////////////////////////////////
                    ///////////////
                    oldVN.commitUpdate(newVN);
                }
                // update the sub-nodes if necessary
                if (disp.updateDisp.shouldRender)
                    updatePhysical(disp);
            }
            // determine whether all the nodes under this VN should be moved.
            let subNodeDNs = VN_1.getImmediateDNs(oldVN);
            if (subNodeDNs.length > 0) {
                // check whether the last of the DOM nodes already resides right before the needed node
                if (subNodeDNs[subNodeDNs.length - 1].nextSibling !== beforeDN) {
                    for (let subNodeDN of subNodeDNs) {
                        anchorDN.insertBefore(subNodeDN, beforeDN);
                        ///////////////////////
                        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Moved);
                        ////////////////
                    }
                    //////////////////////
                    Stats_1.DetailedStats.stats.log(oldVN.statsCategory, Stats_1.StatsAction.Moved);
                    ///////////////
                }
                // the first of DOM nodes become the next beforeDN
                beforeDN = subNodeDNs[0];
            }
        }
        else if (disp.action === 1 /* Insert */) {
            // since we already destroyed old nodes designated to be replaced, the code is
            // identical for Replace and Insert actions
            createPhysical(newVN, anchorDN, beforeDN);
            // if the new node defines a DOM node, it becomes the DOM node before which
            // next components should be inserted/moved
            firstDN = VN_1.getFirstDN(newVN);
            if (firstDN != null)
                beforeDN = firstDN;
        }
        if (parentVN.keyedSubNodes !== undefined && svn.key !== undefined)
            parentVN.keyedSubNodes.set(svn.key, svn);
        svn.next = svn.prev = undefined;
        if (nextVN) {
            nextVN.prev = svn;
            svn.next = nextVN;
        }
        nextVN = svn;
    }
}
// Performs updates and inserts by groups. We go from the end of the list of update groups
// and on each iteration we decide the value of the "beforeDN".
function updatePhysicalByGroups(parentVN, disps, groups, anchorDN, beforeDN) {
    let currSubNodeIndex = disps.length - 1;
    let nextVN, svn, disp, newVN, oldVN, firstDN;
    for (let i = groups.length - 1; i >= 0; i--) {
        let group = groups[i];
        // first update every sub-node in the group and its sub-sub-nodes
        for (let j = group.last; j >= group.first; j--) {
            disp = disps[j];
            newVN = disp.newVN;
            oldVN = disp.oldVN;
            // for the Update operation, the new node becomes a sub-node; for the Insert operation
            // the new node become a sub-node.
            svn = group.action === 2 /* Update */ ? oldVN : newVN;
            parentVN.subNodes[currSubNodeIndex--] = svn;
            if (group.action === 2 /* Update */) {
                if (oldVN.renderOnUpdate || oldVN !== newVN) {
                    if (disp.updateDisp.shouldCommit) {
                        //////////////////////////
                        ///////////////////////////////////////////////////////////////////////////////
                        ////////////////
                        oldVN.commitUpdate(newVN);
                    }
                    // update the sub-nodes if necessary
                    if (disp.updateDisp.shouldRender)
                        updatePhysical(disp);
                }
                firstDN = VN_1.getFirstDN(oldVN);
                if (firstDN != null)
                    beforeDN = firstDN;
            }
            else if (group.action === 1 /* Insert */) {
                createPhysical(newVN, anchorDN, beforeDN);
                // if the new node defines a DOM node, it becomes the DOM node before which
                // next components should be inserted/moved
                firstDN = VN_1.getFirstDN(newVN);
                if (firstDN != null)
                    beforeDN = firstDN;
            }
            if (parentVN.keyedSubNodes !== undefined && svn.key !== undefined)
                parentVN.keyedSubNodes.set(svn.key, svn);
            svn.next = svn.prev = undefined;
            if (nextVN) {
                nextVN.prev = svn;
                svn.next = nextVN;
            }
            nextVN = svn;
        }
        // now that all nodes in the group have been updated or inserted, we can determine
        // first and last DNs for the group
        group.determineDNs();
        // if the group has at least one DN, its first DN becomes the node before which the next
        // group of new nodes (if any) should be inserted.
        if (group.firstDN)
            beforeDN = group.firstDN;
    }
}
// Arrange the groups in order as in the new sub-node list, moving them if necessary.
function arrangeGroups(parentVN, disps, groups, anchorDN, beforeDN) {
    // We go from the last group to the second group in the list because as soon as we moved all
    // groups except the first one into their right places, the first group will be automatically
    // in the right place. We always have two groups (i and i-1), which allows us to understand
    // whether we need to swap them. If we do we move the shorter group.
    for (let i = groups.length - 1; i > 0; i--) {
        let group = groups[i];
        let prevGroup = groups[i - 1];
        // determine whether the group should move. We take the last node from the group
        // and compare its DN's next sibling to the current "beforeDN".
        if (group.lastDN != null) {
            if (group.lastDN.nextSibling !== beforeDN) {
                // if the current group now resides before the previous group, then that means
                // that we are swapping two groups. In this case we want to move the shorter one.
                if (group.lastDN.nextSibling === prevGroup.firstDN && group.count > prevGroup.count)
                    moveGroup(parentVN, disps, prevGroup, anchorDN, group.firstDN);
                else
                    moveGroup(parentVN, disps, group, anchorDN, beforeDN);
            }
            // the group's first DN becomes the new beforeDN. Note that firstDN cannot be null
            // because lastDN is not null
            beforeDN = group.firstDN;
        }
    }
}
// Moves all the nodes in the given group before the given DOM node.
function moveGroup(parentVN, disps, group, anchorDN, beforeDN) {
    for (let j = group.first; j <= group.last; j++) {
        let subNodeVN = group.action === 2 /* Update */ ? disps[j].oldVN : disps[j].newVN;
        let subNodeDNs = VN_1.getImmediateDNs(subNodeVN);
        for (let subNodeDN of subNodeDNs) {
            anchorDN.insertBefore(subNodeDN, beforeDN);
            ////////////////////
            Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Elm, Stats_1.StatsAction.Moved);
            /////////////
        }
        ///////////////////
        Stats_1.DetailedStats.stats.log(subNodeVN.statsCategory, Stats_1.StatsAction.Moved);
        ////////////
    }
}


/***/ }),

/***/ "./src/core/TextVN.ts":
/*!****************************!*\
  !*** ./src/core/TextVN.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const VNBase_1 = __webpack_require__(/*! ./VNBase */ "./src/core/VNBase.ts");
/////////////////
const Stats_1 = __webpack_require__(/*! ../utils/Stats */ "./src/utils/Stats.ts");
//////////
/**
 * Represents a text node.
 */
class TextVN extends VNBase_1.VNBase {
    constructor(text) {
        super();
        this.type = 5 /* Text */;
        this.text = text;
    }
    ;
    /////////////////
    get statsCategory() { return Stats_1.StatsCategory.Text; }
    //////////
    // String representation of the virtual node. This is used mostly for tracing and error
    // reporting. The name can change during the lifetime of the virtual node; for example,
    // it can reflect an "id" property of an element (if any).
    get name() { return "#text"; }
    // Returns DOM node corresponding to the virtual node itself (if any) and not to any of its
    // sub-nodes.
    get ownDN() { return this.textNode; }
    ;
    // Creates and returns DOM node corresponding to this virtual node.
    // This method is part of the Commit phase.
    mount() {
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Added);
        ////////////
        return this.textNode = document.createTextNode(this.text);
    }
    // Destroys DOM node corresponding to this virtual node.
    // This method is part of the Commit phase.
    unmount() {
        this.textNode = undefined;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Deleted);
        ////////////
    }
    // Prepares this node to be updated from the given node. This method is invoked only if update
    // happens as a result of rendering the parent nodes. The newVN parameter is guaranteed to
    // point to a VN of the same type as this node. The returned object indicates whether children
    // should be updated and whether the commitUpdate method should be called.
    // This method is part of the Render phase.
    prepareUpdate(newVN) {
        // text nodes don't have sub-nodes
        return VN_1.VNUpdateDisp.getStockValue(this.text !== newVN.text, false);
    }
    // Commits updates made to this node to DOM.
    commitUpdate(newVN) {
        this.textNode.nodeValue = this.text = newVN.text;
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Text, Stats_1.StatsAction.Updated);
        ////////////
    }
}
exports.TextVN = TextVN;


/***/ }),

/***/ "./src/core/VN.ts":
/*!************************!*\
  !*** ./src/core/VN.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VNUpdateDisp type describes whether certain actions should be performed on the node
// during update. This object is returned from the node's prepareUpdate method.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VNUpdateDisp {
    constructor(shouldCommit, shouldRender) {
        this.shouldCommit = shouldCommit;
        this.shouldRender = shouldRender;
    }
    static getStockValue(shouldCommit, shouldRender) {
        return shouldCommit
            ? shouldRender ? VNUpdateDisp.DoCommitDoRender : VNUpdateDisp.DoCommitNoRender
            : shouldRender ? VNUpdateDisp.NoCommitDoRender : VNUpdateDisp.NoCommitNoRender;
    }
}
VNUpdateDisp.DoCommitDoRender = new VNUpdateDisp(true, true);
VNUpdateDisp.DoCommitNoRender = new VNUpdateDisp(true, false);
VNUpdateDisp.NoCommitDoRender = new VNUpdateDisp(false, true);
VNUpdateDisp.NoCommitNoRender = new VNUpdateDisp(false, false);
exports.VNUpdateDisp = VNUpdateDisp;
;
// Returns the first DOM node defined by either this virtual node or one of its sub-nodes.
// This method is only called on the mounted nodes.
function getFirstDN(vn) {
    if (vn.ownDN)
        return vn.ownDN;
    else if (!vn.subNodes)
        return null;
    // recursively call this method on the sub-nodes from first to last until a valid node
    // is returned
    let dn;
    for (let svn of vn.subNodes) {
        dn = getFirstDN(svn);
        if (dn)
            return dn;
    }
    return null;
}
exports.getFirstDN = getFirstDN;
// Returns the last DOM node defined by either this virtual node or one of its sub-nodes.
// This method is only called on the mounted nodes.
function getLastDN(vn) {
    if (vn.ownDN)
        return vn.ownDN;
    else if (!vn.subNodes)
        return null;
    // recursively call this method on the sub-nodes from last to first until a valid node
    // is returned
    let dn;
    for (let i = vn.subNodes.length - 1; i >= 0; i--) {
        dn = getLastDN(vn.subNodes[i]);
        if (dn != null)
            return dn;
    }
    return null;
}
exports.getLastDN = getLastDN;
// Returns the list of DOM nodes that are immediate children of this virtual node; that is,
// are NOT children of sub-nodes that have their own DOM node. Never returns null.
function getImmediateDNs(vn) {
    let arr = [];
    collectImmediateDNs(vn, arr);
    return arr;
}
exports.getImmediateDNs = getImmediateDNs;
// Collects all DOM nodes that are immediate children of this virtual node (that is,
// are NOT children of sub-nodes that have their own DOM node) into the given array.
function collectImmediateDNs(vn, arr) {
    if (vn.ownDN)
        arr.push(vn.ownDN);
    else if (vn.subNodes) {
        // recursively call this method on the sub-nodes from first to last
        for (let svn of vn.subNodes)
            collectImmediateDNs(svn, arr);
    }
}
// Finds the first DOM node in the tree of virtual nodes that comes after our node that is a
// child of our own anchor element. We use it as a node before which to insert/move nodes of
// our sub-nodes during the reconciliation process. The algorithm first goes to the next
// siblings of our node and then to the next siblings of our parent node recursively. It stops
// when we either find a DOM node (then it is returned) or find a different anchor element
// (then null is returned). This method is called before the reconciliation process for our
// sub-nodes starts and, therefore, it only traverses mounted nodes.
function getNextDNUnderSameAnchorDN(vn, anchorDN) {
    // check if we have sibling DOM nodes after our last sub-node - that might be elements
    // not controlled by our component.
    if (vn.subNodes && vn.subNodes.length > 0) {
        let dn = getLastDN(vn.subNodes[vn.subNodes.length - 1]);
        if (dn) {
            let nextSibling = dn.nextSibling;
            if (nextSibling !== null)
                return nextSibling;
        }
    }
    // loop over our next siblings
    for (let nvn = vn.next; nvn !== undefined; nvn = nvn.next) {
        if (!nvn.anchorDN)
            return null;
        // note that getLastDN call traverses the hierarchy of nodes. Note also that it
        // cannot find a node under a different anchor element because the first different
        // anchor element will be returned as a wanted node.
        const dn = getLastDN(nvn);
        if (dn)
            return dn;
    }
    // recurse to our parent if exists
    return vn.parent && vn.parent.anchorDN === anchorDN ? getNextDNUnderSameAnchorDN(vn.parent, anchorDN) : null;
}
exports.getNextDNUnderSameAnchorDN = getNextDNUnderSameAnchorDN;
// Returns array of node names starting with this node and up until the top-level node.
function getVNPath(vn) {
    let depth = vn.depth;
    let path = Array(depth);
    for (let i = 0, nvn = vn; i < depth; i++, nvn = nvn.parent) {
        path[i] = nvn.name;
    }
    return path;
}
exports.getVNPath = getVNPath;


/***/ }),

/***/ "./src/core/VNBase.ts":
/*!****************************!*\
  !*** ./src/core/VNBase.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const mim = __webpack_require__(/*! ../api/mim */ "./src/api/mim.ts");
const Scheduler_1 = __webpack_require__(/*! ./Scheduler */ "./src/core/Scheduler.ts");
const PubSub_1 = __webpack_require__(/*! ./PubSub */ "./src/core/PubSub.ts");
//////////
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VNBase class is a base class for all types of virtual nodes.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VNBase {
    // Initializes the node by passing the parent node to it. After this, the node knows its
    // place in the hierarchy and gets access to the root of it - the RootVN object.
    init(parent, creator) {
        this.parent = parent;
        this.depth = this.parent ? this.parent.depth + 1 : 0;
        this.creator = creator;
    }
    // Cleans up the node object before it is released.
    term() {
        // remove information about any published and subscribed services
        if (this.publishedServices !== undefined) {
            this.publishedServices.forEach((service, id) => PubSub_1.notifyServiceUnpublished(id, this));
            this.publishedServices.clear();
        }
        if (this.subscribedServices !== undefined) {
            this.subscribedServices.forEach((info, id) => { PubSub_1.notifyServiceUnsubscribed(id, this); });
            this.subscribedServices.clear();
        }
        this.next = undefined;
        this.prev = undefined;
        this.subNodes = undefined;
        this.keyedSubNodes = undefined;
        this.creator = undefined;
        this.depth = undefined;
        this.parent = undefined;
    }
    // Schedules an update for this node.
    requestUpdate() {
        if (!this.updateRequested) {
            Scheduler_1.requestNodeUpdate(this);
            this.updateRequested = true;
        }
    }
    /**
     * Schedules to call the given function before all the scheduled components have been updated.
     * @param func Function to be called.
     * @param that Object to be used as the "this" value when the function is called. This parameter
     *   is not needed if the function is already bound or it is an arrow function.
     */
    scheduleCallBeforeUpdate(func, that) {
        Scheduler_1.scheduleFuncCall(func, true, that, this);
    }
    /**
     * Schedules to call the given function before all the scheduled components have been updated.
     * @param func Function to be called.
     * @param that Object to be used as the "this" value when the function is called. This parameter
     *   is not needed if the function is already bound or it is an arrow function.
     */
    scheduleCallAfterUpdate(func, that) {
        Scheduler_1.scheduleFuncCall(func, false, that, this);
    }
    // Registers an object of any type as a service with the given ID that will be available for
    // consumption by descendant nodes.
    publishService(id, service) {
        if (this.publishedServices === undefined)
            this.publishedServices = new Map();
        let existinService = this.publishedServices.get(id);
        if (existinService !== service) {
            this.publishedServices.set(id, service);
            PubSub_1.notifyServicePublished(id, this);
        }
    }
    // Unregisters a service with the given ID.
    unpublishService(id) {
        if (this.publishedServices === undefined)
            return;
        this.publishedServices.delete(id);
        PubSub_1.notifyServiceUnpublished(id, this);
        if (this.publishedServices.size === 0)
            this.publishedServices = undefined;
    }
    // Subscribes for a service with the given ID. If the service with the given ID is registered
    // by one of the ancestor nodes, the passed Ref object will reference it; otherwise,
    // the Ref object will be set to the defaultValue (if specified) or will remain undefined.
    // Whenever the value of the service that is registered by a closest ancestor node is
    // changed, the Ref object will receive the new value.
    subscribeService(id, ref, defaultService, useSelf) {
        if (this.subscribedServices === undefined)
            this.subscribedServices = new Map();
        let info = new VNSubscribedServiceInfo();
        info.ref = ref;
        info.defaultService = defaultService;
        info.useSelf = useSelf ? true : false;
        this.subscribedServices.set(id, info);
        PubSub_1.notifyServiceSubscribed(id, this);
        mim.setRef(ref, this.getService(id, defaultService));
    }
    // Unsubscribes from a service with the given ID. The Ref object that was used to subscribe,
    // will be set to undefined.
    unsubscribeService(id) {
        if (this.subscribedServices === undefined)
            return;
        let info = this.subscribedServices.get(id);
        if (info === undefined)
            return;
        mim.setRef(info.ref, undefined);
        this.subscribedServices.delete(id);
        PubSub_1.notifyServiceUnsubscribed(id, this);
        if (this.subscribedServices.size === 0)
            this.subscribedServices = undefined;
    }
    // Retrieves the value for a service with the given ID registered by a closest ancestor
    // node or the default value if none of the ancestor nodes registered a service with
    // this ID. This method doesn't establish a subscription and only reflects the current state.
    getService(id, defaultService, useSelf) {
        let service = this.findService(id, useSelf);
        return service !== undefined ? service : defaultService;
    }
    // Goes up the chain of nodes looking for a published service with the given ID. Returns
    // undefined if the service is not found. Note that null might be a valid value.
    findService(id, useSelf) {
        if (useSelf) {
            if (this.publishedServices !== undefined) {
                let service = this.publishedServices.get(id);
                if (service !== undefined)
                    return service;
            }
        }
        // go up the chain; note that we don't pass the useSelf parameter on.
        return this.parent ? this.parent.findService(id, true) : undefined;
    }
    // Notifies the node that publication information about the given service (to which the node
    // has previously subscribed) has changed.
    notifyServiceChanged(id) {
        if (this.subscribedServices === undefined)
            return;
        let info = this.subscribedServices.get(id);
        if (info === undefined)
            return;
        mim.setRef(info.ref, this.getService(id, info.defaultService));
    }
    /**
     * Creates a wrapper function with the same signature as the given callback so that if the original
     * callback throws an exception, it is processed by the Mimbl error handling mechanism so that the
     * exception bubles from this virtual node up the hierarchy until a node/component that knows
     * to handle errors is found.
     *
     * This function should be called by the code that is not part of any component but still has access
     * to the IVNode object; for example, custom attribute handlers. Components that derive from the
     * mim.Component class should use the wrapCallback method of the mim.Component class.
     *
     * @param callback
     */
    wrapCallback(callback, that) {
        return Scheduler_1.wrapCallbackWithVN(callback, that, this);
    }
}
exports.VNBase = VNBase;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The VNSubscribedServiceInfo class keeps information about a subscription of a node to a service.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class VNSubscribedServiceInfo {
}


/***/ }),

/***/ "./src/core/VNDisp.ts":
/*!****************************!*\
  !*** ./src/core/VNDisp.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const VN_1 = __webpack_require__(/*! ./VN */ "./src/core/VN.ts");
const ContentFuncs_1 = __webpack_require__(/*! ./ContentFuncs */ "./src/core/ContentFuncs.ts");
/**
 * The VNDispGroup class describes a group of consecutive VNDisp objects correspponding to the
 * sequence of sub-nodes. The group is described using indices of VNDisp objects in the
 * subNodeDisp field of the parent VNDisp object.
 */
class VNDispGroup {
    /** Number of nodes in the group. */
    get count() { return this.last - this.first + 1; }
    ;
    constructor(parentDisp, action, first, last) {
        this.parentDisp = parentDisp;
        this.action = action;
        this.first = first;
        this.last = last;
    }
    /**
     * Determines first and last DOM nodes for the group. This method is invoked only after the
     * nodes were phisically updated/inserted and we can obtain their DOM nodes.
     */
    determineDNs() {
        let disp;
        let vn;
        for (let i = this.first; i <= this.last; i++) {
            disp = this.parentDisp.subNodeDisps[i];
            vn = this.action === 2 /* Update */ ? disp.oldVN : disp.newVN;
            this.firstDN = VN_1.getFirstDN(vn);
            if (this.firstDN)
                break;
        }
        for (let i = this.last; i >= this.first; i--) {
            disp = this.parentDisp.subNodeDisps[i];
            vn = this.action === 2 /* Update */ ? disp.oldVN : disp.newVN;
            this.lastDN = VN_1.getLastDN(vn);
            if (this.lastDN)
                break;
        }
    }
}
exports.VNDispGroup = VNDispGroup;
/**
 * If a node has more than this number of sub-nodes, then we build groups. The idea is that
 * otherwise, the overhead of building groups is not worth it.
 */
const NO_GROUP_THRESHOLD = 8;
/**
 * The VNDisp class is a recursive structure that describes a disposition for a node and its
 * sub-nodes during the reconciliation process.
 */
class VNDisp {
    constructor(newVN, action = 0 /* Unknown */, oldVN) {
        this.action = action;
        this.newVN = newVN;
        this.oldVN = oldVN;
    }
    /**
     * Compares old and new chains of sub-nodes and determines what nodes should be created, deleted
     * or updated. The result is remembered as an array of VNDisp objects for each sub-node and as
     * array of old sub-nodes that should be deleted. In addition, the new sub-nodes are divided
     * into groups of consecutive nodes that should be updated and of nodes that should be inserted.
     * The groups are built in a way so that if a node should be moved, its entire group is moved.
     */
    buildSubNodeDispositions() {
        // render the new content
        let newChain = ContentFuncs_1.createVNChainFromContent(this.oldVN.render());
        let newLen = newChain ? newChain.length : 0;
        let oldChain = this.oldVN.subNodes;
        let oldLen = oldChain ? oldChain.length : 0;
        // if either old or new or both chains are empty, we do special things
        if (newLen === 0 && oldLen === 0) {
            // both chain are empty - do nothing
            return;
        }
        else if (newLen === 0) {
            // new chain is empty - delete all old nodes
            this.subNodesToRemove = oldChain;
            return;
        }
        else if (oldLen === 0) {
            // old chain is empty - insert all new nodes
            this.subNodeDisps = newChain.map(newVN => new VNDisp(newVN, 1 /* Insert */));
            if (newLen > NO_GROUP_THRESHOLD)
                this.subNodeGroups = [new VNDispGroup(this, 1 /* Insert */, 0, newLen - 1)];
            return;
        }
        // determine whether recycling of non-matching old keyed sub-nodes by non-matching new
        // keyed sub-nodes is allowed. If update strategy is not defined for the node, the
        // recycling is allowed.
        let allowKeyedNodeRecycling = true;
        let updateStrategy = this.oldVN ? this.oldVN.updateStrategy : undefined;
        if (updateStrategy && updateStrategy.allowKeyedNodeRecycling !== undefined)
            allowKeyedNodeRecycling = updateStrategy.allowKeyedNodeRecycling;
        // process the special case with a single sub-node in both old and new chains just
        // to avoid creating temporary structures
        if (newLen === 1 && oldLen === 1) {
            let newVN = newChain[0];
            let oldVN = oldChain[0];
            let disp = new VNDisp(newVN);
            this.subNodeDisps = [disp];
            if (oldVN === newVN ||
                ((allowKeyedNodeRecycling || newVN.key === oldVN.key) && isUpdatePossible(oldVN, newVN))) {
                disp.action = 2 /* Update */;
                disp.oldVN = oldVN;
            }
            else {
                disp.action = 1 /* Insert */;
                this.subNodesToRemove = [oldVN];
            }
            return;
        }
        // we are here if both old and new chains contain more than one node; therefore, the map of
        // keyed sub-nodes exists (although it might be empty).
        let oldMap = this.oldVN.keyedSubNodes;
        let oldMapSize = oldMap ? oldMap.size : 0;
        // prepare arrays for VNDisp objects for new nodes and for old nodes to be removed
        this.subNodeDisps = new Array(newLen);
        this.subNodesToRemove = [];
        // if the number of nodes in the old map is equal to the total number of old nodes, that
        // means that all old nodes are keyed. If this is the case AND recycling of keyed nodes
        // is not allowed, we will not need to put unkeyed or keyed but unmatched new nodes aside.
        // We know that they will have to be inserted.
        if (oldMapSize === oldLen && !allowKeyedNodeRecycling)
            this.matchOldKeyedOnly(oldMap, newChain, newLen, newLen > NO_GROUP_THRESHOLD);
        else if (oldMapSize === 0 && allowKeyedNodeRecycling)
            this.matchOldNonKeyedOnly(oldChain, oldLen, newChain, newLen, newLen > NO_GROUP_THRESHOLD);
        else
            this.matchOldMixed(oldChain, oldLen, oldMap, newChain, newLen, allowKeyedNodeRecycling, newLen > NO_GROUP_THRESHOLD);
        if (this.subNodesToRemove.length === 0)
            this.subNodesToRemove = undefined;
    }
    /**
     * This method is invoked when we know that all old nodes have keys and the recycling of keyed
     * nodes is NOT allowed. Therefore, when we try to match new nodes to old ones we know that
     * non-keyed or keyed but unmatched new nodes will be marked for insertion. We also can build
     * groups (if requested) in the same loop.
     */
    matchOldKeyedOnly(oldMap, newChain, newLen, buildGroups) {
        // declare variables that will be used throughout the following code
        let disp, oldVN, newVN, key, action, group;
        // if we need to build groups, prepare array of groups
        if (buildGroups)
            this.subNodeGroups = [];
        // Loop over new nodes, create VNDisp structures try to match new nodes to old ones and
        // mark unkeyed or keyed but unmatched new nodes for insertion. On each iteration decide
        // whether we need to open a new group or put the new node into the existing group or
        // close the existing group and open a new one.
        for (let i = 0; i < newLen; i++) {
            newVN = newChain[i];
            disp = this.subNodeDisps[i] = new VNDisp(newVN);
            key = newVN.key;
            // decide what to do with the new node
            if (key === undefined)
                action = 1 /* Insert */;
            else {
                oldVN = oldMap.get(key);
                if (oldVN === undefined)
                    action = 1 /* Insert */;
                else {
                    if (oldVN === newVN || isUpdatePossible(oldVN, newVN)) {
                        action = 2 /* Update */;
                        disp.oldVN = oldVN;
                    }
                    else {
                        action = 1 /* Insert */;
                        this.subNodesToRemove.push(oldVN);
                    }
                    // remove the old node from the map - this way the old nodes remaining in the
                    // map are those that are unmatched.
                    oldMap.delete(key);
                }
            }
            disp.action = action;
            if (buildGroups) {
                if (!group) {
                    // open a new group
                    group = new VNDispGroup(this, action, i);
                    this.subNodeGroups.push(group);
                }
                if (action !== group.action) {
                    // close the group with the previous index and open a new group. Note that we
                    // cannot be here for a node that starts a new group because for such node
                    // disp.action === groupAction.
                    group.last = i - 1;
                    group = new VNDispGroup(this, action, i);
                    this.subNodeGroups.push(group);
                }
                else if (action === 2 /* Update */) {
                    // an "update" or "none" node is out-of-order and should close the current group if
                    // its next sibling in the new list is different from the next sibling in the old list.
                    // The last node will close the last group after the loop.
                    if (i > 0 && this.subNodeDisps[i - 1].oldVN !== oldVN.prev) {
                        // close the group with the previous index and open new group.
                        group.last = i - 1;
                        group = new VNDispGroup(this, action, i);
                        this.subNodeGroups.push(group);
                    }
                }
                // all consecutive "insert" nodes belong to the same group so we just wait for the
                // next node
            }
        }
        // close the last group if requested to build groups (only in this case we may have a group object)
        if (group)
            group.last = newLen - 1;
        // if we have old nodes left, they should be removed
        oldMap.forEach(oldVN => this.subNodesToRemove.push(oldVN));
    }
    /**
     * This method is invoked when we know that none of the old nodes have keys and the recycling of keyed
     * nodes IS allowed. Therefore, we try to match new nodes to old ones by index. We also can build
     * groups (if requested) in the same loop.
     */
    matchOldNonKeyedOnly(oldChain, oldLen, newChain, newLen, buildGroups) {
        // declare variables that will be used throughout the following code
        let disp, oldVN, newVN, key;
        // Loop over new nodes, create VNDisp structures and try to match new and old nodes by
        // index.
        let i = 0;
        for (; i < newLen && i < oldLen; i++) {
            newVN = newChain[i];
            disp = this.subNodeDisps[i] = new VNDisp(newVN);
            oldVN = oldChain[i];
            // decide what to do with the new node
            if (oldVN === newVN || isUpdatePossible(oldVN, newVN)) {
                disp.action = 2 /* Update */;
                disp.oldVN = oldVN;
            }
            else {
                disp.action = 1 /* Insert */;
                this.subNodesToRemove.push(oldVN);
            }
        }
        // remaining new nodes should be inserted
        for (let j = i; j < newLen; j++)
            this.subNodeDisps[j] = new VNDisp(newChain[j], 1 /* Insert */);
        // remaining old nodes should be removed
        for (let j = i; j < oldLen; j++)
            this.subNodesToRemove.push(oldChain[j]);
        if (buildGroups)
            this.buildSubNodeGroups();
    }
    /**
     * This method is invoked when we know that not all old nodes have keys or the recycling of
     * keyed nodes is allowed. Therefore, when we have a non-keyed or keyed but unmatched new
     * node, we first put it aside and only after we went over all new nodes we can decide
     * what to do with those that we put aside. Also, only after we went over all new nodes we
     * can build groups if requested.
     */
    matchOldMixed(oldChain, oldLen, oldMap, newChain, newLen, allowKeyedNodeRecycling, buildGroups) {
        // declare variables that will be used throughout the following code
        let disp, oldVN, newVN, key;
        // Loop over new nodes, create VNDisp structures try to match new nodes to old ones and
        // put unmatched new nodes aside
        let newUnmatchedDisps = [];
        for (let i = 0; i < newLen; i++) {
            newVN = newChain[i];
            disp = this.subNodeDisps[i] = new VNDisp(newVN);
            key = newVN.key;
            if (key === undefined) {
                // put the unkeyed new node aside
                newUnmatchedDisps.push(disp);
            }
            else {
                oldVN = oldMap.get(key);
                if (oldVN === undefined) {
                    // if recycling allowed we put unmatched node aside; otherwise, we indicate that
                    // it should be inserted
                    if (allowKeyedNodeRecycling)
                        newUnmatchedDisps.push(disp);
                    else
                        disp.action = 1 /* Insert */;
                }
                else {
                    if (oldVN === newVN || isUpdatePossible(oldVN, newVN)) {
                        disp.action = 2 /* Update */;
                        disp.oldVN = oldVN;
                    }
                    else {
                        disp.action = 1 /* Insert */;
                        this.subNodesToRemove.push(oldVN);
                    }
                    // remove the old node from the map - this way the old nodes remaining in the
                    // map are those that are unmatched.
                    oldMap.delete(key);
                }
            }
        }
        // loop over old sub-nodes, skip already matched ones and try to match others to the
        // yet-unmatched new nodes. Unmatched old nodes are those that are either unkeyed or
        // the keyed ones that are still in the oldMap.
        let iOld = 0, iNew = 0, newUnmatchedLen = newUnmatchedDisps.length;
        while (iOld < oldLen && iNew < newUnmatchedLen) {
            // skip already matched keyed nodes
            oldVN = oldChain[iOld++];
            if (oldVN.key !== undefined && !oldMap.has(oldVN.key))
                continue;
            disp = newUnmatchedDisps[iNew++];
            newVN = disp.newVN;
            // if recycling is not allowed and either old or new nodes is keyed, insert new and remove old
            if (!allowKeyedNodeRecycling && (oldVN.key !== undefined || newVN.key !== undefined)) {
                disp.action = 1 /* Insert */;
                this.subNodesToRemove.push(oldVN);
            }
            else if (isUpdatePossible(oldVN, newVN)) {
                disp.action = 2 /* Update */;
                disp.oldVN = oldVN;
            }
            else {
                disp.action = 1 /* Insert */;
                this.subNodesToRemove.push(oldVN);
            }
        }
        // if we have new nodes left, they should be inserted
        for (let j = iNew; j < newUnmatchedLen; j++)
            newUnmatchedDisps[j].action = 1 /* Insert */;
        // if we have old nodes left, they should be removed
        for (let j = iOld; j < oldLen; j++) {
            // skip already matched keyed nodes
            oldVN = oldChain[j];
            if (oldVN.key !== undefined && !oldMap.has(oldVN.key))
                continue;
            this.subNodesToRemove.push(oldVN);
        }
        if (buildGroups)
            this.buildSubNodeGroups();
    }
    /**
     * From a flat list of new sub-nodes builds groups of consecutive nodes that should be either
     * updated or inserted.
     */
    buildSubNodeGroups() {
        // we are here only if we have some number of sub-node dispositions
        let count = this.subNodeDisps.length;
        ///////////////
        // this method is not supposed to be called if the number of sub-nodes is less then
        // the pre-determined threshold
        if (count <= NO_GROUP_THRESHOLD || count === 0)
            return;
        ////////////
        // create array of groups and create the first group starting from the first node
        this.subNodeGroups = [];
        let group = new VNDispGroup(this, this.subNodeDisps[0].action, 0);
        this.subNodeGroups.push(group);
        // loop over sub-nodes and on each iteration decide whether we need to open a new group
        // or put the current node into the existing group or close the existing group and open
        // a new one.
        let action;
        let disp;
        for (let i = 1; i < count; i++) {
            disp = this.subNodeDisps[i];
            action = disp.action;
            if (action !== group.action) {
                // close the group with the previous index. Decrement the iterating index so that
                // the next iteration will open a new group. Note that we cannot be here for a node
                // that starts a new group because for such node disp.action === groupAction.
                group.last = i - 1;
                group = new VNDispGroup(this, action, i);
                this.subNodeGroups.push(group);
            }
            else if (action === 2 /* Update */) {
                // an "update" or "none" node is out-of-order and should close the current group if
                // its next sibling in the new list is different from the next sibling in the old list.
                // The last node will close the last group after the loop.
                if (this.subNodeDisps[i - 1].oldVN !== disp.oldVN.prev) {
                    // close the group with the current index.
                    group.last = i - 1;
                    group = new VNDispGroup(this, action, i);
                    this.subNodeGroups.push(group);
                }
            }
            // all consecutive "insert" nodes belong to the same group so we just wait for the
            // next node
        }
        // close the last group
        if (group !== undefined)
            group.last = count - 1;
    }
}
exports.VNDisp = VNDisp;
/**
 * Determines whether update of the given old node from the given new node is possible. Update
 * is possible if the types of nodes are the same and either the isUpdatePossible method is not
 * defined on the old node or it returns true.
 */
function isUpdatePossible(oldVN, newVN) {
    return (oldVN.type === newVN.type &&
        (oldVN.isUpdatePossible === undefined || oldVN.isUpdatePossible(newVN)));
}


/***/ }),

/***/ "./src/mimblTypes.ts":
/*!***************************!*\
  !*** ./src/mimblTypes.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Type definitions for mimbl
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./api/mim */ "./src/api/mim.ts"));
__export(__webpack_require__(/*! ./api/LocalStyles */ "./src/api/LocalStyles.ts"));


/***/ }),

/***/ "./src/utils/ElmAttr.ts":
/*!******************************!*\
  !*** ./src/utils/ElmAttr.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/////////////////
const Stats_1 = __webpack_require__(/*! ./Stats */ "./src/utils/Stats.ts");
///////////////////////////////////////////////////////////////////////////////////////////////////
// Exported class that provides static methods for setting, updating and removing Element
// attributes corresponding to property names.
//
// Element attributes are determined using properties passed to the ElmVN methods. Some
// properties allow using non-trivial types, e.g. arrays or objects, and thus cannot be simply
// handled using the Element.setAttribute method.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class ElmAttr {
    // Registers information about the given property.
    static registerProperty(propName, info) {
        ElmAttr.propInfos[propName] = info;
    }
    // Registers information about the given property.
    static getPropertyInfo(propName) {
        return ElmAttr.propInfos[propName];
    }
    // Using the given property name and its value set the appropriate attribute(s) on the
    // element. This method handles special cases of properties with non-trivial values.
    static setAttr(elm, propName, info, propVal) {
        // get property info object
        if (info === undefined)
            elm.setAttribute(propName, typeof propVal === "string" ? propVal : propVal.toString());
        else {
            // get actual attribute name to use
            let attrName = info.attrName;
            if (attrName === undefined)
                attrName = propName;
            if (info.set !== undefined)
                info.set(elm, attrName, propVal);
            else
                elm.setAttribute(attrName, typeof propVal === "string" ? propVal : propVal.toString());
        }
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Added);
        ////////////
    }
    // Determines whether the old and the new values of the property are different and sets the
    // updated value to the element's attribute. Returns true if update has been performed and
    // false if no change in property value has been detected.
    static updateAttr(elm, propName, info, oldPropVal, newPropVal) {
        // get property info object
        if (info === undefined) {
            // if this is not a special case (property is not in our list) just compare them and
            // if they are different set the attribute to the new value.
            if (oldPropVal === newPropVal)
                return false;
            else {
                elm.setAttribute(propName, typeof newPropVal === "string" ? newPropVal : newPropVal.toString());
                /////////////////////
                Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Updated);
                //////////////
                return true;
            }
        }
        // compare old and new value using the update function if defined; if not, just compare
        // the two values and if they are different use the new one as a value to update with.
        // Note that the neither old nor new values can be undefined or null.
        let updateVal;
        if (info.diff !== undefined) {
            updateVal = info.diff(propName, oldPropVal, newPropVal);
            // if updateValue is undefined then no change has been detected.
            if (updateVal === undefined)
                return false;
        }
        else if (oldPropVal !== newPropVal)
            updateVal = newPropVal;
        // get actual attribute name to use
        let attrName = info.attrName;
        if (attrName === undefined)
            attrName = propName;
        // if update method is defined use it; otherwise, remove the old value and set the new one
        if (info.update !== undefined)
            info.update(elm, attrName, updateVal);
        else {
            // if remove method is defined, use it. Note that if remove method is not defined
            // we don't use elm.removeAttribute to save time (as the following info.set or
            // elm.setAttribute will override it anyway.
            if (info.remove !== undefined)
                info.remove(elm, attrName);
            if (info.set !== undefined)
                info.set(elm, attrName, updateVal);
            else
                elm.setAttribute(attrName, typeof updateVal === "string" ? updateVal : updateVal.toString());
        }
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Updated);
        ////////////
        // indicate that there was change in attribute value.
        return true;
    }
    // Removes the attribute(s) corresponding to the given property.
    static removeAttr(elm, propName, info) {
        // get property info object
        if (info === undefined)
            elm.removeAttribute(propName);
        else {
            // get actual attribute name to use
            let attrName = info.attrName;
            if (attrName === undefined)
                attrName = propName;
            if (info.remove !== undefined) {
                info.remove(elm, attrName);
            }
            else
                elm.removeAttribute(attrName);
        }
        ///////////////////
        Stats_1.DetailedStats.stats.log(Stats_1.StatsCategory.Attr, Stats_1.StatsAction.Deleted);
        ////////////
    }
}
// Object that maps property names to PropInfo-derived objects. Information about custom
// attributes is added to this object when the registerProperty method is called.
ElmAttr.propInfos = {
    // attributes - only those attributes are listed that have non-trivial treatment
    style: { type: 1 /* Attr */, set: setStyleProp, diff: diffStyleProp, update: updateStyleProp },
    value: { type: 1 /* Attr */, set: setValueProp, diff: diffValueProp, remove: removeValueProp },
    defaultValue: { type: 1 /* Attr */, set: setValueProp, diff: diffDefaultValueProp, remove: removeDefaultValueProp },
    checked: { type: 1 /* Attr */, set: setCheckedProp, diff: diffCheckedProp, remove: removeCheckedProp },
    defaultChecked: { type: 1 /* Attr */, set: setCheckedProp, diff: diffDefaultValueProp, remove: removeDefaultValueProp },
    // events
    abort: { type: 2 /* Event */ },
    animationcancel: { type: 2 /* Event */ },
    animationend: { type: 2 /* Event */ },
    animationiteration: { type: 2 /* Event */ },
    animationstart: { type: 2 /* Event */ },
    auxclick: { type: 2 /* Event */ },
    blur: { type: 2 /* Event */ },
    cancel: { type: 2 /* Event */ },
    canplay: { type: 2 /* Event */ },
    canplaythrough: { type: 2 /* Event */ },
    change: { type: 2 /* Event */ },
    click: { type: 2 /* Event */ },
    close: { type: 2 /* Event */ },
    contextmenu: { type: 2 /* Event */ },
    cuechange: { type: 2 /* Event */ },
    dblclick: { type: 2 /* Event */ },
    drag: { type: 2 /* Event */ },
    dragend: { type: 2 /* Event */ },
    dragenter: { type: 2 /* Event */ },
    //dragexit: { type: PropType.Event },
    dragleave: { type: 2 /* Event */ },
    dragover: { type: 2 /* Event */ },
    dragstart: { type: 2 /* Event */ },
    drop: { type: 2 /* Event */ },
    durationchange: { type: 2 /* Event */ },
    emptied: { type: 2 /* Event */ },
    ended: { type: 2 /* Event */ },
    error: { type: 2 /* Event */ },
    focus: { type: 2 /* Event */ },
    gotpointercapture: { type: 2 /* Event */ },
    input: { type: 2 /* Event */ },
    invalid: { type: 2 /* Event */ },
    keydown: { type: 2 /* Event */ },
    keypress: { type: 2 /* Event */ },
    keyup: { type: 2 /* Event */ },
    load: { type: 2 /* Event */ },
    loadeddata: { type: 2 /* Event */ },
    loadedmetadata: { type: 2 /* Event */ },
    loadend: { type: 2 /* Event */ },
    loadstart: { type: 2 /* Event */ },
    lostpointercapture: { type: 2 /* Event */ },
    mousedown: { type: 2 /* Event */ },
    mouseenter: { type: 2 /* Event */, isBubbling: false },
    mouseleave: { type: 2 /* Event */, isBubbling: false },
    mousemove: { type: 2 /* Event */ },
    mouseout: { type: 2 /* Event */ },
    mouseover: { type: 2 /* Event */ },
    mouseup: { type: 2 /* Event */ },
    pause: { type: 2 /* Event */ },
    play: { type: 2 /* Event */ },
    playing: { type: 2 /* Event */ },
    pointercancel: { type: 2 /* Event */ },
    pointerdown: { type: 2 /* Event */ },
    pointerenter: { type: 2 /* Event */ },
    pointerleave: { type: 2 /* Event */ },
    pointermove: { type: 2 /* Event */ },
    pointerout: { type: 2 /* Event */ },
    pointerover: { type: 2 /* Event */ },
    pointerup: { type: 2 /* Event */ },
    progress: { type: 2 /* Event */ },
    ratechange: { type: 2 /* Event */ },
    reset: { type: 2 /* Event */ },
    resize: { type: 2 /* Event */ },
    scroll: { type: 2 /* Event */ },
    //securitypolicyviolation: { type: PropType.Event },
    seeked: { type: 2 /* Event */ },
    seeking: { type: 2 /* Event */ },
    select: { type: 2 /* Event */ },
    stalled: { type: 2 /* Event */ },
    submit: { type: 2 /* Event */ },
    suspend: { type: 2 /* Event */ },
    timeupdate: { type: 2 /* Event */ },
    toggle: { type: 2 /* Event */ },
    touchcancel: { type: 2 /* Event */ },
    touchend: { type: 2 /* Event */ },
    touchenter: { type: 2 /* Event */ },
    touchleave: { type: 2 /* Event */ },
    touchmove: { type: 2 /* Event */ },
    touchstart: { type: 2 /* Event */ },
    transitioncancel: { type: 2 /* Event */ },
    transitionend: { type: 2 /* Event */ },
    transitionrun: { type: 2 /* Event */ },
    transitionstart: { type: 2 /* Event */ },
    volumechange: { type: 2 /* Event */ },
    waiting: { type: 2 /* Event */ },
    wheel: { type: 2 /* Event */ },
    fullscreenchange: { type: 2 /* Event */ },
    fullscreenerror: { type: 2 /* Event */ },
    copy: { type: 2 /* Event */ },
    cut: { type: 2 /* Event */ },
    paste: { type: 2 /* Event */ },
};
exports.ElmAttr = ElmAttr;
//// Register events with special names
//ElmAttr.registerProp( "smartcardInsert",
//	{ mustRemove: mustRemoveListeners, set: setListenerProp, remove: removeListenerProp, attrName: "smartcard-insert" });
//ElmAttr.registerProp( "smartcardInsertCapture",
//	{ mustRemove: mustRemoveListeners, set: setListenerCaptureProp, remove: removeListenerCaptureProp, attrName: "smartcard-insert" });
//ElmAttr.registerProp( "smartcardRemove",
//	{ mustRemove: mustRemoveListeners, set: setListenerProp, remove: removeListenerProp, attrName: "smartcard-insert" });
//ElmAttr.registerProp( "smartcardRemoveCapture",
//	{ mustRemove: mustRemoveListeners, set: setListenerCaptureProp, remove: removeListenerCaptureProp, attrName: "smartcard-remove" });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Handling of style property. Style property can be specified either as a string or as the
// CSSStyleDeclaration object. If the old and new style property values are of different types
// the diff function returns the new style value. If both are of the string type, then the new
// string value is returned. If both are of the CSSStyleDeclaration type, then an object is
// returned whose keys correspond to style items that should be changed. For updated items, the
// key value is from the new style value; for removed items, the key value is undefined.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function setStyleProp(elm, attrName, propVal) {
    if (propVal === undefined || propVal === null)
        elm.removeAttribute("style");
    else {
        const elmStyle = elm.style;
        for (let key in propVal) {
            const keyVal = propVal[key];
            if (elmStyle[key] !== keyVal)
                elmStyle[key] = keyVal;
        }
    }
}
function diffStyleProp(attrName, oldPropVal, newPropVal) {
    if (typeof oldPropVal !== typeof newPropVal)
        return newPropVal;
    else {
        const oldStyle = oldPropVal;
        const newStyle = newPropVal;
        const updateVal = {};
        let changesExist = false;
        // loop over keys in the old style object and find those that are not in the new one. These
        // will be removed.
        for (let key in oldStyle) {
            const oldVal = oldStyle[key];
            const newVal = newStyle[key];
            if (newVal === undefined) {
                changesExist = true;
                updateVal[key] = undefined;
            }
            else if (newVal !== oldVal) {
                changesExist = true;
                updateVal[key] = newVal;
            }
        }
        // loop over keys in the new style object and find those that are not in the old one. These
        // will be added.
        for (let key in newStyle) {
            const oldVal = oldStyle[key];
            if (oldVal === undefined) {
                changesExist = true;
                updateVal[key] = newStyle[key];
            }
        }
        return changesExist ? updateVal : undefined;
    }
}
function updateStyleProp(elm, attrName, updateVal) {
    const elmStyle = elm.style;
    for (let key in updateVal) {
        const keyVal = updateVal[key];
        if (keyVal === undefined)
            elmStyle[key] = null;
        //elmStyle[key] = "initial";
        else
            elmStyle[key] = keyVal;
    }
}
//// Determines whether the first style is a complete subset of the second one; that is keys
//// in the first style are all found and have the same values in the second style.
//function isStyle1SubsetOfStyle2( style1: Object, style2: Object): boolean
//{
//	for( let key1 in style1)
//	{
//		if (style1[key1] !== style2[key1])
//			return false;
//	}
//	return true;
//}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Handling of value property. Instead of setting value property as an attribute we set the value
// field on the element. The set and update methods work the same way. We define the remove method
// by setting the elm.value field to null.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function setValueProp(elm, attrName, propVal) {
    // we need to cast elm to any, because generic Element doesn't have value property.
    elm.value = propVal;
}
function diffValueProp(attrName, oldPropValVal, newPropVal) {
    // by always returning the new property value we cause the value to always be updated to
    // that of the new property. We want always to set this value to the element because the
    // element's value may have chnged (by the user or programmatically).
    return newPropVal;
}
function removeValueProp(elm, attrName) {
    // we need to cast elm to any, because generic Element doesn't have value property.
    elm.value = null;
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Handling of defaultValue property. The defaultValue property works as a value property when the
// element is first mounted and is ignored upon updates and removals. This allows using
// defaultValue to initialize the control value once.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function diffDefaultValueProp(attrName, oldPropValVal, newPropVal) {
    // by returning undefined we indicate that no changes were made to the property and thus the
    // update will not be called
    return undefined;
}
function removeDefaultValueProp(elm, attrName) {
    // do nothing
}
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// Handling of checked property. Instead of setting checked property as an attribute we set the
// checked field on the element. The set and update methods work the same way. We define the remove
// method by setting the elm.checked field to null.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
function setCheckedProp(elm, attrName, propVal) {
    // we need to cast elm to any, because generic Element doesn't have value property.
    elm.checked = propVal;
}
function diffCheckedProp(attrName, oldPropValVal, newPropVal) {
    // by always returning the new property value we cause the value to always be updated to
    // that of the new property.
    return newPropVal;
}
function removeCheckedProp(elm, attrName) {
    // we need to cast elm to any, because generic Element doesn't have value property.
    elm.checked = false;
}


/***/ }),

/***/ "./src/utils/EventSlot.ts":
/*!********************************!*\
  !*** ./src/utils/EventSlot.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The EventSlot class defines an event with custom parameters as members of classes without the
// need for the classes to derive from EventTarget and use string names for events. Multiple
// listeners can be added/removed to/from an event.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class EventSlot {
    constructor() {
        // Method that raises the event and calls all the listeners (if any). It has the signature
        // of the template function so only proper-types parameters can be passed to it.
        this.fire = this.realFire;
        // Set of listener functions. When there are no listeners, this field is set to null to
        // preserve space.
        this.listeners = null;
    }
    // Adds the given function as a listener to the event. Note that this should not be a lambda
    // function because there will be no way to remove a lambda function listener later.
    add(listener) {
        if (this.listeners === null)
            this.listeners = new Set();
        this.listeners.add(listener);
    }
    // Removes the given function as a listener to the event.
    remove(listener) {
        if (this.listeners !== null) {
            this.listeners.delete(listener);
            if (this.listeners.size === 0)
                this.listeners = null;
        }
    }
    // Removes all listener to the event.
    clear() {
        this.listeners = null;
    }
    // This method really calls the listeners in a loop. It deconstucts the "arguments" value
    // in order to pass the proper parameters to the listeners.
    realFire() {
        if (this.listeners !== null) {
            for (let listener of this.listeners)
                listener(...arguments);
        }
    }
}
exports.EventSlot = EventSlot;
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The EventMultiSlot class allows registering listeners for multiple events. Events are identified
// using the specified template type, which is usually (but not necessarily) a number- or
// string-based enumeration or union type.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class EventMultiSlot {
    // Adds a new listener to the given event
    addListener(event, eventFunc) {
        if (this.slots === undefined)
            this.slots = new Map();
        let slot = this.slots.get(event);
        if (slot === undefined) {
            slot = new EventSlot();
            this.slots.set(event, slot);
        }
        slot.add(eventFunc);
    }
    // Removes the given listener from the given event
    removeListener(event, eventFunc) {
        if (this.slots !== undefined) {
            let slot = this.slots.get(event);
            if (slot !== undefined)
                slot.remove(eventFunc);
        }
    }
}
exports.EventMultiSlot = EventMultiSlot;
class SimpleEventSlot extends EventSlot {
}
exports.SimpleEventSlot = SimpleEventSlot;


/***/ }),

/***/ "./src/utils/Stats.ts":
/*!****************************!*\
  !*** ./src/utils/Stats.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////////
// Gathering update statistics
///////////////////////////////////////////////////////////////////////////////////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
// Categories of changed entities to gather statistics about.
var StatsCategory;
(function (StatsCategory) {
    StatsCategory[StatsCategory["Root"] = 0] = "Root";
    StatsCategory[StatsCategory["Comp"] = 1] = "Comp";
    StatsCategory[StatsCategory["Elm"] = 2] = "Elm";
    StatsCategory[StatsCategory["Text"] = 3] = "Text";
    StatsCategory[StatsCategory["Attr"] = 4] = "Attr";
    StatsCategory[StatsCategory["Event"] = 5] = "Event";
})(StatsCategory = exports.StatsCategory || (exports.StatsCategory = {}));
// Actions on an entity to gather statistics about. Not all actions are relevant for all
// categories:
//	- Updated doesn't exist for components and for elements
//	- Moved doesn't exist for attributes
//	- Rendered only exists for components
var StatsAction;
(function (StatsAction) {
    StatsAction[StatsAction["Added"] = 1] = "Added";
    StatsAction[StatsAction["Deleted"] = 2] = "Deleted";
    StatsAction[StatsAction["Updated"] = 3] = "Updated";
    StatsAction[StatsAction["Moved"] = 4] = "Moved";
    StatsAction[StatsAction["Rendered"] = 5] = "Rendered";
})(StatsAction = exports.StatsAction || (exports.StatsAction = {}));
// Storage for a number of each action under a category.
class CategoryStats {
    constructor() {
        this.added = 0;
        this.deleted = 0;
        this.updated = 0;
        this.moved = 0;
        this.rendered = 0;
    }
    hasSomeData() {
        return this.added || this.deleted || this.updated || this.moved || this.rendered;
    }
}
exports.CategoryStats = CategoryStats;
class DetailedStats {
    constructor(name) {
        this.comp = new CategoryStats();
        this.elm = new CategoryStats();
        this.text = new CategoryStats();
        this.attr = new CategoryStats();
        this.event = new CategoryStats();
        this.name = name;
    }
    start() {
        this.duration = 0.0;
        this.startTime = performance.now();
    }
    stop(printSummary = true) {
        this.duration = performance.now() - this.startTime;
        if (printSummary)
            console.log(this.toString());
    }
    // increments thenumber of times the given action was performed on an entity of a given
    // category. If the entity is a DOM entity (as opposed to a component), then the DOM
    // total number is also incremented.
    log(category, action) {
        let categoryStats;
        switch (category) {
            case StatsCategory.Comp:
                categoryStats = this.comp;
                break;
            case StatsCategory.Elm:
                categoryStats = this.elm;
                break;
            case StatsCategory.Text:
                categoryStats = this.text;
                break;
            case StatsCategory.Attr:
                categoryStats = this.attr;
                break;
            case StatsCategory.Event:
                categoryStats = this.event;
                break;
            default: return;
        }
        switch (action) {
            case StatsAction.Added:
                categoryStats.added++;
                break;
            case StatsAction.Deleted:
                categoryStats.deleted++;
                break;
            case StatsAction.Updated:
                categoryStats.updated++;
                break;
            case StatsAction.Moved:
                categoryStats.moved++;
                break;
            case StatsAction.Rendered:
                categoryStats.rendered++;
                break;
        }
    }
    // Returns textual representation of the statistics.
    toString() {
        return `${this.name} ${this.duration.toFixed(2)}ms ` +
            this.getCompString() + this.getElmString() + this.getTextString() +
            this.getAttrString() + this.getEventString();
    }
    // Returns textual representation of the component statistics.
    getCompString() {
        if (!this.comp.hasSomeData())
            return "";
        let s = "";
        s += this.getValString(s, "+", this.comp.added);
        s += this.getValString(s, "-", this.comp.deleted);
        s += this.getValString(s, "\u270E", this.comp.rendered);
        s += this.getValString(s, "\u21FF", this.comp.moved);
        return `comp(${s}) `;
    }
    // Returns textual representation of the element statistics.
    getElmString() {
        if (!this.elm.hasSomeData())
            return "";
        let s = "";
        s += this.getValString(s, "+", this.elm.added);
        s += this.getValString(s, "-", this.elm.deleted);
        s += this.getValString(s, "\u21FF", this.elm.moved);
        return `elm(${s}) `;
    }
    // Returns textual representation of the text node statistics.
    getTextString() {
        if (!this.text.hasSomeData())
            return "";
        let s = "";
        s += this.getValString(s, "+", this.text.added);
        s += this.getValString(s, "-", this.text.deleted);
        s += this.getValString(s, "*", this.text.updated);
        s += this.getValString(s, "\u21FF", this.text.moved);
        return `text(${s}) `;
    }
    // Returns textual representation of the attribute statistics.
    getAttrString() {
        if (!this.attr.hasSomeData())
            return "";
        let s = "";
        s += this.getValString(s, "+", this.attr.added);
        s += this.getValString(s, "-", this.attr.deleted);
        s += this.getValString(s, "*", this.attr.updated);
        return `attr(${s}) `;
    }
    // Returns textual representation of the attribute statistics.
    getEventString() {
        if (!this.event.hasSomeData())
            return "";
        let s = "";
        s += this.getValString(s, "+", this.event.added);
        s += this.getValString(s, "-", this.event.deleted);
        s += this.getValString(s, "*", this.event.updated);
        return `event(${s}) `;
    }
    // Adds the given sign and value to the given string but only if the value is non-zero.
    getValString(s, sign, val) {
        if (val === 0)
            return "";
        else
            return (s.length > 0 ? " " : "") + sign + val;
    }
}
exports.DetailedStats = DetailedStats;


/***/ }),

/***/ "./src/utils/SvgElms.ts":
/*!******************************!*\
  !*** ./src/utils/SvgElms.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////////////////////////////////////////////////////////////////////////
//
// The SvgElms class contains properties with names used to define SVG elements in JSX. When
// we need to create an element, we lookup the provided tag name and if we find it in this class
// we use document.createElementNS with the proper SVG namespace string. Values of these properties
// are SvgElmInfo values.
//
///////////////////////////////////////////////////////////////////////////////////////////////////
class SvgElms {
    // Registers information about the given SVG tag
    static register(tagName, info) {
        SvgElms.infos[tagName] = info;
    }
    // Determines whether the given tag name can be used as an SVG element name.
    static isSvgElm(tagName) {
        return tagName in SvgElms.infos;
    }
    // Returns information object for the given tag name.
    static getSvgElmInfo(tagName) {
        return SvgElms.infos[tagName];
    }
    // Determines whether the given information object has the "dual-purpose" flag set.
    static isDualPurpose(info) {
        if (Array.isArray(info))
            return info.length > 1 ? info[1] : false;
        else
            return typeof info === "string" ? false : info;
    }
    // Determines whether the given tag name is a "dual-purpose" element; that is can be either
    // HTML and SVG element.
    static isTagDualPurpose(tagName) {
        let info = SvgElms.infos[tagName];
        return info ? SvgElms.isDualPurpose(info) : false;
    }
    // Returns the actual name to be used based on the information object and the tag name
    static getElmName(info, tagName) {
        if (Array.isArray(info))
            return info.length > 0 ? info[0] : tagName;
        else
            return typeof info === "string" ? info : tagName;
    }
    // Returns the actual name to be used the given tag name
    static getElmNameForTag(tagName) {
        let info = SvgElms.infos[tagName];
        return info ? SvgElms.getElmName(info, tagName) : tagName;
    }
}
// Namespace used to create SVG elements.
SvgElms.namespace = "http://www.w3.org/2000/svg";
// Object that maps SVG element names to SvgElmInfo.
SvgElms.infos = {
    svg: false,
    a: true,
    animate: false,
    animateMotion: false,
    animateTransform: false,
    circle: false,
    clipPath: false,
    colorProfile: "color-profile",
    defs: false,
    desc: false,
    discard: false,
    ellipse: false,
    feBlend: false,
    feColorMatrix: false,
    feComponentTransfer: false,
    feComposite: false,
    feConvolveMatrix: false,
    feDiffuseLighting: false,
    feDisplacementMap: false,
    feDistantLight: false,
    feDropShadow: false,
    feFlood: false,
    feFuncA: false,
    feFuncB: false,
    feFuncG: false,
    feFuncR: false,
    feGaussianBlur: false,
    feImage: false,
    feMerge: false,
    feMergeNode: false,
    feMorphology: false,
    feOffset: false,
    fePointLight: false,
    feSpecularLighting: false,
    feSpotLight: false,
    feTile: false,
    feTurbulence: false,
    filter: false,
    foreignObject: false,
    g: false,
    hatch: false,
    hatchpath: false,
    image: false,
    line: false,
    linearGradient: false,
    marker: false,
    mask: false,
    metadata: false,
    mpath: false,
    path: false,
    pattern: false,
    polygon: false,
    polyline: false,
    radialGradient: false,
    rect: false,
    script: true,
    set: false,
    solidcolor: false,
    stop: false,
    style: true,
    switch: false,
    symbol: false,
    text: false,
    textPath: false,
    title: true,
    textSpan: false,
    use: false,
    view: false,
};
exports.SvgElms = SvgElms;


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function deepCompare(o1, o2) {
    if (o1 === o2)
        return true;
    else if (o1 == null && o2 == null)
        return true;
    else if (o1 == null || o2 == null)
        return false;
    else if (typeof o1 !== typeof o2)
        return false;
    else if (typeof o1 === "object") {
        for (let p in o1) {
            if (!deepCompare(o1[p], o2[p]))
                return false;
        }
        for (let p in o2) {
            if (!(p in o1))
                return false;
        }
    }
    else if (Array.isArray(o1) !== Array.isArray(o2))
        return false;
    else if (Array.isArray(o1)) {
        if (o1.length !== o2.length)
            return false;
        else {
            for (let i = 0, len = o1.length; i < len; i++) {
                if (!deepCompare(o1[i], o2[i]))
                    return false;
            }
        }
    }
    else {
        // we are here if these are strings, numbers, booleans or functions and they are different
        return false;
    }
    return true;
}
exports.deepCompare = deepCompare;
function hashObject(o) {
    if (o === undefined)
        return 0;
    else if (o === null)
        return 1;
    else if (isNaN(0))
        return 2;
    else if (o === true)
        return 3;
    else if (o === false)
        return 4;
    let h = 10;
    if (typeof o === "number")
        return 10 + o;
    else if (typeof o === "string")
        return hashString(o);
    else if (typeof o === "function")
        return hashString(o.name);
    else if (Array.isArray(o)) {
        let len = o.length;
        let h = 10 + len;
        for (let i = 0; i < len; i++)
            h += i + hashObject(o[i]);
        return h;
    }
    else {
        let h = 10;
        for (let p in o)
            h += hashString(p) + hashObject(o[p]);
        return h;
    }
}
exports.hashObject = hashObject;
function hashString(s) {
    if (!s)
        return 5;
    let len = s.length;
    let h = 10 + len;
    for (let i = 0; i < len; i++)
        h += s.charCodeAt(i);
    return h;
}
exports.hashString = hashString;
// Combines arbitrary number of class properties merging later into the earlier ones. This method
// returns a string or undefined - if all classNames were undefined.
function mergeClasses(...classNames) {
    let resClassName;
    for (let className of classNames) {
        if (!className)
            continue;
        // parse the class if it is specified as a string
        let classNameAsString = typeof className === "string"
            ? className
            : className.join(" ");
        if (resClassName === undefined)
            resClassName = "";
        else
            resClassName += " ";
        resClassName += classNameAsString;
    }
    return resClassName;
}
exports.mergeClasses = mergeClasses;
// Combines arbitrary number of style objects merging later into the earlier ones. This method
// always returns an object - even if empty
function mergeStyles(...styles) {
    // create an empty object for accumulating style properties
    let resStyle = {};
    mergeStylesTo(resStyle, ...styles);
    return resStyle;
}
exports.mergeStyles = mergeStyles;
// Combines arbitrary number of style objects merging later into the first one.
function mergeStylesTo(resStyle, ...styles) {
    for (let style of styles) {
        if (!style)
            continue;
        // parse the style if it is specified as a string
        let styleObj = typeof style === "object"
            ? style
            : parseStyleString(style);
        // copy all properties defined in teh current style object to our resultant object			
        for (let propName in styleObj)
            resStyle[propName] = styleObj[propName];
    }
}
exports.mergeStylesTo = mergeStylesTo;
// Parses the given style string into the Style object.
function parseStyleString(s) {
    if (!s)
        return {};
    let retStyle = {};
    let elms = s.split(";");
    for (let elm of elms) {
        let pair = elm.split(":");
        if (!pair || pair.length === 0 || pair.length > 2)
            continue;
        retStyle[dashToCamel(pair[0].trim())] = pair[1].trim();
    }
    return retStyle;
}
exports.parseStyleString = parseStyleString;
// Converts names with dashes into names in camelCase, where every character after a dash is
// capitalized and dashes are removed.
function dashToCamel(dash) {
    if (!dash)
        return dash;
    let camel;
    let index = -1;
    let nextIndexToCopyFrom = 0;
    while ((index = dash.indexOf("-", index + 1)) >= 0) {
        if (camel === undefined)
            camel = "";
        camel += dash.substr(nextIndexToCopyFrom, index - nextIndexToCopyFrom);
        if (index != dash.length - 1)
            camel += dash[index + 1].toUpperCase();
        nextIndexToCopyFrom = index + 2;
    }
    if (camel === undefined)
        return dash;
    else {
        if (nextIndexToCopyFrom < dash.length)
            camel += dash.substr(nextIndexToCopyFrom);
        return camel;
    }
}
exports.dashToCamel = dashToCamel;
// Combines arbitrary number of Slice objects merging classes, styles, properties and content
function mergeSlices(...slices) {
    let resSlice = {};
    mergeSlicesTo(resSlice, ...slices);
    return resSlice;
}
exports.mergeSlices = mergeSlices;
// Combines arbitrary number of Slice objects merging classes, styles, properties and content
// into the given resultant slice.
function mergeSlicesTo(resSlice, ...slices) {
    if (resSlice === undefined || resSlice === null)
        return;
    for (let slice of slices) {
        if (!slice)
            continue;
        if (slice.style) {
            if (resSlice.style === undefined)
                resSlice.style = {};
            mergeStylesTo(resSlice.style, slice.style);
        }
        if (slice.className) {
            if (resSlice.className === undefined)
                resSlice.className = "";
            resSlice.className = mergeClasses(resSlice.className, slice.className);
        }
        if (slice.props) {
            if (resSlice.props === undefined)
                resSlice.props = {};
            for (let propName in slice.props)
                resSlice[propName] = slice[propName];
        }
        if (slice.content) {
            if (resSlice.content === undefined)
                resSlice.content = slice.content;
            else {
                if (!Array.isArray(resSlice.content)) {
                    let oldContent = resSlice.content;
                    resSlice.content = [];
                    resSlice.content.push(oldContent);
                }
                resSlice.content.push(slice.content);
            }
        }
    }
}
exports.mergeSlicesTo = mergeSlicesTo;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW1ibC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbWltYmwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvYXBpL0xvY2FsU3R5bGVzLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2FwaS9taW0udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9DbGFzc0NvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0NvbnRlbnRGdW5jcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL0VsbVZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvRnVuY1Byb3h5Vk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9GdW5jVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9JbmRlcGVuZGVudENvbXBWTi50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy9jb3JlL01hbmFnZWRDb21wVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9QdWJTdWIudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9Sb290VUkudHN4Iiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvUm9vdFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvU2NoZWR1bGVyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVGV4dFZOLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL2NvcmUvVk4udHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTkJhc2UudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvY29yZS9WTkRpc3AudHMiLCJ3ZWJwYWNrOi8vbWltYmwvLi9zcmMvbWltYmxUeXBlcy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9FbG1BdHRyLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL0V2ZW50U2xvdC50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9TdGF0cy50cyIsIndlYnBhY2s6Ly9taW1ibC8uL3NyYy91dGlscy9TdmdFbG1zLnRzIiwid2VicGFjazovL21pbWJsLy4vc3JjL3V0aWxzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsc0VBQWlDO0FBa0NqQyxtR0FBbUc7QUFDbkcsRUFBRTtBQUNGLGtHQUFrRztBQUNsRywrRkFBK0Y7QUFDL0YsOEZBQThGO0FBQzlGLGtHQUFrRztBQUNsRyxnRkFBZ0Y7QUFDaEYsRUFBRTtBQUNGLG1HQUFtRztBQUNuRyxNQUFzQix3QkFDbEIsU0FBUSxHQUFHLENBQUMsU0FBMkI7SUFHMUMsWUFB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VW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm1pbWJsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm1pbWJsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWltYmxUeXBlcy50c1wiKTtcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tXCIuLi91dGlscy9FdmVudFNsb3RcIlxyXG5cclxuXHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcIi4uL2FwaS9taW1cIlxyXG57XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTZXJ2aWNlRGVmaW5pdGlvbnNcclxuXHR7XHJcbiAgICAgICAgTG9jYWxTdHlsZXM6IElMb2NhbFN0eWxlU2VydmljZTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElMb2NhbFN0eWxlU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBpcyBwdWJsaXNoZWQgYnkgY29tcG9uZW50cyB0aGF0XHJcbi8vIGRlZmluZSB0aGVpciBsb2NhbCBDU1Mgc3R5bGVzOyB0aGF0IGlzLCBjb21wb25lbnRzIGRlcml2aW5nIGZyb20gdGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlc1xyXG4vLyBjbGFzcy4gVGhlIGludGVyZmFjZSBhbGxvd3MgcmV0cmlldmluZyBDU1MgY2xhc3MgYW5kIHZhcmlhYmxlIG5hbWVzIGRlY29yYXRlZCB3aXRoIHRoZSB1bmlxdWVcclxuLy8gSUQsIHdoaWNoIGF2b2lkcyBkdXBsaWNhdGlvbiBvZiBuYW1lcyBiZXR3ZWVuIGNvbXBvbmVudHMgb2YgdGhlIHNhbWUgb3IgZGlmZmVyZW50IHR5cGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxTdHlsZVNlcnZpY2Vcclxue1xyXG5cdC8vIFJldHVybnMgdGhlIHVuaXF1ZSBJRCB1c2VkIHRvIGRlY29yYXRlIENTUyBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXMgdG8gbWFrZSB0aGVtIHVuaXF1ZS5cclxuXHRyZWFkb25seSB1bmlxdWVJRDogc3RyaW5nO1xyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRkZWNvcmF0ZU5hbWUoIG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcyBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIGNvbXBvbmVudHMgdGhhdCBkZWZpbmUgbG9jYWwgQ1NTIHN0eWxlcy5cclxuLy8gV2hlbiB0aGlzIGNvbXBvbmVudCBpcyBtb3VudGVkIGl0IGNyZWF0ZXMgYSBuZXcgPHN0eWxlPiBlbGVtZW50ICh3aXRoaW4gdGhlIDxoZWFkPiBlbGVtZW50KS5cclxuLy8gQWxsIGNsYXNzIG5hbWVzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIHdpdGhpbiB0aGlzIHN0eWxlIHdpbGwgaGF2ZSBhIHVuaXF1ZSBJRCBhZGRlZCB0b1xyXG4vLyB0aGVtIGluIG9yZGVyIHRvIGF2b2lkIGR1cGxpY2F0aW9uIG9mIG5hbWVzIGFtb25nIG90aGVyIGNvbXBvbmVudHMgKG9mIHRoZSBzYW1lIG9yIG9mIGRpZmZlcmVudFxyXG4vLyB0eXBlLiBUaGlzIGNsYXNzIGFsc28gcHVibGlzaGVzIGEgc2VydmljZSBpbXBsZW1lbnRpbmcgdGhlIElMb2NhbFN0eWxlU2VydmljZVxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG5cdFx0XHRcdGV4dGVuZHMgbWltLkNvbXBvbmVudDxUUHJvcHMsVENoaWxkcmVuPlxyXG5cdFx0XHRcdGltcGxlbWVudHMgSUxvY2FsU3R5bGVTZXJ2aWNlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggcHJvcHM6IFRQcm9wcyA9IG51bGwpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHByb3BzKTtcclxuXHJcblx0XHR0aGlzLm1fdW5pcXVlSUQgPSAoTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApKS50b1N0cmluZygpO1xyXG5cdFx0dGhpcy5ydWxlcyA9IG5ldyBNYXA8c3RyaW5nLFJ1bGVJbmZvPigpO1xyXG5cdFx0dGhpcy5ydWxlTmFtZXMgPSBbXTtcclxuXHJcblx0XHQvLyBjcmVhdGUgPHN0eWxlPiBlbGVtZW50IGluIHRoZSA8aGVhZD5cclxuXHRcdHRoaXMuc3R5bGVFbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInN0eWxlXCIpO1xyXG5cdFx0dGhpcy5zdHlsZUVsbS5pZCA9IHRoaXMubV91bmlxdWVJRDtcclxuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHRoaXMuc3R5bGVFbG0pO1xyXG5cclxuXHRcdC8vLy8gV2ViS2l0IGhhY2sgOihcclxuXHRcdC8vdGhpcy5zdHlsZUVsbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdC8vIElMb2NhbFN0eWxlU2VydmljZSBpbXBsZW1lbnRhdGlvbi5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyB0aGUgdW5pcXVlIElEIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZW0gdW5pcXVlLlxyXG5cdHB1YmxpYyBnZXQgdW5pcXVlSUQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMubV91bmlxdWVJRDsgfVxyXG5cclxuXHQvLyBSZXRydXJucyBDU1MgY2xhc3Mgb3IgdmFyaWFibGUgbmFtZSBkZWNvcmF0ZWQgd2l0aCBhIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgZGVjb3JhdGVOYW1lKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRyZXR1cm4gbmFtZSArIHRoaXMubV91bmlxdWVJRDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0Ly8gUHVibGljIGludGVyZmFjZS5cclxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHB1YmxpYyBjcmVhdGVTdHlsZVJ1bGUoIG5hbWU6IHN0cmluZywgc2VsZWN0b3I/OiBzdHJpbmcsIHByb3BzPzogbWltLlN0eWxlUHJvcFR5cGUpOiBJTUNzc1N0eWxlUnVsZVxyXG5cdHtcclxuXHRcdC8vIGNyZWF0ZSBkdW1teSBzdHlsZSBydWxlXHJcblx0XHRsZXQgaW5mbzogUnVsZUluZm8gPSB0aGlzLmNyZWF0ZUR1bW15UnVsZSggbmFtZSwgXCJkdW1teSB7fVwiKTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1N0eWxlUnVsZSA9IGluZm8uY3Nzb21SdWxlIGFzIENTU1N0eWxlUnVsZTtcclxuXHJcblx0XHQvLyBjcmVhdGUgc3R5bGUgcnVsZSBvYmplY3RcclxuXHRcdGxldCBtY3NzU3R5bGVSdWxlOiBNQ3NzU3R5bGVSdWxlID0gbmV3IE1Dc3NTdHlsZVJ1bGUoIHRoaXMudW5pcXVlSUQsIGNzc29tUnVsZSk7XHJcblx0XHRpZiAoc2VsZWN0b3IpXHJcblx0XHRcdG1jc3NTdHlsZVJ1bGUuc2V0U2VsZWN0b3IoIHNlbGVjdG9yKTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdFx0bWNzc1N0eWxlUnVsZS5zZXRQcm9wZXJ0aWVzKCBwcm9wcyk7XHJcblxyXG5cdFx0aW5mby5tY3NzUnVsZSA9IG1jc3NTdHlsZVJ1bGU7XHJcblx0XHRyZXR1cm4gbWNzc1N0eWxlUnVsZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyBhIHJ1bGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZS5cclxuXHRwdWJsaWMgZ2V0UnVsZSggbmFtZTogc3RyaW5nKTogSU1Dc3NSdWxlXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFJ1bGVJbmZvID0gdGhpcy5ydWxlcy5nZXQoIG5hbWUpO1xyXG5cdFx0cmV0dXJuIGluZm8gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGluZm8ubWNzc1J1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgYSBydWxlIHdpdGggdGhlIGdpdmVuIG5hbWUuXHJcblx0cHVibGljIHJlbW92ZVJ1bGUoIG5hbWU6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKVxyXG5cdHtcclxuXHRcdHRoaXMudm4ucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIiwgdGhpcyk7XHJcblx0fVx0XHJcblxyXG5cclxuXHJcblx0cHVibGljIHdpbGxVbm1vdW50KClcclxuXHR7XHJcblx0XHR0aGlzLnZuLnVucHVibGlzaFNlcnZpY2UoIFwiTG9jYWxTdHlsZXNcIik7XHJcblxyXG5cdFx0dGhpcy5zdHlsZUVsbS5yZW1vdmUoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBzdHlsZSBydWxlLlxyXG5cdHByaXZhdGUgY3JlYXRlRHVtbXlSdWxlKCBuYW1lOiBzdHJpbmcsIHJ1bGVUZXh0OiBzdHJpbmcpOiBSdWxlSW5mb1xyXG5cdHtcclxuXHRcdC8vIGNoZWNrIGlmIHdlIGFscmVhZHkgaGF2ZSBhIHJ1bGUgd2l0aCB0aGlzIG5hbWVcclxuXHRcdGxldCBpbmZvOiBSdWxlSW5mbyA9IHRoaXMucnVsZXMuZ2V0KCBuYW1lKTtcclxuXHRcdGlmIChpbmZvICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucmVtb3ZlUnVsZSggbmFtZSk7XHJcblxyXG5cdFx0Ly8gdGhlIG5ldyBydWxlIHdpbGwgYmVjb21lcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkgb2YgcnVsZXNcclxuXHRcdGxldCBpbmRleCA9IHRoaXMucnVsZU5hbWVzLmxlbmd0aDtcclxuXHJcblx0XHQvLyBjcmVhdGUgZHVtbXkgc3R5bGUgcnVsZVxyXG5cdFx0bGV0IHNoZWV0OiBDU1NTdHlsZVNoZWV0ID0gdGhpcy5zdHlsZUVsbS5zaGVldCBhcyBDU1NTdHlsZVNoZWV0O1xyXG5cdFx0c2hlZXQuaW5zZXJ0UnVsZSggcnVsZVRleHQsIGluZGV4KTtcclxuXHRcdGxldCBjc3NvbVJ1bGU6IENTU1J1bGUgPSBzaGVldC5ydWxlc1tpbmRleF07XHJcblxyXG5cdFx0Ly8gYWRkIHRoZSBydWxlIHRvIG91ciBpbnRlcm5hbCBzdHJ1Y3R1cmVzXHJcblx0XHR0aGlzLnJ1bGVOYW1lcy5wdXNoKCBuYW1lKTtcclxuXHRcdGluZm8gPSB7IG1jc3NSdWxlOiBudWxsLCBjc3NvbVJ1bGUsIGluZGV4IH07XHJcblx0XHR0aGlzLnJ1bGVzLnNldCggbmFtZSwgaW5mbyk7XHJcblxyXG5cdFx0cmV0dXJuIGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVuaXF1ZSBJRCB0aGF0IGlzIHVzZWQgdG8gZGVjb3JhdGUgQ1NTIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBkZWZpbmVkIGJ5IHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBtX3VuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIFN0eWxlIGVsZW1lbnQgRE9NIG9iamVjdC4gSXMgZGVmaW5lZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxyXG5cdHByaXZhdGUgc3R5bGVFbG06IEhUTUxTdHlsZUVsZW1lbnQ7XHJcblxyXG5cdC8vIE1hcCBvZiBydWxlcyBieSB0aGVpciBuYW1lcy5cclxuXHRwcml2YXRlIHJ1bGVzOiBNYXA8c3RyaW5nLFJ1bGVJbmZvPjtcclxuXHJcblx0Ly8gQXJyYXkgb2YgcnVsZSBuYW1lcy4gVGhpcyBpcyBuZWVkZWQgdG8gYWRqdXN0IGluZGV4ZXMgb2YgcnVsZXMgYWZ0ZXIgYSBydWxlIGlzIHJlbW92ZWQuXHJcblx0cHJpdmF0ZSBydWxlTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGVscGVyIHR5cGUgdGhhdCBrZWVwcyBpbmZvcm1hdGlvbiBhYm91dCBhIENTUyBydWxlIGFkZGVkIHRvIENvbXBvbmVudFdpdGhMb2NhbFN0eWxlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbnR5cGUgUnVsZUluZm8gPSB7IG1jc3NSdWxlOiBJTUNzc1J1bGUsIGNzc29tUnVsZTogQ1NTUnVsZSwgaW5kZXg6IG51bWJlciB9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIElNQ3NzUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIENTUyBydWxlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJTUNzc1J1bGVcclxue1xyXG5cdC8vIFVuaXF1ZSBJRCB1c2VkIGluIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lc1xyXG5cdHJlYWRvbmx5IHVuaXF1ZUlEOiBzdHJpbmc7XHJcblxyXG5cdC8vIENTU09NIHJ1bGVcclxuXHRyZWFkb25seSBjc3NvbVJ1bGU6IENTU1J1bGU7XHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdGRlY29yYXRlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5cdC8vIFJlcGxhY2VzIHRoZSBtYXJrZXIgXCIoKilcIiBpbiB0aGUgZ2l2ZW4gbmFtZSB3aXRoIHRoZSB1bmlxdWUgSURcclxuXHRyZXBsYWNlKCBuYW1lOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBNQ3NzUnVsZSBjbGFzcyBpcyBhIGJhc2UgY2xhc3MgZm9yIG9iamVjdHMgcmVwcmVzZW50ZWQgZGlmZmVyZW50IHR5cGVzIG9mIENTUyBydWxlcyB0aGF0XHJcbi8vIGFyZSBjcmVhdGVkIGJ5IHRoZSBDb21wb25lbnRXaXRoTG9jYWxTdHlsZXMgY29tcG9uZW50LiBUaGlzIG9iamVjdCBzaW1wbHkga2VlcHMgdGhlIHVuaXF1ZVxyXG4vLyBJRCB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IGRlcml2ZWQgY2xhc3NlcyB3aGVuIGNyZWF0aW5nIGNsYXNzIGFuZCB2YXJpYWJsZSBuYW1lcyBzbyB0aGF0IHRoZXlcclxuLy8gYXJlIGdsb2JhbGx5IHVuaXF1ZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NSdWxlQmFzZTxUIGV4dGVuZHMgQ1NTUnVsZT4gaW1wbGVtZW50cyBJTUNzc1J1bGVcclxue1xyXG5cdGNvbnN0cnVjdG9yKCB1bmlxdWVJRDogc3RyaW5nLCBjc3NvbVJ1bGU6IFQpXHJcblx0e1xyXG5cdFx0dGhpcy51bmlxdWVJRCA9IHVuaXF1ZUlEO1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUgPSBjc3NvbVJ1bGU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEFwcGVuZHMgdW5pcXVlIElEIHRvIHRoZSBnaXZlbiBuYW1lLlxyXG5cdHB1YmxpYyBkZWNvcmF0ZSggbmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0cmV0dXJuIG5hbWUgKyB0aGlzLnVuaXF1ZUlEO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXBsYWNlcyB0aGUgbWFya2VyIFwiKCopXCIgaW4gdGhlIGdpdmVuIG5hbWUgd2l0aCB0aGUgdW5pcXVlIElEXHJcblx0cHVibGljIHJlcGxhY2UoIG5hbWU6IHN0cmluZyk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoIFwiKCopXCIsIHRoaXMudW5pcXVlSUQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBVbmlxdWUgSUQgdXNlZCBpbiBjbGFzcyBhbmQgdmFyaWFibGUgbmFtZXNcclxuXHRwdWJsaWMgdW5pcXVlSUQ6IHN0cmluZztcclxuXHJcblx0Ly8gQ1NTT00gcnVsZVxyXG5cdHB1YmxpYyBjc3NvbVJ1bGU6IFQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJTUNzc1N0eWxlUnVsZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHN0eWxlIHJ1bGUuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgaW50ZXJmYWNlIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFNlbGVjdG9yKCBzZWxlY3Rvcjogc3RyaW5nKTtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHNldFByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBzdHJpbmcsIGltcG9ydGFudD86IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuXHQvLyBTZXRzIHNldmVyYWwgc3R5bGUgcHJvcGVydGllcy4gQm90aCBwcm9wZXJ0eSBuYW1lcyBhbmQgcHJvcGVydHkgdmFsdWVzIGNhbiB1c2UgdGhlXHJcblx0Ly8gKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aXRoIHRoZSB1bmlxdWUgSUQuXHJcblx0c2V0UHJvcGVydGllcyggcHJvcHM6IG1pbS5TdHlsZVByb3BUeXBlKTogdm9pZDtcclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gUHJvcGVydHkgbmFtZSBjYW4gdXNlIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlXHJcblx0Ly8gc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHJlbW92ZVByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIE1Dc3NTdHlsZVJ1bGUgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBzdHlsZSBydWxlIHRoYXQgY29udGFpbnMgYSBzZWxlY3RvciBhbmQgYSBzZXQgb2ZcclxuLy8gc3R5bGUgcHJvcGVydHkgbmFtZS12YWx1ZSBwYWlycy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIE1Dc3NTdHlsZVJ1bGUgZXh0ZW5kcyBNQ3NzUnVsZUJhc2U8Q1NTU3R5bGVSdWxlPiBpbXBsZW1lbnRzIElNQ3NzU3R5bGVSdWxlXHJcbntcclxuXHRjb25zdHJ1Y3RvciggdW5pcXVlSUQ6IHN0cmluZywgY3Nzb21SdWxlOiBDU1NTdHlsZVJ1bGUpXHJcblx0e1xyXG5cdFx0c3VwZXIoIHVuaXF1ZUlELCBjc3NvbVJ1bGUpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBydWxlIHNlbGVjdG9yLiBUaGUgc3RyaW5nIGNhbiBjb250YWluIHRoZSAoKikgbWFya2VyLCB3aGljaCB3aWxsIGJlIHN1YnN0aXR1dGVkXHJcblx0Ly8gd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRTZWxlY3Rvciggc2VsZWN0b3I6IHN0cmluZylcclxuXHR7XHJcblx0XHR0aGlzLmNzc29tUnVsZS5zZWxlY3RvclRleHQgPSB0aGlzLnJlcGxhY2UoIHNlbGVjdG9yKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyB2YWx1ZSBmb3IgYSBzdHlsZSBwcm9wZXJ0eS4gQm90aCBwcm9wZXJ0eSBuYW1lIGFuZCBwcm9wZXJ0eSB2YWx1ZSBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0eSggcHJvcE5hbWU6IHN0cmluZywgcHJvcFZhbDogc3RyaW5nLCBpbXBvcnRhbnQ/OiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuY3Nzb21SdWxlLnN0eWxlLnNldFByb3BlcnR5KCB0aGlzLnJlcGxhY2UoIHByb3BOYW1lKSwgdGhpcy5yZXBsYWNlKCBwcm9wVmFsKSxcclxuXHRcdFx0XHRcdFx0aW1wb3J0YW50PyBcImltcG9ydGFudFwiIDogdW5kZWZpbmVkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gU2V0cyBzZXZlcmFsIHN0eWxlIHByb3BlcnRpZXMuIEJvdGggcHJvcGVydHkgbmFtZXMgYW5kIHByb3BlcnR5IHZhbHVlcyBjYW4gdXNlIHRoZVxyXG5cdC8vICgqKSBtYXJrZXIsIHdoaWNoIHdpbGwgYmUgc3Vic3RpdHV0ZWQgd2l0aCB0aGUgdW5pcXVlIElELlxyXG5cdHB1YmxpYyBzZXRQcm9wZXJ0aWVzKCBwcm9wczogbWltLlN0eWxlUHJvcFR5cGUpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcylcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdGZvciggbGV0IHByb3BOYW1lIGluIHByb3BzKVxyXG5cdFx0XHR0aGlzLmNzc29tUnVsZS5zdHlsZVt0aGlzLnJlcGxhY2UoIHByb3BOYW1lKV0gPSB0aGlzLnJlcGxhY2UoIHByb3BzW3Byb3BOYW1lXSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldHMgdmFsdWUgZm9yIGEgc3R5bGUgcHJvcGVydHkuIFByb3BlcnR5IG5hbWUgY2FuIHVzZSB0aGUgKCopIG1hcmtlciwgd2hpY2ggd2lsbCBiZVxyXG5cdC8vIHN1YnN0aXR1dGVkIHdpdGggdGhlIHVuaXF1ZSBJRC5cclxuXHRwdWJsaWMgcmVtb3ZlUHJvcGVydHkoIHByb3BOYW1lOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jc3NvbVJ1bGUuc3R5bGUucmVtb3ZlUHJvcGVydHkoIHRoaXMucmVwbGFjZSggcHJvcE5hbWUpKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIFR5cGUgdXNlZCB0byBkZWZpbmUgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gYSBmdW5jdGlvbmFsIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uYWwgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgZnVuY3Rpb25hbCBjb21wb25lbnQgd2l0aCB0aGVzZSBwcm9wZXJ0aWVzLiBEZWZhdWx0IGlzIGBhbnlgLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRnVuY1Byb3BzPFRQcm9wcyA9IHt9LCBUQ2hpbGRyZW4gPSBhbnk+ID0gUmVhZG9ubHk8VFByb3BzPiAmXHJcblx0e1xyXG5cdFx0cmVhZG9ubHkgY2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHJlcHJlc2VudGluZyBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcbiAqIFxyXG4gKiBAdHlwZXBhcmFtIFRQcm9wcyBUeXBlIGRlZmluaW5nIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb25hbCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBmdW5jdGlvbmFsIGNvbXBvbmVudC4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZ1bmNDb21wVHlwZTxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IChwcm9wczogRnVuY1Byb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KSA9PiBhbnk7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUeXBlIHVzZWQgdG8gZGVmaW5lIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG4gKiBcclxuICogQHR5cGVwYXJhbSBUUHJvcHMgVHlwZSBkZWZpbmluZyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50XHJcbiAqXHRcdHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCB0eXBlIGlzIGFuIGVtcHR5IG9iamVjdCAobm8gcHJvcGVydGllcykuXHJcbiAqIEB0eXBlcGFyYW0gVENoaWxkcmVuIFR5cGUgZGVmaW5pbmcgY29tcG9uZW50cywgZWxlbWVudHMgb3Igb3RoZXIgb2JqZWN0cyB0aGF0IGNhbiBiZSB1c2VkXHJcbiAqXHRcdGFzIGNoaWxkcmVuIGZvciB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50IHdpdGggdGhlc2UgcHJvcGVydGllcy4gRGVmYXVsdCBpcyBgYW55YC5cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbXBQcm9wczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PiA9IFJlYWRvbmx5PFRQcm9wcz4gJlxyXG5cdHtcclxuXHRcdHJlYWRvbmx5IGNoaWxkcmVuPzogVENoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBJbnRlcmZhY2UgdGhhdCBkZWZpbmVzIGNvbnN0cnVjdG9yIHNpZ25hdHVyZSBmb3IgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxyXG4gKlx0XHRvZiB0aGlzIHR5cGUuIERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCBvZiB0aGlzIHR5cGUuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnRDbGFzczxUUHJvcHMgPSB7fSwgVENoaWxkcmVuID0gYW55PlxyXG57XHJcblx0bmV3KCBwcm9wcz86IFRQcm9wcyk6IElDb21wb25lbnQ8VFByb3BzLFRDaGlsZHJlbj47XHJcblx0cmVuZGVyKCk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogSW50ZXJmYWNlIHRoYXQgbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhbGwgY29tcG9uZW50cy5cclxuICogXHJcbiAqIEB0eXBlcGFyYW0gVFByb3BzIFR5cGUgZGVmaW5pbmcgcHJvcGVydGllcyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuXHJcbiAqXHRcdERlZmF1bHQgdHlwZSBpcyBhbiBlbXB0eSBvYmplY3QgKG5vIHByb3BlcnRpZXMpLlxyXG4gKiBAdHlwZXBhcmFtIFRDaGlsZHJlbiBUeXBlIGRlZmluaW5nIGNvbXBvbmVudHMsIGVsZW1lbnRzIG9yIG90aGVyIG9iamVjdHMgdGhhdCBjYW4gYmUgdXNlZFxyXG4gKlx0XHRhcyBjaGlsZHJlbiBmb3IgdGhpcyBjbGFzcy1iYXNlZCBjb21wb25lbnQuIERlZmF1bHQgaXMgYGFueWAuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbXBvbmVudCBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuIEZvciBtYW5hZ2VkIGNvbXBvbmVudHMsIHRoZSBwcm9wZXJ0aWVzXHJcblx0ICogY2FuIGFsc28gYmUgc2V0IChjaGFuZ2VkKSB3aGVuIHRoZSBjb21wb25lbnQncyBwYXJlbnQgaXMgdXBkYXRlZC5cclxuXHQgKi9cclxuXHRwcm9wcz86IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPjtcclxuXHJcblx0LyoqXHJcblx0ICogQ29tcG9uZW50cyBjYW4gZGVmaW5lIGRpc3BsYXkgbmFtZSBmb3IgdHJhY2luZyBwdXJwb3NlczsgaWYgdGhleSBkb24ndCB0aGUgZGVmYXVsdCBuYW1lXHJcblx0ICogdXNlZCBpcyB0aGUgY29tcG9uZW50J3MgY2xhc3MgY29uc3RydWN0b3IgbmFtZS4gTm90ZSB0aGF0IHRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgYmVmb3JlXHJcblx0ICogdGhlIHZpcnR1YWwgbm9kZSBpcyBhdHRhY2hlZCB0byB0aGUgY29tcG9uZW50LlxyXG5cdCAqL1xyXG5cdHJlYWRvbmx5IGRpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXRzLCBnZXRzIG9yIGNsZWFycyB0aGUgdmlydHVhbCBub2RlIG9iamVjdCBvZiB0aGUgY29tcG9uZW50LiBUaGlzIHByb3BlcnR5IGlzIHNldCB0d2ljZTpcclxuXHQgKiAgMS4gQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQgZm9yIHRoZSBmaXJzdCB0aW1lOiB0aGUgY29tcG9uZW50IG11c3QgcmVtZW1iZXIgdGhlXHJcblx0ICogICAgcGFzc2VkIG9iamVjdC5cclxuXHQgKiAgMi4gQmVmb3JlIHRoZSBjb21wb25lbnQgaXMgZGVzdHJveWVkOiBudWxsIGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlciBhbmQgdGhlIGNvbXBvbmVudCBtdXN0XHJcblx0ICogICAgcmVsZWFzZSB0aGUgcmVtZW1iZXJlZCBvYmplY3QuXHJcblx0ICovXHJcblx0dm4/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRyZW5kZXIoKTogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBOb3RpZmllcyB0aGF0IHRoZSBjb21wb25lbnQgaXMgYWJvdXQgdG8gcmVuZGVyIGl0cyBjb250ZW50IGZvciB0aGUgZmlyc3QgdGltZS4gVGhpcyBtZXRob2RcclxuXHQgKiBpcyBjYWxsZWQgd2hlbiB0aGUgdmlydHVhbCBub2RlIGhhcyBhbHJlYWR5IGJlZW4gc2V0IHNvIHRoZSBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXNcclxuXHQgKiBmcm9tIGl0LlxyXG5cdCAqL1xyXG5cdHdpbGxNb3VudD8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWZpZXMgdGhhdCB0aGUgY29tcG9uZW50J3MgY29udGVudCBpcyBnb2luZyB0byBiZSByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLiBBZnRlclxyXG5cdCAqIHRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXHJcblx0ICovXHJcblx0d2lsbFVubW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE9wdGlvbmFsIG1ldGhvZCB0aGF0IGlzIGNhbGxlZCBiZWZvcmUgYW55IGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGNhbiByZWFkIERPTSBsYXlvdXQgaW5mb3JtYXRpb24gKGUuZy5cclxuXHQgKiBlbGVtZW50IG1lYXN1cmVtZW50cykgd2l0aG91dCB0aGUgcmlzayBvZiBjYXVzaW5nIGZvcmNlZCBsYXlvdXRzLlxyXG5cdCAqL1xyXG5cdGJlZm9yZVVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT3B0aW9uYWwgbWV0aG9kIHRoYXQgaXMgY2FsbGVkIGFmdGVyIGFsIGNvbXBvbmVudHMgdGhhdCBhcmUgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQgaW5cclxuXHQgKiBhIE1pbWJsIHRpY2ssIGFyZSB1cGRhdGVkLiBJZiBpbXBsZW1lbnRlZCwgdGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVcclxuXHQgKiBjb21wb25lbnQgaXMgc2NoZWR1bGVkIHRvIGJlIHVwZGF0ZWQuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbGwgbW9kaWZpY2F0aW9ucyB0b1xyXG5cdCAqIERPTSByZXN1bHRpbmcgZnJvbSB1cGRhaW5nIGNvbXBvbmVudHMgaGF2ZSBiZWVuIGFscmVhZHkgZG9uZS5cclxuXHQgKi9cclxuXHRhZnRlclVwZGF0ZT8oKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgb25seSB1c2VkIGJ5IG1hbmFnZWQgY29tcG9uZW50cy5cclxuXHQgKiBcclxuXHQgKiBJbmZvcm1zIHRoZSBjb21wb25lbnQgdGhhdCBuZXcgcHJvcGVydGllcyBoYXZlIGJlZW4gc3BlY2lmaWVkLiBBdCB0aGUgdGltZSBvZiB0aGUgY2FsbFxyXG5cdCAqIHRoaXMucHJvcHMgcmVmZXJzIHRvIHRoZSBcIm9sZFwiIHByb3BlcnRpZXMuIElmIHRoZSBjb21wb25lbnQgcmV0dXJucyB0cnVlLHRoZW4gaXRzIHJlbmRlclxyXG5cdCAqIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC4gQXQgdGhhdCB0aW1lLHRoZSBvcmlnaW5hbCBwcm9wcyBvYmplY3QgdGhhdCB3YXMgcGFzc2VkIGludG8gdGhlXHJcblx0ICogY29tcG9uZW50J3MgY29uc3RydWN0b3Igd2lsbCBoYXZlIHRoZXNlIG5ldyBwcm9wZXJ0aWVzLiBJZiB0aGUgY29tcG9uZW50IGRvZXNuJ3QgaW1wbGVtZW50XHJcblx0ICogdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QgaXQgaXMgYXMgdGhvdWdoIHRydWUgaXMgcmV0dXJuZWQuIElmIHRoZSBjb21wb25lbnQgcmV0dXJuc1xyXG5cdCAqIGZhbHNlLCB0aGUgcmVuZGVyIG1ldGhvZCBpcyBub3QgY2FsbGVkIGFuZCB0aGUgRE9NIHRyZWUgb2YgdGhlIGNvbXBvbmVudCByZW1haW5zIHVuY2hhbmdlZC5cclxuXHQgKiBUaGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LCBob3dldmVyLCBzdGlsbCBjaGFuZ2UuXHJcblx0ICogQHBhcmFtIG5ld1Byb3BzIFRoZSBuZXcgcHJvcGVydGllcyB0aGF0IHRoZSBwYXJlbnQgY29tcG9uZW50IHByb3ZpZGVzIHRvIHRoaXMgY29tcG9uZW50LlxyXG5cdCAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgaGF2ZSBpdHMgcmVuZGVyIG1ldGhvZCBjYWxsZWQgYW5kIGZhbHNlIG90aGVyd2lzZS5cclxuXHQgKi9cclxuXHRzaG91bGRVcGRhdGU/KCBuZXdQcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogSGFuZGxlcyBhbiBleGNlcHRpb24gdGhhdCBvY2N1cnJlZCBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nIG9mXHJcblx0ICogb25lIG9mIGl0cyBkZXNjZW5kYW50cy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIG9yIGlmIGl0IHRocm93cyBhbiBlcnJvciwgdGhlXHJcblx0ICogZXJyb3Igd2lsbCBiZSBwcm9wYWdhdGVkIHVwIHRoZSBjaGFpbiBvZiBjb21wb25lbnRzIHVudGlsIGl0IHJlYWNoZXMgYSBjb21wb25lbnQgdGhhdFxyXG5cdCAqIGhhbmRsZXMgaXQuIElmIG5vbmUgb2YgdGhlIGNvbXBvbmVudHMgY2FuIGhhbmRsZSB0aGUgZXJyb3IsIHRoZSBlbnRpcmUgdHJlZSB3aWxsIGJlXHJcblx0ICogdW5tb3VudGVkLlxyXG5cdCAqIEBwYXJhbSBlcnIgQW4gZXhjZXB0aW9uIHRoYXQgd2FzIHRocm93biBkdXJpbmcgdGhlIGNvbXBvbmVudCdzIG93biByZW5kZXJpbmcgb3IgcmVuZGVyaW5nXHJcblx0ICogb2Ygb25lIG9mIGl0cyBkZXNjZW5kYW50cy5cclxuXHQgKiBAcGFyYW0gcGF0aCBBbiBhcnJheSBvZiBuYW1lcyBvZiBjb21wb25lbnRzIGFuZCBlbGVtZW50cyBmcm9tIHRoZSBtb3VudGVkIHJvb3QgdG8gdGhlXHJcblx0ICogY29tcG9uZW50IHRoYXQgdGhyZXcgdGhlIGV4Y2VwdGlvbi4gVGhpcyBwYXRoIGlzIHByb3ZpZGVkIG1vc3RseSBmb3IgZGVidWdnaW5nIGFuZCB0cmFjaW5nXHJcblx0ICogcHVycG9zZXMuXHJcblx0ICovXHJcblx0aGFuZGxlRXJyb3I/KCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2YgY29tcG9uZW50IGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0Z2V0VXBkYXRlU3RyYXRlZ3k/KCk6IFVwZGF0ZVN0cmF0ZWd5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVXBkYXRlU3RyYXRlZ3kgb2JqZWN0IHNwZWNpZmllcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiB1cGRhdGUgYmVoYXZpb3Igb2YgY29tcG9uZW50cyBhbmRcclxuICogZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBVcGRhdGVTdHJhdGVneSA9IFxyXG57XHJcblx0LyoqXHJcblx0ICogRmxhZyBkZXRlcm1pbmluZyB3aGV0aGVyIG5vbi1tYXRjaGluZyBuZXcga2V5ZWQgc3ViLW5vZGVzIGFyZSBhbGxvd2VkIHRvIHJlY3ljbGUgbm9uLVxyXG5cdCAqIG1hdGNoaW5nIG9sZCBrZXllZCBzdWItbm9kZXMuIEhlcmUgXCJub24tbWF0Y2hpbmdcIiBtZWFucyB0aG9zZSBuZXcgb3Igb2xkIG5vZGVzIGZvciB3aGljaFxyXG5cdCAqIG5vIG9sZCBvciBuZXcgc3ViLW5vZGVzIHJlc3BlY3RpdmVseSB3ZXJlIGZvdW5kLiBJZiB0aGlzIGZsYWcgaXMgZmFsc2UsIHRoZW4gbm9uLW1hdGNoaW5nXHJcblx0ICogb2xkIHN1Yi1ub2RlcyB3aWxsIGJlIHJlbW92ZWQgYW5kIG5vbi1tYXRjaGluZyBuZXcgc3ViLW5vZGVzIHdpbGwgYmUgaW5zZXJ0ZWQuIElmIHRoaXNcclxuXHQgKiBmbGFnIGlzIHRydWUsIHRoZW4gbm9uLW1hdGNoaW5nIG9sZCBzdWItbm9kZXMgd2lsbCBiZSB1cGRhdGVkIGJ5IHRoZSBub24tbWF0Y2hpbmcgbmV3XHJcblx0ICogc3ViLW5vZGVzIC0gcHJvdmlkZWQgdGhhdCB0aGUgdHlwZXMgb2Ygc3ViLW5vZGVzIGFyZSB0aGUgc2FtZS5cclxuXHQgKiBcclxuXHQgKiBJZiBrZXllZCBzdWItbm9kZXMgcmVjeWNsaW5nIGlzIGFsbG93ZWQgaXQgY2FuIHNwZWVkIHVwIGFuIHVwZGF0ZSBwcm9jZXNzIGJlY2F1c2VcclxuXHQgKiBsZXNzIERPTSBub2RlcyBnZXQgcmVtb3ZlZCBhbmQgaW5zZXJ0ZWQsIHdoaWNoIGlzIG1vcmUgZXhwZW5zaXZlIHRoYW4gdXBkYXRpbmcuIEhvd2V2ZXIsXHJcblx0ICogdGhpcyBjYW4gaGF2ZSBzb21lIGFkdmVyc2UgZWZmZWN0cyB1bmRlciBjaXJ0YWluIGNpcmN1bXN0YW5jZXMgaWYgY2VydGFpbiBkYXRhIGlzIGJvdW5kXHJcblx0ICogdG8gdGhlIHBhcnRpY3VsYXIgaW5zdGFuY2VzIG9mIERPTSBub2Rlcy5cclxuXHQgKiBcclxuXHQgKiBUaGUgZmxhZydzIGRlZmF1bHQgdmFsdWUgaXMgdHJ1ZS5cclxuXHQgKi9cclxuXHRhbGxvd0tleWVkTm9kZVJlY3ljbGluZz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgdXBkYXRlIGN5Y2xlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2NoZWR1bGVkRnVuY1R5cGUgPSAoKSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG4vKipcclxuICogRGVmaW5lcyBldmVudCBoYW5kbGVyIHRoYXQgaXMgaW52b2tlZCB3aGVuIHJlZmVyZW5jZSB2YWx1ZSBjaGFuZ2VzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUmVmRnVuYzxUPiA9IChuZXdSZWY6IFQpID0+IHZvaWQ7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7SUV2ZW50U2xvdCwgRXZlbnRTbG90fSBmcm9tIFwiLi4vdXRpbHMvRXZlbnRTbG90XCJcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFJlZmVyZW5jZSBjbGFzcyB0byB1c2Ugd2hlbmV2ZXIgYSByZWZlcmVuY2UgdG8gYW4gb2JqZWN0IGlzIG5lZWRlZCAtIGZvciBleGFtcGxlLCB3aXRoIEpTWCBgcmVmYFxyXG4gKiBhdHRyaWJ1dGVzIGFuZCBzZXJ2aWNlcy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBSZWY8VD5cclxue1xyXG5cdHByaXZhdGUgX3I6IFQ7XHJcblxyXG5cdC8qKiBFdmVudCB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHJlZmVyZW5jZWQgdmFsdWUgY2hhbmdlcyAqL1xyXG5cdHByaXZhdGUgY2hhbmdlZEV2ZW50OiBJRXZlbnRTbG90PFJlZkZ1bmM8VD4+ID0gbmV3IEV2ZW50U2xvdDxSZWZGdW5jPFQ+PigpO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggbGlzdGVuZXI/OiBSZWZGdW5jPFQ+LCBpbml0aWFsUmVmZXJlbmU/OiBUKVxyXG5cdHtcclxuXHRcdGlmIChsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aGlzLmNoYW5nZWRFdmVudC5hZGQoIGxpc3RlbmVyKTtcclxuXHJcblx0XHR0aGlzLl9yID0gaW5pdGlhbFJlZmVyZW5lO1xyXG5cdH1cclxuXHJcblx0LyoqIEFkZHMgYSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgcmVmZXJlbmNlIGNoYW5nZXMuICovXHJcblx0cHVibGljIGFkZExpc3RlbmVyKCBsaXN0ZW5lcjogUmVmRnVuYzxUPilcclxuXHR7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5hZGQoIGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdC8qKiBSZW1vdmVzIGEgY2FsbGJhY2sgdGhhdCB3YXMgYWRkZWQgd2l0aCBhZGRMaXN0ZW5lci4gKi9cclxuXHRwdWJsaWMgcmVtb3ZlTGlzdGVuZXIoIGxpc3RlbmVyOiBSZWZGdW5jPFQ+KVxyXG5cdHtcclxuXHRcdHRoaXMuY2hhbmdlZEV2ZW50LnJlbW92ZSggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblx0LyoqIEdldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBnZXQgcigpOiBUIHsgcmV0dXJuIHRoaXMuX3I7IH1cclxuXHJcblx0LyoqIFNldCBhY2Nlc3NvciBmb3IgdGhlIHJlZmVyZW5jZSB2YWx1ZSAqL1xyXG5cdHB1YmxpYyBzZXQgciggbmV3UmVmOiBUKVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLl9yICE9PSBuZXdSZWYpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuX3IgPSBuZXdSZWY7XHJcblx0XHRcdHRoaXMuY2hhbmdlZEV2ZW50LmZpcmUoIG5ld1JlZik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiogQ2xlYXJzIHRoZSByZWZlcmVuY2UgdmFsdWUgYW5kIGFsc28gY2xlYXJzIGFsbCBhbGwgcmVnaXN0ZXJlZCBsaXN0ZW5lcnMgKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuX3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNoYW5nZWRFdmVudC5jbGVhcigpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElTZXJ2aWNlRGVmaW5pdGlvbnMgaW50ZXJmYWNlIHNlcnZlcyBhcyBhIG1hcHBpbmcgYmV0d2VlbiBzZXJ2aWNlIG5hbWVzIGFuZCBzZXJ2aWNlIHR5cGVzLlxyXG4gKiBUaGlzIGludGVyZmFjZSBpcyBpbnRlbmRlZCB0byBiZSBhdWdtZW50ZWQgYnkgbW9kdWxlcyB0aGF0IGRlZmluZSBhbmQvb3IgdXNlIHNwZWNpZmljIHNlcnZpY2VzLlxyXG4gKiBUaGlzIGFsbG93cyBwZXJmb3JtaW5nIHNlcnZpY2UgcHVibGlzaGluZyBhbmQgc3Vic2NyaWJpbmcgaW4gdHlwZS1zYWZlIG1hbm5lci5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVNlcnZpY2VEZWZpbml0aW9uc1xyXG57XHJcblx0LyoqIEJ1aWx0LWluIGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuICovXHJcblx0XCJTdGRFcnJvckhhbmRsaW5nXCI6IElFcnJvckhhbmRsaW5nU2VydmljZTtcclxuXHJcblx0LyoqXHJcblx0ICogQnVpbHQtaW4gc2VydmljZSBmb3IgbGF6eSBwZW9wbGUgLSBjYW4gYmUgdXNlZCBmb3IgcXVpY2sgcHJvdG90eXBlcyB3aXRob3V0IHRoZSBuZWVkIHRvXHJcblx0ICogYXVnbWVudCB0aGUgaW50ZXJmYWNlLlxyXG5cdCAqL1xyXG5cdFwiYW55XCI6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElFcnJvckhhbmRsaW5nU2VydmljZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHNlcnZpY2UgdGhhdCBjYW4gYmUgaW52b2tlZCB3aGVuIGFuIGVycm9yIC1cclxuICogdXN1YWxseSBhbiBleGNlcHRpb24gLSBpcyBlbmNvdW50ZXJlZCBidXQgY2Fubm90IGJlIGhhbmRsZWQgbG9jYWxseS4gQSBjb21wb25lbnQgdGhhdCBpbXBsZW1lbnRzXHJcbiAqIHRoaXMgc2VydmljZSB3b3VsZCBub3JtYWxseSByZW1lbWJlciB0aGUgZXJyb3IgYW5kIHJlcXVlc3QgdG8gdXBkYXRlIGl0c2VsZixzbyB0aGF0IGluIGl0c1xyXG4gKiByZW5kZXIgbWV0aG9kIGl0IHdpbGwgcHJlc2VudCB0aGUgZXJyb3IgdG8gdGhlIHVzZXIuXHJcbiAqXHJcbiAqIFRoZSBJRXJyb3JIYW5kbGluZ1NlcnZpY2UgaXMgaW1wbGVtZW50ZWQgYnkgdGhlIFJvb3QgVmlydHVhbCBOb2RlIGFzIGEgbGFzdCByZXNvcnQgZm9yIGVycm9yXHJcbiAqIGhhbmRsaW5nLiBUaGUgUm9vdCBWTiB3aWxsIGRpc3BsYXkgYSBzaW1wbGUgVUkgc2hvd2luZyB0aGUgZXJyb3IgYW5kIHdpbGwgYWxsb3cgdGhlIHVzZXIgdG9cclxuICogcmVzdGFydCAtIGluIHRoZSBob3BlIHRoYXQgdGhlIGVycm9yIHdpbGwgbm90IHJlcGVhdCBpdHNlbGYuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cmVwb3J0RXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIC8vXHJcbi8vIC8vIERlY29yYXRvciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHByb3BlcnRpZXMgd2l0aG91dCB0aGUgbmVlZCB0byBtYW51YWxseSBjcmVhdGVcclxuLy8gLy8gUmVmPD4gaW5zdGFuY2VzLiBUaGlzIGFsbG93cyBmb3IgdGhlIGZvbGxvd2luZyBjb2RlIHBhdHRlcm46XHJcbi8vIC8vXHJcbi8vIC8vXHRjbGFzcyBBIGV4dGVuZHMgQ29tcG9uZW50XHJcbi8vIC8vXHR7XHJcbi8vIC8vXHRcdEByZWYgbXlEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4vLyAvL1x0XHRyZW5kZXIoKSB7IHJldHVybiA8ZGl2IHJlZj17bXlEaXZ9PkhlbGxvPC9kaXY+OyB9XHJcbi8vIC8vXHR9XHJcbi8vIC8vXHJcbi8vIC8vIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgbXlEaXYgcHJvcGVydHkgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNyZWF0ZWQgd2hlbiBmaXJzdCBhY2Nlc3NlZC4gVGhlXHJcbi8vIC8vIGFjdHVhbCBvYmplY3Qgd2lsbCBiZSBhIFByb3h5IHRvIFJlZjw+IG9mIHRoZSBnaXZlbiB0eXBlIChIVE1MRGl2RWxlbWVudCBpbiB0aGlzIGNhc2UpLlxyXG4vLyAvL1xyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHJlZiggdGFyZ2V0LCBuYW1lKVxyXG4vLyB7XHJcbi8vIFx0ZnVuY3Rpb24gcmVmR2V0KCBvYmosIGtleSlcclxuLy8gXHR7XHJcbi8vIFx0XHRpZiAoa2V5ID09PSBcInJcIilcclxuLy8gXHRcdFx0cmV0dXJuIG9iai5yO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRyZXR1cm4gb2JqLnJba2V5XTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGZ1bmN0aW9uIHJlZlNldCggb2JqLCBrZXksIHZhbCwgcmVjZWl2ZXIpOiBib29sZWFuXHJcbi8vIFx0e1xyXG4vLyBcdFx0aWYgKGtleSA9PT0gXCJyXCIpXHJcbi8vIFx0XHRcdG9iai5yID0gdmFsO1xyXG4vLyBcdFx0ZWxzZVxyXG4vLyBcdFx0XHRvYmoucltrZXldID0gdmFsO1xyXG5cclxuLy8gXHRcdHJldHVybiB0cnVlO1xyXG4vLyBcdH1cclxuXHJcbi8vIFx0ZnVuY3Rpb24gZW5zdXJlUHJveHkoIHRoaXNPYmo6IGFueSwgYXR0ck5hbWU6IHN0cmluZyk6IGFueVxyXG4vLyBcdHtcclxuLy8gXHRcdGxldCBwcm94eSA9IHRoaXNPYmpbYXR0ck5hbWVdO1xyXG4vLyBcdFx0aWYgKCFwcm94eSlcclxuLy8gXHRcdHtcclxuLy8gXHRcdFx0cHJveHkgPSBuZXcgUHJveHkoIG5ldyBSZWY8YW55PigpLCB7IGdldDogcmVmR2V0LCBzZXQ6IHJlZlNldCB9KTtcclxuLy8gXHRcdFx0dGhpc09ialthdHRyTmFtZV0gPSBwcm94eTtcclxuLy8gXHRcdH1cclxuLy8gXHRcdHJldHVybiBwcm94eTtcclxuLy8gXHR9XHJcblxyXG4vLyBcdGxldCBhdHRyTmFtZSA9IFwiX3JlZl9cIiArIG5hbWU7XHJcbi8vIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcbi8vIFx0XHR7XHJcbi8vIFx0XHRcdHNldCggdmFsKSB7IGVuc3VyZVByb3h5KCB0aGlzLCBhdHRyTmFtZSkuciA9IHZhbDsgfSxcclxuLy8gXHRcdFx0Z2V0KCkgeyByZXR1cm4gZW5zdXJlUHJveHkoIHRoaXMsIGF0dHJOYW1lKTsgfVxyXG4vLyBcdFx0fVxyXG4vLyBcdCk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFR5cGUgb2YgcmVmIHByb3BlcnR5IHRoYXQgY2FuIGJlIHBhc3NlZCB0byBKU1ggZWxlbWVudHMgYW5kIGNvbXBvbmVudHMuIFRoaXMgY2FuIGJlIGVpdGhlciB0aGVcclxuICogW1tSZWZdXSBjbGFzcyBvciBbW1JlZkZ1bmNdXSBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCB0eXBlIFJlZlByb3BUeXBlPFQgPSBhbnk+ID0gUmVmPFQ+IHwgUmVmRnVuYzxUPjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgdGhhdCB0YWtlcyBjYXJlIG9mIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2ZcclxuICogcmVmZXJlbmNlcy4gVGhlIG9wdGlvbmFsIGBvbmx5SWZgIHBhcmFtZXRlciBtYXkgc3BlY2lmeSBhIHZhbHVlIHNvIHRoYXQgb25seSBpZiB0aGUgcmVmZXJlbmNlXHJcbiAqIGN1cnJlbnRseSBoYXMgdGhlIHNhbWUgdmFsdWUgaXQgd2lsbCBiZSByZXBsYWNlZC4gVGhpcyBtaWdodCBiZSBuZWVkZWQgdG8gbm90IGNsZWFyIGFcclxuICogcmVmZXJlbmNlIGlmIGl0IGFscmVhZHkgcG9pbnRzIHRvIGEgZGlmZmVyZW50IG9iamVjdC5cclxuICogQHBhcmFtIHJlZiBbW1JlZl1dIG9iamVjdCB0byB3aGljaCB0aGUgbmV3IHZhbHVlIHdpbGwgYmUgc2V0XHJcbiAqIEBwYXJhbSB2YWwgUmVmZXJlbmNlIHZhbHVlIHRvIHNldCB0byB0aGUgUmVmIG9iamVjdFxyXG4gKiBAcGFyYW0gb25seUlmIEFuIG9wdGlvbmFsIHZhbHVlIHRvIHdoaWNoIHRvIGNvbXBhcmUgdGhlIGN1cnJlbnQgKG9sZCkgdmFsdWUgb2YgdGhlIHJlZmVyZW5jZS5cclxuICogVGhlIG5ldyB2YWx1ZSB3aWxsIGJlIHNldCBvbmx5IGlmIHRoZSBvbGQgdmFsdWUgZXF1YWxzIHRoZSBgb25seUlmYCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWY8VD4oIHJlZjogUmVmUHJvcFR5cGU8VD4sIHZhbDogVCwgb25seUlmPzogVCk6IHZvaWRcclxue1xyXG5cdGlmICh0eXBlb2YgcmVmID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGxldCByZWZPYmogPSByZWYgYXMgUmVmPFQ+O1xyXG5cdFx0aWYgKG9ubHlJZiA9PT0gdW5kZWZpbmVkIHx8IHJlZk9iai5yID09PSBvbmx5SWYpXHJcblx0XHRcdHJlZk9iai5yID0gdmFsO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgcmVmID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHQocmVmIGFzIFJlZkZ1bmM8VD4pKHZhbCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERlY29yYXRvciBmdW5jdGlvbiBmb3IgZGVmaW5pbmcgcHJvcGVydGllcyB3aXRoIGEgc2V0IG1ldGhvZCB0aGF0IGNhbGxzIHRoZSB1cGRhdGVNZSBtZXRob2RcclxuICogd2hlbmV2ZXIgdGhlIHByb3BlcnR5IHZhbHVlIGNoYW5nZXMuXHJcbiAqXHRgYGB0c3hcclxuICpcdGNsYXNzIENoaWxkIGV4dGVuZHMgQ29tcG9uZW50XHJcbiAqXHR7XHJcbiAqXHRcdEBtaW0udXBkYXRhYmxlIHRleHQ6IHN0cmluZyA9IFwiSGVsbG8hXCI7XHJcbiAqXHRcdHJlbmRlcigpXHJcbiAqXHRcdHtcclxuICpcdCBcdFx0cmV0dXJuIDxkaXY+e3RleHR9PC9kaXY+XHJcbiAqXHRcdH1cclxuICpcdH1cclxuICpcclxuICpcdGNsYXNzIFBhcmVudCBleHRlbmRzIENvbXBvbmVudFxyXG4gKlx0e1xyXG4gKlx0XHRjaGlsZCA9IG5ldyBDaGlsZCgpO1xyXG4gKlx0XHRyZW5kZXIoKVxyXG4gKlx0XHR7XHJcbiAqXHRcdFx0cmV0dXJuIDxkaXYgY2xpY2s9eygpID0+IHRoaXMuY2hpbGQudGV4dCArPSBcIiBhZ2FpblwifT57dGhpcy5jaGlsZH08L2Rpdj5cclxuICpcdFx0fVxyXG4gKlx0fVxyXG4gKlx0YGBgXHJcbiAqIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgQ2hpbGQgY29tcG9uZW50IHdpbGwgYmUgcmUtcmVuZGVyZWQgd2hlbiBpdHMgYHRleHRgIHByb3BlcnR5IGNoYW5nZXMuXHJcbiAqIFxyXG4gKiBAcGFyYW0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0gbmFtZSBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGFibGUoIHRhcmdldCwgbmFtZTogc3RyaW5nKVxyXG57XHJcblx0bGV0IGF0dHJOYW1lID0gXCJfbV9cIiArIG5hbWU7XHJcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0YXJnZXQsIG5hbWUsXHJcblx0XHR7XHJcblx0XHRcdHNldCggdmFsKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKHRoaXNbYXR0ck5hbWVdICE9PSB2YWwpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpc1thdHRyTmFtZV0gPSB2YWw7XHJcblx0XHRcdFx0XHRsZXQgdm46IElWTm9kZSA9IHRoaXMudm47XHJcblx0XHRcdFx0XHRpZiAodm4gJiYgIXZuLnVwZGF0ZVJlcXVlc3RlZClcclxuXHRcdFx0XHRcdFx0dGhpcy52bi5yZXF1ZXN0VXBkYXRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXQoKSB7IHJldHVybiB0aGlzW2F0dHJOYW1lXTsgfVxyXG5cdFx0fVxyXG5cdCk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIEFuIGFydGlmaWNpYWwgXCJGcmFnbWVudFwiIGNvbXBvbmVudCB0aGF0IGlzIG9ubHkgdXNlZCBhcyBhIHRlbXBvcmFyeSBjb2xsZWN0aW9uIG9mIG90aGVyIGl0ZW1zXHJcbiAqIGluIHBsYWNlcyB3aGVyZSBKU1ggb25seSBhbGxvd3MgYSBzaW5nbGUgaXRlbS4gT3VyIEpTWCBmYWN0b3J5IGZ1bmN0aW9uIGNyZWF0ZXMgYSB2aXJ0dWFsIG5vZGVcclxuICogZm9yIGVhY2ggb2YgaXRzIGNoaWxkcmVuIGFuZCB0aGUgZnVuY3Rpb24gaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkLiBUaGlzIGZ1bmN0aW9uIGlzIG9ubHkgbmVlZGVkXHJcbiAqIGJlY2F1c2UgY3VycmVudGx5IFR5cGVTY3JpcHQgZG9lc24ndCBhbGxvdyB0aGUgYDw+YCBmcmFnbWVudCBub3RhdGlvbiBpZiBhIGN1c3RvbSBKU1ggZmFjdG9yeVxyXG4gKiBmdW5jdGlvbiBpcyB1c2VkLlxyXG4gKlxyXG4gKiBVc2UgaXQgYXMgZm9sbG93czpcclxuICogYGBgdHN4XHJcbiAqXHRpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICpcdC4uLi4uXHJcbiAqXHRyZW5kZXIoKVxyXG4gKlx0e1xyXG4gKlx0XHRyZXR1cm4gPG1pbS5GcmFnbWVudD5cclxuICpcdFx0XHQ8ZGl2MS8+XHJcbiAqXHRcdFx0PGRpdjIvPlxyXG4gKlx0XHRcdDxkaXYzLz5cclxuICpcdFx0PC9taW0uRnJhZ21lbnQ+XHJcbiAqXHR9XHJcbiAgYGBgXHJcblxyXG4gKiBAcGFyYW0gcHJvcHMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gRnJhZ21lbnQoIHByb3BzOiBDb21wUHJvcHM8e30+KTogYW55IHt9XHJcblxyXG5cclxuXHJcbi8qKiBcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3MgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBjbGFzcyBvZiBoYW5kbGVycyBvZiBjdXN0b20gYXR0cmlidXRlc1xyXG4gKiB0aGF0IGNhbiBiZSBhcHBsaWVkIHRvIGludHJpbnNpYyAoSFRNTCBvciBTVkcpIGVsZW1lbnRzLiBUaGUgcmVxdWlyZW1lbnRzIG9uIHN1Y2ggY2xhc3NlcyBhcmU6XHJcbiAqIDEuIEltcGxlbWVudCBhIGNvbnN0cnVjdG9yIGFjY2VwdGluZyBJRWxtVk4sIGF0dHJpYnV0ZSB2YWx1ZSBhbmQgYXR0cmlidXRlIG5hbWUgKHRoaXMgYWxsb3dzXHJcbiAqICAgdGhlIHNhbWUgaGFuZGxlciB0byBzZXJ2ZSBkaWZmZXJlbnQgYXR0cmlidXRlcykuXHJcbiAqIDIuIEltcGxlbWVudCB0aGUgSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXIgaW50ZXJmYWNlXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyQ2xhc3M8VD5cclxue1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdHMgYSBuZXcgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVyIHRoYXQgd2lsbCBhY3Qgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIHByb3ZpZGVzXHJcblx0ICogdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gQXR0cmlidXRlIG5hbWUgaXMgYWxzbyBwcm92aWRlZCBpbiBjYXNlIHRoZSBoYW5kbGVyXHJcblx0ICogc3VwcG9ydHMgZGlmZmVyZW50IGF0dHJpYnV0ZXMuIEJ5IHRoZSB0aW1lIHRoaXMgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgRE9NIGVsZW1lbnQgaGFkXHJcblx0ICogYWxyZWFkeSBiZWVuIGNyZWF0ZWQgYW5kIHN0YW5kYXJkIGF0dHJpYnV0ZXMgYW5kIGV2ZW50IGxpc3RlbmVycyBoYWQgYmVlbiBhcHBsaWVkLlxyXG5cdCAqIEBwYXJhbSBlbG1WTiBWaXJ0dWFsIG5vZGUgZm9yIHRoaXMgZWxlbWVudC4gVGhlIGhhbmRsZXIgY2FuIHJldHJpZXZlIHRoZSBET00gZWxlbWVudCBmcm9tXHJcblx0ICogICB0aGlzIGludGVyZmFjZSBhbmQgYWxzbyB1c2Ugb3RoZXIgbWV0aG9kcyAoZS5nLiBzdWJzY3JpYmUgdG8gc2VydmljZXMpLlxyXG5cdCAqIEBwYXJhbSBhdHRyVmFsIEluaXRpYWwgdmFsdWUgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGVcclxuXHQgKiBAcGFyYW0gYXR0ck5hbWUgTmFtZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZVxyXG5cdCAqL1xyXG5cdG5ldyggZWxtVk46IElFbG1WTiwgYXR0clZhbDogVCwgYXR0ck5hbWU/OiBzdHJpbmcpOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlcjxUPjtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyIGludGVyZmFjZSByZXByZXNlbnRzIGFuIGFiaWxpdHkgdG8gaGFuZGxlIGN1c3RvbSBwcm9wZXJ0aWVzIHRoYXQgY2FuXHJcbiAqIGJlIGFwcGxpZWQgdG8gaW50cmluc2ljIChIVE1MIG9yIFNWRykgZWxlbWVudHMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDdXN0b21BdHRyaWJ1dGVIYW5kbGVyPFQ+XHJcbntcclxuXHQvKipcclxuXHQgKiBVcGRhdGVzIGFuIGV4aXN0aW5nIGN1c3RvbSBhdHRyaWJ1dGUgd2l0aCB0aGUgbmV3IHZhbHVlLlxyXG5cdCAqIEBwYXJhbSBuZXdQcm9wVmFsIE5ldyB2YWx1ZSBvZiB0aGUgY3VzdG9tIGF0dHJpYnV0ZS5cclxuXHQgKiBAcmV0dXJucyBUcnVlIGlmIGNoYW5nZXMgd2VyZSBtYWRlIGFuZCBmYWxzZSBvdGhlcndpc2UuXHJcblx0ICovXHJcblx0dXBkYXRlKCBuZXdQcm9wVmFsOiBUKTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogVGVybWluYXRlcyB0aGUgZnVuY3Rpb25pbmcgb2YgdGhlIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlci4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBlaXRoZXJcclxuXHQgKiB3aGVuIGEgbmV3IHJlbmRlcmluZyBvZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgdGhlIGF0dHJpYnV0ZSBhbnltb3JlIG9yIGlmIHRoZSBlbGVtZW50XHJcblx0ICogaXMgcmVtb3ZlZC4gQWx0aG91Z2ggdGhpcyBtZXRob2QgaXMgb3B0aW9uYWwsIG1vc3QgaGFuZGxlcnMgd2lsbCBuZWVkIHRvIGltcGxlbWVudCBpdCB0b1xyXG5cdCAqIHByb3Blcmx5IGNsZWFudXAgYW55IHJlc291cmNlcyAoZS5nLiBldmVudCBoYW5kbGVycykgdG8gYXZvaWQgbGVha3MuXHJcblx0ICogQHBhcmFtIGlzUmVtb3ZhbCBUcnVlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nIHJlbW92ZWQgYW5kIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIGJlaW5nXHJcblx0ICogICB1cGRhdGVkIGFuZCB0aGUgYXR0cmlidXRlIGlzIG5vIGxvbmdlciBwcm92aWRlZC4gSWYgdGhlIGhhbmRsZXIgYWRkcyBhbnkgZXZlbnRcclxuXHQgKiAgIGxpc3RlbmVycyB0byB0aGUgZWxlbWVudCwgdGhlbiBpdCBoYXMgdG8gcmVtb3ZlIHRoZW0gb24gdXBkYXRlIGJ1dCBkb2VuJ3QgaGF2ZSB0byBkbyBpdFxyXG5cdCAqICAgb24gZWxlbWVudCByZW1vdmFsLlxyXG5cdCAqL1xyXG5cdHRlcm1pbmF0ZT8oIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqIERlZmluZXMgdHlwZXMgb2YgdmlydHVhbCBET00gbm9kZXMgKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gVk5UeXBlXHJcbntcclxuXHQvKiogVG9wLWxldmVsIG5vZGUgKi9cclxuXHRSb290LFxyXG5cclxuXHQvKiogQ2xhc3MtYmFzZWQgKHN0YXRlLWZ1bGwpIGNvbXBvbmVudCBjcmVhdGVkIHZpYSBuZXcgKi9cclxuXHRJbmRlcGVuZGVudENvbXAsXHJcblxyXG5cdC8qKiBDbGFzcy1iYXNlZCAoc3RhdGUtZnVsbCkgY29tcG9uZW50IGxhaWQgb3V0IHVzaW5nIEpTWCAqL1xyXG5cdE1hbmFnZWRDb21wLFxyXG5cclxuXHQvKiogU3RhdGVsZXNzIGNvbXBvbmVudCAoc2ltcGxlIHJlbmRlcmluZyBmdW5jdGlvbiBhY2NlcHRpbmcgcHJvcHMpICovXHJcblx0RnVuY0NvbXAsXHJcblxyXG5cdC8qKiBET00gZWxlbWVudCAoSFRNTCBvciBTVkcpIGxhaWQgb3V0IHVzaW5nIEpTWC4gKi9cclxuXHRFbG0sXHJcblxyXG5cdC8qKiBUZXh0IG5vZGUgKi9cclxuXHRUZXh0LFxyXG5cclxuXHQvKiogV3JhcHBlciBhcm91bmQgYSBmdW5jdGlvbi9tZXRob2QgdGhhdCBjYW4gYmUgdXBkYXRlZCBpbmRlcGVuZGVudGx5LiAqL1xyXG5cdEZ1bmNQcm94eSxcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElWTm9kZSBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZS4gVGhyb3VnaCB0aGlzIGludGVyZmFjZSwgY2FsbGVycyBjYW4gcGVyZm9ybVxyXG4gKiBtb3N0IGNvbW1vbiBhY3Rpb25zIHRoYXQgYXJlIGF2YWlsYWJsZSBvbiBldmVyeSB0eXBlIG9mIHZpcnR1YWwgbm9kZS4gRWFjaCB0eXBlIG9mIHZpcnR1YWwgbm9kZVxyXG4gKiBhbHNvIGltcGxlbWVudHMgYSBtb3JlIHNwZWNpZmljIGludGVyZmFjZSB0aHJvdWdoIHdoaWNoIHRoZSBzcGVjaWZpYyBjYXBhYmlsaXRpZXMgb2YgdGhlIG5vZGVcclxuICogdHlwZSBhcmUgYXZhaWxhYmxlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIG5vZGUgdHlwZS4gKi9cclxuXHRyZWFkb25seSB0eXBlOiBWTlR5cGU7XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRyZWFkb25seSBwYXJlbnQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBDb21wb25lbnQgdGhhdCBjcmVhdGVkIHRoaXMgbm9kZSBpbiBpdHMgcmVuZGVyIG1ldGhvZCAob3IgdW5kZWZpbmVkKS4gKi9cclxuXHRyZWFkb25seSBjcmVhdG9yPzogSUNvbXBvbmVudDtcclxuXHJcblx0LyoqIFJlZmVyZW5jZSB0byB0aGUgbmV4dCBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgbGFzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IG5leHQ/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBSZWZlcmVuY2UgdG8gdGhlIHByZXZpb3VzIHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBmaXJzdCBzaWJsaW5nLiAqL1xyXG5cdHJlYWRvbmx5IHByZXY/OiBJVk5vZGU7XHJcblxyXG5cdC8qKiBMaXN0IG9mIHN1Yi1ub2Rlcy4gKi9cclxuXHRyZWFkb25seSBzdWJOb2Rlcz86IElWTm9kZVtdO1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIG5vZGUncyBkaXNwbGF5IG5hbWUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yIHJlcG9ydGluZy4gVGhlIG5hbWVcclxuXHQgKiBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIlxyXG5cdCAqIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQuXHJcblx0ICovXHJcblx0cmVhZG9ubHkgbmFtZT86IHN0cmluZztcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHJlYWRvbmx5IHVwZGF0ZVJlcXVlc3RlZDogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHQvKiogVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJ5IHRoZSBjb21wb25lbnQgd2hlbiBpdCBuZWVkcyB0byBiZSB1cGRhdGVkLiAqL1xyXG5cdHJlcXVlc3RVcGRhdGUoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGJlZm9yZSBhbGwgdGhlIHNjaGVkdWxlZCBjb21wb25lbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZC5cclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdG8gYmUgdXNlZCBhcyB0aGUgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBUaGlzIHBhcmFtZXRlclxyXG5cdCAqICAgaXMgbm90IG5lZWRlZCBpZiB0aGUgZnVuY3Rpb24gaXMgYWxyZWFkeSBib3VuZCBvciBpdCBpcyBhbiBhcnJvdyBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRzY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYzogU2NoZWR1bGVkRnVuY1R5cGUsIHRoYXQ/OiBvYmplY3QpOiB2b2lkO1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZ2lzdGVycyBhbiBvYmplY3Qgb2YgYW55IHR5cGUgYXMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElEIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgZm9yXHJcblx0ICogY29uc3VtcHRpb24gYnkgZGVzY2VuZGFudCBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdHB1Ymxpc2hTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHNlcnZpY2U6IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10pOiB2b2lkO1xyXG5cclxuXHQvKiogVW5yZWdpc3RlcnMgYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiAqL1xyXG5cdHVucHVibGlzaFNlcnZpY2U8SyBleHRlbmRzIGtleW9mIElTZXJ2aWNlRGVmaW5pdGlvbnM+KCBpZDogSyk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN1YnNjcmliZXMgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBJZiB0aGUgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCBpcyByZWdpc3RlcmVkXHJcblx0ICogYnkgdGhpcyBvciBvbmUgb2YgdGhlIGFuY2VzdG9yIGNvbXBvbmVudHMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDtcclxuXHQgKiBvdGhlcndpc2UsIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW5cclxuXHQgKiB1bmRlZmluZWQuIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgdGhpcyBvciBhIGNsb3Nlc3RcclxuXHQgKiBhbmNlc3RvciBjb21wb25lbnQgaXMgY2hhbmdlZCx0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHQgKiBUaGUgdXNlU2VsZiBvcHRpb25hbCBwYXJhbWV0ZXIgZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgY2FuIHN1YnNjcmliZSB0byB0aGVcclxuXHQgKiBzZXJ2aWNlIHB1Ymxpc2hlZCBieSBpdHNlbGYuIFRoZSBkZWZhdWx0IGlzIGZhbHNlLlxyXG5cdCAqIEBwYXJhbSBpZCBcclxuXHQgKiBAcGFyYW0gcmVmIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRzdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIHJlZjogUmVmUHJvcFR5cGU8SVNlcnZpY2VEZWZpbml0aW9uc1tLXT4sXHJcblx0XHRcdFx0XHRkZWZhdWx0U2VydmljZT86IElTZXJ2aWNlRGVmaW5pdGlvbnNbS10sIHVzZVNlbGY/OiBib29sZWFuKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogVW5zdWJzY3JpYmVzIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBUaGUgUmVmIG9iamVjdCB0aGF0IHdhcyB1c2VkIHRvIHN1YnNjcmliZVxyXG5cdCAqIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cclxuXHQgKiBAcGFyYW0gaWQgXHJcblx0ICovXHJcblx0dW5zdWJzY3JpYmVTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEspOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQgKiBjb21wb25lbnQgb3IgdGhlIGRlZmF1bHQgdmFsdWUgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3IgY29tcG9uZW50cyByZWdpc3RlcmVkIGEgc2VydmljZSB3aXRoXHJcblx0ICogdGhpcyBJRC4gVGhpcyBtZXRob2QgZG9lc24ndCBlc3RhYmxpc2ggYSBzdWJzY3JpcHRpb24gYW5kIG9ubHkgcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhdGUuXHJcblx0ICogQHBhcmFtIGlkIFxyXG5cdCAqIEBwYXJhbSBkZWZhdWx0U2VydmljZSBcclxuXHQgKiBAcGFyYW0gdXNlU2VsZiBcclxuXHQgKi9cclxuXHRnZXRTZXJ2aWNlPEsgZXh0ZW5kcyBrZXlvZiBJU2VydmljZURlZmluaXRpb25zPiggaWQ6IEssIGRlZmF1bHRTZXJ2aWNlPzogSVNlcnZpY2VEZWZpbml0aW9uc1tLXSxcclxuXHRcdFx0XHRcdHVzZVNlbGY/OiBib29sZWFuKTogSVNlcnZpY2VEZWZpbml0aW9uc1tLXTtcclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgc28gdGhhdCBpZiB0aGUgb3JpZ2luYWxcclxuXHQgKiBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZVxyXG5cdCAqIGV4Y2VwdGlvbiBidWJibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBieSB0aGUgY29kZSB0aGF0IGlzIG5vdCBwYXJ0IG9mIGFueSBjb21wb25lbnQgYnV0IHN0aWxsIGhhcyBhY2Nlc3NcclxuXHQgKiB0byB0aGUgSVZOb2RlIG9iamVjdDsgZm9yIGV4YW1wbGUsIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlcnMuIENvbXBvbmVudHMgdGhhdCBkZXJpdmUgZnJvbSB0aGVcclxuXHQgKiBtaW0uQ29tcG9uZW50IGNsYXNzIHNob3VsZCB1c2UgdGhlIHdyYXBDYWxsYmFjayBtZXRob2Qgb2YgdGhlIG1pbS5Db21wb25lbnQgY2xhc3MuXHJcblx0ICogXHJcblx0ICogVXNlIHRoaXMgbWV0aG9kIGJlZm9yZSBwYXNzaW5nIGNhbGxiYWNrcyB0byBkb2N1bWVudCBhbmQgd2luZG93IGV2ZW50IGhhbmRsZXJzIGFzIHdlbGwgYXNcclxuXHQgKiBub24tRE9NIG9iamVjdHMgdGhhdCB1c2UgY2FsbGJhY2tzLCBlLmcuIHByb21pc2VzLiBGb3IgZXhhbXBsZTpcclxuXHQgKiBcclxuXHQgKiBgYGB0eXBlc2NyaXB0XHJcblx0ICpcdGNsYXNzIFJlc2l6ZU1vbml0b3JcclxuXHQgKlx0e1xyXG5cdCAqXHRcdHByaXZhdGUgb25XaW5kb3dSZXNpemUoZTogRXZlbnQpOiB2b2lkIHt9O1xyXG5cdCAqXHJcblx0ICogXHRcdHdyYXBwZXI6IChlOiBFdmVudCk6IHZvaWQ7XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdGFydFJlc2l6ZU1vbml0b3JpbmcoIHZuOiBJVk5vZGUpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0dGhpcy53cmFwcGVyID0gdm4ud3JhcENhbGxiYWNrKCB0aGlzLm9uV2luZG93UmVzaXplLCB0aGlzKTtcclxuXHQgKlx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInJlc2l6ZVwiLCB0aGlzLndyYXBwZXIpO1xyXG5cdCAqXHRcdH1cclxuXHQgKiBcclxuXHQgKiBcdFx0cHVibGljIHN0b3BSZXNpemVNb25pdG9yaW5nKClcclxuXHQgKlx0XHR7XHJcblx0ICpcdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHVuZGVmaW5lZDtcclxuXHQgKlx0XHR9XHJcblx0ICpcdH1cclxuXHQgKiBgYGBcclxuXHQgKiBcclxuXHQgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2sgdG8gYmUgd3JhcHBlZFxyXG5cdCAqIEByZXR1cm5zIEZ1bmN0aW9uIHRoYXQgaGFzIHRoZSBzYW1lIHNpZ25hdHVyZSBhcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHRoYXQgc2hvdWxkIGJlIHVzZWRcclxuXHQgKiAgICAgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2tcclxuXHQgKi9cclxuXHR3cmFwQ2FsbGJhY2s8VCBleHRlbmRzIEZ1bmN0aW9uPiggY2FsbGJhY2s6IFQsIHRoYXQ/OiBvYmplY3QpOiBUO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNsYXNzQ29tcFZOIGludGVyZmFjZSByZXByZXNlbnRzIGEgdmlydHVhbCBub2RlIGZvciBhIEpTWC1iYXNlZCBjb21wb25lbnQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElDbGFzc0NvbXBWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIEdldHMgdGhlIGNvbXBvbmVudCBpbnN0YW5jZS4gKi9cclxuXHRyZWFkb25seSBjb21wOiBJQ29tcG9uZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSU1hbmFnZWRDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgSlNYLWJhc2VkIGNvbXBvbmVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU1hbmFnZWRDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG5cdC8qKiBHZXRzIHRoZSBjb21wb25lbnQgY2xhc3MuICovXHJcblx0cmVhZG9ubHkgY29tcENsYXNzOiBJQ29tcG9uZW50Q2xhc3M7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJSW5kZXBlbmRlbnRDb21wVk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgY29tcG9uZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJSW5kZXBlbmRlbnRDb21wVk4gZXh0ZW5kcyBJVk5vZGVcclxue1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgVGhlIElFbG1WTiBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIHZpcnR1YWwgbm9kZSBmb3IgYSBET00gZWxlbWVudC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsbVZOIGV4dGVuZHMgSVZOb2RlXHJcbntcclxuXHQvKiogR2V0cyB0aGUgRE9NIGVsZW1lbnQgbmFtZS4gKi9cclxuXHRyZWFkb25seSBlbG1OYW1lOiBzdHJpbmc7XHJcblxyXG5cdC8qKiBHZXRzIHRoZSBmbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGVsZW1lbnQgaXMgYW4gU1ZHIChhcyBvcHBvc2VkIHRvIEhUTUwpLiAqL1xyXG5cdHJlYWRvbmx5IGlzU3ZnOiBib29sZWFuO1xyXG5cclxuXHQvKiogR2V0cyB0aGUgRE9NIGVsZW1lbnQgb2JqZWN0LiAqL1xyXG5cdHJlYWRvbmx5IGVsbTogRWxlbWVudDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIElUZXh0Vk4gaW50ZXJmYWNlIHJlcHJlc2VudHMgYSB2aXJ0dWFsIG5vZGUgZm9yIGEgdGV4dCBET00gbm9kZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVRleHRWTiBleHRlbmRzIElWTm9kZVxyXG57XHJcblx0LyoqIFRleHQgb2YgdGhlIG5vZGUuICovXHJcblx0dGV4dDogc3RyaW5nO1xyXG5cclxuXHQvKiogVGV4dCBET00gbm9kZS4gKi9cclxuXHR0ZXh0Tm9kZTogVGV4dDtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogVGhlIFNsaWNlIHR5cGUgZGVmaW5lcyBhbiBvYmplY3Qgc3RydWN0dXJlIGRlc2NyaWJpbmdcclxuICogcGFyYW1ldGVycyBmb3IgcmVuZGVyaW5nIGFuIGVsZW1lbnQuIFRoZXkgaW5jbHVkZTogQ2xhc3MsIFN0eWxlLCBQcm9wZXJ0aWVzLCBDb250ZW50LiBUaGlzXHJcbiAqIHN0cnVjdHVyZSBpcyBpbnRlbmRlZCB0byBiZSBwYXNzZWQgZWl0aGVyIGluIHRoZSBjb25zdHJ1Y3RvciBvciB2aWEgdGhlIHByb3RlY3RlZCBtZXRob2RzIG9mXHJcbiAqIGRlcml2ZWQgY2xhc3Nlcywgc28gdGhhdCB0aGV5IGNhbiBjb250cm9sIHBhcmFtZXRlcnMgb2YgZWxlbWVudHMgcmVuZGVyZWQgYnkgdGhlIHVwcGVyIGNsYXNzZXMuXHJcbiAqIFRoZSBtYWluIHB1cnBvc2Ugb2YgdGhpcyBzdHJ1Y3R1cmUgaXMgdG8gY29tYmluZSBwYXJhbWV0ZXJzIGRlZmluaW5nIGFuIGVsZW1lbnQgaW50byBhIHNpbmdsZVxyXG4gKiBvYmplY3QgdG8gbWluaW1pemUgdGhlIG51bWJlciBvZiBwcm9wZXJ0aWVzIGNhbGxlcnMgb2YgY2xhc3NlcyBzaG91bGQgZGVhbCB3aXRoLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgU2xpY2UgPVxyXG57XHJcblx0Y2xhc3NOYW1lPzogc3RyaW5nO1xyXG5cdHN0eWxlPzogU3R5bGVQcm9wVHlwZTtcclxuXHRwcm9wcz86IG9iamVjdFxyXG5cdGNvbnRlbnQ/OiBhbnk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiAgVHlwZSBmb3IgdGhlIGBzdHlsZWAgZWxlbWVudCBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCB0eXBlIFN0eWxlUHJvcFR5cGUgPSBQYXJ0aWFsPENTU1N0eWxlRGVjbGFyYXRpb24+O1xyXG5cclxuXHJcblxyXG4vKipcclxuICogVHlwZSBvZiBldmVudCBoYW5kbGVyIGZ1bmN0aW9uIGZvciBET00gZXZlbnRzIG9mIHR5cGUgVC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IChlOiBUKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlIGFuZCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50RnVuY0FuZFRoaXNUeXBlPFQgZXh0ZW5kcyBFdmVudD4gPSBbRXZlbnRGdW5jVHlwZTxUPiwgb2JqZWN0XTtcclxuXHJcbi8qKlxyXG4gKiBUdXBsZSBjb21iaW5pbmcgdGhlIGV2ZW50IGhhbmRsZXIgdHlwZSBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50XHJcbiAqIGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRGbGFnVHlwZTxUIGV4dGVuZHMgRXZlbnQ+ID0gW0V2ZW50RnVuY1R5cGU8VD4sIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFR1cGxlIGNvbWJpbmluZyB0aGUgZXZlbnQgaGFuZGxlciB0eXBlLCBvYmplY3QgdGhhdCB3aWxsIGJlIGJvdW5kIGFzIFwidGhpc1wiIHdoZW4gdGhlIGhhbmRsZXJcclxuICogaXMgaW52b2tlZCBhbmQgdGhlIEJvb2xlYW4gZmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGhhbmRsZXIgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZVxyXG4gKiBjYXB0dXJlICh0cnVlKSBvciB0byB0aGUgYnViYmxlIChmYWxzZSkgcGhhc2UuXHJcbiAqIEB0eXBlcGFyYW0gVCBET00gZXZlbnQgdHlwZSwgZS5nLiBNb3VzZUV2ZW50XHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VCBleHRlbmRzIEV2ZW50PiA9IFtFdmVudEZ1bmNUeXBlPFQ+LCBvYmplY3QsIGJvb2xlYW5dO1xyXG5cclxuLyoqXHJcbiAqIFVuaW9uIHR5cGUgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIGFuIEVsZW1lbnQncyBldmVudC5cclxuICogQHR5cGVwYXJhbSBUIERPTSBldmVudCB0eXBlLCBlLmcuIE1vdXNlRXZlbnRcclxuICovXHJcbmV4cG9ydCB0eXBlIEV2ZW50UHJvcFR5cGU8VCBleHRlbmRzIEV2ZW50PiA9IEV2ZW50RnVuY1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzVHlwZTxUPiB8XHJcblx0XHRcdFx0RXZlbnRGdW5jQW5kRmxhZ1R5cGU8VD4gfCBFdmVudEZ1bmNBbmRUaGlzQW5kRmxhZ1R5cGU8VD47XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgSUNvbW1vblByb3BzIGludGVyZmFjZSBkZWZpbmVzIHN0YW5kYXJkIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBvbiBhbGwgSlNYIGVsZW1lbnRzIC1cclxuICogaW50cmluc2ljIChIVE1MIGFuZCBTVkcpIGFzIHdlbGwgYXMgZnVuY3Rpb25hbCBhbmQgY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbW1vblByb3BzXHJcbntcclxuXHQvKiogVW5pcXVlIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgdGhpcyBKU1ggZWxlbWVudCBmcm9tIGl0cyBzaWJsaW5ncy4gVGhlIGtleSBjYW4gYmUgb2YgYW55IHR5cGUuICovXHJcblx0a2V5PzogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBwcm9wZXJ0eSB0eXBlcyB1c2VkIGJ5IEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogVHlwZSB0aGF0IGlzIHVzZWQgdG8gc3BlY2lmeSBjb2xvciB2YWx1ZXMgZm9yIGRpZmZlcmVudCBzdHlsZSBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29sb3JQcm9wVHlwZSA9IHN0cmluZztcclxuZXhwb3J0IHR5cGUgQ3Jvc3NvcmlnaW5Qcm9wVHlwZSA9IFwiYW5vbnltb3VzXCIgfCBcInVzZS1jcmVkZW50aWFsc1wiO1xyXG5leHBvcnQgdHlwZSBGb3JtZW5jdHlwZVByb3BUeXBlID0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB8IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIHwgXCJ0ZXh0L3BsYWluXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm1tZXRob2RQcm9wVHlwZSA9IFwiZ2V0XCIgfCBcInBvc3RcIiB8IFwiZGlhbG9nXCI7XHJcbmV4cG9ydCB0eXBlIEZvcm10YXJnZXRQcm9wVHlwZSA9IHN0cmluZyB8IFwiX3NlbGZcIiB8IFwiX2JsYW5rXCIgfCBcIl9wYXJlbnRcInwgXCJfdG9wXCI7XHJcbmV4cG9ydCB0eXBlIFJlZmVycmVyUG9saWN5UHJvcFR5cGUgPSBcIm5vLXJlZmVycmVyXCIgfCBcIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgfCBcIm9yaWdpblwiIHxcclxuXHRcdFwib3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgfCBcInVuc2FmZS11cmxcIjtcclxuXHJcbi8qKlxyXG4gKiBUaGUgSUVsZW1lbnRQcm9wcyBpbnRlcmZhY2UgZGVmaW5lcyBzdGFuZGFyZCBwcm9wZXJ0aWVzIChhdHRyaWJ1dGVzIGFuZCBldmVudCBsaXN0ZW5lcnMpXHJcbiAqIHRoYXQgY2FuIGJlIHVzZWQgb24gYWxsIEhUTUwgYW5kIFNWRyBlbGVtZW50cy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUVsZW1lbnRQcm9wczxUUmVmLFRDaGlsZHJlbiA9IGFueT4gZXh0ZW5kcyBJQ29tbW9uUHJvcHNcclxue1xyXG5cdC8qKlxyXG5cdCAqIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgZWxlbWVudCBhZnRlciBpdCBpcyBjcmVhdGVkIChtb3VudGVkKS4gVGhlXHJcblx0ICogcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgZWxlbWVudCBpcyB1bm1vdW50ZWQuXHJcblx0ICovXHJcblx0cmVmPzogUmVmUHJvcFR5cGU8VFJlZj47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVwZGF0ZSBzdHJhdGVneSBvYmplY3QgdGhhdCBkZXRlcm1pbmVzIGRpZmZlcmVudCBhc3BlY3RzIG9mIGVsZW1lbnQgYmVoYXZpb3IgZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0dXBkYXRlU3RyYXRlZ3k/OiBVcGRhdGVTdHJhdGVneTtcclxuXHJcblx0LyoqIENoaWxkcmVuIHRoYXQgY2FuIGJlIHN1cHBsaWVkIHRvIHRoZSBlbGVtZW50ICovXHJcblx0Y2hpbGRyZW4/OiBUQ2hpbGRyZW47XHJcblxyXG5cdC8vIHN0YW5kYXJkIEhUTUwgYW5kIFNWRyBlbGVtZW50IHByb3BlcnRpZXNcclxuXHRjbGFzcz86IHN0cmluZ1xyXG5cdGRyYWdnYWJsZT86IGJvb2xlYW47XHJcblx0ZHJvcHpvbmUgPzogXCJjb3B5XCIgfCBcIm1vdmVcIiB8IFwibGlua1wiO1xyXG5cdGlkPzogc3RyaW5nIHwgbnVtYmVyO1xyXG5cdGxhbmc/OiBzdHJpbmc7XHJcblx0cm9sZT86IHN0cmluZztcclxuXHRzdHlsZT86IFN0eWxlUHJvcFR5cGU7XHJcblx0dGFiaW5kZXg/OiBudW1iZXI7XHJcblxyXG5cdC8vIGdsb2JhbCBldmVudHNcclxuXHRhYm9ydD86IEV2ZW50UHJvcFR5cGU8VUlFdmVudD47XHJcblx0YW5pbWF0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uZW5kPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uaXRlcmF0aW9uPzogRXZlbnRQcm9wVHlwZTxBbmltYXRpb25FdmVudD47XHJcblx0YW5pbWF0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPEFuaW1hdGlvbkV2ZW50PjtcclxuXHRhdXhjbGljaz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGJsdXI/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGNhbmNlbD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNhbnBsYXk/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRjYW5wbGF5dGhyb3VnaD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNsaWNrPzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjbG9zZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGNvbnRleHRtZW51PzogRXZlbnRQcm9wVHlwZTxNb3VzZUV2ZW50PjtcclxuXHRjdWVjaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRkYmxjbGljaz86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0ZHVyYXRpb25jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlbXB0aWVkPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0ZW5kZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRlcnJvcj86IEV2ZW50UHJvcFR5cGU8RXJyb3JFdmVudD47XHJcblx0Zm9jdXM/OiBFdmVudFByb3BUeXBlPEZvY3VzRXZlbnQ+O1xyXG5cdGdvdHBvaW50ZXJjYXB0dXJlPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdGlucHV0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0aW52YWxpZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGtleWRvd24/OiBFdmVudFByb3BUeXBlPEtleWJvYXJkRXZlbnQ+O1xyXG5cdGtleXByZXNzPzogRXZlbnRQcm9wVHlwZTxLZXlib2FyZEV2ZW50PjtcclxuXHRrZXl1cD86IEV2ZW50UHJvcFR5cGU8S2V5Ym9hcmRFdmVudD47XHJcblx0bG9hZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlZGRhdGE/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRsb2FkZWRtZXRhZGF0YT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvYWRlbmQ/OiBFdmVudFByb3BUeXBlPFByb2dyZXNzRXZlbnQ+O1xyXG5cdGxvYWRzdGFydD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdGxvc3Rwb2ludGVyY2FwdHVyZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRtb3VzZWRvd24/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlZW50ZXI/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbGVhdmU/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlbW92ZT86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2VvdXQ/OiBFdmVudFByb3BUeXBlPE1vdXNlRXZlbnQ+O1xyXG5cdG1vdXNlb3Zlcj86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0bW91c2V1cD86IEV2ZW50UHJvcFR5cGU8TW91c2VFdmVudD47XHJcblx0cGF1c2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRwbGF5PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cGxheWluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHBvaW50ZXJjYW5jZWw/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmRvd24/OiBFdmVudFByb3BUeXBlPFBvaW50ZXJFdmVudD47XHJcblx0cG9pbnRlcmVudGVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJsZWF2ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVybW92ZT86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwb2ludGVyb3V0PzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJvdmVyPzogRXZlbnRQcm9wVHlwZTxQb2ludGVyRXZlbnQ+O1xyXG5cdHBvaW50ZXJ1cD86IEV2ZW50UHJvcFR5cGU8UG9pbnRlckV2ZW50PjtcclxuXHRwcm9ncmVzcz86IEV2ZW50UHJvcFR5cGU8UHJvZ3Jlc3NFdmVudD47XHJcblx0cmF0ZWNoYW5nZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHJlc2V0PzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0cmVzaXplPzogRXZlbnRQcm9wVHlwZTxVSUV2ZW50PjtcclxuXHRzY3JvbGw/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdC8vc2VjdXJpdHlwb2xpY3l2aW9sYXRpb24/OiBFdmVudFByb3BUeXBlPFNlY3VyaXR5UG9saWN5VmlvbGF0aW9uRXZlbnQ+O1xyXG5cdHNlZWtlZD86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHNlZWtpbmc/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzZWxlY3Q/OiBFdmVudFByb3BUeXBlPFVJRXZlbnQ+O1xyXG5cdHN0YWxsZWQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdWJtaXQ/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRzdXNwZW5kPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0dGltZXVwZGF0ZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvZ2dsZT86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHRvdWNoY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaGVuZD86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hlbnRlcj86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2hsZWF2ZT86IEV2ZW50UHJvcFR5cGU8VG91Y2hFdmVudD47XHJcblx0dG91Y2htb3ZlPzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0b3VjaHN0YXJ0PzogRXZlbnRQcm9wVHlwZTxUb3VjaEV2ZW50PjtcclxuXHR0cmFuc2l0aW9uY2FuY2VsPzogRXZlbnRQcm9wVHlwZTxUcmFuc2l0aW9uRXZlbnQ+O1xyXG5cdHRyYW5zaXRpb25lbmQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dHJhbnNpdGlvbnJ1bj86IEV2ZW50UHJvcFR5cGU8VHJhbnNpdGlvbkV2ZW50PjtcclxuXHR0cmFuc2l0aW9uc3RhcnQ/OiBFdmVudFByb3BUeXBlPFRyYW5zaXRpb25FdmVudD47XHJcblx0dm9sdW1lY2hhbmdlPzogRXZlbnRQcm9wVHlwZTxFdmVudD47XHJcblx0d2FpdGluZz86IEV2ZW50UHJvcFR5cGU8RXZlbnQ+O1xyXG5cdHdoZWVsPzogRXZlbnRQcm9wVHlwZTxXaGVlbEV2ZW50PjtcclxuXHJcblx0Ly8gRWxlbWVudCdzIGV2ZW50c1xyXG5cdGZ1bGxzY3JlZW5jaGFuZ2U/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHRmdWxsc2NyZWVuZXJyb3I/OiBFdmVudFByb3BUeXBlPEV2ZW50PjtcclxuXHJcblx0Ly8gRG9jdW1lbnQncyBhbmQgRWxlbWVudCdzIGV2ZW50c1xyXG5cdGNvcHk/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRjdXQ/OiBFdmVudFByb3BUeXBlPENsaXBib2FyZEV2ZW50PjtcclxuXHRwYXN0ZT86IEV2ZW50UHJvcFR5cGU8Q2xpcGJvYXJkRXZlbnQ+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3IgZGV0ZXJtaW5pbmcgd2hldGhlciBhbiBlbGVtZW50IGlzIGFuIFNWRy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBlbGVtZW50IGlzIG9uZSBvZiB0aGUgZWxlbWVudHMgZnJvbSB0aGUgU1ZHIHNwZWM7IHRoYXQgaXMsIDxzdmc+XHJcbiAqIG9yIGFueSBvdGhlciBmcm9tIFNWRy5cclxuICogQHBhcmFtIGVsbSBFbGVtZW50IHRvIHRlc3RcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N2ZyggZWxtOiBFbGVtZW50KTogYm9vbGVhblxyXG57XHJcblx0cmV0dXJuIFwib3duZXJTVkdFbGVtZW50XCIgaW4gKGVsbSBhcyBhbnkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgaXMgdGhlIDxzdmc+IGVsZW1lbnQuXHJcbiAqIEBwYXJhbSBlbG0gIEVsZW1lbnQgdG8gdGVzdFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ZnU3ZnKCBlbG06IEVsZW1lbnQpOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gZWxtLnRhZ05hbWUgPT09IFwic3ZnXCI7XHJcblx0Ly8gcmV0dXJuIChlbG0gYXMgYW55KS5vd25lclNWR0VsZW1lbnQgPT09IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEpTWCBuYW1lc3BhY2UgZGVmaW5pbmcgaG93IFR5cGVTY3JpcHQgcGVyZm9ybXMgdHlwZSBjaGVja3Mgb24gSlNYIGVsZW1lbnRzLGNvbXBvbmVudHNcclxuLy8gcHJvcGVydGllcyBhbmQgY2hpbGRyZW4uXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgKiBhcyBodG1sIGZyb20gXCIuL0h0bWxUeXBlc1wiO1xyXG5pbXBvcnQgKiBhcyBzdmcgZnJvbSBcIi4vU3ZnVHlwZXNcIjtcclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE5hbWVzcGFjZSBkZWZpbmluZyBpbnRlcmZhY2VzIHVzZWQgYnkgVHlwZVNjcmlwdCB0byB0eXBlLWNoZWNrIEpTWCBleHByZXNzaW9ucy5cclxuICovXHJcbmV4cG9ydCBuYW1lc3BhY2UgSlNYXHJcbntcclxuXHQvLyAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHktaW50ZXJmYWNlXHJcblx0Ly8gZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IGV4dGVuZHMgSVZOb2RlW10ge31cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgRWxlbWVudENsYXNzIGV4dGVuZHMgSUNvbXBvbmVudCB7fVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRBdHRyaWJ1dGVzUHJvcGVydHkgeyBwcm9wczoge30gfVxyXG5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEVsZW1lbnRDaGlsZHJlbkF0dHJpYnV0ZSB7IGNoaWxkcmVuOiBhbnkgfVxyXG5cdFxyXG5cdGV4cG9ydCBpbnRlcmZhY2UgSW50cmluc2ljRWxlbWVudHNcclxuXHR7XHJcblx0XHQvLyBIVE1MIGVsZW1lbnRzXHJcblx0XHRhOiBodG1sLklIdG1sQUVsZW1lbnRQcm9wcztcclxuXHRcdGFiYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRhY3JvbnltOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YWRkcmVzczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFwcGxldDogaHRtbC5JSHRtbEFwcGxldEVsZW1lbnRQcm9wcztcclxuXHRcdGFyZWE6IGh0bWwuSUh0bWxBcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0YXJ0aWNsZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGFzaWRlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YXVkaW86IGh0bWwuSUh0bWxBdWRpb0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRiOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmFzZTogaHRtbC5JSHRtbEJhc2VFbGVtZW50UHJvcHM7XHJcblx0XHRiYXNlZm9udDogaHRtbC5JSHRtbEJhc2Vmb250RWxlbWVudFByb3BzO1xyXG5cdFx0YmRpOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmRvOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmlnOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YmxvY2txdW90ZTogaHRtbC5JSHRtbEJsb2NrcXVvdGVFbGVtZW50UHJvcHM7XHJcblx0XHRib2R5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0YnI6IGh0bWwuSUh0bWxCckVsZW1lbnRQcm9wcztcclxuXHRcdGJ1dHRvbjogaHRtbC5JSHRtbEJ1dHRvbkVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRjYW52YXM6IGh0bWwuSUh0bWxDYW52YXNFbGVtZW50UHJvcHM7XHJcblx0XHRjYXB0aW9uOiBodG1sLklIdG1sQ2FwdGlvbkVsZW1lbnRQcm9wcztcclxuXHRcdGNlbnRlcjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGNpdGU6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRjb2RlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sOiBodG1sLklIdG1sQ29sRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sZ3JvdXA6IGh0bWwuSUh0bWxDb2xncm91cEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRkYXRhOiBodG1sLklIdG1sRGF0YUVsZW1lbnRQcm9wcztcclxuXHRcdGRhdGFsaXN0OiBodG1sLklIdG1sRGF0YUxpc3RFbGVtZW50UHJvcHM7XHJcblx0XHRkZDogaHRtbC5JSHRtbERkRWxlbWVudFByb3BzO1xyXG5cdFx0ZGVsOiBodG1sLklIdG1sRGVsRWxlbWVudFByb3BzO1xyXG5cdFx0ZGV0YWlsczogaHRtbC5JSHRtbERldGFpbHNFbGVtZW50UHJvcHM7XHJcblx0XHRkZm46IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRkaWFsb2c6IGh0bWwuSUh0bWxEaWFsb2dFbGVtZW50UHJvcHM7XHJcblx0XHRkaXI6IGh0bWwuSUh0bWxEaXJFbGVtZW50UHJvcHM7XHJcblx0XHRkaXY6IGh0bWwuSUh0bWxEaXZFbGVtZW50UHJvcHM7XHJcblx0XHRkbDogaHRtbC5JSHRtbERsRWxlbWVudFByb3BzO1xyXG5cdFx0ZHQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZW06IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRlbWJlZDogaHRtbC5JSHRtbEVtYmVkRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGZpZWxkc2V0OiBodG1sLklIdG1sRmllbGRzZXRFbGVtZW50UHJvcHM7XHJcblx0XHRmaWdjYXB0aW9uOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlndXJlOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0Zm9udDogaHRtbC5JSHRtbEZvbnRFbGVtZW50UHJvcHM7XHJcblx0XHRmb290ZXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRmb3JtOiBodG1sLklIdG1sRm9ybUVsZW1lbnRQcm9wcztcclxuXHRcdGZyYW1lOiBodG1sLklIdG1sRnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRmcmFtZXNldDogaHRtbC5JSHRtbEZyYW1lc2V0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGgxOiBodG1sLklIdG1sSDFFbGVtZW50UHJvcHM7XHJcblx0XHRoMjogaHRtbC5JSHRtbEgyRWxlbWVudFByb3BzO1xyXG5cdFx0aDM6IGh0bWwuSUh0bWxIM0VsZW1lbnRQcm9wcztcclxuXHRcdGg0OiBodG1sLklIdG1sSDRFbGVtZW50UHJvcHM7XHJcblx0XHRoNTogaHRtbC5JSHRtbEg1RWxlbWVudFByb3BzO1xyXG5cdFx0aDY6IGh0bWwuSUh0bWxINkVsZW1lbnRQcm9wcztcclxuXHRcdGhlYWQ6IGh0bWwuSUh0bWxIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0aGVhZGVyOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aGdyb3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0aHI6IGh0bWwuSUh0bWxIckVsZW1lbnRQcm9wcztcclxuXHRcdGh0bWw6IGh0bWwuSUh0bWxIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGk6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRpZnJhbWU6IGh0bWwuSUh0bWxJZnJhbWVFbGVtZW50UHJvcHM7XHJcblx0XHRpbWc6IGh0bWwuSUh0bWxJbWdFbGVtZW50UHJvcHM7XHJcblx0XHRpbnB1dDogaHRtbC5JSHRtbElucHV0RWxlbWVudFByb3BzO1xyXG5cdFx0aW5zOiBodG1sLklIdG1sSW5zRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdGtiZDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdGtleWdlbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRsYWJlbDogaHRtbC5JSHRtbExhYmVsRWxlbWVudFByb3BzO1xyXG5cdFx0bGVnZW5kOiBodG1sLklIdG1sTGVnZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0bGk6IGh0bWwuSUh0bWxMaUVsZW1lbnRQcm9wcztcclxuXHRcdGxpbms6IGh0bWwuSUh0bWxMaW5rRWxlbWVudFByb3BzO1xyXG5cdFx0bGlzdGluZzogaHRtbC5JSHRtbExpc3RpbmdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFpbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcDogaHRtbC5JSHRtbE1hcEVsZW1lbnRQcm9wcztcclxuXHRcdG1hcms6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRtZW51OiBodG1sLklIdG1sTWVudUVsZW1lbnRQcm9wcztcclxuXHRcdG1lbnVpdGVtOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0bWV0YTogaHRtbC5JSHRtbE1ldGFFbGVtZW50UHJvcHM7XHJcblx0XHRtZXRlcjogaHRtbC5JSHRtbE1ldGVyRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG5hdjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vYnI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRub2ZyYW1lczogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdG5vc2NyaXB0OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdG9iamVjdDogaHRtbC5JSHRtbE9iamVjdEVsZW1lbnRQcm9wcztcclxuXHRcdG9sOiBodG1sLklIdG1sT2xFbGVtZW50UHJvcHM7XHJcblx0XHRvcHRncm91cDogaHRtbC5JSHRtbE9wdGdyb3VwRWxlbWVudFByb3BzO1xyXG5cdFx0b3B0aW9uOiBodG1sLklIdG1sT3B0aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0b3V0cHV0OiBodG1sLklIdG1sT3V0cHV0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHA6IGh0bWwuSUh0bWxQRWxlbWVudFByb3BzO1xyXG5cdFx0cGFyYW06IGh0bWwuSUh0bWxQYXJhbUVsZW1lbnRQcm9wcztcclxuXHRcdHBpY3R1cmU6IGh0bWwuSUh0bWxQaWN0dXJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJlOiBodG1sLklIdG1sUHJlRWxlbWVudFByb3BzO1xyXG5cdFx0cHJvZ3Jlc3M6IGh0bWwuSUh0bWxQcm9ncmVzc0VsZW1lbnRQcm9wcztcclxuXHJcblx0XHRxOiBodG1sLklIdG1sUUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRyYjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHJwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0cnQ6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydGM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRydWJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHM6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzYW1wOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c2NyaXB0OiBodG1sLklIdG1sU2NyaXB0RWxlbWVudFByb3BzO1xyXG5cdFx0c2VjdGlvbjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHNlbGVjdDogaHRtbC5JSHRtbFNlbGVjdEVsZW1lbnRQcm9wcztcclxuXHRcdHNsb3Q6IGh0bWwuSUh0bWxTbG90RWxlbWVudFByb3BzO1xyXG5cdFx0c21hbGw6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzb3VyY2U6IGh0bWwuSUh0bWxTb3VyY2VFbGVtZW50UHJvcHM7XHJcblx0XHRzcGFuOiBodG1sLklIdG1sU3BhbkVsZW1lbnRQcm9wcztcclxuXHRcdHN0cmlrZTogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0cm9uZzogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHRcdHN0eWxlOiBodG1sLklIdG1sU3R5bGVFbGVtZW50UHJvcHM7XHJcblx0XHRzdWI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHRzdW1tYXJ5OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0c3VwOiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRhYmxlOiBodG1sLklIdG1sVGFibGVFbGVtZW50UHJvcHM7XHJcblx0XHR0Ym9keTogaHRtbC5JSHRtbFRib2R5RWxlbWVudFByb3BzO1xyXG5cdFx0dGQ6IGh0bWwuSUh0bWxUZEVsZW1lbnRQcm9wcztcclxuXHRcdHRlbXBsYXRlOiBodG1sLklIdG1sVGVtcGxhdGVFbGVtZW50UHJvcHM7XHJcblx0XHR0ZXh0YXJlYTogaHRtbC5JSHRtbFRleHRhcmVhRWxlbWVudFByb3BzO1xyXG5cdFx0dGZvb3Q6IGh0bWwuSUh0bWxUZm9vdEVsZW1lbnRQcm9wcztcclxuXHRcdHRoOiBodG1sLklIdG1sVGhFbGVtZW50UHJvcHM7XHJcblx0XHR0aGVhZDogaHRtbC5JSHRtbFRIZWFkRWxlbWVudFByb3BzO1xyXG5cdFx0dGltZTogaHRtbC5JSHRtbFRpbWVFbGVtZW50UHJvcHM7XHJcblx0XHR0aXRsZTogaHRtbC5JSHRtbFRpdGxlRWxlbWVudFByb3BzO1xyXG5cdFx0dHI6IGh0bWwuSUh0bWxUckVsZW1lbnRQcm9wcztcclxuXHRcdHRyYWNrOiBodG1sLklIdG1sVHJhY2tFbGVtZW50UHJvcHM7XHJcblx0XHR0dDogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR1OiBodG1sLklIdG1sRWxlbWVudFByb3BzO1xyXG5cdFx0dWw6IGh0bWwuSUh0bWxVbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2YXI6IGh0bWwuSUh0bWxFbGVtZW50UHJvcHM7XHJcblx0XHR2aWRlbzogaHRtbC5JSHRtbFZpZGVvRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHdicjogaHRtbC5JSHRtbEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR4bXA6IGh0bWwuSUh0bWxYbXBFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly8gU1ZHIGVsZW1lbnRzXHJcblx0XHRzdmc6IHN2Zy5JU3ZnU3ZnRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z0E6IHN2Zy5JU3ZnQUVsZW1lbnRQcm9wcztcclxuXHRcdGFuaW1hdGU6IHN2Zy5JU3ZnQ29uZGl0aW9uYWxQcm9jZXNzaW5nUHJvcHMgfCBzdmcuSVN2Z0FuaW1hdGlvblByb3BzO1xyXG5cdFx0YW5pbWF0ZU1vdGlvbjogc3ZnLklTdmdBbmltYXRlTW90aW9uRWxlbWVudFByb3BzO1xyXG5cdFx0YW5pbWF0ZVRhcm5zZm9ybTogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnQW5pbWF0aW9uUHJvcHM7XHJcblxyXG5cdFx0Y2lyY2xlOiBzdmcuSVN2Z0NpcmNsZUVsZW1lbnRQcm9wcztcclxuXHRcdGNsaXBQYXRoOiBzdmcuSVN2Z0NsaXBQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0Y29sb3JQcm9maWxlOiBzdmcuSVN2Z0NvbG9yUHJvZmlsZVBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZGVmczogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRkZXNjOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdGRpc2NhcmQ6IHN2Zy5JU3ZnRGlzY2FyZEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRlbGxpcHNlOiBzdmcuSVN2Z0VsbGlwc2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0ZmVCbGVuZDogc3ZnLklTdmdGZUJsZW5kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb2xvck1hdHJpeDogc3ZnLklTdmdGZUNvbG9yTWF0cml4RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb25lbnRUcmFuc2Zlcjogc3ZnLklTdmdGZUNvbXBvbmVudFRyYW5zZmVyRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVDb21wb3NpdGU6IHN2Zy5JU3ZnRmVDb21wb3NpdGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZUNvbnZvbHZlTWF0cml4OiBzdmcuSVN2Z0ZlQ29udm9sdmVNYXRyaXhFbGVtZW50UHJvcHM7XHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogc3ZnLklTdmdGZURpZmZ1c2VMaWdodGluZ0VsZW1lbnRQcm9wcztcclxuXHRcdGZlRGlzcGxhY2VtZW50TWFwOiBzdmcuSVN2Z0ZlRGlzcGxhY2VtZW50TWFwRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVEaXN0YW50TGlnaHQ6IHN2Zy5JU3ZnRmVEaXN0YW50TGlnaHRFbGVtZW50UHJvcHM7XHJcblx0XHRmZURyb3BTaGFkb3c6IHN2Zy5JU3ZnRmVEcm9wU2hhZG93RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGbG9vZDogc3ZnLklTdmdGZUZsb29kRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVGdW5jQTogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jQjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jRzogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVGdW5jUjogc3ZnLklTdmdUcmFuc2ZlckZ1bmN0aW9uc1Byb3BzO1xyXG5cdFx0ZmVHYXVzc2lhbkJsdXI6IHN2Zy5JU3ZnRmVHYXVzc2lhbkJsdXJFbGVtZW50UHJvcHM7XHJcblx0XHRmZUltYWdlOiBzdmcuSVN2Z0ZlSW1hZ2VFbGVtZW50UHJvcHM7XHJcblx0XHRmZU1lcmdlOiBzdmcuSVN2Z1ByZXNlbnRhdGlvblByb3BzIHwgc3ZnLklTdmdGaWx0ZXJQcmltaXRpdmVQcm9wcztcclxuXHRcdGZlTWVyZ2VOb2RlOiBzdmcuSVN2Z0ZlTWVyZ2VOb2RlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmVNb3JwaG9sb2d5OiBzdmcuSVN2Z0ZlTW9ycGhvbG9neUVsZW1lbnRQcm9wcztcclxuXHRcdGZlT2Zmc2V0OiBzdmcuSVN2Z0ZlT2Zmc2V0RWxlbWVudFByb3BzO1xyXG5cdFx0ZmVQb2ludExpZ2h0OiBzdmcuSVN2Z0ZlUG9pbnRMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogc3ZnLklTdmdGZVNwZWN1bGFyTGlnaHRpbmdFbGVtZW50UHJvcHM7XHJcblx0XHRmZVNwb3RMaWdodDogc3ZnLklTdmdGZVNwb3RMaWdodEVsZW1lbnRQcm9wcztcclxuXHRcdGZlVGlsZTogc3ZnLklTdmdGZVRpbGVFbGVtZW50UHJvcHM7XHJcblx0XHRmZVR1cmJ1bGVuY2U6IHN2Zy5JU3ZnRmVUdXJidWxlbmNlRWxlbWVudFByb3BzO1xyXG5cdFx0ZmlsdGVyOiBzdmcuSVN2Z0ZpbHRlckVsZW1lbnRQcm9wcztcclxuXHRcdGZvcmVpZ25PYmplY3Q6IHN2Zy5JU3ZnRm9yZWlnbk9iamVjdEVsZW1lbnRQcm9wcztcclxuXHJcblx0XHRnOiBzdmcuSVN2Z0NvbmRpdGlvbmFsUHJvY2Vzc2luZ1Byb3BzIHwgc3ZnLklTdmdQcmVzZW50YXRpb25Qcm9wcztcclxuXHJcblx0XHRoYXRjaDogc3ZnLklTdmdIYXRjaEVsZW1lbnRQcm9wcztcclxuXHRcdGhhdGNocGF0aDogc3ZnLklTdmdIYXRjaHBhdGhFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0aW1hZ2U6IHN2Zy5JU3ZnSW1hZ2VFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bGluZTogc3ZnLklTdmdMaW5lRWxlbWVudFByb3BzO1xyXG5cdFx0bGluZWFyR3JhZGllbnQ6IHN2Zy5JU3ZnTGluZWFyR3JhZGllbnRFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0bWFya2VyOiBzdmcuSVN2Z01hcmtlckVsZW1lbnRQcm9wcztcclxuXHRcdG1hc2s6IHN2Zy5JU3ZnTWFza0VsZW1lbnRQcm9wcztcclxuXHRcdG1ldGFkYXRhOiBzdmcuSVN2Z0VsZW1lbnRQcm9wcztcclxuXHRcdG1wYXRoOiBzdmcuSVN2Z01QYXRoRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHBhdGg6IHN2Zy5JU3ZnUGF0aEVsZW1lbnRQcm9wcztcclxuXHRcdHBhdHRlcm46IHN2Zy5JU3ZnUGF0dGVybkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlnb246IHN2Zy5JU3ZnUG9seWdvbkVsZW1lbnRQcm9wcztcclxuXHRcdHBvbHlsaW5lOiBzdmcuSVN2Z1BvbHlsaW5lRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBzdmcuSVN2Z1JhZGlhbEdyYWRpZW50RWxlbWVudFByb3BzO1xyXG5cdFx0cmVjdDogc3ZnLklTdmdSZWN0RWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHN2Z1NjcmlwdDogc3ZnLklTdmdTY3JpcHRFbGVtZW50UHJvcHM7XHJcblx0XHRzZXQ6IHN2Zy5JU3ZnU2V0RWxlbWVudFByb3BzO1xyXG5cdFx0c29saWRjb2xvcjogc3ZnLklTdmdFbGVtZW50UHJvcHM7XHJcblx0XHRzdG9wOiBzdmcuSVN2Z1N0b3BFbGVtZW50UHJvcHM7XHJcblx0XHRzdmdTdHlsZTogc3ZnLklTdmdTdHlsZUVsZW1lbnRQcm9wcztcclxuXHRcdHN3aXRjaDogc3ZnLklTdmdDb25kaXRpb25hbFByb2Nlc3NpbmdQcm9wcyB8IHN2Zy5JU3ZnUHJlc2VudGF0aW9uUHJvcHM7XHJcblx0XHRzeW1ib2w6IHN2Zy5JU3ZnU3ltYm9sRWxlbWVudFByb3BzO1xyXG5cclxuXHRcdHRleHQ6IHN2Zy5JU3ZnVGV4dEVsZW1lbnRQcm9wcztcclxuXHRcdHRleHRQYXRoOiBzdmcuSVN2Z1RleHRQYXRoRWxlbWVudFByb3BzO1xyXG5cdFx0c3ZnVGl0bGU6IHN2Zy5JU3ZnRWxlbWVudFByb3BzO1xyXG5cdFx0dGV4dFNwYW46IHN2Zy5JU3ZnVGV4dFNwYW5FbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0dXNlOiBzdmcuSVN2Z1VzZUVsZW1lbnRQcm9wcztcclxuXHJcblx0XHR2aWV3OiBzdmcuSVN2Z1ZpZXdFbGVtZW50UHJvcHM7XHJcblxyXG5cdFx0Ly9bZWxlbU5hbWU6IHN0cmluZ106IGFueVxyXG5cdH1cclxuXHJcblx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5LWludGVyZmFjZVxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gaW50cmluc2ljIGVsZW1lbnRzIGFuZCB0byBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXHJcblx0ZXhwb3J0IGludGVyZmFjZSBJbnRyaW5zaWNBdHRyaWJ1dGVzIGV4dGVuZHMgSUNvbW1vblByb3BzIHt9XHJcblxyXG5cdC8vIFByb3BlcnRpZXMgaW4gdGhpcyBpbnRlcmZhY2UgYXBwbHkgdG8gY2xhc3MtYmFzZWQgY29tcG9uZW50cy5cclxuXHRleHBvcnQgaW50ZXJmYWNlIEludHJpbnNpY0NsYXNzQXR0cmlidXRlczxUPiBleHRlbmRzIElDb21tb25Qcm9wc1xyXG5cdHtcclxuXHRcdC8vIFJlZmVyZW5jZSB0aGF0IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGFmdGVyIGl0IGlzIG1vdW50ZWQuIFRoZVxyXG5cdFx0Ly8gcmVmZXJlbmNlIHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZCBhZnRlciB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdHJlZj86IFJlZlByb3BUeXBlPFQ+O1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gRGVmaW5pdGlvbiBvZiBtaW0uanN4IGZ1bmN0aW9uIC0gSlNYIEZhY3RvcnlcclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7Y3JlYXRlTm9kZXNGcm9tSlNYfSBmcm9tIFwiLi4vY29yZS9Db250ZW50RnVuY3NcIlxyXG5cclxuLyoqXHJcbiAqIEpTWCBGYWN0b3J5IGZ1bmN0aW9uLiBJbiBvcmRlciBmb3IgdGhpcyBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGJ5IHRoZSBUeXBlU2NyaXB0IGNvbXBpbGVyLCB0aGVcclxuICogdHNjb25maWcuanNvbiBtdXN0IGhhdmUgdGhlIGZvbGxvd2luZyBvcHRpb246XHJcbiAqXHJcbiAqIGBgYGpzb25cclxuICogXCJjb21waWxlck9wdGlvbnNcIjpcclxuICoge1xyXG4gKiAgICAgXCJqc3hcIjogXCJyZWFjdFwiLFxyXG4gKiAgICAgXCJqc3hGYWN0b3J5XCI6IFwibWltLmpzeFwiXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSAudHN4IGZpbGVzIG11c3QgaW1wb3J0IHRoZSBtaW1ibCBtb2R1bGUgYXMgbWltOiBpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIm1pbWJsXCJcclxuICogQHBhcmFtIHRhZyBcclxuICogQHBhcmFtIHByb3BzIFxyXG4gKiBAcGFyYW0gY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24ganN4KCB0YWc6IGFueSwgcHJvcHM6IGFueSwgLi4uY2hpbGRyZW46IGFueVtdKTogYW55XHJcbntcclxuXHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWcsIHByb3BzLCBjaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3ZpZGUgaW1wbGVtZW50YXRpb24gZm9yIHRoZSByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZSBleHBvcnRlZCBmdW5jdGlvbi5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmltcG9ydCB7RWxtQXR0ciwgUHJvcFR5cGV9IGZyb20gXCIuLi91dGlscy9FbG1BdHRyXCI7XHJcblxyXG4vKipcclxuICogUmVnaXN0ZXJzIGN1c3RvbSBhdHRyaWJ1dGUgaGFuZGxlciBjbGFzcyBmb3IgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUuXHJcbiAqIEBwYXJhbSBwcm9wTmFtZSBuYW1lIG9mIHRoZSBjdXN0b20gYXR0cmlidXRlXHJcbiAqIEBwYXJhbSBmYWN0b3J5IGN1c3RvbSBhdHRyaWJ1dGUgY2xhc3NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckN1c3RvbUF0dHJpYnV0ZTxUPiggYXR0ck5hbWU6IHN0cmluZywgaGFuZGxlckNsYXNzOiBJQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPFQ+KTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBhdHRyTmFtZSwgeyB0eXBlOiBQcm9wVHlwZS5DdXN0b21BdHRyLCBoYW5kbGVyQ2xhc3MgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgY3VzdG9tIGV2ZW50IGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICogQHBhcmFtIHByb3BOYW1lIG5hbWUgb2YgdGhlIGN1c3RvbSBldmVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyQ3VzdG9tRXZlbnQoIGV2ZW50TmFtZTogc3RyaW5nKTogdm9pZFxyXG57XHJcblx0RWxtQXR0ci5yZWdpc3RlclByb3BlcnR5KCBldmVudE5hbWUsIHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFByb3ZpZGUgaW1wbGVtZW50YXRpb24gb2YgdXRpbGl0eSBmdW5jdGlvbnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuICogQHBhcmFtIHNsaWNlcyBBcnJheSBvZiBTbGljZSBvYmplY3RzIHRvIG1lcmdlLlxyXG4gKiBAcmV0dXJucyBSZXN1bHRhbnQgU2xpY2Ugb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IFNsaWNlW10pOiBTbGljZVxyXG57XHJcblx0cmV0dXJuIHV0aWxzLm1lcmdlU2xpY2VzKCAuLi5zbGljZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBTbGljZSBvYmplY3RzIG1lcmdpbmcgY2xhc3Nlcywgc3R5bGVzLCBwcm9wZXJ0aWVzIGFuZCBjb250ZW50XHJcbiAqIGludG8gdGhlIGdpdmVuIHJlc3VsdGFudCBzbGljZS5cclxuICogQHBhcmFtIHJlc1NsaWNlIFJlc3VsdGFudCBTbGljZSBvYmplY3QuXHJcbiAqIEBwYXJhbSBzbGljZXMgQXJyYXkgb2YgU2xpY2Ugb2JqZWN0cyB0byBtZXJnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVNsaWNlc1RvKCByZXNTbGljZTogU2xpY2UsIC4uLnNsaWNlczogU2xpY2VbXSk6IHZvaWRcclxue1xyXG5cdHV0aWxzLm1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlLCAuLi5zbGljZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBwcm9wZXJ0aWVzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4gKiByZXR1cm5zIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCAtIGlmIGFsbCBjbGFzc05hbWVzIHdlcmUgdW5kZWZpbmVkLlxyXG4gKiBAcGFyYW0gY2xhc3NOYW1lcyBBcnJheSBvZiBzdHJpbmdzIG9yIHN0cmluZyBhcnJheXMgd2l0aCBjbGFzcyBuYW1lc1xyXG4gKiBAcmV0dXJucyBSZXN1bHRhbnQgY2xhc3Mgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ2xhc3NlcyggLi4uY2xhc3NOYW1lczogKHN0cmluZyB8IHN0cmluZ1tdKVtdKTogc3RyaW5nXHJcbntcclxuXHRyZXR1cm4gdXRpbHMubWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbWJpbmVzIGFyYml0cmFyeSBudW1iZXIgb2Ygc3R5bGUgb2JqZWN0cyBtZXJnaW5nIGxhdGVyIGludG8gdGhlIGVhcmxpZXIgb25lcy4gVGhpcyBtZXRob2RcclxuICogYWx3YXlzIHJldHVybnMgYW4gb2JqZWN0IC0gZXZlbiBpZiBlbXB0eVxyXG4gKiBAcGFyYW0gc3R5bGVzIEFycmF5IG9mIHN0eWxlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXMoIC4uLnN0eWxlczogU3R5bGVQcm9wVHlwZVtdKTogU3R5bGVQcm9wVHlwZVxyXG57XHJcblx0cmV0dXJuIHV0aWxzLm1lcmdlU3R5bGVzKCAuLi5zdHlsZXMpO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZmlyc3Qgb25lLlxyXG4gKiBAcGFyYW0gcmVzU3R5bGUgUmVzdWx0YW50IHN0eWxlIG9iamVjdFxyXG4gKiBAcGFyYW0gc3R5bGVzIEFycmF5IG9mIHN0eWxlIG9iamVjdHMgdG8gbWVyZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTdHlsZXNUbyggcmVzU3R5bGU6IFN0eWxlUHJvcFR5cGUsIC4uLnN0eWxlczogKFN0eWxlUHJvcFR5cGUgfCBzdHJpbmcpW10gKTogdm9pZFxyXG57XHJcblx0dXRpbHMubWVyZ2VTdHlsZXNUbyggcmVzU3R5bGUsIC4uLnN0eWxlcyk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIENhbGxiYWNrIHdyYXBwaW5nXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5pbXBvcnQge3dyYXBDYWxsYmFja1dpdGhWTn0gZnJvbSBcIi4uL2NvcmUvU2NoZWR1bGVyXCJcclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC4gTm90ZSB0aGF0IHRoZSBWTiBjYW4gYmUgbnVsbC91bmRlZmluZWQ7XHJcbiAqIGhvd2V2ZXIsIGluIHRoaXMgY2FzZSBpZiB0aGUgZXhjZXB0aW9uIGlzIGNhdWdodCBpdCB3aWxsIG5vdCBiZSBoYW5kbGVkIGJ5IHRoZSBNaW1ibCBlcnJvclxyXG4gKiBoYW5kbGluZyBtZWNoYW5pc20uXHJcbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBiZSB3cmFwcGVkLlxyXG4gKiBAcGFyYW0gdGhhdCBPYmplY3QgdGhhdCB3aWxsIGJlIHRoZSB2YWx1ZSBvZiBcInRoaXNcIiB3aGVuIHRoZSBjYWxsYmFjayBpcyBleGVjdXRlZC5cclxuICogQHBhcmFtIHZuIFZpcnR1YWwgbm9kZSBpbiB3aG9zZSBjb250ZXh0IHRoZSBjYWxsYmFjayB3aWxsIGJlIGV4ZWN1dGVkLlxyXG4gKiBAcmV0dXJucyBUaGUgd3JhcHBlciBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCwgdm4/OiBJVk5vZGUpOiBUXHJcbntcclxuXHRyZXR1cm4gd3JhcENhbGxiYWNrV2l0aFZOKCBjYWxsYmFjaywgdGhhdCwgdm4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBCYXNlIGNsYXNzIGZvciBjb21wb25lbnRzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhpcyBjbGFzcyBtdXN0IGltcGxlbWVudCB0aGUgcmVuZGVyXHJcbiAqIG1ldGhvZC5cclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQ8VFByb3BzID0ge30sIFRDaGlsZHJlbiA9IGFueT4gaW1wbGVtZW50cyBJQ29tcG9uZW50PFRQcm9wcyxUQ2hpbGRyZW4+XHJcbntcclxuXHQvKiogQ29tcG9uZW50IHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvciAqL1xyXG5cdHB1YmxpYyBwcm9wczogQ29tcFByb3BzPFRQcm9wcyxUQ2hpbGRyZW4+O1xyXG5cclxuXHQvKiogUmVtZW1iZXJlZCB2biBvYmplY3QgdGhyb3VnaCB3aGljaCBjb21wb25lbnQgY2FuIHJlcXVlc3Qgc2VydmljZXMuICovXHJcblx0cHVibGljIHZuOiBJVk5vZGU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCBwcm9wcz86IENvbXBQcm9wczxUUHJvcHMsVENoaWxkcmVuPilcclxuXHR7XHJcblx0XHRpZiAocHJvcHMpXHJcblx0XHRcdHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHR9XHJcblxyXG5cdC8qKiBSZXR1cm5zIHRoZSBjb21wb25lbnQncyBjb250ZW50IHRoYXQgd2lsbCBiZSB1bHRpbWF0ZWx5IHBsYWNlZCBpbnRvIHRoZSBET00gdHJlZS4gKi9cclxuXHRwdWJsaWMgYWJzdHJhY3QgcmVuZGVyKCk6IGFueTtcclxuXHJcblx0LyoqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBieSB0aGUgY29tcG9uZW50IHRvIHJlcXVlc3QgdG8gYmUgdXBkYXRlZC4gKi9cclxuXHRwcm90ZWN0ZWQgdXBkYXRlTWUoKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnJlcXVlc3RVcGRhdGUoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGJlZm9yZSBhbnkgY29tcG9uZW50cyBzY2hlZHVsZWQgdG8gYmUgdXBkYXRlZCBpblxyXG5cdCAqIHRoZSBNaW1ibCB0aWNrIGFyZSB1cGRhdGVkLlxyXG5cdCAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIHRvIGJlIGNhbGxlZFxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdXNlZCBhcyBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIElmIHRoaXNcclxuXHQgKiAgIHBhcmFtZXRlciBpcyB1bmRlZmluZWQsIHRoZSBjb21wb25lbnQgaW5zdGFuY2Ugd2lsbCBiZSB1c2VkICh3aGljaCBhbGxvd3Mgc2NoZWR1bGluZ1xyXG5cdCAqICAgcmVndWxhciB1bmJvdW5kIGNvbXBvbmVudHMnIG1ldGhvZHMpLiBUaGlzIHBhcmFtZXRlciB3aWxsIGJlIGlnbm9yZWQgaWYgdGhlIGZ1bmN0aW9uXHJcblx0ICogICBpcyBhbHJlYWR5IGJvdW5kIG9yIGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHByb3RlY3RlZCBjYWxsTWVCZWZvcmVVcGRhdGUoIGZ1bmM6IFNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnZuKVxyXG5cdFx0XHR0aGlzLnZuLnNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYywgdGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0aGUgZ2l2ZW4gZnVuY3Rpb24gdG8gYmUgY2FsbGVkIGFmdGVyIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCB0byBiZSB1cGRhdGVkIGluXHJcblx0ICogdGhlIE1pbWJsIHRpY2sgaGF2ZSBhbHJlYWR5IGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWRcclxuXHQgKiBAcGFyYW0gdGhhdCBPYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgYXMgXCJ0aGlzXCIgdmFsdWUgd2hlbiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBJZiB0aGlzXHJcblx0ICogICBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkLCB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdpbGwgYmUgdXNlZCAod2hpY2ggYWxsb3dzIHNjaGVkdWxpbmdcclxuXHQgKiAgIHJlZ3VsYXIgdW5ib3VuZCBjb21wb25lbnRzJyBtZXRob2RzKS4gVGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSBpZ25vcmVkIGlmIHRoZSB0aGUgZnVuY3Rpb25cclxuXHQgKiAgIGlzIGFscmVhZHkgYm91bmQgb3IgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIGNhbGxNZUFmdGVyVXBkYXRlKCBmdW5jOiBTY2hlZHVsZWRGdW5jVHlwZSwgdGhhdD86IG9iamVjdCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy52bilcclxuXHRcdFx0dGhpcy52bi5zY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYywgdGhhdCA/IHRoYXQgOiB0aGlzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmJsZXMgZnJvbSB0aGlzIGNvbXBvbmVudCB1cCB0aGUgaGllcmFyY2h5IHVudGlsIGEgY29tcG9uZW50IHRoYXQga25vd3MgdG9cclxuXHQgKiBoYW5kbGUgZXJyb3JzIGlzIGZvdW5kLlxyXG5cdCAqIFxyXG5cdCAqIFVzZSB0aGlzIG1ldGhvZCBiZWZvcmUgcGFzc2luZyBjYWxsYmFja3MgdG8gZG9jdW1lbnQgYW5kIHdpbmRvdyBldmVudCBoYW5kbGVycyBhcyB3ZWxsIGFzXHJcblx0ICogbm9uLURPTSBvYmplY3RzIHRoYXQgdXNlIGNhbGxiYWNrcywgZS5nLiBwcm9taXNlcy4gRm9yIGV4YW1wbGU6XHJcblx0ICogXHJcblx0ICogYGBgdHlwZXNjcmlwdFxyXG5cdCAqXHRjbGFzcyBSZXNpemVNb25pdG9yXHJcblx0ICpcdHtcclxuXHQgKlx0XHRwcml2YXRlIG9uV2luZG93UmVzaXplKGU6IEV2ZW50KTogdm9pZCB7fTtcclxuXHQgKlxyXG5cdCAqIFx0XHR3cmFwcGVyOiAoZTogRXZlbnQpOiB2b2lkO1xyXG5cdCAqIFxyXG5cdCAqIFx0XHRwdWJsaWMgc3RhcnRSZXNpemVNb25pdG9yaW5nKCB2bjogSVZOb2RlKVxyXG5cdCAqXHRcdHtcclxuXHQgKlx0XHRcdHRoaXMud3JhcHBlciA9IHZuLndyYXBDYWxsYmFjayggdGhpcy5vbldpbmRvd1Jlc2l6ZSwgdGhpcyk7XHJcblx0ICpcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJyZXNpemVcIiwgdGhpcy53cmFwcGVyKTtcclxuXHQgKlx0XHR9XHJcblx0ICogXHJcblx0ICogXHRcdHB1YmxpYyBzdG9wUmVzaXplTW9uaXRvcmluZygpXHJcblx0ICpcdFx0e1xyXG5cdCAqXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwicmVzaXplXCIsIHRoaXMud3JhcHBlcik7XHJcblx0ICpcdFx0XHR0aGlzLndyYXBwZXIgPSB1bmRlZmluZWQ7XHJcblx0ICpcdFx0fVxyXG5cdCAqXHR9XHJcblx0ICogYGBgXHJcblx0ICogXHJcblx0ICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWRcclxuXHQgKiBAcmV0dXJucyBGdW5jdGlvbiB0aGF0IGhhcyB0aGUgc2FtZSBzaWduYXR1cmUgYXMgdGhlIGdpdmVuIGNhbGxiYWNrIGFuZCB0aGF0IHNob3VsZCBiZSB1c2VkXHJcblx0ICogICAgIGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNhbGxiYWNrXHJcblx0ICovXHJcblx0cHJvdGVjdGVkIHdyYXBDYWxsYmFjazxUIGV4dGVuZHMgRnVuY3Rpb24+KCBjYWxsYmFjazogVCwgdGhhdD86IG9iamVjdCk6IFRcclxuXHR7XHJcblx0XHRyZXR1cm4gd3JhcENhbGxiYWNrV2l0aFZOKCBjYWxsYmFjaywgdGhpcywgdGhpcy52bik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBGdW5jUHJveHkgc3VwcG9ydFxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0IHtGdW5jUHJveHlWTn0gZnJvbSBcIi4uL2NvcmUvRnVuY1Byb3h5Vk5cIlxyXG5cclxuLyoqXHJcbiAqIFByb3BlcnRpZXMgdG8gYmUgdXNlZCB3aXRoIHRoZSBGdW5jUHJveHkgY29tcG9uZW50LiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGdW5jUHJveHlQcm9wc1xyXG57XHJcblx0LyoqIEZ1bmN0aW9uIHRoYXQgcmVuZGVycyBjb250ZW50LiAqL1xyXG5cdGZ1bmM6IEZ1bmN0aW9uO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIGtleSB0aGF0IGRpc3Rpbmd1aXNoZXMgYmV0d2VlbiBtdWx0aXBsZSB1c2VzIG9mIHRoZSBzYW1lIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gaXNcclxuXHQgKiB1c2VkIG9ubHkgb25jZSB3aXRoaW4gYSBjb21wb25lbnQsIHRoZSBrZXkgaXMgbm90IG5lY2Vzc2FyeTsgaG93ZXZlciwgaWYgdGhlIGZ1bmN0aW9uIGlzXHJcblx0ICogdXNlZCBtdWx0aXBsZSB0aW1lcywga2V5IGlzIG1hbmRhdG9yeSAtIG90aGVyd2lzZSwgdGhlIGJlaGF2aW9yIGlzIHVuZGV0ZXJtaW5lZC5cclxuXHQgKi9cclxuXHRrZXk/OiBhbnk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLiBXaGVuZXZlciB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBpcyByZW5kZXJlZCwgdGhpc1xyXG5cdCAqIHBhcmFtZXRlciBpcyB1c2VkIHdoZW4gY2FsbGluZyB0aGUgd3JhcHBlZCBmdW5jdGlvbi5cclxuXHQgKi9cclxuXHRhcmdzPzogYW55W107XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBhcmd1bWVudHMgc3BlY2lmaWVkIGJ5IHRoZSBgYXJnc2AgcHJvcGVydHkgc2hvdWxkIGJlIHBhc3NlZCB0b1xyXG5cdCAqIHRoZSBmdW5jdGlvbiBvdmVycmlkaW5nIGFyZ3VtZW50cyB0aGF0IHdlcmUgc3BlY2lmaWVkIGJ5IHRoZSBtb3N0IHJlY2VudCBjYWxsIHRvIHRoZVxyXG5cdCAqIEZ1bmNQcm94eS51cGRhdGUgbWV0aG9kLiBCeSBkZWZhdWx0IHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGZhbHNlIGFuZCBgYXJnc2Agd2lsbCBiZVxyXG5cdCAqIHVzZWQgb25seSB0aGUgZmlyc3QgdGltZSB0aGUgZnVuY3Rpb24gaXMgd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudC4gSWYgdGhlXHJcblx0ICogRnVuY1Byb3h5LnVwZGF0ZSBtZXRob2QgaXMgY2FsbGVkLCB0aGUgYXJndW1lbnQgc3BlY2lmaWVkIGluIHRoaXMgY2FsbCB3aWxsIHJlcGxhY2UgdGhlXHJcblx0ICogb3JpZ2luYWwgYXJndW1lbnRzLiBUaGUgbmV4dCB0aW1lIHRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIHJlbmRlcmVkLCB0aGUgYGFyZ3NgIHByb3BlcnR5XHJcblx0ICogd2lsbCBiZSBpZ25vcmVkLlxyXG5cdCAqIFxyXG5cdCAqIE5vdGUgdGhlIGZvbGxvd2luZyBzZXF1ZW5jZSBvZiBhY3Rpb25zIHRoYXQgb2NjdXJzIHdoZW4gYHJlcGxhY2VBcmdzYCBpcyBmYWxzZSBvciBvbWl0dGVkOlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIC8+LiBcIkFcIiB3aWxsIGJlIHVzZWQuXHJcblx0ICogMS4gUGFyZW50IGNvbXBvbmVudCBjYWxscyBGdW5jUHJveHkudXBkYXRlKCB0aGlzLmZvbywgdW5kZWZpbmVkLCBcIkJcIikuIFwiQlwiIHdpbGwgYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiAvPi4gXCJCXCIgd2lsbCBzdGlsbCBiZSB1c2VkLlxyXG5cdCAqIFxyXG5cdCAqIElmIHRoZSBgcmVwbGFjZUFyZ3NgIHByb3BlcnR5IGlzIHNldCB0byB0cnVlLCB0aGVuIGV2ZXJ5IHRpbWUgdGhlIEZ1bmNQcm94eSBjb21wb25lbmV0IGlzXHJcblx0ICogcmVuZGVyZWQsIHRoZSB2YWx1ZSBvZiB0aGUgYGFyZ3NgIHByb3BlcnR5IHJlcGxhY2VzIHdoYXRldmVyIGFyZ3VtZW50cyB0aGVyZSB3ZXJlIGJlZm9yZS5cclxuXHQgKiBcclxuXHQgKiBOb3cgbm90ZSB0aGUgc2VxdWVuY2Ugb2YgYWN0aW9ucyB3aGVuIGByZXBsYWNlQXJnc2AgaXMgdHJ1ZTpcclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IHJlbmRlcnMgPEZ1bmNQcm94eSBmdW5jPXt0aGlzLmZvb30gYXJncz1cIkFcIiByZXBsYWNlQXJncyAvPi5cIkFcIiB3aWxsXHJcblx0ICogYmUgdXNlZC5cclxuXHQgKiAxLiBQYXJlbnQgY29tcG9uZW50IGNhbGxzIEZ1bmNQcm94eS51cGRhdGUoIHRoaXMuZm9vLCB1bmRlZmluZWQsIFwiQlwiKS4gXCJCXCIgd2lsbCBiZSB1c2VkLlxyXG5cdCAqIDEuIFBhcmVudCBjb21wb25lbnQgcmVuZGVycyA8RnVuY1Byb3h5IGZ1bmM9e3RoaXMuZm9vfSBhcmdzPVwiQVwiIHJlcGxhY2VBcmdzIC8+LiBcIkFcIiB3aWxsXHJcblx0ICogYmUgdXNlZCBhZ2Fpbi5cclxuXHQgKi9cclxuXHRyZXBsYWNlQXJncz86IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFZhbHVlIHRvIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiBpbnZva2luZyB0aGUgZnVuY3Rpb24uIElmIHRoaXMgdmFsdWUgaXMgdW5kZWZpbmVkLCB0aGVcclxuXHQgKiBjbGFzcyBiYXNlZCBjb21wb25lbnQgdGhhdCByZW5kZXJlZCB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCB3aWxsIGJlIHVzZWQgKHdoaWNoIGlzIHRoZVxyXG5cdCAqIG1vc3QgY29tbW9uIGNhc2UpLlxyXG5cdCAqL1xyXG5cdHRoaXNBcmc/OiBhbnk7XHJcblxyXG5cdC8qKiBGdW5jUHJveHkgY29tcG9uZW50IGNhbm5vdCBoYXZlIGNoaWxkcmVuLiAqL1xyXG5cdGNoaWxkcmVuPzogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IHdyYXBzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBjb250ZW50LiBQcm94aWVzIGNhbiB3cmFwIGluc3RhbmNlXHJcbiAqIG1ldGhvZHMgb2YgY2xhc3NlcyB0aGF0IGhhdmUgYWNjZXNzIHRvIFwidGhpc1wiIHRodXMgYWxsb3dpbmcgYSBzaW5nbGUgY2xhc3MgdG8gXCJob3N0XCIgbXVsdGlwbGVcclxuICogY29tcG9uZW50cyB0aGF0IGNhbiBiZSB1cGRhdGVkIHNlcGFyYXRlbHkuIFRoZSBGdW5jUHJveHkgY29tcG9uZW50IGlzIG5vdCBpbnRlbmRlZCB0byBiZVxyXG4gKiBjcmVhdGVkIGJ5IGRldmVsb3BlcnM7IGluc3RlYWQgaXQgaXMgb25seSB1c2VkIGluIGl0cyBKU1ggZm9ybSBhcyB0aGUgZm9sbG93aW5nOlxyXG4gKiBcclxuICogYGBgdHN4XHJcbiAqIDxGdW5jUHJveHkgZnVuYz17dGhpcy5yZW5kZXJTb21ldGhpbmd9IGtleT17Li4ufSBhcmdzPXsuLi59IHRoaXNBcmc9ey4uLn0gLz5cclxuICogYGBgXHJcbiAqIFxyXG4gKiBUaGVyZSBpcyBhIHNpbXBsZXIgbWV0aG9kIG9mIHNwZWNpZnlpbmcgYSByZW5kZXJpbmcgZnVuY3Rpb24gaW4gSlNYLCBlLmcuOlxyXG4gKiBcclxuICogYGBgdHN4XHJcbiAqIDxkaXY+e3RoaXMucmVuZGVyU29tZXRoaW5nfTwvZGl2PlxyXG4gKiBgYGBcclxuICogXHJcbiAqIFRoZSBGdW5jUHJveHkgY29wb25lbnQgaXMgbmVlZGVkIGluIHRoZSBjYXNlIHdoZXJlIG9uZSAob3IgbW9yZSkgb2YgdGhlIGZvbGxvd2luZyBpcyB0cnVlOlxyXG4gKiAtIFRoZXJlIGlzIGEgbmVlZCB0byBwYXNzIGFyZ3VtZW50cyB0byB0aGUgZnVuY3Rpb25cclxuICogLSBUaGUgc2FtZSBmdW5jdGlvbiBpcyB1c2VkIG11bHRpcGxlIHRpbWVzIGFuZCBrZXlzIG11c3QgYmUgdXNlZCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIHRoZVxyXG4gKiBpbnZvY2F0aW9ucy5cclxuICogLSBUaGUgdmFsdWUgb2YgXCJ0aGlzXCIgaW5zaWRlIHRoZSBmdW5jdGlvbiBpcyBub3QgdGhlIGNvbXBvbmVudCB0aGF0IGRvZXMgdGhlIHJlbmRlcmluZy4gVGhhdFxyXG4gKiBpcywgdGhlIGZ1bmN0aW9uIGlzIG5vdCBhIG1ldGhvZCBvZiB0aGlzIGNvbXBvbmVudC5cclxuICogXHJcbiAqIEZ1bmNQcm94eSBoYXMgYSBwdWJsaWMgc3RhdGljIFVwZGF0ZSBtZXRob2QgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvXHJcbiAqIGNhdXNlIHRoZSByZW5kZXJpbmcgbWVjaGFuaXNtIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd3JhcHBlZCBieSB0aGUgRnVuY1Byb3h5LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNQcm94eSBleHRlbmRzIENvbXBvbmVudDxGdW5jUHJveHlQcm9wcz5cclxue1xyXG5cdC8qKlxyXG5cdCAqIEluc3RhbmNlcyBvZiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBhcmUgbmV2ZXIgYWN0dWFsbHkgY3JlYXRlZDsgaXN0ZWFkLiB0aGUgcGFyYW1ldGVyc1xyXG5cdCAqIHBhc3NlZCB0byBpdCB2aWEgSlNYIGFyZSB1c2VkIGJ5IGFuIGludGVybmFsIHZpcnR1YWwgbm9kZSB0aGF0IGhhbmRsZXMgZnVuY3Rpb25cclxuXHQgKiBpbnZvY2F0aW9uLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IoIHByb3BzOiBGdW5jUHJveHlQcm9wcykgeyBzdXBlcihwcm9wcykgfVxyXG5cclxuXHQvKiogVGhlIHJlbmRlciBtZXRob2Qgb2YgdGhlIEZ1bmNQcm94eSBjb21wb25lbnQgaXMgbmV2ZXIgYWN0dWFsbHkgY2FsbGVkICovXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnkge31cclxuXHJcblx0LyoqXHJcblx0ICogUmVxdWVzdCByZS1yZW5kZXJpbmcgb2YgdGhlIGNvbnRlbnQgcHJvZHVjZWQgYnkgdGhlIGdpdmVuIGZ1bmN0aW9uIGJ5IGludm9raW5nIHRoaXNcclxuXHQgKiBmdW5jdGlvbi4gVGhlIGZ1bmN0aW9uIG11c3QgaGF2ZSBiZWVuIHByZXZpb3VzbHkgdXNlZCBpbiByZW5kZXJpbmcgdXNpbmcgZWl0aGVyXHJcblx0ICogPEZ1bmNQcm94eSBmdW5jPXt9IC8+IEpTWCBjb25zdHJ1Y3Qgb3IgYSBzaW1wbGVyIGNvbnN0dWN0XHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gaW52b2tlLlxyXG5cdCAqIEBwYXJhbSBrZXkgVmFsdWUgdGhhdCBoZWxwcyBkaXN0aW5ndWlzaGluZyBiZXR3ZWVuIG11bHRpcGxlIHVzYWdlcyBvZiB0aGUgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIC4uLmFyZ3M6IGFueVtdKVxyXG5cdHtcclxuXHRcdEZ1bmNQcm94eVZOLnVwZGF0ZSggZnVuYywga2V5LCBhcmdzKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogVGhlIFdhaXRpbmcgY29tcG9uZW50IHdyYXBzIGEgUHJvbWlzZSBhbmQgcmVwbGFjZXMgaXRzIGNvbnRlbnQgd2hlbiB0aGUgcHJvbWlzZSBpcyBzZXR0bGVkLlxyXG4gKiBCZWZvcmUgdGhlIHByb21pc2UgaXMgc2V0dGxlZCwgdGhlIGNvbXBvbmVudCBkaXNwbGF5cyBhbiBvcHRpb25hbCBcImluLXByb2dyZXNzXCIgY29udGVudFxyXG4gKiBzcGVjaWZpZWQgaW4gdGhlIGNvbnN0cnVjdG9yLiBJZiB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCwgdGhlIGNvbXBvbmVudCB3aWxsIGVpdGhlciBkaXNwbGF5XHJcbiAqIHRoZSBcImVycm9yXCIgY29udGVudCBvYnRhaW5lZCBieSBjYWxsaW5nIGEgZnVuY3Rpb25zIHNwZWNpZmllZCBpbiB0aGUgY29uc3RydWN0b3Igb3IgaWYgc3VjaFxyXG4gKiBmdW5jdGlvbiBpcyBub3Qgc3BlY2lmaWVkIHNob3cgZW1wdHkgY29udGVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBXYWl0aW5nIGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RzIHRoZSBvYmplY3RcclxuXHQgKiBAcGFyYW0gcHJvbWlzZSBQcm9taXNlIG9iamVjdCB0byB3YWl0IGZvclxyXG5cdCAqIEBwYXJhbSBwcm9ncmVzc0NvbnRlbnQgQ29udGVudCB0byBkaXNwbGF5IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBwcm9taXNlXHJcblx0ICogQHBhcmFtIGVycm9yQ29udGVudEZ1bmMgQ29udGVudCB0byBkaXNwbGF5IGlmIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkXHJcblx0ICovXHJcblx0Y29uc3RydWN0b3IoIHByb21pc2U6IFByb21pc2U8YW55PiwgcHJvZ3Jlc3NDb250ZW50PzogYW55LCBlcnJvckNvbnRlbnRGdW5jPzogKGVycjogYW55KSA9PiBhbnkpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLmNvbnRlbnQgPSBwcm9ncmVzc0NvbnRlbnQ7XHJcblxyXG5cdFx0dGhpcy53YXRjaFByb21pc2UoIHByb21pc2UsIGVycm9yQ29udGVudEZ1bmMpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhc3luYyB3YXRjaFByb21pc2UoIHByb21pc2U6IFByb21pc2U8YW55PiwgZXJyb3JDb250ZW50RnVuYz86IChlcnI6IGFueSkgPT4gYW55KTogUHJvbWlzZTxhbnk+XHJcblx0e1xyXG5cdFx0dHJ5XHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY29udGVudCA9IGF3YWl0IHByb21pc2U7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSBudWxsO1xyXG5cdFx0XHRpZiAoZXJyb3JDb250ZW50RnVuYyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gZXJyb3JDb250ZW50RnVuYyggZXJyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2goYW5vdGhlckVycilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRAdXBkYXRhYmxlIHByaXZhdGUgY29udGVudDogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBEZWZpbml0aW9ucyBvZiBtb3VudC91bm1vdW50IGZ1bmN0aW9uc1xyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuaW1wb3J0ICogYXMgcm9vdCBmcm9tIFwiLi4vY29yZS9Sb290Vk5cIlxyXG5cclxuLyoqXHJcbiAqIFJlbmRlcnMgdGhlIGdpdmVuIGNvbnRlbnQgKHVzdWFsbHkgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uKSB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGFcclxuICogc3luY2hyb25vdXMgbWFubmVyLlxyXG4gKiBAcGFyYW0gY29udGVudCBDb250ZW50IHRvIHJlbmRlci5cclxuICogQHBhcmFtIGFuY2hvckROIERPTSBlbGVtZW50IHVuZGVyIHdoaWNoIHRvIHJlbmRlciB0aGUgY29udGVudC4gSWYgbnVsbCBvciB1bmRlZmluZWQsIHRoZW5cclxuICogcmVuZGVyIHVuZGVyIHRoZSBkb2N1bWVudC5ib2R5IHRhZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtb3VudFN5bmMoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0cm9vdC5tb3VudFJvb3RTeW5jKCBjb250ZW50LCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8vIFxyXG4vKipcclxuICogUmVtb3ZlcyB0aGUgY29udGVudCB0aGF0IHdhcyBvcmlnaW5hbGx5IGdlbmVyYXRlZCBieSB0aGUgbW91bnRTeW5jIGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFN5bmMoIGFuY2hvckROOiBOb2RlID0gbnVsbCk6IHZvaWRcclxue1xyXG5cdHJvb3QudW5tb3VudFJvb3RTeW5jKCBhbmNob3JETik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbikgdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudFxyXG4vLyBhc3luY2hyb25vdXNseS5cclxuICogQHBhcmFtIGNvbnRlbnQgQ29udGVudCB0byByZW5kZXIuXHJcbiAqIEBwYXJhbSBhbmNob3JETiBET00gZWxlbWVudCB1bmRlciB3aGljaCB0byByZW5kZXIgdGhlIGNvbnRlbnQuIElmIG51bGwgb3IgdW5kZWZpbmVkLHRoZW5cclxuICpcdFx0XHRcdHJlbmRlciB1bmRlciB0aGUgZG9jdW1lbnQuYm9keSB0YWcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbW91bnQoIGNvbnRlbnQ6IGFueSwgYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0cm9vdC5tb3VudFJvb3QoIGNvbnRlbnQsIGFuY2hvckROKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgdGhlIGNvbnRlbnQgdGhhdCB3YXMgb3JpZ2luYWxseSBnZW5lcmF0ZWQgYnkgdGhlIG1vdW50IGZ1bmN0aW9uLlxyXG4gKiBAcGFyYW0gYW5jaG9yRE4gRE9NIGVsZW1lbnQgdW5kZXIgd2hpY2ggdGhlIGNvbnRlbnQgd2FzIHByZXZpb3VzbHkgcmVuZGVyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCggYW5jaG9yRE46IE5vZGUgPSBudWxsKTogdm9pZFxyXG57XHJcblx0cm9vdC51bm1vdW50Um9vdCggYW5jaG9yRE4pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgY2xhc3MgQ29tcEJhc2VWTiBpcyBhIGJhc2UgY2xhc3MgZm9yIEluc3RhbmNlVk4gYW5kIENsYXNzVk4uIEl0IHByb3ZpZGVzIGNvbW1vbiBmdW5jdGlvbmFsaXR5XHJcbi8vIGluIHRlcm1zIG9mIHVwZGF0ZSByZXF1ZXN0cyBhbmQgbGlmZWN5Y2xlIG1hbmFnZW1lbnQuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2xhc3NDb21wVk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBtaW0uSUNsYXNzQ29tcFZOXHJcbntcclxuXHQvLyBDb21wb25lbnQgaW5zdGFuY2UuXHJcblx0cHVibGljIGNvbXA6IG1pbS5JQ29tcG9uZW50O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuQ29tcDsgfVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHJpZXZlcyB1cGRhdGUgc3RyYXRlZ3kgb2JqZWN0IHRoYXQgZGV0ZXJtaW5lcyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yXHJcblx0ICogZHVyaW5nIHVwZGF0ZXMuXHJcblx0ICovXHJcblx0cHVibGljIGdldCB1cGRhdGVTdHJhdGVneSgpOiBtaW0uVXBkYXRlU3RyYXRlZ3lcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5ID8gdGhpcy5jb21wLmdldFVwZGF0ZVN0cmF0ZWd5KCkgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdlbmVyYXRlcyBsaXN0IG9mIHN1Yi1ub2RlcyBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgc3RhdGVcclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICh0aGlzLmNvbXAgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoIFwicmVuZGVyKCkgd2FzIGNhbGxlZCBvbiB1bm1vdW50ZWQgY29tcG9uZW50LlwiKTtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uUmVuZGVyZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jb21wLnJlbmRlcigpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vZGUgc3VwcG9ydHMgaGFuZGxpbmcgb2YgZXJyb3JzOyB0aGF0IGlzLCBleGNlcHRpb24gdGhyb3duIGR1cmluZ1xyXG5cdC8vIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGYgYW5kL29yIGl0cyBzdWItbm9kZXMuXHJcblx0cHVibGljIHN1cHBvcnRzRXJyb3JIYW5kbGluZygpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5oYW5kbGVFcnJvciAhPT0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYWZ0ZXIgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24gZHVyaW5nIHJlbmRlcmluZyBvZiB0aGUgbm9kZSBpdHNlbGZcclxuXHQvLyBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAuaGFuZGxlRXJyb3IoIGVyciwgcGF0aCk7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7SW5kZXBlbmRlbnRDb21wVk59IGZyb20gXCIuL0luZGVwZW5kZW50Q29tcFZOXCJcclxuaW1wb3J0IHtNYW5hZ2VkQ29tcFZOfSBmcm9tIFwiLi9NYW5hZ2VkQ29tcFZOXCJcclxuaW1wb3J0IHtGdW5jVk59IGZyb20gXCIuL0Z1bmNWTlwiXHJcbmltcG9ydCB7RWxtVk59IGZyb20gXCIuL0VsbVZOXCJcclxuaW1wb3J0IHtUZXh0Vk59IGZyb20gXCIuL1RleHRWTlwiXHJcbmltcG9ydCB7RnVuY1Byb3h5Vk59IGZyb20gXCIuL0Z1bmNQcm94eVZOXCJcclxuaW1wb3J0IHtzX2N1cnJlbnRDbGFzc0NvbXB9IGZyb20gXCIuL1NjaGVkdWxlclwiXHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgZWl0aGVyIGEgc2luZ2xlIHZpcnR1YWwgbm9kZSBvciBhbiBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGNvbnRlbnQuXHJcbi8vIEZvciBhbGwgdHlwZXMgb2YgY29udGVudHMgb3RoZXIgdGhhbiBhbiBhcnJheSwgdGhlIHJldHVybmVkIHZhbHVlIGlzIGEgc2luZ2xlIFZOLiBJZiB0aGUgaW5wdXRcclxuLy8gY29udGVudCBpcyBhbiBhcnJheSwgdGhlbiBhIFZOIGlzIGNyZWF0ZWQgZm9yIGVhY2ggb2YgdGhlIGFycmF5IGVsZW1lbnRzLiBTaW5jZSBhcnJheSBlbGVtZW50c1xyXG4vLyBtaWdodCBhbHNvIGJlIGFycmF5cywgdGhlIHByb2Nlc3MgaXMgcmVjdXJzaXZlLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudDogYW55KTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAoY29udGVudCA9PT0gbnVsbCB8fCBjb250ZW50ID09PSB1bmRlZmluZWQgfHwgY29udGVudCA9PT0gZmFsc2UpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHRlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVk5CYXNlKVxyXG5cdFx0cmV0dXJuIGNvbnRlbnQ7XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIpXHJcblx0XHRyZXR1cm4gbmV3IFRleHRWTiggY29udGVudCk7XHJcblx0ZWxzZSBpZiAodHlwZW9mIGNvbnRlbnQucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0e1xyXG5cdFx0Ly8gaWYgdGhlIGNvbXBvbmVudCAodGhpcyBjYW4gb25seSBiZSBhbiBJbnN0YW5jZSBjb21wb25lbnQpIGlzIGFscmVhZHkgYXR0YWNoZWQgdG8gVk4sXHJcblx0XHQvLyByZXR1cm4gdGhpcyBleGlzdGluZyBWTjsgb3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBvbmUuXHJcblx0XHRyZXR1cm4gKGNvbnRlbnQgYXMgbWltLklDb21wb25lbnQpLnZuXHJcblx0XHRcdFx0XHRcdD8gKGNvbnRlbnQgYXMgbWltLklDb21wb25lbnQpLnZuIGFzIFZOXHJcblx0XHRcdFx0XHRcdDogbmV3IEluZGVwZW5kZW50Q29tcFZOKCBjb250ZW50IGFzIG1pbS5JQ29tcG9uZW50KTtcclxuXHR9XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggY29udGVudCkpXHJcblx0XHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tQXJyYXkoIGNvbnRlbnQpO1xyXG5cdGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBQcm9taXNlKVxyXG5cdFx0dGhyb3cgY29udGVudDtcclxuXHRlbHNlIGlmICh0eXBlb2YgY29udGVudCA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdGxldCB2biA9IEZ1bmNQcm94eVZOLmZpbmRWTiggY29udGVudClcclxuXHRcdHJldHVybiB2biB8fCBuZXcgRnVuY1Byb3h5Vk4oIHsgZnVuYzogY29udGVudCwgdGhpc0FyZzogc19jdXJyZW50Q2xhc3NDb21wfSk7XHJcblx0fVxyXG5cdGVsc2VcclxuXHRcdHJldHVybiBuZXcgVGV4dFZOKCBjb250ZW50LnRvU3RyaW5nKCkpO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYW4gYXJyYXkgb2YgdmlydHVhbCBub2RlcyBmcm9tIHRoZSBnaXZlbiBjb250ZW50LiBDYWxscyB0aGUgY3JlYXRlTm9kZXNGcm9tQ29udGVudCBhbmRcclxuLy8gaWYgaXQgcmV0dXJucyBhIHNpbmdsZSBub2RlLCB3cmFwcyBpdCBpbiBhbiBhcnJheS5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggY29udGVudDogYW55KTogVk5bXVxyXG57XHJcblx0bGV0IG5vZGVzID0gY3JlYXRlTm9kZXNGcm9tQ29udGVudCggY29udGVudCk7XHJcblx0aWYgKCFub2RlcylcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobm9kZXMpKVxyXG5cdFx0cmV0dXJuIG5vZGVzO1xyXG5cdGVsc2VcclxuXHRcdHJldHVybiBbbm9kZXNdO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIENyZWF0ZXMgYSBjaGFpbiBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGRhdGEgcHJvdmlkZWQgYnkgdGhlIFR5cGVTY3JpcHQncyBKU1ggcGFyc2VyLlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm9kZXNGcm9tSlNYKCB0YWc6IGFueSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKTogVk4gfCBWTltdXHJcbntcclxuXHRpZiAodHlwZW9mIHRhZyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBuZXcgRWxtVk4oIHRhZyBhcyBzdHJpbmcsIHByb3BzLCBjaGlsZHJlbik7XHJcblx0ZWxzZSBpZiAodGFnID09PSBtaW0uRnJhZ21lbnQpXHJcblx0XHRyZXR1cm4gY3JlYXRlTm9kZXNGcm9tQXJyYXkoIGNoaWxkcmVuKTtcclxuXHRlbHNlIGlmICh0YWcgPT09IG1pbS5GdW5jUHJveHkpXHJcblx0e1xyXG5cdFx0aWYgKCFwcm9wcyB8fCAhcHJvcHMuZnVuYylcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcblx0XHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSBhIG5vZGUgbGlua2VkIHRvIHRoaXMgZnVuY3Rpb24uIElmIHllcyByZXR1cm4gaXQ7XHJcblx0XHQvLyBvdGhlcndpc2UsIGNyZWF0ZSBhIG5ldyBub2RlLlxyXG5cdFx0bGV0IGZ1bmNQcm94eVByb3BzID0gcHJvcHMgYXMgbWltLkZ1bmNQcm94eVByb3BzO1xyXG5cdFx0bGV0IHZuID0gRnVuY1Byb3h5Vk4uZmluZFZOKCBwcm9wcy5mdW5jLCBmdW5jUHJveHlQcm9wcy5rZXkpO1xyXG5cdFx0aWYgKCF2bilcclxuXHRcdFx0cmV0dXJuIG5ldyBGdW5jUHJveHlWTiggcHJvcHMpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGUgdXBkYXRlQXJncyBwcm9wZXJ0eSBpcyB0cnVlLCB3ZSByZXBsYWNlIHRoZSBhcmd1bWVudHMgaW4gdGhlIG5vZGU7IG90aGVyd2lzZSxcclxuXHRcdFx0Ly8gd2UgaWdub3JlIHRoZSBhcmd1bWVudHMgZnJvbSB0aGUgcHJvcGVydGllcy5cclxuXHRcdFx0aWYgKGZ1bmNQcm94eVByb3BzLnJlcGxhY2VBcmdzKVxyXG5cdFx0XHRcdHZuLnJlcGxhY2VBcmdzKCBmdW5jUHJveHlQcm9wcy5hcmdzKTtcclxuXHJcblx0XHRcdHJldHVybiB2bjtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIHRhZyA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdHtcclxuXHRcdC8vIGNoaWxkcmVuIHBhcmFtZXRlciBpcyBhbHdheXMgYW4gYXJyYXkuIEEgY29tcG9uZW50IGNhbiBzcGVjaWZ5IHRoYXQgaXRzIGNoaWxkcmVuIGFyZVxyXG5cdFx0Ly8gYW4gYXJyYXkgb2YgYSBjZXJ0YWluIHR5cGUsIGUuZy4gY2xhc3MgQSBleHRlbmRzIG1pbS5Db21wb25lbnQ8e30sVFtdPi4gSW4gdGhpcyBjYXNlXHJcblx0XHQvLyB0aGVyZSBhcmUgdHdvIHdheXMgdG8gc3BlY2lmeSBjaGlsZHJlbiBpbiBKU1ggdGhhdCB3b3VsZCBiZSBhY2NlcHRlZCBieSB0aGUgVHlwZVNjcmlwdFxyXG5cdFx0Ly8gY29tcGlsZXI6XHJcblx0XHQvL1x0MSkgPEE+e3QxfXt0Mn08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW3QxLCB0Ml0gKGFzIGV4cGVjdGVkIGJ5IEEpLlxyXG5cdFx0Ly9cdDIpIDxBPntbdDEsIHQyXX08L0E+LiBJbiB0aGlzIGNhc2UsIGNoaWxkcmVuIHdpbGwgYmUgW1t0MSx0Ml1dIChhcyBOT1QgZXhwZWN0ZWQgYnkgQSkuXHJcblx0XHQvL1x0XHRUaGlzIGxvb2tzIGxpa2UgYSBUeXBlU2NyaXB0IGJ1Zy5cclxuXHRcdC8vIFRoZSByZWFsQ2hpbGRyZW4gdmFyaWFibGUgYWNjb21tb2RhdGVzIGJvdGggY2FzZXMuXHJcblx0XHRsZXQgcmVhbENoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIEFycmF5LmlzQXJyYXkoIGNoaWxkcmVuWzBdKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XHJcblx0XHRpZiAodHlwZW9mIHRhZy5wcm90b3R5cGUucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRcdHJldHVybiBuZXcgTWFuYWdlZENvbXBWTiggdGFnIGFzIG1pbS5JQ29tcG9uZW50Q2xhc3MsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gbmV3IEZ1bmNWTiggdGFnIGFzIG1pbS5GdW5jQ29tcFR5cGUsIHByb3BzLCByZWFsQ2hpbGRyZW4pO1xyXG5cdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0ZWxzZVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcIkludmFsaWQgdGFnIGluIGpzeCBwcm9jZXNzaW5nIGZ1bmN0aW9uOiBcIiArIHRhZyk7XHJcbi8vLy8vLy8vLy8vXHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ3JlYXRlcyBhcnJheSBvZiB2aXJ0dWFsIG5vZGVzIGZyb20gdGhlIGdpdmVuIGFycmF5IG9mIGl0ZW1zLlxyXG5mdW5jdGlvbiBjcmVhdGVOb2Rlc0Zyb21BcnJheSggYXJyOiBhbnlbXSk6IFZOW11cclxue1xyXG5cdGlmIChhcnIubGVuZ3RoID09PSAwKVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblxyXG5cdGxldCBub2RlczogVk5bXSA9IFtdO1xyXG5cdGZvciggbGV0IGl0ZW0gb2YgYXJyKVxyXG5cdHtcclxuXHRcdGxldCBpdGVtTm9kZXMgPSBjcmVhdGVOb2Rlc0Zyb21Db250ZW50KCBpdGVtKTtcclxuXHRcdGlmIChpdGVtTm9kZXMgPT09IG51bGwpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheSggaXRlbU5vZGVzKSlcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgdm4gb2YgaXRlbU5vZGVzKVxyXG5cdFx0XHRcdG5vZGVzLnB1c2goIHZuKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdFx0bm9kZXMucHVzaCggaXRlbU5vZGVzKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2Rlcy5sZW5ndGggPiAwID8gbm9kZXMgOiBudWxsO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBjb21wb25lbnQgdGhhdCBpcyBzZXQgYXMgY3VycmVudCBhdCB0aGUgdGltZSBvZiB0aGUgY2FsbC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50KCk6IG1pbS5JQ29tcG9uZW50XHJcbntcclxuXHQvLyB0aGUgc19jdXJyZW50Vk4gc2hvdWxkIHBvaW50IHRvIHRoZSB2aXJ0dWFsIG5vZGUgYmVoaW5kIHRoZSBjbGFzcy1iYXNlZCBjb21wb25lbnQsXHJcblx0Ly8gd2hpY2ggc2hvdWxkIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiB0aGUgRnVuY1Byb3h5IGNvbXBvbmVudCBjYWxscyB0aGUgZnVuY3Rpb24uXHJcblx0cmV0dXJuIHNfY3VycmVudENsYXNzQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0VsbUF0dHIsIEF0dHJQcm9wSW5mbywgRXZlbnRQcm9wSW5mbywgQ3VzdG9tQXR0clByb3BJbmZvLCBQcm9wVHlwZSwgUHJvcEluZm99IGZyb20gXCIuLi91dGlscy9FbG1BdHRyXCJcclxuaW1wb3J0IHtTdmdFbG1zfSBmcm9tIFwiLi4vdXRpbHMvU3ZnRWxtc1wiO1xyXG5pbXBvcnQge2RlZXBDb21wYXJlfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gUmVwcmVzZW50cyBhIERPTSBlbGVtZW50IGNyZWF0ZWQgdXNpbmcgSlNYLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEVsbVZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklFbG1WTlxyXG57XHJcblx0Ly8gVGFnIG5hbWUgb2YgYW4gRWxlbWVudC5cclxuXHRwdWJsaWMgZWxtTmFtZTogc3RyaW5nO1xyXG5cclxuXHQvLyBJbnN0YW5jZSBvZiBhbiBFbGVtZW50LiBUaGUgaW5zdGFuY2UgaXMgY3JlYXRlZCB3aGVuIHRoZSBub2RlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuXHQvLyB0aW1lLlxyXG5cdHB1YmxpYyBlbG06IEVsZW1lbnQ7XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSBFbGVtZW50IGlzIFNWRyAoYXMgb3Bwb3NlZCB0byBIVExNKS4gVGhlcmUgYXJlIHNvbWUgU1ZHXHJcblx0Ly8gZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBzYW1lIG5hbWUgYXMgcmVndWxhciBlbGVtZW50cyAoZS5nLiA8YT4pLiBUaGVyZWZvcmUsIGluIG9yZGVyIHRvXHJcblx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3Igbm90IHdlIG5lZWQgdG8gY2hlY2sgdGhlIG5hbWVzcGFjZVVSSSBvZiB0aGUgcGFyZW50XHJcblx0Ly8gKGFuY2hvcmUpIERPTSBub2RlLlxyXG5cdHB1YmxpYyBpc1N2ZzogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggdGFnTmFtZTogc3RyaW5nLCBwcm9wczogYW55LCBjaGlsZHJlbjogYW55W10pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkVsbTtcclxuXHRcdHRoaXMuZWxtTmFtZSA9IHRhZ05hbWU7XHJcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblxyXG5cdFx0aWYgKHByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgdGhlIGtleSBwcm9wZXJ0eS4gSWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3RcclxuXHRcdFx0Ly8gc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpbiB1bmRlZmluZWQuXHJcblx0XHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cdFx0XHRpZiAodGhpcy5rZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHR0aGlzLmtleSA9IHByb3BzLmlkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkVsbTsgfVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGVsZW1lbnQncyBuYW1lIHBsdXMga2V5IChvciBpZCkgaWYgc3BlY2lmaWVkLlxyXG5cdFx0bGV0IG5hbWUgPSB0aGlzLmVsbU5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgYW5kIG5vdCB0byBhbnkgb2YgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMuZWxtOyB9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG5cdFx0cmV0dXJuIHRoaXMuY2hpbGRyZW47XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENyZWF0ZXMgYW5kIHJldHVybnMgRE9NIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGlzIHZpcnR1YWwgbm9kZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0cHVibGljIG1vdW50KCk6IEROXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBpcyBhbiBTVkcgb3IgSFRNTCBlbGVtZW50IGFuZCBjcmVhdGUgdGhlIGVsZW1lbnRcclxuXHRcdGxldCBzdmdJbmZvID0gU3ZnRWxtcy5nZXRTdmdFbG1JbmZvKCB0aGlzLmVsbU5hbWUpO1xyXG5cdFx0dGhpcy5pc1N2ZyA9IHN2Z0luZm8gIT09IHVuZGVmaW5lZCAmJiAoc3ZnSW5mbyAhPT0gdHJ1ZSB8fCB0aGlzLmFuY2hvckROLm5hbWVzcGFjZVVSSS5lbmRzV2l0aCggXCJzdmdcIikpO1xyXG5cdFx0dGhpcy5lbG0gPSB0aGlzLmlzU3ZnXHJcblx0XHRcdD8gdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoIFN2Z0VsbXMubmFtZXNwYWNlLCBTdmdFbG1zLmdldEVsbU5hbWUoIHN2Z0luZm8sIHRoaXMuZWxtTmFtZSkpXHJcblx0XHRcdDogdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCB0aGlzLmVsbU5hbWUpO1xyXG5cclxuXHRcdC8vIHRyYW5zbGF0ZSBwcm9wZXJ0aWVzIGludG8gYXR0cmlidXRlcywgZXZlbnRzIGFuZCBjdXN0b20gYXR0cmlidXRlc1xyXG5cdFx0dGhpcy5wYXJzZVByb3BzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuYXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQXR0cnMoKTtcclxuXHJcblx0XHRpZiAodGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnRzKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdHRoaXMuYWRkQ3VzdG9tQXR0cnMoKTtcclxuXHJcblx0XHQvLyBzZXQgdGhlIHZhbHVlIG9mIHRoZSByZWZlcmVuY2UgKGlmIHNwZWNpZmllZClcclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdGhpcy5lbG0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FbG0sIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuZWxtO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZWxlYXNlcyByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdHB1YmxpYyB1bm1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyB1bnNldCB0aGUgcmVmZXJlbmNlIHZhbHVlIGlmIHNwZWNpZmllZC4gV2UgY2hlY2sgd2hldGhlciB0aGUgcmVmZXJlbmNlIHN0aWxsIHBvaW50c1xyXG5cdFx0Ly8gdG8gb3VyIGVsZW1lbnQgYmVmb3JlIHNldHRpbmcgaXQgdG8gdW5kZWZpbmVkLiBJZiB0aGUgc2FtZSBSZWYgb2JqZWN0IGlzIHVzZWQgZm9yXHJcblx0XHQvLyBtb3JlIHRoYW4gb25lIGVsZW1lbnQgKGFuZC9vciBjb21wb25lbnRzKSBpdCBjYW4gaGFwcGVuIHRoYXQgdGhlIHJlZmVyZW5jZSBpcyBjaGFuZ2VkXHJcblx0XHQvLyBiZWZvcmUgb3VyIGVsZW1lbnQgaXMgdW5tb3VudGVkLlxyXG5cdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB1bmRlZmluZWQsIHRoaXMuZWxtKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyB0ZXJtaW5hdGUgY3VzdG9tIHByb3BlcnR5IGhhbmRsZXJzXHJcblx0XHRpZiAodGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0dGhpcy5yZW1vdmVDdXN0b21BdHRycyggdHJ1ZSk7XHJcblxyXG5cdFx0Ly8gY2xlYW4gdXBcclxuXHRcdHRoaXMuZWxtID0gbnVsbDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIHRoaXMgaXMgdGhlIHNhbWUgdHlwZSBvZiBlbGVtZW50OyB0aGF0IGlzLCBpdCBoYXMgdGhlIHNhbWVcclxuXHRcdC8vIG5hbWUuXHJcblx0XHRyZXR1cm4gdGhpcy5lbG1OYW1lID09PSAobmV3Vk4gYXMgRWxtVk4pLmVsbU5hbWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFByZXBhcmVzIHRoaXMgbm9kZSB0byBiZSB1cGRhdGVkIGZyb20gdGhlIGdpdmVuIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgb25seSBpZiB1cGRhdGVcclxuXHQvLyBoYXBwZW5zIGFzIGEgcmVzdWx0IG9mIHJlbmRlcmluZyB0aGUgcGFyZW50IG5vZGVzLiBUaGUgbmV3Vk4gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG9cclxuXHQvLyBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGluZGljYXRlcyB3aGV0aGVyIGNoaWxkcmVuXHJcblx0Ly8gc2hvdWxkIGJlIHVwZGF0ZWQgYW5kIHdoZXRoZXIgdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZC5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBSZW5kZXIgcGhhc2UuXHJcblx0cHVibGljIHByZXBhcmVVcGRhdGUoIG5ld1ZOOiBWTik6IFZOVXBkYXRlRGlzcFxyXG5cdHtcclxuXHRcdC8vIGNvbW1pdFVwZGF0ZSBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBuZXcgcHJvcHMgYXJlIGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IG9uZXNcclxuXHRcdGxldCBzaG91bGRDb21taXQgPSAhZGVlcENvbXBhcmUoIHRoaXMucHJvcHMsIChuZXdWTiBhcyBFbG1WTikucHJvcHMpO1xyXG5cclxuXHRcdC8vIHJlbmRlciBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBpZiBlaXRoZXIgb2xkIG9yIG5ldyBub2RlIGhhcyBjaGlsZHJlblxyXG5cdFx0bGV0IHNob3VsZFJlbmRlciA9IHRoaXMuY2hpbGRyZW4gJiYgdGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwIHx8XHJcblx0XHRcdFx0XHQobmV3Vk4gYXMgRWxtVk4pLmNoaWxkcmVuICYmIChuZXdWTiBhcyBFbG1WTikuY2hpbGRyZW4ubGVuZ3RoID4gMDtcclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgbmV3IHByb3BzIGFuZCBjaGlsZHJlblxyXG5cdFx0dGhpcy5wcm9wcyA9IChuZXdWTiBhcyBFbG1WTikucHJvcHM7XHJcblx0XHR0aGlzLmNoaWxkcmVuID0gKG5ld1ZOIGFzIEVsbVZOKS5jaGlsZHJlbjtcclxuXHJcblx0XHRyZXR1cm4geyBzaG91bGRDb21taXQsIHNob3VsZFJlbmRlciB9O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCBuZXdFbG1WTjogRWxtVk4gPSBuZXdWTiBhcyBFbG1WTjtcclxuXHRcdG5ld0VsbVZOLnBhcnNlUHJvcHMoKTtcclxuXHJcblx0XHQvLyBpZiByZWZlcmVuY2Ugc3BlY2lmaWNhdGlvbiBjaGFuZ2VkIHRoZW4gc2V0IG9yIHVuc2V0IGl0IGFzIG5lY2Vzc2FyeVxyXG5cdFx0aWYgKG5ld0VsbVZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIHNwZWNpZmljYXRpb25cclxuXHRcdFx0dGhpcy5yZWYgPSBuZXdFbG1WTi5yZWY7XHJcblxyXG5cdFx0XHQvLyBpZiByZWZlcmVuY2UgaXMgbm93IHNwZWNpZmllZCwgc2V0IGl0IG5vdzsgbm90ZSB0aGF0IHdlIGFscmVhZHkgZGV0ZXJtaW5lZCB0aGF0XHJcblx0XHRcdC8vIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGlzIGRpZmZlcmVudC5cclxuXHRcdFx0aWYgKHRoaXMucmVmICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuZWxtKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSwgdXBkYXRlU3RhcnRlZ3kgYW5kIGNyZWF0b3IgcHJvcGVydHkgKGV2ZW4gaWYgdGhlXHJcblx0XHQvLyB2YWx1ZXMgYXJlIHRoZSBzYW1lKVxyXG5cdFx0dGhpcy5rZXkgPSBuZXdFbG1WTi5rZXk7XHJcblx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gbmV3RWxtVk4udXBkYXRlU3RyYXRlZ3k7XHJcblxyXG5cdFx0dGhpcy51cGRhdGVBdHRycyggbmV3RWxtVk4uYXR0cnMpO1xyXG5cdFx0dGhpcy51cGRhdGVFdmVudHMoIG5ld0VsbVZOLmV2ZW50cyk7XHJcblx0XHR0aGlzLnVwZGF0ZUN1c3RvbUF0dHJzKCBuZXdFbG1WTi5jdXN0b21BdHRycyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEdvZXMgb3ZlciB0aGUgb3JpZ2luYWwgcHJvcGVydGllcyBhbmQgcHV0cyB0aGVtIGludG8gdGhlIGJ1Y2tldHMgb2YgYXR0cmlidXRlcywgZXZlbnRcclxuXHQvLyBsaXN0ZW5lcnMgYW5kIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgcGFyc2VQcm9wcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnByb3BzKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0bGV0IHByb3BWYWw6IGFueSwgcHJvcEluZm86IFByb3BJbmZvLCBwcm9wVHlwZTogUHJvcFR5cGU7XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiB0aGlzLnByb3BzKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocHJvcE5hbWUgPT09IFwia2V5XCIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgdGhlIGtleSBwcm9wZXJ0eSBiZWNhdXNlIHdlIGFscmVhZHkgZXh0cmFjdGVkIGl0IGluIHRoZSBjb25zdHJ1Y3RvclxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcm9wVmFsID0gdGhpcy5wcm9wc1twcm9wTmFtZV07XHJcblx0XHRcdGlmIChwcm9wVmFsID09IG51bGwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJyZWZcIilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHJlbWVtYmVyIHJlZiBwcm9wZXJ0eVxyXG5cdFx0XHRcdHRoaXMucmVmID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJ1cGRhdGVTdHJhdGVneVwiKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdXBkYXRlU3RyYXRlZ3kgcHJvcGVydHlcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVN0cmF0ZWd5ID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBnZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHByb3BlcnR5IGFuZCBkZXRlcm1pbmUgaXRzIHR5cGUgKHJlZ3VsYXIgYXR0cmlidXRlLCBldmVudFxyXG5cdFx0XHRcdC8vIG9yIGN1c3RvbSBhdHRyaWJ1dGUpLiBOb3RlIHRoYXQgZ2V0UHJvcGVydHlJbmZvIG1heSByZXR1cm4gbnVsbCBvbmx5IGZvciByZWd1bGFyXHJcblx0XHRcdFx0Ly8gYXR0cmlidXRlcy5cclxuXHRcdFx0XHRwcm9wSW5mbyA9IEVsbUF0dHIuZ2V0UHJvcGVydHlJbmZvKCBwcm9wTmFtZSk7XHJcblx0XHRcdFx0cHJvcFR5cGUgPSBwcm9wSW5mbyA/IHByb3BJbmZvLnR5cGUgOiBQcm9wVHlwZS5BdHRyO1xyXG5cdFx0XHRcdGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuYXR0cnMpXHJcblx0XHRcdFx0XHRcdHRoaXMuYXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHR0aGlzLmF0dHJzW3Byb3BOYW1lXSA9IHsgaW5mbzogcHJvcEluZm8sIHZhbDogcHJvcFZhbCB9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuRXZlbnQpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IGV2ZW50SW5mbyA9IGdldFByb3BBc0V2ZW50UnVuVGltZURhdGEoIHByb3BJbmZvLCBwcm9wVmFsKTtcclxuXHRcdFx0XHRcdGlmIChldmVudEluZm8pXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy5ldmVudHMgPSB7fVxyXG5cclxuXHRcdFx0XHRcdFx0dGhpcy5ldmVudHNbcHJvcE5hbWVdID0gZXZlbnRJbmZvO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIC8vIGlmIChwcm9wVHlwZSA9PT0gUHJvcFR5cGUuQ3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0XHRcdHRoaXMuY3VzdG9tQXR0cnMgPSB7fTtcclxuXHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBjdXN0b21lIGF0dHJpYnV0ZXMgdmFsdWUuIEhhbmRsZXIgd2lsbCBiZSBjcmVhdGVkIGxhdGVyLlxyXG5cdFx0XHRcdFx0dGhpcy5jdXN0b21BdHRyc1twcm9wTmFtZV0gPSB7IGluZm86IHByb3BJbmZvIGFzIEN1c3RvbUF0dHJQcm9wSW5mbywgdmFsOiBwcm9wVmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoYW5kbGVyOiB1bmRlZmluZWR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIERPTSBhdHRyaWJ1dGVzIHRvIHRoZSBFbGVtZW50LlxyXG5cdHByaXZhdGUgYWRkQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5hdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5hdHRycyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5hdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJ0ZCA9IHRoaXMuYXR0cnNbbmFtZV07XHJcblx0XHRcdEVsbUF0dHIuc2V0QXR0ciggdGhpcy5lbG0sIG5hbWUsIHJ0ZC5pbmZvLCBydGQudmFsKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBET00gYXR0cmlidXRlcyBvZiB0aGlzIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSB1cGRhdGVBdHRycyggbmV3QXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIFwiY2FjaGVcIiBzZXZlcmFsIG1lbWViZXJzIGZvciBmYXN0ZXIgYWNjZXNzXHJcblx0XHRsZXQgZWxtID0gdGhpcy5lbG07XHJcblx0XHRsZXQgb2xkQXR0cnMgPSB0aGlzLmF0dHJzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBhdHRyaWJ1dGVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXcgb25lcyBhbmRcclxuXHRcdC8vIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IG9sZFJURCA9IG9sZEF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGxldCBuZXdSVEQgPSBuZXdBdHRycyA/IG5ld0F0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3UlREIHx8ICFuZXdSVEQudmFsKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBwcm9wZXJ0eSB3aXRoIHRoZSBnaXZlbiBuYW1lLCByZW1vdmUgdGhlIG9sZCBwcm9wZXJ0eSBhbmRcclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgYXR0cmlidXRlIGZyb20gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIucmVtb3ZlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGUgbmV3IHByb3BlcnR5IHdpdGggdGhlIGdpdmVuIG5hbWUgaGFzIGEgZGlmZmVyZW50IHZhbHVlLCByZW1tZWJlciB0aGlzXHJcblx0XHRcdFx0XHQvLyB2YWx1ZSBhbmQgc2V0IGl0IHRvIHRoZSBhdHRyaWJ1dGUgaW4gdGhlIGVsZW1lbnRcclxuXHRcdFx0XHRcdEVsbUF0dHIudXBkYXRlQXR0ciggZWxtLCBuYW1lLCBvbGRSVEQuaW5mbywgb2xkUlRELnZhbCwgbmV3UlRELnZhbCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBhdHRyaWJ1dGVzOyBhZGQgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBvbGQgb25lc1xyXG5cdFx0aWYgKG5ld0F0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0F0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKG9sZEF0dHJzICYmIChuYW1lIGluIG9sZEF0dHJzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHRsZXQgbmV3UlREID0gbmV3QXR0cnNbbmFtZV07XHJcblx0XHRcdFx0RWxtQXR0ci5zZXRBdHRyKCBlbG0sIG5hbWUsIG5ld1JURC5pbmZvLCBuZXdSVEQudmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYXR0cnMgPSBuZXdBdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQWRkcyBpbmZvcm1hdGlvbiBhYm91dCBldmVudHMgdG8gdGhlIEVsZW1lbnQuXHJcblx0cHJpdmF0ZSBhZGRFdmVudHMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5ldmVudHMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLmFkZEV2ZW50cyBjYWxsZWQgd2l0aCB0aGlzLmV2ZW50cyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5ldmVudHMpXHJcblx0XHRcdHRoaXMuYWRkRXZlbnQoIG5hbWUsIHRoaXMuZXZlbnRzW25hbWVdKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXNpbmcgdGhlIGdpdmVuIHByb3BlcnR5IG5hbWUgYW5kIGl0cyB2YWx1ZSBzZXQgdGhlIGFwcHJvcHJpYXRlIGF0dHJpYnV0ZShzKSBvbiB0aGVcclxuXHQvLyBlbGVtZW50LiBUaGlzIG1ldGhvZCBoYW5kbGVzIHNwZWNpYWwgY2FzZXMgb2YgcHJvcGVydGllcyB3aXRoIG5vbi10cml2aWFsIHZhbHVlcy5cclxuXHRwcml2YXRlIGFkZEV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdGV2ZW50LndyYXBwZXIgPSB0aGlzLmNyZWF0ZUV2ZW50V3JhcHBlciggZXZlbnQpO1xyXG5cdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgZXZlbnQud3JhcHBlciwgZXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vXHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHJlbW92ZUV2ZW50KCBuYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudFJ1blRpbWVEYXRhKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG5hbWUsIGV2ZW50LndyYXBwZXIsIGV2ZW50LnVzZUNhcHR1cmUpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5FdmVudCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgRWxlbWVudC5cclxuXHRwcml2YXRlIHVwZGF0ZUV2ZW50cyggbmV3RXZlbnRzOiB7IFtuYW1lOiBzdHJpbmddOiBFdmVudFJ1blRpbWVEYXRhIH0pOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IG9sZEV2ZW50cyA9IHRoaXMuZXZlbnRzO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBleGlzdGluZyBldmVudCBsaXN0ZW5lcnMsIHJlbW92ZSB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG5ld1xyXG5cdFx0Ly8gb25lcyBhbmQgdXBkYXRlIHRob3NlIHdob3NlIHZhbHVlIGhhcyBjaGFuZ2VkXHJcblx0XHRpZiAob2xkRXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEV2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGxldCBvbGRFdmVudCA9IG9sZEV2ZW50c1tuYW1lXTtcclxuXHRcdFx0XHRsZXQgbmV3RXZlbnQgPSBuZXdFdmVudHMgPyBuZXdFdmVudHNbbmFtZV0gOiB1bmRlZmluZWQ7XHJcblx0XHRcdFx0aWYgKCFuZXdFdmVudClcclxuXHRcdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnQoIG5hbWUsIG9sZEV2ZW50KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZUV2ZW50KCBuYW1lLCBvbGRFdmVudCwgbmV3RXZlbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG5ldyBldmVudCBsaXN0ZW5lcnMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3RXZlbnRzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG5ld0V2ZW50cylcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmIChvbGRFdmVudHMgJiYgKG5hbWUgaW4gb2xkRXZlbnRzKSlcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdFx0XHR0aGlzLmFkZEV2ZW50KCBuYW1lLCBuZXdFdmVudHNbbmFtZV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ldmVudHMgPSBuZXdFdmVudHM7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBvZiB0aGUgZXZlbnQgbGlzdGVuZXIgYXJlIGRpZmZlcmVudCBhbmQgc2V0c1xyXG5cdC8vIHRoZSB1cGRhdGVkIHZhbHVlLiBSZXR1cm5zIHRydWUgaWYgdXBkYXRlIGhhcyBiZWVuIHBlcmZvcm1lZCBhbmQgZmFsc2UgaWYgbm8gY2hhbmdlIGhhc1xyXG5cdC8vIGJlZW4gZGV0ZWN0ZWQuXHJcblx0cHJpdmF0ZSB1cGRhdGVFdmVudCggbmFtZTogc3RyaW5nLCBvbGRFdmVudDogRXZlbnRSdW5UaW1lRGF0YSwgbmV3RXZlbnQ6IEV2ZW50UnVuVGltZURhdGEpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZG91YmxlLWVxdWFsLXNpZ24gZm9yIHVzZUNhcHR1cmUgaXMgb24gcHVycG9zZSwgYmVjYXVzZSB1c2VDYXB0dXJlIGNhbiBiZSB1bmRlZmluZWQgb3IgYm9vbGVhblxyXG5cdFx0aWYgKG9sZEV2ZW50Lm9yZ0Z1bmMgPT09IG5ld0V2ZW50Lm9yZ0Z1bmMgJiZcclxuXHRcdFx0b2xkRXZlbnQudGhhdCA9PT0gbmV3RXZlbnQudGhhdCAmJlxyXG5cdFx0XHRvbGRFdmVudC51c2VDYXB0dXJlID09IG5ld0V2ZW50LnVzZUNhcHR1cmUpXHJcblx0XHR7XHJcblx0XHRcdG5ld0V2ZW50LndyYXBwZXIgPSBvbGRFdmVudC53cmFwcGVyO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbW92ZSBvbGQgZXZlbnQgbGlzdGVuZXJcclxuXHRcdFx0dGhpcy5lbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggbmFtZSwgb2xkRXZlbnQud3JhcHBlciwgb2xkRXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG5cdFx0XHQvLyBjcmVhdGUgbmV3IHdyYXBwZXIgYW5kIGFkZCBpdCBhcyBldmVudCBsaXN0ZW5lclxyXG5cdFx0XHRuZXdFdmVudC53cmFwcGVyID0gdGhpcy5jcmVhdGVFdmVudFdyYXBwZXIoIG5ld0V2ZW50KTtcclxuXHRcdFx0dGhpcy5lbG0uYWRkRXZlbnRMaXN0ZW5lciggbmFtZSwgbmV3RXZlbnQud3JhcHBlciwgbmV3RXZlbnQudXNlQ2FwdHVyZSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkV2ZW50LCBTdGF0c0FjdGlvbi5VcGRhdGVkKTtcclxuLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIGFzIGFuIGV2ZW50IGxpc3RlbmVyLiBUaGUgd3JhcHBlciBpcyBib3VuZCB0b1xyXG5cdC8vIHRoZSBpbnN0YW5jZSBvZiBFbG1WTiBhbmQgdGh1cyBjYW4gaW50ZXJjZXB0IGV4Y2VwdGlvbnMgYW5kIHByb2Nlc3MgdGhlbSB1c2luZyB0aGUgc3RhbmRhcmRcclxuXHQvLyBlcnJvciBzZXJ2aWNlLiBVbmxlc3MgdGhlIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGFscmVhZHkgYSBib3VuZCBmdW5jdGlvbiwgaXQgd2lsbCBiZSBjYWxsZWRcclxuXHQvLyB3aXRoIFwidGhpc1wiIHNldCB0byBlaXRoZXIgdGhlIFwiZXZlbnQudGhhdFwiIG9iamVjdCBvciwgaWYgdGhlIGxhdHRlciBpcyB1bmRlZmluZWQsIHRvIHRoZVxyXG5cdC8vIFwiY3JlYXRvclwiIG9iamVjdCwgd2hpY2ggaXMgdGhlIGNsYXNzLWJhc2VkIGNvbXBvbmVudCB0aGF0IGNyZWF0ZWQgdGhlIGVsZW1lbnQgaSBpdHMgcmVuZGVyXHJcblx0Ly8gbWV0aG9kLlxyXG5cdHByaXZhdGUgY3JlYXRlRXZlbnRXcmFwcGVyKCBldmVudDogRXZlbnRSdW5UaW1lRGF0YSk6IG1pbS5FdmVudEZ1bmNUeXBlPEV2ZW50PlxyXG5cdHtcclxuXHRcdHJldHVybiB0aGlzLndyYXBDYWxsYmFjayggZXZlbnQub3JnRnVuYywgZXZlbnQudGhhdCA/IGV2ZW50LnRoYXQgOiB0aGlzLmNyZWF0b3IpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG5cdHByaXZhdGUgYWRkQ3VzdG9tQXR0cnMoKTogdm9pZFxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdGlmICghdGhpcy5jdXN0b21BdHRycylcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiRWxtVk4uYWRkQ3VzdG9tQXR0cnMgY2FsbGVkIHdpdGggdGhpcy5jdXN0b21BdHRycyA9IG51bGxcIik7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhbmQgaW5pdGlhbGl6ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlcnNcclxuXHRcdGZvciggbGV0IG5hbWUgaW4gdGhpcy5jdXN0b21BdHRycylcclxuXHRcdHtcclxuXHRcdFx0bGV0IGN1c3RvbUF0dHIgPSB0aGlzLmN1c3RvbUF0dHJzW25hbWVdO1xyXG5cclxuXHRcdFx0Ly8gY3JlYXRlIGN1c3RvbSBwcm9wZXJ0eSBoYW5kbGVyLiBJZiB3ZSBjYW5ub3QgY3JlYXRlIHRoZSBoYW5kbGVyLCByZW1vdmUgdGhlIHByb3BlcnR5XHJcblx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgY3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgY3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgY3JlYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuY3VzdG9tQXR0cnNbbmFtZV07XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGVzdHJveXMgY3VzdG9tIGF0dHJpYnV0ZXMgb2YgdGhpcyBlbGVtZW50LlxyXG5cdHByaXZhdGUgcmVtb3ZlQ3VzdG9tQXR0cnMoIGlzUmVtb3ZhbDogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHRpZiAoIXRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcIkVsbVZOLnJlbW92ZUN1c3RvbUF0dHJzIGNhbGxlZCB3aXRoIHRoaXMuY3VzdG9tQXR0cnMgPSBudWxsXCIpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRmb3IoIGxldCBuYW1lIGluIHRoaXMuY3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGxldCBjdXN0b21BdHRyID0gdGhpcy5jdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0dHJ5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRjdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBpc1JlbW92YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyBjdXN0b20gYXR0cmlidXRlcyBvZiB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSB1cGRhdGVDdXN0b21BdHRycyggbmV3Q3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9KTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBvbGRDdXN0b21BdHRycyA9IHRoaXMuY3VzdG9tQXR0cnM7XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGV4aXN0aW5nIGN1c3RvbSBwcm9wZXJ0aWVzLCByZW1vdmUgdGhvc2UgdGhhdCBhcmUgbm90IGZvdW5kIGFtb25nIHRoZSBuZXdcclxuXHRcdC8vIG9uZXMgYW5kIHVwZGF0ZSB0aG9zZSB3aG9zZSB2YWx1ZSBoYXMgY2hhbmdlZFxyXG5cdFx0aWYgKG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBuYW1lIGluIG9sZEN1c3RvbUF0dHJzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Y29uc3Qgb2xkQ3VzdG9tQXR0ciA9IG9sZEN1c3RvbUF0dHJzW25hbWVdO1xyXG5cdFx0XHRcdGNvbnN0IG5ld0N1c3RvbUF0dHIgPSBuZXdDdXN0b21BdHRycyA/IG5ld0N1c3RvbUF0dHJzW25hbWVdIDogdW5kZWZpbmVkO1xyXG5cdFx0XHRcdGlmICghbmV3Q3VzdG9tQXR0cilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBuZXcgcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgcmVtb3ZlIHRoZSBvbGQgcHJvcGVydHkgYW5kXHJcblx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgaXRzIGhhbmRsZXJcclxuXHRcdFx0XHRcdHRyeVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRvbGRDdXN0b21BdHRyLmhhbmRsZXIudGVybWluYXRlKCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCBgRXJyb3IgdGVybWluYXRpbmcgaGFuZGxlciBmb3IgY3VzdG9tIGF0dHJpYnV0ZSAnJHtuYW1lfSc6ICR7ZXJyLm1lc3NhZ2V9YCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyB1cGRhdGUgdGhlIGN1c3RvbSBwcm9wZXJ0eSBhbmQgcmVtZW1iZXIgdGhlIG5ldyB2YWx1ZVxyXG5cdFx0XHRcdFx0dHJ5XHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG9sZEN1c3RvbUF0dHIuaGFuZGxlci51cGRhdGUoIG5ld0N1c3RvbUF0dHIudmFsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNhdGNoKCBlcnIpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciB1cGRhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bmV3Q3VzdG9tQXR0ci5oYW5kbGVyID0gb2xkQ3VzdG9tQXR0ci5oYW5kbGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBuZXcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIGFkZCB0aG9zZSB0aGF0IGFyZSBub3QgZm91bmQgYW1vbmcgdGhlIG9sZCBvbmVzXHJcblx0XHRpZiAobmV3Q3VzdG9tQXR0cnMpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IG5hbWUgaW4gbmV3Q3VzdG9tQXR0cnMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkQ3VzdG9tQXR0cnMgJiYgKG5hbWUgaW4gb2xkQ3VzdG9tQXR0cnMpKVxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHRcdGxldCBuZXdDdXN0b21BdHRyID0gbmV3Q3VzdG9tQXR0cnNbbmFtZV07XHJcblxyXG5cdFx0XHRcdC8vIGNyZWF0ZSBjdXN0b20gcHJvcGVydHkgaGFuZGxlci4gSWYgd2UgY2Fubm90IGNyZWF0ZSB0aGUgaGFuZGxlciwgcmVtb3ZlIHRoZSBwcm9wZXJ0eVxyXG5cdFx0XHRcdC8vIGZyb20gb3VyIG9iamVjdC5cclxuXHRcdFx0XHR0cnlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRuZXdDdXN0b21BdHRyLmhhbmRsZXIgPSBuZXcgbmV3Q3VzdG9tQXR0ci5pbmZvLmhhbmRsZXJDbGFzcyggdGhpcywgbmV3Q3VzdG9tQXR0ci52YWwsIG5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCggZXJyKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoIGBFcnJvciBjcmVhdGluZyBoYW5kbGVyIGZvciBjdXN0b20gYXR0cmlidXRlICcke25hbWV9JzogJHtlcnIubWVzc2FnZX1gKTtcclxuXHRcdFx0XHRcdGRlbGV0ZSBuZXdDdXN0b21BdHRyc1tuYW1lXTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VzdG9tQXR0cnMgPSBuZXdDdXN0b21BdHRycztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm9kZSdzIGtleS4gVGhlIGRlcml2ZWQgY2xhc3NlcyBzZXQgaXQgYmFzZWQgb24gdGhlaXIgcmVzcGVjdGl2ZSBjb250ZW50LiBBIGtleVxyXG5cdC8vIGNhbiBiZSBvZiBhbnkgdHlwZS5cclxuXHRwdWJsaWMga2V5OiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIFVwZGF0ZVN0cmF0ZWd5IG9iamVjdCBkZWZpbmluZyBkaWZmZXJlbnQgYXNwZWN0cyBvZiBub2RlIGJlaGF2aW9yIGR1cmluZyB1cGRhdGVzLlxyXG5cdHB1YmxpYyB1cGRhdGVTdHJhdGVneTogbWltLlVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBBcnJheSBvZiBjaGlsZHJlbiBvYmplY3RzLlxyXG5cdHByaXZhdGUgY2hpbGRyZW46IGFueVtdO1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LiBUaGUgcmVmIHByb3BlcnR5IGNhbiBiZSBjaGFuZ2VkIG9uIHVwZGF0ZS5cclxuXHRwcml2YXRlIHJlZjogbWltLlJlZlByb3BUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIGF0dHJpYnV0ZSBuYW1lcyBhbmQgdGhlaXIgY3VycmVudCB2YWx1ZXMuXHJcblx0cHJpdmF0ZSBhdHRyczogeyBbbmFtZTogc3RyaW5nXTogQXR0clJ1blRpbWVEYXRhIH07XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHNlcnZlcyBhcyBhIG1hcCBiZXR3ZWVuIG5hbWVzIG9mIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIHBhcmFtZXRlcnMuXHJcblx0cHJpdmF0ZSBldmVudHM6IHsgW25hbWU6IHN0cmluZ106IEV2ZW50UnVuVGltZURhdGEgfTtcclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgc2VydmVzIGFzIGEgbWFwIGJldHdlZW4gbmFtZXMgb2YgY3VzdG9tIGVsZW1lbnQgcHJvcGVydGllcyBhbmQgdGhlaXIgcmVzcGVjdGl2ZVxyXG5cdC8vIGhhbmRsZXIgb2JqZWN0cyBhbmQgdmFsdWVzLlxyXG5cdHByaXZhdGUgY3VzdG9tQXR0cnM6IHsgW25hbWU6IHN0cmluZ106IEN5c3RvbUF0dHJSdW5UaW1lRGF0YSB9O1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFR5cGUgZGVmaW5pbmcgdGhlIGluZm9ybWF0aW9uIHdlIGtlZXAgYWJvdXQgZWFjaCByZWd1bGFyIGF0dHJpYnV0ZVxyXG5pbnRlcmZhY2UgQXR0clJ1blRpbWVEYXRhXHJcbntcclxuXHQvLyBJbmZvcm1hdGlvbiBhYm91dCB0aGlzIGF0dHJpYnV0ZSAtIGNhbiBiZSBudWxsXHJcblx0aW5mbzogQXR0clByb3BJbmZvO1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHZhbDogYW55O1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBUeXBlIGRlZmluaW5nIHRoZSBpbmZvcm1hdGlvbiB3ZSBrZWVwIGFib3V0IGVhY2ggZXZlbnQgbGlzdGVuZXJcclxuaW50ZXJmYWNlIEV2ZW50UnVuVGltZURhdGFcclxue1xyXG5cdC8vIEluZm9ybWF0aW9uIGFib3V0IHRoaXMgZXZlbnQgLSBjYW4gYmUgbnVsbFxyXG5cdGluZm86IEV2ZW50UHJvcEluZm87XHJcblxyXG5cdC8vIE9yaWdpbmFsIGV2ZW50IGNhbGxiYWNrIHBhc3NlZCBhcyB0aGUgdmFsdWUgb2YgdGhlIGV2ZW50IHByb3BlcnR5IGluIEpTWFxyXG5cdG9yZ0Z1bmM6IG1pbS5FdmVudEZ1bmNUeXBlPGFueT47XHJcblxyXG5cdC8vIE9iamVjdCB0aGF0IHdpbGwgYmUgcmVmZXJlbmNlZCBieSBcInRoaXNcIiB3aXRoaW4gdGhlIGludm9rZWQgZnVuY3Rpb25cclxuXHR0aGF0PzogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIGV2ZW50IHNob3VsZCBiZSB1c2VkIGFzIENhcHR1cmluZyAodHJ1ZSkgb3IgQnViYmxpbmcgKGZhbHNlKVxyXG5cdHVzZUNhcHR1cmU/OiBib29sZWFuO1xyXG5cclxuXHQvLyBXcmFwcGVyIGZ1bmN0aW9uIHRoYXQgd2UgY3JlYXRlIGFuZCBiaW5kIHRvIG91ciBub2RlIGFuZCB0aGUgb3JpZ2luYWwgZnVuY3Rpb24uIFdlIG5lZWRcclxuXHQvLyB0aGlzIHdyYXBwZXIgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9uIGluIHRoZSBjYWxsYmFjayBhbmQgcGFzcyB0aGVtIG9uIHRvIGFuIGVycm9yXHJcblx0Ly8gaGFuZGxpbmcgc2VydmljZS4gVGhlIHdyYXBwZXIgaXMgbWFya2VkIG9wdGlvbmFsIGJlY2F1c2UgaXQgaXMgY3JlYXRlZCBvbmx5IGlmIGEgbmV3XHJcblx0Ly8gZXZlbnQgbGlzdGVuZXIgaXMgYWRkZWQ7IHRoYXQgaXMsIGlmIGR1cmluZyB1cGRhdGUsIHRoZSBldmVudCBsaXN0ZW5lciBmdW5jdGlvbiBpcyB0aGVcclxuXHQvLyBzYW1lLCB0aGVyZSBpcyBubyBuZWVkIHRvIGNyZWF0ZSBuZXcgd3JhcHBlciBiZWNhdXNlIHRoZSBvbGQgb25lIHdpbGwgYmUgdXNlZC5cclxuXHR3cmFwcGVyPzogIG1pbS5FdmVudEZ1bmNUeXBlPEV2ZW50PjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gVHlwZSBkZWZpbmluZyB0aGUgaW5mb3JtYXRpb24gd2Uga2VlcCBhYm91dCBlYWNoIGN1c3RvbSBwcm9wZXJ0eS5cclxuaW50ZXJmYWNlIEN5c3RvbUF0dHJSdW5UaW1lRGF0YVxyXG57XHJcblx0Ly8gSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBjdXN0b20gYXR0cmlidXRlIC0gY2Fubm90IGJlIG51bGxcclxuXHRpbmZvOiBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cdC8vIEN1cnJlbnQgdmFsdWUgb2YgdGhlIHByb3BlcnR5XHJcblx0dmFsOiBhbnk7XHJcblxyXG5cdC8vIEhhbmRsZXIgb2JqZWN0IHRoYXQga25vd3MgdG8gZGVhbCB3aXRoIHRoZSBwcm9wZXJ0eSB2YWx1ZXNcclxuXHRoYW5kbGVyOiBtaW0uSUN1c3RvbUF0dHJpYnV0ZUhhbmRsZXI8YW55PjtcclxufTtcclxuXHJcblxyXG5cclxuLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0eSB2YWx1ZSBpcyBvZiB0aGUgdHlwZSB0aGF0IGlzIHVzZWQgZm9yIGV2ZW50IGhhbmRsZXJzLlxyXG4vLyBJZiB5ZXMsIHRoZW4gcmV0dXJucyBFdmVudFJ1blRpbWVEYXRhIG9iamVjdDsgb3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cclxuZnVuY3Rpb24gZ2V0UHJvcEFzRXZlbnRSdW5UaW1lRGF0YSggaW5mbzogRXZlbnRQcm9wSW5mbywgcHJvcFZhbDogYW55KTogRXZlbnRSdW5UaW1lRGF0YVxyXG57XHJcblx0aWYgKHR5cGVvZiBwcm9wVmFsID09PSBcImZ1bmN0aW9uXCIpXHJcblx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT4gfTtcclxuXHRlbHNlIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWwpKVxyXG5cdHtcclxuXHRcdGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMilcclxuXHRcdHtcclxuXHRcdFx0aWYgKHR5cGVvZiBwcm9wVmFsWzFdID09PSBcImJvb2xlYW5cIilcclxuXHRcdFx0XHRyZXR1cm4geyBpbmZvLCBvcmdGdW5jOiBwcm9wVmFsWzBdIGFzIG1pbS5FdmVudEZ1bmNUeXBlPGFueT4sIHVzZUNhcHR1cmU6IHByb3BWYWxbMV0gYXMgYm9vbGVhbiB9O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdIH07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChwcm9wVmFsLmxlbmd0aCA9PT0gMylcclxuXHRcdFx0cmV0dXJuIHsgaW5mbywgb3JnRnVuYzogcHJvcFZhbFswXSBhcyBtaW0uRXZlbnRGdW5jVHlwZTxhbnk+LCB0aGF0OiBwcm9wVmFsWzFdLCB1c2VDYXB0dXJlOiBwcm9wVmFsWzJdIGFzIGJvb2xlYW4gfTtcclxuXHR9XHJcblxyXG5cdC8vIGZvciBhbGwgb3RoZXIgdHlwZSBjb21iaW5hdGlvbnMgdGhlIHByb3BlcnR5IGlzIG5vdCB0cmVhdGVkIGFzIGFuIGV2ZW50IGhhbmRsZXJcclxuXHRyZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7RE4sIFZOLCBWTlVwZGF0ZURpc3B9IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtWTkJhc2V9IGZyb20gXCIuL1ZOQmFzZVwiXHJcbmltcG9ydCB7c19jdXJyZW50Q2xhc3NDb21wfSBmcm9tIFwiLi9TY2hlZHVsZXJcIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBFbmNhcHN1bHRlcyBhIHJlbmRlcmluZyBmdW5jdGlvbiwgd2hpY2ggaXMgdXN1YWxseSBhIG1ldGhvZCBvZiBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudC4gVGhpc1xyXG4gKiBvYmplY3QgcmVtZW1iZXJzIHRoZSBmdW5jdGlvbiwgdGhlIFwidGhpc1wiIHBvaW50ZXIgdG8gdXNlIHdoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24gYW5kIHRoZVxyXG4gKiBhcmd1bWVudHMgdG8gcGFzcyB0byBpdC4gVGhpcyBhbGxvd3MgcmUtcmVuZGVyaW5nIG9ubHkgdGhlIHBhcnQgb2YgdGhlIHBhcmVudCBjb21wb25lbnQgYXNcclxuICogdGhvdWdoIHRoZSBtZXRob2Qgd2VyZSBhIGZ1bGwgYmxvd24gaW5kZXBlbmRlbnQgY29tcG9uZW50LiBVcGRhdGluZyB0aGUgbm9kZXMgaXMgYWNjb21wbGlzaGVkXHJcbiAqIHVzaW5nIHRoZSBGdW5jUHJveHkgc3RhdGljIHVwZGF0ZSBtZXRob2QgYWNjZXB0aW5nIHRoZSBmdW5jdGlvbiB0byBiZSB1cGRhdGVkLlxyXG4gKiBcclxuICogVGhlIHNhbWUgZnVuY3Rpb24gY2FuIGJlIHVzZWQgbXVsdGlwbGUgdGltZXMgd2l0aGluIHRoZSBwYXJlbnQgY29tcG9uZW50J3MgcmVuZGVyKCkgbWV0aG9kIC1cclxuICogZXNwZWNpYWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgaWYgaXQgaXMgY2FsbGVkIHdpdGggZGlmZmVyZW50IHBhcmFtZXRlcnMuIFRvIGRpc3Rpbmd1aXNoXHJcbiAqIGJldHdlZW4gbXVsdGlwbGUgbm9kZXMgd2hlbiB1cGRhdGluZyAodXNpbmcgRnVuY1Byb3h5LnVwZGF0ZSksIGEgdW5pcXVlIGtleSBtdXN0IGJlIGFzc2lnbmVkLlxyXG4gKiBUaGUgbm9kZSB0aGVuIGNyZWF0ZXMgYSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZS4gVGhpcyBsaW5rIGlzIHJlbW92ZWQgd2hlbiB0aGVcclxuICogbm9kZSBpcyB1bm1vdW50ZWQuIFRoZSBrZXkgaXMgb3B0aW9uYWwgaWYgdGhlIGZ1bmN0aW9uIGlzIHVzZWQgb25seSBvbmNlIGluIHRoZSBwYXJlbnQnc1xyXG4gKiByZW5kZXIgbWV0aG9kLiBJZiB0aGUgZnVuY3Rpb24gaXMgdXNlZCBtb3JlIHRoYW4gb25jZSBhbmQga2V5cyBhcmUgbm90IHByb3ZpZGVkIG9yIGFyZSB0aGUgc2FtZVxyXG4gKiBNaW1ibGUgd2lsbCBpc3N1ZSBhbiBlcnJvci5cclxuICogXHJcbiAqIFRoZSBsaW5rIGJldHdlZW4gdGhlIGZ1bmN0aW9uIGFuZCB0aGUgbm9kZXMgdGhhdCB1c2UgdGhpcyBmdW5jdGlvbiBpcyBrZXB0IGluIGEgbWFwIGZyb20gdGhlXHJcbiAqIGtleXMgdG8gdGhlIG5vZGVzLiBUaGUgbWFwIGlzIHN0b3JlZCBpbiBhIGN1c3RvbSBwcm9wZXJ0eSBvbiB0aGUgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBGdW5jUHJveHlWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0Y29uc3RydWN0b3IoIHByb3BzOiBtaW0uRnVuY1Byb3h5UHJvcHMpXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnR5cGUgPSBtaW0uVk5UeXBlLkZ1bmNQcm94eTtcclxuXHRcdHRoaXMuZnVuYyA9IHByb3BzLmZ1bmM7XHJcblx0XHR0aGlzLnRoaXNBcmcgPSBwcm9wcy50aGlzQXJnIHx8IHNfY3VycmVudENsYXNzQ29tcDtcclxuXHRcdHRoaXMuYXJncyA9IHByb3BzLmFyZ3M7XHJcblx0XHR0aGlzLmFyZ3NSZXBsYWNlZCA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMua2V5ID0gcHJvcHMua2V5O1xyXG5cclxuXHRcdC8vIGlmIGEga2V5IHdhcyBub3QgcHJvdmlkZWQgd2UgdXNlIHRoZSB2YWx1ZSBvZiB0aGlzQXJnICh3aGljaCBtaWdodCBiZSB0aGUgY3VycmVudFxyXG5cdFx0Ly8gY29tcG9uZW50KSBhcyBhIGtleS4gSWYgdGhhdCBpcyB1bmRlZmluZWQgdG9vIHdlIHVzZSB0aGUgZnVuY3Rpb24gaXRzZWxmIGFzIGEga2V5LlxyXG5cdFx0dGhpcy5saW5rS2V5ID0gcHJvcHMua2V5IHx8IHRoaXMudGhpc0FyZyB8fCB0aGlzLmZ1bmM7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIHJlcGxhY2VBcmdzKCBhcmdzOiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmFyZ3MgPSBhcmdzO1xyXG5cdFx0dGhpcy5hcmdzUmVwbGFjZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIHRoaXMgbm9kZSBzaG91bGQgcmUtcmVuZGVyIGR1cmluZyB1cGRhdGUgZXZlbiBpdCBpcyB0aGUgc2FtZVxyXG5cdCAqIHBoeXNpY2FsIG5vZGUgaW5zdGFuY2UuIFRoaXMgaXMgbmVlZGVkIGZvciBub2RlcyB0aGF0IHNlcnZlIGFzIGEgcHJveHkgdG8gYSByZW5kZXJpbmdcclxuXHQgKiBmdW5jdGlvbiBhbmQgdGhhdCBmdW5jdGlvbiBtdXN0IGJlIGludm9rZWQgZXZlbiBub25lIG9mIHRoZSBub2RlIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXQgcmVuZGVyT25VcGRhdGUoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLmFyZ3NSZXBsYWNlZDsgfTtcclxuXHJcblxyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0Ly8gbm9kZSBuYW1lIGlzIHRoZSBmdW5jdGlvbidzIG5hbWUgcGx1cyBrZXkgKG9yIGlkKSBpZiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgbmFtZSA9IHRoaXMuZnVuYy5uYW1lO1xyXG5cdFx0aWYgKHRoaXMua2V5ICE9IG51bGwpXHJcblx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRyZXR1cm4gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGxpc3Qgb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZVxyXG5cdHB1YmxpYyByZW5kZXIoKTogYW55XHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLlJlbmRlcmVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0dGhpcy5hcmdzUmVwbGFjZWQgPSBmYWxzZTtcclxuXHRcdHJldHVybiB0aGlzLmZ1bmMuYXBwbHkoIHRoaXMudGhpc0FyZywgdGhpcy5hcmdzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpbmtOb2RlVG9GdW5jKCk7XHJcblx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMudW5saW5rTm9kZUZyb21GdW5jKCk7XHJcblx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5EZWxldGVkKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuXHJcblx0cHVibGljIGlzVXBkYXRlUG9zc2libGUoIG5ld1ZOOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgbmV3RnVuY1Byb3h5Vk4gPSBuZXdWTiBhcyBGdW5jUHJveHlWTjtcclxuXHJcblx0XHQvLyB1cGRhdGUgaXMgcG9zc2libGUgaWYgaXQgaXMgdGhlIHNhbWUgZnVuY3Rpb24gb2JqZWN0IGFuZCB0aGUgc2FtZSB0aGlzQXJnIHByb3BlcnR5XHJcblx0XHRyZXR1cm4gdGhpcy5mdW5jID09PSBuZXdGdW5jUHJveHlWTi5mdW5jICYmIHRoaXMudGhpc0FyZyA9PT0gbmV3RnVuY1Byb3h5Vk4udGhpc0FyZztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNQcm94eVZOID0gbmV3Vk4gYXMgRnVuY1Byb3h5Vk47XHJcblxyXG5cdFx0Ly8gcmVtZWJlciB0aGUgbmV3IHZhbHVlIG9mIHRoZSBrZXkgcHJvcGVydHkgKGV2ZW4gaWYgaXQgaXMgdGhlIHNhbWUpXHJcblx0XHR0aGlzLmtleSA9IG5ld0Z1bmNQcm94eVZOLmtleTtcclxuXHRcdHRoaXMubGlua0tleSA9IG5ld0Z1bmNQcm94eVZOLmxpbmtLZXk7XHJcblxyXG5cdFx0Ly8gdGFrZSBhcmd1bWVudHMgZnJvbSB0aGUgbmV3IG5vZGU7IHRoZSBmdW5jdGlvbiBpdHNlbGYgYW5kIFwidGhpc0FyZ1wiIHJlbWFpbiB0aGUgc2FtZS5cclxuXHRcdHRoaXMuYXJncyA9IG5ld0Z1bmNQcm94eVZOLmFyZ3M7XHJcblxyXG5cdFx0Ly8gaW5kaWNhdGUgdGhhdCBpdCBpcyBuZWNlc3NhcnkgdG8gdXBkYXRlIHRoZSBzdWItbm9kZXMuIFRoZSBjb21taXRVcGRhdGVcclxuXHRcdC8vIG1ldGhvZCBzaG91bGQgTk9UIGJlIGNhbGxlZC5cclxuXHRcdHJldHVybiBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyBmaW5kVk4oIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnkpOiBGdW5jUHJveHlWTlxyXG5cdHtcclxuXHRcdC8vIGlmIHRoZSBrZXkgaXMgdW5kZWZpbmVkLCB3ZSB1c2UgdGhlIGZ1bmN0aW9uIG9iamVjdCBpdHNlbGZcclxuXHRcdGxldCBsaW5rS2V5OiBhbnkgPSBrZXkgfHwgc19jdXJyZW50Q2xhc3NDb21wIHx8IGZ1bmM7XHJcblxyXG5cdFx0Ly8gdHJ5IHRvIGZpbmQgdGhlIGtleSBpbiB0aGUgbWFwIG9uIHRoZSBmdW5jdGlvbiBvYmplY3Q7IGlmIG5vdCBmb3VuZCwgZG8gbm90aGluZ1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IGZ1bmNbXCJfX2tleXMtdG8tbm9kZXNcIl07XHJcblx0XHRyZXR1cm4gbWFwS2V5c1RvTm9kZXMgJiYgbWFwS2V5c1RvTm9kZXMuZ2V0KCBsaW5rS2V5KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXRpYyB1cGRhdGUoIGZ1bmM6IEZ1bmN0aW9uLCBrZXk/OiBhbnksIGFyZ3M/OiBhbnlbXSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBmaW5kIHRoZSBub2RlXHJcblx0XHRsZXQgdm4gPSBGdW5jUHJveHlWTi5maW5kVk4oIGZ1bmMsIGtleSk7XHJcblx0XHRpZiAoIXZuKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dm4uYXJncyA9IGFyZ3M7XHJcblx0XHR2bi5hcmdzUmVwbGFjZWQgPSB0cnVlO1xyXG5cdFx0dm4ucmVxdWVzdFVwZGF0ZSgpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRwcml2YXRlIGxpbmtOb2RlVG9GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZnVuYzogYW55ID0gdGhpcy5mdW5jO1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IGZ1bmNbXCJfX2tleXMtdG8tbm9kZXNcIl07XHJcblx0XHRpZiAoIW1hcEtleXNUb05vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRtYXBLZXlzVG9Ob2RlcyA9IG5ldyBNYXA8YW55LEZ1bmNQcm94eVZOPigpO1xyXG5cdFx0XHRmdW5jW1wiX19rZXlzLXRvLW5vZGVzXCJdID0gbWFwS2V5c1RvTm9kZXM7XHJcblx0XHR9XHJcblxyXG5cdFx0bWFwS2V5c1RvTm9kZXMuc2V0KCB0aGlzLmxpbmtLZXksIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cdHByaXZhdGUgdW5saW5rTm9kZUZyb21GdW5jKCk6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgZnVuYzogYW55ID0gdGhpcy5mdW5jO1xyXG5cdFx0bGV0IG1hcEtleXNUb05vZGVzOiBNYXA8YW55LEZ1bmNQcm94eVZOPiA9IGZ1bmNbXCJfX2tleXMtdG8tbm9kZXNcIl07XHJcblx0XHRpZiAobWFwS2V5c1RvTm9kZXMpXHJcblx0XHRcdG1hcEtleXNUb05vZGVzLmRlbGV0ZSggdGhpcy5saW5rS2V5KTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBGdW5jdGlvbiB0byBiZSBpbnZva2VkIGR1cmluZyB0aGUgcmVuZGVyaW5nXHJcblx0cHJpdmF0ZSBmdW5jOiBGdW5jdGlvbjtcclxuXHJcblx0Ly8gT2JqZWN0IHRvIGJlIHVzZWQgYXMgXCJ0aGlzXCIgd2hlbiBpbnZva2luZyB0aGUgZnVuY3Rpb24uXHJcblx0cHJpdmF0ZSB0aGlzQXJnOiBhbnk7XHJcblxyXG5cdC8vIE9wdGlvbmFsIGFyZ3VtZW50cyB0byBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxyXG5cdHByaXZhdGUgYXJnczogYW55W107XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB3aGV0aGVyIGFyZ3VtZW50cyBoYXZlIGJlZW4gcmVwbGFjZWQuIFRoaXMgaXMgbmVlZGVkIHRvIGRldGVybWluZSB3aGV0aGVyXHJcblx0Ly8gdGhlIG5vZGUgc2hvdWxkIGJlIHJlLXJlbmRlcmVkOyB0aGF0IGlzLCB0aGUgZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZC5cclxuXHRwcml2YXRlIGFyZ3NSZXBsYWNlZDogYm9vbGVhbjtcclxuXHJcblx0Ly8gS2V5IHRoYXQgbGlua3MgdGhlIGZ1bmN0aW9uIGFuZCB0aGlzIG5vZGUuIFRoaXMga2V5IGlzIGVpdGhlciBlcXVhbHMgdG8gdGhlIGtleSBwcm92aWRlZFxyXG5cdC8vIGluIHRoZSBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3Igb3IgdG8gdGhlIGN1cnJlbnQgY29tcG9uZW50IG9yIHRvIHRoZSBmdW5jdGlvblxyXG5cdC8vIGl0c2VsZi5cclxuXHRwcml2YXRlIGxpbmtLZXk6IGFueTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGZ1bmN0aW9uIGEuay5hLiBzdGF0ZWxlc3MgY29tcG9uZW50LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEZ1bmNWTiBleHRlbmRzIFZOQmFzZVxyXG57XHJcblx0LyoqIERldGVybWluZXMgd2hldGhlciB0aGlzIG5vZGUgY29ycmVzcG9uZHMgdG8gYSBmcmFnbWVudCBwbGFjZWhvbGRlci4gKi9cclxuXHRwdWJsaWMgc3RhdGljIGlzVk5hRnJhZ21lbnQoIHZuOiBWTik6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gKHZuIGFzIEZ1bmNWTikuZnVuYyA9PT0gbWltLkZyYWdtZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHRjb25zdHJ1Y3RvciggZnVuYzogbWltLkZ1bmNDb21wVHlwZSwgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5GdW5jQ29tcDtcclxuXHRcdHRoaXMuZnVuYyA9IGZ1bmM7XHJcblxyXG5cdFx0Ly8gY29weSBwcm9wZXJ0aWVzIHRvIG91ciBvd24gb2JqZWN0IGV4Y2x1ZGluZyBmcmFtZXdvcmstaGFuZGxlZCBrZXlcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy5wcm9wc1twcm9wTmFtZV0gPSBwcm9wVmFsO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBpZiBrZXkgcHJvcGVydHkgd2FzIG5vdCBzcGVjaWZpZWQsIHVzZSBpZDsgaWYgaWQgd2FzIG5vdCBzcGVjaWZpZWQga2V5IHdpbGwgcmVtYWluXHJcblx0XHRcdC8vIHVuZGVmaW5lZC5cclxuXHRcdFx0aWYgKHRoaXMua2V5ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0dGhpcy5rZXkgPSBwcm9wcy5pZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lbWJlciBjaGlsZHJlbiBhcyBwYXJ0IG9mIHByb3BzXHJcblx0XHR0aGlzLnByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XHJcblx0fTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRwdWJsaWMgZ2V0IHN0YXRzQ2F0ZWdvcnkoKTogU3RhdHNDYXRlZ29yeSB7IHJldHVybiBTdGF0c0NhdGVnb3J5LkNvbXA7IH1cclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmdcclxuXHR7XHJcblx0XHQvLyBub2RlIG5hbWUgaXMgdGhlIGZ1bmN0aW9uJ3MgbmFtZSBwbHVzIGtleSAob3IgaWQpIGlmIHNwZWNpZmllZC5cclxuXHRcdGxldCBuYW1lID0gdGhpcy5mdW5jLm5hbWU7XHJcblx0XHRpZiAodGhpcy5rZXkgIT0gbnVsbClcclxuXHRcdFx0bmFtZSArPSBcIkBcIiArIHRoaXMua2V5O1xyXG5cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHZW5lcmF0ZXMgbGlzdCBvZiBzdWItbm9kZXMgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHN0YXRlXHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5SZW5kZXJlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmZ1bmMoIHRoaXMucHJvcHMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgbm9kZSBoYXMgYmVlbiBjb25zdHJ1Y3RlZC5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdFx0e1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0XHQvLyBET00gdHJlZS5cclxuXHRcdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRcdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0XHR7XHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG5cdFx0fVxyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgdXBkYXRlIG9mIHRoaXMgbm9kZSBmcm9tIHRoZSBnaXZlbiBub2RlIGlzIHBvc3NpYmxlLiBUaGUgbmV3Vk5cclxuXHQvLyBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0byBwb2ludCB0byBhIFZOIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBub2RlLlxyXG5cdHB1YmxpYyBpc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTjogVk4pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gdXBkYXRlIGlzIHBvc3NpYmxlIGlmIGl0IGlzIHRoZSBzYW1lIGZ1bmN0aW9uIG9iamVjdFxyXG5cdFx0cmV0dXJuIHRoaXMuZnVuYyA9PT0gKG5ld1ZOIGFzIEZ1bmNWTikuZnVuYztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0bGV0IG5ld0Z1bmNWTiA9IG5ld1ZOIGFzIEZ1bmNWTjtcclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3RnVuY1ZOLmtleTtcclxuXHJcblx0XHQvLyB0YWtlIHByb3BlcnRpZXMgZnJvbSB0aGUgbmV3IG5vZGVcclxuXHRcdHRoaXMuZnVuYyA9IG5ld0Z1bmNWTi5mdW5jO1xyXG5cdFx0dGhpcy5wcm9wcyA9IG5ld0Z1bmNWTi5wcm9wcztcclxuXHJcblx0XHQvLyBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2R1Y2VkIGJ5IGEgZnVuY3Rpb24gbWF5IGRlcGVuZCBvbiBmYWN0b3JzIGJleW9uZCBwcm9wZXJ0aWVzLFxyXG5cdFx0Ly8gd2UgYWx3YXlzIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLk5vQ29tbWl0RG9SZW5kZXI7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIEZ1bmN0aW9uIGZvciBhIHN0YXRlbGVzcyBjb21wb25lbnQuIFRoZSBmdW5jdGlvbiBpcyBpbnZva2VkIGR1cmluZyB0aGUgcmVuZGVyaW5nIHByb2Nlc3MuXHJcblx0cHJpdmF0ZSBmdW5jOiBtaW0uRnVuY0NvbXBUeXBlO1xyXG5cclxuXHQvLyBQcm9wZXJ0aWVzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudCwgZnVuY3Rpb24gb3IgZWxlbWVudC5cclxuXHRwcml2YXRlIHByb3BzOiBhbnk7XHJcblxyXG5cdC8vIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXlcclxuXHQvLyBjYW4gYmUgb2YgYW55IHR5cGUuXHJcblx0cHVibGljIGtleTogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge0NsYXNzQ29tcFZOfSBmcm9tIFwiLi9DbGFzc0NvbXBWTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBjbGFzcyBJbnN0YW5jZVZOIGlzIGEgbm9kZSB0aGF0IGhvbGRzIGFuIGluc3RhbmNlIG9mIGFuIElDb21wb25lbnQtaW1wbGVtZW50aW5nIG9iamVjdC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBJbmRlcGVuZGVudENvbXBWTiBleHRlbmRzIENsYXNzQ29tcFZOIGltcGxlbWVudHMgbWltLklJbmRlcGVuZGVudENvbXBWTlxyXG57XHJcblx0Y29uc3RydWN0b3IoIGNvbXA6IG1pbS5JQ29tcG9uZW50KVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5JbmRlcGVuZGVudENvbXA7XHJcblx0XHR0aGlzLmNvbXAgPSBjb21wO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZVxyXG5cdFx0cmV0dXJuIHRoaXMuY29tcC5kaXNwbGF5TmFtZSA/IHRoaXMuY29tcC5kaXNwbGF5TmFtZSA6IHRoaXMuY29tcC5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLiBUaGUgaW5zdGFuY2Ugb2Ygb3VyIGNvbXBvbmVudCBpcyB0aGUga2V5LlxyXG5cdHB1YmxpYyBnZXQga2V5KCk6IGFueSB7IHJldHVybiB0aGlzLmNvbXA7IH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMud2lsbE1vdW50SW5zdGFuY2UoIHRoaXMuY29tcCk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMud2lsbFVubW91bnRJbnN0YW5jZSggdGhpcy5jb21wKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUHJlcGFyZXMgdGhpcyBub2RlIHRvIGJlIHVwZGF0ZWQgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGlmIHVwZGF0ZVxyXG5cdC8vIGhhcHBlbnMgYXMgYSByZXN1bHQgb2YgcmVuZGVyaW5nIHRoZSBwYXJlbnQgbm9kZXMuIFRoZSBuZXdWTiBwYXJhbWV0ZXIgaXMgZ3VhcmFudGVlZCB0b1xyXG5cdC8vIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIFRoZSByZXR1cm5lZCBvYmplY3QgaW5kaWNhdGVzIHdoZXRoZXIgY2hpbGRyZW5cclxuXHQvLyBzaG91bGQgYmUgdXBkYXRlZCBhbmQgd2hldGhlciB0aGUgY29tbWl0VXBkYXRlIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgcHJlcGFyZVVwZGF0ZSggbmV3Vk46IFZOKTogVk5VcGRhdGVEaXNwXHJcblx0e1xyXG5cdFx0Ly8gaWYgaXQgaXMgdGhlIHNhbWUgY29tcG9uZW50IGluc3RhbmNlLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXHJcblx0XHRsZXQgbmV3Q29tcCA9IChuZXdWTiBhcyBJbmRlcGVuZGVudENvbXBWTikuY29tcDtcclxuXHRcdGxldCBuZWVkc1VwZGF0aW5nID0gdGhpcy5jb21wICE9PSBuZXdDb21wO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBjb3BvbmVudCBpbnN0YW5jZSBhcmUgZGlmZmVyZW50LCB0aGVuIHdlIG5lZWQgdG8gcHJlcGFyZSB0aGUgbmV3IGluc3RhbmNlIGZvclxyXG5cdFx0Ly8gbW91bnRpbmcgYW5kIHRoZSBvbGQgb25lIGZvciB1bm1vdW50aW5nLlxyXG5cdFx0aWYgKG5lZWRzVXBkYXRpbmcpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMud2lsbE1vdW50SW5zdGFuY2UoIG5ld0NvbXApO1xyXG5cdFx0XHR0aGlzLndpbGxVbm1vdW50SW5zdGFuY2UoIHRoaXMuY29tcCk7XHJcblx0XHRcdHRoaXMuY29tcCA9IG5ld0NvbXA7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFZOVXBkYXRlRGlzcC5nZXRTdG9ja1ZhbHVlKCBmYWxzZSwgbmVlZHNVcGRhdGluZyk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIE5vdGlmaWVzIHRoZSBnaXZlbiBjb21wb25lbnQgdGhhdCBpdCB3aWxsIGJlIG1vdW50ZWQuXHJcblx0cHJpdmF0ZSB3aWxsTW91bnRJbnN0YW5jZSggY29tcDogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29tcC52biA9IHRoaXM7XHJcblxyXG5cdFx0aWYgKGNvbXAud2lsbE1vdW50KVxyXG5cdFx0XHRjb21wLndpbGxNb3VudCgpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLmxvZyggU3RhdHNDYXRlZ29yeS5Db21wLCBTdGF0c0FjdGlvbi5BZGRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb3RpZmllcyB0aGUgZ2l2ZW4gY29tcG9uZW50IHRoYXQgaXQgd2lsbCBiZSB1bm1vdW50ZWQuXHJcblx0cHJpdmF0ZSB3aWxsVW5tb3VudEluc3RhbmNlKCBjb21wOiBtaW0uSUNvbXBvbmVudCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoY29tcC53aWxsVW5tb3VudClcclxuXHRcdFx0Y29tcC53aWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdGNvbXAudm4gPSB1bmRlZmluZWQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkRlbGV0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtWTiwgVk5VcGRhdGVEaXNwfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Vk5CYXNlfSBmcm9tIFwiLi9WTkJhc2VcIlxyXG5pbXBvcnQge0NsYXNzQ29tcFZOfSBmcm9tIFwiLi9DbGFzc0NvbXBWTlwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuLi91dGlscy9TdGF0c1wiXHJcbi8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFJlcHJlc2VudHMgYSBjb21wb25lbnQgaW1wbGVtZW50aW5nIHRoZSBJQ29tcG9uZW50PD4gaW50ZXJmYWNlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIE1hbmFnZWRDb21wVk4gZXh0ZW5kcyBDbGFzc0NvbXBWTiBpbXBsZW1lbnRzIG1pbS5JTWFuYWdlZENvbXBWTlxyXG57XHJcblx0Ly8gVHlwZSBvZiB0aGUgY2xhc3MtYmFzZWQgY29tcG9uZW50LlxyXG5cdHB1YmxpYyBjb21wQ2xhc3M6IG1pbS5JQ29tcG9uZW50Q2xhc3M7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIGNvbXBDbGFzczogbWltLklDb21wb25lbnRDbGFzcywgcHJvcHM6IGFueSwgY2hpbGRyZW46IGFueVtdKVxyXG5cdHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5NYW5hZ2VkQ29tcDtcclxuXHRcdHRoaXMuY29tcENsYXNzID0gY29tcENsYXNzO1xyXG5cclxuXHRcdC8vIGNvcHkgcHJvcGVydGllcyB0byBvdXIgb3duIG9iamVjdCBleGNsdWRpbmcgZnJhbWV3b3JrLWhhbmRsZWQga2V5IGFuZCByZWZcclxuXHRcdHRoaXMucHJvcHMgPSB7fTtcclxuXHRcdGlmIChwcm9wcylcclxuXHRcdHtcclxuXHRcdFx0Zm9yKCBsZXQgcHJvcE5hbWUgaW4gcHJvcHMpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRsZXQgcHJvcFZhbDogYW55ID0gcHJvcHNbcHJvcE5hbWVdO1xyXG5cdFx0XHRcdGlmIChwcm9wVmFsID09PSB1bmRlZmluZWQgfHwgcHJvcFZhbCA9PT0gbnVsbClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBpZ25vcmUgcHJvcGVydGllcyB3aXRoIHZhbHVlcyB1bmRlZmluZWQgYW5kIG51bGxcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChwcm9wTmFtZSA9PT0gXCJrZXlcIilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyByZW1lbWJlciBrZXkgcHJvcGVydHkgYnV0IGRvbid0IGNvcHkgaXQgdG8gdGhpcy5wcm9wcyBvYmplY3RcclxuXHRcdFx0XHRcdHRoaXMua2V5ID0gcHJvcFZhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAocHJvcE5hbWUgPT09IFwicmVmXCIpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gcmVtZW1iZXIgcmVmIHByb3BlcnR5IGJ1dCBkb24ndCBjb3B5IGl0IHRvIHRoaXMucHJvcHMgb2JqZWN0XHJcblx0XHRcdFx0XHR0aGlzLnJlZiA9IHByb3BWYWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdHRoaXMucHJvcHNbcHJvcE5hbWVdID0gcHJvcFZhbDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gaWYga2V5IHByb3BlcnR5IHdhcyBub3Qgc3BlY2lmaWVkLCB1c2UgaWQ7IGlmIGlkIHdhcyBub3Qgc3BlY2lmaWVkIGtleSB3aWxsIHJlbWFpblxyXG5cdFx0XHQvLyB1bmRlZmluZWQuXHJcblx0XHRcdGlmICh0aGlzLmtleSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHRoaXMua2V5ID0gcHJvcHMuaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmVtZW1iZXIgY2hpbGRyZW4gYXMgcGFydCBvZiBwcm9wc1xyXG5cdFx0dGhpcy5wcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdC8vIGNvbXBvbmVudHMgY2FuIGRlZmluZSB0aGUgZGlzcGxheU5hbWUgcHJvcGVydHk7IGlmIHRoZXkgZG9uJ3QgdGhlbiB0aGUgZGVmYXVsdCBuYW1lXHJcblx0XHQvLyBpcyB0aGUgY29tcG9uZW50J3MgY29uc3RydWN0b3IgbmFtZSBwbHVzIGtleSBpZiBkZWZpbmVkLiBOb3RlIHRoYXQgY29tcG9uZW50IGluc3RhbmNlXHJcblx0XHQvLyBtaWdodCBub3QgYmUgY3JlYXRlZCB5ZXQgd2hlbiB0aGlzIG1ldGhvZCBpcyBjYWxsZWRcclxuXHRcdGlmICh0aGlzLmNvbXAgJiYgdGhpcy5jb21wLmRpc3BsYXlOYW1lKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb21wLmRpc3BsYXlOYW1lO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmFtZSA9IHRoaXMuY29tcENsYXNzLm5hbWU7XHJcblx0XHRcdGlmICh0aGlzLmtleSAhPSBudWxsKVxyXG5cdFx0XHRcdG5hbWUgKz0gXCJAXCIgKyB0aGlzLmtleTtcclxuXHJcblx0XHRcdHJldHVybiBuYW1lO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBJbml0aWFsaXplcyB0aGUgbm9kZSBieSBwYXNzaW5nIHRoZSBwYXJlbnQgbm9kZSB0byBpdC4gQWZ0ZXIgdGhpcywgdGhlIG5vZGUga25vd3MgaXRzXHJcblx0Ly8gcGxhY2UgaW4gdGhlIGhpZXJhcmNoeSBhbmQgZ2V0cyBhY2Nlc3MgdG8gdGhlIHJvb3Qgb2YgaXQgLSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRwdWJsaWMgaW5pdCggcGFyZW50OiBWTkJhc2UsIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50KTogdm9pZFxyXG5cdHtcclxuXHRcdHN1cGVyLmluaXQoIHBhcmVudCwgY3JlYXRvcik7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIGNvbXBvbmVudCBpbnN0YW5jZVxyXG5cdFx0dGhpcy5jb21wID0gbmV3IHRoaXMuY29tcENsYXNzKCB0aGlzLnByb3BzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBpbnRlcm5hbCBzdHVjdHVyZXMgb2YgdGhlIHZpcnR1YWwgbm9kZSBzbyB0aGF0IGl0IGlzIHJlYWR5IHRvIHByb2R1Y2UgY2hpbGRyZW4uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIHJpZ2h0IGFmdGVyIHRoZSBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbE1vdW50KCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbXAudm4gPSB0aGlzO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbXAud2lsbE1vdW50KVxyXG5cdFx0XHR0aGlzLmNvbXAud2lsbE1vdW50KCk7XHJcblxyXG5cdFx0Ly8gc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkXHJcblx0XHRpZiAodGhpcy5yZWYgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHRoaXMuY29tcCk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkNvbXAsIFN0YXRzQWN0aW9uLkFkZGVkKTtcclxuLy8vLy8vLy8vLy8vXHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnQgb2Ygbm9kZSBhbmQgYWxsIGl0cyBzdWItbm9kZXMgaXMgcmVtb3ZlZCBmcm9tIHRoZVxyXG5cdC8vIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIHJlbmRlciBwaGFzZS5cclxuXHRwdWJsaWMgd2lsbFVubW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHVuc2V0IHRoZSByZWZlcmVuY2UgdmFsdWUgaWYgc3BlY2lmaWVkLiBXZSBjaGVjayB3aGV0aGVyIHRoZSByZWZlcmVuY2Ugc3RpbGwgcG9pbnRzXHJcblx0XHQvLyB0byBvdXIgY29tcG9uZW50IGJlZm9yZSBzZXR0aW5nIGl0IHRvIHVuZGVmaW5lZC4gSWYgdGhlIHNhbWUgUmVmIG9iamVjdCBpcyB1c2VkIGZvclxyXG5cdFx0Ly8gbW9yZSB0aGFuIG9uZSBjb21wb25lbnRzIChhbmQvb3IgZWxlbWVudHMpIGl0IGNhbiBoYXBwZW4gdGhhdCB0aGUgcmVmZXJlbmNlIGlzIGNoYW5nZWRcclxuXHRcdC8vIGJlZm9yZSBvdXIgY29tcG9uZW50IGlzIHVubW91bnRlZC5cclxuXHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRtaW0uc2V0UmVmKCB0aGlzLnJlZiwgdW5kZWZpbmVkLCB0aGlzLmNvbXApO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbXAud2lsbFVubW91bnQpXHJcblx0XHRcdHRoaXMuY29tcC53aWxsVW5tb3VudCgpO1xyXG5cclxuXHRcdHRoaXMuY29tcC52biA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuY29tcCA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQ29tcCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHVwZGF0ZSBvZiB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZSBpcyBwb3NzaWJsZS4gVGhlIG5ld1ZOXHJcblx0Ly8gcGFyYW1ldGVyIGlzIGd1YXJhbnRlZWQgdG8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgaXNVcGRhdGVQb3NzaWJsZSggbmV3Vk46IFZOKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdC8vIHVwZGF0ZSBpcyBwb3NzaWJsZSBpZiB0aGUgY29tcG9uZW50IGNsYXNzIG5hbWUgaXMgdGhlIHNhbWVcclxuXHRcdHJldHVybiB0aGlzLmNvbXBDbGFzcyA9PT0gKG5ld1ZOIGFzIE1hbmFnZWRDb21wVk4pLmNvbXBDbGFzcztcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVXBkYXRlcyB0aGlzIG5vZGUgZnJvbSB0aGUgZ2l2ZW4gbm9kZS4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGFcclxuXHQvLyBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gUmV0dXJucyB0cnVlIGlmIHVwZGF0aW5nIHN1Yi1ub2RlcyBpcyBuZWNlc3NhcnkgYW5kXHJcblx0Ly8gZmFsc2Ugb3RoZXJ3aXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHRsZXQgbmV3Q2xhc3NWTiA9IG5ld1ZOIGFzIE1hbmFnZWRDb21wVk47XHJcblxyXG5cdFx0Ly8gbGV0IHRoZSBjb21wb25lbnQga25vdyBhYm91dCB0aGUgbmV3IHByb3BlcnRpZXMgKGlmIGl0IGlzIGludGVyZXN0ZWQgaW4gdGhlbSlcclxuXHRcdGxldCBzaG91bGRSZW5kZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cdFx0aWYgKHRoaXMuY29tcC5zaG91bGRVcGRhdGUgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0c2hvdWxkUmVuZGVyID0gdGhpcy5jb21wLnNob3VsZFVwZGF0ZSggbmV3Q2xhc3NWTi5wcm9wcyk7XHJcblxyXG5cdFx0Ly8gaWYgcmVmZXJlbmNlIHNwZWNpZmljYXRpb24gY2hhbmdlZCB0aGVuIHNldCBvciB1bnNldCBpdCBhcyBuZWNlc3NhcnlcclxuXHRcdGlmIChuZXdDbGFzc1ZOLnJlZiAhPT0gdGhpcy5yZWYpXHJcblx0XHR7XHJcblx0XHRcdC8vIHJlbWVtYmVyIHRoZSBuZXcgcmVmZXJlbmNlIG9iamVjdFxyXG5cdFx0XHR0aGlzLnJlZiA9IG5ld0NsYXNzVk4ucmVmO1xyXG5cclxuXHRcdFx0Ly8gaWYgcmVmZXJlbmNlIGlzIG5vdyBzcGVjaWZpZWQsIHNldCBpdCBub3c7IG5vdGUgdGhhdCB3ZSBhbHJlYWR5IGRldGVybWluZWQgdGhhdFxyXG5cdFx0XHQvLyB0aGUgcmVmZXJlbmNlIG9iamVjdCBpcyBkaWZmZXJlbnQuXHJcblx0XHRcdGlmICh0aGlzLnJlZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdG1pbS5zZXRSZWYoIHRoaXMucmVmLCB0aGlzLmNvbXApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3Q2xhc3NWTi5yZWYgPT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0Ly8gd2Uga25vdyB0aGF0IG91ciByZWZlcmVuY2UgaXMgZGVmaW5lZCwgc28gdW5zZXQgaXRcclxuXHRcdFx0bWltLnNldFJlZiggdGhpcy5yZWYsIHVuZGVmaW5lZCwgdGhpcy5jb21wKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZW1lYmVyIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGtleSBwcm9wZXJ0eSAoZXZlbiBpZiBpdCBpcyB0aGUgc2FtZSlcclxuXHRcdHRoaXMua2V5ID0gbmV3Q2xhc3NWTi5rZXk7XHJcblxyXG5cdFx0Ly8gc2hhbGxvdyBjb3B5IHRoZSBuZXcgcHJvcGVydGllcyBmcm9tIHRoZSBvdGhlciBub2RlIHRvIG91ciBvYmplY3QuIFRoaXMgaXMgbmVlZGVkXHJcblx0XHQvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgZ290IG91ciBwcm9wcyBvYmplY3QgaW4gdGhlIGNvbnN0cnVjdG9yIGFuZCB3aWxsIGtlZXBcclxuXHRcdC8vIHdvcmtpbmcgd2l0aCBpdCAtIGVzcGVjaWFsbHkgaWYgaXQgZG9lc24ndCBpbXBsZW1lbnQgdGhlIHNob3VsZFVwZGF0ZSBtZXRob2QuXHJcblx0XHRPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKCBrZXkgPT4gZGVsZXRlIHRoaXMucHJvcHNba2V5XSk7XHJcblx0XHRPYmplY3QuYXNzaWduKCB0aGlzLnByb3BzLCBuZXdDbGFzc1ZOLnByb3BzKTtcclxuXHJcblx0XHQvLyBzaW5jZSB0aGUgcmVuZGVyaW5nIHByb2R1Y2VkIGJ5IGEgZnVuY3Rpb24gbWF5IGRlcGVuZCBvbiBmYWN0b3JzIGJleW9uZCBwcm9wZXJ0aWVzLFxyXG5cdFx0Ly8gd2UgYWx3YXlzIGluZGljYXRlIHRoYXQgaXQgaXMgbmVjZXNzYXJ5IHRvIHVwZGF0ZSB0aGUgc3ViLW5vZGVzLiBUaGUgY29tbWl0VXBkYXRlXHJcblx0XHQvLyBtZXRob2Qgc2hvdWxkIE5PVCBiZSBjYWxsZWQuXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIGZhbHNlLCBzaG91bGRSZW5kZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBOb2RlJ3Mga2V5LiBUaGUgZGVyaXZlZCBjbGFzc2VzIHNldCBpdCBiYXNlZCBvbiB0aGVpciByZXNwZWN0aXZlIGNvbnRlbnQuIEEga2V5XHJcblx0Ly8gY2FuIGJlIG9mIGFueSB0eXBlLlxyXG5cdHB1YmxpYyBrZXk6IGFueTtcclxuXHJcblx0Ly8gUHJvcGVydGllcyB0aGF0IHdlcmUgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQuXHJcblx0cHJpdmF0ZSBwcm9wczogYW55O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCB0aGF0IGlzIHNwZWNpZmllZCBhcyBhIFwicmVmXCIgcHJvcGVydHkuIFJlZmVyZW5jZSBvYmplY3QgaXNcclxuXHQvLyBzZXQgd2hlbiBhbmFseXppbmcgcHJvcGVydGllcyBpbiB0aGUgY29uc3RydWN0b3IgYW5kIGR1cmluZyB1cGRhdGUuIFJlZmVyZW5jZSB2YWx1ZSBpc1xyXG5cdC8vIHNldCBkdXJpbmcgbW91bnQgYW5kIHVuc2V0IGR1cmluZyB1bm1vdW50LlxyXG5cdHByaXZhdGUgcmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGtlcHQgYnkgUm9vdCB2aXJ0dWFsIG5vZGUgYWJvdXQgc2VydmljZSBleHBvcnQgZnVuY3Rpb25hdGlvbnMgYW5kIHN1YnNjcmlwdGlvbnMuIFRoZSBzYW1lXHJcbi8vIHNlcnZpY2UgY2FuIGJlIHB1Ymxpc2hlZCBhbmQgc3Vic2NyaWJlZCB0byBieSBtdWx0aXBsZSBub2Rlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFNlcnZpY2VJbmZvXHJcbntcclxuXHRwdWJsaXNoaW5nVk5zOiBTZXQ8Vk5CYXNlPiA9IG5ldyBTZXQ8Vk5CYXNlPigpO1xyXG5cdHN1YnNjcmliZWRWTnM6IFNldDxWTkJhc2U+ID0gbmV3IFNldDxWTkJhc2U+KCk7XHJcbn1cclxuXHJcbi8vIE1hcCBvZiBzZXJ2aWNlIElEcyB0byBzZXRzIG9mIHZpcnR1YWwgbm9kZXMgdGhhdCBzdWJzY3JpYmVkIHRvIHRoaXMgc2VydmljZS5cclxubGV0IHNfc2VydmljZUluZm9zID0gbmV3IE1hcDxzdHJpbmcsU2VydmljZUluZm8+KCk7XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgd2FzIHB1Ymxpc2hlZCBieSB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGlmeVNlcnZpY2VQdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5wdWJsaXNoaW5nVk5zLmFkZCggc291cmNlVk4pO1xyXG5cclxuXHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdGZvciggbGV0IHZuIG9mIGluZm8uc3Vic2NyaWJlZFZOcylcclxuXHRcdHZuLm5vdGlmeVNlcnZpY2VDaGFuZ2VkKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW5mb3JtcyB0aGF0IGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRCB3YXMgdW5wdWJsaXNoZWQgYnkgdGhlIGdpdmVuIG5vZGUuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRpbmZvLnB1Ymxpc2hpbmdWTnMuZGVsZXRlKCBzb3VyY2VWTik7XHJcblxyXG5cdGlmIChpbmZvLnB1Ymxpc2hpbmdWTnMuc2l6ZSA9PT0gMCAmJiBpbmZvLnN1YnNjcmliZWRWTnMuc2l6ZSA9PT0gMClcclxuXHRcdHNfc2VydmljZUluZm9zLmRlbGV0ZSggaWQpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyBub3RpZnkgYWxsIHN1YnNjcmliZWQgbm9kZXMgdGhhdCBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc2VydmljZSBoYXMgY2hhbmdlZFxyXG5cdFx0Zm9yKCBsZXQgdm4gb2YgaW5mby5zdWJzY3JpYmVkVk5zKVxyXG5cdFx0XHR2bi5ub3RpZnlTZXJ2aWNlQ2hhbmdlZCggaWQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBJbmZvcm1zIHRoYXQgdGhlIGdpdmVuIG5vZGUgaGFzIHN1YnNjcmliZWQgdG8gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkOiBzdHJpbmcsIHNvdXJjZVZOOiBWTkJhc2UpOiB2b2lkXHJcbntcclxuXHRsZXQgaW5mbzogU2VydmljZUluZm8gPSBzX3NlcnZpY2VJbmZvcy5nZXQoIGlkKTtcclxuXHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdHtcclxuXHRcdGluZm8gPSBuZXcgU2VydmljZUluZm8oKTtcclxuXHRcdHNfc2VydmljZUluZm9zLnNldCggaWQsIGluZm8pO1xyXG5cdH1cclxuXHJcblx0aW5mby5zdWJzY3JpYmVkVk5zLmFkZCggc291cmNlVk4pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIEluZm9ybXMgdGhhdCB0aGUgZ2l2ZW4gbm9kZSBoYXMgdW5zdWJzY3JpYmVkIGZyb20gYSBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELlxyXG5leHBvcnQgZnVuY3Rpb24gbm90aWZ5U2VydmljZVVuc3Vic2NyaWJlZCggaWQ6IHN0cmluZywgc291cmNlVk46IFZOQmFzZSk6IHZvaWRcclxue1xyXG5cdGxldCBpbmZvOiBTZXJ2aWNlSW5mbyA9IHNfc2VydmljZUluZm9zLmdldCggaWQpO1xyXG5cdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdGluZm8uc3Vic2NyaWJlZFZOcy5kZWxldGUoIHNvdXJjZVZOKTtcclxuXHJcblx0aWYgKGluZm8ucHVibGlzaGluZ1ZOcy5zaXplID09PSAwICYmIGluZm8uc3Vic2NyaWJlZFZOcy5zaXplID09PSAwKVxyXG5cdFx0c19zZXJ2aWNlSW5mb3MuZGVsZXRlKCBpZCk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtSb290Vk59IGZyb20gXCIuL1Jvb3RWTlwiXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb3RFcnJvclVJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHJpdmF0ZSByb290Vk46IFJvb3RWTjtcclxuXHRwcml2YXRlIGVycjogYW55O1xyXG5cdHByaXZhdGUgcGF0aFN0cmluZzogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvciggcm9vdFZOOiBSb290Vk4sIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSlcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMucm9vdFZOID0gcm9vdFZOO1xyXG5cdFx0dGhpcy5lcnIgPSBlcnI7XHJcblx0XHR0aGlzLnBhdGhTdHJpbmcgPSBwYXRoID8gcGF0aC5qb2luKCBcIiBcXHUyMTkyIFwiKSA6IFwiXCI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdHJldHVybiA8ZGl2IGlkPVwicm9vdEVycm9yXCIgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGFsaWduSXRlbXM6IFwic3RhcnRcIn19PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLmVyci5tZXNzYWdlfTwvZGl2PlxyXG5cdFx0XHQ8ZGl2Pnt0aGlzLnBhdGhTdHJpbmd9PC9kaXY+XHJcblx0XHRcdDxociBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0vPlxyXG5cdFx0XHQ8YnV0dG9uIGNsaWNrPXt0aGlzLm9uUmVzdGFydH0+UmVzdGFydDwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIG9uUmVzdGFydCA9ICgpOiB2b2lkID0+XHJcblx0e1xyXG5cdFx0dGhpcy5yb290Vk4ucmVzdGFydCgpO1xyXG5cdH07XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBSb290V2FpdGluZ1VJIGV4dGVuZHMgbWltLkNvbXBvbmVudFxyXG57XHJcblx0cHVibGljIHJlbmRlcigpOiBhbnlcclxuXHR7XHJcblx0XHRyZXR1cm4gXCJMb2FkaW5nIC4uLlwiO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgKiBhcyBtaW0gZnJvbSBcIi4uL2FwaS9taW1cIlxyXG5pbXBvcnQge3VwZGF0ZU5vZGVTeW5jLCByZXF1ZXN0Tm9kZVVwZGF0ZX0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuaW1wb3J0IHtETn0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuaW1wb3J0IHtSb290RXJyb3JVSSwgUm9vdFdhaXRpbmdVSX0gZnJvbSBcIi4vUm9vdFVJXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtTdGF0c0NhdGVnb3J5fSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgUm9vdFZOIGNsYXNzIGlzIHVzZWQgYXMgYSB0b3AtbGV2ZWwgdmlydHVhbCBub2RlIGZvciBhbGwgcmVuZGVyZWQgdHJlZXMuIFJvb3RWTiBzZXJ2ZXNcclxuLy8gYXMgYW4gZXJyb3IgYm91bmRhcnkgb2YgbGFzdCByZXNvcnQuIFdoZW4gaXQgY2F0Y2hlcyBhbiBlcnJvciB0aGF0IHdhc24ndCBjYXVnaHQgYnkgYW55XHJcbi8vIGRlc2NlbmRhbmQgbm9kZSwgaXQgZGlzcGxheXMgYSBzaW1wbGUgVUkgdGhhdCBzaG93cyB0aGUgZXJyb3IgYW5kIGFsbG93cyB0aGUgdXNlciB0byByZXN0YXJ0LlxyXG4vLyBSb290Vk4gYWxzbyBtYW5hZ2VzIHNlcnZpY2UgcHVibGlzaGVycyBhbmQgc3Vic2NyaWJlcnMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgY2xhc3MgUm9vdFZOIGV4dGVuZHMgVk5CYXNlIGltcGxlbWVudHMgbWltLklFcnJvckhhbmRsaW5nU2VydmljZVxyXG57XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCBhbmNob3JETjogRE4pXHJcblx0e1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5Sb290O1xyXG5cdFx0dGhpcy5hbmNob3JETiA9IGFuY2hvckROO1xyXG5cdFx0dGhpcy5kZXB0aCA9IDA7XHJcblx0XHQvLyB0aGlzLndpbGxNb3VudCgpO1xyXG5cdH07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdFx0cHVibGljIGdldCBzdGF0c0NhdGVnb3J5KCk6IFN0YXRzQ2F0ZWdvcnkgeyByZXR1cm4gU3RhdHNDYXRlZ29yeS5Sb290OyB9XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cdC8vIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmlydHVhbCBub2RlLiBUaGlzIGlzIHVzZWQgbW9zdGx5IGZvciB0cmFjaW5nIGFuZCBlcnJvclxyXG5cdC8vIHJlcG9ydGluZy4gVGhlIG5hbWUgY2FuIGNoYW5nZSBkdXJpbmcgdGhlIGxpZmV0aW1lIG9mIHRoZSB2aXJ0dWFsIG5vZGU7IGZvciBleGFtcGxlLFxyXG5cdC8vIGl0IGNhbiByZWZsZWN0IGFuIFwiaWRcIiBwcm9wZXJ0eSBvZiBhbiBlbGVtZW50IChpZiBhbnkpLlxyXG5cdHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJSb290XCI7IH1cclxuXHJcblxyXG5cclxuXHQvLyBTZXRzIHRoZSBjb250ZW50IHRvIGJlIHJlbmRlcmVkIHVuZGVyIHRoaXMgcm9vdCBub2RlIGFuZCB0cmlnZ2VycyB1cGRhdGUuXHJcblx0cHVibGljIHNldENvbnRlbnQoIGNvbnRlbnQ6IGFueSwgc3luYzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xyXG5cclxuXHRcdGlmIChzeW5jKVxyXG5cdFx0XHR1cGRhdGVOb2RlU3luYyggdGhpcyk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gR2VuZXJhdGVzIGEgY2hhaW4gb2Ygc3ViLW5vZGVzIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBzdGF0ZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC5cclxuXHRwdWJsaWMgcmVuZGVyKCk6IGFueVxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmVycm9yVUkpXHJcblx0XHRcdHJldHVybiB0aGlzLmVycm9yVUk7XHJcblx0XHRlbHNlIGlmICh0aGlzLndhaXRpbmdVSSlcclxuXHRcdFx0cmV0dXJuIHRoaXMud2FpdGluZ1VJO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5jb250ZW50O1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDcmVhdGVzIGludGVybmFsIHN0dWN0dXJlcyBvZiB0aGUgdmlydHVhbCBub2RlIHNvIHRoYXQgaXQgaXMgcmVhZHkgdG8gcHJvZHVjZSBjaGlsZHJlbi5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIG5vZGUgaGFzIGJlZW4gY29uc3RydWN0ZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsTW91bnQoKTogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMucHVibGlzaFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJlZm9yZSB0aGUgY29udGVudCBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlXHJcblx0Ly8gRE9NIHRyZWUuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgcmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyB3aWxsVW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy51bnB1Ymxpc2hTZXJ2aWNlKCBcIlN0ZEVycm9ySGFuZGxpbmdcIik7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgc3VwcG9ydHNFcnJvckhhbmRsaW5nKCk6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGFmdGVyIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duIGR1cmluZyByZW5kZXJpbmcgb2YgdGhlIG5vZGUgaXRzZWxmXHJcblx0Ly8gb3IgaXRzIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgaGFuZGxlRXJyb3IoIGVycjogYW55LCBwYXRoOiBzdHJpbmdbXSk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAoZXJyIGluc3RhbmNlb2YgUHJvbWlzZSlcclxuXHRcdHtcclxuXHRcdFx0bGV0IHByb21pc2UgPSBlcnIgYXMgUHJvbWlzZTxhbnk+O1xyXG5cdFx0XHR0aGlzLnRocm93blByb21pc2VzLmFkZCggcHJvbWlzZSk7XHJcblx0XHRcdHByb21pc2UudGhlbiggKCkgPT4geyB0aGlzLm9uUHJvbWlzZUZ1bGZpbGxlZCggcHJvbWlzZSk7IH0pO1xyXG5cdFx0XHRwcm9taXNlLmNhdGNoKCAoKSA9PiB7IHRoaXMub25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlKTsgfSk7XHJcblx0XHRcdGlmICghdGhpcy53YWl0aW5nVUkpXHJcblx0XHRcdFx0dGhpcy53YWl0aW5nVUkgPSBuZXcgUm9vdFdhaXRpbmdVSSgpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmVycm9yVUkgPSBuZXcgUm9vdEVycm9yVUkoIHRoaXMsIGVyciwgcGF0aCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERpc3BsYXlzIHRoZSBjb250ZW50IG9yaWdpbmFsbHkgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cclxuXHRwdWJsaWMgcmVzdGFydCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gY2xlYXIgdGhlIGVycm9yIGFuZCByZXF1ZXN0IHRvIGJlIHVwZGF0ZWRcclxuXHRcdHRoaXMuZXJyb3JVSSA9IHVuZGVmaW5lZDtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gSW5mb3JtcyB0aGF0IHRoZSBnaXZlbiBub2RlIGhhcyB1bnN1YnNjcmliZWQgZnJvbSBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQuXHJcblx0cHVibGljIHJlcG9ydEVycm9yKCBlcnI6IGFueSwgcGF0aDogc3RyaW5nW10pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5oYW5kbGVFcnJvciggZXJyLCBwYXRoKTtcclxuXHRcdHJlcXVlc3ROb2RlVXBkYXRlKCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVtb3ZlcyB0aGUgZnVsZmlsbGVkIHByb21pc2UgZnJvbSBvdXIgaW50ZXJuYWwgbGlzdCBhbmQgaWYgdGhlIGxpc3QgaXMgZW1wdHkgYXNrcyB0b1xyXG5cdC8vIHJlLXJlbmRlclxyXG5cdHByaXZhdGUgb25Qcm9taXNlRnVsZmlsbGVkKCBwcm9taXNlOiBQcm9taXNlPGFueT4pOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50aHJvd25Qcm9taXNlcy5kZWxldGUoIHByb21pc2UpO1xyXG5cdFx0aWYgKHRoaXMudGhyb3duUHJvbWlzZXMuc2l6ZSA9PT0gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy53YWl0aW5nVUkgPSBudWxsO1xyXG5cdFx0XHRyZXF1ZXN0Tm9kZVVwZGF0ZSggdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIENvbnRlbnQgcmVuZGVyZWQgdW5kZXIgdGhpcyByb290IG5vZGUuXHJcblx0cHJpdmF0ZSBjb250ZW50OiBhbnk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgZXJyb3JVSTogUm9vdEVycm9yVUk7XHJcblxyXG5cdC8vIENvbXBvbmVudCBpbnN0YW5jZSB0aGF0IGlzIHJlbmRlcmVkIHdoZW4gYW4gZXhjZXB0aW9uIHdhcyBjYXVnaHQgZnJvbSBkZXNjZW5kYW5kIG5vZGVzLlxyXG5cdHByaXZhdGUgd2FpdGluZ1VJOiBSb290V2FpdGluZ1VJO1xyXG5cclxuXHQvLyBTZXQgb2YgcHJvbWlzZXMgdGhyb3duIGJ5IGRlc2NlbmRhbnQgbm9kZXMgYW5kIG5vdCB5ZXQgZnVsZmlsbGVkLlxyXG5cdHByaXZhdGUgdGhyb3duUHJvbWlzZXMgPSBuZXcgU2V0PFByb21pc2U8YW55Pj4oKTtcclxufVxyXG5cclxuXHJcblxyXG5sZXQgc19taW1ibEFuY2hvclByb3BOYW1lID0gXCJfX21pbWJsQW5jaG9yUHJvcE5hbWVfX1wiO1xyXG5cclxuXHJcblxyXG4vLyBSZW5kZXJzIHRoZSBnaXZlbiBjb250ZW50ICh1c3VhbGx5IGEgcmVzdWx0IG9mIEpTWCBleHByZXNzaW9uIG9yIGEgY29tcG9uZW50IGluc3RhbmNlKVxyXG4vLyB1bmRlciB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGluIGEgc3luY2hyb25vdXMgd2F5LlxyXG5leHBvcnQgZnVuY3Rpb24gbW91bnRSb290U3luYyggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW3NfbWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gc2V0IGNvbnRlbnQgdG8gdGhlIHJvb3Qgbm9kZSBhbmQgdHJpZ2dlciBzeW5jaHJvbm91cyB1cGRhdGVcclxuXHRyb290Vk4uc2V0Q29udGVudCggY29udGVudCwgdHJ1ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gVW5tb3VudHMgYSByb290IG5vZGUgdGhhdCB3YXMgY3JlYXRlZCB1c2luZyBtb3VudFJvb3RTeW5jLlxyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudFJvb3RTeW5jKCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdGRlbGV0ZSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIHRydWUpO1xyXG5cdHJvb3RWTi50ZXJtKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVuZGVycyB0aGUgZ2l2ZW4gY29udGVudCAodXN1YWxseSBhIHJlc3VsdCBvZiBKU1ggZXhwcmVzc2lvbiBvciBhIGNvbXBvbmVudCBpbnN0YW5jZSlcclxuLy8gdW5kZXIgdGhlIGdpdmVuIEhUTUwgZWxlbWVudC5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Um9vdCggY29udGVudDogYW55LCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHQvLyBjaGVjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSByb290IG5vZGUgcmVtZW1iZXJlZCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duXHJcblx0Ly8gcHJvcGVydHlcclxuXHRsZXQgcm9vdFZOOiBSb290Vk4gPSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHRpZiAoIXJvb3RWTilcclxuXHR7XHJcblx0XHQvLyBjcmVhdGUgcm9vdCBub2RlIGFuZCByZW1lbWJlciBpdCBpbiB0aGUgYW5jaG9yIGVsZW1lbnQncyB3ZWxsLWtub3duIHByb3BlcnR5XHJcblx0XHRyb290Vk4gPSBuZXcgUm9vdFZOKCByZWFsQW5jaG9yRE4pO1xyXG5cdFx0KHJlYWxBbmNob3JETiBhcyBhbnkpW3NfbWltYmxBbmNob3JQcm9wTmFtZV0gPSByb290Vk47XHJcblx0fVxyXG5cclxuXHQvLyBzZXQgY29udGVudCB0byB0aGUgcm9vdCBub2RlLCB3aGljaCB3aWxsIHRyaWdnZXIgdXBkYXRlXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIGNvbnRlbnQsIGZhbHNlKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBVbm1vdW50cyBhIHJvb3Qgbm9kZSB0aGF0IHdhcyBjcmVhdGVkIHVzaW5nIG1vdW50Um9vdC5cclxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRSb290KCBhbmNob3JETjogRE4pOiB2b2lkXHJcbntcclxuXHRsZXQgcmVhbEFuY2hvckROOiBETiA9IGFuY2hvckROID8gYW5jaG9yRE4gOiBkb2N1bWVudC5ib2R5O1xyXG5cdGlmICghcmVhbEFuY2hvckROKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHQvLyBnZXQgb3VyIHJvb3Qgbm9kZSBmcm9tIHRoZSBhbmNob3IgZWxlbWVudCdzIHdlbGwta25vd24gcHJvcGVydHkuXHJcblx0bGV0IHJvb3RWTjogUm9vdFZOID0gcmVhbEFuY2hvckROW3NfbWltYmxBbmNob3JQcm9wTmFtZV07XHJcblx0aWYgKCFyb290Vk4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIHJlbW92ZSBvdXIgcm9vdCBub2RlIGZyb20gdGhlIGFuY2hvciBlbGVtZW50J3Mgd2VsbC1rbm93biBwcm9wZXJ0eVxyXG5cdGRlbGV0ZSByZWFsQW5jaG9yRE5bc19taW1ibEFuY2hvclByb3BOYW1lXTtcclxuXHJcblx0Ly8gZGVzdHJ1Y3QgdGhlIHJvb3Qgbm9kZSAoYXN5bmNocm9ub3VzbHkpXHJcblx0cm9vdFZOLnNldENvbnRlbnQoIG51bGwsIGZhbHNlKTtcclxuXHRyb290Vk4uc2NoZWR1bGVDYWxsQWZ0ZXJVcGRhdGUoICgpID0+IHJvb3RWTi53aWxsVW5tb3VudCgpICk7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIGdldEZpcnN0RE4sIGdldExhc3RETiwgZ2V0SW1tZWRpYXRlRE5zLCBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiwgZ2V0Vk5QYXRofSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7Y3JlYXRlVk5DaGFpbkZyb21Db250ZW50fSBmcm9tIFwiLi9Db250ZW50RnVuY3NcIlxyXG5pbXBvcnQge1ZORGlzcEFjdGlvbiwgVk5EaXNwLCBWTkRpc3BHcm91cH0gZnJvbSBcIi4vVk5EaXNwXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlciBpbmRpY2F0aW5nIGluIHdoYXQgcGhhc2Ugb2YgdGhlIHVwZGF0ZSBjeWNsZSB3ZSBjdXJyZW50bHkgcmVzaWRlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZW51bSBTY2hlZHVsZXJTdGF0ZVxyXG57XHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBub3Qgd2l0aGluIHRoZSB1cGRhdGUgY3ljbGVcclxuXHRJZGxlID0gMCxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBleGVjdXRpbmcgZnVuY3Rpb25zIGJlZm9yZSB1cGRhdGluZyBub2Rlc1xyXG5cdEJlZm9yZVVwZGF0ZSxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyB1cGRhdGluZyBub2Rlc1xyXG5cdFVwZGF0ZSxcclxuXHJcblx0Ly8gVGhlIHNjaGVkdWxlciBpcyBleGVjdXRpbmcgZnVuY3Rpb25zIGFmdGVyIHVwZGF0aW5nIG5vZGVzXHJcblx0QWZ0ZXJVcGRhdGUsXHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBTY2hlZHVsZWRGdW5jTWFwIGNsYXNzIHJlcHJlc2VudHMgYSBtYXAgb2YgZnVuY3Rpb25zIHNjaGVkdWxlZCB0byBiZSBleGVjdXRlZCBlaXRoZXIgYmVmb3JlXHJcbiAqIG9yIGFmdGVyIGNvbXBvbmVudCB1cGRhdGVzLiBUaGUga2V5cyBpbiB0aGlzIG1hcCBhcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9ucyBhbmQgdGhlIHZhbHVlcyBhcmVcclxuICogdGhlIHdyYXBwZXIgZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgY29udGV4dCBvZiBhIGdpdmVuIHZpcnR1YWwgbm9kZS4gQm90aFxyXG4gKiB0aGUga2V5cyBhbmQgdGhlIHZhbHVlcyBoYXZlIHRoZSBzYW1lIHR5cGU6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZS5cclxuICovXHJcbmNsYXNzIFNjaGVkdWxlZEZ1bmNNYXAgZXh0ZW5kcyBNYXA8bWltLlNjaGVkdWxlZEZ1bmNUeXBlLG1pbS5TY2hlZHVsZWRGdW5jVHlwZT4ge31cclxuXHJcblxyXG5cclxuLy8gTWFwIG9mIG5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb24gdGhlIG5leHQgVUkgY3ljbGUuIFdlIHVzZSBNYXAgaW4gb3JkZXIgdG8gbm90IGluY2x1ZGVcclxuLy8gdGhlIHNhbWUgbm9kZSBtb3JlIHRoYW4gb25jZSAtIHdoaWNoIGNhbiBoYXBwZW4gaWYgdGhlIG5vZGUncyByZXF1ZXN0VXBkYXRlIG1ldGhvZCBpcyBjYWxsZWRcclxuLy8gbW9yZSB0aGFuIG9uY2UgZHVyaW5nIGEgc2luZ2xlIHJ1biAoZS5nLiBkdXJpbmcgZXZlbnQgcHJvY2Vzc2luZykuIFRoZSB2YWx1ZSBtYXBwZWQgdG8gdGhlXHJcbi8vIG5vZGUgZGV0ZXJtaW5lcyB0aGUgb3BlcmF0aW9uIHRvIGJlIHBlcmZvcm1lZDpcclxuLy9cdC0gdW5kZWZpbmVkIC0gdGhlIG5vZGUgd2lsbCBiZSB1cGRhdGVkXHJcbi8vXHQtIG51bGwgLSB0aGUgbm9kZSB3aWxsIGJlIGRlbGV0ZWQgZnJvbSBpdHMgcGFyZW50XHJcbi8vXHQtIGFueXRoaW5nIGVsc2UgLSB0aGUgbm9kZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhpcyBuZXcgY29udGVudFxyXG5sZXQgc192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cclxuLy8gTWFwIG9mIGZ1bmN0aW9ucyB0aGF0IGhhdmUgYmVlbiBzY2hlZHVsZWQgdG8gYmUgY2FsbGVkIHVwb24gYSBuZXcgYW5pbWF0aW9uIGZyYW1lIGJlZm9yZVxyXG4vLyBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFyZSB1cGRhdGVkLiBUaGUgdmFsdWVzIGluIHRoZSBtYXAgYXJlIG9iamVjdHMgdGhhdCB3aWxsXHJcbi8vIGJlIHVzZWQgcyB0aGUgXCJ0aGlzXCIgdmFsdWUgaW4gdGhlIGNhbGxiYWNrLlxyXG5sZXQgc19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblxyXG4vLyBNYXAgb2YgZnVuY3Rpb25zIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB0byBiZSBjYWxsZWQgdXBvbiBhIG5ldyBhbmltYXRpb24gZnJhbWUgYWZ0ZXJcclxuLy8gY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhcmUgdXBkYXRlZC4gVGhlIHZhbHVlcyBpbiB0aGUgbWFwIGFyZSBvYmplY3RzIHRoYXQgd2lsbFxyXG4vLyBiZSB1c2VkIHMgdGhlIFwidGhpc1wiIHZhbHVlIGluIHRoZSBjYWxsYmFjay5cclxubGV0IHNfY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblxyXG4vLyBIYW5kbGUgb2YgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IChpbiBjYXNlIGl0IHNob3VsZCBiZSBjYW5jZWxlZCkuXHJcbmxldCBzX3NjaGVkdWxlZEZyYW1lSGFuZGxlOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gU3RhdGUgb2YgdGhlIHNjaGVkdWxlci5cclxubGV0IHNfc2NoZWR1bGVyU3RhdGU6IFNjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuSWRsZTtcclxuXHJcbi8vIE51bWJlciB0aGF0IHNlcnZlcyBhcyBhIHVuaXF1ZSBJRCBvZiBhbiB1cGRhdGUgY3ljbGUuIEVhY2ggdXBkYXRlIGN5Y2xlIHRoZSByb290IG5vZGVcclxuLy8gaW5jcmVtZW50cyB0aGlzIG51bWJlci4gRWFjaCBub2RlIGJlaW5nIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSBpcyBhc3NpZ25lZCB0aGlzIG51bWJlci5cclxuLy8gVGhpcyBoZWxwcyBwcmV2ZW50IGRvdWJsZS1yZW5kZXJpbmcgb2Ygd2hlbiBib3RoIGEgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZVxyXG4vLyB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5sZXQgc19jdXJyZW50VGljazogbnVtYmVyID0gMDtcclxuXHJcbi8vIE5vZGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZC4gRHVyaW5nIGNyZWF0aW9uIGFuZCB1cGRhdGluZyBwcm9jZXNzLCB0aGlzIHZhbHVlIGlzIHNldFxyXG4vLyBldmVyeSB0aW1lIHdlIHJlY3Vyc2UgaW50byBzdWItbm9kZXMgYW5kIHJlc3RvcmVkIHdoZW4gd2UgcmV0dXJuIGJhY2sgdG8gdGhlIG5vZGUuIElmXHJcbi8vIGR1cmluZyBjcmVhdGlvbiBvciB1cGRhdGluZyBwcm9jZXNzIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gYW5kIGlzIGNhdWdodCBieSBzb21lIHVwcGVyXHJcbi8vIGxldmVsIG5vZGUsIHRoaXMgdmFsdWUgd2lsbCBzdGlsbCBwb2ludCBhdCB0aGUgbm9kZSB0aGF0IGNhdXNlZCB0aGUgZXhjZXB0aW9uLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudFZOOiBWTiA9IG51bGw7XHJcblxyXG4vLyBDbGFzcy1iYXNlZCBjb3BvbmVudCB3aG9zZSByZW5kZXJpbmcgdHJlZSBpcyBjdXJyZW50bHkgYmVpbmcgcHJvY2Vzc2VkLlxyXG5leHBvcnQgbGV0IHNfY3VycmVudENsYXNzQ29tcDogbWltLklDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHJcblxyXG4vLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTm9kZVN5bmMoIHZuOiBWTik6IHZvaWRcclxue1xyXG5cdC8vIGluY3JlbWVudCB0aWNrIG51bWJlci5cclxuXHRzX2N1cnJlbnRUaWNrKys7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHVwZGF0ZSBjeWNsZSAke3NfY3VycmVudFRpY2t9OiBgKTtcclxuXHRcdERldGFpbGVkU3RhdHMuc3RhdHMuc3RhcnQoKTtcclxuLy8vLy8vLy8vLy9cclxuXHJcblx0bGV0IHZuczogVk5bXVtdID0gbmV3IEFycmF5KDEpO1xyXG5cdHZuc1swXSA9IFt2bl07XHJcblxyXG5cdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5VcGRhdGU7XHJcblx0cGVyZm9ybUNvbW1pdFBoYXNlKCBwZXJmb3JtUmVuZGVyUGhhc2UoIHZucykpO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHREZXRhaWxlZFN0YXRzLnN0YXRzLnN0b3AoIHRydWUpO1xyXG5cdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5JZGxlO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBTY2hlZHVsZXMgYW4gdXBkYXRlIGZvciB0aGUgZ2l2ZW4gbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3ROb2RlVXBkYXRlKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHRpZiAoIXZuLmFuY2hvckROKVxyXG5cdFx0Y29uc29sZS53YXJuKCBgVXBkYXRlIHJlcXVlc3RlZCBmb3IgdmlydHVhbCBub2RlICcke2dldFZOUGF0aCh2bikuam9pbihcIi0+XCIpfScgdGhhdCBkb2Vzbid0IGhhdmUgYW5jaG9yIERPTSBub2RlYClcclxuXHJcblx0Ly8gYWRkIHRoaXMgbm9kZSB0byB0aGUgbWFwIG9mIG5vZGVzIGZvciB3aGljaCBlaXRoZXIgdXBkYXRlIG9yIHJlcGxhY2VtZW50IG9yXHJcblx0Ly8gZGVsZXRpb24gaXMgc2NoZWR1bGVkLiBOb3RlIHRoYXQgYSBub2RlIHdpbGwgb25seSBiZSBwcmVzZW50IG9uY2UgaW4gdGhlIG1hcCBub1xyXG5cdC8vIG1hdHRlciBob3cgbWFueSB0aW1lcyBpdCBjYWxscyByZXF1ZXN0VXBkYXRlKCkuXHJcblx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUuYWRkKCB2bik7XHJcblxyXG5cdC8vIGlmIHRoaXMgaXMgYSBjbGFzcy1iYXNlZCBjb21wb25lbnQgYW5kIGl0IGhhcyBiZWZvcmVVcGRhdGUgYW5kL29yIGFmdGVyVXBkYXRlIG1ldGhvZHNcclxuXHQvLyBpbXBsZW1lbnRlZCwgc2NoZWR1bGUgdGhlaXIgZXhlY3V0aW9ucy4gTm90ZSB0aGF0IHRoZSBcImJlZm9yZVVwZGF0ZVwiIG1ldGhvZCBpcyBub3RcclxuXHQvLyBzY2hlZHVsZWQgaWYgdGhlIGN1cnJlbnQgc2NoZWR1bGVyIHN0YXRlIGlzIEJlZm9yZVVwZGF0ZS4gVGhpcyBpcyBiZWNhdXNlIHRoZSBjb21wb25lbnRcclxuXHQvLyB3aWwgYmUgdXBkYXRlZCBpbiB0aGUgY3VycmVudCBjeWNsZSBhbmQgdGhlcmUgaXMgYWxyZWFkeSBubyB0aW1lIHRvIGV4ZWN1dGUgdGhlIFwiYmVmb3JlXHJcblx0Ly8gdXBkYXRlXCIgbWV0aG9kLlxyXG5cdGlmICh2bi50eXBlID09PSBtaW0uVk5UeXBlLkluZGVwZW5kZW50Q29tcCB8fCB2bi50eXBlID09PSBtaW0uVk5UeXBlLk1hbmFnZWRDb21wKVxyXG5cdHtcclxuXHRcdGxldCBjb21wID0gKHZuIGFzIGFueSBhcyBtaW0uSUNsYXNzQ29tcFZOKS5jb21wO1xyXG5cdFx0aWYgKGNvbXAuYmVmb3JlVXBkYXRlICYmIHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGNvbXAuYmVmb3JlVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cclxuXHRcdGlmIChjb21wLmFmdGVyVXBkYXRlKVxyXG5cdFx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2V0KCBjb21wLmFmdGVyVXBkYXRlLCB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNvbXAuYmVmb3JlVXBkYXRlLCBjb21wLCB2bikpO1xyXG5cdH1cclxuXHJcblx0Ly8gdGhlIHVwZGF0ZSBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGUgZHVyaW5nIGFcclxuXHQvLyBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24uXHJcblx0aWYgKHNfc2NoZWR1bGVyU3RhdGUgIT09IFNjaGVkdWxlclN0YXRlLkJlZm9yZVVwZGF0ZSlcclxuXHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gU2NoZWR1bGVzIHRvIGNhbGwgdGhlIGdpdmVuIGZ1bmN0aW9uIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50c1xyXG4vLyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmM6IG1pbS5TY2hlZHVsZWRGdW5jVHlwZSwgYmVmb3JlVXBkYXRlOiBib29sZWFuLCB0aGF0OiBvYmplY3QsIHZuOiBtaW0uSVZOb2RlKTogdm9pZFxyXG57XHJcbi8vLy8vLy8vLy8vLy8vXHJcblx0aWYgKCFmdW5jKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoIFwiVHJ5aW5nIHRvIHNjaGVkdWxlIHVuZGVmaW5lZCBmdW5jdGlvbiBmb3IgdXBkYXRlXCIpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuLy8vLy8vLy8vLy9cclxuXHJcblx0aWYgKGJlZm9yZVVwZGF0ZSlcclxuXHR7XHJcblx0XHRpZiAoIXNfY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZS5zZXQoIGZ1bmMsIHdyYXBDYWxsYmFja1dpdGhWTiggZnVuYywgdGhhdCwgdm4pKTtcclxuXHJcblx0XHRcdC8vIGEgXCJiZWZvcmUgdXBkYXRlXCIgZnVuY3Rpb24gaXMgYWx3YXlzIHNjaGVkdWxlZCBpbiB0aGUgbmV4dCBmcmFtZSBldmVuIGlmIHRoZVxyXG5cdFx0XHQvLyBjYWxsIGlzIG1hZGUgZnJvbSBhbm90aGVyIFwiYmVmb3JlIHVwZGF0ZVwiIGZ1bmN0aW9uLlxyXG5cdFx0XHRyZXF1ZXN0RnJhbWVJZk5lZWRlZCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlXHJcblx0e1xyXG5cdFx0aWYgKCFzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuaGFzKCBmdW5jKSlcclxuXHRcdHtcclxuXHRcdFx0c19jYWxsc1NjaGVkdWxlZEFmdGVyVXBkYXRlLnNldCggZnVuYywgd3JhcENhbGxiYWNrV2l0aFZOKCBmdW5jLCB0aGF0LCB2bikpO1xyXG5cclxuXHRcdFx0Ly8gYW4gXCJhZnRlciB1cGRhdGVcIiBmdW5jdGlvbiBpcyBzY2hlZHVsZWQgaW4gdGhlIG5leHQgY3ljbGUgdW5sZXNzIHRoZSByZXF1ZXN0IGlzIG1hZGVcclxuXHRcdFx0Ly8gZWl0aGVyIGZyb20gYSBcImJlZm9yZSB1cGRhdGVcIiBmdW5jdGlvbiBleGVjdXRpb24gb3IgZHVyaW5nIGEgbm9kZSB1cGRhdGUuXHJcblx0XHRcdGlmIChzX3NjaGVkdWxlclN0YXRlICE9PSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGUgJiYgc19zY2hlZHVsZXJTdGF0ZSAhPT0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlKVxyXG5cdFx0XHRcdHJlcXVlc3RGcmFtZUlmTmVlZGVkKCk7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBXcmFwcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgYW5kIHJldHVybnMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGV4ZWN1dGVkIGluIHRoZSBjb250ZXh0IG9mIHRoZVxyXG4gKiBnaXZlbiB2aXJ0dWFsIG5vZGUuIFRoZSBnaXZlbiBcInRoYXRcIiBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgXCJ0aGlzXCIgd2hlbiB0aGUgY2FsbGJhY2sgaXNcclxuICogZXhlY3V0ZWQuIElmIHRoZSBvcmlnaW5hbCBjYWxsYmFjayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBpcyBwcm9jZXNzZWQgYnkgdGhlIE1pbWJsIGVycm9yXHJcbiAqIGhhbmRsaW5nIG1lY2hhbmlzbSBzbyB0aGF0IHRoZSBleGNlcHRpb24gYnVibGVzIGZyb20gdGhpcyB2aXJ0dWFsIG5vZGUgdXAgdGhlIGhpZXJhcmNoeSB1bnRpbCBhXHJcbiAqIG5vZGUvY29tcG9uZW50IHRoYXQga25vd3MgdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrIHRvIGJlIHdyYXBwZWQuXHJcbiAqIEBwYXJhbSB0aGF0IE9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLlxyXG4gKiBAcGFyYW0gdm4gVmlydHVhbCBub2RlIGluIHdob3NlIGNvbnRleHQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgZXhlY3V0ZWQuXHJcbiAqIEByZXR1cm5zIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY2FsbGJhY2suXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd3JhcENhbGxiYWNrV2l0aFZOPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0LCB2bj86IG1pbS5JVk5vZGUpOiBUXHJcbntcclxuXHRyZXR1cm4gQ2FsbGJhY2tXcmFwcGVyLmJpbmQoIHZuLCB0aGF0LCBjYWxsYmFjayk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIFRoZSBDYWxsYmFja1dyYXBwZXIgZnVuY3Rpb24gaXMgdXNlZCB0byB3cmFwIGEgY2FsbGJhY2sgaW4gb3JkZXIgdG8gY2F0Y2ggZXhjZXB0aW9ucyBmcm9tIHRoZVxyXG4gKiBjYWxsYmFjayBhbmQgcGFzcyBpdCB0byB0aGUgXCJTdGRFcnJvckhhbmRsaW5nXCIgc2VydmljZS4gVGhlIGZ1bmN0aW9uIGlzIGJvdW5kIHRvICB0aGUgdmlydHVhbFxyXG4gKiBub2RlIGFzIFwidGhpc1wiIGFuZCB0byB0d28gcGFyYW1ldGVyczogdGhlIG9iamVjdCB0aGF0IHdpbGwgYmUgdGhlIHZhbHVlIG9mIFwidGhpc1wiIHdoZW4gdGhlXHJcbiAqIG9yaWdpbmFsIGNhbGxiYWNrIGlzIGV4ZWN1dGVkIGFuZCB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgaXRzZWxmLiBUaGVzZSB0d28gcGFyYW1ldGVycyBhcmVcclxuICogYWNjZXNzZWQgYXMgdGhlIGZpcnN0IGFuZCBzZWNvbmQgZWxlbWVudHMgb2YgdGhlIGBhcmd1bWVudHNgIGFycmF5KS4gVGhlIHJlc3Qgb2YgcGFyYW1ldGVycyBpblxyXG4gKiB0aGUgYGFyZ3VtZW50c2AgYXJyYXkgYXJlIHBhc3NlZCB0byB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgYW5kIHRoZSB2YWx1ZSByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2tcclxuICogaXMgcmV0dXJuZWQgZnJvbSB0aGUgd3JhcHBlci5cclxuICovXHJcbmZ1bmN0aW9uIENhbGxiYWNrV3JhcHBlcigpOiBhbnlcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBjdXJyZW50IFZOIGFuZCBzZXQgdGhlIGN1cnJlbnQgVk4gdG8gYmUgdGhlIFZOIGZyb20gdGhlIFwidGhpc1wiIHZhbHVlLiBOb3RlXHJcblx0Ly8gdGhhdCB0aGlzIGNhbiBiZSB1bmRlZmluZWRcclxuXHRsZXQgY3VycmVudFZOID0gc19jdXJyZW50Vk47XHJcblx0c19jdXJyZW50Vk4gPSB0aGlzO1xyXG5cdGxldCBjdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdHNfY3VycmVudENsYXNzQ29tcCA9IChzX2N1cnJlbnRWTiBhcyBhbnkpLmNvbXAgPyAoc19jdXJyZW50Vk4gYXMgYW55KS5jb21wIDogc19jdXJyZW50Vk4uY3JlYXRvcjtcclxuXHR0cnlcclxuXHR7XHJcblx0XHRsZXQgW3RoYXQsIG9yZ0NhbGxiYWNrLCAuLi5yZXN0XSA9IGFyZ3VtZW50cztcclxuXHRcdHJldHVybiB0aGF0ID8gb3JnQ2FsbGJhY2suYXBwbHkoIHRoYXQsIHJlc3QpIDogb3JnQ2FsbGJhY2soIC4uLnJlc3QpO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGlmICghdGhpcylcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgZXJyb3JTZXJ2aWNlID0gdGhpcy5maW5kU2VydmljZSggXCJTdGRFcnJvckhhbmRsaW5nXCIpIGFzIG1pbS5JRXJyb3JIYW5kbGluZ1NlcnZpY2U7XHJcblx0XHRcdGlmIChlcnJvclNlcnZpY2UpXHJcblx0XHRcdFx0ZXJyb3JTZXJ2aWNlLnJlcG9ydEVycm9yKCBlcnIsIGdldFZOUGF0aCggdGhpcykpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRmaW5hbGx5XHJcblx0e1xyXG5cdFx0Ly8gcmVzdG9yZSB0aGUgY3VycmVudCBWTiB0byB0aGUgcmVtZW1iZXJlZCB2YWx1ZTtcclxuXHRcdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cdFx0c19jdXJyZW50Q2xhc3NDb21wID0gc19jdXJyZW50Q2xhc3NDb21wO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNhbGwgdG8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHNob3VsZCBiZSBtYWRlIG9yIHRoZSBmcmFtZSBoYXMgYWxyZWFkeVxyXG4vLyBiZWVuIHNjaGVkdWxlZC5cclxuZnVuY3Rpb24gcmVxdWVzdEZyYW1lSWZOZWVkZWQoKTogdm9pZFxyXG57XHJcblx0aWYgKHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPT09IDApXHJcblx0XHRzX3NjaGVkdWxlZEZyYW1lSGFuZGxlID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBvblNjaGVkdWxlZEZyYW1lKTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBhIG5ldyBVSSBjeWNsZSB3aGVuIHRoZXJlIGlzIGEgbmVlZCB0byB1cGRhdGUgVUkgY29tcG9uZW50c1xyXG5sZXQgb25TY2hlZHVsZWRGcmFtZSA9ICgpOiB2b2lkID0+XHJcbntcclxuXHQvLyBjbGVhciB0aGUgc2NoZWR1bGVkIGZyYW1lIGhhbmRsZSBzbyB0aGF0IG5ldyB1cGRhdGUgb3IgcmVwbGFjZW1lbnQgcmVxdWVzdHMgd2lsbFxyXG5cdC8vIHNjaGVkdWxlIGEgbmV3IGZyYW1lLlxyXG5cdHNfc2NoZWR1bGVkRnJhbWVIYW5kbGUgPSAwO1xyXG5cclxuXHQvLyBpbmNyZW1lbnQgdGljayBudW1iZXIuXHJcblx0c19jdXJyZW50VGljaysrO1xyXG5cclxuXHQvLyBjYWxsIGZ1bmN0aW9ucyBzY2hlZHVsZWQgdG8gYmUgaW52b2tlZCBiZWZvcmUgdXBkYXRpbmcgY29tcG9uZW50cy4gSWYgdGhpcyBmdW5jdGlvblxyXG5cdC8vIGNhbGxzIHRoZSByZXF1ZXN0VXBkYXRlIG1ldGhvZCBvciBzY2hlZHVsZXMgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHVwZGF0ZXMsXHJcblx0Ly8gdGhleSB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoaXMgY3ljbGUuIEhvd2V2ZXIsIGlmIGl0IHNjaGVkdWxlcyBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWRcclxuXHQvLyBhZnRlciB1cGRhdGVzLCBpdCB3aWxsIGJlIGV4ZWN1dGVkIGluIHRoZSBuZXh0IGN5Y2xlLlxyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlLnNpemUgPiAwKVxyXG5cdHtcclxuXHRcdHNfc2NoZWR1bGVyU3RhdGUgPSBTY2hlZHVsZXJTdGF0ZS5CZWZvcmVVcGRhdGU7XHJcblx0XHRsZXQgY2FsbHNTY2hlZHVsZWRCZWZvcmVVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQmVmb3JlVXBkYXRlO1xyXG5cdFx0c19jYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSA9IG5ldyBTY2hlZHVsZWRGdW5jTWFwKCk7XHJcblx0XHRjYWxsU2NoZWR1bGVkRnVuY3Rpb25zKCBjYWxsc1NjaGVkdWxlZEJlZm9yZVVwZGF0ZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRpZiAoc192bnNTY2hlZHVsZWRGb3JVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMgPSBuZXcgRGV0YWlsZWRTdGF0cyggYE1pbWJsIHVwZGF0ZSBjeWNsZSAke3NfY3VycmVudFRpY2t9OiBgKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdGFydCgpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyByZW1lbWJlciB0aGUgaW50ZXJuYWwgc2V0IG9mIG5vZGVzIGFuZCByZS1jcmVhdGUgaXQgc28gdGhhdCBpdCBpcyByZWFkeSBmb3IgbmV3XHJcblx0XHQvLyB1cGRhdGUgcmVxdWVzdHMuIEFycmFuZ2Ugc2NoZWR1bGVkIG5vZGVzIGJ5IHRoZWlyIG5lc3RpbmcgZGVwdGhzIGFuZCBwZXJmb3JtIHVwZGF0ZXMuXHJcblx0XHRzX3NjaGVkdWxlclN0YXRlID0gU2NoZWR1bGVyU3RhdGUuVXBkYXRlO1xyXG5cdFx0bGV0IHZuc1NjaGVkdWxlZEZvclVwZGF0ZSA9IHNfdm5zU2NoZWR1bGVkRm9yVXBkYXRlO1xyXG5cdFx0c192bnNTY2hlZHVsZWRGb3JVcGRhdGUgPSBuZXcgU2V0PFZOPigpO1xyXG5cdFx0cGVyZm9ybUNvbW1pdFBoYXNlKCBwZXJmb3JtUmVuZGVyUGhhc2UoIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZSkpKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5zdG9wKCB0cnVlKTtcclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cyA9IG51bGw7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblx0Ly8gY2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIHRvIGJlIGludm9rZWQgYWZ0ZXIgdXBkYXRpbmcgY29tcG9uZW50c1xyXG5cdGlmIChzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUuc2l6ZSA+IDApXHJcblx0e1xyXG5cdFx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLkFmdGVyVXBkYXRlO1xyXG5cdFx0bGV0IGNhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGU7XHJcblx0XHRzX2NhbGxzU2NoZWR1bGVkQWZ0ZXJVcGRhdGUgPSBuZXcgU2NoZWR1bGVkRnVuY01hcCgpO1xyXG5cdFx0Y2FsbFNjaGVkdWxlZEZ1bmN0aW9ucyggY2FsbHNTY2hlZHVsZWRBZnRlclVwZGF0ZSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c19zY2hlZHVsZXJTdGF0ZSA9IFNjaGVkdWxlclN0YXRlLklkbGU7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIEFycmFuZ2VzIHRoZSBzY2hlZHVsZWQgbm9kZXMgYnkgdGhlaXIgbmVzdGluZyBkZXB0aHMgc28gdGhhdCB3ZSB1cGRhdGUgXCJ1cHBlclwiIG5vZGVzIGJlZm9yZVxyXG4vLyB0aGUgbG93ZXIgb25lcy4gVGhpcyBjYW4gaGVscCBhdm9pZCB0d28gY29uZGl0aW9uczpcclxuLy9cdC0gcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IHR3aWNlOiBmaXJzdCBiZWNhdXNlIGl0IGNhbGxlZCB1cGRhdGVNZSwgYW5kIHNlY29uZFxyXG4vL1x0XHRiZWNhdXNlIGl0cyBwYXJlbnQgd2FzIGFsc28gdXBkYXRlZC5cclxuLy9cdC0gdW5uZWNlc3NhcnkgcmVuZGVyaW5nIGEgY2hpbGQgY29tcG9uZW50IGJlZm9yZSBpdCBpcyByZW1vdmVkIGJ5IHRoZSBwYXJlbnRcclxuLy8gV2UgYWxsb2NhdGUgY29udGlndW91cyBhcnJheSB3aGVyZSBpbmRpY2VzIGNvcnJlc3BvbmQgdG8gZGVwdGguIEVhY2ggZWxlbWVudCBpbiB0aGlzXHJcbi8vIGFycmF5IHdpbGwgZWl0aGVyIGJlIHVuZGVmaW5lZCBvciBjb250YWluIGFuIGFycmF5IG9mIG5vZGVzIGF0IHRoaXMgZGVwdGguXHJcbmZ1bmN0aW9uIGFycmFuZ2VOb2Rlc0J5RGVwdGgoIHZuc1NjaGVkdWxlZEZvclVwZGF0ZTogU2V0PFZOPik6IFZOW11bXVxyXG57XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBjcmVhdGUgYSBzcGFyc2UgYXJyYXkgb2YgY2VydGFpbiByZWFzb25hYmxlIHNpemUuIElmIHdlIGhhdmUgZGVwdGhzIGdyZWF0ZXIgdGhhbiB0aGlzLFxyXG5cdC8vIHRoZSBhcnJheSB3aWxsIGdyb3cgYXV0b21hdGljYWxseSAoYWx0aG91Z2ggaXQgaXMgbGVzcyBwZXJmb3JtYW50IGl0IGlzIHN0aWxsIGFjY2VwdGFibGUpLlxyXG5cdGxldCB2bnNCeURlcHRoOiBWTltdW10gPSBuZXcgQXJyYXk8Vk5bXT4oMTAwKTtcclxuXHR2bnNTY2hlZHVsZWRGb3JVcGRhdGUuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcblx0XHRsZXQgYXJyID0gdm5zQnlEZXB0aFt2bi5kZXB0aF07XHJcblx0XHRpZiAoIWFycilcclxuXHRcdHtcclxuXHRcdFx0YXJyID0gW107XHJcblx0XHRcdHZuc0J5RGVwdGhbdm4uZGVwdGhdID0gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKHZuKTtcclxuXHR9KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHRyZXR1cm4gdm5zQnlEZXB0aDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyByZW5kZXJpbmcgcGhhc2UgZm9yIGFsbCBjb21wb25lbnRzIHNjaGVkdWxlZCBmb3IgdXBkYXRlIGFuZCByZWN1cnNpdmVseSBmb3IgdGhlaXJcclxuLy8gc3ViLW5vZGVzIHdoZXJlIG5lY2Vzc2FyeS4gUmV0dXJucyBhcnJheSBvZiBWTkRpc3Agc3RydWN0dXJlcyBmb3IgZWFjaCB1cGRhdGVkIG5vZGUuXHJcbmZ1bmN0aW9uIHBlcmZvcm1SZW5kZXJQaGFzZSggdm5zQnlEZXB0aDogVk5bXVtdKTogVk5EaXNwW11cclxue1xyXG5cdGxldCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSA9IFtdO1xyXG5cclxuXHQvLyBpdGVyYXRpb24gb3ZlciB0aGUgc3BhcnNlIGFycmF5IHNraXBzIHRoZSBob2xlcy5cclxuXHRsZXQgZGlzcDogVk5EaXNwO1xyXG5cdHZuc0J5RGVwdGguZm9yRWFjaCggKHZuczogVk5bXSkgPT4geyB2bnMuZm9yRWFjaCggKHZuOiBWTikgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0Ly8gY2xlYXIgdGhlIGZsYWcgdGhhdCB1cGRhdGUgaGFzIGJlZW4gcmVxdWVzdGVkIGZvciB0aGUgbm9kZVxyXG5cdFx0XHR2bi51cGRhdGVSZXF1ZXN0ZWQgPSBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdC8vIGlmIHRoZSBjb21wb25lbnQgd2FzIGFscmVhZHkgdXBkYXRlZCBpbiB0aGlzIGN5Y2xlLCBkb24ndCB1cGRhdGUgaXQgYWdhaW5cclxuXHRcdFx0aWYgKHZuLmxhc3RVcGRhdGVUaWNrID09PSBzX2N1cnJlbnRUaWNrKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHJcblx0XHRcdGRpc3AgPSBuZXcgVk5EaXNwKCB2biwgVk5EaXNwQWN0aW9uLlVua25vd24sIHZuKTtcclxuXHRcdFx0dXBkYXRlVmlydHVhbCggZGlzcCk7XHJcblx0XHRcdHVwZGF0ZWROb2RlRGlzcHMucHVzaCggZGlzcCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBmaW5kIHRoZSBuZWFyZXN0IGVycm9yIGhhbmRsaW5nIHNlcnZpY2UuIElmIG5vYm9keSBlbHNlLCBpdCBpcyBpbXBsZW1lbnRlZFxyXG5cdFx0XHQvLyBieSB0aGUgUm9vdFZOIG9iamVjdC5cclxuXHRcdFx0bGV0IGVycm9yU2VydmljZTogbWltLklFcnJvckhhbmRsaW5nU2VydmljZSA9IHZuLmdldFNlcnZpY2UoIFwiU3RkRXJyb3JIYW5kbGluZ1wiLCB1bmRlZmluZWQsIGZhbHNlKTtcclxuXHRcdFx0aWYgKGVycm9yU2VydmljZSlcclxuXHRcdFx0XHRlcnJvclNlcnZpY2UucmVwb3J0RXJyb3IoIGVyciwgc19jdXJyZW50Vk4gPyBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSA6IG51bGwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNfY3VycmVudFZOID0gbnVsbDtcclxuXHR9KX0pO1xyXG5cclxuXHRyZXR1cm4gdXBkYXRlZE5vZGVEaXNwcztcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyB0aGUgY29tbWl0IHBoYXNlIGZvciBhbGwgY29tcG9uZW50cyBzY2hlZHVsZWQgZm9yIHVwZGF0ZSBhbmQgcmVjdXJzaXZlbHkgZm9yIHRoZWlyXHJcbi8vIHN1Yi1ub2RlcyB3aGVyZSBuZWNlc3NhcnkuIFRoZSBDb21taXQgcGhhc2UgY29uc2lzdHMgb2YgdXBkYXRpbmcgRE9NIGFuZCBjYWxsaW5nIGxpZmUtY3ljbGVcclxuLy8gbWV0aG9kcyBkaWRNb3VudCwgZGlkVXBkYXRlIGFuZCB3aWxsVW5tb3VudC5cclxuZnVuY3Rpb24gcGVyZm9ybUNvbW1pdFBoYXNlKCB1cGRhdGVkTm9kZURpc3BzOiBWTkRpc3BbXSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIGRvbid0IHVudGljaXBhdGUgYW55IGV4Y2VwdGlvbnMgaGVyZSBiZWNhdXNlIHdlIGRvbid0IGludm9rZSAzcmQtcGFydHkgY29kZSBoZXJlLlxyXG5cdHVwZGF0ZWROb2RlRGlzcHMuZm9yRWFjaCggKGRpc3A6IFZORGlzcCkgPT5cclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0fSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ2FsbCBmdW5jdGlvbnMgc2NoZWR1bGVkIGJlZm9yZSBvciBhZnRlciB1cGRhdGUgY3ljbGUuXHJcbmZ1bmN0aW9uIGNhbGxTY2hlZHVsZWRGdW5jdGlvbnMoIGZ1bmNzOiBTY2hlZHVsZWRGdW5jTWFwLCBiZWZvcmVVcGRhdGU6IGJvb2xlYW4pXHJcbntcclxuXHRmdW5jcy5mb3JFYWNoKCAod3JhcHBlciwgZnVuYykgPT5cclxuXHR7XHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0d3JhcHBlcigpO1xyXG5cdFx0fVxyXG5cdFx0Y2F0Y2goIGVycilcclxuXHRcdHtcclxuXHRcdFx0Y29uc29sZS5lcnJvciggYEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBmdW5jdGlvbiAke2JlZm9yZVVwZGF0ZSA/IFwiYmVmb3JlXCIgOiBcImFmdGVyXCJ9IHVwZGF0aW5nIGNvbXBvbmVudHNcXG5gLCBlcnIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgYW5kIHJlbmRlcnMgdGhpcyBub2RlIGFuZCBpdHMgc3ViLW5vZGVzLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkXHJcbi8vIHdoZW4gYSBub2RlIGlzIGZpcnN0IG1vdW50ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpc1xyXG4vLyBtZXRob2QgKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2V0U2l0ZSBvciByZW5kZXIgbWV0aG9kcyksXHJcbi8vIHRoZSBjb21wb25lbnQgaXMgYXNrZWQgdG8gaGFuZGxlIHRoZSBlcnJvci4gSWYgdGhlIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBlcnJvciwgdGhlXHJcbi8vIGNvbnRlbnQgcmV0dXJuZWQgZnJvbSB0aGUgZXJyb3IgaGFuZGxpbmcgbWV0aG9kIGlzIHJlbmRlcmVkOyBvdGhlcndpc2UsIHRoZSBleGNlcHRpb25cclxuLy8gaXMgcmUtdGhyb3duLiBUaHVzLCB0aGUgZXhjZXB0aW9uIGlzIHByb3BhZ2F0ZWQgdXAgdW50aWwgaXQgaXMgaGFuZGxlZCBieSBhIG5vZGUgdGhhdFxyXG4vLyBoYW5kbGVzIGl0IG9yIHVwIHRvIHRoZSByb290IG5vZGUuXHJcbmZ1bmN0aW9uIGNyZWF0ZVZpcnR1YWwoIHZuOiBWTiwgcGFyZW50OiBWTik6IHZvaWRcclxue1xyXG5cdHZuLmluaXQoIHBhcmVudCwgc19jdXJyZW50Q2xhc3NDb21wKTtcclxuXHJcblx0Ly8ga2VlcCB0cmFjayBvZiB0aGUgbm9kZSB0aGF0IGlzIGJlaW5nIGN1cnJlbnRseSBwcm9jZXNzZWQuXHJcblx0bGV0IGN1cnJlbnRWTiA9IHZuO1xyXG5cdHNfY3VycmVudFZOID0gY3VycmVudFZOO1xyXG5cclxuXHRsZXQgY3VycmVudENsYXNzQ29tcCA9IHNfY3VycmVudENsYXNzQ29tcDtcclxuXHRpZiAoKHZuIGFzIGFueSkuY29tcClcclxuXHRcdHNfY3VycmVudENsYXNzQ29tcCA9ICh2biBhcyBhbnkpLmNvbXA7XHJcblxyXG5cdGlmICh2bi53aWxsTW91bnQpXHJcblx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dm4ud2lsbE1vdW50KCk7XHJcblx0XHR9XHJcblx0XHRjYXRjaCggZXJyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nICYmIHZuLnN1cHBvcnRzRXJyb3JIYW5kbGluZygpKVxyXG5cdFx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHRcdC8vIGxldCB0aGUgbm9kZSBoYW5kbGUgaXRzIG93biBlcnJvciBhbmQgcmUtcmVuZGVyXHJcblx0XHRcdFx0dm4uaGFuZGxlRXJyb3IoIGVyciwgZ2V0Vk5QYXRoKCBzX2N1cnJlbnRWTikpO1xyXG5cdFx0XHRcdHZuLndpbGxNb3VudCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBkb2Vzbid0IGltcGxlbWVudCBgcmVuZGVyYCwgdGhlIG5vZGUgbmV2ZXIgaGFzIGFueSBzdWItbm9kZXMgKGUuZy4gdGV4dCBub2RlcylcclxuXHRpZiAodm4ucmVuZGVyKVxyXG5cdHtcclxuXHRcdHRyeVxyXG5cdFx0e1xyXG5cdFx0XHRjcmVhdGVTdWJOb2Rlc1ZpcnR1YWwoIHZuKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHRcdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0Ly8gbGV0IHRoZSBub2RlIGhhbmRsZSBpdHMgb3duIGVycm9yIGFuZCByZS1yZW5kZXJcclxuXHRcdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdFx0Y3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bik7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHRocm93IGVycjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIHJlc3RvcmUgcG9pbnRlciB0byB0aGUgY3VycmVudGx5IGJlaW5nIHByb2Nlc3NlZCBub2RlIGFmdGVyIHByb2Nlc3NpbmcgaXRzIHN1Yi1ub2Rlcy5cclxuXHQvLyBJZiB0aGlzIG5vZGUgZG9lc24ndCBzdXBwb3J0IGVycm9yIGhhbmRsaW5nIGFuZCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGVpdGhlciBieSB0aGlzXHJcblx0Ly8gbm9kZSBvciBieSBvbmUgb2YgaXRzIHN1Yi1ub2RlcywgdGhpcyBsaW5lIGlzIG5vdCBleGVjdXRlZCBhbmQgdGh1cywgc19jdXJyZW50Vk5cclxuXHQvLyB3aWxsIHBvaW50IHRvIG91ciBub2RlIHdoZW4gdGhlIGV4Y2VwdGlvbiBpcyBjYXVnaHQuXHJcblx0c19jdXJyZW50Vk4gPSBjdXJyZW50Vk47XHJcblx0c19jdXJyZW50Q2xhc3NDb21wID0gY3VycmVudENsYXNzQ29tcDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBQZXJmb3JtcyBjcmVhdGlvbiBhbmQgaW5pdGlhbCByZW5kZXJpbmcgb24gdGhlIHN1Yi1ub2RlcyBvZiBvdXIgbm9kZS5cclxuZnVuY3Rpb24gY3JlYXRlU3ViTm9kZXNWaXJ0dWFsKCB2bjogVk4pOiB2b2lkXHJcbntcclxuXHQvLyB0aGlzIG1ldGhvZCBpcyBvbmx5IGludm9rZWQgaWYgdGhlIG5vZGUgaGFzIHRoZSByZW5kZXIgZnVuY3Rpb25cclxuXHR2bi5zdWJOb2RlcyA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdm4ucmVuZGVyKCkpO1xyXG5cdGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHRpZiAodm4uc3ViTm9kZXMubGVuZ3RoID4gMSlcclxuXHRcdFx0dm4ua2V5ZWRTdWJOb2RlcyA9IG5ldyBNYXA8YW55LFZOPigpO1xyXG5cclxuXHRcdGxldCBwcmV2Vk46IFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0e1xyXG5cdFx0XHRjcmVhdGVWaXJ0dWFsKCBzdm4sIHZuKTtcclxuXHJcblx0XHRcdGlmICh2bi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHZuLmtleWVkU3ViTm9kZXMuc2V0KCBzdm4ua2V5LCBzdm4pO1xyXG5cclxuXHRcdFx0aWYgKHByZXZWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHByZXZWTi5uZXh0ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5wcmV2ID0gcHJldlZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcmV2Vk4gPSBzdm47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IGNyZWF0ZXMgRE9NIG5vZGVzIGZvciB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBjcmVhdGVQaHlzaWNhbCggdm46IFZOLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETilcclxue1xyXG5cdC8vIHJlbWVtYmVyIHRoZSBhbmNob3Igbm9kZVxyXG5cdHZuLmFuY2hvckROID0gYW5jaG9yRE47XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vL1xyXG5cdGxldCBvd25ETiA9IHZuLm1vdW50ID8gdm4ubW91bnQoKSA6IHVuZGVmaW5lZDtcclxuXHJcblx0Ly8gaWYgd2UgaGF2ZSBvdXIgb3duIERPTSBub2RlLCBhZGQgaXQgdW5kZXIgdGhlIGFuY2hvciBub2RlXHJcblx0aWYgKG93bkROKVxyXG5cdFx0dm4uYW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBvd25ETiwgYmVmb3JlRE4pO1xyXG5cclxuXHQvLyBpZiB0aGUgbm9kZSBoYXMgc3ViLW5vZGVzLCBhZGQgRE9NIG5vZGVzIGZvciB0aGVtLiBJZiB0aGUgdmlydHVhbCBub2RlIGhhcyBpdHMgb3duXHJcblx0Ly8gRE9NIG5vZGUgdXNlIGl0IGFzIGFuIGFuY2hvciBmb3IgdGhlIHN1Yi1ub2Rlcy5cclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoYXQgbm9kZXMgdG8gdXNlIGFzIGFuY2hvciBhbmQgXCJiZWZvcmVcIiBmb3IgdGhlIHN1Yi1ub2Rlc1xyXG5cdFx0bGV0IG5ld0FuY2hvckROID0gb3duRE4gPyBvd25ETiA6IGFuY2hvckROO1xyXG5cdFx0bGV0IG5ld0JlZm9yZUROID0gb3duRE4gPyBudWxsIDogYmVmb3JlRE47XHJcblxyXG5cdFx0Ly8gbW91bnQgYWxsIHN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRjcmVhdGVQaHlzaWNhbCggc3ZuLCBuZXdBbmNob3JETiwgbmV3QmVmb3JlRE4pO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBSZWN1cnNpdmVseSBjYWxscyB3aWxsVW5tb3VudCBvbiB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBwcmVEZXN0cm95KCB2bjogVk4pXHJcbntcclxuXHRpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRwcmVEZXN0cm95KCBzdm4pO1xyXG5cdH1cclxuXHJcblx0aWYgKHZuLndpbGxVbm1vdW50KVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHR0cnlcclxuXHRcdHtcclxuXHRcdFx0dm4ud2lsbFVubW91bnQoKTtcclxuXHRcdH1cclxuXHRcdGNhdGNoKCBlcnIpXHJcblx0XHR7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoIGBOb2RlICR7dm4ubmFtZX0gdGhyZXcgZXhjZXB0aW9uICcke2Vyci5tZXNzYWdlfScgaW4gd2lsbFVubW91bnRgKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUmVjdXJzaXZlbHkgcmVtb3ZlcyBET00gbm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGlzIFZOIGFuZCBpdHMgc3ViLW5vZGVzLlxyXG5mdW5jdGlvbiBkZXN0cm95UGh5c2ljYWwoIHZuOiBWTilcclxue1xyXG5cdC8vIGdldCB0aGUgRE9NIG5vZGUgYmVmb3JlIHdlIGNhbGwgdW5tb3VudCwgYmVjYXVzZSB1bm1vdW50IHdpbGwgY2xlYXIgaXQuXHJcblx0bGV0IG93bkROID0gdm4ub3duRE47XHJcblxyXG5cdGlmICh2bi51bm1vdW50KVxyXG5cdHtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vL1xyXG5cdFx0dm4udW5tb3VudCgpO1xyXG5cdH1cclxuXHJcblx0Ly8gSWYgdGhlIHZpcnR1YWwgbm9kZSBoYXMgaXRzIG93biBET00gbm9kZSwgd2UgcmVtb3ZlIGl0IGZyb20gdGhlIERPTSB0cmVlLiBJbiB0aGlzIGNhc2UsXHJcblx0Ly8gd2UgZG9uJ3QgbmVlZCB0byByZWN1cnNlIGludG8gc3ViLW5vZGVzLCBiZWNhdXNlIHRoZXkgYXJlIHJlbW92ZWQgd2l0aCB0aGUgcGFyZW50LlxyXG5cdGlmIChvd25ETilcclxuXHRcdChvd25ETiBhcyBhbnkgYXMgQ2hpbGROb2RlKS5yZW1vdmUoKTtcclxuXHRlbHNlIGlmICh2bi5zdWJOb2RlcylcclxuXHR7XHJcblx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCBiZWNhdXNlIHRoaXMgd2F5IHRoZSBET00gZWxlbWVudCByZW1vdmFsIGlzXHJcblx0XHQvLyBlYXNpZXIuXHJcblx0XHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PTA7IGktLSlcclxuXHRcdFx0ZGVzdHJveVBoeXNpY2FsKCB2bi5zdWJOb2Rlc1tpXSk7XHJcblx0fVxyXG5cclxuXHR2bi50ZXJtKCk7XHJcblxyXG5cdHZuLmFuY2hvckROID0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHJlbmRlcnMgdGhpcyBub2RlIGFuZCB1cGRhdGVzIGl0cyBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5LiBUaGlzIG1ldGhvZCBpc1xyXG4vLyBpbnZva2VkIHdoZW4gYSBub2RlIGlzIGJlaW5nIHVwZGF0ZWQgZWl0aGVyIGFzIGEgcmVzdWx0IG9mIHVwZGF0ZU1lIGludm9jYXRpb24gb3IgYmVjYXVzZVxyXG4vLyB0aGUgcGFyZW50IG5vZGUgd2FzIHVwZGF0ZWQuIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZHVyaW5nIHRoZSBleGVjdXRpb24gb2YgdGhpcyBtZXRob2RcclxuLy8gKHdoaWNoIGNhbiBiZSBvbmx5IGZyb20gY29tcG9uZW50cycgc2hvdWxkVXBkYXRlIG9yIHJlbmRlciBtZXRob2RzKSwgdGhlIGNvbXBvbmVudCBpcyBhc2tlZFxyXG4vLyB0byBoYW5kbGUgdGhlIGVycm9yLiBJZiB0aGUgY29tcG9uZW50IGhhbmRsZXMgdGhlIGVycm9yLCB0aGUgY29tcG9uZW50IGlzIGFza2VkIHRvIHJlbmRlclxyXG4vLyBhZ2Fpbjsgb3RoZXJ3aXNlLCB0aGUgZXhjZXB0aW9uIGlzIHJlLXRocm93bi4gVGh1cywgdGhlIGV4Y2VwdGlvbiBpcyBwcm9wYWdhdGVkIHVwIHVudGlsIGl0XHJcbi8vIGlzIGhhbmRsZWQgYnkgYSBub2RlIHRoYXQgaGFuZGxlcyBpdCBvciB1cCB0byB0aGUgcm9vdCBub2RlLlxyXG5mdW5jdGlvbiB1cGRhdGVWaXJ0dWFsKCBkaXNwOiBWTkRpc3ApOiB2b2lkXHJcbntcclxuXHQvLyBsZXQgdm4gPSBkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLkluc2VydCA/IGRpc3AubmV3Vk4gOiBkaXNwLm9sZFZOO1xyXG5cdGxldCB2biA9IGRpc3Aub2xkVk47XHJcblxyXG5cdC8vIGtlZXAgdHJhY2sgb2YgdGhlIG5vZGUgdGhhdCBpcyBiZWluZyBjdXJyZW50bHkgcHJvY2Vzc2VkLlxyXG5cdGxldCBjdXJyZW50Vk4gPSB2bjtcclxuXHRzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHJcblx0bGV0IGN1cnJlbnRDbGFzc0NvbXAgPSBzX2N1cnJlbnRDbGFzc0NvbXA7XHJcblx0aWYgKCh2biBhcyBhbnkpLmNvbXApXHJcblx0XHRzX2N1cnJlbnRDbGFzc0NvbXAgPSAodm4gYXMgYW55KS5jb21wO1xyXG5cclxuXHR0cnlcclxuXHR7XHJcblx0XHR1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3ApO1xyXG5cdH1cclxuXHRjYXRjaCggZXJyKVxyXG5cdHtcclxuXHRcdGlmICh2bi5zdXBwb3J0c0Vycm9ySGFuZGxpbmcgJiYgdm4uc3VwcG9ydHNFcnJvckhhbmRsaW5nKCkpXHJcblx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vXHJcblxyXG5cdFx0XHQvLyBsZXQgdGhlIG5vZGUgaGFuZGxlIGl0cyBvd24gZXJyb3IgYW5kIHJlLXJlbmRlclxyXG5cdFx0XHR2bi5oYW5kbGVFcnJvciggZXJyLCBnZXRWTlBhdGgoIHNfY3VycmVudFZOKSk7XHJcblx0XHRcdHVwZGF0ZVN1Yk5vZGVzVmlydHVhbCggZGlzcCk7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHRcdHRocm93IGVycjtcclxuXHR9XHJcblxyXG5cdC8vIGluZGljYXRlIHRoYXQgdGhlIG5vZGUgd2FzIHVwZGF0ZWQgaW4gdGhpcyBjeWNsZSAtIHRoaXMgd2lsbCBwcmV2ZW50IGl0IGZyb20gXHJcblx0Ly8gcmVuZGVyaW5nIGFnYWluIGluIHRoaXMgY3ljbGUuXHJcblx0dm4ubGFzdFVwZGF0ZVRpY2sgPSBzX2N1cnJlbnRUaWNrO1xyXG5cclxuXHQvLyByZXN0b3JlIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnRseSBiZWluZyBwcm9jZXNzZWQgbm9kZSBhZnRlciBwcm9jZXNzaW5nIGl0cyBzdWItbm9kZXNcclxuXHRzX2N1cnJlbnRWTiA9IGN1cnJlbnRWTjtcclxuXHRzX2N1cnJlbnRDbGFzc0NvbXAgPSBjdXJyZW50Q2xhc3NDb21wO1xyXG59XHJcblxyXG5cclxuXHJcbi8vIFBlcmZvcm1zIHJlbmRlcmluZyBwaGFzZSBvZiB0aGUgdXBkYXRlIG9uIHRoZSBzdWItbm9kZXMgb2YgdGhlIG5vZGUsIHdoaWNoIGlzIHBhc3NlZCBhc1xyXG4vLyB0aGUgb2xkVk4gbWVtYmVyIG9mIHRoZSBWTkRpc3Agc3RydWN0dXJlLlxyXG5mdW5jdGlvbiB1cGRhdGVTdWJOb2Rlc1ZpcnR1YWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbmRlciB0aGUgbmV3IGNvbnRlbnQgYW5kIGJ1aWxkIGFycmF5IG9mIGRpc3Bvc2l0aW9ucyBvYmplY3RzIGZvciB0aGUgc3ViLW5vZGVzLlxyXG5cdGRpc3AuYnVpbGRTdWJOb2RlRGlzcG9zaXRpb25zKCk7XHJcblxyXG5cdC8vIGZvciBub2RlcyB0byBiZSByZW1vdmVkLCBjYWxsIHdpbGxVbm1vdW50XHJcblx0aWYgKGRpc3Auc3ViTm9kZXNUb1JlbW92ZSlcclxuXHR7XHJcblx0XHRmb3IoIGxldCBzdm4gb2YgZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdFx0XHRwcmVEZXN0cm95KCBzdm4pO1xyXG5cdH1cclxuXHJcblx0Ly8gcGVyZm9ybSByZW5kZXJpbmcgZm9yIHN1Yi1ub2RlcyB0aGF0IHNob3VsZCBiZSBpbnNlcnRlZCwgcmVwbGFjZWQgb3IgdXBkYXRlZFxyXG5cdGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHR7XHJcblx0XHRsZXQgb2xkVk46IFZOLCBuZXdWTjogVk47XHJcblx0XHRsZXQgcGFyZW50Vk4gPSBkaXNwLm9sZFZOO1xyXG5cdFx0Zm9yKCBsZXQgc3ViTm9kZURpc3Agb2YgZGlzcC5zdWJOb2RlRGlzcHMpXHJcblx0XHR7XHJcblx0XHRcdG9sZFZOID0gc3ViTm9kZURpc3Aub2xkVk47XHJcblx0XHRcdG5ld1ZOID0gc3ViTm9kZURpc3AubmV3Vk47XHJcblx0XHRcdGlmIChzdWJOb2RlRGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoKG9sZFZOLnJlbmRlck9uVXBkYXRlIHx8IG9sZFZOICE9PSBuZXdWTikgJiYgb2xkVk4ucHJlcGFyZVVwZGF0ZSlcclxuXHRcdFx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdHN1Yk5vZGVEaXNwLnVwZGF0ZURpc3AgPSBvbGRWTi5wcmVwYXJlVXBkYXRlKCBuZXdWTik7XHJcblx0XHRcdFx0XHRpZiAoc3ViTm9kZURpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVZpcnR1YWwoIHN1Yk5vZGVEaXNwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoc3ViTm9kZURpc3AuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uSW5zZXJ0KVxyXG5cdFx0XHRcdGNyZWF0ZVZpcnR1YWwoIG5ld1ZOLCBwYXJlbnRWTik7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIFJlY3Vyc2l2ZWx5IHBlcmZvcm1zIERPTSB1cGRhdGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBWTiBhbmQgaXRzIHN1Yi1ub2Rlcy5cclxuZnVuY3Rpb24gdXBkYXRlUGh5c2ljYWwoIGRpc3A6IFZORGlzcCk6IHZvaWRcclxue1xyXG5cdC8vIHJlbW92ZSBmcm9tIERPTSB0aGUgb2xkIG5vZGVzIGRlc2lnbmF0ZWQgdG8gYmUgcmVtb3ZlZCAodGhhdCBpcywgdGhvc2UgZm9yIHdoaWNoIHRoZXJlXHJcblx0Ly8gd2FzIG5vIGNvdW50ZXJwYXJ0IG5ldyBub2RlIHRoYXQgd291bGQgZWl0aGVyIHVwZGF0ZSBvciByZXBsYWNlIGl0KS4gV2UgbmVlZCB0byByZW1vdmVcclxuXHQvLyBvbGQgbm9kZXMgZmlyc3QgYmVmb3JlIHdlIHN0YXJ0IGluc2VydGluZyBuZXcgLSBvbmUgcmVhc29uIGlzIHRvIHByb3Blcmx5IG1haW50YWluXHJcblx0Ly8gcmVmZXJlbmNlcy5cclxuXHRpZiAoZGlzcC5zdWJOb2Rlc1RvUmVtb3ZlKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHN2biBvZiBkaXNwLnN1Yk5vZGVzVG9SZW1vdmUpXHJcblx0XHRcdGRlc3Ryb3lQaHlzaWNhbCggc3ZuKTtcclxuXHR9XHJcblxyXG5cdC8vIGdldCB0aGUgbm9kZSB3aG9zZSBjaGlsZHJlbiBhcmUgYmVpbmcgdXBkYXRlZC4gVGhpcyBpcyBhbHdheXMgdGhlIG9sZFZOIG1lbWJlciBvZlxyXG5cdC8vIHRoZSBkaXNwIHN0cnVjdHVyZS5cclxuXHRsZXQgdm4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHQvLyBpdCBtaWdodCBoYXBwZW4gdGhhdCB0aGUgbm9kZSBiZWluZyB1cGRhdGVkIHdhcyBhbHJlYWR5IGRlbGV0ZWQgYnkgaXRzIHBhcmVudC4gQ2hlY2tcclxuXHQvLyBmb3IgdGhpcyBzaXR1YXRpb24gYW5kIGV4aXQgaWYgdGhpcyBpcyB0aGUgY2FzZVxyXG5cdGlmICghdm4uYW5jaG9yRE4pXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdC8vIGRldGVybWluZSB0aGUgYW5jaG9yIG5vZGUgdG8gdXNlIHdoZW4gaW5zZXJ0aW5nIG5ldyBvciBtb3ZpbmcgZXhpc3Rpbmcgc3ViLW5vZGVzLiBJZlxyXG5cdC8vIG91ciBub2RlIGhhcyBpdHMgb3duIEROLCBpdCB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXM7IG90aGVyd2lzZSwgb3VyIG5vZGUnc1xyXG5cdC8vIGFuY2hvciB3aWxsIGJlIHRoZSBhbmNob3IgZm9yIHRoZSBzdWItbm9kZXMgdG9vLlxyXG5cdGxldCBvd25ETiA9IHZuLm93bkROO1xyXG5cdGxldCBhbmNob3JETiA9IG93bkROICE9IG51bGwgPyBvd25ETiA6IHZuLmFuY2hvckROO1xyXG5cclxuXHQvLyBpZiB0aGlzIHZpcnR1YWwgbm9kZSBkb2Vzbid0IGRlZmluZSBpdHMgb3duIERPTSBub2RlICh0cnVlIGZvciBjb21wb25lbnRzKSwgd2Ugd2lsbFxyXG5cdC8vIG5lZWQgdG8gZmluZCBhIERPTSBub2RlIGJlZm9yZSB3aGljaCB0byBzdGFydCBpbnNlcnRpbmcgbmV3IG5vZGVzLiBOdWxsIG1lYW5zXHJcblx0Ly8gYXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIGFuY2hvciBub2RlJ3MgY2hpbGRyZW4uXHJcblx0bGV0IGJlZm9yZUROID0gb3duRE4gIT0gbnVsbCA/IG51bGwgOiBnZXROZXh0RE5VbmRlclNhbWVBbmNob3JETiggdm4sIGFuY2hvckROKTtcclxuXHJcblx0Ly8gcmUtY3JlYXRlIG91ciBjdXJyZW50IGxpc3Qgb2Ygc3ViLW5vZGVzIC0gd2Ugd2lsbCBwb3B1bGF0ZSBpdCB3aGlsZSB1cGRhdGluZyB0aGVtXHJcblx0dm4uc3ViTm9kZXMgPSBkaXNwLnN1Yk5vZGVEaXNwcyA/IG5ldyBBcnJheTxWTj4oZGlzcC5zdWJOb2RlRGlzcHMubGVuZ3RoKSA6IHVuZGVmaW5lZDtcclxuXHR2bi5rZXllZFN1Yk5vZGVzID0gdm4uc3ViTm9kZXMgIT09IHVuZGVmaW5lZCAmJiB2bi5zdWJOb2Rlcy5sZW5ndGggPiAxID8gbmV3IE1hcDxhbnksVk4+KCkgOiB1bmRlZmluZWQ7XHJcblxyXG5cdC8vIHBlcmZvcm0gdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBlaXRoZXIgZ3JvdXBzIG9yIGluZGl2aWR1YWwgbm9kZXMuXHJcblx0aWYgKGRpc3Auc3ViTm9kZUdyb3VwcylcclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbEJ5R3JvdXBzKCB2biwgZGlzcC5zdWJOb2RlRGlzcHMsIGRpc3Auc3ViTm9kZUdyb3VwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdGFycmFuZ2VHcm91cHMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgZGlzcC5zdWJOb2RlR3JvdXBzLCBhbmNob3JETiwgYmVmb3JlRE4pO1xyXG5cdH1cclxuXHRlbHNlIGlmIChkaXNwLnN1Yk5vZGVEaXNwcylcclxuXHR7XHJcblx0XHR1cGRhdGVQaHlzaWNhbEJ5Tm9kZXMoIHZuLCBkaXNwLnN1Yk5vZGVEaXNwcywgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBpbmRpdmlkdWFsIG5vZGVzLlxyXG5mdW5jdGlvbiB1cGRhdGVQaHlzaWNhbEJ5Tm9kZXMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBhbmNob3JETjogRE4sIGJlZm9yZUROOiBETik6IHZvaWRcclxue1xyXG5cdC8vIHBlcmZvcm0gRE9NIG9wZXJhdGlvbnMgYWNjb3JkaW5nIHRvIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uLiBXZSBuZWVkIHRvIGRlY2lkZSBmb3IgZWFjaFxyXG5cdC8vIG5vZGUgd2hhdCBub2RlIHRvIHVzZSB0byBpbnNlcnQgb3IgbW92ZSBpdCBiZWZvcmUuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZlxyXG5cdC8vIG5ldyBub2RlcyBhbmQgb24gZWFjaCBpdGVyYXRpb24gd2UgZGVjaWRlIHRoZSB2YWx1ZSBvZiB0aGUgXCJiZWZvcmVETlwiLlxyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZGlzcHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZGlzcCA9IGRpc3BzW2ldO1xyXG5cdFx0bmV3Vk4gPSBkaXNwLm5ld1ZOO1xyXG5cdFx0b2xkVk4gPSBkaXNwLm9sZFZOO1xyXG5cclxuXHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHQvLyB0aGUgbmV3IG5vZGUgYmVjb21lIGEgc3ViLW5vZGUuXHJcblx0XHRzdm4gPSBkaXNwLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IG9sZFZOIDogbmV3Vk47XHJcblx0XHRwYXJlbnRWTi5zdWJOb2Rlc1tpXSA9IHN2bjtcclxuXHJcblx0XHRpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvbGRWTi5yZW5kZXJPblVwZGF0ZSB8fCBvbGRWTiAhPT0gbmV3Vk4pXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoZGlzcC51cGRhdGVEaXNwLnNob3VsZENvbW1pdClcclxuXHRcdFx0XHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gdXBkYXRlIHRoZSBzdWItbm9kZXMgaWYgbmVjZXNzYXJ5XHJcblx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHR1cGRhdGVQaHlzaWNhbCggZGlzcCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIGRldGVybWluZSB3aGV0aGVyIGFsbCB0aGUgbm9kZXMgdW5kZXIgdGhpcyBWTiBzaG91bGQgYmUgbW92ZWQuXHJcblx0XHRcdGxldCBzdWJOb2RlRE5zID0gZ2V0SW1tZWRpYXRlRE5zKCBvbGRWTik7XHJcblx0XHRcdGlmIChzdWJOb2RlRE5zLmxlbmd0aCA+IDApXHJcblx0XHRcdHtcclxuXHRcdFx0XHQvLyBjaGVjayB3aGV0aGVyIHRoZSBsYXN0IG9mIHRoZSBET00gbm9kZXMgYWxyZWFkeSByZXNpZGVzIHJpZ2h0IGJlZm9yZSB0aGUgbmVlZGVkIG5vZGVcclxuXHRcdFx0XHRpZiAoc3ViTm9kZUROc1tzdWJOb2RlRE5zLmxlbmd0aCAtIDFdLm5leHRTaWJsaW5nICE9PSBiZWZvcmVETilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIG9sZFZOLnN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9uLk1vdmVkKTtcclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyB0aGUgZmlyc3Qgb2YgRE9NIG5vZGVzIGJlY29tZSB0aGUgbmV4dCBiZWZvcmVETlxyXG5cdFx0XHRcdGJlZm9yZUROID0gc3ViTm9kZUROc1swXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoZGlzcC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHR7XHJcblx0XHRcdC8vIHNpbmNlIHdlIGFscmVhZHkgZGVzdHJveWVkIG9sZCBub2RlcyBkZXNpZ25hdGVkIHRvIGJlIHJlcGxhY2VkLCB0aGUgY29kZSBpc1xyXG5cdFx0XHQvLyBpZGVudGljYWwgZm9yIFJlcGxhY2UgYW5kIEluc2VydCBhY3Rpb25zXHJcblx0XHRcdGNyZWF0ZVBoeXNpY2FsKCBuZXdWTiwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHJcblx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHQvLyBuZXh0IGNvbXBvbmVudHMgc2hvdWxkIGJlIGluc2VydGVkL21vdmVkXHJcblx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBuZXdWTik7XHJcblx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0YmVmb3JlRE4gPSBmaXJzdEROO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChwYXJlbnRWTi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRwYXJlbnRWTi5rZXllZFN1Yk5vZGVzLnNldCggc3ZuLmtleSwgc3ZuKTtcclxuXHJcblx0XHRzdm4ubmV4dCA9IHN2bi5wcmV2ID0gdW5kZWZpbmVkO1xyXG5cdFx0aWYgKG5leHRWTilcclxuXHRcdHtcclxuXHRcdFx0bmV4dFZOLnByZXYgPSBzdm47XHJcblx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0fVxyXG5cclxuXHRcdG5leHRWTiA9IHN2bjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLy8gUGVyZm9ybXMgdXBkYXRlcyBhbmQgaW5zZXJ0cyBieSBncm91cHMuIFdlIGdvIGZyb20gdGhlIGVuZCBvZiB0aGUgbGlzdCBvZiB1cGRhdGUgZ3JvdXBzXHJcbi8vIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiB3ZSBkZWNpZGUgdGhlIHZhbHVlIG9mIHRoZSBcImJlZm9yZUROXCIuXHJcbmZ1bmN0aW9uIHVwZGF0ZVBoeXNpY2FsQnlHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0bGV0IGN1cnJTdWJOb2RlSW5kZXggPSBkaXNwcy5sZW5ndGggLSAxO1xyXG5cdGxldCBuZXh0Vk46IFZOLCBzdm46IFZOLCBkaXNwOiBWTkRpc3AsIG5ld1ZOOiBWTiwgb2xkVk46IFZOLCBmaXJzdEROOiBETjtcclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKVxyXG5cdHtcclxuXHRcdGxldCBncm91cCA9IGdyb3Vwc1tpXTtcclxuXHJcblx0XHQvLyBmaXJzdCB1cGRhdGUgZXZlcnkgc3ViLW5vZGUgaW4gdGhlIGdyb3VwIGFuZCBpdHMgc3ViLXN1Yi1ub2Rlc1xyXG5cdFx0Zm9yKCBsZXQgaiA9IGdyb3VwLmxhc3Q7IGogPj0gZ3JvdXAuZmlyc3Q7IGotLSlcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IGRpc3BzW2pdO1xyXG5cdFx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblx0XHRcdG9sZFZOID0gZGlzcC5vbGRWTjtcclxuXHJcblx0XHRcdC8vIGZvciB0aGUgVXBkYXRlIG9wZXJhdGlvbiwgdGhlIG5ldyBub2RlIGJlY29tZXMgYSBzdWItbm9kZTsgZm9yIHRoZSBJbnNlcnQgb3BlcmF0aW9uXHJcblx0XHRcdC8vIHRoZSBuZXcgbm9kZSBiZWNvbWUgYSBzdWItbm9kZS5cclxuXHRcdFx0c3ZuID0gZ3JvdXAuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gb2xkVk4gOiBuZXdWTjtcclxuXHRcdFx0cGFyZW50Vk4uc3ViTm9kZXNbY3VyclN1Yk5vZGVJbmRleC0tXSA9IHN2bjtcclxuXHJcblx0XHRcdGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2xkVk4ucmVuZGVyT25VcGRhdGUgfHwgb2xkVk4gIT09IG5ld1ZOKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChkaXNwLnVwZGF0ZURpc3Auc2hvdWxkQ29tbWl0KVxyXG5cdFx0XHRcdFx0e1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRcdFx0XHRcdG9sZFZOLmNvbW1pdFVwZGF0ZSggbmV3Vk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHVwZGF0ZSB0aGUgc3ViLW5vZGVzIGlmIG5lY2Vzc2FyeVxyXG5cdFx0XHRcdFx0aWYgKGRpc3AudXBkYXRlRGlzcC5zaG91bGRSZW5kZXIpXHJcblx0XHRcdFx0XHRcdHVwZGF0ZVBoeXNpY2FsKCBkaXNwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZpcnN0RE4gPSBnZXRGaXJzdEROKCBvbGRWTik7XHJcblx0XHRcdFx0aWYgKGZpcnN0RE4gIT0gbnVsbClcclxuXHRcdFx0XHRcdGJlZm9yZUROID0gZmlyc3RETjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmIChncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5JbnNlcnQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjcmVhdGVQaHlzaWNhbCggbmV3Vk4sIGFuY2hvckROLCBiZWZvcmVETik7XHJcblxyXG5cdFx0XHRcdC8vIGlmIHRoZSBuZXcgbm9kZSBkZWZpbmVzIGEgRE9NIG5vZGUsIGl0IGJlY29tZXMgdGhlIERPTSBub2RlIGJlZm9yZSB3aGljaFxyXG5cdFx0XHRcdC8vIG5leHQgY29tcG9uZW50cyBzaG91bGQgYmUgaW5zZXJ0ZWQvbW92ZWRcclxuXHRcdFx0XHRmaXJzdEROID0gZ2V0Rmlyc3RETiggbmV3Vk4pO1xyXG5cdFx0XHRcdGlmIChmaXJzdEROICE9IG51bGwpXHJcblx0XHRcdFx0XHRiZWZvcmVETiA9IGZpcnN0RE47XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChwYXJlbnRWTi5rZXllZFN1Yk5vZGVzICE9PSB1bmRlZmluZWQgJiYgc3ZuLmtleSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHBhcmVudFZOLmtleWVkU3ViTm9kZXMuc2V0KCBzdm4ua2V5LCBzdm4pO1xyXG5cclxuXHRcdFx0c3ZuLm5leHQgPSBzdm4ucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdFx0aWYgKG5leHRWTilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG5leHRWTi5wcmV2ID0gc3ZuO1xyXG5cdFx0XHRcdHN2bi5uZXh0ID0gbmV4dFZOO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRuZXh0Vk4gPSBzdm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbm93IHRoYXQgYWxsIG5vZGVzIGluIHRoZSBncm91cCBoYXZlIGJlZW4gdXBkYXRlZCBvciBpbnNlcnRlZCwgd2UgY2FuIGRldGVybWluZVxyXG5cdFx0Ly8gZmlyc3QgYW5kIGxhc3QgRE5zIGZvciB0aGUgZ3JvdXBcclxuXHRcdGdyb3VwLmRldGVybWluZUROcygpO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBncm91cCBoYXMgYXQgbGVhc3Qgb25lIEROLCBpdHMgZmlyc3QgRE4gYmVjb21lcyB0aGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5leHRcclxuXHRcdC8vIGdyb3VwIG9mIG5ldyBub2RlcyAoaWYgYW55KSBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0XHRpZiAoZ3JvdXAuZmlyc3RETilcclxuXHRcdFx0YmVmb3JlRE4gPSBncm91cC5maXJzdEROO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBBcnJhbmdlIHRoZSBncm91cHMgaW4gb3JkZXIgYXMgaW4gdGhlIG5ldyBzdWItbm9kZSBsaXN0LCBtb3ZpbmcgdGhlbSBpZiBuZWNlc3NhcnkuXHJcbmZ1bmN0aW9uIGFycmFuZ2VHcm91cHMoIHBhcmVudFZOOiBWTiwgZGlzcHM6IFZORGlzcFtdLCBncm91cHM6IFZORGlzcEdyb3VwW10sIGFuY2hvckROOiBETiwgYmVmb3JlRE46IEROKTogdm9pZFxyXG57XHJcblx0Ly8gV2UgZ28gZnJvbSB0aGUgbGFzdCBncm91cCB0byB0aGUgc2Vjb25kIGdyb3VwIGluIHRoZSBsaXN0IGJlY2F1c2UgYXMgc29vbiBhcyB3ZSBtb3ZlZCBhbGxcclxuXHQvLyBncm91cHMgZXhjZXB0IHRoZSBmaXJzdCBvbmUgaW50byB0aGVpciByaWdodCBwbGFjZXMsIHRoZSBmaXJzdCBncm91cCB3aWxsIGJlIGF1dG9tYXRpY2FsbHlcclxuXHQvLyBpbiB0aGUgcmlnaHQgcGxhY2UuIFdlIGFsd2F5cyBoYXZlIHR3byBncm91cHMgKGkgYW5kIGktMSksIHdoaWNoIGFsbG93cyB1cyB0byB1bmRlcnN0YW5kXHJcblx0Ly8gd2hldGhlciB3ZSBuZWVkIHRvIHN3YXAgdGhlbS4gSWYgd2UgZG8gd2UgbW92ZSB0aGUgc2hvcnRlciBncm91cC5cclxuXHRmb3IoIGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXHJcblx0e1xyXG5cdFx0bGV0IGdyb3VwID0gZ3JvdXBzW2ldO1xyXG5cdFx0bGV0IHByZXZHcm91cCA9IGdyb3Vwc1tpLTFdO1xyXG5cclxuXHRcdC8vIGRldGVybWluZSB3aGV0aGVyIHRoZSBncm91cCBzaG91bGQgbW92ZS4gV2UgdGFrZSB0aGUgbGFzdCBub2RlIGZyb20gdGhlIGdyb3VwXHJcblx0XHQvLyBhbmQgY29tcGFyZSBpdHMgRE4ncyBuZXh0IHNpYmxpbmcgdG8gdGhlIGN1cnJlbnQgXCJiZWZvcmVETlwiLlxyXG5cdFx0aWYgKGdyb3VwLmxhc3RETiAhPSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoZ3JvdXAubGFzdEROLm5leHRTaWJsaW5nICE9PSBiZWZvcmVETilcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGlmIHRoZSBjdXJyZW50IGdyb3VwIG5vdyByZXNpZGVzIGJlZm9yZSB0aGUgcHJldmlvdXMgZ3JvdXAsIHRoZW4gdGhhdCBtZWFuc1xyXG5cdFx0XHRcdC8vIHRoYXQgd2UgYXJlIHN3YXBwaW5nIHR3byBncm91cHMuIEluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1vdmUgdGhlIHNob3J0ZXIgb25lLlxyXG5cdFx0XHRcdGlmIChncm91cC5sYXN0RE4ubmV4dFNpYmxpbmcgPT09IHByZXZHcm91cC5maXJzdEROICYmIGdyb3VwLmNvdW50ID4gcHJldkdyb3VwLmNvdW50KVxyXG5cdFx0XHRcdFx0bW92ZUdyb3VwKCBwYXJlbnRWTiwgZGlzcHMsIHByZXZHcm91cCwgYW5jaG9yRE4sIGdyb3VwLmZpcnN0RE4pO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG1vdmVHcm91cCggcGFyZW50Vk4sIGRpc3BzLCBncm91cCwgYW5jaG9yRE4sIGJlZm9yZUROKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gdGhlIGdyb3VwJ3MgZmlyc3QgRE4gYmVjb21lcyB0aGUgbmV3IGJlZm9yZUROLiBOb3RlIHRoYXQgZmlyc3RETiBjYW5ub3QgYmUgbnVsbFxyXG5cdFx0XHQvLyBiZWNhdXNlIGxhc3RETiBpcyBub3QgbnVsbFxyXG5cdFx0XHRiZWZvcmVETiA9IGdyb3VwLmZpcnN0RE47XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIE1vdmVzIGFsbCB0aGUgbm9kZXMgaW4gdGhlIGdpdmVuIGdyb3VwIGJlZm9yZSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXHJcbmZ1bmN0aW9uIG1vdmVHcm91cCggcGFyZW50Vk46IFZOLCBkaXNwczogVk5EaXNwW10sIGdyb3VwOiBWTkRpc3BHcm91cCwgYW5jaG9yRE46IEROLCBiZWZvcmVETjogRE4pOiB2b2lkXHJcbntcclxuXHRmb3IoIGxldCBqID0gZ3JvdXAuZmlyc3Q7IGogPD0gZ3JvdXAubGFzdDsgaisrKVxyXG5cdHtcclxuXHRcdGxldCBzdWJOb2RlVk4gPSBncm91cC5hY3Rpb24gPT09IFZORGlzcEFjdGlvbi5VcGRhdGUgPyBkaXNwc1tqXS5vbGRWTiA6IGRpc3BzW2pdLm5ld1ZOO1xyXG5cdFx0bGV0IHN1Yk5vZGVETnMgPSBnZXRJbW1lZGlhdGVETnMoIHN1Yk5vZGVWTik7XHJcblx0XHRmb3IoIGxldCBzdWJOb2RlRE4gb2Ygc3ViTm9kZUROcylcclxuXHRcdHtcclxuXHRcdFx0YW5jaG9yRE4uaW5zZXJ0QmVmb3JlKCBzdWJOb2RlRE4sIGJlZm9yZUROKTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuRWxtLCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vLy9cclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIHN1Yk5vZGVWTi5zdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbi5Nb3ZlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuaW1wb3J0IHtETiwgVk4sIFZOVXBkYXRlRGlzcH0gZnJvbSBcIi4vVk5cIlxyXG5pbXBvcnQge1ZOQmFzZX0gZnJvbSBcIi4vVk5CYXNlXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHRleHQgbm9kZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vk4gZXh0ZW5kcyBWTkJhc2UgaW1wbGVtZW50cyBtaW0uSVRleHRWTlxyXG57XHJcblx0Ly8gVGV4dCBmb3IgYSBzaW1wbGUgdGV4dCBub2RlLlxyXG5cdHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcblxyXG5cdC8vIFRleHQgRE9NIG5vZGVcclxuXHRwdWJsaWMgdGV4dE5vZGU6IFRleHQ7XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHRleHQ6IHN0cmluZylcclxuXHR7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50eXBlID0gbWltLlZOVHlwZS5UZXh0O1xyXG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdHB1YmxpYyBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5IHsgcmV0dXJuIFN0YXRzQ2F0ZWdvcnkuVGV4dDsgfVxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcblx0Ly8gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgaXMgdXNlZCBtb3N0bHkgZm9yIHRyYWNpbmcgYW5kIGVycm9yXHJcblx0Ly8gcmVwb3J0aW5nLiBUaGUgbmFtZSBjYW4gY2hhbmdlIGR1cmluZyB0aGUgbGlmZXRpbWUgb2YgdGhlIHZpcnR1YWwgbm9kZTsgZm9yIGV4YW1wbGUsXHJcblx0Ly8gaXQgY2FuIHJlZmxlY3QgYW4gXCJpZFwiIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgKGlmIGFueSkuXHJcblx0cHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiBcIiN0ZXh0XCI7IH1cclxuXHJcblx0Ly8gUmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoZSB2aXJ0dWFsIG5vZGUgaXRzZWxmIChpZiBhbnkpIGFuZCBub3QgdG8gYW55IG9mIGl0c1xyXG5cdC8vIHN1Yi1ub2Rlcy5cclxuXHRwdWJsaWMgZ2V0IG93bkROKCk6IEROIHsgcmV0dXJuIHRoaXMudGV4dE5vZGU7IH07XHJcblxyXG5cclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgbW91bnQoKTogRE5cclxuXHR7XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHRyZXR1cm4gdGhpcy50ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCB0aGlzLnRleHQpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXN0cm95cyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHRwdWJsaWMgdW5tb3VudCgpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy50ZXh0Tm9kZSA9IHVuZGVmaW5lZDtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuVGV4dCwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHB1YmxpYyBwcmVwYXJlVXBkYXRlKCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3BcclxuXHR7XHJcblx0XHQvLyB0ZXh0IG5vZGVzIGRvbid0IGhhdmUgc3ViLW5vZGVzXHJcblx0XHRyZXR1cm4gVk5VcGRhdGVEaXNwLmdldFN0b2NrVmFsdWUoIHRoaXMudGV4dCAhPT0gKG5ld1ZOIGFzIFRleHRWTikudGV4dCwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBDb21taXRzIHVwZGF0ZXMgbWFkZSB0byB0aGlzIG5vZGUgdG8gRE9NLlxyXG5cdHB1YmxpYyBjb21taXRVcGRhdGUoIG5ld1ZOOiBWTik6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLnRleHROb2RlLm5vZGVWYWx1ZSA9IHRoaXMudGV4dCA9IChuZXdWTiBhcyBUZXh0Vk4pLnRleHQ7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LlRleHQsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgbWltIGZyb20gXCIuLi9hcGkvbWltXCJcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vXHJcblx0aW1wb3J0IHtEZXRhaWxlZFN0YXRzLCBTdGF0c0NhdGVnb3J5LCBTdGF0c0FjdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLyBVc2UgdHlwZSBETiB0byByZWZlciB0byBET00ncyBOb2RlIGNsYXNzLiBUaGUgRE9NIG5vZGVzIHRoYXQgd2UgYXJlIGRlYWxpbmcgd2l0aCBhcmVcclxuLy8gZWl0aGVyIG9mIHR5cGUgRWxlbWVudCBvciBUZXh0LlxyXG5leHBvcnQgdHlwZSBETiA9IE5vZGU7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk4gaW50ZXJmYWNlIGRlZmluZXMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyB0aGF0IGFyZSBvcHRpb25hbGx5IGltcGxlbWVudGVkIGJ5IGFsbFxyXG4gKiB0eXBlcyBvZiB2aXJ0dWFsIG5vZGVzLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBWTiBleHRlbmRzIG1pbS5JVk5vZGVcclxue1xyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdHJlYWRvbmx5IHN0YXRzQ2F0ZWdvcnk6IFN0YXRzQ2F0ZWdvcnk7XHJcbi8vLy8vLy8vLy8vXHJcblxyXG5cdC8qKiBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS4gKi9cclxuXHRkZXB0aD86IG51bWJlcjtcclxuXHJcblx0LyoqIERPTSBub2RlIHVuZGVyIHdoaWNoIGFsbCBjb250ZW50IG9mIHRoaXMgdmlydHVhbCBub2RlIGlzIHJlbmRlcmVkLiAqL1xyXG5cdGFuY2hvckROPzogRE47XHJcblxyXG5cdC8qKlxyXG5cdCAqIE5vZGUncyBrZXkuIFRoZSBkZXJpdmVkIGNsYXNzZXMgc2V0IGl0IGJhc2VkIG9uIHRoZWlyIHJlc3BlY3RpdmUgY29udGVudC4gQSBrZXkgY2FuIGJlIG9mXHJcblx0ICogYW55IHR5cGUuXHJcblx0ICovXHJcblx0a2V5PzogYW55O1xyXG5cclxuXHQvKipcclxuXHQgKiBGbGFnIGluZGljYXRpbmcgd2hldGhlciB0aGlzIG5vZGUgc2hvdWxkIHJlLXJlbmRlciBkdXJpbmcgdXBkYXRlIGV2ZW4gaXQgaXMgdGhlIHNhbWVcclxuXHQgKiBwaHlzaWNhbCBub2RlIGluc3RhbmNlLiBUaGlzIGlzIG5lZWRlZCBmb3Igbm9kZXMgdGhhdCBzZXJ2ZSBhcyBhIHByb3h5IHRvIGEgcmVuZGVyaW5nXHJcblx0ICogZnVuY3Rpb24gYW5kIHRoYXQgZnVuY3Rpb24gbXVzdCBiZSBpbnZva2VkIGV2ZW4gbm9uZSBvZiB0aGUgbm9kZSBwYXJhbWV0ZXJzIGhhdmUgY2hhbmdlZC5cclxuXHQgKi9cclxuXHRyZW5kZXJPblVwZGF0ZT86IGJvb2xlYW47XHJcblxyXG5cdC8qKiBHZXRzIG5vZGUncyBwYXJlbnQuIFRoaXMgaXMgdW5kZWZpbmVkIGZvciB0aGUgdG9wLWxldmVsIChyb290KSBub2Rlcy4gKi9cclxuXHRwYXJlbnQ/OiBWTjtcclxuXHJcblx0Ly8gQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgYXMgcGFydCBvZiBpdHMgcmVuZGVyaW5nIHRyZWUuXHJcblx0Y3JlYXRvcj86IG1pbS5JQ29tcG9uZW50O1xyXG5cclxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIG5leHQgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGxhc3Qgc2libGluZy5cclxuXHRuZXh0PzogVk47XHJcblxyXG5cdC8vIFJlZmVyZW5jZSB0byB0aGUgcHJldmlvdXMgc2libGluZyBub2RlIG9yIHVuZGVmaW5lZCBmb3IgdGhlIGZpcnN0IHNpYmxpbmcuXHJcblx0cHJldj86IFZOO1xyXG5cclxuXHQvKiogTGlzdCBvZiBzdWItbm9kZXMuICovXHJcblx0c3ViTm9kZXM/OiBWTltdO1xyXG5cclxuXHQvLyBNYXAgb2Yga2V5ZWQgc3ViLW5vZGVzIC0gZGVmaW5lZCBvbmx5IGlmIHRoZSBudW1iZXIgb2Ygc3ViLW5vZGVzIGlzIGdyZWF0ZXIgdGhhbiAxLlxyXG5cdGtleWVkU3ViTm9kZXM/OiBNYXA8YW55LFZOPjtcclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIHN0cmF0ZWd5IG9iamVjdCB0aGF0IGRldGVybWluZXMgZGlmZmVyZW50IGFzcGVjdHMgb2Ygbm9kZSBiZWhhdmlvclxyXG5cdCAqIGR1cmluZyB1cGRhdGVzLlxyXG5cdCAqL1xyXG5cdHVwZGF0ZVN0cmF0ZWd5PzogbWltLlVwZGF0ZVN0cmF0ZWd5O1xyXG5cclxuXHQvLyBSZXR1cm5zIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHZpcnR1YWwgbm9kZSBpdHNlbGYgKGlmIGFueSkgYW5kIG5vdCB0byBhbnkgb2YgaXRzXHJcblx0Ly8gc3ViLW5vZGVzLlxyXG5cdG93bkROPzogRE47XHJcblxyXG5cdC8vIEZsYWcgaW5kaWNhdGluZyB0aGF0IHVwZGF0ZSBoYXMgYmVlbiByZXF1ZXN0ZWQgYnV0IG5vdCB5ZXQgcGVyZm9ybWVkLiBUaGlzIGZsYWcgaXMgbmVlZGVkXHJcblx0Ly8gdG8gcHJldmVudCB0cnlpbmcgdG8gYWRkIHRoZSBub2RlIHRvIHRoZSBnbG9iYWwgbWFwIGV2ZXJ5IHRpbWUgdGhlIHJlcXVlc3RVcGRhdGUgbWV0aG9kXHJcblx0Ly8gaXMgY2FsbGVkLiBcclxuXHR1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdGxhc3RVcGRhdGVUaWNrOiBudW1iZXI7XHJcblxyXG5cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgdGhlIG5vZGUgYnkgcGFzc2luZyB0aGUgcGFyZW50IG5vZGUgdG8gaXQuIEFmdGVyIHRoaXMsIHRoZSBub2RlIGtub3dzIGl0c1xyXG5cdC8vIHBsYWNlIGluIHRoZSBoaWVyYXJjaHkgYW5kIGdldHMgYWNjZXNzIHRvIHRoZSByb290IG9mIGl0IC0gdGhlIFJvb3RWTiBvYmplY3QuXHJcblx0aW5pdCggcGFyZW50OiBWTiwgY3JlYXRvcjogbWltLklDb21wb25lbnQpOiB2b2lkO1xyXG5cclxuXHQvLyBDbGVhbnMgdXAgdGhlIG5vZGUgb2JqZWN0IGJlZm9yZSBpdCBpcyByZWxlYXNlZC5cclxuXHR0ZXJtKCk6IHZvaWQ7XHJcblxyXG5cclxuXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHQvL1xyXG5cdC8vIExpZmUgY3ljbGUgbWV0aG9kc1xyXG5cdC8vXHJcblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblx0Ly8gUmV0dXJucyBjb250ZW50IHRoYXQgY29tcHJpc2VzIHRoZSBjaGlsZHJlbiBvZiB0aGUgbm9kZS4gSWYgdGhlIG5vZGUgZG9lc24ndCBoYXZlXHJcblx0Ly8gc3ViLW5vZGVzLCBudWxsIHNob3VsZCBiZSByZXR1cm5lZC4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoYXQgbWVhbnMgdGhlIG5vZGVcclxuXHQvLyBuZXZlciBoYXMgY2hpbGRyZW4gLSBmb3IgZXhhbXBsZSB0ZXh0IG5vZGVzLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRyZW5kZXI/KCk6IGFueTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZXMgaW50ZXJuYWwgc3R1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGVcclxuXHQvLyBub2RlIGhhcyBiZWVuIGNvbnN0cnVjdGVkLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHR3aWxsTW91bnQ/KCk6IHZvaWQ7XHJcblxyXG5cdC8vIENsZWFycyBpbnRlcm5hbCBzdHJ1Y3R1cmVzIG9mIHRoZSB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIGNvbnRlbnRcclxuXHQvLyBvZiBub2RlIGFuZCBhbGwgaXRzIHN1Yi1ub2RlcyBpcyByZW1vdmVkIGZyb20gdGhlIERPTSB0cmVlLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIENvbW1pdCBwaGFzZS5cclxuXHR3aWxsVW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gQ3JlYXRlcyBhbmQgcmV0dXJucyBET00gbm9kZSBjb3JyZXNwb25kaW5nIHRvIHRoaXMgdmlydHVhbCBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbXBsZW1lbnRlZFxyXG5cdC8vIG9ubHkgb24gbm9kZXMgdGhhdCBoYXZlIHRoZWlyIG93biBET00gbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdG1vdW50PygpOiBETjtcclxuXHJcblx0Ly8gQ2xlYXJzIERPTSBub2RlIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyB2aXJ0dWFsIG5vZGUuIFRoaXMgbWV0aG9kIGlzIGltcGxlbWVudGVkIG9ubHkgb24gbm9kZXNcclxuXHQvLyB0aGF0IGhhdmUgdGhlaXIgb3duIERPTSBub2Rlcy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgcmVsZWFzZSB0aGUgaW50ZXJuYWxseSBoZWxkIHJlZmVyZW5jZVxyXG5cdC8vIHRvIHRoZSBET00gbm9kZSAtIHRoZSBhY3R1YWwgcmVtb3ZhbCBvZiB0aGUgbm9kZSBmcm9tIERPTSBpcyBkb25lIGJ5IHRoZSBpbmZyYXN0cnVjdHVyZS5cclxuXHQvLyBUaGlzIG1ldGhvZCBpcyBwYXJ0IG9mIHRoZSBDb21taXQgcGhhc2UuXHJcblx0dW5tb3VudD8oKTogdm9pZDtcclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSB1cGRhdGUgb2YgdGhpcyBub2RlIGZyb20gdGhlIGdpdmVuIG5vZGUgaXMgcG9zc2libGUuIFRoZSBuZXdWTlxyXG5cdC8vIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvIHBvaW50IHRvIGEgVk4gb2YgdGhlIHNhbWUgdHlwZSBhcyB0aGlzIG5vZGUuIElmIHRoaXMgbWV0aG9kIGlzXHJcblx0Ly8gbm90IGltcGxlbWVudGVkIHRoZSB1cGRhdGUgaXMgY29uc2lkZXJlZCBwb3NzaWJsZSAtIGUuZy4gZm9yIHRleHQgbm9kZXMuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdGlzVXBkYXRlUG9zc2libGU/KCBuZXdWTjogVk4pOiBib29sZWFuO1xyXG5cclxuXHQvLyBQcmVwYXJlcyB0aGlzIG5vZGUgdG8gYmUgdXBkYXRlZCBmcm9tIHRoZSBnaXZlbiBub2RlLiBUaGlzIG1ldGhvZCBpcyBpbnZva2VkIG9ubHkgaWYgdXBkYXRlXHJcblx0Ly8gaGFwcGVucyBhcyBhIHJlc3VsdCBvZiByZW5kZXJpbmcgdGhlIHBhcmVudCBub2Rlcy4gVGhlIG5ld1ZOIHBhcmFtZXRlciBpcyBndWFyYW50ZWVkIHRvXHJcblx0Ly8gcG9pbnQgdG8gYSBWTiBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoaXMgbm9kZS4gVGhlIHJldHVybmVkIG9iamVjdCBpbmRpY2F0ZXMgd2hldGhlciBjaGlsZHJlblxyXG5cdC8vIHNob3VsZCBiZSB1cGRhdGVkIGFuZCB3aGV0aGVyIHRoZSBjb21taXRVcGRhdGUgbWV0aG9kIHNob3VsZCBiZSBjYWxsZWQuXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgUmVuZGVyIHBoYXNlLlxyXG5cdHByZXBhcmVVcGRhdGU/KCBuZXdWTjogVk4pOiBWTlVwZGF0ZURpc3A7XHJcblxyXG5cdC8vIENvbW1pdHMgdXBkYXRlcyBtYWRlIHRvIHRoaXMgbm9kZSB0byBET00uXHJcblx0Ly8gVGhpcyBtZXRob2QgaXMgcGFydCBvZiB0aGUgQ29tbWl0IHBoYXNlLlxyXG5cdGNvbW1pdFVwZGF0ZT8oIG5ld1ZOOiBWTik6IHZvaWQ7XHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgbm9kZSBzdXBwb3J0cyBoYW5kbGluZyBvZiBlcnJvcnM7IHRoYXQgaXMsIGV4Y2VwdGlvbiB0aHJvd24gZHVyaW5nXHJcblx0Ly8gcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZiBhbmQvb3IgaXRzIHN1Yi1ub2Rlcy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkIHRoZSBub2RlXHJcblx0Ly8gZG9lc24ndCBzdXBwb3J0IGVycm9yIGhhbmRsaW5nLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRzdXBwb3J0c0Vycm9ySGFuZGxpbmc/KCk6IGJvb2xlYW47XHJcblxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciBhbiBleGNlcHRpb24gd2FzIHRocm93biBkdXJpbmcgcmVuZGVyaW5nIG9mIHRoZSBub2RlIGl0c2VsZlxyXG5cdC8vIGFuZC9vciBpdHMgc3ViLW5vZGVzLiBUaGUgcmVuZGVyIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0aGlzIG1ldGhvZCByZXR1cm5zLlxyXG5cdC8vIFRoaXMgbWV0aG9kIGlzIHBhcnQgb2YgdGhlIFJlbmRlciBwaGFzZS5cclxuXHRoYW5kbGVFcnJvcj8oIHZuRXJyOiBhbnksIHBhdGg6IHN0cmluZ1tdKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIFZOVXBkYXRlRGlzcCB0eXBlIGRlc2NyaWJlcyB3aGV0aGVyIGNlcnRhaW4gYWN0aW9ucyBzaG91bGQgYmUgcGVyZm9ybWVkIG9uIHRoZSBub2RlXHJcbi8vIGR1cmluZyB1cGRhdGUuIFRoaXMgb2JqZWN0IGlzIHJldHVybmVkIGZyb20gdGhlIG5vZGUncyBwcmVwYXJlVXBkYXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBWTlVwZGF0ZURpc3Bcclxue1xyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIG5vZGUgaGFzIGNoYW5nZXMgdGhhdCBzaG91bGQgYmUgYXBwbGllZCB0byB0aGUgRE9NIHRyZWUuIElmIHRoaXNcclxuXHQvLyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlIGNvbW1pdFVwZGF0ZSBtZXRob2Qgd2lsbCBiZSBjbGxlZCBvbiB0aGUgbm9kZSBkdXJpbmcgdGhlIENvbW1pdFxyXG5cdC8vIHBoYXNlLlxyXG5cdHB1YmxpYyByZWFkb25seSBzaG91bGRDb21taXQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIEZhbGcgaW5kaWNhdG5nIHdoZXRoZXIgdGhlIHN1Yi1ub2RlcyBzaG91bGQgYmUgdXBkYXRlZC4gSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoZW4gdGhlXHJcblx0Ly8gbm9kZSdzIHJlbmRlciBtZXRob2Qgd2lsbCBiZSBpbW1lZGlhdGVseSBjYWxsZWQuXHJcblx0cHVibGljIHJlYWRvbmx5IHNob3VsZFJlbmRlcjogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3IoIHNob3VsZENvbW1pdDogYm9vbGVhbiwgc2hvdWxkUmVuZGVyOiBib29sZWFuKVxyXG5cdHtcclxuXHRcdHRoaXMuc2hvdWxkQ29tbWl0ID0gc2hvdWxkQ29tbWl0O1xyXG5cdFx0dGhpcy5zaG91bGRSZW5kZXIgPSBzaG91bGRSZW5kZXI7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0RG9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCB0cnVlKTtcclxuXHRwdWJsaWMgc3RhdGljIERvQ29tbWl0Tm9SZW5kZXIgPSBuZXcgVk5VcGRhdGVEaXNwKCB0cnVlLCBmYWxzZSk7XHJcblx0cHVibGljIHN0YXRpYyBOb0NvbW1pdERvUmVuZGVyID0gbmV3IFZOVXBkYXRlRGlzcCggZmFsc2UsIHRydWUpO1xyXG5cdHB1YmxpYyBzdGF0aWMgTm9Db21taXROb1JlbmRlciA9IG5ldyBWTlVwZGF0ZURpc3AoIGZhbHNlLCBmYWxzZSk7XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U3RvY2tWYWx1ZSggc2hvdWxkQ29tbWl0OiBib29sZWFuLCBzaG91bGRSZW5kZXI6IGJvb2xlYW4pXHJcblx0e1xyXG5cdFx0cmV0dXJuIHNob3VsZENvbW1pdFxyXG5cdFx0XHQ/IHNob3VsZFJlbmRlciA/IFZOVXBkYXRlRGlzcC5Eb0NvbW1pdERvUmVuZGVyIDogVk5VcGRhdGVEaXNwLkRvQ29tbWl0Tm9SZW5kZXJcclxuXHRcdFx0OiBzaG91bGRSZW5kZXIgPyBWTlVwZGF0ZURpc3AuTm9Db21taXREb1JlbmRlciA6IFZOVXBkYXRlRGlzcC5Ob0NvbW1pdE5vUmVuZGVyO1xyXG5cdH1cclxufTtcclxuXHJcblxyXG5cclxuLy8gUmV0dXJucyB0aGUgZmlyc3QgRE9NIG5vZGUgZGVmaW5lZCBieSBlaXRoZXIgdGhpcyB2aXJ0dWFsIG5vZGUgb3Igb25lIG9mIGl0cyBzdWItbm9kZXMuXHJcbi8vIFRoaXMgbWV0aG9kIGlzIG9ubHkgY2FsbGVkIG9uIHRoZSBtb3VudGVkIG5vZGVzLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gZmlyc3QgdG8gbGFzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBzdm4gb2Ygdm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRGaXJzdEROKCBzdm4pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsYXN0IERPTSBub2RlIGRlZmluZWQgYnkgZWl0aGVyIHRoaXMgdmlydHVhbCBub2RlIG9yIG9uZSBvZiBpdHMgc3ViLW5vZGVzLlxyXG4vLyBUaGlzIG1ldGhvZCBpcyBvbmx5IGNhbGxlZCBvbiB0aGUgbW91bnRlZCBub2Rlcy5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RETiggdm46IFZOKTogRE5cclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdHJldHVybiB2bi5vd25ETjtcclxuXHRlbHNlIGlmICghdm4uc3ViTm9kZXMpXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHJcblx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gbGFzdCB0byBmaXJzdCB1bnRpbCBhIHZhbGlkIG5vZGVcclxuXHQvLyBpcyByZXR1cm5lZFxyXG5cdGxldCBkbjtcclxuXHRmb3IoIGxldCBpID0gdm4uc3ViTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pXHJcblx0e1xyXG5cdFx0ZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW2ldKTtcclxuXHRcdGlmIChkbiAhPSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIHRoZSBsaXN0IG9mIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGU7IHRoYXQgaXMsXHJcbi8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUuIE5ldmVyIHJldHVybnMgbnVsbC5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEltbWVkaWF0ZUROcyggdm46IFZOKTogRE5bXVxyXG57XHJcblx0bGV0IGFycjogRE5bXSA9IFtdO1xyXG5cdGNvbGxlY3RJbW1lZGlhdGVETnMoIHZuLCBhcnIpO1xyXG5cdHJldHVybiBhcnI7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29sbGVjdHMgYWxsIERPTSBub2RlcyB0aGF0IGFyZSBpbW1lZGlhdGUgY2hpbGRyZW4gb2YgdGhpcyB2aXJ0dWFsIG5vZGUgKHRoYXQgaXMsXHJcbi8vIGFyZSBOT1QgY2hpbGRyZW4gb2Ygc3ViLW5vZGVzIHRoYXQgaGF2ZSB0aGVpciBvd24gRE9NIG5vZGUpIGludG8gdGhlIGdpdmVuIGFycmF5LlxyXG5mdW5jdGlvbiBjb2xsZWN0SW1tZWRpYXRlRE5zKCB2bjogVk4sIGFycjogRE5bXSk6IHZvaWRcclxue1xyXG5cdGlmICh2bi5vd25ETilcclxuXHRcdGFyci5wdXNoKCB2bi5vd25ETik7XHJcblx0ZWxzZSBpZiAodm4uc3ViTm9kZXMpXHJcblx0e1xyXG5cdFx0Ly8gcmVjdXJzaXZlbHkgY2FsbCB0aGlzIG1ldGhvZCBvbiB0aGUgc3ViLW5vZGVzIGZyb20gZmlyc3QgdG8gbGFzdFxyXG5cdFx0Zm9yKCBsZXQgc3ZuIG9mIHZuLnN1Yk5vZGVzKVxyXG5cdFx0XHRjb2xsZWN0SW1tZWRpYXRlRE5zKCBzdm4sIGFycik7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbi8vIEZpbmRzIHRoZSBmaXJzdCBET00gbm9kZSBpbiB0aGUgdHJlZSBvZiB2aXJ0dWFsIG5vZGVzIHRoYXQgY29tZXMgYWZ0ZXIgb3VyIG5vZGUgdGhhdCBpcyBhXHJcbi8vIGNoaWxkIG9mIG91ciBvd24gYW5jaG9yIGVsZW1lbnQuIFdlIHVzZSBpdCBhcyBhIG5vZGUgYmVmb3JlIHdoaWNoIHRvIGluc2VydC9tb3ZlIG5vZGVzIG9mXHJcbi8vIG91ciBzdWItbm9kZXMgZHVyaW5nIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLiBUaGUgYWxnb3JpdGhtIGZpcnN0IGdvZXMgdG8gdGhlIG5leHRcclxuLy8gc2libGluZ3Mgb2Ygb3VyIG5vZGUgYW5kIHRoZW4gdG8gdGhlIG5leHQgc2libGluZ3Mgb2Ygb3VyIHBhcmVudCBub2RlIHJlY3Vyc2l2ZWx5LiBJdCBzdG9wc1xyXG4vLyB3aGVuIHdlIGVpdGhlciBmaW5kIGEgRE9NIG5vZGUgKHRoZW4gaXQgaXMgcmV0dXJuZWQpIG9yIGZpbmQgYSBkaWZmZXJlbnQgYW5jaG9yIGVsZW1lbnRcclxuLy8gKHRoZW4gbnVsbCBpcyByZXR1cm5lZCkuIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBiZWZvcmUgdGhlIHJlY29uY2lsaWF0aW9uIHByb2Nlc3MgZm9yIG91clxyXG4vLyBzdWItbm9kZXMgc3RhcnRzIGFuZCwgdGhlcmVmb3JlLCBpdCBvbmx5IHRyYXZlcnNlcyBtb3VudGVkIG5vZGVzLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuOiBWTiwgYW5jaG9yRE46IEROKTogRE5cclxue1xyXG5cdC8vIGNoZWNrIGlmIHdlIGhhdmUgc2libGluZyBET00gbm9kZXMgYWZ0ZXIgb3VyIGxhc3Qgc3ViLW5vZGUgLSB0aGF0IG1pZ2h0IGJlIGVsZW1lbnRzXHJcblx0Ly8gbm90IGNvbnRyb2xsZWQgYnkgb3VyIGNvbXBvbmVudC5cclxuXHRpZiAodm4uc3ViTm9kZXMgJiYgdm4uc3ViTm9kZXMubGVuZ3RoID4gMClcclxuXHR7XHJcblx0XHRsZXQgZG4gPSBnZXRMYXN0RE4oIHZuLnN1Yk5vZGVzW3ZuLnN1Yk5vZGVzLmxlbmd0aCAtIDFdKTtcclxuXHRcdGlmIChkbilcclxuXHRcdHtcclxuXHRcdFx0bGV0IG5leHRTaWJsaW5nID0gZG4ubmV4dFNpYmxpbmc7XHJcblx0XHRcdGlmIChuZXh0U2libGluZyAhPT0gbnVsbClcclxuXHRcdFx0XHRyZXR1cm4gbmV4dFNpYmxpbmc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBsb29wIG92ZXIgb3VyIG5leHQgc2libGluZ3NcclxuXHRmb3IoIGxldCBudm4gPSB2bi5uZXh0OyBudm4gIT09IHVuZGVmaW5lZDsgbnZuID0gbnZuLm5leHQpXHJcblx0e1xyXG5cdFx0aWYgKCFudm4uYW5jaG9yRE4pXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cclxuXHRcdC8vIG5vdGUgdGhhdCBnZXRMYXN0RE4gY2FsbCB0cmF2ZXJzZXMgdGhlIGhpZXJhcmNoeSBvZiBub2Rlcy4gTm90ZSBhbHNvIHRoYXQgaXRcclxuXHRcdC8vIGNhbm5vdCBmaW5kIGEgbm9kZSB1bmRlciBhIGRpZmZlcmVudCBhbmNob3IgZWxlbWVudCBiZWNhdXNlIHRoZSBmaXJzdCBkaWZmZXJlbnRcclxuXHRcdC8vIGFuY2hvciBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQgYXMgYSB3YW50ZWQgbm9kZS5cclxuXHRcdGNvbnN0IGRuID0gZ2V0TGFzdEROKCBudm4pO1xyXG5cdFx0aWYgKGRuKVxyXG5cdFx0XHRyZXR1cm4gZG47XHJcblx0fVxyXG5cclxuXHQvLyByZWN1cnNlIHRvIG91ciBwYXJlbnQgaWYgZXhpc3RzXHJcblx0cmV0dXJuIHZuLnBhcmVudCAmJiB2bi5wYXJlbnQuYW5jaG9yRE4gPT09IGFuY2hvckROID8gZ2V0TmV4dEROVW5kZXJTYW1lQW5jaG9yRE4oIHZuLnBhcmVudCwgYW5jaG9yRE4pIDogbnVsbDtcclxufVxyXG5cclxuXHJcblxyXG4vLyBSZXR1cm5zIGFycmF5IG9mIG5vZGUgbmFtZXMgc3RhcnRpbmcgd2l0aCB0aGlzIG5vZGUgYW5kIHVwIHVudGlsIHRoZSB0b3AtbGV2ZWwgbm9kZS5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZOUGF0aCggdm46IFZOKTogc3RyaW5nW11cclxue1xyXG5cdGxldCBkZXB0aCA9IHZuLmRlcHRoO1xyXG5cdGxldCBwYXRoID0gQXJyYXk8c3RyaW5nPiggZGVwdGgpO1xyXG5cdGZvciggbGV0IGkgPSAwLCBudm46IFZOID0gdm47IGkgPCBkZXB0aDsgaSsrLCBudm4gPSBudm4ucGFyZW50KVxyXG5cdHtcclxuXHRcdHBhdGhbaV0gPSBudm4ubmFtZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBwYXRoO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcbmltcG9ydCB7Vk4sIEROfSBmcm9tIFwiLi9WTlwiXHJcbmltcG9ydCB7cmVxdWVzdE5vZGVVcGRhdGUsIHNjaGVkdWxlRnVuY0NhbGwsIHdyYXBDYWxsYmFja1dpdGhWTn0gZnJvbSBcIi4vU2NoZWR1bGVyXCJcclxuaW1wb3J0IHtub3RpZnlTZXJ2aWNlUHVibGlzaGVkLCBub3RpZnlTZXJ2aWNlVW5wdWJsaXNoZWQsIG5vdGlmeVNlcnZpY2VTdWJzY3JpYmVkLCBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkfSBmcm9tIFwiLi9QdWJTdWJcIlxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRpbXBvcnQge0RldGFpbGVkU3RhdHMsIFN0YXRzQ2F0ZWdvcnksIFN0YXRzQWN0aW9ufSBmcm9tIFwiLi4vdXRpbHMvU3RhdHNcIlxyXG4vLy8vLy8vLy8vXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5CYXNlIGNsYXNzIGlzIGEgYmFzZSBjbGFzcyBmb3IgYWxsIHR5cGVzIG9mIHZpcnR1YWwgbm9kZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVk5CYXNlIGltcGxlbWVudHMgVk5cclxue1xyXG4vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdHB1YmxpYyBhYnN0cmFjdCBnZXQgc3RhdHNDYXRlZ29yeSgpOiBTdGF0c0NhdGVnb3J5O1xyXG4vLy8vLy8vLy8vL1xyXG5cclxuXHQvLyBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZpcnR1YWwgbm9kZS4gVGhpcyBpcyB1c2VkIG1vc3RseSBmb3IgdHJhY2luZyBhbmQgZXJyb3JcclxuXHQvLyByZXBvcnRpbmcuIFRoZSBuYW1lIGNhbiBjaGFuZ2UgZHVyaW5nIHRoZSBsaWZldGltZSBvZiB0aGUgdmlydHVhbCBub2RlOyBmb3IgZXhhbXBsZSxcclxuXHQvLyBpdCBjYW4gcmVmbGVjdCBhbiBcImlkXCIgcHJvcGVydHkgb2YgYW4gZWxlbWVudCAoaWYgYW55KS5cclxuXHRwdWJsaWMgYWJzdHJhY3QgZ2V0IG5hbWUoKTogc3RyaW5nO1xyXG5cclxuXHQvLyBOb2RlJ3MgdHlwZS5cclxuXHRwdWJsaWMgdHlwZTogbWltLlZOVHlwZTtcclxuXHJcblx0Ly8gUGFyZW50IG5vZGUuIFRoaXMgaXMgbnVsbCBmb3IgdGhlIHRvcC1sZXZlbCAocm9vdCkgbm9kZXMuXHJcblx0cHVibGljIHBhcmVudDogVk5CYXNlO1xyXG5cclxuXHQvKiogQ29tcG9uZW50IHRoYXQgY3JlYXRlZCB0aGlzIG5vZGUgaW4gaXRzIHJlbmRlciBtZXRob2QgKG9yIHVuZGVmaW5lZCkuICovXHJcblx0cHVibGljIGNyZWF0b3I6IG1pbS5JQ29tcG9uZW50O1xyXG5cclxuXHQvLyBMZXZlbCBvZiBuZXN0aW5nIGF0IHdoaWNoIHRoZSBub2RlIHJlc2lkZXMgcmVsYXRpdmUgdG8gdGhlIHJvb3Qgbm9kZS5cclxuXHRwdWJsaWMgZGVwdGg6IG51bWJlcjtcclxuXHJcblx0Ly8gRE9NIG5vZGUgdW5kZXIgd2hpY2ggYWxsIGNvbnRlbnQgb2YgdGhpcyB2aXJ0dWFsIG5vZGUgaXMgcmVuZGVyZWQuXHJcblx0cHVibGljIGFuY2hvckROOiBETjtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBuZXh0IHNpYmxpbmcgbm9kZSBvciB1bmRlZmluZWQgZm9yIHRoZSBsYXN0IHNpYmxpbmcuXHJcblx0cHVibGljIG5leHQ6IFZOQmFzZTtcclxuXHJcblx0Ly8gUmVmZXJlbmNlIHRvIHRoZSBwcmV2aW91cyBzaWJsaW5nIG5vZGUgb3IgdW5kZWZpbmVkIGZvciB0aGUgZmlyc3Qgc2libGluZy5cclxuXHRwdWJsaWMgcHJldjogVk5CYXNlO1xyXG5cclxuXHQvLyBMaXN0IG9mIHN1Yi1ub2RlcyAtIGJvdGgga2V5ZWQgYW5kIHVua2V5ZWQgLSBkZWZpbmVkIG9ubHkgaWYgdGhlcmUgYXJlIHNvbWUgc3ViLW5vZGVzLlxyXG5cdHB1YmxpYyBzdWJOb2RlczogVk5CYXNlW107XHJcblxyXG5cdC8vIE1hcCBvZiBrZXllZCBzdWItbm9kZXMgLSBkZWZpbmVkIG9ubHkgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgZ3JlYXRlciB0aGFuIDEuXHJcblx0cHVibGljIGtleWVkU3ViTm9kZXM6IE1hcDxhbnksVk5CYXNlPjtcclxuXHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHRoYXQgdXBkYXRlIGhhcyBiZWVuIHJlcXVlc3RlZCBidXQgbm90IHlldCBwZXJmb3JtZWQuIFRoaXMgZmxhZyBpcyBuZWVkZWRcclxuXHQvLyB0byBwcmV2ZW50IHRyeWluZyB0byBhZGQgdGhlIG5vZGUgdG8gdGhlIGdsb2JhbCBtYXAgZXZlcnkgdGltZSB0aGUgcmVxdWVzdFVwZGF0ZSBtZXRob2RcclxuXHQvLyBpcyBjYWxsZWQuIFxyXG5cdHB1YmxpYyB1cGRhdGVSZXF1ZXN0ZWQ6IGJvb2xlYW47XHJcblxyXG5cdC8vIFwiVGljayBudW1iZXJcIiBkdXJpbmcgd2hpY2ggdGhlIG5vZGUgd2FzIGxhc3QgdXBkYXRlZC4gSWYgdGhpcyBub2RlJ3MgdGljayBudW1iZXIgZXF1YWxzXHJcblx0Ly8gdGhlIGN1cnJlbnQgdGljayBudW1iZXIgbWFpbnRhaW5lZCBieSB0aGUgcm9vdCBub2RlLCB0aGlzIGluZGljYXRlcyB0aGF0IHRoaXMgbm9kZSB3YXNcclxuXHQvLyBhbHJlYWR5IHVwZGF0ZWQgaW4gdGhpcyB1cGRhdGUgY3ljbGUuIFRoaXMgaGVscHMgcHJldmVudCBkb3VibGUtcmVuZGVyaW5nIG9mIGFcclxuXHQvLyBjb21wb25lbnQgaWYgYm90aCB0aGUgY29tcG9uZW50IGFuZCBpdHMgcGFyZW50IGFyZSB1cGRhdGVkIGluIHRoZSBzYW1lIGN5Y2xlLlxyXG5cdHB1YmxpYyBsYXN0VXBkYXRlVGljazogbnVtYmVyO1xyXG5cclxuXHJcblxyXG5cdC8vIEluaXRpYWxpemVzIHRoZSBub2RlIGJ5IHBhc3NpbmcgdGhlIHBhcmVudCBub2RlIHRvIGl0LiBBZnRlciB0aGlzLCB0aGUgbm9kZSBrbm93cyBpdHNcclxuXHQvLyBwbGFjZSBpbiB0aGUgaGllcmFyY2h5IGFuZCBnZXRzIGFjY2VzcyB0byB0aGUgcm9vdCBvZiBpdCAtIHRoZSBSb290Vk4gb2JqZWN0LlxyXG5cdHB1YmxpYyBpbml0KCBwYXJlbnQ6IFZOQmFzZSwgY3JlYXRvcjogbWltLklDb21wb25lbnQpOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0XHR0aGlzLmRlcHRoID0gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5kZXB0aCArIDEgOiAwO1xyXG5cdFx0dGhpcy5jcmVhdG9yID0gY3JlYXRvcjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gQ2xlYW5zIHVwIHRoZSBub2RlIG9iamVjdCBiZWZvcmUgaXQgaXMgcmVsZWFzZWQuXHJcblx0cHVibGljIHRlcm0oKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHJlbW92ZSBpbmZvcm1hdGlvbiBhYm91dCBhbnkgcHVibGlzaGVkIGFuZCBzdWJzY3JpYmVkIHNlcnZpY2VzXHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmZvckVhY2goIChzZXJ2aWNlLCBpZCkgPT4gbm90aWZ5U2VydmljZVVucHVibGlzaGVkKCBpZCwgdGhpcykpO1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmNsZWFyKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzICE9PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmZvckVhY2goIChpbmZvLCBpZCkgPT4geyBub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZCwgdGhpcyk7IH0pO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZWRTZXJ2aWNlcy5jbGVhcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubmV4dCA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMucHJldiA9IHVuZGVmaW5lZDtcclxuXHRcdHRoaXMuc3ViTm9kZXMgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmtleWVkU3ViTm9kZXMgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmNyZWF0b3IgPSB1bmRlZmluZWQ7XHJcblx0XHR0aGlzLmRlcHRoID0gdW5kZWZpbmVkO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNjaGVkdWxlcyBhbiB1cGRhdGUgZm9yIHRoaXMgbm9kZS5cclxuXHRwdWJsaWMgcmVxdWVzdFVwZGF0ZSgpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLnVwZGF0ZVJlcXVlc3RlZClcclxuXHRcdHtcclxuXHRcdFx0cmVxdWVzdE5vZGVVcGRhdGUoIHRoaXMpO1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVJlcXVlc3RlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjaGVkdWxlcyB0byBjYWxsIHRoZSBnaXZlbiBmdW5jdGlvbiBiZWZvcmUgYWxsIHRoZSBzY2hlZHVsZWQgY29tcG9uZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuXHQgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbiB0byBiZSBjYWxsZWQuXHJcblx0ICogQHBhcmFtIHRoYXQgT2JqZWN0IHRvIGJlIHVzZWQgYXMgdGhlIFwidGhpc1wiIHZhbHVlIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZC4gVGhpcyBwYXJhbWV0ZXJcclxuXHQgKiAgIGlzIG5vdCBuZWVkZWQgaWYgdGhlIGZ1bmN0aW9uIGlzIGFscmVhZHkgYm91bmQgb3IgaXQgaXMgYW4gYXJyb3cgZnVuY3Rpb24uXHJcblx0ICovXHJcblx0cHVibGljIHNjaGVkdWxlQ2FsbEJlZm9yZVVwZGF0ZSggZnVuYzogbWltLlNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmMsIHRydWUsIHRoYXQsIHRoaXMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTY2hlZHVsZXMgdG8gY2FsbCB0aGUgZ2l2ZW4gZnVuY3Rpb24gYmVmb3JlIGFsbCB0aGUgc2NoZWR1bGVkIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHVwZGF0ZWQuXHJcblx0ICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gdG8gYmUgY2FsbGVkLlxyXG5cdCAqIEBwYXJhbSB0aGF0IE9iamVjdCB0byBiZSB1c2VkIGFzIHRoZSBcInRoaXNcIiB2YWx1ZSB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQuIFRoaXMgcGFyYW1ldGVyXHJcblx0ICogICBpcyBub3QgbmVlZGVkIGlmIHRoZSBmdW5jdGlvbiBpcyBhbHJlYWR5IGJvdW5kIG9yIGl0IGlzIGFuIGFycm93IGZ1bmN0aW9uLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBzY2hlZHVsZUNhbGxBZnRlclVwZGF0ZSggZnVuYzogbWltLlNjaGVkdWxlZEZ1bmNUeXBlLCB0aGF0Pzogb2JqZWN0KTogdm9pZFxyXG5cdHtcclxuXHRcdHNjaGVkdWxlRnVuY0NhbGwoIGZ1bmMsIGZhbHNlLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGFuIG9iamVjdCBvZiBhbnkgdHlwZSBhcyBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgdGhhdCB3aWxsIGJlIGF2YWlsYWJsZSBmb3JcclxuXHQvLyBjb25zdW1wdGlvbiBieSBkZXNjZW5kYW50IG5vZGVzLlxyXG5cdHB1YmxpYyBwdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZywgc2VydmljZTogYW55KTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxhbnk+KCk7XHJcblxyXG5cdFx0bGV0IGV4aXN0aW5TZXJ2aWNlOiBhbnkgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGV4aXN0aW5TZXJ2aWNlICE9PSBzZXJ2aWNlKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNldCggaWQsIHNlcnZpY2UpO1xyXG5cdFx0XHRub3RpZnlTZXJ2aWNlUHVibGlzaGVkKCBpZCwgdGhpcyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVucmVnaXN0ZXJzIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC5cclxuXHRwdWJsaWMgdW5wdWJsaXNoU2VydmljZSggaWQ6IHN0cmluZyk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm47XHJcblxyXG5cdFx0dGhpcy5wdWJsaXNoZWRTZXJ2aWNlcy5kZWxldGUoIGlkKTtcclxuXHRcdG5vdGlmeVNlcnZpY2VVbnB1Ymxpc2hlZCggaWQsIHRoaXMpO1xyXG5cclxuXHRcdGlmICh0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMucHVibGlzaGVkU2VydmljZXMgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFN1YnNjcmliZXMgZm9yIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gSWYgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgaXMgcmVnaXN0ZXJlZFxyXG5cdC8vIGJ5IG9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMsIHRoZSBwYXNzZWQgUmVmIG9iamVjdCB3aWxsIHJlZmVyZW5jZSBpdDsgb3RoZXJ3aXNlLFxyXG5cdC8vIHRoZSBSZWYgb2JqZWN0IHdpbGwgYmUgc2V0IHRvIHRoZSBkZWZhdWx0VmFsdWUgKGlmIHNwZWNpZmllZCkgb3Igd2lsbCByZW1haW4gdW5kZWZpbmVkLlxyXG5cdC8vIFdoZW5ldmVyIHRoZSB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHJlZ2lzdGVyZWQgYnkgYSBjbG9zZXN0IGFuY2VzdG9yIG5vZGUgaXNcclxuXHQvLyBjaGFuZ2VkLCB0aGUgUmVmIG9iamVjdCB3aWxsIHJlY2VpdmUgdGhlIG5ldyB2YWx1ZS5cclxuXHRwdWJsaWMgc3Vic2NyaWJlU2VydmljZSggaWQ6IHN0cmluZywgcmVmOiBtaW0uUmVmUHJvcFR5cGUsIGRlZmF1bHRTZXJ2aWNlPzogYW55LCB1c2VTZWxmPzogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMgPSBuZXcgTWFwPHN0cmluZyxWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbz4oKTtcclxuXHJcblx0XHRsZXQgaW5mbyA9IG5ldyBWTlN1YnNjcmliZWRTZXJ2aWNlSW5mbygpO1xyXG5cdFx0aW5mby5yZWYgPSByZWY7XHJcblx0XHRpbmZvLmRlZmF1bHRTZXJ2aWNlID0gZGVmYXVsdFNlcnZpY2U7XHJcblx0XHRpbmZvLnVzZVNlbGYgPSB1c2VTZWxmID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLnNldCggaWQsIGluZm8pO1xyXG5cdFx0bm90aWZ5U2VydmljZVN1YnNjcmliZWQoIGlkLCB0aGlzKTtcclxuXHRcdG1pbS5zZXRSZWYoIHJlZiwgdGhpcy5nZXRTZXJ2aWNlKCBpZCwgZGVmYXVsdFNlcnZpY2UpKTtcclxufVxyXG5cclxuXHJcblxyXG5cdC8vIFVuc3Vic2NyaWJlcyBmcm9tIGEgc2VydmljZSB3aXRoIHRoZSBnaXZlbiBJRC4gVGhlIFJlZiBvYmplY3QgdGhhdCB3YXMgdXNlZCB0byBzdWJzY3JpYmUsXHJcblx0Ly8gd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxyXG5cdHB1YmxpYyB1bnN1YnNjcmliZVNlcnZpY2UoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgaW5mbyA9IHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdG1pbS5zZXRSZWYoIGluZm8ucmVmLCB1bmRlZmluZWQpO1xyXG5cdFx0dGhpcy5zdWJzY3JpYmVkU2VydmljZXMuZGVsZXRlKCBpZCk7XHJcblx0XHRub3RpZnlTZXJ2aWNlVW5zdWJzY3JpYmVkKCBpZCwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLnNpemUgPT09IDApXHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXRyaWV2ZXMgdGhlIHZhbHVlIGZvciBhIHNlcnZpY2Ugd2l0aCB0aGUgZ2l2ZW4gSUQgcmVnaXN0ZXJlZCBieSBhIGNsb3Nlc3QgYW5jZXN0b3JcclxuXHQvLyBub2RlIG9yIHRoZSBkZWZhdWx0IHZhbHVlIGlmIG5vbmUgb2YgdGhlIGFuY2VzdG9yIG5vZGVzIHJlZ2lzdGVyZWQgYSBzZXJ2aWNlIHdpdGhcclxuXHQvLyB0aGlzIElELiBUaGlzIG1ldGhvZCBkb2Vzbid0IGVzdGFibGlzaCBhIHN1YnNjcmlwdGlvbiBhbmQgb25seSByZWZsZWN0cyB0aGUgY3VycmVudCBzdGF0ZS5cclxuXHRwdWJsaWMgZ2V0U2VydmljZSggaWQ6IHN0cmluZywgZGVmYXVsdFNlcnZpY2U/OiBhbnksIHVzZVNlbGY/OiBib29sZWFuKTogYW55XHJcblx0e1xyXG5cdFx0bGV0IHNlcnZpY2UgPSB0aGlzLmZpbmRTZXJ2aWNlKCBpZCwgdXNlU2VsZik7XHJcblx0XHRyZXR1cm4gc2VydmljZSAhPT0gdW5kZWZpbmVkID8gc2VydmljZSA6IGRlZmF1bHRTZXJ2aWNlO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBHb2VzIHVwIHRoZSBjaGFpbiBvZiBub2RlcyBsb29raW5nIGZvciBhIHB1Ymxpc2hlZCBzZXJ2aWNlIHdpdGggdGhlIGdpdmVuIElELiBSZXR1cm5zXHJcblx0Ly8gdW5kZWZpbmVkIGlmIHRoZSBzZXJ2aWNlIGlzIG5vdCBmb3VuZC4gTm90ZSB0aGF0IG51bGwgbWlnaHQgYmUgYSB2YWxpZCB2YWx1ZS5cclxuXHRwcml2YXRlIGZpbmRTZXJ2aWNlKCBpZDogc3RyaW5nLCB1c2VTZWxmPzogYm9vbGVhbik6IGFueVxyXG5cdHtcclxuXHRcdGlmICh1c2VTZWxmKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAodGhpcy5wdWJsaXNoZWRTZXJ2aWNlcyAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0bGV0IHNlcnZpY2UgPSB0aGlzLnB1Ymxpc2hlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0XHRcdGlmIChzZXJ2aWNlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0XHRyZXR1cm4gc2VydmljZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGdvIHVwIHRoZSBjaGFpbjsgbm90ZSB0aGF0IHdlIGRvbid0IHBhc3MgdGhlIHVzZVNlbGYgcGFyYW1ldGVyIG9uLlxyXG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuZmluZFNlcnZpY2UoIGlkLCB0cnVlKSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTm90aWZpZXMgdGhlIG5vZGUgdGhhdCBwdWJsaWNhdGlvbiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gc2VydmljZSAodG8gd2hpY2ggdGhlIG5vZGVcclxuXHQvLyBoYXMgcHJldmlvdXNseSBzdWJzY3JpYmVkKSBoYXMgY2hhbmdlZC5cclxuXHRwdWJsaWMgbm90aWZ5U2VydmljZUNoYW5nZWQoIGlkOiBzdHJpbmcpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHRsZXQgaW5mbyA9IHRoaXMuc3Vic2NyaWJlZFNlcnZpY2VzLmdldCggaWQpO1xyXG5cdFx0aWYgKGluZm8gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmV0dXJuO1xyXG5cclxuXHRcdG1pbS5zZXRSZWYoIGluZm8ucmVmLCB0aGlzLmdldFNlcnZpY2UoIGlkLCBpbmZvLmRlZmF1bHRTZXJ2aWNlKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlIGFzIHRoZSBnaXZlbiBjYWxsYmFjayBzbyB0aGF0IGlmIHRoZSBvcmlnaW5hbFxyXG5cdCAqIGNhbGxiYWNrIHRocm93cyBhbiBleGNlcHRpb24sIGl0IGlzIHByb2Nlc3NlZCBieSB0aGUgTWltYmwgZXJyb3IgaGFuZGxpbmcgbWVjaGFuaXNtIHNvIHRoYXQgdGhlXHJcblx0ICogZXhjZXB0aW9uIGJ1YmxlcyBmcm9tIHRoaXMgdmlydHVhbCBub2RlIHVwIHRoZSBoaWVyYXJjaHkgdW50aWwgYSBub2RlL2NvbXBvbmVudCB0aGF0IGtub3dzXHJcblx0ICogdG8gaGFuZGxlIGVycm9ycyBpcyBmb3VuZC5cclxuXHQgKiBcclxuXHQgKiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWQgYnkgdGhlIGNvZGUgdGhhdCBpcyBub3QgcGFydCBvZiBhbnkgY29tcG9uZW50IGJ1dCBzdGlsbCBoYXMgYWNjZXNzXHJcblx0ICogdG8gdGhlIElWTm9kZSBvYmplY3Q7IGZvciBleGFtcGxlLCBjdXN0b20gYXR0cmlidXRlIGhhbmRsZXJzLiBDb21wb25lbnRzIHRoYXQgZGVyaXZlIGZyb20gdGhlXHJcblx0ICogbWltLkNvbXBvbmVudCBjbGFzcyBzaG91bGQgdXNlIHRoZSB3cmFwQ2FsbGJhY2sgbWV0aG9kIG9mIHRoZSBtaW0uQ29tcG9uZW50IGNsYXNzLlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSBjYWxsYmFjayBcclxuXHQgKi9cclxuXHRwdWJsaWMgd3JhcENhbGxiYWNrPFQgZXh0ZW5kcyBGdW5jdGlvbj4oIGNhbGxiYWNrOiBULCB0aGF0Pzogb2JqZWN0KTogVFxyXG5cdHtcclxuXHRcdHJldHVybiB3cmFwQ2FsbGJhY2tXaXRoVk4oIGNhbGxiYWNrLCB0aGF0LCB0aGlzKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIHNlcnZpY2Ugb2JqZWN0cyBwdWJsaXNoZWQgYnkgdGhpcyBub2RlLlxyXG5cdHByaXZhdGUgcHVibGlzaGVkU2VydmljZXM6IE1hcDxzdHJpbmcsYW55PjtcclxuXHJcblx0Ly8gTWFwIG9mIHNlcnZpY2UgSURzIHRvIG9iamVjdHMgY29uc3RpdHV0aW5nIHN1YnNjcmlwdGlvbnMgbWFkZSBieSB0aGlzIG5vZGUuXHJcblx0cHJpdmF0ZSBzdWJzY3JpYmVkU2VydmljZXM6IE1hcDxzdHJpbmcsVk5TdWJzY3JpYmVkU2VydmljZUluZm8+O1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgVk5TdWJzY3JpYmVkU2VydmljZUluZm8gY2xhc3Mga2VlcHMgaW5mb3JtYXRpb24gYWJvdXQgYSBzdWJzY3JpcHRpb24gb2YgYSBub2RlIHRvIGEgc2VydmljZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNsYXNzIFZOU3Vic2NyaWJlZFNlcnZpY2VJbmZvXHJcbntcclxuXHQvLyBSZWZlcmVuY2UgdGhhdCB3aWxsIGJlIGZpbGxlZCBpbiB3aXRoIHRoZSBzZXJ2aWNlIHZhbHVlXHJcblx0cmVmOiBtaW0uUmVmUHJvcFR5cGU8YW55PjtcclxuXHJcblx0Ly8gRGVmYXVsdCB2YWx1ZSBvZiB0aGUgc2VydmljZSB0aGF0IGlzIHVzZWQgaWYgbm9uZSBvZiB0aGUgYW5jZXN0b3Igbm9kZXMgcHVibGlzaGVzIHRoZVxyXG5cdC8vIHNlcnZpY2VcclxuXHRkZWZhdWx0U2VydmljZTogYW55O1xyXG5cclxuXHQvLyBGbGFnIGluZGljYXRpbmcgd2hldGhlciBhIG5vZGUgY2FuIHN1YnNjcmliZSB0byBhIHNlcnZpY2UgdGhhdCBpdCBpbXBsZW1lbnRzIGl0c2VsZi4gVGhpc1xyXG5cdC8vIGlzIHVzZWZ1bCBpbiBjYXNlIHdoZXJlIGEgc2VydmljZSB0aGF0IGlzIGltcGxlbWVudGVkIGJ5IGEgY29tcG9uZW50IGNhbiBjaGFpbiB0byBhIHNlcnZpY2VcclxuXHQvLyBpbXBsZW1lbnRlZCBieSBhbiBhbmNlc3RvciBjb21wb25lbnQuXHJcblx0dXNlU2VsZjogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge0ROLCBWTiwgVk5VcGRhdGVEaXNwLCBnZXRGaXJzdEROLCBnZXRMYXN0RE59IGZyb20gXCIuL1ZOXCJcclxuaW1wb3J0IHtjcmVhdGVWTkNoYWluRnJvbUNvbnRlbnR9IGZyb20gXCIuL0NvbnRlbnRGdW5jc1wiXHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5BY3Rpb24gZW51bWVyYXRpb24gc3BlY2lmaWVzIHBvc3NpYmxlIGFjdGlvbnMgdG8gcGVyZm9ybSBmb3IgbmV3IG5vZGVzIGR1cmluZ1xyXG4gKiByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gVk5EaXNwQWN0aW9uXHJcbntcclxuXHQvKipcclxuXHQgKiBFaXRoZXIgaXQgaXMgbm90IHlldCBrbm93biB3aGF0IHRvIGRvIHdpdGggdGhlIG5vZGUgaXRzZWxmIG9yIHRoaXMgaXMgYSBzdGVtIG5vZGU7IHRoYXQgaXMsXHJcblx0ICogb25seSB0aGUgbm9kZSdzIGNoaWxkcmVuIHNob3VsZCBiZSB1cGRhdGVkLlxyXG5cdCAqL1xyXG5cdFVua25vd24gPSAwLFxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbmV3IG5vZGUgc2hvdWxkIGJlIGluc2VydGVkLiBUaGlzIG1lYW5zIHRoYXQgZWl0aGVyIHRoZXJlIHdhcyBubyBjb3VudGVycGFydCBvbGQgbm9kZVxyXG5cdCAqIGZvdW5kIG9yIHRoZSBmb3VuZCBub2RlIGNhbm5vdCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG9uZSBub3IgY2FuIHRoZSBvbGQgbm9kZSBiZSByZXVzZWRcclxuXHQgKiBieSB0aGUgbmV3IG9uZSAoZS5nLiB0aGV5IGFyZSBvZiBkaWZmZXJlbnQgdHlwZSkuXHJcblx0ICovXHJcblx0SW5zZXJ0ID0gMSxcclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG5ldyBub2RlIHNob3VsZCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgb2xkIG5vZGUuIFRoaXMgdmFsdWUgaXMgYWxzbyB1c2VkIGZvciBJbnN0YW5jZVZOXHJcblx0ICogbm9kZXMgaWYgdGhlIG9sZCBhbmQgdGhlIG5ldyBhcmUgdGhlIHNhbWUgbm9kZS5cclxuXHQgKi9cclxuXHRVcGRhdGUgPSAyLFxyXG59XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwR3JvdXAgY2xhc3MgZGVzY3JpYmVzIGEgZ3JvdXAgb2YgY29uc2VjdXRpdmUgVk5EaXNwIG9iamVjdHMgY29ycmVzcHBvbmRpbmcgdG8gdGhlXHJcbiAqIHNlcXVlbmNlIG9mIHN1Yi1ub2Rlcy4gVGhlIGdyb3VwIGlzIGRlc2NyaWJlZCB1c2luZyBpbmRpY2VzIG9mIFZORGlzcCBvYmplY3RzIGluIHRoZVxyXG4gKiBzdWJOb2RlRGlzcCBmaWVsZCBvZiB0aGUgcGFyZW50IFZORGlzcCBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVk5EaXNwR3JvdXBcclxue1xyXG5cdC8qKiBwYXJlbnQgVk5EaXNwIHRvIHdoaWNoIHRoaXMgZ3JvdXAgYmVsb25ncyAqL1xyXG5cdHB1YmxpYyBwYXJlbnREaXNwOiBWTkRpc3A7XHJcblx0XHJcblx0LyoqIEFjdGlvbiB0byBiZSBwZXJmb3JtZWQgb24gdGhlIG5vZGVzIGluIHRoZSBncm91cCAqL1xyXG5cdHB1YmxpYyBhY3Rpb246IFZORGlzcEFjdGlvbjtcclxuXHJcblx0LyoqIEluZGV4IG9mIHRoZSBmaXJzdCBWTkRpc3AgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGZpcnN0OiBudW1iZXI7XHJcblxyXG5cdC8qKiBJbmRleCBvZiB0aGUgbGFzdCBWTkRpc3AgaW4gdGhlIGdyb3VwICovXHJcblx0cHVibGljIGxhc3Q6IG51bWJlcjtcclxuXHJcblx0LyoqIE51bWJlciBvZiBub2RlcyBpbiB0aGUgZ3JvdXAuICovXHJcblx0cHVibGljIGdldCBjb3VudCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5sYXN0IC0gdGhpcy5maXJzdCArIDEgfTtcclxuXHJcblx0LyoqIEZpcnN0IERPTSBub2RlIGluIHRoZSBncm91cCAtIHdpbGwgYmUga25vd24gYWZ0ZXIgdGhlIG5vZGVzIGFyZSBwaHlzaWNhbGx5IHVwZGF0ZWQgKi9cclxuXHRwdWJsaWMgZmlyc3RETjogRE47XHJcblxyXG5cdC8qKiBGaXJzdCBET00gbm9kZSBpbiB0aGUgZ3JvdXAgLSB3aWxsIGJlIGtub3duIGFmdGVyIHRoZSBub2RlcyBhcmUgcGh5c2ljYWxseSB1cGRhdGVkICovXHJcblx0cHVibGljIGxhc3RETjogRE47XHJcblxyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoIHBhcmVudERpc3A6IFZORGlzcCwgYWN0aW9uOiBWTkRpc3BBY3Rpb24sIGZpcnN0OiBudW1iZXIsIGxhc3Q/OiBudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5wYXJlbnREaXNwID0gcGFyZW50RGlzcDtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdFx0dGhpcy5maXJzdCA9IGZpcnN0O1xyXG5cdFx0dGhpcy5sYXN0ID0gbGFzdDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRGV0ZXJtaW5lcyBmaXJzdCBhbmQgbGFzdCBET00gbm9kZXMgZm9yIHRoZSBncm91cC4gVGhpcyBtZXRob2QgaXMgaW52b2tlZCBvbmx5IGFmdGVyIHRoZVxyXG5cdCAqIG5vZGVzIHdlcmUgcGhpc2ljYWxseSB1cGRhdGVkL2luc2VydGVkIGFuZCB3ZSBjYW4gb2J0YWluIHRoZWlyIERPTSBub2Rlcy5cclxuXHQgKi9cclxuXHRwdWJsaWMgZGV0ZXJtaW5lRE5zKClcclxuXHR7XHJcblx0XHRsZXQgZGlzcDogVk5EaXNwO1xyXG5cdFx0bGV0IHZuOiBWTjtcclxuXHRcdGZvciggbGV0IGkgPSB0aGlzLmZpcnN0OyBpIDw9IHRoaXMubGFzdDsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRkaXNwID0gdGhpcy5wYXJlbnREaXNwLnN1Yk5vZGVEaXNwc1tpXTtcclxuXHRcdFx0dm4gPSB0aGlzLmFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSA/IGRpc3Aub2xkVk4gOiBkaXNwLm5ld1ZOO1xyXG5cdFx0XHR0aGlzLmZpcnN0RE4gPSBnZXRGaXJzdEROKCB2bik7XHJcblx0XHRcdGlmICh0aGlzLmZpcnN0RE4pXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKCBsZXQgaSA9IHRoaXMubGFzdDsgaSA+PSB0aGlzLmZpcnN0OyBpLS0pXHJcblx0XHR7XHJcblx0XHRcdGRpc3AgPSB0aGlzLnBhcmVudERpc3Auc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHR2biA9IHRoaXMuYWN0aW9uID09PSBWTkRpc3BBY3Rpb24uVXBkYXRlID8gZGlzcC5vbGRWTiA6IGRpc3AubmV3Vk47XHJcblx0XHRcdHRoaXMubGFzdEROID0gZ2V0TGFzdEROKCB2bik7XHJcblx0XHRcdGlmICh0aGlzLmxhc3RETilcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIElmIGEgbm9kZSBoYXMgbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIHN1Yi1ub2RlcywgdGhlbiB3ZSBidWlsZCBncm91cHMuIFRoZSBpZGVhIGlzIHRoYXRcclxuICogb3RoZXJ3aXNlLCB0aGUgb3ZlcmhlYWQgb2YgYnVpbGRpbmcgZ3JvdXBzIGlzIG5vdCB3b3J0aCBpdC5cclxuICovXHJcbmNvbnN0IE5PX0dST1VQX1RIUkVTSE9MRCA9IDg7XHJcblxyXG5cclxuXHJcbi8qKlxyXG4gKiBUaGUgVk5EaXNwIGNsYXNzIGlzIGEgcmVjdXJzaXZlIHN0cnVjdHVyZSB0aGF0IGRlc2NyaWJlcyBhIGRpc3Bvc2l0aW9uIGZvciBhIG5vZGUgYW5kIGl0c1xyXG4gKiBzdWItbm9kZXMgZHVyaW5nIHRoZSByZWNvbmNpbGlhdGlvbiBwcm9jZXNzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZORGlzcFxyXG57XHJcblx0Y29uc3RydWN0b3IoIG5ld1ZOOiBWTiwgYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVua25vd24sIG9sZFZOPzogVk4pXHJcblx0e1xyXG5cdFx0dGhpcy5hY3Rpb24gPSBhY3Rpb247XHJcblx0XHR0aGlzLm5ld1ZOID0gbmV3Vk47XHJcblx0XHR0aGlzLm9sZFZOID0gb2xkVk47XHJcblx0fVxyXG5cclxuXHQvKiogQWN0aW9uIHRvIGJlIHBlcmZvcm1lZCBvbiB0aGUgbm9kZSAqL1xyXG5cdHB1YmxpYyBhY3Rpb246IFZORGlzcEFjdGlvbjtcclxuXHJcblx0LyoqIE5ldyB2aXJ0dWFsIG5vZGUgdG8gaW5zZXJ0IG9yIHRvIHVwZGF0ZSBhbiBvbGQgbm9kZSAqL1xyXG5cdHB1YmxpYyBuZXdWTjogVk47XHJcblxyXG5cdC8qKiBPbGQgdmlydHVhbCBub2RlIHRvIGJlIHVwZGF0ZWQuIFRoaXMgaXMgb25seSB1c2VkIGZvciB0aGUgVXBkYXRlIGFjdGlvbi4gKi9cclxuXHRwdWJsaWMgb2xkVk46IFZOO1xyXG5cclxuXHQvKiogRGlzcG9zaXRpb24gZmxhZ3MgZm9yIHRoZSBVcGRhdGUgYWN0aW9uLiBUaGlzIGlzIG5vdCB1c2VkIGZvciB0aGUgSW5zZXJ0IGFjdGlvbnMuICovXHJcblx0cHVibGljIHVwZGF0ZURpc3A6IFZOVXBkYXRlRGlzcDtcclxuXHJcblx0LyoqXHJcblx0ICogQXJyYXkgb2YgZGlzcG9zaXRpb24gb2JqZWN0cyBmb3Igc3ViLW5vZGVzLiBUaGlzIGluY2x1ZGVzIG5vZGVzIHRvIGJlIHVwZGF0ZWRcclxuXHQgKiBhbmQgdG8gYmUgaW5zZXJ0ZWQuXHJcblx0ICovXHJcblx0cHVibGljIHN1Yk5vZGVEaXNwczogVk5EaXNwW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBkdXJpbmcgdXBkYXRlIG9mIHRoZSBzdWItbm9kZXMuICovXHJcblx0cHVibGljIHN1Yk5vZGVzVG9SZW1vdmU6IFZOW107XHJcblxyXG5cdC8qKiBBcnJheSBvZiBncm91cHMgb2Ygc3ViLW5vZGVzIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgb3IgaW5zZXJ0ZWQuICovXHJcblx0cHVibGljIHN1Yk5vZGVHcm91cHM6IFZORGlzcEdyb3VwW107XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQ29tcGFyZXMgb2xkIGFuZCBuZXcgY2hhaW5zIG9mIHN1Yi1ub2RlcyBhbmQgZGV0ZXJtaW5lcyB3aGF0IG5vZGVzIHNob3VsZCBiZSBjcmVhdGVkLCBkZWxldGVkXHJcblx0ICogb3IgdXBkYXRlZC4gVGhlIHJlc3VsdCBpcyByZW1lbWJlcmVkIGFzIGFuIGFycmF5IG9mIFZORGlzcCBvYmplY3RzIGZvciBlYWNoIHN1Yi1ub2RlIGFuZCBhc1xyXG5cdCAqIGFycmF5IG9mIG9sZCBzdWItbm9kZXMgdGhhdCBzaG91bGQgYmUgZGVsZXRlZC4gSW4gYWRkaXRpb24sIHRoZSBuZXcgc3ViLW5vZGVzIGFyZSBkaXZpZGVkXHJcblx0ICogaW50byBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgdXBkYXRlZCBhbmQgb2Ygbm9kZXMgdGhhdCBzaG91bGQgYmUgaW5zZXJ0ZWQuXHJcblx0ICogVGhlIGdyb3VwcyBhcmUgYnVpbHQgaW4gYSB3YXkgc28gdGhhdCBpZiBhIG5vZGUgc2hvdWxkIGJlIG1vdmVkLCBpdHMgZW50aXJlIGdyb3VwIGlzIG1vdmVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBidWlsZFN1Yk5vZGVEaXNwb3NpdGlvbnMoKTogdm9pZFxyXG5cdHtcclxuXHRcdC8vIHJlbmRlciB0aGUgbmV3IGNvbnRlbnRcclxuXHRcdGxldCBuZXdDaGFpbiA9IGNyZWF0ZVZOQ2hhaW5Gcm9tQ29udGVudCggdGhpcy5vbGRWTi5yZW5kZXIoKSk7XHJcblx0XHRsZXQgbmV3TGVuID0gbmV3Q2hhaW4gPyBuZXdDaGFpbi5sZW5ndGggOiAwO1xyXG5cclxuXHRcdGxldCBvbGRDaGFpbiA9IHRoaXMub2xkVk4uc3ViTm9kZXM7XHJcblx0XHRsZXQgb2xkTGVuID0gb2xkQ2hhaW4gPyBvbGRDaGFpbi5sZW5ndGggOiAwO1xyXG5cclxuXHRcdC8vIGlmIGVpdGhlciBvbGQgb3IgbmV3IG9yIGJvdGggY2hhaW5zIGFyZSBlbXB0eSwgd2UgZG8gc3BlY2lhbCB0aGluZ3NcclxuXHRcdGlmIChuZXdMZW4gPT09IDAgJiYgb2xkTGVuID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBib3RoIGNoYWluIGFyZSBlbXB0eSAtIGRvIG5vdGhpbmdcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAobmV3TGVuID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBuZXcgY2hhaW4gaXMgZW1wdHkgLSBkZWxldGUgYWxsIG9sZCBub2Rlc1xyXG5cdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUgPSBvbGRDaGFpbjtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAob2xkTGVuID09PSAwKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBvbGQgY2hhaW4gaXMgZW1wdHkgLSBpbnNlcnQgYWxsIG5ldyBub2Rlc1xyXG5cdFx0XHR0aGlzLnN1Yk5vZGVEaXNwcyA9IG5ld0NoYWluLm1hcCggbmV3Vk4gPT4gbmV3IFZORGlzcCggbmV3Vk4sIFZORGlzcEFjdGlvbi5JbnNlcnQpKTtcclxuXHRcdFx0aWYgKG5ld0xlbiA+IE5PX0dST1VQX1RIUkVTSE9MRClcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMgPSBbbmV3IFZORGlzcEdyb3VwKCB0aGlzLCBWTkRpc3BBY3Rpb24uSW5zZXJ0LCAwLCBuZXdMZW4gLSAxKV07XHJcblxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZGV0ZXJtaW5lIHdoZXRoZXIgcmVjeWNsaW5nIG9mIG5vbi1tYXRjaGluZyBvbGQga2V5ZWQgc3ViLW5vZGVzIGJ5IG5vbi1tYXRjaGluZyBuZXdcclxuXHRcdC8vIGtleWVkIHN1Yi1ub2RlcyBpcyBhbGxvd2VkLiBJZiB1cGRhdGUgc3RyYXRlZ3kgaXMgbm90IGRlZmluZWQgZm9yIHRoZSBub2RlLCB0aGVcclxuXHRcdC8vIHJlY3ljbGluZyBpcyBhbGxvd2VkLlxyXG5cdFx0bGV0IGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nID0gdHJ1ZTtcclxuXHRcdGxldCB1cGRhdGVTdHJhdGVneSA9IHRoaXMub2xkVk4gPyB0aGlzLm9sZFZOLnVwZGF0ZVN0cmF0ZWd5IDogdW5kZWZpbmVkO1xyXG5cdFx0aWYgKHVwZGF0ZVN0cmF0ZWd5ICYmIHVwZGF0ZVN0cmF0ZWd5LmFsbG93S2V5ZWROb2RlUmVjeWNsaW5nICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nID0gdXBkYXRlU3RyYXRlZ3kuYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc7XHJcblxyXG5cdFx0Ly8gcHJvY2VzcyB0aGUgc3BlY2lhbCBjYXNlIHdpdGggYSBzaW5nbGUgc3ViLW5vZGUgaW4gYm90aCBvbGQgYW5kIG5ldyBjaGFpbnMganVzdFxyXG5cdFx0Ly8gdG8gYXZvaWQgY3JlYXRpbmcgdGVtcG9yYXJ5IHN0cnVjdHVyZXNcclxuXHRcdGlmIChuZXdMZW4gPT09IDEgJiYgb2xkTGVuID09PSAxKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbmV3Vk4gPSBuZXdDaGFpblswXTtcclxuXHRcdFx0bGV0IG9sZFZOID0gb2xkQ2hhaW5bMF07XHJcblx0XHRcdGxldCBkaXNwID0gbmV3IFZORGlzcCggbmV3Vk4pO1xyXG5cdFx0XHR0aGlzLnN1Yk5vZGVEaXNwcyA9IFtkaXNwXTtcclxuXHRcdFx0aWYgKG9sZFZOID09PSBuZXdWTiB8fFxyXG5cdFx0XHRcdCgoYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgfHwgbmV3Vk4ua2V5ID09PSBvbGRWTi5rZXkpICYmIGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdGRpc3Aub2xkVk4gPSBvbGRWTjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlID0gW29sZFZOXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHdlIGFyZSBoZXJlIGlmIGJvdGggb2xkIGFuZCBuZXcgY2hhaW5zIGNvbnRhaW4gbW9yZSB0aGFuIG9uZSBub2RlOyB0aGVyZWZvcmUsIHRoZSBtYXAgb2ZcclxuXHRcdC8vIGtleWVkIHN1Yi1ub2RlcyBleGlzdHMgKGFsdGhvdWdoIGl0IG1pZ2h0IGJlIGVtcHR5KS5cclxuXHRcdGxldCBvbGRNYXAgPSB0aGlzLm9sZFZOLmtleWVkU3ViTm9kZXM7XHJcblx0XHRsZXQgb2xkTWFwU2l6ZSA9IG9sZE1hcCA/IG9sZE1hcC5zaXplIDogMDtcclxuXHJcblx0XHQvLyBwcmVwYXJlIGFycmF5cyBmb3IgVk5EaXNwIG9iamVjdHMgZm9yIG5ldyBub2RlcyBhbmQgZm9yIG9sZCBub2RlcyB0byBiZSByZW1vdmVkXHJcblx0XHR0aGlzLnN1Yk5vZGVEaXNwcyA9IG5ldyBBcnJheSggbmV3TGVuKTtcclxuXHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZSA9IFtdO1xyXG5cclxuXHRcdC8vIGlmIHRoZSBudW1iZXIgb2Ygbm9kZXMgaW4gdGhlIG9sZCBtYXAgaXMgZXF1YWwgdG8gdGhlIHRvdGFsIG51bWJlciBvZiBvbGQgbm9kZXMsIHRoYXRcclxuXHRcdC8vIG1lYW5zIHRoYXQgYWxsIG9sZCBub2RlcyBhcmUga2V5ZWQuIElmIHRoaXMgaXMgdGhlIGNhc2UgQU5EIHJlY3ljbGluZyBvZiBrZXllZCBub2Rlc1xyXG5cdFx0Ly8gaXMgbm90IGFsbG93ZWQsIHdlIHdpbGwgbm90IG5lZWQgdG8gcHV0IHVua2V5ZWQgb3Iga2V5ZWQgYnV0IHVubWF0Y2hlZCBuZXcgbm9kZXMgYXNpZGUuXHJcblx0XHQvLyBXZSBrbm93IHRoYXQgdGhleSB3aWxsIGhhdmUgdG8gYmUgaW5zZXJ0ZWQuXHJcblx0XHRpZiAob2xkTWFwU2l6ZSA9PT0gb2xkTGVuICYmICFhbGxvd0tleWVkTm9kZVJlY3ljbGluZylcclxuXHRcdFx0dGhpcy5tYXRjaE9sZEtleWVkT25seSggb2xkTWFwLCBuZXdDaGFpbiwgbmV3TGVuLCBuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpO1xyXG5cdFx0ZWxzZSBpZiAob2xkTWFwU2l6ZSA9PT0gMCAmJiBhbGxvd0tleWVkTm9kZVJlY3ljbGluZylcclxuXHRcdFx0dGhpcy5tYXRjaE9sZE5vbktleWVkT25seSggb2xkQ2hhaW4sIG9sZExlbiwgbmV3Q2hhaW4sIG5ld0xlbiwgbmV3TGVuID4gTk9fR1JPVVBfVEhSRVNIT0xEKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5tYXRjaE9sZE1peGVkKCBvbGRDaGFpbiwgb2xkTGVuLCBvbGRNYXAsIG5ld0NoYWluLCBuZXdMZW4sIGFsbG93S2V5ZWROb2RlUmVjeWNsaW5nLCBuZXdMZW4gPiBOT19HUk9VUF9USFJFU0hPTEQpO1xyXG5cclxuXHRcdGlmICh0aGlzLnN1Yk5vZGVzVG9SZW1vdmUubGVuZ3RoID09PSAwKVxyXG5cdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB3ZSBrbm93IHRoYXQgYWxsIG9sZCBub2RlcyBoYXZlIGtleXMgYW5kIHRoZSByZWN5Y2xpbmcgb2Yga2V5ZWRcclxuXHQgKiBub2RlcyBpcyBOT1QgYWxsb3dlZC4gVGhlcmVmb3JlLCB3aGVuIHdlIHRyeSB0byBtYXRjaCBuZXcgbm9kZXMgdG8gb2xkIG9uZXMgd2Uga25vdyB0aGF0XHJcblx0ICogbm9uLWtleWVkIG9yIGtleWVkIGJ1dCB1bm1hdGNoZWQgbmV3IG5vZGVzIHdpbGwgYmUgbWFya2VkIGZvciBpbnNlcnRpb24uIFdlIGFsc28gY2FuIGJ1aWxkXHJcblx0ICogZ3JvdXBzIChpZiByZXF1ZXN0ZWQpIGluIHRoZSBzYW1lIGxvb3AuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBtYXRjaE9sZEtleWVkT25seSggb2xkTWFwOiBNYXA8YW55LFZOPiwgbmV3Q2hhaW46IFZOW10sIG5ld0xlbjogbnVtYmVyLCBidWlsZEdyb3VwczogYm9vbGVhbik6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBkZWNsYXJlIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCB0aHJvdWdob3V0IHRoZSBmb2xsb3dpbmcgY29kZVxyXG5cdFx0bGV0IGRpc3A6IFZORGlzcCwgb2xkVk46IFZOLCBuZXdWTjogVk4sIGtleTogYW55LCBhY3Rpb246IFZORGlzcEFjdGlvbiwgZ3JvdXA6IFZORGlzcEdyb3VwO1xyXG5cclxuXHRcdC8vIGlmIHdlIG5lZWQgdG8gYnVpbGQgZ3JvdXBzLCBwcmVwYXJlIGFycmF5IG9mIGdyb3Vwc1xyXG5cdFx0aWYgKGJ1aWxkR3JvdXBzKVxyXG5cdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMgPSBbXTtcclxuXHJcblx0XHQvLyBMb29wIG92ZXIgbmV3IG5vZGVzLCBjcmVhdGUgVk5EaXNwIHN0cnVjdHVyZXMgdHJ5IHRvIG1hdGNoIG5ldyBub2RlcyB0byBvbGQgb25lcyBhbmRcclxuXHRcdC8vIG1hcmsgdW5rZXllZCBvciBrZXllZCBidXQgdW5tYXRjaGVkIG5ldyBub2RlcyBmb3IgaW5zZXJ0aW9uLiBPbiBlYWNoIGl0ZXJhdGlvbiBkZWNpZGVcclxuXHRcdC8vIHdoZXRoZXIgd2UgbmVlZCB0byBvcGVuIGEgbmV3IGdyb3VwIG9yIHB1dCB0aGUgbmV3IG5vZGUgaW50byB0aGUgZXhpc3RpbmcgZ3JvdXAgb3JcclxuXHRcdC8vIGNsb3NlIHRoZSBleGlzdGluZyBncm91cCBhbmQgb3BlbiBhIG5ldyBvbmUuXHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IG5ld0xlbjsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXdWTiA9IG5ld0NoYWluW2ldO1xyXG5cdFx0XHRkaXNwID0gdGhpcy5zdWJOb2RlRGlzcHNbaV0gPSBuZXcgVk5EaXNwKCBuZXdWTik7XHJcblx0XHRcdGtleSA9IG5ld1ZOLmtleTtcclxuXHJcblx0XHRcdC8vIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIG5ldyBub2RlXHJcblx0XHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRvbGRWTiA9IG9sZE1hcC5nZXQoIGtleSlcclxuXHRcdFx0XHRpZiAob2xkVk4gPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRcdGFjdGlvbiA9IFZORGlzcEFjdGlvbi5JbnNlcnQ7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChvbGRWTiA9PT0gbmV3Vk4gfHwgaXNVcGRhdGVQb3NzaWJsZSggb2xkVk4sIG5ld1ZOKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0YWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRcdFx0ZGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRhY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaChvbGRWTik7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIHRoZSBvbGQgbm9kZSBmcm9tIHRoZSBtYXAgLSB0aGlzIHdheSB0aGUgb2xkIG5vZGVzIHJlbWFpbmluZyBpbiB0aGVcclxuXHRcdFx0XHRcdC8vIG1hcCBhcmUgdGhvc2UgdGhhdCBhcmUgdW5tYXRjaGVkLlxyXG5cdFx0XHRcdFx0b2xkTWFwLmRlbGV0ZSgga2V5KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRpc3AuYWN0aW9uID0gYWN0aW9uO1xyXG5cclxuXHRcdFx0aWYgKGJ1aWxkR3JvdXBzKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWYgKCFncm91cClcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBvcGVuIGEgbmV3IGdyb3VwXHJcblx0XHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgYWN0aW9uLCBpKTtcclxuXHRcdFx0XHRcdHRoaXMuc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoYWN0aW9uICE9PSBncm91cC5hY3Rpb24pXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIHByZXZpb3VzIGluZGV4IGFuZCBvcGVuIGEgbmV3IGdyb3VwLiBOb3RlIHRoYXQgd2VcclxuXHRcdFx0XHRcdC8vIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGUgdGhhdCBzdGFydHMgYSBuZXcgZ3JvdXAgYmVjYXVzZSBmb3Igc3VjaCBub2RlXHJcblx0XHRcdFx0XHQvLyBkaXNwLmFjdGlvbiA9PT0gZ3JvdXBBY3Rpb24uXHJcblx0XHRcdFx0XHRncm91cC5sYXN0ID0gaSAtIDE7XHJcblx0XHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgYWN0aW9uLCBpKTtcclxuXHRcdFx0XHRcdHRoaXMuc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvLyBhbiBcInVwZGF0ZVwiIG9yIFwibm9uZVwiIG5vZGUgaXMgb3V0LW9mLW9yZGVyIGFuZCBzaG91bGQgY2xvc2UgdGhlIGN1cnJlbnQgZ3JvdXAgaWZcclxuXHRcdFx0XHRcdC8vIGl0cyBuZXh0IHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LlxyXG5cdFx0XHRcdFx0Ly8gVGhlIGxhc3Qgbm9kZSB3aWxsIGNsb3NlIHRoZSBsYXN0IGdyb3VwIGFmdGVyIHRoZSBsb29wLlxyXG5cdFx0XHRcdFx0aWYgKGkgPiAwICYmIHRoaXMuc3ViTm9kZURpc3BzW2ktMV0ub2xkVk4gIT09IG9sZFZOLnByZXYpXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBwcmV2aW91cyBpbmRleCBhbmQgb3BlbiBuZXcgZ3JvdXAuXHJcblx0XHRcdFx0XHRcdGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuXHRcdFx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3ViTm9kZUdyb3Vwcy5wdXNoKCBncm91cCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBhbGwgY29uc2VjdXRpdmUgXCJpbnNlcnRcIiBub2RlcyBiZWxvbmcgdG8gdGhlIHNhbWUgZ3JvdXAgc28gd2UganVzdCB3YWl0IGZvciB0aGVcclxuXHRcdFx0XHQvLyBuZXh0IG5vZGVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNsb3NlIHRoZSBsYXN0IGdyb3VwIGlmIHJlcXVlc3RlZCB0byBidWlsZCBncm91cHMgKG9ubHkgaW4gdGhpcyBjYXNlIHdlIG1heSBoYXZlIGEgZ3JvdXAgb2JqZWN0KVxyXG5cdFx0aWYgKGdyb3VwKVxyXG5cdFx0XHRncm91cC5sYXN0ID0gbmV3TGVuIC0gMTtcclxuXHJcblx0XHQvLyBpZiB3ZSBoYXZlIG9sZCBub2RlcyBsZWZ0LCB0aGV5IHNob3VsZCBiZSByZW1vdmVkXHJcblx0XHRvbGRNYXAuZm9yRWFjaCggb2xkVk4gPT4gdGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2goIG9sZFZOKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2hlbiB3ZSBrbm93IHRoYXQgbm9uZSBvZiB0aGUgb2xkIG5vZGVzIGhhdmUga2V5cyBhbmQgdGhlIHJlY3ljbGluZyBvZiBrZXllZFxyXG5cdCAqIG5vZGVzIElTIGFsbG93ZWQuIFRoZXJlZm9yZSwgd2UgdHJ5IHRvIG1hdGNoIG5ldyBub2RlcyB0byBvbGQgb25lcyBieSBpbmRleC4gV2UgYWxzbyBjYW4gYnVpbGRcclxuXHQgKiBncm91cHMgKGlmIHJlcXVlc3RlZCkgaW4gdGhlIHNhbWUgbG9vcC5cclxuXHQgKi9cclxuXHRwcml2YXRlIG1hdGNoT2xkTm9uS2V5ZWRPbmx5KCBvbGRDaGFpbjogVk5bXSwgb2xkTGVuOiBudW1iZXIsIG5ld0NoYWluOiBWTltdLCBuZXdMZW46IG51bWJlciwgYnVpbGRHcm91cHM6IGJvb2xlYW4pOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gZGVjbGFyZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgZm9sbG93aW5nIGNvZGVcclxuXHRcdGxldCBkaXNwOiBWTkRpc3AsIG9sZFZOOiBWTiwgbmV3Vk46IFZOLCBrZXk6IGFueTtcclxuXHJcblx0XHQvLyBMb29wIG92ZXIgbmV3IG5vZGVzLCBjcmVhdGUgVk5EaXNwIHN0cnVjdHVyZXMgYW5kIHRyeSB0byBtYXRjaCBuZXcgYW5kIG9sZCBub2RlcyBieVxyXG5cdFx0Ly8gaW5kZXguXHJcblx0XHRsZXQgaSA9IDA7XHJcblx0XHRmb3IoIDsgaSA8IG5ld0xlbiAmJiBpIDwgb2xkTGVuOyBpKyspXHJcblx0XHR7XHJcblx0XHRcdG5ld1ZOID0gbmV3Q2hhaW5baV07XHJcblx0XHRcdGRpc3AgPSB0aGlzLnN1Yk5vZGVEaXNwc1tpXSA9IG5ldyBWTkRpc3AoIG5ld1ZOKTtcclxuXHRcdFx0b2xkVk4gPSBvbGRDaGFpbltpXTtcclxuXHJcblx0XHRcdC8vIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIG5ldyBub2RlXHJcblx0XHRcdGlmIChvbGRWTiA9PT0gbmV3Vk4gfHwgaXNVcGRhdGVQb3NzaWJsZSggb2xkVk4sIG5ld1ZOKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLlVwZGF0ZTtcclxuXHRcdFx0XHRkaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uSW5zZXJ0O1xyXG5cdFx0XHRcdHRoaXMuc3ViTm9kZXNUb1JlbW92ZS5wdXNoKG9sZFZOKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJlbWFpbmluZyBuZXcgbm9kZXMgc2hvdWxkIGJlIGluc2VydGVkXHJcblx0XHRmb3IoIGxldCBqID0gaTsgaiA8IG5ld0xlbjsgaisrKVxyXG5cdFx0XHR0aGlzLnN1Yk5vZGVEaXNwc1tqXSA9IG5ldyBWTkRpc3AoIG5ld0NoYWluW2pdLCBWTkRpc3BBY3Rpb24uSW5zZXJ0KTtcclxuXHJcblx0XHQvLyByZW1haW5pbmcgb2xkIG5vZGVzIHNob3VsZCBiZSByZW1vdmVkXHJcblx0XHRmb3IoIGxldCBqID0gaTsgaiA8IG9sZExlbjsgaisrKVxyXG5cdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkQ2hhaW5bal0pO1xyXG5cclxuXHRcdGlmIChidWlsZEdyb3VwcylcclxuXHRcdFx0dGhpcy5idWlsZFN1Yk5vZGVHcm91cHMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyBtZXRob2QgaXMgaW52b2tlZCB3aGVuIHdlIGtub3cgdGhhdCBub3QgYWxsIG9sZCBub2RlcyBoYXZlIGtleXMgb3IgdGhlIHJlY3ljbGluZyBvZlxyXG5cdCAqIGtleWVkIG5vZGVzIGlzIGFsbG93ZWQuIFRoZXJlZm9yZSwgd2hlbiB3ZSBoYXZlIGEgbm9uLWtleWVkIG9yIGtleWVkIGJ1dCB1bm1hdGNoZWQgbmV3XHJcblx0ICogbm9kZSwgd2UgZmlyc3QgcHV0IGl0IGFzaWRlIGFuZCBvbmx5IGFmdGVyIHdlIHdlbnQgb3ZlciBhbGwgbmV3IG5vZGVzIHdlIGNhbiBkZWNpZGVcclxuXHQgKiB3aGF0IHRvIGRvIHdpdGggdGhvc2UgdGhhdCB3ZSBwdXQgYXNpZGUuIEFsc28sIG9ubHkgYWZ0ZXIgd2Ugd2VudCBvdmVyIGFsbCBuZXcgbm9kZXMgd2VcclxuXHQgKiBjYW4gYnVpbGQgZ3JvdXBzIGlmIHJlcXVlc3RlZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIG1hdGNoT2xkTWl4ZWQoIG9sZENoYWluOiBWTltdLCBvbGRMZW46IG51bWJlciwgb2xkTWFwOiBNYXA8YW55LFZOPiwgbmV3Q2hhaW46IFZOW10sXHJcblx0XHRcdFx0XHRuZXdMZW46IG51bWJlciwgYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmc6IGJvb2xlYW4sIGJ1aWxkR3JvdXBzOiBib29sZWFuKTogdm9pZFxyXG5cdHtcclxuXHRcdFx0Ly8gZGVjbGFyZSB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgZm9sbG93aW5nIGNvZGVcclxuXHRcdGxldCBkaXNwOiBWTkRpc3AsIG9sZFZOOiBWTiwgbmV3Vk46IFZOLCBrZXk6IGFueTtcclxuXHJcblx0XHQvLyBMb29wIG92ZXIgbmV3IG5vZGVzLCBjcmVhdGUgVk5EaXNwIHN0cnVjdHVyZXMgdHJ5IHRvIG1hdGNoIG5ldyBub2RlcyB0byBvbGQgb25lcyBhbmRcclxuXHRcdC8vIHB1dCB1bm1hdGNoZWQgbmV3IG5vZGVzIGFzaWRlXHJcblx0XHRsZXQgbmV3VW5tYXRjaGVkRGlzcHM6IFZORGlzcFtdID0gW107XHJcblx0XHRmb3IoIGxldCBpID0gMDsgaSA8IG5ld0xlbjsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRuZXdWTiA9IG5ld0NoYWluW2ldO1xyXG5cdFx0XHRkaXNwID0gdGhpcy5zdWJOb2RlRGlzcHNbaV0gPSBuZXcgVk5EaXNwKCBuZXdWTik7XHJcblx0XHRcdGtleSA9IG5ld1ZOLmtleTtcclxuXHJcblx0XHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIHB1dCB0aGUgdW5rZXllZCBuZXcgbm9kZSBhc2lkZVxyXG5cdFx0XHRcdG5ld1VubWF0Y2hlZERpc3BzLnB1c2goIGRpc3ApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdG9sZFZOID0gb2xkTWFwLmdldCgga2V5KVxyXG5cdFx0XHRcdGlmIChvbGRWTiA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGlmIHJlY3ljbGluZyBhbGxvd2VkIHdlIHB1dCB1bm1hdGNoZWQgbm9kZSBhc2lkZTsgb3RoZXJ3aXNlLCB3ZSBpbmRpY2F0ZSB0aGF0XHJcblx0XHRcdFx0XHQvLyBpdCBzaG91bGQgYmUgaW5zZXJ0ZWRcclxuXHRcdFx0XHRcdGlmIChhbGxvd0tleWVkTm9kZVJlY3ljbGluZylcclxuXHRcdFx0XHRcdFx0bmV3VW5tYXRjaGVkRGlzcHMucHVzaCggZGlzcCk7XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlmIChvbGRWTiA9PT0gbmV3Vk4gfHwgaXNVcGRhdGVQb3NzaWJsZSggb2xkVk4sIG5ld1ZOKSlcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0ZGlzcC5hY3Rpb24gPSBWTkRpc3BBY3Rpb24uVXBkYXRlO1xyXG5cdFx0XHRcdFx0XHRkaXNwLm9sZFZOID0gb2xkVk47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdWJOb2Rlc1RvUmVtb3ZlLnB1c2gob2xkVk4pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIHJlbW92ZSB0aGUgb2xkIG5vZGUgZnJvbSB0aGUgbWFwIC0gdGhpcyB3YXkgdGhlIG9sZCBub2RlcyByZW1haW5pbmcgaW4gdGhlXHJcblx0XHRcdFx0XHQvLyBtYXAgYXJlIHRob3NlIHRoYXQgYXJlIHVubWF0Y2hlZC5cclxuXHRcdFx0XHRcdG9sZE1hcC5kZWxldGUoIGtleSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIG9sZCBzdWItbm9kZXMsIHNraXAgYWxyZWFkeSBtYXRjaGVkIG9uZXMgYW5kIHRyeSB0byBtYXRjaCBvdGhlcnMgdG8gdGhlXHJcblx0XHQvLyB5ZXQtdW5tYXRjaGVkIG5ldyBub2Rlcy4gVW5tYXRjaGVkIG9sZCBub2RlcyBhcmUgdGhvc2UgdGhhdCBhcmUgZWl0aGVyIHVua2V5ZWQgb3JcclxuXHRcdC8vIHRoZSBrZXllZCBvbmVzIHRoYXQgYXJlIHN0aWxsIGluIHRoZSBvbGRNYXAuXHJcblx0XHRsZXQgaU9sZCA9IDAsIGlOZXcgPSAwLCBuZXdVbm1hdGNoZWRMZW4gPSBuZXdVbm1hdGNoZWREaXNwcy5sZW5ndGg7XHJcblx0XHR3aGlsZSggaU9sZCA8IG9sZExlbiAmJiBpTmV3IDwgbmV3VW5tYXRjaGVkTGVuKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgbWF0Y2hlZCBrZXllZCBub2Rlc1xyXG5cdFx0XHRvbGRWTiA9IG9sZENoYWluW2lPbGQrK107XHJcblx0XHRcdGlmIChvbGRWTi5rZXkgIT09IHVuZGVmaW5lZCAmJiAhb2xkTWFwLmhhcyggb2xkVk4ua2V5KSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHRcdGRpc3AgPSBuZXdVbm1hdGNoZWREaXNwc1tpTmV3KytdO1xyXG5cdFx0XHRuZXdWTiA9IGRpc3AubmV3Vk47XHJcblxyXG5cdFx0XHQvLyBpZiByZWN5Y2xpbmcgaXMgbm90IGFsbG93ZWQgYW5kIGVpdGhlciBvbGQgb3IgbmV3IG5vZGVzIGlzIGtleWVkLCBpbnNlcnQgbmV3IGFuZCByZW1vdmUgb2xkXHJcblx0XHRcdGlmICghYWxsb3dLZXllZE5vZGVSZWN5Y2xpbmcgJiYgKG9sZFZOLmtleSAhPT0gdW5kZWZpbmVkIHx8IG5ld1ZOLmtleSAhPT0gdW5kZWZpbmVkKSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGlzVXBkYXRlUG9zc2libGUoIG9sZFZOLCBuZXdWTikpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRkaXNwLmFjdGlvbiA9IFZORGlzcEFjdGlvbi5VcGRhdGU7XHJcblx0XHRcdFx0ZGlzcC5vbGRWTiA9IG9sZFZOO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGRpc3AuYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaChvbGRWTik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBpZiB3ZSBoYXZlIG5ldyBub2RlcyBsZWZ0LCB0aGV5IHNob3VsZCBiZSBpbnNlcnRlZFxyXG5cdFx0Zm9yKCBsZXQgaiA9IGlOZXc7IGogPCBuZXdVbm1hdGNoZWRMZW47IGorKylcclxuXHRcdFx0bmV3VW5tYXRjaGVkRGlzcHNbal0uYWN0aW9uID0gVk5EaXNwQWN0aW9uLkluc2VydDtcclxuXHJcblx0XHQvLyBpZiB3ZSBoYXZlIG9sZCBub2RlcyBsZWZ0LCB0aGV5IHNob3VsZCBiZSByZW1vdmVkXHJcblx0XHRmb3IoIGxldCBqID0gaU9sZDsgaiA8IG9sZExlbjsgaisrKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgbWF0Y2hlZCBrZXllZCBub2Rlc1xyXG5cdFx0XHRvbGRWTiA9IG9sZENoYWluW2pdO1xyXG5cdFx0XHRpZiAob2xkVk4ua2V5ICE9PSB1bmRlZmluZWQgJiYgIW9sZE1hcC5oYXMoIG9sZFZOLmtleSkpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0XHR0aGlzLnN1Yk5vZGVzVG9SZW1vdmUucHVzaCggb2xkVk4pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChidWlsZEdyb3VwcylcclxuXHRcdFx0dGhpcy5idWlsZFN1Yk5vZGVHcm91cHMoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogRnJvbSBhIGZsYXQgbGlzdCBvZiBuZXcgc3ViLW5vZGVzIGJ1aWxkcyBncm91cHMgb2YgY29uc2VjdXRpdmUgbm9kZXMgdGhhdCBzaG91bGQgYmUgZWl0aGVyXHJcblx0ICogdXBkYXRlZCBvciBpbnNlcnRlZC5cclxuXHQgKi9cclxuXHRwcml2YXRlIGJ1aWxkU3ViTm9kZUdyb3VwcygpOiB2b2lkXHJcblx0e1xyXG5cdFx0Ly8gd2UgYXJlIGhlcmUgb25seSBpZiB3ZSBoYXZlIHNvbWUgbnVtYmVyIG9mIHN1Yi1ub2RlIGRpc3Bvc2l0aW9uc1xyXG5cdFx0bGV0IGNvdW50ID0gdGhpcy5zdWJOb2RlRGlzcHMubGVuZ3RoO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdC8vIHRoaXMgbWV0aG9kIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQgaWYgdGhlIG51bWJlciBvZiBzdWItbm9kZXMgaXMgbGVzcyB0aGVuXHJcblx0XHRcdC8vIHRoZSBwcmUtZGV0ZXJtaW5lZCB0aHJlc2hvbGRcclxuXHRcdFx0aWYgKGNvdW50IDw9IE5PX0dST1VQX1RIUkVTSE9MRCB8fCBjb3VudCA9PT0gMClcclxuXHRcdFx0XHRyZXR1cm47XHJcbi8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdC8vIGNyZWF0ZSBhcnJheSBvZiBncm91cHMgYW5kIGNyZWF0ZSB0aGUgZmlyc3QgZ3JvdXAgc3RhcnRpbmcgZnJvbSB0aGUgZmlyc3Qgbm9kZVxyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzID0gW107XHJcblx0XHRsZXQgZ3JvdXA6IFZORGlzcEdyb3VwID0gbmV3IFZORGlzcEdyb3VwKCB0aGlzLCB0aGlzLnN1Yk5vZGVEaXNwc1swXS5hY3Rpb24sIDApO1xyXG5cdFx0dGhpcy5zdWJOb2RlR3JvdXBzLnB1c2goIGdyb3VwKTtcclxuXHJcblx0XHQvLyBsb29wIG92ZXIgc3ViLW5vZGVzIGFuZCBvbiBlYWNoIGl0ZXJhdGlvbiBkZWNpZGUgd2hldGhlciB3ZSBuZWVkIHRvIG9wZW4gYSBuZXcgZ3JvdXBcclxuXHRcdC8vIG9yIHB1dCB0aGUgY3VycmVudCBub2RlIGludG8gdGhlIGV4aXN0aW5nIGdyb3VwIG9yIGNsb3NlIHRoZSBleGlzdGluZyBncm91cCBhbmQgb3BlblxyXG5cdFx0Ly8gYSBuZXcgb25lLlxyXG5cdFx0bGV0IGFjdGlvbjogVk5EaXNwQWN0aW9uO1xyXG5cdFx0bGV0IGRpc3A6IFZORGlzcDtcclxuXHRcdGZvciggbGV0IGkgPSAxOyBpIDwgY291bnQ7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0ZGlzcCA9IHRoaXMuc3ViTm9kZURpc3BzW2ldO1xyXG5cdFx0XHRhY3Rpb24gPSBkaXNwLmFjdGlvbjtcclxuXHRcdFx0aWYgKGFjdGlvbiAhPT0gZ3JvdXAuYWN0aW9uKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gY2xvc2UgdGhlIGdyb3VwIHdpdGggdGhlIHByZXZpb3VzIGluZGV4LiBEZWNyZW1lbnQgdGhlIGl0ZXJhdGluZyBpbmRleCBzbyB0aGF0XHJcblx0XHRcdFx0Ly8gdGhlIG5leHQgaXRlcmF0aW9uIHdpbGwgb3BlbiBhIG5ldyBncm91cC4gTm90ZSB0aGF0IHdlIGNhbm5vdCBiZSBoZXJlIGZvciBhIG5vZGVcclxuXHRcdFx0XHQvLyB0aGF0IHN0YXJ0cyBhIG5ldyBncm91cCBiZWNhdXNlIGZvciBzdWNoIG5vZGUgZGlzcC5hY3Rpb24gPT09IGdyb3VwQWN0aW9uLlxyXG5cdFx0XHRcdGdyb3VwLmxhc3QgPSBpIC0gMTtcclxuXHRcdFx0XHRncm91cCA9IG5ldyBWTkRpc3BHcm91cCggdGhpcywgYWN0aW9uLCBpKTtcclxuXHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKGFjdGlvbiA9PT0gVk5EaXNwQWN0aW9uLlVwZGF0ZSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdC8vIGFuIFwidXBkYXRlXCIgb3IgXCJub25lXCIgbm9kZSBpcyBvdXQtb2Ytb3JkZXIgYW5kIHNob3VsZCBjbG9zZSB0aGUgY3VycmVudCBncm91cCBpZlxyXG5cdFx0XHRcdC8vIGl0cyBuZXh0IHNpYmxpbmcgaW4gdGhlIG5ldyBsaXN0IGlzIGRpZmZlcmVudCBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgaW4gdGhlIG9sZCBsaXN0LlxyXG5cdFx0XHRcdC8vIFRoZSBsYXN0IG5vZGUgd2lsbCBjbG9zZSB0aGUgbGFzdCBncm91cCBhZnRlciB0aGUgbG9vcC5cclxuXHRcdFx0XHRpZiAodGhpcy5zdWJOb2RlRGlzcHNbaS0xXS5vbGRWTiAhPT0gZGlzcC5vbGRWTi5wcmV2KVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vIGNsb3NlIHRoZSBncm91cCB3aXRoIHRoZSBjdXJyZW50IGluZGV4LlxyXG5cdFx0XHRcdFx0Z3JvdXAubGFzdCA9IGkgLSAxO1xyXG5cdFx0XHRcdFx0Z3JvdXAgPSBuZXcgVk5EaXNwR3JvdXAoIHRoaXMsIGFjdGlvbiwgaSk7XHJcblx0XHRcdFx0XHR0aGlzLnN1Yk5vZGVHcm91cHMucHVzaCggZ3JvdXApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gYWxsIGNvbnNlY3V0aXZlIFwiaW5zZXJ0XCIgbm9kZXMgYmVsb25nIHRvIHRoZSBzYW1lIGdyb3VwIHNvIHdlIGp1c3Qgd2FpdCBmb3IgdGhlXHJcblx0XHRcdC8vIG5leHQgbm9kZVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNsb3NlIHRoZSBsYXN0IGdyb3VwXHJcblx0XHRpZiAoZ3JvdXAgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0Z3JvdXAubGFzdCA9IGNvdW50IC0gMTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB1cGRhdGUgb2YgdGhlIGdpdmVuIG9sZCBub2RlIGZyb20gdGhlIGdpdmVuIG5ldyBub2RlIGlzIHBvc3NpYmxlLiBVcGRhdGVcclxuICogaXMgcG9zc2libGUgaWYgdGhlIHR5cGVzIG9mIG5vZGVzIGFyZSB0aGUgc2FtZSBhbmQgZWl0aGVyIHRoZSBpc1VwZGF0ZVBvc3NpYmxlIG1ldGhvZCBpcyBub3RcclxuICogZGVmaW5lZCBvbiB0aGUgb2xkIG5vZGUgb3IgaXQgcmV0dXJucyB0cnVlLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNVcGRhdGVQb3NzaWJsZSggb2xkVk46IFZOLCBuZXdWTjogVk4pOiBib29sZWFuXHJcbntcclxuXHRyZXR1cm4gKG9sZFZOLnR5cGUgPT09IG5ld1ZOLnR5cGUgJiZcclxuXHRcdFx0KG9sZFZOLmlzVXBkYXRlUG9zc2libGUgPT09IHVuZGVmaW5lZCB8fCBvbGRWTi5pc1VwZGF0ZVBvc3NpYmxlKCBuZXdWTikpKTtcclxuXHJcbn1cclxuIiwiLy8gVHlwZSBkZWZpbml0aW9ucyBmb3IgbWltYmxcclxuXHJcbmV4cG9ydCAqIGZyb20gXCIuL2FwaS9taW1cIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0h0bWxUeXBlc1wiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9hcGkvU3ZnVHlwZXNcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vYXBpL0xvY2FsU3R5bGVzXCI7XHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5cdGltcG9ydCB7RGV0YWlsZWRTdGF0cywgU3RhdHNDYXRlZ29yeSwgU3RhdHNBY3Rpb259IGZyb20gXCIuL1N0YXRzXCJcclxuLy8vLy8vLy8vL1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVHlwZSBvZiBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCBmb3IgYW4gZWxlbWVudC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjb25zdCBlbnVtIFByb3BUeXBlXHJcbntcclxuXHQvLyBSZWd1bGFyIGF0dHJpYnV0ZXMgc2V0IHVzaW5nIEVsZW1lbnQuc2V0QXR0cmlidXRlKCk7XHJcblx0VW5rbm93biA9IDAsXHJcblxyXG5cdC8vIFJlZ3VsYXIgYXR0cmlidXRlcyBzZXQgdXNpbmcgRWxlbWVudC5zZXRBdHRyaWJ1dGUoKTtcclxuXHRBdHRyID0gMSxcclxuXHJcblx0Ly8gRXZlbnQgbGlzdGVuZXJzIHNldCB1c2luZyBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXJcclxuXHRFdmVudCA9IDIsXHJcblxyXG5cdC8vIEN1c3RvbSBhdHRyaWJ1dGVzIGZvciB3aGljaCBoYW5kbGVyIGZhY3RvcmllcyBhcmUgcmVnaXN0ZXJlZFxyXG5cdEN1c3RvbUF0dHIgPSAzLFxyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBCYXNlIGludGVyZmFjZSBkZXNjcmliaW5nIGluZm9ybWF0aW9uIGtlcHQgYWJvdXQgcHJvcGVydHkgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIGZvciBhbiBlbGVtZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIFR5cGUgb2YgdGhlIHByb3BlcnR5LlxyXG5cdHR5cGU6IFByb3BUeXBlO1xyXG59XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBJbmZvcm1hdGlvbiBhYm91dCBhdHRyaWJ1dGVzIHRoYXQgY29udGFpbnMgZnVuY3Rpb25zIGZvciBzZXR0aW5nLCBkaWZmaW5nLCB1cGRhdGluZyBhbmRcclxuLy8gcmVtb3ZpbmcgYXR0cmlidXRlKHMpIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3BlcnR5LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBBdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgc2V0cyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZS4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgRE9NXHJcblx0Ly8gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhcyBhdHRyaWJ1dGUgbmFtZSBhbmQgcHJvcFZhbCBjb252ZXJ0ZWQgdG8gc3RyaW5nLlxyXG5cdHNldD86IChlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCBjb21wYXJlcyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgYW5kIHJldHVybnMgYW4gb2JqZWN0XHJcblx0Ly8gdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgdXBkYXRlRnVuYyBmdW5jdGlvbi4gSWYgdW5kZWZpbmVkIGlzIHJldHVybmVkLCB0aGUgdmFsdWUgb2YgdGhlXHJcblx0Ly8gYXR0cmlidXRlIHdpbGwgbm90IGNoYW5nZSAodGhhdCBtZWFucyB0aGUgb2xkIGFuZCB0aGUgbmV3IHZhbHVlcyBhcmUgZXF1YWwpLiBJZiB0aGlzXHJcblx0Ly8gZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHByb3BlcnR5IHZhbHVlcyBhcmUgY29udmVydGVkIHRvIHN0cmluZyBhbmQgY29tcGFyZWQgYXMgc3RyaW5ncy5cclxuXHQvLyBJZiB0aGVzZSBzdHJpbmdzIGFyZSBkaWZmZXJlbnQsIHRoZSBzdHJpbmcgY29ycmVzcG9uZGluZyB0byB0aGUgIG5ldyB2YWx1ZSBpcyByZXR1cm5lZC5cclxuXHRkaWZmPzogKGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KSA9PiBhbnk7XHJcblxyXG5cdC8vIEZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZSBiYXNlZCBvbiB0aGUgb2JqZWN0IHRoYXQgd2FzIHJldHVybmVkXHJcblx0Ly8gZnJvbSB0aGUgZGlmZiBmdW5jdGlvbi4gSWYgdGhpcyBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCwgdGhlbiB0aGUgc2V0IGZ1bmN0aW9uIGlzIHVzZWQuIElmXHJcblx0Ly8gdGhlIHNldCBmdW5jdGlvbiBpcyBub3QgZGVmaW5lZCBlaXRoZXIsIHRoZSBET00gZWxtLnNldEF0dHJpYnV0ZSBpcyBjYWxsZWQgd2l0aCBwcm9wTmFtZSBhc1xyXG5cdC8vIGF0dHJpYnV0ZSBuYW1lIGFuZCB1cGRhdGVWYWwgY29udmVydGVkIHRvIHN0cmluZy5cclxuXHR1cGRhdGU/OiAoZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCB1cGRhdGVWYWw6IGFueSkgPT4gdm9pZDtcclxuXHJcblx0Ly8gRnVuY3Rpb24gdGhhdCByZW1vdmVzIHRoZSBhdHRyaWJ1dGUuIElmIHRoaXMgZnVuY3Rpb24gaXMgbm90IGRlZmluZWQsIHRoZW4gdGhlIERPTVxyXG5cdC8vIGVsbS5yZW1vdmVBdHRyaWJ1dGUgaXMgY2FsbGVkIHdpdGggcHJvcE5hbWUgYXMgYXR0cmlidXRlIG5hbWUuXHJcblx0cmVtb3ZlPzogKGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZykgPT4gdm9pZDtcclxuXHJcblx0Ly8gVGhlIGFjdHVhbCBuYW1lIG9mIHRoZSBhdHRyaWJ1dGUuIFRoaXMgaXMgc29tZXRpbWVzIG5lZWRlZCBpZiB0aGUgYXR0cmlidXRlIG5hbWUgY2Fubm90IGJlXHJcblx0Ly8gdXNlZCBhcyBwcm9wZXJ0eSBuYW1lIC0gZm9yIGV4YW1wbGUsIGlmIGF0dHJpYnV0ZSBuYW1lIGNvbnRhaW5zIGNoYXJhY3RlcnMgbm90IGFsbG93ZWQgaW5cclxuXHQvLyBUeXBlU2NyaXB0IGlkZW50aWZpZXIgKGUuZy4gZGFzaCkuXHJcblx0YXR0ck5hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGV2ZW50cy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRQcm9wSW5mbyBleHRlbmRzIFByb3BJbmZvQmFzZVxyXG57XHJcblx0Ly8gRmxhZyBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIGV2ZW50IGJ1YmJsZXMuIElmIHRoZSBldmVudCBkb2Vzbid0IGJ1YmJsZSwgdGhlIGV2ZW50IGhhbmRsZXJcclxuXHQvLyBtdXN0IGJlIHNldCBvbiB0aGUgZWxlbWVudCBpdHNlbGY7IG90aGVyd2lzZSwgdGhlIGV2ZW50IGhhbmRsZXIgY2FuIGJlIHNldCBvbiB0aGUgcm9vdFxyXG5cdC8vIGFuY2hvciBlbGVtZW50LCB3aGljaCBhbGxvd3MgaGF2aW5nIGEgc2luZ2xlIGV2ZW50IGhhbmRsZXIgcmVnaXN0ZXJlZCBmb3IgbWFueSBlbGVtZW50cyxcclxuXHQvLyB3aGljaCBpcyBtb3JlIHBlcmZvcm1hbnQuXHJcblx0aXNCdWJibGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEluZm9ybWF0aW9uIGFib3V0IGN1c3RvbSBhdHRyaWJ1dGVzLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b21BdHRyUHJvcEluZm8gZXh0ZW5kcyBQcm9wSW5mb0Jhc2Vcclxue1xyXG5cdC8vIENsYXNzIG9iamVjdCB0aGF0IGNyZWF0ZXMgY3VzdG9tIGF0dHJpYnV0ZSBoYW5kbGVycy5cclxuXHRoYW5kbGVyQ2xhc3M6IG1pbS5JQ3VzdG9tQXR0cmlidXRlSGFuZGxlckNsYXNzPGFueT47XHJcbn1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFR5cGUgY29tYmluaW5nIGluZm9ybWF0aW9uIGFib3V0IHJlZ3VsYXIgYXR0cmlidXRlcyBvciBldmVudHMgb3IgY3VzdG9tIGF0dHJpYnV0ZXMuXHJcbi8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5leHBvcnQgdHlwZSBQcm9wSW5mbyA9IEF0dHJQcm9wSW5mbyB8IEV2ZW50UHJvcEluZm8gfCBDdXN0b21BdHRyUHJvcEluZm87XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBFeHBvcnRlZCBjbGFzcyB0aGF0IHByb3ZpZGVzIHN0YXRpYyBtZXRob2RzIGZvciBzZXR0aW5nLCB1cGRhdGluZyBhbmQgcmVtb3ZpbmcgRWxlbWVudFxyXG4vLyBhdHRyaWJ1dGVzIGNvcnJlc3BvbmRpbmcgdG8gcHJvcGVydHkgbmFtZXMuXHJcbi8vXHJcbi8vIEVsZW1lbnQgYXR0cmlidXRlcyBhcmUgZGV0ZXJtaW5lZCB1c2luZyBwcm9wZXJ0aWVzIHBhc3NlZCB0byB0aGUgRWxtVk4gbWV0aG9kcy4gU29tZVxyXG4vLyBwcm9wZXJ0aWVzIGFsbG93IHVzaW5nIG5vbi10cml2aWFsIHR5cGVzLCBlLmcuIGFycmF5cyBvciBvYmplY3RzLCBhbmQgdGh1cyBjYW5ub3QgYmUgc2ltcGx5XHJcbi8vIGhhbmRsZWQgdXNpbmcgdGhlIEVsZW1lbnQuc2V0QXR0cmlidXRlIG1ldGhvZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBFbG1BdHRyXHJcbntcclxuXHQvLyBPYmplY3QgdGhhdCBtYXBzIHByb3BlcnR5IG5hbWVzIHRvIFByb3BJbmZvLWRlcml2ZWQgb2JqZWN0cy4gSW5mb3JtYXRpb24gYWJvdXQgY3VzdG9tXHJcblx0Ly8gYXR0cmlidXRlcyBpcyBhZGRlZCB0byB0aGlzIG9iamVjdCB3aGVuIHRoZSByZWdpc3RlclByb3BlcnR5IG1ldGhvZCBpcyBjYWxsZWQuXHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJvcEluZm9zOiB7W1A6c3RyaW5nXTogUHJvcEluZm99ID1cclxuXHR7XHJcblx0XHQvLyBhdHRyaWJ1dGVzIC0gb25seSB0aG9zZSBhdHRyaWJ1dGVzIGFyZSBsaXN0ZWQgdGhhdCBoYXZlIG5vbi10cml2aWFsIHRyZWF0bWVudFxyXG5cdFx0c3R5bGU6IHsgdHlwZTogUHJvcFR5cGUuQXR0ciwgc2V0OiBzZXRTdHlsZVByb3AsIGRpZmY6IGRpZmZTdHlsZVByb3AsIHVwZGF0ZTogdXBkYXRlU3R5bGVQcm9wIH0sXHJcblx0XHR2YWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZlZhbHVlUHJvcCwgcmVtb3ZlOiByZW1vdmVWYWx1ZVByb3AgfSxcclxuXHRcdGRlZmF1bHRWYWx1ZTogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldFZhbHVlUHJvcCwgZGlmZjogZGlmZkRlZmF1bHRWYWx1ZVByb3AsIHJlbW92ZTogcmVtb3ZlRGVmYXVsdFZhbHVlUHJvcCB9LFxyXG5cdFx0Y2hlY2tlZDogeyB0eXBlOiBQcm9wVHlwZS5BdHRyLCBzZXQ6IHNldENoZWNrZWRQcm9wLCBkaWZmOiBkaWZmQ2hlY2tlZFByb3AsIHJlbW92ZTogcmVtb3ZlQ2hlY2tlZFByb3AgfSxcclxuXHRcdGRlZmF1bHRDaGVja2VkOiB7IHR5cGU6IFByb3BUeXBlLkF0dHIsIHNldDogc2V0Q2hlY2tlZFByb3AsIGRpZmY6IGRpZmZEZWZhdWx0VmFsdWVQcm9wLCByZW1vdmU6IHJlbW92ZURlZmF1bHRWYWx1ZVByb3AgfSxcclxuXHJcblx0XHQvLyBldmVudHNcclxuXHRcdGFib3J0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25jYW5jZWw6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGFuaW1hdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YW5pbWF0aW9uaXRlcmF0aW9uOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRhbmltYXRpb25zdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0YXV4Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGJsdXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2FucGxheXRocm91Z2g6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNoYW5nZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y2xpY2s6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNsb3NlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRjb250ZXh0bWVudTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Y3VlY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkYmxjbGljazogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZHJhZ2VudGVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHQvL2RyYWdleGl0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnbGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyYWdvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRkcmFnc3RhcnQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGRyb3A6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGR1cmF0aW9uY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbXB0aWVkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRlbmRlZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0ZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGZvY3VzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRnb3Rwb2ludGVyY2FwdHVyZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0aW5wdXQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGludmFsaWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGtleXByZXNzOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRrZXl1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkZGF0YTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9hZGVkbWV0YWRhdGE6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGxvYWRzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bG9zdHBvaW50ZXJjYXB0dXJlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZWRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdG1vdXNlZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQsIGlzQnViYmxpbmc6IGZhbHNlIH0sXHJcblx0XHRtb3VzZWxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50LCBpc0J1YmJsaW5nOiBmYWxzZSB9LFxyXG5cdFx0bW91c2Vtb3ZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZW91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0bW91c2VvdmVyOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRtb3VzZXVwOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwYXVzZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGxheWluZzogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmRvd246IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJlbnRlcjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcmxlYXZlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRwb2ludGVybW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm91dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cG9pbnRlcm92ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHBvaW50ZXJ1cDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cHJvZ3Jlc3M6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJhdGVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHJlc2V0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRyZXNpemU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHNjcm9sbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0Ly9zZWN1cml0eXBvbGljeXZpb2xhdGlvbjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c2Vla2VkOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWVraW5nOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRzZWxlY3Q6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN0YWxsZWQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHN1Ym1pdDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0c3VzcGVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dGltZXVwZGF0ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG9nZ2xlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR0b3VjaGNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hlbmQ6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNoZW50ZXI6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobGVhdmU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHRvdWNobW92ZTogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dG91Y2hzdGFydDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmNhbmNlbDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbmVuZDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnJ1bjogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0dHJhbnNpdGlvbnN0YXJ0OiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHR2b2x1bWVjaGFuZ2U6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdhaXRpbmc6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdHdoZWVsOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuY2hhbmdlOiB7IHR5cGU6IFByb3BUeXBlLkV2ZW50IH0sXHJcblx0XHRmdWxsc2NyZWVuZXJyb3I6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGNvcHk6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHRcdGN1dDogeyB0eXBlOiBQcm9wVHlwZS5FdmVudCB9LFxyXG5cdFx0cGFzdGU6IHsgdHlwZTogUHJvcFR5cGUuRXZlbnQgfSxcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlclByb3BlcnR5KCBwcm9wTmFtZTogc3RyaW5nLCBpbmZvOiBBdHRyUHJvcEluZm8gfCBFdmVudFByb3BJbmZvIHwgQ3VzdG9tQXR0clByb3BJbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdEVsbUF0dHIucHJvcEluZm9zW3Byb3BOYW1lXSA9IGluZm87XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlZ2lzdGVycyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2l2ZW4gcHJvcGVydHkuXHJcblx0cHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0eUluZm8oIHByb3BOYW1lOiBzdHJpbmcpOiBQcm9wSW5mbyB8IHVuZGVmaW5lZFxyXG5cdHtcclxuXHRcdHJldHVybiBFbG1BdHRyLnByb3BJbmZvc1twcm9wTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFVzaW5nIHRoZSBnaXZlbiBwcm9wZXJ0eSBuYW1lIGFuZCBpdHMgdmFsdWUgc2V0IHRoZSBhcHByb3ByaWF0ZSBhdHRyaWJ1dGUocykgb24gdGhlXHJcblx0Ly8gZWxlbWVudC4gVGhpcyBtZXRob2QgaGFuZGxlcyBzcGVjaWFsIGNhc2VzIG9mIHByb3BlcnRpZXMgd2l0aCBub24tdHJpdmlhbCB2YWx1ZXMuXHJcblx0cHVibGljIHN0YXRpYyBzZXRBdHRyKCBlbG06IEVsZW1lbnQsIHByb3BOYW1lOiBzdHJpbmcsIGluZm86IEF0dHJQcm9wSW5mbyB8IG51bGwsIHByb3BWYWw6IGFueSk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5zZXRBdHRyaWJ1dGUoIHByb3BOYW1lLCB0eXBlb2YgcHJvcFZhbCA9PT0gXCJzdHJpbmdcIiA/IHByb3BWYWwgOiBwcm9wVmFsLnRvU3RyaW5nKCkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBnZXQgYWN0dWFsIGF0dHJpYnV0ZSBuYW1lIHRvIHVzZVxyXG5cdFx0XHRsZXQgYXR0ck5hbWU6IHN0cmluZyA9IGluZm8uYXR0ck5hbWU7XHJcblx0XHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGF0dHJOYW1lID0gcHJvcE5hbWU7XHJcblxyXG5cdFx0XHRpZiAoaW5mby5zZXQgIT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRpbmZvLnNldCggZWxtLCBhdHRyTmFtZSwgcHJvcFZhbCk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRlbG0uc2V0QXR0cmlidXRlKCBhdHRyTmFtZSwgdHlwZW9mIHByb3BWYWwgPT09IFwic3RyaW5nXCIgPyBwcm9wVmFsIDogcHJvcFZhbC50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uQWRkZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWVzIG9mIHRoZSBwcm9wZXJ0eSBhcmUgZGlmZmVyZW50IGFuZCBzZXRzIHRoZVxyXG5cdC8vIHVwZGF0ZWQgdmFsdWUgdG8gdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGUuIFJldHVybnMgdHJ1ZSBpZiB1cGRhdGUgaGFzIGJlZW4gcGVyZm9ybWVkIGFuZFxyXG5cdC8vIGZhbHNlIGlmIG5vIGNoYW5nZSBpbiBwcm9wZXJ0eSB2YWx1ZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRwdWJsaWMgc3RhdGljIHVwZGF0ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCwgb2xkUHJvcFZhbDogYW55LCBuZXdQcm9wVmFsOiBhbnkpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0Ly8gZ2V0IHByb3BlcnR5IGluZm8gb2JqZWN0XHJcblx0XHRpZiAoaW5mbyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiB0aGlzIGlzIG5vdCBhIHNwZWNpYWwgY2FzZSAocHJvcGVydHkgaXMgbm90IGluIG91ciBsaXN0KSBqdXN0IGNvbXBhcmUgdGhlbSBhbmRcclxuXHRcdFx0Ly8gaWYgdGhleSBhcmUgZGlmZmVyZW50IHNldCB0aGUgYXR0cmlidXRlIHRvIHRoZSBuZXcgdmFsdWUuXHJcblx0XHRcdGlmIChvbGRQcm9wVmFsID09PSBuZXdQcm9wVmFsKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggcHJvcE5hbWUsIHR5cGVvZiBuZXdQcm9wVmFsID09PSBcInN0cmluZ1wiID8gbmV3UHJvcFZhbCA6IG5ld1Byb3BWYWwudG9TdHJpbmcoKSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy8vL1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNvbXBhcmUgb2xkIGFuZCBuZXcgdmFsdWUgdXNpbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbiBpZiBkZWZpbmVkOyBpZiBub3QsIGp1c3QgY29tcGFyZVxyXG5cdFx0Ly8gdGhlIHR3byB2YWx1ZXMgYW5kIGlmIHRoZXkgYXJlIGRpZmZlcmVudCB1c2UgdGhlIG5ldyBvbmUgYXMgYSB2YWx1ZSB0byB1cGRhdGUgd2l0aC5cclxuXHRcdC8vIE5vdGUgdGhhdCB0aGUgbmVpdGhlciBvbGQgbm9yIG5ldyB2YWx1ZXMgY2FuIGJlIHVuZGVmaW5lZCBvciBudWxsLlxyXG5cdFx0bGV0IHVwZGF0ZVZhbDogYW55O1xyXG5cdFx0aWYgKGluZm8uZGlmZiAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0e1xyXG5cdFx0XHR1cGRhdGVWYWwgPSBpbmZvLmRpZmYoIHByb3BOYW1lLCBvbGRQcm9wVmFsLCBuZXdQcm9wVmFsKTtcclxuXHJcblx0XHRcdC8vIGlmIHVwZGF0ZVZhbHVlIGlzIHVuZGVmaW5lZCB0aGVuIG5vIGNoYW5nZSBoYXMgYmVlbiBkZXRlY3RlZC5cclxuXHRcdFx0aWYgKHVwZGF0ZVZhbCA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKG9sZFByb3BWYWwgIT09IG5ld1Byb3BWYWwpXHJcblx0XHRcdHVwZGF0ZVZhbCA9IG5ld1Byb3BWYWw7XHJcblxyXG5cdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdGxldCBhdHRyTmFtZTogc3RyaW5nID0gaW5mby5hdHRyTmFtZTtcclxuXHRcdGlmIChhdHRyTmFtZSA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdC8vIGlmIHVwZGF0ZSBtZXRob2QgaXMgZGVmaW5lZCB1c2UgaXQ7IG90aGVyd2lzZSwgcmVtb3ZlIHRoZSBvbGQgdmFsdWUgYW5kIHNldCB0aGUgbmV3IG9uZVxyXG5cdFx0aWYgKGluZm8udXBkYXRlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdGluZm8udXBkYXRlKCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHQvLyBpZiByZW1vdmUgbWV0aG9kIGlzIGRlZmluZWQsIHVzZSBpdC4gTm90ZSB0aGF0IGlmIHJlbW92ZSBtZXRob2QgaXMgbm90IGRlZmluZWRcclxuXHRcdFx0Ly8gd2UgZG9uJ3QgdXNlIGVsbS5yZW1vdmVBdHRyaWJ1dGUgdG8gc2F2ZSB0aW1lIChhcyB0aGUgZm9sbG93aW5nIGluZm8uc2V0IG9yXHJcblx0XHRcdC8vIGVsbS5zZXRBdHRyaWJ1dGUgd2lsbCBvdmVycmlkZSBpdCBhbnl3YXkuXHJcblx0XHRcdGlmIChpbmZvLnJlbW92ZSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8ucmVtb3ZlKCBlbG0sIGF0dHJOYW1lKTtcclxuXHJcblx0XHRcdGlmIChpbmZvLnNldCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdGluZm8uc2V0KCBlbG0sIGF0dHJOYW1lLCB1cGRhdGVWYWwpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZWxtLnNldEF0dHJpYnV0ZSggYXR0ck5hbWUsIHR5cGVvZiB1cGRhdGVWYWwgPT09IFwic3RyaW5nXCIgPyB1cGRhdGVWYWwgOiB1cGRhdGVWYWwudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblx0XHRcdERldGFpbGVkU3RhdHMuc3RhdHMubG9nKCBTdGF0c0NhdGVnb3J5LkF0dHIsIFN0YXRzQWN0aW9uLlVwZGF0ZWQpO1xyXG4vLy8vLy8vLy8vLy9cclxuXHJcblx0XHQvLyBpbmRpY2F0ZSB0aGF0IHRoZXJlIHdhcyBjaGFuZ2UgaW4gYXR0cmlidXRlIHZhbHVlLlxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJlbW92ZXMgdGhlIGF0dHJpYnV0ZShzKSBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBwcm9wZXJ0eS5cclxuXHRwdWJsaWMgc3RhdGljIHJlbW92ZUF0dHIoIGVsbTogRWxlbWVudCwgcHJvcE5hbWU6IHN0cmluZywgaW5mbzogQXR0clByb3BJbmZvIHwgbnVsbCk6IHZvaWRcclxuXHR7XHJcblx0XHQvLyBnZXQgcHJvcGVydHkgaW5mbyBvYmplY3RcclxuXHRcdGlmIChpbmZvID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIHByb3BOYW1lKTtcclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0Ly8gZ2V0IGFjdHVhbCBhdHRyaWJ1dGUgbmFtZSB0byB1c2VcclxuXHRcdFx0bGV0IGF0dHJOYW1lOiBzdHJpbmcgPSBpbmZvLmF0dHJOYW1lO1xyXG5cdFx0XHRpZiAoYXR0ck5hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRhdHRyTmFtZSA9IHByb3BOYW1lO1xyXG5cclxuXHRcdFx0aWYgKGluZm8ucmVtb3ZlICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpbmZvLnJlbW92ZSggZWxtLCBhdHRyTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGVsbS5yZW1vdmVBdHRyaWJ1dGUoIGF0dHJOYW1lKTtcclxuXHRcdH1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHRcdFx0RGV0YWlsZWRTdGF0cy5zdGF0cy5sb2coIFN0YXRzQ2F0ZWdvcnkuQXR0ciwgU3RhdHNBY3Rpb24uRGVsZXRlZCk7XHJcbi8vLy8vLy8vLy8vL1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vIFJlZ2lzdGVyIGV2ZW50cyB3aXRoIHNwZWNpYWwgbmFtZXNcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRJbnNlcnRcIixcclxuLy9cdHsgbXVzdFJlbW92ZTogbXVzdFJlbW92ZUxpc3RlbmVycywgc2V0OiBzZXRMaXN0ZW5lclByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtaW5zZXJ0XCIgfSk7XHJcbi8vRWxtQXR0ci5yZWdpc3RlclByb3AoIFwic21hcnRjYXJkSW5zZXJ0Q2FwdHVyZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyQ2FwdHVyZVByb3AsIHJlbW92ZTogcmVtb3ZlTGlzdGVuZXJDYXB0dXJlUHJvcCwgYXR0ck5hbWU6IFwic21hcnRjYXJkLWluc2VydFwiIH0pO1xyXG4vL0VsbUF0dHIucmVnaXN0ZXJQcm9wKCBcInNtYXJ0Y2FyZFJlbW92ZVwiLFxyXG4vL1x0eyBtdXN0UmVtb3ZlOiBtdXN0UmVtb3ZlTGlzdGVuZXJzLCBzZXQ6IHNldExpc3RlbmVyUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lclByb3AsIGF0dHJOYW1lOiBcInNtYXJ0Y2FyZC1pbnNlcnRcIiB9KTtcclxuLy9FbG1BdHRyLnJlZ2lzdGVyUHJvcCggXCJzbWFydGNhcmRSZW1vdmVDYXB0dXJlXCIsXHJcbi8vXHR7IG11c3RSZW1vdmU6IG11c3RSZW1vdmVMaXN0ZW5lcnMsIHNldDogc2V0TGlzdGVuZXJDYXB0dXJlUHJvcCwgcmVtb3ZlOiByZW1vdmVMaXN0ZW5lckNhcHR1cmVQcm9wLCBhdHRyTmFtZTogXCJzbWFydGNhcmQtcmVtb3ZlXCIgfSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBzdHlsZSBwcm9wZXJ0eS4gU3R5bGUgcHJvcGVydHkgY2FuIGJlIHNwZWNpZmllZCBlaXRoZXIgYXMgYSBzdHJpbmcgb3IgYXMgdGhlXHJcbi8vIENTU1N0eWxlRGVjbGFyYXRpb24gb2JqZWN0LiBJZiB0aGUgb2xkIGFuZCBuZXcgc3R5bGUgcHJvcGVydHkgdmFsdWVzIGFyZSBvZiBkaWZmZXJlbnQgdHlwZXNcclxuLy8gdGhlIGRpZmYgZnVuY3Rpb24gcmV0dXJucyB0aGUgbmV3IHN0eWxlIHZhbHVlLiBJZiBib3RoIGFyZSBvZiB0aGUgc3RyaW5nIHR5cGUsIHRoZW4gdGhlIG5ld1xyXG4vLyBzdHJpbmcgdmFsdWUgaXMgcmV0dXJuZWQuIElmIGJvdGggYXJlIG9mIHRoZSBDU1NTdHlsZURlY2xhcmF0aW9uIHR5cGUsIHRoZW4gYW4gb2JqZWN0IGlzXHJcbi8vIHJldHVybmVkIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byBzdHlsZSBpdGVtcyB0aGF0IHNob3VsZCBiZSBjaGFuZ2VkLiBGb3IgdXBkYXRlZCBpdGVtcywgdGhlXHJcbi8vIGtleSB2YWx1ZSBpcyBmcm9tIHRoZSBuZXcgc3R5bGUgdmFsdWU7IGZvciByZW1vdmVkIGl0ZW1zLCB0aGUga2V5IHZhbHVlIGlzIHVuZGVmaW5lZC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFN0eWxlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHRpZiAocHJvcFZhbCA9PT0gdW5kZWZpbmVkIHx8IHByb3BWYWwgPT09IG51bGwpXHJcblx0XHRlbG0ucmVtb3ZlQXR0cmlidXRlKCBcInN0eWxlXCIpO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRjb25zdCBlbG1TdHlsZTogQ1NTU3R5bGVEZWNsYXJhdGlvbiA9IChlbG0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlO1xyXG5cdFx0Zm9yKCBsZXQga2V5IGluIHByb3BWYWwgYXMgbWltLlN0eWxlUHJvcFR5cGUpXHJcblx0XHR7XHJcblx0XHRcdGNvbnN0IGtleVZhbDogYW55ID0gcHJvcFZhbFtrZXldO1xyXG5cdFx0XHRpZiAoZWxtU3R5bGVba2V5XSAhPT0ga2V5VmFsKVxyXG5cdFx0XHRcdGVsbVN0eWxlW2tleV0gPSBrZXlWYWw7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmU3R5bGVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGFueVxyXG57XHJcblx0aWYgKHR5cGVvZiBvbGRQcm9wVmFsICE9PSB0eXBlb2YgbmV3UHJvcFZhbClcclxuXHRcdHJldHVybiBuZXdQcm9wVmFsO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRjb25zdCBvbGRTdHlsZSA9IG9sZFByb3BWYWwgYXMgbWltLlN0eWxlUHJvcFR5cGU7XHJcblx0XHRjb25zdCBuZXdTdHlsZSA9IG5ld1Byb3BWYWwgYXMgbWltLlN0eWxlUHJvcFR5cGU7XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlVmFsOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cdFx0bGV0IGNoYW5nZXNFeGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGxvb3Agb3ZlciBrZXlzIGluIHRoZSBvbGQgc3R5bGUgb2JqZWN0IGFuZCBmaW5kIHRob3NlIHRoYXQgYXJlIG5vdCBpbiB0aGUgbmV3IG9uZS4gVGhlc2VcclxuXHRcdC8vIHdpbGwgYmUgcmVtb3ZlZC5cclxuXHRcdGZvciggbGV0IGtleSBpbiBvbGRTdHlsZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgb2xkVmFsOiBhbnkgPSBvbGRTdHlsZVtrZXldO1xyXG5cdFx0XHRjb25zdCBuZXdWYWw6IGFueSA9IG5ld1N0eWxlW2tleV07XHJcblx0XHRcdGlmIChuZXdWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGNoYW5nZXNFeGlzdCA9IHRydWU7XHJcblx0XHRcdFx0dXBkYXRlVmFsW2tleV0gPSB1bmRlZmluZWQ7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAobmV3VmFsICE9PSBvbGRWYWwpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3VmFsO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gbG9vcCBvdmVyIGtleXMgaW4gdGhlIG5ldyBzdHlsZSBvYmplY3QgYW5kIGZpbmQgdGhvc2UgdGhhdCBhcmUgbm90IGluIHRoZSBvbGQgb25lLiBUaGVzZVxyXG5cdFx0Ly8gd2lsbCBiZSBhZGRlZC5cclxuXHRcdGZvciggbGV0IGtleSBpbiBuZXdTdHlsZSlcclxuXHRcdHtcclxuXHRcdFx0Y29uc3Qgb2xkVmFsOiBhbnkgPSBvbGRTdHlsZVtrZXldO1xyXG5cdFx0XHRpZiAob2xkVmFsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRjaGFuZ2VzRXhpc3QgPSB0cnVlO1xyXG5cdFx0XHRcdHVwZGF0ZVZhbFtrZXldID0gbmV3U3R5bGVba2V5XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBjaGFuZ2VzRXhpc3QgPyB1cGRhdGVWYWwgOiB1bmRlZmluZWQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVN0eWxlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCB1cGRhdGVWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdGNvbnN0IGVsbVN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uID0gKGVsbSBhcyBIVE1MRWxlbWVudCkuc3R5bGU7XHJcblx0Zm9yKCBsZXQga2V5IGluIHVwZGF0ZVZhbCBhcyBPYmplY3QpXHJcblx0e1xyXG5cdFx0Y29uc3Qga2V5VmFsOiBhbnkgPSB1cGRhdGVWYWxba2V5XTtcclxuXHRcdGlmIChrZXlWYWwgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0ZWxtU3R5bGVba2V5XSA9IG51bGw7XHJcblx0XHRcdC8vZWxtU3R5bGVba2V5XSA9IFwiaW5pdGlhbFwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRlbG1TdHlsZVtrZXldID0ga2V5VmFsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGZpcnN0IHN0eWxlIGlzIGEgY29tcGxldGUgc3Vic2V0IG9mIHRoZSBzZWNvbmQgb25lOyB0aGF0IGlzIGtleXNcclxuLy8vLyBpbiB0aGUgZmlyc3Qgc3R5bGUgYXJlIGFsbCBmb3VuZCBhbmQgaGF2ZSB0aGUgc2FtZSB2YWx1ZXMgaW4gdGhlIHNlY29uZCBzdHlsZS5cclxuLy9mdW5jdGlvbiBpc1N0eWxlMVN1YnNldE9mU3R5bGUyKCBzdHlsZTE6IE9iamVjdCwgc3R5bGUyOiBPYmplY3QpOiBib29sZWFuXHJcbi8ve1xyXG4vL1x0Zm9yKCBsZXQga2V5MSBpbiBzdHlsZTEpXHJcbi8vXHR7XHJcbi8vXHRcdGlmIChzdHlsZTFba2V5MV0gIT09IHN0eWxlMltrZXkxXSlcclxuLy9cdFx0XHRyZXR1cm4gZmFsc2U7XHJcbi8vXHR9XHJcblxyXG4vL1x0cmV0dXJuIHRydWU7XHJcbi8vfVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gSGFuZGxpbmcgb2YgdmFsdWUgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyB2YWx1ZSBwcm9wZXJ0eSBhcyBhbiBhdHRyaWJ1dGUgd2Ugc2V0IHRoZSB2YWx1ZVxyXG4vLyBmaWVsZCBvbiB0aGUgZWxlbWVudC4gVGhlIHNldCBhbmQgdXBkYXRlIG1ldGhvZHMgd29yayB0aGUgc2FtZSB3YXkuIFdlIGRlZmluZSB0aGUgcmVtb3ZlIG1ldGhvZFxyXG4vLyBieSBzZXR0aW5nIHRoZSBlbG0udmFsdWUgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldFZhbHVlUHJvcCggZWxtOiBFbGVtZW50LCBhdHRyTmFtZTogc3RyaW5nLCBwcm9wVmFsOiBhbnkpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IHByb3BWYWw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpZmZWYWx1ZVByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS4gV2Ugd2FudCBhbHdheXMgdG8gc2V0IHRoaXMgdmFsdWUgdG8gdGhlIGVsZW1lbnQgYmVjYXVzZSB0aGVcclxuXHQvLyBlbGVtZW50J3MgdmFsdWUgbWF5IGhhdmUgY2huZ2VkIChieSB0aGUgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5KS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVmFsdWVQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcpOiB2b2lkXHJcbntcclxuXHQvLyB3ZSBuZWVkIHRvIGNhc3QgZWxtIHRvIGFueSwgYmVjYXVzZSBnZW5lcmljIEVsZW1lbnQgZG9lc24ndCBoYXZlIHZhbHVlIHByb3BlcnR5LlxyXG5cdChlbG0gYXMgYW55KS52YWx1ZSA9IG51bGw7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBIYW5kbGluZyBvZiBkZWZhdWx0VmFsdWUgcHJvcGVydHkuIFRoZSBkZWZhdWx0VmFsdWUgcHJvcGVydHkgd29ya3MgYXMgYSB2YWx1ZSBwcm9wZXJ0eSB3aGVuIHRoZVxyXG4vLyBlbGVtZW50IGlzIGZpcnN0IG1vdW50ZWQgYW5kIGlzIGlnbm9yZWQgdXBvbiB1cGRhdGVzIGFuZCByZW1vdmFscy4gVGhpcyBhbGxvd3MgdXNpbmdcclxuLy8gZGVmYXVsdFZhbHVlIHRvIGluaXRpYWxpemUgdGhlIGNvbnRyb2wgdmFsdWUgb25jZS5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIGRpZmZEZWZhdWx0VmFsdWVQcm9wKCBhdHRyTmFtZTogc3RyaW5nLCBvbGRQcm9wVmFsVmFsOiBhbnksIG5ld1Byb3BWYWw6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdC8vIGJ5IHJldHVybmluZyB1bmRlZmluZWQgd2UgaW5kaWNhdGUgdGhhdCBubyBjaGFuZ2VzIHdlcmUgbWFkZSB0byB0aGUgcHJvcGVydHkgYW5kIHRodXMgdGhlXHJcblx0Ly8gdXBkYXRlIHdpbGwgbm90IGJlIGNhbGxlZFxyXG5cdHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZURlZmF1bHRWYWx1ZVByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIGRvIG5vdGhpbmdcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIEhhbmRsaW5nIG9mIGNoZWNrZWQgcHJvcGVydHkuIEluc3RlYWQgb2Ygc2V0dGluZyBjaGVja2VkIHByb3BlcnR5IGFzIGFuIGF0dHJpYnV0ZSB3ZSBzZXQgdGhlXHJcbi8vIGNoZWNrZWQgZmllbGQgb24gdGhlIGVsZW1lbnQuIFRoZSBzZXQgYW5kIHVwZGF0ZSBtZXRob2RzIHdvcmsgdGhlIHNhbWUgd2F5LiBXZSBkZWZpbmUgdGhlIHJlbW92ZVxyXG4vLyBtZXRob2QgYnkgc2V0dGluZyB0aGUgZWxtLmNoZWNrZWQgZmllbGQgdG8gbnVsbC5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmZ1bmN0aW9uIHNldENoZWNrZWRQcm9wKCBlbG06IEVsZW1lbnQsIGF0dHJOYW1lOiBzdHJpbmcsIHByb3BWYWw6IGFueSk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBwcm9wVmFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaWZmQ2hlY2tlZFByb3AoIGF0dHJOYW1lOiBzdHJpbmcsIG9sZFByb3BWYWxWYWw6IGFueSwgbmV3UHJvcFZhbDogYW55KTogYm9vbGVhblxyXG57XHJcblx0Ly8gYnkgYWx3YXlzIHJldHVybmluZyB0aGUgbmV3IHByb3BlcnR5IHZhbHVlIHdlIGNhdXNlIHRoZSB2YWx1ZSB0byBhbHdheXMgYmUgdXBkYXRlZCB0b1xyXG5cdC8vIHRoYXQgb2YgdGhlIG5ldyBwcm9wZXJ0eS5cclxuXHRyZXR1cm4gbmV3UHJvcFZhbDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFByb3AoIGVsbTogRWxlbWVudCwgYXR0ck5hbWU6IHN0cmluZyk6IHZvaWRcclxue1xyXG5cdC8vIHdlIG5lZWQgdG8gY2FzdCBlbG0gdG8gYW55LCBiZWNhdXNlIGdlbmVyaWMgRWxlbWVudCBkb2Vzbid0IGhhdmUgdmFsdWUgcHJvcGVydHkuXHJcblx0KGVsbSBhcyBhbnkpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBJRXZlbnRTbG90IGludGVyZmFjZSByZXByZXNlbnRzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMuIE11bHRpcGxlXHJcbi8vIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGludGVyZmFjZSBJRXZlbnRTbG90PFRGdW5jIGV4dGVuZHMgRnVuY3Rpb24+XHJcbntcclxuXHQvLyBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQvLyBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdGZpcmU6IFRGdW5jO1xyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC4gTm90ZSB0aGF0IHRoaXMgY2Fubm90IGJlIGEgbGFtYmRhXHJcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0YWRkKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkO1xyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRyZW1vdmUoIGxpc3RlbmVyOiBURnVuYyk6IHZvaWQ7XHJcblxyXG5cdC8vIFJlbW92ZXMgYWxsIGxpc3RlbmVycyB0byB0aGUgZXZlbnQuXHJcblx0Y2xlYXIoKTogdm9pZDtcclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEV2ZW50U2xvdCBjbGFzcyBkZWZpbmVzIGFuIGV2ZW50IHdpdGggY3VzdG9tIHBhcmFtZXRlcnMgYXMgbWVtYmVycyBvZiBjbGFzc2VzIHdpdGhvdXQgdGhlXHJcbi8vIG5lZWQgZm9yIHRoZSBjbGFzc2VzIHRvIGRlcml2ZSBmcm9tIEV2ZW50VGFyZ2V0IGFuZCB1c2Ugc3RyaW5nIG5hbWVzIGZvciBldmVudHMuIE11bHRpcGxlXHJcbi8vIGxpc3RlbmVycyBjYW4gYmUgYWRkZWQvcmVtb3ZlZCB0by9mcm9tIGFuIGV2ZW50LlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEV2ZW50U2xvdDxURnVuYyBleHRlbmRzIEZ1bmN0aW9uPiBpbXBsZW1lbnRzIElFdmVudFNsb3Q8VEZ1bmM+XHJcbntcclxuXHQvLyBNZXRob2QgdGhhdCByYWlzZXMgdGhlIGV2ZW50IGFuZCBjYWxscyBhbGwgdGhlIGxpc3RlbmVycyAoaWYgYW55KS4gSXQgaGFzIHRoZSBzaWduYXR1cmVcclxuXHQvLyBvZiB0aGUgdGVtcGxhdGUgZnVuY3Rpb24gc28gb25seSBwcm9wZXItdHlwZXMgcGFyYW1ldGVycyBjYW4gYmUgcGFzc2VkIHRvIGl0LlxyXG5cdHB1YmxpYyBmaXJlOiBURnVuYyA9IHRoaXMucmVhbEZpcmUgYXMgYW55IGFzIFRGdW5jO1xyXG5cclxuXHJcblxyXG5cdC8vIEFkZHMgdGhlIGdpdmVuIGZ1bmN0aW9uIGFzIGEgbGlzdGVuZXIgdG8gdGhlIGV2ZW50LiBOb3RlIHRoYXQgdGhpcyBzaG91bGQgbm90IGJlIGEgbGFtYmRhXHJcblx0Ly8gZnVuY3Rpb24gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byByZW1vdmUgYSBsYW1iZGEgZnVuY3Rpb24gbGlzdGVuZXIgbGF0ZXIuXHJcblx0cHVibGljIGFkZCggbGlzdGVuZXI6IFRGdW5jKTogdm9pZFxyXG5cdHtcclxuXHRcdGlmICh0aGlzLmxpc3RlbmVycyA9PT0gbnVsbClcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0PFRGdW5jPigpO1xyXG5cclxuXHRcdHRoaXMubGlzdGVuZXJzLmFkZCggbGlzdGVuZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBmdW5jdGlvbiBhcyBhIGxpc3RlbmVyIHRvIHRoZSBldmVudC5cclxuXHRwdWJsaWMgcmVtb3ZlKCBsaXN0ZW5lcjogVEZ1bmMpOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMubGlzdGVuZXJzICE9PSBudWxsKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVycy5kZWxldGUoIGxpc3RlbmVyKTtcclxuXHRcdFx0aWYgKHRoaXMubGlzdGVuZXJzLnNpemUgPT09IDApXHJcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMgPSBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIGFsbCBsaXN0ZW5lciB0byB0aGUgZXZlbnQuXHJcblx0cHVibGljIGNsZWFyKCk6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFNldCBvZiBsaXN0ZW5lciBmdW5jdGlvbnMuIFdoZW4gdGhlcmUgYXJlIG5vIGxpc3RlbmVycywgdGhpcyBmaWVsZCBpcyBzZXQgdG8gbnVsbCB0b1xyXG5cdC8vIHByZXNlcnZlIHNwYWNlLlxyXG5cdHByaXZhdGUgbGlzdGVuZXJzOiBTZXQ8VEZ1bmM+ID0gbnVsbDtcclxuXHJcblxyXG5cclxuXHQvLyBUaGlzIG1ldGhvZCByZWFsbHkgY2FsbHMgdGhlIGxpc3RlbmVycyBpbiBhIGxvb3AuIEl0IGRlY29uc3R1Y3RzIHRoZSBcImFyZ3VtZW50c1wiIHZhbHVlXHJcblx0Ly8gaW4gb3JkZXIgdG8gcGFzcyB0aGUgcHJvcGVyIHBhcmFtZXRlcnMgdG8gdGhlIGxpc3RlbmVycy5cclxuXHRwcml2YXRlIHJlYWxGaXJlKCk6IHZvaWRcclxuXHR7XHJcblx0XHRpZiAodGhpcy5saXN0ZW5lcnMgIT09IG51bGwpXHJcblx0XHR7XHJcblx0XHRcdGZvciggbGV0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKVxyXG5cdFx0XHRcdGxpc3RlbmVyKCAuLi5hcmd1bWVudHMpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy9cclxuLy8gVGhlIEV2ZW50TXVsdGlTbG90IGNsYXNzIGFsbG93cyByZWdpc3RlcmluZyBsaXN0ZW5lcnMgZm9yIG11bHRpcGxlIGV2ZW50cy4gRXZlbnRzIGFyZSBpZGVudGlmaWVkXHJcbi8vIHVzaW5nIHRoZSBzcGVjaWZpZWQgdGVtcGxhdGUgdHlwZSwgd2hpY2ggaXMgdXN1YWxseSAoYnV0IG5vdCBuZWNlc3NhcmlseSkgYSBudW1iZXItIG9yXHJcbi8vIHN0cmluZy1iYXNlZCBlbnVtZXJhdGlvbiBvciB1bmlvbiB0eXBlLlxyXG4vL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZXhwb3J0IGNsYXNzIEV2ZW50TXVsdGlTbG90PFQ+XHJcbntcclxuXHQvLyBBZGRzIGEgbmV3IGxpc3RlbmVyIHRvIHRoZSBnaXZlbiBldmVudFxyXG5cdHB1YmxpYyBhZGRMaXN0ZW5lciggZXZlbnQ6IFQsIGV2ZW50RnVuYzogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2xvdHMgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5zbG90cyA9IG5ldyBNYXA8VCxFdmVudFNsb3Q8RnVuY3Rpb24+PigpO1xyXG5cclxuXHRcdGxldCBzbG90ID0gdGhpcy5zbG90cy5nZXQoIGV2ZW50KTtcclxuXHRcdGlmIChzbG90ID09PSB1bmRlZmluZWQpXHJcblx0XHR7XHJcblx0XHRcdHNsb3QgPSBuZXcgRXZlbnRTbG90PEZ1bmN0aW9uPigpO1xyXG5cdFx0XHR0aGlzLnNsb3RzLnNldCggZXZlbnQsIHNsb3QpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNsb3QuYWRkKCBldmVudEZ1bmMpO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZW1vdmVzIHRoZSBnaXZlbiBsaXN0ZW5lciBmcm9tIHRoZSBnaXZlbiBldmVudFxyXG5cdHB1YmxpYyByZW1vdmVMaXN0ZW5lciggZXZlbnQ6IFQsIGV2ZW50RnVuYzogRnVuY3Rpb24pOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYgKHRoaXMuc2xvdHMgIT09IHVuZGVmaW5lZClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHNsb3QgPSB0aGlzLnNsb3RzLmdldCggZXZlbnQpO1xyXG5cdFx0XHRpZiAoc2xvdCAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHNsb3QucmVtb3ZlKCBldmVudEZ1bmMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBzbG90czogTWFwPFQsRXZlbnRTbG90PEZ1bmN0aW9uPj47XHJcbn1cclxuXHJcblxyXG5cclxuLy8gSW50ZXJmYWNlIGFuZCBjbGFzcyBmb3Igc2ltcGxlIGV2ZW50cyBhY2NlcHRpbmcgbm8gcGFyYW1ldGVycy5cclxuZXhwb3J0IGludGVyZmFjZSBJU2ltcGxlRXZlbnRTbG90IGV4dGVuZHMgSUV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuZXhwb3J0IGNsYXNzIFNpbXBsZUV2ZW50U2xvdCBleHRlbmRzIEV2ZW50U2xvdDwoKT0+dm9pZD4ge31cclxuXHJcblxyXG4iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gR2F0aGVyaW5nIHVwZGF0ZSBzdGF0aXN0aWNzXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuLy8gQ2F0ZWdvcmllcyBvZiBjaGFuZ2VkIGVudGl0aWVzIHRvIGdhdGhlciBzdGF0aXN0aWNzIGFib3V0LlxyXG5leHBvcnQgZW51bSBTdGF0c0NhdGVnb3J5XHJcbntcclxuXHRSb290LFxyXG5cdENvbXAsXHJcblx0RWxtLFxyXG5cdFRleHQsXHJcblx0QXR0cixcclxuXHRFdmVudCxcclxufVxyXG5cclxuXHJcblxyXG4vLyBBY3Rpb25zIG9uIGFuIGVudGl0eSB0byBnYXRoZXIgc3RhdGlzdGljcyBhYm91dC4gTm90IGFsbCBhY3Rpb25zIGFyZSByZWxldmFudCBmb3IgYWxsXHJcbi8vIGNhdGVnb3JpZXM6XHJcbi8vXHQtIFVwZGF0ZWQgZG9lc24ndCBleGlzdCBmb3IgY29tcG9uZW50cyBhbmQgZm9yIGVsZW1lbnRzXHJcbi8vXHQtIE1vdmVkIGRvZXNuJ3QgZXhpc3QgZm9yIGF0dHJpYnV0ZXNcclxuLy9cdC0gUmVuZGVyZWQgb25seSBleGlzdHMgZm9yIGNvbXBvbmVudHNcclxuZXhwb3J0IGVudW0gU3RhdHNBY3Rpb25cclxue1xyXG5cdEFkZGVkPSAxLFxyXG5cdERlbGV0ZWQgPSAyLFxyXG5cdFVwZGF0ZWQgPSAzLFxyXG5cdE1vdmVkID0gNCxcclxuXHRSZW5kZXJlZCA9IDUsXHJcbn1cclxuXHJcblxyXG5cclxuLy8gU3RvcmFnZSBmb3IgYSBudW1iZXIgb2YgZWFjaCBhY3Rpb24gdW5kZXIgYSBjYXRlZ29yeS5cclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5U3RhdHNcclxue1xyXG5cdGFkZGVkOiBudW1iZXIgPSAwO1xyXG5cdGRlbGV0ZWQ6IG51bWJlciA9IDA7XHJcblx0dXBkYXRlZDogbnVtYmVyID0gMDtcclxuXHRtb3ZlZDogbnVtYmVyID0gMDtcclxuXHRyZW5kZXJlZDogbnVtYmVyID0gMDtcclxuXHJcblx0cHVibGljIGhhc1NvbWVEYXRhKClcclxuXHR7XHJcblx0XHRyZXR1cm4gdGhpcy5hZGRlZCB8fCB0aGlzLmRlbGV0ZWQgfHwgdGhpcy51cGRhdGVkIHx8IHRoaXMubW92ZWQgfHwgdGhpcy5yZW5kZXJlZDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIERldGFpbGVkU3RhdHNcclxue1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRzdGFydFRpbWU6IG51bWJlcjtcclxuXHRkdXJhdGlvbjogbnVtYmVyO1xyXG5cdGNvbXA6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cdGVsbTogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0dGV4dDogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0YXR0cjogQ2F0ZWdvcnlTdGF0cyA9IG5ldyBDYXRlZ29yeVN0YXRzKCk7XHJcblx0ZXZlbnQ6IENhdGVnb3J5U3RhdHMgPSBuZXcgQ2F0ZWdvcnlTdGF0cygpO1xyXG5cclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yKCBuYW1lOiBzdHJpbmcpXHJcblx0e1xyXG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0YXJ0KClcclxuXHR7XHJcblx0XHR0aGlzLmR1cmF0aW9uID0gMC4wO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0cHVibGljIHN0b3AoIHByaW50U3VtbWFyeTogYm9vbGVhbiA9IHRydWUpXHJcblx0e1xyXG5cdFx0dGhpcy5kdXJhdGlvbiA9IHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5zdGFydFRpbWU7XHJcblxyXG5cdFx0aWYgKHByaW50U3VtbWFyeSlcclxuXHRcdFx0Y29uc29sZS5sb2coIHRoaXMudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIGluY3JlbWVudHMgdGhlbnVtYmVyIG9mIHRpbWVzIHRoZSBnaXZlbiBhY3Rpb24gd2FzIHBlcmZvcm1lZCBvbiBhbiBlbnRpdHkgb2YgYSBnaXZlblxyXG5cdC8vIGNhdGVnb3J5LiBJZiB0aGUgZW50aXR5IGlzIGEgRE9NIGVudGl0eSAoYXMgb3Bwb3NlZCB0byBhIGNvbXBvbmVudCksIHRoZW4gdGhlIERPTVxyXG5cdC8vIHRvdGFsIG51bWJlciBpcyBhbHNvIGluY3JlbWVudGVkLlxyXG5cdHB1YmxpYyBsb2coIGNhdGVnb3J5OiBTdGF0c0NhdGVnb3J5LCBhY3Rpb246IFN0YXRzQWN0aW9uKTogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBjYXRlZ29yeVN0YXRzOiBDYXRlZ29yeVN0YXRzO1xyXG5cdFx0c3dpdGNoKCBjYXRlZ29yeSlcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkNvbXA6IGNhdGVnb3J5U3RhdHMgPSB0aGlzLmNvbXA7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuRWxtOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5lbG07IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQ2F0ZWdvcnkuVGV4dDogY2F0ZWdvcnlTdGF0cyA9IHRoaXMudGV4dDsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNDYXRlZ29yeS5BdHRyOiBjYXRlZ29yeVN0YXRzID0gdGhpcy5hdHRyOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0NhdGVnb3J5LkV2ZW50OiBjYXRlZ29yeVN0YXRzID0gdGhpcy5ldmVudDsgYnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6IHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzd2l0Y2goIGFjdGlvbilcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5BZGRlZDogY2F0ZWdvcnlTdGF0cy5hZGRlZCsrOyBicmVhaztcclxuXHRcdFx0Y2FzZSBTdGF0c0FjdGlvbi5EZWxldGVkOiBjYXRlZ29yeVN0YXRzLmRlbGV0ZWQrKzsgYnJlYWs7XHJcblx0XHRcdGNhc2UgU3RhdHNBY3Rpb24uVXBkYXRlZDogY2F0ZWdvcnlTdGF0cy51cGRhdGVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLk1vdmVkOiBjYXRlZ29yeVN0YXRzLm1vdmVkKys7IGJyZWFrO1xyXG5cdFx0XHRjYXNlIFN0YXRzQWN0aW9uLlJlbmRlcmVkOiBjYXRlZ29yeVN0YXRzLnJlbmRlcmVkKys7IGJyZWFrO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBgJHt0aGlzLm5hbWV9ICR7dGhpcy5kdXJhdGlvbi50b0ZpeGVkKDIpfW1zIGAgK1xyXG5cdFx0XHRcdHRoaXMuZ2V0Q29tcFN0cmluZygpICsgdGhpcy5nZXRFbG1TdHJpbmcoKSArIHRoaXMuZ2V0VGV4dFN0cmluZygpICtcclxuXHRcdFx0XHR0aGlzLmdldEF0dHJTdHJpbmcoKSArIHRoaXMuZ2V0RXZlbnRTdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb21wb25lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0Q29tcFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMuY29tcC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy5jb21wLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmNvbXAuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIlxcdTI3MEVcIiwgdGhpcy5jb21wLnJlbmRlcmVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmNvbXAubW92ZWQpO1xyXG5cclxuXHRcdHJldHVybiBgY29tcCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRleHR1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVsZW1lbnQgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RWxtU3RyaW5nKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdGlmICghdGhpcy5lbG0uaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuZWxtLmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmVsbS5kZWxldGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiXFx1MjFGRlwiLCB0aGlzLmVsbS5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBlbG0oJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB0ZXh0IG5vZGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0VGV4dFN0cmluZygpOiBzdHJpbmdcclxuXHR7XHJcblx0XHRpZiAoIXRoaXMudGV4dC5oYXNTb21lRGF0YSgpKVxyXG5cdFx0XHRyZXR1cm4gXCJcIjtcclxuXHJcblx0XHRsZXQgcyA9IFwiXCI7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIitcIiwgdGhpcy50ZXh0LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLnRleHQuZGVsZXRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIipcIiwgdGhpcy50ZXh0LnVwZGF0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCJcXHUyMUZGXCIsIHRoaXMudGV4dC5tb3ZlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGB0ZXh0KCR7c30pIGA7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGV4dHVhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgYXR0cmlidXRlIHN0YXRpc3RpY3MuXHJcblx0cHVibGljIGdldEF0dHJTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmF0dHIuaGFzU29tZURhdGEoKSlcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblxyXG5cdFx0bGV0IHMgPSBcIlwiO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIrXCIsIHRoaXMuYXR0ci5hZGRlZCk7XHJcblx0XHRzICs9IHRoaXMuZ2V0VmFsU3RyaW5nKCBzLCBcIi1cIiwgdGhpcy5hdHRyLmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuYXR0ci51cGRhdGVkKTtcclxuXHJcblx0XHRyZXR1cm4gYGF0dHIoJHtzfSkgYDtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gUmV0dXJucyB0ZXh0dWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBhdHRyaWJ1dGUgc3RhdGlzdGljcy5cclxuXHRwdWJsaWMgZ2V0RXZlbnRTdHJpbmcoKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKCF0aGlzLmV2ZW50Lmhhc1NvbWVEYXRhKCkpXHJcblx0XHRcdHJldHVybiBcIlwiO1xyXG5cclxuXHRcdGxldCBzID0gXCJcIjtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiK1wiLCB0aGlzLmV2ZW50LmFkZGVkKTtcclxuXHRcdHMgKz0gdGhpcy5nZXRWYWxTdHJpbmcoIHMsIFwiLVwiLCB0aGlzLmV2ZW50LmRlbGV0ZWQpO1xyXG5cdFx0cyArPSB0aGlzLmdldFZhbFN0cmluZyggcywgXCIqXCIsIHRoaXMuZXZlbnQudXBkYXRlZCk7XHJcblxyXG5cdFx0cmV0dXJuIGBldmVudCgke3N9KSBgO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBBZGRzIHRoZSBnaXZlbiBzaWduIGFuZCB2YWx1ZSB0byB0aGUgZ2l2ZW4gc3RyaW5nIGJ1dCBvbmx5IGlmIHRoZSB2YWx1ZSBpcyBub24temVyby5cclxuXHRwcml2YXRlIGdldFZhbFN0cmluZyggczogc3RyaW5nLCBzaWduOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0aWYgKHZhbCA9PT0gMClcclxuXHRcdFx0cmV0dXJuIFwiXCI7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAocy5sZW5ndGggPiAwID8gXCIgXCIgOiBcIlwiKSArIHNpZ24gKyB2YWw7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgc3RhdHM6IERldGFpbGVkU3RhdHM7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vXHJcbi8vIFRoZSBTdmdFbG1JbmZvIHR5cGUgZGVmaW5lcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSBzcGVjaWZpZWQgZm9yIGFuIFNWRyBlbGVtZW50LiBUaGlzXHJcbi8vIGluZm9ybWF0aW9uIGNhbiBiZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxyXG4vL1x0LSBzdHJpbmcgLSBhY3R1YWwgbmFtZSB0byB1c2UgZm9yIHRoZSBlbGVtZW50LiBTb21lIFNWRyBlbGVtZW50cyBoYXZlIG5hbWVzIHRoYXQgY2Fubm90IGJlIHVzZWRcclxuLy9cdFx0aW4gSlggZGlyZWN0bHkgKGUuZy4gYmVjYXVzZSBvZiBoeXBoZW4gbGlrZSBpbiBcImNvbG9yLXByb2ZpbGVcIikuIEluIHRoaXMgY2FzZSB0aGUgc3RyaW5nXHJcbi8vXHRcdHZhbHVlIHdpbGwgYmUgdGhlIGFjdHVhbCBlbGVtZW50IG5hbWUgdG8gcHV0IGludG8gSFRNTCBkb2N1bWVudCwgd2hpbGUgSlNYIHdpbGwgYmUgdXNpbmdcclxuLy9cdFx0YSBjYW1lbC1mb3JtYXR0ZWQgbmFtZSAoZS5nLiBcImNvbG9yUHJvZmlsZVwiKS5cclxuLy9cdC0gYm9vbGVhbiAtIGZsYWcgaW5kaWNhdGluZyB0aGF0IHRoZSBlbGVtZW50IGlzIFwiZHVhbC1wdXJwb3NlXCI7IHRoYXQgaXMsIGVsZW1lbnQgd2l0aCB0aGlzXHJcbi8vXHRcdG5hbWUgY2FuIGJlIHVzZWQgYXMgZWl0aGVyIEhUTUwgb3IgU1ZHIGVsZW1lbnQuXHJcbi8vXHQtIHR1cGxlIG9mIHR3byBlbGVtZW50cyAtIHN0cmluZyBhbmQgYm9vbGVhbiBjb3JyZXNwb25kaW5nIHRvIHRoZSBhYm92ZSBpdGVtcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCB0eXBlIFN2Z0VsbUluZm8gPSBib29sZWFuIHwgc3RyaW5nIHwgW3N0cmluZywgYm9vbGVhbl07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vL1xyXG4vLyBUaGUgU3ZnRWxtcyBjbGFzcyBjb250YWlucyBwcm9wZXJ0aWVzIHdpdGggbmFtZXMgdXNlZCB0byBkZWZpbmUgU1ZHIGVsZW1lbnRzIGluIEpTWC4gV2hlblxyXG4vLyB3ZSBuZWVkIHRvIGNyZWF0ZSBhbiBlbGVtZW50LCB3ZSBsb29rdXAgdGhlIHByb3ZpZGVkIHRhZyBuYW1lIGFuZCBpZiB3ZSBmaW5kIGl0IGluIHRoaXMgY2xhc3NcclxuLy8gd2UgdXNlIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyB3aXRoIHRoZSBwcm9wZXIgU1ZHIG5hbWVzcGFjZSBzdHJpbmcuIFZhbHVlcyBvZiB0aGVzZSBwcm9wZXJ0aWVzXHJcbi8vIGFyZSBTdmdFbG1JbmZvIHZhbHVlcy5cclxuLy9cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmV4cG9ydCBjbGFzcyBTdmdFbG1zXHJcbntcclxuXHQvLyBOYW1lc3BhY2UgdXNlZCB0byBjcmVhdGUgU1ZHIGVsZW1lbnRzLlxyXG5cdHB1YmxpYyBzdGF0aWMgbmFtZXNwYWNlOiBzdHJpbmcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcblxyXG5cclxuXHJcblx0Ly8gUmVnaXN0ZXJzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBnaXZlbiBTVkcgdGFnXHJcblx0cHVibGljIHN0YXRpYyByZWdpc3RlciggdGFnTmFtZTogc3RyaW5nLCBpbmZvOiBTdmdFbG1JbmZvKTogdm9pZFxyXG5cdHtcclxuXHRcdFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV0gPSBpbmZvO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGdpdmVuIHRhZyBuYW1lIGNhbiBiZSB1c2VkIGFzIGFuIFNWRyBlbGVtZW50IG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBpc1N2Z0VsbSggdGFnTmFtZTogc3RyaW5nKTogYm9vbGVhblxyXG5cdHtcclxuXHRcdHJldHVybiB0YWdOYW1lIGluIFN2Z0VsbXMuaW5mb3M7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgaW5mb3JtYXRpb24gb2JqZWN0IGZvciB0aGUgZ2l2ZW4gdGFnIG5hbWUuXHJcblx0cHVibGljIHN0YXRpYyBnZXRTdmdFbG1JbmZvKCB0YWdOYW1lOiBzdHJpbmcpOiBTdmdFbG1JbmZvIHwgdW5kZWZpbmVkXHJcblx0e1xyXG5cdFx0cmV0dXJuIFN2Z0VsbXMuaW5mb3NbdGFnTmFtZV07XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIERldGVybWluZXMgd2hldGhlciB0aGUgZ2l2ZW4gaW5mb3JtYXRpb24gb2JqZWN0IGhhcyB0aGUgXCJkdWFsLXB1cnBvc2VcIiBmbGFnIHNldC5cclxuXHRwdWJsaWMgc3RhdGljIGlzRHVhbFB1cnBvc2UoIGluZm86IFN2Z0VsbUluZm8pOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoIGluZm8pKVxyXG5cdFx0XHRyZXR1cm4gKGluZm8gYXMgQXJyYXk8YW55PikubGVuZ3RoID4gMSA/IChpbmZvIGFzIFtzdHJpbmcsIGJvb2xlYW5dKVsxXSA6IGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gdHlwZW9mIGluZm8gPT09IFwic3RyaW5nXCIgPyBmYWxzZSA6IGluZm8gYXMgYm9vbGVhbjtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBnaXZlbiB0YWcgbmFtZSBpcyBhIFwiZHVhbC1wdXJwb3NlXCIgZWxlbWVudDsgdGhhdCBpcyBjYW4gYmUgZWl0aGVyXHJcblx0Ly8gSFRNTCBhbmQgU1ZHIGVsZW1lbnQuXHJcblx0cHVibGljIHN0YXRpYyBpc1RhZ0R1YWxQdXJwb3NlKCB0YWdOYW1lOiBzdHJpbmcpOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmlzRHVhbFB1cnBvc2UoIGluZm8pIDogZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdC8vIFJldHVybnMgdGhlIGFjdHVhbCBuYW1lIHRvIGJlIHVzZWQgYmFzZWQgb24gdGhlIGluZm9ybWF0aW9uIG9iamVjdCBhbmQgdGhlIHRhZyBuYW1lXHJcblx0cHVibGljIHN0YXRpYyBnZXRFbG1OYW1lKCBpbmZvOiBTdmdFbG1JbmZvLCB0YWdOYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWRcclxuXHR7XHJcblx0XHRpZiAoQXJyYXkuaXNBcnJheSggaW5mbykpXHJcblx0XHRcdHJldHVybiAoaW5mbyBhcyBBcnJheTxhbnk+KS5sZW5ndGggPiAwID8gKGluZm8gYXMgW3N0cmluZywgYm9vbGVhbl0pWzBdIDogdGFnTmFtZTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIHR5cGVvZiBpbmZvID09PSBcInN0cmluZ1wiID8gaW5mbyBhcyBzdHJpbmcgOiB0YWdOYW1lO1xyXG5cdH1cclxuXHJcblxyXG5cclxuXHQvLyBSZXR1cm5zIHRoZSBhY3R1YWwgbmFtZSB0byBiZSB1c2VkIHRoZSBnaXZlbiB0YWcgbmFtZVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0RWxtTmFtZUZvclRhZyggdGFnTmFtZTogc3RyaW5nKTogc3RyaW5nXHJcblx0e1xyXG5cdFx0bGV0IGluZm86IFN2Z0VsbUluZm8gPSBTdmdFbG1zLmluZm9zW3RhZ05hbWVdO1xyXG5cdFx0cmV0dXJuIGluZm8gPyBTdmdFbG1zLmdldEVsbU5hbWUoIGluZm8sIHRhZ05hbWUpIDogdGFnTmFtZTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Ly8gT2JqZWN0IHRoYXQgbWFwcyBTVkcgZWxlbWVudCBuYW1lcyB0byBTdmdFbG1JbmZvLlxyXG5cdHByaXZhdGUgc3RhdGljIGluZm9zOiB7W2VsbU5hbWU6c3RyaW5nXTogU3ZnRWxtSW5mb30gPVxyXG5cdHtcclxuXHRcdHN2ZzogZmFsc2UsXHJcblxyXG5cdFx0YTogdHJ1ZSxcclxuXHRcdGFuaW1hdGU6IGZhbHNlLFxyXG5cdFx0YW5pbWF0ZU1vdGlvbjogZmFsc2UsXHJcblx0XHRhbmltYXRlVHJhbnNmb3JtOiBmYWxzZSxcclxuXHJcblx0XHRjaXJjbGU6IGZhbHNlLFxyXG5cdFx0Y2xpcFBhdGg6IGZhbHNlLFxyXG5cdFx0Y29sb3JQcm9maWxlOiBcImNvbG9yLXByb2ZpbGVcIixcclxuXHJcblx0XHRkZWZzOiBmYWxzZSxcclxuXHRcdGRlc2M6IGZhbHNlLFxyXG5cdFx0ZGlzY2FyZDogZmFsc2UsXHJcblxyXG5cdFx0ZWxsaXBzZTogZmFsc2UsXHJcblxyXG5cdFx0ZmVCbGVuZDogZmFsc2UsXHJcblx0XHRmZUNvbG9yTWF0cml4OiBmYWxzZSxcclxuXHRcdGZlQ29tcG9uZW50VHJhbnNmZXI6IGZhbHNlLFxyXG5cdFx0ZmVDb21wb3NpdGU6IGZhbHNlLFxyXG5cdFx0ZmVDb252b2x2ZU1hdHJpeDogZmFsc2UsXHJcblx0XHRmZURpZmZ1c2VMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZURpc3BsYWNlbWVudE1hcDogZmFsc2UsXHJcblx0XHRmZURpc3RhbnRMaWdodDogZmFsc2UsXHJcblx0XHRmZURyb3BTaGFkb3c6IGZhbHNlLFxyXG5cdFx0ZmVGbG9vZDogZmFsc2UsXHJcblx0XHRmZUZ1bmNBOiBmYWxzZSxcclxuXHRcdGZlRnVuY0I6IGZhbHNlLFxyXG5cdFx0ZmVGdW5jRzogZmFsc2UsXHJcblx0XHRmZUZ1bmNSOiBmYWxzZSxcclxuXHRcdGZlR2F1c3NpYW5CbHVyOiBmYWxzZSxcclxuXHRcdGZlSW1hZ2U6IGZhbHNlLFxyXG5cdFx0ZmVNZXJnZTogZmFsc2UsXHJcblx0XHRmZU1lcmdlTm9kZTogZmFsc2UsXHJcblx0XHRmZU1vcnBob2xvZ3k6IGZhbHNlLFxyXG5cdFx0ZmVPZmZzZXQ6IGZhbHNlLFxyXG5cdFx0ZmVQb2ludExpZ2h0OiBmYWxzZSxcclxuXHRcdGZlU3BlY3VsYXJMaWdodGluZzogZmFsc2UsXHJcblx0XHRmZVNwb3RMaWdodDogZmFsc2UsXHJcblx0XHRmZVRpbGU6IGZhbHNlLFxyXG5cdFx0ZmVUdXJidWxlbmNlOiBmYWxzZSxcclxuXHRcdGZpbHRlcjogZmFsc2UsXHJcblx0XHRmb3JlaWduT2JqZWN0OiBmYWxzZSxcclxuXHJcblx0XHRnOiBmYWxzZSxcclxuXHJcblx0XHRoYXRjaDogZmFsc2UsXHJcblx0XHRoYXRjaHBhdGg6IGZhbHNlLFxyXG5cclxuXHRcdGltYWdlOiBmYWxzZSxcclxuXHJcblx0XHRsaW5lOiBmYWxzZSxcclxuXHRcdGxpbmVhckdyYWRpZW50OiBmYWxzZSxcclxuXHJcblx0XHRtYXJrZXI6IGZhbHNlLFxyXG5cdFx0bWFzazogZmFsc2UsXHJcblx0XHRtZXRhZGF0YTogZmFsc2UsXHJcblx0XHRtcGF0aDogZmFsc2UsXHJcblxyXG5cdFx0cGF0aDogZmFsc2UsXHJcblx0XHRwYXR0ZXJuOiBmYWxzZSxcclxuXHRcdHBvbHlnb246IGZhbHNlLFxyXG5cdFx0cG9seWxpbmU6IGZhbHNlLFxyXG5cclxuXHRcdHJhZGlhbEdyYWRpZW50OiBmYWxzZSxcclxuXHRcdHJlY3Q6IGZhbHNlLFxyXG5cclxuXHRcdHNjcmlwdDogdHJ1ZSxcclxuXHRcdHNldDogZmFsc2UsXHJcblx0XHRzb2xpZGNvbG9yOiBmYWxzZSxcclxuXHRcdHN0b3A6IGZhbHNlLFxyXG5cdFx0c3R5bGU6IHRydWUsXHJcblx0XHRzd2l0Y2g6IGZhbHNlLFxyXG5cdFx0c3ltYm9sOiBmYWxzZSxcclxuXHJcblx0XHR0ZXh0OiBmYWxzZSxcclxuXHRcdHRleHRQYXRoOiBmYWxzZSxcclxuXHRcdHRpdGxlOiB0cnVlLFxyXG5cdFx0dGV4dFNwYW46IGZhbHNlLFxyXG5cclxuXHRcdHVzZTogZmFsc2UsXHJcblxyXG5cdFx0dmlldzogZmFsc2UsXHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIG1pbSBmcm9tIFwiLi4vYXBpL21pbVwiXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ29tcGFyZSggbzE6IGFueSwgbzI6IGFueSk6IGJvb2xlYW5cclxue1xyXG5cdGlmIChvMSA9PT0gbzIpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsICYmIG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRlbHNlIGlmIChvMSA9PSBudWxsIHx8IG8yID09IG51bGwpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xICE9PSB0eXBlb2YgbzIpXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0ZWxzZSBpZiAodHlwZW9mIG8xID09PSBcIm9iamVjdFwiKVxyXG5cdHtcclxuXHRcdGZvciggbGV0IHAgaW4gbzEpXHJcblx0XHR7XHJcblx0XHRcdGlmICghZGVlcENvbXBhcmUoIG8xW3BdLCBvMltwXSkpXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciggbGV0IHAgaW4gbzIpXHJcblx0XHR7XHJcblx0XHRcdGlmICghKHAgaW4gbzEpKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvMSkgIT09IEFycmF5LmlzQXJyYXkobzIpKVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdGVsc2UgaWYgKEFycmF5LmlzQXJyYXkobzEpKVxyXG5cdHtcclxuXHRcdGlmIChvMS5sZW5ndGggIT09IG8yLmxlbmd0aClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRmb3IoIGxldCBpID0gMCwgbGVuID0gbzEubGVuZ3RoOyBpIDwgbGVuOyBpKyspXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAoIWRlZXBDb21wYXJlKCBvMVtpXSwgbzJbaV0pKVxyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHQvLyB3ZSBhcmUgaGVyZSBpZiB0aGVzZSBhcmUgc3RyaW5ncywgbnVtYmVycywgYm9vbGVhbnMgb3IgZnVuY3Rpb25zIGFuZCB0aGV5IGFyZSBkaWZmZXJlbnRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoT2JqZWN0KCBvOiBhbnkpOiBudW1iZXJcclxue1xyXG5cdGlmIChvID09PSB1bmRlZmluZWQpXHJcblx0XHRyZXR1cm4gMDtcclxuXHRlbHNlIGlmIChvID09PSBudWxsKVxyXG5cdFx0cmV0dXJuIDE7XHJcblx0ZWxzZSBpZiAoaXNOYU4oMCkpXHJcblx0XHRyZXR1cm4gMjtcclxuXHRlbHNlIGlmIChvID09PSB0cnVlKVxyXG5cdFx0cmV0dXJuIDM7XHJcblx0ZWxzZSBpZiAobyA9PT0gZmFsc2UpXHJcblx0XHRyZXR1cm4gNDtcclxuXHJcblx0bGV0IGggPSAxMDtcclxuXHJcblx0aWYgKHR5cGVvZiBvID09PSBcIm51bWJlclwiKVxyXG5cdFx0cmV0dXJuIDEwICsgbztcclxuXHRlbHNlIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdHJldHVybiBoYXNoU3RyaW5nKCBvKTtcclxuXHRlbHNlIGlmICh0eXBlb2YgbyA9PT0gXCJmdW5jdGlvblwiKVxyXG5cdFx0cmV0dXJuIGhhc2hTdHJpbmcoIG8ubmFtZSk7XHJcblx0ZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvKSlcclxuXHR7XHJcblx0XHRsZXQgbGVuID0gby5sZW5ndGg7XHJcblx0XHRsZXQgaCA9IDEwICsgbGVuO1xyXG5cdFx0Zm9yKCBsZXQgaSA9IDA7IGkgPCBsZW47IGkrKylcclxuXHRcdFx0IGggKz0gaSArIGhhc2hPYmplY3QoIG9baV0pO1xyXG5cdFx0cmV0dXJuIGg7XHJcblx0fVxyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRsZXQgaCA9IDEwO1xyXG5cdFx0Zm9yKCBsZXQgcCBpbiBvKVxyXG5cdFx0XHRoICs9IGhhc2hTdHJpbmcocCkgKyBoYXNoT2JqZWN0KG9bcF0pO1xyXG5cdFx0cmV0dXJuIGg7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNoU3RyaW5nKCBzOiBzdHJpbmcpOiBudW1iZXJcclxue1xyXG5cdGlmICghcylcclxuXHRcdHJldHVybiA1O1xyXG5cclxuXHRsZXQgbGVuID0gcy5sZW5ndGg7XHJcblx0bGV0IGggPSAxMCArIGxlbjtcclxuXHRmb3IoIGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKVxyXG5cdFx0aCArPSBzLmNoYXJDb2RlQXQoaSk7XHJcblx0cmV0dXJuIGg7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBjbGFzcyBwcm9wZXJ0aWVzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4vLyByZXR1cm5zIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCAtIGlmIGFsbCBjbGFzc05hbWVzIHdlcmUgdW5kZWZpbmVkLlxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDbGFzc2VzKCAuLi5jbGFzc05hbWVzOiAoc3RyaW5nIHwgc3RyaW5nW10pW10pOiBzdHJpbmdcclxue1xyXG5cdGxldCByZXNDbGFzc05hbWU6IHN0cmluZztcclxuXHJcblx0Zm9yKCBsZXQgY2xhc3NOYW1lIG9mIGNsYXNzTmFtZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFjbGFzc05hbWUpXHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cclxuXHRcdC8vIHBhcnNlIHRoZSBjbGFzcyBpZiBpdCBpcyBzcGVjaWZpZWQgYXMgYSBzdHJpbmdcclxuXHRcdGxldCBjbGFzc05hbWVBc1N0cmluZzogc3RyaW5nID0gdHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIlxyXG5cdFx0XHRcdD8gY2xhc3NOYW1lIGFzIHN0cmluZ1xyXG5cdFx0XHRcdDogKGNsYXNzTmFtZSBhcyBzdHJpbmdbXSkuam9pbiggXCIgXCIpO1xyXG5cclxuXHRcdGlmIChyZXNDbGFzc05hbWUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0cmVzQ2xhc3NOYW1lID0gXCJcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmVzQ2xhc3NOYW1lICs9IFwiIFwiO1xyXG5cclxuXHRcdHJlc0NsYXNzTmFtZSArPSBjbGFzc05hbWVBc1N0cmluZztcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXNDbGFzc05hbWU7XHJcbn1cclxuXHJcblxyXG5cclxuLy8gQ29tYmluZXMgYXJiaXRyYXJ5IG51bWJlciBvZiBzdHlsZSBvYmplY3RzIG1lcmdpbmcgbGF0ZXIgaW50byB0aGUgZWFybGllciBvbmVzLiBUaGlzIG1ldGhvZFxyXG4vLyBhbHdheXMgcmV0dXJucyBhbiBvYmplY3QgLSBldmVuIGlmIGVtcHR5XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlcyggLi4uc3R5bGVzOiBtaW0uU3R5bGVQcm9wVHlwZVtdKTogbWltLlN0eWxlUHJvcFR5cGVcclxue1xyXG5cdC8vIGNyZWF0ZSBhbiBlbXB0eSBvYmplY3QgZm9yIGFjY3VtdWxhdGluZyBzdHlsZSBwcm9wZXJ0aWVzXHJcblx0bGV0IHJlc1N0eWxlOiBtaW0uU3R5bGVQcm9wVHlwZSA9IHt9O1xyXG5cdG1lcmdlU3R5bGVzVG8oIHJlc1N0eWxlLCAuLi5zdHlsZXMpO1xyXG5cdHJldHVybiByZXNTdHlsZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIHN0eWxlIG9iamVjdHMgbWVyZ2luZyBsYXRlciBpbnRvIHRoZSBmaXJzdCBvbmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVN0eWxlc1RvKCByZXNTdHlsZTogbWltLlN0eWxlUHJvcFR5cGUsIC4uLnN0eWxlczogKG1pbS5TdHlsZVByb3BUeXBlIHwgc3RyaW5nKVtdICk6IHZvaWRcclxue1xyXG5cdGZvciggbGV0IHN0eWxlIG9mIHN0eWxlcylcclxuXHR7XHJcblx0XHRpZiAoIXN0eWxlKVxyXG5cdFx0XHRjb250aW51ZTtcclxuXHJcblx0XHQvLyBwYXJzZSB0aGUgc3R5bGUgaWYgaXQgaXMgc3BlY2lmaWVkIGFzIGEgc3RyaW5nXHJcblx0XHRsZXQgc3R5bGVPYmo6IG1pbS5TdHlsZVByb3BUeXBlID0gdHlwZW9mIHN0eWxlID09PSBcIm9iamVjdFwiXHJcblx0XHRcdFx0PyBzdHlsZSBhcyBtaW0uU3R5bGVQcm9wVHlwZVxyXG5cdFx0XHRcdDogcGFyc2VTdHlsZVN0cmluZyggc3R5bGUgYXMgc3RyaW5nKTtcclxuXHJcblx0XHQvLyBjb3B5IGFsbCBwcm9wZXJ0aWVzIGRlZmluZWQgaW4gdGVoIGN1cnJlbnQgc3R5bGUgb2JqZWN0IHRvIG91ciByZXN1bHRhbnQgb2JqZWN0XHRcdFx0XHJcblx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzdHlsZU9iailcclxuXHRcdFx0cmVzU3R5bGVbcHJvcE5hbWVdID0gc3R5bGVPYmpbcHJvcE5hbWVdO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBQYXJzZXMgdGhlIGdpdmVuIHN0eWxlIHN0cmluZyBpbnRvIHRoZSBTdHlsZSBvYmplY3QuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0eWxlU3RyaW5nKCBzOiBzdHJpbmcpOiBtaW0uU3R5bGVQcm9wVHlwZVxyXG57XHJcblx0aWYgKCFzKVxyXG5cdFx0cmV0dXJuIHt9O1xyXG5cclxuXHRsZXQgcmV0U3R5bGU6IG1pbS5TdHlsZVByb3BUeXBlID0ge307XHJcblxyXG5cdGxldCBlbG1zOiBzdHJpbmdbXSA9IHMuc3BsaXQoXCI7XCIpO1xyXG5cdGZvciggbGV0IGVsbSBvZiBlbG1zKVxyXG5cdHtcclxuXHRcdGxldCBwYWlyOiBzdHJpbmdbXSA9IGVsbS5zcGxpdCggXCI6XCIpO1xyXG5cdFx0aWYgKCFwYWlyIHx8IHBhaXIubGVuZ3RoID09PSAwIHx8IHBhaXIubGVuZ3RoID4gMilcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0cmV0U3R5bGVbZGFzaFRvQ2FtZWwoIHBhaXJbMF0udHJpbSgpKV0gPSBwYWlyWzFdLnRyaW0oKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXRTdHlsZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb252ZXJ0cyBuYW1lcyB3aXRoIGRhc2hlcyBpbnRvIG5hbWVzIGluIGNhbWVsQ2FzZSwgd2hlcmUgZXZlcnkgY2hhcmFjdGVyIGFmdGVyIGEgZGFzaCBpc1xyXG4vLyBjYXBpdGFsaXplZCBhbmQgZGFzaGVzIGFyZSByZW1vdmVkLlxyXG5leHBvcnQgZnVuY3Rpb24gZGFzaFRvQ2FtZWwoIGRhc2g6IHN0cmluZyk6IHN0cmluZ1xyXG57XHJcblx0aWYgKCFkYXNoKVxyXG5cdFx0cmV0dXJuIGRhc2g7XHJcblxyXG5cdGxldCBjYW1lbDogc3RyaW5nO1xyXG5cdGxldCBpbmRleDogbnVtYmVyID0gLTE7XHJcblx0bGV0IG5leHRJbmRleFRvQ29weUZyb206IG51bWJlciA9IDA7XHJcblx0d2hpbGUoIChpbmRleCA9IGRhc2guaW5kZXhPZiggXCItXCIsIGluZGV4ICsgMSkpID49IDApXHJcblx0e1xyXG5cdFx0aWYgKGNhbWVsID09PSB1bmRlZmluZWQpXHJcblx0XHRcdGNhbWVsID0gXCJcIjtcclxuXHJcblx0XHRjYW1lbCArPSBkYXNoLnN1YnN0ciggbmV4dEluZGV4VG9Db3B5RnJvbSwgaW5kZXggLSBuZXh0SW5kZXhUb0NvcHlGcm9tKTtcclxuXHRcdGlmIChpbmRleCAhPSBkYXNoLmxlbmd0aCAtIDEpXHJcblx0XHRcdGNhbWVsICs9IGRhc2hbaW5kZXggKyAxXS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuXHRcdG5leHRJbmRleFRvQ29weUZyb20gPSBpbmRleCArIDI7XHJcblx0fVxyXG5cclxuXHRpZiAoY2FtZWwgPT09IHVuZGVmaW5lZClcclxuXHRcdHJldHVybiBkYXNoO1xyXG5cdGVsc2VcclxuXHR7XHJcblx0XHRpZiAobmV4dEluZGV4VG9Db3B5RnJvbSA8IGRhc2gubGVuZ3RoKVxyXG5cdFx0XHRjYW1lbCArPSBkYXNoLnN1YnN0ciggbmV4dEluZGV4VG9Db3B5RnJvbSk7XHJcblxyXG5cdFx0cmV0dXJuIGNhbWVsO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU2xpY2VzKCAuLi5zbGljZXM6IG1pbS5TbGljZVtdKTogbWltLlNsaWNlXHJcbntcclxuXHRsZXQgcmVzU2xpY2U6IG1pbS5TbGljZSA9IHt9O1xyXG5cdG1lcmdlU2xpY2VzVG8oIHJlc1NsaWNlLCAuLi5zbGljZXMpO1xyXG5cdHJldHVybiByZXNTbGljZTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBDb21iaW5lcyBhcmJpdHJhcnkgbnVtYmVyIG9mIFNsaWNlIG9iamVjdHMgbWVyZ2luZyBjbGFzc2VzLCBzdHlsZXMsIHByb3BlcnRpZXMgYW5kIGNvbnRlbnRcclxuLy8gaW50byB0aGUgZ2l2ZW4gcmVzdWx0YW50IHNsaWNlLlxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTbGljZXNUbyggcmVzU2xpY2U6IG1pbS5TbGljZSwgLi4uc2xpY2VzOiBtaW0uU2xpY2VbXSk6IHZvaWRcclxue1xyXG5cdGlmIChyZXNTbGljZSA9PT0gdW5kZWZpbmVkIHx8IHJlc1NsaWNlID09PSBudWxsKVxyXG5cdFx0cmV0dXJuO1xyXG5cclxuXHRmb3IoIGxldCBzbGljZSBvZiBzbGljZXMpXHJcblx0e1xyXG5cdFx0aWYgKCFzbGljZSlcclxuXHRcdFx0Y29udGludWU7XHJcblxyXG5cdFx0aWYgKHNsaWNlLnN0eWxlKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2Uuc3R5bGUgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0XHRyZXNTbGljZS5zdHlsZSA9IHt9O1xyXG5cclxuXHRcdFx0bWVyZ2VTdHlsZXNUbyggcmVzU2xpY2Uuc3R5bGUsIHNsaWNlLnN0eWxlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UuY2xhc3NOYW1lKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAocmVzU2xpY2UuY2xhc3NOYW1lID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UuY2xhc3NOYW1lID0gXCJcIjtcclxuXHJcblx0XHRcdHJlc1NsaWNlLmNsYXNzTmFtZSA9IG1lcmdlQ2xhc3NlcyggcmVzU2xpY2UuY2xhc3NOYW1lIGFzIHN0cmluZywgc2xpY2UuY2xhc3NOYW1lKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc2xpY2UucHJvcHMpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5wcm9wcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRcdHJlc1NsaWNlLnByb3BzID0ge307XHJcblxyXG5cdFx0XHRmb3IoIGxldCBwcm9wTmFtZSBpbiBzbGljZS5wcm9wcylcclxuXHRcdFx0XHRyZXNTbGljZVtwcm9wTmFtZV0gPSBzbGljZVtwcm9wTmFtZV07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHNsaWNlLmNvbnRlbnQpXHJcblx0XHR7XHJcblx0XHRcdGlmIChyZXNTbGljZS5jb250ZW50ID09PSB1bmRlZmluZWQpXHJcblx0XHRcdFx0cmVzU2xpY2UuY29udGVudCA9IHNsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmICghQXJyYXkuaXNBcnJheSggcmVzU2xpY2UuY29udGVudCkpXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0bGV0IG9sZENvbnRlbnQ6IGFueSA9IHJlc1NsaWNlLmNvbnRlbnQ7XHJcblx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50ID0gW107XHJcblx0XHRcdFx0XHRyZXNTbGljZS5jb250ZW50LnB1c2goIG9sZENvbnRlbnQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmVzU2xpY2UuY29udGVudC5wdXNoKCBzbGljZS5jb250ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9